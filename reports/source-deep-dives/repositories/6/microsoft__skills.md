# microsoft/skills 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Skills, MCP servers, Custom Agents, Agents.md for SDKs to ground Coding Agents

## 요약

- 조사 단위: `sources/microsoft__skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,492 files, 670 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/scenarios/mcp-builder/acceptance-criteria.md, tests/scenarios/mcp-builder/scenarios.yaml, docs-site/src/data/mcp-servers.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/skills |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 2580 |
| Forks | 298 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/microsoft__skills](../../../../sources/microsoft__skills) |
| 기존 보고서 | [reports/global-trending/repositories/microsoft__skills.md](../../../global-trending/repositories/microsoft__skills.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1492 / 670 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .claude, .claude-plugin, .entire, .github, .opencode, docs, docs-site, hooks, tests |
| 상위 확장자 | .md: 1158, .yaml: 138, .json: 36, .py: 36, .ts: 24, .ps1: 16, .sh: 13, (none): 10, .yml: 8, .astro: 7, .tsx: 7, .png: 6 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 105 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| docs-site | documentation surface | 1 |
| hooks | top-level component | 1 |


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
| mcp | [tests/scenarios/mcp-builder/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/mcp-builder/acceptance-criteria.md) | mcp signal |
| mcp | [tests/scenarios/mcp-builder/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/mcp-builder/scenarios.yaml) | mcp signal |
| mcp | [docs-site/src/data/mcp-servers.json](../../../../sources/microsoft__skills/docs-site/src/data/mcp-servers.json) | mcp signal |
| mcp | [.github/skills/mcp-builder/SKILL.md](../../../../sources/microsoft__skills/.github/skills/mcp-builder/SKILL.md) | mcp signal |
| agentRuntime | [Agents.md](../../../../sources/microsoft__skills/Agents.md) | agentRuntime signal |
| agentRuntime | [tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/schemas/skill-scenarios.schema.json](../../../../sources/microsoft__skills/tests/schemas/skill-scenarios.schema.json) | agentRuntime signal |
| agentRuntime | [tests/scenarios/skill-scenarios.schema.json](../../../../sources/microsoft__skills/tests/scenarios/skill-scenarios.schema.json) | agentRuntime signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/microsoft__skills/.github/copilot-instructions.md) | instruction signal |
| instruction | [.github/plugins/deep-wiki/commands/agents.md](../../../../sources/microsoft__skills/.github/plugins/deep-wiki/commands/agents.md) | instruction signal |
| config | [tests/package.json](../../../../sources/microsoft__skills/tests/package.json) | config signal |
| config | [tests/tsconfig.json](../../../../sources/microsoft__skills/tests/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1091 | [Agents.md](../../../../sources/microsoft__skills/Agents.md)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[tests/schemas/skill-scenarios.schema.json](../../../../sources/microsoft__skills/tests/schemas/skill-scenarios.schema.json)<br>[tests/scenarios/skill-scenarios.schema.json](../../../../sources/microsoft__skills/tests/scenarios/skill-scenarios.schema.json)<br>[tests/scenarios/skill-creator/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/skill-creator/acceptance-criteria.md)<br>[tests/scenarios/skill-creator/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/skill-creator/scenarios.yaml)<br>[tests/scenarios/agent-framework-azure-ai-py/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/agent-framework-azure-ai-py/acceptance-criteria.md)<br>[tests/scenarios/agent-framework-azure-ai-py/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/agent-framework-azure-ai-py/scenarios.yaml) |
| mcp | 25 | [tests/scenarios/mcp-builder/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/mcp-builder/acceptance-criteria.md)<br>[tests/scenarios/mcp-builder/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/mcp-builder/scenarios.yaml)<br>[docs-site/src/data/mcp-servers.json](../../../../sources/microsoft__skills/docs-site/src/data/mcp-servers.json)<br>[.github/skills/mcp-builder/SKILL.md](../../../../sources/microsoft__skills/.github/skills/mcp-builder/SKILL.md)<br>[.github/skills/mcp-builder/scripts/connections.py](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/connections.py)<br>[.github/skills/mcp-builder/scripts/evaluation.py](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/evaluation.py)<br>[.github/skills/mcp-builder/scripts/example_evaluation.xml](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/example_evaluation.xml)<br>[.github/skills/mcp-builder/scripts/requirements.txt](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/requirements.txt) |
| retrieval | 52 | [tests/scenarios/wiki-qa/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-qa/acceptance-criteria.md)<br>[tests/scenarios/wiki-page-writer/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-page-writer/acceptance-criteria.md)<br>[tests/scenarios/wiki-architect/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-architect/acceptance-criteria.md)<br>[tests/harness/index.ts](../../../../sources/microsoft__skills/tests/harness/index.ts)<br>[docs-site/src/pages/index.astro](../../../../sources/microsoft__skills/docs-site/src/pages/index.astro)<br>[docs/index.html](../../../../sources/microsoft__skills/docs/index.html)<br>[docs/_astro/index.DiEladB3.js](../../../../sources/microsoft__skills/docs/_astro/index.DiEladB3.js)<br>[docs/_astro/index.wDopByTC.css](../../../../sources/microsoft__skills/docs/_astro/index.wDopByTC.css) |
| spec | 160 | [tests/scenarios/zustand-store-ts/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/zustand-store-ts/acceptance-criteria.md)<br>[tests/scenarios/wiki-qa/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-qa/acceptance-criteria.md)<br>[tests/scenarios/wiki-page-writer/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-page-writer/acceptance-criteria.md)<br>[tests/scenarios/wiki-architect/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/wiki-architect/acceptance-criteria.md)<br>[tests/scenarios/skill-creator/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/skill-creator/acceptance-criteria.md)<br>[tests/scenarios/react-flow-node-ts/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/react-flow-node-ts/acceptance-criteria.md)<br>[tests/scenarios/pydantic-models-py/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/pydantic-models-py/acceptance-criteria.md)<br>[tests/scenarios/podcast-generation/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/podcast-generation/acceptance-criteria.md) |
| eval | 375 | [tests/.gitignore](../../../../sources/microsoft__skills/tests/.gitignore)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[tests/package-lock.json](../../../../sources/microsoft__skills/tests/package-lock.json)<br>[tests/package.json](../../../../sources/microsoft__skills/tests/package.json)<br>[tests/pnpm-lock.yaml](../../../../sources/microsoft__skills/tests/pnpm-lock.yaml)<br>[tests/README.md](../../../../sources/microsoft__skills/tests/README.md)<br>[tests/tsconfig.json](../../../../sources/microsoft__skills/tests/tsconfig.json)<br>[tests/vitest.config.ts](../../../../sources/microsoft__skills/tests/vitest.config.ts) |
| security | 56 | [SECURITY.md](../../../../sources/microsoft__skills/SECURITY.md)<br>[tests/scenarios/azure-security-keyvault-secrets-java/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-secrets-java/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-secrets-java/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-secrets-java/scenarios.yaml)<br>[tests/scenarios/azure-security-keyvault-keys-java/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-java/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-keys-java/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-java/scenarios.yaml)<br>[tests/scenarios/azure-security-keyvault-keys-dotnet/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-dotnet/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-keys-dotnet/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-dotnet/scenarios.yaml)<br>[.github/plugins/azure-skills/skills/microsoft-foundry/references/auth-best-practices.md](../../../../sources/microsoft__skills/.github/plugins/azure-skills/skills/microsoft-foundry/references/auth-best-practices.md) |
| ci | 5 | [.github/workflows/deploy-pages.yml](../../../../sources/microsoft__skills/.github/workflows/deploy-pages.yml)<br>[.github/workflows/skill-evaluation.yml](../../../../sources/microsoft__skills/.github/workflows/skill-evaluation.yml)<br>[.github/workflows/test-harness.yml](../../../../sources/microsoft__skills/.github/workflows/test-harness.yml)<br>[.github/workflows/update-llms-txt.lock.yml](../../../../sources/microsoft__skills/.github/workflows/update-llms-txt.lock.yml)<br>[.github/workflows/update-llms-txt.md](../../../../sources/microsoft__skills/.github/workflows/update-llms-txt.md) |
| container | 1 | [.github/plugins/azure-skills/skills/microsoft-foundry/foundry-agent/deploy/deploy.md](../../../../sources/microsoft__skills/.github/plugins/azure-skills/skills/microsoft-foundry/foundry-agent/deploy/deploy.md) |
| instruction | 5 | [Agents.md](../../../../sources/microsoft__skills/Agents.md)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__skills/.github/copilot-instructions.md)<br>[.github/plugins/deep-wiki/commands/agents.md](../../../../sources/microsoft__skills/.github/plugins/deep-wiki/commands/agents.md)<br>[.github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md](../../../../sources/microsoft__skills/.github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md) |
| docs | 86 | [README.md](../../../../sources/microsoft__skills/README.md)<br>[tests/README.md](../../../../sources/microsoft__skills/tests/README.md)<br>[hooks/continual-learning/README.md](../../../../sources/microsoft__skills/hooks/continual-learning/README.md)<br>[docs-site/README.md](../../../../sources/microsoft__skills/docs-site/README.md)<br>[docs/.nojekyll](../../../../sources/microsoft__skills/docs/.nojekyll)<br>[docs/content-assets.mjs](../../../../sources/microsoft__skills/docs/content-assets.mjs)<br>[docs/content-modules.mjs](../../../../sources/microsoft__skills/docs/content-modules.mjs)<br>[docs/favicon.ico](../../../../sources/microsoft__skills/docs/favicon.ico) |
| config | 5 | [tests/package.json](../../../../sources/microsoft__skills/tests/package.json)<br>[tests/tsconfig.json](../../../../sources/microsoft__skills/tests/tsconfig.json)<br>[docs-site/package.json](../../../../sources/microsoft__skills/docs-site/package.json)<br>[docs-site/tsconfig.json](../../../../sources/microsoft__skills/docs-site/tsconfig.json)<br>[.github/skills/mcp-builder/scripts/requirements.txt](../../../../sources/microsoft__skills/.github/skills/mcp-builder/scripts/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 375 | [tests/.gitignore](../../../../sources/microsoft__skills/tests/.gitignore)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[tests/package-lock.json](../../../../sources/microsoft__skills/tests/package-lock.json)<br>[tests/package.json](../../../../sources/microsoft__skills/tests/package.json)<br>[tests/pnpm-lock.yaml](../../../../sources/microsoft__skills/tests/pnpm-lock.yaml)<br>[tests/README.md](../../../../sources/microsoft__skills/tests/README.md) |
| CI workflow | 5 | [.github/workflows/deploy-pages.yml](../../../../sources/microsoft__skills/.github/workflows/deploy-pages.yml)<br>[.github/workflows/skill-evaluation.yml](../../../../sources/microsoft__skills/.github/workflows/skill-evaluation.yml)<br>[.github/workflows/test-harness.yml](../../../../sources/microsoft__skills/.github/workflows/test-harness.yml)<br>[.github/workflows/update-llms-txt.lock.yml](../../../../sources/microsoft__skills/.github/workflows/update-llms-txt.lock.yml)<br>[.github/workflows/update-llms-txt.md](../../../../sources/microsoft__skills/.github/workflows/update-llms-txt.md) |
| 컨테이너/배포 | 1 | [.github/plugins/azure-skills/skills/microsoft-foundry/foundry-agent/deploy/deploy.md](../../../../sources/microsoft__skills/.github/plugins/azure-skills/skills/microsoft-foundry/foundry-agent/deploy/deploy.md) |
| 보안/정책 | 56 | [SECURITY.md](../../../../sources/microsoft__skills/SECURITY.md)<br>[tests/scenarios/azure-security-keyvault-secrets-java/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-secrets-java/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-secrets-java/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-secrets-java/scenarios.yaml)<br>[tests/scenarios/azure-security-keyvault-keys-java/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-java/acceptance-criteria.md)<br>[tests/scenarios/azure-security-keyvault-keys-java/scenarios.yaml](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-java/scenarios.yaml)<br>[tests/scenarios/azure-security-keyvault-keys-dotnet/acceptance-criteria.md](../../../../sources/microsoft__skills/tests/scenarios/azure-security-keyvault-keys-dotnet/acceptance-criteria.md) |
| 에이전트 지시문 | 5 | [Agents.md](../../../../sources/microsoft__skills/Agents.md)<br>[tests/AGENTS.md](../../../../sources/microsoft__skills/tests/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__skills/.github/copilot-instructions.md)<br>[.github/plugins/deep-wiki/commands/agents.md](../../../../sources/microsoft__skills/.github/plugins/deep-wiki/commands/agents.md)<br>[.github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md](../../../../sources/microsoft__skills/.github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/scenarios/mcp-builder/acceptance-criteria.md`, `tests/scenarios/mcp-builder/scenarios.yaml`, `docs-site/src/data/mcp-servers.json`.
2. agent/tool runtime 매핑: `Agents.md`, `tests/AGENTS.md`, `tests/schemas/skill-scenarios.schema.json`.
3. retrieval/memory/indexing 확인: `tests/scenarios/wiki-qa/acceptance-criteria.md`, `tests/scenarios/wiki-page-writer/acceptance-criteria.md`, `tests/scenarios/wiki-architect/acceptance-criteria.md`.
4. test/eval 파일로 동작 검증: `tests/.gitignore`, `tests/AGENTS.md`, `tests/package-lock.json`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Skills, MCP servers, Custom Agents, Agents.md for SDKs to ground Coding Agents. 핵심 구조 신호는 TypeScript, README.md, AGENTS.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
