# AI 인프라/서빙 소스 인사이트

생성 시각: 2026-06-18T15:47:35.104Z

모델 서빙, API server, 배포, Docker/Kubernetes, runtime adapter

## 요약

- 조사 단위: AI 인프라/서빙 카테고리에 속한 75개 source-scanned 레포입니다.
- 포함 범위: trend-linked 69개, key source reference 774개, median source depth 111입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

AI 인프라/서빙 카테고리는 75개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 92%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [소스 딥다이브](../../../source-deep-dives/README.md) | 소스 경로 근거와 레포별 딥다이브. |
| [레포별 소스 딥다이브](../../../source-deep-dives/repositories/README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 역할군 페이지. |
| [소스 트렌드 인사이트](../../README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [상세 비교 리포트](../../comparative-report.md) | 카테고리 간 차이와 대표 레포 판단표. |
| [카테고리별 소스 인사이트](../README.md) | 카테고리 기준의 소스 인사이트 페이지. |
| [표/CSV 목차](../../../tables/README.md) | CSV와 표 중심 탐색. |


## 카테고리 인사이트

- AI 인프라/서빙 카테고리는 75개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 92%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (72), retrieval/vector path (71), agent/tool runtime (68)이고, 파일 근거 bucket은 docs (75), eval (72), retrieval (71), agentRuntime (68) 순서로 강합니다.
- MCP/tool protocol 표면이 44%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 95%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 79%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 96%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 64%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 49%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## 이 카테고리 비교 총평

| 항목 | 판단 |
| --- | --- |
| 읽는 목적 | 모델 서빙, API, 컨테이너, 배포, runtime adapter를 운영 기준으로 비교할 때 쓴다. |
| 강점 | 트렌드 연결률 92%로 현재성 강함; test/eval coverage 96%; retrieval/memory 경로 95% |
| 약점/검증 포인트 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | tests-evals 96%, retrieval-memory 95%, agent-runtime 91%, spec-artifacts 79%, cli-first 76% |
| 대표 bucket | docs 100%, eval 96%, retrieval 95%, agentRuntime 91%, config 91% |
| 대표 언어 | Python 30, Go 9, C++ 8 |
| 소스 근거 위치 | 소스 근거가 평균 이상, 레포당 핵심 참조 10.3개 |
| 결론 | 모델 서빙, API, 컨테이너, 배포, runtime adapter를 운영 기준으로 비교할 때 쓴다. 먼저 Mintplex-Labs/anything-llm를 구조 기준점으로 보고, 현재성은 Mintplex-Labs/anything-llm와 대조한다. |

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 75 |
| 트렌드 연결 레포 | 69 |
| 글로벌 / 한국 트렌드 수 | 59 / 12 |
| 글로벌/한국 동시 포착 | 2 |
| 최대 / 중앙 트렌드 점수 | 242 / 140 |
| 전체 / 중앙 stars | 604742 / 1070 |
| 핵심 소스 참조 | 774 |
| 중앙 파일 수 | 692 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
| --- | ---: |
| tests-evals | 72 |
| retrieval-memory | 71 |
| agent-runtime | 68 |
| spec-artifacts | 59 |
| cli-first | 57 |
| api/server | 48 |
| container-deploy | 48 |
| security-policy | 48 |
| mcp/protocol | 35 |
| agent-instructions | 33 |
| model-runtime | 22 |
| web-runtime | 13 |


### 구조 패턴

| 신호 | 수 |
| --- | ---: |
| eval/test harness | 72 |
| retrieval/vector path | 71 |
| agent/tool runtime | 68 |
| spec/docs-driven | 59 |
| cli-first | 57 |
| api/server | 48 |
| security/policy surface | 48 |
| containerized deploy | 42 |
| monorepo/workspace | 10 |
| ui/extension surface | 4 |


### 근거 bucket coverage

| 신호 | 수 |
| --- | ---: |
| docs | 75 |
| eval | 72 |
| retrieval | 71 |
| agentRuntime | 68 |
| config | 68 |
| ci | 65 |
| spec | 59 |
| entrypoints | 58 |
| container | 48 |
| security | 48 |
| instruction | 37 |
| mcp | 33 |


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| modelRuntime | 27 |
| llmProviders | 20 |
| webRuntime | 20 |
| agentProtocols | 14 |
| observability | 12 |
| developerSurface | 11 |
| agentFrameworks | 10 |
| vectorStores | 8 |
| browserAutomation | 3 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| utility | 33 |
| test | 23 |
| build | 21 |
| quality | 21 |
| serve-dev | 16 |
| entrypoint | 2 |
| container | 1 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | AI 인프라/서빙 | 588 | 242 | 61740 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/Mintplex-Labs__anything-llm.md) / [보고서](../../../global-trending/repositories/Mintplex-Labs__anything-llm.md) / [소스](../../../../sources/Mintplex-Labs__anything-llm) |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | AI 인프라/서빙 | 547 | 199 | 142039 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/open-webui__open-webui.md) / [보고서](../../../global-trending/repositories/open-webui__open-webui.md) / [소스](../../../../sources/open-webui__open-webui) |
| [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) | AI 인프라/서빙 | 502 | 176 | 14921 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/MODSetter__SurfSense.md) / [보고서](../../../global-trending/repositories/MODSetter__SurfSense.md) / [소스](../../../../sources/MODSetter__SurfSense) |
| [stacklok/toolhive](https://github.com/stacklok/toolhive) | AI 인프라/서빙 | 497 | 184 | 1889 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/stacklok__toolhive.md) / [보고서](../../../global-trending/repositories/stacklok__toolhive.md) / [소스](../../../../sources/stacklok__toolhive) |
| [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) | AI 인프라/서빙 | 489 | 176 | 2989 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/pipeshub-ai__pipeshub-ai.md) / [보고서](../../../global-trending/repositories/pipeshub-ai__pipeshub-ai.md) / [소스](../../../../sources/pipeshub-ai__pipeshub-ai) |
| [raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) | AI 인프라/서빙 | 478 | 177 | 2902 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, model-runtime, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/raullenchai__Rapid-MLX.md) / [보고서](../../../global-trending/repositories/raullenchai__Rapid-MLX.md) / [소스](../../../../sources/raullenchai__Rapid-MLX) |
| [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | AI 인프라/서빙 | 474 | 162 | 8493 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/LearningCircuit__local-deep-research.md) / [보고서](../../../global-trending/repositories/LearningCircuit__local-deep-research.md) / [소스](../../../../sources/LearningCircuit__local-deep-research) |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | AI 인프라/서빙 | 469 | 161 | 12202 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/StarTrail-org__LEANN.md) / [보고서](../../../global-trending/repositories/StarTrail-org__LEANN.md) / [소스](../../../../sources/StarTrail-org__LEANN) |
| [crmne/ruby_llm](https://github.com/crmne/ruby_llm) | AI 인프라/서빙 | 467 | 181 | 4028 | Ruby | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/crmne__ruby_llm.md) / [보고서](../../../global-trending/repositories/crmne__ruby_llm.md) / [소스](../../../../sources/crmne__ruby_llm) |
| [containers/ramalama](https://github.com/containers/ramalama) | AI 인프라/서빙 | 466 | 171 | 2902 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/containers__ramalama.md) / [보고서](../../../global-trending/repositories/containers__ramalama.md) / [소스](../../../../sources/containers__ramalama) |
| [apocas/restai](https://github.com/apocas/restai) | AI 인프라/서빙 | 455 | 162 | 510 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/apocas__restai.md) / [보고서](../../../global-trending/repositories/apocas__restai.md) / [소스](../../../../sources/apocas__restai) |
| [mozilla-ai/llamafile](https://github.com/mozilla-ai/llamafile) | AI 인프라/서빙 | 450 | 167 | 24999 | C++ | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/mozilla-ai__llamafile.md) / [보고서](../../../global-trending/repositories/mozilla-ai__llamafile.md) / [소스](../../../../sources/mozilla-ai__llamafile) |
| [hexabot-ai/Hexabot](https://github.com/hexabot-ai/Hexabot) | AI 인프라/서빙 | 449 | 154 | 974 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/hexabot-ai__Hexabot.md) / [보고서](../../../global-trending/repositories/hexabot-ai__Hexabot.md) / [소스](../../../../sources/hexabot-ai__Hexabot) |
| [Light-Heart-Labs/DreamServer](https://github.com/Light-Heart-Labs/DreamServer) | AI 인프라/서빙 | 448 | 154 | 2079 | Shell | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/Light-Heart-Labs__DreamServer.md) / [보고서](../../../global-trending/repositories/Light-Heart-Labs__DreamServer.md) / [소스](../../../../sources/Light-Heart-Labs__DreamServer) |
| [superlinked/sie](https://github.com/superlinked/sie) | AI 인프라/서빙 | 439 | 153 | 2053 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/superlinked__sie.md) / [보고서](../../../global-trending/repositories/superlinked__sie.md) / [소스](../../../../sources/superlinked__sie) |
| [askalf/dario](https://github.com/askalf/dario) | AI 인프라/서빙 | 438 | 164 | 278 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/askalf__dario.md) / [보고서](../../../global-trending/repositories/askalf__dario.md) / [소스](../../../../sources/askalf__dario) |
| [schmitech/orbit](https://github.com/schmitech/orbit) | AI 인프라/서빙 | 433 | 154 | 282 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/schmitech__orbit.md) / [보고서](../../../global-trending/repositories/schmitech__orbit.md) / [소스](../../../../sources/schmitech__orbit) |
| [agents-flex/agents-flex](https://github.com/agents-flex/agents-flex) | AI 인프라/서빙 | 393 | 173 | 1005 | Java | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/agents-flex__agents-flex.md) / [보고서](../../../global-trending/repositories/agents-flex__agents-flex.md) / [소스](../../../../sources/agents-flex__agents-flex) |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | AI 인프라/서빙 | 386 | 162 | 4923 | Python | cli-first, agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Andyyyy64__whichllm.md) / [보고서](../../../global-trending/repositories/Andyyyy64__whichllm.md) / [소스](../../../../sources/Andyyyy64__whichllm) |
| [johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction](https://github.com/johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) | AI 인프라/서빙 | 360 | 160 | 584 | Jupyter Notebook | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) / [보고서](../../../global-trending/repositories/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) / [소스](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) |


## 대표 레포 판단표

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 언어 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 위험/확인 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 588 | 242 | JavaScript | MCP/tool 연결 방식, retrieval/memory 구조, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/Mintplex-Labs__anything-llm.md) / [보고서](../../../global-trending/repositories/Mintplex-Labs__anything-llm.md) / [소스](../../../../sources/Mintplex-Labs__anything-llm) |
| 2 | [open-webui/open-webui](https://github.com/open-webui/open-webui) | 547 | 199 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/open-webui__open-webui.md) / [보고서](../../../global-trending/repositories/open-webui__open-webui.md) / [소스](../../../../sources/open-webui__open-webui) |
| 3 | [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) | 502 | 176 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/MODSetter__SurfSense.md) / [보고서](../../../global-trending/repositories/MODSetter__SurfSense.md) / [소스](../../../../sources/MODSetter__SurfSense) |
| 4 | [stacklok/toolhive](https://github.com/stacklok/toolhive) | 497 | 184 | Go | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/stacklok__toolhive.md) / [보고서](../../../global-trending/repositories/stacklok__toolhive.md) / [소스](../../../../sources/stacklok__toolhive) |
| 5 | [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) | 489 | 176 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/pipeshub-ai__pipeshub-ai.md) / [보고서](../../../global-trending/repositories/pipeshub-ai__pipeshub-ai.md) / [소스](../../../../sources/pipeshub-ai__pipeshub-ai) |
| 6 | [raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) | 478 | 177 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/raullenchai__Rapid-MLX.md) / [보고서](../../../global-trending/repositories/raullenchai__Rapid-MLX.md) / [소스](../../../../sources/raullenchai__Rapid-MLX) |
| 7 | [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | 474 | 162 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/LearningCircuit__local-deep-research.md) / [보고서](../../../global-trending/repositories/LearningCircuit__local-deep-research.md) / [소스](../../../../sources/LearningCircuit__local-deep-research) |
| 8 | [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 469 | 161 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/StarTrail-org__LEANN.md) / [보고서](../../../global-trending/repositories/StarTrail-org__LEANN.md) / [소스](../../../../sources/StarTrail-org__LEANN) |
| 9 | [crmne/ruby_llm](https://github.com/crmne/ruby_llm) | 467 | 181 | Ruby | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/crmne__ruby_llm.md) / [보고서](../../../global-trending/repositories/crmne__ruby_llm.md) / [소스](../../../../sources/crmne__ruby_llm) |
| 10 | [containers/ramalama](https://github.com/containers/ramalama) | 466 | 171 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/containers__ramalama.md) / [보고서](../../../global-trending/repositories/containers__ramalama.md) / [소스](../../../../sources/containers__ramalama) |
| 11 | [dyad-sh/dyad](https://github.com/dyad-sh/dyad) | 464 | 150 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/dyad-sh__dyad.md) / [보고서](../../../global-trending/repositories/dyad-sh__dyad.md) / [소스](../../../../sources/dyad-sh__dyad) |
| 12 | [apocas/restai](https://github.com/apocas/restai) | 455 | 162 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/apocas__restai.md) / [보고서](../../../global-trending/repositories/apocas__restai.md) / [소스](../../../../sources/apocas__restai) |
| 13 | [LMCache/LMCache](https://github.com/LMCache/LMCache) | 453 | 147 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/LMCache__LMCache.md) / [보고서](../../../global-trending/repositories/LMCache__LMCache.md) / [소스](../../../../sources/LMCache__LMCache) |
| 14 | [sgl-project/sglang](https://github.com/sgl-project/sglang) | 451 | 136 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/sgl-project__sglang.md) / [보고서](../../../global-trending/repositories/sgl-project__sglang.md) / [소스](../../../../sources/sgl-project__sglang) |
| 15 | [mozilla-ai/llamafile](https://github.com/mozilla-ai/llamafile) | 450 | 167 | C++ | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/mozilla-ai__llamafile.md) / [보고서](../../../global-trending/repositories/mozilla-ai__llamafile.md) / [소스](../../../../sources/mozilla-ai__llamafile) |
| 16 | [RunanywhereAI/runanywhere-sdks](https://github.com/RunanywhereAI/runanywhere-sdks) | 450 | 144 | C++ | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/RunanywhereAI__runanywhere-sdks.md) / [보고서](../../../global-trending/repositories/RunanywhereAI__runanywhere-sdks.md) / [소스](../../../../sources/RunanywhereAI__runanywhere-sdks) |
| 17 | [hexabot-ai/Hexabot](https://github.com/hexabot-ai/Hexabot) | 449 | 154 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/hexabot-ai__Hexabot.md) / [보고서](../../../global-trending/repositories/hexabot-ai__Hexabot.md) / [소스](../../../../sources/hexabot-ai__Hexabot) |
| 18 | [xorbitsai/inference](https://github.com/xorbitsai/inference) | 449 | 146 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/xorbitsai__inference.md) / [보고서](../../../global-trending/repositories/xorbitsai__inference.md) / [소스](../../../../sources/xorbitsai__inference) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | AI 인프라/서빙 | 588 | 242 | 61740 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/Mintplex-Labs__anything-llm.md) / [보고서](../../../global-trending/repositories/Mintplex-Labs__anything-llm.md) / [소스](../../../../sources/Mintplex-Labs__anything-llm) |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | AI 인프라/서빙 | 547 | 199 | 142039 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/open-webui__open-webui.md) / [보고서](../../../global-trending/repositories/open-webui__open-webui.md) / [소스](../../../../sources/open-webui__open-webui) |
| [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) | AI 인프라/서빙 | 502 | 176 | 14921 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/MODSetter__SurfSense.md) / [보고서](../../../global-trending/repositories/MODSetter__SurfSense.md) / [소스](../../../../sources/MODSetter__SurfSense) |
| [stacklok/toolhive](https://github.com/stacklok/toolhive) | AI 인프라/서빙 | 497 | 184 | 1889 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/stacklok__toolhive.md) / [보고서](../../../global-trending/repositories/stacklok__toolhive.md) / [소스](../../../../sources/stacklok__toolhive) |
| [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) | AI 인프라/서빙 | 489 | 176 | 2989 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/pipeshub-ai__pipeshub-ai.md) / [보고서](../../../global-trending/repositories/pipeshub-ai__pipeshub-ai.md) / [소스](../../../../sources/pipeshub-ai__pipeshub-ai) |
| [raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) | AI 인프라/서빙 | 478 | 177 | 2902 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, model-runtime, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/raullenchai__Rapid-MLX.md) / [보고서](../../../global-trending/repositories/raullenchai__Rapid-MLX.md) / [소스](../../../../sources/raullenchai__Rapid-MLX) |
| [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | AI 인프라/서빙 | 474 | 162 | 8493 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/LearningCircuit__local-deep-research.md) / [보고서](../../../global-trending/repositories/LearningCircuit__local-deep-research.md) / [소스](../../../../sources/LearningCircuit__local-deep-research) |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | AI 인프라/서빙 | 469 | 161 | 12202 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/StarTrail-org__LEANN.md) / [보고서](../../../global-trending/repositories/StarTrail-org__LEANN.md) / [소스](../../../../sources/StarTrail-org__LEANN) |
| [crmne/ruby_llm](https://github.com/crmne/ruby_llm) | AI 인프라/서빙 | 467 | 181 | 4028 | Ruby | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/crmne__ruby_llm.md) / [보고서](../../../global-trending/repositories/crmne__ruby_llm.md) / [소스](../../../../sources/crmne__ruby_llm) |
| [containers/ramalama](https://github.com/containers/ramalama) | AI 인프라/서빙 | 466 | 171 | 2902 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/containers__ramalama.md) / [보고서](../../../global-trending/repositories/containers__ramalama.md) / [소스](../../../../sources/containers__ramalama) |
| [dyad-sh/dyad](https://github.com/dyad-sh/dyad) | AI 인프라/서빙 | 464 | 150 | 20657 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/dyad-sh__dyad.md) / [보고서](../../../global-trending/repositories/dyad-sh__dyad.md) / [소스](../../../../sources/dyad-sh__dyad) |
| [apocas/restai](https://github.com/apocas/restai) | AI 인프라/서빙 | 455 | 162 | 510 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/apocas__restai.md) / [보고서](../../../global-trending/repositories/apocas__restai.md) / [소스](../../../../sources/apocas__restai) |
| [LMCache/LMCache](https://github.com/LMCache/LMCache) | AI 인프라/서빙 | 453 | 147 | 9269 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/LMCache__LMCache.md) / [보고서](../../../global-trending/repositories/LMCache__LMCache.md) / [소스](../../../../sources/LMCache__LMCache) |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | AI 인프라/서빙 | 451 | 136 | 29137 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/sgl-project__sglang.md) / [보고서](../../../global-trending/repositories/sgl-project__sglang.md) / [소스](../../../../sources/sgl-project__sglang) |
| [mozilla-ai/llamafile](https://github.com/mozilla-ai/llamafile) | AI 인프라/서빙 | 450 | 167 | 24999 | C++ | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/mozilla-ai__llamafile.md) / [보고서](../../../global-trending/repositories/mozilla-ai__llamafile.md) / [소스](../../../../sources/mozilla-ai__llamafile) |
| [RunanywhereAI/runanywhere-sdks](https://github.com/RunanywhereAI/runanywhere-sdks) | AI 인프라/서빙 | 450 | 144 | 10329 | C++ | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/RunanywhereAI__runanywhere-sdks.md) / [보고서](../../../global-trending/repositories/RunanywhereAI__runanywhere-sdks.md) / [소스](../../../../sources/RunanywhereAI__runanywhere-sdks) |
| [hexabot-ai/Hexabot](https://github.com/hexabot-ai/Hexabot) | AI 인프라/서빙 | 449 | 154 | 974 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/hexabot-ai__Hexabot.md) / [보고서](../../../global-trending/repositories/hexabot-ai__Hexabot.md) / [소스](../../../../sources/hexabot-ai__Hexabot) |
| [xorbitsai/inference](https://github.com/xorbitsai/inference) | AI 인프라/서빙 | 449 | 146 | 9359 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/xorbitsai__inference.md) / [보고서](../../../global-trending/repositories/xorbitsai__inference.md) / [소스](../../../../sources/xorbitsai__inference) |
| [Light-Heart-Labs/DreamServer](https://github.com/Light-Heart-Labs/DreamServer) | AI 인프라/서빙 | 448 | 154 | 2079 | Shell | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/Light-Heart-Labs__DreamServer.md) / [보고서](../../../global-trending/repositories/Light-Heart-Labs__DreamServer.md) / [소스](../../../../sources/Light-Heart-Labs__DreamServer) |
| [lemonade-sdk/lemonade](https://github.com/lemonade-sdk/lemonade) | AI 인프라/서빙 | 440 | 148 | 4507 | C++ | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/lemonade-sdk__lemonade.md) / [보고서](../../../global-trending/repositories/lemonade-sdk__lemonade.md) / [소스](../../../../sources/lemonade-sdk__lemonade) |
| [superlinked/sie](https://github.com/superlinked/sie) | AI 인프라/서빙 | 439 | 153 | 2053 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/superlinked__sie.md) / [보고서](../../../global-trending/repositories/superlinked__sie.md) / [소스](../../../../sources/superlinked__sie) |
| [helixml/helix](https://github.com/helixml/helix) | AI 인프라/서빙 | 439 | 148 | 781 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/helixml__helix.md) / [보고서](../../../global-trending/repositories/helixml__helix.md) / [소스](../../../../sources/helixml__helix) |
| [askalf/dario](https://github.com/askalf/dario) | AI 인프라/서빙 | 438 | 164 | 278 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/askalf__dario.md) / [보고서](../../../global-trending/repositories/askalf__dario.md) / [소스](../../../../sources/askalf__dario) |
| [containers/kubernetes-mcp-server](https://github.com/containers/kubernetes-mcp-server) | AI 인프라/서빙 | 438 | 149 | 1699 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/containers__kubernetes-mcp-server.md) / [보고서](../../../global-trending/repositories/containers__kubernetes-mcp-server.md) / [소스](../../../../sources/containers__kubernetes-mcp-server) |
| [gpustack/gpustack](https://github.com/gpustack/gpustack) | AI 인프라/서빙 | 438 | 142 | 5175 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/gpustack__gpustack.md) / [보고서](../../../global-trending/repositories/gpustack__gpustack.md) / [소스](../../../../sources/gpustack__gpustack) |
| [PaddlePaddle/FastDeploy](https://github.com/PaddlePaddle/FastDeploy) | AI 인프라/서빙 | 436 | 140 | 3698 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/PaddlePaddle__FastDeploy.md) / [보고서](../../../global-trending/repositories/PaddlePaddle__FastDeploy.md) / [소스](../../../../sources/PaddlePaddle__FastDeploy) |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | AI 인프라/서빙 | 434 | 137 | 2944 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/NVIDIA__Model-Optimizer.md) / [보고서](../../../global-trending/repositories/NVIDIA__Model-Optimizer.md) / [소스](../../../../sources/NVIDIA__Model-Optimizer) |
| [schmitech/orbit](https://github.com/schmitech/orbit) | AI 인프라/서빙 | 433 | 154 | 282 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/schmitech__orbit.md) / [보고서](../../../global-trending/repositories/schmitech__orbit.md) / [소스](../../../../sources/schmitech__orbit) |
| [kvcache-ai/ktransformers](https://github.com/kvcache-ai/ktransformers) | AI 인프라/서빙 | 433 | 134 | 17302 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/kvcache-ai__ktransformers.md) / [보고서](../../../global-trending/repositories/kvcache-ai__ktransformers.md) / [소스](../../../../sources/kvcache-ai__ktransformers) |
| [oumi-ai/oumi](https://github.com/oumi-ai/oumi) | AI 인프라/서빙 | 432 | 132 | 9317 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/oumi-ai__oumi.md) / [보고서](../../../global-trending/repositories/oumi-ai__oumi.md) / [소스](../../../../sources/oumi-ai__oumi) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [superlinked/sie](https://github.com/superlinked/sie) | AI 인프라/서빙 | 439 | 153 | 2053 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/superlinked__sie.md) / [보고서](../../../global-trending/repositories/superlinked__sie.md) / [소스](../../../../sources/superlinked__sie) |
| [schmitech/orbit](https://github.com/schmitech/orbit) | AI 인프라/서빙 | 433 | 154 | 282 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/schmitech__orbit.md) / [보고서](../../../global-trending/repositories/schmitech__orbit.md) / [소스](../../../../sources/schmitech__orbit) |
| [spiceai/spiceai](https://github.com/spiceai/spiceai) | AI 인프라/서빙 | 430 | 141 | 2960 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 15000개 파일에서 스캔이 잘림, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/spiceai__spiceai.md) / [보고서](../../../global-trending/repositories/spiceai__spiceai.md) / [소스](../../../../sources/spiceai__spiceai) |
| [vllm-project/vllm-ascend](https://github.com/vllm-project/vllm-ascend) | AI 인프라/서빙 | 418 | 137 | 2258 | C++ | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/vllm-project__vllm-ascend.md) / [보고서](../../../global-trending/repositories/vllm-project__vllm-ascend.md) / [소스](../../../../sources/vllm-project__vllm-ascend) |
| [agents-flex/agents-flex](https://github.com/agents-flex/agents-flex) | AI 인프라/서빙 | 393 | 173 | 1005 | Java | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/agents-flex__agents-flex.md) / [보고서](../../../global-trending/repositories/agents-flex__agents-flex.md) / [소스](../../../../sources/agents-flex__agents-flex) |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | AI 인프라/서빙 | 386 | 162 | 4923 | Python | cli-first, agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Andyyyy64__whichllm.md) / [보고서](../../../global-trending/repositories/Andyyyy64__whichllm.md) / [소스](../../../../sources/Andyyyy64__whichllm) |
| [SyntheticAutonomicMind/CLIO](https://github.com/SyntheticAutonomicMind/CLIO) | AI 인프라/서빙 | 373 | 136 | 173 | Perl | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/SyntheticAutonomicMind__CLIO.md) / [보고서](../../../global-trending/repositories/SyntheticAutonomicMind__CLIO.md) / [소스](../../../../sources/SyntheticAutonomicMind__CLIO) |
| [memex-lab/memex](https://github.com/memex-lab/memex) | AI 인프라/서빙 | 366 | 139 | 487 | Dart | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/memex-lab__memex.md) / [보고서](../../../global-trending/repositories/memex-lab__memex.md) / [소스](../../../../sources/memex-lab__memex) |
| [johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction](https://github.com/johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) | AI 인프라/서빙 | 360 | 160 | 584 | Jupyter Notebook | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) / [보고서](../../../global-trending/repositories/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) / [소스](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) |
| [Samsung/ONE](https://github.com/Samsung/ONE) | AI 인프라/서빙 | 343 | 105 | 571 | C++ | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 15000개 파일에서 스캔이 잘림, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/Samsung__ONE.md) / [보고서](../../../korea-trending/repositories/Samsung__ONE.md) / [소스](../../../../sources/Samsung__ONE) |
| [ThomasVitale/llm-apps-java-spring-ai](https://github.com/ThomasVitale/llm-apps-java-spring-ai) | AI 인프라/서빙 | 336 | 139 | 753 | Java | agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/ThomasVitale__llm-apps-java-spring-ai.md) / [보고서](../../../global-trending/repositories/ThomasVitale__llm-apps-java-spring-ai.md) / [소스](../../../../sources/ThomasVitale__llm-apps-java-spring-ai) |
| [Palm1r/QodeAssist](https://github.com/Palm1r/QodeAssist) | AI 인프라/서빙 | 315 | 138 | 410 | C++ | agent-runtime, mcp/protocol, tests-evals | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Palm1r__QodeAssist.md) / [보고서](../../../global-trending/repositories/Palm1r__QodeAssist.md) / [소스](../../../../sources/Palm1r__QodeAssist) |
| [cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | AI 인프라/서빙 | 306 | 135 | 23594 | Python | spec-artifacts | spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/cheahjs__free-llm-api-resources.md) / [보고서](../../../global-trending/repositories/cheahjs__free-llm-api-resources.md) / [소스](../../../../sources/cheahjs__free-llm-api-resources) |
| [hwdsl2/self-hosted-ai-stack](https://github.com/hwdsl2/self-hosted-ai-stack) | AI 인프라/서빙 | 281 | 140 | 91 | Shell | retrieval-memory, container-deploy | retrieval-memory, container-deploy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/hwdsl2__self-hosted-ai-stack.md) / [보고서](../../../global-trending/repositories/hwdsl2__self-hosted-ai-stack.md) / [소스](../../../../sources/hwdsl2__self-hosted-ai-stack) |
| [Samsung/TICO](https://github.com/Samsung/TICO) | AI 인프라/서빙 | 271 | 83 | 15 | Python | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/Samsung__TICO.md) / [보고서](../../../korea-trending/repositories/Samsung__TICO.md) / [소스](../../../../sources/Samsung__TICO) |
| [Samsung/walrus](https://github.com/Samsung/walrus) | AI 인프라/서빙 | 270 | 93 | 74 | WebAssembly | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/Samsung__walrus.md) / [보고서](../../../korea-trending/repositories/Samsung__walrus.md) / [소스](../../../../sources/Samsung__walrus) |
| [MUSE-CODE-SPACE/SLMAgent](https://github.com/MUSE-CODE-SPACE/SLMAgent) | AI 인프라/서빙 | 245 | 98 | 0 | Python | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/MUSE-CODE-SPACE__SLMAgent.md) / [보고서](../../../korea-trending/repositories/MUSE-CODE-SPACE__SLMAgent.md) / [소스](../../../../sources/MUSE-CODE-SPACE__SLMAgent) |
| [AD-Styles/MIND-CARE-Conversational-ChatBot](https://github.com/AD-Styles/MIND-CARE-Conversational-ChatBot) | AI 인프라/서빙 | 204 | 74 | 0 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/AD-Styles__MIND-CARE-Conversational-ChatBot.md) / [보고서](../../../korea-trending/repositories/AD-Styles__MIND-CARE-Conversational-ChatBot.md) / [소스](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot) |
| [line/kubectl-kustomize](https://github.com/line/kubectl-kustomize) | AI 인프라/서빙 | 154 | 70 | 36 | Dockerfile | container-deploy | container-deploy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__kubectl-kustomize.md) / [보고서](../../../korea-trending/repositories/line__kubectl-kustomize.md) / [소스](../../../../sources/line__kubectl-kustomize) |
| [microsoft/BitNet](https://github.com/microsoft/BitNet) | AI 인프라/서빙 | 80 | 0 | 0 | unknown | retrieval-memory, spec-artifacts, tests-evals, security-policy, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/microsoft__BitNet.md) / [보고서](../../../clone-structures/microsoft__BitNet.md) / [소스](../../../../sources/microsoft__BitNet) |
