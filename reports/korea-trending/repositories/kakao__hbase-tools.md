# kakao/hbase-tools

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/hbase-tools |
| local path | sources/kakao__hbase-tools |
| HEAD | 233e9ab |
| stars/forks | 60 / 23 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2025-12-05T04:47:51Z |
| trendScore / priorityScore | 74 / 212 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | README.md, hbase0.94/pom.xml, hbase0.96/pom.xml |
| Security / compliance | 158 | README.md, hbase0.94/pom.xml, hbase0.96/pom.xml |
| LLM wiki / memory / graph | 31 | hbase0.98/hbase-snapshot-0.98/README.md, hbase0.98/hbase-manager-0.98/src/test/java/com/kakao/hbase/manager/command/AssignImportTest.java, hbase0.98/hbase-manager-0.98/src/test/java/com/kakao/hbase/manager/command/AssignTest.java |
| Infra / observability | 1 | hbase0.98/hbase-table-stat-0.98/README.md |
| Spec / doc-driven workflow | 1 | NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, infra-observability, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 158 |
| manifests | 32 |
| docs | 8 |
| tests | 55 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | hbase-tools |
| headings | hbase-tools / Modules / Usage / Resources / License |
| excerpt | hbase tools Collection of command line tools for HBase. Modules 1. hbase common Shared Library Adaptor for API Compatibility 2. hbase manager Toolkit for Region Assignment Management Major Compaction Merging and Splitting Regions 3. hbase table stat Cluster Performance Monitor 4. hbase snapshot Table Snapshot Manager Usage 1. Download jars from releases ../../releases page Or build it by using package.sh package.sh on your PC JDK7 and Maven 3.2 are required 2. Run downloaded jar with JRE Resources Introduction Korean http //tech.kakao.com/2016/03/24/opensource 4 hbase tools/ Introduction and Use Cases Korean ../../releases/download/v1.1.1/hbase tools korean.pdf License This software is licen |


## 주요 파일

### Manifests

- hbase0.98/README.md
- README.md
- hbase0.98/hbase-common-0.98/README.md
- hbase0.98/hbase-manager-0.98/README.md
- hbase0.98/hbase-snapshot-0.98/README.md
- hbase0.98/hbase-table-stat-0.98/README.md
- hbase0.94/pom.xml
- hbase0.96/pom.xml
- hbase0.98/pom.xml
- hbase1.0/pom.xml
- hbase1.2/pom.xml
- hbase0.94/hbase-common-0.94/pom.xml
- hbase0.94/hbase-manager-0.94/pom.xml
- hbase0.94/hbase-snapshot-0.94/pom.xml
- hbase0.94/hbase-table-stat-0.94/pom.xml
- hbase0.96/hbase-common-0.96/pom.xml
- hbase0.96/hbase-manager-0.96/pom.xml
- hbase0.96/hbase-snapshot-0.96/pom.xml
- hbase0.96/hbase-table-stat-0.96/pom.xml
- hbase0.98/hbase-common-0.98/pom.xml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| hbase0.98 | 110 |
| hbase0.94 | 14 |
| hbase1.0 | 12 |
| hbase1.2 | 9 |
| hbase0.96 | 6 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.txt | 1 |
| NOTICE.md | 1 |
| package.sh | 1 |
| README.md | 1 |
| updateVersion.sh | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 120 |
| .xml | 25 |
| .md | 8 |
| .sh | 2 |
| .html | 1 |
| .txt | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
