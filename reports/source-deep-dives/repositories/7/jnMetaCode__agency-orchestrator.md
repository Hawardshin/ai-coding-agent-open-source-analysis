# jnMetaCode/agency-orchestrator 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

🚀 One sentence → multi-AI-role collaboration → complete plan in minutes. Built on the agency-agents role library (216+ experts), zero-code YAML, web Studio + desktop app, 10 LLM providers (7 free). 基于 agency-agents 专家库，一句话调度多个 AI 专家自动协作，几分钟交付完整方案。

## 요약

- 조사 단위: `sources/jnMetaCode__agency-orchestrator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 920 files, 151 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=website/public/prompts/zh/specialized/specialized-mcp-builder.md, website/public/prompts/en/specialized/specialized-mcp-builder.md, test/mcp.ts이고, 의존성 단서는 anthropic, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jnMetaCode/agency-orchestrator |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jnMetaCode__agency-orchestrator](../../../../sources/jnMetaCode__agency-orchestrator) |
| 기존 보고서 | [reports/korea-trending/repositories/jnMetaCode__agency-orchestrator.md](../../../korea-trending/repositories/jnMetaCode__agency-orchestrator.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 920 / 151 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, agency-agents, desktop, docs, eval, examples, integrations, scripts, src, test, web, website, workflows |
| 상위 확장자 | .md: 674, .ts: 85, .yaml: 56, .tsx: 51, .json: 11, .sh: 8, .png: 7, (none): 7, .yml: 6, .html: 3, .gif: 2, .js: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 8 |
| src | source boundary | 8 |
| web | source boundary | 5 |
| .github | ci surface | 1 |
| agency-agents | top-level component | 1 |
| desktop | top-level component | 1 |
| eval | top-level component | 1 |
| examples | top-level component | 1 |
| examples/sample-prd.md | examples workspace | 1 |
| integrations | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| website | documentation surface | 1 |
| workflows | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | dev | tsc --watch |
| utility | package.json | eval | npx tsx eval/run-eval.ts |
| utility | package.json | eval:gate | npx tsx eval/run-eval.ts --gate |
| utility | package.json | eval:baseline | npx tsx eval/run-eval.ts --save-baseline |
| build | package.json | build:studio | npm --prefix website install && npm --prefix website run build |
| test | package.json | test | npx tsx test/run.ts && npx tsx test/condition.ts && npx tsx test/cli.ts && npx tsx test/cli-base.ts && npx tsx test/compose.ts && npx tsx test/demo.ts && npx tsx test/factory-custom.ts && npx tsx test/azure-compat.ts && |
| build | package.json | prepublishOnly | npm run build && npm run build:studio |
| entrypoint | package.json bin | cli.js | dist/cli.js |
| entrypoint | package.json bin | cli.js | dist/cli.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | modelcontextprotocol |
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
| mcp | [website/public/prompts/zh/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/specialized-mcp-builder.md) | mcp signal |
| mcp | [website/public/prompts/en/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/specialized-mcp-builder.md) | mcp signal |
| mcp | [test/mcp.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/mcp.ts) | mcp signal |
| mcp | [src/mcp/server.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/mcp/server.ts) | mcp signal |
| agentRuntime | [website/public/prompts/zh/specialized/agents-orchestrator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/agents-orchestrator.md) | agentRuntime signal |
| agentRuntime | [website/public/prompts/en/specialized/agents-orchestrator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/agents-orchestrator.md) | agentRuntime signal |
| agentRuntime | [src/core/executor.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/core/executor.ts) | agentRuntime signal |
| agentRuntime | [src/agents/loader.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/agents/loader.ts) | agentRuntime signal |
| entrypoints | [website/src/App.tsx](../../../../sources/jnMetaCode__agency-orchestrator/website/src/App.tsx) | entrypoints signal |
| entrypoints | [website/src/index.css](../../../../sources/jnMetaCode__agency-orchestrator/website/src/index.css) | entrypoints signal |
| entrypoints | [website/src/main.tsx](../../../../sources/jnMetaCode__agency-orchestrator/website/src/main.tsx) | entrypoints signal |
| entrypoints | [web/server.js](../../../../sources/jnMetaCode__agency-orchestrator/web/server.js) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [website/src/App.tsx](../../../../sources/jnMetaCode__agency-orchestrator/website/src/App.tsx)<br>[website/src/index.css](../../../../sources/jnMetaCode__agency-orchestrator/website/src/index.css)<br>[website/src/main.tsx](../../../../sources/jnMetaCode__agency-orchestrator/website/src/main.tsx)<br>[web/server.js](../../../../sources/jnMetaCode__agency-orchestrator/web/server.js)<br>[src/cli.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/cli.ts)<br>[src/index.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/mcp/server.ts) |
| agentRuntime | 14 | [website/public/prompts/zh/specialized/agents-orchestrator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/agents-orchestrator.md)<br>[website/public/prompts/en/specialized/agents-orchestrator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/agents-orchestrator.md)<br>[src/core/executor.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/core/executor.ts)<br>[src/agents/loader.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/agents/loader.ts)<br>[integrations/deerflow/SKILL.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/deerflow/SKILL.md)<br>[integrations/cursor/workflow-runner.mdc](../../../../sources/jnMetaCode__agency-orchestrator/integrations/cursor/workflow-runner.mdc)<br>[integrations/antigravity/AGENTS.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/antigravity/AGENTS.md)<br>[agency-agents/strategy/coordination/agent-activation-prompts.md](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/strategy/coordination/agent-activation-prompts.md) |
| mcp | 10 | [website/public/prompts/zh/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/specialized-mcp-builder.md)<br>[website/public/prompts/en/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/specialized-mcp-builder.md)<br>[test/mcp.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/mcp.ts)<br>[src/mcp/server.ts](../../../../sources/jnMetaCode__agency-orchestrator/src/mcp/server.ts)<br>[docs/superpowers/specs/2026-03-26-mcp-server-design.md](../../../../sources/jnMetaCode__agency-orchestrator/docs/superpowers/specs/2026-03-26-mcp-server-design.md)<br>[docs/superpowers/plans/2026-03-26-mcp-server.md](../../../../sources/jnMetaCode__agency-orchestrator/docs/superpowers/plans/2026-03-26-mcp-server.md)<br>[agency-agents/specialized/specialized-mcp-builder.md](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/specialized/specialized-mcp-builder.md)<br>[agency-agents/integrations/mcp-memory/backend-architect-with-memory.md](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/integrations/mcp-memory/backend-architect-with-memory.md) |
| retrieval | 18 | [website/index.html](../../../../sources/jnMetaCode__agency-orchestrator/website/index.html)<br>[website/src/index.css](../../../../sources/jnMetaCode__agency-orchestrator/website/src/index.css)<br>[website/public/prompts/zh/specialized/identity-graph-operator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/identity-graph-operator.md)<br>[website/public/prompts/zh/specialized/lsp-index-engineer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/lsp-index-engineer.md)<br>[website/public/prompts/zh/marketing/marketing-knowledge-commerce-strategist.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/marketing/marketing-knowledge-commerce-strategist.md)<br>[website/public/prompts/zh/game-development/unity/unity-shader-graph-artist.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/game-development/unity/unity-shader-graph-artist.md)<br>[website/public/prompts/en/specialized/identity-graph-operator.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/identity-graph-operator.md)<br>[website/public/prompts/en/specialized/lsp-index-engineer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/specialized/lsp-index-engineer.md) |
| spec | 38 | [workflows/en/code-architecture-review.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/en/code-architecture-review.yaml)<br>[workflows/dev/tech-design-review.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/tech-design-review.yaml)<br>[workflows/design/requirement-to-plan.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/design/requirement-to-plan.yaml)<br>[workflows/design/ux-review.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/design/ux-review.yaml)<br>[workflows/data/dashboard-design.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/data/dashboard-design.yaml)<br>[website/public/prompts/zh/engineering/engineering-fpga-digital-design-engineer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/engineering/engineering-fpga-digital-design-engineer.md)<br>[website/public/prompts/zh/engineering/engineering-mechanical-design-engineer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/engineering/engineering-mechanical-design-engineer.md)<br>[website/public/prompts/zh/design/design-brand-guardian.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/design/design-brand-guardian.md) |
| eval | 39 | [EVAL_FINDINGS.md](../../../../sources/jnMetaCode__agency-orchestrator/EVAL_FINDINGS.md)<br>[website/public/prompts/zh/testing/testing-test-results-analyzer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/testing/testing-test-results-analyzer.md)<br>[website/public/prompts/en/testing/testing-test-results-analyzer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/testing/testing-test-results-analyzer.md)<br>[web/DESIGN-SPEC.md](../../../../sources/jnMetaCode__agency-orchestrator/web/DESIGN-SPEC.md)<br>[test/azure-compat.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/azure-compat.ts)<br>[test/cli-base.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/cli-base.ts)<br>[test/cli.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/cli.ts)<br>[test/compose-name.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/compose-name.ts) |
| security | 20 | [workflows/dev/security-audit.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/security-audit.yaml)<br>[workflows/dev/tech-debt-audit.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/tech-debt-audit.yaml)<br>[website/public/prompts/zh/support/support-legal-compliance-checker.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/support/support-legal-compliance-checker.md)<br>[website/public/prompts/zh/specialized/blockchain-security-auditor.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/blockchain-security-auditor.md)<br>[website/public/prompts/zh/specialized/compliance-auditor.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/compliance-auditor.md)<br>[website/public/prompts/zh/specialized/healthcare-marketing-compliance.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/healthcare-marketing-compliance.md)<br>[website/public/prompts/zh/specialized/specialized-ai-policy-writer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/specialized-ai-policy-writer.md)<br>[website/public/prompts/zh/legal/legal-policy-writer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/legal/legal-policy-writer.md) |
| ci | 3 | [agency-agents/.github/workflows/lint-agents.yml](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/.github/workflows/lint-agents.yml)<br>[.github/workflows/ci.yml](../../../../sources/jnMetaCode__agency-orchestrator/.github/workflows/ci.yml)<br>[.github/workflows/release-desktop.yml](../../../../sources/jnMetaCode__agency-orchestrator/.github/workflows/release-desktop.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 4 | [CLAUDE.md](../../../../sources/jnMetaCode__agency-orchestrator/CLAUDE.md)<br>[integrations/gemini-cli/GEMINI.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/gemini-cli/GEMINI.md)<br>[integrations/copilot/copilot-instructions.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/copilot/copilot-instructions.md)<br>[integrations/antigravity/AGENTS.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/antigravity/AGENTS.md) |
| docs | 529 | [README.en.md](../../../../sources/jnMetaCode__agency-orchestrator/README.en.md)<br>[README.md](../../../../sources/jnMetaCode__agency-orchestrator/README.md)<br>[workflows/dev/readme-i18n.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/readme-i18n.yaml)<br>[website/index.html](../../../../sources/jnMetaCode__agency-orchestrator/website/index.html)<br>[website/package-lock.json](../../../../sources/jnMetaCode__agency-orchestrator/website/package-lock.json)<br>[website/package.json](../../../../sources/jnMetaCode__agency-orchestrator/website/package.json)<br>[website/postcss.config.js](../../../../sources/jnMetaCode__agency-orchestrator/website/postcss.config.js)<br>[website/README.md](../../../../sources/jnMetaCode__agency-orchestrator/website/README.md) |
| config | 5 | [package.json](../../../../sources/jnMetaCode__agency-orchestrator/package.json)<br>[tsconfig.json](../../../../sources/jnMetaCode__agency-orchestrator/tsconfig.json)<br>[website/package.json](../../../../sources/jnMetaCode__agency-orchestrator/website/package.json)<br>[website/tsconfig.json](../../../../sources/jnMetaCode__agency-orchestrator/website/tsconfig.json)<br>[desktop/package.json](../../../../sources/jnMetaCode__agency-orchestrator/desktop/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 39 | [EVAL_FINDINGS.md](../../../../sources/jnMetaCode__agency-orchestrator/EVAL_FINDINGS.md)<br>[website/public/prompts/zh/testing/testing-test-results-analyzer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/testing/testing-test-results-analyzer.md)<br>[website/public/prompts/en/testing/testing-test-results-analyzer.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/en/testing/testing-test-results-analyzer.md)<br>[web/DESIGN-SPEC.md](../../../../sources/jnMetaCode__agency-orchestrator/web/DESIGN-SPEC.md)<br>[test/azure-compat.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/azure-compat.ts)<br>[test/cli-base.ts](../../../../sources/jnMetaCode__agency-orchestrator/test/cli-base.ts) |
| CI workflow | 3 | [agency-agents/.github/workflows/lint-agents.yml](../../../../sources/jnMetaCode__agency-orchestrator/agency-agents/.github/workflows/lint-agents.yml)<br>[.github/workflows/ci.yml](../../../../sources/jnMetaCode__agency-orchestrator/.github/workflows/ci.yml)<br>[.github/workflows/release-desktop.yml](../../../../sources/jnMetaCode__agency-orchestrator/.github/workflows/release-desktop.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 20 | [workflows/dev/security-audit.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/security-audit.yaml)<br>[workflows/dev/tech-debt-audit.yaml](../../../../sources/jnMetaCode__agency-orchestrator/workflows/dev/tech-debt-audit.yaml)<br>[website/public/prompts/zh/support/support-legal-compliance-checker.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/support/support-legal-compliance-checker.md)<br>[website/public/prompts/zh/specialized/blockchain-security-auditor.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/blockchain-security-auditor.md)<br>[website/public/prompts/zh/specialized/compliance-auditor.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/compliance-auditor.md)<br>[website/public/prompts/zh/specialized/healthcare-marketing-compliance.md](../../../../sources/jnMetaCode__agency-orchestrator/website/public/prompts/zh/specialized/healthcare-marketing-compliance.md) |
| 에이전트 지시문 | 4 | [CLAUDE.md](../../../../sources/jnMetaCode__agency-orchestrator/CLAUDE.md)<br>[integrations/gemini-cli/GEMINI.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/gemini-cli/GEMINI.md)<br>[integrations/copilot/copilot-instructions.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/copilot/copilot-instructions.md)<br>[integrations/antigravity/AGENTS.md](../../../../sources/jnMetaCode__agency-orchestrator/integrations/antigravity/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `website/public/prompts/zh/specialized/specialized-mcp-builder.md`, `website/public/prompts/en/specialized/specialized-mcp-builder.md`, `test/mcp.ts`.
2. entrypoint를 따라 실행 흐름 확인: `website/src/App.tsx`, `website/src/index.css`, `website/src/main.tsx`.
3. agent/tool runtime 매핑: `website/public/prompts/zh/specialized/agents-orchestrator.md`, `website/public/prompts/en/specialized/agents-orchestrator.md`, `src/core/executor.ts`.
4. retrieval/memory/indexing 확인: `website/index.html`, `website/src/index.css`, `website/public/prompts/zh/specialized/identity-graph-operator.md`.
5. test/eval 파일로 동작 검증: `EVAL_FINDINGS.md`, `website/public/prompts/zh/testing/testing-test-results-analyzer.md`, `website/public/prompts/en/testing/testing-test-results-analyzer.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🚀 One sentence → multi AI role collaboration → complete plan in minutes. Built on the agency agents role library 216+ e. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, anthropic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
