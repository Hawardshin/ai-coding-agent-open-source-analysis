# psychofict/hwpkit 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Read, fill, and edit Korean HWP (Hancom Office) documents in Python. Extract text for LLM / RAG pipelines, fill government & university forms programmatically, and rewrite the binary without corrupting it.

## 요약

- 조사 단위: `sources/psychofict__hwpkit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 52 files, 10 directories, depth score 81, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=docs/index.md, docs/blog/index.md, docs/blog/posts/rag-pipeline-korean-hwp-documents.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | psychofict/hwpkit |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/psychofict__hwpkit](../../../../sources/psychofict__hwpkit) |
| 기존 보고서 | [reports/korea-trending/repositories/psychofict__hwpkit.md](../../../korea-trending/repositories/psychofict__hwpkit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 52 / 10 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, assets, docs, examples, hwpkit, tests |
| 상위 확장자 | .py: 20, .md: 16, .yml: 5, (none): 3, .jpeg: 2, .png: 2, .txt: 2, .json: 1, .toml: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 22 |
| tests | validation surface | 11 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| hwpkit | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | pyproject.toml | hwpkit-inspect | hwpkit-inspect |
| utility | pyproject.toml | hwpkit-text | hwpkit-text |


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
| retrieval | [docs/index.md](../../../../sources/psychofict__hwpkit/docs/index.md) | retrieval signal |
| retrieval | [docs/blog/index.md](../../../../sources/psychofict__hwpkit/docs/blog/index.md) | retrieval signal |
| retrieval | [docs/blog/posts/rag-pipeline-korean-hwp-documents.md](../../../../sources/psychofict__hwpkit/docs/blog/posts/rag-pipeline-korean-hwp-documents.md) | retrieval signal |
| docs | [mkdocs.yml](../../../../sources/psychofict__hwpkit/mkdocs.yml) | docs signal |
| docs | [README.md](../../../../sources/psychofict__hwpkit/README.md) | docs signal |
| docs | [tests/fixtures/README.md](../../../../sources/psychofict__hwpkit/tests/fixtures/README.md) | docs signal |
| docs | [docs/api.md](../../../../sources/psychofict__hwpkit/docs/api.md) | docs signal |
| eval | [tests/test_cfb_add.py](../../../../sources/psychofict__hwpkit/tests/test_cfb_add.py) | eval signal |
| eval | [tests/test_charshape.py](../../../../sources/psychofict__hwpkit/tests/test_charshape.py) | eval signal |
| eval | [tests/test_extract.py](../../../../sources/psychofict__hwpkit/tests/test_extract.py) | eval signal |
| eval | [tests/test_hwp.py](../../../../sources/psychofict__hwpkit/tests/test_hwp.py) | eval signal |
| config | [pyproject.toml](../../../../sources/psychofict__hwpkit/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [docs/index.md](../../../../sources/psychofict__hwpkit/docs/index.md)<br>[docs/blog/index.md](../../../../sources/psychofict__hwpkit/docs/blog/index.md)<br>[docs/blog/posts/rag-pipeline-korean-hwp-documents.md](../../../../sources/psychofict__hwpkit/docs/blog/posts/rag-pipeline-korean-hwp-documents.md) |
| spec | 1 | [docs/requirements.txt](../../../../sources/psychofict__hwpkit/docs/requirements.txt) |
| eval | 9 | [tests/test_cfb_add.py](../../../../sources/psychofict__hwpkit/tests/test_cfb_add.py)<br>[tests/test_charshape.py](../../../../sources/psychofict__hwpkit/tests/test_charshape.py)<br>[tests/test_extract.py](../../../../sources/psychofict__hwpkit/tests/test_extract.py)<br>[tests/test_hwp.py](../../../../sources/psychofict__hwpkit/tests/test_hwp.py)<br>[tests/test_hwpx.py](../../../../sources/psychofict__hwpkit/tests/test_hwpx.py)<br>[tests/test_picture.py](../../../../sources/psychofict__hwpkit/tests/test_picture.py)<br>[tests/test_records.py](../../../../sources/psychofict__hwpkit/tests/test_records.py)<br>[tests/test_roundtrip.py](../../../../sources/psychofict__hwpkit/tests/test_roundtrip.py) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/psychofict__hwpkit/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/psychofict__hwpkit/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/psychofict__hwpkit/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/psychofict__hwpkit/CLAUDE.md) |
| docs | 19 | [mkdocs.yml](../../../../sources/psychofict__hwpkit/mkdocs.yml)<br>[README.md](../../../../sources/psychofict__hwpkit/README.md)<br>[tests/fixtures/README.md](../../../../sources/psychofict__hwpkit/tests/fixtures/README.md)<br>[docs/api.md](../../../../sources/psychofict__hwpkit/docs/api.md)<br>[docs/changelog.md](../../../../sources/psychofict__hwpkit/docs/changelog.md)<br>[docs/CNAME](../../../../sources/psychofict__hwpkit/docs/CNAME)<br>[docs/comparison.md](../../../../sources/psychofict__hwpkit/docs/comparison.md)<br>[docs/GOTCHAS.md](../../../../sources/psychofict__hwpkit/docs/GOTCHAS.md) |
| config | 2 | [pyproject.toml](../../../../sources/psychofict__hwpkit/pyproject.toml)<br>[docs/requirements.txt](../../../../sources/psychofict__hwpkit/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [tests/test_cfb_add.py](../../../../sources/psychofict__hwpkit/tests/test_cfb_add.py)<br>[tests/test_charshape.py](../../../../sources/psychofict__hwpkit/tests/test_charshape.py)<br>[tests/test_extract.py](../../../../sources/psychofict__hwpkit/tests/test_extract.py)<br>[tests/test_hwp.py](../../../../sources/psychofict__hwpkit/tests/test_hwp.py)<br>[tests/test_hwpx.py](../../../../sources/psychofict__hwpkit/tests/test_hwpx.py)<br>[tests/test_picture.py](../../../../sources/psychofict__hwpkit/tests/test_picture.py) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/psychofict__hwpkit/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/psychofict__hwpkit/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/psychofict__hwpkit/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/psychofict__hwpkit/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/index.md`, `docs/blog/index.md`, `docs/blog/posts/rag-pipeline-korean-hwp-documents.md`.
2. retrieval/memory/indexing 확인: `docs/index.md`, `docs/blog/index.md`, `docs/blog/posts/rag-pipeline-korean-hwp-documents.md`.
3. test/eval 파일로 동작 검증: `tests/test_cfb_add.py`, `tests/test_charshape.py`, `tests/test_extract.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Read, fill, and edit Korean HWP Hancom Office documents in Python. Extract text for LLM / RAG pipelines, fill government. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
