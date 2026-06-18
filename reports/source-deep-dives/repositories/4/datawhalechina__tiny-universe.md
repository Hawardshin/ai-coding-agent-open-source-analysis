# datawhalechina/tiny-universe 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

《大模型白盒子构建指南》：一个全手搓的Tiny-Universe

## 요약

- 조사 단위: `sources/datawhalechina__tiny-universe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 183 files, 53 directories, depth score 94, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=content/TinyRAG/RAG/Embeddings.py, content/TinyRAG/RAG/LLM.py, content/TinyRAG/RAG/utils.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | datawhalechina/tiny-universe |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 4916 |
| Forks | 467 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/datawhalechina__tiny-universe](../../../../sources/datawhalechina__tiny-universe) |
| 기존 보고서 | [reports/llm-wiki/repositories/datawhalechina__tiny-universe.md](../../../llm-wiki/repositories/datawhalechina__tiny-universe.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 183 / 53 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | content, images |
| 상위 확장자 | .png: 53, .py: 50, .md: 19, .jpg: 16, .jsonl: 10, .txt: 10, .json: 8, .ipynb: 7, (none): 3, .0: 1, .example: 1, .gz: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| content | top-level component | 1 |
| images | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [content/TinyRAG/RAG/Embeddings.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/Embeddings.py) | retrieval signal |
| retrieval | [content/TinyRAG/RAG/LLM.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/LLM.py) | retrieval signal |
| retrieval | [content/TinyRAG/RAG/utils.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/utils.py) | retrieval signal |
| retrieval | [content/TinyRAG/RAG/VectorBase.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/VectorBase.py) | retrieval signal |
| entrypoints | [content/TinyIMGRAG/main.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/datawhalechina__tiny-universe/README.md) | docs signal |
| docs | [content/TinyTransformer/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/readme.md) | docs signal |
| docs | [content/TinyRAG/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/readme.md) | docs signal |
| docs | [content/TinyLLM/README.md](../../../../sources/datawhalechina__tiny-universe/content/TinyLLM/README.md) | docs signal |
| eval | [content/TinyTransformer/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/test.ipynb) | eval signal |
| eval | [content/TinyRAG/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/test.ipynb) | eval signal |
| eval | [content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [content/TinyIMGRAG/main.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/main.py) |
| agentRuntime | 5 | [content/TinyGraphRAG/images/workflow.png](../../../../sources/datawhalechina__tiny-universe/content/TinyGraphRAG/images/workflow.png)<br>[content/TinyAgent/agent_demo.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/agent_demo.ipynb)<br>[content/TinyAgent/tinyAgent/Agent.py](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/tinyAgent/Agent.py)<br>[content/TinyAgent/tinyAgent/tool.py](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/tinyAgent/tool.py)<br>[content/TinyAgent/images/Agent.png](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/images/Agent.png) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 11 | [content/TinyRAG/RAG/Embeddings.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/Embeddings.py)<br>[content/TinyRAG/RAG/LLM.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/LLM.py)<br>[content/TinyRAG/RAG/utils.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/utils.py)<br>[content/TinyRAG/RAG/VectorBase.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/VectorBase.py)<br>[content/TinyRAG/images/RAG.png](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/images/RAG.png)<br>[content/TinyRAG/images/Retrieval-Augmented Generation（RAG-Learning）.png](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/images/Retrieval-Augmented Generation（RAG-Learning）.png)<br>[content/TinyGraphRAG/tinygraph/graph.py](../../../../sources/datawhalechina__tiny-universe/content/TinyGraphRAG/tinygraph/graph.py)<br>[content/TinyGraphRAG/tinygraph/embedding/__init__.py](../../../../sources/datawhalechina__tiny-universe/content/TinyGraphRAG/tinygraph/embedding/__init__.py) |
| spec | 9 | [content/TinyTransformer/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/requirements.txt)<br>[content/TinyTransformer/figures/transformer_architecture.png](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/figures/transformer_architecture.png)<br>[content/TinyRAG/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/requirements.txt)<br>[content/TinyLLM/code/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyLLM/code/requirements.txt)<br>[content/TinyIMGRAG/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/requirements.txt)<br>[content/TinyIMGRAG/packages/CLIP-main/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/requirements.txt)<br>[content/TinyEval/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/requirements.txt)<br>[content/TinyDiffusion/ddpm/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyDiffusion/ddpm/requirements.txt) |
| eval | 26 | [content/TinyTransformer/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/test.ipynb)<br>[content/TinyRAG/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/test.ipynb)<br>[content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py)<br>[content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml)<br>[content/TinyEval/eval.py](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/eval.py)<br>[content/TinyEval/Eval/metrics.py](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/Eval/metrics.py)<br>[content/TinyEval/Eval/pred/Qwen2/GAOKAO_math.jsonl](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/Eval/pred/Qwen2/GAOKAO_math.jsonl)<br>[content/TinyEval/Eval/pred/Qwen2/result.json](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/Eval/pred/Qwen2/result.json) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/datawhalechina__tiny-universe/README.md)<br>[content/TinyTransformer/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/readme.md)<br>[content/TinyRAG/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/readme.md)<br>[content/TinyLLM/README.md](../../../../sources/datawhalechina__tiny-universe/content/TinyLLM/README.md)<br>[content/TinyIMGRAG/README.md](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/README.md)<br>[content/TinyIMGRAG/packages/CLIP-main/README.md](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/README.md)<br>[content/TinyGraphRAG/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyGraphRAG/readme.md)<br>[content/TinyEval/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/readme.md) |
| config | 8 | [content/TinyTransformer/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/requirements.txt)<br>[content/TinyRAG/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/requirements.txt)<br>[content/TinyLLM/code/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyLLM/code/requirements.txt)<br>[content/TinyIMGRAG/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/requirements.txt)<br>[content/TinyIMGRAG/packages/CLIP-main/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/requirements.txt)<br>[content/TinyEval/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/requirements.txt)<br>[content/TinyDiffusion/ddpm/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyDiffusion/ddpm/requirements.txt)<br>[content/TinyAgent/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 26 | [content/TinyTransformer/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/test.ipynb)<br>[content/TinyRAG/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/test.ipynb)<br>[content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py)<br>[content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml)<br>[content/TinyEval/eval.py](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/eval.py)<br>[content/TinyEval/Eval/metrics.py](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/Eval/metrics.py) |
| CI workflow | 1 | [content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `content/TinyRAG/RAG/Embeddings.py`, `content/TinyRAG/RAG/LLM.py`, `content/TinyRAG/RAG/utils.py`.
2. entrypoint를 따라 실행 흐름 확인: `content/TinyIMGRAG/main.py`.
3. agent/tool runtime 매핑: `content/TinyGraphRAG/images/workflow.png`, `content/TinyAgent/agent_demo.ipynb`, `content/TinyAgent/tinyAgent/Agent.py`.
4. retrieval/memory/indexing 확인: `content/TinyRAG/RAG/Embeddings.py`, `content/TinyRAG/RAG/LLM.py`, `content/TinyRAG/RAG/utils.py`.
5. test/eval 파일로 동작 검증: `content/TinyTransformer/test.ipynb`, `content/TinyRAG/test.ipynb`, `content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 《大模型白盒子构建指南》：一个全手搓的Tiny Universe. 핵심 구조 신호는 Jupyter Notebook, README.md, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
