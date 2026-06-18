# naver-ai/chacha-chatbot

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/chacha-chatbot |
| local path | sources/naver-ai__chacha-chatbot |
| HEAD | 52c88f3 |
| stars/forks | 42 / 5 |
| language | Python |
| license | MIT |
| pushedAt | 2025-12-29T04:54:36Z |
| trendScore / priorityScore | 88 / 197 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 98 | README.md, frontend/package.json, frontend/tsconfig.json |
| Korean language / Korea domain | 23 | README.md, app/common.py, app/response_generator.py |
| LLM wiki / memory / graph | 8 | app/phases/explore.py, frontend/src/script/app/chat/pages/ChatPage.tsx, frontend/src/script/app/chat/pages/ChatShare.tsx |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 67 |
| manifests | 4 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ChaCha (CHAtbot for CHildren's emotion Awareness): LLM-Driven Chatbot for Enhancing Emotional Awareness in Children |
| headings | ChaCha (CHAtbot for CHildren's emotion Awareness): LLM-Driven Chatbot for Enhancing Emotional Awareness in Children / Project Website / System Requirements / How To Run / Installation / Testing Chatbot on Command Line / Testing Chatbot on Web / Analysis of Chat Logs / Chat Session Reviewing on Web / Log Files |
| excerpt | ! image https //img.shields.io/badge/language Python3%7CTypeScript blue ! image https //img.shields.io/badge/framework FastAPI%7CReact orange ! image https //img.shields.io/github/license/naver ai/chacha chatbot ChaCha CHAtbot for CHildren's emotion Awareness LLM Driven Chatbot for Enhancing Emotional Awareness in Children ! image screens.jpg This repository is a source code of the chatbot implementation presented in the ACM CHI 2024 paper, titled " ChaCha Leveraging Large Language Models to Prompt Children to Share Their Emotions about Personal Events ." Woosuk Seo, Chanmo Yang, and Young Ho Kim. 2024.<br/ ChaCha Leveraging Large Language Models to Prompt Children to Share Their Emotions ab |


## 주요 파일

### Manifests

- README.md
- frontend/package.json
- frontend/tsconfig.json
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| frontend | 29 |
| app | 12 |
| examples | 6 |
| backend | 4 |
| .gitignore | 1 |
| auto_chat.py | 1 |
| build-frontend.sh | 1 |
| chat.py | 1 |
| gunicorn.config.py | 1 |
| LICENSE | 1 |
| logs | 1 |
| main.py | 1 |
| pm2.config.js | 1 |
| pyproject.toml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 20 |
| .tsx | 12 |
| .ts | 8 |
| [no-ext] | 7 |
| .txt | 6 |
| .json | 4 |
| .sh | 4 |
| .js | 2 |
| .css | 1 |
| .html | 1 |
| .md | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
