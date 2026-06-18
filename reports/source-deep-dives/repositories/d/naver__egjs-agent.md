# naver/egjs-agent 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Extracts browser and operating system information from the user agent string or user agent object(userAgentData).

## 요약

- 조사 단위: `sources/naver__egjs-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 66 files, 19 directories, depth score 70, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/agent.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/egjs-agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 125 |
| Forks | 17 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__egjs-agent](../../../../sources/naver__egjs-agent) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__egjs-agent.md](../../../korea-trending/repositories/naver__egjs-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 66 / 19 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, config, demo, src, test |
| 상위 확장자 | .ts: 12, .html: 9, .js: 8, .md: 8, (none): 7, .css: 6, .svg: 6, .json: 5, .yml: 4, .template: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | rollup -c -w |
| build | package.json | build | rollup -c && npm run declaration && print-sizes ./dist |
| quality | package.json | declaration | rm -rf declaration && tsc -p tsconfig.declaration.json |
| test | package.json | test | jest --watchAll |
| test | package.json | test:node | npm run build && node ./test/node/node.js |
| utility | package.json | jsdoc | rm -rf ./doc && jsdoc -c jsdoc.json |
| test | package.json | coverage | npm run test:node && jest --coverage && print-coveralls --sort=desc |
| test | package.json | coveralls | cat ./coverage/lcov.info \| coveralls |
| quality | package.json | lint | eslint . --ext .ts |
| test | package.json | demo:start | npm run demo:prebuild-latest && npm run demo:updateVersion && jekyll serve --host=0.0.0.0 -s demo |
| build | package.json | demo:build | npm run demo:updateVersion && jekyll build -s demo |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' demo/release/$npm_package_version/dist --clean && cpx 'doc/**/*' demo/release/$npm_package_version/doc --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' demo/release/latest/dist --clean && cpx 'doc/**/*' demo/release/latest/doc --clean |
| utility | package.json | demo:updateVersion | echo $npm_package_version > demo/_data/version.yml |
| test | package.json | demo:deploy | npm run build && npm run jsdoc && npm run demo:prebuild-version && npm run demo:prebuild-latest && npm run demo:build && gh-pages -d demo/_site --add --remote upstream |
| build | package.json | release | release-helper upstream |
| quality | package.json | prepush | npm run lint |
| utility | package.json | commitmsg | node config/validate-commit-msg.js |


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
| agentRuntime | [src/agent.ts](../../../../sources/naver__egjs-agent/src/agent.ts) | agentRuntime signal |
| entrypoints | [src/index.umd.ts](../../../../sources/naver__egjs-agent/src/index.umd.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-agent/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-agent/tsconfig.json) | config signal |
| eval | [test/unit/userAgent.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgent.spec.ts) | eval support |
| eval | [test/unit/userAgentConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentConsts.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.umd.ts](../../../../sources/naver__egjs-agent/src/index.umd.ts) |
| agentRuntime | 1 | [src/agent.ts](../../../../sources/naver__egjs-agent/src/agent.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [test/manual/index.html](../../../../sources/naver__egjs-agent/test/manual/index.html)<br>[src/index.umd.ts](../../../../sources/naver__egjs-agent/src/index.umd.ts)<br>[demo/index.md](../../../../sources/naver__egjs-agent/demo/index.md) |
| spec | 2 | [test/unit/userAgent.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgent.spec.ts)<br>[test/unit/userAgentData.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentData.spec.ts) |
| eval | 6 | [test/unit/userAgent.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgent.spec.ts)<br>[test/unit/userAgentConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentConsts.ts)<br>[test/unit/userAgentData.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentData.spec.ts)<br>[test/unit/userAgentDataConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentDataConsts.ts)<br>[test/node/node.js](../../../../sources/naver__egjs-agent/test/node/node.js)<br>[test/manual/index.html](../../../../sources/naver__egjs-agent/test/manual/index.html) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/naver__egjs-agent/README.md) |
| config | 2 | [package.json](../../../../sources/naver__egjs-agent/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-agent/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6 | [test/unit/userAgent.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgent.spec.ts)<br>[test/unit/userAgentConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentConsts.ts)<br>[test/unit/userAgentData.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentData.spec.ts)<br>[test/unit/userAgentDataConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentDataConsts.ts)<br>[test/node/node.js](../../../../sources/naver__egjs-agent/test/node/node.js)<br>[test/manual/index.html](../../../../sources/naver__egjs-agent/test/manual/index.html) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/agent.ts`, `src/index.umd.ts`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.umd.ts`.
3. agent/tool runtime 매핑: `src/agent.ts`.
4. retrieval/memory/indexing 확인: `test/manual/index.html`, `src/index.umd.ts`, `demo/index.md`.
5. test/eval 파일로 동작 검증: `test/unit/userAgent.spec.ts`, `test/unit/userAgentConsts.ts`, `test/unit/userAgentData.spec.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Extracts browser and operating system information from the user agent string or user agent object userAgentData .. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
