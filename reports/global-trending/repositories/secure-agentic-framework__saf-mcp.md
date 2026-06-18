# secure-agentic-framework/saf-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/secure-agentic-framework/saf-mcp |
| local path | sources/secure-agentic-framework__saf-mcp |
| HEAD | f2f5a7b |
| stars/forks | 348 / 92 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T18:38:04Z |
| trendScore / priorityScore | 161 / 472 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | techniques/SAF-T2107/examples/README.md, README.md, mitigations/SAF-M-10/README.md |
| Security / supply chain | 500 | techniques/SAF-T1009/examples/README.md, techniques/SAF-T1505/examples/README.md, techniques/SAF-T1603/examples/README.md |
| Observability / evaluation | 276 | techniques/SAF-T1009/examples/README.md, techniques/SAF-T1603/examples/README.md, techniques/SAF-T2107/examples/README.md |
| AI agent / orchestration | 269 | techniques/SAF-T2106/examples/README.md, README.md, mitigations/SAF-M-21/README.md |
| Cloud native / infrastructure | 210 | README.md, mitigations/SAF-M-24/README.md, mitigations/SAF-M-4/README.md |
| Data / ML platform | 157 | techniques/SAF-T1505/examples/README.md, techniques/SAF-T1603/examples/README.md, techniques/SAF-T2107/examples/README.md |
| RAG / retrieval / knowledge | 151 | techniques/SAF-T1505/examples/README.md, techniques/SAF-T1603/examples/README.md, README.md |
| Database / data infrastructure | 117 | techniques/SAF-T1505/examples/README.md, techniques/SAF-T1603/examples/README.md, README.md |
| Developer tools / DX | 60 | README.md, mitigations/SAF-M-2/README.md, mitigations/SAF-M-24/README.md |
| Coding agent / software automation | 33 | mitigations/SAF-M-33/README.md, mitigations/SAF-M-34/README.md, techniques/SAF-T1005/README.md |
| Frontend / app framework | 1 | techniques/SAF-T1109/README.md |
| Local LLM / inference | 1 | techniques/SAF-T1004/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 310 |
| manifests | 40 |
| docs | 141 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | SAF-MCP: Secure Agentic Framework for Model Context Protocol | SAF-MCP: Secure Agentic Framework for Model Context Protocol / About SAF-MCP / Key Features / How to Use This Framework / TTP Reference Table / SAF-MCP Tactics / TTP Overview / Summary Statistics / Tactic Distribution / Usage Guidelines | SAF MCP Secure Agentic Framework for Model Context Protocol SIG SAFE MCP Details Mailing List openssf sig safe mcp@lists.openssf.org https //lists.openssf.org/g/openssf sig safe mcp SIG Leads Sarah Evans; Frederick Kautz Maintainers Bishnu Bista; Sarah Evans; Frederick Kautz Meeting Time 1 00 PM PT PST/PDT Bi Weekly Slack OpenSSF sig safe mcp About SAF MCP SAF MCP is a comprehensive security framework for documenting and mitigating threats in the Model Context Protocol MCP ecosystem. This framework adapts the proven MITRE ATT&CK methodology specifically for MCP environments, providing structured documentation of adversary tactics, techniques, and procedures TTPs that target MCP implementatio |


## Key Files

### Manifests

- techniques/SAF-T1009/examples/README.md
- techniques/SAF-T1505/examples/README.md
- techniques/SAF-T1603/examples/README.md
- techniques/SAF-T2106/examples/README.md
- techniques/SAF-T2107/examples/README.md
- README.md
- mitigations/SAF-M-1/README.md
- mitigations/SAF-M-10/README.md
- mitigations/SAF-M-11/README.md
- mitigations/SAF-M-12/README.md
- mitigations/SAF-M-13/README.md
- mitigations/SAF-M-14/README.md
- mitigations/SAF-M-15/README.md
- mitigations/SAF-M-16/README.md
- mitigations/SAF-M-17/README.md
- mitigations/SAF-M-18/README.md
- mitigations/SAF-M-19/README.md
- mitigations/SAF-M-2/README.md
- mitigations/SAF-M-20/README.md
- mitigations/SAF-M-21/README.md


### Spec / Docs / Prompt Artifacts

- techniques/SAF-T1505/examples/requirements.txt
- techniques/SAF-T2106/examples/requirements.txt
- techniques/SAF-T2107/examples/requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| techniques | 241 |
| mitigations | 56 |
| .github | 1 |
| .gitignore | 1 |
| CITATION.cff | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| ID-MAP.md | 1 |
| LICENSE | 1 |
| LICENSE-APACHE-2.0 | 1 |
| LICENSE-CC-BY-4.0 | 1 |
| LICENSE-CSL-1.0 | 1 |
| MITIGATIONS.md | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 141 |
| .yml | 73 |
| .py | 44 |
| .json | 38 |
| .txt | 4 |
| .0 | 3 |
| .sh | 3 |
| [no-ext] | 2 |
| .cff | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
