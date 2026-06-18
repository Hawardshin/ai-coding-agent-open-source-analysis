# Samsung/ClickAgent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/ClickAgent |
| local path | sources/Samsung__ClickAgent |
| HEAD | 2903d06 |
| stars/forks | 29 / 6 |
| language | Python |
| license |  |
| pushedAt | 2024-10-28T07:41:45Z |
| trendScore / priorityScore | 76 / 203 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 42 | README.md, agent/chat_internvl.py, agent/prompt.py |
| LLM wiki / memory / graph | 23 | agent/config_manager.py, agent/prompt.py, agent/run_api.py |
| Spec / doc-driven workflow | 19 | README.md, agent/prompt.py |
| Local LLM / on-device inference | 4 | README.md |
| Security / compliance | 2 | README.md, apps.json |
| Frontend / developer experience | 1 | agent/config_manager.py |
| Infra / observability | 1 | apps.json |
| Korean language / Korea domain | 1 | api/host_florence.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, sdk-api, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 26 |
| manifests | 2 |
| docs | 1 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | 📺 Demo / ☀️ Introduction / 🚀 Getting Started / 🔧 Installation / 🤖 Android Environment Setup / ⚙️ Configuration / 🔬 Run Experiments / 📐 Main Results Reproduction / 🏃 Run / 📝 To-Do List |
| excerpt | <p align="center" <img src="./assets/title image.png" width="320" height="320"/ </p <div align="center" <h3 Enhancing UI Location Capabilities of Autonomous Agents</h3 </div <div align="center" <hr </div ! ./assets/overview architecture.png 📺 Demo https //github.com/user attachments/assets/356ee6b2 86bb 417a b24c bbd206aafe2a ☀️ Introduction With the growing reliance on digital devices equipped with graphical user interfaces GUIs , such as computers and smartphones, the need for effective automation tools has become increasingly important. Although multimodal large language models MLLMs like GPT 4V excel at tasks such as drafting emails, they struggle with GUI interactions, which limits the |


## 주요 파일

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| agent | 12 |
| api | 7 |
| tests | 2 |
| apps.json | 1 |
| assets | 1 |
| config.ini | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 20 |
| .csv | 1 |
| .ini | 1 |
| .json | 1 |
| .md | 1 |
| .mp4 | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
