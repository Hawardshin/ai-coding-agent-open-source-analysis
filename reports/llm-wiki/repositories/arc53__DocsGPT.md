# arc53/DocsGPT 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/arc53__DocsGPT |
| remote | https://github.com/arc53/DocsGPT |
| HEAD | 7b0f5d7 (2026-06-17) chore: update readme |
| branch | main |
| groups | llm-wiki-100 |
| files | 1381 |
| dirs | 201 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Roadmap`, `Production Support / Help for Companies:`, `Join the Lighthouse Program 🌟`, `QuickStart`, `Contributing`, `Architecture`, `Project Structure`, `Code Of Conduct`, `Many Thanks To Our Contributors⚡`, `License`, `This project is supported by:`

> <h1 align="center" DocsGPT 🦖 </h1 <p align="center" <strong Private AI for agents, assistants and enterprise search</strong </p <p align="left" <strong <a href="https //www.docsgpt.cloud/" DocsGPT</a </strong is an open source AI platform for building intelligent agents and assistants. Features Agent Builder, deep research tools, document analysis (PDF, Office, web content, and audio), Multi model support (choose your provider or run locally), and rich API connectivity for agents with actionable tools and integrations. Deploy anywhere with complete privacy control. </p <div align="center" <a href="https //github.com/arc53/DocsGPT" </a <a href="https //github.com/arc53/DocsGPT" </a <a href="https //github.com/arc53/DocsGPT/blob/main/LICENSE" </a <a href="https //www.bestpractices.dev/projects/9907" <img src="https //www.bestpractices.dev/projects/9907/badge" </a <a href="https //discord.

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .devcontainer | dir |
| .env-template | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .ruff.toml | file |
| .vale.ini | file |
| .vscode | dir |
| AGENTS.md | file |
| application | dir |
| CODE_OF_CONDUCT.md | file |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| deployment | dir |
| docs | dir |
| extensions | dir |
| frontend | dir |
| HACKTOBERFEST.md | file |
| LICENSE | file |
| md-gen.py | file |
| package-lock.json | file |
| pytest.ini | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| setup.ps1 | file |
| setup.sh | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 437 |
| application/ | 399 |
| frontend/ | 340 |
| docs/ | 86 |
| .github/ | 25 |
| extensions/ | 24 |
| scripts/ | 24 |
| deployment/ | 21 |
| (root) | 18 |
| .devcontainer/ | 6 |
| .vscode/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 340 | preferred |
| docs/ | 86 | preferred |
| tests/ | 437 | preferred |
| scripts/ | 24 | preferred |
| extensions/ | 24 | preferred |
| application/ | 399 | large |
| frontend/src/ | 314 | large |
| frontend/src/assets/ | 95 | large |
| application/api/ | 89 | large |
| tests/api/ | 85 | large |
| frontend/src/components/ | 56 | large |
| tests/e2e/ | 56 | large |
| application/storage/ | 55 | large |
| application/storage/db/ | 50 | large |
| docs/content/ | 49 | large |
| tests/storage/ | 49 | large |
| tests/agents/ | 48 | large |
| application/parser/ | 46 | large |
| tests/storage/db/ | 46 | large |
| application/api/user/ | 45 | large |
| tests/api/user/ | 43 | large |
| frontend/src/agents/ | 42 | large |
| tests/parser/ | 40 | large |
| application/agents/ | 36 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `application/Dockerfile`
- `application/requirements.txt`
- `docs/next.config.js`
- `docs/package.json`
- `extensions/react-widget/package.json`
- `extensions/react-widget/tsconfig.json`
- `frontend/Dockerfile`
- `frontend/package.json`
- `frontend/tsconfig.json`
- `frontend/vite.config.ts`
- `tests/e2e/package.json`
- `tests/e2e/tsconfig.json`
- `tests/requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs/package.json |  | dev, build, postbuild, start | @vercel/analytics, docsgpt-react, next, nextra, nextra-theme-docs, react, react-dom |
| extensions/react-widget/package.json | docsgpt | build, build:react, serve, dev, test, lint, lint-fix, format, check, ci | @babel/plugin-transform-flow-strip-types, @bpmn-io/snarkdown, @parcel/resolver-glob, @parcel/transformer-svg-react, @parcel/transformer-typescript-tsc, @parcel/validator-typescript, @radix-ui/react-icons, class-variance-authority, clsx, dompurify, flow-bin, markdown-it, react, react-dom |
| frontend/package.json | frontend | dev, build, preview, test, test:watch, lint, lint-fix, format, prepare | @radix-ui/react-accordion, @radix-ui/react-dialog, @radix-ui/react-popover, @radix-ui/react-select, @radix-ui/react-slot, @radix-ui/react-switch, @radix-ui/react-tabs, @reduxjs/toolkit, chart.js, class-variance-authority, clsx, cmdk, copy-to-clipboard, date-fns |
| tests/e2e/package.json | docsgpt-e2e | e2e, e2e:up, e2e:down, e2e:ui, e2e:install, e2e:report |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `application/core/models/README.md`
- `deployment/k8s/optional-mongo/README.md`
- `docs/README.md`
- `docs/app/[[...mdxPath]]/page.jsx`
- `docs/app/layout.jsx`
- `docs/components/DeploymentCards.jsx`
- `docs/components/ToolCards.jsx`
- `docs/content/Agents/_meta.js`
- `docs/content/Agents/api.mdx`
- `docs/content/Agents/basics.mdx`
- `docs/content/Agents/nodes.mdx`
- `docs/content/Agents/openai-compatible.mdx`
- `docs/content/Agents/webhooks.mdx`
- `docs/content/Deploying/Amazon-Lightsail.mdx`
- `docs/content/Deploying/Development-Environment.mdx`
- `docs/content/Deploying/Docker-Deploying.mdx`
- `docs/content/Deploying/DocsGPT-Settings.mdx`
- `docs/content/Deploying/Hosting-the-app.mdx`
- `docs/content/Deploying/Kubernetes-Deploying.mdx`
- `docs/content/Deploying/OIDC-SSO.mdx`
- `docs/content/Deploying/Observability.mdx`
- `docs/content/Deploying/Postgres-Migration.mdx`
- `docs/content/Deploying/Railway.mdx`
- `docs/content/Deploying/_meta.js`
- `docs/content/Extensions/Chatwoot-extension.mdx`
- `docs/content/Extensions/_meta.js`
- `docs/content/Extensions/api-key-guide.mdx`
- `docs/content/Extensions/chat-widget.mdx`
- `docs/content/Extensions/search-widget.mdx`
- `docs/content/Guides/Architecture.mdx`
- `docs/content/Guides/Customising-prompts.mdx`
- `docs/content/Guides/How-to-train-on-other-documentation.mdx`
- `docs/content/Guides/How-to-use-different-LLM.mdx`
- `docs/content/Guides/Integrations/_meta.js`
- `docs/content/Guides/Integrations/confluence-connector.mdx`
- `docs/content/Guides/Integrations/google-drive-connector.mdx`
- `docs/content/Guides/Integrations/mcp-tool-integration.mdx`
- `docs/content/Guides/Integrations/sharepoint-connector.mdx`
- `docs/content/Guides/My-AI-answers-questions-using-external-knowledge.mdx`
- `docs/content/Guides/_meta.js`
- `docs/content/Guides/compression.md`
- `docs/content/Guides/ocr.mdx`
- `docs/content/Models/_meta.js`
- `docs/content/Models/cloud-providers.mdx`
- `docs/content/Models/embeddings.md`
- `docs/content/Models/local-inference.mdx`
- `docs/content/Tools/_meta.js`
- `docs/content/Tools/api-tool.mdx`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `application/agents/tools/mcp_tool.py`
- `application/api/user/tools/mcp.py`
- `application/mcp_server.py`
- `docs/content/Guides/Integrations/mcp-tool-integration.mdx`
- `frontend/src/assets/toolIcons/tool_mcp_tool.svg`
- `tests/agents/test_mcp_tool.py`
- `tests/agents/tools/test_mcp_tool.py`
- `tests/api/user/test_tools_mcp.py`
- `tests/api/user/test_tools_mcp_pg.py`
- `tests/integration/test_mcp.py`
- `tests/services/test_mcp_server.py`

