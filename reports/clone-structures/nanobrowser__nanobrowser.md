# nanobrowser/nanobrowser 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/nanobrowser__nanobrowser |
| remote | https://github.com/nanobrowser/nanobrowser |
| HEAD | 322384f (2025-11-24) update extension description |
| branch | master |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 256 |
| dirs | 81 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🌐 Nanobrowser`, `🔥Why Nanobrowser?`, `📊 Key Features`, `🌐 Browser Support`, `🚀 Quick Start`, `🔧 Manually Install Latest Version`, `🛠️ Build from Source`, `🤖 Choosing Your Models`, `Better Performance`, `Cost-Effective Configuration`, `Local Models`, `💡 See It In Action`, `🛠️ Roadmap`, `🤝 Contributing`, `🔒 Security`, `💬 Community`, `👏 Acknowledgments`, `📄 License`

> <h1 align="center" <img src="https //github.com/user attachments/assets/ec60b0c4 87ba 48f4 981a c55ed0e8497b" height="100" width="375" alt="banner" / <br </h1 <div align="center" <img src="https //deepwiki.com/badge.svg" height="28" alt="Ask DeepWiki" </div 🌐 Nanobrowser Nanobrowser is an open source AI web automation tool that runs in your browser. A free alternative to OpenAI Operator with flexible LLM options and multi agent system. ⬇️ Get Nanobrowser from Chrome Web Store for free 👏 Join the community in Discord X 🌟 Loving Nanobrowser? Give us a star and help spread the word! ❤️ Support the project by sponsoring us every contribution helps keep Nanobrowser free and open source! <div align="center" <img src="https //github.com/user attachments/assets/112c4385 7b03 4b81 a352 4f348093351b" width="600" alt="Nanobrowser Demo GIF" / <p <em Nanobrowser's multi agent system analyzing Hugg

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .env.example | file |
| .eslintignore | file |
| .eslintrc | file |
| .example.env | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .npmrc | file |
| .nvmrc | file |
| .prettierignore | file |
| .prettierrc | file |
| .turbo | dir |
| AGENTS.md | other |
| chrome-extension | dir |
| CLAUDE.md | file |
| CONTRIBUTING.md | file |
| dist | dir |
| LICENSE | file |
| node_modules | dir |
| package.json | file |
| packages | dir |
| pages | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| PRIVACY.md | file |
| README-es.md | file |
| README-tr.md | file |
| README-zh-Hant.md | file |
| README.md | file |
| SECURITY.md | file |
| turbo.json | file |
| update_version.sh | file |
| UPDATE-PACKAGE-VERSIONS.md | file |
| vite-env.d.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 113 |
| chrome-extension/ | 54 |
| pages/ | 40 |
| (root) | 26 |
| .husky/ | 18 |
| .github/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 113 | preferred |
| chrome-extension/ | 54 | large |
| chrome-extension/src/ | 42 | large |
| chrome-extension/src/background/ | 42 | large |
| pages/ | 40 | large |
| packages/storage/ | 23 | large |
| pages/side-panel/ | 21 | large |
| .husky/ | 18 | large |
| packages/i18n/ | 18 | large |
| packages/storage/lib/ | 18 | large |
| .husky/_/ | 17 | large |
| packages/hmr/ | 16 | large |
| pages/options/ | 14 | large |
| packages/shared/ | 13 | large |
| packages/hmr/lib/ | 11 | large |
| pages/side-panel/src/ | 11 | large |
| packages/schema-utils/ | 10 | large |
| packages/ui/ | 10 | large |
| packages/dev-utils/ | 8 | large |
| pages/options/src/ | 8 | large |
| packages/shared/lib/ | 7 | large |
| chrome-extension/public/ | 6 | large |
| .github/ | 5 | large |
| packages/i18n/lib/ | 5 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `chrome-extension/package.json`
- `chrome-extension/tsconfig.json`
- `package.json`
- `packages/dev-utils/package.json`
- `packages/dev-utils/tsconfig.json`
- `packages/hmr/package.json`
- `packages/hmr/tsconfig.json`
- `packages/i18n/package.json`
- `packages/i18n/tsconfig.json`
- `packages/schema-utils/package.json`
- `packages/schema-utils/tsconfig.json`
- `packages/shared/package.json`
- `packages/shared/tsconfig.json`
- `packages/storage/package.json`
- `packages/storage/tsconfig.json`
- `packages/tailwind-config/package.json`
- `packages/tsconfig/package.json`
- `packages/ui/package.json`
- `packages/ui/tsconfig.json`
- `packages/vite-config/package.json`
- `packages/zipper/package.json`
- `packages/zipper/tsconfig.json`
- `pages/content/package.json`
- `pages/content/tsconfig.json`
- `pages/options/package.json`
- `pages/options/tsconfig.json`
- `pages/side-panel/package.json`
- `pages/side-panel/tsconfig.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `turbo.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| chrome-extension/package.json | chrome-extension | clean:node_modules, clean:turbo, clean, build, dev, test, lint, lint:fix, prettier, type-check | @extension/i18n, @extension/shared, @extension/storage, @langchain/anthropic, @langchain/cerebras, @langchain/core, @langchain/deepseek, @langchain/google-genai, @langchain/groq, @langchain/ollama, @langchain/openai, @langchain/xai, jsonrepair, posthog-js |
| package.json | nanobrowser | clean:bundle, clean:node_modules, clean:turbo, clean, clean:install, build, zip, dev, e2e, type-check, lint, lint:fix, prettier, prepare, update-version | eslint-plugin-tailwindcss, react, react-dom |
| packages/dev-utils/package.json | @extension/dev-utils | clean:bundle, clean:node_modules, clean:turbo, clean, ready, lint, lint:fix, prettier, type-check |  |
| packages/hmr/package.json | @extension/hmr | clean:bundle, clean:node_modules, clean:turbo, clean, build:tsc, build:rollup, ready, dev, lint, lint:fix, prettier, type-check |  |
| packages/i18n/package.json | @extension/i18n | clean:bundle, clean:node_modules, clean:turbo, clean, genenrate-i8n, ready, build, lint, lint:fix, prettier, type-check |  |
| packages/schema-utils/package.json | @extension/schema-utils | clean:bundle, clean:node_modules, clean:turbo, clean, ready, lint, lint:fix, prettier, type-check, example:convert, example:flatten |  |
| packages/shared/package.json | @extension/shared | clean:bundle, clean:node_modules, clean:turbo, clean, ready, lint, lint:fix, prettier, type-check |  |
| packages/storage/package.json | @extension/storage | clean:bundle, clean:node_modules, clean:turbo, clean, ready, lint, lint:fix, prettier, type-check |  |
| packages/tailwind-config/package.json | @extension/tailwindcss-config |  |  |
| packages/tsconfig/package.json | @extension/tsconfig |  |  |
| packages/ui/package.json | @extension/ui | clean:bundle, clean:node_modules, clean:turbo, clean, ready, lint, lint:fix, prettier, type-check | clsx, tailwind-merge |
| packages/vite-config/package.json | @extension/vite-config | clean:node_modules, clean |  |
| packages/zipper/package.json | @extension/zipper | clean:bundle, clean:node_modules, clean:turbo, clean, zip, ready, lint, lint:fix, prettier, type-check |  |
| pages/content/package.json | @extension/content-script | clean:node_modules, clean:turbo, clean, build, dev, lint, lint:fix, prettier, type-check | @extension/shared, @extension/storage |
| pages/options/package.json | @extension/options | clean:node_modules, clean:turbo, clean, build, dev, lint, lint:fix, prettier, type-check | @extension/shared, @extension/storage, @extension/ui, @extension/i18n, react-icons |
| pages/side-panel/package.json | @extension/sidepanel | clean:node_modules, clean:turbo, clean, build, dev, lint, lint:fix, prettier, type-check | react-icons, webextension-polyfill, @extension/shared, @extension/storage, @extension/i18n |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `packages/i18n/README.md`
- `packages/schema-utils/README.md`
- `packages/shared/README.md`
- `packages/ui/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

