# kakao/hbase-region-inspector 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A visual dashboard of HBase region statistics

## 요약

- 조사 단위: `sources/kakao__hbase-region-inspector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 42 files, 20 directories, depth score 57, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness, ui/extension surface 구조로 읽힌다. 핵심 소스 근거는 config=Makefile, package.json이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/hbase-region-inspector |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Clojure |
| Stars | 107 |
| Forks | 29 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__hbase-region-inspector](../../../../sources/kakao__hbase-region-inspector) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__hbase-region-inspector.md](../../../korea-trending/repositories/kakao__hbase-region-inspector.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 42 / 20 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | conf-examples, resources, screenshot, src, test |
| 상위 확장자 | .clj: 12, .properties: 7, .conf: 5, (none): 5, .md: 4, .json: 2, .png: 2, .css: 1, .html: 1, .js: 1, .jsx: 1, .txt: 1 |
| 소스 패턴 | retrieval/vector path, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| conf-examples | top-level component | 1 |
| resources | top-level component | 1 |
| screenshot | top-level component | 1 |
| src | source boundary | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| build | Makefile | build | make build |
| utility | Makefile | js | make js |
| utility | Makefile | node_modules | make node_modules |
| utility | Makefile | bower_components | make bower_components |
| utility | Makefile | bin | make bin |
| build | Makefile | release | make release |
| utility | Makefile | repl | make repl |
| quality | Makefile | lint | make lint |
| quality | Makefile | cljlint | make cljlint |
| quality | Makefile | jslint | make jslint |
| serve-dev | Makefile | serve | make serve |
| test | Makefile | test | make test |
| test | Makefile | autotest | make autotest |
| utility | Makefile | doc | make doc |
| utility | Makefile | .PHONY | make .PHONY |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [Makefile](../../../../sources/kakao__hbase-region-inspector/Makefile) | config signal |
| config | [package.json](../../../../sources/kakao__hbase-region-inspector/package.json) | config signal |
| docs | [README.md](../../../../sources/kakao__hbase-region-inspector/README.md) | docs signal |
| docs | [conf-examples/README.md](../../../../sources/kakao__hbase-region-inspector/conf-examples/README.md) | docs signal |
| eval | [test/resources/insecure.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/insecure.properties) | eval signal |
| eval | [test/resources/keytab-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab-jaas.conf) | eval signal |
| eval | [test/resources/keytab.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab.properties) | eval signal |
| eval | [test/resources/ticket-cache-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache-jaas.conf) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [resources/public/index.html](../../../../sources/kakao__hbase-region-inspector/resources/public/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 9 | [test/resources/insecure.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/insecure.properties)<br>[test/resources/keytab-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab-jaas.conf)<br>[test/resources/keytab.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab.properties)<br>[test/resources/ticket-cache-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache-jaas.conf)<br>[test/resources/ticket-cache.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache.properties)<br>[test/hbase_region_inspector/config_test.clj](../../../../sources/kakao__hbase-region-inspector/test/hbase_region_inspector/config_test.clj)<br>[test/hbase_region_inspector/core_test.clj](../../../../sources/kakao__hbase-region-inspector/test/hbase_region_inspector/core_test.clj)<br>[test/hbase_region_inspector/hbase_test.clj](../../../../sources/kakao__hbase-region-inspector/test/hbase_region_inspector/hbase_test.clj) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/kakao__hbase-region-inspector/README.md)<br>[conf-examples/README.md](../../../../sources/kakao__hbase-region-inspector/conf-examples/README.md) |
| config | 2 | [Makefile](../../../../sources/kakao__hbase-region-inspector/Makefile)<br>[package.json](../../../../sources/kakao__hbase-region-inspector/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [test/resources/insecure.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/insecure.properties)<br>[test/resources/keytab-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab-jaas.conf)<br>[test/resources/keytab.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab.properties)<br>[test/resources/ticket-cache-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache-jaas.conf)<br>[test/resources/ticket-cache.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache.properties)<br>[test/hbase_region_inspector/config_test.clj](../../../../sources/kakao__hbase-region-inspector/test/hbase_region_inspector/config_test.clj) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `Makefile`, `package.json`, `README.md`.
2. retrieval/memory/indexing 확인: `resources/public/index.html`.
3. test/eval 파일로 동작 검증: `test/resources/insecure.properties`, `test/resources/keytab-jaas.conf`, `test/resources/keytab.properties`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A visual dashboard of HBase region statistics. 핵심 구조 신호는 Clojure, package.json, Makefile, README.md, react, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
