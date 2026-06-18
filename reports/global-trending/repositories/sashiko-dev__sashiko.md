# sashiko-dev/sashiko

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/sashiko-dev/sashiko |
| local path | sources/sashiko-dev__sashiko |
| HEAD | 47e7035 |
| stars/forks | 814 / 153 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T23:53:21Z |
| trendScore / priorityScore | 140 / 408 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 426 | third_party/prompts/kernel/README.md, README.md, docs/examples/Settings.devin-cli.toml |
| Developer tools / DX | 136 | README.md, GEMINI.md, Cargo.toml |
| Security / supply chain | 48 | third_party/prompts/iproute/README.md, third_party/prompts/kernel/README.md, README.md |
| Coding agent / software automation | 46 | third_party/prompts/kernel/README.md, third_party/prompts/README.md, third_party/prompts/systemd/README.md |
| Observability / evaluation | 46 | README.md, GEMINI.md, Cargo.toml |
| MCP / agent interoperability | 23 | third_party/prompts/kernel/README.md, docs/llm-providers.md, third_party/prompts/kernel/agent/side-effect.md |
| Cloud native / infrastructure | 20 | third_party/prompts/systemd/README.md, GEMINI.md, Dockerfile |
| Data / ML platform | 16 | third_party/prompts/kernel/coccinelle.md, third_party/prompts/kernel/subsystem/arm64.md, third_party/prompts/kernel/subsystem/drm.md |
| Database / data infrastructure | 16 | README.md, GEMINI.md, Dockerfile |
| RAG / retrieval / knowledge | 7 | third_party/prompts/README.md, third_party/prompts/kernel/agent/debug-commits.md, third_party/prompts/kernel/agent/lore.md |
| Local LLM / inference | 1 | Cargo.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python, Rust |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 309 |
| manifests | 9 |
| docs | 195 |
| tests | 16 |
| ci/ops | 6 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Sashiko | Sashiko / Quality of reviews / Features / Prompts / Review Stages / Important Disclaimers / 1. Data Privacy and Code Sharing / 2. Operational Costs / Prerequisites / Installation | Sashiko ! Sashiko Logo static/logo.png ! Linux Foundation https //img.shields.io/badge/Linux%20Foundation Project blue.svg https //www.linuxfoundation.org/ Sashiko 刺し子, literally "little stabs" is a form of decorative reinforcement stitching from Japan. Originally used to reinforce points of wear or to repair worn places or tears with patches, here it represents our mission to reinforce the Linux kernel through automated, intelligent patch review. Sashiko is an agentic Linux kernel code review system. It uses a set Linux kernel specific prompts and a special protocol to review proposed Linux kernel changes. Sashiko can ingest patches from mailing lists or local git. It's fully self contained |


## Key Files

### Manifests

- third_party/prompts/iproute/README.md
- third_party/prompts/kernel/README.md
- third_party/prompts/README.md
- third_party/prompts/systemd/README.md
- README.md
- GEMINI.md
- Cargo.toml
- Dockerfile
- Makefile


### Spec / Docs / Prompt Artifacts

- third_party/prompts/iproute/README.md
- third_party/prompts/kernel/README.md
- third_party/prompts/README.md
- third_party/prompts/systemd/README.md
- GEMINI.md
- third_party/prompts/kernel/examples/review-stat.txt
- third_party/prompts/kernel/sample.txt
- third_party/prompts/kernel/subsystem/selftests.md
- third_party/prompts/iproute/argument-parsing.md
- third_party/prompts/iproute/coding-style.md
- third_party/prompts/iproute/common-bugs.md
- third_party/prompts/iproute/false-positive-guide.md
- third_party/prompts/iproute/json-output.md
- third_party/prompts/iproute/json.md
- third_party/prompts/iproute/kernel-compat.md
- third_party/prompts/iproute/netlink.md
- third_party/prompts/iproute/patch-submission.md
- third_party/prompts/iproute/review-core.md
- third_party/prompts/iproute/scripts/claude-setup.sh
- third_party/prompts/iproute/skills/iproute2.md


### Agent Instruction Files

- third_party/prompts/iproute/README.md
- third_party/prompts/kernel/README.md
- third_party/prompts/README.md
- third_party/prompts/systemd/README.md
- GEMINI.md
- third_party/prompts/kernel/examples/review-stat.txt
- third_party/prompts/kernel/sample.txt
- third_party/prompts/kernel/subsystem/selftests.md
- third_party/prompts/iproute/argument-parsing.md
- third_party/prompts/iproute/coding-style.md
- third_party/prompts/iproute/common-bugs.md
- third_party/prompts/iproute/false-positive-guide.md
- third_party/prompts/iproute/json-output.md
- third_party/prompts/iproute/json.md
- third_party/prompts/iproute/kernel-compat.md


## Top Directories

| dir | count |
| --- | --- |
| third_party | 153 |
| src | 46 |
| designs | 34 |
| tests | 15 |
| docs | 14 |
| sashiko.dev | 13 |
| .github | 6 |
| benchmarks | 6 |
| skills | 5 |
| scripts | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .yamllint | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 185 |
| .rs | 60 |
| .toml | 12 |
| .yaml | 11 |
| [no-ext] | 11 |
| .sh | 9 |
| .yml | 6 |
| .json | 5 |
| .py | 4 |
| .txt | 2 |
| .example | 1 |
| .html | 1 |
| .nix | 1 |
| .sql | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
