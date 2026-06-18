# General AI Open Source Source Insights

Generated: 2026-06-18T15:12:59.248Z

main architecture, dependency stack, tests, deployment, docs

## 요약

- 조사 단위: 일반 AI 오픈소스 카테고리에 속한 268개 source-scanned 레포입니다.
- 포함 범위: trend-linked 263개, key source reference 1996개, median source depth 66입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

일반 AI 오픈소스 카테고리는 268개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Source Deep Dives](../../../source-deep-dives/README.md) | Source-path evidence and per-repository deep dives. |
| [Source Repository Deep Dives](../../../source-deep-dives/repositories/README.md) | One Markdown deep dive per cloned repository. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-level assessment and role pages. |
| [Source Trend Insights](../../README.md) | Category trend insights and repository feature comparison. |
| [Source Insights by Category](../README.md) | Category-first source insight pages. |
| [Report Tables](../../../tables/README.md) | CSV and table-first navigation. |


## Category Insights

- 일반 AI 오픈소스 카테고리는 268개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (203), retrieval/vector path (158), spec/docs-driven (124)이고, 파일 근거 bucket은 docs (266), eval (203), config (170), retrieval (158) 순서로 강합니다.
- RAG, memory, vector/index 경로가 59%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 46%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 76%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- security/policy 소스 경로는 16%에 그칩니다. agent 권한, secret, sandbox가 중요한 카테고리라면 보안 표면 누락을 별도 리스크로 봐야 합니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 268 |
| Trend-linked repositories | 263 |
| Global / Korea trend count | 9 / 254 |
| Both global and Korea | 0 |
| Max / median trend score | 175 / 80 |
| Total / median stars | 352233 / 121 |
| Key source references | 1996 |
| Median file count | 92 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
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


### Architecture Patterns

| Signal | Count |
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


### Evidence Bucket Coverage

| Signal | Count |
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


### Dependency Groups

| Signal | Count |
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


### Command Surface

