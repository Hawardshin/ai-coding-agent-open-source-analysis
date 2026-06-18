# naver/spring-batch-plus

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/spring-batch-plus |
| local path | sources/naver__spring-batch-plus |
| HEAD | e1966e0 |
| stars/forks | 129 / 10 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2026-06-15T10:30:16Z |
| trendScore / priorityScore | 96 / 270 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 448 | doc/en/configuration/kotlin-dsl/step/README.md, doc/ko/configuration/kotlin-dsl/step/README.md, README.md |
| Korean language / Korea domain | 85 | README.md, CONTRIBUTING.md, RELEASE_PROCESS.md |
| Security / compliance | 66 | README.md, doc/ko/configuration/kotlin-dsl/step/chunk-oriented-step.md, CODE_OF_CONDUCT.md |
| Spec / doc-driven workflow | 3 | RELEASE_PROCESS.md |
| Infra / observability | 2 | spring-batch-plus-kotlin/src/test/kotlin/com/navercorp/spring/batch/plus/kotlin/configuration/JobBuilderDslHelperTest.kt, spring-batch-plus-kotlin/src/test/kotlin/com/navercorp/spring/batch/plus/kotlin/configuration/StepBuilderDslHelperTest.kt |
| AI agent / tool use | 1 | CONTRIBUTING.md |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, example-rich, infra-observability, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 607 |
| manifests | 32 |
| docs | 57 |
| tests | 416 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Spring Batch Plus |
| headings | Spring Batch Plus / Features / Kotlin DSL / Single class reader-processor-writer / Other Useful Classes / Compatibility / Download / Gradle / Maven / User Guide |
| excerpt | Spring Batch Plus ! maven central version https //maven badges.herokuapp.com/maven central/com.navercorp.spring/spring batch plus kotlin/badge.svg ! build https //github.com/naver/spring batch plus/actions/workflows/build.yml/badge.svg?branch=main https //github.com/naver/spring batch plus/actions/workflows/build.yml?query=branch%3Amain ! coverage https //codecov.io/github/naver/spring batch plus/branch/main/graph/badge.svg https //codecov.io/github/naver/spring batch plus ! license https //img.shields.io/badge/License Apache%202.0 blue.svg https //github.com/naver/spring batch plus/blob/main/LICENSE Spring Batch Plus provides extension features to Spring Batch https //github.com/spring proj |


## 주요 파일

### Manifests

- doc/en/configuration/kotlin-dsl/flow/README.md
- doc/en/configuration/kotlin-dsl/job/README.md
- doc/en/configuration/kotlin-dsl/README.md
- doc/en/configuration/kotlin-dsl/step/README.md
- doc/en/README.md
- doc/ko/configuration/kotlin-dsl/flow/README.md
- doc/ko/configuration/kotlin-dsl/job/README.md
- doc/ko/configuration/kotlin-dsl/README.md
- doc/ko/configuration/kotlin-dsl/step/README.md
- doc/ko/README.md
- README.md
- spring-batch-plus-kotlin/README.md
- spring-batch-plus/README.md
- spring-boot-autoconfigure-batch-plus-kotlin/README.md
- spring-boot-autoconfigure-batch-plus/README.md
- spring-boot-starter-batch-plus-kotlin/README.md
- spring-boot-starter-batch-plus/README.md
- build.gradle.kts
- buildSrc/build.gradle.kts
- spring-batch-plus-kotlin/build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| spring-batch-plus-sample | 387 |
| spring-batch-plus | 86 |
| spring-batch-plus-kotlin | 48 |
| doc | 46 |
| buildSrc | 8 |
| spring-boot-autoconfigure-batch-plus-kotlin | 5 |
| .github | 3 |
| gradle | 3 |
| spring-boot-autoconfigure-batch-plus | 2 |
| spring-boot-starter-batch-plus | 2 |
| spring-boot-starter-batch-plus-kotlin | 2 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 337 |
| .java | 162 |
| .md | 57 |
| .kts | 20 |
| .yml | 10 |
| .xml | 7 |
| [no-ext] | 5 |
| .properties | 2 |
| .sql | 2 |
| .bat | 1 |
| .imports | 1 |
| .jar | 1 |
| .sh | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
