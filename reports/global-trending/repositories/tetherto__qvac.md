# tetherto/qvac

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/tetherto/qvac |
| local path | sources/tetherto__qvac |
| HEAD | d7ac230 |
| stars/forks | 255 / 71 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:25:29Z |
| trendScore / priorityScore | 141 / 454 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | packages/llm-llamacpp/test/mobile/README.md, packages/cli/README.md, packages/embed-llamacpp/benchmarks/performance/README.md |
| Developer tools / DX | 390 | packages/sdk/examples/voice-assistant/README.md, .cursor/skills/_lib/pr-skills/README.md, packages/cli/README.md |
| Data / ML platform | 242 | packages/llm-llamacpp/test/mobile/README.md, packages/embed-llamacpp/benchmarks/README.md, packages/llm-llamacpp/benchmarks/README.md |
| Observability / evaluation | 233 | packages/embed-llamacpp/benchmarks/performance/README.md, packages/embed-llamacpp/benchmarks/README.md, packages/embed-llamacpp/benchmarks/server/README.md |
| RAG / retrieval / knowledge | 166 | packages/cli/README.md, packages/embed-llamacpp/benchmarks/README.md, packages/embed-llamacpp/benchmarks/server/README.md |
| AI agent / orchestration | 150 | .cursor/skills/_lib/pr-skills/README.md, packages/llm-llamacpp/README.md, packages/ocr-onnx/.agent/README.md |
| Coding agent / software automation | 114 | .cursor/skills/_lib/pr-skills/README.md, docs/website/README.md, packages/ocr-onnx/.agent/README.md |
| Frontend / app framework | 27 | packages/sdk/examples/voice-assistant/README.md, docs/website/README.md, packages/cli/README.md |
| Database / data infrastructure | 24 | packages/rag/README.md, packages/registry-server/README.md, packages/llm-llamacpp/examples/toolCalling.js |
| MCP / agent interoperability | 16 | packages/ocr-onnx/.agent/README.md, CLAUDE.md |
| Security / supply chain | 13 | packages/sdk/examples/voice-assistant/README.md, packages/llm-llamacpp/benchmarks/vlm-benchmark/README.md, packages/ocr-onnx/.agent/README.md |
| Cloud native / infrastructure | 12 | packages/llm-llamacpp/benchmarks/vlm-benchmark/README.md, packages/classification-ggml/README.md, packages/transcription-parakeet/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3928 |
| manifests | 40 |
| docs | 606 |
| tests | 939 |
| ci/ops | 175 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Key features / Usage / Quickstart / Functionalities / Complete user docs / Contributing / Repository layout / Development / Banners and badges / Banners | ! QVAC logo docs/branding/logo.avif https //docs.qvac.tether.io <a href="https //qvac.tether.io" Website</a &nbsp;•&nbsp; <a href="https //docs.qvac.tether.io" Docs</a &nbsp;•&nbsp; <a href="https //discord.com/channels/1425125849346216029/1445400675189264516" Support</a &nbsp;•&nbsp; <a href="https //discord.com/invite/tetherdev" Discord</a QVAC is an open source, cross platform ecosystem for building local first, peer to peer AI applications and systems. With QVAC, you can run AI tasks like LLMs, speech, RAG, and more locally across Linux, macOS, Windows, Android, and iOS — or delegate inference to peers using its built in P2P capabilities. Key features Local first load AI models and perfo |


## Key Files

### Manifests

- packages/sdk/examples/voice-assistant/README.md
- packages/llm-llamacpp/test/mobile/README.md
- .cursor/skills/_lib/pr-skills/README.md
- docs/website/README.md
- packages/cli/README.md
- packages/embed-llamacpp/benchmarks/performance/README.md
- packages/embed-llamacpp/benchmarks/README.md
- packages/embed-llamacpp/benchmarks/server/README.md
- packages/llm-llamacpp/benchmarks/performance/README.md
- packages/llm-llamacpp/benchmarks/README.md
- packages/llm-llamacpp/benchmarks/vlm-benchmark/README.md
- packages/llm-llamacpp/README.md
- packages/ocr-onnx/.agent/README.md
- packages/ocr-onnx/benchmarks/quality_eval/README.md
- packages/rag/README.md
- packages/registry-server/client/README.md
- packages/transcription-parakeet/benchmarks/client/README.md
- packages/transcription-parakeet/benchmarks/manual-results/README.md
- packages/transcription-parakeet/benchmarks/server/README.md
- packages/transcription-whispercpp/benchmarks/client/README.md


### Spec / Docs / Prompt Artifacts

- .cursor/skills/_lib/pr-skills/README.md
- CLAUDE.md
- packages/embed-llamacpp/benchmarks/client/requirements.txt
- packages/llm-llamacpp/benchmarks/client/requirements.txt
- packages/ocr-ggml/benchmarks/quality_eval/requirements.txt
- packages/ocr-onnx/benchmarks/quality_eval/requirements.txt
- packages/translation-nmtcpp/benchmarks/quality_eval/requirements.txt
- packages/tts-onnx/benchmarks/client/requirements.txt
- .cursor/rules/devops/agentic-automation.mdc
- .cursor/skills/_lib/developer-workflow/asana-cli.mjs
- .cursor/skills/_lib/developer-workflow/diary-cli.mjs
- .cursor/skills/qv-sdk-changelog/references/changelog-llm-format.md
- docs/architecture/puml/10-rag-components.puml
- packages/llm-llamacpp/docs/architecture.md
- packages/ocr-ggml/scripts/requirements.txt
- packages/transcription-parakeet/scripts/requirements.txt
- packages/translation-nmtcpp/scripts/conversion_scripts/requirements.txt
- packages/tts-ggml/scripts/requirements.txt
- packages/vla-ggml/sim/requirements.txt
- .cursor/rules/sdk/docs/qvac-whispercpp-example.mdc


### Agent Instruction Files

- .cursor/skills/_lib/pr-skills/README.md
- CLAUDE.md
- .cursor/rules/devops/agentic-automation.mdc
- .cursor/skills/_lib/developer-workflow/asana-cli.mjs
- .cursor/skills/_lib/developer-workflow/diary-cli.mjs
- .cursor/skills/qv-sdk-changelog/references/changelog-llm-format.md
- .cursor/rules/sdk/docs/qvac-whispercpp-example.mdc
- .cursor/rules/sdk/example.mdc
- .cursor/skills/_lib/pr-skills/pr-test-discover.mjs
- .cursor/skills/_lib/pr-skills/pr-test-generic.mjs
- .cursor/skills/_lib/pr-skills/pr-test-sdk.mjs
- .cursor/skills/qv-pr-test/SKILL.md
- .cursor/rules/cpp/string-api-conventions.mdc
- .cursor/rules/devops/github-actions.mdc
- .cursor/rules/devops/main.mdc


## Top Directories

| dir | count |
| --- | --- |
| packages | 3302 |
| .github | 257 |
| docs | 217 |
| .cursor | 95 |
| plugins | 23 |
| scripts | 23 |
| .claude | 3 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 918 |
| .js | 806 |
| .md | 392 |
| .cpp | 271 |
| .hpp | 225 |
| .yml | 212 |
| .json | 176 |
| [no-ext] | 147 |
| .txt | 129 |
| .py | 109 |
| .cmake | 66 |
| .mdx | 62 |
| .sh | 51 |
| .cjs | 43 |
| .mjs | 40 |
| .tsx | 36 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
