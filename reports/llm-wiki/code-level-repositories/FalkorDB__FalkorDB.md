# FalkorDB/FalkorDB 코드 레벨 분석

생성일: 2026-06-17T23:31:58.650Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | C focused implementation (45) |
| stars | 4597 |
| language | C |
| tags | rag, knowledge-base |
| files/code/source | 6792/160/22 |
| tests/ci | 120/18 |
| local path | sources/FalkorDB__FalkorDB |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 8 | 0 | .github/workflows/benchmark.yml:169 - name: Upload results |
| Parsing/OCR/document extraction | doc-only | 5 | 0 | deps/GraphBLAS/CONTRIBUTING.md:11 Sign and date it the PDF, and email it to me at |
| Chunking/splitting | doc-only | 3 | 0 | tests/common.sh:175 _sanitizer_check "$logdir" "memcpy-param-overlap" "memory errors" \|\| E=1 |
| Embedding/vector index | doc-only | 22 | 0 | tests/flow/index_utils.py:69 return _create_typed_index(graph, "VECTOR", "NODE", label, *properties, options=options, sync=sync) |
| Retrieval/search/rerank | code | 30 | 1 | demo/social/social_queries.py:421 description='Retrieve all nodes with person label', |
| Wiki/graph/entity model | code | 73 | 4 | demo/client/client.py:21 def __init__(self, relation, *args): |
| Memory/update lifecycle | code | 139 | 4 | build.sh:26 SAN="" # Sanitizer type (address/memory/leak/thread) |
| Provenance/citation/evidence | doc-only | 2 | 0 | .github/workflows/build-toolchain.yml:90 provenance: false |
| Evaluation/observability | code | 24 | 1 | build.sh:64 # Benchmark options |
| Agent/MCP/tool surface | doc-only | 2 | 0 | tests/benchmarks/run_benchmarks.py:142 headers={"User-Agent": "FalkorDB Benchmarking Tool"}) |

## 의존성 신호

- Graph/KG store: FalkorDB, falkordb-bulk-loader, neo4j
- Persistence/database: redis

## 주요 파일 후보

### Ingestion/source intake

- `.github/workflows/benchmark.yml`
- `.github/workflows/build.yml`
- `.github/workflows/coverage.yml`
- `.github/workflows/release-image.yml`
- `.github/workflows/release-ramp.yml`
- `.github/workflows/sanitize.yml`
- `deps/GraphBLAS/lz4/README_lz4.md`
- `deps/GraphBLAS/Doc/future/FUTURE.txt`

### Parsing/OCR/document extraction

- `deps/GraphBLAS/CONTRIBUTING.md`
- `deps/GraphBLAS/README.md`
- `deps/GraphBLAS/.github/pull_request_template.md`
- `deps/GraphBLAS/Doc/README_Doc.txt`
- `deps/GraphBLAS/Doc/future/FUTURE.txt`

### Chunking/splitting

- `tests/common.sh`
- `tests/flow/test_bolt.py`
- `tests/flow/test_graph_deletion.py`

### Embedding/vector index

- `tests/flow/index_utils.py`
- `tests/flow/test_effects.py`
- `tests/flow/test_encode_decode.py`
- `tests/flow/test_foreach.py`
- `tests/flow/test_index_create.py`
- `tests/flow/test_index_delete.py`
- `tests/flow/test_persistency.py`
- `tests/flow/test_procedures.py`
- `tests/flow/test_udf.py`
- `tests/flow/test_undo_log.py`
- `tests/flow/test_vecsim.py`
- `README.md`
- ... 6 more

### Retrieval/search/rerank

- `demo/social/social_queries.py`
- `.github/workflows/batch-backport.yml`
- `.github/workflows/benchmark.yml`
- `.github/workflows/build.yml`
- `.github/workflows/codeql-analysis.yml`
- `.github/workflows/coverage.yml`
- `.github/workflows/release-image.yml`
- `.github/workflows/sanitize.yml`
- `tests/flow/test_access_del_entity.py`
- `tests/flow/test_edge_index_scans.py`
- `tests/flow/test_edge_index_updates.py`
- `tests/flow/test_encode_decode.py`
- ... 6 more

### Wiki/graph/entity model

