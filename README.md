# AI 코딩 에이전트/오픈소스 분석 보고서

이 레포는 AI 코딩 에이전트, 전체 소스 스캔, spec-driven development, LLM wiki/RAG, 한국/글로벌 오픈소스 트렌드, 발표/컨퍼런스, 연구 근거를 한곳에 모은 조사 저장소입니다.

로컬에 클론한 upstream 소스는 `sources/` 아래에 있고 git에는 넣지 않습니다. 대신 분석 보고서, 카테고리 README, 표/CSV, JSON 인덱스만 커밋해서 GitHub나 로컬 checkout에서 바로 읽을 수 있게 구성했습니다. GitHub Pages와 Vercel용 배포 구조는 제거했고, 레포 자체를 보고서처럼 읽는 방식으로 정리했습니다.

## 요약

- 시작점은 [reports/README.md](reports/README.md)입니다. 여기서 전체 보고서 지도, 주제별 목차, 폴더별 README 지도를 한 번에 볼 수 있습니다.
- 각 주제의 의미, 위치, 뽑아낼 인사이트를 한 문서에서 보려면 [reports/insight-map/README.md](reports/insight-map/README.md)를 먼저 보면 됩니다.
- 카테고리별 트렌드와 레포 특징 비교는 [reports/source-insights/README.md](reports/source-insights/README.md)가 가장 빠릅니다.
- 실제 소스 파일 경로 근거는 [reports/source-deep-dives/README.md](reports/source-deep-dives/README.md)와 [reports/source-deep-dives/repositories/README.md](reports/source-deep-dives/repositories/README.md)에 모았습니다.
- 오픈소스, 논문, 발표, 참고자료를 artifact 기준으로 보고 싶으면 [reports/categories/README.md](reports/categories/README.md)에서 시작하면 됩니다.
- 표로 빠르게 찾거나 스프레드시트로 비교하려면 [reports/tables/README.md](reports/tables/README.md)를 보면 됩니다.

## 총평

이 레포는 “깊은 폴더를 직접 뒤지는 구조”가 아니라 “README를 따라가며 요약, 총평, 표, 원문 링크로 내려가는 구조”로 읽는 것이 맞습니다. 먼저 이 루트 README에서 큰 카테고리를 잡고, [전체 보고서 읽기 지도](reports/README.md)에서 조사 흐름을 고른 뒤, 필요한 경우 [소스 딥다이브](reports/source-deep-dives/README.md)나 [레포별 인사이트](reports/repository-insights/README.md)로 내려가면 됩니다.

## 한눈에 보는 핵심 입구

| 바로가기 | 한눈에 볼 것 | 추천 상황 |
| --- | --- | --- |
| [전체 보고서 읽기 지도](reports/README.md) | 모든 보고서, 주제, 폴더 README 지도 | 처음 들어와서 전체 구조를 잡을 때 |
| [전체 인사이트 지도](reports/insight-map/README.md) | 각 주제의 의미, 위치, 뽑아낼 인사이트 | 이 문서 하나로 전체 주제와 다음 행동을 알고 싶을 때 |
| [주제별 보고서 목차](reports/by-topic/README.md) | 조사 질문별 보고서 묶음 | “스펙”, “LLM wiki”, “한국 트렌드”처럼 주제가 먼저일 때 |
| [근거 카테고리 목차](reports/categories/README.md) | 오픈소스, 논문, 발표, 참고자료 분류 | 조사 근거와 대상 artifact를 먼저 확인할 때 |
| [소스 트렌드 인사이트](reports/source-insights/README.md) | 카테고리별 트렌드, 대표 레포, 위험 신호 | 현재 트렌드와 비교 포인트를 빠르게 볼 때 |
| [상세 비교 리포트](reports/source-insights/comparative-report.md) | 카테고리 간 차이, 대표 레포 판단표, 읽는 결론 | “무엇이 어떻게 다른지”를 바로 보고 싶을 때 |
| [카테고리별 소스 인사이트](reports/source-insights/by-category/README.md) | 카테고리별 레포 특징 비교 | agent/MCP/RAG/spec/eval 같은 유형별 비교가 필요할 때 |
| [레포별 인사이트](reports/repository-insights/README.md) | 레포별 총평, 근거 수준, 위험 신호 | 특정 레포를 읽기 전에 판단 기준이 필요할 때 |
| [소스 딥다이브](reports/source-deep-dives/README.md) | 실제 파일 경로 기반 구현 근거 | README 설명이 아니라 코드 근거가 필요할 때 |
| [레포별 소스 딥다이브](reports/source-deep-dives/repositories/README.md) | 클론 레포별 독립 소스 분석 | 특정 레포 하나를 깊게 볼 때 |
| [표/CSV 목차](reports/tables/README.md) | CSV, matrix, 전체 보고서 표 | 많은 항목을 빠르게 필터링하거나 비교할 때 |

