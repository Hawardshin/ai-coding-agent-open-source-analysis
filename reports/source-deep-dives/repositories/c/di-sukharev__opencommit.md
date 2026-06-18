# di-sukharev/opencommit 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

top #1 and most feature rich GPT wrapper for git — generate commit messages with an LLM in 1 sec — works with Claude, GPT and every other provider, supports local Ollama models too

## 요약

- 조사 단위: `sources/di-sukharev__opencommit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 136 files, 20 directories, depth score 83, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/cli.ts이고, 의존성 단서는 openai, anthropic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | di-sukharev/opencommit |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | JavaScript |
| Stars | 7341 |
| Forks | 425 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/di-sukharev__opencommit](../../../../sources/di-sukharev__opencommit) |
| 기존 보고서 | [reports/global-trending/repositories/di-sukharev__opencommit.md](../../../global-trending/repositories/di-sukharev__opencommit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 136 / 20 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, out, src, test |
| 상위 확장자 | .ts: 77, .json: 29, (none): 9, .js: 4, .md: 4, .yml: 4, .png: 3, .svg: 2, .yaml: 2, .cjs: 1, .sh: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| out | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/cli.ts](../../../../sources/di-sukharev__opencommit/src/cli.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [src/i18n/index.ts](../../../../sources/di-sukharev__opencommit/src/i18n/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 30 | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile)<br>[test/jest-setup.ts](../../../../sources/di-sukharev__opencommit/test/jest-setup.ts)<br>[test/unit/config.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/config.test.ts)<br>[test/unit/errors.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/errors.test.ts)<br>[test/unit/gemini.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/gemini.test.ts)<br>[test/unit/llamacpp.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/llamacpp.test.ts)<br>[test/unit/ollama.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/ollama.test.ts)<br>[test/unit/openAi.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/openAi.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/codeql.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/dependency-review.yml)<br>[.github/workflows/test.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/test.yml) |
| container | 1 | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/di-sukharev__opencommit/README.md)<br>[src/commands/README.md](../../../../sources/di-sukharev__opencommit/src/commands/README.md) |
| config | 5 | [package.json](../../../../sources/di-sukharev__opencommit/package.json)<br>[tsconfig.json](../../../../sources/di-sukharev__opencommit/tsconfig.json)<br>[test/e2e/prompt-module/data/commitlint_9/package.json](../../../../sources/di-sukharev__opencommit/test/e2e/prompt-module/data/commitlint_9/package.json)<br>[test/e2e/prompt-module/data/commitlint_19/package.json](../../../../sources/di-sukharev__opencommit/test/e2e/prompt-module/data/commitlint_19/package.json)<br>[test/e2e/prompt-module/data/commitlint_18/package.json](../../../../sources/di-sukharev__opencommit/test/e2e/prompt-module/data/commitlint_18/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 30 | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile)<br>[test/jest-setup.ts](../../../../sources/di-sukharev__opencommit/test/jest-setup.ts)<br>[test/unit/config.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/config.test.ts)<br>[test/unit/errors.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/errors.test.ts)<br>[test/unit/gemini.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/gemini.test.ts)<br>[test/unit/llamacpp.test.ts](../../../../sources/di-sukharev__opencommit/test/unit/llamacpp.test.ts) |
| CI workflow | 3 | [.github/workflows/codeql.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/dependency-review.yml)<br>[.github/workflows/test.yml](../../../../sources/di-sukharev__opencommit/.github/workflows/test.yml) |
| 컨테이너/배포 | 1 | [test/Dockerfile](../../../../sources/di-sukharev__opencommit/test/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/cli.ts`, `test/Dockerfile`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`.
3. retrieval/memory/indexing 확인: `src/i18n/index.ts`.
4. test/eval 파일로 동작 검증: `test/Dockerfile`, `test/jest-setup.ts`, `test/unit/config.test.ts`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 top 1 and most feature rich GPT wrapper for git — generate commit messages with an LLM in 1 sec — works with Claude, GPT. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, openai, anthropic이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
