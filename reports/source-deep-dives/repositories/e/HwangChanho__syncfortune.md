# HwangChanho/syncfortune Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI Korean fortune-telling app — deterministic Saju (Four Pillars) engine + RAG/LLM interpretation layer. React Native / Expo.

## 요약

- 조사 단위: `sources/HwangChanho__syncfortune` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 204 files, 16 directories, depth score 83, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=docs/index.md, app/src/app/(app)/index.tsx이고, 의존성 단서는 anthropic, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | HwangChanho/syncfortune |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/HwangChanho__syncfortune](../../../../sources/HwangChanho__syncfortune) |
| Existing report | [reports/korea-trending/repositories/HwangChanho__syncfortune.md](../../../korea-trending/repositories/HwangChanho__syncfortune.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 204 / 16 |
| Max observed depth | 5 |
| Top directories | app, docs, engine, spec |
| Top extensions | .jpg: 78, .ts: 45, .tsx: 39, .png: 19, .md: 9, .json: 8, .example: 2, .js: 2, .yml: 1, (none): 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 10 |
| app | top-level component | 1 |
| engine | top-level component | 1 |
| spec | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | echo "Error: no test specified" && exit 1 |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | verify | tsx engine/verify-fixture.ts |
| utility | package.json | p2 | tsx --env-file-if-exists=.env interpretation/run-p2.ts |
| utility | package.json | p3 | tsx --env-file-if-exists=.env interpretation/run-p3.ts |
| utility | package.json | p3all | tsx --env-file-if-exists=.env interpretation/run-p3-all.ts |
| utility | package.json | p4 | tsx --env-file-if-exists=.env interpretation/run-p4.ts |
| utility | package.json | p5 | tsx --env-file-if-exists=.env interpretation/run-p5.ts |
| utility | package.json | p1 | tsx --env-file-if-exists=.env interpretation/run-p1.ts |
| utility | package.json | guards | tsx engine/run-guards.ts |
| utility | package.json | diagram | npx -y @mermaid-js/mermaid-cli -i docs/ARCHITECTURE-DIAGRAM.md -o docs/img/arch.png -t default -b white -p docs/.puppeteer.json |
| utility | package.json | compat | tsx engine/run-compat.ts |
| utility | package.json | tri | tsx engine/run-tri.ts |
| utility | package.json | compatllm | tsx --env-file-if-exists=.env interpretation/run-compat-llm.ts |
| utility | package.json | twelve | tsx engine/run-twelve.ts |
| utility | package.json | sinsal | tsx engine/run-sinsal.ts |
| utility | package.json | verify:engine | tsx engine/verify-engine.ts |
| utility | package.json | trillm | tsx --env-file-if-exists=.env interpretation/run-tri-llm.ts |
| utility | package.json | example | tsx engine/example.ts |
| utility | package.json | ziwei | tsx engine/run-ziwei.ts |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
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
| retrieval | [docs/index.md](../../../../sources/HwangChanho__syncfortune/docs/index.md) | retrieval signal |
| docs | [README.md](../../../../sources/HwangChanho__syncfortune/README.md) | docs signal |
| docs | [docs/_config.yml](../../../../sources/HwangChanho__syncfortune/docs/_config.yml) | docs signal |
| docs | [docs/legal/privacy-en.md](../../../../sources/HwangChanho__syncfortune/docs/legal/privacy-en.md) | docs signal |
| eval | [spec/chart.ts](../../../../sources/HwangChanho__syncfortune/spec/chart.ts) | eval signal |
| config | [package.json](../../../../sources/HwangChanho__syncfortune/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/HwangChanho__syncfortune/tsconfig.json) | config signal |
| config | [app/package.json](../../../../sources/HwangChanho__syncfortune/app/package.json) | config signal |
| config | [app/tsconfig.json](../../../../sources/HwangChanho__syncfortune/app/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [docs/index.md](../../../../sources/HwangChanho__syncfortune/docs/index.md)<br>`app/src/app/(app)/index.tsx` |
| spec | 1 | [spec/chart.ts](../../../../sources/HwangChanho__syncfortune/spec/chart.ts) |
| eval | 1 | [spec/chart.ts](../../../../sources/HwangChanho__syncfortune/spec/chart.ts) |
| security | 1 | [app/src/app/auth-callback.tsx](../../../../sources/HwangChanho__syncfortune/app/src/app/auth-callback.tsx) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 10 | [README.md](../../../../sources/HwangChanho__syncfortune/README.md)<br>[docs/_config.yml](../../../../sources/HwangChanho__syncfortune/docs/_config.yml)<br>[docs/index.md](../../../../sources/HwangChanho__syncfortune/docs/index.md)<br>[docs/legal/privacy-en.md](../../../../sources/HwangChanho__syncfortune/docs/legal/privacy-en.md)<br>[docs/legal/privacy-ja.md](../../../../sources/HwangChanho__syncfortune/docs/legal/privacy-ja.md)<br>[docs/legal/privacy-ko.md](../../../../sources/HwangChanho__syncfortune/docs/legal/privacy-ko.md)<br>[docs/legal/terms-en.md](../../../../sources/HwangChanho__syncfortune/docs/legal/terms-en.md)<br>[docs/legal/terms-ja.md](../../../../sources/HwangChanho__syncfortune/docs/legal/terms-ja.md) |
| config | 4 | [package.json](../../../../sources/HwangChanho__syncfortune/package.json)<br>[tsconfig.json](../../../../sources/HwangChanho__syncfortune/tsconfig.json)<br>[app/package.json](../../../../sources/HwangChanho__syncfortune/app/package.json)<br>[app/tsconfig.json](../../../../sources/HwangChanho__syncfortune/app/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [spec/chart.ts](../../../../sources/HwangChanho__syncfortune/spec/chart.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [app/src/app/auth-callback.tsx](../../../../sources/HwangChanho__syncfortune/app/src/app/auth-callback.tsx) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `docs/index.md`, `README.md`, `docs/_config.yml`.
2. Inspect retrieval/memory/indexing through: `docs/index.md`, `app/src/app/(app)/index.tsx`.
3. Verify behavior through test/eval files: `spec/chart.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 AI Korean fortune telling app — deterministic Saju Four Pillars engine + RAG/LLM interpretation layer. React Native / Ex. 핵심 구조 신호는 TypeScript, package.json, README.md, anthropic, tests, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
