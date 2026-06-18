# 데이터/벡터 플랫폼 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

데이터/벡터 플랫폼 주제의 로컬 소스 심층 스캔 결과입니다.

## 요약

- 조사 단위: `data-vector-platform` 역할로 분류된 로컬 소스 레포 7개입니다.
- 포함 범위: 저장소, index, embedding/vector 경로, query engine, persistence 경로를 중심으로 key source reference 81개를 추출했습니다.
- 탐색 방식: 소스 인사이트를 먼저 읽고, 핵심 소스 참조의 파일 링크를 따라가면 소스를 봐야만 알 수 있는 구현 단서를 확인할 수 있습니다.

## 총평

이 주제의 비교 포인트는 추상 기능명이 아니라 실제 파일 배치입니다. entrypoint, runtime, spec/test, CI/container, instruction 파일이 분리돼 있는지 또는 한곳에 섞여 있는지를 보면 재사용 가능한 구조와 후속 검증이 필요한 구조가 빠르게 구분됩니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../../repositories/README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 주제 범위

| 항목 | 수 |
| --- | ---: |
| 레포 수 | 7 |
| 핵심 소스 참조 | 81 |
| Entrypoint 경로 hit | 64 |
| Agent/runtime 경로 hit | 215 |
| MCP 경로 hit | 5 |
| Retrieval/vector 경로 hit | 1075 |
| Spec/requirements 경로 hit | 145 |
| Eval/test 경로 hit | 2813 |
| Security/policy 경로 hit | 130 |
| Instruction 파일 경로 hit | 2 |

## 레포별 소스 인사이트

