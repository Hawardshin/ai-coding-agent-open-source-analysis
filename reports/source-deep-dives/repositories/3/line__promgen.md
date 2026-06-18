# line/promgen Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Promgen is a configuration file generator for Prometheus

## 요약

- 조사 단위: `sources/line__promgen` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 373 files, 45 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 eval=promgen/tests/__init__.py, promgen/tests/test_alert_rules.py, promgen/tests/test_cli.py이고, 의존성 단서는 prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/promgen |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | JavaScript |
| Stars | 1124 |
| Forks | 153 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__promgen](../../../../sources/line__promgen) |
| Existing report | [reports/korea-trending/repositories/line__promgen.md](../../../korea-trending/repositories/line__promgen.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 373 / 45 |
| Max observed depth | 6 |
| Top directories | .github, docker, docs, licenses, promgen |
| Top extensions | .py: 131, .html: 99, .rst: 26, .json: 22, .txt: 21, .js: 13, .png: 11, .yml: 11, (none): 9, .css: 5, .md: 5, .csv: 4 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 49 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| licenses | top-level component | 1 |
| promgen | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | list | make list |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | pip | make pip |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | compile | make compile |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | demo | make demo |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | bootstrap | make bootstrap |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check | make check |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | django-check | make django-check |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | promgen-test | make promgen-test |
| utility | pyproject.toml | promgen | promgen |


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
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [promgen/tests/__init__.py](../../../../sources/line__promgen/promgen/tests/__init__.py) | eval signal |
| eval | [promgen/tests/test_alert_rules.py](../../../../sources/line__promgen/promgen/tests/test_alert_rules.py) | eval signal |
| eval | [promgen/tests/test_cli.py](../../../../sources/line__promgen/promgen/tests/test_cli.py) | eval signal |
| eval | [promgen/tests/test_host_add.py](../../../../sources/line__promgen/promgen/tests/test_host_add.py) | eval signal |
| config | [Makefile](../../../../sources/line__promgen/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/line__promgen/pyproject.toml) | config signal |
| config | [docs/Makefile](../../../../sources/line__promgen/docs/Makefile) | config signal |
| config | [docs/requirements.txt](../../../../sources/line__promgen/docs/requirements.txt) | config signal |
| ci | [.github/workflows/check.yml](../../../../sources/line__promgen/.github/workflows/check.yml) | ci signal |
| ci | [.github/workflows/docker.yml](../../../../sources/line__promgen/.github/workflows/docker.yml) | ci signal |
| ci | [.github/workflows/sphinx.yml](../../../../sources/line__promgen/.github/workflows/sphinx.yml) | ci signal |
| container | [docker-compose.yml](../../../../sources/line__promgen/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [promgen/context_processors.py](../../../../sources/line__promgen/promgen/context_processors.py) |
| mcp | 0 | not obvious |
| retrieval | 7 | [promgen/templates/promgen/graph.html](../../../../sources/line__promgen/promgen/templates/promgen/graph.html)<br>[promgen/management/commands/alerts-index.py](../../../../sources/line__promgen/promgen/management/commands/alerts-index.py)<br>[docs/index.rst](../../../../sources/line__promgen/docs/index.rst)<br>[docs/user/index.rst](../../../../sources/line__promgen/docs/user/index.rst)<br>[docs/plugin/index.rst](../../../../sources/line__promgen/docs/plugin/index.rst)<br>[docs/modules/index.rst](../../../../sources/line__promgen/docs/modules/index.rst)<br>[docs/conf/index.rst](../../../../sources/line__promgen/docs/conf/index.rst) |
| spec | 3 | [docs/requirements.txt](../../../../sources/line__promgen/docs/requirements.txt)<br>[docker/requirements.in](../../../../sources/line__promgen/docker/requirements.in)<br>[docker/requirements.txt](../../../../sources/line__promgen/docker/requirements.txt) |
| eval | 61 | [promgen/tests/__init__.py](../../../../sources/line__promgen/promgen/tests/__init__.py)<br>[promgen/tests/test_alert_rules.py](../../../../sources/line__promgen/promgen/tests/test_alert_rules.py)<br>[promgen/tests/test_cli.py](../../../../sources/line__promgen/promgen/tests/test_cli.py)<br>[promgen/tests/test_host_add.py](../../../../sources/line__promgen/promgen/tests/test_host_add.py)<br>[promgen/tests/test_metrics.py](../../../../sources/line__promgen/promgen/tests/test_metrics.py)<br>[promgen/tests/test_mixins.py](../../../../sources/line__promgen/promgen/tests/test_mixins.py)<br>[promgen/tests/test_models.py](../../../../sources/line__promgen/promgen/tests/test_models.py)<br>[promgen/tests/test_renderers.py](../../../../sources/line__promgen/promgen/tests/test_renderers.py) |
| security | 11 | [SECURITY.md](../../../../sources/line__promgen/SECURITY.md)<br>[promgen/tests/examples/rest.audit.list.json](../../../../sources/line__promgen/promgen/tests/examples/rest.audit.list.json)<br>[promgen/tests/cases/test_rest_audit.csv](../../../../sources/line__promgen/promgen/tests/cases/test_rest_audit.csv)<br>[promgen/templates/promgen/audit_list.html](../../../../sources/line__promgen/promgen/templates/promgen/audit_list.html)<br>[promgen/templates/promgen/permission_block.html](../../../../sources/line__promgen/promgen/templates/promgen/permission_block.html)<br>[promgen/templates/promgen/permission_form.html](../../../../sources/line__promgen/promgen/templates/promgen/permission_form.html)<br>[promgen/templates/promgen/permission_group_row.html](../../../../sources/line__promgen/promgen/templates/promgen/permission_group_row.html)<br>[promgen/templates/promgen/permission_user_row.html](../../../../sources/line__promgen/promgen/templates/promgen/permission_user_row.html) |
| ci | 3 | [.github/workflows/check.yml](../../../../sources/line__promgen/.github/workflows/check.yml)<br>[.github/workflows/docker.yml](../../../../sources/line__promgen/.github/workflows/docker.yml)<br>[.github/workflows/sphinx.yml](../../../../sources/line__promgen/.github/workflows/sphinx.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/line__promgen/docker-compose.yml)<br>[Dockerfile](../../../../sources/line__promgen/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 40 | [README.md](../../../../sources/line__promgen/README.md)<br>[docs/conf.py](../../../../sources/line__promgen/docs/conf.py)<br>[docs/index.rst](../../../../sources/line__promgen/docs/index.rst)<br>[docs/Makefile](../../../../sources/line__promgen/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/line__promgen/docs/requirements.txt)<br>[docs/user/admin.rst](../../../../sources/line__promgen/docs/user/admin.rst)<br>[docs/user/api.rst](../../../../sources/line__promgen/docs/user/api.rst)<br>[docs/user/index.rst](../../../../sources/line__promgen/docs/user/index.rst) |
| config | 5 | [Makefile](../../../../sources/line__promgen/Makefile)<br>[pyproject.toml](../../../../sources/line__promgen/pyproject.toml)<br>[docs/Makefile](../../../../sources/line__promgen/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/line__promgen/docs/requirements.txt)<br>[docker/requirements.txt](../../../../sources/line__promgen/docker/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 61 | [promgen/tests/__init__.py](../../../../sources/line__promgen/promgen/tests/__init__.py)<br>[promgen/tests/test_alert_rules.py](../../../../sources/line__promgen/promgen/tests/test_alert_rules.py)<br>[promgen/tests/test_cli.py](../../../../sources/line__promgen/promgen/tests/test_cli.py)<br>[promgen/tests/test_host_add.py](../../../../sources/line__promgen/promgen/tests/test_host_add.py)<br>[promgen/tests/test_metrics.py](../../../../sources/line__promgen/promgen/tests/test_metrics.py)<br>[promgen/tests/test_mixins.py](../../../../sources/line__promgen/promgen/tests/test_mixins.py) |
| CI workflows | 3 | [.github/workflows/check.yml](../../../../sources/line__promgen/.github/workflows/check.yml)<br>[.github/workflows/docker.yml](../../../../sources/line__promgen/.github/workflows/docker.yml)<br>[.github/workflows/sphinx.yml](../../../../sources/line__promgen/.github/workflows/sphinx.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/line__promgen/docker-compose.yml)<br>[Dockerfile](../../../../sources/line__promgen/Dockerfile) |
| Security / policy | 11 | [SECURITY.md](../../../../sources/line__promgen/SECURITY.md)<br>[promgen/tests/examples/rest.audit.list.json](../../../../sources/line__promgen/promgen/tests/examples/rest.audit.list.json)<br>[promgen/tests/cases/test_rest_audit.csv](../../../../sources/line__promgen/promgen/tests/cases/test_rest_audit.csv)<br>[promgen/templates/promgen/audit_list.html](../../../../sources/line__promgen/promgen/templates/promgen/audit_list.html)<br>[promgen/templates/promgen/permission_block.html](../../../../sources/line__promgen/promgen/templates/promgen/permission_block.html)<br>[promgen/templates/promgen/permission_form.html](../../../../sources/line__promgen/promgen/templates/promgen/permission_form.html) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `promgen/tests/__init__.py`, `promgen/tests/test_alert_rules.py`, `promgen/tests/test_cli.py`.
2. Map agent/tool runtime through: `promgen/context_processors.py`.
3. Inspect retrieval/memory/indexing through: `promgen/templates/promgen/graph.html`, `promgen/management/commands/alerts-index.py`, `docs/index.rst`.
4. Verify behavior through test/eval files: `promgen/tests/__init__.py`, `promgen/tests/test_alert_rules.py`, `promgen/tests/test_cli.py`.

## Existing Repository Insight

평가/관측/품질 관점에서 Promgen is a configuration file generator for Prometheus. 핵심 구조 신호는 JavaScript, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
