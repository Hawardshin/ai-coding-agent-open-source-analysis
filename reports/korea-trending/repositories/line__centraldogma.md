# line/centraldogma

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/centraldogma |
| local path | sources/line__centraldogma |
| HEAD | 9e7b7f6 |
| stars/forks | 663 / 133 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-06-16T08:21:23Z |
| trendScore / priorityScore | 161 / 401 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | README.md, gradle/scripts/README.md, .github/pom.xml |
| Security / compliance | 154 | server/build.gradle, .github/workflows/actions_build.yml, .github/workflows/publish-release.yml |
| LLM wiki / memory / graph | 69 | build.gradle, licenses/LICENSE.jetty-alpn-agent.al20.txt, server/src/test/java/com/linecorp/centraldogma/server/internal/storage/repository/git/GitCrudRepositoryTest.java |
| Frontend / developer experience | 23 | webapp/README.md, webapp/next.config.js, webapp/package.json |
| Infra / observability | 13 | server/build.gradle, xds/build.gradle, it/xds-k8s-node-ip-extractor/build.gradle |
| Spec / doc-driven workflow | 9 | benchmarks/jmh/README.md, server/src/test/java/com/linecorp/centraldogma/server/internal/storage/repository/git/rocksdb/EncryptionGitStorageTest.java, server/src/test/java/com/linecorp/centraldogma/server/storage/encryption/RepositoryReencryptionTest.java |
| RAG / retrieval | 6 | gradle/scripts/README.md, server/src/main/java/com/linecorp/centraldogma/server/internal/storage/repository/DefaultMetaRepository.java, server/src/main/java/com/linecorp/centraldogma/server/internal/storage/repository/git/CommitExecutor.java |
| AI agent / tool use | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1472 |
| manifests | 40 |
| docs | 19 |
| tests | 334 |
| ci/ops | 20 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Central Dogma |
| headings | Central Dogma / How to build / How to ask a question / How to contribute |
| excerpt | Visit the official web site https //line.github.io/centraldogma/ for more information. Central Dogma ! CI https //github.com/line/centraldogma/actions/workflows/actions build.yml/badge.svg?branch=main&event=push https //github.com/line/centraldogma/actions/workflows/actions build.yml ! codecov.io https //codecov.io/github/line/centraldogma/coverage.svg?branch=main https //codecov.io/github/line/centraldogma?branch=main ! Latest Release Version https //img.shields.io/github/v/release/line/centraldogma https //github.com/line/centraldogma/releases/latest ! Discord Server https //img.shields.io/badge/join discord 5865F2?logo=discord&logoColor=white https //armeria.dev/s/discord Central Dogma is |


## 주요 파일

### Manifests

- benchmarks/jmh/README.md
- README.md
- webapp/README.md
- gradle/scripts/README.md
- benchmarks/jmh/build.gradle
- testing-internal/build.gradle
- .github/pom.xml
- bom/build.gradle
- build.gradle
- common-legacy/build.gradle
- common/build.gradle
- javadoc/build.gradle
- server-mirror-dogma/build.gradle
- server-mirror-git/build.gradle
- server/build.gradle
- site/build.gradle
- testing/common/build.gradle
- testing/junit/build.gradle
- testing/junit4/build.gradle
- webapp/build.gradle


### Spec / Docs / Prompt Artifacts

- .claude/skills/release-note/SKILL.md
- .claude/skills/upgrade-deps/SKILL.md


### Agent Instruction Files

- .claude/skills/release-note/SKILL.md
- .claude/skills/upgrade-deps/SKILL.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| server | 507 |
| webapp | 249 |
| common | 146 |
| client | 121 |
| gradle | 100 |
| it | 70 |
| xds | 61 |
| licenses | 58 |
| site | 30 |
| server-auth | 22 |
| server-mirror-git | 19 |
| testing-internal | 17 |
| common-legacy | 14 |
| testing | 12 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 905 |
| .tsx | 159 |
| .ts | 64 |
| .gradle | 57 |
| .txt | 57 |
| .json | 23 |
| [no-ext] | 17 |
| .exe | 14 |
| .linux-aarch_64 | 14 |
| .linux-x86_64 | 14 |
| .osx-aarch_64 | 14 |
| .osx-x86_64 | 14 |
| .yml | 12 |
| .rst | 11 |
| .js | 10 |
| .md | 8 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
