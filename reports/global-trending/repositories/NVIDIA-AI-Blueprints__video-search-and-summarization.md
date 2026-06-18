# NVIDIA-AI-Blueprints/video-search-and-summarization

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization |
| local path | sources/NVIDIA-AI-Blueprints__video-search-and-summarization |
| HEAD | 01990363 |
| stars/forks | 1559 / 323 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-17T15:20:59Z |
| trendScore / priorityScore | 152 / 502 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | services/ui/apps/nemo-agent-toolkit-ui/docs/ui/README.md, .github/skill-eval/README.md, deploy/helm/developer-profiles/dev-profile-alerts/configs/vss-agent/README.md |
| Cloud native / infrastructure | 500 | .github/skill-eval/README.md, services/agent/README.md, services/agent/src/vss_agents/orchestrator/README.md |
| Database / data infrastructure | 500 | .github/skill-eval/README.md, libs/analytics/spatialai-data-utils/tools/evaluation/README.md, services/agent/README.md |
| Observability / evaluation | 446 | .github/skill-eval/README.md, libs/analytics/spatialai-data-utils/benchmarks/README.md, libs/analytics/spatialai-data-utils/tools/evaluation/README.md |
| MCP / agent interoperability | 185 | .github/skill-eval/README.md, services/agent/src/vss_agents/orchestrator/README.md, services/agent/src/vss_agents/video_analytics/README.md |
| Security / supply chain | 176 | services/ui/apps/nemo-agent-toolkit-ui/docs/ui/README.md, deploy/helm/developer-profiles/dev-profile-alerts/configs/vss-agent/README.md, deploy/helm/developer-profiles/dev-profile-base/configs/vss-agent/README.md |
| Data / ML platform | 172 | .github/skill-eval/README.md, libs/analytics/spatialai-data-utils/tools/evaluation/README.md, services/vios/src/framework/unified_storage/README.md |
| Developer tools / DX | 157 | .github/skill-eval/README.md, libs/analytics/spatialai-data-utils/tools/evaluation/README.md, libs/analytics/spatialai-data-utils/tools/validation_and_evaluation/README.md |
| RAG / retrieval / knowledge | 76 | services/agent/README.md, skills/vss-deploy-video-embedding/references/README.md, services/agent/AGENTS.md |
| Frontend / app framework | 74 | services/ui/apps/nemo-agent-toolkit-ui/docs/ui/README.md, services/ui/packages/nemo-agent-toolkit-ui/README.md, .openclaw/workspace/_nemoclaw/AGENTS.md |
| Coding agent / software automation | 65 | .github/skill-eval/README.md, .github/skill-eval/AGENTS.md, services/analytics/behavior-analytics/AGENTS.md |
| Local LLM / inference | 28 | .github/skill-eval/README.md, services/agent/README.md, services/ui/packages/nemo-agent-toolkit-ui/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 317 |
| tests | 1315 |
| ci/ops | 442 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Table of Contents / Overview / Use Case / Problem Description / Agent Workflows / Software Components / Target Audience / Repository Structure Overview / Documentation / Prerequisites / Obtain API Key | <h2 NVIDIA AI Blueprint Video Search and Summarization VSS </h2 Table of Contents Overview overview Use Case / Problem Description use case problem description Agent Workflows agent workflows Software Components software components Target Audience target audience Repository Structure Overview repository structure overview Documentation documentation Prerequisites prerequisites Hardware Requirements hardware requirements Quickstart Guide quickstart guide Contributing contributing License license Overview The NVIDIA Blueprint for Video Search and Summarization VSS https //docs.nvidia.com/vss/latest/index.html provides a suite of reference architectures for building vision agents and AI powered |


## Key Files

### Manifests

