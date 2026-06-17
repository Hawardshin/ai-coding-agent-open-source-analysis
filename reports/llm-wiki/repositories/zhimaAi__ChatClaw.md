# zhimaAi/ChatClaw 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/zhimaAi__ChatClaw |
| remote | https://github.com/zhimaAi/ChatClaw |
| HEAD | 24cf232 (2026-05-13) Merge branch 'feature/ivan_9_7_openclaw_20260513' into 'main' |
| branch | main |
| groups | llm-wiki-100 |
| files | 1027 |
| dirs | 181 |
| stack | Node/TypeScript/JavaScript, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `功能预览`, `AI 聊天助手`, `多Agent模式，满足不同场景使用`, `开源的本地知识库管理`, `海量技能库，输入指令，AI 秒级响应`, `记忆功能 — 交互更自然，更智能`, `免费模型试用`, `企业微信/微信/钉钉/飞书/QQ/WhatsApp 等多渠道远程控制`, `定时任务，自动化运行更方便`, `划词即时问答`, `智能侧边栏`, `一问多答：轻松比较`, `一键启动`, `社区交流&联系我们`, `Server Mode Deployment`, `二进制直接运行`, `Docker`, `Docker Compose`

> <p align="center" <img src="./frontend/src/assets/images/logo floatingball.png" width="150" height="150" </p <h1 align="center" ChatClaw</h1 <p align="center" 5分钟拥有类 OpenClaw 的小龙虾个人AI智能体，沙箱安全，占资源少，运行快. </p <p align="center" <a href="./docs/readmes/README en.md" English</a <a href="./docs/readmes/README zh CN.md" 简体中文</a <a href="./docs/readmes/README zh TW.md" 繁體中文</a <a href="./docs/readmes/README ja JP.md" 日本語</a <a href="./docs/readmes/README ko KR.md" 한국어</a <a href="./docs/readmes/README ar SA.md" العربية</a <a href="./docs/readmes/README bn BD.md" বাংলা</a <a href="./docs/readmes/README de DE.md" Deutsch</a <a href="./docs/readmes/README es ES.md" Español</a <a href="./docs/readmes/README fr FR.md" Français</a <a href="./docs/readmes/README hi IN.md" हिन्दी</a <a href="./docs/readmes/README it IT.md" Italiano</a <a href="./docs/readmes/README pt BR.md" Português</a <a href="./docs/

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cursor | dir |
| .gitignore | file |
| AGENTS.md | file |
| build | dir |
| development.md | file |
| docker-compose.yml | file |
| docs | dir |
| frontend | dir |
| go.mod | file |
| go.sum | file |
| images | dir |
| internal | dir |
| LICENCE | file |
| main.go | file |
| pkg | dir |
| README.md | file |
| Taskfile.yml | file |
| UpdateLog.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| frontend/ | 509 |
| internal/ | 362 |
| pkg/ | 48 |
| images/ | 38 |
| .cursor/ | 37 |
| docs/ | 22 |
| (root) | 11 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 509 | preferred |
| docs/ | 22 | preferred |
| frontend/src/ | 476 | large |
| internal/ | 362 | large |
| internal/services/ | 186 | large |
| frontend/src/pages/ | 163 | large |
| frontend/src/assets/ | 133 | large |
| frontend/src/components/ | 124 | large |
| internal/sqlite/ | 65 | large |
| internal/sqlite/migrations/ | 64 | large |
| internal/eino/ | 54 | large |
| pkg/ | 48 | large |
| images/ | 38 | large |
| .cursor/ | 37 | large |
| internal/eino/tools/ | 31 | large |
| images/previews/ | 29 | large |
| internal/openclaw/ | 27 | large |
| internal/services/textselection/ | 25 | large |
| .cursor/skills/ | 23 | large |
| pkg/webviewpanel/ | 23 | large |
| .cursor/skills/i18n-check/ | 21 | large |
| pkg/winsnap/ | 21 | large |
| internal/services/floatingball/ | 20 | large |
| internal/openclaw/runtime/ | 19 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker-compose.yml`
- `frontend/package.json`
- `frontend/pnpm-lock.yaml`
- `frontend/pnpm-workspace.yaml`
- `frontend/tsconfig.json`
- `frontend/vite.config.ts`
- `go.mod`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| frontend/package.json | frontend | dev, build:dev, build, preview, lint, format, check:locales, fix:locales, test, test:e2e, test:e2e:headed, test:e2e:ui, test:e2e:debug | @types/dompurify, @vue-office/docx, @vue-office/excel, @vueuse/core, @wailsio/runtime, @xterm/addon-fit, @xterm/xterm, ansi-to-html, bestofdview, class-variance-authority, clsx, dompurify, highlight.js, lucide-vue-next |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go.mod | chatclaw | 1.26.1 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/LOGO_ASSETS.md`
- `docs/mac-window-hierarchy-wake-logic.md`
- `docs/readmes/README_ar-SA.md`
- `docs/readmes/README_bn-BD.md`
- `docs/readmes/README_de-DE.md`
- `docs/readmes/README_en.md`
- `docs/readmes/README_es-ES.md`
- `docs/readmes/README_fr-FR.md`
- `docs/readmes/README_hi-IN.md`
- `docs/readmes/README_it-IT.md`
- `docs/readmes/README_ja-JP.md`
- `docs/readmes/README_ko-KR.md`
- `docs/readmes/README_pt-BR.md`
- `docs/readmes/README_sl-SI.md`
- `docs/readmes/README_tr-TR.md`
- `docs/readmes/README_vi-VN.md`
- `docs/readmes/README_zh-CN.md`
- `docs/readmes/README_zh-TW.md`
- `docs/windows-focus-handling.md`
- `docs/windows-multi-monitor-popup-positioning.md`
- `docs/windows-syscall-callback-limit.md`
- `docs/windows-text-selection-detection-research.md`
- `frontend/README.md`
- `pkg/webviewpanel/README.md`

