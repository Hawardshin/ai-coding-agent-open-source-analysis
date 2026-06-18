# line/lich

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/lich |
| local path | sources/line__lich |
| HEAD | 2fc3ac0 |
| stars/forks | 202 / 20 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2023-05-13T08:00:10Z |
| trendScore / priorityScore | 77 / 234 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 435 | sample_thrift/README.md, component/README.md, lifecycle/README.md |
| Security / compliance | 86 | README.md, sample-app/app/src/main/java/com/linecorp/lich/sample/navgraph/FirstFragment.kt, sample-app/app/src/main/java/com/linecorp/lich/sample/navgraph/SecondFragment.kt |
| LLM wiki / memory / graph | 18 | component/README.md, CODE_OF_CONDUCT.md, sample-app/model-api/src/main/java/com/linecorp/lich/sample/model/entity/Counter.kt |
| Infra / observability | 4 | okhttp/README.md |
| AI agent / tool use | 3 | sample-app/app/src/main/java/com/linecorp/lich/sample/base/GlobalOkHttpClientFactory.kt |
| Spec / doc-driven workflow | 1 | component/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 325 |
| manifests | 36 |
| docs | 12 |
| tests | 83 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Lich |
| headings | Lich / Libraries / Sample App / Material / License |
| excerpt | Lich ! CI https //github.com/line/lich/workflows/CI/badge.svg?branch=master&event=push https //github.com/line/lich/actions?query=workflow%3ACI+branch%3Amaster+event%3Apush Lich is a library collection that enhances the development of Android apps. All the libraries are available on Maven Central https //search.maven.org/search?q=g com.linecorp.lich . Libraries component component Lightweight framework for managing singleton components on Android apps. viewmodel viewmodel Lightweight framework for managing ViewModels in the same way as "Lich Component". savedstate savedstate A library that provides type safe access to saved instance state https //developer.android.com/topic/libraries/archite |


## 주요 파일

### Manifests

- sample_thrift/README.md
- sample-app/README.md
- component/README.md
- lifecycle/README.md
- okhttp/README.md
- publishing/README.md
- README.md
- savedstate/README.md
- thrift/README.md
- viewmodel/README.md
- component-test-mockitokotlin/build.gradle
- component-test-mockk/build.gradle
- component-test/build.gradle
- sample_thrift/build.gradle
- viewmodel-test-mockitokotlin/build.gradle
- viewmodel-test-mockk/build.gradle
- viewmodel-test/build.gradle
- build.gradle
- component-compose/build.gradle
- component-debug/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| sample-app | 63 |
| component | 38 |
| static-analysis | 18 |
| viewmodel | 18 |
| okhttp | 17 |
| component-debug | 15 |
| savedstate | 14 |
| viewmodel-test | 14 |
| thrift | 12 |
| thrift-logging | 11 |
| component-test | 10 |
| savedstate-compiler | 10 |
| sample_thrift | 9 |
| viewmodel-test-mockk | 9 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 175 |
| .xml | 47 |
| .gradle | 31 |
| [no-ext] | 31 |
| .md | 12 |
| .java | 5 |
| .componentprovider | 3 |
| .pro | 3 |
| .properties | 3 |
| .lichviewmodelprovider | 2 |
| .yml | 2 |
| .bat | 1 |
| .delegatetoserviceloadercomponent1 | 1 |
| .delegatetoserviceloadercomponent2 | 1 |
| .issueregistry | 1 |
| .jar | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
