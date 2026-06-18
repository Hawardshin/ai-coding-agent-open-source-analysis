# kakaobrain/autoclint

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/autoclint |
| local path | sources/kakaobrain__autoclint |
| HEAD | 585dfbc |
| stars/forks | 169 / 25 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2020-05-12T03:01:37Z |
| trendScore / priorityScore | 77 / 187 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 16 | README.md, model.py, skeleton/data/augmentations.py |
| Korean language / Korea domain | 3 | README.md |
| LLM wiki / memory / graph | 3 | README.md, skeleton/data/stratified_sampler.py |
| Frontend / developer experience | 1 | skeleton/projects/others.py |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 34 |
| manifests | 1 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | AutoCLINT |
| headings | AutoCLINT / Automatic **C**omputationally **LI**ght **N**etwork **T**ransfer / [AutoCV][]/[AutoCV2][] Challenge Introduction / Methods / Network Transfer / [Fast AutoAugment][] / [AutoCV][] Results / Public / Private / [AutoCV2][] Results |
| excerpt | AutoCLINT ! KakaoBrain https //img.shields.io/badge/kakao brain ffcd00.svg http //kakaobrain.com/ ! pytorch https //img.shields.io/badge/pytorch 1.0.1 %23ee4c2c.svg https //pytorch.org/ ! tensorflow https //img.shields.io/badge/tensorflow 1.13.1 ed6c20.svg https //www.tensorflow.org/ ! autocv 1st place https //img.shields.io/badge/autocv 1st place %235339D3.svg ! autocv2 1st place https //img.shields.io/badge/autocv2 1st place %235339D3.svg ! HitCount http //hits.dwyl.io/kakaobrain/autoclint.svg http //hits.dwyl.io/kakaobrain/autoclint Automatic C omputationally LI ght N etwork T ransfer A specially designed light version of Fast AutoAugment is implemented to adapt to various tasks under lim |


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
| skeleton | 24 |
| architectures | 2 |
| .gitignore | 1 |
| .gitmodules | 1 |
| bin | 1 |
| LICENSE | 1 |
| model.py | 1 |
| models | 1 |
| README.md | 1 |
| results | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 27 |
| [no-ext] | 6 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