### 에이전트 지침 후보

- `.cursor/commands/gitc.md`
- `.cursor/commands/review.md`
- `.cursor/commands/self-test.md`
- `.cursor/hooks.json`
- `.cursor/hooks/archive-hook.js`
- `.cursor/mcp.json`
- `.cursor/rules/Chinese-reply.mdc`
- `.cursor/rules/backend-architecture-and-conventions.mdc`
- `.cursor/rules/frontend-architecture-and-conventions.mdc`
- `.cursor/rules/frontend-locales-single-quotes.mdc`
- `.cursor/rules/karpathy-guidelines.mdc`
- `.cursor/rules/think-docs-convention.mdc`
- `.cursor/rules/ui-icons-and-toast-theme.mdc`
- `.cursor/rules/windows-focus-api.mdc`
- `.cursor/skills/i18n-check/SKILL.md`
- `.cursor/skills/i18n-check/scripts/apply_en_translations.py`
- `.cursor/skills/i18n-check/scripts/auto_translate.py`
- `.cursor/skills/i18n-check/scripts/batch_import.py`
- `.cursor/skills/i18n-check/scripts/compare_backend.py`
- `.cursor/skills/i18n-check/scripts/compare_frontend.py`
- `.cursor/skills/i18n-check/scripts/export_translations.py`
- `.cursor/skills/i18n-check/scripts/fill_backend.py`
- `.cursor/skills/i18n-check/scripts/fill_frontend.py`
- `.cursor/skills/i18n-check/scripts/format_backend.py`
- `.cursor/skills/i18n-check/scripts/format_frontend.py`
- `.cursor/skills/i18n-check/scripts/generate_translation_prompts.py`
- `.cursor/skills/i18n-check/scripts/get_cjk_translations.py`
- `.cursor/skills/i18n-check/scripts/import_all_translations.py`
- `.cursor/skills/i18n-check/scripts/import_bn_bd.py`
- `.cursor/skills/i18n-check/scripts/import_cjk_translations.py`
- `.cursor/skills/i18n-check/scripts/import_en_us.py`
- `.cursor/skills/i18n-check/scripts/import_translations.py`
- `.cursor/skills/i18n-check/scripts/load_baseline.py`
- `.cursor/skills/i18n-check/scripts/translate_with_ai.py`
- `.cursor/skills/i18n-check/scripts/translate_with_deep.py`
- `.cursor/skills/readme-from-docx/SKILL.md`
- `.cursor/skills/readme-from-docx/reference.md`
- `AGENTS.md`
- `frontend/src/assets/icons/mcp-market/bigmodel.png`
- `frontend/src/assets/icons/mcp-market/composio.png`
- `frontend/src/assets/icons/mcp-market/github.png`
- `frontend/src/assets/icons/mcp-market/glama.png`
- `frontend/src/assets/icons/mcp-market/higress.png`
- `frontend/src/assets/icons/mcp-market/mcp-so.png`
- `frontend/src/assets/icons/mcp-market/modelscope.png`
- `frontend/src/assets/icons/mcp-market/pulsemcp.png`
- `frontend/src/assets/icons/mcp-market/smithery.png`
- `frontend/src/assets/icons/mcp.svg`
- `frontend/src/assets/icons/skills.svg`
- `frontend/src/pages/skill-market/SkillMarketPage.vue`
- `frontend/src/pages/skills/SkillsPage.vue`
- `internal/eino/agent/skill.go`
- `internal/eino/agent/skill_advisor.go`
- `internal/eino/tools/mcp.go`
- `internal/eino/tools/skill_management.go`
- `internal/eino/tools/skill_management_nonwindows.go`
- `internal/eino/tools/skill_management_windows.go`
- `internal/openclaw/skills/service.go`
- `internal/services/assistantmcp/chat_bridge.go`
- `internal/services/assistantmcp/service.go`
- `internal/services/librarymcp/service.go`
- `internal/services/mcp/service.go`
- `internal/services/mcp/service_nonwindows.go`
- `internal/services/mcp/service_windows.go`
- `internal/services/skillmarket/cache.go`
- `internal/services/skillmarket/service.go`
- `internal/services/skillmarket/sync.go`
- `internal/services/skillmarket/sync_test.go`
- `internal/services/skills/builtin.go`
- `internal/services/skills/clawhub.go`
- `internal/services/skills/service.go`
- `internal/sqlite/migrations/202603021200_add_skills_settings.go`
- `internal/sqlite/migrations/202603031000_add_installed_skills.go`
- `internal/sqlite/migrations/202603051000_add_mcp_settings.go`
- `internal/sqlite/migrations/202603051100_create_mcp_servers.go`
- `internal/sqlite/migrations/202603091000_add_agent_mcp_fields.go`
- `internal/sqlite/migrations/202603091100_add_mcp_server_description.go`
- `internal/sqlite/migrations/202603101000_add_agent_mcp_server_enabled_ids.go`
- `internal/sqlite/migrations/202603121000_create_assistant_mcp_tables.go`
- `internal/sqlite/migrations/202603171000_enable_mcp_by_default.go`
- ... 4 more

