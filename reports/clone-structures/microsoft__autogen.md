# microsoft/autogen 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/microsoft__autogen |
| remote | https://github.com/microsoft/autogen |
| HEAD | 027ecf0 (2026-04-06) Update maintenance mode banner in readme (#7521) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 1837 |
| dirs | 482 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `AutoGen [![Maintenance Mode](https://img.shields.io/badge/status-maintenance%20mode-orange)](https://github.com/microsoft/agent-framework)`, `Installation`, `Install AgentChat and OpenAI client from Extensions`, `Install AutoGen Studio for no-code GUI`, `Quickstart`, `Hello World`, `MCP Server`, `First run `npm install -g @playwright/mcp@latest` to install the MCP server.`, `Multi-Agent Orchestration`, `AutoGen Studio`, `Run AutoGen Studio on http://localhost:8080`, `Why AutoGen?`, `Where to go next?`, `Legal Notices`

> <a name="readme top" </a <div align="center" <img src="https //microsoft.github.io/autogen/0.2/img/ag.svg" alt="AutoGen Logo" width="100" </div AutoGen AutoGen is a framework for creating multi agent AI applications that can act autonomously or work alongside humans. [!CAUTION] ⚠️ Maintenance Mode AutoGen is now in maintenance mode. It will not receive new features or enhancements and is community managed going forward. New users should start with Microsoft Agent Framework. Existing users are encouraged to migrate using the AutoGen → Microsoft Agent Framework migration guide. Microsoft Agent Framework (MAF) is the enterprise‑ready successor to AutoGen. Microsoft Agent FrameworkAF in now available as a production ready release stable APIs, and a commitment to long term support. Whether you're building a single assistant or orchestrating a fleet of specialized agents, Microsoft Agent Frame

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .azure | dir |
| .devcontainer | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| autogen-landing.jpg | file |
| CODE_OF_CONDUCT.md | file |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| docs | dir |
| dotnet | dir |
| FAQ.md | file |
| LICENSE | file |
| LICENSE-CODE | file |
| protos | dir |
| python | dir |
| README.md | file |
| SECURITY.md | file |
| SUPPORT.md | file |
| TRANSPARENCY_FAQS.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| python/ | 1023 |
| dotnet/ | 752 |
| docs/ | 22 |
| .github/ | 18 |
| (root) | 13 |
| .devcontainer/ | 4 |
| .azure/ | 3 |
| protos/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 22 | preferred |
| python/ | 1023 | large |
| dotnet/ | 752 | large |
| python/packages/ | 716 | large |
| dotnet/src/ | 325 | large |
| python/packages/autogen-ext/ | 238 | large |
| python/packages/autogen-studio/ | 228 | large |
| dotnet/test/ | 167 | large |
| python/docs/ | 158 | large |
| dotnet/samples/ | 150 | large |
| dotnet/src/Microsoft.AutoGen/ | 139 | large |
| python/docs/src/ | 136 | large |
| python/samples/ | 132 | large |
| python/packages/autogen-core/ | 100 | large |
| dotnet/website/ | 84 | large |
| dotnet/samples/AgentChat/ | 72 | large |
| python/packages/autogen-agentchat/ | 68 | large |
| python/packages/agbench/ | 56 | large |
| dotnet/website/articles/ | 45 | large |
| dotnet/samples/dev-team/ | 44 | large |
| dotnet/src/AutoGen.Core/ | 41 | large |
| dotnet/samples/Hello/ | 22 | large |
| dotnet/src/AutoGen.WebAPI/ | 22 | large |
| dotnet/test/Microsoft.AutoGen.Integration.Tests.AppHosts/ | 21 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `.devcontainer/docker-compose.yml`
- `dotnet/samples/dev-team/seed-memory/Dockerfile`
- `dotnet/src/Microsoft.AutoGen/AgentHost/Dockerfile`
- `python/packages/agbench/benchmarks/GAIA/Templates/MagenticOne/requirements.txt`
- `python/packages/agbench/benchmarks/GAIA/Templates/ParallelAgents/requirements.txt`
- `python/packages/agbench/benchmarks/GAIA/Templates/SelectorGroupChat/requirements.txt`
- `python/packages/agbench/benchmarks/HumanEval/Templates/AgentChat/requirements.txt`
- `python/packages/agbench/pyproject.toml`
- `python/packages/agbench/src/agbench/res/Dockerfile`
- `python/packages/agbench/src/agbench/template/requirements.txt`
- `python/packages/autogen-agentchat/pyproject.toml`
- `python/packages/autogen-core/pyproject.toml`
- `python/packages/autogen-ext/pyproject.toml`
- `python/packages/autogen-studio/Dockerfile`
- `python/packages/autogen-studio/frontend/package.json`
- `python/packages/autogen-studio/frontend/tsconfig.json`
- `python/packages/autogen-studio/frontend/yarn.lock`
- `python/packages/autogen-studio/pyproject.toml`
- `python/packages/autogen-studio/requirements.txt`
- `python/packages/autogen-test-utils/pyproject.toml`
- `python/packages/component-schema-gen/pyproject.toml`
- `python/packages/magentic-one-cli/pyproject.toml`
- `python/packages/pyautogen/pyproject.toml`
- `python/pyproject.toml`
- `python/samples/agentchat_graphrag/requirements.txt`
- `python/samples/core_streaming_handoffs_fastapi/requirements.txt`
- `python/samples/gitty/pyproject.toml`
- `python/samples/gitty/uv.lock`
- `python/templates/new-package/{{cookiecutter.package_name}}/pyproject.toml`
- `python/uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| python/packages/autogen-studio/frontend/package.json | autogentstudio | develop, dev, start, build, serve, clean, typecheck | @dagrejs/dagre, @dnd-kit/core, @headlessui/react, @heroicons/react, @mdx-js/react, @monaco-editor/react, @tailwindcss/typography, @xyflow/react, antd, autoprefixer, gatsby, gatsby-plugin-image, gatsby-plugin-manifest, gatsby-plugin-mdx |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| python/packages/agbench/pyproject.toml | agbench | false | false | true | false |
| python/packages/autogen-agentchat/pyproject.toml | autogen-agentchat | false | false | true | true |
| python/packages/autogen-core/pyproject.toml | autogen-core | false | false | true | true |
| python/packages/autogen-ext/pyproject.toml | autogen-ext | false | false | true | true |
| python/packages/autogen-studio/pyproject.toml | autogenstudio | false | false | true | true |
| python/packages/autogen-test-utils/pyproject.toml | autogen-test-utils | false | false | true | false |
| python/packages/component-schema-gen/pyproject.toml | component-schema-gen | false | false | true | false |
| python/packages/magentic-one-cli/pyproject.toml | magentic-one-cli | false | false | true | true |
| python/packages/pyautogen/pyproject.toml | pyautogen | false | false | false | false |
| python/pyproject.toml |  | false | true | true | true |
| python/samples/gitty/pyproject.toml | gitty | false | false | true | false |
| python/templates/new-package/{{cookiecutter.package_name}}/pyproject.toml | {{ cookiecutter.package_name }} | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/design/01 - Programming Model.md`
- `docs/design/02 - Topics.md`
- `docs/design/03 - Agent Worker Protocol.md`
- `docs/design/04 - Agent and Topic ID Specs.md`
- `docs/design/05 - Services.md`
- `docs/design/readme.md`
- `docs/dotnet/.gitignore`
- `docs/dotnet/README.md`
- `docs/dotnet/core/differences-from-python.md`
- `docs/dotnet/core/index.md`
- `docs/dotnet/core/installation.md`
- `docs/dotnet/core/protobuf-message-types.md`
- `docs/dotnet/core/toc.yml`
- `docs/dotnet/core/tutorial.md`
- `docs/dotnet/docfx.json`
- `docs/dotnet/images/favicon.ico`
- `docs/dotnet/images/logo.svg`
- `docs/dotnet/index.md`
- `docs/dotnet/template/public/main.css`
- `docs/dotnet/template/public/main.js`
- `docs/dotnet/toc.yml`
- `docs/switcher.json`
- `dotnet/README.md`
- `dotnet/nuget/README.md`
- `dotnet/samples/Hello/HelloAgent/README.md`
- `dotnet/samples/Hello/HelloAgentState/README.md`
- `dotnet/samples/Hello/README.md`
- `dotnet/samples/dev-team/README.md`
- `dotnet/samples/dev-team/docs/github-flow-getting-started.md`
- `dotnet/samples/dev-team/docs/images/github-sk-dev-team.png`
- `dotnet/samples/dev-team/docs/images/new-codespace.png`
- `dotnet/samples/dev-team/docs/images/overview.png`
- `dotnet/samples/dev-team/docs/images/solution-explorer.png`
- `dotnet/samples/dev-team/seed-memory/README.md`
- `dotnet/src/AutoGen.LMStudio/README.md`
- `dotnet/src/AutoGen.SourceGenerator/README.md`
- `dotnet/src/Microsoft.AutoGen/readme.md`
- `dotnet/test/Microsoft.AutoGen.Integration.Tests.AppHosts/HelloAgentTests/README.md`
- `dotnet/test/Microsoft.AutoGen.Integration.Tests.AppHosts/core_xlang_hello_python_agent/README.md`
- `dotnet/website/README.md`
- `python/README.md`
- `python/docs/README.md`
- `python/docs/drawio/agent-lifecycle.drawio`
- `python/docs/drawio/agentchat-team.drawio`
- `python/docs/drawio/application-stack.drawio`
- `python/docs/drawio/architecture-distributed.drawio`
- `python/docs/drawio/architecture-standalone.drawio`
- `python/docs/drawio/assistant-agent.drawio`
- ... 30 more

### 에이전트 지침 후보

- `.github/copilot-instructions.md`
- `python/packages/autogen-ext/examples/mcp_example_server.py`
- `python/packages/autogen-ext/examples/mcp_session_host_example.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/__init__.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_actor.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_base.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_config.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_factory.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_host/README.md`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_host/__init__.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_host/_elicitation.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_host/_roots.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_host/_sampling.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_host/_session_host.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_session.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_sse.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_stdio.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_streamable_http.py`
- `python/packages/autogen-ext/src/autogen_ext/tools/mcp/_workbench.py`
- `python/packages/autogen-ext/tests/mcp_server_comprehensive.py`
- `python/packages/autogen-ext/tests/tools/test_mcp_actor.py`
- `python/packages/autogen-ext/tests/tools/test_mcp_host.py`
- `python/packages/autogen-ext/tests/tools/test_mcp_tools.py`
- `python/packages/autogen-ext/tests/tools/test_mcp_workbench_features.py`
- `python/packages/autogen-ext/tests/tools/test_mcp_workbench_overrides.py`
- `python/packages/autogen-ext/tests/tools/test_mcp_workbench_warnings_and_errors.py`
- `python/packages/autogen-studio/autogenstudio/mcp/callbacks.py`
- `python/packages/autogen-studio/autogenstudio/mcp/client.py`
- `python/packages/autogen-studio/autogenstudio/mcp/utils.py`
- `python/packages/autogen-studio/autogenstudio/mcp/wsbridge.py`
- `python/packages/autogen-studio/autogenstudio/web/routes/mcp.py`
- `python/packages/autogen-studio/frontend/src/components/views/mcp/api.ts`
- `python/packages/autogen-studio/frontend/src/components/views/mcp/create-modal.tsx`
- `python/packages/autogen-studio/frontend/src/components/views/mcp/detail.tsx`
- `python/packages/autogen-studio/frontend/src/components/views/mcp/index.ts`
- `python/packages/autogen-studio/frontend/src/components/views/mcp/manager.tsx`
- `python/packages/autogen-studio/frontend/src/components/views/mcp/sidebar.tsx`
- `python/packages/autogen-studio/frontend/src/components/views/mcp/types.ts`
- `python/packages/autogen-studio/frontend/src/components/views/teambuilder/builder/component-editor/fields/workbench/mcp-capabilities-panel.tsx`
- `python/packages/autogen-studio/frontend/src/components/views/teambuilder/builder/component-editor/fields/workbench/mcp-prompts-tab.tsx`
- `python/packages/autogen-studio/frontend/src/components/views/teambuilder/builder/component-editor/fields/workbench/mcp-resources-tab.tsx`
- `python/packages/autogen-studio/frontend/src/components/views/teambuilder/builder/component-editor/fields/workbench/mcp-tools-tab.tsx`
- `python/packages/autogen-studio/frontend/src/pages/mcp.tsx`
- `python/packages/autogen-studio/tests/mcp/test_mcp_callbacks.py`
- `python/packages/autogen-studio/tests/mcp/test_mcp_client.py`
- `python/packages/autogen-studio/tests/mcp/test_mcp_integration.py`
- `python/packages/autogen-studio/tests/mcp/test_mcp_websocket.py`
- `python/packages/autogen-studio/tests/mcp/test_mcp_wsbridge.py`

### 스펙/템플릿/명령/스킬 후보

- `.azure/pipelines/templates/build.yaml`
- `.azure/pipelines/templates/vars.yaml`
- `python/templates/new-package/cookiecutter.json`
- `python/templates/new-package/hooks/post_gen_project.py`
- `python/templates/new-package/hooks/pre_gen_project.py`
- `python/templates/new-package/{{cookiecutter.package_name}}/LICENSE-CODE`
- `python/templates/new-package/{{cookiecutter.package_name}}/README.md`
- `python/templates/new-package/{{cookiecutter.package_name}}/pyproject.toml`
- `python/templates/new-package/{{cookiecutter.package_name}}/src/{{cookiecutter.__project_slug}}/__init__.py`
- `python/templates/new-package/{{cookiecutter.package_name}}/src/{{cookiecutter.__project_slug}}/py.typed`
- `python/templates/new-package/{{cookiecutter.package_name}}/tests/test_example.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `dotnet/test/.editorconfig`
- `dotnet/test/AutoGen.Anthropic.Tests/AnthropicClientAgentTest.cs`
- `dotnet/test/AutoGen.Anthropic.Tests/AnthropicClientTest.cs`
- `dotnet/test/AutoGen.Anthropic.Tests/AnthropicTestFunctionCalls.cs`
- `dotnet/test/AutoGen.Anthropic.Tests/AnthropicTestUtils.cs`
- `dotnet/test/AutoGen.Anthropic.Tests/AutoGen.Anthropic.Tests.csproj`
- `dotnet/test/AutoGen.Anthropic.Tests/images/.gitattributes`
- `dotnet/test/AutoGen.Anthropic.Tests/images/square.png`
- `dotnet/test/AutoGen.AotCompatibility.Tests/AutoGen.AotCompatibility.Tests.csproj`
- `dotnet/test/AutoGen.AotCompatibility.Tests/Program.cs`
- `dotnet/test/AutoGen.AzureAIInference.Tests/AutoGen.AzureAIInference.Tests.csproj`
- `dotnet/test/AutoGen.AzureAIInference.Tests/ChatCompletionClientAgentTests.cs`
- `dotnet/test/AutoGen.AzureAIInference.Tests/ChatRequestMessageTests.cs`
- `dotnet/test/AutoGen.DotnetInteractive.Tests/AutoGen.DotnetInteractive.Tests.csproj`
- `dotnet/test/AutoGen.DotnetInteractive.Tests/DotnetInteractiveServiceTest.cs`
- `dotnet/test/AutoGen.DotnetInteractive.Tests/DotnetInteractiveStdioKernelConnectorTests.cs`
- `dotnet/test/AutoGen.DotnetInteractive.Tests/InProcessDotnetInteractiveKernelBuilderTest.cs`
- `dotnet/test/AutoGen.DotnetInteractive.Tests/MessageExtensionTests.cs`
- `dotnet/test/AutoGen.Gemini.Tests/ApprovalTests/FunctionContractExtensionTests.ItGenerateGetWeatherToolTest.approved.txt`
- `dotnet/test/AutoGen.Gemini.Tests/AutoGen.Gemini.Tests.csproj`
- `dotnet/test/AutoGen.Gemini.Tests/FunctionContractExtensionTests.cs`
- `dotnet/test/AutoGen.Gemini.Tests/Functions.cs`
- `dotnet/test/AutoGen.Gemini.Tests/GeminiAgentTests.cs`
- `dotnet/test/AutoGen.Gemini.Tests/GeminiMessageTests.cs`
- `dotnet/test/AutoGen.Gemini.Tests/GoogleGeminiClientTests.cs`
- `dotnet/test/AutoGen.Gemini.Tests/SampleTests.cs`
- `dotnet/test/AutoGen.Gemini.Tests/VertexGeminiClientTests.cs`
- `dotnet/test/AutoGen.Mistral.Tests/AutoGen.Mistral.Tests.csproj`
- `dotnet/test/AutoGen.Mistral.Tests/MistralClientAgentTests.cs`
- `dotnet/test/AutoGen.Mistral.Tests/MistralClientTests.cs`
- `dotnet/test/AutoGen.Ollama.Tests/AutoGen.Ollama.Tests.csproj`
- `dotnet/test/AutoGen.Ollama.Tests/OllamaAgentTests.cs`
- `dotnet/test/AutoGen.Ollama.Tests/OllamaMessageTests.cs`
- `dotnet/test/AutoGen.Ollama.Tests/OllamaTextEmbeddingServiceTests.cs`
- `dotnet/test/AutoGen.Ollama.Tests/images/image.png`
- `dotnet/test/AutoGen.Ollama.Tests/images/square.png`
- `dotnet/test/AutoGen.OpenAI.Tests/ApprovalTests/OpenAIMessageTests.BasicMessageTest.approved.txt`
- `dotnet/test/AutoGen.OpenAI.Tests/ApprovalTests/OpenAIMessageTests.BasicMessageTest.received.txt`
- `dotnet/test/AutoGen.OpenAI.Tests/AutoGen.OpenAI.Tests.csproj`
- `dotnet/test/AutoGen.OpenAI.Tests/GlobalUsing.cs`
- `dotnet/test/AutoGen.OpenAI.Tests/MathClassTest.cs`
- `dotnet/test/AutoGen.OpenAI.Tests/OpenAIChatAgentTest.cs`
- `dotnet/test/AutoGen.OpenAI.Tests/OpenAIMessageTests.cs`
- `dotnet/test/AutoGen.OpenAI.Tests/OpenAISampleTest.cs`
- `dotnet/test/AutoGen.OpenAI.Tests/RolePlayToolCallOrchestratorTests.cs`
- `dotnet/test/AutoGen.OpenAI.V1.Tests/ApprovalTests/OpenAIMessageTests.BasicMessageTest.approved.txt`
- `dotnet/test/AutoGen.OpenAI.V1.Tests/AutoGen.OpenAI.V1.Tests.csproj`
- `dotnet/test/AutoGen.OpenAI.V1.Tests/GPTAgentTest.cs`
- `dotnet/test/AutoGen.OpenAI.V1.Tests/GlobalUsing.cs`
- `dotnet/test/AutoGen.OpenAI.V1.Tests/MathClassTest.cs`
- `dotnet/test/AutoGen.OpenAI.V1.Tests/OpenAIChatAgentTest.cs`
- `dotnet/test/AutoGen.OpenAI.V1.Tests/OpenAIMessageTests.cs`
- `dotnet/test/AutoGen.SemanticKernel.Tests/ApprovalTests/KernelFunctionExtensionTests.ItCreateFunctionContractsFromMethod.approved.txt`
- `dotnet/test/AutoGen.SemanticKernel.Tests/ApprovalTests/KernelFunctionExtensionTests.ItCreateFunctionContractsFromPrompt.approved.txt`
- `dotnet/test/AutoGen.SemanticKernel.Tests/ApprovalTests/KernelFunctionExtensionTests.ItCreateFunctionContractsFromTestPlugin.approved.txt`
- `dotnet/test/AutoGen.SemanticKernel.Tests/AutoGen.SemanticKernel.Tests.csproj`
- `dotnet/test/AutoGen.SemanticKernel.Tests/KernelFunctionExtensionTests.cs`
- `dotnet/test/AutoGen.SemanticKernel.Tests/KernelFunctionMiddlewareTests.cs`
- `dotnet/test/AutoGen.SemanticKernel.Tests/SemanticKernelAgentTest.cs`
- `dotnet/test/AutoGen.SourceGenerator.Tests/ApprovalTests/FunctionCallTemplateTests.TestFunctionCallTemplate.approved.txt`
- `dotnet/test/AutoGen.SourceGenerator.Tests/ApprovalTests/FunctionExample.Add_Test.approved.txt`
- `dotnet/test/AutoGen.SourceGenerator.Tests/ApprovalTests/FunctionExample.DictionaryToString_Test.approved.txt`
- `dotnet/test/AutoGen.SourceGenerator.Tests/ApprovalTests/FunctionExample.Query_Test.approved.txt`
- `dotnet/test/AutoGen.SourceGenerator.Tests/ApprovalTests/FunctionExample.Sum_Test.approved.txt`
- `dotnet/test/AutoGen.SourceGenerator.Tests/AutoGen.SourceGenerator.Tests.csproj`
- `dotnet/test/AutoGen.SourceGenerator.Tests/FilescopeNamespaceFunctionExample.cs`
- `dotnet/test/AutoGen.SourceGenerator.Tests/FunctionCallTemplateEncodingTests.cs`
- `dotnet/test/AutoGen.SourceGenerator.Tests/FunctionCallTemplateTests.cs`
- `dotnet/test/AutoGen.SourceGenerator.Tests/FunctionExample.test.cs`
- `dotnet/test/AutoGen.SourceGenerator.Tests/FunctionExamples.cs`
- `dotnet/test/AutoGen.SourceGenerator.Tests/TopLevelStatementFunctionExample.cs`
- `dotnet/test/AutoGen.Test.Share/Attribute/EnvironmentSpecificFactAttribute.cs`
- `dotnet/test/AutoGen.Test.Share/Attribute/OpenAIFact.cs`
- `dotnet/test/AutoGen.Test.Share/AutoGen.Tests.Share.csproj`
- `dotnet/test/AutoGen.Test.Share/EchoAgent.cs`
- `dotnet/test/AutoGen.Tests/ApprovalTests/square.png`
- `dotnet/test/AutoGen.Tests/AutoGen.Tests.csproj`
- `dotnet/test/AutoGen.Tests/BasicSampleTest.cs`
- `dotnet/test/AutoGen.Tests/Function/ApprovalTests/FunctionTests.CreateGetWeatherFunctionFromAIFunctionFactoryAsync.approved.txt`
- `dotnet/test/AutoGen.Tests/Function/FunctionTests.cs`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.devcontainer/docker-compose.yml`
- `.github/workflows/checks.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/dotnet-build.yml`
- `.github/workflows/dotnet-release.yml`
- `.github/workflows/integration.yml`
- `.github/workflows/issue-user-responded.yml`
- `.github/workflows/lfs-check.yml`
- `.github/workflows/pytest-mem0.yml`
- `.github/workflows/pytest-redis-memory.yml`
- `.github/workflows/python-package-0.2.yml`
- `.github/workflows/single-python-package.yml`
- `dotnet/samples/dev-team/seed-memory/Dockerfile`
- `dotnet/src/Microsoft.AutoGen/AgentHost/Dockerfile`
- `python/packages/agbench/src/agbench/res/Dockerfile`
- `python/packages/autogen-studio/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 546 |
| .cs | 497 |
| .md | 162 |
| .tsx | 96 |
| .csproj | 64 |
| .ipynb | 49 |
| .json | 42 |
| .png | 42 |
| .yaml | 41 |
| .txt | 33 |
| .ts | 29 |
| .svg | 27 |
| .yml | 27 |
| .gitignore | 23 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `python/ 내부 책임 분리`
- `dotnet/ 내부 책임 분리`
- `python/packages/ 내부 책임 분리`
- `dotnet/src/ 내부 책임 분리`
- `.azure/pipelines/templates/build.yaml 스펙/명령 의미`
- `.azure/pipelines/templates/vars.yaml 스펙/명령 의미`
- `python/templates/new-package/cookiecutter.json 스펙/명령 의미`
- `python/templates/new-package/hooks/post_gen_project.py 스펙/명령 의미`
- `python/templates/new-package/hooks/pre_gen_project.py 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `.devcontainer/docker-compose.yml 실행 스크립트와 패키지 경계`
- `dotnet/samples/dev-team/seed-memory/Dockerfile 실행 스크립트와 패키지 경계`
- `dotnet/src/Microsoft.AutoGen/AgentHost/Dockerfile 실행 스크립트와 패키지 경계`
- `python/packages/agbench/benchmarks/GAIA/Templates/MagenticOne/requirements.txt 실행 스크립트와 패키지 경계`

