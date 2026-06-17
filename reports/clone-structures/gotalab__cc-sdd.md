# gotalab/cc-sdd 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/gotalab__cc-sdd |
| remote | https://github.com/gotalab/cc-sdd |
| HEAD | 29aee95 (2026-04-27) Merge pull request #172 from gotalab/codex/fix-nlpm-remaining-prs |
| branch | main |
| groups | spec-driven-20 |
| files | 536 |
| dirs | 285 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `cc-sdd: Long-running spec-driven implementation for AI coding agents`, `Turn approved specs into long-running autonomous implementation`, `What's new in v3.0`, `Why cc-sdd?`, `Quick Start`, `Common workflows`, `See It In Action`, `discovery writes brief.md (and roadmap.md when multi-spec) and suggests the next command`, `autonomous: fresh implementer, independent reviewer, and auto-debug per task`, `Supported Agents`, `Advanced Installation`, `Skills mode (recommended)`, `Legacy modes (deprecated)`, `Language`, `Supports: en, ja, zh-TW, zh, es, pt, de, fr, ru, it, ko, ar, el`, `Advanced options`, `Preview changes before applying`, `Custom specs directory`

> cc sdd Long running spec driven implementation for AI coding agents <! npm badges <div align="center" style="font size 1.1rem; margin bottom 1rem;" <sub Package README <a href="./tools/cc sdd/README.md" English</a <a href="./tools/cc sdd/README ja.md" 日本語</a <a href="./tools/cc sdd/README zh TW.md" 繁體中文</a </sub </div Turn approved specs into long running autonomous implementation One command installs an agentic SDLC workflow as Agent Skills discovery, requirements, design, tasks, and autonomous implementation with per task independent review. Works across 8 AI coding agents, with the same 17 skill set on each. 👻 Kiro inspired. Similar spec driven, agentic SDLC style as Kiro IDE. Existing Kiro specs remain compatible and portable. What's new in v3.0 cc sdd v3.0 is a rework around Agent Skills and long running autonomous implementation. /kiro discovery as the new entry point. Discovery r

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .github | dir |
| .gitignore | file |
| .kiro | dir |
| AGENTS.md | file |
| assets | dir |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| docs | dir |
| LICENSE | file |
| README.md | file |
| tools | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tools/ | 455 |
| .kiro/ | 46 |
| docs/ | 20 |
| (root) | 6 |
| .agents/ | 4 |
| .github/ | 4 |
| assets/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 20 | preferred |
| tools/ | 455 | preferred |
| .kiro/ | 46 | preferred |
| tools/cc-sdd/ | 455 | large |
| tools/cc-sdd/templates/ | 380 | large |
| tools/cc-sdd/test/ | 39 | large |
| .kiro/settings/ | 28 | large |
| tools/cc-sdd/src/ | 28 | large |
| .kiro/specs/ | 18 | large |
| .kiro/settings/templates/ | 16 | large |
| docs/guides/ | 14 | large |
| .kiro/settings/rules/ | 12 | large |
| docs/guides/ja/ | 7 | large |
| .kiro/specs/customer-support-rag-backend-en/ | 5 | large |
| .kiro/specs/customer-support-rag-backend-ja/ | 5 | large |
| .agents/ | 4 | large |
| .agents/skills/ | 4 | large |
| .agents/skills/cc-sdd-new-agent/ | 4 | large |
| .github/ | 4 | large |
| .github/workflows/ | 4 | large |
| .kiro/specs/photo-albums-en/ | 4 | large |
| .kiro/specs/vercel-ai-chatui-research-agent-ja/ | 4 | large |
| docs/README/ | 3 | large |
| docs/RELEASE_NOTES/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `tools/cc-sdd/package.json`
- `tools/cc-sdd/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| tools/cc-sdd/package.json | cc-sdd | test, test:watch, build, postbuild, prepare |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/README.md`
- `docs/README/README_en.md`
- `docs/README/README_ja.md`
- `docs/README/README_zh-TW.md`
- `docs/RELEASE_NOTES/RELEASE_NOTES_en.md`
- `docs/RELEASE_NOTES/RELEASE_NOTES_ja.md`
- `docs/guides/claude-subagents.md`
- `docs/guides/command-reference.md`
- `docs/guides/customization-guide.md`
- `docs/guides/ja/claude-subagents.md`
- `docs/guides/ja/command-reference.md`
- `docs/guides/ja/customization-guide.md`
- `docs/guides/ja/migration-guide.md`
- `docs/guides/ja/skill-reference.md`
- `docs/guides/ja/spec-driven.md`
- `docs/guides/ja/why-cc-sdd.md`
- `docs/guides/migration-guide.md`
- `docs/guides/skill-reference.md`
- `docs/guides/spec-driven.md`
- `docs/guides/why-cc-sdd.md`
- `tools/cc-sdd/README.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/docs/CLAUDE.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/docs/CLAUDE.md`
- `tools/cc-sdd/templates/agents/claude-code/docs/CLAUDE.md`
- `tools/cc-sdd/templates/agents/codex-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/codex/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/cursor-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/cursor/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/gemini-cli-skills/docs/GEMINI.md`
- `tools/cc-sdd/templates/agents/gemini-cli/docs/GEMINI.md`
- `tools/cc-sdd/templates/agents/github-copilot-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/github-copilot/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/opencode/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/qwen-code/docs/QWEN.md`
- `tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md`

