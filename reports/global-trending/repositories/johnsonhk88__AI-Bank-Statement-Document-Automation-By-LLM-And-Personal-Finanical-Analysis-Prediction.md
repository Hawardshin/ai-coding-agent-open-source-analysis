# johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction |
| local path | sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction |
| HEAD | 832f4f0 |
| stars/forks | 584 / 115 |
| language | Jupyter Notebook |
| license |  |
| pushedAt | 2026-06-17T16:28:49Z |
| trendScore / priorityScore | 160 / 357 |


## Interpretation

- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 43 | README.md, backend/requirements.txt, requirements.txt |
| AI agent / orchestration | 28 | README.md, backend/requirements.txt, requirements.txt |
| Observability / evaluation | 26 | README.md, backend/requirements.txt, requirements.txt |
| Data / ML platform | 22 | README.md, frontend/streamlit_app/local-multimodel-version/app.py |
| Local LLM / inference | 11 | README.md, backend/requirements.txt, requirements.txt |
| Security / supply chain | 7 | backend/app/skills/pii-handling/SKILL.md |
| Frontend / app framework | 6 | README.md |
| Cloud native / infrastructure | 3 | README.md |
| Database / data infrastructure | 1 | backend/app/skills/pii-handling/SKILL.md |
| Developer tools / DX | 1 | notebooks/deepeval_framework.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, security, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 37 |
| manifests | 3 |
| docs | 5 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🏦 AI Bank Statement Document Automation with LLM & Personal Financial Analysis | 🏦 AI Bank Statement Document Automation with LLM & Personal Financial Analysis / ✨ Key Features / 🛠 Technology Stack / 📁 Repository Structure / 🚀 Quick Start / 1. Clone & Setup / Setup virtual environment and install dependencies / Install Tesseract OCR (Ubuntu/Debian) / Create a .env file and add your GOOGLE_API_KEY (for Gemini). / 2. Run the Application | 🏦 AI Bank Statement Document Automation with LLM & Personal Financial Analysis ! Python https //img.shields.io/badge/Python 3.10+ 3776AB?style=for the badge&logo=python&logoColor=white https //www.python.org ! License https //img.shields.io/badge/License Apache 2.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! AG2 https //img.shields.io/badge/Agent Framework AG2 green https //github.com/ag2ai/ag2 Automated extraction, structuring, RAG powered querying, and AI agent financial analysis of bank statement PDFs. This project converts unstructured bank statement PDFs into structured data using computer vision YOLO , OCR, and Large Language Models. It supports natural language queries and |


## Key Files

### Manifests

- README.md
- backend/requirements.txt
- requirements.txt


### Spec / Docs / Prompt Artifacts

- backend/requirements.txt
- requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| data | 8 |
| backend | 6 |
| notebooks | 6 |
| frontend | 5 |
| scripts | 5 |
| yolo-base-layout-analysis | 2 |
| .env_test | 1 |
| .gitignore | 1 |
| LICENSE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ipynb | 7 |
| .sh | 7 |
| .docx | 5 |
| .md | 5 |
| .py | 4 |
| [no-ext] | 4 |
| .xlsx | 3 |
| .txt | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
