# espressif/esp-claw

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/espressif/esp-claw |
| local path | sources/espressif__esp-claw |
| HEAD | f6ac698 |
| stars/forks | 1546 / 333 |
| language | C |
| license |  |
| pushedAt | 2026-06-17T08:45:50Z |
| trendScore / priorityScore | 145 / 403 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 186 | application/edge_agent/boards/rockbase-iot/nm_cyd_c5/README.md, application/edge_agent/README.md, application/mcp_server_point/README.md |
| MCP / agent interoperability | 75 | application/mcp_server_point/README.md, AGENTS.md, README.md |
| Security / supply chain | 22 | application/edge_agent/README.md, README.md, components/lua_modules/lua_module_ble/README.md |
| Developer tools / DX | 21 | application/mcp_server_point/README.md, AGENTS.md, components/lua_modules/lua_module_ble_hid/README.md |
| Frontend / app framework | 21 | AGENTS.md, application/edge_agent/components/http_server/frontend_source/package.json, application/edge_agent/components/http_server/frontend_source/tsconfig.json |
| Cloud native / infrastructure | 16 | components/lua_modules/lua_driver_mcpwm/README.md, components/lua_modules/lua_module_lvgl/README.md, application/edge_agent/components/http_server/frontend_source/vite.config.ts |
| Coding agent / software automation | 11 | components/lua_modules/lua_module_ble/README.md, docs/src/content/docs/en/reference-cap/cap-mcp.mdx, docs/src/content/docs/zh-cn/reference-cap/cap-mcp.mdx |
| RAG / retrieval / knowledge | 8 | docs/src/content/docs/en/reference-core/claw-memory.mdx, docs/src/content/docs/en/reference-project/memory.mdx, docs/src/content/docs/en/tutorial/index.mdx |
| Data / ML platform | 6 | docs/src/components/LinkToSource.astro |
| Observability / evaluation | 6 | components/lua_modules/lua_driver_touch/README.md, docs/src/content/docs/en/reference-project/dataflow-and-automation.mdx, docs/src/content/docs/en/tutorial/first-interactions.mdx |
| Local LLM / inference | 4 | .agents/spec/claw-skill-spec.md, docs/src/content/docs/en/reference-cap/cap-lua.mdx, docs/src/content/docs/en/reference-core/claw-core.mdx |
| Database / data infrastructure | 1 | docs/src/content/docs/en/reference-project/memory.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1116 |
| manifests | 40 |
| docs | 222 |
| tests | 64 |
| ci/ops | 1 |
| spec artifacts | 4 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 🌟 Key Features / 📦 Quick Start / Supported Platforms / Development Plan / 📷 Follow Us / Star History / Acknowledgements | <div align="center" <a href="https //esp claw.com/en/" <picture <source media=" prefers color scheme dark " srcset="./docs/src/assets/logos/logo f.svg" / <source media=" prefers color scheme light " srcset="./docs/src/assets/logos/logo.svg" / <img alt="ESP Claw logo" src="./docs/src/assets/logos/logo.svg" width="50%" / </picture </a <h1 ESP Claw 🦞 AI Agent Framework for IoT Devices</h1 <h3 💬 Chat as Creation · 🚀 Millisecond Response · 🧩 Smart and Extensible · 😋 Grows with You</h3 <p <a href="https //www.espressif.com" <img src="https //img.shields.io/badge/runs on ESP32 Series red?style=flat square" alt="Runs on ESP32 Series" / </a <a href="./LICENSE" <img src="https //img.shields.io/gi |


## Key Files

### Manifests

- application/edge_agent/boards/espressif/esp_sparkbot/README.md
- application/edge_agent/boards/lilygo/lilygo_t_display_p4_v1/README.md
- application/edge_agent/boards/movecall/movecall_cuican_esp32s3/README.md
- application/edge_agent/boards/movecall/movecall_moji_esp32s3/README.md
- application/edge_agent/boards/movecall/movecall_moji2_esp32c5/README.md
- application/edge_agent/boards/rockbase-iot/nm_cyd_c5/README.md
- application/edge_agent/boards/waveshare/waveshare_ESP32_S3_RLCD_4_2/README.md
- application/edge_agent/README.md
- application/mcp_server_point/README.md
- components/lua_modules/lua_driver_mcpwm/README.md
- components/lua_modules/lua_module_storage/README.md
- AGENTS.md
- README.md
- components/claw_modules/claw_utils/README.md
- components/lua_modules/lua_driver_adc/README.md
- components/lua_modules/lua_driver_gpio/README.md
- components/lua_modules/lua_driver_i2c/README.md
- components/lua_modules/lua_driver_pcnt/README.md
- components/lua_modules/lua_driver_rmt/README.md
- components/lua_modules/lua_driver_touch/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .agents/spec/claw-skill-spec.md
- .agents/spec/lua-module-spec.md
- .agents/design.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| components | 641 |
| application | 314 |
| docs | 136 |
| .gitlab | 9 |
| .agents | 5 |
| .git-blame-ignore-revs | 1 |
| .github | 1 |
| .gitignore | 1 |
| .gitlab-ci.yml | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| codespell-ignore-list | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .c | 249 |
| .h | 149 |
| .yaml | 102 |
| .txt | 97 |
| .lua | 92 |
| .md | 86 |
| .mdx | 84 |
| .yml | 44 |
| .board | 32 |
| .tsx | 32 |
| [no-ext] | 28 |
| .ts | 20 |
| .webm | 13 |
| .py | 12 |
| .json | 11 |
| .csv | 10 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
