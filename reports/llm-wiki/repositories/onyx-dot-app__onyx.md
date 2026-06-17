# onyx-dot-app/onyx 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/onyx-dot-app__onyx |
| remote | https://github.com/onyx-dot-app/onyx |
| HEAD | 988857e (2026-06-17) docs(agents): add comment-writing guideline (#12167) |
| branch | main |
| groups | llm-wiki-100 |
| files | 5453 |
| dirs | 1239 |
| stack | Node/TypeScript/JavaScript, Python, Rust, Go |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Onyx - The Open Source AI Platform`, `⭐ Features`, `🚀 Deployment Modes`, `🏢 Onyx for Enterprise`, `📚 Licensing`, `👪 Community`, `💡 Contributing`

> <a name="readme top" </a <h2 align="center" <a href="https //www.onyx.app/?utm source=onyx repo&utm medium=github&utm campaign=readme" <img width="50%" src="https //github.com/onyx dot app/onyx/blob/logo/OnyxLogoCropped.jpg?raw=true" / </a </h2 <p align="center" <a href="https //discord.gg/TDJ59cGV2X" target=" blank" <img src="https //img.shields.io/badge/discord join blue.svg?logo=discord&logoColor=white" alt="Discord" / </a <a href="https //docs.onyx.app/?utm source=onyx repo&utm medium=github&utm campaign=readme" target=" blank" <img src="https //img.shields.io/badge/docs view blue" alt="Documentation" / </a <a href="https //www.onyx.app/?utm source=onyx repo&utm medium=github&utm campaign=readme" target=" blank" <img src="https //img.shields.io/website?url=https //www.onyx.app&up message=visit&up color=blue" alt="Documentation" / </a <a href="https //github.com/onyx dot app/onyx/blob

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .cursor | dir |
| .devcontainer | dir |
| .git-blame-ignore-revs | file |
| .github | dir |
| .gitignore | file |
| .greptile | dir |
| .kanban.toml | file |
| .mcp.json | file |
| .oxfmtrc.json | file |
| .pre-commit-config.yaml | file |
| .python-version | file |
| .secretsignore | file |
| .vscode | dir |
| AGENTS.md | file |
| backend | dir |
| bun.lock | file |
| CLAUDE.md | other |
| cli | dir |
| CONTRIBUTING.md | file |
| contributor_ip_assignment | dir |
| ct.yaml | file |
| cubic.yaml | file |
| deployment | dir |
| desktop | dir |
| docker-bake.hcl | file |
| docs | dir |
| examples | dir |
| extensions | dir |
| LICENSE | file |
| loadtest | dir |
| Makefile | file |
| mobile | dir |
| package.json | file |
| profiling | dir |
| pyproject.toml | file |
| README.md | file |
| README.zh-CN.md | file |
| SECURITY.md | file |
| tools | dir |
| uv.lock | file |
| web | dir |
| widget | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| backend/ | 2752 |
| web/ | 2022 |
| deployment/ | 173 |
| docs/ | 72 |
| tools/ | 68 |
| cli/ | 62 |
| desktop/ | 59 |
| .github/ | 53 |
| mobile/ | 49 |
| loadtest/ | 30 |
| extensions/ | 27 |
| (root) | 22 |
| widget/ | 20 |
| examples/ | 13 |
| .devcontainer/ | 9 |
| profiling/ | 8 |
| .vscode/ | 5 |
| .greptile/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cli/ | 62 | preferred |
| backend/ | 2752 | preferred |
| web/ | 2022 | preferred |
| docs/ | 72 | preferred |
| examples/ | 13 | preferred |
| tools/ | 68 | preferred |
| extensions/ | 27 | preferred |
| web/src/ | 1248 | large |
| backend/onyx/ | 1063 | large |
| backend/tests/ | 982 | large |
| web/lib/ | 554 | large |
| web/lib/opal/ | 530 | large |
| web/src/app/ | 528 | large |
| backend/tests/unit/ | 451 | large |
| backend/alembic/ | 384 | large |
| backend/alembic/versions/ | 380 | large |
| backend/tests/integration/ | 271 | large |
| backend/ee/ | 197 | large |
| backend/ee/onyx/ | 195 | large |
| backend/tests/external_dependency_unit/ | 174 | large |
| deployment/ | 173 | large |
| backend/onyx/connectors/ | 167 | large |
| web/src/refresh-components/ | 158 | large |
| backend/onyx/server/ | 152 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `backend/Dockerfile`
- `backend/tests/integration/mock_services/mock_connector_server/Dockerfile`
- `backend/uv.lock`
- `bun.lock`
- `cli/Dockerfile`
- `cli/go.mod`
- `cli/pyproject.toml`
- `deployment/docker_compose/docker-compose.yml`
- `desktop/package.json`
- `desktop/src-tauri/Cargo.toml`
- `examples/widget/package.json`
- `examples/widget/tsconfig.json`
- `loadtest/Dockerfile`
- `loadtest/mock_llm/Dockerfile`
- `loadtest/pyproject.toml`
- `loadtest/uv.lock`
- `mobile/bun.lock`
- `mobile/package.json`
- `mobile/tsconfig.json`
- `package.json`
- `profiling/docker-compose.yml`
- `pyproject.toml`
- `tools/ods/go.mod`
- `tools/ods/pyproject.toml`
- `uv.lock`
- `web/Dockerfile`
- `web/bun.lock`
- `web/lib/opal/package.json`
- `web/lib/opal/tsconfig.json`
- `web/lib/shared/package.json`
- `web/lib/shared/tsconfig.json`
- `web/next.config.js`
- `web/package.json`
- `web/tsconfig.json`
- `widget/package.json`
- `widget/tsconfig.json`
- `widget/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| desktop/package.json | onyx-desktop | dev, debug, build, build:dmg, build:windows, build:linux, tauri | @tauri-apps/api |
| examples/widget/package.json | widget | dev, build, start | next, react, react-dom, react-markdown |
| mobile/package.json | mobile | start, ios, android, web, run:ios, run:android, prebuild, typecheck, lint, format, format:check | @expo-google-fonts/dm-mono, @expo-google-fonts/hanken-grotesk, @onyx-ai/shared, @react-native-community/netinfo, @rn-primitives/portal, @rn-primitives/separator, @rn-primitives/slot, @shopify/flash-list, @tanstack/query-sync-storage-persister, @tanstack/react-query, @tanstack/react-query-persist-client, class-variance-authority, clsx, expo |
| package.json | onyx |  |  |
| web/lib/opal/package.json | @onyx-ai/opal | build, prepare | clsx, copy-to-clipboard, tailwind-merge |
| web/lib/shared/package.json | @onyx-ai/shared | build:tokens, build:ts, build, verify:tokens, dev, typecheck, clean, prepare |  |
| web/package.json | web | dev, dev:profile, build, start, lint, lint:fix, types:check, format, format:check, playwright, test, test:watch, test:coverage, test:verbose, test:ci, test:changed | @dnd-kit/core, @dnd-kit/modifiers, @dnd-kit/sortable, @dnd-kit/utilities, @emotion/stylis, @headlessui/react, @headlessui/tailwindcss, @onyx-ai/opal, @onyx-ai/shared, @phosphor-icons/react, @radix-ui/react-accordion, @radix-ui/react-avatar, @radix-ui/react-collapsible, @radix-ui/react-dialog |
| widget/package.json | onyx-chat-widget | dev, build, build:cloud, build:self-hosted, preview, type-check | dompurify, lit, marked, terser |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| cli/pyproject.toml | onyx-cli | false | true | false | false |
| loadtest/pyproject.toml | onyx-loadtest | false | false | true | false |
| pyproject.toml | onyx | false | true | true | false |
| tools/ods/pyproject.toml | onyx-devtools | false | true | false | false |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| desktop/src-tauri/Cargo.toml | onyx | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| cli/go.mod | github.com/onyx-dot-app/onyx/cli | 1.26.4 |
| tools/ods/go.mod | github.com/onyx-dot-app/onyx/tools/ods | 1.26.4 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.devcontainer/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `backend/alembic/README.md`
- `backend/alembic_tenants/README.md`
- `backend/generated/README.md`
- `backend/model_server/legacy/README.md`
- `backend/onyx/background/README.md`
- `backend/onyx/chat/README.md`
- `backend/onyx/connectors/README.md`
- `backend/onyx/db/README.md`
- `backend/onyx/document_index/opensearch/README.md`
- `backend/onyx/evals/README.md`
- `backend/onyx/file_store/README.md`
- `backend/onyx/llm/prompt_cache/README.md`
- `backend/onyx/mcp_server/README.md`
- `backend/requirements/README.md`
- `backend/scripts/debugging/litellm/README`
- `backend/scripts/tenant_cleanup/README.md`
- `backend/slackbot_images/README.md`
- `backend/tests/README.md`
- `backend/tests/daily/connectors/coda/README.md`
- `backend/tests/integration/README.md`
- `backend/tests/integration/tests/pruning/website/readme.txt`
- `backend/tests/regression/answer_quality/README.md`
- `backend/tests/regression/search_quality/README.md`
- `cli/README.md`
- `deployment/README.md`
- `deployment/aws_ecs_fargate/cloudformation/README.md`
- `deployment/docker_compose/README.md`
- `deployment/helm/README.md`
- `deployment/terraform/modules/aws/README.md`
- `desktop/README.md`
- `docs/METRICS.md`
- `docs/craft/background-interactive-turns-plan.md`
- `docs/craft/craft-main-plan.md`
- `docs/craft/docker/docker-compose-overview.md`
- `docs/craft/features/approvals/approvals-plan.md`
- `docs/craft/features/approvals/phase-1-proxy.md`
- `docs/craft/features/approvals/phase-2-service-and-gating.md`
- `docs/craft/features/approvals/phase-3-chat-ui.md`
- `docs/craft/features/approvals/phase-5-docker.md`
- `docs/craft/features/docker-sandbox-backend.md`
- `docs/craft/features/external-apps/action-policies.md`
- `docs/craft/features/external-apps/cloud-managed-app-credentials.md`
- `docs/craft/features/external-apps/egress-proxy-action-policy-enforcement.md`
- `docs/craft/features/external-apps/external-app-skill-action-availability.md`
- `docs/craft/features/external-apps/oauth-token-refresh.md`
- `docs/craft/features/pat-scopes/pat-scopes.md`
- `docs/craft/features/scheduled-tasks/overview.md`
- ... 30 more

### 에이전트 지침 후보

- `.claude/claude-security-guidance.md`
- `.claude/settings.json`
- `.cursor/mcp.json`
- `.cursor/skills/playwright/SKILL.md`
- `.devcontainer/claude-code/CLAUDE.md`
- `.mcp.json`
- `AGENTS.md`
- `backend/alembic/versions/2a391f840e85_add_last_refreshed_at_mcp_server.py`
- `backend/alembic/versions/3a9b8d7c6e5f_add_mcp_known_provider_fields.py`
- `backend/alembic/versions/7ed603b64d5a_add_mcp_server_and_connection_config_.py`
- `backend/alembic/versions/7f5b159041be_skill_built_in_id_discriminator.py`
- `backend/alembic/versions/96a5702df6aa_mcp_tool_enabled.py`
- `backend/alembic/versions/b30353be4eec_add_mcp_auth_performer.py`
- `backend/alembic/versions/b6d184cfdaf3_skills.py`
- `backend/alembic/versions/e8f0d2a38171_add_status_to_mcp_server_and_make_auth_.py`
- `backend/onyx/db/mcp.py`
- `backend/onyx/db/skill.py`
- `backend/onyx/mcp_server/README.md`
- `backend/onyx/mcp_server/api.py`
- `backend/onyx/mcp_server/auth.py`
- `backend/onyx/mcp_server/mcp.json.template`
- `backend/onyx/mcp_server/resources/__init__.py`
- `backend/onyx/mcp_server/resources/document_sets.py`
- `backend/onyx/mcp_server/resources/indexed_sources.py`
- `backend/onyx/mcp_server/tools/__init__.py`
- `backend/onyx/mcp_server/tools/search.py`
- `backend/onyx/mcp_server/utils.py`
- `backend/onyx/mcp_server_main.py`
- `backend/onyx/server/features/mcp/api.py`
- `backend/onyx/server/features/mcp/models.py`
- `backend/onyx/server/features/skill/api.py`
- `backend/onyx/server/features/skill/models.py`
- `backend/onyx/skills/built_in.py`
- `backend/onyx/skills/builtin/company-search/SKILL.md.template`
- `backend/onyx/skills/builtin/github/SKILL.md.template`
- `backend/onyx/skills/builtin/gmail/SKILL.md.template`
- `backend/onyx/skills/builtin/gmail/gmail_api.py`
- `backend/onyx/skills/builtin/google-calendar/SKILL.md.template`
- `backend/onyx/skills/builtin/google-calendar/gcal_api.py`
- `backend/onyx/skills/builtin/google-drive/SKILL.md.template`
- `backend/onyx/skills/builtin/google-drive/gdrive_api.py`
- `backend/onyx/skills/builtin/image-generation/SKILL.md`
- `backend/onyx/skills/builtin/image-generation/scripts/generate.py`
- `backend/onyx/skills/builtin/linear/SKILL.md.template`
- `backend/onyx/skills/builtin/linear/linear_api.py`
- `backend/onyx/skills/builtin/pptx/SKILL.md`
- `backend/onyx/skills/builtin/pptx/editing.md`
- `backend/onyx/skills/builtin/pptx/pptxgenjs.md`
- `backend/onyx/skills/builtin/pptx/scripts/__init__.py`
- `backend/onyx/skills/builtin/pptx/scripts/add_slide.py`
- `backend/onyx/skills/builtin/pptx/scripts/clean.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/helpers/__init__.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/helpers/merge_runs.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/helpers/simplify_redlines.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/pack.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-chart.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-chartDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-diagram.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-lockedCanvas.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-main.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-picture.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-spreadsheetDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-wordprocessingDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/pml.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-additionalCharacteristics.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-bibliography.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-commonSimpleTypes.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-customXmlDataProperties.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-customXmlSchemaProperties.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesCustom.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesExtended.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesVariantTypes.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-math.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-relationshipReference.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/sml.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-main.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-officeDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-presentationDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-spreadsheetDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-wordprocessingDrawing.xsd`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.cursor/skills/playwright/SKILL.md`
- `backend/onyx/skills/built_in.py`
- `backend/onyx/skills/builtin/company-search/SKILL.md.template`
- `backend/onyx/skills/builtin/github/SKILL.md.template`
- `backend/onyx/skills/builtin/gmail/SKILL.md.template`
- `backend/onyx/skills/builtin/gmail/gmail_api.py`
- `backend/onyx/skills/builtin/google-calendar/SKILL.md.template`
- `backend/onyx/skills/builtin/google-calendar/gcal_api.py`
- `backend/onyx/skills/builtin/google-drive/SKILL.md.template`
- `backend/onyx/skills/builtin/google-drive/gdrive_api.py`
- `backend/onyx/skills/builtin/image-generation/SKILL.md`
- `backend/onyx/skills/builtin/image-generation/scripts/generate.py`
- `backend/onyx/skills/builtin/linear/SKILL.md.template`
- `backend/onyx/skills/builtin/linear/linear_api.py`
- `backend/onyx/skills/builtin/pptx/SKILL.md`
- `backend/onyx/skills/builtin/pptx/editing.md`
- `backend/onyx/skills/builtin/pptx/pptxgenjs.md`
- `backend/onyx/skills/builtin/pptx/scripts/__init__.py`
- `backend/onyx/skills/builtin/pptx/scripts/add_slide.py`
- `backend/onyx/skills/builtin/pptx/scripts/clean.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/helpers/__init__.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/helpers/merge_runs.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/helpers/simplify_redlines.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/pack.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-chart.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-chartDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-diagram.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-lockedCanvas.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-main.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-picture.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-spreadsheetDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/dml-wordprocessingDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/pml.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-additionalCharacteristics.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-bibliography.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-commonSimpleTypes.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-customXmlDataProperties.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-customXmlSchemaProperties.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesCustom.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesExtended.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesVariantTypes.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-math.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/shared-relationshipReference.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/sml.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-main.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-officeDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-presentationDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-spreadsheetDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/vml-wordprocessingDrawing.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/wml.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ISO-IEC29500-4_2016/xml.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ecma/fouth-edition/opc-contentTypes.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ecma/fouth-edition/opc-coreProperties.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ecma/fouth-edition/opc-digSig.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/ecma/fouth-edition/opc-relationships.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/mce/mc.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/microsoft/wml-2010.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/microsoft/wml-2012.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/microsoft/wml-2018.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/microsoft/wml-cex-2018.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/microsoft/wml-cid-2016.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/microsoft/wml-sdtdatahash-2020.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/schemas/microsoft/wml-symex-2015.xsd`
- `backend/onyx/skills/builtin/pptx/scripts/office/soffice.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/unpack.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/validate.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/validators/__init__.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/validators/base.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/validators/docx.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/validators/pptx.py`
- `backend/onyx/skills/builtin/pptx/scripts/office/validators/redlining.py`
- `backend/onyx/skills/builtin/pptx/scripts/preview.py`
- `backend/onyx/skills/builtin/pptx/scripts/thumbnail.py`
- `backend/onyx/skills/builtin/slack/SKILL.md.template`
- `backend/onyx/skills/builtin/slack/slack_api.py`
- `backend/onyx/skills/bundle.py`
- `backend/onyx/skills/ingest.py`
- `backend/onyx/skills/push.py`
- `backend/onyx/skills/rendering.py`
- `backend/tests/integration/tests/skills/conftest.py`
- `backend/tests/integration/tests/skills/test_skills_admin.py`
- `backend/tests/integration/tests/skills/test_skills_personal.py`
- `backend/tests/integration/tests/skills/test_skills_user.py`
- `backend/tests/unit/onyx/skills/__init__.py`
- `backend/tests/unit/onyx/skills/test_built_in_definition.py`
- `backend/tests/unit/onyx/skills/test_bundle_safety.py`
- `backend/tests/unit/onyx/skills/test_bundle_validation.py`
- `backend/tests/unit/onyx/skills/test_skill_patch_unset_sentinel.py`
- `backend/tests/unit/onyx/skills/test_skills_section_formatter.py`
- `deployment/helm/charts/onyx/templates/_helpers.tpl`
- `deployment/helm/charts/onyx/templates/api-deployment.yaml`
- `deployment/helm/charts/onyx/templates/api-hpa.yaml`
- `deployment/helm/charts/onyx/templates/api-scaledobject.yaml`
- `deployment/helm/charts/onyx/templates/api-service.yaml`
- `deployment/helm/charts/onyx/templates/api-servicemonitor.yaml`
- `deployment/helm/charts/onyx/templates/auth-secrets.yaml`
- `deployment/helm/charts/onyx/templates/celery-beat.yaml`
- `deployment/helm/charts/onyx/templates/celery-worker-docfetching-hpa.yaml`
- `deployment/helm/charts/onyx/templates/celery-worker-docfetching-metrics-service.yaml`
- `deployment/helm/charts/onyx/templates/celery-worker-docfetching-scaledobject.yaml`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `backend/tests/README.md`
- `backend/tests/__init__.py`
- `backend/tests/api/test_api.py`
- `backend/tests/common/__init__.py`
- `backend/tests/common/craft/__init__.py`
- `backend/tests/common/craft/stubs.py`
- `backend/tests/conftest.py`
- `backend/tests/daily/conftest.py`
- `backend/tests/daily/connectors/airtable/test_airtable_basic.py`
- `backend/tests/daily/connectors/bitbucket/conftest.py`
- `backend/tests/daily/connectors/bitbucket/test_bitbucket_checkpointed.py`
- `backend/tests/daily/connectors/bitbucket/test_bitbucket_slim_connector.py`
- `backend/tests/daily/connectors/blob/test_blob_connector.py`
- `backend/tests/daily/connectors/coda/README.md`
- `backend/tests/daily/connectors/coda/test_coda_connector.py`
- `backend/tests/daily/connectors/confluence/models.py`
- `backend/tests/daily/connectors/confluence/test_confluence_basic.py`
- `backend/tests/daily/connectors/confluence/test_confluence_permissions_basic.py`
- `backend/tests/daily/connectors/confluence/test_confluence_resolver.py`
- `backend/tests/daily/connectors/confluence/test_confluence_user_email_overrides.py`
- `backend/tests/daily/connectors/conftest.py`
- `backend/tests/daily/connectors/discord/test_discord_connector.py`
- `backend/tests/daily/connectors/file/test_file_connector.py`
- `backend/tests/daily/connectors/fireflies/test_fireflies_connector.py`
- `backend/tests/daily/connectors/fireflies/test_fireflies_data.json`
- `backend/tests/daily/connectors/gitbook/test_gitbook_connector.py`
- `backend/tests/daily/connectors/github/test_github_basic.py`
- `backend/tests/daily/connectors/gitlab/test_gitlab_basic.py`
- `backend/tests/daily/connectors/gmail/conftest.py`
- `backend/tests/daily/connectors/gmail/test_gmail_connector.py`
- `backend/tests/daily/connectors/gong/test_gong.py`
- `backend/tests/daily/connectors/google_drive/conftest.py`
- `backend/tests/daily/connectors/google_drive/consts_and_utils.py`
- `backend/tests/daily/connectors/google_drive/drive_id_mapping.json`
- `backend/tests/daily/connectors/google_drive/test_admin_oauth.py`
- `backend/tests/daily/connectors/google_drive/test_drive_perm_sync.py`
- `backend/tests/daily/connectors/google_drive/test_link_visibility_filter.py`
- `backend/tests/daily/connectors/google_drive/test_map_test_ids.py`
- `backend/tests/daily/connectors/google_drive/test_resolver.py`
- `backend/tests/daily/connectors/google_drive/test_sections.py`
- `backend/tests/daily/connectors/google_drive/test_service_acct.py`
- `backend/tests/daily/connectors/google_drive/test_user_1_oauth.py`
- `backend/tests/daily/connectors/highspot/test_highspot_connector.py`
- `backend/tests/daily/connectors/highspot/test_highspot_data.json`
- `backend/tests/daily/connectors/hubspot/test_hubspot_connector.py`
- `backend/tests/daily/connectors/imap/models.py`
- `backend/tests/daily/connectors/imap/test_imap_connector.py`
- `backend/tests/daily/connectors/jira/test_jira_basic.py`
- `backend/tests/daily/connectors/notion/test_notion_connector.py`
- `backend/tests/daily/connectors/outline/test_outline_connector.py`
- `backend/tests/daily/connectors/salesforce/test_salesforce_connector.py`
- `backend/tests/daily/connectors/salesforce/test_salesforce_data.json`
- `backend/tests/daily/connectors/sharepoint/test_sharepoint_connector.py`
- `backend/tests/daily/connectors/slab/test_slab_connector.py`
- `backend/tests/daily/connectors/slab/test_slab_data.json`
- `backend/tests/daily/connectors/slack/conftest.py`
- `backend/tests/daily/connectors/slack/test_slack_connector.py`
- `backend/tests/daily/connectors/slack/test_slack_perm_sync.py`
- `backend/tests/daily/connectors/teams/models.py`
- `backend/tests/daily/connectors/teams/test_teams_connector.py`
- `backend/tests/daily/connectors/utils.py`
- `backend/tests/daily/connectors/web/test_web_connector.py`
- `backend/tests/daily/connectors/zendesk/test_zendesk_connector.py`
- `backend/tests/daily/connectors/zendesk/test_zendesk_data.json`
- `backend/tests/daily/embedding/test_embeddings.py`
- `backend/tests/daily/targeted_reindex/__init__.py`
- `backend/tests/daily/targeted_reindex/conftest.py`
- `backend/tests/daily/targeted_reindex/helpers.py`
- `backend/tests/daily/targeted_reindex/test_drive_targeted_reindex_integration.py`
- `backend/tests/external_dependency_unit/answer/conftest.py`
- `backend/tests/external_dependency_unit/answer/stream_test_assertions.py`
- `backend/tests/external_dependency_unit/answer/stream_test_builder.py`
- `backend/tests/external_dependency_unit/answer/stream_test_utils.py`
- `backend/tests/external_dependency_unit/answer/test_answer_without_openai.py`
- `backend/tests/external_dependency_unit/answer/test_current_datetime_replacement.py`
- `backend/tests/external_dependency_unit/answer/test_stream_chat_message.py`
- `backend/tests/external_dependency_unit/answer/test_stream_chat_message_objects.py`
- `backend/tests/external_dependency_unit/background/test_periodic_task_claim.py`
- `backend/tests/external_dependency_unit/background/test_startup_recovery.py`
- `backend/tests/external_dependency_unit/cache/conftest.py`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.github/workflows/deployment.yml`
- `.github/workflows/docker-tag-beta.yml`
- `.github/workflows/docker-tag-latest.yml`
- `.github/workflows/helm-chart-releases.yml`
- `.github/workflows/merge-group.yml`
- `.github/workflows/nightly-close-stale-issues.yml`
- `.github/workflows/nightly-external-dependency-unit-tests.yml`
- `.github/workflows/nightly-llm-provider-chat.yml`
- `.github/workflows/post-merge-beta-cherry-pick.yml`
- `.github/workflows/pr-craft-compose-integration.yml`
- `.github/workflows/pr-craft-compose-tests.yml`
- `.github/workflows/pr-craft-k8s-tests.yml`
- `.github/workflows/pr-database-tests.yml`
- `.github/workflows/pr-desktop-build.yml`
- `.github/workflows/pr-external-dependency-unit-tests.yml`
- `.github/workflows/pr-golang-tests.yml`
- `.github/workflows/pr-helm-chart-testing.yml`
- `.github/workflows/pr-integration-tests.yml`
- `.github/workflows/pr-jest-tests.yml`
- `.github/workflows/pr-labeler.yml`
- `.github/workflows/pr-linear-check.yml`
- `.github/workflows/pr-playwright-tests.yml`
- `.github/workflows/pr-python-checks.yml`
- `.github/workflows/pr-python-connector-tests.yml`
- `.github/workflows/pr-python-model-tests.yml`
- `.github/workflows/pr-python-tests.yml`
- `.github/workflows/pr-quality-checks.yml`
- `.github/workflows/preview.yml`
- `.github/workflows/release-cli.yml`
- `.github/workflows/release-devcontainer.yml`
- `.github/workflows/release-devtools.yml`
- `.github/workflows/release-opal.yml`
- `.github/workflows/reusable-nightly-llm-provider-chat.yml`
- `.github/workflows/storybook-deploy.yml`
- `.github/workflows/sync_foss.yml`
- `.github/workflows/tag-nightly.yml`
- `.github/workflows/zizmor.yml`
- `backend/Dockerfile`
- `backend/tests/integration/mock_services/docker-compose.mock-it-services.yml`
- `backend/tests/integration/mock_services/mock_connector_server/Dockerfile`
- `cli/Dockerfile`
- `deployment/docker_compose/docker-compose.craft.yml`
- `deployment/docker_compose/docker-compose.dev.yml`
- `deployment/docker_compose/docker-compose.mcp-api-key-test.yml`
- `deployment/docker_compose/docker-compose.mcp-oauth-test.yml`
- `deployment/docker_compose/docker-compose.mcp-per-user-key-test.yml`
- `deployment/docker_compose/docker-compose.multitenant-dev.yml`
- `deployment/docker_compose/docker-compose.onyx-lite.yml`
- `deployment/docker_compose/docker-compose.prod-cloud.yml`
- `deployment/docker_compose/docker-compose.prod-no-letsencrypt.yml`
- `deployment/docker_compose/docker-compose.prod.yml`
- `deployment/docker_compose/docker-compose.resources.yml`
- `deployment/docker_compose/docker-compose.search-testing.yml`
- `deployment/docker_compose/docker-compose.yml`
- `docs/craft/docker/docker-compose-overview.md`
- `loadtest/Dockerfile`
- `loadtest/mock_llm/Dockerfile`
- `profiling/docker-compose.yml`
- `web/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 2562 |
| .tsx | 1282 |
| .ts | 560 |
| .md | 188 |
| .go | 112 |
| .yaml | 107 |
| .png | 81 |
| .json | 67 |
| .yml | 67 |
| .css | 63 |
| .svg | 44 |
| .js | 40 |
| .xsd | 39 |
| .jpg | 28 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cli/ 내부 책임 분리`
- `backend/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `.cursor/skills/playwright/SKILL.md 스펙/명령 의미`
- `backend/onyx/skills/built_in.py 스펙/명령 의미`
- `backend/onyx/skills/builtin/company-search/SKILL.md.template 스펙/명령 의미`
- `backend/onyx/skills/builtin/github/SKILL.md.template 스펙/명령 의미`
- `backend/onyx/skills/builtin/gmail/SKILL.md.template 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `backend/Dockerfile 실행 스크립트와 패키지 경계`
- `backend/tests/integration/mock_services/mock_connector_server/Dockerfile 실행 스크립트와 패키지 경계`
- `backend/uv.lock 실행 스크립트와 패키지 경계`
- `bun.lock 실행 스크립트와 패키지 경계`

