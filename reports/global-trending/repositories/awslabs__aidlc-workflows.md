# awslabs/aidlc-workflows

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/awslabs/aidlc-workflows |
| local path | sources/awslabs__aidlc-workflows |
| HEAD | 31edd16 |
| stars/forks | 2968 / 484 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:23:29Z |
| trendScore / priorityScore | 153 / 481 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 500 | scripts/aidlc-evaluator/test_cases/all-stages/README.md, scripts/aidlc-evaluator/packages/execution/README.md, scripts/aidlc-evaluator/README.md |
| AI agent / orchestration | 314 | scripts/aidlc-evaluator/test_cases/all-stages/README.md, scripts/aidlc-evaluator/packages/execution/README.md, scripts/aidlc-evaluator/README.md |
| Developer tools / DX | 302 | scripts/aidlc-evaluator/test_cases/all-stages/README.md, scripts/aidlc-evaluator/packages/execution/README.md, scripts/aidlc-evaluator/README.md |
| Observability / evaluation | 235 | scripts/aidlc-evaluator/test_cases/all-stages/README.md, scripts/aidlc-evaluator/packages/execution/README.md, scripts/aidlc-evaluator/README.md |
| Coding agent / software automation | 145 | scripts/aidlc-evaluator/README.md, scripts/aidlc-evaluator/scripts/README.md, AGENTS.md |
| Cloud native / infrastructure | 110 | scripts/aidlc-evaluator/test_cases/all-stages/README.md, scripts/aidlc-evaluator/README.md, AGENTS.md |
| Data / ML platform | 70 | scripts/aidlc-evaluator/test_cases/all-stages/README.md, scripts/aidlc-evaluator/README.md, scripts/aidlc-evaluator/scripts/README.md |
| Database / data infrastructure | 48 | scripts/aidlc-designreview/docs/security/THREAT_MODEL.md, docs/DEVELOPERS_GUIDE.md, docs/writing-inputs/example-minimal-tech-env-brownfield.md |
| Frontend / app framework | 27 | docs/GENERATED_DOCS_REFERENCE.md, docs/WORKING-WITH-AIDLC.md, docs/writing-inputs/example-minimal-tech-env-brownfield.md |
| MCP / agent interoperability | 20 | AGENTS.md, README.md |
| RAG / retrieval / knowledge | 3 | docs/writing-inputs/example-vision-scientific-calculator-api.md, scripts/aidlc-evaluator/packages/trend-reports/tests/test_fetcher.py |
| Local LLM / inference | 1 | scripts/aidlc-designreview/docs/ai-security/MODEL_LEGAL_APPROVAL.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 545 |
| manifests | 27 |
| docs | 187 |
| tests | 116 |
| ci/ops | 9 |
| spec artifacts | 18 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AI-DLC (AI-Driven Development Life Cycle) | AI-DLC (AI-Driven Development Life Cycle) / 🚀 **Announcing 2.0 (Preview)** / Table of Contents / Common / Platform-Specific Setup / Kiro / Amazon Q Developer IDE Plugin/Extension / Cursor IDE / Cline / Claude Code | AI DLC AI Driven Development Life Cycle 🚀 Announcing 2.0 Preview We're excited to announce the Preview release of AI DLC Workflows 2.0. The new version makes autonomous software development practical by turning AI agents into verifiable, self correcting engineering workflows. You can read the full specification here https //github.com/awslabs/aidlc workflows/blob/v2/assets/AI DLC Workflows 2.0 Specification.pdf and check the v2 branch https //github.com/awslabs/aidlc workflows/tree/v2 . We would love to hear from you, and your feedback will directly shape the path to GA. If you have suggestions, please reach out or interact with us on the repository. !IMPORTANT Generative AI can make mistak |


## Key Files

### Manifests

