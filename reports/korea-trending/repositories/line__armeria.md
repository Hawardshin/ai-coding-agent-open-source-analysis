# line/armeria

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/armeria |
| local path | sources/line__armeria |
| HEAD | d92d219 |
| stars/forks | 5117 / 998 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T09:24:41Z |
| trendScore / priorityScore | 139 / 355 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 53 | native-image-config/README.md, README.md, gradle/scripts/README.md |
| Frontend / developer experience | 39 | docs-client/package.json, site-new/package.json |
| Infra / observability | 34 | examples/README.md, it/kubernetes-chaos-tests/README.md, core/build.gradle |
| Security / compliance | 10 | gradle/scripts/README.md, athenz/build.gradle, build.gradle |
| AI agent / tool use | 7 | native-image-config/README.md, build.gradle, native-image-config/build.gradle.kts |
| Spec / doc-driven workflow | 7 | benchmarks/jmh/README.md, docs-client/README.md, README.md |
| LLM wiki / memory / graph | 4 | examples/README.md, it/kubernetes-chaos-tests/README.md, build.gradle |
| MCP / tool protocol | 4 | ai/mcp/build.gradle |
| RAG / retrieval | 2 | gradle/scripts/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 6116 |
| manifests | 40 |
| docs | 340 |
| tests | 1700 |
| ci/ops | 65 |
| spec artifacts | 3 |
| agent instruction files | 3 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Armeria |
| headings | Armeria / Requirements / How to reach us — chat, questions and newsletters / Hall of fame |
| excerpt | Visit the official web site https //armeria.dev/ for more information. Armeria ! GitHub stars https //img.shields.io/github/stars/line/armeria.svg?style=social https //github.com/line/armeria ! Twitter Follow https //img.shields.io/twitter/follow/armeria project.svg?label=Follow https //twitter.com/armeria project ! Discord https //img.shields.io/badge/chat on%20Discord brightgreen.svg?style=social&logo=discord https //armeria.dev/s/discord ! GitHub contributors https //img.shields.io/github/contributors/line/armeria.svg https //github.com/line/armeria/contributors ! GitHub commit activity https //img.shields.io/github/commit activity/m/line/armeria.svg?label=commits https //github.com/line/ |


## 주요 파일

### Manifests

- benchmarks/ghz/README.md
- benchmarks/jmh/README.md
- examples/README.md
- athenz/src/test/resources/docker/README.md
- docs-client/README.md
- examples/proxy-server/README.md
- it/kubernetes-chaos-tests/README.md
- native-image-config/README.md
- README.md
- site-new/README.md
- gradle/scripts/README.md
- site-new/src/design/README.md
- ai/mcp/build.gradle
- benchmarks/ghz/build.gradle
- benchmarks/jmh/build.gradle
- it/context-storage/build.gradle
- testing-internal/build.gradle
- .github/pom.xml
- annotation-processor/build.gradle
- athenz/build.gradle


### Spec / Docs / Prompt Artifacts

- .claude/skills/release-note/references/style-guide.md
- .claude/skills/release-note/SKILL.md
- .claude/skills/upgrade-deps/SKILL.md


### Agent Instruction Files

- .claude/skills/release-note/references/style-guide.md
- .claude/skills/release-note/SKILL.md
- .claude/skills/upgrade-deps/SKILL.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| core | 2317 |
| xds-api | 680 |
| site-new | 367 |
| it | 265 |
| grpc | 246 |
| spring | 222 |
| examples | 209 |
| thrift | 204 |
| xds | 200 |
| athenz | 105 |
| gradle | 105 |
| oauth2 | 84 |
| licenses | 68 |
| benchmarks | 63 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 4109 |
| .proto | 703 |
| .mdx | 263 |
| .gradle | 176 |
| .txt | 81 |
| .yml | 72 |
| .scala | 65 |
| .kt | 60 |
| .tsx | 60 |
| [no-ext] | 43 |
| .json | 30 |
| .properties | 25 |
| .pem | 24 |
| .ts | 24 |
| .md | 23 |
| .css | 22 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
