# agentlas-ai/Hephaestus 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Open Agent OS for Claude Code, Codex, and Cursor: meta-agent builder, A2A Hub routing, local ontology, memory and security gates.

## 요약

- 조사 단위: `sources/agentlas-ai__Hephaestus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 512 files, 155 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=ontology/__main__.py, codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py, codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 코딩 에이전트 참고 구현이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | agentlas-ai/Hephaestus |
| 주제 | 코딩 에이전트/IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Python |
| Stars | 74 |
| Forks | 13 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/agentlas-ai__Hephaestus](../../../../sources/agentlas-ai__Hephaestus) |
| 기존 보고서 | [reports/global-trending/repositories/agentlas-ai__Hephaestus.md](../../../global-trending/repositories/agentlas-ai__Hephaestus.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 512 / 155 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agentlas, .agents, .claude, .claude-plugin, .gemini, agentlas_cloud, agents, antigravity, assets, benchmarks, bin, claude, codex, cursor, docs, examples, gemini, hermes, modes, ontology |
| 상위 확장자 | .md: 156, .py: 156, .json: 91, .tpl: 42, .jsonl: 18, .sh: 15, (none): 9, .svg: 8, .toml: 6, .cmd: 3, .mdc: 2, .command: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 37 |
| tests | validation surface | 25 |
| examples/ontology-proposal-agent | examples workspace | 2 |
| agentlas_cloud | top-level component | 1 |
| agents | top-level component | 1 |
| antigravity | top-level component | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| bin | top-level component | 1 |
| claude | top-level component | 1 |
| codex | top-level component | 1 |
| cursor | top-level component | 1 |
| examples | top-level component | 1 |
| examples/minimal-agent-team | examples workspace | 1 |
| gemini | top-level component | 1 |
| hermes | top-level component | 1 |
| modes | top-level component | 1 |
| ontology | top-level component | 1 |


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
| entrypoints | [ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/ontology/__main__.py) | entrypoints signal |
| entrypoints | [codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py) | entrypoints signal |
| entrypoints | [codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network) | entrypoints signal |
| entrypoints | [codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus) | entrypoints signal |
| agentRuntime | [agent.md](../../../../sources/agentlas-ai__Hephaestus/agent.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/agentlas-ai__Hephaestus/AGENTS.md) | agentRuntime signal |
| agentRuntime | [memory.md](../../../../sources/agentlas-ai__Hephaestus/memory.md) | agentRuntime signal |
| agentRuntime | [templates/agent.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/agent.md.tpl) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/agentlas-ai__Hephaestus/CLAUDE.md) | instruction signal |
| instruction | [GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/GEMINI.md) | instruction signal |
| instruction | [templates/AGENTS.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/AGENTS.md.tpl) | instruction signal |
| security | [SECURITY.md](../../../../sources/agentlas-ai__Hephaestus/SECURITY.md) | security signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/ontology/__main__.py)<br>[codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py)<br>[codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network)<br>[codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus)<br>[codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus.cmd](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus.cmd)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/__main__.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/__main__.py)<br>[claude/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py)<br>[claude/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network) |
| agentRuntime | 129 | [agent.md](../../../../sources/agentlas-ai__Hephaestus/agent.md)<br>[AGENTS.md](../../../../sources/agentlas-ai__Hephaestus/AGENTS.md)<br>[memory.md](../../../../sources/agentlas-ai__Hephaestus/memory.md)<br>[templates/agent.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/agent.md.tpl)<br>[templates/AGENTS.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/AGENTS.md.tpl)<br>[templates/memory-map.json.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/memory-map.json.tpl)<br>[templates/skill-registry.json.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/skill-registry.json.tpl)<br>[skills/README.md](../../../../sources/agentlas-ai__Hephaestus/skills/README.md) |
| mcp | 9 | [tests/test_mcp_stdio.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_mcp_stdio.py)<br>[scripts/verify-mcp-surface.sh](../../../../sources/agentlas-ai__Hephaestus/scripts/verify-mcp-surface.sh)<br>[docs/readme-demo-mcp-gif.md](../../../../sources/agentlas-ai__Hephaestus/docs/readme-demo-mcp-gif.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/mcp_stdio.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/mcp_stdio.py)<br>[claude/plugins/agentlas-core-engine-meta-agent/.mcp.json](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/.mcp.json)<br>[claude/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/mcp_stdio.py](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/mcp_stdio.py)<br>[assets/hephaestus-network-mcp-demo-poster.png](../../../../sources/agentlas-ai__Hephaestus/assets/hephaestus-network-mcp-demo-poster.png)<br>[assets/hephaestus-network-mcp-demo.gif](../../../../sources/agentlas-ai__Hephaestus/assets/hephaestus-network-mcp-demo.gif) |
| retrieval | 55 | [memory.md](../../../../sources/agentlas-ai__Hephaestus/memory.md)<br>[tests/test_agent_graph.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agent_graph.py)<br>[tests/test_memory.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_memory.py)<br>[templates/memory-map.json.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/memory-map.json.tpl)<br>[templates/project-soul-memory.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/project-soul-memory.md.tpl)<br>[templates/super-ontology-knowledge-homeostasis.json.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/super-ontology-knowledge-homeostasis.json.tpl)<br>[templates/super-ontology-memory-bridge.jsonl.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/super-ontology-memory-bridge.jsonl.tpl)<br>[skills/memory-ticketing/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/memory-ticketing/SKILL.md) |
| spec | 9 | [ARCHITECTURE.md](../../../../sources/agentlas-ai__Hephaestus/ARCHITECTURE.md)<br>[skills/llm-runtime-architecture/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/llm-runtime-architecture/SKILL.md)<br>[skills/agent-team-design/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/agent-team-design/SKILL.md)<br>[docs/llm-runtime-architecture.md](../../../../sources/agentlas-ai__Hephaestus/docs/llm-runtime-architecture.md)<br>[docs/memory-architecture.md](../../../../sources/agentlas-ai__Hephaestus/docs/memory-architecture.md)<br>[assets/agentlas-meta-agent-architecture.svg](../../../../sources/agentlas-ai__Hephaestus/assets/agentlas-meta-agent-architecture.svg)<br>[assets/hephaestus-network-architecture.svg](../../../../sources/agentlas-ai__Hephaestus/assets/hephaestus-network-architecture.svg)<br>[.agents/skills/llm-runtime-architecture/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/.agents/skills/llm-runtime-architecture/SKILL.md) |
| eval | 29 | [tests/test_agent_graph.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agent_graph.py)<br>[tests/test_agentlas_auth.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_auth.py)<br>[tests/test_agentlas_cloud_runtime.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_cloud_runtime.py)<br>[tests/test_agentos.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentos.py)<br>[tests/test_hephaestus_command_surface.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hephaestus_command_surface.py)<br>[tests/test_hub_fallback.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hub_fallback.py)<br>[tests/test_hub_invocation.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hub_invocation.py)<br>[tests/test_kernel.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_kernel.py) |
| security | 11 | [SECURITY.md](../../../../sources/agentlas-ai__Hephaestus/SECURITY.md)<br>[tests/test_agentlas_auth.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_auth.py)<br>[skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/agentlas-security-scan/SKILL.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/networking/policy.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/networking/policy.py)<br>[claude/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md)<br>[claude/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 8 | [AGENTS.md](../../../../sources/agentlas-ai__Hephaestus/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agentlas-ai__Hephaestus/CLAUDE.md)<br>[GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/GEMINI.md)<br>[templates/AGENTS.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/AGENTS.md.tpl)<br>[templates/CLAUDE.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/CLAUDE.md.tpl)<br>[templates/GEMINI.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/GEMINI.md.tpl)<br>[gemini/extension/GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/gemini/extension/GEMINI.md)<br>[.gemini/GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/.gemini/GEMINI.md) |
| docs | 46 | [README.hi.md](../../../../sources/agentlas-ai__Hephaestus/README.hi.md)<br>[README.ja.md](../../../../sources/agentlas-ai__Hephaestus/README.ja.md)<br>[README.ko.md](../../../../sources/agentlas-ai__Hephaestus/README.ko.md)<br>[README.md](../../../../sources/agentlas-ai__Hephaestus/README.md)<br>[README.zh-CN.md](../../../../sources/agentlas-ai__Hephaestus/README.zh-CN.md)<br>[skills/README.md](../../../../sources/agentlas-ai__Hephaestus/skills/README.md)<br>[opencode/README.md](../../../../sources/agentlas-ai__Hephaestus/opencode/README.md)<br>[openclaw/README.md](../../../../sources/agentlas-ai__Hephaestus/openclaw/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 29 | [tests/test_agent_graph.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agent_graph.py)<br>[tests/test_agentlas_auth.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_auth.py)<br>[tests/test_agentlas_cloud_runtime.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_cloud_runtime.py)<br>[tests/test_agentos.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentos.py)<br>[tests/test_hephaestus_command_surface.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hephaestus_command_surface.py)<br>[tests/test_hub_fallback.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hub_fallback.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 11 | [SECURITY.md](../../../../sources/agentlas-ai__Hephaestus/SECURITY.md)<br>[tests/test_agentlas_auth.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_auth.py)<br>[skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/agentlas-security-scan/SKILL.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/networking/policy.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/networking/policy.py) |
| 에이전트 지시문 | 8 | [AGENTS.md](../../../../sources/agentlas-ai__Hephaestus/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agentlas-ai__Hephaestus/CLAUDE.md)<br>[GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/GEMINI.md)<br>[templates/AGENTS.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/AGENTS.md.tpl)<br>[templates/CLAUDE.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/CLAUDE.md.tpl)<br>[templates/GEMINI.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/GEMINI.md.tpl) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `ontology/__main__.py`, `codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py`, `codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network`.
2. entrypoint를 따라 실행 흐름 확인: `ontology/__main__.py`, `codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py`, `codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network`.
3. agent/tool runtime 매핑: `agent.md`, `AGENTS.md`, `memory.md`.
4. retrieval/memory/indexing 확인: `memory.md`, `tests/test_agent_graph.py`, `tests/test_memory.py`.
5. test/eval 파일로 동작 검증: `tests/test_agent_graph.py`, `tests/test_agentlas_auth.py`, `tests/test_agentlas_cloud_runtime.py`.

## 기존 레포 인사이트

코딩 에이전트/IDE 관점에서 Open Agent OS for Claude Code, Codex, and Cursor meta agent builder, A2A Hub routing, local ontology, memory and securit. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 코딩 에이전트 참고 구현이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
