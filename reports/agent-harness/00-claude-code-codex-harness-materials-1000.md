# Claude Code / Codex Harness Materials 1000+ Corpus

Generated: 2026-06-18T02:20:43.625Z

## Scope

- Selected materials: 1200
- Raw candidates before dedupe: 3622
- GitHub repository search queries: 20
- GitHub code search queries attempted: 8
- Official Claude docs parsed: 148
- Official Codex manual sections parsed: 225
- Data file: `data/claude-codex-harness-materials-1000.json`
- Codex setup guide: `reports/agent-harness/codex-harness-setup-guide.md`

This corpus is a practical research index for Claude Code use cases and Codex-applicable harness/tool setup. It combines official documentation, security case studies, curated ecosystem sources, GitHub repository search, GitHub code search for real instruction/config files, and cross-references from the existing local OSS corpora.

## Collection Caveats

- GitHub code search is rate-limited separately from repository search, so this run used the currently available code-search quota and then filled the rest with repository/source metadata.
- Repository search results are evidence of discoverable public material, not endorsement or quality certification.
- The setup recommendations below prefer official Codex and Claude documentation when they conflict with blogs or examples.

## Category Distribution

| category | count |
| --- | --- |
| claude-code-use-case | 714 |
| codex-harness | 595 |
| workflow-use-case | 427 |
| ci-automation | 415 |
| agent-instruction | 308 |
| skills-subagents | 222 |
| mcp-tooling | 174 |
| hooks-permissions-sandbox | 121 |
| sdk-programmatic | 116 |
| evaluation-harness | 71 |
| agent-harness | 8 |
| tool-setting | 6 |
| security | 4 |
| configuration | 2 |
| workflow | 2 |
| coding-agent | 1 |
| ecosystem | 1 |
| enterprise-adoption | 1 |
| harness | 1 |
| human-in-the-loop | 1 |


## Material Type Distribution

| type | count |
| --- | --- |
| configuration-or-workflow-file | 667 |
| open-source-repository | 343 |
| official-doc | 147 |
| official-manual-section | 28 |
| official-ci-doc | 2 |
| technical-blog | 2 |
| curated-list | 1 |
| engineering-blog | 1 |
| industry-report | 1 |
| official-doc-index | 1 |
| official-guide | 1 |
| official-manual | 1 |
| official-practice-guide | 1 |
| official-reference | 1 |
| official-use-case-report | 1 |
| open-source-hook-example | 1 |
| security-case-study | 1 |


## Source Seeds

| source | title | categories | url |
| --- | --- | --- | --- |
| Anthropic | Claude Code Docs llms.txt | claude-code-use-case, tool-setting, harness | https://code.claude.com/docs/llms.txt |
| Anthropic | How Anthropic teams use Claude Code | claude-code-use-case, workflow, enterprise-adoption | https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf |
| Anthropic Support | Claude Code power user tips | claude-code-use-case, workflow, parallel-work | https://support.claude.com/en/articles/14554000-claude-code-power-user-tips |
| Anthropic Engineering | How we contain Claude across products | security, sandbox, human-in-the-loop | https://www.anthropic.com/engineering/how-we-contain-claude |
| Anthropic | Claude Code GitHub Actions | ci-automation, claude-code-use-case, tool-setting | https://code.claude.com/docs/en/github-actions.md |
| OpenAI | OpenAI Codex Manual | codex-harness, tool-setting, configuration | https://developers.openai.com/codex/codex-manual.md |
| OpenAI | Codex Configuration Reference | codex-harness, configuration, tool-setting | https://developers.openai.com/codex/config-reference |
| OpenAI | Codex custom instructions with AGENTS.md | codex-harness, agent-instruction | https://developers.openai.com/codex/guides/agents-md |
| OpenAI | Codex GitHub Action | codex-harness, ci-automation, security | https://developers.openai.com/codex/github-action |
| Microsoft Security | Microsoft Security: Claude Code GitHub Action case | security, ci-automation, prompt-injection | https://www.microsoft.com/en-us/security/blog/2026/06/05/securing-ci-cd-in-agentic-world-claude-code-github-action-case/ |
| GitHub | anthropics/claude-code-action | claude-code-use-case, ci-automation | https://github.com/anthropics/claude-code-action |
| GitHub | openai/codex | codex-harness, coding-agent | https://github.com/openai/codex |
| GitHub | openai/codex-action | codex-harness, ci-automation | https://github.com/openai/codex-action |
| GitHub | RoggeOhta/awesome-codex-cli | codex-harness, ecosystem | https://github.com/RoggeOhta/awesome-codex-cli |
| GitHub | HKUDS/OpenHarness | evaluation-harness, agent-harness | https://github.com/HKUDS/OpenHarness |
| GitHub | prempti Codex hook interceptor | codex-harness, hooks-permissions-sandbox, security | https://github.com/falcosecurity/prempti/blob/main/hooks/codex/README.md |
| Shipyard | Shipyard Codex CLI cheatsheet | codex-harness, tool-setting | https://shipyard.build/blog/codex-cli-cheat-sheet/ |
| Technical blog | Claude Code features and settings reference 2026 | claude-code-use-case, tool-setting | https://hidekazu-konishi.com/entry/claude_code_features_settings_reference_2026.html |
| ITPro | Agentic AI Foundation / MCP open governance coverage | mcp-tooling, open-standards | https://www.itpro.com/software/open-source/anthropic-says-mcp-will-stay-open-neutral-and-community-driven-after-donating-project-to-linux-foundation |


