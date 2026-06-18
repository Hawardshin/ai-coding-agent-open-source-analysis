# DECK6/korea-mice-safety-agent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/DECK6/korea-mice-safety-agent |
| local path | sources/DECK6__korea-mice-safety-agent |
| HEAD | 2546865 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-11T12:01:13Z |
| trendScore / priorityScore | 73 / 137 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 70 | package.json, docs/CODEX_GOAL_P0_P2_READY_KEYS.md, docs/DEVELOPMENT_NOTES.md |
| Korean language / Korea domain | 63 | README.md, docs/TRUSTED_SAFETY_LAW_EVALUATION.md, docs/TRUSTED_SAFETY_LAW_RUBRIC.md |
| AI agent / tool use | 61 | README.md, docs/TRUSTED_SAFETY_LAW_EVALUATION.md, docs/TRUSTED_SAFETY_LAW_RUBRIC.md |
| MCP / tool protocol | 40 | README.md, package.json, docs/PUBLIC_SITE_UX_SPEC_2026-06-11.md |
| Spec / doc-driven workflow | 16 | docs/PUBLIC_SITE_UX_SPEC_2026-06-11.md, docs/API_ACCESS_REQUIREMENTS.md, docs/CODEX_GOAL_P0_P2_READY_KEYS.md |
| Frontend / developer experience | 13 | package.json, package-lock.json, src/index.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend-dx, graphMemory, korea-signal, llmFramework, mcp, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 403 |
| manifests | 3 |
| docs | 185 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 5 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | korea-mice-safety-agent |
| headings | korea-mice-safety-agent / 현재 범위 / 릴리스 상태 / 사용 / 또는 / korean-law-mcp 연동 / 오프라인 베뉴 문서 / 적용성 검증 / 도구 / 데이터 파일 |
| excerpt | korea mice safety agent Korean MICE 현장 운영 안전용 MCP 서버입니다. 축제·박람회·컨벤션·공연·식음료·VIP 행사에 적용되는 법령, 안전수칙, 베뉴 규정, 위험요인, 문서 의무를 로컬 온톨로지로 조회합니다. 설계 참고점 중 하나로 agent safety oss 의 법령·위험·통제·문서·증빙 연결 방식을 검토했습니다. 현재 범위 공통 법령 중대재해처벌법, 산안법, 산안기준규칙, 재난안전법, 소방, 개인정보보호법, 응급의료법, 전기안전관리법 유형별 법령 공연법, 식품위생법, LPG, 도로/도로교통, 옥외광고물, 건축, 승강기, 경비업법 등 지자체 조례 지역축제 안전관리, 옥외행사 안전관리, 도로점용·교통소통, 옥외광고물 관리 조례 오프라인 인덱스 공공 지침 KTO MICE 안전관리 매뉴얼, 행안부 지역축제/다중운집/다중이용시설 자료, 문체부 공연장 안전 매뉴얼 작업자 안전 산안기준규칙/KOSHA Guide worker safety 관점을 MICE 설치·철거 작업 레이어로 정리 거점 베뉴 코엑스, 킨텍스, 벡스코, 김대중컨벤션센터, 유에코, SETEC, aT센터, 송도컨벤시아, 수원컨벤션센터, 수원메쎄, DCC, OSCO, EXCO, HICO, 구미코, CECO, GSCO, ICC JEJU, 여수엑스포컨벤션센터 위험요인 군중 밀집, 병목, 무주최 다중운집 지휘 공백, 피난통로 폐쇄, 임시구조물, 무대·트러스 |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- outputs/real-event-tests-2026-05/coex-seoul-money-show-2026/plan.md
- outputs/real-event-tests-2026-05/haeundae-sand-festival-2026/plan.md
- outputs/real-event-tests-2026-05/hangang-drone-light-show-2026-05-16/plan.md
- outputs/real-event-tests-2026-05/jungnang-seoul-rose-festival-2026/plan.md
- outputs/real-event-tests-2026-05/kintex-playx4-2026/plan.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| outputs | 275 |
| src | 60 |
| data | 28 |
| scripts | 15 |
| docs | 14 |
| tests | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| LICENSE | 1 |
| NOTICE.md | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 185 |
| .csv | 89 |
| .json | 50 |
| .ts | 42 |
| .mjs | 17 |
| .html | 6 |
| .docx | 5 |
| .xlsx | 5 |
| [no-ext] | 3 |
| .example | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
