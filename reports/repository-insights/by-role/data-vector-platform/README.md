# 데이터/벡터 플랫폼

생성 시각: 2026-06-18T15:38:15.277Z

데이터/벡터 플랫폼 역할군에 속한 repository-level insight 목록입니다.

## 요약

- 조사 단위: `data-vector-platform` 역할로 분류된 레포 묶음입니다.
- 포함 범위: 7개 레포, 보고서 링크 7, 로컬 소스 7.
- 탐색 방식: Insight로 읽을 이유를 확인하고, Risks로 후속 검증 포인트를 본 뒤 report/source 링크로 들어가면 됩니다.

## 총평

이 역할군은 같은 문제를 서로 다른 구현 방식으로 푸는 레포들을 비교하기 좋습니다. 성숙도와 근거 수준이 높은 항목은 참고 구현으로, 관찰 또는 메타데이터만 있는 항목은 트렌드 후보로 읽는 편이 적절합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../README.md) | 레포별 총평과 역할군 페이지. |
| [소스 딥다이브](../../../source-deep-dives/README.md) | 로컬 클론에서 뽑은 파일 경로 근거. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [근거 카테고리](../../../categories/README.md) | 오픈소스, 논문, 발표, 참고자료의 artifact 분류. |


## 레포별 인사이트

| 레포 | 역할 | Stars | 성숙도 | 근거 수준 | 인사이트 | 위험 신호 | 링크 |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 데이터/벡터 플랫폼 | 44821 | 고신호 | 심층 소스+보고서 | 데이터/벡터 플랫폼 관점에서 Local clone structure analysis 5254 files, 788 directories.. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, Makefile, README.md, CLAUDE.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다. | 라이선스 메타데이터 없음 | [보고서](../../../global-trending/repositories/milvus-io__milvus.md) / [소스](../../../../sources/milvus-io__milvus) |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 데이터/벡터 플랫폼 | 32410 | 고신호 | 심층 소스+보고서 | 데이터/벡터 플랫폼 관점에서 Local clone structure analysis 1874 files, 362 directories.. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, LICENSE, next이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다. | 라이선스 메타데이터 없음 | [보고서](../../../global-trending/repositories/qdrant__qdrant.md) / [소스](../../../../sources/qdrant__qdrant) |
| [Ontos-AI/knowhere](https://github.com/Ontos-AI/knowhere) | 데이터/벡터 플랫폼 | 1502 | 안정 | 소스+보고서 | 데이터/벡터 플랫폼 관점에서 Knowhere extracts, parses, and outputs structured chunks ready for AI Agents and RAG.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요 | [보고서](../../../global-trending/repositories/Ontos-AI__knowhere.md) / [소스](../../../../sources/Ontos-AI__knowhere) |
| [kakao/actionbase](https://github.com/kakao/actionbase) | 데이터/벡터 플랫폼 | 220 | 안정 | 소스+보고서 | 데이터/벡터 플랫폼 관점에서 One database for user user follows , user item likes , and item item related items interactions — precomputed, served in. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/kakao__actionbase.md) / [소스](../../../../sources/kakao__actionbase) |
| [Samsung/CAS](https://github.com/Samsung/CAS) | 데이터/벡터 플랫폼 | 62 | 초기 | 소스+보고서 | 데이터/벡터 플랫폼 관점에서 Code Aware Services CAS is a set of tools for extracting information from a especially large source code trees. It consi. 핵심 구조 신호는 C++, pyproject.toml, requirements.txt, Cargo.toml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다. | CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/Samsung__CAS.md) / [소스](../../../../sources/Samsung__CAS) |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | 데이터/벡터 플랫폼 | 0 | 안정 | 심층 소스+보고서 | 데이터/벡터 플랫폼 관점에서 Local clone structure analysis 150 files, 11 directories.. 핵심 구조 신호는 Dockerfile, Makefile, README.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 라이선스 메타데이터 없음 | [보고서](../../../clone-structures/pgvector__pgvector.md) / [소스](../../../../sources/pgvector__pgvector) |
| [timescale/pgvectorscale](https://github.com/timescale/pgvectorscale) | 데이터/벡터 플랫폼 | 0 | 안정 | 심층 소스+보고서 | 데이터/벡터 플랫폼 관점에서 Local clone structure analysis 96 files, 25 directories.. 핵심 구조 신호는 Cargo.toml, Makefile, README.md, LICENSE, pgvector, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 라이선스 메타데이터 없음 | [보고서](../../../clone-structures/timescale__pgvectorscale.md) / [소스](../../../../sources/timescale__pgvectorscale) |
