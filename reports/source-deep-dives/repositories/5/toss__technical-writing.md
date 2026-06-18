# toss/technical-writing Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

개발자를 위한 글쓰기 기본기

## 요약

- 조사 단위: `sources/toss__technical-writing` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 66 files, 19 directories, depth score 67, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, ui/extension surface 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json이고, 의존성 단서는 react, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/technical-writing |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 1055 |
| Forks | 48 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__technical-writing](../../../../sources/toss__technical-writing) |
| Existing report | [reports/korea-trending/repositories/toss__technical-writing.md](../../../korea-trending/repositories/toss__technical-writing.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 66 / 19 |
| Max observed depth | 5 |
| Top directories | .github, components, docs, styles, types |
| Top extensions | .mdx: 19, .ts: 12, .png: 8, .md: 7, .css: 5, .tsx: 4, (none): 4, .json: 3, .yml: 2, .conf: 1, .lock: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 53 |
| .github | ci surface | 1 |
| components | top-level component | 1 |
| styles | top-level component | 1 |
| types | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | rspress dev |
| build | package.json | build | rspress build |
| utility | package.json | preview | rspress preview |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [package.json](../../../../sources/toss__technical-writing/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__technical-writing/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/toss__technical-writing/README.md) | docs signal |
| docs | [docs/_meta.json](../../../../sources/toss__technical-writing/docs/_meta.json) | docs signal |
| docs | [docs/index.md](../../../../sources/toss__technical-writing/docs/index.md) | docs signal |
| docs | [docs/overview.md](../../../../sources/toss__technical-writing/docs/overview.md) | docs signal |
| ci | [.github/workflows/docs-build.yml](../../../../sources/toss__technical-writing/.github/workflows/docs-build.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 7 | [styles/index.css](../../../../sources/toss__technical-writing/styles/index.css)<br>[docs/index.md](../../../../sources/toss__technical-writing/docs/index.md)<br>[docs/type/index.md](../../../../sources/toss__technical-writing/docs/type/index.md)<br>[docs/shared/constants/index.ts](../../../../sources/toss__technical-writing/docs/shared/constants/index.ts)<br>[docs/shared/components/index.ts](../../../../sources/toss__technical-writing/docs/shared/components/index.ts)<br>[docs/sentence/index.md](../../../../sources/toss__technical-writing/docs/sentence/index.md)<br>[docs/architecture/index.md](../../../../sources/toss__technical-writing/docs/architecture/index.md) |
| spec | 7 | [docs/architecture/background.mdx](../../../../sources/toss__technical-writing/docs/architecture/background.mdx)<br>[docs/architecture/heading.mdx](../../../../sources/toss__technical-writing/docs/architecture/heading.mdx)<br>[docs/architecture/index.md](../../../../sources/toss__technical-writing/docs/architecture/index.md)<br>[docs/architecture/one-thing-per-one-page.mdx](../../../../sources/toss__technical-writing/docs/architecture/one-thing-per-one-page.mdx)<br>[docs/architecture/overview.mdx](../../../../sources/toss__technical-writing/docs/architecture/overview.mdx)<br>[docs/architecture/predictability.mdx](../../../../sources/toss__technical-writing/docs/architecture/predictability.mdx)<br>[docs/architecture/value-first-cost-later.mdx](../../../../sources/toss__technical-writing/docs/architecture/value-first-cost-later.mdx) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/docs-build.yml](../../../../sources/toss__technical-writing/.github/workflows/docs-build.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 48 | [README.md](../../../../sources/toss__technical-writing/README.md)<br>[docs/_meta.json](../../../../sources/toss__technical-writing/docs/_meta.json)<br>[docs/index.md](../../../../sources/toss__technical-writing/docs/index.md)<br>[docs/overview.md](../../../../sources/toss__technical-writing/docs/overview.md)<br>[docs/type/explanation.mdx](../../../../sources/toss__technical-writing/docs/type/explanation.mdx)<br>[docs/type/index.md](../../../../sources/toss__technical-writing/docs/type/index.md)<br>[docs/type/learning.mdx](../../../../sources/toss__technical-writing/docs/type/learning.mdx)<br>[docs/type/problem-solving.mdx](../../../../sources/toss__technical-writing/docs/type/problem-solving.mdx) |
| config | 2 | [package.json](../../../../sources/toss__technical-writing/package.json)<br>[tsconfig.json](../../../../sources/toss__technical-writing/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/docs-build.yml](../../../../sources/toss__technical-writing/.github/workflows/docs-build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `package.json`, `tsconfig.json`, `README.md`.
2. Inspect retrieval/memory/indexing through: `styles/index.css`, `docs/index.md`, `docs/type/index.md`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 개발자를 위한 글쓰기 기본기. 핵심 구조 신호는 TypeScript, package.json, README.md, react, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
