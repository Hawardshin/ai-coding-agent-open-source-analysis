# naver/hackday-conventions-java

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/hackday-conventions-java |
| local path | sources/naver__hackday-conventions-java |
| HEAD | 1f277f7 |
| stars/forks | 217 / 155 |
| language |  |
| license |  |
| pushedAt | 2023-10-04T02:32:57Z |
| trendScore / priorityScore | 83 / 177 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 67 | README.adoc, build.gradle, src/java-rules.adoc |
| Spec / doc-driven workflow | 3 | src/java-rules.adoc |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, spec-driven |
| stacks | Java/Kotlin |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 18 |
| manifests | 1 |
| docs | 6 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.adoc |
| title | [indentation-tab] |
| headings | [indentation-tab] |
| excerpt | = 캠퍼스 핵데이 Java 코딩 컨벤션 toc 문서 https //naver.github.io/hackday conventions java/ 설정 파일 https //github.com/naver/hackday conventions java/tree/master/rule config == 빠른 적용 가이드 최소한의 규칙으로 빠르게 적용을 하고 싶다면 아래 단락만 참고합니다. .editorconfig 설정 https //naver.github.io/hackday conventions java/ editorconfig Gradle 빌드에서 .editconfig의 규칙 검사 https //naver.github.io/hackday conventions java/ gradle editorconfig IntelliJ 포멧터 적용 https //naver.github.io/hackday conventions java/ intellij formatter == 가이드 특징 === 판단 기준이 명확한 규칙만을 서술 '짧고 간결한 이름', '불필요한 주석 지양' 등 사람마다 기준이 다른 규칙은 제외했습니다. 앞으로도 준수여부를 판단하는데 토론이 필요한 요소나 프로그래밍 프랙티스 등은 이 가이드에는 포함하지 않을 예정입니다. === 규칙 식별자 활용 규칙마다 식별자를 지정하고 이를 문서 링크와 설정 파일에 표기했습니다. 예를 들어 '하드탭 사용' 규칙은 |


## 주요 파일

### Manifests

- build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| rule-config | 5 |
| src | 5 |
| gradle | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| build.gradle | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| README.adoc | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .adoc | 6 |
| .xml | 4 |
| [no-ext] | 3 |
| .bat | 1 |
| .gradle | 1 |
| .importorder | 1 |
| .jar | 1 |
| .properties | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