## What Claude Code Use Cases Show

- Claude Code is used as an interactive coding agent for codebase exploration, bug fixing, refactoring, testing, code review, CI follow-up, and onboarding workflows.
- The strongest recurring practice is durable project context: `CLAUDE.md`, settings, hooks, skills, subagents, and MCP servers encode the workflow outside the prompt.
- Advanced use cases move from a single terminal session to parallel sessions, worktrees, GitHub Actions, Agent SDK programs, and secure sandboxes.
- Security material repeatedly warns that CI agents must not receive untrusted PR text and long-lived secrets in the same process/job boundary.

## Codex Harness Mapping

| Claude Code surface | Codex surface | Practical Codex harness use |
| --- | --- | --- |
| `CLAUDE.md` memory/project instructions | `AGENTS.md` | Keep repo conventions, test commands, review criteria, and source routing close to the code. |
| `.claude/settings.json` | `.codex/config.toml` or `~/.codex/config.toml` | Set model defaults, sandbox/approval profile, MCP servers, hooks, project doc limits, and feature flags. |
| Claude hooks | Codex hooks | Intercept Bash/tool calls, permission requests, stop events, and post-tool outputs for policy checks and telemetry. |
| Claude MCP | Codex MCP | Attach docs, GitHub, browser, Figma, Sentry, internal runbooks, and search tools with per-tool approval. |
| Claude Code GitHub Action | Codex GitHub Action / `codex exec` | Run review, CI failure triage, release notes, migration planning, and patch generation in controlled CI. |
| Claude Agent SDK | Codex SDK / non-interactive mode | Programmatically start threads, choose sandbox, capture structured output, and resume automation runs. |
| Skills/subagents/plugins | Skills/subagents/plugins | Package repeatable workflows and specialized roles without bloating every prompt. |

## Recommended Codex Harness Baseline

1. Put stable repo behavior in `AGENTS.md`: build/test commands, review rules, architecture map, source scan routes, and “what not to touch.”
2. Put execution policy in `.codex/config.toml`: default `workspace-write` sandbox, `on-request` approvals, project doc limits, and only required MCP servers.
3. Add one PreToolUse hook for shell guardrails and one PostToolUse hook for validation summaries. Keep hooks small and auditable.
4. For CI, use `openai/codex-action@v1` or `codex exec` with API credentials scoped to the single Codex step, not job-level environment variables.
5. For eval harnesses, use `codex exec --json` plus an output schema so downstream scripts can score whether the agent found files, ran tests, produced a patch, or stopped safely.
6. Treat MCP tools as capability boundaries. Enable only the tools needed for the task and set prompt/approval mode for powerful write tools.

## Top Official / Curated Materials

