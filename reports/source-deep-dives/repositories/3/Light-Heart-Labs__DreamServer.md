# Light-Heart-Labs/DreamServer Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Turn your PC, Mac, or Linux box into an AI server. LLM inference, chat UI, voice, agents, workflows, RAG, and image generation.

## 요약

- 조사 단위: `sources/Light-Heart-Labs__DreamServer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,144 files, 178 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=installer/src-tauri/src/main.rs, installer/src/App.tsx, installer/src/index.css이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Light-Heart-Labs/DreamServer |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Shell |
| Stars | 2079 |
| Forks | 319 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Light-Heart-Labs__DreamServer](../../../../sources/Light-Heart-Labs__DreamServer) |
| Existing report | [reports/global-trending/repositories/Light-Heart-Labs__DreamServer.md](../../../global-trending/repositories/Light-Heart-Labs__DreamServer.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1144 / 178 |
| Max observed depth | 8 |
| Top directories | .claude, .github, dream-server, installer |
| Top extensions | .sh: 257, .md: 185, .yaml: 173, .py: 137, .json: 90, .jsx: 43, .yml: 41, .bats: 32, .js: 31, (none): 30, .ps1: 24, .txt: 18 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| dream-server | source boundary | 1 |
| installer | top-level component | 1 |


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
| entrypoints | [installer/src-tauri/src/main.rs](../../../../sources/Light-Heart-Labs__DreamServer/installer/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [installer/src/App.tsx](../../../../sources/Light-Heart-Labs__DreamServer/installer/src/App.tsx) | entrypoints signal |
| entrypoints | [installer/src/index.css](../../../../sources/Light-Heart-Labs__DreamServer/installer/src/index.css) | entrypoints signal |
| entrypoints | [installer/src/main.tsx](../../../../sources/Light-Heart-Labs__DreamServer/installer/src/main.tsx) | entrypoints signal |
| container | [dream-server/docker-compose.amd.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.amd.yml) | container signal |
| container | [dream-server/docker-compose.apple.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.apple.yml) | container signal |
| container | [dream-server/docker-compose.arc.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.arc.yml) | container signal |
| container | [dream-server/docker-compose.base.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.base.yml) | container signal |
| config | [installer/package.json](../../../../sources/Light-Heart-Labs__DreamServer/installer/package.json) | config signal |
| config | [installer/tsconfig.json](../../../../sources/Light-Heart-Labs__DreamServer/installer/tsconfig.json) | config signal |
| config | [installer/src-tauri/Cargo.lock](../../../../sources/Light-Heart-Labs__DreamServer/installer/src-tauri/Cargo.lock) | config signal |
| config | [installer/src-tauri/Cargo.toml](../../../../sources/Light-Heart-Labs__DreamServer/installer/src-tauri/Cargo.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 15 | [installer/src-tauri/src/main.rs](../../../../sources/Light-Heart-Labs__DreamServer/installer/src-tauri/src/main.rs)<br>[installer/src/App.tsx](../../../../sources/Light-Heart-Labs__DreamServer/installer/src/App.tsx)<br>[installer/src/index.css](../../../../sources/Light-Heart-Labs__DreamServer/installer/src/index.css)<br>[installer/src/main.tsx](../../../../sources/Light-Heart-Labs__DreamServer/installer/src/main.tsx)<br>[dream-server/extensions/services/token-spy/main.py](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/token-spy/main.py)<br>[dream-server/extensions/services/dashboard-api/main.py](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/dashboard-api/main.py)<br>[dream-server/extensions/services/dashboard/src/App.jsx](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/dashboard/src/App.jsx)<br>[dream-server/extensions/services/dashboard/src/App.test.jsx](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/dashboard/src/App.test.jsx) |
| agentRuntime | 44 | [installer/src/hooks/useTauri.ts](../../../../sources/Light-Heart-Labs__DreamServer/installer/src/hooks/useTauri.ts)<br>[dream-server/scripts/systemd/memory-shepherd-memory.service](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/systemd/memory-shepherd-memory.service)<br>[dream-server/scripts/systemd/memory-shepherd-memory.timer](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/systemd/memory-shepherd-memory.timer)<br>[dream-server/scripts/systemd/memory-shepherd-workspace.service](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/systemd/memory-shepherd-workspace.service)<br>[dream-server/scripts/systemd/memory-shepherd-workspace.timer](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/systemd/memory-shepherd-workspace.timer)<br>[dream-server/memory-shepherd/install.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/memory-shepherd/install.sh)<br>[dream-server/memory-shepherd/memory-shepherd.conf](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/memory-shepherd/memory-shepherd.conf)<br>[dream-server/memory-shepherd/memory-shepherd.conf.example](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/memory-shepherd/memory-shepherd.conf.example) |
| mcp | 0 | not obvious |
| retrieval | 24 | [installer/index.html](../../../../sources/Light-Heart-Labs__DreamServer/installer/index.html)<br>[installer/src/index.css](../../../../sources/Light-Heart-Labs__DreamServer/installer/src/index.css)<br>[dream-server/templates/personal-knowledge-base.yaml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/templates/personal-knowledge-base.yaml)<br>[dream-server/scripts/systemd/memory-shepherd-memory.service](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/systemd/memory-shepherd-memory.service)<br>[dream-server/scripts/systemd/memory-shepherd-memory.timer](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/systemd/memory-shepherd-memory.timer)<br>[dream-server/scripts/systemd/memory-shepherd-workspace.service](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/systemd/memory-shepherd-workspace.service)<br>[dream-server/scripts/systemd/memory-shepherd-workspace.timer](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/systemd/memory-shepherd-workspace.timer)<br>[dream-server/memory-shepherd/install.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/memory-shepherd/install.sh) |
| spec | 12 | [ARCHITECTURE.md](../../../../sources/Light-Heart-Labs__DreamServer/ARCHITECTURE.md)<br>[dream-server/tests/bats-tests/requirements-phase.bats](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/bats-tests/requirements-phase.bats)<br>[dream-server/installers/windows/phases/04-requirements.ps1](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/installers/windows/phases/04-requirements.ps1)<br>[dream-server/installers/phases/04-requirements.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/installers/phases/04-requirements.sh)<br>[dream-server/extensions/services/token-spy/requirements.txt](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/token-spy/requirements.txt)<br>[dream-server/extensions/services/privacy-shield/requirements.txt](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/privacy-shield/requirements.txt)<br>[dream-server/extensions/services/dashboard-api/requirements.txt](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/dashboard-api/requirements.txt)<br>[dream-server/extensions/services/dashboard-api/tests/requirements-test.txt](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/dashboard-api/tests/requirements-test.txt) |
| eval | 286 | [dream-server/test-install.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/test-install.sh)<br>[dream-server/test-stack.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/test-stack.sh)<br>[dream-server/tests/benchmark-status-performance.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/benchmark-status-performance.sh)<br>[dream-server/tests/dashboard-load-test.py](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/dashboard-load-test.py)<br>[dream-server/tests/fleet-external-lemonade-e2e.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/fleet-external-lemonade-e2e.sh)<br>[dream-server/tests/fleet-incus-vm.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/fleet-incus-vm.sh)<br>[dream-server/tests/fleet-multi-distro.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/fleet-multi-distro.sh)<br>[dream-server/tests/integration-test.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/integration-test.sh) |
| security | 24 | [SECURITY_AUDIT.md](../../../../sources/Light-Heart-Labs__DreamServer/SECURITY_AUDIT.md)<br>[SECURITY.md](../../../../sources/Light-Heart-Labs__DreamServer/SECURITY.md)<br>[dream-server/SECURITY.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/SECURITY.md)<br>[dream-server/tests/test-bootstrap-openclaw-compose-guard.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/test-bootstrap-openclaw-compose-guard.sh)<br>[dream-server/tests/test-dream-config-secret-mask.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/test-dream-config-secret-mask.sh)<br>[dream-server/tests/test-extension-audit.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/test-extension-audit.sh)<br>[dream-server/tests/test-litellm-amd-auth-enforced.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/test-litellm-amd-auth-enforced.sh)<br>[dream-server/tests/test-network-security.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/test-network-security.sh) |
| ci | 21 | [installer/.github/workflows/build.yml](../../../../sources/Light-Heart-Labs__DreamServer/installer/.github/workflows/build.yml)<br>[dream-server/.github/workflows/lint-shell.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/.github/workflows/lint-shell.yml)<br>[.github/workflows/ai-issue-triage.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/ai-issue-triage.yml)<br>[.github/workflows/autonomous-code-scanner.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/autonomous-code-scanner.yml)<br>[.github/workflows/claude-review.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/claude-review.yml)<br>[.github/workflows/dashboard.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/dashboard.yml)<br>[.github/workflows/issue-to-pr.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/issue-to-pr.yml)<br>[.github/workflows/lint-powershell.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/lint-powershell.yml) |
| container | 80 | [dream-server/docker-compose.amd.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.amd.yml)<br>[dream-server/docker-compose.apple.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.apple.yml)<br>[dream-server/docker-compose.arc.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.arc.yml)<br>[dream-server/docker-compose.base.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.base.yml)<br>[dream-server/docker-compose.cloud.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.cloud.yml)<br>[dream-server/docker-compose.cpu.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.cpu.yml)<br>[dream-server/docker-compose.intel.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.intel.yml)<br>[dream-server/docker-compose.lemonade-external.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.lemonade-external.yml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/Light-Heart-Labs__DreamServer/CLAUDE.md) |
| docs | 149 | [README.md](../../../../sources/Light-Heart-Labs__DreamServer/README.md)<br>[dream-server/README.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/README.md)<br>[dream-server/scripts/README.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/scripts/README.md)<br>[dream-server/migrations/README.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/migrations/README.md)<br>[dream-server/memory-shepherd/README.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/memory-shepherd/README.md)<br>[dream-server/memory-shepherd/docs/WRITING-BASELINES.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/memory-shepherd/docs/WRITING-BASELINES.md)<br>[dream-server/extensions/README.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/README.md)<br>[dream-server/extensions/templates/README.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/templates/README.md) |
| config | 12 | [installer/package.json](../../../../sources/Light-Heart-Labs__DreamServer/installer/package.json)<br>[installer/tsconfig.json](../../../../sources/Light-Heart-Labs__DreamServer/installer/tsconfig.json)<br>[installer/src-tauri/Cargo.lock](../../../../sources/Light-Heart-Labs__DreamServer/installer/src-tauri/Cargo.lock)<br>[installer/src-tauri/Cargo.toml](../../../../sources/Light-Heart-Labs__DreamServer/installer/src-tauri/Cargo.toml)<br>[dream-server/Makefile](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/Makefile)<br>[dream-server/extensions/services/token-spy/requirements.txt](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/token-spy/requirements.txt)<br>[dream-server/extensions/services/privacy-shield/requirements.txt](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/privacy-shield/requirements.txt)<br>[dream-server/extensions/services/dashboard-api/requirements.txt](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/extensions/services/dashboard-api/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 286 | [dream-server/test-install.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/test-install.sh)<br>[dream-server/test-stack.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/test-stack.sh)<br>[dream-server/tests/benchmark-status-performance.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/benchmark-status-performance.sh)<br>[dream-server/tests/dashboard-load-test.py](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/dashboard-load-test.py)<br>[dream-server/tests/fleet-external-lemonade-e2e.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/fleet-external-lemonade-e2e.sh)<br>[dream-server/tests/fleet-incus-vm.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/fleet-incus-vm.sh) |
| CI workflows | 21 | [installer/.github/workflows/build.yml](../../../../sources/Light-Heart-Labs__DreamServer/installer/.github/workflows/build.yml)<br>[dream-server/.github/workflows/lint-shell.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/.github/workflows/lint-shell.yml)<br>[.github/workflows/ai-issue-triage.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/ai-issue-triage.yml)<br>[.github/workflows/autonomous-code-scanner.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/autonomous-code-scanner.yml)<br>[.github/workflows/claude-review.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/claude-review.yml)<br>[.github/workflows/dashboard.yml](../../../../sources/Light-Heart-Labs__DreamServer/.github/workflows/dashboard.yml) |
| Containers / deploy | 80 | [dream-server/docker-compose.amd.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.amd.yml)<br>[dream-server/docker-compose.apple.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.apple.yml)<br>[dream-server/docker-compose.arc.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.arc.yml)<br>[dream-server/docker-compose.base.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.base.yml)<br>[dream-server/docker-compose.cloud.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.cloud.yml)<br>[dream-server/docker-compose.cpu.yml](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/docker-compose.cpu.yml) |
| Security / policy | 24 | [SECURITY_AUDIT.md](../../../../sources/Light-Heart-Labs__DreamServer/SECURITY_AUDIT.md)<br>[SECURITY.md](../../../../sources/Light-Heart-Labs__DreamServer/SECURITY.md)<br>[dream-server/SECURITY.md](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/SECURITY.md)<br>[dream-server/tests/test-bootstrap-openclaw-compose-guard.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/test-bootstrap-openclaw-compose-guard.sh)<br>[dream-server/tests/test-dream-config-secret-mask.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/test-dream-config-secret-mask.sh)<br>[dream-server/tests/test-extension-audit.sh](../../../../sources/Light-Heart-Labs__DreamServer/dream-server/tests/test-extension-audit.sh) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/Light-Heart-Labs__DreamServer/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `installer/src-tauri/src/main.rs`, `installer/src/App.tsx`, `installer/src/index.css`.
2. Trace execution through entrypoints: `installer/src-tauri/src/main.rs`, `installer/src/App.tsx`, `installer/src/index.css`.
3. Map agent/tool runtime through: `installer/src/hooks/useTauri.ts`, `dream-server/scripts/systemd/memory-shepherd-memory.service`, `dream-server/scripts/systemd/memory-shepherd-memory.timer`.
4. Inspect retrieval/memory/indexing through: `installer/index.html`, `installer/src/index.css`, `dream-server/templates/personal-knowledge-base.yaml`.
5. Verify behavior through test/eval files: `dream-server/test-install.sh`, `dream-server/test-stack.sh`, `dream-server/tests/benchmark-status-performance.sh`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Turn your PC, Mac, or Linux box into an AI server. LLM inference, chat UI, voice, agents, workflows, RAG, and image gene. 핵심 구조 신호는 Shell, README.md, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
