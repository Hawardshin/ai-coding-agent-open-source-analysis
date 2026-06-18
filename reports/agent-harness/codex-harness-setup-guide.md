# Codex Harness Setup Guide from Claude Code Patterns

Generated: 2026-06-18T02:20:43.625Z

This guide translates the Claude Code patterns in the 1000+ material corpus into Codex settings you can use as a repeatable harness.

## 1. Repository Instructions

Create `AGENTS.md` at the repo root. Keep it short and operational.

```md
# AGENTS.md

## Source routing
- Read README, package manifests, and architecture docs before editing.
- Use rg for source search.
- Prefer existing local helper APIs and tests.

## Verification
- For JavaScript/TypeScript changes, run npm test or the nearest package test command.
- For docs/data changes, run npm run build:web.
- Do not mark work complete until generated files and web index counts match the requested scope.

## Safety
- Do not commit secrets, credentials, auth tokens, or local Codex state.
- Do not run destructive git commands unless explicitly requested.
```

## 2. Project Codex Config

Use a project-scoped config only after the repo is trusted. Keep provider/auth settings in user-level config.

```toml
# .codex/config.toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"
project_doc_max_bytes = 65536
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]

[sandbox_workspace_write]
network_access = false

[features]
hooks = true

[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
enabled = true
required = false
default_tools_approval_mode = "prompt"
```

## 3. Hook Guardrails

Use hooks for small checks: dangerous shell commands, accidental secret prompts, validation reminders, and audit logging.

```toml
[[hooks.PreToolUse]]
matcher = "^Bash$"

[[hooks.PreToolUse.hooks]]
type = "command"
command = '/usr/bin/python3 "$(git rev-parse --show-toplevel)/.codex/hooks/pre_tool_use_policy.py"'
timeout = 30
statusMessage = "Checking Bash command"
```

Minimal policy hook:

```python
#!/usr/bin/env python3
import json
import re
import sys

event = json.load(sys.stdin)
command = json.dumps(event)
blocked = [
    r"git\s+reset\s+--hard",
    r"rm\s+-rf\s+/",
    r"OPENAI_API_KEY=",
    r"CODEX_API_KEY=",
]

if any(re.search(pattern, command, re.I) for pattern in blocked):
    print(json.dumps({"decision": "block", "reason": "Blocked by local Codex harness policy."}))
else:
    print(json.dumps({"decision": "allow"}))
```

## 4. Non-Interactive Harness

Use `codex exec` when the job needs stable logs, JSONL events, and machine-readable output.

```bash
codex exec --json \
  --sandbox workspace-write \
  --output-schema .github/codex/schemas/review-result.schema.json \
  -o .codex-runs/review-result.json \
  "Review the current diff. Run the documented tests. Return risks, files inspected, commands run, and pass/fail."
```

## 5. GitHub Action Split

Use one job to let Codex generate a patch artifact with read-only repository credentials and another job to open the PR. Keep OpenAI credentials scoped to the Codex step only.

```yaml
name: Codex review
on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  codex_review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          persist-credentials: false
      - uses: openai/codex-action@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt-file: .github/codex/prompts/review.md
          sandbox: read-only
          output-file: codex-review.md
```

## 6. Evaluation Harness Shape

Store a small benchmark set in `.github/codex/tasks/*.md`:

- source-scan task: must identify entry points, config, tests, and risky files.
- bugfix task: must reproduce failure, patch minimal files, rerun test.
- review task: must produce findings with file references and severity.
- migration task: must produce plan, diff summary, and rollback note.

Score each run on:

- Did it load `AGENTS.md` and relevant docs?
- Did it use MCP only when the task needed external state?
- Did hooks block dangerous commands?
- Did it run the required tests?
- Did the final JSON match schema?
- Did the patch avoid unrelated changes?

## Source Patterns Behind This Guide

| title | type | url |
| --- | --- | --- |
| Agentic AI Foundation / MCP open governance coverage | industry-report | https://www.itpro.com/software/open-source/anthropic-says-mcp-will-stay-open-neutral-and-community-driven-after-donating-project-to-linux-foundation |
| Codex Configuration Reference | official-reference | https://developers.openai.com/codex/config-reference |
| Codex custom instructions with AGENTS.md | official-guide | https://developers.openai.com/codex/guides/agents-md |
| Codex GitHub Action | official-ci-doc | https://developers.openai.com/codex/github-action |
| Channels reference | official-doc | https://code.claude.com/docs/en/channels-reference.md |
| Connect Claude Code to tools via MCP | official-doc | https://code.claude.com/docs/en/mcp.md |
| Connect to external tools with MCP | official-doc | https://code.claude.com/docs/en/agent-sdk/mcp.md |
| Connect to MCP servers | official-doc | https://code.claude.com/docs/en/mcp-quickstart.md |
| Control MCP server access for your organization | official-doc | https://code.claude.com/docs/en/managed-mcp.md |
| Create plugins | official-doc | https://code.claude.com/docs/en/plugins.md |
| Debug your configuration | official-doc | https://code.claude.com/docs/en/debug-your-config.md |
| Extend Claude Code | official-doc | https://code.claude.com/docs/en/features-overview.md |


| title | type | url |
| --- | --- | --- |
| Codex Configuration Reference | official-reference | https://developers.openai.com/codex/config-reference |
| Codex custom instructions with AGENTS.md | official-guide | https://developers.openai.com/codex/guides/agents-md |
| Codex GitHub Action | official-ci-doc | https://developers.openai.com/codex/github-action |
| How we contain Claude across products | engineering-blog | https://www.anthropic.com/engineering/how-we-contain-claude |
| Microsoft Security: Claude Code GitHub Action case | security-case-study | https://www.microsoft.com/en-us/security/blog/2026/06/05/securing-ci-cd-in-agentic-world-claude-code-github-action-case/ |
| prempti Codex hook interceptor | open-source-hook-example | https://github.com/falcosecurity/prempti/blob/main/hooks/codex/README.md |
| Automate actions with hooks | official-doc | https://code.claude.com/docs/en/hooks-guide.md |
| Channels reference | official-doc | https://code.claude.com/docs/en/channels-reference.md |
| Choose a permission mode | official-doc | https://code.claude.com/docs/en/permission-modes.md |
| Choose a sandbox environment | official-doc | https://code.claude.com/docs/en/sandbox-environments.md |
| Configure permissions | official-doc | https://code.claude.com/docs/en/agent-sdk/permissions.md |
| Configure permissions | official-doc | https://code.claude.com/docs/en/permissions.md |
