# microsoft/vscode-copilot-chat 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 4436 files, 1062 directories.

## 요약

- 조사 단위: `sources/microsoft__vscode-copilot-chat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,414 files, 1,052 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/platform/mcp/vscode/mcpServiceImpl.ts, src/platform/mcp/vscode/test/mcpService.spec.ts, src/platform/mcp/common/mcpService.ts이고, 의존성 단서는 openai, anthropic, claude, modelcontextprotocol, express, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | microsoft/vscode-copilot-chat |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/microsoft__vscode-copilot-chat](../../../../sources/microsoft__vscode-copilot-chat) |
| 기존 보고서 | [reports/clone-structures/microsoft__vscode-copilot-chat.md](../../../clone-structures/microsoft__vscode-copilot-chat.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4414 / 1052 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .agents, .devcontainer, .eslintplugin, .github, .husky, assets, chat-lib, docs, script, src, test |
| 상위 확장자 | .ts: 2445, .snap: 581, .json: 353, .tsx: 259, .txt: 95, .ipynb: 92, .sqlite: 85, .py: 71, (none): 68, .md: 59, .patch: 50, .diff: 31 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 144 |
| docs | documentation surface | 13 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| chat-lib | source boundary | 1 |
| script | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express, react |
| developerSurface | vscode, electron |
| observability | opentelemetry |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2564 | [.vscode-test.mjs](../../../../sources/microsoft__vscode-copilot-chat/.vscode-test.mjs)<br>[test/cacheSalt.ts](../../../../sources/microsoft__vscode-copilot-chat/test/cacheSalt.ts)<br>[test/jsonOutputPrinter.ts](../../../../sources/microsoft__vscode-copilot-chat/test/jsonOutputPrinter.ts)<br>[test/outputColorer.ts](../../../../sources/microsoft__vscode-copilot-chat/test/outputColorer.ts)<br>[test/requirements.txt](../../../../sources/microsoft__vscode-copilot-chat/test/requirements.txt)<br>[test/simulationLogger.ts](../../../../sources/microsoft__vscode-copilot-chat/test/simulationLogger.ts) |
| CI workflow | 4 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/ensure-node-modules-cache.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/ensure-node-modules-cache.yml)<br>[.github/workflows/npm-package.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/npm-package.yml)<br>[.github/workflows/pr.yml](../../../../sources/microsoft__vscode-copilot-chat/.github/workflows/pr.yml) |
| 컨테이너/배포 | 1 | [docs/monitoring/docker-compose.yaml](../../../../sources/microsoft__vscode-copilot-chat/docs/monitoring/docker-compose.yaml) |
| 보안/정책 | 6 | [SECURITY.md](../../../../sources/microsoft__vscode-copilot-chat/SECURITY.md)<br>[src/extension/mcp/test/vscode-node/fixtures/snapshots/docker-mcp-node-code-sandbox.json](../../../../sources/microsoft__vscode-copilot-chat/src/extension/mcp/test/vscode-node/fixtures/snapshots/docker-mcp-node-code-sandbox.json)<br>[src/extension/completions-core/vscode-node/types/src/auth.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/types/src/auth.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenManager.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenManager.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenNotifier.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/copilotTokenNotifier.ts)<br>[src/extension/completions-core/vscode-node/lib/src/auth/orgs.ts](../../../../sources/microsoft__vscode-copilot-chat/src/extension/completions-core/vscode-node/lib/src/auth/orgs.ts) |
| 에이전트 지시문 | 4 | [src/platform/authentication/common/AGENTS.md](../../../../sources/microsoft__vscode-copilot-chat/src/platform/authentication/common/AGENTS.md)<br>[src/extension/chatSessions/claude/AGENTS.md](../../../../sources/microsoft__vscode-copilot-chat/src/extension/chatSessions/claude/AGENTS.md)<br>[assets/prompts/skills/agent-customization/references/agents.md](../../../../sources/microsoft__vscode-copilot-chat/assets/prompts/skills/agent-customization/references/agents.md)<br>[.github/copilot-instructions.md](../../../../sources/microsoft__vscode-copilot-chat/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/platform/mcp/vscode/mcpServiceImpl.ts`, `src/platform/mcp/vscode/test/mcpService.spec.ts`, `src/platform/mcp/common/mcpService.ts`.
2. entrypoint를 따라 실행 흐름 확인: `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts`, `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts`, `test/simulation/fixtures/tests/simple-ts-proj-with-test-file/src/index.ts`.
3. agent/tool runtime 매핑: `test/simulation/tools/README.md`, `test/simulation/tools/toolcall.stest.ts`, `test/scenarios/test-tools/tools.0.conversation.json`.
4. retrieval/memory/indexing 확인: `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/index.ts`, `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-2/src/test/index.test.ts`, `test/simulation/fixtures/tests/simple-ts-proj-with-test-file-1/src/index.ts`.
5. test/eval 파일로 동작 검증: `.vscode-test.mjs`, `test/cacheSalt.ts`, `test/jsonOutputPrinter.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4436 files, 1062 directories.. 핵심 구조 신호는 package.json, README.md, anthropic, modelcontextprotocol, react, vscode이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
