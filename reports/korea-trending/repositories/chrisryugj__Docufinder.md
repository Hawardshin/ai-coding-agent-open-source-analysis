# chrisryugj/Docufinder

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/chrisryugj/Docufinder |
| local path | sources/chrisryugj__Docufinder |
| HEAD | a6c0292 |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-16T13:55:59Z |
| trendScore / priorityScore | 74 / 187 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Infra / observability | 423 | src-tauri/Cargo.toml, src-tauri/src/indexer/vector_worker.rs, src-tauri/src/llm/gemini.rs |
| RAG / retrieval | 210 | README.md, CLAUDE.md, src-tauri/Cargo.toml |
| Frontend / developer experience | 120 | README.md, CLAUDE.md, package.json |
| AI agent / tool use | 30 | src-tauri/src/llm/gemini.rs, src-tauri/src/llm/openai.rs, DESIGN.md |
| LLM wiki / memory / graph | 14 | docs/MAC_PORT_PLAN.md, src-tauri/src/search/vector.rs, src-tauri/src/db/pool.rs |
| Spec / doc-driven workflow | 11 | CLAUDE.md, docs/PROD_REVIEW_v2.6.8.md, DESIGN.md |
| Local LLM / on-device inference | 10 | src-tauri/src/llm/openai.rs, src-tauri/src/commands/ai.rs, src-tauri/src/commands/settings.rs |
| Korean language / Korea domain | 9 | src-tauri/Cargo.toml, src-tauri/src/parsers/hwpx/mod.rs, src-tauri/tauri.conf.json |
| Security / compliance | 6 | .github/workflows/ci.yml, scripts/generate-signing-key.cjs, src-tauri/tauri.conf.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 298 |
| manifests | 9 |
| docs | 8 |
| tests | 4 |
| ci/ops | 2 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | 이런 걸 할 수 있습니다 / 문서 내용 검색 / 파일명 검색 / AI 질의응답 (선택) / AI 문서 요약 (선택) / 실시간 동기화 / 지원 파일 형식 / 설치 / 다운로드 — 어느 파일을 받아야 하나? / macOS (Apple Silicon) |
| excerpt | <p align="center" <img src="public/anything.png" alt="Anything" width="80" / </p <h1 align="center" Anything</h1 <p align="center" <b 내 PC 문서를 통째로 검색하는 로컬 검색 엔진</b <br/ 파일명 몰라도, 열어보지 않아도. 문서 안의 <i 내용</i 으로 찾습니다. </p <p align="center" <a href="https //github.com/chrisryugj/Docufinder/releases" <img src="https //img.shields.io/badge/download Windows 0078D4?style=for the badge&logo=windows" alt="Download" / </a </p <p align="center" <a href="https //github.com/chrisryugj/Docufinder/releases" <img src="https //img.shields.io/badge/version 3.0.0 blue.svg" alt="Version" / </a <a href="https //tauri.app" <img src="https //img.shields.io/badge/Tauri 2.10 24C8D8.svg" alt="Tauri 2" / </a <a href="LICE |


## 주요 파일

### Manifests

- README.md
- CLAUDE.md
- package.json
- promo-video/package.json
- promo-video/tsconfig.json
- src-tauri/Cargo.toml
- tsconfig.json
- vite.config.ts
- tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- DESIGN.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 131 |
| src-tauri | 126 |
| scripts | 14 |
| promo-video | 6 |
| public | 3 |
| .github | 2 |
| docs | 2 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| DESIGN.md | 1 |
| index.html | 1 |
| LICENSE | 1 |
| package.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .rs | 105 |
| .tsx | 72 |
| .ts | 57 |
| .json | 14 |
| .md | 8 |
| .ps1 | 7 |
| .css | 6 |
| .bmp | 2 |
| .onnx | 2 |
| .py | 2 |
| .sh | 2 |
| .svg | 2 |
| .txt | 2 |
| .xml | 2 |
| .yml | 2 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
