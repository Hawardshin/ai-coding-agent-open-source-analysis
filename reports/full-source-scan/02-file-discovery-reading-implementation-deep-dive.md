# Full Source Scan Deep Dive: 필요한 파일을 찾고 읽는 구현 로직

작성일: 2026-06-18

이 문서는 기존 `reports/full-source-scan-research-summary-2026-06-18.md`의 후속 심화본이다. 초점은 "전체 소스코드를 다 넣는가?"가 아니라 "사용자의 말에서 어떤 신호를 뽑아 어떤 파일 후보를 만들고, 그중 무엇을 어느 범위로 읽는가?"이다.

조사 기준은 로컬에 클론된 실제 구현체다. 핵심 결론은 다음과 같다.

- 현대 코딩 에이전트는 대체로 전체 파일 본문을 한 번에 넣지 않는다.
- 실제 구현은 `path search`, `lexical search`, `symbol/repo map`, `chunk/vector index`, `recently-read memory`, `ignore/security filter`, `token budget slicing`의 조합이다.
- 가장 안정적인 설계는 한 계층만 쓰지 않는다. Codex/Cline/Gemini/Qwen 계열은 즉석 도구 호출을 중심으로 하고, Aider/Continue/Roo/Codanna 계열은 미리 계산한 repo map 또는 index를 붙인다.

## 1. 구현별 핵심 차이

| 구현 | 주 탐색 단위 | 인덱스 | 읽기 단위 | 핵심 강점 | 핵심 약점 |
| --- | --- | --- | --- | --- | --- |
| OpenAI Codex | 파일 경로 fuzzy search, shell/rg/read 도구 | path fuzzy session 중심 | 모델이 도구로 선택 파일/라인 읽기 | 빠르고 단순, gitignore 존중, UI 반응성 좋음 | semantic repo map은 기본 경로 검색에 없음 |
| Aider | symbol def/ref graph | tree-sitter tags + PageRank repo map | token budget 내 skeleton/context | 코드 구조를 압축해서 LLM에 선제 제공 | 언어별 query 품질과 캐시 품질에 좌우 |
| Continue | file walk -> chunk -> FTS/vector | SQLite FTS5 + LanceDB + chunk table | chunk with start/end line | BM25/embedding 하이브리드, 증분 갱신 | 인덱싱 비용/락/임베딩 설정 필요 |
| Roo Code | rg/list/fuzzy + Qdrant code index | 파일 해시 cache + Tree-sitter/Markdown + vector store | code block segment | 즉석 검색과 semantic index 병행 | Qdrant/embedding 설정 의존 |
| Cline | host IDE index -> rg fallback, tree-sitter definition list | host index 가능, 자체 전체 semantic index는 제한적 | file/folder mention, search snippets, definition names | 열린 탭/IDE 인덱스 활용, fallback 견고 | 대규모 semantic retrieval은 별도 계층 아님 |
| Gemini CLI | read_file/glob/grep/read_many_files, recursive file search | file search cache/fzf 옵션 | line range, truncated read | 도구 스키마와 파일 필터가 명확 | repo-level semantic ranking은 약함 |
| Qwen Code | Gemini식 도구 + read cache + post-compaction restore | fileReadCache, recent file restoration | full/partial read, reference-only large file | 읽은 파일 기억과 read-before-write 안전성 | search ranking 자체는 도구 호출 의존 |
| Codanna | source walker -> parse -> Tantivy/vector/relationships | symbol, full-text, vector, relation graph | symbol context and relationships | 코드 인덱서로 가장 구조적 | 에이전트 내장보다 외부 MCP/indexer 성격 |
| Sourcebot | Zoekt-style code search | repository index/search contexts | search result snippets | 대형 코드 검색 제품형 | LLM 읽기 정책은 별도 agent가 결정 |
| Potpie | code index + context graph engine | fff search, context graph, ingestion | graph/context records | 제품/조직 맥락까지 확장 | 코드 에이전트 단일 turn 독해와 다름 |

## 1.1 구현별 read/security gate 체크리스트

파일 후보를 잘 찾는 것만으로는 부족하다. 실제 에이전트 품질은 "읽어도 되는가, 얼마나 읽을 수 있는가, 읽은 사실을 어떻게 기억하는가"에서 갈린다.

