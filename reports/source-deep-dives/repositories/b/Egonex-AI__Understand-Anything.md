# Egonex-AI/Understand-Anything Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.

## 요약

- 조사 단위: `sources/Egonex-AI__Understand-Anything` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 417 files, 69 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=understand-anything-plugin/src/index.ts, understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py, understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Egonex-AI/Understand-Anything |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 62771 |
| Forks | 5173 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Egonex-AI__Understand-Anything](../../../../sources/Egonex-AI__Understand-Anything) |
| Existing report | [reports/global-trending/repositories/Egonex-AI__Understand-Anything.md](../../../global-trending/repositories/Egonex-AI__Understand-Anything.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 417 / 69 |
| Max observed depth | 8 |
| Top directories | .claude-plugin, .copilot-plugin, .cursor-plugin, .github, assets, docs, homepage, READMEs, scripts, tests, understand-anything-plugin |
| Top extensions | .ts: 183, .md: 106, .tsx: 36, .json: 24, .mjs: 16, .astro: 10, .py: 6, .yml: 6, (none): 6, .woff2: 4, .yaml: 4, .png: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 52 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| homepage | top-level component | 1 |
| READMEs | top-level component | 1 |
| scripts | top-level component | 1 |
| tests | validation surface | 1 |
| understand-anything-plugin | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | prepare | pnpm --filter @understand-anything/core build |
| build | package.json | build | pnpm -r build |
| test | package.json | test | vitest run |
| serve-dev | package.json | dev:dashboard | pnpm --filter @understand-anything/dashboard dev |
| quality | package.json | lint | eslint . |


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
| retrieval | [understand-anything-plugin/src/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/index.ts) | retrieval signal |
| retrieval | [understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py) | retrieval signal |
| retrieval | [understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py) | retrieval signal |
| retrieval | [understand-anything-plugin/skills/understand-knowledge/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/SKILL.md) | retrieval signal |
| entrypoints | [understand-anything-plugin/packages/dashboard/src/App.tsx](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/App.tsx) | entrypoints signal |
| entrypoints | [understand-anything-plugin/packages/dashboard/src/index.css](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/index.css) | entrypoints signal |
| entrypoints | [understand-anything-plugin/packages/dashboard/src/main.tsx](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/main.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/Egonex-AI__Understand-Anything/README.md) | docs signal |
| docs | [READMEs/README.es-ES.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.es-ES.md) | docs signal |
| docs | [READMEs/README.ja-JP.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ja-JP.md) | docs signal |
| docs | [READMEs/README.ko-KR.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ko-KR.md) | docs signal |
| eval | [understand-anything-plugin/src/__tests__/context-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/context-builder.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [understand-anything-plugin/src/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/index.ts)<br>[understand-anything-plugin/packages/dashboard/src/App.tsx](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/App.tsx)<br>[understand-anything-plugin/packages/dashboard/src/index.css](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/index.css)<br>[understand-anything-plugin/packages/dashboard/src/main.tsx](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/main.tsx)<br>[understand-anything-plugin/packages/core/src/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/index.ts) |
| agentRuntime | 81 | [understand-anything-plugin/src/context-builder.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/context-builder.ts)<br>[understand-anything-plugin/src/__tests__/context-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/context-builder.test.ts)<br>[understand-anything-plugin/skills/understand-onboard/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-onboard/SKILL.md)<br>[understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py)<br>[understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py)<br>[understand-anything-plugin/skills/understand-knowledge/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/SKILL.md)<br>[understand-anything-plugin/skills/understand-explain/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-explain/SKILL.md)<br>[understand-anything-plugin/skills/understand-domain/extract-domain-context.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-domain/extract-domain-context.py) |
| mcp | 0 | not obvious |
| retrieval | 32 | [understand-anything-plugin/src/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/index.ts)<br>[understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py)<br>[understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py)<br>[understand-anything-plugin/skills/understand-knowledge/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/SKILL.md)<br>[understand-anything-plugin/packages/dashboard/index.html](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/index.html)<br>[understand-anything-plugin/packages/dashboard/src/index.css](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/index.css)<br>[understand-anything-plugin/packages/dashboard/src/themes/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/themes/index.ts)<br>[understand-anything-plugin/packages/dashboard/src/locales/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/locales/index.ts) |
| spec | 15 | [understand-anything-plugin/agents/architecture-analyzer.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/agents/architecture-analyzer.md)<br>[docs/superpowers/specs/2026-03-14-understand-anything-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-14-understand-anything-design.md)<br>[docs/superpowers/specs/2026-03-15-homepage-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-15-homepage-design.md)<br>[docs/superpowers/specs/2026-03-18-multi-platform-simple-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-18-multi-platform-simple-design.md)<br>[docs/superpowers/specs/2026-03-21-language-agnostic-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-21-language-agnostic-design.md)<br>[docs/superpowers/specs/2026-03-26-theme-system-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-26-theme-system-design.md)<br>[docs/superpowers/specs/2026-03-27-token-reduction-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-27-token-reduction-design.md)<br>[docs/superpowers/specs/2026-03-28-understand-anything-extension-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-28-understand-anything-extension-design.md) |
| eval | 59 | [understand-anything-plugin/src/__tests__/context-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/context-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/diff-analyzer.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/diff-analyzer.test.ts)<br>[understand-anything-plugin/src/__tests__/explain-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/explain-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/extract-structure.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/extract-structure.test.mjs)<br>[understand-anything-plugin/src/__tests__/merge-recover-imports.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/merge-recover-imports.test.mjs)<br>[understand-anything-plugin/src/__tests__/onboard-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/onboard-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/worktree-redirect.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/worktree-redirect.test.mjs)<br>[understand-anything-plugin/packages/dashboard/src/utils/__tests__/containers.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/utils/__tests__/containers.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/Egonex-AI__Understand-Anything/SECURITY.md) |
| ci | 3 | [understand-anything-plugin/packages/core/src/languages/configs/jenkinsfile.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/jenkinsfile.ts)<br>[.github/workflows/ci.yml](../../../../sources/Egonex-AI__Understand-Anything/.github/workflows/ci.yml)<br>[.github/workflows/deploy-homepage.yml](../../../../sources/Egonex-AI__Understand-Anything/.github/workflows/deploy-homepage.yml) |
| container | 4 | [understand-anything-plugin/skills/understand/languages/dockerfile.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand/languages/dockerfile.md)<br>[understand-anything-plugin/packages/core/src/plugins/parsers/dockerfile-parser.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/plugins/parsers/dockerfile-parser.ts)<br>[understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts)<br>[understand-anything-plugin/packages/core/src/languages/configs/dockerfile.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/dockerfile.ts) |
| instruction | 1 | [CLAUDE.md](../../../../sources/Egonex-AI__Understand-Anything/CLAUDE.md) |
| docs | 43 | [README.md](../../../../sources/Egonex-AI__Understand-Anything/README.md)<br>[READMEs/README.es-ES.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.es-ES.md)<br>[READMEs/README.ja-JP.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ja-JP.md)<br>[READMEs/README.ko-KR.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ko-KR.md)<br>[READMEs/README.ru-RU.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ru-RU.md)<br>[READMEs/README.tr-TR.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.tr-TR.md)<br>[READMEs/README.zh-CN.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.zh-CN.md)<br>[READMEs/README.zh-TW.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.zh-TW.md) |
| config | 13 | [package.json](../../../../sources/Egonex-AI__Understand-Anything/package.json)<br>[pnpm-workspace.yaml](../../../../sources/Egonex-AI__Understand-Anything/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/Egonex-AI__Understand-Anything/tsconfig.json)<br>[understand-anything-plugin/package.json](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/package.json)<br>[understand-anything-plugin/pnpm-workspace.yaml](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/pnpm-workspace.yaml)<br>[understand-anything-plugin/tsconfig.json](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/tsconfig.json)<br>[understand-anything-plugin/packages/tree-sitter-dart-wasm/package.json](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/tree-sitter-dart-wasm/package.json)<br>[understand-anything-plugin/packages/dashboard/package.json](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 59 | [understand-anything-plugin/src/__tests__/context-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/context-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/diff-analyzer.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/diff-analyzer.test.ts)<br>[understand-anything-plugin/src/__tests__/explain-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/explain-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/extract-structure.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/extract-structure.test.mjs)<br>[understand-anything-plugin/src/__tests__/merge-recover-imports.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/merge-recover-imports.test.mjs)<br>[understand-anything-plugin/src/__tests__/onboard-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/onboard-builder.test.ts) |
| CI workflows | 3 | [understand-anything-plugin/packages/core/src/languages/configs/jenkinsfile.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/jenkinsfile.ts)<br>[.github/workflows/ci.yml](../../../../sources/Egonex-AI__Understand-Anything/.github/workflows/ci.yml)<br>[.github/workflows/deploy-homepage.yml](../../../../sources/Egonex-AI__Understand-Anything/.github/workflows/deploy-homepage.yml) |
| Containers / deploy | 4 | [understand-anything-plugin/skills/understand/languages/dockerfile.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand/languages/dockerfile.md)<br>[understand-anything-plugin/packages/core/src/plugins/parsers/dockerfile-parser.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/plugins/parsers/dockerfile-parser.ts)<br>[understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts)<br>[understand-anything-plugin/packages/core/src/languages/configs/dockerfile.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/dockerfile.ts) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/Egonex-AI__Understand-Anything/SECURITY.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/Egonex-AI__Understand-Anything/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `understand-anything-plugin/src/index.ts`, `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`, `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`.
2. Trace execution through entrypoints: `understand-anything-plugin/src/index.ts`, `understand-anything-plugin/packages/dashboard/src/App.tsx`, `understand-anything-plugin/packages/dashboard/src/index.css`.
3. Map agent/tool runtime through: `understand-anything-plugin/src/context-builder.ts`, `understand-anything-plugin/src/__tests__/context-builder.test.ts`, `understand-anything-plugin/skills/understand-onboard/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `understand-anything-plugin/src/index.ts`, `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`, `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`.
5. Verify behavior through test/eval files: `understand-anything-plugin/src/__tests__/context-builder.test.ts`, `understand-anything-plugin/src/__tests__/diff-analyzer.test.ts`, `understand-anything-plugin/src/__tests__/explain-builder.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Graphs that teach graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and as. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