| Signal | Count |
| --- | ---: |
| build | 67 |
| utility | 65 |
| quality | 59 |
| test | 58 |
| serve-dev | 49 |
| entrypoint | 7 |
| container | 4 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 일반 AI 오픈소스 | 505 | 175 | 46390 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/Aider-AI__aider.md) / [report](../../../global-trending/repositories/Aider-AI__aider.md) / [source](../../../../sources/Aider-AI__aider) |
| [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | 일반 AI 오픈소스 | 493 | 161 | 32363 | Ruby | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/chatwoot__chatwoot.md) / [report](../../../global-trending/repositories/chatwoot__chatwoot.md) / [source](../../../../sources/chatwoot__chatwoot) |
| [toss/es-toolkit](https://github.com/toss/es-toolkit) | 일반 AI 오픈소스 | 477 | 168 | 11148 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/toss__es-toolkit.md) / [report](../../../korea-trending/repositories/toss__es-toolkit.md) / [source](../../../../sources/toss__es-toolkit) |
| [asklokesh/loki-mode](https://github.com/asklokesh/loki-mode) | 일반 AI 오픈소스 | 436 | 140 | 980 | Shell | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/asklokesh__loki-mode.md) / [report](../../../global-trending/repositories/asklokesh__loki-mode.md) / [source](../../../../sources/asklokesh__loki-mode) |
| [line/centraldogma](https://github.com/line/centraldogma) | 일반 AI 오픈소스 | 429 | 161 | 663 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/line__centraldogma.md) / [report](../../../korea-trending/repositories/line__centraldogma.md) / [source](../../../../sources/line__centraldogma) |
| [adbar/trafilatura](https://github.com/adbar/trafilatura) | 일반 AI 오픈소스 | 416 | 149 | 6146 | Python | cli-first, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/adbar__trafilatura.md) / [report](../../../global-trending/repositories/adbar__trafilatura.md) / [source](../../../../sources/adbar__trafilatura) |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 일반 AI 오픈소스 | 415 | 175 | 28014 | Jupyter Notebook | agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/NirDiamant__RAG_Techniques.md) / [report](../../../global-trending/repositories/NirDiamant__RAG_Techniques.md) / [source](../../../../sources/NirDiamant__RAG_Techniques) |
| [naver/billboard.js](https://github.com/naver/billboard.js) | 일반 AI 오픈소스 | 400 | 122 | 5982 | TypeScript | monorepo, cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/naver__billboard.js.md) / [report](../../../korea-trending/repositories/naver__billboard.js.md) / [source](../../../../sources/naver__billboard.js) |
| [Samsung/TizenRT](https://github.com/Samsung/TizenRT) | 일반 AI 오픈소스 | 393 | 119 | 642 | C | monorepo, cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | scan truncated at 15000 files | [source deep dive](../../../source-deep-dives/repositories/9/Samsung__TizenRT.md) / [report](../../../korea-trending/repositories/Samsung__TizenRT.md) / [source](../../../../sources/Samsung__TizenRT) |
| [toss/es-hangul](https://github.com/toss/es-hangul) | 일반 AI 오픈소스 | 385 | 126 | 1829 | TypeScript | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/toss__es-hangul.md) / [report](../../../korea-trending/repositories/toss__es-hangul.md) / [source](../../../../sources/toss__es-hangul) |
| [SonarSource/sonarqube-cli](https://github.com/SonarSource/sonarqube-cli) | 일반 AI 오픈소스 | 384 | 133 | 192 | TypeScript | cli-first, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/SonarSource__sonarqube-cli.md) / [report](../../../global-trending/repositories/SonarSource__sonarqube-cli.md) / [source](../../../../sources/SonarSource__sonarqube-cli) |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | 일반 AI 오픈소스 | 380 | 150 | 55166 | Python | api/server, agent-runtime, tests-evals, model-runtime, web-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/karpathy__nanochat.md) / [report](../../../global-trending/repositories/karpathy__nanochat.md) / [source](../../../../sources/karpathy__nanochat) |
| [toss/suspensive](https://github.com/toss/suspensive) | 일반 AI 오픈소스 | 380 | 118 | 1027 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/toss__suspensive.md) / [report](../../../korea-trending/repositories/toss__suspensive.md) / [source](../../../../sources/toss__suspensive) |
| [cloudwego/eino](https://github.com/cloudwego/eino) | 일반 AI 오픈소스 | 377 | 133 | 11850 | Go | agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/cloudwego__eino.md) / [report](../../../global-trending/repositories/cloudwego__eino.md) / [source](../../../../sources/cloudwego__eino) |
| [naver/nbase-arc](https://github.com/naver/nbase-arc) | 일반 AI 오픈소스 | 358 | 123 | 180 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/naver__nbase-arc.md) / [report](../../../korea-trending/repositories/naver__nbase-arc.md) / [source](../../../../sources/naver__nbase-arc) |
| [line/webpack.kr](https://github.com/line/webpack.kr) | 일반 AI 오픈소스 | 354 | 121 | 93 | MDX | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/line__webpack.kr.md) / [report](../../../korea-trending/repositories/line__webpack.kr.md) / [source](../../../../sources/line__webpack.kr) |
| [SaiAkhil066/CORTEX-AI-SUPER-RAG](https://github.com/SaiAkhil066/CORTEX-AI-SUPER-RAG) | 일반 AI 오픈소스 | 318 | 138 | 1727 | Python | retrieval-memory, spec-artifacts, container-deploy, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) / [report](../../../global-trending/repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) / [source](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG) |
| [Samsung/rlottie](https://github.com/Samsung/rlottie) | 일반 AI 오픈소스 | 291 | 118 | 1407 | C++ | retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/8/Samsung__rlottie.md) / [report](../../../korea-trending/repositories/Samsung__rlottie.md) / [source](../../../../sources/Samsung__rlottie) |
| [kakaobrain/kogpt](https://github.com/kakaobrain/kogpt) | 일반 AI 오픈소스 | 273 | 119 | 1012 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/kakaobrain__kogpt.md) / [report](../../../korea-trending/repositories/kakaobrain__kogpt.md) / [source](../../../../sources/kakaobrain__kogpt) |
| [naver/fe-news](https://github.com/naver/fe-news) | 일반 AI 오픈소스 | 261 | 118 | 6268 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/naver__fe-news.md) / [report](../../../korea-trending/repositories/naver__fe-news.md) / [source](../../../../sources/naver__fe-news) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Aider-AI/aider](https://github.com/Aider-AI/aider) | 일반 AI 오픈소스 | 505 | 175 | 46390 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/Aider-AI__aider.md) / [report](../../../global-trending/repositories/Aider-AI__aider.md) / [source](../../../../sources/Aider-AI__aider) |
| [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | 일반 AI 오픈소스 | 493 | 161 | 32363 | Ruby | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/chatwoot__chatwoot.md) / [report](../../../global-trending/repositories/chatwoot__chatwoot.md) / [source](../../../../sources/chatwoot__chatwoot) |
| [toss/es-toolkit](https://github.com/toss/es-toolkit) | 일반 AI 오픈소스 | 477 | 168 | 11148 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/toss__es-toolkit.md) / [report](../../../korea-trending/repositories/toss__es-toolkit.md) / [source](../../../../sources/toss__es-toolkit) |
| [asklokesh/loki-mode](https://github.com/asklokesh/loki-mode) | 일반 AI 오픈소스 | 436 | 140 | 980 | Shell | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/asklokesh__loki-mode.md) / [report](../../../global-trending/repositories/asklokesh__loki-mode.md) / [source](../../../../sources/asklokesh__loki-mode) |
| [line/centraldogma](https://github.com/line/centraldogma) | 일반 AI 오픈소스 | 429 | 161 | 663 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/line__centraldogma.md) / [report](../../../korea-trending/repositories/line__centraldogma.md) / [source](../../../../sources/line__centraldogma) |
| [adbar/trafilatura](https://github.com/adbar/trafilatura) | 일반 AI 오픈소스 | 416 | 149 | 6146 | Python | cli-first, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/adbar__trafilatura.md) / [report](../../../global-trending/repositories/adbar__trafilatura.md) / [source](../../../../sources/adbar__trafilatura) |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 일반 AI 오픈소스 | 415 | 175 | 28014 | Jupyter Notebook | agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/NirDiamant__RAG_Techniques.md) / [report](../../../global-trending/repositories/NirDiamant__RAG_Techniques.md) / [source](../../../../sources/NirDiamant__RAG_Techniques) |
| [naver/billboard.js](https://github.com/naver/billboard.js) | 일반 AI 오픈소스 | 400 | 122 | 5982 | TypeScript | monorepo, cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/naver__billboard.js.md) / [report](../../../korea-trending/repositories/naver__billboard.js.md) / [source](../../../../sources/naver__billboard.js) |
| [Samsung/TizenRT](https://github.com/Samsung/TizenRT) | 일반 AI 오픈소스 | 393 | 119 | 642 | C | monorepo, cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | scan truncated at 15000 files | [source deep dive](../../../source-deep-dives/repositories/9/Samsung__TizenRT.md) / [report](../../../korea-trending/repositories/Samsung__TizenRT.md) / [source](../../../../sources/Samsung__TizenRT) |
| [toss/es-hangul](https://github.com/toss/es-hangul) | 일반 AI 오픈소스 | 385 | 126 | 1829 | TypeScript | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/toss__es-hangul.md) / [report](../../../korea-trending/repositories/toss__es-hangul.md) / [source](../../../../sources/toss__es-hangul) |
| [SonarSource/sonarqube-cli](https://github.com/SonarSource/sonarqube-cli) | 일반 AI 오픈소스 | 384 | 133 | 192 | TypeScript | cli-first, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/SonarSource__sonarqube-cli.md) / [report](../../../global-trending/repositories/SonarSource__sonarqube-cli.md) / [source](../../../../sources/SonarSource__sonarqube-cli) |
| [daangn/seed-design](https://github.com/daangn/seed-design) | 일반 AI 오픈소스 | 383 | 106 | 889 | TypeScript | monorepo, cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/daangn__seed-design.md) / [report](../../../korea-trending/repositories/daangn__seed-design.md) / [source](../../../../sources/daangn__seed-design) |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | 일반 AI 오픈소스 | 380 | 150 | 55166 | Python | api/server, agent-runtime, tests-evals, model-runtime, web-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/karpathy__nanochat.md) / [report](../../../global-trending/repositories/karpathy__nanochat.md) / [source](../../../../sources/karpathy__nanochat) |
| [toss/suspensive](https://github.com/toss/suspensive) | 일반 AI 오픈소스 | 380 | 118 | 1027 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/toss__suspensive.md) / [report](../../../korea-trending/repositories/toss__suspensive.md) / [source](../../../../sources/toss__suspensive) |
| [daangn/stackflow](https://github.com/daangn/stackflow) | 일반 AI 오픈소스 | 378 | 109 | 1017 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/daangn__stackflow.md) / [report](../../../korea-trending/repositories/daangn__stackflow.md) / [source](../../../../sources/daangn__stackflow) |
| [cloudwego/eino](https://github.com/cloudwego/eino) | 일반 AI 오픈소스 | 377 | 133 | 11850 | Go | agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/cloudwego__eino.md) / [report](../../../global-trending/repositories/cloudwego__eino.md) / [source](../../../../sources/cloudwego__eino) |
| [nhn/tui.calendar](https://github.com/nhn/tui.calendar) | 일반 AI 오픈소스 | 374 | 99 | 12655 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/nhn__tui.calendar.md) / [report](../../../korea-trending/repositories/nhn__tui.calendar.md) / [source](../../../../sources/nhn__tui.calendar) |
| [line/abc-user-feedback](https://github.com/line/abc-user-feedback) | 일반 AI 오픈소스 | 370 | 108 | 376 | TypeScript | monorepo, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/line__abc-user-feedback.md) / [report](../../../korea-trending/repositories/line__abc-user-feedback.md) / [source](../../../../sources/line__abc-user-feedback) |
| [nhn/tui.image-editor](https://github.com/nhn/tui.image-editor) | 일반 AI 오픈소스 | 370 | 99 | 7651 | JavaScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/c/nhn__tui.image-editor.md) / [report](../../../korea-trending/repositories/nhn__tui.image-editor.md) / [source](../../../../sources/nhn__tui.image-editor) |
| [naver/egjs-flicking](https://github.com/naver/egjs-flicking) | 일반 AI 오픈소스 | 366 | 111 | 2921 | TypeScript | monorepo, cli-first, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/naver__egjs-flicking.md) / [report](../../../korea-trending/repositories/naver__egjs-flicking.md) / [source](../../../../sources/naver__egjs-flicking) |
| [toss/granite](https://github.com/toss/granite) | 일반 AI 오픈소스 | 366 | 110 | 463 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/toss__granite.md) / [report](../../../korea-trending/repositories/toss__granite.md) / [source](../../../../sources/toss__granite) |
| [toss/react-simplikit](https://github.com/toss/react-simplikit) | 일반 AI 오픈소스 | 362 | 104 | 319 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/toss__react-simplikit.md) / [report](../../../korea-trending/repositories/toss__react-simplikit.md) / [source](../../../../sources/toss__react-simplikit) |
| [nhn/tui.editor](https://github.com/nhn/tui.editor) | 일반 AI 오픈소스 | 360 | 99 | 17983 | TypeScript | monorepo, api/server, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/nhn__tui.editor.md) / [report](../../../korea-trending/repositories/nhn__tui.editor.md) / [source](../../../../sources/nhn__tui.editor) |
| [naver/nbase-arc](https://github.com/naver/nbase-arc) | 일반 AI 오픈소스 | 358 | 123 | 180 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/naver__nbase-arc.md) / [report](../../../korea-trending/repositories/naver__nbase-arc.md) / [source](../../../../sources/naver__nbase-arc) |
| [toss/overlay-kit](https://github.com/toss/overlay-kit) | 일반 AI 오픈소스 | 358 | 111 | 713 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/toss__overlay-kit.md) / [report](../../../korea-trending/repositories/toss__overlay-kit.md) / [source](../../../../sources/toss__overlay-kit) |
| [naver/egjs-infinitegrid](https://github.com/naver/egjs-infinitegrid) | 일반 AI 오픈소스 | 357 | 110 | 2359 | TypeScript | monorepo, cli-first, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/naver__egjs-infinitegrid.md) / [report](../../../korea-trending/repositories/naver__egjs-infinitegrid.md) / [source](../../../../sources/naver__egjs-infinitegrid) |
| [line/webpack.kr](https://github.com/line/webpack.kr) | 일반 AI 오픈소스 | 354 | 121 | 93 | MDX | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/line__webpack.kr.md) / [report](../../../korea-trending/repositories/line__webpack.kr.md) / [source](../../../../sources/line__webpack.kr) |
| [nhn/tui.chart](https://github.com/nhn/tui.chart) | 일반 AI 오픈소스 | 354 | 98 | 5403 | TypeScript | monorepo, api/server, retrieval-memory, spec-artifacts, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/nhn__tui.chart.md) / [report](../../../korea-trending/repositories/nhn__tui.chart.md) / [source](../../../../sources/nhn__tui.chart) |
| [woowacourse/service-apply](https://github.com/woowacourse/service-apply) | 일반 AI 오픈소스 | 353 | 100 | 580 | Kotlin | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/woowacourse__service-apply.md) / [report](../../../korea-trending/repositories/woowacourse__service-apply.md) / [source](../../../../sources/woowacourse__service-apply) |
| [Samsung/escargot](https://github.com/Samsung/escargot) | 일반 AI 오픈소스 | 346 | 109 | 357 | C++ | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/Samsung__escargot.md) / [report](../../../korea-trending/repositories/Samsung__escargot.md) / [source](../../../../sources/Samsung__escargot) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [SaiAkhil066/CORTEX-AI-SUPER-RAG](https://github.com/SaiAkhil066/CORTEX-AI-SUPER-RAG) | 일반 AI 오픈소스 | 318 | 138 | 1727 | Python | retrieval-memory, spec-artifacts, container-deploy, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) / [report](../../../global-trending/repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) / [source](../../../../sources/SaiAkhil066__CORTEX-AI-SUPER-RAG) |
| [naver/mast3r](https://github.com/naver/mast3r) | 일반 AI 오픈소스 | 277 | 104 | 2999 | Python | retrieval-memory, spec-artifacts, container-deploy | retrieval-memory, spec-artifacts, container-deploy | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/naver__mast3r.md) / [report](../../../korea-trending/repositories/naver__mast3r.md) / [source](../../../../sources/naver__mast3r) |
| [naver/fe-news](https://github.com/naver/fe-news) | 일반 AI 오픈소스 | 261 | 118 | 6268 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/naver__fe-news.md) / [report](../../../korea-trending/repositories/naver__fe-news.md) / [source](../../../../sources/naver__fe-news) |
| [line/line-liff-v2-starter](https://github.com/line/line-liff-v2-starter) | 일반 AI 오픈소스 | 244 | 96 | 376 | CSS | retrieval-memory | retrieval-memory | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/line__line-liff-v2-starter.md) / [report](../../../korea-trending/repositories/line__line-liff-v2-starter.md) / [source](../../../../sources/line__line-liff-v2-starter) |
| [kakaobrain/fast-autoaugment](https://github.com/kakaobrain/fast-autoaugment) | 일반 AI 오픈소스 | 236 | 97 | 1604 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/kakaobrain__fast-autoaugment.md) / [report](../../../korea-trending/repositories/kakaobrain__fast-autoaugment.md) / [source](../../../../sources/kakaobrain__fast-autoaugment) |
| [woowacourse/back-end-roadmap](https://github.com/woowacourse/back-end-roadmap) | 일반 AI 오픈소스 | 236 | 94 | 977 | HTML | retrieval-memory, spec-artifacts | retrieval-memory, spec-artifacts | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/woowacourse__back-end-roadmap.md) / [report](../../../korea-trending/repositories/woowacourse__back-end-roadmap.md) / [source](../../../../sources/woowacourse__back-end-roadmap) |
| [naver/searchad-apidoc](https://github.com/naver/searchad-apidoc) | 일반 AI 오픈소스 | 231 | 100 | 112 | Java | spec-artifacts | spec-artifacts | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/naver__searchad-apidoc.md) / [report](../../../korea-trending/repositories/naver__searchad-apidoc.md) / [source](../../../../sources/naver__searchad-apidoc) |
| [naver/multi-hmr](https://github.com/naver/multi-hmr) | 일반 AI 오픈소스 | 231 | 94 | 412 | Python | retrieval-memory, spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/naver__multi-hmr.md) / [report](../../../korea-trending/repositories/naver__multi-hmr.md) / [source](../../../../sources/naver__multi-hmr) |
| [kakaobrain/mindall-e](https://github.com/kakaobrain/mindall-e) | 일반 AI 오픈소스 | 219 | 89 | 631 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/kakaobrain__mindall-e.md) / [report](../../../korea-trending/repositories/kakaobrain__mindall-e.md) / [source](../../../../sources/kakaobrain__mindall-e) |
| [kakaobrain/karlo](https://github.com/kakaobrain/karlo) | 일반 AI 오픈소스 | 218 | 89 | 698 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/kakaobrain__karlo.md) / [report](../../../korea-trending/repositories/kakaobrain__karlo.md) / [source](../../../../sources/kakaobrain__karlo) |
| [naver/pow3r](https://github.com/naver/pow3r) | 일반 AI 오픈소스 | 217 | 84 | 231 | Python | agent-runtime, retrieval-memory, spec-artifacts | agent-runtime, retrieval-memory, spec-artifacts | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/naver__pow3r.md) / [report](../../../korea-trending/repositories/naver__pow3r.md) / [source](../../../../sources/naver__pow3r) |
| [naver/posescript](https://github.com/naver/posescript) | 일반 AI 오픈소스 | 217 | 77 | 203 | Python | retrieval-memory, spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/naver__posescript.md) / [report](../../../korea-trending/repositories/naver__posescript.md) / [source](../../../../sources/naver__posescript) |
| [line/gradle-scripts](https://github.com/line/gradle-scripts) | 일반 AI 오픈소스 | 212 | 96 | 81 | unknown | container-deploy | container-deploy | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/line__gradle-scripts.md) / [report](../../../korea-trending/repositories/line__gradle-scripts.md) / [source](../../../../sources/line__gradle-scripts) |
| [nhn/fe.javascript](https://github.com/nhn/fe.javascript) | 일반 AI 오픈소스 | 207 | 96 | 1111 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/nhn__fe.javascript.md) / [report](../../../korea-trending/repositories/nhn__fe.javascript.md) / [source](../../../../sources/nhn__fe.javascript) |
| [line/line-things-starter](https://github.com/line/line-things-starter) | 일반 AI 오픈소스 | 207 | 79 | 92 | C++ | retrieval-memory, spec-artifacts | retrieval-memory, spec-artifacts | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/line__line-things-starter.md) / [report](../../../korea-trending/repositories/line__line-things-starter.md) / [source](../../../../sources/line__line-things-starter) |
| [naver-ai/StyleKeeper](https://github.com/naver-ai/StyleKeeper) | 일반 AI 오픈소스 | 203 | 92 | 483 | Python |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/naver-ai__StyleKeeper.md) / [report](../../../korea-trending/repositories/naver-ai__StyleKeeper.md) / [source](../../../../sources/naver-ai__StyleKeeper) |
| [naver/android-imagecropview](https://github.com/naver/android-imagecropview) | 일반 AI 오픈소스 | 203 | 82 | 255 | Java | retrieval-memory | retrieval-memory | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/naver__android-imagecropview.md) / [report](../../../korea-trending/repositories/naver__android-imagecropview.md) / [source](../../../../sources/naver__android-imagecropview) |
| [kakaobrain/word2word](https://github.com/kakaobrain/word2word) | 일반 AI 오픈소스 | 200 | 85 | 370 | Python | spec-artifacts | spec-artifacts | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/kakaobrain__word2word.md) / [report](../../../korea-trending/repositories/kakaobrain__word2word.md) / [source](../../../../sources/kakaobrain__word2word) |
| [naver/panst3r](https://github.com/naver/panst3r) | 일반 AI 오픈소스 | 200 | 82 | 73 | Python | agent-runtime, retrieval-memory, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/naver__panst3r.md) / [report](../../../korea-trending/repositories/naver__panst3r.md) / [source](../../../../sources/naver__panst3r) |
| [hyperconnect/MMNet](https://github.com/hyperconnect/MMNet) | 일반 AI 오픈소스 | 198 | 78 | 177 | Python | spec-artifacts | spec-artifacts | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/hyperconnect__MMNet.md) / [report](../../../korea-trending/repositories/hyperconnect__MMNet.md) / [source](../../../../sources/hyperconnect__MMNet) |
