# tok-it/detoks

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/tok-it/detoks |
| local path | sources/tok-it__detoks |
| HEAD | a40f243 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-05-22T05:09:38Z |
| trendScore / priorityScore | 71 / 196 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 307 | datasets/rag_embedding_eval/README.md, README.md, video-demo/book-rental-service/README.md |
| Local LLM / on-device inference | 180 | README.md, docs/TRANSLATE_MODEL_BENCHMARK_REPORT.md, tests/ts/unit/core/prompt/config.test.ts |
| Frontend / developer experience | 93 | README.md, video-demo/book-rental-service/README.md, package.json |
| LLM wiki / memory / graph | 84 | package.json, docs/new_detoks_directionality/KURE_V1_RAG_EMBEDDING_MODEL_RATIONALE.md, docs/TRACK_A_CACHE_SAFETY.md |
| Korean language / Korea domain | 74 | docs/new_detoks_directionality/KURE_V1_RAG_EMBEDDING_MODEL_RATIONALE.md, docs/API_SPEC.md, docs/CLI_WRAPPER_PIPELINE.md |
| AI agent / tool use | 33 | docs/README.md, docs/new_detoks_directionality/DAG_SESSION_RAG_FEATURES_AND_MVP.md, docs/new_detoks_directionality/KURE_V1_RAG_EMBEDDING_MODEL_RATIONALE.md |
| Security / compliance | 19 | tests/ts/unit/core/prompt/config.test.ts, docs/new_detoks_directionality/KURE_V1_RAG_EMBEDDING_MODEL_RATIONALE.md, src/core/prompt/config.ts |
| Spec / doc-driven workflow | 14 | docs/new_detoks_directionality/KURE_V1_RAG_EMBEDDING_MODEL_RATIONALE.md, docs/API_SPEC.md, docs/LLAMA_CPP_SERVER_SPEC.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 477 |
| manifests | 7 |
| docs | 54 |
| tests | 130 |
| ci/ops | 3 |
| spec artifacts | 10 |
| agent instruction files | 9 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | detoks |
| headings | detoks / 🔔 업데이트 안내 / 한눈에 보기 / 요구 사항 / 설치 / 1) 로컬 설치 / 2) 전역 설치 / 3) 설치 없이 바로 실행 / 빠른 시작 / Text REPL (기본값) |
| excerpt | detoks <p align="right" <a href="./README.en.md" English</a <a href="./README.ko.md" 한국어</a </p 🔔 업데이트 안내 0.2.0 릴리스는 기존 main 의 0.1.2 대비 로컬 LLM 런타임과 RAG/TUI 흐름이 크게 바뀝니다. 기존 detoks 설정 파일이 있는 사용자는 새 버전 실행 시 CLI에서 업데이트 안내를 1회 확인할 수 있습니다. 주요 변경점 로컬 LLM 실행이 node llama cpp Node.js 네이티브 바인딩 기반으로 변경되었습니다. 별도 llama server 실행이나 Python 런타임 없이 GGUF 모델을 Node.js 프로세스 안에서 로드합니다. RAG 의미 검색, Cross Session Cache, TUI/embedded PTY 흐름이 강화되었습니다. 전역 설치 npm install g @sorlros/detoks@latest 전역 업데이트 npm update g @sorlros/detoks 로컬 설치 npm install @sorlros/detoks@latest 새 기능과 변경점은 GitHub Releases 또는 릴리스 노트에서 함께 안내하는 것을 권장합니다. detoks는 codex , gemini , claude 같은 LLM CLI 앞단에서 동작하는 interactive wrapper CLI 입니다. 입력, 컨텍스트, 세 |


## 주요 파일

### Manifests

- docs/README.md
- datasets/rag_embedding_eval/README.md
- README.md
- video-demo/book-rental-service/README.md
- src/types/README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- tests/ts/unit/core/prompt/compiler.test.ts
- tests/ts/unit/core/prompt/compression.test.ts
- tests/ts/unit/core/prompt/config.test.ts
- src/core/prompt/.gitkeep
- src/core/prompt/compiler.ts
- src/core/prompt/compression.ts
- src/core/prompt/config.ts
- src/core/prompt/kompress-client.ts
- src/core/prompt/node-compressor.ts
- docs/ARCHITECTURE.md


### Agent Instruction Files

- tests/ts/unit/core/prompt/compiler.test.ts
- tests/ts/unit/core/prompt/compression.test.ts
- tests/ts/unit/core/prompt/config.test.ts
- src/core/prompt/.gitkeep
- src/core/prompt/compiler.ts
- src/core/prompt/compression.ts
- src/core/prompt/config.ts
- src/core/prompt/kompress-client.ts
- src/core/prompt/node-compressor.ts


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 179 |
| tests | 130 |
| .trace | 62 |
| docs | 46 |
| scripts | 15 |
| tmp | 15 |
| video-demo | 9 |
| .github | 4 |
| datasets | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| .nvmrc | 1 |
| bin | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 299 |
| .json | 85 |
| .md | 54 |
| [no-ext] | 26 |
| .mjs | 3 |
| .yml | 3 |
| .js | 2 |
| .sh | 2 |
| .cjs | 1 |
| .example | 1 |
| .jsonl | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
