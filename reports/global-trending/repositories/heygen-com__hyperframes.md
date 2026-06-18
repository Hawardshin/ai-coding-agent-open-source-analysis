# heygen-com/hyperframes

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/heygen-com/hyperframes |
| local path | sources/heygen-com__hyperframes |
| HEAD | e57e75b |
| stars/forks | 28446 / 2692 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:23:31Z |
| trendScore / priorityScore | 172 / 481 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | examples/aws-lambda/README.md, packages/cli/README.md, AGENTS.md |
| Cloud native / infrastructure | 251 | examples/aws-lambda/README.md, examples/gcp-cloud-run/README.md, examples/k8s-jobs/README.md |
| AI agent / orchestration | 160 | examples/k8s-jobs/README.md, packages/cli/README.md, AGENTS.md |
| Frontend / app framework | 111 | AGENTS.md, packages/cli/src/templates/_shared/AGENTS.md, packages/cli/src/templates/_shared/CLAUDE.md |
| MCP / agent interoperability | 53 | docs/guides/copilot-cli.mdx, docs/guides/mcp.mdx, docs/docs.json |
| Coding agent / software automation | 46 | packages/cli/src/templates/_shared/AGENTS.md, packages/cli/src/templates/_shared/CLAUDE.md, README.md |
| Observability / evaluation | 44 | examples/aws-lambda/README.md, packages/cli/README.md, packages/producer/tests/perf/README.md |
| Data / ML platform | 43 | packages/cli/README.md, AGENTS.md, packages/producer/tests/hdr-regression/README.md |
| Security / supply chain | 29 | README.md, packages/core/src/runtime/README.md, packages/gcp-cloud-run/README.md |
| RAG / retrieval / knowledge | 2 | packages/player/README.md, packages/sdk/examples/react-embed.ts |
| Local LLM / inference | 1 | docs/packages/cli.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3310 |
| manifests | 40 |
| docs | 958 |
| tests | 704 |
| ci/ops | 22 |
| spec artifacts | 14 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | macOS | Quick Start / With an AI coding agent / Manually with the CLI / What You Can Build / Frame.md / How It Works / HyperFrames Stack / Catalog / Why HyperFrames? / HyperFrames vs Remotion | <p align="center" <picture <source media=" prefers color scheme dark " srcset="docs/logo/dark.svg" <source media=" prefers color scheme light " srcset="docs/logo/light.svg" <img alt="HyperFrames" src="docs/logo/light.svg" width="300" </picture </p <p align="center" <a href="https //www.npmjs.com/package/hyperframes" <img src="https //img.shields.io/npm/v/hyperframes.svg?style=flat" alt="npm version" </a <a href="https //www.npmjs.com/package/hyperframes" <img src="https //img.shields.io/npm/dm/hyperframes.svg?style=flat" alt="npm downloads" </a <a href="LICENSE" <img src="https //img.shields.io/badge/license Apache%202.0 blue.svg" alt="License" </a <a href="https //nodejs.org" <img src="http |


## Key Files

### Manifests

- examples/aws-lambda/README.md
- examples/gcp-cloud-run/README.md
- examples/k8s-jobs/README.md
- packages/cli/README.md
- AGENTS.md
- packages/cli/src/templates/_shared/AGENTS.md
- packages/cli/src/templates/_shared/CLAUDE.md
- packages/producer/tests/hdr-hlg-regression/README.md
- packages/producer/tests/hdr-regression/README.md
- packages/producer/tests/parity/README.md
- packages/producer/tests/perf/README.md
- packages/producer/tests/README.md
- packages/studio/fixtures/storyboard-sample/README.md
- README.md
- releases/README.md
- skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/README.md
- skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/README.md
- skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/README.md
- skills/remotion-to-hyperframes/assets/test-corpus/tier-4-escape-hatch/README.md
- updates/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- packages/cli/src/templates/_shared/AGENTS.md
- packages/cli/src/templates/_shared/CLAUDE.md
- CLAUDE.md
- examples/aws-lambda/sample-events/plan.json
- examples/gcp-cloud-run/sample-events/plan.json
- registry/examples/vscode-theme-visualizer/DESIGN.md
- skills/embedded-captions/modes/cinematic/_archive/memory-wall/spec.md
- skills/remotion-to-hyperframes/references/eval.md
- DESIGN.md
- skills/embedded-captions/modes/cinematic/_archive/champion/spec.md
- skills/embedded-captions/modes/cinematic/_archive/portrait-header/spec.md
- skills/embedded-captions/modes/cinematic/cinematic-cream/spec.md
- skills/hyperframes-media/references/requirements.md


### Agent Instruction Files

- AGENTS.md
- packages/cli/src/templates/_shared/AGENTS.md
- packages/cli/src/templates/_shared/CLAUDE.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 1591 |
| skills | 1056 |
| registry | 341 |
| docs | 191 |
| releases | 40 |
| scripts | 25 |
| .github | 20 |
| examples | 15 |
| .claude-plugin | 2 |
| assets | 2 |
| .codex-plugin | 1 |
| .cursor-plugin | 1 |
| .editorconfig | 1 |
| .env.example | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1097 |
| .md | 768 |
| .html | 369 |
| .json | 308 |
| .mdx | 175 |
| .tsx | 124 |
| .mjs | 102 |
| .mp3 | 76 |
| .mp4 | 61 |
| .woff2 | 54 |
| .svg | 32 |
| .js | 20 |
| [no-ext] | 19 |
| .cjs | 18 |
| .yml | 18 |
| .sh | 16 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
