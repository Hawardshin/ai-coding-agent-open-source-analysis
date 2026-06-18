# vercel-labs/opensrc 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 84 files, 32 directories.

## 요약

- 조사 단위: `sources/vercel-labs__opensrc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 84 files, 32 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, skills/opensrc/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vercel-labs/opensrc |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/vercel-labs__opensrc](../../../../sources/vercel-labs__opensrc) |
| 기존 보고서 | [reports/clone-structures/vercel-labs__opensrc.md](../../../clone-structures/vercel-labs__opensrc.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 84 / 32 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, apps, packages, skills |
| 상위 확장자 | .rs: 18, .tsx: 18, .ts: 10, .js: 5, .json: 5, .md: 5, .mdx: 5, .lock: 3, .yaml: 3, .mjs: 2, .ttf: 2, .yml: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/docs | apps workspace | 78 |
| packages/opensrc | packages workspace | 9 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| packages | source boundary | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | turbo build |
| serve-dev | package.json | dev | turbo dev |
| test | package.json | test | turbo test |
| quality | package.json | lint | turbo lint |
| quality | package.json | lint:fix | turbo lint:fix |
| quality | package.json | type-check | turbo type-check |
| quality | package.json | format | prettier --write . |
| quality | package.json | format:check | prettier --check . |


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
| agentRuntime | [AGENTS.md](../../../../sources/vercel-labs__opensrc/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/opensrc/SKILL.md](../../../../sources/vercel-labs__opensrc/skills/opensrc/SKILL.md) | agentRuntime signal |
| entrypoints | [packages/opensrc/cli/src/main.rs](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/src/main.rs) | entrypoints signal |
| entrypoints | [packages/opensrc/bin/opensrc.js](../../../../sources/vercel-labs__opensrc/packages/opensrc/bin/opensrc.js) | entrypoints signal |
| entrypoints | [apps/docs/src/mdx-components.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/mdx-components.tsx) | entrypoints signal |
| entrypoints | [apps/docs/src/lib/docs-navigation.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/docs-navigation.ts) | entrypoints signal |
| config | [package.json](../../../../sources/vercel-labs__opensrc/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/vercel-labs__opensrc/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/vercel-labs__opensrc/turbo.json) | config signal |
| config | [packages/opensrc/package.json](../../../../sources/vercel-labs__opensrc/packages/opensrc/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/release.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 37 | [packages/opensrc/cli/src/main.rs](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/src/main.rs)<br>[packages/opensrc/bin/opensrc.js](../../../../sources/vercel-labs__opensrc/packages/opensrc/bin/opensrc.js)<br>[apps/docs/src/mdx-components.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/mdx-components.tsx)<br>[apps/docs/src/lib/docs-navigation.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/docs-navigation.ts)<br>[apps/docs/src/lib/github.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/github.ts)<br>[apps/docs/src/lib/mdx-to-markdown.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/mdx-to-markdown.ts)<br>[apps/docs/src/lib/page-metadata.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/page-metadata.ts)<br>[apps/docs/src/lib/page-titles.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/page-titles.ts) |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/vercel-labs__opensrc/AGENTS.md)<br>[skills/opensrc/SKILL.md](../../../../sources/vercel-labs__opensrc/skills/opensrc/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [apps/docs/src/lib/search-index.ts](../../../../sources/vercel-labs__opensrc/apps/docs/src/lib/search-index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 3 | [packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml)<br>[packages/opensrc/cli/tests/fixtures/yarn-berry.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/yarn-berry.lock)<br>[packages/opensrc/cli/tests/fixtures/yarn-v1.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/yarn-v1.lock) |
| security | 2 | [apps/docs/src/app/auth/layout.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/app/auth/layout.tsx)<br>[apps/docs/src/app/auth/page.mdx](../../../../sources/vercel-labs__opensrc/apps/docs/src/app/auth/page.mdx) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/vercel-labs__opensrc/AGENTS.md) |
| docs | 44 | [README.md](../../../../sources/vercel-labs__opensrc/README.md)<br>[packages/opensrc/README.md](../../../../sources/vercel-labs__opensrc/packages/opensrc/README.md)<br>[apps/docs/.env.example](../../../../sources/vercel-labs__opensrc/apps/docs/.env.example)<br>[apps/docs/next.config.mjs](../../../../sources/vercel-labs__opensrc/apps/docs/next.config.mjs)<br>[apps/docs/package.json](../../../../sources/vercel-labs__opensrc/apps/docs/package.json)<br>[apps/docs/postcss.config.mjs](../../../../sources/vercel-labs__opensrc/apps/docs/postcss.config.mjs)<br>[apps/docs/tsconfig.json](../../../../sources/vercel-labs__opensrc/apps/docs/tsconfig.json)<br>[apps/docs/src/mdx-components.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/mdx-components.tsx) |
| config | 8 | [package.json](../../../../sources/vercel-labs__opensrc/package.json)<br>[pnpm-workspace.yaml](../../../../sources/vercel-labs__opensrc/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/vercel-labs__opensrc/turbo.json)<br>[packages/opensrc/package.json](../../../../sources/vercel-labs__opensrc/packages/opensrc/package.json)<br>[packages/opensrc/cli/Cargo.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/Cargo.lock)<br>[packages/opensrc/cli/Cargo.toml](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/Cargo.toml)<br>[apps/docs/package.json](../../../../sources/vercel-labs__opensrc/apps/docs/package.json)<br>[apps/docs/tsconfig.json](../../../../sources/vercel-labs__opensrc/apps/docs/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml)<br>[packages/opensrc/cli/tests/fixtures/yarn-berry.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/yarn-berry.lock)<br>[packages/opensrc/cli/tests/fixtures/yarn-v1.lock](../../../../sources/vercel-labs__opensrc/packages/opensrc/cli/tests/fixtures/yarn-v1.lock) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/vercel-labs__opensrc/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [apps/docs/src/app/auth/layout.tsx](../../../../sources/vercel-labs__opensrc/apps/docs/src/app/auth/layout.tsx)<br>[apps/docs/src/app/auth/page.mdx](../../../../sources/vercel-labs__opensrc/apps/docs/src/app/auth/page.mdx) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/vercel-labs__opensrc/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `skills/opensrc/SKILL.md`, `packages/opensrc/cli/src/main.rs`.
2. entrypoint를 따라 실행 흐름 확인: `packages/opensrc/cli/src/main.rs`, `packages/opensrc/bin/opensrc.js`, `apps/docs/src/mdx-components.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/opensrc/SKILL.md`.
4. retrieval/memory/indexing 확인: `apps/docs/src/lib/search-index.ts`.
5. test/eval 파일로 동작 검증: `packages/opensrc/cli/tests/fixtures/pnpm-v9-workspace.yaml`, `packages/opensrc/cli/tests/fixtures/yarn-berry.lock`, `packages/opensrc/cli/tests/fixtures/yarn-v1.lock`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 84 files, 32 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
