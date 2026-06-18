# woowacourse/service-apply

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/woowacourse/service-apply |
| local path | sources/woowacourse__service-apply |
| HEAD | 19c9327 |
| stars/forks | 580 / 100 |
| language | Kotlin |
| license |  |
| pushedAt | 2025-12-29T04:52:03Z |
| trendScore / priorityScore | 100 / 242 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 95 | src/test/kotlin/support/test/spec/Specs.kt, src/test/kotlin/apply/application/EvaluationServiceTest.kt, src/test/kotlin/apply/application/EvaluationTargetCsvServiceTest.kt |
| Frontend / developer experience | 87 | frontend/README.md, build.gradle.kts, frontend/package.json |
| Security / compliance | 13 | build.gradle.kts, src/main/kotlin/apply/ui/api/EvaluationRestController.kt, src/main/kotlin/apply/ui/api/EvaluationTargetRestController.kt |
| LLM wiki / memory / graph | 6 | src/main/kotlin/apply/domain/evaluation/Evaluation.kt, src/main/kotlin/apply/domain/evaluationitem/EvaluationItem.kt, src/main/kotlin/apply/domain/evaluationtarget/EvaluationTarget.kt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 608 |
| manifests | 7 |
| docs | 12 |
| tests | 124 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | apply |
| headings | apply / 퀵 스타트 |
| excerpt | apply 우아한테크코스 지원부터 최종 합격까지 모든 과정을 관리한다. 퀵 스타트 |


## 주요 파일

### Manifests

- frontend/README.md
- README.md
- build.gradle.kts
- docker/docker-compose.yml
- frontend/package.json
- frontend/tsconfig.json
- package.json


### Spec / Docs / Prompt Artifacts

- src/test/kotlin/support/test/spec/Specs.kt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 351 |
| frontend | 238 |
| .github | 2 |
| gradle | 2 |
| .ebextensions | 1 |
| .gitignore | 1 |
| .platform | 1 |
| appspec.yml | 1 |
| build.gradle.kts | 1 |
| buildspec.yml | 1 |
| docker | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| package-lock.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 315 |
| .tsx | 72 |
| .ts | 55 |
| .css | 50 |
| .js | 46 |
| .sql | 15 |
| .adoc | 8 |
| .html | 5 |
| .json | 5 |
| .properties | 5 |
| .svg | 5 |
| .csv | 4 |
| .md | 4 |
| .yml | 4 |
| [no-ext] | 4 |
| .kts | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
