# 주제별 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

## 요약

- 조사 단위: 소스 심층 스캔 row를 역할/주제별 README로 나눈 목차입니다.
- 포함 범위: 1,136개 레포, 10개 주제 그룹입니다.
- 탐색 방식: 주제 README로 들어가면 해당 주제의 파일 경로 근거, deep source insight, risk를 한 표에서 볼 수 있습니다.

## 총평

주제별 딥다이브는 레포 이름보다 “무엇을 알고 싶은가”를 기준으로 읽을 때 효과적입니다. 예를 들어 MCP 구현만 보려면 에이전트 하네스/MCP, RAG 파이프라인만 보려면 LLM 위키/RAG, 테스트와 관측성만 보려면 평가/관측/품질에서 시작하면 됩니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../repositories/README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 주제

| 주제 README | 레포 수 | 한국어 라벨 | 소스 초점 |
| --- | ---: | --- | --- |
| [에이전트 하네스/MCP](agent-harness-mcp/README.md) | 514 | 에이전트 하네스/MCP | MCP 서버/클라이언트, 도구 등록부, workflow/orchestration, hooks/skills |
| [일반 AI 오픈소스](general-ai-open-source/README.md) | 268 | 일반 AI 오픈소스 | 주요 구조, 의존성 스택, 테스트, 배포, 문서 |
| [LLM 위키/RAG/지식베이스](llm-wiki-rag/README.md) | 172 | LLM 위키/RAG/지식베이스 | 수집, chunking, embedding, retrieval, memory, vector store |
| [AI 인프라/서빙](ai-infrastructure-serving/README.md) | 75 | AI 인프라/서빙 | 모델 서빙, API server, 배포, Docker/Kubernetes, runtime adapter |
| [개발 생산성/DevTools](developer-productivity/README.md) | 49 | 개발 생산성/DevTools | CLI/devtool entrypoint, SDK 형태, CI/build script, automation |
| [평가/관측/품질](eval-observability/README.md) | 27 | 평가/관측/품질 | 평가 suite, benchmark harness, tracing, observability, quality gate |
| [보안/거버넌스/안전](security-governance/README.md) | 10 | 보안/거버넌스/안전 | sandbox, permission, policy, auth, guardrail, secret handling |
| [코딩 에이전트/IDE](coding-agent-ide/README.md) | 9 | 코딩 에이전트/IDE | CLI/IDE 엔트리포인트, 에이전트 런타임, 도구 실행, 에이전트 지시문 |
| [데이터/벡터 플랫폼](data-vector-platform/README.md) | 7 | 데이터/벡터 플랫폼 | 저장소, index, embedding/vector 경로, query engine, persistence |
| [스펙 드리븐/요구사항](spec-driven/README.md) | 5 | 스펙 드리븐/요구사항 | 요구사항, ADR, 설계 문서, 스펙 산출물, acceptance/test trace |