### 스펙/템플릿/명령/스킬 후보

- `application/templates/__init__.py`
- `application/templates/namespaces.py`
- `application/templates/template_engine.py`
- `tests/e2e/specs/.gitkeep`
- `tests/e2e/specs/auth/isolation.spec.ts`
- `tests/e2e/specs/auth/oidc.spec.ts`
- `tests/e2e/specs/auth/session_jwt.spec.ts`
- `tests/e2e/specs/auth/simple_jwt.spec.ts`
- `tests/e2e/specs/tier-a/agent-pin.spec.ts`
- `tests/e2e/specs/tier-a/agent-share-user.spec.ts`
- `tests/e2e/specs/tier-a/agents.spec.ts`
- `tests/e2e/specs/tier-a/analytics.spec.ts`
- `tests/e2e/specs/tier-a/attachments.spec.ts`
- `tests/e2e/specs/tier-a/chat-turn.spec.ts`
- `tests/e2e/specs/tier-a/conversation-crud.spec.ts`
- `tests/e2e/specs/tier-a/feedback.spec.ts`
- `tests/e2e/specs/tier-a/prompts.spec.ts`
- `tests/e2e/specs/tier-a/share-conversation.spec.ts`
- `tests/e2e/specs/tier-a/telemetry-error.spec.ts`
- `tests/e2e/specs/tier-a/tools.spec.ts`
- `tests/e2e/specs/tier-a/user-logs.spec.ts`
- `tests/e2e/specs/tier-b/agent-preview.spec.ts`
- `tests/e2e/specs/tier-b/artifacts.spec.ts`
- `tests/e2e/specs/tier-b/chunks.spec.ts`
- `tests/e2e/specs/tier-b/conversation-visibility.spec.ts`
- `tests/e2e/specs/tier-b/folders.spec.ts`
- `tests/e2e/specs/tier-b/images.spec.ts`
- `tests/e2e/specs/tier-b/search.spec.ts`
- `tests/e2e/specs/tier-b/source-files.spec.ts`
- `tests/e2e/specs/tier-b/source-sync.spec.ts`
- `tests/e2e/specs/tier-b/sources-list.spec.ts`
- `tests/e2e/specs/tier-b/streaming-ux.spec.ts`
- `tests/e2e/specs/tier-b/templates.spec.ts`
- `tests/e2e/specs/tier-b/upload.spec.ts`
- `tests/e2e/specs/tier-b/v1-completions.spec.ts`
- `tests/e2e/specs/tier-b/webhook.spec.ts`
- `tests/e2e/specs/tier-b/workflow-builder.spec.ts`
- `tests/e2e/specs/tier-c/ui-smoke.spec.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `frontend/src/agents/schedules/SchedulerToolCallCard.test.ts`
- `frontend/src/agents/schedules/StatusBadge.test.tsx`
- `frontend/src/agents/schedules/TimezoneCombobox.test.ts`
- `frontend/src/agents/schedules/cronBuilder.test.ts`
- `frontend/src/agents/schedules/schedulesSlice.test.ts`
- `frontend/src/components/AdminRoute.test.tsx`
- `frontend/src/conversation/conversationListener.test.ts`
- `frontend/src/conversation/conversationSlice.test.ts`
- `frontend/src/events/dispatchEvent.test.ts`
- `frontend/src/hooks/fetchMeRoles.test.ts`
- `frontend/src/notifications/dismissedPersistence.test.ts`
- `frontend/src/notifications/notificationsSlice.test.ts`
- `frontend/src/preferences/preferenceSlice.test.ts`
- `frontend/src/upload/uploadSlice.test.ts`
- `frontend/src/utils/dateTimeUtils.test.ts`
- `frontend/src/utils/jwtUtils.test.ts`
- `frontend/src/utils/toolUtils.test.ts`
- `tests/QA_TESTS.md`
- `tests/__init__.py`
- `tests/agents/__init__.py`
- `tests/agents/test_agent_creator.py`
- `tests/agents/test_agentic_agent.py`
- `tests/agents/test_api_body_serializer.py`
- `tests/agents/test_api_tool.py`
- `tests/agents/test_base_agent.py`
- `tests/agents/test_brave_tool.py`
- `tests/agents/test_cel_evaluator.py`
- `tests/agents/test_classic_agent.py`
- `tests/agents/test_cryptoprice_tool.py`
- `tests/agents/test_default_tools.py`
- `tests/agents/test_duckduckgo_tool.py`
- `tests/agents/test_get_artifact.py`
- `tests/agents/test_internal_search_tool.py`
- `tests/agents/test_mcp_tool.py`
- `tests/agents/test_node_agent.py`
- `tests/agents/test_ntfy_tool.py`
- `tests/agents/test_postgres_tool.py`
- `tests/agents/test_read_webpage_tool.py`
- `tests/agents/test_research_agent.py`
- `tests/agents/test_scheduler_agent_builtin.py`
- `tests/agents/test_scheduler_utils.py`
- `tests/agents/test_spec_parser.py`
- `tests/agents/test_telegram_tool.py`
- `tests/agents/test_think_tool.py`
- `tests/agents/test_tool_action_parser.py`
- `tests/agents/test_tool_executor.py`
- `tests/agents/test_tool_executor_headless.py`
- `tests/agents/test_tool_executor_three_phase.py`
- `tests/agents/test_tool_manager.py`
- `tests/agents/test_workflow_agent_graph.py`
- `tests/agents/test_workflow_agent_pg_write.py`
- `tests/agents/test_workflow_agent_types.py`
- `tests/agents/test_workflow_engine.py`
- `tests/agents/test_workflow_engine_coverage.py`
- `tests/agents/test_workflow_schemas.py`
- `tests/agents/test_workflow_template.py`
- `tests/agents/tools/__init__.py`
- `tests/agents/tools/test_api_body_serializer.py`
- `tests/agents/tools/test_api_tool.py`
- `tests/agents/tools/test_brave_extra.py`
- `tests/agents/tools/test_internal_search.py`
- `tests/agents/tools/test_internal_search_pg.py`
- `tests/agents/tools/test_mcp_tool.py`
- `tests/agents/tools/test_memory.py`
- `tests/agents/tools/test_notes_pg.py`
- `tests/agents/tools/test_read_webpage_errors.py`
- `tests/agents/tools/test_scheduler.py`
- `tests/api/__init__.py`
- `tests/api/answer/__init__.py`
- `tests/api/answer/routes/__init__.py`
- `tests/api/answer/routes/test_answer.py`
- `tests/api/answer/routes/test_base.py`
- `tests/api/answer/routes/test_search.py`
- `tests/api/answer/routes/test_stream.py`
- `tests/api/answer/services/__init__.py`
- `tests/api/answer/services/compression/__init__.py`
- `tests/api/answer/services/compression/test_message_builder.py`
- `tests/api/answer/services/compression/test_orchestrator.py`
- `tests/api/answer/services/compression/test_service.py`
- `tests/api/answer/services/compression/test_threshold_checker.py`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.devcontainer/docker-compose-dev.yaml`
- `.devcontainer/docker-compose.override.yaml`
- `.github/workflows/backend-release.yml`
- `.github/workflows/bandit.yaml`
- `.github/workflows/ci.yml`
- `.github/workflows/cife.yml`
- `.github/workflows/docker-develop-build.yml`
- `.github/workflows/docker-develop-fe-build.yml`
- `.github/workflows/labeler.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/npm-publish.yml`
- `.github/workflows/pytest.yml`
- `.github/workflows/react-widget-build.yml`
- `.github/workflows/sync_fork.yaml`
- `.github/workflows/vale.yml`
- `.github/workflows/zizmor.yml`
- `application/Dockerfile`
- `deployment/docker-compose-azure.yaml`
- `deployment/docker-compose-dev.yaml`
- `deployment/docker-compose-hub.yaml`
- `deployment/docker-compose-local.yaml`
- `deployment/docker-compose.yaml`
- `deployment/optional/docker-compose.optional.ollama-cpu.yaml`
- `deployment/optional/docker-compose.optional.ollama-gpu.yaml`
- `frontend/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 761 |
| .tsx | 137 |
| .ts | 129 |
| .svg | 108 |
| .mdx | 39 |
| .yaml | 37 |
| .json | 27 |
| .md | 21 |
| .yml | 20 |
| .txt | 17 |
| .png | 13 |
| .js | 10 |
| .sh | 8 |
| .jsx | 6 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `extensions/ 내부 책임 분리`
- `application/templates/__init__.py 스펙/명령 의미`
- `application/templates/namespaces.py 스펙/명령 의미`
- `application/templates/template_engine.py 스펙/명령 의미`
- `tests/e2e/specs/.gitkeep 스펙/명령 의미`
- `tests/e2e/specs/auth/isolation.spec.ts 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `application/Dockerfile 실행 스크립트와 패키지 경계`
- `application/requirements.txt 실행 스크립트와 패키지 경계`
- `docs/next.config.js 실행 스크립트와 패키지 경계`
- `docs/package.json 실행 스크립트와 패키지 경계`

