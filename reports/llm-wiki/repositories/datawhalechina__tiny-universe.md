# datawhalechina/tiny-universe 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/datawhalechina__tiny-universe |
| remote | https://github.com/datawhalechina/tiny-universe |
| HEAD | a5ae08d (2026-02-12) Add initial description for TinyRL_LLM |
| branch | main |
| groups | llm-wiki-100 |
| files | 183 |
| dirs | 53 |
| stack | Python |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.

## README 신호

- 파일: `README.md`
- 주요 heading: `主体部分`, `探索部分`, `项目意义`, `项目受众`, `项目亮点`, `*News*`, `项目结构`, `[*TinyGraphRAG*](./content/TinyGraphRAG/)`, `[*TinyDiffusion*](./content/TinyDiffusion/)`, `[*Qwen-Blog*](./content/Qwen-blog/) ([对应讲解视频](https://meeting.tencent.com/v2/cloud-record/share?id=0be29bb2-0648-4aeb-9baa-c9dc91dfc7a6&from=3&is-single=false&record_type=2))`, `[*TinyRAG*](./content/TinyRAG/)([对应讲解视频](https://meeting.tencent.com/v2/cloud-record/share?id=4306b90c-d772-4faa-baeb-1f4e0bf4569f&from=3&is-single=false&record_type=2))`, `[*TinyAgent*](./content/TinyAgent/)(暂无录播，Datawhale视频号搜索“动手搭建一个最小Agent系统”)`, `[*TinyEval*](./content/TinyEval)([对应讲解视频](https://meeting.tencent.com/v2/cloud-record/share?id=8b9cf6ca-add6-477b-affe-5b62e2d8f27e&from=3))`, `[*TinyLLM*](./content/TinyLLM)`, `[*TinyTransformer*](./content/TinyTransformer)`, `致谢`, `关注我们`, `LICENSE`

