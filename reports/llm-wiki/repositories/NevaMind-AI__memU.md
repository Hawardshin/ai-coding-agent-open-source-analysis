# NevaMind-AI/memU 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/NevaMind-AI__memU |
| remote | https://github.com/NevaMind-AI/memU |
| HEAD | f4e82ce (2026-06-18) docs(readme): sync translated READMEs to file-system-as-memory narrative (#433) |
| branch | main |
| groups | llm-wiki-100 |
| files | 240 |
| dirs | 57 |
| stack | Python, Rust |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `memU`, `File System as Memory, Memory Shapes the Agent`, `🔄 How It Works`, `🗂️ The Memory File System`, `🧩 What memU Builds`, `⭐️ Star the repository`, `✨ Core Features`, `🎯 Use Cases`, `1. **Conversation Memory**`, `2. **Workspace Context for Coding Agents**`, `3. **Multimodal Knowledge Layer**`, `Audio is supported for your own .mp3/.wav/.m4a files.`, `4. **Tool and Agent Learning**`, `🗂️ Architecture`, `🚀 Quick Start`, `Option 1: Cloud Version`, `Option 2: Self-Hosted`, `or, for the full development setup:`

> <div align="center" memU File System as Memory, Memory Shapes the Agent <a href="https //trendshift.io/repositories/17374" target=" blank" <img src="https //trendshift.io/api/badge/repositories/17374" alt="NevaMind AI%2FmemU Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a English 中文 日本語 한국어 Español Français </div memU is a memory file system for AI agents. Instead of flattening everything an agent learns into one giant prompt or an opaque vector blob, memU organizes memory the way you organize a computer — as a navigable, self organizing file system Resources are the raw files an agent ingests chats, docs, URLs, images, audio, video, and logs Memory items are the files — typed, structured notes extracted from those sources Categories are the folders — they group related memories and keep evolving summaries The agent is the operating system — it memorize() s new

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .python-version | file |
| AGENTS.md | file |
| assets | dir |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| examples | dir |
| LICENSE.txt | file |
| Makefile | file |
| MANIFEST.in | file |
| pyproject.toml | file |
| readme | dir |
| README.md | file |
| setup.cfg | file |
| src | dir |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 116 |
| examples/ | 41 |
| assets/ | 22 |
| tests/ | 17 |
| (root) | 15 |
| docs/ | 14 |
| .github/ | 9 |
| readme/ | 6 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 116 | preferred |
| docs/ | 14 | preferred |
| examples/ | 41 | preferred |
| tests/ | 17 | preferred |
| src/memu/ | 115 | large |
| src/memu/database/ | 46 | large |
| src/memu/prompts/ | 27 | large |
| assets/ | 22 | large |
| examples/output/ | 10 | large |
| examples/output/conversation_example/ | 10 | large |
| src/memu/llm/ | 10 | large |
| .github/ | 9 | large |
| examples/proactive/ | 9 | large |
| examples/resources/ | 9 | large |
| examples/proactive/memory/ | 8 | large |
| assets/partners/ | 7 | large |
| assets/usecase/ | 7 | large |
| src/memu/app/ | 7 | large |
| src/memu/embedding/ | 7 | large |
| readme/ | 6 | large |
| .github/ISSUE_TEMPLATE/ | 5 | large |
| src/memu/utils/ | 5 | large |
| src/memu/workflow/ | 5 | large |
| docs/adr/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `examples/sealos-assistant/requirements.txt`
- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | memu-py | false | false | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml | memu | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/HACKATHON_ISSUE_DRAFT.md`
- `docs/HACKATHON_MAD_COMBOS.md`
- `docs/adr/0001-workflow-pipeline-architecture.md`
- `docs/adr/0002-pluggable-storage-and-vector-strategy.md`
- `docs/adr/0003-user-scope-in-data-model.md`
- `docs/adr/README.md`
- `docs/architecture.md`
- `docs/integrations/grok.md`
- `docs/langgraph_integration.md`
- `docs/providers/grok.md`
- `docs/sealos-devbox-guide.md`
- `docs/sealos_use_case.md`
- `docs/sqlite.md`
- `docs/tutorials/getting_started.md`
- `examples/resources/docs/doc1.txt`
- `examples/resources/docs/doc2.txt`
- `examples/sealos-assistant/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `examples/example_2_skill_extraction.py`
- `src/memu/prompts/memory_type/skill.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/example/example_conversation.json`
- `tests/integrations/test_langgraph.py`
- `tests/llm/test_grok_provider.py`
- `tests/rust_entry_test.py`
- `tests/test_client_wrapper.py`
- `tests/test_inmemory.py`
- `tests/test_lazyllm.py`
- `tests/test_openrouter.py`
- `tests/test_postgres.py`
- `tests/test_postgres_migration_config.py`
- `tests/test_references.py`
- `tests/test_salience.py`
- `tests/test_sqlite.py`
- `tests/test_tool_memory.py`
- `tests/test_vector.py`
- `tests/utils/test_conversation.py`

### CI/Docker 후보

- `.github/workflows/build.yml`
- `.github/workflows/pr-title.yml`
- `.github/workflows/release-please.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 149 |
| .md | 36 |
| .png | 16 |
| .yml | 8 |
| .txt | 7 |
| .jpg | 6 |
| .json | 4 |
| .lock | 2 |
| .toml | 2 |
| .cfg | 1 |
| .gif | 1 |
| .gitignore | 1 |
| .in | 1 |
| .pyi | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `src/memu/ 내부 책임 분리`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `examples/sealos-assistant/requirements.txt 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

