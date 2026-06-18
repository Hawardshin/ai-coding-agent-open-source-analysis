# line/line-fido2-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

FIDO2(WebAuthn) server officially certified by FIDO Alliance and Relying Party examples.

## 요약

- 조사 단위: `sources/line__line-fido2-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 218 files, 177 directories, depth score 79, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 retrieval/vector path, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 security=rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java, rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java, rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplication.java이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-fido2-server |
| Topic | Security, Governance, and Safety / 보안/거버넌스/안전 |
| Region | korea |
| Language | Java |
| Stars | 580 |
| Forks | 109 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-fido2-server](../../../../sources/line__line-fido2-server) |
| Existing report | [reports/korea-trending/repositories/line__line-fido2-server.md](../../../korea-trending/repositories/line__line-fido2-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 218 / 177 |
| Max observed depth | 13 |
| Top directories | .github, common, fido2-core, fido2-demo, gradle, images, rpserver |
| Top extensions | .java: 159, .json: 14, (none): 9, .kts: 7, .yml: 7, .md: 4, .snippet: 3, .adoc: 2, .sh: 2, .bat: 1, .css: 1, .factories: 1 |
| Source patterns | retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| common | top-level component | 1 |
| fido2-core | top-level component | 1 |
| fido2-demo | top-level component | 1 |
| gradle | top-level component | 1 |
| images | top-level component | 1 |
| rpserver | source boundary | 1 |


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
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| security | [rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java) | security signal |
| security | [rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java) | security signal |
| security | [rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplication.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplication.java) | security signal |
| security | [rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterAuthServerPublicKeyCredential.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterAuthServerPublicKeyCredential.java) | security signal |
| ci | [.github/workflows/codeql-analysis.yml](../../../../sources/line__line-fido2-server/.github/workflows/codeql-analysis.yml) | ci signal |
| container | [docker-compose.yml](../../../../sources/line__line-fido2-server/docker-compose.yml) | container support |
| container | [rpserver/Dockerfile](../../../../sources/line__line-fido2-server/rpserver/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 3 | [rpserver/src/main/resources/templates/index.html](../../../../sources/line__line-fido2-server/rpserver/src/main/resources/templates/index.html)<br>[rpserver/src/main/resources/static/js/index.js](../../../../sources/line__line-fido2-server/rpserver/src/main/resources/static/js/index.js)<br>[rpserver/src/main/resources/static/css/index.css](../../../../sources/line__line-fido2-server/rpserver/src/main/resources/static/css/index.css) |
| spec | 0 | not obvious |
| eval | 24 | [rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java)<br>[rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java)<br>[fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-fields.snippet](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-fields.snippet)<br>[fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-parameters.snippet](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-parameters.snippet)<br>[fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/response-fields.snippet](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/response-fields.snippet)<br>[fido2-demo/demo/src/test/resources/json/reg/reg-challenge-req.json](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/json/reg/reg-challenge-req.json)<br>[fido2-demo/demo/src/test/resources/json/reg/reg-challenge-res.json](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/json/reg/reg-challenge-res.json)<br>[fido2-demo/demo/src/test/resources/json/reg/reg-response-req.json](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/json/reg/reg-response-req.json) |
| security | 165 | [rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java)<br>[rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplication.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplication.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterAuthServerPublicKeyCredential.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterAuthServerPublicKeyCredential.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterRegServerPublicKeyCredential.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterRegServerPublicKeyCredential.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/Status.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/Status.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/controller/AdapterController.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/controller/AdapterController.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/controller/CredentialController.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/controller/CredentialController.java) |
| ci | 1 | [.github/workflows/codeql-analysis.yml](../../../../sources/line__line-fido2-server/.github/workflows/codeql-analysis.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/line__line-fido2-server/docker-compose.yml)<br>[rpserver/Dockerfile](../../../../sources/line__line-fido2-server/rpserver/Dockerfile)<br>[fido2-demo/demo/Dockerfile](../../../../sources/line__line-fido2-server/fido2-demo/demo/Dockerfile)<br>[fido2-core/Dockerfile](../../../../sources/line__line-fido2-server/fido2-core/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/line__line-fido2-server/README.md)<br>[fido2-demo/demo/src/docs/asciidoc/api-guide.adoc](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/docs/asciidoc/api-guide.adoc)<br>[fido2-core/src/docs/asciidoc/api-guide.adoc](../../../../sources/line__line-fido2-server/fido2-core/src/docs/asciidoc/api-guide.adoc) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 24 | [rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java)<br>[rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java)<br>[fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-fields.snippet](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-fields.snippet)<br>[fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-parameters.snippet](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-parameters.snippet)<br>[fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/response-fields.snippet](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/response-fields.snippet)<br>[fido2-demo/demo/src/test/resources/json/reg/reg-challenge-req.json](../../../../sources/line__line-fido2-server/fido2-demo/demo/src/test/resources/json/reg/reg-challenge-req.json) |
| CI workflows | 1 | [.github/workflows/codeql-analysis.yml](../../../../sources/line__line-fido2-server/.github/workflows/codeql-analysis.yml) |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/line__line-fido2-server/docker-compose.yml)<br>[rpserver/Dockerfile](../../../../sources/line__line-fido2-server/rpserver/Dockerfile)<br>[fido2-demo/demo/Dockerfile](../../../../sources/line__line-fido2-server/fido2-demo/demo/Dockerfile)<br>[fido2-core/Dockerfile](../../../../sources/line__line-fido2-server/fido2-core/Dockerfile) |
| Security / policy | 165 | [rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java)<br>[rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java](../../../../sources/line__line-fido2-server/rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplication.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplication.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterAuthServerPublicKeyCredential.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterAuthServerPublicKeyCredential.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterRegServerPublicKeyCredential.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/AdapterRegServerPublicKeyCredential.java)<br>[rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/Status.java](../../../../sources/line__line-fido2-server/rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/model/Status.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java`, `rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java`, `rpserver/src/main/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplication.java`.
2. Inspect retrieval/memory/indexing through: `rpserver/src/main/resources/templates/index.html`, `rpserver/src/main/resources/static/js/index.js`, `rpserver/src/main/resources/static/css/index.css`.
3. Verify behavior through test/eval files: `rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/RpserverApplicationTests.java`, `rpserver/src/test/java/com/linecorp/line/auth/fido/fido2/rpserver/advice/RestExceptionHandlerTest.java`, `fido2-demo/demo/src/test/resources/org/springframework/restdocs/templates/request-fields.snippet`.

## Existing Repository Insight

보안/거버넌스/안전 관점에서 FIDO2 WebAuthn server officially certified by FIDO Alliance and Relying Party examples.. 핵심 구조 신호는 Java, docker-compose.yml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
