# marswangyang/personal-ai-memory 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/marswangyang__personal-ai-memory |
| remote | https://github.com/marswangyang/personal-ai-memory |
| HEAD | bc519e5 (2026-03-24) Merge pull request #6 from marswangyang/issue#4 |
| branch | main |
| groups | llm-wiki-100 |
| files | 101 |
| dirs | 27 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Personal AI Memory: Local-First RAG Extension for LLM`, `Demo`, `Installation`, `For Users — Chrome Web Store`, `Manual Install from Release`, `For Developers — Build from Source`, `Fork this repository to your own GitHub account`, `Development mode — auto-rebuilds on every save`, `Production build`, `output: build/chrome-mv3-prod/`, `Features at a Glance`, `How It Works`, `Search Algorithm (detail)`, `How to Export Chat History?`, `ChatGPT`, `Gemini`, `Claude`, `Perplexity`

> <div align="center" Personal AI Memory Local First RAG Extension for LLM Your conversations, remembered. Privately. 🌐 繁體中文 简体中文 English 日本語 한국어 Español Français Deutsch <a href="https //www.producthunt.com/products/personal ai memory?embed=true&amp;utm source=badge featured&amp;utm medium=badge&amp;utm campaign=badge personal ai memory" target=" blank" rel="noopener noreferrer" <img alt="Personal AI Memory Captures and stores your chat from various AI platforms Product Hunt" width="250" height="54" src="https //api.producthunt.com/widgets/embed image/v1/featured.svg?post id=1089387&amp;theme=light&amp;t=1772644496610" </a </div A Chrome extension that silently captures your ChatGPT / Claude / Gemini / Perplexity / Grok conversations and stores them as private, locally indexed semantic memories — with a one click Recall button to inject relevant context back into new chats. 100% local. N

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .npmrc | file |
| assets | dir |
| CHANGELOG.md | file |
| LICENSE | file |
| package.json | file |
| plasmo.config.ts | file |
| pnpm-lock.yaml | file |
| README-multi-lan | dir |
| README.md | file |
| src | dir |
| tests | dir |
| tsconfig.json | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 61 |
| tests/ | 19 |
| (root) | 10 |
| README-multi-lan/ | 8 |
| .github/ | 2 |
| assets/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 61 | preferred |
| tests/ | 19 | preferred |
| src/background/ | 16 | large |
| tests/unit/ | 16 | large |
| src/popup/ | 10 | large |
| src/contents/ | 9 | large |
| src/popup/components/ | 9 | large |
| README-multi-lan/ | 8 | large |
| src/utils/ | 7 | large |
| src/background/adapters/ | 6 | large |
| src/importers/ | 6 | large |
| src/i18n/ | 5 | large |
| tests/unit/adapters/ | 5 | large |
| tests/unit/importers/ | 4 | large |
| src/ui/ | 3 | large |
| tests/unit/background/ | 3 | large |
| tests/unit/utils/ | 3 | large |
| .github/ | 2 | large |
| src/tabs/ | 2 | large |
| src/types/ | 2 | large |
| .github/ISSUE_TEMPLATE/ | 1 | large |
| .github/workflows/ | 1 | large |
| assets/ | 1 | large |
| src/constants/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | personal-ai-memory | dev, build, build:prod, test, test:watch, test:integration, test:e2e | @plasmohq/storage, @xenova/transformers, dexie, lucide-react, minisearch, react, react-dom |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__fixtures__/records.ts`
- `tests/__mocks__/chrome.ts`
- `tests/setup.ts`
- `tests/unit/adapters/chatgpt.test.ts`
- `tests/unit/adapters/claude.test.ts`
- `tests/unit/adapters/gemini.test.ts`
- `tests/unit/adapters/grok.test.ts`
- `tests/unit/adapters/perplexity.test.ts`
- `tests/unit/background/base.test.ts`
- `tests/unit/background/chunkText.test.ts`
- `tests/unit/background/db.test.ts`
- `tests/unit/i18n/lang-storage.test.ts`
- `tests/unit/importers/chatgptConversations.test.ts`
- `tests/unit/importers/claudeConversations.test.ts`
- `tests/unit/importers/geminiTakeout.test.ts`
- `tests/unit/importers/grokConversations.test.ts`
- `tests/unit/utils/message-passing.test.ts`
- `tests/unit/utils/onboarding-highlight.test.ts`
- `tests/unit/utils/trie.test.ts`

### CI/Docker 후보

- `.github/workflows/ci.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 60 |
| .tsx | 22 |
| .md | 10 |
| .json | 2 |
| .yml | 2 |
| .gitignore | 1 |
| .npmrc | 1 |
| .png | 1 |
| .yaml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `src/background/ 내부 책임 분리`
- `tests/unit/ 내부 책임 분리`
- `src/popup/ 내부 책임 분리`
- `package.json 실행 스크립트와 패키지 경계`
- `pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

