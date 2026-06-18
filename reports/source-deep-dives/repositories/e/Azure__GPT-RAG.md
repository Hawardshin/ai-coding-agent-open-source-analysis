# Azure/GPT-RAG 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Sharing the learning along the way we been gathering to enable Azure OpenAI at enterprise scale in a secure manner. GPT-RAG core is a Retrieval-Augmented Generation pattern running in Azure, using Azure Cognitive Search for retrieval and Azure OpenAI large language models to power ChatGPT-style and Q&A experiences.

## 요약

- 조사 단위: `sources/Azure__GPT-RAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 47 files, 12 directories, depth score 79, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=media/gpt-rag-homepage.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Azure/GPT-RAG |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 1161 |
| Forks | 304 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Azure__GPT-RAG](../../../../sources/Azure__GPT-RAG) |
| 기존 보고서 | [reports/global-trending/repositories/Azure__GPT-RAG.md](../../../global-trending/repositories/Azure__GPT-RAG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 47 / 12 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, config, docs, infra, media, scripts, util |
| 상위 확장자 | .md: 13, .py: 9, .json: 4, .yml: 4, .png: 3, .ps1: 3, .sh: 3, (none): 3, .j2: 2, .txt: 2, .yaml: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| infra | top-level component | 1 |
| media | top-level component | 1 |
| scripts | top-level component | 1 |
| util | top-level component | 1 |


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
| retrieval | [media/gpt-rag-homepage.png](../../../../sources/Azure__GPT-RAG/media/gpt-rag-homepage.png) | retrieval signal |
| docs | [README.md](../../../../sources/Azure__GPT-RAG/README.md) | docs signal |
| docs | [docs/pull_request_template.md](../../../../sources/Azure__GPT-RAG/docs/pull_request_template.md) | docs signal |
| config | [util/requirements.txt](../../../../sources/Azure__GPT-RAG/util/requirements.txt) | config signal |
| config | [config/requirements.txt](../../../../sources/Azure__GPT-RAG/config/requirements.txt) | config signal |
| ci | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/block-pr-to-main.yml) | ci support |
| ci | [.github/workflows/deploy-docs.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/deploy-docs.yml) | ci support |
| instruction | [AGENTS.md](../../../../sources/Azure__GPT-RAG/AGENTS.md) | instruction support |
| instruction | [.github/copilot-instructions.md](../../../../sources/Azure__GPT-RAG/.github/copilot-instructions.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/Azure__GPT-RAG/AGENTS.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [media/gpt-rag-homepage.png](../../../../sources/Azure__GPT-RAG/media/gpt-rag-homepage.png) |
| spec | 3 | [util/requirements.txt](../../../../sources/Azure__GPT-RAG/util/requirements.txt)<br>[media/architecture_zero_trust.png](../../../../sources/Azure__GPT-RAG/media/architecture_zero_trust.png)<br>[config/requirements.txt](../../../../sources/Azure__GPT-RAG/config/requirements.txt) |
| eval | 0 | 명확하지 않음 |
| security | 1 | [SECURITY.md](../../../../sources/Azure__GPT-RAG/SECURITY.md) |
| ci | 2 | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/block-pr-to-main.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/deploy-docs.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/Azure__GPT-RAG/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure__GPT-RAG/.github/copilot-instructions.md) |
| docs | 2 | [README.md](../../../../sources/Azure__GPT-RAG/README.md)<br>[docs/pull_request_template.md](../../../../sources/Azure__GPT-RAG/docs/pull_request_template.md) |
| config | 2 | [util/requirements.txt](../../../../sources/Azure__GPT-RAG/util/requirements.txt)<br>[config/requirements.txt](../../../../sources/Azure__GPT-RAG/config/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 2 | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/block-pr-to-main.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/deploy-docs.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/Azure__GPT-RAG/SECURITY.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/Azure__GPT-RAG/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure__GPT-RAG/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `media/gpt-rag-homepage.png`, `README.md`, `docs/pull_request_template.md`.
2. agent/tool runtime 매핑: `AGENTS.md`.
3. retrieval/memory/indexing 확인: `media/gpt-rag-homepage.png`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Sharing the learning along the way we been gathering to enable Azure OpenAI at enterprise scale in a secure manner. GPT . 핵심 구조 신호는 Python, README.md, AGENTS.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
