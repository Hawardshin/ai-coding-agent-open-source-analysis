# toss/frontend-fundamentals 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Essential principles for frontend development

## 요약

- 조사 단위: `sources/toss__frontend-fundamentals` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 686 files, 209 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=fundamentals/today-i-learned/test/mocks/fileMock.js, fundamentals/today-i-learned/src/utils/streaks.test.ts, fundamentals/today-i-learned/src/test/setup.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/frontend-fundamentals |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | korea |
| Language | TypeScript |
| Stars | 1964 |
| Forks | 201 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__frontend-fundamentals](../../../../sources/toss__frontend-fundamentals) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__frontend-fundamentals.md](../../../korea-trending/repositories/toss__frontend-fundamentals.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 686 / 209 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .claude-plugin, .cursor, .github, .yarn, api, frontend-fundamentals-plugin, fundamentals, images, public |
| 상위 확장자 | .md: 248, .png: 133, .tsx: 87, .ts: 79, .json: 19, .vue: 14, .gif: 13, .js: 12, .mts: 12, .css: 8, (none): 8, .svg: 7 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| api | source boundary | 1 |
| frontend-fundamentals-plugin | top-level component | 1 |
| fundamentals | top-level component | 1 |
| images | top-level component | 1 |
| public | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | docs:dev | yarn workspace @frontend-fundamentals/code-quality docs:dev |
| build | package.json | docs:build | yarn workspace @frontend-fundamentals/code-quality docs:build |
| utility | package.json | docs:preview | yarn workspace @frontend-fundamentals/code-quality docs:preview |
| serve-dev | package.json | docs:bundle:dev | yarn workspace @frontend-fundamentals/bundling docs:dev |
| build | package.json | docs:bundle:build | yarn workspace @frontend-fundamentals/bundling docs:build |
| build | package.json | docs:bundle:preview | yarn workspace @frontend-fundamentals/bundling docs:preview |
| serve-dev | package.json | docs:debug:dev | yarn workspace @frontend-fundamentals/debug docs:dev |
| build | package.json | docs:debug:build | yarn workspace @frontend-fundamentals/debug docs:build |
| utility | package.json | docs:debug:preview | yarn workspace @frontend-fundamentals/debug docs:preview |
| serve-dev | package.json | docs:a11y:dev | yarn workspace @frontend-fundamentals/a11y docs:dev |
| build | package.json | docs:a11y:build | yarn workspace @frontend-fundamentals/a11y docs:build |
| utility | package.json | docs:a11y:preview | yarn workspace @frontend-fundamentals/a11y docs:preview |
| serve-dev | package.json | docs:til:dev | yarn workspace @frontend-fundamentals/today-i-learned dev |
| build | package.json | docs:til:build | yarn workspace @frontend-fundamentals/today-i-learned build |
| utility | package.json | docs:til:preview | yarn workspace @frontend-fundamentals/today-i-learned preview |
| quality | package.json | shared:typecheck | yarn workspace @frontend-fundamentals/shared typecheck |
| serve-dev | package.json | postbuild | mkdir -p dist/fundamentals/code-quality dist/fundamentals/bundling dist/fundamentals/debug dist/fundamentals/a11y dist/fundamentals/today-i-learned && cp -r fundamentals/code-quality/.vitepress/dist/* dist/fundamentals/c |
| build | package.json | build | yarn docs:build && yarn docs:bundle:build && yarn docs:debug:build && yarn docs:a11y:build && yarn docs:til:build && yarn postbuild |


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
| eval | [fundamentals/today-i-learned/test/mocks/fileMock.js](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/test/mocks/fileMock.js) | eval signal |
| eval | [fundamentals/today-i-learned/src/utils/streaks.test.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/utils/streaks.test.ts) | eval signal |
| eval | [fundamentals/today-i-learned/src/test/setup.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/test/setup.ts) | eval signal |
| eval | [fundamentals/debug/pages/reproduce/trace.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/pages/reproduce/trace.md) | eval signal |
| entrypoints | [fundamentals/today-i-learned/src/index.css](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/index.css) | entrypoints signal |
| entrypoints | [fundamentals/today-i-learned/src/main.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/main.tsx) | entrypoints signal |
| entrypoints | [fundamentals/bundling/webpack-tutorial/example-project/main.js](../../../../sources/toss__frontend-fundamentals/fundamentals/bundling/webpack-tutorial/example-project/main.js) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__frontend-fundamentals/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| config | [package.json](../../../../sources/toss__frontend-fundamentals/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__frontend-fundamentals/tsconfig.json) | config signal |
| config | [fundamentals/today-i-learned/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/package.json) | config signal |
| config | [fundamentals/today-i-learned/tsconfig.json](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [fundamentals/today-i-learned/src/index.css](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/index.css)<br>[fundamentals/today-i-learned/src/main.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/main.tsx)<br>[fundamentals/bundling/webpack-tutorial/example-project/main.js](../../../../sources/toss__frontend-fundamentals/fundamentals/bundling/webpack-tutorial/example-project/main.js)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__frontend-fundamentals/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__frontend-fundamentals/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__frontend-fundamentals/.yarn/sdks/prettier/bin/prettier.cjs) |
| agentRuntime | 29 | [fundamentals/today-i-learned/src/pages/timeline/hooks/useEditCommentModal.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/pages/timeline/hooks/useEditCommentModal.tsx)<br>[fundamentals/today-i-learned/src/pages/timeline/hooks/useEditPostModal.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/pages/timeline/hooks/useEditPostModal.tsx)<br>[fundamentals/today-i-learned/src/pages/profile/hooks/useUserActivity.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/pages/profile/hooks/useUserActivity.ts)<br>[fundamentals/today-i-learned/src/pages/profile/hooks/useUserHallOfFame.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/pages/profile/hooks/useUserHallOfFame.ts)<br>[fundamentals/today-i-learned/src/hooks/useClickOutside.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/hooks/useClickOutside.ts)<br>[fundamentals/today-i-learned/src/hooks/useDiscussionReactions.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/hooks/useDiscussionReactions.ts)<br>[fundamentals/today-i-learned/src/hooks/useErrorHandler.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/hooks/useErrorHandler.ts)<br>[fundamentals/today-i-learned/src/hooks/useIntersectionObserver.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/hooks/useIntersectionObserver.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 48 | [fundamentals/today-i-learned/index.html](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/index.html)<br>[fundamentals/today-i-learned/src/index.css](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/index.css)<br>[fundamentals/today-i-learned/src/constants/index.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/constants/index.ts)<br>[fundamentals/today-i-learned/src/components/features/discussions/PostDetail/index.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/components/features/discussions/PostDetail/index.tsx)<br>[fundamentals/shared/components/index.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/shared/components/index.ts)<br>[fundamentals/debug/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/index.md)<br>[fundamentals/debug/zh-hans/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/zh-hans/index.md)<br>[fundamentals/debug/pages/reproduce/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/pages/reproduce/index.md) |
| spec | 3 | [fundamentals/a11y/ja/eslint/design-system.md](../../../../sources/toss__frontend-fundamentals/fundamentals/a11y/ja/eslint/design-system.md)<br>[fundamentals/a11y/eslint/design-system.md](../../../../sources/toss__frontend-fundamentals/fundamentals/a11y/eslint/design-system.md)<br>[.cursor/rules/technical-writing-architecture.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-architecture.mdc) |
| eval | 166 | [fundamentals/today-i-learned/test/mocks/fileMock.js](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/test/mocks/fileMock.js)<br>[fundamentals/today-i-learned/src/utils/streaks.test.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/utils/streaks.test.ts)<br>[fundamentals/today-i-learned/src/test/setup.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/test/setup.ts)<br>[fundamentals/debug/pages/reproduce/trace.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/pages/reproduce/trace.md)<br>[fundamentals/code-quality/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/index.md)<br>[fundamentals/code-quality/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/package.json)<br>[fundamentals/code-quality/tsconfig.json](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/tsconfig.json)<br>[fundamentals/code-quality/zh-hans/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/zh-hans/index.md) |
| security | 5 | [fundamentals/today-i-learned/src/components/features/auth/UnauthenticatedState.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/components/features/auth/UnauthenticatedState.tsx)<br>[fundamentals/code-quality/zh-hans/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/zh-hans/code/examples/user-policy.md)<br>[fundamentals/code-quality/ja/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/ja/code/examples/user-policy.md)<br>[fundamentals/code-quality/en/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/en/code/examples/user-policy.md)<br>[fundamentals/code-quality/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/code/examples/user-policy.md) |
| ci | 1 | [.github/workflows/autofix.yml](../../../../sources/toss__frontend-fundamentals/.github/workflows/autofix.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 4 | [fundamentals/today-i-learned/CLAUDE.md](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/CLAUDE.md)<br>[.cursor/rules/techincal-writing-overall.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/techincal-writing-overall.mdc)<br>[.cursor/rules/technical-writing-architecture.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-architecture.mdc)<br>[.cursor/rules/technical-writing-editing.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-editing.mdc) |
| docs | 4 | [README.md](../../../../sources/toss__frontend-fundamentals/README.md)<br>[fundamentals/today-i-learned/README.md](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/README.md)<br>[frontend-fundamentals-plugin/README.md](../../../../sources/toss__frontend-fundamentals/frontend-fundamentals-plugin/README.md)<br>[frontend-fundamentals-plugin/eval/tasks/cohesion/payment-flow/README.md](../../../../sources/toss__frontend-fundamentals/frontend-fundamentals-plugin/eval/tasks/cohesion/payment-flow/README.md) |
| config | 14 | [package.json](../../../../sources/toss__frontend-fundamentals/package.json)<br>[tsconfig.json](../../../../sources/toss__frontend-fundamentals/tsconfig.json)<br>[fundamentals/today-i-learned/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/package.json)<br>[fundamentals/today-i-learned/tsconfig.json](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/tsconfig.json)<br>[fundamentals/shared/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/shared/package.json)<br>[fundamentals/shared/tsconfig.json](../../../../sources/toss__frontend-fundamentals/fundamentals/shared/tsconfig.json)<br>[fundamentals/debug/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/package.json)<br>[fundamentals/code-quality/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 166 | [fundamentals/today-i-learned/test/mocks/fileMock.js](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/test/mocks/fileMock.js)<br>[fundamentals/today-i-learned/src/utils/streaks.test.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/utils/streaks.test.ts)<br>[fundamentals/today-i-learned/src/test/setup.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/test/setup.ts)<br>[fundamentals/debug/pages/reproduce/trace.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/pages/reproduce/trace.md)<br>[fundamentals/code-quality/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/index.md)<br>[fundamentals/code-quality/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/package.json) |
| CI workflow | 1 | [.github/workflows/autofix.yml](../../../../sources/toss__frontend-fundamentals/.github/workflows/autofix.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [fundamentals/today-i-learned/src/components/features/auth/UnauthenticatedState.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/components/features/auth/UnauthenticatedState.tsx)<br>[fundamentals/code-quality/zh-hans/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/zh-hans/code/examples/user-policy.md)<br>[fundamentals/code-quality/ja/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/ja/code/examples/user-policy.md)<br>[fundamentals/code-quality/en/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/en/code/examples/user-policy.md)<br>[fundamentals/code-quality/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/code/examples/user-policy.md) |
| 에이전트 지시문 | 4 | [fundamentals/today-i-learned/CLAUDE.md](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/CLAUDE.md)<br>[.cursor/rules/techincal-writing-overall.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/techincal-writing-overall.mdc)<br>[.cursor/rules/technical-writing-architecture.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-architecture.mdc)<br>[.cursor/rules/technical-writing-editing.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-editing.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `fundamentals/today-i-learned/test/mocks/fileMock.js`, `fundamentals/today-i-learned/src/utils/streaks.test.ts`, `fundamentals/today-i-learned/src/test/setup.ts`.
2. entrypoint를 따라 실행 흐름 확인: `fundamentals/today-i-learned/src/index.css`, `fundamentals/today-i-learned/src/main.tsx`, `fundamentals/bundling/webpack-tutorial/example-project/main.js`.
3. agent/tool runtime 매핑: `fundamentals/today-i-learned/src/pages/timeline/hooks/useEditCommentModal.tsx`, `fundamentals/today-i-learned/src/pages/timeline/hooks/useEditPostModal.tsx`, `fundamentals/today-i-learned/src/pages/profile/hooks/useUserActivity.ts`.
4. retrieval/memory/indexing 확인: `fundamentals/today-i-learned/index.html`, `fundamentals/today-i-learned/src/index.css`, `fundamentals/today-i-learned/src/constants/index.ts`.
5. test/eval 파일로 동작 검증: `fundamentals/today-i-learned/test/mocks/fileMock.js`, `fundamentals/today-i-learned/src/utils/streaks.test.ts`, `fundamentals/today-i-learned/src/test/setup.ts`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Essential principles for frontend development. 핵심 구조 신호는 TypeScript, package.json, README.md, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
