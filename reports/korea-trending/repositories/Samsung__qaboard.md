# Samsung/qaboard

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/qaboard |
| local path | sources/Samsung__qaboard |
| HEAD | 9485201 |
| stars/forks | 55 / 14 |
| language | JavaScript |
| license | Apache-2.0 |
| pushedAt | 2026-02-26T14:26:24Z |
| trendScore / priorityScore | 77 / 220 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 79 | backend/README.md, README.md, backend/Dockerfile |
| Frontend / developer experience | 54 | backend/README.md, webapp/README.md, docker-compose.yml |
| Spec / doc-driven workflow | 30 | qaboard/README.md, webapp/README.md, website/docs/ci-integration.md |
| LLM wiki / memory / graph | 20 | backend/README.md, website/docs/backend-admin/host-upgrades.md, website/docs/inputs.md |
| Infra / observability | 8 | backend/README.md, .github/workflows/ci.yaml, website/docs/alternatives-and-missing-features.md |
| Security / compliance | 6 | website/docs/start-server.md, website/docs/triggering-external-ci-tools.md, qaboard/sample_project/qaboard.yaml |
| Local LLM / on-device inference | 1 | website/docs/backend-admin/troubleshooting.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 331 |
| manifests | 18 |
| docs | 54 |
| tests | 6 |
| ci/ops | 9 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Features / Benefits / Getting Started / Feedback? Questions? Need Help? Found a bug? / Contributors / Credits |
| excerpt | <p align="center" <img src="https //user images.githubusercontent.com/2649055/86829138 bb6aef00 c09c 11ea 8b59 78b7fc44ebcf.png" alt="QA Board logo" width="260" <div align="center" Experiment tracking framework with advanced viewers.</div <div align="center" Helps algo/ml/perf engineers share results, collaborate, and build better products.</div </p <p align="center" <a href="https //spectrum.chat/qaboard" <img src="https //img.shields.io/badge/chat spectrum brightgreen" alt="qaboard chat"/ </a <a href="https //pypi.org/project/qaboard/" <img src="https //img.shields.io/pypi/v/qaboard" alt="PyPI"/ </a <a href="https //samsung.github.io/qaboard" <img src="https //img.shields.io/badge/docs mas |


## 주요 파일

### Manifests

- backend/README.md
- qaboard/README.md
- qaboard/sample_project/README.md
- README.md
- webapp/README.md
- website/README.md
- backend/backend/scripts/README.md
- services/cantaloupe/README.md
- backend/Dockerfile
- backend/pyproject.toml
- docker-compose.yml
- webapp/Dockerfile
- webapp/package.json
- webapp/tsconfig.json
- website/Dockerfile
- website/package.json
- services/cantaloupe/Dockerfile
- services/nginx/Dockerfile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| webapp | 107 |
| backend | 77 |
| website | 59 |
| qaboard | 38 |
| services | 25 |
| .github | 5 |
| tests | 5 |
| .dockerignore | 1 |
| .envrc | 1 |
| .gitignore | 1 |
| .gitlab-ci.yml | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| development.yml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 100 |
| .js | 97 |
| .md | 53 |
| [no-ext] | 31 |
| .css | 7 |
| .yml | 7 |
| .json | 6 |
| .conf | 5 |
| .yaml | 5 |
| .txt | 4 |
| .sh | 3 |
| .ini | 2 |
| .html | 1 |
| .in | 1 |
| .mako | 1 |
| .properties | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
