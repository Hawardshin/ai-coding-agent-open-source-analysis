# kakao/olive-cli

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/olive-cli |
| local path | sources/kakao__olive-cli |
| HEAD | 754ce16 |
| stars/forks | 26 / 5 |
| language | Shell |
| license |  |
| pushedAt | 2026-05-19T05:10:17Z |
| trendScore / priorityScore | 78 / 163 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 16 | NOTICE.md |
| Korean language / Korea domain | 10 | README.md, install.ps1, install.sh |
| Security / compliance | 2 | NOTICE.md |
| Spec / doc-driven workflow | 1 | NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | docs/awesome-list |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 4 |
| manifests | 1 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | 개요 / 하위 버전 호환성 / 면책조항 / Quick Links |
| excerpt | OLIVE CLI ============================================================================== 개요 OLIVE CLI는 사용자 PC 환경에서 OLIVE Platform의 기능을 실행할 수 있도록 돕는 CLI Command Line Interface 도구입니다. CLI를 사용하면 터미널 프로그램의 명령 프롬프트에서도 브라우저 기반 OLIVE Platform과 동일하게 오픈소스를 스캔할 수 있습니다. ★ 참고 OLIVE CLI의 사용법, 명령어 등에 대한 자세한 설명은 사용자 문서 https //olive.kakao.com/docs/cli/v2/overview 를 참고해 주세요. OLIVE CLI를 통해 OLIVE의 기능을 사용하기 위해서는 먼저 OLIVE에서 API 토큰을 발급받아야 합니다. 발급 방법은 다음의 API 토큰 발급하기 https //olive.kakao.com/docs/cli/v2/overview/ api %ED%86%A0%ED%81%B0 %EB%B0%9C%EA%B8%89%ED%95%98%EA%B8%B0 를 참고해 주세요. OLIVE CLI 다운로드는 OLIVE CLI 실행하기 https //olive.kakao.com/docs/cli/v2/overview/ olive cli %EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0 를 참고해주세요. |


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
| install.ps1 | 1 |
| install.sh | 1 |
| NOTICE.md | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 2 |
| .ps1 | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
