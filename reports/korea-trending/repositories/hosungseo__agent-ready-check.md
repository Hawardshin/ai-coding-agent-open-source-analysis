# hosungseo/agent-ready-check

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hosungseo/agent-ready-check |
| local path | sources/hosungseo__agent-ready-check |
| HEAD | 41a6b6f |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-15T03:41:32Z |
| trendScore / priorityScore | 92 / 140 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 57 | README.md, package.json, app/layout.tsx |
| AI agent / tool use | 39 | README.md, package.json, app/layout.tsx |
| MCP / tool protocol | 22 | README.md, app/layout.tsx, components/Scanner.tsx |
| Security / compliance | 21 | README.md, components/Scanner.tsx, lib/fixes.ts |
| Korean language / Korea domain | 5 | components/Scanner.tsx, lib/ministries.ts, app/compare/page.tsx |
| Infra / observability | 2 | pnpm-lock.yaml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, infra-observability, korea-signal, llmFramework, mcp, sdk-api, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 24 |
| manifests | 3 |
| docs | 1 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | agent-ready-check |
| headings | agent-ready-check / 실행 / 페이지 / API / 점검 항목 (19종 / 143점) / 초기 벤치마크 (2026-04-25) / 자동화 / 배포 |
| excerpt | agent ready check isitagentready.com의 한국어 복제 스캐너 + 정부 사이트 비교 랭킹 보드. 🌐 Live https //agent ready check.vercel.app Next.js 서버사이드 라우트로 대상 사이트에 요청을 보내 CORS 제약 없이 19개 표준 을 점검합니다. 실행 페이지 / — 단일 사이트 스캔. ?url=<target 딥링크·링크 복사 지원. /compare — 최대 8개 사이트를 병렬 스캔해 비교 테이블. 프리셋 3종 제공. /rankings — 중앙부처 20 + 공공포털 4 + 광역단체 3 + 해외정부 3 = 30개 정적 랭킹. GitHub Actions 주 1회 자동 갱신. API GET /api/scan?url=<target → ScanReport JSON POST /api/compare { "urls" ... } → { reports ... } 최대 8 GET /og?url=<target → 1200×630 PNG 소셜 공유 이미지 점검 항목 19종 / 143점 카테고리 체크 배점 검색 가능성 25 robots.txt / Sitemap 선언 / sitemap.xml 10·5·10 콘텐츠 접근성 51 llms.txt / llms full.txt / 마크다운 협상 / JSON LD 파싱 유효성 / hreflang / OpenGraph / RSS·Atom 15·5·10·7·4· |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| app | 8 |
| lib | 3 |
| .github | 1 |
| .gitignore | 1 |
| components | 1 |
| next-env.d.ts | 1 |
| next.config.ts | 1 |
| package.json | 1 |
| pnpm-lock.yaml | 1 |
| postcss.config.mjs | 1 |
| public | 1 |
| README.md | 1 |
| scripts | 1 |
| tailwind.config.ts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 9 |
| .tsx | 6 |
| .json | 3 |
| .css | 1 |
| .md | 1 |
| .mjs | 1 |
| .yaml | 1 |
| .yml | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
