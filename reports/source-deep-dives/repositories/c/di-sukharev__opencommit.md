# di-sukharev/opencommit Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

top #1 and most feature rich GPT wrapper for git — generate commit messages with an LLM in 1 sec — works with Claude, GPT and every other provider, supports local Ollama models too

## 요약

- 조사 단위: `sources/di-sukharev__opencommit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 136 files, 20 directories, depth score 89, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/cli.ts이고, 의존성 단서는 openai, anthropic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | di-sukharev/opencommit |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | JavaScript |
| Stars | 7341 |
| Forks | 425 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/di-sukharev__opencommit](../../../../sources/di-sukharev__opencommit) |
| Existing report | [reports/global-trending/repositories/di-sukharev__opencommit.md](../../../global-trending/repositories/di-sukharev__opencommit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 136 / 20 |
| Max observed depth | 6 |
| Top directories | .github, out, src, test |
| Top extensions | .ts: 77, .json: 29, (none): 9, .js: 4, .md: 4, .yml: 4, .png: 3, .svg: 2, .yaml: 2, .cjs: 1, .sh: 1 |
| Source patterns | cli-first, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| out | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | watch | npm run -S build -- --sourcemap --watch |
| serve-dev | package.json | start | node ./out/cli.cjs |
| serve-dev | package.json | ollama:start | OCO_AI_PROVIDER='ollama' node ./out/cli.cjs |
| serve-dev | package.json | dev | ts-node ./src/cli.ts |
| serve-dev | package.json | dev:gemini | OCO_AI_PROVIDER='gemini' ts-node ./src/cli.ts |
| build | package.json | build | npx rimraf out && node esbuild.config.js |
| build | package.json | build:push | npm run build && git add . && git commit -m 'build' && git push |
| test | package.json | deploy | npm publish --tag latest |
| build | package.json | deploy:build | npm run build:push && git push --tags && npm run deploy |
| build | package.json | deploy:patch | npm version patch && npm run deploy:build |
| quality | package.json | lint | biome check . --diagnostic-level=error && tsc --noEmit |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | format | prettier --write "src/**/*.{ts,js,json,md}" "test/**/*.{ts,js,json,md}" ".github/**/*.{yml,yaml}" "*.{js,json,ts,md,yml,yaml}" |
| test | package.json | format:check | prettier --check "src/**/*.{ts,js,json,md}" "test/**/*.{ts,js,json,md}" ".github/**/*.{yml,yaml}" "*.{js,json,ts,md,yml,yaml}" |
| test | package.json | test | node --no-warnings --experimental-vm-modules $( [ -f ./node_modules/.bin/jest ] && echo ./node_modules/.bin/jest \|\| which jest ) test/unit |
| test | package.json | test:all | npm run test:unit:docker && npm run test:e2e:docker |
| test | package.json | test:docker-build | docker build -t oco-test -f test/Dockerfile . |
| test | package.json | test:unit | NODE_OPTIONS=--experimental-vm-modules jest test/unit |
| test | package.json | test:unit:docker | npm run test:docker-build && DOCKER_CONTENT_TRUST=0 docker run --rm oco-test npm run test:unit |
| test | package.json | test:e2e | npm run build && npm run test:e2e:smoke:run && npm run test:e2e:core:run && npm run test:e2e:prompt-module:run |
| test | package.json | test:e2e:smoke | npm run build && npm run test:e2e:smoke:run |
| test | package.json | test:e2e:smoke:run | OCO_TEST_SKIP_VERSION_CHECK=true jest test/e2e/smoke.test.ts |
| test | package.json | test:e2e:core | npm run build && npm run test:e2e:core:run |
| test | package.json | test:e2e:core:run | OCO_TEST_SKIP_VERSION_CHECK=true jest test/e2e/cliBehavior.test.ts test/e2e/geminiBehavior.test.ts test/e2e/gitPush.test.ts test/e2e/oneFile.test.ts test/e2e/noChanges.test.ts |
| test | package.json | test:e2e:setup | npm run test:e2e:prompt-module:setup |
| test | package.json | test:e2e:prompt-module:setup | sh test/e2e/setup.sh |
| test | package.json | test:e2e:prompt-module | npm run build && npm run test:e2e:prompt-module:run |
| test | package.json | test:e2e:prompt-module:run | npm run test:e2e:prompt-module:setup && OCO_TEST_SKIP_VERSION_CHECK=true jest test/e2e/prompt-module |
| test | package.json | test:e2e:docker | npm run test:docker-build && DOCKER_CONTENT_TRUST=0 docker run --rm oco-test npm run test:e2e |
| serve-dev | package.json | mlx:start | OCO_AI_PROVIDER='mlx' node ./out/cli.cjs |
| entrypoint | package.json bin | cli.cjs | out/cli.cjs |
| entrypoint | package.json bin | cli.cjs | out/cli.cjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
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
| entrypoints | [src/cli.ts](../../../../sources/di-sukharev__opencommit/src/cli.ts) | entrypoints signal |
| container | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile) | container signal |
| config | [package.json](../../../../sources/di-sukharev__opencommit/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/di-sukharev__opencommit/tsconfig.json) | config signal |
| config | [test/e2e/prompt-module/data/commitlint_9/package.json](../../../../sources/di-sukharev__opencommit/test/e2e/prompt-module/data/commitlint_9/package.json) | config signal |
| config | [test/e2e/prompt-module/data/commitlint_19/package.json](../../../../sources/di-sukharev__opencommit/test/e2e/prompt-module/data/commitlint_19/package.json) | config signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/codeql.yml) | ci signal |
| ci | [.github/workflows/dependency-review.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/dependency-review.yml) | ci signal |
| ci | [.github/workflows/test.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/test.yml) | ci signal |
| eval | [test/jest-setup.ts](../../../../sources/di-sukharev__opencommit/test/jest-setup.ts) | eval support |
| manifest-entrypoint | [out/cli.cjs](../../../../sources/di-sukharev__opencommit/out/cli.cjs) | package manifest entrypoint |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/cli.ts](../../../../sources/di-sukharev__opencommit/src/cli.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/i18n/index.ts](../../../../sources/di-sukharev__opencommit/src/i18n/index.ts) |
| spec | 0 | not obvious |
| eval | 30 | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile)<br>[test/jest-setup.ts](../../../../sources/di-sukharev__opencommit/test/jest-setup.ts)<br>[test/unit/config.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/config.test.ts)<br>[test/unit/errors.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/errors.test.ts)<br>[test/unit/gemini.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/gemini.test.ts)<br>[test/unit/llamacpp.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/llamacpp.test.ts)<br>[test/unit/ollama.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/ollama.test.ts)<br>[test/unit/openAi.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/openAi.test.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/codeql.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/dependency-review.yml)<br>[.github/workflows/test.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/test.yml) |
| container | 1 | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/di-sukharev__opencommit/README.md)<br>[src/commands/README.md](../../../../sources/di-sukharev__opencommit/src/commands/README.md) |
| config | 5 | [package.json](../../../../sources/di-sukharev__opencommit/package.json)<br>[tsconfig.json](../../../../sources/di-sukharev__opencommit/tsconfig.json)<br>[test/e2e/prompt-module/data/commitlint_9/package.json](../../../../sources/di-sukharev__opencommit/test/e2e/prompt-module/data/commitlint_9/package.json)<br>[test/e2e/prompt-module/data/commitlint_19/package.json](../../../../sources/di-sukharev__opencommit/test/e2e/prompt-module/data/commitlint_19/package.json)<br>[test/e2e/prompt-module/data/commitlint_18/package.json](../../../../sources/di-sukharev__opencommit/test/e2e/prompt-module/data/commitlint_18/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 30 | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile)<br>[test/jest-setup.ts](../../../../sources/di-sukharev__opencommit/test/jest-setup.ts)<br>[test/unit/config.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/config.test.ts)<br>[test/unit/errors.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/errors.test.ts)<br>[test/unit/gemini.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/gemini.test.ts)<br>[test/unit/llamacpp.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/llamacpp.test.ts) |
| CI workflows | 3 | [.github/workflows/codeql.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/dependency-review.yml)<br>[.github/workflows/test.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/test.yml) |
| Containers / deploy | 1 | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/cli.ts`, `test/Dockerfile`, `package.json`.
2. Trace execution through entrypoints: `src/cli.ts`.
3. Inspect retrieval/memory/indexing through: `src/i18n/index.ts`.
4. Verify behavior through test/eval files: `test/Dockerfile`, `test/jest-setup.ts`, `test/unit/config.test.ts`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 top 1 and most feature rich GPT wrapper for git — generate commit messages with an LLM in 1 sec — works with Claude, GPT. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, openai, anthropic이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
