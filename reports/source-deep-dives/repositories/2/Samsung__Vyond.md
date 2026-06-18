# Samsung/Vyond Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Vyond is an open source project and the aim of the project is to develop a trusted execution environment (TEE) using WorldGuard which is HW-based security architecture.

## 요약

- 조사 단위: `sources/Samsung__Vyond` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 1,686 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh, chipyard-1.11.0/tools/axe/src/Main.cpp, chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/Vyond |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 13 |
| Forks | 3 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__Vyond](../../../../sources/Samsung__Vyond) |
| Existing report | [reports/korea-trending/repositories/Samsung__Vyond.md](../../../korea-trending/repositories/Samsung__Vyond.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 1686 |
| Max observed depth | 13 |
| Top directories | chipyard-1.11.0, docs, enclave, prebuilt, tee, worldguard |
| Top extensions | .c: 5476, .h: 3155, (none): 1606, .tests: 757, .sh: 737, .right: 694, .json: 475, .s: 356, .scala: 253, .txt: 176, .py: 144, .md: 95 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| chipyard-1.11.0 | top-level component | 1 |
| docs | documentation surface | 1 |
| enclave | top-level component | 1 |
| prebuilt | top-level component | 1 |
| tee | top-level component | 1 |
| worldguard | top-level component | 1 |


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
| entrypoints | [chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh) | entrypoints signal |
| entrypoints | [chipyard-1.11.0/tools/axe/src/Main.cpp](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/axe/src/Main.cpp) | entrypoints signal |
| entrypoints | [chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md) | entrypoints signal |
| entrypoints | [chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo32.axf](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo32.axf) | entrypoints signal |
| config | [worldguard/tests/sims/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/sims/Makefile) | config signal |
| config | [worldguard/tests/libgloss/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/libgloss/Makefile) | config signal |
| config | [worldguard/tests/fpga-baremetal/vcu118/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/fpga-baremetal/vcu118/Makefile) | config signal |
| config | [tee/sbi/opensbi/Makefile](../../../../sources/Samsung__Vyond/tee/sbi/opensbi/Makefile) | config signal |
| docs | [README.md](../../../../sources/Samsung__Vyond/README.md) | docs signal |
| docs | [worldguard/README.md](../../../../sources/Samsung__Vyond/worldguard/README.md) | docs signal |
| docs | [worldguard/tests/README.md](../../../../sources/Samsung__Vyond/worldguard/tests/README.md) | docs signal |
| docs | [worldguard/docs/Design_Issue.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design_Issue.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 89 | [chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh)<br>[chipyard-1.11.0/tools/axe/src/Main.cpp](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/axe/src/Main.cpp)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo32.axf](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo32.axf)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo64.axf](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo64.axf)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/config_override.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/config_override.sh)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/config2csv.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/config2csv.sh)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/configcheck.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/configcheck.sh) |
| agentRuntime | 6192 | [chipyard-1.11.0/tools/torture.mk](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture.mk)<br>[chipyard-1.11.0/tools/torture/.gitignore](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/.gitignore)<br>[chipyard-1.11.0/tools/torture/build.sbt](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/build.sbt)<br>[chipyard-1.11.0/tools/torture/Makefile](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/Makefile)<br>[chipyard-1.11.0/tools/torture/README](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/README)<br>[chipyard-1.11.0/tools/torture/testrun/src/main/scala/main.scala](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/testrun/src/main/scala/main.scala)<br>[chipyard-1.11.0/tools/torture/project/build.properties](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/project/build.properties)<br>[chipyard-1.11.0/tools/torture/overnight/src/main/scala/main.scala](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/overnight/src/main/scala/main.scala) |
| mcp | 0 | not obvious |
| retrieval | 198 | [chipyard-1.11.0/tools/axe/src/Graph.cpp](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/axe/src/Graph.cpp)<br>[chipyard-1.11.0/tools/axe/src/Graph.h](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/axe/src/Graph.h)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-pk/machine/unprivileged_memory.h](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-pk/machine/unprivileged_memory.h)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/riscv/vector_unit.cc](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/riscv/vector_unit.cc)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/riscv/vector_unit.h](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/riscv/vector_unit.h)<br>[chipyard-1.11.0/software/firemarshal/wlutil/busybox/libbb/xrealloc_vector.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/wlutil/busybox/libbb/xrealloc_vector.c)<br>[chipyard-1.11.0/software/firemarshal/docs/source/index.rst](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/docs/source/index.rst)<br>[chipyard-1.11.0/software/firemarshal/docs/source/Tutorials/index.rst](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/docs/source/Tutorials/index.rst) |
| spec | 7 | [worldguard/docs/Design_Issue.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design_Issue.md)<br>[worldguard/docs/Design.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design.md)<br>[tee/sbi/opensbi/docs/platform_requirements.md](../../../../sources/Samsung__Vyond/tee/sbi/opensbi/docs/platform_requirements.md)<br>[chipyard-1.11.0/vlsi/example-design.yml](../../../../sources/Samsung__Vyond/chipyard-1.11.0/vlsi/example-design.yml)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/requirements.txt](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/requirements.txt)<br>[chipyard-1.11.0/software/firemarshal/wlutil/busybox/docs/ifupdown_design.txt](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/wlutil/busybox/docs/ifupdown_design.txt)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/perf/design.txt](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/perf/design.txt) |
| eval | 3892 | [worldguard/tests/common.mk](../../../../sources/Samsung__Vyond/worldguard/tests/common.mk)<br>[worldguard/tests/README.md](../../../../sources/Samsung__Vyond/worldguard/tests/README.md)<br>[worldguard/tests/sims/.gitignore](../../../../sources/Samsung__Vyond/worldguard/tests/sims/.gitignore)<br>[worldguard/tests/sims/libgloss.mk](../../../../sources/Samsung__Vyond/worldguard/tests/sims/libgloss.mk)<br>[worldguard/tests/sims/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/sims/Makefile)<br>[worldguard/tests/sims/src/icache_main.c](../../../../sources/Samsung__Vyond/worldguard/tests/sims/src/icache_main.c)<br>[worldguard/tests/sims/src/multiple_permissions_on_cacheline_main.c](../../../../sources/Samsung__Vyond/worldguard/tests/sims/src/multiple_permissions_on_cacheline_main.c)<br>[worldguard/tests/sims/src/overwrite_stackframe_main.c](../../../../sources/Samsung__Vyond/worldguard/tests/sims/src/overwrite_stackframe_main.c) |
| security | 18 | [chipyard-1.11.0/software/firemarshal/wlutil/busybox/selinux/load_policy.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/wlutil/busybox/selinux/load_policy.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/vm/memfd_secret.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/vm/memfd_secret.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/.gitignore](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/.gitignore)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/branch_loops.S](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/branch_loops.S)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/entry_flush.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/entry_flush.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.h](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.h)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/Makefile](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/Makefile) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 263 | [README.md](../../../../sources/Samsung__Vyond/README.md)<br>[worldguard/README.md](../../../../sources/Samsung__Vyond/worldguard/README.md)<br>[worldguard/tests/README.md](../../../../sources/Samsung__Vyond/worldguard/tests/README.md)<br>[worldguard/docs/Design_Issue.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design_Issue.md)<br>[worldguard/docs/Design.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design.md)<br>[worldguard/docs/Registers.md](../../../../sources/Samsung__Vyond/worldguard/docs/Registers.md)<br>[worldguard/docs/SecurityMonitor.md](../../../../sources/Samsung__Vyond/worldguard/docs/SecurityMonitor.md)<br>[worldguard/docs/Traits.md](../../../../sources/Samsung__Vyond/worldguard/docs/Traits.md) |
| config | 413 | [worldguard/tests/sims/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/sims/Makefile)<br>[worldguard/tests/libgloss/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/libgloss/Makefile)<br>[worldguard/tests/fpga-baremetal/vcu118/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/fpga-baremetal/vcu118/Makefile)<br>[tee/sbi/opensbi/Makefile](../../../../sources/Samsung__Vyond/tee/sbi/opensbi/Makefile)<br>[tee/monitor/Cargo.lock](../../../../sources/Samsung__Vyond/tee/monitor/Cargo.lock)<br>[tee/monitor/Cargo.toml](../../../../sources/Samsung__Vyond/tee/monitor/Cargo.toml)<br>[tee/modules/semihosting/Cargo.toml](../../../../sources/Samsung__Vyond/tee/modules/semihosting/Cargo.toml)<br>[enclave/Makefile](../../../../sources/Samsung__Vyond/enclave/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3892 | [worldguard/tests/common.mk](../../../../sources/Samsung__Vyond/worldguard/tests/common.mk)<br>[worldguard/tests/README.md](../../../../sources/Samsung__Vyond/worldguard/tests/README.md)<br>[worldguard/tests/sims/.gitignore](../../../../sources/Samsung__Vyond/worldguard/tests/sims/.gitignore)<br>[worldguard/tests/sims/libgloss.mk](../../../../sources/Samsung__Vyond/worldguard/tests/sims/libgloss.mk)<br>[worldguard/tests/sims/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/sims/Makefile)<br>[worldguard/tests/sims/src/icache_main.c](../../../../sources/Samsung__Vyond/worldguard/tests/sims/src/icache_main.c) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 18 | [chipyard-1.11.0/software/firemarshal/wlutil/busybox/selinux/load_policy.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/wlutil/busybox/selinux/load_policy.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/vm/memfd_secret.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/vm/memfd_secret.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/.gitignore](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/.gitignore)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/branch_loops.S](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/branch_loops.S)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/entry_flush.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/entry_flush.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.c) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | large repository scan truncated at 15000 files |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh`, `chipyard-1.11.0/tools/axe/src/Main.cpp`, `chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md`.
2. Trace execution through entrypoints: `chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh`, `chipyard-1.11.0/tools/axe/src/Main.cpp`, `chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md`.
3. Map agent/tool runtime through: `chipyard-1.11.0/tools/torture.mk`, `chipyard-1.11.0/tools/torture/.gitignore`, `chipyard-1.11.0/tools/torture/build.sbt`.
4. Inspect retrieval/memory/indexing through: `chipyard-1.11.0/tools/axe/src/Graph.cpp`, `chipyard-1.11.0/tools/axe/src/Graph.h`, `chipyard-1.11.0/toolchains/riscv-tools/riscv-pk/machine/unprivileged_memory.h`.
5. Verify behavior through test/eval files: `worldguard/tests/common.mk`, `worldguard/tests/README.md`, `worldguard/tests/sims/.gitignore`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Vyond is an open source project and the aim of the project is to develop a trusted execution environment TEE using World. 핵심 구조 신호는 C, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