- `demo/client/client.py`
- `demo/imdb/imdb_utils.py`
- `demo/social/social_queries.py`
- `demo/social/social_utils.py`
- `tests/benchmarks/group_a/graph500-scale18-ef16_1hop_MIXED_READ_65_WRITE_25p_DEL_10p.yml`
- `tests/benchmarks/group_a/graph500-scale18-ef16_1hop_MIXED_READ_75_WRITE_25p.yml`
- `tests/benchmarks/group_a/graph500-scale18-ef16_1hop.yml`
- `tests/benchmarks/group_a/graph500-scale18-ef16_2hop_MIXED_READ_75_WRITE_25p.yml`
- `tests/benchmarks/group_a/graph500-scale18-ef16_2hop.yml`
- `tests/benchmarks/group_a/graph500-scale18-ef16_3hop_MIXED_READ_75_WRITE_25p.yml`
- `tests/benchmarks/group_a/graph500-scale18-ef16_WCC.yml`
- `tests/benchmarks/group_b/graph500-scale18-ef16_3hop.yml`
- ... 6 more

### Memory/update lifecycle

- `build.sh`
- `deps/GraphBLAS/cpu_features/scripts/make_release.sh`
- `demo/social/social_queries.py`
- `demo/client/prettytable/__init__.py`
- `.github/workflows/batch-backport.yml`
- `.github/workflows/benchmark.yml`
- `.github/workflows/build-toolchain.yml`
- `.github/workflows/build.yml`
- `.github/workflows/cleanup-rc-images.yml`
- `.github/workflows/codeql-analysis.yml`
- `.github/workflows/coverage.yml`
- `.github/workflows/sanitize.yml`
- ... 6 more

### Provenance/citation/evidence

- `.github/workflows/build-toolchain.yml`
- `code_of_conduct.md`

### Evaluation/observability

- `build.sh`
- `.github/workflows/batch-backport.yml`
- `.github/workflows/benchmark.yml`
- `.github/workflows/codeql-analysis.yml`
- `.github/workflows/detect-toolchain.yml`
- `tests/benchmarks/group_a/graph500-scale18-ef16_1hop_MIXED_READ_65_WRITE_25p_DEL_10p.yml`
- `tests/benchmarks/generate_markdown.py`
- `tests/benchmarks/run_benchmarks.py`
- `tests/flow/common.py`
- `tests/flow/test_bolt.py`
- `tests/flow/test_comprehension_functions.py`
- `tests/flow/test_foreach.py`
- ... 6 more

### Agent/MCP/tool surface

