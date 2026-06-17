# guardrails-ai/guardrails 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/guardrails-ai__guardrails |
| remote | https://github.com/guardrails-ai/guardrails |
| HEAD | 6fa9524 (2026-06-10) Merge pull request #1499 from guardrails-ai/ShreyaR-patch-2 |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 552 |
| dirs | 98 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `News and Updates`, `What is Guardrails?`, `Guardrails Hub`, `Installation`, `Getting Started`, `Create Input and Output Guards for LLM Validation`, `Use Guardrails to generate structured data from LLMs`, `Guardrails Server`, `with the guardrails client`, `or with the openai sdk`, `FAQ`, `Contributing`

> <div align="center" <img src="https //raw.githubusercontent.com/guardrails ai/guardrails/main/docs/assets/Guardrails ai logo for dark bg.svg gh dark mode only" alt="Guardrails AI Logo" width="600px" <img src="https //raw.githubusercontent.com/guardrails ai/guardrails/main/docs/assets/Guardrails ai logo for white bg.svg gh light mode only" alt="Guardrails AI Logo" width="600px" <hr </div News and Updates [Feb 12, 2025] We just launched Guardrails Index the first of its kind benchmark comparing the performance and latency of 24 guardrails across 6 most common categories! Check out the index at index.guardrailsai.com What is Guardrails? Guardrails is a Python framework that helps build reliable AI applications by performing two key functions 1. Guardrails runs Input/Output Guards in your application that detect, quantify and mitigate the presence of specific types of risks. To look at the f

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| docs | dir |
| guardrails | dir |
| LICENSE | file |
| Makefile | file |
| poetry.lock | file |
| pyproject.toml | file |
| pyrightconfig.json | file |
| README.md | file |
| SECURITY_ADVISORY.md | file |
| server_ci | dir |
| test_spec.rail | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 255 |
| guardrails/ | 181 |
| docs/ | 72 |
| .github/ | 18 |
| (root) | 13 |
| server_ci/ | 13 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 72 | preferred |
| tests/ | 255 | preferred |
| guardrails/ | 181 | large |
| tests/integration_tests/ | 161 | large |
| tests/integration_tests/test_assets/ | 125 | large |
| tests/unit_tests/ | 91 | large |
| docs/examples/ | 37 | large |
| guardrails/classes/ | 28 | large |
| guardrails/cli/ | 28 | large |
| guardrails/utils/ | 28 | large |
| .github/ | 18 | large |
| tests/unit_tests/mocks/ | 18 | large |
| tests/unit_tests/cli/ | 14 | large |
| tests/unit_tests/utils/ | 14 | large |
| docs/pydocs/ | 13 | large |
| server_ci/ | 13 | large |
| guardrails/cli/hub/ | 11 | large |
| .github/workflows/ | 10 | large |
| guardrails/integrations/ | 10 | large |
| tests/unit_tests/classes/ | 10 | large |
| docs/api_reference/ | 9 | large |
| docs/pydocs/api_reference/ | 9 | large |
| guardrails/telemetry/ | 9 | large |
| guardrails/types/ | 9 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `poetry.lock`
- `pyproject.toml`
- `server_ci/Dockerfile`
- `server_ci/requirements.txt`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | guardrails-ai | true | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/api_reference/actions.md`
- `docs/api_reference/errors.md`
- `docs/api_reference/formatters.md`
- `docs/api_reference/generics_and_base_classes.md`
- `docs/api_reference/guards.md`
- `docs/api_reference/history_and_logs.md`
- `docs/api_reference/llm_interaction.md`
- `docs/api_reference/types.md`
- `docs/api_reference/validator.md`
- `docs/assets/Guardrails-ai-logo-for-dark-bg.svg`
- `docs/assets/Guardrails-ai-logo-for-white-bg.svg`
- `docs/assets/guardrails_hub.gif`
- `docs/assets/logo.svg`
- `docs/assets/with_and_without_guardrails.svg`
- `docs/examples/bug_free_python_code.ipynb`
- `docs/examples/chatbot.ipynb`
- `docs/examples/check_for_pii.ipynb`
- `docs/examples/competitors_check.ipynb`
- `docs/examples/constrained_decoding.ipynb`
- `docs/examples/data/article1.txt`
- `docs/examples/data/chase_card_agreement.pdf`
- `docs/examples/data/config.py`
- `docs/examples/data/twain.txt`
- `docs/examples/extracting_entities.ipynb`
- `docs/examples/generate_structured_data.ipynb`
- `docs/examples/generate_structured_data_cohere.ipynb`
- `docs/examples/guard_use.ipynb`
- `docs/examples/guardrails_server.ipynb`
- `docs/examples/guardrails_with_chat_models.ipynb`
- `docs/examples/images/chatbot.png`
- `docs/examples/images/chatbot_validation_failed.png`
- `docs/examples/input_validation.ipynb`
- `docs/examples/json_function_calling_tools.ipynb`
- `docs/examples/langchain_integration.ipynb`
- `docs/examples/lite_llm_defaults.ipynb`
- `docs/examples/llamaindex-output-parsing.ipynb`
- `docs/examples/no_secrets_in_generated_text.ipynb`
- `docs/examples/provenance.ipynb`
- `docs/examples/recipe_generation.ipynb`
- `docs/examples/regex_validation.ipynb`
- `docs/examples/response_is_on_topic.ipynb`
- `docs/examples/secrets_detection.ipynb`
- `docs/examples/select_choice_based_on_action.ipynb`
- `docs/examples/summarizer.ipynb`
- `docs/examples/syntax_error_free_sql.ipynb`
- `docs/examples/text_summarization_quality.ipynb`
- `docs/examples/toxic_language.ipynb`
- `docs/examples/translation_to_specific_language.ipynb`
- ... 24 more

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `server_ci/tests/test_server.py`
- `tests/__init__.py`
- `tests/conftest.py`
- `tests/data/article1.txt`
- `tests/integration_tests/__init__.py`
- `tests/integration_tests/applications/test_text2sql.py`
- `tests/integration_tests/integrations/langchain/test_guard_runnable.py`
- `tests/integration_tests/integrations/langchain/test_validator_runnable.py`
- `tests/integration_tests/integrations/llama_index/test_guardrails_chat_engine.py`
- `tests/integration_tests/integrations/llama_index/test_guardrails_query_engine.py`
- `tests/integration_tests/mock_embeddings.py`
- `tests/integration_tests/mock_llm_outputs.py`
- `tests/integration_tests/mock_presidio.py`
- `tests/integration_tests/mock_secrets.py`
- `tests/integration_tests/schema/test_generator_integration.py`
- `tests/integration_tests/schema/test_primitive_schema.py`
- `tests/integration_tests/schema/test_pydantic_schema.py`
- `tests/integration_tests/schema/test_rail_schema.py`
- `tests/integration_tests/schema/test_validator.py`
- `tests/integration_tests/test_assets/__init__.py`
- `tests/integration_tests/test_assets/custom_llm.py`
- `tests/integration_tests/test_assets/entity_extraction/__init__.py`
- `tests/integration_tests/test_assets/entity_extraction/compiled_instructions.txt`
- `tests/integration_tests/test_assets/entity_extraction/compiled_instructions_reask.txt`
- `tests/integration_tests/test_assets/entity_extraction/compiled_prompt.txt`
- `tests/integration_tests/test_assets/entity_extraction/compiled_prompt_full_reask.txt`
- `tests/integration_tests/test_assets/entity_extraction/compiled_prompt_reask.txt`
- `tests/integration_tests/test_assets/entity_extraction/compiled_prompt_reask_without_instructions.txt`
- `tests/integration_tests/test_assets/entity_extraction/compiled_prompt_skeleton_reask_1.txt`
- `tests/integration_tests/test_assets/entity_extraction/compiled_prompt_skeleton_reask_2.txt`
- `tests/integration_tests/test_assets/entity_extraction/compiled_prompt_without_instructions.txt`
- `tests/integration_tests/test_assets/entity_extraction/filter.rail`
- `tests/integration_tests/test_assets/entity_extraction/fix.rail`
- `tests/integration_tests/test_assets/entity_extraction/fix_chat_model.rail`
- `tests/integration_tests/test_assets/entity_extraction/llm_output.txt`
- `tests/integration_tests/test_assets/entity_extraction/llm_output_full_reask.txt`
- `tests/integration_tests/test_assets/entity_extraction/llm_output_reask.txt`
- `tests/integration_tests/test_assets/entity_extraction/llm_output_skeleton_reask_1.txt`
- `tests/integration_tests/test_assets/entity_extraction/llm_output_skeleton_reask_2.txt`
- `tests/integration_tests/test_assets/entity_extraction/non_openai_compiled_prompt.txt`
- `tests/integration_tests/test_assets/entity_extraction/non_openai_compiled_prompt_reask.txt`
- `tests/integration_tests/test_assets/entity_extraction/noop.rail`
- `tests/integration_tests/test_assets/entity_extraction/optional_prompts.py`
- `tests/integration_tests/test_assets/entity_extraction/pydantic_models.py`
- `tests/integration_tests/test_assets/entity_extraction/reask.rail`
- `tests/integration_tests/test_assets/entity_extraction/reask_without_prompt.rail`
- `tests/integration_tests/test_assets/entity_extraction/refrain.rail`
- `tests/integration_tests/test_assets/entity_extraction/skeleton_reask.rail`
- `tests/integration_tests/test_assets/entity_extraction/validated_output_filter.py`
- `tests/integration_tests/test_assets/entity_extraction/validated_output_fix.py`
- `tests/integration_tests/test_assets/entity_extraction/validated_output_noop.py`
- `tests/integration_tests/test_assets/entity_extraction/validated_output_reask_1.py`
- `tests/integration_tests/test_assets/entity_extraction/validated_output_reask_2.py`
- `tests/integration_tests/test_assets/entity_extraction/validated_output_refrain.py`
- `tests/integration_tests/test_assets/entity_extraction/validated_output_skeleton_reask_1.py`
- `tests/integration_tests/test_assets/entity_extraction/validated_output_skeleton_reask_2.py`
- `tests/integration_tests/test_assets/fixtures/__init__.py`
- `tests/integration_tests/test_assets/json_schemas/choice_case.json`
- `tests/integration_tests/test_assets/json_schemas/choice_case_openapi.json`
- `tests/integration_tests/test_assets/json_schemas/credit_card_agreement.json`
- `tests/integration_tests/test_assets/json_schemas/string.json`
- `tests/integration_tests/test_assets/lists_object.py`
- `tests/integration_tests/test_assets/pydantic/__init__.py`
- `tests/integration_tests/test_assets/pydantic/compiled_instructions_chat.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_instructions_reask_1.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_instructions_reask_2.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_prompt.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_prompt_chat.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_prompt_enum.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_prompt_enum_2.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_prompt_full_reask_1.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_prompt_full_reask_2.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_prompt_reask_1.txt`
- `tests/integration_tests/test_assets/pydantic/compiled_prompt_reask_2.txt`
- `tests/integration_tests/test_assets/pydantic/llm_output.txt`
- `tests/integration_tests/test_assets/pydantic/llm_output_enum.txt`
- `tests/integration_tests/test_assets/pydantic/llm_output_enum_2.txt`
- `tests/integration_tests/test_assets/pydantic/llm_output_full_reask_1.txt`
- `tests/integration_tests/test_assets/pydantic/llm_output_full_reask_2.txt`
- `tests/integration_tests/test_assets/pydantic/llm_output_reask_1.txt`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/autoclose_stale_issues_and_prs.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/cli-compatibility.yml`
- `.github/workflows/examples_check.yml`
- `.github/workflows/find_dead_links.yml`
- `.github/workflows/install_from_hub.yml`
- `.github/workflows/release_version.yml`
- `.github/workflows/scripts/run_notebooks.sh`
- `.github/workflows/scripts/update_notebook_matrix.sh`
- `.github/workflows/server_ci.yml`
- `server_ci/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 351 |
| .txt | 70 |
| .ipynb | 37 |
| .rail | 20 |
| .md | 17 |
| .json | 13 |
| .yml | 11 |
| .sh | 9 |
| .svg | 4 |
| .sql | 3 |
| .dockerignore | 2 |
| .png | 2 |
| .gif | 1 |
| .gitignore | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `guardrails/ 내부 책임 분리`
- `tests/integration_tests/ 내부 책임 분리`
- `tests/integration_tests/test_assets/ 내부 책임 분리`
- `poetry.lock 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `server_ci/Dockerfile 실행 스크립트와 패키지 경계`
- `server_ci/requirements.txt 실행 스크립트와 패키지 경계`

