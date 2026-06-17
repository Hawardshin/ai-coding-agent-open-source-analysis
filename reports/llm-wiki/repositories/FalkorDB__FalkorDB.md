# FalkorDB/FalkorDB 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/FalkorDB__FalkorDB |
| remote | https://github.com/FalkorDB/FalkorDB |
| HEAD | bfa6833 (2026-06-17) Fix typo in memory usage metrics (#2135) |
| branch | master |
| groups | llm-wiki-100 |
| files | 6846 |
| dirs | 422 |
| stack | Python, Rust |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `UNIQUE FEATURES`, `Key Features`, `DOCUMENTATION`, `Community and Support`, `GET STARTED`, `Step 1`, `Step 2`, `MotoGP League Example`, `Connect to FalkorDB`, `Create the 'MotoGP' graph`, `Query which riders represents Yamaha?`, `Prints: "Valentino Rossi"`, `Query how many riders represent team Ducati ?`, `Prints: 1`, `START BUILDING`, `Compiling`, `Running tests`, `Building in a docker`

> <div align="center" <img width="100" height="100" alt="FalkorDB Logo Square B" src="https //github.com/user attachments/assets/ec67e5e3 a060 405d b229 1fe2badcf8ad" / </div <div align="center" <h1 FalkorDB</h1 <h2 Ultra fast, Multi tenant Graph Database</h2 <h3 Powering Generative AI, Agent Memory, Cloud Security, and Fraud Detection</h3 <a href="https //trendshift.io/repositories/14787" target=" blank" rel="noopener noreferrer" <img src="https //trendshift.io/api/badge/repositories/14787" alt="FalkorDB%2FFalkorDB Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </div <div align="center" <a href="https //app.falkordb.cloud/signup" <img src="https //img.shields.io/badge/Try%20Free FalkorDB%20Cloud FF8101?labelColor=FDE900&style=for the badge" alt="Try Free" / </a <br <a href="https //discord.com/invite/TJ4SaPTptf" rel="nofollow" <img src="https //img.shields.io/b

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .codecov.yml | file |
| .coderabbit.yaml | file |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .spellcheck.yml | file |
| assets | dir |
| build | dir |
| build.sh | file |
| Cargo.lock | file |
| Cargo.toml | file |
| CMakeLists.txt | file |
| code_of_conduct.md | file |
| CONTRIBUTING.md | file |
| demo | dir |
| deps | dir |
| LICENSE.txt | file |
| Makefile | file |
| README.md | file |
| SECURITY.md | file |
| src | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| deps/ | 5672 |
| src/ | 673 |
| tests/ | 441 |
| demo/ | 26 |
| .github/ | 18 |
| (root) | 15 |
| assets/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 673 | preferred |
| tests/ | 441 | preferred |
| deps/ | 5672 | large |
| deps/GraphBLAS/ | 5447 | large |
| deps/GraphBLAS/FactoryKernels/ | 2207 | large |
| deps/GraphBLAS/Source/ | 1364 | large |
| deps/GraphBLAS/GraphBLAS/ | 672 | large |
| deps/GraphBLAS/Test/ | 511 | large |
| tests/tck/ | 226 | large |
| deps/libcypher-parser/ | 225 | large |
| tests/tck/features/ | 221 | large |
| deps/GraphBLAS/PreJIT/ | 188 | large |
| deps/libcypher-parser/lib/ | 185 | large |
| src/execution_plan/ | 135 | large |
| tests/flow/ | 130 | large |
| deps/GraphBLAS/cpu_features/ | 102 | large |
| deps/GraphBLAS/Doc/ | 100 | large |
| src/execution_plan/ops/ | 89 | large |
| src/serializers/ | 78 | large |
| deps/GraphBLAS/CUDA/ | 76 | large |
| deps/GraphBLAS/zstd/ | 65 | large |
| src/util/ | 65 | large |
| src/arithmetic/ | 60 | large |
| src/graph/ | 55 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `demo/imdb/requirements.txt`
- `demo/social/requirements.txt`
- `deps/GraphBLAS/cpu_features/.github/workflows/Dockerfile`
- `deps/GraphBLAS/cpu_features/bazel/ci/docker/Dockerfile`
- `deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile`
- `deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile`
- `tests/requirements.txt`

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |      "deps/FalkorDB-core-rs",  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `demo/README.md`
- `deps/GraphBLAS/CONTRIBUTING.md`
- `deps/GraphBLAS/CUDA/README.txt`
- `deps/GraphBLAS/Demo/README.txt`
- `deps/GraphBLAS/Doc/ChangeLog`
- `deps/GraphBLAS/Doc/GraphBLAS_API_C_v2.1.0.pdf`
- `deps/GraphBLAS/Doc/GraphBLAS_API_version.tex`
- `deps/GraphBLAS/Doc/GraphBLAS_UserGuide.bib`
- `deps/GraphBLAS/Doc/GraphBLAS_UserGuide.pdf`
- `deps/GraphBLAS/Doc/GraphBLAS_UserGuide.tex`
- `deps/GraphBLAS/Doc/GraphBLAS_version.tex`
- `deps/GraphBLAS/Doc/Makefile`
- `deps/GraphBLAS/Doc/README_Doc.txt`
- `deps/GraphBLAS/Doc/UserGuide/GrB_abstract.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_acknowledgements.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_colon.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_concepts.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_context.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_examples.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_BinaryOp.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Context.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Descriptor.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Global.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_IndexBinaryOp.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_IndexUnaryOp.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Matrix.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Monoid.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Scalar.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Semiring.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Serialize.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Type.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_UnaryOp.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_Vector.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_enum.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_get_set_integers.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_init.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_installing.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_interfaces.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_intro.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_iso.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_iterator.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_jit.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_mask.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_matlab_performance.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_objects.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_objects_BinaryOp.tex`
- `deps/GraphBLAS/Doc/UserGuide/GrB_objects_Container.tex`
- ... 30 more

### 에이전트 지침 후보

- `deps/GraphBLAS/Source/memory/GB_memcpy.c`

### 스펙/템플릿/명령/스킬 후보

- `src/commands/cmd_bulk_insert.c`
- `src/commands/cmd_bulk_insert.h`
- `src/commands/cmd_config.c`
- `src/commands/cmd_constraint.c`
- `src/commands/cmd_context.c`
- `src/commands/cmd_context.h`
- `src/commands/cmd_copy.c`
- `src/commands/cmd_debug.c`
- `src/commands/cmd_delete.c`
- `src/commands/cmd_dispatcher.c`
- `src/commands/cmd_effect.c`
- `src/commands/cmd_explain.c`
- `src/commands/cmd_info.c`
- `src/commands/cmd_list.c`
- `src/commands/cmd_memory.c`
- `src/commands/cmd_memory.h`
- `src/commands/cmd_query.c`
- `src/commands/cmd_restore.c`
- `src/commands/cmd_slowlog.c`
- `src/commands/cmd_udf.c`
- `src/commands/commands.c`
- `src/commands/commands.h`
- `src/commands/execution_ctx.c`
- `src/commands/execution_ctx.h`
- `src/commands/index_operations.c`
- `src/commands/index_operations.h`
- `src/commands/udf/cmd_udf_delete.c`
- `src/commands/udf/cmd_udf_flush.c`
- `src/commands/udf/cmd_udf_list.c`
- `src/commands/udf/cmd_udf_load.c`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `deps/GraphBLAS/GraphBLAS/test/Contents.m`
- `deps/GraphBLAS/GraphBLAS/test/README.md`
- `deps/GraphBLAS/GraphBLAS/test/gb_contains.m`
- `deps/GraphBLAS/GraphBLAS/test/gb_octave.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest0.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest00.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest1.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest10.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest100.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest101.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest102.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest103.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest104.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest105.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest106.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest107.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest108.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest109.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest11.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest110.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest111.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest112.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest113.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest114.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest115.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest116.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest117.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest118.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest119.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest12.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest120.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest121.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest122.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest123.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest124.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest125.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest126.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest127.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest128.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest13.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest14.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest15.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest16.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest17.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest18.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest19.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest2.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest20.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest21.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest22.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest23.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest24.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest25.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest26.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest27.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest28.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest29.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest3.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest30.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest31.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest32.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest33.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest34.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest35.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest36.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest37.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest38.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest39.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest4.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest40.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest41.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest42.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest43.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest44.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest45.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest46.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest47.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest48.m`
- `deps/GraphBLAS/GraphBLAS/test/gbtest49.m`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/batch-backport.yml`
- `.github/workflows/benchmark.yml`
- `.github/workflows/browser-tests-trigger.yml`
- `.github/workflows/build-toolchain.yml`
- `.github/workflows/build.yml`
- `.github/workflows/cleanup-rc-images.yml`
- `.github/workflows/codeql-analysis.yml`
- `.github/workflows/coverage.yml`
- `.github/workflows/detect-toolchain.yml`
- `.github/workflows/release-image.yml`
- `.github/workflows/release-ramp.yml`
- `.github/workflows/sanitize.yml`
- `.github/workflows/spellcheck.yml`
- `.github/workflows/submodule-update.yml`
- `deps/GraphBLAS/cpu_features/.github/workflows/Dockerfile`
- `deps/GraphBLAS/cpu_features/bazel/ci/docker/Dockerfile`
- `deps/GraphBLAS/cpu_features/cmake/ci/docker/amd64/Dockerfile`
- `deps/GraphBLAS/cpu_features/cmake/ci/docker/toolchain/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .c | 4555 |
| .m | 822 |
| .h | 546 |
| .feature | 220 |
| .py | 148 |
| .tex | 76 |
| .yml | 51 |
| .txt | 44 |
| .cpp | 29 |
| .md | 23 |
| .gitignore | 21 |
| .cmake | 20 |
| .cuh | 19 |
| .in | 17 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `deps/ 내부 책임 분리`
- `deps/GraphBLAS/ 내부 책임 분리`
- `deps/GraphBLAS/FactoryKernels/ 내부 책임 분리`
- `src/commands/cmd_bulk_insert.c 스펙/명령 의미`
- `src/commands/cmd_bulk_insert.h 스펙/명령 의미`
- `src/commands/cmd_config.c 스펙/명령 의미`
- `src/commands/cmd_constraint.c 스펙/명령 의미`
- `src/commands/cmd_context.c 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `demo/imdb/requirements.txt 실행 스크립트와 패키지 경계`
- `demo/social/requirements.txt 실행 스크립트와 패키지 경계`
- `deps/GraphBLAS/cpu_features/.github/workflows/Dockerfile 실행 스크립트와 패키지 경계`
- `deps/GraphBLAS/cpu_features/bazel/ci/docker/Dockerfile 실행 스크립트와 패키지 경계`

