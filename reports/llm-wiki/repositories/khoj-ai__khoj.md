# khoj-ai/khoj 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/khoj-ai__khoj |
| remote | https://github.com/khoj-ai/khoj |
| HEAD | 9258f57 (2026-03-26) Release Khoj version 2.0.0-beta.28 |
| branch | master |
| groups | adjacent-tech-50, llm-wiki-100, previous-clone-inventory-107 |
| files | 701 |
| dirs | 144 |
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
- 주요 heading: `🎁 New`, `Overview`, `See it in action`, `Full feature list`, `Self-Host`, `Enterprise`, `Frequently Asked Questions (FAQ)`, `Contributors`, `Interested in Contributing?`

> <p align="center" <img src="https //assets.khoj.dev/khoj logo sideways 1200x540.png" width="230" alt="Khoj Logo" </p <div align="center" </div <div align="center" <b Your AI second brain</b </div <br / <div align="center" 📑 Docs <span &nbsp;&nbsp;•&nbsp;&nbsp;</span 🌐 Web <span &nbsp;&nbsp;•&nbsp;&nbsp;</span 🔥 App <span &nbsp;&nbsp;•&nbsp;&nbsp;</span 💬 Discord <span &nbsp;&nbsp;•&nbsp;&nbsp;</span ✍🏽 Blog <a href="https //trendshift.io/repositories/10318" target=" blank" <img src="https //trendshift.io/api/badge/repositories/10318" alt="khoj ai%2Fkhoj Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </div 🎁 New Meet 🌶️ Pipali our open source AI coworker that runs on your computer. Read about Khoj's excellent performance on modern retrieval and reasoning benchmarks. Overview Khoj is a personal AI app to extend your capabilities. It smoothly scales up fro

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .devcontainer | dir |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .vscode | dir |
| computer.Dockerfile | file |
| docker-compose.yml | file |
| Dockerfile | file |
| documentation | dir |
| gunicorn-config.py | file |
| LICENSE | file |
| manifest.json | file |
| prod.Dockerfile | file |
| pyproject.toml | file |
| pytest.ini | file |
| README.md | file |
| scripts | dir |
| src | dir |
| tests | dir |
| uv.lock | file |
| versions.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 505 |
| documentation/ | 99 |
| tests/ | 61 |
| (root) | 16 |
| .github/ | 13 |
| .devcontainer/ | 3 |
| .vscode/ | 2 |
| scripts/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 505 | preferred |
| tests/ | 61 | preferred |
| scripts/ | 2 | preferred |
| src/interface/ | 251 | large |
| src/khoj/ | 251 | large |
| src/interface/web/ | 152 | large |
| src/khoj/database/ | 127 | large |
| documentation/ | 99 | large |
| src/khoj/processor/ | 52 | large |
| documentation/docs/ | 45 | large |
| documentation/assets/ | 44 | large |
| documentation/assets/img/ | 43 | large |
| src/interface/desktop/ | 37 | large |
| src/interface/android/ | 36 | large |
| tests/data/ | 34 | large |
| src/khoj/interface/ | 27 | large |
| src/interface/obsidian/ | 24 | large |
| tests/data/markdown/ | 20 | large |
| src/khoj/routers/ | 18 | large |
| .github/ | 13 | large |
| documentation/docs/features/ | 13 | large |
| .github/workflows/ | 11 | large |
| documentation/docs/advanced/ | 11 | large |
| src/khoj/utils/ | 11 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `Dockerfile`
- `docker-compose.yml`
- `documentation/package.json`
- `documentation/yarn.lock`
- `pyproject.toml`
- `src/interface/desktop/package.json`
- `src/interface/desktop/yarn.lock`
- `src/interface/obsidian/package.json`
- `src/interface/obsidian/tsconfig.json`
- `src/interface/obsidian/yarn.lock`
- `src/interface/web/bun.lock`
- `src/interface/web/package.json`
- `src/interface/web/tsconfig.json`
- `src/telemetry/Dockerfile`
- `src/telemetry/requirements.txt`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| documentation/package.json | documentation | docusaurus, start, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids | @docusaurus/core, @docusaurus/plugin-sitemap, @docusaurus/preset-classic, @mdx-js/react, clsx, prism-react-renderer, react, react-dom, webpack-dev-server |
| src/interface/desktop/package.json | Khoj | start | @todesktop/runtime, axios, cron, electron-store |
| src/interface/obsidian/package.json | Khoj | dev, build, version | diff, isomorphic-dompurify |
| src/interface/web/package.json | khoj-ai | dev, build, start, lint, collectstatic, cicollectstatic, export, ciexport, pypiciexport, watch, windowswatch, windowscollectstatic, windowsexport, prepare | @excalidraw/excalidraw, @hookform/resolvers, @phosphor-icons/react, @radix-ui/react-alert-dialog, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-menubar, @radix-ui/react-navigation-menu, @radix-ui/react-popover |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | khoj | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `documentation/README.md`
- `documentation/docs/advanced/_category_.json`
- `documentation/docs/advanced/admin.md`
- `documentation/docs/advanced/authentication.mdx`
- `documentation/docs/advanced/gcp-vertex.md`
- `documentation/docs/advanced/litellm.md`
- `documentation/docs/advanced/lmstudio.md`
- `documentation/docs/advanced/ollama.mdx`
- `documentation/docs/advanced/remote.md`
- `documentation/docs/advanced/support-multilingual-docs.md`
- `documentation/docs/advanced/tailscale.md`
- `documentation/docs/advanced/use-openai-proxy.md`
- `documentation/docs/clients/_category_.json`
- `documentation/docs/clients/desktop.md`
- `documentation/docs/clients/emacs.md`
- `documentation/docs/clients/obsidian.md`
- `documentation/docs/clients/web.md`
- `documentation/docs/clients/whatsapp.md`
- `documentation/docs/contributing/_category_.json`
- `documentation/docs/contributing/development.mdx`
- `documentation/docs/data-sources/_category_.json`
- `documentation/docs/data-sources/github_integration.md`
- `documentation/docs/data-sources/notion_integration.md`
- `documentation/docs/data-sources/share_your_data.md`
- `documentation/docs/features/_category_.json`
- `documentation/docs/features/agents.md`
- `documentation/docs/features/all-features.md`
- `documentation/docs/features/automations.md`
- `documentation/docs/features/chat.md`
- `documentation/docs/features/code_execution.md`
- `documentation/docs/features/image_generation.md`
- `documentation/docs/features/keyboard_shortcuts.md`
- `documentation/docs/features/khoj_mini.md`
- `documentation/docs/features/online_search.md`
- `documentation/docs/features/search.md`
- `documentation/docs/features/share.md`
- `documentation/docs/features/voice-chat.md`
- `documentation/docs/get-started/_category_.json`
- `documentation/docs/get-started/overview.md`
- `documentation/docs/get-started/privacy-security.md`
- `documentation/docs/get-started/setup.mdx`
- `documentation/docs/miscellaneous/_category_.json`
- `documentation/docs/miscellaneous/credits.md`
- `documentation/docs/miscellaneous/performance.md`
- `documentation/docs/miscellaneous/query-filters.md`
- `documentation/docs/miscellaneous/telemetry.md`
- `src/interface/desktop/README.md`
- `src/interface/obsidian/README.md`
- `src/interface/web/README.md`
- ... 2 more

