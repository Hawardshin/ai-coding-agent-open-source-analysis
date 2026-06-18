# line/liff-inspector

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/liff-inspector |
| local path | sources/line__liff-inspector |
| HEAD | 4bc92a2 |
| stars/forks | 75 / 5 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2025-11-17T02:53:26Z |
| trendScore / priorityScore | 73 / 184 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 32 | packages/headless-inspector-core/README.md, packages/liff-inspector/README.md, README.md |
| Security / compliance | 9 | packages/liff-inspector/README.md, README.md, .github/workflows/release.yml |
| Korean language / Korea domain | 4 | packages/liff-inspector/README.md, README.md, packages/liff-inspector/README_ja.md |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, llm-wiki-memory, sdk-api, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 93 |
| manifests | 15 |
| docs | 9 |
| tests | 18 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | TOC / Features / Getting Started / 1. Start LIFF Inspector Server / 2. Install LIFF Inspector Plugin to your LIFF App / 3. Connect LIFF App and LIFF Inspector Server / 4. Open Chrome DevTools / Important: LIFF Inspector Server need to be served over SSL/TLS / Serve local server over HTTPS via 1 or 2 / Set HTTPS URL to LIFF Inspector Plugin via 1 or 2 |
| excerpt | ! Check code health https //github.com/line/liff inspector/actions/workflows/code check.yml/badge.svg https //github.com/line/liff inspector/actions/workflows/code check.yml <div align="center" <h1 LIFF Inspector 🔬</h1 <strong The universal DevTools for LIFF WebView browser</strong </div <br LIFF Inspector is the official DevTools for LIFF LINE Front end Framework that is integrated with the latest Chrome DevTools and built on top of the Chrome DevTools Protocol. LIFF browser Chrome DevTools ! image https //user images.githubusercontent.com/22386678/164411108 526320d6 75f3 42a7 93a1 737c3deb23ff.png ! image https //user images.githubusercontent.com/22386678/164409862 ed739dec fe6a 4ecc 98af |


## 주요 파일

### Manifests

- packages/headless-inspector-cdp/README.md
- packages/headless-inspector-core/README.md
- packages/headless-inspector/README.md
- packages/liff-inspector/README.md
- README.md
- package.json
- packages/headless-inspector-cdp/package.json
- packages/headless-inspector-cdp/tsconfig.json
- packages/headless-inspector-core/package.json
- packages/headless-inspector-core/tsconfig.json
- packages/headless-inspector/package.json
- packages/headless-inspector/tsconfig.json
- packages/liff-inspector/package.json
- packages/liff-inspector/tsconfig.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 71 |
| .github | 5 |
| scripts | 2 |
| .editorconfig | 1 |
| .eslintrc.json | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierignore | 1 |
| .prettierrc.json | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| jest.config.js | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 57 |
| .json | 13 |
| .md | 9 |
| [no-ext] | 6 |
| .js | 4 |
| .yml | 4 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
