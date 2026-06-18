# EverMind-AI/EverOS 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Self-evolving memory across Agent and platform. The one portable memory layer for every agent they use - Claude Code, Codex, OpenClaw, Hermes, and more

## 요약

- 조사 단위: `sources/EverMind-AI__EverOS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 655 files, 158 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=use-cases/claude-code-plugin/mcp/server.js이고, 의존성 단서는 openai, claude, fastapi, pydantic, typer, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | EverMind-AI/EverOS |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 7691 |
| Forks | 740 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/EverMind-AI__EverOS](../../../../sources/EverMind-AI__EverOS) |
| 기존 보고서 | [reports/global-trending/repositories/EverMind-AI__EverOS.md](../../../global-trending/repositories/EverMind-AI__EverOS.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 655 / 158 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude, .github, data, docs, scripts, src, tests, use-cases |
| 상위 확장자 | .py: 481, .md: 54, .json: 28, .ts: 18, .js: 17, (none): 12, .tsx: 9, .yml: 9, .sh: 5, .example: 4, .toml: 4, .html: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 81 |
| src | source boundary | 20 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| scripts | top-level component | 1 |
| use-cases | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install-deps | make install-deps |
| utility | Makefile | install | make install |
| quality | Makefile | lint | make lint |
| quality | Makefile | docs-check | make docs-check |
| quality | Makefile | check-commits | make check-commits |
| quality | Makefile | check-pr-title | make check-pr-title |
| quality | Makefile | check-assets | make check-assets |
| quality | Makefile | check-deprecated-names | make check-deprecated-names |
| quality | Makefile | check-cjk | make check-cjk |
| quality | Makefile | check-datetime | make check-datetime |
| utility | Makefile | openapi | make openapi |
| quality | Makefile | check-openapi | make check-openapi |
| quality | Makefile | format | make format |
| test | Makefile | test | make test |
| utility | Makefile | integration | make integration |
| utility | Makefile | package | make package |
| utility | Makefile | cov | make cov |
| utility | Makefile | ci | make ci |
| utility | pyproject.toml | everos | everos |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [use-cases/claude-code-plugin/mcp/server.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/mcp/server.js) | mcp signal |
| agentRuntime | [use-cases/openher/integration/context_features.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/context_features.py) | agentRuntime signal |
| agentRuntime | [use-cases/openher/integration/memory_types.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/memory_types.py) | agentRuntime signal |
| agentRuntime | [use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts) | agentRuntime signal |
| agentRuntime | [use-cases/game-of-throne-demo/frontend/src/hooks/useCompareChat.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/hooks/useCompareChat.ts) | agentRuntime signal |
| entrypoints | [use-cases/game-of-throne-demo/frontend/src/App.css](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/App.css) | entrypoints signal |
| entrypoints | [use-cases/game-of-throne-demo/frontend/src/App.tsx](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [use-cases/game-of-throne-demo/frontend/src/main.tsx](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [use-cases/game-of-throne-demo/backend/src/server.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/src/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/EverMind-AI__EverOS/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/EverMind-AI__EverOS/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/EverMind-AI__EverOS/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [use-cases/game-of-throne-demo/frontend/src/App.css](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/App.css)<br>[use-cases/game-of-throne-demo/frontend/src/App.tsx](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/App.tsx)<br>[use-cases/game-of-throne-demo/frontend/src/main.tsx](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/main.tsx)<br>[use-cases/game-of-throne-demo/backend/src/server.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/src/server.ts)<br>[use-cases/claude-code-plugin/mcp/server.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/mcp/server.js)<br>[src/everos/entrypoints/cli/main.py](../../../../sources/EverMind-AI__EverOS/src/everos/entrypoints/cli/main.py)<br>[src/everos/entrypoints/cli/commands/server.py](../../../../sources/EverMind-AI__EverOS/src/everos/entrypoints/cli/commands/server.py) |
| agentRuntime | 111 | [use-cases/openher/integration/context_features.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/context_features.py)<br>[use-cases/openher/integration/memory_types.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/memory_types.py)<br>[use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts)<br>[use-cases/game-of-throne-demo/frontend/src/hooks/useCompareChat.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/hooks/useCompareChat.ts)<br>[use-cases/claude-code-plugin/skills/memory-tools.md](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/skills/memory-tools.md)<br>[use-cases/claude-code-plugin/hooks/hooks.json](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/hooks/hooks.json)<br>[use-cases/claude-code-plugin/hooks/scripts/inject-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/hooks/scripts/inject-memories.js)<br>[use-cases/claude-code-plugin/hooks/scripts/session-context-wrapper.sh](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/hooks/scripts/session-context-wrapper.sh) |
| mcp | 1 | [use-cases/claude-code-plugin/mcp/server.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/mcp/server.js) |
| retrieval | 143 | [use-cases/openher/integration/memory_types.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/memory_types.py)<br>[use-cases/game-of-throne-demo/frontend/index.html](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/index.html)<br>[use-cases/game-of-throne-demo/frontend/src/types/index.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/types/index.ts)<br>[use-cases/claude-code-plugin/skills/memory-tools.md](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/skills/memory-tools.md)<br>[tests/unit/test_memory/__init__.py](../../../../sources/EverMind-AI__EverOS/tests/unit/test_memory/__init__.py)<br>[tests/unit/test_memory/test_events.py](../../../../sources/EverMind-AI__EverOS/tests/unit/test_memory/test_events.py)<br>[tests/unit/test_memory/test_models.py](../../../../sources/EverMind-AI__EverOS/tests/unit/test_memory/test_models.py)<br>[tests/unit/test_memory/test_strategies/__init__.py](../../../../sources/EverMind-AI__EverOS/tests/unit/test_memory/test_strategies/__init__.py) |
| spec | 2 | [docs/architecture.md](../../../../sources/EverMind-AI__EverOS/docs/architecture.md)<br>[.claude/rules/architecture.md](../../../../sources/EverMind-AI__EverOS/.claude/rules/architecture.md) |
| eval | 244 | [use-cases/claude-code-plugin/scripts/test-retrieve-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/scripts/test-retrieve-memories.js)<br>[use-cases/claude-code-plugin/scripts/test-save-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/scripts/test-save-memories.js)<br>[tests/__init__.py](../../../../sources/EverMind-AI__EverOS/tests/__init__.py)<br>[tests/_consistency_assertions.py](../../../../sources/EverMind-AI__EverOS/tests/_consistency_assertions.py)<br>[tests/conftest.py](../../../../sources/EverMind-AI__EverOS/tests/conftest.py)<br>[tests/run_locomo_10x3.sh](../../../../sources/EverMind-AI__EverOS/tests/run_locomo_10x3.sh)<br>[tests/run_locomo_batch.sh](../../../../sources/EverMind-AI__EverOS/tests/run_locomo_batch.sh)<br>[tests/test_locomo.py](../../../../sources/EverMind-AI__EverOS/tests/test_locomo.py) |
| security | 2 | [SECURITY.md](../../../../sources/EverMind-AI__EverOS/SECURITY.md)<br>[.claude/rules/language-policy.md](../../../../sources/EverMind-AI__EverOS/.claude/rules/language-policy.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/ci.yml)<br>[.github/workflows/commits.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/commits.yml)<br>[.github/workflows/docs.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/docs.yml) |
| container | 2 | [use-cases/game-of-throne-demo/frontend/Dockerfile](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/Dockerfile)<br>[use-cases/game-of-throne-demo/backend/Dockerfile](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/EverMind-AI__EverOS/CLAUDE.md) |
| docs | 25 | [README.md](../../../../sources/EverMind-AI__EverOS/README.md)<br>[README.zh-CN.md](../../../../sources/EverMind-AI__EverOS/README.zh-CN.md)<br>[use-cases/README.md](../../../../sources/EverMind-AI__EverOS/use-cases/README.md)<br>[use-cases/openher/README.md](../../../../sources/EverMind-AI__EverOS/use-cases/openher/README.md)<br>[use-cases/game-of-throne-demo/README.md](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/README.md)<br>[use-cases/claude-code-plugin/README.md](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/README.md)<br>[tests/fixtures/README.md](../../../../sources/EverMind-AI__EverOS/tests/fixtures/README.md)<br>[src/everos/README.md](../../../../sources/EverMind-AI__EverOS/src/everos/README.md) |
| config | 9 | [Makefile](../../../../sources/EverMind-AI__EverOS/Makefile)<br>[pyproject.toml](../../../../sources/EverMind-AI__EverOS/pyproject.toml)<br>[uv.lock](../../../../sources/EverMind-AI__EverOS/uv.lock)<br>[use-cases/game-of-throne-demo/package.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/package.json)<br>[use-cases/game-of-throne-demo/frontend/package.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/package.json)<br>[use-cases/game-of-throne-demo/frontend/tsconfig.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/tsconfig.json)<br>[use-cases/game-of-throne-demo/backend/package.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/package.json)<br>[use-cases/game-of-throne-demo/backend/tsconfig.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 244 | [use-cases/claude-code-plugin/scripts/test-retrieve-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/scripts/test-retrieve-memories.js)<br>[use-cases/claude-code-plugin/scripts/test-save-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/scripts/test-save-memories.js)<br>[tests/__init__.py](../../../../sources/EverMind-AI__EverOS/tests/__init__.py)<br>[tests/_consistency_assertions.py](../../../../sources/EverMind-AI__EverOS/tests/_consistency_assertions.py)<br>[tests/conftest.py](../../../../sources/EverMind-AI__EverOS/tests/conftest.py)<br>[tests/run_locomo_10x3.sh](../../../../sources/EverMind-AI__EverOS/tests/run_locomo_10x3.sh) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/ci.yml)<br>[.github/workflows/commits.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/commits.yml)<br>[.github/workflows/docs.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/docs.yml) |
| 컨테이너/배포 | 2 | [use-cases/game-of-throne-demo/frontend/Dockerfile](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/Dockerfile)<br>[use-cases/game-of-throne-demo/backend/Dockerfile](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/EverMind-AI__EverOS/SECURITY.md)<br>[.claude/rules/language-policy.md](../../../../sources/EverMind-AI__EverOS/.claude/rules/language-policy.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/EverMind-AI__EverOS/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `use-cases/claude-code-plugin/mcp/server.js`, `use-cases/openher/integration/context_features.py`, `use-cases/openher/integration/memory_types.py`.
2. entrypoint를 따라 실행 흐름 확인: `use-cases/game-of-throne-demo/frontend/src/App.css`, `use-cases/game-of-throne-demo/frontend/src/App.tsx`, `use-cases/game-of-throne-demo/frontend/src/main.tsx`.
3. agent/tool runtime 매핑: `use-cases/openher/integration/context_features.py`, `use-cases/openher/integration/memory_types.py`, `use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts`.
4. retrieval/memory/indexing 확인: `use-cases/openher/integration/memory_types.py`, `use-cases/game-of-throne-demo/frontend/index.html`, `use-cases/game-of-throne-demo/frontend/src/types/index.ts`.
5. test/eval 파일로 동작 검증: `use-cases/claude-code-plugin/scripts/test-retrieve-memories.js`, `use-cases/claude-code-plugin/scripts/test-save-memories.js`, `tests/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Self evolving memory across Agent and platform. The one portable memory layer for every agent they use Claude Code, Code. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
