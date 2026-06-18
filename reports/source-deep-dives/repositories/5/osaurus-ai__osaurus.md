# osaurus-ai/osaurus 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Own your AI. The native macOS harness for AI agents -- any model, persistent memory, autonomous execution, cryptographic identity. Built in Swift. Fully offline. Open source.

## 요약

- 조사 단위: `sources/osaurus-ai__osaurus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,632 files, 239 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=Packages/OsaurusCore/Services/MCP/MCPCaptureCapabilityPolicy.swift, Packages/OsaurusCore/Services/MCP/MCPChildSpawnLimiter.swift, Packages/OsaurusCore/Services/MCP/MCPLocalProviderDiagnostics.swift이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | osaurus-ai/osaurus |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Swift |
| Stars | 5927 |
| Forks | 335 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/osaurus-ai__osaurus](../../../../sources/osaurus-ai__osaurus) |
| 기존 보고서 | [reports/global-trending/repositories/osaurus-ai__osaurus.md](../../../global-trending/repositories/osaurus-ai__osaurus.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1632 / 239 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .cursor, .github, App, assets, docs, osaurus.xcworkspace, Packages, reports, results, sandbox, scripts |
| 상위 확장자 | .swift: 1215, .json: 148, .md: 89, .png: 68, .sh: 29, .py: 20, .yml: 12, .txt: 9, (none): 8, .svg: 6, .h: 4, .resolved: 3 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| Packages/OsaurusCore | Packages workspace | 115 |
| docs | documentation surface | 40 |
| Packages/OsaurusEvals | Packages workspace | 24 |
| Packages/OsaurusPlugins | Packages workspace | 6 |
| Packages/OsaurusPluginTestKit | Packages workspace | 3 |
| .github | ci surface | 1 |
| App | top-level component | 1 |
| assets | top-level component | 1 |
| osaurus.xcworkspace | top-level component | 1 |
| Packages | source boundary | 1 |
| Packages/OsaurusRepository | Packages workspace | 1 |
| reports | top-level component | 1 |
| results | top-level component | 1 |
| sandbox | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | cli | make cli |
| utility | Makefile | app | make app |
| utility | Makefile | install-cli | make install-cli |
| serve-dev | Makefile | serve | make serve |
| utility | Makefile | status | make status |
| test | Makefile | test | make test |
| test | Makefile | ci-test | make ci-test |
| utility | Makefile | bench-setup | make bench-setup |
| utility | Makefile | bench-ingest | make bench-ingest |
| utility | Makefile | bench-ingest-chunks | make bench-ingest-chunks |
| utility | Makefile | bench-run | make bench-run |
| utility | Makefile | bench | make bench |
| utility | Makefile | evals | make evals |
| utility | Makefile | evals-verbose | make evals-verbose |
| utility | Makefile | evals-report | make evals-report |
| utility | Makefile | evals-all | make evals-all |
| utility | Makefile | evals-all-verbose | make evals-all-verbose |
| utility | Makefile | evals-all-report | make evals-all-report |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [Packages/OsaurusCore/Services/MCP/MCPCaptureCapabilityPolicy.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPCaptureCapabilityPolicy.swift) | mcp signal |
| mcp | [Packages/OsaurusCore/Services/MCP/MCPChildSpawnLimiter.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPChildSpawnLimiter.swift) | mcp signal |
| mcp | [Packages/OsaurusCore/Services/MCP/MCPLocalProviderDiagnostics.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPLocalProviderDiagnostics.swift) | mcp signal |
| mcp | [Packages/OsaurusCore/Services/MCP/MCPProviderHealthSnapshotStore.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPProviderHealthSnapshotStore.swift) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/osaurus-ai__osaurus/AGENTS.md) | agentRuntime signal |
| agentRuntime | [sandbox/Dockerfile](../../../../sources/osaurus-ai__osaurus/sandbox/Dockerfile) | agentRuntime signal |
| agentRuntime | [results/tool_stream_chunks.jsonl](../../../../sources/osaurus-ai__osaurus/results/tool_stream_chunks.jsonl) | agentRuntime signal |
| agentRuntime | [results/tool_stream_headers.txt](../../../../sources/osaurus-ai__osaurus/results/tool_stream_headers.txt) | agentRuntime signal |
| config | [Makefile](../../../../sources/osaurus-ai__osaurus/Makefile) | config signal |
| config | [scripts/benchmark/requirements-bench.txt](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/requirements-bench.txt) | config signal |
| ci | [.github/workflows/build-and-release.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/build-and-release.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 222 | [AGENTS.md](../../../../sources/osaurus-ai__osaurus/AGENTS.md)<br>[sandbox/Dockerfile](../../../../sources/osaurus-ai__osaurus/sandbox/Dockerfile)<br>[results/tool_stream_chunks.jsonl](../../../../sources/osaurus-ai__osaurus/results/tool_stream_chunks.jsonl)<br>[results/tool_stream_headers.txt](../../../../sources/osaurus-ai__osaurus/results/tool_stream_headers.txt)<br>[results/tool_stream_raw.txt](../../../../sources/osaurus-ai__osaurus/results/tool_stream_raw.txt)<br>[results/tool_stream_request.json](../../../../sources/osaurus-ai__osaurus/results/tool_stream_request.json)<br>[Packages/OsaurusEvals/Suites/PrefixHash/tool-order-invariant.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/PrefixHash/tool-order-invariant.json)<br>[Packages/OsaurusEvals/Suites/CapabilitySearch/skill-abstain.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/CapabilitySearch/skill-abstain.json) |
| mcp | 17 | [Packages/OsaurusCore/Services/MCP/MCPCaptureCapabilityPolicy.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPCaptureCapabilityPolicy.swift)<br>[Packages/OsaurusCore/Services/MCP/MCPChildSpawnLimiter.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPChildSpawnLimiter.swift)<br>[Packages/OsaurusCore/Services/MCP/MCPLocalProviderDiagnostics.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPLocalProviderDiagnostics.swift)<br>[Packages/OsaurusCore/Services/MCP/MCPProviderHealthSnapshotStore.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPProviderHealthSnapshotStore.swift)<br>[Packages/OsaurusCore/Services/MCP/MCPProviderKeychain.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPProviderKeychain.swift)<br>[Packages/OsaurusCore/Services/MCP/MCPProviderProbeService.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPProviderProbeService.swift)<br>[Packages/OsaurusCore/Services/MCP/MCPServerManager.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/MCPServerManager.swift)<br>[Packages/OsaurusCore/Services/MCP/Stdio/MCPStdioHostTransport.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Services/MCP/Stdio/MCPStdioHostTransport.swift) |
| retrieval | 24 | [scripts/benchmark/ingest_locomo.py](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/ingest_locomo.py)<br>[Packages/OsaurusCore/Views/Memory/MemoryComponents.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Views/Memory/MemoryComponents.swift)<br>[Packages/OsaurusCore/Views/Memory/MemoryDiagnosticsViews.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Views/Memory/MemoryDiagnosticsViews.swift)<br>[Packages/OsaurusCore/Views/Memory/MemoryView.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Views/Memory/MemoryView.swift)<br>[Packages/OsaurusCore/Tests/Memory/DistillationCoordinatorTests.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Tests/Memory/DistillationCoordinatorTests.swift)<br>[Packages/OsaurusCore/Tests/Memory/MemorySearchServiceTests.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Tests/Memory/MemorySearchServiceTests.swift)<br>[Packages/OsaurusCore/Tests/Memory/MemoryServiceBackfillTests.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Tests/Memory/MemoryServiceBackfillTests.swift)<br>[Packages/OsaurusCore/Tests/Memory/MemoryTests.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/Tests/Memory/MemoryTests.swift) |
| spec | 5 | [scripts/benchmark/requirements-bench.txt](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/requirements-bench.txt)<br>[Packages/OsaurusEvals/Suites/AgentLoopFrontier/implement-from-spec.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/AgentLoopFrontier/implement-from-spec.json)<br>[docs/GEMMA4_CHECKPOINT_MEMORY_SAFETY_SPEC_2026_06_11.md](../../../../sources/osaurus-ai__osaurus/docs/GEMMA4_CHECKPOINT_MEMORY_SAFETY_SPEC_2026_06_11.md)<br>[docs/MODEL_IDLE_RESIDENCY_SPEC.md](../../../../sources/osaurus-ai__osaurus/docs/MODEL_IDLE_RESIDENCY_SPEC.md)<br>[docs/MULTIMODAL_PLUGIN_ENGINE_SPEC.md](../../../../sources/osaurus-ai__osaurus/docs/MULTIMODAL_PLUGIN_ENGINE_SPEC.md) |
| eval | 430 | [scripts/live-proof/test-classify-runtime-proof-summary.py](../../../../sources/osaurus-ai__osaurus/scripts/live-proof/test-classify-runtime-proof-summary.py)<br>[scripts/benchmark/benchmark_models.py](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/benchmark_models.py)<br>[scripts/benchmark/easylocomo.patch](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/easylocomo.patch)<br>[scripts/benchmark/ingest_locomo.py](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/ingest_locomo.py)<br>[scripts/benchmark/locomo_utils.py](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/locomo_utils.py)<br>[scripts/benchmark/requirements-bench.txt](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/requirements-bench.txt)<br>[scripts/benchmark/run_bench.sh](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/run_bench.sh)<br>[Packages/OsaurusRepository/Tests/OsaurusRepositoryTests/PluginInstallManagerTests.swift](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusRepository/Tests/OsaurusRepositoryTests/PluginInstallManagerTests.swift) |
| security | 70 | [scripts/live-proof/post1268-objective-completion-audit.md](../../../../sources/osaurus-ai__osaurus/scripts/live-proof/post1268-objective-completion-audit.md)<br>[sandbox/Dockerfile](../../../../sources/osaurus-ai__osaurus/sandbox/Dockerfile)<br>[Packages/OsaurusEvals/Suites/SandboxFrontier/artifact-from-sandbox.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/SandboxFrontier/artifact-from-sandbox.json)<br>[Packages/OsaurusEvals/Suites/SandboxFrontier/host-secret-refusal.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/SandboxFrontier/host-secret-refusal.json)<br>[Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-edit.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-edit.json)<br>[Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-read.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-read.json)<br>[Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-search.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-search.json)<br>[Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-write.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-write.json) |
| ci | 6 | [.github/workflows/build-and-release.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/build-and-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/ci.yml)<br>[.github/workflows/deploy-appcast.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/deploy-appcast.yml)<br>[.github/workflows/label-merged.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/label-merged.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/release-drafter.yml)<br>[.github/workflows/sandbox-image.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/sandbox-image.yml) |
| container | 1 | [sandbox/Dockerfile](../../../../sources/osaurus-ai__osaurus/sandbox/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/osaurus-ai__osaurus/AGENTS.md) |
| docs | 83 | [README.md](../../../../sources/osaurus-ai__osaurus/README.md)<br>[Packages/OsaurusPluginTestKit/README.md](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusPluginTestKit/README.md)<br>[Packages/OsaurusPlugins/StatsPack/README.md](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusPlugins/StatsPack/README.md)<br>[Packages/OsaurusEvals/README.md](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/README.md)<br>[Packages/OsaurusEvals/Suites/SandboxFrontier/README.md](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/SandboxFrontier/README.md)<br>[Packages/OsaurusCore/SQLCipher/README.md](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/SQLCipher/README.md)<br>[Packages/OsaurusCore/PrivacyFilter/Vendor/PrivacyFilterKit/README-vendoring.md](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusCore/PrivacyFilter/Vendor/PrivacyFilterKit/README-vendoring.md)<br>[docs/ACCESSIBILITY.md](../../../../sources/osaurus-ai__osaurus/docs/ACCESSIBILITY.md) |
| config | 2 | [Makefile](../../../../sources/osaurus-ai__osaurus/Makefile)<br>[scripts/benchmark/requirements-bench.txt](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/requirements-bench.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 430 | [scripts/live-proof/test-classify-runtime-proof-summary.py](../../../../sources/osaurus-ai__osaurus/scripts/live-proof/test-classify-runtime-proof-summary.py)<br>[scripts/benchmark/benchmark_models.py](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/benchmark_models.py)<br>[scripts/benchmark/easylocomo.patch](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/easylocomo.patch)<br>[scripts/benchmark/ingest_locomo.py](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/ingest_locomo.py)<br>[scripts/benchmark/locomo_utils.py](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/locomo_utils.py)<br>[scripts/benchmark/requirements-bench.txt](../../../../sources/osaurus-ai__osaurus/scripts/benchmark/requirements-bench.txt) |
| CI workflow | 6 | [.github/workflows/build-and-release.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/build-and-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/ci.yml)<br>[.github/workflows/deploy-appcast.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/deploy-appcast.yml)<br>[.github/workflows/label-merged.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/label-merged.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/release-drafter.yml)<br>[.github/workflows/sandbox-image.yml](../../../../sources/osaurus-ai__osaurus/.github/workflows/sandbox-image.yml) |
| 컨테이너/배포 | 1 | [sandbox/Dockerfile](../../../../sources/osaurus-ai__osaurus/sandbox/Dockerfile) |
| 보안/정책 | 70 | [scripts/live-proof/post1268-objective-completion-audit.md](../../../../sources/osaurus-ai__osaurus/scripts/live-proof/post1268-objective-completion-audit.md)<br>[sandbox/Dockerfile](../../../../sources/osaurus-ai__osaurus/sandbox/Dockerfile)<br>[Packages/OsaurusEvals/Suites/SandboxFrontier/artifact-from-sandbox.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/SandboxFrontier/artifact-from-sandbox.json)<br>[Packages/OsaurusEvals/Suites/SandboxFrontier/host-secret-refusal.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/SandboxFrontier/host-secret-refusal.json)<br>[Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-edit.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-edit.json)<br>[Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-read.json](../../../../sources/osaurus-ai__osaurus/Packages/OsaurusEvals/Suites/AgentLoopFrontier/audit-file-read.json) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/osaurus-ai__osaurus/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `Packages/OsaurusCore/Services/MCP/MCPCaptureCapabilityPolicy.swift`, `Packages/OsaurusCore/Services/MCP/MCPChildSpawnLimiter.swift`, `Packages/OsaurusCore/Services/MCP/MCPLocalProviderDiagnostics.swift`.
2. agent/tool runtime 매핑: `AGENTS.md`, `sandbox/Dockerfile`, `results/tool_stream_chunks.jsonl`.
3. retrieval/memory/indexing 확인: `scripts/benchmark/ingest_locomo.py`, `Packages/OsaurusCore/Views/Memory/MemoryComponents.swift`, `Packages/OsaurusCore/Views/Memory/MemoryDiagnosticsViews.swift`.
4. test/eval 파일로 동작 검증: `scripts/live-proof/test-classify-runtime-proof-summary.py`, `scripts/benchmark/benchmark_models.py`, `scripts/benchmark/easylocomo.patch`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Own your AI. The native macOS harness for AI agents any model, persistent memory, autonomous execution, cryptographic id. 핵심 구조 신호는 Swift, Makefile, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
