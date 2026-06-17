# SamurAIGPT/llm-wiki-agent 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/SamurAIGPT__llm-wiki-agent |
| remote | https://github.com/SamurAIGPT/llm-wiki-agent |
| HEAD | f837f5b (2026-06-13) fix: sanitize entity filenames in heal.py to prevent path traversal |
| branch | main |
| groups | llm-wiki-100 |
| files | 28 |
| dirs | 10 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `LLM Wiki Agent`, `Related Projects`, `Install`, `Usage`, `What You Get`, `Use Cases`, `Research`, `Wiki builds entity pages (Meta AI, Google Brain) and`, `concept pages (Attention, RLHF, Context Window) automatically.`, `→ "No sources on mixture-of-experts — consider the Mixtral paper"`, `Reading a Book`, `Wiki creates entity and theme pages automatically.`, `Personal Knowledge Base`, `Business / Team Intelligence`, `→ "Project X mentioned in 5 pages but no dedicated page"`, `→ "Roadmap contradicts customer interview on priority of feature Y"`, `Competitive Analysis`, `→ agent shows the answer, then asks if you want to save it as a synthesis page`

> LLM Wiki Agent A coding agent skill. Drop source documents into raw/ and tell the agent to ingest them — it reads them, extracts knowledge, and builds a persistent interlinked wiki. Every new source makes the wiki richer. You never write it. Most knowledge tools make you search your own notes. This one reads everything you've collected and writes a structured wiki that compounds over time — cross references already built, contradictions already flagged, synthesis already done. Related Projects Open Generative AI — Add AI image & video generation to your knowledge base pipeline Open AI Design Agent — Autonomous AI design agent — pair with wiki agent for research + visual output Install Requires Claude Code, Codex, Gemini CLI, or any agent that reads a config file. Open in your agent — no API key or Python setup needed Usage All agents understand natural language and shorthand triggers Pla

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| AGENTS.md | file |
| CLAUDE.md | file |
| docs | dir |
| examples | dir |
| GEMINI.md | file |
| graph | dir |
| LICENSE | file |
| pyproject.toml | file |
| raw | dir |
| README.md | file |
| requirements.txt | file |
| tools | dir |
| wiki | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tools/ | 9 |
| (root) | 7 |
| .claude/ | 4 |
| wiki/ | 3 |
| examples/ | 2 |
| docs/ | 1 |
| graph/ | 1 |
| raw/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 1 | preferred |
| examples/ | 2 | preferred |
| tools/ | 9 | preferred |
| .claude/ | 4 | large |
| .claude/commands/ | 4 | large |
| wiki/ | 3 | large |
| examples/cjk-showcase/ | 2 | large |
| examples/cjk-showcase/raw/ | 1 | large |
| graph/ | 1 | large |
| raw/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`
- `requirements.txt`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | llm-wiki | true | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/automated-sync.md`
- `examples/cjk-showcase/README.md`

### 에이전트 지침 후보

- `.claude/commands/wiki-graph.md`
- `.claude/commands/wiki-ingest.md`
- `.claude/commands/wiki-lint.md`
- `.claude/commands/wiki-query.md`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`

### 스펙/템플릿/명령/스킬 후보

- `.claude/commands/wiki-graph.md`
- `.claude/commands/wiki-ingest.md`
- `.claude/commands/wiki-lint.md`
- `.claude/commands/wiki-query.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 14 |
| .py | 9 |
| .gitkeep | 2 |
| .toml | 1 |
| .txt | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `.claude/ 내부 책임 분리`
- `.claude/commands/ 내부 책임 분리`
- `.claude/commands/wiki-graph.md 스펙/명령 의미`
- `.claude/commands/wiki-ingest.md 스펙/명령 의미`
- `.claude/commands/wiki-lint.md 스펙/명령 의미`
- `.claude/commands/wiki-query.md 스펙/명령 의미`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

