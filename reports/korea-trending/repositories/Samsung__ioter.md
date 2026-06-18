# Samsung/ioter

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/ioter |
| local path | sources/Samsung__ioter |
| HEAD | 6927b3e |
| stars/forks | 136 / 19 |
| language | Python |
| license | BSD-3-Clause |
| pushedAt | 2023-08-07T04:05:19Z |
| trendScore / priorityScore | 74 / 174 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 63 | docs/guides/README.md, bin/README.md, lib/README.md |
| RAG / retrieval | 2 | src/auto_onboarding/auto_onboardingmain.py, src/common/utils.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, rag |
| stacks | Python |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 87 |
| manifests | 5 |
| docs | 9 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Get started with ioter / Supported IoT devices (2023-04-27) / Required tools / Install and run ioter / Onboard Matter supported devices / Automated testing / Known issues / 1. Problem with specific linux kernel versions (higher than 5.16 and lower than 6.1.2) / 2. With Ubuntu 20.04.2 LTS(Focal Fossa), there is a BLE connection issue while onboarding End Node. To use ioter please upgrade to Ubuntu 22.04 LTS or later. / Contributing |
| excerpt | ! ioter banner /res/doc/ioter banner.png Get started with ioter ioter acts as a device emulator for developers, testers, and manufacturers of connected devices that are compliant with Matter and Thread. Benefits include Flexibility Multiple types of IoT devices can be implemented using a single RCP dongle. Multi Device support Each RCP dongle supports a single device. ioter supports up to 10 RCP dongles at a time. Low cost Limited expenses for testing various IoT device types. Time savings Virtual devices on demand no need to search for and procure multiple IoT device types. Easy to use Quickly control the status of devices from within ioter. Automated testing Repeated testing through script |


## 주요 파일

### Manifests

- docs/guides/README.md
- bin/README.md
- lib/README.md
- README.md
- src/automation/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 45 |
| res | 20 |
| script | 6 |
| bin | 4 |
| lib | 4 |
| docs | 3 |
| .gitignore | 1 |
| .gitmodules | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 41 |
| .ui | 19 |
| [no-ext] | 13 |
| .md | 7 |
| .3-fed | 1 |
| .3-med | 1 |
| .3-sed | 1 |
| .hex | 1 |
| .json | 1 |
| .png | 1 |
| .xml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
