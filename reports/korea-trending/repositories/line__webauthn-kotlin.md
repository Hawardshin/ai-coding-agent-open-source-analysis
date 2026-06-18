# line/webauthn-kotlin

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/webauthn-kotlin |
| local path | sources/line__webauthn-kotlin |
| HEAD | 6090dbe |
| stars/forks | 24 / 8 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2026-01-07T03:11:44Z |
| trendScore / priorityScore | 69 / 214 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 362 | build.gradle, webauthn/build.gradle, webauthn/src/androidTest/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt |
| Security / compliance | 215 | README.md, build.gradle, webauthn/build.gradle |
| Spec / doc-driven workflow | 22 | README.md, webauthn/src/main/java/com/linecorp/webauthn/model/AttestationObject.kt, webauthn/src/main/java/com/linecorp/webauthn/model/AttestationStatement.kt |
| LLM wiki / memory / graph | 19 | webauthn/src/androidTest/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt, webauthn/src/test/java/com/linecorp/webauthn/util/MockCredentialSourceStorage.kt, CODE_OF_CONDUCT.md |
| Frontend / developer experience | 7 | README.md |
| RAG / retrieval | 2 | webauthn/src/main/java/com/linecorp/webauthn/publickeycredential/PublicKeyCredential.kt |
| AI agent / tool use | 1 | webauthn/src/main/java/com/linecorp/webauthn/exceptions/WebAuthnException.kt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, security, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 76 |
| manifests | 3 |
| docs | 4 |
| tests | 3 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | WebAuthn Kotlin |
| headings | WebAuthn Kotlin / Components / PublicKeyCredential / RelyingParty / CredentialSourceStorage / Requirements / Runtime Requirements / Development Requirements / Build System / Usage |
| excerpt | WebAuthn Kotlin WebAuthn Kotlin is an open source toolkit for secure, password less authentication in mobile apps. Developed in Kotlin, it integrates seamlessly with native Android apps and adheres to WebAuthn 2.0 standards, boosting security and user experience. Designed to align with modern Android development, the SDK offers easy integration and customization. It equips developers with tools for advanced authentication, such as device credentials and biometrics, simplifying logins and enhancing security. Components PublicKeyCredential The PublicKeyCredential serves as the client within the authentication framework, interacting with the authenticator to carry out the authentication process |


## 주요 파일

### Manifests

- README.md
- build.gradle
- webauthn/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| webauthn | 61 |
| gradle | 2 |
| .editorconfig | 1 |
| .github | 1 |
| .gitignore | 1 |
| build.gradle | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 56 |
| [no-ext] | 5 |
| .md | 4 |
| .gradle | 3 |
| .properties | 2 |
| .xml | 2 |
| .bat | 1 |
| .jar | 1 |
| .pro | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
