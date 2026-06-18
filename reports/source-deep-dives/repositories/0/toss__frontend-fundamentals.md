# toss/frontend-fundamentals Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Essential principles for frontend development

## 요약

- 조사 단위: `sources/toss__frontend-fundamentals` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 686 files, 209 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=fundamentals/today-i-learned/test/mocks/fileMock.js, fundamentals/today-i-learned/src/utils/streaks.test.ts, fundamentals/today-i-learned/src/test/setup.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/frontend-fundamentals |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | TypeScript |
| Stars | 1964 |
| Forks | 201 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__frontend-fundamentals](../../../../sources/toss__frontend-fundamentals) |
| Existing report | [reports/korea-trending/repositories/toss__frontend-fundamentals.md](../../../korea-trending/repositories/toss__frontend-fundamentals.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 686 / 209 |
| Max observed depth | 8 |
| Top directories | .claude-plugin, .cursor, .github, .yarn, api, frontend-fundamentals-plugin, fundamentals, images, public |
| Top extensions | .md: 248, .png: 133, .tsx: 87, .ts: 79, .json: 19, .vue: 14, .gif: 13, .js: 12, .mts: 12, .css: 8, (none): 8, .svg: 7 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| api | source boundary | 1 |
| frontend-fundamentals-plugin | top-level component | 1 |
| fundamentals | top-level component | 1 |
| images | top-level component | 1 |
| public | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [fundamentals/today-i-learned/src/index.css](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/index.css)<br>[fundamentals/today-i-learned/src/main.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/main.tsx)<br>[fundamentals/bundling/webpack-tutorial/example-project/main.js](../../../../sources/toss__frontend-fundamentals/fundamentals/bundling/webpack-tutorial/example-project/main.js)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__frontend-fundamentals/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__frontend-fundamentals/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__frontend-fundamentals/.yarn/sdks/prettier/bin/prettier.cjs) |
| agentRuntime | 29 | [fundamentals/today-i-learned/src/pages/timeline/hooks/useEditCommentModal.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/pages/timeline/hooks/useEditCommentModal.tsx)<br>[fundamentals/today-i-learned/src/pages/timeline/hooks/useEditPostModal.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/pages/timeline/hooks/useEditPostModal.tsx)<br>[fundamentals/today-i-learned/src/pages/profile/hooks/useUserActivity.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/pages/profile/hooks/useUserActivity.ts)<br>[fundamentals/today-i-learned/src/pages/profile/hooks/useUserHallOfFame.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/pages/profile/hooks/useUserHallOfFame.ts)<br>[fundamentals/today-i-learned/src/hooks/useClickOutside.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/hooks/useClickOutside.ts)<br>[fundamentals/today-i-learned/src/hooks/useDiscussionReactions.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/hooks/useDiscussionReactions.ts)<br>[fundamentals/today-i-learned/src/hooks/useErrorHandler.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/hooks/useErrorHandler.ts)<br>[fundamentals/today-i-learned/src/hooks/useIntersectionObserver.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/hooks/useIntersectionObserver.ts) |
| mcp | 0 | not obvious |
| retrieval | 48 | [fundamentals/today-i-learned/index.html](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/index.html)<br>[fundamentals/today-i-learned/src/index.css](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/index.css)<br>[fundamentals/today-i-learned/src/constants/index.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/constants/index.ts)<br>[fundamentals/today-i-learned/src/components/features/discussions/PostDetail/index.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/components/features/discussions/PostDetail/index.tsx)<br>[fundamentals/shared/components/index.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/shared/components/index.ts)<br>[fundamentals/debug/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/index.md)<br>[fundamentals/debug/zh-hans/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/zh-hans/index.md)<br>[fundamentals/debug/pages/reproduce/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/pages/reproduce/index.md) |
| spec | 3 | [fundamentals/a11y/ja/eslint/design-system.md](../../../../sources/toss__frontend-fundamentals/fundamentals/a11y/ja/eslint/design-system.md)<br>[fundamentals/a11y/eslint/design-system.md](../../../../sources/toss__frontend-fundamentals/fundamentals/a11y/eslint/design-system.md)<br>[.cursor/rules/technical-writing-architecture.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-architecture.mdc) |
| eval | 166 | [fundamentals/today-i-learned/test/mocks/fileMock.js](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/test/mocks/fileMock.js)<br>[fundamentals/today-i-learned/src/utils/streaks.test.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/utils/streaks.test.ts)<br>[fundamentals/today-i-learned/src/test/setup.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/test/setup.ts)<br>[fundamentals/debug/pages/reproduce/trace.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/pages/reproduce/trace.md)<br>[fundamentals/code-quality/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/index.md)<br>[fundamentals/code-quality/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/package.json)<br>[fundamentals/code-quality/tsconfig.json](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/tsconfig.json)<br>[fundamentals/code-quality/zh-hans/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/zh-hans/index.md) |
| security | 5 | [fundamentals/today-i-learned/src/components/features/auth/UnauthenticatedState.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/components/features/auth/UnauthenticatedState.tsx)<br>[fundamentals/code-quality/zh-hans/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/zh-hans/code/examples/user-policy.md)<br>[fundamentals/code-quality/ja/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/ja/code/examples/user-policy.md)<br>[fundamentals/code-quality/en/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/en/code/examples/user-policy.md)<br>[fundamentals/code-quality/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/code/examples/user-policy.md) |
| ci | 1 | [.github/workflows/autofix.yml](../../../../sources/toss__frontend-fundamentals/.github/workflows/autofix.yml) |
| container | 0 | not obvious |
| instruction | 4 | [fundamentals/today-i-learned/CLAUDE.md](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/CLAUDE.md)<br>[.cursor/rules/techincal-writing-overall.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/techincal-writing-overall.mdc)<br>[.cursor/rules/technical-writing-architecture.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-architecture.mdc)<br>[.cursor/rules/technical-writing-editing.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-editing.mdc) |
| docs | 4 | [README.md](../../../../sources/toss__frontend-fundamentals/README.md)<br>[fundamentals/today-i-learned/README.md](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/README.md)<br>[frontend-fundamentals-plugin/README.md](../../../../sources/toss__frontend-fundamentals/frontend-fundamentals-plugin/README.md)<br>[frontend-fundamentals-plugin/eval/tasks/cohesion/payment-flow/README.md](../../../../sources/toss__frontend-fundamentals/frontend-fundamentals-plugin/eval/tasks/cohesion/payment-flow/README.md) |
| config | 14 | [package.json](../../../../sources/toss__frontend-fundamentals/package.json)<br>[tsconfig.json](../../../../sources/toss__frontend-fundamentals/tsconfig.json)<br>[fundamentals/today-i-learned/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/package.json)<br>[fundamentals/today-i-learned/tsconfig.json](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/tsconfig.json)<br>[fundamentals/shared/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/shared/package.json)<br>[fundamentals/shared/tsconfig.json](../../../../sources/toss__frontend-fundamentals/fundamentals/shared/tsconfig.json)<br>[fundamentals/debug/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/package.json)<br>[fundamentals/code-quality/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 166 | [fundamentals/today-i-learned/test/mocks/fileMock.js](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/test/mocks/fileMock.js)<br>[fundamentals/today-i-learned/src/utils/streaks.test.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/utils/streaks.test.ts)<br>[fundamentals/today-i-learned/src/test/setup.ts](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/test/setup.ts)<br>[fundamentals/debug/pages/reproduce/trace.md](../../../../sources/toss__frontend-fundamentals/fundamentals/debug/pages/reproduce/trace.md)<br>[fundamentals/code-quality/index.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/index.md)<br>[fundamentals/code-quality/package.json](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/package.json) |
| CI workflows | 1 | [.github/workflows/autofix.yml](../../../../sources/toss__frontend-fundamentals/.github/workflows/autofix.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [fundamentals/today-i-learned/src/components/features/auth/UnauthenticatedState.tsx](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/src/components/features/auth/UnauthenticatedState.tsx)<br>[fundamentals/code-quality/zh-hans/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/zh-hans/code/examples/user-policy.md)<br>[fundamentals/code-quality/ja/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/ja/code/examples/user-policy.md)<br>[fundamentals/code-quality/en/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/en/code/examples/user-policy.md)<br>[fundamentals/code-quality/code/examples/user-policy.md](../../../../sources/toss__frontend-fundamentals/fundamentals/code-quality/code/examples/user-policy.md) |
| Agent instructions | 4 | [fundamentals/today-i-learned/CLAUDE.md](../../../../sources/toss__frontend-fundamentals/fundamentals/today-i-learned/CLAUDE.md)<br>[.cursor/rules/techincal-writing-overall.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/techincal-writing-overall.mdc)<br>[.cursor/rules/technical-writing-architecture.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-architecture.mdc)<br>[.cursor/rules/technical-writing-editing.mdc](../../../../sources/toss__frontend-fundamentals/.cursor/rules/technical-writing-editing.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `fundamentals/today-i-learned/test/mocks/fileMock.js`, `fundamentals/today-i-learned/src/utils/streaks.test.ts`, `fundamentals/today-i-learned/src/test/setup.ts`.
2. Trace execution through entrypoints: `fundamentals/today-i-learned/src/index.css`, `fundamentals/today-i-learned/src/main.tsx`, `fundamentals/bundling/webpack-tutorial/example-project/main.js`.
3. Map agent/tool runtime through: `fundamentals/today-i-learned/src/pages/timeline/hooks/useEditCommentModal.tsx`, `fundamentals/today-i-learned/src/pages/timeline/hooks/useEditPostModal.tsx`, `fundamentals/today-i-learned/src/pages/profile/hooks/useUserActivity.ts`.
4. Inspect retrieval/memory/indexing through: `fundamentals/today-i-learned/index.html`, `fundamentals/today-i-learned/src/index.css`, `fundamentals/today-i-learned/src/constants/index.ts`.
5. Verify behavior through test/eval files: `fundamentals/today-i-learned/test/mocks/fileMock.js`, `fundamentals/today-i-learned/src/utils/streaks.test.ts`, `fundamentals/today-i-learned/src/test/setup.ts`.

## Existing Repository Insight

평가/관측/품질 관점에서 Essential principles for frontend development. 핵심 구조 신호는 TypeScript, package.json, README.md, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
