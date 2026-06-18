# Codex Conference Talk Playbook

Generated: 2026-06-18T03:37:26.867Z

## Recommended Talk Structure

1. Problem framing: name the engineering bottleneck and the human workflow it blocks.
2. Harness framing: show AGENTS.md, Codex config, sandbox/approval policy, MCP servers, and test commands.
3. Live run: execute a constrained task, show the tool trace, and keep the diff small enough to review on screen.
4. Verification: run tests, evals, secret scans, or policy checks before claiming success.
5. Failure case: show a rejected command, an eval miss, or a prompt-injection attempt and the mitigation.
6. Production bridge: describe how the same workflow becomes CI, GitHub Action, code review, scheduled maintenance, or cloud-delegated work.
7. Reproducible artifact: publish the prompt, fixture repo, expected output, event logs, and setup notes.

## Slide/Demo Assets to Prepare

- One fixture repository with a known failing test and a documented expected patch.
- One AGENTS.md or CLAUDE.md file that makes coding-agent behavior explicit.
- One trace export with model messages, tool calls, file diffs, and test output.
- One eval or policy gate that can fail visibly.
- One cost/latency table and one human-review checklist.
- One backup screen recording of the successful run.

## Reference Examples

- [How to Build Quality Gates into Agentic Coding Workflows](https://www.ai.engineer/schedule) — AI Engineer session in Workshops Day 1.
- [Total Recall: Agent Memory and Harness Engineering](https://www.ai.engineer/schedule) — AI Engineer session in Workshops Day 1.
- [AI Engineer World's Fair 2026 schedule](https://www.ai.engineer/schedule) — Open schedule page with session and speaker data advertised as open data.
- [DevDay talk about Codex](https://www.youtube.com/watch?v=Gr41tYOzE20) — OpenAI DevDay session linked from the Codex DevDay case study.
- [How Codex ran OpenAI DevDay 2025](https://developers.openai.com/blog/codex-at-devday) — Official OpenAI case study showing Codex used for demos, booth prototypes, documentation, code review, parallel work, and event execution.
- [500 Skills, Zero Fine-Tuning: LinkedIn's Playbook for AI Agents That Actually Know Your Codebase](https://www.ai.engineer/schedule) — AI Engineer session in Context Engineering.
- [Agentic vs. Vector Search: An Eval-Driven Approach to Coding Agent Performance](https://www.ai.engineer/schedule) — AI Engineer session.
- [AI-Native Organisations runs on Skills: How to Extract, Structure, evaluate and Scale Them](https://www.ai.engineer/schedule) — AI Engineer session in AI-Native Enterprises.
- [Beyond the Benchmark: the New Frontier of Enterprise AI Reliability](https://www.ai.engineer/schedule) — AI Engineer session in AI Architects: Show my Workflow.
- [Coding Agents Don't Scale Themselves. Neither Do Your Teams: The Rise of Agent Enablement.](https://www.ai.engineer/schedule) — AI Engineer session in AI Architects: AI Factories.
- [Every Harness Will Become A Claw](https://www.ai.engineer/schedule) — AI Engineer session in Claws & Personal Agents.
- [Harness Engineering and Continual Learning in LangSmith](https://www.ai.engineer/schedule) — AI Engineer session.
- [Harness Engineering: Building the Production Cage for Powerful Domain Agents](https://www.ai.engineer/schedule) — AI Engineer session in Harness Engineering.
- [How to Get Your Org to Adopt Coding Agents (Without Shipping Garbage)](https://www.ai.engineer/schedule) — AI Engineer session in AI-Native Enterprises.
- [MCPs, CLIs, and Skills: Choosing the Right Tooling Layer for Agentic Development](https://www.ai.engineer/schedule) — AI Engineer session in Agentic Engineering.
- [Memory Harnesses for Long-Running Research Agents](https://www.ai.engineer/schedule) — AI Engineer session in Memory & Continual Learning.
- [Multi-Agent Workflows with MCP](https://www.ai.engineer/summit/2025/schedule) — AI Engineer schedule session extracted from visible HTML: Multi-Agent Workflows with MCP.
- [No Memory, No Harness: Why the Database Is the Last Line of Defense](https://www.ai.engineer/schedule) — AI Engineer session in Harness Engineering.
- [Sandboxes Aren't Optional: Runtime Isolation Patterns for Coding Agents at Scale](https://www.ai.engineer/schedule) — AI Engineer session in Sandbox & Platform Engineering.
- [Skill issue: stop deploying vision language models, use them with Skills to build e2e vision apps on edge](https://www.ai.engineer/schedule) — AI Engineer session in Vision & OCR.
