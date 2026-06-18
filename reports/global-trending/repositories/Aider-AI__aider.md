# Aider-AI/aider

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Aider-AI/aider |
| local path | sources/Aider-AI__aider |
| HEAD | 5dc9490 |
| stars/forks | 46390 / 4615 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-05-22T14:02:20Z |
| trendScore / priorityScore | 175 / 463 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | aider/website/examples/README.md, benchmark/README.md, README.md |
| Developer tools / DX | 324 | README.md, pyproject.toml, aider/website/docs/benchmarks.md |
| Observability / evaluation | 161 | benchmark/README.md, README.md, aider/website/docs/benchmarks-0125.md |
| Cloud native / infrastructure | 124 | benchmark/README.md, docker/Dockerfile, .github/workflows/docker-build-test.yml |
| Database / data infrastructure | 102 | aider/website/docs/config/aider_conf.md, aider/website/docs/config/dotenv.md, aider/website/docs/config/options.md |
| Security / supply chain | 38 | README.md, aider/website/docs/llms/bedrock.md, aider/website/docs/llms/openai.md |
| Local LLM / inference | 30 | aider/website/docs/llms.md, aider/website/docs/llms/ollama.md, aider/website/docs/troubleshooting/edit-errors.md |
| AI agent / orchestration | 22 | README.md, aider/website/docs/benchmarks.md, aider/website/docs/llms/github.md |
| Data / ML platform | 14 | docker/Dockerfile, aider/website/docs/benchmarks.md, aider/website/examples/census.md |
| Frontend / app framework | 5 | aider/website/docs/faq.md, aider/website/docs/languages.md |
| RAG / retrieval / knowledge | 5 | aider/website/examples/README.md, aider/website/docs/benchmarks-0125.md, aider/website/examples/semantic-search-replace.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, Swift |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 634 |
| manifests | 10 |
| docs | 143 |
| tests | 87 |
| ci/ops | 13 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Change directory into your codebase | Features / [Cloud and local LLMs](https://aider.chat/docs/llms.html) / [Maps your codebase](https://aider.chat/docs/repomap.html) / [100+ code languages](https://aider.chat/docs/languages.html) / [Git integration](https://aider.chat/docs/git.html) / [Use in your IDE](https://aider.chat/docs/usage/watch.html) / [Images & web pages](https://aider.chat/docs/usage/images-urls.html) / [Voice-to-code](https://aider.chat/docs/usage/voice.html) / [Linting & testing](https://aider.chat/docs/usage/lint-test.html) / [Copy/paste to web chat](https://aider.chat/docs/usage/copypaste.html) | <p align="center" <a href="https //aider.chat/" <img src="https //aider.chat/assets/logo.svg" alt="Aider Logo" width="300" </a </p <h1 align="center" AI Pair Programming in Your Terminal </h1 <p align="center" Aider lets you pair program with LLMs to start a new project or build on your existing codebase. </p <p align="center" <img src="https //aider.chat/assets/screencast.svg" alt="aider screencast" </p <p align="center" <! cog from scripts.homepage import get badges md text = get badges md cog.out text <a href="https //github.com/Aider AI/aider/stargazers" <img alt="GitHub Stars" title="Total number of GitHub stars the Aider project has received" src="https //img.shields.io/github/stars/Ai |


## Key Files

### Manifests

- aider/website/examples/README.md
- benchmark/README.md
- README.md
- aider/queries/tree-sitter-language-pack/README.md
- aider/queries/tree-sitter-languages/README.md
- benchmark/Dockerfile
- docker/Dockerfile
- pyproject.toml
- requirements.txt
- requirements/requirements.in


### Spec / Docs / Prompt Artifacts

- aider/website/docs/llms/gemini.md
- requirements.txt


### Agent Instruction Files

- aider/website/docs/llms/gemini.md


## Top Directories

| dir | count |
| --- | --- |
| aider | 464 |
| tests | 87 |
| scripts | 23 |
| benchmark | 22 |
| requirements | 13 |
| .github | 11 |
| .dockerignore | 1 |
| .flake8 | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CNAME | 1 |
| CONTRIBUTING.md | 1 |
| docker | 1 |
| HISTORY.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 147 |
| .md | 143 |
| .mp3 | 111 |
| .scm | 58 |
| .yml | 28 |
| .svg | 23 |
| .sh | 16 |
| .js | 11 |
| .txt | 11 |
| .in | 9 |
| .html | 7 |
| [no-ext] | 7 |
| .mp4 | 6 |
| .json | 5 |
| .css | 3 |
| .lisp | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
