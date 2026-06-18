# 소스 코드 딥다이브

생성 시각: 2026-06-18T15:43:44.521Z

로컬 클론에서 뽑은 entrypoint, runtime, retrieval, spec, eval, security, CI/container 경로 근거입니다.

## 요약

- 조사 단위: `source-code-deep-dives` 주제에 속한 보고서 묶음입니다.
- 포함 범위: 1,187개 보고서이며, 주요 보고서 유형은 source-deep-dive-report (1165), source-insight-report (13), category-guide (2), llm-wiki-report (2), overview-report (2)입니다.
- 주요 출처 폴더: source-deep-dives (1165), source-insights (13), categories (2), adjacent-tech (1), comparisons (1).

## 총평

이 README는 같은 주제에 흩어진 보고서를 한 번에 따라가도록 만든 주제형 입구입니다. 추천 읽기 경로는 먼저 읽을 보고서를 우선순위로 보여주고, 전체 보고서는 빠짐없는 목록을 제공합니다. 같은 보고서가 여러 주제에 걸칠 수 있으므로, 큰 흐름은 이 페이지에서 보고 세부 파일 위치는 폴더 값을 확인하는 방식이 좋습니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [전체 인사이트 지도](../../insight-map/README.md) | 각 주제의 의미, 위치, 뽑아낼 인사이트를 한 문서에서 확인. |
| [주제별 보고서 목차](../README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../repository-insights/README.md) | 레포별 총평, 위험 신호, 다음에 볼 링크. |
| [소스 딥다이브](../../source-deep-dives/README.md) | 로컬 클론에서 뽑은 파일 경로 근거. |
| [소스 트렌드 인사이트](../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [근거 카테고리](../../categories/README.md) | 오픈소스, 논문, 발표, 참고자료의 artifact 분류. |


## 범위

- 보고서 수: 1187
- 데이터: [data/report-categories/source-code-deep-dives.json](../../../data/report-categories/source-code-deep-dives.json)

## 보고서 유형

- source-deep-dive-report: 1165
- source-insight-report: 13
- llm-wiki-report: 2
- category-guide: 2
- overview-report: 2
- comparison-report: 1
- korea-trending-report: 1
- infrastructure-report: 1

## 출처 폴더

- source-deep-dives: 1165
- source-insights: 13
- categories: 2
- comparisons: 1
- llm-wiki/00-llm-wiki-100-summary.md: 1
- llm-wiki/01-llm-wiki-100-selection-and-patterns.md: 1
- korea-trending: 1
- repository-insights: 1
- root: 1
- adjacent-tech: 1

## 추천 읽기 경로

| 보고서 | 유형 | 폴더 | 우선순위 |
| --- | --- | --- | ---: |
| [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](../../comparisons/01-project-taxonomy-and-feature-comparison.md) | comparison-report | comparisons | 182 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](../../llm-wiki/00-llm-wiki-100-summary.md) | llm-wiki-report | llm-wiki/00-llm-wiki-100-summary.md | 182 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](../../llm-wiki/01-llm-wiki-100-selection-and-patterns.md) | llm-wiki-report | llm-wiki/01-llm-wiki-100-selection-and-patterns.md | 182 |
| [한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석](../../korea-trending/00-korea-open-source-trend-report-2026-06-18.md) | korea-trending-report | korea-trending | 157 |
| [소스 딥다이브](../../source-deep-dives/README.md) | source-deep-dive-report | source-deep-dives | 157 |
| [소스 트렌드 인사이트](../../source-insights/README.md) | source-insight-report | source-insights | 157 |
| [글로벌 AI 오픈소스](../../categories/global-ai-open-source/README.md) | category-guide | categories | 156 |
| [한국 AI/오픈소스](../../categories/korean-ai-open-source/README.md) | category-guide | categories | 156 |
| [주제별 소스 딥다이브](../../source-deep-dives/by-topic/README.md) | source-deep-dive-report | source-deep-dives | 156 |
| [카테고리별 소스 인사이트](../../source-insights/by-category/README.md) | source-insight-report | source-insights | 156 |
| [일반 AI 오픈소스](../../repository-insights/by-role/general-ai-open-source/README.md) | overview-report | repository-insights | 155 |
| [에이전트 하네스/MCP 소스 딥다이브](../../source-deep-dives/by-topic/agent-harness-mcp/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [AI 인프라/서빙 소스 딥다이브](../../source-deep-dives/by-topic/ai-infrastructure-serving/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [코딩 에이전트/IDE 소스 딥다이브](../../source-deep-dives/by-topic/coding-agent-ide/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [데이터/벡터 플랫폼 소스 딥다이브](../../source-deep-dives/by-topic/data-vector-platform/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [개발 생산성/DevTools 소스 딥다이브](../../source-deep-dives/by-topic/developer-productivity/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [평가/관측/품질 소스 딥다이브](../../source-deep-dives/by-topic/eval-observability/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [일반 AI 오픈소스 소스 딥다이브](../../source-deep-dives/by-topic/general-ai-open-source/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [LLM 위키/RAG/지식베이스 소스 딥다이브](../../source-deep-dives/by-topic/llm-wiki-rag/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [보안/거버넌스/안전 소스 딥다이브](../../source-deep-dives/by-topic/security-governance/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [스펙 드리븐/요구사항 소스 딥다이브](../../source-deep-dives/by-topic/spec-driven/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [에이전트 하네스/MCP 소스 인사이트](../../source-insights/by-category/agent-harness-mcp/README.md) | source-insight-report | source-insights | 155 |
| [AI 인프라/서빙 소스 인사이트](../../source-insights/by-category/ai-infrastructure-serving/README.md) | source-insight-report | source-insights | 155 |
| [코딩 에이전트/IDE 소스 인사이트](../../source-insights/by-category/coding-agent-ide/README.md) | source-insight-report | source-insights | 155 |
| [데이터/벡터 플랫폼 소스 인사이트](../../source-insights/by-category/data-vector-platform/README.md) | source-insight-report | source-insights | 155 |
| [개발 생산성/DevTools 소스 인사이트](../../source-insights/by-category/developer-productivity/README.md) | source-insight-report | source-insights | 155 |
| [평가/관측/품질 소스 인사이트](../../source-insights/by-category/eval-observability/README.md) | source-insight-report | source-insights | 155 |
| [일반 AI 오픈소스 소스 인사이트](../../source-insights/by-category/general-ai-open-source/README.md) | source-insight-report | source-insights | 155 |
| [LLM 위키/RAG/지식베이스 소스 인사이트](../../source-insights/by-category/llm-wiki-rag/README.md) | source-insight-report | source-insights | 155 |
| [보안/거버넌스/안전 소스 인사이트](../../source-insights/by-category/security-governance/README.md) | source-insight-report | source-insights | 155 |


## 전체 보고서

| 보고서 | 유형 | 폴더 | 우선순위 |
| --- | --- | --- | ---: |
| [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](../../comparisons/01-project-taxonomy-and-feature-comparison.md) | comparison-report | comparisons | 182 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](../../llm-wiki/00-llm-wiki-100-summary.md) | llm-wiki-report | llm-wiki/00-llm-wiki-100-summary.md | 182 |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](../../llm-wiki/01-llm-wiki-100-selection-and-patterns.md) | llm-wiki-report | llm-wiki/01-llm-wiki-100-selection-and-patterns.md | 182 |
| [한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석](../../korea-trending/00-korea-open-source-trend-report-2026-06-18.md) | korea-trending-report | korea-trending | 157 |
| [소스 딥다이브](../../source-deep-dives/README.md) | source-deep-dive-report | source-deep-dives | 157 |
| [소스 트렌드 인사이트](../../source-insights/README.md) | source-insight-report | source-insights | 157 |
| [글로벌 AI 오픈소스](../../categories/global-ai-open-source/README.md) | category-guide | categories | 156 |
| [한국 AI/오픈소스](../../categories/korean-ai-open-source/README.md) | category-guide | categories | 156 |
| [주제별 소스 딥다이브](../../source-deep-dives/by-topic/README.md) | source-deep-dive-report | source-deep-dives | 156 |
| [카테고리별 소스 인사이트](../../source-insights/by-category/README.md) | source-insight-report | source-insights | 156 |
| [일반 AI 오픈소스](../../repository-insights/by-role/general-ai-open-source/README.md) | overview-report | repository-insights | 155 |
| [에이전트 하네스/MCP 소스 딥다이브](../../source-deep-dives/by-topic/agent-harness-mcp/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [AI 인프라/서빙 소스 딥다이브](../../source-deep-dives/by-topic/ai-infrastructure-serving/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [코딩 에이전트/IDE 소스 딥다이브](../../source-deep-dives/by-topic/coding-agent-ide/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [데이터/벡터 플랫폼 소스 딥다이브](../../source-deep-dives/by-topic/data-vector-platform/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [개발 생산성/DevTools 소스 딥다이브](../../source-deep-dives/by-topic/developer-productivity/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [평가/관측/품질 소스 딥다이브](../../source-deep-dives/by-topic/eval-observability/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [일반 AI 오픈소스 소스 딥다이브](../../source-deep-dives/by-topic/general-ai-open-source/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [LLM 위키/RAG/지식베이스 소스 딥다이브](../../source-deep-dives/by-topic/llm-wiki-rag/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [보안/거버넌스/안전 소스 딥다이브](../../source-deep-dives/by-topic/security-governance/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [스펙 드리븐/요구사항 소스 딥다이브](../../source-deep-dives/by-topic/spec-driven/README.md) | source-deep-dive-report | source-deep-dives | 155 |
| [에이전트 하네스/MCP 소스 인사이트](../../source-insights/by-category/agent-harness-mcp/README.md) | source-insight-report | source-insights | 155 |
| [AI 인프라/서빙 소스 인사이트](../../source-insights/by-category/ai-infrastructure-serving/README.md) | source-insight-report | source-insights | 155 |
| [코딩 에이전트/IDE 소스 인사이트](../../source-insights/by-category/coding-agent-ide/README.md) | source-insight-report | source-insights | 155 |
| [데이터/벡터 플랫폼 소스 인사이트](../../source-insights/by-category/data-vector-platform/README.md) | source-insight-report | source-insights | 155 |
| [개발 생산성/DevTools 소스 인사이트](../../source-insights/by-category/developer-productivity/README.md) | source-insight-report | source-insights | 155 |
| [평가/관측/품질 소스 인사이트](../../source-insights/by-category/eval-observability/README.md) | source-insight-report | source-insights | 155 |
| [일반 AI 오픈소스 소스 인사이트](../../source-insights/by-category/general-ai-open-source/README.md) | source-insight-report | source-insights | 155 |
| [LLM 위키/RAG/지식베이스 소스 인사이트](../../source-insights/by-category/llm-wiki-rag/README.md) | source-insight-report | source-insights | 155 |
| [보안/거버넌스/안전 소스 인사이트](../../source-insights/by-category/security-governance/README.md) | source-insight-report | source-insights | 155 |
| [스펙 드리븐/요구사항 소스 인사이트](../../source-insights/by-category/spec-driven/README.md) | source-insight-report | source-insights | 155 |
| [전체 소스 스캔과 사용자 의도-코드 연결 방식 리서치 요약](../../full-source-scan-research-summary-2026-06-18.md) | overview-report | root | 143 |
| [공식 문서와 소스맵: Context Engineering, RAG, Local LLM, Agent Harness](../../adjacent-tech/03-official-docs-and-source-map.md) | infrastructure-report | adjacent-tech | 117 |
| [소스 인사이트 상세 비교 리포트](../../source-insights/comparative-report.md) | source-insight-report | source-insights | 117 |
| [레포별 소스 딥다이브](../../source-deep-dives/repositories/README.md) | source-deep-dive-report | source-deep-dives | 36 |
| [레포별 소스 딥다이브: Shard 0](../../source-deep-dives/repositories/0/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 1](../../source-deep-dives/repositories/1/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 2](../../source-deep-dives/repositories/2/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 3](../../source-deep-dives/repositories/3/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 4](../../source-deep-dives/repositories/4/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 5](../../source-deep-dives/repositories/5/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 6](../../source-deep-dives/repositories/6/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 7](../../source-deep-dives/repositories/7/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 8](../../source-deep-dives/repositories/8/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard 9](../../source-deep-dives/repositories/9/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard a](../../source-deep-dives/repositories/a/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard b](../../source-deep-dives/repositories/b/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard c](../../source-deep-dives/repositories/c/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard d](../../source-deep-dives/repositories/d/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard e](../../source-deep-dives/repositories/e/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [레포별 소스 딥다이브: Shard f](../../source-deep-dives/repositories/f/README.md) | source-deep-dive-report | source-deep-dives | 35 |
| [bits-bytes-nn/omnisummary 소스 딥다이브](../../source-deep-dives/repositories/1/bits-bytes-nn__omnisummary.md) | source-deep-dive-report | source-deep-dives | 20 |
| [naver/naver-openapi-guide 소스 딥다이브](../../source-deep-dives/repositories/1/naver__naver-openapi-guide.md) | source-deep-dive-report | source-deep-dives | 20 |
| [KalyanKS-NLP/rag-zero-to-hero-guide 소스 딥다이브](../../source-deep-dives/repositories/2/KalyanKS-NLP__rag-zero-to-hero-guide.md) | source-deep-dive-report | source-deep-dives | 20 |
| [run-llama/llama_index 소스 딥다이브](../../source-deep-dives/repositories/4/run-llama__llama_index.md) | source-deep-dive-report | source-deep-dives | 20 |
| [toss/yarn-plugin-catalogs 소스 딥다이브](../../source-deep-dives/repositories/a/toss__yarn-plugin-catalogs.md) | source-deep-dive-report | source-deep-dives | 20 |
| [cocoindex-io/cocoindex-code 소스 딥다이브](../../source-deep-dives/repositories/f/cocoindex-io__cocoindex-code.md) | source-deep-dive-report | source-deep-dives | 20 |
| [VectifyAI/PageIndex 소스 딥다이브](../../source-deep-dives/repositories/f/VectifyAI__PageIndex.md) | source-deep-dive-report | source-deep-dives | 20 |
| [0xPlaygrounds/rig 소스 딥다이브](../../source-deep-dives/repositories/0/0xPlaygrounds__rig.md) | source-deep-dive-report | source-deep-dives | -5 |
| [AD-Styles/MIND-CARE-Conversational-ChatBot 소스 딥다이브](../../source-deep-dives/repositories/0/AD-Styles__MIND-CARE-Conversational-ChatBot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [adminhelper/saju-engine 소스 딥다이브](../../source-deep-dives/repositories/0/adminhelper__saju-engine.md) | source-deep-dive-report | source-deep-dives | -5 |
| [airbytehq/airbyte-agent-sdk 소스 딥다이브](../../source-deep-dives/repositories/0/airbytehq__airbyte-agent-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [alibaba/zvec 소스 딥다이브](../../source-deep-dives/repositories/0/alibaba__zvec.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Andyyyy64/whichllm 소스 딥다이브](../../source-deep-dives/repositories/0/Andyyyy64__whichllm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [areal-project/AReaL 소스 딥다이브](../../source-deep-dives/repositories/0/areal-project__AReaL.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bagidea/bagidea-office 소스 딥다이브](../../source-deep-dives/repositories/0/bagidea__bagidea-office.md) | source-deep-dive-report | source-deep-dives | -5 |
| [BjornMelin/docmind-ai-llm 소스 딥다이브](../../source-deep-dives/repositories/0/BjornMelin__docmind-ai-llm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [borghei/Claude-Skills 소스 딥다이브](../../source-deep-dives/repositories/0/borghei__Claude-Skills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [charmbracelet/crush 소스 딥다이브](../../source-deep-dives/repositories/0/charmbracelet__crush.md) | source-deep-dive-report | source-deep-dives | -5 |
| [CoWork-OS/CoWork-OS 소스 딥다이브](../../source-deep-dives/repositories/0/CoWork-OS__CoWork-OS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/lynx-console 소스 딥다이브](../../source-deep-dives/repositories/0/daangn__lynx-console.md) | source-deep-dive-report | source-deep-dives | -5 |
| [DemonDamon/AgenticX 소스 딥다이브](../../source-deep-dives/repositories/0/DemonDamon__AgenticX.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Dicklesworthstone/mcp_agent_mail 소스 딥다이브](../../source-deep-dives/repositories/0/Dicklesworthstone__mcp_agent_mail.md) | source-deep-dive-report | source-deep-dives | -5 |
| [enescingoz/awesome-n8n-templates 소스 딥다이브](../../source-deep-dives/repositories/0/enescingoz__awesome-n8n-templates.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Engineering4AI/awesome-spec-driven-development 소스 딥다이브](../../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) | source-deep-dive-report | source-deep-dives | -5 |
| [eremes81/game-design-ai-practice-th 소스 딥다이브](../../source-deep-dives/repositories/0/eremes81__game-design-ai-practice-th.md) | source-deep-dive-report | source-deep-dives | -5 |
| [FlowiseAI/Flowise 소스 딥다이브](../../source-deep-dives/repositories/0/FlowiseAI__Flowise.md) | source-deep-dive-report | source-deep-dives | -5 |
| [HKUDS/DeepTutor 소스 딥다이브](../../source-deep-dives/repositories/0/HKUDS__DeepTutor.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hosungseo/agent-ready-check 소스 딥다이브](../../source-deep-dives/repositories/0/hosungseo__agent-ready-check.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hyperconnect/TC-ResNet 소스 딥다이브](../../source-deep-dives/repositories/0/hyperconnect__TC-ResNet.md) | source-deep-dive-report | source-deep-dives | -5 |
| [IBM/iac-spec-kit 소스 딥다이브](../../source-deep-dives/repositories/0/IBM__iac-spec-kit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Ikalus1988/MisakaNet 소스 딥다이브](../../source-deep-dives/repositories/0/Ikalus1988__MisakaNet.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jonfairbanks/local-rag 소스 딥다이브](../../source-deep-dives/repositories/0/jonfairbanks__local-rag.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/awesome-tech-newletters 소스 딥다이브](../../source-deep-dives/repositories/0/kakao__awesome-tech-newletters.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/karlo 소스 딥다이브](../../source-deep-dives/repositories/0/kakaobrain__karlo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kimsanguine/AI_Human 소스 딥다이브](../../source-deep-dives/repositories/0/kimsanguine__AI_Human.md) | source-deep-dive-report | source-deep-dives | -5 |
| [LazyAGI/LazyLLM 소스 딥다이브](../../source-deep-dives/repositories/0/LazyAGI__LazyLLM.md) | source-deep-dive-report | source-deep-dives | -5 |
| [letta-ai/letta-code 소스 딥다이브](../../source-deep-dives/repositories/0/letta-ai__letta-code.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/gradle-multi-project-support 소스 딥다이브](../../source-deep-dives/repositories/0/line__gradle-multi-project-support.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/webpack.kr 소스 딥다이브](../../source-deep-dives/repositories/0/line__webpack.kr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mastra-ai/mastra 소스 딥다이브](../../source-deep-dives/repositories/0/mastra-ai__mastra.md) | source-deep-dive-report | source-deep-dives | -5 |
| [matrixorigin/matrixone 소스 딥다이브](../../source-deep-dives/repositories/0/matrixorigin__matrixone.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/agent-framework 소스 딥다이브](../../source-deep-dives/repositories/0/microsoft__agent-framework.md) | source-deep-dive-report | source-deep-dives | -5 |
| [minmaxflow/mini-kode 소스 딥다이브](../../source-deep-dives/repositories/0/minmaxflow__mini-kode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mozilla-ai/llamafile 소스 딥다이브](../../source-deep-dives/repositories/0/mozilla-ai__llamafile.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Natively-AI-assistant/natively-cluely-ai-assistant 소스 딥다이브](../../source-deep-dives/repositories/0/Natively-AI-assistant__natively-cluely-ai-assistant.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/cgd 소스 딥다이브](../../source-deep-dives/repositories/0/naver__cgd.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs 소스 딥다이브](../../source-deep-dives/repositories/0/naver__egjs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/fe-news 소스 딥다이브](../../source-deep-dives/repositories/0/naver__fe-news.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/hackday-conventions-java 소스 딥다이브](../../source-deep-dives/repositories/0/naver__hackday-conventions-java.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/naveridlogin-sdk-android 소스 딥다이브](../../source-deep-dives/repositories/0/naver__naveridlogin-sdk-android.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/chacha-chatbot 소스 딥다이브](../../source-deep-dives/repositories/0/naver-ai__chacha-chatbot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/korean-safety-benchmarks 소스 딥다이브](../../source-deep-dives/repositories/0/naver-ai__korean-safety-benchmarks.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/sommelier 소스 딥다이브](../../source-deep-dives/repositories/0/naver-ai__sommelier.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/w-ood 소스 딥다이브](../../source-deep-dives/repositories/0/naver-ai__w-ood.md) | source-deep-dive-report | source-deep-dives | -5 |
| [neuml/txtai 소스 딥다이브](../../source-deep-dives/repositories/0/neuml__txtai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nex-crm/wuphf 소스 딥다이브](../../source-deep-dives/repositories/0/nex-crm__wuphf.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/toast-haste.framework 소스 딥다이브](../../source-deep-dives/repositories/0/nhn__toast-haste.framework.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/toast-ui.doc 소스 딥다이브](../../source-deep-dives/repositories/0/nhn__toast-ui.doc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.tree 소스 딥다이브](../../source-deep-dives/repositories/0/nhn__tui.tree.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nirholas/three.ws 소스 딥다이브](../../source-deep-dives/repositories/0/nirholas__three.ws.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Ontos-AI/knowhere 소스 딥다이브](../../source-deep-dives/repositories/0/Ontos-AI__knowhere.md) | source-deep-dive-report | source-deep-dives | -5 |
| [PaddlePaddle/FastDeploy 소스 딥다이브](../../source-deep-dives/repositories/0/PaddlePaddle__FastDeploy.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Palm1r/QodeAssist 소스 딥다이브](../../source-deep-dives/repositories/0/Palm1r__QodeAssist.md) | source-deep-dive-report | source-deep-dives | -5 |
| [PleasePrompto/notebooklm-mcp 소스 딥다이브](../../source-deep-dives/repositories/0/PleasePrompto__notebooklm-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [rawdev/MemoryWeft 소스 딥다이브](../../source-deep-dives/repositories/0/rawdev__MemoryWeft.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/TizenTVApps 소스 딥다이브](../../source-deep-dives/repositories/0/Samsung__TizenTVApps.md) | source-deep-dive-report | source-deep-dives | -5 |
| [skyzh/tiny-llm 소스 딥다이브](../../source-deep-dives/repositories/0/skyzh__tiny-llm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [speakeasy-api/speakeasy 소스 딥다이브](../../source-deep-dives/repositories/0/speakeasy-api__speakeasy.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stephano0308-cloud/korean-law-mcp 소스 딥다이브](../../source-deep-dives/repositories/0/stephano0308-cloud__korean-law-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ThomasVitale/llm-apps-java-spring-ai 소스 딥다이브](../../source-deep-dives/repositories/0/ThomasVitale__llm-apps-java-spring-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tobi/qmd 소스 딥다이브](../../source-deep-dives/repositories/0/tobi__qmd.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/frontend-fundamentals 소스 딥다이브](../../source-deep-dives/repositories/0/toss__frontend-fundamentals.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/granite 소스 딥다이브](../../source-deep-dives/repositories/0/toss__granite.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/overlay-kit 소스 딥다이브](../../source-deep-dives/repositories/0/toss__overlay-kit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [trpc-group/trpc-agent-go 소스 딥다이브](../../source-deep-dives/repositories/0/trpc-group__trpc-agent-go.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vishalsachdev/canvas-mcp 소스 딥다이브](../../source-deep-dives/repositories/0/vishalsachdev__canvas-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [weaviate/weaviate 소스 딥다이브](../../source-deep-dives/repositories/0/weaviate__weaviate.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-racingcar 소스 딥다이브](../../source-deep-dives/repositories/0/woowacourse__java-racingcar.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-subway-path-precourse 소스 딥다이브](../../source-deep-dives/repositories/0/woowacourse__java-subway-path-precourse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [xr843/fojin 소스 딥다이브](../../source-deep-dives/repositories/0/xr843__fojin.md) | source-deep-dive-report | source-deep-dives | -5 |
| [yjhann33-design/korea-stock-insight-mcp 소스 딥다이브](../../source-deep-dives/repositories/0/yjhann33-design__korea-stock-insight-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [yvgude/lean-ctx 소스 딥다이브](../../source-deep-dives/repositories/0/yvgude__lean-ctx.md) | source-deep-dive-report | source-deep-dives | -5 |
| [aesthetic-legalism5470/korean-dart-mcp 소스 딥다이브](../../source-deep-dives/repositories/1/aesthetic-legalism5470__korean-dart-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [alpic-ai/skybridge 소스 딥다이브](../../source-deep-dives/repositories/1/alpic-ai__skybridge.md) | source-deep-dive-report | source-deep-dives | -5 |
| [apify/crawlee 소스 딥다이브](../../source-deep-dives/repositories/1/apify__crawlee.md) | source-deep-dive-report | source-deep-dives | -5 |
| [askimo-ai/askimo 소스 딥다이브](../../source-deep-dives/repositories/1/askimo-ai__askimo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [av/harbor 소스 딥다이브](../../source-deep-dives/repositories/1/av__harbor.md) | source-deep-dive-report | source-deep-dives | -5 |
| [aws-samples/generative-ai-use-cases 소스 딥다이브](../../source-deep-dives/repositories/1/aws-samples__generative-ai-use-cases.md) | source-deep-dive-report | source-deep-dives | -5 |
| [cheshire-cat-ai/core 소스 딥다이브](../../source-deep-dives/repositories/1/cheshire-cat-ai__core.md) | source-deep-dive-report | source-deep-dives | -5 |
| [clay-good/OpenLore 소스 딥다이브](../../source-deep-dives/repositories/1/clay-good__OpenLore.md) | source-deep-dive-report | source-deep-dives | -5 |
| [DeusData/codebase-memory-mcp 소스 딥다이브](../../source-deep-dives/repositories/1/DeusData__codebase-memory-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dongdorrong/korean-law-mcp-lab 소스 딥다이브](../../source-deep-dives/repositories/1/dongdorrong__korean-law-mcp-lab.md) | source-deep-dive-report | source-deep-dives | -5 |
| [EfficientContext/ContextPilot 소스 딥다이브](../../source-deep-dives/repositories/1/EfficientContext__ContextPilot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [entireio/cli 소스 딥다이브](../../source-deep-dives/repositories/1/entireio__cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [everynation/kimchisushi-mcp 소스 딥다이브](../../source-deep-dives/repositories/1/everynation__kimchisushi-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [firecrawl/firecrawl 소스 딥다이브](../../source-deep-dives/repositories/1/firecrawl__firecrawl.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hskim-solv/BidMate-DocAgent 소스 딥다이브](../../source-deep-dives/repositories/1/hskim-solv__BidMate-DocAgent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [johnisanerd/Apify-Naver-Search-API 소스 딥다이브](../../source-deep-dives/repositories/1/johnisanerd__Apify-Naver-Search-API.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Jovancoding/Network-AI 소스 딥다이브](../../source-deep-dives/repositories/1/Jovancoding__Network-AI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/kanana 소스 딥다이브](../../source-deep-dives/repositories/1/kakao__kanana.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Kiln-AI/Kiln 소스 딥다이브](../../source-deep-dives/repositories/1/Kiln-AI__Kiln.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kubeflow/mcp-apache-spark-history-server 소스 딥다이브](../../source-deep-dives/repositories/1/kubeflow__mcp-apache-spark-history-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [labring/FastGPT 소스 딥다이브](../../source-deep-dives/repositories/1/labring__FastGPT.md) | source-deep-dive-report | source-deep-dives | -5 |
| [livekit/agents 소스 딥다이브](../../source-deep-dives/repositories/1/livekit__agents.md) | source-deep-dive-report | source-deep-dives | -5 |
| [lxxzdrgnl/SAJUGURI 소스 딥다이브](../../source-deep-dives/repositories/1/lxxzdrgnl__SAJUGURI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [majiayu000/remem 소스 딥다이브](../../source-deep-dives/repositories/1/majiayu000__remem.md) | source-deep-dive-report | source-deep-dives | -5 |
| [makoMakoGo/fish-claude 소스 딥다이브](../../source-deep-dives/repositories/1/makoMakoGo__fish-claude.md) | source-deep-dive-report | source-deep-dives | -5 |
| [markhuangai/dense-mem 소스 딥다이브](../../source-deep-dives/repositories/1/markhuangai__dense-mem.md) | source-deep-dive-report | source-deep-dives | -5 |
| [markus-global/markus 소스 딥다이브](../../source-deep-dives/repositories/1/markus-global__markus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [memex-lab/memex 소스 딥다이브](../../source-deep-dives/repositories/1/memex-lab__memex.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol 소스 딥다이브](../../source-deep-dives/repositories/1/microsoft__aitour26-WRK540-unlock-your-agents-potential-with-model-context-protocol.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Mintplex-Labs/anything-llm 소스 딥다이브](../../source-deep-dives/repositories/1/Mintplex-Labs__anything-llm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/go-sdk 소스 딥다이브](../../source-deep-dives/repositories/1/modelcontextprotocol__go-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/quickstart-resources 소스 딥다이브](../../source-deep-dives/repositories/1/modelcontextprotocol__quickstart-resources.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/anny 소스 딥다이브](../../source-deep-dives/repositories/1/naver__anny.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/cfcs 소스 딥다이브](../../source-deep-dives/repositories/1/naver__cfcs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-infinitegrid 소스 딥다이브](../../source-deep-dives/repositories/1/naver__egjs-infinitegrid.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/image-sprite-webpack-plugin 소스 딥다이브](../../source-deep-dives/repositories/1/naver__image-sprite-webpack-plugin.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/r2d2 소스 딥다이브](../../source-deep-dives/repositories/1/naver__r2d2.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/shine 소스 딥다이브](../../source-deep-dives/repositories/1/naver__shine.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/tamgu 소스 딥다이브](../../source-deep-dives/repositories/1/naver__tamgu.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/gpm.unity 소스 딥다이브](../../source-deep-dives/repositories/1/nhn__gpm.unity.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/socket.io-client-unity3d 소스 딥다이브](../../source-deep-dives/repositories/1/nhn__socket.io-client-unity3d.md) | source-deep-dive-report | source-deep-dives | -5 |
| [onlybooks/llm 소스 딥다이브](../../source-deep-dives/repositories/1/onlybooks__llm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [openai/evals 소스 딥다이브](../../source-deep-dives/repositories/1/openai__evals.md) | source-deep-dive-report | source-deep-dives | -5 |
| [opencode-ai/opencode 소스 딥다이브](../../source-deep-dives/repositories/1/opencode-ai__opencode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [opensolon/solon-ai 소스 딥다이브](../../source-deep-dives/repositories/1/opensolon__solon-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [OrionStarAI/Orion 소스 딥다이브](../../source-deep-dives/repositories/1/OrionStarAI__Orion.md) | source-deep-dive-report | source-deep-dives | -5 |
| [oumi-ai/oumi 소스 딥다이브](../../source-deep-dives/repositories/1/oumi-ai__oumi.md) | source-deep-dive-report | source-deep-dives | -5 |
| [qdrant/qdrant 소스 딥다이브](../../source-deep-dives/repositories/1/qdrant__qdrant.md) | source-deep-dive-report | source-deep-dives | -5 |
| [reshaprio/reshapr 소스 딥다이브](../../source-deep-dives/repositories/1/reshaprio__reshapr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/Fluff 소스 딥다이브](../../source-deep-dives/repositories/1/Samsung__Fluff.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/microbit 소스 딥다이브](../../source-deep-dives/repositories/1/Samsung__microbit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/netcoredbg 소스 딥다이브](../../source-deep-dives/repositories/1/Samsung__netcoredbg.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sanonone/kektordb 소스 딥다이브](../../source-deep-dives/repositories/1/sanonone__kektordb.md) | source-deep-dive-report | source-deep-dives | -5 |
| [santifer/career-ops 소스 딥다이브](../../source-deep-dives/repositories/1/santifer__career-ops.md) | source-deep-dive-report | source-deep-dives | -5 |
| [timescale/pgvectorscale 소스 딥다이브](../../source-deep-dives/repositories/1/timescale__pgvectorscale.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/es-hangul 소스 딥다이브](../../source-deep-dives/repositories/1/toss__es-hangul.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/es-toolkit 소스 딥다이브](../../source-deep-dives/repositories/1/toss__es-toolkit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [treesoop/hwp-mcp 소스 딥다이브](../../source-deep-dives/repositories/1/treesoop__hwp-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [utensils/mcp-nixos 소스 딥다이브](../../source-deep-dives/repositories/1/utensils__mcp-nixos.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vercel/ai 소스 딥다이브](../../source-deep-dives/repositories/1/vercel__ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [witchan/ios-mcp 소스 딥다이브](../../source-deep-dives/repositories/1/witchan__ios-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/react-payments 소스 딥다이브](../../source-deep-dives/repositories/1/woowacourse__react-payments.md) | source-deep-dive-report | source-deep-dives | -5 |
| [yomorun/yomo 소스 딥다이브](../../source-deep-dives/repositories/1/yomorun__yomo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zhimaAi/ChatClaw 소스 딥다이브](../../source-deep-dives/repositories/1/zhimaAi__ChatClaw.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zhuyansen/agent-skills-hub 소스 딥다이브](../../source-deep-dives/repositories/1/zhuyansen__agent-skills-hub.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zubair-trabzada/geo-seo-claude 소스 딥다이브](../../source-deep-dives/repositories/1/zubair-trabzada__geo-seo-claude.md) | source-deep-dive-report | source-deep-dives | -5 |
| [agentscope-ai/agentscope-java 소스 딥다이브](../../source-deep-dives/repositories/2/agentscope-ai__agentscope-java.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Aider-AI/aider 소스 딥다이브](../../source-deep-dives/repositories/2/Aider-AI__aider.md) | source-deep-dive-report | source-deep-dives | -5 |
| [aliyun/alibabacloud-dataworks-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/2/aliyun__alibabacloud-dataworks-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [amaynez/kiro-style-sdd 소스 딥다이브](../../source-deep-dives/repositories/2/amaynez__kiro-style-sdd.md) | source-deep-dive-report | source-deep-dives | -5 |
| [awslabs/aidlc-workflows 소스 딥다이브](../../source-deep-dives/repositories/2/awslabs__aidlc-workflows.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bripin123/rag-memory-epf-mcp 소스 딥다이브](../../source-deep-dives/repositories/2/bripin123__rag-memory-epf-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [browser-use/browser-use 소스 딥다이브](../../source-deep-dives/repositories/2/browser-use__browser-use.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ceaksan/mcp-code-search 소스 딥다이브](../../source-deep-dives/repositories/2/ceaksan__mcp-code-search.md) | source-deep-dive-report | source-deep-dives | -5 |
| [comet-ml/opik 소스 딥다이브](../../source-deep-dives/repositories/2/comet-ml__opik.md) | source-deep-dive-report | source-deep-dives | -5 |
| [confident-ai/deepeval 소스 딥다이브](../../source-deep-dives/repositories/2/confident-ai__deepeval.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dappros/ethora 소스 딥다이브](../../source-deep-dives/repositories/2/dappros__ethora.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dream8837z/hwp-hwpx-proposal-mcp 소스 딥다이브](../../source-deep-dives/repositories/2/dream8837z__hwp-hwpx-proposal-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [espressif/esp-claw 소스 딥다이브](../../source-deep-dives/repositories/2/espressif__esp-claw.md) | source-deep-dive-report | source-deep-dives | -5 |
| [existential-birds/beagle 소스 딥다이브](../../source-deep-dives/repositories/2/existential-birds__beagle.md) | source-deep-dive-report | source-deep-dives | -5 |
| [fdueblab/Micro-Agent 소스 딥다이브](../../source-deep-dives/repositories/2/fdueblab__Micro-Agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gastownhall/beads 소스 딥다이브](../../source-deep-dives/repositories/2/gastownhall__beads.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Goldentrii/AgentRecall-MCP 소스 딥다이브](../../source-deep-dives/repositories/2/Goldentrii__AgentRecall-MCP.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gollem-dev/gollem 소스 딥다이브](../../source-deep-dives/repositories/2/gollem-dev__gollem.md) | source-deep-dive-report | source-deep-dives | -5 |
| [green-dalii/obsidian-llm-wiki 소스 딥다이브](../../source-deep-dives/repositories/2/green-dalii__obsidian-llm-wiki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [henomis/phero 소스 딥다이브](../../source-deep-dives/repositories/2/henomis__phero.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hexabot-ai/Hexabot 소스 딥다이브](../../source-deep-dives/repositories/2/hexabot-ai__Hexabot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hmmhmmhm/daiso-mcp 소스 딥다이브](../../source-deep-dives/repositories/2/hmmhmmhm__daiso-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hoangsonww/Claude-Code-Agent-Monitor 소스 딥다이브](../../source-deep-dives/repositories/2/hoangsonww__Claude-Code-Agent-Monitor.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hyperconnect/LADE 소스 딥다이브](../../source-deep-dives/repositories/2/hyperconnect__LADE.md) | source-deep-dive-report | source-deep-dives | -5 |
| [InsForge/InsForge 소스 딥다이브](../../source-deep-dives/repositories/2/InsForge__InsForge.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jgravelle/jcodemunch-mcp 소스 딥다이브](../../source-deep-dives/repositories/2/jgravelle__jcodemunch-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [JinhuiStudy/llm-engineering-bootcamp 소스 딥다이브](../../source-deep-dives/repositories/2/JinhuiStudy__llm-engineering-bootcamp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [joshuaswarren/remnic 소스 딥다이브](../../source-deep-dives/repositories/2/joshuaswarren__remnic.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/hbase-region-inspector 소스 딥다이브](../../source-deep-dives/repositories/2/kakao__hbase-region-inspector.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/g2pm 소스 딥다이브](../../source-deep-dives/repositories/2/kakaobrain__g2pm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/torchlars 소스 딥다이브](../../source-deep-dives/repositories/2/kakaobrain__torchlars.md) | source-deep-dive-report | source-deep-dives | -5 |
| [latemonk/agent-store-skills 소스 딥다이브](../../source-deep-dives/repositories/2/latemonk__agent-store-skills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [liaohch3/claude-tap 소스 딥다이브](../../source-deep-dives/repositories/2/liaohch3__claude-tap.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/decaton 소스 딥다이브](../../source-deep-dives/repositories/2/line__decaton.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/seed 소스 딥다이브](../../source-deep-dives/repositories/2/line__seed.md) | source-deep-dive-report | source-deep-dives | -5 |
| [linny006/rag-radar 소스 딥다이브](../../source-deep-dives/repositories/2/linny006__rag-radar.md) | source-deep-dive-report | source-deep-dives | -5 |
| [loved0543-dotcom/kdata-gate-mcp 소스 딥다이브](../../source-deep-dives/repositories/2/loved0543-dotcom__kdata-gate-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/graphrag 소스 딥다이브](../../source-deep-dives/repositories/2/microsoft__graphrag.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/python-sdk 소스 딥다이브](../../source-deep-dives/repositories/2/modelcontextprotocol__python-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-view3d 소스 딥다이브](../../source-deep-dives/repositories/2/naver__egjs-view3d.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/BlendNeRF 소스 딥다이브](../../source-deep-dives/repositories/2/naver-ai__BlendNeRF.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NirDiamant/GenAI_Agents 소스 딥다이브](../../source-deep-dives/repositories/2/NirDiamant__GenAI_Agents.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NirDiamant/RAG_Techniques 소스 딥다이브](../../source-deep-dives/repositories/2/NirDiamant__RAG_Techniques.md) | source-deep-dive-report | source-deep-dives | -5 |
| [oobabooga/text-generation-webui 소스 딥다이브](../../source-deep-dives/repositories/2/oobabooga__text-generation-webui.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Panniantong/Agent-Reach 소스 딥다이브](../../source-deep-dives/repositories/2/Panniantong__Agent-Reach.md) | source-deep-dive-report | source-deep-dives | -5 |
| [patchy631/ai-engineering-hub 소스 딥다이브](../../source-deep-dives/repositories/2/patchy631__ai-engineering-hub.md) | source-deep-dive-report | source-deep-dives | -5 |
| [plastic-labs/honcho 소스 딥다이브](../../source-deep-dives/repositories/2/plastic-labs__honcho.md) | source-deep-dive-report | source-deep-dives | -5 |
| [PlateerLab/document-adapter 소스 딥다이브](../../source-deep-dives/repositories/2/PlateerLab__document-adapter.md) | source-deep-dive-report | source-deep-dives | -5 |
| [QwenLM/qwen-code 소스 딥다이브](../../source-deep-dives/repositories/2/QwenLM__qwen-code.md) | source-deep-dive-report | source-deep-dives | -5 |
| [raullenchai/Rapid-MLX 소스 딥다이브](../../source-deep-dives/repositories/2/raullenchai__Rapid-MLX.md) | source-deep-dive-report | source-deep-dives | -5 |
| [robotmcp/ros-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/2/robotmcp__ros-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Rose22/openlumara 소스 딥다이브](../../source-deep-dives/repositories/2/Rose22__openlumara.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ruvnet/ruflo 소스 딥다이브](../../source-deep-dives/repositories/2/ruvnet__ruflo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/cotopaxi 소스 딥다이브](../../source-deep-dives/repositories/2/Samsung__cotopaxi.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/CredSweeper 소스 딥다이브](../../source-deep-dives/repositories/2/Samsung__CredSweeper.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/veles 소스 딥다이브](../../source-deep-dives/repositories/2/Samsung__veles.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/Vyond 소스 딥다이브](../../source-deep-dives/repositories/2/Samsung__Vyond.md) | source-deep-dive-report | source-deep-dives | -5 |
| [semantica-agi/semantica 소스 딥다이브](../../source-deep-dives/repositories/2/semantica-agi__semantica.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Significant-Gravitas/AutoGPT 소스 딥다이브](../../source-deep-dives/repositories/2/Significant-Gravitas__AutoGPT.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sodam-ai/Langent-MCP_One-Click_Kit 소스 딥다이브](../../source-deep-dives/repositories/2/sodam-ai__Langent-MCP_One-Click_Kit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SonarSource/sonarqube-cli 소스 딥다이브](../../source-deep-dives/repositories/2/SonarSource__sonarqube-cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stanford-oval/WikiChat 소스 딥다이브](../../source-deep-dives/repositories/2/stanford-oval__WikiChat.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stanfordnlp/dspy 소스 딥다이브](../../source-deep-dives/repositories/2/stanfordnlp__dspy.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tjwodud04/mcp-tour 소스 딥다이브](../../source-deep-dives/repositories/2/tjwodud04__mcp-tour.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tobocop2/lilbee 소스 딥다이브](../../source-deep-dives/repositories/2/tobocop2__lilbee.md) | source-deep-dive-report | source-deep-dives | -5 |
| [UI5/mcp-server 소스 딥다이브](../../source-deep-dives/repositories/2/UI5__mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vectorize-io/hindsight 소스 딥다이브](../../source-deep-dives/repositories/2/vectorize-io__hindsight.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vllm-project/vllm-ascend 소스 딥다이브](../../source-deep-dives/repositories/2/vllm-project__vllm-ascend.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vstorm-co/full-stack-ai-agent-template 소스 딥다이브](../../source-deep-dives/repositories/2/vstorm-co__full-stack-ai-agent-template.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-vendingmachine-precourse 소스 딥다이브](../../source-deep-dives/repositories/2/woowacourse__java-vendingmachine-precourse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/javascript-baseball-precourse 소스 딥다이브](../../source-deep-dives/repositories/2/woowacourse__javascript-baseball-precourse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ZHangZHengEric/Sage 소스 딥다이브](../../source-deep-dives/repositories/2/ZHangZHengEric__Sage.md) | source-deep-dive-report | source-deep-dives | -5 |
| [2FastLabs/agent-squad 소스 딥다이브](../../source-deep-dives/repositories/3/2FastLabs__agent-squad.md) | source-deep-dive-report | source-deep-dives | -5 |
| [403errors/repomind 소스 딥다이브](../../source-deep-dives/repositories/3/403errors__repomind.md) | source-deep-dive-report | source-deep-dives | -5 |
| [aaif-goose/goose 소스 딥다이브](../../source-deep-dives/repositories/3/aaif-goose__goose.md) | source-deep-dive-report | source-deep-dives | -5 |
| [agents-flex/agents-flex 소스 딥다이브](../../source-deep-dives/repositories/3/agents-flex__agents-flex.md) | source-deep-dive-report | source-deep-dives | -5 |
| [AstrBotDevs/AstrBot 소스 딥다이브](../../source-deep-dives/repositories/3/AstrBotDevs__AstrBot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [boldsoftware/shelley 소스 딥다이브](../../source-deep-dives/repositories/3/boldsoftware__shelley.md) | source-deep-dive-report | source-deep-dives | -5 |
| [boshu2/agentops 소스 딥다이브](../../source-deep-dives/repositories/3/boshu2__agentops.md) | source-deep-dive-report | source-deep-dives | -5 |
| [BuilderIO/skills 소스 딥다이브](../../source-deep-dives/repositories/3/BuilderIO__skills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [can1357/oh-my-pi 소스 딥다이브](../../source-deep-dives/repositories/3/can1357__oh-my-pi.md) | source-deep-dive-report | source-deep-dives | -5 |
| [CaviraOSS/OpenMemory 소스 딥다이브](../../source-deep-dives/repositories/3/CaviraOSS__OpenMemory.md) | source-deep-dive-report | source-deep-dives | -5 |
| [chatwoot/chatwoot 소스 딥다이브](../../source-deep-dives/repositories/3/chatwoot__chatwoot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [cisco-ai-defense/mcp-scanner 소스 딥다이브](../../source-deep-dives/repositories/3/cisco-ai-defense__mcp-scanner.md) | source-deep-dive-report | source-deep-dives | -5 |
| [codecentric/c4-genai-suite 소스 딥다이브](../../source-deep-dives/repositories/3/codecentric__c4-genai-suite.md) | source-deep-dive-report | source-deep-dives | -5 |
| [containers/kubernetes-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/3/containers__kubernetes-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Cranot/roam-code 소스 딥다이브](../../source-deep-dives/repositories/3/Cranot__roam-code.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/greenhouse-js 소스 딥다이브](../../source-deep-dives/repositories/3/daangn__greenhouse-js.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/ventyd 소스 딥다이브](../../source-deep-dives/repositories/3/daangn__ventyd.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Denis2054/Context-Engineering-for-Multi-Agent-Systems 소스 딥다이브](../../source-deep-dives/repositories/3/Denis2054__Context-Engineering-for-Multi-Agent-Systems.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Dicklesworthstone/mcp_agent_mail_rust 소스 딥다이브](../../source-deep-dives/repositories/3/Dicklesworthstone__mcp_agent_mail_rust.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Fission-AI/OpenSpec 소스 딥다이브](../../source-deep-dives/repositories/3/Fission-AI__OpenSpec.md) | source-deep-dive-report | source-deep-dives | -5 |
| [generalaction/emdash 소스 딥다이브](../../source-deep-dives/repositories/3/generalaction__emdash.md) | source-deep-dive-report | source-deep-dives | -5 |
| [getsentry/XcodeBuildMCP 소스 딥다이브](../../source-deep-dives/repositories/3/getsentry__XcodeBuildMCP.md) | source-deep-dive-report | source-deep-dives | -5 |
| [giselles-ai/giselle 소스 딥다이브](../../source-deep-dives/repositories/3/giselles-ai__giselle.md) | source-deep-dive-report | source-deep-dives | -5 |
| [googleapis/mcp-toolbox 소스 딥다이브](../../source-deep-dives/repositories/3/googleapis__mcp-toolbox.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gracebereblue-cpu/-mcp 소스 딥다이브](../../source-deep-dives/repositories/3/gracebereblue-cpu__-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gsd-build/get-shit-done 소스 딥다이브](../../source-deep-dives/repositories/3/gsd-build__get-shit-done.md) | source-deep-dive-report | source-deep-dives | -5 |
| [IBM/AssetOpsBench 소스 딥다이브](../../source-deep-dives/repositories/3/IBM__AssetOpsBench.md) | source-deep-dive-report | source-deep-dives | -5 |
| [juyterman1000/entroly 소스 딥다이브](../../source-deep-dives/repositories/3/juyterman1000__entroly.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/kafka-sink-connector 소스 딥다이브](../../source-deep-dives/repositories/3/kakao__kafka-sink-connector.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/kakao_flutter_sdk 소스 딥다이브](../../source-deep-dives/repositories/3/kakao__kakao_flutter_sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kokogo100/ragalgo-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/3/kokogo100__ragalgo-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langchain-ai/open-swe 소스 딥다이브](../../source-deep-dives/repositories/3/langchain-ai__open-swe.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Light-Heart-Labs/DreamServer 소스 딥다이브](../../source-deep-dives/repositories/3/Light-Heart-Labs__DreamServer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/aes-gcm-siv 소스 딥다이브](../../source-deep-dives/repositories/3/line__aes-gcm-siv.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/create-liff-app 소스 딥다이브](../../source-deep-dives/repositories/3/line__create-liff-app.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/kubectl-kustomize 소스 딥다이브](../../source-deep-dives/repositories/3/line__kubectl-kustomize.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/liff-mock 소스 딥다이브](../../source-deep-dives/repositories/3/line__liff-mock.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-liff-v2-starter 소스 딥다이브](../../source-deep-dives/repositories/3/line__line-liff-v2-starter.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/open-universe 소스 딥다이브](../../source-deep-dives/repositories/3/line__open-universe.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/promgen 소스 딥다이브](../../source-deep-dives/repositories/3/line__promgen.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/req-shield 소스 딥다이브](../../source-deep-dives/repositories/3/line__req-shield.md) | source-deep-dive-report | source-deep-dives | -5 |
| [memgraph/memgraph 소스 딥다이브](../../source-deep-dives/repositories/3/memgraph__memgraph.md) | source-deep-dive-report | source-deep-dives | -5 |
| [memvid/memvid 소스 딥다이브](../../source-deep-dives/repositories/3/memvid__memvid.md) | source-deep-dive-report | source-deep-dives | -5 |
| [moorcheh-ai/memanto 소스 딥다이브](../../source-deep-dives/repositories/3/moorcheh-ai__memanto.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mreferre/ralph-loop-kiro-specs 소스 딥다이브](../../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/arcus 소스 딥다이브](../../source-deep-dives/repositories/3/naver__arcus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/billboard.js 소스 딥다이브](../../source-deep-dives/repositories/3/naver__billboard.js.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-grid 소스 딥다이브](../../source-deep-dives/repositories/3/naver__egjs-grid.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-persist 소스 딥다이브](../../source-deep-dives/repositories/3/naver__egjs-persist.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/pcmepp 소스 딥다이브](../../source-deep-dives/repositories/3/naver-ai__pcmepp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/StyleKeeper 소스 딥다이브](../../source-deep-dives/repositories/3/naver-ai__StyleKeeper.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/vidt 소스 딥다이브](../../source-deep-dives/repositories/3/naver-ai__vidt.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.pagination 소스 딥다이브](../../source-deep-dives/repositories/3/nhn__tui.pagination.md) | source-deep-dive-report | source-deep-dives | -5 |
| [plandex-ai/plandex 소스 딥다이브](../../source-deep-dives/repositories/3/plandex-ai__plandex.md) | source-deep-dive-report | source-deep-dives | -5 |
| [redis/redis 소스 딥다이브](../../source-deep-dives/repositories/3/redis__redis.md) | source-deep-dive-report | source-deep-dives | -5 |
| [rhkswnd0118-crypto/korean-rag-chatbot-boilerplate 소스 딥다이브](../../source-deep-dives/repositories/3/rhkswnd0118-crypto__korean-rag-chatbot-boilerplate.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ruvnet/agent-harness-generator 소스 딥다이브](../../source-deep-dives/repositories/3/ruvnet__agent-harness-generator.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/360tools 소스 딥다이브](../../source-deep-dives/repositories/3/Samsung__360tools.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/Chromium 소스 딥다이브](../../source-deep-dives/repositories/3/Samsung__Chromium.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/TICO 소스 딥다이브](../../source-deep-dives/repositories/3/Samsung__TICO.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/Tizen-CSharp-Samples 소스 딥다이브](../../source-deep-dives/repositories/3/Samsung__Tizen-CSharp-Samples.md) | source-deep-dive-report | source-deep-dives | -5 |
| [simstudioai/sim 소스 딥다이브](../../source-deep-dives/repositories/3/simstudioai__sim.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sktelecom/sktelecom.github.io 소스 딥다이브](../../source-deep-dives/repositories/3/sktelecom__sktelecom.github.io.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Softeria/ms-365-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/3/Softeria__ms-365-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sourcebot-dev/sourcebot 소스 딥다이브](../../source-deep-dives/repositories/3/sourcebot-dev__sourcebot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stackql/stackql 소스 딥다이브](../../source-deep-dives/repositories/3/stackql__stackql.md) | source-deep-dive-report | source-deep-dives | -5 |
| [szczyglis-dev/py-gpt 소스 딥다이브](../../source-deep-dives/repositories/3/szczyglis-dev__py-gpt.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tesslio/spec-driven-development-tile 소스 딥다이브](../../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) | source-deep-dive-report | source-deep-dives | -5 |
| [theopenco/llmgateway 소스 딥다이브](../../source-deep-dives/repositories/3/theopenco__llmgateway.md) | source-deep-dive-report | source-deep-dives | -5 |
| [thushan/olla 소스 딥다이브](../../source-deep-dives/repositories/3/thushan__olla.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toeverything/AFFiNE 소스 딥다이브](../../source-deep-dives/repositories/3/toeverything__AFFiNE.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/apps-in-toss-examples 소스 딥다이브](../../source-deep-dives/repositories/3/toss__apps-in-toss-examples.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/h6s 소스 딥다이브](../../source-deep-dives/repositories/3/toss__h6s.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/suspensive 소스 딥다이브](../../source-deep-dives/repositories/3/toss__suspensive.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vasu-devs/JustHireMe 소스 딥다이브](../../source-deep-dives/repositories/3/vasu-devs__JustHireMe.md) | source-deep-dive-report | source-deep-dives | -5 |
| [WolframResearch/AgentTools 소스 딥다이브](../../source-deep-dives/repositories/3/WolframResearch__AgentTools.md) | source-deep-dive-report | source-deep-dives | -5 |
| [yologdev/yoyo-evolve 소스 딥다이브](../../source-deep-dives/repositories/3/yologdev__yoyo-evolve.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Zoo-Code-Org/Zoo-Code 소스 딥다이브](../../source-deep-dives/repositories/3/Zoo-Code-Org__Zoo-Code.md) | source-deep-dive-report | source-deep-dives | -5 |
| [adbar/trafilatura 소스 딥다이브](../../source-deep-dives/repositories/4/adbar__trafilatura.md) | source-deep-dive-report | source-deep-dives | -5 |
| [archcore-ai/cli 소스 딥다이브](../../source-deep-dives/repositories/4/archcore-ai__cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bytedance/deer-flow 소스 딥다이브](../../source-deep-dives/repositories/4/bytedance__deer-flow.md) | source-deep-dive-report | source-deep-dives | -5 |
| [cloudwego/eino 소스 딥다이브](../../source-deep-dives/repositories/4/cloudwego__eino.md) | source-deep-dive-report | source-deep-dives | -5 |
| [crewAIInc/crewAI 소스 딥다이브](../../source-deep-dives/repositories/4/crewAIInc__crewAI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/cjk-slug 소스 딥다이브](../../source-deep-dives/repositories/4/daangn__cjk-slug.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/metabridge 소스 딥다이브](../../source-deep-dives/repositories/4/daangn__metabridge.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dangamsoft/cafe-mcp 소스 딥다이브](../../source-deep-dives/repositories/4/dangamsoft__cafe-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [datawhalechina/tiny-universe 소스 딥다이브](../../source-deep-dives/repositories/4/datawhalechina__tiny-universe.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dbt-labs/dbt-mcp 소스 딥다이브](../../source-deep-dives/repositories/4/dbt-labs__dbt-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [DECK6/korea-mice-safety-agent 소스 딥다이브](../../source-deep-dives/repositories/4/DECK6__korea-mice-safety-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dnotitia/akb 소스 딥다이브](../../source-deep-dives/repositories/4/dnotitia__akb.md) | source-deep-dive-report | source-deep-dives | -5 |
| [evalstate/fast-agent 소스 딥다이브](../../source-deep-dives/repositories/4/evalstate__fast-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [facebookresearch/faiss 소스 딥다이브](../../source-deep-dives/repositories/4/facebookresearch__faiss.md) | source-deep-dive-report | source-deep-dives | -5 |
| [farmbit-mdk/korea-market-data-mcp 소스 딥다이브](../../source-deep-dives/repositories/4/farmbit-mdk__korea-market-data-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [future-agi/future-agi 소스 딥다이브](../../source-deep-dives/repositories/4/future-agi__future-agi.md) | source-deep-dive-report | source-deep-dives | -5 |
| [GiovanniPasq/agentic-rag-for-dummies 소스 딥다이브](../../source-deep-dives/repositories/4/GiovanniPasq__agentic-rag-for-dummies.md) | source-deep-dive-report | source-deep-dives | -5 |
| [google/adk-python 소스 딥다이브](../../source-deep-dives/repositories/4/google__adk-python.md) | source-deep-dive-report | source-deep-dives | -5 |
| [griddynamics/rosetta 소스 딥다이브](../../source-deep-dives/repositories/4/griddynamics__rosetta.md) | source-deep-dive-report | source-deep-dives | -5 |
| [HelixDB/helix-db 소스 딥다이브](../../source-deep-dives/repositories/4/HelixDB__helix-db.md) | source-deep-dive-report | source-deep-dives | -5 |
| [HKUDS/LightRAG 소스 딥다이브](../../source-deep-dives/repositories/4/HKUDS__LightRAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [infiniflow/ragflow 소스 딥다이브](../../source-deep-dives/repositories/4/infiniflow__ragflow.md) | source-deep-dive-report | source-deep-dives | -5 |
| [intuit/quickbooks-online-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/4/intuit__quickbooks-online-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [JKHeadley/instar 소스 딥다이브](../../source-deep-dives/repositories/4/JKHeadley__instar.md) | source-deep-dive-report | source-deep-dives | -5 |
| [joungminsung/OpenDocuments 소스 딥다이브](../../source-deep-dives/repositories/4/joungminsung__OpenDocuments.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jundot/omlx 소스 딥다이브](../../source-deep-dives/repositories/4/jundot__omlx.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jung-jin-lee/paldo-mcp 소스 딥다이브](../../source-deep-dives/repositories/4/jung-jin-lee__paldo-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/FunctionChat-Bench 소스 딥다이브](../../source-deep-dives/repositories/4/kakao__FunctionChat-Bench.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/recoteam 소스 딥다이브](../../source-deep-dives/repositories/4/kakao__recoteam.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/varlog 소스 딥다이브](../../source-deep-dives/repositories/4/kakao__varlog.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/web2app 소스 딥다이브](../../source-deep-dives/repositories/4/kakao__web2app.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/autoclint 소스 딥다이브](../../source-deep-dives/repositories/4/kakaobrain__autoclint.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/jejueo 소스 딥다이브](../../source-deep-dives/repositories/4/kakaobrain__jejueo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/word2word 소스 딥다이브](../../source-deep-dives/repositories/4/kakaobrain__word2word.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kenn-io/agentsview 소스 딥다이브](../../source-deep-dives/repositories/4/kenn-io__agentsview.md) | source-deep-dive-report | source-deep-dives | -5 |
| [LimEulYoung/legal_mcp 소스 딥다이브](../../source-deep-dives/repositories/4/LimEulYoung__legal_mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/centraldogma-go 소스 딥다이브](../../source-deep-dives/repositories/4/line__centraldogma-go.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/gradle-scripts 소스 딥다이브](../../source-deep-dives/repositories/4/line__gradle-scripts.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-openapi 소스 딥다이브](../../source-deep-dives/repositories/4/line__line-openapi.md) | source-deep-dive-report | source-deep-dives | -5 |
| [lumatic2/korean-tax-accounting-ax-benchmark 소스 딥다이브](../../source-deep-dives/repositories/4/lumatic2__korean-tax-accounting-ax-benchmark.md) | source-deep-dive-report | source-deep-dives | -5 |
| [marcusquinn/aidevops 소스 딥다이브](../../source-deep-dives/repositories/4/marcusquinn__aidevops.md) | source-deep-dive-report | source-deep-dives | -5 |
| [minsung2da/stock-wiki 소스 딥다이브](../../source-deep-dives/repositories/4/minsung2da__stock-wiki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mock-server/mockserver-monorepo 소스 딥다이브](../../source-deep-dives/repositories/4/mock-server__mockserver-monorepo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/ruby-sdk 소스 딥다이브](../../source-deep-dives/repositories/4/modelcontextprotocol__ruby-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nanobrowser/nanobrowser 소스 딥다이브](../../source-deep-dives/repositories/4/nanobrowser__nanobrowser.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/kapture-localization 소스 딥다이브](../../source-deep-dives/repositories/4/naver__kapture-localization.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/roma 소스 딥다이브](../../source-deep-dives/repositories/4/naver__roma.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/splade 소스 딥다이브](../../source-deep-dives/repositories/4/naver__splade.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/tldr 소스 딥다이브](../../source-deep-dives/repositories/4/naver__tldr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/KoBBQ 소스 딥다이브](../../source-deep-dives/repositories/4/naver-ai__KoBBQ.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/muco 소스 딥다이브](../../source-deep-dives/repositories/4/naver-ai__muco.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/prolip 소스 딥다이브](../../source-deep-dives/repositories/4/naver-ai__prolip.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/StyleMapGAN 소스 딥다이브](../../source-deep-dives/repositories/4/naver-ai__StyleMapGAN.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/usdm 소스 딥다이브](../../source-deep-dives/repositories/4/naver-ai__usdm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nesquena/hermes-webui 소스 딥다이브](../../source-deep-dives/repositories/4/nesquena__hermes-webui.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.eslint.config 소스 딥다이브](../../source-deep-dives/repositories/4/nhn__tui.eslint.config.md) | source-deep-dive-report | source-deep-dives | -5 |
| [openai/chatgpt-retrieval-plugin 소스 딥다이브](../../source-deep-dives/repositories/4/openai__chatgpt-retrieval-plugin.md) | source-deep-dive-report | source-deep-dives | -5 |
| [OpenOSINT/OpenOSINT 소스 딥다이브](../../source-deep-dives/repositories/4/OpenOSINT__OpenOSINT.md) | source-deep-dive-report | source-deep-dives | -5 |
| [oracle-devrel/oracle-ai-developer-hub 소스 딥다이브](../../source-deep-dives/repositories/4/oracle-devrel__oracle-ai-developer-hub.md) | source-deep-dive-report | source-deep-dives | -5 |
| [paperboytm/spool 소스 딥다이브](../../source-deep-dives/repositories/4/paperboytm__spool.md) | source-deep-dive-report | source-deep-dives | -5 |
| [preset-io/agor 소스 딥다이브](../../source-deep-dives/repositories/4/preset-io__agor.md) | source-deep-dive-report | source-deep-dives | -5 |
| [rebel0789/codexpro 소스 딥다이브](../../source-deep-dives/repositories/4/rebel0789__codexpro.md) | source-deep-dive-report | source-deep-dives | -5 |
| [rohitg00/agentmemory 소스 딥다이브](../../source-deep-dives/repositories/4/rohitg00__agentmemory.md) | source-deep-dive-report | source-deep-dives | -5 |
| [safishamsi/graphify 소스 딥다이브](../../source-deep-dives/repositories/4/safishamsi__graphify.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/LPVS 소스 딥다이브](../../source-deep-dives/repositories/4/Samsung__LPVS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/MeziLang 소스 딥다이브](../../source-deep-dives/repositories/4/Samsung__MeziLang.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sgl-project/sglang 소스 딥다이브](../../source-deep-dives/repositories/4/sgl-project__sglang.md) | source-deep-dive-report | source-deep-dives | -5 |
| [studyield/studyield 소스 딥다이브](../../source-deep-dives/repositories/4/studyield__studyield.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tanaikech/ggsrun 소스 딥다이브](../../source-deep-dives/repositories/4/tanaikech__ggsrun.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tornikebolokadze1-cyber/awesome-ai-pulse-georgia 소스 딥다이브](../../source-deep-dives/repositories/4/tornikebolokadze1-cyber__awesome-ai-pulse-georgia.md) | source-deep-dive-report | source-deep-dives | -5 |
| [truffle-ai/dexto 소스 딥다이브](../../source-deep-dives/repositories/4/truffle-ai__dexto.md) | source-deep-dive-report | source-deep-dives | -5 |
| [typesense/typesense 소스 딥다이브](../../source-deep-dives/repositories/4/typesense__typesense.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vuetifyjs/mcp 소스 딥다이브](../../source-deep-dives/repositories/4/vuetifyjs__mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [winstonkoh87/Athena-Public 소스 딥다이브](../../source-deep-dives/repositories/4/winstonkoh87__Athena-Public.md) | source-deep-dive-report | source-deep-dives | -5 |
| [workbookbulb863/korean-law-alio-mcp 소스 딥다이브](../../source-deep-dives/repositories/4/workbookbulb863__korean-law-alio-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [xerrors/Yuxi 소스 딥다이브](../../source-deep-dives/repositories/4/xerrors__Yuxi.md) | source-deep-dive-report | source-deep-dives | -5 |
| [yotsuda/PowerShell.MCP 소스 딥다이브](../../source-deep-dives/repositories/4/yotsuda__PowerShell.MCP.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bitbonsai/mcpvault 소스 딥다이브](../../source-deep-dives/repositories/5/bitbonsai__mcpvault.md) | source-deep-dive-report | source-deep-dives | -5 |
| [brycewang-stanford/Awesome-Journal-Skills 소스 딥다이브](../../source-deep-dives/repositories/5/brycewang-stanford__Awesome-Journal-Skills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [chrisryugj/korean-law-mcp 소스 딥다이브](../../source-deep-dives/repositories/5/chrisryugj__korean-law-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/KarrotCodableKit 소스 딥다이브](../../source-deep-dives/repositories/5/daangn__KarrotCodableKit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/SushiBelt 소스 딥다이브](../../source-deep-dives/repositories/5/daangn__SushiBelt.md) | source-deep-dive-report | source-deep-dives | -5 |
| [danny-avila/LibreChat 소스 딥다이브](../../source-deep-dives/repositories/5/danny-avila__LibreChat.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dcostenco/prism-coder 소스 딥다이브](../../source-deep-dives/repositories/5/dcostenco__prism-coder.md) | source-deep-dive-report | source-deep-dives | -5 |
| [DEEP-PolyU/Awesome-GraphRAG 소스 딥다이브](../../source-deep-dives/repositories/5/DEEP-PolyU__Awesome-GraphRAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [freee/freee-mcp 소스 딥다이브](../../source-deep-dives/repositories/5/freee__freee-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ggml-org/llama.cpp 소스 딥다이브](../../source-deep-dives/repositories/5/ggml-org__llama.cpp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gotalab/cc-sdd 소스 딥다이브](../../source-deep-dives/repositories/5/gotalab__cc-sdd.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gpustack/gpustack 소스 딥다이브](../../source-deep-dives/repositories/5/gpustack__gpustack.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hyperconnect/HypeUI 소스 딥다이브](../../source-deep-dives/repositories/5/hyperconnect__HypeUI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [iammonth1997/paperwiki-research-compiler 소스 딥다이브](../../source-deep-dives/repositories/5/iammonth1997__paperwiki-research-compiler.md) | source-deep-dive-report | source-deep-dives | -5 |
| [iOfficeAI/AionUi 소스 딥다이브](../../source-deep-dives/repositories/5/iOfficeAI__AionUi.md) | source-deep-dive-report | source-deep-dives | -5 |
| [johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction 소스 딥다이브](../../source-deep-dives/repositories/5/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/hbase-tools 소스 딥다이브](../../source-deep-dives/repositories/5/kakao__hbase-tools.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/mindall-e 소스 딥다이브](../../source-deep-dives/repositories/5/kakaobrain__mindall-e.md) | source-deep-dive-report | source-deep-dives | -5 |
| [lightonai/next-plaid 소스 딥다이브](../../source-deep-dives/repositories/5/lightonai__next-plaid.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/abc-kmm-shared-storage 소스 딥다이브](../../source-deep-dives/repositories/5/line__abc-kmm-shared-storage.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/apng-drawable 소스 딥다이브](../../source-deep-dives/repositories/5/line__apng-drawable.md) | source-deep-dive-report | source-deep-dives | -5 |
| [madappgang/claudish 소스 딥다이브](../../source-deep-dives/repositories/5/MadAppGang__claudish.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mark3labs/mcp-go 소스 딥다이브](../../source-deep-dives/repositories/5/mark3labs__mcp-go.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Marker-Inc-Korea/AutoRAG 소스 딥다이브](../../source-deep-dives/repositories/5/Marker-Inc-Korea__AutoRAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/rust-sdk 소스 딥다이브](../../source-deep-dives/repositories/5/modelcontextprotocol__rust-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/servers 소스 딥다이브](../../source-deep-dives/repositories/5/modelcontextprotocol__servers.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mudler/LocalAI 소스 딥다이브](../../source-deep-dives/repositories/5/mudler__LocalAI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/android-imagecropview 소스 딥다이브](../../source-deep-dives/repositories/5/naver__android-imagecropview.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/anny-fit 소스 딥다이브](../../source-deep-dives/repositories/5/naver__anny-fit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/bergen 소스 딥다이브](../../source-deep-dives/repositories/5/naver__bergen.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/d-day-labeler 소스 딥다이브](../../source-deep-dives/repositories/5/naver__d-day-labeler.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/hadoop 소스 딥다이브](../../source-deep-dives/repositories/5/naver__hadoop.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/multilingual-distilwhisper 소스 딥다이브](../../source-deep-dives/repositories/5/naver__multilingual-distilwhisper.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/must3r 소스 딥다이브](../../source-deep-dives/repositories/5/naver__must3r.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/naveridlogin-sdk-ios 소스 딥다이브](../../source-deep-dives/repositories/5/naver__naveridlogin-sdk-ios.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/spring-batch-plus 소스 딥다이브](../../source-deep-dives/repositories/5/naver__spring-batch-plus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NevaMind-AI/memU 소스 딥다이브](../../source-deep-dives/repositories/5/NevaMind-AI__memU.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Neverdecel/CodeRAG 소스 딥다이브](../../source-deep-dives/repositories/5/Neverdecel__CodeRAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/fe.javascript 소스 딥다이브](../../source-deep-dives/repositories/5/nhn__fe.javascript.md) | source-deep-dive-report | source-deep-dives | -5 |
| [OldTemple91/korea-filings-api 소스 딥다이브](../../source-deep-dives/repositories/5/OldTemple91__korea-filings-api.md) | source-deep-dive-report | source-deep-dives | -5 |
| [olimorris/codecompanion.nvim 소스 딥다이브](../../source-deep-dives/repositories/5/olimorris__codecompanion.nvim.md) | source-deep-dive-report | source-deep-dives | -5 |
| [osaurus-ai/osaurus 소스 딥다이브](../../source-deep-dives/repositories/5/osaurus-ai__osaurus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [pingcap/tidb 소스 딥다이브](../../source-deep-dives/repositories/5/pingcap__tidb.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ProfessionalWiki/MediaWiki-MCP-Server 소스 딥다이브](../../source-deep-dives/repositories/5/ProfessionalWiki__MediaWiki-MCP-Server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [seung23/lawtutor-mcp 소스 딥다이브](../../source-deep-dives/repositories/5/seung23__lawtutor-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Shelpuk-AI-Technology-Consulting/kindly-web-search-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/5/Shelpuk-AI-Technology-Consulting__kindly-web-search-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [shinpr/mcp-local-rag 소스 딥다이브](../../source-deep-dives/repositories/5/shinpr__mcp-local-rag.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sktelecom/sbom-tools 소스 딥다이브](../../source-deep-dives/repositories/5/sktelecom__sbom-tools.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SonAIengine/ku-portal-mcp 소스 딥다이브](../../source-deep-dives/repositories/5/SonAIengine__ku-portal-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [StarTrail-org/LEANN 소스 딥다이브](../../source-deep-dives/repositories/5/StarTrail-org__LEANN.md) | source-deep-dive-report | source-deep-dives | -5 |
| [the-open-agent/openagent 소스 딥다이브](../../source-deep-dives/repositories/5/the-open-agent__openagent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tok-it/detoks 소스 딥다이브](../../source-deep-dives/repositories/5/tok-it__detoks.md) | source-deep-dive-report | source-deep-dives | -5 |
| [topoteretes/cognee 소스 딥다이브](../../source-deep-dives/repositories/5/topoteretes__cognee.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/apps-in-toss-ax 소스 딥다이브](../../source-deep-dives/repositories/5/toss__apps-in-toss-ax.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/docflow 소스 딥다이브](../../source-deep-dives/repositories/5/toss__docflow.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/technical-writing 소스 딥다이브](../../source-deep-dives/repositories/5/toss__technical-writing.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/yarn-plugin-workspace-since 소스 딥다이브](../../source-deep-dives/repositories/5/toss__yarn-plugin-workspace-since.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tuya/TuyaOpen 소스 딥다이브](../../source-deep-dives/repositories/5/tuya__TuyaOpen.md) | source-deep-dive-report | source-deep-dives | -5 |
| [UrRafiFirdaus/ComfyUI_FL-HeartMuLa 소스 딥다이브](../../source-deep-dives/repositories/5/UrRafiFirdaus__ComfyUI_FL-HeartMuLa.md) | source-deep-dive-report | source-deep-dives | -5 |
| [w8123/EnterpriseAgentFramework 소스 딥다이브](../../source-deep-dives/repositories/5/w8123__EnterpriseAgentFramework.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/perf-basecamp 소스 딥다이브](../../source-deep-dives/repositories/5/woowacourse__perf-basecamp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/tecoble 소스 딥다이브](../../source-deep-dives/repositories/5/woowacourse__tecoble.md) | source-deep-dive-report | source-deep-dives | -5 |
| [xorbitsai/inference 소스 딥다이브](../../source-deep-dives/repositories/5/xorbitsai__inference.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zed-industries/zed 소스 딥다이브](../../source-deep-dives/repositories/5/zed-industries__zed.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zhitongblog/solomd 소스 딥다이브](../../source-deep-dives/repositories/5/zhitongblog__solomd.md) | source-deep-dive-report | source-deep-dives | -5 |
| [0xranx/OpenContext 소스 딥다이브](../../source-deep-dives/repositories/6/0xranx__OpenContext.md) | source-deep-dive-report | source-deep-dives | -5 |
| [1517005260/graph-rag-agent 소스 딥다이브](../../source-deep-dives/repositories/6/1517005260__graph-rag-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ai-boost/awesome-harness-engineering 소스 딥다이브](../../source-deep-dives/repositories/6/ai-boost__awesome-harness-engineering.md) | source-deep-dive-report | source-deep-dives | -5 |
| [arc53/DocsGPT 소스 딥다이브](../../source-deep-dives/repositories/6/arc53__DocsGPT.md) | source-deep-dive-report | source-deep-dives | -5 |
| [asklokesh/loki-mode 소스 딥다이브](../../source-deep-dives/repositories/6/asklokesh__loki-mode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Azure/gpt-rag-orchestrator 소스 딥다이브](../../source-deep-dives/repositories/6/Azure__gpt-rag-orchestrator.md) | source-deep-dive-report | source-deep-dives | -5 |
| [calesthio/OpenMontage 소스 딥다이브](../../source-deep-dives/repositories/6/calesthio__OpenMontage.md) | source-deep-dive-report | source-deep-dives | -5 |
| [camel-ai/camel 소스 딥다이브](../../source-deep-dives/repositories/6/camel-ai__camel.md) | source-deep-dive-report | source-deep-dives | -5 |
| [chrisryugj/Docufinder 소스 딥다이브](../../source-deep-dives/repositories/6/chrisryugj__Docufinder.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/autopprof 소스 딥다이브](../../source-deep-dives/repositories/6/daangn__autopprof.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gentleman-programming/engram 소스 딥다이브](../../source-deep-dives/repositories/6/Gentleman-Programming__engram.md) | source-deep-dive-report | source-deep-dives | -5 |
| [getzep/graphiti 소스 딥다이브](../../source-deep-dives/repositories/6/getzep__graphiti.md) | source-deep-dive-report | source-deep-dives | -5 |
| [giancarloerra/SocratiCode 소스 딥다이브](../../source-deep-dives/repositories/6/giancarloerra__SocratiCode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gptme/gptme 소스 딥다이브](../../source-deep-dives/repositories/6/gptme__gptme.md) | source-deep-dive-report | source-deep-dives | -5 |
| [humanlayer/humanlayer 소스 딥다이브](../../source-deep-dives/repositories/6/humanlayer__humanlayer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hybridgroup/yzma 소스 딥다이브](../../source-deep-dives/repositories/6/hybridgroup__yzma.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hyperconnect/MMNet 소스 딥다이브](../../source-deep-dives/repositories/6/hyperconnect__MMNet.md) | source-deep-dive-report | source-deep-dives | -5 |
| [johnisanerd/Apify-Naver-AI-Overview-API 소스 딥다이브](../../source-deep-dives/repositories/6/johnisanerd__Apify-Naver-AI-Overview-API.md) | source-deep-dive-report | source-deep-dives | -5 |
| [JSONbored/awesome-claude 소스 딥다이브](../../source-deep-dives/repositories/6/JSONbored__awesome-claude.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/network-node-manager 소스 딥다이브](../../source-deep-dives/repositories/6/kakao__network-node-manager.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/brain-agent 소스 딥다이브](../../source-deep-dives/repositories/6/kakaobrain__brain-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/kogpt 소스 딥다이브](../../source-deep-dives/repositories/6/kakaobrain__kogpt.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/scrl 소스 딥다이브](../../source-deep-dives/repositories/6/kakaobrain__scrl.md) | source-deep-dive-report | source-deep-dives | -5 |
| [karpathy/nanochat 소스 딥다이브](../../source-deep-dives/repositories/6/karpathy__nanochat.md) | source-deep-dive-report | source-deep-dives | -5 |
| [KM-it-ops/memory-mcp 소스 딥다이브](../../source-deep-dives/repositories/6/KM-it-ops__memory-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langfuse/langfuse 소스 딥다이브](../../source-deep-dives/repositories/6/langfuse__langfuse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langgenius/dify 소스 딥다이브](../../source-deep-dives/repositories/6/langgenius__dify.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/liff-cli 소스 딥다이브](../../source-deep-dives/repositories/6/line__liff-cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/liff-playground 소스 딥다이브](../../source-deep-dives/repositories/6/line__liff-playground.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-sdk-unity 소스 딥다이브](../../source-deep-dives/repositories/6/line__line-sdk-unity.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-simple-beacon 소스 딥다이브](../../source-deep-dives/repositories/6/line__line-simple-beacon.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/webauthn-kotlin 소스 딥다이브](../../source-deep-dives/repositories/6/line__webauthn-kotlin.md) | source-deep-dive-report | source-deep-dives | -5 |
| [llmware-ai/llmware 소스 딥다이브](../../source-deep-dives/repositories/6/llmware-ai__llmware.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Lumiaqian/openspec-mcp 소스 딥다이브](../../source-deep-dives/repositories/6/Lumiaqian__openspec-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/skills 소스 딥다이브](../../source-deep-dives/repositories/6/microsoft__skills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [milvus-io/milvus 소스 딥다이브](../../source-deep-dives/repositories/6/milvus-io__milvus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [moazbuilds/codemachine-cli 소스 딥다이브](../../source-deep-dives/repositories/6/moazbuilds__CodeMachine-CLI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nanocoai/nanoclaw 소스 딥다이브](../../source-deep-dives/repositories/6/nanocoai__nanoclaw.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/arcus-spring 소스 딥다이브](../../source-deep-dives/repositories/6/naver__arcus-spring.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/deep-image-retrieval 소스 딥다이브](../../source-deep-dives/repositories/6/naver__deep-image-retrieval.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-view360 소스 딥다이브](../../source-deep-dives/repositories/6/naver__egjs-view360.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/multi-hmr2 소스 딥다이브](../../source-deep-dives/repositories/6/naver__multi-hmr2.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/p2pcp 소스 딥다이브](../../source-deep-dives/repositories/6/naver__p2pcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/searchad-apidoc 소스 딥다이브](../../source-deep-dives/repositories/6/naver__searchad-apidoc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/pcme 소스 딥다이브](../../source-deep-dives/repositories/6/naver-ai__pcme.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/pit 소스 딥다이브](../../source-deep-dives/repositories/6/naver-ai__pit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/seit 소스 딥다이브](../../source-deep-dives/repositories/6/naver-ai__seit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NousResearch/hermes-agent 소스 딥다이브](../../source-deep-dives/repositories/6/NousResearch__hermes-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [onyx-dot-app/onyx 소스 딥다이브](../../source-deep-dives/repositories/6/onyx-dot-app__onyx.md) | source-deep-dive-report | source-deep-dives | -5 |
| [openakita/openakita 소스 딥다이브](../../source-deep-dives/repositories/6/openakita__openakita.md) | source-deep-dive-report | source-deep-dives | -5 |
| [openclaw/openclaw 소스 딥다이브](../../source-deep-dives/repositories/6/openclaw__openclaw.md) | source-deep-dive-report | source-deep-dives | -5 |
| [OpenSPG/KAG 소스 딥다이브](../../source-deep-dives/repositories/6/OpenSPG__KAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [PurpleDoubleD/locally-uncensored 소스 딥다이브](../../source-deep-dives/repositories/6/PurpleDoubleD__locally-uncensored.md) | source-deep-dive-report | source-deep-dives | -5 |
| [raphaelmansuy/edgequake 소스 딥다이브](../../source-deep-dives/repositories/6/raphaelmansuy__edgequake.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/ioter 소스 딥다이브](../../source-deep-dives/repositories/6/Samsung__ioter.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/kflat 소스 딥다이브](../../source-deep-dives/repositories/6/Samsung__kflat.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/qaboard 소스 딥다이브](../../source-deep-dives/repositories/6/Samsung__qaboard.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/TAU-Design-Editor 소스 딥다이브](../../source-deep-dives/repositories/6/Samsung__TAU-Design-Editor.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Scottcjn/iota-agent-mcp 소스 딥다이브](../../source-deep-dives/repositories/6/Scottcjn__iota-agent-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SearchSavior/OpenArc 소스 딥다이브](../../source-deep-dives/repositories/6/SearchSavior__OpenArc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [shivasurya/code-pathfinder 소스 딥다이브](../../source-deep-dives/repositories/6/shivasurya__code-pathfinder.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sirkirby/unifi-mcp 소스 딥다이브](../../source-deep-dives/repositories/6/sirkirby__unifi-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ssuksak/cheongyak-rag-mcp 소스 딥다이브](../../source-deep-dives/repositories/6/ssuksak__cheongyak-rag-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [TensorBlock/awesome-mcp-servers 소스 딥다이브](../../source-deep-dives/repositories/6/TensorBlock__awesome-mcp-servers.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/use-funnel 소스 딥다이브](../../source-deep-dives/repositories/6/toss__use-funnel.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ultraworkers/claw-code 소스 딥다이브](../../source-deep-dives/repositories/6/ultraworkers__claw-code.md) | source-deep-dive-report | source-deep-dives | -5 |
| [usemoss/moss 소스 딥다이브](../../source-deep-dives/repositories/6/usemoss__moss.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vllm-project/vllm 소스 딥다이브](../../source-deep-dives/repositories/6/vllm-project__vllm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-http 소스 딥다이브](../../source-deep-dives/repositories/6/woowacourse__java-http.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ZenSystemAI/Zengram 소스 딥다이브](../../source-deep-dives/repositories/6/ZenSystemAI__Zengram.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zzet/gortex 소스 딥다이브](../../source-deep-dives/repositories/6/zzet__gortex.md) | source-deep-dive-report | source-deep-dives | -5 |
| [AgriciDaniel/claude-obsidian 소스 딥다이브](../../source-deep-dives/repositories/7/AgriciDaniel__claude-obsidian.md) | source-deep-dive-report | source-deep-dives | -5 |
| [alfredolopez80/multi-agent-ralph-loop 소스 딥다이브](../../source-deep-dives/repositories/7/alfredolopez80__multi-agent-ralph-loop.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Arize-ai/phoenix 소스 딥다이브](../../source-deep-dives/repositories/7/Arize-ai__phoenix.md) | source-deep-dive-report | source-deep-dives | -5 |
| [awkoy/notion-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/7/awkoy__notion-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [axoviq-ai/synthadoc 소스 딥다이브](../../source-deep-dives/repositories/7/axoviq-ai__synthadoc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Azure-Samples/azure-ai-travel-agents 소스 딥다이브](../../source-deep-dives/repositories/7/Azure-Samples__azure-ai-travel-agents.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bartolli/codanna 소스 딥다이브](../../source-deep-dives/repositories/7/bartolli__codanna.md) | source-deep-dive-report | source-deep-dives | -5 |
| [benmaster82/Kwipu 소스 딥다이브](../../source-deep-dives/repositories/7/benmaster82__Kwipu.md) | source-deep-dive-report | source-deep-dives | -5 |
| [C0nw0nk/Nginx-Lua-Anti-DDoS 소스 딥다이브](../../source-deep-dives/repositories/7/C0nw0nk__Nginx-Lua-Anti-DDoS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [chrisryugj/korean-dart-mcp 소스 딥다이브](../../source-deep-dives/repositories/7/chrisryugj__korean-dart-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [chrisryugj/lexdiff 소스 딥다이브](../../source-deep-dives/repositories/7/chrisryugj__lexdiff.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/betterkorean 소스 딥다이브](../../source-deep-dives/repositories/7/daangn__betterkorean.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/graplix 소스 딥다이브](../../source-deep-dives/repositories/7/daangn__graplix.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/minimemcached 소스 딥다이브](../../source-deep-dives/repositories/7/daangn__minimemcached.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/plantae 소스 딥다이브](../../source-deep-dives/repositories/7/daangn__plantae.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/stackflow 소스 딥다이브](../../source-deep-dives/repositories/7/daangn__stackflow.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dataelement/bisheng 소스 딥다이브](../../source-deep-dives/repositories/7/dataelement__bisheng.md) | source-deep-dive-report | source-deep-dives | -5 |
| [docfork/docfork 소스 딥다이브](../../source-deep-dives/repositories/7/docfork__docfork.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Eric-Terminal/ETOS-LLM-Studio 소스 딥다이브](../../source-deep-dives/repositories/7/Eric-Terminal__ETOS-LLM-Studio.md) | source-deep-dive-report | source-deep-dives | -5 |
| [getsentry/sentry-mcp 소스 딥다이브](../../source-deep-dives/repositories/7/getsentry__sentry-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [getzep/zep 소스 딥다이브](../../source-deep-dives/repositories/7/getzep__zep.md) | source-deep-dive-report | source-deep-dives | -5 |
| [github/spec-kit 소스 딥다이브](../../source-deep-dives/repositories/7/github__spec-kit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [GLips/Figma-Context-MCP 소스 딥다이브](../../source-deep-dives/repositories/7/GLips__Figma-Context-MCP.md) | source-deep-dive-report | source-deep-dives | -5 |
| [GSL-R/arona-soul-agent-memory 소스 딥다이브](../../source-deep-dives/repositories/7/GSL-R__arona-soul-agent-memory.md) | source-deep-dive-report | source-deep-dives | -5 |
| [huggingface/transformers 소스 딥다이브](../../source-deep-dives/repositories/7/huggingface__transformers.md) | source-deep-dive-report | source-deep-dives | -5 |
| [infiniflow/infinity 소스 딥다이브](../../source-deep-dives/repositories/7/infiniflow__infinity.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jacob-bd/notebooklm-mcp-cli 소스 딥다이브](../../source-deep-dives/repositories/7/jacob-bd__notebooklm-mcp-cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jnMetaCode/agency-orchestrator 소스 딥다이브](../../source-deep-dives/repositories/7/jnMetaCode__agency-orchestrator.md) | source-deep-dive-report | source-deep-dives | -5 |
| [justrach/codedb 소스 딥다이브](../../source-deep-dives/repositories/7/justrach__codedb.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/khaiii 소스 딥다이브](../../source-deep-dives/repositories/7/kakao__khaiii.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/n2 소스 딥다이브](../../source-deep-dives/repositories/7/kakao__n2.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/hotr 소스 딥다이브](../../source-deep-dives/repositories/7/kakaobrain__hotr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/rq-vae-transformer 소스 딥다이브](../../source-deep-dives/repositories/7/kakaobrain__rq-vae-transformer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/solvent 소스 딥다이브](../../source-deep-dives/repositories/7/kakaobrain__solvent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Kilo-Org/kilocode 소스 딥다이브](../../source-deep-dives/repositories/7/Kilo-Org__kilocode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kreuzberg-dev/kreuzberg 소스 딥다이브](../../source-deep-dives/repositories/7/kreuzberg-dev__kreuzberg.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langchain-ai/langgraph 소스 딥다이브](../../source-deep-dives/repositories/7/langchain-ai__langgraph.md) | source-deep-dive-report | source-deep-dives | -5 |
| [lemonade-sdk/lemonade 소스 딥다이브](../../source-deep-dives/repositories/7/lemonade-sdk__lemonade.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/LibriTTS-P 소스 딥다이브](../../source-deep-dives/repositories/7/line__LibriTTS-P.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-bot-sdk-python 소스 딥다이브](../../source-deep-dives/repositories/7/line__line-bot-sdk-python.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-bot-sdk-ruby 소스 딥다이브](../../source-deep-dives/repositories/7/line__line-bot-sdk-ruby.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-login-starter 소스 딥다이브](../../source-deep-dives/repositories/7/line__line-login-starter.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/rules_apple_line 소스 딥다이브](../../source-deep-dives/repositories/7/line__rules_apple_line.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MarcoPorcellato/matryca-plumber 소스 딥다이브](../../source-deep-dives/repositories/7/MarcoPorcellato__matryca-plumber.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MervinPraison/PraisonAI 소스 딥다이브](../../source-deep-dives/repositories/7/MervinPraison__PraisonAI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/DiskANN 소스 딥다이브](../../source-deep-dives/repositories/7/microsoft__DiskANN.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/Multi-Agent-Custom-Automation-Engine-Solution-Accelerator 소스 딥다이브](../../source-deep-dives/repositories/7/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelstudioai/cli 소스 딥다이브](../../source-deep-dives/repositories/7/modelstudioai__cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modu-ai/cowork-plugins 소스 딥다이브](../../source-deep-dives/repositories/7/modu-ai__cowork-plugins.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/claf 소스 딥다이브](../../source-deep-dives/repositories/7/naver__claf.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/guitar 소스 딥다이브](../../source-deep-dives/repositories/7/naver__guitar.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/panst3r 소스 딥다이브](../../source-deep-dives/repositories/7/naver__panst3r.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/sling 소스 딥다이브](../../source-deep-dives/repositories/7/naver__sling.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/zeplin-flutter-gen 소스 딥다이브](../../source-deep-dives/repositories/7/naver__zeplin-flutter-gen.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/calm 소스 딥다이브](../../source-deep-dives/repositories/7/naver-ai__calm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/DenseDiffusion 소스 딥다이브](../../source-deep-dives/repositories/7/naver-ai__DenseDiffusion.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/MM-JudgeBias 소스 딥다이브](../../source-deep-dives/repositories/7/naver-ai__MM-JudgeBias.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/PfLayer 소스 딥다이브](../../source-deep-dives/repositories/7/naver-ai__PfLayer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NVIDIA/Model-Optimizer 소스 딥다이브](../../source-deep-dives/repositories/7/NVIDIA__Model-Optimizer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NVIDIA/TensorRT-LLM 소스 딥다이브](../../source-deep-dives/repositories/7/NVIDIA__TensorRT-LLM.md) | source-deep-dive-report | source-deep-dives | -5 |
| [omnigent-ai/omnigent 소스 딥다이브](../../source-deep-dives/repositories/7/omnigent-ai__omnigent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ory/lumen 소스 딥다이브](../../source-deep-dives/repositories/7/ory__lumen.md) | source-deep-dive-report | source-deep-dives | -5 |
| [potpie-ai/potpie 소스 딥다이브](../../source-deep-dives/repositories/7/potpie-ai__potpie.md) | source-deep-dive-report | source-deep-dives | -5 |
| [regent-vcs/re_gent 소스 딥다이브](../../source-deep-dives/repositories/7/regent-vcs__re_gent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [rocketride-org/rocketride-server 소스 딥다이브](../../source-deep-dives/repositories/7/rocketride-org__rocketride-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [RunanywhereAI/runanywhere-sdks 소스 딥다이브](../../source-deep-dives/repositories/7/RunanywhereAI__runanywhere-sdks.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SaiAkhil066/CORTEX-AI-SUPER-RAG 소스 딥다이브](../../source-deep-dives/repositories/7/SaiAkhil066__CORTEX-AI-SUPER-RAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/cordova-plugin-toast 소스 딥다이브](../../source-deep-dives/repositories/7/Samsung__cordova-plugin-toast.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/Dexter 소스 딥다이브](../../source-deep-dives/repositories/7/Samsung__Dexter.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/Universum 소스 딥다이브](../../source-deep-dives/repositories/7/Samsung__Universum.md) | source-deep-dive-report | source-deep-dives | -5 |
| [scrypster/muninndb 소스 딥다이브](../../source-deep-dives/repositories/7/scrypster__muninndb.md) | source-deep-dive-report | source-deep-dives | -5 |
| [scvcoder/korean-law-alio-mcp 소스 딥다이브](../../source-deep-dives/repositories/7/scvcoder__korean-law-alio-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sktelecom/onot 소스 딥다이브](../../source-deep-dives/repositories/7/sktelecom__onot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SocketDev/socket-mcp 소스 딥다이브](../../source-deep-dives/repositories/7/SocketDev__socket-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [spiceai/spiceai 소스 딥다이브](../../source-deep-dives/repositories/7/spiceai__spiceai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [synapseorch-ai/synapse-ai 소스 딥다이브](../../source-deep-dives/repositories/7/synapseorch-ai__synapse-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [thClaws/thClaws 소스 딥다이브](../../source-deep-dives/repositories/7/thClaws__thClaws.md) | source-deep-dive-report | source-deep-dives | -5 |
| [upstash/context7 소스 딥다이브](../../source-deep-dives/repositories/7/upstash__context7.md) | source-deep-dive-report | source-deep-dives | -5 |
| [videosdk-live/agents 소스 딥다이브](../../source-deep-dives/repositories/7/videosdk-live__agents.md) | source-deep-dive-report | source-deep-dives | -5 |
| [wassim249/fastapi-langgraph-agent-production-ready-template 소스 딥다이브](../../source-deep-dives/repositories/7/wassim249__fastapi-langgraph-agent-production-ready-template.md) | source-deep-dive-report | source-deep-dives | -5 |
| [wb04307201/spring-ai-loom-agent 소스 딥다이브](../../source-deep-dives/repositories/7/wb04307201__spring-ai-loom-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-lotto 소스 딥다이브](../../source-deep-dives/repositories/7/woowacourse__java-lotto.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Yeachan-Heo/oh-my-claudecode 소스 딥다이브](../../source-deep-dives/repositories/7/Yeachan-Heo__oh-my-claudecode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [activeloopai/hivemind 소스 딥다이브](../../source-deep-dives/repositories/8/activeloopai__hivemind.md) | source-deep-dive-report | source-deep-dives | -5 |
| [alvinreal/awesome-opensource-ai 소스 딥다이브](../../source-deep-dives/repositories/8/alvinreal__awesome-opensource-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [aws/bedrock-agentcore-sdk-python 소스 딥다이브](../../source-deep-dives/repositories/8/aws__bedrock-agentcore-sdk-python.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Beever-AI/beever-atlas 소스 딥다이브](../../source-deep-dives/repositories/8/Beever-AI__beever-atlas.md) | source-deep-dive-report | source-deep-dives | -5 |
| [BuilderIO/agent-native 소스 딥다이브](../../source-deep-dives/repositories/8/BuilderIO__agent-native.md) | source-deep-dive-report | source-deep-dives | -5 |
| [cbcoutinho/nextcloud-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/8/cbcoutinho__nextcloud-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [code-forge-temple/agentic-signal 소스 딥다이브](../../source-deep-dives/repositories/8/code-forge-temple__agentic-signal.md) | source-deep-dive-report | source-deep-dives | -5 |
| [cortexkit/aft 소스 딥다이브](../../source-deep-dives/repositories/8/cortexkit__aft.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/betterkoreankotlin 소스 딥다이브](../../source-deep-dives/repositories/8/daangn__betterkoreankotlin.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/KarrotListKit 소스 딥다이브](../../source-deep-dives/repositories/8/daangn__KarrotListKit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [EricLBuehler/mistral.rs 소스 딥다이브](../../source-deep-dives/repositories/8/EricLBuehler__mistral.rs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [fabriqaai/specs.md 소스 딥다이브](../../source-deep-dives/repositories/8/fabriqaai__specs.md.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gsd-build/gsd-2 소스 딥다이브](../../source-deep-dives/repositories/8/gsd-build__gsd-2.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gustavoeenriquez/MakerAi 소스 딥다이브](../../source-deep-dives/repositories/8/gustavoeenriquez__MakerAi.md) | source-deep-dive-report | source-deep-dives | -5 |
| [i-am-bee/beeai-framework 소스 딥다이브](../../source-deep-dives/repositories/8/i-am-bee__beeai-framework.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jingcheng-chen/rhinomcp 소스 딥다이브](../../source-deep-dives/repositories/8/jingcheng-chen__rhinomcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jonigl/mcp-client-for-ollama 소스 딥다이브](../../source-deep-dives/repositories/8/jonigl__mcp-client-for-ollama.md) | source-deep-dive-report | source-deep-dives | -5 |
| [JunsikChoi/korea-cli 소스 딥다이브](../../source-deep-dives/repositories/8/JunsikChoi__korea-cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/kakao-ios-sdk 소스 딥다이브](../../source-deep-dives/repositories/8/kakao__kakao-ios-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kelos-dev/kelos 소스 딥다이브](../../source-deep-dives/repositories/8/kelos-dev__kelos.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/abc-def 소스 딥다이브](../../source-deep-dives/repositories/8/line__abc-def.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/conditional 소스 딥다이브](../../source-deep-dives/repositories/8/line__conditional.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/jnotebook_reader 소스 딥다이브](../../source-deep-dives/repositories/8/line__jnotebook_reader.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/kotlin-jdsl 소스 딥다이브](../../source-deep-dives/repositories/8/line__kotlin-jdsl.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-bot-sdk-php 소스 딥다이브](../../source-deep-dives/repositories/8/line__line-bot-sdk-php.md) | source-deep-dive-report | source-deep-dives | -5 |
| [LMCache/LMCache 소스 딥다이브](../../source-deep-dives/repositories/8/LMCache__LMCache.md) | source-deep-dive-report | source-deep-dives | -5 |
| [manojmallick/sigmap 소스 딥다이브](../../source-deep-dives/repositories/8/manojmallick__sigmap.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MCPJam/inspector 소스 딥다이브](../../source-deep-dives/repositories/8/MCPJam__inspector.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MelonS/MelonS-Agents 소스 딥다이브](../../source-deep-dives/repositories/8/MelonS__MelonS-Agents.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MemTensor/MemOS 소스 딥다이브](../../source-deep-dives/repositories/8/MemTensor__MemOS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mobitouchOS/MaIN.NET 소스 딥다이브](../../source-deep-dives/repositories/8/mobitouchOS__MaIN.NET.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/typescript-sdk 소스 딥다이브](../../source-deep-dives/repositories/8/modelcontextprotocol__typescript-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Muvon/octocode 소스 딥다이브](../../source-deep-dives/repositories/8/Muvon__octocode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/dune 소스 딥다이브](../../source-deep-dives/repositories/8/naver__dune.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/garnet 소스 딥다이브](../../source-deep-dives/repositories/8/naver__garnet.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/KoNET 소스 딥다이브](../../source-deep-dives/repositories/8/naver-ai__KoNET.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/rdnet 소스 딥다이브](../../source-deep-dives/repositories/8/naver-ai__rdnet.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.code-snippet 소스 딥다이브](../../source-deep-dives/repositories/8/nhn__tui.code-snippet.md) | source-deep-dive-report | source-deep-dives | -5 |
| [oleksiijko/pmb 소스 딥다이브](../../source-deep-dives/repositories/8/oleksiijko__pmb.md) | source-deep-dive-report | source-deep-dives | -5 |
| [openai/codex-plugin-cc 소스 딥다이브](../../source-deep-dives/repositories/8/openai__codex-plugin-cc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [openai/openai-agents-python 소스 딥다이브](../../source-deep-dives/repositories/8/openai__openai-agents-python.md) | source-deep-dive-report | source-deep-dives | -5 |
| [perplexityai/bumblebee 소스 딥다이브](../../source-deep-dives/repositories/8/perplexityai__bumblebee.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Prompthon-IO/agent-systems-handbook 소스 딥다이브](../../source-deep-dives/repositories/8/Prompthon-IO__agent-systems-handbook.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/CredData 소스 딥다이브](../../source-deep-dives/repositories/8/Samsung__CredData.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/GearVRf 소스 딥다이브](../../source-deep-dives/repositories/8/Samsung__GearVRf.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/kv2streamer 소스 딥다이브](../../source-deep-dives/repositories/8/Samsung__kv2streamer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/rlottie 소스 딥다이브](../../source-deep-dives/repositories/8/Samsung__rlottie.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Signet-AI/signetai 소스 딥다이브](../../source-deep-dives/repositories/8/Signet-AI__signetai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sktelecom/SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon 소스 딥다이브](../../source-deep-dives/repositories/8/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon.md) | source-deep-dive-report | source-deep-dives | -5 |
| [spences10/mcpick 소스 딥다이브](../../source-deep-dives/repositories/8/spences10__mcpick.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SpharxTeam/AgentOS 소스 딥다이브](../../source-deep-dives/repositories/8/SpharxTeam__AgentOS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stacklok/toolhive 소스 딥다이브](../../source-deep-dives/repositories/8/stacklok__toolhive.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tetherto/qvac 소스 딥다이브](../../source-deep-dives/repositories/8/tetherto__qvac.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tickernelz/opencode-mem 소스 딥다이브](../../source-deep-dives/repositories/8/tickernelz__opencode-mem.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tirth8205/code-review-graph 소스 딥다이브](../../source-deep-dives/repositories/8/tirth8205__code-review-graph.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-coupon 소스 딥다이브](../../source-deep-dives/repositories/8/woowacourse__java-coupon.md) | source-deep-dive-report | source-deep-dives | -5 |
| [yoloshii/ClawMem 소스 딥다이브](../../source-deep-dives/repositories/8/yoloshii__ClawMem.md) | source-deep-dive-report | source-deep-dives | -5 |
| [2betforyou/FinSec-LLM-PostTraining 소스 딥다이브](../../source-deep-dives/repositories/9/2betforyou__FinSec-LLM-PostTraining.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Agent-Hellboy/mcp-server-fuzzer 소스 딥다이브](../../source-deep-dives/repositories/9/Agent-Hellboy__mcp-server-fuzzer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [agentgateway/agentgateway 소스 딥다이브](../../source-deep-dives/repositories/9/agentgateway__agentgateway.md) | source-deep-dive-report | source-deep-dives | -5 |
| [alibaizhanov/mengram 소스 딥다이브](../../source-deep-dives/repositories/9/alibaizhanov__mengram.md) | source-deep-dive-report | source-deep-dives | -5 |
| [anomalyco/opencode 소스 딥다이브](../../source-deep-dives/repositories/9/anomalyco__opencode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [apecloud/ApeRAG 소스 딥다이브](../../source-deep-dives/repositories/9/apecloud__ApeRAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ariel-frischer/autospec 소스 딥다이브](../../source-deep-dives/repositories/9/ariel-frischer__autospec.md) | source-deep-dive-report | source-deep-dives | -5 |
| [askalf/dario 소스 딥다이브](../../source-deep-dives/repositories/9/askalf__dario.md) | source-deep-dive-report | source-deep-dives | -5 |
| [aws/agent-toolkit-for-aws 소스 딥다이브](../../source-deep-dives/repositories/9/aws__agent-toolkit-for-aws.md) | source-deep-dive-report | source-deep-dives | -5 |
| [AxDSan/mnemosyne 소스 딥다이브](../../source-deep-dives/repositories/9/AxDSan__mnemosyne.md) | source-deep-dive-report | source-deep-dives | -5 |
| [blockscout/mcp-server 소스 딥다이브](../../source-deep-dives/repositories/9/blockscout__mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [civilian7/korean-people-persona 소스 딥다이브](../../source-deep-dives/repositories/9/civilian7__korean-people-persona.md) | source-deep-dive-report | source-deep-dives | -5 |
| [CodeBendKit/codeseek 소스 딥다이브](../../source-deep-dives/repositories/9/CodeBendKit__codeseek.md) | source-deep-dive-report | source-deep-dives | -5 |
| [embabel/embabel-agent 소스 딥다이브](../../source-deep-dives/repositories/9/embabel__embabel-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [explodinggradients/ragas 소스 딥다이브](../../source-deep-dives/repositories/9/explodinggradients__ragas.md) | source-deep-dive-report | source-deep-dives | -5 |
| [getmaxun/maxun 소스 딥다이브](../../source-deep-dives/repositories/9/getmaxun__maxun.md) | source-deep-dive-report | source-deep-dives | -5 |
| [GlitterKill/sdl-mcp 소스 딥다이브](../../source-deep-dives/repositories/9/GlitterKill__sdl-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [heymrun/heym 소스 딥다이브](../../source-deep-dives/repositories/9/heymrun__heym.md) | source-deep-dive-report | source-deep-dives | -5 |
| [HKUDS/VideoRAG 소스 딥다이브](../../source-deep-dives/repositories/9/HKUDS__VideoRAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hwdsl2/self-hosted-ai-stack 소스 딥다이브](../../source-deep-dives/repositories/9/hwdsl2__self-hosted-ai-stack.md) | source-deep-dive-report | source-deep-dives | -5 |
| [IAAR-Shanghai/Awesome-AI-Memory 소스 딥다이브](../../source-deep-dives/repositories/9/IAAR-Shanghai__Awesome-AI-Memory.md) | source-deep-dive-report | source-deep-dives | -5 |
| [introfini/ZotSeek 소스 딥다이브](../../source-deep-dives/repositories/9/introfini__ZotSeek.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jegly/Box 소스 딥다이브](../../source-deep-dives/repositories/9/jegly__Box.md) | source-deep-dive-report | source-deep-dives | -5 |
| [JeongSeongMok/tossinvest-openapi-mcp 소스 딥다이브](../../source-deep-dives/repositories/9/JeongSeongMok__tossinvest-openapi-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [JRs-Master/firebat 소스 딥다이브](../../source-deep-dives/repositories/9/JRs-Master__firebat.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/bassl 소스 딥다이브](../../source-deep-dives/repositories/9/kakaobrain__bassl.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/garr 소스 딥다이브](../../source-deep-dives/repositories/9/line__garr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-bot-sdk-java 소스 딥다이브](../../source-deep-dives/repositories/9/line__line-bot-sdk-java.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-bot-sdk-nodejs 소스 딥다이브](../../source-deep-dives/repositories/9/line__line-bot-sdk-nodejs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-things-dev-board 소스 딥다이브](../../source-deep-dives/repositories/9/line__line-things-dev-board.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/stellite 소스 딥다이브](../../source-deep-dives/repositories/9/line__stellite.md) | source-deep-dive-report | source-deep-dives | -5 |
| [luhengshiwo/LLMForEverybody 소스 딥다이브](../../source-deep-dives/repositories/9/luhengshiwo__LLMForEverybody.md) | source-deep-dive-report | source-deep-dives | -5 |
| [marswangyang/personal-ai-memory 소스 딥다이브](../../source-deep-dives/repositories/9/marswangyang__personal-ai-memory.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mathomhaus/guild 소스 딥다이브](../../source-deep-dives/repositories/9/mathomhaus__guild.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mezmo/aura 소스 딥다이브](../../source-deep-dives/repositories/9/mezmo__aura.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/RAMPART 소스 딥다이브](../../source-deep-dives/repositories/9/microsoft__RAMPART.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/vscode-copilot-chat 소스 딥다이브](../../source-deep-dives/repositories/9/microsoft__vscode-copilot-chat.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mksglu/context-mode 소스 딥다이브](../../source-deep-dives/repositories/9/mksglu__context-mode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/arcus-c-client 소스 딥다이브](../../source-deep-dives/repositories/9/naver__arcus-c-client.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/biobert-pretrained 소스 딥다이브](../../source-deep-dives/repositories/9/naver__biobert-pretrained.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/cover-checker 소스 딥다이브](../../source-deep-dives/repositories/9/naver__cover-checker.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-conveyer 소스 딥다이브](../../source-deep-dives/repositories/9/naver__egjs-conveyer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/ludvig 소스 딥다이브](../../source-deep-dives/repositories/9/naver__ludvig.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/mast3r 소스 딥다이브](../../source-deep-dives/repositories/9/naver__mast3r.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/nbase-arc 소스 딥다이브](../../source-deep-dives/repositories/9/naver__nbase-arc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/prism-live-studio 소스 딥다이브](../../source-deep-dives/repositories/9/naver__prism-live-studio.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/c3-gan 소스 딥다이브](../../source-deep-dives/repositories/9/naver-ai__c3-gan.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ncz-os/mnemos 소스 딥다이브](../../source-deep-dives/repositories/9/ncz-os__mnemos.md) | source-deep-dive-report | source-deep-dives | -5 |
| [netresearch/jira-skill 소스 딥다이브](../../source-deep-dives/repositories/9/netresearch__jira-skill.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nomic-ai/gpt4all 소스 딥다이브](../../source-deep-dives/repositories/9/nomic-ai__gpt4all.md) | source-deep-dive-report | source-deep-dives | -5 |
| [OctagonAI/octagon-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/9/OctagonAI__octagon-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ohbryt/bb-wiki 소스 딥다이브](../../source-deep-dives/repositories/9/ohbryt__bb-wiki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [openai/codex 소스 딥다이브](../../source-deep-dives/repositories/9/openai__codex.md) | source-deep-dive-report | source-deep-dives | -5 |
| [opensolon/solon 소스 딥다이브](../../source-deep-dives/repositories/9/opensolon__solon.md) | source-deep-dive-report | source-deep-dives | -5 |
| [rage-rb/rage 소스 딥다이브](../../source-deep-dives/repositories/9/rage-rb__rage.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/meminsight 소스 딥다이브](../../source-deep-dives/repositories/9/Samsung__meminsight.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/mTower 소스 딥다이브](../../source-deep-dives/repositories/9/Samsung__mTower.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/restful 소스 딥다이브](../../source-deep-dives/repositories/9/Samsung__restful.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/TizenRT 소스 딥다이브](../../source-deep-dives/repositories/9/Samsung__TizenRT.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/UTopia 소스 딥다이브](../../source-deep-dives/repositories/9/Samsung__UTopia.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/Wits 소스 딥다이브](../../source-deep-dives/repositories/9/Samsung__Wits.md) | source-deep-dive-report | source-deep-dives | -5 |
| [simota/agent-skills 소스 딥다이브](../../source-deep-dives/repositories/9/simota__agent-skills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [TencentCloud/TencentDB-Agent-Memory 소스 딥다이브](../../source-deep-dives/repositories/9/TencentCloud__TencentDB-Agent-Memory.md) | source-deep-dive-report | source-deep-dives | -5 |
| [wanxingai/LightAgent 소스 딥다이브](../../source-deep-dives/repositories/9/wanxingai__LightAgent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-baseball-precourse 소스 딥다이브](../../source-deep-dives/repositories/9/woowacourse__java-baseball-precourse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-blackjack 소스 딥다이브](../../source-deep-dives/repositories/9/woowacourse__java-blackjack.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zosmaai/pi-llm-wiki 소스 딥다이브](../../source-deep-dives/repositories/9/zosmaai__pi-llm-wiki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [0xMassi/webclaw 소스 딥다이브](../../source-deep-dives/repositories/a/0xMassi__webclaw.md) | source-deep-dive-report | source-deep-dives | -5 |
| [1Panel-dev/MaxKB 소스 딥다이브](../../source-deep-dives/repositories/a/1Panel-dev__MaxKB.md) | source-deep-dive-report | source-deep-dives | -5 |
| [agenta-ai/agenta 소스 딥다이브](../../source-deep-dives/repositories/a/agenta-ai__agenta.md) | source-deep-dive-report | source-deep-dives | -5 |
| [agentlas-ai/Hephaestus 소스 딥다이브](../../source-deep-dives/repositories/a/agentlas-ai__Hephaestus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [alice840126-ship-it/korean-law-mcp-setup 소스 딥다이브](../../source-deep-dives/repositories/a/alice840126-ship-it__korean-law-mcp-setup.md) | source-deep-dive-report | source-deep-dives | -5 |
| [apache/devlake 소스 딥다이브](../../source-deep-dives/repositories/a/apache__devlake.md) | source-deep-dive-report | source-deep-dives | -5 |
| [artokun/comfyui-mcp 소스 딥다이브](../../source-deep-dives/repositories/a/artokun__comfyui-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [awslabs/mcp 소스 딥다이브](../../source-deep-dives/repositories/a/awslabs__mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bloopai/bloop 소스 딥다이브](../../source-deep-dives/repositories/a/BloopAI__bloop.md) | source-deep-dive-report | source-deep-dives | -5 |
| [chopratejas/headroom 소스 딥다이브](../../source-deep-dives/repositories/a/chopratejas__headroom.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/icona 소스 딥다이브](../../source-deep-dives/repositories/a/daangn__icona.md) | source-deep-dive-report | source-deep-dives | -5 |
| [datopian/portaljs 소스 딥다이브](../../source-deep-dives/repositories/a/datopian__portaljs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [DAWNCR0W/affine-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/a/DAWNCR0W__affine-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [doorman11991/smallcode 소스 딥다이브](../../source-deep-dives/repositories/a/Doorman11991__smallcode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [eremes81/game-design-ai-practice-id 소스 딥다이브](../../source-deep-dives/repositories/a/eremes81__game-design-ai-practice-id.md) | source-deep-dive-report | source-deep-dives | -5 |
| [EverMind-AI/EverOS 소스 딥다이브](../../source-deep-dives/repositories/a/EverMind-AI__EverOS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Fergana-Labs/stash 소스 딥다이브](../../source-deep-dives/repositories/a/Fergana-Labs__stash.md) | source-deep-dive-report | source-deep-dives | -5 |
| [fujibee/agmsg 소스 딥다이브](../../source-deep-dives/repositories/a/fujibee__agmsg.md) | source-deep-dive-report | source-deep-dives | -5 |
| [google-gemini/gemini-cli 소스 딥다이브](../../source-deep-dives/repositories/a/google-gemini__gemini-cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [henrydaum/second-brain 소스 딥다이브](../../source-deep-dives/repositories/a/henrydaum__second-brain.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hexo-ai/sia 소스 딥다이브](../../source-deep-dives/repositories/a/hexo-ai__sia.md) | source-deep-dive-report | source-deep-dives | -5 |
| [https-deeplearning-ai/sc-spec-driven-development-files 소스 딥다이브](../../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) | source-deep-dive-report | source-deep-dives | -5 |
| [huggingface/text-generation-inference 소스 딥다이브](../../source-deep-dives/repositories/a/huggingface__text-generation-inference.md) | source-deep-dive-report | source-deep-dives | -5 |
| [inkeep/agents 소스 딥다이브](../../source-deep-dives/repositories/a/inkeep__agents.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jayjodev/vivory-mcp 소스 딥다이브](../../source-deep-dives/repositories/a/jayjodev__vivory-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/flame 소스 딥다이브](../../source-deep-dives/repositories/a/kakaobrain__flame.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langchain-ai/langchain 소스 딥다이브](../../source-deep-dives/repositories/a/langchain-ai__langchain.md) | source-deep-dive-report | source-deep-dives | -5 |
| [LearningCircuit/local-deep-research 소스 딥다이브](../../source-deep-dives/repositories/a/LearningCircuit__local-deep-research.md) | source-deep-dive-report | source-deep-dives | -5 |
| [lm-sys/FastChat 소스 딥다이브](../../source-deep-dives/repositories/a/lm-sys__FastChat.md) | source-deep-dive-report | source-deep-dives | -5 |
| [lyonzin/knowledge-rag 소스 딥다이브](../../source-deep-dives/repositories/a/lyonzin__knowledge-rag.md) | source-deep-dive-report | source-deep-dives | -5 |
| [makenotion/notion-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/a/makenotion__notion-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/mcp 소스 딥다이브](../../source-deep-dives/repositories/a/microsoft__mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/promptflow 소스 딥다이브](../../source-deep-dives/repositories/a/microsoft__promptflow.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mindsdb/minds 소스 딥다이브](../../source-deep-dives/repositories/a/mindsdb__minds.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mnemon-dev/mnemon 소스 딥다이브](../../source-deep-dives/repositories/a/mnemon-dev__mnemon.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/kotlin-sdk 소스 딥다이브](../../source-deep-dives/repositories/a/modelcontextprotocol__kotlin-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/arcus-memcached 소스 딥다이브](../../source-deep-dives/repositories/a/naver__arcus-memcached.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-axes 소스 딥다이브](../../source-deep-dives/repositories/a/naver__egjs-axes.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-flicking 소스 딥다이브](../../source-deep-dives/repositories/a/naver__egjs-flicking.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/fire 소스 딥다이브](../../source-deep-dives/repositories/a/naver__fire.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/smarteditor2 소스 딥다이브](../../source-deep-dives/repositories/a/naver__smarteditor2.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/cl-vs-mim 소스 딥다이브](../../source-deep-dives/repositories/a/naver-ai__cl-vs-mim.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.calendar 소스 딥다이브](../../source-deep-dives/repositories/a/nhn__tui.calendar.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NickCirv/engram 소스 딥다이브](../../source-deep-dives/repositories/a/NickCirv__engram.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nilbuild/developer-roadmap 소스 딥다이브](../../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NirDiamant/agents-towards-production 소스 딥다이브](../../source-deep-dives/repositories/a/NirDiamant__agents-towards-production.md) | source-deep-dive-report | source-deep-dives | -5 |
| [open-webui/open-webui 소스 딥다이브](../../source-deep-dives/repositories/a/open-webui__open-webui.md) | source-deep-dive-report | source-deep-dives | -5 |
| [phonghhd/EvoNet-AI-Core 소스 딥다이브](../../source-deep-dives/repositories/a/phonghhd__EvoNet-AI-Core.md) | source-deep-dive-report | source-deep-dives | -5 |
| [pna03100/hexa-swarm-template 소스 딥다이브](../../source-deep-dives/repositories/a/pna03100__hexa-swarm-template.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Power-Agent/PowerMCP 소스 딥다이브](../../source-deep-dives/repositories/a/Power-Agent__PowerMCP.md) | source-deep-dive-report | source-deep-dives | -5 |
| [pydantic/pydantic-ai 소스 딥다이브](../../source-deep-dives/repositories/a/pydantic__pydantic-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [QuivrHQ/quivr 소스 딥다이브](../../source-deep-dives/repositories/a/QuivrHQ__quivr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/CAS 소스 딥다이브](../../source-deep-dives/repositories/a/Samsung__CAS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/ChromiumGStreamerBackend 소스 딥다이브](../../source-deep-dives/repositories/a/Samsung__ChromiumGStreamerBackend.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/gcutil 소스 딥다이브](../../source-deep-dives/repositories/a/Samsung__gcutil.md) | source-deep-dive-report | source-deep-dives | -5 |
| [schmitech/orbit 소스 딥다이브](../../source-deep-dives/repositories/a/schmitech__orbit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sillok-os/sillok 소스 딥다이브](../../source-deep-dives/repositories/a/sillok-os__sillok.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stablyai/orca 소스 딥다이브](../../source-deep-dives/repositories/a/stablyai__orca.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sungjin9288/design-ai 소스 딥다이브](../../source-deep-dives/repositories/a/sungjin9288__design-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [taishi-i/awesome-ChatGPT-repositories 소스 딥다이브](../../source-deep-dives/repositories/a/taishi-i__awesome-ChatGPT-repositories.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ThousandBirdsInc/chidori 소스 딥다이브](../../source-deep-dives/repositories/a/ThousandBirdsInc__chidori.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/apps-in-toss-unity-sdk 소스 딥다이브](../../source-deep-dives/repositories/a/toss__apps-in-toss-unity-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/es-git 소스 딥다이브](../../source-deep-dives/repositories/a/toss__es-git.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/packlint 소스 딥다이브](../../source-deep-dives/repositories/a/toss__packlint.md) | source-deep-dive-report | source-deep-dives | -5 |
| [truera/trulens 소스 딥다이브](../../source-deep-dives/repositories/a/truera__trulens.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vercel-labs/opensrc 소스 딥다이브](../../source-deep-dives/repositories/a/vercel-labs__opensrc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-jdbc 소스 딥다이브](../../source-deep-dives/repositories/a/woowacourse__java-jdbc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-mvc 소스 딥다이브](../../source-deep-dives/repositories/a/woowacourse__java-mvc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-subway-map-precourse 소스 딥다이브](../../source-deep-dives/repositories/a/woowacourse__java-subway-map-precourse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/service-apply 소스 딥다이브](../../source-deep-dives/repositories/a/woowacourse__service-apply.md) | source-deep-dive-report | source-deep-dives | -5 |
| [agent0ai/agent-zero 소스 딥다이브](../../source-deep-dives/repositories/b/agent0ai__agent-zero.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Aimino-Tech/opendocswork-mcp 소스 딥다이브](../../source-deep-dives/repositories/b/Aimino-Tech__opendocswork-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [aristoapp/awesome-second-brain 소스 딥다이브](../../source-deep-dives/repositories/b/aristoapp__awesome-second-brain.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Bitterbot-AI/bitterbot-desktop 소스 딥다이브](../../source-deep-dives/repositories/b/Bitterbot-AI__bitterbot-desktop.md) | source-deep-dive-report | source-deep-dives | -5 |
| [brycewang-stanford/StatsPAI 소스 딥다이브](../../source-deep-dives/repositories/b/brycewang-stanford__StatsPAI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [caramador83/harness-100 소스 딥다이브](../../source-deep-dives/repositories/b/caramador83__harness-100.md) | source-deep-dive-report | source-deep-dives | -5 |
| [chatchat-space/Langchain-Chatchat 소스 딥다이브](../../source-deep-dives/repositories/b/chatchat-space__Langchain-Chatchat.md) | source-deep-dive-report | source-deep-dives | -5 |
| [cheahjs/free-llm-api-resources 소스 딥다이브](../../source-deep-dives/repositories/b/cheahjs__free-llm-api-resources.md) | source-deep-dive-report | source-deep-dives | -5 |
| [crmne/ruby_llm 소스 딥다이브](../../source-deep-dives/repositories/b/crmne__ruby_llm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [CSOAI-ORG/korea-ai-basic-act-mcp 소스 딥다이브](../../source-deep-dives/repositories/b/CSOAI-ORG__korea-ai-basic-act-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/normalize-cjk 소스 딥다이브](../../source-deep-dives/repositories/b/daangn__normalize-cjk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [deepset-ai/haystack 소스 딥다이브](../../source-deep-dives/repositories/b/deepset-ai__haystack.md) | source-deep-dive-report | source-deep-dives | -5 |
| [devswha/patina 소스 딥다이브](../../source-deep-dives/repositories/b/devswha__patina.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dyad-sh/dyad 소스 딥다이브](../../source-deep-dives/repositories/b/dyad-sh__dyad.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Egonex-AI/Understand-Anything 소스 딥다이브](../../source-deep-dives/repositories/b/Egonex-AI__Understand-Anything.md) | source-deep-dive-report | source-deep-dives | -5 |
| [entireio/pgr 소스 딥다이브](../../source-deep-dives/repositories/b/entireio__pgr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Filippo-Venturini/ctxvault 소스 딥다이브](../../source-deep-dives/repositories/b/Filippo-Venturini__ctxvault.md) | source-deep-dive-report | source-deep-dives | -5 |
| [formulahendry/mcp-server-spec-driven-development 소스 딥다이브](../../source-deep-dives/repositories/b/formulahendry__mcp-server-spec-driven-development.md) | source-deep-dive-report | source-deep-dives | -5 |
| [github/github-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/b/github__github-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Glade-tool/glade-mcp 소스 딥다이브](../../source-deep-dives/repositories/b/Glade-tool__glade-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [guardrails-ai/guardrails 소스 딥다이브](../../source-deep-dives/repositories/b/guardrails-ai__guardrails.md) | source-deep-dive-report | source-deep-dives | -5 |
| [heygen-com/hyperframes 소스 딥다이브](../../source-deep-dives/repositories/b/heygen-com__hyperframes.md) | source-deep-dive-report | source-deep-dives | -5 |
| [huggingface/accelerate 소스 딥다이브](../../source-deep-dives/repositories/b/huggingface__accelerate.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hyperconnect/hyperconnect.github.io 소스 딥다이브](../../source-deep-dives/repositories/b/hyperconnect__hyperconnect.github.io.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jee3m/augmentative-knowledge-hooks 소스 딥다이브](../../source-deep-dives/repositories/b/jee3m__augmentative-knowledge-hooks.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/OrchestrationBench 소스 딥다이브](../../source-deep-dives/repositories/b/kakao__OrchestrationBench.md) | source-deep-dive-report | source-deep-dives | -5 |
| [koi2026/opentax 소스 딥다이브](../../source-deep-dives/repositories/b/koi2026__opentax.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kubeai-project/kubeai 소스 딥다이브](../../source-deep-dives/repositories/b/kubeai-project__kubeai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kvcache-ai/ktransformers 소스 딥다이브](../../source-deep-dives/repositories/b/kvcache-ai__ktransformers.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langroid/langroid 소스 딥다이브](../../source-deep-dives/repositories/b/langroid__langroid.md) | source-deep-dive-report | source-deep-dives | -5 |
| [liaotxcn/Weave 소스 딥다이브](../../source-deep-dives/repositories/b/liaotxcn__Weave.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/armeria-examples 소스 딥다이브](../../source-deep-dives/repositories/b/line__armeria-examples.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-bot-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/b/line__line-bot-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-bot-sdk-go 소스 딥다이브](../../source-deep-dives/repositories/b/line__line-bot-sdk-go.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-sdk-ios-swift 소스 딥다이브](../../source-deep-dives/repositories/b/line__line-sdk-ios-swift.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/promptttspp 소스 딥다이브](../../source-deep-dives/repositories/b/line__promptttspp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [memohai/Memoh 소스 딥다이브](../../source-deep-dives/repositories/b/memohai__Memoh.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MICONNM/openclaw-consensus-mcp 소스 딥다이브](../../source-deep-dives/repositories/b/MICONNM__openclaw-consensus-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/mcp-for-beginners 소스 딥다이브](../../source-deep-dives/repositories/b/microsoft__mcp-for-beginners.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/modelcontextprotocol 소스 딥다이브](../../source-deep-dives/repositories/b/modelcontextprotocol__modelcontextprotocol.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nashsu/llm_wiki 소스 딥다이브](../../source-deep-dives/repositories/b/nashsu__llm_wiki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/arcus-java-client 소스 딥다이브](../../source-deep-dives/repositories/b/naver__arcus-java-client.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/artemis 소스 딥다이브](../../source-deep-dives/repositories/b/naver__artemis.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/dust3r 소스 딥다이브](../../source-deep-dives/repositories/b/naver__dust3r.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/multi-hmr 소스 딥다이브](../../source-deep-dives/repositories/b/naver__multi-hmr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/pow3r 소스 딥다이브](../../source-deep-dives/repositories/b/naver__pow3r.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/eccv-caption 소스 딥다이브](../../source-deep-dives/repositories/b/naver-ai__eccv-caption.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/egtr 소스 딥다이브](../../source-deep-dives/repositories/b/naver-ai__egtr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/model-stock 소스 딥다이브](../../source-deep-dives/repositories/b/naver-ai__model-stock.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/ZIM 소스 딥다이브](../../source-deep-dives/repositories/b/naver-ai__ZIM.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.date-picker 소스 딥다이브](../../source-deep-dives/repositories/b/nhn__tui.date-picker.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.jsdoc-template 소스 딥다이브](../../source-deep-dives/repositories/b/nhn__tui.jsdoc-template.md) | source-deep-dive-report | source-deep-dives | -5 |
| [numtide/llm-agents.nix 소스 딥다이브](../../source-deep-dives/repositories/b/numtide__llm-agents.nix.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ollama/ollama 소스 딥다이브](../../source-deep-dives/repositories/b/ollama__ollama.md) | source-deep-dive-report | source-deep-dives | -5 |
| [opensquilla/opensquilla 소스 딥다이브](../../source-deep-dives/repositories/b/opensquilla__opensquilla.md) | source-deep-dive-report | source-deep-dives | -5 |
| [rush-db/rushdb 소스 딥다이브](../../source-deep-dives/repositories/b/rush-db__rushdb.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/create-tizen-app 소스 딥다이브](../../source-deep-dives/repositories/b/Samsung__create-tizen-app.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/HbbPlayer 소스 딥다이브](../../source-deep-dives/repositories/b/Samsung__HbbPlayer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/ONE-vscode 소스 딥다이브](../../source-deep-dives/repositories/b/Samsung__ONE-vscode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/ONE 소스 딥다이브](../../source-deep-dives/repositories/b/Samsung__ONE.md) | source-deep-dive-report | source-deep-dives | -5 |
| [secure-agentic-framework/saf-mcp 소스 딥다이브](../../source-deep-dives/repositories/b/secure-agentic-framework__saf-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SheikhSheave/Claude-Code-CLI-Reference 소스 딥다이브](../../source-deep-dives/repositories/b/SheikhSheave__Claude-Code-CLI-Reference.md) | source-deep-dive-report | source-deep-dives | -5 |
| [superlinked/sie 소스 딥다이브](../../source-deep-dives/repositories/b/superlinked__sie.md) | source-deep-dive-report | source-deep-dives | -5 |
| [svkozak/pi-acp 소스 딥다이브](../../source-deep-dives/repositories/b/svkozak__pi-acp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [swarmclawai/swarmvault 소스 딥다이브](../../source-deep-dives/repositories/b/swarmclawai__swarmvault.md) | source-deep-dive-report | source-deep-dives | -5 |
| [The-Pocket/PocketFlow 소스 딥다이브](../../source-deep-dives/repositories/b/The-Pocket__PocketFlow.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tomtom-international/tomtom-maps-mcp 소스 딥다이브](../../source-deep-dives/repositories/b/tomtom-international__tomtom-maps-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/react-simplikit 소스 딥다이브](../../source-deep-dives/repositories/b/toss__react-simplikit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/toss-ui 소스 딥다이브](../../source-deep-dives/repositories/b/toss__toss-ui.md) | source-deep-dive-report | source-deep-dives | -5 |
| [unum-cloud/USearch 소스 딥다이브](../../source-deep-dives/repositories/b/unum-cloud__USearch.md) | source-deep-dive-report | source-deep-dives | -5 |
| [weaviate/Verba 소스 딥다이브](../../source-deep-dives/repositories/b/weaviate__Verba.md) | source-deep-dive-report | source-deep-dives | -5 |
| [whdrnr2583-cmd/koreanpulse 소스 딥다이브](../../source-deep-dives/repositories/b/whdrnr2583-cmd__koreanpulse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [yifanfeng97/Hyper-Extract 소스 딥다이브](../../source-deep-dives/repositories/b/yifanfeng97__Hyper-Extract.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zilliztech/claude-context 소스 딥다이브](../../source-deep-dives/repositories/b/zilliztech__claude-context.md) | source-deep-dive-report | source-deep-dives | -5 |
| [2betforyou/GraphRAG 소스 딥다이브](../../source-deep-dives/repositories/c/2betforyou__GraphRAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [abhigyanpatwari/GitNexus 소스 딥다이브](../../source-deep-dives/repositories/c/abhigyanpatwari__GitNexus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [alexgreensh/repo-forensics 소스 딥다이브](../../source-deep-dives/repositories/c/alexgreensh__repo-forensics.md) | source-deep-dive-report | source-deep-dives | -5 |
| [apocas/restai 소스 딥다이브](../../source-deep-dives/repositories/c/apocas__restai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [awslabs/run-model-context-protocol-servers-with-aws-lambda 소스 딥다이브](../../source-deep-dives/repositories/c/awslabs__run-model-context-protocol-servers-with-aws-lambda.md) | source-deep-dive-report | source-deep-dives | -5 |
| [BerriAI/litellm 소스 딥다이브](../../source-deep-dives/repositories/c/BerriAI__litellm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bgauryy/octocode 소스 딥다이브](../../source-deep-dives/repositories/c/bgauryy__octocode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [closermethod/apac-compliance-mcp 소스 딥다이브](../../source-deep-dives/repositories/c/closermethod__apac-compliance-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [codeaholicguy/ai-devkit 소스 딥다이브](../../source-deep-dives/repositories/c/codeaholicguy__ai-devkit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ComposioHQ/composio 소스 딥다이브](../../source-deep-dives/repositories/c/ComposioHQ__composio.md) | source-deep-dive-report | source-deep-dives | -5 |
| [di-sukharev/opencommit 소스 딥다이브](../../source-deep-dives/repositories/c/di-sukharev__opencommit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [dynamiq-ai/dynamiq 소스 딥다이브](../../source-deep-dives/repositories/c/dynamiq-ai__dynamiq.md) | source-deep-dive-report | source-deep-dives | -5 |
| [FredAntB/Spec-Driven-Development 소스 딥다이브](../../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) | source-deep-dive-report | source-deep-dives | -5 |
| [gih2yun/bareun-mcp 소스 딥다이브](../../source-deep-dives/repositories/c/gih2yun__bareun-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [helixml/helix 소스 딥다이브](../../source-deep-dives/repositories/c/helixml__helix.md) | source-deep-dive-report | source-deep-dives | -5 |
| [HKUST-KnowComp/AutoSchemaKG 소스 딥다이브](../../source-deep-dives/repositories/c/HKUST-KnowComp__AutoSchemaKG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [InternLM/HuixiangDou 소스 딥다이브](../../source-deep-dives/repositories/c/InternLM__HuixiangDou.md) | source-deep-dive-report | source-deep-dives | -5 |
| [JAE-HUN-CHO/law-api-mcp-korea 소스 딥다이브](../../source-deep-dives/repositories/c/JAE-HUN-CHO__law-api-mcp-korea.md) | source-deep-dive-report | source-deep-dives | -5 |
| [junkai-li/NetCoreKevin 소스 딥다이브](../../source-deep-dives/repositories/c/junkai-li__NetCoreKevin.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/actionbase 소스 딥다이브](../../source-deep-dives/repositories/c/kakao__actionbase.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/olive-cli 소스 딥다이브](../../source-deep-dives/repositories/c/kakao__olive-cli.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/kor-nlu-datasets 소스 딥다이브](../../source-deep-dives/repositories/c/kakaobrain__kor-nlu-datasets.md) | source-deep-dive-report | source-deep-dives | -5 |
| [khoj-ai/khoj 소스 딥다이브](../../source-deep-dives/repositories/c/khoj-ai__khoj.md) | source-deep-dive-report | source-deep-dives | -5 |
| [lancedb/lancedb 소스 딥다이브](../../source-deep-dives/repositories/c/lancedb__lancedb.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langbot-app/LangBot 소스 딥다이브](../../source-deep-dives/repositories/c/langbot-app__LangBot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [LetsFG/LetsFG 소스 딥다이브](../../source-deep-dives/repositories/c/LetsFG__LetsFG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/abc-kmm-location 소스 딥다이브](../../source-deep-dives/repositories/c/line__abc-kmm-location.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/abc-virtual-background-maker 소스 딥다이브](../../source-deep-dives/repositories/c/line__abc-virtual-background-maker.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/centraldogma 소스 딥다이브](../../source-deep-dives/repositories/c/line__centraldogma.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/clay 소스 딥다이브](../../source-deep-dives/repositories/c/line__clay.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/feature-flag-android 소스 딥다이브](../../source-deep-dives/repositories/c/line__feature-flag-android.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-developers-docs-source 소스 딥다이브](../../source-deep-dives/repositories/c/line__line-developers-docs-source.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-things-starter 소스 딥다이브](../../source-deep-dives/repositories/c/line__line-things-starter.md) | source-deep-dive-report | source-deep-dives | -5 |
| [linkonai2026-kr/kochunk 소스 딥다이브](../../source-deep-dives/repositories/c/linkonai2026-kr__kochunk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MadsLorentzen/ai-job-search 소스 딥다이브](../../source-deep-dives/repositories/c/MadsLorentzen__ai-job-search.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MarcoYou/open-proxy-mcp 소스 딥다이브](../../source-deep-dives/repositories/c/MarcoYou__open-proxy-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [matevip/mateclaw 소스 딥다이브](../../source-deep-dives/repositories/c/matevip__mateclaw.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mcp-use/mcp-use 소스 딥다이브](../../source-deep-dives/repositories/c/mcp-use__mcp-use.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/BitNet 소스 딥다이브](../../source-deep-dives/repositories/c/microsoft__BitNet.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/TypeAgent 소스 딥다이브](../../source-deep-dives/repositories/c/microsoft__TypeAgent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mlc-ai/mlc-llm 소스 딥다이브](../../source-deep-dives/repositories/c/mlc-ai__mlc-llm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [modelcontextprotocol/csharp-sdk 소스 딥다이브](../../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MosslandOpenDevs/alpha 소스 딥다이브](../../source-deep-dives/repositories/c/MosslandOpenDevs__alpha.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/arcus-zookeeper 소스 딥다이브](../../source-deep-dives/repositories/c/naver__arcus-zookeeper.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/dope 소스 딥다이브](../../source-deep-dives/repositories/c/naver__dope.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-flicking-plugins 소스 딥다이브](../../source-deep-dives/repositories/c/naver__egjs-flicking-plugins.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/notify-pr-review 소스 딥다이브](../../source-deep-dives/repositories/c/naver__notify-pr-review.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/pr-stats 소스 딥다이브](../../source-deep-dives/repositories/c/naver__pr-stats.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/GGDR 소스 딥다이브](../../source-deep-dives/repositories/c/naver-ai__GGDR.md) | source-deep-dive-report | source-deep-dives | -5 |
| [neo4j-labs/llm-graph-builder 소스 딥다이브](../../source-deep-dives/repositories/c/neo4j-labs__llm-graph-builder.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.color-picker 소스 딥다이브](../../source-deep-dives/repositories/c/nhn__tui.color-picker.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.image-editor 소스 딥다이브](../../source-deep-dives/repositories/c/nhn__tui.image-editor.md) | source-deep-dive-report | source-deep-dives | -5 |
| [OpenHands/OpenHands 소스 딥다이브](../../source-deep-dives/repositories/c/OpenHands__OpenHands.md) | source-deep-dive-report | source-deep-dives | -5 |
| [openinterpreter/open-interpreter 소스 딥다이브](../../source-deep-dives/repositories/c/openinterpreter__open-interpreter.md) | source-deep-dive-report | source-deep-dives | -5 |
| [OSU-NLP-Group/HippoRAG 소스 딥다이브](../../source-deep-dives/repositories/c/OSU-NLP-Group__HippoRAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ozgurcd/gograph 소스 딥다이브](../../source-deep-dives/repositories/c/ozgurcd__gograph.md) | source-deep-dive-report | source-deep-dives | -5 |
| [promptfoo/promptfoo 소스 딥다이브](../../source-deep-dives/repositories/c/promptfoo__promptfoo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [psychofict/hwpkit 소스 딥다이브](../../source-deep-dives/repositories/c/psychofict__hwpkit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [redis/mcp-redis 소스 딥다이브](../../source-deep-dives/repositories/c/redis__mcp-redis.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/lwnode 소스 딥다이브](../../source-deep-dives/repositories/c/Samsung__lwnode.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/SamsungAutomationStudio 소스 딥다이브](../../source-deep-dives/repositories/c/Samsung__SamsungAutomationStudio.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SciSharp/BotSharp 소스 딥다이브](../../source-deep-dives/repositories/c/SciSharp__BotSharp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [screenpipe/screenpipe 소스 딥다이브](../../source-deep-dives/repositories/c/screenpipe__screenpipe.md) | source-deep-dive-report | source-deep-dives | -5 |
| [simonsez9510/oh-my-wiki 소스 딥다이브](../../source-deep-dives/repositories/c/simonsez9510__oh-my-wiki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [TabbyML/tabby 소스 딥다이브](../../source-deep-dives/repositories/c/TabbyML__tabby.md) | source-deep-dive-report | source-deep-dives | -5 |
| [theJayTea/WritingTools 소스 딥다이브](../../source-deep-dives/repositories/c/theJayTea__WritingTools.md) | source-deep-dive-report | source-deep-dives | -5 |
| [UnicomAI/wanwu 소스 딥다이브](../../source-deep-dives/repositories/c/UnicomAI__wanwu.md) | source-deep-dive-report | source-deep-dives | -5 |
| [volcengine/OpenViking 소스 딥다이브](../../source-deep-dives/repositories/c/volcengine__OpenViking.md) | source-deep-dive-report | source-deep-dives | -5 |
| [VoltAgent/voltagent 소스 딥다이브](../../source-deep-dives/repositories/c/VoltAgent__voltagent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [WangRongsheng/awesome-LLM-resources 소스 딥다이브](../../source-deep-dives/repositories/c/WangRongsheng__awesome-LLM-resources.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-pairmatching-precourse 소스 딥다이브](../../source-deep-dives/repositories/c/woowacourse__java-pairmatching-precourse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/javascript-lotto 소스 딥다이브](../../source-deep-dives/repositories/c/woowacourse__javascript-lotto.md) | source-deep-dive-report | source-deep-dives | -5 |
| [xuiltul/animaworks 소스 딥다이브](../../source-deep-dives/repositories/c/xuiltul__animaworks.md) | source-deep-dive-report | source-deep-dives | -5 |
| [yusufkaraaslan/Skill_Seekers 소스 딥다이브](../../source-deep-dives/repositories/c/yusufkaraaslan__Skill_Seekers.md) | source-deep-dive-report | source-deep-dives | -5 |
| [z0nam/korea-rio-mcp 소스 딥다이브](../../source-deep-dives/repositories/c/z0nam__korea-rio-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [activepieces/activepieces 소스 딥다이브](../../source-deep-dives/repositories/d/activepieces__activepieces.md) | source-deep-dive-report | source-deep-dives | -5 |
| [AgentBridge-Lab/korea-space-support-mcp 소스 딥다이브](../../source-deep-dives/repositories/d/AgentBridge-Lab__korea-space-support-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [arthurpanhku/DocSentinel 소스 딥다이브](../../source-deep-dives/repositories/d/arthurpanhku__DocSentinel.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/seed-design 소스 딥다이브](../../source-deep-dives/repositories/d/daangn__seed-design.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/websites 소스 딥다이브](../../source-deep-dives/repositories/d/daangn__websites.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Dicklesworthstone/meta_skill 소스 딥다이브](../../source-deep-dives/repositories/d/Dicklesworthstone__meta_skill.md) | source-deep-dive-report | source-deep-dives | -5 |
| [FalkorDB/FalkorDB 소스 딥다이브](../../source-deep-dives/repositories/d/FalkorDB__FalkorDB.md) | source-deep-dive-report | source-deep-dives | -5 |
| [FoundationAgents/MetaGPT 소스 딥다이브](../../source-deep-dives/repositories/d/FoundationAgents__MetaGPT.md) | source-deep-dive-report | source-deep-dives | -5 |
| [GeminiLight/MindOS 소스 딥다이브](../../source-deep-dives/repositories/d/GeminiLight__MindOS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [genomoncology/biomcp 소스 딥다이브](../../source-deep-dives/repositories/d/genomoncology__biomcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hi-godot/godot-ai 소스 딥다이브](../../source-deep-dives/repositories/d/hi-godot__godot-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hjhun/llm-wiki 소스 딥다이브](../../source-deep-dives/repositories/d/hjhun__llm-wiki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hwan96-ai/genai-case-study-showcase 소스 딥다이브](../../source-deep-dives/repositories/d/hwan96-ai__genai-case-study-showcase.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Ingenimax/agent-sdk-go 소스 딥다이브](../../source-deep-dives/repositories/d/Ingenimax__agent-sdk-go.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jinmyungjong/korean-law-mcp 소스 딥다이브](../../source-deep-dives/repositories/d/jinmyungjong__korean-law-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/buffalo 소스 딥다이브](../../source-deep-dives/repositories/d/kakao__buffalo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/kafka-connect-web 소스 딥다이브](../../source-deep-dives/repositories/d/kakao__kafka-connect-web.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/fast-autoaugment 소스 딥다이브](../../source-deep-dives/repositories/d/kakaobrain__fast-autoaugment.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/kortok 소스 딥다이브](../../source-deep-dives/repositories/d/kakaobrain__kortok.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/torchgpipe 소스 딥다이브](../../source-deep-dives/repositories/d/kakaobrain__torchgpipe.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kaplanelad/shellfirm 소스 딥다이브](../../source-deep-dives/repositories/d/kaplanelad__shellfirm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kvcache-ai/Mooncake 소스 딥다이브](../../source-deep-dives/repositories/d/kvcache-ai__Mooncake.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/flutter_line_sdk 소스 딥다이브](../../source-deep-dives/repositories/d/line__flutter_line_sdk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/lighthouse 소스 딥다이브](../../source-deep-dives/repositories/d/line__lighthouse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-fido2-server 소스 딥다이브](../../source-deep-dives/repositories/d/line__line-fido2-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [manaflow-ai/cmux 소스 딥다이브](../../source-deep-dives/repositories/d/manaflow-ai__cmux.md) | source-deep-dive-report | source-deep-dives | -5 |
| [microsoft/autogen 소스 딥다이브](../../source-deep-dives/repositories/d/microsoft__autogen.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MODSetter/SurfSense 소스 딥다이브](../../source-deep-dives/repositories/d/MODSetter__SurfSense.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nanbingxyz/5ire 소스 딥다이브](../../source-deep-dives/repositories/d/nanbingxyz__5ire.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-agent 소스 딥다이브](../../source-deep-dives/repositories/d/naver__egjs-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/posescript 소스 딥다이브](../../source-deep-dives/repositories/d/naver__posescript.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/scavenger 소스 딥다이브](../../source-deep-dives/repositories/d/naver__scavenger.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/storybook-addon-preview 소스 딥다이브](../../source-deep-dives/repositories/d/naver__storybook-addon-preview.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/relabel_imagenet 소스 딥다이브](../../source-deep-dives/repositories/d/naver-ai__relabel_imagenet.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/seoul-world-model 소스 딥다이브](../../source-deep-dives/repositories/d/naver-ai__seoul-world-model.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/tobo 소스 딥다이브](../../source-deep-dives/repositories/d/naver-ai__tobo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [netboxlabs/netbox-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/d/netboxlabs__netbox-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [neuron-core/neuron-ai 소스 딥다이브](../../source-deep-dives/repositories/d/neuron-core__neuron-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.time-picker 소스 딥다이브](../../source-deep-dives/repositories/d/nhn__tui.time-picker.md) | source-deep-dive-report | source-deep-dives | -5 |
| [numman-ali/openskills 소스 딥다이브](../../source-deep-dives/repositories/d/numman-ali__openskills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [opendataloader-project/opendataloader-pdf 소스 딥다이브](../../source-deep-dives/repositories/d/opendataloader-project__opendataloader-pdf.md) | source-deep-dive-report | source-deep-dives | -5 |
| [optave/ops-codegraph-tool 소스 딥다이브](../../source-deep-dives/repositories/d/optave__ops-codegraph-tool.md) | source-deep-dive-report | source-deep-dives | -5 |
| [orneryd/NornicDB 소스 딥다이브](../../source-deep-dives/repositories/d/orneryd__NornicDB.md) | source-deep-dive-report | source-deep-dives | -5 |
| [otomata-tech/memento-core 소스 딥다이브](../../source-deep-dives/repositories/d/otomata-tech__memento-core.md) | source-deep-dive-report | source-deep-dives | -5 |
| [project-nomos/nomos 소스 딥다이브](../../source-deep-dives/repositories/d/project-nomos__nomos.md) | source-deep-dive-report | source-deep-dives | -5 |
| [responsibleai/ASSERT 소스 딥다이브](../../source-deep-dives/repositories/d/responsibleai__ASSERT.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/ADBI 소스 딥다이브](../../source-deep-dives/repositories/d/Samsung__ADBI.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/escargot 소스 딥다이브](../../source-deep-dives/repositories/d/Samsung__escargot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/jalangi2 소스 딥다이브](../../source-deep-dives/repositories/d/Samsung__jalangi2.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/KnowledgeSharingPlatform 소스 딥다이브](../../source-deep-dives/repositories/d/Samsung__KnowledgeSharingPlatform.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/TizenFX 소스 딥다이브](../../source-deep-dives/repositories/d/Samsung__TizenFX.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SamurAIGPT/llm-wiki-agent 소스 딥다이브](../../source-deep-dives/repositories/d/SamurAIGPT__llm-wiki-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [seoulstart/awesome-build-for-korea 소스 딥다이브](../../source-deep-dives/repositories/d/seoulstart__awesome-build-for-korea.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stefanoamorelli/sec-edgar-mcp 소스 딥다이브](../../source-deep-dives/repositories/d/stefanoamorelli__sec-edgar-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SyntheticAutonomicMind/CLIO 소스 딥다이브](../../source-deep-dives/repositories/d/SyntheticAutonomicMind__CLIO.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tontinton/maki 소스 딥다이브](../../source-deep-dives/repositories/d/tontinton__maki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [us/crw 소스 딥다이브](../../source-deep-dives/repositories/d/us__crw.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vstorm-co/pydantic-ai-backend 소스 딥다이브](../../source-deep-dives/repositories/d/vstorm-co__pydantic-ai-backend.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Wide-Moat/open-computer-use 소스 딥다이브](../../source-deep-dives/repositories/d/Wide-Moat__open-computer-use.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/back-end-roadmap 소스 딥다이브](../../source-deep-dives/repositories/d/woowacourse__back-end-roadmap.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-chess 소스 딥다이브](../../source-deep-dives/repositories/d/woowacourse__java-chess.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/prolog 소스 딥다이브](../../source-deep-dives/repositories/d/woowacourse__prolog.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Yeachan-Heo/oh-my-codex 소스 딥다이브](../../source-deep-dives/repositories/d/Yeachan-Heo__oh-my-codex.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zhayujie/CowAgent 소스 딥다이브](../../source-deep-dives/repositories/d/zhayujie__CowAgent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [addyosmani/agent-skills 소스 딥다이브](../../source-deep-dives/repositories/e/addyosmani__agent-skills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [agno-agi/agno 소스 딥다이브](../../source-deep-dives/repositories/e/agno-agi__agno.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ai-frendly-datahub/KoreanNLPMCPRadar 소스 딥다이브](../../source-deep-dives/repositories/e/ai-frendly-datahub__KoreanNLPMCPRadar.md) | source-deep-dive-report | source-deep-dives | -5 |
| [All-Hands-AI/OpenHands 소스 딥다이브](../../source-deep-dives/repositories/e/All-Hands-AI__OpenHands.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Azure/GPT-RAG 소스 딥다이브](../../source-deep-dives/repositories/e/Azure__GPT-RAG.md) | source-deep-dive-report | source-deep-dives | -5 |
| [barry-ran/QuickDesk 소스 딥다이브](../../source-deep-dives/repositories/e/barry-ran__QuickDesk.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bmad-code-org/BMAD-METHOD 소스 딥다이브](../../source-deep-dives/repositories/e/bmad-code-org__BMAD-METHOD.md) | source-deep-dive-report | source-deep-dives | -5 |
| [buildermethods/agent-os 소스 딥다이브](../../source-deep-dives/repositories/e/buildermethods__agent-os.md) | source-deep-dive-report | source-deep-dives | -5 |
| [caura-ai/caura-memclaw 소스 딥다이브](../../source-deep-dives/repositories/e/caura-ai__caura-memclaw.md) | source-deep-dive-report | source-deep-dives | -5 |
| [codervisor/leanspec 소스 딥다이브](../../source-deep-dives/repositories/e/codervisor__leanspec.md) | source-deep-dive-report | source-deep-dives | -5 |
| [continuedev/continue 소스 딥다이브](../../source-deep-dives/repositories/e/continuedev__continue.md) | source-deep-dive-report | source-deep-dives | -5 |
| [datagouv/datagouv-mcp 소스 딥다이브](../../source-deep-dives/repositories/e/datagouv__datagouv-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [github/awesome-copilot 소스 딥다이브](../../source-deep-dives/repositories/e/github__awesome-copilot.md) | source-deep-dive-report | source-deep-dives | -5 |
| [google-marketing-solutions/google_ads_mcp 소스 딥다이브](../../source-deep-dives/repositories/e/google-marketing-solutions__google_ads_mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [homeassistant-ai/ha-mcp 소스 딥다이브](../../source-deep-dives/repositories/e/homeassistant-ai__ha-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [HwangChanho/syncfortune 소스 딥다이브](../../source-deep-dives/repositories/e/HwangChanho__syncfortune.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hypn4/tossinvest-mcp 소스 딥다이브](../../source-deep-dives/repositories/e/hypn4__tossinvest-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [J-nowcow/awesome-korean-agent-skills 소스 딥다이브](../../source-deep-dives/repositories/e/J-nowcow__awesome-korean-agent-skills.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jayminwest/overstory 소스 딥다이브](../../source-deep-dives/repositories/e/jayminwest__overstory.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakao/detek 소스 딥다이브](../../source-deep-dives/repositories/e/kakao__detek.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/helo-word 소스 딥다이브](../../source-deep-dives/repositories/e/kakaobrain__helo-word.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langchain4j/langchain4j 소스 딥다이브](../../source-deep-dives/repositories/e/langchain4j__langchain4j.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/line-sdk-android 소스 딥다이브](../../source-deep-dives/repositories/e/line__line-sdk-android.md) | source-deep-dive-report | source-deep-dives | -5 |
| [lowtidebuild/data-protection-agent 소스 딥다이브](../../source-deep-dives/repositories/e/lowtidebuild__data-protection-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mcpads/create-retro-game-kr-patch 소스 딥다이브](../../source-deep-dives/repositories/e/mcpads__create-retro-game-kr-patch.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mongodb-js/mongodb-mcp-server 소스 딥다이브](../../source-deep-dives/repositories/e/mongodb-js__mongodb-mcp-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/fixture-monkey 소스 딥다이브](../../source-deep-dives/repositories/e/naver__fixture-monkey.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/gdc 소스 딥다이브](../../source-deep-dives/repositories/e/naver__gdc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/kapture 소스 딥다이브](../../source-deep-dives/repositories/e/naver__kapture.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/lobster 소스 딥다이브](../../source-deep-dives/repositories/e/naver__lobster.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/nam-sdk-android 소스 딥다이브](../../source-deep-dives/repositories/e/naver__nam-sdk-android.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/pisco 소스 딥다이브](../../source-deep-dives/repositories/e/naver__pisco.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/spring-jdbc-plus 소스 딥다이브](../../source-deep-dives/repositories/e/naver__spring-jdbc-plus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/sqlova 소스 딥다이브](../../source-deep-dives/repositories/e/naver__sqlova.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/hypermix 소스 딥다이브](../../source-deep-dives/repositories/e/naver-ai__hypermix.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/rope-vit 소스 딥다이브](../../source-deep-dives/repositories/e/naver-ai__rope-vit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [NVIDIA-AI-Blueprints/video-search-and-summarization 소스 딥다이브](../../source-deep-dives/repositories/e/NVIDIA-AI-Blueprints__video-search-and-summarization.md) | source-deep-dive-report | source-deep-dives | -5 |
| [okx/agent-trade-kit 소스 딥다이브](../../source-deep-dives/repositories/e/okx__agent-trade-kit.md) | source-deep-dive-report | source-deep-dives | -5 |
| [oracle/mcp 소스 딥다이브](../../source-deep-dives/repositories/e/oracle__mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [pathwaycom/llm-app 소스 딥다이브](../../source-deep-dives/repositories/e/pathwaycom__llm-app.md) | source-deep-dive-report | source-deep-dives | -5 |
| [pgvector/pgvector 소스 딥다이브](../../source-deep-dives/repositories/e/pgvector__pgvector.md) | source-deep-dive-report | source-deep-dives | -5 |
| [puppyone-ai/puppyone 소스 딥다이브](../../source-deep-dives/repositories/e/puppyone-ai__puppyone.md) | source-deep-dive-report | source-deep-dives | -5 |
| [RobotecAI/rai 소스 딥다이브](../../source-deep-dives/repositories/e/RobotecAI__rai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/ClickAgent 소스 딥다이브](../../source-deep-dives/repositories/e/Samsung__ClickAgent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/spark-cep 소스 딥다이브](../../source-deep-dives/repositories/e/Samsung__spark-cep.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/Tizen.NET 소스 딥다이브](../../source-deep-dives/repositories/e/Samsung__Tizen.NET.md) | source-deep-dive-report | source-deep-dives | -5 |
| [sashiko-dev/sashiko 소스 딥다이브](../../source-deep-dives/repositories/e/sashiko-dev__sashiko.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SWE-agent/SWE-agent 소스 딥다이브](../../source-deep-dives/repositories/e/SWE-agent__SWE-agent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [thedotmack/claude-mem 소스 딥다이브](../../source-deep-dives/repositories/e/thedotmack__claude-mem.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/nestjs-aop 소스 딥다이브](../../source-deep-dives/repositories/e/toss__nestjs-aop.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/slash-site 소스 딥다이브](../../source-deep-dives/repositories/e/toss__slash-site.md) | source-deep-dive-report | source-deep-dives | -5 |
| [toss/tossface 소스 딥다이브](../../source-deep-dives/repositories/e/toss__tossface.md) | source-deep-dive-report | source-deep-dives | -5 |
| [VectifyAI/OpenKB 소스 딥다이브](../../source-deep-dives/repositories/e/VectifyAI__OpenKB.md) | source-deep-dive-report | source-deep-dives | -5 |
| [waybarrios/vllm-mlx 소스 딥다이브](../../source-deep-dives/repositories/e/waybarrios__vllm-mlx.md) | source-deep-dive-report | source-deep-dives | -5 |
| [your-papa/obsidian-Smart2Brain 소스 딥다이브](../../source-deep-dives/repositories/e/your-papa__obsidian-Smart2Brain.md) | source-deep-dive-report | source-deep-dives | -5 |
| [zolotukhin/zinc 소스 딥다이브](../../source-deep-dives/repositories/e/zolotukhin__zinc.md) | source-deep-dive-report | source-deep-dives | -5 |
| [affaan-m/ECC 소스 딥다이브](../../source-deep-dives/repositories/f/affaan-m__ECC.md) | source-deep-dive-report | source-deep-dives | -5 |
| [AgentEvalHQ/AgentEval 소스 딥다이브](../../source-deep-dives/repositories/f/AgentEvalHQ__AgentEval.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ai-screams/HwpForge 소스 딥다이브](../../source-deep-dives/repositories/f/ai-screams__HwpForge.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ajgarciaj/NaViL 소스 딥다이브](../../source-deep-dives/repositories/f/ajgarciaj__NaViL.md) | source-deep-dive-report | source-deep-dives | -5 |
| [anthropics/claude-code 소스 딥다이브](../../source-deep-dives/repositories/f/anthropics__claude-code.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Ar9av/obsidian-wiki 소스 딥다이브](../../source-deep-dives/repositories/f/Ar9av__obsidian-wiki.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bosun-ai/swiftide 소스 딥다이브](../../source-deep-dives/repositories/f/bosun-ai__swiftide.md) | source-deep-dive-report | source-deep-dives | -5 |
| [bzsanti/oxidizePdf 소스 딥다이브](../../source-deep-dives/repositories/f/bzsanti__oxidizePdf.md) | source-deep-dive-report | source-deep-dives | -5 |
| [CharlesLee1991/bmp-ai-air 소스 딥다이브](../../source-deep-dives/repositories/f/CharlesLee1991__bmp-ai-air.md) | source-deep-dive-report | source-deep-dives | -5 |
| [ChiR24/Unreal_mcp 소스 딥다이브](../../source-deep-dives/repositories/f/ChiR24__Unreal_mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [chroma-core/chroma 소스 딥다이브](../../source-deep-dives/repositories/f/chroma-core__chroma.md) | source-deep-dive-report | source-deep-dives | -5 |
| [cline/cline 소스 딥다이브](../../source-deep-dives/repositories/f/cline__cline.md) | source-deep-dive-report | source-deep-dives | -5 |
| [containers/ramalama 소스 딥다이브](../../source-deep-dives/repositories/f/containers__ramalama.md) | source-deep-dive-report | source-deep-dives | -5 |
| [cykim05/heard 소스 딥다이브](../../source-deep-dives/repositories/f/cykim05__heard.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/codepocket 소스 딥다이브](../../source-deep-dives/repositories/f/daangn__codepocket.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/gorean 소스 딥다이브](../../source-deep-dives/repositories/f/daangn__gorean.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/kinesumer 소스 딥다이브](../../source-deep-dives/repositories/f/daangn__kinesumer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/search-ko-dic 소스 딥다이브](../../source-deep-dives/repositories/f/daangn__search-ko-dic.md) | source-deep-dive-report | source-deep-dives | -5 |
| [daangn/urlpack 소스 딥다이브](../../source-deep-dives/repositories/f/daangn__urlpack.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Dicklesworthstone/coding_agent_session_search 소스 딥다이브](../../source-deep-dives/repositories/f/Dicklesworthstone__coding_agent_session_search.md) | source-deep-dive-report | source-deep-dives | -5 |
| [eastreams/loong 소스 딥다이브](../../source-deep-dives/repositories/f/eastreams__loong.md) | source-deep-dive-report | source-deep-dives | -5 |
| [EmbeddedLLM/JamAIBase 소스 딥다이브](../../source-deep-dives/repositories/f/EmbeddedLLM__JamAIBase.md) | source-deep-dive-report | source-deep-dives | -5 |
| [eugeniughelbur/obsidian-second-brain 소스 딥다이브](../../source-deep-dives/repositories/f/eugeniughelbur__obsidian-second-brain.md) | source-deep-dive-report | source-deep-dives | -5 |
| [GCWing/BitFun 소스 딥다이브](../../source-deep-dives/repositories/f/GCWing__BitFun.md) | source-deep-dive-report | source-deep-dives | -5 |
| [google/adk-docs 소스 딥다이브](../../source-deep-dives/repositories/f/google__adk-docs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [grafana/loki-mcp 소스 딥다이브](../../source-deep-dives/repositories/f/grafana__loki-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [griptape-ai/griptape 소스 딥다이브](../../source-deep-dives/repositories/f/griptape-ai__griptape.md) | source-deep-dive-report | source-deep-dives | -5 |
| [hashgraph-online/hol-guard 소스 딥다이브](../../source-deep-dives/repositories/f/hashgraph-online__hol-guard.md) | source-deep-dive-report | source-deep-dives | -5 |
| [iikarus/Dragon-Brain 소스 딥다이브](../../source-deep-dives/repositories/f/iikarus__Dragon-Brain.md) | source-deep-dive-report | source-deep-dives | -5 |
| [jonigl/ollama-mcp-bridge 소스 딥다이브](../../source-deep-dives/repositories/f/jonigl__ollama-mcp-bridge.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kakaobrain/sparse-detr 소스 딥다이브](../../source-deep-dives/repositories/f/kakaobrain__sparse-detr.md) | source-deep-dive-report | source-deep-dives | -5 |
| [kkollsga/kglite 소스 딥다이브](../../source-deep-dives/repositories/f/kkollsga__kglite.md) | source-deep-dive-report | source-deep-dives | -5 |
| [langchain-ai/langgraphjs 소스 딥다이브](../../source-deep-dives/repositories/f/langchain-ai__langgraphjs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/abc-user-feedback 소스 딥다이브](../../source-deep-dives/repositories/f/line__abc-user-feedback.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/armeria 소스 딥다이브](../../source-deep-dives/repositories/f/line__armeria.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/headver 소스 딥다이브](../../source-deep-dives/repositories/f/line__headver.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/lich 소스 딥다이브](../../source-deep-dives/repositories/f/line__lich.md) | source-deep-dive-report | source-deep-dives | -5 |
| [line/liff-inspector 소스 딥다이브](../../source-deep-dives/repositories/f/line__liff-inspector.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mem0ai/mem0 소스 딥다이브](../../source-deep-dives/repositories/f/mem0ai__mem0.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MinishLab/semble 소스 딥다이브](../../source-deep-dives/repositories/f/MinishLab__semble.md) | source-deep-dive-report | source-deep-dives | -5 |
| [mordang7/ContextKeep 소스 딥다이브](../../source-deep-dives/repositories/f/mordang7__ContextKeep.md) | source-deep-dive-report | source-deep-dives | -5 |
| [MUSE-CODE-SPACE/SLMAgent 소스 딥다이브](../../source-deep-dives/repositories/f/MUSE-CODE-SPACE__SLMAgent.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Mybono/ai-orchestrator 소스 딥다이브](../../source-deep-dives/repositories/f/Mybono__ai-orchestrator.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/croco 소스 딥다이브](../../source-deep-dives/repositories/f/naver__croco.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/disco 소스 딥다이브](../../source-deep-dives/repositories/f/naver__disco.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/egjs-imready 소스 딥다이브](../../source-deep-dives/repositories/f/naver__egjs-imready.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/lispe 소스 딥다이브](../../source-deep-dives/repositories/f/naver__lispe.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/nam-sdk-ios 소스 딥다이브](../../source-deep-dives/repositories/f/naver__nam-sdk-ios.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver/PoseGPT 소스 딥다이브](../../source-deep-dives/repositories/f/naver__PoseGPT.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/carecall-corpus 소스 딥다이브](../../source-deep-dives/repositories/f/naver-ai__carecall-corpus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/RapFlow-TTS 소스 딥다이브](../../source-deep-dives/repositories/f/naver-ai__RapFlow-TTS.md) | source-deep-dive-report | source-deep-dives | -5 |
| [naver-ai/tc-clip 소스 딥다이브](../../source-deep-dives/repositories/f/naver-ai__tc-clip.md) | source-deep-dive-report | source-deep-dives | -5 |
| [neomjs/neo 소스 딥다이브](../../source-deep-dives/repositories/f/neomjs__neo.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.chart 소스 딥다이브](../../source-deep-dives/repositories/f/nhn__tui.chart.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.editor 소스 딥다이브](../../source-deep-dives/repositories/f/nhn__tui.editor.md) | source-deep-dive-report | source-deep-dives | -5 |
| [nhn/tui.grid 소스 딥다이브](../../source-deep-dives/repositories/f/nhn__tui.grid.md) | source-deep-dive-report | source-deep-dives | -5 |
| [open-mercato/open-mercato 소스 딥다이브](../../source-deep-dives/repositories/f/open-mercato__open-mercato.md) | source-deep-dive-report | source-deep-dives | -5 |
| [OpenCSGs/csghub-server 소스 딥다이브](../../source-deep-dives/repositories/f/OpenCSGs__csghub-server.md) | source-deep-dive-report | source-deep-dives | -5 |
| [opendatalab/MinerU-Document-Explorer 소스 딥다이브](../../source-deep-dives/repositories/f/opendatalab__MinerU-Document-Explorer.md) | source-deep-dive-report | source-deep-dives | -5 |
| [PaddlePaddle/PaddleOCR 소스 딥다이브](../../source-deep-dives/repositories/f/PaddlePaddle__PaddleOCR.md) | source-deep-dive-report | source-deep-dives | -5 |
| [pipeshub-ai/pipeshub-ai 소스 딥다이브](../../source-deep-dives/repositories/f/pipeshub-ai__pipeshub-ai.md) | source-deep-dive-report | source-deep-dives | -5 |
| [proffesor-for-testing/agentic-qe 소스 딥다이브](../../source-deep-dives/repositories/f/proffesor-for-testing__agentic-qe.md) | source-deep-dive-report | source-deep-dives | -5 |
| [RooCodeInc/Roo-Code 소스 딥다이브](../../source-deep-dives/repositories/f/RooCodeInc__Roo-Code.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/TAU 소스 딥다이브](../../source-deep-dives/repositories/f/Samsung__TAU.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Samsung/walrus 소스 딥다이브](../../source-deep-dives/repositories/f/Samsung__walrus.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Shubhamsaboo/awesome-llm-apps 소스 딥다이브](../../source-deep-dives/repositories/f/Shubhamsaboo__awesome-llm-apps.md) | source-deep-dive-report | source-deep-dives | -5 |
| [SikamikanikoBG/homelab-monitor 소스 딥다이브](../../source-deep-dives/repositories/f/SikamikanikoBG__homelab-monitor.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stacklok/toolhive-studio 소스 딥다이브](../../source-deep-dives/repositories/f/stacklok__toolhive-studio.md) | source-deep-dive-report | source-deep-dives | -5 |
| [stanford-oval/storm 소스 딥다이브](../../source-deep-dives/repositories/f/stanford-oval__storm.md) | source-deep-dive-report | source-deep-dives | -5 |
| [StarRocks/mcp-server-starrocks 소스 딥다이브](../../source-deep-dives/repositories/f/StarRocks__mcp-server-starrocks.md) | source-deep-dive-report | source-deep-dives | -5 |
| [strands-agents/evals 소스 딥다이브](../../source-deep-dives/repositories/f/strands-agents__evals.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tableau/tableau-mcp 소스 딥다이브](../../source-deep-dives/repositories/f/tableau__tableau-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [Tencent/WeKnora 소스 딥다이브](../../source-deep-dives/repositories/f/Tencent__WeKnora.md) | source-deep-dive-report | source-deep-dives | -5 |
| [tinyfish-io/agentql-mcp 소스 딥다이브](../../source-deep-dives/repositories/f/tinyfish-io__agentql-mcp.md) | source-deep-dive-report | source-deep-dives | -5 |
| [vespa-engine/vespa 소스 딥다이브](../../source-deep-dives/repositories/f/vespa-engine__vespa.md) | source-deep-dive-report | source-deep-dives | -5 |
| [webiny/webiny-js 소스 딥다이브](../../source-deep-dives/repositories/f/webiny__webiny-js.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/java-racingcar-precourse 소스 딥다이브](../../source-deep-dives/repositories/f/woowacourse__java-racingcar-precourse.md) | source-deep-dive-report | source-deep-dives | -5 |
| [woowacourse/woowacourse-docs 소스 딥다이브](../../source-deep-dives/repositories/f/woowacourse__woowacourse-docs.md) | source-deep-dive-report | source-deep-dives | -5 |
| [WordPress/mcp-adapter 소스 딥다이브](../../source-deep-dives/repositories/f/WordPress__mcp-adapter.md) | source-deep-dive-report | source-deep-dives | -5 |
