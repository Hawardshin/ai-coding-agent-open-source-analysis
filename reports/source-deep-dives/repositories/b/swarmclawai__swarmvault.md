# swarmclawai/swarmvault 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The local-first LLM Wiki: open-source knowledge graph builder, RAG knowledge base, and agent memory store. Built on Andrej Karpathy's pattern. An Obsidian alternative for personal knowledge management, AI second brain, and durable Claude Code / Codex / OpenClaw memory.

## 요약

- 조사 단위: `sources/swarmclawai__swarmvault` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 352 files, 87 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/engine/src/mcp.ts이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | swarmclawai/swarmvault |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/swarmclawai__swarmvault](../../../../sources/swarmclawai__swarmvault) |
| 기존 보고서 | [reports/korea-trending/repositories/swarmclawai__swarmvault.md](../../../korea-trending/repositories/swarmclawai__swarmvault.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 352 / 87 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, docs, packages, scripts, skills, smoke, templates, validation, worked |
| 상위 확장자 | .ts: 182, .md: 39, .tsx: 34, .json: 20, .mjs: 16, (none): 6, .html: 3, .php: 3, .sh: 3, .svg: 3, .yaml: 3, .yml: 3 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/engine | packages workspace | 77 |
| packages/viewer | packages workspace | 21 |
| packages/obsidian-plugin | packages workspace | 9 |
| packages/cli | packages workspace | 5 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| smoke | top-level component | 1 |
| templates | top-level component | 1 |
| validation | top-level component | 1 |
| worked | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | pnpm --filter @swarmvaultai/viewer build && pnpm --filter @swarmvaultai/engine build && pnpm --filter @swarmvaultai/cli build |
| test | package.json | test | node ./scripts/check-published-manifests.mjs && node --test ./scripts/release-preflight-summary.test.mjs && pnpm -r test |
| quality | package.json | lint | biome check . |
| quality | package.json | lint:fix | biome check --write . |
| quality | package.json | format | biome format --write . |
| quality | package.json | typecheck | pnpm -r typecheck |
| build | package.json | check | biome check . && pnpm -r typecheck && node ./scripts/check-release-sync.mjs && node ./scripts/check-published-manifests.mjs && node ./scripts/check-readme-parity.mjs && node ./scripts/check-clawhub-skill.mjs |
| build | package.json | check:release-sync | node ./scripts/check-release-sync.mjs |
| quality | package.json | check:published-manifests | node ./scripts/check-published-manifests.mjs |
| quality | package.json | check:readme-parity | node ./scripts/check-readme-parity.mjs |
| quality | package.json | check:clawhub-skill | node ./scripts/check-clawhub-skill.mjs |
| quality | package.json | check:perf | node ./scripts/check-perf-budget.mjs |
| utility | package.json | docs:screenshots | node ./scripts/sync-docs-screenshots.mjs |
| utility | package.json | live:smoke:heuristic | node ./scripts/live-smoke.mjs --lane heuristic |
| quality | package.json | live:smoke:heuristic:browser | node ./scripts/live-smoke.mjs --lane heuristic --browser-check |
| utility | package.json | live:smoke:neo4j | node ./scripts/live-smoke.mjs --lane neo4j |
| utility | package.json | live:smoke:ollama | node ./scripts/live-smoke.mjs --lane ollama |
| utility | package.json | live:smoke:openai | node ./scripts/live-smoke.mjs --lane openai |
| utility | package.json | live:smoke:anthropic | node ./scripts/live-smoke.mjs --lane anthropic |
| utility | package.json | live:oss:corpus | node ./scripts/live-oss-corpus.mjs |
| utility | package.json | live:cli-surface | node ./scripts/cli-surface-smoke.mjs |
| build | package.json | release:preflight | node ./scripts/release-preflight.mjs |
| build | package.json | release:publish | node ./scripts/release-publish.mjs |
| utility | package.json | skill:publish | node ./scripts/publish-clawhub-skill.mjs |
| test | package.json | skill:inspect | clawhub inspect swarmvault --files |
| utility | package.json | prepare | lefthook install |


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
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [packages/engine/src/mcp.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/src/mcp.ts) | mcp signal |
| agentRuntime | [skills/swarmvault/README.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/README.md) | agentRuntime signal |
| agentRuntime | [skills/swarmvault/SKILL.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/swarmvault/TROUBLESHOOTING.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/TROUBLESHOOTING.md) | agentRuntime signal |
| agentRuntime | [skills/swarmvault/validation/smoke-prompts.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/validation/smoke-prompts.md) | agentRuntime signal |
| entrypoints | [worked/large-repo/sources/src/app.ts](../../../../sources/swarmclawai__swarmvault/worked/large-repo/sources/src/app.ts) | entrypoints signal |
| entrypoints | [packages/viewer/src/App.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/viewer/src/main.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/obsidian-plugin/src/main.ts](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/swarmclawai__swarmvault/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/swarmclawai__swarmvault/pnpm-workspace.yaml) | config signal |
| config | [worked/large-repo/sources/package.json](../../../../sources/swarmclawai__swarmvault/worked/large-repo/sources/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [worked/large-repo/sources/src/app.ts](../../../../sources/swarmclawai__swarmvault/worked/large-repo/sources/src/app.ts)<br>[packages/viewer/src/App.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/src/App.tsx)<br>[packages/viewer/src/main.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/src/main.tsx)<br>[packages/obsidian-plugin/src/main.ts](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/src/main.ts)<br>[packages/engine/src/index.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/swarmclawai__swarmvault/packages/cli/src/index.ts) |
| agentRuntime | 29 | [skills/swarmvault/README.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/README.md)<br>[skills/swarmvault/SKILL.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/SKILL.md)<br>[skills/swarmvault/TROUBLESHOOTING.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/TROUBLESHOOTING.md)<br>[skills/swarmvault/validation/smoke-prompts.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/validation/smoke-prompts.md)<br>[skills/swarmvault/references/artifacts.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/references/artifacts.md)<br>[skills/swarmvault/references/commands.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/references/commands.md)<br>[skills/swarmvault/examples/graph-first-agent-workflow.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/examples/graph-first-agent-workflow.md)<br>[skills/swarmvault/examples/quickstart.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/examples/quickstart.md) |
| mcp | 1 | [packages/engine/src/mcp.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/src/mcp.ts) |
| retrieval | 40 | [worked/personal-knowledge-base/README.md](../../../../sources/swarmclawai__swarmvault/worked/personal-knowledge-base/README.md)<br>[templates/llm-wiki-schema.md](../../../../sources/swarmclawai__swarmvault/templates/llm-wiki-schema.md)<br>[smoke/fixtures/inbox-bundle/assets/graph.svg](../../../../sources/swarmclawai__swarmvault/smoke/fixtures/inbox-bundle/assets/graph.svg)<br>[skills/swarmvault/examples/graph-first-agent-workflow.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/examples/graph-first-agent-workflow.md)<br>[packages/viewer/index.html](../../../../sources/swarmclawai__swarmvault/packages/viewer/index.html)<br>[packages/obsidian-plugin/src/workspace/page-id-index.ts](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/src/workspace/page-id-index.ts)<br>[packages/engine/test/audio-ingest.test.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/test/audio-ingest.test.ts)<br>[packages/engine/test/graph-callers.test.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/test/graph-callers.test.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 69 | [scripts/release-preflight-summary.test.mjs](../../../../sources/swarmclawai__swarmvault/scripts/release-preflight-summary.test.mjs)<br>[packages/viewer/test/CandidateList.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/CandidateList.test.tsx)<br>[packages/viewer/test/CommandPalette.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/CommandPalette.test.tsx)<br>[packages/viewer/test/FilterSidebar.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/FilterSidebar.test.tsx)<br>[packages/viewer/test/GraphCanvas.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/GraphCanvas.test.tsx)<br>[packages/viewer/test/hooks.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/hooks.test.tsx)<br>[packages/viewer/test/MemoryDashboard.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/MemoryDashboard.test.tsx)<br>[packages/viewer/test/PagePreview.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/PagePreview.test.tsx) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/swarmclawai__swarmvault/.github/workflows/ci.yml)<br>[.github/workflows/live-smoke.yml](../../../../sources/swarmclawai__swarmvault/.github/workflows/live-smoke.yml) |
| container | 1 | [Dockerfile](../../../../sources/swarmclawai__swarmvault/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 27 | [README.ja.md](../../../../sources/swarmclawai__swarmvault/README.ja.md)<br>[README.md](../../../../sources/swarmclawai__swarmvault/README.md)<br>[README.zh-CN.md](../../../../sources/swarmclawai__swarmvault/README.zh-CN.md)<br>[worked/README.md](../../../../sources/swarmclawai__swarmvault/worked/README.md)<br>[worked/voice-capture/README.md](../../../../sources/swarmclawai__swarmvault/worked/voice-capture/README.md)<br>[worked/research-deep-dive/README.md](../../../../sources/swarmclawai__swarmvault/worked/research-deep-dive/README.md)<br>[worked/personal-knowledge-base/README.md](../../../../sources/swarmclawai__swarmvault/worked/personal-knowledge-base/README.md)<br>[worked/mixed-corpus/README.md](../../../../sources/swarmclawai__swarmvault/worked/mixed-corpus/README.md) |
| config | 12 | [package.json](../../../../sources/swarmclawai__swarmvault/package.json)<br>[pnpm-workspace.yaml](../../../../sources/swarmclawai__swarmvault/pnpm-workspace.yaml)<br>[worked/large-repo/sources/package.json](../../../../sources/swarmclawai__swarmvault/worked/large-repo/sources/package.json)<br>[smoke/fixtures/tiny-matrix/go/go.mod](../../../../sources/swarmclawai__swarmvault/smoke/fixtures/tiny-matrix/go/go.mod)<br>[packages/viewer/package.json](../../../../sources/swarmclawai__swarmvault/packages/viewer/package.json)<br>[packages/viewer/tsconfig.json](../../../../sources/swarmclawai__swarmvault/packages/viewer/tsconfig.json)<br>[packages/obsidian-plugin/package.json](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/package.json)<br>[packages/obsidian-plugin/tsconfig.json](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 69 | [scripts/release-preflight-summary.test.mjs](../../../../sources/swarmclawai__swarmvault/scripts/release-preflight-summary.test.mjs)<br>[packages/viewer/test/CandidateList.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/CandidateList.test.tsx)<br>[packages/viewer/test/CommandPalette.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/CommandPalette.test.tsx)<br>[packages/viewer/test/FilterSidebar.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/FilterSidebar.test.tsx)<br>[packages/viewer/test/GraphCanvas.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/GraphCanvas.test.tsx)<br>[packages/viewer/test/hooks.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/hooks.test.tsx) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/swarmclawai__swarmvault/.github/workflows/ci.yml)<br>[.github/workflows/live-smoke.yml](../../../../sources/swarmclawai__swarmvault/.github/workflows/live-smoke.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/swarmclawai__swarmvault/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/engine/src/mcp.ts`, `skills/swarmvault/README.md`, `skills/swarmvault/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `worked/large-repo/sources/src/app.ts`, `packages/viewer/src/App.tsx`, `packages/viewer/src/main.tsx`.
3. agent/tool runtime 매핑: `skills/swarmvault/README.md`, `skills/swarmvault/SKILL.md`, `skills/swarmvault/TROUBLESHOOTING.md`.
4. retrieval/memory/indexing 확인: `worked/personal-knowledge-base/README.md`, `templates/llm-wiki-schema.md`, `smoke/fixtures/inbox-bundle/assets/graph.svg`.
5. test/eval 파일로 동작 검증: `scripts/release-preflight-summary.test.mjs`, `packages/viewer/test/CandidateList.test.tsx`, `packages/viewer/test/CommandPalette.test.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The local first LLM Wiki open source knowledge graph builder, RAG knowledge base, and agent memory store. Built on Andre. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, playwright이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
