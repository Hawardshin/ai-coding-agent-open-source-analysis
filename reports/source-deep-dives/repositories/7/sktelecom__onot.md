# sktelecom/onot Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Generate open source software notices (OSS Notice) from SBOM documents — SPDX, CycloneDX, Excel → HTML/Text/Markdown/PDF. Offline, type-safe Python core with CLI, local API, and an installable desktop app.

## 요약

- 조사 단위: `sources/sktelecom__onot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 169 files, 53 directories, depth score 109, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/onot/cli/main.py, frontend/src/App.test.tsx, frontend/src/App.tsx이고, 의존성 단서는 fastapi, express, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | sktelecom/onot |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 15 |
| Forks | 7 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/sktelecom__onot](../../../../sources/sktelecom__onot) |
| Existing report | [reports/korea-trending/repositories/sktelecom__onot.md](../../../korea-trending/repositories/sktelecom__onot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 169 / 53 |
| Max observed depth | 6 |
| Top directories | .claude, .github, docs, electron, frontend, scripts, spikes, src, tests |
| Top extensions | .py: 73, .mjs: 12, .md: 11, .ts: 10, .tsx: 10, .json: 9, .yml: 9, (none): 5, .png: 4, .css: 3, .jinja: 3, .xml: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 48 |
| src | source boundary | 13 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| electron | top-level component | 1 |
| frontend | top-level component | 1 |
| scripts | top-level component | 1 |
| spikes | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | onot | onot |
| utility | pyproject.toml | onot-sidecar | onot-sidecar |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi, express |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/onot/cli/main.py](../../../../sources/sktelecom__onot/src/onot/cli/main.py) | entrypoints signal |
| entrypoints | [frontend/src/App.test.tsx](../../../../sources/sktelecom__onot/frontend/src/App.test.tsx) | entrypoints signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/sktelecom__onot/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/sktelecom__onot/frontend/src/index.css) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/sktelecom__onot/pyproject.toml) | config signal |
| config | [frontend/package.json](../../../../sources/sktelecom__onot/frontend/package.json) | config signal |
| config | [frontend/tsconfig.json](../../../../sources/sktelecom__onot/frontend/tsconfig.json) | config signal |
| config | [electron/package.json](../../../../sources/sktelecom__onot/electron/package.json) | config signal |
| docs | [README.md](../../../../sources/sktelecom__onot/README.md) | docs signal |
| docs | [docs/USER_GUIDE.md](../../../../sources/sktelecom__onot/docs/USER_GUIDE.md) | docs signal |
| docs | [docs/images/01-home.png](../../../../sources/sktelecom__onot/docs/images/01-home.png) | docs signal |
| docs | [docs/images/02-uploaded.png](../../../../sources/sktelecom__onot/docs/images/02-uploaded.png) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [src/onot/cli/main.py](../../../../sources/sktelecom__onot/src/onot/cli/main.py)<br>[frontend/src/App.test.tsx](../../../../sources/sktelecom__onot/frontend/src/App.test.tsx)<br>[frontend/src/App.tsx](../../../../sources/sktelecom__onot/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/sktelecom__onot/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/sktelecom__onot/frontend/src/main.tsx) |
| agentRuntime | 1 | [src/onot/rendering/context.py](../../../../sources/sktelecom__onot/src/onot/rendering/context.py) |
| mcp | 0 | not obvious |
| retrieval | 18 | [tests/ingest/test_cyclonedx.py](../../../../sources/sktelecom__onot/tests/ingest/test_cyclonedx.py)<br>[tests/ingest/test_detect.py](../../../../sources/sktelecom__onot/tests/ingest/test_detect.py)<br>[tests/ingest/test_equivalence.py](../../../../sources/sktelecom__onot/tests/ingest/test_equivalence.py)<br>[tests/ingest/test_excel_robust.py](../../../../sources/sktelecom__onot/tests/ingest/test_excel_robust.py)<br>[tests/ingest/test_registry.py](../../../../sources/sktelecom__onot/tests/ingest/test_registry.py)<br>[tests/ingest/test_spdx.py](../../../../sources/sktelecom__onot/tests/ingest/test_spdx.py)<br>[tests/ingest/test_xml_security.py](../../../../sources/sktelecom__onot/tests/ingest/test_xml_security.py)<br>[src/onot/ingest/__init__.py](../../../../sources/sktelecom__onot/src/onot/ingest/__init__.py) |
| spec | 1 | [docs/2.0/TRACEABILITY.md](../../../../sources/sktelecom__onot/docs/2.0/TRACEABILITY.md) |
| eval | 46 | [tests/test_smoke.py](../../../../sources/sktelecom__onot/tests/test_smoke.py)<br>[tests/unit/test_errors.py](../../../../sources/sktelecom__onot/tests/unit/test_errors.py)<br>[tests/unit/test_models.py](../../../../sources/sktelecom__onot/tests/unit/test_models.py)<br>[tests/rendering/test_context.py](../../../../sources/sktelecom__onot/tests/rendering/test_context.py)<br>[tests/rendering/test_escape.py](../../../../sources/sktelecom__onot/tests/rendering/test_escape.py)<br>[tests/rendering/test_filters.py](../../../../sources/sktelecom__onot/tests/rendering/test_filters.py)<br>[tests/rendering/test_golden.py](../../../../sources/sktelecom__onot/tests/rendering/test_golden.py)<br>[tests/rendering/test_i18n.py](../../../../sources/sktelecom__onot/tests/rendering/test_i18n.py) |
| security | 5 | [SECURITY.md](../../../../sources/sktelecom__onot/SECURITY.md)<br>[tests/ingest/test_xml_security.py](../../../../sources/sktelecom__onot/tests/ingest/test_xml_security.py)<br>[tests/api/test_security.py](../../../../sources/sktelecom__onot/tests/api/test_security.py)<br>[src/onot/ingest/_xml_guard.py](../../../../sources/sktelecom__onot/src/onot/ingest/_xml_guard.py)<br>[.github/workflows/security.yml](../../../../sources/sktelecom__onot/.github/workflows/security.yml) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/sktelecom__onot/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/sktelecom__onot/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/sktelecom__onot/.github/workflows/scorecard.yml)<br>[.github/workflows/security.yml](../../../../sources/sktelecom__onot/.github/workflows/security.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 8 | [README.md](../../../../sources/sktelecom__onot/README.md)<br>[docs/USER_GUIDE.md](../../../../sources/sktelecom__onot/docs/USER_GUIDE.md)<br>[docs/images/01-home.png](../../../../sources/sktelecom__onot/docs/images/01-home.png)<br>[docs/images/02-uploaded.png](../../../../sources/sktelecom__onot/docs/images/02-uploaded.png)<br>[docs/images/03-settings.png](../../../../sources/sktelecom__onot/docs/images/03-settings.png)<br>[docs/images/04-preview.png](../../../../sources/sktelecom__onot/docs/images/04-preview.png)<br>[docs/2.0/DECISIONS.md](../../../../sources/sktelecom__onot/docs/2.0/DECISIONS.md)<br>[docs/2.0/TRACEABILITY.md](../../../../sources/sktelecom__onot/docs/2.0/TRACEABILITY.md) |
| config | 4 | [pyproject.toml](../../../../sources/sktelecom__onot/pyproject.toml)<br>[frontend/package.json](../../../../sources/sktelecom__onot/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/sktelecom__onot/frontend/tsconfig.json)<br>[electron/package.json](../../../../sources/sktelecom__onot/electron/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 46 | [tests/test_smoke.py](../../../../sources/sktelecom__onot/tests/test_smoke.py)<br>[tests/unit/test_errors.py](../../../../sources/sktelecom__onot/tests/unit/test_errors.py)<br>[tests/unit/test_models.py](../../../../sources/sktelecom__onot/tests/unit/test_models.py)<br>[tests/rendering/test_context.py](../../../../sources/sktelecom__onot/tests/rendering/test_context.py)<br>[tests/rendering/test_escape.py](../../../../sources/sktelecom__onot/tests/rendering/test_escape.py)<br>[tests/rendering/test_filters.py](../../../../sources/sktelecom__onot/tests/rendering/test_filters.py) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/sktelecom__onot/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/sktelecom__onot/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/sktelecom__onot/.github/workflows/scorecard.yml)<br>[.github/workflows/security.yml](../../../../sources/sktelecom__onot/.github/workflows/security.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [SECURITY.md](../../../../sources/sktelecom__onot/SECURITY.md)<br>[tests/ingest/test_xml_security.py](../../../../sources/sktelecom__onot/tests/ingest/test_xml_security.py)<br>[tests/api/test_security.py](../../../../sources/sktelecom__onot/tests/api/test_security.py)<br>[src/onot/ingest/_xml_guard.py](../../../../sources/sktelecom__onot/src/onot/ingest/_xml_guard.py)<br>[.github/workflows/security.yml](../../../../sources/sktelecom__onot/.github/workflows/security.yml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/onot/cli/main.py`, `frontend/src/App.test.tsx`, `frontend/src/App.tsx`.
2. Trace execution through entrypoints: `src/onot/cli/main.py`, `frontend/src/App.test.tsx`, `frontend/src/App.tsx`.
3. Map agent/tool runtime through: `src/onot/rendering/context.py`.
4. Inspect retrieval/memory/indexing through: `tests/ingest/test_cyclonedx.py`, `tests/ingest/test_detect.py`, `tests/ingest/test_equivalence.py`.
5. Verify behavior through test/eval files: `tests/test_smoke.py`, `tests/unit/test_errors.py`, `tests/unit/test_models.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Generate open source software notices OSS Notice from SBOM documents — SPDX, CycloneDX, Excel → HTML/Text/Markdown/PDF. . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, fastapi, pydantic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
