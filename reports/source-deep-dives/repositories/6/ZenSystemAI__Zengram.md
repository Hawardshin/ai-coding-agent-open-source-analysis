# ZenSystemAI/Zengram 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A Multi Agent Memory MCP That Connect Agents Across Systems and Machines

## 요약

- 조사 단위: `sources/ZenSystemAI__Zengram` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 102 files, 24 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-server/CHANGELOG.md, mcp-server/package-lock.json, mcp-server/package.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ZenSystemAI/Zengram |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 48 |
| Forks | 7 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ZenSystemAI__Zengram](../../../../sources/ZenSystemAI__Zengram) |
| 기존 보고서 | [reports/global-trending/repositories/ZenSystemAI__Zengram.md](../../../global-trending/repositories/ZenSystemAI__Zengram.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 102 / 24 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, adapters, api, docs, examples, mcp-server |
| 상위 확장자 | .js: 59, .md: 19, .json: 6, .jpg: 5, .yml: 4, (none): 3, .sh: 2, .svg: 2, .example: 1, .py: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| api | source boundary | 25 |
| docs | documentation surface | 12 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| examples | top-level component | 1 |
| mcp-server | source boundary | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| mcp | [mcp-server/CHANGELOG.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/CHANGELOG.md) | mcp signal |
| mcp | [mcp-server/package-lock.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package-lock.json) | mcp signal |
| mcp | [mcp-server/package.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package.json) | mcp signal |
| mcp | [mcp-server/README.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/README.md) | mcp signal |
| agentRuntime | [api/src/routes/memory.js](../../../../sources/ZenSystemAI__Zengram/api/src/routes/memory.js) | agentRuntime signal |
| agentRuntime | [adapters/claude-code/sessionend/SKILL.md](../../../../sources/ZenSystemAI__Zengram/adapters/claude-code/sessionend/SKILL.md) | agentRuntime signal |
| agentRuntime | [adapters/bash/SKILL.md](../../../../sources/ZenSystemAI__Zengram/adapters/bash/SKILL.md) | agentRuntime signal |
| entrypoints | [mcp-server/src/index.js](../../../../sources/ZenSystemAI__Zengram/mcp-server/src/index.js) | entrypoints signal |
| entrypoints | [api/src/index.js](../../../../sources/ZenSystemAI__Zengram/api/src/index.js) | entrypoints signal |
| config | [api/package.json](../../../../sources/ZenSystemAI__Zengram/api/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/publish.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/publish.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [mcp-server/src/index.js](../../../../sources/ZenSystemAI__Zengram/mcp-server/src/index.js)<br>[api/src/index.js](../../../../sources/ZenSystemAI__Zengram/api/src/index.js) |
| agentRuntime | 3 | [api/src/routes/memory.js](../../../../sources/ZenSystemAI__Zengram/api/src/routes/memory.js)<br>[adapters/claude-code/sessionend/SKILL.md](../../../../sources/ZenSystemAI__Zengram/adapters/claude-code/sessionend/SKILL.md)<br>[adapters/bash/SKILL.md](../../../../sources/ZenSystemAI__Zengram/adapters/bash/SKILL.md) |
| mcp | 6 | [mcp-server/CHANGELOG.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/CHANGELOG.md)<br>[mcp-server/package-lock.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package-lock.json)<br>[mcp-server/package.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package.json)<br>[mcp-server/README.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/README.md)<br>[mcp-server/src/index.js](../../../../sources/ZenSystemAI__Zengram/mcp-server/src/index.js)<br>[docs/mcp-tools.md](../../../../sources/ZenSystemAI__Zengram/docs/mcp-tools.md) |
| retrieval | 5 | [mcp-server/src/index.js](../../../../sources/ZenSystemAI__Zengram/mcp-server/src/index.js)<br>[api/tests/embedding-dimensions.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/embedding-dimensions.test.js)<br>[api/src/index.js](../../../../sources/ZenSystemAI__Zengram/api/src/index.js)<br>[api/src/services/research-retrieval.js](../../../../sources/ZenSystemAI__Zengram/api/src/services/research-retrieval.js)<br>[api/src/routes/memory.js](../../../../sources/ZenSystemAI__Zengram/api/src/routes/memory.js) |
| spec | 1 | [docs/architecture.md](../../../../sources/ZenSystemAI__Zengram/docs/architecture.md) |
| eval | 17 | [docs/eval-harness.md](../../../../sources/ZenSystemAI__Zengram/docs/eval-harness.md)<br>[api/tests/consolidation-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/consolidation-utils.test.js)<br>[api/tests/embedding-dimensions.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/embedding-dimensions.test.js)<br>[api/tests/entities.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/entities.test.js)<br>[api/tests/import-approval.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/import-approval.test.js)<br>[api/tests/reflect-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/reflect-utils.test.js)<br>[api/tests/request-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/request-utils.test.js)<br>[api/tests/research-route-disabled.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/research-route-disabled.test.js) |
| security | 1 | [api/src/middleware/auth.js](../../../../sources/ZenSystemAI__Zengram/api/src/middleware/auth.js) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/publish.yml) |
| container | 3 | [docker-compose.production.yml](../../../../sources/ZenSystemAI__Zengram/docker-compose.production.yml)<br>[docker-compose.yml](../../../../sources/ZenSystemAI__Zengram/docker-compose.yml)<br>[api/Dockerfile](../../../../sources/ZenSystemAI__Zengram/api/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 11 | [README.md](../../../../sources/ZenSystemAI__Zengram/README.md)<br>[mcp-server/README.md](../../../../sources/ZenSystemAI__Zengram/mcp-server/README.md)<br>[docs/api-reference.md](../../../../sources/ZenSystemAI__Zengram/docs/api-reference.md)<br>[docs/architecture.md](../../../../sources/ZenSystemAI__Zengram/docs/architecture.md)<br>[docs/benchmarks.md](../../../../sources/ZenSystemAI__Zengram/docs/benchmarks.md)<br>[docs/configuration.md](../../../../sources/ZenSystemAI__Zengram/docs/configuration.md)<br>[docs/data-model.md](../../../../sources/ZenSystemAI__Zengram/docs/data-model.md)<br>[docs/eval-harness.md](../../../../sources/ZenSystemAI__Zengram/docs/eval-harness.md) |
| config | 2 | [mcp-server/package.json](../../../../sources/ZenSystemAI__Zengram/mcp-server/package.json)<br>[api/package.json](../../../../sources/ZenSystemAI__Zengram/api/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [docs/eval-harness.md](../../../../sources/ZenSystemAI__Zengram/docs/eval-harness.md)<br>[api/tests/consolidation-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/consolidation-utils.test.js)<br>[api/tests/embedding-dimensions.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/embedding-dimensions.test.js)<br>[api/tests/entities.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/entities.test.js)<br>[api/tests/import-approval.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/import-approval.test.js)<br>[api/tests/reflect-utils.test.js](../../../../sources/ZenSystemAI__Zengram/api/tests/reflect-utils.test.js) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/ZenSystemAI__Zengram/.github/workflows/publish.yml) |
| 컨테이너/배포 | 3 | [docker-compose.production.yml](../../../../sources/ZenSystemAI__Zengram/docker-compose.production.yml)<br>[docker-compose.yml](../../../../sources/ZenSystemAI__Zengram/docker-compose.yml)<br>[api/Dockerfile](../../../../sources/ZenSystemAI__Zengram/api/Dockerfile) |
| 보안/정책 | 1 | [api/src/middleware/auth.js](../../../../sources/ZenSystemAI__Zengram/api/src/middleware/auth.js) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp-server/CHANGELOG.md`, `mcp-server/package-lock.json`, `mcp-server/package.json`.
2. entrypoint를 따라 실행 흐름 확인: `mcp-server/src/index.js`, `api/src/index.js`.
3. agent/tool runtime 매핑: `api/src/routes/memory.js`, `adapters/claude-code/sessionend/SKILL.md`, `adapters/bash/SKILL.md`.
4. retrieval/memory/indexing 확인: `mcp-server/src/index.js`, `api/tests/embedding-dimensions.test.js`, `api/src/index.js`.
5. test/eval 파일로 동작 검증: `docs/eval-harness.md`, `api/tests/consolidation-utils.test.js`, `api/tests/embedding-dimensions.test.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Multi Agent Memory MCP That Connect Agents Across Systems and Machines. 핵심 구조 신호는 JavaScript, docker-compose.yml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
