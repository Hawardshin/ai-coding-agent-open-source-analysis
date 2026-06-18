# TabbyML/tabby

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/TabbyML/tabby |
| local path | sources/TabbyML__tabby |
| HEAD | e8608d6 |
| stars/forks | 33609 / 1758 |
| language | Rust |
| license | NOASSERTION |
| pushedAt | 2026-03-02T20:08:28Z |
| trendScore / priorityScore | 142 / 412 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 85 | clients/example-vscode-lsp/README.md, clients/eclipse/README.md, clients/tabby-agent/README.md |
| Frontend / app framework | 73 | ee/tabby-email/README.md, ee/tabby-ui/README.md, clients/tabby-chat-panel/package.json |
| Cloud native / infrastructure | 57 | README.md, .github/workflows/docker.yml, .github/workflows/release.yml |
| Developer tools / DX | 55 | clients/example-vscode-lsp/README.md, clients/eclipse/README.md, clients/intellij/README.md |
| Observability / evaluation | 42 | clients/tabby-agent/README.md, experimental/prompt-rewrite-eval/README.md, python/tabby-loadtest/README.md |
| Coding agent / software automation | 33 | clients/vscode/README.md, clients/tabby-agent/src/chat/prompts/edit-command-insert.md, clients/tabby-agent/src/codeCompletion/postprocess/removeDuplicateSuffixLines.test.ts |
| Database / data infrastructure | 31 | README.md, Makefile, crates/sqlx-migrate-validate/Cargo.toml |
| Local LLM / inference | 30 | Cargo.toml, crates/http-api-bindings/Cargo.toml, crates/ollama-api-bindings/Cargo.toml |
| Security / supply chain | 19 | clients/tabby-agent/README.md, experimental/eval/tabby-python-client/README.md, python/tabby-eval/modal/tabby_python_client/README.md |
| RAG / retrieval / knowledge | 12 | README.md, website/docs/references/models-http-api/vllm.md, website/docs/administration/model/index.mdx |
| Data / ML platform | 2 | clients/vscode/package.json, website/docs/administration/code-completion.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Java/Kotlin |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1921 |
| manifests | 40 |
| docs | 187 |
| tests | 36 |
| ci/ops | 21 |
| spec artifacts | 14 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🐾 Tabby | 🐾 Tabby / 🔥 What's New / 👋 Getting Started / Run Tabby in 1 Minute / 🤝 Contributing / Get the Code / Build / For MacOS / For Ubuntu / Debian / For Ubuntu | <div align="center" 🐾 Tabby 📚 Docs https //tabby.tabbyml.com/docs/welcome/ • 💬 Slack https //links.tabbyml.com/join slack • 🗺️ Roadmap https //tabby.tabbyml.com/docs/roadmap/ ! latest release https //shields.io/github/v/release/TabbyML/tabby https //github.com/TabbyML/tabby/releases/latest ! PRs Welcome https //img.shields.io/badge/PRs welcome brightgreen.svg?style=flat square https //makeapullrequest.com ! Docker pulls https //img.shields.io/docker/pulls/tabbyml/tabby https //hub.docker.com/r/tabbyml/tabby ! codecov https //codecov.io/gh/TabbyML/tabby/graph/badge.svg?token=WYVVH8MKK3 https //codecov.io/gh/TabbyML/tabby English /README.md 简体中文 /README zh.md 日本語 /README ja.md </div Tabby |


## Key Files

### Manifests

- clients/example-vscode-lsp/README.md
- clients/eclipse/README.md
- clients/intellij/README.md
- clients/tabby-agent/README.md
- clients/tabby-chat-panel/README.md
- clients/tabby-threads/README.md
- clients/vim/README.md
- clients/vscode/README.md
- crates/tabby-index-cli/README.md
- experimental/eval/tabby-python-client/README.md
- experimental/prompt-rewrite-eval/README.md
- python/tabby-eval/modal/tabby_python_client/README.md
- python/tabby-loadtest/README.md
- README.md
- crates/aim-downloader/README.md
- crates/hash-ids/src/README.md
- crates/sqlx-migrate-validate/README.md
- crates/tabby-index/README.md
- ee/tabby-email/README.md
- ee/tabby-ui/README.md


### Spec / Docs / Prompt Artifacts

- experimental/prompt-rewrite-eval/requirements.txt
- clients/tabby-agent/src/chat/prompts/edit-command-insert.md
- clients/tabby-agent/src/chat/prompts/edit-command-replace.md
- clients/tabby-agent/src/chat/prompts/fix-spelling-and-grammar.md
- clients/tabby-agent/src/chat/prompts/generate-branch-name.md
- clients/tabby-agent/src/chat/prompts/generate-commit-message.md
- clients/tabby-agent/src/chat/prompts/generate-docs.md
- clients/tabby-agent/src/chat/prompts/generate-smart-apply.md
- clients/tabby-agent/src/chat/prompts/include-file-context-item.md
- clients/tabby-agent/src/chat/prompts/include-file-context-list.md
- clients/tabby-agent/src/chat/prompts/index.d.ts
- clients/tabby-agent/src/chat/prompts/provide-smart-apply-line-range.md
- website/docs/roadmap.mdx
- experimental/prompt-rewrite-eval/eval.toml


### Agent Instruction Files

- clients/tabby-agent/src/chat/prompts/edit-command-insert.md
- clients/tabby-agent/src/chat/prompts/edit-command-replace.md
- clients/tabby-agent/src/chat/prompts/fix-spelling-and-grammar.md
- clients/tabby-agent/src/chat/prompts/generate-branch-name.md
- clients/tabby-agent/src/chat/prompts/generate-commit-message.md
- clients/tabby-agent/src/chat/prompts/generate-docs.md
- clients/tabby-agent/src/chat/prompts/generate-smart-apply.md
- clients/tabby-agent/src/chat/prompts/include-file-context-item.md
- clients/tabby-agent/src/chat/prompts/include-file-context-list.md
- clients/tabby-agent/src/chat/prompts/index.d.ts
- clients/tabby-agent/src/chat/prompts/provide-smart-apply-line-range.md


## Top Directories

| dir | count |
| --- | --- |
| ee | 936 |
| clients | 514 |
| crates | 175 |
| website | 114 |
| experimental | 55 |
| python | 40 |
| .changes | 34 |
| .github | 18 |
| rules | 6 |
| ci | 3 |
| docker | 2 |
| .changie.yaml | 1 |
| .dockerignore | 1 |
| .env | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .tsx | 299 |
| .rs | 272 |
| .ts | 265 |
| .js | 173 |
| .md | 135 |
| .sql | 105 |
| .java | 93 |
| .kt | 91 |
| .py | 70 |
| .html | 51 |
| .toml | 50 |
| [no-ext] | 48 |
| .txt | 47 |
| .yml | 34 |
| .mdx | 27 |
| .json | 25 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