| 레포 | 파일/디렉터리 | 깊이 점수 | 소스 패턴 | 핵심 소스 참조 | 소스 인사이트 | 위험 신호 | 링크 |
| --- | ---: | ---: | --- | --- | --- | --- | --- |
| [Ontos-AI/knowhere](https://github.com/Ontos-AI/knowhere) | 2046 / 198 | 126 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface | [packages/shared-python/shared/utils/chunk_refs.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/utils/chunk_refs.py) (retrieval)<br>[packages/shared-python/shared/services/storage/zip_chunk_schema.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/storage/zip_chunk_schema.py) (retrieval)<br>[packages/shared-python/shared/services/retrieval/__init__.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/__init__.py) (retrieval)<br>[packages/shared-python/shared/services/retrieval/app_service.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/app_service.py) (retrieval) | 데이터/벡터 플랫폼 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/shared-python/shared/utils/chunk_refs.py, packages/shared-python/shared/services/storage/zip_chunk_schema.py, packages/shared-python/shared/services/retrieval/__init__.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | 없음 | [딥다이브](../../repositories/0/Ontos-AI__knowhere.md) / [보고서](../../../global-trending/repositories/Ontos-AI__knowhere.md) / [소스](../../../../sources/Ontos-AI__knowhere) |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 5254 / 788 | 122 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy | [tests/restful_client_v2/testcases/test_embedding_rerank_function.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_embedding_rerank_function.py) (retrieval)<br>[tests/restful_client_v2/testcases/test_index_operation.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_index_operation.py) (retrieval)<br>[tests/restful_client_v2/testcases/test_vector_operations.py](../../../../sources/milvus-io__milvus/tests/restful_client_v2/testcases/test_vector_operations.py) (retrieval)<br>[tests/restful_client/testcases/test_vector_operations.py](../../../../sources/milvus-io__milvus/tests/restful_client/testcases/test_vector_operations.py) (retrieval) | 데이터/벡터 플랫폼 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/restful_client_v2/testcases/test_embedding_rerank_function.py, tests/restful_client_v2/testcases/test_index_operation.py, tests/restful_client_v2/testcases/test_vector_operations.py이고, 의존성 단서는 milvus, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | 없음 | [딥다이브](../../repositories/6/milvus-io__milvus.md) / [보고서](../../../global-trending/repositories/milvus-io__milvus.md) / [소스](../../../../sources/milvus-io__milvus) |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 1874 / 362 | 118 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface | [tests/openapi/test_filter_has_vector.py](../../../../sources/qdrant__qdrant/tests/openapi/test_filter_has_vector.py) (retrieval)<br>[tests/openapi/test_geo_payload_index.py](../../../../sources/qdrant__qdrant/tests/openapi/test_geo_payload_index.py) (retrieval)<br>[tests/openapi/test_multi_vector_uint8.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector_uint8.py) (retrieval)<br>[tests/openapi/test_multi_vector_unnamed.py](../../../../sources/qdrant__qdrant/tests/openapi/test_multi_vector_unnamed.py) (retrieval) | 데이터/벡터 플랫폼 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/openapi/test_filter_has_vector.py, tests/openapi/test_geo_payload_index.py, tests/openapi/test_multi_vector_uint8.py이고, 의존성 단서는 next, qdrant, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | 없음 | [딥다이브](../../repositories/1/qdrant__qdrant.md) / [보고서](../../../global-trending/repositories/qdrant__qdrant.md) / [소스](../../../../sources/qdrant__qdrant) |
| [kakao/actionbase](https://github.com/kakao/actionbase) | 1294 / 496 | 118 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy | [website/src/content/docs/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/index.mdx) (retrieval)<br>[website/src/content/docs/stories/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/index.mdx) (retrieval)<br>[website/src/content/docs/stories/vision/unified-graph.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/vision/unified-graph.mdx) (retrieval)<br>[website/src/content/docs/stories/how-we-survived/index.mdx](../../../../sources/kakao__actionbase/website/src/content/docs/stories/how-we-survived/index.mdx) (retrieval) | 데이터/벡터 플랫폼 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=website/src/content/docs/index.mdx, website/src/content/docs/stories/index.mdx, website/src/content/docs/stories/vision/unified-graph.mdx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | 없음 | [딥다이브](../../repositories/c/kakao__actionbase.md) / [보고서](../../../korea-trending/repositories/kakao__actionbase.md) / [소스](../../../../sources/kakao__actionbase) |
| [Samsung/CAS](https://github.com/Samsung/CAS) | 573 / 142 | 105 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness | [vscode-extensions/packages/webview/src/lib/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/webview/src/lib/index.ts) (retrieval)<br>[vscode-extensions/packages/vscode-variables/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/vscode-variables/src/index.ts) (retrieval)<br>[vscode-extensions/packages/types/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/types/src/index.ts) (retrieval)<br>[vscode-extensions/packages/telemetry/src/index.ts](../../../../sources/Samsung__CAS/vscode-extensions/packages/telemetry/src/index.ts) (retrieval) | 데이터/벡터 플랫폼 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=vscode-extensions/packages/webview/src/lib/index.ts, vscode-extensions/packages/vscode-variables/src/index.ts, vscode-extensions/packages/types/src/index.ts이고, 의존성 단서는 mcp, fastapi, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | CI 경로가 명확하지 않음 | [딥다이브](../../repositories/a/Samsung__CAS.md) / [보고서](../../../korea-trending/repositories/Samsung__CAS.md) / [소스](../../../../sources/Samsung__CAS) |
| [timescale/pgvectorscale](https://github.com/timescale/pgvectorscale) | 96 / 25 | 84 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness | [pgvectorscale/src/bin/pgrx_embed.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/bin/pgrx_embed.rs) (retrieval)<br>[pgvectorscale/src/access_method/pg_vector.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/pg_vector.rs) (retrieval)<br>[pgvectorscale/src/access_method/graph/mod.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/mod.rs) (retrieval)<br>[pgvectorscale/src/access_method/graph/neighbor_store.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/neighbor_store.rs) (retrieval) | 데이터/벡터 플랫폼 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=pgvectorscale/src/bin/pgrx_embed.rs, pgvectorscale/src/access_method/pg_vector.rs, pgvectorscale/src/access_method/graph/mod.rs이고, 의존성 단서는 pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | 없음 | [딥다이브](../../repositories/1/timescale__pgvectorscale.md) / [보고서](../../../clone-structures/timescale__pgvectorscale.md) / [소스](../../../../sources/timescale__pgvectorscale) |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | 150 / 11 | 73 | retrieval/vector path, eval/test harness, containerized deploy | [vector.control](../../../../sources/pgvector__pgvector/vector.control) (retrieval)<br>[test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl) (retrieval)<br>[test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl) (retrieval)<br>[test/t/012_hnsw_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/012_hnsw_vector_build_recall.pl) (retrieval) | 데이터/벡터 플랫폼 관점에서 retrieval/vector path, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 retrieval=vector.control, test/t/003_ivfflat_vector_build_recall.pl, test/t/004_ivfflat_vector_insert_recall.pl이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. | entrypoint 경로가 명확하지 않음 | [딥다이브](../../repositories/e/pgvector__pgvector.md) / [보고서](../../../clone-structures/pgvector__pgvector.md) / [소스](../../../../sources/pgvector__pgvector) |
