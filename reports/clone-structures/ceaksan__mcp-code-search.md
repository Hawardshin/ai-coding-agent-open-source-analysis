# ceaksan/mcp-code-search 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/ceaksan__mcp-code-search |
| remote | https://github.com/ceaksan/mcp-code-search.git |
| HEAD | 00360fe (2026-03-09) refactor: switch default embedding model from jina to all-MiniLM-L6-v2 |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 23 |
| dirs | 3 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `mcp-code-search`, `Features`, `Installation`, `MCP Configuration`, `Tools`, `Configuration`, `Embedding Models`, `sentence-transformers (Local)`, `Ollama (Local)`, `How to Choose`, `Testing`, `License`

> mcp code search Local semantic code search MCP server. AST aware chunking with Tree sitter, hybrid search via LanceDB + sentence transformers. Features Tree sitter AST aware code chunking (function, class, method, module) Hybrid search vector similarity + full text keyword (RRF merge) Incremental indexing (only re indexes changed files) 20+ programming language support Fully local, no internet required Installation With Ollama support MCP Configuration Add to claude desktop config.json or your MCP client config Tools Tool Description index directory Index a directory (Tree sitter AST parsing) search code Hybrid semantic + keyword search search text Full text keyword search (grep alternative) find similar code Find similar code snippets get index status View index statistics list projects List indexed projects Configuration Project level .code search.toml or global ~/.config/mcp code sear

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| LICENSE | file |
| pyproject.toml | file |
| README.md | file |
| src | dir |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 11 |
| tests/ | 7 |
| (root) | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 11 | preferred |
| tests/ | 7 | preferred |
| src/mcp_code_search/ | 11 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | mcp-code-search | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

- `src/mcp_code_search/__init__.py`
- `src/mcp_code_search/__main__.py`
- `src/mcp_code_search/chunker.py`
- `src/mcp_code_search/config.py`
- `src/mcp_code_search/embedder.py`
- `src/mcp_code_search/indexer.py`
- `src/mcp_code_search/languages.py`
- `src/mcp_code_search/models.py`
- `src/mcp_code_search/server.py`
- `src/mcp_code_search/store.py`
- `src/mcp_code_search/watcher.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/test_chunker.py`
- `tests/test_config.py`
- `tests/test_embedder.py`
- `tests/test_indexer.py`
- `tests/test_store.py`
- `tests/test_watcher.py`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 18 |
| .gitignore | 1 |
| .lock | 1 |
| .md | 1 |
| .toml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `src/mcp_code_search/ 내부 책임 분리`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

