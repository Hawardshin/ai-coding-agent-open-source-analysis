# Prompthon-IO/agent-systems-handbook 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A practical AI agents handbook covering agent systems, agentic workflows, LangGraph, MCP/A2A, context engineering, agent memory, evaluation, observability, and multi-agent architecture. Current trend focus: agent runtime cost controls, emerging agent runtimes, and production AI workflow patterns.

## 요약

- 조사 단위: `sources/Prompthon-IO__agent-systems-handbook` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 386 files, 138 directories, depth score 101, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx, systems/examples/weather-mcp-server-starter/index.mdx, systems/examples/weather-mcp-server-starter/src/access_policy.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Prompthon-IO/agent-systems-handbook |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | MDX |
| Stars | 317 |
| Forks | 54 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Prompthon-IO__agent-systems-handbook](../../../../sources/Prompthon-IO__agent-systems-handbook) |
| 기존 보고서 | [reports/global-trending/repositories/Prompthon-IO__agent-systems-handbook.md](../../../global-trending/repositories/Prompthon-IO__agent-systems-handbook.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 386 / 138 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, assets, case-studies, contributor-kit, ecosystem, foundations, githooks, patterns, publications, radar, reading-paths, scripts, skills, snippets, systems, workshops, zh-Hans |
| 상위 확장자 | .mdx: 192, .md: 67, .py: 31, .ts: 30, .yml: 15, .png: 13, .yaml: 8, (none): 8, .mjs: 7, .tsx: 5, .json: 4, .csv: 3 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| case-studies | top-level component | 1 |
| contributor-kit | top-level component | 1 |
| ecosystem | top-level component | 1 |
| foundations | top-level component | 1 |
| githooks | top-level component | 1 |
| patterns | top-level component | 1 |
| publications | top-level component | 1 |
| radar | top-level component | 1 |
| reading-paths | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| snippets | top-level component | 1 |
| systems | top-level component | 1 |
| workshops | top-level component | 1 |
| zh-Hans | top-level component | 1 |


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
| mcp | [zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx) | mcp signal |
| mcp | [systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/index.mdx) | mcp signal |
| mcp | [systems/examples/weather-mcp-server-starter/src/access_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/access_policy.py) | mcp signal |
| mcp | [systems/examples/weather-mcp-server-starter/src/server.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/server.py) | mcp signal |
| agentRuntime | [zh-Hans/workshops/skills-introduction.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/skills-introduction.mdx) | agentRuntime signal |
| agentRuntime | [zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx) | agentRuntime signal |
| agentRuntime | [zh-Hans/systems/context-engineering.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/context-engineering.mdx) | agentRuntime signal |
| agentRuntime | [zh-Hans/skills/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/skills/index.mdx) | agentRuntime signal |
| config | [case-studies/examples/customer-email-assist-starter/package.json](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-email-assist-starter/package.json) | config signal |
| config | [case-studies/examples/customer-email-assist-starter/tsconfig.json](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-email-assist-starter/tsconfig.json) | config signal |
| ci | [.github/workflows/discord-lab-updates.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/discord-lab-updates.yml) | ci support |
| ci | [.github/workflows/main-release-gate.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/main-release-gate.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [systems/examples/weather-mcp-server-starter/src/server.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/server.py) |
| agentRuntime | 82 | [zh-Hans/workshops/skills-introduction.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/skills-introduction.mdx)<br>[zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx)<br>[zh-Hans/systems/context-engineering.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/context-engineering.mdx)<br>[zh-Hans/skills/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/skills/index.mdx)<br>[zh-Hans/patterns/agent-memory-and-retrieval.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/patterns/agent-memory-and-retrieval.mdx)<br>[zh-Hans/patterns/agent-runtime-building-blocks.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/patterns/agent-runtime-building-blocks.mdx)<br>[zh-Hans/patterns/examples/agent-memory-retrieval-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/patterns/examples/agent-memory-retrieval-starter/index.mdx)<br>[zh-Hans/foundations/agents-vs-workflows.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/foundations/agents-vs-workflows.mdx) |
| mcp | 5 | [zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx)<br>[systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/index.mdx)<br>[systems/examples/weather-mcp-server-starter/src/access_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/access_policy.py)<br>[systems/examples/weather-mcp-server-starter/src/server.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/server.py)<br>[systems/examples/weather-mcp-server-starter/src/tool_manifest.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/tool_manifest.py) |
| retrieval | 63 | [index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/index.mdx)<br>[zh-Hans/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/index.mdx)<br>[zh-Hans/workshops/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/index.mdx)<br>[zh-Hans/workshops/openclaw/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/openclaw/index.mdx)<br>[zh-Hans/workshops/codex/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/workshops/codex/index.mdx)<br>[zh-Hans/systems/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/index.mdx)<br>[zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx)<br>[zh-Hans/skills/index.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/skills/index.mdx) |
| spec | 0 | 명확하지 않음 |
| eval | 19 | [zh-Hans/systems/evaluation-and-observability.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/evaluation-and-observability.mdx)<br>[systems/evaluation-and-observability.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/evaluation-and-observability.mdx)<br>[skills/agent-runtime-cache-benchmark/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/README.md)<br>[skills/agent-runtime-cache-benchmark/SKILL.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/SKILL.md)<br>[skills/agent-runtime-cache-benchmark/scripts/cache_benchmark.py](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/scripts/cache_benchmark.py)<br>[skills/agent-runtime-cache-benchmark/references/provider-cache-notes.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/references/provider-cache-notes.md)<br>[skills/agent-runtime-cache-benchmark/agents/openai.yaml](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/agents/openai.yaml)<br>[radar/2026-05-customer-support-agent-evaluation-tradeoffs.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/radar/2026-05-customer-support-agent-evaluation-tradeoffs.mdx) |
| security | 20 | [SECURITY.md](../../../../sources/Prompthon-IO__agent-systems-handbook/SECURITY.md)<br>[zh-Hans/SECURITY.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/SECURITY.md)<br>[workshops/gmail-oauth-setup.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/workshops/gmail-oauth-setup.mdx)<br>[systems/examples/weather-mcp-server-starter/src/access_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/access_policy.py)<br>[radar/2026-04-cyber-defense-access-policy-watch.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/radar/2026-04-cyber-defense-access-policy-watch.mdx)<br>[patterns/examples/agent-memory-retrieval-starter/src/artifact_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/patterns/examples/agent-memory-retrieval-starter/src/artifact_policy.py)<br>[contributor-kit/reference-notes/ai-education-policy-to-practice.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/contributor-kit/reference-notes/ai-education-policy-to-practice.mdx)<br>[case-studies/examples/customer-support-email-agent-starter/src/policy_loader.py](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-support-email-agent-starter/src/policy_loader.py) |
| ci | 7 | [.github/workflows/discord-lab-updates.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/discord-lab-updates.yml)<br>[.github/workflows/main-release-gate.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/main-release-gate.yml)<br>[.github/workflows/prompthon-issue-intake.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/prompthon-issue-intake.yml)<br>[.github/workflows/prompthon-track-guard.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/prompthon-track-guard.yml)<br>[.github/workflows/release-main.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/release-main.yml)<br>[.github/workflows/validate-mintlify.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/validate-mintlify.yml)<br>[.github/workflows/verify-example-projects.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/verify-example-projects.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 33 | [README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/README.md)<br>[zh-Hans/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/README.md)<br>[zh-Hans/systems/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/README.md)<br>[zh-Hans/reading-paths/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/reading-paths/README.md)<br>[zh-Hans/radar/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/radar/README.md)<br>[zh-Hans/publications/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/publications/README.md)<br>[zh-Hans/patterns/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/patterns/README.md)<br>[zh-Hans/foundations/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/foundations/README.md) |
| config | 2 | [case-studies/examples/customer-email-assist-starter/package.json](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-email-assist-starter/package.json)<br>[case-studies/examples/customer-email-assist-starter/tsconfig.json](../../../../sources/Prompthon-IO__agent-systems-handbook/case-studies/examples/customer-email-assist-starter/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [zh-Hans/systems/evaluation-and-observability.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/systems/evaluation-and-observability.mdx)<br>[systems/evaluation-and-observability.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/evaluation-and-observability.mdx)<br>[skills/agent-runtime-cache-benchmark/README.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/README.md)<br>[skills/agent-runtime-cache-benchmark/SKILL.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/SKILL.md)<br>[skills/agent-runtime-cache-benchmark/scripts/cache_benchmark.py](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/scripts/cache_benchmark.py)<br>[skills/agent-runtime-cache-benchmark/references/provider-cache-notes.md](../../../../sources/Prompthon-IO__agent-systems-handbook/skills/agent-runtime-cache-benchmark/references/provider-cache-notes.md) |
| CI workflow | 7 | [.github/workflows/discord-lab-updates.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/discord-lab-updates.yml)<br>[.github/workflows/main-release-gate.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/main-release-gate.yml)<br>[.github/workflows/prompthon-issue-intake.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/prompthon-issue-intake.yml)<br>[.github/workflows/prompthon-track-guard.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/prompthon-track-guard.yml)<br>[.github/workflows/release-main.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/release-main.yml)<br>[.github/workflows/validate-mintlify.yml](../../../../sources/Prompthon-IO__agent-systems-handbook/.github/workflows/validate-mintlify.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 20 | [SECURITY.md](../../../../sources/Prompthon-IO__agent-systems-handbook/SECURITY.md)<br>[zh-Hans/SECURITY.md](../../../../sources/Prompthon-IO__agent-systems-handbook/zh-Hans/SECURITY.md)<br>[workshops/gmail-oauth-setup.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/workshops/gmail-oauth-setup.mdx)<br>[systems/examples/weather-mcp-server-starter/src/access_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/systems/examples/weather-mcp-server-starter/src/access_policy.py)<br>[radar/2026-04-cyber-defense-access-policy-watch.mdx](../../../../sources/Prompthon-IO__agent-systems-handbook/radar/2026-04-cyber-defense-access-policy-watch.mdx)<br>[patterns/examples/agent-memory-retrieval-starter/src/artifact_policy.py](../../../../sources/Prompthon-IO__agent-systems-handbook/patterns/examples/agent-memory-retrieval-starter/src/artifact_policy.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `zh-Hans/systems/examples/weather-mcp-server-starter/index.mdx`, `systems/examples/weather-mcp-server-starter/index.mdx`, `systems/examples/weather-mcp-server-starter/src/access_policy.py`.
2. entrypoint를 따라 실행 흐름 확인: `systems/examples/weather-mcp-server-starter/src/server.py`.
3. agent/tool runtime 매핑: `zh-Hans/workshops/skills-introduction.mdx`, `zh-Hans/systems/agent-ui-protocols-and-generative-ui.mdx`, `zh-Hans/systems/context-engineering.mdx`.
4. retrieval/memory/indexing 확인: `index.mdx`, `zh-Hans/index.mdx`, `zh-Hans/workshops/index.mdx`.
5. test/eval 파일로 동작 검증: `zh-Hans/systems/evaluation-and-observability.mdx`, `systems/evaluation-and-observability.mdx`, `skills/agent-runtime-cache-benchmark/README.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A practical AI agents handbook covering agent systems, agentic workflows, LangGraph, MCP/A2A, context engineering, agent. 핵심 구조 신호는 MDX, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
