# benmaster82/Kwipu 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/benmaster82__Kwipu |
| remote | https://github.com/benmaster82/Kwipu |
| HEAD | 908f0e4 (2026-05-18) Add MCP badge |
| branch | main |
| groups | llm-wiki-100 |
| files | 19 |
| dirs | 3 |
| stack | Python |

## 구조 해석

- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Kwipu`, `What's New`, `Features`, `Requirements`, `Setup`, `Install dependencies`, `Pull models in Ollama`, `MCP Server (Claude Desktop, Cursor, Windsurf)`, `Usage`, `Full mode (default, all retrievers)`, `Fast mode (skips LLM synonym retriever, faster queries)`, `Override models from CLI (no need to edit the file)`, `Build with cloud model, then query with local model`, `After build completes, restart with:`, `How It Works`, `Project Structure`, `Pointing to an Obsidian Vault`, `Model Recommendations`

> Kwipu 中文文档 A local Graph RAG system that turns your markdown notes into a queryable knowledge graph. Ask questions in natural language and get answers that connect information across multiple files. Built for Obsidian vaults but works with any folder of markdown files. What's New MCP Server use Kwipu as a tool inside Claude Desktop, Cursor, Windsurf, or any MCP compatible agent. All processing runs locally via Ollama. Incremental updates editing a note no longer rebuilds the entire graph. Modified files are updated in place in seconds. CLI model override switch LLM or embedding model without editing code llm model , embed model Startup validation checks that Ollama is running and models are available before starting. Clear error messages with suggested commands. Storage integrity detects embedding model mismatches to prevent silent corruption of the graph. Refined prompt rewritten anti h

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| CONTRIBUTING.md | file |
| geode_graph.py | file |
| img | dir |
| knowledge_base | dir |
| kwipu_mcp_server.py | file |
| lang_config.py | file |
| LICENSE | file |
| README.md | file |
| README.zh-CN.md | file |
| requirements.txt | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| (root) | 9 |
| knowledge_base/ | 8 |
| img/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| knowledge_base/ | 8 | large |
| knowledge_base/examples/ | 8 | large |
| img/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`

### 에이전트 지침 후보

- `kwipu_mcp_server.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 11 |
| .py | 3 |
| .png | 2 |
| .gitignore | 1 |
| .txt | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `knowledge_base/ 내부 책임 분리`
- `knowledge_base/examples/ 내부 책임 분리`
- `img/ 내부 책임 분리`
- `requirements.txt 실행 스크립트와 패키지 경계`

