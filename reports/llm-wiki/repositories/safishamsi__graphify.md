# safishamsi/graphify 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/safishamsi__graphify |
| remote | https://github.com/safishamsi/graphify |
| HEAD | 9e0b876 (2026-06-17) Release 0.8.41 |
| branch | v8 |
| groups | llm-wiki-100 |
| files | 582 |
| dirs | 68 |
| stack | Python, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Prerequisites`, `or install uv:`, `Install`, `Recommended (uv puts graphify on PATH automatically):`, `Alternatives:`, `Pick your platform`, `Optional extras`, `Make your assistant always use the graph`, `What's in the report`, `What files it handles`, `Common commands`, `Ignoring files`, `.graphifyignore`, `only index src/, ignore everything else`, `Team setup`, `graphify-out/cache/         # optional: commit for speed, skip to keep repo small`, `Using the graph directly`, `query the graph from the terminal`

> <p align="center" <a href="https //graphifylabs.ai" <img src="https //raw.githubusercontent.com/safishamsi/graphify/v4/docs/logo text.svg" width="260" height="64" alt="Graphify"/ </a </p <p align="center" 🇺🇸 <a href="README.md" English</a 🇨🇳 <a href="docs/translations/README.zh CN.md" 简体中文</a 🇯🇵 <a href="docs/translations/README.ja JP.md" 日本語</a 🇰🇷 <a href="docs/translations/README.ko KR.md" 한국어</a 🇩🇪 <a href="docs/translations/README.de DE.md" Deutsch</a 🇫🇷 <a href="docs/translations/README.fr FR.md" Français</a 🇪🇸 <a href="docs/translations/README.es ES.md" Español</a 🇮🇳 <a href="docs/translations/README.hi IN.md" हिन्दी</a 🇧🇷 <a href="docs/translations/README.pt BR.md" Português</a 🇷🇺 <a href="docs/translations/README.ru RU.md" Русский</a 🇸🇦 <a href="docs/translations/README.ar SA.md" العربية</a 🇮🇷 <a href="docs/translations/README.fa IR.md" فارسی</a 🇮🇹 <a hr

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| AGENTS.md | file |
| ARCHITECTURE.md | file |
| CHANGELOG.md | file |
| Dockerfile | file |
| docs | dir |
| graphify | dir |
| LICENSE | file |
| pyproject.toml | file |
| README.md | file |
| SECURITY.md | file |
| tests | dir |
| tools | dir |
| uv.lock | file |
| worked | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 166 |
| graphify/ | 164 |
| tools/ | 163 |
| docs/ | 37 |
| worked/ | 36 |
| (root) | 13 |
| .github/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 37 | preferred |
| tests/ | 166 | preferred |
| tools/ | 163 | preferred |
| graphify/ | 164 | large |
| tools/skillgen/ | 162 | large |
| tools/skillgen/expected/ | 125 | large |
| graphify/skills/ | 104 | large |
| tests/fixtures/ | 74 | large |
| worked/ | 36 | large |
| tools/skillgen/fragments/ | 33 | large |
| docs/translations/ | 30 | large |
| worked/httpx/ | 10 | large |
| graphify/skills/amp/ | 8 | large |
| graphify/skills/claude/ | 8 | large |
| graphify/skills/claw/ | 8 | large |
| graphify/skills/codex/ | 8 | large |
| graphify/skills/copilot/ | 8 | large |
| graphify/skills/droid/ | 8 | large |
| graphify/skills/kilo/ | 8 | large |
| graphify/skills/kiro/ | 8 | large |
| graphify/skills/opencode/ | 8 | large |
| graphify/skills/pi/ | 8 | large |
| graphify/skills/trae/ | 8 | large |
| graphify/skills/vscode/ | 8 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `pyproject.toml`
- `tests/fixtures/crate_a/Cargo.toml`
- `tests/fixtures/crate_b/Cargo.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | graphifyy | false | true | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| tests/fixtures/crate_a/Cargo.toml | crate_a | false |  |
| tests/fixtures/crate_b/Cargo.toml | crate_b | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/docker-mcp-sqlite.md`
- `docs/how-it-works.md`
- `docs/logo-icon.svg`
- `docs/logo-text.svg`
- `docs/node-summaries-rfc.md`
- `docs/superpowers/plans/2026-05-04-incremental-updates-dedup.md`
- `docs/superpowers/specs/2026-05-04-incremental-updates-dedup-design.md`
- `docs/translations/README.ar-SA.md`
- `docs/translations/README.cs-CZ.md`
- `docs/translations/README.da-DK.md`
- `docs/translations/README.de-DE.md`
- `docs/translations/README.el-GR.md`
- `docs/translations/README.es-ES.md`
- `docs/translations/README.fa-IR.md`
- `docs/translations/README.fi-FI.md`
- `docs/translations/README.fil-PH.md`
- `docs/translations/README.fr-FR.md`
- `docs/translations/README.hi-IN.md`
- `docs/translations/README.hu-HU.md`
- `docs/translations/README.id-ID.md`
- `docs/translations/README.it-IT.md`
- `docs/translations/README.ja-JP.md`
- `docs/translations/README.ko-KR.md`
- `docs/translations/README.nl-NL.md`
- `docs/translations/README.no-NO.md`
- `docs/translations/README.pl-PL.md`
- `docs/translations/README.pt-BR.md`
- `docs/translations/README.ro-RO.md`
- `docs/translations/README.ru-RU.md`
- `docs/translations/README.sv-SE.md`
- `docs/translations/README.th-TH.md`
- `docs/translations/README.tr-TR.md`
- `docs/translations/README.uk-UA.md`
- `docs/translations/README.uz-UZ.md`
- `docs/translations/README.vi-VN.md`
- `docs/translations/README.zh-CN.md`
- `docs/translations/README.zh-TW.md`
- `worked/example/README.md`
- `worked/httpx/README.md`
- `worked/karpathy-repos/README.md`
- `worked/mixed-corpus/README.md`
- `worked/rsl-siege-manager/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `docs/docker-mcp-sqlite.md`
- `graphify/mcp_ingest.py`
- `graphify/skill-aider.md`
- `graphify/skill-amp.md`
- `graphify/skill-claw.md`
- `graphify/skill-codex.md`
- `graphify/skill-copilot.md`
- `graphify/skill-devin.md`
- `graphify/skill-droid.md`
- `graphify/skill-kilo.md`
- `graphify/skill-kiro.md`
- `graphify/skill-opencode.md`
- `graphify/skill-pi.md`
- `graphify/skill-trae.md`
- `graphify/skill-vscode.md`
- `graphify/skill-windows.md`
- `graphify/skill.md`
- `graphify/skills/amp/references/add-watch.md`
- `graphify/skills/amp/references/exports.md`
- `graphify/skills/amp/references/extraction-spec.md`
- `graphify/skills/amp/references/github-and-merge.md`
- `graphify/skills/amp/references/hooks.md`
- `graphify/skills/amp/references/query.md`
- `graphify/skills/amp/references/transcribe.md`
- `graphify/skills/amp/references/update.md`
- `graphify/skills/claude/references/add-watch.md`
- `graphify/skills/claude/references/exports.md`
- `graphify/skills/claude/references/extraction-spec.md`
- `graphify/skills/claude/references/github-and-merge.md`
- `graphify/skills/claude/references/hooks.md`
- `graphify/skills/claude/references/query.md`
- `graphify/skills/claude/references/transcribe.md`
- `graphify/skills/claude/references/update.md`
- `graphify/skills/claw/references/add-watch.md`
- `graphify/skills/claw/references/exports.md`
- `graphify/skills/claw/references/extraction-spec.md`
- `graphify/skills/claw/references/github-and-merge.md`
- `graphify/skills/claw/references/hooks.md`
- `graphify/skills/claw/references/query.md`
- `graphify/skills/claw/references/transcribe.md`
- `graphify/skills/claw/references/update.md`
- `graphify/skills/codex/references/add-watch.md`
- `graphify/skills/codex/references/exports.md`
- `graphify/skills/codex/references/extraction-spec.md`
- `graphify/skills/codex/references/github-and-merge.md`
- `graphify/skills/codex/references/hooks.md`
- `graphify/skills/codex/references/query.md`
- `graphify/skills/codex/references/transcribe.md`
- `graphify/skills/codex/references/update.md`
- `graphify/skills/copilot/references/add-watch.md`
- `graphify/skills/copilot/references/exports.md`
- `graphify/skills/copilot/references/extraction-spec.md`
- `graphify/skills/copilot/references/github-and-merge.md`
- `graphify/skills/copilot/references/hooks.md`
- `graphify/skills/copilot/references/query.md`
- `graphify/skills/copilot/references/transcribe.md`
- `graphify/skills/copilot/references/update.md`
- `graphify/skills/droid/references/add-watch.md`
- `graphify/skills/droid/references/exports.md`
- `graphify/skills/droid/references/extraction-spec.md`
- `graphify/skills/droid/references/github-and-merge.md`
- `graphify/skills/droid/references/hooks.md`
- `graphify/skills/droid/references/query.md`
- `graphify/skills/droid/references/transcribe.md`
- `graphify/skills/droid/references/update.md`
- `graphify/skills/kilo/references/add-watch.md`
- `graphify/skills/kilo/references/exports.md`
- `graphify/skills/kilo/references/extraction-spec.md`
- `graphify/skills/kilo/references/github-and-merge.md`
- `graphify/skills/kilo/references/hooks.md`
- `graphify/skills/kilo/references/query.md`
- `graphify/skills/kilo/references/transcribe.md`
- `graphify/skills/kilo/references/update.md`
- `graphify/skills/kiro/references/add-watch.md`
- `graphify/skills/kiro/references/exports.md`
- `graphify/skills/kiro/references/extraction-spec.md`
- `graphify/skills/kiro/references/github-and-merge.md`
- `graphify/skills/kiro/references/hooks.md`
- `graphify/skills/kiro/references/query.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `docs/superpowers/specs/2026-05-04-incremental-updates-dedup-design.md`
- `graphify/skills/amp/references/add-watch.md`
- `graphify/skills/amp/references/exports.md`
- `graphify/skills/amp/references/extraction-spec.md`
- `graphify/skills/amp/references/github-and-merge.md`
- `graphify/skills/amp/references/hooks.md`
- `graphify/skills/amp/references/query.md`
- `graphify/skills/amp/references/transcribe.md`
- `graphify/skills/amp/references/update.md`
- `graphify/skills/claude/references/add-watch.md`
- `graphify/skills/claude/references/exports.md`
- `graphify/skills/claude/references/extraction-spec.md`
- `graphify/skills/claude/references/github-and-merge.md`
- `graphify/skills/claude/references/hooks.md`
- `graphify/skills/claude/references/query.md`
- `graphify/skills/claude/references/transcribe.md`
- `graphify/skills/claude/references/update.md`
- `graphify/skills/claw/references/add-watch.md`
- `graphify/skills/claw/references/exports.md`
- `graphify/skills/claw/references/extraction-spec.md`
- `graphify/skills/claw/references/github-and-merge.md`
- `graphify/skills/claw/references/hooks.md`
- `graphify/skills/claw/references/query.md`
- `graphify/skills/claw/references/transcribe.md`
- `graphify/skills/claw/references/update.md`
- `graphify/skills/codex/references/add-watch.md`
- `graphify/skills/codex/references/exports.md`
- `graphify/skills/codex/references/extraction-spec.md`
- `graphify/skills/codex/references/github-and-merge.md`
- `graphify/skills/codex/references/hooks.md`
- `graphify/skills/codex/references/query.md`
- `graphify/skills/codex/references/transcribe.md`
- `graphify/skills/codex/references/update.md`
- `graphify/skills/copilot/references/add-watch.md`
- `graphify/skills/copilot/references/exports.md`
- `graphify/skills/copilot/references/extraction-spec.md`
- `graphify/skills/copilot/references/github-and-merge.md`
- `graphify/skills/copilot/references/hooks.md`
- `graphify/skills/copilot/references/query.md`
- `graphify/skills/copilot/references/transcribe.md`
- `graphify/skills/copilot/references/update.md`
- `graphify/skills/droid/references/add-watch.md`
- `graphify/skills/droid/references/exports.md`
- `graphify/skills/droid/references/extraction-spec.md`
- `graphify/skills/droid/references/github-and-merge.md`
- `graphify/skills/droid/references/hooks.md`
- `graphify/skills/droid/references/query.md`
- `graphify/skills/droid/references/transcribe.md`
- `graphify/skills/droid/references/update.md`
- `graphify/skills/kilo/references/add-watch.md`
- `graphify/skills/kilo/references/exports.md`
- `graphify/skills/kilo/references/extraction-spec.md`
- `graphify/skills/kilo/references/github-and-merge.md`
- `graphify/skills/kilo/references/hooks.md`
- `graphify/skills/kilo/references/query.md`
- `graphify/skills/kilo/references/transcribe.md`
- `graphify/skills/kilo/references/update.md`
- `graphify/skills/kiro/references/add-watch.md`
- `graphify/skills/kiro/references/exports.md`
- `graphify/skills/kiro/references/extraction-spec.md`
- `graphify/skills/kiro/references/github-and-merge.md`
- `graphify/skills/kiro/references/hooks.md`
- `graphify/skills/kiro/references/query.md`
- `graphify/skills/kiro/references/transcribe.md`
- `graphify/skills/kiro/references/update.md`
- `graphify/skills/opencode/references/add-watch.md`
- `graphify/skills/opencode/references/exports.md`
- `graphify/skills/opencode/references/extraction-spec.md`
- `graphify/skills/opencode/references/github-and-merge.md`
- `graphify/skills/opencode/references/hooks.md`
- `graphify/skills/opencode/references/query.md`
- `graphify/skills/opencode/references/transcribe.md`
- `graphify/skills/opencode/references/update.md`
- `graphify/skills/pi/references/add-watch.md`
- `graphify/skills/pi/references/exports.md`
- `graphify/skills/pi/references/extraction-spec.md`
- `graphify/skills/pi/references/github-and-merge.md`
- `graphify/skills/pi/references/hooks.md`
- `graphify/skills/pi/references/query.md`
- `graphify/skills/pi/references/transcribe.md`
- `graphify/skills/pi/references/update.md`
- `graphify/skills/trae/references/add-watch.md`
- `graphify/skills/trae/references/exports.md`
- `graphify/skills/trae/references/extraction-spec.md`
- `graphify/skills/trae/references/github-and-merge.md`
- `graphify/skills/trae/references/hooks.md`
- `graphify/skills/trae/references/query.md`
- `graphify/skills/trae/references/transcribe.md`
- `graphify/skills/trae/references/update.md`
- `graphify/skills/vscode/references/add-watch.md`
- `graphify/skills/vscode/references/exports.md`
- `graphify/skills/vscode/references/extraction-spec.md`
- `graphify/skills/vscode/references/github-and-merge.md`
- `graphify/skills/vscode/references/hooks.md`
- `graphify/skills/vscode/references/query.md`
- `graphify/skills/vscode/references/transcribe.md`
- `graphify/skills/vscode/references/update.md`
- `graphify/skills/windows/references/add-watch.md`
- `graphify/skills/windows/references/exports.md`
- `graphify/skills/windows/references/extraction-spec.md`
- ... 5 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/bench_extract.py`
- `tests/conftest.py`
- `tests/fixtures/barrel_reexport.ts`
- `tests/fixtures/cjs_require.js`
- `tests/fixtures/cookieHelpers.ts`
- `tests/fixtures/crate_a/Cargo.toml`
- `tests/fixtures/crate_a/src/lib.rs`
- `tests/fixtures/crate_b/Cargo.toml`
- `tests/fixtures/crate_b/src/lib.rs`
- `tests/fixtures/deploy_guide.md`
- `tests/fixtures/dynamic_import.ts`
- `tests/fixtures/extraction.json`
- `tests/fixtures/graphify-out/cache/4722d67ec49f51710650249b1f865b6a748d91fb6805f3d385a99143eb950fe7.json`
- `tests/fixtures/graphify-out/cache/6a640d202b5f9a6d68f7b5eb2c05e708d85ba9ee43ad0ff271badfc966a1c06c.json`
- `tests/fixtures/graphify-out/cache/a3c5220ed581781e1dc2f4e9a82eeee366881554ec9fce57823e124f7aecd348.json`
- `tests/fixtures/graphify-out/cache/f5916299213779311e7162e90a1613bca095b5372f5d269c5941b5237af2d020.json`
- `tests/fixtures/graphify-out/cache/f82cddb8aad2615e0381e57b80857edfd3345213967c815de87e09be80f9f12a.json`
- `tests/fixtures/sample.c`
- `tests/fixtures/sample.cls`
- `tests/fixtures/sample.cpp`
- `tests/fixtures/sample.cs`
- `tests/fixtures/sample.csproj`
- `tests/fixtures/sample.dfm`
- `tests/fixtures/sample.dm`
- `tests/fixtures/sample.dmf`
- `tests/fixtures/sample.dmi`
- `tests/fixtures/sample.dmm`
- `tests/fixtures/sample.ex`
- `tests/fixtures/sample.f90`
- `tests/fixtures/sample.go`
- `tests/fixtures/sample.groovy`
- `tests/fixtures/sample.java`
- `tests/fixtures/sample.jl`
- `tests/fixtures/sample.json`
- `tests/fixtures/sample.kt`
- `tests/fixtures/sample.lfm`
- `tests/fixtures/sample.lpk`
- `tests/fixtures/sample.luau`
- `tests/fixtures/sample.m`
- `tests/fixtures/sample.mcp.json`
- `tests/fixtures/sample.md`
- `tests/fixtures/sample.pas`
- `tests/fixtures/sample.php`
- `tests/fixtures/sample.ps1`
- `tests/fixtures/sample.psd1`
- `tests/fixtures/sample.py`
- `tests/fixtures/sample.razor`
- `tests/fixtures/sample.rb`
- `tests/fixtures/sample.rs`
- `tests/fixtures/sample.scala`
- `tests/fixtures/sample.sh`
- `tests/fixtures/sample.sln`
- `tests/fixtures/sample.slnx`
- `tests/fixtures/sample.sql`
- `tests/fixtures/sample.sv`
- `tests/fixtures/sample.swift`
- `tests/fixtures/sample.trigger`
- `tests/fixtures/sample.ts`
- `tests/fixtures/sample.tsx`
- `tests/fixtures/sample.zig`
- `tests/fixtures/sample_alter_fk.sql`
- `tests/fixtures/sample_calls.py`
- `tests/fixtures/sample_import.ps1`
- `tests/fixtures/sample_php_config.php`
- `tests/fixtures/sample_php_container.php`
- `tests/fixtures/sample_php_listen.php`
- `tests/fixtures/sample_php_static_prop.php`
- `tests/fixtures/sample_preprocessed.F90`
- `tests/fixtures/sample_schema_qualified.sql`
- `tests/fixtures/sample_spock.groovy`
- `tests/fixtures/sample_tsconfig.json`
- `tests/fixtures/storageHelpers.ts`
- `tests/fixtures/swift_cross_file/Foo+Ext.swift`
- `tests/fixtures/swift_cross_file/Foo.swift`
- `tests/fixtures/typescript_advanced.ts`
- `tests/fixtures/urlHelpers.ts`
- `tests/test_affected_cli.py`
- `tests/test_analyze.py`
- `tests/test_anthropic_custom_endpoint.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/release-graph.yml`
- `Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 340 |
| .py | 150 |
| .json | 14 |
| .ts | 7 |
| .php | 5 |
| .toml | 4 |
| .rs | 3 |
| .sql | 3 |
| .swift | 3 |
| .yml | 3 |
| .f90 | 2 |
| .gitkeep | 2 |
| .groovy | 2 |
| .ps1 | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `graphify/ 내부 책임 분리`
- `tools/skillgen/ 내부 책임 분리`
- `docs/superpowers/specs/2026-05-04-incremental-updates-dedup-design.md 스펙/명령 의미`
- `graphify/skills/amp/references/add-watch.md 스펙/명령 의미`
- `graphify/skills/amp/references/exports.md 스펙/명령 의미`
- `graphify/skills/amp/references/extraction-spec.md 스펙/명령 의미`
- `graphify/skills/amp/references/github-and-merge.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `tests/fixtures/crate_a/Cargo.toml 실행 스크립트와 패키지 경계`
- `tests/fixtures/crate_b/Cargo.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

