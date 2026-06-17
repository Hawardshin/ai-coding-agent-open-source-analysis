# pgvector/pgvector 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/pgvector__pgvector |
| remote | https://github.com/pgvector/pgvector |
| HEAD | 1f68c73 (2026-06-10) Updated changelog [skip ci] |
| branch | master |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 150 |
| dirs | 11 |
| stack | unknown/mixed |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `pgvector`, `Installation`, `Linux and Mac`, `Windows`, `Getting Started`, `Storing`, `Querying`, `Indexing`, `HNSW`, `Index Options`, `Query Options`, `Index Build Time`, `Indexing Progress`, `IVFFlat`, `Query Options`, `Index Build Time`, `Indexing Progress`, `Filtering`

> pgvector Open source vector similarity search for Postgres Store your vectors with the rest of your data. Supports exact and approximate nearest neighbor search single precision, half precision, binary, and sparse vectors L2 distance, inner product, cosine distance, L1 distance, Hamming distance, and Jaccard distance any language with a Postgres client Plus ACID compliance, point in time recovery, JOINs, and all of the other great features of Postgres Have a lot of vectors? Use quantization to scale Installation Linux and Mac Compile and install the extension (supports Postgres 13+) See the installation notes if you run into issues You can also install it with Docker, Homebrew, PGXN, APT, Yum, pkg, APK, or conda forge, and it comes preinstalled with Postgres.app and many hosted providers. There are also instructions for GitHub Actions. Windows Ensure C++ support in Visual Studio is insta

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .editorconfig | file |
| .github | dir |
| .gitignore | file |
| CHANGELOG.md | file |
| Dockerfile | file |
| LICENSE | file |
| Makefile | file |
| Makefile.win | file |
| META.json | file |
| README.md | file |
| sql | dir |
| src | dir |
| test | dir |
| vector.control | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| test/ | 75 |
| sql/ | 37 |
| src/ | 27 |
| (root) | 10 |
| .github/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 27 | preferred |
| test/ | 75 | preferred |
| test/t/ | 45 | large |
| sql/ | 37 | large |
| test/expected/ | 14 | large |
| test/sql/ | 14 | large |
| test/perl/ | 2 | large |
| test/perl/PostgreSQL/ | 2 | large |
| .github/ | 1 | large |
| .github/workflows/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/expected/bit.out`
- `test/expected/btree.out`
- `test/expected/cast.out`
- `test/expected/copy.out`
- `test/expected/halfvec.out`
- `test/expected/hnsw_bit.out`
- `test/expected/hnsw_halfvec.out`
- `test/expected/hnsw_sparsevec.out`
- `test/expected/hnsw_vector.out`
- `test/expected/ivfflat_bit.out`
- `test/expected/ivfflat_halfvec.out`
- `test/expected/ivfflat_vector.out`
- `test/expected/sparsevec.out`
- `test/expected/vector_type.out`
- `test/perl/PostgreSQL/Test/Cluster.pm`
- `test/perl/PostgreSQL/Test/Utils.pm`
- `test/sql/bit.sql`
- `test/sql/btree.sql`
- `test/sql/cast.sql`
- `test/sql/copy.sql`
- `test/sql/halfvec.sql`
- `test/sql/hnsw_bit.sql`
- `test/sql/hnsw_halfvec.sql`
- `test/sql/hnsw_sparsevec.sql`
- `test/sql/hnsw_vector.sql`
- `test/sql/ivfflat_bit.sql`
- `test/sql/ivfflat_halfvec.sql`
- `test/sql/ivfflat_vector.sql`
- `test/sql/sparsevec.sql`
- `test/sql/vector_type.sql`
- `test/t/001_ivfflat_wal.pl`
- `test/t/002_ivfflat_vacuum.pl`
- `test/t/003_ivfflat_vector_build_recall.pl`
- `test/t/004_ivfflat_vector_insert_recall.pl`
- `test/t/005_ivfflat_query_recall.pl`
- `test/t/006_ivfflat_lists.pl`
- `test/t/007_ivfflat_inserts.pl`
- `test/t/008_ivfflat_centers.pl`
- `test/t/009_ivfflat_filtering.pl`
- `test/t/010_hnsw_wal.pl`
- `test/t/011_hnsw_vacuum.pl`
- `test/t/012_hnsw_vector_build_recall.pl`
- `test/t/013_hnsw_vector_insert_recall.pl`
- `test/t/014_hnsw_vector_vacuum_recall.pl`
- `test/t/015_hnsw_vector_duplicates.pl`
- `test/t/016_hnsw_inserts.pl`
- `test/t/017_hnsw_filtering.pl`
- `test/t/018_aggregates.pl`
- `test/t/019_storage.pl`
- `test/t/020_hnsw_bit_build_recall.pl`
- `test/t/021_hnsw_bit_insert_recall.pl`
- `test/t/022_hnsw_bit_vacuum_recall.pl`
- `test/t/023_hnsw_bit_duplicates.pl`
- `test/t/024_hnsw_halfvec_build_recall.pl`
- `test/t/025_hnsw_halfvec_insert_recall.pl`
- `test/t/026_hnsw_halfvec_vacuum_recall.pl`
- `test/t/027_hnsw_halfvec_duplicates.pl`
- `test/t/028_hnsw_sparsevec_build_recall.pl`
- `test/t/029_hnsw_sparsevec_insert_recall.pl`
- `test/t/030_hnsw_sparsevec_vacuum_recall.pl`
- `test/t/031_hnsw_sparsevec_duplicates.pl`
- `test/t/032_ivfflat_halfvec_build_recall.pl`
- `test/t/033_comparison.pl`
- `test/t/034_distance_functions.pl`
- `test/t/035_ivfflat_bit_build_recall.pl`
- `test/t/036_ivfflat_bit_centers.pl`
- `test/t/037_inputs.pl`
- `test/t/038_hnsw_sparsevec_vacuum_insert.pl`
- `test/t/039_hnsw_cost.pl`
- `test/t/040_ivfflat_cost.pl`
- `test/t/041_ivfflat_iterative_scan.pl`
- `test/t/042_ivfflat_iterative_scan_recall.pl`
- `test/t/043_hnsw_iterative_scan.pl`
- `test/t/044_hnsw_iterative_scan_recall.pl`
- `test/t/045_hnsw_low_memory_build.pl`

### CI/Docker 후보

- `.github/workflows/build.yml`
- `Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .sql | 51 |
| .pl | 45 |
| .c | 19 |
| .out | 14 |
| .h | 8 |
| .md | 2 |
| .pm | 2 |
| .control | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .json | 1 |
| .win | 1 |
| .yml | 1 |
| dockerfile | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `test/t/ 내부 책임 분리`
- `sql/ 내부 책임 분리`
- `test/expected/ 내부 책임 분리`
- `Dockerfile 실행 스크립트와 패키지 경계`

