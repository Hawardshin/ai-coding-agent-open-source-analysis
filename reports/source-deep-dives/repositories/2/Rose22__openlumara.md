# Rose22/openlumara 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

AI agent framework, written from scratch (not based on openclaw), focused on stripping it down to the bare necessities, optimizing token count, reducing security risks. modular so you can enable only exactly what you need.

## 요약

- 조사 단위: `sources/Rose22__openlumara` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 208 files, 17 directories, depth score 73, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=modules/memory.py, docs/openlumara_dev_docs/core/context.md, core/context.py이고, 의존성 단서는 openai, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Rose22/openlumara |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 271 |
| Forks | 25 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Rose22__openlumara](../../../../sources/Rose22__openlumara) |
| 기존 보고서 | [reports/global-trending/repositories/Rose22__openlumara.md](../../../global-trending/repositories/Rose22__openlumara.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 208 / 17 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | channels, core, docs, modules |
| 상위 확장자 | .md: 56, .py: 47, .js: 34, .json: 31, .css: 24, .sh: 3, .txt: 3, .bat: 2, .html: 2, .png: 2, (none): 2, .example: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 42 |
| channels | top-level component | 1 |
| core | top-level component | 1 |
| modules | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
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
| agentRuntime | [modules/memory.py](../../../../sources/Rose22__openlumara/modules/memory.py) | agentRuntime signal |
| agentRuntime | [docs/openlumara_dev_docs/core/context.md](../../../../sources/Rose22__openlumara/docs/openlumara_dev_docs/core/context.md) | agentRuntime signal |
| agentRuntime | [core/context.py](../../../../sources/Rose22__openlumara/core/context.py) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/Rose22__openlumara/main.py) | entrypoints signal |
| config | [requirements_matrix.txt](../../../../sources/Rose22__openlumara/requirements_matrix.txt) | config signal |
| config | [requirements_termux.txt](../../../../sources/Rose22__openlumara/requirements_termux.txt) | config signal |
| config | [requirements.txt](../../../../sources/Rose22__openlumara/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/Rose22__openlumara/main.py) |
| agentRuntime | 3 | [modules/memory.py](../../../../sources/Rose22__openlumara/modules/memory.py)<br>[docs/openlumara_dev_docs/core/context.md](../../../../sources/Rose22__openlumara/docs/openlumara_dev_docs/core/context.md)<br>[core/context.py](../../../../sources/Rose22__openlumara/core/context.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [modules/memory.py](../../../../sources/Rose22__openlumara/modules/memory.py)<br>[channels/webui/index.html](../../../../sources/Rose22__openlumara/channels/webui/index.html) |
| spec | 4 | [requirements_matrix.txt](../../../../sources/Rose22__openlumara/requirements_matrix.txt)<br>[requirements_termux.txt](../../../../sources/Rose22__openlumara/requirements_termux.txt)<br>[requirements.txt](../../../../sources/Rose22__openlumara/requirements.txt)<br>[docs/openlumara_dev_docs/architecture.md](../../../../sources/Rose22__openlumara/docs/openlumara_dev_docs/architecture.md) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 55 | [README.md](../../../../sources/Rose22__openlumara/README.md)<br>[docs/openlumara_user_guide/advanced_use.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/advanced_use.md)<br>[docs/openlumara_user_guide/ai_disclaimer.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/ai_disclaimer.md)<br>[docs/openlumara_user_guide/channels.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/channels.md)<br>[docs/openlumara_user_guide/chats.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/chats.md)<br>[docs/openlumara_user_guide/cli.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/cli.md)<br>[docs/openlumara_user_guide/commands_and_settings.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/commands_and_settings.md)<br>[docs/openlumara_user_guide/discord.md](../../../../sources/Rose22__openlumara/docs/openlumara_user_guide/discord.md) |
| config | 3 | [requirements_matrix.txt](../../../../sources/Rose22__openlumara/requirements_matrix.txt)<br>[requirements_termux.txt](../../../../sources/Rose22__openlumara/requirements_termux.txt)<br>[requirements.txt](../../../../sources/Rose22__openlumara/requirements.txt) |


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
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `modules/memory.py`, `docs/openlumara_dev_docs/core/context.md`, `core/context.py`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`.
3. agent/tool runtime 매핑: `modules/memory.py`, `docs/openlumara_dev_docs/core/context.md`, `core/context.py`.
4. retrieval/memory/indexing 확인: `modules/memory.py`, `channels/webui/index.html`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI agent framework, written from scratch not based on openclaw , focused on stripping it down to the bare necessities, o. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, openai, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
