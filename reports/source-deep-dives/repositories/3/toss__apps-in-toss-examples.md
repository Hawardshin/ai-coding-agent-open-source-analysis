# toss/apps-in-toss-examples Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Examples of AppsInToss

## 요약

- 조사 단위: `sources/toss__apps-in-toss-examples` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 917 files, 266 directories, depth score 99, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=with-storage/.yarn/sdks/typescript/bin/tsc, with-storage/.yarn/sdks/typescript/bin/tsserver, with-share-text/.yarn/sdks/typescript/bin/tsc이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/apps-in-toss-examples |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 150 |
| Forks | 14 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/toss__apps-in-toss-examples](../../../../sources/toss__apps-in-toss-examples) |
| Existing report | [reports/korea-trending/repositories/toss__apps-in-toss-examples.md](../../../korea-trending/repositories/toss__apps-in-toss-examples.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 917 / 266 |
| Max observed depth | 7 |
| Top directories | assets, examples, random-balls, weekly-todo-jquery, weekly-todo-react, weekly-todo-vue, with-album-photos, with-app-login, with-camera, with-clipboard-text, with-contacts, with-contacts-viral, with-game, with-haptic-feedback, with-in-app-purchase, with-interstitial-ad, with-locale, with-location-callback, with-location-once, with-location-tracking |
| Top extensions | .ts: 197, .tsx: 178, .js: 156, (none): 86, .json: 81, .yml: 45, .png: 32, .svg: 29, .lock: 27, .md: 27, .css: 18, .wav: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| random-balls | top-level component | 1 |
| weekly-todo-jquery | top-level component | 1 |
| weekly-todo-react | top-level component | 1 |
| weekly-todo-vue | top-level component | 1 |
| with-album-photos | top-level component | 1 |
| with-app-login | top-level component | 1 |
| with-camera | top-level component | 1 |
| with-clipboard-text | top-level component | 1 |
| with-contacts | top-level component | 1 |
| with-contacts-viral | top-level component | 1 |
| with-game | top-level component | 1 |
| with-haptic-feedback | top-level component | 1 |
| with-in-app-purchase | top-level component | 1 |
| with-interstitial-ad | top-level component | 1 |
| with-locale | top-level component | 1 |


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
| entrypoints | [with-storage/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| entrypoints | [with-storage/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/bin/tsserver) | entrypoints signal |
| entrypoints | [with-share-text/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-share-text/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| entrypoints | [with-share-text/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-share-text/.yarn/sdks/typescript/bin/tsserver) | entrypoints signal |
| config | [with-storage/package.json](../../../../sources/toss__apps-in-toss-examples/with-storage/package.json) | config signal |
| config | [with-storage/tsconfig.json](../../../../sources/toss__apps-in-toss-examples/with-storage/tsconfig.json) | config signal |
| config | [with-storage/.yarn/sdks/typescript/package.json](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/package.json) | config signal |
| config | [with-share-text/package.json](../../../../sources/toss__apps-in-toss-examples/with-share-text/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__apps-in-toss-examples/README.md) | docs signal |
| docs | [with-storage/README.md](../../../../sources/toss__apps-in-toss-examples/with-storage/README.md) | docs signal |
| docs | [with-share-text/README.md](../../../../sources/toss__apps-in-toss-examples/with-share-text/README.md) | docs signal |
| docs | [with-share-link/README.md](../../../../sources/toss__apps-in-toss-examples/with-share-link/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 53 | [with-storage/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/bin/tsc)<br>[with-storage/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/bin/tsserver)<br>[with-share-text/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-share-text/.yarn/sdks/typescript/bin/tsc)<br>[with-share-text/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-share-text/.yarn/sdks/typescript/bin/tsserver)<br>[with-share-link/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-share-link/.yarn/sdks/typescript/bin/tsc)<br>[with-share-link/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-share-link/.yarn/sdks/typescript/bin/tsserver)<br>[with-rewarded-ad/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/.yarn/sdks/typescript/bin/tsc)<br>[with-rewarded-ad/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 39 | [with-storage/src/hooks/useDebouncedSaveWithMessage.ts](../../../../sources/toss__apps-in-toss-examples/with-storage/src/hooks/useDebouncedSaveWithMessage.ts)<br>[with-storage/src/hooks/useStorage.ts](../../../../sources/toss__apps-in-toss-examples/with-storage/src/hooks/useStorage.ts)<br>[with-share-text/src/hooks/useClientKey.ts](../../../../sources/toss__apps-in-toss-examples/with-share-text/src/hooks/useClientKey.ts)<br>[with-rewarded-ad/src/hooks/useRewardedAd.ts](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/src/hooks/useRewardedAd.ts)<br>[with-operational-environment/src/hooks/useEnvironmentDetails.ts](../../../../sources/toss__apps-in-toss-examples/with-operational-environment/src/hooks/useEnvironmentDetails.ts)<br>[with-network-status/src/hooks/useNetworkStatus.ts](../../../../sources/toss__apps-in-toss-examples/with-network-status/src/hooks/useNetworkStatus.ts)<br>[with-location-once/src/hooks/useCurrentLocation.tsx](../../../../sources/toss__apps-in-toss-examples/with-location-once/src/hooks/useCurrentLocation.tsx)<br>[with-location-once/src/hooks/usePermissionGate.ts](../../../../sources/toss__apps-in-toss-examples/with-location-once/src/hooks/usePermissionGate.ts) |
| mcp | 0 | not obvious |
| retrieval | 55 | [with-storage/index.ts](../../../../sources/toss__apps-in-toss-examples/with-storage/index.ts)<br>[with-storage/pages/index.tsx](../../../../sources/toss__apps-in-toss-examples/with-storage/pages/index.tsx)<br>[with-share-text/index.ts](../../../../sources/toss__apps-in-toss-examples/with-share-text/index.ts)<br>[with-share-text/pages/index.tsx](../../../../sources/toss__apps-in-toss-examples/with-share-text/pages/index.tsx)<br>[with-share-link/index.ts](../../../../sources/toss__apps-in-toss-examples/with-share-link/index.ts)<br>[with-share-link/pages/index.tsx](../../../../sources/toss__apps-in-toss-examples/with-share-link/pages/index.tsx)<br>[with-rewarded-ad/index.ts](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/index.ts)<br>[with-rewarded-ad/pages/index.tsx](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/pages/index.tsx) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 5 | [with-app-login/server/src/services/auth.service.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/services/auth.service.js)<br>[with-app-login/server/src/routes/auth.routes.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/routes/auth.routes.js)<br>[with-app-login/server/src/controllers/auth.controller.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/controllers/auth.controller.js)<br>[with-app-login/app/src/types/auth.ts](../../../../sources/toss__apps-in-toss-examples/with-app-login/app/src/types/auth.ts)<br>[assets/tags/tag-sandbox-app.svg](../../../../sources/toss__apps-in-toss-examples/assets/tags/tag-sandbox-app.svg) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 27 | [README.md](../../../../sources/toss__apps-in-toss-examples/README.md)<br>[with-storage/README.md](../../../../sources/toss__apps-in-toss-examples/with-storage/README.md)<br>[with-share-text/README.md](../../../../sources/toss__apps-in-toss-examples/with-share-text/README.md)<br>[with-share-link/README.md](../../../../sources/toss__apps-in-toss-examples/with-share-link/README.md)<br>[with-rewarded-ad/README.md](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/README.md)<br>[with-platform-os/README.md](../../../../sources/toss__apps-in-toss-examples/with-platform-os/README.md)<br>[with-operational-environment/README.md](../../../../sources/toss__apps-in-toss-examples/with-operational-environment/README.md)<br>[with-network-status/README.md](../../../../sources/toss__apps-in-toss-examples/with-network-status/README.md) |
| config | 72 | [with-storage/package.json](../../../../sources/toss__apps-in-toss-examples/with-storage/package.json)<br>[with-storage/tsconfig.json](../../../../sources/toss__apps-in-toss-examples/with-storage/tsconfig.json)<br>[with-storage/.yarn/sdks/typescript/package.json](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/package.json)<br>[with-share-text/package.json](../../../../sources/toss__apps-in-toss-examples/with-share-text/package.json)<br>[with-share-text/tsconfig.json](../../../../sources/toss__apps-in-toss-examples/with-share-text/tsconfig.json)<br>[with-share-text/.yarn/sdks/typescript/package.json](../../../../sources/toss__apps-in-toss-examples/with-share-text/.yarn/sdks/typescript/package.json)<br>[with-share-link/package.json](../../../../sources/toss__apps-in-toss-examples/with-share-link/package.json)<br>[with-share-link/tsconfig.json](../../../../sources/toss__apps-in-toss-examples/with-share-link/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [with-app-login/server/src/services/auth.service.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/services/auth.service.js)<br>[with-app-login/server/src/routes/auth.routes.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/routes/auth.routes.js)<br>[with-app-login/server/src/controllers/auth.controller.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/controllers/auth.controller.js)<br>[with-app-login/app/src/types/auth.ts](../../../../sources/toss__apps-in-toss-examples/with-app-login/app/src/types/auth.ts)<br>[assets/tags/tag-sandbox-app.svg](../../../../sources/toss__apps-in-toss-examples/assets/tags/tag-sandbox-app.svg) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `with-storage/.yarn/sdks/typescript/bin/tsc`, `with-storage/.yarn/sdks/typescript/bin/tsserver`, `with-share-text/.yarn/sdks/typescript/bin/tsc`.
2. Trace execution through entrypoints: `with-storage/.yarn/sdks/typescript/bin/tsc`, `with-storage/.yarn/sdks/typescript/bin/tsserver`, `with-share-text/.yarn/sdks/typescript/bin/tsc`.
3. Map agent/tool runtime through: `with-storage/src/hooks/useDebouncedSaveWithMessage.ts`, `with-storage/src/hooks/useStorage.ts`, `with-share-text/src/hooks/useClientKey.ts`.
4. Inspect retrieval/memory/indexing through: `with-storage/index.ts`, `with-storage/pages/index.tsx`, `with-share-text/index.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Examples of AppsInToss. 핵심 구조 신호는 TypeScript, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
