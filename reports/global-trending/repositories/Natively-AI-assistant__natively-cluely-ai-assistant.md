# Natively-AI-assistant/natively-cluely-ai-assistant

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant |
| local path | sources/Natively-AI-assistant__natively-cluely-ai-assistant |
| HEAD | 33feffb |
| stars/forks | 1491 / 356 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T18:47:49Z |
| trendScore / priorityScore | 150 / 447 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 233 | README.md, docs/embedding-migration-analysis.md, docs/embedding-migration-report.md |
| Security / supply chain | 227 | natively-browser/README.md, README.md, tests/intelligence/e2e/fixtures/README.md |
| Observability / evaluation | 188 | README.md, tests/intelligence/e2e/fixtures/README.md, docs/07-client-integration.md |
| Database / data infrastructure | 146 | README.md, tests/intelligence/e2e/fixtures/README.md, docs/embedding-migration-analysis.md |
| Cloud native / infrastructure | 102 | docs/12-code-review-security-reliability.md, docs/embedding-migration-analysis.md, docs/reembedding-plan.md |
| Data / ML platform | 85 | README.md, tests/intelligence/e2e/fixtures/README.md, docs/testing/SCREENSHOT_ANALYSIS_TEST_COVERAGE.md |
| Frontend / app framework | 73 | README.md, tests/intelligence/e2e/fixtures/README.md, electron/tsconfig.json |
| Developer tools / DX | 72 | README.md, docs/07-client-integration.md, docs/reembedding-plan.md |
| Local LLM / inference | 54 | README.md, docs/embedding-migration-analysis.md, docs/embedding-migration-report.md |
| Coding agent / software automation | 28 | README.md, docs/testing/SCREENSHOT_ANALYSIS_TEST_COVERAGE.md, docs/00b-pre-migration-review-findings.md |
| AI agent / orchestration | 25 | README.md, docs/embedding-migration-report.md, docs/reembedding-plan.md |
| MCP / agent interoperability | 1 |  |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1156 |
| manifests | 13 |
| docs | 99 |
| tests | 476 |
| ci/ops | 3 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | [Sponsored by Recall AI - API for desktop recording](https://docs.recall.ai/docs/desktop-sdk?utm_source=github&utm_medium=sponsorship&utm_campaign=evinjohnn-natively-ai-assistant) | [Sponsored by Recall AI - API for desktop recording](https://docs.recall.ai/docs/desktop-sdk?utm_source=github&utm_medium=sponsorship&utm_campaign=evinjohnn-natively-ai-assistant) / Natively — Free, Open-Source AI Interview Copilot & Meeting Assistant / The Free, Open-Source Cluely Clone / What Users Are Saying / Why Natively? / 3 things you should know before choosing an interview AI / ⭐ Star this repo — it matters / Demo / Full Comparison: Natively vs Cluely vs Final Round AI vs LockedIn AI vs Interview Coder / Why Natively wins | Sponsored by Recall AI API for desktop recording https //docs.recall.ai/docs/desktop sdk?utm source=github&utm medium=sponsorship&utm campaign=evinjohnn natively ai assistant If you’re looking for a hosted desktop recording API, consider checking out Recall.ai https //docs.recall.ai/docs/desktop sdk?utm source=github&utm medium=sponsorship&utm campaign=evinjohnn natively ai assistant , an API that records Zoom, Google Meet, Microsoft Teams, in person meetings, and more. <div align="center" <img src="assets/icon.png" width="150" alt="Natively AI Assistant Logo" Natively — Free, Open Source AI Interview Copilot & Meeting Assistant The best free alternative to Cluely, Final Round AI, LockedIn A |


## Key Files

### Manifests

- natively-browser/README.md
- README.md
- tests/intelligence/e2e/fixtures/README.md
- electron/tsconfig.json
- native-module/Cargo.toml
- native-module/package.json
- natively-browser/package.json
- natively-browser/tsconfig.json
- package.json
- renderer/package.json
- renderer/tsconfig.json
- tsconfig.json
- tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- ROADMAP.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| electron | 579 |
| src | 277 |
| tests | 96 |
| docs | 66 |
| scripts | 28 |
| native-module | 22 |
| natively-browser | 21 |
| renderer | 16 |
| .github | 12 |
| resources | 10 |
| assets | 3 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .mjs | 430 |
| .ts | 247 |
| .md | 99 |
| .woff2 | 74 |
| .tsx | 62 |
| .otf | 38 |
| .ttf | 38 |
| .json | 37 |
| .js | 18 |
| .txt | 17 |
| .mts | 15 |
| .rs | 15 |
| .csv | 10 |
| .html | 10 |
| .xml | 9 |
| .yml | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
