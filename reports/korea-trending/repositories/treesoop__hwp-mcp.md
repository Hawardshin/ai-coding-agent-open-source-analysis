# treesoop/hwp-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/treesoop/hwp-mcp |
| local path | sources/treesoop__hwp-mcp |
| HEAD | 087c829 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-05-29T06:35:19Z |
| trendScore / priorityScore | 88 / 156 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 187 | README.md, docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md, package.json |
| Korean language / Korea domain | 31 | README.md, docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md, package.json |
| Frontend / developer experience | 27 | docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md, package.json, docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md |
| Spec / doc-driven workflow | 18 | README.md, docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md |
| LLM wiki / memory / graph | 2 | src/core/hwpx-mutate.ts, src/tools/write.ts |
| Security / compliance | 2 | docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md |
| RAG / retrieval | 1 | docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 45 |
| manifests | 3 |
| docs | 3 |
| tests | 25 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | hwp-mcp |
| headings | hwp-mcp / 어떤 프로젝트인가요? / 설치 / Claude Code / Claude Desktop / Cursor / VS Code (settings JSON) / 설치 확인 / hwp-mcp: npx -y hwp-mcp  - ✓ Connected / 처음 써보기 (60초) / 안 되면? / 도구 목록 |
| excerpt | hwp mcp Claude · Cursor · ChatGPT 등 MCP 호환 AI에서 한글 문서 .hwp / .hwpx 를 읽고 수정하고 새로 만들 수 있게 해주는 서버입니다. ! npm version https //img.shields.io/npm/v/hwp mcp.svg https //www.npmjs.com/package/hwp mcp ! npm downloads https //img.shields.io/npm/dm/hwp mcp.svg https //www.npmjs.com/package/hwp mcp ! Built on rhwp https //img.shields.io/badge/built%20on rhwp blue https //github.com/edwardkim/rhwp ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! GitHub release https //img.shields.io/github/v/release/treesoop/hwp mcp https //github.com/treesoop/hwp mcp/releases/latest hwp mcp 은 한컴오피스 문서를 AI 에이전트가 직접 다루도록 해주는 MCP Model Context Protocol 서버입니다. 읽기뿐 아니라 텍 |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| test | 24 |
| src | 12 |
| docs | 2 |
| .gitignore | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| tsconfig.json | 1 |
| vitest.config.ts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 31 |
| .hwp | 5 |
| .json | 3 |
| .md | 3 |
| [no-ext] | 2 |
| .hwpx | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