| 구현 | 파일 읽기 gate | size/truncation 정책 | cache/incrementality | 주의점 |
| --- | --- | --- | --- | --- |
| Codex | exec-server `fs/readFile`, local FS abstraction | local file system은 대형 파일 read를 제한한다. 하위 조사 기준 512MiB 초과 거절 구현이 있음 | file-search session은 path stream/match cache 성격 | path fuzzy와 content read가 분리되어 있어 semantic 선택은 모델 루프에 의존 |
| Aider | repo map tag 추출 시 `io.read_text`, chat file은 별도 add/read-only 흐름 | repo map은 token budget binary search로 축약 | tags cache는 file mtime 기반 | 사용자가 실제 편집/읽기 대상으로 추가한 파일과 repo map skeleton을 구분해야 함 |
| Continue | IDE `readFile`, workspace path, ignore/security filter | index는 5MB 초과 skip, chunk는 1M chars 초과 skip. VS Code closed-file read는 별도 제한이 있음 | SQLite `tag_catalog`와 hash/cacheKey, IndexLock | IDE별 read 제한과 index chunk 제한이 다를 수 있음 |
| Roo Code | `ReadFileTool`이 `.rooignore`, binary check, line slice를 적용 | ripgrep은 300 results/500 chars line truncation. code index는 1MB 초과 skip | SHA file hash cache, Qdrant point 삭제/upsert | symlink follow와 Qdrant 설정 의존성 확인 필요 |
| Cline | read handler가 이미지/문서/텍스트를 분기, 승인/auto-approval과 연결 | 텍스트 대형 파일 거절/출력 truncation, rg 결과 0.25MB 제한 | SDK에는 `rg --files` TTL index 경로가 별도 존재 | VS Code app 경로와 SDK 경로가 달라 동작 차이 가능 |
| Gemini CLI | `validatePathAccess`, FileDiscovery filter, JIT context | `read_file` line range와 truncation 안내, `grep` timeout | recursive file search cache/fzf/file watcher 옵션 | `read_many_files`는 유용하지만 context 폭증 방지 필요 |
| Qwen Code | 허용 path, read cache, prior-read enforcement | post-compaction에서 큰 파일은 reference-only, binary는 skip | inode 기반 `FileReadCache`, `file_unchanged` fast-path | cache hit가 실제 history resident인지 따로 추적해야 함 |
| Codanna | enabled extension, `.codannaignore`, gitignore, parser registry | UTF-8 text read 전제, 별도 큰 size cap은 조사 범위에서 뚜렷하지 않음 | mtime/hash 기반 incremental pipeline | binary/large file 방어를 외부 policy로 보강하는 편이 안전 |
| Sourcebot | repository permission/filter, Git object read | Zoekt settings의 max file/trigram 제한 계열 | bare repo clone/fetch, revision index | file content는 `git show ref:path` 성격이라 branch/revision이 중요 |
| Potpie | sandbox/project parse, graph ingestion | binary extension/sample skip 후 UTF-8 lossy read | Neo4j/Qdrant graph artifacts | parse path의 size cap과 symlink follow 정책을 별도 점검해야 함 |

## 2. OpenAI Codex: path candidate selector와 읽기 루프의 분리

관련 파일:

- `sources/openai__codex/codex-rs/file-search/src/lib.rs`
- `sources/openai__codex/codex-rs/tui/src/file_search.rs`
- `sources/openai__codex/codex-rs/app-server/src/fuzzy_file_search.rs`
- `sources/openai__codex/codex-rs/tui/src/bottom_pane/chat_composer.rs`
- `sources/openai__codex/codex-rs/exec-server/src/server/file_system_handler.rs`
- `sources/openai__codex/codex-rs/exec-server/src/local_file_system.rs`

Codex의 `@파일` 검색은 repo semantic search가 아니라 path fuzzy search다. 구조는 두 worker로 나뉜다.

1. `walker_worker`
   - `ignore::WalkBuilder`로 검색 root들을 돈다.
   - hidden entry는 허용하고 symlink는 follow한다.
   - 기본은 `.gitignore`, global ignore, `.git/info/exclude`를 존중한다.
   - `require_git(true)`로 git context 밖의 상위 `.gitignore`가 전체 검색을 덮어버리는 문제를 막는다.
   - 발견한 path를 root 기준 relative path로 바꿔 `nucleo` injector에 밀어 넣는다.

2. `matcher_worker`
   - 사용자가 `@token`을 칠 때마다 `QueryUpdated` 이벤트를 받는다.
   - `nucleo.pattern.reparse(...)`로 fuzzy pattern을 갱신한다.
   - `tick`마다 상위 N개 match를 snapshot으로 만든다.
   - score 내림차순, path 오름차순으로 정렬 가능하다.
   - `compute_indices`가 켜지면 매칭 문자 위치도 계산해 UI highlight에 쓴다.

TUI에서는 `ChatComposer`가 현재 cursor의 `@token`을 추출하고 `AppEvent::StartFileSearch(query)`를 발생시킨다. `FileSearchManager`는 query가 비면 session을 drop하고, query가 있으면 `codex_file_search::create_session(...)`을 만들어 결과를 `AppEvent::FileSearchResult`로 보낸다.

구체 로직:

```text
cursor inside @token
  -> extract token without @
  -> AppEvent::StartFileSearch(query)
  -> FileSearchManager starts/updates FileSearchSession
  -> walker streams relative paths into nucleo
  -> matcher reparses query and emits top matches
  -> user selects path mention
  -> model still needs shell/read/search tools to inspect content
```

설계 의미:

- Codex는 파일명 후보 찾기를 매우 빠르고 상호작용적으로 만든다.
- 하지만 "이 이슈에 필요한 파일"을 자동으로 semantic ranking하는 계층은 이 path search 안에 없다.
- 실제 소스 읽기는 모델의 도구 사용 루프가 담당한다. 그래서 Codex식 설계의 본질은 "강한 도구 + 빠른 파일명 후보 UI + 모델의 반복 탐색"이다.
- exec-server의 file read 경로는 별도다. 따라서 path search의 match limit/thread 정책과 실제 파일 read의 크기/권한 제한은 따로 검증해야 한다.

