# Report Tables

Generated: 2026-06-18T14:32:17.400Z

This page is the table-first view of the repository. Use it when you want to scan the full investigation structure before opening individual reports.

## 요약

- 조사 단위: 보고서, 주제, 폴더, 보고서 유형을 표와 CSV로 정리한 탐색 허브입니다.
- 포함 범위: 1,417 reports, 17 topics, 16 folder README guides입니다.
- 데이터 파일: topic/folder/type matrix/all reports CSV를 제공하므로 GitHub 화면과 스프레드시트 양쪽에서 탐색할 수 있습니다.

## 총평

이 README는 읽기보다는 비교와 찾기에 최적화된 입구입니다. 빠른 구조 파악은 Topic Summary Table과 Folder Summary Table을 먼저 보고, 특정 보고서 찾기는 `data/report-tables/reports.csv`를 쓰는 방식이 가장 효율적입니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../README.md) | Main report navigation, start-here path, topics, and folder map. |
| [Reports by Topic](../by-topic/README.md) | Topic-first navigation across all Markdown reports. |
| [Repository Insights](../repository-insights/README.md) | Repository-by-repository insights, risks, and next-read links. |
| [Artifact Categories](../categories/README.md) | Artifact-level categories across repositories, papers, presentations, and references. |

## Data Files

| File | Contents |
| --- | --- |
| [data/report-index.json](../../data/report-index.json) | Complete JSON index for all reports. |
| [data/report-tables/topics.csv](../../data/report-tables/topics.csv) | Topic summary table. |
| [data/report-tables/folders.csv](../../data/report-tables/folders.csv) | Folder summary table. |
| [data/report-tables/topic-kind-matrix.csv](../../data/report-tables/topic-kind-matrix.csv) | Topic x report-type matrix. |
| [data/report-tables/reports.csv](../../data/report-tables/reports.csv) | Flat table for every indexed report. |
| [data/report-tables/repository-insights.csv](../../data/report-tables/repository-insights.csv) | Repository-by-repository insights, risks, evidence, and next-read links. |

## Topic Summary Table

