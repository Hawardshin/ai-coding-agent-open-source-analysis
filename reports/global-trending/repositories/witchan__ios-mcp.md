# witchan/ios-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/witchan/ios-mcp |
| local path | sources/witchan__ios-mcp |
| HEAD | 6f20c55 |
| stars/forks | 567 / 79 |
| language | Objective-C |
| license |  |
| pushedAt | 2026-06-17T02:35:34Z |
| trendScore / priorityScore | 141 / 338 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 286 | AGENTS.md, postman/README.md, README.md |
| AI agent / orchestration | 22 | AGENTS.md, third_party/ldid/.github/workflows/build.yml, README_EN.md |
| Developer tools / DX | 20 | AppSync/README.md, AppSync/appinst/README.md, mcp-ldid/Makefile |
| Coding agent / software automation | 17 | AGENTS.md, README.md, postman/ios-mcp.postman_environment.json |
| Security / supply chain | 9 | AGENTS.md, AppSync/README.md, Makefile |
| Cloud native / infrastructure | 2 | README_EN.md, third_party/ldid/PKCS11.md |
| Frontend / app framework | 1 | AppSync/changelog-inline.html |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, databaseRuntime, devtools, frontend, frontendStack, infra, llmFramework, mcp, security, securityTooling |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 275 |
| manifests | 18 |
| docs | 14 |
| tests | 1 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | iOS MCP | iOS MCP / 功能概览 / 运行要求 / 安装说明 / 支持环境 / 安装方式 / 安装完成后建议执行以下检查 / 使用 / 安全说明 / 社区交流 | iOS MCP 中文 English README EN.md iOS MCP 是一个运行在越狱 iPhone 上的 MCP Model Context Protocol https //modelcontextprotocol.io 服务器，让 AI 代理（Claude、Codex、Cursor 等）能够直接操控 iOS 设备。 功能概览 类别 工具 说明 触控手势 tap screen swipe screen long press double tap drag and drop 精确屏幕坐标操作 硬件按键 press home press power press volume up press volume down toggle mute wake and home HID 模拟物理按键，锁屏/熄屏唤醒 文字输入 input text type text press key 剪贴板快速输入 / HID 逐字模拟 / 特殊键 截图 screenshot get screen info Base64 JPEG 截图、屏幕尺寸与方向 App 管理 launch app kill app list apps list running apps get frontmost app get app info install app uninstall app 启动/关闭/安装/卸载 App，查询 App 沙盒/容器路径与 entitlements 无障碍 / 元素操作 get ui elements get element at point tap element wait fo |


## Key Files

### Manifests

- AGENTS.md
- AppSync/README.md
- postman/README.md
- README.md
- AppSync/appinst/README.md
- third_party/ldid/README.md
- mcp-ldid/Makefile
- mcp-logreader/Makefile
- mcp-root/Makefile
- mcp-roothelper/Makefile
- AppSync/Makefile
- Makefile
- AppSync/appinst/Makefile
- AppSync/AppSyncUnified-FrontBoard/Makefile
- AppSync/AppSyncUnified-installd/Makefile
- AppSync/asu_inject/Makefile
- AppSync/pkg-actions/Makefile
- third_party/ldid/Makefile


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| third_party | 155 |
| AppSync | 42 |
| prefs | 7 |
| postman | 5 |
| mcp-roothelper | 4 |
| mcp-logreader | 3 |
| mcp-root | 3 |
| assets | 2 |
| .gitignore | 1 |
| AccessibilityManager.h | 1 |
| AccessibilityManager.m | 1 |
| AGENTS.md | 1 |
| AppManager.h | 1 |
| AppManager.m | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .h | 172 |
| [no-ext] | 29 |
| .m | 26 |
| .plist | 13 |
| .md | 11 |
| .json | 4 |
| .1 | 3 |
| .html | 3 |
| .x | 3 |
| .a | 2 |
| .c | 2 |
| .cpp | 2 |
| .hpp | 1 |
| .py | 1 |
| .sh | 1 |
| .svg | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
