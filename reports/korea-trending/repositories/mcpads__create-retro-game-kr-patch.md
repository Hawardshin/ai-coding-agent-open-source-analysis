# mcpads/create-retro-game-kr-patch

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/mcpads/create-retro-game-kr-patch |
| local path | sources/mcpads__create-retro-game-kr-patch |
| HEAD | 74ebdf4 |
| stars/forks | 0 / 0 |
| language |  |
| license |  |
| pushedAt | 2026-06-17T02:30:52Z |
| trendScore / priorityScore | 71 / 112 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 9 | README.md, .claude-plugin/plugin.json, skills/create-kr-patch/references/platforms/megadrive.md |
| MCP / tool protocol | 9 | skills/create-kr-patch/references/platforms/gg.md, skills/create-kr-patch/references/strategy/build-and-verify.md, skills/create-kr-patch/references/strategy/debugging.md |
| Spec / doc-driven workflow | 5 | skills/create-kr-patch/references/strategy/project-conventions.md |
| Frontend / developer experience | 4 | skills/create-kr-patch/references/platforms/gg.md, skills/create-kr-patch/references/platforms/pc98.md, skills/create-kr-patch/references/strategy/project-conventions.md |
| AI agent / tool use | 3 | skills/create-kr-patch/references/strategy/project-conventions.md |
| LLM wiki / memory / graph | 1 | skills/create-kr-patch/references/platforms/gg.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, mcp, spec-driven |
| stacks | docs/awesome-list |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 27 |
| manifests | 1 |
| docs | 23 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | create-kr-patch |
| headings | create-kr-patch / 지원 플랫폼 / 설치 (Claude Code) / 구조 / 핵심 원칙 / 기여 / 라이선스 |
| excerpt | create kr patch 레트로 게임의 한글 Hangul 팬 번역 패치 를 처음부터 끝까지 만드는 Claude Code skill. ROM/디스크 분석 → 텍스트 엔진 역공학 → 한글 폰트·인코딩 설계 → PoC → 텍스트 추출·번역·재삽입 → 포인터 재배치·ASM 훅 → 빌드·패치 생성 → 에뮬레이터 검증까지의 전 파이프라인을 다룬다. A Claude Code skill for building Korean fan translation patches for retro games, covering the full pipeline from ROM/disc analysis to emulator verification. Methodology only — contains no copyrighted ROM data or game assets. 지원 플랫폼 플랫폼 CPU / 매체 SNES 슈퍼패미컴 65816 / ROM 카트리지 메가드라이브 68000 / ROM 카트리지 세가 새턴 SH 2 ×2 / CD ROM PS1 MIPS R3000A / CD ROM 드림캐스트 SH 4 / GD ROM PC엔진 / CD ROM² HuC6280 / HuCard·CD ROM PC 98 8086/V30 / 플로피 게임기어 Z80A / ROM 카트리지 목록에 없는 플랫폼도 strategy 축의 조사 순서·검증 원칙을 출발점으로 삼아 새 플랫폼 문서를 작성하며 확 |


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
| skills | 21 |
| .claude-plugin | 2 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 23 |
| .json | 2 |
| [no-ext] | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
