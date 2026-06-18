# cisco-ai-defense/mcp-scanner

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/cisco-ai-defense/mcp-scanner |
| local path | sources/cisco-ai-defense__mcp-scanner |
| HEAD | 67475ef |
| stars/forks | 965 / 116 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T21:35:52Z |
| trendScore / priorityScore | 171 / 461 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | docs/README.md, evals/README.md, claude-code-plugin/README.md |
| Security / supply chain | 500 | docs/README.md, evals/README.md, claude-code-plugin/README.md |
| Observability / evaluation | 116 | evals/README.md, examples/cli_end_to_end.sh, examples/generate_llm_prompt_example.py |
| Developer tools / DX | 84 | docs/README.md, README.md, examples/cli_end_to_end.sh |
| Database / data infrastructure | 48 | README.md, examples/generate_llm_prompt_example.py, examples/llm_prompt_format_json.txt |
| Cloud native / infrastructure | 43 | README.md, examples/llm_prompt_format_json.txt, examples/llm_prompt_read_local_file.txt |
| AI agent / orchestration | 36 | examples/llm_prompt_format_json.txt, examples/llm_prompt_read_local_file.txt, examples/llm_prompt_read_secure_file.txt |
| Coding agent / software automation | 28 | claude-code-plugin/README.md, README.md, mcpscanner/data/prompts/code_alignment_threat_analysis_prompt.md |
| Local LLM / inference | 21 | README.md, docs/llm-providers.md, claude-code-plugin/skills/security-scan/SKILL.md |
| Data / ML platform | 9 | examples/static_scanning_example.py, docs/readiness-scanning.md, docs/static-scanning.md |
| RAG / retrieval / knowledge | 6 | examples/llm_prompt_format_json.txt, examples/llm_prompt_read_local_file.txt, examples/llm_prompt_read_secure_file.txt |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 406 |
| manifests | 8 |
| docs | 40 |
| tests | 69 |
| ci/ops | 4 |
| spec artifacts | 12 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Scanner | MCP Scanner / Overview / Features / Installation / Prerequisites / Installing as a CLI tool / Installing for local development / Install as a dependency in other projects / then activate the virtual environment: / macOS and Linux: source .venv/bin/activate | MCP Scanner ! License https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Python https //img.shields.io/badge/python 3.11%2B blue.svg https //www.python.org/downloads/ ! PyPI https //img.shields.io/pypi/v/cisco ai mcp scanner.svg https //pypi.org/project/cisco ai mcp scanner/ ! Discord https //img.shields.io/badge/Discord Join%20Us 7289DA?logo=discord&logoColor=white https //discord.com/invite/nKWtDcXxtx ! Cisco AI Defense https //img.shields.io/badge/Cisco AI%20Defense 049fd9?logo=cisco&logoColor=white https //www.cisco.com/site/us/en/products/security/ai defense/index.html ! AI Security and Safety Framework https //img.shields.io/badge/AI |


## Key Files

### Manifests

- docs/README.md
- examples/example-malicious-servers/README.md
- evals/README.md
- claude-code-plugin/README.md
- README.md
- tests/behavioral/README.md
- tests/static_analysis/README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- examples/prompts/prompt_scanning.py
- examples/prompts/prompt_server.py
- examples/prompts/prompt_servers.py
- examples/prompts/quick_test.py
- examples/prompts/stdio_prompt_server.py
- mcpscanner/data/prompts/boilerplate_protection_rule_prompt.md
- mcpscanner/data/prompts/code_alignment_threat_analysis_prompt.md
- mcpscanner/data/prompts/readiness_judge_prompt.md
- mcpscanner/data/prompts/threat_analysis_prompt.md
- mcpscanner/data/prompts/threat_vulnerability_classification_prompt.md
- mcpscanner/data/prompts/unified_response_schema.md
- docs/architecture.md


### Agent Instruction Files

- examples/prompts/prompt_scanning.py
- examples/prompts/prompt_server.py
- examples/prompts/prompt_servers.py
- examples/prompts/quick_test.py
- examples/prompts/stdio_prompt_server.py
- mcpscanner/data/prompts/boilerplate_protection_rule_prompt.md
- mcpscanner/data/prompts/code_alignment_threat_analysis_prompt.md
- mcpscanner/data/prompts/readiness_judge_prompt.md
- mcpscanner/data/prompts/threat_analysis_prompt.md
- mcpscanner/data/prompts/threat_vulnerability_classification_prompt.md
- mcpscanner/data/prompts/unified_response_schema.md


## Top Directories

| dir | count |
| --- | --- |
| evals | 148 |
| mcpscanner | 96 |
| tests | 68 |
| examples | 50 |
| docs | 15 |
| claude-code-plugin | 13 |
| .github | 4 |
| .env.example | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CODEOWNERS | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 325 |
| .md | 40 |
| .json | 10 |
| .yara | 10 |
| .txt | 4 |
| .yml | 4 |
| .rego | 3 |
| .sh | 3 |
| [no-ext] | 3 |
| .example | 1 |
| .spec | 1 |
| .toml | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
