# line/line-bot-sdk-python

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-bot-sdk-python |
| local path | sources/line__line-bot-sdk-python |
| HEAD | 854c356 |
| stars/forks | 2117 / 1042 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-06-16T02:01:55Z |
| trendScore / priorityScore | 123 / 326 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | docs/Makefile, README.rst, examples/aiohttp-echo/requirements.txt |
| Security / compliance | 235 | README.rst, linebot/v3/audience/docs/ManageAudience.md, linebot/v3/audience/docs/ManageAudienceBlob.md |
| Frontend / developer experience | 58 | docs/Makefile, README.rst, examples/aiohttp-echo/requirements.txt |
| Spec / doc-driven workflow | 26 | examples/aiohttp-echo/README.md, examples/fastapi-echo/README.md, examples/flask-echo/README.md |
| RAG / retrieval | 8 | .github/workflows/publish-to-pypi.yml, linebot/v3/insight/docs/Insight.md, tests/api/test_get_content.py |
| LLM wiki / memory / graph | 2 | docs/source/conf.py, CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store |


## 구조 요약

| key | value |
| --- | --- |
| files | 653 |
| manifests | 17 |
| docs | 28 |
| tests | 65 |
| ci/ops | 7 |
| spec artifacts | 7 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.rst |
| title |  |
| headings |  |
| excerpt | LINE Messaging API SDK for Python ================================= PyPI version SDK of the LINE Messaging API for Python. Introduction The LINE Messaging API SDK for Python makes it easy to develop bots using LINE Messaging API, and you can create a sample bot within minutes. Documentation See the official API documentation for more information English https //developers.line.biz/en/docs/messaging api/overview/ Japanese https //developers.line.biz/ja/docs/messaging api/overview/ Requirements Python = 3.10 Installation $ pip install line bot sdk Synopsis Usage .. code python from flask import Flask, request, abort from linebot.v3 import WebhookHandler from linebot.v3.exceptions import Invali |


## 주요 파일

### Manifests

- examples/aiohttp-echo/README.md
- examples/fastapi-echo/README.md
- examples/flask-echo/README.md
- examples/flask-kitchensink/README.md
- examples/rich-menu/README.md
- examples/simple-server-echo/README.md
- docs/Makefile
- examples/aiohttp-echo/requirements.txt
- examples/fastapi-echo/requirements.txt
- examples/flask-echo/requirements.txt
- examples/flask-kitchensink/requirements.txt
- examples/rich-menu/requirements.txt
- examples/simple-server-echo/requirements.txt
- generator/pom.xml
- requirements.txt
- generator/src/main/resources/python-nextgen-custom-client/pyproject.mustache
- generator/src/main/resources/python-nextgen-custom-client/requirements.mustache


### Spec / Docs / Prompt Artifacts

- examples/aiohttp-echo/requirements.txt
- examples/fastapi-echo/requirements.txt
- examples/flask-echo/requirements.txt
- examples/flask-kitchensink/requirements.txt
- examples/rich-menu/requirements.txt
- examples/simple-server-echo/requirements.txt
- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| linebot | 492 |
| tests | 64 |
| generator | 40 |
| examples | 19 |
| .github | 14 |
| docs | 5 |
| tools | 2 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .openapi-generator-ignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| generate-code.py | 1 |
| import_check.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 556 |
| .mustache | 36 |
| .md | 22 |
| .txt | 9 |
| .yml | 9 |
| [no-ext] | 5 |
| .rst | 4 |
| .java | 2 |
| .json | 2 |
| .cfg | 1 |
| .cjs | 1 |
| .codegenconfig | 1 |
| .in | 1 |
| .ini | 1 |
| .jar | 1 |
| .json5 | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
