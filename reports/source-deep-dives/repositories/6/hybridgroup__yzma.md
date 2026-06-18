# hybridgroup/yzma Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Go with your own intelligence - Go applications that directly integrate llama.cpp for local inference using hardware acceleration.

## 요약

- 조사 단위: `sources/hybridgroup__yzma` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 173 files, 26 directories, depth score 97, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go, examples/vlm/main.go, examples/tooluse/main.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hybridgroup/yzma |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 504 |
| Forks | 17 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/hybridgroup__yzma](../../../../sources/hybridgroup__yzma) |
| Existing report | [reports/global-trending/repositories/hybridgroup__yzma.md](../../../global-trending/repositories/hybridgroup__yzma.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 173 / 26 |
| Max observed depth | 4 |
| Top directories | .github, cmd, examples, images, lib, pkg |
| Top extensions | .go: 126, .md: 18, .png: 15, (none): 4, .jinja: 3, .yml: 3, .jpg: 1, .mod: 1, .sum: 1, .webp: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/multitool | examples workspace | 3 |
| examples/tooluse | examples workspace | 3 |
| examples/chat | examples workspace | 2 |
| examples/describe | examples workspace | 2 |
| examples/embeddings | examples workspace | 2 |
| examples/hello | examples workspace | 2 |
| examples/installer | examples workspace | 2 |
| examples/modelinfo | examples workspace | 2 |
| examples/systeminfo | examples workspace | 2 |
| examples/vlm | examples workspace | 2 |
| lib | source boundary | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/README.md | cmd workspace | 1 |
| examples | top-level component | 1 |
| images | top-level component | 1 |
| pkg | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | download-models | make download-models |
| utility | Makefile | clean-llama.cpp | make clean-llama.cpp |
| utility | Makefile | download-llama.cpp | make download-llama.cpp |
| build | Makefile | build | make build |
| utility | Makefile | install | make install |
| test | Makefile | test | make test |
| utility | Makefile | roadmap | make roadmap |


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
| entrypoints | [main.go](../../../../sources/hybridgroup__yzma/main.go) | entrypoints signal |
| entrypoints | [examples/vlm/main.go](../../../../sources/hybridgroup__yzma/examples/vlm/main.go) | entrypoints signal |
| entrypoints | [examples/tooluse/main.go](../../../../sources/hybridgroup__yzma/examples/tooluse/main.go) | entrypoints signal |
| entrypoints | [examples/systeminfo/main.go](../../../../sources/hybridgroup__yzma/examples/systeminfo/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/hybridgroup__yzma/go.mod) | config signal |
| config | [Makefile](../../../../sources/hybridgroup__yzma/Makefile) | config signal |
| ci | [.github/workflows/linux.yml](../../../../sources/hybridgroup__yzma/.github/workflows/linux.yml) | ci signal |
| ci | [.github/workflows/macos.yml](../../../../sources/hybridgroup__yzma/.github/workflows/macos.yml) | ci signal |
| ci | [.github/workflows/windows.yml](../../../../sources/hybridgroup__yzma/.github/workflows/windows.yml) | ci signal |
| eval | [version_test.go](../../../../sources/hybridgroup__yzma/version_test.go) | eval support |
| eval | [pkg/vlm/helpers_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/helpers_test.go) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [main.go](../../../../sources/hybridgroup__yzma/main.go)<br>[examples/vlm/main.go](../../../../sources/hybridgroup__yzma/examples/vlm/main.go)<br>[examples/tooluse/main.go](../../../../sources/hybridgroup__yzma/examples/tooluse/main.go)<br>[examples/systeminfo/main.go](../../../../sources/hybridgroup__yzma/examples/systeminfo/main.go)<br>[examples/multitool/main.go](../../../../sources/hybridgroup__yzma/examples/multitool/main.go)<br>[examples/modelinfo/main.go](../../../../sources/hybridgroup__yzma/examples/modelinfo/main.go)<br>[examples/installer/main.go](../../../../sources/hybridgroup__yzma/examples/installer/main.go)<br>[examples/hello/main.go](../../../../sources/hybridgroup__yzma/examples/hello/main.go) |
| agentRuntime | 8 | [pkg/message/tools_test.go](../../../../sources/hybridgroup__yzma/pkg/message/tools_test.go)<br>[pkg/message/tools.go](../../../../sources/hybridgroup__yzma/pkg/message/tools.go)<br>[pkg/llama/context_test.go](../../../../sources/hybridgroup__yzma/pkg/llama/context_test.go)<br>[pkg/llama/context.go](../../../../sources/hybridgroup__yzma/pkg/llama/context.go)<br>[pkg/llama/memory_test.go](../../../../sources/hybridgroup__yzma/pkg/llama/memory_test.go)<br>[pkg/llama/memory.go](../../../../sources/hybridgroup__yzma/pkg/llama/memory.go)<br>[examples/tooluse/tools.go](../../../../sources/hybridgroup__yzma/examples/tooluse/tools.go)<br>[examples/multitool/tools.go](../../../../sources/hybridgroup__yzma/examples/multitool/tools.go) |
| mcp | 0 | not obvious |
| retrieval | 2 | [pkg/llama/memory_test.go](../../../../sources/hybridgroup__yzma/pkg/llama/memory_test.go)<br>[pkg/llama/memory.go](../../../../sources/hybridgroup__yzma/pkg/llama/memory.go) |
| spec | 1 | [ROADMAP.md](../../../../sources/hybridgroup__yzma/ROADMAP.md) |
| eval | 42 | [version_test.go](../../../../sources/hybridgroup__yzma/version_test.go)<br>[pkg/vlm/helpers_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/helpers_test.go)<br>[pkg/vlm/vlm_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/vlm_test.go)<br>[pkg/template/jinja_test.go](../../../../sources/hybridgroup__yzma/pkg/template/jinja_test.go)<br>[pkg/mtmd/benchmark_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/benchmark_test.go)<br>[pkg/mtmd/bitmap_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/bitmap_test.go)<br>[pkg/mtmd/chunks_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/chunks_test.go)<br>[pkg/mtmd/helpers_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/helpers_test.go) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/linux.yml](../../../../sources/hybridgroup__yzma/.github/workflows/linux.yml)<br>[.github/workflows/macos.yml](../../../../sources/hybridgroup__yzma/.github/workflows/macos.yml)<br>[.github/workflows/windows.yml](../../../../sources/hybridgroup__yzma/.github/workflows/windows.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 13 | [README.md](../../../../sources/hybridgroup__yzma/README.md)<br>[lib/README.md](../../../../sources/hybridgroup__yzma/lib/README.md)<br>[examples/vlm/README.md](../../../../sources/hybridgroup__yzma/examples/vlm/README.md)<br>[examples/tooluse/README.md](../../../../sources/hybridgroup__yzma/examples/tooluse/README.md)<br>[examples/systeminfo/README.md](../../../../sources/hybridgroup__yzma/examples/systeminfo/README.md)<br>[examples/multitool/README.md](../../../../sources/hybridgroup__yzma/examples/multitool/README.md)<br>[examples/modelinfo/README.md](../../../../sources/hybridgroup__yzma/examples/modelinfo/README.md)<br>[examples/installer/README.md](../../../../sources/hybridgroup__yzma/examples/installer/README.md) |
| config | 2 | [go.mod](../../../../sources/hybridgroup__yzma/go.mod)<br>[Makefile](../../../../sources/hybridgroup__yzma/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 42 | [version_test.go](../../../../sources/hybridgroup__yzma/version_test.go)<br>[pkg/vlm/helpers_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/helpers_test.go)<br>[pkg/vlm/vlm_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/vlm_test.go)<br>[pkg/template/jinja_test.go](../../../../sources/hybridgroup__yzma/pkg/template/jinja_test.go)<br>[pkg/mtmd/benchmark_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/benchmark_test.go)<br>[pkg/mtmd/bitmap_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/bitmap_test.go) |
| CI workflows | 3 | [.github/workflows/linux.yml](../../../../sources/hybridgroup__yzma/.github/workflows/linux.yml)<br>[.github/workflows/macos.yml](../../../../sources/hybridgroup__yzma/.github/workflows/macos.yml)<br>[.github/workflows/windows.yml](../../../../sources/hybridgroup__yzma/.github/workflows/windows.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `main.go`, `examples/vlm/main.go`, `examples/tooluse/main.go`.
2. Trace execution through entrypoints: `main.go`, `examples/vlm/main.go`, `examples/tooluse/main.go`.
3. Map agent/tool runtime through: `pkg/message/tools_test.go`, `pkg/message/tools.go`, `pkg/llama/context_test.go`.
4. Inspect retrieval/memory/indexing through: `pkg/llama/memory_test.go`, `pkg/llama/memory.go`.
5. Verify behavior through test/eval files: `version_test.go`, `pkg/vlm/helpers_test.go`, `pkg/vlm/vlm_test.go`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Go with your own intelligence Go applications that directly integrate llama.cpp for local inference using hardware accel. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
