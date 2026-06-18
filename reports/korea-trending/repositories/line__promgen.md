# line/promgen

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/promgen |
| local path | sources/line__promgen |
| HEAD | 1d5b85a |
| stars/forks | 1124 / 153 |
| language | JavaScript |
| license | MIT |
| pushedAt | 2026-06-17T08:46:33Z |
| trendScore / priorityScore | 120 / 308 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Infra / observability | 243 | README.md, docker-compose.yml, docker/requirements.txt |
| Spec / doc-driven workflow | 25 | README.md, docs/requirements.txt, docker/requirements.txt |
| RAG / retrieval | 18 | docs/plugin/notification.rst, CHANGELOG.md, promgen/middleware.py |
| Security / compliance | 15 | README.md, docs/conf/django.rst, docs/conf/notification.rst |
| Frontend / developer experience | 14 | docker/requirements.txt, CHANGELOG.md, promgen/prometheus.py |
| Korean language / Korea domain | 6 | README.md, Dockerfile, pyproject.toml |
| LLM wiki / memory / graph | 2 | CODE_OF_CONDUCT.md, CONTRIBUTING.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 347 |
| manifests | 9 |
| docs | 35 |
| tests | 61 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | What is Promgen? |
| headings | What is Promgen? / Promgen screenshots / Contributing / 1. Initialize Promgen / Create promgen setting directory. / Initialize required settings with Docker container / This will prompt you for connection settings for your database and Redis broker / using the standard DSN syntax. / Database example: mysql://username:password@hostname/databasename / Broker example: redis://localhost:6379/0 |
| excerpt | What is Promgen? Promgen is a configuration file generator for Prometheus https //prometheus.io . Promgen is a web application written with Django https //docs.djangoproject.com/en/1.10/ and can help you do the following jobs. Create and manage Prometheus configuration files Configure alert rules and notification options See the Promgen introduction slides https //www.slideshare.net/tokuhirom/promgen prometheus managemnet tool simpleclientjava hacks prometheus casual for the original history of Promgen. See https //line.github.io/promgen/ for additional documentation. Promgen screenshots ! screenshot docs/images/screenshot.png Contributing Below are the steps to get started with Promgen. Ple |


## 주요 파일

### Manifests

- README.md
- docs/Makefile
- docs/requirements.txt
- docker-compose.yml
- docker/requirements.txt
- Dockerfile
- Makefile
- pyproject.toml
- docker/requirements.in


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- docker/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| promgen | 284 |
| docs | 30 |
| licenses | 7 |
| .github | 5 |
| docker | 5 |
| .dockerignore | 1 |
| .git-blame-ignore-revs | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| codecov.yml | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 131 |
| .html | 99 |
| .rst | 26 |
| .json | 22 |
| .txt | 21 |
| .yml | 11 |
| [no-ext] | 9 |
| .js | 5 |
| .md | 5 |
| .csv | 4 |
| .yaml | 3 |
| .in | 2 |
| .css | 1 |
| .eot | 1 |
| .po | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
