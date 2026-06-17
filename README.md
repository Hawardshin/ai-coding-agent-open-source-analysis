# AI Coding Agent Open Source Analysis

This repository collects detailed Korean analysis reports for open source AI coding agents, terminal/IDE agents, MCP tooling, browser automation agents, and agent frameworks.

The source repositories are cloned locally under `sources/` for inspection and execution checks, but are intentionally not committed. Reports, diagrams, and metadata are committed here.

The repository now also includes a second research track for adjacent AI infrastructure: context engineering, RAG, vLLM/local LLM serving, vector databases, evaluation, observability, and agent harness tooling.

## Web Research Browser

This repository can be deployed as a static Vercel site for reading and searching the collected reports, open-source metadata, and evidence corpus.

- `web/`: static browser UI.
- `scripts/build-web-index.mjs`: builds `web/assets/search-index.json` from `README.md`, `reports/**/*.md`, and selected `data/*.json` files.
- `npm run build:web`: regenerate the browser search index.
- GitHub Pages target: `https://hawardshin.github.io/ai-coding-agent-open-source-analysis/`.
- `.github/workflows/pages.yml`: deploys `web/` to GitHub Pages on every `main` push.
- `npx -y vercel@latest --prod --yes`: deploy the static browser to Vercel when the local Vercel CLI is authenticated.

## Structure

- `data/repositories.json`: canonical target repository list from the user-provided source document.
- `data/github-metadata.json`: GitHub metadata gathered from the live API.
- `data/source-inventory.json`: local clone inventory, commits, manifests, languages, and package metadata.
- `data/project-comparison-matrix.json`: normalized comparison matrix for the 30 analyzed projects.
- `data/adjacent-tech-repositories.json`: 50 selected adjacent-stack repositories for context/RAG/local LLM/harness research.
- `data/adjacent-tech-github-metadata.json`: GitHub metadata for the 50 adjacent-stack repositories.
- `data/adjacent-tech-source-inventory.json`: local clone inventory for the 50 adjacent-stack repositories.
- `data/current-clone-inventory-107.json`: current inventory for all 107 locally cloned repositories, including newly added source-scan/code-search/agent workflow repositories.
- `data/clone-structure-analysis-127.json`: current structural analysis for all 127 locally cloned repositories.
- `data/spec-driven-repositories.json`: 20 selected spec-driven/open-source workflow repositories cloned and inspected locally.
- `data/spec-driven-evidence-corpus-500.json`: reproducible OpenAlex evidence corpus for spec-driven development, requirements engineering, traceability, executable specs, and agent memory research.
- `reports/00-source-inventory.md`: clone inventory summary table.
- `reports/adjacent-tech-source-inventory.md`: clone inventory summary for the 50 adjacent-stack repositories.
- `reports/current-clone-inventory-107.md`: current clone inventory summary for 107 open source repositories.
- `reports/clone-structure-analysis-127.md`: full structural coverage summary for all 127 local clones, including clone coverage and per-repo report links.
- `reports/full-source-scan-research-summary-2026-06-18.md`: focused Korean synthesis on full source scanning, Codex/Claude Code context handling, and user-intent-to-source retrieval design.
- `reports/spec-driven-evidence-corpus-500.md`: summary of the 650-item OpenAlex evidence corpus used for SDD research.
- `reports/`: repository-by-repository analysis reports.
- `reports/comparisons/`: cross-repository taxonomy, feature comparison, and similarity cluster reports.
- `reports/research/`: 2026 agent/harness/context/evaluation research synthesis, source catalog, and conflicting theories.
- `reports/adjacent-tech/`: context engineering, RAG, local LLM, vector DB, evaluation, and harness reports.
- `reports/clone-structures/`: generated per-repository structure reports for all 127 local clones.
- `scripts/`: local automation for metadata collection and cloning.
- `web/`: Vercel-ready static research browser.

## Cross-Repository Reports

1. [30개 프로젝트 분류와 기능 비교](reports/comparisons/01-project-taxonomy-and-feature-comparison.md)
2. [유사군별 비교와 관계 지도](reports/comparisons/02-similarity-clusters.md)

## Agent Research Reports

