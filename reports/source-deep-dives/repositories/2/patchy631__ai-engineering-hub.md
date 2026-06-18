# patchy631/ai-engineering-hub Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

In-depth tutorials on LLMs, RAGs and real-world AI agent applications.

## 요약

- 조사 단위: `sources/patchy631__ai-engineering-hub` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,432 files, 475 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ultimate-ai-assitant-using-mcp/.python-version, ultimate-ai-assitant-using-mcp/mcp_streamlit_app.py, ultimate-ai-assitant-using-mcp/pyproject.toml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | patchy631/ai-engineering-hub |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 35839 |
| Forks | 5949 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/patchy631__ai-engineering-hub](../../../../sources/patchy631__ai-engineering-hub) |
| Existing report | [reports/global-trending/repositories/patchy631__ai-engineering-hub.md](../../../global-trending/repositories/patchy631__ai-engineering-hub.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1432 / 475 |
| Max observed depth | 11 |
| Top directories | acp-code, agent-with-mcp-memory, agent2agent-demo, agentic_rag, agentic_rag_deepseek, ai_news_generator, ai-avatar-demo, ai-engineering-roadmap, ai-podcast-generation, ai-podcast-generator, amazon-product-analysis-server, art_mcp_rl, assets, audio-analysis-toolkit, autogen-stock-analyst, book-writer-flow, brand-monitoring, Build-reasoning-model, chat-with-audios, chat-with-code |
| Top extensions | .py: 316, .tsx: 255, .md: 161, .ts: 125, .png: 94, (none): 56, .example: 50, .ipynb: 49, .json: 48, .toml: 47, .lock: 42, .txt: 33 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| acp-code | top-level component | 1 |
| agent-with-mcp-memory | top-level component | 1 |
| agent2agent-demo | top-level component | 1 |
| agentic_rag | top-level component | 1 |
| agentic_rag_deepseek | top-level component | 1 |
| ai_news_generator | top-level component | 1 |
| ai-avatar-demo | top-level component | 1 |
| ai-engineering-roadmap | top-level component | 1 |
| ai-podcast-generation | top-level component | 1 |
| ai-podcast-generator | top-level component | 1 |
| amazon-product-analysis-server | source boundary | 1 |
| art_mcp_rl | top-level component | 1 |
| assets | top-level component | 1 |
| audio-analysis-toolkit | top-level component | 1 |
| autogen-stock-analyst | top-level component | 1 |
| book-writer-flow | top-level component | 1 |
| brand-monitoring | top-level component | 1 |
| Build-reasoning-model | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [ultimate-ai-assitant-using-mcp/.python-version](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/.python-version) | mcp signal |
| mcp | [ultimate-ai-assitant-using-mcp/mcp_streamlit_app.py](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/mcp_streamlit_app.py) | mcp signal |
| mcp | [ultimate-ai-assitant-using-mcp/pyproject.toml](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/pyproject.toml) | mcp signal |
| mcp | [ultimate-ai-assitant-using-mcp/README.md](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/README.md) | mcp signal |
| agentRuntime | [zep-memory-assistant/agent.py](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/agent.py) | agentRuntime signal |
| agentRuntime | [stock-portfolio-analysis-agent/frontend/src/app/components/tool-logs.tsx](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/frontend/src/app/components/tool-logs.tsx) | agentRuntime signal |
| agentRuntime | [stock-portfolio-analysis-agent/agent/__init__.py](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/__init__.py) | agentRuntime signal |
| agentRuntime | [stock-portfolio-analysis-agent/agent/.env.example](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/.env.example) | agentRuntime signal |
| entrypoints | [ultimate-ai-assitant-using-mcp/server.py](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/server.py) | entrypoints signal |
| entrypoints | [stock-portfolio-analysis-agent/agent/main.py](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/main.py) | entrypoints signal |
| entrypoints | [stagehand x mcp-use/server.py](../../../../sources/patchy631__ai-engineering-hub/stagehand x mcp-use/server.py) | entrypoints signal |
| entrypoints | [sdv-mcp/server.py](../../../../sources/patchy631__ai-engineering-hub/sdv-mcp/server.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 37 | [ultimate-ai-assitant-using-mcp/server.py](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/server.py)<br>[stock-portfolio-analysis-agent/agent/main.py](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/main.py)<br>[stagehand x mcp-use/server.py](../../../../sources/patchy631__ai-engineering-hub/stagehand x mcp-use/server.py)<br>[sdv-mcp/server.py](../../../../sources/patchy631__ai-engineering-hub/sdv-mcp/server.py)<br>[sales-analytics-agent/main.py](../../../../sources/patchy631__ai-engineering-hub/sales-analytics-agent/main.py)<br>[pixeltable-mcp/video-index/server.py](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/video-index/server.py)<br>[pixeltable-mcp/image-index/server.py](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/image-index/server.py)<br>[pixeltable-mcp/doc-index/server.py](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/doc-index/server.py) |
| agentRuntime | 245 | [zep-memory-assistant/agent.py](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/agent.py)<br>[stock-portfolio-analysis-agent/frontend/src/app/components/tool-logs.tsx](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/frontend/src/app/components/tool-logs.tsx)<br>[stock-portfolio-analysis-agent/agent/__init__.py](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/__init__.py)<br>[stock-portfolio-analysis-agent/agent/.env.example](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/.env.example)<br>[stock-portfolio-analysis-agent/agent/main.py](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/main.py)<br>[stock-portfolio-analysis-agent/agent/prompts.py](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/prompts.py)<br>[stock-portfolio-analysis-agent/agent/stock_analysis.py](../../../../sources/patchy631__ai-engineering-hub/stock-portfolio-analysis-agent/agent/stock_analysis.py)<br>[stagehand x mcp-use/agent_wrapper.py](../../../../sources/patchy631__ai-engineering-hub/stagehand x mcp-use/agent_wrapper.py) |
| mcp | 170 | [ultimate-ai-assitant-using-mcp/.python-version](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/.python-version)<br>[ultimate-ai-assitant-using-mcp/mcp_streamlit_app.py](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/mcp_streamlit_app.py)<br>[ultimate-ai-assitant-using-mcp/pyproject.toml](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/pyproject.toml)<br>[ultimate-ai-assitant-using-mcp/README.md](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/README.md)<br>[ultimate-ai-assitant-using-mcp/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/requirements.txt)<br>[ultimate-ai-assitant-using-mcp/server.py](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/server.py)<br>[ultimate-ai-assitant-using-mcp/uv.lock](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/uv.lock)<br>[stagehand x mcp-use/mcp-config.json-example](../../../../sources/patchy631__ai-engineering-hub/stagehand x mcp-use/mcp-config.json-example) |
| retrieval | 252 | [zep-memory-assistant/agent.py](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/agent.py)<br>[zep-memory-assistant/app.py](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/app.py)<br>[zep-memory-assistant/llm_config.py](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/llm_config.py)<br>[zep-memory-assistant/prompt.py](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/prompt.py)<br>[zep-memory-assistant/pyproject.toml](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/pyproject.toml)<br>[zep-memory-assistant/README.md](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/README.md)<br>[zep-memory-assistant/util.py](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/util.py)<br>[zep-memory-assistant/uv.lock](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/uv.lock) |
| spec | 40 | [video-rag-gemini/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/video-rag-gemini/requirements.txt)<br>[ultimate-ai-assitant-using-mcp/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/requirements.txt)<br>[rag-voice-agent/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/rag-voice-agent/requirements.txt)<br>[pixeltable-mcp/video-index/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/video-index/requirements.txt)<br>[pixeltable-mcp/image-index/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/image-index/requirements.txt)<br>[pixeltable-mcp/doc-index/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/doc-index/requirements.txt)<br>[pixeltable-mcp/base-sdk/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/base-sdk/requirements.txt)<br>[pixeltable-mcp/audio-index/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/audio-index/requirements.txt) |
| eval | 60 | [video-rag-gemini/test_setup.py](../../../../sources/patchy631__ai-engineering-hub/video-rag-gemini/test_setup.py)<br>[sonnet4-vs-qwen3-coder/code_evaluation.py](../../../../sources/patchy631__ai-engineering-hub/sonnet4-vs-qwen3-coder/code_evaluation.py)<br>[sonnet4-vs-o4/code_evaluation.py](../../../../sources/patchy631__ai-engineering-hub/sonnet4-vs-o4/code_evaluation.py)<br>[simple-rag-workflow/evaluation.ipynb](../../../../sources/patchy631__ai-engineering-hub/simple-rag-workflow/evaluation.ipynb)<br>[simple-rag-workflow/eval-data/test.csv](../../../../sources/patchy631__ai-engineering-hub/simple-rag-workflow/eval-data/test.csv)<br>[simple-rag-workflow/eval-data/paul_graham/paul_graham_essay.txt](../../../../sources/patchy631__ai-engineering-hub/simple-rag-workflow/eval-data/paul_graham/paul_graham_essay.txt)<br>[qwen3_vs_deepseek-r1/evaluation.ipynb](../../../../sources/patchy631__ai-engineering-hub/qwen3_vs_deepseek-r1/evaluation.ipynb)<br>[qwen3_vs_deepseek-r1/eval-data/test.csv](../../../../sources/patchy631__ai-engineering-hub/qwen3_vs_deepseek-r1/eval-data/test.csv) |
| security | 6 | [open-agent-builder/lib/arcade/auth-store.ts](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/lib/arcade/auth-store.ts)<br>[open-agent-builder/lib/api/auth.ts](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/lib/api/auth.ts)<br>[open-agent-builder/convex/auth.config.ts](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/convex/auth.config.ts)<br>[open-agent-builder/components/shared/effects/flame/auth-pulse/auth-pulse.tsx](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/components/shared/effects/flame/auth-pulse/auth-pulse.tsx)<br>[open-agent-builder/components/shared/effects/flame/auth-pulse/pulse-data.json](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/components/shared/effects/flame/auth-pulse/pulse-data.json)<br>[hugging-face-skills/skills/hugging-face-tool-builder/references/hf_model_papers_auth.sh](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/skills/hugging-face-tool-builder/references/hf_model_papers_auth.sh) |
| ci | 4 | [hugging-face-skills/.github/workflows/generate-agents.yml](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/.github/workflows/generate-agents.yml)<br>[hugging-face-skills/.github/workflows/push-evals-leaderboard.yml](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/.github/workflows/push-evals-leaderboard.yml)<br>[hugging-face-skills/.github/workflows/push-hackers-leaderboard.yml](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/.github/workflows/push-hackers-leaderboard.yml)<br>[hugging-face-skills/.github/workflows/push-quests.yml](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/.github/workflows/push-quests.yml) |
| container | 7 | [pixeltable-mcp/docker-compose.yaml](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/docker-compose.yaml)<br>[pixeltable-mcp/video-index/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/video-index/Dockerfile)<br>[pixeltable-mcp/image-index/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/image-index/Dockerfile)<br>[pixeltable-mcp/doc-index/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/doc-index/Dockerfile)<br>[pixeltable-mcp/base-sdk/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/base-sdk/Dockerfile)<br>[pixeltable-mcp/audio-index/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/audio-index/Dockerfile)<br>[multimodal-rag-assemblyai/docker-compose.yml](../../../../sources/patchy631__ai-engineering-hub/multimodal-rag-assemblyai/docker-compose.yml) |
| instruction | 1 | [hugging-face-skills/agents/AGENTS.md](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/agents/AGENTS.md) |
| docs | 119 | [README.md](../../../../sources/patchy631__ai-engineering-hub/README.md)<br>[zep-memory-assistant/README.md](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/README.md)<br>[Youtube-trend-analysis/README.md](../../../../sources/patchy631__ai-engineering-hub/Youtube-trend-analysis/README.md)<br>[Website-to-API-with-FireCrawl/README.md](../../../../sources/patchy631__ai-engineering-hub/Website-to-API-with-FireCrawl/README.md)<br>[web-browsing-agent/README.md](../../../../sources/patchy631__ai-engineering-hub/web-browsing-agent/README.md)<br>[video-rag-gemini/README.md](../../../../sources/patchy631__ai-engineering-hub/video-rag-gemini/README.md)<br>[ultimate-ai-assitant-using-mcp/README.md](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/README.md)<br>[trustworthy-rag/README.md](../../../../sources/patchy631__ai-engineering-hub/trustworthy-rag/README.md) |
| config | 119 | [zep-memory-assistant/pyproject.toml](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/pyproject.toml)<br>[zep-memory-assistant/uv.lock](../../../../sources/patchy631__ai-engineering-hub/zep-memory-assistant/uv.lock)<br>[web-browsing-agent/pyproject.toml](../../../../sources/patchy631__ai-engineering-hub/web-browsing-agent/pyproject.toml)<br>[web-browsing-agent/uv.lock](../../../../sources/patchy631__ai-engineering-hub/web-browsing-agent/uv.lock)<br>[video-rag-gemini/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/video-rag-gemini/requirements.txt)<br>[ultimate-ai-assitant-using-mcp/pyproject.toml](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/pyproject.toml)<br>[ultimate-ai-assitant-using-mcp/requirements.txt](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/requirements.txt)<br>[ultimate-ai-assitant-using-mcp/uv.lock](../../../../sources/patchy631__ai-engineering-hub/ultimate-ai-assitant-using-mcp/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 60 | [video-rag-gemini/test_setup.py](../../../../sources/patchy631__ai-engineering-hub/video-rag-gemini/test_setup.py)<br>[sonnet4-vs-qwen3-coder/code_evaluation.py](../../../../sources/patchy631__ai-engineering-hub/sonnet4-vs-qwen3-coder/code_evaluation.py)<br>[sonnet4-vs-o4/code_evaluation.py](../../../../sources/patchy631__ai-engineering-hub/sonnet4-vs-o4/code_evaluation.py)<br>[simple-rag-workflow/evaluation.ipynb](../../../../sources/patchy631__ai-engineering-hub/simple-rag-workflow/evaluation.ipynb)<br>[simple-rag-workflow/eval-data/test.csv](../../../../sources/patchy631__ai-engineering-hub/simple-rag-workflow/eval-data/test.csv)<br>[simple-rag-workflow/eval-data/paul_graham/paul_graham_essay.txt](../../../../sources/patchy631__ai-engineering-hub/simple-rag-workflow/eval-data/paul_graham/paul_graham_essay.txt) |
| CI workflows | 4 | [hugging-face-skills/.github/workflows/generate-agents.yml](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/.github/workflows/generate-agents.yml)<br>[hugging-face-skills/.github/workflows/push-evals-leaderboard.yml](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/.github/workflows/push-evals-leaderboard.yml)<br>[hugging-face-skills/.github/workflows/push-hackers-leaderboard.yml](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/.github/workflows/push-hackers-leaderboard.yml)<br>[hugging-face-skills/.github/workflows/push-quests.yml](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/.github/workflows/push-quests.yml) |
| Containers / deploy | 7 | [pixeltable-mcp/docker-compose.yaml](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/docker-compose.yaml)<br>[pixeltable-mcp/video-index/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/video-index/Dockerfile)<br>[pixeltable-mcp/image-index/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/image-index/Dockerfile)<br>[pixeltable-mcp/doc-index/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/doc-index/Dockerfile)<br>[pixeltable-mcp/base-sdk/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/base-sdk/Dockerfile)<br>[pixeltable-mcp/audio-index/Dockerfile](../../../../sources/patchy631__ai-engineering-hub/pixeltable-mcp/audio-index/Dockerfile) |
| Security / policy | 6 | [open-agent-builder/lib/arcade/auth-store.ts](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/lib/arcade/auth-store.ts)<br>[open-agent-builder/lib/api/auth.ts](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/lib/api/auth.ts)<br>[open-agent-builder/convex/auth.config.ts](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/convex/auth.config.ts)<br>[open-agent-builder/components/shared/effects/flame/auth-pulse/auth-pulse.tsx](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/components/shared/effects/flame/auth-pulse/auth-pulse.tsx)<br>[open-agent-builder/components/shared/effects/flame/auth-pulse/pulse-data.json](../../../../sources/patchy631__ai-engineering-hub/open-agent-builder/components/shared/effects/flame/auth-pulse/pulse-data.json)<br>[hugging-face-skills/skills/hugging-face-tool-builder/references/hf_model_papers_auth.sh](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/skills/hugging-face-tool-builder/references/hf_model_papers_auth.sh) |
| Agent instructions | 1 | [hugging-face-skills/agents/AGENTS.md](../../../../sources/patchy631__ai-engineering-hub/hugging-face-skills/agents/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ultimate-ai-assitant-using-mcp/.python-version`, `ultimate-ai-assitant-using-mcp/mcp_streamlit_app.py`, `ultimate-ai-assitant-using-mcp/pyproject.toml`.
2. Trace execution through entrypoints: `ultimate-ai-assitant-using-mcp/server.py`, `stock-portfolio-analysis-agent/agent/main.py`, `stagehand x mcp-use/server.py`.
3. Map agent/tool runtime through: `zep-memory-assistant/agent.py`, `stock-portfolio-analysis-agent/frontend/src/app/components/tool-logs.tsx`, `stock-portfolio-analysis-agent/agent/__init__.py`.
4. Inspect retrieval/memory/indexing through: `zep-memory-assistant/agent.py`, `zep-memory-assistant/app.py`, `zep-memory-assistant/llm_config.py`.
5. Verify behavior through test/eval files: `video-rag-gemini/test_setup.py`, `sonnet4-vs-qwen3-coder/code_evaluation.py`, `sonnet4-vs-o4/code_evaluation.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 In depth tutorials on LLMs, RAGs and real world AI agent applications.. 핵심 구조 신호는 Jupyter Notebook, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