## 3. Aider: tree-sitter def/ref graph와 PageRank repo map

관련 파일:

- `sources/Aider-AI__aider/aider/repomap.py`
- `sources/Aider-AI__aider/aider/coders/base_coder.py`

Aider의 repo map은 가장 명확한 "사용자 말과 소스 연결" 구현 중 하나다. 큰 흐름은 다음과 같다.

1. 파일별 tag 추출
   - 확장자에서 tree-sitter language를 찾는다.
   - 언어별 `.scm` query를 읽고 AST capture를 실행한다.
   - `name.definition.*`은 `def`, `name.reference.*`은 `ref`로 저장한다.
   - ref가 없는 언어/query에서는 Pygments token으로 `Token.Name`을 backfill한다.
   - tag cache는 file mtime과 함께 저장해 재스캔 비용을 줄인다.

2. 사용자 말과 현재 chat file로 personalization 구성
   - 현재 대화에 포함된 파일은 personalization 점수를 받는다.
   - 사용자가 언급한 filename은 점수를 받는다.
   - path component, basename, basename without extension이 언급된 identifier와 겹치면 점수를 받는다.

3. def/ref graph 생성
   - 노드: 파일.
   - edge: 어떤 파일이 identifier를 참조하고, 그 identifier를 다른 파일이 정의하면 referencer -> definer edge를 만든다.
   - snake/kebab/camel case이고 긴 identifier면 가중치를 높인다.
   - 사용자가 언급한 identifier면 가중치를 크게 높인다.
   - 너무 많은 파일에서 정의되는 identifier는 가중치를 낮춘다.
   - chat file에서 나온 ref는 더 크게 증폭한다.
   - reference count는 sqrt로 줄여 고빈도 단어가 지배하지 않게 한다.

4. PageRank
   - `networkx.pagerank(G, weight="weight", personalization=...)`를 실행한다.
   - source rank를 edge weight 비율로 정의별 rank에 분배한다.
   - chat file 자체는 결과에서 제외하고, 중요 def tag를 우선 출력한다.

5. token budget fitting
   - ranked tags 앞쪽부터 `to_tree(...)`로 tree context를 만든다.
   - token count가 목표 budget에 맞을 때까지 binary search로 포함 tag 수를 조절한다.
   - chat file이 없는 초기 상태에서는 더 큰 map budget을 허용한다.

구체 scoring 감각:

```text
for ident in definitions ∩ references:
  weight = 1
  if ident mentioned by user: weight *= 10
  if ident is long snake/kebab/camel: weight *= 10
  if ident startswith "_": weight *= 0.1
  if ident has >5 definers: weight *= 0.1
  for each referencer:
    if referencer is chat file: weight *= 50
    edge_weight = weight * sqrt(reference_count)
```

설계 의미:

- Aider는 "사용자가 언급한 단어"를 파일명뿐 아니라 symbol graph의 personalization으로 연결한다.
- 전체 본문 대신 "정의 주변 skeleton"을 넣어 context budget을 아낀다.
- 단점은 tree-sitter query 품질, 언어 지원, identifier naming에 크게 의존한다는 점이다.
- repo map은 보조 context이고, 실제 전체 파일 본문은 사용자가 add/read-only로 포함시킨 파일 경로에서 온다. 이 둘을 혼동하면 Aider가 모든 파일을 읽는다고 오해하기 쉽다.

## 4. Continue: walkDir, chunk table, SQLite FTS, LanceDB embedding

관련 파일:

- `sources/continuedev__continue/core/indexing/CodebaseIndexer.ts`
- `sources/continuedev__continue/core/indexing/walkDir.ts`
- `sources/continuedev__continue/core/indexing/ignore.ts`
- `sources/continuedev__continue/core/indexing/refreshIndex.ts`
- `sources/continuedev__continue/core/indexing/chunk/chunk.ts`
- `sources/continuedev__continue/core/indexing/chunk/basic.ts`
- `sources/continuedev__continue/core/indexing/FullTextSearchCodebaseIndex.ts`
- `sources/continuedev__continue/core/indexing/LanceDbIndex.ts`
- `sources/continuedev__continue/extensions/vscode/src/VsCodeIde.ts`

Continue는 "인덱싱된 codebase context provider" 구조다.

### 4.1 파일 발견

`walkDirAsync`는 DFS walker다.

- IDE의 `listDir`를 사용한다.
- 30초 listDir cache와 ignore cache를 둔다.
- 기본 ignore와 global `.continueignore`를 합친다.
- 각 directory마다 `.gitignore` context를 누적해 하위 entry를 필터링한다.
- symlink는 건너뛴다.
- option에 따라 file/dir/both, recursive 여부를 제어한다.

`ignore.ts`는 보안 파일을 강하게 제외한다. 예: `.env`, key/cert, DB, token, backup, cloud credential dir, `.ssh`, node_modules, build/dist/target/vendor/cache 등이다. 이 부분은 검색 품질뿐 아니라 prompt injection/secret leakage 방어다.

### 4.2 증분 계획

`refreshIndex.ts`는 SQLite에 `tag_catalog`, `global_cache`, `indexing_lock`을 만든다.

