# Samsung/mTower Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

mTower is Trusted Execution Environment specially designed to be used on MicroController Units (MCUs) supporting ARM TrustZone technology (e.g., Cortex-M23/33/35p). mTower operates well under restrictions typical for such environment – small RAM and ROM sizes, relatively low performance, absence of rich OSes providing variety of services available on PCs or in enterprise environments. mTower is intended for usage in IoT, embedded devices, Smart Home applications, distributed heterogeneous networks and other environments where secure processing of sensitive data is necessary.

## 요약

- 조사 단위: `sources/Samsung__mTower` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 943 files, 186 directories, depth score 103, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=Makefile, lib/Makefile, freertos/Makefile이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/mTower |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | C |
| Stars | 75 |
| Forks | 21 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__mTower](../../../../sources/Samsung__mTower) |
| Existing report | [reports/korea-trending/repositories/Samsung__mTower.md](../../../korea-trending/repositories/Samsung__mTower.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 943 / 186 |
| Max observed depth | 13 |
| Top directories | .github, apps, arch, common, configs, crypto, docs, freertos, include, lib, tee, tee_client, tools |
| Top extensions | .h: 449, .c: 323, (none): 61, .md: 22, .s: 20, .defs: 15, .png: 12, .yml: 10, .ld: 9, .txt: 8, .jpg: 4, .a: 1 |
| Source patterns | monorepo/workspace, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 37 |
| apps/test | apps workspace | 3 |
| lib | source boundary | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| arch | top-level component | 1 |
| common | top-level component | 1 |
| configs | top-level component | 1 |
| crypto | top-level component | 1 |
| freertos | top-level component | 1 |
| include | top-level component | 1 |
| tee | top-level component | 1 |
| tee_client | source boundary | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .config | make .config |
| utility | Makefile | Make.defs | make Make.defs |
| utility | Makefile | create_context | make create_context |
| utility | Makefile | gcc-unpacked | make gcc-unpacked |
| utility | Makefile | toolchain | make toolchain |
| utility | Makefile | context | make context |
| utility | Makefile | clean_context | make clean_context |
| quality | Makefile | check_context | make check_context |
| utility | Makefile | mtower_libs | make mtower_libs |
| utility | Makefile | flash | make flash |
| utility | Makefile | run | make run |
| utility | Makefile | debug | make debug |
| utility | Makefile | do_menuconfig | make do_menuconfig |
| utility | Makefile | menuconfig | make menuconfig |
| utility | Makefile | do_savedefconfig | make do_savedefconfig |
| utility | Makefile | savedefconfig | make savedefconfig |
| utility | Makefile | savedefmakedefs | make savedefmakedefs |
| utility | Makefile | subdir_clean | make subdir_clean |


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
| config | [Makefile](../../../../sources/Samsung__mTower/Makefile) | config signal |
| config | [lib/Makefile](../../../../sources/Samsung__mTower/lib/Makefile) | config signal |
| config | [freertos/Makefile](../../../../sources/Samsung__mTower/freertos/Makefile) | config signal |
| config | [crypto/Makefile](../../../../sources/Samsung__mTower/crypto/Makefile) | config signal |
| docs | [README.md](../../../../sources/Samsung__mTower/README.md) | docs signal |
| docs | [freertos/readme.txt](../../../../sources/Samsung__mTower/freertos/readme.txt) | docs signal |
| docs | [freertos/portable/MemMang/ReadMe.url](../../../../sources/Samsung__mTower/freertos/portable/MemMang/ReadMe.url) | docs signal |
| docs | [freertos/portable/GCC/RISC-V/chip_specific_extensions/readme.txt](../../../../sources/Samsung__mTower/freertos/portable/GCC/RISC-V/chip_specific_extensions/readme.txt) | docs signal |
| eval | [tee_client/public/teec_trace.h](../../../../sources/Samsung__mTower/tee_client/public/teec_trace.h) | eval signal |
| eval | [tee/lib/libutils/ext/trace.c](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/trace.c) | eval signal |
| eval | [tee/lib/libutils/ext/include/trace_levels.h](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/include/trace_levels.h) | eval signal |
| eval | [tee/lib/libutils/ext/include/trace.h](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/include/trace.h) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 9 | [tools/.gitignore](../../../../sources/Samsung__mTower/tools/.gitignore)<br>[tools/cfgdefine.c](../../../../sources/Samsung__mTower/tools/cfgdefine.c)<br>[tools/cfgdefine.h](../../../../sources/Samsung__mTower/tools/cfgdefine.h)<br>[tools/ecdsa_keygen.c](../../../../sources/Samsung__mTower/tools/ecdsa_keygen.c)<br>[tools/fwinfogen.c](../../../../sources/Samsung__mTower/tools/fwinfogen.c)<br>[tools/Makefile.host](../../../../sources/Samsung__mTower/tools/Makefile.host)<br>[tools/mkconfig.c](../../../../sources/Samsung__mTower/tools/mkconfig.c)<br>[arch/riscv32/fe310/src/freedom-metal/src/memory.c](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/freedom-metal/src/memory.c) |
| mcp | 0 | not obvious |
| retrieval | 10 | [crypto/libtomcrypt/src/mac/hmac/hmac_memory_multi.c](../../../../sources/Samsung__mTower/crypto/libtomcrypt/src/mac/hmac/hmac_memory_multi.c)<br>[crypto/libtomcrypt/src/mac/hmac/hmac_memory.c](../../../../sources/Samsung__mTower/crypto/libtomcrypt/src/mac/hmac/hmac_memory.c)<br>[crypto/libtomcrypt/src/hashes/helper/hash_memory_multi.c](../../../../sources/Samsung__mTower/crypto/libtomcrypt/src/hashes/helper/hash_memory_multi.c)<br>[crypto/libtomcrypt/src/hashes/helper/hash_memory.c](../../../../sources/Samsung__mTower/crypto/libtomcrypt/src/hashes/helper/hash_memory.c)<br>[arch/riscv32/fe310/src/freedom-metal/src/memory.c](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/freedom-metal/src/memory.c)<br>[arch/riscv32/fe310/src/freedom-metal/src/vector.S](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/freedom-metal/src/vector.S)<br>[arch/riscv32/fe310/src/freedom-metal/metal/memory.h](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/freedom-metal/metal/memory.h)<br>[arch/riscv32/bl808/src/drivers/soc/bl808/std/startup/m0/vector.S](../../../../sources/Samsung__mTower/arch/riscv32/bl808/src/drivers/soc/bl808/std/startup/m0/vector.S) |
| spec | 0 | not obvious |
| eval | 10 | [tee_client/public/teec_trace.h](../../../../sources/Samsung__mTower/tee_client/public/teec_trace.h)<br>[tee/lib/libutils/ext/trace.c](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/trace.c)<br>[tee/lib/libutils/ext/include/trace_levels.h](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/include/trace_levels.h)<br>[tee/lib/libutils/ext/include/trace.h](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/include/trace.h)<br>[docs/mtower_test_suite_description.md](../../../../sources/Samsung__mTower/docs/mtower_test_suite_description.md)<br>[arch/riscv32/fe310/src/freedom-metal/src/drivers/sifive_trace.c](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/freedom-metal/src/drivers/sifive_trace.c)<br>[arch/riscv32/fe310/src/freedom-metal/metal/drivers/sifive_trace.h](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/freedom-metal/metal/drivers/sifive_trace.h)<br>[apps/test/test_ta.h](../../../../sources/Samsung__mTower/apps/test/test_ta.h) |
| security | 2 | [docs/mtower_hw_security_exception_example.md](../../../../sources/Samsung__mTower/docs/mtower_hw_security_exception_example.md)<br>[.github/SECURITY.md](../../../../sources/Samsung__mTower/.github/SECURITY.md) |
| ci | 9 | [.github/workflows/build.yml](../../../../sources/Samsung__mTower/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Samsung__mTower/.github/workflows/codeql.yml)<br>[.github/workflows/fossology.yml](../../../../sources/Samsung__mTower/.github/workflows/fossology.yml)<br>[.github/workflows/license-finder.yml](../../../../sources/Samsung__mTower/.github/workflows/license-finder.yml)<br>[.github/workflows/linter.yml](../../../../sources/Samsung__mTower/.github/workflows/linter.yml)<br>[.github/workflows/pr-reviewer-reminder.yml](../../../../sources/Samsung__mTower/.github/workflows/pr-reviewer-reminder.yml)<br>[.github/workflows/publish.yml](../../../../sources/Samsung__mTower/.github/workflows/publish.yml)<br>[.github/workflows/scancode.yml](../../../../sources/Samsung__mTower/.github/workflows/scancode.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 38 | [README.md](../../../../sources/Samsung__mTower/README.md)<br>[freertos/readme.txt](../../../../sources/Samsung__mTower/freertos/readme.txt)<br>[freertos/portable/MemMang/ReadMe.url](../../../../sources/Samsung__mTower/freertos/portable/MemMang/ReadMe.url)<br>[freertos/portable/GCC/RISC-V/chip_specific_extensions/readme.txt](../../../../sources/Samsung__mTower/freertos/portable/GCC/RISC-V/chip_specific_extensions/readme.txt)<br>[docs/.gitignore](../../../../sources/Samsung__mTower/docs/.gitignore)<br>[docs/add-new-app.md](../../../../sources/Samsung__mTower/docs/add-new-app.md)<br>[docs/build.md](../../../../sources/Samsung__mTower/docs/build.md)<br>[docs/m2351_badge.md](../../../../sources/Samsung__mTower/docs/m2351_badge.md) |
| config | 26 | [Makefile](../../../../sources/Samsung__mTower/Makefile)<br>[lib/Makefile](../../../../sources/Samsung__mTower/lib/Makefile)<br>[freertos/Makefile](../../../../sources/Samsung__mTower/freertos/Makefile)<br>[crypto/Makefile](../../../../sources/Samsung__mTower/crypto/Makefile)<br>[configs/Makefile](../../../../sources/Samsung__mTower/configs/Makefile)<br>[common/Makefile](../../../../sources/Samsung__mTower/common/Makefile)<br>[arch/riscv32/fe310/src/Makefile](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/Makefile)<br>[arch/riscv32/fe310/src/sparkfun_redboard/Makefile](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/sparkfun_redboard/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 10 | [tee_client/public/teec_trace.h](../../../../sources/Samsung__mTower/tee_client/public/teec_trace.h)<br>[tee/lib/libutils/ext/trace.c](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/trace.c)<br>[tee/lib/libutils/ext/include/trace_levels.h](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/include/trace_levels.h)<br>[tee/lib/libutils/ext/include/trace.h](../../../../sources/Samsung__mTower/tee/lib/libutils/ext/include/trace.h)<br>[docs/mtower_test_suite_description.md](../../../../sources/Samsung__mTower/docs/mtower_test_suite_description.md)<br>[arch/riscv32/fe310/src/freedom-metal/src/drivers/sifive_trace.c](../../../../sources/Samsung__mTower/arch/riscv32/fe310/src/freedom-metal/src/drivers/sifive_trace.c) |
| CI workflows | 9 | [.github/workflows/build.yml](../../../../sources/Samsung__mTower/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Samsung__mTower/.github/workflows/codeql.yml)<br>[.github/workflows/fossology.yml](../../../../sources/Samsung__mTower/.github/workflows/fossology.yml)<br>[.github/workflows/license-finder.yml](../../../../sources/Samsung__mTower/.github/workflows/license-finder.yml)<br>[.github/workflows/linter.yml](../../../../sources/Samsung__mTower/.github/workflows/linter.yml)<br>[.github/workflows/pr-reviewer-reminder.yml](../../../../sources/Samsung__mTower/.github/workflows/pr-reviewer-reminder.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [docs/mtower_hw_security_exception_example.md](../../../../sources/Samsung__mTower/docs/mtower_hw_security_exception_example.md)<br>[.github/SECURITY.md](../../../../sources/Samsung__mTower/.github/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Makefile`, `lib/Makefile`, `freertos/Makefile`.
2. Map agent/tool runtime through: `tools/.gitignore`, `tools/cfgdefine.c`, `tools/cfgdefine.h`.
3. Inspect retrieval/memory/indexing through: `crypto/libtomcrypt/src/mac/hmac/hmac_memory_multi.c`, `crypto/libtomcrypt/src/mac/hmac/hmac_memory.c`, `crypto/libtomcrypt/src/hashes/helper/hash_memory_multi.c`.
4. Verify behavior through test/eval files: `tee_client/public/teec_trace.h`, `tee/lib/libutils/ext/trace.c`, `tee/lib/libutils/ext/include/trace_levels.h`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 mTower is Trusted Execution Environment specially designed to be used on MicroController Units MCUs supporting ARM Trust. 핵심 구조 신호는 C, Makefile, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