1. [2026 AI 코딩 에이전트 설계 트렌드 종합](reports/research/01-agent-trends-2026.md)
2. [AI 에이전트/하네스/컨텍스트/루프 엔지니어링 근거자료 165선](reports/research/02-evidence-catalog-100-sources.md)
3. [AI 에이전트 설계의 충돌 이론과 보류된 질문](reports/research/03-conflicting-theories-and-open-questions.md)
4. [전체 소스 스캔과 사용자 의도-코드 연결 방식 리서치 요약](reports/full-source-scan-research-summary-2026-06-18.md)
5. [127개 로컬 클론 구조 분석 총괄](reports/clone-structure-analysis-127.md)

## Adjacent Infrastructure Reports

1. [컨텍스트 엔지니어링, RAG, vLLM/local LLM, 에이전트 하네스 최신 트렌드 분석](reports/adjacent-tech/01-context-rag-vllm-local-llm-harness-trends.md)
2. [컨텍스트/RAG/vLLM/local LLM/하네스 50개 레포지토리 상세 분석](reports/adjacent-tech/02-repository-analysis-50.md)
3. [공식 문서와 소스맵: Context Engineering, RAG, Local LLM, Agent Harness](reports/adjacent-tech/03-official-docs-and-source-map.md)
4. [2026 최신 자료 레이더: 논문, 빅테크 발표, 에이전트/RAG/로컬 LLM 트렌드](reports/adjacent-tech/04-latest-research-and-industry-radar-2026.md)
5. [50개 adjacent-stack clone inventory](reports/adjacent-tech-source-inventory.md)

## Repository Reports

1. [openclaw/openclaw](reports/repositories/openclaw-openclaw.md)
2. [ultraworkers/claw-code](reports/repositories/ultraworkers-claw-code.md)
3. [NousResearch/hermes-agent](reports/repositories/NousResearch-hermes-agent.md)
4. [anomalyco/opencode](reports/repositories/anomalyco-opencode.md)
5. [google-gemini/gemini-cli](reports/repositories/google-gemini-cli.md)
6. [browser-use/browser-use](reports/repositories/browser-use-browser-use.md)
7. [openai/codex](reports/repositories/openai-codex.md)
8. [modelcontextprotocol/servers](reports/repositories/modelcontextprotocol-servers.md)
9. [All-Hands-AI/OpenHands](reports/repositories/all-hands-ai-openhands.md)
10. [openinterpreter/open-interpreter](reports/repositories/openinterpreter-open-interpreter.md)
11. [cline/cline](reports/repositories/cline-cline.md)
12. [microsoft/autogen](reports/repositories/microsoft-autogen.md)
13. [upstash/context7](reports/repositories/upstash-context7.md)
14. [crewAIInc/crewAI](reports/repositories/crewaiinc-crewai.md)
15. [aaif-goose/goose](reports/repositories/aaif-goose-goose.md)
16. [Aider-AI/aider](reports/repositories/aider-ai-aider.md)
17. [agno-agi/agno](reports/repositories/agno-agi-agno.md)
18. [Yeachan-Heo/oh-my-claudecode](reports/repositories/Yeachan-Heo-oh-my-claudecode.md)
19. [langchain-ai/langgraph](reports/repositories/langchain-ai-langgraph.md)
20. [continuedev/continue](reports/repositories/continuedev-continue.md)
21. [TabbyML/tabby](reports/repositories/TabbyML-tabby.md)
22. [Yeachan-Heo/oh-my-codex](reports/repositories/Yeachan-Heo-oh-my-codex.md)
23. [ComposioHQ/composio](reports/repositories/ComposioHQ-composio.md)
24. [QwenLM/qwen-code](reports/repositories/QwenLM-qwen-code.md)
25. [RooCodeInc/Roo-Code](reports/repositories/RooCodeInc-Roo-Code.md)
26. [openai/codex-plugin-cc](reports/repositories/openai-codex-plugin-cc.md)
27. [Kilo-Org/kilocode](reports/repositories/Kilo-Org-kilocode.md)
28. [SWE-agent/SWE-agent](reports/repositories/SWE-agent-SWE-agent.md)
29. [nesquena/hermes-webui](reports/repositories/nesquena-hermes-webui.md)
30. [nanobrowser/nanobrowser](reports/repositories/nanobrowser-nanobrowser.md)

## Scope Notes

- The cloned upstream repositories live under `sources/` and are intentionally ignored by git.
- Reports are written in Korean and include source-level architecture, execution flow, diagrams, runtime checks, risks, and notable hidden surfaces.
- Metadata was collected on 2026-06-10.
- Adjacent-stack metadata and clone inventory were collected on 2026-06-13 KST.