- 5MB 초과 파일은 인덱싱하지 않는다.
- 저장된 `(path, cacheKey, lastUpdated)`와 현재 file stats를 비교한다.
- 파일 수정 시간이 더 최신이면 실제 파일 내용을 읽어 hash를 계산한다.
- hash가 바뀌면 새 version compute, 이전 version delete/update를 계획한다.
- 새 파일은 동시 읽기 10개 제한으로 hash를 계산한다.
- multi-window SQLite write 충돌을 줄이려고 `IndexLock`을 둔다.

### 4.3 chunking

`chunkDocument`는 언어 지원 여부에 따라 갈린다.

- tree-sitter 지원 code file이면 `codeChunker`를 먼저 시도한다.
- CSS/HTML/JSON/TOML/YAML 등은 tree-sitter가 있어도 basic chunker를 쓴다.
- 실패하면 line 기반 `basicChunker`로 fallback한다.
- 1,000,000자 초과 파일, 빈 파일, basename에 `.`이 없는 파일은 chunk하지 않는다.
- `basicChunker`는 line별 token count를 계산하고 `maxChunkSize - 5`를 넘기기 전에 chunk를 끊는다.

### 4.4 full-text search

`FullTextSearchCodebaseIndex`는 SQLite FTS5 virtual table을 만든다.

- `fts(path, content, tokenize='trigram')`
- chunk table에서 해당 path/cacheKey의 chunk를 읽어 FTS row와 metadata를 넣는다.
- retrieve 시 `fts MATCH ?`, tag filter, optional path filter를 적용한다.
- `ORDER BY bm25(fts, pathWeightMultiplier)`로 정렬하고 threshold를 적용한다.
- 결과는 `filepath`, `startLine`, `endLine`, `content`, `digest`가 있는 chunk로 반환한다.

### 4.5 vector search

`LanceDbIndex`는 chunk를 embedding해서 LanceDB와 SQLite cache에 저장한다.

- query도 `basicChunker`로 첫 chunk만 embedding한다.
- tag별 Lance table에서 vector search를 수행한다.
- distance 오름차순으로 합쳐 top n을 고른다.
- SQLite cache에서 uuid에 해당하는 `path/startLine/endLine/contents`를 다시 읽어 chunk로 반환한다.

설계 의미:

- Continue는 BM25와 embedding을 모두 갖춘다.
- "필요 파일"을 파일 단위가 아니라 chunk 단위로 찾는다.
- branch/directory/artifact tag가 있어 다중 workspace와 index type을 나눌 수 있다.
- indexer의 skip limit, chunker의 skip limit, IDE readFile의 출력 limit은 서로 다르다. 검색 결과가 있다 해도 실제 readFile에서 더 작게 잘릴 수 있다.

## 5. Roo Code: rg 도구 + fuzzy path + Qdrant code block index

관련 파일:

- `sources/RooCodeInc__Roo-Code/src/services/ripgrep/index.ts`
- `sources/RooCodeInc__Roo-Code/src/services/search/file-search.ts`
- `sources/RooCodeInc__Roo-Code/src/services/glob/list-files.ts`
- `sources/RooCodeInc__Roo-Code/src/services/code-index/processors/scanner.ts`
- `sources/RooCodeInc__Roo-Code/src/services/code-index/processors/parser.ts`
- `sources/RooCodeInc__Roo-Code/src/services/code-index/search-service.ts`
- `sources/RooCodeInc__Roo-Code/src/services/code-index/vector-store/qdrant-client.ts`
- `sources/RooCodeInc__Roo-Code/src/core/tools/ReadFileTool.ts`

Roo는 세 계층이 함께 있다.

### 5.1 regex search

`regexSearchFiles`는 bundled VSCode ripgrep을 찾아 `--json -e <regex> --context 1`로 실행한다.

- stdout을 line-by-line JSON으로 파싱한다.
- match/context line을 file별로 묶는다.
- 최대 result 수와 line length를 제한한다.
- RooIgnoreController가 있으면 `.rooignore` 접근 권한을 한 번 더 필터링한다.

### 5.2 file/folder fuzzy search

`searchWorkspaceFiles`는 `rg --files --follow --hidden`으로 파일 목록을 얻고 parent directories를 함께 만든다.

- VSCode search 설정의 ignore 옵션을 반영한다.
- node_modules, .git, out, dist 등은 glob exclude한다.
- query가 있으면 `fzf`로 path + label을 검색한다.
- 짧은 경로를 tie-breaker로 둔다.

### 5.3 code index

`DirectoryScanner.scanDirectory`는 인덱싱 파이프라인이다.

1. `listFiles(directory, recursive=true, MAX_LIST_FILES_LIMIT_CODE_INDEX)`로 파일 목록을 얻는다.
2. `.rooignore`, ignored directory, supported extension을 적용한다.
3. file size가 `MAX_FILE_SIZE_BYTES`를 넘으면 skip한다.
4. VSCode fs로 파일을 읽고 sha256 hash를 계산한다.
5. cache hash와 같으면 skip한다.
6. `CodeParser.parseFile`로 code block을 만든다.
7. block content를 batch accumulator에 넣는다.
8. batch threshold에 도달하면 embedder로 embeddings를 만들고 Qdrant에 upsert한다.
9. 수정 파일은 upsert 전에 기존 points를 삭제한다.
10. 삭제된 파일은 cache에는 있는데 이번 scan에는 없으면 Qdrant point를 삭제한다.