> <div align=center <img src="./images/tiny universe head2.png" <h1 <strong 大模型白盒子构建指南</strong </h1 </div &emsp;&emsp;本项目是一个从原理出发、以“白盒”为导向、围绕大模型全链路的“手搓”大模型指南，旨在帮助有传统深度学习基础的读者从底层原理出发，“纯手搓”搭建一个清晰、可用的大模型系统，包括大模型本身、RAG 框架、Agent 系统及大模型评估体系。本项目将从基础原理出发，深入剖析每一个技术点并附以完整的代码实现，以细致讲解和代码注释帮助读者独立复现大模型核心部分，并在复现中实现对大模型的深入理解与掌握。 &emsp;&emsp;本项目旨在为广大学习者搭建一个清晰的、可用的、可复现的大模型世界，帮助每一位有兴趣的学习者纯手工独立搭建自己的 Tiny LLM Universe 。 &emsp;&emsp;本项目的主要内容包括： 主体部分 主题部分主要为对经典技术的从零实现，旨在带领学习者深度掌握经典工作的实现细节 1. 手写图像生成模型 Tiny Diffusion 2. 深入剖析大模型原理——Qwen Blog 3. 逐步预训练一个手搓大模型——Tiny Llama3 4. 如何评估你的大模型——Tiny Eval 5. 纯手工搭建 RAG 框架——Tiny RAG 6. 手搓一个最小的 Agent 系统——Tiny Agent 7. 深入理解大模型基础——Tiny Transformer 8. 手搓一个基本的 GraphRAG 系统——Tiny GraphRAG 探索部分 探索部分主要为新颖的 学术作品/生产阶段 的优秀作品进行从零复现，旨在带领学习者深度感知如何从 会做 创新 1. 使用细粒度语义元素指导增强的RAG检索方法 CDDRS (ADVEI25) 项目意义 &emsp;&emsp;随着百模大战的经久不衰，开源或是闭源的大模型正不断刷新着模型能力上限，逼近 AGI 的宏伟未来。随着大模型能力的不断增强，基于大模型进行二次微调、应用开发的门槛也不断

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| content | dir |
| images | dir |
| README.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| content/ | 177 |
| images/ | 5 |
| (root) | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| content/ | 177 | large |
| content/TinyIMGRAG/ | 48 | large |
| content/TinyEval/ | 27 | large |
| content/TinyIMGRAG/packages/ | 23 | large |
| content/TinyEval/Eval/ | 21 | large |
| content/Qwen-blog/ | 19 | large |
| content/TinyGraphRAG/ | 19 | large |
| content/Qwen-blog/img/ | 18 | large |
| content/TinyDiffusion/ | 17 | large |
| content/TinyIMGRAG/datasets/ | 16 | large |
| content/TinyLLM/ | 11 | large |
| content/TinyRAG/ | 11 | large |
| content/TinyGraphRAG/tinygraph/ | 10 | large |
| content/TinyTransformer/ | 10 | large |
| content/TinyAgent/ | 8 | large |
| content/TinyDiffusion/fig/ | 8 | large |
| content/TinyLLM/code/ | 8 | large |
| content/TinyDiffusion/ddpm/ | 7 | large |
| content/TinyGraphRAG/images/ | 6 | large |
| content/TinyTransformer/figures/ | 6 | large |
| content/CDDRS/ | 5 | large |
| images/ | 5 | large |
| content/TinyIMGRAG/IMGRAG/ | 4 | large |
| content/TinyRAG/RAG/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `content/TinyAgent/requirements.txt`
- `content/TinyDiffusion/ddpm/requirements.txt`
- `content/TinyEval/requirements.txt`
- `content/TinyIMGRAG/packages/CLIP-main/requirements.txt`
- `content/TinyIMGRAG/requirements.txt`
- `content/TinyLLM/code/requirements.txt`
- `content/TinyRAG/requirements.txt`
- `content/TinyTransformer/requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `content/CDDRS/readme.md`
- `content/Qwen-blog/readme.md`
- `content/TinyAgent/readme.md`
- `content/TinyDiffusion/readme.md`
- `content/TinyEval/Eval/docs/compass.png`
- `content/TinyEval/readme.md`
- `content/TinyGraphRAG/readme.md`
- `content/TinyIMGRAG/README.md`
- `content/TinyIMGRAG/packages/CLIP-main/README.md`
- `content/TinyLLM/README.md`
- `content/TinyRAG/readme.md`
- `content/TinyTransformer/readme.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `content/TinyIMGRAG/datasets/templates/enhanced_image.png`
- `content/TinyIMGRAG/datasets/templates/imgrag.png`
- `content/TinyIMGRAG/datasets/templates/initial_image.png`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .png | 53 |
| .py | 50 |
| .md | 19 |
| .jpg | 16 |
| .jsonl | 10 |
| .txt | 10 |
| .json | 8 |
| .ipynb | 7 |
| .0 | 1 |
| .example | 1 |
| .gitignore | 1 |
| .gz | 1 |
| .in | 1 |
| .jpeg | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `content/ 내부 책임 분리`
- `content/TinyIMGRAG/ 내부 책임 분리`
- `content/TinyEval/ 내부 책임 분리`
- `content/TinyIMGRAG/packages/ 내부 책임 분리`
- `content/TinyEval/Eval/ 내부 책임 분리`
- `content/TinyIMGRAG/datasets/templates/enhanced_image.png 스펙/명령 의미`
- `content/TinyIMGRAG/datasets/templates/imgrag.png 스펙/명령 의미`
- `content/TinyIMGRAG/datasets/templates/initial_image.png 스펙/명령 의미`
- `content/TinyAgent/requirements.txt 실행 스크립트와 패키지 경계`
- `content/TinyDiffusion/ddpm/requirements.txt 실행 스크립트와 패키지 경계`
- `content/TinyEval/requirements.txt 실행 스크립트와 패키지 경계`
- `content/TinyIMGRAG/packages/CLIP-main/requirements.txt 실행 스크립트와 패키지 경계`
- `content/TinyIMGRAG/requirements.txt 실행 스크립트와 패키지 경계`

