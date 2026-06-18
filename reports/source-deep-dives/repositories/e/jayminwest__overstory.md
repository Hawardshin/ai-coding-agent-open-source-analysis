# jayminwest/overstory 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 457 files, 52 directories.

## 요약

- 조사 단위: `sources/jayminwest__overstory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 457 files, 52 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=ui/src/index.css, ui/src/main.tsx, src/index.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jayminwest/overstory |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | global |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/jayminwest__overstory](../../../../sources/jayminwest__overstory) |
| 기존 보고서 | [reports/clone-structures/jayminwest__overstory.md](../../../clone-structures/jayminwest__overstory.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 457 / 52 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .canopy, .claude, .github, .mulch, .overstory, .pi, .sapling, .seeds, agents, docs, scripts, src, templates, ui |
| 상위 확장자 | .ts: 298, .md: 43, .tsx: 43, .jsonl: 25, .json: 15, (none): 9, .yml: 7, .yaml: 5, .tmpl: 4, .lock: 2, .toml: 2, .css: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 83 |
| docs | documentation surface | 11 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |
| ui | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | bun test |
| quality | package.json | lint | biome check . |
| quality | package.json | lint:fix | biome check --write . |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | version:bump | bun scripts/version-bump.ts |
| build | package.json | build:ui | cd ui && bun install && bun run build |
| build | package.json | prepack | bun run build:ui |
| entrypoint | package.json bin | index.ts | ./src/index.ts |
| entrypoint | package.json bin | index.ts | ./src/index.ts |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [ui/src/index.css](../../../../sources/jayminwest__overstory/ui/src/index.css) | entrypoints signal |
| entrypoints | [ui/src/main.tsx](../../../../sources/jayminwest__overstory/ui/src/main.tsx) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/jayminwest__overstory/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/jayminwest__overstory/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/jayminwest__overstory/tsconfig.json) | config signal |
| config | [ui/package.json](../../../../sources/jayminwest__overstory/ui/package.json) | config signal |
| config | [ui/tsconfig.json](../../../../sources/jayminwest__overstory/ui/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/jayminwest__overstory/README.md) | docs signal |
| docs | [ui/README.md](../../../../sources/jayminwest__overstory/ui/README.md) | docs signal |
| docs | [docs/canopy-prompt-architecture.md](../../../../sources/jayminwest__overstory/docs/canopy-prompt-architecture.md) | docs signal |
| docs | [docs/direction-multi-swarm-and-containers.md](../../../../sources/jayminwest__overstory/docs/direction-multi-swarm-and-containers.md) | docs signal |
| eval | [ui/src/lib/use-auto-scroll.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-auto-scroll.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [ui/src/index.css](../../../../sources/jayminwest__overstory/ui/src/index.css)<br>[ui/src/main.tsx](../../../../sources/jayminwest__overstory/ui/src/main.tsx)<br>[src/index.ts](../../../../sources/jayminwest__overstory/src/index.ts) |
| agentRuntime | 64 | [ui/src/routes/agent/EventRow.tsx](../../../../sources/jayminwest__overstory/ui/src/routes/agent/EventRow.tsx)<br>[templates/hooks.json.tmpl](../../../../sources/jayminwest__overstory/templates/hooks.json.tmpl)<br>[src/events/tool-filter.test.ts](../../../../sources/jayminwest__overstory/src/events/tool-filter.test.ts)<br>[src/events/tool-filter.ts](../../../../sources/jayminwest__overstory/src/events/tool-filter.ts)<br>[src/doctor/agents.test.ts](../../../../sources/jayminwest__overstory/src/doctor/agents.test.ts)<br>[src/doctor/agents.ts](../../../../sources/jayminwest__overstory/src/doctor/agents.ts)<br>[src/commands/agents.test.ts](../../../../sources/jayminwest__overstory/src/commands/agents.test.ts)<br>[src/commands/agents.ts](../../../../sources/jayminwest__overstory/src/commands/agents.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [ui/index.html](../../../../sources/jayminwest__overstory/ui/index.html)<br>[ui/src/index.css](../../../../sources/jayminwest__overstory/ui/src/index.css)<br>[src/index.ts](../../../../sources/jayminwest__overstory/src/index.ts) |
| spec | 6 | [src/commands/spec.test.ts](../../../../sources/jayminwest__overstory/src/commands/spec.test.ts)<br>[src/commands/spec.ts](../../../../sources/jayminwest__overstory/src/commands/spec.ts)<br>[docs/canopy-prompt-architecture.md](../../../../sources/jayminwest__overstory/docs/canopy-prompt-architecture.md)<br>[docs/headless-hooks-design.md](../../../../sources/jayminwest__overstory/docs/headless-hooks-design.md)<br>[docs/design/containerize-swarms.md](../../../../sources/jayminwest__overstory/docs/design/containerize-swarms.md)<br>[.mulch/expertise/architecture.jsonl](../../../../sources/jayminwest__overstory/.mulch/expertise/architecture.jsonl) |
| eval | 146 | [ui/src/lib/use-auto-scroll.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-auto-scroll.test.ts)<br>[ui/src/lib/use-scroll-fade.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-scroll-fade.test.ts)<br>[src/config.test.ts](../../../../sources/jayminwest__overstory/src/config.test.ts)<br>[src/errors.test.ts](../../../../sources/jayminwest__overstory/src/errors.test.ts)<br>[src/json.test.ts](../../../../sources/jayminwest__overstory/src/json.test.ts)<br>[src/schema-consistency.test.ts](../../../../sources/jayminwest__overstory/src/schema-consistency.test.ts)<br>[src/test-helpers.test.ts](../../../../sources/jayminwest__overstory/src/test-helpers.test.ts)<br>[src/test-helpers.ts](../../../../sources/jayminwest__overstory/src/test-helpers.ts) |
| security | 4 | [SECURITY.md](../../../../sources/jayminwest__overstory/SECURITY.md)<br>[src/agents/guard-rules.test.ts](../../../../sources/jayminwest__overstory/src/agents/guard-rules.test.ts)<br>[src/agents/guard-rules.ts](../../../../sources/jayminwest__overstory/src/agents/guard-rules.ts)<br>[.pi/extensions/overstory-guard.ts](../../../../sources/jayminwest__overstory/.pi/extensions/overstory-guard.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/jayminwest__overstory/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/jayminwest__overstory/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [CLAUDE.md](../../../../sources/jayminwest__overstory/CLAUDE.md)<br>[templates/CLAUDE.md.tmpl](../../../../sources/jayminwest__overstory/templates/CLAUDE.md.tmpl) |
| docs | 11 | [README.md](../../../../sources/jayminwest__overstory/README.md)<br>[ui/README.md](../../../../sources/jayminwest__overstory/ui/README.md)<br>[docs/canopy-prompt-architecture.md](../../../../sources/jayminwest__overstory/docs/canopy-prompt-architecture.md)<br>[docs/direction-multi-swarm-and-containers.md](../../../../sources/jayminwest__overstory/docs/direction-multi-swarm-and-containers.md)<br>[docs/direction-ui-and-ipc.md](../../../../sources/jayminwest__overstory/docs/direction-ui-and-ipc.md)<br>[docs/headless-hooks-design.md](../../../../sources/jayminwest__overstory/docs/headless-hooks-design.md)<br>[docs/runtime-abstraction.md](../../../../sources/jayminwest__overstory/docs/runtime-abstraction.md)<br>[docs/runtime-adapters.md](../../../../sources/jayminwest__overstory/docs/runtime-adapters.md) |
| config | 4 | [package.json](../../../../sources/jayminwest__overstory/package.json)<br>[tsconfig.json](../../../../sources/jayminwest__overstory/tsconfig.json)<br>[ui/package.json](../../../../sources/jayminwest__overstory/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/jayminwest__overstory/ui/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 146 | [ui/src/lib/use-auto-scroll.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-auto-scroll.test.ts)<br>[ui/src/lib/use-scroll-fade.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-scroll-fade.test.ts)<br>[src/config.test.ts](../../../../sources/jayminwest__overstory/src/config.test.ts)<br>[src/errors.test.ts](../../../../sources/jayminwest__overstory/src/errors.test.ts)<br>[src/json.test.ts](../../../../sources/jayminwest__overstory/src/json.test.ts)<br>[src/schema-consistency.test.ts](../../../../sources/jayminwest__overstory/src/schema-consistency.test.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/jayminwest__overstory/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/jayminwest__overstory/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 4 | [SECURITY.md](../../../../sources/jayminwest__overstory/SECURITY.md)<br>[src/agents/guard-rules.test.ts](../../../../sources/jayminwest__overstory/src/agents/guard-rules.test.ts)<br>[src/agents/guard-rules.ts](../../../../sources/jayminwest__overstory/src/agents/guard-rules.ts)<br>[.pi/extensions/overstory-guard.ts](../../../../sources/jayminwest__overstory/.pi/extensions/overstory-guard.ts) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/jayminwest__overstory/CLAUDE.md)<br>[templates/CLAUDE.md.tmpl](../../../../sources/jayminwest__overstory/templates/CLAUDE.md.tmpl) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `ui/src/index.css`, `ui/src/main.tsx`, `src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `ui/src/index.css`, `ui/src/main.tsx`, `src/index.ts`.
3. agent/tool runtime 매핑: `ui/src/routes/agent/EventRow.tsx`, `templates/hooks.json.tmpl`, `src/events/tool-filter.test.ts`.
4. retrieval/memory/indexing 확인: `ui/index.html`, `ui/src/index.css`, `src/index.ts`.
5. test/eval 파일로 동작 검증: `ui/src/lib/use-auto-scroll.test.ts`, `ui/src/lib/use-scroll-fade.test.ts`, `src/config.test.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Local clone structure analysis 457 files, 52 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
