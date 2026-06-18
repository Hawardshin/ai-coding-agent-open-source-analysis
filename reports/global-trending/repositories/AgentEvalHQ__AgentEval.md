# AgentEvalHQ/AgentEval

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/AgentEvalHQ/AgentEval |
| local path | sources/AgentEvalHQ__AgentEval |
| HEAD | 871dff7 |
| stars/forks | 124 / 10 |
| language | C# |
| license |  |
| pushedAt | 2026-06-17T08:27:24Z |
| trendScore / priorityScore | 133 / 444 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | samples/AgentEval.NuGetConsumer.Tests/README.md, samples/AgentEval.NuGetConsumer/README.md, samples/AgentEval.Samples/Benchmarks/README.md |
| Observability / evaluation | 500 | samples/AgentEval.NuGetConsumer.Tests/README.md, samples/AgentEval.NuGetConsumer/README.md, samples/AgentEval.Samples/Benchmarks/README.md |
| Security / supply chain | 500 | samples/AgentEval.NuGetConsumer/README.md, samples/AgentEval.Samples/Benchmarks/README.md, samples/AgentEval.Samples/README.md |
| Developer tools / DX | 411 | samples/AgentEval.Samples/Benchmarks/README.md, samples/AgentEval.Samples/README.md, docs/adr/README.md |
| RAG / retrieval / knowledge | 295 | samples/AgentEval.NuGetConsumer/README.md, samples/AgentEval.Samples/README.md, tests/AgentEval.Tests/README.md |
| Data / ML platform | 256 | samples/AgentEval.NuGetConsumer.Tests/README.md, samples/AgentEval.Samples/Benchmarks/README.md, samples/AgentEval.Samples/README.md |
| Cloud native / infrastructure | 42 | README.md, src/AgentEval.MissionControl.Spa/vite.config.ts, docker-compose.yml |
| Frontend / app framework | 40 | src/AgentEval.MissionControl.Spa/README.md, README.md, src/AgentEval.MissionControl.Spa/package.json |
| Coding agent / software automation | 20 | src/AgentEval.Evals.Agentic/README.md, AGENTS.md, CLAUDE.md |
| Database / data infrastructure | 18 | src/AgentEval.Compliance.EuAiAct/README.md, docs/security-scanning.md, docs/benchmarks/eu-ai-act/getting-started.md |
| Local LLM / inference | 18 | src/AgentEval.Cli/README.md, docs/cli.md, docs/GlassBox/AgentEval-GlassBox-Proposal-v0.11.md |
| MCP / agent interoperability | 8 | AGENTS.md, CLAUDE.md, .github/copilot-instructions.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, .NET |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1774 |
| manifests | 23 |
| docs | 191 |
| tests | 538 |
| ci/ops | 10 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install (one-time, global) | The Code You Have Been Dreaming Of / 🥇 Assert on Tool Chains Like You Have Always Imagined / 🥈 Stochastic Evaluation: Because LLMs Are Non-Deterministic / 🥉 Workflow Evaluation: Multi-Agent Flows as Executable Assertions / Performance SLAs as Executable Evaluations / Behavioral Policy Guardrails (Compliance as Code) / Compare Models, Get a Winner, Ship with Confidence / Model Comparison Results / Combined: Stochastic + Model Comparison / RAG Quality: Is Your Agent Hallucinating? | AgentEval <p align="center" <img src="assets/AgentEval bounded.png" alt="AgentEval Logo" width="450" / </p <p align="center" <strong The .NET Evaluation Toolkit for AI Agents</strong </p <p align="center" <a href="https //github.com/AgentEvalHQ/AgentEval/actions/workflows/ci.yml" <img src="https //github.com/AgentEvalHQ/AgentEval/actions/workflows/ci.yml/badge.svg" alt="Build" / </a <a href="https //github.com/AgentEvalHQ/AgentEval/actions/workflows/security.yml" <img src="https //github.com/AgentEvalHQ/AgentEval/actions/workflows/security.yml/badge.svg" alt="Security" / </a <a href="https //codecov.io/gh/AgentEvalHQ/AgentEval" <img src="https //codecov.io/gh/AgentEvalHQ/AgentEval/graph/badg |


## Key Files

### Manifests

- samples/AgentEval.NuGetConsumer.Tests/README.md
- samples/AgentEval.NuGetConsumer/README.md
- samples/AgentEval.Samples/Benchmarks/README.md
- samples/AgentEval.Samples/README.md
- tests/AgentEval.Tests/README.md
- docs/adr/README.md
- src/AgentEval.Cli/README.md
- src/AgentEval.Compliance.EuAiAct/README.md
- src/AgentEval.Compliance.Gdpr/README.md
- src/AgentEval.Evals.Agentic/README.md
- src/AgentEval.MissionControl.Spa/README.md
- src/AgentEval/README.md
- AGENTS.md
- README.md
- samples/datasets/README.md
- CLAUDE.md
- src/AgentEval.MissionControl.Spa/package.json
- src/AgentEval.MissionControl.Spa/tsconfig.json
- src/AgentEval.MissionControl.Spa/vite.config.ts
- docker-compose.yml


### Spec / Docs / Prompt Artifacts

- docs/adr/README.md
- AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- docs/adr/003-cli-review-commands.md
- docs/adr/009-benchmark-strategy.md
- docs/adr/017-unified-benchmarks-namespace.md
- docs/adr/020-agenttrace-v1_1-schema.md
- src/AgentEval.Compliance.EuAiAct/Resources/Prompts/eu-ai-act-judge-system.v1.md
- src/AgentEval.Compliance.EuAiAct/Resources/Prompts/per-criterion.v1.md
- src/AgentEval.Compliance.Gdpr/Resources/Prompts/gdpr-judge-system.v1.md
- src/AgentEval.Compliance.Gdpr/Resources/Prompts/per-criterion.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/adversarial/direct-injection.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/adversarial/jailbreak-resistance.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/adversarial/persona-attack.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/calibration/confidence-calibration.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/calibration/self-correction-quality.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/calibration/uncertainty-acknowledgment.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/memory/long-conversation-coherence.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/memory/memory-recall-accuracy.v1.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- src/AgentEval.Compliance.EuAiAct/Resources/Prompts/eu-ai-act-judge-system.v1.md
- src/AgentEval.Compliance.EuAiAct/Resources/Prompts/per-criterion.v1.md
- src/AgentEval.Compliance.Gdpr/Resources/Prompts/gdpr-judge-system.v1.md
- src/AgentEval.Compliance.Gdpr/Resources/Prompts/per-criterion.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/adversarial/direct-injection.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/adversarial/jailbreak-resistance.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/adversarial/persona-attack.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/calibration/confidence-calibration.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/calibration/self-correction-quality.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/calibration/uncertainty-acknowledgment.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/memory/long-conversation-coherence.v1.md
- src/AgentEval.Evals.Agentic/Resources/Prompts/memory/memory-recall-accuracy.v1.md


## Top Directories

| dir | count |
| --- | --- |
| src | 962 |
| tests | 538 |
| samples | 123 |
| docs | 89 |
| .github | 33 |
| .claude | 2 |
| scripts | 2 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| .vscode | 1 |
| AgentEval.sln | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cs | 1285 |
| .md | 185 |
| .json | 101 |
| .yaml | 61 |
| .jsonl | 34 |
| .tsx | 33 |
| .csproj | 22 |
| [no-ext] | 15 |
| .yml | 12 |
| .ts | 9 |
| .html | 3 |
| .css | 2 |
| .props | 2 |
| .txt | 2 |
| .bat | 1 |
| .csv | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
