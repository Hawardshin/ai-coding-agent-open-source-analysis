# OldTemple91/korea-filings-api 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

AI-ready English summaries of Korean DART (전자공시) filings, paid per call in USDC via x402. Python SDK + MCP server included.

## 요약

- 조사 단위: `sources/OldTemple91__korea-filings-api` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 203 files, 58 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/.gitignore, mcp/Dockerfile, mcp/pyproject.toml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | OldTemple91/korea-filings-api |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/OldTemple91__korea-filings-api](../../../../sources/OldTemple91__korea-filings-api) |
| 기존 보고서 | [reports/korea-trending/repositories/OldTemple91__korea-filings-api.md](../../../korea-trending/repositories/OldTemple91__korea-filings-api.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 203 / 58 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docs, gradle, landing, mcp, scripts, sdk, src, testclient |
| 상위 확장자 | .java: 107, .md: 14, .sql: 14, .svg: 12, (none): 12, .py: 10, .ts: 9, .json: 4, .txt: 3, .yml: 3, .example: 2, .kts: 2 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 35 |
| docs | documentation surface | 12 |
| .github | ci surface | 1 |
| gradle | top-level component | 1 |
| landing | top-level component | 1 |
| mcp | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| testclient | validation surface | 1 |


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
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp/.gitignore](../../../../sources/OldTemple91__korea-filings-api/mcp/.gitignore) | mcp signal |
| mcp | [mcp/Dockerfile](../../../../sources/OldTemple91__korea-filings-api/mcp/Dockerfile) | mcp signal |
| mcp | [mcp/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/mcp/pyproject.toml) | mcp signal |
| mcp | [mcp/README.md](../../../../sources/OldTemple91__korea-filings-api/mcp/README.md) | mcp signal |
| entrypoints | [sdk/typescript/src/index.ts](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [mcp/src/koreafilings_mcp/server.py](../../../../sources/OldTemple91__korea-filings-api/mcp/src/koreafilings_mcp/server.py) | entrypoints signal |
| config | [testclient/requirements.txt](../../../../sources/OldTemple91__korea-filings-api/testclient/requirements.txt) | config signal |
| config | [sdk/typescript/package.json](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/package.json) | config signal |
| config | [sdk/typescript/tsconfig.json](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/tsconfig.json) | config signal |
| config | [sdk/python/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/sdk/python/pyproject.toml) | config signal |
| ci | [.github/workflows/test.yml](../../../../sources/OldTemple91__korea-filings-api/.github/workflows/test.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/OldTemple91__korea-filings-api/docker-compose.yml) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [sdk/typescript/src/index.ts](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/src/index.ts)<br>[mcp/src/koreafilings_mcp/server.py](../../../../sources/OldTemple91__korea-filings-api/mcp/src/koreafilings_mcp/server.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 6 | [mcp/.gitignore](../../../../sources/OldTemple91__korea-filings-api/mcp/.gitignore)<br>[mcp/Dockerfile](../../../../sources/OldTemple91__korea-filings-api/mcp/Dockerfile)<br>[mcp/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/mcp/pyproject.toml)<br>[mcp/README.md](../../../../sources/OldTemple91__korea-filings-api/mcp/README.md)<br>[mcp/src/koreafilings_mcp/__init__.py](../../../../sources/OldTemple91__korea-filings-api/mcp/src/koreafilings_mcp/__init__.py)<br>[mcp/src/koreafilings_mcp/server.py](../../../../sources/OldTemple91__korea-filings-api/mcp/src/koreafilings_mcp/server.py) |
| retrieval | 2 | [sdk/typescript/src/index.ts](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/src/index.ts)<br>[landing/index.html](../../../../sources/OldTemple91__korea-filings-api/landing/index.html) |
| spec | 4 | [testclient/requirements.txt](../../../../sources/OldTemple91__korea-filings-api/testclient/requirements.txt)<br>[docs/ARCHITECTURE.md](../../../../sources/OldTemple91__korea-filings-api/docs/ARCHITECTURE.md)<br>[docs/PRD.md](../../../../sources/OldTemple91__korea-filings-api/docs/PRD.md)<br>[docs/ROADMAP.md](../../../../sources/OldTemple91__korea-filings-api/docs/ROADMAP.md) |
| eval | 36 | [src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java)<br>[src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java)<br>[src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java)<br>[src/test/java/com/dartintel/api/summarization/SummaryServiceTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/SummaryServiceTest.java)<br>[src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientLiveIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientLiveIT.java)<br>[src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientTest.java)<br>[src/test/java/com/dartintel/api/summarization/job/BackfillRunnerTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/job/BackfillRunnerTest.java)<br>[src/test/java/com/dartintel/api/summarization/job/SummaryJobConsumerTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/job/SummaryJobConsumerTest.java) |
| security | 2 | [src/main/resources/db/migration/V10__request_audit_table.sql](../../../../sources/OldTemple91__korea-filings-api/src/main/resources/db/migration/V10__request_audit_table.sql)<br>[src/main/resources/db/migration/V3__create_llm_audit.sql](../../../../sources/OldTemple91__korea-filings-api/src/main/resources/db/migration/V3__create_llm_audit.sql) |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/OldTemple91__korea-filings-api/.github/workflows/test.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/OldTemple91__korea-filings-api/docker-compose.yml)<br>[Dockerfile](../../../../sources/OldTemple91__korea-filings-api/Dockerfile)<br>[mcp/Dockerfile](../../../../sources/OldTemple91__korea-filings-api/mcp/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/OldTemple91__korea-filings-api/README.md)<br>[testclient/README.md](../../../../sources/OldTemple91__korea-filings-api/testclient/README.md)<br>[sdk/typescript/README.md](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/README.md)<br>[sdk/python/README.md](../../../../sources/OldTemple91__korea-filings-api/sdk/python/README.md)<br>[mcp/README.md](../../../../sources/OldTemple91__korea-filings-api/mcp/README.md)<br>[docs/ANALYTICS.md](../../../../sources/OldTemple91__korea-filings-api/docs/ANALYTICS.md)<br>[docs/ARCHITECTURE.md](../../../../sources/OldTemple91__korea-filings-api/docs/ARCHITECTURE.md)<br>[docs/PRD.md](../../../../sources/OldTemple91__korea-filings-api/docs/PRD.md) |
| config | 6 | [testclient/requirements.txt](../../../../sources/OldTemple91__korea-filings-api/testclient/requirements.txt)<br>[sdk/typescript/package.json](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/package.json)<br>[sdk/typescript/tsconfig.json](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/tsconfig.json)<br>[sdk/python/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/sdk/python/pyproject.toml)<br>[sdk/python/uv.lock](../../../../sources/OldTemple91__korea-filings-api/sdk/python/uv.lock)<br>[mcp/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/mcp/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 36 | [src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java)<br>[src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java)<br>[src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java)<br>[src/test/java/com/dartintel/api/summarization/SummaryServiceTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/SummaryServiceTest.java)<br>[src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientLiveIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientLiveIT.java)<br>[src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientTest.java) |
| CI workflow | 1 | [.github/workflows/test.yml](../../../../sources/OldTemple91__korea-filings-api/.github/workflows/test.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/OldTemple91__korea-filings-api/docker-compose.yml)<br>[Dockerfile](../../../../sources/OldTemple91__korea-filings-api/Dockerfile)<br>[mcp/Dockerfile](../../../../sources/OldTemple91__korea-filings-api/mcp/Dockerfile) |
| 보안/정책 | 2 | [src/main/resources/db/migration/V10__request_audit_table.sql](../../../../sources/OldTemple91__korea-filings-api/src/main/resources/db/migration/V10__request_audit_table.sql)<br>[src/main/resources/db/migration/V3__create_llm_audit.sql](../../../../sources/OldTemple91__korea-filings-api/src/main/resources/db/migration/V3__create_llm_audit.sql) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp/.gitignore`, `mcp/Dockerfile`, `mcp/pyproject.toml`.
2. entrypoint를 따라 실행 흐름 확인: `sdk/typescript/src/index.ts`, `mcp/src/koreafilings_mcp/server.py`.
3. retrieval/memory/indexing 확인: `sdk/typescript/src/index.ts`, `landing/index.html`.
4. test/eval 파일로 동작 검증: `src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java`, `src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java`, `src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI ready English summaries of Korean DART 전자공시 filings, paid per call in USDC via x402. Python SDK + MCP server included. 핵심 구조 신호는 Java, Dockerfile, docker-compose.yml, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
