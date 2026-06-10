# Aider-AI/aider 분석 보고서

## 1. 요약 평가

Aider는 Python 기반의 터미널 AI pair programmer다. Claude Code, Codex, Gemini CLI류의 “범용 agent shell”과 비교하면 더 좁고 선명한 철학을 가진다. Aider는 사용자의 저장소 안에서 명시적으로 선택한 파일을 LLM과 함께 편집하고, Git commit과 undo를 안전망으로 삼고, repo map으로 전체 코드베이스의 구조적 맥락을 압축해서 제공한다.

이 프로젝트의 핵심은 “LLM이 전체 컴퓨터를 자율 조작한다”가 아니라 “개발자가 터미널에서 코드를 함께 수정한다”이다. 그래서 파일 편집 권한, Git 상태, edit format, lint/test loop, shell command 공유, repo map, chat history summary 같은 기능이 전부 pair programming 흐름에 맞춰져 있다.

가장 큰 강점은 코드 편집 품질을 높이기 위해 오랜 시간 누적된 프롬프트와 적용 전략이다. Aider는 `SEARCH/REPLACE`, unified diff, whole-file, patch, architect/editor split 같은 여러 edit format을 갖고 있고, 실패한 edit는 정확한 mismatch 원인을 다시 LLM에게 반사한다. LLM이 만든 변경을 그대로 믿는 구조가 아니라, 적용 가능한 형태로 파싱하고, 파일 권한을 확인하고, Git dirty commit을 만들고, lint/test 결과를 다시 대화에 넣는 방식이다.

가장 큰 차별점은 repo map이다. Aider는 단순히 `git ls-files` 결과를 프롬프트에 넣지 않는다. Tree-sitter tag query로 정의와 참조를 뽑고, NetworkX PageRank로 현재 대화 파일, 언급된 파일명, 언급된 식별자와 연결된 정의를 우선순위화한다. 이것은 “모든 파일을 읽을 수 없는 모델 context window 안에서 어떤 주변 코드를 보여줄 것인가”에 대한 Aider의 핵심 답이다.

위험도 Aider의 강점과 같은 지점에서 발생한다. `.env`, `~/.aider/oauth-keys.env`, model settings, analytics, web scraping, copy-paste mode, watch-files AI comment, shell command 실행, auto commits가 모두 사용자 로컬 환경과 연결된다. 기본 구조는 확인과 Git safety를 많이 요구하지만, `--yes-always`, `--no-verify-ssl`, `--git-commit-verify` 기본값, web content prompt injection, 자동 lint/test reflection은 운영자가 이해하고 써야 한다.

## 2. 기본 정보

- 저장소: `Aider-AI/aider`
- 분석 커밋: `5dc9490`
- 기본 브랜치: `main`
- 생성일: 2023-05-09
- 최근 push: 2026-05-22
- 최신 릴리스 관측값: `v0.86.0` / 2025-08-09
- 언어: Python
- 라이선스: Apache-2.0
- 규모: 약 685개 파일
- 패키지명: `aider-chat`
- 콘솔 entrypoint: `aider = aider.main:main`
- Python 요구사항: `>=3.10,<3.15`
- README 설명: `aider is AI pair programming in your terminal`
- 주요 루트:
  - `aider/main.py`: CLI bootstrap, config/env/model/git/coder 생성
  - `aider/args.py`: CLI 옵션과 config/env var schema
  - `aider/coders/`: edit format별 coder 구현
  - `aider/repo.py`: Git repository, commit, dirty 상태, ignore 처리
  - `aider/repomap.py`: Tree-sitter 기반 repo map
  - `aider/commands.py`: slash command runtime
  - `aider/models.py`: LiteLLM 기반 model wrapper
  - `aider/io.py`: terminal IO, confirmation, history, clipboard integration
  - `aider/watch.py`: AI comment 기반 file watcher
  - `aider/scrape.py`: URL scraping, Playwright/httpx fallback
  - `tests/`, `benchmark/`: regression과 coding benchmark 자산

이 저장소의 GitHub 지표는 매우 성숙한 CLI 프로젝트에 가깝다. 관측 시점 기준 star 45,967, fork 4,563이며, topics는 `cli`, `command-line`, `openai`, `anthropic`, `gemini`, `llama`, `gpt-4o`, `sonnet` 등 모델 중립적 pair programming 도구의 성격을 보여준다.

## 3. 발전 과정과 설계 철학

Aider의 진화는 “AI coding agent”보다 “AI pair programmer”에 가깝다. README가 강조하는 주요 기능은 다음과 같다.

- 터미널에서 대화하면서 코드 수정
- Claude, OpenAI, Gemini, DeepSeek, local LLM 등 다양한 모델 지원
- repo map으로 큰 코드베이스 이해
- Git auto commit과 undo
- lint/test 자동 수정 loop
- IDE에서 파일을 보면서 Aider를 병행하는 watch-files workflow
- 웹 페이지, 이미지, PDF, 음성 입력, copy/paste web chat mode

철학은 다섯 가지로 읽힌다.

1. Git-first safety
   - Aider는 Git repository를 기본 전제로 삼는다.
   - AI가 편집한 변경은 자동 commit될 수 있다.
   - AI 편집 직전 dirty change도 별도 commit으로 저장할 수 있다.
   - `/undo`는 “이번 chat session에서 Aider가 만든 마지막 commit”만 되돌리는 식으로 제한한다.

2. Explicit editable context
   - editable file은 `/add` 또는 CLI `--file`로 chat에 들어온 파일이다.
   - LLM이 다른 파일을 수정하려 하면 `allowed_to_edit()`가 별도 확인을 요구한다.
   - read-only file은 context로 제공되지만 바로 수정 대상은 아니다.
   - repo map에 보이는 파일도 “참고용”이며, 직접 수정하려면 먼저 chat에 추가해야 한다는 assistant confirmation message를 넣는다.

3. Context engineering over brute force
   - 전체 repository를 통째로 넣는 대신 repo map, chat files, read-only files, mentioned files, mentioned identifiers, chat summary를 조합한다.
   - repo map은 Tree-sitter, Pygments, PageRank, token budget binary search를 사용한다.
   - 모델 context window와 `map_tokens`에 맞게 구조적 압축을 한다.

4. Edit format pluralism
   - 모델별로 적합한 edit format이 다르다는 전제를 둔다.
   - `diff`, `diff-fenced`, `udiff`, `udiff-simple`, `whole`, `patch`, `architect`, `editor-*` 등 여러 coder가 있다.
   - 실패한 format은 오류 메시지를 다시 LLM에게 주어 self-repair를 유도한다.

