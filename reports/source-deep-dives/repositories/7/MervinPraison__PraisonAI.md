# MervinPraison/PraisonAI 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

PraisonAI 🦞 — Hire a 24/7 AI Workforce. Stop writing boilerplate and start shipping autonomous self-improving agents that research, plan, code, and execute tasks. Deployed in 5 lines of code with built-in memory, RAG, and support for 100+ LLMs.

## 요약

- 조사 단위: `sources/MervinPraison__PraisonAI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,571 files, 727 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/praisonai-ts/tests/unit/memory-features.test.ts, src/praisonai-ts/tests/unit/services/knowledge.test.ts, src/praisonai-ts/tests/unit/rag/models.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MervinPraison/PraisonAI |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 8173 |
| Forks | 1263 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MervinPraison__PraisonAI](../../../../sources/MervinPraison__PraisonAI) |
| 기존 보고서 | [reports/global-trending/repositories/MervinPraison__PraisonAI.md](../../../global-trending/repositories/MervinPraison__PraisonAI.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4571 / 727 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, docker, examples, src, tests |
| 상위 확장자 | .py: 3503, .ts: 466, .md: 127, .ipynb: 107, .yaml: 76, .rs: 65, .yml: 37, .json: 36, .svg: 25, (none): 22, .sh: 20, .png: 15 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 305 |
| examples/python | examples workspace | 8 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/rag | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| examples/recipes | examples workspace | 1 |
| examples/registry | examples workspace | 1 |
| examples/run_history | examples workspace | 1 |
| examples/security | examples workspace | 1 |
| examples/serve | examples workspace | 1 |
| examples/terminal_bench | examples workspace | 1 |
| examples/yaml | examples workspace | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [src/praisonai-ts/tests/unit/memory-features.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/memory-features.test.ts) | retrieval signal |
| retrieval | [src/praisonai-ts/tests/unit/services/knowledge.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/services/knowledge.test.ts) | retrieval signal |
| retrieval | [src/praisonai-ts/tests/unit/rag/models.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/rag/models.test.ts) | retrieval signal |
| retrieval | [src/praisonai-ts/tests/unit/memory/memory.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/memory/memory.test.ts) | retrieval signal |
| entrypoints | [src/praisonai-ts/src/index.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/index.ts) | entrypoints signal |
| entrypoints | [src/praisonai-ts/src/main.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/main.ts) | entrypoints signal |
| entrypoints | [src/praisonai-ts/src/mcp/server.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/server.ts) | entrypoints signal |
| entrypoints | [src/praisonai-ts/src/ai/server.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/ai/server.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/MervinPraison__PraisonAI/README.md) | docs signal |
| docs | [src/praisonai-ts/README.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/README.md) | docs signal |
| docs | [src/praisonai-ts/src/tools/README.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/tools/README.md) | docs signal |
| docs | [src/praisonai-ts/examples/README-tool-examples.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/examples/README-tool-examples.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 20 | [src/praisonai-ts/src/index.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/index.ts)<br>[src/praisonai-ts/src/main.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/main.ts)<br>[src/praisonai-ts/src/mcp/server.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/server.ts)<br>[src/praisonai-ts/src/ai/server.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/ai/server.ts)<br>[src/praisonai-rust/praisonai-cli/src/main.rs](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/praisonai-cli/src/main.rs)<br>[src/praisonai-platform/praisonai_platform/__main__.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai-platform/praisonai_platform/__main__.py)<br>[src/praisonai-agents/praisonaiagents/main.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/praisonaiagents/main.py)<br>[src/praisonai-agents/praisonaiagents/server/server.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/praisonaiagents/server/server.py) |
| agentRuntime | 774 | [AGENTS.md](../../../../sources/MervinPraison__PraisonAI/AGENTS.md)<br>[src/praisonai-ts/AGENTS.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/AGENTS.md)<br>[src/praisonai-ts/tests/unit/agent-api.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/agent-api.test.ts)<br>[src/praisonai-ts/tests/unit/memory-features.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/memory-features.test.ts)<br>[src/praisonai-ts/tests/unit/workflows/workflow.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/workflows/workflow.test.ts)<br>[src/praisonai-ts/tests/unit/tools/base-tool.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/tools/base-tool.test.ts)<br>[src/praisonai-ts/tests/unit/tools/registry.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/tools/registry.test.ts)<br>[src/praisonai-ts/tests/unit/tools/tool-decorator.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/tools/tool-decorator.test.ts) |
| mcp | 224 | [src/praisonai-ts/src/mcp/index.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/index.ts)<br>[src/praisonai-ts/src/mcp/security.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/security.ts)<br>[src/praisonai-ts/src/mcp/server.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/server.ts)<br>[src/praisonai-ts/src/mcp/session.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/session.ts)<br>[src/praisonai-ts/src/mcp/transports.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/transports.ts)<br>[src/praisonai-ts/src/cli/commands/mcp.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/cli/commands/mcp.ts)<br>[src/praisonai-ts/src/ai/mcp.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/ai/mcp.ts)<br>[src/praisonai-ts/examples/tools/mcp-sse.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/examples/tools/mcp-sse.ts) |
| retrieval | 390 | [src/praisonai-ts/tests/unit/memory-features.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/memory-features.test.ts)<br>[src/praisonai-ts/tests/unit/services/knowledge.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/services/knowledge.test.ts)<br>[src/praisonai-ts/tests/unit/rag/models.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/rag/models.test.ts)<br>[src/praisonai-ts/tests/unit/memory/memory.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/memory/memory.test.ts)<br>[src/praisonai-ts/tests/unit/knowledge/chunking.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/knowledge/chunking.test.ts)<br>[src/praisonai-ts/tests/unit/knowledge/rag.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/knowledge/rag.test.ts)<br>[src/praisonai-ts/src/index.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/index.ts)<br>[src/praisonai-ts/src/workflows/index.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/workflows/index.ts) |
| spec | 14 | [src/praisonai-ts/tests/cli/cli-spec.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/cli/cli-spec.test.ts)<br>[src/praisonai-ts/src/cli/spec/cli-spec.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/cli/spec/cli-spec.ts)<br>[src/praisonai-ts/src/cli/spec/index.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/cli/spec/index.ts)<br>[src/praisonai-ts/specs/cli-spec.v1.yaml](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/specs/cli-spec.v1.yaml)<br>[src/praisonai-agents/requirements.txt](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/requirements.txt)<br>[src/praisonai/requirements.txt](../../../../sources/MervinPraison__PraisonAI/src/praisonai/requirements.txt)<br>[src/praisonai/tests/unit/test_approval_spec.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/test_approval_spec.py)<br>[src/praisonai/praisonai/_approval_spec.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/praisonai/_approval_spec.py) |
| eval | 1558 | [tests/test_wrapper_layer_regression.py](../../../../sources/MervinPraison__PraisonAI/tests/test_wrapper_layer_regression.py)<br>[src/praisonai-ts/tests/.gitkeep](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/.gitkeep)<br>[src/praisonai-ts/tests/jest.setup.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/jest.setup.ts)<br>[src/praisonai-ts/tests/test.env](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/test.env)<br>[src/praisonai-ts/tests/unit/agent-api.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/agent-api.test.ts)<br>[src/praisonai-ts/tests/unit/ai-sdk-v6-parity.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/ai-sdk-v6-parity.test.ts)<br>[src/praisonai-ts/tests/unit/cli-features.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/cli-features.test.ts)<br>[src/praisonai-ts/tests/unit/memory-features.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/memory-features.test.ts) |
| security | 152 | [src/praisonai-ts/tests/unit/security-hardening.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/security-hardening.test.ts)<br>[src/praisonai-ts/tests/unit/guardrails/llm-guardrail.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/guardrails/llm-guardrail.test.ts)<br>[src/praisonai-ts/src/mcp/security.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/security.ts)<br>[src/praisonai-ts/src/guardrails/llm-guardrail.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/guardrails/llm-guardrail.ts)<br>[src/praisonai-ts/src/cli/features/sandbox-executor.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/cli/features/sandbox-executor.ts)<br>[src/praisonai-ts/src/cli/commands/guardrail.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/cli/commands/guardrail.ts)<br>[src/praisonai-ts/src/cli/commands/sandbox.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/cli/commands/sandbox.ts)<br>[src/praisonai-rust/praisonai/src/sandbox/mod.rs](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/praisonai/src/sandbox/mod.rs) |
| ci | 29 | [src/praisonai-agents/.github/workflows/benchmark.yml](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/.github/workflows/benchmark.yml)<br>[.github/workflows/auto-issue-comment.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/auto-issue-comment.yml)<br>[.github/workflows/auto-pr-comment.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/auto-pr-comment.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/benchmark.yml)<br>[.github/workflows/build-image.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/build-image.yml)<br>[.github/workflows/claude-issue-triage.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/claude-issue-triage.yml)<br>[.github/workflows/claude-oauth.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/claude-oauth.yml)<br>[.github/workflows/claude.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/claude.yml) |
| container | 42 | [src/praisonai-agents/.devcontainer/Dockerfile](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/.devcontainer/Dockerfile)<br>[src/praisonai/docker-compose.bot.yml](../../../../sources/MervinPraison__PraisonAI/src/praisonai/docker-compose.bot.yml)<br>[src/praisonai/Dockerfile.bot](../../../../sources/MervinPraison__PraisonAI/src/praisonai/Dockerfile.bot)<br>[src/praisonai/tests/unit/deploy/__init__.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/deploy/__init__.py)<br>[src/praisonai/tests/unit/deploy/test_api_auth_default.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/deploy/test_api_auth_default.py)<br>[src/praisonai/tests/unit/deploy/test_api.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/deploy/test_api.py)<br>[src/praisonai/tests/unit/deploy/test_cli.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/deploy/test_cli.py)<br>[src/praisonai/tests/unit/deploy/test_docker.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/deploy/test_docker.py) |
| instruction | 4 | [AGENTS.md](../../../../sources/MervinPraison__PraisonAI/AGENTS.md)<br>[src/praisonai-ts/AGENTS.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/AGENTS.md)<br>[src/praisonai-rust/AGENTS.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/AGENTS.md)<br>[src/praisonai-agents/AGENTS.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/AGENTS.md) |
| docs | 66 | [README.md](../../../../sources/MervinPraison__PraisonAI/README.md)<br>[src/praisonai-ts/README.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/README.md)<br>[src/praisonai-ts/src/tools/README.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/tools/README.md)<br>[src/praisonai-ts/examples/README-tool-examples.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/examples/README-tool-examples.md)<br>[src/praisonai-ts/examples/tools/README.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/examples/tools/README.md)<br>[src/praisonai-ts/examples/concepts/README.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/examples/concepts/README.md)<br>[src/praisonai-rust/README.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/README.md)<br>[src/praisonai-agents/praisonaiagents/tools/README.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/praisonaiagents/tools/README.md) |
| config | 18 | [src/praisonai-ts/package.json](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/package.json)<br>[src/praisonai-ts/tsconfig.json](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tsconfig.json)<br>[src/praisonai-rust/Cargo.toml](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/Cargo.toml)<br>[src/praisonai-rust/praisonai-derive/Cargo.toml](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/praisonai-derive/Cargo.toml)<br>[src/praisonai-rust/praisonai-cli/Cargo.toml](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/praisonai-cli/Cargo.toml)<br>[src/praisonai-rust/praisonai/Cargo.toml](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/praisonai/Cargo.toml)<br>[src/praisonai-platform/pyproject.toml](../../../../sources/MervinPraison__PraisonAI/src/praisonai-platform/pyproject.toml)<br>[src/praisonai-platform/uv.lock](../../../../sources/MervinPraison__PraisonAI/src/praisonai-platform/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1558 | [tests/test_wrapper_layer_regression.py](../../../../sources/MervinPraison__PraisonAI/tests/test_wrapper_layer_regression.py)<br>[src/praisonai-ts/tests/.gitkeep](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/.gitkeep)<br>[src/praisonai-ts/tests/jest.setup.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/jest.setup.ts)<br>[src/praisonai-ts/tests/test.env](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/test.env)<br>[src/praisonai-ts/tests/unit/agent-api.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/agent-api.test.ts)<br>[src/praisonai-ts/tests/unit/ai-sdk-v6-parity.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/ai-sdk-v6-parity.test.ts) |
| CI workflow | 29 | [src/praisonai-agents/.github/workflows/benchmark.yml](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/.github/workflows/benchmark.yml)<br>[.github/workflows/auto-issue-comment.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/auto-issue-comment.yml)<br>[.github/workflows/auto-pr-comment.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/auto-pr-comment.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/benchmark.yml)<br>[.github/workflows/build-image.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/build-image.yml)<br>[.github/workflows/claude-issue-triage.yml](../../../../sources/MervinPraison__PraisonAI/.github/workflows/claude-issue-triage.yml) |
| 컨테이너/배포 | 42 | [src/praisonai-agents/.devcontainer/Dockerfile](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/.devcontainer/Dockerfile)<br>[src/praisonai/docker-compose.bot.yml](../../../../sources/MervinPraison__PraisonAI/src/praisonai/docker-compose.bot.yml)<br>[src/praisonai/Dockerfile.bot](../../../../sources/MervinPraison__PraisonAI/src/praisonai/Dockerfile.bot)<br>[src/praisonai/tests/unit/deploy/__init__.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/deploy/__init__.py)<br>[src/praisonai/tests/unit/deploy/test_api_auth_default.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/deploy/test_api_auth_default.py)<br>[src/praisonai/tests/unit/deploy/test_api.py](../../../../sources/MervinPraison__PraisonAI/src/praisonai/tests/unit/deploy/test_api.py) |
| 보안/정책 | 152 | [src/praisonai-ts/tests/unit/security-hardening.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/security-hardening.test.ts)<br>[src/praisonai-ts/tests/unit/guardrails/llm-guardrail.test.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/tests/unit/guardrails/llm-guardrail.test.ts)<br>[src/praisonai-ts/src/mcp/security.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/mcp/security.ts)<br>[src/praisonai-ts/src/guardrails/llm-guardrail.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/guardrails/llm-guardrail.ts)<br>[src/praisonai-ts/src/cli/features/sandbox-executor.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/cli/features/sandbox-executor.ts)<br>[src/praisonai-ts/src/cli/commands/guardrail.ts](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/src/cli/commands/guardrail.ts) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/MervinPraison__PraisonAI/AGENTS.md)<br>[src/praisonai-ts/AGENTS.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-ts/AGENTS.md)<br>[src/praisonai-rust/AGENTS.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-rust/AGENTS.md)<br>[src/praisonai-agents/AGENTS.md](../../../../sources/MervinPraison__PraisonAI/src/praisonai-agents/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/praisonai-ts/tests/unit/memory-features.test.ts`, `src/praisonai-ts/tests/unit/services/knowledge.test.ts`, `src/praisonai-ts/tests/unit/rag/models.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/praisonai-ts/src/index.ts`, `src/praisonai-ts/src/main.ts`, `src/praisonai-ts/src/mcp/server.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/praisonai-ts/AGENTS.md`, `src/praisonai-ts/tests/unit/agent-api.test.ts`.
4. retrieval/memory/indexing 확인: `src/praisonai-ts/tests/unit/memory-features.test.ts`, `src/praisonai-ts/tests/unit/services/knowledge.test.ts`, `src/praisonai-ts/tests/unit/rag/models.test.ts`.
5. test/eval 파일로 동작 검증: `tests/test_wrapper_layer_regression.py`, `src/praisonai-ts/tests/.gitkeep`, `src/praisonai-ts/tests/jest.setup.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 PraisonAI 🦞 — Hire a 24/7 AI Workforce. Stop writing boilerplate and start shipping autonomous self improving agents th. 핵심 구조 신호는 Python, README.md, AGENTS.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
