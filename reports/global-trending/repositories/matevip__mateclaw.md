# matevip/mateclaw

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/matevip/mateclaw |
| local path | sources/matevip__mateclaw |
| HEAD | 8f8d43d |
| stars/forks | 624 / 199 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T23:01:46Z |
| trendScore / priorityScore | 151 / 443 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, mateclaw-server/src/main/resources/skills/p5js/README.md, mateclaw-server/src/main/resources/docs/en/agents.md |
| MCP / agent interoperability | 246 | README.md, mateclaw-server/src/main/resources/docs/en/agents.md, mateclaw-server/src/main/resources/docs/zh/agents.md |
| Frontend / app framework | 116 | README.md, mateclaw-server/src/main/resources/docs/en/agents.md, mateclaw-server/src/main/resources/docs/zh/agents.md |
| Security / supply chain | 99 | README.md, docker-compose.yml, mateclaw-server/pom.xml |
| Database / data infrastructure | 45 | README.md, docker-compose.yml, mateclaw-server/Dockerfile |
| Cloud native / infrastructure | 40 | README.md, docker-compose.yml, mateclaw-server/Dockerfile |
| Developer tools / DX | 32 | README.md, mateclaw-server/src/main/resources/skills/research-paper-writing/templates/README.md, mateclaw-server/src/main/resources/docs/en/agents.md |
| RAG / retrieval / knowledge | 18 | README.md, mateclaw-server/src/main/resources/docs/en/agents.md, mateclaw-server/pom.xml |
| Data / ML platform | 15 | README.md, mateclaw-server/src/main/resources/skills/p5js/README.md, mateclaw-server/src/main/resources/skills/research-paper-writing/templates/aaai2026/README.md |
| Coding agent / software automation | 11 | README.md, mateclaw-server/src/main/resources/skills/research-paper-writing/templates/aaai2026/README.md, mateclaw-server/src/main/resources/skills/research-paper-writing/templates/README.md |
| Observability / evaluation | 6 | README.md, mateclaw-server/src/main/resources/docs/en/mcp.md, mateclaw-server/src/main/resources/docs/en/security.md |
| Local LLM / inference | 4 | README.md, mateclaw-server/src/main/resources/docs/en/security.md, mateclaw-server/src/main/resources/docs/zh/security.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2884 |
| manifests | 20 |
| docs | 614 |
| tests | 482 |
| ci/ops | 3 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MateClaw | MateClaw / Three things that make it different / 1 · Your AI doesn't die when a model does / 2 · Knowledge that links itself / 3 · One product, five surfaces / What's in the box / Digital employees, not chatbots / Knowledge & memory / Skills · MCP · ACP — three ways to extend capability / Business orchestration (1.3.0+) | <div align="center" <p align="center" <img src="mateclaw ui/public/logo/mateclaw logo s.png" alt="MateClaw Logo" width="120" </p MateClaw <p align="center" <b Your second brain</b </p <p align="center" <sub <b Agent Harness · Spring Boot inside · One JAR to ship</b </sub </p ! GitHub Repo https //img.shields.io/badge/GitHub Repo black.svg?logo=github https //github.com/matevip/mateclaw ! Documentation https //img.shields.io/badge/Docs Website green.svg?logo=readthedocs&label=Docs https //claw.mate.vip/docs ! Live Demo https //img.shields.io/badge/Demo Online orange.svg?logo=vercel&label=Demo https //claw demo.mate.vip ! Website https //img.shields.io/badge/Website claw.mate.vip blue.svg?logo |


## Key Files

### Manifests

- README.md
- mateclaw-server/src/main/resources/skills/p5js/README.md
- mateclaw-server/src/main/resources/skills/research-paper-writing/templates/aaai2026/README.md
- mateclaw-server/src/main/resources/skills/research-paper-writing/templates/acl/README.md
- mateclaw-server/src/main/resources/skills/research-paper-writing/templates/colm2025/README.md
- mateclaw-server/src/main/resources/skills/research-paper-writing/templates/README.md
- mateclaw-plugin-sample/pom.xml
- docker-compose.yml
- mateclaw-plugin-api/pom.xml
- mateclaw-server/Dockerfile
- mateclaw-server/pom.xml
- mateclaw-ui/package.json
- mateclaw-ui/tsconfig.json
- mateclaw-ui/vite.config.ts
- mateclaw-webchat/package.json
- mateclaw-webchat/tsconfig.json
- mateclaw-webchat/vite.config.ts
- pom.xml
- docker/searxng/Dockerfile
- mateclaw-server/src/main/resources/skills/research-paper-writing/templates/neurips2025/Makefile


