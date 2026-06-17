# nanbingxyz/5ire 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/nanbingxyz__5ire |
| remote | https://github.com/nanbingxyz/5ire |
| HEAD | c7fabb9 (2026-06-17) Merge pull request #428 from RheagalFire/feat/add-litellm-provider |
| branch | main |
| groups | llm-wiki-100 |
| files | 478 |
| dirs | 85 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Before to activating tools feature, ensure the following components are installed:`, `💪 Getting involved`, `💬 Community`, `Features`, `⚒️ Support Tools via MCP Servers`, `💡 Local Knowledge Base`, `📈 Usage Analytics`, `✨ Prompts Library`, `🔖 Bookmarks`, `🔍 Quick Search`, `Discover Exceptional MCP Servers`

> <div align="center" <a href="https //github.com/nanbingxyz/5ire" <img src="https //5ire.app/logo.png" alt="Logo" width="120" </a <br / <span (pronounced "fai er")</span <h1 A Sleek AI Assistant & MCP Client</h1 <div <a href="https //modelcontextprotocol.io/clients" target=" blank" <img src="https //badge.mcpx.dev/?type=client" / </a <img src="https //badge.mcpx.dev/?type=client&features=tools,prompts" / <a href="https //discord.gg/ADfBTGd5jd" <img src="https //dcbadge.limes.pink/api/server/ADfBTGd5jd?style=flat&theme=clean" alt="5ire discord server"/ </a <img src="https //img.shields.io/badge/price free brightgreen.svg"/ <a href="https //linkedin.com/in/nanbing" target=" blank" <img src="https //custom icon badges.demolab.com/badge/LinkedIn 0A66C2?logo=linkedin white&logoColor=fff" alt="follow on LinkedIn" </a <img src="https //img.shields.io/badge/PRs welcome brightgreen.svg"/ <a href="

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .better-commits.json | file |
| .editorconfig | file |
| .erb | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| biome.json | file |
| build | dir |
| CODE_OF_CONDUCT.md | file |
| DEVELOPMENT.md | file |
| docs | dir |
| drizzle | dir |
| drizzle.config.ts | file |
| INSTALLATION.md | file |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| patches | dir |
| postcss.config.js | file |
| public | dir |
| README.md | file |
| rsbuild.config.ts | file |
| scripts | dir |
| src | dir |
| tailwind.config.js | file |
| test | dir |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 389 |
| test/ | 30 |
| drizzle/ | 25 |
| (root) | 17 |
| public/ | 7 |
| .github/ | 4 |
| scripts/ | 2 |
| .erb/ | 1 |
| .husky/ | 1 |
| docs/ | 1 |
| patches/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 389 | preferred |
| docs/ | 1 | preferred |
| test/ | 30 | preferred |
| scripts/ | 2 | preferred |
| src/renderer/ | 144 | large |
| src/assets/ | 81 | large |
| src/main/ | 67 | large |
| src/renderer/pages/ | 63 | large |
| src/assets/css/ | 62 | large |
| src/renderer/components/ | 41 | large |
| src/intellichat/ | 32 | large |
| drizzle/ | 25 | large |
| drizzle/migrations/ | 25 | large |
| src/main/services/ | 24 | large |
| src/intellichat/services/ | 20 | large |
| src/renderer/next/ | 20 | large |
| src/providers/ | 19 | large |
| src/assets/images/ | 17 | large |
| drizzle/migrations/meta/ | 13 | large |
| src/main/bridge/ | 13 | large |
| src/stores/ | 12 | large |
| src/hooks/ | 11 | large |
| src/renderer/apps/ | 10 | large |
| src/types/ | 10 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | 5ire | postinstall, install:deps, lint, test, prepare, format, check, build, build:watch, dev:build, dev:start, dev, package, package:publish, generate:drizzle | @axiomhq/js, @dnd-kit/core, @dnd-kit/modifiers, @electric-sql/pglite, @fluentui-contrib/react-data-grid-react-window, @fluentui/react-components, @fluentui/react-datepicker-compat, @fluentui/react-icons, @lancedb/lancedb, @modelcontextprotocol/sdk, @postlight/parser, @sentry/electron, @sentry/react, @supabase/supabase-js |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/ARCHITECTURE.md`

### 에이전트 지침 후보

- `src/intellichat/mcp/ContentBlockConverter.ts`
- `src/intellichat/mcp/UnsupportedError.ts`
- `src/intellichat/mcp/ids.ts`
- `src/main/bridge/mcp-connections-manager-bridge.ts`
- `src/main/bridge/mcp-servers-manager-bridge.ts`
- `src/main/mcp.ts`
- `src/main/services/mcp-completion-handler.ts`
- `src/main/services/mcp-connections-manager.ts`
- `src/main/services/mcp-content-converter.ts`
- `src/main/services/mcp-prompts-manager.ts`
- `src/main/services/mcp-resources-manager.ts`
- `src/main/services/mcp-servers-manager.ts`
- `src/main/services/mcp-tools-manager.ts`
- `src/mcp.config.ts`
- `src/types/mcp.d.ts`
- `src/utils/mcp.ts`
- `test/utils/mcp.test.ts`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/assets/AI-Career.pdf`
- `test/assets/SOTA.md`
- `test/assets/出师表.txt`
- `test/assets/探索智慧的疆界.pptx`
- `test/assets/演示项目.xlsx`
- `test/assets/长恨歌.docx`
- `test/data/05-versions-space.pdf`
- `test/intellichat/anthropic-chat-service.spec.ts`
- `test/intellichat/reader.spec.ts`
- `test/intellichat/validators.spec.ts`
- `test/main/docloader.spec.ts`
- `test/main/embedder.spec.ts`
- `test/main/knowledge.spec.ts`
- `test/main/util.spec.ts`
- `test/mocks/electron-log.js`
- `test/mocks/electron.js`
- `test/resource/test.csv`
- `test/resource/test.htm`
- `test/resource/test.html`
- `test/resource/test.json`
- `test/resource/test.md`
- `test/resource/test.txt`
- `test/resource/test.xml`
- `test/resource/test.yaml`
- `test/resource/test.yml`
- `test/utils/command-line.test.ts`
- `test/utils/mcp.test.ts`
- `test/utils/token.test.ts`
- `test/utils/util.test.ts`
- `test/utils/validators.test.ts`

### CI/Docker 후보

- `.github/workflows/auto-release.yml`
- `.github/workflows/daily-summary.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 203 |
| .tsx | 107 |
| .json | 26 |
| .woff2 | 22 |
| .ttf | 20 |
| .woff | 20 |
| .png | 19 |
| .sql | 12 |
| .scss | 11 |
| .md | 9 |
| .js | 5 |
| .yml | 3 |
| .css | 2 |
| .pdf | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `src/renderer/ 내부 책임 분리`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

