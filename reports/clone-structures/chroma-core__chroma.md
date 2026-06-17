# chroma-core/chroma 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/chroma-core__chroma |
| remote | https://github.com/chroma-core/chroma |
| HEAD | b8bf764 (2026-06-10) [BLD](tilt): Persist postgres state across restarts + bump CPU cap (#7207) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 2029 |
| dirs | 449 |
| stack | Node/TypeScript/JavaScript, Python, Rust, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `for javascript, npm install chromadb!`, `for client-server mode, chroma run --path /chroma_db_path`, `Chroma Cloud`, `API`, `setup Chroma in-memory, for easy prototyping. Can add persistence easily!`, `Create collection. get_collection, get_or_create_collection, delete_collection also available!`, `Add docs to the collection. Can also update and delete. Row-based API coming soon!`, `Query/search 2 most similar results. You can also .get by id`, `Get involved`, `License`

> <p align="center" <b Chroma the open source data infrastructure for AI</b . <br / </p <p align="center" <a href="https //discord.gg/MMeYNTmh3x" target=" blank" <img src="https //img.shields.io/discord/1073293645303795742?cacheSeconds=3600" alt="Discord" </a <a href="https //github.com/chroma core/chroma/blob/master/LICENSE" target=" blank" <img src="https //img.shields.io/badge/License Apache 2.0 blue.svg" alt="License" </a <a href="https //docs.trychroma.com/" target=" blank" Docs </a <a href="https //www.trychroma.com/" target=" blank" Homepage </a </p Chroma Cloud Our hosted service, Chroma Cloud, powers serverless vector, hybrid, and full text search. It's extremely fast, cost effective, scalable and painless. Create a DB and try it out in under 30 seconds with $5 of free credits. Get started with Chroma Cloud API The core API is only 4 functions (run our 💡 Google Colab) Learn about

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .config | dir |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .taplo.toml | file |
| .vscode | dir |
| AGENTS.md | file |
| bandit.yaml | file |
| bin | dir |
| Cargo.lock | file |
| Cargo.toml | file |
| chromadb | dir |
| CLAUDE.md | file |
| clients | dir |
| compose-env.linux | file |
| compose-env.windows | file |
| deployments | dir |
| DEVELOP.md | file |
| docker-bake.hcl | file |
| docker-compose.server.example.yml | file |
| docker-compose.test-auth.yml | file |
| docker-compose.test.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| Dockerfile.windows | file |
| docs | dir |
| examples | dir |
| go | dir |
| idl | dir |
| k8s | dir |
| LICENSE | file |
| pull_request_template.md | file |
| pyproject.toml | file |
| README.md | file |
| RELEASE_PROCESS.md | file |
| requirements_dev.txt | file |
| requirements.txt | file |
| revision_history_function_302b0fcf.plan.md | file |
| rust | dir |
| sample_apps | dir |
| schemas | dir |
| Tiltfile | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| rust/ | 805 |
| clients/ | 337 |
| chromadb/ | 241 |
| docs/ | 194 |
| go/ | 140 |
| examples/ | 64 |
| sample_apps/ | 48 |
| k8s/ | 45 |
| .github/ | 43 |
| schemas/ | 37 |
| (root) | 29 |
| bin/ | 27 |
| idl/ | 11 |
| deployments/ | 6 |
| .config/ | 1 |
| .vscode/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 194 | preferred |
| examples/ | 64 | preferred |
| rust/ | 805 | large |
| clients/ | 337 | large |
| chromadb/ | 241 | large |
| clients/new-js/ | 225 | large |
| clients/new-js/packages/ | 216 | large |
| docs/mintlify/ | 189 | large |
| go/ | 140 | large |
| go/pkg/ | 128 | large |
| rust/worker/ | 121 | large |
| go/pkg/sysdb/ | 108 | large |
| clients/js/ | 105 | large |
| rust/worker/src/ | 101 | large |
| rust/wal3/ | 86 | large |
| chromadb/test/ | 82 | large |
| clients/js/packages/ | 82 | large |
| rust/blockstore/ | 65 | large |
| rust/blockstore/src/ | 60 | large |
| rust/wal3/tests/ | 59 | large |
| rust/index/ | 58 | large |
| docs/mintlify/images/ | 57 | large |
| chromadb/utils/ | 50 | large |
| sample_apps/ | 48 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.github/actions/bandit-scan/Dockerfile`
- `Cargo.toml`
- `Dockerfile`
- `bin/templates/docker-compose.yml`
- `clients/js/examples/node/package.json`
- `clients/js/examples/node/pnpm-lock.yaml`
- `clients/js/package.json`
- `clients/js/packages/chromadb-client/package.json`
- `clients/js/packages/chromadb-client/tsconfig.json`
- `clients/js/packages/chromadb-core/package.json`
- `clients/js/packages/chromadb-core/tsconfig.json`
- `clients/js/packages/chromadb/package.json`
- `clients/js/packages/chromadb/tsconfig.json`
- `clients/js/pnpm-lock.yaml`
- `clients/js/pnpm-workspace.yaml`
- `clients/js/tsconfig.json`
- `clients/new-js/package.json`
- `clients/new-js/packages/ai-embeddings/all/package.json`
- `clients/new-js/packages/ai-embeddings/all/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/chroma-bm25/package.json`
- `clients/new-js/packages/ai-embeddings/chroma-bm25/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/chroma-cloud-qwen/package.json`
- `clients/new-js/packages/ai-embeddings/chroma-cloud-qwen/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/chroma-cloud-splade/package.json`
- `clients/new-js/packages/ai-embeddings/chroma-cloud-splade/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/cloudflare-worker-ai/package.json`
- `clients/new-js/packages/ai-embeddings/cloudflare-worker-ai/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/cohere/package.json`
- `clients/new-js/packages/ai-embeddings/cohere/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/common/package.json`
- `clients/new-js/packages/ai-embeddings/common/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/default-embed/package.json`
- `clients/new-js/packages/ai-embeddings/default-embed/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/google-gemini/package.json`
- `clients/new-js/packages/ai-embeddings/google-gemini/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/huggingface-server/package.json`
- `clients/new-js/packages/ai-embeddings/huggingface-server/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/jina/package.json`
- `clients/new-js/packages/ai-embeddings/jina/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/mistral/package.json`
- `clients/new-js/packages/ai-embeddings/mistral/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/morph/package.json`
- `clients/new-js/packages/ai-embeddings/morph/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/ollama/package.json`
- `clients/new-js/packages/ai-embeddings/ollama/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/openai/package.json`
- `clients/new-js/packages/ai-embeddings/openai/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/perplexity/package.json`
- `clients/new-js/packages/ai-embeddings/perplexity/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/sentence-transformer/package.json`
- `clients/new-js/packages/ai-embeddings/sentence-transformer/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/together-ai/package.json`
- `clients/new-js/packages/ai-embeddings/together-ai/tsconfig.json`
- `clients/new-js/packages/ai-embeddings/voyageai/package.json`
- `clients/new-js/packages/ai-embeddings/voyageai/tsconfig.json`
- `clients/new-js/packages/chromadb/package.json`
- `clients/new-js/packages/chromadb/scripts/tsconfig.json`
- `clients/new-js/packages/chromadb/test/tsconfig.json`
- `clients/new-js/packages/chromadb/tsconfig.json`
- `clients/new-js/packages/integration-test/package.json`
- `clients/new-js/packages/integration-test/tsconfig.json`
- `clients/new-js/pnpm-lock.yaml`
- `clients/new-js/pnpm-workspace.yaml`
- `clients/python/pyproject.toml`
- `clients/python/requirements.txt`
- `deployments/aws/docker-compose.yml`
- `docker-compose.yml`
- `examples/chat_with_your_documents/requirements.txt`
- `examples/gemini/requirements.txt`
- `examples/server_side_embeddings/huggingface/docker-compose.yml`
- `examples/use_with/cohere/package.json`
- `examples/xai/requirements.txt`
- `go/Dockerfile`
- `go/go.mod`
- `k8s/test/postgres/Dockerfile`
- `pyproject.toml`
- `requirements.txt`
- `rust/Dockerfile`
- `rust/api-types/Cargo.toml`
- `rust/benchmark/Cargo.toml`
- ... 20 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| clients/js/examples/node/package.json | example-node | test, dev, start, dev:bundled, dev:client, rebuild | @google/generative-ai, chromadb-client, chromadb-default-embed, cohere-ai, express, openai |
| clients/js/package.json | chromadb-root | build, build:core, build:packages, test, publish:packages, release, release_alpha, release_dev, genapi, prettier | cliui, isomorphic-fetch |
| clients/js/packages/chromadb-client/package.json | chromadb-client | prebuild, build, watch, test | cliui, isomorphic-fetch |
| clients/js/packages/chromadb-core/package.json | @internal/chromadb-core | test, test:functional, test:update, prebuild, build, watch | ajv, cliui, isomorphic-fetch |
| clients/js/packages/chromadb/package.json | chromadb | prebuild, build, watch, test | @google/generative-ai, @xenova/transformers, chromadb-default-embed, cliui, cohere-ai, isomorphic-fetch, ollama, openai, semver, voyageai |
| clients/new-js/package.json | chroma-js-client | build, build:chromadb, test, genapi:chromadb, prettier |  |
| clients/new-js/packages/ai-embeddings/all/package.json | @chroma-core/all | clean, prebuild, build, watch, typecheck | @chroma-core/ai-embeddings-common, @chroma-core/cloudflare-worker-ai, @chroma-core/cohere, @chroma-core/default-embed, @chroma-core/google-gemini, @chroma-core/huggingface-server, @chroma-core/jina, @chroma-core/mistral, @chroma-core/morph, @chroma-core/ollama, @chroma-core/openai, @chroma-core/together-ai, @chroma-core/voyageai, @chroma-core/chroma-bm25 |
| clients/new-js/packages/ai-embeddings/chroma-bm25/package.json | @chroma-core/chroma-bm25 | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, snowball-stemmers |
| clients/new-js/packages/ai-embeddings/chroma-cloud-qwen/package.json | @chroma-core/chroma-cloud-qwen | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common |
| clients/new-js/packages/ai-embeddings/chroma-cloud-splade/package.json | @chroma-core/chroma-cloud-splade | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common |
| clients/new-js/packages/ai-embeddings/cloudflare-worker-ai/package.json | @chroma-core/cloudflare-worker-ai | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common |
| clients/new-js/packages/ai-embeddings/cohere/package.json | @chroma-core/cohere | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, cohere-ai |
| clients/new-js/packages/ai-embeddings/common/package.json | @chroma-core/ai-embeddings-common | build, dev, typecheck | ajv |
| clients/new-js/packages/ai-embeddings/default-embed/package.json | @chroma-core/default-embed | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, @huggingface/transformers |
| clients/new-js/packages/ai-embeddings/google-gemini/package.json | @chroma-core/google-gemini | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, @google/genai |
| clients/new-js/packages/ai-embeddings/huggingface-server/package.json | @chroma-core/huggingface-server | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common |
| clients/new-js/packages/ai-embeddings/jina/package.json | @chroma-core/jina | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common |
| clients/new-js/packages/ai-embeddings/mistral/package.json | @chroma-core/mistral | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, @mistralai/mistralai |
| clients/new-js/packages/ai-embeddings/morph/package.json | @chroma-core/morph | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, openai |
| clients/new-js/packages/ai-embeddings/ollama/package.json | @chroma-core/ollama | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, ollama, testcontainers |
| clients/new-js/packages/ai-embeddings/openai/package.json | @chroma-core/openai | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, openai |
| clients/new-js/packages/ai-embeddings/perplexity/package.json | @chroma-core/perplexity | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, @perplexity-ai/perplexity_ai |
| clients/new-js/packages/ai-embeddings/sentence-transformer/package.json | @chroma-core/sentence-transformer | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, @huggingface/transformers |
| clients/new-js/packages/ai-embeddings/together-ai/package.json | @chroma-core/together-ai | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, together-ai |
| clients/new-js/packages/ai-embeddings/voyageai/package.json | @chroma-core/voyageai | clean, prebuild, build, watch, test | @chroma-core/ai-embeddings-common, voyageai |
| clients/new-js/packages/chromadb/package.json | chromadb | test, test:functional, test:update, prebuild, build, watch, genapi, prettier, release, release_alpha, release_dev | semver |
| clients/new-js/packages/integration-test/package.json | @chroma-core/integration-test | test, test:update | @chroma-core/chroma-cloud-qwen, @chroma-core/chroma-cloud-splade, chromadb, dotenv |
| examples/use_with/cohere/package.json |  |  | chromadb, cohere-ai |
| rust/js_bindings/npm/darwin-arm64/package.json | chromadb-js-bindings-darwin-arm64 |  |  |
| rust/js_bindings/npm/darwin-x64/package.json | chromadb-js-bindings-darwin-x64 |  |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| clients/python/pyproject.toml | chromadb-client | false | false | false | true |
| pyproject.toml | chromadb | false | false | false | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true | "rust/benchmark", "rust/blockstore", "rust/cache", "rust/chroma", "rust/config", "rust/distance", "rust/error", "rust/faults", "rust/foundation-api", "rust/frontend", "rust/fronten |
| rust/api-types/Cargo.toml | chroma-api-types | false |  |
| rust/benchmark/Cargo.toml | chroma-benchmark | false |  |
| rust/blockstore/Cargo.toml | chroma-blockstore | false |  |
| rust/cache/Cargo.toml | chroma-cache | false |  |
| rust/chroma/Cargo.toml | chroma | false |  |
| rust/cli/Cargo.toml | chroma-cli | false |  |
| rust/config/Cargo.toml | chroma-config | false |  |
| rust/distance/Cargo.toml | chroma-distance | false |  |
| rust/error/Cargo.toml | chroma-error | false |  |
| rust/faults/Cargo.toml | chroma-faults | false |  |
| rust/foundation-api/Cargo.toml | foundation-api | false |  |
| rust/frontend-core/Cargo.toml | frontend-core | false |  |
| rust/frontend/Cargo.toml | chroma-frontend | false |  |
| rust/garbage_collector/Cargo.toml | garbage_collector | false |  |
| rust/index/Cargo.toml | chroma-index | false |  |
| rust/jemalloc-pprof-server/Cargo.toml | chroma-jemalloc-pprof-server | false |  |
| rust/js_bindings/Cargo.toml | chromadb-js-bindings | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go/go.mod | github.com/chroma-core/chroma/go | 1.23.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `chromadb/telemetry/README.md`
- `chromadb/test/distributed/README.md`
- `chromadb/utils/embedding_functions/schemas/README.md`
- `clients/js/README.md`
- `clients/js/examples/README.md`
- `clients/js/examples/node/README.md`
- `clients/js/packages/chromadb-client/README.md`
- `clients/js/packages/chromadb-core/src/generated/README.md`
- `clients/js/packages/chromadb/README.md`
- `clients/new-js/packages/ai-embeddings/all/README.md`
- `clients/new-js/packages/ai-embeddings/chroma-cloud-qwen/README.md`
- `clients/new-js/packages/ai-embeddings/chroma-cloud-splade/README.md`
- `clients/new-js/packages/ai-embeddings/cloudflare-worker-ai/README.md`
- `clients/new-js/packages/ai-embeddings/cohere/README.md`
- `clients/new-js/packages/ai-embeddings/common/README.md`
- `clients/new-js/packages/ai-embeddings/default-embed/README.md`
- `clients/new-js/packages/ai-embeddings/google-gemini/README.md`
- `clients/new-js/packages/ai-embeddings/huggingface-server/README.md`
- `clients/new-js/packages/ai-embeddings/jina/README.md`
- `clients/new-js/packages/ai-embeddings/mistral/README.md`
- `clients/new-js/packages/ai-embeddings/morph/README.md`
- `clients/new-js/packages/ai-embeddings/ollama/README.md`
- `clients/new-js/packages/ai-embeddings/openai/README.md`
- `clients/new-js/packages/ai-embeddings/perplexity/README.md`
- `clients/new-js/packages/ai-embeddings/sentence-transformer/README.md`
- `clients/new-js/packages/ai-embeddings/together-ai/README.md`
- `clients/new-js/packages/ai-embeddings/voyageai/README.md`
- `clients/new-js/packages/chromadb/README.md`
- `clients/python/README.md`
- `docs/assets/chroma-wordmark-color.png`
- `docs/assets/chroma-wordmark-white.png`
- `docs/mintlify/.claude/settings.json`
- `docs/mintlify/AGENTS.md`
- `docs/mintlify/README.md`
- `docs/mintlify/cloud/features/collection-forking.mdx`
- `docs/mintlify/cloud/getting-started.mdx`
- `docs/mintlify/cloud/package-search/mcp.mdx`
- `docs/mintlify/cloud/package-search/registry.mdx`
- `docs/mintlify/cloud/pricing.mdx`
- `docs/mintlify/cloud/quotas-limits.mdx`
- `docs/mintlify/cloud/schema/index-reference.mdx`
- `docs/mintlify/cloud/schema/overview.mdx`
- `docs/mintlify/cloud/schema/schema-basics.mdx`
- `docs/mintlify/cloud/schema/sparse-vector-search.mdx`
- `docs/mintlify/cloud/search-api/batch-operations.mdx`
- `docs/mintlify/cloud/search-api/examples.mdx`
- `docs/mintlify/cloud/search-api/filtering.mdx`
- `docs/mintlify/cloud/search-api/group-by.mdx`
- `docs/mintlify/cloud/search-api/hybrid-search.mdx`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `docs/mintlify/.claude/settings.json`
- `docs/mintlify/AGENTS.md`
- `docs/mintlify/cloud/package-search/mcp.mdx`
- `docs/mintlify/images/mcp-developer.png`
- `docs/mintlify/images/mcp-hammer.png`
- `docs/mintlify/images/mcp-instructions.png`
- `docs/mintlify/images/mcp-search.png`
- `docs/mintlify/images/mcp-settings.png`
- `docs/mintlify/images/mcp-store.png`
- `docs/mintlify/images/mcp-tools.png`
- `docs/mintlify/integrations/frameworks/anthropic-mcp.mdx`

### 스펙/템플릿/명령/스킬 후보

- `bin/templates/docker-compose.yml`
- `k8s/distributed-chroma/templates/compaction-service-memberlist-cr.yaml`
- `k8s/distributed-chroma/templates/compaction-service.yaml`
- `k8s/distributed-chroma/templates/fn-consumer.yaml`
- `k8s/distributed-chroma/templates/foundation-service.yaml`
- `k8s/distributed-chroma/templates/garbage-collection-service-memberlist-cr.yaml`
- `k8s/distributed-chroma/templates/garbage-collector.yaml`
- `k8s/distributed-chroma/templates/lease-watcher-role.yaml`
- `k8s/distributed-chroma/templates/namespace.yaml`
- `k8s/distributed-chroma/templates/pod-watcher-role.yaml`
- `k8s/distributed-chroma/templates/query-service-memberlist-cr.yaml`
- `k8s/distributed-chroma/templates/query-service.yaml`
- `k8s/distributed-chroma/templates/rust-frontend-service.yaml`
- `k8s/distributed-chroma/templates/rust-log-service-memberlist-cr.yaml`
- `k8s/distributed-chroma/templates/rust-log-service.yaml`
- `k8s/distributed-chroma/templates/rust-sysdb-migration.yaml`
- `k8s/distributed-chroma/templates/rust-sysdb-service.yaml`
- `k8s/distributed-chroma/templates/sysdb-migration.yaml`
- `k8s/distributed-chroma/templates/sysdb-service.yaml`
- `k8s/distributed-chroma/templates/work-queue-service.yaml`
- `rust/cli/src/commands/browse.rs`
- `rust/cli/src/commands/copy.rs`
- `rust/cli/src/commands/db.rs`
- `rust/cli/src/commands/install.rs`
- `rust/cli/src/commands/login.rs`
- `rust/cli/src/commands/mod.rs`
- `rust/cli/src/commands/profile.rs`
- `rust/cli/src/commands/run.rs`
- `rust/cli/src/commands/update.rs`
- `rust/cli/src/commands/vacuum.rs`
- `rust/cli/src/commands/webpage.rs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `chromadb/test/__init__.py`
- `chromadb/test/api/test_collection.py`
- `chromadb/test/api/test_count_api.py`
- `chromadb/test/api/test_delete_database.py`
- `chromadb/test/api/test_fork_count_api.py`
- `chromadb/test/api/test_get_database.py`
- `chromadb/test/api/test_indexing_status.py`
- `chromadb/test/api/test_invalid_update.py`
- `chromadb/test/api/test_limit_offset.py`
- `chromadb/test/api/test_list_databases.py`
- `chromadb/test/api/test_numpy_list_inputs.py`
- `chromadb/test/api/test_schema.py`
- `chromadb/test/api/test_schema_e2e.py`
- `chromadb/test/api/test_search_api.py`
- `chromadb/test/api/test_shared_system_client.py`
- `chromadb/test/api/test_types.py`
- `chromadb/test/auth/test_auth_utils.py`
- `chromadb/test/auth/test_rbac_authz.py`
- `chromadb/test/client/__init__.py`
- `chromadb/test/client/create_http_client_with_basic_auth.py`
- `chromadb/test/client/test_cloud_client.py`
- `chromadb/test/client/test_create_http_client.py`
- `chromadb/test/client/test_database_tenant.py`
- `chromadb/test/client/test_database_tenant_auth.py`
- `chromadb/test/client/test_multiple_clients_concurrency.py`
- `chromadb/test/configurations/test_collection_configuration.py`
- `chromadb/test/configurations/test_configurations.py`
- `chromadb/test/conftest.py`
- `chromadb/test/data_loader/test_data_loader.py`
- `chromadb/test/db/test_log_purge.py`
- `chromadb/test/distributed/README.md`
- `chromadb/test/distributed/test_log_backpressure.py`
- `chromadb/test/distributed/test_repair_collection_log_offset.py`
- `chromadb/test/distributed/test_reroute.py`
- `chromadb/test/distributed/test_sanity.py`
- `chromadb/test/distributed/test_statistics_wrapper.py`
- `chromadb/test/distributed/test_task_api.py`
- `chromadb/test/ef/test_chroma_bm25_embedding_function.py`
- `chromadb/test/ef/test_custom_ef.py`
- `chromadb/test/ef/test_default_ef.py`
- `chromadb/test/ef/test_ef.py`
- `chromadb/test/ef/test_morph_ef.py`
- `chromadb/test/ef/test_multimodal_ef.py`
- `chromadb/test/ef/test_ollama_ef.py`
- `chromadb/test/ef/test_onnx_mini_lm_l6_v2.py`
- `chromadb/test/ef/test_openai_ef.py`
- `chromadb/test/ef/test_voyageai_ef.py`
- `chromadb/test/openssl.cnf`
- `chromadb/test/property/invariants.py`
- `chromadb/test/property/strategies.py`
- `chromadb/test/property/test_add.py`
- `chromadb/test/property/test_add_gc.py`
- `chromadb/test/property/test_add_mcmr.py`
- `chromadb/test/property/test_base64_conversion.py`
- `chromadb/test/property/test_client_url.py`
- `chromadb/test/property/test_collections.py`
- `chromadb/test/property/test_collections_with_database_tenant.py`
- `chromadb/test/property/test_collections_with_database_tenant_overwrite.py`
- `chromadb/test/property/test_cross_version_persist.py`
- `chromadb/test/property/test_embeddings.py`
- `chromadb/test/property/test_filtering.py`
- `chromadb/test/property/test_fork.py`
- `chromadb/test/property/test_persist.py`
- `chromadb/test/property/test_restart_persist.py`
- `chromadb/test/property/test_schema.py`
- `chromadb/test/pytest_inventory.py`
- `chromadb/test/segment/distributed/test_memberlist_provider.py`
- `chromadb/test/segment/distributed/test_rendezvous_hash.py`
- `chromadb/test/segment/test_safe_unpickler.py`
- `chromadb/test/stress/test_many_collections.py`
- `chromadb/test/test_api.py`
- `chromadb/test/test_chroma.py`
- `chromadb/test/test_cli.py`
- `chromadb/test/test_client.py`
- `chromadb/test/test_config.py`
- `chromadb/test/test_multithreaded.py`
- `chromadb/test/utils/cross_version.py`
- `chromadb/test/utils/distance_functions.py`
- `chromadb/test/utils/test_embedding_function_schemas.py`
- `chromadb/test/utils/test_result_df_transform.py`
- ... 40 more

### CI/Docker 후보

- `.github/actions/bandit-scan/Dockerfile`
- `.github/workflows/_build_js_bindings.yml`
- `.github/workflows/_build_release_container.yml`
- `.github/workflows/_build_release_pypi.yml`
- `.github/workflows/_build_release_service_images.yml`
- `.github/workflows/_check_rust_release.yml`
- `.github/workflows/_check_spanner_migrations.yml`
- `.github/workflows/_deploy.yml`
- `.github/workflows/_go-tests.yml`
- `.github/workflows/_javascript-client-tests.yml`
- `.github/workflows/_python-tests.yml`
- `.github/workflows/_python-vulnerability-scan.yml`
- `.github/workflows/_rust-tests.yml`
- `.github/workflows/apply-hotfix.yaml`
- `.github/workflows/nightly-tests.yml`
- `.github/workflows/pr-check-title.yml`
- `.github/workflows/pr-review-checklist.yml`
- `.github/workflows/pr.yml`
- `.github/workflows/release-chromadb.yml`
- `.github/workflows/release-cli.yml`
- `.github/workflows/release-dev-javascript-client.yml`
- `.github/workflows/release-helm-chart.yml`
- `.github/workflows/release-javascript-client.yml`
- `Dockerfile`
- `bin/templates/docker-compose.yml`
- `deployments/aws/docker-compose.yml`
- `docker-compose.server.example.yml`
- `docker-compose.test-auth.yml`
- `docker-compose.test.yml`
- `docker-compose.yml`
- `examples/observability/docker-compose.local-observability.yml`
- `examples/server_side_embeddings/huggingface/docker-compose.yml`
- `go/Dockerfile`
- `k8s/test/postgres/Dockerfile`
- `rust/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 653 |
| .py | 240 |
| .ts | 230 |
| .mdx | 125 |
| .json | 122 |
| .go | 98 |
| .sql | 95 |
| .md | 79 |
| .yaml | 77 |
| .png | 57 |
| .toml | 46 |
| .yml | 35 |
| .sh | 24 |
| .ipynb | 16 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `rust/ 내부 책임 분리`
- `clients/ 내부 책임 분리`
- `chromadb/ 내부 책임 분리`
- `bin/templates/docker-compose.yml 스펙/명령 의미`
- `k8s/distributed-chroma/templates/compaction-service-memberlist-cr.yaml 스펙/명령 의미`
- `k8s/distributed-chroma/templates/compaction-service.yaml 스펙/명령 의미`
- `k8s/distributed-chroma/templates/fn-consumer.yaml 스펙/명령 의미`
- `k8s/distributed-chroma/templates/foundation-service.yaml 스펙/명령 의미`
- `.github/actions/bandit-scan/Dockerfile 실행 스크립트와 패키지 경계`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `bin/templates/docker-compose.yml 실행 스크립트와 패키지 경계`
- `clients/js/examples/node/package.json 실행 스크립트와 패키지 경계`

