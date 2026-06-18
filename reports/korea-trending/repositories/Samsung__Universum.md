# Samsung/Universum

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/Universum |
| local path | sources/Samsung__Universum |
| HEAD | 49a16a5 |
| stars/forks | 20 / 16 |
| language | Python |
| license | BSD-2-Clause |
| pushedAt | 2026-06-16T10:10:39Z |
| trendScore / priorityScore | 83 / 207 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 18 | README.md, doc/conf.py, doc/github_handler.rst |
| AI agent / tool use | 11 | doc/github_handler.rst, doc/teamcity.rst, universum/lib/utils.py |
| Security / compliance | 9 | README.md, doc/jenkins.rst, CHANGELOG.rst |
| Spec / doc-driven workflow | 9 | doc/jenkins.rst, doc/teamcity.rst, tests/perforce_utils.py |
| LLM wiki / memory / graph | 3 | doc/additional_commands.rst, doc/configuring.rst, CODE_OF_CONDUCT.md |
| RAG / retrieval | 2 | doc/github_actions.rst, doc/github_handler.rst |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, example-rich, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 156 |
| manifests | 6 |
| docs | 35 |
| tests | 40 |
| ci/ops | 6 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Project 'Universum' |
| headings | Project 'Universum' / Installation / Development / Project contents / Quick architecture overview / Project review slides / Contributing |
| excerpt | Project 'Universum' ! Documentation Status https //readthedocs.org/projects/universum/badge/?version=latest https //universum.readthedocs.io/en/latest/?badge=latest Universum integrates various CI systems and provides additional features, such as customized downloading sources from VCS, running tests described in configuration file and reporting the results to code review systems. Full documentation can be found here https //universum.readthedocs.io/ Please check out our code of conduct CODE OF CONDUCT.md and contribution policy .github/CONTRIBUTING.md Project is executed with python3 m universum command. Independent analyzers are executed with their module name, e.g. python3 m universum.ana |


## 주요 파일

### Manifests

- README.md
- doc/Makefile
- Makefile
- tests/docker/Makefile
- tests/docker/perforce/Dockerfile
- tests/docker/universum_test_env/Dockerfile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| universum | 57 |
| tests | 40 |
| doc | 28 |
| examples | 10 |
| .github | 8 |
| .gitignore | 1 |
| .mypy.ini | 1 |
| .readthedocs.yml | 1 |
| .universum.py | 1 |
| CHANGELOG.rst | 1 |
| CODE_OF_CONDUCT.md | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| pylintrc | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 104 |
| .rst | 18 |
| [no-ext] | 8 |
| .md | 6 |
| .yml | 5 |
| .sh | 4 |
| .css | 3 |
| .svg | 3 |
| .ini | 2 |
| .conf | 1 |
| .js | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
