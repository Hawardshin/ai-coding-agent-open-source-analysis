# toss/apps-in-toss-examples 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Examples of AppsInToss

## 요약

- 조사 단위: `sources/toss__apps-in-toss-examples` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 917 files, 266 directories, depth score 93, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=with-storage/.yarn/sdks/typescript/bin/tsc, with-storage/.yarn/sdks/typescript/bin/tsserver, with-share-text/.yarn/sdks/typescript/bin/tsc이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/apps-in-toss-examples |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 150 |
| Forks | 14 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__apps-in-toss-examples](../../../../sources/toss__apps-in-toss-examples) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__apps-in-toss-examples.md](../../../korea-trending/repositories/toss__apps-in-toss-examples.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 917 / 266 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | assets, examples, random-balls, weekly-todo-jquery, weekly-todo-react, weekly-todo-vue, with-album-photos, with-app-login, with-camera, with-clipboard-text, with-contacts, with-contacts-viral, with-game, with-haptic-feedback, with-in-app-purchase, with-interstitial-ad, with-locale, with-location-callback, with-location-once, with-location-tracking |
| 상위 확장자 | .ts: 197, .tsx: 178, .js: 156, (none): 86, .json: 81, .yml: 45, .png: 32, .svg: 29, .lock: 27, .md: 27, .css: 18, .wav: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 53 | [with-storage/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/bin/tsc)<br>[with-storage/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/bin/tsserver)<br>[with-share-text/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-share-text/.yarn/sdks/typescript/bin/tsc)<br>[with-share-text/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-share-text/.yarn/sdks/typescript/bin/tsserver)<br>[with-share-link/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-share-link/.yarn/sdks/typescript/bin/tsc)<br>[with-share-link/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-share-link/.yarn/sdks/typescript/bin/tsserver)<br>[with-rewarded-ad/.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/.yarn/sdks/typescript/bin/tsc)<br>[with-rewarded-ad/.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 39 | [with-storage/src/hooks/useDebouncedSaveWithMessage.ts](../../../../sources/toss__apps-in-toss-examples/with-storage/src/hooks/useDebouncedSaveWithMessage.ts)<br>[with-storage/src/hooks/useStorage.ts](../../../../sources/toss__apps-in-toss-examples/with-storage/src/hooks/useStorage.ts)<br>[with-share-text/src/hooks/useClientKey.ts](../../../../sources/toss__apps-in-toss-examples/with-share-text/src/hooks/useClientKey.ts)<br>[with-rewarded-ad/src/hooks/useRewardedAd.ts](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/src/hooks/useRewardedAd.ts)<br>[with-operational-environment/src/hooks/useEnvironmentDetails.ts](../../../../sources/toss__apps-in-toss-examples/with-operational-environment/src/hooks/useEnvironmentDetails.ts)<br>[with-network-status/src/hooks/useNetworkStatus.ts](../../../../sources/toss__apps-in-toss-examples/with-network-status/src/hooks/useNetworkStatus.ts)<br>[with-location-once/src/hooks/useCurrentLocation.tsx](../../../../sources/toss__apps-in-toss-examples/with-location-once/src/hooks/useCurrentLocation.tsx)<br>[with-location-once/src/hooks/usePermissionGate.ts](../../../../sources/toss__apps-in-toss-examples/with-location-once/src/hooks/usePermissionGate.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 55 | [with-storage/index.ts](../../../../sources/toss__apps-in-toss-examples/with-storage/index.ts)<br>[with-storage/pages/index.tsx](../../../../sources/toss__apps-in-toss-examples/with-storage/pages/index.tsx)<br>[with-share-text/index.ts](../../../../sources/toss__apps-in-toss-examples/with-share-text/index.ts)<br>[with-share-text/pages/index.tsx](../../../../sources/toss__apps-in-toss-examples/with-share-text/pages/index.tsx)<br>[with-share-link/index.ts](../../../../sources/toss__apps-in-toss-examples/with-share-link/index.ts)<br>[with-share-link/pages/index.tsx](../../../../sources/toss__apps-in-toss-examples/with-share-link/pages/index.tsx)<br>[with-rewarded-ad/index.ts](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/index.ts)<br>[with-rewarded-ad/pages/index.tsx](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/pages/index.tsx) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 5 | [with-app-login/server/src/services/auth.service.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/services/auth.service.js)<br>[with-app-login/server/src/routes/auth.routes.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/routes/auth.routes.js)<br>[with-app-login/server/src/controllers/auth.controller.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/controllers/auth.controller.js)<br>[with-app-login/app/src/types/auth.ts](../../../../sources/toss__apps-in-toss-examples/with-app-login/app/src/types/auth.ts)<br>[assets/tags/tag-sandbox-app.svg](../../../../sources/toss__apps-in-toss-examples/assets/tags/tag-sandbox-app.svg) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 27 | [README.md](../../../../sources/toss__apps-in-toss-examples/README.md)<br>[with-storage/README.md](../../../../sources/toss__apps-in-toss-examples/with-storage/README.md)<br>[with-share-text/README.md](../../../../sources/toss__apps-in-toss-examples/with-share-text/README.md)<br>[with-share-link/README.md](../../../../sources/toss__apps-in-toss-examples/with-share-link/README.md)<br>[with-rewarded-ad/README.md](../../../../sources/toss__apps-in-toss-examples/with-rewarded-ad/README.md)<br>[with-platform-os/README.md](../../../../sources/toss__apps-in-toss-examples/with-platform-os/README.md)<br>[with-operational-environment/README.md](../../../../sources/toss__apps-in-toss-examples/with-operational-environment/README.md)<br>[with-network-status/README.md](../../../../sources/toss__apps-in-toss-examples/with-network-status/README.md) |
| config | 72 | [with-storage/package.json](../../../../sources/toss__apps-in-toss-examples/with-storage/package.json)<br>[with-storage/tsconfig.json](../../../../sources/toss__apps-in-toss-examples/with-storage/tsconfig.json)<br>[with-storage/.yarn/sdks/typescript/package.json](../../../../sources/toss__apps-in-toss-examples/with-storage/.yarn/sdks/typescript/package.json)<br>[with-share-text/package.json](../../../../sources/toss__apps-in-toss-examples/with-share-text/package.json)<br>[with-share-text/tsconfig.json](../../../../sources/toss__apps-in-toss-examples/with-share-text/tsconfig.json)<br>[with-share-text/.yarn/sdks/typescript/package.json](../../../../sources/toss__apps-in-toss-examples/with-share-text/.yarn/sdks/typescript/package.json)<br>[with-share-link/package.json](../../../../sources/toss__apps-in-toss-examples/with-share-link/package.json)<br>[with-share-link/tsconfig.json](../../../../sources/toss__apps-in-toss-examples/with-share-link/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [with-app-login/server/src/services/auth.service.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/services/auth.service.js)<br>[with-app-login/server/src/routes/auth.routes.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/routes/auth.routes.js)<br>[with-app-login/server/src/controllers/auth.controller.js](../../../../sources/toss__apps-in-toss-examples/with-app-login/server/src/controllers/auth.controller.js)<br>[with-app-login/app/src/types/auth.ts](../../../../sources/toss__apps-in-toss-examples/with-app-login/app/src/types/auth.ts)<br>[assets/tags/tag-sandbox-app.svg](../../../../sources/toss__apps-in-toss-examples/assets/tags/tag-sandbox-app.svg) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `with-storage/.yarn/sdks/typescript/bin/tsc`, `with-storage/.yarn/sdks/typescript/bin/tsserver`, `with-share-text/.yarn/sdks/typescript/bin/tsc`.
2. entrypoint를 따라 실행 흐름 확인: `with-storage/.yarn/sdks/typescript/bin/tsc`, `with-storage/.yarn/sdks/typescript/bin/tsserver`, `with-share-text/.yarn/sdks/typescript/bin/tsc`.
3. agent/tool runtime 매핑: `with-storage/src/hooks/useDebouncedSaveWithMessage.ts`, `with-storage/src/hooks/useStorage.ts`, `with-share-text/src/hooks/useClientKey.ts`.
4. retrieval/memory/indexing 확인: `with-storage/index.ts`, `with-storage/pages/index.tsx`, `with-share-text/index.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Examples of AppsInToss. 핵심 구조 신호는 TypeScript, README.md, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
