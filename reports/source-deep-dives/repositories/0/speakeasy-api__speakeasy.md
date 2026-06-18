# speakeasy-api/speakeasy Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Build APIs your users love ❤️ with Speakeasy. ✨ Polished and type-safe SDKs. 🌐 Terraform providers, MCP servers, CLIs and Contract Tests for your API. OpenAPI native.

## 요약

- 조사 단위: `sources/speakeasy-api__speakeasy` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 564 files, 127 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go, internal/defaultcodesamples/src/main.ts, cmd/docs/main.go이고, 의존성 단서는 mcp, cobra, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | speakeasy-api/speakeasy |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | JavaScript |
| Stars | 419 |
| Forks | 36 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/speakeasy-api__speakeasy](../../../../sources/speakeasy-api__speakeasy) |
| Existing report | [reports/global-trending/repositories/speakeasy-api__speakeasy.md](../../../global-trending/repositories/speakeasy-api__speakeasy.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 564 / 127 |
| Max observed depth | 7 |
| Top directories | .claude, .github, cmd, integration, internal, pkg, prompts, registry, scripts |
| Top extensions | .go: 428, .md: 46, .yaml: 46, .yml: 9, (none): 9, .ts: 7, .json: 6, .bash: 3, .lock: 2, .txt: 2, .bats: 1, .js: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cmd/mcp | cmd workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/agent_setup_skills.go | cmd workspace | 1 |
| cmd/agent.go | cmd workspace | 1 |
| cmd/auth.go | cmd workspace | 1 |
| cmd/docs | cmd workspace | 1 |
| integration | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| prompts | top-level component | 1 |
| registry | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | upgrade | make upgrade |
| utility | Makefile | docs | make docs |
| utility | Makefile | docsite | make docsite |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [main.go](../../../../sources/speakeasy-api__speakeasy/main.go) | entrypoints signal |
| entrypoints | [internal/defaultcodesamples/src/main.ts](../../../../sources/speakeasy-api__speakeasy/internal/defaultcodesamples/src/main.ts) | entrypoints signal |
| entrypoints | [cmd/docs/main.go](../../../../sources/speakeasy-api__speakeasy/cmd/docs/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/speakeasy-api__speakeasy/go.mod) | config signal |
| config | [Makefile](../../../../sources/speakeasy-api__speakeasy/Makefile) | config signal |
| config | [internal/defaultcodesamples/package.json](../../../../sources/speakeasy-api__speakeasy/internal/defaultcodesamples/package.json) | config signal |
| config | [internal/defaultcodesamples/tsconfig.json](../../../../sources/speakeasy-api__speakeasy/internal/defaultcodesamples/tsconfig.json) | config signal |
| ci | [internal/ci/versioninfo/versioninfo.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/versioninfo/versioninfo.go) | ci signal |
| ci | [internal/ci/versionbumps/versionBumps.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/versionbumps/versionBumps.go) | ci signal |
| ci | [internal/ci/utils/outputs.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/utils/outputs.go) | ci signal |
| ci | [internal/ci/utils/package_test.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/utils/package_test.go) | ci signal |
| docs | [README.md](../../../../sources/speakeasy-api__speakeasy/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [main.go](../../../../sources/speakeasy-api__speakeasy/main.go)<br>[internal/defaultcodesamples/src/main.ts](../../../../sources/speakeasy-api__speakeasy/internal/defaultcodesamples/src/main.ts)<br>[cmd/docs/main.go](../../../../sources/speakeasy-api__speakeasy/cmd/docs/main.go) |
| agentRuntime | 16 | [internal/testcmd/runner_opt.go](../../../../sources/speakeasy-api__speakeasy/internal/testcmd/runner_opt.go)<br>[internal/testcmd/runner.go](../../../../sources/speakeasy-api__speakeasy/internal/testcmd/runner.go)<br>[internal/studio/sdk/models/components/workflow.go](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/models/components/workflow.go)<br>[internal/studio/sdk/internal/hooks/hooks.go](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/internal/hooks/hooks.go)<br>[internal/studio/sdk/internal/hooks/registration.go](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/internal/hooks/registration.go)<br>[internal/studio/sdk/docs/models/components/workflow.md](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/docs/models/components/workflow.md)<br>[internal/studio/sdk/.speakeasy/workflow.lock](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/.speakeasy/workflow.lock)<br>[internal/studio/sdk/.speakeasy/workflow.yaml](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/.speakeasy/workflow.yaml) |
| mcp | 2 | [cmd/mcp/deploy.go](../../../../sources/speakeasy-api__speakeasy/cmd/mcp/deploy.go)<br>[cmd/mcp/mcp.go](../../../../sources/speakeasy-api__speakeasy/cmd/mcp/mcp.go) |
| retrieval | 1 | [internal/defaultcodesamples/src/oas-normalize/index.ts](../../../../sources/speakeasy-api__speakeasy/internal/defaultcodesamples/src/oas-normalize/index.ts) |
| spec | 2 | [pkg/merge/security_schemes_are_namespaced_with_extensions_and_requirements_updated_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/security_schemes_are_namespaced_with_extensions_and_requirements_updated_test.go)<br>[integration/resources/spec.yaml](../../../../sources/speakeasy-api__speakeasy/integration/resources/spec.yaml) |
| eval | 130 | [prompts/configs_test.go](../../../../sources/speakeasy-api__speakeasy/prompts/configs_test.go)<br>[prompts/github_test.go](../../../../sources/speakeasy-api__speakeasy/prompts/github_test.go)<br>[prompts/sources_test.go](../../../../sources/speakeasy-api__speakeasy/prompts/sources_test.go)<br>[pkg/transform/cleanup_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/transform/cleanup_test.go)<br>[pkg/transform/convertSwagger_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/transform/convertSwagger_test.go)<br>[pkg/transform/filterOperations_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/transform/filterOperations_test.go)<br>[pkg/transform/format_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/transform/format_test.go)<br>[pkg/transform/jqSymbolicExecution_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/transform/jqSymbolicExecution_test.go) |
| security | 22 | [pkg/merge/conflicting_security_schemes_from_different_namespaces_coexist_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/conflicting_security_schemes_from_different_namespaces_coexist_test.go)<br>[pkg/merge/different_global_security_is_inlined_to_operations_and_cleared_globally_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/different_global_security_is_inlined_to_operations_and_cleared_globally_test.go)<br>[pkg/merge/equivalent_security_schemes_from_different_namespaces_are_deduplicated_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/equivalent_security_schemes_from_different_namespaces_are_deduplicated_test.go)<br>[pkg/merge/global_security_inlined_to_operations_when_specs_differ_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/global_security_inlined_to_operations_when_specs_differ_test.go)<br>[pkg/merge/multi_service_api_with_mixed_security_scheme_names_and_types_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/multi_service_api_with_mixed_security_scheme_names_and_types_test.go)<br>[pkg/merge/no_global_security_with_mixed_inline_security_marks_unsecured_ops_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/no_global_security_with_mixed_inline_security_marks_unsecured_ops_test.go)<br>[pkg/merge/oauth2_security_schemes_with_different_flow_types_coexist_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/oauth2_security_schemes_with_different_flow_types_coexist_test.go)<br>[pkg/merge/oauth2_security_schemes_with_different_scopes_but_same_tokenurl_are_merged_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/oauth2_security_schemes_with_different_scopes_but_same_tokenurl_are_merged_test.go) |
| ci | 73 | [internal/ci/versioninfo/versioninfo.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/versioninfo/versioninfo.go)<br>[internal/ci/versionbumps/versionBumps.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/versionbumps/versionBumps.go)<br>[internal/ci/utils/outputs.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/utils/outputs.go)<br>[internal/ci/utils/package_test.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/utils/package_test.go)<br>[internal/ci/utils/package.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/utils/package.go)<br>[internal/ci/testbridge/testbridge.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/testbridge/testbridge.go)<br>[internal/ci/telemetry/publishing.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/telemetry/publishing.go)<br>[internal/ci/telemetry/telemetry.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/telemetry/telemetry.go) |
| container | 1 | [Dockerfile](../../../../sources/speakeasy-api__speakeasy/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 44 | [README.md](../../../../sources/speakeasy-api__speakeasy/README.md)<br>[internal/studio/sdk/README.md](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/README.md)<br>[internal/studio/sdk/docs/sdks/suggest/README.md](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/docs/sdks/suggest/README.md)<br>[internal/studio/sdk/docs/sdks/sdk/README.md](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/docs/sdks/sdk/README.md)<br>[internal/studio/sdk/docs/sdks/run/README.md](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/docs/sdks/run/README.md)<br>[internal/studio/sdk/docs/sdks/health/README.md](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/docs/sdks/health/README.md)<br>[internal/studio/sdk/docs/models/operations/checkhealthresponse.md](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/docs/models/operations/checkhealthresponse.md)<br>[internal/studio/sdk/docs/models/operations/generateoverlayresponse.md](../../../../sources/speakeasy-api__speakeasy/internal/studio/sdk/docs/models/operations/generateoverlayresponse.md) |
| config | 4 | [go.mod](../../../../sources/speakeasy-api__speakeasy/go.mod)<br>[Makefile](../../../../sources/speakeasy-api__speakeasy/Makefile)<br>[internal/defaultcodesamples/package.json](../../../../sources/speakeasy-api__speakeasy/internal/defaultcodesamples/package.json)<br>[internal/defaultcodesamples/tsconfig.json](../../../../sources/speakeasy-api__speakeasy/internal/defaultcodesamples/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 130 | [prompts/configs_test.go](../../../../sources/speakeasy-api__speakeasy/prompts/configs_test.go)<br>[prompts/github_test.go](../../../../sources/speakeasy-api__speakeasy/prompts/github_test.go)<br>[prompts/sources_test.go](../../../../sources/speakeasy-api__speakeasy/prompts/sources_test.go)<br>[pkg/transform/cleanup_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/transform/cleanup_test.go)<br>[pkg/transform/convertSwagger_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/transform/convertSwagger_test.go)<br>[pkg/transform/filterOperations_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/transform/filterOperations_test.go) |
| CI workflows | 73 | [internal/ci/versioninfo/versioninfo.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/versioninfo/versioninfo.go)<br>[internal/ci/versionbumps/versionBumps.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/versionbumps/versionBumps.go)<br>[internal/ci/utils/outputs.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/utils/outputs.go)<br>[internal/ci/utils/package_test.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/utils/package_test.go)<br>[internal/ci/utils/package.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/utils/package.go)<br>[internal/ci/testbridge/testbridge.go](../../../../sources/speakeasy-api__speakeasy/internal/ci/testbridge/testbridge.go) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/speakeasy-api__speakeasy/Dockerfile) |
| Security / policy | 22 | [pkg/merge/conflicting_security_schemes_from_different_namespaces_coexist_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/conflicting_security_schemes_from_different_namespaces_coexist_test.go)<br>[pkg/merge/different_global_security_is_inlined_to_operations_and_cleared_globally_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/different_global_security_is_inlined_to_operations_and_cleared_globally_test.go)<br>[pkg/merge/equivalent_security_schemes_from_different_namespaces_are_deduplicated_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/equivalent_security_schemes_from_different_namespaces_are_deduplicated_test.go)<br>[pkg/merge/global_security_inlined_to_operations_when_specs_differ_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/global_security_inlined_to_operations_when_specs_differ_test.go)<br>[pkg/merge/multi_service_api_with_mixed_security_scheme_names_and_types_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/multi_service_api_with_mixed_security_scheme_names_and_types_test.go)<br>[pkg/merge/no_global_security_with_mixed_inline_security_marks_unsecured_ops_test.go](../../../../sources/speakeasy-api__speakeasy/pkg/merge/no_global_security_with_mixed_inline_security_marks_unsecured_ops_test.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.go`, `internal/defaultcodesamples/src/main.ts`, `cmd/docs/main.go`.
2. Trace execution through entrypoints: `main.go`, `internal/defaultcodesamples/src/main.ts`, `cmd/docs/main.go`.
3. Map agent/tool runtime through: `internal/testcmd/runner_opt.go`, `internal/testcmd/runner.go`, `internal/studio/sdk/models/components/workflow.go`.
4. Inspect retrieval/memory/indexing through: `internal/defaultcodesamples/src/oas-normalize/index.ts`.
5. Verify behavior through test/eval files: `prompts/configs_test.go`, `prompts/github_test.go`, `prompts/sources_test.go`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Build APIs your users love ❤️ with Speakeasy. ✨ Polished and type safe SDKs. 🌐 Terraform providers, MCP servers, CLIs a. 핵심 구조 신호는 JavaScript, go.mod, Dockerfile, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
