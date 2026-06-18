# ruvnet/agent-harness-generator

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/ruvnet/agent-harness-generator |
| local path | sources/ruvnet__agent-harness-generator |
| HEAD | b2506a1 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:42:00Z |
| trendScore / priorityScore | 68 / 231 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | examples-packages/openclaw/README.md, packages/agent-harness-generator-lib/README.md, packages/create-agent-harness/README.md |
| MCP / tool protocol | 500 | packages/create-agent-harness/README.md, packages/host-openclaw/README.md, examples-packages/README.md |
| Spec / doc-driven workflow | 371 | examples-packages/README.md, __tests__/browser-smoke/README.md, .codex/skills/example-harness/README.md |
| Security / compliance | 344 | examples-packages/openclaw/README.md, packages/agent-harness-generator-lib/README.md, examples-packages/codex/README.md |
| LLM wiki / memory / graph | 161 | examples-packages/README.md, .codex/skills/example-harness/README.md, examples-packages/copilot/README.md |
| Frontend / developer experience | 143 | packages/create-agent-harness/README.md, packages/host-openclaw/README.md, examples-packages/README.md |
| RAG / retrieval | 126 | packages/agent-harness-generator-lib/README.md, packages/create-agent-harness/README.md, examples-packages/README.md |
| Infra / observability | 6 | examples-packages/devops/README.md, examples-packages/example-aws/README.md, examples-packages/example-gcp/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1071 |
| manifests | 40 |
| docs | 209 |
| tests | 149 |
| ci/ops | 8 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | MetaHarness |
| headings | MetaHarness / Mint a custom AI agent harness from any repo. / What this is / What it gives you / New / Tune it to your project — then ship it as your own npm / Try it in 30 seconds / In the browser — zero install, nothing leaves the page / Or in the terminal — the same harness (behaviourally equivalent output) / Hosts |
| excerpt | <div align="center" MetaHarness Mint a custom AI agent harness from any repo. npx metaharness · open the Studio → https //ruvnet.github.io/agent harness generator/ <sub Repo ruvnet/agent harness generator · CLI metaharness · Library @ruvnet/agent harness generator </sub ! Open the Studio https //img.shields.io/badge/Studio open in browser ↗ 7c5cff?style=for the badge&logo=githubpages&logoColor=white https //ruvnet.github.io/agent harness generator/ ! User guide https //img.shields.io/badge/User guide plain language 22c55e?style=for the badge docs/USERGUIDE.md ! Tests — 568 passing https //img.shields.io/badge/tests 568%20passing 22c55e?style=for the badge docs/ARCHITECTURE.md ! npm publish s |


## 주요 파일

### Manifests

- examples-packages/openclaw/README.md
- packages/agent-harness-generator-lib/README.md
- packages/create-agent-harness/README.md
- packages/host-openclaw/README.md
- examples-packages/README.md
- examples/README.md
- __tests__/browser-smoke/README.md
- .codex/skills/example-harness/README.md
- examples-packages/claude-code/README.md
- examples-packages/codex/README.md
- examples-packages/coding/README.md
- examples-packages/copilot/README.md
- examples-packages/devops/README.md
- examples-packages/education/README.md
- examples-packages/example-ads/README.md
- examples-packages/example-aws/README.md
- examples-packages/example-azure/README.md
- examples-packages/example-bio/README.md
- examples-packages/example-datadog/README.md
- examples-packages/example-fhir/README.md


### Spec / Docs / Prompt Artifacts

- docs/ARCHITECTURE.md
- packages/create-agent-harness/templates/vertical_agentics/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_crm/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_education/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_exotic/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_gaming/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_gaming/.claude/skills/playtest-recap/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_repo-maintainer/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_ruview/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_sales/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/minimal/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/skills/media-plan/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/skills/run-swarm/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_ai/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_ai/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_ai/.claude/skills/eval-report/SKILL.md.tmpl


### Agent Instruction Files

- packages/create-agent-harness/templates/vertical_agentics/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_crm/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_education/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_exotic/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_gaming/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_gaming/.claude/skills/playtest-recap/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_repo-maintainer/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_ruview/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_sales/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/minimal/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/skills/media-plan/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/settings.json.tmpl


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 574 |
| examples-packages | 168 |
| docs | 110 |
| __tests__ | 46 |
| apps | 45 |
| .codex | 27 |
| scripts | 25 |
| crates | 24 |
| .claude-plugin | 16 |
| examples | 12 |
| .github | 8 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .tmpl | 294 |
| .ts | 235 |
| .md | 176 |
| .json | 139 |
| .mjs | 71 |
| [no-ext] | 59 |
| .lean | 33 |
| .toml | 20 |
| .rs | 19 |
| .tsx | 10 |
| .yml | 8 |
| .html | 2 |
| .js | 2 |
| .css | 1 |
| .example | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