5. User remains in control
   - shell command는 LLM이 제안해도 `explicit_yes_required=True`로 일반 `--yes`가 자동 승인하지 못하게 한다.
   - URL scraping, Playwright 설치, 파일 생성, chat 밖 파일 편집, lint/test fix는 confirmation 중심이다.
   - 단, 사용자가 `--yes-always`나 config로 confirmation을 줄이면 위험면이 넓어진다.

## 4. 전체 아키텍처

```mermaid
flowchart TD
  User["사용자"] --> CLI["aider CLI\naider.main:main"]
  User --> Config[".aider.conf.yml\nAIDER_* env\n.env"]
  User --> Files["소스 파일 / Git repo"]

  CLI --> Args["args.py\nconfigargparse parser"]
  CLI --> Env["dotenv + --set-env + --api-key\nprovider API key env"]
  CLI --> Analytics["Analytics\n~/.aider/analytics.json"]
  CLI --> ModelSelect["model selection\nonboarding / OpenRouter OAuth"]
  CLI --> Repo["GitRepo\nrepo.py"]
  CLI --> Commands["Commands\nslash commands"]
  CLI --> CoderFactory["Coder.create()\nedit_format 선택"]

  ModelSelect --> Model["Model\nLiteLLM wrapper"]
  Repo --> Git["GitPython / git CLI"]
  Commands --> Coder["Coder\nbase loop"]
  CoderFactory --> Coder

  Coder --> Context["format_chat_chunks()\nsystem + repo map + files + history"]
  Context --> RepoMap["RepoMap\nTree-sitter + PageRank"]
  Context --> Summary["ChatSummary\nhistory summarization"]
  Context --> Files

  Coder --> LLM["model.send_completion()\nLiteLLM"]
  LLM --> Parser["edit parser\nSEARCH/REPLACE / udiff / patch / whole"]
  Parser --> Permission["allowed_to_edit()\nfile permission checks"]
  Permission --> Apply["write_text / patch apply"]
  Apply --> Repo
  Apply --> Lint["Linter / /lint"]
  Apply --> Test["/test command"]
  Coder --> Shell["suggested shell commands\nexplicit yes"]

  Commands --> Web["/web\nScraper httpx/Playwright"]
  Commands --> Run["/run and !\nshell output optional chat"]
  Commands --> Watch["FileWatcher\nAI! / AI? comments"]
  Commands --> CopyPaste["ClipboardWatcher\nweb chat mode"]
```

이 구조에서 중요한 점은 `Coder`가 단순 “LLM wrapper”가 아니라는 것이다. `Coder`는 prompt assembly, edit parsing, permission gate, Git commit, lint/test loop, shell command gate, reflection loop를 모두 가진다. Aider의 실제 제품 가치는 대부분 이 `Coder` 계층에서 나온다.

## 5. 핵심 모듈 지도

```text
aider/
  __main__.py
    python -m aider entrypoint.

  main.py
    CLI 전체 bootstrap.
    config file 탐색, dotenv load, API key env 설정, analytics, GUI branch,
    model 선택, GitRepo 생성, Commands 생성, Coder.create, one-shot mode, interactive loop.

  args.py
    configargparse 기반 옵션 정의.
    .aider.conf.yml, AIDER_* env, CLI argument를 하나의 schema로 합친다.

  coders/
    base_coder.py
      core chat/edit loop.
    editblock_coder.py
      SEARCH/REPLACE block parser and applier.
    udiff_coder.py
      unified diff parser and hunk applier.
    wholefile_coder.py
      fenced full-file replacement.
    patch_coder.py
      apply_patch 스타일 custom patch parser.
    architect_coder.py
      plan model과 editor model을 나누는 2단계 flow.
    ask_coder.py, help_coder.py, context_coder.py
      non-editing or context-oriented modes.

  repo.py
    GitPython integration.
    tracked files, dirty files, commit, attribution, aiderignore/gitignore, undo precondition.

  repomap.py
    Tree-sitter tags, Pygments fallback refs, NetworkX PageRank, TreeContext rendering.

  commands.py
    slash commands.
    /add, /drop, /web, /run, /git, /lint, /test, /commit, /undo,
    /ask, /code, /architect, /context, /map, /copy-context, /voice, /paste.

  models.py
    LiteLLM-backed model object, model metadata, context window, streaming support.

  linter.py
    language/file specific lint command routing.

  scrape.py
    httpx and Playwright scraping, markdown conversion.

  watch.py
    source file comments ending with AI! or AI? trigger coding/ask prompts.

  copypaste.py
    clipboard watcher for browser web chat workflow.

  onboarding.py
    default model selection and OpenRouter OAuth PKCE flow.
```

## 6. CLI 시작 흐름

`pyproject.toml`의 console script는 `aider.main:main`을 실행한다. `aider/__main__.py`도 같은 `main()`을 호출한다.

```mermaid
sequenceDiagram
  participant U as User
  participant M as main()
  participant P as parser
  participant E as env/dotenv
  participant A as Analytics
  participant Model as Model selection
  participant R as GitRepo
  participant C as Coder
  participant Loop as interactive loop

  U->>M: aider [args]
  M->>M: get_git_root()
  M->>P: get_parser(default_config_files)
  P-->>M: parse known args
  M->>E: load_dotenv_files()
  M->>P: parse args again
  M->>E: --set-env / --api-key / dedicated API key flags
  M->>A: Analytics(...)
  A->>U: optional opt-in prompt
  M->>Model: select_default_model()
  Model-->>M: selected model name
  M->>Model: Model(main/weak/editor)
  M->>R: GitRepo(...)
  M->>M: sanity_check_repo()
  M->>C: Coder.create(...)
  M->>M: one-shot flags? lint/test/commit/apply/message
  M->>Loop: coder.run()
```

### 6.1 Config search order

`main()`은 처음에 Git root를 추정하고 `.aider.conf.yml`을 다음 위치에서 찾는다.

1. 현재 작업 디렉터리
2. Git root
3. 사용자 home

초기 parse 이후 `load_dotenv_files()`로 `.env` 파일을 로드하고, 다시 parser를 실행한다. 이 두 번 parse하는 방식 때문에 `.env`로 들어온 값이 최종 args에 반영된다.

### 6.2 Dotenv와 API key 처리

`load_dotenv_files()`는 home, git root, current directory, CLI `--env-file` 경로를 검색하고, `~/.aider/oauth-keys.env`가 있으면 목록 앞에 추가한다. `load_dotenv(... override=True)`이므로 기존 process env를 덮어쓸 수 있다.

그 다음 `main()`은 다음을 처리한다.

- `--set-env NAME=value`: 임의 environment variable 설정
- `--api-key provider=key`: `PROVIDER_API_KEY` env로 변환
- `--anthropic-api-key`: `ANTHROPIC_API_KEY`
- `--openai-api-key`: `OPENAI_API_KEY`
- deprecated OpenAI base/version/type/org 옵션을 env로 변환