| title | type | categories | url |
| --- | --- | --- | --- |
| Claude Code Docs llms.txt | official-doc-index | claude-code-use-case, tool-setting, harness | https://code.claude.com/docs/llms.txt |
| Claude Code features and settings reference 2026 | technical-blog | claude-code-use-case, tool-setting | https://hidekazu-konishi.com/entry/claude_code_features_settings_reference_2026.html |
| Claude Code GitHub Actions | official-ci-doc | ci-automation, claude-code-use-case, tool-setting, workflow-use-case | https://code.claude.com/docs/en/github-actions.md |
| Claude Code power user tips | official-practice-guide | claude-code-use-case, workflow, parallel-work | https://support.claude.com/en/articles/14554000-claude-code-power-user-tips |
| Codex Configuration Reference | official-reference | codex-harness, configuration, tool-setting, agent-instruction | https://developers.openai.com/codex/config-reference |
| Codex custom instructions with AGENTS.md | official-guide | codex-harness, agent-instruction, mcp-tooling, hooks-permissions-sandbox | https://developers.openai.com/codex/guides/agents-md |
| Codex GitHub Action | official-ci-doc | codex-harness, ci-automation, security, agent-instruction | https://developers.openai.com/codex/github-action |
| How Anthropic teams use Claude Code | official-use-case-report | claude-code-use-case, workflow, enterprise-adoption | https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf |
| Microsoft Security: Claude Code GitHub Action case | security-case-study | security, ci-automation, prompt-injection | https://www.microsoft.com/en-us/security/blog/2026/06/05/securing-ci-cd-in-agentic-world-claude-code-github-action-case/ |
| OpenAI Codex Manual | official-manual | codex-harness, tool-setting, configuration | https://developers.openai.com/codex/codex-manual.md |
| RoggeOhta/awesome-codex-cli | curated-list | codex-harness, ecosystem | https://github.com/RoggeOhta/awesome-codex-cli |
| Shipyard Codex CLI cheatsheet | technical-blog | codex-harness, tool-setting | https://shipyard.build/blog/codex-cli-cheat-sheet/ |
| Advanced setup | official-doc | claude-code-use-case | https://code.claude.com/docs/en/setup.md |
| Agent SDK overview | official-doc | claude-code-use-case, sdk-programmatic | https://code.claude.com/docs/en/agent-sdk/overview.md |
| Agent SDK reference - Python | official-doc | claude-code-use-case, sdk-programmatic | https://code.claude.com/docs/en/agent-sdk/python.md |
| Agent SDK reference - TypeScript | official-doc | claude-code-use-case, sdk-programmatic | https://code.claude.com/docs/en/agent-sdk/typescript.md |
| Agent Skills in the SDK | official-doc | claude-code-use-case, sdk-programmatic, skills-subagents | https://code.claude.com/docs/en/agent-sdk/skills.md |
| Authentication | official-doc | claude-code-use-case | https://code.claude.com/docs/en/authentication.md |
| Automate actions with hooks | official-doc | claude-code-use-case, agent-instruction, hooks-permissions-sandbox | https://code.claude.com/docs/en/hooks-guide.md |
| Automate work with routines | official-doc | claude-code-use-case, sdk-programmatic | https://code.claude.com/docs/en/routines.md |
| Best practices for Claude Code | official-doc | claude-code-use-case | https://code.claude.com/docs/en/best-practices.md |
| Catch security issues as Claude writes code | official-doc | claude-code-use-case, skills-subagents, workflow-use-case | https://code.claude.com/docs/en/security-guidance.md |
| Champion kit | official-doc | claude-code-use-case | https://code.claude.com/docs/en/champion-kit.md |
| Channels reference | official-doc | claude-code-use-case, mcp-tooling, hooks-permissions-sandbox | https://code.claude.com/docs/en/channels-reference.md |
| Checkpointing | official-doc | claude-code-use-case | https://code.claude.com/docs/en/checkpointing.md |
| Choose a permission mode | official-doc | claude-code-use-case, hooks-permissions-sandbox | https://code.claude.com/docs/en/permission-modes.md |
| Choose a sandbox environment | official-doc | claude-code-use-case, hooks-permissions-sandbox | https://code.claude.com/docs/en/sandbox-environments.md |
| Claude Code changelog | official-doc | claude-code-use-case | https://code.claude.com/docs/en/changelog.md |
| Claude Code GitLab CI/CD | official-doc | claude-code-use-case, ci-automation, workflow-use-case | https://code.claude.com/docs/en/gitlab-ci-cd.md |
| Claude Code in Slack | official-doc | claude-code-use-case | https://code.claude.com/docs/en/slack.md |


## Top Configuration / Workflow File Evidence

