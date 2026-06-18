# 일반 AI 오픈소스 소스 인사이트

생성 시각: 2026-06-18T15:47:35.104Z

주요 구조, 의존성 스택, 테스트, 배포, 문서

## 요약

- 조사 단위: 일반 AI 오픈소스 카테고리에 속한 268개 source-scanned 레포입니다.
- 포함 범위: trend-linked 263개, key source reference 1996개, median source depth 60입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

일반 AI 오픈소스 카테고리는 268개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 일반 AI 오픈소스 카테고리는 268개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (203), retrieval/vector path (158), spec/docs-driven (124)이고, 파일 근거 bucket은 docs (266), eval (203), config (170), retrieval (158) 순서로 강합니다.
- RAG, memory, vector/index 경로가 59%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 46%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 76%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- security/policy 소스 경로는 16%에 그칩니다. agent 권한, secret, sandbox가 중요한 카테고리라면 보안 표면 누락을 별도 리스크로 봐야 합니다.

## 이 카테고리 비교 총평

| 항목 | 판단 |
| --- | --- |
| 읽는 목적 | 넓은 AI 오픈소스 후보를 탐색하되, 특정 설계 패턴은 더 세부 카테고리와 대조해서 읽는다. |
| 강점 | 트렌드 연결률 98%로 현재성 강함; test/eval coverage 76% |
| 약점/검증 포인트 | security/policy 경로 16%; CI 경로 40%; 중앙 소스 깊이 60로 직접 확인 필요 |
| 대표 feature | tests-evals 78%, retrieval-memory 59%, spec-artifacts 46%, agent-runtime 34%, cli-first 34% |
| 대표 bucket | docs 99%, eval 76%, config 63%, retrieval 59%, spec 46% |
| 대표 언어 | Python 75, TypeScript 50, Java 26 |
| 소스 근거 위치 | 소스 근거가 평균보다 얕음, 레포당 핵심 참조 7.4개 |
| 결론 | 넓은 AI 오픈소스 후보를 탐색하되, 특정 설계 패턴은 더 세부 카테고리와 대조해서 읽는다. 먼저 Aider-AI/aider를 구조 기준점으로 보고, 현재성은 Aider-AI/aider와 대조한다. |

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 268 |
| 트렌드 연결 레포 | 263 |
| 글로벌 / 한국 트렌드 수 | 9 / 254 |
| 글로벌/한국 동시 포착 | 0 |
| 최대 / 중앙 트렌드 점수 | 175 / 80 |
| 전체 / 중앙 stars | 352233 / 121 |
| 핵심 소스 참조 | 1996 |
| 중앙 파일 수 | 92 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
| --- | ---: |
| tests-evals | 208 |
| retrieval-memory | 158 |
| spec-artifacts | 124 |
| agent-runtime | 91 |
| cli-first | 91 |
| api/server | 62 |
| security-policy | 44 |
| container-deploy | 41 |
| web-runtime | 38 |
| monorepo | 35 |
| model-runtime | 31 |
| agent-instructions | 15 |


### 구조 패턴

| 신호 | 수 |
| --- | ---: |
| eval/test harness | 203 |
| retrieval/vector path | 158 |
| spec/docs-driven | 124 |
| agent/tool runtime | 91 |
| cli-first | 91 |
| api/server | 62 |
| security/policy surface | 44 |
| containerized deploy | 41 |
| monorepo/workspace | 35 |
| ui/extension surface | 28 |
| general source tree | 8 |
| Python source tree | 8 |


### 근거 bucket coverage

