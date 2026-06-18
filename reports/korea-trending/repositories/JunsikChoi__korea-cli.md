# JunsikChoi/korea-cli

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/JunsikChoi/korea-cli |
| local path | sources/JunsikChoi__korea-cli |
| HEAD | d234cd3 |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-13T19:09:17Z |
| trendScore / priorityScore | 76 / 149 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 144 | README.md, docs/plans/2026-04-01-spec-quality-design.md, docs/plans/2026-04-02-gateway-spec-extraction-plan.md |
| Korean language / Korea domain | 105 | docs/api-catalog/README.md, README.md, CLAUDE.md |
| MCP / tool protocol | 50 | README.md, CLAUDE.md, Cargo.toml |
| Frontend / developer experience | 7 | README.md, CLAUDE.md, Makefile |
| LLM wiki / memory / graph | 1 | docs/api-catalog/by-org/국가데이터처.md |
| Security / compliance | 1 | docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, frontend-dx, korea-signal, llm-wiki-memory, mcp, sdk-api, security-compliance, spec-driven |
| stacks | Rust |
| capabilities | Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 482 |
| manifests | 5 |
| docs | 438 |
| tests | 12 |
| ci/ops | 2 |
| spec artifacts | 7 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | korea-cli |
| headings | korea-cli / 왜 만들었나 / 사용 예시 / CLI로 직접 사용 / API 검색 (12,000+ API 번들 내장, 즉시 사용 가능) / → 오프라인 카탈로그에서 즉시 검색 / API 상세 스펙 조회 / → 파라미터, 인증 방식, 엔드포인트 확인 / API 직접 호출 / → JSON 응답 반환 |
| excerpt | korea cli 한국 공공데이터포털 data.go.kr 의 수천 개 API를 자연어로 접근하는 CLI + MCP 서버 ! License MIT https //img.shields.io/badge/License MIT blue.svg LICENSE ! Rust https //img.shields.io/badge/Rust stable orange.svg https //www.rust lang.org/ 왜 만들었나 공공데이터포털 https //www.data.go.kr 에는 수천 개의 무료 오픈 API가 있습니다. 미세먼지, 날씨, 부동산, 교통, 위생등급... 유용한 데이터가 이미 공개되어 있지만, 실제로 활용하는 사람은 많지 않습니다. API마다 파라미터명, 응답 구조, 인코딩이 전부 다릅니다 하나 연동하려면 문서를 읽고 신청하고 테스트하는 데 시간이 걸립니다 개발자가 아니면 접근 자체가 어렵습니다 korea cli는 이 문제를 LLM으로 해결합니다. 공공데이터포털의 전체 API 카탈로그를 자동으로 수집하고 추상화하여, 자연어 한 줄로 원하는 데이터에 접근할 수 있게 합니다. 사용 예시 CLI로 직접 사용 MCP 서버로 AI 도구에 연결 Claude Desktop, Cursor 등에서 MCP 서버로 연결하면 AI가 한국 공공데이터를 직접 활용합니다 특징 특징 설명 번들 내장 12,119 API 카탈로그 + 7,160 스펙이 바이너리에 |


## 주요 파일

### Manifests

- docs/api-catalog/README.md
- README.md
- CLAUDE.md
- Cargo.toml
- Makefile


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/specs/2026-03-31-bundle-transition-design.md
- docs/specs/2026-03-31-phase1-mvp-design.md
- docs/specs/2026-04-02-gateway-spec-extraction-design.md
- docs/specs/2026-04-02-html-pattern-discovery-design.md
- docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md
- docs/specs/2026-04-05-partial-stub-finalization-design.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 433 |
| src | 27 |
| tests | 6 |
| data | 3 |
| .github | 2 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| build.rs | 1 |
| Cargo.toml | 1 |
| CLAUDE.md | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 438 |
| .rs | 33 |
| [no-ext] | 6 |
| .yml | 2 |
| .example | 1 |
| .sh | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
