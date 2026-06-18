# rebel0789/codexpro 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Use ChatGPT Developer Mode as a local coding agent for your repo through MCP.

## 요약

- 조사 단위: `sources/rebel0789__codexpro` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 50 files, 5 directories, depth score 72, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.example.md이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | rebel0789/codexpro |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 239 |
| Forks | 22 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/rebel0789__codexpro](../../../../sources/rebel0789__codexpro) |
| 기존 보고서 | [reports/global-trending/repositories/rebel0789__codexpro.md](../../../global-trending/repositories/rebel0789__codexpro.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 50 / 5 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, docs, scripts, src |
| 상위 확장자 | .ts: 14, .md: 12, .mjs: 9, .json: 3, .svg: 3, (none): 3, .html: 2, .css: 1, .env: 1, .js: 1, .yml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.json |
| build | package.json | prepack | npm run build |
| serve-dev | package.json | start | node dist/stdio.js |
| serve-dev | package.json | start:stdio | node dist/stdio.js |
| serve-dev | package.json | start:http | node dist/http.js |
| serve-dev | package.json | dev:stdio | tsx src/stdio.ts |
| serve-dev | package.json | dev:http | tsx src/http.ts |
| utility | package.json | smoke | node scripts/smoke.mjs && node scripts/http-smoke.mjs && node scripts/pro-smoke.mjs && node scripts/doctor-smoke.mjs && node scripts/settings-smoke.mjs && node scripts/execute-handoff-smoke.mjs |
| utility | package.json | doctor | node scripts/codexpro.mjs doctor |
| utility | package.json | connect | node scripts/codexpro.mjs |
| utility | package.json | connect:setup | node scripts/codexpro.mjs setup |
| utility | package.json | connect:local | node scripts/codexpro.mjs --tunnel none |
| utility | package.json | connect:cloudflare | node scripts/codexpro.mjs --tunnel cloudflare |
| utility | package.json | connect:chatgpt | node scripts/codexpro.mjs --tunnel cloudflare |
| utility | package.json | connect:stable | node scripts/codexpro.mjs --tunnel cloudflare-named |
| utility | package.json | connect:ngrok | node scripts/codexpro.mjs ngrok |
| build | package.json | pro:bundle | node scripts/pro-bundle.mjs |
| utility | package.json | pro:apply | node scripts/pro-apply.mjs |
| entrypoint | package.json bin | codexpro.mjs | scripts/codexpro.mjs |
| entrypoint | package.json bin | stdio.js | dist/stdio.js |
| entrypoint | package.json bin | http.js | dist/http.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.example.md](../../../../sources/rebel0789__codexpro/AGENTS.example.md) | agentRuntime signal |
| entrypoints | [src/server.ts](../../../../sources/rebel0789__codexpro/src/server.ts) | entrypoints signal |
| config | [package.json](../../../../sources/rebel0789__codexpro/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/rebel0789__codexpro/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/rebel0789__codexpro/.github/workflows/ci.yml) | ci support |
| manifest-entrypoint | [scripts/codexpro.mjs](../../../../sources/rebel0789__codexpro/scripts/codexpro.mjs) | package manifest entrypoint |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/server.ts](../../../../sources/rebel0789__codexpro/src/server.ts) |
| agentRuntime | 1 | [AGENTS.example.md](../../../../sources/rebel0789__codexpro/AGENTS.example.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docs/index.html](../../../../sources/rebel0789__codexpro/docs/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 2 | [SECURITY.md](../../../../sources/rebel0789__codexpro/SECURITY.md)<br>[src/guard.ts](../../../../sources/rebel0789__codexpro/src/guard.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/rebel0789__codexpro/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README_ZH.md](../../../../sources/rebel0789__codexpro/README_ZH.md)<br>[README.md](../../../../sources/rebel0789__codexpro/README.md)<br>[docs/favicon.svg](../../../../sources/rebel0789__codexpro/docs/favicon.svg)<br>[docs/index.html](../../../../sources/rebel0789__codexpro/docs/index.html)<br>[docs/og.svg](../../../../sources/rebel0789__codexpro/docs/og.svg)<br>[docs/script.js](../../../../sources/rebel0789__codexpro/docs/script.js)<br>[docs/star.svg](../../../../sources/rebel0789__codexpro/docs/star.svg)<br>[docs/styles.css](../../../../sources/rebel0789__codexpro/docs/styles.css) |
| config | 2 | [package.json](../../../../sources/rebel0789__codexpro/package.json)<br>[tsconfig.json](../../../../sources/rebel0789__codexpro/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/rebel0789__codexpro/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/rebel0789__codexpro/SECURITY.md)<br>[src/guard.ts](../../../../sources/rebel0789__codexpro/src/guard.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.example.md`, `src/server.ts`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/server.ts`.
3. agent/tool runtime 매핑: `AGENTS.example.md`.
4. retrieval/memory/indexing 확인: `docs/index.html`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Use ChatGPT Developer Mode as a local coding agent for your repo through MCP.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, modelcontextprotocol, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
