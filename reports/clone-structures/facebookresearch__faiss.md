# facebookresearch/faiss 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/facebookresearch__faiss |
| remote | https://github.com/facebookresearch/faiss |
| HEAD | 20afed0 (2026-06-11) make intentional cudaGetLastError() error-clears explicit ((void)) for clang21 -- fixes S674096 (#5302) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 1058 |
| dirs | 70 |
| stack | Python |

## 구조 해석

- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Faiss`, `News`, `Introduction`, `Installing`, `How Faiss works`, `Full documentation of Faiss`, `Authors`, `Reference`, `Join the Faiss community`, `Legal`

> Faiss Faiss is a library for efficient similarity search and clustering of dense vectors. It contains algorithms that search in sets of vectors of any size, up to ones that possibly do not fit in RAM. It also contains supporting code for evaluation and parameter tuning. Faiss is written in C++ with complete wrappers for Python/numpy. Some of the most useful algorithms are implemented on the GPU. It is developed primarily at Meta's Fundamental AI Research group. News See CHANGELOG.md for detailed information about latest features. Introduction Faiss contains several methods for similarity search. It assumes that the instances are represented as vectors and are identified by an integer, and that the vectors can be compared with L2 (Euclidean) distances or dot products. Vectors that are similar to a query vector are those that have the lowest L2 distance or the highest dot product with the 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .clang-format | file |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| benchs | dir |
| c_api | dir |
| CHANGELOG.md | file |
| cmake | dir |
| CMakeLists.txt | file |
| CODE_OF_CONDUCT.md | file |
| conda | dir |
| contrib | dir |
| CONTRIBUTING.md | file |
| demos | dir |
| Doxyfile | file |
| faiss | dir |
| INSTALL.md | file |
| LICENSE | file |
| misc | dir |
| perf_tests | dir |
| pyproject-gpu.toml | file |
| pyproject.toml | file |
| README.md | file |
| tests | dir |
| THIRD_PARTY_NOTICES | file |
| tutorial | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| faiss/ | 646 |
| tests/ | 121 |
| benchs/ | 79 |
| c_api/ | 73 |
| demos/ | 35 |
| tutorial/ | 23 |
| conda/ | 19 |
| contrib/ | 19 |
| .github/ | 14 |
| (root) | 14 |
| perf_tests/ | 9 |
| cmake/ | 5 |
| misc/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 121 | preferred |
| faiss/ | 646 | large |
| faiss/gpu/ | 209 | large |
| faiss/impl/ | 157 | large |
| faiss/utils/ | 84 | large |
| benchs/ | 79 | large |
| c_api/ | 73 | large |
| faiss/gpu/utils/ | 69 | large |
| faiss/gpu/impl/ | 62 | large |
| demos/ | 35 | large |
| faiss/gpu/test/ | 32 | large |
| faiss/gpu_metal/ | 29 | large |
| faiss/utils/simd_impl/ | 23 | large |
| tutorial/ | 23 | large |
| conda/ | 19 | large |
| contrib/ | 19 | large |
| faiss/impl/fast_scan/ | 17 | large |
| c_api/gpu/ | 16 | large |
| faiss/impl/pq_code_distance/ | 15 | large |
| faiss/svs/ | 15 | large |
| .github/ | 14 | large |
| faiss/impl/scalar_quantizer/ | 14 | large |
| faiss/python/ | 14 | large |
| faiss/utils/hamming_distance/ | 14 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `faiss/cppcontrib/docker_dev/Dockerfile`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | faiss-cpu | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `benchs/README.md`
- `benchs/bench_all_ivf/README.md`
- `benchs/distributed_ondisk/README.md`
- `benchs/link_and_code/README.md`
- `contrib/README.md`
- `contrib/torch/README.md`
- `demos/README.md`
- `demos/offline_ivf/README.md`
- `demos/rocksdb_ivf/README.md`
- `faiss/docs/simd_dynamic_dispatch_migration.md`
- `faiss/docs/svs_binary_size_comparison.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `demos/offline_ivf/tests/test_iterate_input.py`
- `demos/offline_ivf/tests/test_offline_ivf.py`
- `demos/offline_ivf/tests/testing_utils.py`
- `faiss/gpu/test/CMakeLists.txt`
- `faiss/gpu/test/TestCodePacking.cpp`
- `faiss/gpu/test/TestGpuDistance.cu`
- `faiss/gpu/test/TestGpuFilterConvert.cu`
- `faiss/gpu/test/TestGpuIcmEncoder.cpp`
- `faiss/gpu/test/TestGpuIndexBinaryCagra.cu`
- `faiss/gpu/test/TestGpuIndexBinaryFlat.cpp`
- `faiss/gpu/test/TestGpuIndexCagra.cu`
- `faiss/gpu/test/TestGpuIndexFlat.cpp`
- `faiss/gpu/test/TestGpuIndexIVFFlat.cpp`
- `faiss/gpu/test/TestGpuIndexIVFPQ.cpp`
- `faiss/gpu/test/TestGpuIndexIVFScalarQuantizer.cpp`
- `faiss/gpu/test/TestGpuMemoryException.cpp`
- `faiss/gpu/test/TestGpuResidualQuantizer.cpp`
- `faiss/gpu/test/TestGpuSelect.cu`
- `faiss/gpu/test/TestUtils.cpp`
- `faiss/gpu/test/TestUtils.h`
- `faiss/gpu/test/demo_ivfpq_indexing_gpu.cpp`
- `faiss/gpu/test/test_binary_cagra.py`
- `faiss/gpu/test/test_cagra.py`
- `faiss/gpu/test/test_contrib_gpu.py`
- `faiss/gpu/test/test_cuvs.py`
- `faiss/gpu/test/test_gpu_basics.py`
- `faiss/gpu/test/test_gpu_index.py`
- `faiss/gpu/test/test_gpu_index_ivfflat.py`
- `faiss/gpu/test/test_gpu_index_ivfsq.py`
- `faiss/gpu/test/test_gpu_index_refs.py`
- `faiss/gpu/test/test_gpu_index_serialize.py`
- `faiss/gpu/test/test_index_cpu_to_gpu.py`
- `faiss/gpu/test/test_lut_dtype_binding.py`
- `faiss/gpu/test/test_multi_gpu.py`
- `faiss/gpu/test/torch_test_contrib_gpu.py`
- `faiss/gpu_metal/test/CMakeLists.txt`
- `faiss/gpu_metal/test/TestMetalIndexFlat.mm`
- `faiss/gpu_metal/test/TestMetalIndexIVFFlat.mm`
- `faiss/gpu_metal/test/test_metal_python.py`
- `tests/CMakeLists.txt`
- `tests/common_faiss_tests.py`
- `tests/external_module_test.py`
- `tests/index_io_backward_compatibility/__init__.py`
- `tests/index_io_backward_compatibility/cmake_conda_io_utils.py`
- `tests/index_io_backward_compatibility/cmake_reader.py`
- `tests/index_io_backward_compatibility/cmake_writer.py`
- `tests/index_io_backward_compatibility/conda_reader.py`
- `tests/index_io_backward_compatibility/conda_writer.py`
- `tests/test_NSG_compressed_graph.cpp`
- `tests/test_RCQ_cropping.cpp`
- `tests/test_approx_topk.cpp`
- `tests/test_autotune.py`
- `tests/test_binary_autotune.py`
- `tests/test_binary_factory.py`
- `tests/test_binary_flat.cpp`
- `tests/test_binary_hash.cpp`
- `tests/test_binary_hashindex.py`
- `tests/test_binary_io.py`
- `tests/test_binary_search_params.py`
- `tests/test_build_blocks.py`
- `tests/test_callback.cpp`
- `tests/test_callback_py.py`
- `tests/test_clone.py`
- `tests/test_clustering.py`
- `tests/test_clustering_initialization.py`
- `tests/test_common_ivf_empty_index.cpp`
- `tests/test_contrib.py`
- `tests/test_contrib_with_scipy.py`
- `tests/test_cppcontrib_sa_decode.cpp`
- `tests/test_cppcontrib_uintreader.cpp`
- `tests/test_custom_result_handler.cpp`
- `tests/test_dealloc_invlists.cpp`
- `tests/test_disable_pq_sdc_tables.cpp`
- `tests/test_distances_dispatch.cpp`
- `tests/test_distances_simd.cpp`
- `tests/test_documentation.py`
- `tests/test_extra_distances.py`
- `tests/test_factory.py`
- `tests/test_factory_tools.cpp`
- `tests/test_fast_scan.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/autoclose.yml`
- `.github/workflows/build-pip-gpu.yml`
- `.github/workflows/build-pip.yml`
- `.github/workflows/build-pull-request.yml`
- `.github/workflows/build-release.yml`
- `.github/workflows/build.yml`
- `.github/workflows/index-io-backward-compatibility.yml`
- `.github/workflows/nightly.yml`
- `.github/workflows/publish-docs.yml`
- `.github/workflows/retry_build.yml`
- `.github/workflows/update-doxygen.yml`
- `faiss/cppcontrib/docker_dev/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .cpp | 315 |
| .h | 308 |
| .py | 187 |
| .cu | 74 |
| .cuh | 65 |
| .md | 18 |
| .txt | 16 |
| .sh | 14 |
| .mm | 13 |
| .yml | 13 |
| .yaml | 5 |
| .cmake | 4 |
| .c | 3 |
| .bash | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `faiss/ 내부 책임 분리`
- `faiss/gpu/ 내부 책임 분리`
- `faiss/impl/ 내부 책임 분리`
- `faiss/utils/ 내부 책임 분리`
- `faiss/cppcontrib/docker_dev/Dockerfile 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

