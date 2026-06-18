# tobocop2/lilbee

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/tobocop2/lilbee |
| local path | sources/tobocop2__lilbee |
| HEAD | b7167f3 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:40:02Z |
| trendScore / priorityScore | 69 / 234 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 500 | AGENTS.md, examples/agent-integration/AGENTS.md, README.md |
| RAG / retrieval | 500 | AGENTS.md, examples/agent-integration/AGENTS.md, README.md |
| Local LLM / on-device inference | 267 | AGENTS.md, README.md, pyproject.toml |
| MCP / tool protocol | 222 | AGENTS.md, examples/agent-integration/AGENTS.md, README.md |
| AI agent / tool use | 192 | AGENTS.md, examples/agent-integration/AGENTS.md, README.md |
| Spec / doc-driven workflow | 103 | README.md, tools/qa/README.md, docs/agent-skills/lilbee-mcp/SKILL.md |
| Frontend / developer experience | 93 | AGENTS.md, examples/agent-integration/AGENTS.md, README.md |
| Security / compliance | 27 | AGENTS.md, pyproject.toml, docs/architecture.md |
| Infra / observability | 3 | docs/agent-skills/lilbee-mcp/SKILL.md, docs/architecture.md, tests/integration/fixtures/docs/deploy.md |
| Korean language / Korea domain | 1 | tests/fixtures/docs/recipes.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 663 |
| manifests | 9 |
| docs | 62 |
| tests | 205 |
| ci/ops | 21 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | or |
| headings | Quick start / Highlights / Why lilbee / What you can do with it / A library of your own files / Already using an MCP-aware agent? Hand setup to it. / Opencode integration (coming) / A reference for AI agents / Offline copies of websites / Documents, code, and scanned images |
| excerpt | <p align="center" <a href="https //lilbee.sh/" <picture <source media=" prefers color scheme dark " srcset="docs/lilbee logo dark.svg" <img alt="lilbee" src="docs/lilbee logo light.svg" width="340" </picture </a </p <p align="center" <strong Run and manage local AI models, and search everything you own with them, all in one program.</strong </p <p align="center" <a href="https //lilbee.sh/" Project site</a &nbsp;·&nbsp; <a href="https //lilbee.sh/tutorial" Tutorial reels</a &nbsp;·&nbsp; <a href="https //pypi.org/project/lilbee/" PyPI</a &nbsp;·&nbsp; <a href="https //obsidian.lilbee.sh/" Obsidian plugin</a &nbsp;·&nbsp; <a href="https //lilbee.sh/api/" REST API</a </p <p align="center" <a h |


## 주요 파일

### Manifests

- AGENTS.md
- examples/agent-integration/AGENTS.md
- README.md
- tools/qa/README.md
- tools/wheel-build/README.md
- Makefile
- pyproject.toml
- packaging/docker/Dockerfile
- tools/qa/requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- examples/agent-integration/AGENTS.md
- tools/qa/requirements.txt
- docs/architecture.md


### Agent Instruction Files

- AGENTS.md
- examples/agent-integration/AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 315 |
| tests | 203 |
| tools | 50 |
| .github | 36 |
| packaging | 16 |
| docs | 10 |
| scripts | 6 |
| site | 6 |
| examples | 3 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| AGENTS.md | 1 |
| bucket | 1 |
| CHANGELOG.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 508 |
| .yml | 36 |
| .tcss | 33 |
| .md | 31 |
| .sh | 16 |
| [no-ext] | 9 |
| .json | 5 |
| .toml | 4 |
| .txt | 3 |
| .css | 2 |
| .svg | 2 |
| .xml | 2 |
| .csv | 1 |
| .go | 1 |
| .html | 1 |
| .ini | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
