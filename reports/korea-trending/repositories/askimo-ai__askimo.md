# askimo-ai/askimo

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/askimo-ai/askimo |
| local path | sources/askimo-ai__askimo |
| HEAD | 77e829b |
| stars/forks | 0 / 0 |
| language | Kotlin |
| license |  |
| pushedAt | 2026-06-17T19:04:51Z |
| trendScore / priorityScore | 67 / 213 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 471 | README.md, cli/src/test/kotlin/io/askimo/core/chat/repository/SessionMemoryRepositoryIT.kt, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandVectorIndexTest.kt |
| MCP / tool protocol | 380 | README.md, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandVectorIndexTest.kt, cli/src/test/kotlin/io/askimo/core/mcp/McpInstanceServiceTest.kt |
| LLM wiki / memory / graph | 358 | README.md, cli/build.gradle.kts, cli/src/test/kotlin/io/askimo/core/chat/repository/SessionMemoryRepositoryIT.kt |
| AI agent / tool use | 135 | README.md, cli/build.gradle.kts, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandVectorIndexTest.kt |
| Security / compliance | 118 | cli/src/test/kotlin/io/askimo/core/security/README.md, README.md, tools/installation/README.md |
| Local LLM / on-device inference | 51 | README.md, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandVectorIndexTest.kt, shared/src/main/kotlin/io/askimo/core/providers/LocalEmbeddingModelUtils.kt |
| Spec / doc-driven workflow | 46 | desktop/README.md, README.md, tools/installation/README.md |
| Frontend / developer experience | 24 | shared/src/test/kotlin/io/askimo/core/rag/filter/FilterChainTest.kt |
| Infra / observability | 24 | cli/build.gradle.kts, shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt, cli/src/test/kotlin/io/askimo/core/intent/DetectUserIntentCommandTest.kt |
| Korean language / Korea domain | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 638 |
| manifests | 13 |
| docs | 9 |
| tests | 80 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Run the desktop app |
| headings | Why Askimo? / See It in Action / Quick Start / System Requirements / Features / Beyond Chat: Skills and Plans / Supported Providers / Building from Source / Prerequisites / Run the desktop app |
| excerpt | <p align="center" <picture <source media=" prefers color scheme dark " srcset="public/github logo dark.svg" <img alt="Askimo AI toolkit for your workflows." src="public/github logo light.svg" </picture </p <p align="center" <b One app. Every AI model. Your files stay local.</b </p <p align="center" Chat · Search your files · Run scripts · Build multi step AI workflows · Execute AI agent skills all offline capable, all on your machine. </p <p align="center" ⭐ If Askimo saves you time, a star helps others find it and keeps the project going. <a href="https //github.com/askimo ai/askimo/stargazers" <strong Star on GitHub →</strong </a </p <p align="center" <a href="https //github.com/askimo ai/ |


## 주요 파일

### Manifests

- cli/src/test/kotlin/io/askimo/core/security/README.md
- desktop/README.md
- README.md
- desktop-shared/src/main/resources/images/backgrounds/README.md
- desktop/src/main/resources/images/README.md
- tools/git/README.md
- tools/installation/README.md
- build.gradle.kts
- cli/build.gradle.kts
- desktop-shared/build.gradle.kts
- desktop/build.gradle.kts
- detekt-rules/build.gradle.kts
- shared/build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| shared | 328 |
| desktop-shared | 127 |
| cli | 100 |
| desktop | 45 |
| tools | 7 |
| detekt-rules | 5 |
| public | 5 |
| .github | 4 |
| gradle | 3 |
| .env.template | 1 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CONTRIBUTING.md | 1 |
| crowdin.yml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 553 |
| .yml | 19 |
| .properties | 12 |
| .md | 9 |
| .json | 7 |
| .kts | 7 |
| [no-ext] | 6 |
| .svg | 5 |
| .ttf | 4 |
| .xml | 4 |
| .sh | 2 |
| .bat | 1 |
| .feature | 1 |
| .icns | 1 |
| .jar | 1 |
| .prompttemplatefactory | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
