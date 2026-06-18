# HKUDS/VideoRAG 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

[KDD'2026] "VideoRAG: Chat with Your Videos"

## 요약

- 조사 단위: `sources/HKUDS__VideoRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 118 files, 39 directories, depth score 84, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=Vimo-desktop/src/renderer/index.html, Vimo-desktop/src/renderer/src/pages/settings/index.tsx, Vimo-desktop/src/renderer/src/pages/chat/index.tsx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | HKUDS/VideoRAG |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 3065 |
| Forks | 431 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/HKUDS__VideoRAG](../../../../sources/HKUDS__VideoRAG) |
| 기존 보고서 | [reports/llm-wiki/repositories/HKUDS__VideoRAG.md](../../../llm-wiki/repositories/HKUDS__VideoRAG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 118 / 39 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | VideoRAG-algorithm, Vimo-desktop |
| 상위 확장자 | .py: 51, .tsx: 22, .ts: 19, .png: 6, .json: 5, (none): 5, .md: 3, .js: 2, .css: 1, .html: 1, .ipynb: 1, .sh: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| VideoRAG-algorithm | top-level component | 1 |
| Vimo-desktop | top-level component | 1 |


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
| retrieval | [Vimo-desktop/src/renderer/index.html](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/index.html) | retrieval signal |
| retrieval | [Vimo-desktop/src/renderer/src/pages/settings/index.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/pages/settings/index.tsx) | retrieval signal |
| retrieval | [Vimo-desktop/src/renderer/src/pages/chat/index.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/pages/chat/index.tsx) | retrieval signal |
| retrieval | [Vimo-desktop/src/preload/index.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/preload/index.ts) | retrieval signal |
| entrypoints | [Vimo-desktop/src/renderer/src/App.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/App.tsx) | entrypoints signal |
| entrypoints | [Vimo-desktop/src/renderer/src/main.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/main.tsx) | entrypoints signal |
| entrypoints | [Vimo-desktop/src/main/main.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/main/main.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/HKUDS__VideoRAG/README.md) | docs signal |
| docs | [Vimo-desktop/README.md](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/README.md) | docs signal |
| docs | [VideoRAG-algorithm/README.md](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/README.md) | docs signal |
| eval | [VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py) | eval signal |
| eval | [VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [Vimo-desktop/src/renderer/src/App.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/App.tsx)<br>[Vimo-desktop/src/renderer/src/main.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/main.tsx)<br>[Vimo-desktop/src/main/main.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/main/main.ts) |
| agentRuntime | 7 | [Vimo-desktop/src/renderer/src/hooks/useChat.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useChat.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useChatSessionInfo.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useChatSessionInfo.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useCurrentSessionInfo.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useCurrentSessionInfo.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useResizable.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useResizable.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useVideoRAG.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useVideoRAG.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useVideoRAGService.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useVideoRAGService.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useVideoUpload.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useVideoUpload.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [Vimo-desktop/src/renderer/index.html](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/index.html)<br>[Vimo-desktop/src/renderer/src/pages/settings/index.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/pages/settings/index.tsx)<br>[Vimo-desktop/src/renderer/src/pages/chat/index.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/pages/chat/index.tsx)<br>[Vimo-desktop/src/preload/index.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/preload/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 8 | [VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_parse.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_parse.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_upload.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_upload.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/HKUDS__VideoRAG/README.md)<br>[Vimo-desktop/README.md](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/README.md)<br>[VideoRAG-algorithm/README.md](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/README.md) |
| config | 2 | [Vimo-desktop/package.json](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/package.json)<br>[Vimo-desktop/tsconfig.json](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 8 | [VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `Vimo-desktop/src/renderer/index.html`, `Vimo-desktop/src/renderer/src/pages/settings/index.tsx`, `Vimo-desktop/src/renderer/src/pages/chat/index.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `Vimo-desktop/src/renderer/src/App.tsx`, `Vimo-desktop/src/renderer/src/main.tsx`, `Vimo-desktop/src/main/main.ts`.
3. agent/tool runtime 매핑: `Vimo-desktop/src/renderer/src/hooks/useChat.ts`, `Vimo-desktop/src/renderer/src/hooks/useChatSessionInfo.ts`, `Vimo-desktop/src/renderer/src/hooks/useCurrentSessionInfo.ts`.
4. retrieval/memory/indexing 확인: `Vimo-desktop/src/renderer/index.html`, `Vimo-desktop/src/renderer/src/pages/settings/index.tsx`, `Vimo-desktop/src/renderer/src/pages/chat/index.tsx`.
5. test/eval 파일로 동작 검증: `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py`, `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py`, `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 KDD'2026 "VideoRAG Chat with Your Videos". 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
