# zzet/gortex

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/zzet/gortex |
| local path | sources/zzet__gortex |
| HEAD | ed483c7 |
| stars/forks | 0 / 0 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T19:10:58Z |
| trendScore / priorityScore | 69 / 221 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | docs/04-evaluation/README.md, docs/actions/README.md, eval/README.md |
| MCP / tool protocol | 409 | docs/04-evaluation/README.md, docs/actions/README.md, README.md |
| Spec / doc-driven workflow | 155 | docs/04-evaluation/README.md, eval/README.md, AGENTS.md |
| RAG / retrieval | 149 | docs/04-evaluation/README.md, README.md, bench/baselines/README.md |
| LLM wiki / memory / graph | 79 | docs/actions/README.md, README.md, bench/perf/README.md |
| Frontend / developer experience | 47 | README.md, bench/perf/README.md, CLAUDE.md |
| Local LLM / on-device inference | 43 | README.md, CLAUDE.md, docs/llm.md |
| Security / compliance | 40 | docs/actions/README.md, README.md, CLAUDE.md |
| Infra / observability | 16 | CLAUDE.md, docs/llm.md, docs/mcp.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin, Ruby, PHP |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 2396 |
| manifests | 27 |
| docs | 65 |
| tests | 1164 |
| ci/ops | 15 |
| spec artifacts | 13 |
| agent instruction files | 11 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | macOS / Linux |
| headings | Code graph and intelligence engine that indexes repositories / Why it matters / Install / macOS / Linux / Windows (PowerShell) / Quick Start / Highlights / Cross-Repo API Contracts / Scale — battle-tested on large repos / Token savings dashboard |
| excerpt | <div align="center" <p align="center" <img src="assets/wall.svg" alt="Gortex" width="500" </p Code graph and intelligence engine that indexes repositories and exposes it via CLI, MCP Server, and web UI. ! CI https //github.com/zzet/gortex/actions/workflows/ci.yml/badge.svg https //github.com/zzet/gortex/actions/workflows/ci.yml ! Go Report Card https //goreportcard.com/badge/github.com/zzet/gortex https //goreportcard.com/report/github.com/zzet/gortex ! Latest release https //img.shields.io/github/v/release/zzet/gortex?logo=github&sort=semver https //github.com/zzet/gortex/releases/latest ! Go Reference https //pkg.go.dev/badge/github.com/zzet/gortex.svg https //pkg.go.dev/github.com/zzet/go |


## 주요 파일

### Manifests

- docs/04-evaluation/README.md
- docs/actions/README.md
- eval/README.md
- AGENTS.md
- README.md
- bench/baselines/README.md
- bench/daemon-latency/README.md
- bench/perf/README.md
- bench/token-efficiency/README.md
- bench/wire-format/README.md
- internal/contracts/README.md
- internal/daemon/README.md
- internal/resolver/README.md
- internal/thirdparty/renameio/README.md
- CLAUDE.md
- eval/pyproject.toml
- go.mod
- Makefile
- bench/fixtures/di/angular/package.json
- bench/fixtures/di/angular/tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/agents.md
- eval/prompts/.gitkeep
- eval/prompts/instance_baseline.jinja
- eval/prompts/instance_native_augment.jinja
- eval/prompts/instance_native.jinja
- eval/prompts/system_baseline.jinja
- eval/prompts/system_native_augment.jinja
- eval/prompts/system_native.jinja
- docs/architecture.md
- BENCHMARK.md
- cmd/gortex/testdata/agent-render/gemini.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- docs/agents.md
- eval/prompts/.gitkeep
- eval/prompts/instance_baseline.jinja
- eval/prompts/instance_native_augment.jinja
- eval/prompts/instance_native.jinja
- eval/prompts/system_baseline.jinja
- eval/prompts/system_native_augment.jinja
- eval/prompts/system_native.jinja
- cmd/gortex/testdata/agent-render/gemini.txt


## 상위 디렉터리

| dir | count |
| --- | --- |
| internal | 1992 |
| cmd | 148 |
| bench | 142 |
| eval | 48 |
| docs | 24 |
| .github | 14 |
| scripts | 6 |
| pkg | 2 |
| .gitignore | 1 |
| .goreleaser.yml | 1 |
| .gortex.yaml | 1 |
| AGENTS.md | 1 |
| assets | 1 |
| BENCHMARK-SWE.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 2132 |
| .md | 49 |
| .py | 39 |
| .yaml | 36 |
| .ts | 34 |
| .txt | 16 |
| [no-ext] | 14 |
| .php | 13 |
| .yml | 12 |
| .json | 11 |
| .java | 7 |
| .jinja | 6 |
| .rb | 5 |
| .sh | 5 |
| .jsonl | 3 |
| .mod | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