| Topic | Reports | Description | Data |
| --- | ---: | --- | --- |
| [Repository Deep Dives](../by-topic/repository-deep-dives/README.md) | 1269 | Detailed per-repository reports across core agents, global trending, Korea trending, LLM wiki, and clone structures. | [json](../../data/report-categories/repository-deep-dives.json) |
| [Global Trending Open Source](../by-topic/global-trending-open-source/README.md) | 502 | Global trending open-source corpus and per-repository reports. | [json](../../data/report-categories/global-trending-open-source.json) |
| [Korea Trending Open Source](../by-topic/korea-trending-open-source/README.md) | 502 | Korean open-source corpus, Korean AI/MCP/RAG projects, and Korean trend reports. | [json](../../data/report-categories/korea-trending-open-source.json) |
| [LLM Wiki, RAG, and Knowledge Bases](../by-topic/llm-wiki/README.md) | 241 | LLM wiki, GraphRAG, document knowledge base, ingestion, retrieval, and provenance reports. | [json](../../data/report-categories/llm-wiki.json) |
| [Agent Harness, MCP, and Orchestration](../by-topic/agent-harness/README.md) | 145 | Agent harness materials, MCP tooling, orchestration, hooks, skills, and workflow infrastructure. | [json](../../data/report-categories/agent-harness.json) |
| [Clone Structure and Inventory](../by-topic/clone-structure-inventory/README.md) | 128 | Clone inventories, structural analysis, manifests, source directories, and per-repository structure reports. | [json](../../data/report-categories/clone-structure-inventory.json) |
| [Coding Agents and IDEs](../by-topic/coding-agents/README.md) | 85 | Core coding-agent repositories, terminal agents, IDE agents, and code-review agents. | [json](../../data/report-categories/coding-agents.json) |
| [Spec-Driven and Requirements](../by-topic/spec-driven/README.md) | 22 | Spec extraction, requirements, traceability, acceptance criteria, and SDD evidence. | [json](../../data/report-categories/spec-driven.json) |
| [Start Here](../by-topic/start-here/README.md) | 20 | High-level maps and entry points for reading the repository. | [json](../../data/report-categories/start-here.json) |
| [Category Guides](../by-topic/category-guides/README.md) | 18 | Generated category pages that group open-source, research, presentation, and trend artifacts. | [json](../../data/report-categories/category-guides.json) |
| [Comparisons and Similarity Maps](../by-topic/comparisons/README.md) | 17 | Cross-repository comparisons, taxonomy matrices, and similarity clusters. | [json](../../data/report-categories/comparisons.json) |
| [Adjacent AI Infrastructure](../by-topic/adjacent-infrastructure/README.md) | 14 | Context engineering, RAG infrastructure, vector databases, local LLM serving, evals, and observability. | [json](../../data/report-categories/adjacent-infrastructure.json) |
| [Presentations and Conferences](../by-topic/presentations-conferences/README.md) | 8 | Conference, talk, webinar, and presentation-method research. | [json](../../data/report-categories/presentations-conferences.json) |
| [Research Foundations](../by-topic/research-foundations/README.md) | 6 | Evidence catalogs, conflicting theories, source catalogs, and research synthesis. | [json](../../data/report-categories/research-foundations.json) |
| [Source Catalogs and Inventories](../by-topic/source-catalogs-and-inventories/README.md) | 6 | Source catalogs, inventory files, clone lists, and evidence ledgers used by the investigations. | [json](../../data/report-categories/source-catalogs-and-inventories.json) |
| [AI Usage Trends](../by-topic/ai-usage-trends/README.md) | 3 | Recent AI usage trends from big-tech, Amazon/AWS, Korean conferences, and enterprise adoption signals. | [json](../../data/report-categories/ai-usage-trends.json) |
| [Full Source Scan and Code Retrieval](../by-topic/full-source-scan/README.md) | 3 | How coding agents discover, index, search, and read source code. | [json](../../data/report-categories/full-source-scan.json) |

## Folder Summary Table

