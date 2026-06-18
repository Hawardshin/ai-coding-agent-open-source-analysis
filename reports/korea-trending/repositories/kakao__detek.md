# kakao/detek

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/detek |
| local path | sources/kakao__detek |
| HEAD | 4fef4b3 |
| stars/forks | 90 / 11 |
| language | Go |
| license | Apache-2.0 |
| pushedAt | 2023-06-27T07:25:14Z |
| trendScore / priorityScore | 70 / 188 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Infra / observability | 91 | cases/README.md, README.md, go.mod |
| Korean language / Korea domain | 58 | README.md, go.mod, cases/collector_set_test.go |
| Security / compliance | 9 | README.md, cases/collector/kubernetes_policy_v1beta1.go, cases/detector/api_lifecycle_policy_v1beta1.go |
| Spec / doc-driven workflow | 9 | cases/detector/pod_without_limits.go, cases/detector/pod_without_liveness_probe.go, cases/detector/pod_without_readiness_probe.go |
| LLM wiki / memory / graph | 2 | cases/detector/pod_without_limits.go, cases/detector/pod_without_requests.go |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, infra, infra-observability, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Go |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 54 |
| manifests | 5 |
| docs | 3 |
| tests | 9 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | DETEcting Kubernetes known issues |
| headings | DETEcting Kubernetes known issues / So what does this tool do for me? / How to use this? / with kubectl / warn: predefined "view" clusterrole does not allow access to "core/v1/node" object / wait until the task is completed / get the report / open report.html / delete everything / with Docker |
| excerpt | DETEcting Kubernetes known issues detek is a extensible problem detecting tool for reliable Kubernetes cluster operations and rapid problem detections . It is designed to analyze in cluster issues AND non Kubernetes, but cluster related services such as Openstack, Vault, Trivy, SSH, or whatever detek can access. However, as a Kubernetes exists almost everywhere with various environments and unique operational policies, only "general" features remain here. If you need some new "Detector" or "Collector" ./cases clone this repository and write some code. If you think what you wrote is a "general" case, a contribution is welcomed! So what does this tool do for me? Show a current state of your cl |


## 주요 파일

### Manifests

- cases/README.md
- README.md
- Dockerfile
- go.mod
- go.sum


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| pkg | 22 |
| cases | 19 |
| cmd | 3 |
| .github | 2 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |
| go.mod | 1 |
| go.sum | 1 |
| LICENSE | 1 |
| main.go | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 44 |
| .md | 3 |
| [no-ext] | 3 |
| .yml | 2 |
| .mod | 1 |
| .sum | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
