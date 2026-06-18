# zubair-trabzada/geo-seo-claude Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community

## 요약

- 조사 단위: `sources/zubair-trabzada__geo-seo-claude` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 67 files, 28 directories, depth score 72, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tests/agent-readiness-test-results.md, skills/geo-update/SKILL.md, skills/geo-technical/SKILL.md이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | zubair-trabzada/geo-seo-claude |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 8195 |
| Forks | 1325 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/zubair-trabzada__geo-seo-claude](../../../../sources/zubair-trabzada__geo-seo-claude) |
| Existing report | [reports/global-trending/repositories/zubair-trabzada__geo-seo-claude.md](../../../global-trending/repositories/zubair-trabzada__geo-seo-claude.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 67 / 28 |
| Max observed depth | 4 |
| Top directories | agents, assets, docs, examples, geo, schema, scripts, skills, templates, tests, white-label |
| Top extensions | .md: 36, .json: 9, .py: 8, .html: 5, .sh: 3, (none): 2, .css: 1, .pdf: 1, .svg: 1, .txt: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 10 |
| tests | validation surface | 4 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/electron-srl.com-audit.json | examples workspace | 1 |
| examples/electron-srl.com-quick-audit.md | examples workspace | 1 |
| geo | top-level component | 1 |
| schema | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| templates | top-level component | 1 |
| white-label | top-level component | 1 |


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
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [tests/agent-readiness-test-results.md](../../../../sources/zubair-trabzada__geo-seo-claude/tests/agent-readiness-test-results.md) | agentRuntime signal |
| agentRuntime | [skills/geo-update/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-update/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/geo-technical/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-technical/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/geo-schema/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-schema/SKILL.md) | agentRuntime signal |
| config | [requirements.txt](../../../../sources/zubair-trabzada__geo-seo-claude/requirements.txt) | config signal |
| eval | [tests/test_fetch_page_ssr.py](../../../../sources/zubair-trabzada__geo-seo-claude/tests/test_fetch_page_ssr.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 23 | [tests/agent-readiness-test-results.md](../../../../sources/zubair-trabzada__geo-seo-claude/tests/agent-readiness-test-results.md)<br>[skills/geo-update/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-update/SKILL.md)<br>[skills/geo-technical/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-technical/SKILL.md)<br>[skills/geo-schema/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-schema/SKILL.md)<br>[skills/geo-report-pdf/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-report-pdf/SKILL.md)<br>[skills/geo-report/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-report/SKILL.md)<br>[skills/geo-prospect/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-prospect/SKILL.md)<br>[skills/geo-proposal/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-proposal/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 2 | [requirements.txt](../../../../sources/zubair-trabzada__geo-seo-claude/requirements.txt)<br>[docs/architecture.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/architecture.md) |
| eval | 2 | [tests/agent-readiness-test-results.md](../../../../sources/zubair-trabzada__geo-seo-claude/tests/agent-readiness-test-results.md)<br>[tests/test_fetch_page_ssr.py](../../../../sources/zubair-trabzada__geo-seo-claude/tests/test_fetch_page_ssr.py) |
| security | 3 | [skills/geo-audit/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-audit/SKILL.md)<br>[examples/electron-srl.com-audit.json](../../../../sources/zubair-trabzada__geo-seo-claude/examples/electron-srl.com-audit.json)<br>[examples/electron-srl.com-quick-audit.md](../../../../sources/zubair-trabzada__geo-seo-claude/examples/electron-srl.com-quick-audit.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/zubair-trabzada__geo-seo-claude/README.md)<br>[white-label/README.md](../../../../sources/zubair-trabzada__geo-seo-claude/white-label/README.md)<br>[docs/architecture.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/architecture.md)<br>[docs/commands-reference.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/commands-reference.md)<br>[docs/faq.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/faq.md)<br>[docs/getting-started.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/getting-started.md)<br>[docs/README.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/README.md)<br>[docs/scoring-methodology.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/scoring-methodology.md) |
| config | 1 | [requirements.txt](../../../../sources/zubair-trabzada__geo-seo-claude/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [tests/agent-readiness-test-results.md](../../../../sources/zubair-trabzada__geo-seo-claude/tests/agent-readiness-test-results.md)<br>[tests/test_fetch_page_ssr.py](../../../../sources/zubair-trabzada__geo-seo-claude/tests/test_fetch_page_ssr.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [skills/geo-audit/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-audit/SKILL.md)<br>[examples/electron-srl.com-audit.json](../../../../sources/zubair-trabzada__geo-seo-claude/examples/electron-srl.com-audit.json)<br>[examples/electron-srl.com-quick-audit.md](../../../../sources/zubair-trabzada__geo-seo-claude/examples/electron-srl.com-quick-audit.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/agent-readiness-test-results.md`, `skills/geo-update/SKILL.md`, `skills/geo-technical/SKILL.md`.
2. Map agent/tool runtime through: `tests/agent-readiness-test-results.md`, `skills/geo-update/SKILL.md`, `skills/geo-technical/SKILL.md`.
3. Verify behavior through test/eval files: `tests/agent-readiness-test-results.md`, `tests/test_fetch_page_ssr.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 GEO first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawl. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, playwright, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