`CodeParser`는 extension별 tree-sitter parser를 lazy-load한다.

- Markdown은 custom markdown parser를 쓴다.
- fallback chunking 대상 확장자는 line chunking을 쓴다.
- tree-sitter capture가 없고 파일이 충분히 크면 fallback chunking한다.
- capture node가 너무 크면 child node로 쪼개거나 line chunking한다.
- segment hash는 `filePath/start/end/content length/preview`로 만든다.

`CodeIndexSearchService`는 query embedding을 만들고 Qdrant vector search를 수행한다.

- feature enabled/configured, system state Indexed/Indexing 여부를 검사한다.
- directory prefix filter를 normalize한다.
- minScore/maxResults는 config에서 온다.

설계 의미:

- Roo는 "지금 grep으로 찾기"와 "미리 임베딩해 semantic block 찾기"를 모두 지원한다.
- code block 단위라 전체 파일보다 더 작고 의미 있는 읽기 조각을 준다.
- Qdrant와 embedding provider가 필요하므로 설정이 비어 있으면 grep/fuzzy path가 실질 fallback이다.
- `ReadFileTool` 계층은 `.rooignore`, binary, line slice, indentation mode 같은 실제 읽기 정책을 담당한다. 검색 결과가 곧 read 허용을 뜻하지 않는다.

## 6. Cline: host index 우선, ripgrep fallback, 열린 탭 boost

관련 파일:

- `sources/cline__cline/apps/vscode/src/services/search/file-search.ts`
- `sources/cline__cline/apps/vscode/src/services/ripgrep/index.ts`
- `sources/cline__cline/apps/vscode/src/services/glob/list-files.ts`
- `sources/cline__cline/apps/vscode/src/services/tree-sitter/index.ts`
- `sources/cline__cline/apps/vscode/src/core/task/tools/handlers/ReadFileToolHandler.ts`
- `sources/cline__cline/apps/vscode/src/integrations/misc/extract-text.ts`
- `sources/cline__cline/sdk/packages/core/src/services/workspace/file-indexer.ts`

Cline의 mention/file search는 IDE host index가 있으면 그것을 먼저 쓴다.

1. `executeHostIndexForFiles`
   - host bridge의 `searchWorkspaceItems` RPC를 호출한다.
   - JetBrains 같은 host가 native filename index를 제공할 수 있다.
   - unimplemented이면 정상 상태로 보고 조용히 ripgrep fallback한다.

2. `executeRipgrepForFiles`
   - bundled `rg`를 찾고 없으면 system `rg` fallback을 시도한다.
   - `--files --follow --hidden`으로 후보를 얻는다.
   - node_modules, .git, .github, out, dist, env, cache 등은 제외한다.
   - file path와 parent folder candidate를 함께 만든다.

3. active files boost
   - `HostProvider.window.getOpenTabs`로 열린 탭 경로를 얻는다.
   - workspace 내부 active file을 후보 리스트 앞에 합친다.
   - 이후 fuzzy search에서 사용자가 현재 보고 있던 파일이 강하게 노출된다.

4. fuzzy ranking
   - `label label path`를 selector로 써 filename 매칭을 path보다 더 중요하게 만든다.
   - gap이 적은 match를 tie-breaker로 둔다.
   - multi-root이면 workspace label을 붙인다.

`parseSourceCodeForDefinitionsTopLevel`은 top-level source file 최대 50개를 tree-sitter로 파싱해 definition line만 뽑는다. 이것은 "폴더를 읽을 때 전체 본문 대신 구조를 보여주는" 경량 repo map이다.

Cline의 recursive list는 globby를 BFS level-by-level로 쓴다.

- root/home directory listing은 막는다.
- `.gitignore`를 한 번에 전체 재귀 로드하지 않고, 들어가는 directory마다 incremental하게 읽는다.
- 이유는 nested ignored repo의 `.gitignore`를 전부 읽다가 V8 OOM이 나는 문제를 피하기 위해서다.
- 10초 timeout이면 partial results를 반환한다.

읽기 쪽은 search와 별도다. VS Code app의 read handler는 텍스트/이미지/문서 처리를 분기하고, 큰 텍스트 파일은 제한하거나 truncation한다. SDK 쪽에는 별도의 workspace file indexer가 있어 `rg --files` 결과를 TTL cache하는 경로가 있다. 즉 Cline을 평가할 때는 VS Code 확장 경로와 SDK 경로를 분리해야 한다.

## 7. Gemini CLI: 도구 스키마 중심의 발견/읽기

관련 파일:

- `sources/google-gemini__gemini-cli/packages/core/src/tools/read-file.ts`
- `sources/google-gemini__gemini-cli/packages/core/src/tools/glob.ts`
- `sources/google-gemini__gemini-cli/packages/core/src/tools/grep.ts`
- `sources/google-gemini__gemini-cli/packages/core/src/utils/filesearch/fileSearch.ts`