이 설계는 provider 중립성을 높이지만, config와 `.env`가 실행 시점 secret과 provider behavior를 바꿀 수 있다는 뜻이기도 하다.

### 6.3 OpenRouter OAuth

API key가 없거나 OpenRouter 모델을 쓰는 경우 `onboarding.py`가 OpenRouter OAuth를 제안할 수 있다. PKCE code verifier/challenge를 만들고, localhost callback server를 열고, browser를 열어 인증을 기다린다. 성공하면 `OPENROUTER_API_KEY`를 process env에 넣고 `~/.aider/oauth-keys.env`에 저장한다.

장점은 초보자 onboarding이 쉽다는 것이다. 위험은 로컬 callback port, 자동 저장되는 key 파일, 이후 `load_dotenv_files()`에서 자동 로드되는 persistent credential이다.

### 6.4 One-shot mode

Interactive loop 전에 `main()`은 여러 one-shot mode를 처리한다.

- `--show-prompts`: 실제 model call 없이 prompt 구성 출력
- `--lint`: lint 실행과 fix flow
- `--test`: test command 실행, 실패 output을 모델에게 전달 가능
- `--commit`: dirty change commit
- `--show-repo-map`: repo map 출력
- `--apply FILE`: 파일의 patch/edit response를 `partial_response_content`로 넣고 적용
- `--apply-clipboard-edits`: clipboard content를 editor edit format으로 적용
- `--message`: 한 번 요청하고 종료
- `--message-file`: 파일에서 요청을 읽고 한 번 실행
- `--exit`: setup만 하고 종료

즉 Aider는 interactive TUI뿐 아니라 scripting 가능한 CLI 도구이기도 하다.

## 7. Coder 생성과 edit format 선택

`Coder.create()`는 edit format에 맞는 subclass를 고른다. `aider/coders/__init__.py`의 `__all__`에 여러 coder가 등록되어 있고, 각 class의 `edit_format` 값을 비교한다.

```mermaid
flowchart TD
  Create["Coder.create()"] --> From["from_coder 있나?"]
  From --> Model["main_model 선택"]
  Model --> Format["edit_format 결정\nCLI > from_coder > model default"]
  Format --> Registry["coders.__all__ 순회"]
  Registry --> Class["edit_format 일치 class"]
  Class --> Instance["Coder subclass instance"]
  Instance --> RepoMap["RepoMap 생성 여부"]
  Instance --> History["chat history restore/summarize"]
  Instance --> Ready["interactive or one-shot ready"]
```

주요 edit format은 다음과 같다.

- `diff`: SEARCH/REPLACE block. Aider의 대표 edit format.
- `diff-fenced`: fenced SEARCH/REPLACE 변형.
- `udiff`: unified diff hunk.
- `udiff-simple`: 간소화된 unified diff.
- `whole`: 전체 파일 fenced block.
- `patch`: `apply_patch` 스타일 Add/Delete/Update/Move patch.
- `architect`: plan model이 변경 지시를 작성하고 editor model이 실제 edit를 수행.
- `editor-diff`, `editor-whole`, `editor-diff-fenced`: architect/copy-paste 계열 editor mode.
- `ask`: 질문 모드, 파일 수정 없음.
- `context`: 주변 코드 context를 설명하는 모드.
- `help`: Aider 자체 도움말 질문 모드.

이 구조는 “하나의 universal patch format”을 강요하지 않는다. 모델의 성향, context 크기, 작업 종류에 따라 format을 바꿀 수 있게 만든다.

## 8. Core chat loop

`Coder.run()`은 interactive input을 읽거나 `with_message`를 받아 `run_one()`으로 보낸다. `run_one()`은 preprocessing, model call, edit 적용, lint/test/shell loop를 반복한다.

```mermaid
sequenceDiagram
  participant U as User
  participant C as Coder.run()
  participant Cmd as Commands
  participant F as format_chat_chunks()
  participant M as Model/LiteLLM
  participant E as Edit parser
  participant P as Permission gate
  participant Git as GitRepo
  participant QA as Lint/Test/Shell

  U->>C: message or interactive input
  C->>Cmd: slash command? file mention? URL?
  Cmd-->>C: optional transformed prompt
  C->>F: build messages
  F->>F: system + repo map + files + history + reminders
  C->>M: send_completion()
  M-->>C: assistant response stream/content
  C->>E: get_edits()
  E-->>C: structured edits or ValueError
  C->>P: allowed_to_edit() for each target file
  P-->>C: allow/create/add/skip
  C->>E: apply_edits()
  E->>Git: write files and auto_commit()
  C->>QA: auto_lint, suggested shell, auto_test
  QA-->>C: reflected_message if fix needed
  C-->>U: result and next prompt
```

중요한 내부 단계는 다음과 같다.

1. `preproc_user_input()`
   - `/` 또는 `!` 명령이면 `Commands.run()`으로 dispatch.
   - 파일명이 언급되면 chat에 추가할지 묻는다.
   - URL detection이 켜져 있으면 `/web`으로 가져올지 묻는다.

2. `format_chat_chunks()`
   - system prompt에 platform, shell, 언어, 날짜, Git repo, lint/test command, shell command 정책을 넣는다.
   - done history와 current messages를 정리한다.
   - repo map, read-only file, editable chat file, image/PDF message를 조합한다.
   - token limit을 점검하고 필요하면 요약을 사용한다.

3. `send()`
   - LiteLLM completion을 streaming 또는 non-streaming으로 호출한다.
   - reasoning content와 final content를 분리한다.
   - usage/cost를 집계한다.
   - context window, rate limit, malformed stream, keyboard interrupt를 처리한다.

4. `apply_updates()`
   - subclass `get_edits()`가 response를 구조화한다.
   - dry-run apply를 먼저 해 볼 수 있다.
   - `prepare_to_edit()`가 대상 파일 permission을 확인한다.
   - subclass `apply_edits()`가 실제 write를 수행한다.
   - 실패하면 `reflected_message`에 오류를 넣어 LLM에게 재시도를 요청한다.

5. post-edit loop
   - auto commit
   - auto lint 후 오류 fix reflection
   - suggested shell command 실행 여부 확인
   - auto test 후 오류 fix reflection

## 9. Prompt와 context 구성

Aider의 prompt 구성은 다음 layer로 나뉜다.

```mermaid
flowchart TD
  System["System prompt\nplatform, shell, date, language, repo info"] --> Messages["Final message list"]
  Examples["edit format examples"] --> Messages
  Done["done_messages\nold conversation"] --> Messages
  Summary["ChatSummary\ncompressed history"] --> Messages
  Repo["RepoMap\nother files structural map"] --> Messages
  ReadOnly["read-only files\nfull content or multimodal"] --> Messages
  ChatFiles["editable chat files\nfull content"] --> Messages
  Current["current user/assistant messages"] --> Messages
  Reminders["reminder prompt\nedit rules"] --> Messages
```

