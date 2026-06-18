# naver/scavenger

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/scavenger |
| local path | sources/naver__scavenger |
| HEAD | b0ab3c5 |
| stars/forks | 465 / 48 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-06-11T10:28:31Z |
| trendScore / priorityScore | 110 / 301 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 201 | scavenger-agent-python/README.md, README.md, scavenger-agent-java/build.gradle.kts |
| Korean language / Korea domain | 28 | README.md, scavenger-agent-java/build.gradle.kts, scavenger-old-agent-java/build.gradle.kts |
| Frontend / developer experience | 22 | README.md, build.gradle.kts, scavenger-api/build.gradle.kts |
| LLM wiki / memory / graph | 6 | scavenger-api/build.gradle.kts, scavenger-collector/build.gradle.kts, doc/installation.md |
| Security / compliance | 6 | README.md, scavenger-agent-python/tests/samples/django_sample/mysite/settings.py |
| Spec / doc-driven workflow | 5 | README.md, scavenger-old-agent-java/build.gradle.kts |
| MCP / tool protocol | 2 | scavenger-api/src/test/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptorTest.kt |
| Infra / observability | 1 | doc/installation.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, mcp, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 745 |
| manifests | 20 |
| docs | 6 |
| tests | 281 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Scavenger |
| headings | Scavenger / Components / Features / Download / Documentation / Contribution? / Versioning / Q/A and Bug tracker / License |
| excerpt | Scavenger As the system ages, more and more unused code, aka "Dead Code", will pile up due to requirement and spec changes. Scavenger was started from codekvast https //github.com/crispab/codekvast . Codekvast is the first tool which enables runtime dead code analysis in Java. Scavenger provides more sophisticated and clear UI and elaborate the instrumentation logic by re writing most of codes. Components Scavenger Agent Collect the code base and regularly send the invocations of the host application to collectors. Scavenger Collector Store the data received from the agent in the database. Clean up garbages. Scavenger API Provide APs for exploring invocations. Scavenger Frontend Provides UI. |


## 주요 파일

### Manifests

- scavenger-agent-python/README.md
- README.md
- scavenger-agent-java/build.gradle.kts
- scavenger-agent-python/build.gradle.kts
- scavenger-agent-python/pyproject.toml
- scavenger-agent-python/tests/samples/benchmark/pyproject.toml
- scavenger-agent-python/tests/samples/django_sample/requirements.txt
- scavenger-agent-python/tests/samples/flask_sample/requirements.txt
- scavenger-old-agent-java/build.gradle.kts
- scavenger-demo-extension/build.gradle.kts
- scavenger-demo/build.gradle.kts
- build.gradle.kts
- scavenger-api/build.gradle.kts
- scavenger-collector/build.gradle.kts
- scavenger-entity/build.gradle.kts
- scavenger-frontend/build.gradle.kts
- scavenger-frontend/package.json
- scavenger-model/build.gradle.kts
- scavenger-old-model/build.gradle.kts
- scavenger-schema/build.gradle.kts


### Spec / Docs / Prompt Artifacts

- scavenger-agent-python/tests/samples/django_sample/requirements.txt
- scavenger-agent-python/tests/samples/flask_sample/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| scavenger-old-agent-java | 233 |
| scavenger-collector | 115 |
| scavenger-api | 94 |
| scavenger-agent-python | 87 |
| scavenger-agent-java | 63 |
| scavenger-frontend | 38 |
| scavenger-demo | 28 |
| scavenger-schema | 19 |
| scavenger-entity | 17 |
| scavenger-old-model | 17 |
| scavenger-model | 10 |
| .github | 6 |
| doc | 3 |
| gradle | 2 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 231 |
| .java | 170 |
| .class | 74 |
| .py | 67 |
| .jar | 43 |
| .vue | 22 |
| .yml | 15 |
| .kts | 14 |
| .sql | 11 |
| .conf | 10 |
| .js | 8 |
| .json | 8 |
| .properties | 8 |
| [no-ext] | 8 |
| .proto | 7 |
| .html | 6 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