Gemini CLI는 repo-wide semantic index보다 도구 설계가 핵심이다.

`read_file`:

- target dir 기준 path를 resolve한다.
- workspace access policy를 검사한다.
- `start_line`, `end_line`으로 line-range read를 지원한다.
- truncation되면 "몇 줄 중 몇 줄을 보여줬고 다음은 어떤 start_line을 쓰라"는 지시를 LLM content에 넣는다.
- 파일을 읽은 뒤 JIT subdirectory context를 발견해 붙일 수 있다.

`glob`:

- pattern과 dir_path를 workspace 내로 제한한다.
- glob 결과를 file discovery service와 `.gitignore`/`.geminiignore` 기준으로 한 번 더 필터링한다.
- 최근 하루 수정 파일은 mtime 최신순, 나머지는 path alphabetic으로 정렬한다.

`grep`:

- search dir를 workspace 내로 제한한다.
- timeout을 둔다.
- strategy 1: git repo이면 `git grep --untracked -n -E --ignore-case`.
- strategy 2: system `grep -r -n -H -E -I -i`.
- result count, per-file max count, include/exclude pattern을 적용한다.

`utils/filesearch/fileSearch.ts`:

- recursive search를 쓰면 crawl 결과를 cache하고, option에 따라 file watcher로 갱신한다.
- result cache를 두고 exact pattern이면 cached result를 재사용한다.
- fuzzy search는 `AsyncFzf`를 쓰고, 20k 파일 초과에서는 더 빠른 v1 알고리즘을 선택한다.
- basename prefix, match position from end, path length를 tie-breaker로 둔다.

설계 의미:

- Gemini CLI는 모델이 "glob으로 후보를 좁히고 grep으로 내용 신호를 잡고 read_file로 line range를 읽는" 패턴을 전제한다.
- 읽기 도구가 truncation 이후 다음 행동을 명시해 LLM의 self-navigation을 돕는다.

## 8. Qwen Code: 읽은 파일 기억과 post-compaction 복원

관련 파일:

- `sources/QwenLM__qwen-code/packages/core/src/tools/read-file.ts`
- `sources/QwenLM__qwen-code/packages/core/src/tools/glob.ts`
- `sources/QwenLM__qwen-code/packages/core/src/tools/grep.ts`
- `sources/QwenLM__qwen-code/packages/core/src/services/fileDiscoveryService.ts`
- `sources/QwenLM__qwen-code/packages/core/src/services/fileReadCache.ts`
- `sources/QwenLM__qwen-code/packages/core/src/services/postCompactAttachments.ts`

Qwen Code는 Gemini 계열 도구 구조와 비슷하지만, "읽은 파일 기억"이 더 노골적으로 구현돼 있다.

`FileReadCache`:

- session-scoped in-memory cache다.
- key는 path string이 아니라 `${stats.dev}:${stats.ino}` inode identity다.
- symlink, hardlink, case-variant path가 같은 파일이면 같은 entry로 접힌다.
- mtime/size snapshot을 기록한다.
- 마지막 read/write 시각, full read 여부, text cacheable 여부, history resident 여부를 따로 둔다.
- edit/write 전에 모델이 실제로 파일을 읽었는지와 on-disk fingerprint가 drift됐는지 판단하는 safety net으로 쓰인다.

중요한 점:

- `lastReadWasFull`과 `lastReadCacheable`은 같은 fingerprint일 때 true가 sticky하게 유지된다.
- partial read가 full read 권한을 새로 만들지는 않지만, 같은 bytes에 대한 기존 full read 신호를 지우지도 않는다.
- drift가 생기면 현재 read가 본 범위와 타입 기준으로 reset한다.
- microcompaction으로 history에서 file content가 사라지면 `readResidentInHistory`를 false로 바꿔 `file_unchanged` fast-path가 거짓말하지 않게 한다.

`postCompactAttachments.ts`:

- compaction 이후 최근 접근 파일을 복원할 때 작은 파일은 본문 embed, 큰 파일은 reference만 남긴다.
- byte size pre-check로 대형 파일을 Buffer로 읽기 전에 reference 처리한다.
- binary sample detection으로 non-text는 제외한다.
- file별 최대 token과 전체 post-compact budget을 모두 적용한다.
- budget을 넘으면 full content embed 대신 path reference로 downgrade한다.

구체 로직:

```text
for recently_accessed_file:
  if stat size > maxChars * 4:
    keep reference only
  else read buffer
  if binary-like:
    skip
  decoded = utf8
  if decoded.length > per-file max:
    keep reference only
  else if global budget has room:
    embed full current content
  else:
    keep reference only
```

설계 의미:

- "다 읽은 파일을 계속 기억한다"와 "context budget을 넘지 않는다"를 분리해 다룬다.
- 대형 파일은 경로 reference를 남겨 모델이 필요하면 `read_file`로 다시 읽게 한다.
- 이것은 full-source-scan 시스템에서 compaction 후 가장 중요한 누락 방지 패턴이다.

## 9. Codanna: 코드 검색 전용 외부 인덱서의 정석

관련 파일:

