# Samsung/mTower

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/mTower |
| local path | sources/Samsung__mTower |
| HEAD | 0cf7c56 |
| stars/forks | 75 / 21 |
| language | C |
| license | Apache-2.0 |
| pushedAt | 2026-03-01T19:22:59Z |
| trendScore / priorityScore | 80 / 214 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 87 | README.md, common/Makefile, configs/Makefile |
| Korean language / Korea domain | 73 | README.md, common/Makefile, configs/Makefile |
| LLM wiki / memory / graph | 21 | README.md, freertos/readme.txt, docs/mtower_hw_security_exception_example.md |
| Spec / doc-driven workflow | 10 | README.md, Makefile, docs/add-new-app.md |
| Frontend / developer experience | 5 | README.md, .github/workflows/codeql.yml, .github/PULL_REQUEST_TEMPLATE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | C/C++ |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 927 |
| manifests | 27 |
| docs | 26 |
| tests | 3 |
| ci/ops | 9 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ![](docs/images/icon/mTower-logo-81_128.png) mTower |
| headings | ![](docs/images/icon/mTower-logo-81_128.png) mTower / Contents / 1. Introduction / 2. License / 3. Platforms supported / 4. Get and build mTower software / 5. Source code structure / 6. Coding standards / 7. Documentation / 8. Contributing |
| excerpt | ! docs/images/icon/mTower logo 81 128.png mTower ! Build https //github.com/samsung/mtower/workflows/Build/badge.svg https //github.com/samsung/mtower/actions?query=workflow%3ABuild ! CII Best Practices https //bestpractices.coreinfrastructure.org/projects/6108/badge https //bestpractices.coreinfrastructure.org/projects/6108 ! OpenSSF Scorecard https //api.securityscorecards.dev/projects/github.com/Samsung/mTower/badge https //api.securityscorecards.dev/projects/github.com/Samsung/mTower ! cpp linter https //github.com/cpp linter/cpp linter action/actions/workflows/cpp linter.yml/badge.svg https //github.com/cpp linter/cpp linter action/actions/workflows/cpp linter.yml ! RepoSize https //img |


## 주요 파일

### Manifests

- README.md
- common/Makefile
- configs/Makefile
- crypto/Makefile
- freertos/Makefile
- lib/Makefile
- Makefile
- arch/cortex-m23/m2351/src/m2351_badge/Makefile
- arch/cortex-m23/m2351/src/m2351_badge/nonsecure/Makefile
- arch/cortex-m23/m2351/src/m2351_badge/secure/Makefile
- arch/cortex-m23/m2351/src/NuBL2/Makefile
- arch/cortex-m23/m2351/src/numaker_pfm_m2351/Makefile
- arch/cortex-m23/m2351/src/numaker_pfm_m2351/nonsecure/Makefile
- arch/cortex-m23/m2351/src/numaker_pfm_m2351/secure/Makefile
- arch/cortex-m23/m2351/src/StdDriver/src/Makefile
- arch/cortex-m33/mps2/src/mps2_an505_qemu/Makefile
- arch/cortex-m33/mps2/src/mps2_an505_qemu/nonsecure/Makefile
- arch/cortex-m33/mps2/src/mps2_an505_qemu/secure/Makefile
- arch/cortex-m33/mps2/src/NuBL2/Makefile
- arch/cortex-m33/mps2/src/StdDriver/src/Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| arch | 643 |
| crypto | 91 |
| tee | 57 |
| freertos | 47 |
| .github | 18 |
| docs | 18 |
| apps | 13 |
| configs | 11 |
| tools | 7 |
| tee_client | 6 |
| common | 3 |
| include | 3 |
| .gitignore | 1 |
| AUTHORS | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 449 |
| .c | 323 |
| [no-ext] | 61 |
| .md | 22 |
| .s | 20 |
| .defs | 15 |
| .yml | 10 |
| .ld | 9 |
| .txt | 8 |
| .a | 1 |
| .bib | 1 |
| .dch | 1 |
| .dip | 1 |
| .host | 1 |
| .ini | 1 |
| .json | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
