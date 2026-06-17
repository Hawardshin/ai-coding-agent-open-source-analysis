# StarTrail-org/LEANN 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/StarTrail-org__LEANN |
| remote | https://github.com/StarTrail-org/LEANN |
| HEAD | cfb1382 (2026-06-14) style(chunking_utils): rename overlap_tokens to overlap_size (#376) |
| branch | main |
| groups | llm-wiki-100 |
| files | 279 |
| dirs | 73 |
| stack | Python |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Why LEANN?`, `Installation`, `📦 Prerequisites: Install uv`, `🚀 Quick Install`, `CPU-only (Linux): use the `cpu` extra (e.g. `leann[cpu]`)`, `For MKL in DiskANN`, `For MKL in DiskANN`, `Install toolchain (if not already present)`, `Install C++ dependencies via vcpkg`, `Set environment variables (adjust VCPKG_ROOT to your vcpkg path)`, `Quick Start`, `Build an index`, `Search`, `Chat with your data`, `RAG on Everything!`, `Generation Model Setup`, `🖥️ Local Inference Engines (Recommended for full privacy)`, `☁️ Cloud Providers`

> <p align="center" <img src="assets/logo text.png" alt="LEANN Logo" width="400" </p <p align="center" <a href="https //trendshift.io/repositories/15049" target=" blank" <img src="https //trendshift.io/api/badge/repositories/15049" alt="yichuan w/LEANN Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align="center" <img src="https //img.shields.io/badge/Python 3.9%20%7C%203.10%20%7C%203.11%20%7C%203.12%20%7C%203.13 blue.svg" alt="Python Versions" <img src="https //github.com/yichuan w/LEANN/actions/workflows/build and publish.yml/badge.svg" alt="CI Status" <img src="https //img.shields.io/badge/Platform Ubuntu%20%26%20Arch%20%26%20WSL%20%7C%20macOS%20(ARM64%2FIntel)%20%7C%20Windows lightgrey" alt="Platform" <img src="https //img.shields.io/badge/License MIT green.svg" alt="MIT License" <img src="https //img.shields.io/badge/MCP Native%20Integration blue" al

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .devcontainer | dir |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .pre-commit-config.yaml | file |
| .python-version | file |
| .vscode | dir |
| apps | dir |
| assets | dir |
| benchmarks | dir |
| CLAUDE.md | file |
| data | dir |
| demo.ipynb | file |
| docker | dir |
| docs | dir |
| examples | dir |
| LICENSE | file |
| llms.txt | file |
| packages | dir |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| skills | dir |
| sky | dir |
| tests | dir |
| uv.lock | file |
| videos | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 57 |
| tests/ | 49 |
| apps/ | 47 |
| benchmarks/ | 43 |
| docs/ | 26 |
| (root) | 11 |
| .github/ | 8 |
| assets/ | 7 |
| examples/ | 7 |
| scripts/ | 5 |
| data/ | 4 |
| docker/ | 4 |
| videos/ | 4 |
| skills/ | 3 |
| .vscode/ | 2 |
| .devcontainer/ | 1 |
| sky/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| apps/ | 47 | preferred |
| packages/ | 57 | preferred |
| docs/ | 26 | preferred |
| examples/ | 7 | preferred |
| tests/ | 49 | preferred |
| skills/ | 3 | preferred |
| scripts/ | 5 | preferred |
| benchmarks/ | 43 | large |
| packages/leann-core/ | 21 | large |
| packages/leann-core/src/ | 19 | large |
| tests/openclaw/ | 14 | large |
| packages/leann-backend-diskann/ | 10 | large |
| .github/ | 8 | large |
| apps/multimodal/ | 8 | large |
| apps/multimodal/vision-based-pdf-multi-vector/ | 8 | large |
| assets/ | 7 | large |
| benchmarks/contextbench/ | 7 | large |
| benchmarks/update/ | 7 | large |
| docs/videos/ | 6 | large |
| packages/leann-backend-hnsw/ | 6 | large |
| packages/leann-backend-diskann/leann_backend_diskann/ | 5 | large |
| .github/workflows/ | 4 | large |
| benchmarks/contextbench/scripts/ | 4 | large |
| benchmarks/enron_emails/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker/Dockerfile`
- `packages/leann-backend-diskann/pyproject.toml`
- `packages/leann-backend-flashlib-ivf/pyproject.toml`
- `packages/leann-backend-flashlib/pyproject.toml`
- `packages/leann-backend-hnsw/pyproject.toml`
- `packages/leann-backend-ivf/pyproject.toml`
- `packages/leann-core/pyproject.toml`
- `packages/leann/pyproject.toml`
- `pyproject.toml`
- `tests/openclaw/docker-compose.yml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| packages/leann-backend-diskann/pyproject.toml | leann-backend-diskann | false | false | false | false |
| packages/leann-backend-flashlib-ivf/pyproject.toml | leann-backend-flashlib-ivf | false | false | false | false |
| packages/leann-backend-flashlib/pyproject.toml | leann-backend-flashlib | false | false | false | false |
| packages/leann-backend-hnsw/pyproject.toml | leann-backend-hnsw | false | false | false | false |
| packages/leann-backend-ivf/pyproject.toml | leann-backend-ivf | false | false | false | false |
| packages/leann-core/pyproject.toml | leann-core | false | false | false | false |
| packages/leann/pyproject.toml | leann | false | false | false | false |
| pyproject.toml | leann-workspace | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `apps/multimodal/vision-based-pdf-multi-vector/README.md`
- `benchmarks/README.md`
- `benchmarks/bm25_diskann_baselines/README.md`
- `benchmarks/contextbench/README.md`
- `benchmarks/data/README.md`
- `benchmarks/enron_emails/README.md`
- `benchmarks/financebench/README.md`
- `benchmarks/laion/README.md`
- `benchmarks/update/README.md`
- `docker/README.md`
- `docs/CHANGELOG.md`
- `docs/COLQWEN_GUIDE.md`
- `docs/CONTRIBUTING.md`
- `docs/RELEASE.md`
- `docs/THINKING_BUDGET_FEATURE.md`
- `docs/ast_chunking_guide.md`
- `docs/code/embedding_model_compare.py`
- `docs/configuration-guide.md`
- `docs/faq.md`
- `docs/features.md`
- `docs/flashlib_backend_guide.md`
- `docs/grep_search.md`
- `docs/metadata_filtering.md`
- `docs/normalized_embeddings.md`
- `docs/openclaw-setup.md`
- `docs/react_agent.md`
- `docs/roadmap.md`
- `docs/slack-setup-guide.md`
- `docs/ultimate_goal.md`
- `docs/user-scripts.md`
- `docs/videos/slack_integration_1.1.png`
- `docs/videos/slack_integration_1.2.png`
- `docs/videos/slack_integration_1.3.png`
- `docs/videos/slack_integration_2.1.png`
- `docs/videos/slack_integration_2.2.png`
- `docs/videos/slack_integration_2.3.png`
- `packages/leann-backend-flashlib-ivf/README.md`
- `packages/leann-backend-flashlib/README.md`
- `packages/leann-backend-ivf/README.md`
- `packages/leann-core/README.md`
- `packages/leann-mcp/README.md`
- `packages/leann/README.md`
- `skills/leann-memory/README.md`
- `tests/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`
- `apps/slack_data/slack_mcp_reader.py`
- `apps/twitter_data/twitter_mcp_reader.py`
- `assets/mcp_leann.png`
- `examples/mcp_integration_demo.py`
- `packages/leann-core/src/leann/mcp.py`
- `packages/leann-mcp/README.md`
- `skills/leann-memory/README.md`
- `skills/leann-memory/claw.json`
- `skills/leann-memory/instructions.md`
- `tests/openclaw/test_mcp_e2e.py`
- `tests/openclaw/test_mcp_protocol.py`
- `tests/openclaw/test_skill_manifest.py`
- `tests/test_mcp_integration.py`
- `tests/test_mcp_standalone.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/README.md`
- `tests/openclaw/.gitignore`
- `tests/openclaw/__init__.py`
- `tests/openclaw/conftest.py`
- `tests/openclaw/docker-compose.yml`
- `tests/openclaw/fixtures/MEMORY.md`
- `tests/openclaw/fixtures/memory/2026-02-15.md`
- `tests/openclaw/fixtures/memory/2026-02-20.md`
- `tests/openclaw/fixtures/memory/2026-02-25.md`
- `tests/openclaw/run_docker_test.sh`
- `tests/openclaw/test_build_and_search.py`
- `tests/openclaw/test_mcp_e2e.py`
- `tests/openclaw/test_mcp_protocol.py`
- `tests/openclaw/test_openclaw_e2e.py`
- `tests/openclaw/test_skill_manifest.py`
- `tests/support/fake_embedding_server_module.py`
- `tests/test_astchunk_integration.py`
- `tests/test_basic.py`
- `tests/test_build_from_arrays.py`
- `tests/test_ci_minimal.py`
- `tests/test_cli_ask.py`
- `tests/test_cli_daemon_workflow.py`
- `tests/test_cli_prompt_template.py`
- `tests/test_cli_verbosity.py`
- `tests/test_cpu_only_install.py`
- `tests/test_diskann_partition.py`
- `tests/test_document_rag.py`
- `tests/test_embedding_batch_size.py`
- `tests/test_embedding_prompt_template.py`
- `tests/test_embedding_server_cli_flags.py`
- `tests/test_embedding_server_manager.py`
- `tests/test_embedding_server_manager_e2e.py`
- `tests/test_flashlib_ivf_backend.py`
- `tests/test_hybrid_search.py`
- `tests/test_incremental_build.py`
- `tests/test_lmstudio_bridge.py`
- `tests/test_mcp_integration.py`
- `tests/test_mcp_standalone.py`
- `tests/test_metadata_filtering.py`
- `tests/test_minimax_provider.py`
- `tests/test_novita_provider.py`
- `tests/test_passage_id_scheme.py`
- `tests/test_prompt_template_e2e.py`
- `tests/test_prompt_template_persistence.py`
- `tests/test_react_dual_source.py`
- `tests/test_readme_examples.py`
- `tests/test_rebuild_cli.py`
- `tests/test_sync.py`
- `tests/test_token_truncation.py`

### CI/Docker 후보

- `.github/workflows/build-and-publish.yml`
- `.github/workflows/build-reusable.yml`
- `.github/workflows/link-check.yml`
- `.github/workflows/release-manual.yml`
- `docker/Dockerfile`
- `tests/openclaw/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 164 |
| .md | 46 |
| .png | 13 |
| .toml | 8 |
| .yml | 8 |
| .gitignore | 5 |
| .sh | 5 |
| .gif | 4 |
| .json | 4 |
| .txt | 4 |
| .csv | 2 |
| .pdf | 2 |
| .yaml | 2 |
| .cc | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `apps/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `docker/Dockerfile 실행 스크립트와 패키지 경계`
- `packages/leann-backend-diskann/pyproject.toml 실행 스크립트와 패키지 경계`
- `packages/leann-backend-flashlib-ivf/pyproject.toml 실행 스크립트와 패키지 경계`
- `packages/leann-backend-flashlib/pyproject.toml 실행 스크립트와 패키지 경계`
- `packages/leann-backend-hnsw/pyproject.toml 실행 스크립트와 패키지 경계`