### 스펙/템플릿/명령/스킬 후보

- `.cursor/commands/gitc.md`
- `.cursor/commands/review.md`
- `.cursor/commands/self-test.md`
- `.cursor/skills/i18n-check/SKILL.md`
- `.cursor/skills/i18n-check/scripts/apply_en_translations.py`
- `.cursor/skills/i18n-check/scripts/auto_translate.py`
- `.cursor/skills/i18n-check/scripts/batch_import.py`
- `.cursor/skills/i18n-check/scripts/compare_backend.py`
- `.cursor/skills/i18n-check/scripts/compare_frontend.py`
- `.cursor/skills/i18n-check/scripts/export_translations.py`
- `.cursor/skills/i18n-check/scripts/fill_backend.py`
- `.cursor/skills/i18n-check/scripts/fill_frontend.py`
- `.cursor/skills/i18n-check/scripts/format_backend.py`
- `.cursor/skills/i18n-check/scripts/format_frontend.py`
- `.cursor/skills/i18n-check/scripts/generate_translation_prompts.py`
- `.cursor/skills/i18n-check/scripts/get_cjk_translations.py`
- `.cursor/skills/i18n-check/scripts/import_all_translations.py`
- `.cursor/skills/i18n-check/scripts/import_bn_bd.py`
- `.cursor/skills/i18n-check/scripts/import_cjk_translations.py`
- `.cursor/skills/i18n-check/scripts/import_en_us.py`
- `.cursor/skills/i18n-check/scripts/import_translations.py`
- `.cursor/skills/i18n-check/scripts/load_baseline.py`
- `.cursor/skills/i18n-check/scripts/translate_with_ai.py`
- `.cursor/skills/i18n-check/scripts/translate_with_deep.py`
- `.cursor/skills/readme-from-docx/SKILL.md`
- `.cursor/skills/readme-from-docx/reference.md`
- `frontend/src/pages/skills/SkillsPage.vue`
- `internal/openclaw/skills/service.go`
- `internal/services/skills/builtin.go`
- `internal/services/skills/clawhub.go`
- `internal/services/skills/service.go`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `frontend/tests/e2e/model-provider.spec.ts`
- `frontend/tests/setup/chatclaw-launcher.ts`
- `frontend/tests/setup/chatclaw-teardown.ts`

### CI/Docker 후보

- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 385 |
| .vue | 240 |
| .ts | 110 |
| .svg | 104 |
| .png | 71 |
| .md | 37 |
| .json | 22 |
| .py | 20 |
| .mdc | 8 |
| .html | 5 |
| .m | 4 |
| .js | 3 |
| .yaml | 3 |
| .css | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `frontend/src/ 내부 책임 분리`
- `internal/ 내부 책임 분리`
- `internal/services/ 내부 책임 분리`
- `.cursor/commands/gitc.md 스펙/명령 의미`
- `.cursor/commands/review.md 스펙/명령 의미`
- `.cursor/commands/self-test.md 스펙/명령 의미`
- `.cursor/skills/i18n-check/SKILL.md 스펙/명령 의미`
- `.cursor/skills/i18n-check/scripts/apply_en_translations.py 스펙/명령 의미`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `frontend/package.json 실행 스크립트와 패키지 경계`
- `frontend/pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `frontend/pnpm-workspace.yaml 실행 스크립트와 패키지 경계`
- `frontend/tsconfig.json 실행 스크립트와 패키지 경계`

