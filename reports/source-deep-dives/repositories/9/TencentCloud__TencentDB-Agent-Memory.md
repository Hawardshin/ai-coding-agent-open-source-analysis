# TencentCloud/TencentDB-Agent-Memory 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

TencentDB Agent Memory delivers fully local long-term memory for AI Agents via a 4-tier progressive pipeline, with zero external API dependencies.

## 요약

- 조사 단위: `sources/TencentCloud__TencentDB-Agent-Memory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 169 files, 43 directories, depth score 103, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.ts, src/utils/memory-cleaner.ts, src/offload/index.ts이고, 의존성 단서는 openai, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | TencentCloud/TencentDB-Agent-Memory |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 5871 |
| Forks | 506 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/TencentCloud__TencentDB-Agent-Memory](../../../../sources/TencentCloud__TencentDB-Agent-Memory) |
| 기존 보고서 | [reports/global-trending/repositories/TencentCloud__TencentDB-Agent-Memory.md](../../../global-trending/repositories/TencentCloud__TencentDB-Agent-Memory.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 169 / 43 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, bin, docker, hermes-plugin, scripts, src |
| 상위 확장자 | .ts: 115, .md: 15, .png: 8, .sh: 7, .py: 6, .json: 5, .yml: 4, .mjs: 3, (none): 3, .hermes: 1, .jpg: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 32 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| docker | documentation surface | 1 |
| hermes-plugin | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | npm run build:plugin && npm run build:scripts |
| build | package.json | build:plugin | tsdown |
| build | package.json | build:scripts | npm run build:migrate-sqlite-to-vdb && npm run build:export-tencent-vdb && npm run build:read-local-memory |
| build | package.json | prepack | npm run build |
| build | package.json | build:migrate-sqlite-to-vdb | tsc -p scripts/migrate-sqlite-to-tcvdb/tsconfig.json --noEmitOnError false |
| utility | package.json | migrate-sqlite-to-tcvdb | node ./bin/migrate-sqlite-to-tcvdb.mjs |
| build | package.json | build:export-tencent-vdb | tsc --project scripts/export-tencent-vdb/tsconfig.json |
| utility | package.json | export-tencent-vdb | node ./bin/export-tencent-vdb.mjs |
| build | package.json | build:read-local-memory | tsc --project scripts/read-local-memory/tsconfig.json |
| utility | package.json | read-local-memory | node ./bin/read-local-memory.mjs |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| serve-dev | package.json | postinstall | bash scripts/openclaw-after-tool-call-messages.patch.sh 2>/dev/null \|\| true |
| entrypoint | package.json bin | migrate-sqlite-to-tcvdb.mjs | ./bin/migrate-sqlite-to-tcvdb.mjs |
| entrypoint | package.json bin | export-tencent-vdb.mjs | ./bin/export-tencent-vdb.mjs |
| entrypoint | package.json bin | read-local-memory.mjs | ./bin/read-local-memory.mjs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/index.ts) | retrieval signal |
| retrieval | [src/utils/memory-cleaner.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/memory-cleaner.ts) | retrieval signal |
| retrieval | [src/offload/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/index.ts) | retrieval signal |
| retrieval | [src/offload/local-llm/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/local-llm/index.ts) | retrieval signal |
| entrypoints | [src/gateway/server.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/gateway/server.ts) | entrypoints signal |
| entrypoints | [bin/export-tencent-vdb.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/export-tencent-vdb.mjs) | entrypoints signal |
| entrypoints | [bin/migrate-sqlite-to-tcvdb.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/migrate-sqlite-to-tcvdb.mjs) | entrypoints signal |
| entrypoints | [bin/read-local-memory.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/read-local-memory.mjs) | entrypoints signal |
| docs | [README_CN.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/README_CN.md) | docs signal |
| docs | [README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/README.md) | docs signal |
| docs | [src/cli/README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/cli/README.md) | docs signal |
| docs | [scripts/README.memory-tencentdb-ctl.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/README.memory-tencentdb-ctl.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [src/gateway/server.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/gateway/server.ts)<br>[bin/export-tencent-vdb.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/export-tencent-vdb.mjs)<br>[bin/migrate-sqlite-to-tcvdb.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/migrate-sqlite-to-tcvdb.mjs)<br>[bin/read-local-memory.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/read-local-memory.mjs) |
| agentRuntime | 25 | [SKILL-DIAGNOSTIC-EXPORT.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/SKILL-DIAGNOSTIC-EXPORT.md)<br>[SKILL-MIGRATION.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/SKILL-MIGRATION.md)<br>[SKILL.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/SKILL.md)<br>[src/utils/memory-cleaner.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/memory-cleaner.ts)<br>[src/offload/context-token-tracker.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/context-token-tracker.ts)<br>[src/offload/hooks/after-tool-call.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/hooks/after-tool-call.ts)<br>[src/offload/hooks/before-agent-start.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/hooks/before-agent-start.ts)<br>[src/offload/hooks/before-prompt-build.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/hooks/before-prompt-build.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 28 | [index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/index.ts)<br>[src/utils/memory-cleaner.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/memory-cleaner.ts)<br>[src/offload/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/index.ts)<br>[src/offload/local-llm/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/local-llm/index.ts)<br>[src/core/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/core/index.ts)<br>[src/core/tools/memory-search.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/core/tools/memory-search.ts)<br>[src/core/store/embedding.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/core/store/embedding.ts)<br>[src/core/scene/scene-index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/core/scene/scene-index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 7 | [src/utils/sanitize.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/sanitize.test.ts)<br>[src/utils/time.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/time.test.ts)<br>[src/offload/auth-profile-key.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.test.ts)<br>[src/offload/benchmark-token-estimate.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/benchmark-token-estimate.ts)<br>[hermes-plugin/memory/memory_tencentdb/tests/__init__.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/__init__.py)<br>[hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py)<br>[hermes-plugin/memory/memory_tencentdb/tests/test_memory_tencentdb_recovery.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/test_memory_tencentdb_recovery.py) |
| security | 3 | [src/utils/ensure-hook-policy.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/ensure-hook-policy.ts)<br>[src/offload/auth-profile-key.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.test.ts)<br>[src/offload/auth-profile-key.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.ts) |
| ci | 1 | [.github/workflows/pr-ci.yml](../../../../sources/TencentCloud__TencentDB-Agent-Memory/.github/workflows/pr-ci.yml) |
| container | 1 | [docker/opensource/Dockerfile.hermes](../../../../sources/TencentCloud__TencentDB-Agent-Memory/docker/opensource/Dockerfile.hermes) |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README_CN.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/README_CN.md)<br>[README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/README.md)<br>[src/cli/README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/cli/README.md)<br>[scripts/README.memory-tencentdb-ctl.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/README.memory-tencentdb-ctl.md)<br>[scripts/migrate-sqlite-to-tcvdb/README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/migrate-sqlite-to-tcvdb/README.md)<br>[hermes-plugin/memory/memory_tencentdb/README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/README.md)<br>[docker/opensource/README-hermes.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/docker/opensource/README-hermes.md) |
| config | 4 | [package.json](../../../../sources/TencentCloud__TencentDB-Agent-Memory/package.json)<br>[scripts/read-local-memory/tsconfig.json](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/read-local-memory/tsconfig.json)<br>[scripts/migrate-sqlite-to-tcvdb/tsconfig.json](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/migrate-sqlite-to-tcvdb/tsconfig.json)<br>[scripts/export-tencent-vdb/tsconfig.json](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/export-tencent-vdb/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [src/utils/sanitize.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/sanitize.test.ts)<br>[src/utils/time.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/time.test.ts)<br>[src/offload/auth-profile-key.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.test.ts)<br>[src/offload/benchmark-token-estimate.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/benchmark-token-estimate.ts)<br>[hermes-plugin/memory/memory_tencentdb/tests/__init__.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/__init__.py)<br>[hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py) |
| CI workflow | 1 | [.github/workflows/pr-ci.yml](../../../../sources/TencentCloud__TencentDB-Agent-Memory/.github/workflows/pr-ci.yml) |
| 컨테이너/배포 | 1 | [docker/opensource/Dockerfile.hermes](../../../../sources/TencentCloud__TencentDB-Agent-Memory/docker/opensource/Dockerfile.hermes) |
| 보안/정책 | 3 | [src/utils/ensure-hook-policy.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/ensure-hook-policy.ts)<br>[src/offload/auth-profile-key.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.test.ts)<br>[src/offload/auth-profile-key.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `index.ts`, `src/utils/memory-cleaner.ts`, `src/offload/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/gateway/server.ts`, `bin/export-tencent-vdb.mjs`, `bin/migrate-sqlite-to-tcvdb.mjs`.
3. agent/tool runtime 매핑: `SKILL-DIAGNOSTIC-EXPORT.md`, `SKILL-MIGRATION.md`, `SKILL.md`.
4. retrieval/memory/indexing 확인: `index.ts`, `src/utils/memory-cleaner.ts`, `src/offload/index.ts`.
5. test/eval 파일로 동작 검증: `src/utils/sanitize.test.ts`, `src/utils/time.test.ts`, `src/offload/auth-profile-key.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 TencentDB Agent Memory delivers fully local long term memory for AI Agents via a 4 tier progressive pipeline, with zero . 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, openai, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
