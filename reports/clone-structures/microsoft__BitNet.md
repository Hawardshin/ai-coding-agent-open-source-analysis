# microsoft/BitNet 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/microsoft__BitNet |
| remote | https://github.com/microsoft/BitNet |
| HEAD | 01eb415 (2026-03-10) Update demo link in README.md |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 71 |
| dirs | 15 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.

## README 신호

- 파일: `README.md`
- 주요 heading: `bitnet.cpp`, `Demo`, `What's New:`, `Acknowledgements`, `Official Models`, `Supported Models`, `Installation`, `Requirements`, `Build from source`, `(Recommended) Create a new conda environment`, `Manually download the model and run with local path`, `Usage`, `Basic usage`, `Run inference with the quantized model`, `Benchmark`, `Run benchmark with the generated model, use -m to specify the model path, -p to specify the prompt processed, -n to specify the number of token to generate`, `Convert from `.safetensors` Checkpoints`, `Prepare the .safetensors model file`

> bitnet.cpp <img src="./assets/header model release.png" alt="BitNet Model on Hugging Face" width="800"/ Try it out via this demo, or build and run it on your own CPU or GPU. bitnet.cpp is the official inference framework for 1 bit LLMs (e.g., BitNet b1.58). It offers a suite of optimized kernels, that support fast and lossless inference of 1.58 bit models on CPU and GPU (NPU support will coming next). The first release of bitnet.cpp is to support inference on CPUs. bitnet.cpp achieves speedups of 1.37x to 5.07x on ARM CPUs, with larger models experiencing greater performance gains. Additionally, it reduces energy consumption by 55.4% to 70.0% , further boosting overall efficiency. On x86 CPUs, speedups range from 2.37x to 6.17x with energy reductions between 71.9% to 82.2% . Furthermore, bitnet.cpp can run a 100B BitNet b1.58 model on a single CPU, achieving speeds comparable to human re

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| .gitmodules | file |
| 3rdparty | dir |
| assets | dir |
| CMakeLists.txt | file |
| CODE_OF_CONDUCT.md | file |
| docs | dir |
| gpu | dir |
| include | dir |
| LICENSE | file |
| media | dir |
| preset_kernels | dir |
| README.md | file |
| requirements.txt | file |
| run_inference_server.py | file |
| run_inference.py | file |
| SECURITY.md | file |
| setup_env.py | file |
| src | dir |
| utils | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| gpu/ | 16 |
| utils/ | 14 |
| preset_kernels/ | 12 |
| (root) | 11 |
| src/ | 9 |
| assets/ | 4 |
| include/ | 2 |
| media/ | 2 |
| docs/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 9 | preferred |
| docs/ | 1 | preferred |
| gpu/ | 16 | large |
| utils/ | 14 | large |
| preset_kernels/ | 12 | large |
| src/assets/ | 5 | large |
| assets/ | 4 | large |
| gpu/bitnet_kernels/ | 4 | large |
| preset_kernels/Llama3-8B-1.58-100B-tokens/ | 4 | large |
| preset_kernels/bitnet_b1_58-3B/ | 4 | large |
| preset_kernels/bitnet_b1_58-large/ | 4 | large |
| include/ | 2 | large |
| media/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `gpu/requirements.txt`
- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/codegen.md`
- `gpu/README.md`
- `src/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 25 |
| .png | 10 |
| .h | 9 |
| .ini | 6 |
| .md | 6 |
| .txt | 4 |
| .sh | 3 |
| .cpp | 2 |
| .cu | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .model | 1 |
| .mp4 | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `gpu/ 내부 책임 분리`
- `utils/ 내부 책임 분리`
- `preset_kernels/ 내부 책임 분리`
- `gpu/requirements.txt 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

