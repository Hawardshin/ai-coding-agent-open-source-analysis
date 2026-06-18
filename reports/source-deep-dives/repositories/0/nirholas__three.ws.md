# nirholas/three.ws Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Open-source 3D AI agent framework — GLB/glTF avatars with LLM brains, memory, emotions, and autonomous payments. MCP server · x402 · Solana/EVM · Three.js. Embed anywhere as a web component. Character studio, animation gallery, OAuth 2.1. Browser-native.

## 요약

- 조사 단위: `sources/nirholas__three.ws` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,826 files, 1,059 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, x402-buildout/prompts/10-mcp-server.md, x402-buildout/prompts/11-mcp-client.md이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, express, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | nirholas/three.ws |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | 62 |
| Forks | 17 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/nirholas__three.ws](../../../../sources/nirholas__three.ws) |
| Existing report | [reports/global-trending/repositories/nirholas__three.ws.md](../../../global-trending/repositories/nirholas__three.ws.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6826 / 1059 |
| Max observed depth | 9 |
| Top directories | .agents, .claude, .claude-plugin, .githooks, .well-known, agent-payments-sdk, agent-protocol-sdk, agent-ui-sdk, agents, animation-sources, api, avatar-sdk, blog, character-studio, chat, chat-plugin, content, contracts, crates, data |
| Top extensions | .js: 2564, .md: 1080, .sol: 513, .mjs: 381, .html: 363, .json: 330, .sql: 163, .ts: 161, .png: 152, .fbx: 135, .svg: 134, .css: 110 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | source boundary | 118 |
| src | source boundary | 31 |
| docs | documentation surface | 5 |
| packages/ibm-watsonx-mcp | packages workspace | 3 |
| packages/ibm-x402-mcp | packages workspace | 3 |
| packages/pumpfun-mcp | packages workspace | 3 |
| packages/react | packages workspace | 3 |
| packages/three-token-mcp | packages workspace | 3 |
| packages/threews-avatar-mcp | packages workspace | 3 |
| packages/viewer-presets | packages workspace | 3 |
| packages/x402-fetch | packages workspace | 3 |
| services/pump-graduations | services workspace | 2 |
| agent-payments-sdk | top-level component | 1 |
| agent-protocol-sdk | top-level component | 1 |
| agent-ui-sdk | top-level component | 1 |
| agents | top-level component | 1 |
| animation-sources | top-level component | 1 |
| api | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | postinstall | (node scripts/build-cache.mjs check agent-payments-sdk agent-payments-sdk/src agent-payments-sdk/package.json \|\| (npm run build --prefix agent-payments-sdk && node scripts/build-cache.mjs stamp agent-payments-sdk agent-p |
| serve-dev | package.json | setup | node scripts/setup-dev.mjs |
| serve-dev | package.json | dev | vite --port 3000 |
| serve-dev | package.json | dev:multi | npm run dev --prefix multiplayer |
| serve-dev | package.json | dev:walk-all | node scripts/dev-walk-all.mjs |
| utility | package.json | demo:agent-wallet-bridge | node scripts/agent-wallet-x402-bridge.mjs |
| serve-dev | package.json | dev:lib | TARGET=lib vite |
| utility | package.json | presence | node scripts/three-ws-presence.mjs |
| build | package.json | build:pages | node scripts/build-page-index.mjs |
| utility | package.json | changelog:push | node scripts/changelog-telegram.mjs |
| utility | package.json | audit:deploy | node scripts/audit-deploy-artifacts.mjs |
| utility | package.json | verify:solana | node scripts/verify-solana-parity.mjs |
| utility | package.json | smoke:onchain | node scripts/onchain-smoke.mjs |
| utility | package.json | smoke:onchain:ci | node scripts/onchain-smoke.mjs --only=parity |
| utility | package.json | audit:mcp | node scripts/audit-mcp-manifests.mjs |
| utility | package.json | smoke:mcp | node scripts/smoke-mcp-remotes.mjs |
| test | package.json | test:mcp | node scripts/test-mcp-all.mjs |
| utility | package.json | audit:pages | node scripts/audit-page-index.mjs |
| utility | package.json | audit:handlers | node scripts/audit-empty-handlers.mjs |
| utility | package.json | audit:web | node scripts/page-audit.mjs |
| utility | package.json | snapshot | node scripts/page-snapshot.mjs |
| build | package.json | build:news | node scripts/build-news.mjs |
| build | package.json | prebuild | (node scripts/build-news.mjs & node scripts/build-skill-metadata.mjs & node scripts/build-local-skill-packs.mjs & npm run build:club-assets & wait) && node scripts/inject-blog-seo.mjs --write && (node scripts/build-page- |
| build | package.json | seo:meta | node scripts/inject-blog-seo.mjs --write && node scripts/build-page-index.mjs && node scripts/inject-seo-meta.mjs --write |
| serve-dev | package.json | build | NODE_OPTIONS='--no-deprecation --max-old-space-size=6144' vite build && node scripts/strip-sw-from-embeds.mjs |
| build | package.json | build:wasm | PATH="$HOME/.cargo/bin:$PATH" RUSTFLAGS='-C target-feature=+simd128' wasm-pack build crates/vanity-grinder --target web --release --out-dir ../../src/solana/vanity/wasm && printf '%s\n' '# wasm-pack writes a default `*` |
| build | package.json | build:animations | node scripts/build-animations.mjs |
| build | package.json | build:canonical-rest | node scripts/build-canonical-rest.mjs |
| build | package.json | extract:animations | node scripts/extract-glb-animations.mjs && npm run build:animations |
| utility | package.json | bake:mannequin | node scripts/bake-mannequin-glb.mjs |
| build | package.json | build:club-props | node scripts/build-club-props.mjs |
| build | package.json | build:club-venue | node scripts/build-club-venue.mjs |
| build | package.json | build:club-hdri | node scripts/build-club-hdri.mjs |
| build | package.json | build:club-audio | node scripts/build-club-audio.mjs |
| build | package.json | build:club-entrance-venue | node scripts/build-club-entrance-venue.mjs |
| build | package.json | build:club-assets | (npm run build:club-props & npm run build:club-venue & npm run build:club-hdri & wait) |
| build | package.json | build:artifact-viewer | node scripts/build-artifact-viewer.mjs |
| serve-dev | package.json | build:lib | TARGET=lib vite build |
| serve-dev | package.json | build:lib:full | TARGET=lib LIB_FORMATS=es,umd vite build |
| serve-dev | package.json | build:artifact | vite build --config vite.config.artifact.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright, puppeteer |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/nirholas__three.ws/.mcp.json) | mcp signal |
| mcp | [x402-buildout/prompts/10-mcp-server.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/10-mcp-server.md) | mcp signal |
| mcp | [x402-buildout/prompts/11-mcp-client.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/11-mcp-client.md) | mcp signal |
| mcp | [workers/pump-fun-mcp/README.md](../../../../sources/nirholas__three.ws/workers/pump-fun-mcp/README.md) | mcp signal |
| agentRuntime | [skills-lock.json](../../../../sources/nirholas__three.ws/skills-lock.json) | agentRuntime signal |
| agentRuntime | [workers/oracle/agent-loop.js](../../../../sources/nirholas__three.ws/workers/oracle/agent-loop.js) | agentRuntime signal |
| agentRuntime | [workers/oracle/executor.js](../../../../sources/nirholas__three.ws/workers/oracle/executor.js) | agentRuntime signal |
| agentRuntime | [workers/agent-sniper/alerts.js](../../../../sources/nirholas__three.ws/workers/agent-sniper/alerts.js) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/nirholas__three.ws/server.json) | entrypoints signal |
| entrypoints | [workers/unirig/main.py](../../../../sources/nirholas__three.ws/workers/unirig/main.py) | entrypoints signal |
| entrypoints | [workers/texture/main.py](../../../../sources/nirholas__three.ws/workers/texture/main.py) | entrypoints signal |
| entrypoints | [workers/stylize/main.py](../../../../sources/nirholas__three.ws/workers/stylize/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 63 | [server.json](../../../../sources/nirholas__three.ws/server.json)<br>[workers/unirig/main.py](../../../../sources/nirholas__three.ws/workers/unirig/main.py)<br>[workers/texture/main.py](../../../../sources/nirholas__three.ws/workers/texture/main.py)<br>[workers/stylize/main.py](../../../../sources/nirholas__three.ws/workers/stylize/main.py)<br>[workers/segment/main.py](../../../../sources/nirholas__three.ws/workers/segment/main.py)<br>[workers/remesh/main.py](../../../../sources/nirholas__three.ws/workers/remesh/main.py)<br>[workers/rembg/main.py](../../../../sources/nirholas__three.ws/workers/rembg/main.py)<br>[workers/model-triposr/main.py](../../../../sources/nirholas__three.ws/workers/model-triposr/main.py) |
| agentRuntime | 888 | [skills-lock.json](../../../../sources/nirholas__three.ws/skills-lock.json)<br>[workers/oracle/agent-loop.js](../../../../sources/nirholas__three.ws/workers/oracle/agent-loop.js)<br>[workers/oracle/executor.js](../../../../sources/nirholas__three.ws/workers/oracle/executor.js)<br>[workers/agent-sniper/alerts.js](../../../../sources/nirholas__three.ws/workers/agent-sniper/alerts.js)<br>[workers/agent-sniper/amm-exit.js](../../../../sources/nirholas__three.ws/workers/agent-sniper/amm-exit.js)<br>[workers/agent-sniper/claim-scorer.js](../../../../sources/nirholas__three.ws/workers/agent-sniper/claim-scorer.js)<br>[workers/agent-sniper/config.js](../../../../sources/nirholas__three.ws/workers/agent-sniper/config.js)<br>[workers/agent-sniper/Dockerfile](../../../../sources/nirholas__three.ws/workers/agent-sniper/Dockerfile) |
| mcp | 241 | [.mcp.json](../../../../sources/nirholas__three.ws/.mcp.json)<br>[x402-buildout/prompts/10-mcp-server.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/10-mcp-server.md)<br>[x402-buildout/prompts/11-mcp-client.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/11-mcp-client.md)<br>[workers/pump-fun-mcp/README.md](../../../../sources/nirholas__three.ws/workers/pump-fun-mcp/README.md)<br>[workers/pump-fun-mcp/worker.js](../../../../sources/nirholas__three.ws/workers/pump-fun-mcp/worker.js)<br>[workers/pump-fun-mcp/wrangler.toml](../../../../sources/nirholas__three.ws/workers/pump-fun-mcp/wrangler.toml)<br>[tests/api-developer-mcp-test.test.js](../../../../sources/nirholas__three.ws/tests/api-developer-mcp-test.test.js)<br>[tests/mcp-auth-challenge.test.js](../../../../sources/nirholas__three.ws/tests/mcp-auth-challenge.test.js) |
| retrieval | 246 | [workers/oracle/index.js](../../../../sources/nirholas__three.ws/workers/oracle/index.js)<br>[workers/agent-sniper/index.js](../../../../sources/nirholas__three.ws/workers/agent-sniper/index.js)<br>[tests/api-agent-memory.test.js](../../../../sources/nirholas__three.ws/tests/api-agent-memory.test.js)<br>[tests/constellation-embedding.test.js](../../../../sources/nirholas__three.ws/tests/constellation-embedding.test.js)<br>[tests/embed-bridge-origin.test.js](../../../../sources/nirholas__three.ws/tests/embed-bridge-origin.test.js)<br>[tests/embed-bridge-roundtrip.test.js](../../../../sources/nirholas__three.ws/tests/embed-bridge-roundtrip.test.js)<br>[tests/embedding-math.test.js](../../../../sources/nirholas__three.ws/tests/embedding-math.test.js)<br>[tests/memory-modes.test.js](../../../../sources/nirholas__three.ws/tests/memory-modes.test.js) |
| spec | 52 | [DESIGN-TOKENS.md](../../../../sources/nirholas__three.ws/DESIGN-TOKENS.md)<br>[workers/unirig/requirements.txt](../../../../sources/nirholas__three.ws/workers/unirig/requirements.txt)<br>[workers/texture/requirements.txt](../../../../sources/nirholas__three.ws/workers/texture/requirements.txt)<br>[workers/stylize/requirements.txt](../../../../sources/nirholas__three.ws/workers/stylize/requirements.txt)<br>[workers/segment/requirements.txt](../../../../sources/nirholas__three.ws/workers/segment/requirements.txt)<br>[workers/remesh/requirements.txt](../../../../sources/nirholas__three.ws/workers/remesh/requirements.txt)<br>[workers/rembg/requirements.txt](../../../../sources/nirholas__three.ws/workers/rembg/requirements.txt)<br>[workers/model-triposr/requirements.txt](../../../../sources/nirholas__three.ws/workers/model-triposr/requirements.txt) |
| eval | 776 | [x402-buildout/prompts/28-e2e-tests.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/28-e2e-tests.md)<br>[workers/unirig/test_rig_glb.py](../../../../sources/nirholas__three.ws/workers/unirig/test_rig_glb.py)<br>[workers/model-text2motion/test_smpl_to_clip.py](../../../../sources/nirholas__three.ws/workers/model-text2motion/test_smpl_to_clip.py)<br>[tests/agent-a2a-payments.test.js](../../../../sources/nirholas__three.ws/tests/agent-a2a-payments.test.js)<br>[tests/agent-avatar-lipsync.test.js](../../../../sources/nirholas__three.ws/tests/agent-avatar-lipsync.test.js)<br>[tests/agent-custody-guards.test.js](../../../../sources/nirholas__three.ws/tests/agent-custody-guards.test.js)<br>[tests/agent-detail-avatar.test.js](../../../../sources/nirholas__three.ws/tests/agent-detail-avatar.test.js)<br>[tests/agent-identity-csrf.test.js](../../../../sources/nirholas__three.ws/tests/agent-identity-csrf.test.js) |
| security | 118 | [x402-buildout/prompts/21-auth-hints.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/21-auth-hints.md)<br>[x402-buildout/prompts/24-audit-logging.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/24-audit-logging.md)<br>[workers/unirig/worker_security.py](../../../../sources/nirholas__three.ws/workers/unirig/worker_security.py)<br>[workers/texture/worker_security.py](../../../../sources/nirholas__three.ws/workers/texture/worker_security.py)<br>[workers/stylize/worker_security.py](../../../../sources/nirholas__three.ws/workers/stylize/worker_security.py)<br>[workers/segment/worker_security.py](../../../../sources/nirholas__three.ws/workers/segment/worker_security.py)<br>[workers/remesh/worker_security.py](../../../../sources/nirholas__three.ws/workers/remesh/worker_security.py)<br>[workers/rembg/worker_security.py](../../../../sources/nirholas__three.ws/workers/rembg/worker_security.py) |
| ci | 12 | [contracts/lib/openzeppelin-contracts/lib/forge-std/.github/workflows/ci.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/lib/forge-std/.github/workflows/ci.yml)<br>[contracts/lib/openzeppelin-contracts/lib/forge-std/.github/workflows/sync.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/lib/forge-std/.github/workflows/sync.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/actionlint.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/actionlint.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/changeset.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/changeset.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/checks.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/checks.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/docs.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/docs.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/formal-verification.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/formal-verification.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/release-cycle.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/release-cycle.yml) |
| container | 30 | [workers/unirig/Dockerfile](../../../../sources/nirholas__three.ws/workers/unirig/Dockerfile)<br>[workers/texture/Dockerfile](../../../../sources/nirholas__three.ws/workers/texture/Dockerfile)<br>[workers/stylize/Dockerfile](../../../../sources/nirholas__three.ws/workers/stylize/Dockerfile)<br>[workers/segment/Dockerfile](../../../../sources/nirholas__three.ws/workers/segment/Dockerfile)<br>[workers/remesh/Dockerfile](../../../../sources/nirholas__three.ws/workers/remesh/Dockerfile)<br>[workers/rembg/Dockerfile](../../../../sources/nirholas__three.ws/workers/rembg/Dockerfile)<br>[workers/model-triposr/Dockerfile](../../../../sources/nirholas__three.ws/workers/model-triposr/Dockerfile)<br>[workers/model-triposg/Dockerfile](../../../../sources/nirholas__three.ws/workers/model-triposg/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/nirholas__three.ws/CLAUDE.md) |
| docs | 458 | [README.md](../../../../sources/nirholas__three.ws/README.md)<br>[workers/README.md](../../../../sources/nirholas__three.ws/workers/README.md)<br>[workers/pump-fun-mcp/README.md](../../../../sources/nirholas__three.ws/workers/pump-fun-mcp/README.md)<br>[workers/oracle/README.md](../../../../sources/nirholas__three.ws/workers/oracle/README.md)<br>[workers/model-text2motion/README.md](../../../../sources/nirholas__three.ws/workers/model-text2motion/README.md)<br>[workers/longcat/README.md](../../../../sources/nirholas__three.ws/workers/longcat/README.md)<br>[workers/deploy/README.md](../../../../sources/nirholas__three.ws/workers/deploy/README.md)<br>[workers/avatar-reconstruction/README.md](../../../../sources/nirholas__three.ws/workers/avatar-reconstruction/README.md) |
| config | 68 | [package.json](../../../../sources/nirholas__three.ws/package.json)<br>[tsconfig.json](../../../../sources/nirholas__three.ws/tsconfig.json)<br>[workers/unirig/requirements.txt](../../../../sources/nirholas__three.ws/workers/unirig/requirements.txt)<br>[workers/texture/requirements.txt](../../../../sources/nirholas__three.ws/workers/texture/requirements.txt)<br>[workers/stylize/requirements.txt](../../../../sources/nirholas__three.ws/workers/stylize/requirements.txt)<br>[workers/segment/requirements.txt](../../../../sources/nirholas__three.ws/workers/segment/requirements.txt)<br>[workers/remesh/requirements.txt](../../../../sources/nirholas__three.ws/workers/remesh/requirements.txt)<br>[workers/rembg/requirements.txt](../../../../sources/nirholas__three.ws/workers/rembg/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 776 | [x402-buildout/prompts/28-e2e-tests.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/28-e2e-tests.md)<br>[workers/unirig/test_rig_glb.py](../../../../sources/nirholas__three.ws/workers/unirig/test_rig_glb.py)<br>[workers/model-text2motion/test_smpl_to_clip.py](../../../../sources/nirholas__three.ws/workers/model-text2motion/test_smpl_to_clip.py)<br>[tests/agent-a2a-payments.test.js](../../../../sources/nirholas__three.ws/tests/agent-a2a-payments.test.js)<br>[tests/agent-avatar-lipsync.test.js](../../../../sources/nirholas__three.ws/tests/agent-avatar-lipsync.test.js)<br>[tests/agent-custody-guards.test.js](../../../../sources/nirholas__three.ws/tests/agent-custody-guards.test.js) |
| CI workflows | 12 | [contracts/lib/openzeppelin-contracts/lib/forge-std/.github/workflows/ci.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/lib/forge-std/.github/workflows/ci.yml)<br>[contracts/lib/openzeppelin-contracts/lib/forge-std/.github/workflows/sync.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/lib/forge-std/.github/workflows/sync.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/actionlint.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/actionlint.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/changeset.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/changeset.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/checks.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/checks.yml)<br>[contracts/lib/openzeppelin-contracts/.github/workflows/docs.yml](../../../../sources/nirholas__three.ws/contracts/lib/openzeppelin-contracts/.github/workflows/docs.yml) |
| Containers / deploy | 30 | [workers/unirig/Dockerfile](../../../../sources/nirholas__three.ws/workers/unirig/Dockerfile)<br>[workers/texture/Dockerfile](../../../../sources/nirholas__three.ws/workers/texture/Dockerfile)<br>[workers/stylize/Dockerfile](../../../../sources/nirholas__three.ws/workers/stylize/Dockerfile)<br>[workers/segment/Dockerfile](../../../../sources/nirholas__three.ws/workers/segment/Dockerfile)<br>[workers/remesh/Dockerfile](../../../../sources/nirholas__three.ws/workers/remesh/Dockerfile)<br>[workers/rembg/Dockerfile](../../../../sources/nirholas__three.ws/workers/rembg/Dockerfile) |
| Security / policy | 118 | [x402-buildout/prompts/21-auth-hints.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/21-auth-hints.md)<br>[x402-buildout/prompts/24-audit-logging.md](../../../../sources/nirholas__three.ws/x402-buildout/prompts/24-audit-logging.md)<br>[workers/unirig/worker_security.py](../../../../sources/nirholas__three.ws/workers/unirig/worker_security.py)<br>[workers/texture/worker_security.py](../../../../sources/nirholas__three.ws/workers/texture/worker_security.py)<br>[workers/stylize/worker_security.py](../../../../sources/nirholas__three.ws/workers/stylize/worker_security.py)<br>[workers/segment/worker_security.py](../../../../sources/nirholas__three.ws/workers/segment/worker_security.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/nirholas__three.ws/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `x402-buildout/prompts/10-mcp-server.md`, `x402-buildout/prompts/11-mcp-client.md`.
2. Trace execution through entrypoints: `server.json`, `workers/unirig/main.py`, `workers/texture/main.py`.
3. Map agent/tool runtime through: `skills-lock.json`, `workers/oracle/agent-loop.js`, `workers/oracle/executor.js`.
4. Inspect retrieval/memory/indexing through: `workers/oracle/index.js`, `workers/agent-sniper/index.js`, `tests/api-agent-memory.test.js`.
5. Verify behavior through test/eval files: `x402-buildout/prompts/28-e2e-tests.md`, `workers/unirig/test_rig_glb.py`, `workers/model-text2motion/test_smpl_to_clip.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Open source 3D AI agent framework — GLB/glTF avatars with LLM brains, memory, emotions, and autonomous payments. MCP ser. 핵심 구조 신호는 JavaScript, package.json, README.md, CLAUDE.md, LICENSE, openai이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
