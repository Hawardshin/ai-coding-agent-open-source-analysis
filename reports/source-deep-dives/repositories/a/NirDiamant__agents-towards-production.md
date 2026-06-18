# NirDiamant/agents-towards-production Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

End-to-end, code-first tutorials for building production-grade GenAI agents. From prototype to enterprise deployment.

## 요약

- 조사 단위: `sources/NirDiamant__agents-towards-production` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 214 files, 58 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tutorials/agent-with-mcp/mcp-tutorial.ipynb, tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png, tutorials/agent-with-mcp/assets/customized_mcp_host.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | NirDiamant/agents-towards-production |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 20762 |
| Forks | 2759 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/NirDiamant__agents-towards-production](../../../../sources/NirDiamant__agents-towards-production) |
| Existing report | [reports/global-trending/repositories/NirDiamant__agents-towards-production.md](../../../global-trending/repositories/NirDiamant__agents-towards-production.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 214 / 58 |
| Max observed depth | 6 |
| Top directories | .github, assets, images, tutorials |
| Top extensions | .png: 93, .ipynb: 28, .md: 20, .svg: 11, (none): 11, .py: 10, .txt: 9, .pdf: 6, .bin: 4, .jpg: 3, .kt: 3, .bat: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| images | top-level component | 1 |
| tutorials | top-level component | 1 |


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
| mcp | [tutorials/agent-with-mcp/mcp-tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/mcp-tutorial.ipynb) | mcp signal |
| mcp | [tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png) | mcp signal |
| mcp | [tutorials/agent-with-mcp/assets/customized_mcp_host.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/customized_mcp_host.png) | mcp signal |
| mcp | [tutorials/agent-with-mcp/assets/mcp_architecture.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/mcp_architecture.png) | mcp signal |
| agentRuntime | [tutorials/kotlin-agent-with-koog/assets/tool-calling-flow.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/kotlin-agent-with-koog/assets/tool-calling-flow.png) | agentRuntime signal |
| agentRuntime | [tutorials/agent-with-tavily-web-access/hybrid-agent-tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/hybrid-agent-tutorial.ipynb) | agentRuntime signal |
| agentRuntime | [tutorials/agent-with-tavily-web-access/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/README.md) | agentRuntime signal |
| agentRuntime | [tutorials/agent-with-tavily-web-access/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/requirements.txt) | agentRuntime signal |
| config | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt) | config signal |
| config | [tutorials/on-prem-llm-ollama/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/on-prem-llm-ollama/requirements.txt) | config signal |
| config | [tutorials/ai-memory-with-cognee/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/requirements.txt) | config signal |
| container | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 70 | [tutorials/kotlin-agent-with-koog/assets/tool-calling-flow.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/kotlin-agent-with-koog/assets/tool-calling-flow.png)<br>[tutorials/agent-with-tavily-web-access/hybrid-agent-tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/hybrid-agent-tutorial.ipynb)<br>[tutorials/agent-with-tavily-web-access/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/README.md)<br>[tutorials/agent-with-tavily-web-access/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/requirements.txt)<br>[tutorials/agent-with-tavily-web-access/search-extract-crawl.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/search-extract-crawl.ipynb)<br>[tutorials/agent-with-tavily-web-access/web-agent-tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/web-agent-tutorial.ipynb)<br>[tutorials/agent-with-tavily-web-access/supplemental/vectorize_tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/supplemental/vectorize_tutorial.ipynb)<br>[tutorials/agent-with-tavily-web-access/supplemental/docs/amazon.pdf](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/supplemental/docs/amazon.pdf) |
| mcp | 6 | [tutorials/agent-with-mcp/mcp-tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/mcp-tutorial.ipynb)<br>[tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png)<br>[tutorials/agent-with-mcp/assets/customized_mcp_host.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/customized_mcp_host.png)<br>[tutorials/agent-with-mcp/assets/mcp_architecture.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/mcp_architecture.png)<br>[tutorials/agent-with-mcp/assets/track_bitcoin_price_with_mcp.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/track_bitcoin_price_with_mcp.png)<br>[tutorials/agent-with-mcp/assets/track_crypto_market_data_with_mcp.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/track_crypto_market_data_with_mcp.png) |
| retrieval | 26 | [tutorials/tracing-with-langsmith/assets/wiki_agent_td.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/wiki_agent_td.png)<br>[tutorials/ai-memory-with-cognee/.env.template](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/.env.template)<br>[tutorials/ai-memory-with-cognee/cognee-ai-memory.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/cognee-ai-memory.ipynb)<br>[tutorials/ai-memory-with-cognee/guido_contributions.html](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/guido_contributions.html)<br>[tutorials/ai-memory-with-cognee/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/README.md)<br>[tutorials/ai-memory-with-cognee/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/requirements.txt)<br>[tutorials/ai-memory-with-cognee/data/cognee_diagram.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/data/cognee_diagram.png)<br>[tutorials/ai-memory-with-cognee/data/copilot_conversations.json](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/data/copilot_conversations.json) |
| spec | 14 | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt)<br>[tutorials/on-prem-llm-ollama/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/on-prem-llm-ollama/requirements.txt)<br>[tutorials/kotlin-agent-with-koog/assets/architecture-diagram.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/kotlin-agent-with-koog/assets/architecture-diagram.png)<br>[tutorials/ai-memory-with-cognee/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/requirements.txt)<br>[tutorials/agent-with-tavily-web-access/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/requirements.txt)<br>[tutorials/agent-with-streamlit-ui/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-streamlit-ui/requirements.txt)<br>[tutorials/agent-with-mcp/assets/mcp_architecture.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/mcp_architecture.png)<br>[tutorials/agent-security-with-llamafirewall/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/requirements.txt) |
| eval | 12 | [tutorials/tracing-with-langsmith/langsmith_basics.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/langsmith_basics.ipynb)<br>[tutorials/tracing-with-langsmith/assets/1.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/1.png)<br>[tutorials/tracing-with-langsmith/assets/2.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/2.png)<br>[tutorials/tracing-with-langsmith/assets/3.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/3.png)<br>[tutorials/tracing-with-langsmith/assets/wiki_agent_td.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/wiki_agent_td.png)<br>[tutorials/runpod-gpu-deploy/assets/test_request_dashboard.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/assets/test_request_dashboard.png)<br>[tutorials/runpod-gpu-deploy/assets/test_request_input.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/assets/test_request_input.png)<br>[tutorials/runpod-gpu-deploy/assets/test_request_output.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/assets/test_request_output.png) |
| security | 18 | [tutorials/agent-security-with-llamafirewall/hello-llama.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/hello-llama.ipynb)<br>[tutorials/agent-security-with-llamafirewall/input-guardrail.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/input-guardrail.ipynb)<br>[tutorials/agent-security-with-llamafirewall/output-guardrail.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/output-guardrail.ipynb)<br>[tutorials/agent-security-with-llamafirewall/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/README.md)<br>[tutorials/agent-security-with-llamafirewall/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/requirements.txt)<br>[tutorials/agent-security-with-llamafirewall/tools-security.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/tools-security.ipynb)<br>[tutorials/agent-security-with-llamafirewall/assets/input-guardrail.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/assets/input-guardrail.png)<br>[tutorials/agent-security-with-llamafirewall/assets/openai-trace.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/assets/openai-trace.png) |
| ci | 0 | not obvious |
| container | 7 | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile)<br>[tutorials/docker-intro/examples/ex5/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex5/Dockerfile)<br>[tutorials/docker-intro/examples/ex4/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex4/Dockerfile)<br>[tutorials/docker-intro/examples/ex3/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex3/Dockerfile)<br>[tutorials/docker-intro/examples/ex2/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex2/Dockerfile)<br>[tutorials/docker-intro/examples/ex1/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex1/Dockerfile)<br>[tutorials/docker-intro/assets/dockerfile to container.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/assets/dockerfile to container.png) |
| instruction | 0 | not obvious |
| docs | 20 | [README.md](../../../../sources/NirDiamant__agents-towards-production/README.md)<br>[tutorials/runpod-gpu-deploy/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/README.md)<br>[tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/README.md)<br>[tutorials/kotlin-agent-with-koog/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/kotlin-agent-with-koog/README.md)<br>[tutorials/docker-intro/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/README.md)<br>[tutorials/arcade-secure-tool-calling/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/arcade-secure-tool-calling/README.md)<br>[tutorials/ai-memory-with-cognee/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/README.md)<br>[tutorials/agent-with-tavily-web-access/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/README.md) |
| config | 8 | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt)<br>[tutorials/on-prem-llm-ollama/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/on-prem-llm-ollama/requirements.txt)<br>[tutorials/ai-memory-with-cognee/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/requirements.txt)<br>[tutorials/agent-with-tavily-web-access/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/requirements.txt)<br>[tutorials/agent-with-streamlit-ui/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-streamlit-ui/requirements.txt)<br>[tutorials/agent-security-with-llamafirewall/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/requirements.txt)<br>[tutorials/agent-security-apex/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-apex/requirements.txt)<br>[tutorials/agent-RAG-with-Contextual/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-RAG-with-Contextual/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 12 | [tutorials/tracing-with-langsmith/langsmith_basics.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/langsmith_basics.ipynb)<br>[tutorials/tracing-with-langsmith/assets/1.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/1.png)<br>[tutorials/tracing-with-langsmith/assets/2.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/2.png)<br>[tutorials/tracing-with-langsmith/assets/3.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/3.png)<br>[tutorials/tracing-with-langsmith/assets/wiki_agent_td.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/wiki_agent_td.png)<br>[tutorials/runpod-gpu-deploy/assets/test_request_dashboard.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/assets/test_request_dashboard.png) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 7 | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile)<br>[tutorials/docker-intro/examples/ex5/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex5/Dockerfile)<br>[tutorials/docker-intro/examples/ex4/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex4/Dockerfile)<br>[tutorials/docker-intro/examples/ex3/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex3/Dockerfile)<br>[tutorials/docker-intro/examples/ex2/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex2/Dockerfile)<br>[tutorials/docker-intro/examples/ex1/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex1/Dockerfile) |
| Security / policy | 18 | [tutorials/agent-security-with-llamafirewall/hello-llama.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/hello-llama.ipynb)<br>[tutorials/agent-security-with-llamafirewall/input-guardrail.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/input-guardrail.ipynb)<br>[tutorials/agent-security-with-llamafirewall/output-guardrail.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/output-guardrail.ipynb)<br>[tutorials/agent-security-with-llamafirewall/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/README.md)<br>[tutorials/agent-security-with-llamafirewall/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/requirements.txt)<br>[tutorials/agent-security-with-llamafirewall/tools-security.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/tools-security.ipynb) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tutorials/agent-with-mcp/mcp-tutorial.ipynb`, `tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png`, `tutorials/agent-with-mcp/assets/customized_mcp_host.png`.
2. Map agent/tool runtime through: `tutorials/kotlin-agent-with-koog/assets/tool-calling-flow.png`, `tutorials/agent-with-tavily-web-access/hybrid-agent-tutorial.ipynb`, `tutorials/agent-with-tavily-web-access/README.md`.
3. Inspect retrieval/memory/indexing through: `tutorials/tracing-with-langsmith/assets/wiki_agent_td.png`, `tutorials/ai-memory-with-cognee/.env.template`, `tutorials/ai-memory-with-cognee/cognee-ai-memory.ipynb`.
4. Verify behavior through test/eval files: `tutorials/tracing-with-langsmith/langsmith_basics.ipynb`, `tutorials/tracing-with-langsmith/assets/1.png`, `tutorials/tracing-with-langsmith/assets/2.png`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 End to end, code first tutorials for building production grade GenAI agents. From prototype to enterprise deployment.. 핵심 구조 신호는 Jupyter Notebook, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
