# NirDiamant/agents-towards-production 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

End-to-end, code-first tutorials for building production-grade GenAI agents. From prototype to enterprise deployment.

## 요약

- 조사 단위: `sources/NirDiamant__agents-towards-production` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 214 files, 58 directories, depth score 101, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tutorials/agent-with-mcp/mcp-tutorial.ipynb, tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png, tutorials/agent-with-mcp/assets/customized_mcp_host.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | NirDiamant/agents-towards-production |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 20762 |
| Forks | 2759 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/NirDiamant__agents-towards-production](../../../../sources/NirDiamant__agents-towards-production) |
| 기존 보고서 | [reports/global-trending/repositories/NirDiamant__agents-towards-production.md](../../../global-trending/repositories/NirDiamant__agents-towards-production.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 214 / 58 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, assets, images, tutorials |
| 상위 확장자 | .png: 93, .ipynb: 28, .md: 20, .svg: 11, (none): 11, .py: 10, .txt: 9, .pdf: 6, .bin: 4, .jpg: 3, .kt: 3, .bat: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| images | top-level component | 1 |
| tutorials | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 70 | [tutorials/kotlin-agent-with-koog/assets/tool-calling-flow.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/kotlin-agent-with-koog/assets/tool-calling-flow.png)<br>[tutorials/agent-with-tavily-web-access/hybrid-agent-tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/hybrid-agent-tutorial.ipynb)<br>[tutorials/agent-with-tavily-web-access/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/README.md)<br>[tutorials/agent-with-tavily-web-access/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/requirements.txt)<br>[tutorials/agent-with-tavily-web-access/search-extract-crawl.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/search-extract-crawl.ipynb)<br>[tutorials/agent-with-tavily-web-access/web-agent-tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/web-agent-tutorial.ipynb)<br>[tutorials/agent-with-tavily-web-access/supplemental/vectorize_tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/supplemental/vectorize_tutorial.ipynb)<br>[tutorials/agent-with-tavily-web-access/supplemental/docs/amazon.pdf](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/supplemental/docs/amazon.pdf) |
| mcp | 6 | [tutorials/agent-with-mcp/mcp-tutorial.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/mcp-tutorial.ipynb)<br>[tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png)<br>[tutorials/agent-with-mcp/assets/customized_mcp_host.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/customized_mcp_host.png)<br>[tutorials/agent-with-mcp/assets/mcp_architecture.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/mcp_architecture.png)<br>[tutorials/agent-with-mcp/assets/track_bitcoin_price_with_mcp.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/track_bitcoin_price_with_mcp.png)<br>[tutorials/agent-with-mcp/assets/track_crypto_market_data_with_mcp.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/track_crypto_market_data_with_mcp.png) |
| retrieval | 26 | [tutorials/tracing-with-langsmith/assets/wiki_agent_td.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/wiki_agent_td.png)<br>[tutorials/ai-memory-with-cognee/.env.template](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/.env.template)<br>[tutorials/ai-memory-with-cognee/cognee-ai-memory.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/cognee-ai-memory.ipynb)<br>[tutorials/ai-memory-with-cognee/guido_contributions.html](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/guido_contributions.html)<br>[tutorials/ai-memory-with-cognee/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/README.md)<br>[tutorials/ai-memory-with-cognee/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/requirements.txt)<br>[tutorials/ai-memory-with-cognee/data/cognee_diagram.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/data/cognee_diagram.png)<br>[tutorials/ai-memory-with-cognee/data/copilot_conversations.json](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/data/copilot_conversations.json) |
| spec | 14 | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt)<br>[tutorials/on-prem-llm-ollama/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/on-prem-llm-ollama/requirements.txt)<br>[tutorials/kotlin-agent-with-koog/assets/architecture-diagram.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/kotlin-agent-with-koog/assets/architecture-diagram.png)<br>[tutorials/ai-memory-with-cognee/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/requirements.txt)<br>[tutorials/agent-with-tavily-web-access/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/requirements.txt)<br>[tutorials/agent-with-streamlit-ui/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-streamlit-ui/requirements.txt)<br>[tutorials/agent-with-mcp/assets/mcp_architecture.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-mcp/assets/mcp_architecture.png)<br>[tutorials/agent-security-with-llamafirewall/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/requirements.txt) |
| eval | 12 | [tutorials/tracing-with-langsmith/langsmith_basics.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/langsmith_basics.ipynb)<br>[tutorials/tracing-with-langsmith/assets/1.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/1.png)<br>[tutorials/tracing-with-langsmith/assets/2.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/2.png)<br>[tutorials/tracing-with-langsmith/assets/3.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/3.png)<br>[tutorials/tracing-with-langsmith/assets/wiki_agent_td.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/wiki_agent_td.png)<br>[tutorials/runpod-gpu-deploy/assets/test_request_dashboard.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/assets/test_request_dashboard.png)<br>[tutorials/runpod-gpu-deploy/assets/test_request_input.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/assets/test_request_input.png)<br>[tutorials/runpod-gpu-deploy/assets/test_request_output.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/assets/test_request_output.png) |
| security | 18 | [tutorials/agent-security-with-llamafirewall/hello-llama.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/hello-llama.ipynb)<br>[tutorials/agent-security-with-llamafirewall/input-guardrail.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/input-guardrail.ipynb)<br>[tutorials/agent-security-with-llamafirewall/output-guardrail.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/output-guardrail.ipynb)<br>[tutorials/agent-security-with-llamafirewall/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/README.md)<br>[tutorials/agent-security-with-llamafirewall/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/requirements.txt)<br>[tutorials/agent-security-with-llamafirewall/tools-security.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/tools-security.ipynb)<br>[tutorials/agent-security-with-llamafirewall/assets/input-guardrail.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/assets/input-guardrail.png)<br>[tutorials/agent-security-with-llamafirewall/assets/openai-trace.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/assets/openai-trace.png) |
| ci | 0 | 명확하지 않음 |
| container | 7 | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile)<br>[tutorials/docker-intro/examples/ex5/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex5/Dockerfile)<br>[tutorials/docker-intro/examples/ex4/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex4/Dockerfile)<br>[tutorials/docker-intro/examples/ex3/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex3/Dockerfile)<br>[tutorials/docker-intro/examples/ex2/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex2/Dockerfile)<br>[tutorials/docker-intro/examples/ex1/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex1/Dockerfile)<br>[tutorials/docker-intro/assets/dockerfile to container.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/assets/dockerfile to container.png) |
| instruction | 0 | 명확하지 않음 |
| docs | 20 | [README.md](../../../../sources/NirDiamant__agents-towards-production/README.md)<br>[tutorials/runpod-gpu-deploy/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/README.md)<br>[tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/README.md)<br>[tutorials/kotlin-agent-with-koog/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/kotlin-agent-with-koog/README.md)<br>[tutorials/docker-intro/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/README.md)<br>[tutorials/arcade-secure-tool-calling/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/arcade-secure-tool-calling/README.md)<br>[tutorials/ai-memory-with-cognee/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/README.md)<br>[tutorials/agent-with-tavily-web-access/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/README.md) |
| config | 8 | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt)<br>[tutorials/on-prem-llm-ollama/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/on-prem-llm-ollama/requirements.txt)<br>[tutorials/ai-memory-with-cognee/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/ai-memory-with-cognee/requirements.txt)<br>[tutorials/agent-with-tavily-web-access/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-tavily-web-access/requirements.txt)<br>[tutorials/agent-with-streamlit-ui/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-with-streamlit-ui/requirements.txt)<br>[tutorials/agent-security-with-llamafirewall/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/requirements.txt)<br>[tutorials/agent-security-apex/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-apex/requirements.txt)<br>[tutorials/agent-RAG-with-Contextual/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-RAG-with-Contextual/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 12 | [tutorials/tracing-with-langsmith/langsmith_basics.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/langsmith_basics.ipynb)<br>[tutorials/tracing-with-langsmith/assets/1.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/1.png)<br>[tutorials/tracing-with-langsmith/assets/2.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/2.png)<br>[tutorials/tracing-with-langsmith/assets/3.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/3.png)<br>[tutorials/tracing-with-langsmith/assets/wiki_agent_td.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/tracing-with-langsmith/assets/wiki_agent_td.png)<br>[tutorials/runpod-gpu-deploy/assets/test_request_dashboard.png](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/assets/test_request_dashboard.png) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 7 | [tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile)<br>[tutorials/docker-intro/examples/ex5/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex5/Dockerfile)<br>[tutorials/docker-intro/examples/ex4/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex4/Dockerfile)<br>[tutorials/docker-intro/examples/ex3/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex3/Dockerfile)<br>[tutorials/docker-intro/examples/ex2/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex2/Dockerfile)<br>[tutorials/docker-intro/examples/ex1/Dockerfile](../../../../sources/NirDiamant__agents-towards-production/tutorials/docker-intro/examples/ex1/Dockerfile) |
| 보안/정책 | 18 | [tutorials/agent-security-with-llamafirewall/hello-llama.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/hello-llama.ipynb)<br>[tutorials/agent-security-with-llamafirewall/input-guardrail.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/input-guardrail.ipynb)<br>[tutorials/agent-security-with-llamafirewall/output-guardrail.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/output-guardrail.ipynb)<br>[tutorials/agent-security-with-llamafirewall/README.md](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/README.md)<br>[tutorials/agent-security-with-llamafirewall/requirements.txt](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/requirements.txt)<br>[tutorials/agent-security-with-llamafirewall/tools-security.ipynb](../../../../sources/NirDiamant__agents-towards-production/tutorials/agent-security-with-llamafirewall/tools-security.ipynb) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tutorials/agent-with-mcp/mcp-tutorial.ipynb`, `tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png`, `tutorials/agent-with-mcp/assets/customized_mcp_host.png`.
2. agent/tool runtime 매핑: `tutorials/kotlin-agent-with-koog/assets/tool-calling-flow.png`, `tutorials/agent-with-tavily-web-access/hybrid-agent-tutorial.ipynb`, `tutorials/agent-with-tavily-web-access/README.md`.
3. retrieval/memory/indexing 확인: `tutorials/tracing-with-langsmith/assets/wiki_agent_td.png`, `tutorials/ai-memory-with-cognee/.env.template`, `tutorials/ai-memory-with-cognee/cognee-ai-memory.ipynb`.
4. test/eval 파일로 동작 검증: `tutorials/tracing-with-langsmith/langsmith_basics.ipynb`, `tutorials/tracing-with-langsmith/assets/1.png`, `tutorials/tracing-with-langsmith/assets/2.png`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 End to end, code first tutorials for building production grade GenAI agents. From prototype to enterprise deployment.. 핵심 구조 신호는 Jupyter Notebook, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
