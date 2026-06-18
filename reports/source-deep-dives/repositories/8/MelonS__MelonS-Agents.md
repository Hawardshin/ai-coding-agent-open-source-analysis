# MelonS/MelonS-Agents 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

An agent that builds, plays, and verifies its own game ? a colony-sim prototype gated by 15-scenario input-level repro tests + isolated-grader rubric verdicts ? plus production media skills: music-video (60s 9:16 shorts, beat-aligned, genre-aware) and Korean job-board digest. agentskills.io-spec compliant. v0.4.0.

## 요약

- 조사 단위: `sources/MelonS__MelonS-Agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,380 files, 510 directories, depth score 103, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json, skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json, skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MelonS/MelonS-Agents |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | C# |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MelonS__MelonS-Agents](../../../../sources/MelonS__MelonS-Agents) |
| 기존 보고서 | [reports/korea-trending/repositories/MelonS__MelonS-Agents.md](../../../korea-trending/repositories/MelonS__MelonS-Agents.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5380 / 510 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .claude, .claude-plugin, .github, agents, assets, config, docs, outputs, records, scripts, site, skills |
| 상위 확장자 | .meta: 1723, .cs: 678, .png: 468, (none): 339, .bin: 337, .md: 283, .json: 269, .dll: 253, .mvfrm: 226, .sh: 142, .asset: 95, .py: 77 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| config | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json) | config signal |
| config | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json) | config signal |
| config | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json) | config signal |
| config | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.wind/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.wind/package.json) | config signal |
| ci | [.github/workflows/main-protection.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/main-protection.yml) | ci signal |
| ci | [.github/workflows/pages.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/pages.yml) | ci signal |
| eval | [skills/music-video/tests/genre-aware-smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/genre-aware-smoke.sh) | eval support |
| eval | [skills/music-video/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/smoke.sh) | eval support |
| instruction | [CLAUDE.md](../../../../sources/MelonS__MelonS-Agents/CLAUDE.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 4884 | [skills/README.md](../../../../sources/MelonS__MelonS-Agents/skills/README.md)<br>[skills/product-cf/SKILL.md](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/SKILL.md)<br>[skills/product-cf/scripts/cylinder_turntable.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/cylinder_turntable.py)<br>[skills/product-cf/scripts/depth_estimate.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/depth_estimate.py)<br>[skills/product-cf/scripts/depth_parallax.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/depth_parallax.py)<br>[skills/product-cf/scripts/ltx_i2v.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/ltx_i2v.py)<br>[skills/product-cf/scripts/product-hero.sh](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/product-hero.sh)<br>[skills/product-cf/scripts/shade_normals.py](../../../../sources/MelonS__MelonS-Agents/skills/product-cf/scripts/shade_normals.py) |
| mcp | 1 | [config/mcp.json](../../../../sources/MelonS__MelonS-Agents/config/mcp.json) |
| retrieval | 23 | [skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png)<br>[skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png.meta)<br>[skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png)<br>[skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png.meta)<br>[skills/game-prototype/unity-project/Assets/Sprites/_pre_kenney_backup/stone_chunk.png](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_pre_kenney_backup/stone_chunk.png)<br>[skills/game-prototype/unity-project/Assets/Sprites/_pre_kenney_backup/stone_chunk.png.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_pre_kenney_backup/stone_chunk.png.meta)<br>[skills/game-prototype/unity-project/Assets/Resources/scatter/stone_chunk_small.png](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Resources/scatter/stone_chunk_small.png)<br>[skills/game-prototype/unity-project/Assets/Resources/scatter/stone_chunk_small.png.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Resources/scatter/stone_chunk_small.png.meta) |
| spec | 16 | [skills/game-prototype/docs/artv2-style-spec.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/artv2-style-spec.md)<br>[skills/game-prototype/docs/design-immersion-2026-06-11.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/design-immersion-2026-06-11.md)<br>[skills/game-prototype/docs/design-improvement-backlog.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/design-improvement-backlog.md)<br>[skills/game-prototype/docs/ROADMAP_40H.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/ROADMAP_40H.md)<br>[skills/game-prototype/docs/spec-needs-mood-balance.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/spec-needs-mood-balance.md)<br>[skills/game-prototype/docs/spec-vanilla-gap.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/spec-vanilla-gap.md)<br>[skills/game-prototype/docs/spec-work-priority.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/spec-work-priority.md)<br>[skills/game-dev-agent/ARCHITECTURE.md](../../../../sources/MelonS__MelonS-Agents/skills/game-dev-agent/ARCHITECTURE.md) |
| eval | 384 | [skills/music-video/tests/genre-aware-smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/genre-aware-smoke.sh)<br>[skills/music-video/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/smoke.sh)<br>[skills/job-hunt/tests/edge-cases.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/edge-cases.sh)<br>[skills/job-hunt/tests/run-all.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/run-all.sh)<br>[skills/job-hunt/tests/schema-validation.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/schema-validation.sh)<br>[skills/job-hunt/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/smoke.sh)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/Tests.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/Tests.meta)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/Tests/Editor.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/Tests/Editor.meta) |
| security | 34 | [skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/Mono.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/Mono.Security.dll)<br>[skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/System.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/System.Security.dll)<br>[skills/game-prototype-2048/builds/verify/G2048_Data/Managed/Mono.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/builds/verify/G2048_Data/Managed/Mono.Security.dll)<br>[skills/game-prototype-2048/builds/verify/G2048_Data/Managed/System.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/builds/verify/G2048_Data/Managed/System.Security.dll)<br>[skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py)<br>[skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py.meta)<br>[skills/game-prototype/docs/audit-genre-fidelity-2026-05-29.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/audit-genre-fidelity-2026-05-29.md)<br>[skills/game-prototype/docs/ui-audit.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/docs/ui-audit.md) |
| ci | 2 | [.github/workflows/main-protection.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/main-protection.yml)<br>[.github/workflows/pages.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/pages.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/MelonS__MelonS-Agents/CLAUDE.md) |
| docs | 418 | [README.ko.md](../../../../sources/MelonS__MelonS-Agents/README.ko.md)<br>[README.md](../../../../sources/MelonS__MelonS-Agents/README.md)<br>[skills/README.md](../../../../sources/MelonS__MelonS-Agents/skills/README.md)<br>[skills/job-hunt/sources/README.md](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/sources/README.md)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md.meta)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md.meta) |
| config | 38 | [skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.wind/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.wind/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.vr/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.vr/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.video/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.video/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.vehicles/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.vehicles/package.json)<br>[skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.unitywebrequestwww/package.json](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.unitywebrequestwww/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 384 | [skills/music-video/tests/genre-aware-smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/genre-aware-smoke.sh)<br>[skills/music-video/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/music-video/tests/smoke.sh)<br>[skills/job-hunt/tests/edge-cases.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/edge-cases.sh)<br>[skills/job-hunt/tests/run-all.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/run-all.sh)<br>[skills/job-hunt/tests/schema-validation.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/schema-validation.sh)<br>[skills/job-hunt/tests/smoke.sh](../../../../sources/MelonS__MelonS-Agents/skills/job-hunt/tests/smoke.sh) |
| CI workflow | 2 | [.github/workflows/main-protection.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/main-protection.yml)<br>[.github/workflows/pages.yml](../../../../sources/MelonS__MelonS-Agents/.github/workflows/pages.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 34 | [skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/Mono.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/Mono.Security.dll)<br>[skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/System.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/unity-project/Library/Bee/artifacts/WinPlayerBuildProgram/ManagedStripped/System.Security.dll)<br>[skills/game-prototype-2048/builds/verify/G2048_Data/Managed/Mono.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/builds/verify/G2048_Data/Managed/Mono.Security.dll)<br>[skills/game-prototype-2048/builds/verify/G2048_Data/Managed/System.Security.dll](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype-2048/builds/verify/G2048_Data/Managed/System.Security.dll)<br>[skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py)<br>[skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py.meta](../../../../sources/MelonS__MelonS-Agents/skills/game-prototype/unity-project/Assets/Sprites/_gen_fix_audit.py.meta) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/MelonS__MelonS-Agents/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/package.json`, `skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/package.json`, `skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.modules.xr/package.json`.
2. agent/tool runtime 매핑: `skills/README.md`, `skills/product-cf/SKILL.md`, `skills/product-cf/scripts/cylinder_turntable.py`.
3. retrieval/memory/indexing 확인: `skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png`, `skills/game-prototype/unity-project/Assets/Sprites/stone_chunk_small.png.meta`, `skills/game-prototype/unity-project/Assets/Sprites/stone_chunk.png`.
4. test/eval 파일로 동작 검증: `skills/music-video/tests/genre-aware-smoke.sh`, `skills/music-video/tests/smoke.sh`, `skills/job-hunt/tests/edge-cases.sh`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 An agent that builds, plays, and verifies its own game ? a colony sim prototype gated by 15 scenario input level repro t. 핵심 구조 신호는 C#, README.md, CLAUDE.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
