# woowacourse/prolog

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/woowacourse/prolog |
| local path | sources/woowacourse__prolog |
| HEAD | 9cc7090 |
| stars/forks | 202 / 29 |
| language | Java |
| license | MIT |
| pushedAt | 2026-04-17T04:35:55Z |
| trendScore / priorityScore | 93 / 241 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 79 | frontend/README.md, backend/build.gradle, frontend/package.json |
| Spec / doc-driven workflow | 31 | frontend/package.json, .github/workflows/front-prod.yml, backend/src/acceptanceTest/java/wooteco/prolog/AcceptanceContext.java |
| Infra / observability | 15 | backend/build.gradle, .github/workflows/terraform.yml |
| Security / compliance | 11 | backend/build.gradle, .github/workflows/back.yml, backend/src/acceptanceTest/java/wooteco/prolog/fixtures/GithubTestController.java |
| Korean language / Korea domain | 1 | frontend/package.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, infra-observability, korea-signal, llmFramework, localRuntime, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | LLM/app framework, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 961 |
| manifests | 8 |
| docs | 4 |
| tests | 114 |
| ci/ops | 39 |
| spec artifacts | 5 |
| agent instruction files | 5 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | pro-log |
| headings | pro-log |
| excerpt | pro log |


## 주요 파일

### Manifests

- backend/README.md
- frontend/README.md
- README.md
- backend/build.gradle
- backend/Dockerfile
- frontend/package.json
- frontend/tsconfig.json
- backend/docker/docker-compose.yml


### Spec / Docs / Prompt Artifacts

- backend/src/main/resources/prompts/qna-feedback.st
- backend/src/main/resources/prompts/qna-interview-closing-summary.st
- backend/src/main/resources/prompts/qna-interview-initial-question.st
- backend/src/main/resources/prompts/qna-interview-interactive-follow-up.st
- backend/src/main/resources/prompts/qna-interview-system-guide.st


### Agent Instruction Files

- backend/src/main/resources/prompts/qna-feedback.st
- backend/src/main/resources/prompts/qna-interview-closing-summary.st
- backend/src/main/resources/prompts/qna-interview-initial-question.st
- backend/src/main/resources/prompts/qna-interview-interactive-follow-up.st
- backend/src/main/resources/prompts/qna-interview-system-guide.st


## 상위 디렉터리

| dir | count |
| --- | --- |
| backend | 577 |
| frontend | 337 |
| terraform | 32 |
| .github | 6 |
| gradle | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |
| README.md | 1 |
| settings.gradle | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 492 |
| .ts | 151 |
| .tsx | 113 |
| .tf | 31 |
| .js | 26 |
| .feature | 23 |
| .svg | 22 |
| .yml | 17 |
| .xml | 16 |
| .sql | 15 |
| .json | 12 |
| [no-ext] | 11 |
| .st | 5 |
| .md | 4 |
| .sh | 4 |
| .gradle | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
