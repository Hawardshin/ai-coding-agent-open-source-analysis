# Samsung/Dexter

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/Dexter |
| local path | sources/Samsung__Dexter |
| HEAD | 1730882 |
| stars/forks | 57 / 29 |
| language | HTML |
| license | BSD-2-Clause |
| pushedAt | 2018-12-31T07:30:50Z |
| trendScore / priorityScore | 69 / 222 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 370 | README.md, project/dexter-monitor/README.md, project/dexter-server/README.md |
| LLM wiki / memory / graph | 45 | README.md, project/dexter-monitor/README.md, project/dexter-server/README.md |
| Security / compliance | 22 | project/dexter-monitor/package.json, project/dexter-server/public/gq/src/lang-wiki.js, project/dexter-server/public/tool/cppcheck/CPP/help/sec_ri_secure_storage.html |
| Frontend / developer experience | 5 | README.md |
| Spec / doc-driven workflow | 4 | project/dexter-monitor/package.json, project/dexter-server/public/tool/cppcheck/CPP/help/sec_ri_secure_storage.html |
| Infra / observability | 2 | project/dexter-monitor/README.md, project/dexter-server/README.md |
| RAG / retrieval | 2 | project/dexter-core/src/test/com/samsung/sec/dexter/core/util/DexterClientIT.java, project/dexter-core/src/test/com/samsung/sec/dexter/core/util/DexterClientUT.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++, .NET |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 2560 |
| manifests | 13 |
| docs | 12 |
| tests | 146 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Dexter <img src="../master/wiki/images/DevelopedBySamsung.svg" height="auto" width="20%" title="Not loading? Click to see full size!"/> |
| headings | Dexter <img src="../master/wiki/images/DevelopedBySamsung.svg" height="auto" width="20%" title="Not loading? Click to see full size!"/> / How does it work? / Defects? Same as IDE hints? / Ok, but do <u>YOU</u> need Dexter? / What IDEs does Dexter support? / Where can I find more? / Download Dexter now! / Contribution / How to build / Prerequisites |
| excerpt | Dexter <img src="../master/wiki/images/DevelopedBySamsung.svg" height="auto" width="20%" title="Not loading? Click to see full size!"/ The DE fect e XTER minator Dexter is a static analysis tool for detecting and removing defects and improving code quality even before a third party review. In addition, Dexter allows storing the analysis results on Dexter Server and using customized checkers as plugins. You can code safely now! <details open <summary <b Table of contents</b </summary <li <a href=" how does it work" How does it work?</a <li <a href=" defects same as ide hints" Defects? Same as IDE hints?</a <li <a href=" ok but do you need dexter" Ok, but do <u YOU</u need Dexter?</a <li <a hr |


## 주요 파일

### Manifests

- README.md
- project/dexter-monitor/README.md
- project/dexter-server/README.md
- project/dexter-vs/README.md
- project/build.gradle
- project/dexter-core/build.gradle
- project/dexter-executor/build.gradle
- project/dexter-findbugs/build.gradle
- project/dexter-jenkins/pom.xml
- project/dexter-metrics/build.gradle
- project/dexter-monitor/package.json
- project/dexter-server/Dockerfile
- project/dexter-server/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| project | 2547 |
| wiki | 8 |
| .gitignore | 1 |
| .travis.yml | 1 |
| Jenkinsfile | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .html | 772 |
| .java | 332 |
| .js | 276 |
| .cs | 235 |
| [no-ext] | 142 |
| .ttf | 138 |
| .jar | 121 |
| .css | 71 |
| .eot | 44 |
| .properties | 42 |
| .xml | 40 |
| .json | 30 |
| .woff | 28 |
| .cpp | 25 |
| .prefs | 25 |
| .config | 24 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
