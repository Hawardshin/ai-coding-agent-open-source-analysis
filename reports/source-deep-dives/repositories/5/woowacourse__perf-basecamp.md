# woowacourse/perf-basecamp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

우아한테크코스 레벨4 프론트엔드 성능 베이스캠프 실습 미션

## 요약

- 조사 단위: `sources/woowacourse__perf-basecamp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 56 files, 31 directories, depth score 67, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/App.css, src/App.tsx, src/index.tsx이고, 의존성 단서는 react, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | woowacourse/perf-basecamp |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 44 |
| Forks | 204 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/woowacourse__perf-basecamp](../../../../sources/woowacourse__perf-basecamp) |
| Existing report | [reports/korea-trending/repositories/woowacourse__perf-basecamp.md](../../../korea-trending/repositories/woowacourse__perf-basecamp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 56 / 31 |
| Max observed depth | 6 |
| Top directories | .github, public, src |
| Top extensions | .tsx: 19, .css: 14, .ts: 8, .json: 4, .gif: 3, .md: 2, (none): 2, .html: 1, .ico: 1, .js: 1, .png: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 8 |
| .github | ci surface | 1 |
| public | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | build:dev | webpack --mode=development |
| build | package.json | build:prod | webpack --mode=production --node-env=production |
| serve-dev | package.json | watch | webpack --watch |
| serve-dev | package.json | serve | webpack serve --mode=development |
| quality | package.json | prettier | prettier --write . |
| build | package.json | deploy | npm run build:prod && npx gh-pages -d dist |


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
| entrypoints | [src/App.css](../../../../sources/woowacourse__perf-basecamp/src/App.css) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/woowacourse__perf-basecamp/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.tsx](../../../../sources/woowacourse__perf-basecamp/src/index.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/woowacourse__perf-basecamp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/woowacourse__perf-basecamp/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/woowacourse__perf-basecamp/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/App.css](../../../../sources/woowacourse__perf-basecamp/src/App.css)<br>[src/App.tsx](../../../../sources/woowacourse__perf-basecamp/src/App.tsx)<br>[src/index.tsx](../../../../sources/woowacourse__perf-basecamp/src/index.tsx) |
| agentRuntime | 3 | [src/pages/Search/hooks/useGifSearch.tsx](../../../../sources/woowacourse__perf-basecamp/src/pages/Search/hooks/useGifSearch.tsx)<br>[src/pages/Home/hooks/useMousePosition.tsx](../../../../sources/woowacourse__perf-basecamp/src/pages/Home/hooks/useMousePosition.tsx)<br>[src/pages/Home/hooks/useScrollEvent.tsx](../../../../sources/woowacourse__perf-basecamp/src/pages/Home/hooks/useScrollEvent.tsx) |
| mcp | 0 | not obvious |
| retrieval | 2 | [index.html](../../../../sources/woowacourse__perf-basecamp/index.html)<br>[src/index.tsx](../../../../sources/woowacourse__perf-basecamp/src/index.tsx) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/woowacourse__perf-basecamp/README.md) |
| config | 2 | [package.json](../../../../sources/woowacourse__perf-basecamp/package.json)<br>[tsconfig.json](../../../../sources/woowacourse__perf-basecamp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/App.css`, `src/App.tsx`, `src/index.tsx`.
2. Trace execution through entrypoints: `src/App.css`, `src/App.tsx`, `src/index.tsx`.
3. Map agent/tool runtime through: `src/pages/Search/hooks/useGifSearch.tsx`, `src/pages/Home/hooks/useMousePosition.tsx`, `src/pages/Home/hooks/useScrollEvent.tsx`.
4. Inspect retrieval/memory/indexing through: `index.html`, `src/index.tsx`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 우아한테크코스 레벨4 프론트엔드 성능 베이스캠프 실습 미션. 핵심 구조 신호는 TypeScript, package.json, README.md, react, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
