# naver/naveridlogin-sdk-android

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/naveridlogin-sdk-android |
| local path | sources/naver__naveridlogin-sdk-android |
| HEAD | e94ae7a |
| stars/forks | 124 / 35 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2026-02-20T08:28:10Z |
| trendScore / priorityScore | 85 / 232 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 307 | README.md, Samples/build.gradle.kts, Nid-OAuth/build.gradle.kts |
| Frontend / developer experience | 52 | README.md, Samples/build.gradle.kts, Nid-OAuth/build.gradle.kts |
| Korean language / Korea domain | 52 | README.md, Nid-OAuth/build.gradle.kts, Nid-OAuth/src/main/java/com/navercorp/nid/core/util/UserAgentFactory.kt |
| LLM wiki / memory / graph | 6 | README.md, CHANGELOG.md |
| AI agent / tool use | 2 | Nid-OAuth/src/main/java/com/navercorp/nid/core/data/interceptor/UserAgentInterceptor.kt, Nid-OAuth/src/main/java/com/navercorp/nid/core/util/UserAgentFactory.kt |
| Spec / doc-driven workflow | 2 | Nid-OAuth/src/main/java/com/navercorp/nid/core/data/datastore/NidKeyStoreManager.kt, Nid-OAuth/src/main/java/com/navercorp/nid/core/data/datastore/NidOAuthLocalDataSource.kt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory, security, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 120 |
| manifests | 5 |
| docs | 5 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Naver Login SDK for Android |
| headings | Naver Login SDK for Android / Naver Login Overview / Naver Login for Android / Dependent libraries / 네아로SDK for Android (네이버 아이디로 로그인 SDK) / 사용하는 라이브러리 / License |
| excerpt | Naver Login SDK for Android Naver Login Overview NAVER Login let users to use the OAuth 2.0 based security feature of NAVER when they are using non NAVER services. It is a convenient and secure way for users to log into your application with the NAVER ID and password; they do not have to remember their IDs and password of your application. It is recommended to add NAVER Login to your application if you want to make people who hate complicated signups to join your application or stop users leaving your application because they forget their accounts. Naver Login for Android The NAVER Login library for Android enables you to easily add the login, logout, and token management features to your ap |


## 주요 파일

### Manifests

- README.md
- Samples/build.gradle.kts
- build.gradle.kts
- buildSrc/build.gradle.kts
- Nid-OAuth/build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| Nid-OAuth | 84 |
| Samples | 17 |
| .github | 3 |
| gradle | 3 |
| buildSrc | 2 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CHANGELOG.md | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| keystore.properties | 1 |
| LICENSE | 1 |
| NOTICE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 70 |
| .xml | 24 |
| [no-ext] | 6 |
| .kts | 5 |
| .md | 5 |
| .pro | 3 |
| .properties | 3 |
| .bat | 1 |
| .jar | 1 |
| .json | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
