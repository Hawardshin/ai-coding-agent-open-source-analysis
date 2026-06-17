# abhigyanpatwari/GitNexus 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/abhigyanpatwari__GitNexus |
| remote | https://github.com/abhigyanpatwari/GitNexus |
| HEAD | 78e5ff3 (2026-06-17) fix(wiki): keep graph DB pinned during generation (#2232) |
| branch | main |
| groups | llm-wiki-100 |
| files | 3936 |
| dirs | 1784 |
| stack | Node/TypeScript/JavaScript, Python, Rust, Go |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `GitNexus`, `Star History`, `Two Ways to Use GitNexus`, `Enterprise`, `Development`, `CLI + MCP (recommended)`, `Quick Start`, `Index your repo (run from repo root)`, `MCP Setup`, `Editor Support`, `Community Integrations`, `macOS / Linux`, `Windows`, `CLI Commands`, `Repository groups (multi-repo / monorepo service tracking)`, `Generate embeddings with the default 50,000 node safety cap`, `Disable the safety cap entirely`, `Use a custom cap`

> GitNexus ⚠️ Important Notice GitNexus has NO official cryptocurrency, token, or coin. Any token/coin using the GitNexus name on Pump.fun or any other platform is not affiliated with, endorsed by, or created by this project or its maintainers. Do not purchase any cryptocurrency claiming association with GitNexus. <div align="center" <a href="https //trendshift.io/repositories/19809" target=" blank" <img src="https //trendshift.io/api/badge/repositories/19809" alt="abhigyanpatwari%2FGitNexus Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a <h2 Join the official Discord to discuss ideas, issues etc!</h2 <a href="https //discord.gg/MgJrmsqr62" <img src="https //img.shields.io/discord/1477255801545429032?color=5865F2&logo=discord&logoColor=white" alt="Discord"/ </a <a href="https //www.npmjs.com/package/gitnexus" <img src="https //img.shields.io/npm/v/gitnexus.svg" a

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .claude-plugin | dir |
| .cursor | dir |
| .cursorrules | file |
| .devcontainer | dir |
| .dockerignore | file |
| .env.example | file |
| .gemini | dir |
| .git-blame-ignore-revs | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitleaks.toml | file |
| .history | dir |
| .husky | dir |
| .mcp.json | file |
| .prettierignore | file |
| .prettierrc | file |
| .sisyphus | dir |
| .windsurfrules | file |
| AGENTS.md | file |
| ARCHITECTURE.md | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| compound-engineering.local.md | file |
| CONTRIBUTING.md | file |
| deploy | dir |
| docker-compose.yaml | file |
| docker-server.mjs | file |
| docker-server.test.mjs | file |
| Dockerfile.cli | file |
| Dockerfile.web | file |
| DoD.md | file |
| eslint-rules | dir |
| eslint.config.mjs | file |
| eval | dir |
| gitnexus | dir |
| gitnexus-claude-plugin | dir |
| gitnexus-cursor-integration | dir |
| gitnexus-shared | dir |
| gitnexus-test-setup | dir |
| gitnexus-web | dir |
| GUARDRAILS.md | file |
| LICENSE | file |
| llms.txt | file |
| MIGRATION.md | file |
| package-lock.json | file |
| package.json | file |
| pr-swarm-review | dir |
| README.md | file |
| RUNBOOK.md | file |
| SECURITY.md | file |
| skills.mdm | file |
| swift-ingestion-gaps.md | file |
| TESTING.md | file |
| type-resolution-roadmap.md | file |
| type-resolution-system.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| gitnexus/ | 3548 |
| gitnexus-web/ | 134 |
| .github/ | 48 |
| eval/ | 45 |
| gitnexus-shared/ | 40 |
| (root) | 38 |
| gitnexus-claude-plugin/ | 23 |
| .claude/ | 18 |
| .devcontainer/ | 10 |
| gitnexus-cursor-integration/ | 9 |
| pr-swarm-review/ | 9 |
| .cursor/ | 5 |
| .sisyphus/ | 2 |
| .claude-plugin/ | 1 |
| .gemini/ | 1 |
| .history/ | 1 |
| .husky/ | 1 |
| deploy/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| gitnexus/ | 3548 | large |
| gitnexus/test/ | 2700 | large |
| gitnexus/test/fixtures/ | 2102 | large |
| gitnexus/src/ | 689 | large |
| gitnexus/src/core/ | 619 | large |
| gitnexus/test/unit/ | 393 | large |
| gitnexus/test/integration/ | 192 | large |
| gitnexus-web/ | 134 | large |
| gitnexus/vendor/ | 106 | large |
| gitnexus-web/src/ | 88 | large |
| .github/ | 48 | large |
| eval/ | 45 | large |
| gitnexus-shared/ | 40 | large |
| gitnexus-shared/src/ | 37 | large |
| gitnexus/src/cli/ | 34 | large |
| gitnexus-shared/src/scope-resolution/ | 25 | large |
| gitnexus-web/src/components/ | 25 | large |
| gitnexus-web/test/ | 25 | large |
| gitnexus/vendor/tree-sitter-dart/ | 25 | large |
| .github/workflows/ | 24 | large |
| gitnexus-claude-plugin/ | 23 | large |
| gitnexus-web/test/unit/ | 23 | large |
| gitnexus/vendor/tree-sitter-kotlin/ | 21 | large |
| gitnexus/vendor/tree-sitter-c/ | 20 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `.github/scripts/triage/requirements.txt`
- `eval/pyproject.toml`
- `eval/uv.lock`
- `gitnexus-shared/package.json`
- `gitnexus-shared/tsconfig.json`
- `gitnexus-web/package.json`
- `gitnexus-web/tsconfig.json`
- `gitnexus-web/vite.config.ts`
- `gitnexus/package.json`
- `gitnexus/test/fixtures/cross-file-binding/go-consumer-before-provider/go.mod`
- `gitnexus/test/fixtures/cross-file-binding/go-cross-file/go.mod`
- `gitnexus/test/fixtures/expo-app/package.json`
- `gitnexus/test/fixtures/group/test-monorepo/services/auth/package.json`
- `gitnexus/test/fixtures/group/test-monorepo/services/gateway/package.json`
- `gitnexus/test/fixtures/group/test-monorepo/services/orders/package.json`
- `gitnexus/test/fixtures/lang-resolution/api-e2e-test/package.json`
- `gitnexus/test/fixtures/lang-resolution/go-aliased-package-import/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-ambiguous/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-assignment-chain/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-call-result-binding/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-calls/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-chain-call/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-child-extends-parent/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-cmd-helper/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-constructor-type-inference/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-deep-field-chain/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-field-types/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-for-call-expr/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-local-shadow/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-member-calls/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-method-chain-binding/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-mixed-chain/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-multi-return-inference/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-nullable-receiver/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-parent-resolution/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-pkg/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-pointer-constructor-inference/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-qualified-base/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-receiver-method-free-call/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-receiver-resolution/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-return-type-inference/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-same-package-factory/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-split-method-owner/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-structural-interface-cross-package/go.mod`
- `gitnexus/test/fixtures/lang-resolution/go-variadic-resolution/go.mod`
- `gitnexus/test/fixtures/lang-resolution/python-django-app-imports/requirements.txt`
- `gitnexus/test/fixtures/lang-resolution/rust-local-shadow/Cargo.toml`
- `gitnexus/test/fixtures/lang-resolution/typescript-tsconfig-aliases/tsconfig.json`
- `gitnexus/tsconfig.json`
- `gitnexus/vendor/tree-sitter-c/package.json`
- `gitnexus/vendor/tree-sitter-dart/package.json`
- `gitnexus/vendor/tree-sitter-kotlin/package.json`
- `gitnexus/vendor/tree-sitter-proto/package.json`
- `gitnexus/vendor/tree-sitter-swift/package.json`
- `package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| gitnexus-shared/package.json | gitnexus-shared | build |  |
| gitnexus-web/package.json | gitnexus | dev, build, preview, test, test:watch, test:coverage, test:e2e, test:e2e:ui, test:e2e:report | @langchain/anthropic, @langchain/core, @langchain/google-genai, @langchain/langgraph, @langchain/ollama, @langchain/openai, @sigma/edge-curve, @tailwindcss/vite, axios, d3, dompurify, gitnexus-shared, graphology, graphology-indices |
| gitnexus/package.json | gitnexus | build, serve, dev, test, test:unit, pretest:integration, test:integration, test:watch, test:coverage, test:cross-platform, postinstall, assert-publish-coverage, prepare, prepack | @huggingface/transformers, @ladybugdb/core, @modelcontextprotocol/sdk, @scarf/scarf, busboy, cli-progress, commander, cors, express, express-rate-limit, glob, graphology, graphology-indices, graphology-utils |
| gitnexus/test/fixtures/expo-app/package.json | expo-app-fixture |  | expo-router |
| gitnexus/test/fixtures/group/test-monorepo/services/auth/package.json | @monorepo/auth |  |  |
| gitnexus/test/fixtures/group/test-monorepo/services/gateway/package.json | @monorepo/gateway |  |  |
| gitnexus/test/fixtures/group/test-monorepo/services/orders/package.json | @monorepo/orders |  |  |
| gitnexus/test/fixtures/lang-resolution/api-e2e-test/package.json | api-e2e-test |  | next, react |
| gitnexus/vendor/tree-sitter-c/package.json | tree-sitter-c |  |  |
| gitnexus/vendor/tree-sitter-dart/package.json | tree-sitter-dart |  |  |
| gitnexus/vendor/tree-sitter-kotlin/package.json | tree-sitter-kotlin |  |  |
| gitnexus/vendor/tree-sitter-proto/package.json | tree-sitter-proto |  |  |
| gitnexus/vendor/tree-sitter-swift/package.json | tree-sitter-swift |  |  |
| package.json | gitnexus-monorepo | prepare, format, format:check, lint, lint:fix, gitnexus:refresh, gitnexus:full |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| eval/pyproject.toml | gitnexus-swebench-eval | false | false | true | false |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| gitnexus/test/fixtures/lang-resolution/rust-local-shadow/Cargo.toml | rust-local-shadow | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| gitnexus/test/fixtures/cross-file-binding/go-consumer-before-provider/go.mod | go-consumer-before-provider | 1.21 |
| gitnexus/test/fixtures/cross-file-binding/go-cross-file/go.mod | go-cross-file | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-aliased-package-import/go.mod | example.com/aliasimport | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-ambiguous/go.mod | github.com/example/ambiguous | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-assignment-chain/go.mod | example.com/go-assignment-chain | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-call-result-binding/go.mod | example.com/callresult | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-calls/go.mod | example.com/go-calls | 1.22 |
| gitnexus/test/fixtures/lang-resolution/go-chain-call/go.mod | example.com/chaincall | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-child-extends-parent/go.mod | example.com/app | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-cmd-helper/go.mod | myapp | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-constructor-type-inference/go.mod | example.com/go-constructor-type-inference | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-deep-field-chain/go.mod | example.com/go-deep-field-chain | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-field-types/go.mod | example.com/go-field-types | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-for-call-expr/go.mod | example.com/for-call-expr | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-local-shadow/go.mod | go-local-shadow | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-member-calls/go.mod | example.com/go-member-calls | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-method-chain-binding/go.mod | example.com/methodchain | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-mixed-chain/go.mod | example.com/go-mixed-chain | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-multi-return-inference/go.mod | example.com/multireturn | 1.21 |
| gitnexus/test/fixtures/lang-resolution/go-nullable-receiver/go.mod | example.com/go-nullable-receiver | 1.21 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.devcontainer/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `eval/README.md`
- `gitnexus-cursor-integration/README.md`
- `gitnexus/README.md`
- `gitnexus/bench/emit-persistence/README.md`
- `gitnexus/vendor/tree-sitter-c/README.md`
- `gitnexus/vendor/tree-sitter-dart/README.md`
- `gitnexus/vendor/tree-sitter-kotlin/README.md`
- `gitnexus/vendor/tree-sitter-swift/README.md`
- `pr-swarm-review/README.md`

### 에이전트 지침 후보

- `.claude/README-gitnexus-reviewer-swarm.md`
- `.claude/agents/gitnexus-branch-hygiene-reviewer.md`
- `.claude/agents/gitnexus-docs-dod-reviewer.md`
- `.claude/agents/gitnexus-pr-facts-historian.md`
- `.claude/agents/gitnexus-risk-architect.md`
- `.claude/agents/gitnexus-security-boundary-reviewer.md`
- `.claude/agents/gitnexus-synthesis-critic.md`
- `.claude/agents/gitnexus-test-ci-verifier.md`
- `.claude/skills/gitnexus-pr-swarm-review/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-cli/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-guide/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-pdg-query/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-pr-review/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-taint-analysis/SKILL.md`
- `.cursor/.gitignore`
- `.cursor/commands/gitnexus-pr-swarm-review.md`
- `.cursor/index.mdc`
- `.cursor/rules/100-monorepo.mdc`
- `.cursor/rules/200-eval.mdc`
- `.mcp.json`
- `AGENTS.md`
- `CLAUDE.md`
- `eval/bridge/mcp_bridge.py`
- `eval/tests/test_mcp_bridge.py`
- `gitnexus-claude-plugin/.mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-cli/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-cli/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-debugging/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-debugging/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-exploring/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-exploring/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-guide/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-guide/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-impact-analysis/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-pdg-query/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-pr-review/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-refactoring/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-taint-analysis/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-debugging/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-exploring/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-impact-analysis/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-pr-review/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-refactoring/SKILL.md`
- `gitnexus/.claude/settings.local.json`
- `gitnexus/skills/gitnexus-cli.md`
- `gitnexus/skills/gitnexus-debugging.md`
- `gitnexus/skills/gitnexus-exploring.md`
- `gitnexus/skills/gitnexus-guide.md`
- `gitnexus/skills/gitnexus-impact-analysis.md`
- `gitnexus/skills/gitnexus-pdg-query.md`
- `gitnexus/skills/gitnexus-pr-review.md`
- `gitnexus/skills/gitnexus-refactoring.md`
- `gitnexus/skills/gitnexus-taint-analysis.md`
- `gitnexus/src/cli/mcp.ts`
- `gitnexus/src/cli/skill-gen.ts`
- `gitnexus/src/mcp/compatible-stdio-transport.ts`
- `gitnexus/src/mcp/core/embedder.ts`
- `gitnexus/src/mcp/core/lbug-adapter.ts`
- `gitnexus/src/mcp/http-transport.ts`
- `gitnexus/src/mcp/local/local-backend.ts`
- `gitnexus/src/mcp/resources.ts`
- `gitnexus/src/mcp/server.ts`
- `gitnexus/src/mcp/staleness.ts`
- `gitnexus/src/mcp/stdio-capture.ts`
- `gitnexus/src/mcp/stdio-context.ts`
- `gitnexus/src/mcp/tools.ts`
- `gitnexus/src/server/mcp-http.ts`
- `gitnexus/test/fixtures/lang-resolution/python-mcp-tools/helper1.py`
- `gitnexus/test/fixtures/lang-resolution/python-mcp-tools/helper10.py`
- `gitnexus/test/fixtures/lang-resolution/python-mcp-tools/helper11.py`
- `gitnexus/test/fixtures/lang-resolution/python-mcp-tools/helper12.py`
- `gitnexus/test/fixtures/lang-resolution/python-mcp-tools/helper13.py`
- `gitnexus/test/fixtures/lang-resolution/python-mcp-tools/helper14.py`
- `gitnexus/test/fixtures/lang-resolution/python-mcp-tools/helper2.py`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.claude/skills/gitnexus-pr-swarm-review/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-cli/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-guide/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-pdg-query/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-pr-review/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md`
- `.claude/skills/gitnexus/gitnexus-taint-analysis/SKILL.md`
- `.cursor/commands/gitnexus-pr-swarm-review.md`
- `.gemini/commands/gitnexus-pr-swarm-review.toml`
- `gitnexus-claude-plugin/skills/gitnexus-cli/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-cli/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-debugging/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-debugging/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-exploring/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-exploring/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-guide/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-guide/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-impact-analysis/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-pdg-query/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-pr-review/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-refactoring/SKILL.md`
- `gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json`
- `gitnexus-claude-plugin/skills/gitnexus-taint-analysis/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-debugging/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-exploring/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-impact-analysis/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-pr-review/SKILL.md`
- `gitnexus-cursor-integration/skills/gitnexus-refactoring/SKILL.md`
- `gitnexus/skills/gitnexus-cli.md`
- `gitnexus/skills/gitnexus-debugging.md`
- `gitnexus/skills/gitnexus-exploring.md`
- `gitnexus/skills/gitnexus-guide.md`
- `gitnexus/skills/gitnexus-impact-analysis.md`
- `gitnexus/skills/gitnexus-pdg-query.md`
- `gitnexus/skills/gitnexus-pr-review.md`
- `gitnexus/skills/gitnexus-refactoring.md`
- `gitnexus/skills/gitnexus-taint-analysis.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `eval/tests/__init__.py`
- `eval/tests/conftest.py`
- `eval/tests/test_errors.py`
- `eval/tests/test_mcp_bridge.py`
- `eval/tests/test_parse_run_id.py`
- `eval/tests/test_property_based.py`
- `eval/tests/test_tool_scripts.py`
- `gitnexus-web/e2e/debug-issues.spec.ts`
- `gitnexus-web/e2e/folder-upload.spec.ts`
- `gitnexus-web/e2e/heartbeat-reconnect.spec.ts`
- `gitnexus-web/e2e/language-switching.spec.ts`
- `gitnexus-web/e2e/manual-record.spec.ts`
- `gitnexus-web/e2e/multi-repo-scoping.spec.ts`
- `gitnexus-web/e2e/onboarding.spec.ts`
- `gitnexus-web/e2e/repo-switching.spec.ts`
- `gitnexus-web/e2e/server-connect.spec.ts`
- `gitnexus-web/e2e/tree-view.spec.ts`
- `gitnexus-web/src/hooks/app-state/graph.test.tsx`
- `gitnexus-web/src/lib/graph-adapter.test.ts`
- `gitnexus-web/src/lib/tree-layout.test.ts`
- `gitnexus-web/src/lib/upload-filter.test.ts`
- `gitnexus-web/test/fixtures/graph.ts`
- `gitnexus-web/test/setup.ts`
- `gitnexus-web/test/unit/agent-abort.test.ts`
- `gitnexus-web/test/unit/agent-history.test.ts`
- `gitnexus-web/test/unit/agent-prompt.test.ts`
- `gitnexus-web/test/unit/backend-client-retry.test.ts`
- `gitnexus-web/test/unit/bug-fixes.test.ts`
- `gitnexus-web/test/unit/constants.test.ts`
- `gitnexus-web/test/unit/embedding-auto-start.test.ts`
- `gitnexus-web/test/unit/filter-panel.test.ts`
- `gitnexus-web/test/unit/graph-load-decision.test.ts`
- `gitnexus-web/test/unit/graph.test.ts`
- `gitnexus-web/test/unit/heartbeat.test.ts`
- `gitnexus-web/test/unit/i18n.test.tsx`
- `gitnexus-web/test/unit/load-graph-anyway.test.tsx`
- `gitnexus-web/test/unit/mermaid-generator.test.ts`
- `gitnexus-web/test/unit/path-resolution.test.ts`
- `gitnexus-web/test/unit/perf-optimizations.test.ts`
- `gitnexus-web/test/unit/repo-analyzer-upload-race.test.tsx`
- `gitnexus-web/test/unit/security-guards.test.ts`
- `gitnexus-web/test/unit/server-connection.test.ts`
- `gitnexus-web/test/unit/settings-service.test.ts`
- `gitnexus-web/test/unit/test-setup-storage.test.ts`
- `gitnexus-web/test/unit/use-auto-scroll.test.tsx`
- `gitnexus-web/test/unit/utils.test.ts`
- `gitnexus/test/fixtures/api-impact-seed.ts`
- `gitnexus/test/fixtures/cobol/AUDITCONST.cpy`
- `gitnexus/test/fixtures/cobol/AUDITLOG.cbl`
- `gitnexus/test/fixtures/cobol/AUDITVARS.cpy`
- `gitnexus/test/fixtures/cobol/COPYLIB.cpy`
- `gitnexus/test/fixtures/cobol/CUSTDAT.cpy`
- `gitnexus/test/fixtures/cobol/CUSTUPDT.cbl`
- `gitnexus/test/fixtures/cobol/NESTED.cbl`
- `gitnexus/test/fixtures/cobol/RPTGEN.cbl`
- `gitnexus/test/fixtures/cobol/empty-file.cbl`
- `gitnexus/test/fixtures/cobol/fixed-format.cbl`
- `gitnexus/test/fixtures/cobol/malformed-multiline.cbl`
- `gitnexus/test/fixtures/cobol/whitespace-only.cbl`
- `gitnexus/test/fixtures/cross-file-binding/c-cross-file/src/db.c`
- `gitnexus/test/fixtures/cross-file-binding/c-cross-file/src/dict.c`
- `gitnexus/test/fixtures/cross-file-binding/c-cross-file/src/dict.h`
- `gitnexus/test/fixtures/cross-file-binding/c-cross-file/src/server.h`
- `gitnexus/test/fixtures/cross-file-binding/cpp-consumer-before-provider/a_consumer/main.cpp`
- `gitnexus/test/fixtures/cross-file-binding/cpp-consumer-before-provider/b_provider/provider.cpp`
- `gitnexus/test/fixtures/cross-file-binding/cpp-consumer-before-provider/b_provider/provider.h`
- `gitnexus/test/fixtures/cross-file-binding/cpp-cross-file/app/main.cpp`
- `gitnexus/test/fixtures/cross-file-binding/cpp-cross-file/models/user.cpp`
- `gitnexus/test/fixtures/cross-file-binding/cpp-cross-file/models/user.h`
- `gitnexus/test/fixtures/cross-file-binding/cpp-cross-file/models/user_factory.cpp`
- `gitnexus/test/fixtures/cross-file-binding/cpp-cross-file/models/user_factory.h`
- `gitnexus/test/fixtures/cross-file-binding/csharp-consumer-before-provider/AConsumer/Program.cs`
- `gitnexus/test/fixtures/cross-file-binding/csharp-consumer-before-provider/BProvider/User.cs`
- `gitnexus/test/fixtures/cross-file-binding/csharp-consumer-before-provider/BProvider/UserFactory.cs`
- `gitnexus/test/fixtures/cross-file-binding/csharp-consumer-before-provider/ConsumerBeforeProvider.csproj`
- `gitnexus/test/fixtures/cross-file-binding/csharp-cross-file/App/Program.cs`
- `gitnexus/test/fixtures/cross-file-binding/csharp-cross-file/CrossFile.csproj`
- `gitnexus/test/fixtures/cross-file-binding/csharp-cross-file/Models/User.cs`
- `gitnexus/test/fixtures/cross-file-binding/csharp-cross-file/Models/UserFactory.cs`
- `gitnexus/test/fixtures/cross-file-binding/go-consumer-before-provider/app/main.go`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.github/workflows/build-tree-sitter-prebuilds.yml`
- `.github/workflows/ci-devcontainer.yml`
- `.github/workflows/ci-e2e.yml`
- `.github/workflows/ci-quality.yml`
- `.github/workflows/ci-report.yml`
- `.github/workflows/ci-tests.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/dependency-review.yml`
- `.github/workflows/docker.yml`
- `.github/workflows/gitleaks.yml`
- `.github/workflows/grammar-update-monitor.yml`
- `.github/workflows/pr-autofix-apply.yml`
- `.github/workflows/pr-autofix-publish.yml`
- `.github/workflows/pr-autofix.yml`
- `.github/workflows/pr-description-check.yml`
- `.github/workflows/pr-labeler.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/scorecard.yml`
- `.github/workflows/tree-sitter-upgrade-readiness.yml`
- `.github/workflows/triage-sweep.yml`
- `.github/workflows/trivy.yml`
- `.github/workflows/workflow-lint.yml`
- `docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1669 |
| .py | 241 |
| .cs | 181 |
| .h | 174 |
| .java | 174 |
| .php | 153 |
| .kt | 138 |
| .rs | 136 |
| .cpp | 132 |
| .json | 108 |
| .go | 106 |
| .rb | 92 |
| .md | 83 |
| .tsx | 68 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `gitnexus/ 내부 책임 분리`
- `gitnexus/test/ 내부 책임 분리`
- `gitnexus/test/fixtures/ 내부 책임 분리`
- `gitnexus/src/ 내부 책임 분리`
- `gitnexus/src/core/ 내부 책임 분리`
- `.claude/skills/gitnexus-pr-swarm-review/SKILL.md 스펙/명령 의미`
- `.claude/skills/gitnexus/gitnexus-cli/SKILL.md 스펙/명령 의미`
- `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md 스펙/명령 의미`
- `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md 스펙/명령 의미`
- `.claude/skills/gitnexus/gitnexus-guide/SKILL.md 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `.github/scripts/triage/requirements.txt 실행 스크립트와 패키지 경계`
- `eval/pyproject.toml 실행 스크립트와 패키지 경계`
- `eval/uv.lock 실행 스크립트와 패키지 경계`
- `gitnexus-shared/package.json 실행 스크립트와 패키지 경계`

