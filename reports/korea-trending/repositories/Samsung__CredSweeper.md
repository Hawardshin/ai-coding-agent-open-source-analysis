# Samsung/CredSweeper

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/CredSweeper |
| local path | sources/Samsung__CredSweeper |
| HEAD | 8a706aa |
| stars/forks | 204 / 49 |
| language | Python |
| license | MIT |
| pushedAt | 2026-06-17T12:40:55Z |
| trendScore / priorityScore | 104 / 257 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 172 | tests/README.md, experiment/README.md, README.md |
| Korean language / Korea domain | 46 | experiment/README.md, README.md, pyproject.toml |
| Spec / doc-driven workflow | 17 | experiment/README.md, fuzz/README.md, README.md |
| LLM wiki / memory / graph | 13 | fuzz/README.md, docs/source/guide.rst, docs/source/overall_architecture.rst |
| Frontend / developer experience | 1 | tests/test_git.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, localRuntime, sdk-api, security, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 399 |
| manifests | 11 |
| docs | 35 |
| tests | 163 |
| ci/ops | 0 |
| spec artifacts | 4 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | CredSweeper |
| headings | CredSweeper / Introduction / How To Use / Main Requirements / Installation / Run / JSON Output / Config / Develop / Tests |
| excerpt | CredSweeper ! GitHub release latestSemVer https //img.shields.io/github/v/release/Samsung/CredSweeper https //github.com/Samsung/CredSweeper/releases ! Documentation Status https //readthedocs.org/projects/credsweeper/badge/?version=latest https //credsweeper.readthedocs.io/en/latest/?badge=latest ! License https //img.shields.io/badge/licence MIT green.svg?style=flat LICENSE ! PyPI https //img.shields.io/pypi/v/credsweeper https //pypi.org/project/credsweeper/ ! Python https //img.shields.io/pypi/pyversions/credsweeper.svg https //badge.fury.io/py/credsweeper ! Test https //github.com/Samsung/CredSweeper/actions/workflows/test.yml/badge.svg https //github.com/Samsung/CredSweeper/actions/wor |


## 주요 파일

### Manifests

- docs/README.md
- tests/README.md
- experiment/README.md
- fuzz/README.md
- README.md
- docs/Makefile
- docs/requirements.txt
- experiment/requirements.txt
- fuzz/requirements.txt
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- experiment/requirements.txt
- fuzz/requirements.txt
- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| credsweeper | 174 |
| tests | 159 |
| docs | 30 |
| experiment | 20 |
| fuzz | 9 |
| action.yml | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| pytest.ini | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| SECURITY.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 338 |
| .rst | 24 |
| .json | 7 |
| .md | 7 |
| .sh | 7 |
| .txt | 6 |
| .yaml | 2 |
| [no-ext] | 2 |
| .bat | 1 |
| .ini | 1 |
| .onnx | 1 |
| .toml | 1 |
| .typed | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
