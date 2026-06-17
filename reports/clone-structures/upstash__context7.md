# upstash/context7 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/upstash__context7 |
| remote | https://github.com/upstash/context7 |
| HEAD | 1f6212b (2026-06-10) trigger the Test workflow only when they touch packages/** or the root files that affect the toolchain (#2747) |
| branch | master |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 322 |
| dirs | 103 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Context7 Platform - Up-to-date Code Docs For Any Prompt`, `❌ Without Context7`, `✅ With Context7`, `Installation`, `Important Tips`, `Use Library Id`, `Specify a Version`, `Add a Rule`, `Available Tools`, `CLI Commands`, `MCP Tools`, `More Documentation`, `Packages`, `Disclaimer`, `🤝 Connect with Us`, `📺 Context7 In Media`, `⭐ Star History`, `📄 License`

> Context7 Platform Up to date Code Docs For Any Prompt purple ) ❌ Without Context7 LLMs rely on outdated or generic information about the libraries you use. You get ❌ Code examples are outdated and based on year old training data ❌ Hallucinated APIs that don't even exist ❌ Generic answers for old package versions ✅ With Context7 Context7 pulls up to date, version specific documentation and code examples straight from the source — and places them directly into your prompt. Context7 fetches up to date code examples and documentation right into your LLM's context. No tab switching, no hallucinated APIs that don't exist, no outdated code generation. Works in two modes CLI + Skills — installs a skill that guides your agent to fetch docs using ctx7 CLI commands (no MCP required) MCP — registers a Context7 MCP server so your agent can call documentation tools natively Installation [!NOTE] API Ke

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .changeset | dir |
| .claude-plugin | dir |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .prettierignore | file |
| docs | dir |
| eslint.config.js | file |
| gemini-extension.json | file |
| i18n | dir |
| LICENSE | file |
| package.json | file |
| packages | dir |
| plugins | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| prettier.config.mjs | file |
| public | dir |
| README.md | file |
| rules | dir |
| SECURITY.md | file |
| server.json | file |
| skills | dir |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 134 |
| docs/ | 107 |
| plugins/ | 20 |
| i18n/ | 15 |
| (root) | 14 |
| .github/ | 10 |
| .changeset/ | 8 |
| skills/ | 6 |
| public/ | 5 |
| rules/ | 2 |
| .claude-plugin/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 134 | preferred |
| docs/ | 107 | preferred |
| skills/ | 6 | preferred |
| plugins/ | 20 | preferred |
| docs/images/ | 46 | large |
| packages/cli/ | 46 | large |
| packages/cli/src/ | 38 | large |
| packages/mcp/ | 27 | large |
| packages/sdk/ | 25 | large |
| packages/pi/ | 19 | large |
| docs/images/dashboard/ | 18 | large |
| packages/tools-ai-sdk/ | 17 | large |
| packages/sdk/src/ | 16 | large |
| i18n/ | 15 | large |
| docs/images/enterprise/ | 11 | large |
| .github/ | 10 | large |
| docs/howto/ | 10 | large |
| packages/mcp/src/ | 10 | large |
| packages/tools-ai-sdk/src/ | 10 | large |
| .changeset/ | 8 | large |
| docs/clients/ | 7 | large |
| docs/security/ | 7 | large |
| packages/pi/lib/ | 7 | large |
| docs/images/clients/ | 6 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `packages/cli/package.json`
- `packages/cli/tsconfig.json`
- `packages/mcp/Dockerfile`
- `packages/mcp/package.json`
- `packages/mcp/tsconfig.json`
- `packages/pi/package.json`
- `packages/pi/tsconfig.json`
- `packages/sdk/package.json`
- `packages/sdk/tsconfig.json`
- `packages/tools-ai-sdk/package.json`
- `packages/tools-ai-sdk/tsconfig.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @upstash/context7 | build, build:sdk, build:mcp, build:ai-sdk, typecheck, test, test:sdk, test:tools-ai-sdk, clean, lint, lint:check, format, format:check, release, release:snapshot | @inquirer/core, @inquirer/type |
| packages/cli/package.json | ctx7 | build, dev, typecheck, lint, lint:check, format, format:check, clean, test, test:watch | @inquirer/core, @inquirer/prompts, boxen, commander, figlet, open, ora, picocolors |
| packages/mcp/package.json | @upstash/context7-mcp | build, test, typecheck, lint, lint:check, format, format:check, dev, start, pack-mcpb | @modelcontextprotocol/sdk, @types/express, @upstash/redis, commander, express, jose, undici, zod |
| packages/pi/package.json | @upstash/context7-pi | test, test:watch, typecheck, lint, lint:check, format, format:check |  |
| packages/sdk/package.json | @upstash/context7-sdk | build, test, test:watch, typecheck, dev, clean, lint, lint:check |  |
| packages/tools-ai-sdk/package.json | @upstash/context7-tools-ai-sdk | build, dev, test, typecheck, clean |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.changeset/README.md`
- `README.md`
- `docs/adding-libraries.mdx`
- `docs/agentic-tools/ai-sdk/agents/context7-agent.mdx`
- `docs/agentic-tools/ai-sdk/getting-started.mdx`
- `docs/agentic-tools/ai-sdk/tools/query-docs.mdx`
- `docs/agentic-tools/ai-sdk/tools/resolve-library-id.mdx`
- `docs/agentic-tools/overview.mdx`
- `docs/api-guide.mdx`
- `docs/clients/claude-code.mdx`
- `docs/clients/cli.mdx`
- `docs/clients/codex.mdx`
- `docs/clients/copilot-cli.mdx`
- `docs/clients/cursor.mdx`
- `docs/clients/opencode.mdx`
- `docs/clients/pi.mdx`
- `docs/contact.mdx`
- `docs/docs.json`
- `docs/enterprise.mdx`
- `docs/enterprise/azure-apim.mdx`
- `docs/enterprise/deployment/docker.mdx`
- `docs/enterprise/deployment/kubernetes.mdx`
- `docs/enterprise/on-premise.mdx`
- `docs/enterprise/security/entra-sso.mdx`
- `docs/howto/api-keys.mdx`
- `docs/howto/chat-widget.mdx`
- `docs/howto/claiming-libraries.mdx`
- `docs/howto/oauth.mdx`
- `docs/howto/policies.mdx`
- `docs/howto/private-sources.mdx`
- `docs/howto/rules.mdx`
- `docs/howto/teamspace.mdx`
- `docs/howto/usage.mdx`
- `docs/howto/verification.mdx`
- `docs/images/clients/claude-code/mcp-details.png`
- `docs/images/clients/claude-code/mcp-list.png`
- `docs/images/clients/claude-code/mcp-unauthenticated.png`
- `docs/images/clients/cursor/logo.png`
- `docs/images/clients/cursor/mcp-settings.png`
- `docs/images/clients/cursor/rules.png`
- `docs/images/dashboard/add-payment-method.png`
- `docs/images/dashboard/admin/claim-library-button.png`
- `docs/images/dashboard/admin/claim-modal.png`
- `docs/images/dashboard/admin/config-overview.png`
- `docs/images/dashboard/admin/library-manage-button.png`
- `docs/images/dashboard/admin/library-metrics.png`
- `docs/images/dashboard/admin/managing-versions.png`
- `docs/images/dashboard/api-keys-card.png`
- `docs/images/dashboard/billing-page.png`
- `docs/images/dashboard/chat-widget.png`
- ... 30 more

### 에이전트 지침 후보

- `.changeset/bump-mcp-runtime-deps.md`
- `.github/workflows/mcp-registry.yml`
- `docs/images/clients/claude-code/mcp-details.png`
- `docs/images/clients/claude-code/mcp-list.png`
- `docs/images/clients/claude-code/mcp-unauthenticated.png`
- `docs/images/clients/cursor/mcp-settings.png`
- `docs/images/integrations/coderabbit/update-mcp-settings.png`
- `docs/skills.mdx`
- `packages/cli/src/__tests__/skill-list.test.ts`
- `packages/cli/src/commands/skill.ts`
- `packages/cli/src/setup/mcp-writer.ts`
- `packages/cli/src/utils/skill-name.ts`
- `packages/mcp/.prettierignore`
- `packages/mcp/CHANGELOG.md`
- `packages/mcp/Dockerfile`
- `packages/mcp/LICENSE`
- `packages/mcp/README.md`
- `packages/mcp/eslint.config.js`
- `packages/mcp/mcpb/.mcpbignore`
- `packages/mcp/mcpb/context7.mcpb`
- `packages/mcp/mcpb/manifest.json`
- `packages/mcp/package.json`
- `packages/mcp/prettier.config.mjs`
- `packages/mcp/schema/context7.json`
- `packages/mcp/smithery.yaml`
- `packages/mcp/src/index.ts`
- `packages/mcp/src/lib/api.ts`
- `packages/mcp/src/lib/auth/auth-prompt.ts`
- `packages/mcp/src/lib/constants.ts`
- `packages/mcp/src/lib/encryption.ts`
- `packages/mcp/src/lib/jwt.ts`
- `packages/mcp/src/lib/redis.ts`
- `packages/mcp/src/lib/sessionStore.ts`
- `packages/mcp/src/lib/types.ts`
- `packages/mcp/src/lib/utils.ts`
- `packages/mcp/test/certificate.test.ts`
- `packages/mcp/test/jwt.test.ts`
- `packages/mcp/tsconfig.json`
- `packages/mcp/tsconfig.test.json`
- `packages/pi/skills/context7-docs/SKILL.md`
- `plugins/claude/context7/.mcp.json`
- `plugins/claude/context7/skills/context7-mcp/SKILL.md`
- `plugins/context7-power/mcp.json`
- `plugins/copilot/context7/.mcp.json`
- `plugins/copilot/context7/skills/context7-mcp/SKILL.md`
- `plugins/cursor/context7/.cursor/plugin.json`
- `plugins/cursor/context7/mcp.json`
- `plugins/cursor/context7/skills/context7-mcp/SKILL.md`
- `rules/context7-mcp.md`
- `skills/context7-cli/SKILL.md`
- `skills/context7-cli/references/docs.md`
- `skills/context7-cli/references/setup.md`
- `skills/context7-cli/references/skills.md`
- `skills/context7-mcp/SKILL.md`
- `skills/find-docs/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `docs/sdks/ts/commands/get-context.mdx`
- `docs/sdks/ts/commands/search-library.mdx`
- `packages/cli/src/commands/auth.ts`
- `packages/cli/src/commands/docs.ts`
- `packages/cli/src/commands/generate.ts`
- `packages/cli/src/commands/remove.ts`
- `packages/cli/src/commands/setup.ts`
- `packages/cli/src/commands/skill.ts`
- `packages/cli/src/commands/upgrade.ts`
- `packages/pi/skills/context7-docs/SKILL.md`
- `packages/sdk/src/commands/command.ts`
- `packages/sdk/src/commands/get-context/index.test.ts`
- `packages/sdk/src/commands/get-context/index.ts`
- `packages/sdk/src/commands/get-context/types.ts`
- `packages/sdk/src/commands/index.ts`
- `packages/sdk/src/commands/search-library/index.test.ts`
- `packages/sdk/src/commands/search-library/index.ts`
- `packages/sdk/src/commands/search-library/types.ts`
- `packages/sdk/src/commands/types.ts`
- `plugins/claude/context7/commands/docs.md`
- `plugins/claude/context7/skills/context7-mcp/SKILL.md`
- `plugins/copilot/context7/commands/docs.md`
- `plugins/copilot/context7/skills/context7-mcp/SKILL.md`
- `plugins/cursor/context7/skills/context7-mcp/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/cli/src/__tests__/auth-commands.test.ts`
- `packages/cli/src/__tests__/auth-utils.test.ts`
- `packages/cli/src/__tests__/installer.test.ts`
- `packages/cli/src/__tests__/library-id.test.ts`
- `packages/cli/src/__tests__/remove.test.ts`
- `packages/cli/src/__tests__/setup.test.ts`
- `packages/cli/src/__tests__/skill-list.test.ts`
- `packages/cli/src/__tests__/storage-paths.test.ts`
- `packages/cli/src/__tests__/update-check.test.ts`
- `packages/cli/src/__tests__/upgrade-command.test.ts`
- `packages/mcp/test/certificate.test.ts`
- `packages/mcp/test/jwt.test.ts`
- `packages/pi/__tests__/extension.test.ts`
- `packages/sdk/src/client.test.ts`
- `packages/sdk/src/commands/get-context/index.test.ts`
- `packages/sdk/src/commands/search-library/index.test.ts`
- `packages/sdk/src/http/index.test.ts`
- `packages/tools-ai-sdk/src/index.test.ts`

### CI/Docker 후보

- `.github/workflows/canary-release.yml`
- `.github/workflows/ecr-deploy.yml`
- `.github/workflows/mcp-registry.yml`
- `.github/workflows/release.yml`
- `.github/workflows/test.yml`
- `packages/mcp/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 92 |
| .md | 57 |
| .mdx | 55 |
| .png | 48 |
| .json | 29 |
| .yml | 9 |
| .js | 6 |
| .svg | 5 |
| license | 4 |
| .mjs | 3 |
| .prettierignore | 3 |
| .yaml | 3 |
| .gitignore | 2 |
| .example | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `plugins/ 내부 책임 분리`
- `docs/images/ 내부 책임 분리`
- `docs/sdks/ts/commands/get-context.mdx 스펙/명령 의미`
- `docs/sdks/ts/commands/search-library.mdx 스펙/명령 의미`
- `packages/cli/src/commands/auth.ts 스펙/명령 의미`
- `packages/cli/src/commands/docs.ts 스펙/명령 의미`
- `packages/cli/src/commands/generate.ts 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`
- `packages/cli/package.json 실행 스크립트와 패키지 경계`
- `packages/cli/tsconfig.json 실행 스크립트와 패키지 경계`
- `packages/mcp/Dockerfile 실행 스크립트와 패키지 경계`
- `packages/mcp/package.json 실행 스크립트와 패키지 경계`

