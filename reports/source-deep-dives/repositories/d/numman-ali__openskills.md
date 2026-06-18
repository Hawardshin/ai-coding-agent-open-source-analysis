# numman-ali/openskills 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 94 files, 22 directories.

## 요약

- 조사 단위: `sources/numman-ali__openskills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 94 files, 22 directories, depth score 91, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests/utils/skill-metadata.test.ts, tests/utils/skill-names.test.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | numman-ali/openskills |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/numman-ali__openskills](../../../../sources/numman-ali__openskills) |
| 기존 보고서 | [reports/clone-structures/numman-ali__openskills.md](../../../clone-structures/numman-ali__openskills.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 94 / 22 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, assets, examples, src, tests |
| 상위 확장자 | .md: 53, .ts: 27, .json: 8, (none): 3, .yml: 2, .svg: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 13 |
| src | source boundary | 6 |
| examples/my-first-skill | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsup |
| serve-dev | package.json | dev | tsup --watch |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | prepublishOnly | npm run typecheck && npm run build && npm test |
| entrypoint | package.json bin | cli.js | dist/cli.js |


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
| agentRuntime | [AGENTS.md](../../../../sources/numman-ali__openskills/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/utils/skill-metadata.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-metadata.test.ts) | agentRuntime signal |
| agentRuntime | [tests/utils/skill-names.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-names.test.ts) | agentRuntime signal |
| agentRuntime | [tests/utils/skills.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skills.test.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/numman-ali__openskills/src/cli.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/numman-ali__openskills/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/numman-ali__openskills/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/numman-ali__openskills/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/numman-ali__openskills/.github/workflows/ci.yml) | ci support |
| eval | [tests/utils/dirs.test.ts](../../../../sources/numman-ali__openskills/tests/utils/dirs.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/cli.ts](../../../../sources/numman-ali__openskills/src/cli.ts) |
| agentRuntime | 13 | [AGENTS.md](../../../../sources/numman-ali__openskills/AGENTS.md)<br>[tests/utils/skill-metadata.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-metadata.test.ts)<br>[tests/utils/skill-names.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-names.test.ts)<br>[tests/utils/skills.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skills.test.ts)<br>[src/utils/agents-md.ts](../../../../sources/numman-ali__openskills/src/utils/agents-md.ts)<br>[src/utils/skill-metadata.ts](../../../../sources/numman-ali__openskills/src/utils/skill-metadata.ts)<br>[src/utils/skill-names.ts](../../../../sources/numman-ali__openskills/src/utils/skill-names.ts)<br>[src/utils/skills.ts](../../../../sources/numman-ali__openskills/src/utils/skills.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [.github/maintainer/index/graph.json](../../../../sources/numman-ali__openskills/.github/maintainer/index/graph.json)<br>[.github/maintainer/index/items.json](../../../../sources/numman-ali__openskills/.github/maintainer/index/items.json) |
| spec | 0 | 명확하지 않음 |
| eval | 9 | [tests/utils/dirs.test.ts](../../../../sources/numman-ali__openskills/tests/utils/dirs.test.ts)<br>[tests/utils/skill-metadata.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-metadata.test.ts)<br>[tests/utils/skill-names.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-names.test.ts)<br>[tests/utils/skills.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skills.test.ts)<br>[tests/utils/yaml.test.ts](../../../../sources/numman-ali__openskills/tests/utils/yaml.test.ts)<br>[tests/integration/e2e.test.ts](../../../../sources/numman-ali__openskills/tests/integration/e2e.test.ts)<br>[tests/commands/install.test.ts](../../../../sources/numman-ali__openskills/tests/commands/install.test.ts)<br>[tests/commands/sync.test.ts](../../../../sources/numman-ali__openskills/tests/commands/sync.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/numman-ali__openskills/SECURITY.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/numman-ali__openskills/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/numman-ali__openskills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/numman-ali__openskills/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/numman-ali__openskills/README.md) |
| config | 2 | [package.json](../../../../sources/numman-ali__openskills/package.json)<br>[tsconfig.json](../../../../sources/numman-ali__openskills/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [tests/utils/dirs.test.ts](../../../../sources/numman-ali__openskills/tests/utils/dirs.test.ts)<br>[tests/utils/skill-metadata.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-metadata.test.ts)<br>[tests/utils/skill-names.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skill-names.test.ts)<br>[tests/utils/skills.test.ts](../../../../sources/numman-ali__openskills/tests/utils/skills.test.ts)<br>[tests/utils/yaml.test.ts](../../../../sources/numman-ali__openskills/tests/utils/yaml.test.ts)<br>[tests/integration/e2e.test.ts](../../../../sources/numman-ali__openskills/tests/integration/e2e.test.ts) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/numman-ali__openskills/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/numman-ali__openskills/SECURITY.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/numman-ali__openskills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/numman-ali__openskills/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `tests/utils/skill-metadata.test.ts`, `tests/utils/skill-names.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/utils/skill-metadata.test.ts`, `tests/utils/skill-names.test.ts`.
4. retrieval/memory/indexing 확인: `.github/maintainer/index/graph.json`, `.github/maintainer/index/items.json`.
5. test/eval 파일로 동작 검증: `tests/utils/dirs.test.ts`, `tests/utils/skill-metadata.test.ts`, `tests/utils/skill-names.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 94 files, 22 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
