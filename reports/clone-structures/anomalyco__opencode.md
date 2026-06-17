# anomalyco/opencode 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/anomalyco__opencode |
| remote | https://github.com/anomalyco/opencode |
| HEAD | 4c9abff (2026-06-10) sync release versions for v1.17.1 |
| branch | dev |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 5666 |
| dirs | 710 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Installation`, `YOLO`, `Package managers`, `Desktop App (BETA)`, `macOS (Homebrew)`, `Windows (Scoop)`, `Examples`, `Agents`, `Documentation`, `Contributing`, `Building on OpenCode`

> <p align="center" <a href="https //opencode.ai" <picture <source srcset="packages/console/app/src/asset/logo ornate dark.svg" media="(prefers color scheme dark)" <source srcset="packages/console/app/src/asset/logo ornate light.svg" media="(prefers color scheme light)" <img src="packages/console/app/src/asset/logo ornate light.svg" alt="OpenCode logo" </picture </a </p <p align="center" The open source AI coding agent.</p <p align="center" <a href="https //opencode.ai/discord" <img alt="Discord" src="https //img.shields.io/discord/1391832426048651334?style=flat square&label=discord" / </a <a href="https //www.npmjs.com/package/opencode ai" <img alt="npm" src="https //img.shields.io/npm/v/opencode ai?style=flat square" / </a <a href="https //github.com/anomalyco/opencode/actions/workflows/publish.yml" <img alt="Build status" src="https //img.shields.io/github/actions/workflow/status/anomal

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitleaksignore | file |
| .husky | dir |
| .opencode | dir |
| .oxlintrc.json | file |
| .prettierignore | file |
| .vscode | dir |
| .zed | dir |
| AGENTS.md | file |
| bun.lock | file |
| bunfig.toml | file |
| CONTEXT.md | file |
| CONTRIBUTING.md | file |
| flake.lock | file |
| flake.nix | file |
| github | dir |
| infra | dir |
| install | file |
| LICENSE | file |
| nix | dir |
| package.json | file |
| packages | dir |
| patches | dir |
| perf | dir |
| README.ar.md | file |
| README.bn.md | file |
| README.br.md | file |
| README.bs.md | file |
| README.da.md | file |
| README.de.md | file |
| README.es.md | file |
| README.fr.md | file |
| README.gr.md | file |
| README.it.md | file |
| README.ja.md | file |
| README.ko.md | file |
| README.md | file |
| README.no.md | file |
| README.pl.md | file |
| README.ru.md | file |
| README.th.md | file |
| README.tr.md | file |
| README.uk.md | file |
| README.vi.md | file |
| README.zh.md | file |
| README.zht.md | file |
| screenshot-uk.png | file |
| script | dir |
| sdks | dir |
| SECURITY.md | file |
| specs | dir |
| sst-env.d.ts | file |
| sst.config.ts | file |
| STATS.md | file |
| tsconfig.json | file |
| turbo.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 5464 |
| (root) | 46 |
| .opencode/ | 38 |
| .github/ | 36 |
| script/ | 15 |
| specs/ | 14 |
| sdks/ | 13 |
| patches/ | 11 |
| github/ | 10 |
| infra/ | 8 |
| nix/ | 6 |
| .vscode/ | 2 |
| .husky/ | 1 |
| .zed/ | 1 |
| perf/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 5464 | preferred |
| specs/ | 14 | preferred |
| packages/ui/ | 1698 | large |
| packages/ui/src/ | 1690 | large |
| packages/opencode/ | 749 | large |
| packages/web/ | 689 | large |
| packages/web/src/ | 680 | large |
| packages/console/ | 528 | large |
| packages/core/ | 517 | large |
| packages/opencode/src/ | 399 | large |
| packages/app/ | 318 | large |
| packages/core/src/ | 309 | large |
| packages/opencode/test/ | 306 | large |
| packages/app/src/ | 291 | large |
| packages/console/app/ | 269 | large |
| packages/desktop/ | 242 | large |
| packages/tui/ | 235 | large |
| packages/console/core/ | 219 | large |
| packages/tui/src/ | 181 | large |
| packages/desktop/icons/ | 160 | large |
| packages/llm/ | 146 | large |
| packages/core/test/ | 138 | large |
| packages/llm/test/ | 82 | large |
| packages/stats/ | 69 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `bun.lock`
- `github/bun.lock`
- `github/package.json`
- `github/tsconfig.json`
- `package.json`
- `packages/app/e2e/tsconfig.json`
- `packages/app/package.json`
- `packages/app/tsconfig.json`
- `packages/app/vite.config.ts`
- `packages/cli/package.json`
- `packages/cli/tsconfig.json`
- `packages/console/app/package.json`
- `packages/console/app/tsconfig.json`
- `packages/console/app/vite.config.ts`
- `packages/console/core/package.json`
- `packages/console/core/tsconfig.json`
- `packages/console/function/package.json`
- `packages/console/function/tsconfig.json`
- `packages/console/mail/package.json`
- `packages/console/resource/bun.lock`
- `packages/console/resource/package.json`
- `packages/console/resource/tsconfig.json`
- `packages/console/support/package.json`
- `packages/console/support/tsconfig.json`
- `packages/console/support/vite.config.ts`
- `packages/containers/base/Dockerfile`
- `packages/containers/bun-node/Dockerfile`
- `packages/containers/publish/Dockerfile`
- `packages/containers/rust/Dockerfile`
- `packages/containers/tauri-linux/Dockerfile`
- `packages/containers/tsconfig.json`
- `packages/core/package.json`
- `packages/core/tsconfig.json`
- `packages/desktop/package.json`
- `packages/desktop/tsconfig.json`
- `packages/effect-drizzle-sqlite/package.json`
- `packages/effect-drizzle-sqlite/tsconfig.json`
- `packages/effect-sqlite-node/package.json`
- `packages/effect-sqlite-node/tsconfig.json`
- `packages/enterprise/package.json`
- `packages/enterprise/tsconfig.json`
- `packages/enterprise/vite.config.ts`
- `packages/function/package.json`
- `packages/function/tsconfig.json`
- `packages/http-recorder/package.json`
- `packages/http-recorder/tsconfig.json`
- `packages/llm/package.json`
- `packages/llm/tsconfig.json`
- `packages/opencode/Dockerfile`
- `packages/opencode/package.json`
- `packages/opencode/tsconfig.json`
- `packages/plugin/package.json`
- `packages/plugin/tsconfig.json`
- `packages/script/package.json`
- `packages/script/tsconfig.json`
- `packages/sdk/js/package.json`
- `packages/sdk/js/tsconfig.json`
- `packages/server/package.json`
- `packages/server/tsconfig.json`
- `packages/slack/package.json`
- `packages/slack/tsconfig.json`
- `packages/stats/app/package.json`
- `packages/stats/app/tsconfig.json`
- `packages/stats/app/vite.config.ts`
- `packages/stats/core/package.json`
- `packages/stats/core/tsconfig.json`
- `packages/stats/server/Dockerfile`
- `packages/stats/server/package.json`
- `packages/stats/server/tsconfig.json`
- `packages/storybook/package.json`
- `packages/storybook/tsconfig.json`
- `packages/tui/package.json`
- `packages/tui/tsconfig.json`
- `packages/ui/package.json`
- `packages/ui/tsconfig.json`
- `packages/ui/vite.config.ts`
- `packages/web/package.json`
- `packages/web/tsconfig.json`
- `sdks/vscode/bun.lock`
- `sdks/vscode/package.json`
- ... 3 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| github/package.json | github |  | @actions/core, @actions/github, @octokit/graphql, @octokit/rest, @opencode-ai/sdk |
| package.json | opencode | dev, dev:desktop, dev:web, dev:console, dev:stats, dev:storybook, lint, typecheck, upgrade-opentui, postinstall, prepare, random, sso, test | @aws-sdk/client-s3, @opencode-ai/plugin, @opencode-ai/script, @opencode-ai/sdk, heap-snapshot-toolkit, typescript |
| packages/app/package.json | @opencode-ai/app | typecheck, start, dev, build, serve, test, test:unit, test:unit:watch, test:e2e, test:e2e:local, test:e2e:ui, test:e2e:report | @kobalte/core, @opencode-ai/core, @opencode-ai/sdk, @opencode-ai/ui, @sentry/solid, @shikijs/transformers, @solid-primitives/active-element, @solid-primitives/audio, @solid-primitives/event-bus, @solid-primitives/event-listener, @solid-primitives/i18n, @solid-primitives/media, @solid-primitives/resize-observer, @solid-primitives/scheduled |
| packages/cli/package.json | @opencode-ai/cli | build, dev, typecheck | @effect/platform-node, @opencode-ai/core, @opencode-ai/sdk, @opencode-ai/server, @opencode-ai/tui, @opentui/core, @opentui/solid, @parcel/watcher, effect, solid-js |
| packages/console/app/package.json | @opencode-ai/console-app | typecheck, dev, dev:remote, build, start | @cloudflare/vite-plugin, @ibm/plex, @jsx-email/render, @kobalte/core, @openauthjs/openauth, @opencode-ai/console-core, @opencode-ai/console-mail, @opencode-ai/console-resource, @opencode-ai/ui, @smithy/eventstream-codec, @smithy/util-utf8, @solidjs/meta, @solidjs/router, @solidjs/start |
| packages/console/core/package.json | @opencode-ai/console-core | db, db-dev, db-prod, shell, shell-dev, shell-prod, update-models, promote-models-to-dev, promote-models-to-prod, pull-models-from-dev, pull-models-from-prod, update-limits, promote-limits-to-dev, promote-limits-to-prod, referral-backfill, typecheck | @aws-sdk/client-sts, @jsx-email/render, @opencode-ai/console-mail, @opencode-ai/console-resource, @planetscale/database, aws4fetch, drizzle-orm, postgres, stripe, ulid, zod |
| packages/console/function/package.json | @opencode-ai/console-function | typecheck | @ai-sdk/anthropic, @ai-sdk/openai, @ai-sdk/openai-compatible, @opencode-ai/console-core, @opencode-ai/console-resource, @openauthjs/openauth, ai, zod |
| packages/console/mail/package.json | @opencode-ai/console-mail | dev | @jsx-email/all, @jsx-email/cli, @tsconfig/bun, @types/react, react, solid-js |
| packages/console/resource/package.json | @opencode-ai/console-resource |  | @cloudflare/workers-types |
| packages/console/support/package.json | @opencode-ai/console-support | typecheck, dev | @cloudflare/vite-plugin, @opencode-ai/console-core, @solidjs/meta, @solidjs/router, @solidjs/start, nitro, solid-js, vite |
| packages/core/package.json | @opencode-ai/core | db, migration, fix-node-pty, test, typecheck | @ai-sdk/alibaba, @ai-sdk/amazon-bedrock, @ai-sdk/anthropic, @ai-sdk/azure, @ai-sdk/cerebras, @ai-sdk/cohere, @ai-sdk/deepinfra, @ai-sdk/gateway, @ai-sdk/google, @ai-sdk/google-vertex, @ai-sdk/groq, @ai-sdk/mistral, @ai-sdk/openai, @ai-sdk/openai-compatible |
| packages/desktop/package.json | @opencode-ai/desktop | typecheck, predev, dev, prebuild, build, preview, package, package:mac, package:win, package:linux, native:build | @zip.js/zip.js, effect, electron-context-menu, electron-log, electron-store, electron-updater, electron-window-state, marked |
| packages/effect-drizzle-sqlite/package.json | @opencode-ai/effect-drizzle-sqlite | test, typecheck | drizzle-orm, effect |
| packages/effect-sqlite-node/package.json | @opencode-ai/effect-sqlite-node | typecheck | effect |
| packages/enterprise/package.json | @opencode-ai/enterprise | typecheck, dev, build, build:cloudflare, start, shell-prod | @opencode-ai/core, @opencode-ai/ui, aws4fetch, @pierre/diffs, @solidjs/router, @solidjs/start, @solidjs/meta, @hono/standard-validator, hono, hono-openapi, js-base64, luxon, nitro, solid-js |
| packages/function/package.json | @opencode-ai/function |  | @octokit/auth-app, @octokit/rest, hono, jose |
| packages/http-recorder/package.json | @opencode-ai/http-recorder | test, typecheck, build, verify:package | @effect/platform-node, @effect/platform-node-shared |
| packages/llm/package.json | @opencode-ai/llm | setup:recording-env, test, typecheck | @smithy/eventstream-codec, @smithy/util-utf8, aws4fetch, effect |
| packages/opencode/package.json | opencode | typecheck, test, test:httpapi, bench:test, profile:test, build, dev, dev:temporary | @actions/core, @actions/github, @agentclientprotocol/sdk, @ai-sdk/alibaba, @ai-sdk/amazon-bedrock, @ai-sdk/anthropic, @ai-sdk/azure, @ai-sdk/cerebras, @ai-sdk/cohere, @ai-sdk/deepinfra, @ai-sdk/gateway, @ai-sdk/google, @ai-sdk/google-vertex, @ai-sdk/groq |
| packages/plugin/package.json | @opencode-ai/plugin | typecheck, build | @opencode-ai/sdk, effect, zod |
| packages/script/package.json | @opencode-ai/script |  | semver |
| packages/sdk/js/package.json | @opencode-ai/sdk | typecheck, build | cross-spawn |
| packages/server/package.json | @opencode-ai/server | typecheck | @opencode-ai/core, drizzle-orm, effect |
| packages/slack/package.json | @opencode-ai/slack | dev, typecheck | @opencode-ai/sdk, @slack/bolt |
| packages/stats/app/package.json | @opencode-ai/stats-app | typecheck, dev, build, start | @ibm/plex, @opencode-ai/stats-core, @opencode-ai/ui, @solidjs/meta, @solidjs/router, @solidjs/start, d3-geo, d3-scale, effect, i18n-iso-countries, nitro, solid-js, sst, topojson-client |
| packages/stats/core/package.json | @opencode-ai/stats-core | db:generate, db:migrate, db:push, db:studio, honeycomb:backfill, typecheck | @aws-sdk/client-athena, @planetscale/database, drizzle-orm, effect, sst |
| packages/stats/server/package.json | @opencode-ai/stats-server | start, typecheck | @aws-sdk/client-firehose, @effect/platform-node, @opencode-ai/stats-core, effect, sst |
| packages/storybook/package.json | @opencode-ai/storybook | storybook, build |  |
| packages/tui/package.json | @opencode-ai/tui | test, typecheck | @opencode-ai/core, @opencode-ai/plugin, @opencode-ai/sdk, @opencode-ai/ui, @opentui/core, @opentui/keymap, @opentui/solid, @solid-primitives/scheduled, clipboardy, diff, effect, fuzzysort, open, opentui-spinner |
| packages/ui/package.json | @opencode-ai/ui | typecheck, test, dev, generate:tailwind, generate:v2-oc2 | @kobalte/core, @opencode-ai/core, @opencode-ai/sdk, @pierre/diffs, @shikijs/transformers, @solid-primitives/bounds, @solid-primitives/event-listener, @solid-primitives/media, @solid-primitives/resize-observer, @solidjs/meta, @solidjs/router, diff, dompurify, fuzzysort |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.opencode/glossary/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `github/README.md`
- `packages/app/README.md`
- `packages/console/app/README.md`
- `packages/console/app/src/routes/docs/[...path].ts`
- `packages/console/app/src/routes/docs/index.ts`
- `packages/containers/README.md`
- `packages/core/src/github-copilot/README.md`
- `packages/desktop/README.md`
- `packages/desktop/icons/README.md`
- `packages/docs/LICENSE`
- `packages/docs/README.md`
- `packages/docs/ai-tools/claude-code.mdx`
- `packages/docs/ai-tools/cursor.mdx`
- `packages/docs/ai-tools/windsurf.mdx`
- `packages/docs/development.mdx`
- `packages/docs/docs.json`
- `packages/docs/essentials/code.mdx`
- `packages/docs/essentials/images.mdx`
- `packages/docs/essentials/markdown.mdx`
- `packages/docs/essentials/navigation.mdx`
- `packages/docs/essentials/reusable-snippets.mdx`
- `packages/docs/essentials/settings.mdx`
- `packages/docs/favicon-v3.svg`
- `packages/docs/favicon.svg`
- `packages/docs/images/checks-passed.png`
- `packages/docs/images/hero-dark.png`
- `packages/docs/images/hero-light.png`
- `packages/docs/index.mdx`
- `packages/docs/logo/dark.svg`
- `packages/docs/logo/light.svg`
- `packages/docs/quickstart.mdx`
- `packages/docs/snippets/snippet-intro.mdx`
- `packages/enterprise/README.md`
- `packages/http-recorder/README.md`
- `packages/llm/README.md`
- `packages/opencode/README.md`
- `packages/opencode/src/control-plane/dev/README.md`
- `packages/opencode/src/plugin/openai/README.md`
- `packages/opencode/src/sync/README.md`
- `packages/slack/README.md`
- `packages/stats/README.md`
- `packages/ui/src/assets/icons/file-types/contributing.svg`
- `packages/ui/src/assets/icons/file-types/readme.svg`
- `packages/web/README.md`
- `packages/web/src/content/docs/acp.mdx`
- `packages/web/src/content/docs/agents.mdx`
- `packages/web/src/content/docs/ar/acp.mdx`
- ... 30 more

### 에이전트 지침 후보

- `.opencode/skills/effect/SKILL.md`
- `AGENTS.md`
- `packages/app/AGENTS.md`
- `packages/app/src/components/dialog-select-mcp.tsx`
- `packages/app/src/context/global-sync/mcp.test.ts`
- `packages/app/src/context/global-sync/mcp.ts`
- `packages/app/src/context/mcp.ts`
- `packages/core/src/config/mcp.ts`
- `packages/core/src/config/plugin/skill.ts`
- `packages/core/src/plugin/skill.ts`
- `packages/core/src/plugin/skill/customize-opencode.md`
- `packages/core/src/skill.ts`
- `packages/core/src/skill/discovery.ts`
- `packages/core/src/skill/guidance.ts`
- `packages/core/src/tool/AGENTS.md`
- `packages/core/src/tool/skill.ts`
- `packages/core/src/v1/config/mcp.ts`
- `packages/core/src/v1/config/skills.ts`
- `packages/core/test/config/skill.test.ts`
- `packages/core/test/plugin/skill.test.ts`
- `packages/core/test/skill-discovery.test.ts`
- `packages/core/test/skill.test.ts`
- `packages/core/test/skill/guidance.test.ts`
- `packages/core/test/tool-skill.test.ts`
- `packages/desktop/AGENTS.md`
- `packages/effect-drizzle-sqlite/AGENTS.md`
- `packages/llm/AGENTS.md`
- `packages/opencode/AGENTS.md`
- `packages/opencode/src/cli/cmd/debug/skill.ts`
- `packages/opencode/src/cli/cmd/mcp.ts`
- `packages/opencode/src/mcp/auth.ts`
- `packages/opencode/src/mcp/index.ts`
- `packages/opencode/src/mcp/oauth-callback.ts`
- `packages/opencode/src/mcp/oauth-provider.ts`
- `packages/opencode/src/server/routes/instance/httpapi/AGENTS.md`
- `packages/opencode/src/server/routes/instance/httpapi/groups/mcp.ts`
- `packages/opencode/src/server/routes/instance/httpapi/handlers/mcp.ts`
- `packages/opencode/src/session/llm/AGENTS.md`
- `packages/opencode/src/skill/discovery.ts`
- `packages/opencode/src/skill/index.ts`
- `packages/opencode/src/tool/mcp-websearch.ts`
- `packages/opencode/src/tool/skill.ts`
- `packages/opencode/src/tool/skill.txt`
- `packages/opencode/test/AGENTS.md`
- `packages/opencode/test/cli/acp/skills.test.ts`
- `packages/opencode/test/cli/mcp-add.test.ts`
- `packages/opencode/test/fake/skill.ts`
- `packages/opencode/test/fixture/skills/agents-sdk/SKILL.md`
- `packages/opencode/test/fixture/skills/agents-sdk/references/callable.md`
- `packages/opencode/test/fixture/skills/cloudflare/SKILL.md`
- `packages/opencode/test/fixture/skills/index.json`
- `packages/opencode/test/mcp/auth.test.ts`
- `packages/opencode/test/mcp/headers.test.ts`
- `packages/opencode/test/mcp/lifecycle.test.ts`
- `packages/opencode/test/mcp/oauth-auto-connect.test.ts`
- `packages/opencode/test/mcp/oauth-browser.test.ts`
- `packages/opencode/test/mcp/oauth-callback.test.ts`
- `packages/opencode/test/mcp/oauth-provider.test.ts`
- `packages/opencode/test/server/AGENTS.md`
- `packages/opencode/test/server/httpapi-mcp-oauth.test.ts`
- `packages/opencode/test/server/httpapi-mcp.test.ts`
- `packages/opencode/test/skill/discovery.test.ts`
- `packages/opencode/test/skill/skill.test.ts`
- `packages/opencode/test/tool/skill.test.ts`
- `packages/server/src/groups/skill.ts`
- `packages/server/src/handlers/skill.ts`
- `packages/stats/AGENTS.md`
- `packages/tui/src/component/dialog-mcp.tsx`
- `packages/tui/src/component/dialog-skill.tsx`
- `packages/tui/src/feature-plugins/sidebar/mcp.tsx`
- `packages/web/src/content/docs/ar/mcp-servers.mdx`
- `packages/web/src/content/docs/ar/skills.mdx`
- `packages/web/src/content/docs/bs/mcp-servers.mdx`
- `packages/web/src/content/docs/bs/skills.mdx`
- `packages/web/src/content/docs/da/mcp-servers.mdx`
- `packages/web/src/content/docs/da/skills.mdx`
- `packages/web/src/content/docs/de/mcp-servers.mdx`
- `packages/web/src/content/docs/de/skills.mdx`
- `packages/web/src/content/docs/es/mcp-servers.mdx`
- `packages/web/src/content/docs/es/skills.mdx`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.opencode/skills/effect/SKILL.md`
- `packages/cli/src/commands/commands.ts`
- `packages/cli/src/commands/handlers/debug/agents.ts`
- `packages/cli/src/commands/handlers/default.ts`
- `packages/cli/src/commands/handlers/migrate.ts`
- `packages/cli/src/commands/handlers/serve.ts`
- `packages/cli/src/commands/handlers/service/password.ts`
- `packages/cli/src/commands/handlers/service/restart.ts`
- `packages/cli/src/commands/handlers/service/start.ts`
- `packages/cli/src/commands/handlers/service/status.ts`
- `packages/cli/src/commands/handlers/service/stop.ts`
- `packages/console/mail/emails/templates/InviteEmail.tsx`
- `packages/console/mail/emails/templates/static/JetBrainsMono-Medium.woff2`
- `packages/console/mail/emails/templates/static/JetBrainsMono-Regular.woff2`
- `packages/console/mail/emails/templates/static/ibm-plex-mono-latin-400.woff2`
- `packages/console/mail/emails/templates/static/ibm-plex-mono-latin-500.woff2`
- `packages/console/mail/emails/templates/static/ibm-plex-mono-latin-600.woff2`
- `packages/console/mail/emails/templates/static/ibm-plex-mono-latin-700.woff2`
- `packages/console/mail/emails/templates/static/logo.png`
- `packages/console/mail/emails/templates/static/right-arrow.png`
- `packages/console/mail/emails/templates/static/rubik-latin.woff2`
- `packages/console/mail/emails/templates/static/zen-logo.png`
- `packages/opencode/specs/effect/error-boundaries-plan.md`
- `packages/opencode/specs/effect/errors.md`
- `packages/opencode/specs/effect/facades.md`
- `packages/opencode/specs/effect/guide.md`
- `packages/opencode/specs/effect/instance-context.md`
- `packages/opencode/specs/effect/loose-ends.md`
- `packages/opencode/specs/effect/migration.md`
- `packages/opencode/specs/effect/routes.md`
- `packages/opencode/specs/effect/schema.md`
- `packages/opencode/specs/effect/server-package.md`
- `packages/opencode/specs/effect/todo.md`
- `packages/opencode/specs/effect/tools.md`
- `packages/opencode/specs/openapi-translation-cleanup.md`
- `packages/opencode/specs/tui-plugins.md`
- `packages/opencode/specs/v2/api.ts`
- `packages/opencode/specs/v2/message-shape.md`
- `packages/opencode/specs/v2/notifications.md`
- `packages/opencode/specs/v2/tui-command-shim.md`
- `packages/opencode/test/fixture/skills/agents-sdk/SKILL.md`
- `packages/opencode/test/fixture/skills/agents-sdk/references/callable.md`
- `packages/opencode/test/fixture/skills/cloudflare/SKILL.md`
- `packages/opencode/test/fixture/skills/index.json`
- `specs/project.md`
- `specs/storage/effect-sqlite-package.md`
- `specs/storage/remove-opencode-db.md`
- `specs/tui-package.md`
- `specs/v2/api.html`
- `specs/v2/catalog-config-plugin-lifecycle.md`
- `specs/v2/config.md`
- `specs/v2/instructions.md`
- `specs/v2/provider-model.md`
- `specs/v2/provider-policy.md`
- `specs/v2/schema-changelog.md`
- `specs/v2/session.md`
- `specs/v2/todo.md`
- `specs/v2/tools.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/app/e2e/regression/prompt-thinking-level.spec.ts`
- `packages/app/e2e/regression/session-list-path-loading.spec.ts`
- `packages/app/e2e/regression/session-timeline-collapse-state.spec.ts`
- `packages/app/e2e/regression/session-timeline-context-resize.spec.ts`
- `packages/app/e2e/smoke/session-timeline.spec.ts`
- `packages/app/src/addons/serialize.test.ts`
- `packages/app/src/components/dialog-custom-provider.test.ts`
- `packages/app/src/components/directory-picker.test.ts`
- `packages/app/src/components/file-tree.test.ts`
- `packages/app/src/components/prompt-input/attachments.test.ts`
- `packages/app/src/components/prompt-input/build-request-parts.test.ts`
- `packages/app/src/components/prompt-input/editor-dom.test.ts`
- `packages/app/src/components/prompt-input/history.test.ts`
- `packages/app/src/components/prompt-input/placeholder.test.ts`
- `packages/app/src/components/prompt-input/server-attachment.test.ts`
- `packages/app/src/components/prompt-input/submit.test.ts`
- `packages/app/src/components/session/session-context-breakdown.test.ts`
- `packages/app/src/components/session/session-context-metrics.test.ts`
- `packages/app/src/components/titlebar-history.test.ts`
- `packages/app/src/components/titlebar-session-events.test.ts`
- `packages/app/src/components/updater-action.test.ts`
- `packages/app/src/context/command-keybind.test.ts`
- `packages/app/src/context/command.test.ts`
- `packages/app/src/context/comments.test.ts`
- `packages/app/src/context/file-content-eviction-accounting.test.ts`
- `packages/app/src/context/file/path.test.ts`
- `packages/app/src/context/file/watcher.test.ts`
- `packages/app/src/context/global-sync/bootstrap.test.ts`
- `packages/app/src/context/global-sync/child-store.test.ts`
- `packages/app/src/context/global-sync/event-reducer.test.ts`
- `packages/app/src/context/global-sync/mcp.test.ts`
- `packages/app/src/context/global-sync/queue.test.ts`
- `packages/app/src/context/global-sync/session-cache.test.ts`
- `packages/app/src/context/global-sync/session-prefetch.test.ts`
- `packages/app/src/context/global-sync/session-trim.test.ts`
- `packages/app/src/context/global-sync/utils.test.ts`
- `packages/app/src/context/layout-scroll.test.ts`
- `packages/app/src/context/layout.test.ts`
- `packages/app/src/context/model-variant.test.ts`
- `packages/app/src/context/permission-auto-respond.test.ts`
- `packages/app/src/context/server-sdk.test.ts`
- `packages/app/src/context/server-sync.test.ts`
- `packages/app/src/context/server.test.ts`
- `packages/app/src/context/sync-optimistic.test.ts`
- `packages/app/src/context/terminal.test.ts`
- `packages/app/src/i18n/parity.test.ts`
- `packages/app/src/pages/error-description.test.ts`
- `packages/app/src/pages/layout/helpers.test.ts`
- `packages/app/src/pages/session/composer/session-composer-state.test.ts`
- `packages/app/src/pages/session/file-tab-scroll.test.ts`
- `packages/app/src/pages/session/helpers.test.ts`
- `packages/app/src/pages/session/message-gesture.test.ts`
- `packages/app/src/pages/session/session-model-helpers.test.ts`
- `packages/app/src/pages/session/terminal-panel.test.ts`
- `packages/app/src/pages/session/use-session-hash-scroll.test.ts`
- `packages/app/src/theme-preload.test.ts`
- `packages/app/src/utils/diffs.test.ts`
- `packages/app/src/utils/notification-click.test.ts`
- `packages/app/src/utils/persist.test.ts`
- `packages/app/src/utils/prompt.test.ts`
- `packages/app/src/utils/refcount.test.ts`
- `packages/app/src/utils/runtime-adapters.test.ts`
- `packages/app/src/utils/scoped-cache.test.ts`
- `packages/app/src/utils/server-errors.test.ts`
- `packages/app/src/utils/server-health.test.ts`
- `packages/app/src/utils/server-scope.test.ts`
- `packages/app/src/utils/server.test.ts`
- `packages/app/src/utils/terminal-websocket-url.test.ts`
- `packages/app/src/utils/terminal-writer.test.ts`
- `packages/app/src/utils/uuid.test.ts`
- `packages/app/src/utils/worktree.test.ts`
- `packages/app/src/wsl/settings-model.test.ts`
- `packages/console/app/test/providerUsage.test.ts`
- `packages/console/app/test/rateLimiter.test.ts`
- `packages/console/core/test/date.test.ts`
- `packages/console/core/test/subscription.test.ts`
- `packages/core/test/account.test.ts`
- `packages/core/test/agent.test.ts`
- `packages/core/test/application-tools.test.ts`
- `packages/core/test/background-job.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/beta.yml`
- `.github/workflows/close-issues.yml`
- `.github/workflows/close-prs.yml`
- `.github/workflows/compliance-close.yml`
- `.github/workflows/containers.yml`
- `.github/workflows/deploy.yml`
- `.github/workflows/docs-locale-sync.yml`
- `.github/workflows/docs-update.yml`
- `.github/workflows/duplicate-issues.yml`
- `.github/workflows/generate.yml`
- `.github/workflows/nix-eval.yml`
- `.github/workflows/nix-hashes.yml`
- `.github/workflows/notify-discord.yml`
- `.github/workflows/opencode.yml`
- `.github/workflows/pr-management.yml`
- `.github/workflows/pr-standards.yml`
- `.github/workflows/publish-github-action.yml`
- `.github/workflows/publish-vscode.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/release-github-action.yml`
- `.github/workflows/review.yml`
- `.github/workflows/stats.yml`
- `.github/workflows/storybook.yml`
- `.github/workflows/test.yml`
- `.github/workflows/triage.yml`
- `.github/workflows/typecheck.yml`
- `packages/containers/base/Dockerfile`
- `packages/containers/bun-node/Dockerfile`
- `packages/containers/publish/Dockerfile`
- `packages/containers/rust/Dockerfile`
- `packages/containers/tauri-linux/Dockerfile`
- `packages/opencode/Dockerfile`
- `packages/stats/server/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 2016 |
| .svg | 1251 |
| .mdx | 627 |
| .tsx | 524 |
| .json | 332 |
| .png | 215 |
| .css | 156 |
| .md | 130 |
| .sql | 118 |
| .aac | 45 |
| .mp3 | 45 |
| .txt | 42 |
| .yml | 34 |
| .gitignore | 18 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `specs/ 내부 책임 분리`
- `packages/ui/ 내부 책임 분리`
- `packages/ui/src/ 내부 책임 분리`
- `packages/opencode/ 내부 책임 분리`
- `.opencode/skills/effect/SKILL.md 스펙/명령 의미`
- `packages/cli/src/commands/commands.ts 스펙/명령 의미`
- `packages/cli/src/commands/handlers/debug/agents.ts 스펙/명령 의미`
- `packages/cli/src/commands/handlers/default.ts 스펙/명령 의미`
- `packages/cli/src/commands/handlers/migrate.ts 스펙/명령 의미`
- `bun.lock 실행 스크립트와 패키지 경계`
- `github/bun.lock 실행 스크립트와 패키지 경계`
- `github/package.json 실행 스크립트와 패키지 경계`
- `github/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`

