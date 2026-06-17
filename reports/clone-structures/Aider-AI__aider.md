# Aider-AI/aider 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Aider-AI__aider |
| remote | https://github.com/Aider-AI/aider |
| HEAD | 5dc9490 (2026-05-22) Merge pull request #5173 from Cyberfilo/feat/anthropic_models-list-add-opus-4-5 |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 685 |
| dirs | 89 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Features`, `[Cloud and local LLMs](https://aider.chat/docs/llms.html)`, `[Maps your codebase](https://aider.chat/docs/repomap.html)`, `[100+ code languages](https://aider.chat/docs/languages.html)`, `[Git integration](https://aider.chat/docs/git.html)`, `[Use in your IDE](https://aider.chat/docs/usage/watch.html)`, `[Images & web pages](https://aider.chat/docs/usage/images-urls.html)`, `[Voice-to-code](https://aider.chat/docs/usage/voice.html)`, `[Linting & testing](https://aider.chat/docs/usage/lint-test.html)`, `[Copy/paste to web chat](https://aider.chat/docs/usage/copypaste.html)`, `Getting Started`, `Change directory into your codebase`, `DeepSeek`, `Claude 3.7 Sonnet`, `o3-mini`, `More Information`, `Documentation`, `Community & Resources`

> <p align="center" <a href="https //aider.chat/" <img src="https //aider.chat/assets/logo.svg" alt="Aider Logo" width="300" </a </p <h1 align="center" AI Pair Programming in Your Terminal </h1 <p align="center" Aider lets you pair program with LLMs to start a new project or build on your existing codebase. </p <p align="center" <img src="https //aider.chat/assets/screencast.svg" alt="aider screencast" </p <p align="center" <! [[[cog from scripts.homepage import get badges md text = get badges md() cog.out(text) ]]] <a href="https //github.com/Aider AI/aider/stargazers" <img alt="GitHub Stars" title="Total number of GitHub stars the Aider project has received" src="https //img.shields.io/github/stars/Aider AI/aider?style=flat square&logo=github&color=f1c40f&labelColor=555555"/ </a <a href="https //pypi.org/project/aider chat/" <img alt="PyPI Downloads" title="Total number of installations 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .flake8 | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| aider | dir |
| benchmark | dir |
| CNAME | file |
| CONTRIBUTING.md | file |
| docker | dir |
| HISTORY.md | file |
| LICENSE.txt | file |
| MANIFEST.in | file |
| pyproject.toml | file |
| pytest.ini | file |
| README.md | file |
| requirements | dir |
| requirements.txt | file |
| scripts | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| aider/ | 515 |
| tests/ | 87 |
| scripts/ | 23 |
| benchmark/ | 22 |
| (root) | 13 |
| requirements/ | 13 |
| .github/ | 11 |
| docker/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 87 | preferred |
| scripts/ | 23 | preferred |
| aider/ | 515 | large |
| aider/website/ | 373 | large |
| aider/website/assets/ | 203 | large |
| aider/website/docs/ | 84 | large |
| aider/queries/ | 60 | large |
| tests/fixtures/ | 49 | large |
| tests/fixtures/languages/ | 40 | large |
| aider/coders/ | 38 | large |
| tests/basic/ | 33 | large |
| aider/queries/tree-sitter-language-pack/ | 32 | large |
| aider/queries/tree-sitter-languages/ | 28 | large |
| aider/website/_includes/ | 24 | large |
| aider/website/_posts/ | 24 | large |
| benchmark/ | 22 | large |
| aider/website/_data/ | 14 | large |
| aider/website/examples/ | 14 | large |
| requirements/ | 13 | large |
| .github/ | 11 | large |
| .github/workflows/ | 10 | large |
| aider/resources/ | 3 | large |
| tests/fixtures/sample-code-base/ | 2 | large |
| tests/scrape/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `benchmark/Dockerfile`
- `docker/Dockerfile`
- `pyproject.toml`
- `requirements.txt`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | aider-chat | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `aider/queries/tree-sitter-language-pack/README.md`
- `aider/queries/tree-sitter-languages/README.md`
- `aider/website/docs/benchmarks-0125.md`
- `aider/website/docs/benchmarks-1106.md`
- `aider/website/docs/benchmarks-speed-1106.md`
- `aider/website/docs/benchmarks.md`
- `aider/website/docs/config.md`
- `aider/website/docs/config/adv-model-settings.md`
- `aider/website/docs/config/aider_conf.md`
- `aider/website/docs/config/api-keys.md`
- `aider/website/docs/config/dotenv.md`
- `aider/website/docs/config/editor.md`
- `aider/website/docs/config/model-aliases.md`
- `aider/website/docs/config/options.md`
- `aider/website/docs/config/reasoning.md`
- `aider/website/docs/ctags.md`
- `aider/website/docs/faq.md`
- `aider/website/docs/git.md`
- `aider/website/docs/index.md`
- `aider/website/docs/install.md`
- `aider/website/docs/install/codespaces.md`
- `aider/website/docs/install/docker.md`
- `aider/website/docs/install/optional.md`
- `aider/website/docs/install/replit.md`
- `aider/website/docs/languages.md`
- `aider/website/docs/leaderboards/by-release-date.md`
- `aider/website/docs/leaderboards/contrib.md`
- `aider/website/docs/leaderboards/edit.md`
- `aider/website/docs/leaderboards/index.md`
- `aider/website/docs/leaderboards/notes.md`
- `aider/website/docs/leaderboards/refactor.md`
- `aider/website/docs/legal/contributor-agreement.md`
- `aider/website/docs/legal/privacy.md`
- `aider/website/docs/llms.md`
- `aider/website/docs/llms/anthropic.md`
- `aider/website/docs/llms/azure.md`
- `aider/website/docs/llms/bedrock.md`
- `aider/website/docs/llms/cohere.md`
- `aider/website/docs/llms/deepseek.md`
- `aider/website/docs/llms/gemini.md`
- `aider/website/docs/llms/github.md`
- `aider/website/docs/llms/groq.md`
- `aider/website/docs/llms/lm-studio.md`
- `aider/website/docs/llms/ollama.md`
- `aider/website/docs/llms/openai-compat.md`
- `aider/website/docs/llms/openai.md`
- `aider/website/docs/llms/openrouter.md`
- `aider/website/docs/llms/other.md`
- ... 30 more

### 에이전트 지침 후보

- `aider/website/docs/llms/gemini.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/basic/__init__.py`
- `tests/basic/test_analytics.py`
- `tests/basic/test_aws_credentials.py`
- `tests/basic/test_coder.py`
- `tests/basic/test_commands.py`
- `tests/basic/test_deprecated.py`
- `tests/basic/test_editblock.py`
- `tests/basic/test_editor.py`
- `tests/basic/test_exceptions.py`
- `tests/basic/test_find_or_blocks.py`
- `tests/basic/test_history.py`
- `tests/basic/test_io.py`
- `tests/basic/test_linter.py`
- `tests/basic/test_main.py`
- `tests/basic/test_model_info_manager.py`
- `tests/basic/test_models.py`
- `tests/basic/test_onboarding.py`
- `tests/basic/test_openrouter.py`
- `tests/basic/test_reasoning.py`
- `tests/basic/test_repo.py`
- `tests/basic/test_repomap.py`
- `tests/basic/test_run_cmd.py`
- `tests/basic/test_sanity_check_repo.py`
- `tests/basic/test_scripting.py`
- `tests/basic/test_sendchat.py`
- `tests/basic/test_special.py`
- `tests/basic/test_ssl_verification.py`
- `tests/basic/test_udiff.py`
- `tests/basic/test_urls.py`
- `tests/basic/test_utils.py`
- `tests/basic/test_voice.py`
- `tests/basic/test_watch.py`
- `tests/basic/test_wholefile.py`
- `tests/browser/test_browser.py`
- `tests/fixtures/chat-history-search-replace-gold.txt`
- `tests/fixtures/chat-history.md`
- `tests/fixtures/languages/arduino/test.ino`
- `tests/fixtures/languages/bash/test.sh`
- `tests/fixtures/languages/c/test.c`
- `tests/fixtures/languages/chatito/test.chatito`
- `tests/fixtures/languages/clojure/test.clj`
- `tests/fixtures/languages/commonlisp/test.lisp`
- `tests/fixtures/languages/cpp/test.cpp`
- `tests/fixtures/languages/csharp/test.cs`
- `tests/fixtures/languages/d/test.d`
- `tests/fixtures/languages/dart/test.dart`
- `tests/fixtures/languages/elisp/test.el`
- `tests/fixtures/languages/elixir/test.ex`
- `tests/fixtures/languages/elm/test.elm`
- `tests/fixtures/languages/gleam/test.gleam`
- `tests/fixtures/languages/go/test.go`
- `tests/fixtures/languages/haskell/test.hs`
- `tests/fixtures/languages/hcl/test.tf`
- `tests/fixtures/languages/java/test.java`
- `tests/fixtures/languages/javascript/test.js`
- `tests/fixtures/languages/kotlin/test.kt`
- `tests/fixtures/languages/lua/test.lua`
- `tests/fixtures/languages/matlab/test.m`
- `tests/fixtures/languages/ocaml/test.ml`
- `tests/fixtures/languages/ocaml_interface/test.mli`
- `tests/fixtures/languages/php/test.php`
- `tests/fixtures/languages/pony/test.pony`
- `tests/fixtures/languages/properties/test.properties`
- `tests/fixtures/languages/python/test.py`
- `tests/fixtures/languages/ql/test.ql`
- `tests/fixtures/languages/r/test.r`
- `tests/fixtures/languages/racket/test.rkt`
- `tests/fixtures/languages/ruby/test.rb`
- `tests/fixtures/languages/rust/test.rs`
- `tests/fixtures/languages/scala/test.scala`
- `tests/fixtures/languages/solidity/test.sol`
- `tests/fixtures/languages/swift/test.swift`
- `tests/fixtures/languages/tsx/test.tsx`
- `tests/fixtures/languages/typescript/test.ts`
- `tests/fixtures/languages/udev/test.rules`
- `tests/fixtures/languages/zig/test.zig`
- `tests/fixtures/sample-code-base-repo-map.txt`
- `tests/fixtures/sample-code-base/sample.js`
- `tests/fixtures/sample-code-base/sample.py`
- ... 7 more

### CI/Docker 후보

- `.github/workflows/check_pypi_version.yml`
- `.github/workflows/docker-build-test.yml`
- `.github/workflows/docker-release.yml`
- `.github/workflows/issues.yml`
- `.github/workflows/pages.yml`
- `.github/workflows/pre-commit.yml`
- `.github/workflows/release.yml`
- `.github/workflows/ubuntu-tests.yml`
- `.github/workflows/windows-tests.yml`
- `.github/workflows/windows_check_pypi_version.yml`
- `benchmark/Dockerfile`
- `docker/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 147 |
| .md | 143 |
| .mp3 | 111 |
| .scm | 58 |
| .jpg | 37 |
| .yml | 28 |
| .svg | 23 |
| .sh | 16 |
| .js | 12 |
| .png | 12 |
| .txt | 11 |
| .in | 9 |
| .html | 7 |
| .mp4 | 6 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `aider/ 내부 책임 분리`
- `aider/website/ 내부 책임 분리`
- `aider/website/assets/ 내부 책임 분리`
- `benchmark/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/Dockerfile 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

