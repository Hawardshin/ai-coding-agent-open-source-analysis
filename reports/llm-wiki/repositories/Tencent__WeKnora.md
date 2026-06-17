# Tencent/WeKnora 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Tencent__WeKnora |
| remote | https://github.com/Tencent/WeKnora |
| HEAD | e0d3c1d (2026-06-17) feat(frontend): improve manual knowledge editor and chat citation rendering |
| branch | main |
| groups | llm-wiki-100 |
| files | 2045 |
| dirs | 276 |
| stack | Node/TypeScript/JavaScript, Python, Go |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `💡 WeKnora — Turn Documents into Living Knowledge with RAG, Agents and Auto-Wiki`, `📌 Overview`, `✨ Latest Updates`, `📱 Interface Showcase`, `🏗️ Architecture`, `🧩 Feature Overview`, `🧩 Chrome Extension`, `📱 WeChat Mini Program`, `🦞 ClawHub Skill`, `⌨️ Command-Line Interface`, `🚀 Getting Started`, `🛠 Prerequisites`, `📦 Installation & Launch`, `🔧 Optional Services (Docker Compose Profiles)`, `🌐 Service URLs`, `MCP Server`, `🔌 Using WeChat Dialog Open Platform`, `📘 API Reference`

> <p align="center" <picture <img src="./docs/images/logo.png" alt="WeKnora Logo" height="120"/ </picture </p <p align="center" <picture <a href="https //trendshift.io/repositories/15289" target=" blank" <img src="https //trendshift.io/api/badge/repositories/15289" alt="Tencent%2FWeKnora Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </picture </p <p align="center" <a href="https //weknora.weixin.qq.com" target=" blank" <img alt="Official Website" src="https //img.shields.io/badge/Official Website WeKnora 4e6b99" </a <a href="https //chatbot.weixin.qq.com" target=" blank" <img alt="WeChat Dialog Open Platform" src="https //img.shields.io/badge/WeChat Dialog Open Platform 5ac725" </a <a href="https //chromewebstore.google.com/detail/jpemjbopikggjlmikmclgbmkhhopjdgd" target=" blank" <img alt="Chrome Extension" src="https //img.shields.io/badge/Chrome Extension WeK

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .air.toml | file |
| .dockerignore | file |
| .env.example | file |
| .env.lite.example | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .golangci.yml | file |
| CHANGELOG.md | file |
| cli | dir |
| client | dir |
| cmd | dir |
| config | dir |
| dataset | dir |
| deploy | dir |
| docker | dir |
| docker-compose.dev.yml | file |
| docker-compose.yml | file |
| docreader | dir |
| docs | dir |
| examples | dir |
| Formula | dir |
| frontend | dir |
| go.mod | file |
| go.sum | file |
| helm | dir |
| internal | dir |
| LICENSE | file |
| Makefile | file |
| mcp-server | dir |
| migrations | dir |
| miniprogram | dir |
| misc | dir |
| package-lock.json | file |
| packages | dir |
| README_CN.md | file |
| README_JA.md | file |
| README_KO.md | file |
| README.md | file |
| rerank_server_demo.py | file |
| scripts | dir |
| SECURITY.md | file |
| skills | dir |
| test_agent_config.sh | file |
| testdata | dir |
| tests | dir |
| VERSION | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| internal/ | 906 |
| frontend/ | 386 |
| cli/ | 256 |
| migrations/ | 129 |
| docs/ | 96 |
| docreader/ | 67 |
| client/ | 27 |
| (root) | 23 |
| miniprogram/ | 23 |
| mcp-server/ | 20 |
| scripts/ | 19 |
| helm/ | 16 |
| config/ | 15 |
| cmd/ | 12 |
| skills/ | 12 |
| .github/ | 10 |
| dataset/ | 8 |
| docker/ | 6 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 1 | preferred |
| cmd/ | 12 | preferred |
| cli/ | 256 | preferred |
| client/ | 27 | preferred |
| frontend/ | 386 | preferred |
| docs/ | 96 | preferred |
| examples/ | 5 | preferred |
| tests/ | 1 | preferred |
| skills/ | 12 | preferred |
| scripts/ | 19 | preferred |
| internal/ | 906 | large |
| frontend/src/ | 364 | large |
| internal/application/ | 273 | large |
| internal/application/service/ | 188 | large |
| cli/cmd/ | 132 | large |
| migrations/ | 129 | large |
| migrations/versioned/ | 124 | large |
| internal/types/ | 120 | large |
| internal/models/ | 101 | large |
| frontend/src/views/ | 98 | large |
| cli/internal/ | 93 | large |
| internal/agent/ | 86 | large |
| internal/application/repository/ | 85 | large |
| internal/handler/ | 77 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `cli/go.mod`
- `client/go.mod`
- `docker-compose.yml`
- `docreader/pyproject.toml`
- `docreader/uv.lock`
- `frontend/Dockerfile`
- `frontend/package.json`
- `frontend/pnpm-workspace.yaml`
- `frontend/src/wailsjs/runtime/package.json`
- `frontend/tsconfig.json`
- `frontend/vite.config.ts`
- `go.mod`
- `mcp-server/Dockerfile`
- `mcp-server/pyproject.toml`
- `mcp-server/requirements.txt`
- `miniprogram/package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| frontend/package.json | knowledage-base | dev, build, build-with-types, preview, build-only, type-check, test | @microsoft/fetch-event-source, @types/dompurify, @types/papaparse, @vue-office/pptx, axios, docx-preview, dompurify, highlight.js, katex, marked, marked-katex-extension, mermaid, pagefind, papaparse |
| frontend/src/wailsjs/runtime/package.json | @wailsapp/runtime |  |  |
| miniprogram/package.json | weknora-miniprogram | test |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| docreader/pyproject.toml | docreader | false | false | false | false |
| mcp-server/pyproject.toml | weknora-mcp-server | false | false | false | true |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| cli/go.mod | github.com/Tencent/WeKnora/cli | 1.26.0 |
| client/go.mod | github.com/Tencent/WeKnora/client | 1.24.2 |
| go.mod | github.com/Tencent/WeKnora | 1.26.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `cli/README.md`
- `cli/cmd/doc/create.go`
- `cli/cmd/doc/create_test.go`
- `cli/cmd/doc/delete.go`
- `cli/cmd/doc/delete_test.go`
- `cli/cmd/doc/doc.go`
- `cli/cmd/doc/download.go`
- `cli/cmd/doc/download_test.go`
- `cli/cmd/doc/dryrun_validation_test.go`
- `cli/cmd/doc/fetch.go`
- `cli/cmd/doc/fetch_test.go`
- `cli/cmd/doc/list.go`
- `cli/cmd/doc/list_test.go`
- `cli/cmd/doc/upload.go`
- `cli/cmd/doc/upload_recursive.go`
- `cli/cmd/doc/upload_recursive_test.go`
- `cli/cmd/doc/upload_test.go`
- `cli/cmd/doc/view.go`
- `cli/cmd/doc/view_test.go`
- `cli/cmd/doc/wait.go`
- `cli/cmd/doc/wait_test.go`
- `client/README.md`
- `dataset/README`
- `docreader/README.md`
- `docs/BUILTIN_MCP_SERVICES.md`
- `docs/BUILTIN_MODELS.md`
- `docs/CHUNKING.md`
- `docs/IM集成开发文档.md`
- `docs/KnowledgeGraph.md`
- `docs/LITE.md`
- `docs/Langfuse集成.md`
- `docs/MCP功能使用说明.md`
- `docs/OIDC认证调用流程.md`
- `docs/QA.md`
- `docs/RBAC说明.md`
- `docs/ROADMAP.md`
- `docs/agent-skills.md`
- `docs/api/README.md`
- `docs/api/agent.md`
- `docs/api/auth.md`
- `docs/api/chat.md`
- `docs/api/chunk.md`
- `docs/api/evaluation.md`
- `docs/api/faq.md`
- `docs/api/initialization.md`
- `docs/api/knowledge-base.md`
- `docs/api/knowledge-search.md`
- `docs/api/knowledge.md`
- `docs/api/mcp-service.md`
- ... 30 more

### 에이전트 지침 후보

- `cli/AGENTS.md`
- `cli/cmd/mcp/mcp.go`
- `cli/cmd/mcp/serve.go`
- `cli/internal/mcp/server.go`
- `cli/internal/mcp/skill_tool_parity_test.go`
- `cli/internal/mcp/tools.go`
- `cli/internal/mcp/tools_error_test.go`
- `cli/internal/mcp/tools_test.go`
- `cli/internal/skillparity/parity_test.go`
- `cli/skills/weknora-rag-search/SKILL.md`
- `cli/skills/weknora-rag-search/references/chat.md`
- `cli/skills/weknora-rag-search/references/search-chunks.md`
- `cli/skills/weknora-shared/SKILL.md`
- `client/mcp_service.go`
- `client/skill.go`
- `docs/agent-skills.md`
- `docs/api/mcp-service.md`
- `docs/api/skill.md`
- `docs/zh/mcp-approval.md`
- `examples/skills/README.md`
- `examples/skills/pdf-processing/FORMS.md`
- `examples/skills/pdf-processing/SKILL.md`
- `examples/skills/pdf-processing/scripts/analyze_form.py`
- `examples/skills/pdf-processing/scripts/extract_text.py`
- `frontend/src/api/mcp-service.ts`
- `frontend/src/api/skill/index.ts`
- `internal/agent/skills/integration_test.go`
- `internal/agent/skills/loader.go`
- `internal/agent/skills/manager.go`
- `internal/agent/skills/skill.go`
- `internal/agent/skills/skills_test.go`
- `internal/agent/tools/mcp_tool.go`
- `internal/agent/tools/mcp_tool_image_test.go`
- `internal/agent/tools/mcp_tool_test.go`
- `internal/agent/tools/skill_execute.go`
- `internal/agent/tools/skill_read.go`
- `internal/application/repository/mcp_service.go`
- `internal/application/repository/mcp_tool_approval_repository.go`
- `internal/application/service/mcp_service.go`
- `internal/application/service/mcp_service_test.go`
- `internal/application/service/mcp_tool_approval_service.go`
- `internal/application/service/skill_service.go`
- `internal/handler/dto/mcp.go`
- `internal/handler/dto/mcp_test.go`
- `internal/handler/mcp_credentials.go`
- `internal/handler/mcp_service.go`
- `internal/handler/skill_handler.go`
- `internal/mcp/client.go`
- `internal/mcp/errors.go`
- `internal/mcp/manager.go`
- `internal/mcp/types.go`
- `internal/types/interfaces/mcp_service.go`
- `internal/types/interfaces/mcp_tool_approval.go`
- `internal/types/interfaces/skill.go`
- `internal/types/mcp.go`
- `internal/types/mcp_test.go`
- `mcp-server/.gitignore`
- `mcp-server/CHANGELOG.md`
- `mcp-server/Dockerfile`
- `mcp-server/EXAMPLES.md`
- `mcp-server/INSTALL.md`
- `mcp-server/LICENSE`
- `mcp-server/MANIFEST.in`
- `mcp-server/MCP_CONFIG.md`
- `mcp-server/PROJECT_SUMMARY.md`
- `mcp-server/README.md`
- `mcp-server/__init__.py`
- `mcp-server/main.py`
- `mcp-server/pyproject.toml`
- `mcp-server/requirements.txt`
- `mcp-server/run.py`
- `mcp-server/run_server.py`
- `mcp-server/setup.py`
- `mcp-server/test_imports.py`
- `mcp-server/test_module.py`
- `mcp-server/weknora_mcp_server.py`
- `migrations/versioned/000017_mcp_builtin.down.sql`
- `migrations/versioned/000017_mcp_builtin.up.sql`
- `migrations/versioned/000042_mcp_tool_approval.down.sql`
- `migrations/versioned/000042_mcp_tool_approval.up.sql`
- ... 12 more

### 스펙/템플릿/명령/스킬 후보

- `cli/skills/weknora-rag-search/SKILL.md`
- `cli/skills/weknora-rag-search/references/chat.md`
- `cli/skills/weknora-rag-search/references/search-chunks.md`
- `cli/skills/weknora-shared/SKILL.md`
- `examples/skills/README.md`
- `examples/skills/pdf-processing/FORMS.md`
- `examples/skills/pdf-processing/SKILL.md`
- `examples/skills/pdf-processing/scripts/analyze_form.py`
- `examples/skills/pdf-processing/scripts/extract_text.py`
- `helm/templates/NOTES.txt`
- `helm/templates/_helpers.tpl`
- `helm/templates/app.yaml`
- `helm/templates/docreader.yaml`
- `helm/templates/frontend.yaml`
- `helm/templates/ingress.yaml`
- `helm/templates/neo4j.yaml`
- `helm/templates/postgres.yaml`
- `helm/templates/pvc.yaml`
- `helm/templates/redis.yaml`
- `helm/templates/secrets.yaml`
- `helm/templates/serviceaccount.yaml`
- `internal/agent/skills/integration_test.go`
- `internal/agent/skills/loader.go`
- `internal/agent/skills/manager.go`
- `internal/agent/skills/skill.go`
- `internal/agent/skills/skills_test.go`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `docreader/tests/test_config.py`
- `docreader/tests/test_epub_parser.py`
- `docreader/tests/test_excel_parser.py`
- `docreader/tests/test_markdown_table_util.py`
- `docreader/tests/test_mhtml_parser.py`
- `docreader/tests/test_opendataloader_parser.py`
- `docreader/tests/test_parser_concurrency.py`
- `docreader/tests/test_pdf_router.py`
- `docreader/tests/test_ppt_convert.py`
- `docreader/tests/test_web_parser.py`
- `frontend/src/components/modelEditorSourceState.test.ts`
- `frontend/src/components/sessionGrouping.test.ts`
- `frontend/src/components/sessionSidebarBuckets.test.ts`
- `frontend/src/utils/chatMarkdownRenderer.test.ts`
- `frontend/src/utils/security.test.ts`
- `frontend/src/utils/thinkingControl.test.ts`
- `frontend/src/views/knowledge/kbListMerge.test.ts`
- `frontend/src/views/knowledge/wikiStatusRefresh.test.ts`
- `tests/miniprogram/miniprogram.test.js`

### CI/Docker 후보

- `.github/workflows/cli-e2e.yml`
- `.github/workflows/cli.yml`
- `.github/workflows/docker-image.yml`
- `.github/workflows/release-lite.yml`
- `docker-compose.dev.yml`
- `docker-compose.yml`
- `frontend/Dockerfile`
- `mcp-server/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 1172 |
| .vue | 140 |
| .ts | 130 |
| .sql | 129 |
| .md | 115 |
| .py | 66 |
| .svg | 61 |
| .json | 31 |
| .yaml | 29 |
| .png | 25 |
| .sh | 19 |
| .js | 13 |
| .yml | 13 |
| .mjs | 11 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `cmd/ 내부 책임 분리`
- `cli/ 내부 책임 분리`
- `client/ 내부 책임 분리`
- `frontend/ 내부 책임 분리`
- `cli/skills/weknora-rag-search/SKILL.md 스펙/명령 의미`
- `cli/skills/weknora-rag-search/references/chat.md 스펙/명령 의미`
- `cli/skills/weknora-rag-search/references/search-chunks.md 스펙/명령 의미`
- `cli/skills/weknora-shared/SKILL.md 스펙/명령 의미`
- `examples/skills/README.md 스펙/명령 의미`
- `cli/go.mod 실행 스크립트와 패키지 경계`
- `client/go.mod 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `docreader/pyproject.toml 실행 스크립트와 패키지 경계`
- `docreader/uv.lock 실행 스크립트와 패키지 경계`

