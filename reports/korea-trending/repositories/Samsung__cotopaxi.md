# Samsung/cotopaxi

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/cotopaxi |
| local path | sources/Samsung__cotopaxi |
| HEAD | d19178b |
| stars/forks | 362 / 79 |
| language | Python |
| license | GPL-2.0 |
| pushedAt | 2024-05-31T16:31:01Z |
| trendScore / priorityScore | 85 / 235 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 124 | docs/installation.md, cotopaxi/device_identification.py, cotopaxi/traffic_analyzer.py |
| Security / compliance | 100 | README.md, docs/tools.md, cotopaxi/client_vuln_tester.py |
| Korean language / Korea domain | 93 | README.md, docs/installation.md, docs/tools.md |
| LLM wiki / memory / graph | 19 | README.md, cotopaxi/cotopaxi_tester.py, cotopaxi/vulnerability_tester.py |
| RAG / retrieval | 3 | cotopaxi/dtls_utils.py, generate_payload.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, rag, security, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 3629 |
| manifests | 2 |
| docs | 5 |
| tests | 40 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | License: / Disclaimer / Installation / Integration with Metasploit / Acknowlegments / Tools in this package: / Supported vulnerabilites / Known issues / limitations / Development |
| excerpt | ! License GPL v2 https //img.shields.io/badge/License GPL%20v2 blue.svg?style=plastic LICENSE ! GitHub top language https //img.shields.io/github/languages/top/Samsung/cotopaxi?style=plastic ! PyPI Python Version https //img.shields.io/pypi/pyversions/cotopaxi?style=plastic ! LGTM Grade https //img.shields.io/lgtm/grade/python/github/Samsung/cotopaxi?style=plastic ! Lines of code https //img.shields.io/tokei/lines/github/samsung/cotopaxi?style=plastic ! Code style black https //img.shields.io/badge/code%20style black 000000.svg?style=plastic https //github.com/psf/black ! GitHub search hit counter https //img.shields.io/github/search/Samsung/cotopaxi/ ?style=plastic ! GitHub release latest b |


## 주요 파일

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| cotopaxi | 3490 |
| integrations | 84 |
| tests | 40 |
| docs | 4 |
| .pre-commit-config.yaml | 1 |
| .pylintrc | 1 |
| generate_payload.py | 1 |
| LICENSE | 1 |
| README.md | 1 |
| requirements_devel.txt | 1 |
| requirements_minimal.txt | 1 |
| requirements_python2.txt | 1 |
| requirements.txt | 1 |
| setup.cfg | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| [no-ext] | 3316 |
| .py | 152 |
| .raw | 122 |
| .txt | 23 |
| .md | 5 |
| .pcapng | 3 |
| .yaml | 3 |
| .cfg | 1 |
| .hdf5 | 1 |
| .ini | 1 |
| .model | 1 |
| .pcap | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