중요한 설계는 repo map과 editable file의 구분이다. repo map은 “다른 파일의 구조 정보”일 뿐이다. Aider는 repo map 뒤에 assistant 역할의 짧은 응답을 넣어 “그 파일들은 요청 없이 수정하지 않겠다”는 제약을 만든다. 이것은 prompt-level policy이지만, 실제 적용 단계에서도 `allowed_to_edit()`가 chat 밖 파일 편집을 물어보므로 두 겹이다.

이미지와 PDF는 모델이 지원할 때만 multipart content로 들어간다. 이 경우 파일 내용은 base64 또는 provider가 요구하는 형태로 LLM에게 전송될 수 있으므로, 민감한 이미지/PDF를 `/add`하는 것은 일반 코드 파일과 다른 privacy risk를 가진다.

## 10. RepoMap 상세 분석

RepoMap은 Aider의 가장 중요한 차별 기능이다.

### 10.1 입력과 출력

입력:

- 현재 chat에 들어온 editable files
- repo의 다른 tracked files
- 사용자 메시지에 언급된 파일명
- 사용자 메시지에 언급된 identifier
- token budget (`map_tokens`)
- refresh policy (`auto`, `always`, `files`, `manual`)

출력:

- token budget 안에 들어가는 “파일별 관련 코드 구조”
- 파일명만 나열되는 항목과, line of interest 주변 tree context가 포함되는 항목이 섞인다.

### 10.2 Tag extraction

`get_tags_raw()`는 파일 확장자를 `grep_ast.filename_to_lang()`로 language에 매핑한다. language에 맞는 Tree-sitter parser와 `.scm` query를 가져와 정의와 참조를 추출한다.

Tree-sitter query가 reference를 충분히 제공하지 못하고 definition만 제공하는 언어는 Pygments token을 사용해 reference를 보강한다. 즉 language support는 Tree-sitter query 품질에 크게 의존하지만, 일부 언어는 lexical fallback이 있다.

tag는 다음 구조로 쓰인다.

```text
Tag(
  rel_fname,
  fname,
  name,
  kind = "def" or "ref",
  line
)
```

tag cache는 파일 mtime 기준으로 유지된다. SQLite cache 오류가 나면 cache를 재생성하거나 dict fallback을 사용하려는 방어 코드가 있다.

### 10.3 Ranking

`get_ranked_tags()`는 다음 그래프를 만든다.

- node: 파일
- edge: 어떤 파일이 어떤 identifier를 참조하고, 그 identifier가 어느 파일에서 정의되는지
- edge weight:
  - 언급된 identifier는 가중치 상승
  - snake/kebab/camel case이고 긴 identifier는 가중치 상승
  - `_`로 시작하는 private-like identifier는 가중치 감소
  - 너무 많은 파일에서 정의되는 identifier는 가중치 감소
  - 현재 chat file에서 참조한 identifier는 큰 가중치 상승
- personalization:
  - chat file
  - 언급된 파일명
  - 언급된 path component나 basename

그 후 NetworkX PageRank를 돌리고, rank가 높은 `(file, identifier)` 정의를 우선 배치한다. tag가 없는 파일은 나중에 파일명만 들어갈 수 있다.

### 10.4 Token budget fitting

`get_ranked_tags_map_uncached()`는 ranked tags를 일부만 선택해서 `to_tree()`로 렌더링한다. 그리고 token count가 `max_map_tokens`에 맞도록 binary search를 한다. 긴 line은 100자로 잘라 minified JS 같은 파일이 prompt를 망치지 않게 한다.

```mermaid
flowchart TD
  Files["repo files"] --> Tags["Tree-sitter/Pygments tags"]
  Tags --> Graph["identifier reference graph"]
  Graph --> Rank["NetworkX PageRank"]
  Rank --> TagsRanked["ranked tags"]
  TagsRanked --> Tree["TreeContext render"]
  Tree --> Count["model token_count"]
  Count --> Fit["binary search to map_tokens"]
  Fit --> Prompt["repo map prompt chunk"]
```

### 10.5 주목할 oddity

`repomap.py`의 capture 처리부에는 `captures_by_tag[tag].append(node)`가 inner loop 뒤에서 한 번 더 호출되고, `matches.append((node, tag))`도 tag별 마지막 node만 기록하는 형태가 보인다. 현재 의존성 조합에서 의도한 호환 처리일 수 있지만, 코드 형태만 보면 capture node가 중복되거나 일부 capture만 `matches`에 들어갈 여지가 있다. RepoMap은 ranking 품질이 핵심 기능이므로, Tree-sitter binding 버전 변경 시 이 부분은 regression test로 확인할 가치가 있다.

## 11. Edit format별 동작

### 11.1 SEARCH/REPLACE `diff`

`EditBlockCoder`는 assistant response에서 SEARCH/REPLACE block을 찾아 `(path, original, updated)` edit로 바꾼다. path가 없는 block은 shell command 후보로 분리된다.

적용은 exact match를 먼저 요구한다. 실패하면 chat에 들어온 다른 파일에서도 같은 original block을 찾아본다. 그래도 실패하면 다음 정보를 담은 오류를 만든다.

- 어떤 SEARCH block이 실패했는지
- 실제 파일에서 비슷한 line이 무엇인지
- REPLACE 내용이 이미 파일에 있는지
- 일부 block은 성공했으니 다시 보내지 말라는 지시

이 오류는 `ValueError`로 올라가고, base coder가 `reflected_message`로 넣어 모델에게 수정된 block만 다시 요청한다.

### 11.2 Unified diff `udiff`

`UnifiedDiffCoder`는 response에서 unified diff hunk를 파싱한다. hunk는 exact/flexible search를 거쳐 적용된다. 실패 유형은 두 가지가 명확하다.

- `UnifiedDiffNoMatch`: 해당 line sequence가 파일에 없음
- `UnifiedDiffNotUnique`: 같은 context가 여러 곳에 있어 적용 위치가 모호함

이 형식은 LLM이 일반적인 diff를 잘 만들 때 유리하지만, context line이 부족하면 not unique가 자주 발생할 수 있다.

### 11.3 Whole file `whole`

`WholeFileCoder`는 fenced code block 앞의 파일명을 보고 전체 파일을 교체한다. 파일명이 없고 chat file이 하나뿐이면 그 파일로 추정한다. 여러 파일이 있으면 파일명 누락을 오류로 처리한다.

장점은 작은 파일에서 단순하고 강력하다는 것, 단점은 대형 파일에서 token 비용과 accidental overwrite 위험이 크다는 것이다.

