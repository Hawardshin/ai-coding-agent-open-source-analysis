# memvid/memvid 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single-file memory layer. Give your agents instant retrieval and long-term memory.

## 요약

- 조사 단위: `sources/memvid__memvid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 217 files, 30 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/api_embed.rs, src/graph_search.rs, src/text_embed.rs이고, 의존성 단서는 openai, anthropic, next, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | memvid/memvid |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Rust |
| Stars | 15665 |
| Forks | 1352 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/memvid__memvid](../../../../sources/memvid__memvid) |
| 기존 보고서 | [reports/llm-wiki/repositories/memvid__memvid.md](../../../llm-wiki/repositories/memvid__memvid.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 217 / 30 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, benches, data, docker, docs, examples, install, src, tests |
| 상위 확장자 | .rs: 158, .md: 29, (none): 9, .yml: 5, .bytes: 2, .js: 2, .sh: 2, .toml: 2, .txt: 2, .dev: 1, .disable: 1, .lock: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 17 |
| docs | documentation surface | 16 |
| tests | validation surface | 13 |
| examples/text_embed_cache_bench.rs | examples workspace | 2 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| data | top-level component | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/openai_embedding.rs | examples workspace | 1 |
| examples/simd_benchmark.rs | examples workspace | 1 |
| examples/test_implicit_or_bug.rs | examples workspace | 1 |
| examples/test_whisper.rs | examples workspace | 1 |
| examples/text_embedding.rs | examples workspace | 1 |
| install | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| utility | Makefile | download-models | make download-models |
| quality | Makefile | check | make check |
| build | Makefile | build | make build |
| build | Makefile | build-release | make build-release |
| build | Makefile | build-verbose | make build-verbose |
| build | Makefile | build-release-verbose | make build-release-verbose |
| build | Makefile | build-all-features | make build-all-features |
| test | Makefile | test | make test |
| test | Makefile | test-verbose | make test-verbose |
| test | Makefile | test-release | make test-release |
| test | Makefile | test-doc | make test-doc |
| test | Makefile | test-all-targets | make test-all-targets |
| test | Makefile | test-no-fail-fast | make test-no-fail-fast |
| test | Makefile | test-integration | make test-integration |
| test | Makefile | test-unit | make test-unit |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | fmt-check | make fmt-check |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [src/api_embed.rs](../../../../sources/memvid__memvid/src/api_embed.rs) | retrieval signal |
| retrieval | [src/graph_search.rs](../../../../sources/memvid__memvid/src/graph_search.rs) | retrieval signal |
| retrieval | [src/text_embed.rs](../../../../sources/memvid__memvid/src/text_embed.rs) | retrieval signal |
| retrieval | [src/types/embedding_identity.rs](../../../../sources/memvid__memvid/src/types/embedding_identity.rs) | retrieval signal |
| docs | [README.md](../../../../sources/memvid__memvid/README.md) | docs signal |
| docs | [install/README.md](../../../../sources/memvid__memvid/install/README.md) | docs signal |
| docs | [docs/i18n/CONTRIBUTING_TRANSLATIONS.md](../../../../sources/memvid__memvid/docs/i18n/CONTRIBUTING_TRANSLATIONS.md) | docs signal |
| docs | [docs/i18n/README.ar.md](../../../../sources/memvid__memvid/docs/i18n/README.ar.md) | docs signal |
| eval | [MV2_SPEC.md](../../../../sources/memvid__memvid/MV2_SPEC.md) | eval signal |
| eval | [tests/crash_recovery.rs](../../../../sources/memvid__memvid/tests/crash_recovery.rs) | eval signal |
| eval | [tests/doctor_recovery.rs](../../../../sources/memvid__memvid/tests/doctor_recovery.rs) | eval signal |
| eval | [tests/encryption_capsule.rs](../../../../sources/memvid__memvid/tests/encryption_capsule.rs) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 3 | [src/types/memory_card.rs](../../../../sources/memvid__memvid/src/types/memory_card.rs)<br>[src/memvid/memory.rs](../../../../sources/memvid__memvid/src/memvid/memory.rs)<br>[src/memvid/planner.rs](../../../../sources/memvid__memvid/src/memvid/planner.rs) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 13 | [src/api_embed.rs](../../../../sources/memvid__memvid/src/api_embed.rs)<br>[src/graph_search.rs](../../../../sources/memvid__memvid/src/graph_search.rs)<br>[src/text_embed.rs](../../../../sources/memvid__memvid/src/text_embed.rs)<br>[src/types/embedding_identity.rs](../../../../sources/memvid__memvid/src/types/embedding_identity.rs)<br>[src/types/embedding.rs](../../../../sources/memvid__memvid/src/types/embedding.rs)<br>[src/types/graph_query.rs](../../../../sources/memvid__memvid/src/types/graph_query.rs)<br>[src/types/memory_card.rs](../../../../sources/memvid__memvid/src/types/memory_card.rs)<br>[src/memvid/memory.rs](../../../../sources/memvid__memvid/src/memvid/memory.rs) |
| spec | 1 | [MV2_SPEC.md](../../../../sources/memvid__memvid/MV2_SPEC.md) |
| eval | 21 | [MV2_SPEC.md](../../../../sources/memvid__memvid/MV2_SPEC.md)<br>[tests/crash_recovery.rs](../../../../sources/memvid__memvid/tests/crash_recovery.rs)<br>[tests/doctor_recovery.rs](../../../../sources/memvid__memvid/tests/doctor_recovery.rs)<br>[tests/encryption_capsule.rs](../../../../sources/memvid__memvid/tests/encryption_capsule.rs)<br>[tests/lifecycle.rs](../../../../sources/memvid__memvid/tests/lifecycle.rs)<br>[tests/model_consistency.rs](../../../../sources/memvid__memvid/tests/model_consistency.rs)<br>[tests/mutation.rs](../../../../sources/memvid__memvid/tests/mutation.rs)<br>[tests/replay_integrity.rs](../../../../sources/memvid__memvid/tests/replay_integrity.rs) |
| security | 3 | [SECURITY.md](../../../../sources/memvid__memvid/SECURITY.md)<br>[src/types/audit.rs](../../../../sources/memvid__memvid/src/types/audit.rs)<br>[src/memvid/audit.rs](../../../../sources/memvid__memvid/src/memvid/audit.rs) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/memvid__memvid/.github/workflows/ci.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/memvid__memvid/.github/workflows/docker-release.yml) |
| container | 5 | [docker/core/docker-compose.yml](../../../../sources/memvid__memvid/docker/core/docker-compose.yml)<br>[docker/core/Dockerfile](../../../../sources/memvid__memvid/docker/core/Dockerfile)<br>[docker/core/Dockerfile.dev](../../../../sources/memvid__memvid/docker/core/Dockerfile.dev)<br>[docker/core/Dockerfile.test](../../../../sources/memvid__memvid/docker/core/Dockerfile.test)<br>[docker/cli/Dockerfile](../../../../sources/memvid__memvid/docker/cli/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/memvid__memvid/CLAUDE.md) |
| docs | 20 | [README.md](../../../../sources/memvid__memvid/README.md)<br>[install/README.md](../../../../sources/memvid__memvid/install/README.md)<br>[docs/i18n/CONTRIBUTING_TRANSLATIONS.md](../../../../sources/memvid__memvid/docs/i18n/CONTRIBUTING_TRANSLATIONS.md)<br>[docs/i18n/README.ar.md](../../../../sources/memvid__memvid/docs/i18n/README.ar.md)<br>[docs/i18n/README.bn.md](../../../../sources/memvid__memvid/docs/i18n/README.bn.md)<br>[docs/i18n/README.cs.md](../../../../sources/memvid__memvid/docs/i18n/README.cs.md)<br>[docs/i18n/README.es.md](../../../../sources/memvid__memvid/docs/i18n/README.es.md)<br>[docs/i18n/README.fr.md](../../../../sources/memvid__memvid/docs/i18n/README.fr.md) |
| config | 3 | [Cargo.lock](../../../../sources/memvid__memvid/Cargo.lock)<br>[Cargo.toml](../../../../sources/memvid__memvid/Cargo.toml)<br>[Makefile](../../../../sources/memvid__memvid/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 21 | [MV2_SPEC.md](../../../../sources/memvid__memvid/MV2_SPEC.md)<br>[tests/crash_recovery.rs](../../../../sources/memvid__memvid/tests/crash_recovery.rs)<br>[tests/doctor_recovery.rs](../../../../sources/memvid__memvid/tests/doctor_recovery.rs)<br>[tests/encryption_capsule.rs](../../../../sources/memvid__memvid/tests/encryption_capsule.rs)<br>[tests/lifecycle.rs](../../../../sources/memvid__memvid/tests/lifecycle.rs)<br>[tests/model_consistency.rs](../../../../sources/memvid__memvid/tests/model_consistency.rs) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/memvid__memvid/.github/workflows/ci.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/memvid__memvid/.github/workflows/docker-release.yml) |
| 컨테이너/배포 | 5 | [docker/core/docker-compose.yml](../../../../sources/memvid__memvid/docker/core/docker-compose.yml)<br>[docker/core/Dockerfile](../../../../sources/memvid__memvid/docker/core/Dockerfile)<br>[docker/core/Dockerfile.dev](../../../../sources/memvid__memvid/docker/core/Dockerfile.dev)<br>[docker/core/Dockerfile.test](../../../../sources/memvid__memvid/docker/core/Dockerfile.test)<br>[docker/cli/Dockerfile](../../../../sources/memvid__memvid/docker/cli/Dockerfile) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/memvid__memvid/SECURITY.md)<br>[src/types/audit.rs](../../../../sources/memvid__memvid/src/types/audit.rs)<br>[src/memvid/audit.rs](../../../../sources/memvid__memvid/src/memvid/audit.rs) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/memvid__memvid/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/api_embed.rs`, `src/graph_search.rs`, `src/text_embed.rs`.
2. agent/tool runtime 매핑: `src/types/memory_card.rs`, `src/memvid/memory.rs`, `src/memvid/planner.rs`.
3. retrieval/memory/indexing 확인: `src/api_embed.rs`, `src/graph_search.rs`, `src/text_embed.rs`.
4. test/eval 파일로 동작 검증: `MV2_SPEC.md`, `tests/crash_recovery.rs`, `tests/doctor_recovery.rs`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single file memory layer. Give your agents . 핵심 구조 신호는 Rust, Cargo.toml, Makefile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
