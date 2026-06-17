# yusufkaraaslan/Skill_Seekers 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/yusufkaraaslan__Skill_Seekers |
| remote | https://github.com/yusufkaraaslan/Skill_Seekers |
| HEAD | 3b60a3a (2026-06-16) chore: open 3.9.0 development cycle (3.9.0.dev0) |
| branch | development |
| groups | llm-wiki-100 |
| files | 2985 |
| dirs | 156 |
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
- 주요 heading: `Skill Seekers`, `🌐 Ecosystem`, `🧠 The Data Layer for AI Systems`, `One command → structured knowledge asset`, `or: skill-seekers create facebook/react`, `or: skill-seekers create ./my-project`, `Export to any AI system`, `What gets built`, `Why it matters`, `🚀 Quick Start (3 Commands)`, `1. Install`, `2. Create skill from any source`, `3. Package for your AI platform`, `Use a different AI agent for enhancement (default: claude)`, `🛰️ AI-driven project scan (new)`, `→ react.json, vite.json, tailwind.json, jest.json, my-react-app-codebase.json`, `Then build any of them`, `Other Sources (18 Supported)`

> <p align="center" <img src="docs/assets/logo.png" alt="Skill Seekers" width="200"/ </p Skill Seekers English 简体中文 日本語 한국어 Español Français Deutsch Português Türkçe العربية हिन्दी Русский <a href="https //trendshift.io/repositories/18329" target=" blank" <img src="https //trendshift.io/api/badge/repositories/18329" alt="yusufkaraaslan%2FSkill Seekers Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a 🧠 The data layer for AI systems. Skill Seekers turns documentation sites, GitHub repos, PDFs, videos, notebooks, wikis, and 10+ more source types into structured knowledge assets—ready to power AI Skills (Claude, Gemini, OpenAI), RAG pipelines (LangChain, LlamaIndex, Pinecone), and AI coding assistants (Cursor, Windsurf, Cline) in minutes, not hours. 🌐 Visit SkillSeekersWeb.com Browse 24+ preset configs, share your configs, and access complete documentation! 📋 View 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .codex-plugin | dir |
| .dockerignore | file |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .mcp.json | file |
| .vscode | dir |
| AGENTS.md | file |
| api | dir |
| BULLETPROOF_QUICKSTART.md | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| codecov.yml | file |
| configs | dir |
| CONTRIBUTING.md | file |
| distribution | dir |
| docker-compose.yml | file |
| Dockerfile | file |
| Dockerfile.mcp | file |
| docs | dir |
| DOCUMENTATION_AUDIT_REPORT_2026-05-30.md | file |
| example-mcp-config.json | file |
| examples | dir |
| helm | dir |
| LICENSE | file |
| mypy.ini | file |
| pyproject.toml | file |
| pytest.ci.ini | file |
| QWEN.md | file |
| README.ar.md | file |
| README.de.md | file |
| README.es.md | file |
| README.fr.md | file |
| README.hi.md | file |
| README.ja.md | file |
| README.ko.md | file |
| README.md | file |
| README.pt-BR.md | file |
| README.ru.md | file |
| README.tr.md | file |
| README.zh-CN.md | file |
| render-mcp.yaml | file |
| render.yaml | file |
| requirements.txt | file |
| ROADMAP.md | file |
| scripts | dir |
| setup_mcp.sh | file |
| setup.sh | file |
| skills | dir |
| src | dir |
| templates | dir |
| tests | dir |
| TROUBLESHOOTING.md | file |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 2202 |
| src/ | 329 |
| tests/ | 290 |
| examples/ | 54 |
| (root) | 41 |
| helm/ | 15 |
| .github/ | 14 |
| configs/ | 12 |
| distribution/ | 10 |
| scripts/ | 7 |
| api/ | 6 |
| .claude/ | 1 |
| .codex-plugin/ | 1 |
| .vscode/ | 1 |
| skills/ | 1 |
| templates/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 329 | preferred |
| docs/ | 2202 | preferred |
| examples/ | 54 | preferred |
| tests/ | 290 | preferred |
| templates/ | 1 | preferred |
| skills/ | 1 | preferred |
| scripts/ | 7 | preferred |
| docs/UML/ | 2049 | large |
| docs/UML/html/ | 2027 | large |
| src/skill_seekers/ | 329 | large |
| src/skill_seekers/cli/ | 213 | large |
| tests/golden/ | 108 | large |
| tests/golden/phase2/ | 108 | large |
| src/skill_seekers/workflows/ | 69 | large |
| docs/zh-CN/ | 29 | large |
| src/skill_seekers/mcp/ | 24 | large |
| docs/UML/exports/ | 21 | large |
| tests/test_adaptors/ | 21 | large |
| docs/archive/ | 19 | large |
| docs/integrations/ | 18 | large |
| helm/ | 15 | large |
| helm/skill-seekers/ | 15 | large |
| .github/ | 14 | large |
| docs/reference/ | 14 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `api/requirements.txt`
- `docker-compose.yml`
- `examples/chroma-example/requirements.txt`
- `examples/cline-django-assistant/requirements.txt`
- `examples/continue-dev-universal/requirements.txt`
- `examples/cursor-react-skill/example-project/package.json`
- `examples/cursor-react-skill/example-project/tsconfig.json`
- `examples/cursor-react-skill/requirements.txt`
- `examples/faiss-example/requirements.txt`
- `examples/haystack-pipeline/requirements.txt`
- `examples/langchain-rag-pipeline/requirements.txt`
- `examples/llama-index-query-engine/requirements.txt`
- `examples/pinecone-upsert/requirements.txt`
- `examples/qdrant-example/requirements.txt`
- `examples/weaviate-example/requirements.txt`
- `examples/windsurf-fastapi-context/requirements.txt`
- `pyproject.toml`
- `requirements.txt`
- `src/skill_seekers/mcp/requirements.txt`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| examples/cursor-react-skill/example-project/package.json | cursor-react-example | dev, build, preview | react, react-dom |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | skill-seekers | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `api/README.md`
- `distribution/claude-plugin/README.md`
- `distribution/github-action/README.md`
- `distribution/smithery/README.md`
- `docs/ARCHITECTURE.md`
- `docs/BEST_PRACTICES.md`
- `docs/BUG_AUDIT.md`
- `docs/DOCKER_DEPLOYMENT.md`
- `docs/FAQ.md`
- `docs/KUBERNETES_DEPLOYMENT.md`
- `docs/PRODUCTION_DEPLOYMENT.md`
- `docs/README.md`
- `docs/TROUBLESHOOTING.md`
- `docs/UML/exports/00_package_overview.png`
- `docs/UML/exports/01_cli_core.png`
- `docs/UML/exports/02_scrapers.png`
- `docs/UML/exports/03_adaptors.png`
- `docs/UML/exports/04_analysis.png`
- `docs/UML/exports/05_enhancement.png`
- `docs/UML/exports/06_packaging.png`
- `docs/UML/exports/07_mcp_server.png`
- `docs/UML/exports/08_sync.png`
- `docs/UML/exports/09_parsers.png`
- `docs/UML/exports/10_storage.png`
- `docs/UML/exports/11_embedding.png`
- `docs/UML/exports/12_benchmark.png`
- `docs/UML/exports/13_utilities.png`
- `docs/UML/exports/14_create_pipeline_sequence.png`
- `docs/UML/exports/15_github_unified_sequence.png`
- `docs/UML/exports/16_source_detection_activity.png`
- `docs/UML/exports/17_mcp_invocation_sequence.png`
- `docs/UML/exports/18_enhancement_activity.png`
- `docs/UML/exports/19_runtime_components.png`
- `docs/UML/exports/20_browser_rendering_sequence.png`
- `docs/UML/html/index.html/assets/css/bootstrap.css`
- `docs/UML/html/index.html/assets/css/jquery.bonsai.css`
- `docs/UML/html/index.html/assets/css/main.css`
- `docs/UML/html/index.html/assets/icon-font/icons.css`
- `docs/UML/html/index.html/assets/icon-font/icons.eot`
- `docs/UML/html/index.html/assets/icon-font/icons.html`
- `docs/UML/html/index.html/assets/icon-font/icons.ttf`
- `docs/UML/html/index.html/assets/icon-font/icons.woff`
- `docs/UML/html/index.html/assets/img/glyphicons-halflings-white.png`
- `docs/UML/html/index.html/assets/img/glyphicons-halflings.png`
- `docs/UML/html/index.html/assets/js/bootstrap.js`
- `docs/UML/html/index.html/assets/js/imageMapResizer.min.js`
- `docs/UML/html/index.html/assets/js/jquery-2.1.0.min.js`
- `docs/UML/html/index.html/assets/js/jquery.bonsai.js`
- ... 30 more

