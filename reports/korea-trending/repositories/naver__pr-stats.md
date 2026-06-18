# naver/pr-stats

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/pr-stats |
| local path | sources/naver__pr-stats |
| HEAD | cb9b122 |
| stars/forks | 204 / 14 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2024-12-10T05:19:44Z |
| trendScore / priorityScore | 77 / 182 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 122 | README.md, src/stats/pr-list/__test__/average-added-line-count.test.ts, src/stats/pr-list/__test__/average-approval-count.test.ts |
| Frontend / developer experience | 3 | package.json |
| Security / compliance | 2 | README.md, README.en.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, sdk-api, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 128 |
| manifests | 3 |
| docs | 2 |
| tests | 39 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | pr-stats |
| headings | pr-stats / 사용 방법 / .github/workflows/pr-stats.yml / .github/workflows/pr-stats.yml / 수집 데이터 / PR / PR List / User / 커스터마이즈 / 통계 항목 제어 |
| excerpt | pr stats 🌏 한국어 English README.en.md PR에 대한 유용한 통계를 산출하는 GitHub Actions입니다. PR별 평균 머지까지 소요되는 시간, 리뷰어의 응답시간 등을 산출할 수 있습니다. 통계 결과는 커스터마이즈 커스터마이즈 할 수 있습니다. 업무에 활용하는 방법은 활용 예시 활용 예시 를 참고해 주세요. 사용 방법 GitHub 저장소에 아래 파일을 만드세요. 활용 예시 결과물을 PR로 생성 다음과 같이 작성하면 ./stats/ 하위에 pr.csv , prList.csv , user.csv 가 포함된 PR이 만들어집니다. 수집 데이터 PR 단일 PR에 대한 통계입니다. 이 데이터는 ./stats/pr.csv 로 저장됩니다. 필드 설명 number PR 번호 title PR 제목 createdAt PR 생성 시점의 timestamp mergedAt PR 머지 시점의 timestamp addedLineCount 추가된 라인 수 removedLineCount 제거된 라인 수 changedLineCount 변경된 라인 수 fileCount 파일 개수 commitCount 커밋 개수 commentCount 코멘트 개수 conversationCount 대화 개수 reviewerCount 리뷰어 수 approvalCount 승인 수 participationCount 참여 수 participationRate 참여율 t |


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
| src | 116 |
| .eslintrc | 1 |
| .gitignore | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| action.yml | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.en.md | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 116 |
| [no-ext] | 6 |
| .json | 3 |
| .md | 2 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