- scripts/aidlc-evaluator/test_cases/all-stages/README.md
- scripts/aidlc-evaluator/packages/execution/README.md
- scripts/aidlc-evaluator/README.md
- scripts/aidlc-evaluator/scripts/README.md
- AGENTS.md
- README.md
- scripts/aidlc-designreview/README.md
- scripts/aidlc-designreview/tool-install/README.md
- scripts/aidlc-traceability/README.md
- scripts/aidlc-traceability/requirements/README.md
- scripts/aidlc-evaluator/packages/contracttest/pyproject.toml
- scripts/aidlc-evaluator/docker/sandbox/Dockerfile
- scripts/aidlc-evaluator/packages/cli-harness/pyproject.toml
- scripts/aidlc-evaluator/packages/execution/pyproject.toml
- scripts/aidlc-evaluator/packages/ide-harness/pyproject.toml
- scripts/aidlc-evaluator/packages/nonfunctional/pyproject.toml
- scripts/aidlc-evaluator/packages/qualitative/pyproject.toml
- scripts/aidlc-evaluator/packages/quantitative/pyproject.toml
- scripts/aidlc-evaluator/packages/reporting/pyproject.toml
- scripts/aidlc-evaluator/packages/shared/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- scripts/aidlc-designreview/config/prompts/alternatives-v1.md
- scripts/aidlc-designreview/config/prompts/critique-v1.md
- scripts/aidlc-designreview/config/prompts/gap-v1.md
- scripts/aidlc-designreview/tool-install/prompts/alternatives-v1.md
- scripts/aidlc-designreview/tool-install/prompts/critique-v1.md
- scripts/aidlc-designreview/tool-install/prompts/gap-v1.md
- scripts/aidlc-evaluator/test_cases/all-stages/golden-aidlc-docs/aidlc-docs/inception/requirements/requirements.md
- scripts/aidlc-evaluator/test_cases/sci-calc/golden-aidlc-docs/inception/requirements/requirements.md
- scripts/aidlc-designreview/docs/architecture/diagrams/01-system-context.mmd
- scripts/aidlc-designreview/docs/architecture/diagrams/02-layered-architecture.mmd
- scripts/aidlc-designreview/docs/architecture/diagrams/03-data-flow.mmd
- scripts/aidlc-designreview/docs/architecture/diagrams/04-component-interaction.mmd
- scripts/aidlc-designreview/docs/architecture/SYSTEM_ARCHITECTURE.md
- scripts/aidlc-traceability/docs/architecture.md
- scripts/aidlc-evaluator/ARCHITECTURE.md
- .claude/settings.json
- .kiro/steering/pr-conventions.md


### Agent Instruction Files

- AGENTS.md
- scripts/aidlc-designreview/config/prompts/alternatives-v1.md
- scripts/aidlc-designreview/config/prompts/critique-v1.md
- scripts/aidlc-designreview/config/prompts/gap-v1.md
- scripts/aidlc-designreview/tool-install/prompts/alternatives-v1.md
- scripts/aidlc-designreview/tool-install/prompts/critique-v1.md
- scripts/aidlc-designreview/tool-install/prompts/gap-v1.md
- .claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| scripts | 463 |
| aidlc-rules | 34 |
| .github | 17 |
| docs | 13 |
| .bandit | 1 |
| .checkov.yaml | 1 |
| .claude | 1 |
| .gitignore | 1 |
| .gitleaks-baseline.json | 1 |
| .gitleaks.toml | 1 |
| .grype.yaml | 1 |
| .kiro | 1 |
| .markdownlint-cli2.yaml | 1 |
| .pre-commit-config.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 253 |
| .md | 182 |
| .yaml | 25 |
| .toml | 15 |
| .yml | 15 |
| [no-ext] | 13 |
| .sh | 12 |
| .bats | 8 |
| .json | 8 |
| .license | 4 |
| .mmd | 4 |
| .html | 2 |
| .jinja2 | 2 |
| .example | 1 |
| .ps1 | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
