# stanfordnlp/dspy 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/stanfordnlp__dspy |
| remote | https://github.com/stanfordnlp/dspy |
| HEAD | 85027b1 (2026-06-11) chore(deps): bump urllib3 from 1.26.6 to 2.7.0 in /docs (#9761) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 540 |
| dirs | 149 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `DSPy: _Programming_—not prompting—Foundation Models`, `Documentation: [dspy.ai](https://dspy.ai)`, `Installation`, `📜 Citation & Reading More`

> <p align="center" <img align="center" src="docs/docs/static/img/dspy logo.png" width="460px" / </p <p align="left" DSPy Programming —not prompting—Foundation Models Documentation DSPy Docs DSPy is the framework for programming—rather than prompting—language models . It allows you to iterate fast on building modular AI systems and offers algorithms for optimizing their prompts and weights , whether you're building simple classifiers, sophisticated RAG pipelines, or Agent loops. DSPy stands for Declarative Self improving Python. Instead of brittle prompts, you write compositional Python code and use DSPy to teach your LM to deliver high quality outputs . Learn more via our official documentation site or meet the community, seek help, or start contributing via this GitHub repo and our Discord server. Documentation dspy.ai Please go to the DSPy Docs at dspy.ai Installation To install the ver

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| CONTRIBUTING.md | file |
| docs | dir |
| dspy | dir |
| LICENSE | file |
| pyproject.toml | file |
| README.md | file |
| SECURITY.md | file |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 244 |
| dspy/ | 150 |
| tests/ | 124 |
| .github/ | 14 |
| (root) | 8 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 244 | preferred |
| tests/ | 124 | preferred |
| docs/docs/ | 231 | large |
| dspy/ | 150 | large |
| docs/docs/api/ | 82 | large |
| docs/docs/tutorials/ | 70 | large |
| tests/reliability/ | 25 | large |
| dspy/teleprompt/ | 24 | large |
| docs/docs/static/ | 20 | large |
| dspy/adapters/ | 20 | large |
| dspy/predict/ | 20 | large |
| dspy/utils/ | 20 | large |
| docs/docs/learn/ | 16 | large |
| tests/teleprompt/ | 16 | large |
| tests/utils/ | 15 | large |
| .github/ | 14 | large |
| tests/adapters/ | 14 | large |
| tests/predict/ | 14 | large |
| dspy/clients/ | 13 | large |
| docs/docs/diving-deeper/ | 12 | large |
| docs/docs/getting-started/ | 12 | large |
| dspy/adapters/types/ | 11 | large |
| tests/reliability/complex_types/ | 11 | large |
| dspy/datasets/ | 10 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.github/.internal_dspyai/pyproject.toml`
- `docs/requirements.txt`
- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| .github/.internal_dspyai/pyproject.toml | dspy-ai | false | false | false | false |
| pyproject.toml | dspy | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/.gitignore`
- `docs/Pipfile`
- `docs/Pipfile.lock`
- `docs/README.md`
- `docs/docs/api/adapters/Adapter.md`
- `docs/docs/api/adapters/ChatAdapter.md`
- `docs/docs/api/adapters/JSONAdapter.md`
- `docs/docs/api/adapters/TwoStepAdapter.md`
- `docs/docs/api/adapters/XMLAdapter.md`
- `docs/docs/api/adapters/index.md`
- `docs/docs/api/evaluation/CompleteAndGrounded.md`
- `docs/docs/api/evaluation/Evaluate.md`
- `docs/docs/api/evaluation/EvaluationResult.md`
- `docs/docs/api/evaluation/SemanticF1.md`
- `docs/docs/api/evaluation/answer_exact_match.md`
- `docs/docs/api/evaluation/answer_passage_match.md`
- `docs/docs/api/evaluation/index.md`
- `docs/docs/api/experimental/Citations.md`
- `docs/docs/api/experimental/Document.md`
- `docs/docs/api/experimental/index.md`
- `docs/docs/api/index.md`
- `docs/docs/api/models/BaseLM.md`
- `docs/docs/api/models/Embedder.md`
- `docs/docs/api/models/LM.md`
- `docs/docs/api/models/index.md`
- `docs/docs/api/modules/BestOfN.md`
- `docs/docs/api/modules/ChainOfThought.md`
- `docs/docs/api/modules/CodeAct.md`
- `docs/docs/api/modules/Module.md`
- `docs/docs/api/modules/MultiChainComparison.md`
- `docs/docs/api/modules/Parallel.md`
- `docs/docs/api/modules/Predict.md`
- `docs/docs/api/modules/ProgramOfThought.md`
- `docs/docs/api/modules/RLM.md`
- `docs/docs/api/modules/ReAct.md`
- `docs/docs/api/modules/Refine.md`
- `docs/docs/api/modules/index.md`
- `docs/docs/api/optimizers/BetterTogether.md`
- `docs/docs/api/optimizers/BootstrapFewShot.md`
- `docs/docs/api/optimizers/BootstrapFewShotWithRandomSearch.md`
- `docs/docs/api/optimizers/BootstrapFinetune.md`
- `docs/docs/api/optimizers/BootstrapRS.md`
- `docs/docs/api/optimizers/COPRO.md`
- `docs/docs/api/optimizers/Ensemble.md`
- `docs/docs/api/optimizers/GEPA/GEPA_Advanced.md`
- `docs/docs/api/optimizers/GEPA/overview.md`
- `docs/docs/api/optimizers/InferRules.md`
- `docs/docs/api/optimizers/KNN.md`
- ... 30 more

### 에이전트 지침 후보

- `docs/docs/diving-deeper/tools-react-and-mcp.md`
- `docs/docs/learn/programming/mcp.md`
- `docs/docs/tutorials/mcp/index.md`
- `dspy/utils/mcp.py`
- `tests/utils/resources/mcp_server.py`
- `tests/utils/test_mcp.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/README.md`
- `tests/__init__.py`
- `tests/adapters/conftest.py`
- `tests/adapters/test_adapter_utils.py`
- `tests/adapters/test_audio.py`
- `tests/adapters/test_baml_adapter.py`
- `tests/adapters/test_base_type.py`
- `tests/adapters/test_chat_adapter.py`
- `tests/adapters/test_citation.py`
- `tests/adapters/test_code.py`
- `tests/adapters/test_document.py`
- `tests/adapters/test_json_adapter.py`
- `tests/adapters/test_reasoning.py`
- `tests/adapters/test_tool.py`
- `tests/adapters/test_two_step_adapter.py`
- `tests/adapters/test_xml_adapter.py`
- `tests/callback/test_callback.py`
- `tests/clients/test_cache.py`
- `tests/clients/test_databricks.py`
- `tests/clients/test_disk_serialization.py`
- `tests/clients/test_embedding.py`
- `tests/clients/test_inspect_global_history.py`
- `tests/clients/test_lazy_litellm_import.py`
- `tests/clients/test_lm.py`
- `tests/clients/test_lm_direct_live.py`
- `tests/clients/test_lm_local.py`
- `tests/conftest.py`
- `tests/core/test_types.py`
- `tests/datasets/test_dataset.py`
- `tests/docs/test_mkdocs_links.py`
- `tests/evaluate/test_auto_evaluation.py`
- `tests/evaluate/test_evaluate.py`
- `tests/evaluate/test_metrics.py`
- `tests/examples/test_baleen.py`
- `tests/metadata/test_metadata.py`
- `tests/mock_interpreter.py`
- `tests/predict/test_aggregation.py`
- `tests/predict/test_best_of_n.py`
- `tests/predict/test_chain_of_thought.py`
- `tests/predict/test_code_act.py`
- `tests/predict/test_knn.py`
- `tests/predict/test_multi_chain_comparison.py`
- `tests/predict/test_parallel.py`
- `tests/predict/test_predict.py`
- `tests/predict/test_program_of_thought.py`
- `tests/predict/test_react.py`
- `tests/predict/test_react_v2.py`
- `tests/predict/test_refine.py`
- `tests/predict/test_retry.py`
- `tests/predict/test_rlm.py`
- `tests/primitives/resources/saved_program.json`
- `tests/primitives/test_base_module.py`
- `tests/primitives/test_example.py`
- `tests/primitives/test_module.py`
- `tests/primitives/test_python_interpreter.py`
- `tests/primitives/test_sandbox_serializable.py`
- `tests/propose/test_grounded_proposer.py`
- `tests/reliability/README.md`
- `tests/reliability/__init__.py`
- `tests/reliability/complex_types/generated/test_many_types_1/inputs/input1.json`
- `tests/reliability/complex_types/generated/test_many_types_1/inputs/input2.json`
- `tests/reliability/complex_types/generated/test_many_types_1/program.py`
- `tests/reliability/complex_types/generated/test_many_types_1/schema.json`
- `tests/reliability/complex_types/generated/test_nesting_1/inputs/input1.json`
- `tests/reliability/complex_types/generated/test_nesting_1/inputs/input2.json`
- `tests/reliability/complex_types/generated/test_nesting_1/program.py`
- `tests/reliability/complex_types/generated/test_nesting_1/schema.json`
- `tests/reliability/complex_types/generated/test_nesting_2/inputs/input1.json`
- `tests/reliability/complex_types/generated/test_nesting_2/program.py`
- `tests/reliability/complex_types/generated/test_nesting_2/schema.json`
- `tests/reliability/conftest.py`
- `tests/reliability/generate/__init__.py`
- `tests/reliability/generate/__main__.py`
- `tests/reliability/generate/utils.py`
- `tests/reliability/input_formats/generated/test_markdown_1/inputs/input1.json`
- `tests/reliability/input_formats/generated/test_markdown_1/inputs/input2.json`
- `tests/reliability/input_formats/generated/test_markdown_1/program.py`
- `tests/reliability/input_formats/generated/test_markdown_1/schema.json`
- `tests/reliability/reliability_conf.yaml`
- `tests/reliability/test_generated.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/build_and_release.yml`
- `.github/workflows/build_utils/test_version.py`
- `.github/workflows/docs-push.yml`
- `.github/workflows/precommits_check.yml`
- `.github/workflows/run_tests.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 260 |
| .md | 167 |
| .png | 31 |
| .ipynb | 20 |
| .json | 15 |
| .svg | 13 |
| .yml | 10 |
| .js | 4 |
| .html | 3 |
| .yaml | 3 |
| .css | 2 |
| .gitignore | 2 |
| .lock | 2 |
| .toml | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `docs/docs/ 내부 책임 분리`
- `dspy/ 내부 책임 분리`
- `docs/docs/api/ 내부 책임 분리`
- `.github/.internal_dspyai/pyproject.toml 실행 스크립트와 패키지 경계`
- `docs/requirements.txt 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