### 11.4 Patch `patch`

`PatchCoder`는 `apply_patch` 스타일의 `*** Begin Patch`, `*** Add File`, `*** Delete File`, `*** Update File`, `*** Move to` 구조를 파싱한다. context matching은 exact, rstrip, strip 단계의 fuzz를 갖는다.

이 형식은 structured patch에 익숙한 모델이나 시스템과 결합할 때 좋지만, parser 자체가 허용성과 복잡성을 동시에 갖는다. 잘못된 patch를 얼마나 엄격하게 거부하는지가 중요하다.

### 11.5 Architect/editor

`ArchitectCoder`는 두 단계다.

1. architect model이 자연어 계획과 변경 지시를 만든다.
2. editor coder가 `main_model.editor_model` 또는 main model과 `editor_edit_format`으로 실제 파일 edit를 수행한다.

```mermaid
sequenceDiagram
  participant U as User
  participant A as ArchitectCoder
  participant L1 as Architect model
  participant E as EditorCoder
  participant L2 as Editor model
  participant FS as Files/Git

  U->>A: high-level request
  A->>L1: ask for plan
  L1-->>A: plan/instructions
  A->>U: Edit the files? or auto_accept
  A->>E: run(with_message=plan)
  E->>L2: generate concrete edits
  L2-->>E: edit format response
  E->>FS: apply, commit, lint/test
  E-->>A: cost and commit hashes
  A-->>U: changes complete
```

이 구조는 reasoning이 강한 모델과 editing이 안정적인 모델을 분리할 수 있다는 장점이 있다. 반대로 architect plan 자체가 prompt injection이나 잘못된 지시를 포함하면 editor가 그 지시를 강하게 따를 수 있다.

## 12. Git workflow와 안전장치

`GitRepo`는 Aider의 안전 모델 중심이다.

### 12.1 Repository 선택

`GitRepo.__init__`은 입력 파일과 현재 디렉터리에서 Git repository를 찾는다. 여러 repo가 섞이면 예외를 던진다. home directory에서 실행하는 경우 별도 warning과 `.gitignore` 추가 제안도 있다.

### 12.2 Ignore 처리

- `.gitignore`: Git ignored file 편집 차단에 사용
- `.aiderignore`: repo map과 tracked file 목록에서 제외
- `--subtree-only`: 현재 subtree 밖 파일 제외

즉 `.aiderignore`는 LLM context 노출을 줄이는 데 중요하다. 단, 사용자가 명시적으로 파일을 chat에 넣으면 다른 경로로 노출될 수 있으므로 민감 파일 관리는 Git ignore와 Aider ignore를 함께 봐야 한다.

### 12.3 Auto commit

Aider는 AI edit 후 `auto_commit()`을 호출할 수 있다. commit message가 명시되지 않으면 LLM commit message model을 사용한다. attribution 옵션은 복잡하다.

- `--attribute-author`
- `--attribute-committer`
- `--attribute-commit-message-author`
- `--attribute-commit-message-committer`
- `--attribute-co-authored-by`

기본적으로 `Co-authored-by: aider (<model>) <aider@aider.chat>` trailer가 사용될 수 있다. AI edit와 user commit에 따라 author/committer name을 변경하는 로직도 있다.

### 12.4 Pre-commit hook

`--git-commit-verify` 기본값은 `False`이고, `repo.commit()`은 이 값이 false면 `git commit --no-verify`를 붙인다. 즉 기본 설정에서는 pre-commit hook이 우회될 수 있다. 팀에서 pre-commit 검증이 필수라면 `--git-commit-verify`를 켜야 한다.

### 12.5 Dirty commit

AI edit 전에 기존 dirty changes가 있으면 `dirty_commit()`으로 먼저 commit할 수 있다. 이것은 안전망이지만, 사용자가 commit할 생각이 없던 변경까지 자동 commit되는 workflow가 될 수 있다.

### 12.6 Undo

`/undo`는 destructive `git reset --hard`가 아니다. Aider가 이 chat session에서 만든 마지막 commit hash인지 확인하고, 원격 origin에 이미 push된 commit은 되돌리지 않는다. 변경 파일에 uncommitted changes가 있으면 중단한다. 그리고 해당 commit이 바꾼 파일만 `HEAD~1`에서 checkout한 뒤 soft reset한다.

이 undo는 보수적인 편이다. 다만 “Aider가 이번 세션에서 만든 commit”이라는 내부 hash set에 의존하므로, process를 재시작한 뒤에는 같은 방식의 undo가 제한된다.

## 13. Slash command runtime

`Commands`는 `cmd_` prefix가 붙은 method를 자동으로 slash command로 노출한다. `!command`는 `/run command`의 shortcut이다.

주요 command는 다음과 같다.

| 명령 | 역할 |
| --- | --- |
| `/add` | 파일을 editable chat files에 추가 |
| `/read-only` | 파일을 read-only context로 추가 |
| `/drop` | chat에서 파일 제거 |
| `/ls` | 현재 chat 파일 목록 표시 |
| `/web` | URL을 scrape해서 markdown으로 chat에 추가 |
| `/run` 또는 `!` | shell command 실행, output을 chat에 넣을지 확인 |
| `/git` | git command 실행, output은 chat에 자동 추가하지 않음 |
| `/lint` | in-chat 또는 dirty file lint 후 fix prompt |
| `/test` | test command 실행, 실패 output을 chat에 추가 |
| `/commit` | pending changes commit |
| `/undo` | Aider가 만든 마지막 commit 되돌리기 |
| `/diff` | 마지막 변경 diff 표시 |
| `/ask` | 수정 없는 질문 모드 |
| `/code` | 코드 변경 모드 |
| `/architect` | architect/editor 모드 |
| `/context` | 주변 context 설명 모드 |
| `/map` | 현재 repo map 출력 |
| `/map-refresh` | repo map 강제 refresh |
| `/settings` | 현재 settings와 model metadata 출력 |
| `/load` | 명령 파일을 읽어 실행 |
| `/save` | chat transcript 저장 |
| `/voice` | OpenAI whisper 기반 음성 입력 |
| `/paste` | clipboard text/image를 chat에 추가 |
| `/copy-context` | web UI에 붙여넣을 context markdown 복사 |

### 13.1 `/run`과 shell command 정책

`/run`은 사용자가 직접 실행하는 shell command다. output을 chat에 추가할지 묻는다. `/test`는 non-zero exit일 때 output을 chat에 넣는 flow로 쓰인다.

LLM이 response 안에서 shell command를 제안하는 경우는 더 엄격하다. `handle_shell_commands()`는 `explicit_yes_required=True`로 confirm한다. `InputOutput.confirm_ask()`는 `self.yes is True`라도 explicit yes가 필요한 질문에서는 자동으로 `"n"`을 선택한다. 즉 `--yes`류 자동 승인으로 LLM 제안 command가 바로 실행되는 것을 막는다.

