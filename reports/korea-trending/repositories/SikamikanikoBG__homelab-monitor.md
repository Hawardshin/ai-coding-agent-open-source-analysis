# SikamikanikoBG/homelab-monitor

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/SikamikanikoBG/homelab-monitor |
| local path | sources/SikamikanikoBG__homelab-monitor |
| HEAD | b35f3d4 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T11:16:56Z |
| trendScore / priorityScore | 68 / 179 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 216 | mcp/README.md, README.md, mcp/requirements.txt |
| Local LLM / on-device inference | 202 | README.md, docker-compose.yml, mcp/tests/test_client.py |
| LLM wiki / memory / graph | 100 | mcp/README.md, README.md, mcp/homelab_client.py |
| Infra / observability | 95 | mcp/README.md, README.md, docker-compose.yml |
| Security / compliance | 73 | mcp/README.md, README.md, .github/workflows/hub-readme-sync.yml |
| AI agent / tool use | 49 | README.md, mcp/homelab_client.py, website/mcp.md |
| Frontend / developer experience | 33 | mcp/requirements.txt, Dockerfile, mcp/homelab_client.py |
| Spec / doc-driven workflow | 5 | mcp/README.md, website/mcp.md, website/install.md |
| RAG / retrieval | 3 | website/model-servers.md, design/ai-cockpit/research-A-feature-catalog.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 90 |
| manifests | 6 |
| docs | 31 |
| tests | 19 |
| ci/ops | 10 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 🛰️ HomeLab Monitor |
| headings | 🛰️ HomeLab Monitor / Get started / Grab the compose file and go. No GPU required — the GPU panels just light up when one's present. / What you get / Multi-machine, in two sentences / Configuration / Under the hood / Connect an AI agent (MCP) / the dashboard is on :9800; the MCP server rides along on :9810 / Security |
| excerpt | 🛰️ HomeLab Monitor ! GitHub stars https //img.shields.io/github/stars/SikamikanikoBG/homelab monitor?style=social https //github.com/SikamikanikoBG/homelab monitor/stargazers ! Docker pulls https //img.shields.io/docker/pulls/sikamikaniko123/homelab monitor?logo=docker&logoColor=white&label=docker%20pulls&color=2496ED https //hub.docker.com/r/sikamikaniko123/homelab monitor ! Discord https //img.shields.io/badge/Discord join%20the%20chat 5865F2?logo=discord&logoColor=white https //discord.gg/tpKWKEdSQN ! version https //img.shields.io/github/v/release/SikamikanikoBG/homelab monitor?color=blue&label=version CHANGELOG.md ! license https //img.shields.io/badge/license MIT green ! docker https |


## 주요 파일

### Manifests

- mcp/README.md
- README.md
- mcp/requirements.txt
- docker-compose.yml
- Dockerfile
- deploy/docker-compose.next.yml


### Spec / Docs / Prompt Artifacts

- mcp/requirements.txt
- design/ai-cockpit/PLAN.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 16 |
| website | 15 |
| design | 11 |
| .github | 10 |
| mcp | 6 |
| docs | 5 |
| scripts | 4 |
| static | 4 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| app.py | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 30 |
| .md | 26 |
| .yml | 10 |
| .svg | 7 |
| [no-ext] | 5 |
| .json | 4 |
| .html | 2 |
| .css | 1 |
| .js | 1 |
| .mp4 | 1 |
| .ps1 | 1 |
| .txt | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
