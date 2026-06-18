# ggml-org/llama.cpp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 2985 files, 347 directories.

## 요약

- 조사 단위: `sources/ggml-org__llama.cpp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,976 files, 341 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tools/ui/tests/unit/mcp-service.test.ts, tools/ui/src/routes/mcp-servers/+page.svelte, tools/ui/src/lib/utils/mcp.ts이고, 의존성 단서는 torch, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ggml-org/llama.cpp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C++ |
| Stars | 117045 |
| Forks | 19682 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/ggml-org__llama.cpp](../../../../sources/ggml-org__llama.cpp) |
| 기존 보고서 | [reports/global-trending/repositories/ggml-org__llama.cpp.md](../../../global-trending/repositories/ggml-org__llama.cpp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2976 / 341 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .devops, .gemini, .github, .pi, app, benches, ci, cmake, common, conversion, docs, examples, ggml, gguf-py, grammars, include, licenses, media, models, pocs |
| 상위 확장자 | .cpp: 544, .svelte: 281, .ts: 273, .h: 228, .py: 196, .cu: 184, .comp: 160, .cl: 142, .md: 120, .txt: 98, .cuh: 74, .sh: 66 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/gguf-hash | examples workspace | 3 |
| examples/model-conversion | examples workspace | 3 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| benches | validation surface | 1 |
| ci | ci surface | 1 |
| cmake | top-level component | 1 |
| common | top-level component | 1 |
| conversion | top-level component | 1 |
| docs | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/batched.swift | examples workspace | 1 |
| examples/speculative-simple | examples workspace | 1 |
| examples/sycl | examples workspace | 1 |
| examples/training | examples workspace | 1 |
| ggml | top-level component | 1 |
| gguf-py | top-level component | 1 |
| grammars | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | https | make https |
| utility | pyproject.toml | llama-convert-hf-to-gguf | llama-convert-hf-to-gguf |
| utility | pyproject.toml | llama-convert-lora-to-gguf | llama-convert-lora-to-gguf |
| utility | pyproject.toml | llama-convert-llama-ggml-to-gguf | llama-convert-llama-ggml-to-gguf |
| utility | pyproject.toml | llama-ggml-vk-generate-shaders | llama-ggml-vk-generate-shaders |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tools/ui/tests/unit/mcp-service.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/mcp-service.test.ts) | mcp signal |
| mcp | [tools/ui/src/routes/mcp-servers/+page.svelte](../../../../sources/ggml-org__llama.cpp/tools/ui/src/routes/mcp-servers/+page.svelte) | mcp signal |
| mcp | [tools/ui/src/lib/utils/mcp.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/utils/mcp.ts) | mcp signal |
| mcp | [tools/ui/src/lib/types/mcp.d.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/types/mcp.d.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ggml-org__llama.cpp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/CMakeLists.txt](../../../../sources/ggml-org__llama.cpp/tools/CMakeLists.txt) | agentRuntime signal |
| agentRuntime | [tools/ui/.env.example](../../../../sources/ggml-org__llama.cpp/tools/ui/.env.example) | agentRuntime signal |
| agentRuntime | [tools/ui/.gitignore](../../../../sources/ggml-org__llama.cpp/tools/ui/.gitignore) | agentRuntime signal |
| entrypoints | [tools/ui/src/app.css](../../../../sources/ggml-org__llama.cpp/tools/ui/src/app.css) | entrypoints signal |
| entrypoints | [tools/ui/src/app.d.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/app.d.ts) | entrypoints signal |
| entrypoints | [tools/ui/src/app.html](../../../../sources/ggml-org__llama.cpp/tools/ui/src/app.html) | entrypoints signal |
| entrypoints | [tools/ui/src/lib/stores/server.svelte.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/stores/server.svelte.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [tools/ui/src/app.css](../../../../sources/ggml-org__llama.cpp/tools/ui/src/app.css)<br>[tools/ui/src/app.d.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/app.d.ts)<br>[tools/ui/src/app.html](../../../../sources/ggml-org__llama.cpp/tools/ui/src/app.html)<br>[tools/ui/src/lib/stores/server.svelte.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/stores/server.svelte.ts)<br>[tools/ui/src/lib/enums/server.enums.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/enums/server.enums.ts)<br>[tools/ui/.storybook/main.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/.storybook/main.ts)<br>[tools/server/server.cpp](../../../../sources/ggml-org__llama.cpp/tools/server/server.cpp)<br>[.github/workflows/server.yml](../../../../sources/ggml-org__llama.cpp/.github/workflows/server.yml) |
| agentRuntime | 797 | [AGENTS.md](../../../../sources/ggml-org__llama.cpp/AGENTS.md)<br>[tools/CMakeLists.txt](../../../../sources/ggml-org__llama.cpp/tools/CMakeLists.txt)<br>[tools/ui/.env.example](../../../../sources/ggml-org__llama.cpp/tools/ui/.env.example)<br>[tools/ui/.gitignore](../../../../sources/ggml-org__llama.cpp/tools/ui/.gitignore)<br>[tools/ui/.npmrc](../../../../sources/ggml-org__llama.cpp/tools/ui/.npmrc)<br>[tools/ui/.prettierignore](../../../../sources/ggml-org__llama.cpp/tools/ui/.prettierignore)<br>[tools/ui/.prettierrc](../../../../sources/ggml-org__llama.cpp/tools/ui/.prettierrc)<br>[tools/ui/CMakeLists.txt](../../../../sources/ggml-org__llama.cpp/tools/ui/CMakeLists.txt) |
| mcp | 34 | [tools/ui/tests/unit/mcp-service.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/mcp-service.test.ts)<br>[tools/ui/src/routes/mcp-servers/+page.svelte](../../../../sources/ggml-org__llama.cpp/tools/ui/src/routes/mcp-servers/+page.svelte)<br>[tools/ui/src/lib/utils/mcp.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/utils/mcp.ts)<br>[tools/ui/src/lib/types/mcp.d.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/types/mcp.d.ts)<br>[tools/ui/src/lib/stores/mcp-resources.svelte.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/stores/mcp-resources.svelte.ts)<br>[tools/ui/src/lib/stores/mcp.svelte.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/stores/mcp.svelte.ts)<br>[tools/ui/src/lib/services/mcp.service.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/mcp.service.ts)<br>[tools/ui/src/lib/enums/mcp.enums.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/enums/mcp.enums.ts) |
| retrieval | 77 | [tools/ui/embed.cpp](../../../../sources/ggml-org__llama.cpp/tools/ui/embed.cpp)<br>[tools/ui/src/lib/utils/index.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/utils/index.ts)<br>[tools/ui/src/lib/types/index.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/types/index.ts)<br>[tools/ui/src/lib/services/index.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/index.ts)<br>[tools/ui/src/lib/enums/index.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/enums/index.ts)<br>[tools/ui/src/lib/contexts/index.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/contexts/index.ts)<br>[tools/ui/src/lib/constants/index.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/constants/index.ts)<br>[tools/ui/src/lib/components/ui/tooltip/index.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/components/ui/tooltip/index.ts) |
| spec | 28 | [requirements.txt](../../../../sources/ggml-org__llama.cpp/requirements.txt)<br>[tools/ui/tests/unit/pwa.spec.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/pwa.spec.ts)<br>[tools/ui/src/lib/services/parameter-sync.service.spec.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/parameter-sync.service.spec.ts)<br>[tools/ui/docs/architecture/high-level-architecture-simplified.md](../../../../sources/ggml-org__llama.cpp/tools/ui/docs/architecture/high-level-architecture-simplified.md)<br>[tools/ui/docs/architecture/high-level-architecture.md](../../../../sources/ggml-org__llama.cpp/tools/ui/docs/architecture/high-level-architecture.md)<br>[tools/server/tests/requirements.txt](../../../../sources/ggml-org__llama.cpp/tools/server/tests/requirements.txt)<br>[tools/server/bench/requirements.txt](../../../../sources/ggml-org__llama.cpp/tools/server/bench/requirements.txt)<br>[tools/server/bench/speed-bench/requirements.txt](../../../../sources/ggml-org__llama.cpp/tools/server/bench/speed-bench/requirements.txt) |
| eval | 222 | [tools/ui/tests/unit/agentic-sections.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/agentic-sections.test.ts)<br>[tools/ui/tests/unit/agentic-strip.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/agentic-strip.test.ts)<br>[tools/ui/tests/unit/clipboard.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/clipboard.test.ts)<br>[tools/ui/tests/unit/continue-intent.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/continue-intent.test.ts)<br>[tools/ui/tests/unit/jpeg-orientation.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/jpeg-orientation.test.ts)<br>[tools/ui/tests/unit/latex-protection.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/latex-protection.test.ts)<br>[tools/ui/tests/unit/mcp-service.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/mcp-service.test.ts)<br>[tools/ui/tests/unit/model-id-parser.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/model-id-parser.test.ts) |
| security | 6 | [SECURITY.md](../../../../sources/ggml-org__llama.cpp/SECURITY.md)<br>[tools/ui/src/lib/services/sandbox-harness.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/sandbox-harness.ts)<br>[tools/ui/src/lib/services/sandbox-worker.js](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/sandbox-worker.js)<br>[tools/ui/src/lib/services/sandbox.service.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/sandbox.service.ts)<br>[tools/ui/src/lib/constants/sandbox.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/constants/sandbox.ts)<br>[tools/server/tests/unit/test_security.py](../../../../sources/ggml-org__llama.cpp/tools/server/tests/unit/test_security.py) |
| ci | 52 | [ci/README-MUSA.md](../../../../sources/ggml-org__llama.cpp/ci/README-MUSA.md)<br>[ci/README.md](../../../../sources/ggml-org__llama.cpp/ci/README.md)<br>[ci/run.sh](../../../../sources/ggml-org__llama.cpp/ci/run.sh)<br>[.github/workflows/ai-issues.yml](../../../../sources/ggml-org__llama.cpp/.github/workflows/ai-issues.yml)<br>[.github/workflows/bench.yml.disabled](../../../../sources/ggml-org__llama.cpp/.github/workflows/bench.yml.disabled)<br>[.github/workflows/build-3rd-party.yml](../../../../sources/ggml-org__llama.cpp/.github/workflows/build-3rd-party.yml)<br>[.github/workflows/build-and-test-snapdragon.yml](../../../../sources/ggml-org__llama.cpp/.github/workflows/build-and-test-snapdragon.yml)<br>[.github/workflows/build-android.yml](../../../../sources/ggml-org__llama.cpp/.github/workflows/build-android.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/ggml-org__llama.cpp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ggml-org__llama.cpp/CLAUDE.md) |
| docs | 125 | [README.md](../../../../sources/ggml-org__llama.cpp/README.md)<br>[tools/ui/README.md](../../../../sources/ggml-org__llama.cpp/tools/ui/README.md)<br>[tools/ui/tests/stories/fixtures/readme.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/stories/fixtures/readme.ts)<br>[tools/ui/docs/flows/chat-flow.md](../../../../sources/ggml-org__llama.cpp/tools/ui/docs/flows/chat-flow.md)<br>[tools/ui/docs/flows/conversations-flow.md](../../../../sources/ggml-org__llama.cpp/tools/ui/docs/flows/conversations-flow.md)<br>[tools/ui/docs/flows/data-flow-simplified-model-mode.md](../../../../sources/ggml-org__llama.cpp/tools/ui/docs/flows/data-flow-simplified-model-mode.md)<br>[tools/ui/docs/flows/data-flow-simplified-router-mode.md](../../../../sources/ggml-org__llama.cpp/tools/ui/docs/flows/data-flow-simplified-router-mode.md)<br>[tools/ui/docs/flows/database-flow.md](../../../../sources/ggml-org__llama.cpp/tools/ui/docs/flows/database-flow.md) |
| config | 30 | [Makefile](../../../../sources/ggml-org__llama.cpp/Makefile)<br>[pyproject.toml](../../../../sources/ggml-org__llama.cpp/pyproject.toml)<br>[requirements.txt](../../../../sources/ggml-org__llama.cpp/requirements.txt)<br>[tools/ui/package.json](../../../../sources/ggml-org__llama.cpp/tools/ui/package.json)<br>[tools/ui/tsconfig.json](../../../../sources/ggml-org__llama.cpp/tools/ui/tsconfig.json)<br>[tools/server/tests/requirements.txt](../../../../sources/ggml-org__llama.cpp/tools/server/tests/requirements.txt)<br>[tools/server/bench/requirements.txt](../../../../sources/ggml-org__llama.cpp/tools/server/bench/requirements.txt)<br>[tools/server/bench/speed-bench/requirements.txt](../../../../sources/ggml-org__llama.cpp/tools/server/bench/speed-bench/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 222 | [tools/ui/tests/unit/agentic-sections.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/agentic-sections.test.ts)<br>[tools/ui/tests/unit/agentic-strip.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/agentic-strip.test.ts)<br>[tools/ui/tests/unit/clipboard.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/clipboard.test.ts)<br>[tools/ui/tests/unit/continue-intent.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/continue-intent.test.ts)<br>[tools/ui/tests/unit/jpeg-orientation.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/jpeg-orientation.test.ts)<br>[tools/ui/tests/unit/latex-protection.test.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/tests/unit/latex-protection.test.ts) |
| CI workflow | 52 | [ci/README-MUSA.md](../../../../sources/ggml-org__llama.cpp/ci/README-MUSA.md)<br>[ci/README.md](../../../../sources/ggml-org__llama.cpp/ci/README.md)<br>[ci/run.sh](../../../../sources/ggml-org__llama.cpp/ci/run.sh)<br>[.github/workflows/ai-issues.yml](../../../../sources/ggml-org__llama.cpp/.github/workflows/ai-issues.yml)<br>[.github/workflows/bench.yml.disabled](../../../../sources/ggml-org__llama.cpp/.github/workflows/bench.yml.disabled)<br>[.github/workflows/build-3rd-party.yml](../../../../sources/ggml-org__llama.cpp/.github/workflows/build-3rd-party.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 6 | [SECURITY.md](../../../../sources/ggml-org__llama.cpp/SECURITY.md)<br>[tools/ui/src/lib/services/sandbox-harness.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/sandbox-harness.ts)<br>[tools/ui/src/lib/services/sandbox-worker.js](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/sandbox-worker.js)<br>[tools/ui/src/lib/services/sandbox.service.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/services/sandbox.service.ts)<br>[tools/ui/src/lib/constants/sandbox.ts](../../../../sources/ggml-org__llama.cpp/tools/ui/src/lib/constants/sandbox.ts)<br>[tools/server/tests/unit/test_security.py](../../../../sources/ggml-org__llama.cpp/tools/server/tests/unit/test_security.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/ggml-org__llama.cpp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ggml-org__llama.cpp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/ui/tests/unit/mcp-service.test.ts`, `tools/ui/src/routes/mcp-servers/+page.svelte`, `tools/ui/src/lib/utils/mcp.ts`.
2. entrypoint를 따라 실행 흐름 확인: `tools/ui/src/app.css`, `tools/ui/src/app.d.ts`, `tools/ui/src/app.html`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/CMakeLists.txt`, `tools/ui/.env.example`.
4. retrieval/memory/indexing 확인: `tools/ui/embed.cpp`, `tools/ui/src/lib/utils/index.ts`, `tools/ui/src/lib/types/index.ts`.
5. test/eval 파일로 동작 검증: `tools/ui/tests/unit/agentic-sections.test.ts`, `tools/ui/tests/unit/agentic-strip.test.ts`, `tools/ui/tests/unit/clipboard.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2985 files, 347 directories.. 핵심 구조 신호는 C++, pyproject.toml, requirements.txt, Makefile, README.md, AGENTS.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
