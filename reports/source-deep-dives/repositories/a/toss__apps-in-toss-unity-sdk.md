# toss/apps-in-toss-unity-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

toss/apps-in-toss-unity-sdk

## 요약

- 조사 단위: `sources/toss__apps-in-toss-unity-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,099 files, 152 directories, depth score 101, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts, Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts, Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/apps-in-toss-unity-sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | C# |
| Stars | 9 |
| Forks | 4 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__apps-in-toss-unity-sdk](../../../../sources/toss__apps-in-toss-unity-sdk) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__apps-in-toss-unity-sdk.md](../../../korea-trending/repositories/toss__apps-in-toss-unity-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1099 / 152 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .claude, .githooks, .github, docs, Docs~, Editor, Runtime, scripts~, sdk-runtime-generator~, Tests~, WebGLTemplates |
| 상위 확장자 | .meta: 435, .cs: 167, .asset: 164, .jslib: 63, .ts: 61, .json: 37, .md: 25, (none): 21, .html: 19, .yml: 16, .hbs: 11, .asmdef: 10 |
| 소스 패턴 | monorepo/workspace, cli-first, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 25 |
| .github | ci surface | 1 |
| Docs~ | documentation surface | 1 |
| Editor | top-level component | 1 |
| Runtime | top-level component | 1 |
| scripts~ | top-level component | 1 |
| sdk-runtime-generator~ | top-level component | 1 |
| Tests~ | validation surface | 1 |
| WebGLTemplates | source boundary | 1 |


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
| entrypoints | [Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts) | entrypoints signal |
| entrypoints | [Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts) | entrypoints signal |
| entrypoints | [Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts) | entrypoints signal |
| entrypoints | [Tests~/E2E/SampleUnityProject-2022.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-2022.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__apps-in-toss-unity-sdk/package.json) | config signal |
| config | [WebGLTemplates/AITTemplate/BuildConfig~/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/package.json) | config signal |
| config | [WebGLTemplates/AITTemplate/BuildConfig~/pnpm-workspace.yaml](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/pnpm-workspace.yaml) | config signal |
| config | [WebGLTemplates/AITTemplate/BuildConfig~/tsconfig.json](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/tsconfig.json) | config signal |
| ci | [.github/workflows/beta-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/beta-release.yml) | ci signal |
| ci | [.github/workflows/bulk-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/bulk-release.yml) | ci signal |
| ci | [.github/workflows/lint.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/lint.yml) | ci signal |
| ci | [.github/workflows/perf.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/perf.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/SampleUnityProject-2022.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-2022.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/SampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/HeavySampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/HeavySampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/HeavySampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/HeavySampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/HeavySampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/HeavySampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 24 | [WebGLTemplates/AITTemplate/index.html](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/index.html)<br>[WebGLTemplates/AITTemplate/index.html.meta](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/index.html.meta)<br>[Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html)<br>[Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html.meta)<br>[Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/index.html](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/index.html)<br>[Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/index.html.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/index.html.meta)<br>[Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/index.html](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/index.html)<br>[Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/index.html.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/index.html.meta) |
| spec | 0 | 명확하지 않음 |
| eval | 61 | [run-local-tests.sh](../../../../sources/toss__apps-in-toss-unity-sdk/run-local-tests.sh)<br>[run-local-tests.sh.meta](../../../../sources/toss__apps-in-toss-unity-sdk/run-local-tests.sh.meta)<br>[Tests~/E2E/tests.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests.meta)<br>[Tests~/E2E/tests/debug-unity.cjs](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/debug-unity.cjs)<br>[Tests~/E2E/tests/e2e-full-pipeline.test.js](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/e2e-full-pipeline.test.js)<br>[Tests~/E2E/tests/package-lock.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package-lock.json.meta)<br>[Tests~/E2E/tests/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package.json)<br>[Tests~/E2E/tests/package.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package.json.meta) |
| security | 4 | [sdk-policy.json](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-policy.json)<br>[sdk-policy.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-policy.json.meta)<br>[Runtime/SDK/AIT.Permission.cs](../../../../sources/toss__apps-in-toss-unity-sdk/Runtime/SDK/AIT.Permission.cs)<br>[Runtime/SDK/AIT.Permission.cs.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Runtime/SDK/AIT.Permission.cs.meta) |
| ci | 14 | [.github/workflows/beta-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/beta-release.yml)<br>[.github/workflows/bulk-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/bulk-release.yml)<br>[.github/workflows/lint.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/lint.yml)<br>[.github/workflows/perf.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/perf.yml)<br>[.github/workflows/preview.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/preview.yml)<br>[.github/workflows/regen-lockfiles.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/regen-lockfiles.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/release.yml)<br>[.github/workflows/sdk-update-rebase.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/sdk-update-rebase.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [CLAUDE.md](../../../../sources/toss__apps-in-toss-unity-sdk/CLAUDE.md)<br>[CLAUDE.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/CLAUDE.md.meta) |
| docs | 27 | [README.md](../../../../sources/toss__apps-in-toss-unity-sdk/README.md)<br>[README.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/README.md.meta)<br>[sdk-runtime-generator~/README.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-runtime-generator~/README.md.meta)<br>[sdk-runtime-generator~/tests/unit/README.md](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-runtime-generator~/tests/unit/README.md)<br>[sdk-runtime-generator~/tests/unit/README.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-runtime-generator~/tests/unit/README.md.meta)<br>[docs/advertising.md](../../../../sources/toss__apps-in-toss-unity-sdk/docs/advertising.md)<br>[docs/advertising.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/docs/advertising.md.meta)<br>[docs/changelog.meta](../../../../sources/toss__apps-in-toss-unity-sdk/docs/changelog.meta) |
| config | 19 | [package.json](../../../../sources/toss__apps-in-toss-unity-sdk/package.json)<br>[WebGLTemplates/AITTemplate/BuildConfig~/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/package.json)<br>[WebGLTemplates/AITTemplate/BuildConfig~/pnpm-workspace.yaml](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/pnpm-workspace.yaml)<br>[WebGLTemplates/AITTemplate/BuildConfig~/tsconfig.json](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/tsconfig.json)<br>[Tests~/E2E/tests/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package.json)<br>[Tests~/E2E/SharedScripts/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SharedScripts/package.json)<br>[Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json)<br>[Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 61 | [run-local-tests.sh](../../../../sources/toss__apps-in-toss-unity-sdk/run-local-tests.sh)<br>[run-local-tests.sh.meta](../../../../sources/toss__apps-in-toss-unity-sdk/run-local-tests.sh.meta)<br>[Tests~/E2E/tests.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests.meta)<br>[Tests~/E2E/tests/debug-unity.cjs](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/debug-unity.cjs)<br>[Tests~/E2E/tests/e2e-full-pipeline.test.js](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/e2e-full-pipeline.test.js)<br>[Tests~/E2E/tests/package-lock.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package-lock.json.meta) |
| CI workflow | 14 | [.github/workflows/beta-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/beta-release.yml)<br>[.github/workflows/bulk-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/bulk-release.yml)<br>[.github/workflows/lint.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/lint.yml)<br>[.github/workflows/perf.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/perf.yml)<br>[.github/workflows/preview.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/preview.yml)<br>[.github/workflows/regen-lockfiles.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/regen-lockfiles.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 4 | [sdk-policy.json](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-policy.json)<br>[sdk-policy.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-policy.json.meta)<br>[Runtime/SDK/AIT.Permission.cs](../../../../sources/toss__apps-in-toss-unity-sdk/Runtime/SDK/AIT.Permission.cs)<br>[Runtime/SDK/AIT.Permission.cs.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Runtime/SDK/AIT.Permission.cs.meta) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/toss__apps-in-toss-unity-sdk/CLAUDE.md)<br>[CLAUDE.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/CLAUDE.md.meta) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`, `Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`, `Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`.
2. entrypoint를 따라 실행 흐름 확인: `Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`, `Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`, `Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`.
3. retrieval/memory/indexing 확인: `WebGLTemplates/AITTemplate/index.html`, `WebGLTemplates/AITTemplate/index.html.meta`, `Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html`.
4. test/eval 파일로 동작 검증: `run-local-tests.sh`, `run-local-tests.sh.meta`, `Tests~/E2E/tests.meta`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C#, package.json, README.md, CLAUDE.md, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