### 에이전트 지침 후보

- `documentation/docs/features/agents.md`
- `src/khoj/database/migrations/0096_mcpserver.py`
- `src/khoj/processor/tools/mcp.py`

### 스펙/템플릿/명령/스킬 후보

- `src/khoj/database/management/commands/__init__.py`
- `src/khoj/database/management/commands/change_default_model.py`
- `src/khoj/database/management/commands/change_generated_images_url.py`
- `src/khoj/database/management/commands/convert_images_png_to_webp.py`
- `src/khoj/database/management/commands/delete_orphaned_fileobjects.py`
- `src/khoj/database/management/commands/manage_memories.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/interface/emacs/tests/khoj-tests.el`
- `tests/__init__.py`
- `tests/conftest.py`
- `tests/data/config.yml`
- `tests/data/docx/bangalore.docx`
- `tests/data/docx/iceland.docx`
- `tests/data/images/guineapig_grass.jpg`
- `tests/data/images/horse_dog.jpg`
- `tests/data/images/kitten_park.jpg`
- `tests/data/images/nasdaq.jpg`
- `tests/data/images/testocr.png`
- `tests/data/markdown/Birthday Gift for Xiu turning 4.markdown`
- `tests/data/markdown/Hike Mt. Kilimanjaro.markdown`
- `tests/data/markdown/Meet Arun and Pablo for Lunch.markdown`
- `tests/data/markdown/Miscellaneous Transactions.markdown`
- `tests/data/markdown/Namita.markdown`
- `tests/data/markdown/Patent 6631372.markdown`
- `tests/data/markdown/Preparing to File Taxes for 2022.markdown`
- `tests/data/markdown/Sign Wayne Enterprises Offer Letter.markdown`
- `tests/data/markdown/Submit Resignation Letter to Acme.Inc.markdown`
- `tests/data/markdown/Visit Seregenti.markdown`
- `tests/data/markdown/Xi Li.markdown`
- `tests/data/markdown/copy_what_you_like.markdown`
- `tests/data/markdown/having_kids.markdown`
- `tests/data/markdown/how_y_combinator_started.markdown`
- `tests/data/markdown/jessica_livingston.markdown`
- `tests/data/markdown/main_readme.md`
- `tests/data/markdown/undergraduation.markdown`
- `tests/data/markdown/what_i_did_this_summer.markdown`
- `tests/data/markdown/what_i_worked_on.markdown`
- `tests/data/markdown/why_yc.markdown`
- `tests/data/org/interface_emacs_readme.org`
- `tests/data/org/main_readme.org`
- `tests/data/pdf/multipage.pdf`
- `tests/data/pdf/ocr_samples.pdf`
- `tests/data/pdf/singlepage.pdf`
- `tests/data/plaintext/wikipedia_tardigrades.html`
- `tests/evals/eval.py`
- `tests/helpers.py`
- `tests/test_agents.py`
- `tests/test_api_automation.py`
- `tests/test_cli.py`
- `tests/test_client.py`
- `tests/test_conversation_utils.py`
- `tests/test_date_filter.py`
- `tests/test_db_lock.py`
- `tests/test_docx_to_entries.py`
- `tests/test_file_filter.py`
- `tests/test_grep_files.py`
- `tests/test_helpers.py`
- `tests/test_image_to_entries.py`
- `tests/test_markdown_to_entries.py`
- `tests/test_memory_settings.py`
- `tests/test_multiple_users.py`
- `tests/test_online_chat_actors.py`
- `tests/test_online_chat_director.py`
- `tests/test_org_to_entries.py`
- `tests/test_orgnode.py`
- `tests/test_pdf_to_entries.py`
- `tests/test_plaintext_to_entries.py`
- `tests/test_text_search.py`
- `tests/test_word_filter.py`

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.github/workflows/build_khoj_el.yml`
- `.github/workflows/desktop.yml`
- `.github/workflows/dockerize.yml`
- `.github/workflows/dockerize_telemetry_server.yml`
- `.github/workflows/github_pages_deploy.yml`
- `.github/workflows/pre-commit.yml`
- `.github/workflows/pypi.yml`
- `.github/workflows/release.yml`
- `.github/workflows/run_evals.yml`
- `.github/workflows/test.yml`
- `.github/workflows/test_khoj_el.yml`
- `Dockerfile`
- `docker-compose.yml`
- `src/telemetry/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 251 |
| .tsx | 81 |
| .png | 72 |
| .md | 42 |
| .svg | 34 |
| .css | 27 |
| .json | 27 |
| .ts | 22 |
| .markdown | 19 |
| .js | 17 |
| .yml | 15 |
| .html | 14 |
| .xml | 6 |
| .jpg | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `src/interface/ 내부 책임 분리`
- `src/khoj/ 내부 책임 분리`
- `src/khoj/database/management/commands/__init__.py 스펙/명령 의미`
- `src/khoj/database/management/commands/change_default_model.py 스펙/명령 의미`
- `src/khoj/database/management/commands/change_generated_images_url.py 스펙/명령 의미`
- `src/khoj/database/management/commands/convert_images_png_to_webp.py 스펙/명령 의미`
- `src/khoj/database/management/commands/delete_orphaned_fileobjects.py 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `documentation/package.json 실행 스크립트와 패키지 경계`
- `documentation/yarn.lock 실행 스크립트와 패키지 경계`

