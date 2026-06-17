# zosmaai/pi-llm-wiki 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/zosmaai__pi-llm-wiki |
| remote | https://github.com/zosmaai/pi-llm-wiki |
| HEAD | 4314a2b (2026-06-10) fix(#81): wiki_watch emits real crontab line, not fictional schedule_prompt (#86) |
| branch | main |
| groups | llm-wiki-100 |
| files | 110 |
| dirs | 18 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `@zosmaai/pi-llm-wiki`, `Quick Start`, `Why This Package?`, `Features`, `Tools`, `Slash Commands`, `Layered Vault Architecture`, `Quick Start (Detailed)`, `1) Create a new wiki`, `2) Capture a source`, `3) Integrate the source`, `4) Query the wiki`, `Vault Layout`, `Ownership Model`, `Linking & Citation Style`, `Internal Navigation`, `Factual Citations`, `Guardrails`

> <div align="center" @zosmaai/pi llm wiki English <a href="./README.zh.md" 中文</a <a href="./README.es.md" Español</a <a href="./README.ja.md" 日本語</a <a href="./README.de.md" Deutsch</a <a href="./README.fr.md" Français</a <a href="./README.pt.md" Português</a <a href="./README.ru.md" Русский</a <a href="./README.ko.md" 한국어</a <a href="./README.hi.md" हिंदी</a </div <br/ <div align="center" <a href="https //github.com/zosmaai/pi llm wiki/stargazers" <img src="./assets/thank you for the star.png" alt="Thank you for starring pi llm wiki!" width="100%" / </a <br/ <sub If you find pi llm wiki useful, <a href="https //github.com/zosmaai/pi llm wiki" ⭐ star the repo</a — it lets us know we're building something that matters. </sub </div <br/ Self maintaining, Obsidian compatible knowledge base for pi. Follows Andrej Karpathy's LLM Wiki pattern. Turn raw sources (URLs, PDFs, markdown, JSON, XML) 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .coderabbit.yaml | file |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| assets | dir |
| biome.json | file |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| extensions | dir |
| LICENSE | file |
| mcp | dir |
| package-lock.json | file |
| package.json | file |
| plans | dir |
| prompts | dir |
| README.de.md | file |
| README.es.md | file |
| README.fr.md | file |
| README.hi.md | file |
| README.ja.md | file |
| README.ko.md | file |
| README.md | file |
| README.pt.md | file |
| README.ru.md | file |
| README.zh.md | file |
| scripts | dir |
| skills | dir |
| test | dir |
| tsconfig.json | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| test/ | 25 |
| (root) | 21 |
| extensions/ | 20 |
| prompts/ | 12 |
| skills/ | 10 |
| assets/ | 7 |
| docs/ | 6 |
| .github/ | 5 |
| scripts/ | 2 |
| mcp/ | 1 |
| plans/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 6 | preferred |
| test/ | 25 | preferred |
| skills/ | 10 | preferred |
| scripts/ | 2 | preferred |
| extensions/ | 20 | preferred |
| extensions/llm-wiki/ | 20 | large |
| extensions/llm-wiki/lib/ | 19 | large |
| prompts/ | 12 | large |
| skills/llm-wiki/ | 10 | large |
| skills/llm-wiki/templates/ | 9 | large |
| assets/ | 7 | large |
| .github/ | 5 | large |
| .github/workflows/ | 4 | large |
| .github/codeql/ | 1 | large |
| docs/plans/ | 1 | large |
| mcp/ | 1 | large |
| plans/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @zosmaai/pi-llm-wiki | test, test:watch, test:coverage, typecheck, lint, lint:fix, release:patch, release:minor, release:major, release:push | @modelcontextprotocol/server, node-html-markdown |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `assets/README.md`
- `docs/api.md`
- `docs/architecture.md`
- `docs/commands.md`
- `docs/configuration.md`
- `docs/obsidian.md`
- `docs/plans/auto-bootstrap-plan.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `mcp/index.ts`
- `prompts/wiki-skills.md`
- `skills/llm-wiki/SKILL.md`
- `skills/llm-wiki/templates/DASHBOARD.md`
- `skills/llm-wiki/templates/INDEX.md`
- `skills/llm-wiki/templates/LOG.md`
- `skills/llm-wiki/templates/config.yaml`
- `skills/llm-wiki/templates/pages/analysis.md`
- `skills/llm-wiki/templates/pages/concept.md`
- `skills/llm-wiki/templates/pages/entity.md`
- `skills/llm-wiki/templates/pages/source.md`
- `skills/llm-wiki/templates/pages/synthesis.md`

### 스펙/템플릿/명령/스킬 후보

- `skills/llm-wiki/templates/DASHBOARD.md`
- `skills/llm-wiki/templates/INDEX.md`
- `skills/llm-wiki/templates/LOG.md`
- `skills/llm-wiki/templates/config.yaml`
- `skills/llm-wiki/templates/pages/analysis.md`
- `skills/llm-wiki/templates/pages/concept.md`
- `skills/llm-wiki/templates/pages/entity.md`
- `skills/llm-wiki/templates/pages/source.md`
- `skills/llm-wiki/templates/pages/synthesis.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/background-tools.test.ts`
- `test/e2e-binary-detection.test.ts`
- `test/e2e-docx.test.ts`
- `test/e2e-guardrails.test.ts`
- `test/e2e-html-normalization.test.ts`
- `test/embeddings.test.ts`
- `test/helpers.ts`
- `test/indexing.test.ts`
- `test/ingest-tool.test.ts`
- `test/ingest-worker.test.ts`
- `test/model-selection.test.ts`
- `test/observation.test.ts`
- `test/package-structure.test.ts`
- `test/personal-wiki-paths.test.ts`
- `test/recall.test.ts`
- `test/retro.test.ts`
- `test/runtime.test.ts`
- `test/source-capture.test.ts`
- `test/trajectory-flag.test.ts`
- `test/trajectory-integration.test.ts`
- `test/trajectory.test.ts`
- `test/visible-activity.test.ts`
- `test/wiki-structure.test.ts`
- `test/wiki-watch.test.ts`
- `test/xref-config.test.ts`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/contributors.yml`
- `.github/workflows/release.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 47 |
| .md | 43 |
| .yml | 5 |
| .json | 4 |
| .png | 3 |
| .js | 2 |
| .mmd | 2 |
| .yaml | 2 |
| .gitignore | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `extensions/ 내부 책임 분리`
- `skills/llm-wiki/templates/DASHBOARD.md 스펙/명령 의미`
- `skills/llm-wiki/templates/INDEX.md 스펙/명령 의미`
- `skills/llm-wiki/templates/LOG.md 스펙/명령 의미`
- `skills/llm-wiki/templates/config.yaml 스펙/명령 의미`
- `skills/llm-wiki/templates/pages/analysis.md 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

