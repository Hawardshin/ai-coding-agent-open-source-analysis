# GSL-R/arona-soul-agent-memory 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Agent-centric memory architecture for long-running AI companions: continuity, routing, safety boundaries, and self-review loops.

## 요약

- 조사 단위: `sources/GSL-R__arona-soul-agent-memory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 36 files, 5 directories, depth score 57, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 retrieval=examples/memory-search-scenario.md, docs/02-memory-constraints.md, docs/03-agent-centric-memory.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | GSL-R/arona-soul-agent-memory |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/GSL-R__arona-soul-agent-memory](../../../../sources/GSL-R__arona-soul-agent-memory) |
| 기존 보고서 | [reports/korea-trending/repositories/GSL-R__arona-soul-agent-memory.md](../../../korea-trending/repositories/GSL-R__arona-soul-agent-memory.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 36 / 5 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | docs, examples, prompts |
| 상위 확장자 | .md: 35, (none): 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| examples/memory-search-scenario.md | examples workspace | 2 |
| examples | top-level component | 1 |
| prompts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [examples/memory-search-scenario.md](../../../../sources/GSL-R__arona-soul-agent-memory/examples/memory-search-scenario.md) | retrieval signal |
| retrieval | [docs/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/02-memory-constraints.md) | retrieval signal |
| retrieval | [docs/03-agent-centric-memory.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/03-agent-centric-memory.md) | retrieval signal |
| retrieval | [docs/ko/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/ko/02-memory-constraints.md) | retrieval signal |
| docs | [README.ko.md](../../../../sources/GSL-R__arona-soul-agent-memory/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/GSL-R__arona-soul-agent-memory/README.md) | docs signal |
| docs | [docs/00-origin-and-scope.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/00-origin-and-scope.md) | docs signal |
| docs | [docs/01-problem.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/01-problem.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [examples/memory-search-scenario.md](../../../../sources/GSL-R__arona-soul-agent-memory/examples/memory-search-scenario.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 5 | [examples/memory-search-scenario.md](../../../../sources/GSL-R__arona-soul-agent-memory/examples/memory-search-scenario.md)<br>[docs/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/02-memory-constraints.md)<br>[docs/03-agent-centric-memory.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/03-agent-centric-memory.md)<br>[docs/ko/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/ko/02-memory-constraints.md)<br>[docs/ko/03-agent-centric-memory.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/ko/03-agent-centric-memory.md) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 1 | [SECURITY.md](../../../../sources/GSL-R__arona-soul-agent-memory/SECURITY.md) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 25 | [README.ko.md](../../../../sources/GSL-R__arona-soul-agent-memory/README.ko.md)<br>[README.md](../../../../sources/GSL-R__arona-soul-agent-memory/README.md)<br>[docs/00-origin-and-scope.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/00-origin-and-scope.md)<br>[docs/01-problem.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/01-problem.md)<br>[docs/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/02-memory-constraints.md)<br>[docs/03-agent-centric-memory.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/03-agent-centric-memory.md)<br>[docs/04-record-routing.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/04-record-routing.md)<br>[docs/05-safety-boundaries.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/05-safety-boundaries.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/GSL-R__arona-soul-agent-memory/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `examples/memory-search-scenario.md`, `docs/02-memory-constraints.md`, `docs/03-agent-centric-memory.md`.
2. agent/tool runtime 매핑: `examples/memory-search-scenario.md`.
3. retrieval/memory/indexing 확인: `examples/memory-search-scenario.md`, `docs/02-memory-constraints.md`, `docs/03-agent-centric-memory.md`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Agent centric memory architecture for long running AI companions continuity, routing, safety boundaries, and self review. 핵심 구조 신호는 README.md, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