- services/ui/apps/nemo-agent-toolkit-ui/docs/ui/README.md
- .github/skill-eval/README.md
- deploy/helm/developer-profiles/dev-profile-alerts/configs/vss-agent/README.md
- deploy/helm/developer-profiles/dev-profile-base/configs/vss-agent/README.md
- deploy/helm/developer-profiles/dev-profile-lvs/configs/vss-agent/README.md
- deploy/helm/developer-profiles/dev-profile-search/configs/vss-agent/README.md
- libs/analytics/spatialai-data-utils/benchmarks/README.md
- libs/analytics/spatialai-data-utils/tools/evaluation/README.md
- libs/analytics/spatialai-data-utils/tools/validation_and_evaluation/README.md
- services/agent/README.md
- services/agent/src/vss_agents/orchestrator/README.md
- services/agent/src/vss_agents/video_analytics/README.md
- services/ui/packages/nemo-agent-toolkit-ui/components/Chat/README.md
- services/ui/packages/nemo-agent-toolkit-ui/components/Chatbar/README.md
- services/ui/packages/nemo-agent-toolkit-ui/components/Folder/README.md
- services/ui/packages/nemo-agent-toolkit-ui/components/Sidebar/README.md
- services/ui/packages/nemo-agent-toolkit-ui/README.md
- services/vios/mcp/README.md
- services/vios/src/framework/unified_storage/manager/README.md
- services/vios/src/framework/unified_storage/reader/README.md


### Spec / Docs / Prompt Artifacts

- .github/helm-sync/AGENTS.md
- .github/skill-eval/AGENTS.md
- .openclaw/workspace/_nemoclaw/AGENTS.md
- .openclaw/workspace/AGENTS.md
- services/agent/AGENTS.md
- services/analytics/behavior-analytics/AGENTS.md
- services/analytics/video-analytics-api/AGENTS.md
- services/analytics/behavior-analytics/CLAUDE.md
- services/analytics/video-analytics-api/CLAUDE.md
- services/video-summarization/CLAUDE.md
- services/vios/CLAUDE.md
- .github/skills-review/prompts/best-practices.md
- .github/skills-review/prompts/ce-code-review.md
- .github/skills-review/prompts/ce-doc-review.md
- .github/skills-review/prompts/codex.md
- .github/skills-review/prompts/gstack-review.md
- .github/skills-review/prompts/review.md
- services/alert/requirements.txt
- services/vios/.cursor/rules/vios-deep-storage-mgmt.mdc
- services/vios/.cursor/rules/vios-error-security.mdc


### Agent Instruction Files

- .github/helm-sync/AGENTS.md
- .github/skill-eval/AGENTS.md
- .openclaw/workspace/_nemoclaw/AGENTS.md
- .openclaw/workspace/AGENTS.md
- services/agent/AGENTS.md
- services/analytics/behavior-analytics/AGENTS.md
- services/analytics/video-analytics-api/AGENTS.md
- services/analytics/behavior-analytics/CLAUDE.md
- services/analytics/video-analytics-api/CLAUDE.md
- services/video-summarization/CLAUDE.md
- services/vios/CLAUDE.md
- .github/skills-review/prompts/best-practices.md
- .github/skills-review/prompts/ce-code-review.md
- .github/skills-review/prompts/ce-doc-review.md
- .github/skills-review/prompts/codex.md


## Top Directories

| dir | count |
| --- | --- |
| services | 6885 |
| deploy | 517 |
| libs | 249 |
| skills | 229 |
| .github | 98 |
| .openclaw | 13 |
| .gitattributes | 1 |
| .gitignore | 1 |
| assets | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE-3rd-party.txt | 1 |
| LICENSE.DATA | 1 |
| README.md | 1 |
| release_metadata.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .h | 3514 |
| .py | 1324 |
| .json | 340 |
| .md | 299 |
| .yaml | 299 |
| .tsx | 295 |
| .ts | 220 |
| .hh | 206 |
| .cpp | 201 |
| .sh | 192 |
| [no-ext] | 187 |
| .js | 171 |
| .yml | 98 |
| .hpp | 72 |
| .hxx | 72 |
| .env | 67 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