| title | query | categories | url |
| --- | --- | --- | --- |
| 0x0012637/orbitdock/.github/workflows/release.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/0x0012637/orbitdock/blob/13d37818c2dedbd0887762038ddcead9395200ef/.github/workflows/release.yml |
| 0xFivis/agentic-mesh-arch-kit/.github/workflows/ci.yml.tmpl | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/0xFivis/agentic-mesh-arch-kit/blob/8819675555a0c4543719d8ad3e8b9eddd472dd7a/.github/workflows/ci.yml.tmpl |
| 0xPolygon/smart-contracts-agentic-review/.github/workflows/default.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/0xPolygon/smart-contracts-agentic-review/blob/8d0a37b2cac3caa98588bd09dc267452a88c640c/.github/workflows/default.yml |
| 0xturboblitz/gpcr-binding-mechanism-analysis/.github/workflows/cosci.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/0xturboblitz/gpcr-binding-mechanism-analysis/blob/3d9e432e4c084dedb0b5f369752b4e45b8d0e9ea/.github/workflows/cosci.yml |
| 1111philo/plato/.github/workflows/pilot.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/1111philo/plato/blob/765fec36bf97fdc1815db59b0b6895271f1ef7bf/.github/workflows/pilot.yml |
| 1inch/swap-vm/.github/workflows/claude | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/1inch/swap-vm/blob/ac06e1bac021cd1983dc7c44d1f69b4b8861a945/.github/workflows/claude |
| 567-labs/instructor/.github/workflows/oss-issue-tagger.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/567-labs/instructor/blob/754e4fb85ddd82b9a525f5e409fcddc5a7fac2d5/.github/workflows/oss-issue-tagger.yml |
| ab7z/saim-mobilephysio/.github/workflows/README.md | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/ab7z/saim-mobilephysio/blob/ee037d94a0900219f9f786b36cbd861b3190c34e/.github/workflows/README.md |
| Abaco-Technol/abaco-loans-analytics/.github/workflows/codex-pull-request-review.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/Abaco-Technol/abaco-loans-analytics/blob/cd0a80c2d5e94dbc4aa1835141048a9defbfaef7/.github/workflows/codex-pull-request-review.yml |
| AgoraIO/agentic-evals/.github/workflows/skill-eval.yml | codex-action-workflow | codex-harness, ci-automation, skills-subagents, evaluation-harness | https://github.com/AgoraIO/agentic-evals/blob/8bc269745c4d88dfd7b1f6d1e3ec601c71e3116a/.github/workflows/skill-eval.yml |
| aiueueueo/astro-website/.github/workflows/claude-slack.yml.disabled | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/aiueueueo/astro-website/blob/8595733e9f6e1bb87a995fa4ed63547b35573b09/.github/workflows/claude-slack.yml.disabled |
| aiueueueo/astro-website/.github/workflows/main.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/aiueueueo/astro-website/blob/8595733e9f6e1bb87a995fa4ed63547b35573b09/.github/workflows/main.yml |
| alkampfergit/DotNetCoreCryptography/.github/workflows/claude.old | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/alkampfergit/DotNetCoreCryptography/blob/405f596b79eae514035659c6aa9d9ac3b9be5b6f/.github/workflows/claude.old |
| alvarolobato/powershop-analytics/.github/workflows/ai-docs-patrol.yml.disabled | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/alvarolobato/powershop-analytics/blob/05e9d62a626321ef798e24d99007b7c801869299/.github/workflows/ai-docs-patrol.yml.disabled |
| amondnet/claude-code-oauth/.github/workflows/repo.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/amondnet/claude-code-oauth/blob/a9714707615bb9d231c75b06c582da52706b970e/.github/workflows/repo.yml |
| anantham/LexiconForge/.github/workflows/codex-review.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/anantham/LexiconForge/blob/b70a4fdb56e1995644d3f55d580298f887eb66d1/.github/workflows/codex-review.yml |
| Aokuma0628/InvestLedger/.github/workflows/claude-code-review.yml.back | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/Aokuma0628/InvestLedger/blob/7609ea8e5897ef39c7acab03bae307f86b6316a2/.github/workflows/claude-code-review.yml.back |
| apetcu/linear-e2e/.github/workflows/dobbie.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/apetcu/linear-e2e/blob/2678d232b87c7d64859aad3b5759d1450ee10d2e/.github/workflows/dobbie.yml |
| aram-devdocs/GoudEngine/.github/workflows/agent.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/aram-devdocs/GoudEngine/blob/3b96c7d9b25de18ea499da81020f0825fe8a5ff7/.github/workflows/agent.yml |
| architrk/selfmosaic-oss/.github/workflows/codex-pr-risk-review.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/architrk/selfmosaic-oss/blob/696ee3f6ccaf1609415b246aa2274d769736b3e1/.github/workflows/codex-pr-risk-review.yml |
| Arry8/openclaw-edge/.github/workflows/codex-autofix.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/Arry8/openclaw-edge/blob/07f42a62409b3e8758218886d4c27aacdda5c8c9/.github/workflows/codex-autofix.yml |
| artalytics/.github/.github/workflows/codex-autofix.yaml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/artalytics/.github/blob/707dcd8a4d9941ba6148402ee365f3c14a092c9d/.github/workflows/codex-autofix.yaml |
| asboyer/continuity-template/.github/workflows/claude-code-review.yml.template | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/asboyer/continuity-template/blob/6fd339c3ce2baaf48a00914a0c06f817ef7e8eb8/.github/workflows/claude-code-review.yml.template |
| atvalerie/codex-multiacc/.github/workflows/issue-labeler.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/atvalerie/codex-multiacc/blob/bfcb41d89fa7f2ba9daf57d914fa8ec8cd3e991d/.github/workflows/issue-labeler.yml |
| az9713/vizzly-cli-tutorial/.github/workflows/release-vitest-client.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/az9713/vizzly-cli-tutorial/blob/06c96fe456f5481d903163f80a6decc830d421c8/.github/workflows/release-vitest-client.yml |
| Azeem-2/claude-code-runner-demo/.github/workflows/claude.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/Azeem-2/claude-code-runner-demo/blob/e70dad4ca7de3a2f928575dc376c2bb073598d04/.github/workflows/claude.yml |
| azumag/harvest3/.github/workflows/claude-auto-review.yml.disable | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/azumag/harvest3/blob/fc24f61415183d7d0b7255056e2d8446fc891e14/.github/workflows/claude-auto-review.yml.disable |
| basicmachines-co/basic-memory/.github/workflows/basic-memory.yml | codex-action-workflow | codex-harness, agent-instruction, ci-automation, workflow-use-case | https://github.com/basicmachines-co/basic-memory/blob/b5f13d690317abe18987377d3100514d3b44d8a1/.github/workflows/basic-memory.yml |
| belanglos/upphetsande-men-inte-sa-habilt-2/.github/workflows/review.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/belanglos/upphetsande-men-inte-sa-habilt-2/blob/9c120e76e98a1a43db589c3f93ad79b6829d9fe1/.github/workflows/review.yml |
| bkircher/next-counter/.github/workflows/fitness.yaml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/bkircher/next-counter/blob/4217b98976f8e6d25f3ab8647dbf1cc98ceb1fd6/.github/workflows/fitness.yaml |
| BlakeHampson/oss-maintainer-kit/.github/workflows/codex-release-prep.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/BlakeHampson/oss-maintainer-kit/blob/a5653bd820ba90561b6e75fee1488fe4c0fc9269/.github/workflows/codex-release-prep.yml |
| bootjp/elastickv/.github/workflows/claude-code-review.yml.disable2 | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/bootjp/elastickv/blob/ddf29afa4f0ee0d72994e4dcedfb1b5546139e00/.github/workflows/claude-code-review.yml.disable2 |
| brunoamaral/gregory-ai/.github/workflows/codex.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/brunoamaral/gregory-ai/blob/8ad135d913b9ae143a2b8be8f75a9c2cc8829d5c/.github/workflows/codex.yml |
| CapSens/claude-workflows/.github/workflows/performance-analysis-on-issue.yml.old | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/CapSens/claude-workflows/blob/7eebd8e7ca4cfc44248a02a64e8e3cbfdd394f73/.github/workflows/performance-analysis-on-issue.yml.old |
| Charley3d/magic-mock/.github/workflows/README.md | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/Charley3d/magic-mock/blob/1ead61d5e53f5bb49ed867dedb3aa795c4a8ae51/.github/workflows/README.md |
| clairelindstrom92/manifestalchemy.ai/.github/workflows/claude.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/clairelindstrom92/manifestalchemy.ai/blob/1fb64b3d5438ce877faccff2c9805fa4d188dd65/.github/workflows/claude.yml |
| clarkezone/spectro/.github/workflows/codex.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/clarkezone/spectro/blob/78d5991081e01a619e272a0f16bb16c3bf5a8cf6/.github/workflows/codex.yml |
| cld-maindev/codex-synaptic/.github/workflows/codex-viral-growth-mcp.yml | codex-action-workflow | codex-harness, mcp-tooling, ci-automation, workflow-use-case | https://github.com/cld-maindev/codex-synaptic/blob/af67ac2a2128b69df575a0fa446f8ae9b9c2bcdf/.github/workflows/codex-viral-growth-mcp.yml |
| cloudwalk/stratus/.github/workflows/dependabot-auto-vet.yml | codex-action-workflow | codex-harness, ci-automation, workflow-use-case | https://github.com/cloudwalk/stratus/blob/0d30ef68943c66490bdea367bf510b10830019fa/.github/workflows/dependabot-auto-vet.yml |
| Coffee-Code-Philly-Accelerator/CCP-Digital-Marketing/.github/workflows/ci.yml | claude-code-action-workflow | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/Coffee-Code-Philly-Accelerator/CCP-Digital-Marketing/blob/608abc284e59c7d8b25e004a6a05a0cc916a0df8/.github/workflows/ci.yml |


