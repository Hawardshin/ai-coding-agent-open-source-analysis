# johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI Bank Statement Document Automation By LLM model and Personal Finanical Analysis

## 요약

- 조사 단위: `sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 42 files, 20 directories, depth score 69, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt, backend/requirements.txt이고, 의존성 단서는 openai, langchain, langgraph, express, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 584 |
| Forks | 115 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) |
| Existing report | [reports/global-trending/repositories/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md](../../../global-trending/repositories/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 42 / 20 |
| Max observed depth | 5 |
| Top directories | backend, data, frontend, notebooks, scripts, yolo-base-layout-analysis |
| Top extensions | .ipynb: 7, .sh: 7, .docx: 5, .md: 5, .pdf: 4, .py: 4, (none): 4, .xlsx: 3, .txt: 2, .jpg: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| backend | top-level component | 1 |
| data | top-level component | 1 |
| frontend | top-level component | 1 |
| notebooks | top-level component | 1 |
| scripts | top-level component | 1 |
| yolo-base-layout-analysis | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph |
| vectorStores | chroma, faiss |
| modelRuntime | transformers, vllm, ollama, llama |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/requirements.txt) | config signal |
| config | [backend/requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/requirements.txt) | config signal |
| eval | [yolo-base-layout-analysis/test-document/Attention.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/Attention.pdf) | eval support |
| eval | [yolo-base-layout-analysis/test-document/yolo.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/yolo.pdf) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 5 | [backend/app/skills/crewai_skills_loader.py](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/crewai_skills_loader.py)<br>[backend/app/skills/rag-query-handling/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/rag-query-handling/SKILL.md)<br>[backend/app/skills/pii-handling/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/pii-handling/SKILL.md)<br>[backend/app/skills/financial-analysis/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/financial-analysis/SKILL.md)<br>[backend/app/skills/bank-statement-parsing/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/bank-statement-parsing/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 3 | [notebooks/multimodal-rag-test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/multimodal-rag-test.ipynb)<br>[notebooks/RAG_algorthm_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/RAG_algorthm_test.ipynb)<br>[backend/app/skills/rag-query-handling/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/rag-query-handling/SKILL.md) |
| spec | 3 | [requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/requirements.txt)<br>[scripts/install-requirement.sh](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/scripts/install-requirement.sh)<br>[backend/requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/requirements.txt) |
| eval | 5 | [yolo-base-layout-analysis/test-document/Attention.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/Attention.pdf)<br>[yolo-base-layout-analysis/test-document/yolo.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/yolo.pdf)<br>[yolo-base-layout-analysis/dev/yolo_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/dev/yolo_test.ipynb)<br>[notebooks/multimodal-rag-test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/multimodal-rag-test.ipynb)<br>[notebooks/RAG_algorthm_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/RAG_algorthm_test.ipynb) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/README.md) |
| config | 2 | [requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/requirements.txt)<br>[backend/requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [yolo-base-layout-analysis/test-document/Attention.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/Attention.pdf)<br>[yolo-base-layout-analysis/test-document/yolo.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/yolo.pdf)<br>[yolo-base-layout-analysis/dev/yolo_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/dev/yolo_test.ipynb)<br>[notebooks/multimodal-rag-test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/multimodal-rag-test.ipynb)<br>[notebooks/RAG_algorthm_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/RAG_algorthm_test.ipynb) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `requirements.txt`, `backend/requirements.txt`, `yolo-base-layout-analysis/test-document/Attention.pdf`.
2. Map agent/tool runtime through: `backend/app/skills/crewai_skills_loader.py`, `backend/app/skills/rag-query-handling/SKILL.md`, `backend/app/skills/pii-handling/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `notebooks/multimodal-rag-test.ipynb`, `notebooks/RAG_algorthm_test.ipynb`, `backend/app/skills/rag-query-handling/SKILL.md`.
4. Verify behavior through test/eval files: `yolo-base-layout-analysis/test-document/Attention.pdf`, `yolo-base-layout-analysis/test-document/yolo.pdf`, `yolo-base-layout-analysis/dev/yolo_test.ipynb`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 AI Bank Statement Document Automation By LLM model and Personal Finanical Analysis. 핵심 구조 신호는 Jupyter Notebook, requirements.txt, README.md, LICENSE, openai, langchain이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
