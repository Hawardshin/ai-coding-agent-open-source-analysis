# toss/apps-in-toss-unity-sdk Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

toss/apps-in-toss-unity-sdk

## 요약

- 조사 단위: `sources/toss__apps-in-toss-unity-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,099 files, 152 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 monorepo/workspace, cli-first, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts, Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts, Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | toss/apps-in-toss-unity-sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | C# |
| Stars | 9 |
| Forks | 4 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__apps-in-toss-unity-sdk](../../../../sources/toss__apps-in-toss-unity-sdk) |
| Existing report | [reports/korea-trending/repositories/toss__apps-in-toss-unity-sdk.md](../../../korea-trending/repositories/toss__apps-in-toss-unity-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1099 / 152 |
| Max observed depth | 9 |
| Top directories | .claude, .githooks, .github, docs, Docs~, Editor, Runtime, scripts~, sdk-runtime-generator~, Tests~, WebGLTemplates |
| Top extensions | .meta: 435, .cs: 167, .asset: 164, .jslib: 63, .ts: 61, .json: 37, .md: 25, (none): 21, .html: 19, .yml: 16, .hbs: 11, .asmdef: 10 |
| Source patterns | monorepo/workspace, cli-first, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/SampleUnityProject-2022.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-2022.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/SampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/HeavySampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/HeavySampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/HeavySampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/HeavySampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts)<br>[Tests~/E2E/HeavySampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/HeavySampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 24 | [WebGLTemplates/AITTemplate/index.html](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/index.html)<br>[WebGLTemplates/AITTemplate/index.html.meta](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/index.html.meta)<br>[Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html)<br>[Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html.meta)<br>[Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/index.html](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/index.html)<br>[Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/index.html.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/index.html.meta)<br>[Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/index.html](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/index.html)<br>[Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/index.html.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/index.html.meta) |
| spec | 0 | not obvious |
| eval | 61 | [run-local-tests.sh](../../../../sources/toss__apps-in-toss-unity-sdk/run-local-tests.sh)<br>[run-local-tests.sh.meta](../../../../sources/toss__apps-in-toss-unity-sdk/run-local-tests.sh.meta)<br>[Tests~/E2E/tests.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests.meta)<br>[Tests~/E2E/tests/debug-unity.cjs](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/debug-unity.cjs)<br>[Tests~/E2E/tests/e2e-full-pipeline.test.js](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/e2e-full-pipeline.test.js)<br>[Tests~/E2E/tests/package-lock.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package-lock.json.meta)<br>[Tests~/E2E/tests/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package.json)<br>[Tests~/E2E/tests/package.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package.json.meta) |
| security | 4 | [sdk-policy.json](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-policy.json)<br>[sdk-policy.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-policy.json.meta)<br>[Runtime/SDK/AIT.Permission.cs](../../../../sources/toss__apps-in-toss-unity-sdk/Runtime/SDK/AIT.Permission.cs)<br>[Runtime/SDK/AIT.Permission.cs.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Runtime/SDK/AIT.Permission.cs.meta) |
| ci | 14 | [.github/workflows/beta-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/beta-release.yml)<br>[.github/workflows/bulk-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/bulk-release.yml)<br>[.github/workflows/lint.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/lint.yml)<br>[.github/workflows/perf.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/perf.yml)<br>[.github/workflows/preview.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/preview.yml)<br>[.github/workflows/regen-lockfiles.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/regen-lockfiles.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/release.yml)<br>[.github/workflows/sdk-update-rebase.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/sdk-update-rebase.yml) |
| container | 0 | not obvious |
| instruction | 2 | [CLAUDE.md](../../../../sources/toss__apps-in-toss-unity-sdk/CLAUDE.md)<br>[CLAUDE.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/CLAUDE.md.meta) |
| docs | 27 | [README.md](../../../../sources/toss__apps-in-toss-unity-sdk/README.md)<br>[README.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/README.md.meta)<br>[sdk-runtime-generator~/README.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-runtime-generator~/README.md.meta)<br>[sdk-runtime-generator~/tests/unit/README.md](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-runtime-generator~/tests/unit/README.md)<br>[sdk-runtime-generator~/tests/unit/README.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-runtime-generator~/tests/unit/README.md.meta)<br>[docs/advertising.md](../../../../sources/toss__apps-in-toss-unity-sdk/docs/advertising.md)<br>[docs/advertising.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/docs/advertising.md.meta)<br>[docs/changelog.meta](../../../../sources/toss__apps-in-toss-unity-sdk/docs/changelog.meta) |
| config | 19 | [package.json](../../../../sources/toss__apps-in-toss-unity-sdk/package.json)<br>[WebGLTemplates/AITTemplate/BuildConfig~/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/package.json)<br>[WebGLTemplates/AITTemplate/BuildConfig~/pnpm-workspace.yaml](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/pnpm-workspace.yaml)<br>[WebGLTemplates/AITTemplate/BuildConfig~/tsconfig.json](../../../../sources/toss__apps-in-toss-unity-sdk/WebGLTemplates/AITTemplate/BuildConfig~/tsconfig.json)<br>[Tests~/E2E/tests/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package.json)<br>[Tests~/E2E/SharedScripts/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SharedScripts/package.json)<br>[Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json)<br>[Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 61 | [run-local-tests.sh](../../../../sources/toss__apps-in-toss-unity-sdk/run-local-tests.sh)<br>[run-local-tests.sh.meta](../../../../sources/toss__apps-in-toss-unity-sdk/run-local-tests.sh.meta)<br>[Tests~/E2E/tests.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests.meta)<br>[Tests~/E2E/tests/debug-unity.cjs](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/debug-unity.cjs)<br>[Tests~/E2E/tests/e2e-full-pipeline.test.js](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/e2e-full-pipeline.test.js)<br>[Tests~/E2E/tests/package-lock.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Tests~/E2E/tests/package-lock.json.meta) |
| CI workflows | 14 | [.github/workflows/beta-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/beta-release.yml)<br>[.github/workflows/bulk-release.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/bulk-release.yml)<br>[.github/workflows/lint.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/lint.yml)<br>[.github/workflows/perf.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/perf.yml)<br>[.github/workflows/preview.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/preview.yml)<br>[.github/workflows/regen-lockfiles.yml](../../../../sources/toss__apps-in-toss-unity-sdk/.github/workflows/regen-lockfiles.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 4 | [sdk-policy.json](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-policy.json)<br>[sdk-policy.json.meta](../../../../sources/toss__apps-in-toss-unity-sdk/sdk-policy.json.meta)<br>[Runtime/SDK/AIT.Permission.cs](../../../../sources/toss__apps-in-toss-unity-sdk/Runtime/SDK/AIT.Permission.cs)<br>[Runtime/SDK/AIT.Permission.cs.meta](../../../../sources/toss__apps-in-toss-unity-sdk/Runtime/SDK/AIT.Permission.cs.meta) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/toss__apps-in-toss-unity-sdk/CLAUDE.md)<br>[CLAUDE.md.meta](../../../../sources/toss__apps-in-toss-unity-sdk/CLAUDE.md.meta) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`, `Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`, `Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`.
2. Trace execution through entrypoints: `Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`, `Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`, `Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/src/main.ts`.
3. Inspect retrieval/memory/indexing through: `WebGLTemplates/AITTemplate/index.html`, `WebGLTemplates/AITTemplate/index.html.meta`, `Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/index.html`.
4. Verify behavior through test/eval files: `run-local-tests.sh`, `run-local-tests.sh.meta`, `Tests~/E2E/tests.meta`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 C#, package.json, README.md, CLAUDE.md, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
