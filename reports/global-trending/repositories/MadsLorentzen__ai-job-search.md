# MadsLorentzen/ai-job-search

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/MadsLorentzen/ai-job-search |
| local path | sources/MadsLorentzen__ai-job-search |
| HEAD | 37a0eed |
| stars/forks | 3433 / 1521 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-15T19:41:10Z |
| trendScore / priorityScore | 144 / 347 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Observability / evaluation | 45 | documents/README.md, README.md, CLAUDE.md |
| AI agent / orchestration | 31 | README.md, CLAUDE.md, .claude/agents/gemini-research-expert.md |
| Developer tools / DX | 19 | README.md, CLAUDE.md, SETUP.md |
| Cloud native / infrastructure | 14 | .claude/commands/apply.md, .claude/skills/upskill/SKILL.md |
| Coding agent / software automation | 13 | README.md, CLAUDE.md, SETUP.md |
| Data / ML platform | 9 | README.md, salary_lookup.py, .claude/commands/expand.md |
| Security / supply chain | 8 | .claude/skills/job-application-assistant/04-job-evaluation.md, salary_lookup.py, .claude/skills/upskill/SKILL.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontendStack, infra, infraOps, llmFramework, observability, security |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 55 |
| manifests | 3 |
| docs | 21 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 18 |
| agent instruction files | 18 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AI Job Search | AI Job Search / What this is / Prerequisites / Quick start / 1. Fork and clone / 2. Install job search tools / 3. Set up your profile / Then inside Claude Code: / 4. Search for jobs / 5. Apply to a job | <p align="center" <img src="claude animation.gif" alt="Claude Job Search Assistant" width="200" </p AI Job Search An AI powered job application framework built on Claude Code https //claude.com/claude code . Fork it, fill in your profile, and let Claude evaluate job postings, tailor your CV, write cover letters, and prepare you for interviews. What this is A structured workflow that turns Claude Code into a full stack job application assistant. The core workflow self profiling, fit evaluation, and the drafter reviewer application pipeline is language and country agnostic . The job portal search skills are built for the Danish market Jobindex, Jobnet, Akademikernes Jobbank, etc. , but the pat |


## Key Files

### Manifests

- documents/README.md
- README.md
- CLAUDE.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .claude/agents/gemini-research-expert.md
- .claude/skills/job-application-assistant/04-job-evaluation.md
- .claude/settings.local.json
- .claude/commands/apply.md
- .claude/commands/expand.md
- .claude/commands/reset.md
- .claude/commands/setup.md
- .claude/skills/job-application-assistant/01-candidate-profile.md
- .claude/skills/job-application-assistant/02-behavioral-profile.md
- .claude/skills/job-application-assistant/03-writing-style.md
- .claude/skills/job-application-assistant/05-cv-templates.md
- .claude/skills/job-application-assistant/06-cover-letter-templates.md
- .claude/skills/job-application-assistant/07-interview-prep.md
- .claude/skills/job-application-assistant/SKILL.md
- .claude/skills/job-scraper/search-queries.md
- .claude/skills/job-scraper/SKILL.md
- .claude/skills/upskill/SKILL.md


### Agent Instruction Files

- CLAUDE.md
- .claude/agents/gemini-research-expert.md
- .claude/skills/job-application-assistant/04-job-evaluation.md
- .claude/settings.local.json
- .claude/commands/apply.md
- .claude/commands/expand.md
- .claude/commands/reset.md
- .claude/commands/setup.md
- .claude/skills/job-application-assistant/01-candidate-profile.md
- .claude/skills/job-application-assistant/02-behavioral-profile.md
- .claude/skills/job-application-assistant/03-writing-style.md
- .claude/skills/job-application-assistant/05-cv-templates.md
- .claude/skills/job-application-assistant/06-cover-letter-templates.md
- .claude/skills/job-application-assistant/07-interview-prep.md
- .claude/skills/job-application-assistant/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| cover_letters | 21 |
| .claude | 17 |
| documents | 6 |
| tools | 2 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| cv | 1 |
| job_scraper | 1 |
| LICENSE | 1 |
| README.md | 1 |
| salary_lookup.py | 1 |
| SETUP.md | 1 |
| upskill | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 21 |
| .ttf | 10 |
| .otf | 9 |
| [no-ext] | 9 |
| .cls | 2 |
| .py | 2 |
| .json | 1 |
| .tex | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
