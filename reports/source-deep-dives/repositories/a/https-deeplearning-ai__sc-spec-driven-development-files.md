# https-deeplearning-ai/sc-spec-driven-development-files Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 332 files, 101 directories.

## 요약

- 조사 단위: `sources/https-deeplearning-ai__sc-spec-driven-development-files` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 332 files, 101 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

스펙 드리븐/요구사항 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 spec=Video14_Agents_replaceability/specs/roadmap.md, Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md, Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 spec workflow and requirements reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | https-deeplearning-ai/sc-spec-driven-development-files |
| Topic | Spec-Driven and Requirements / 스펙 드리븐/요구사항 |
| Region | mixed |
| Language | TypeScript |
| Stars | 213 |
| Forks | 199 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/https-deeplearning-ai__sc-spec-driven-development-files](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| Existing report | [reports/clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 332 / 101 |
| Max observed depth | 5 |
| Top directories | example_specs, prompts, skills, Video05_Creating_the_Constitution, Video06_Feature_Specification, Video07_Feature_Implementation, Video08_Feature_Validation, Video09_Project_Replanning, Video10_The_second_feature_phase, Video11_The_MVP, Video12_Legacy_support, Video13_Build_your_own_workflow, Video14_Agents_replaceability |
| Top extensions | .tsx: 112, .md: 109, .ts: 35, .json: 29, .sql: 23, (none): 11, .css: 7, .py: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| example_specs | top-level component | 1 |
| prompts | top-level component | 1 |
| skills | top-level component | 1 |
| Video05_Creating_the_Constitution | top-level component | 1 |
| Video06_Feature_Specification | ci surface | 1 |
| Video07_Feature_Implementation | top-level component | 1 |
| Video08_Feature_Validation | top-level component | 1 |
| Video09_Project_Replanning | top-level component | 1 |
| Video10_The_second_feature_phase | top-level component | 1 |
| Video11_The_MVP | top-level component | 1 |
| Video12_Legacy_support | top-level component | 1 |
| Video13_Build_your_own_workflow | top-level component | 1 |
| Video14_Agents_replaceability | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| spec | [Video14_Agents_replaceability/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/roadmap.md) | spec signal |
| spec | [Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md) | spec signal |
| spec | [Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md) | spec signal |
| spec | [Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md) | spec signal |
| eval | [Video14_Agents_replaceability/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/app.test.tsx) | eval signal |
| eval | [Video14_Agents_replaceability/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/components.test.tsx) | eval signal |
| eval | [Video14_Agents_replaceability/tests/db.test.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/db.test.ts) | eval signal |
| docs | [README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/README.md) | docs signal |
| docs | [Video14_Agents_replaceability/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/README.md) | docs signal |
| docs | [Video13_Build_your_own_workflow/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/README.md) | docs signal |
| docs | [Video12_Legacy_support/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/README.md) | docs signal |
| config | [Video14_Agents_replaceability/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 22 | [Video14_Agents_replaceability/src/app.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/app.tsx)<br>[Video14_Agents_replaceability/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/index.tsx)<br>[Video14_Agents_replaceability/src/components/Main.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/components/Main.tsx)<br>[Video13_Build_your_own_workflow/src/app.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/app.tsx)<br>[Video13_Build_your_own_workflow/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/index.tsx)<br>[Video13_Build_your_own_workflow/src/components/Main.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/components/Main.tsx)<br>[Video12_Legacy_support/src/app.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/app.tsx)<br>[Video12_Legacy_support/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/index.tsx) |
| agentRuntime | 13 | [Video14_Agents_replaceability/src/routes/agents.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/routes/agents.tsx)<br>[Video14_Agents_replaceability/changelog/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/changelog/SKILL.md)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md)<br>[Video13_Build_your_own_workflow/src/routes/agents.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/routes/agents.tsx)<br>[Video13_Build_your_own_workflow/changelog/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/changelog/SKILL.md)<br>[Video12_Legacy_support/src/routes/agents.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/routes/agents.tsx)<br>[Video12_Legacy_support/changelog/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/changelog/SKILL.md)<br>[Video11_The_MVP/src/routes/agents.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/src/routes/agents.tsx) |
| mcp | 0 | not obvious |
| retrieval | 14 | [Video14_Agents_replaceability/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/index.tsx)<br>[Video14_Agents_replaceability/src/db/index.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/src/db/index.ts)<br>[Video13_Build_your_own_workflow/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/index.tsx)<br>[Video13_Build_your_own_workflow/src/db/index.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/src/db/index.ts)<br>[Video12_Legacy_support/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/index.tsx)<br>[Video12_Legacy_support/src/db/index.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/src/db/index.ts)<br>[Video11_The_MVP/src/index.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/src/index.tsx)<br>[Video11_The_MVP/src/db/index.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/src/db/index.ts) |
| spec | 22 | [Video14_Agents_replaceability/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/roadmap.md)<br>[Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md)<br>[Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md)<br>[Video13_Build_your_own_workflow/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/specs/roadmap.md)<br>[Video13_Build_your_own_workflow/specs/2026-04-06-feedback-form/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/specs/2026-04-06-feedback-form/requirements.md)<br>[Video12_Legacy_support/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/specs/roadmap.md)<br>[Video12_Legacy_support/specs/2026-04-06-mvp/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/specs/2026-04-06-mvp/requirements.md) |
| eval | 16 | [Video14_Agents_replaceability/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/app.test.tsx)<br>[Video14_Agents_replaceability/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/components.test.tsx)<br>[Video14_Agents_replaceability/tests/db.test.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/db.test.ts)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md)<br>[Video13_Build_your_own_workflow/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/app.test.tsx)<br>[Video13_Build_your_own_workflow/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/components.test.tsx)<br>[Video13_Build_your_own_workflow/tests/db.test.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/db.test.ts)<br>[Video12_Legacy_support/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/tests/app.test.tsx) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 11 | [README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/README.md)<br>[Video14_Agents_replaceability/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/README.md)<br>[Video13_Build_your_own_workflow/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/README.md)<br>[Video12_Legacy_support/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/README.md)<br>[Video11_The_MVP/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/README.md)<br>[Video10_The_second_feature_phase/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video10_The_second_feature_phase/README.md)<br>[Video09_Project_Replanning/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video09_Project_Replanning/README.md)<br>[Video08_Feature_Validation/README.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video08_Feature_Validation/README.md) |
| config | 20 | [Video14_Agents_replaceability/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/package.json)<br>[Video14_Agents_replaceability/tsconfig.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tsconfig.json)<br>[Video13_Build_your_own_workflow/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/package.json)<br>[Video13_Build_your_own_workflow/tsconfig.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tsconfig.json)<br>[Video12_Legacy_support/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/package.json)<br>[Video12_Legacy_support/tsconfig.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video12_Legacy_support/tsconfig.json)<br>[Video11_The_MVP/package.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/package.json)<br>[Video11_The_MVP/tsconfig.json](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video11_The_MVP/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 16 | [Video14_Agents_replaceability/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/app.test.tsx)<br>[Video14_Agents_replaceability/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/components.test.tsx)<br>[Video14_Agents_replaceability/tests/db.test.ts](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/tests/db.test.ts)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md)<br>[Video13_Build_your_own_workflow/tests/app.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/app.test.tsx)<br>[Video13_Build_your_own_workflow/tests/components.test.tsx](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video13_Build_your_own_workflow/tests/components.test.tsx) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Video14_Agents_replaceability/specs/roadmap.md`, `Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md`, `Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md`.
2. Trace execution through entrypoints: `Video14_Agents_replaceability/src/app.tsx`, `Video14_Agents_replaceability/src/index.tsx`, `Video14_Agents_replaceability/src/components/Main.tsx`.
3. Map agent/tool runtime through: `Video14_Agents_replaceability/src/routes/agents.tsx`, `Video14_Agents_replaceability/changelog/SKILL.md`, `Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `Video14_Agents_replaceability/src/index.tsx`, `Video14_Agents_replaceability/src/db/index.ts`, `Video13_Build_your_own_workflow/src/index.tsx`.
5. Verify behavior through test/eval files: `Video14_Agents_replaceability/tests/app.test.tsx`, `Video14_Agents_replaceability/tests/components.test.tsx`, `Video14_Agents_replaceability/tests/db.test.ts`.

## Existing Repository Insight

스펙 드리븐/요구사항 관점에서 Local clone structure analysis 332 files, 101 directories.. 핵심 구조 신호는 TypeScript, README.md, tests, ci, docs, agent-instructions이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 스펙 드리븐/요구사항 레포입니다. 활용 관점은 spec workflow and requirements reference이고, 후속 확인 포인트는 license metadata missing입니다.
