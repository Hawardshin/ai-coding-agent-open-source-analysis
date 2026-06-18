# Jovancoding/Network-AI 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Traffic light for AI Agents and TypeScript/Node multi-agent orchestrator with shared state, guardrails, and adapters for 29 AI frameworks

## 요약

- 조사 단위: `sources/Jovancoding__Network-AI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 243 files, 15 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, references/mcp-roadmap.md, lib/mcp-blackboard-tools.ts이고, 의존성 단서는 openai, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Jovancoding/Network-AI |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 63 |
| Forks | 11 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Jovancoding__Network-AI](../../../../sources/Jovancoding__Network-AI) |
| 기존 보고서 | [reports/global-trending/repositories/Jovancoding__Network-AI.md](../../../global-trending/repositories/Jovancoding__Network-AI.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 243 / 15 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .claude-plugin, .codex, .github, adapters, assets, bin, docs, examples, lib, references, scripts, types |
| 상위 확장자 | .ts: 169, .md: 34, .json: 12, .yml: 7, .py: 6, (none): 5, .html: 4, .example: 1, .js: 1, .svg: 1, .toml: 1, .txt: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| lib | source boundary | 21 |
| docs | documentation surface | 3 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| examples | top-level component | 1 |
| examples/10-nemoclaw-sandbox-swarm.ts | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| references | top-level component | 1 |
| scripts | top-level component | 1 |
| types | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.build.json && tsc -p tsconfig.esm.json |
| build | package.json | build:cjs | tsc -p tsconfig.build.json |
| build | package.json | build:esm | tsc -p tsconfig.esm.json |
| build | package.json | build:all | tsc |
| build | package.json | prebuild | node -e "const fs=require('fs');if(fs.existsSync('dist'))fs.rmSync('dist',{recursive:true})" |
| test | package.json | prepublishOnly | npm run build && npm run test:all |
| test | package.json | test | npx ts-node test-standalone.ts |
| test | package.json | test:security | npx ts-node test-security.ts |
| test | package.json | test:adapters | npx ts-node test-adapters.ts |
| test | package.json | test:priority | npx ts-node test-priority.ts |
| test | package.json | test:phase4 | npx ts-node test-phase4.ts |
| test | package.json | test:phase5 | npx ts-node test-phase5.ts |
| test | package.json | test:phase5b | npx ts-node test-phase5b.ts |
| test | package.json | test:phase5c | npx ts-node test-phase5c.ts |
| test | package.json | test:phase5d | npx ts-node test-phase5d.ts |
| test | package.json | test:phase5e | npx ts-node test-phase5e.ts |
| test | package.json | test:phase5f | npx ts-node test-phase5f.ts |
| test | package.json | test:phase5g | npx ts-node test-phase5g.ts |
| test | package.json | test:phase6 | npx ts-node test-phase6.ts |
| test | package.json | test:streaming | npx ts-node test-streaming.ts |
| test | package.json | test:a2a | npx ts-node test-a2a.ts |
| test | package.json | test:codex | npx ts-node test-codex.ts |
| test | package.json | test:nemoclaw | npx ts-node test-nemoclaw.ts |
| test | package.json | test:cli | npx ts-node test-cli.ts |
| test | package.json | test:qa | npx ts-node test-qa.ts |
| test | package.json | test:phase7 | npx ts-node test-phase7.ts |
| test | package.json | test:phase8 | npx ts-node test-phase8.ts |
| test | package.json | test:phase9 | npx ts-node test-phase9.ts |
| test | package.json | test:phase10 | npx ts-node test-phase10.ts |
| test | package.json | test:topology | npx ts-node test-topology.ts |
| test | package.json | test:phase12 | npx ts-node test-phase12.ts |
| test | package.json | test:all | npx ts-node run-tests.ts |
| utility | package.json | setup | npx ts-node setup.ts |
| quality | package.json | setup:check | npx ts-node setup.ts --check |
| utility | package.json | setup:example | npx ts-node setup.ts --example |
| utility | package.json | demo | npx ts-node examples/demo-runner.ts |
| utility | package.json | blackboard | python scripts/blackboard.py |
| quality | package.json | check-permission | python scripts/check_permission.py |
| utility | package.json | validate-token | python scripts/validate_token.py |
| utility | package.json | revoke-token | python scripts/revoke_token.py |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/Jovancoding__Network-AI/.mcp.json) | mcp signal |
| mcp | [references/mcp-roadmap.md](../../../../sources/Jovancoding__Network-AI/references/mcp-roadmap.md) | mcp signal |
| mcp | [lib/mcp-blackboard-tools.ts](../../../../sources/Jovancoding__Network-AI/lib/mcp-blackboard-tools.ts) | mcp signal |
| mcp | [lib/mcp-bridge.ts](../../../../sources/Jovancoding__Network-AI/lib/mcp-bridge.ts) | mcp signal |
| agentRuntime | [skill.json](../../../../sources/Jovancoding__Network-AI/skill.json) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/Jovancoding__Network-AI/SKILL.md) | agentRuntime signal |
| agentRuntime | [types/agent-adapter.d.ts](../../../../sources/Jovancoding__Network-AI/types/agent-adapter.d.ts) | agentRuntime signal |
| agentRuntime | [scripts/context_manager.py](../../../../sources/Jovancoding__Network-AI/scripts/context_manager.py) | agentRuntime signal |
| entrypoints | [bin/cli.ts](../../../../sources/Jovancoding__Network-AI/bin/cli.ts) | entrypoints signal |
| entrypoints | [bin/console.ts](../../../../sources/Jovancoding__Network-AI/bin/console.ts) | entrypoints signal |
| entrypoints | [bin/dashboard.ts](../../../../sources/Jovancoding__Network-AI/bin/dashboard.ts) | entrypoints signal |
| entrypoints | [bin/mcp-server.ts](../../../../sources/Jovancoding__Network-AI/bin/mcp-server.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [bin/cli.ts](../../../../sources/Jovancoding__Network-AI/bin/cli.ts)<br>[bin/console.ts](../../../../sources/Jovancoding__Network-AI/bin/console.ts)<br>[bin/dashboard.ts](../../../../sources/Jovancoding__Network-AI/bin/dashboard.ts)<br>[bin/mcp-server.ts](../../../../sources/Jovancoding__Network-AI/bin/mcp-server.ts) |
| agentRuntime | 11 | [skill.json](../../../../sources/Jovancoding__Network-AI/skill.json)<br>[SKILL.md](../../../../sources/Jovancoding__Network-AI/SKILL.md)<br>[types/agent-adapter.d.ts](../../../../sources/Jovancoding__Network-AI/types/agent-adapter.d.ts)<br>[scripts/context_manager.py](../../../../sources/Jovancoding__Network-AI/scripts/context_manager.py)<br>[lib/agent-conversation.ts](../../../../sources/Jovancoding__Network-AI/lib/agent-conversation.ts)<br>[lib/agent-debate.ts](../../../../sources/Jovancoding__Network-AI/lib/agent-debate.ts)<br>[lib/agent-memory.ts](../../../../sources/Jovancoding__Network-AI/lib/agent-memory.ts)<br>[lib/agent-runtime.ts](../../../../sources/Jovancoding__Network-AI/lib/agent-runtime.ts) |
| mcp | 11 | [.mcp.json](../../../../sources/Jovancoding__Network-AI/.mcp.json)<br>[references/mcp-roadmap.md](../../../../sources/Jovancoding__Network-AI/references/mcp-roadmap.md)<br>[lib/mcp-blackboard-tools.ts](../../../../sources/Jovancoding__Network-AI/lib/mcp-blackboard-tools.ts)<br>[lib/mcp-bridge.ts](../../../../sources/Jovancoding__Network-AI/lib/mcp-bridge.ts)<br>[lib/mcp-tool-consumer.ts](../../../../sources/Jovancoding__Network-AI/lib/mcp-tool-consumer.ts)<br>[lib/mcp-tools-control.ts](../../../../sources/Jovancoding__Network-AI/lib/mcp-tools-control.ts)<br>[lib/mcp-tools-extended.ts](../../../../sources/Jovancoding__Network-AI/lib/mcp-tools-extended.ts)<br>[lib/mcp-transport-http.ts](../../../../sources/Jovancoding__Network-AI/lib/mcp-transport-http.ts) |
| retrieval | 4 | [index.ts](../../../../sources/Jovancoding__Network-AI/index.ts)<br>[lib/agent-memory.ts](../../../../sources/Jovancoding__Network-AI/lib/agent-memory.ts)<br>[docs/index.html](../../../../sources/Jovancoding__Network-AI/docs/index.html)<br>[adapters/index.ts](../../../../sources/Jovancoding__Network-AI/adapters/index.ts) |
| spec | 3 | [ARCHITECTURE.md](../../../../sources/Jovancoding__Network-AI/ARCHITECTURE.md)<br>[requirements.txt](../../../../sources/Jovancoding__Network-AI/requirements.txt)<br>[references/mcp-roadmap.md](../../../../sources/Jovancoding__Network-AI/references/mcp-roadmap.md) |
| eval | 37 | [run-tests.ts](../../../../sources/Jovancoding__Network-AI/run-tests.ts)<br>[test-a2a.ts](../../../../sources/Jovancoding__Network-AI/test-a2a.ts)<br>[test-adapters.ts](../../../../sources/Jovancoding__Network-AI/test-adapters.ts)<br>[test-ai-quality.ts](../../../../sources/Jovancoding__Network-AI/test-ai-quality.ts)<br>[test-claim-verifier.ts](../../../../sources/Jovancoding__Network-AI/test-claim-verifier.ts)<br>[test-cli.ts](../../../../sources/Jovancoding__Network-AI/test-cli.ts)<br>[test-codex.ts](../../../../sources/Jovancoding__Network-AI/test-codex.ts)<br>[test-env-manager.ts](../../../../sources/Jovancoding__Network-AI/test-env-manager.ts) |
| security | 13 | [AUDIT_LOG_SCHEMA.md](../../../../sources/Jovancoding__Network-AI/AUDIT_LOG_SCHEMA.md)<br>[SECURITY.md](../../../../sources/Jovancoding__Network-AI/SECURITY.md)<br>[security.ts](../../../../sources/Jovancoding__Network-AI/security.ts)<br>[test-security.ts](../../../../sources/Jovancoding__Network-AI/test-security.ts)<br>[scripts/check_permission.py](../../../../sources/Jovancoding__Network-AI/scripts/check_permission.py)<br>[scripts/swarm_guard.py](../../../../sources/Jovancoding__Network-AI/scripts/swarm_guard.py)<br>[references/auth-guardian.md](../../../../sources/Jovancoding__Network-AI/references/auth-guardian.md)<br>[lib/auth-guardian.ts](../../../../sources/Jovancoding__Network-AI/lib/auth-guardian.ts) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/Jovancoding__Network-AI/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Jovancoding__Network-AI/.github/workflows/codeql.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/Jovancoding__Network-AI/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/Jovancoding__Network-AI/.github/workflows/scorecard.yml) |
| container | 1 | [Dockerfile](../../../../sources/Jovancoding__Network-AI/Dockerfile) |
| instruction | 3 | [CLAUDE.md](../../../../sources/Jovancoding__Network-AI/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/Jovancoding__Network-AI/.github/copilot-instructions.md)<br>[.codex/config.toml](../../../../sources/Jovancoding__Network-AI/.codex/config.toml) |
| docs | 3 | [README.md](../../../../sources/Jovancoding__Network-AI/README.md)<br>[examples/README.md](../../../../sources/Jovancoding__Network-AI/examples/README.md)<br>[docs/index.html](../../../../sources/Jovancoding__Network-AI/docs/index.html) |
| config | 3 | [package.json](../../../../sources/Jovancoding__Network-AI/package.json)<br>[requirements.txt](../../../../sources/Jovancoding__Network-AI/requirements.txt)<br>[tsconfig.json](../../../../sources/Jovancoding__Network-AI/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 37 | [run-tests.ts](../../../../sources/Jovancoding__Network-AI/run-tests.ts)<br>[test-a2a.ts](../../../../sources/Jovancoding__Network-AI/test-a2a.ts)<br>[test-adapters.ts](../../../../sources/Jovancoding__Network-AI/test-adapters.ts)<br>[test-ai-quality.ts](../../../../sources/Jovancoding__Network-AI/test-ai-quality.ts)<br>[test-claim-verifier.ts](../../../../sources/Jovancoding__Network-AI/test-claim-verifier.ts)<br>[test-cli.ts](../../../../sources/Jovancoding__Network-AI/test-cli.ts) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/Jovancoding__Network-AI/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Jovancoding__Network-AI/.github/workflows/codeql.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/Jovancoding__Network-AI/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/Jovancoding__Network-AI/.github/workflows/scorecard.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/Jovancoding__Network-AI/Dockerfile) |
| 보안/정책 | 13 | [AUDIT_LOG_SCHEMA.md](../../../../sources/Jovancoding__Network-AI/AUDIT_LOG_SCHEMA.md)<br>[SECURITY.md](../../../../sources/Jovancoding__Network-AI/SECURITY.md)<br>[security.ts](../../../../sources/Jovancoding__Network-AI/security.ts)<br>[test-security.ts](../../../../sources/Jovancoding__Network-AI/test-security.ts)<br>[scripts/check_permission.py](../../../../sources/Jovancoding__Network-AI/scripts/check_permission.py)<br>[scripts/swarm_guard.py](../../../../sources/Jovancoding__Network-AI/scripts/swarm_guard.py) |
| 에이전트 지시문 | 3 | [CLAUDE.md](../../../../sources/Jovancoding__Network-AI/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/Jovancoding__Network-AI/.github/copilot-instructions.md)<br>[.codex/config.toml](../../../../sources/Jovancoding__Network-AI/.codex/config.toml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `references/mcp-roadmap.md`, `lib/mcp-blackboard-tools.ts`.
2. entrypoint를 따라 실행 흐름 확인: `bin/cli.ts`, `bin/console.ts`, `bin/dashboard.ts`.
3. agent/tool runtime 매핑: `skill.json`, `SKILL.md`, `types/agent-adapter.d.ts`.
4. retrieval/memory/indexing 확인: `index.ts`, `lib/agent-memory.ts`, `docs/index.html`.
5. test/eval 파일로 동작 검증: `run-tests.ts`, `test-a2a.ts`, `test-adapters.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Traffic light for AI Agents and TypeScript/Node multi agent orchestrator with shared state, guardrails, and adapters for. 핵심 구조 신호는 TypeScript, package.json, requirements.txt, Dockerfile, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
