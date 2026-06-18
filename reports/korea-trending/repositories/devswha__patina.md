# devswha/patina

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/devswha/patina |
| local path | sources/devswha__patina |
| HEAD | 4d48f8f |
| stars/forks | 0 / 0 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T18:31:45Z |
| trendScore / priorityScore | 74 / 191 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 223 | docs/benchmarks/README.md, assets/demo/README.md, README.md |
| Security / compliance | 73 | tests/quality/README.md, docs/benchmarks/lexicon-freshness-en-2026-05-22.md, docs/benchmarks/register-stratified.md |
| AI agent / tool use | 63 | docs/internal/README.md, README.md, tests/quality/README.md |
| Spec / doc-driven workflow | 50 | docs/internal/README.md, assets/demo/README.md, README.md |
| LLM wiki / memory / graph | 22 | docs/internal/README.md, README.md, docs/agents.md |
| RAG / retrieval | 14 | docs/CLI.md, docs/superpowers/specs/2026-04-03-meaning-preservation-design.md, docs/audits/2026-05-deep-research.md |
| Frontend / developer experience | 12 | package.json, docs/CLI.md, docs/PATTERNS-JA.md |
| Local LLM / on-device inference | 2 | docs/superpowers/specs/2026-04-03-meaning-preservation-design.md |
| MCP / tool protocol | 1 | docs/agents.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 817 |
| manifests | 15 |
| docs | 572 |
| tests | 183 |
| ci/ops | 3 |
| spec artifacts | 5 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | .patina.default.yaml |
| headings | Demo / Quick Start / Browser audit / Agent skill / Standalone CLI / What You Get / Common Commands / CI / How It Works / Configuration |
| excerpt | <p align="center" <img src="assets/brand/patina mark.svg" alt="patina mark" width="172" </p <h1 align="center" patina</h1 <p align="center" <strong Strip the AI packaging. Keep the meaning.</strong </p <p align="center" <a href="README KR.md" <b 한국어</b </a · <a href="README ZH.md" <b 中文</b </a · <a href="README JA.md" <b 日本語</b </a · <b English</b </p <p align="center" <a href="https //github.com/devswha/patina/actions/workflows/test.yml" <img alt="Tests" src="https //github.com/devswha/patina/actions/workflows/test.yml/badge.svg" </a <a href="https //opensource.org/licenses/MIT" <img alt="License MIT" src="https //img.shields.io/badge/License MIT yellow.svg" </a <a href=" quick start" <img |


## 주요 파일

### Manifests

- docs/benchmarks/README.md
- docs/internal/README.md
- examples/README.md
- assets/demo/README.md
- examples/e2e/README.md
- examples/integrations/hugo/README.md
- playground/README.md
- README.md
- tests/quality/README.md
- artifacts/rebaseline-2025/README.md
- packages/patina-humanizer/README.md
- Dockerfile
- package.json
- tsconfig.json
- packages/patina-humanizer/package.json


### Spec / Docs / Prompt Artifacts

- docs/agents.md
- docs/ROADMAP.md
- docs/superpowers/specs/2026-04-03-meaning-preservation-design.md
- .cursor/rules/patina.md
- DESIGN.md


### Agent Instruction Files

- docs/agents.md
- .cursor/rules/patina.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| examples | 342 |
| tests | 176 |
| docs | 88 |
| src | 43 |
| scripts | 30 |
| patterns | 28 |
| profiles | 17 |
| artifacts | 12 |
| .github | 11 |
| playground | 9 |
| lexicon | 8 |
| assets | 7 |
| core | 4 |
| agents | 3 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 559 |
| .js | 130 |
| .mjs | 38 |
| .json | 27 |
| .txt | 16 |
| .jsonl | 14 |
| .yml | 10 |
| [no-ext] | 7 |
| .svg | 6 |
| .html | 3 |
| .sh | 3 |
| .yaml | 2 |
| .css | 1 |
| .py | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
