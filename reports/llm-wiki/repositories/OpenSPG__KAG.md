# OpenSPG/KAG 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/OpenSPG__KAG |
| remote | https://github.com/OpenSPG/KAG |
| HEAD | fdab15b (2026-01-28) Fix McpExecutor kag_project_config initialization for MCP HTTP store_path (#736) |
| branch | master |
| groups | llm-wiki-100 |
| files | 1211 |
| dirs | 263 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `KAG: Knowledge Augmented Generation`, `1. What is KAG?`, `2. Core Features`, `2.1 Knowledge Representation`, `2.2 Mixed Reasoning Guided by Logic Forms`, `3. Release Notes`, `3.1 Latest Updates`, `3.2 Future Plans`, `4. Quick Start`, `4.1 product-based (for ordinary users)`, `4.1.1 Engine & Dependent Image Installation`, `set the HOME environment variable (only Windows users need to execute this command)`, `set HOME=%USERPROFILE%`, `4.1.2 Use the product`, `4.2 toolkit-based (for developers)`, `4.2.1 Engine & Dependent Image Installation`, `4.2.2 Installation of KAG`, `Create conda env: conda create -n kag-demo python=3.10 && conda activate kag-demo`

> KAG Knowledge Augmented Generation <div align="center" <a href="https //spg.openkg.cn/en US" <img src="./ static/images/OpenSPG 1.png" width="520" alt="openspg logo" </a </div <p align="center" <a href="./README.md" English</a <a href="./README cn.md" 简体中文</a <a href="./README ja.md" 日本語版ドキュメント</a </p <p align="center" <a href='https //arxiv.org/pdf/2409.13731' <img src='https //img.shields.io/badge/arXiv 2409.13731 b31b1b' </a <a href="https //github.com/OpenSPG/KAG/releases/latest" <img src="https //img.shields.io/github/v/release/OpenSPG/KAG?color=blue&label=Latest%20Release" alt="Latest Release" </a <a href="https //openspg.yuque.com/ndx6g9/docs en" <img src="https //img.shields.io/badge/User%20Guide 1e8b93?logo=readthedocs&logoColor=f5f5f5" alt="User Guide" </a <a href="https //github.com/OpenSPG/KAG/blob/main/LICENSE" <img height="21" src="https //img.shields.io/badge/License Apach

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| _static | dir |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .scanignore | file |
| build.sh | file |
| CITATION.cff | file |
| docs | dir |
| kag | dir |
| KAG_VERSION | file |
| knext | dir |
| LEGAL.md | file |
| LICENSE | file |
| MANIFEST.in | file |
| pytest.ini | file |
| README_cn.md | file |
| README_ja.md | file |
| README.md | file |
| requirements.txt | file |
| setup.cfg | file |
| setup.py | file |
| tests | dir |
| upload_dev.sh | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| kag/ | 914 |
| knext/ | 187 |
| tests/ | 60 |
| _static/ | 25 |
| (root) | 17 |
| .github/ | 5 |
| docs/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 3 | preferred |
| tests/ | 60 | preferred |
| kag/ | 914 | large |
| kag/examples/ | 388 | large |
| kag/examples/NetOperatorQA/ | 213 | large |
| knext/ | 187 | large |
| kag/open_benchmark/ | 148 | large |
| kag/solver/ | 116 | large |
| kag/common/ | 100 | large |
| kag/builder/ | 85 | large |
| knext/schema/ | 81 | large |
| knext/schema/rest/ | 70 | large |
| tests/unit/ | 59 | large |
| kag/builder/component/ | 51 | large |
| kag/interface/ | 49 | large |
| kag/common/tools/ | 43 | large |
| kag/open_benchmark/AffairQA/ | 42 | large |
| kag/solver/prompt/ | 42 | large |
| kag/examples/supplychain/ | 37 | large |
| kag/solver/executor/ | 34 | large |
| tests/unit/builder/ | 33 | large |
| kag/examples/csqa/ | 30 | large |
| kag/open_benchmark/prqa/ | 27 | large |
| kag/examples/riskmining/ | 26 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `kag/examples/baidu_map_mcp/pyproject.toml`
- `kag/examples/baidu_map_mcp/uv.lock`
- `requirements.txt`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| kag/examples/baidu_map_mcp/pyproject.toml | baidu-map-mcp-server | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/_category_.json`
- `docs/quickstart.mdx`
- `docs/release_notes.md`
- `kag/common/tools/algorithm_tool/self_cognition/docs/kag_intro_en.md`
- `kag/common/tools/algorithm_tool/self_cognition/docs/kag_intro_zh.md`
- `kag/examples/NetOperatorQA/README.md`
- `kag/examples/README.md`
- `kag/examples/baidu_map_mcp/README.md`
- `kag/examples/baike/README.md`
- `kag/examples/csqa/README.md`
- `kag/examples/domain_kg/README.md`
- `kag/examples/google_web_search_mcp/README.md`
- `kag/examples/medicine/README.md`
- `kag/examples/riskmining/README.md`
- `kag/examples/supplychain/README.md`
- `kag/examples/supplychain/builder/README.md`
- `kag/examples/supplychain/builder/data/README.md`
- `kag/examples/supplychain/reasoner/README.md`
- `kag/examples/supplychain/schema/README.md`
- `kag/open_benchmark/2wiki/README.md`
- `kag/open_benchmark/AffairQA/README.md`
- `kag/open_benchmark/hotpotqa/README.md`
- `kag/open_benchmark/musique/README.md`
- `kag/open_benchmark/prqa/README.md`

### 에이전트 지침 후보

- `_static/images/examples/baike/kag-launch-mcp-server.png`
- `_static/images/examples/baike/kag-mcp-server-call-approve.png`
- `_static/images/examples/baike/kag-mcp-server-call-succeed.png`
- `kag/bin/commands/mcp_server.py`
- `kag/examples/baidu_map_mcp/README.md`
- `kag/examples/baidu_map_mcp/README_cn.md`
- `kag/examples/baidu_map_mcp/baidu_map_mcp_client.py`
- `kag/examples/baidu_map_mcp/kag_config.yaml`
- `kag/examples/baidu_map_mcp/map.py`
- `kag/examples/baidu_map_mcp/pyproject.toml`
- `kag/examples/baidu_map_mcp/uv.lock`
- `kag/examples/baike/mcp_server.md`
- `kag/examples/baike/mcp_server_cn.md`
- `kag/examples/google_web_search_mcp/README.md`
- `kag/examples/google_web_search_mcp/README_cn.md`
- `kag/examples/google_web_search_mcp/google_web_search_client.py`
- `kag/examples/google_web_search_mcp/google_web_search_server.py`
- `kag/examples/google_web_search_mcp/kag_config.yaml`
- `kag/mcp/__init__.py`
- `kag/mcp/server/__init__.py`
- `kag/mcp/server/kag_mcp_server.py`
- `kag/solver/executor/mcp/__init__.py`
- `kag/solver/executor/mcp/mcp.json`
- `kag/solver/executor/mcp/mcp_client.py`
- `kag/solver/executor/mcp/mcp_executor.py`
- `kag/solver/pipeline/mcp_pipeline.py`
- `kag/solver/pipelineconf/mcp.yaml`
- `kag/solver/planner/mcp_planner.py`
- `kag/solver/prompt/mcp_tool_call.py`

### 스펙/템플릿/명령/스킬 후보

- `kag/bin/commands/__init__.py`
- `kag/bin/commands/benchmark.py`
- `kag/bin/commands/builder.py`
- `kag/bin/commands/info.py`
- `kag/bin/commands/mcp_server.py`
- `kag/templates/project/builder/__init__.py`
- `kag/templates/project/builder/data/__init__.py`
- `kag/templates/project/builder/indexer.py`
- `kag/templates/project/builder/prompt/__init__.py`
- `kag/templates/project/reasoner/__init__.py`
- `kag/templates/project/schema/__init__.py`
- `kag/templates/project/solver/__init__.py`
- `kag/templates/project/solver/data/__init__.py`
- `kag/templates/project/solver/prompt/__init__.py`
- `kag/templates/schema/{{default}}.schema.tmpl`
- `kag/templates/schema/{{medical}}.schema.tmpl`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/unit/.coverage`
- `tests/unit/.coverage.MacBook-Pro.local.61268.XgTYnYax`
- `tests/unit/__init__.py`
- `tests/unit/builder/__init__.py`
- `tests/unit/builder/component/__init__.py`
- `tests/unit/builder/component/test_batch_vectorizer.py`
- `tests/unit/builder/component/test_config.cfg`
- `tests/unit/builder/component/test_external_graph.py`
- `tests/unit/builder/component/test_extractor.py`
- `tests/unit/builder/component/test_mapping.py`
- `tests/unit/builder/component/test_post_processor.py`
- `tests/unit/builder/component/test_reader.py`
- `tests/unit/builder/component/test_scanner.py`
- `tests/unit/builder/component/test_splitter.py`
- `tests/unit/builder/component/test_writer.py`
- `tests/unit/builder/data/KnowledgeGraphTutorialSub.pdf`
- `tests/unit/builder/data/aiwen.pdf`
- `tests/unit/builder/data/default.docx`
- `tests/unit/builder/data/edges.json`
- `tests/unit/builder/data/long_text_1.txt`
- `tests/unit/builder/data/long_text_2.txt`
- `tests/unit/builder/data/nodes.json`
- `tests/unit/builder/data/test_csv.csv`
- `tests/unit/builder/data/test_csv_headerless.csv`
- `tests/unit/builder/data/test_docx.docx`
- `tests/unit/builder/data/test_json.json`
- `tests/unit/builder/data/test_markdown.md`
- `tests/unit/builder/data/test_pdf.pdf`
- `tests/unit/builder/data/test_txt.txt`
- `tests/unit/builder/data/角色信息表说明.md`
- `tests/unit/builder/data/需求内容test.md`
- `tests/unit/builder/model/__init__.py`
- `tests/unit/builder/model/test_model.py`
- `tests/unit/builder/prompt/__init__.py`
- `tests/unit/builder/prompt/test_prompt.py`
- `tests/unit/builder/test_runner.py`
- `tests/unit/common/data/cfg.yaml`
- `tests/unit/common/data/cfg.yaml.tmpl`
- `tests/unit/common/kag_config.yaml.bak`
- `tests/unit/common/kag_utils.py`
- `tests/unit/common/llm/test_llm.py`
- `tests/unit/common/registry/test_registry.py`
- `tests/unit/common/test_checkpointer.py`
- `tests/unit/common/test_conf.py`
- `tests/unit/common/test_template.py`
- `tests/unit/common/vectorize_model/test_vectorize_model.py`
- `tests/unit/executor/__init__.py`
- `tests/unit/executor/kag_config.yaml`
- `tests/unit/executor/kag_pipeline_test.py`
- `tests/unit/kag_config.yaml`
- `tests/unit/solver/__init__.py`
- `tests/unit/solver/logic_form_executor/__init__.py`
- `tests/unit/solver/logic_form_executor/parse_test.py`
- `tests/unit/solver/logic_form_plan/__init__.py`
- `tests/unit/solver/logic_form_plan/test_planner.py`
- `tests/unit/test_planner/__init__.py`
- `tests/unit/test_planner/kag_config.yaml`
- `tests/unit/test_planner/solver/__init__.py`
- `tests/unit/test_planner/solver/run.py`

### CI/Docker 후보

- `.github/workflows/code-check.yml`
- `.github/workflows/pr-title-check.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 736 |
| .md | 251 |
| .yaml | 47 |
| .csv | 44 |
| .json | 32 |
| .png | 17 |
| .schema | 13 |
| .gitignore | 12 |
| .txt | 12 |
| .gif | 5 |
| .yml | 5 |
| .dsl | 4 |
| .bak | 3 |
| .pdf | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `kag/ 내부 책임 분리`
- `kag/examples/ 내부 책임 분리`
- `kag/examples/NetOperatorQA/ 내부 책임 분리`
- `kag/bin/commands/__init__.py 스펙/명령 의미`
- `kag/bin/commands/benchmark.py 스펙/명령 의미`
- `kag/bin/commands/builder.py 스펙/명령 의미`
- `kag/bin/commands/info.py 스펙/명령 의미`
- `kag/bin/commands/mcp_server.py 스펙/명령 의미`
- `kag/examples/baidu_map_mcp/pyproject.toml 실행 스크립트와 패키지 경계`
- `kag/examples/baidu_map_mcp/uv.lock 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

