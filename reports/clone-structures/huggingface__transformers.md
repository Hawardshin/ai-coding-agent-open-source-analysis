# huggingface/transformers 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/huggingface__transformers |
| remote | https://github.com/huggingface/transformers |
| HEAD | f208766 (2026-06-12) Add minimax m3vl (#46600) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 6097 |
| dirs | 1151 |
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
- 주요 heading: `Installation`, `venv`, `uv`, `pip`, `uv`, `pip`, `uv`, `Quickstart`, `Why should I use Transformers?`, `When shouldn't I use Transformers?`, `100 projects using Transformers`, `Example models`, `Citation`

> <! Copyright 2020 The HuggingFace Team. All rights reserved. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http //www.apache.org/licenses/LICENSE 2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. <p align="center" <picture <source media="(prefers color scheme dark)" srcset="https //huggingface.co/datasets/huggingface/documentation images/raw/main/transformers logo dark.svg" <source media="(prefers color scheme light)" srcset="https //huggingface.co/datasets/huggingface/documentation images/raw/main/transformers 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .ai | dir |
| .circleci | dir |
| .git-blame-ignore-revs | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| AGENTS.md | other |
| awesome-transformers.md | file |
| benchmark | dir |
| benchmark_v2 | dir |
| CITATION.cff | file |
| CLAUDE.md | other |
| CODE_OF_CONDUCT.md | file |
| conftest.py | file |
| CONTRIBUTING.md | file |
| docker | dir |
| docs | dir |
| doctest_list.txt | file |
| examples | dir |
| i18n | dir |
| ISSUES.md | file |
| LICENSE | file |
| Makefile | file |
| MIGRATION_GUIDE_V5.md | file |
| notebooks | dir |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| setup.py | file |
| src | dir |
| tests | dir |
| utils | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 2782 |
| tests/ | 1595 |
| docs/ | 1340 |
| examples/ | 140 |
| utils/ | 78 |
| .github/ | 71 |
| docker/ | 23 |
| i18n/ | 19 |
| (root) | 17 |
| benchmark/ | 13 |
| benchmark_v2/ | 9 |
| .circleci/ | 4 |
| scripts/ | 3 |
| .ai/ | 2 |
| notebooks/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 2782 | preferred |
| docs/ | 1340 | preferred |
| examples/ | 140 | preferred |
| tests/ | 1595 | preferred |
| scripts/ | 3 | preferred |
| src/transformers/ | 2782 | large |
| src/transformers/models/ | 2518 | large |
| docs/source/ | 1338 | large |
| tests/models/ | 1310 | large |
| docs/source/en/ | 709 | large |
| docs/source/ko/ | 187 | large |
| docs/source/ja/ | 154 | large |
| examples/pytorch/ | 94 | large |
| utils/ | 78 | large |
| docs/source/zh/ | 72 | large |
| .github/ | 71 | large |
| tests/fixtures/ | 64 | large |
| .github/workflows/ | 58 | large |
| docs/source/ar/ | 51 | large |
| tests/quantization/ | 48 | large |
| src/transformers/integrations/ | 46 | large |
| tests/utils/ | 45 | large |
| docs/source/es/ | 44 | large |
| src/transformers/utils/ | 38 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `benchmark/requirements.txt`
- `benchmark_v2/requirements.txt`
- `docker/transformers-all-latest-gpu/Dockerfile`
- `docker/transformers-doc-builder/Dockerfile`
- `docker/transformers-gpu/Dockerfile`
- `docker/transformers-intel-cpu/Dockerfile`
- `docker/transformers-pytorch-amd-gpu/Dockerfile`
- `docker/transformers-pytorch-deepspeed-amd-gpu/Dockerfile`
- `docker/transformers-pytorch-deepspeed-latest-gpu/Dockerfile`
- `docker/transformers-pytorch-deepspeed-nightly-gpu/Dockerfile`
- `docker/transformers-pytorch-gpu/Dockerfile`
- `docker/transformers-pytorch-tpu/Dockerfile`
- `docker/transformers-pytorch-xpu/Dockerfile`
- `docker/transformers-quantization-latest-gpu/Dockerfile`
- `examples/pytorch/audio-classification/requirements.txt`
- `examples/pytorch/contrastive-image-text/requirements.txt`
- `examples/pytorch/image-classification/requirements.txt`
- `examples/pytorch/image-pretraining/requirements.txt`
- `examples/pytorch/instance-segmentation/requirements.txt`
- `examples/pytorch/language-modeling/requirements.txt`
- `examples/pytorch/multiple-choice/requirements.txt`
- `examples/pytorch/object-detection/requirements.txt`
- `examples/pytorch/question-answering/requirements.txt`
- `examples/pytorch/semantic-segmentation/requirements.txt`
- `examples/pytorch/speech-pretraining/requirements.txt`
- `examples/pytorch/speech-recognition/requirements.txt`
- `examples/pytorch/summarization/requirements.txt`
- `examples/pytorch/text-classification/requirements.txt`
- `examples/pytorch/text-generation/requirements.txt`
- `examples/pytorch/token-classification/requirements.txt`
- `examples/pytorch/translation/requirements.txt`
- `pyproject.toml`
- `tests/sagemaker/scripts/pytorch/requirements.txt`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml |  | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `benchmark/README.md`
- `benchmark_v2/README.md`
- `docker/README.md`
- `docs/README.md`
- `docs/TRANSLATING.md`
- `docs/source/_config.py`
- `docs/source/ar/_config.py`
- `docs/source/ar/_toctree.yml`
- `docs/source/ar/accelerate.md`
- `docs/source/ar/attention.md`
- `docs/source/ar/autoclass_tutorial.md`
- `docs/source/ar/bertology.md`
- `docs/source/ar/chat_templating.md`
- `docs/source/ar/community.md`
- `docs/source/ar/conversations.md`
- `docs/source/ar/create_a_model.md`
- `docs/source/ar/custom_models.md`
- `docs/source/ar/fast_tokenizers.md`
- `docs/source/ar/gguf.md`
- `docs/source/ar/glossary.md`
- `docs/source/ar/how_to_hack_models.md`
- `docs/source/ar/index.md`
- `docs/source/ar/installation.md`
- `docs/source/ar/llm_tutorial.md`
- `docs/source/ar/llm_tutorial_optimization.md`
- `docs/source/ar/model_memory_anatomy.md`
- `docs/source/ar/model_sharing.md`
- `docs/source/ar/model_summary.md`
- `docs/source/ar/modular_transformers.md`
- `docs/source/ar/multilingual.md`
- `docs/source/ar/notebooks.md`
- `docs/source/ar/pad_truncation.md`
- `docs/source/ar/peft.md`
- `docs/source/ar/perplexity.md`
- `docs/source/ar/philosophy.md`
- `docs/source/ar/pipeline_tutorial.md`
- `docs/source/ar/pipeline_webserver.md`
- `docs/source/ar/preprocessing.md`
- `docs/source/ar/quicktour.md`
- `docs/source/ar/run_scripts.md`
- `docs/source/ar/sagemaker.md`
- `docs/source/ar/serialization.md`
- `docs/source/ar/task_summary.md`
- `docs/source/ar/tasks/language_modeling.md`
- `docs/source/ar/tasks/masked_language_modeling.md`
- `docs/source/ar/tasks/multiple_choice.md`
- `docs/source/ar/tasks/question_answering.md`
- `docs/source/ar/tasks/sequence_classification.md`
- ... 30 more

### 에이전트 지침 후보

- `.ai/AGENTS.md`
- `.ai/skills/add-or-fix-type-checking/SKILL.md`
- `.github/copilot-instructions.md`
- `docs/source/en/serve-cli/cursor.md`

### 스펙/템플릿/명령/스킬 후보

- `.ai/skills/add-or-fix-type-checking/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/alm_tester.py`
- `tests/causal_lm_tester.py`
- `tests/cli/conftest.py`
- `tests/cli/test_chat.py`
- `tests/cli/test_download.py`
- `tests/cli/test_serve.py`
- `tests/cli/test_system.py`
- `tests/fixtures/audioflamingo3/expected_results_batched.json`
- `tests/fixtures/audioflamingo3/expected_results_single.json`
- `tests/fixtures/config.json`
- `tests/fixtures/dummy-config.json`
- `tests/fixtures/dummy_feature_extractor_config.json`
- `tests/fixtures/empty.txt`
- `tests/fixtures/gpt_oss/integration_tests.json`
- `tests/fixtures/input.txt`
- `tests/fixtures/merges.txt`
- `tests/fixtures/musicflamingo/expected_results_single.json`
- `tests/fixtures/parakeet/expected_loss_rnnt.json`
- `tests/fixtures/parakeet/expected_loss_tdt.json`
- `tests/fixtures/parakeet/expected_results_batch.json`
- `tests/fixtures/parakeet/expected_results_batch_rnnt.json`
- `tests/fixtures/parakeet/expected_results_batch_rnnt_timestamp.json`
- `tests/fixtures/parakeet/expected_results_batch_tdt.json`
- `tests/fixtures/parakeet/expected_results_batch_tdt_timestamp.json`
- `tests/fixtures/parakeet/expected_results_single.json`
- `tests/fixtures/parakeet/expected_results_single_rnnt.json`
- `tests/fixtures/parakeet/expected_results_single_tdt.json`
- `tests/fixtures/parakeet/expected_rnnt_loss.json`
- `tests/fixtures/parakeet/expected_tdt_loss.json`
- `tests/fixtures/preprocessor_config.json`
- `tests/fixtures/sample_text.txt`
- `tests/fixtures/sample_text_no_unicode.txt`
- `tests/fixtures/spiece.model`
- `tests/fixtures/test_entity_vocab.json`
- `tests/fixtures/test_sentencepiece.model`
- `tests/fixtures/test_sentencepiece_bpe.model`
- `tests/fixtures/test_sentencepiece_bpe_char.model`
- `tests/fixtures/test_sentencepiece_no_bos.model`
- `tests/fixtures/test_sentencepiece_with_bytefallback.model`
- `tests/fixtures/tests_samples/.gitignore`
- `tests/fixtures/tests_samples/COCO/000000004016.png`
- `tests/fixtures/tests_samples/COCO/000000039769.png`
- `tests/fixtures/tests_samples/COCO/apple.jpg`
- `tests/fixtures/tests_samples/COCO/coco_annotations.txt`
- `tests/fixtures/tests_samples/COCO/coco_panoptic/000000039769.png`
- `tests/fixtures/tests_samples/COCO/coco_panoptic_annotations.txt`
- `tests/fixtures/tests_samples/GermEval/dev.txt`
- `tests/fixtures/tests_samples/GermEval/labels.txt`
- `tests/fixtures/tests_samples/GermEval/train.txt`
- `tests/fixtures/tests_samples/MRPC/dev.csv`
- `tests/fixtures/tests_samples/MRPC/dev.tsv`
- `tests/fixtures/tests_samples/MRPC/train.csv`
- `tests/fixtures/tests_samples/MRPC/train.tsv`
- `tests/fixtures/tests_samples/SQUAD/sample.json`
- `tests/fixtures/tests_samples/STS-B/dev.tsv`
- `tests/fixtures/tests_samples/STS-B/train.tsv`
- `tests/fixtures/tests_samples/conll/sample.json`
- `tests/fixtures/tests_samples/swag/sample.json`
- `tests/fixtures/tests_samples/wiki_text/wiki_00`
- `tests/fixtures/tests_samples/wmt16/sample.json`
- `tests/fixtures/tests_samples/wmt_en_ro/test.json`
- `tests/fixtures/tests_samples/wmt_en_ro/train.json`
- `tests/fixtures/tests_samples/wmt_en_ro/val.json`
- `tests/fixtures/tests_samples/xsum/sample.json`
- `tests/fixtures/vibevoice/expected_acoustic_tokenizer_results.json`
- `tests/fixtures/vibevoice_asr/expected_results_batch.json`
- `tests/fixtures/vibevoice_asr/expected_results_single.json`
- `tests/fixtures/vibevoice_asr/expected_results_with_context.json`
- `tests/fixtures/vocab.json`
- `tests/fixtures/vocab.txt`
- `tests/fixtures/xcodec/integration_tests.json`
- `tests/generation/__init__.py`
- `tests/generation/test_candidate_generator.py`
- `tests/generation/test_configuration_utils.py`
- `tests/generation/test_continuous_batching.py`
- `tests/generation/test_flash_attention_parity.py`
- `tests/generation/test_logits_process.py`
- `tests/generation/test_paged_attention.py`
- `tests/generation/test_stopping_criteria.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/TROUBLESHOOT.md`
- `.github/workflows/add-model-like.yml`
- `.github/workflows/anti-slop.yml`
- `.github/workflows/assign-reviewers.yml`
- `.github/workflows/benchmark.yml`
- `.github/workflows/benchmark_v2.yml`
- `.github/workflows/benchmark_v2_a10_caller.yml`
- `.github/workflows/benchmark_v2_mi325_caller.yml`
- `.github/workflows/build-ci-docker-images.yml`
- `.github/workflows/build-docker-images.yml`
- `.github/workflows/build-nightly-ci-docker-images.yml`
- `.github/workflows/build-past-ci-docker-images.yml`
- `.github/workflows/build_documentation.yml`
- `.github/workflows/build_pr_documentation.yml`
- `.github/workflows/check-workflow-permissions.yml`
- `.github/workflows/check_failed_tests.yml`
- `.github/workflows/check_tiny_models.yml`
- `.github/workflows/circleci-failure-summary-comment.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/collated-reports.yml`
- `.github/workflows/dependents-smoke-test.yml`
- `.github/workflows/doctest_job.yml`
- `.github/workflows/doctests.yml`
- `.github/workflows/extras-smoke-test.yml`
- `.github/workflows/get-pr-info.yml`
- `.github/workflows/get-pr-number.yml`
- `.github/workflows/model_jobs.yml`
- `.github/workflows/model_jobs_intel_gaudi.yml`
- `.github/workflows/new_model_pr_merged_notification.yml`
- `.github/workflows/pr-ci-caller.yml`
- `.github/workflows/pr-ci-post-dashboard-link.yml`
- `.github/workflows/pr-ci-security-gate.yml`
- `.github/workflows/pr-repo-consistency-bot.yml`
- `.github/workflows/pr_build_doc_with_comment.yml`
- `.github/workflows/pr_slow_ci_suggestion.yml`
- `.github/workflows/push-important-models.yml`
- `.github/workflows/release-conda.yml`
- `.github/workflows/release.yml`
- `.github/workflows/self-comment-ci.yml`
- `.github/workflows/self-nightly-caller.yml`
- `.github/workflows/self-nightly-past-ci-caller.yml`
- `.github/workflows/self-past-caller.yml`
- `.github/workflows/self-scheduled-amd-caller.yml`
- `.github/workflows/self-scheduled-amd-mi250-caller.yml`
- `.github/workflows/self-scheduled-amd-mi325-caller.yml`
- `.github/workflows/self-scheduled-amd-mi355-caller.yml`
- `.github/workflows/self-scheduled-caller.yml`
- `.github/workflows/self-scheduled-flash-attn-caller.yml`
- `.github/workflows/self-scheduled-intel-gaudi.yml`
- `.github/workflows/self-scheduled-intel-gaudi3-caller.yml`
- `.github/workflows/self-scheduled.yml`
- `.github/workflows/slack-report.yml`
- `.github/workflows/ssh-runner.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/trl-ci-bot.yml`
- `.github/workflows/trufflehog.yml`
- `.github/workflows/update_metdata.yml`
- `.github/workflows/upload_pr_documentation.yml`
- `docker/transformers-all-latest-gpu/Dockerfile`
- `docker/transformers-doc-builder/Dockerfile`
- `docker/transformers-gpu/Dockerfile`
- `docker/transformers-intel-cpu/Dockerfile`
- `docker/transformers-pytorch-amd-gpu/Dockerfile`
- `docker/transformers-pytorch-deepspeed-amd-gpu/Dockerfile`
- `docker/transformers-pytorch-deepspeed-latest-gpu/Dockerfile`
- `docker/transformers-pytorch-deepspeed-nightly-gpu/Dockerfile`
- `docker/transformers-pytorch-gpu/Dockerfile`
- `docker/transformers-pytorch-tpu/Dockerfile`
- `docker/transformers-pytorch-xpu/Dockerfile`
- `docker/transformers-quantization-latest-gpu/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 4495 |
| .md | 1378 |
| .yml | 79 |
| .json | 40 |
| .txt | 36 |
| dockerfile | 12 |
| .yaml | 11 |
| .dockerfile | 7 |
| .sh | 7 |
| .model | 6 |
| .gitignore | 4 |
| .tsv | 4 |
| .png | 3 |
| .csv | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.ai/skills/add-or-fix-type-checking/SKILL.md 스펙/명령 의미`
- `benchmark/requirements.txt 실행 스크립트와 패키지 경계`
- `benchmark_v2/requirements.txt 실행 스크립트와 패키지 경계`
- `docker/transformers-all-latest-gpu/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/transformers-doc-builder/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/transformers-gpu/Dockerfile 실행 스크립트와 패키지 경계`

