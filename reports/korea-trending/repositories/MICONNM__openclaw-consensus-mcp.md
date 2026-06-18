# MICONNM/openclaw-consensus-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/MICONNM/openclaw-consensus-mcp |
| local path | sources/MICONNM__openclaw-consensus-mcp |
| HEAD | 8f02319 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-01T05:34:00Z |
| trendScore / priorityScore | 72 / 79 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 63 | README.md, pyproject.toml, docs/maintainer-workflow.md |
| Security / compliance | 24 | README.md, docs/maintainer-workflow.md, .github/PULL_REQUEST_TEMPLATE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, llmFramework, mcp, sdk-api, security-compliance |
| stacks | Python |
| capabilities | LLM/app framework |


## 구조 요약

| key | value |
| --- | --- |
| files | 23 |
| manifests | 3 |
| docs | 8 |
| tests | 1 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | OpenClaw Consensus MCP |
| headings | OpenClaw Consensus MCP / What it does / Why consensus? / Install / or / Claude Desktop config / Tools / `consensus(prompt, mode="balanced")` / `disagreement_score(prompt)` / `cheapest_route(prompt, target_quality=0.85)` |
| excerpt | OpenClaw Consensus MCP ! CI https //github.com/MICONNM/openclaw consensus mcp/actions/workflows/ci.yml/badge.svg https //github.com/MICONNM/openclaw consensus mcp/actions/workflows/ci.yml ! PyPI https //img.shields.io/pypi/v/openclaw consensus mcp.svg https //pypi.org/project/openclaw consensus mcp/ ! License MIT https //img.shields.io/badge/License MIT yellow.svg LICENSE Multi model consensus inside MCP clients compare answers, surface disagreement, and escalate only when needed. OpenClaw Consensus MCP wraps the OpenClaw Consensus API as three Model Context Protocol tools. It is designed for workflows where a maintainer wants a second opinion before accepting a risky answer, review summary, |


## 주요 파일

### Manifests

- README.md
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| .github | 5 |
| src | 3 |
| .dockerignore | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |
| docs | 1 |
| LICENSE | 1 |
| MAINTAINERS.md | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| SECURITY.md | 1 |
| server.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 8 |
| .py | 4 |
| .yml | 4 |
| [no-ext] | 4 |
| .json | 1 |
| .toml | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
