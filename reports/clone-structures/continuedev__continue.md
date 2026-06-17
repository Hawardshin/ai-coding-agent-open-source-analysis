# continuedev/continue 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/continuedev__continue |
| remote | https://github.com/continuedev/continue |
| HEAD | eaa23c5 (2026-06-07) Merge pull request #12570 from continuedev/main |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 3044 |
| dirs | 511 |
| stack | Node/TypeScript/JavaScript, Python, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is Continue?`, `Documentation`, `Final 2.0.0 Release`, `VS Code`, `CLI`, `JetBrains`, `Contributors`, `Code friends`, `License`

> <h1 align="center" Continue</h1 <p align="center" Pioneering open source coding agent</p <div align="center" <a href="https //opensource.org/licenses/Apache 2.0" <img src="https //img.shields.io/badge/License Apache 2.0 blue.svg" / </a <a href="https //docs.continue.dev" <img src="https //img.shields.io/badge/Docs docs.continue.dev blue" / </a <a href="https //github.com/continuedev/continue/releases" <img src="https //img.shields.io/badge/Changelog GitHub Releases blue" / </a </div <p align="center" <img src="media/github readme.png" alt="Banner" / </p What is Continue? Note The continuedev/continue repository is no longer actively maintained and is read only for all users. Continue is a coding agent available as a CLI, VS Code extension, and JetBrains plugin. Documentation To learn how to configure Continue, how it works, and how to customize it, check out the Continue Docs. Final 2.0.

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .continue | dir |
| .continueignore | file |
| .eslintrc.shared.json | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .idea | dir |
| .node-version | file |
| .nvmrc | file |
| .prettierignore | file |
| .prettierrc | file |
| .vscode | dir |
| actions | dir |
| binary | dir |
| BUILD_DEPENDENCIES.md | file |
| CLA.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| core | dir |
| docs | dir |
| docs-search-dark-mode-fix.png | file |
| docs-site | dir |
| eval | dir |
| extensions | dir |
| gui | dir |
| LICENSE | file |
| manual-testing-sandbox | dir |
| media | dir |
| package-lock.json | file |
| package.json | file |
| packages | dir |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| skills | dir |
| sync | dir |
| TESTING.md | file |
| tsconfig.json | file |
| worktree-config.yaml | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| extensions/ | 849 |
| core/ | 727 |
| gui/ | 451 |
| docs/ | 419 |
| packages/ | 339 |
| manual-testing-sandbox/ | 49 |
| .github/ | 46 |
| .continue/ | 41 |
| docs-site/ | 40 |
| binary/ | 26 |
| (root) | 20 |
| sync/ | 13 |
| scripts/ | 8 |
| .vscode/ | 4 |
| actions/ | 4 |
| media/ | 3 |
| skills/ | 2 |
| .claude/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| core/ | 727 | preferred |
| packages/ | 339 | preferred |
| docs/ | 419 | preferred |
| skills/ | 2 | preferred |
| scripts/ | 8 | preferred |
| extensions/ | 849 | preferred |
| extensions/cli/ | 478 | large |
| gui/ | 451 | large |
| extensions/cli/src/ | 434 | large |
| gui/src/ | 385 | large |
| extensions/vscode/ | 247 | large |
| docs/images/ | 244 | large |
| gui/src/components/ | 213 | large |
| core/llm/ | 137 | large |
| extensions/intellij/ | 124 | large |
| packages/continue-sdk/ | 123 | large |
| extensions/intellij/src/ | 98 | large |
| docs/customize/ | 91 | large |
| packages/config-yaml/ | 91 | large |
| packages/config-yaml/src/ | 83 | large |
| core/autocomplete/ | 81 | large |
| core/llm/llms/ | 81 | large |
| core/tools/ | 78 | large |
| gui/src/pages/ | 77 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `binary/package.json`
- `binary/pkgJson/darwin-arm64/package.json`
- `binary/pkgJson/darwin-x64/package.json`
- `binary/pkgJson/linux-arm64/package.json`
- `binary/pkgJson/linux-x64/package.json`
- `binary/pkgJson/win32-arm64/package.json`
- `binary/pkgJson/win32-x64/package.json`
- `binary/tsconfig.json`
- `core/package.json`
- `core/tsconfig.json`
- `core/vendor/modules/@xenova/transformers/package.json`
- `core/vendor/package.json`
- `docs-site/next.config.js`
- `docs-site/package.json`
- `docs-site/tsconfig.json`
- `docs/package.json`
- `extensions/cli/package.json`
- `extensions/cli/tsconfig.json`
- `extensions/vscode/package.json`
- `extensions/vscode/tsconfig.json`
- `gui/package.json`
- `gui/tsconfig.json`
- `gui/vite.config.ts`
- `manual-testing-sandbox/Dockerfile`
- `manual-testing-sandbox/nested-folder/package.json`
- `manual-testing-sandbox/requirements.txt`
- `package.json`
- `packages/config-types/package.json`
- `packages/config-types/tsconfig.json`
- `packages/config-yaml/package.json`
- `packages/config-yaml/tsconfig.json`
- `packages/continue-sdk/package.json`
- `packages/continue-sdk/python/api/pyproject.toml`
- `packages/continue-sdk/python/api/requirements.txt`
- `packages/continue-sdk/tsconfig.json`
- `packages/continue-sdk/typescript/api/package.json`
- `packages/continue-sdk/typescript/api/tsconfig.json`
- `packages/continue-sdk/typescript/package.json`
- `packages/continue-sdk/typescript/tsconfig.json`
- `packages/fetch/package.json`
- `packages/fetch/tsconfig.json`
- `packages/llm-info/package.json`
- `packages/llm-info/tsconfig.json`
- `packages/openai-adapters/package.json`
- `packages/openai-adapters/tsconfig.json`
- `packages/terminal-security/package.json`
- `packages/terminal-security/tsconfig.json`
- `sync/Cargo.toml`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| binary/package.json | binary | test, build, rebuild, build:darwin-x64 | @octokit/rest, adm-zip, commander, core, follow-redirects, mac-ca, ncp, node-fetch, system-ca, tar, undici, uuid, vectordb, win-ca |
| binary/pkgJson/darwin-arm64/package.json | continue-binary |  |  |
| binary/pkgJson/darwin-x64/package.json | continue-binary |  |  |
| binary/pkgJson/linux-arm64/package.json | continue-binary |  |  |
| binary/pkgJson/linux-x64/package.json | continue-binary |  |  |
| binary/pkgJson/win32-arm64/package.json | continue-binary |  |  |
| binary/pkgJson/win32-x64/package.json | continue-binary |  |  |
| core/package.json | @continuedev/core | test, vitest, test:coverage, tsc:check, build, build:npm, lint, lint:fix | @anthropic-ai/sdk, @aws-sdk/client-bedrock-runtime, @aws-sdk/client-sagemaker-runtime, @aws-sdk/credential-providers, @continuedev/config-types, @continuedev/config-yaml, @continuedev/fetch, @continuedev/llm-info, @continuedev/openai-adapters, @continuedev/terminal-security, @modelcontextprotocol/sdk, @mozilla/readability, @octokit/rest, @xenova/transformers |
| core/vendor/modules/@xenova/transformers/package.json | @xenova/transformers | typegen, dev, build, generate-tests, test, readme, docs-api, docs-preview, docs-build | onnxruntime-web, sharp, @huggingface/jinja |
| core/vendor/package.json | vendor | test | @xenova/transformers |
| docs-site/package.json | continue-docs | prebuild, dev, build, start, lint, tsc:check, tsc:watch | @orama/orama, @radix-ui/react-accordion, @radix-ui/react-dialog, @radix-ui/react-tabs, @radix-ui/react-visually-hidden, class-variance-authority, clsx, cmdk, geist, gray-matter, lucide-react, next, next-mdx-remote, next-themes |
| docs/package.json | docs2 | dev, build, test | @c15t/react, axios, sharp, tar-fs |
| extensions/cli/package.json | @continuedev/cli | test, test:watch, test:ui, test:e2e, test:smoke, test:smoke-api, build:tsc, build:local-deps, build:validate, build:bundle, build, start, dev, repomix:sdk, repomix:cli, lint | fdir, find-up, fzf, js-yaml |
| extensions/vscode/package.json | continue | esbuild-base, vscode:prepublish, esbuild, esbuild-watch, esbuild-notify, esbuild:visualize, tsc, tsc:check, tsc-watch, rebuild, lint, lint:fix, test, vitest, write-build-timestamp, prepackage | @continuedev/config-types, @continuedev/fetch, @electron/rebuild, @reduxjs/toolkit, @vscode/ripgrep, axios, core, cors, dbinfoz, diff, downshift, express, fkill, follow-redirects |
| gui/package.json | gui | dev, tsc:check, build, preview, test, test:coverage, test:ui, test:watch, lint | @continuedev/config-yaml, @continuedev/terminal-security, @headlessui/react, @heroicons/react, @modelcontextprotocol/ext-apps, @panzoom/panzoom, @reduxjs/toolkit, @tiptap/core, @tiptap/extension-document, @tiptap/extension-dropcursor, @tiptap/extension-history, @tiptap/extension-image, @tiptap/extension-mention, @tiptap/extension-paragraph |
| manual-testing-sandbox/nested-folder/package.json | my-react-project | start, build, test, eject | @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-checkbox, react, react-dom, react-scripts |
| package.json | continue | tsc:watch, tsc:watch:gui, tsc:watch:vscode, tsc:watch:core, tsc:watch:binary, format, format:check, prepare | @ai-sdk/deepseek |
| packages/config-types/package.json | @continuedev/config-types | test, build | zod |
| packages/config-yaml/package.json | @continuedev/config-yaml | test, build, generate-schema | @continuedev/config-types, yaml, zod |
| packages/continue-sdk/package.json | @continuedev/sdk-generator | build, test, generate-client:typescript, generate-client:python, generate-client:ALL, swagger-ui | @continuedev/config-yaml, @openapitools/openapi-generator-cli, express, swagger-ui-express |
| packages/continue-sdk/typescript/api/package.json | @continuedev/hub-api | build, prepare |  |
| packages/continue-sdk/typescript/package.json | @continuedev/sdk | build, test, test:watch | openai |
| packages/fetch/package.json | @continuedev/fetch | test, build | @continuedev/config-types, follow-redirects, http-proxy-agent, https-proxy-agent, node-fetch |
| packages/llm-info/package.json | @continuedev/llm-info | test, build |  |
| packages/openai-adapters/package.json | @continuedev/openai-adapters | test, build | @ai-sdk/anthropic, @ai-sdk/google, @ai-sdk/deepseek, @ai-sdk/openai, @ai-sdk/xai, @anthropic-ai/sdk, @aws-sdk/client-bedrock-runtime, @aws-sdk/credential-providers, @continuedev/config-types, @continuedev/config-yaml, @continuedev/fetch, @google/genai, ai, dotenv |
| packages/terminal-security/package.json | @continuedev/terminal-security | test, test:watch, build, clean | shell-quote |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| packages/continue-sdk/python/api/pyproject.toml | openapi_client | true | false | false | false |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| sync/Cargo.toml | sync | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `actions/README.md`
- `binary/README.md`
- `core/diff/test-examples/README.md`
- `core/indexing/README.md`
- `core/indexing/docs/DocsService.skip.ts`
- `core/indexing/docs/DocsService.ts`
- `core/indexing/docs/article.ts`
- `core/indexing/docs/crawlers/CheerioCrawler.ts`
- `core/indexing/docs/crawlers/ChromiumCrawler.ts`
- `core/indexing/docs/crawlers/DefaultCrawler.ts`
- `core/indexing/docs/crawlers/DocsCrawler.test.ts`
- `core/indexing/docs/crawlers/DocsCrawler.ts`
- `core/indexing/docs/crawlers/GitHubCrawler.ts`
- `core/indexing/docs/crawlers/crawl-test-cases.ts`
- `core/indexing/docs/migrations.ts`
- `core/nextEdit/README.md`
- `core/vendor/README.md`
- `core/vendor/modules/@xenova/transformers/README.md`
- `docs-site/components/docs/CopyPageButton.tsx`
- `docs-site/components/docs/DocsSearch.tsx`
- `docs-site/components/docs/DocsShell.tsx`
- `docs-site/components/docs/PageNav.tsx`
- `docs-site/components/docs/TableOfContents.tsx`
- `docs-site/components/docs/mdx/Callout.tsx`
- `docs-site/components/docs/mdx/CardGroup.tsx`
- `docs-site/components/docs/mdx/CodeBlock.tsx`
- `docs-site/components/docs/mdx/CodeGroup.tsx`
- `docs-site/components/docs/mdx/Columns.tsx`
- `docs-site/components/docs/mdx/DocsAccordion.tsx`
- `docs-site/components/docs/mdx/DocsTabs.tsx`
- `docs-site/components/docs/mdx/MdxLink.tsx`
- `docs-site/components/docs/mdx/ModelRecommendations.tsx`
- `docs-site/components/docs/mdx/OSAutoDetect.tsx`
- `docs-site/components/docs/mdx/Steps.tsx`
- `docs-site/components/docs/mdx/index.tsx`
- `docs/.prettierignore`
- `docs/README.md`
- `docs/autocomplete/how-to-use-it.mdx`
- `docs/c15t-cookie-banner.js`
- `docs/chat/how-to-use-it.mdx`
- `docs/cli/configuration.mdx`
- `docs/cli/headless-mode.mdx`
- `docs/cli/quickstart.mdx`
- `docs/cli/tool-permissions.mdx`
- `docs/cli/tui-mode.mdx`
- `docs/custom.css`
- `docs/customize/custom-providers.mdx`
- `docs/customize/deep-dives/_apply.mdx`
- ... 30 more

### 에이전트 지침 후보

- `.claude/skills/docs-style/SKILL.md`
- `core/commands/slash/mcpSlashCommand.ts`
- `core/context/mcp/MCPConnection.ts`
- `core/context/mcp/MCPConnection.vitest.ts`
- `core/context/mcp/MCPManagerSingleton.ts`
- `core/context/mcp/MCPManagerSingleton.vitest.ts`
- `core/context/mcp/MCPOauth.ts`
- `core/context/mcp/MCPOauth.vitest.ts`
- `core/context/mcp/json/loadJsonMcpConfigs.ts`
- `core/tools/mcpToolName.ts`
- `core/tools/mcpToolName.vitest.ts`
- `docs/customize/deep-dives/mcp-examples.mdx`
- `docs/customize/deep-dives/mcp.mdx`
- `docs/customize/mcp-tools.mdx`
- `docs/guides/atlassian-mcp-continue-cookbook.mdx`
- `docs/guides/chrome-devtools-mcp-performance.mdx`
- `docs/guides/continue-docs-mcp-cookbook.mdx`
- `docs/guides/dlt-mcp-continue-cookbook.mdx`
- `docs/guides/github-mcp-continue-cookbook.mdx`
- `docs/guides/netlify-mcp-continuous-deployment.mdx`
- `docs/guides/sanity-mcp-continue-cookbook.mdx`
- `docs/guides/sentry-mcp-error-monitoring.mdx`
- `docs/guides/snyk-mcp-continue-cookbook.mdx`
- `docs/guides/supabase-mcp-database-workflow.mdx`
- `docs/images/customize/assets/images/mcp-blocks-overview-c9a104f9b586779c156f9cf34da197c2.png`
- `docs/images/customize/images/mcp-blocks-overview-c9a104f9b586779c156f9cf34da197c2.png`
- `docs/images/hub/blocks/images/mcp-blocks-overview-c9a104f9b586779c156f9cf34da197c2.png`
- `docs/images/hub/blocks/images/mcp-blocks-overview.png`
- `docs/images/mcp-blocks-overview-c9a104f9b586779c156f9cf34da197c2.png`
- `docs/images/mcp-blocks-overview.png`
- `docs/images/mcp-playwright-50b192a2ff395f7a6cc11618c5e2d5b1.png`
- `docs/images/mcp-playwright.png`
- `docs/reference/continue-mcp.mdx`
- `extensions/cli/AGENTS.md`
- `extensions/cli/spec/mcp.md`
- `extensions/cli/src/mcp-flag.integration.test.ts`
- `extensions/cli/src/services/mcpTransports.ts`
- `extensions/cli/src/services/mcpUtils.ts`
- `extensions/cli/src/tools/skills.test.ts`
- `extensions/cli/src/tools/skills.ts`
- `gui/src/pages/gui/ToolCallDiv/mcp-ext-apps.d.ts`
- `packages/config-yaml/src/__tests__/local-files/mcpServer.yaml`
- `packages/config-yaml/src/schemas/mcp/convertJson.test.ts`
- `packages/config-yaml/src/schemas/mcp/convertJson.ts`
- `packages/config-yaml/src/schemas/mcp/index.ts`
- `packages/config-yaml/src/schemas/mcp/json.ts`
- `skills/cn-check.zip`
- `skills/cn-check/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `.claude/skills/docs-style/SKILL.md`
- `core/commands/slash/built-in-legacy/cmd.ts`
- `core/commands/slash/built-in-legacy/commit.ts`
- `core/commands/slash/built-in-legacy/draftIssue.ts`
- `core/commands/slash/built-in-legacy/http.ts`
- `core/commands/slash/built-in-legacy/index.ts`
- `core/commands/slash/built-in-legacy/onboard.ts`
- `core/commands/slash/built-in-legacy/review.ts`
- `core/commands/slash/built-in-legacy/share.ts`
- `core/commands/slash/customSlashCommand.ts`
- `core/commands/slash/mcpSlashCommand.ts`
- `core/commands/slash/promptBlockSlashCommand.ts`
- `core/commands/slash/promptFileSlashCommand.ts`
- `core/commands/slash/ruleBlockSlashCommand.ts`
- `core/commands/slash/ruleBlockSlashCommand.vitest.ts`
- `core/commands/util.ts`
- `core/commands/util.vitest.ts`
- `core/llm/templates/chat.test.ts`
- `core/llm/templates/chat.ts`
- `core/llm/templates/edit.ts`
- `core/llm/templates/edit/claude.ts`
- `core/llm/templates/edit/codestral.ts`
- `core/llm/templates/edit/gpt.ts`
- `extensions/cli/src/__mocks__/commands/commands.ts`
- `extensions/cli/src/commands/BaseCommandOptions.ts`
- `extensions/cli/src/commands/chat.ts`
- `extensions/cli/src/commands/checks.ts`
- `extensions/cli/src/commands/commands.integration.test.ts`
- `extensions/cli/src/commands/commands.ts`
- `extensions/cli/src/commands/devbox-entrypoint.md`
- `extensions/cli/src/commands/init.ts`
- `extensions/cli/src/commands/login.ts`
- `extensions/cli/src/commands/logout.ts`
- `extensions/cli/src/commands/ls.test.ts`
- `extensions/cli/src/commands/ls.ts`
- `extensions/cli/src/commands/review.ts`
- `extensions/cli/src/commands/review/ReviewProgress.tsx`
- `extensions/cli/src/commands/review/diffContext.ts`
- `extensions/cli/src/commands/review/renderReport.ts`
- `extensions/cli/src/commands/review/resolveReviews.test.ts`
- `extensions/cli/src/commands/review/resolveReviews.ts`
- `extensions/cli/src/commands/review/reviewWorker.ts`
- `extensions/cli/src/commands/review/worktree.ts`
- `extensions/cli/src/commands/serve.helpers.ts`
- `extensions/cli/src/commands/serve.initialPrompt.test.ts`
- `extensions/cli/src/commands/serve.test.ts`
- `extensions/cli/src/commands/serve.ts`
- `extensions/cli/src/commands/stripThinkTags.test.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `binary/test/binary.test.ts`
- `core/autocomplete/context/root-path-context/test/RootPathContextService.vitest.ts`
- `core/autocomplete/context/root-path-context/test/files/__init__.py`
- `core/autocomplete/context/root-path-context/test/files/base_module.py`
- `core/autocomplete/context/root-path-context/test/files/file1.go`
- `core/autocomplete/context/root-path-context/test/files/file1.php`
- `core/autocomplete/context/root-path-context/test/files/python/classes.py`
- `core/autocomplete/context/root-path-context/test/files/python/functions.py`
- `core/autocomplete/context/root-path-context/test/files/typescript/arrowFunctions.ts`
- `core/autocomplete/context/root-path-context/test/files/typescript/classMethods.ts`
- `core/autocomplete/context/root-path-context/test/files/typescript/classes.ts`
- `core/autocomplete/context/root-path-context/test/files/typescript/functions.ts`
- `core/autocomplete/context/root-path-context/test/files/typescript/generators.ts`
- `core/autocomplete/context/root-path-context/test/testCases/index.ts`
- `core/autocomplete/context/root-path-context/test/testCases/python.ts`
- `core/autocomplete/context/root-path-context/test/testCases/typescript.ts`
- `core/autocomplete/context/root-path-context/test/testUtils.ts`
- `core/autocomplete/filtering/test/NEGATIVE_TEST_CASES/QWEN_JSON.txt`
- `core/autocomplete/filtering/test/NEGATIVE_TEST_CASES/QWEN_TYPESCRIPT.txt`
- `core/autocomplete/filtering/test/NEGATIVE_TEST_CASES/STARCODER_JSON.txt`
- `core/autocomplete/filtering/test/NEGATIVE_TEST_CASES/STARCODER_PYTHON.TXT`
- `core/autocomplete/filtering/test/NEGATIVE_TEST_CASES/STARCODER_RUBY.TXT`
- `core/autocomplete/filtering/test/NEGATIVE_TEST_CASES/STARCODER_RUST.TXT`
- `core/autocomplete/filtering/test/filter.vitest.ts`
- `core/autocomplete/filtering/test/testCases.ts`
- `core/autocomplete/filtering/test/util.ts`
- `core/autocomplete/postprocessing/index.test.ts`
- `core/autocomplete/util/AutocompleteLruCache.test.ts`
- `core/context/providers/HttpContextProvider.test.ts`
- `core/edit/lazy/deterministic.test.ts`
- `core/edit/lazy/findInAst.test.ts`
- `core/edit/lazy/streamLazyApply.test.ts`
- `core/edit/lazy/unifiedDiffApply.test.ts`
- `core/edit/searchAndReplace/findSearchMatches.test.ts`
- `core/edit/streamDiffLines.test.ts`
- `core/indexing/CodeSnippetsIndex.test.ts`
- `core/indexing/CodebaseIndexer.test.ts`
- `core/indexing/FullTextSearchCodebaseIndex.test.ts`
- `core/indexing/chunk/ChunkCodebaseIndex.test.ts`
- `core/indexing/chunk/basic.test.ts`
- `core/indexing/chunk/chunk.test.ts`
- `core/indexing/chunk/code.test.ts`
- `core/indexing/docs/crawlers/DocsCrawler.test.ts`
- `core/indexing/refreshIndex.test.ts`
- `core/indexing/shouldIgnore.test.ts`
- `core/indexing/test/indexing.ts`
- `core/indexing/utils.test.ts`
- `core/indexing/walkDir.test.ts`
- `core/llm/asyncEncoder.test.ts`
- `core/llm/countTokens.test.ts`
- `core/llm/getAdjustedTokenCount.test.ts`
- `core/llm/index.test.ts`
- `core/llm/llm.test.ts`
- `core/llm/llms/Bedrock.test.ts`
- `core/llm/llms/Ollama.test.ts`
- `core/llm/llms/OpenAI.test.ts`
- `core/llm/llms/test/supportsFim.test.ts`
- `core/llm/logFormatter.test.ts`
- `core/llm/openaiTypeConverters.test.ts`
- `core/llm/templates/chat.test.ts`
- `core/llm/toolSupport.test.ts`
- `core/llm/utils/extractContentFromCodeBlocks.test.ts`
- `core/llm/utils/extractPathsFromCodeBlocks.test.ts`
- `core/llm/utils/getSecureID.test.ts`
- `core/llm/utils/retry.test.ts`
- `core/test/fixtures.ts`
- `core/test/jest.global-setup.ts`
- `core/test/jest.setup-after-env.js`
- `core/test/testDir.ts`
- `core/test/testEnv.test.ts`
- `core/test/vitest.global-setup.ts`
- `core/test/vitest.setup.ts`
- `core/tools/definitions/requestRule.test.ts`
- `core/tools/definitions/toolDefinitions.test.ts`
- `core/tools/implementations/createRuleBlock.test.ts`
- `core/util/GlobalContext.test.ts`
- `core/util/LruCache.test.ts`
- `core/util/chatDescriber.test.ts`
- `core/util/extractMinimalStackTraceInfo.test.ts`
- `core/util/fetchFavicon.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/auto-assign-issue.yaml`
- `.github/workflows/auto-fix-failed-tests.yml`
- `.github/workflows/auto-release.yml`
- `.github/workflows/cla.yaml`
- `.github/workflows/cli-pr-checks.yml`
- `.github/workflows/continue-agents.yml`
- `.github/workflows/delete-stale-branches.yaml`
- `.github/workflows/docs-gh-pages.yml`
- `.github/workflows/jetbrains-release.yaml`
- `.github/workflows/label-merged-prs.yml`
- `.github/workflows/main-build.yaml`
- `.github/workflows/main.yaml`
- `.github/workflows/metrics.yaml`
- `.github/workflows/pr-build-upload-vsix.yaml`
- `.github/workflows/pr-checks.yaml`
- `.github/workflows/preview.yaml`
- `.github/workflows/release-config-yaml.yml`
- `.github/workflows/release-fetch.yml`
- `.github/workflows/release-llm-info.yml`
- `.github/workflows/release-openai-adapters.yml`
- `.github/workflows/reusable-release.yml`
- `.github/workflows/run-continue-agent.yml`
- `.github/workflows/runloop-blueprint-staging-template.json`
- `.github/workflows/runloop-blueprint-template.json`
- `.github/workflows/similar-issues.yml`
- `.github/workflows/snyk-agent.yaml`
- `.github/workflows/stable-release.yml`
- `.github/workflows/stale-issue-helper.yaml`
- `.github/workflows/submit-github-dependency-graph.yml`
- `.github/workflows/tidy-up-codebase.yml`
- `.github/workflows/upload-runloop-blueprint.yml`
- `.github/workflows/vscode-prerelease.yml`
- `.github/workflows/vscode-version-bump.yml`
- `manual-testing-sandbox/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1432 |
| .tsx | 351 |
| .png | 271 |
| .mdx | 152 |
| .json | 126 |
| .md | 126 |
| .kt | 86 |
| .scm | 68 |
| .js | 64 |
| .py | 51 |
| .yml | 36 |
| .gif | 32 |
| .yaml | 28 |
| .diff | 18 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `core/ 내부 책임 분리`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.claude/skills/docs-style/SKILL.md 스펙/명령 의미`
- `core/commands/slash/built-in-legacy/cmd.ts 스펙/명령 의미`
- `core/commands/slash/built-in-legacy/commit.ts 스펙/명령 의미`
- `core/commands/slash/built-in-legacy/draftIssue.ts 스펙/명령 의미`
- `core/commands/slash/built-in-legacy/http.ts 스펙/명령 의미`
- `binary/package.json 실행 스크립트와 패키지 경계`
- `binary/pkgJson/darwin-arm64/package.json 실행 스크립트와 패키지 경계`
- `binary/pkgJson/darwin-x64/package.json 실행 스크립트와 패키지 경계`
- `binary/pkgJson/linux-arm64/package.json 실행 스크립트와 패키지 경계`
- `binary/pkgJson/linux-x64/package.json 실행 스크립트와 패키지 경계`

