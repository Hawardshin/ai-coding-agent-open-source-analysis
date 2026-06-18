# AD-Styles/MIND-CARE-Conversational-ChatBot

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/AD-Styles/MIND-CARE-Conversational-ChatBot |
| local path | sources/AD-Styles__MIND-CARE-Conversational-ChatBot |
| HEAD | cc80a9e |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:30:25Z |
| trendScore / priorityScore | 74 / 170 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 146 | README.md, release/vision/README.md, mind_care_vision/mind_care_vision/llm_dialogue_node.py |
| Local LLM / on-device inference | 108 | README.md, mind_care_vision/mind_care_vision/llm_dialogue_node.py, HANDOVER.md |
| Spec / doc-driven workflow | 36 | README.md, HANDOVER.md, release/SETUP.md |
| Frontend / developer experience | 29 | release/vision/README.md, urgent_alarm_app/pubspec.yaml, requirements.full.txt |
| LLM wiki / memory / graph | 19 | mind_care_vision/scripts/start_demo.sh, mind_care_vision/scripts/burn_in.sh, mind_care_vision/scripts/healthcheck.sh |
| Infra / observability | 7 | requirements.full.txt |
| AI agent / tool use | 4 | requirements.full.txt |
| Korean language / Korea domain | 4 | mind_care_vision/setup.py, XAVIER_INSTALL_GUIDE.md, mind_care_vision/mind_care_vision/tts_node.py |
| Security / compliance | 3 | release/emergency/mind_care_api/mind_care_api/auth.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python, Java/Kotlin, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 236 |
| manifests | 17 |
| docs | 20 |
| tests | 3 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 🧡 마음돌봄(Mind-Care) 챗봇 팀 프로젝트 |
| headings | 🧡 마음돌봄(Mind-Care) 챗봇 팀 프로젝트 / **음성 대화 · 의료 지식 RAG · 낙상 감지 · 응급 알림** — NVIDIA Jetson AGX Xavier 한 대에서 동작하는 온디바이스 챗봇 / 📌 프로젝트 요약 (Project Overview) / 🎯 핵심 목표 (Motivation) / 📂 프로젝트 구조 (Project Structure) / 🏗️ Architecture & 핵심 구현 (Architecture & Core Implementation) / 1. 시스템 아키텍처 / 2. 언어모델 (LLM) / 3. 의료 지식 검색 (RAG) / 4. 낙상 감지 (Fall Detection) |
| excerpt | 🧡 마음돌봄 Mind Care 챗봇 팀 프로젝트 음성 대화 · 의료 지식 RAG · 낙상 감지 · 응급 알림 — NVIDIA Jetson AGX Xavier 한 대에서 동작하는 온디바이스 챗봇 ! Python https //img.shields.io/badge/Python 3776AB?style=for the badge&logo=python&logoColor=white ! ROS 2 https //img.shields.io/badge/ROS 2 22314E?style=for the badge&logo=ros&logoColor=white ! NVIDIA Jetson https //img.shields.io/badge/Jetson AGX Xavier 76B900?style=for the badge&logo=nvidia&logoColor=white ! llama.cpp https //img.shields.io/badge/llama.cpp 000000?style=for the badge ! ChromaDB https //img.shields.io/badge/ChromaDB FFB000?style=for the badge ! YOLOv8 https //img.shields.io/badge/YOLOv8 pose 111F68?style=for the badge&logo=ultralytics&logoColor=white ! FastAPI http |


## 주요 파일

### Manifests

- README.md
- release/emergency/mind_care_api/demo_client/README.md
- urgent_alarm_app/README.md
- release/vision/README.md
- urgent_alarm_app/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md
- release/emergency/requirements.txt
- release/vision/mind_care_perception/src/parser_yolov8_face/Makefile
- release/vision/mind_care_perception/src/parser_yolov8_pose/Makefile
- urgent_alarm_app/android/app/build.gradle.kts
- urgent_alarm_app/android/build.gradle.kts
- mind_care_vision/package.xml
- requirements.core.txt
- requirements.full.txt
- requirements.xavier.txt
- release/emergency/mind_care_api/package.xml
- release/emergency/mind_care_emergency/package.xml
- release/vision/mind_care_perception/package.xml


### Spec / Docs / Prompt Artifacts

- release/emergency/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| release | 95 |
| urgent_alarm_app | 93 |
| mind_care_vision | 33 |
| .gitignore | 1 |
| HANDOVER.md | 1 |
| LICENSE | 1 |
| rag_crawling.ipynb | 1 |
| README.md | 1 |
| requirements.core.txt | 1 |
| requirements.full.txt | 1 |
| requirements.xavier.txt | 1 |
| SETUP.md | 1 |
| TRANSFER_TO_XAVIER.md | 1 |
| XAVIER_DEPLOY_CHECKLIST.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 67 |
| .xml | 23 |
| .md | 20 |
| .txt | 16 |
| [no-ext] | 15 |
| .sh | 14 |
| .h | 8 |
| .xcconfig | 8 |
| .plist | 7 |
| .swift | 7 |
| .cpp | 6 |
| .yaml | 6 |
| .cc | 4 |
| .cfg | 4 |
| .json | 4 |
| .ipynb | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
