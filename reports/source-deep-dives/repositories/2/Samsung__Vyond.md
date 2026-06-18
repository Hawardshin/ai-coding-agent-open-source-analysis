# Samsung/Vyond 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Vyond is an open source project and the aim of the project is to develop a trusted execution environment (TEE) using WorldGuard which is HW-based security architecture.

## 요약

- 조사 단위: `sources/Samsung__Vyond` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 15,000 files, 1,686 directories, depth score 104, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh, chipyard-1.11.0/tools/axe/src/Main.cpp, chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/Vyond |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 13 |
| Forks | 3 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__Vyond](../../../../sources/Samsung__Vyond) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__Vyond.md](../../../korea-trending/repositories/Samsung__Vyond.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 15000 / 1686 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | chipyard-1.11.0, docs, enclave, prebuilt, tee, worldguard |
| 상위 확장자 | .c: 5476, .h: 3155, (none): 1606, .tests: 757, .sh: 737, .right: 694, .json: 475, .s: 356, .scala: 253, .txt: 176, .py: 144, .md: 95 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| chipyard-1.11.0 | top-level component | 1 |
| docs | documentation surface | 1 |
| enclave | top-level component | 1 |
| prebuilt | top-level component | 1 |
| tee | top-level component | 1 |
| worldguard | top-level component | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 89 | [chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh)<br>[chipyard-1.11.0/tools/axe/src/Main.cpp](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/axe/src/Main.cpp)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo32.axf](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo32.axf)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo64.axf](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/RTOSDemo64.axf)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/config_override.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/config_override.sh)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/config2csv.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/config2csv.sh)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/configcheck.sh](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/rcutorture/bin/configcheck.sh) |
| agentRuntime | 6192 | [chipyard-1.11.0/tools/torture.mk](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture.mk)<br>[chipyard-1.11.0/tools/torture/.gitignore](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/.gitignore)<br>[chipyard-1.11.0/tools/torture/build.sbt](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/build.sbt)<br>[chipyard-1.11.0/tools/torture/Makefile](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/Makefile)<br>[chipyard-1.11.0/tools/torture/README](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/README)<br>[chipyard-1.11.0/tools/torture/testrun/src/main/scala/main.scala](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/testrun/src/main/scala/main.scala)<br>[chipyard-1.11.0/tools/torture/project/build.properties](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/project/build.properties)<br>[chipyard-1.11.0/tools/torture/overnight/src/main/scala/main.scala](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/torture/overnight/src/main/scala/main.scala) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 198 | [chipyard-1.11.0/tools/axe/src/Graph.cpp](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/axe/src/Graph.cpp)<br>[chipyard-1.11.0/tools/axe/src/Graph.h](../../../../sources/Samsung__Vyond/chipyard-1.11.0/tools/axe/src/Graph.h)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-pk/machine/unprivileged_memory.h](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-pk/machine/unprivileged_memory.h)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/riscv/vector_unit.cc](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/riscv/vector_unit.cc)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/riscv/vector_unit.h](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/riscv/vector_unit.h)<br>[chipyard-1.11.0/software/firemarshal/wlutil/busybox/libbb/xrealloc_vector.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/wlutil/busybox/libbb/xrealloc_vector.c)<br>[chipyard-1.11.0/software/firemarshal/docs/source/index.rst](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/docs/source/index.rst)<br>[chipyard-1.11.0/software/firemarshal/docs/source/Tutorials/index.rst](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/docs/source/Tutorials/index.rst) |
| spec | 7 | [worldguard/docs/Design_Issue.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design_Issue.md)<br>[worldguard/docs/Design.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design.md)<br>[tee/sbi/opensbi/docs/platform_requirements.md](../../../../sources/Samsung__Vyond/tee/sbi/opensbi/docs/platform_requirements.md)<br>[chipyard-1.11.0/vlsi/example-design.yml](../../../../sources/Samsung__Vyond/chipyard-1.11.0/vlsi/example-design.yml)<br>[chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/requirements.txt](../../../../sources/Samsung__Vyond/chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/requirements.txt)<br>[chipyard-1.11.0/software/firemarshal/wlutil/busybox/docs/ifupdown_design.txt](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/wlutil/busybox/docs/ifupdown_design.txt)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/perf/design.txt](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/perf/design.txt) |
| eval | 3892 | [worldguard/tests/common.mk](../../../../sources/Samsung__Vyond/worldguard/tests/common.mk)<br>[worldguard/tests/README.md](../../../../sources/Samsung__Vyond/worldguard/tests/README.md)<br>[worldguard/tests/sims/.gitignore](../../../../sources/Samsung__Vyond/worldguard/tests/sims/.gitignore)<br>[worldguard/tests/sims/libgloss.mk](../../../../sources/Samsung__Vyond/worldguard/tests/sims/libgloss.mk)<br>[worldguard/tests/sims/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/sims/Makefile)<br>[worldguard/tests/sims/src/icache_main.c](../../../../sources/Samsung__Vyond/worldguard/tests/sims/src/icache_main.c)<br>[worldguard/tests/sims/src/multiple_permissions_on_cacheline_main.c](../../../../sources/Samsung__Vyond/worldguard/tests/sims/src/multiple_permissions_on_cacheline_main.c)<br>[worldguard/tests/sims/src/overwrite_stackframe_main.c](../../../../sources/Samsung__Vyond/worldguard/tests/sims/src/overwrite_stackframe_main.c) |
| security | 18 | [chipyard-1.11.0/software/firemarshal/wlutil/busybox/selinux/load_policy.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/wlutil/busybox/selinux/load_policy.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/vm/memfd_secret.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/vm/memfd_secret.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/.gitignore](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/.gitignore)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/branch_loops.S](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/branch_loops.S)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/entry_flush.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/entry_flush.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.h](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.h)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/Makefile](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/Makefile) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 263 | [README.md](../../../../sources/Samsung__Vyond/README.md)<br>[worldguard/README.md](../../../../sources/Samsung__Vyond/worldguard/README.md)<br>[worldguard/tests/README.md](../../../../sources/Samsung__Vyond/worldguard/tests/README.md)<br>[worldguard/docs/Design_Issue.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design_Issue.md)<br>[worldguard/docs/Design.md](../../../../sources/Samsung__Vyond/worldguard/docs/Design.md)<br>[worldguard/docs/Registers.md](../../../../sources/Samsung__Vyond/worldguard/docs/Registers.md)<br>[worldguard/docs/SecurityMonitor.md](../../../../sources/Samsung__Vyond/worldguard/docs/SecurityMonitor.md)<br>[worldguard/docs/Traits.md](../../../../sources/Samsung__Vyond/worldguard/docs/Traits.md) |
| config | 413 | [worldguard/tests/sims/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/sims/Makefile)<br>[worldguard/tests/libgloss/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/libgloss/Makefile)<br>[worldguard/tests/fpga-baremetal/vcu118/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/fpga-baremetal/vcu118/Makefile)<br>[tee/sbi/opensbi/Makefile](../../../../sources/Samsung__Vyond/tee/sbi/opensbi/Makefile)<br>[tee/monitor/Cargo.lock](../../../../sources/Samsung__Vyond/tee/monitor/Cargo.lock)<br>[tee/monitor/Cargo.toml](../../../../sources/Samsung__Vyond/tee/monitor/Cargo.toml)<br>[tee/modules/semihosting/Cargo.toml](../../../../sources/Samsung__Vyond/tee/modules/semihosting/Cargo.toml)<br>[enclave/Makefile](../../../../sources/Samsung__Vyond/enclave/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3892 | [worldguard/tests/common.mk](../../../../sources/Samsung__Vyond/worldguard/tests/common.mk)<br>[worldguard/tests/README.md](../../../../sources/Samsung__Vyond/worldguard/tests/README.md)<br>[worldguard/tests/sims/.gitignore](../../../../sources/Samsung__Vyond/worldguard/tests/sims/.gitignore)<br>[worldguard/tests/sims/libgloss.mk](../../../../sources/Samsung__Vyond/worldguard/tests/sims/libgloss.mk)<br>[worldguard/tests/sims/Makefile](../../../../sources/Samsung__Vyond/worldguard/tests/sims/Makefile)<br>[worldguard/tests/sims/src/icache_main.c](../../../../sources/Samsung__Vyond/worldguard/tests/sims/src/icache_main.c) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 18 | [chipyard-1.11.0/software/firemarshal/wlutil/busybox/selinux/load_policy.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/wlutil/busybox/selinux/load_policy.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/vm/memfd_secret.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/vm/memfd_secret.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/.gitignore](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/.gitignore)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/branch_loops.S](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/branch_loops.S)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/entry_flush.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/entry_flush.c)<br>[chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.c](../../../../sources/Samsung__Vyond/chipyard-1.11.0/software/firemarshal/boards/default/linux/tools/testing/selftests/powerpc/security/flush_utils.c) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 큰 레포라 15000개 파일에서 스캔이 잘림 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh`, `chipyard-1.11.0/tools/axe/src/Main.cpp`, `chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md`.
2. entrypoint를 따라 실행 흐름 확인: `chipyard-1.11.0/tools/install-circt/bin/download-release-or-nightly-circt.sh`, `chipyard-1.11.0/tools/axe/src/Main.cpp`, `chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md`.
3. agent/tool runtime 매핑: `chipyard-1.11.0/tools/torture.mk`, `chipyard-1.11.0/tools/torture/.gitignore`, `chipyard-1.11.0/tools/torture/build.sbt`.
4. retrieval/memory/indexing 확인: `chipyard-1.11.0/tools/axe/src/Graph.cpp`, `chipyard-1.11.0/tools/axe/src/Graph.h`, `chipyard-1.11.0/toolchains/riscv-tools/riscv-pk/machine/unprivileged_memory.h`.
5. test/eval 파일로 동작 검증: `worldguard/tests/common.mk`, `worldguard/tests/README.md`, `worldguard/tests/sims/.gitignore`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Vyond is an open source project and the aim of the project is to develop a trusted execution environment TEE using World. 핵심 구조 신호는 C, README.md, LICENSE, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
