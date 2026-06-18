# ai-screams/HwpForge

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/ai-screams/HwpForge |
| local path | sources/ai-screams__HwpForge |
| HEAD | bfaa28f |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-05-29T10:26:26Z |
| trendScore / priorityScore | 69 / 188 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 170 | crates/hwpforge-bindings-mcp/README.md, npm/packages/mcp-darwin-arm64/README.md, npm/packages/mcp-darwin-x64/README.md |
| Korean language / Korea domain | 70 | crates/hwpforge-bindings-mcp/README.md, npm/packages/mcp/README.md, README.md |
| RAG / retrieval | 28 | crates/hwpforge-smithy-hwpx/examples/large_table.rs, crates/hwpforge-smithy-md/tests/hwpx_to_md.rs, docs/guide/markdown-bridge.md |
| AI agent / tool use | 19 | crates/hwpforge-bindings-mcp/README.md, npm/packages/mcp/README.md, README.md |
| Spec / doc-driven workflow | 16 | CLAUDE.md, crates/hwpforge-smithy-hwp5/examples/probe_secd.rs, MEMORY.md |
| Security / compliance | 14 | README.md, papers/giq-2026/README.md, .github/workflows/ci.yml |
| Frontend / developer experience | 7 | crates/hwpforge-smithy-hwp5/src/style_store_tests.rs, crates/hwpforge-smithy-hwpx/examples/equation_styles.rs, crates/hwpforge-smithy-hwpx/examples/feature_isolation_large/equation.rs |
| LLM wiki / memory / graph | 7 | CLAUDE.md, crates/hwpforge-smithy-hwpx/examples/feature_isolation.rs, MEMORY.md |
| Infra / observability | 4 | crates/hwpforge-bindings-mcp/Cargo.toml, Cargo.toml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 624 |
| manifests | 40 |
| docs | 75 |
| tests | 218 |
| ci/ops | 5 |
| spec artifacts | 13 |
| agent instruction files | 12 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | HwpForge 🔥 |
| headings | HwpForge 🔥 / HwpForge란? / 지원 버전 / 빠른 시작 / 설치 / Cargo.toml에 추가 / Markdown 지원 포함 / 🔨 Hammer — CLI로 시작하기 / Markdown → HWPX 변환 / HWPX 구조 확인 |
| excerpt | HwpForge 🔥 Rust로 한글 HWP/HWPX 문서를 프로그래밍 방식으로 제어 Hancom https //www.hancom.com/ 한글 파일 읽기, 쓰기, 변환 <div align="center" ! CI https //img.shields.io/github/actions/workflow/status/ai screams/HwpForge/ci.yml?branch=main\&label=CI\&logo=github ! codecov https //img.shields.io/badge/coverage 92.65%25 brightgreen.svg?logo=codecov ! Tests https //img.shields.io/badge/tests 2%2C207 passed success.svg?logo=checkmarx ! unsafe forbidden https //img.shields.io/badge/unsafe forbidden success.svg?logo=rust ! Lines of Code https //img.shields.io/badge/LOC ~83%2C962 informational.svg ! crates.io https //img.shields.io/crates/v/hwpforge.svg?logo=rust ! docs.rs https //img.shields.io/docsrs/hwpforge?logo=docs.rs |


## 주요 파일

### Manifests

- docs/README.md
- examples/hwp5_review/README.md
- examples/interop/hwpx_json_roundtrip/README.md
- examples/interop/hwpx_md_convert/README.md
- examples/showcase/guides/hwpx_complete_guide/README.md
- crates/hwpforge-bindings-mcp/README.md
- npm/packages/mcp-darwin-arm64/README.md
- npm/packages/mcp-darwin-x64/README.md
- npm/packages/mcp-linux-arm64/README.md
- npm/packages/mcp-linux-x64/README.md
- npm/packages/mcp-win32-x64/README.md
- npm/packages/mcp/README.md
- examples/README.md
- tests/README.md
- benches/README.md
- examples/showcase/features/feature_isolation/README.md
- examples/showcase/guides/full_report/README.md
- examples/showcase/lists/list_acceptance_visual/README.md
- README.md
- papers/giq-2026/README.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- crates/hwpforge-bindings-mcp/src/prompts/convert_review.rs
- crates/hwpforge-bindings-mcp/src/prompts/mod.rs
- crates/hwpforge-bindings-mcp/src/prompts/proposal.rs
- crates/hwpforge-bindings-mcp/src/prompts/report.rs
- docs/getting-started/architecture.md
- .claude/skills/hwpforge/references/editing-workflow.md
- .claude/skills/hwpforge/references/markdown-guide.md
- .claude/skills/hwpforge/references/scenario-official.md
- .claude/skills/hwpforge/references/scenario-proposal.md
- .claude/skills/hwpforge/references/scenario-report.md
- .claude/skills/hwpforge/references/templates.md
- .claude/skills/hwpforge/SKILL.md


### Agent Instruction Files

- CLAUDE.md
- crates/hwpforge-bindings-mcp/src/prompts/convert_review.rs
- crates/hwpforge-bindings-mcp/src/prompts/mod.rs
- crates/hwpforge-bindings-mcp/src/prompts/proposal.rs
- crates/hwpforge-bindings-mcp/src/prompts/report.rs
- .claude/skills/hwpforge/references/editing-workflow.md
- .claude/skills/hwpforge/references/markdown-guide.md
- .claude/skills/hwpforge/references/scenario-official.md
- .claude/skills/hwpforge/references/scenario-proposal.md
- .claude/skills/hwpforge/references/scenario-report.md
- .claude/skills/hwpforge/references/templates.md
- .claude/skills/hwpforge/SKILL.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| crates | 225 |
| tests | 198 |
| examples | 106 |
| npm | 18 |
| docs | 14 |
| .github | 12 |
| papers | 8 |
| .claude | 7 |
| .audit | 1 |
| .cargo | 1 |
| .clippy.toml | 1 |
| .config | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .rs | 211 |
| .hwpx | 177 |
| .hwp | 99 |
| .md | 65 |
| .toml | 20 |
| .json | 15 |
| [no-ext] | 12 |
| .yml | 10 |
| .py | 5 |
| .yaml | 3 |
| .css | 2 |
| .js | 2 |
| .bmp | 1 |
| .cff | 1 |
| .jsonc | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
