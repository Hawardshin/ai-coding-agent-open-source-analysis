# microsoft/vscode-copilot-chat 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/microsoft__vscode-copilot-chat |
| remote | https://github.com/microsoft/vscode-copilot-chat.git |
| HEAD | 5863f5a (2026-05-20) Add archive notice (#5120) |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 4436 |
| dirs | 1062 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `GitHub Copilot - Your autonomous AI peer programmer`, `Getting access to GitHub Copilot`, `Build with autonomous agents`, `More ways to code with AI`, `Customize AI for your workflow`, `Supported languages and frameworks`, `Version compatibility`, `Privacy and preview terms`, `Resources & next steps`, `Data and telemetry`, `Trademarks`, `License`

> [!IMPORTANT] This project has been moved into the main VS Code repository and this repository is now archived. Active development continues at https //github.com/microsoft/vscode Please open issues and pull requests in the VS Code repository instead. GitHub Copilot Your autonomous AI peer programmer GitHub Copilot is an AI peer programming tool that transforms how you write code in Visual Studio Code. GitHub Copilot agents handle complete coding tasks end to end, autonomously planning work, editing files, running commands, and self correcting when they hit errors. You can also leverage inline suggestions for quick coding assistance and inline chat for precise, focused edits directly in the editor. Sign up for GitHub Copilot Free! Getting access to GitHub Copilot Sign up for GitHub Copilot Free, or request access from your enterprise admin. To access GitHub Copilot, an active GitHub Copil

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .devcontainer | dir |
| .esbuild.ts | file |
| .eslint-ignore | file |
| .eslintplugin | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .mocha-multi-reporters.js | file |
| .mocharc.js | file |
| .npmrc | file |
| .nvmrc | file |
| .prettierignore | file |
| .vscode | dir |
| .vscode-test.mjs | file |
| .vscodeignore | file |
| assets | dir |
| build | dir |
| cgmanifest.json | file |
| CHANGELOG.md | file |
| chat-lib | dir |
| CODE_OF_CONDUCT.md | file |
| CodeQL.yml | file |
| CONTRIBUTING.md | file |
| docs | dir |
| eslint.config.mjs | file |
| LICENSE.txt | file |
| lint-staged.config.js | file |
| package-lock.json | file |
| package.json | file |
| package.nls.json | file |
| README.md | file |
| script | dir |
| SECURITY.md | file |
| src | dir |
| test | dir |
| tsconfig.base.json | file |
| tsconfig.json | file |
| tsconfig.worker.json | file |
| tsfmt.json | file |
| vite.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 3332 |
| test/ | 959 |
| (root) | 29 |
| assets/ | 22 |
| script/ | 20 |
| .vscode/ | 17 |
| .eslintplugin/ | 16 |
| .github/ | 15 |
| docs/ | 11 |
| chat-lib/ | 9 |
| .agents/ | 2 |
| .devcontainer/ | 2 |
| .husky/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 3332 | preferred |
| docs/ | 11 | preferred |
| test/ | 959 | preferred |
| src/extension/ | 2411 | large |
| src/extension/prompts/ | 784 | large |
| src/platform/ | 683 | large |
| test/simulation/ | 552 | large |
| test/simulation/fixtures/ | 370 | large |
| src/extension/completions-core/ | 352 | large |
| src/extension/chatSessions/ | 231 | large |
| src/util/ | 220 | large |
| test/scenarios/ | 218 | large |
| src/extension/tools/ | 193 | large |
| src/extension/test/ | 173 | large |
| src/util/vs/ | 146 | large |
| src/platform/notebook/ | 140 | large |
| src/extension/typescriptContext/ | 114 | large |
| test/simulation/cache/ | 85 | large |
| src/extension/prompt/ | 77 | large |
| src/platform/parser/ | 74 | large |
| src/extension/inlineEdits/ | 71 | large |
| test/outcome/ | 65 | large |
| src/util/common/ | 62 | large |
| src/extension/intents/ | 52 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.eslintplugin/package.json`
- `.eslintplugin/tsconfig.json`
- `.vscode/extensions/test-extension/package.json`
- `.vscode/extensions/visualization-runner/package.json`
- `chat-lib/package.json`
- `chat-lib/tsconfig.json`
- `package.json`
- `script/tsconfig.json`
- `src/extension/completions-core/vscode-node/extension/src/copilotPanel/webView/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p1/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p10/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p11/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p12/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p13/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p14/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p2/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p3/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p4/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p5/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p6/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p7/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p8/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/p9/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/context/testbed/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/nes/p1/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/fixtures/nes/p2/tsconfig.json`
- `src/extension/typescriptContext/serverPlugin/package.json`
- `src/extension/typescriptContext/serverPlugin/tsconfig.json`
- `test/requirements.txt`
- `test/simulation/fixtures/codeMapper/package.json`
- `test/simulation/fixtures/explain-project-context/package.json`
- `test/simulation/fixtures/explain-project-context/tsconfig.json`
- `test/simulation/fixtures/generate/issue-6163/package.json`
- `test/simulation/fixtures/multiFile/multiple-questions/package.json`
- `test/simulation/fixtures/multiFileEdit/asciiart/package.json`
- `test/simulation/fixtures/multiFileEdit/fsprovider/package.json`
- `test/simulation/fixtures/tests/py-pyproject-toml/pyproject.toml`
- `test/simulation/fixtures/tests/simple-js-proj copy/package.json`
- `test/simulation/fixtures/tests/simple-js-proj/package.json`
- `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/package.json`
- `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/tsconfig.json`
- `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/package.json`
- `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/tsconfig.json`
- `test/simulation/fixtures/tests/simple-ts-proj-with-test-file/package.json`
- `test/simulation/fixtures/tests/simple-ts-proj-with-test-file/tsconfig.json`
- `test/simulation/fixtures/tests/simple-ts-proj/package.json`
- `test/simulation/fixtures/tests/simple-ts-proj/tsconfig.json`
- `test/simulation/workbench/tsconfig.json`
- `tsconfig.json`
- `vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| .eslintplugin/package.json | vscode-copilot-chat-eslint-plugin |  |  |
| .vscode/extensions/test-extension/package.json | simulation-test-runner |  |  |
| .vscode/extensions/visualization-runner/package.json | visualization-runner |  |  |
| chat-lib/package.json | @vscode/chat-lib | clean, build, compile, copy, package, postinstall, publish, test, test:watch | @microsoft/tiktokenizer, @sinclair/typebox, @vscode/copilot-api, @vscode/l10n, @vscode/prompt-tsx, @vscode/tree-sitter-wasm, applicationinsights, jsonc-parser, monaco-editor, openai, undici, vscode-languageserver-protocol, vscode-languageserver-textdocument, web-tree-sitter |
| package.json | copilot-chat | postinstall, prepare, vscode-dts:update, vscode-dts:check, vscode-dts:dev, vscode-dts:main, build, compile, watch, watch:esbuild, watch:tsc-extension, watch:tsc-extension-web, watch:tsc-simulation-workbench, typecheck, lint, lint-staged | @anthropic-ai/claude-agent-sdk, @anthropic-ai/sdk, @github/blackbird-external-ingest-utils, @github/copilot, @google/genai, @humanwhocodes/gitignore-to-minimatch, @microsoft/tiktokenizer, @modelcontextprotocol/sdk, @opentelemetry/api, @opentelemetry/api-logs, @opentelemetry/exporter-logs-otlp-grpc, @opentelemetry/exporter-logs-otlp-http, @opentelemetry/exporter-metrics-otlp-grpc, @opentelemetry/exporter-metrics-otlp-http |
| src/extension/typescriptContext/serverPlugin/package.json | @vscode/copilot-typescript-server-plugin | compile, bootstrap |  |
| test/simulation/fixtures/codeMapper/package.json | @vscode/prompt-tsx | build, compile, watch, test, prettier, prepare |  |
| test/simulation/fixtures/explain-project-context/package.json | javascript |  |  |
| test/simulation/fixtures/generate/issue-6163/package.json | hackathon-issue-triager-extension |  | @types/node, esbuild |
| test/simulation/fixtures/multiFile/multiple-questions/package.json |  | watch, test, export:public, export:internal, export:public-2021, export:public-2023, export:internal-2021, export:internal-2023, export:python-public-2024, export:python-internal-2024, export:clean, build, clean | command-line-args |
| test/simulation/fixtures/multiFileEdit/asciiart/package.json | test-multifile-1 | vscode:prepublish, compile, watch, pretest, lint, test |  |
| test/simulation/fixtures/multiFileEdit/fsprovider/package.json | vscode-memfs | vscode:prepublish, compile, lint, watch |  |
| test/simulation/fixtures/tests/simple-js-proj copy/package.json |  |  | express |
| test/simulation/fixtures/tests/simple-js-proj/package.json |  |  | express |
| test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/package.json |  |  | express |
| test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/package.json |  |  | express |
| test/simulation/fixtures/tests/simple-ts-proj-with-test-file/package.json |  |  | express |
| test/simulation/fixtures/tests/simple-ts-proj/package.json |  |  | express |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| test/simulation/fixtures/tests/py-pyproject-toml/pyproject.toml | my_project | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.vscode/extensions/visualization-runner/README.md`
- `.vscode/extensions/visualization-runner/docs/screenshot.png`
- `CONTRIBUTING.md`
- `README.md`
- `chat-lib/README.md`
- `docs/NES_EXPECTED_EDIT_CAPTURE.md`
- `docs/media/debug-view.png`
- `docs/media/expandable-tool-result.png`
- `docs/media/file-widget.png`
- `docs/media/tool-log.png`
- `docs/monitoring/agent_monitoring.md`
- `docs/monitoring/agent_monitoring_arch.md`
- `docs/monitoring/docker-compose.yaml`
- `docs/monitoring/otel-collector-config.yaml`
- `docs/monitoring/otel-data-flow.html`
- `docs/tools.md`
- `src/extension/chatSessions/claude/node/sessionParser/README.md`
- `src/extension/typescriptContext/serverPlugin/fixtures/readme.md`
- `src/platform/inlineEdits/common/dataTypes/textEditLengthHelper/README.md`
- `test/simulation/fixtures/doc/issue-6406/debugModel.ts`
- `test/simulation/fixtures/edit/markdown/README.md`
- `test/simulation/fixtures/tlaplus/toolbox/org.lamport.tla.toolbox.doc/src/org/lamport/tla/toolbox/doc/HelpActivator.java`
- `test/simulation/tools/README.md`

### 에이전트 지침 후보

- `.agents/skills/anthropic-sdk-upgrader/SKILL.md`
- `.agents/skills/launch/SKILL.md`
- `.github/copilot-instructions.md`
- `.vscode/mcp.json`
- `assets/prompts/create-skill.prompt.md`
- `assets/prompts/skills/agent-customization/SKILL.md`
- `assets/prompts/skills/agent-customization/references/agents.md`
- `assets/prompts/skills/agent-customization/references/hooks.md`
- `assets/prompts/skills/agent-customization/references/instructions.md`
- `assets/prompts/skills/agent-customization/references/prompts.md`
- `assets/prompts/skills/agent-customization/references/skills.md`
- `assets/prompts/skills/agent-customization/references/workspace-instructions.md`
- `assets/prompts/skills/get-search-view-results/SKILL.md`
- `assets/prompts/skills/install-vscode-extension/SKILL.md`
- `assets/prompts/skills/project-setup-info-context7/SKILL.md`
- `assets/prompts/skills/project-setup-info-local/SKILL.md`
- `assets/prompts/skills/troubleshoot/SKILL.md`
- `src/extension/chatSessions/claude/AGENTS.md`
- `src/extension/chatSessions/claude/common/mcpServers/ideMcpServer.ts`
- `src/extension/chatSessions/claude/common/mcpServers/index.ts`
- `src/extension/chatSessions/claude/node/mcpServers/index.ts`
- `src/extension/chatSessions/claude/vscode-node/mcpServers/index.ts`
- `src/extension/chatSessions/copilotcli/node/mcpHandler.ts`
- `src/extension/chatSessions/copilotcli/node/test/mcpHandler.spec.ts`
- `src/extension/mcp/test/vscode-node/commands.spec.ts`
- `src/extension/mcp/test/vscode-node/fixtures/nuget/basetestpackage.dotnettool.1.0.0.nupkg`
- `src/extension/mcp/test/vscode-node/fixtures/nuget/basetestpackage.mcpserver.0.1.0-beta.nupkg`
- `src/extension/mcp/test/vscode-node/fixtures/nuget/knapcode.samplemcpserver.0.6.0-beta.nupkg`
- `src/extension/mcp/test/vscode-node/fixtures/snapshots/docker-mcp-node-code-sandbox.json`
- `src/extension/mcp/test/vscode-node/fixtures/snapshots/dotnet-package-search-does-not-exist.json`
- `src/extension/mcp/test/vscode-node/fixtures/snapshots/dotnet-package-search-exists.json`
- `src/extension/mcp/test/vscode-node/fixtures/snapshots/npm-modelcontextprotocol-server-everything.json`
- `src/extension/mcp/test/vscode-node/fixtures/snapshots/nuget-readme.md`
- `src/extension/mcp/test/vscode-node/fixtures/snapshots/nuget-service-index.json`
- `src/extension/mcp/test/vscode-node/fixtures/snapshots/pip-mcp-server-fetch.json`
- `src/extension/mcp/test/vscode-node/nuget.integration.spec.ts`
- `src/extension/mcp/test/vscode-node/nuget.mapping.spec.ts`
- `src/extension/mcp/test/vscode-node/nuget.stub.spec.ts`
- `src/extension/mcp/test/vscode-node/util.ts`
- `src/extension/mcp/vscode-node/commands.ts`
- `src/extension/mcp/vscode-node/mcpToolCallingLoop.tsx`
- `src/extension/mcp/vscode-node/mcpToolCallingLoopPrompt.tsx`
- `src/extension/mcp/vscode-node/mcpToolCallingTools.tsx`
- `src/extension/mcp/vscode-node/nuget.ts`
- `src/extension/mcp/vscode-node/util.ts`
- `src/extension/vscode.proposed.mcpServerDefinitions.d.ts`
- `src/platform/authentication/common/AGENTS.md`
- `src/platform/mcp/common/mcpService.ts`
- `src/platform/mcp/vscode/mcpServiceImpl.ts`
- `src/platform/mcp/vscode/test/mcpService.spec.ts`

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/anthropic-sdk-upgrader/SKILL.md`
- `.agents/skills/launch/SKILL.md`
- `assets/prompts/skills/agent-customization/SKILL.md`
- `assets/prompts/skills/agent-customization/references/agents.md`
- `assets/prompts/skills/agent-customization/references/hooks.md`
- `assets/prompts/skills/agent-customization/references/instructions.md`
- `assets/prompts/skills/agent-customization/references/prompts.md`
- `assets/prompts/skills/agent-customization/references/skills.md`
- `assets/prompts/skills/agent-customization/references/workspace-instructions.md`
- `assets/prompts/skills/get-search-view-results/SKILL.md`
- `assets/prompts/skills/install-vscode-extension/SKILL.md`
- `assets/prompts/skills/project-setup-info-context7/SKILL.md`
- `assets/prompts/skills/project-setup-info-local/SKILL.md`
- `assets/prompts/skills/troubleshoot/SKILL.md`
- `src/extension/chatSessions/copilotcli/vscode-node/commands/addFileReference.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/commands/addSelection.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/commands/context.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/commands/diffCommands.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/commands/index.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/commands/pickSession.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/commands/sendContext.ts`
- `src/extension/commands/node/commandService.ts`
- `src/platform/commands/common/mockRunCommandExecutionService.ts`
- `src/platform/commands/common/runCommandExecutionService.ts`
- `src/platform/commands/vscode/runCommandExecutionServiceImpl.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `script/test/scoredEditsReconciler.spec.ts`
- `src/extension/agents/node/test/mockLanguageModelServer.ts`
- `src/extension/agents/node/test/openaiAdapter.spec.ts`
- `src/extension/agents/vscode-node/test/askAgentProvider.spec.ts`
- `src/extension/agents/vscode-node/test/githubOrgChatResourcesService.spec.ts`
- `src/extension/agents/vscode-node/test/githubOrgCustomAgentProvider.spec.ts`
- `src/extension/agents/vscode-node/test/githubOrgInstructionsProvider.spec.ts`
- `src/extension/agents/vscode-node/test/mockOctoKitService.ts`
- `src/extension/agents/vscode-node/test/planAgentProvider.spec.ts`
- `src/extension/byok/common/test/__snapshots__/anthropicMessageConverter.spec.ts.snap`
- `src/extension/byok/common/test/anthropicMessageConverter.spec.ts`
- `src/extension/byok/common/test/geminiFunctionDeclarationConverter.spec.ts`
- `src/extension/byok/common/test/geminiMessageConverter.spec.ts`
- `src/extension/byok/node/test/azureOpenAIEndpoint.spec.ts`
- `src/extension/byok/node/test/openAIEndpoint.spec.ts`
- `src/extension/byok/vscode-node/test/azureProvider.spec.ts`
- `src/extension/byok/vscode-node/test/geminiNativeProvider.spec.ts`
- `src/extension/byok/vscode-node/test/ollamaProvider.spec.ts`
- `src/extension/chat/test/vscode-node/chatHookService.spec.ts`
- `src/extension/chat/vscode-node/test/chatDebugFileLoggerService.spec.ts`
- `src/extension/chatSessions/claude/common/test/claudeMessageDispatch.spec.ts`
- `src/extension/chatSessions/claude/common/test/claudeToolPermissionRegistry.spec.ts`
- `src/extension/chatSessions/claude/common/test/ideMcpServer.spec.ts`
- `src/extension/chatSessions/claude/common/test/toolInvocationFormatter.spec.ts`
- `src/extension/chatSessions/claude/node/sessionParser/test/claudeCodeSessionService.spec.ts`
- `src/extension/chatSessions/claude/node/sessionParser/test/claudeSessionParser.spec.ts`
- `src/extension/chatSessions/claude/node/sessionParser/test/claudeSessionSchema.spec.ts`
- `src/extension/chatSessions/claude/node/sessionParser/test/sdkSessionAdapter.spec.ts`
- `src/extension/chatSessions/claude/node/test/askUserQuestionHandler.spec.ts`
- `src/extension/chatSessions/claude/node/test/claudeCodeAgent.spec.ts`
- `src/extension/chatSessions/claude/node/test/claudeCodeAgentOTel.spec.ts`
- `src/extension/chatSessions/claude/node/test/claudeCodeModels.spec.ts`
- `src/extension/chatSessions/claude/node/test/claudeProjectFolders.spec.ts`
- `src/extension/chatSessions/claude/node/test/claudeRuntimeDataService.spec.ts`
- `src/extension/chatSessions/claude/node/test/claudeSessionStateService.spec.ts`
- `src/extension/chatSessions/claude/node/test/claudeSettingsChangeTracker.spec.ts`
- `src/extension/chatSessions/claude/node/test/claudeToolPermissionService.spec.ts`
- `src/extension/chatSessions/claude/node/test/extractSessionId.spec.ts`
- `src/extension/chatSessions/claude/node/test/fixtures/30530d66-37fb-4f3b-aa5f-d92b6a8afae2.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/50a7220d-7250-46f3-b38e-b716ce25032e.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/50a7220d-7250-46f3-b38e-b716ce25032e/subagents/agent-a21e2f5.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/553dd2b5-8a53-4fbf-9db2-240632522fe5.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/b02ed4d8-1f00-45cc-949f-3ea63b2dbde2.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/b3a7bd3c-5a10-4e7b-8ff0-7fc0cd6d1093.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/b3a7bd3c-5a10-4e7b-8ff0-7fc0cd6d1093/subagents/agent-a775a67.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/b3a7bd3c-5a10-4e7b-8ff0-7fc0cd6d1093/subagents/agent-aa9d784.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/b3a7bd3c-5a10-4e7b-8ff0-7fc0cd6d1093/subagents/agent-ac47f8c.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/b3a7bd3c-5a10-4e7b-8ff0-7fc0cd6d1093/subagents/agent-ae52dab.jsonl`
- `src/extension/chatSessions/claude/node/test/fixtures/c8bcb3a7-8728-4d76-9aae-1cbaf2350114.jsonl`
- `src/extension/chatSessions/claude/node/test/mockClaudeCodeModels.ts`
- `src/extension/chatSessions/claude/node/test/mockClaudeCodeSdkService.ts`
- `src/extension/chatSessions/claude/node/test/mockClaudeToolPermissionService.ts`
- `src/extension/chatSessions/claude/node/test/planModeHook.spec.ts`
- `src/extension/chatSessions/claude/node/test/resolvePromptToContentBlocks.spec.ts`
- `src/extension/chatSessions/claude/vscode-node/slashCommands/test/claudeSlashCommandRegistry.spec.ts`
- `src/extension/chatSessions/claude/vscode-node/slashCommands/test/terminalCommand.spec.ts`
- `src/extension/chatSessions/claude/vscode-node/test/claudeSlashCommandService.spec.ts`
- `src/extension/chatSessions/common/test/externalEditTracker.spec.ts`
- `src/extension/chatSessions/common/test/mockChatSessionMetadataStore.ts`
- `src/extension/chatSessions/common/test/ttlCache.spec.ts`
- `src/extension/chatSessions/copilotcli/common/test/copilotCLITools.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/copilotCLISkills.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/copilotCliAgents.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/copilotCliAuth.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/copilotCliBridgeSpanProcessor.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/copilotCliModels.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/copilotCliSessionService.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/copilotcliPromptResolver.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/copilotcliSession.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/mcpHandler.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/permissionHelpers.spec.ts`
- `src/extension/chatSessions/copilotcli/node/test/testHelpers.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/test/addFileReference.spec.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/test/addSelection.spec.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/test/closeAllForSession.spec.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/test/closeDiff.spec.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/test/context.spec.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/test/copilotCLISessionTracker.spec.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/test/diagnosticsChanged.spec.ts`
- `src/extension/chatSessions/copilotcli/vscode-node/test/diffCommands.spec.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/copilot-setup-steps.yml`
- `.github/workflows/ensure-node-modules-cache.yml`
- `.github/workflows/npm-package.yml`
- `.github/workflows/pr.yml`
- `docs/monitoring/docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 2453 |
| .snap | 581 |
| .json | 363 |
| .tsx | 259 |
| .txt | 95 |
| .ipynb | 92 |
| .sqlite | 85 |
| .py | 71 |
| .md | 60 |
| .patch | 50 |
| .diff | 31 |
| .js | 30 |
| .xml | 29 |
| .text | 22 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `src/extension/ 내부 책임 분리`
- `src/extension/prompts/ 내부 책임 분리`
- `.agents/skills/anthropic-sdk-upgrader/SKILL.md 스펙/명령 의미`
- `.agents/skills/launch/SKILL.md 스펙/명령 의미`
- `assets/prompts/skills/agent-customization/SKILL.md 스펙/명령 의미`
- `assets/prompts/skills/agent-customization/references/agents.md 스펙/명령 의미`
- `assets/prompts/skills/agent-customization/references/hooks.md 스펙/명령 의미`
- `.eslintplugin/package.json 실행 스크립트와 패키지 경계`
- `.eslintplugin/tsconfig.json 실행 스크립트와 패키지 경계`
- `.vscode/extensions/test-extension/package.json 실행 스크립트와 패키지 경계`
- `.vscode/extensions/visualization-runner/package.json 실행 스크립트와 패키지 경계`
- `chat-lib/package.json 실행 스크립트와 패키지 경계`

