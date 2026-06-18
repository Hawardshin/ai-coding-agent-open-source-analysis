# getzep/zep 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 536 files, 158 directories.

## 요약

- 조사 단위: `sources/getzep__zep` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 536 files, 158 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/zep-mcp-server/.dockerignore, mcp/zep-mcp-server/.env.example, mcp/zep-mcp-server/.gitignore이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | getzep/zep |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/getzep__zep](../../../../sources/getzep__zep) |
| 기존 보고서 | [reports/clone-structures/getzep__zep.md](../../../clone-structures/getzep__zep.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 536 / 158 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .cursor, .github, assets, benchmarks, examples, integrations, legacy, mcp, ontology, zep-eval-harness |
| 상위 확장자 | .py: 129, .go: 122, .json: 94, .md: 41, (none): 23, .ts: 18, .tsx: 17, .example: 15, .txt: 13, .toml: 9, .yaml: 9, .svg: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/python | examples workspace | 42 |
| examples/typescript | examples workspace | 25 |
| examples/go | examples workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |
| integrations | top-level component | 1 |
| legacy | top-level component | 1 |
| mcp | top-level component | 1 |
| ontology | top-level component | 1 |
| zep-eval-harness | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp/zep-mcp-server/.dockerignore](../../../../sources/getzep__zep/mcp/zep-mcp-server/.dockerignore) | mcp signal |
| mcp | [mcp/zep-mcp-server/.env.example](../../../../sources/getzep__zep/mcp/zep-mcp-server/.env.example) | mcp signal |
| mcp | [mcp/zep-mcp-server/.gitignore](../../../../sources/getzep__zep/mcp/zep-mcp-server/.gitignore) | mcp signal |
| mcp | [mcp/zep-mcp-server/.golangci.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/.golangci.yml) | mcp signal |
| agentRuntime | [zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md](../../../../sources/getzep__zep/zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md) | agentRuntime signal |
| agentRuntime | [mcp/zep-mcp-server/internal/server/tools.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/server/tools.go) | agentRuntime signal |
| agentRuntime | [mcp/zep-mcp-server/internal/handlers/context.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/handlers/context.go) | agentRuntime signal |
| agentRuntime | [mcp/zep-mcp-server/docs/TOOLS.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/docs/TOOLS.md) | agentRuntime signal |
| entrypoints | [mcp/zep-mcp-server/internal/server/server.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/server/server.go) | entrypoints signal |
| entrypoints | [mcp/zep-mcp-server/cmd/server/main.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/cmd/server/main.go) | entrypoints signal |
| entrypoints | [legacy/src/main.go](../../../../sources/getzep__zep/legacy/src/main.go) | entrypoints signal |
| entrypoints | [examples/typescript/chunking-example/src/index.ts](../../../../sources/getzep__zep/examples/typescript/chunking-example/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [mcp/zep-mcp-server/internal/server/server.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/server/server.go)<br>[mcp/zep-mcp-server/cmd/server/main.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/cmd/server/main.go)<br>[legacy/src/main.go](../../../../sources/getzep__zep/legacy/src/main.go)<br>[examples/typescript/chunking-example/src/index.ts](../../../../sources/getzep__zep/examples/typescript/chunking-example/src/index.ts)<br>[examples/python/elevenlabs-zep-example/react-app/src/App.jsx](../../../../sources/getzep__zep/examples/python/elevenlabs-zep-example/react-app/src/App.jsx)<br>[examples/python/elevenlabs-zep-example/react-app/src/main.jsx](../../../../sources/getzep__zep/examples/python/elevenlabs-zep-example/react-app/src/main.jsx)<br>[examples/go/chunking-example/main.go](../../../../sources/getzep__zep/examples/go/chunking-example/main.go) |
| agentRuntime | 48 | [zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md](../../../../sources/getzep__zep/zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md)<br>[mcp/zep-mcp-server/internal/server/tools.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/server/tools.go)<br>[mcp/zep-mcp-server/internal/handlers/context.go](../../../../sources/getzep__zep/mcp/zep-mcp-server/internal/handlers/context.go)<br>[mcp/zep-mcp-server/docs/TOOLS.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/docs/TOOLS.md)<br>[legacy/src/store/memory_ce.go](../../../../sources/getzep__zep/legacy/src/store/memory_ce.go)<br>[legacy/src/store/memory_common.go](../../../../sources/getzep__zep/legacy/src/store/memory_common.go)<br>[legacy/src/models/memory_ce.go](../../../../sources/getzep__zep/legacy/src/models/memory_ce.go)<br>[legacy/src/models/memory_common.go](../../../../sources/getzep__zep/legacy/src/models/memory_common.go) |
| mcp | 43 | [mcp/zep-mcp-server/.dockerignore](../../../../sources/getzep__zep/mcp/zep-mcp-server/.dockerignore)<br>[mcp/zep-mcp-server/.env.example](../../../../sources/getzep__zep/mcp/zep-mcp-server/.env.example)<br>[mcp/zep-mcp-server/.gitignore](../../../../sources/getzep__zep/mcp/zep-mcp-server/.gitignore)<br>[mcp/zep-mcp-server/.golangci.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/.golangci.yml)<br>[mcp/zep-mcp-server/docker-compose.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/docker-compose.yml)<br>[mcp/zep-mcp-server/Dockerfile](../../../../sources/getzep__zep/mcp/zep-mcp-server/Dockerfile)<br>[mcp/zep-mcp-server/go.mod](../../../../sources/getzep__zep/mcp/zep-mcp-server/go.mod)<br>[mcp/zep-mcp-server/go.sum](../../../../sources/getzep__zep/mcp/zep-mcp-server/go.sum) |
| retrieval | 97 | [zep-eval-harness/zep_chunk_documents.py](../../../../sources/getzep__zep/zep-eval-harness/zep_chunk_documents.py)<br>[zep-eval-harness/zep_graph_inspect.py](../../../../sources/getzep__zep/zep-eval-harness/zep_graph_inspect.py)<br>[zep-eval-harness/zep_ingest_documents.py](../../../../sources/getzep__zep/zep-eval-harness/zep_ingest_documents.py)<br>[zep-eval-harness/zep_ingest_users.py](../../../../sources/getzep__zep/zep-eval-harness/zep_ingest_users.py)<br>[zep-eval-harness/runs/chunk_sets/1_20260331T222430/chunks.jsonl](../../../../sources/getzep__zep/zep-eval-harness/runs/chunk_sets/1_20260331T222430/chunks.jsonl)<br>[zep-eval-harness/runs/chunk_sets/1_20260331T222430/meta.json](../../../../sources/getzep__zep/zep-eval-harness/runs/chunk_sets/1_20260331T222430/meta.json)<br>[zep-eval-harness/runs/chunk_sets/1_20260331T222430/document_chunking_config_snapshot/__init__.py](../../../../sources/getzep__zep/zep-eval-harness/runs/chunk_sets/1_20260331T222430/document_chunking_config_snapshot/__init__.py)<br>[zep-eval-harness/runs/chunk_sets/1_20260331T222430/document_chunking_config_snapshot/constants.py](../../../../sources/getzep__zep/zep-eval-harness/runs/chunk_sets/1_20260331T222430/document_chunking_config_snapshot/constants.py) |
| spec | 7 | [integrations/python/zep_livekit/examples/full-example/requirements.txt](../../../../sources/getzep__zep/integrations/python/zep_livekit/examples/full-example/requirements.txt)<br>[examples/python/requirements.txt](../../../../sources/getzep__zep/examples/python/requirements.txt)<br>[examples/python/zep-quickstart-dashboard/requirements.txt](../../../../sources/getzep__zep/examples/python/zep-quickstart-dashboard/requirements.txt)<br>[examples/python/user-summary-instructions-example/requirements.txt](../../../../sources/getzep__zep/examples/python/user-summary-instructions-example/requirements.txt)<br>[examples/python/context-templates-example/requirements.txt](../../../../sources/getzep__zep/examples/python/context-templates-example/requirements.txt)<br>[examples/python/chunking-example/requirements.txt](../../../../sources/getzep__zep/examples/python/chunking-example/requirements.txt)<br>[examples/python/agent-memory-full-example/requirements.txt](../../../../sources/getzep__zep/examples/python/agent-memory-full-example/requirements.txt) |
| eval | 93 | [zep-eval-harness/.env.example](../../../../sources/getzep__zep/zep-eval-harness/.env.example)<br>[zep-eval-harness/.gitignore](../../../../sources/getzep__zep/zep-eval-harness/.gitignore)<br>[zep-eval-harness/checkpoint.py](../../../../sources/getzep__zep/zep-eval-harness/checkpoint.py)<br>[zep-eval-harness/pyproject.toml](../../../../sources/getzep__zep/zep-eval-harness/pyproject.toml)<br>[zep-eval-harness/README.md](../../../../sources/getzep__zep/zep-eval-harness/README.md)<br>[zep-eval-harness/retry.py](../../../../sources/getzep__zep/zep-eval-harness/retry.py)<br>[zep-eval-harness/zep_chunk_documents.py](../../../../sources/getzep__zep/zep-eval-harness/zep_chunk_documents.py)<br>[zep-eval-harness/zep_evaluate.py](../../../../sources/getzep__zep/zep-eval-harness/zep_evaluate.py) |
| security | 3 | [SECURITY.md](../../../../sources/getzep__zep/SECURITY.md)<br>[legacy/src/api/middleware/auth.go](../../../../sources/getzep__zep/legacy/src/api/middleware/auth.go)<br>[legacy/src/api/middleware/secret_key_auth_ce.go](../../../../sources/getzep__zep/legacy/src/api/middleware/secret_key_auth_ce.go) |
| ci | 6 | [.github/workflows/build-test.yml.disabled](../../../../sources/getzep__zep/.github/workflows/build-test.yml.disabled)<br>[.github/workflows/docker-publish.yml.disabled](../../../../sources/getzep__zep/.github/workflows/docker-publish.yml.disabled)<br>[.github/workflows/golangci-lint.yml.disabled](../../../../sources/getzep__zep/.github/workflows/golangci-lint.yml.disabled)<br>[.github/workflows/README.md](../../../../sources/getzep__zep/.github/workflows/README.md)<br>[.github/workflows/release-integrations.yml](../../../../sources/getzep__zep/.github/workflows/release-integrations.yml)<br>[.github/workflows/test-integrations.yml](../../../../sources/getzep__zep/.github/workflows/test-integrations.yml) |
| container | 4 | [mcp/zep-mcp-server/docker-compose.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/docker-compose.yml)<br>[mcp/zep-mcp-server/Dockerfile](../../../../sources/getzep__zep/mcp/zep-mcp-server/Dockerfile)<br>[legacy/docker-compose.ce.yaml](../../../../sources/getzep__zep/legacy/docker-compose.ce.yaml)<br>[legacy/Dockerfile.ce](../../../../sources/getzep__zep/legacy/Dockerfile.ce) |
| instruction | 3 | [integrations/python/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/CLAUDE.md)<br>[integrations/python/zep_livekit/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/zep_livekit/CLAUDE.md)<br>[integrations/python/zep_autogen/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/zep_autogen/CLAUDE.md) |
| docs | 27 | [README.md](../../../../sources/getzep__zep/README.md)<br>[zep-eval-harness/README.md](../../../../sources/getzep__zep/zep-eval-harness/README.md)<br>[mcp/zep-mcp-server/README.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/README.md)<br>[mcp/zep-mcp-server/docs/DOCKER.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/docs/DOCKER.md)<br>[mcp/zep-mcp-server/docs/TOOLS.md](../../../../sources/getzep__zep/mcp/zep-mcp-server/docs/TOOLS.md)<br>[integrations/README.md](../../../../sources/getzep__zep/integrations/README.md)<br>[integrations/python/zep_livekit/README.md](../../../../sources/getzep__zep/integrations/python/zep_livekit/README.md)<br>[integrations/python/zep_livekit/examples/full-example/README.md](../../../../sources/getzep__zep/integrations/python/zep_livekit/examples/full-example/README.md) |
| config | 31 | [pyproject.toml](../../../../sources/getzep__zep/pyproject.toml)<br>[zep-eval-harness/pyproject.toml](../../../../sources/getzep__zep/zep-eval-harness/pyproject.toml)<br>[mcp/zep-mcp-server/go.mod](../../../../sources/getzep__zep/mcp/zep-mcp-server/go.mod)<br>[mcp/zep-mcp-server/Makefile](../../../../sources/getzep__zep/mcp/zep-mcp-server/Makefile)<br>[legacy/src/go.mod](../../../../sources/getzep__zep/legacy/src/go.mod)<br>[integrations/python/zep_livekit/Makefile](../../../../sources/getzep__zep/integrations/python/zep_livekit/Makefile)<br>[integrations/python/zep_livekit/pyproject.toml](../../../../sources/getzep__zep/integrations/python/zep_livekit/pyproject.toml)<br>[integrations/python/zep_livekit/examples/full-example/requirements.txt](../../../../sources/getzep__zep/integrations/python/zep_livekit/examples/full-example/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 93 | [zep-eval-harness/.env.example](../../../../sources/getzep__zep/zep-eval-harness/.env.example)<br>[zep-eval-harness/.gitignore](../../../../sources/getzep__zep/zep-eval-harness/.gitignore)<br>[zep-eval-harness/checkpoint.py](../../../../sources/getzep__zep/zep-eval-harness/checkpoint.py)<br>[zep-eval-harness/pyproject.toml](../../../../sources/getzep__zep/zep-eval-harness/pyproject.toml)<br>[zep-eval-harness/README.md](../../../../sources/getzep__zep/zep-eval-harness/README.md)<br>[zep-eval-harness/retry.py](../../../../sources/getzep__zep/zep-eval-harness/retry.py) |
| CI workflow | 6 | [.github/workflows/build-test.yml.disabled](../../../../sources/getzep__zep/.github/workflows/build-test.yml.disabled)<br>[.github/workflows/docker-publish.yml.disabled](../../../../sources/getzep__zep/.github/workflows/docker-publish.yml.disabled)<br>[.github/workflows/golangci-lint.yml.disabled](../../../../sources/getzep__zep/.github/workflows/golangci-lint.yml.disabled)<br>[.github/workflows/README.md](../../../../sources/getzep__zep/.github/workflows/README.md)<br>[.github/workflows/release-integrations.yml](../../../../sources/getzep__zep/.github/workflows/release-integrations.yml)<br>[.github/workflows/test-integrations.yml](../../../../sources/getzep__zep/.github/workflows/test-integrations.yml) |
| 컨테이너/배포 | 4 | [mcp/zep-mcp-server/docker-compose.yml](../../../../sources/getzep__zep/mcp/zep-mcp-server/docker-compose.yml)<br>[mcp/zep-mcp-server/Dockerfile](../../../../sources/getzep__zep/mcp/zep-mcp-server/Dockerfile)<br>[legacy/docker-compose.ce.yaml](../../../../sources/getzep__zep/legacy/docker-compose.ce.yaml)<br>[legacy/Dockerfile.ce](../../../../sources/getzep__zep/legacy/Dockerfile.ce) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/getzep__zep/SECURITY.md)<br>[legacy/src/api/middleware/auth.go](../../../../sources/getzep__zep/legacy/src/api/middleware/auth.go)<br>[legacy/src/api/middleware/secret_key_auth_ce.go](../../../../sources/getzep__zep/legacy/src/api/middleware/secret_key_auth_ce.go) |
| 에이전트 지시문 | 3 | [integrations/python/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/CLAUDE.md)<br>[integrations/python/zep_livekit/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/zep_livekit/CLAUDE.md)<br>[integrations/python/zep_autogen/CLAUDE.md](../../../../sources/getzep__zep/integrations/python/zep_autogen/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp/zep-mcp-server/.dockerignore`, `mcp/zep-mcp-server/.env.example`, `mcp/zep-mcp-server/.gitignore`.
2. entrypoint를 따라 실행 흐름 확인: `mcp/zep-mcp-server/internal/server/server.go`, `mcp/zep-mcp-server/cmd/server/main.go`, `legacy/src/main.go`.
3. agent/tool runtime 매핑: `zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md`, `mcp/zep-mcp-server/internal/server/tools.go`, `mcp/zep-mcp-server/internal/handlers/context.go`.
4. retrieval/memory/indexing 확인: `zep-eval-harness/zep_chunk_documents.py`, `zep-eval-harness/zep_graph_inspect.py`, `zep-eval-harness/zep_ingest_documents.py`.
5. test/eval 파일로 동작 검증: `zep-eval-harness/.env.example`, `zep-eval-harness/.gitignore`, `zep-eval-harness/checkpoint.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 536 files, 158 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, tests, ci, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
