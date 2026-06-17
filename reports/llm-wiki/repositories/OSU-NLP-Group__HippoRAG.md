# OSU-NLP-Group/HippoRAG 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/OSU-NLP-Group__HippoRAG |
| remote | https://github.com/OSU-NLP-Group/HippoRAG |
| HEAD | d437bfb (2025-09-04) Merge pull request #158 from YiboZhao624/main |
| branch | main |
| groups | llm-wiki-100 |
| files | 86 |
| dirs | 15 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.

## README 신호

- 파일: `README.md`
- 주요 heading: `HippoRAG 2 is a powerful memory framework for LLMs that enhances their ability to recognize and utilize connections in new knowledge—mirroring a key function of human long-term memory.`, `Installation`, `Quick Start`, `OpenAI Models`, `Prepare datasets and evaluation`, `Local Deployment (vLLM)`, `Tune gpu-memory-utilization or max_model_len to fit your GPU memory, if OOM occurs`, `Same Indexing, Retrieval and QA as running OpenAI models above`, `Testing`, `OpenAI Test`, `Local Test`, `Tune gpu-memory-utilization or max_model_len to fit your GPU memory, if OOM occurs`, `Reproducing our Experiments`, `Data for Reproducibility`, `Running Indexing & QA`, `Run with OpenAI Model`, `Run OpenAI model`, `Run with vLLM (Llama)`

> <h1 align="center" HippoRAG 2 From RAG to Memory</h1 <p align="center" <img src="https //github.com/OSU NLP Group/HippoRAG/raw/main/images/hippo brain.png" width="55%" style="max width 300px;" </p <img align="center" src="https //colab.research.google.com/assets/colab badge.svg" / <img align="center" src="https //img.shields.io/badge/arXiv 2502.14802 HippoRAG 2 b31b1b" / <img align="center" src="https //img.shields.io/badge/🤗 Dataset HippoRAG 2 yellow" / <img align="center" src="https //img.shields.io/badge/arXiv 2405.14831 HippoRAG 1 b31b1b" / <img align="center" src="https //img.shields.io/badge/GitHub HippoRAG 1 blue" / HippoRAG 2 is a powerful memory framework for LLMs that enhances their ability to recognize and utilize connections in new knowledge—mirroring a key function of human long term memory. Our experiments show that HippoRAG 2 improves associativity (multi hop retrieval) a

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| CONTRIBUTING.md | file |
| demo_azure.py | file |
| demo_bedrock.py | file |
| demo_local.py | file |
| demo_openai.py | file |
| demo.py | file |
| images | dir |
| LICENSE | file |
| main_azure.py | file |
| main_dpr.py | file |
| main.py | file |
| outputs | dir |
| README.md | file |
| reproduce | dir |
| requirements.txt | file |
| setup.py | file |
| src | dir |
| test_transformers.py | file |
| tests_azure.py | file |
| tests_local.py | file |
| tests_openai.py | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 52 |
| (root) | 18 |
| reproduce/ | 9 |
| images/ | 5 |
| outputs/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 52 | preferred |
| src/hipporag/ | 52 | large |
| src/hipporag/prompts/ | 13 | large |
| reproduce/ | 9 | large |
| src/hipporag/embedding_model/ | 9 | large |
| src/hipporag/utils/ | 9 | large |
| reproduce/dataset/ | 8 | large |
| src/hipporag/llm/ | 7 | large |
| images/ | 5 | large |
| src/hipporag/evaluation/ | 5 | large |
| src/hipporag/information_extraction/ | 4 | large |
| outputs/ | 2 | large |
| outputs/musique/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `reproduce/README.md`
- `src/hipporag/evaluation/README.md`
- `src/hipporag/prompts/templates/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `src/hipporag/prompts/templates/README.md`
- `src/hipporag/prompts/templates/__init__.py`
- `src/hipporag/prompts/templates/ircot_hotpotqa.py`
- `src/hipporag/prompts/templates/ircot_musique.py`
- `src/hipporag/prompts/templates/ner.py`
- `src/hipporag/prompts/templates/ner_query.py`
- `src/hipporag/prompts/templates/rag_qa_musique.py`
- `src/hipporag/prompts/templates/triple_extraction.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 62 |
| .json | 11 |
| .md | 5 |
| .png | 5 |
| .gitignore | 1 |
| .txt | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `src/hipporag/ 내부 책임 분리`
- `src/hipporag/prompts/ 내부 책임 분리`
- `reproduce/ 내부 책임 분리`
- `src/hipporag/embedding_model/ 내부 책임 분리`
- `src/hipporag/prompts/templates/README.md 스펙/명령 의미`
- `src/hipporag/prompts/templates/__init__.py 스펙/명령 의미`
- `src/hipporag/prompts/templates/ircot_hotpotqa.py 스펙/명령 의미`
- `src/hipporag/prompts/templates/ircot_musique.py 스펙/명령 의미`
- `src/hipporag/prompts/templates/ner.py 스펙/명령 의미`
- `requirements.txt 실행 스크립트와 패키지 경계`

