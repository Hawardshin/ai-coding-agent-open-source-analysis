# run-llama/llama_index 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/run-llama__llama_index |
| remote | https://github.com/run-llama/llama_index |
| HEAD | d8d7ffb (2026-06-11) Fix RecursionError in TokenTextSplitter & SentenceSplitter for units larger than chunk_size (#21900) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 10012 |
| dirs | 3792 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🗂️ LlamaIndex 🦙`, `typical pattern`, `concrete example`, `LlamaParse (document agent platform)`, `Important Links`, `🚀 Overview`, `Context`, `Proposed Solution`, `💡 Contributing`, `📄 Documentation`, `💻 Example Usage`, `custom selection of integrations to work with core`, `set the LLM`, `set tokenizer to match LLM`, `set the embed model`, `rebuild storage context`, `load index`, `A note on Verification of Build Assets`

> 🗂️ LlamaIndex 🦙 LlamaIndex OSS (by LlamaIndex) is an open source framework to build agentic applications. Parse is our enterprise platform for agentic OCR, parsing, extraction, indexing and more. You can use LlamaParse with this framework or on its own; see LlamaParse below for signup and product links. 📚 Documentation LlamaParse LlamaIndex OSS LlamaAgents Building with LlamaIndex typically involves working with LlamaIndex core and a chosen set of integrations (or plugins). There are two ways to start building with LlamaIndex in Python 1. Starter llama index . A starter Python package that includes core LlamaIndex as well as a selection of integrations. 2. Customized llama index core . Install core LlamaIndex and add your chosen LlamaIndex integration packages on LlamaHub that are required for your application. There are over 300 LlamaIndex integration packages that work seamlessly wi

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .readthedocs.yaml | file |
| CHANGELOG.md | file |
| CITATION.cff | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| docs.config.mjs | file |
| LICENSE | file |
| llama-dev | dir |
| llama-index-core | dir |
| llama-index-instrumentation | dir |
| llama-index-integrations | dir |
| llama-index-utils | dir |
| Makefile | file |
| pyproject.toml | file |
| README.md | file |
| RELEASE_HEAD.md | file |
| scripts | dir |
| SECURITY.md | file |
| STALE.md | file |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| llama-index-integrations/ | 7229 |
| docs/ | 1878 |
| llama-index-core/ | 755 |
| llama-index-utils/ | 42 |
| llama-dev/ | 40 |
| llama-index-instrumentation/ | 26 |
| .github/ | 21 |
| (root) | 16 |
| scripts/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 1878 | preferred |
| scripts/ | 5 | preferred |
| llama-index-integrations/ | 7229 | large |
| llama-index-integrations/readers/ | 2047 | large |
| llama-index-integrations/llms/ | 1153 | large |
| llama-index-integrations/vector_stores/ | 956 | large |
| llama-index-integrations/tools/ | 839 | large |
| docs/api_reference/ | 785 | large |
| docs/api_reference/api_reference/ | 780 | large |
| llama-index-core/ | 755 | large |
| docs/examples/ | 739 | large |
| llama-index-integrations/embeddings/ | 694 | large |
| llama-index-integrations/storage/ | 522 | large |
| llama-index-core/llama_index/ | 490 | large |
| llama-index-core/llama_index/core/ | 490 | large |
| docs/src/ | 351 | large |
| docs/src/content/ | 351 | large |
| llama-index-integrations/postprocessor/ | 260 | large |
| llama-index-core/tests/ | 259 | large |
| llama-index-integrations/retrievers/ | 143 | large |
| llama-index-integrations/storage/kvstore/ | 140 | large |
| llama-index-integrations/storage/chat_store/ | 136 | large |
| llama-index-integrations/storage/index_store/ | 124 | large |
| llama-index-integrations/storage/docstore/ | 122 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docs/api_reference/poetry.lock`
- `docs/api_reference/pyproject.toml`
- `llama-dev/pyproject.toml`
- `llama-dev/tests/data/llama-index-integrations/storage/subcat/pkg2/pyproject.toml`
- `llama-dev/tests/data/llama-index-integrations/vector_stores/pkg1/pyproject.toml`
- `llama-dev/tests/data/llama-index-packs/pack1/pyproject.toml`
- `llama-dev/tests/data/llama-index-packs/pack2/pyproject.toml`
- `llama-dev/tests/data/llama-index-utils/util/pyproject.toml`
- `llama-dev/uv.lock`
- `llama-index-core/pyproject.toml`
- `llama-index-core/tests/docker-compose.yml`
- `llama-index-core/uv.lock`
- `llama-index-instrumentation/pyproject.toml`
- `llama-index-instrumentation/uv.lock`
- `llama-index-integrations/agent/llama-index-agent-agentmesh/pyproject.toml`
- `llama-index-integrations/agent/llama-index-agent-agentmesh/uv.lock`
- `llama-index-integrations/agent/llama-index-agent-azure/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-agentops/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-agentops/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-aim/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-aim/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-argilla/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-argilla/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-arize-phoenix/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-arize-phoenix/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-honeyhive/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-honeyhive/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-langfuse/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-langfuse/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-literalai/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-literalai/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-openinference/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-openinference/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-opik/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-opik/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-promptlayer/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-promptlayer/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-uptrain/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-uptrain/uv.lock`
- `llama-index-integrations/callbacks/llama-index-callbacks-wandb/pyproject.toml`
- `llama-index-integrations/callbacks/llama-index-callbacks-wandb/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-adapter/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-adapter/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-alephalpha/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-alephalpha/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-alibabacloud-aisearch/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-alibabacloud-aisearch/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-anyscale/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-anyscale/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-autoembeddings/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-autoembeddings/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-azure-inference/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-azure-inference/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-azure-openai/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-azure-openai/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-baseten/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-baseten/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-bedrock/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-bedrock/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-clarifai/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-clarifai/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-clip/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-clip/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-cloudflare-workersai/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-cloudflare-workersai/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-cohere/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-cohere/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-dashscope/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-dashscope/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-databricks/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-databricks/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-deepinfra/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-deepinfra/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/docker-compose.yml`
- `llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-fastembed/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-fastembed/uv.lock`
- `llama-index-integrations/embeddings/llama-index-embeddings-fireworks/pyproject.toml`
- `llama-index-integrations/embeddings/llama-index-embeddings-fireworks/uv.lock`
- ... 20 more

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| docs/api_reference/pyproject.toml | docs | true | false | false | false |
| llama-dev/pyproject.toml | llama-dev | false | false | false | false |
| llama-dev/tests/data/llama-index-integrations/storage/subcat/pkg2/pyproject.toml | pkg2 | false | false | false | false |
| llama-dev/tests/data/llama-index-integrations/vector_stores/pkg1/pyproject.toml | pkg1 | false | false | false | false |
| llama-dev/tests/data/llama-index-packs/pack1/pyproject.toml | pack1 | false | false | false | false |
| llama-dev/tests/data/llama-index-packs/pack2/pyproject.toml | pack2 | false | false | false | false |
| llama-dev/tests/data/llama-index-utils/util/pyproject.toml | util | false | false | false | false |
| llama-index-core/pyproject.toml | llama-index-core | false | true | false | false |
| llama-index-instrumentation/pyproject.toml | llama-index-instrumentation | false | false | false | false |
| llama-index-integrations/agent/llama-index-agent-agentmesh/pyproject.toml | llama-index-agent-agentmesh | false | false | false | false |
| llama-index-integrations/agent/llama-index-agent-azure/pyproject.toml | llama-index-agent-azure-foundry | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-agentops/pyproject.toml | llama-index-callbacks-agentops | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-aim/pyproject.toml | llama-index-callbacks-aim | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-argilla/pyproject.toml | llama-index-callbacks-argilla | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-arize-phoenix/pyproject.toml | llama-index-callbacks-arize-phoenix | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-honeyhive/pyproject.toml | llama-index-callbacks-honeyhive | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-langfuse/pyproject.toml | llama-index-callbacks-langfuse | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-literalai/pyproject.toml | llama-index-callbacks-literalai | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-openinference/pyproject.toml | llama-index-callbacks-openinference | false | false | false | false |
| llama-index-integrations/callbacks/llama-index-callbacks-opik/pyproject.toml | llama-index-callbacks-opik | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/.gitignore`
- `docs/DOCS_README.md`
- `docs/api_reference/api_reference/_static/assets/LlamaLogoBrowserTab.png`
- `docs/api_reference/api_reference/_static/assets/LlamaSquareBlack.svg`
- `docs/api_reference/api_reference/agent/index.md`
- `docs/api_reference/api_reference/callbacks/agentops.md`
- `docs/api_reference/api_reference/callbacks/aim.md`
- `docs/api_reference/api_reference/callbacks/argilla.md`
- `docs/api_reference/api_reference/callbacks/arize_phoenix.md`
- `docs/api_reference/api_reference/callbacks/honeyhive.md`
- `docs/api_reference/api_reference/callbacks/index.md`
- `docs/api_reference/api_reference/callbacks/langfuse.md`
- `docs/api_reference/api_reference/callbacks/literalai.md`
- `docs/api_reference/api_reference/callbacks/llama_debug.md`
- `docs/api_reference/api_reference/callbacks/openinference.md`
- `docs/api_reference/api_reference/callbacks/opik.md`
- `docs/api_reference/api_reference/callbacks/promptlayer.md`
- `docs/api_reference/api_reference/callbacks/token_counter.md`
- `docs/api_reference/api_reference/callbacks/uptrain.md`
- `docs/api_reference/api_reference/callbacks/wandb.md`
- `docs/api_reference/api_reference/chat_engines/condense_plus_context.md`
- `docs/api_reference/api_reference/chat_engines/condense_question.md`
- `docs/api_reference/api_reference/chat_engines/context.md`
- `docs/api_reference/api_reference/chat_engines/index.md`
- `docs/api_reference/api_reference/chat_engines/simple.md`
- `docs/api_reference/api_reference/embeddings/adapter.md`
- `docs/api_reference/api_reference/embeddings/alephalpha.md`
- `docs/api_reference/api_reference/embeddings/alibabacloud_aisearch.md`
- `docs/api_reference/api_reference/embeddings/anyscale.md`
- `docs/api_reference/api_reference/embeddings/autoembeddings.md`
- `docs/api_reference/api_reference/embeddings/azure_inference.md`
- `docs/api_reference/api_reference/embeddings/azure_openai.md`
- `docs/api_reference/api_reference/embeddings/baseten.md`
- `docs/api_reference/api_reference/embeddings/bedrock.md`
- `docs/api_reference/api_reference/embeddings/clarifai.md`
- `docs/api_reference/api_reference/embeddings/clip.md`
- `docs/api_reference/api_reference/embeddings/cloudflare_workersai.md`
- `docs/api_reference/api_reference/embeddings/cohere.md`
- `docs/api_reference/api_reference/embeddings/dashscope.md`
- `docs/api_reference/api_reference/embeddings/databricks.md`
- `docs/api_reference/api_reference/embeddings/deepinfra.md`
- `docs/api_reference/api_reference/embeddings/elasticsearch.md`
- `docs/api_reference/api_reference/embeddings/fastembed.md`
- `docs/api_reference/api_reference/embeddings/fireworks.md`
- `docs/api_reference/api_reference/embeddings/gaudi.md`
- `docs/api_reference/api_reference/embeddings/gigachat.md`
- `docs/api_reference/api_reference/embeddings/google_genai.md`
- `docs/api_reference/api_reference/embeddings/heroku.md`
- ... 30 more

### 에이전트 지침 후보

- `docs/api_reference/api_reference/tools/mcp.md`
- `docs/api_reference/api_reference/tools/mcp_discovery.md`
- `docs/examples/tools/mcp.ipynb`
- `docs/examples/tools/mcp_agent_tools.ipynb`
- `docs/examples/tools/mcp_toolbox.ipynb`
- `docs/src/content/docs/framework/module_guides/mcp/_meta.yml`
- `docs/src/content/docs/framework/module_guides/mcp/convert_existing.md`
- `docs/src/content/docs/framework/module_guides/mcp/index.md`
- `docs/src/content/docs/framework/module_guides/mcp/llamacloud_mcp.md`
- `docs/src/content/docs/framework/module_guides/mcp/llamaindex_mcp.md`
- `docs/src/content/docs/framework/understanding/putting_it_all_together/agents.md`
- `docs/src/content/docs/framework/use_cases/agents.md`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/.gitignore`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/CHANGELOG.md`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/LICENSE`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/Makefile`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/README.md`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/examples/basic_usage.py`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/llama_index/tools/mcp_discovery/__init__.py`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/llama_index/tools/mcp_discovery/base.py`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/pyproject.toml`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/tests/test_mcp_discovery.py`
- `llama-index-integrations/tools/llama-index-tools-mcp-discovery/uv.lock`
- `llama-index-integrations/tools/llama-index-tools-mcp/.gitignore`
- `llama-index-integrations/tools/llama-index-tools-mcp/CHANGELOG.md`
- `llama-index-integrations/tools/llama-index-tools-mcp/LICENSE`
- `llama-index-integrations/tools/llama-index-tools-mcp/Makefile`
- `llama-index-integrations/tools/llama-index-tools-mcp/README.md`
- `llama-index-integrations/tools/llama-index-tools-mcp/examples/.env.example`
- `llama-index-integrations/tools/llama-index-tools-mcp/examples/mcp.ipynb`
- `llama-index-integrations/tools/llama-index-tools-mcp/examples/mcp_server.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/llama_index/tools/mcp/__init__.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/llama_index/tools/mcp/base.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/llama_index/tools/mcp/client.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/llama_index/tools/mcp/tool_spec_mixins.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/llama_index/tools/mcp/utils.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/pyproject.toml`
- `llama-index-integrations/tools/llama-index-tools-mcp/tests/__init__.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/tests/schemas.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/tests/server.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/tests/test_client.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/tests/test_tools_mcp.py`
- `llama-index-integrations/tools/llama-index-tools-mcp/uv.lock`

### 스펙/템플릿/명령/스킬 후보

- `llama-index-core/llama_index/core/agent/react/templates/system_header_template.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `llama-dev/llama_dev/test/__init__.py`
- `llama-dev/tests/__init__.py`
- `llama-dev/tests/conftest.py`
- `llama-dev/tests/data/llama-index-integrations/not_a_category`
- `llama-dev/tests/data/llama-index-integrations/storage/subcat/pkg2/pyproject.toml`
- `llama-dev/tests/data/llama-index-integrations/storage/subcat/pkg2/tests/.gitkeep`
- `llama-dev/tests/data/llama-index-integrations/vector_stores/pkg1/pyproject.toml`
- `llama-dev/tests/data/llama-index-integrations/vector_stores/pkg1/tests/.gitkeep`
- `llama-dev/tests/data/llama-index-packs/not_a_pack/.gitkeep`
- `llama-dev/tests/data/llama-index-packs/pack1/pyproject.toml`
- `llama-dev/tests/data/llama-index-packs/pack1/tests/.gitkeep`
- `llama-dev/tests/data/llama-index-packs/pack2/pyproject.toml`
- `llama-dev/tests/data/llama-index-utils/not_a_util/.gitkeep`
- `llama-dev/tests/data/llama-index-utils/util/pyproject.toml`
- `llama-dev/tests/data/llama-index-utils/util/tests/.gitkeep`
- `llama-dev/tests/pkg/test_bump.py`
- `llama-dev/tests/pkg/test_cmd_exec.py`
- `llama-dev/tests/pkg/test_info.py`
- `llama-dev/tests/release/test_changelog.py`
- `llama-dev/tests/release/test_check.py`
- `llama-dev/tests/test/test_test.py`
- `llama-dev/tests/test_cli.py`
- `llama-dev/tests/test_utils.py`
- `llama-index-core/tests/__init__.py`
- `llama-index-core/tests/agent/__init__.py`
- `llama-index-core/tests/agent/memory/test_simple_composable.py`
- `llama-index-core/tests/agent/memory/test_vector_memory.py`
- `llama-index-core/tests/agent/react/__init__.py`
- `llama-index-core/tests/agent/react/test_prompt_customization.py`
- `llama-index-core/tests/agent/react/test_react_chat_formatter.py`
- `llama-index-core/tests/agent/react/test_react_output_parser.py`
- `llama-index-core/tests/agent/utils/test_agent_utils.py`
- `llama-index-core/tests/agent/workflow/__init__.py`
- `llama-index-core/tests/agent/workflow/test_agent_with_structured_output.py`
- `llama-index-core/tests/agent/workflow/test_code_act_agent.py`
- `llama-index-core/tests/agent/workflow/test_events.py`
- `llama-index-core/tests/agent/workflow/test_function_call.py`
- `llama-index-core/tests/agent/workflow/test_multi_agent_workflow.py`
- `llama-index-core/tests/agent/workflow/test_react_agent.py`
- `llama-index-core/tests/agent/workflow/test_return_direct_e2e.py`
- `llama-index-core/tests/agent/workflow/test_single_agent_workflow.py`
- `llama-index-core/tests/agent/workflow/test_thinking_delta.py`
- `llama-index-core/tests/base/__init__.py`
- `llama-index-core/tests/base/llms/__init__.py`
- `llama-index-core/tests/base/llms/test_types.py`
- `llama-index-core/tests/callbacks/__init__.py`
- `llama-index-core/tests/callbacks/test_llama_debug.py`
- `llama-index-core/tests/callbacks/test_token_budget.py`
- `llama-index-core/tests/callbacks/test_token_counter.py`
- `llama-index-core/tests/chat_engine/__init__.py`
- `llama-index-core/tests/chat_engine/test_condense_plus_context.py`
- `llama-index-core/tests/chat_engine/test_condense_question.py`
- `llama-index-core/tests/chat_engine/test_context.py`
- `llama-index-core/tests/chat_engine/test_mm_condense_plus_context.py`
- `llama-index-core/tests/chat_engine/test_multi_modal_context.py`
- `llama-index-core/tests/chat_engine/test_simple.py`
- `llama-index-core/tests/conftest.py`
- `llama-index-core/tests/docker-compose.yml`
- `llama-index-core/tests/embeddings/__init__.py`
- `llama-index-core/tests/embeddings/test_base.py`
- `llama-index-core/tests/embeddings/test_utils.py`
- `llama-index-core/tests/embeddings/test_with_cache.py`
- `llama-index-core/tests/embeddings/todo_hf_test_utils.py`
- `llama-index-core/tests/evaluation/test_base.py`
- `llama-index-core/tests/evaluation/test_batch_runner.py`
- `llama-index-core/tests/evaluation/test_dataset_generation.py`
- `llama-index-core/tests/evaluation/test_metrics.py`
- `llama-index-core/tests/extractors/test_document_context_extractor.py`
- `llama-index-core/tests/extractors/test_extractor_resilience.py`
- `llama-index-core/tests/graph_stores/test_simple_lpg.py`
- `llama-index-core/tests/indices/__init__.py`
- `llama-index-core/tests/indices/conftest.py`
- `llama-index-core/tests/indices/document_summary/__init__.py`
- `llama-index-core/tests/indices/document_summary/conftest.py`
- `llama-index-core/tests/indices/document_summary/test_index.py`
- `llama-index-core/tests/indices/document_summary/test_retrievers.py`
- `llama-index-core/tests/indices/empty/__init__.py`
- `llama-index-core/tests/indices/empty/test_base.py`
- `llama-index-core/tests/indices/keyword_table/__init__.py`
- `llama-index-core/tests/indices/keyword_table/test_base.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/build_package.yml`
- `.github/workflows/close_new_integration_prs.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/core-typecheck.yml`
- `.github/workflows/coverage_check.yml`
- `.github/workflows/issue_classifier.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/llama_dev_tests.yml`
- `.github/workflows/pre_release.yml`
- `.github/workflows/publish_sub_package.yml`
- `.github/workflows/release.yml`
- `.github/workflows/stale_bot.yml`
- `.github/workflows/sync-docs.yml`
- `.github/workflows/unit_test.yml`
- `llama-index-core/tests/docker-compose.yml`
- `llama-index-integrations/embeddings/llama-index-embeddings-elasticsearch/docker-compose.yml`
- `llama-index-integrations/vector_stores/llama-index-vector-stores-clickhouse/docker-compose.yml`
- `llama-index-integrations/vector_stores/llama-index-vector-stores-elasticsearch/tests/docker-compose.yml`
- `llama-index-integrations/vector_stores/llama-index-vector-stores-mariadb/tests/docker-compose.yaml`
- `llama-index-integrations/vector_stores/llama-index-vector-stores-opensearch/tests/docker-compose.yml`
- `llama-index-integrations/vector_stores/llama-index-vector-stores-solr/tests/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 3826 |
| .md | 1808 |
| .ipynb | 759 |
| .toml | 641 |
| .lock | 620 |
| makefile | 614 |
| license | 600 |
| .gitignore | 587 |
| .txt | 131 |
| .yml | 91 |
| .png | 89 |
| .typed | 80 |
| .mdx | 27 |
| .json | 21 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `llama-index-integrations/ 내부 책임 분리`
- `llama-index-integrations/readers/ 내부 책임 분리`
- `llama-index-integrations/llms/ 내부 책임 분리`
- `llama-index-core/llama_index/core/agent/react/templates/system_header_template.md 스펙/명령 의미`
- `docs/api_reference/poetry.lock 실행 스크립트와 패키지 경계`
- `docs/api_reference/pyproject.toml 실행 스크립트와 패키지 경계`
- `llama-dev/pyproject.toml 실행 스크립트와 패키지 경계`
- `llama-dev/tests/data/llama-index-integrations/storage/subcat/pkg2/pyproject.toml 실행 스크립트와 패키지 경계`
- `llama-dev/tests/data/llama-index-integrations/vector_stores/pkg1/pyproject.toml 실행 스크립트와 패키지 경계`

