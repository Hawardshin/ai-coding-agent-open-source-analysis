# openai/evals 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/openai__evals |
| remote | https://github.com/openai/evals |
| HEAD | 8eac7a7 (2026-04-14) Pin pre-commit hook revisions to immutable commits (#1644) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 1728 |
| dirs | 662 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `OpenAI Evals`, `Setup`, `Downloading evals`, `Making evals`, `Running evals`, `Writing evals`, `FAQ`, `Disclaimer`

> OpenAI Evals You can now configure and run Evals directly in the OpenAI Dashboard. Get started → Evals provide a framework for evaluating large language models (LLMs) or systems built using LLMs. We offer an existing registry of evals to test different dimensions of OpenAI models and the ability to write your own custom evals for use cases you care about. You can also use your data to build private evals which represent the common LLMs patterns in your workflow without exposing any of that data publicly. If you are building with LLMs, creating high quality evals is one of the most impactful things you can do. Without evals, it can be very difficult and time intensive to understand how different model versions might affect your use case. In the words of OpenAI's President Greg Brockman <img width="596" alt="https //x.com/gdb/status/1733553161884127435?s=20" src="https //github.com/openai/

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| docs | dir |
| evals | dir |
| examples | dir |
| LICENSE.md | file |
| Makefile | file |
| MANIFEST.in | file |
| mypy.ini | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| evals/ | 1696 |
| (root) | 10 |
| .github/ | 8 |
| docs/ | 6 |
| examples/ | 4 |
| scripts/ | 3 |
| tests/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 6 | preferred |
| examples/ | 4 | preferred |
| tests/ | 1 | preferred |
| scripts/ | 3 | preferred |
| evals/ | 1696 | large |
| evals/registry/ | 1243 | large |
| evals/registry/data/ | 722 | large |
| evals/registry/evals/ | 463 | large |
| evals/elsuite/ | 398 | large |
| evals/elsuite/hr_ml_agent_bench/ | 106 | large |
| evals/elsuite/multistep_web_tasks/ | 72 | large |
| evals/solvers/ | 27 | large |
| evals/elsuite/identifying_variables/ | 24 | large |
| evals/registry/solvers/ | 19 | large |
| evals/registry/eval_sets/ | 18 | large |
| evals/registry/modelgraded/ | 18 | large |
| evals/elsuite/steganography/ | 15 | large |
| evals/elsuite/bluff/ | 14 | large |
| evals/elsuite/cant_do_that_anymore/ | 14 | large |
| evals/elsuite/text_compression/ | 14 | large |
| evals/elsuite/sandbagging/ | 13 | large |
| evals/elsuite/make_me_pay/ | 12 | large |
| evals/elsuite/already_said_that/ | 11 | large |
| evals/elsuite/basic/ | 11 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `evals/elsuite/hr_ml_agent_bench/benchmarks/bipedal_walker/scripts/requirements.txt`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/cartpole/scripts/requirements.txt`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/cifar10/scripts/requirements.txt`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/humanoid/scripts/requirements.txt`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/imdb/scripts/requirements.txt`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/ogbn_arxiv/scripts/requirements.txt`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/spaceship_titanic/scripts/requirements.txt`
- `evals/elsuite/hr_ml_agent_bench/requirements.txt`
- `evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile`
- `evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile`
- `evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile`
- `evals/elsuite/multistep_web_tasks/docker/homepage/requirements.txt`
- `evals/elsuite/steganography/scripts/dataset/requirements.txt`
- `evals/elsuite/text_compression/scripts/dataset/requirements.txt`
- `evals/solvers/providers/google/requirements.txt`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | evals | false | false | true | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/build-eval.md`
- `docs/completion-fn-protocol.md`
- `docs/completion-fns.md`
- `docs/custom-eval.md`
- `docs/eval-templates.md`
- `docs/run-evals.md`
- `evals/elsuite/already_said_that/README.md`
- `evals/elsuite/ballots/readme.md`
- `evals/elsuite/bluff/README.md`
- `evals/elsuite/bugged_tools/README.md`
- `evals/elsuite/cant_do_that_anymore/README.md`
- `evals/elsuite/error_recovery/README.md`
- `evals/elsuite/function_deduction/README.md`
- `evals/elsuite/hr_ml_agent_bench/README.md`
- `evals/elsuite/identifying_variables/README.md`
- `evals/elsuite/make_me_pay/readme.md`
- `evals/elsuite/make_me_say/readme.md`
- `evals/elsuite/multistep_web_tasks/README.md`
- `evals/elsuite/sandbagging/README.md`
- `evals/elsuite/schelling_point/README.md`
- `evals/elsuite/self_prompting/readme.md`
- `evals/elsuite/skill_acquisition/readme.md`
- `evals/elsuite/steganography/readme.md`
- `evals/elsuite/steganography/scripts/dataset/README.md`
- `evals/elsuite/text_compression/readme.md`
- `evals/elsuite/text_compression/scripts/dataset/README.md`
- `evals/elsuite/theory_of_mind/readme.md`
- `evals/elsuite/track_the_stat/README.md`
- `evals/elsuite/twenty_questions/readme.md`
- `evals/registry/data/README.md`
- `evals/registry/data/solve-for-variable/tools/README.md`
- `evals/registry/data/ukraine_gec/README.md`
- `evals/solvers/README.md`
- `evals/solvers/postprocessors/README.md`

### 에이전트 지침 후보

- `evals/elsuite/skill_acquisition/eval.py`
- `evals/elsuite/skill_acquisition/readme.md`
- `evals/elsuite/skill_acquisition/scraping/human_rights.html`
- `evals/elsuite/skill_acquisition/scraping/scrape_distractor_articles.py`
- `evals/elsuite/skill_acquisition/scraping/scrape_miskito.py`
- `evals/elsuite/skill_acquisition/scripts/make_plots.py`
- `evals/elsuite/skill_acquisition/scripts/run_experiments.sh`
- `evals/elsuite/skill_acquisition/solvers.py`
- `evals/elsuite/skill_acquisition/task_description.py`
- `evals/elsuite/skill_acquisition/test_skill_acquisition.py`
- `evals/elsuite/skill_acquisition/utils.py`
- `evals/registry/data/skill_acquisition/miskito/knowledge_base/honduras.jsonl`
- `evals/registry/data/skill_acquisition/miskito/knowledge_base/human_rights_miskito.jsonl`
- `evals/registry/data/skill_acquisition/miskito/knowledge_base/miskito_language.jsonl`
- `evals/registry/data/skill_acquisition/miskito/knowledge_base/miskito_lessons.jsonl`
- `evals/registry/data/skill_acquisition/miskito/knowledge_base/miskito_people.jsonl`
- `evals/registry/data/skill_acquisition/miskito/knowledge_base/mosquito.jsonl`
- `evals/registry/data/skill_acquisition/miskito/knowledge_base/mosquito_coast.jsonl`
- `evals/registry/data/skill_acquisition/miskito/knowledge_base/nicaragua.jsonl`
- `evals/registry/data/skill_acquisition/miskito/qa_pairs_by_lesson.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_test_all.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_test_all_fewshot.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_test_manipulation.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_test_manipulation_fewshot.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_test_translation.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_test_translation_fewshot.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_train_all.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_train_manipulation.jsonl`
- `evals/registry/data/skill_acquisition/miskito/variants/miskito_train_translation.jsonl`
- `evals/registry/evals/skill_acquisition.yaml`
- `evals/registry/solvers/skill_acquisition.yaml`

### 스펙/템플릿/명령/스킬 후보

- `evals/elsuite/multistep_web_tasks/docker/homepage/templates/calculator.html`
- `evals/elsuite/multistep_web_tasks/docker/homepage/templates/index.html`
- `evals/elsuite/multistep_web_tasks/docker/homepage/templates/scratchpad.html`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `evals/elsuite/hr_ml_agent_bench/tests/test_actions.py`
- `evals/elsuite/test/match.py`
- `tests/unit/evals/test_metrics.py`

### CI/Docker 후보

- `.github/workflows/parse_yaml.py`
- `.github/workflows/run_tests.yaml`
- `.github/workflows/test_eval.yaml`
- `evals/elsuite/multistep_web_tasks/docker/dc-evals-bash/Dockerfile`
- `evals/elsuite/multistep_web_tasks/docker/flask-playwright/Dockerfile`
- `evals/elsuite/multistep_web_tasks/docker/homepage/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .jsonl | 661 |
| .yaml | 524 |
| .py | 353 |
| .md | 42 |
| .txt | 39 |
| .sh | 30 |
| .png | 13 |
| .json | 10 |
| license | 10 |
| .csv | 9 |
| .gitignore | 7 |
| .ipynb | 5 |
| .gitattributes | 4 |
| .html | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `evals/ 내부 책임 분리`
- `evals/elsuite/multistep_web_tasks/docker/homepage/templates/calculator.html 스펙/명령 의미`
- `evals/elsuite/multistep_web_tasks/docker/homepage/templates/index.html 스펙/명령 의미`
- `evals/elsuite/multistep_web_tasks/docker/homepage/templates/scratchpad.html 스펙/명령 의미`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/bipedal_walker/scripts/requirements.txt 실행 스크립트와 패키지 경계`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/cartpole/scripts/requirements.txt 실행 스크립트와 패키지 경계`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/cifar10/scripts/requirements.txt 실행 스크립트와 패키지 경계`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/humanoid/scripts/requirements.txt 실행 스크립트와 패키지 경계`
- `evals/elsuite/hr_ml_agent_bench/benchmarks/imdb/scripts/requirements.txt 실행 스크립트와 패키지 경계`

