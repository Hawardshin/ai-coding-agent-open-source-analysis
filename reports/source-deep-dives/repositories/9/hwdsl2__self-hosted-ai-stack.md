# hwdsl2/self-hosted-ai-stack 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Deploy a complete self-hosted AI stack with Docker Compose: Ollama, LiteLLM, AnythingLLM, Whisper, WhisperLive, Kokoro, Embeddings, Docling and MCP Gateway. Local-first, private by default, with lightweight stacks, optional HTTPS and NVIDIA CUDA acceleration. Multi-arch: amd64, arm64.

## 요약

- 조사 단위: `sources/hwdsl2__self-hosted-ai-stack` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 83 files, 16 directories, depth score 45, key references 4개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 retrieval/vector path, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 container=docker-compose.cuda.yml, docker-compose.proxy.yml, docker-compose.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hwdsl2/self-hosted-ai-stack |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Shell |
| Stars | 91 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hwdsl2__self-hosted-ai-stack](../../../../sources/hwdsl2__self-hosted-ai-stack) |
| 기존 보고서 | [reports/global-trending/repositories/hwdsl2__self-hosted-ai-stack.md](../../../global-trending/repositories/hwdsl2__self-hosted-ai-stack.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 83 / 16 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, caddy, docs, stacks |
| 상위 확장자 | .md: 52, .yml: 19, (none): 5, .sh: 4, .svg: 2, .png: 1 |
| 소스 패턴 | retrieval/vector path, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| caddy | top-level component | 1 |
| stacks | top-level component | 1 |


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
| container | [docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.cuda.yml) | container signal |
| container | [docker-compose.proxy.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.proxy.yml) | container signal |
| container | [docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.yml) | container signal |
| container | [stacks/voice-pipeline/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.cuda.yml) | container signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 12 | [stacks/rag-pipeline-full/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/docker-compose.cuda.yml)<br>[stacks/rag-pipeline-full/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/docker-compose.yml)<br>[stacks/rag-pipeline-full/README-ru.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/README-ru.md)<br>[stacks/rag-pipeline-full/README-zh-Hant.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/README-zh-Hant.md)<br>[stacks/rag-pipeline-full/README-zh.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/README-zh.md)<br>[stacks/rag-pipeline-full/README.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/README.md)<br>[stacks/rag-pipeline/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline/docker-compose.cuda.yml)<br>[stacks/rag-pipeline/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline/docker-compose.yml) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 19 | [docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.cuda.yml)<br>[docker-compose.proxy.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.proxy.yml)<br>[docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.yml)<br>[stacks/voice-pipeline/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.cuda.yml)<br>[stacks/voice-pipeline/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.yml)<br>[stacks/voice-chat/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-chat/docker-compose.cuda.yml)<br>[stacks/voice-chat/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-chat/docker-compose.yml)<br>[stacks/rag-pipeline-full/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/docker-compose.cuda.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 47 | [README-ru.md](../../../../sources/hwdsl2__self-hosted-ai-stack/README-ru.md)<br>[README-zh-Hant.md](../../../../sources/hwdsl2__self-hosted-ai-stack/README-zh-Hant.md)<br>[README-zh.md](../../../../sources/hwdsl2__self-hosted-ai-stack/README-zh.md)<br>[README.md](../../../../sources/hwdsl2__self-hosted-ai-stack/README.md)<br>[stacks/voice-pipeline/README-ru.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/README-ru.md)<br>[stacks/voice-pipeline/README-zh-Hant.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/README-zh-Hant.md)<br>[stacks/voice-pipeline/README-zh.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/README-zh.md)<br>[stacks/voice-pipeline/README.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 19 | [docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.cuda.yml)<br>[docker-compose.proxy.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.proxy.yml)<br>[docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.yml)<br>[stacks/voice-pipeline/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.cuda.yml)<br>[stacks/voice-pipeline/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.yml)<br>[stacks/voice-chat/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-chat/docker-compose.cuda.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docker-compose.cuda.yml`, `docker-compose.proxy.yml`, `docker-compose.yml`.
2. retrieval/memory/indexing 확인: `stacks/rag-pipeline-full/docker-compose.cuda.yml`, `stacks/rag-pipeline-full/docker-compose.yml`, `stacks/rag-pipeline-full/README-ru.md`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Deploy a complete self hosted AI stack with Docker Compose Ollama, LiteLLM, AnythingLLM, Whisper, WhisperLive, Kokoro, E. 핵심 구조 신호는 Shell, docker-compose.yml, README.md, ci, docs, docker이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
