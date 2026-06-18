# sktelecom/sbom-tools Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

BomLens — a local-first SBOM generator & open-source risk assessor (CycloneDX). Produce an SBOM, an open-source notice, and a security/license risk report from source code, containers, binaries, firmware, or an SBOM you received. CLI or web UI, no SaaS.

## 요약

- 조사 단위: `sources/sktelecom__sbom-tools` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 269 files, 60 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=examples/rust/src/main.rs, examples/go/main.go, docker/web/server.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | sktelecom/sbom-tools |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Shell |
| Stars | 5 |
| Forks | 1 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/sktelecom__sbom-tools](../../../../sources/sktelecom__sbom-tools) |
| Existing report | [reports/korea-trending/repositories/sktelecom__sbom-tools.md](../../../korea-trending/repositories/sktelecom__sbom-tools.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 269 / 60 |
| Max observed depth | 8 |
| Top directories | .github, docker, docs, electron, examples, overrides, scripts, tests |
| Top extensions | .md: 79, .tsx: 32, .sh: 22, .txt: 22, .json: 18, .png: 17, (none): 15, .yml: 11, .ts: 9, .mjs: 6, .svg: 5, .html: 4 |
| Source patterns | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 34 |
| tests | validation surface | 23 |
| examples/go | examples workspace | 3 |
| examples/nodejs | examples workspace | 3 |
| examples/python | examples workspace | 3 |
| examples/rust | examples workspace | 3 |
| examples/docker | examples workspace | 2 |
| examples/php | examples workspace | 2 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| electron | top-level component | 1 |
| examples | top-level component | 1 |
| examples/dotnet | examples workspace | 1 |
| examples/java-gradle | examples workspace | 1 |
| examples/java-maven | examples workspace | 1 |
| examples/ruby | examples workspace | 1 |
| examples/swift | examples workspace | 1 |
| examples/test-all.sh | examples workspace | 1 |


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
| entrypoints | [examples/rust/src/main.rs](../../../../sources/sktelecom__sbom-tools/examples/rust/src/main.rs) | entrypoints signal |
| entrypoints | [examples/go/main.go](../../../../sources/sktelecom__sbom-tools/examples/go/main.go) | entrypoints signal |
| entrypoints | [docker/web/server.py](../../../../sources/sktelecom__sbom-tools/docker/web/server.py) | entrypoints signal |
| entrypoints | [docker/web/frontend/src/App.tsx](../../../../sources/sktelecom__sbom-tools/docker/web/frontend/src/App.tsx) | entrypoints signal |
| config | [examples/rust/Cargo.toml](../../../../sources/sktelecom__sbom-tools/examples/rust/Cargo.toml) | config signal |
| config | [examples/python/requirements.txt](../../../../sources/sktelecom__sbom-tools/examples/python/requirements.txt) | config signal |
| config | [examples/nodejs/package.json](../../../../sources/sktelecom__sbom-tools/examples/nodejs/package.json) | config signal |
| config | [examples/go/go.mod](../../../../sources/sktelecom__sbom-tools/examples/go/go.mod) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/codeql.yml) | ci signal |
| ci | [.github/workflows/desktop.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/desktop.yml) | ci signal |
| ci | [.github/workflows/docker-publish.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/docker-publish.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [examples/rust/src/main.rs](../../../../sources/sktelecom__sbom-tools/examples/rust/src/main.rs)<br>[examples/go/main.go](../../../../sources/sktelecom__sbom-tools/examples/go/main.go)<br>[docker/web/server.py](../../../../sources/sktelecom__sbom-tools/docker/web/server.py)<br>[docker/web/frontend/src/App.tsx](../../../../sources/sktelecom__sbom-tools/docker/web/frontend/src/App.tsx)<br>[docker/web/frontend/src/index.css](../../../../sources/sktelecom__sbom-tools/docker/web/frontend/src/index.css)<br>[docker/web/frontend/src/main.tsx](../../../../sources/sktelecom__sbom-tools/docker/web/frontend/src/main.tsx) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 8 | [examples/php/index.php](../../../../sources/sktelecom__sbom-tools/examples/php/index.php)<br>[examples/nodejs/index.js](../../../../sources/sktelecom__sbom-tools/examples/nodejs/index.js)<br>[docs/index.ko.md](../../../../sources/sktelecom__sbom-tools/docs/index.ko.md)<br>[docs/index.md](../../../../sources/sktelecom__sbom-tools/docs/index.md)<br>[docs/images/web-ui-dependency-graph-en.png](../../../../sources/sktelecom__sbom-tools/docs/images/web-ui-dependency-graph-en.png)<br>[docs/images/web-ui-dependency-graph.png](../../../../sources/sktelecom__sbom-tools/docs/images/web-ui-dependency-graph.png)<br>[docker/web/frontend/index.html](../../../../sources/sktelecom__sbom-tools/docker/web/frontend/index.html)<br>[docker/web/frontend/src/index.css](../../../../sources/sktelecom__sbom-tools/docker/web/frontend/src/index.css) |
| spec | 4 | [examples/python/requirements.txt](../../../../sources/sktelecom__sbom-tools/examples/python/requirements.txt)<br>[docs/internal/improvement-roadmap.md](../../../../sources/sktelecom__sbom-tools/docs/internal/improvement-roadmap.md)<br>[docs/concepts/architecture.ko.md](../../../../sources/sktelecom__sbom-tools/docs/concepts/architecture.ko.md)<br>[docs/concepts/architecture.md](../../../../sources/sktelecom__sbom-tools/docs/concepts/architecture.md) |
| eval | 25 | [tests/check-examples-sync.sh](../../../../sources/sktelecom__sbom-tools/tests/check-examples-sync.sh)<br>[tests/compare-cdxgen-vs-docker.sh](../../../../sources/sktelecom__sbom-tools/tests/compare-cdxgen-vs-docker.sh)<br>[tests/en-screenshots-prompt.md](../../../../sources/sktelecom__sbom-tools/tests/en-screenshots-prompt.md)<br>[tests/test-e2e.sh](../../../../sources/sktelecom__sbom-tools/tests/test-e2e.sh)<br>[tests/test-examples-e2e.sh](../../../../sources/sktelecom__sbom-tools/tests/test-examples-e2e.sh)<br>[tests/test-postprocess.sh](../../../../sources/sktelecom__sbom-tools/tests/test-postprocess.sh)<br>[tests/test-scan.sh](../../../../sources/sktelecom__sbom-tools/tests/test-scan.sh)<br>[tests/test-windows.sh](../../../../sources/sktelecom__sbom-tools/tests/test-windows.sh) |
| security | 3 | [SECURITY.en.md](../../../../sources/sktelecom__sbom-tools/SECURITY.en.md)<br>[SECURITY.md](../../../../sources/sktelecom__sbom-tools/SECURITY.md)<br>[docker/lib/scan-security.sh](../../../../sources/sktelecom__sbom-tools/docker/lib/scan-security.sh) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/codeql.yml)<br>[.github/workflows/desktop.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/desktop.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/docs.yml)<br>[.github/workflows/examples.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/examples.yml)<br>[.github/workflows/release.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/scorecard.yml) |
| container | 3 | [examples/docker/Dockerfile](../../../../sources/sktelecom__sbom-tools/examples/docker/Dockerfile)<br>[docker/Dockerfile](../../../../sources/sktelecom__sbom-tools/docker/Dockerfile)<br>[docker/android/Dockerfile](../../../../sources/sktelecom__sbom-tools/docker/android/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 87 | [mkdocs.yml](../../../../sources/sktelecom__sbom-tools/mkdocs.yml)<br>[README.md](../../../../sources/sktelecom__sbom-tools/README.md)<br>[examples/swift/README.md](../../../../sources/sktelecom__sbom-tools/examples/swift/README.md)<br>[examples/rust/README.md](../../../../sources/sktelecom__sbom-tools/examples/rust/README.md)<br>[examples/ruby/README.md](../../../../sources/sktelecom__sbom-tools/examples/ruby/README.md)<br>[examples/python/README.md](../../../../sources/sktelecom__sbom-tools/examples/python/README.md)<br>[examples/php/README.md](../../../../sources/sktelecom__sbom-tools/examples/php/README.md)<br>[examples/nodejs/README.md](../../../../sources/sktelecom__sbom-tools/examples/nodejs/README.md) |
| config | 7 | [examples/rust/Cargo.toml](../../../../sources/sktelecom__sbom-tools/examples/rust/Cargo.toml)<br>[examples/python/requirements.txt](../../../../sources/sktelecom__sbom-tools/examples/python/requirements.txt)<br>[examples/nodejs/package.json](../../../../sources/sktelecom__sbom-tools/examples/nodejs/package.json)<br>[examples/go/go.mod](../../../../sources/sktelecom__sbom-tools/examples/go/go.mod)<br>[electron/package.json](../../../../sources/sktelecom__sbom-tools/electron/package.json)<br>[docker/web/frontend/package.json](../../../../sources/sktelecom__sbom-tools/docker/web/frontend/package.json)<br>[docker/web/frontend/tsconfig.json](../../../../sources/sktelecom__sbom-tools/docker/web/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 25 | [tests/check-examples-sync.sh](../../../../sources/sktelecom__sbom-tools/tests/check-examples-sync.sh)<br>[tests/compare-cdxgen-vs-docker.sh](../../../../sources/sktelecom__sbom-tools/tests/compare-cdxgen-vs-docker.sh)<br>[tests/en-screenshots-prompt.md](../../../../sources/sktelecom__sbom-tools/tests/en-screenshots-prompt.md)<br>[tests/test-e2e.sh](../../../../sources/sktelecom__sbom-tools/tests/test-e2e.sh)<br>[tests/test-examples-e2e.sh](../../../../sources/sktelecom__sbom-tools/tests/test-examples-e2e.sh)<br>[tests/test-postprocess.sh](../../../../sources/sktelecom__sbom-tools/tests/test-postprocess.sh) |
| CI workflows | 8 | [.github/workflows/ci.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/codeql.yml)<br>[.github/workflows/desktop.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/desktop.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/docs.yml)<br>[.github/workflows/examples.yml](../../../../sources/sktelecom__sbom-tools/.github/workflows/examples.yml) |
| Containers / deploy | 3 | [examples/docker/Dockerfile](../../../../sources/sktelecom__sbom-tools/examples/docker/Dockerfile)<br>[docker/Dockerfile](../../../../sources/sktelecom__sbom-tools/docker/Dockerfile)<br>[docker/android/Dockerfile](../../../../sources/sktelecom__sbom-tools/docker/android/Dockerfile) |
| Security / policy | 3 | [SECURITY.en.md](../../../../sources/sktelecom__sbom-tools/SECURITY.en.md)<br>[SECURITY.md](../../../../sources/sktelecom__sbom-tools/SECURITY.md)<br>[docker/lib/scan-security.sh](../../../../sources/sktelecom__sbom-tools/docker/lib/scan-security.sh) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `examples/rust/src/main.rs`, `examples/go/main.go`, `docker/web/server.py`.
2. Trace execution through entrypoints: `examples/rust/src/main.rs`, `examples/go/main.go`, `docker/web/server.py`.
3. Inspect retrieval/memory/indexing through: `examples/php/index.php`, `examples/nodejs/index.js`, `docs/index.ko.md`.
4. Verify behavior through test/eval files: `tests/check-examples-sync.sh`, `tests/compare-cdxgen-vs-docker.sh`, `tests/en-screenshots-prompt.md`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 BomLens — a local first SBOM generator & open source risk assessor CycloneDX . Produce an SBOM, an open source notice, a. 핵심 구조 신호는 Shell, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
