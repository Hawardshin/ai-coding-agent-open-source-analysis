# toss/slash-site

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/slash-site |
| local path | sources/toss__slash-site |
| HEAD | e871959 |
| stars/forks | 7 / 1 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-05-22T11:31:26Z |
| trendScore / priorityScore | 66 / 161 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 83 | README.md, package.json, tsconfig.json |
| Korean language / Korea domain | 55 | README.md, downloads-animation-guide.md, scripts/fetch-github-stats.js |
| Security / compliance | 7 | code-rule.md |
| AI agent / tool use | 2 | scripts/fetch-github-stats.js, scripts/fetch-npm-stats.js |
| Spec / doc-driven workflow | 2 | code-rule.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend-dx, korea-signal, localRuntime, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 51 |
| manifests | 3 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Slash |
| headings | Slash / About / Getting Started / Tech Stack / Featured Projects |
| excerpt | Slash The official showcase for open source libraries built by Toss's frontend team. About Slash highlights the open source projects created by Toss, featuring download stats, GitHub stars, and links to documentation. It also introduces the team behind the libraries. Getting Started Tech Stack Next.js 16 TypeScript Framer Motion Featured Projects es toolkit https //es toolkit.dev/ Modern TypeScript utility library es git https //es git.dev/ Fast Git data access for Node.js es hangul https //es hangul.slash.page/ Korean text processing utilities overlay kit https //overlay kit.slash.page/en Declarative overlay primitives react simplikit https //react simplikit.slash.page/intro.html Lightweigh |


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
| src | 35 |
| public | 5 |
| scripts | 2 |
| .gitignore | 1 |
| code-rule.md | 1 |
| downloads-animation-guide.md | 1 |
| eslint.config.mjs | 1 |
| next.config.ts | 1 |
| package.json | 1 |
| pnpm-lock.yaml | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .tsx | 17 |
| .css | 12 |
| .ts | 6 |
| .svg | 4 |
| .md | 3 |
| .js | 2 |
| .json | 2 |
| .mp4 | 2 |
| .mjs | 1 |
| .yaml | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