## 카테고리별 현재 인사이트

| 카테고리 | 현재 해석 | 먼저 볼 README |
| --- | --- | --- |
| 에이전트 하네스/MCP | 가장 큰 구현 덩어리입니다. tool registry, MCP, workflow, hooks/skills, agent runtime 경로가 핵심 비교 축입니다. | [에이전트 하네스/MCP](reports/source-insights/by-category/agent-harness-mcp/README.md) |
| 일반 AI 오픈소스 | 범위가 넓어 star 순위보다 source pattern, test/eval, deployment, dependency stack을 같이 봐야 합니다. | [일반 AI 오픈소스](reports/source-insights/by-category/general-ai-open-source/README.md) |
| LLM 위키/RAG/지식베이스 | ingestion, chunking, embedding, retrieval, memory, vector store가 실제 소스에 분리되어 있는지가 중요합니다. | [LLM 위키/RAG/지식베이스](reports/source-insights/by-category/llm-wiki-rag/README.md) |
| AI 인프라/서빙 | model serving, API server, Docker/Kubernetes, runtime adapter, deployment 경로가 성숙도 판단 기준입니다. | [AI 인프라/서빙](reports/source-insights/by-category/ai-infrastructure-serving/README.md) |
| 개발 생산성/DevTools | CLI, SDK, GitHub Actions, automation, code search, workflow accelerator를 실제 사용면 기준으로 비교해야 합니다. | [개발 생산성/DevTools](reports/source-insights/by-category/developer-productivity/README.md) |
| 평가/관측/품질 | benchmark harness, tracing, quality gate, monitoring, test surface가 구현 신뢰도를 가릅니다. | [평가/관측/품질](reports/source-insights/by-category/eval-observability/README.md) |
| 보안/거버넌스/안전 | sandbox, permission, policy, guardrail, secret handling이 agent 실행 안정성의 핵심입니다. | [보안/거버넌스/안전](reports/source-insights/by-category/security-governance/README.md) |
| 코딩 에이전트/IDE | CLI/IDE 실행면, 코드 수정 루프, sandbox, instruction file, test/eval surface를 함께 봐야 합니다. | [코딩 에이전트/IDE](reports/source-insights/by-category/coding-agent-ide/README.md) |
| 데이터/벡터 플랫폼 | storage, index, embedding/vector path, query engine, persistence 구조가 재사용성을 좌우합니다. | [데이터/벡터 플랫폼](reports/source-insights/by-category/data-vector-platform/README.md) |
| 스펙 드리븐/요구사항 | requirements, ADR, design docs, acceptance/test trace가 실제 코드와 연결되는지가 핵심입니다. | [스펙 드리븐/요구사항](reports/source-insights/by-category/spec-driven/README.md) |

## 추천 읽기 순서