### 에이전트 지침 후보

- `.claude/mcp_config.example.json`
- `.github/ISSUE_TEMPLATE/mcp_tool.md`
- `.mcp.json`
- `AGENTS.md`
- `CLAUDE.md`
- `Dockerfile.mcp`
- `distribution/claude-plugin/.mcp.json`
- `distribution/claude-plugin/commands/create-skill.md`
- `distribution/claude-plugin/commands/install-skill.md`
- `distribution/claude-plugin/skills/skill-builder/SKILL.md`
- `docs/UML/exports/07_mcp_server.png`
- `docs/UML/exports/17_mcp_invocation_sequence.png`
- `docs/UML/skill_seekers.mdj`
- `docs/advanced/mcp-server.md`
- `docs/archive/plans/2025-10-24-active-skills-design.md`
- `docs/archive/plans/2025-10-24-active-skills-phase1.md`
- `docs/getting-started/03-your-first-skill.md`
- `docs/integrations/CURSOR.md`
- `docs/integrations/WINDSURF.md`
- `docs/zh-CN/advanced/mcp-server.md`
- `docs/zh-CN/getting-started/03-your-first-skill.md`
- `example-mcp-config.json`
- `examples/chroma-example/1_generate_skill.py`
- `examples/cursor-react-skill/.cursorrules.example`
- `examples/cursor-react-skill/README.md`
- `examples/cursor-react-skill/example-project/README.md`
- `examples/cursor-react-skill/example-project/package.json`
- `examples/cursor-react-skill/example-project/src/App.tsx`
- `examples/cursor-react-skill/example-project/src/index.tsx`
- `examples/cursor-react-skill/example-project/tsconfig.json`
- `examples/cursor-react-skill/generate_cursorrules.py`
- `examples/cursor-react-skill/requirements.txt`
- `examples/faiss-example/1_generate_skill.py`
- `examples/qdrant-example/1_generate_skill.py`
- `examples/weaviate-example/1_generate_skill.py`
- `helm/skill-seekers/Chart.yaml`
- `helm/skill-seekers/templates/NOTES.txt`
- `helm/skill-seekers/templates/_helpers.tpl`
- `helm/skill-seekers/templates/chroma-deployment.yaml`
- `helm/skill-seekers/templates/configmap.yaml`
- `helm/skill-seekers/templates/hpa.yaml`
- `helm/skill-seekers/templates/ingress.yaml`
- `helm/skill-seekers/templates/mcp-deployment.yaml`
- `helm/skill-seekers/templates/pvc.yaml`
- `helm/skill-seekers/templates/qdrant-deployment.yaml`
- `helm/skill-seekers/templates/secret.yaml`
- `helm/skill-seekers/templates/service.yaml`
- `helm/skill-seekers/templates/serviceaccount.yaml`
- `helm/skill-seekers/templates/weaviate-deployment.yaml`
- `helm/skill-seekers/values.yaml`
- `render-mcp.yaml`
- `scripts/bootstrap_skill.sh`
- `scripts/skill_header.md`
- `setup_mcp.sh`
- `skills/skill-seekers/SKILL.md`
- `src/skill_seekers/__init__.py`
- `src/skill_seekers/_version.py`
- `src/skill_seekers/benchmark/__init__.py`
- `src/skill_seekers/benchmark/framework.py`
- `src/skill_seekers/benchmark/models.py`
- `src/skill_seekers/benchmark/runner.py`
- `src/skill_seekers/cli/__init__.py`
- `src/skill_seekers/cli/adaptors/__init__.py`
- `src/skill_seekers/cli/adaptors/atlas.py`
- `src/skill_seekers/cli/adaptors/base.py`
- `src/skill_seekers/cli/adaptors/chroma.py`
- `src/skill_seekers/cli/adaptors/claude.py`
- `src/skill_seekers/cli/adaptors/deepseek.py`
- `src/skill_seekers/cli/adaptors/faiss_helpers.py`
- `src/skill_seekers/cli/adaptors/fireworks.py`
- `src/skill_seekers/cli/adaptors/gemini.py`
- `src/skill_seekers/cli/adaptors/haystack.py`
- `src/skill_seekers/cli/adaptors/ibm_bob.py`
- `src/skill_seekers/cli/adaptors/kimi.py`
- `src/skill_seekers/cli/adaptors/langchain.py`
- `src/skill_seekers/cli/adaptors/llama_index.py`
- `src/skill_seekers/cli/adaptors/markdown.py`
- `src/skill_seekers/cli/adaptors/minimax.py`
- `src/skill_seekers/cli/adaptors/openai.py`
- `src/skill_seekers/cli/adaptors/openai_compatible.py`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `distribution/claude-plugin/commands/create-skill.md`
- `distribution/claude-plugin/commands/install-skill.md`
- `distribution/claude-plugin/commands/sync-config.md`
- `distribution/claude-plugin/skills/skill-builder/SKILL.md`
- `docs/archive/plans/2025-10-24-active-skills-design.md`
- `helm/skill-seekers/templates/NOTES.txt`
- `helm/skill-seekers/templates/_helpers.tpl`
- `helm/skill-seekers/templates/chroma-deployment.yaml`
- `helm/skill-seekers/templates/configmap.yaml`
- `helm/skill-seekers/templates/hpa.yaml`
- `helm/skill-seekers/templates/ingress.yaml`
- `helm/skill-seekers/templates/mcp-deployment.yaml`
- `helm/skill-seekers/templates/pvc.yaml`
- `helm/skill-seekers/templates/qdrant-deployment.yaml`
- `helm/skill-seekers/templates/secret.yaml`
- `helm/skill-seekers/templates/service.yaml`
- `helm/skill-seekers/templates/serviceaccount.yaml`
- `helm/skill-seekers/templates/weaviate-deployment.yaml`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/conftest.py`
- `tests/docker-compose.test.yml`
- `tests/fixtures/example_conflicts.json`
- `tests/fixtures/generate_fixtures.py`
- `tests/fixtures/synthetic/document.docx`
- `tests/fixtures/synthetic/document.epub`
- `tests/fixtures/synthetic/document.pdf`
- `tests/golden/phase2/chat/SKILL.md`
- `tests/golden/phase2/chat/references/engineering_s1-s2.md`
- `tests/golden/phase2/chat/references/index.md`
- `tests/golden/phase2/chat/references/random_s3-s3.md`
- `tests/golden/phase2/chat_empty/SKILL.md`
- `tests/golden/phase2/chat_empty/references/index.md`
- `tests/golden/phase2/chat_empty/references/section_01.md`
- `tests/golden/phase2/chat_single/SKILL.md`
- `tests/golden/phase2/chat_single/references/index.md`
- `tests/golden/phase2/chat_single/references/main.md`
- `tests/golden/phase2/chat_topics/SKILL.md`
- `tests/golden/phase2/chat_topics/references/general_s3-s3.md`
- `tests/golden/phase2/chat_topics/references/index.md`
- `tests/golden/phase2/chat_topics/references/setup_s2-s2.md`
- `tests/golden/phase2/chat_topics/references/troubleshooting_s1-s1.md`
- `tests/golden/phase2/epub/SKILL.md`
- `tests/golden/phase2/epub/assets/section_1_img_0.png`
- `tests/golden/phase2/epub/references/handbook.md`
- `tests/golden/phase2/epub/references/index.md`
- `tests/golden/phase2/epub_kw/SKILL.md`
- `tests/golden/phase2/epub_kw/assets/section_1_img_0.png`
- `tests/golden/phase2/epub_kw/references/index.md`
- `tests/golden/phase2/epub_kw/references/section_s1-s1.md`
- `tests/golden/phase2/epub_kw/references/section_s2-s2.md`
- `tests/golden/phase2/epub_kw/references/section_s3-s3.md`
- `tests/golden/phase2/html/SKILL.md`
- `tests/golden/phase2/html/references/index.md`
- `tests/golden/phase2/html/references/page.md`
- `tests/golden/phase2/html_kw/SKILL.md`
- `tests/golden/phase2/html_kw/references/index.md`
- `tests/golden/phase2/html_kw/references/section_s1-s1.md`
- `tests/golden/phase2/html_kw/references/section_s2-s2.md`
- `tests/golden/phase2/html_kw/references/section_s3-s4.md`
- `tests/golden/phase2/html_multi/SKILL.md`
- `tests/golden/phase2/html_multi/references/golden_html_multi_s1-s2.md`
- `tests/golden/phase2/html_multi/references/golden_html_multi_s3-s4.md`
- `tests/golden/phase2/html_multi/references/index.md`
- `tests/golden/phase2/jupyter/SKILL.md`
- `tests/golden/phase2/jupyter/references/analysis.md`
- `tests/golden/phase2/jupyter/references/index.md`
- `tests/golden/phase2/jupyter_dir/SKILL.md`
- `tests/golden/phase2/jupyter_dir/references/index.md`
- `tests/golden/phase2/jupyter_dir/references/section_s1-s1.md`
- `tests/golden/phase2/jupyter_dir/references/section_s2-s2.md`
- `tests/golden/phase2/jupyter_dir/references/section_s3-s4.md`
- `tests/golden/phase2/jupyter_dir/references/section_s5-s5.md`
- `tests/golden/phase2/jupyter_kw/SKILL.md`
- `tests/golden/phase2/jupyter_kw/references/index.md`
- `tests/golden/phase2/jupyter_kw/references/section_04.md`
- `tests/golden/phase2/jupyter_kw/references/section_s1-s1.md`
- `tests/golden/phase2/jupyter_kw/references/section_s2-s2.md`
- `tests/golden/phase2/jupyter_kw/references/section_s3-s4.md`
- `tests/golden/phase2/jupyter_kw/references/section_s5-s5.md`
- `tests/golden/phase2/jupyter_topics/SKILL.md`
- `tests/golden/phase2/jupyter_topics/references/index.md`
- `tests/golden/phase2/jupyter_topics/references/section_s1-s1.md`
- `tests/golden/phase2/jupyter_topics/references/section_s2-s2.md`
- `tests/golden/phase2/jupyter_topics/references/section_s3-s4.md`
- `tests/golden/phase2/jupyter_topics/references/section_s5-s5.md`
- `tests/golden/phase2/man/SKILL.md`
- `tests/golden/phase2/man/references/curl_02.md`
- `tests/golden/phase2/man/references/git_01.md`
- `tests/golden/phase2/man/references/index.md`
- `tests/golden/phase2/man_kw/SKILL.md`
- `tests/golden/phase2/man_kw/references/index.md`
- `tests/golden/phase2/man_kw/references/other_02.md`
- `tests/golden/phase2/man_kw/references/version_control_01.md`
- `tests/golden/phase2/man_single/SKILL.md`
- `tests/golden/phase2/man_single/references/curl.md`
- `tests/golden/phase2/man_single/references/index.md`
- `tests/golden/phase2/pdf/SKILL.md`
- `tests/golden/phase2/pdf/assets/page_2_img_0.png`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/docker-publish.yml`
- `.github/workflows/quality-metrics.yml`
- `.github/workflows/release.yml`
- `.github/workflows/scheduled-updates.yml`
- `.github/workflows/test-vector-dbs.yml`
- `.github/workflows/tests.yml`
- `.github/workflows/vector-db-export.yml`
- `Dockerfile`
- `docker-compose.yml`
- `tests/docker-compose.test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .html | 1992 |
| .py | 459 |
| .md | 304 |
| .yaml | 83 |
| .png | 31 |
| .json | 23 |
| .svg | 21 |
| .txt | 17 |
| .yml | 13 |
| .sh | 9 |
| .js | 5 |
| .css | 4 |
| .example | 2 |
| .gitignore | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `distribution/claude-plugin/commands/create-skill.md 스펙/명령 의미`
- `distribution/claude-plugin/commands/install-skill.md 스펙/명령 의미`
- `distribution/claude-plugin/commands/sync-config.md 스펙/명령 의미`
- `distribution/claude-plugin/skills/skill-builder/SKILL.md 스펙/명령 의미`
- `docs/archive/plans/2025-10-24-active-skills-design.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `api/requirements.txt 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `examples/chroma-example/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/cline-django-assistant/requirements.txt 실행 스크립트와 패키지 경계`

