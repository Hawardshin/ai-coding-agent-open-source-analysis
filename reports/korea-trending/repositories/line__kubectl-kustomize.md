# line/kubectl-kustomize

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/kubectl-kustomize |
| local path | sources/line__kubectl-kustomize |
| HEAD | f77efa4 |
| stars/forks | 36 / 16 |
| language | Dockerfile |
| license | Apache-2.0 |
| pushedAt | 2025-11-04T06:18:03Z |
| trendScore / priorityScore | 70 / 156 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Infra / observability | 4 | README.md, Dockerfile |
| Korean language / Korea domain | 3 | README.md, Dockerfile, CODE_OF_CONDUCT.md |
| Security / compliance | 3 | README.md |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | infra, infra-observability, korea-signal, llm-wiki-memory, security-compliance |
| stacks | docs/awesome-list |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 7 |
| manifests | 2 |
| docs | 3 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | kubectl-kustomize |
| headings | kubectl-kustomize / Quickstart / About this image / How to contribute / LICENSE |
| excerpt | kubectl kustomize Docker image with kubectl and kustomize ! GitHub Actions https //github.com/line/kubectl kustomize/workflows/Release/badge.svg https //github.com/line/kubectl kustomize/actions?workflowID=Release ! Docker Pulls https //img.shields.io/docker/pulls/line/kubectl kustomize https //hub.docker.com/r/line/kubectl kustomize Quickstart About this image This image is built on alpine https //hub.docker.com/ /alpine image with following two binaries kubectl https //github.com/kubernetes/kubectl kustomize https //github.com/kubernetes sigs/kustomize Image will be released if new stable binaries released by using GitHub Actions https //github.com/features/actions . Binary version will be |


## 주요 파일

### Manifests

- README.md
- Dockerfile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| .github | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| Dockerfile | 1 |
| LICENSE | 1 |
| metadata.Dockerfile | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 3 |
| [no-ext] | 2 |
| .dockerfile | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