| 신호 | 수 |
| --- | ---: |
| docs | 266 |
| eval | 203 |
| config | 170 |
| retrieval | 158 |
| spec | 124 |
| entrypoints | 111 |
| ci | 107 |
| agentRuntime | 91 |
| security | 44 |
| container | 41 |
| instruction | 15 |
| mcp | 6 |


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| webRuntime | 39 |
| modelRuntime | 32 |
| developerSurface | 11 |
| llmProviders | 8 |
| browserAutomation | 6 |
| agentFrameworks | 2 |
| observability | 2 |
| agentProtocols | 1 |
| vectorStores | 1 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| build | 67 |
| utility | 65 |
| quality | 59 |
| test | 58 |
| serve-dev | 49 |
| entrypoint | 7 |
| container | 4 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 일반 AI 오픈소스 | 493 | 175 | 46390 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Aider-AI__aider.md) / [보고서](../../../global-trending/repositories/Aider-AI__aider.md) / [소스](../../../../sources/Aider-AI__aider) |
| [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | 일반 AI 오픈소스 | 487 | 161 | 32363 | Ruby | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/chatwoot__chatwoot.md) / [보고서](../../../global-trending/repositories/chatwoot__chatwoot.md) / [소스](../../../../sources/chatwoot__chatwoot) |
| [toss/es-toolkit](https://github.com/toss/es-toolkit) | 일반 AI 오픈소스 | 471 | 168 | 11148 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/toss__es-toolkit.md) / [보고서](../../../korea-trending/repositories/toss__es-toolkit.md) / [소스](../../../../sources/toss__es-toolkit) |
| [asklokesh/loki-mode](https://github.com/asklokesh/loki-mode) | 일반 AI 오픈소스 | 430 | 140 | 980 | Shell | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/asklokesh__loki-mode.md) / [보고서](../../../global-trending/repositories/asklokesh__loki-mode.md) / [소스](../../../../sources/asklokesh__loki-mode) |
| [line/centraldogma](https://github.com/line/centraldogma) | 일반 AI 오픈소스 | 423 | 161 | 663 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/line__centraldogma.md) / [보고서](../../../korea-trending/repositories/line__centraldogma.md) / [소스](../../../../sources/line__centraldogma) |
| [adbar/trafilatura](https://github.com/adbar/trafilatura) | 일반 AI 오픈소스 | 410 | 149 | 6146 | Python | cli-first, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/adbar__trafilatura.md) / [보고서](../../../global-trending/repositories/adbar__trafilatura.md) / [소스](../../../../sources/adbar__trafilatura) |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 일반 AI 오픈소스 | 409 | 175 | 28014 | Jupyter Notebook | agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/NirDiamant__RAG_Techniques.md) / [보고서](../../../global-trending/repositories/NirDiamant__RAG_Techniques.md) / [소스](../../../../sources/NirDiamant__RAG_Techniques) |
| [naver/billboard.js](https://github.com/naver/billboard.js) | 일반 AI 오픈소스 | 394 | 122 | 5982 | TypeScript | monorepo, cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/naver__billboard.js.md) / [보고서](../../../korea-trending/repositories/naver__billboard.js.md) / [소스](../../../../sources/naver__billboard.js) |
| [Samsung/TizenRT](https://github.com/Samsung/TizenRT) | 일반 AI 오픈소스 | 387 | 119 | 642 | C | monorepo, cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 15000개 파일에서 스캔이 잘림 | [소스 딥다이브](../../../source-deep-dives/repositories/9/Samsung__TizenRT.md) / [보고서](../../../korea-trending/repositories/Samsung__TizenRT.md) / [소스](../../../../sources/Samsung__TizenRT) |
| [toss/es-hangul](https://github.com/toss/es-hangul) | 일반 AI 오픈소스 | 379 | 126 | 1829 | TypeScript | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/toss__es-hangul.md) / [보고서](../../../korea-trending/repositories/toss__es-hangul.md) / [소스](../../../../sources/toss__es-hangul) |
| [SonarSource/sonarqube-cli](https://github.com/SonarSource/sonarqube-cli) | 일반 AI 오픈소스 | 378 | 133 | 192 | TypeScript | cli-first, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/SonarSource__sonarqube-cli.md) / [보고서](../../../global-trending/repositories/SonarSource__sonarqube-cli.md) / [소스](../../../../sources/SonarSource__sonarqube-cli) |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | 일반 AI 오픈소스 | 374 | 150 | 55166 | Python | api/server, agent-runtime, tests-evals, model-runtime, web-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/karpathy__nanochat.md) / [보고서](../../../global-trending/repositories/karpathy__nanochat.md) / [소스](../../../../sources/karpathy__nanochat) |
| [toss/suspensive](https://github.com/toss/suspensive) | 일반 AI 오픈소스 | 374 | 118 | 1027 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/toss__suspensive.md) / [보고서](../../../korea-trending/repositories/toss__suspensive.md) / [소스](../../../../sources/toss__suspensive) |
| [cloudwego/eino](https://github.com/cloudwego/eino) | 일반 AI 오픈소스 | 371 | 133 | 11850 | Go | agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/cloudwego__eino.md) / [보고서](../../../global-trending/repositories/cloudwego__eino.md) / [소스](../../../../sources/cloudwego__eino) |
| [naver/nbase-arc](https://github.com/naver/nbase-arc) | 일반 AI 오픈소스 | 352 | 123 | 180 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/naver__nbase-arc.md) / [보고서](../../../korea-trending/repositories/naver__nbase-arc.md) / [소스](../../../../sources/naver__nbase-arc) |
| [line/webpack.kr](https://github.com/line/webpack.kr) | 일반 AI 오픈소스 | 348 | 121 | 93 | MDX | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/line__webpack.kr.md) / [보고서](../../../korea-trending/repositories/line__webpack.kr.md) / [소스](../../../../sources/line__webpack.kr) |
| [SaiAkhil066/CORTEX-AI-SUPER-RAG](https://github.com/SaiAkhil066/CORTEX-AI-SUPER-RAG) | 일반 AI 오픈소스 | 312 | 138 | 1727 | Python | retrieval-memory, spec-artifacts, container-deploy, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) / [보고서](../../../global-trending/repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) / [소스](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG) |
| [Samsung/rlottie](https://github.com/Samsung/rlottie) | 일반 AI 오픈소스 | 285 | 118 | 1407 | C++ | retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/Samsung__rlottie.md) / [보고서](../../../korea-trending/repositories/Samsung__rlottie.md) / [소스](../../../../sources/Samsung__rlottie) |
| [kakaobrain/kogpt](https://github.com/kakaobrain/kogpt) | 일반 AI 오픈소스 | 267 | 119 | 1012 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/kakaobrain__kogpt.md) / [보고서](../../../korea-trending/repositories/kakaobrain__kogpt.md) / [소스](../../../../sources/kakaobrain__kogpt) |
| [naver/fe-news](https://github.com/naver/fe-news) | 일반 AI 오픈소스 | 255 | 118 | 6268 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/naver__fe-news.md) / [보고서](../../../korea-trending/repositories/naver__fe-news.md) / [소스](../../../../sources/naver__fe-news) |


## 대표 레포 판단표

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 언어 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 위험/확인 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [Aider-AI/aider](https://github.com/Aider-AI/aider) | 493 | 175 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 배포 구조 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Aider-AI__aider.md) / [보고서](../../../global-trending/repositories/Aider-AI__aider.md) / [소스](../../../../sources/Aider-AI__aider) |
| 2 | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | 487 | 161 | Ruby | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/chatwoot__chatwoot.md) / [보고서](../../../global-trending/repositories/chatwoot__chatwoot.md) / [소스](../../../../sources/chatwoot__chatwoot) |
| 3 | [toss/es-toolkit](https://github.com/toss/es-toolkit) | 471 | 168 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/toss__es-toolkit.md) / [보고서](../../../korea-trending/repositories/toss__es-toolkit.md) / [소스](../../../../sources/toss__es-toolkit) |
| 4 | [asklokesh/loki-mode](https://github.com/asklokesh/loki-mode) | 430 | 140 | Shell | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/asklokesh__loki-mode.md) / [보고서](../../../global-trending/repositories/asklokesh__loki-mode.md) / [소스](../../../../sources/asklokesh__loki-mode) |
| 5 | [line/centraldogma](https://github.com/line/centraldogma) | 423 | 161 | Java | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/line__centraldogma.md) / [보고서](../../../korea-trending/repositories/line__centraldogma.md) / [소스](../../../../sources/line__centraldogma) |
| 6 | [adbar/trafilatura](https://github.com/adbar/trafilatura) | 410 | 149 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/adbar__trafilatura.md) / [보고서](../../../global-trending/repositories/adbar__trafilatura.md) / [소스](../../../../sources/adbar__trafilatura) |
| 7 | [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 409 | 175 | Jupyter Notebook | retrieval/memory 구조, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 대표 feature 일치: agent-runtime, retrieval-memory, tests-evals | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/NirDiamant__RAG_Techniques.md) / [보고서](../../../global-trending/repositories/NirDiamant__RAG_Techniques.md) / [소스](../../../../sources/NirDiamant__RAG_Techniques) |
| 8 | [naver/billboard.js](https://github.com/naver/billboard.js) | 394 | 122 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/naver__billboard.js.md) / [보고서](../../../korea-trending/repositories/naver__billboard.js.md) / [소스](../../../../sources/naver__billboard.js) |
| 9 | [Samsung/TizenRT](https://github.com/Samsung/TizenRT) | 387 | 119 | C | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 15000개 파일에서 스캔이 잘림 | [소스 딥다이브](../../../source-deep-dives/repositories/9/Samsung__TizenRT.md) / [보고서](../../../korea-trending/repositories/Samsung__TizenRT.md) / [소스](../../../../sources/Samsung__TizenRT) |
| 10 | [toss/es-hangul](https://github.com/toss/es-hangul) | 379 | 126 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/toss__es-hangul.md) / [보고서](../../../korea-trending/repositories/toss__es-hangul.md) / [소스](../../../../sources/toss__es-hangul) |
| 11 | [SonarSource/sonarqube-cli](https://github.com/SonarSource/sonarqube-cli) | 378 | 133 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/SonarSource__sonarqube-cli.md) / [보고서](../../../global-trending/repositories/SonarSource__sonarqube-cli.md) / [소스](../../../../sources/SonarSource__sonarqube-cli) |
| 12 | [daangn/seed-design](https://github.com/daangn/seed-design) | 377 | 106 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/daangn__seed-design.md) / [보고서](../../../korea-trending/repositories/daangn__seed-design.md) / [소스](../../../../sources/daangn__seed-design) |
| 13 | [karpathy/nanochat](https://github.com/karpathy/nanochat) | 374 | 150 | Python | 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, tests-evals; 확인 필요: entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/karpathy__nanochat.md) / [보고서](../../../global-trending/repositories/karpathy__nanochat.md) / [소스](../../../../sources/karpathy__nanochat) |
| 14 | [toss/suspensive](https://github.com/toss/suspensive) | 374 | 118 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/toss__suspensive.md) / [보고서](../../../korea-trending/repositories/toss__suspensive.md) / [소스](../../../../sources/toss__suspensive) |
| 15 | [daangn/stackflow](https://github.com/daangn/stackflow) | 372 | 109 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/daangn__stackflow.md) / [보고서](../../../korea-trending/repositories/daangn__stackflow.md) / [소스](../../../../sources/daangn__stackflow) |
| 16 | [cloudwego/eino](https://github.com/cloudwego/eino) | 371 | 133 | Go | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/cloudwego__eino.md) / [보고서](../../../global-trending/repositories/cloudwego__eino.md) / [소스](../../../../sources/cloudwego__eino) |
| 17 | [nhn/tui.calendar](https://github.com/nhn/tui.calendar) | 368 | 99 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/nhn__tui.calendar.md) / [보고서](../../../korea-trending/repositories/nhn__tui.calendar.md) / [소스](../../../../sources/nhn__tui.calendar) |
| 18 | [line/abc-user-feedback](https://github.com/line/abc-user-feedback) | 364 | 108 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/line__abc-user-feedback.md) / [보고서](../../../korea-trending/repositories/line__abc-user-feedback.md) / [소스](../../../../sources/line__abc-user-feedback) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 일반 AI 오픈소스 | 493 | 175 | 46390 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Aider-AI__aider.md) / [보고서](../../../global-trending/repositories/Aider-AI__aider.md) / [소스](../../../../sources/Aider-AI__aider) |
| [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | 일반 AI 오픈소스 | 487 | 161 | 32363 | Ruby | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/chatwoot__chatwoot.md) / [보고서](../../../global-trending/repositories/chatwoot__chatwoot.md) / [소스](../../../../sources/chatwoot__chatwoot) |
| [toss/es-toolkit](https://github.com/toss/es-toolkit) | 일반 AI 오픈소스 | 471 | 168 | 11148 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/toss__es-toolkit.md) / [보고서](../../../korea-trending/repositories/toss__es-toolkit.md) / [소스](../../../../sources/toss__es-toolkit) |
| [asklokesh/loki-mode](https://github.com/asklokesh/loki-mode) | 일반 AI 오픈소스 | 430 | 140 | 980 | Shell | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/asklokesh__loki-mode.md) / [보고서](../../../global-trending/repositories/asklokesh__loki-mode.md) / [소스](../../../../sources/asklokesh__loki-mode) |
| [line/centraldogma](https://github.com/line/centraldogma) | 일반 AI 오픈소스 | 423 | 161 | 663 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/line__centraldogma.md) / [보고서](../../../korea-trending/repositories/line__centraldogma.md) / [소스](../../../../sources/line__centraldogma) |
| [adbar/trafilatura](https://github.com/adbar/trafilatura) | 일반 AI 오픈소스 | 410 | 149 | 6146 | Python | cli-first, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/adbar__trafilatura.md) / [보고서](../../../global-trending/repositories/adbar__trafilatura.md) / [소스](../../../../sources/adbar__trafilatura) |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 일반 AI 오픈소스 | 409 | 175 | 28014 | Jupyter Notebook | agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/NirDiamant__RAG_Techniques.md) / [보고서](../../../global-trending/repositories/NirDiamant__RAG_Techniques.md) / [소스](../../../../sources/NirDiamant__RAG_Techniques) |
| [naver/billboard.js](https://github.com/naver/billboard.js) | 일반 AI 오픈소스 | 394 | 122 | 5982 | TypeScript | monorepo, cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/naver__billboard.js.md) / [보고서](../../../korea-trending/repositories/naver__billboard.js.md) / [소스](../../../../sources/naver__billboard.js) |
| [Samsung/TizenRT](https://github.com/Samsung/TizenRT) | 일반 AI 오픈소스 | 387 | 119 | 642 | C | monorepo, cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 15000개 파일에서 스캔이 잘림 | [소스 딥다이브](../../../source-deep-dives/repositories/9/Samsung__TizenRT.md) / [보고서](../../../korea-trending/repositories/Samsung__TizenRT.md) / [소스](../../../../sources/Samsung__TizenRT) |
| [toss/es-hangul](https://github.com/toss/es-hangul) | 일반 AI 오픈소스 | 379 | 126 | 1829 | TypeScript | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/toss__es-hangul.md) / [보고서](../../../korea-trending/repositories/toss__es-hangul.md) / [소스](../../../../sources/toss__es-hangul) |
| [SonarSource/sonarqube-cli](https://github.com/SonarSource/sonarqube-cli) | 일반 AI 오픈소스 | 378 | 133 | 192 | TypeScript | cli-first, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/SonarSource__sonarqube-cli.md) / [보고서](../../../global-trending/repositories/SonarSource__sonarqube-cli.md) / [소스](../../../../sources/SonarSource__sonarqube-cli) |
| [daangn/seed-design](https://github.com/daangn/seed-design) | 일반 AI 오픈소스 | 377 | 106 | 889 | TypeScript | monorepo, cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/daangn__seed-design.md) / [보고서](../../../korea-trending/repositories/daangn__seed-design.md) / [소스](../../../../sources/daangn__seed-design) |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | 일반 AI 오픈소스 | 374 | 150 | 55166 | Python | api/server, agent-runtime, tests-evals, model-runtime, web-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/karpathy__nanochat.md) / [보고서](../../../global-trending/repositories/karpathy__nanochat.md) / [소스](../../../../sources/karpathy__nanochat) |
| [toss/suspensive](https://github.com/toss/suspensive) | 일반 AI 오픈소스 | 374 | 118 | 1027 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/toss__suspensive.md) / [보고서](../../../korea-trending/repositories/toss__suspensive.md) / [소스](../../../../sources/toss__suspensive) |
| [daangn/stackflow](https://github.com/daangn/stackflow) | 일반 AI 오픈소스 | 372 | 109 | 1017 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/daangn__stackflow.md) / [보고서](../../../korea-trending/repositories/daangn__stackflow.md) / [소스](../../../../sources/daangn__stackflow) |
| [cloudwego/eino](https://github.com/cloudwego/eino) | 일반 AI 오픈소스 | 371 | 133 | 11850 | Go | agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/cloudwego__eino.md) / [보고서](../../../global-trending/repositories/cloudwego__eino.md) / [소스](../../../../sources/cloudwego__eino) |
| [nhn/tui.calendar](https://github.com/nhn/tui.calendar) | 일반 AI 오픈소스 | 368 | 99 | 12655 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/nhn__tui.calendar.md) / [보고서](../../../korea-trending/repositories/nhn__tui.calendar.md) / [소스](../../../../sources/nhn__tui.calendar) |
| [line/abc-user-feedback](https://github.com/line/abc-user-feedback) | 일반 AI 오픈소스 | 364 | 108 | 376 | TypeScript | monorepo, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/line__abc-user-feedback.md) / [보고서](../../../korea-trending/repositories/line__abc-user-feedback.md) / [소스](../../../../sources/line__abc-user-feedback) |
| [nhn/tui.image-editor](https://github.com/nhn/tui.image-editor) | 일반 AI 오픈소스 | 364 | 99 | 7651 | JavaScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/nhn__tui.image-editor.md) / [보고서](../../../korea-trending/repositories/nhn__tui.image-editor.md) / [소스](../../../../sources/nhn__tui.image-editor) |
| [naver/egjs-flicking](https://github.com/naver/egjs-flicking) | 일반 AI 오픈소스 | 360 | 111 | 2921 | TypeScript | monorepo, cli-first, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/naver__egjs-flicking.md) / [보고서](../../../korea-trending/repositories/naver__egjs-flicking.md) / [소스](../../../../sources/naver__egjs-flicking) |
| [toss/granite](https://github.com/toss/granite) | 일반 AI 오픈소스 | 360 | 110 | 463 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/toss__granite.md) / [보고서](../../../korea-trending/repositories/toss__granite.md) / [소스](../../../../sources/toss__granite) |
| [toss/react-simplikit](https://github.com/toss/react-simplikit) | 일반 AI 오픈소스 | 356 | 104 | 319 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/toss__react-simplikit.md) / [보고서](../../../korea-trending/repositories/toss__react-simplikit.md) / [소스](../../../../sources/toss__react-simplikit) |
| [nhn/tui.editor](https://github.com/nhn/tui.editor) | 일반 AI 오픈소스 | 354 | 99 | 17983 | TypeScript | monorepo, api/server, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/nhn__tui.editor.md) / [보고서](../../../korea-trending/repositories/nhn__tui.editor.md) / [소스](../../../../sources/nhn__tui.editor) |
| [naver/nbase-arc](https://github.com/naver/nbase-arc) | 일반 AI 오픈소스 | 352 | 123 | 180 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/naver__nbase-arc.md) / [보고서](../../../korea-trending/repositories/naver__nbase-arc.md) / [소스](../../../../sources/naver__nbase-arc) |
| [toss/overlay-kit](https://github.com/toss/overlay-kit) | 일반 AI 오픈소스 | 352 | 111 | 713 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/toss__overlay-kit.md) / [보고서](../../../korea-trending/repositories/toss__overlay-kit.md) / [소스](../../../../sources/toss__overlay-kit) |
| [naver/egjs-infinitegrid](https://github.com/naver/egjs-infinitegrid) | 일반 AI 오픈소스 | 351 | 110 | 2359 | TypeScript | monorepo, cli-first, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/naver__egjs-infinitegrid.md) / [보고서](../../../korea-trending/repositories/naver__egjs-infinitegrid.md) / [소스](../../../../sources/naver__egjs-infinitegrid) |
| [line/webpack.kr](https://github.com/line/webpack.kr) | 일반 AI 오픈소스 | 348 | 121 | 93 | MDX | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/line__webpack.kr.md) / [보고서](../../../korea-trending/repositories/line__webpack.kr.md) / [소스](../../../../sources/line__webpack.kr) |
| [nhn/tui.chart](https://github.com/nhn/tui.chart) | 일반 AI 오픈소스 | 348 | 98 | 5403 | TypeScript | monorepo, api/server, retrieval-memory, spec-artifacts, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/nhn__tui.chart.md) / [보고서](../../../korea-trending/repositories/nhn__tui.chart.md) / [소스](../../../../sources/nhn__tui.chart) |
| [woowacourse/service-apply](https://github.com/woowacourse/service-apply) | 일반 AI 오픈소스 | 347 | 100 | 580 | Kotlin | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/woowacourse__service-apply.md) / [보고서](../../../korea-trending/repositories/woowacourse__service-apply.md) / [소스](../../../../sources/woowacourse__service-apply) |
| [Samsung/escargot](https://github.com/Samsung/escargot) | 일반 AI 오픈소스 | 340 | 109 | 357 | C++ | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/Samsung__escargot.md) / [보고서](../../../korea-trending/repositories/Samsung__escargot.md) / [소스](../../../../sources/Samsung__escargot) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [SaiAkhil066/CORTEX-AI-SUPER-RAG](https://github.com/SaiAkhil066/CORTEX-AI-SUPER-RAG) | 일반 AI 오픈소스 | 312 | 138 | 1727 | Python | retrieval-memory, spec-artifacts, container-deploy, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) / [보고서](../../../global-trending/repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) / [소스](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG) |
| [naver/mast3r](https://github.com/naver/mast3r) | 일반 AI 오픈소스 | 271 | 104 | 2999 | Python | retrieval-memory, spec-artifacts, container-deploy | retrieval-memory, spec-artifacts, container-deploy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/naver__mast3r.md) / [보고서](../../../korea-trending/repositories/naver__mast3r.md) / [소스](../../../../sources/naver__mast3r) |
| [naver/fe-news](https://github.com/naver/fe-news) | 일반 AI 오픈소스 | 255 | 118 | 6268 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/naver__fe-news.md) / [보고서](../../../korea-trending/repositories/naver__fe-news.md) / [소스](../../../../sources/naver__fe-news) |
| [line/line-liff-v2-starter](https://github.com/line/line-liff-v2-starter) | 일반 AI 오픈소스 | 238 | 96 | 376 | CSS | retrieval-memory | retrieval-memory | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__line-liff-v2-starter.md) / [보고서](../../../korea-trending/repositories/line__line-liff-v2-starter.md) / [소스](../../../../sources/line__line-liff-v2-starter) |
| [kakaobrain/fast-autoaugment](https://github.com/kakaobrain/fast-autoaugment) | 일반 AI 오픈소스 | 230 | 97 | 1604 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/kakaobrain__fast-autoaugment.md) / [보고서](../../../korea-trending/repositories/kakaobrain__fast-autoaugment.md) / [소스](../../../../sources/kakaobrain__fast-autoaugment) |
| [woowacourse/back-end-roadmap](https://github.com/woowacourse/back-end-roadmap) | 일반 AI 오픈소스 | 230 | 94 | 977 | HTML | retrieval-memory, spec-artifacts | retrieval-memory, spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/woowacourse__back-end-roadmap.md) / [보고서](../../../korea-trending/repositories/woowacourse__back-end-roadmap.md) / [소스](../../../../sources/woowacourse__back-end-roadmap) |
| [naver/searchad-apidoc](https://github.com/naver/searchad-apidoc) | 일반 AI 오픈소스 | 225 | 100 | 112 | Java | spec-artifacts | spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/naver__searchad-apidoc.md) / [보고서](../../../korea-trending/repositories/naver__searchad-apidoc.md) / [소스](../../../../sources/naver__searchad-apidoc) |
| [naver/multi-hmr](https://github.com/naver/multi-hmr) | 일반 AI 오픈소스 | 225 | 94 | 412 | Python | retrieval-memory, spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/naver__multi-hmr.md) / [보고서](../../../korea-trending/repositories/naver__multi-hmr.md) / [소스](../../../../sources/naver__multi-hmr) |
| [kakaobrain/mindall-e](https://github.com/kakaobrain/mindall-e) | 일반 AI 오픈소스 | 213 | 89 | 631 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/kakaobrain__mindall-e.md) / [보고서](../../../korea-trending/repositories/kakaobrain__mindall-e.md) / [소스](../../../../sources/kakaobrain__mindall-e) |
| [kakaobrain/karlo](https://github.com/kakaobrain/karlo) | 일반 AI 오픈소스 | 212 | 89 | 698 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/kakaobrain__karlo.md) / [보고서](../../../korea-trending/repositories/kakaobrain__karlo.md) / [소스](../../../../sources/kakaobrain__karlo) |
| [naver/pow3r](https://github.com/naver/pow3r) | 일반 AI 오픈소스 | 211 | 84 | 231 | Python | agent-runtime, retrieval-memory, spec-artifacts | agent-runtime, retrieval-memory, spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/naver__pow3r.md) / [보고서](../../../korea-trending/repositories/naver__pow3r.md) / [소스](../../../../sources/naver__pow3r) |
| [naver/posescript](https://github.com/naver/posescript) | 일반 AI 오픈소스 | 211 | 77 | 203 | Python | retrieval-memory, spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/naver__posescript.md) / [보고서](../../../korea-trending/repositories/naver__posescript.md) / [소스](../../../../sources/naver__posescript) |
| [line/gradle-scripts](https://github.com/line/gradle-scripts) | 일반 AI 오픈소스 | 206 | 96 | 81 | unknown | container-deploy | container-deploy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/line__gradle-scripts.md) / [보고서](../../../korea-trending/repositories/line__gradle-scripts.md) / [소스](../../../../sources/line__gradle-scripts) |
| [nhn/fe.javascript](https://github.com/nhn/fe.javascript) | 일반 AI 오픈소스 | 201 | 96 | 1111 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/nhn__fe.javascript.md) / [보고서](../../../korea-trending/repositories/nhn__fe.javascript.md) / [소스](../../../../sources/nhn__fe.javascript) |
| [line/line-things-starter](https://github.com/line/line-things-starter) | 일반 AI 오픈소스 | 201 | 79 | 92 | C++ | retrieval-memory, spec-artifacts | retrieval-memory, spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/line__line-things-starter.md) / [보고서](../../../korea-trending/repositories/line__line-things-starter.md) / [소스](../../../../sources/line__line-things-starter) |
| [naver-ai/StyleKeeper](https://github.com/naver-ai/StyleKeeper) | 일반 AI 오픈소스 | 197 | 92 | 483 | Python |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/naver-ai__StyleKeeper.md) / [보고서](../../../korea-trending/repositories/naver-ai__StyleKeeper.md) / [소스](../../../../sources/naver-ai__StyleKeeper) |
| [naver/android-imagecropview](https://github.com/naver/android-imagecropview) | 일반 AI 오픈소스 | 197 | 82 | 255 | Java | retrieval-memory | retrieval-memory | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/naver__android-imagecropview.md) / [보고서](../../../korea-trending/repositories/naver__android-imagecropview.md) / [소스](../../../../sources/naver__android-imagecropview) |
| [kakaobrain/word2word](https://github.com/kakaobrain/word2word) | 일반 AI 오픈소스 | 194 | 85 | 370 | Python | spec-artifacts | spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/kakaobrain__word2word.md) / [보고서](../../../korea-trending/repositories/kakaobrain__word2word.md) / [소스](../../../../sources/kakaobrain__word2word) |
| [naver/panst3r](https://github.com/naver/panst3r) | 일반 AI 오픈소스 | 194 | 82 | 73 | Python | agent-runtime, retrieval-memory, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/naver__panst3r.md) / [보고서](../../../korea-trending/repositories/naver__panst3r.md) / [소스](../../../../sources/naver__panst3r) |
| [hyperconnect/MMNet](https://github.com/hyperconnect/MMNet) | 일반 AI 오픈소스 | 192 | 78 | 177 | Python | spec-artifacts | spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/hyperconnect__MMNet.md) / [보고서](../../../korea-trending/repositories/hyperconnect__MMNet.md) / [소스](../../../../sources/hyperconnect__MMNet) |
