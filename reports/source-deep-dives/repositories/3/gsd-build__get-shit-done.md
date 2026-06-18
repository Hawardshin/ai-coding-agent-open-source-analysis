# gsd-build/get-shit-done 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 1854 files, 87 directories.

## 요약

- 조사 단위: `sources/gsd-build__get-shit-done` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,854 files, 87 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/feat-3025-mcp-token-budget-docs.test.cjs, tests/mcp-tool-inheritance.test.cjs, .changeset/mcp-token-budget-docs.md이고, 의존성 단서는 anthropic, claude, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | gsd-build/get-shit-done |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | JavaScript |
| Stars | 64305 |
| Forks | 5465 |
| License | MIT License |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/gsd-build__get-shit-done](../../../../sources/gsd-build__get-shit-done) |
| 기존 보고서 | [reports/clone-structures/gsd-build__get-shit-done.md](../../../clone-structures/gsd-build__get-shit-done.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1854 / 87 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .changeset, .githooks, .github, .out-of-scope, .plans, agents, assets, bin, commands, docs, get-shit-done, hooks, scripts, sdk, tests |
| 상위 확장자 | .md: 786, .cjs: 661, .ts: 303, .yml: 28, .json: 19, .mjs: 19, .js: 13, .sh: 10, (none): 8, .svg: 3, .png: 2, .jsonl: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 125 |
| docs | documentation surface | 34 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| commands | top-level component | 1 |
| get-shit-done | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build:hooks | node scripts/build-hooks.js |
| build | package.json | build:sdk | cd sdk && npm ci && npm run build |
| quality | package.json | check:alias-drift | cd sdk && npm run check:alias-drift |
| quality | package.json | check:state-document-fresh | cd sdk && npm run check:state-document-fresh |
| quality | package.json | check:configuration-fresh | cd sdk && npm run check:configuration-fresh |
| build | package.json | check:workstream-inventory-builder-fresh | cd sdk && npm run check:workstream-inventory-builder-fresh |
| quality | package.json | check:project-root-fresh | cd sdk && npm run check:project-root-fresh |
| quality | package.json | check:plan-scan-fresh | cd sdk && npm run check:plan-scan-fresh |
| quality | package.json | check:secrets-fresh | cd sdk && npm run check:secrets-fresh |
| quality | package.json | check:schema-detect-fresh | cd sdk && npm run check:schema-detect-fresh |
| quality | package.json | check:decisions-fresh | cd sdk && npm run check:decisions-fresh |
| quality | package.json | check:workstream-name-policy-fresh | cd sdk && npm run check:workstream-name-policy-fresh |
| build | package.json | prepublishOnly | npm run build:hooks && npm run build:sdk |
| test | package.json | pretest | npm run build:sdk && npm run lint:skill-deps |
| test | package.json | pretest:coverage | npm run build:sdk |
| quality | package.json | lint:descriptions | node scripts/lint-descriptions.cjs |
| quality | package.json | lint:skill-deps | node scripts/lint-skill-deps.cjs |
| test | package.json | lint:tests | node scripts/lint-no-source-grep.cjs |
| test | package.json | lint:test-file-count | node scripts/lint-test-file-count.cjs |
| quality | package.json | lint:pr-checks | node scripts/lint-pr-check-project-dir.cjs |
| quality | package.json | lint:changeset | node scripts/changeset/lint.cjs |
| quality | package.json | lint:docs | node scripts/lint-docs-required.cjs |
| utility | package.json | changeset | node scripts/changeset/new.cjs |
| utility | package.json | changelog:render | node scripts/changeset/cli.cjs render |
| test | package.json | test | node scripts/run-tests.cjs |
| test | package.json | test:unit | node scripts/run-tests.cjs --suite unit |
| test | package.json | test:integration | node scripts/run-tests.cjs --suite integration |
| test | package.json | test:install | node scripts/run-tests.cjs --suite install |
| test | package.json | test:security | node scripts/run-tests.cjs --suite security |
| test | package.json | test:slow | node scripts/run-tests.cjs --suite slow |
| test | package.json | test:coverage | c8 --check-coverage --lines 70 --reporter text --include 'get-shit-done/bin/lib/*.cjs' --exclude 'tests/**' --all node scripts/run-tests.cjs |
| test | package.json | test:coverage:unit | c8 --check-coverage --lines 70 --reporter text --include 'get-shit-done/bin/lib/*.cjs' --exclude 'tests/**' --all node scripts/run-tests.cjs --suite unit |
| test | package.json | test:coverage:all | npm run test:coverage |
| entrypoint | package.json bin | install.js | bin/install.js |
| entrypoint | package.json bin | gsd-sdk.js | bin/gsd-sdk.js |
| entrypoint | package.json bin | gsd-sdk.js | bin/gsd-sdk.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/feat-3025-mcp-token-budget-docs.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/feat-3025-mcp-token-budget-docs.test.cjs) | mcp signal |
| mcp | [tests/mcp-tool-inheritance.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/mcp-tool-inheritance.test.cjs) | mcp signal |
| mcp | [.changeset/mcp-token-budget-docs.md](../../../../sources/gsd-build__get-shit-done/.changeset/mcp-token-budget-docs.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/gsd-build__get-shit-done/AGENTS.md) | agentRuntime signal |
| agentRuntime | [CONTEXT.md](../../../../sources/gsd-build__get-shit-done/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [tests/agent-frontmatter.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-frontmatter.test.cjs) | agentRuntime signal |
| agentRuntime | [tests/agent-install-validation.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-install-validation.test.cjs) | agentRuntime signal |
| entrypoints | [sdk/src/cli.test.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/cli.test.ts) | entrypoints signal |
| entrypoints | [sdk/src/cli.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/cli.ts) | entrypoints signal |
| entrypoints | [sdk/src/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [get-shit-done/bin/check-latest-version.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/check-latest-version.cjs) | entrypoints signal |
| instruction | [get-shit-done/templates/copilot-instructions.md](../../../../sources/gsd-build__get-shit-done/get-shit-done/templates/copilot-instructions.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 86 | [sdk/src/cli.test.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/cli.test.ts)<br>[sdk/src/cli.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/cli.ts)<br>[sdk/src/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/index.ts)<br>[get-shit-done/bin/check-latest-version.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/check-latest-version.cjs)<br>[get-shit-done/bin/gsd-tools.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/gsd-tools.cjs)<br>[get-shit-done/bin/verify-reapply-patches.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/verify-reapply-patches.cjs)<br>[get-shit-done/bin/lib/active-workstream-store.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/lib/active-workstream-store.cjs)<br>[get-shit-done/bin/lib/adr-parser.cjs](../../../../sources/gsd-build__get-shit-done/get-shit-done/bin/lib/adr-parser.cjs) |
| agentRuntime | 122 | [AGENTS.md](../../../../sources/gsd-build__get-shit-done/AGENTS.md)<br>[CONTEXT.md](../../../../sources/gsd-build__get-shit-done/CONTEXT.md)<br>[tests/agent-frontmatter.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-frontmatter.test.cjs)<br>[tests/agent-install-validation.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-install-validation.test.cjs)<br>[tests/agent-required-reading-consistency.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-required-reading-consistency.test.cjs)<br>[tests/agent-size-budget.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-size-budget.test.cjs)<br>[tests/agent-skills-awareness.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-skills-awareness.test.cjs)<br>[tests/agent-skills.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-skills.test.cjs) |
| mcp | 3 | [tests/feat-3025-mcp-token-budget-docs.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/feat-3025-mcp-token-budget-docs.test.cjs)<br>[tests/mcp-tool-inheritance.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/mcp-tool-inheritance.test.cjs)<br>[.changeset/mcp-token-budget-docs.md](../../../../sources/gsd-build__get-shit-done/.changeset/mcp-token-budget-docs.md) |
| retrieval | 14 | [tests/bug-2801-ingest-docs-handler.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2801-ingest-docs-handler.test.cjs)<br>[tests/enh-3209-plan-phase-ingest-adr.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/enh-3209-plan-phase-ingest-adr.test.cjs)<br>[tests/ingest-docs.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/ingest-docs.test.cjs)<br>[sdk/src/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/index.ts)<br>[sdk/src/runtime-bridge-sync/index.test.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/runtime-bridge-sync/index.test.ts)<br>[sdk/src/runtime-bridge-sync/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/runtime-bridge-sync/index.ts)<br>[sdk/src/query/index-thin-seam.test.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/query/index-thin-seam.test.ts)<br>[sdk/src/query/index.ts](../../../../sources/gsd-build__get-shit-done/sdk/src/query/index.ts) |
| spec | 81 | [tests/adr-parser.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/adr-parser.test.cjs)<br>[tests/bug-2661-roadmap-sync-parallel.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2661-roadmap-sync-parallel.test.cjs)<br>[tests/bug-2769-requirements-header-variants.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2769-requirements-header-variants.test.cjs)<br>[tests/bug-3128-roadmap-plan-count-slug-layout.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-3128-roadmap-plan-count-slug-layout.test.cjs)<br>[tests/bug-3537-padded-id-against-unpadded-roadmap.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-3537-padded-id-against-unpadded-roadmap.test.cjs)<br>[tests/bug-3599-roadmap-get-phase-project-code-prefix.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-3599-roadmap-get-phase-project-code-prefix.test.cjs)<br>[tests/enh-2447-roadmap-wave-deps.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/enh-2447-roadmap-wave-deps.test.cjs)<br>[tests/enh-3209-plan-phase-ingest-adr.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/enh-3209-plan-phase-ingest-adr.test.cjs) |
| eval | 747 | [.release-monitor.sh](../../../../sources/gsd-build__get-shit-done/.release-monitor.sh)<br>[TEST-EXAMPLES.md](../../../../sources/gsd-build__get-shit-done/TEST-EXAMPLES.md)<br>[tests/active-workstream-store.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/active-workstream-store.test.cjs)<br>[tests/adr-parser.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/adr-parser.test.cjs)<br>[tests/agent-frontmatter.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-frontmatter.test.cjs)<br>[tests/agent-install-validation.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-install-validation.test.cjs)<br>[tests/agent-required-reading-consistency.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-required-reading-consistency.test.cjs)<br>[tests/agent-size-budget.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-size-budget.test.cjs) |
| security | 75 | [SECURITY.md](../../../../sources/gsd-build__get-shit-done/SECURITY.md)<br>[tests/audit-fix-command.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/audit-fix-command.test.cjs)<br>[tests/bug-1754-js-hook-guard.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-1754-js-hook-guard.test.cjs)<br>[tests/bug-1817-sh-hook-guard.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-1817-sh-hook-guard.test.cjs)<br>[tests/bug-2344-read-guard-claudecode-env.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2344-read-guard-claudecode-env.test.cjs)<br>[tests/bug-2384-post-merge-deletion-audit.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2384-post-merge-deletion-audit.test.cjs)<br>[tests/bug-2520-read-guard-hook-subprocess-env.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2520-read-guard-hook-subprocess-env.test.cjs)<br>[tests/bug-2659-audit-open-crash.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2659-audit-open-crash.test.cjs) |
| ci | 20 | [.github/workflows/auto-branch.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-branch.yml)<br>[.github/workflows/auto-close-deprecated.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-close-deprecated.yml)<br>[.github/workflows/auto-label-issues.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-label-issues.yml)<br>[.github/workflows/branch-cleanup.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/branch-cleanup.yml)<br>[.github/workflows/branch-naming.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/branch-naming.yml)<br>[.github/workflows/canary.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/canary.yml)<br>[.github/workflows/changeset-required.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/changeset-required.yml)<br>[.github/workflows/close-draft-prs.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/close-draft-prs.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 6 | [AGENTS.md](../../../../sources/gsd-build__get-shit-done/AGENTS.md)<br>[get-shit-done/templates/copilot-instructions.md](../../../../sources/gsd-build__get-shit-done/get-shit-done/templates/copilot-instructions.md)<br>[docs/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/AGENTS.md)<br>[docs/pt-BR/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/pt-BR/AGENTS.md)<br>[docs/ko-KR/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/ko-KR/AGENTS.md)<br>[docs/ja-JP/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/ja-JP/AGENTS.md) |
| docs | 127 | [README.ja-JP.md](../../../../sources/gsd-build__get-shit-done/README.ja-JP.md)<br>[README.ko-KR.md](../../../../sources/gsd-build__get-shit-done/README.ko-KR.md)<br>[README.md](../../../../sources/gsd-build__get-shit-done/README.md)<br>[README.pt-BR.md](../../../../sources/gsd-build__get-shit-done/README.pt-BR.md)<br>[README.zh-CN.md](../../../../sources/gsd-build__get-shit-done/README.zh-CN.md)<br>[tests/fixtures/adversarial/security/README.md](../../../../sources/gsd-build__get-shit-done/tests/fixtures/adversarial/security/README.md)<br>[tests/fixtures/adversarial/roadmap/README.md](../../../../sources/gsd-build__get-shit-done/tests/fixtures/adversarial/roadmap/README.md)<br>[tests/fixtures/adversarial/frontmatter/README.md](../../../../sources/gsd-build__get-shit-done/tests/fixtures/adversarial/frontmatter/README.md) |
| config | 4 | [package.json](../../../../sources/gsd-build__get-shit-done/package.json)<br>[tsconfig.json](../../../../sources/gsd-build__get-shit-done/tsconfig.json)<br>[sdk/package.json](../../../../sources/gsd-build__get-shit-done/sdk/package.json)<br>[sdk/tsconfig.json](../../../../sources/gsd-build__get-shit-done/sdk/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 747 | [.release-monitor.sh](../../../../sources/gsd-build__get-shit-done/.release-monitor.sh)<br>[TEST-EXAMPLES.md](../../../../sources/gsd-build__get-shit-done/TEST-EXAMPLES.md)<br>[tests/active-workstream-store.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/active-workstream-store.test.cjs)<br>[tests/adr-parser.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/adr-parser.test.cjs)<br>[tests/agent-frontmatter.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-frontmatter.test.cjs)<br>[tests/agent-install-validation.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/agent-install-validation.test.cjs) |
| CI workflow | 20 | [.github/workflows/auto-branch.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-branch.yml)<br>[.github/workflows/auto-close-deprecated.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-close-deprecated.yml)<br>[.github/workflows/auto-label-issues.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/auto-label-issues.yml)<br>[.github/workflows/branch-cleanup.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/branch-cleanup.yml)<br>[.github/workflows/branch-naming.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/branch-naming.yml)<br>[.github/workflows/canary.yml](../../../../sources/gsd-build__get-shit-done/.github/workflows/canary.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 75 | [SECURITY.md](../../../../sources/gsd-build__get-shit-done/SECURITY.md)<br>[tests/audit-fix-command.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/audit-fix-command.test.cjs)<br>[tests/bug-1754-js-hook-guard.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-1754-js-hook-guard.test.cjs)<br>[tests/bug-1817-sh-hook-guard.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-1817-sh-hook-guard.test.cjs)<br>[tests/bug-2344-read-guard-claudecode-env.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2344-read-guard-claudecode-env.test.cjs)<br>[tests/bug-2384-post-merge-deletion-audit.test.cjs](../../../../sources/gsd-build__get-shit-done/tests/bug-2384-post-merge-deletion-audit.test.cjs) |
| 에이전트 지시문 | 6 | [AGENTS.md](../../../../sources/gsd-build__get-shit-done/AGENTS.md)<br>[get-shit-done/templates/copilot-instructions.md](../../../../sources/gsd-build__get-shit-done/get-shit-done/templates/copilot-instructions.md)<br>[docs/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/AGENTS.md)<br>[docs/pt-BR/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/pt-BR/AGENTS.md)<br>[docs/ko-KR/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/ko-KR/AGENTS.md)<br>[docs/ja-JP/AGENTS.md](../../../../sources/gsd-build__get-shit-done/docs/ja-JP/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/feat-3025-mcp-token-budget-docs.test.cjs`, `tests/mcp-tool-inheritance.test.cjs`, `.changeset/mcp-token-budget-docs.md`.
2. entrypoint를 따라 실행 흐름 확인: `sdk/src/cli.test.ts`, `sdk/src/cli.ts`, `sdk/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `CONTEXT.md`, `tests/agent-frontmatter.test.cjs`.
4. retrieval/memory/indexing 확인: `tests/bug-2801-ingest-docs-handler.test.cjs`, `tests/enh-3209-plan-phase-ingest-adr.test.cjs`, `tests/ingest-docs.test.cjs`.
5. test/eval 파일로 동작 검증: `.release-monitor.sh`, `TEST-EXAMPLES.md`, `tests/active-workstream-store.test.cjs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1854 files, 87 directories.. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, anthropic이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