단, 사용자가 직접 `/run`을 실행하거나 command output을 chat에 넣으면, 그 output 안의 secret이 LLM provider로 전송될 수 있다.

### 13.2 `/web`

`/web`은 URL을 scrape하고 “Here is the content of URL” 형태로 chat에 추가한다. Playwright가 있으면 browser scraping, 없으면 httpx fallback을 사용한다. Playwright가 없고 disabled가 아니면 설치를 제안한다.

이 기능은 문서와 issue를 읽게 만드는 데 강력하지만, 웹 페이지 안의 prompt injection이 코드 변경 요청에 섞일 수 있다. 특히 임의 URL을 읽고 그 내용을 곧바로 coding prompt에 넣는 구조이므로, “웹 내용은 불신 데이터”로 봐야 한다.

### 13.3 `/voice`

`/voice`는 OpenAI API key가 있어야 하고, local audio recording dependency가 필요하다. transcribed text를 input placeholder로 넣는다. 음성 데이터와 transcription provider privacy를 별도로 고려해야 한다.

## 14. 사용자 실행 플로우별 정리

### 14.1 기본 interactive edit

```mermaid
flowchart TD
  Start["aider file.py"] --> Add["file.py editable chat file"]
  Add --> UserMsg["사용자 변경 요청"]
  UserMsg --> Prompt["full file + repo map + history"]
  Prompt --> LLM["LLM response"]
  LLM --> Parse["edit format parse"]
  Parse --> Apply["write file"]
  Apply --> Commit["auto commit"]
  Commit --> Lint["auto lint?"]
  Lint --> Shell["suggested shell? explicit yes"]
  Shell --> Done["next prompt"]
```

이 플로우에서 Aider는 사용자가 지정한 파일을 중심으로 움직인다. LLM이 다른 파일 편집을 시도하면 별도 confirmation이 필요하다.

### 14.2 질문만 하는 `/ask`

`/ask`는 `AskCoder`를 만들고 파일 수정 없이 대답한다. 기존 context와 repo map을 활용할 수 있으므로 코드베이스 질문에 적합하다. `/code`로 다시 edit mode에 돌아갈 수 있다.

### 14.3 큰 변경의 `/architect`

Architect mode는 큰 리팩터링이나 설계 변경에 적합하다. 첫 모델은 설계와 작업 계획을 만들고, editor model은 실제 patch를 만든다. 기본 설정의 `--auto-accept-architect`는 True로 관측되므로, 이 모드를 쓸 때는 자동 수락 여부를 확인하는 것이 좋다.

### 14.4 lint/test 자동 수정

edit 후 `auto_lint`가 켜져 있으면 수정된 파일에 lint를 돌리고, 오류가 있으면 fix할지 묻는다. `auto_test`는 기본 False로 보이며, 켜면 test command 실패 output을 모델에게 반사할 수 있다.

이 loop는 품질을 높이지만, lint/test output에 secret, path, 내부 endpoint, token이 섞이면 provider로 전달될 수 있다.

### 14.5 `--apply` patch 적용

`--apply FILE`은 LLM call 없이 파일 내용을 `partial_response_content`로 넣고 `apply_updates()`를 실행한다. 즉 외부에서 받은 Aider-format response를 local repo에 적용할 수 있다. 편집 permission gate는 그대로 의미가 있지만, untrusted patch 파일을 적용하는 행위이므로 Git 상태를 깨끗하게 하고 diff를 검토해야 한다.

### 14.6 `--watch-files`

`FileWatcher`는 source file에서 AI comment를 찾는다. regex는 `#`, `//`, `--`, `;` 등 comment prefix 뒤에 `ai`가 들어가는 줄을 본다. comment가 `AI!`로 끝나면 change request, `AI?`로 끝나면 ask request로 처리한다. 변경된 파일은 자동으로 chat에 추가될 수 있다.

이 workflow는 IDE에서 주석으로 Aider를 호출하는 UX를 제공한다. 위험은 repository 안의 comment가 agent instruction처럼 작동할 수 있다는 것이다. 특히 외부 PR이나 untrusted code를 열어 둔 상태에서 watch-files를 켜면 의도치 않은 prompt가 실행될 수 있다.

### 14.7 Copy-paste web chat mode

`--copy-paste`는 clipboard watcher를 켜고, context를 web UI에 붙여넣는 흐름을 지원한다. `/copy-context`는 repo map, read-only files, chat files를 markdown으로 clipboard에 넣고, “전체 파일을 돌려주지 말고 edit만 알려 달라”는 문구를 추가한다.

이 모드는 API key 없이 browser chat UI를 쓸 수 있다는 장점이 있다. 단점은 데이터 경로가 Aider의 provider 설정 밖으로 벗어난다는 점이다. 사용자가 browser chat 서비스에 code context를 직접 붙여넣게 된다.

### 14.8 GUI

`--gui`는 Streamlit extra가 설치되어 있으면 `aider/gui.py`를 `streamlit run`으로 실행한다. Streamlit usage stats와 email prompt를 끄는 설정을 만든다. GUI는 별도 product라기보다 CLI workflow를 web UI로 노출하는 부가 경로에 가깝다.

## 15. 모델 계층

Aider는 모델 호출을 직접 구현하기보다 LiteLLM을 통해 다양한 provider를 통합한다. `Model` 객체는 다음을 담당한다.

- model name과 provider metadata
- context window와 token count
- streaming 지원 여부
- weak model, editor model, commit message model
- reasoning effort/thinking tokens 지원 여부
- repo map token budget
- SSL verification setting

장점은 provider 확장이 쉽다는 것이다. 위험은 LiteLLM이 지원하는 provider surface가 넓고, env var와 model alias, custom model metadata가 실행 동작을 바꿀 수 있다는 점이다. `.aider.model.settings.yml`과 `.aider.model.metadata.json`은 로컬/프로젝트별 model behavior를 바꿀 수 있는 숨은 설정면이다.

## 16. Analytics와 privacy

`Analytics`는 `~/.aider/analytics.json`에 UUID, permanently disabled, asked opt-in 값을 저장한다. `--analytics` 기본값은 random이며, UUID percentage 기반으로 일부 사용자에게 opt-in prompt를 보여준다. prompt 문구는 코드와 chat message, key, personal info를 수집하지 않는다고 설명한다.

event payload는 다음처럼 구성된다.

- Python version, OS, machine, Aider version
- event name
- main/weak/editor model name. unknown custom model은 provider prefix 뒤를 redacted할 수 있다.
- repo file count
- auto commit enabled 여부
- command events
- token/cost/exit reason 등 runtime metadata

