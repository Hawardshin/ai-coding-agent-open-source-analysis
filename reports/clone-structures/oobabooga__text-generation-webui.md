# oobabooga/text-generation-webui 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/oobabooga__text-generation-webui |
| remote | https://github.com/oobabooga/text-generation-webui |
| HEAD | ed888c7 (2026-05-31) Update llama.cpp |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 358 |
| dirs | 64 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `[Warp, built for coding with multiple AI agents](https://go.warp.dev/text-generation-webui)`, `TextGen`, `Get started in 1 minute`, `Features`, `Chat & generation`, `Backends & API`, `Training & image generation`, `Privacy & interface`, `Downloading models`, `Installation`, `Manual portable install with venv`, `Clone repository`, `Create virtual environment`, `Activate virtual environment`, `On Windows:`, `On macOS/Linux:`, `Install dependencies (choose appropriate file under requirements/portable for your hardware)`, `Launch server (basic command)`

> <div align="center" markdown="1" <sup Special thanks to </sup <br <br <a href="https //go.warp.dev/text generation webui" <img alt="Warp sponsorship" width="400" src="https //raw.githubusercontent.com/warpdotdev/brand assets/refs/heads/main/Github/Sponsor/Warp Github LG 02.png" </a Warp, built for coding with multiple AI agents Available for macOS, Linux, & Windows<br </div <hr TextGen A desktop app for local LLMs. Open source, no telemetry. Text, vision, tool calling, web search. UI + API. Get started in 1 minute Download, unzip, double click textgen . A window opens. https //github.com/oobabooga/textgen/releases Portable builds for Linux, Windows, and macOS with CUDA, Vulkan, ROCm, and CPU only options. All dependencies included. Compatible with GGUF (llama.cpp) models. For additional backends (ExLlamaV3, Transformers), training, image generation, and extensions, see Installation. Feat

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| cmd_linux.sh | file |
| cmd_macos.sh | file |
| cmd_windows.bat | file |
| Colab-TextGen-GPU.ipynb | file |
| css | dir |
| desktop | dir |
| docker | dir |
| docs | dir |
| download-model.py | file |
| extensions | dir |
| js | dir |
| LICENSE | file |
| modules | dir |
| one_click.py | file |
| README.md | file |
| requirements | dir |
| server.py | file |
| setup.cfg | file |
| start_linux.sh | file |
| start_macos.sh | file |
| start_windows.bat | file |
| update_wizard_linux.sh | file |
| update_wizard_macos.sh | file |
| update_wizard_windows.bat | file |
| user_data | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| css/ | 113 |
| modules/ | 60 |
| extensions/ | 59 |
| user_data/ | 36 |
| (root) | 17 |
| docs/ | 17 |
| requirements/ | 17 |
| js/ | 12 |
| .github/ | 11 |
| docker/ | 11 |
| desktop/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 17 | preferred |
| extensions/ | 59 | preferred |
| css/ | 113 | large |
| css/katex/ | 61 | large |
| css/katex/fonts/ | 60 | large |
| modules/ | 60 | large |
| css/NotoSans/ | 37 | large |
| user_data/ | 36 | large |
| extensions/superboogav2/ | 20 | large |
| requirements/ | 17 | large |
| modules/api/ | 14 | large |
| js/ | 12 | large |
| .github/ | 11 | large |
| docker/ | 11 | large |
| requirements/portable/ | 11 | large |
| extensions/coqui_tts/ | 8 | large |
| extensions/silero_tts/ | 8 | large |
| user_data/grammars/ | 8 | large |
| .github/workflows/ | 7 | large |
| requirements/full/ | 6 | large |
| user_data/instruction-templates/ | 6 | large |
| desktop/ | 5 | large |
| user_data/tools/ | 5 | large |
| extensions/superbooga/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `desktop/package.json`
- `docker/TensorRT-LLM/Dockerfile`
- `docker/amd/Dockerfile`
- `docker/amd/docker-compose.yml`
- `docker/cpu/Dockerfile`
- `docker/cpu/docker-compose.yml`
- `docker/intel/Dockerfile`
- `docker/intel/docker-compose.yml`
- `docker/nvidia/Dockerfile`
- `docker/nvidia/docker-compose.yml`
- `extensions/coqui_tts/requirements.txt`
- `extensions/google_translate/requirements.txt`
- `extensions/ngrok/requirements.txt`
- `extensions/silero_tts/requirements.txt`
- `extensions/superbooga/requirements.txt`
- `extensions/superboogav2/requirements.txt`
- `extensions/whisper_stt/requirements.txt`
- `requirements/full/requirements.txt`
- `requirements/portable/requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| desktop/package.json | textgen |  |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/01 - Chat Tab.md`
- `docs/02 - Default and Notebook Tabs.md`
- `docs/03 - Parameters Tab.md`
- `docs/04 - Model Tab.md`
- `docs/05 - Training Tab.md`
- `docs/06 - Session Tab.md`
- `docs/07 - Extensions.md`
- `docs/08 - Additional Tips.md`
- `docs/09 - Docker.md`
- `docs/11 - AMD Setup.md`
- `docs/12 - OpenAI API.md`
- `docs/13 - Keyboard Shortcuts.md`
- `docs/Image Generation Tutorial.md`
- `docs/Multimodal Tutorial.md`
- `docs/README.md`
- `docs/Tool Calling Tutorial.md`
- `docs/What Works.md`
- `extensions/ngrok/README.md`
- `extensions/sd_api_pictures/README.MD`
- `extensions/superboogav2/README.md`
- `extensions/whisper_stt/readme.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/build-everything-tgw.yml`
- `.github/workflows/build-portable-release-cuda.yml`
- `.github/workflows/build-portable-release-ik-cuda.yml`
- `.github/workflows/build-portable-release-ik.yml`
- `.github/workflows/build-portable-release-rocm.yml`
- `.github/workflows/build-portable-release-vulkan.yml`
- `.github/workflows/build-portable-release.yml`
- `docker/TensorRT-LLM/Dockerfile`
- `docker/amd/Dockerfile`
- `docker/amd/docker-compose.yml`
- `docker/cpu/Dockerfile`
- `docker/cpu/docker-compose.yml`
- `docker/intel/Dockerfile`
- `docker/intel/docker-compose.yml`
- `docker/nvidia/Dockerfile`
- `docker/nvidia/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 97 |
| .woff | 38 |
| .woff2 | 38 |
| .txt | 35 |
| .md | 24 |
| .ttf | 22 |
| .css | 17 |
| .js | 16 |
| .yml | 13 |
| .yaml | 12 |
| .gbnf | 8 |
| .json | 8 |
| .sh | 7 |
| dockerfile | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `extensions/ 내부 책임 분리`
- `css/ 내부 책임 분리`
- `css/katex/ 내부 책임 분리`
- `css/katex/fonts/ 내부 책임 분리`
- `desktop/package.json 실행 스크립트와 패키지 경계`
- `docker/TensorRT-LLM/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/amd/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/amd/docker-compose.yml 실행 스크립트와 패키지 경계`
- `docker/cpu/Dockerfile 실행 스크립트와 패키지 경계`

