# SWE-agent/SWE-agent 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/SWE-agent__SWE-agent |
| remote | https://github.com/SWE-agent/SWE-agent |
| HEAD | a3d018f (2026-06-09) Chore(deps): Bump codecov/codecov-action from 6.0.1 to 7.0.0 (#1421) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 407 |
| dirs | 113 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `📣 News`, `🚀 Get started!`, `SWE-agent for offensive cybersecurity (EnIGMA) <a name="enigma"></a>`, `Contributions <a name="contributions"></a>`, `Citation & contact <a name="citation"></a>`, `🪪 License <a name="license"></a>`

> <p align="center" <a href="https //swe agent.com/latest/" <img src="assets/swe agent banner.png" alt="swe agent.com" style="height 7em" / </a </p <p align="center" <a href="https //swe agent.com/latest/" <img src="https //img.shields.io/badge/Docs green?style=for the badge&logo=materialformkdocs&logoColor=white" alt="Docs" </a <a href="https //swe bench.slack.com" <img src="https //img.shields.io/badge/Slack 4A154B?style=for the badge&logo=slack&logoColor=white" alt="Slack" </a <a href="https //arxiv.org/abs/2405.15793" <img src="https //img.shields.io/badge/arxiv 2405.15793 red?style=for the badge&logo=arxiv&logoColor=white&labelColor=black" alt="arxiv 2405.15793" </a </p <p align="center" <a href="https //github.com/SWE agent/mini swe agent/" <img src="assets/warning.png" alt="mini swe agent.com" style="height 7em" / </a </p [!warning] Most of our current development effort is on mini 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cursor | dir |
| .devcontainer | dir |
| .env.example | file |
| .git-blame-ignore-revs | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| assets | dir |
| codecov.yml | file |
| config | dir |
| CONTRIBUTING.md | file |
| docs | dir |
| LICENSE | file |
| mkdocs.yml | file |
| mlc_config.json | file |
| pyproject.toml | file |
| README.md | file |
| SECURITY.md | file |
| sweagent | dir |
| tests | dir |
| tools | dir |
| trajectories | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 88 |
| tests/ | 84 |
| tools/ | 78 |
| sweagent/ | 72 |
| config/ | 25 |
| trajectories/ | 21 |
| (root) | 12 |
| .github/ | 11 |
| assets/ | 8 |
| .devcontainer/ | 6 |
| .cursor/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 88 | preferred |
| tests/ | 84 | preferred |
| tools/ | 78 | preferred |
| sweagent/ | 72 | large |
| tests/test_data/ | 56 | large |
| tests/test_data/data_sources/ | 47 | large |
| docs/assets/ | 26 | large |
| config/ | 25 | large |
| tools/web_browser/ | 24 | large |
| sweagent/run/ | 22 | large |
| trajectories/ | 21 | large |
| trajectories/demonstrations/ | 20 | large |
| docs/usage/ | 18 | large |
| tools/web_browser/bin/ | 18 | large |
| docs/reference/ | 17 | large |
| sweagent/inspector/ | 15 | large |
| .github/ | 11 | large |
| sweagent/agent/ | 11 | large |
| tools/windowed/ | 11 | large |
| trajectories/demonstrations/ctf/ | 9 | large |
| assets/ | 8 | large |
| sweagent/utils/ | 8 | large |
| tests/test_data/trajectories/ | 8 | large |
| docs/config/ | 7 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`
- `tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile`
- `tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml`
- `tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile`
- `tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | sweagent | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.devcontainer/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `config/README.md`
- `docs/CNAME`
- `docs/README.md`
- `docs/_footer.md`
- `docs/assets/architecture.png`
- `docs/assets/batch_animated.gif`
- `docs/assets/bubbles.css`
- `docs/assets/custom.css`
- `docs/assets/favicon.ico`
- `docs/assets/image_theme.css`
- `docs/assets/inspector_1.png`
- `docs/assets/inspector_2.png`
- `docs/assets/js/sh-annotation.js`
- `docs/assets/mini_logo.svg`
- `docs/assets/mini_logo_text_below.svg`
- `docs/assets/mkdocstrings.css`
- `docs/assets/navigation_cards.css`
- `docs/assets/open_port_default.png`
- `docs/assets/open_port_in_browser.png`
- `docs/assets/sbcli_logo.svg`
- `docs/assets/sbcli_logo_text_below.svg`
- `docs/assets/swe-agent.svg`
- `docs/assets/sweagent_logo_text_below.svg`
- `docs/assets/swebench_logo.png`
- `docs/assets/swebench_logo_text_below.svg`
- `docs/assets/swerex_logo.svg`
- `docs/assets/swerex_logo_text_below.svg`
- `docs/assets/swesmith_logo.png`
- `docs/assets/swesmith_logo_text_below.svg`
- `docs/assets/template_workflow.png`
- `docs/background/aci.md`
- `docs/background/architecture.md`
- `docs/background/index.md`
- `docs/config/config.md`
- `docs/config/demonstrations.md`
- `docs/config/env.md`
- `docs/config/environments.md`
- `docs/config/models.md`
- `docs/config/templates.md`
- `docs/config/tools.md`
- `docs/dev/contribute.md`
- `docs/dev/formatting_conflicts.md`
- `docs/dev/vscode_launch.json`
- `docs/dev/vscode_settings.json`
- `docs/faq.md`
- `docs/index.md`
- `docs/installation/changelog.md`
- ... 30 more

### 에이전트 지침 후보

- `.cursor/rules/general.mdc`
- `.cursor/rules/project-overview.mdc`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/conftest.py`
- `tests/test_agent.py`
- `tests/test_batch_instance.py`
- `tests/test_commands/_interactive_dummy.py`
- `tests/test_commands/interactive_dummy_wrapper.sh`
- `tests/test_data/config_files/dummy_interactive.yaml`
- `tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile`
- `tests/test_data/data_sources/ctf/crypto/Katy/README.md`
- `tests/test_data/data_sources/ctf/crypto/Katy/challenge.json`
- `tests/test_data/data_sources/ctf/crypto/Katy/customrandom.c`
- `tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml`
- `tests/test_data/data_sources/ctf/crypto/Katy/release`
- `tests/test_data/data_sources/ctf/crypto/Katy/server`
- `tests/test_data/data_sources/ctf/crypto/Katy/solver.py`
- `tests/test_data/data_sources/ctf/forensics/flash/README.md`
- `tests/test_data/data_sources/ctf/forensics/flash/challenge.json`
- `tests/test_data/data_sources/ctf/forensics/flash/flash_c8429a430278283c0e571baebca3d139.zip`
- `tests/test_data/data_sources/ctf/misc/networking_1/README.md`
- `tests/test_data/data_sources/ctf/misc/networking_1/challenge.json`
- `tests/test_data/data_sources/ctf/misc/networking_1/networking.pcap`
- `tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile`
- `tests/test_data/data_sources/ctf/pwn/warmup/README.md`
- `tests/test_data/data_sources/ctf/pwn/warmup/challenge.json`
- `tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml`
- `tests/test_data/data_sources/ctf/pwn/warmup/flag.txt`
- `tests/test_data/data_sources/ctf/pwn/warmup/warmup`
- `tests/test_data/data_sources/ctf/pwn/warmup/warmup.c`
- `tests/test_data/data_sources/ctf/pwn/warmup/warmup.py`
- `tests/test_data/data_sources/ctf/rev/rock/README.md`
- `tests/test_data/data_sources/ctf/rev/rock/challenge.json`
- `tests/test_data/data_sources/ctf/rev/rock/rock`
- `tests/test_data/data_sources/ctf/rev/rock/rock.cpp`
- `tests/test_data/data_sources/ctf/rev/rock/solution.cpp`
- `tests/test_data/data_sources/ctf/rev/rock/test_solver/solution.py`
- `tests/test_data/data_sources/ctf/rev/rock/test_solver/test.sh`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/000-default.conf`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/cgi/file.pl`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/cgi/forms.pl`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/cgi/hello.pl`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/challenge.json`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/flag`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/index.html`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/solution.txt`
- `tests/test_data/data_sources/debug_20240322.json`
- `tests/test_data/data_sources/expert_instances.yaml`
- `tests/test_data/data_sources/human_eval.json`
- `tests/test_data/data_sources/simple_instances.yaml`
- `tests/test_data/data_sources/simple_instances_long.yaml`
- `tests/test_data/data_sources/swe-bench-dev-easy.json`
- `tests/test_data/data_sources/swe-bench-dev-easy_first_only.json`
- `tests/test_data/data_sources/swe-bench-lite-test.json`
- `tests/test_data/trajectories/gpt4__swe-agent-test-repo__default_from_url__t-0.00__p-0.95__c-3.00__install-1/6e44b9__sweagenttestrepo-1c2844.traj`
- `tests/test_data/trajectories/gpt4__swe-agent-test-repo__default_from_url__t-0.00__p-0.95__c-3.00__install-1/solution_missing_colon.py`
- `tests/test_data/trajectories/gpt4__swe-agent__test-repo__default_from_url__t-0.00__p-0.95__c-3.00__install-1/args.yaml`
- `tests/test_data/trajectories/gpt4__swe-agent__test-repo__default_from_url__t-0.00__p-0.95__c-3.00__install-1/swe-agent__test-repo-i1.traj`
- `tests/test_data/trajectories/gpt4__swe-bench-dev-easy_first_only__default__t-0.00__p-0.95__c-3.00__install-1/all_preds.jsonl`
- `tests/test_data/trajectories/gpt4__swe-bench-dev-easy_first_only__default__t-0.00__p-0.95__c-3.00__install-1/args.yaml`
- `tests/test_data/trajectories/gpt4__swe-bench-dev-easy_first_only__default__t-0.00__p-0.95__c-3.00__install-1/patches/pydicom__pydicom-1458.patch`
- `tests/test_data/trajectories/gpt4__swe-bench-dev-easy_first_only__default__t-0.00__p-0.95__c-3.00__install-1/pydicom__pydicom-1458.traj`
- `tests/test_env.py`
- `tests/test_env_utils.py`
- `tests/test_history_processors.py`
- `tests/test_models.py`
- `tests/test_packaging.py`
- `tests/test_parsing.py`
- `tests/test_problem_statement_multimodal.py`
- `tests/test_quick_stats.py`
- `tests/test_run.py`
- `tests/test_run_batch.py`
- `tests/test_run_hooks.py`
- `tests/test_run_replay.py`
- `tests/test_run_single.py`
- `tests/test_swesmith.py`
- `tests/test_tools_command_parsing.py`
- `tests/test_utils.py`
- `tests/tools/__init__.py`
- `tests/tools/conftest.py`
- ... 4 more

### CI/Docker 후보

- `.github/workflows/build-docs.yaml`
- `.github/workflows/check-links-periodic.yaml`
- `.github/workflows/check-links-pr.yaml`
- `.github/workflows/pytest.yaml`
- `tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile`
- `tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml`
- `tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile`
- `tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile`
- `tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 100 |
| .md | 68 |
| .yaml | 51 |
| .traj | 22 |
| .png | 17 |
| .sh | 17 |
| .json | 15 |
| .svg | 15 |
| .yml | 10 |
| .css | 6 |
| .html | 4 |
| .txt | 4 |
| .pl | 3 |
| dockerfile | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `sweagent/ 내부 책임 분리`
- `tests/test_data/ 내부 책임 분리`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile 실행 스크립트와 패키지 경계`
- `tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml 실행 스크립트와 패키지 경계`
- `tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile 실행 스크립트와 패키지 경계`
- `tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml 실행 스크립트와 패키지 경계`

