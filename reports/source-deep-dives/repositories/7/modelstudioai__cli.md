# modelstudioai/cli 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Official Model Studio CLI（阿里云百炼 CLI）built for AI Agent frameworks, exposing models, search, multimodal, and workflow capabilities as structured tool calls.

## 요약

- 조사 단위: `sources/modelstudioai__cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 299 files, 65 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/bailian-cli/reference/mcp.md, packages/core/src/client/mcp.ts, packages/cli/tests/e2e/mcp.e2e.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelstudioai/cli |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 243 |
| Forks | 14 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelstudioai__cli](../../../../sources/modelstudioai__cli) |
| 기존 보고서 | [reports/global-trending/repositories/modelstudioai__cli.md](../../../global-trending/repositories/modelstudioai__cli.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 299 / 65 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, .vite-hooks, docs, packages, skills, tools |
| 상위 확장자 | .ts: 187, .md: 53, .mjs: 36, .json: 7, (none): 7, .js: 3, .yml: 3, .yaml: 2, .png: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/cli | packages workspace | 66 |
| packages/core | packages workspace | 25 |
| docs | documentation surface | 17 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | ready | vp check && vp run -r test && vp run -r build |
| utility | package.json | prepare | vp config |
| quality | package.json | check | vp check |
| build | package.json | sync:skill-assets | pnpm --filter bailian-cli-core run build && pnpm --filter bailian-cli run generate:reference && pnpm --filter bailian-cli run sync:skill-version |
| serve-dev | package.json | dev | pnpm -F bailian-cli-core dev |
| serve-dev | package.json | bl | pnpm -F bailian-cli dev |
| test | package.json | test | vp test |
| build | package.json | release:check | node tools/release/check.mjs |
| utility | package.json | wiki:crawl | node tools/wiki-crawler/index.mjs |
| test | package.json | test:stress | node packages/cli/tests/stress/run.mjs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [skills/bailian-cli/reference/mcp.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/mcp.md) | mcp signal |
| mcp | [packages/core/src/client/mcp.ts](../../../../sources/modelstudioai__cli/packages/core/src/client/mcp.ts) | mcp signal |
| mcp | [packages/cli/tests/e2e/mcp.e2e.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/e2e/mcp.e2e.test.ts) | mcp signal |
| mcp | [packages/cli/src/commands/mcp/call.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/mcp/call.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/modelstudioai__cli/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/browser-probe-localhost-console.js](../../../../sources/modelstudioai__cli/tools/browser-probe-localhost-console.js) | agentRuntime signal |
| agentRuntime | [tools/generate-reference.ts](../../../../sources/modelstudioai__cli/tools/generate-reference.ts) | agentRuntime signal |
| agentRuntime | [tools/sync-skill-metadata.ts](../../../../sources/modelstudioai__cli/tools/sync-skill-metadata.ts) | agentRuntime signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/index.ts) | entrypoints signal |
| entrypoints | [packages/cli/src/main.ts](../../../../sources/modelstudioai__cli/packages/cli/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/modelstudioai__cli/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/modelstudioai__cli/pnpm-workspace.yaml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [packages/core/src/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/index.ts)<br>[packages/cli/src/main.ts](../../../../sources/modelstudioai__cli/packages/cli/src/main.ts) |
| agentRuntime | 63 | [AGENTS.md](../../../../sources/modelstudioai__cli/AGENTS.md)<br>[tools/browser-probe-localhost-console.js](../../../../sources/modelstudioai__cli/tools/browser-probe-localhost-console.js)<br>[tools/generate-reference.ts](../../../../sources/modelstudioai__cli/tools/generate-reference.ts)<br>[tools/sync-skill-metadata.ts](../../../../sources/modelstudioai__cli/tools/sync-skill-metadata.ts)<br>[tools/release/check.mjs](../../../../sources/modelstudioai__cli/tools/release/check.mjs)<br>[tools/release/publish-channel.mjs](../../../../sources/modelstudioai__cli/tools/release/publish-channel.mjs)<br>[tools/release/publish-stable.mjs](../../../../sources/modelstudioai__cli/tools/release/publish-stable.mjs)<br>[tools/release/lib/git.mjs](../../../../sources/modelstudioai__cli/tools/release/lib/git.mjs) |
| mcp | 6 | [skills/bailian-cli/reference/mcp.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/mcp.md)<br>[packages/core/src/client/mcp.ts](../../../../sources/modelstudioai__cli/packages/core/src/client/mcp.ts)<br>[packages/cli/tests/e2e/mcp.e2e.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/e2e/mcp.e2e.test.ts)<br>[packages/cli/src/commands/mcp/call.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/mcp/call.ts)<br>[packages/cli/src/commands/mcp/list.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/mcp/list.ts)<br>[packages/cli/src/commands/mcp/tools.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/mcp/tools.ts) |
| retrieval | 29 | [skills/bailian-cli/reference/index.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/index.md)<br>[skills/bailian-cli/reference/knowledge.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/knowledge.md)<br>[skills/bailian-cli/reference/memory.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/memory.md)<br>[packages/core/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/core/tests/index.test.ts)<br>[packages/core/src/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/index.ts)<br>[packages/core/src/utils/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/utils/index.ts)<br>[packages/core/src/types/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/types/index.ts)<br>[packages/core/src/telemetry/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/telemetry/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 64 | [packages/core/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/core/tests/index.test.ts)<br>[packages/cli/tests/args.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/args.test.ts)<br>[packages/cli/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/index.test.ts)<br>[packages/cli/tests/proxy.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/proxy.test.ts)<br>[packages/cli/tests/stress/run.mjs](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/run.mjs)<br>[packages/cli/tests/stress/stress.defaults.json](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/stress.defaults.json)<br>[packages/cli/tests/stress/targets/image-edit.mjs](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/targets/image-edit.mjs)<br>[packages/cli/tests/stress/targets/image-generate.mjs](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/targets/image-generate.mjs) |
| security | 11 | [skills/bailian-cli/reference/auth.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/auth.md)<br>[packages/core/src/auth/credentials.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/credentials.ts)<br>[packages/core/src/auth/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/index.ts)<br>[packages/core/src/auth/resolver.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/resolver.ts)<br>[packages/core/src/auth/types.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/types.ts)<br>[packages/cli/tests/e2e/auth.e2e.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/e2e/auth.e2e.test.ts)<br>[packages/cli/src/commands/auth/login-console.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/auth/login-console.ts)<br>[packages/cli/src/commands/auth/login.ts](../../../../sources/modelstudioai__cli/packages/cli/src/commands/auth/login.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/modelstudioai__cli/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/modelstudioai__cli/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/modelstudioai__cli/AGENTS.md) |
| docs | 23 | [README.md](../../../../sources/modelstudioai__cli/README.md)<br>[README.zh.md](../../../../sources/modelstudioai__cli/README.zh.md)<br>[skills/bailian-cli/README.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/README.md)<br>[skills/bailian-cli/README.zh.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/README.zh.md)<br>[packages/core/README.md](../../../../sources/modelstudioai__cli/packages/core/README.md)<br>[packages/core/README.zh.md](../../../../sources/modelstudioai__cli/packages/core/README.zh.md)<br>[packages/cli/README.md](../../../../sources/modelstudioai__cli/packages/cli/README.md)<br>[packages/cli/README.zh.md](../../../../sources/modelstudioai__cli/packages/cli/README.zh.md) |
| config | 7 | [package.json](../../../../sources/modelstudioai__cli/package.json)<br>[pnpm-workspace.yaml](../../../../sources/modelstudioai__cli/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/modelstudioai__cli/tsconfig.json)<br>[packages/core/package.json](../../../../sources/modelstudioai__cli/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/modelstudioai__cli/packages/core/tsconfig.json)<br>[packages/cli/package.json](../../../../sources/modelstudioai__cli/packages/cli/package.json)<br>[packages/cli/tsconfig.json](../../../../sources/modelstudioai__cli/packages/cli/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 64 | [packages/core/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/core/tests/index.test.ts)<br>[packages/cli/tests/args.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/args.test.ts)<br>[packages/cli/tests/index.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/index.test.ts)<br>[packages/cli/tests/proxy.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/proxy.test.ts)<br>[packages/cli/tests/stress/run.mjs](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/run.mjs)<br>[packages/cli/tests/stress/stress.defaults.json](../../../../sources/modelstudioai__cli/packages/cli/tests/stress/stress.defaults.json) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/modelstudioai__cli/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/modelstudioai__cli/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 11 | [skills/bailian-cli/reference/auth.md](../../../../sources/modelstudioai__cli/skills/bailian-cli/reference/auth.md)<br>[packages/core/src/auth/credentials.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/credentials.ts)<br>[packages/core/src/auth/index.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/index.ts)<br>[packages/core/src/auth/resolver.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/resolver.ts)<br>[packages/core/src/auth/types.ts](../../../../sources/modelstudioai__cli/packages/core/src/auth/types.ts)<br>[packages/cli/tests/e2e/auth.e2e.test.ts](../../../../sources/modelstudioai__cli/packages/cli/tests/e2e/auth.e2e.test.ts) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/modelstudioai__cli/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/bailian-cli/reference/mcp.md`, `packages/core/src/client/mcp.ts`, `packages/cli/tests/e2e/mcp.e2e.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/core/src/index.ts`, `packages/cli/src/main.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/browser-probe-localhost-console.js`, `tools/generate-reference.ts`.
4. retrieval/memory/indexing 확인: `skills/bailian-cli/reference/index.md`, `skills/bailian-cli/reference/knowledge.md`, `skills/bailian-cli/reference/memory.md`.
5. test/eval 파일로 동작 검증: `packages/core/tests/index.test.ts`, `packages/cli/tests/args.test.ts`, `packages/cli/tests/index.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Official Model Studio CLI（阿里云百炼 CLI）built for AI Agent frameworks, exposing models, search, multimodal, and workflow cap. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
