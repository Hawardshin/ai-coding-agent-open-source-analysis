# jnMetaCode/agency-orchestrator

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/jnMetaCode/agency-orchestrator |
| local path | sources/jnMetaCode__agency-orchestrator |
| HEAD | 494a739 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T21:39:37Z |
| trendScore / priorityScore | 69 / 247 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | agency-agents/examples/README.md, agency-agents/README.md, agency-agents/integrations/aider/README.md |
| Security / compliance | 500 | agency-agents/README.md, agency-agents/scripts/i18n/README.md, README.md |
| LLM wiki / memory / graph | 352 | agency-agents/README.md, agency-agents/integrations/mcp-memory/README.md, website/public/prompts/en/design/design-inclusive-visuals-specialist.md |
| Spec / doc-driven workflow | 312 | agency-agents/examples/README.md, agency-agents/README.md, agency-agents/integrations/kimi/README.md |
| Frontend / developer experience | 174 | agency-agents/README.md, agency-agents/integrations/aider/README.md, agency-agents/integrations/antigravity/README.md |
| MCP / tool protocol | 93 | agency-agents/README.md, agency-agents/integrations/mcp-memory/README.md, README.md |
| Infra / observability | 68 | agency-agents/README.md, website/public/prompts/en/marketing/marketing-seo-specialist.md, website/public/prompts/en/marketing/marketing-xiaohongshu-specialist.md |
| Korean language / Korea domain | 32 | agency-agents/README.md, website/public/prompts/en/specialized/specialized-korean-business-navigator.md |
| Local LLM / on-device inference | 13 | README.md, CLAUDE.md, docs/superpowers/specs/2026-03-26-mcp-server-design.md |
| RAG / retrieval | 8 | website/public/prompts/en/spatial-computing/terminal-integration-specialist.md, website/public/prompts/en/specialized/corporate-training-designer.md, website/public/prompts/en/specialized/customer-service.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 910 |
| manifests | 40 |
| docs | 674 |
| tests | 35 |
| ci/ops | 3 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Agency Orchestrator |
| headings | Agency Orchestrator / 网页 Studio（图形界面） / 一句话出结果 / 你能用它做什么 / 为什么需要 Agency Orchestrator / 3 步开始 / 第 1 步：安装 / 第 2 步：一句话跑起来 / 用你已有的 Claude 会员（无需 API key） / 或用 DeepSeek（充 10 块跑很久） |
| excerpt | Agency Orchestrator 中文 English ./README.en.md 一句话，让多个 AI 角色自动协作，几分钟出完整方案。 ! CI https //github.com/jnMetaCode/agency orchestrator/actions/workflows/ci.yml/badge.svg https //github.com/jnMetaCode/agency orchestrator/actions ! npm version https //img.shields.io/npm/v/agency orchestrator https //www.npmjs.com/package/agency orchestrator ! License Apache 2.0 https //img.shields.io/badge/License Apache%202.0 blue.svg ./LICENSE ! PRs Welcome https //img.shields.io/badge/PRs welcome brightgreen.svg ./CONTRIBUTING.md 一句话出结果 · 216 个专业 AI 角色 · YAML 零代码 · 10 种大模型 · 支持 key（推荐 DeepSeek），也有 7 种免 key 方式 📖 完整上手教程 https //mp.weixin.qq.com/s/XcGbkMb6TM6NLQiL7ICwbw — 从安装到实战，10 分钟上手 觉得有用？请点个 Star — 帮助更多人发现这个项目。 |


## 주요 파일

### Manifests

- agency-agents/examples/README.md
- agency-agents/README.md
- agency-agents/integrations/aider/README.md
- agency-agents/integrations/antigravity/README.md
- agency-agents/integrations/claude-code/README.md
- agency-agents/integrations/cursor/README.md
- agency-agents/integrations/gemini-cli/README.md
- agency-agents/integrations/github-copilot/README.md
- agency-agents/integrations/kimi/README.md
- agency-agents/integrations/mcp-memory/README.md
- agency-agents/integrations/openclaw/README.md
- agency-agents/integrations/opencode/README.md
- agency-agents/integrations/qwen/README.md
- agency-agents/integrations/README.md
- agency-agents/integrations/windsurf/README.md
- agency-agents/scripts/i18n/README.md
- integrations/openclaw/README.md
- integrations/antigravity/AGENTS.md
- README.md
- website/README.md


### Spec / Docs / Prompt Artifacts

- integrations/antigravity/AGENTS.md
- CLAUDE.md
- integrations/gemini-cli/GEMINI.md
- docs/superpowers/specs/2026-03-26-mcp-server-design.md
- website/public/prompts/en/design/design-inclusive-visuals-specialist.md
- website/public/prompts/en/engineering/engineering-filament-optimization-specialist.md
- website/public/prompts/en/marketing/marketing-baidu-seo-specialist.md
- website/public/prompts/en/marketing/marketing-seo-specialist.md
- website/public/prompts/en/marketing/marketing-video-optimization-specialist.md
- website/public/prompts/en/marketing/marketing-xiaohongshu-specialist.md
- website/public/prompts/en/paid-media/paid-media-tracking-specialist.md
- website/public/prompts/en/spatial-computing/terminal-integration-specialist.md
- website/public/prompts/en/spatial-computing/xr-cockpit-interaction-specialist.md
- website/public/prompts/en/specialized/accounts-payable-agent.md
- website/public/prompts/en/specialized/agentic-identity-trust.md
- website/public/prompts/en/specialized/agents-orchestrator.md
- website/public/prompts/en/specialized/automation-governance-architect.md
- website/public/prompts/en/specialized/blockchain-security-auditor.md
- website/public/prompts/en/specialized/compliance-auditor.md
- website/public/prompts/en/specialized/corporate-training-designer.md


### Agent Instruction Files

- integrations/antigravity/AGENTS.md
- CLAUDE.md
- integrations/gemini-cli/GEMINI.md
- website/public/prompts/en/design/design-inclusive-visuals-specialist.md
- website/public/prompts/en/engineering/engineering-filament-optimization-specialist.md
- website/public/prompts/en/marketing/marketing-baidu-seo-specialist.md
- website/public/prompts/en/marketing/marketing-seo-specialist.md
- website/public/prompts/en/marketing/marketing-video-optimization-specialist.md
- website/public/prompts/en/marketing/marketing-xiaohongshu-specialist.md
- website/public/prompts/en/paid-media/paid-media-tracking-specialist.md
- website/public/prompts/en/spatial-computing/terminal-integration-specialist.md
- website/public/prompts/en/spatial-computing/xr-cockpit-interaction-specialist.md
- website/public/prompts/en/specialized/accounts-payable-agent.md
- website/public/prompts/en/specialized/agentic-identity-trust.md
- website/public/prompts/en/specialized/agents-orchestrator.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| website | 477 |
| agency-agents | 239 |
| workflows | 55 |
| src | 37 |
| test | 31 |
| integrations | 26 |
| docs | 11 |
| .github | 5 |
| scripts | 4 |
| web | 4 |
| desktop | 3 |
| eval | 3 |
| examples | 3 |
| .gitignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 674 |
| .ts | 85 |
| .yaml | 56 |
| .tsx | 51 |
| .json | 11 |
| .sh | 8 |
| [no-ext] | 7 |
| .yml | 6 |
| .html | 3 |
| .js | 2 |
| .cjs | 1 |
| .css | 1 |
| .mdc | 1 |
| .mjs | 1 |
| .ps1 | 1 |
| .tape | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