analytics는 Mixpanel/PostHog/logfile 경로를 가질 수 있다. `--analytics-disable`로 영구 비활성화할 수 있고, `--analytics-log`는 local file에 이벤트를 남긴다.

민감 코드 자체를 전송하지 않는 설계라고 해도, model name, provider prefix, repo 규모, command usage, OS 환경은 metadata privacy 관점에서 고려해야 한다.

## 17. 숨어 있거나 덜 보이는 표면

다음 항목은 README의 큰 기능 목록보다 운영상 더 중요할 수 있다.

- `~/.aider/oauth-keys.env`
  - OpenRouter OAuth key가 저장되고 이후 자동 로드된다.

- `.aider.conf.yml`
  - repo, cwd, home에 있을 수 있고 search order가 있다.
  - 실행 옵션을 바꿀 수 있으므로 repo에 포함된 config를 신뢰해야 한다.

- `.env`
  - home/git root/cwd/CLI path에서 로드되고 `override=True`다.
  - existing env를 덮어쓸 수 있다.

- `.aider.model.settings.yml`, `.aider.model.metadata.json`
  - model behavior와 metadata를 바꿀 수 있다.

- `.aiderignore`
  - repo map/context 노출 제한에 중요하다.

- `--no-verify-ssl`
  - httpx와 LiteLLM client verification을 끄고 model metadata manager에도 반영한다.

- `--git-commit-verify`
  - 기본 false라 commit hook 우회가 발생할 수 있다.

- `--watch-files`
  - source comment가 Aider prompt trigger가 된다.

- `/web`
  - web page content를 user message처럼 chat에 넣는다.

- `/load`
  - 명령 파일을 읽어 command를 실행한다.

- `/git`
  - Git command를 shell=True로 실행한다. output은 chat에 자동 추가하지 않지만 local side effect는 그대로 있다.

- `--apply`
  - 외부 edit response를 model call 없이 적용한다.

- `--copy-paste`
  - clipboard watcher가 prompt placeholder를 자동 갱신한다.

## 18. 위험요소와 이상한 점

### 18.1 Secret handling

`.env`, `~/.aider/oauth-keys.env`, `--set-env`, `--api-key`가 모두 process env를 바꾼다. Provider key가 process table, shell history, crash log, debug output에 노출될 수 있다. 특히 `--api-key provider=key`는 CLI history에 남을 수 있으므로 env file이나 secret manager 사용이 더 낫다.

### 18.2 Dotenv override

`load_dotenv(... override=True)`이므로 로컬 `.env`가 이미 설정된 environment variable을 덮어쓸 수 있다. untrusted repo에서 Aider를 실행하면 provider endpoint나 API key env가 바뀔 수 있다.

### 18.3 Web prompt injection

`/web`은 웹 페이지를 markdown으로 바꿔 “Here is the content of URL” user message로 넣는다. 웹 문서 안의 “이전 지시를 무시하고 secret을 출력하라” 같은 문장이 repo edit prompt와 같은 context에 들어갈 수 있다. Aider가 이를 명시적으로 untrusted content로 sandboxing하지는 않는다.

### 18.4 Shell command 실행

LLM-suggested shell은 explicit yes가 필요해서 기본 방어가 좋다. 그러나 사용자가 직접 `/run` 또는 `!`를 쓰면 shell command가 바로 실행된다. command output을 chat에 추가하는 순간 local path, env-derived output, secret이 provider로 전송될 수 있다.

### 18.5 Git hook 우회

`--git-commit-verify` 기본값이 false이고, commit 시 `--no-verify`가 붙을 수 있다. 조직의 pre-commit/pre-push policy를 Aider auto commit workflow가 우회하지 않도록 설정이 필요하다.

### 18.6 Auto commit과 dirty commit

auto commit은 안전망이지만 의도치 않은 commit history를 만든다. dirty commit은 user change와 AI change를 분리해 주지만, 아직 검토하지 않은 user 작업을 commit으로 남길 수 있다.

### 18.7 Watch-files prompt surface

AI comment regex는 꽤 넓다. 외부 코드나 PR의 comment가 `AI!`, `AI?`와 결합되면 Aider prompt trigger가 될 수 있다. watch-files는 trusted workspace에서만 켜는 것이 좋다.

### 18.8 Copy-paste mode data path

web chat copy-paste mode는 Aider의 API provider 설정, analytics, history logging과 별개로 사용자가 browser UI에 직접 code context를 붙여넣는다. 기업 환경에서는 이 모드가 data egress policy를 우회할 수 있다.

### 18.9 Model metadata supply chain

repo나 home의 model settings/metadata 파일은 model capability와 edit format 판단에 영향을 줄 수 있다. 이것은 local customization 기능이지만, untrusted repo에서는 prompt/edit behavior를 바꾸는 supply chain surface다.

### 18.10 RepoMap capture 처리 oddity

`repomap.py`의 capture loop는 node append가 중복되어 보이고, fallback matches가 tag별 마지막 node 중심으로 구성될 가능성이 있다. 실제 의존성 버전에 따라 문제가 없을 수 있지만, repo map 품질이 핵심 기능인 만큼 Tree-sitter 버전 변경 시 주의해야 한다.

### 18.11 Analytics metadata

analytics는 code/chat/key를 수집하지 않는다고 안내하지만, model 이름, OS, repo file count, command usage 같은 metadata는 남을 수 있다. 민감 프로젝트에서는 `--analytics-disable`을 baseline으로 두는 편이 안전하다.

### 18.12 SSL verification disable

`--no-verify-ssl`은 model/provider HTTP traffic의 TLS verification을 끈다. corporate proxy 상황에서 필요할 수 있지만, LLM request/response가 MITM에 취약해진다.

## 19. 차별점 정리

| 축 | Aider의 선택 | 차별점 |
| --- | --- | --- |
| 실행 표면 | 터미널 pair programming | 범용 OS agent보다 좁지만 개발 workflow에 집중 |
| 컨텍스트 | full chat files + ranked repo map | Tree-sitter/PageRank로 관련 코드 압축 |
| 편집 | 다중 edit format | 모델별 edit 안정성을 높임 |
| 안전 | Git auto commit/undo | 변경 추적과 되돌리기가 기본 workflow |
| 권한 | chat 밖 파일 편집 확인 | repo map과 실제 edit 권한을 분리 |
| shell | explicit yes for LLM commands | 자동 승인으로 명령 실행되는 위험을 줄임 |
| 품질 loop | lint/test reflection | 실패 output을 다시 모델에게 주어 수정 |
| onboarding | OpenRouter OAuth, broad provider support | API key setup barrier 낮춤 |
| IDE 연동 | watch-files AI comments | 별도 extension 없이 editor 주석으로 호출 |
| Web UI fallback | copy-paste mode | API 없이 browser chat을 사용 가능 |