### Spec / Docs / Prompt Artifacts

- mateclaw-server/src/main/resources/docs/en/agents.md
- mateclaw-server/src/main/resources/docs/zh/agents.md
- mateclaw-server/src/main/java/vip/mate/agent/prompt/PromptLoader.java
- mateclaw-server/src/main/resources/prompts/context/structured-summary-system.txt
- mateclaw-server/src/main/resources/prompts/context/structured-summary-update.txt
- mateclaw-server/src/main/resources/prompts/context/structured-summary-user.txt
- mateclaw-server/src/main/resources/prompts/graph/limit-exceeded-system.txt
- mateclaw-server/src/main/resources/prompts/graph/limit-exceeded-user.txt
- mateclaw-server/src/main/resources/prompts/graph/summarize-system.txt
- mateclaw-server/src/main/resources/prompts/graph/summarize-user.txt
- mateclaw-server/src/main/resources/prompts/memory/consolidate-structured-system.txt
- mateclaw-server/src/main/resources/prompts/memory/consolidate-structured-user.txt
- mateclaw-server/src/main/resources/prompts/memory/contradiction-batch.txt
- mateclaw-server/src/main/resources/prompts/memory/emergence-focused-user.txt
- mateclaw-server/src/main/resources/prompts/memory/emergence-scored-user.txt
- mateclaw-server/src/main/resources/prompts/memory/emergence-system.txt
- mateclaw-server/src/main/resources/prompts/memory/emergence-user.txt
- mateclaw-server/src/main/resources/prompts/memory/nudge-system.txt
- mateclaw-server/src/main/resources/prompts/memory/nudge-user.txt
- mateclaw-server/src/main/resources/prompts/memory/soul-summarize.txt


### Agent Instruction Files

- mateclaw-server/src/main/resources/docs/en/agents.md
- mateclaw-server/src/main/resources/docs/zh/agents.md
- mateclaw-server/src/main/java/vip/mate/agent/prompt/PromptLoader.java
- mateclaw-server/src/main/resources/prompts/context/structured-summary-system.txt
- mateclaw-server/src/main/resources/prompts/context/structured-summary-update.txt
- mateclaw-server/src/main/resources/prompts/context/structured-summary-user.txt
- mateclaw-server/src/main/resources/prompts/graph/limit-exceeded-system.txt
- mateclaw-server/src/main/resources/prompts/graph/limit-exceeded-user.txt
- mateclaw-server/src/main/resources/prompts/graph/summarize-system.txt
- mateclaw-server/src/main/resources/prompts/graph/summarize-user.txt
- mateclaw-server/src/main/resources/prompts/memory/consolidate-structured-system.txt
- mateclaw-server/src/main/resources/prompts/memory/consolidate-structured-user.txt
- mateclaw-server/src/main/resources/prompts/memory/contradiction-batch.txt
- mateclaw-server/src/main/resources/prompts/memory/emergence-focused-user.txt
- mateclaw-server/src/main/resources/prompts/memory/emergence-scored-user.txt


## Top Directories

| dir | count |
| --- | --- |
| mateclaw-server | 2535 |
| mateclaw-ui | 312 |
| mateclaw-plugin-api | 8 |
| mateclaw-webchat | 6 |
| .github | 5 |
| assets | 4 |
| mateclaw-plugin-sample | 3 |
| docker | 2 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| docker-compose.yml | 1 |
| docs | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 1660 |
| .sql | 447 |
| .md | 310 |
| .vue | 164 |
| .ts | 90 |
| .txt | 59 |
| .svg | 54 |
| .json | 26 |
| .sty | 13 |
| .tex | 11 |
| .yml | 11 |
| [no-ext] | 8 |
| .xml | 7 |
| .html | 6 |
| .bib | 5 |
| .bst | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
