# 카테고리별 소스 인사이트

생성 시각: 2026-06-18T15:43:43.893Z

## 요약

- 조사 단위: source trend insight를 카테고리별 README로 나눈 인덱스입니다.
- 포함 범위: 10개 카테고리, 1,136개 레포입니다.
- 탐색 방식: 각 카테고리 README에서 trend signal, source feature, 대표 레포, 위험 신호를 같이 봅니다.

## 총평

카테고리별 페이지는 같은 유형의 레포를 서로 비교하기 위한 입구입니다. 전체 순위는 source-insights 메인 README가 빠르고, 특정 주제의 설계 패턴과 대표 레포를 고를 때는 이 인덱스에서 내려가는 편이 좋습니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [소스 딥다이브](../../source-deep-dives/README.md) | 소스 경로 근거와 레포별 딥다이브. |
| [레포별 소스 딥다이브](../../source-deep-dives/repositories/README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [레포별 인사이트](../../repository-insights/README.md) | 레포별 총평과 역할군 페이지. |
| [소스 트렌드 인사이트](../README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [상세 비교 리포트](../comparative-report.md) | 카테고리 간 차이와 대표 레포 판단표. |
| [카테고리별 소스 인사이트](README.md) | 카테고리 기준의 소스 인사이트 페이지. |
| [표/CSV 목차](../../tables/README.md) | CSV와 표 중심 탐색. |


## 카테고리 의사결정 비교

| 카테고리 | 읽는 목적 | 강점 | 약점/검증 포인트 | 대표 레포 | 판단 |
| --- | --- | --- | --- | --- | --- |
| [에이전트 하네스/MCP](agent-harness-mcp/README.md) | MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills를 실제 제품 구조에 넣을 때 기준 카테고리로 본다. | test/eval coverage 90%; MCP/tool 경로 76%; retrieval/memory 경로 84% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [mem0ai/mem0](https://github.com/mem0ai/mem0) | MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills를 실제 제품 구조에 넣을 때 기준 카테고리로 본다. 먼저 mem0ai/mem0를 구조 기준점으로 보고, 현재성은 mem0ai/mem0와 대조한다. |
| [일반 AI 오픈소스](general-ai-open-source/README.md) | 넓은 AI 오픈소스 후보를 탐색하되, 특정 설계 패턴은 더 세부 카테고리와 대조해서 읽는다. | 트렌드 연결률 98%로 현재성 강함; test/eval coverage 76% | security/policy 경로 16%; CI 경로 40%; 중앙 소스 깊이 60로 직접 확인 필요 | [Aider-AI/aider](https://github.com/Aider-AI/aider) | 넓은 AI 오픈소스 후보를 탐색하되, 특정 설계 패턴은 더 세부 카테고리와 대조해서 읽는다. 먼저 Aider-AI/aider를 구조 기준점으로 보고, 현재성은 Aider-AI/aider와 대조한다. |
| [LLM 위키/RAG/지식베이스](llm-wiki-rag/README.md) | 문서/코드 지식을 수집하고 검색하고 기억으로 유지하는 RAG/knowledge architecture 비교에 쓴다. | test/eval coverage 86%; retrieval/memory 경로 83%; CLI 사용면이 강함 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) | 문서/코드 지식을 수집하고 검색하고 기억으로 유지하는 RAG/knowledge architecture 비교에 쓴다. 먼저 MervinPraison/PraisonAI를 구조 기준점으로 보고, 현재성은 MervinPraison/PraisonAI와 대조한다. |
| [AI 인프라/서빙](ai-infrastructure-serving/README.md) | 모델 서빙, API, 컨테이너, 배포, runtime adapter를 운영 기준으로 비교할 때 쓴다. | 트렌드 연결률 92%로 현재성 강함; test/eval coverage 96%; retrieval/memory 경로 95% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 모델 서빙, API, 컨테이너, 배포, runtime adapter를 운영 기준으로 비교할 때 쓴다. 먼저 Mintplex-Labs/anything-llm를 구조 기준점으로 보고, 현재성은 Mintplex-Labs/anything-llm와 대조한다. |
| [개발 생산성/DevTools](developer-productivity/README.md) | CLI, SDK, 자동화, CI, code search를 개발자 workflow로 묶는 방식을 비교한다. | 트렌드 연결률 98%로 현재성 강함; test/eval coverage 82%; retrieval/memory 경로 67% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | CLI, SDK, 자동화, CI, code search를 개발자 workflow로 묶는 방식을 비교한다. 먼저 nilbuild/developer-roadmap를 구조 기준점으로 보고, 현재성은 modelcontextprotocol/csharp-sdk와 대조한다. |
| [평가/관측/품질](eval-observability/README.md) | agent/RAG 품질을 운영 중에 측정하고 회귀를 막는 평가/관측성 구조 비교에 쓴다. | test/eval coverage 100%; retrieval/memory 경로 74% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [mock-server/mockserver-monorepo](https://github.com/mock-server/mockserver-monorepo) | agent/RAG 품질을 운영 중에 측정하고 회귀를 막는 평가/관측성 구조 비교에 쓴다. 먼저 mock-server/mockserver-monorepo를 구조 기준점으로 보고, 현재성은 mock-server/mockserver-monorepo와 대조한다. |
| [보안/거버넌스/안전](security-governance/README.md) | sandbox, permission, policy, guardrail, secret handling을 agent 실행 안정성 관점에서 본다. | 트렌드 연결률 90%로 현재성 강함; test/eval coverage 90% | 중앙 소스 깊이 75로 직접 확인 필요 | [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) | sandbox, permission, policy, guardrail, secret handling을 agent 실행 안정성 관점에서 본다. 먼저 perplexityai/bumblebee를 구조 기준점으로 보고, 현재성은 perplexityai/bumblebee와 대조한다. |
| [코딩 에이전트/IDE](coding-agent-ide/README.md) | 코딩 에이전트 제품/IDE 루프를 설계할 때 참고 구현 후보로 본다. | 트렌드 연결률 100%로 현재성 강함; test/eval coverage 100%; MCP/tool 경로 67% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [gastownhall/beads](https://github.com/gastownhall/beads) | 코딩 에이전트 제품/IDE 루프를 설계할 때 참고 구현 후보로 본다. 먼저 gastownhall/beads를 구조 기준점으로 보고, 현재성은 gastownhall/beads와 대조한다. |
| [데이터/벡터 플랫폼](data-vector-platform/README.md) | embedding/vector/index/query persistence 구조를 고를 때 쓴다. | test/eval coverage 100%; retrieval/memory 경로 100%; 배포/컨테이너 경로 71% | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 | [milvus-io/milvus](https://github.com/milvus-io/milvus) | embedding/vector/index/query persistence 구조를 고를 때 쓴다. 먼저 milvus-io/milvus를 구조 기준점으로 보고, 현재성은 milvus-io/milvus와 대조한다. |
| [스펙 드리븐/요구사항](spec-driven/README.md) | 요구사항, 설계 문서, acceptance/test trace를 장기 기억으로 남기는 방식 비교에 쓴다. | agent-runtime 60%, spec-artifacts 60%가 주요 강점 | 트렌드 연결률 0%라 현재성 검증 필요; security/policy 경로 20%; CI 경로 40% | [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 요구사항, 설계 문서, acceptance/test trace를 장기 기억으로 남기는 방식 비교에 쓴다. 먼저 https-deeplearning-ai/sc-spec-driven-development-files를 구조 기준점으로 보고, 현재성은 https-deeplearning-ai/sc-spec-driven-development-files와 대조한다. |


## 카테고리

| 카테고리 | 레포 수 | 트렌드 연결 | 글로벌 / 한국 | 핵심 참조 | 주요 feature | 첫 인사이트 |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| [에이전트 하네스/MCP](agent-harness-mcp/README.md) | 514 | 427 | 340 / 110 | 5524 | agent-runtime (482), tests-evals (467), retrieval-memory (434), mcp/protocol (412) | 에이전트 하네스/MCP 카테고리는 514개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 83%입니다. |
| [일반 AI 오픈소스](general-ai-open-source/README.md) | 268 | 263 | 9 / 254 | 1996 | tests-evals (208), retrieval-memory (158), spec-artifacts (124), agent-runtime (91) | 일반 AI 오픈소스 카테고리는 268개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다. |
| [LLM 위키/RAG/지식베이스](llm-wiki-rag/README.md) | 172 | 122 | 56 / 69 | 1784 | tests-evals (148), retrieval-memory (143), spec-artifacts (129), agent-runtime (118) | LLM 위키/RAG/지식베이스 카테고리는 172개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다. |
| [AI 인프라/서빙](ai-infrastructure-serving/README.md) | 75 | 69 | 59 / 12 | 774 | tests-evals (72), retrieval-memory (71), agent-runtime (68), spec-artifacts (59) | AI 인프라/서빙 카테고리는 75개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 92%입니다. |
| [개발 생산성/DevTools](developer-productivity/README.md) | 49 | 48 | 17 / 31 | 446 | tests-evals (41), retrieval-memory (33), security-policy (33), agent-runtime (31) | 개발 생산성/DevTools 카테고리는 49개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다. |
| [평가/관측/품질](eval-observability/README.md) | 27 | 20 | 6 / 14 | 255 | tests-evals (27), retrieval-memory (20), spec-artifacts (20), agent-runtime (19) | 평가/관측/품질 카테고리는 27개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 74%입니다. |
| [보안/거버넌스/안전](security-governance/README.md) | 10 | 9 | 1 / 8 | 68 | tests-evals (10), agent-runtime (6), retrieval-memory (6), spec-artifacts (6) | 보안/거버넌스/안전 카테고리는 10개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 90%입니다. |
| [코딩 에이전트/IDE](coding-agent-ide/README.md) | 9 | 9 | 9 / 0 | 106 | agent-runtime (9), cli-first (9), tests-evals (9), retrieval-memory (8) | 코딩 에이전트/IDE 카테고리는 9개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 100%입니다. |
| [데이터/벡터 플랫폼](data-vector-platform/README.md) | 7 | 5 | 3 / 2 | 81 | retrieval-memory (7), tests-evals (7), cli-first (6), spec-artifacts (6) | 데이터/벡터 플랫폼 카테고리는 7개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다. |
| [스펙 드리븐/요구사항](spec-driven/README.md) | 5 | 0 | 0 / 0 | 38 | agent-runtime (3), spec-artifacts (3), tests-evals (3), retrieval-memory (2) | 스펙 드리븐/요구사항 카테고리는 5개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 0%입니다. |