## Top Open Source Repositories

| repo | stars | query | categories | url |
| --- | --- | --- | --- | --- |
| anthropics/claude-code-action | 0 | claude-code | claude-code-use-case, ci-automation | https://github.com/anthropics/claude-code-action |
| HKUDS/OpenHarness | 0 |  | evaluation-harness, agent-harness | https://github.com/HKUDS/OpenHarness |
| openai/codex | 0 |  | codex-harness, coding-agent | https://github.com/openai/codex |
| openai/codex-action | 0 | codex-action | codex-harness, ci-automation | https://github.com/openai/codex-action |
| affaan-m/ECC | 217333 | claude-code | claude-code-use-case, codex-harness, agent-instruction, mcp-tooling | https://github.com/affaan-m/ECC |
| NousResearch/hermes-agent | 196256 | openai-codex | claude-code-use-case, codex-harness | https://github.com/NousResearch/hermes-agent |
| multica-ai/andrej-karpathy-skills | 177706 | claude-code | claude-code-use-case, agent-instruction, skills-subagents | https://github.com/multica-ai/andrej-karpathy-skills |
| x1xhlol/system-prompts-and-models-of-ai-tools | 140808 | claude-code | claude-code-use-case | https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools |
| anthropics/claude-code | 133053 | claude-code | claude-code-use-case, ci-automation, workflow-use-case | https://github.com/anthropics/claude-code |
| garrytan/gstack | 111007 | claude-code | claude-code-use-case | https://github.com/garrytan/gstack |
| farion1231/cc-switch | 103538 | claude-code | claude-code-use-case, codex-harness, mcp-tooling, skills-subagents | https://github.com/farion1231/cc-switch |
| danny-avila/LibreChat | 39369 | claude-code-action | claude-code-use-case, mcp-tooling, sdk-programmatic, skills-subagents | https://github.com/danny-avila/LibreChat |
| thedotmack/claude-mem | 83008 | claude-code | claude-code-use-case, codex-harness, agent-instruction, sdk-programmatic | https://github.com/thedotmack/claude-mem |
| JuliusBrussee/caveman | 74114 | claude-code | claude-code-use-case, skills-subagents | https://github.com/JuliusBrussee/caveman |
| safishamsi/graphify | 68741 | claude-code | claude-code-use-case, codex-harness, skills-subagents, mcp-tooling | https://github.com/safishamsi/graphify |
| shareAI-lab/learn-claude-code | 67244 | claude-code | claude-code-use-case, evaluation-harness | https://github.com/shareAI-lab/learn-claude-code |
| nexu-io/open-design | 66780 | claude-code | claude-code-use-case, codex-harness, hooks-permissions-sandbox, skills-subagents | https://github.com/nexu-io/open-design |
| gsd-build/get-shit-done | 64314 | claude-code | claude-code-use-case | https://github.com/gsd-build/get-shit-done |
| Egonex-AI/Understand-Anything | 62862 | claude-code | claude-code-use-case, codex-harness, agent-instruction, skills-subagents | https://github.com/Egonex-AI/Understand-Anything |
| code-yeongyu/oh-my-openagent | 62591 | claude-code | claude-code-use-case, codex-harness, skills-subagents, evaluation-harness | https://github.com/code-yeongyu/oh-my-openagent |
| ruvnet/ruflo | 60006 | claude-code | claude-code-use-case, codex-harness, agent-instruction, mcp-tooling | https://github.com/ruvnet/ruflo |
| shanraisshan/claude-code-best-practice | 58170 | claude-code | claude-code-use-case, ci-automation, skills-subagents, workflow-use-case | https://github.com/shanraisshan/claude-code-best-practice |
| santifer/career-ops | 54427 | claude-code | claude-code-use-case, ci-automation, skills-subagents | https://github.com/santifer/career-ops |
| colbymchenry/codegraph | 51105 | claude-code | claude-code-use-case, codex-harness | https://github.com/colbymchenry/codegraph |
| hesreallyhim/awesome-claude-code | 46736 | claude-code | claude-code-use-case, hooks-permissions-sandbox, ci-automation, skills-subagents | https://github.com/hesreallyhim/awesome-claude-code |
| zhayujie/CowAgent | 45386 | openai-codex | claude-code-use-case, codex-harness, agent-instruction, mcp-tooling | https://github.com/zhayujie/CowAgent |
| anthropics/claude-plugins-official | 30351 | claude-code-mcp | claude-code-use-case, mcp-tooling, skills-subagents | https://github.com/anthropics/claude-plugins-official |
| HKUDS/nanobot | 44397 | openai-codex | claude-code-use-case, codex-harness, ci-automation, workflow-use-case | https://github.com/HKUDS/nanobot |
| asgeirtj/system_prompts_leaks | 43134 | openai-codex | claude-code-use-case, codex-harness | https://github.com/asgeirtj/system_prompts_leaks |
| VoltAgent/awesome-design-md | 91091 | agents-md | agent-harness | https://github.com/VoltAgent/awesome-design-md |
| sickn33/antigravity-awesome-skills | 40998 | claude-code | claude-code-use-case, codex-harness, mcp-tooling, ci-automation | https://github.com/sickn33/antigravity-awesome-skills |
| router-for-me/CLIProxyAPI | 37780 | claude-code | claude-code-use-case, codex-harness, sdk-programmatic | https://github.com/router-for-me/CLIProxyAPI |
| luongnv89/claude-howto | 37464 | claude-code | claude-code-use-case | https://github.com/luongnv89/claude-howto |
| wshobson/agents | 36897 | claude-code | claude-code-use-case, codex-harness, agent-instruction, mcp-tooling | https://github.com/wshobson/agents |
| Yeachan-Heo/oh-my-claudecode | 36568 | claude-code | claude-code-use-case, ci-automation | https://github.com/Yeachan-Heo/oh-my-claudecode |
| Alishahryar1/free-claude-code | 35167 | claude-code | claude-code-use-case, codex-harness | https://github.com/Alishahryar1/free-claude-code |
| musistudio/claude-code-router | 35089 | claude-code | claude-code-use-case | https://github.com/musistudio/claude-code-router |
| aaif-goose/goose | 49702 | mcp-coding-agent | mcp-tooling | https://github.com/aaif-goose/goose |
| coreyhaines31/marketingskills | 33828 | claude-code | claude-code-use-case, codex-harness, skills-subagents | https://github.com/coreyhaines31/marketingskills |
| bytedance/deer-flow | 71425 | coding-agent-harness | hooks-permissions-sandbox, ci-automation, skills-subagents, evaluation-harness | https://github.com/bytedance/deer-flow |
| Imbad0202/academic-research-skills | 32493 | claude-code | claude-code-use-case, skills-subagents, workflow-use-case | https://github.com/Imbad0202/academic-research-skills |
| DietrichGebert/ponytail | 32043 | claude-code | claude-code-use-case, agent-instruction, skills-subagents | https://github.com/DietrichGebert/ponytail |
| Yeachan-Heo/oh-my-codex | 31047 | codex-hooks | codex-harness, hooks-permissions-sandbox, skills-subagents | https://github.com/Yeachan-Heo/oh-my-codex |
| K-Dense-AI/scientific-agent-skills | 28549 | claude-code | claude-code-use-case, codex-harness, skills-subagents | https://github.com/K-Dense-AI/scientific-agent-skills |
| iOfficeAI/AionUi | 28446 | claude-code | claude-code-use-case, codex-harness, skills-subagents | https://github.com/iOfficeAI/AionUi |
| Wei-Shaw/sub2api | 28255 | openai-codex | claude-code-use-case, codex-harness, sdk-programmatic | https://github.com/Wei-Shaw/sub2api |
| davila7/claude-code-templates | 28139 | claude-code | claude-code-use-case | https://github.com/davila7/claude-code-templates |
| BloopAI/vibe-kanban | 27047 | claude-code | claude-code-use-case, codex-harness | https://github.com/BloopAI/vibe-kanban |
| VoltAgent/awesome-agent-skills | 25677 | claude-code | claude-code-use-case, codex-harness, skills-subagents | https://github.com/VoltAgent/awesome-agent-skills |
| oraios/serena | 25478 | claude-code | claude-code-use-case, codex-harness, mcp-tooling, evaluation-harness | https://github.com/oraios/serena |
| jarrodwatts/claude-hud | 25386 | claude-code | claude-code-use-case, skills-subagents | https://github.com/jarrodwatts/claude-hud |
| blader/humanizer | 24743 | claude-code | claude-code-use-case, skills-subagents | https://github.com/blader/humanizer |
| OthmanAdi/planning-with-files | 23542 | claude-code | claude-code-use-case, codex-harness, skills-subagents | https://github.com/OthmanAdi/planning-with-files |
| SuperClaude-Org/SuperClaude_Framework | 23323 | claude-code | claude-code-use-case | https://github.com/SuperClaude-Org/SuperClaude_Framework |
| rohitg00/agentmemory | 23276 | claude-code | claude-code-use-case, codex-harness, agent-instruction, evaluation-harness | https://github.com/rohitg00/agentmemory |
| coleam00/Archon | 22436 | claude-code | claude-code-use-case, ci-automation, evaluation-harness, workflow-use-case | https://github.com/coleam00/Archon |
| zarazhangrui/frontend-slides | 22061 | claude-code | claude-code-use-case, skills-subagents | https://github.com/zarazhangrui/frontend-slides |
| winfunc/opcode | 22060 | claude-code | claude-code-use-case, sdk-programmatic | https://github.com/winfunc/opcode |
| slopus/happy | 22023 | claude-code | claude-code-use-case, codex-harness | https://github.com/slopus/happy |
| VoltAgent/awesome-claude-code-subagents | 22006 | claude-code | claude-code-use-case, skills-subagents, workflow-use-case | https://github.com/VoltAgent/awesome-claude-code-subagents |


