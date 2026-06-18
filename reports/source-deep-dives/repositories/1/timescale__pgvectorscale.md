# timescale/pgvectorscale 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 96 files, 25 directories.

## 요약

- 조사 단위: `sources/timescale__pgvectorscale` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 96 files, 25 directories, depth score 84, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=pgvectorscale/src/bin/pgrx_embed.rs, pgvectorscale/src/access_method/pg_vector.rs, pgvectorscale/src/access_method/graph/mod.rs이고, 의존성 단서는 pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | timescale/pgvectorscale |
| 주제 | 데이터/벡터 플랫폼 / 데이터/벡터 플랫폼 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/timescale__pgvectorscale](../../../../sources/timescale__pgvectorscale) |
| 기존 보고서 | [reports/clone-structures/timescale__pgvectorscale.md](../../../clone-structures/timescale__pgvectorscale.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 96 / 25 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .cargo, .github, pgvectorscale, scripts, tests |
| 상위 확장자 | .rs: 47, .sql: 11, .yml: 9, (none): 7, .md: 5, .py: 4, .toml: 4, .yaml: 4, .sh: 2, .txt: 2, .control: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 8 |
| .github | ci surface | 1 |
| pgvectorscale | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-pgrx | make install-pgrx |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | init-pgrx | make init-pgrx |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-debug | make install-debug |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | install-release | make install-release |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | package | make package |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | shellcheck | make shellcheck |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | shfmt | make shfmt |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-python-setup | make test-python-setup |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | pgvector |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [pgvectorscale/src/bin/pgrx_embed.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/bin/pgrx_embed.rs) | retrieval signal |
| retrieval | [pgvectorscale/src/access_method/pg_vector.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/pg_vector.rs) | retrieval signal |
| retrieval | [pgvectorscale/src/access_method/graph/mod.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/mod.rs) | retrieval signal |
| retrieval | [pgvectorscale/src/access_method/graph/neighbor_store.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/neighbor_store.rs) | retrieval signal |
| config | [Cargo.toml](../../../../sources/timescale__pgvectorscale/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/timescale__pgvectorscale/Makefile) | config signal |
| config | [tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt) | config signal |
| config | [scripts/requirements.txt](../../../../sources/timescale__pgvectorscale/scripts/requirements.txt) | config signal |
| ci | [.github/workflows/code_checks.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/code_checks.yml) | ci support |
| ci | [.github/workflows/deb-packager.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/deb-packager.yaml) | ci support |
| eval | [tests/__init__.py](../../../../sources/timescale__pgvectorscale/tests/__init__.py) | eval support |
| eval | [tests/conftest.py](../../../../sources/timescale__pgvectorscale/tests/conftest.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [pgvectorscale/src/bin/pgrx_embed.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/bin/pgrx_embed.rs) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [pgvectorscale/src/bin/pgrx_embed.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/bin/pgrx_embed.rs)<br>[pgvectorscale/src/access_method/pg_vector.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/pg_vector.rs)<br>[pgvectorscale/src/access_method/graph/mod.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/mod.rs)<br>[pgvectorscale/src/access_method/graph/neighbor_store.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/neighbor_store.rs)<br>[pgvectorscale/src/access_method/graph/neighbor_with_distance.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/neighbor_with_distance.rs)<br>[pgvectorscale/src/access_method/graph/start_nodes.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/start_nodes.rs)<br>[pgvectorscale/sql/timescale_vector--0.0.1--0.0.2.sql](../../../../sources/timescale__pgvectorscale/pgvectorscale/sql/timescale_vector--0.0.1--0.0.2.sql) |
| spec | 2 | [tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt)<br>[scripts/requirements.txt](../../../../sources/timescale__pgvectorscale/scripts/requirements.txt) |
| eval | 12 | [tests/__init__.py](../../../../sources/timescale__pgvectorscale/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/timescale__pgvectorscale/tests/conftest.py)<br>[tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt)<br>[tests/test_basic_operations.py](../../../../sources/timescale__pgvectorscale/tests/test_basic_operations.py)<br>[tests/test_concurrent_inserts.py](../../../../sources/timescale__pgvectorscale/tests/test_concurrent_inserts.py)<br>[scripts/run-python-tests.sh](../../../../sources/timescale__pgvectorscale/scripts/run-python-tests.sh)<br>[pgvectorscale/src/access_method/upgrade_test.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/upgrade_test.rs)<br>[pgvectorscale/src/access_method/sbq/tests.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/sbq/tests.rs) |
| security | 0 | 명확하지 않음 |
| ci | 5 | [.github/workflows/code_checks.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/code_checks.yml)<br>[.github/workflows/deb-packager.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/deb-packager.yaml)<br>[.github/workflows/pgrx_test.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/pgrx_test.yaml)<br>[.github/workflows/python_tests.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/python_tests.yml)<br>[.github/workflows/shellcheck.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/shellcheck.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/timescale__pgvectorscale/README.md) |
| config | 6 | [Cargo.toml](../../../../sources/timescale__pgvectorscale/Cargo.toml)<br>[Makefile](../../../../sources/timescale__pgvectorscale/Makefile)<br>[tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt)<br>[scripts/requirements.txt](../../../../sources/timescale__pgvectorscale/scripts/requirements.txt)<br>[pgvectorscale/Cargo.toml](../../../../sources/timescale__pgvectorscale/pgvectorscale/Cargo.toml)<br>[pgvectorscale/pgvectorscale_derive/Cargo.toml](../../../../sources/timescale__pgvectorscale/pgvectorscale/pgvectorscale_derive/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 12 | [tests/__init__.py](../../../../sources/timescale__pgvectorscale/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/timescale__pgvectorscale/tests/conftest.py)<br>[tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt)<br>[tests/test_basic_operations.py](../../../../sources/timescale__pgvectorscale/tests/test_basic_operations.py)<br>[tests/test_concurrent_inserts.py](../../../../sources/timescale__pgvectorscale/tests/test_concurrent_inserts.py)<br>[scripts/run-python-tests.sh](../../../../sources/timescale__pgvectorscale/scripts/run-python-tests.sh) |
| CI workflow | 5 | [.github/workflows/code_checks.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/code_checks.yml)<br>[.github/workflows/deb-packager.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/deb-packager.yaml)<br>[.github/workflows/pgrx_test.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/pgrx_test.yaml)<br>[.github/workflows/python_tests.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/python_tests.yml)<br>[.github/workflows/shellcheck.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/shellcheck.yaml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pgvectorscale/src/bin/pgrx_embed.rs`, `pgvectorscale/src/access_method/pg_vector.rs`, `pgvectorscale/src/access_method/graph/mod.rs`.
2. entrypoint를 따라 실행 흐름 확인: `pgvectorscale/src/bin/pgrx_embed.rs`.
3. retrieval/memory/indexing 확인: `pgvectorscale/src/bin/pgrx_embed.rs`, `pgvectorscale/src/access_method/pg_vector.rs`, `pgvectorscale/src/access_method/graph/mod.rs`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/requirements.txt`.

## 기존 레포 인사이트

데이터/벡터 플랫폼 관점에서 Local clone structure analysis 96 files, 25 directories.. 핵심 구조 신호는 Cargo.toml, Makefile, README.md, LICENSE, pgvector, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
