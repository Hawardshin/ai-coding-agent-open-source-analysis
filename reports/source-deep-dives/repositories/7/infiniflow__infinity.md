# infiniflow/infinity 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

The AI-native database built for LLM applications, providing incredibly fast hybrid search of dense vector, sparse vector, tensor (multi-vector), and full-text.

## 요약

- 조사 단위: `sources/infiniflow__infinity` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,038 files, 386 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/generate_embedding_parquet.py, tools/generate_index_scan.py, tools/generate_wiki_embedding_plus.py이고, 의존성 단서는 pydantic, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | infiniflow/infinity |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | C++ |
| Stars | 4571 |
| Forks | 426 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/infiniflow__infinity](../../../../sources/infiniflow__infinity) |
| 기존 보고서 | [reports/global-trending/repositories/infiniflow__infinity.md](../../../global-trending/repositories/infiniflow__infinity.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4038 / 386 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, .hooks, benchmark, client, cmake, conf, docs, example, go, gui, ports, python, resource, scripts, src, test, third_party, thrift, tools |
| 상위 확장자 | .cpp: 1139, .cppm: 817, .h: 563, .py: 270, .c: 231, .slt: 166, .toml: 91, .s: 74, .asm: 58, .tsx: 58, .hpp: 55, .go: 49 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 15 |
| src | source boundary | 7 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| client | source boundary | 1 |
| cmake | top-level component | 1 |
| conf | top-level component | 1 |
| example | top-level component | 1 |
| go | top-level component | 1 |
| gui | top-level component | 1 |
| ports | top-level component | 1 |
| python | top-level component | 1 |
| resource | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| third_party | top-level component | 1 |
| thrift | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | qdrant |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tools/generate_embedding_parquet.py](../../../../sources/infiniflow__infinity/tools/generate_embedding_parquet.py) | retrieval signal |
| retrieval | [tools/generate_index_scan.py](../../../../sources/infiniflow__infinity/tools/generate_index_scan.py) | retrieval signal |
| retrieval | [tools/generate_wiki_embedding_plus.py](../../../../sources/infiniflow__infinity/tools/generate_wiki_embedding_plus.py) | retrieval signal |
| retrieval | [tools/generate_wiki_embedding.py](../../../../sources/infiniflow__infinity/tools/generate_wiki_embedding.py) | retrieval signal |
| entrypoints | [src/bin/compilation_config.cppm.in](../../../../sources/infiniflow__infinity/src/bin/compilation_config.cppm.in) | entrypoints signal |
| entrypoints | [src/bin/infinity_core.cppm](../../../../sources/infiniflow__infinity/src/bin/infinity_core.cppm) | entrypoints signal |
| entrypoints | [src/bin/infinity_main.cpp](../../../../sources/infiniflow__infinity/src/bin/infinity_main.cpp) | entrypoints signal |
| entrypoints | [src/bin/infinity.cppm](../../../../sources/infiniflow__infinity/src/bin/infinity.cppm) | entrypoints signal |
| docs | [README.md](../../../../sources/infiniflow__infinity/README.md) | docs signal |
| docs | [tools/README.md](../../../../sources/infiniflow__infinity/tools/README.md) | docs signal |
| docs | [third_party/zsv/README.md](../../../../sources/infiniflow__infinity/third_party/zsv/README.md) | docs signal |
| docs | [third_party/xor_singleheader/README.md](../../../../sources/infiniflow__infinity/third_party/xor_singleheader/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [src/bin/compilation_config.cppm.in](../../../../sources/infiniflow__infinity/src/bin/compilation_config.cppm.in)<br>[src/bin/infinity_core.cppm](../../../../sources/infiniflow__infinity/src/bin/infinity_core.cppm)<br>[src/bin/infinity_main.cpp](../../../../sources/infiniflow__infinity/src/bin/infinity_main.cpp)<br>[src/bin/infinity.cppm](../../../../sources/infiniflow__infinity/src/bin/infinity.cppm) |
| agentRuntime | 595 | [AGENTS.md](../../../../sources/infiniflow__infinity/AGENTS.md)<br>[tools/clear_s3_bucket.py](../../../../sources/infiniflow__infinity/tools/clear_s3_bucket.py)<br>[tools/gdb.py](../../../../sources/infiniflow__infinity/tools/gdb.py)<br>[tools/generate_aggregate.py](../../../../sources/infiniflow__infinity/tools/generate_aggregate.py)<br>[tools/generate_big_point_query_test_fastroughfilter.py](../../../../sources/infiniflow__infinity/tools/generate_big_point_query_test_fastroughfilter.py)<br>[tools/generate_big_sparse.py](../../../../sources/infiniflow__infinity/tools/generate_big_sparse.py)<br>[tools/generate_big.py](../../../../sources/infiniflow__infinity/tools/generate_big.py)<br>[tools/generate_bvecs.py](../../../../sources/infiniflow__infinity/tools/generate_bvecs.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 391 | [tools/generate_embedding_parquet.py](../../../../sources/infiniflow__infinity/tools/generate_embedding_parquet.py)<br>[tools/generate_index_scan.py](../../../../sources/infiniflow__infinity/tools/generate_index_scan.py)<br>[tools/generate_wiki_embedding_plus.py](../../../../sources/infiniflow__infinity/tools/generate_wiki_embedding_plus.py)<br>[tools/generate_wiki_embedding.py](../../../../sources/infiniflow__infinity/tools/generate_wiki_embedding.py)<br>[third_party/zsv/src/vector_delim.c](../../../../sources/infiniflow__infinity/third_party/zsv/src/vector_delim.c)<br>[third_party/pgm/include/pgm/pgm_index_dynamic.hpp](../../../../sources/infiniflow__infinity/third_party/pgm/include/pgm/pgm_index_dynamic.hpp)<br>[third_party/pgm/include/pgm/pgm_index_variants.hpp](../../../../sources/infiniflow__infinity/third_party/pgm/include/pgm/pgm_index_variants.hpp)<br>[third_party/pgm/include/pgm/pgm_index.hpp](../../../../sources/infiniflow__infinity/third_party/pgm/include/pgm/pgm_index.hpp) |
| spec | 0 | 명확하지 않음 |
| eval | 904 | [run_snapshot_stress_test.py](../../../../sources/infiniflow__infinity/run_snapshot_stress_test.py)<br>[tools/generate_big_point_query_test_fastroughfilter.py](../../../../sources/infiniflow__infinity/tools/generate_big_point_query_test_fastroughfilter.py)<br>[tools/generate_emvb_test_data_2.py](../../../../sources/infiniflow__infinity/tools/generate_emvb_test_data_2.py)<br>[tools/generate_emvb_test_data.py](../../../../sources/infiniflow__infinity/tools/generate_emvb_test_data.py)<br>[tools/generate_test_parquet.py](../../../../sources/infiniflow__infinity/tools/generate_test_parquet.py)<br>[tools/run_benchmark.py](../../../../sources/infiniflow__infinity/tools/run_benchmark.py)<br>[tools/run_cluster_test.py](../../../../sources/infiniflow__infinity/tools/run_cluster_test.py)<br>[tools/run_parallel_test_continuous.py](../../../../sources/infiniflow__infinity/tools/run_parallel_test_continuous.py) |
| security | 2 | [gui/lib/auth.ts](../../../../sources/infiniflow__infinity/gui/lib/auth.ts)<br>`gui/app/api/auth/[...nextauth]/route.ts` |
| ci | 5 | [.github/workflows/release.yml](../../../../sources/infiniflow__infinity/.github/workflows/release.yml)<br>[.github/workflows/slow_tests.yml](../../../../sources/infiniflow__infinity/.github/workflows/slow_tests.yml)<br>[.github/workflows/tests.yml](../../../../sources/infiniflow__infinity/.github/workflows/tests.yml)<br>[.github/workflows/x64-arm64-libstdc++.modules.json](../../../../sources/infiniflow__infinity/.github/workflows/x64-arm64-libstdc++.modules.json)<br>[.github/workflows/x64-x64-libstdc++.modules.json](../../../../sources/infiniflow__infinity/.github/workflows/x64-x64-libstdc++.modules.json) |
| container | 5 | [scripts/Dockerfile_infinity](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity)<br>[scripts/Dockerfile_infinity_builder_opencloudos](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_opencloudos)<br>[scripts/Dockerfile_infinity_builder_ubuntu22](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_ubuntu22)<br>[scripts/Dockerfile_infinity_builder_ubuntu22_arm64](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_ubuntu22_arm64)<br>[scripts/Dockerfile_infinity_opencloudos](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_opencloudos) |
| instruction | 2 | [AGENTS.md](../../../../sources/infiniflow__infinity/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/infiniflow__infinity/.github/copilot-instructions.md) |
| docs | 41 | [README.md](../../../../sources/infiniflow__infinity/README.md)<br>[tools/README.md](../../../../sources/infiniflow__infinity/tools/README.md)<br>[third_party/zsv/README.md](../../../../sources/infiniflow__infinity/third_party/zsv/README.md)<br>[third_party/xor_singleheader/README.md](../../../../sources/infiniflow__infinity/third_party/xor_singleheader/README.md)<br>[third_party/mlas/README.md](../../../../sources/infiniflow__infinity/third_party/mlas/README.md)<br>[third_party/minio-cpp/README.md](../../../../sources/infiniflow__infinity/third_party/minio-cpp/README.md)<br>[third_party/eigen-3.4.0/README.md](../../../../sources/infiniflow__infinity/third_party/eigen-3.4.0/README.md)<br>[third_party/curlpp/Readme.md](../../../../sources/infiniflow__infinity/third_party/curlpp/Readme.md) |
| config | 5 | [pyproject.toml](../../../../sources/infiniflow__infinity/pyproject.toml)<br>[uv.lock](../../../../sources/infiniflow__infinity/uv.lock)<br>[gui/package.json](../../../../sources/infiniflow__infinity/gui/package.json)<br>[gui/tsconfig.json](../../../../sources/infiniflow__infinity/gui/tsconfig.json)<br>[go/go.mod](../../../../sources/infiniflow__infinity/go/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 904 | [run_snapshot_stress_test.py](../../../../sources/infiniflow__infinity/run_snapshot_stress_test.py)<br>[tools/generate_big_point_query_test_fastroughfilter.py](../../../../sources/infiniflow__infinity/tools/generate_big_point_query_test_fastroughfilter.py)<br>[tools/generate_emvb_test_data_2.py](../../../../sources/infiniflow__infinity/tools/generate_emvb_test_data_2.py)<br>[tools/generate_emvb_test_data.py](../../../../sources/infiniflow__infinity/tools/generate_emvb_test_data.py)<br>[tools/generate_test_parquet.py](../../../../sources/infiniflow__infinity/tools/generate_test_parquet.py)<br>[tools/run_benchmark.py](../../../../sources/infiniflow__infinity/tools/run_benchmark.py) |
| CI workflow | 5 | [.github/workflows/release.yml](../../../../sources/infiniflow__infinity/.github/workflows/release.yml)<br>[.github/workflows/slow_tests.yml](../../../../sources/infiniflow__infinity/.github/workflows/slow_tests.yml)<br>[.github/workflows/tests.yml](../../../../sources/infiniflow__infinity/.github/workflows/tests.yml)<br>[.github/workflows/x64-arm64-libstdc++.modules.json](../../../../sources/infiniflow__infinity/.github/workflows/x64-arm64-libstdc++.modules.json)<br>[.github/workflows/x64-x64-libstdc++.modules.json](../../../../sources/infiniflow__infinity/.github/workflows/x64-x64-libstdc++.modules.json) |
| 컨테이너/배포 | 5 | [scripts/Dockerfile_infinity](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity)<br>[scripts/Dockerfile_infinity_builder_opencloudos](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_opencloudos)<br>[scripts/Dockerfile_infinity_builder_ubuntu22](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_ubuntu22)<br>[scripts/Dockerfile_infinity_builder_ubuntu22_arm64](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_builder_ubuntu22_arm64)<br>[scripts/Dockerfile_infinity_opencloudos](../../../../sources/infiniflow__infinity/scripts/Dockerfile_infinity_opencloudos) |
| 보안/정책 | 2 | [gui/lib/auth.ts](../../../../sources/infiniflow__infinity/gui/lib/auth.ts)<br>`gui/app/api/auth/[...nextauth]/route.ts` |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/infiniflow__infinity/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/infiniflow__infinity/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/generate_embedding_parquet.py`, `tools/generate_index_scan.py`, `tools/generate_wiki_embedding_plus.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/bin/compilation_config.cppm.in`, `src/bin/infinity_core.cppm`, `src/bin/infinity_main.cpp`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/clear_s3_bucket.py`, `tools/gdb.py`.
4. retrieval/memory/indexing 확인: `tools/generate_embedding_parquet.py`, `tools/generate_index_scan.py`, `tools/generate_wiki_embedding_plus.py`.
5. test/eval 파일로 동작 검증: `run_snapshot_stress_test.py`, `tools/generate_big_point_query_test_fastroughfilter.py`, `tools/generate_emvb_test_data_2.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 The AI native database built for LLM applications, providing incredibly fast hybrid search of dense vector, sparse vecto. 핵심 구조 신호는 C++, pyproject.toml, README.md, AGENTS.md, LICENSE, pydantic이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
