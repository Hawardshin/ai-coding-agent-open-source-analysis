# microsoft/vscode-copilot-chat Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 4436 files, 1062 directories.

## 요약

- 조사 단위: `sources/microsoft__vscode-copilot-chat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,414 files, 1,052 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/platform/mcp/vscode/mcpServiceImpl.ts, src/platform/mcp/vscode/test/mcpService.spec.ts, src/platform/mcp/common/mcpService.ts이고, 의존성 단서는 openai, anthropic, claude, modelcontextprotocol, express, react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | microsoft/vscode-copilot-chat |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/microsoft__vscode-copilot-chat](../../../../sources/microsoft__vscode-copilot-chat) |
| Existing report | [reports/clone-structures/microsoft__vscode-copilot-chat.md](../../../clone-structures/microsoft__vscode-copilot-chat.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4414 / 1052 |
| Max observed depth | 13 |
| Top directories | .agents, .devcontainer, .eslintplugin, .github, .husky, assets, chat-lib, docs, script, src, test |
| Top extensions | .ts: 2445, .snap: 581, .json: 353, .tsx: 259, .txt: 95, .ipynb: 92, .sqlite: 85, .py: 71, (none): 68, .md: 59, .patch: 50, .diff: 31 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 144 |
| docs | documentation surface | 13 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| chat-lib | source boundary | 1 |
| script | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | postinstall | tsx ./script/postinstall.ts |
| utility | package.json | prepare | husky |
| build | package.json | vscode-dts:update | node script/build/vscodeDtsUpdate.js |
| build | package.json | vscode-dts:check | node script/build/vscodeDtsCheck.js |
| serve-dev | package.json | vscode-dts:dev | node node_modules/@vscode/dts/index.js dev && node script/build/moveProposedDts.js |
| build | package.json | vscode-dts:main | node node_modules/@vscode/dts/index.js main && node script/build/moveProposedDts.js |
| build | package.json | build | node .esbuild.ts --sourcemaps |
| serve-dev | package.json | compile | node .esbuild.ts --dev |
| serve-dev | package.json | watch | npm-run-all -p watch:* |
| serve-dev | package.json | watch:esbuild | node .esbuild.ts --watch --dev |
| serve-dev | package.json | watch:tsc-extension | tsc --noEmit --watch --project tsconfig.json |
| serve-dev | package.json | watch:tsc-extension-web | tsc --noEmit --watch --project tsconfig.worker.json |
| test | package.json | watch:tsc-simulation-workbench | tsc --noEmit --watch --project test/simulation/workbench/tsconfig.json |
| test | package.json | typecheck | tsc --noEmit --project tsconfig.json && tsc --noEmit --project test/simulation/workbench/tsconfig.json && tsc --noEmit --project tsconfig.worker.json && tsc --noEmit --project src/extension/completions-core/vscode-node/e |
| quality | package.json | lint | eslint . --max-warnings=0 |
| quality | package.json | lint-staged | eslint --max-warnings=0 |
| quality | package.json | tsfmt | npx tsfmt -r --verify |
| test | package.json | test | npm-run-all test:* |
| test | package.json | test:extension | vscode-test |
| test | package.json | test:sanity | vscode-test --sanity |
| test | package.json | test:unit | vitest --run --pool=forks |
| test | package.json | vitest | vitest |
| test | package.json | bench | vitest bench |
| utility | package.json | get_env | tsx script/setup/getEnv.mts |
| utility | package.json | get_token | tsx script/setup/getToken.mts |
| quality | package.json | prettier | prettier --list-different --write --cache . |
| build | package.json | simulate | node dist/simulationMain.js |
| build | package.json | simulate-require-cache | node dist/simulationMain.js --require-cache |
| build | package.json | simulate-ci | node dist/simulationMain.js --ci --require-cache |
| build | package.json | simulate-update-baseline | node dist/simulationMain.js --update-baseline |
| build | package.json | simulate-gc | node dist/simulationMain.js --require-cache --gc |
| utility | package.json | setup | npm run get_env && npm run get_token |
| utility | package.json | setup:dotnet | run-script-os |
| utility | package.json | setup:dotnet:darwin:linux | curl -O https://raw.githubusercontent.com/dotnet/install-scripts/main/src/dotnet-install.sh && chmod u+x dotnet-install.sh && ./dotnet-install.sh --channel 10.0 && rm dotnet-install.sh |
| utility | package.json | setup:dotnet:win32 | powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "Invoke-WebRequest -Uri https://raw.githubusercontent.com/dotnet/install-scripts/main/src/dotnet-install.ps1 -OutFile dotnet-install.ps1; ./dotnet-install.ps1 -c |
| utility | package.json | analyze-edits | tsx script/analyzeEdits.ts |
| build | package.json | extract-chat-lib | tsx script/build/extractChatLib.ts |
| utility | package.json | create_venv | tsx script/setup/createVenv.mts |
| utility | package.json | package | vsce package |
| test | package.json | web | vscode-test-web --headless --extensionDevelopmentPath=. . |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express, react |
| developerSurface | vscode, electron |
| observability | opentelemetry |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/platform/mcp/vscode/mcpServiceImpl.ts](../../../../sources/microsoft__vscode-copilot-chat/src/platform/mcp/vscode/mcpServiceImpl.ts) | mcp signal |
| mcp | [src/platform/mcp/vscode/test/mcpService.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/src/platform/mcp/vscode/test/mcpService.spec.ts) | mcp signal |
| mcp | [src/platform/mcp/common/mcpService.ts](../../../../sources/microsoft__vscode-copilot-chat/src/platform/mcp/common/mcpService.ts) | mcp signal |
| mcp | [src/extension/mcp/vscode-node/commands.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/vscode-node/commands.ts) | mcp signal |
| agentRuntime | [test/simulation/tools/README.md](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/tools/README.md) | agentRuntime signal |
| agentRuntime | [test/simulation/tools/toolcall.stest.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/tools/toolcall.stest.ts) | agentRuntime signal |
| agentRuntime | [test/scenarios/test-tools/tools.0.conversation.json](../../../../sources/microsoft__vscode-copilot-chat/test/scenarios/test-tools/tools.0.conversation.json) | agentRuntime signal |
| agentRuntime | [test/scenarios/test-tools/tools.1.conversation.json](../../../../sources/microsoft__vscode-copilot-chat/test/scenarios/test-tools/tools.1.conversation.json) | agentRuntime signal |
| entrypoints | [test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts) | entrypoints signal |
| entrypoints | [test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts) | entrypoints signal |
| entrypoints | [test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/index.ts) | entrypoints signal |
| entrypoints | [test/simulation/fixtures/tests/simple-ts-proj/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/index.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj/src/index.ts)<br>[test/simulation/fixtures/tests/simple-js-proj copy/src/index.js](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-js-proj copy/src/index.js)<br>[test/simulation/fixtures/tests/simple-js-proj/src/index.js](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-js-proj/src/index.js)<br>[test/simulation/fixtures/edit-issue-1198/main.py](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/edit-issue-1198/main.py)<br>[src/extension/typescriptContext/serverPlugin/src/node/main.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/typescriptContext/serverPlugin/src/node/main.ts) |
| agentRuntime | 952 | [test/simulation/tools/README.md](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/tools/README.md)<br>[test/simulation/tools/toolcall.stest.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/tools/toolcall.stest.ts)<br>[test/scenarios/test-tools/tools.0.conversation.json](../../../../sources/microsoft__vscode-copilot-chat/test/scenarios/test-tools/tools.0.conversation.json)<br>[test/scenarios/test-tools/tools.1.conversation.json](../../../../sources/microsoft__vscode-copilot-chat/test/scenarios/test-tools/tools.1.conversation.json)<br>[test/scenarios/test-tools/tools.state.json](../../../../sources/microsoft__vscode-copilot-chat/test/scenarios/test-tools/tools.state.json)<br>[test/inline/agent.stest.ts](../../../../sources/microsoft__vscode-copilot-chat/test/inline/agent.stest.ts)<br>[test/e2e/tools.stest.ts](../../../../sources/microsoft__vscode-copilot-chat/test/e2e/tools.stest.ts)<br>[src/platform/authentication/common/AGENTS.md](../../../../sources/microsoft__vscode-copilot-chat/src/platform/authentication/common/AGENTS.md) |
| mcp | 25 | [src/platform/mcp/vscode/mcpServiceImpl.ts](../../../../sources/microsoft__vscode-copilot-chat/src/platform/mcp/vscode/mcpServiceImpl.ts)<br>[src/platform/mcp/vscode/test/mcpService.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/src/platform/mcp/vscode/test/mcpService.spec.ts)<br>[src/platform/mcp/common/mcpService.ts](../../../../sources/microsoft__vscode-copilot-chat/src/platform/mcp/common/mcpService.ts)<br>[src/extension/mcp/vscode-node/commands.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/vscode-node/commands.ts)<br>[src/extension/mcp/vscode-node/mcpToolCallingLoop.tsx](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/vscode-node/mcpToolCallingLoop.tsx)<br>[src/extension/mcp/vscode-node/mcpToolCallingLoopPrompt.tsx](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/vscode-node/mcpToolCallingLoopPrompt.tsx)<br>[src/extension/mcp/vscode-node/mcpToolCallingTools.tsx](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/vscode-node/mcpToolCallingTools.tsx)<br>[src/extension/mcp/vscode-node/nuget.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/vscode-node/nuget.ts) |
| retrieval | 54 | [test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/test/index.test.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/test/index.test.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/test/index.test.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/test/index.test.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/index.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/test/index.test.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/test/index.test.ts)<br>[test/simulation/fixtures/tests/simple-ts-proj/src/index.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj/src/index.ts)<br>[test/simulation/fixtures/tests/simple-js-proj copy/src/index.js](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-js-proj copy/src/index.js) |
| spec | 918 | [test/requirements.txt](../../../../sources/microsoft__vscode-copilot-chat/test/requirements.txt)<br>[test/simulation/fixtures/unknown/issue-7660/positionOffsetTransformer.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/unknown/issue-7660/positionOffsetTransformer.spec.ts)<br>[test/pipeline/test/pipeline.e2e.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/test/pipeline/test/pipeline.e2e.spec.ts)<br>[test/pipeline/test/pipeline.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/test/pipeline/test/pipeline.spec.ts)<br>[test/inline/test/assertPyDocstring.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/test/inline/test/assertPyDocstring.spec.ts)<br>[src/util/test/node/errorMessage.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/src/util/test/node/errorMessage.spec.ts)<br>[src/util/test/node/variableLengthQuantity.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/src/util/test/node/variableLengthQuantity.spec.ts)<br>[src/util/node/test/anomalyDetection.spec.ts](../../../../sources/microsoft__vscode-copilot-chat/src/util/node/test/anomalyDetection.spec.ts) |
| eval | 2564 | [.vscode-test.mjs](../../../../sources/microsoft__vscode-copilot-chat/.vscode-test.mjs)<br>[test/cacheSalt.ts](../../../../sources/microsoft__vscode-copilot-chat/test/cacheSalt.ts)<br>[test/jsonOutputPrinter.ts](../../../../sources/microsoft__vscode-copilot-chat/test/jsonOutputPrinter.ts)<br>[test/outputColorer.ts](../../../../sources/microsoft__vscode-copilot-chat/test/outputColorer.ts)<br>[test/requirements.txt](../../../../sources/microsoft__vscode-copilot-chat/test/requirements.txt)<br>[test/simulationLogger.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulationLogger.ts)<br>[test/simulationMain.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulationMain.ts)<br>[test/simulationTests.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulationTests.ts) |
| security | 6 | [SECURITY.md](../../../../sources/microsoft__vscode-copilot-chat/SECURITY.md)<br>[src/extension/mcp/test/vscode-node/fixtures/snapshots/docker-mcp-node-code-sandbox.json](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/test/vscode-node/fixtures/snapshots/docker-mcp-node-code-sandbox.json)<br>[src/extension/completions-core/vscode-node/types/src/auth.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/types/src/auth.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenManager.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenManager.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenNotifier.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenNotifier.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/orgs.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/orgs.ts) |
| ci | 4 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/ensure-node-modules-cache.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/ensure-node-modules-cache.yml)<br>[.github/workflows/npm-package.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/npm-package.yml)<br>[.github/workflows/pr.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/pr.yml) |
| container | 1 | [docs/monitoring/docker-compose.yaml](../../../../sources/microsoft__vscode-copilot-chat/docs/monitoring/docker-compose.yaml) |
| instruction | 4 | [src/platform/authentication/common/AGENTS.md](../../../../sources/microsoft__vscode-copilot-chat/src/platform/authentication/common/AGENTS.md)<br>[src/extension/chatSessions/claude/AGENTS.md](../../../../sources/microsoft__vscode-copilot-chat/src/extension/chatSessions/claude/AGENTS.md)<br>[assets/prompts/skills/agent-customization/references/agents.md](../../../../sources/microsoft__vscode-copilot-chat/assets/prompts/skills/agent-customization/references/agents.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__vscode-copilot-chat/.github/copilot-instructions.md) |
| docs | 22 | [README.md](../../../../sources/microsoft__vscode-copilot-chat/README.md)<br>[test/simulation/tools/README.md](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/tools/README.md)<br>[test/simulation/fixtures/tlaplus/toolbox/org.lamport.tla.toolbox.doc/src/org/lamport/tla/toolbox/doc/HelpActivator.java](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tlaplus/toolbox/org.lamport.tla.toolbox.doc/src/org/lamport/tla/toolbox/doc/HelpActivator.java)<br>[test/simulation/fixtures/multiFileEdit/readme-generation/.devcontainer/devcontainer.json](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/multiFileEdit/readme-generation/.devcontainer/devcontainer.json)<br>[test/simulation/fixtures/multiFileEdit/readme-generation/.devcontainer/post-install.sh](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/multiFileEdit/readme-generation/.devcontainer/post-install.sh)<br>[test/simulation/fixtures/edit/markdown/README.md](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/edit/markdown/README.md)<br>[test/simulation/fixtures/doc/issue-6406/debugModel.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/doc/issue-6406/debugModel.ts)<br>[src/platform/inlineEdits/common/dataTypes/textEditLengthHelper/README.md](../../../../sources/microsoft__vscode-copilot-chat/src/platform/inlineEdits/common/dataTypes/textEditLengthHelper/README.md) |
| config | 47 | [package.json](../../../../sources/microsoft__vscode-copilot-chat/package.json)<br>[tsconfig.json](../../../../sources/microsoft__vscode-copilot-chat/tsconfig.json)<br>[test/requirements.txt](../../../../sources/microsoft__vscode-copilot-chat/test/requirements.txt)<br>[test/simulation/workbench/tsconfig.json](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/workbench/tsconfig.json)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/package.json](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/package.json)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/tsconfig.json](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/tsconfig.json)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/package.json](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/package.json)<br>[test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/tsconfig.json](../../../../sources/microsoft__vscode-copilot-chat/test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2564 | [.vscode-test.mjs](../../../../sources/microsoft__vscode-copilot-chat/.vscode-test.mjs)<br>[test/cacheSalt.ts](../../../../sources/microsoft__vscode-copilot-chat/test/cacheSalt.ts)<br>[test/jsonOutputPrinter.ts](../../../../sources/microsoft__vscode-copilot-chat/test/jsonOutputPrinter.ts)<br>[test/outputColorer.ts](../../../../sources/microsoft__vscode-copilot-chat/test/outputColorer.ts)<br>[test/requirements.txt](../../../../sources/microsoft__vscode-copilot-chat/test/requirements.txt)<br>[test/simulationLogger.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulationLogger.ts) |
| CI workflows | 4 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/ensure-node-modules-cache.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/ensure-node-modules-cache.yml)<br>[.github/workflows/npm-package.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/npm-package.yml)<br>[.github/workflows/pr.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/pr.yml) |
| Containers / deploy | 1 | [docs/monitoring/docker-compose.yaml](../../../../sources/microsoft__vscode-copilot-chat/docs/monitoring/docker-compose.yaml) |
| Security / policy | 6 | [SECURITY.md](../../../../sources/microsoft__vscode-copilot-chat/SECURITY.md)<br>[src/extension/mcp/test/vscode-node/fixtures/snapshots/docker-mcp-node-code-sandbox.json](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/test/vscode-node/fixtures/snapshots/docker-mcp-node-code-sandbox.json)<br>[src/extension/completions-core/vscode-node/types/src/auth.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/types/src/auth.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenManager.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenManager.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenNotifier.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenNotifier.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/orgs.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/orgs.ts) |
| Agent instructions | 4 | [src/platform/authentication/common/AGENTS.md](../../../../sources/microsoft__vscode-copilot-chat/src/platform/authentication/common/AGENTS.md)<br>[src/extension/chatSessions/claude/AGENTS.md](../../../../sources/microsoft__vscode-copilot-chat/src/extension/chatSessions/claude/AGENTS.md)<br>[assets/prompts/skills/agent-customization/references/agents.md](../../../../sources/microsoft__vscode-copilot-chat/assets/prompts/skills/agent-customization/references/agents.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__vscode-copilot-chat/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/platform/mcp/vscode/mcpServiceImpl.ts`, `src/platform/mcp/vscode/test/mcpService.spec.ts`, `src/platform/mcp/common/mcpService.ts`.
2. Trace execution through entrypoints: `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts`, `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts`, `test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/index.ts`.
3. Map agent/tool runtime through: `test/simulation/tools/README.md`, `test/simulation/tools/toolcall.stest.ts`, `test/scenarios/test-tools/tools.0.conversation.json`.
4. Inspect retrieval/memory/indexing through: `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts`, `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/test/index.test.ts`, `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts`.
5. Verify behavior through test/eval files: `.vscode-test.mjs`, `test/cacheSalt.ts`, `test/jsonOutputPrinter.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4436 files, 1062 directories.. 핵심 구조 신호는 package.json, README.md, anthropic, modelcontextprotocol, react, vscode이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
