# dangamsoft/cafe-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/dangamsoft/cafe-mcp |
| local path | sources/dangamsoft__cafe-mcp |
| HEAD | 218360f |
| stars/forks | 0 / 0 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-14T13:54:19Z |
| trendScore / priorityScore | 92 / 139 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 71 | README.md, package.json, .github/workflows/publish-mcp.yml |
| Korean language / Korea domain | 14 | ontology/README.md, README.md, package.json |
| Frontend / developer experience | 8 | package.json, index.js, package-lock.json |
| Security / compliance | 7 | ontology/README.md, .github/workflows/publish-mcp.yml |
| RAG / retrieval | 1 | ontology/README.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, frontend-dx, korea-signal, mcp, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 18 |
| manifests | 3 |
| docs | 3 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | cafe-mcp |
| headings | cafe-mcp / What this is / Install (MCP server) / Tools (5, free) / Ontology / CAFE engine performance / Note on East Asian Myeongli traditions / Documentation / Built by / License |
| excerpt | cafe mcp <! mcp name io.github.dangamsoft/cafe mcp CAFE = Cross weighted Analysis of the Five Elements Public OWL ontology for Korean Saju 사주명리학 , with planned MCP integration via the CAFE engine. ! MCP https //img.shields.io/badge/MCP planned blue.svg https //modelcontextprotocol.io ! License https //img.shields.io/badge/License Apache%202.0 green.svg LICENSE ! W3C OWL 2 https //img.shields.io/badge/W3C OWL%202 orange.svg https //www.w3.org/TR/owl2 overview/ ! Ontology https //img.shields.io/badge/Ontology 1%2C711%20triples brightgreen.svg ./ontology/ ! Version https //img.shields.io/badge/Version 0.6.2 green.svg ✅ v0.6.0 — The MCP server is live. A local stdio server exposing 5 free birth |


## 주요 파일

### Manifests

- ontology/README.md
- README.md
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| ontology | 9 |
| .github | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| index.js | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| server.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ttl | 8 |
| .json | 3 |
| .md | 3 |
| [no-ext] | 2 |
| .js | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