- `tests/benchmarks/run_benchmarks.py`
- `README.md`

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| .github/workflows/benchmark.yml | 169 | - name: Upload results |
| .github/workflows/benchmark.yml | 170 | uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a # v7 |
| .github/workflows/benchmark.yml | 205 | - name: Upload merged results |
| .github/workflows/benchmark.yml | 206 | uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a # v7 |
| .github/workflows/build.yml | 474 | - name: Upload test image |
| .github/workflows/build.yml | 476 | uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a # v7 |
| .github/workflows/build.yml | 502 | - name: Upload base image |
| .github/workflows/build.yml | 504 | uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a # v7 |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| deps/GraphBLAS/CONTRIBUTING.md | 11 | Sign and date it the PDF, and email it to me at |
| deps/GraphBLAS/CONTRIBUTING.md | 14 | the signed PDF. |
| deps/GraphBLAS/README.md | 26 | See the user guide in `Doc/GraphBLAS_UserGuide.pdf` for documentation on the |
| deps/GraphBLAS/README.md | 41 | See the User Guide PDF in Doc/ for directions on how to use another compiler. |
| deps/GraphBLAS/README.md | 172 | Print a copy of the txt file (as a PDF), sign and date it, |
| deps/GraphBLAS/README.md | 175 | your email with the signed PDF. |
| deps/GraphBLAS/.github/pull_request_template.md | 7 | the txt file (as a PDF), sign and date it, and email it to me at |
| deps/GraphBLAS/.github/pull_request_template.md | 9 | SuiteSparse after I receive your email with the signed PDF. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| tests/common.sh | 175 | _sanitizer_check "$logdir" "memcpy-param-overlap" "memory errors" \|\| E=1 |
| tests/flow/test_bolt.py | 341 | could corrupt memory when data spanned buffer chunk boundaries. |
| tests/flow/test_graph_deletion.py | 683 | where the explicit overlap the implicit |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| tests/flow/index_utils.py | 69 | return _create_typed_index(graph, "VECTOR", "NODE", label, *properties, options=options, sync=sync) |
| tests/flow/index_utils.py | 79 | return _create_typed_index(graph, "VECTOR", "EDGE", relation, *properties, options=options, sync=sync) |
| tests/flow/index_utils.py | 93 | elif idx_type == "VECTOR": |
| tests/flow/index_utils.py | 94 | q = f"DROP VECTOR INDEX FOR {pattern} ON (e.{attribute})" |
| tests/flow/index_utils.py | 109 | return _drop_index(graph, "VECTOR", "NODE", label, attribute) |
| tests/flow/index_utils.py | 118 | return _drop_index(graph, "VECTOR", "EDGE", label, attribute) |
| tests/flow/index_utils.py | 138 | return graph.query("CALL db.idx.vector.queryNodes($lbl, $attr, $k, vecf32($q))", params=params) |
| tests/flow/index_utils.py | 142 | return graph.query("CALL db.idx.vector.queryRelationships($lbl, $attr, $k, vecf32($q))", params=params) |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| demo/social/social_queries.py | 421 | description='Retrieve all nodes with person label', |
| .github/workflows/batch-backport.yml | 62 | # Extract just the date part (YYYY-MM-DD) for the search query |
| .github/workflows/batch-backport.yml | 74 | # Search for merged PRs with the version label |
| .github/workflows/batch-backport.yml | 77 | PR_DATA=$(gh api -X GET search/issues \ |
| .github/workflows/benchmark.yml | 119 | - name: Cache search |
| .github/workflows/benchmark.yml | 123 | path: ./bin/linux-x64-release/search-static |
| .github/workflows/benchmark.yml | 124 | key: search-x64-${{ hashFiles('./deps/RediSearch/src/version.h') }}-${{ steps.rs_sha.outputs.sha }} |
| .github/workflows/build.yml | 278 | /FalkorDB/bin/${{ matrix.platform.cache_path }}-release/search-static |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| demo/client/client.py | 21 | def __init__(self, relation, *args): |
| demo/client/client.py | 24 | self.relation = relation |
| demo/client/client.py | 61 | def connect_nodes(self, src_node, relation, dest_node, *args): |
| demo/client/client.py | 63 | Connects source node to dest node with relation |
| demo/client/client.py | 64 | specify relation properties within |
| demo/client/client.py | 73 | relation, |
| demo/client/client.py | 77 | return Edge(relation, *args) |
| demo/imdb/imdb_utils.py | 13 | # Load movies entities |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| build.sh | 26 | SAN="" # Sanitizer type (address/memory/leak/thread) |
| build.sh | 48 | MEMCHECK=0 # Memory checking mode |
| build.sh | 140 | SAN=type Build with LLVM sanitizer (type=address\|memory\|leak\|thread) |
| build.sh | 1203 | # Memory checking |
| build.sh | 1238 | # 2. The macOS build directory is restored from cache between runs, so a |
| build.sh | 1264 | # subset would let CMake's FindOpenSSL fall back to system / stale |
| build.sh | 1308 | log_info "Force clean: removing CMake cache" |
| deps/GraphBLAS/cpu_features/scripts/make_release.sh | 40 | git update-index -q --refresh |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| .github/workflows/build-toolchain.yml | 90 | provenance: false |
| code_of_conduct.md | 115 | ## Attribution |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| build.sh | 64 | # Benchmark options |
| build.sh | 65 | BENCHMARK=0 # Run benchmarks |
| build.sh | 66 | BENCHMARK_GROUP="" # Benchmark group to run (group_a, group_b, or empty for all) |
| build.sh | 165 | BENCHMARK OPTIONS: |
| build.sh | 166 | BENCHMARK=1 Run benchmarks |
| build.sh | 167 | BENCHMARK_GROUP=x Run specific benchmark group (group_a, group_b) |
| build.sh | 329 | # Benchmark options |
| build.sh | 330 | BENCHMARK=1) |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| tests/benchmarks/run_benchmarks.py | 142 | headers={"User-Agent": "FalkorDB Benchmarking Tool"}) |
| README.md | 7 | <h3>Powering Generative AI, Agent Memory, Cloud Security, and Fraud Detection</h3> |

## Gap

- Provenance/citation/evidence