| Folder README | Reports | Role | Main related topics |
| --- | ---: | --- | --- |
| [global-trending](../global-trending/README.md) | 501 | Worldwide open source trend corpus. | Global Trending Open Source (501), Repository Deep Dives (500), Agent Harness, MCP, and Orchestration (82), Coding Agents and IDEs (26) |
| [korea-trending](../korea-trending/README.md) | 501 | Korean open source trend corpus. | Korea Trending Open Source (501), Repository Deep Dives (500), Agent Harness, MCP, and Orchestration (46), LLM Wiki, RAG, and Knowledge Bases (15) |
| [global-trending/repositories](../global-trending/repositories/README.md) | 500 | Repository-by-repository global trend drilldown. | Global Trending Open Source (500), Repository Deep Dives (500), Agent Harness, MCP, and Orchestration (82), Coding Agents and IDEs (26) |
| [korea-trending/repositories](../korea-trending/repositories/README.md) | 500 | Repository-by-repository Korea trend drilldown. | Korea Trending Open Source (500), Repository Deep Dives (500), Agent Harness, MCP, and Orchestration (46), LLM Wiki, RAG, and Knowledge Bases (15) |
| [llm-wiki](../llm-wiki/README.md) | 203 | Knowledge-base and retrieval project analysis. | LLM Wiki, RAG, and Knowledge Bases (203), Repository Deep Dives (100), Coding Agents and IDEs (6), Agent Harness, MCP, and Orchestration (4) |
| [clone-structures](../clone-structures/README.md) | 127 | Physical source tree analysis for cloned open source projects. | Clone Structure and Inventory (127), Repository Deep Dives (127), Spec-Driven and Requirements (15), Coding Agents and IDEs (10) |
| [llm-wiki/code-level-repositories](../llm-wiki/code-level-repositories/README.md) | 100 | Detailed code-path drilldown for LLM wiki projects. | LLM Wiki, RAG, and Knowledge Bases (100), Coding Agents and IDEs (3), Agent Harness, MCP, and Orchestration (2) |
| [llm-wiki/repositories](../llm-wiki/repositories/README.md) | 100 | Repository summaries for the LLM wiki corpus. | LLM Wiki, RAG, and Knowledge Bases (100), Repository Deep Dives (100), Coding Agents and IDEs (3), Agent Harness, MCP, and Orchestration (2) |
| [repositories](../repositories/README.md) | 30 | Core 30-project analysis. | Coding Agents and IDEs (30), Repository Deep Dives (30) |
| [presentations](../presentations/README.md) | 5 | Talk, presentation, and industry signal catalog. | Presentations and Conferences (5), AI Usage Trends (2), Source Catalogs and Inventories (2), Start Here (2) |
| [adjacent-tech](../adjacent-tech/README.md) | 4 | Adjacent stack synthesis and source maps. | Adjacent AI Infrastructure (4), LLM Wiki, RAG, and Knowledge Bases (4), Agent Harness, MCP, and Orchestration (2), Presentations and Conferences (1) |
| [research](../research/README.md) | 4 | Paper, evidence, and theory synthesis. | Research Foundations (4), Start Here (3), Coding Agents and IDEs (1) |
| [agent-harness](../agent-harness/README.md) | 2 | Agent execution and harness research. | Agent Harness, MCP, and Orchestration (2), Coding Agents and IDEs (2), Start Here (1) |
| [comparisons](../comparisons/README.md) | 2 | Project-to-project comparison and relationship maps. | Comparisons and Similarity Maps (2), Start Here (2) |
| [full-source-scan](../full-source-scan/README.md) | 1 | Source discovery and code retrieval mechanics. | Full Source Scan and Code Retrieval (1) |
| [spec-driven](../spec-driven/README.md) | 1 | Spec-driven development and requirements analysis. | Spec-Driven and Requirements (1), Start Here (1) |

## Topic x Report-Type Matrix

| Topic | Reports | agent-harness-report | category-guide | clone-structure-report | comparison-report | global-trending-report | infrastructure-report | korea-trending-report | llm-wiki-report | overview-report | per-repository-report | presentation-report | research-synthesis | source-scan-report | spec-driven-report |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Repository Deep Dives | 1269 | 0 | 0 | 127 | 0 | 0 | 0 | 0 | 0 | 11 | 1130 | 0 | 0 | 0 | 1 |
| Global Trending Open Source | 502 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 500 | 0 | 0 | 0 | 0 |
| Korea Trending Open Source | 502 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 500 | 0 | 0 | 0 | 0 |
| LLM Wiki, RAG, and Knowledge Bases | 241 | 0 | 1 | 4 | 0 | 0 | 4 | 0 | 103 | 1 | 128 | 0 | 0 | 0 | 0 |
| Agent Harness, MCP, and Orchestration | 145 | 2 | 2 | 5 | 0 | 0 | 2 | 0 | 2 | 1 | 130 | 1 | 0 | 0 | 0 |
| Clone Structure and Inventory | 128 | 0 | 0 | 127 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| Coding Agents and IDEs | 85 | 2 | 2 | 10 | 0 | 0 | 0 | 0 | 3 | 2 | 64 | 1 | 1 | 0 | 0 |
| Spec-Driven and Requirements | 22 | 0 | 1 | 15 | 0 | 0 | 0 | 0 | 0 | 1 | 3 | 0 | 0 | 0 | 2 |
| Start Here | 20 | 1 | 1 | 0 | 2 | 1 | 1 | 1 | 3 | 4 | 0 | 2 | 3 | 0 | 1 |
| Category Guides | 18 | 0 | 18 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Comparisons and Similarity Maps | 17 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 2 | 11 | 1 | 0 | 0 | 0 | 1 |
| Adjacent AI Infrastructure | 14 | 0 | 4 | 1 | 0 | 0 | 4 | 0 | 0 | 2 | 3 | 0 | 0 | 0 | 0 |
| Presentations and Conferences | 8 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 5 | 0 | 0 | 0 |
| Research Foundations | 6 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 4 | 0 | 0 |
| Source Catalogs and Inventories | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 2 | 0 | 0 | 0 |
| AI Usage Trends | 3 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| Full Source Scan and Code Retrieval | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 1 | 0 |


