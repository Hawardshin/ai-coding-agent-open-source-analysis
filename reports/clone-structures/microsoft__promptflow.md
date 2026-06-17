# microsoft/promptflow 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/microsoft__promptflow |
| remote | https://github.com/microsoft/promptflow |
| HEAD | 3928a72 (2026-05-13) Add docs related to devui and connections (#4160) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 4036 |
| dirs | 952 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Prompt flow`, `Installation`, `Quick Start ⚡`, `Tutorial 🏃‍♂️`, `Develop your own LLM apps`, `Learn from use cases`, `Setup for contributors`, `Contributing`, `Trademarks`, `Code of Conduct`, `Data Collection`, `Telemetry Configuration`, `License`

> Prompt flow Welcome to join us to make prompt flow better by participating discussions, opening issues, submitting PRs. Prompt flow is a suite of development tools designed to streamline the end to end development cycle of LLM based AI applications, from ideation, prototyping, testing, evaluation to production deployment and monitoring. It makes prompt engineering much easier and enables you to build LLM apps with production quality. With prompt flow, you will be able to Create and iteratively develop flow Create executable flows that link LLMs, prompts, Python code and other tools together. Debug and iterate your flows, especially tracing interaction with LLMs with ease. Evaluate flow quality and performance Evaluate your flow's quality and performance with larger datasets. Integrate the testing and evaluation into your CI/CD system to ensure quality of your flow. Streamlined developmen

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cspell.json | file |
| .devcontainer | dir |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| benchmark | dir |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| examples | dir |
| LICENSE | file |
| migration-guide | dir |
| pylintrc | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| setup.cfg | file |
| src | dir |
| SUPPORT.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 2406 |
| examples/ | 953 |
| docs/ | 282 |
| .github/ | 173 |
| scripts/ | 111 |
| migration-guide/ | 48 |
| benchmark/ | 47 |
| (root) | 11 |
| .devcontainer/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 2406 | preferred |
| docs/ | 282 | preferred |
| examples/ | 953 | preferred |
| scripts/ | 111 | preferred |
| src/promptflow/ | 1327 | large |
| src/promptflow/tests/ | 1315 | large |
| examples/flows/ | 678 | large |
| src/promptflow-devkit/ | 273 | large |
| examples/flows/evaluation/ | 235 | large |
| examples/flows/standard/ | 213 | large |
| src/promptflow-evals/ | 208 | large |
| src/promptflow-devkit/promptflow/ | 199 | large |
| docs/media/ | 185 | large |
| src/promptflow-core/ | 182 | large |
| .github/ | 173 | large |
| src/promptflow-core/promptflow/ | 165 | large |
| examples/flows/chat/ | 156 | large |
| src/promptflow-azure/ | 148 | large |
| docs/media/how-to-guides/ | 129 | large |
| .github/workflows/ | 120 | large |
| src/promptflow-recording/ | 110 | large |
| src/promptflow-azure/promptflow/ | 106 | large |
| src/promptflow-evals/tests/ | 99 | large |
| src/promptflow-recording/recordings/ | 95 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `.devcontainer/requirements.txt`
- `benchmark/promptflow-serve/mock_api/Dockerfile`
- `benchmark/promptflow-serve/mock_api/requirements.txt`
- `benchmark/promptflow-serve/pf_flows/flex_async/requirements.txt`
- `benchmark/promptflow-serve/pf_flows/static_async/requirements.txt`
- `benchmark/promptflow-serve/pf_flows/static_sync/requirements.txt`
- `benchmark/promptflow-serve/requirements.txt`
- `benchmark/promptflow-serve/test_runner/docker-compose.yml`
- `docs/media/how-to-guides/how-to-enable-streaming-mode/scripts/requirements.txt`
- `examples/connections/requirements.txt`
- `examples/flex-flows/basic/requirements.txt`
- `examples/flex-flows/chat-async-stream/requirements.txt`
- `examples/flex-flows/chat-basic/requirements.txt`
- `examples/flex-flows/chat-minimal/requirements.txt`
- `examples/flex-flows/chat-stream/requirements.txt`
- `examples/flex-flows/chat-with-functions/requirements.txt`
- `examples/flex-flows/eval-checklist/requirements.txt`
- `examples/flex-flows/eval-code-quality/requirements.txt`
- `examples/flex-flows/eval-criteria-with-langchain/requirements.txt`
- `examples/flows/chat/chat-basic-maf/requirements.txt`
- `examples/flows/chat/chat-basic/requirements.txt`
- `examples/flows/chat/chat-math-variant-maf/requirements.txt`
- `examples/flows/chat/chat-math-variant/requirements.txt`
- `examples/flows/chat/chat-with-image-maf/requirements.txt`
- `examples/flows/chat/chat-with-image/requirements.txt`
- `examples/flows/chat/chat-with-pdf-maf/requirements.txt`
- `examples/flows/chat/chat-with-pdf/requirements.txt`
- `examples/flows/chat/chat-with-wikipedia-maf/requirements.txt`
- `examples/flows/chat/chat-with-wikipedia/requirements.txt`
- `examples/flows/chat/promptflow-copilot-maf/requirements.txt`
- `examples/flows/chat/promptflow-copilot/requirements.txt`
- `examples/flows/chat/use_functions_with_chat_models-maf/requirements.txt`
- `examples/flows/chat/use_functions_with_chat_models/requirements.txt`
- `examples/flows/evaluation/eval-accuracy-maths-to-code-maf/requirements.txt`
- `examples/flows/evaluation/eval-basic-maf/requirements.txt`
- `examples/flows/evaluation/eval-basic/requirements.txt`
- `examples/flows/evaluation/eval-chat-math-maf/requirements.txt`
- `examples/flows/evaluation/eval-chat-math/requirements.txt`
- `examples/flows/evaluation/eval-classification-accuracy-maf/requirements.txt`
- `examples/flows/evaluation/eval-classification-accuracy/requirements.txt`
- `examples/flows/evaluation/eval-entity-match-rate-maf/requirements.txt`
- `examples/flows/evaluation/eval-entity-match-rate/requirements.txt`
- `examples/flows/evaluation/eval-groundedness-maf/requirements.txt`
- `examples/flows/evaluation/eval-groundedness/requirements.txt`
- `examples/flows/evaluation/eval-multi-turn-metrics-maf/requirements.txt`
- `examples/flows/evaluation/eval-multi-turn-metrics/requirements.txt`
- `examples/flows/evaluation/eval-perceived-intelligence-maf/requirements.txt`
- `examples/flows/evaluation/eval-perceived-intelligence/requirements.txt`
- `examples/flows/evaluation/eval-qna-non-rag-maf/requirements.txt`
- `examples/flows/evaluation/eval-qna-non-rag/requirements.txt`
- `examples/flows/evaluation/eval-qna-rag-metrics-maf/requirements.txt`
- `examples/flows/evaluation/eval-qna-rag-metrics/requirements.txt`
- `examples/flows/evaluation/eval-single-turn-metrics-maf/requirements.txt`
- `examples/flows/evaluation/eval-single-turn-metrics/requirements.txt`
- `examples/flows/evaluation/eval-summarization-maf/requirements.txt`
- `examples/flows/evaluation/eval-summarization/requirements.txt`
- `examples/flows/integrations/azure-ai-language/analyze_conversations/requirements.txt`
- `examples/flows/integrations/azure-ai-language/analyze_documents/requirements.txt`
- `examples/flows/integrations/azure-ai-language/multi_intent_conversational_language_understanding/requirements.txt`
- `examples/flows/integrations/continuous-monitoring-with-pipeline/flows/standard/simple-summarization/requirements.txt`
- `examples/flows/integrations/llmlingua-prompt-compression/gsm8k_example/requirements.txt`
- `examples/flows/integrations/unify-ai/requirements.txt`
- `examples/flows/standard/autonomous-agent-maf/requirements.txt`
- `examples/flows/standard/autonomous-agent/requirements.txt`
- `examples/flows/standard/basic-maf/requirements.txt`
- `examples/flows/standard/basic-with-builtin-llm-maf/requirements.txt`
- `examples/flows/standard/basic-with-builtin-llm/requirements.txt`
- `examples/flows/standard/basic-with-connection-maf/requirements.txt`
- `examples/flows/standard/basic-with-connection/requirements.txt`
- `examples/flows/standard/basic/requirements.txt`
- `examples/flows/standard/conditional-flow-for-if-else-maf/requirements.txt`
- `examples/flows/standard/conditional-flow-for-if-else/requirements.txt`
- `examples/flows/standard/conditional-flow-for-switch-maf/requirements.txt`
- `examples/flows/standard/conditional-flow-for-switch/requirements.txt`
- `examples/flows/standard/customer-intent-extraction-maf/requirements.txt`
- `examples/flows/standard/customer-intent-extraction/requirements.txt`
- `examples/flows/standard/describe-image-maf/requirements.txt`
- `examples/flows/standard/describe-image/requirements.txt`
- `examples/flows/standard/flow-with-additional-includes-maf/requirements.txt`
- ... 20 more

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.devcontainer/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `benchmark/promptflow-serve/README.md`
- `benchmark/promptflow-serve/result-archive/v1.12.0/README.md`
- `docs/README.md`
- `docs/cloud/azureai/consume-connections-from-azure-ai.md`
- `docs/cloud/azureai/create-run-with-compute-session.md`
- `docs/cloud/azureai/deploy-to-azure-appservice.md`
- `docs/cloud/azureai/faq.md`
- `docs/cloud/azureai/generate-test-data-cloud.md`
- `docs/cloud/azureai/manage-flows.md`
- `docs/cloud/azureai/run-promptflow-in-azure-ai.md`
- `docs/cloud/azureai/runtime-change-log.md`
- `docs/cloud/azureai/use-flow-in-azure-ml-pipeline.md`
- `docs/cloud/index.md`
- `docs/concepts/concept-connections.md`
- `docs/concepts/concept-flows.md`
- `docs/concepts/concept-tools.md`
- `docs/concepts/concept-variants.md`
- `docs/concepts/design-principles.md`
- `docs/concepts/index.md`
- `docs/dev/dev_setup.md`
- `docs/dev/documentation_guidelines.md`
- `docs/dev/replay-e2e-test.md`
- `docs/dev/rotate_aoai_keys.md`
- `docs/how-to-guides/chat-with-a-flow/index.md`
- `docs/how-to-guides/deploy-a-flow/deploy-using-dev-server.md`
- `docs/how-to-guides/deploy-a-flow/deploy-using-docker.md`
- `docs/how-to-guides/deploy-a-flow/deploy-using-kubernetes.md`
- `docs/how-to-guides/deploy-a-flow/distribute-flow-as-executable-app.md`
- `docs/how-to-guides/deploy-a-flow/index.md`
- `docs/how-to-guides/develop-a-dag-flow/add-conditional-control-to-a-flow.md`
- `docs/how-to-guides/develop-a-dag-flow/develop-chat-flow.md`
- `docs/how-to-guides/develop-a-dag-flow/develop-evaluation-flow.md`
- `docs/how-to-guides/develop-a-dag-flow/develop-standard-flow.md`
- `docs/how-to-guides/develop-a-dag-flow/index.md`
- `docs/how-to-guides/develop-a-dag-flow/init-and-test-a-flow.md`
- `docs/how-to-guides/develop-a-dag-flow/process-image-in-flow.md`
- `docs/how-to-guides/develop-a-dag-flow/quick-start.md`
- `docs/how-to-guides/develop-a-dag-flow/referencing-external-files-or-folders-in-a-flow.md`
- `docs/how-to-guides/develop-a-flex-flow/class-based-flow.md`
- `docs/how-to-guides/develop-a-flex-flow/connection-support.md`
- `docs/how-to-guides/develop-a-flex-flow/function-based-flow.md`
- `docs/how-to-guides/develop-a-flex-flow/index.md`
- `docs/how-to-guides/develop-a-flex-flow/input-output-format.md`
- `docs/how-to-guides/develop-a-flex-flow/model-config.md`
- `docs/how-to-guides/develop-a-prompty/index.md`
- `docs/how-to-guides/develop-a-prompty/prompty-output-format.md`
- `docs/how-to-guides/develop-a-prompty/use-prompty-in-flow.md`
- ... 30 more

### 에이전트 지침 후보

- `.github/skills/maf-online-endpoint/SKILL.md`
- `.github/skills/maf-online-endpoint/assets/conda.yml`
- `.github/skills/maf-online-endpoint/assets/deploy.sh`
- `.github/skills/maf-online-endpoint/assets/deployment.yml`
- `.github/skills/maf-online-endpoint/assets/endpoint.yml`
- `.github/skills/maf-online-endpoint/assets/score.py`
- `.github/skills/maf-online-endpoint/references/managed-identity.md`
- `.github/skills/maf-online-endpoint/references/troubleshooting.md`
- `.github/skills/maf-online-endpoint/scripts/deploy_sdk.py`
- `.github/skills/maf-online-endpoint/scripts/test_skill.py`
- `.github/skills/maf-prs-job/SKILL.md`
- `.github/skills/maf-prs-job/assets/component.yaml`
- `.github/skills/maf-prs-job/assets/conda.yml`
- `.github/skills/maf-prs-job/assets/entry.py`
- `.github/skills/maf-prs-job/assets/hooks.py`
- `.github/skills/maf-prs-job/assets/maf_prs/__init__.py`
- `.github/skills/maf-prs-job/assets/maf_prs/config.py`
- `.github/skills/maf-prs-job/assets/maf_prs/executor.py`
- `.github/skills/maf-prs-job/assets/maf_prs/processor.py`
- `.github/skills/maf-prs-job/assets/submit_pipeline.py`
- `.github/skills/maf-prs-job/references/auto-derive-checks.md`
- `.github/skills/maf-prs-job/references/gotchas.md`
- `.github/skills/maf-prs-job/references/pf-vs-maf-prs.md`
- `.github/skills/maf-tracing/SKILL.md`
- `.github/skills/promptflow-to-maf/SKILL.md`
- `.github/skills/promptflow-to-maf/examples/evaluation.md`
- `.github/skills/promptflow-to-maf/examples/linear-chat.md`
- `.github/skills/promptflow-to-maf/examples/multimodal-chat.md`
- `.github/skills/promptflow-to-maf/references/gotchas.md`
- `.github/skills/promptflow-to-maf/references/node-mapping.md`
- `.github/skills/promptflow-to-maf/references/workflow-context.md`
- `.github/skills/promptflow-to-maf/templates/eval_runner.py`
- `.github/skills/promptflow-to-maf/topics/custom-tool-nodes.md`
- `.github/skills/promptflow-to-maf/topics/evaluation-flows.md`
- `.github/skills/promptflow-to-maf/topics/multimodal.md`
- `.github/skills/promptflow-to-maf/topics/variants.md`
- `examples/flows/integrations/azure-ai-language/analyze_documents/parse_skill_to_text.py`
- `migration-guide/PromptFlow-to-MAF/skills.md`

### 스펙/템플릿/명령/스킬 후보

- `.github/skills/maf-online-endpoint/SKILL.md`
- `.github/skills/maf-online-endpoint/assets/conda.yml`
- `.github/skills/maf-online-endpoint/assets/deploy.sh`
- `.github/skills/maf-online-endpoint/assets/deployment.yml`
- `.github/skills/maf-online-endpoint/assets/endpoint.yml`
- `.github/skills/maf-online-endpoint/assets/score.py`
- `.github/skills/maf-online-endpoint/references/managed-identity.md`
- `.github/skills/maf-online-endpoint/references/troubleshooting.md`
- `.github/skills/maf-online-endpoint/scripts/deploy_sdk.py`
- `.github/skills/maf-online-endpoint/scripts/test_skill.py`
- `.github/skills/maf-prs-job/SKILL.md`
- `.github/skills/maf-prs-job/assets/component.yaml`
- `.github/skills/maf-prs-job/assets/conda.yml`
- `.github/skills/maf-prs-job/assets/entry.py`
- `.github/skills/maf-prs-job/assets/hooks.py`
- `.github/skills/maf-prs-job/assets/maf_prs/__init__.py`
- `.github/skills/maf-prs-job/assets/maf_prs/config.py`
- `.github/skills/maf-prs-job/assets/maf_prs/executor.py`
- `.github/skills/maf-prs-job/assets/maf_prs/processor.py`
- `.github/skills/maf-prs-job/assets/submit_pipeline.py`
- `.github/skills/maf-prs-job/references/auto-derive-checks.md`
- `.github/skills/maf-prs-job/references/gotchas.md`
- `.github/skills/maf-prs-job/references/pf-vs-maf-prs.md`
- `.github/skills/maf-tracing/SKILL.md`
- `.github/skills/promptflow-to-maf/SKILL.md`
- `.github/skills/promptflow-to-maf/examples/evaluation.md`
- `.github/skills/promptflow-to-maf/examples/linear-chat.md`
- `.github/skills/promptflow-to-maf/examples/multimodal-chat.md`
- `.github/skills/promptflow-to-maf/references/gotchas.md`
- `.github/skills/promptflow-to-maf/references/node-mapping.md`
- `.github/skills/promptflow-to-maf/references/workflow-context.md`
- `.github/skills/promptflow-to-maf/templates/eval_runner.py`
- `.github/skills/promptflow-to-maf/topics/custom-tool-nodes.md`
- `.github/skills/promptflow-to-maf/topics/evaluation-flows.md`
- `.github/skills/promptflow-to-maf/topics/multimodal.md`
- `.github/skills/promptflow-to-maf/topics/variants.md`
- `scripts/tool/templates/MANIFEST.in.j2`
- `scripts/tool/templates/setup.py.j2`
- `scripts/tool/templates/test_tool.py.j2`
- `scripts/tool/templates/test_tool2.py.j2`
- `scripts/tool/templates/tool.py.j2`
- `scripts/tool/templates/tool.yaml.j2`
- `scripts/tool/templates/tool2.py.j2`
- `scripts/tool/templates/tool2.yaml.j2`
- `scripts/tool/templates/utils.py.j2`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `examples/flows/chat/chat-with-pdf/tests/azure_chat_with_pdf_test.py`
- `examples/flows/chat/chat-with-pdf/tests/base_test.py`
- `examples/flows/chat/chat-with-pdf/tests/chat_with_pdf_test.py`
- `examples/flows/evaluation/eval-summarization/tests/test_geval.py`
- `examples/tools/tool-package-quickstart/tests/__init__.py`
- `examples/tools/tool-package-quickstart/tests/test_my_tool_1.py`
- `examples/tools/tool-package-quickstart/tests/test_my_tool_2.py`
- `examples/tools/tool-package-quickstart/tests/test_tool_with_cascading_inputs.py`
- `examples/tools/tool-package-quickstart/tests/test_tool_with_custom_llm_type.py`
- `examples/tools/tool-package-quickstart/tests/test_tool_with_custom_strong_type_connection.py`
- `examples/tools/tool-package-quickstart/tests/test_tool_with_dynamic_input.py`
- `examples/tools/tool-package-quickstart/tests/test_tool_with_file_path_input.py`
- `examples/tools/tool-package-quickstart/tests/test_tool_with_generated_by_input.py`
- `examples/tools/tool-package-quickstart/tests/test_utils/hello_method.py`
- `src/promptflow-azure/tests/_constants.py`
- `src/promptflow-azure/tests/conftest.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/__init__.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/_azure_utils.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/conftest.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/__init__.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/classificationAccuracy.csv`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_arm_connection_operations.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_azure_cli_perf.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_cli.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_cli_with_azure.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_connection_operations.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_csharp_sdk.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_flow_in_azure_ml.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_flow_operations.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_flow_serve.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_pfs_azure.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_run_operations.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_run_upload.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_telemetry.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/e2etests/test_workspace_connection_provider.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/__init__.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_azure_cli_activity_name.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_blob_client.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_cli.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_collection.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_config.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_cosmosdb.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_cosmosdb_utils.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_exceptions.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_flow_entity.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_flow_operations.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_pf_client.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_pf_client_azure.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_run_entity.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_run_operations.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_span.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_summary.py`
- `src/promptflow-azure/tests/sdk_cli_azure_test/unittests/test_utils.py`
- `src/promptflow-core/tests/__init__.py`
- `src/promptflow-core/tests/azureml-serving/__init__.py`
- `src/promptflow-core/tests/azureml-serving/e2etests/__init__.py`
- `src/promptflow-core/tests/azureml-serving/unittests/__init__.py`
- `src/promptflow-core/tests/azureml-serving/unittests/test_workspace_connection_provider.py`
- `src/promptflow-core/tests/conftest.py`
- `src/promptflow-core/tests/core/__init__.py`
- `src/promptflow-core/tests/core/e2etests/__init__.py`
- `src/promptflow-core/tests/core/e2etests/test_eager_flow.py`
- `src/promptflow-core/tests/core/e2etests/test_eager_flow_serve.py`
- `src/promptflow-core/tests/core/e2etests/test_eager_flow_serve_fastapi.py`
- `src/promptflow-core/tests/core/unittests/__init__.py`
- `src/promptflow-core/tests/core/unittests/test_basic.py`
- `src/promptflow-core/tests/core/unittests/test_metrics.py`
- `src/promptflow-devkit/tests/_constants.py`
- `src/promptflow-devkit/tests/conftest.py`
- `src/promptflow-devkit/tests/sdk_cli_global_config_test/__init__.py`
- `src/promptflow-devkit/tests/sdk_cli_global_config_test/conftest.py`
- `src/promptflow-devkit/tests/sdk_cli_global_config_test/e2etests/__init__.py`
- `src/promptflow-devkit/tests/sdk_cli_global_config_test/e2etests/test_connection_cli.py`
- `src/promptflow-devkit/tests/sdk_cli_global_config_test/e2etests/test_global_config.py`
- `src/promptflow-devkit/tests/sdk_cli_test/.coveragerc`
- `src/promptflow-devkit/tests/sdk_cli_test/__init__.py`
- `src/promptflow-devkit/tests/sdk_cli_test/conftest.py`
- `src/promptflow-devkit/tests/sdk_cli_test/e2etests/__init__.py`
- `src/promptflow-devkit/tests/sdk_cli_test/e2etests/test_chat_group.py`
- `src/promptflow-devkit/tests/sdk_cli_test/e2etests/test_cli.py`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.github/workflows/build_doc_ci.yml`
- `.github/workflows/build_msi_installer.yml`
- `.github/workflows/check_enforcer.yml`
- `.github/workflows/create_promptflow_release_branch.yml`
- `.github/workflows/create_promptflow_release_tag.yml`
- `.github/workflows/flake8.yml`
- `.github/workflows/flowdag_schema_check.yml`
- `.github/workflows/labeler.yml`
- `.github/workflows/promptflow-core-test.yml`
- `.github/workflows/promptflow-evals-e2e-test-azure.yml`
- `.github/workflows/promptflow-evals-e2e-test-local.yml`
- `.github/workflows/promptflow-evals-installation-test.yml`
- `.github/workflows/promptflow-evals-performance-test.yml`
- `.github/workflows/promptflow-evals-unit-test.yml`
- `.github/workflows/promptflow-executor-e2e-test.yml`
- `.github/workflows/promptflow-executor-unit-test.yml`
- `.github/workflows/promptflow-global-config-test.yml`
- `.github/workflows/promptflow-import-linter.yml`
- `.github/workflows/promptflow-parallel-e2e-test.yml`
- `.github/workflows/promptflow-parallel-unit-test.yml`
- `.github/workflows/promptflow-release-testing-matrix.yml`
- `.github/workflows/promptflow-sdk-cli-test.yml`
- `.github/workflows/promptflow-tracing-e2e-test.yml`
- `.github/workflows/promptflow-tracing-unit-test.yml`
- `.github/workflows/publish_doc.yml`
- `.github/workflows/pylint.yml`
- `.github/workflows/samples_configuration.yml`
- `.github/workflows/samples_connections.yml`
- `.github/workflows/samples_connections_connection.yml`
- `.github/workflows/samples_flex_flows_basic.yml`
- `.github/workflows/samples_flex_flows_chat_async_stream.yml`
- `.github/workflows/samples_flex_flows_chat_basic.yml`
- `.github/workflows/samples_flex_flows_chat_minimal.yml`
- `.github/workflows/samples_flex_flows_chat_stream.yml`
- `.github/workflows/samples_flex_flows_chat_with_functions.yml`
- `.github/workflows/samples_flex_flows_eval_checklist.yml`
- `.github/workflows/samples_flex_flows_eval_code_quality.yml`
- `.github/workflows/samples_flex_flows_eval_criteria_with_langchain.yml`
- `.github/workflows/samples_flexflows_basic_flexflowquickstart.yml`
- `.github/workflows/samples_flexflows_basic_flexflowquickstartazure.yml`
- `.github/workflows/samples_flexflows_chatasyncstream_chatstreamwithasyncflexflow.yml`
- `.github/workflows/samples_flexflows_chatbasic_chatwithclassbasedflow.yml`
- `.github/workflows/samples_flexflows_chatbasic_chatwithclassbasedflowazure.yml`
- `.github/workflows/samples_flexflows_chatstream_chatstreamwithflexflow.yml`
- `.github/workflows/samples_flexflows_evalcriteriawithlangchain_langchaineval.yml`
- `.github/workflows/samples_flows_chat_chat_basic.yml`
- `.github/workflows/samples_flows_chat_chat_math_variant.yml`
- `.github/workflows/samples_flows_chat_chat_with_image.yml`
- `.github/workflows/samples_flows_chat_chat_with_pdf.yml`
- `.github/workflows/samples_flows_chat_chat_with_wikipedia.yml`
- `.github/workflows/samples_flows_chat_chatwithpdf_chatwithpdf.yml`
- `.github/workflows/samples_flows_chat_chatwithpdf_chatwithpdfazure.yml`
- `.github/workflows/samples_flows_chat_use_functions_with_chat_models.yml`
- `.github/workflows/samples_flows_evaluation_eval_basic.yml`
- `.github/workflows/samples_flows_evaluation_eval_chat_math.yml`
- `.github/workflows/samples_flows_evaluation_eval_classification_accuracy.yml`
- `.github/workflows/samples_flows_evaluation_eval_entity_match_rate.yml`
- `.github/workflows/samples_flows_evaluation_eval_groundedness.yml`
- `.github/workflows/samples_flows_evaluation_eval_multi_turn_metrics.yml`
- `.github/workflows/samples_flows_evaluation_eval_perceived_intelligence.yml`
- `.github/workflows/samples_flows_evaluation_eval_qna_non_rag.yml`
- `.github/workflows/samples_flows_evaluation_eval_qna_rag_metrics.yml`
- `.github/workflows/samples_flows_evaluation_eval_single_turn_metrics.yml`
- `.github/workflows/samples_flows_evaluation_eval_summarization.yml`
- `.github/workflows/samples_flows_standard_autonomous_agent.yml`
- `.github/workflows/samples_flows_standard_basic.yml`
- `.github/workflows/samples_flows_standard_basic_with_builtin_llm.yml`
- `.github/workflows/samples_flows_standard_basic_with_connection.yml`
- `.github/workflows/samples_flows_standard_conditional_flow_for_if_else.yml`
- `.github/workflows/samples_flows_standard_conditional_flow_for_switch.yml`
- `.github/workflows/samples_flows_standard_customer_intent_extraction.yml`
- `.github/workflows/samples_flows_standard_describe_image.yml`
- `.github/workflows/samples_flows_standard_flow_with_additional_includes.yml`
- `.github/workflows/samples_flows_standard_flow_with_symlinks.yml`
- `.github/workflows/samples_flows_standard_gen_docstring.yml`
- `.github/workflows/samples_flows_standard_maths_to_code.yml`
- `.github/workflows/samples_flows_standard_named_entity_recognition.yml`
- `.github/workflows/samples_flows_standard_question_simulation.yml`
- `.github/workflows/samples_flows_standard_web_classification.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 1637 |
| .yaml | 565 |
| .png | 276 |
| .md | 273 |
| .jsonl | 245 |
| .jinja2 | 224 |
| .yml | 179 |
| .json | 169 |
| .txt | 146 |
| .example | 44 |
| .prompty | 43 |
| .ipynb | 34 |
| .csv | 21 |
| .jpg | 20 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `src/promptflow/ 내부 책임 분리`
- `.github/skills/maf-online-endpoint/SKILL.md 스펙/명령 의미`
- `.github/skills/maf-online-endpoint/assets/conda.yml 스펙/명령 의미`
- `.github/skills/maf-online-endpoint/assets/deploy.sh 스펙/명령 의미`
- `.github/skills/maf-online-endpoint/assets/deployment.yml 스펙/명령 의미`
- `.github/skills/maf-online-endpoint/assets/endpoint.yml 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `.devcontainer/requirements.txt 실행 스크립트와 패키지 경계`
- `benchmark/promptflow-serve/mock_api/Dockerfile 실행 스크립트와 패키지 경계`
- `benchmark/promptflow-serve/mock_api/requirements.txt 실행 스크립트와 패키지 경계`
- `benchmark/promptflow-serve/pf_flows/flex_async/requirements.txt 실행 스크립트와 패키지 경계`

