# kakao/actionbase

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/actionbase |
| local path | sources/kakao__actionbase |
| HEAD | b2b82be |
| stars/forks | 220 / 15 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T14:16:50Z |
| trendScore / priorityScore | 101 / 288 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 274 | cli/README.md, README.md, docker/standalone/README.md |
| LLM wiki / memory / graph | 32 | README.md, core-java/src/main/java/com/kakao/actionbase/core/java/dataframe/README.md, docker/standalone/README.md |
| Spec / doc-driven workflow | 29 | cli/README.md, website/public/images/quick-start/README.md, engine/src/test/kotlin/com/kakao/actionbase/v2/engine/metadata/StorageSpec.kt |
| Frontend / developer experience | 22 | website/package.json, guides/build-your-social-app/package.json, guides/build-your-social-app/tsconfig.json |
| RAG / retrieval | 22 | website/src/content/docs/design/storage-backends.mdx, website/src/content/docs/api-references/metadata.mdx, website/src/content/docs/api-references/query.mdx |
| Security / compliance | 15 | README.md, .github/workflows/release-cherry-pick-report.yml, website/src/content/docs/api-references/index.mdx |
| Infra / observability | 14 | dev/hbase/Makefile, website/src/content/docs/faq.mdx, website/src/content/docs/ko/faq.mdx |
| AI agent / tool use | 1 | website/src/content/docs/project/path-to-open-source.mdx |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go, Java/Kotlin, Ruby |
| capabilities | Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1270 |
| manifests | 32 |
| docs | 165 |
| tests | 230 |
| ci/ops | 17 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Actionbase |
| headings | Actionbase / Why Actionbase / Quick Start / How It Works / Architecture / Codebase Overview / When to Use It / Current Status / Contribute / Learn More |
| excerpt | Actionbase One database for user–user, user–item, and item–item interactions — precomputed at write time, served as simple lookups. <br / 1M+ req/min in production at Kakao. Built on HBase. ! CI https //img.shields.io/github/actions/workflow/status/kakao/actionbase/continuous integration.yml?label=ci&style=flat square https //github.com/kakao/actionbase/actions/workflows/continuous integration.yml ! Release https //img.shields.io/github/v/release/kakao/actionbase?label=release&style=flat square https //github.com/kakao/actionbase/releases ! License https //img.shields.io/badge/license Apache%202.0 blue?style=flat square https //opensource.org/licenses/Apache 2.0 ! Docs https //img.shields.io |


## 주요 파일

### Manifests

- cli/README.md
- README.md
- website/README.md
- core-java/src/main/java/com/kakao/actionbase/core/java/dataframe/README.md
- dev/hbase/README.md
- docker/standalone/README.md
- website/grammars/README.md
- website/public/images/quick-start/README.md
- build.gradle.kts
- cli/go.mod
- cli/Makefile
- codec-java/build.gradle.kts
- conventions/build.gradle.kts
- core-java/build.gradle.kts
- core/build.gradle.kts
- engine/build.gradle.kts
- pipeline/build.gradle.kts
- platform/build.gradle.kts
- server/build.gradle.kts
- website/package.json


### Spec / Docs / Prompt Artifacts

- ROADMAP.md
- .github/ISSUE_TEMPLATE/task.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| core-java | 287 |
| engine | 238 |
| core | 188 |
| website | 145 |
| server | 109 |
| guides | 68 |
| codec-java | 61 |
| cli | 49 |
| pipeline | 48 |
| .github | 18 |
| conventions | 13 |
| dev | 10 |
| docker | 4 |
| tools | 3 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 517 |
| .java | 364 |
| .mdx | 71 |
| .go | 45 |
| .scala | 43 |
| .astro | 30 |
| .ts | 30 |
| .md | 25 |
| .tsx | 21 |
| [no-ext] | 20 |
| .css | 17 |
| .svg | 14 |
| .yml | 14 |
| .json | 13 |
| .kts | 11 |
| .yaml | 8 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
