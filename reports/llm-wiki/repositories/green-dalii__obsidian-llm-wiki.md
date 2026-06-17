# green-dalii/obsidian-llm-wiki 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/green-dalii__obsidian-llm-wiki |
| remote | https://github.com/green-dalii/obsidian-llm-wiki |
| HEAD | 4f688c5 (2026-06-17) Merge pull request #140 from green-dalii/docs/post-refactor-sync |
| branch | main |
| groups | llm-wiki-100 |
| files | 152 |
| dirs | 25 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🧠 Karpathy LLM Wiki Plugin for Obsidian`, `📑 Contents`, `💡 What is LLM-Wiki?`, `⚡ Why Obsidian + LLM-Wiki?`, `🚀 Quick Start`, `📦 Installation`, `🔄 Updating`, `🔑 Configure an LLM Provider`, `🎮 Usage`, `⚠️ Upgrading from an Older Version?`, `⚡ What's New in v1.19.1`, `⌨️ Commands`, `📖 Example`, `Machine Learning`, `Types`, `Supervised Learning`, `Basic Information`, `Description`

> 🧠 Karpathy LLM Wiki Plugin for Obsidian AI powered structured knowledge base that ingests your notes and generates a connected Wiki — based on Andrej Karpathy's LLM Wiki concept. Obsidian official score 95/100 Native support for 8 languages Actively maintained, continuously evolving English 中文文档 日本語 한국어 Deutsch Français Español Português Official Site Blog Feedback & Discussion 🤖 Explore Repo with DeepWiki ⚡ Quick Update Reminder This project evolves rapidly with frequent bug fixes, performance improvements, new features, and UX optimizations. We recommend updating to the latest version regularly in Obsidian ( Settings → Community plugins → Check for updates ), or enabling automatic plugin updates to ensure the best experience. 📑 Contents 💡 What is LLM Wiki? ⚡ Why Obsidian + LLM Wiki? 🚀 Quick Start 📦 Installation 🔄 Updating 🔑 Configure an LLM Provider 🎮 Usage ⚠️ Upgrading from a

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| esbuild.config.mjs | file |
| eslint.config.mjs | file |
| LICENSE | file |
| manifest.json | file |
| package-lock.json | file |
| package.json | file |
| pnpm-lock.yaml | file |
| README.md | file |
| ROADMAP.md | file |
| src | dir |
| styles.css | file |
| tsconfig.json | file |
| versions.json | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 123 |
| (root) | 18 |
| docs/ | 8 |
| .github/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 123 | preferred |
| docs/ | 8 | preferred |
| src/__tests__/ | 43 | large |
| src/wiki/ | 31 | large |
| src/core/ | 27 | large |
| src/wiki/lint/ | 17 | large |
| src/__tests__/core/ | 16 | large |
| src/__tests__/wiki/ | 11 | large |
| src/texts/ | 8 | large |
| src/wiki/prompts/ | 7 | large |
| src/__tests__/root/ | 6 | large |
| src/__tests__/__support__/ | 4 | large |
| src/ui/ | 4 | large |
| .github/ | 3 | large |
| src/schema/ | 3 | large |
| .github/ISSUE_TEMPLATE/ | 2 | large |
| src/__tests__/__fixtures__/ | 2 | large |
| src/__tests__/schema/ | 2 | large |
| src/__tests__/ui/ | 2 | large |
| .github/workflows/ | 1 | large |
| docs/assets/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | karpathywiki | dev, build, build:dev, lint, test, test:watch |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/README_CN.md`
- `docs/README_DE.md`
- `docs/README_ES.md`
- `docs/README_FR.md`
- `docs/README_JA.md`
- `docs/README_KO.md`
- `docs/README_PT.md`
- `docs/assets/llm_wiki_banner.webp`

### 에이전트 지침 후보

- `CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/__tests__/__support__/factories.test.ts`
- `src/__tests__/core/arrays.test.ts`
- `src/__tests__/core/batch-limits.test.ts`
- `src/__tests__/core/conflict-resolver.test.ts`
- `src/__tests__/core/frontmatter.test.ts`
- `src/__tests__/core/i18n.test.ts`
- `src/__tests__/core/index-search.test.ts`
- `src/__tests__/core/json.test.ts`
- `src/__tests__/core/markdown.test.ts`
- `src/__tests__/core/rate-limit.test.ts`
- `src/__tests__/core/report.test.ts`
- `src/__tests__/core/slug.test.ts`
- `src/__tests__/core/sources-normalizer.test.ts`
- `src/__tests__/core/sse-parser.test.ts`
- `src/__tests__/core/tag-vocab.test.ts`
- `src/__tests__/core/token-cap.test.ts`
- `src/__tests__/core/truncation-retry.test.ts`
- `src/__tests__/root/constants.test.ts`
- `src/__tests__/root/llm-client-gemini-fallback.test.ts`
- `src/__tests__/root/llm-client-wrapper.test.ts`
- `src/__tests__/root/llm-client.test.ts`
- `src/__tests__/root/tag-chip-input.test.ts`
- `src/__tests__/root/wiki-init.test.ts`
- `src/__tests__/schema/analyze.test.ts`
- `src/__tests__/schema/default-schema.test.ts`
- `src/__tests__/ui/settings-classify.test.ts`
- `src/__tests__/ui/settings-thinkcache.test.ts`
- `src/__tests__/wiki/lint-fixes.test.ts`
- `src/__tests__/wiki/lint/duplicate-detection.test.ts`
- `src/__tests__/wiki/lint/fix-runners.test.ts`
- `src/__tests__/wiki/lint/preparation-phase.test.ts`
- `src/__tests__/wiki/lint/programmatic-phase.test.ts`
- `src/__tests__/wiki/lint/quote-grounding.test.ts`
- `src/__tests__/wiki/lint/report-builder.test.ts`
- `src/__tests__/wiki/lint/scanners.test.ts`
- `src/__tests__/wiki/page-factory-core.test.ts`
- `src/__tests__/wiki/page-factory.test.ts`
- `src/__tests__/wiki/source-analyzer.test.ts`
- `src/core/batch-limits.test.ts`
- `src/core/batch-merger.test.ts`
- `src/core/convergence-detector.test.ts`
- `src/core/dead-link-detector.test.ts`
- `src/core/orphan-matcher.test.ts`
- `src/core/prompt-builders.test.ts`
- `src/wiki/lint/duplicate-detection.test.ts`

### CI/Docker 후보

- `.github/workflows/release.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 122 |
| .md | 16 |
| .json | 6 |
| .mjs | 2 |
| .css | 1 |
| .gitignore | 1 |
| .webp | 1 |
| .yaml | 1 |
| .yml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `src/__tests__/ 내부 책임 분리`
- `src/wiki/ 내부 책임 분리`
- `src/core/ 내부 책임 분리`
- `package.json 실행 스크립트와 패키지 경계`
- `pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

