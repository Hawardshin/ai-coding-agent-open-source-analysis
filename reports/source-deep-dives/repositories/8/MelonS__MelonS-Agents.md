# MelonS/MelonS-Agents Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

An agent that builds, plays, and verifies its own game ? a colony-sim prototype gated by 15-scenario input-level repro tests + isolated-grader rubric verdicts ? plus production media skills: music-video (60s 9:16 shorts, beat-aligned, genre-aware) and Korean job-board digest. agentskills.io-spec compliant. v0.4.0.

## 요약

- 조사 단위: `sources/MelonS__MelonS-Agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,380 files, 510 directories, depth score 109, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json, skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json, skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MelonS/MelonS-Agents |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | C# |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/MelonS__MelonS-Agents](../../../../sources/MelonS__MelonS-Agents) |
| Existing report | [reports/korea-trending/repositories/MelonS__MelonS-Agents.md](../../../korea-trending/repositories/MelonS__MelonS-Agents.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5380 / 510 |
| Max observed depth | 12 |
| Top directories | .claude, .claude-plugin, .github, agents, assets, config, docs, outputs, records, scripts, site, skills |
| Top extensions | .meta: 1723, .cs: 678, .png: 468, (none): 339, .bin: 337, .md: 283, .json: 269, .dll: 253, .mvfrm: 226, .sh: 142, .asset: 95, .py: 77 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 26 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| config | top-level component | 1 |
| outputs | top-level component | 1 |
| records | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| skills | top-level component | 1 |


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
| config | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json) | config signal |
| config | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json) | config signal |
| config | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json) | config signal |
| config | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.wind/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.wind/package.json) | config signal |
| ci | [.github/workflows/main-protection.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/main-protection.yml) | ci signal |
| ci | [.github/workflows/pages.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/pages.yml) | ci signal |
| eval | [skills/music-video/tests/genre-aware-smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/genre-aware-smoke.sh) | eval support |
| eval | [skills/music-video/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/smoke.sh) | eval support |
| instruction | [CLAUDE.md](../../../../sources/MelonS__MelonS-Agents/CLAUDE.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4884 | [skills/README.md](../../../../sources/MelonS__MelonS-Agents/skills/README.md)<br>[skills/product-cf/SKILL.md](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/SKILL.md)<br>[skills/product-cf/scripts/cylinder_turntable.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/cylinder_turntable.py)<br>[skills/product-cf/scripts/depth_estimate.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/depth_estimate.py)<br>[skills/product-cf/scripts/depth_parallax.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/depth_parallax.py)<br>[skills/product-cf/scripts/ltx_i2v.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/ltx_i2v.py)<br>[skills/product-cf/scripts/product-hero.sh](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/product-hero.sh)<br>[skills/product-cf/scripts/shade_normals.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/shade_normals.py) |
| mcp | 1 | [config/mcp.json](../../../../sources/MelonS__MelonS-Agents/config/mcp.json) |
| retrieval | 23 | [skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png)<br>[skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png.meta)<br>[skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png)<br>[skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png.meta)<br>[skills/game-prototype/unity-project/Assets/Sprites/_pre_kenney_backup/stone_chunk.png](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_pre_kenney_backup/stone_chunk.png)<br>[skills/game-prototype/unity-project/Assets/Sprites/_pre_kenney_backup/stone_chunk.png.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_pre_kenney_backup/stone_chunk.png.meta)<br>[skills/game-prototype/unity-project/Assets/Resources/scatter/stone_chunk_small.png](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Resources/scatter/stone_chunk_small.png)<br>[skills/game-prototype/unity-project/Assets/Resources/scatter/stone_chunk_small.png.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Resources/scatter/stone_chunk_small.png.meta) |
| spec | 16 | [skills/game-prototype/docs/artv2-style-spec.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/artv2-style-spec.md)<br>[skills/game-prototype/docs/design-immersion-2026-06-11.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/design-immersion-2026-06-11.md)<br>[skills/game-prototype/docs/design-improvement-backlog.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/design-improvement-backlog.md)<br>[skills/game-prototype/docs/ROADMAP_40H.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/ROADMAP_40H.md)<br>[skills/game-prototype/docs/spec-needs-mood-balance.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/spec-needs-mood-balance.md)<br>[skills/game-prototype/docs/spec-vanilla-gap.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/spec-vanilla-gap.md)<br>[skills/game-prototype/docs/spec-work-priority.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/spec-work-priority.md)<br>[skills/game-dev-agent/ARCHITECTURE.md](../../../../sources/MelonS__MelonS-Agents/skills/game-dev-agent/ARCHITECTURE.md) |
| eval | 384 | [skills/music-video/tests/genre-aware-smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/genre-aware-smoke.sh)<br>[skills/music-video/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/smoke.sh)<br>[skills/job-hunt/tests/edge-cases.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/edge-cases.sh)<br>[skills/job-hunt/tests/run-all.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/run-all.sh)<br>[skills/job-hunt/tests/schema-validation.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/schema-validation.sh)<br>[skills/job-hunt/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/smoke.sh)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/Tests.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/Tests.meta)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/Tests/Editor.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/Tests/Editor.meta) |
| security | 34 | [skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/Mono.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/Mono.Security.dll)<br>[skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/System.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/System.Security.dll)<br>[skills/game-prototype-2048/builds/verify/G2048_Data/Managed/Mono.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/builds/verify/G2048_Data/Managed/Mono.Security.dll)<br>[skills/game-prototype-2048/builds/verify/G2048_Data/Managed/System.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/builds/verify/G2048_Data/Managed/System.Security.dll)<br>[skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py)<br>[skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py.meta)<br>[skills/game-prototype/docs/audit-genre-fidelity-2026-05-29.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/audit-genre-fidelity-2026-05-29.md)<br>[skills/game-prototype/docs/ui-audit.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/ui-audit.md) |
| ci | 2 | [.github/workflows/main-protection.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/main-protection.yml)<br>[.github/workflows/pages.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/pages.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/MelonS__MelonS-Agents/CLAUDE.md) |
| docs | 418 | [README.ko.md](../../../../sources/MelonS__MelonS-Agents/README.ko.md)<br>[README.md](../../../../sources/MelonS__MelonS-Agents/README.md)<br>[skills/README.md](../../../../sources/MelonS__MelonS-Agents/skills/README.md)<br>[skills/job-hunt/sources/README.md](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/sources/README.md)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md.meta)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md.meta) |
| config | 38 | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.wind/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.wind/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.vr/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.vr/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.video/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.video/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.vehicles/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.vehicles/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.unitywebrequestwww/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.unitywebrequestwww/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 384 | [skills/music-video/tests/genre-aware-smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/genre-aware-smoke.sh)<br>[skills/music-video/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/smoke.sh)<br>[skills/job-hunt/tests/edge-cases.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/edge-cases.sh)<br>[skills/job-hunt/tests/run-all.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/run-all.sh)<br>[skills/job-hunt/tests/schema-validation.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/schema-validation.sh)<br>[skills/job-hunt/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/smoke.sh) |
| CI workflows | 2 | [.github/workflows/main-protection.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/main-protection.yml)<br>[.github/workflows/pages.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/pages.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 34 | [skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/Mono.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/Mono.Security.dll)<br>[skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/System.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/System.Security.dll)<br>[skills/game-prototype-2048/builds/verify/G2048_Data/Managed/Mono.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/builds/verify/G2048_Data/Managed/Mono.Security.dll)<br>[skills/game-prototype-2048/builds/verify/G2048_Data/Managed/System.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/builds/verify/G2048_Data/Managed/System.Security.dll)<br>[skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py)<br>[skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py.meta) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/MelonS__MelonS-Agents/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json`, `skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json`, `skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json`.
2. Map agent/tool runtime through: `skills/README.md`, `skills/product-cf/SKILL.md`, `skills/product-cf/scripts/cylinder_turntable.py`.
3. Inspect retrieval/memory/indexing through: `skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png`, `skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png.meta`, `skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png`.
4. Verify behavior through test/eval files: `skills/music-video/tests/genre-aware-smoke.sh`, `skills/music-video/tests/smoke.sh`, `skills/job-hunt/tests/edge-cases.sh`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 An agent that builds, plays, and verifies its own game ? a colony sim prototype gated by 15 scenario input level repro t. 핵심 구조 신호는 C#, README.md, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
