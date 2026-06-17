# getzep/zep 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/getzep__zep |
| remote | https://github.com/getzep/zep |
| HEAD | faf2ace (2026-04-08) Add document graph custom ontology/instructions and fix conversation polling (#518) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 536 |
| dirs | 158 |
| stack | Node/TypeScript/JavaScript, Python, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is Zep? 💬`, `How Zep works`, `Getting Started`, `Sign up for Zep Cloud`, `Find Zep SDKs`, `Get Help`, `About This Repository`, `Repository Structure`, `Development Setup`, `Prerequisites`, `Getting Started`, `Workspace Structure`, `Working with the Workspace`, `Integration Development`, `Contributing`, `Graphiti: The Knowledge Graph Framework`, `Community Edition (Legacy)`

> <p align="center" <a href="https //www.getzep.com/" <img src="https //github.com/user attachments/assets/119c5682 9654 4257 8922 56b7cb8ffd73" width="150" alt="Zep Logo" </a </p <h1 align="center" Zep End to End Context Engineering Platform </h1 <h2 align="center" Examples, Integrations, & More</h2 <br / <p align="center" <a href="https //discord.gg/W8Kw6bsgXQ" <img src="https //img.shields.io/badge/Discord %235865F2.svg?&logo=discord&logoColor=white" alt="Chat on Discord" / </a <a href="https //twitter.com/intent/follow?screen name=zep ai" target=" new" <img alt="Twitter Follow" src="https //img.shields.io/twitter/follow/zep ai" </a </p What is Zep? 💬 Zep is an end to end context engineering platform that delivers the right information at the right time with sub 200ms latency. It solves the agent context problem by assembling comprehensive, relationship aware context from multiple data

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cursor | dir |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| assets | dir |
| benchmarks | dir |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| examples | dir |
| integrations | dir |
| legacy | dir |
| LICENSE | file |
| mcp | dir |
| ontology | dir |
| pyproject.toml | file |
| README.md | file |
| SECURITY.md | file |
| zep-eval-harness | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| examples/ | 150 |
| legacy/ | 105 |
| benchmarks/ | 89 |
| integrations/ | 68 |
| zep-eval-harness/ | 62 |
| mcp/ | 42 |
| .github/ | 9 |
| (root) | 8 |
| .cursor/ | 1 |
| assets/ | 1 |
| ontology/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| examples/ | 150 | preferred |
| legacy/ | 105 | large |
| legacy/src/ | 98 | large |
| benchmarks/ | 89 | large |
| examples/python/ | 79 | large |
| benchmarks/locomo/ | 78 | large |
| integrations/ | 68 | large |
| integrations/python/ | 67 | large |
| examples/typescript/ | 62 | large |
| zep-eval-harness/ | 62 | large |
| benchmarks/locomo/experiments/ | 60 | large |
| mcp/ | 42 | large |
| mcp/zep-mcp-server/ | 42 | large |
| examples/typescript/zep-graph-visualization/ | 41 | large |
| legacy/src/lib/ | 33 | large |
| legacy/src/api/ | 23 | large |
| mcp/zep-mcp-server/internal/ | 23 | large |
| integrations/python/zep_livekit/ | 20 | large |
| zep-eval-harness/runs/ | 20 | large |
| integrations/python/zep_crewai/ | 19 | large |
| legacy/src/store/ | 19 | large |
| legacy/src/models/ | 17 | large |
| zep-eval-harness/config/ | 17 | large |
| examples/python/elevenlabs-zep-example/ | 15 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `benchmarks/locomo/pyproject.toml`
- `benchmarks/longmemeval/pyproject.toml`
- `examples/go/chunking-example/go.mod`
- `examples/python/agent-memory-full-example/requirements.txt`
- `examples/python/chunking-example/requirements.txt`
- `examples/python/context-templates-example/requirements.txt`
- `examples/python/elevenlabs-zep-example/react-app/package.json`
- `examples/python/openai-agents-sdk/pyproject.toml`
- `examples/python/requirements.txt`
- `examples/python/user-summary-instructions-example/requirements.txt`
- `examples/python/zep-quickstart-dashboard/requirements.txt`
- `examples/typescript/chunking-example/package.json`
- `examples/typescript/chunking-example/tsconfig.json`
- `examples/typescript/langgraph/package.json`
- `examples/typescript/zep-graph-visualization/package.json`
- `examples/typescript/zep-graph-visualization/tsconfig.json`
- `examples/typescript/zep-graph-visualization/yarn.lock`
- `integrations/python/zep_adk/pyproject.toml`
- `integrations/python/zep_autogen/pyproject.toml`
- `integrations/python/zep_crewai/pyproject.toml`
- `integrations/python/zep_livekit/examples/full-example/requirements.txt`
- `integrations/python/zep_livekit/pyproject.toml`
- `legacy/src/go.mod`
- `mcp/zep-mcp-server/Dockerfile`
- `mcp/zep-mcp-server/docker-compose.yml`
- `mcp/zep-mcp-server/go.mod`
- `pyproject.toml`
- `zep-eval-harness/pyproject.toml`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| examples/python/elevenlabs-zep-example/react-app/package.json | elevenlabs-zep-demo | dev, build, preview | @11labs/react, react, react-dom, uuid |
| examples/typescript/chunking-example/package.json | chunking-example-typescript | build, start, dev | @getzep/zep-cloud, dotenv, openai |
| examples/typescript/langgraph/package.json | agent | start | @getzep/zep-cloud, @langchain/core, @langchain/langgraph, @langchain/openai, commander, dotenv, langsmith, tsx, typescript, uuid |
| examples/typescript/zep-graph-visualization/package.json | zep-d3-graph-example | dev, build, start, lint | @getzep/zep-cloud, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-slot, @radix-ui/react-switch, class-variance-authority, clsx, d3, dayjs, lucide-react, next |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| benchmarks/locomo/pyproject.toml | locomo-eval | false | false | true | true |
| benchmarks/longmemeval/pyproject.toml | longmemeval | false | true | false | false |
| examples/python/openai-agents-sdk/pyproject.toml | openai-agents-sdk | false | false | false | false |
| integrations/python/zep_adk/pyproject.toml | zep-adk | false | false | true | true |
| integrations/python/zep_autogen/pyproject.toml | zep-autogen | false | false | true | true |
| integrations/python/zep_crewai/pyproject.toml | zep-crewai | false | false | true | true |
| integrations/python/zep_livekit/pyproject.toml | zep-livekit | false | false | true | true |
| pyproject.toml | zep | false | false | false | false |
| zep-eval-harness/pyproject.toml | zep-eval-harness | false | false | false | false |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| examples/go/chunking-example/go.mod | chunking-example-go | 1.21 |
| legacy/src/go.mod | github.com/getzep/zep | 1.24.0 |
| mcp/zep-mcp-server/go.mod | github.com/getzep/zep/mcp/zep-mcp-server | 1.23.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/workflows/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `benchmarks/README.md`
- `benchmarks/locomo/README.md`
- `benchmarks/longmemeval/README.md`
- `examples/go/chunking-example/README.md`
- `examples/python/agent-memory-full-example/README.md`
- `examples/python/chunking-example/README.md`
- `examples/python/context-templates-example/README.md`
- `examples/python/elevenlabs-zep-example/README.md`
- `examples/python/elevenlabs-zep-example/llm-proxy/README.md`
- `examples/python/openai-agents-sdk/README.md`
- `examples/python/user-summary-instructions-example/README.md`
- `examples/python/zep-quickstart-dashboard/README.md`
- `examples/typescript/chunking-example/README.md`
- `examples/typescript/langgraph/README.md`
- `examples/typescript/zep-graph-visualization/README.md`
- `integrations/README.md`
- `integrations/python/zep_adk/README.md`
- `integrations/python/zep_autogen/README.md`
- `integrations/python/zep_crewai/README.md`
- `integrations/python/zep_livekit/README.md`
- `integrations/python/zep_livekit/examples/full-example/README.md`
- `mcp/zep-mcp-server/README.md`
- `mcp/zep-mcp-server/docs/DOCKER.md`
- `mcp/zep-mcp-server/docs/TOOLS.md`
- `zep-eval-harness/README.md`

### 에이전트 지침 후보

- `.cursor/mcp.json`
- `integrations/python/CLAUDE.md`
- `integrations/python/zep_autogen/CLAUDE.md`
- `integrations/python/zep_livekit/CLAUDE.md`
- `mcp/zep-mcp-server/.dockerignore`
- `mcp/zep-mcp-server/.env.example`
- `mcp/zep-mcp-server/.gitignore`
- `mcp/zep-mcp-server/.golangci.yml`
- `mcp/zep-mcp-server/Dockerfile`
- `mcp/zep-mcp-server/LICENSE`
- `mcp/zep-mcp-server/Makefile`
- `mcp/zep-mcp-server/README.md`
- `mcp/zep-mcp-server/cmd/server/main.go`
- `mcp/zep-mcp-server/docker-compose.yml`
- `mcp/zep-mcp-server/docs/DOCKER.md`
- `mcp/zep-mcp-server/docs/TOOLS.md`
- `mcp/zep-mcp-server/examples/claude-desktop/claude_desktop_config.json`
- `mcp/zep-mcp-server/examples/cline/.cline_mcp_settings.json`
- `mcp/zep-mcp-server/go.mod`
- `mcp/zep-mcp-server/go.sum`
- `mcp/zep-mcp-server/internal/config/config.go`
- `mcp/zep-mcp-server/internal/config/config_test.go`
- `mcp/zep-mcp-server/internal/handlers/context.go`
- `mcp/zep-mcp-server/internal/handlers/edge_detail.go`
- `mcp/zep-mcp-server/internal/handlers/edges.go`
- `mcp/zep-mcp-server/internal/handlers/episode_detail.go`
- `mcp/zep-mcp-server/internal/handlers/episode_mentions.go`
- `mcp/zep-mcp-server/internal/handlers/episodes.go`
- `mcp/zep-mcp-server/internal/handlers/messages.go`
- `mcp/zep-mcp-server/internal/handlers/node_detail.go`
- `mcp/zep-mcp-server/internal/handlers/node_edges.go`
- `mcp/zep-mcp-server/internal/handlers/nodes.go`
- `mcp/zep-mcp-server/internal/handlers/search.go`
- `mcp/zep-mcp-server/internal/handlers/thread.go`
- `mcp/zep-mcp-server/internal/handlers/types.go`
- `mcp/zep-mcp-server/internal/handlers/types_test.go`
- `mcp/zep-mcp-server/internal/handlers/user.go`
- `mcp/zep-mcp-server/internal/server/server.go`
- `mcp/zep-mcp-server/internal/server/tools.go`
- `mcp/zep-mcp-server/internal/transform/helpers_test.go`
- `mcp/zep-mcp-server/internal/transform/params.go`
- `mcp/zep-mcp-server/internal/transform/results.go`
- `mcp/zep-mcp-server/internal/transform/validation.go`
- `mcp/zep-mcp-server/pkg/zep/client.go`
- `mcp/zep-mcp-server/scripts/build.sh`
- `mcp/zep-mcp-server/scripts/run.sh`
- `zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `benchmarks/locomo/tests/__init__.py`
- `benchmarks/locomo/tests/test_common.py`
- `benchmarks/locomo/tests/test_config.py`
- `benchmarks/locomo/tests/test_persistence.py`
- `integrations/python/zep_adk/tests/test_basic.py`
- `integrations/python/zep_adk/tests/test_integration.py`
- `integrations/python/zep_autogen/tests/test_basic.py`
- `integrations/python/zep_crewai/tests/test_basic.py`
- `integrations/python/zep_crewai/tests/test_graph_storage.py`
- `integrations/python/zep_crewai/tests/test_tools.py`
- `integrations/python/zep_crewai/tests/test_user_storage.py`
- `integrations/python/zep_livekit/tests/__init__.py`
- `integrations/python/zep_livekit/tests/test_basic.py`

### CI/Docker 후보

- `.github/workflows/README.md`
- `.github/workflows/build-test.yml.disabled`
- `.github/workflows/docker-publish.yml.disabled`
- `.github/workflows/golangci-lint.yml.disabled`
- `.github/workflows/release-integrations.yml`
- `.github/workflows/test-integrations.yml`
- `legacy/docker-compose.ce.yaml`
- `mcp/zep-mcp-server/Dockerfile`
- `mcp/zep-mcp-server/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 129 |
| .go | 122 |
| .json | 94 |
| .md | 41 |
| .ts | 18 |
| .tsx | 17 |
| .example | 15 |
| .txt | 13 |
| .gitignore | 10 |
| .toml | 9 |
| .yaml | 9 |
| .svg | 6 |
| makefile | 6 |
| .yml | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `examples/ 내부 책임 분리`
- `legacy/ 내부 책임 분리`
- `legacy/src/ 내부 책임 분리`
- `benchmarks/ 내부 책임 분리`
- `examples/python/ 내부 책임 분리`
- `zep-eval-harness/.claude/commands/zep-eval-harness/SKILL.md 스펙/명령 의미`
- `benchmarks/locomo/pyproject.toml 실행 스크립트와 패키지 경계`
- `benchmarks/longmemeval/pyproject.toml 실행 스크립트와 패키지 경계`
- `examples/go/chunking-example/go.mod 실행 스크립트와 패키지 경계`
- `examples/python/agent-memory-full-example/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/python/chunking-example/requirements.txt 실행 스크립트와 패키지 경계`

