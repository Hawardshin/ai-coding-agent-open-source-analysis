# IBM/iac-spec-kit Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 91 files, 30 directories.

## 요약

- 조사 단위: `sources/IBM__iac-spec-kit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 91 files, 30 directories, depth score 95, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, templates/agent-file-template.md, memory/principles.md이고, 의존성 단서는 click, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | IBM/iac-spec-kit |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 68 |
| Forks | 8 |
| License | MIT License |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/IBM__iac-spec-kit](../../../../sources/IBM__iac-spec-kit) |
| Existing report | [reports/clone-structures/IBM__iac-spec-kit.md](../../../clone-structures/IBM__iac-spec-kit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 91 / 30 |
| Max observed depth | 4 |
| Top directories | .github, dev, docs, examples, media, memory, scripts, src, templates |
| Top extensions | .md: 58, .sh: 13, .ps1: 5, .yml: 5, (none): 4, .json: 2, .py: 2, .png: 1, .toml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| dev | top-level component | 1 |
| examples | top-level component | 1 |
| examples/01-simple-vpc | examples workspace | 1 |
| examples/02-static-website | examples workspace | 1 |
| examples/03-wordpress | examples workspace | 1 |
| examples/04-landing-zone | examples workspace | 1 |
| examples/05-three-tier-webapp | examples workspace | 1 |
| examples/06-data-pipeline | examples workspace | 1 |
| examples/07-microservices | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| media | top-level component | 1 |
| memory | top-level component | 1 |
| scripts | top-level component | 1 |
| src | source boundary | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | pyproject.toml | iac-specify | iac-specify |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | click, typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/IBM__iac-spec-kit/AGENTS.md) | agentRuntime signal |
| agentRuntime | [templates/agent-file-template.md](../../../../sources/IBM__iac-spec-kit/templates/agent-file-template.md) | agentRuntime signal |
| agentRuntime | [memory/principles.md](../../../../sources/IBM__iac-spec-kit/memory/principles.md) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/IBM__iac-spec-kit/pyproject.toml) | config signal |
| ci | [.github/workflows/release.yml](../../../../sources/IBM__iac-spec-kit/.github/workflows/release.yml) | ci support |
| ci | [.github/workflows/scripts/check-release-exists.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/check-release-exists.sh) | ci support |
| eval | [templates/spec-template.md](../../../../sources/IBM__iac-spec-kit/templates/spec-template.md) | eval support |
| eval | [media/iac-spec-kit-thumbnail.png](../../../../sources/IBM__iac-spec-kit/media/iac-spec-kit-thumbnail.png) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 3 | [AGENTS.md](../../../../sources/IBM__iac-spec-kit/AGENTS.md)<br>[templates/agent-file-template.md](../../../../sources/IBM__iac-spec-kit/templates/agent-file-template.md)<br>[memory/principles.md](../../../../sources/IBM__iac-spec-kit/memory/principles.md) |
| mcp | 0 | not obvious |
| retrieval | 1 | [memory/principles.md](../../../../sources/IBM__iac-spec-kit/memory/principles.md) |
| spec | 2 | [templates/spec-template.md](../../../../sources/IBM__iac-spec-kit/templates/spec-template.md)<br>[media/iac-spec-kit-thumbnail.png](../../../../sources/IBM__iac-spec-kit/media/iac-spec-kit-thumbnail.png) |
| eval | 3 | [templates/spec-template.md](../../../../sources/IBM__iac-spec-kit/templates/spec-template.md)<br>[media/iac-spec-kit-thumbnail.png](../../../../sources/IBM__iac-spec-kit/media/iac-spec-kit-thumbnail.png)<br>[dev/test-bundle-extraction.sh](../../../../sources/IBM__iac-spec-kit/dev/test-bundle-extraction.sh) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/release.yml](../../../../sources/IBM__iac-spec-kit/.github/workflows/release.yml)<br>[.github/workflows/scripts/check-release-exists.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/check-release-exists.sh)<br>[.github/workflows/scripts/create-github-release.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/create-github-release.sh)<br>[.github/workflows/scripts/create-release-packages.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/create-release-packages.sh)<br>[.github/workflows/scripts/generate-release-notes.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/generate-release-notes.sh)<br>[.github/workflows/scripts/get-next-version.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/get-next-version.sh)<br>[.github/workflows/scripts/update-version.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/update-version.sh) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/IBM__iac-spec-kit/AGENTS.md) |
| docs | 10 | [README.md](../../../../sources/IBM__iac-spec-kit/README.md)<br>[examples/README.md](../../../../sources/IBM__iac-spec-kit/examples/README.md)<br>[examples/07-microservices/README.md](../../../../sources/IBM__iac-spec-kit/examples/07-microservices/README.md)<br>[examples/06-data-pipeline/README.md](../../../../sources/IBM__iac-spec-kit/examples/06-data-pipeline/README.md)<br>[examples/05-three-tier-webapp/README.md](../../../../sources/IBM__iac-spec-kit/examples/05-three-tier-webapp/README.md)<br>[examples/04-landing-zone/README.md](../../../../sources/IBM__iac-spec-kit/examples/04-landing-zone/README.md)<br>[examples/03-wordpress/README.md](../../../../sources/IBM__iac-spec-kit/examples/03-wordpress/README.md)<br>[examples/02-static-website/README.md](../../../../sources/IBM__iac-spec-kit/examples/02-static-website/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/IBM__iac-spec-kit/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [templates/spec-template.md](../../../../sources/IBM__iac-spec-kit/templates/spec-template.md)<br>[media/iac-spec-kit-thumbnail.png](../../../../sources/IBM__iac-spec-kit/media/iac-spec-kit-thumbnail.png)<br>[dev/test-bundle-extraction.sh](../../../../sources/IBM__iac-spec-kit/dev/test-bundle-extraction.sh) |
| CI workflows | 7 | [.github/workflows/release.yml](../../../../sources/IBM__iac-spec-kit/.github/workflows/release.yml)<br>[.github/workflows/scripts/check-release-exists.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/check-release-exists.sh)<br>[.github/workflows/scripts/create-github-release.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/create-github-release.sh)<br>[.github/workflows/scripts/create-release-packages.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/create-release-packages.sh)<br>[.github/workflows/scripts/generate-release-notes.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/generate-release-notes.sh)<br>[.github/workflows/scripts/get-next-version.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/get-next-version.sh) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/IBM__iac-spec-kit/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `templates/agent-file-template.md`, `memory/principles.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `templates/agent-file-template.md`, `memory/principles.md`.
3. Inspect retrieval/memory/indexing through: `memory/principles.md`.
4. Verify behavior through test/eval files: `templates/spec-template.md`, `media/iac-spec-kit-thumbnail.png`, `dev/test-bundle-extraction.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 91 files, 30 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious입니다.
