# Samsung/LPVS Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

License Pre-Validation Service analyzes which open source components and licenses are used in every patch. It returns the list of restricted licenses and the possibility of license violation on the comment with the exact code location and the open source component information.

## 요약

- 조사 단위: `sources/Samsung__LPVS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 165 files, 50 directories, depth score 102, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt, doc/requirements-docs.txt이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/LPVS |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 29 |
| Forks | 27 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__LPVS](../../../../sources/Samsung__LPVS) |
| Existing report | [reports/korea-trending/repositories/Samsung__LPVS.md](../../../korea-trending/repositories/Samsung__LPVS.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 165 / 50 |
| Max observed depth | 9 |
| Top directories | .clusterfuzzlite, .github, doc, src |
| Top extensions | .java: 84, .md: 32, .yml: 14, .png: 9, .json: 7, (none): 5, .txt: 3, .css: 2, .properties: 2, .xml: 2, .yaml: 2, .html: 1 |
| Source patterns | api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 41 |
| .github | ci surface | 1 |
| doc | documentation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [requirements.txt](../../../../sources/Samsung__LPVS/requirements.txt) | config signal |
| config | [doc/requirements-docs.txt](../../../../sources/Samsung__LPVS/doc/requirements-docs.txt) | config signal |
| docs | [README.md](../../../../sources/Samsung__LPVS/README.md) | docs signal |
| docs | [doc/lpvs-api.yaml](../../../../sources/Samsung__LPVS/doc/lpvs-api.yaml) | docs signal |
| docs | [doc/mkdocs.yml](../../../../sources/Samsung__LPVS/doc/mkdocs.yml) | docs signal |
| eval | [src/test/resources/1-A_B.json](../../../../sources/Samsung__LPVS/src/test/resources/1-A_B.json) | eval signal |
| eval | [src/test/resources/convert1.txt](../../../../sources/Samsung__LPVS/src/test/resources/convert1.txt) | eval signal |
| eval | [src/test/resources/osori_db_response_internal_no_traffic.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_no_traffic.json) | eval signal |
| eval | [src/test/resources/osori_db_response_internal_red.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_red.json) | eval signal |
| ci | [.github/workflows/build.yml](../../../../sources/Samsung__LPVS/.github/workflows/build.yml) | ci support |
| ci | [.github/workflows/cflite_batch.yml](../../../../sources/Samsung__LPVS/.github/workflows/cflite_batch.yml) | ci support |
| container | [docker-compose-quick.yml](../../../../sources/Samsung__LPVS/docker-compose-quick.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [doc/docs/index.md](../../../../sources/Samsung__LPVS/doc/docs/index.md) |
| spec | 5 | [requirements.txt](../../../../sources/Samsung__LPVS/requirements.txt)<br>[doc/requirements-docs.txt](../../../../sources/Samsung__LPVS/doc/requirements-docs.txt)<br>[doc/docs/img/architecture.png](../../../../sources/Samsung__LPVS/doc/docs/img/architecture.png)<br>[doc/docs/dev-guide/architecture.md](../../../../sources/Samsung__LPVS/doc/docs/dev-guide/architecture.md)<br>[doc/docs/dev-guide/code-review-requirements.md](../../../../sources/Samsung__LPVS/doc/docs/dev-guide/code-review-requirements.md) |
| eval | 41 | [src/test/resources/1-A_B.json](../../../../sources/Samsung__LPVS/src/test/resources/1-A_B.json)<br>[src/test/resources/convert1.txt](../../../../sources/Samsung__LPVS/src/test/resources/convert1.txt)<br>[src/test/resources/osori_db_response_internal_no_traffic.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_no_traffic.json)<br>[src/test/resources/osori_db_response_internal_red.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_red.json)<br>[src/test/resources/osori_db_response_internal_yellow.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_yellow.json)<br>[src/test/resources/osori_db_response_internal.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal.json)<br>[src/test/resources/osori_db_response1.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response1.json)<br>[src/test/resources/osori_db_response2.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response2.json) |
| security | 3 | [spotbugs-security-include.xml](../../../../sources/Samsung__LPVS/spotbugs-security-include.xml)<br>[doc/docs/dev-guide/testing-policy.md](../../../../sources/Samsung__LPVS/doc/docs/dev-guide/testing-policy.md)<br>[.github/SECURITY.md](../../../../sources/Samsung__LPVS/.github/SECURITY.md) |
| ci | 10 | [.github/workflows/build.yml](../../../../sources/Samsung__LPVS/.github/workflows/build.yml)<br>[.github/workflows/cflite_batch.yml](../../../../sources/Samsung__LPVS/.github/workflows/cflite_batch.yml)<br>[.github/workflows/check-docker.yml](../../../../sources/Samsung__LPVS/.github/workflows/check-docker.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Samsung__LPVS/.github/workflows/codeql.yml)<br>[.github/workflows/findbugs.yml](../../../../sources/Samsung__LPVS/.github/workflows/findbugs.yml)<br>[.github/workflows/java-format-checker.yml](../../../../sources/Samsung__LPVS/.github/workflows/java-format-checker.yml)<br>[.github/workflows/publish-documentation.yml](../../../../sources/Samsung__LPVS/.github/workflows/publish-documentation.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/Samsung__LPVS/.github/workflows/publish-release.yml) |
| container | 4 | [docker-compose-quick.yml](../../../../sources/Samsung__LPVS/docker-compose-quick.yml)<br>[docker-compose.yml](../../../../sources/Samsung__LPVS/docker-compose.yml)<br>[Dockerfile](../../../../sources/Samsung__LPVS/Dockerfile)<br>[.clusterfuzzlite/Dockerfile](../../../../sources/Samsung__LPVS/.clusterfuzzlite/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 40 | [README.md](../../../../sources/Samsung__LPVS/README.md)<br>[doc/lpvs-api.yaml](../../../../sources/Samsung__LPVS/doc/lpvs-api.yaml)<br>[doc/mkdocs.yml](../../../../sources/Samsung__LPVS/doc/mkdocs.yml)<br>[doc/requirements-docs.txt](../../../../sources/Samsung__LPVS/doc/requirements-docs.txt)<br>[doc/docs/index.md](../../../../sources/Samsung__LPVS/doc/docs/index.md)<br>[doc/docs/quick-start-guide.md](../../../../sources/Samsung__LPVS/doc/docs/quick-start-guide.md)<br>[doc/docs/user-guide/performance.md](../../../../sources/Samsung__LPVS/doc/docs/user-guide/performance.md)<br>[doc/docs/user-guide/README.md](../../../../sources/Samsung__LPVS/doc/docs/user-guide/README.md) |
| config | 2 | [requirements.txt](../../../../sources/Samsung__LPVS/requirements.txt)<br>[doc/requirements-docs.txt](../../../../sources/Samsung__LPVS/doc/requirements-docs.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 41 | [src/test/resources/1-A_B.json](../../../../sources/Samsung__LPVS/src/test/resources/1-A_B.json)<br>[src/test/resources/convert1.txt](../../../../sources/Samsung__LPVS/src/test/resources/convert1.txt)<br>[src/test/resources/osori_db_response_internal_no_traffic.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_no_traffic.json)<br>[src/test/resources/osori_db_response_internal_red.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_red.json)<br>[src/test/resources/osori_db_response_internal_yellow.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_yellow.json)<br>[src/test/resources/osori_db_response_internal.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal.json) |
| CI workflows | 10 | [.github/workflows/build.yml](../../../../sources/Samsung__LPVS/.github/workflows/build.yml)<br>[.github/workflows/cflite_batch.yml](../../../../sources/Samsung__LPVS/.github/workflows/cflite_batch.yml)<br>[.github/workflows/check-docker.yml](../../../../sources/Samsung__LPVS/.github/workflows/check-docker.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Samsung__LPVS/.github/workflows/codeql.yml)<br>[.github/workflows/findbugs.yml](../../../../sources/Samsung__LPVS/.github/workflows/findbugs.yml)<br>[.github/workflows/java-format-checker.yml](../../../../sources/Samsung__LPVS/.github/workflows/java-format-checker.yml) |
| Containers / deploy | 4 | [docker-compose-quick.yml](../../../../sources/Samsung__LPVS/docker-compose-quick.yml)<br>[docker-compose.yml](../../../../sources/Samsung__LPVS/docker-compose.yml)<br>[Dockerfile](../../../../sources/Samsung__LPVS/Dockerfile)<br>[.clusterfuzzlite/Dockerfile](../../../../sources/Samsung__LPVS/.clusterfuzzlite/Dockerfile) |
| Security / policy | 3 | [spotbugs-security-include.xml](../../../../sources/Samsung__LPVS/spotbugs-security-include.xml)<br>[doc/docs/dev-guide/testing-policy.md](../../../../sources/Samsung__LPVS/doc/docs/dev-guide/testing-policy.md)<br>[.github/SECURITY.md](../../../../sources/Samsung__LPVS/.github/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `requirements.txt`, `doc/requirements-docs.txt`, `README.md`.
2. Inspect retrieval/memory/indexing through: `doc/docs/index.md`.
3. Verify behavior through test/eval files: `src/test/resources/1-A_B.json`, `src/test/resources/convert1.txt`, `src/test/resources/osori_db_response_internal_no_traffic.json`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 License Pre Validation Service analyzes which open source components and licenses are used in every patch. It returns th. 핵심 구조 신호는 Java, requirements.txt, pom.xml, Dockerfile, docker-compose.yml, README.md이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
