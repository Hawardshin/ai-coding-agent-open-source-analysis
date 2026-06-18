# naver/p2pcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/p2pcp |
| local path | sources/naver__p2pcp |
| HEAD | f1fa29c |
| stars/forks | 23 / 2 |
| language | Go |
| license | Apache-2.0 |
| pushedAt | 2026-05-29T08:24:55Z |
| trendScore / priorityScore | 76 / 213 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 231 | test/README.md, README.md, docs/index.html |
| Korean language / Korea domain | 152 | README.md, Makefile, src/go.mod |
| Infra / observability | 39 | test/README.md, README.md, Makefile |
| LLM wiki / memory / graph | 9 | README.md, src/main.go, test/k8s/p2pcp-peer.yaml |
| Spec / doc-driven workflow | 9 | test/README.md, README.md, docs/index.html |
| Security / compliance | 3 | README.md, test/k8s_test.sh, README.ko.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Go |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 90 |
| manifests | 6 |
| docs | 6 |
| tests | 41 |
| ci/ops | 8 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | p2pcp |
| headings | p2pcp / Features / Quick start / Usage examples / Seeder (file server) / Peer 1 / Peer 2 / Peer 3 / DNS SRV record (includes port information) / DNS A record (fixed port 10090) |
| excerpt | p2pcp ! Website https //img.shields.io/badge/site naver.github.io%2Fp2pcp 38bdf8?style=flat square https //naver.github.io/p2pcp/ High performance P2P file replication and distribution tool. Distribute a single data source to many nodes concurrently, efficiently, and reliably. Features Large scale parallel transfer Reduce single storage bottlenecks via peer to peer distribution; throughput scales with more nodes. Multiple discovery methods HTTP URL CSV , DNS SRV/A, and external registry heartbeat based . Reliability and observability Integrity verification hash , idle/wait timeouts, and transfer statistics. Flexible paths Local filesystem with optional zstd compression for bandwidth optimiza |


## 주요 파일

### Manifests

- test/README.md
- README.md
- Dockerfile
- Makefile
- src/go.mod
- src/go.sum


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 65 |
| test | 13 |
| docs | 3 |
| .github | 2 |
| .gitignore | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| README.ko.md | 1 |
| README.md | 1 |
| VERSION | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .go | 63 |
| .sh | 7 |
| [no-ext] | 6 |
| .yaml | 5 |
| .md | 3 |
| .yml | 2 |
| .css | 1 |
| .html | 1 |
| .mod | 1 |
| .sum | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
