# eremes81/game-design-ai-practice-id

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/eremes81/game-design-ai-practice-id |
| local path | sources/eremes81__game-design-ai-practice-id |
| HEAD | 83f7df8 |
| stars/forks | 0 / 0 |
| language |  |
| license |  |
| pushedAt | 2026-06-17T23:09:30Z |
| trendScore / priorityScore | 74 / 152 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 100 | README.md, manuscript/part20-team-collab/chapter-4-mcp-project-management.md, manuscript/part99-appendix/appendix-E-mcp-server-catalog.md |
| LLM wiki / memory / graph | 39 | README.md, manuscript/part01-foundation/chapter-3-memory-permission-setting.md, manuscript/part20-team-collab/chapter-1-team-memory-operations.md |
| Korean language / Korea domain | 31 | README.md, manuscript/_colophon.md, manuscript/_front-matter.md |
| Spec / doc-driven workflow | 21 | README.md, manuscript/part20-team-collab/chapter-1-team-memory-operations.md, manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md |
| AI agent / tool use | 15 | README.md, manuscript/part23-extension/chapter-2-hermes-agent.md |
| RAG / retrieval | 13 | README.md, manuscript/part99-appendix/appendix-M-embedding-intuition.md, manuscript/part05-narrative-design/chapter-4-dialogue-voice-consistency.md |
| Security / compliance | 10 | manuscript/part23-extension/chapter-2-hermes-agent.md, manuscript/part08-balance-design/chapter-5-pvp-competitive-balance.md |
| Frontend / developer experience | 5 | manuscript/part02-info-architecture/chapter-6-layer-design.md, manuscript/part11-character-pet-mount/chapter-1-naming-and-skill-art-mapping.md |
| Infra / observability | 1 | manuscript/part02-info-architecture/chapter-6-layer-design.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, security-compliance, spec-driven |
| stacks | docs/awesome-list |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 106 |
| manifests | 1 |
| docs | 103 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | AI dan Claude Code untuk Praktik Game Design |
| headings | AI dan Claude Code untuk Praktik Game Design / 🌐 Tentang Edisi Ini / 📖 Mulai Membaca / Edisi Cetak Asli (Korea) / Daftar Isi Lengkap / Bagian 1 · Dasar / Bagian 2 · Arsitektur Informasi / Bagian 3 · Desain Sistem / Bagian 4 · Desain Pertarungan / Bagian 5 · Naratif |
| excerpt | AI dan Claude Code untuk Praktik Game Design Tidak Ada Satu Angka pun yang Dibuat buat — Panduan Lapangan 6 Bulan untuk Claude Code, Prompt, Validasi, dan Memori Produksi ! License CC BY NC SA 4.0 https //img.shields.io/badge/License CC%20BY NC SA%204.0 lightgrey.svg LICENSE ! Korean Original https //img.shields.io/badge/Asli %ED%95%9C%EA%B5%AD%EC%96%B4%20 Korea blue.svg https //github.com/eremes81/game design ai practice ! Print Edition KR https //img.shields.io/badge/BOOKK Edisi%20Cetak%20 Korea orange.svg https //bookk.co.kr/bookStore/6a298be0ff49b1a6034c7703 🌐 Edisi 한국어 — Asli https //github.com/eremes81/game design ai practice · English https //github.com/eremes81/game design ai practi |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| manuscript | 102 |
| .gitignore | 1 |
| assets | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 103 |
| [no-ext] | 2 |
| .svg | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
