# sillok-os/sillok

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/sillok-os/sillok |
| local path | sources/sillok-os__sillok |
| HEAD | d34d8ba |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-02T05:48:52Z |
| trendScore / priorityScore | 120 / 260 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 156 | integrations/llm-wiki/README.md, integrations/promptfoo/README.md, examples/starter-projects/multi-pack/README.md |
| Security / compliance | 146 | examples/starter-projects/multi-tenant/README.md, README.md, integrations/langfuse/README.md |
| LLM wiki / memory / graph | 132 | integrations/llm-wiki/README.md, examples/starter-projects/minimal/README.md, README.md |
| AI agent / tool use | 127 | examples/starter-projects/minimal/README.md, README.md, integrations/claude-code/README.md |
| MCP / tool protocol | 121 | mcp_server/README.md, examples/starter-projects/minimal/README.md, examples/starter-projects/multi-pack/README.md |
| Spec / doc-driven workflow | 78 | integrations/llm-wiki/README.md, integrations/promptfoo/README.md, README.md |
| Korean language / Korea domain | 38 | README.md, pyproject.toml, docs/eval/probe-set.md |
| Frontend / developer experience | 19 | README.md, pyproject.toml, docs/architecture/framework-coverage.md |
| Infra / observability | 16 | README.md, integrations/langfuse/README.md, pyproject.toml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 161 |
| manifests | 20 |
| docs | 71 |
| tests | 28 |
| ci/ops | 5 |
| spec artifacts | 6 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Sillok |
| headings | Sillok / Reading order / Part 1 — Value & Overview / What you get / Architecture at a glance / Framework coverage — what Sillok integrates / Top 10 features / Part 2 — Business Use Cases / Persona pairing — find your category fast / Common workflows |
| excerpt | Sillok Proposal only LLM Operating System with two stage routing. Born from UNESCO Memory of the World heritage Sillok 1997 · Jikji 2001 · Janggyeong 2007 . Languages English · 한국어 README.ko.md ! PyPI https //img.shields.io/pypi/v/sillok.svg https //pypi.org/project/sillok/ ! License Apache 2.0 https //img.shields.io/badge/license Apache%202.0 blue.svg LICENSE ! Tests https //github.com/sillok os/sillok/actions/workflows/eval.yml/badge.svg https //github.com/sillok os/sillok/actions ! agentskills.io v0.9 https //img.shields.io/badge/agentskills.io v0.9 blue docs/architecture/frontmatter compatibility.md Status v0.3.0a1 alpha — 25 packs Wave 1 registry 1a/1b/1c , 10 eval probes, 4 gate govern |


## 주요 파일

### Manifests

- docs/architecture/README.md
- mcp_server/README.md
- benchmark/results/README.md
- integrations/llm-wiki/README.md
- integrations/promptfoo/README.md
- examples/starter-projects/minimal/README.md
- examples/starter-projects/multi-pack/README.md
- examples/starter-projects/multi-tenant/README.md
- README.md
- tests/fixtures/README.md
- integrations/claude-code/README.md
- integrations/langfuse/README.md
- integrations/obsidian-vault/README.md
- packs/core/README.md
- sillok/bongsu/README.md
- sillok/jikji/README.md
- sillok/naru/README.md
- sillok/sangso/README.md
- sillok/schemas/README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/architecture/README.md
- .github/workflows/eval.yml
- docs/architecture/coverage-vs-aipm-vault.md
- docs/architecture/framework-coverage.md
- docs/architecture/frontmatter-compatibility.md
- docs/architecture/proposal-only-governance.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| sillok | 50 |
| tests | 28 |
| packs | 27 |
| docs | 17 |
| .github | 8 |
| examples | 6 |
| integrations | 5 |
| scripts | 2 |
| .gitignore | 1 |
| adr | 1 |
| benchmark | 1 |
| CHANGELOG.md | 1 |
| CITATION.cff | 1 |
| CODE_OF_CONDUCT.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 71 |
| .py | 69 |
| .yml | 6 |
| [no-ext] | 4 |
| .json | 3 |
| .yaml | 3 |
| .jsonl | 2 |
| .cff | 1 |
| .sh | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
