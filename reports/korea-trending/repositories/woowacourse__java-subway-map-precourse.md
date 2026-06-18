# woowacourse/java-subway-map-precourse

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/woowacourse/java-subway-map-precourse |
| local path | sources/woowacourse__java-subway-map-precourse |
| HEAD | f428576 |
| stars/forks | 33 / 273 |
| language | Java |
| license | MIT |
| pushedAt | 2024-05-12T15:28:49Z |
| trendScore / priorityScore | 70 / 125 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

_없음_


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal |
| stacks | Java/Kotlin |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 15 |
| manifests | 2 |
| docs | 1 |
| tests | 1 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 지하철 노선도 미션 |
| headings | 지하철 노선도 미션 / 🚀 기능 요구사항 / 초기 설정 / 지하철 역 관련 기능 / 지하철 노선 관련 기능 / 지하철 구간 추가 기능 / 지하철 구간 삭제 기능 / 지하철 노선에 등록된 역 조회 기능 / ✍🏻 입출력 요구사항 / 💻 프로그래밍 실행 결과 |
| excerpt | 지하철 노선도 미션 지하철 역과 노선을 관리하는 지하철 노선도 기능을 구현한다. <br 🚀 기능 요구사항 초기 설정 프로그램 시작 시 역, 노선 등 필요한 정보를 미리 셋팅할 수 있다. 아래의 사전 등록 정보로 반드시 초기 설정을 하기 <img src="image/domain.png" width="500" 지하철 역 관련 기능 지하철 역을 등록하고 삭제할 수 있다. 단, 노선에 등록된 역은 삭제할 수 없다 중복된 지하철 역 이름이 등록될 수 없다. 지하철 역 이름은 2글자 이상이어야 한다. 지하철 역의 목록을 조회할 수 있다. 지하철 노선 관련 기능 지하철 노선을 등록하고 삭제할 수 있다. 중복된 지하철 노선 이름이 등록될 수 없다. 지하철 노선 이름은 2글자 이상이어야 한다. 노선 등록 시 상행 종점역과 하행 종점역을 입력받는다. 지하철 노선의 목록을 조회할 수 있다. 지하철 구간 추가 기능 지하철 노선에 구간을 추가하는 기능은 노선에 역을 추가하는 기능이라고도 할 수 있다. 역과 역사이를 구간이라 하고 이 구간들의 모음이 노선이다. 하나의 역은 여러개의 노선에 추가될 수 있다. 역과 역 사이에 새로운 역이 추가 될 수 있다. 노선에서 갈래길은 생길 수 없다. <img src="image/section1.png" width="500" 지하철 구간 삭제 기능 노선에 등록된 역을 제거할 수 있다. 종점을 제거할 경우 다음 역이 종점이 |


## 주요 파일

### Manifests

- README.md
- build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 6 |
| gradle | 2 |
| .gitignore | 1 |
| build.gradle | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |
| README.md | 1 |
| settings.gradle | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 5 |
| [no-ext] | 3 |
| .gradle | 2 |
| .bat | 1 |
| .jar | 1 |
| .md | 1 |
| .properties | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
