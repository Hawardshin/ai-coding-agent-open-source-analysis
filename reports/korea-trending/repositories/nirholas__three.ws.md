# nirholas/three.ws

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/nirholas/three.ws |
| local path | sources/nirholas__three.ws |
| HEAD | 7596224 |
| stars/forks | 0 / 0 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T23:29:12Z |
| trendScore / priorityScore | 75 / 251 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | docs/agent-briefs/R-3d-world-fun/README.md, docs/agent-briefs/W-world-online/README.md, docs/agent-briefs/X-prod-errors-2026-06-05/README.md |
| MCP / tool protocol | 497 | agent-payments-sdk/README.md, agent-protocol-sdk/README.md, agent-ui-sdk/README.md |
| Frontend / developer experience | 306 | agent-payments-sdk/README.md, agent-protocol-sdk/README.md, agent-ui-sdk/README.md |
| LLM wiki / memory / graph | 220 | specs/README.md, packages/ibm-x402-mcp/README.md, tasks/mcp-agent-selfsufficiency/README.md |
| Security / compliance | 141 | specs/README.md, agent-protocol-sdk/README.md, agent-ui-sdk/README.md |
| Spec / doc-driven workflow | 129 | docs/agent-briefs/X-prod-errors-2026-06-05/README.md, specs/README.md, specs/schema/README.md |
| RAG / retrieval | 41 | specs/README.md, packages/ibm-watsonx-mcp/README.md, packages/ibm-x402-mcp/README.md |
| Infra / observability | 7 | packages/ibm-watsonx-mcp/README.md, infra/README.md, tasks/irl-hardening/README.md |
| Local LLM / on-device inference | 6 | chat/README.md, solana-mobile/README.md, extensions/walk-avatar/README.md |
| Korean language / Korea domain | 1 | docs/ibm-x402-mcp.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 5652 |
| manifests | 40 |
| docs | 1044 |
| tests | 464 |
| ci/ops | 18 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | three.ws |
| headings | three.ws / $THREE / Table of Contents / What is three.ws? / Vision / Roadmap / Phase 0 — Foundations _(Shipped)_ / Phase 1 — Selfie → Avatar Engine / Phase 2 — Agent Personalization / Phase 3 — Onchain Economy |
| excerpt | three.ws Website https //three.ws · X / Twitter https //x.com/trythreews · GitHub https //github.com/nirholas/three.ws · $THREE on pump.fun https //pump.fun/FeMbDoX7R1Psc4GEcvJdsbNbZA3bfztcyDCatJVJpump https //github.com/user attachments/assets/d52515d1 cb04 4dd6 98bd fef233312dc4 Give your AI a body. three.ws is an open source, browser native 3D AI agent platform. Type a prompt and Forge https //three.ws/forge generates a textured 3D model — or drop a GLB you already have. Add an LLM brain, register on chain, and embed anywhere — no plugins, no server uploads, no installs required. Try it in 60 seconds open three.ws/forge https //three.ws/forge , type "a brass steampunk owl, full body" , an |


## 주요 파일

### Manifests

- docs/agent-briefs/R-3d-world-fun/README.md
- docs/agent-briefs/W-world-online/README.md
- docs/agent-briefs/X-prod-errors-2026-06-05/README.md
- specs/README.md
- specs/schema/README.md
- .agents/README.md
- agent-payments-sdk/README.md
- agent-protocol-sdk/README.md
- agent-ui-sdk/README.md
- docs/content/social/README.md
- docs/content/use-cases/README.md
- docs/pumpfun-program/README.md
- mcp-bridge/README.md
- mcp-server/README.md
- scripts/agent-wallet-demo/README.md
- scripts/agent-x402-demo/README.md
- solana-agent-sdk/README.md
- packages/avatar-agent-mcp/README.md
- packages/ibm-watsonx-mcp/README.md
- packages/ibm-x402-mcp/README.md


### Spec / Docs / Prompt Artifacts

- specs/README.md
- specs/schema/README.md
- CLAUDE.md
- specs/3D_AGENT_CARD.md
- specs/AGENT_MANIFEST.md
- specs/ENS_AGENT_CLAIM.md
- specs/MEMORY_SPEC.md
- prompts/monetization-prompts/22-unit-tests-monetization-service.md
- prompts/monetization-prompts/23-e2e-test-purchase-flow.md
- prompts/monetization/18_testing_the_service.md
- prompts/monetization/23-e2e-testing-purchase-flow.md
- prompts/monetization/24-end-to-end-monetization-testing.md
- prompts/pumpfun-usdc-deploy.md
- prompts/pumpfun-usdc-link-agent.md
- prompts/pumpfun-usdc-monitor-gate.md
- specs/schema/agent_delegations.sql
- specs/schema/agent_subscriptions.sql
- x402-buildout/prompts/28-e2e-tests.md
- docs/agent-briefs/X-prod-errors-2026-06-05/prompts/01-jsdom-esm-require-crash.md
- docs/agent-briefs/X-prod-errors-2026-06-05/prompts/02-upstash-request-limit.md


### Agent Instruction Files

- CLAUDE.md
- prompts/monetization-prompts/22-unit-tests-monetization-service.md
- prompts/monetization-prompts/23-e2e-test-purchase-flow.md
- prompts/monetization/18_testing_the_service.md
- prompts/monetization/23-e2e-testing-purchase-flow.md
- prompts/monetization/24-end-to-end-monetization-testing.md
- prompts/pumpfun-usdc-deploy.md
- prompts/pumpfun-usdc-link-agent.md
- prompts/pumpfun-usdc-monitor-gate.md
- x402-buildout/prompts/28-e2e-tests.md
- docs/agent-briefs/X-prod-errors-2026-06-05/prompts/01-jsdom-esm-require-crash.md
- docs/agent-briefs/X-prod-errors-2026-06-05/prompts/02-upstash-request-limit.md
- docs/agent-briefs/X-prod-errors-2026-06-05/prompts/03-chat-provider-exhaustion.md
- docs/agent-briefs/X-prod-errors-2026-06-05/prompts/04-missing-db-tables.md
- docs/agent-briefs/X-prod-errors-2026-06-05/prompts/05-birdeye-geckoterminal-429.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| api | 1021 |
| src | 759 |
| public | 622 |
| character-studio | 385 |
| tests | 383 |
| scripts | 344 |
| tasks | 230 |
| docs | 224 |
| data | 183 |
| chat | 165 |
| pages | 164 |
| packages | 156 |
| workers | 128 |
| solana-agent-sdk | 82 |


## 확장자 분포

| ext | count |
| --- | --- |
| .js | 2399 |
| .md | 1036 |
| .mjs | 376 |
| .html | 362 |
| .json | 311 |
| .sql | 163 |
| .ts | 161 |
| .svg | 130 |
| .css | 111 |
| .svelte | 93 |
| .fbx | 78 |
| [no-ext] | 77 |
| .glb | 66 |
| .jsx | 64 |
| .py | 53 |
| .txt | 29 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
