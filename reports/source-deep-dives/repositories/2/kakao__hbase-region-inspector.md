# kakao/hbase-region-inspector Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A visual dashboard of HBase region statistics

## 요약

- 조사 단위: `sources/kakao__hbase-region-inspector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 42 files, 20 directories, depth score 63, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness, ui/extension surface 구조로 읽힌다. 핵심 소스 근거는 config=Makefile, package.json이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/hbase-region-inspector |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Clojure |
| Stars | 107 |
| Forks | 29 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kakao__hbase-region-inspector](../../../../sources/kakao__hbase-region-inspector) |
| Existing report | [reports/korea-trending/repositories/kakao__hbase-region-inspector.md](../../../korea-trending/repositories/kakao__hbase-region-inspector.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 42 / 20 |
| Max observed depth | 5 |
| Top directories | conf-examples, resources, screenshot, src, test |
| Top extensions | .clj: 12, .properties: 7, .conf: 5, (none): 5, .md: 4, .json: 2, .png: 2, .css: 1, .html: 1, .js: 1, .jsx: 1, .txt: 1 |
| Source patterns | retrieval/vector path, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| conf-examples | top-level component | 1 |
| resources | top-level component | 1 |
| screenshot | top-level component | 1 |
| src | source boundary | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [Makefile](../../../../sources/kakao__hbase-region-inspector/Makefile) | config signal |
| config | [package.json](../../../../sources/kakao__hbase-region-inspector/package.json) | config signal |
| docs | [README.md](../../../../sources/kakao__hbase-region-inspector/README.md) | docs signal |
| docs | [conf-examples/README.md](../../../../sources/kakao__hbase-region-inspector/conf-examples/README.md) | docs signal |
| eval | [test/resources/insecure.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/insecure.properties) | eval signal |
| eval | [test/resources/keytab-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab-jaas.conf) | eval signal |
| eval | [test/resources/keytab.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab.properties) | eval signal |
| eval | [test/resources/ticket-cache-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache-jaas.conf) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [resources/public/index.html](../../../../sources/kakao__hbase-region-inspector/resources/public/index.html) |
| spec | 0 | not obvious |
| eval | 9 | [test/resources/insecure.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/insecure.properties)<br>[test/resources/keytab-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab-jaas.conf)<br>[test/resources/keytab.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab.properties)<br>[test/resources/ticket-cache-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache-jaas.conf)<br>[test/resources/ticket-cache.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache.properties)<br>[test/hbase_region_inspector/config_test.clj](../../../../sources/kakao__hbase-region-inspector/test/hbase_region_inspector/config_test.clj)<br>[test/hbase_region_inspector/core_test.clj](../../../../sources/kakao__hbase-region-inspector/test/hbase_region_inspector/core_test.clj)<br>[test/hbase_region_inspector/hbase_test.clj](../../../../sources/kakao__hbase-region-inspector/test/hbase_region_inspector/hbase_test.clj) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/kakao__hbase-region-inspector/README.md)<br>[conf-examples/README.md](../../../../sources/kakao__hbase-region-inspector/conf-examples/README.md) |
| config | 2 | [Makefile](../../../../sources/kakao__hbase-region-inspector/Makefile)<br>[package.json](../../../../sources/kakao__hbase-region-inspector/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [test/resources/insecure.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/insecure.properties)<br>[test/resources/keytab-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab-jaas.conf)<br>[test/resources/keytab.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/keytab.properties)<br>[test/resources/ticket-cache-jaas.conf](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache-jaas.conf)<br>[test/resources/ticket-cache.properties](../../../../sources/kakao__hbase-region-inspector/test/resources/ticket-cache.properties)<br>[test/hbase_region_inspector/config_test.clj](../../../../sources/kakao__hbase-region-inspector/test/hbase_region_inspector/config_test.clj) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `Makefile`, `package.json`, `README.md`.
2. Inspect retrieval/memory/indexing through: `resources/public/index.html`.
3. Verify behavior through test/eval files: `test/resources/insecure.properties`, `test/resources/keytab-jaas.conf`, `test/resources/keytab.properties`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A visual dashboard of HBase region statistics. 핵심 구조 신호는 Clojure, package.json, Makefile, README.md, react, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
