# labring/FastGPT

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/labring/FastGPT |
| local path | sources/labring__FastGPT |
| HEAD | ffa1037 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T10:19:10Z |
| trendScore / priorityScore | 69 / 206 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 406 | sdk/storage/README.md, AGENTS.md, deploy/helm/opensandbox/examples/README.md |
| AI agent / tool use | 287 | AGENTS.md, deploy/helm/opensandbox/examples/README.md, README.md |
| Infra / observability | 179 | AGENTS.md, deploy/helm/opensandbox/examples/README.md, deploy/README.md |
| LLM wiki / memory / graph | 53 | deploy/helm/opensandbox/README.md, package.json, packages/global/test/core/ai/prompt/agent.test.ts |
| RAG / retrieval | 53 | README.md, .agents/skills/doc/i18n/SKILL.md, packages/service/test/common/vectorDB/controller.test.ts |
| MCP / tool protocol | 43 | AGENTS.md, README.md, packages/service/test/integrations/vectorDB/yml/docker-compose.yml |
| Spec / doc-driven workflow | 34 | AGENTS.md, deploy/helm/opensandbox/examples/README.md, projects/README.md |
| Security / compliance | 33 | deploy/helm/opensandbox/examples/README.md, deploy/helm/opensandbox/README.md, projects/code-sandbox/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, example-rich, frontend, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 4652 |
| manifests | 40 |
| docs | 599 |
| tests | 521 |
| ci/ops | 117 |
| spec artifacts | 17 |
| agent instruction files | 10 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | FastGPT |
| headings | FastGPT / 快速开始 / 输入命令拉取配置文件 / 启动 / 🛸 使用方式 / 💡 核心功能 / 💪 我们的项目 & 链接 / 🌿 第三方生态 / 🏘️ 社区交流群 / 🤝 贡献者 |
| excerpt | <div align="center" <a href="https //fastgpt.io/" <img src="/.github/imgs/logo.svg" width="120" height="120" alt="fastgpt logo" </a FastGPT <p align="center" <a href="./README en.md" English</a <a href="./README.md" 简体中文</a <a href="./README id.md" Bahasa Indonesia</a <a href="./README th.md" ไทย</a <a href="./README vi.md" Tiếng Việt</a <a href="./README ja.md" 日本語</a </p FastGPT 是一个 AI Agent 构建平台，提供开箱即用的数据处理、模型调用等能力，同时可以通过 Flow 可视化进行工作流编排，从而实现复杂的应用场景！ </div <p align="center" <a href="https //fastgpt.io/" <img height="21" src="https //img.shields.io/badge/在线使用 d4eaf7?style=flat square&logo=spoj&logoColor=7d09f1" alt="cloud" </a <a href="https //doc.fastgpt.io/guide/getting started" <img hei |


## 주요 파일

### Manifests

- packages/service/test/integrations/vectorDB/README.md
- .agents/skills/support/permission/add-permission/reference/README.md
- sdk/storage/README.md
- AGENTS.md
- deploy/helm/opensandbox/examples/README.md
- deploy/README.md
- document/README.md
- packages/README.md
- packages/service/test/integrations/README.md
- projects/README.md
- README.md
- deploy/helm/fastgpt/README.md
- deploy/helm/opensandbox/README.md
- deploy/helm/opensandbox/scripts/README.md
- projects/code-sandbox/README.md
- projects/marketplace/README.md
- projects/volume-manager/README.md
- sdk/otel/README.md
- sdk/sandbox-adapter/README.md
- packages/service/test/integrations/vectorDB/yml/docker-compose.yml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- packages/global/test/core/ai/prompt/agent.test.ts
- packages/global/test/core/ai/prompt/AIChat.test.ts
- packages/global/test/core/ai/prompt/utils.test.ts
- packages/global/core/ai/prompt/agent.ts
- packages/global/core/ai/prompt/AIChat.ts
- packages/global/core/ai/prompt/dataset.const.ts
- packages/global/core/ai/prompt/utils.ts
- packages/service/core/ai/llm/agentLoop/prompt/mainPrompt.ts
- packages/service/core/ai/llm/prompt/index.ts
- projects/code-sandbox/requirements.txt
- .agents/design/core/ai/agent-loop/requirements.md
- .agents/design/core/ai/sandbox/prd.md
- .agents/design/core/workflow/parallel-node/design.md
- .agents/design/variable-update-type-ops/design.md
- packages/service/core/app/tool/DESIGN.md
- packages/service/support/invoke/DESIGN.md


### Agent Instruction Files

- AGENTS.md
- packages/global/test/core/ai/prompt/agent.test.ts
- packages/global/test/core/ai/prompt/AIChat.test.ts
- packages/global/test/core/ai/prompt/utils.test.ts
- packages/global/core/ai/prompt/agent.ts
- packages/global/core/ai/prompt/AIChat.ts
- packages/global/core/ai/prompt/dataset.const.ts
- packages/global/core/ai/prompt/utils.ts
- packages/service/core/ai/llm/agentLoop/prompt/mainPrompt.ts
- packages/service/core/ai/llm/prompt/index.ts


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 1969 |
| projects | 1716 |
| document | 606 |
| sdk | 109 |
| .agents | 84 |
| deploy | 78 |
| .github | 27 |
| test | 25 |
| .vscode | 5 |
| scripts | 5 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .husky | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 2204 |
| .tsx | 822 |
| .svg | 547 |
| .mdx | 429 |
| .json | 196 |
| .js | 128 |
| .md | 116 |
| .yml | 49 |
| .yaml | 46 |
| [no-ext] | 34 |
| .txt | 15 |
| .scss | 14 |
| .rs | 10 |
| .sh | 10 |
| .template | 7 |
| .mjs | 5 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
