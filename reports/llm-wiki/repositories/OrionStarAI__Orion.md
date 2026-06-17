# OrionStarAI/Orion 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/OrionStarAI__Orion |
| remote | https://github.com/OrionStarAI/Orion |
| HEAD | 3b23aea (2024-06-03) Fix quantization typo |
| branch | master |
| groups | llm-wiki-100 |
| files | 48 |
| dirs | 14 |
| stack | Python |

## 구조 해석

- 루트 파일과 manifest 중심의 얕은 구조이며, README와 주요 manifest부터 읽어야 한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Table of Contents`, `1. Model Introduction`, `2. Model Download`, `3. Model Benchmarks`, `3.1. Base Model Orion-14B-Base Benchmarks`, `3.1.1. LLM evaluation results on examination and professional knowledge`, `3.1.2. LLM evaluation results on language understanding and common knowledge`, `3.1.3. LLM evaluation results of OpenCompass testsets`, `3.1.4. Comparison of LLM performances on Japanese testsets`, `3.1.5. Comparison of LLM performances on Korean testsets. n = 0 and n = 5 stand for n-shot prompts used in the evaluation`, `3.1.6. Multilingual evaluation`, `3.2. Chat Model Orion-14B-Chat Benchmarks`, `3.2.1. Chat model subjective evaluation of MTBench`, `3.2.2. Chat model subjective evaluation of AlignBench`, `3.3. LongChat Model Orion-14B-LongChat Benchmarks`, `3.3.1. LongChat evaluation of LongBench`, `3.4. Chat RAG Model Benchmarks`, `3.4.1. LLM evaluation results of self-built RAG testsets`

> <! markdownlint disable first line h1 <! markdownlint disable html <div align="center" <img src="./assets/imgs/orion start.PNG" alt="logo" width="50%" / </div <div align="center" <h1 Orion 14B </h1 </div <div align="center" <div align="center" <b 🌐English</b <a href="./README zh.md" 🇨🇳中文</a <a href="./README ja.md" 🇯🇵日本語</a <a href="./README ko.md" 🇰🇷한국어</a </div <h4 align="center" <p 🤗 <a href="https //huggingface.co/OrionStarAI" target=" blank" HuggingFace Mainpage</a 🤖 <a href="https //modelscope.cn/organization/OrionStarAI" target=" blank" ModelScope Mainpage</a 🧰 <a href="https //openxlab.org.cn/models/hot/OrionStarAI" target=" blank" OpenXLab Mainpage</a <br 🎬 <a href="https //huggingface.co/spaces/OrionStarAI/Orion 14B App Demo" target=" blank" HuggingFace Demo</a 🎫 <a href="https //modelscope.cn/studios/OrionStarAI/Orion 14B App Demo/summary" target=" blank" ModelScop

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| assets | dir |
| demo | dir |
| doc | dir |
| gradio_demo | dir |
| LICENSE | file |
| ModelsCommunityLicenseAgreement | file |
| quantization | dir |
| README_ja.md | file |
| README_ko.md | file |
| README_zh.md | file |
| README.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| gradio_demo/ | 24 |
| assets/ | 8 |
| (root) | 7 |
| quantization/ | 5 |
| demo/ | 3 |
| doc/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| gradio_demo/ | 24 | large |
| assets/ | 8 | large |
| assets/imgs/ | 8 | large |
| gradio_demo/plugin_task/ | 6 | large |
| quantization/ | 5 | large |
| demo/ | 3 | large |
| gradio_demo/chat_task/ | 2 | large |
| gradio_demo/common/ | 2 | large |
| gradio_demo/doc_qa_task/ | 2 | large |
| gradio_demo/extract_data_task/ | 2 | large |
| gradio_demo/images/ | 2 | large |
| gradio_demo/qa_generator_task/ | 2 | large |
| doc/ | 1 | large |
| quantization/data/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `gradio_demo/requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `doc/Orion14B_v3.pdf`
- `gradio_demo/README.md`
- `quantization/README.MD`

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
| .py | 24 |
| .png | 8 |
| .md | 7 |
| .gitignore | 1 |
| .jpg | 1 |
| .jsonl | 1 |
| .pdf | 1 |
| .svg | 1 |
| .txt | 1 |
| .xlsx | 1 |
| license | 1 |
| modelscommunitylicenseagreement | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `gradio_demo/ 내부 책임 분리`
- `assets/ 내부 책임 분리`
- `assets/imgs/ 내부 책임 분리`
- `gradio_demo/plugin_task/ 내부 책임 분리`
- `quantization/ 내부 책임 분리`
- `gradio_demo/requirements.txt 실행 스크립트와 패키지 경계`

