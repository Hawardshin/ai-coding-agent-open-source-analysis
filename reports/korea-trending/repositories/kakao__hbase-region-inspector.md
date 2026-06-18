# kakao/hbase-region-inspector

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/hbase-region-inspector |
| local path | sources/kakao__hbase-region-inspector |
| HEAD | 9c7d789 |
| stars/forks | 107 / 29 |
| language | Clojure |
| license | Apache-2.0 |
| pushedAt | 2023-06-27T08:09:29Z |
| trendScore / priorityScore | 73 / 179 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 49 | package.json, bower.json, gulpfile.js |
| LLM wiki / memory / graph | 27 | LICENSE.txt, NOTICE.md |
| Security / compliance | 11 | README.md, conf-examples/secure-keytab-jaas.conf, conf-examples/secure-ticket-cache-jaas.conf |
| Korean language / Korea domain | 4 | README.md, CONTRIBUTING.md, NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 40 |
| manifests | 4 |
| docs | 4 |
| tests | 9 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | hbase-region-inspector |
| headings | hbase-region-inspector / Usage / Accessing secured cluster / Environment variables / Development / Prerequisites / Using Homebrew on Mac OS X / Setting up REPL on tmux panes / For HBase 0.98 and above / HBase 0.94 (CDH4) |
| excerpt | hbase region inspector A visual dashboard of HBase region statistics. ! screenshot/hbase region inspector.png Usage Download the executable binary rel that matches the version of your HBase cluster, add execute permission, and start it with the following command line arguments. rel https //github.com/kakao/hbase region inspector/releases Accessing secured cluster To access a secured HBase cluster, you have to prepare the following configuration files The main properties file JAAS login configuration Kerberos configuration usually /etc/krb5.conf Kerberos keytab optional, but recommended You can find the examples in conf examples conf examples/ . Environment variables DEBUG Enable debug logs w |


## 주요 파일

### Manifests

- conf-examples/README.md
- README.md
- Makefile
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| test | 9 |
| conf-examples | 7 |
| src | 7 |
| resources | 4 |
| .babelrc | 1 |
| .gitignore | 1 |
| .tool-versions | 1 |
| bower.json | 1 |
| CONTRIBUTING.md | 1 |
| gulpfile.js | 1 |
| hacking | 1 |
| LICENSE.txt | 1 |
| Makefile | 1 |
| NOTICE.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .clj | 12 |
| .properties | 7 |
| .conf | 5 |
| [no-ext] | 5 |
| .md | 4 |
| .json | 2 |
| .css | 1 |
| .html | 1 |
| .js | 1 |
| .jsx | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
