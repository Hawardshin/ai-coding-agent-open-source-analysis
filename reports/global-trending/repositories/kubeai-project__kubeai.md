# kubeai-project/kubeai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/kubeai-project/kubeai |
| local path | sources/kubeai-project__kubeai |
| HEAD | caa8250 |
| stars/forks | 1210 / 125 |
| language | Go |
| license |  |
| pushedAt | 2026-06-16T01:04:32Z |
| trendScore / priorityScore | 142 / 403 |


## Interpretation

- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 488 | docs/README.md, examples/priority-examples/README.md, benchmarks/multi-turn-chat-go/README.md |
| Local LLM / inference | 247 | docs/README.md, benchmarks/chat-py/README.md, benchmarks/multi-turn-chat-go/README.md |
| Observability / evaluation | 208 | docs/README.md, benchmarks/multi-turn-chat-go/README.md, benchmarks/multi-turn-chat-k6/scenarios/least-load-vs-prefix-hash-70b-8r/README.md |
| Data / ML platform | 170 | docs/README.md, benchmarks/chat-py/Dockerfile, benchmarks/multi-turn-chat-go/hack/Dockerfile |
| RAG / retrieval / knowledge | 123 | docs/README.md, api/openai/v1/README.md, docs/how-to/configure-embedding-models.md |
| Developer tools / DX | 48 | docs/README.md, go.mod, Makefile |
| Security / supply chain | 18 | go.mod, docs/reference/kubernetes-api.md, .github/workflows/release-helm-chart.yml |
| Frontend / app framework | 5 | docs/how-to/authenticate-to-model-repos.md, docs/tutorials/private-deep-chat.md |
| AI agent / orchestration | 2 | docs/blog/posts/llm-load-balancing-at-scale-chwbl.md |
| Database / data infrastructure | 2 | examples/private-deep-chat/main.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 399 |
| manifests | 28 |
| docs | 56 |
| tests | 88 |
| ci/ops | 24 |
| spec artifacts | 4 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| docs/README.md | KubeAI: AI Inferencing Operator | KubeAI: AI Inferencing Operator / Highlights / Why KubeAI? / Better performance at scale / Simplicity and ease of use / OpenAI API Compatibility / Architecture / Adopters / Local Quickstart / You might need to stop and remove the existing machine: | KubeAI AI Inferencing Operator <p align="left" <img src="https //img.shields.io/github/license/kubeai project/kubeai"/ <img src="https //img.shields.io/github/go mod/go version/kubeai project/kubeai"/ <img src="https //img.shields.io/github/stars/kubeai project/kubeai"/ <img src="https //img.shields.io/github/contributors/kubeai project/kubeai" / <img src="https //img.shields.io/github/last commit/kubeai project/kubeai/main" / </p Deploy and scale machine learning models on Kubernetes. Built for LLMs, embeddings, reranking and speech to text. Highlights What is it for? 🚀 LLM Inferencing Operate vLLM and Ollama servers 🎙️ Speech Processing Transcribe audio with FasterWhisper 🔢 Vector Embed |


## Key Files

### Manifests

- docs/README.md
- examples/priority-examples/README.md
- benchmarks/chat-py/README.md
- benchmarks/multi-turn-chat-go/README.md
- benchmarks/multi-turn-chat-k6/scenarios/least-load-vs-prefix-hash-70b-8r/README.md
- benchmarks/multi-turn-chat-k6/scenarios/least-load-vs-prefix-hash/README.md
- api/openai/v1/README.md
- examples/k8s-api-clients/python/requirements.txt
- docs/requirements.txt
- examples/ollama-builtin/Dockerfile
- examples/private-deep-chat/Dockerfile
- examples/private-deep-chat/go.mod
- test/e2e/openai-python-client/requirements.txt
- benchmarks/chat-py/Dockerfile
- benchmarks/chat-py/requirements.txt
- benchmarks/multi-turn-chat-go/Dockerfile
- benchmarks/multi-turn-chat-go/go.mod
- benchmarks/multi-turn-chat-go/hack/Dockerfile
- benchmarks/multi-turn-chat-go/Makefile
- benchmarks/multi-turn-chat-go/pyproject.toml


### Spec / Docs / Prompt Artifacts

- examples/k8s-api-clients/python/requirements.txt
- docs/requirements.txt
- test/e2e/openai-python-client/requirements.txt
- benchmarks/chat-py/requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| test | 67 |
| internal | 58 |
| benchmarks | 55 |
| manifests | 49 |
| docs | 46 |
| charts | 27 |
| api | 24 |
| hack | 23 |
| examples | 21 |
| .github | 9 |
| proposals | 4 |
| components | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .yaml | 143 |
| .go | 100 |
| .md | 50 |
| [no-ext] | 27 |
| .sh | 23 |
| .json | 11 |
| .yml | 11 |
| .py | 8 |
| .txt | 6 |
| .js | 4 |
| .mod | 3 |
| .output | 3 |
| .html | 2 |
| .ipynb | 2 |
| .sum | 2 |
| .dockerfile | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
