# toss/es-toolkit 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A modern JavaScript utility library that's 2-3 times faster and up to 97% smaller—a major upgrade to lodash.

## 요약

- 조사 단위: `sources/toss__es-toolkit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,746 files, 176 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts, .yarn/sdks/typescript/bin/tsc, .yarn/sdks/typescript/bin/tsserver이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/es-toolkit |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 11148 |
| Forks | 569 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__es-toolkit](../../../../sources/toss__es-toolkit) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__es-toolkit.md](../../../korea-trending/repositories/toss__es-toolkit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3746 / 176 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .claude-plugin, .github, .scripts, .yarn, benchmarks, docs, es-toolkit-plugin, src, tests |
| 상위 확장자 | .md: 2087, .ts: 1569, .json: 15, .mts: 14, (none): 11, .js: 10, .yml: 10, .vue: 8, .png: 7, .cjs: 4, .mjs: 4, .lock: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 93 |
| docs | documentation surface | 53 |
| tests | validation surface | 9 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| es-toolkit-plugin | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | bench | vitest bench |
| build | package.json | build | tsdown && ./.scripts/postbuild.sh |
| quality | package.json | format | prettier --write . |
| build | package.json | gen:bundle-size | node ./.scripts/generate-bundle-size.mjs |
| quality | package.json | lint | eslint --config eslint.config.mjs --concurrency=auto |
| quality | package.json | packlint | packlint sort -R |
| build | package.json | prepack | yarn build |
| test | package.json | test | vitest --coverage --typecheck |
| test | package.json | transform | jscodeshift -t ./.scripts/tests/transform-lodash-test.ts $0 && prettier --write $0 |
| quality | package.json | typecheck | tsc --noEmit |


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
| entrypoints | [src/index.ts](../../../../sources/toss__es-toolkit/src/index.ts) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/bin/tsserver) | entrypoints signal |
| entrypoints | [.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__es-toolkit/.yarn/sdks/prettier/bin/prettier.cjs) | entrypoints signal |
| config | [package.json](../../../../sources/toss__es-toolkit/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__es-toolkit/tsconfig.json) | config signal |
| config | [docs/package.json](../../../../sources/toss__es-toolkit/docs/package.json) | config signal |
| config | [benchmarks/package.json](../../../../sources/toss__es-toolkit/benchmarks/package.json) | config signal |
| docs | [README-ja_jp.md](../../../../sources/toss__es-toolkit/README-ja_jp.md) | docs signal |
| docs | [README-ko_kr.md](../../../../sources/toss__es-toolkit/README-ko_kr.md) | docs signal |
| docs | [README-zh_hans.md](../../../../sources/toss__es-toolkit/README-zh_hans.md) | docs signal |
| docs | [README.md](../../../../sources/toss__es-toolkit/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [src/index.ts](../../../../sources/toss__es-toolkit/src/index.ts)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__es-toolkit/.yarn/sdks/prettier/bin/prettier.cjs)<br>[.yarn/sdks/eslint/bin/eslint.js](../../../../sources/toss__es-toolkit/.yarn/sdks/eslint/bin/eslint.js) |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/toss__es-toolkit/AGENTS.md)<br>[es-toolkit-plugin/skills/recommend/SKILL.md](../../../../sources/toss__es-toolkit/es-toolkit-plugin/skills/recommend/SKILL.md)<br>[es-toolkit-plugin/skills/migrate/SKILL.md](../../../../sources/toss__es-toolkit/es-toolkit-plugin/skills/migrate/SKILL.md)<br>[es-toolkit-plugin/skills/guide/SKILL.md](../../../../sources/toss__es-toolkit/es-toolkit-plugin/skills/guide/SKILL.md)<br>[.claude/skills/release/SKILL.md](../../../../sources/toss__es-toolkit/.claude/skills/release/SKILL.md)<br>[.claude/skills/pr-triage/SKILL.md](../../../../sources/toss__es-toolkit/.claude/skills/pr-triage/SKILL.md)<br>[.claude/skills/pr-review/SKILL.md](../../../../sources/toss__es-toolkit/.claude/skills/pr-review/SKILL.md)<br>[.claude/skills/issue-review/SKILL.md](../../../../sources/toss__es-toolkit/.claude/skills/issue-review/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 38 | [src/index.ts](../../../../sources/toss__es-toolkit/src/index.ts)<br>[src/util/index.ts](../../../../sources/toss__es-toolkit/src/util/index.ts)<br>[src/string/index.ts](../../../../sources/toss__es-toolkit/src/string/index.ts)<br>[src/set/index.ts](../../../../sources/toss__es-toolkit/src/set/index.ts)<br>[src/server/index.ts](../../../../sources/toss__es-toolkit/src/server/index.ts)<br>[src/server/colors/index.ts](../../../../sources/toss__es-toolkit/src/server/colors/index.ts)<br>[src/promise/index.ts](../../../../sources/toss__es-toolkit/src/promise/index.ts)<br>[src/predicate/index.ts](../../../../sources/toss__es-toolkit/src/predicate/index.ts) |
| spec | 586 | [tests/__proto__.spec.ts](../../../../sources/toss__es-toolkit/tests/__proto__.spec.ts)<br>[tests/check-dist.spec.ts](../../../../sources/toss__es-toolkit/tests/check-dist.spec.ts)<br>[src/util/attempt.spec.ts](../../../../sources/toss__es-toolkit/src/util/attempt.spec.ts)<br>[src/util/attemptAsync.spec.ts](../../../../sources/toss__es-toolkit/src/util/attemptAsync.spec.ts)<br>[src/util/invariant.spec.ts](../../../../sources/toss__es-toolkit/src/util/invariant.spec.ts)<br>[src/string/camelCase.spec.ts](../../../../sources/toss__es-toolkit/src/string/camelCase.spec.ts)<br>[src/string/capitalize.spec.ts](../../../../sources/toss__es-toolkit/src/string/capitalize.spec.ts)<br>[src/string/constantCase.spec.ts](../../../../sources/toss__es-toolkit/src/string/constantCase.spec.ts) |
| eval | 877 | [tests/__proto__.spec.ts](../../../../sources/toss__es-toolkit/tests/__proto__.spec.ts)<br>[tests/check-dist.spec.ts](../../../../sources/toss__es-toolkit/tests/check-dist.spec.ts)<br>[tests/utils/createPackageTarball.ts](../../../../sources/toss__es-toolkit/tests/utils/createPackageTarball.ts)<br>[tests/utils/createTmpDir.ts](../../../../sources/toss__es-toolkit/tests/utils/createTmpDir.ts)<br>[tests/utils/parseTar.ts](../../../../sources/toss__es-toolkit/tests/utils/parseTar.ts)<br>[tests/utils/streamToBuffer.ts](../../../../sources/toss__es-toolkit/tests/utils/streamToBuffer.ts)<br>[src/util/attempt.spec.ts](../../../../sources/toss__es-toolkit/src/util/attempt.spec.ts)<br>[src/util/attemptAsync.spec.ts](../../../../sources/toss__es-toolkit/src/util/attemptAsync.spec.ts) |
| security | 1 | [SECURITY.md](../../../../sources/toss__es-toolkit/SECURITY.md) |
| ci | 6 | [.github/workflows/broken-link-checker.yml](../../../../sources/toss__es-toolkit/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__es-toolkit/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/toss__es-toolkit/.github/workflows/codeql.yml)<br>[.github/workflows/deno.yml](../../../../sources/toss__es-toolkit/.github/workflows/deno.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-toolkit/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/toss__es-toolkit/.github/workflows/scorecard.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/toss__es-toolkit/AGENTS.md)<br>[CLAUDE.md](../../../../sources/toss__es-toolkit/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/toss__es-toolkit/docs/CLAUDE.md) |
| docs | 2133 | [README-ja_jp.md](../../../../sources/toss__es-toolkit/README-ja_jp.md)<br>[README-ko_kr.md](../../../../sources/toss__es-toolkit/README-ko_kr.md)<br>[README-zh_hans.md](../../../../sources/toss__es-toolkit/README-zh_hans.md)<br>[README.md](../../../../sources/toss__es-toolkit/README.md)<br>[es-toolkit-plugin/README.md](../../../../sources/toss__es-toolkit/es-toolkit-plugin/README.md)<br>[docs/.gitignore](../../../../sources/toss__es-toolkit/docs/.gitignore)<br>[docs/ai-integration.md](../../../../sources/toss__es-toolkit/docs/ai-integration.md)<br>[docs/bundle-size.md](../../../../sources/toss__es-toolkit/docs/bundle-size.md) |
| config | 7 | [package.json](../../../../sources/toss__es-toolkit/package.json)<br>[tsconfig.json](../../../../sources/toss__es-toolkit/tsconfig.json)<br>[docs/package.json](../../../../sources/toss__es-toolkit/docs/package.json)<br>[benchmarks/package.json](../../../../sources/toss__es-toolkit/benchmarks/package.json)<br>[.yarn/sdks/typescript/package.json](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/package.json)<br>[.yarn/sdks/prettier/package.json](../../../../sources/toss__es-toolkit/.yarn/sdks/prettier/package.json)<br>[.yarn/sdks/eslint/package.json](../../../../sources/toss__es-toolkit/.yarn/sdks/eslint/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 877 | [tests/__proto__.spec.ts](../../../../sources/toss__es-toolkit/tests/__proto__.spec.ts)<br>[tests/check-dist.spec.ts](../../../../sources/toss__es-toolkit/tests/check-dist.spec.ts)<br>[tests/utils/createPackageTarball.ts](../../../../sources/toss__es-toolkit/tests/utils/createPackageTarball.ts)<br>[tests/utils/createTmpDir.ts](../../../../sources/toss__es-toolkit/tests/utils/createTmpDir.ts)<br>[tests/utils/parseTar.ts](../../../../sources/toss__es-toolkit/tests/utils/parseTar.ts)<br>[tests/utils/streamToBuffer.ts](../../../../sources/toss__es-toolkit/tests/utils/streamToBuffer.ts) |
| CI workflow | 6 | [.github/workflows/broken-link-checker.yml](../../../../sources/toss__es-toolkit/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__es-toolkit/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/toss__es-toolkit/.github/workflows/codeql.yml)<br>[.github/workflows/deno.yml](../../../../sources/toss__es-toolkit/.github/workflows/deno.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-toolkit/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/toss__es-toolkit/.github/workflows/scorecard.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/toss__es-toolkit/SECURITY.md) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/toss__es-toolkit/AGENTS.md)<br>[CLAUDE.md](../../../../sources/toss__es-toolkit/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/toss__es-toolkit/docs/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/index.ts`, `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`.
3. agent/tool runtime 매핑: `AGENTS.md`, `es-toolkit-plugin/skills/recommend/SKILL.md`, `es-toolkit-plugin/skills/migrate/SKILL.md`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/util/index.ts`, `src/string/index.ts`.
5. test/eval 파일로 동작 검증: `tests/__proto__.spec.ts`, `tests/check-dist.spec.ts`, `tests/utils/createPackageTarball.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A modern JavaScript utility library that's 2 3 times faster and up to 97% smaller—a major upgrade to lodash.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
