# naver/fixture-monkey

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/fixture-monkey |
| local path | sources/naver__fixture-monkey |
| HEAD | d337a72 |
| stars/forks | 696 / 122 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-05-29T09:14:12Z |
| trendScore / priorityScore | 112 / 289 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 89 | README.md, build.gradle.kts, docs/docs/customizing-objects/innerspec.mdx |
| Korean language / Korea domain | 34 | README.md, docs/docusaurus.config.ts, fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/BooleanIntrospectorSpec.java |
| Security / compliance | 14 | README.md, fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/BooleanIntrospectorSpec.java, fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/ByteIntrospectorSpec.java |
| Frontend / developer experience | 6 | docs/package.json, docs/docusaurus.config.ts |
| LLM wiki / memory / graph | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, frontend-dx, korea-signal, llm-wiki-memory, llmFramework, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | LLM/app framework, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1345 |
| manifests | 39 |
| docs | 343 |
| tests | 309 |
| ci/ops | 7 |
| spec artifacts | 50 |
| agent instruction files | 5 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Fixture Monkey |
| headings | Fixture Monkey / "Write once, Test anywhere" / Table of Contents / Quick Start / Gradle / Maven / Java Example / Kotlin Example / Why use Fixture Monkey? / 1. One-Line Test Object Generation |
| excerpt | Fixture Monkey ! Maven version https //maven badges.herokuapp.com/maven central/com.navercorp.fixturemonkey/fixture monkey/badge.svg ! Build https //github.com/naver/fixture monkey/actions/workflows/build.yml/badge.svg?branch=main https //github.com/naver/fixture monkey/actions/workflows/build.yml ! GitHub license https //img.shields.io/badge/License Apache%202.0 blue.svg https //github.com/naver/fixture monkey/blob/main/LICENSE <figure align="center" <img src= "https //user images.githubusercontent.com/10272119/227154042 b43ab281 ac73 4648 ba8f 7f2146cde6d5.png" width="100%"/ <figcaption Designed by <a href="https //www.linkedin.com/in/seongin hong" SeongIn Hong</a </figcaption </figure "Wr |


## 주요 파일

### Manifests

- docs/README.md
- README.md
- .claude/CLAUDE.md
- docs/package.json
- docs/tsconfig.json
- fixture-monkey-benchmarks/build.gradle.kts
- fixture-monkey-benchmarks/fixture-monkey-benchmark-kotlin/build.gradle.kts
- fixture-monkey-benchmarks/fixture-monkey-benchmark/build.gradle.kts
- fixture-monkey-kotest/build.gradle.kts
- fixture-monkey-tests/build.gradle.kts
- build.gradle.kts
- buildSrc/build.gradle.kts
- fixture-monkey-api/build.gradle.kts
- fixture-monkey-autoparams/build.gradle.kts
- fixture-monkey-datafaker/build.gradle.kts
- fixture-monkey-engine/build.gradle.kts
- fixture-monkey-jackson/build.gradle.kts
- fixture-monkey-jackson3/build.gradle.kts
- fixture-monkey-jakarta-validation/build.gradle.kts
- fixture-monkey-javax-validation/build.gradle.kts


### Spec / Docs / Prompt Artifacts

- .claude/CLAUDE.md
- .github/workflows/benchmark.yml
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/BigDecimalIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/BigIntegerIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/BooleanIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/ByteIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/CharacterIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/ContainerAnnotationIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/DoubleIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/FloatIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/IntIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/LongIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/NullAnnotationIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/ShortIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/StringIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/TimeFutureIntrospectorSpec.java
- fixture-monkey-jakarta-validation/src/test/java/com/navercorp/fixturemonkey/jakarta/validation/spec/TimePastIntrospectorSpec.java
- fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigDecimalIntrospectorSpec.java
- fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigIntegerIntrospectorSpec.java
- fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BooleanIntrospectorSpec.java


### Agent Instruction Files

- .claude/CLAUDE.md
- .claude/rules/adapter-classes.md
- .claude/rules/adapter-execution-flow.md
- .claude/rules/adapter.md
- .claude/rules/object-farm-api.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| fixture-monkey-api | 309 |
| docs | 299 |
| fixture-monkey-tests | 166 |
| fixture-monkey | 152 |
| object-farm-api | 130 |
| fixture-monkey-kotlin | 64 |
| fixture-monkey-kotest | 27 |
| fixture-monkey-jakarta-validation | 25 |
| fixture-monkey-javax-validation | 25 |
| fixture-monkey-jackson | 20 |
| fixture-monkey-jackson3 | 18 |
| fixture-monkey-junit-jupiter | 14 |
| fixture-monkey-datafaker | 13 |
| .github | 12 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 776 |
| .kt | 155 |
| .md | 149 |
| .json | 75 |
| .mdx | 68 |
| .kts | 31 |
| .properties | 19 |
| .config | 9 |
| .yml | 8 |
| [no-ext] | 7 |
| .svg | 5 |
| .ts | 4 |
| .xml | 4 |
| .css | 3 |
| .bigdecimalcombinablearbitrary | 2 |
| .bigintegercombinablearbitrary | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
