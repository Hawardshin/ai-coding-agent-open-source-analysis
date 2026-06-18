# toeverything/AFFiNE

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/toeverything/AFFiNE |
| local path | sources/toeverything__AFFiNE |
| HEAD | 13d9fe5 |
| stars/forks | 69499 / 4937 |
| language | TypeScript |
| license | NOASSERTION |
| pushedAt | 2026-06-17T19:14:58Z |
| trendScore / priorityScore | 151 / 407 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 254 | packages/frontend/apps/electron/README.md, packages/frontend/i18n/README.md, packages/frontend/apps/ios/AGENTS.md |
| Database / data infrastructure | 40 | packages/common/nbstore/README.md, packages/frontend/core/src/components/tags/readme.md, blocksuite/affine/blocks/database/package.json |
| Developer tools / DX | 36 | tools/cli/README.md, packages/frontend/apps/ios/AGENTS.md, tests/affine-cloud-copilot/README.md |
| Cloud native / infrastructure | 10 | .docker/dev/README.md, blocksuite/affine/ext-loader/README.md, tests/kit/package.json |
| Observability / evaluation | 10 | packages/frontend/native/media_capture/src/windows/README.md, packages/frontend/admin/package.json, packages/frontend/apps/android/App/app/build.gradle |
| AI agent / orchestration | 2 | packages/frontend/apps/ios/AGENTS.md |
| MCP / agent interoperability | 2 | packages/frontend/apps/ios/AGENTS.md |
| Coding agent / software automation | 1 | packages/frontend/apps/ios/AGENTS.md |
| Data / ML platform | 1 | tools/commitlint/README.md |
| Security / supply chain | 1 | .docker/selfhost/compose.yml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, mcp, observability, rag, sdk-api, security, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust, Java/Kotlin, Swift, C/C++ |
| capabilities | Vector/search store, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 244 |
| tests | 982 |
| ci/ops | 61 |
| spec artifacts | 9 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| .docker/dev/README.md | Dev containers | Dev containers / Develop with domain / 1. Generate and install Root CA / the root ca file will be located at `./.docker/dev/certs/ca` / 2. Generate domain certs / certificates will be located at `./.docker/dev/certs/${domain}` / 3. Enable nginx service in compose.yml | Dev containers Develop with domain MacOs only, OrbStack only 1. Generate and install Root CA 2. Generate domain certs 3. Enable nginx service in compose.yml |


## Key Files

### Manifests

- blocksuite/playground/examples/README.md
- blocksuite/docs/api/@blocksuite/std/gfx/README.md
- blocksuite/docs/api/@blocksuite/std/index/README.md
- blocksuite/docs/api/@blocksuite/std/README.md
- blocksuite/docs/api/@blocksuite/store/README.md
- blocksuite/docs/api/README.md
- blocksuite/docs/README.md
- packages/frontend/apps/android/README.md
- packages/frontend/apps/electron/README.md
- packages/frontend/apps/ios/App/fastlane/README.md
- packages/frontend/apps/ios/README.md
- packages/frontend/apps/mobile/README.md
- packages/frontend/apps/web/README.md
- packages/frontend/core/src/commands/registry/README.md
- packages/frontend/core/src/components/hooks/affine/README.md
- packages/frontend/core/src/mobile/components/README.md
- packages/frontend/core/src/mobile/views/README.md
- packages/frontend/core/src/modules/docs-search/README.md
- packages/frontend/core/src/modules/navigation/README.md
- packages/frontend/core/src/modules/workbench/README.md


### Spec / Docs / Prompt Artifacts

- packages/frontend/apps/ios/AGENTS.md
- packages/backend/server/src/plugins/copilot/prompt/spec.ts
- packages/backend/server/src/plugins/copilot/prompt/index.ts
- packages/backend/server/src/plugins/copilot/prompt/native-contract.ts
- packages/backend/server/src/plugins/copilot/prompt/service.ts
- blocksuite/framework/std/src/spec/index.ts
- blocksuite/framework/std/src/spec/type.ts
- packages/frontend/apps/ios/.claude/settings.local.json
- .codesandbox/task.json


### Agent Instruction Files

- packages/frontend/apps/ios/AGENTS.md
- packages/backend/server/src/plugins/copilot/prompt/spec.ts
- packages/backend/server/src/plugins/copilot/prompt/index.ts
- packages/backend/server/src/plugins/copilot/prompt/native-contract.ts
- packages/backend/server/src/plugins/copilot/prompt/service.ts
- packages/frontend/apps/ios/.claude/settings.local.json


## Top Directories

| dir | count |
| --- | --- |
| packages | 4500 |
| blocksuite | 2724 |
| tests | 551 |
| .github | 79 |
| tools | 68 |
| .docker | 13 |
| docs | 11 |
| scripts | 10 |
| .yarn | 6 |
| .devcontainer | 4 |
| .vscode | 3 |
| .cargo | 1 |
| .codesandbox | 1 |
| .dockerignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 4756 |
| .tsx | 724 |
| .json | 560 |
| .svg | 496 |
| .swift | 478 |
| .gql | 193 |
| .md | 193 |
| .rs | 106 |
| [no-ext] | 55 |
| .sql | 54 |
| .yml | 42 |
| .yaml | 36 |
| .kt | 35 |
| .snap | 31 |
| .woff2 | 29 |
| .ttf | 26 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
