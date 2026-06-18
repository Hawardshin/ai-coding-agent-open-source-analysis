# stackql/stackql

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/stackql/stackql |
| local path | sources/stackql__stackql |
| HEAD | c4e1950 |
| stars/forks | 862 / 79 |
| language | Go |
| license |  |
| pushedAt | 2026-06-16T23:08:14Z |
| trendScore / priorityScore | 194 / 477 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 367 | pkg/mcp_server/README.md, AGENTS.md, README.md |
| Database / data infrastructure | 188 | README.md, test/python/stackql_test_tooling/flask/README.md, test/server/mtls/README.md |
| Cloud native / infrastructure | 186 | pkg/mcp_server/README.md, AGENTS.md, test/README.md |
| Developer tools / DX | 120 | pkg/mcp_server/README.md, AGENTS.md, README.md |
| Security / supply chain | 56 | AGENTS.md, README.md, docker-compose.yml |
| AI agent / orchestration | 40 | pkg/mcp_server/README.md, AGENTS.md, README.md |
| Observability / evaluation | 17 | pkg/mcp_server/README.md, README.md, go.mod |
| Coding agent / software automation | 11 | README.md, CLAUDE.md, docs/mcp.md |
| RAG / retrieval / knowledge | 2 | pkg/mcp_server/README.md, test/python/stackql_test_tooling/flask/README.md |
| Data / ML platform | 1 | pkg/mcp_server/README.md |
| Frontend / app framework | 1 | docs/high-level-design.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1075 |
| manifests | 21 |
| docs | 66 |
| tests | 689 |
| ci/ops | 25 |
| spec artifacts | 4 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Deploy, manage and query cloud resources and interact with APIs using SQL / About The Project / How it works / MCP Server / Installation / Usage / Contributing / License / Contact / Acknowledgements | <! web assets logo https //stackql.io/img/stackql logo bold.png "stackql logo" homepage https //stackql.io/ docs https //stackql.io/docs blog https //stackql.io/blog registry https //github.com/stackql/stackql provider registry variables https //stackql.io/docs/getting started/variables macpkg https //storage.googleapis.com/stackql public releases/latest/stackql darwin multiarch.pkg winmsi https //releases.stackql.io/stackql/latest/stackql windows amd64.msi winzip https //releases.stackql.io/stackql/latest/stackql windows amd64.zip tuxzip https //releases.stackql.io/stackql/latest/stackql linux amd64.zip <! docker links dockerhub https //hub.docker.com/u/stackql dockerstackql https //hub.doc |


## Key Files

### Manifests

- docs/licenses/README.md
- docs/walkthroughs/deploy/README.md
- docs/walkthroughs/README.md
- docs/walkthroughs/readwrite/README.md
- pkg/mcp_server/README.md
- AGENTS.md
- test/README.md
- README.md
- test/python/stackql_test_tooling/flask/README.md
- test/python/stackql_test_tooling/README.md
- test/robot/README.md
- test/server/mtls/README.md
- test/tcp/reverse-proxy/nginx/README.md
- cicd/util/README.md
- CLAUDE.md
- test/pyproject.toml
- cicd/requirements.txt
- docker-compose.yml
- Dockerfile
- go.mod


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- cicd/requirements.txt
- .github/workflows/claude.yml


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| test | 632 |
| internal | 286 |
| docs | 48 |
| pkg | 32 |
| cicd | 27 |
| .github | 16 |
| .vscode | 5 |
| mcp_client | 4 |
| stackql | 4 |
| .gitignore | 1 |
| .golangci.yml | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 312 |
| .json | 224 |
| .yaml | 112 |
| .txt | 91 |
| [no-ext] | 66 |
| .md | 46 |
| .csv | 39 |
| .py | 39 |
| .iql | 31 |
| .sig | 27 |
| .xml | 18 |
| .robot | 16 |
| .yml | 12 |
| .sql | 10 |
| .resource | 5 |
| .jsonnet | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