## First 80 Reports by Reading Priority

| Report | Type | Folder | Topics |
| --- | --- | --- | --- |
| [Category Index](../categories/README.md) | category-guide | categories | Start Here, Category Guides |
| [30개 오픈소스 AI 코딩/에이전트 프로젝트 비교 분류 보고서](../comparisons/01-project-taxonomy-and-feature-comparison.md) | comparison-report | comparisons | Start Here, Comparisons and Similarity Maps |
| [유사군별 비교와 관계 지도](../comparisons/02-similarity-clusters.md) | comparison-report | comparisons | Start Here, Comparisons and Similarity Maps |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄](../llm-wiki/00-llm-wiki-100-summary.md) | llm-wiki-report | llm-wiki/00-llm-wiki-100-summary.md | Start Here, LLM Wiki, RAG, and Knowledge Bases |
| [LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약](../llm-wiki/01-llm-wiki-100-selection-and-patterns.md) | llm-wiki-report | llm-wiki/01-llm-wiki-100-selection-and-patterns.md | Start Here, LLM Wiki, RAG, and Knowledge Bases, Comparisons and Similarity Maps |
| [LLM Wiki 100 Code-Level Pipeline Comparison](../llm-wiki/02-code-level-pipeline-comparison.md) | llm-wiki-report | llm-wiki/02-code-level-pipeline-comparison.md | Start Here, LLM Wiki, RAG, and Knowledge Bases, Comparisons and Similarity Maps |
| [AI 에이전트/하네스/컨텍스트/루프 엔지니어링 근거자료 165선](../research/02-evidence-catalog-100-sources.md) | research-synthesis | research | Start Here, Coding Agents and IDEs, Research Foundations |
| [Spec-Driven Development: 스펙 추출과 스펙 메모리 합성 보고서](../spec-driven/00-spec-extraction-and-spec-memory-synthesis.md) | spec-driven-report | spec-driven | Start Here, Spec-Driven and Requirements |
| [Source Inventory](../00-source-inventory.md) | overview-report | root | Start Here, Full Source Scan and Code Retrieval, Source Catalogs and Inventories |
| [컨텍스트 엔지니어링, RAG, vLLM/local LLM, 에이전트 하네스 최신 트렌드 분석](../adjacent-tech/01-context-rag-vllm-local-llm-harness-trends.md) | infrastructure-report | adjacent-tech | Start Here, Agent Harness, MCP, and Orchestration, LLM Wiki, RAG, and Knowledge Bases, Adjacent AI Infrastructure |
| [컨텍스트/RAG/vLLM/local LLM/하네스 50개 레포지토리 상세 분석](../adjacent-tech/02-repository-analysis-50.md) | infrastructure-report | adjacent-tech | LLM Wiki, RAG, and Knowledge Bases, Adjacent AI Infrastructure |
| [Claude Code / Codex Harness Materials 1000+ Corpus](../agent-harness/00-claude-code-codex-harness-materials-1000.md) | agent-harness-report | agent-harness | Start Here, Coding Agents and IDEs, Agent Harness, MCP, and Orchestration |
| [Full Source Scan Deep Dive: 필요한 파일을 찾고 읽는 구현 로직](../full-source-scan/02-file-discovery-reading-implementation-deep-dive.md) | source-scan-report | full-source-scan | Full Source Scan and Code Retrieval |
| [Global Trending Open Source 500 Analysis](../global-trending/00-global-open-source-trend-report-2026-06-18.md) | global-trending-report | global-trending | Start Here, Global Trending Open Source |
| [한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석](../korea-trending/00-korea-open-source-trend-report-2026-06-18.md) | korea-trending-report | korea-trending | Start Here, Korea Trending Open Source |
| [Agent Harness Conference and Presentation Patterns](../presentations/00-agent-harness-conference-presentation-patterns.md) | presentation-report | presentations | Start Here, Agent Harness, MCP, and Orchestration, Presentations and Conferences |
| [AI Usage Trend Conferences: Big Tech, Amazon/AWS, Global and Korea](../presentations/01-ai-usage-trends-bigtech-korea-6-12mo.md) | presentation-report | presentations | Start Here, Presentations and Conferences, AI Usage Trends |
| [Repository Insights](../repository-insights/README.md) | overview-report | repository-insights | Start Here, Comparisons and Similarity Maps, Repository Deep Dives |
| [2026 AI 코딩 에이전트 설계 트렌드 종합 보고서](../research/01-agent-trends-2026.md) | research-synthesis | research | Start Here, Research Foundations |
| [Agent Harness and Orchestration](../categories/agent-harness-orchestration/README.md) | category-guide | categories | Category Guides, Agent Harness, MCP, and Orchestration |
| [AI Infrastructure and Serving](../categories/ai-infrastructure-serving/README.md) | category-guide | categories | Category Guides, Adjacent AI Infrastructure |
| [AI Usage Trends](../categories/ai-usage-trends/README.md) | category-guide | categories | Category Guides, AI Usage Trends |
| [Coding Agents and IDEs](../categories/coding-agents-ides/README.md) | category-guide | categories | Category Guides, Coding Agents and IDEs |
| [Context and Memory](../categories/context-memory/README.md) | category-guide | categories | Category Guides |
| [Data Platforms and Vector Databases](../categories/data-platforms-vector-databases/README.md) | category-guide | categories | Category Guides, Adjacent AI Infrastructure |
| [Developer Productivity and DevTools](../categories/developer-productivity-devtools/README.md) | category-guide | categories | Category Guides |
| [Evals, Observability, and Quality](../categories/evals-observability-quality/README.md) | category-guide | categories | Category Guides, Adjacent AI Infrastructure |
| [Global AI Open Source](../categories/global-ai-open-source/README.md) | category-guide | categories | Category Guides, Global Trending Open Source |
| [Korean AI and Open Source](../categories/korean-ai-open-source/README.md) | category-guide | categories | Category Guides, Korea Trending Open Source |
| [LLM Wiki, RAG, and Knowledge Bases](../categories/llm-wiki-rag-knowledge/README.md) | category-guide | categories | Category Guides, LLM Wiki, RAG, and Knowledge Bases |
| [Local LLMs and Models](../categories/local-llm-models/README.md) | category-guide | categories | Category Guides, Adjacent AI Infrastructure |
| [MCP, Tools, and Protocols](../categories/mcp-tools-protocols/README.md) | category-guide | categories | Category Guides, Agent Harness, MCP, and Orchestration |
| [Presentations and Conferences](../categories/presentations-conferences/README.md) | category-guide | categories | Category Guides, Presentations and Conferences |
| [Research Papers and Evidence](../categories/research-papers/README.md) | category-guide | categories | Category Guides, Coding Agents and IDEs |
| [Security, Governance, and Safety](../categories/security-governance-safety/README.md) | category-guide | categories | Category Guides |
| [Spec-Driven and Requirements](../categories/spec-driven-requirements/README.md) | category-guide | categories | Category Guides, Spec-Driven and Requirements |
| [Repository Insights by Role](../repository-insights/by-role/README.md) | overview-report | repository-insights | Comparisons and Similarity Maps, Repository Deep Dives |
| [Agent Harness and MCP](../repository-insights/by-role/agent-harness-mcp/README.md) | overview-report | repository-insights | Agent Harness, MCP, and Orchestration, Comparisons and Similarity Maps, Repository Deep Dives |
| [AI Infrastructure and Serving](../repository-insights/by-role/ai-infrastructure-serving/README.md) | overview-report | repository-insights | Comparisons and Similarity Maps, Repository Deep Dives |
| [Coding Agent and IDE](../repository-insights/by-role/coding-agent-ide/README.md) | overview-report | repository-insights | Coding Agents and IDEs, Comparisons and Similarity Maps, Repository Deep Dives |
| [Data and Vector Platforms](../repository-insights/by-role/data-vector-platform/README.md) | overview-report | repository-insights | Comparisons and Similarity Maps, Repository Deep Dives |
| [Developer Productivity and DevTools](../repository-insights/by-role/developer-productivity/README.md) | overview-report | repository-insights | Comparisons and Similarity Maps, Repository Deep Dives |
| [Evals, Observability, and Quality](../repository-insights/by-role/eval-observability/README.md) | overview-report | repository-insights | Adjacent AI Infrastructure, Comparisons and Similarity Maps, Repository Deep Dives |
| [General AI Open Source](../repository-insights/by-role/general-ai-open-source/README.md) | overview-report | repository-insights | Comparisons and Similarity Maps, Repository Deep Dives |
| [LLM Wiki, RAG, and Knowledge](../repository-insights/by-role/llm-wiki-rag/README.md) | overview-report | repository-insights | LLM Wiki, RAG, and Knowledge Bases, Comparisons and Similarity Maps, Repository Deep Dives |
| [Security, Governance, and Safety](../repository-insights/by-role/security-governance/README.md) | overview-report | repository-insights | Comparisons and Similarity Maps, Repository Deep Dives |
| [Spec-Driven and Requirements](../repository-insights/by-role/spec-driven/README.md) | spec-driven-report | repository-insights | Spec-Driven and Requirements, Comparisons and Similarity Maps, Repository Deep Dives |
| [127개 로컬 클론 구조 분석 총괄](../clone-structure-analysis-127.md) | overview-report | root | Start Here, Clone Structure and Inventory |
| [전체 소스 스캔과 사용자 의도-코드 연결 방식 리서치 요약](../full-source-scan-research-summary-2026-06-18.md) | overview-report | root | Start Here, Full Source Scan and Code Retrieval |
| [Codex Harness Setup Guide from Claude Code Patterns](../agent-harness/codex-harness-setup-guide.md) | agent-harness-report | agent-harness | Coding Agents and IDEs, Agent Harness, MCP, and Orchestration |
| [AI Usage Trend Conference Source Catalog](../presentations/ai-usage-trend-source-catalog-6-12mo.md) | presentation-report | presentations | Presentations and Conferences, AI Usage Trends, Source Catalogs and Inventories |
| [Conference Source Catalog](../presentations/conference-source-catalog.md) | presentation-report | presentations | Presentations and Conferences, Source Catalogs and Inventories |
| [KalyanKS-NLP/rag-zero-to-hero-guide 코드 레벨 분석](../llm-wiki/code-level-repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md) | llm-wiki-report | llm-wiki/code-level-repositories | Coding Agents and IDEs, LLM Wiki, RAG, and Knowledge Bases |
| [VectifyAI/PageIndex 코드 레벨 분석](../llm-wiki/code-level-repositories/VectifyAI__PageIndex.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [Source Inventory](../adjacent-tech-source-inventory.md) | overview-report | root | Adjacent AI Infrastructure, Source Catalogs and Inventories |
| [Current Clone Inventory: 107 Open Source Repositories](../current-clone-inventory-107.md) | overview-report | root | Source Catalogs and Inventories |
| [Spec-Driven Development Evidence Corpus 500+](../spec-driven-evidence-corpus-500.md) | overview-report | root | Coding Agents and IDEs, Spec-Driven and Requirements, Research Foundations, Source Catalogs and Inventories |
| [공식 문서와 소스맵: Context Engineering, RAG, Local LLM, Agent Harness](../adjacent-tech/03-official-docs-and-source-map.md) | infrastructure-report | adjacent-tech | Agent Harness, MCP, and Orchestration, LLM Wiki, RAG, and Knowledge Bases, Adjacent AI Infrastructure |
| [2026 최신 자료 레이더: 논문, 빅테크 발표, 에이전트/RAG/로컬 LLM 트렌드](../adjacent-tech/04-latest-research-and-industry-radar-2026.md) | infrastructure-report | adjacent-tech | LLM Wiki, RAG, and Knowledge Bases, Presentations and Conferences, Adjacent AI Infrastructure, Research Foundations |
| [Codex Conference Talk Playbook](../presentations/codex-conference-talk-playbook.md) | presentation-report | presentations | Coding Agents and IDEs, Presentations and Conferences |
| [AI 에이전트 설계의 충돌 이론과 보류된 질문](../research/03-conflicting-theories-and-open-questions.md) | research-synthesis | research | Start Here, Research Foundations |
| [Deferred Work Parallel Review Status](../research/04-deferred-work-parallel-review-status.md) | research-synthesis | research | Research Foundations |
| [1517005260/graph-rag-agent 코드 레벨 분석](../llm-wiki/code-level-repositories/1517005260__graph-rag-agent.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [abhigyanpatwari/GitNexus 코드 레벨 분석](../llm-wiki/code-level-repositories/abhigyanpatwari__GitNexus.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [AgriciDaniel/claude-obsidian 코드 레벨 분석](../llm-wiki/code-level-repositories/AgriciDaniel__claude-obsidian.md) | llm-wiki-report | llm-wiki/code-level-repositories | Coding Agents and IDEs, LLM Wiki, RAG, and Knowledge Bases |
| [apecloud/ApeRAG 코드 레벨 분석](../llm-wiki/code-level-repositories/apecloud__ApeRAG.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [Ar9av/obsidian-wiki 코드 레벨 분석](../llm-wiki/code-level-repositories/Ar9av__obsidian-wiki.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [arc53/DocsGPT 코드 레벨 분석](../llm-wiki/code-level-repositories/arc53__DocsGPT.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [aristoapp/awesome-second-brain 코드 레벨 분석](../llm-wiki/code-level-repositories/aristoapp__awesome-second-brain.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [arthurpanhku/DocSentinel 코드 레벨 분석](../llm-wiki/code-level-repositories/arthurpanhku__DocSentinel.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [axoviq-ai/synthadoc 코드 레벨 분석](../llm-wiki/code-level-repositories/axoviq-ai__synthadoc.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [benmaster82/Kwipu 코드 레벨 분석](../llm-wiki/code-level-repositories/benmaster82__Kwipu.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [bzsanti/oxidizePdf 코드 레벨 분석](../llm-wiki/code-level-repositories/bzsanti__oxidizePdf.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [chatchat-space/Langchain-Chatchat 코드 레벨 분석](../llm-wiki/code-level-repositories/chatchat-space__Langchain-Chatchat.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [datawhalechina/tiny-universe 코드 레벨 분석](../llm-wiki/code-level-repositories/datawhalechina__tiny-universe.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [DEEP-PolyU/Awesome-GraphRAG 코드 레벨 분석](../llm-wiki/code-level-repositories/DEEP-PolyU__Awesome-GraphRAG.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [Egonex-AI/Understand-Anything 코드 레벨 분석](../llm-wiki/code-level-repositories/Egonex-AI__Understand-Anything.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [enescingoz/awesome-n8n-templates 코드 레벨 분석](../llm-wiki/code-level-repositories/enescingoz__awesome-n8n-templates.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [eugeniughelbur/obsidian-second-brain 코드 레벨 분석](../llm-wiki/code-level-repositories/eugeniughelbur__obsidian-second-brain.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
| [FalkorDB/FalkorDB 코드 레벨 분석](../llm-wiki/code-level-repositories/FalkorDB__FalkorDB.md) | llm-wiki-report | llm-wiki/code-level-repositories | LLM Wiki, RAG, and Knowledge Bases |
