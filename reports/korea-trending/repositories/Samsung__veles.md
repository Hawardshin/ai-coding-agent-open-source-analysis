# Samsung/veles

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/veles |
| local path | sources/Samsung__veles |
| HEAD | 96218b8 |
| stars/forks | 917 / 180 |
| language | C++ |
| license | NOASSERTION |
| pushedAt | 2023-11-21T09:22:06Z |
| trendScore / priorityScore | 95 / 272 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 93 | veles/memory.py, veles/tests/test_benchmark.py, LICENSE.md |
| Korean language / Korea domain | 33 | README.md, deploy/docker/Dockerfile, web/projects/bboxer/package.json |
| LLM wiki / memory / graph | 28 | README.md, docs/source/_static/sidebar.js, docs/source/conf.py |
| AI agent / tool use | 21 | deploy/deploy.sh, libVeles/autogen.sh, veles/launcher.py |
| Frontend / developer experience | 15 | veles/__main__.py, veles/cmdline.py |
| Spec / doc-driven workflow | 11 | DEPENDENCIES.md, deploy/deploy.sh, veles/__main__.py |
| RAG / retrieval | 7 | veles/tests/test_random.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 578 |
| manifests | 7 |
| docs | 24 |
| tests | 145 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings |  |
| excerpt | Veles ===== Distributed platform for rapid Deep learning application development Consists of Platform https //github.com/Samsung/veles Znicz Plugin Neural Network engine https //github.com/Samsung/veles.znicz Mastodon Veles < Java bridge for Hadoop etc. https //github.com/Samsung/veles.mastodon SoundFeatureExtraction audio feature extraction library https //github.com/Samsung/veles.sound feature extraction Home page https //velesnet.ml Named after https //en.wikipedia.org/wiki/Veles god Released under Apache 2.0 license. Copyright © Samsung Electronics Co., Ltd., 2013 2015. |


## 주요 파일

### Manifests

- README.md
- docs/Makefile
- requirements.txt
- deploy/docker/Dockerfile
- web/projects/bboxer/package.json
- web/projects/core/package.json
- web/projects/forge/package.json


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| veles | 238 |
| libVeles | 166 |
| web | 83 |
| docs | 18 |
| ocl | 16 |
| deploy | 12 |
| .idea | 8 |
| cuda | 7 |
| gource | 6 |
| debian | 5 |
| .coveragerc | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 214 |
| .h | 57 |
| [no-ext] | 36 |
| .svn-base | 34 |
| .xml | 33 |
| .cc | 30 |
| .js | 18 |
| .html | 16 |
| .cl | 15 |
| .json | 15 |
| .sh | 13 |
| .am | 7 |
| .cu | 6 |
| .scss | 6 |
| .txt | 6 |
| .css | 5 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
