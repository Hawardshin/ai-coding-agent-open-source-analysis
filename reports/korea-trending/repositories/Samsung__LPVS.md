# Samsung/LPVS

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/LPVS |
| local path | sources/Samsung__LPVS |
| HEAD | 2ebf092 |
| stars/forks | 29 / 27 |
| language | Java |
| license | MIT |
| pushedAt | 2026-06-04T09:09:13Z |
| trendScore / priorityScore | 83 / 258 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 205 | README.md, .clusterfuzzlite/Dockerfile, docker-compose.yml |
| LLM wiki / memory / graph | 201 | doc/docs/dev-guide/testing-policy.md, .github/workflows/cflite_batch.yml, doc/docs/dev-guide/architecture.md |
| Security / compliance | 149 | doc/docs/dev-guide/README.md, README.md, docker-compose.yml |
| Spec / doc-driven workflow | 53 | doc/docs/dev-guide/README.md, Dockerfile, requirements.txt |
| Infra / observability | 27 | doc/docs/user-guide/README.md, doc/mkdocs.yml, doc/docs/index.md |
| RAG / retrieval | 11 | src/main/java/com/lpvs/entity/package-info.java, src/main/java/com/lpvs/entity/report/LPVSReportBuilder.java, src/main/java/com/lpvs/repository/LPVSDetectedLicenseRepository.java |
| AI agent / tool use | 2 | pom.xml, doc/docs/user-guide/service/webhook.md |
| Frontend / developer experience | 1 | src/main/java/com/lpvs/config/package-info.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Python, Java/Kotlin |
| capabilities | LLM/app framework, Graph/memory store, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 156 |
| manifests | 8 |
| docs | 37 |
| tests | 40 |
| ci/ops | 14 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | License Pre-Validation Service |
| headings | License Pre-Validation Service / ~~ Introduction ~~ / Features ✨ / Usage 🚀 / Documentation 📚 / License 📝 / Contributing 🤝 |
| excerpt | ! Logo for dark mode doc/docs/img/lpvs dark.png gh dark mode only ! Logo for light mode doc/docs/img/lpvs light.png gh light mode only License Pre Validation Service ! CodeQL Analysis https //github.com/Samsung/LPVS/workflows/CodeQL%20Analysis/badge.svg https //github.com/Samsung/LPVS/actions?query=workflow%3A%22CodeQL+Analysis%22 ! OpenSSF Best Practices https //www.bestpractices.dev/projects/6309/badge https //www.bestpractices.dev/projects/6309 ! OpenSSF Scorecard https //api.securityscorecards.dev/projects/github.com/Samsung/LPVS/badge https //api.securityscorecards.dev/projects/github.com/Samsung/LPVS ! Release https //img.shields.io/github/v/release/samsung/lpvs.svg https //github.com/ |


## 주요 파일

### Manifests

- doc/docs/dev-guide/README.md
- doc/docs/user-guide/README.md
- README.md
- .clusterfuzzlite/Dockerfile
- docker-compose.yml
- Dockerfile
- pom.xml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt
- doc/docs/dev-guide/architecture.md
- .github/ISSUE_TEMPLATE/task.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 96 |
| doc | 30 |
| .github | 18 |
| .clusterfuzzlite | 3 |
| .gitignore | 1 |
| docker-compose-quick.yml | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| pom.xml | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| spotbugs-security-include.xml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 84 |
| .md | 32 |
| .yml | 14 |
| .json | 7 |
| [no-ext] | 5 |
| .txt | 3 |
| .css | 2 |
| .properties | 2 |
| .xml | 2 |
| .yaml | 2 |
| .html | 1 |
| .sh | 1 |
| .sql | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
