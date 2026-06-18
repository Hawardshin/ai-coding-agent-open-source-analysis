# hmmhmmhm/daiso-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hmmhmmhm/daiso-mcp |
| local path | sources/hmmhmmhm__daiso-mcp |
| HEAD | 8b78570 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T16:33:42Z |
| trendScore / priorityScore | 73 / 158 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 290 | AGENTS.md, README.md, scripts/README.md |
| Frontend / developer experience | 52 | AGENTS.md, package.json, docs/daiso-network-analysis-result.md |
| Security / compliance | 31 | AGENTS.md, README.md, package.json |
| AI agent / tool use | 22 | AGENTS.md, README.md, package.json |
| Korean language / Korea domain | 13 | package.json, docs/ai-instruction.md, docs/megabox-network-analysis-result.md |
| Spec / doc-driven workflow | 13 | package.json, docs/archive/gs25-new-blutter-signal-summary.md, scripts/ghidra/check-cli-ghidra-mcp.sh |
| RAG / retrieval | 11 | docs/archive/gs25-app-capture-attempt-log-20260308.md, scripts/gs25-h2-header-decode.py, scripts/gs25-pangle-conscrypt-protobuf-likelihood.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, example-rich, frontend-dx, graphMemory, korea-signal, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, Swift |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 575 |
| manifests | 7 |
| docs | 58 |
| tests | 135 |
| ci/ops | 9 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Daiso MCP 및 Skill |
| headings | Daiso MCP 및 Skill / AI 앱에서 MCP 연결하기 / ![ChatGPT](https://img.shields.io/badge/ChatGPT-74aa9c?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTE0Ljk0OSA2LjU0N2EzLjk0IDMuOTQgMCAwIDAtLjM0OC0zLjI3MyA0LjExIDQuMTEgMCAwIDAtNC40LTEuOTM0QTQuMSA0LjEgMCAwIDAgOC40MjMuMiA0LjE1IDQuMTUgMCAwIDAgNi4zMDUuMDg2YTQuMSA0LjEgMCAwIDAtMS44OTEuOTQ4IDQuMDQgNC4wNCAwIDAgMC0xLjE1OCAxLjc1MyA0LjEgNC4xIDAgMCAwLTEuNTYzLjY3OUE0IDQgMCAwIDAgLjU1NCA0LjcyYTMuOTkgMy45OSAwIDAgMCAuNTAyIDQuNzMxIDMuOTQgMy45NCAwIDAgMCAuMzQ2IDMuMjc0IDQuMTEgNC4xMSAwIDAgMCA0LjQwMiAxLjkzM2MuMzgyLjQyNS44NTIuNzY0IDEuMzc3Ljk5NS41MjYuMjMxIDEuMDk1LjM1IDEuNjcuMzQ2IDEuNzguMDAyIDMuMzU4LTEuMTMyIDMuOTAxLTIuODA0YTQuMSA0LjEgMCAwIDAgMS41NjMtLjY4IDQgNCAwIDAgMCAxLjE0LTEuMjUzIDMuOTkgMy45OSAwIDAgMC0uNTA2LTQuNzE2bS02LjA5NyA4LjQwNmEzLjA1IDMuMDUgMCAwIDEtMS45NDUtLjY5NGwuMDk2LS4wNTQgMy4yMy0xLjgzOGEuNTMuNTMgMCAwIDAgLjI2NS0uNDU1di00LjQ5bDEuMzY2Ljc3OHEuMDIuMDExLjAyNS4wMzV2My43MjJjLS4wMDMgMS42NTMtMS4zNjEgMi45OTItMy4wMzcgMi45OTZtLTYuNTMtMi43NWEyLjk1IDIuOTUgMCAwIDEtLjM2LTIuMDFsLjA5NS4wNTdMNS4yOSAxMi4wOWEuNTMuNTMgMCAwIDAgLjUyNyAwbDMuOTQ5LTIuMjQ2djEuNTU1YS4wNS4wNSAwIDAgMS0uMDIyLjA0MUw2LjQ3MyAxMy4zYy0xLjQ1NC44MjYtMy4zMTEuMzM1LTQuMTUtMS4wOThtLS44NS02Ljk0QTMuMDIgMy4wMiAwIDAgMSAzLjA3IDMuOTQ5djMuNzg1YS41MS41MSAwIDAgMCAuMjYyLjQ1MWwzLjkzIDIuMjM3LTEuMzY2Ljc3OWEuMDUuMDUgMCAwIDEtLjA0OCAwTDIuNTg1IDkuMzQyYTIuOTggMi45OCAwIDAgMS0xLjExMy00LjA5NHptMTEuMjE2IDIuNTcxTDguNzQ3IDUuNTc2bDEuMzYyLS43NzZhLjA1LjA1IDAgMCAxIC4wNDggMGwzLjI2NSAxLjg2YTMgMyAwIDAgMSAxLjE3MyAxLjIwNyAyLjk2IDIuOTYgMCAwIDEtLjI3IDMuMiAzLjA1IDMuMDUgMCAwIDEtMS4zNi45OTdWOC4yNzlhLjUyLjUyIDAgMCAwLS4yNzYtLjQ0NW0xLjM2LTIuMDE1LS4wOTctLjA1Ny0zLjIyNi0xLjg1NWEuNTMuNTMgMCAwIDAtLjUzIDBMNi4yNDkgNi4xNTNWNC41OThhLjA0LjA0IDAgMCAxIC4wMTktLjA0TDkuNTMzIDIuN2EzLjA3IDMuMDcgMCAwIDEgMy4yNTcuMTM5Yy40NzQuMzI1Ljg0My43NzggMS4wNjYgMS4zMDMuMjIzLjUyNi4yODkgMS4xMDMuMTkxIDEuNjY0ek01LjUwMyA4LjU3NSA0LjEzOSA3LjhhLjA1LjA1IDAgMCAxLS4wMjYtLjAzN1Y0LjA0OWMwLS41Ny4xNjYtMS4xMjcuNDc2LTEuNjA3cy43NTItLjg2NCAxLjI3NS0xLjEwNWEzLjA4IDMuMDggMCAwIDEgMy4yMzQuNDFsLS4wOTYuMDU0LTMuMjMgMS44MzhhLjUzLjUzIDAgMCAwLS4yNjUuNDU1em0uNzQyLTEuNTc3IDEuNzU4LTEgMS43NjIgMXYybC0xLjc1NSAxLTEuNzYyLTF6Ii8+PC9zdmc+) / ![Claude](https://img.shields.io/badge/Claude-D4A27F?logo=anthropic&logoColor=white) / ![Claude Code](https://img.shields.io/badge/Claude_Code-D4A27F?logo=anthropic&logoColor=white) / ![Grok](https://img.shields.io/badge/Grok-000000?logo=x&logoColor=white) / 바로 실행해보기 / MCP 서버 URL / CLI (고급) / 인터랙티브 모드 (추천) / 인터랙티브 비활성화 (CI/스크립트) |
| excerpt | <div align="center" <img src="./assets/logo.svg" alt="Daiso MCP" width="120" height="120" <br <br Daiso MCP 및 Skill 다이소 제품/매장/재고 , 상품 가격 비교, 주변 음식점/카페, 주유소/유가, 개발자 요청 제출, 롯데마트 매장/상품 , GS25 매장/상품/재고 , 세븐일레븐 상품/매장/재고/인기검색어/카탈로그 , CU 매장/재고 , 이마트24 매장/상품/재고 , 올리브영 매장/재고 , 메가박스 지점/영화/시간표/좌석 , 롯데시네마 지점/영화/좌석 , CGV 극장/영화/시간표 조회 기능을 MCP, CLI, Codex Skill로 AI에 연결합니다. <br MCP https //mcp.aka.page · CLI npx daiso · Skill clawhub install daiso cli ClawHub clawhub.ai/hmmhmmhm/daiso cli https //clawhub.ai/hmmhmmhm/daiso cli 한국 로컬 리테일, 생활 정보, 영화관 조회를 MCP, CLI, Codex Skill로 연결하는 도구입니다. 사용자는 별도 API 키를 준비하지 않고 바로 사용할 수 있습니다. <br <h3 지원 서비스</h3 <table <thead <tr <th 분류</th <th 서비스</th <th 조회 기능</th </tr </thea |


## 주요 파일

### Manifests

- AGENTS.md
- README.md
- scripts/README.md
- scripts/ops/README.md
- scripts/research/README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 215 |
| tests | 135 |
| scripts | 133 |
| docs | 48 |
| .github | 15 |
| examples | 3 |
| assets | 2 |
| skills | 2 |
| .editorconfig | 1 |
| .env.example | 1 |
| .githooks | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| .nvmrc | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 438 |
| .md | 52 |
| .sh | 38 |
| .yml | 13 |
| .py | 11 |
| .json | 7 |
| [no-ext] | 7 |
| .example | 1 |
| .html | 1 |
| .jsonc | 1 |
| .kt | 1 |
| .sql | 1 |
| .svg | 1 |
| .swift | 1 |
| .toml | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