1. [전체 인사이트 지도](reports/insight-map/README.md)에서 각 주제의 의미, 위치, 뽑아낼 인사이트를 먼저 잡습니다.
2. [전체 보고서 읽기 지도](reports/README.md)에서 전체 조사 구조를 봅니다.
3. [소스 트렌드 인사이트](reports/source-insights/README.md)에서 카테고리별 현재 트렌드와 레포 특징을 훑습니다.
4. [상세 비교 리포트](reports/source-insights/comparative-report.md)에서 카테고리 간 차이와 대표 레포 판단표를 봅니다.
5. [근거 카테고리 목차](reports/categories/README.md)에서 오픈소스, 논문, 발표, 참고자료가 어떻게 묶였는지 확인합니다.
6. 구현 근거가 필요한 카테고리는 [소스 딥다이브](reports/source-deep-dives/README.md)에서 실제 파일 경로를 확인합니다.
7. 특정 레포를 깊게 볼 때는 [레포별 소스 딥다이브](reports/source-deep-dives/repositories/README.md)에서 해당 레포 문서로 들어갑니다.
8. 많은 항목을 비교해야 할 때는 [표/CSV 목차](reports/tables/README.md)와 `data/report-tables/`를 사용합니다.

## 주요 보고서 묶음

| 묶음 | 내용 |
| --- | --- |
| [AI 코딩 에이전트 핵심 레포](reports/repositories/README.md) | Codex, Claude Code 계열, Aider, OpenHands, Cline/Roo, Gemini CLI 등 핵심 레포 분석 |
| [전체 소스 스캔](reports/by-topic/full-source-scan/README.md) | 사용자 말과 소스를 연결하는 검색/인덱싱/코드 읽기 방식 |
| [스펙 드리븐/요구사항](reports/by-topic/spec-driven/README.md) | spec extraction, requirements, traceability, acceptance criteria, SDD 근거 |
| [LLM 위키/RAG](reports/by-topic/llm-wiki/README.md) | wiki, RAG, GraphRAG, 지식베이스, 문서 파이프라인, provenance |
| [한국 트렌딩 오픈소스](reports/by-topic/korea-trending-open-source/README.md) | 한국 개발자 커뮤니티와 한국 AI/RAG/MCP 트렌드 |
| [글로벌 트렌딩 오픈소스](reports/by-topic/global-trending-open-source/README.md) | 전세계 AI/agent/RAG/devtool/security/infrastructure 오픈소스 트렌드 |
| [발표/컨퍼런스](reports/by-topic/presentations-conferences/README.md) | Amazon/AWS, 빅테크, 한국 행사, AI 활용 트렌드 발표 자료 |
| [연구 근거](reports/by-topic/research-foundations/README.md) | 논문, 근거 카탈로그, 충돌 이론, 연구 종합 |

## 주요 데이터 파일

| 데이터 | 내용 |
| --- | --- |
| [data/report-index.json](data/report-index.json) | 모든 Markdown 보고서의 전체 색인 |
| [data/category-index.json](data/category-index.json) | 오픈소스, 논문, 발표, 참고자료의 통합 카테고리 색인 |
| [data/repository-insights.json](data/repository-insights.json) | 레포별 인사이트, 위험 신호, 역할군, 근거 수준 |
| [data/source-deep-scan.json](data/source-deep-scan.json) | 로컬 클론 소스 경로 기반 심층 스캔 결과 |
| [data/source-trend-insights.json](data/source-trend-insights.json) | 카테고리별 소스 트렌드와 레포별 특징 비교 |
| [data/report-tables/](data/report-tables/) | 보고서, 카테고리, 소스 스캔, 레포 비교 CSV |

## 재생성 명령

| 명령 | 용도 |
| --- | --- |
| `npm run build:categories` | artifact 카테고리 README와 JSON 재생성 |
| `npm run build:repo-insights` | 레포별 인사이트와 역할군 README 재생성 |
| `npm run build:source-deep-dives` | 소스 경로 기반 딥다이브 README/Markdown 재생성 |
| `npm run build:source-insights` | 카테고리별 소스 트렌드 인사이트 재생성 |
| `npm run build:report-index` | 전체 보고서/주제/폴더/표 README 재생성 |
| `npm run build:indexes` | 위 인덱스 전체 재생성 |

## 운영 메모

- `sources/`의 upstream 클론은 분석용 로컬 자료이며 커밋하지 않습니다.
- 보고서와 인덱스는 한국어 우선으로 읽히도록 유지합니다.
- 새 보고서나 데이터가 추가되면 `npm run build:indexes`로 README와 표를 다시 맞춥니다.
