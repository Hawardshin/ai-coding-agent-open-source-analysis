# 전체 인사이트 지도

생성 시각: 2026-06-18T15:43:44.521Z

이 문서는 “각 주제가 어디에 있고, 무슨 의미이며, 어떤 인사이트를 뽑아야 하는지”를 한 곳에서 보기 위한 최상위 지도입니다. 깊은 폴더를 먼저 열지 말고, 이 문서에서 주제의 의미와 위치를 잡은 뒤 필요한 보고서로 들어가면 됩니다.

## 요약

- 조사 단위: 18개 보고서 주제, 10개 소스 인사이트 카테고리, 2,595개 Markdown 보고서입니다.
- 포함 범위: 주제 멤버십 6,772개, 소스 스캔 레포 1,136개를 한 문서에서 연결합니다.
- 탐색 방식: 먼저 “보고서 주제 전체 지도”에서 질문의 의미를 잡고, “소스 인사이트 카테고리 지도”에서 실제 구현 비교로 내려갑니다.

## 총평

이 레포의 인사이트는 세 층으로 읽어야 합니다. 첫째, 보고서 주제는 왜 조사했는지를 설명합니다. 둘째, 소스 인사이트 카테고리는 실제 클론 소스에서 무엇이 반복되는지를 보여줍니다. 셋째, 레포별 딥다이브는 특정 프로젝트를 선택하거나 제외할 근거를 줍니다. 이 문서 하나를 기준점으로 삼으면 각 주제의 의미, 위치, 추출해야 할 판단이 끊기지 않습니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [전체 인사이트 지도](README.md) | 각 주제의 의미, 위치, 뽑아낼 인사이트를 한 문서에서 확인. |
| [주제별 보고서 목차](../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../repository-insights/README.md) | 레포별 총평, 위험 신호, 다음에 볼 링크. |
| [소스 딥다이브](../source-deep-dives/README.md) | 로컬 클론에서 뽑은 파일 경로 근거. |
| [소스 트렌드 인사이트](../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [근거 카테고리](../categories/README.md) | 오픈소스, 논문, 발표, 참고자료의 artifact 분류. |


## 이 문서에서 바로 판단할 것

| 질문 | 바로 볼 위치 | 뽑을 결론 |
| --- | --- | --- |
| 전체 구조가 뭔가? | [전체 보고서 읽기 지도](../README.md) | 조사 범위, 주제 수, 폴더별 역할 |
| 특정 주제가 어디 있나? | [주제별 보고서 목차](../by-topic/README.md) | 주제 README와 JSON 데이터 위치 |
| 구현 차이는 어디서 보나? | [상세 비교 리포트](../source-insights/comparative-report.md) | 카테고리별 강점, 약점, 대표 레포 |
| 실제 파일 근거는 어디 있나? | [소스 딥다이브](../source-deep-dives/README.md) | entrypoint, runtime, retrieval, spec, eval, security 경로 |
| 많은 항목을 표로 보려면? | [표/CSV 목차](../tables/README.md) | CSV 기반 필터링과 비교 |

## 보고서 주제 전체 지도

| 주제 | 보고서 수 | 의미 | 어디에 있음 | 뽑아낼 인사이트 | 최종 활용 |
| --- | ---: | --- | --- | --- | --- |
| [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) | 2434 | 핵심 에이전트, 글로벌/한국 트렌딩, LLM wiki, 클론 구조의 레포별 상세 보고서입니다. | [주제 README](../by-topic/repository-deep-dives/README.md)<br>[데이터](../../data/report-categories/repository-deep-dives.json) | 레포별 총평<br>구현 특징과 위험 신호<br>다음에 볼 소스/보고서 링크 | 개별 레포를 선택하거나 제외할 판단 근거를 뽑습니다. |
| [비교/유사도 지도](../by-topic/comparisons/README.md) | 1195 | 레포 간 taxonomy, 기능 비교, 유사도 cluster, 카테고리 차이를 보는 비교 지도입니다. | [주제 README](../by-topic/comparisons/README.md)<br>[데이터](../../data/report-categories/comparisons.json) | 기능별 비교<br>유사군과 차이점<br>카테고리 간 설계 거리 | 후보 프로젝트를 비교하고 선택 기준을 세웁니다. |
| [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) | 1187 | 로컬에 클론된 실제 레포에서 entrypoint, runtime, retrieval, spec, eval, security, CI/container 경로를 뽑은 구현 근거입니다. | [주제 README](../by-topic/source-code-deep-dives/README.md)<br>[데이터](../../data/report-categories/source-code-deep-dives.json) | 핵심 파일 경로<br>구현 패턴과 feature bucket<br>레포별 위험 신호와 검증 표면 | 레포별로 바로 확인할 코드 근거와 구현 차이를 얻습니다. |
| [글로벌 트렌딩 오픈소스](../by-topic/global-trending-open-source/README.md) | 502 | 전세계 AI/agent/RAG/devtool/security/infrastructure 오픈소스 트렌딩 코퍼스입니다. | [주제 README](../by-topic/global-trending-open-source/README.md)<br>[데이터](../../data/report-categories/global-trending-open-source.json) | 글로벌 인기 프로젝트<br>언어/스택/카테고리 분포<br>급상승 구현 패턴 | 전세계 트렌드 기준의 후보군과 비교 대상을 뽑습니다. |
| [한국 트렌딩 오픈소스](../by-topic/korea-trending-open-source/README.md) | 502 | 한국 개발자 커뮤니티, 한국 AI/MCP/RAG 프로젝트, 국내 기술 블로그와 오픈소스 흐름입니다. | [주제 README](../by-topic/korea-trending-open-source/README.md)<br>[데이터](../../data/report-categories/korea-trending-open-source.json) | 국내 트렌드 레포<br>한국어/국내 도메인 MCP/RAG 흐름<br>기업/커뮤니티별 기술 신호 | 국내 맥락에서 우선 볼 프로젝트와 차별점을 뽑습니다. |
| [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) | 292 | LLM wiki, RAG, GraphRAG, 문서 지식베이스, ingestion, retrieval, provenance를 묶은 지식 지속성 주제입니다. | [주제 README](../by-topic/llm-wiki/README.md)<br>[데이터](../../data/report-categories/llm-wiki.json) | ingestion/chunking pipeline<br>embedding/vector/graph retrieval<br>provenance와 knowledge update 방식 | LLM 지식베이스와 코드 위키를 설계할 때 필요한 파이프라인 차이를 비교합니다. |
| [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) | 281 | MCP, tool registry, hooks, skills, workflow orchestration처럼 에이전트 실행을 받치는 하네스 계층입니다. | [주제 README](../by-topic/agent-harness/README.md)<br>[데이터](../../data/report-categories/agent-harness.json) | MCP/tool 연결<br>hooks/skills/plugin 구조<br>workflow orchestration과 권한 경계 | 에이전트 런타임과 도구 실행 기반 설계 기준을 얻습니다. |
| [클론 구조/인벤토리](../by-topic/clone-structure-inventory/README.md) | 128 | 로컬에 클론한 upstream 소스의 물리 구조, manifest, source directory, entrypoint 목록입니다. | [주제 README](../by-topic/clone-structure-inventory/README.md)<br>[데이터](../../data/report-categories/clone-structure-inventory.json) | 로컬 소스 위치<br>레포별 파일 구조<br>entrypoint와 주요 디렉터리 | 분석 근거가 되는 원본 소스 트리를 찾습니다. |
| [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) | 124 | Codex, Claude Code, Aider, OpenHands, Cline/Roo류 코딩 에이전트와 IDE 보조 도구를 비교하는 주제입니다. | [주제 README](../by-topic/coding-agents/README.md)<br>[데이터](../../data/report-categories/coding-agents.json) | CLI/IDE 실행면<br>파일 수정 및 diff 루프<br>테스트/리뷰/sandbox 구조 | 코딩 에이전트 제품 구조와 구현 후보를 비교합니다. |
| [스펙 드리븐/요구사항](../by-topic/spec-driven/README.md) | 42 | 요구사항, ADR, acceptance criteria, executable specs, SDD 도구를 장기 기억과 코드 변경에 연결하는 주제입니다. | [주제 README](../by-topic/spec-driven/README.md)<br>[데이터](../../data/report-categories/spec-driven.json) | 스펙 추출 방식<br>요구사항-설계-테스트 추적성<br>spec memory와 acceptance gate | 스펙 드리븐 개발 체계를 만들 때 필요한 산출물과 연결 규칙을 뽑습니다. |
| [먼저 읽기](../by-topic/start-here/README.md) | 21 | 레포 전체 조사를 처음 읽을 때 흐름을 잡는 입구입니다. 어떤 질문을 먼저 보고 어떤 보고서로 내려갈지 정합니다. | [주제 README](../by-topic/start-here/README.md)<br>[데이터](../../data/report-categories/start-here.json) | 전체 조사 구조<br>핵심 보고서 우선순위<br>깊게 들어갈 다음 링크 | 처음 10분 안에 읽을 순서와 핵심 위치를 결정합니다. |
| [인접 AI 인프라](../by-topic/adjacent-infrastructure/README.md) | 18 | 컨텍스트 엔지니어링, RAG 인프라, 벡터 DB, 로컬 LLM 서빙, 평가/관측성 같은 주변 스택입니다. | [주제 README](../by-topic/adjacent-infrastructure/README.md)<br>[데이터](../../data/report-categories/adjacent-infrastructure.json) | 컨텍스트/메모리 계층<br>서빙과 벡터 인프라<br>eval/observability 연결 | 에이전트 외부 의존 스택과 운영 준비도를 판단합니다. |
| [카테고리별 근거](../by-topic/category-guides/README.md) | 18 | 오픈소스, 연구, 발표, 블로그, 트렌드 자료를 artifact 성격으로 묶은 근거 지도입니다. | [주제 README](../by-topic/category-guides/README.md)<br>[데이터](../../data/report-categories/category-guides.json) | 근거 유형별 분포<br>주제별 원천 자료 위치<br>자료 신뢰도와 활용 범위 | 분석의 근거가 어디에서 왔는지 추적합니다. |
| [발표/컨퍼런스](../by-topic/presentations-conferences/README.md) | 9 | 컨퍼런스, 키노트, 웨비나, 발표 자료에서 산업 신호와 구현 방향을 읽는 주제입니다. | [주제 README](../by-topic/presentations-conferences/README.md)<br>[데이터](../../data/report-categories/presentations-conferences.json) | 빅테크 발표 흐름<br>Amazon/AWS와 기업 도입 신호<br>한국/글로벌 컨퍼런스 차이 | 논문/코드만으로 보이지 않는 산업 채택 방향을 보완합니다. |
| [연구 근거](../by-topic/research-foundations/README.md) | 7 | 논문, 근거자료, 이론 충돌, 연구 종합 보고서를 묶은 학술/공신력 근거 주제입니다. | [주제 README](../by-topic/research-foundations/README.md)<br>[데이터](../../data/report-categories/research-foundations.json) | 핵심 논문과 이론<br>상충되는 관점<br>실무 설계로 옮길 수 있는 원칙 | 주장과 설계 판단의 근거 수준을 보강합니다. |
| [소스 카탈로그/인벤토리](../by-topic/source-catalogs-and-inventories/README.md) | 6 | 조사에 사용한 원천 목록, evidence ledger, clone inventory, source catalog입니다. | [주제 README](../by-topic/source-catalogs-and-inventories/README.md)<br>[데이터](../../data/report-categories/source-catalogs-and-inventories.json) | 전체 자료 목록<br>클론/근거 인벤토리<br>데이터 파일 위치 | 분석 대상과 근거 목록의 누락 여부를 확인합니다. |
| [AI 활용 트렌드](../by-topic/ai-usage-trends/README.md) | 3 | 기업, 빅테크, Amazon/AWS, 한국 컨퍼런스에서 나타나는 최근 AI 활용 트렌드입니다. | [주제 README](../by-topic/ai-usage-trends/README.md)<br>[데이터](../../data/report-categories/ai-usage-trends.json) | agentic enterprise 흐름<br>업무 자동화 적용 지점<br>국내외 도입 방식 차이 | 실제 제품/조직 적용 관점의 우선순위를 뽑습니다. |
| [전체 소스 스캔/코드 검색](../by-topic/full-source-scan/README.md) | 3 | 사용자의 말과 실제 소스 파일, 심볼, 문맥을 연결하는 검색/인덱싱 방식에 대한 주제입니다. | [주제 README](../by-topic/full-source-scan/README.md)<br>[데이터](../../data/report-categories/full-source-scan.json) | 파일 발견과 랭킹 축<br>grep/symbol/AST/embedding의 역할<br>문맥 예산과 증거 연결 방식 | 전체 소스 스캔 시스템을 설계할 때 필요한 탐색 파이프라인을 뽑습니다. |


## 소스 인사이트 카테고리 지도

| 소스 인사이트 카테고리 | 레포 수 | 의미 | 어디에 있음 | 강점 인사이트 | 검증 포인트 | 대표 레포 |
| --- | ---: | --- | --- | --- | --- | --- |
| [에이전트 하네스/MCP](../source-insights/by-category/agent-harness-mcp/README.md) | 514 | MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills를 실제 제품 구조에 넣을 때 기준 카테고리로 본다. | [카테고리 README](../source-insights/by-category/agent-harness-mcp/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | test/eval coverage 90%; MCP/tool 경로 76%; retrieval/memory 경로 84% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [mem0ai/mem0](https://github.com/mem0ai/mem0) |
| [일반 AI 오픈소스](../source-insights/by-category/general-ai-open-source/README.md) | 268 | 넓은 AI 오픈소스 후보를 탐색하되, 특정 설계 패턴은 더 세부 카테고리와 대조해서 읽는다. | [카테고리 README](../source-insights/by-category/general-ai-open-source/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | 트렌드 연결률 98%로 현재성 강함; test/eval coverage 76% | security/policy 경로 16%; CI 경로 40%; 중앙 소스 깊이 60로 직접 확인 필요 | [Aider-AI/aider](https://github.com/Aider-AI/aider) |
| [LLM 위키/RAG/지식베이스](../source-insights/by-category/llm-wiki-rag/README.md) | 172 | 문서/코드 지식을 수집하고 검색하고 기억으로 유지하는 RAG/knowledge architecture 비교에 쓴다. | [카테고리 README](../source-insights/by-category/llm-wiki-rag/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | test/eval coverage 86%; retrieval/memory 경로 83%; CLI 사용면이 강함 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) |
| [AI 인프라/서빙](../source-insights/by-category/ai-infrastructure-serving/README.md) | 75 | 모델 서빙, API, 컨테이너, 배포, runtime adapter를 운영 기준으로 비교할 때 쓴다. | [카테고리 README](../source-insights/by-category/ai-infrastructure-serving/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | 트렌드 연결률 92%로 현재성 강함; test/eval coverage 96%; retrieval/memory 경로 95% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) |
| [개발 생산성/DevTools](../source-insights/by-category/developer-productivity/README.md) | 49 | CLI, SDK, 자동화, CI, code search를 개발자 workflow로 묶는 방식을 비교한다. | [카테고리 README](../source-insights/by-category/developer-productivity/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | 트렌드 연결률 98%로 현재성 강함; test/eval coverage 82%; retrieval/memory 경로 67% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) |
| [평가/관측/품질](../source-insights/by-category/eval-observability/README.md) | 27 | agent/RAG 품질을 운영 중에 측정하고 회귀를 막는 평가/관측성 구조 비교에 쓴다. | [카테고리 README](../source-insights/by-category/eval-observability/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | test/eval coverage 100%; retrieval/memory 경로 74% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [mock-server/mockserver-monorepo](https://github.com/mock-server/mockserver-monorepo) |
| [보안/거버넌스/안전](../source-insights/by-category/security-governance/README.md) | 10 | sandbox, permission, policy, guardrail, secret handling을 agent 실행 안정성 관점에서 본다. | [카테고리 README](../source-insights/by-category/security-governance/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | 트렌드 연결률 90%로 현재성 강함; test/eval coverage 90% | 중앙 소스 깊이 75로 직접 확인 필요 | [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) |
| [코딩 에이전트/IDE](../source-insights/by-category/coding-agent-ide/README.md) | 9 | 코딩 에이전트 제품/IDE 루프를 설계할 때 참고 구현 후보로 본다. | [카테고리 README](../source-insights/by-category/coding-agent-ide/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | 트렌드 연결률 100%로 현재성 강함; test/eval coverage 100%; MCP/tool 경로 67% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [gastownhall/beads](https://github.com/gastownhall/beads) |
| [데이터/벡터 플랫폼](../source-insights/by-category/data-vector-platform/README.md) | 7 | embedding/vector/index/query persistence 구조를 고를 때 쓴다. | [카테고리 README](../source-insights/by-category/data-vector-platform/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | test/eval coverage 100%; retrieval/memory 경로 100%; 배포/컨테이너 경로 71% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [milvus-io/milvus](https://github.com/milvus-io/milvus) |
| [스펙 드리븐/요구사항](../source-insights/by-category/spec-driven/README.md) | 5 | 요구사항, 설계 문서, acceptance/test trace를 장기 기억으로 남기는 방식 비교에 쓴다. | [카테고리 README](../source-insights/by-category/spec-driven/README.md)<br>[상세 비교](../source-insights/comparative-report.md) | agent-runtime 60%, spec-artifacts 60%가 주요 강점 | 트렌드 연결률 0%라 현재성 검증 필요; security/policy 경로 20%; CI 경로 40% | [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) |


## 주제별 상세 해석

### 레포별 딥다이브

핵심 에이전트, 글로벌/한국 트렌딩, LLM wiki, 클론 구조의 레포별 상세 보고서입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 특정 레포 하나를 깊게 볼 때 어떤 요약과 근거가 있는가? |
| 위치 | [주제 README](../by-topic/repository-deep-dives/README.md) / [JSON 데이터](../../data/report-categories/repository-deep-dives.json) |
| 보고서 수 | 2434 |
| 주요 보고서 유형 | source-deep-dive-report (1165), per-repository-report (1130), clone-structure-report (127), overview-report (11), spec-driven-report (1) |
| 주요 폴더 | source-deep-dives (1165), global-trending/repositories (500), korea-trending/repositories (500), clone-structures (127), llm-wiki/repositories (100) |
| 먼저 볼 보고서 | [레포별 인사이트](../repository-insights/README.md)<br>[소스 딥다이브](../source-deep-dives/README.md)<br>[역할군별 레포 인사이트](../repository-insights/by-role/README.md)<br>[주제별 소스 딥다이브](../source-deep-dives/by-topic/README.md)<br>[에이전트 하네스/MCP](../repository-insights/by-role/agent-harness-mcp/README.md) |
| 같이 볼 주제 | [비교/유사도 지도](../by-topic/comparisons/README.md) (1178), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (1166), [글로벌 트렌딩 오픈소스](../by-topic/global-trending-open-source/README.md) (500), [한국 트렌딩 오픈소스](../by-topic/korea-trending-open-source/README.md) (500), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (271) |
| 최종 활용 | 개별 레포를 선택하거나 제외할 판단 근거를 뽑습니다. |

뽑아낼 인사이트:

- 레포별 총평
- 구현 특징과 위험 신호
- 다음에 볼 소스/보고서 링크

### 비교/유사도 지도

레포 간 taxonomy, 기능 비교, 유사도 cluster, 카테고리 차이를 보는 비교 지도입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 비슷해 보이는 프로젝트들은 무엇이 다르고 어느 카테고리에 속하는가? |
| 위치 | [주제 README](../by-topic/comparisons/README.md) / [JSON 데이터](../../data/report-categories/comparisons.json) |
| 보고서 수 | 1195 |
| 주요 보고서 유형 | source-deep-dive-report (1165), source-insight-report (13), overview-report (11), comparison-report (2), llm-wiki-report (2) |
| 주요 폴더 | source-deep-dives (1165), source-insights (13), repository-insights (12), comparisons (2), global-trending/repositories (1) |
| 먼저 볼 보고서 | [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](../comparisons/01-project-taxonomy-and-feature-comparison.md)<br>[유사군별 비교와 관계 지도](../comparisons/02-similarity-clusters.md)<br>[LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](../llm-wiki/01-llm-wiki-100-selection-and-patterns.md)<br>[LLM Wiki 100 Code-Level Pipeline Comparison](../llm-wiki/02-code-level-pipeline-comparison.md)<br>[레포별 인사이트](../repository-insights/README.md) |
| 같이 볼 주제 | [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (1181), [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (1178), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (137), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (54), [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) (41) |
| 최종 활용 | 후보 프로젝트를 비교하고 선택 기준을 세웁니다. |

뽑아낼 인사이트:

- 기능별 비교
- 유사군과 차이점
- 카테고리 간 설계 거리

### 소스 코드 딥다이브

로컬에 클론된 실제 레포에서 entrypoint, runtime, retrieval, spec, eval, security, CI/container 경로를 뽑은 구현 근거입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | README 설명이 아니라 실제 코드에서 어떤 구조가 확인되는가? |
| 위치 | [주제 README](../by-topic/source-code-deep-dives/README.md) / [JSON 데이터](../../data/report-categories/source-code-deep-dives.json) |
| 보고서 수 | 1187 |
| 주요 보고서 유형 | source-deep-dive-report (1165), source-insight-report (13), category-guide (2), llm-wiki-report (2), overview-report (2) |
| 주요 폴더 | source-deep-dives (1165), source-insights (13), categories (2), adjacent-tech (1), comparisons (1) |
| 먼저 볼 보고서 | [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](../comparisons/01-project-taxonomy-and-feature-comparison.md)<br>[LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](../llm-wiki/00-llm-wiki-100-summary.md)<br>[LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](../llm-wiki/01-llm-wiki-100-selection-and-patterns.md)<br>[한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석](../korea-trending/00-korea-open-source-trend-report-2026-06-18.md)<br>[소스 딥다이브](../source-deep-dives/README.md) |
| 같이 볼 주제 | [비교/유사도 지도](../by-topic/comparisons/README.md) (1181), [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (1166), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (137), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (54), [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) (40) |
| 최종 활용 | 레포별로 바로 확인할 코드 근거와 구현 차이를 얻습니다. |

뽑아낼 인사이트:

- 핵심 파일 경로
- 구현 패턴과 feature bucket
- 레포별 위험 신호와 검증 표면

### 글로벌 트렌딩 오픈소스

전세계 AI/agent/RAG/devtool/security/infrastructure 오픈소스 트렌딩 코퍼스입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 글로벌에서 star velocity와 커뮤니티 신호가 강한 프로젝트는 무엇인가? |
| 위치 | [주제 README](../by-topic/global-trending-open-source/README.md) / [JSON 데이터](../../data/report-categories/global-trending-open-source.json) |
| 보고서 수 | 502 |
| 주요 보고서 유형 | per-repository-report (500), category-guide (1), global-trending-report (1) |
| 주요 폴더 | global-trending/repositories (500), categories (1), global-trending (1) |
| 먼저 볼 보고서 | [Global Trending Open Source 500 Analysis](../global-trending/00-global-open-source-trend-report-2026-06-18.md)<br>[글로벌 AI 오픈소스](../categories/global-ai-open-source/README.md)<br>[cocoindex-io/cocoindex-code](../global-trending/repositories/cocoindex-io__cocoindex-code.md)<br>[run-llama/llama_index](../global-trending/repositories/run-llama__llama_index.md)<br>[0xMassi/webclaw](../global-trending/repositories/0xMassi__webclaw.md) |
| 같이 볼 주제 | [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (500), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (82), [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) (26), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (13), [인접 AI 인프라](../by-topic/adjacent-infrastructure/README.md) (3) |
| 최종 활용 | 전세계 트렌드 기준의 후보군과 비교 대상을 뽑습니다. |

뽑아낼 인사이트:

- 글로벌 인기 프로젝트
- 언어/스택/카테고리 분포
- 급상승 구현 패턴

### 한국 트렌딩 오픈소스

한국 개발자 커뮤니티, 한국 AI/MCP/RAG 프로젝트, 국내 기술 블로그와 오픈소스 흐름입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 한국에서 실제 관심을 받고 있는 소스와 구현 주제는 무엇인가? |
| 위치 | [주제 README](../by-topic/korea-trending-open-source/README.md) / [JSON 데이터](../../data/report-categories/korea-trending-open-source.json) |
| 보고서 수 | 502 |
| 주요 보고서 유형 | per-repository-report (500), category-guide (1), korea-trending-report (1) |
| 주요 폴더 | korea-trending/repositories (500), categories (1), korea-trending (1) |
| 먼저 볼 보고서 | [한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석](../korea-trending/00-korea-open-source-trend-report-2026-06-18.md)<br>[한국 AI/오픈소스](../categories/korean-ai-open-source/README.md)<br>[bits-bytes-nn/omnisummary](../korea-trending/repositories/bits-bytes-nn__omnisummary.md)<br>[naver/naver-openapi-guide](../korea-trending/repositories/naver__naver-openapi-guide.md)<br>[toss/yarn-plugin-catalogs](../korea-trending/repositories/toss__yarn-plugin-catalogs.md) |
| 같이 볼 주제 | [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (500), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (46), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (15), [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) (5), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (2) |
| 최종 활용 | 국내 맥락에서 우선 볼 프로젝트와 차별점을 뽑습니다. |

뽑아낼 인사이트:

- 국내 트렌드 레포
- 한국어/국내 도메인 MCP/RAG 흐름
- 기업/커뮤니티별 기술 신호

### LLM 위키/RAG/지식베이스

LLM wiki, RAG, GraphRAG, 문서 지식베이스, ingestion, retrieval, provenance를 묶은 지식 지속성 주제입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 코드와 문서를 어떻게 수집하고 검색하고 출처와 함께 기억할 것인가? |
| 위치 | [주제 README](../by-topic/llm-wiki/README.md) / [JSON 데이터](../../data/report-categories/llm-wiki.json) |
| 보고서 수 | 292 |
| 주요 보고서 유형 | per-repository-report (128), llm-wiki-report (103), source-deep-dive-report (50), clone-structure-report (4), infrastructure-report (4) |
| 주요 폴더 | llm-wiki/code-level-repositories (100), llm-wiki/repositories (100), source-deep-dives (50), korea-trending/repositories (15), global-trending/repositories (13) |
| 먼저 볼 보고서 | [LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](../llm-wiki/00-llm-wiki-100-summary.md)<br>[LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](../llm-wiki/01-llm-wiki-100-selection-and-patterns.md)<br>[LLM Wiki 100 Code-Level Pipeline Comparison](../llm-wiki/02-code-level-pipeline-comparison.md)<br>[컨텍스트 엔지니어링, RAG, vLLM/local LLM, 에이전트 하네스 최신 트렌드 분석](../adjacent-tech/01-context-rag-vllm-local-llm-harness-trends.md)<br>[컨텍스트/RAG/vLLM/local LLM/하네스 50개 레포지토리 상세 분석](../adjacent-tech/02-repository-analysis-50.md) |
| 같이 볼 주제 | [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (183), [비교/유사도 지도](../by-topic/comparisons/README.md) (54), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (54), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (17), [한국 트렌딩 오픈소스](../by-topic/korea-trending-open-source/README.md) (15) |
| 최종 활용 | LLM 지식베이스와 코드 위키를 설계할 때 필요한 파이프라인 차이를 비교합니다. |

뽑아낼 인사이트:

- ingestion/chunking pipeline
- embedding/vector/graph retrieval
- provenance와 knowledge update 방식

### 에이전트 하네스/MCP/오케스트레이션

MCP, tool registry, hooks, skills, workflow orchestration처럼 에이전트 실행을 받치는 하네스 계층입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | LLM이 도구와 워크플로를 안전하게 실행하려면 어떤 하네스가 필요한가? |
| 위치 | [주제 README](../by-topic/agent-harness/README.md) / [JSON 데이터](../../data/report-categories/agent-harness.json) |
| 보고서 수 | 281 |
| 주요 보고서 유형 | source-deep-dive-report (135), per-repository-report (130), clone-structure-report (5), agent-harness-report (2), category-guide (2) |
| 주요 폴더 | source-deep-dives (135), global-trending/repositories (82), korea-trending/repositories (46), clone-structures (5), adjacent-tech (2) |
| 먼저 볼 보고서 | [컨텍스트 엔지니어링, RAG, vLLM/local LLM, 에이전트 하네스 최신 트렌드 분석](../adjacent-tech/01-context-rag-vllm-local-llm-harness-trends.md)<br>[Claude Code / Codex Harness Materials 1000+ Corpus](../agent-harness/00-claude-code-codex-harness-materials-1000.md)<br>[Agent Harness Conference and Presentation Patterns](../presentations/00-agent-harness-conference-presentation-patterns.md)<br>[에이전트 하네스/오케스트레이션](../categories/agent-harness-orchestration/README.md)<br>[MCP/도구/프로토콜](../categories/mcp-tools-protocols/README.md) |
| 같이 볼 주제 | [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (271), [비교/유사도 지도](../by-topic/comparisons/README.md) (137), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (137), [글로벌 트렌딩 오픈소스](../by-topic/global-trending-open-source/README.md) (82), [한국 트렌딩 오픈소스](../by-topic/korea-trending-open-source/README.md) (46) |
| 최종 활용 | 에이전트 런타임과 도구 실행 기반 설계 기준을 얻습니다. |

뽑아낼 인사이트:

- MCP/tool 연결
- hooks/skills/plugin 구조
- workflow orchestration과 권한 경계

### 클론 구조/인벤토리

로컬에 클론한 upstream 소스의 물리 구조, manifest, source directory, entrypoint 목록입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 분석 대상 소스는 실제로 어디에 있고 어떤 구조를 갖는가? |
| 위치 | [주제 README](../by-topic/clone-structure-inventory/README.md) / [JSON 데이터](../../data/report-categories/clone-structure-inventory.json) |
| 보고서 수 | 128 |
| 주요 보고서 유형 | clone-structure-report (127), overview-report (1) |
| 주요 폴더 | clone-structures (127), root (1) |
| 먼저 볼 보고서 | [127개 로컬 클론 구조 분석 총괄](../clone-structure-analysis-127.md)<br>[run-llama/llama_index 구조 분석](../clone-structures/run-llama__llama_index.md)<br>[aaif-goose/goose 구조 분석](../clone-structures/aaif-goose__goose.md)<br>[addyosmani/agent-skills 구조 분석](../clone-structures/addyosmani__agent-skills.md)<br>[agenta-ai/agenta 구조 분석](../clone-structures/agenta-ai__agenta.md) |
| 같이 볼 주제 | [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (127), [스펙 드리븐/요구사항](../by-topic/spec-driven/README.md) (15), [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) (10), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (5), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (4) |
| 최종 활용 | 분석 근거가 되는 원본 소스 트리를 찾습니다. |

뽑아낼 인사이트:

- 로컬 소스 위치
- 레포별 파일 구조
- entrypoint와 주요 디렉터리

### 코딩 에이전트/IDE

Codex, Claude Code, Aider, OpenHands, Cline/Roo류 코딩 에이전트와 IDE 보조 도구를 비교하는 주제입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 코딩 에이전트 제품은 어떤 실행 루프와 코드 수정 표면을 가져야 하는가? |
| 위치 | [주제 README](../by-topic/coding-agents/README.md) / [JSON 데이터](../../data/report-categories/coding-agents.json) |
| 보고서 수 | 124 |
| 주요 보고서 유형 | per-repository-report (64), source-deep-dive-report (39), clone-structure-report (10), llm-wiki-report (3), agent-harness-report (2) |
| 주요 폴더 | source-deep-dives (39), repositories (30), global-trending/repositories (26), clone-structures (10), korea-trending/repositories (5) |
| 먼저 볼 보고서 | [AI 에이전트/하네스/컨텍스트/루프 엔지니어링 근거자료 165선](../research/02-evidence-catalog-100-sources.md)<br>[Claude Code / Codex Harness Materials 1000+ Corpus](../agent-harness/00-claude-code-codex-harness-materials-1000.md)<br>[코딩 에이전트/IDE](../categories/coding-agents-ides/README.md)<br>[코딩 에이전트/IDE](../repository-insights/by-role/coding-agent-ide/README.md)<br>[코딩 에이전트/IDE 소스 딥다이브](../source-deep-dives/by-topic/coding-agent-ide/README.md) |
| 같이 볼 주제 | [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (114), [비교/유사도 지도](../by-topic/comparisons/README.md) (41), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (40), [글로벌 트렌딩 오픈소스](../by-topic/global-trending-open-source/README.md) (26), [클론 구조/인벤토리](../by-topic/clone-structure-inventory/README.md) (10) |
| 최종 활용 | 코딩 에이전트 제품 구조와 구현 후보를 비교합니다. |

뽑아낼 인사이트:

- CLI/IDE 실행면
- 파일 수정 및 diff 루프
- 테스트/리뷰/sandbox 구조

### 스펙 드리븐/요구사항

요구사항, ADR, acceptance criteria, executable specs, SDD 도구를 장기 기억과 코드 변경에 연결하는 주제입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 스펙을 어떻게 뽑고 저장하고 테스트 trace와 연결해야 오래 기억되는가? |
| 위치 | [주제 README](../by-topic/spec-driven/README.md) / [JSON 데이터](../../data/report-categories/spec-driven.json) |
| 보고서 수 | 42 |
| 주요 보고서 유형 | source-deep-dive-report (19), clone-structure-report (15), per-repository-report (3), spec-driven-report (2), category-guide (1) |
| 주요 폴더 | source-deep-dives (19), clone-structures (15), korea-trending/repositories (2), categories (1), global-trending/repositories (1) |
| 먼저 볼 보고서 | [Spec-Driven Development: 스펙 추출과 스펙 메모리 합성 보고서](../spec-driven/00-spec-extraction-and-spec-memory-synthesis.md)<br>[스펙 드리븐/요구사항](../categories/spec-driven-requirements/README.md)<br>[스펙 드리븐/요구사항](../repository-insights/by-role/spec-driven/README.md)<br>[스펙 드리븐/요구사항 소스 딥다이브](../source-deep-dives/by-topic/spec-driven/README.md)<br>[스펙 드리븐/요구사항 소스 인사이트](../source-insights/by-category/spec-driven/README.md) |
| 같이 볼 주제 | [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (38), [비교/유사도 지도](../by-topic/comparisons/README.md) (21), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (20), [클론 구조/인벤토리](../by-topic/clone-structure-inventory/README.md) (15), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (6) |
| 최종 활용 | 스펙 드리븐 개발 체계를 만들 때 필요한 산출물과 연결 규칙을 뽑습니다. |

뽑아낼 인사이트:

- 스펙 추출 방식
- 요구사항-설계-테스트 추적성
- spec memory와 acceptance gate

### 먼저 읽기

레포 전체 조사를 처음 읽을 때 흐름을 잡는 입구입니다. 어떤 질문을 먼저 보고 어떤 보고서로 내려갈지 정합니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 이 레포에서 먼저 무엇을 읽어야 하는가? |
| 위치 | [주제 README](../by-topic/start-here/README.md) / [JSON 데이터](../../data/report-categories/start-here.json) |
| 보고서 수 | 21 |
| 주요 보고서 유형 | overview-report (4), llm-wiki-report (3), research-synthesis (3), comparison-report (2), presentation-report (2) |
| 주요 폴더 | research (3), root (3), comparisons (2), presentations (2), adjacent-tech (1) |
| 먼저 볼 보고서 | [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](../comparisons/01-project-taxonomy-and-feature-comparison.md)<br>[유사군별 비교와 관계 지도](../comparisons/02-similarity-clusters.md)<br>[LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](../llm-wiki/00-llm-wiki-100-summary.md)<br>[LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](../llm-wiki/01-llm-wiki-100-selection-and-patterns.md)<br>[LLM Wiki 100 Code-Level Pipeline Comparison](../llm-wiki/02-code-level-pipeline-comparison.md) |
| 같이 볼 주제 | [비교/유사도 지도](../by-topic/comparisons/README.md) (6), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (6), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (4), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (3), [연구 근거](../by-topic/research-foundations/README.md) (3) |
| 최종 활용 | 처음 10분 안에 읽을 순서와 핵심 위치를 결정합니다. |

뽑아낼 인사이트:

- 전체 조사 구조
- 핵심 보고서 우선순위
- 깊게 들어갈 다음 링크

### 인접 AI 인프라

컨텍스트 엔지니어링, RAG 인프라, 벡터 DB, 로컬 LLM 서빙, 평가/관측성 같은 주변 스택입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 에이전트를 제품화하려면 주변 인프라에서 무엇을 갖춰야 하는가? |
| 위치 | [주제 README](../by-topic/adjacent-infrastructure/README.md) / [JSON 데이터](../../data/report-categories/adjacent-infrastructure.json) |
| 보고서 수 | 18 |
| 주요 보고서 유형 | infrastructure-report (4), source-deep-dive-report (4), category-guide (3), per-repository-report (3), overview-report (2) |
| 주요 폴더 | adjacent-tech (4), source-deep-dives (4), categories (3), global-trending/repositories (3), clone-structures (1) |
| 먼저 볼 보고서 | [컨텍스트 엔지니어링, RAG, vLLM/local LLM, 에이전트 하네스 최신 트렌드 분석](../adjacent-tech/01-context-rag-vllm-local-llm-harness-trends.md)<br>[컨텍스트/RAG/vLLM/local LLM/하네스 50개 레포지토리 상세 분석](../adjacent-tech/02-repository-analysis-50.md)<br>[AI 인프라/서빙](../categories/ai-infrastructure-serving/README.md)<br>[데이터 플랫폼/벡터 DB](../categories/data-platforms-vector-databases/README.md)<br>[평가/관측/품질](../categories/evals-observability-quality/README.md) |
| 같이 볼 주제 | [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (9), [비교/유사도 지도](../by-topic/comparisons/README.md) (6), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (6), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (4), [글로벌 트렌딩 오픈소스](../by-topic/global-trending-open-source/README.md) (3) |
| 최종 활용 | 에이전트 외부 의존 스택과 운영 준비도를 판단합니다. |

뽑아낼 인사이트:

- 컨텍스트/메모리 계층
- 서빙과 벡터 인프라
- eval/observability 연결

### 카테고리별 근거

오픈소스, 연구, 발표, 블로그, 트렌드 자료를 artifact 성격으로 묶은 근거 지도입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 각 근거는 어떤 종류이고 어떤 조사 질문을 뒷받침하는가? |
| 위치 | [주제 README](../by-topic/category-guides/README.md) / [JSON 데이터](../../data/report-categories/category-guides.json) |
| 보고서 수 | 18 |
| 주요 보고서 유형 | category-guide (18) |
| 주요 폴더 | categories (18) |
| 먼저 볼 보고서 | [근거 카테고리 목차](../categories/README.md)<br>[에이전트 하네스/오케스트레이션](../categories/agent-harness-orchestration/README.md)<br>[AI 인프라/서빙](../categories/ai-infrastructure-serving/README.md)<br>[AI 활용 트렌드](../categories/ai-usage-trends/README.md)<br>[코딩 에이전트/IDE](../categories/coding-agents-ides/README.md) |
| 같이 볼 주제 | [인접 AI 인프라](../by-topic/adjacent-infrastructure/README.md) (3), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (2), [에이전트 하네스/MCP/오케스트레이션](../by-topic/agent-harness/README.md) (2), [AI 활용 트렌드](../by-topic/ai-usage-trends/README.md) (1), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (1) |
| 최종 활용 | 분석의 근거가 어디에서 왔는지 추적합니다. |

뽑아낼 인사이트:

- 근거 유형별 분포
- 주제별 원천 자료 위치
- 자료 신뢰도와 활용 범위

### 발표/컨퍼런스

컨퍼런스, 키노트, 웨비나, 발표 자료에서 산업 신호와 구현 방향을 읽는 주제입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 최근 발표들이 AI 활용과 에이전트 설계에서 무엇을 강조하는가? |
| 위치 | [주제 README](../by-topic/presentations-conferences/README.md) / [JSON 데이터](../../data/report-categories/presentations-conferences.json) |
| 보고서 수 | 9 |
| 주요 보고서 유형 | presentation-report (5), category-guide (1), infrastructure-report (1), per-repository-report (1), source-deep-dive-report (1) |
| 주요 폴더 | presentations (5), adjacent-tech (1), categories (1), korea-trending/repositories (1), source-deep-dives (1) |
| 먼저 볼 보고서 | [Agent Harness Conference and Presentation Patterns](../presentations/00-agent-harness-conference-presentation-patterns.md)<br>[AI Usage Trend Conferences: Big Tech, Amazon/AWS, Global and Korea](../presentations/01-ai-usage-trends-bigtech-korea-6-12mo.md)<br>[발표/컨퍼런스](../categories/presentations-conferences/README.md)<br>[AI Usage Trend Conference Source Catalog](../presentations/ai-usage-trend-source-catalog-6-12mo.md)<br>[Conference Source Catalog](../presentations/conference-source-catalog.md) |
| 같이 볼 주제 | [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) (3), [AI 활용 트렌드](../by-topic/ai-usage-trends/README.md) (2), [레포별 딥다이브](../by-topic/repository-deep-dives/README.md) (2), [먼저 읽기](../by-topic/start-here/README.md) (2), [소스 카탈로그/인벤토리](../by-topic/source-catalogs-and-inventories/README.md) (2) |
| 최종 활용 | 논문/코드만으로 보이지 않는 산업 채택 방향을 보완합니다. |

뽑아낼 인사이트:

- 빅테크 발표 흐름
- Amazon/AWS와 기업 도입 신호
- 한국/글로벌 컨퍼런스 차이

### 연구 근거

논문, 근거자료, 이론 충돌, 연구 종합 보고서를 묶은 학술/공신력 근거 주제입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 코드와 트렌드를 설명하는 연구적 근거는 무엇인가? |
| 위치 | [주제 README](../by-topic/research-foundations/README.md) / [JSON 데이터](../../data/report-categories/research-foundations.json) |
| 보고서 수 | 7 |
| 주요 보고서 유형 | research-synthesis (4), category-guide (1), infrastructure-report (1), overview-report (1) |
| 주요 폴더 | research (4), adjacent-tech (1), categories (1), root (1) |
| 먼저 볼 보고서 | [AI 에이전트/하네스/컨텍스트/루프 엔지니어링 근거자료 165선](../research/02-evidence-catalog-100-sources.md)<br>[2026 AI 코딩 에이전트 설계 트렌드 종합 보고서](../research/01-agent-trends-2026.md)<br>[논문/연구 근거](../categories/research-papers/README.md)<br>[Spec-Driven Development Evidence Corpus 500+](../spec-driven-evidence-corpus-500.md)<br>[2026 최신 자료 레이더: 논문, 빅테크 발표, 에이전트/RAG/로컬 LLM 트렌드](../adjacent-tech/04-latest-research-and-industry-radar-2026.md) |
| 같이 볼 주제 | [먼저 읽기](../by-topic/start-here/README.md) (3), [코딩 에이전트/IDE](../by-topic/coding-agents/README.md) (2), [LLM 위키/RAG/지식베이스](../by-topic/llm-wiki/README.md) (1), [발표/컨퍼런스](../by-topic/presentations-conferences/README.md) (1), [소스 카탈로그/인벤토리](../by-topic/source-catalogs-and-inventories/README.md) (1) |
| 최종 활용 | 주장과 설계 판단의 근거 수준을 보강합니다. |

뽑아낼 인사이트:

- 핵심 논문과 이론
- 상충되는 관점
- 실무 설계로 옮길 수 있는 원칙

### 소스 카탈로그/인벤토리

조사에 사용한 원천 목록, evidence ledger, clone inventory, source catalog입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 자료 목록과 출처를 빠짐없이 추적하려면 어디를 봐야 하는가? |
| 위치 | [주제 README](../by-topic/source-catalogs-and-inventories/README.md) / [JSON 데이터](../../data/report-categories/source-catalogs-and-inventories.json) |
| 보고서 수 | 6 |
| 주요 보고서 유형 | overview-report (4), presentation-report (2) |
| 주요 폴더 | root (4), presentations (2) |
| 먼저 볼 보고서 | [Source Inventory](../00-source-inventory.md)<br>[AI Usage Trend Conference Source Catalog](../presentations/ai-usage-trend-source-catalog-6-12mo.md)<br>[Conference Source Catalog](../presentations/conference-source-catalog.md)<br>[Source Inventory](../adjacent-tech-source-inventory.md)<br>[Current Clone Inventory: 107 Open Source Repositories](../current-clone-inventory-107.md) |
| 같이 볼 주제 | [발표/컨퍼런스](../by-topic/presentations-conferences/README.md) (2), [AI 활용 트렌드](../by-topic/ai-usage-trends/README.md) (1), [먼저 읽기](../by-topic/start-here/README.md) (1), [스펙 드리븐/요구사항](../by-topic/spec-driven/README.md) (1), [연구 근거](../by-topic/research-foundations/README.md) (1) |
| 최종 활용 | 분석 대상과 근거 목록의 누락 여부를 확인합니다. |

뽑아낼 인사이트:

- 전체 자료 목록
- 클론/근거 인벤토리
- 데이터 파일 위치

### AI 활용 트렌드

기업, 빅테크, Amazon/AWS, 한국 컨퍼런스에서 나타나는 최근 AI 활용 트렌드입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 최근 6~12개월 AI 활용은 어떤 업무와 아키텍처로 이동하고 있는가? |
| 위치 | [주제 README](../by-topic/ai-usage-trends/README.md) / [JSON 데이터](../../data/report-categories/ai-usage-trends.json) |
| 보고서 수 | 3 |
| 주요 보고서 유형 | presentation-report (2), category-guide (1) |
| 주요 폴더 | presentations (2), categories (1) |
| 먼저 볼 보고서 | [AI Usage Trend Conferences: Big Tech, Amazon/AWS, Global and Korea](../presentations/01-ai-usage-trends-bigtech-korea-6-12mo.md)<br>[AI 활용 트렌드](../categories/ai-usage-trends/README.md)<br>[AI Usage Trend Conference Source Catalog](../presentations/ai-usage-trend-source-catalog-6-12mo.md) |
| 같이 볼 주제 | [발표/컨퍼런스](../by-topic/presentations-conferences/README.md) (2), [먼저 읽기](../by-topic/start-here/README.md) (1), [소스 카탈로그/인벤토리](../by-topic/source-catalogs-and-inventories/README.md) (1), [카테고리별 근거](../by-topic/category-guides/README.md) (1) |
| 최종 활용 | 실제 제품/조직 적용 관점의 우선순위를 뽑습니다. |

뽑아낼 인사이트:

- agentic enterprise 흐름
- 업무 자동화 적용 지점
- 국내외 도입 방식 차이

### 전체 소스 스캔/코드 검색

사용자의 말과 실제 소스 파일, 심볼, 문맥을 연결하는 검색/인덱싱 방식에 대한 주제입니다.

| 항목 | 내용 |
| --- | --- |
| 이 주제가 답하는 질문 | 코딩 에이전트는 어떤 파일을 찾아 읽고, 왜 그 파일이 답이라고 판단하는가? |
| 위치 | [주제 README](../by-topic/full-source-scan/README.md) / [JSON 데이터](../../data/report-categories/full-source-scan.json) |
| 보고서 수 | 3 |
| 주요 보고서 유형 | overview-report (2), source-scan-report (1) |
| 주요 폴더 | root (2), full-source-scan (1) |
| 먼저 볼 보고서 | [Source Inventory](../00-source-inventory.md)<br>[Full Source Scan Deep Dive: 필요한 파일을 찾고 읽는 구현 로직](../full-source-scan/02-file-discovery-reading-implementation-deep-dive.md)<br>[전체 소스 스캔과 사용자 의도-코드 연결 방식 리서치 요약](../full-source-scan-research-summary-2026-06-18.md) |
| 같이 볼 주제 | [먼저 읽기](../by-topic/start-here/README.md) (2), [소스 카탈로그/인벤토리](../by-topic/source-catalogs-and-inventories/README.md) (1), [소스 코드 딥다이브](../by-topic/source-code-deep-dives/README.md) (1) |
| 최종 활용 | 전체 소스 스캔 시스템을 설계할 때 필요한 탐색 파이프라인을 뽑습니다. |

뽑아낼 인사이트:

- 파일 발견과 랭킹 축
- grep/symbol/AST/embedding의 역할
- 문맥 예산과 증거 연결 방식


## 소스 인사이트 카테고리별 상세 해석

### 에이전트 하네스/MCP

MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills를 실제 제품 구조에 넣을 때 기준 카테고리로 본다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/agent-harness-mcp/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 514 |
| 트렌드 연결 | 427 |
| 글로벌 / 한국 | 340 / 110 |
| 강점 | test/eval coverage 90%; MCP/tool 경로 76%; retrieval/memory 경로 84% |
| 약점/검증 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | agent-runtime 94%, tests-evals 91%, retrieval-memory 84%, mcp/protocol 80%, security-policy 79% |
| 대표 bucket | docs 100%, config 92%, eval 90%, agentRuntime 89%, retrieval 84% |
| 결론 | MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills를 실제 제품 구조에 넣을 때 기준 카테고리로 본다. 먼저 mem0ai/mem0를 구조 기준점으로 보고, 현재성은 mem0ai/mem0와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [mem0ai/mem0](https://github.com/mem0ai/mem0) | 616 | 250 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/f/mem0ai__mem0.md) / [보고서](../global-trending/repositories/mem0ai__mem0.md) |
| 2 | [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 600 | 238 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/a/langchain-ai__langchain.md) / [보고서](../global-trending/repositories/langchain-ai__langchain.md) |
| 3 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 598 | 249 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/b/deepset-ai__haystack.md) / [보고서](../global-trending/repositories/deepset-ai__haystack.md) |
| 4 | [langgenius/dify](https://github.com/langgenius/dify) | 595 | 230 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/6/langgenius__dify.md) / [보고서](../global-trending/repositories/langgenius__dify.md) |
| 5 | [run-llama/llama_index](https://github.com/run-llama/llama_index) | 584 | 230 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/4/run-llama__llama_index.md) / [보고서](../global-trending/repositories/run-llama__llama_index.md) |
| 6 | [mudler/LocalAI](https://github.com/mudler/LocalAI) | 575 | 222 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/5/mudler__LocalAI.md) / [보고서](../global-trending/repositories/mudler__LocalAI.md) |
| 7 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | 568 | 210 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/9/anomalyco__opencode.md) / [보고서](../global-trending/repositories/anomalyco__opencode.md) |
| 8 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 567 | 215 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/2/ruvnet__ruflo.md) / [보고서](../global-trending/repositories/ruvnet__ruflo.md) |

### 일반 AI 오픈소스

넓은 AI 오픈소스 후보를 탐색하되, 특정 설계 패턴은 더 세부 카테고리와 대조해서 읽는다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/general-ai-open-source/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 268 |
| 트렌드 연결 | 263 |
| 글로벌 / 한국 | 9 / 254 |
| 강점 | 트렌드 연결률 98%로 현재성 강함; test/eval coverage 76% |
| 약점/검증 | security/policy 경로 16%; CI 경로 40%; 중앙 소스 깊이 60로 직접 확인 필요 |
| 대표 feature | tests-evals 78%, retrieval-memory 59%, spec-artifacts 46%, agent-runtime 34%, cli-first 34% |
| 대표 bucket | docs 99%, eval 76%, config 63%, retrieval 59%, spec 46% |
| 결론 | 넓은 AI 오픈소스 후보를 탐색하되, 특정 설계 패턴은 더 세부 카테고리와 대조해서 읽는다. 먼저 Aider-AI/aider를 구조 기준점으로 보고, 현재성은 Aider-AI/aider와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [Aider-AI/aider](https://github.com/Aider-AI/aider) | 493 | 175 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 배포 구조 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/2/Aider-AI__aider.md) / [보고서](../global-trending/repositories/Aider-AI__aider.md) |
| 2 | [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) | 487 | 161 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/3/chatwoot__chatwoot.md) / [보고서](../global-trending/repositories/chatwoot__chatwoot.md) |
| 3 | [toss/es-toolkit](https://github.com/toss/es-toolkit) | 471 | 168 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/1/toss__es-toolkit.md) / [보고서](../korea-trending/repositories/toss__es-toolkit.md) |
| 4 | [asklokesh/loki-mode](https://github.com/asklokesh/loki-mode) | 430 | 140 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/6/asklokesh__loki-mode.md) / [보고서](../global-trending/repositories/asklokesh__loki-mode.md) |
| 5 | [line/centraldogma](https://github.com/line/centraldogma) | 423 | 161 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/c/line__centraldogma.md) / [보고서](../korea-trending/repositories/line__centraldogma.md) |
| 6 | [adbar/trafilatura](https://github.com/adbar/trafilatura) | 410 | 149 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/4/adbar__trafilatura.md) / [보고서](../global-trending/repositories/adbar__trafilatura.md) |
| 7 | [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 409 | 175 | retrieval/memory 구조, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 대표 feature 일치: agent-runtime, retrieval-memory, tests-evals | [소스 딥다이브](../source-deep-dives/repositories/2/NirDiamant__RAG_Techniques.md) / [보고서](../global-trending/repositories/NirDiamant__RAG_Techniques.md) |
| 8 | [naver/billboard.js](https://github.com/naver/billboard.js) | 394 | 122 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/3/naver__billboard.js.md) / [보고서](../korea-trending/repositories/naver__billboard.js.md) |

### LLM 위키/RAG/지식베이스

문서/코드 지식을 수집하고 검색하고 기억으로 유지하는 RAG/knowledge architecture 비교에 쓴다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/llm-wiki-rag/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 172 |
| 트렌드 연결 | 122 |
| 글로벌 / 한국 | 56 / 69 |
| 강점 | test/eval coverage 86%; retrieval/memory 경로 83%; CLI 사용면이 강함 |
| 약점/검증 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | tests-evals 86%, retrieval-memory 83%, spec-artifacts 75%, agent-runtime 69%, cli-first 62% |
| 대표 bucket | docs 100%, eval 86%, retrieval 83%, config 83%, spec 75% |
| 결론 | 문서/코드 지식을 수집하고 검색하고 기억으로 유지하는 RAG/knowledge architecture 비교에 쓴다. 먼저 MervinPraison/PraisonAI를 구조 기준점으로 보고, 현재성은 MervinPraison/PraisonAI와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) | 535 | 203 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/7/MervinPraison__PraisonAI.md) / [보고서](../global-trending/repositories/MervinPraison__PraisonAI.md) |
| 2 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 528 | 195 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/c/volcengine__OpenViking.md) / [보고서](../global-trending/repositories/volcengine__OpenViking.md) |
| 3 | [gptme/gptme](https://github.com/gptme/gptme) | 518 | 195 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/6/gptme__gptme.md) / [보고서](../global-trending/repositories/gptme__gptme.md) |
| 4 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 514 | 175 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/e/thedotmack__claude-mem.md) / [보고서](../global-trending/repositories/thedotmack__claude-mem.md) |
| 5 | [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | 512 | 190 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/2/plastic-labs__honcho.md) / [보고서](../global-trending/repositories/plastic-labs__honcho.md) |
| 6 | [CaviraOSS/OpenMemory](https://github.com/CaviraOSS/OpenMemory) | 511 | 196 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/3/CaviraOSS__OpenMemory.md) / [보고서](../global-trending/repositories/CaviraOSS__OpenMemory.md) |
| 7 | [pingcap/tidb](https://github.com/pingcap/tidb) | 511 | 180 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/5/pingcap__tidb.md) / [보고서](../global-trending/repositories/pingcap__tidb.md) |
| 8 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | 495 | 170 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/5/topoteretes__cognee.md) / [보고서](../global-trending/repositories/topoteretes__cognee.md) |

### AI 인프라/서빙

모델 서빙, API, 컨테이너, 배포, runtime adapter를 운영 기준으로 비교할 때 쓴다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/ai-infrastructure-serving/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 75 |
| 트렌드 연결 | 69 |
| 글로벌 / 한국 | 59 / 12 |
| 강점 | 트렌드 연결률 92%로 현재성 강함; test/eval coverage 96%; retrieval/memory 경로 95% |
| 약점/검증 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | tests-evals 96%, retrieval-memory 95%, agent-runtime 91%, spec-artifacts 79%, cli-first 76% |
| 대표 bucket | docs 100%, eval 96%, retrieval 95%, agentRuntime 91%, config 91% |
| 결론 | 모델 서빙, API, 컨테이너, 배포, runtime adapter를 운영 기준으로 비교할 때 쓴다. 먼저 Mintplex-Labs/anything-llm를 구조 기준점으로 보고, 현재성은 Mintplex-Labs/anything-llm와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 588 | 242 | MCP/tool 연결 방식, retrieval/memory 구조, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/1/Mintplex-Labs__anything-llm.md) / [보고서](../global-trending/repositories/Mintplex-Labs__anything-llm.md) |
| 2 | [open-webui/open-webui](https://github.com/open-webui/open-webui) | 547 | 199 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/a/open-webui__open-webui.md) / [보고서](../global-trending/repositories/open-webui__open-webui.md) |
| 3 | [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) | 502 | 176 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/d/MODSetter__SurfSense.md) / [보고서](../global-trending/repositories/MODSetter__SurfSense.md) |
| 4 | [stacklok/toolhive](https://github.com/stacklok/toolhive) | 497 | 184 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/8/stacklok__toolhive.md) / [보고서](../global-trending/repositories/stacklok__toolhive.md) |
| 5 | [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) | 489 | 176 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/f/pipeshub-ai__pipeshub-ai.md) / [보고서](../global-trending/repositories/pipeshub-ai__pipeshub-ai.md) |
| 6 | [raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) | 478 | 177 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/2/raullenchai__Rapid-MLX.md) / [보고서](../global-trending/repositories/raullenchai__Rapid-MLX.md) |
| 7 | [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | 474 | 162 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/a/LearningCircuit__local-deep-research.md) / [보고서](../global-trending/repositories/LearningCircuit__local-deep-research.md) |
| 8 | [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 469 | 161 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/5/StarTrail-org__LEANN.md) / [보고서](../global-trending/repositories/StarTrail-org__LEANN.md) |

### 개발 생산성/DevTools

CLI, SDK, 자동화, CI, code search를 개발자 workflow로 묶는 방식을 비교한다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/developer-productivity/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 49 |
| 트렌드 연결 | 48 |
| 글로벌 / 한국 | 17 / 31 |
| 강점 | 트렌드 연결률 98%로 현재성 강함; test/eval coverage 82%; retrieval/memory 경로 67% |
| 약점/검증 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | tests-evals 84%, retrieval-memory 67%, security-policy 67%, agent-runtime 63%, cli-first 53% |
| 대표 bucket | docs 100%, eval 82%, ci 71%, config 67%, retrieval 67% |
| 결론 | CLI, SDK, 자동화, CI, code search를 개발자 workflow로 묶는 방식을 비교한다. 먼저 nilbuild/developer-roadmap를 구조 기준점으로 보고, 현재성은 modelcontextprotocol/csharp-sdk와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | 484 | 151 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) / [보고서](../global-trending/repositories/nilbuild__developer-roadmap.md) |
| 2 | [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 481 | 166 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/2/modelcontextprotocol__python-sdk.md) / [보고서](../global-trending/repositories/modelcontextprotocol__python-sdk.md) |
| 3 | [awslabs/mcp](https://github.com/awslabs/mcp) | 481 | 164 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/a/awslabs__mcp.md) / [보고서](../global-trending/repositories/awslabs__mcp.md) |
| 4 | [zed-industries/zed](https://github.com/zed-industries/zed) | 480 | 151 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/5/zed-industries__zed.md) / [보고서](../global-trending/repositories/zed-industries__zed.md) |
| 5 | [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) | 477 | 164 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/8/modelcontextprotocol__typescript-sdk.md) / [보고서](../global-trending/repositories/modelcontextprotocol__typescript-sdk.md) |
| 6 | [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | 472 | 183 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) / [보고서](../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) |
| 7 | [modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk) | 449 | 157 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/1/modelcontextprotocol__go-sdk.md) / [보고서](../global-trending/repositories/modelcontextprotocol__go-sdk.md) |
| 8 | [av/harbor](https://github.com/av/harbor) | 444 | 144 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/1/av__harbor.md) / [보고서](../global-trending/repositories/av__harbor.md) |

### 평가/관측/품질

agent/RAG 품질을 운영 중에 측정하고 회귀를 막는 평가/관측성 구조 비교에 쓴다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/eval-observability/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 27 |
| 트렌드 연결 | 20 |
| 글로벌 / 한국 | 6 / 14 |
| 강점 | test/eval coverage 100%; retrieval/memory 경로 74% |
| 약점/검증 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | tests-evals 100%, retrieval-memory 74%, spec-artifacts 74%, agent-runtime 70%, security-policy 63% |
| 대표 bucket | docs 100%, eval 100%, config 89%, retrieval 74%, spec 74% |
| 결론 | agent/RAG 품질을 운영 중에 측정하고 회귀를 막는 평가/관측성 구조 비교에 쓴다. 먼저 mock-server/mockserver-monorepo를 구조 기준점으로 보고, 현재성은 mock-server/mockserver-monorepo와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [mock-server/mockserver-monorepo](https://github.com/mock-server/mockserver-monorepo) | 470 | 160 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/4/mock-server__mockserver-monorepo.md) / [보고서](../global-trending/repositories/mock-server__mockserver-monorepo.md) |
| 2 | [MCPJam/inspector](https://github.com/MCPJam/inspector) | 448 | 149 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/8/MCPJam__inspector.md) / [보고서](../global-trending/repositories/MCPJam__inspector.md) |
| 3 | [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) | 423 | 140 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/7/getsentry__sentry-mcp.md) / [보고서](../global-trending/repositories/getsentry__sentry-mcp.md) |
| 4 | [responsibleai/ASSERT](https://github.com/responsibleai/ASSERT) | 406 | 135 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/d/responsibleai__ASSERT.md) / [보고서](../global-trending/repositories/responsibleai__ASSERT.md) |
| 5 | [hexo-ai/sia](https://github.com/hexo-ai/sia) | 399 | 145 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | [소스 딥다이브](../source-deep-dives/repositories/a/hexo-ai__sia.md) / [보고서](../global-trending/repositories/hexo-ai__sia.md) |
| 6 | [line/promgen](https://github.com/line/promgen) | 375 | 120 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/3/line__promgen.md) / [보고서](../korea-trending/repositories/line__promgen.md) |
| 7 | [microsoft/RAMPART](https://github.com/microsoft/RAMPART) | 374 | 139 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts; 확인 필요: entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/9/microsoft__RAMPART.md) / [보고서](../global-trending/repositories/microsoft__RAMPART.md) |
| 8 | [toss/frontend-fundamentals](https://github.com/toss/frontend-fundamentals) | 370 | 107 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/0/toss__frontend-fundamentals.md) / [보고서](../korea-trending/repositories/toss__frontend-fundamentals.md) |

### 보안/거버넌스/안전

sandbox, permission, policy, guardrail, secret handling을 agent 실행 안정성 관점에서 본다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/security-governance/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 10 |
| 트렌드 연결 | 9 |
| 글로벌 / 한국 | 1 / 8 |
| 강점 | 트렌드 연결률 90%로 현재성 강함; test/eval coverage 90% |
| 약점/검증 | 중앙 소스 깊이 75로 직접 확인 필요 |
| 대표 feature | tests-evals 100%, agent-runtime 60%, retrieval-memory 60%, spec-artifacts 60%, security-policy 50% |
| 대표 bucket | docs 100%, eval 90%, ci 80%, config 80%, agentRuntime 60% |
| 결론 | sandbox, permission, policy, guardrail, secret handling을 agent 실행 안정성 관점에서 본다. 먼저 perplexityai/bumblebee를 구조 기준점으로 보고, 현재성은 perplexityai/bumblebee와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) | 417 | 177 | MCP/tool 연결 방식, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 대표 feature 일치: agent-runtime, tests-evals | [소스 딥다이브](../source-deep-dives/repositories/8/perplexityai__bumblebee.md) / [보고서](../global-trending/repositories/perplexityai__bumblebee.md) |
| 2 | [Samsung/CredSweeper](https://github.com/Samsung/CredSweeper) | 336 | 104 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/2/Samsung__CredSweeper.md) / [보고서](../korea-trending/repositories/Samsung__CredSweeper.md) |
| 3 | [toss/use-funnel](https://github.com/toss/use-funnel) | 317 | 103 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/6/toss__use-funnel.md) / [보고서](../korea-trending/repositories/toss__use-funnel.md) |
| 4 | [line/line-fido2-server](https://github.com/line/line-fido2-server) | 293 | 105 | retrieval/memory 구조, 검증 표면, 보안/정책 표면, 배포 구조 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: retrieval-memory, tests-evals; 확인 필요: entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/d/line__line-fido2-server.md) / [보고서](../korea-trending/repositories/line__line-fido2-server.md) |
| 5 | [daangn/graplix](https://github.com/daangn/graplix) | 281 | 84 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/7/daangn__graplix.md) / [보고서](../korea-trending/repositories/daangn__graplix.md) |
| 6 | [line/garr](https://github.com/line/garr) | 212 | 80 | 검증 표면 | 확인 필요: entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/9/line__garr.md) / [보고서](../korea-trending/repositories/line__garr.md) |
| 7 | [naver/disco](https://github.com/naver/disco) | 205 | 72 | spec/요구사항 산출물, 검증 표면 | 대표 feature 일치: agent-runtime, spec-artifacts, tests-evals; 확인 필요: entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/f/naver__disco.md) / [보고서](../korea-trending/repositories/naver__disco.md) |
| 8 | [line/seed](https://github.com/line/seed) | 205 | 70 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 대표 feature 일치: retrieval-memory, spec-artifacts, tests-evals; 확인 필요: 15000개 파일에서 스캔이 잘림, entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/2/line__seed.md) / [보고서](../korea-trending/repositories/line__seed.md) |

### 코딩 에이전트/IDE

코딩 에이전트 제품/IDE 루프를 설계할 때 참고 구현 후보로 본다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/coding-agent-ide/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 9 |
| 트렌드 연결 | 9 |
| 글로벌 / 한국 | 9 / 0 |
| 강점 | 트렌드 연결률 100%로 현재성 강함; test/eval coverage 100%; MCP/tool 경로 67% |
| 약점/검증 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | agent-runtime 100%, cli-first 100%, tests-evals 100%, retrieval-memory 89%, security-policy 89% |
| 대표 bucket | agentRuntime 100%, docs 100%, entrypoints 100%, eval 100%, ci 89% |
| 결론 | 코딩 에이전트 제품/IDE 루프를 설계할 때 참고 구현 후보로 본다. 먼저 gastownhall/beads를 구조 기준점으로 보고, 현재성은 gastownhall/beads와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [gastownhall/beads](https://github.com/gastownhall/beads) | 497 | 175 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/2/gastownhall__beads.md) / [보고서](../global-trending/repositories/gastownhall__beads.md) |
| 2 | [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 468 | 153 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/d/manaflow-ai__cmux.md) / [보고서](../global-trending/repositories/manaflow-ai__cmux.md) |
| 3 | [stablyai/orca](https://github.com/stablyai/orca) | 463 | 157 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/a/stablyai__orca.md) / [보고서](../global-trending/repositories/stablyai__orca.md) |
| 4 | [boshu2/agentops](https://github.com/boshu2/agentops) | 442 | 154 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/3/boshu2__agentops.md) / [보고서](../global-trending/repositories/boshu2__agentops.md) |
| 5 | [open-mercato/open-mercato](https://github.com/open-mercato/open-mercato) | 438 | 144 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: cli-first, agent-runtime, retrieval-memory | [소스 딥다이브](../source-deep-dives/repositories/f/open-mercato__open-mercato.md) / [보고서](../global-trending/repositories/open-mercato__open-mercato.md) |
| 6 | [liaohch3/claude-tap](https://github.com/liaohch3/claude-tap) | 416 | 139 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 핵심 파일 참조 충분; 대표 feature 일치: cli-first, agent-runtime, retrieval-memory | [소스 딥다이브](../source-deep-dives/repositories/2/liaohch3__claude-tap.md) / [보고서](../global-trending/repositories/liaohch3__claude-tap.md) |
| 7 | [kelos-dev/kelos](https://github.com/kelos-dev/kelos) | 414 | 152 | MCP/tool 연결 방식, 검증 표면, 보안/정책 표면, 배포 구조 | 핵심 파일 참조 충분; 대표 feature 일치: cli-first, agent-runtime, tests-evals | [소스 딥다이브](../source-deep-dives/repositories/8/kelos-dev__kelos.md) / [보고서](../global-trending/repositories/kelos-dev__kelos.md) |
| 8 | [fujibee/agmsg](https://github.com/fujibee/agmsg) | 398 | 161 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 트렌드 점수 우위; 대표 feature 일치: cli-first, agent-runtime, retrieval-memory | [소스 딥다이브](../source-deep-dives/repositories/a/fujibee__agmsg.md) / [보고서](../global-trending/repositories/fujibee__agmsg.md) |

### 데이터/벡터 플랫폼

embedding/vector/index/query persistence 구조를 고를 때 쓴다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/data-vector-platform/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 7 |
| 트렌드 연결 | 5 |
| 글로벌 / 한국 | 3 / 2 |
| 강점 | test/eval coverage 100%; retrieval/memory 경로 100%; 배포/컨테이너 경로 71% |
| 약점/검증 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | retrieval-memory 100%, tests-evals 100%, cli-first 86%, spec-artifacts 86%, agent-runtime 71% |
| 대표 bucket | config 100%, docs 100%, eval 100%, retrieval 100%, ci 86% |
| 결론 | embedding/vector/index/query persistence 구조를 고를 때 쓴다. 먼저 milvus-io/milvus를 구조 기준점으로 보고, 현재성은 milvus-io/milvus와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [milvus-io/milvus](https://github.com/milvus-io/milvus) | 552 | 209 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/6/milvus-io__milvus.md) / [보고서](../global-trending/repositories/milvus-io__milvus.md) |
| 2 | [qdrant/qdrant](https://github.com/qdrant/qdrant) | 520 | 193 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/1/qdrant__qdrant.md) / [보고서](../global-trending/repositories/qdrant__qdrant.md) |
| 3 | [Ontos-AI/knowhere](https://github.com/Ontos-AI/knowhere) | 454 | 155 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/0/Ontos-AI__knowhere.md) / [보고서](../global-trending/repositories/Ontos-AI__knowhere.md) |
| 4 | [kakao/actionbase](https://github.com/kakao/actionbase) | 350 | 101 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | [소스 딥다이브](../source-deep-dives/repositories/c/kakao__actionbase.md) / [보고서](../korea-trending/repositories/kakao__actionbase.md) |
| 5 | [Samsung/CAS](https://github.com/Samsung/CAS) | 288 | 73 | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 핵심 파일 참조 충분; 대표 feature 일치: cli-first, retrieval-memory, spec-artifacts; 확인 필요: CI 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/a/Samsung__CAS.md) / [보고서](../korea-trending/repositories/Samsung__CAS.md) |
| 6 | [timescale/pgvectorscale](https://github.com/timescale/pgvectorscale) | 120 | 0 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 핵심 파일 참조 충분; 대표 feature 일치: cli-first, retrieval-memory, spec-artifacts | [소스 딥다이브](../source-deep-dives/repositories/1/timescale__pgvectorscale.md) / [보고서](../clone-structures/timescale__pgvectorscale.md) |
| 7 | [pgvector/pgvector](https://github.com/pgvector/pgvector) | 97 | 0 | retrieval/memory 구조, 검증 표면, 배포 구조 | 대표 feature 일치: retrieval-memory, tests-evals; 확인 필요: entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/e/pgvector__pgvector.md) / [보고서](../clone-structures/pgvector__pgvector.md) |

### 스펙 드리븐/요구사항

요구사항, 설계 문서, acceptance/test trace를 장기 기억으로 남기는 방식 비교에 쓴다.

| 항목 | 내용 |
| --- | --- |
| 위치 | [카테고리 README](../source-insights/by-category/spec-driven/README.md) / [상세 비교 리포트](../source-insights/comparative-report.md) |
| 레포 수 | 5 |
| 트렌드 연결 | 0 |
| 글로벌 / 한국 | 0 / 0 |
| 강점 | agent-runtime 60%, spec-artifacts 60%가 주요 강점 |
| 약점/검증 | 트렌드 연결률 0%라 현재성 검증 필요; security/policy 경로 20%; CI 경로 40% |
| 대표 feature | agent-runtime 60%, spec-artifacts 60%, tests-evals 60%, retrieval-memory 40%, agent-instructions 20% |
| 대표 bucket | docs 100%, agentRuntime 60%, eval 60%, spec 60%, ci 40% |
| 결론 | 요구사항, 설계 문서, acceptance/test trace를 장기 기억으로 남기는 방식 비교에 쓴다. 먼저 https-deeplearning-ai/sc-spec-driven-development-files를 구조 기준점으로 보고, 현재성은 https-deeplearning-ai/sc-spec-driven-development-files와 대조한다. |

대표 레포:

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 176 | 0 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | [소스 딥다이브](../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [보고서](../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) |
| 2 | [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 152 | 0 | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | [소스 딥다이브](../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) / [보고서](../clone-structures/tesslio__spec-driven-development-tile.md) |
| 3 | [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 140 | 0 | spec/요구사항 산출물, 검증 표면, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: agent-runtime, spec-artifacts, tests-evals | [소스 딥다이브](../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) / [보고서](../clone-structures/FredAntB__Spec-Driven-Development.md) |
| 4 | [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 43 | 0 | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | 확인 필요: entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [보고서](../clone-structures/Engineering4AI__awesome-spec-driven-development.md) |
| 5 | [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 28 | 0 | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | 확인 필요: entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음 | [소스 딥다이브](../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) / [보고서](../clone-structures/mreferre__ralph-loop-kiro-specs.md) |
