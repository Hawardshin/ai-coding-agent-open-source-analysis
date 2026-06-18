# Samsung/TAU 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

TAU (Tizen Advanced UI) project for supporting web app development based on web-based ui widget components library

## 요약

- 조사 단위: `sources/Samsung__TAU` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,826 files, 1,061 directories, depth score 97, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/tizen-sdk/bin/common.sh, tools/tizen-sdk/bin/tizen, tools/tizen-sdk/bin/web-build이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/TAU |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 50 |
| Forks | 40 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__TAU](../../../../sources/Samsung__TAU) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__TAU.md](../../../korea-trending/repositories/Samsung__TAU.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6826 / 1061 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, .hooks, config, examples, libs, license, src, tests, tools |
| 상위 확장자 | .js: 1764, .html: 1735, .png: 1564, .json: 527, .svg: 328, .jpg: 271, .less: 195, .jar: 103, .css: 79, (none): 70, .xml: 65, .ttf: 17 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 72 |
| examples/mobile | examples workspace | 6 |
| src | source boundary | 6 |
| libs/globalize | libs workspace | 2 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| examples | top-level component | 1 |
| examples/wearable | examples workspace | 1 |
| libs | source boundary | 1 |
| license | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | npx grunt build |
| build | package.json | postinstall | npm run build |
| utility | package.json | grunt | grunt |
| serve-dev | package.json | http-server | http-server -p 8888 -a localhost |
| quality | package.json | preinstall | ./check-node.py && ./install-hooks |
| test | package.json | test | npx grunt test |
| test | package.json | test:karma | karma start tests/karma/all.conf.js |
| test | package.json | test:karma-single-test | karma start tests/karma/single.conf.js |
| quality | package.json | lint-check | lint-diff $TRAVIS_COMMIT_RANGE |
| quality | package.json | spellcheck | cspell 'src/**/*.js' 'src/**/*.html' 'examples/mobile/UIComponents/**/*.js' 'examples/wearable/UIComponents/**/*.js' 'examples/mobile/UIComponents/**/*.html' 'examples/wearable/UIComponents/**/*.html' |


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
| entrypoints | [tools/tizen-sdk/bin/common.sh](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/common.sh) | entrypoints signal |
| entrypoints | [tools/tizen-sdk/bin/tizen](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/tizen) | entrypoints signal |
| entrypoints | [tools/tizen-sdk/bin/web-build](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-build) | entrypoints signal |
| entrypoints | [tools/tizen-sdk/bin/web-gen](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-gen) | entrypoints signal |
| config | [package.json](../../../../sources/Samsung__TAU/package.json) | config signal |
| config | [tools/ninepatch/package.json](../../../../sources/Samsung__TAU/tools/ninepatch/package.json) | config signal |
| config | [tools/karma-plugins/console-reporter/package.json](../../../../sources/Samsung__TAU/tools/karma-plugins/console-reporter/package.json) | config signal |
| config | [tools/converter/package.json](../../../../sources/Samsung__TAU/tools/converter/package.json) | config signal |
| docs | [README.md](../../../../sources/Samsung__TAU/README.md) | docs signal |
| docs | [tools/tizen-sdk/README_HYBRIDAPP.txt](../../../../sources/Samsung__TAU/tools/tizen-sdk/README_HYBRIDAPP.txt) | docs signal |
| docs | [tools/tizen-sdk/lib-cli/README](../../../../sources/Samsung__TAU/tools/tizen-sdk/lib-cli/README) | docs signal |
| docs | [tools/tizen-sdk/lib/README](../../../../sources/Samsung__TAU/tools/tizen-sdk/lib/README) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 18 | [tools/tizen-sdk/bin/common.sh](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/common.sh)<br>[tools/tizen-sdk/bin/tizen](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/tizen)<br>[tools/tizen-sdk/bin/web-build](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-build)<br>[tools/tizen-sdk/bin/web-gen](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-gen)<br>[tools/tizen-sdk/bin/web-hybridapp](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-hybridapp)<br>[tools/tizen-sdk/bin/web-list](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-list)<br>[tools/tizen-sdk/bin/web-packaging](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-packaging)<br>[tools/tizen-sdk/bin/web-signing](../../../../sources/Samsung__TAU/tools/tizen-sdk/bin/web-signing) |
| agentRuntime | 284 | [tools/59cc85fc.diff](../../../../sources/Samsung__TAU/tools/59cc85fc.diff)<br>[tools/author.p12](../../../../sources/Samsung__TAU/tools/author.p12)<br>[tools/distributor.p12](../../../../sources/Samsung__TAU/tools/distributor.p12)<br>[tools/profiles.xml](../../../../sources/Samsung__TAU/tools/profiles.xml)<br>[tools/sync-wearable-sdk-git.py](../../../../sources/Samsung__TAU/tools/sync-wearable-sdk-git.py)<br>[tools/tizen-developer-ca.cer](../../../../sources/Samsung__TAU/tools/tizen-developer-ca.cer)<br>[tools/tizen-distributor-ca.cer](../../../../sources/Samsung__TAU/tools/tizen-distributor-ca.cer)<br>[tools/tizen-distributor-signer.p12](../../../../sources/Samsung__TAU/tools/tizen-distributor-signer.p12) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 249 | [index.md](../../../../sources/Samsung__TAU/index.md)<br>[tools/karma-plugins/console-reporter/index.js](../../../../sources/Samsung__TAU/tools/karma-plugins/console-reporter/index.js)<br>[tools/grunt/tasks/templates/sdk/index.mustache](../../../../sources/Samsung__TAU/tools/grunt/tasks/templates/sdk/index.mustache)<br>[tools/grunt/tasks/templates/dld/index.mustache](../../../../sources/Samsung__TAU/tools/grunt/tasks/templates/dld/index.mustache)<br>[tools/grunt/tasks/templates/components/index.mustache](../../../../sources/Samsung__TAU/tools/grunt/tasks/templates/components/index.mustache)<br>[tools/grunt/tasks/generate-api-coverage-info/index.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/generate-api-coverage-info/index.js)<br>[tools/converter/index.js](../../../../sources/Samsung__TAU/tools/converter/index.js)<br>[tests/unitTest/index.html](../../../../sources/Samsung__TAU/tests/unitTest/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 3558 | [tools/tizen-sdk/conf/log4j-trace.xml](../../../../sources/Samsung__TAU/tools/tizen-sdk/conf/log4j-trace.xml)<br>[tools/grunt/tasks/ce-converter-test.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test.js)<br>[tools/grunt/tasks/tests.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/tests.js)<br>[tools/grunt/tasks/ui-tests.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/ui-tests.js)<br>[tools/grunt/tasks/ce-converter-test/mobile/base.html](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test/mobile/base.html)<br>[tools/grunt/tasks/ce-converter-test/mobile/target.html](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test/mobile/target.html)<br>[tools/cmd/ui-tests-cmd.js](../../../../sources/Samsung__TAU/tools/cmd/ui-tests-cmd.js)<br>[tools/cmd/lib/ui-tests.js](../../../../sources/Samsung__TAU/tools/cmd/lib/ui-tests.js) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [tools/cmd/jenkins-update.js](../../../../sources/Samsung__TAU/tools/cmd/jenkins-update.js)<br>[.github/workflows/actions.yml](../../../../sources/Samsung__TAU/.github/workflows/actions.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 18 | [README.md](../../../../sources/Samsung__TAU/README.md)<br>[tools/tizen-sdk/README_HYBRIDAPP.txt](../../../../sources/Samsung__TAU/tools/tizen-sdk/README_HYBRIDAPP.txt)<br>[tools/tizen-sdk/lib-cli/README](../../../../sources/Samsung__TAU/tools/tizen-sdk/lib-cli/README)<br>[tools/tizen-sdk/lib/README](../../../../sources/Samsung__TAU/tools/tizen-sdk/lib/README)<br>[tools/ninepatch/README.txt](../../../../sources/Samsung__TAU/tools/ninepatch/README.txt)<br>[tools/git/README](../../../../sources/Samsung__TAU/tools/git/README)<br>[tests/docs/wearable/all.html](../../../../sources/Samsung__TAU/tests/docs/wearable/all.html)<br>[tests/docs/wearable/docs.js](../../../../sources/Samsung__TAU/tests/docs/wearable/docs.js) |
| config | 6 | [package.json](../../../../sources/Samsung__TAU/package.json)<br>[tools/ninepatch/package.json](../../../../sources/Samsung__TAU/tools/ninepatch/package.json)<br>[tools/karma-plugins/console-reporter/package.json](../../../../sources/Samsung__TAU/tools/karma-plugins/console-reporter/package.json)<br>[tools/converter/package.json](../../../../sources/Samsung__TAU/tools/converter/package.json)<br>[libs/globalize/package.json](../../../../sources/Samsung__TAU/libs/globalize/package.json)<br>[examples/mobile/HomeAppServer/package.json](../../../../sources/Samsung__TAU/examples/mobile/HomeAppServer/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3558 | [tools/tizen-sdk/conf/log4j-trace.xml](../../../../sources/Samsung__TAU/tools/tizen-sdk/conf/log4j-trace.xml)<br>[tools/grunt/tasks/ce-converter-test.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test.js)<br>[tools/grunt/tasks/tests.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/tests.js)<br>[tools/grunt/tasks/ui-tests.js](../../../../sources/Samsung__TAU/tools/grunt/tasks/ui-tests.js)<br>[tools/grunt/tasks/ce-converter-test/mobile/base.html](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test/mobile/base.html)<br>[tools/grunt/tasks/ce-converter-test/mobile/target.html](../../../../sources/Samsung__TAU/tools/grunt/tasks/ce-converter-test/mobile/target.html) |
| CI workflow | 2 | [tools/cmd/jenkins-update.js](../../../../sources/Samsung__TAU/tools/cmd/jenkins-update.js)<br>[.github/workflows/actions.yml](../../../../sources/Samsung__TAU/.github/workflows/actions.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/tizen-sdk/bin/common.sh`, `tools/tizen-sdk/bin/tizen`, `tools/tizen-sdk/bin/web-build`.
2. entrypoint를 따라 실행 흐름 확인: `tools/tizen-sdk/bin/common.sh`, `tools/tizen-sdk/bin/tizen`, `tools/tizen-sdk/bin/web-build`.
3. agent/tool runtime 매핑: `tools/59cc85fc.diff`, `tools/author.p12`, `tools/distributor.p12`.
4. retrieval/memory/indexing 확인: `index.md`, `tools/karma-plugins/console-reporter/index.js`, `tools/grunt/tasks/templates/sdk/index.mustache`.
5. test/eval 파일로 동작 검증: `tools/tizen-sdk/conf/log4j-trace.xml`, `tools/grunt/tasks/ce-converter-test.js`, `tools/grunt/tasks/tests.js`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 TAU Tizen Advanced UI project for supporting web app development based on web based ui widget components library. 핵심 구조 신호는 JavaScript, package.json, README.md, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
