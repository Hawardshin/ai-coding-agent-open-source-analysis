# aristoapp/awesome-second-brain 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A curated solutions to building a self-evolving second brain that helps AI agents understand your personal and team context.

## 요약

- 조사 단위: `sources/aristoapp__awesome-second-brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 103 files, 14 directories, depth score 46, key references 4개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=ko/comparisons/agent-access.md, ko/capabilities/agent-access.md, comparisons/agent-access.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | aristoapp/awesome-second-brain |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | 없음 |
| Stars | 422 |
| Forks | 44 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/aristoapp__awesome-second-brain](../../../../sources/aristoapp__awesome-second-brain) |
| 기존 보고서 | [reports/llm-wiki/repositories/aristoapp__awesome-second-brain.md](../../../llm-wiki/repositories/aristoapp__awesome-second-brain.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 103 / 14 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | assets, capabilities, comparisons, examples, ko, setup-guides, solutions, templates |
| 상위 확장자 | .md: 100, (none): 2, .png: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| assets | top-level component | 1 |
| capabilities | top-level component | 1 |
| comparisons | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| ko | top-level component | 1 |
| setup-guides | top-level component | 1 |
| solutions | top-level component | 1 |
| templates | top-level component | 1 |


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
| agentRuntime | [ko/comparisons/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/ko/comparisons/agent-access.md) | agentRuntime signal |
| agentRuntime | [ko/capabilities/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/ko/capabilities/agent-access.md) | agentRuntime signal |
| agentRuntime | [comparisons/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/comparisons/agent-access.md) | agentRuntime signal |
| agentRuntime | [capabilities/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/capabilities/agent-access.md) | agentRuntime signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 4 | [ko/comparisons/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/ko/comparisons/agent-access.md)<br>[ko/capabilities/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/ko/capabilities/agent-access.md)<br>[comparisons/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/comparisons/agent-access.md)<br>[capabilities/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/capabilities/agent-access.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 6 | [solutions/chatgpt-memory.md](../../../../sources/aristoapp__awesome-second-brain/solutions/chatgpt-memory.md)<br>[solutions/hermes-llm-wiki.md](../../../../sources/aristoapp__awesome-second-brain/solutions/hermes-llm-wiki.md)<br>[ko/solutions/chatgpt-memory.md](../../../../sources/aristoapp__awesome-second-brain/ko/solutions/chatgpt-memory.md)<br>[ko/solutions/hermes-llm-wiki.md](../../../../sources/aristoapp__awesome-second-brain/ko/solutions/hermes-llm-wiki.md)<br>[ko/capabilities/retrieval-grounding.md](../../../../sources/aristoapp__awesome-second-brain/ko/capabilities/retrieval-grounding.md)<br>[capabilities/retrieval-grounding.md](../../../../sources/aristoapp__awesome-second-brain/capabilities/retrieval-grounding.md) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 14 | [README.ko.md](../../../../sources/aristoapp__awesome-second-brain/README.ko.md)<br>[README.md](../../../../sources/aristoapp__awesome-second-brain/README.md)<br>[templates/README.md](../../../../sources/aristoapp__awesome-second-brain/templates/README.md)<br>[solutions/README.md](../../../../sources/aristoapp__awesome-second-brain/solutions/README.md)<br>[setup-guides/README.md](../../../../sources/aristoapp__awesome-second-brain/setup-guides/README.md)<br>[ko/templates/README.md](../../../../sources/aristoapp__awesome-second-brain/ko/templates/README.md)<br>[ko/solutions/README.md](../../../../sources/aristoapp__awesome-second-brain/ko/solutions/README.md)<br>[ko/setup-guides/README.md](../../../../sources/aristoapp__awesome-second-brain/ko/setup-guides/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `ko/comparisons/agent-access.md`, `ko/capabilities/agent-access.md`, `comparisons/agent-access.md`.
2. agent/tool runtime 매핑: `ko/comparisons/agent-access.md`, `ko/capabilities/agent-access.md`, `comparisons/agent-access.md`.
3. retrieval/memory/indexing 확인: `solutions/chatgpt-memory.md`, `solutions/hermes-llm-wiki.md`, `ko/solutions/chatgpt-memory.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A curated solutions to building a self evolving second brain that helps AI agents understand your personal and team cont. 핵심 구조 신호는 README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
