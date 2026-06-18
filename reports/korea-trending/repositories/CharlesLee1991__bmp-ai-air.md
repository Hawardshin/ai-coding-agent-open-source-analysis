# CharlesLee1991/bmp-ai-air

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/CharlesLee1991/bmp-ai-air |
| local path | sources/CharlesLee1991__bmp-ai-air |
| HEAD | c42d244 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-13T14:16:22Z |
| trendScore / priorityScore | 76 / 139 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 53 | README.md, app/docs/page.tsx, public/llms.txt |
| Korean language / Korea domain | 51 | public/llms.txt, app/layout.tsx, app/page.tsx |
| Frontend / developer experience | 35 | package.json, app/layout.tsx, next-env.d.ts |
| AI agent / tool use | 19 | AGENTS.md, CLAUDE.md, .github/workflows/guard.yml |
| Security / compliance | 17 | AGENTS.md, README.md, CLAUDE.md |
| Spec / doc-driven workflow | 15 | AGENTS.md, CLAUDE.md, .github/workflows/guard.yml |
| Infra / observability | 2 | package-lock.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, infra-observability, korea-signal, llmFramework, mcp, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 21 |
| manifests | 6 |
| docs | 4 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | bmp-ai-air |
| headings | bmp-ai-air / 데이터 소스 / 활성 도구 (Tier 1, anonymous) / 빌드 / 환경변수 |
| excerpt | bmp ai air AIR Copilot Tier 1 — 한국 디지털 광고 시장 통합 데이터 게이트웨이. 도메인 https //air.bmp.ai 소속 BIZACTIONER 방 / Track K 본방 단독 운영 AIR 운영팀·DATA ENG·GP 앱 팀 협의 ❌ 데이터 소스 Supabase EF air llm mcp v2 → ES bizspring es bmp media v1 활성 도구 Tier 1, anonymous 1. get korean ad market overview — 30일 매체별 광고비 + 점유율 2. get media market share — 매체 점유율 light 3. get seasonal ad spending pattern — 시즌 추이 30d/90d/180d 4. get advertiser count by media — 매체별 활성 광고주 수 빌드 환경변수 AIR LLM MCP URL — Supabase EF endpoint AIR LLM MCP KEY — Supabase anon JWT |


## 주요 파일

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- next.config.mjs
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| app | 9 |
| public | 2 |
| .github | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| next-env.d.ts | 1 |
| next.config.mjs | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .tsx | 8 |
| .json | 3 |
| .md | 3 |
| .txt | 2 |
| .css | 1 |
| .mjs | 1 |
| .ts | 1 |
| .yml | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
