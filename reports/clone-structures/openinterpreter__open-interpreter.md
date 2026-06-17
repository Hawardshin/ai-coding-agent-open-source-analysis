# openinterpreter/open-interpreter 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/openinterpreter__open-interpreter |
| remote | https://github.com/openinterpreter/open-interpreter |
| HEAD | e00f08e (2026-05-17) Merge pull request #1749 from endolith/update_model_names |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 276 |
| dirs | 65 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Demo`, `An interactive demo is also available on Google Colab`, `Along with an example voice interface, inspired by _Her_`, `Quick Start`, `Install`, `Terminal`, `Python`, `GitHub Codespaces`, `Comparison to ChatGPT's Code Interpreter`, `Commands`, `Interactive Chat`, `Programmatic Chat`, `... Streams output to your terminal, completes task ...`, `...`, `Start a New Chat`, `Save and Restore Chats`, `Customize System Message`, `Change your Language Model`

> <h1 align="center" ● Open Interpreter</h1 <p align="center" <a href="https //discord.gg/Hvz9Axh84z" <img alt="Discord" src="https //img.shields.io/discord/1146610656779440188?logo=discord&style=flat&logoColor=white"/ </a <a href="docs/README JA.md" <img src="https //img.shields.io/badge/ドキュメント 日本語 white.svg" alt="JA doc"/ </a <a href="docs/README ZH.md" <img src="https //img.shields.io/badge/文档 中文版 white.svg" alt="ZH doc"/ </a <a href="docs/README ES.md" <img src="https //img.shields.io/badge/Español white.svg" alt="ES doc"/ </a <a href="docs/README UK.md" <img src="https //img.shields.io/badge/Українська white.svg" alt="UK doc"/ </a <a href="docs/README IN.md" <img src="https //img.shields.io/badge/Hindi white.svg" alt="IN doc"/ </a <a href="LICENSE" <img src="https //img.shields.io/static/v1?label=license&message=AGPL&color=white&style=flat" alt="License"/ </a <br <br <a href="https //

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .devcontainer | dir |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| Dockerfile | file |
| docs | dir |
| examples | dir |
| installers | dir |
| interpreter | dir |
| LICENSE | file |
| poetry.lock | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| interpreter/ | 142 |
| docs/ | 97 |
| examples/ | 12 |
| (root) | 7 |
| .github/ | 6 |
| tests/ | 5 |
| installers/ | 4 |
| .devcontainer/ | 2 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 97 | preferred |
| examples/ | 12 | preferred |
| tests/ | 5 | preferred |
| scripts/ | 1 | preferred |
| interpreter/ | 142 | large |
| interpreter/core/ | 77 | large |
| interpreter/core/computer/ | 54 | large |
| interpreter/terminal_interface/ | 54 | large |
| docs/language-models/ | 31 | large |
| interpreter/terminal_interface/profiles/ | 30 | large |
| docs/language-models/hosted-models/ | 22 | large |
| docs/usage/ | 14 | large |
| interpreter/terminal_interface/utils/ | 12 | large |
| interpreter/computer_use/ | 10 | large |
| docs/guides/ | 8 | large |
| interpreter/core/llm/ | 8 | large |
| interpreter/computer_use/tools/ | 7 | large |
| interpreter/core/utils/ | 7 | large |
| .github/ | 6 | large |
| docs/language-models/local-models/ | 6 | large |
| docs/usage/python/ | 6 | large |
| docs/assets/ | 5 | large |
| docs/usage/terminal/ | 5 | large |
| docs/code-execution/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `examples/Dockerfile`
- `poetry.lock`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | open-interpreter | true | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/CONTRIBUTING.md`
- `docs/NCU_MIGRATION_GUIDE.md`
- `docs/README_DE.md`
- `docs/README_ES.md`
- `docs/README_IN.md`
- `docs/README_JA.md`
- `docs/README_UK.md`
- `docs/README_VN.md`
- `docs/README_ZH.md`
- `docs/ROADMAP.md`
- `docs/SAFE_MODE.md`
- `docs/SECURITY.md`
- `docs/assets/.DS-Store`
- `docs/assets/favicon.ico`
- `docs/assets/favicon.png`
- `docs/assets/logo/circle-inverted.png`
- `docs/assets/logo/circle.png`
- `docs/code-execution/computer-api.mdx`
- `docs/code-execution/custom-languages.mdx`
- `docs/code-execution/settings.mdx`
- `docs/code-execution/usage.mdx`
- `docs/computer/custom-languages.mdx`
- `docs/computer/introduction.mdx`
- `docs/computer/language-model-usage.mdx`
- `docs/computer/user-usage.mdx`
- `docs/getting-started/introduction.mdx`
- `docs/getting-started/setup.mdx`
- `docs/guides/advanced-terminal-usage.mdx`
- `docs/guides/basic-usage.mdx`
- `docs/guides/demos.mdx`
- `docs/guides/multiple-instances.mdx`
- `docs/guides/os-mode.mdx`
- `docs/guides/profiles.mdx`
- `docs/guides/running-locally.mdx`
- `docs/guides/streaming-response.mdx`
- `docs/integrations/docker.mdx`
- `docs/integrations/e2b.mdx`
- `docs/language-models/custom-models.mdx`
- `docs/language-models/hosted-models/ai21.mdx`
- `docs/language-models/hosted-models/anthropic.mdx`
- `docs/language-models/hosted-models/anyscale.mdx`
- `docs/language-models/hosted-models/aws-sagemaker.mdx`
- `docs/language-models/hosted-models/azure.mdx`
- `docs/language-models/hosted-models/baseten.mdx`
- `docs/language-models/hosted-models/cloudflare.mdx`
- `docs/language-models/hosted-models/cohere.mdx`
- `docs/language-models/hosted-models/deepinfra.mdx`
- `docs/language-models/hosted-models/gpt-4-setup.mdx`
- `docs/language-models/hosted-models/huggingface.mdx`
- ... 30 more

### 에이전트 지침 후보

- `interpreter/core/computer/skills/skills.py`

### 스펙/템플릿/명령/스킬 후보

- `interpreter/core/computer/skills/skills.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/config.test.yaml`
- `tests/core/computer/files/test_files.py`
- `tests/core/computer/test_computer.py`
- `tests/core/test_async_core.py`
- `tests/test_interpreter.py`

### CI/Docker 후보

- `.github/workflows/potential-duplicates.yml`
- `.github/workflows/python-package.yml`
- `Dockerfile`
- `examples/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 144 |
| .mdx | 77 |
| .md | 16 |
| .ipynb | 9 |
| .yml | 6 |
| .yaml | 5 |
| .png | 3 |
| dockerfile | 3 |
| .json | 2 |
| .ps1 | 2 |
| .sh | 2 |
| .css | 1 |
| .ds-store | 1 |
| .gitignore | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `interpreter/ 내부 책임 분리`
- `interpreter/core/computer/skills/skills.py 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `examples/Dockerfile 실행 스크립트와 패키지 경계`
- `poetry.lock 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

