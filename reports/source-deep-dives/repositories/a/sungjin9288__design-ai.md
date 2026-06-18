# sungjin9288/design-ai Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Model-agnostic design knowledge base + skill system for AI coding agents (Korean-market-fluent)

## 요약

- 조사 단위: `sources/sungjin9288__design-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 599 files, 72 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=vscode-extension/test/integration/suite/index.ts, tools/extractors/component_index.py, knowledge/COVERAGE.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | sungjin9288/design-ai |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/sungjin9288__design-ai](../../../../sources/sungjin9288__design-ai) |
| Existing report | [reports/korea-trending/repositories/sungjin9288__design-ai.md](../../../korea-trending/repositories/sungjin9288__design-ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 599 / 72 |
| Max observed depth | 5 |
| Top directories | .claude-plugin, .github, agents, cli, commands, docs, examples, Formula, knowledge, skills, tools, vscode-extension |
| Top extensions | .md: 448, .mjs: 68, .py: 33, .json: 11, .ts: 9, (none): 6, .yml: 5, .sh: 4, .html: 3, .svg: 3, .tsx: 3, .css: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 38 |
| examples/print-business-card-spec.md | examples workspace | 2 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| cli | top-level component | 1 |
| commands | top-level component | 1 |
| examples | top-level component | 1 |
| examples/component-pass-auth.md | examples workspace | 1 |
| examples/print-packaging-spec.md | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| Formula | top-level component | 1 |
| knowledge | top-level component | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |
| vscode-extension | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | node --test cli/lib/*.test.mjs |
| utility | package.json | audit | python3 -B tools/audit/run-all.py |
| utility | package.json | audit:strict | python3 -B tools/audit/run-all.py --strict |
| test | package.json | audit:runner:self-test | python3 -B tools/audit/run-all.py --self-test |
| test | package.json | coverage:self-test | python3 -B tools/audit/check-coverage.py --self-test |
| test | package.json | doctor:assertions:self-test | python3 -B tools/audit/doctor_assertions.py --self-test |
| test | package.json | smoke:assertions:self-test | python3 -B tools/audit/smoke_assertions.py --self-test |
| test | package.json | package:check | python3 -B tools/audit/package-contents.py --self-test && python3 -B tools/audit/package-contents.py |
| test | package.json | package:smoke:self-test | python3 -B tools/audit/package-smoke.py --self-test |
| utility | package.json | package:smoke | python3 -B tools/audit/package-smoke.py --pack |
| utility | package.json | registry:smoke | python3 -B tools/audit/registry-smoke.py |
| test | package.json | registry:smoke:self-test | python3 -B tools/audit/registry-smoke.py --self-test |
| build | package.json | release:metadata | python3 -B tools/audit/release-metadata.py |
| test | package.json | release:metadata:self-test | python3 -B tools/audit/release-metadata.py --self-test |
| test | package.json | ci:local:self-test | python3 -B tools/audit/local-ci.py --self-test |
| test | package.json | tokens:ant-design:self-test | python3 -B tools/extractors/ant_design_tokens.py --self-test |
| test | package.json | release:self-test | npm run audit:runner:self-test && npm run coverage:self-test && npm run doctor:assertions:self-test && npm run smoke:assertions:self-test && npm run package:smoke:self-test && npm run registry:smoke:self-test && npm run |
| test | package.json | release:check | npm test && npm run audit:strict && git diff --check && npm run package:check && npm run release:metadata && npm run release:self-test && npm run package:smoke |
| utility | package.json | ci:local | python3 -B tools/audit/local-ci.py |
| utility | package.json | preview | python3 -B tools/preview/render-tokens.py |
| entrypoint | package.json bin | design-ai.mjs | cli/bin/design-ai.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [vscode-extension/test/integration/suite/index.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/index.ts) | retrieval signal |
| retrieval | [tools/extractors/component_index.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_index.py) | retrieval signal |
| retrieval | [knowledge/COVERAGE.md](../../../../sources/sungjin9288__design-ai/knowledge/COVERAGE.md) | retrieval signal |
| retrieval | [knowledge/PRINCIPLES.md](../../../../sources/sungjin9288__design-ai/knowledge/PRINCIPLES.md) | retrieval signal |
| entrypoints | [cli/bin/design-ai.mjs](../../../../sources/sungjin9288__design-ai/cli/bin/design-ai.mjs) | entrypoints signal |
| docs | [mkdocs.yml](../../../../sources/sungjin9288__design-ai/mkdocs.yml) | docs signal |
| docs | [README.ko.md](../../../../sources/sungjin9288__design-ai/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/sungjin9288__design-ai/README.md) | docs signal |
| docs | [vscode-extension/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/README.md) | docs signal |
| eval | [vscode-extension/test/lib.test.mjs](../../../../sources/sungjin9288__design-ai/vscode-extension/test/lib.test.mjs) | eval signal |
| eval | [vscode-extension/test/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/test/README.md) | eval signal |
| eval | [vscode-extension/test/integration/runTest.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/runTest.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [cli/bin/design-ai.mjs](../../../../sources/sungjin9288__design-ai/cli/bin/design-ai.mjs) |
| agentRuntime | 100 | [AGENTS.ko.md](../../../../sources/sungjin9288__design-ai/AGENTS.ko.md)<br>[AGENTS.md](../../../../sources/sungjin9288__design-ai/AGENTS.md)<br>[tools/build-docs.sh](../../../../sources/sungjin9288__design-ai/tools/build-docs.sh)<br>[tools/clone-refs.sh](../../../../sources/sungjin9288__design-ai/tools/clone-refs.sh)<br>[tools/preview/README.md](../../../../sources/sungjin9288__design-ai/tools/preview/README.md)<br>[tools/preview/render-tokens.py](../../../../sources/sungjin9288__design-ai/tools/preview/render-tokens.py)<br>[tools/migrations/add-version-frontmatter.py](../../../../sources/sungjin9288__design-ai/tools/migrations/add-version-frontmatter.py)<br>[tools/migrations/bump-last-updated.py](../../../../sources/sungjin9288__design-ai/tools/migrations/bump-last-updated.py) |
| mcp | 6 | [docs/MCP-INTEGRATION.md](../../../../sources/sungjin9288__design-ai/docs/MCP-INTEGRATION.md)<br>[docs/integrations/figma-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/figma-mcp.md)<br>[docs/integrations/github-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/github-mcp.md)<br>[docs/integrations/linear-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/linear-mcp.md)<br>[docs/integrations/notion-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/notion-mcp.md)<br>[docs/integrations/slack-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/slack-mcp.md) |
| retrieval | 96 | [vscode-extension/test/integration/suite/index.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/index.ts)<br>[tools/extractors/component_index.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_index.py)<br>[knowledge/COVERAGE.md](../../../../sources/sungjin9288__design-ai/knowledge/COVERAGE.md)<br>[knowledge/PRINCIPLES.md](../../../../sources/sungjin9288__design-ai/knowledge/PRINCIPLES.md)<br>[knowledge/video/in-product-video.md](../../../../sources/sungjin9288__design-ai/knowledge/video/in-product-video.md)<br>[knowledge/video/korean-video-conventions.md](../../../../sources/sungjin9288__design-ai/knowledge/video/korean-video-conventions.md)<br>[knowledge/video/marketing-video.md](../../../../sources/sungjin9288__design-ai/knowledge/video/marketing-video.md)<br>[knowledge/video/social-and-short-form.md](../../../../sources/sungjin9288__design-ai/knowledge/video/social-and-short-form.md) |
| spec | 51 | [tools/extractors/ant_design_tokens.py](../../../../sources/sungjin9288__design-ai/tools/extractors/ant_design_tokens.py)<br>[tools/extractors/awesome_design_mirror.py](../../../../sources/sungjin9288__design-ai/tools/extractors/awesome_design_mirror.py)<br>[tools/extractors/component_spec_conflict_check.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_conflict_check.py)<br>[tools/extractors/component_spec_reconcile.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_reconcile.py)<br>[tools/extractors/component_spec_scaffold_v2.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_scaffold_v2.py)<br>[tools/extractors/component_spec_scaffold.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_scaffold.py)<br>[skills/handoff-spec/PLAYBOOK.md](../../../../sources/sungjin9288__design-ai/skills/handoff-spec/PLAYBOOK.md)<br>[skills/handoff-spec/SKILL.md](../../../../sources/sungjin9288__design-ai/skills/handoff-spec/SKILL.md) |
| eval | 43 | [vscode-extension/test/lib.test.mjs](../../../../sources/sungjin9288__design-ai/vscode-extension/test/lib.test.mjs)<br>[vscode-extension/test/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/test/README.md)<br>[vscode-extension/test/integration/runTest.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/runTest.ts)<br>[vscode-extension/test/integration/tsconfig.json](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/tsconfig.json)<br>[vscode-extension/test/integration/suite/extension.test.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/extension.test.ts)<br>[vscode-extension/test/integration/suite/index.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/index.ts)<br>[tools/extractors/component_spec_conflict_check.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_conflict_check.py)<br>[tools/extractors/component_spec_reconcile.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_reconcile.py) |
| security | 25 | [tools/audit/changelog-generate.py](../../../../sources/sungjin9288__design-ai/tools/audit/changelog-generate.py)<br>[tools/audit/check-coverage.py](../../../../sources/sungjin9288__design-ai/tools/audit/check-coverage.py)<br>[tools/audit/doctor_assertions.py](../../../../sources/sungjin9288__design-ai/tools/audit/doctor_assertions.py)<br>[tools/audit/example-qa.py](../../../../sources/sungjin9288__design-ai/tools/audit/example-qa.py)<br>[tools/audit/frontmatter-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/frontmatter-check.py)<br>[tools/audit/integration-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/integration-check.py)<br>[tools/audit/korean-copy-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/korean-copy-check.py)<br>[tools/audit/link-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/link-check.py) |
| ci | 4 | [.github/workflows/audit.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/audit.yml)<br>[.github/workflows/docs.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/sungjin9288__design-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sungjin9288__design-ai/CLAUDE.md) |
| docs | 74 | [mkdocs.yml](../../../../sources/sungjin9288__design-ai/mkdocs.yml)<br>[README.ko.md](../../../../sources/sungjin9288__design-ai/README.ko.md)<br>[README.md](../../../../sources/sungjin9288__design-ai/README.md)<br>[vscode-extension/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/README.md)<br>[vscode-extension/test/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/test/README.md)<br>[tools/preview/README.md](../../../../sources/sungjin9288__design-ai/tools/preview/README.md)<br>[tools/figma-plugin/README.md](../../../../sources/sungjin9288__design-ai/tools/figma-plugin/README.md)<br>[skills/README.md](../../../../sources/sungjin9288__design-ai/skills/README.md) |
| config | 6 | [package.json](../../../../sources/sungjin9288__design-ai/package.json)<br>[vscode-extension/package.json](../../../../sources/sungjin9288__design-ai/vscode-extension/package.json)<br>[vscode-extension/tsconfig.json](../../../../sources/sungjin9288__design-ai/vscode-extension/tsconfig.json)<br>[vscode-extension/test/integration/tsconfig.json](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/tsconfig.json)<br>[tools/extractors/ts-ast/package.json](../../../../sources/sungjin9288__design-ai/tools/extractors/ts-ast/package.json)<br>[docs/requirements.txt](../../../../sources/sungjin9288__design-ai/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 43 | [vscode-extension/test/lib.test.mjs](../../../../sources/sungjin9288__design-ai/vscode-extension/test/lib.test.mjs)<br>[vscode-extension/test/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/test/README.md)<br>[vscode-extension/test/integration/runTest.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/runTest.ts)<br>[vscode-extension/test/integration/tsconfig.json](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/tsconfig.json)<br>[vscode-extension/test/integration/suite/extension.test.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/extension.test.ts)<br>[vscode-extension/test/integration/suite/index.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/index.ts) |
| CI workflows | 4 | [.github/workflows/audit.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/audit.yml)<br>[.github/workflows/docs.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 25 | [tools/audit/changelog-generate.py](../../../../sources/sungjin9288__design-ai/tools/audit/changelog-generate.py)<br>[tools/audit/check-coverage.py](../../../../sources/sungjin9288__design-ai/tools/audit/check-coverage.py)<br>[tools/audit/doctor_assertions.py](../../../../sources/sungjin9288__design-ai/tools/audit/doctor_assertions.py)<br>[tools/audit/example-qa.py](../../../../sources/sungjin9288__design-ai/tools/audit/example-qa.py)<br>[tools/audit/frontmatter-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/frontmatter-check.py)<br>[tools/audit/integration-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/integration-check.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/sungjin9288__design-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sungjin9288__design-ai/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `vscode-extension/test/integration/suite/index.ts`, `tools/extractors/component_index.py`, `knowledge/COVERAGE.md`.
2. Trace execution through entrypoints: `cli/bin/design-ai.mjs`.
3. Map agent/tool runtime through: `AGENTS.ko.md`, `AGENTS.md`, `tools/build-docs.sh`.
4. Inspect retrieval/memory/indexing through: `vscode-extension/test/integration/suite/index.ts`, `tools/extractors/component_index.py`, `knowledge/COVERAGE.md`.
5. Verify behavior through test/eval files: `vscode-extension/test/lib.test.mjs`, `vscode-extension/test/README.md`, `vscode-extension/test/integration/runTest.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Model agnostic design knowledge base + skill system for AI coding agents Korean market fluent. 핵심 구조 신호는 Python, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