- `chrome-extension/src/background/agent/prompts/templates/common.ts`
- `chrome-extension/src/background/agent/prompts/templates/navigator.ts`
- `chrome-extension/src/background/agent/prompts/templates/planner.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 109 |
| .json | 36 |
| .tsx | 16 |
| .md | 13 |
| .mjs | 12 |
| .css | 7 |
| .eslintignore | 7 |
| .svg | 5 |
| .yml | 5 |
| .js | 4 |
| .mts | 4 |
| .gitignore | 3 |
| .html | 3 |
| .png | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `chrome-extension/ 내부 책임 분리`
- `chrome-extension/src/ 내부 책임 분리`
- `chrome-extension/src/background/ 내부 책임 분리`
- `pages/ 내부 책임 분리`
- `chrome-extension/src/background/agent/prompts/templates/common.ts 스펙/명령 의미`
- `chrome-extension/src/background/agent/prompts/templates/navigator.ts 스펙/명령 의미`
- `chrome-extension/src/background/agent/prompts/templates/planner.ts 스펙/명령 의미`
- `chrome-extension/package.json 실행 스크립트와 패키지 경계`
- `chrome-extension/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `packages/dev-utils/package.json 실행 스크립트와 패키지 경계`
- `packages/dev-utils/tsconfig.json 실행 스크립트와 패키지 경계`