- `sources/bartolli__codanna/src/indexing/walker.rs`
- `sources/bartolli__codanna/src/indexing/pipeline/mod.rs`
- `sources/bartolli__codanna/src/storage/tantivy.rs`
- `sources/bartolli__codanna/src/retrieve.rs`
- `sources/bartolli__codanna/src/vector/engine.rs`

Codanna는 agent UI 내부 기능이 아니라 코드 인덱서/MCP 성격이다. 구조는 명확하다.

```text
DISCOVER -> READ -> PARSE -> COLLECT -> INDEX
```

`FileWalker`:

- `ignore::WalkBuilder`로 directory를 돈다.
- `.gitignore`, global gitignore, `.git/info/exclude`, `.codannaignore`를 지원한다.
- hidden file은 필터링한다.
- parser registry에서 enabled extensions만 남긴다.
- symlink는 follow하지 않는다.

`Pipeline`:

- discover/read/parse/collect/index stage를 channel로 연결한다.
- read worker와 parse worker를 별도 thread로 join/aggregate한다.
- parser는 thread-local cache를 쓴다.
- collect stage에서 ID assignment와 batching을 맡긴다.
- index stage는 Tantivy에 write한다.

`tantivy.rs`:

- symbol, relationship, file metadata, import, vector metadata를 하나의 schema에 둔다.
- symbol name은 exact match용 STRING과 partial match용 ngram TEXT를 둘 다 가진다.
- doc_comment/signature/context는 full-text search 대상이다.
- relationship은 caller/callee, relation kind, weight, source location, receiver/static call metadata를 가진다.
- vector search는 IVFFlat-style clustering engine과 연결된다.

`retrieve.rs`:

- symbol name 또는 `symbol_id:<id>`를 resolve한다.
- ambiguity가 있으면 symbol_id를 제시한다.
- callers/calls/implementations를 relation graph로 찾는다.
- search result를 `SymbolContext`로 변환해 file path와 관계 맥락을 붙인다.

설계 의미:

- Codanna는 "필요 파일"보다 "필요 symbol + relationship + context"를 찾는다.
- 에이전트가 이 계층을 붙이면 `grep -> read file`보다 훨씬 구조적인 candidate set을 만들 수 있다.

## 10. Sourcebot/Potpie: 제품형 code/context search

관련 파일:

- `sources/sourcebot-dev__sourcebot/packages/backend/src/zoekt.ts`
- `sources/sourcebot-dev__sourcebot/packages/backend/src/repoIndexManager.ts`
- `sources/sourcebot-dev__sourcebot/packages/queryLanguage/src/parser.ts`
- `sources/sourcebot-dev__sourcebot/packages/web/src/features/git/getFilesApi.ts`
- `sources/sourcebot-dev__sourcebot/packages/web/src/features/git/getFileSourceApi.ts`
- `sources/sourcebot-dev__sourcebot/packages/web/src/features/search/zoektSearcher.ts`
- `sources/potpie-ai__potpie/potpie/parsing/src/code_index.rs`
- `sources/potpie-ai__potpie/potpie/parsing/src/fff_search/*`
- `sources/potpie-ai__potpie/potpie/context-engine/*`
- `sources/potpie-ai__potpie/legacy/app/modules/parsing/graph_construction/parsing_service.py`
- `sources/potpie-ai__potpie/legacy/app/modules/parsing/graph_construction/code_graph_service.py`
- `sources/potpie-ai__potpie/potpie/sandbox/sandbox/parser_runner/runner.py`

Sourcebot은 Sourcegraph/Zoekt식 코드 검색 제품에 가깝다. `RepoIndexManager`가 repository clone/fetch와 revision selection을 관리하고, Zoekt indexer를 실행한다. 파일 목록과 본문 조회는 Git object 관점이다. 즉 `git ls-tree -r --name-only`로 revision의 파일 목록을 얻고, `git show ref:path` 성격으로 본문을 꺼낸다. 검색은 query IR을 Zoekt gRPC request로 변환한 뒤 match/context/chunk를 웹 결과로 만든다. LLM이 직접 "필요한 파일을 읽는" 구현이라기보다, agent가 붙일 수 있는 코드 검색 backend다.

Potpie는 code index와 context-engine을 묶는다. sandbox 안에서 parser runner가 `extract_graph(repo_dir)`를 실행하고, Rust parse path는 `WalkBuilder`로 repo를 훑어 file/function/class/interface node와 relationship을 만든다. 이후 graph construction service가 Neo4j와 Qdrant 계층으로 보낸다. 이는 파일만 찾는 계층보다 "프로젝트 사건/이슈/소스/그래프 기록"을 연결하는 쪽에 가깝다. 다만 parse 경로의 symlink/size policy는 코드 에이전트의 즉석 read tool보다 더 엄격히 검증해야 한다.

## 11. 종합 알고리즘: 사용자 말과 소스 연결

구현체들을 합치면 다음 알고리즘이 가장 현실적이다.