## Search Queries

| type | label | q |
| --- | --- | --- |
| repo | claude-code | claude code stars:>5 |
| repo | claude-code-mcp | claude code mcp stars:>1 |
| repo | claude-code-action | claude code action stars:>1 |
| repo | claude-code-hooks | claude code hooks stars:>1 |
| repo | claude-code-settings | claude code settings stars:>1 |
| repo | claude-code-skills | claude code skills stars:>1 |
| repo | claude-code-agents | claude code agents stars:>1 |
| repo | codex-cli | codex cli stars:>1 |
| repo | openai-codex | openai codex stars:>1 |
| repo | codex-action | codex action stars:>1 |
| repo | codex-mcp | codex mcp stars:>1 |
| repo | codex-hooks | codex hooks stars:>1 |
| repo | agents-md | AGENTS.md stars:>1 |
| repo | claude-md | CLAUDE.md stars:>1 |
| repo | agent-harness | agent harness stars:>1 |
| repo | coding-agent-harness | coding agent harness stars:>1 |
| repo | swe-bench-harness | swe-bench harness stars:>1 |
| repo | openhands-harness | openhands harness stars:>1 |
| repo | mcp-coding-agent | mcp coding agent stars:>1 |
| repo | agent-tools-config | agent tools config stars:>1 |


| type | label | q |
| --- | --- | --- |
| code | claude-md-file | filename:CLAUDE.md |
| code | agents-md-file | filename:AGENTS.md |
| code | claude-settings-json | filename:settings.json path:.claude |
| code | claude-mcp-json | filename:mcp.json |
| code | codex-config-toml | filename:config.toml path:.codex |
| code | claude-code-action-workflow | claude-code-action path:.github/workflows |
| code | codex-action-workflow | codex-action path:.github/workflows |
| code | codex-exec-workflow | "codex exec" path:.github/workflows |


## Next Use

Use the JSON corpus as the browsing/search source, and use `reports/agent-harness/codex-harness-setup-guide.md` as the operational checklist for bringing the same practices into a Codex project.
