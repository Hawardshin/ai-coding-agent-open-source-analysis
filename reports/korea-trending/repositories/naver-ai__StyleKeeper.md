# naver-ai/StyleKeeper

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/StyleKeeper |
| local path | sources/naver-ai__StyleKeeper |
| HEAD | ac1219c |
| stars/forks | 483 / 34 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2025-12-02T07:30:06Z |
| trendScore / priorityScore | 92 / 224 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 67 | pipelines/controlnet.py, pipelines/inverted_ve_pipeline.py, visualize_attention_src/pipeline_stable_diffusion_xl_attn.py |
| LLM wiki / memory / graph | 15 | pipelines/controlnet.py, pipelines/inverted_ve_pipeline.py, visualize_attention_src/pipeline_stable_diffusion_xl_attn.py |
| Security / compliance | 5 | README.md, pipelines/controlnet.py, schedulers/scheduling_ddim.py |
| Korean language / Korea domain | 4 | README.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 49 |
| manifests | 1 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | 🎨 StyleKeeper: Prevent Content Leakage using Negative Visual Query Guidance (ICCV 2025) / 🎨 VSP: Visual Style Prompting with Swapping Self-Attention (CVPRW AI4CC 2024 Best + Oral paper) / : Text-to-Stylized image with Training-free / ArXiv \| 📖 [StyleKeeper Paper](https://arxiv.org/abs/2510.06827) \| 📖 [VSP Paper](https://arxiv.org/abs/2402.12974) \| ✨ [VSP Project page](https://curryjung.github.io/VisualStylePrompt) / 🔥 To do / 🤗 HuggingFace Demo / ✨ Requirements / ✨ Usage / ✨ Misc / 📚 Citation |
| excerpt | 🎨 StyleKeeper Prevent Content Leakage using Negative Visual Query Guidance ICCV 2025 🎨 VSP Visual Style Prompting with Swapping Self Attention CVPRW AI4CC 2024 Best + Oral paper Text to Stylized image with Training free ArXiv 📖 StyleKeeper Paper https //arxiv.org/abs/2510.06827 📖 VSP Paper https //arxiv.org/abs/2402.12974 ✨ VSP Project page https //curryjung.github.io/VisualStylePrompt Authors &emsp;&emsp; Jaeseok Jeong https //drive.google.com/file/d/19I3s70cfQ45dC JiD2kmkv0MZ8yu4kBZ/view <sup 1,2& 42;</sup , Junho Kim https //github.com/taki0112 <sup 1& 42;</sup , Gayoung Lee https //www.linkedin.com/in/gayoung lee 0824548a/?originalSubdomain=kr <sup 1</sup , Yunjey Choi https //www.li |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| config | 11 |
| pipelines | 11 |
| schedulers | 10 |
| visualize_attention_src | 5 |
| __init__.py | 1 |
| .DS_Store | 1 |
| .gitignore | 1 |
| assets | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| utils.py | 1 |
| vsp_control-depth_script.py | 1 |
| vsp_control-edge_script.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 19 |
| .pyc | 13 |
| .json | 11 |
| [no-ext] | 5 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