### 에이전트 지침 후보

- `.agents/skills/cc-sdd-new-agent/SKILL.md`
- `.agents/skills/cc-sdd-new-agent/agents/openai.yaml`
- `.agents/skills/cc-sdd-new-agent/references/plan-output-checklist.md`
- `.agents/skills/cc-sdd-new-agent/references/skills-migration.md`
- `AGENTS.md`
- `CLAUDE.md`
- `docs/guides/ja/skill-reference.md`
- `docs/guides/skill-reference.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-debug/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-debug/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-discovery/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-impl/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-impl/templates/debugger-prompt.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-impl/templates/implementer-prompt.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-impl/templates/reviewer-prompt.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-review/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-review/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-batch/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-design/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-init/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-quick/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-requirements/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-status/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-tasks/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-steering-custom/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-steering/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-validate-design/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-validate-gap/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-validate-impl/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-verify-completion/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-verify-completion/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/claude-code-agent/docs/CLAUDE.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/docs/CLAUDE.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-debug/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-discovery/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-impl/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-impl/templates/debugger-prompt.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-impl/templates/implementer-prompt.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-impl/templates/reviewer-prompt.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-review/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-spec-batch/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-spec-design/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-spec-init/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-spec-quick/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-spec-requirements/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-spec-status/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-spec-tasks/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-steering-custom/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-steering/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-validate-design/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-validate-gap/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-validate-impl/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-verify-completion/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code/docs/CLAUDE.md`
- `tools/cc-sdd/templates/agents/codex-skills/codex-agents/spec-reviewer.toml`
- `tools/cc-sdd/templates/agents/codex-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-debug/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-debug/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-discovery/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-discovery/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-impl/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-impl/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-impl/templates/debugger-prompt.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-impl/templates/implementer-prompt.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-impl/templates/reviewer-prompt.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-review/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-review/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-batch/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-batch/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-design/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-design/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-init/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-init/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-quick/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-quick/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-requirements/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-requirements/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-status/SKILL.md`
- `tools/cc-sdd/templates/agents/codex-skills/skills/kiro-spec-status/agents/openai.yaml`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/cc-sdd-new-agent/SKILL.md`
- `.agents/skills/cc-sdd-new-agent/agents/openai.yaml`
- `.agents/skills/cc-sdd-new-agent/references/plan-output-checklist.md`
- `.agents/skills/cc-sdd-new-agent/references/skills-migration.md`
- `.kiro/settings/rules/design-discovery-full.md`
- `.kiro/settings/rules/design-discovery-light.md`
- `.kiro/settings/rules/design-principles.md`
- `.kiro/settings/rules/design-review-gate.md`
- `.kiro/settings/rules/design-review.md`
- `.kiro/settings/rules/design-synthesis.md`
- `.kiro/settings/rules/ears-format.md`
- `.kiro/settings/rules/gap-analysis.md`
- `.kiro/settings/rules/requirements-review-gate.md`
- `.kiro/settings/rules/steering-principles.md`
- `.kiro/settings/rules/tasks-generation.md`
- `.kiro/settings/rules/tasks-parallel-analysis.md`
- `.kiro/settings/templates/specs/design.md`
- `.kiro/settings/templates/specs/init.json`
- `.kiro/settings/templates/specs/requirements-init.md`
- `.kiro/settings/templates/specs/requirements.md`
- `.kiro/settings/templates/specs/research.md`
- `.kiro/settings/templates/specs/tasks.md`
- `.kiro/settings/templates/steering-custom/api-standards.md`
- `.kiro/settings/templates/steering-custom/authentication.md`
- `.kiro/settings/templates/steering-custom/database.md`
- `.kiro/settings/templates/steering-custom/deployment.md`
- `.kiro/settings/templates/steering-custom/error-handling.md`
- `.kiro/settings/templates/steering-custom/security.md`
- `.kiro/settings/templates/steering-custom/testing.md`
- `.kiro/settings/templates/steering/product.md`
- `.kiro/settings/templates/steering/structure.md`
- `.kiro/settings/templates/steering/tech.md`
- `.kiro/specs/customer-support-rag-backend-en/design.md`
- `.kiro/specs/customer-support-rag-backend-en/requirements.md`
- `.kiro/specs/customer-support-rag-backend-en/research.md`
- `.kiro/specs/customer-support-rag-backend-en/spec.json`
- `.kiro/specs/customer-support-rag-backend-en/tasks.md`
- `.kiro/specs/customer-support-rag-backend-ja/design.md`
- `.kiro/specs/customer-support-rag-backend-ja/requirements.md`
- `.kiro/specs/customer-support-rag-backend-ja/research.md`
- `.kiro/specs/customer-support-rag-backend-ja/spec.json`
- `.kiro/specs/customer-support-rag-backend-ja/tasks.md`
- `.kiro/specs/photo-albums-en/design.md`
- `.kiro/specs/photo-albums-en/requirements.md`
- `.kiro/specs/photo-albums-en/spec.json`
- `.kiro/specs/photo-albums-en/tasks.md`
- `.kiro/specs/vercel-ai-chatui-research-agent-ja/design.md`
- `.kiro/specs/vercel-ai-chatui-research-agent-ja/requirements.md`
- `.kiro/specs/vercel-ai-chatui-research-agent-ja/spec.json`
- `.kiro/specs/vercel-ai-chatui-research-agent-ja/tasks.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/docs/AGENTS.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-debug/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-debug/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-discovery/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-impl/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-impl/templates/debugger-prompt.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-impl/templates/implementer-prompt.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-impl/templates/reviewer-prompt.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-review/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-review/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-batch/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-design/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-init/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-quick/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-requirements/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-status/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-spec-tasks/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-steering-custom/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-steering/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-validate-design/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-validate-gap/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-validate-impl/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-verify-completion/SKILL.md`
- `tools/cc-sdd/templates/agents/antigravity-skills/skills/kiro-verify-completion/agents/openai.yaml`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/spec-design.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/spec-impl.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/spec-requirements.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/spec-tasks.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/steering-custom.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/steering.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/validate-design.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/validate-gap.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/agents/validate-impl.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/spec-design.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/spec-impl.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/spec-init.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/spec-quick.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/spec-requirements.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/spec-status.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/spec-tasks.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/steering-custom.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/steering.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/validate-design.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/validate-gap.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/commands/validate-impl.md`
- `tools/cc-sdd/templates/agents/claude-code-agent/docs/CLAUDE.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/docs/CLAUDE.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-debug/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-discovery/SKILL.md`
- `tools/cc-sdd/templates/agents/claude-code-skills/skills/kiro-impl/SKILL.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tools/cc-sdd/test/agentLayout.test.ts`
- `tools/cc-sdd/test/args.test.ts`
- `tools/cc-sdd/test/cliApplyManifest.test.ts`
- `tools/cc-sdd/test/cliDryRunManifest.test.ts`
- `tools/cc-sdd/test/cliEntry.test.ts`
- `tools/cc-sdd/test/cliEntryEdgeCases.test.ts`
- `tools/cc-sdd/test/configMerge.test.ts`
- `tools/cc-sdd/test/configStore.test.ts`
- `tools/cc-sdd/test/configStoreEdgeCases.test.ts`
- `tools/cc-sdd/test/kiroDir.test.ts`
- `tools/cc-sdd/test/manifestLoader.test.ts`
- `tools/cc-sdd/test/manifestPlanner.test.ts`
- `tools/cc-sdd/test/manifestProcessor.test.ts`
- `tools/cc-sdd/test/os.test.ts`
- `tools/cc-sdd/test/osFiltering.test.ts`
- `tools/cc-sdd/test/planExecutor.test.ts`
- `tools/cc-sdd/test/planPrinter.test.ts`
- `tools/cc-sdd/test/realManifestAntigravitySkills.test.ts`
- `tools/cc-sdd/test/realManifestClaudeCode.test.ts`
- `tools/cc-sdd/test/realManifestClaudeCodeAgent.test.ts`
- `tools/cc-sdd/test/realManifestClaudeCodeSkills.test.ts`
- `tools/cc-sdd/test/realManifestCodex.test.ts`
- `tools/cc-sdd/test/realManifestCodexSkills.test.ts`
- `tools/cc-sdd/test/realManifestCursor.test.ts`
- `tools/cc-sdd/test/realManifestCursorSkills.test.ts`
- `tools/cc-sdd/test/realManifestGeminiCli.test.ts`
- `tools/cc-sdd/test/realManifestGeminiCliSkills.test.ts`
- `tools/cc-sdd/test/realManifestGithubCopilot.test.ts`
- `tools/cc-sdd/test/realManifestGithubCopilotSkills.test.ts`
- `tools/cc-sdd/test/realManifestOpencode.test.ts`
- `tools/cc-sdd/test/realManifestOpencodeAgent.test.ts`
- `tools/cc-sdd/test/realManifestOpencodeSkills.test.ts`
- `tools/cc-sdd/test/realManifestWindsurf.test.ts`
- `tools/cc-sdd/test/realManifestWindsurfSkills.test.ts`
- `tools/cc-sdd/test/renderer.test.ts`
- `tools/cc-sdd/test/rendererEdgeCases.test.ts`
- `tools/cc-sdd/test/sharedRules.test.ts`
- `tools/cc-sdd/test/templateContext.test.ts`
- `tools/cc-sdd/test/templateFromResolved.test.ts`

### CI/Docker 후보

- `.github/workflows/claude-dispatch.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/stale.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 385 |
| .ts | 67 |
| .yaml | 36 |
| .json | 27 |
| .toml | 12 |
| .yml | 4 |
| .gitignore | 2 |
| .mjs | 1 |
| .png | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `.kiro/ 내부 책임 분리`
- `tools/cc-sdd/ 내부 책임 분리`
- `tools/cc-sdd/templates/ 내부 책임 분리`
- `.agents/skills/cc-sdd-new-agent/SKILL.md 스펙/명령 의미`
- `.agents/skills/cc-sdd-new-agent/agents/openai.yaml 스펙/명령 의미`
- `.agents/skills/cc-sdd-new-agent/references/plan-output-checklist.md 스펙/명령 의미`
- `.agents/skills/cc-sdd-new-agent/references/skills-migration.md 스펙/명령 의미`
- `.kiro/settings/rules/design-discovery-full.md 스펙/명령 의미`
- `tools/cc-sdd/package.json 실행 스크립트와 패키지 경계`
- `tools/cc-sdd/tsconfig.json 실행 스크립트와 패키지 경계`

