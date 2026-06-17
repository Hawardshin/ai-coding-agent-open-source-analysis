# szczyglis-dev/py-gpt 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/szczyglis-dev__py-gpt |
| remote | https://github.com/szczyglis-dev/py-gpt |
| HEAD | 75bc06e (2026-02-06) Updated CHANGELOG |
| branch | master |
| groups | llm-wiki-100 |
| files | 3086 |
| dirs | 395 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.

## README 신호

- 파일: `README.md`
- 주요 heading: `PyGPT - Desktop AI Assistant`, `Overview`, `Features`, `Installation`, `Binaries (Linux, Windows 10 and 11)`, `Microsoft Store (Windows)`, `AppImage (Linux)`, `Snap Store (Linux)`, `PyPi (pip)`, `Running from GitHub source code`, `Install with pip`, `Install with Poetry`, `Troubleshooting`, `/var/lib/snapd/apparmor/profiles/snap.pygpt.pygpt`, `Other requirements`, `Debugging and logging`, `Quick Start`, `Setting-up API Key(s)`

> PyGPT Desktop AI Assistant Release 2.7.12 build 2026 02 06 Python =3.10, <3.14 Official website https //pygpt.net Documentation https //pygpt.readthedocs.io Discord https //pygpt.net/discord Snap https //snapcraft.io/pygpt PyPi https //pypi.org/project/pygpt net Compiled version for Linux ( zip ) and Windows 10/11 ( msi ) 64 bit https //pygpt.net/ download ❤️ Donate https //www.buymeacoffee.com/szczyglis https //github.com/sponsors/szczyglis dev Overview PyGPT is all in one Desktop AI Assistant that provides direct interaction with OpenAI language models, including GPT 5 , GPT 4 , o1 , o3 and more, through the OpenAI API . By utilizing other SDKs and LlamaIndex , the application also supports alternative LLMs, like those available on HuggingFace , locally available models via Ollama (like gpt oss , Llama 3 , Mistral , DeepSeek V3/R1 or Bielik ), and other models like Google Gemini , Anth

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .readthedocs.yaml | file |
| AppImageBuilder.yml | file |
| bin | dir |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| data | dir |
| docs | dir |
| examples | dir |
| icon.png | file |
| install.bat | file |
| INSTALL.md | file |
| install.sh | file |
| LICENSE | file |
| linux.spec | file |
| poetry.lock | file |
| privacy-policy.md | file |
| PyGPT_Linux_PAD_File.xml | file |
| PyGPT_Windows_PAD_File.xml | file |
| pygpt.desktop | file |
| pyproject.toml | file |
| README.md | file |
| requirements.txt | file |
| run-tests.sh | file |
| run.bat | file |
| run.py | file |
| run.sh | file |
| SECURITY.md | file |
| setup.py | file |
| shortcut.bat | file |
| shortcut.sh | file |
| snap | dir |
| snaprun.sh | file |
| src | dir |
| tests | dir |
| version.rc | file |
| windows.spec | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 2740 |
| tests/ | 199 |
| docs/ | 87 |
| (root) | 30 |
| bin/ | 14 |
| examples/ | 10 |
| snap/ | 3 |
| data/ | 2 |
| .github/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 2740 | preferred |
| docs/ | 87 | preferred |
| examples/ | 10 | preferred |
| tests/ | 199 | preferred |
| src/pygpt_net/ | 2739 | large |
| src/pygpt_net/data/ | 1527 | large |
| src/pygpt_net/provider/ | 332 | large |
| src/pygpt_net/core/ | 279 | large |
| src/pygpt_net/ui/ | 204 | large |
| src/pygpt_net/plugin/ | 151 | large |
| src/pygpt_net/controller/ | 140 | large |
| docs/source/ | 77 | large |
| tests/controller/ | 71 | large |
| tests/core/ | 68 | large |
| src/pygpt_net/tools/ | 56 | large |
| docs/source/images/ | 54 | large |
| tests/provider/ | 38 | large |
| tests/provider/api/ | 21 | large |
| src/pygpt_net/migrations/ | 19 | large |
| bin/ | 14 | large |
| src/pygpt_net/item/ | 14 | large |
| tests/controller/chat/ | 13 | large |
| tests/core/agents/ | 13 | large |
| tests/provider/core/ | 11 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docs/requirements.txt`
- `poetry.lock`
- `pyproject.toml`
- `requirements.txt`
- `src/pygpt_net/data/js/highlight/es/package.json`
- `src/pygpt_net/data/js/highlight/package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| src/pygpt_net/data/js/highlight/es/package.json |  |  |  |
| src/pygpt_net/data/js/highlight/package.json | @highlightjs/cdn-assets | mocha, lint, lint-languages, build_and_test, build_and_test_browser, build, build-cdn, build-browser, devtool, test, test-markup, test-detect, test-browser, test-parser |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | pygpt-net | true | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/Makefile`
- `docs/build-en.sh`
- `docs/build-pl.sh`
- `docs/install.txt`
- `docs/make.bat`
- `docs/material.qss.template`
- `docs/rebuild-lang.sh`
- `docs/requirements.txt`
- `docs/rst_to_md.sh`
- `docs/source/accessibility.rst`
- `docs/source/attachments.rst`
- `docs/source/conf.py`
- `docs/source/configuration.rst`
- `docs/source/context.rst`
- `docs/source/credits.rst`
- `docs/source/debug.rst`
- `docs/source/extending.rst`
- `docs/source/functions.rst`
- `docs/source/images/nodes.png`
- `docs/source/images/v2_access.png`
- `docs/source/images/v2_agent_settings.png`
- `docs/source/images/v2_agent_toolbox.png`
- `docs/source/images/v2_api_keys.png`
- `docs/source/images/v2_assistant_stores.png`
- `docs/source/images/v2_assistant_stores_upload.png`
- `docs/source/images/v2_azure.png`
- `docs/source/images/v2_calendar.png`
- `docs/source/images/v2_capture1.png`
- `docs/source/images/v2_capture_enable.png`
- `docs/source/images/v2_capture_result.png`
- `docs/source/images/v2_code_execute.png`
- `docs/source/images/v2_context_list.png`
- `docs/source/images/v2_crontab.png`
- `docs/source/images/v2_crontab_tray.png`
- `docs/source/images/v2_custom_cmd.png`
- `docs/source/images/v2_custom_cmd_example.png`
- `docs/source/images/v2_dalle.png`
- `docs/source/images/v2_dalle2.png`
- `docs/source/images/v2_draw.png`
- `docs/source/images/v2_file_input.png`
- `docs/source/images/v2_file_output.png`
- `docs/source/images/v2_idx1.png`
- `docs/source/images/v2_idx2.png`
- `docs/source/images/v2_light.png`
- `docs/source/images/v2_main.png`
- `docs/source/images/v2_main2.png`
- `docs/source/images/v2_mcp.png`
- `docs/source/images/v2_mode_assistant.png`
- ... 30 more

### 에이전트 지침 후보

- `docs/source/images/v2_mcp.png`
- `src/pygpt_net/data/locale/plugin.mcp.en.ini`
- `src/pygpt_net/plugin/mcp/__init__.py`
- `src/pygpt_net/plugin/mcp/config.py`
- `src/pygpt_net/plugin/mcp/plugin.py`
- `src/pygpt_net/plugin/mcp/worker.py`

### 스펙/템플릿/명령/스킬 후보

- `tests/controller/commands/test_commands.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/conftest.py`
- `tests/controller/agent/test_agent.py`
- `tests/controller/agent/test_agent_common.py`
- `tests/controller/agent/test_agent_llama.py`
- `tests/controller/agent/test_experts.py`
- `tests/controller/agent/test_legacy.py`
- `tests/controller/agent/test_legacy_mocks.py`
- `tests/controller/assistant/test_assistant_files.py`
- `tests/controller/assistant/test_assistant_init.py`
- `tests/controller/assistant/test_assistant_threads.py`
- `tests/controller/attachment/test_attachment.py`
- `tests/controller/audio/test_audio.py`
- `tests/controller/calendar/test_calendar.py`
- `tests/controller/calendar/test_note.py`
- `tests/controller/camera/test_camera.py`
- `tests/controller/chat/test_chat_attachment.py`
- `tests/controller/chat/test_chat_audio.py`
- `tests/controller/chat/test_chat_command.py`
- `tests/controller/chat/test_chat_files.py`
- `tests/controller/chat/test_chat_image.py`
- `tests/controller/chat/test_chat_input.py`
- `tests/controller/chat/test_chat_input_more.py`
- `tests/controller/chat/test_chat_output.py`
- `tests/controller/chat/test_chat_render.py`
- `tests/controller/chat/test_chat_response.py`
- `tests/controller/chat/test_chat_text.py`
- `tests/controller/chat/test_chat_vision.py`
- `tests/controller/chat/test_stream.py`
- `tests/controller/commands/test_commands.py`
- `tests/controller/config/field/test_field_checkbox.py`
- `tests/controller/config/field/test_field_combo.py`
- `tests/controller/config/field/test_field_dictionary.py`
- `tests/controller/config/field/test_field_input.py`
- `tests/controller/config/field/test_field_slider.py`
- `tests/controller/config/field/test_field_textarea.py`
- `tests/controller/config/test_config_init.py`
- `tests/controller/config/test_placeholder.py`
- `tests/controller/ctx/test_ctx_init.py`
- `tests/controller/ctx/test_ctx_summarizer.py`
- `tests/controller/debug/test_debug.py`
- `tests/controller/files/test_files.py`
- `tests/controller/idx/test_idx.py`
- `tests/controller/idx/test_idx_common.py`
- `tests/controller/idx/test_idx_settings.py`
- `tests/controller/idx/test_indexer.py`
- `tests/controller/kernel/test_kernel.py`
- `tests/controller/kernel/test_reply.py`
- `tests/controller/kernel/test_stack.py`
- `tests/controller/lang/test_lang.py`
- `tests/controller/launcher/test_launcher.py`
- `tests/controller/layout/test_layout.py`
- `tests/controller/mode/test_mode.py`
- `tests/controller/model/test_model.py`
- `tests/controller/model/test_model_controller.py`
- `tests/controller/model/test_model_editor.py`
- `tests/controller/model/test_model_importer.py`
- `tests/controller/notepad/test_notepad.py`
- `tests/controller/painter/test_capture.py`
- `tests/controller/painter/test_common.py`
- `tests/controller/painter/test_painter.py`
- `tests/controller/plugins/test_plugins_init.py`
- `tests/controller/presets/test_presets_init.py`
- `tests/controller/settings/test_settings.py`
- `tests/controller/theme/test_theme.py`
- `tests/controller/theme/test_theme_common.py`
- `tests/controller/theme/test_theme_markdown.py`
- `tests/controller/theme/test_theme_menu.py`
- `tests/controller/theme/test_theme_nodes.py`
- `tests/controller/ui/test_ui.py`
- `tests/controller/ui/test_ui_mode.py`
- `tests/controller/ui/test_ui_tabs.py`
- `tests/controller/ui/test_ui_vision.py`
- `tests/core/agents/observer/test_observer.py`
- `tests/core/agents/runners/test_agents_loop.py`
- `tests/core/agents/runners/test_base.py`
- `tests/core/agents/runners/test_helpers.py`
- `tests/core/agents/runners/test_llama_assistant.py`
- `tests/core/agents/runners/test_llama_plan.py`
- `tests/core/agents/runners/test_llama_steps.py`
- ... 40 more

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 1418 |
| .js | 802 |
| .css | 196 |
| .ini | 190 |
| .svg | 163 |
| .png | 70 |
| .json | 40 |
| .ttf | 34 |
| .rst | 21 |
| .otf | 20 |
| .woff | 20 |
| .woff2 | 20 |
| .sh | 18 |
| .md | 9 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `src/pygpt_net/ 내부 책임 분리`
- `tests/controller/commands/test_commands.py 스펙/명령 의미`
- `docs/requirements.txt 실행 스크립트와 패키지 경계`
- `poetry.lock 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`
- `src/pygpt_net/data/js/highlight/es/package.json 실행 스크립트와 패키지 경계`