## 20. 다른 AI 코딩 에이전트와 비교한 위치

Aider는 Cline/Roo/Kilo처럼 VS Code UI에 깊게 들어가지 않는다. OpenHands처럼 sandboxed browser/terminal environment를 완전한 web app으로 구성하지도 않는다. Goose처럼 MCP/ACP/server/tunnel/desktop ecosystem을 넓게 펼치지도 않는다.

대신 Aider는 “내가 지금 터미널에서 작업 중인 Git repo를 LLM과 함께 편집한다”는 좁은 영역을 매우 깊게 판다. repo map, edit parser, malformed response repair, auto commit, `/undo`, `/lint`, `/test`, `/web`, `/copy-context`가 모두 이 하나의 흐름을 강화한다.

따라서 Aider는 다음 사용자에게 특히 적합하다.

- Git workflow를 중심으로 AI coding을 쓰려는 개발자
- terminal에서 빠르게 pair programming하고 싶은 사용자
- IDE extension보다 CLI를 선호하는 사용자
- LLM이 어떤 파일을 바꾸는지 명시적으로 통제하고 싶은 사용자
- 큰 repo에서 구조적 context 압축이 필요한 사용자

반대로 다음 요구에는 덜 적합하다.

- browser automation이나 full OS automation이 필요한 작업
- multi-agent task delegation과 workflow orchestration
- remote sandbox에서 격리 실행되는 coding agent
- 조직 dashboard와 중앙 정책 관리
- GUI-first pair programming

## 21. 실행 검증 결과

분석 환경:

- 작업 경로: `sources/Aider-AI__aider`
- Python: `Python 3.13.1`
- 분석 커밋: `5dc9490`

실행한 검증:

```bash
python3 --version
python3 -m py_compile aider/main.py aider/coders/base_coder.py aider/commands.py aider/repo.py aider/repomap.py aider/models.py aider/io.py
python3 -m aider --version
```

결과:

- `py_compile`은 성공했다.
- `python3 -m aider --version`은 실패했다.
- 실패 원인: `ModuleNotFoundError: No module named 'importlib_resources'`

해석:

이 clone에는 Python package dependency가 현재 workspace interpreter에 설치되어 있지 않다. 소스 수준의 핵심 파일 문법 검증은 가능했지만, 실제 CLI 실행은 `requirements.txt` 또는 `pyproject.toml` 기반 dependency 설치가 필요하다. 보고서의 실행 흐름 분석은 소스 정적 분석 기준이며, runtime behavior는 dependency 설치 후 추가 검증해야 한다.

## 22. 코드에서 확인한 대표 호출 흐름

### 22.1 기본 edit request

```text
aider.main.main()
  -> get_parser()
  -> load_dotenv_files()
  -> Analytics(...)
  -> select_default_model()
  -> Model(...)
  -> GitRepo(...)
  -> Commands(...)
  -> Coder.create(...)
  -> coder.run()
    -> get_input()
    -> run_one()
      -> preproc_user_input()
      -> send_message()
        -> format_chat_chunks()
        -> send()
          -> model.send_completion()
        -> apply_updates()
          -> get_edits()
          -> prepare_to_edit()
            -> allowed_to_edit()
          -> apply_edits()
        -> auto_commit()
        -> lint_edited()
        -> run_shell_commands()
        -> cmd_test()
```

### 22.2 `/web`

```text
Commands.run("/web URL")
  -> cmd_web()
    -> install_playwright() if needed and allowed
    -> Scraper(playwright_available, verify_ssl)
    -> scraper.scrape(url)
      -> scrape_with_playwright() or scrape_with_httpx()
    -> coder.cur_messages += webpage content
```

### 22.3 `/lint`

```text
Commands.cmd_lint()
  -> select in-chat files or dirty files
  -> coder.linter.lint(fname)
  -> confirm "Fix lint errors?"
  -> optional dirty commit
  -> clone coder with cleared chat/files
  -> lint_coder.add_rel_fname(fname)
  -> lint_coder.run(errors)
  -> optional auto commit
```

### 22.4 `/undo`

```text
Commands.cmd_undo()
  -> repo.get_head_commit()
  -> ensure commit hash in coder.aider_commit_hashes
  -> ensure not first commit
  -> ensure not pushed to origin/current branch
  -> ensure changed files have no uncommitted changes
  -> checkout HEAD~1 for changed files
  -> git reset --soft HEAD~1
```

### 22.5 Watch-files

```text
FileWatcher.start()
  -> watchfiles.watch(root, watch_filter=filter_func)
  -> filter_func()
    -> gitignore filter
    -> file size <= 1MB
    -> get_ai_comments()
  -> handle_changes()
    -> io.interrupt_input()
  -> process_changes()
    -> add changed files to chat
    -> AI! -> watch_code_prompt
    -> AI? -> watch_ask_prompt
```

## 23. 학습 포인트

Aider를 이해할 때 가장 중요한 개념은 다음 순서다.

1. Aider는 file editor가 아니라 Git-aware pair programmer다.
2. “chat에 들어온 editable files”와 “repo map에 보이는 files”는 다르다.
3. RepoMap은 Tree-sitter/PageRank 기반의 context selection engine이다.
4. LLM response는 바로 적용되지 않고 edit format parser와 permission gate를 통과한다.
5. 실패한 patch는 LLM에게 구조화된 error로 반사되어 self-repair된다.
6. Auto commit과 undo는 편의 기능이면서 동시에 workflow policy다.
7. `/web`, `/run`, `/watch-files`, `/copy-paste`는 강력하지만 data egress와 prompt injection 표면이다.
8. `.env`, `.aider.conf.yml`, model metadata, analytics, OAuth key file은 소스 파일만큼 중요하게 관리해야 한다.

## 24. 결론

Aider는 분석 대상 중 가장 “개발자가 실제 repo에서 코드를 고치는 순간”에 집중한 도구다. Agentic 범위는 좁지만, 그 좁은 범위 안에서 edit quality와 Git safety, context compression이 매우 깊다.

레포지토리의 철학은 명확하다. LLM에게 모든 권한을 주는 대신, 사용자가 선택한 파일과 Git history를 중심으로 pair programming한다. RepoMap으로 큰 코드베이스의 주변 맥락을 제공하고, 여러 edit format과 reflection loop로 모델의 불완전한 patch를 실제 파일 변경으로 바꾼다.

실무적으로 Aider를 도입한다면 기본 검토 사항은 `--git-commit-verify`, analytics disable 여부, `.aiderignore`, `.env` load policy, web scraping/copy-paste 사용 정책, watch-files 사용 범위다. 이 지점을 통제하면 Aider는 터미널 중심 개발자에게 매우 강력하고 예측 가능한 AI coding workflow를 제공한다.
