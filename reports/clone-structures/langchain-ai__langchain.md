# langchain-ai/langchain 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/langchain-ai__langchain |
| remote | https://github.com/langchain-ai/langchain |
| HEAD | 0392b6b (2026-06-12) fix(core): fix Pydantic v1 support in tools/runnable (#33698) |
| branch | master |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 2937 |
| dirs | 556 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quickstart`, `or`, `LangChain ecosystem`, `Why use LangChain?`, `Documentation`, `Additional resources`

> <div align="center" <a href="https //docs.langchain.com/oss/python/langchain/overview" <picture <source media="(prefers color scheme dark)" srcset=".github/images/logo dark.svg" <source media="(prefers color scheme light)" srcset=".github/images/logo light.svg" <img alt="LangChain Logo" src=".github/images/logo dark.svg" width="50%" </picture </a </div <div align="center" <h3 The agent engineering platform.</h3 </div <div align="center" <a href="https //opensource.org/licenses/MIT" target=" blank" <img src="https //img.shields.io/pypi/l/langchain" alt="PyPI License" </a <a href="https //pypistats.org/packages/langchain" target=" blank" <img src="https //img.shields.io/pepy/dt/langchain" alt="PyPI Downloads" </a <a href="https //pypi.org/project/langchain/ history" target=" blank" <img src="https //img.shields.io/pypi/v/langchain?label=%20" alt="Version" </a <a href="https //x.com/langcha

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .devcontainer | dir |
| .dockerignore | file |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .markdownlint.json | file |
| .mcp.json | file |
| .pre-commit-config.yaml | file |
| .vscode | dir |
| AGENTS.md | file |
| CITATION.cff | file |
| CLAUDE.md | file |
| libs | dir |
| LICENSE | file |
| README.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| libs/ | 2873 |
| .github/ | 47 |
| (root) | 12 |
| .devcontainer/ | 3 |
| .vscode/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| libs/ | 2873 | large |
| libs/langchain/ | 1655 | large |
| libs/langchain/langchain_classic/ | 1329 | large |
| libs/partners/ | 588 | large |
| libs/core/ | 388 | large |
| libs/langchain/tests/ | 315 | large |
| libs/core/tests/ | 199 | large |
| libs/core/langchain_core/ | 181 | large |
| libs/langchain_v1/ | 153 | large |
| libs/partners/openai/ | 117 | large |
| libs/langchain_v1/tests/ | 111 | large |
| libs/partners/anthropic/ | 69 | large |
| .github/ | 47 | large |
| libs/partners/qdrant/ | 46 | large |
| libs/standard-tests/ | 42 | large |
| libs/partners/perplexity/ | 41 | large |
| libs/partners/fireworks/ | 37 | large |
| libs/partners/huggingface/ | 36 | large |
| libs/langchain_v1/langchain/ | 34 | large |
| libs/partners/groq/ | 33 | large |
| libs/partners/ollama/ | 33 | large |
| libs/text-splitters/ | 32 | large |
| libs/partners/mistralai/ | 30 | large |
| .github/workflows/ | 28 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `libs/core/pyproject.toml`
- `libs/core/uv.lock`
- `libs/langchain/pyproject.toml`
- `libs/langchain/uv.lock`
- `libs/langchain_v1/pyproject.toml`
- `libs/langchain_v1/uv.lock`
- `libs/model-profiles/pyproject.toml`
- `libs/model-profiles/uv.lock`
- `libs/partners/anthropic/pyproject.toml`
- `libs/partners/anthropic/uv.lock`
- `libs/partners/chroma/pyproject.toml`
- `libs/partners/chroma/uv.lock`
- `libs/partners/deepseek/pyproject.toml`
- `libs/partners/deepseek/uv.lock`
- `libs/partners/exa/pyproject.toml`
- `libs/partners/exa/uv.lock`
- `libs/partners/fireworks/pyproject.toml`
- `libs/partners/fireworks/uv.lock`
- `libs/partners/groq/pyproject.toml`
- `libs/partners/groq/uv.lock`
- `libs/partners/huggingface/pyproject.toml`
- `libs/partners/huggingface/uv.lock`
- `libs/partners/mistralai/pyproject.toml`
- `libs/partners/mistralai/uv.lock`
- `libs/partners/nomic/pyproject.toml`
- `libs/partners/nomic/uv.lock`
- `libs/partners/ollama/pyproject.toml`
- `libs/partners/ollama/uv.lock`
- `libs/partners/openai/pyproject.toml`
- `libs/partners/openai/uv.lock`
- `libs/partners/openrouter/pyproject.toml`
- `libs/partners/openrouter/uv.lock`
- `libs/partners/perplexity/pyproject.toml`
- `libs/partners/perplexity/uv.lock`
- `libs/partners/qdrant/pyproject.toml`
- `libs/partners/qdrant/uv.lock`
- `libs/partners/xai/pyproject.toml`
- `libs/partners/xai/uv.lock`
- `libs/standard-tests/pyproject.toml`
- `libs/standard-tests/uv.lock`
- `libs/text-splitters/pyproject.toml`
- `libs/text-splitters/uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| libs/core/pyproject.toml | langchain-core | false | true | true | true |
| libs/langchain/pyproject.toml | langchain-classic | false | true | true | true |
| libs/langchain_v1/pyproject.toml | langchain | false | true | true | true |
| libs/model-profiles/pyproject.toml | langchain-model-profiles | false | true | true | true |
| libs/partners/anthropic/pyproject.toml | langchain-anthropic | false | true | true | true |
| libs/partners/chroma/pyproject.toml | langchain-chroma | false | true | true | true |
| libs/partners/deepseek/pyproject.toml | langchain-deepseek | false | true | true | true |
| libs/partners/exa/pyproject.toml | langchain-exa | false | true | true | true |
| libs/partners/fireworks/pyproject.toml | langchain-fireworks | false | true | true | true |
| libs/partners/groq/pyproject.toml | langchain-groq | false | true | true | true |
| libs/partners/huggingface/pyproject.toml | langchain-huggingface | false | true | true | true |
| libs/partners/mistralai/pyproject.toml | langchain-mistralai | false | true | true | true |
| libs/partners/nomic/pyproject.toml | langchain-nomic | false | true | true | true |
| libs/partners/ollama/pyproject.toml | langchain-ollama | false | true | true | true |
| libs/partners/openai/pyproject.toml | langchain-openai | false | true | true | true |
| libs/partners/openrouter/pyproject.toml | langchain-openrouter | false | true | true | true |
| libs/partners/perplexity/pyproject.toml | langchain-perplexity | false | true | true | true |
| libs/partners/qdrant/pyproject.toml | langchain-qdrant | false | true | true | true |
| libs/partners/xai/pyproject.toml | langchain-xai | false | true | true | true |
| libs/standard-tests/pyproject.toml | langchain-tests | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.devcontainer/README.md`
- `README.md`
- `libs/README.md`
- `libs/core/README.md`
- `libs/langchain/README.md`
- `libs/langchain/tests/integration_tests/examples/README.org`
- `libs/langchain/tests/integration_tests/examples/README.rst`
- `libs/langchain_v1/README.md`
- `libs/model-profiles/README.md`
- `libs/partners/README.md`
- `libs/partners/anthropic/README.md`
- `libs/partners/chroma/README.md`
- `libs/partners/deepseek/README.md`
- `libs/partners/exa/README.md`
- `libs/partners/fireworks/README.md`
- `libs/partners/groq/README.md`
- `libs/partners/huggingface/README.md`
- `libs/partners/mistralai/README.md`
- `libs/partners/nomic/README.md`
- `libs/partners/ollama/README.md`
- `libs/partners/openai/README.md`
- `libs/partners/openrouter/README.md`
- `libs/partners/perplexity/README.md`
- `libs/partners/qdrant/README.md`
- `libs/partners/xai/README.md`
- `libs/standard-tests/README.md`
- `libs/text-splitters/README.md`

### 에이전트 지침 후보

- `.mcp.json`
- `AGENTS.md`
- `CLAUDE.md`
- `libs/partners/anthropic/tests/cassettes/test_remote_mcp.yaml.gz`
- `libs/partners/openai/tests/cassettes/test_mcp_builtin.yaml.gz`
- `libs/partners/openai/tests/cassettes/test_mcp_builtin_zdr.yaml.gz`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `libs/core/tests/__init__.py`
- `libs/core/tests/benchmarks/__init__.py`
- `libs/core/tests/benchmarks/test_async_callbacks.py`
- `libs/core/tests/benchmarks/test_imports.py`
- `libs/core/tests/integration_tests/__init__.py`
- `libs/core/tests/integration_tests/test_compile.py`
- `libs/core/tests/unit_tests/__init__.py`
- `libs/core/tests/unit_tests/_api/__init__.py`
- `libs/core/tests/unit_tests/_api/test_beta_decorator.py`
- `libs/core/tests/unit_tests/_api/test_deprecation.py`
- `libs/core/tests/unit_tests/_api/test_imports.py`
- `libs/core/tests/unit_tests/_api/test_path.py`
- `libs/core/tests/unit_tests/caches/__init__.py`
- `libs/core/tests/unit_tests/caches/test_in_memory_cache.py`
- `libs/core/tests/unit_tests/callbacks/__init__.py`
- `libs/core/tests/unit_tests/callbacks/test_async_callback_manager.py`
- `libs/core/tests/unit_tests/callbacks/test_dispatch_custom_event.py`
- `libs/core/tests/unit_tests/callbacks/test_handle_event.py`
- `libs/core/tests/unit_tests/callbacks/test_imports.py`
- `libs/core/tests/unit_tests/callbacks/test_sync_callback_manager.py`
- `libs/core/tests/unit_tests/callbacks/test_usage_callback.py`
- `libs/core/tests/unit_tests/chat_history/__init__.py`
- `libs/core/tests/unit_tests/chat_history/test_chat_history.py`
- `libs/core/tests/unit_tests/conftest.py`
- `libs/core/tests/unit_tests/data/prompt_file.txt`
- `libs/core/tests/unit_tests/data/prompts/prompt_extra_args.json`
- `libs/core/tests/unit_tests/data/prompts/prompt_missing_args.json`
- `libs/core/tests/unit_tests/data/prompts/simple_prompt.json`
- `libs/core/tests/unit_tests/dependencies/__init__.py`
- `libs/core/tests/unit_tests/dependencies/test_dependencies.py`
- `libs/core/tests/unit_tests/document_loaders/__init__.py`
- `libs/core/tests/unit_tests/document_loaders/test_base.py`
- `libs/core/tests/unit_tests/document_loaders/test_langsmith.py`
- `libs/core/tests/unit_tests/documents/__init__.py`
- `libs/core/tests/unit_tests/documents/test_document.py`
- `libs/core/tests/unit_tests/documents/test_imports.py`
- `libs/core/tests/unit_tests/documents/test_str.py`
- `libs/core/tests/unit_tests/embeddings/__init__.py`
- `libs/core/tests/unit_tests/embeddings/test_deterministic_embedding.py`
- `libs/core/tests/unit_tests/example_selectors/__init__.py`
- `libs/core/tests/unit_tests/example_selectors/test_base.py`
- `libs/core/tests/unit_tests/example_selectors/test_imports.py`
- `libs/core/tests/unit_tests/example_selectors/test_length_based_example_selector.py`
- `libs/core/tests/unit_tests/example_selectors/test_similarity.py`
- `libs/core/tests/unit_tests/examples/example-non-utf8.csv`
- `libs/core/tests/unit_tests/examples/example-non-utf8.txt`
- `libs/core/tests/unit_tests/examples/example-utf8.csv`
- `libs/core/tests/unit_tests/examples/example-utf8.txt`
- `libs/core/tests/unit_tests/examples/example_prompt.json`
- `libs/core/tests/unit_tests/examples/examples.json`
- `libs/core/tests/unit_tests/examples/examples.yaml`
- `libs/core/tests/unit_tests/examples/few_shot_prompt.json`
- `libs/core/tests/unit_tests/examples/few_shot_prompt.yaml`
- `libs/core/tests/unit_tests/examples/few_shot_prompt_example_prompt.json`
- `libs/core/tests/unit_tests/examples/few_shot_prompt_examples_in.json`
- `libs/core/tests/unit_tests/examples/few_shot_prompt_yaml_examples.yaml`
- `libs/core/tests/unit_tests/examples/jinja_injection_prompt.json`
- `libs/core/tests/unit_tests/examples/jinja_injection_prompt.yaml`
- `libs/core/tests/unit_tests/examples/prompt_with_output_parser.json`
- `libs/core/tests/unit_tests/examples/simple_prompt.json`
- `libs/core/tests/unit_tests/examples/simple_prompt.yaml`
- `libs/core/tests/unit_tests/examples/simple_prompt_with_template_file.json`
- `libs/core/tests/unit_tests/examples/simple_template.txt`
- `libs/core/tests/unit_tests/fake/__init__.py`
- `libs/core/tests/unit_tests/fake/callbacks.py`
- `libs/core/tests/unit_tests/fake/test_fake_chat_model.py`
- `libs/core/tests/unit_tests/indexing/__init__.py`
- `libs/core/tests/unit_tests/indexing/test_hashed_document.py`
- `libs/core/tests/unit_tests/indexing/test_in_memory_indexer.py`
- `libs/core/tests/unit_tests/indexing/test_in_memory_record_manager.py`
- `libs/core/tests/unit_tests/indexing/test_indexing.py`
- `libs/core/tests/unit_tests/indexing/test_public_api.py`
- `libs/core/tests/unit_tests/language_models/__init__.py`
- `libs/core/tests/unit_tests/language_models/chat_models/__init__.py`
- `libs/core/tests/unit_tests/language_models/chat_models/test_base.py`
- `libs/core/tests/unit_tests/language_models/chat_models/test_benchmark.py`
- `libs/core/tests/unit_tests/language_models/chat_models/test_cache.py`
- `libs/core/tests/unit_tests/language_models/chat_models/test_rate_limiting.py`
- `libs/core/tests/unit_tests/language_models/llms/__init__.py`
- `libs/core/tests/unit_tests/language_models/llms/test_base.py`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/docker-compose.yaml`
- `.github/workflows/_compile_integration_test.yml`
- `.github/workflows/_lint.yml`
- `.github/workflows/_refresh_model_profiles.yml`
- `.github/workflows/_release.yml`
- `.github/workflows/_test.yml`
- `.github/workflows/_test_pydantic.yml`
- `.github/workflows/_test_vcr.yml`
- `.github/workflows/auto-label-by-package.yml`
- `.github/workflows/block_fork_main_prs.yml`
- `.github/workflows/bump_uv_pin.yml`
- `.github/workflows/check_agents_sync.yml`
- `.github/workflows/check_diffs.yml`
- `.github/workflows/check_extras_sync.yml`
- `.github/workflows/check_release_deps.yml`
- `.github/workflows/check_versions.yml`
- `.github/workflows/close_unchecked_issues.yml`
- `.github/workflows/codspeed.yml`
- `.github/workflows/integration_tests.yml`
- `.github/workflows/pr_labeler.yml`
- `.github/workflows/pr_labeler_backfill.yml`
- `.github/workflows/pr_lint.yml`
- `.github/workflows/pr_lint_trailer.yml`
- `.github/workflows/refresh_model_profiles.yml`
- `.github/workflows/remove_waiting_on_author.yml`
- `.github/workflows/reopen_on_assignment.yml`
- `.github/workflows/require_issue_link.yml`
- `.github/workflows/tag-external-issues.yml`
- `.github/workflows/v03_api_doc_build.yml`
- `libs/langchain/tests/integration_tests/memory/docker-compose/elasticsearch.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 2520 |
| .gz | 61 |
| .json | 47 |
| .yml | 38 |
| .toml | 29 |
| .md | 28 |
| .ambr | 26 |
| makefile | 23 |
| .lock | 21 |
| .sh | 20 |
| .typed | 20 |
| .txt | 18 |
| license | 18 |
| .gitignore | 15 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `libs/ 내부 책임 분리`
- `libs/langchain/ 내부 책임 분리`
- `libs/langchain/langchain_classic/ 내부 책임 분리`
- `libs/partners/ 내부 책임 분리`
- `libs/core/ 내부 책임 분리`
- `libs/core/pyproject.toml 실행 스크립트와 패키지 경계`
- `libs/core/uv.lock 실행 스크립트와 패키지 경계`
- `libs/langchain/pyproject.toml 실행 스크립트와 패키지 경계`
- `libs/langchain/uv.lock 실행 스크립트와 패키지 경계`
- `libs/langchain_v1/pyproject.toml 실행 스크립트와 패키지 경계`