```text
input: user_message, workspace_roots, open_files, chat_files, recent_reads

1. signal extraction
   - exact paths: src/foo.ts, @mentions, stack trace paths
   - identifiers: class/function/type names, error symbols, config keys
   - natural language topics: auth, payment, vector index, spec extraction
   - task shape: bugfix, refactor, review, explain, implement

2. cheap candidate generation
   - exact path exists?
   - glob likely filenames
   - grep exact identifiers / error messages
   - active/open files and recently-read files

3. structural expansion
   - symbol definitions and references
   - imports/dependencies
   - tests adjacent to implementation
   - config/routes/API schema/docs near target module

4. indexed retrieval when available
   - BM25/FTS for lexical phrases
   - vector search for natural language query
   - repo map/PageRank for symbol centrality
   - graph search for callers/callees/implements

5. ranking
   - exact user-mentioned path
   - exact symbol definition
   - lexical match density and line proximity
   - active/open/recently-read boost
   - repo-map centrality
   - test/implementation pairing
   - ignore/security/generated/vendor penalty

6. reading
   - read smallest useful line ranges first
   - prefer symbol block/chunk over whole file
   - read imports/callers/tests only when they explain the change
   - if truncated, schedule next line window
   - if file too large, keep path reference and outline

7. memory/compaction
   - record read fingerprint and whether full/partial
   - keep small recently-read files across compaction
   - downgrade large files to references
   - never claim unchanged content is resident if compaction evicted it
```

## 12. 권장 ranking formula

실제 시스템에서 단순하고 강한 점수식은 다음 정도로 충분하다.

```text
score(file_or_chunk) =
  120 * exact_path_mentioned
+ 100 * stack_trace_path
+  90 * exact_symbol_definition
+  70 * exact_identifier_match
+  55 * lexical_bm25_normalized
+  45 * vector_similarity
+  35 * repo_map_pagerank
+  30 * active_open_file
+  25 * recently_read_fresh
+  20 * same_directory_as_target
+  18 * test_or_implementation_pair
+  15 * recently_modified
- 100 * ignored_or_secret_pattern
-  80 * generated_vendor_lock_binary
-  40 * too_large_without_specific_match
```

가중치의 핵심은 natural language vector search가 exact path/symbol보다 위로 올라오지 않게 하는 것이다. 사용자가 `FooService`라고 말했을 때 semantic similarity가 높은 README보다 `FooService` 정의 파일이 먼저 와야 한다.

## 13. 읽기 정책

파일을 "찾는 것"만큼 "얼마나 읽는가"가 중요하다.

권장 순서:

1. exact path 또는 stack trace file은 해당 line 주변 80-160줄.
2. symbol definition은 symbol block 전체.
3. grep match는 match 앞뒤 20-40줄.
4. interface/type/schema는 전체 type block.
5. test failure는 failing test + target function.
6. config/routing은 relevant stanza만.
7. 1MB 이상 파일은 outline 또는 chunk search만.
8. binary/generated/vendor/lock은 기본 제외.

Qwen의 `readFileSizeAdaptive`와 Gemini의 truncated read 메시지는 이 정책의 좋은 예다. 둘 다 모델에게 "다음에 어떻게 더 읽을지"를 남긴다.

## 14. 실패 모드

| 실패 | 원인 | 방어 |
| --- | --- | --- |
| README/문서만 계속 읽음 | vector similarity 과대평가 | exact symbol/path boost |
| vendor/generated 오염 | glob 범위 과대 | ignore/security/generated penalty |
| 큰 파일 truncation 후 착각 | full read와 partial read 구분 없음 | read cache에 full/partial/fingerprint 기록 |
| compaction 후 "이미 읽었다" 착각 | history resident 여부 미추적 | Qwen식 `readResidentInHistory` |
| monorepo root 전체 scan 폭주 | recursive list 무제한 | Cline/Gemini식 max files, timeout, partial result |
| `.gitignore` 처리 OOM | nested ignore file 전부 eager load | Cline식 BFS incremental gitignore |
| symbol graph 오염 | common identifier가 centrality 장악 | Aider식 high-definer penalty, sqrt ref count |
| secret leakage | `.env`, key, db 파일 검색 | Continue식 security ignore |

## 15. 이 저장소에 반영할 다음 산출물

이미 완료된 산출물:

- full scan 총괄: `reports/full-source-scan-research-summary-2026-06-18.md`
- 127개 클론 구조: `reports/clone-structure-analysis-127.md`
- LLM wiki 100개 구조: `reports/llm-wiki/00-llm-wiki-100-summary.md`
- LLM wiki 선정/패턴: `reports/llm-wiki/01-llm-wiki-100-selection-and-patterns.md`
- spec-driven evidence 650 works: `reports/spec-driven-evidence-corpus-500.md`

이번 문서의 보강 지점:

- 각 구현이 "필요 파일"을 찾는 실제 code path를 연결했다.
- path search, symbol graph, FTS/vector, code block index, read memory를 하나의 비교축으로 묶었다.
- 사용자 말과 소스 연결을 위한 실전 ranking/reading policy를 제안했다.

다음 심층 후보:

1. Direct LLM Wiki 11개 구현의 `ingest -> entity extraction -> page update -> conflict handling` 코드 워크스루.
2. Spec-driven 20개 구현의 `requirements.md -> design.md -> tasks.md -> source edits -> traceability` 파일 모델 비교.
3. Codex/Gemini/Qwen/Cline/Roo의 read-before-write, compaction, file mention UX 비교.
