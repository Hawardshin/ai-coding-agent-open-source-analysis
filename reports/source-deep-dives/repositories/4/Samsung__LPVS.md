# Samsung/LPVS 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

License Pre-Validation Service analyzes which open source components and licenses are used in every patch. It returns the list of restricted licenses and the possibility of license violation on the comment with the exact code location and the open source component information.

## 요약

- 조사 단위: `sources/Samsung__LPVS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 165 files, 50 directories, depth score 96, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt, doc/requirements-docs.txt이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/LPVS |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 29 |
| Forks | 27 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__LPVS](../../../../sources/Samsung__LPVS) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__LPVS.md](../../../korea-trending/repositories/Samsung__LPVS.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 165 / 50 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .clusterfuzzlite, .github, doc, src |
| 상위 확장자 | .java: 84, .md: 32, .yml: 14, .png: 9, .json: 7, (none): 5, .txt: 3, .css: 2, .properties: 2, .xml: 2, .yaml: 2, .html: 1 |
| 소스 패턴 | api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 41 |
| .github | ci surface | 1 |
| doc | documentation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [doc/docs/index.md](../../../../sources/Samsung__LPVS/doc/docs/index.md) |
| spec | 5 | [requirements.txt](../../../../sources/Samsung__LPVS/requirements.txt)<br>[doc/requirements-docs.txt](../../../../sources/Samsung__LPVS/doc/requirements-docs.txt)<br>[doc/docs/img/architecture.png](../../../../sources/Samsung__LPVS/doc/docs/img/architecture.png)<br>[doc/docs/dev-guide/architecture.md](../../../../sources/Samsung__LPVS/doc/docs/dev-guide/architecture.md)<br>[doc/docs/dev-guide/code-review-requirements.md](../../../../sources/Samsung__LPVS/doc/docs/dev-guide/code-review-requirements.md) |
| eval | 41 | [src/test/resources/1-A_B.json](../../../../sources/Samsung__LPVS/src/test/resources/1-A_B.json)<br>[src/test/resources/convert1.txt](../../../../sources/Samsung__LPVS/src/test/resources/convert1.txt)<br>[src/test/resources/osori_db_response_internal_no_traffic.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_no_traffic.json)<br>[src/test/resources/osori_db_response_internal_red.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_red.json)<br>[src/test/resources/osori_db_response_internal_yellow.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_yellow.json)<br>[src/test/resources/osori_db_response_internal.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal.json)<br>[src/test/resources/osori_db_response1.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response1.json)<br>[src/test/resources/osori_db_response2.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response2.json) |
| security | 3 | [spotbugs-security-include.xml](../../../../sources/Samsung__LPVS/spotbugs-security-include.xml)<br>[doc/docs/dev-guide/testing-policy.md](../../../../sources/Samsung__LPVS/doc/docs/dev-guide/testing-policy.md)<br>[.github/SECURITY.md](../../../../sources/Samsung__LPVS/.github/SECURITY.md) |
| ci | 10 | [.github/workflows/build.yml](../../../../sources/Samsung__LPVS/.github/workflows/build.yml)<br>[.github/workflows/cflite_batch.yml](../../../../sources/Samsung__LPVS/.github/workflows/cflite_batch.yml)<br>[.github/workflows/check-docker.yml](../../../../sources/Samsung__LPVS/.github/workflows/check-docker.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Samsung__LPVS/.github/workflows/codeql.yml)<br>[.github/workflows/findbugs.yml](../../../../sources/Samsung__LPVS/.github/workflows/findbugs.yml)<br>[.github/workflows/java-format-checker.yml](../../../../sources/Samsung__LPVS/.github/workflows/java-format-checker.yml)<br>[.github/workflows/publish-documentation.yml](../../../../sources/Samsung__LPVS/.github/workflows/publish-documentation.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/Samsung__LPVS/.github/workflows/publish-release.yml) |
| container | 4 | [docker-compose-quick.yml](../../../../sources/Samsung__LPVS/docker-compose-quick.yml)<br>[docker-compose.yml](../../../../sources/Samsung__LPVS/docker-compose.yml)<br>[Dockerfile](../../../../sources/Samsung__LPVS/Dockerfile)<br>[.clusterfuzzlite/Dockerfile](../../../../sources/Samsung__LPVS/.clusterfuzzlite/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 40 | [README.md](../../../../sources/Samsung__LPVS/README.md)<br>[doc/lpvs-api.yaml](../../../../sources/Samsung__LPVS/doc/lpvs-api.yaml)<br>[doc/mkdocs.yml](../../../../sources/Samsung__LPVS/doc/mkdocs.yml)<br>[doc/requirements-docs.txt](../../../../sources/Samsung__LPVS/doc/requirements-docs.txt)<br>[doc/docs/index.md](../../../../sources/Samsung__LPVS/doc/docs/index.md)<br>[doc/docs/quick-start-guide.md](../../../../sources/Samsung__LPVS/doc/docs/quick-start-guide.md)<br>[doc/docs/user-guide/performance.md](../../../../sources/Samsung__LPVS/doc/docs/user-guide/performance.md)<br>[doc/docs/user-guide/README.md](../../../../sources/Samsung__LPVS/doc/docs/user-guide/README.md) |
| config | 2 | [requirements.txt](../../../../sources/Samsung__LPVS/requirements.txt)<br>[doc/requirements-docs.txt](../../../../sources/Samsung__LPVS/doc/requirements-docs.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 41 | [src/test/resources/1-A_B.json](../../../../sources/Samsung__LPVS/src/test/resources/1-A_B.json)<br>[src/test/resources/convert1.txt](../../../../sources/Samsung__LPVS/src/test/resources/convert1.txt)<br>[src/test/resources/osori_db_response_internal_no_traffic.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_no_traffic.json)<br>[src/test/resources/osori_db_response_internal_red.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_red.json)<br>[src/test/resources/osori_db_response_internal_yellow.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal_yellow.json)<br>[src/test/resources/osori_db_response_internal.json](../../../../sources/Samsung__LPVS/src/test/resources/osori_db_response_internal.json) |
| CI workflow | 10 | [.github/workflows/build.yml](../../../../sources/Samsung__LPVS/.github/workflows/build.yml)<br>[.github/workflows/cflite_batch.yml](../../../../sources/Samsung__LPVS/.github/workflows/cflite_batch.yml)<br>[.github/workflows/check-docker.yml](../../../../sources/Samsung__LPVS/.github/workflows/check-docker.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Samsung__LPVS/.github/workflows/codeql.yml)<br>[.github/workflows/findbugs.yml](../../../../sources/Samsung__LPVS/.github/workflows/findbugs.yml)<br>[.github/workflows/java-format-checker.yml](../../../../sources/Samsung__LPVS/.github/workflows/java-format-checker.yml) |
| 컨테이너/배포 | 4 | [docker-compose-quick.yml](../../../../sources/Samsung__LPVS/docker-compose-quick.yml)<br>[docker-compose.yml](../../../../sources/Samsung__LPVS/docker-compose.yml)<br>[Dockerfile](../../../../sources/Samsung__LPVS/Dockerfile)<br>[.clusterfuzzlite/Dockerfile](../../../../sources/Samsung__LPVS/.clusterfuzzlite/Dockerfile) |
| 보안/정책 | 3 | [spotbugs-security-include.xml](../../../../sources/Samsung__LPVS/spotbugs-security-include.xml)<br>[doc/docs/dev-guide/testing-policy.md](../../../../sources/Samsung__LPVS/doc/docs/dev-guide/testing-policy.md)<br>[.github/SECURITY.md](../../../../sources/Samsung__LPVS/.github/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `requirements.txt`, `doc/requirements-docs.txt`, `README.md`.
2. retrieval/memory/indexing 확인: `doc/docs/index.md`.
3. test/eval 파일로 동작 검증: `src/test/resources/1-A_B.json`, `src/test/resources/convert1.txt`, `src/test/resources/osori_db_response_internal_no_traffic.json`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 License Pre Validation Service analyzes which open source components and licenses are used in every patch. It returns th. 핵심 구조 신호는 Java, requirements.txt, pom.xml, Dockerfile, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
