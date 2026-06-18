# kakao/network-node-manager

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/network-node-manager |
| local path | sources/kakao__network-node-manager |
| HEAD | 78fa549 |
| stars/forks | 107 / 19 |
| language | Go |
| license | Apache-2.0 |
| pushedAt | 2023-06-27T08:35:15Z |
| trendScore / priorityScore | 72 / 190 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Infra / observability | 70 | README.md, go.mod, Makefile |
| Spec / doc-driven workflow | 31 | controllers/service_controller.go, deploy/network-node-manager_iptables.yml, deploy/network-node-manager_ipvs.yml |
| Korean language / Korea domain | 22 | README.md, go.mod, CONTRIBUTING.md |
| LLM wiki / memory / graph | 15 | deploy/network-node-manager_iptables.yml, deploy/network-node-manager_ipvs.yml, NOTICE.md |
| Security / compliance | 9 | README.md, controllers/service_controller.go, issues/connection_reset_issue_pod_out_cluster.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, infra, infra-observability, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Go |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 37 |
| manifests | 5 |
| docs | 5 |
| tests | 9 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Network Node Manager |
| headings | Network Node Manager / Deploy / Configuration / Enable Drop Invalid Packet Rule in INPUT chain / Enable External-IP to Cluster-IP DNAT Rule / How it works? / License |
| excerpt | Network Node Manager network node manager is a kubernetes controller that controls the network configuration of a node to resolve network issues of kubernetes. By simply deploying and configuring network node manager, you can solve kubernetes network issues that cannot be resolved by kubernetes or resolved by the higher kubernetes Version. Below is a list of kubernetes's issues to be resolved by network node manager. network node manager is based on kubebuilder v2.3.1 https //github.com/kubernetes sigs/kubebuilder . Connection reset issue between pod and out of cluster issues/connection reset issue pod out cluster.md External IP access issue with IPVS proxy mode issues/external IP access iss |


## 주요 파일

### Manifests

- README.md
- Dockerfile
- go.mod
- Makefile
- go.sum


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| pkg | 13 |
| test | 4 |
| .github | 2 |
| deploy | 2 |
| img | 2 |
| issues | 2 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| controllers | 1 |
| Dockerfile | 1 |
| go.mod | 1 |
| go.sum | 1 |
| LICENSE | 1 |
| main.go | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 15 |
| .yml | 8 |
| .md | 5 |
| [no-ext] | 4 |
| .mod | 1 |
| .png | 1 |
| .pptx | 1 |
| .sh | 1 |
| .sum | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
