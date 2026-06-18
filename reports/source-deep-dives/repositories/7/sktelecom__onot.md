# sktelecom/onot 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Generate open source software notices (OSS Notice) from SBOM documents — SPDX, CycloneDX, Excel → HTML/Text/Markdown/PDF. Offline, type-safe Python core with CLI, local API, and an installable desktop app.

## 요약

- 조사 단위: `sources/sktelecom__onot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 169 files, 53 directories, depth score 103, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/onot/cli/main.py, frontend/src/App.test.tsx, frontend/src/App.tsx이고, 의존성 단서는 fastapi, express, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | sktelecom/onot |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 15 |
| Forks | 7 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/sktelecom__onot](../../../../sources/sktelecom__onot) |
| 기존 보고서 | [reports/korea-trending/repositories/sktelecom__onot.md](../../../korea-trending/repositories/sktelecom__onot.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 169 / 53 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .github, docs, electron, frontend, scripts, spikes, src, tests |
| 상위 확장자 | .py: 73, .mjs: 12, .md: 11, .ts: 10, .tsx: 10, .json: 9, .yml: 9, (none): 5, .png: 4, .css: 3, .jinja: 3, .xml: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 48 |
| src | source boundary | 13 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| electron | top-level component | 1 |
| frontend | top-level component | 1 |
| scripts | top-level component | 1 |
| spikes | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | onot | onot |
| utility | pyproject.toml | onot-sidecar | onot-sidecar |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi, express |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/onot/cli/main.py](../../../../sources/sktelecom__onot/src/onot/cli/main.py) | entrypoints signal |
| entrypoints | [frontend/src/App.test.tsx](../../../../sources/sktelecom__onot/frontend/src/App.test.tsx) | entrypoints signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/sktelecom__onot/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/sktelecom__onot/frontend/src/index.css) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/sktelecom__onot/pyproject.toml) | config signal |
| config | [frontend/package.json](../../../../sources/sktelecom__onot/frontend/package.json) | config signal |
| config | [frontend/tsconfig.json](../../../../sources/sktelecom__onot/frontend/tsconfig.json) | config signal |
| config | [electron/package.json](../../../../sources/sktelecom__onot/electron/package.json) | config signal |
| docs | [README.md](../../../../sources/sktelecom__onot/README.md) | docs signal |
| docs | [docs/USER_GUIDE.md](../../../../sources/sktelecom__onot/docs/USER_GUIDE.md) | docs signal |
| docs | [docs/images/01-home.png](../../../../sources/sktelecom__onot/docs/images/01-home.png) | docs signal |
| docs | [docs/images/02-uploaded.png](../../../../sources/sktelecom__onot/docs/images/02-uploaded.png) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [src/onot/cli/main.py](../../../../sources/sktelecom__onot/src/onot/cli/main.py)<br>[frontend/src/App.test.tsx](../../../../sources/sktelecom__onot/frontend/src/App.test.tsx)<br>[frontend/src/App.tsx](../../../../sources/sktelecom__onot/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/sktelecom__onot/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/sktelecom__onot/frontend/src/main.tsx) |
| agentRuntime | 1 | [src/onot/rendering/context.py](../../../../sources/sktelecom__onot/src/onot/rendering/context.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 18 | [tests/ingest/test_cyclonedx.py](../../../../sources/sktelecom__onot/tests/ingest/test_cyclonedx.py)<br>[tests/ingest/test_detect.py](../../../../sources/sktelecom__onot/tests/ingest/test_detect.py)<br>[tests/ingest/test_equivalence.py](../../../../sources/sktelecom__onot/tests/ingest/test_equivalence.py)<br>[tests/ingest/test_excel_robust.py](../../../../sources/sktelecom__onot/tests/ingest/test_excel_robust.py)<br>[tests/ingest/test_registry.py](../../../../sources/sktelecom__onot/tests/ingest/test_registry.py)<br>[tests/ingest/test_spdx.py](../../../../sources/sktelecom__onot/tests/ingest/test_spdx.py)<br>[tests/ingest/test_xml_security.py](../../../../sources/sktelecom__onot/tests/ingest/test_xml_security.py)<br>[src/onot/ingest/__init__.py](../../../../sources/sktelecom__onot/src/onot/ingest/__init__.py) |
| spec | 1 | [docs/2.0/TRACEABILITY.md](../../../../sources/sktelecom__onot/docs/2.0/TRACEABILITY.md) |
| eval | 46 | [tests/test_smoke.py](../../../../sources/sktelecom__onot/tests/test_smoke.py)<br>[tests/unit/test_errors.py](../../../../sources/sktelecom__onot/tests/unit/test_errors.py)<br>[tests/unit/test_models.py](../../../../sources/sktelecom__onot/tests/unit/test_models.py)<br>[tests/rendering/test_context.py](../../../../sources/sktelecom__onot/tests/rendering/test_context.py)<br>[tests/rendering/test_escape.py](../../../../sources/sktelecom__onot/tests/rendering/test_escape.py)<br>[tests/rendering/test_filters.py](../../../../sources/sktelecom__onot/tests/rendering/test_filters.py)<br>[tests/rendering/test_golden.py](../../../../sources/sktelecom__onot/tests/rendering/test_golden.py)<br>[tests/rendering/test_i18n.py](../../../../sources/sktelecom__onot/tests/rendering/test_i18n.py) |
| security | 5 | [SECURITY.md](../../../../sources/sktelecom__onot/SECURITY.md)<br>[tests/ingest/test_xml_security.py](../../../../sources/sktelecom__onot/tests/ingest/test_xml_security.py)<br>[tests/api/test_security.py](../../../../sources/sktelecom__onot/tests/api/test_security.py)<br>[src/onot/ingest/_xml_guard.py](../../../../sources/sktelecom__onot/src/onot/ingest/_xml_guard.py)<br>[.github/workflows/security.yml](../../../../sources/sktelecom__onot/.github/workflows/security.yml) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/sktelecom__onot/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/sktelecom__onot/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/sktelecom__onot/.github/workflows/scorecard.yml)<br>[.github/workflows/security.yml](../../../../sources/sktelecom__onot/.github/workflows/security.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 8 | [README.md](../../../../sources/sktelecom__onot/README.md)<br>[docs/USER_GUIDE.md](../../../../sources/sktelecom__onot/docs/USER_GUIDE.md)<br>[docs/images/01-home.png](../../../../sources/sktelecom__onot/docs/images/01-home.png)<br>[docs/images/02-uploaded.png](../../../../sources/sktelecom__onot/docs/images/02-uploaded.png)<br>[docs/images/03-settings.png](../../../../sources/sktelecom__onot/docs/images/03-settings.png)<br>[docs/images/04-preview.png](../../../../sources/sktelecom__onot/docs/images/04-preview.png)<br>[docs/2.0/DECISIONS.md](../../../../sources/sktelecom__onot/docs/2.0/DECISIONS.md)<br>[docs/2.0/TRACEABILITY.md](../../../../sources/sktelecom__onot/docs/2.0/TRACEABILITY.md) |
| config | 4 | [pyproject.toml](../../../../sources/sktelecom__onot/pyproject.toml)<br>[frontend/package.json](../../../../sources/sktelecom__onot/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/sktelecom__onot/frontend/tsconfig.json)<br>[electron/package.json](../../../../sources/sktelecom__onot/electron/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 46 | [tests/test_smoke.py](../../../../sources/sktelecom__onot/tests/test_smoke.py)<br>[tests/unit/test_errors.py](../../../../sources/sktelecom__onot/tests/unit/test_errors.py)<br>[tests/unit/test_models.py](../../../../sources/sktelecom__onot/tests/unit/test_models.py)<br>[tests/rendering/test_context.py](../../../../sources/sktelecom__onot/tests/rendering/test_context.py)<br>[tests/rendering/test_escape.py](../../../../sources/sktelecom__onot/tests/rendering/test_escape.py)<br>[tests/rendering/test_filters.py](../../../../sources/sktelecom__onot/tests/rendering/test_filters.py) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/sktelecom__onot/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/sktelecom__onot/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/sktelecom__onot/.github/workflows/scorecard.yml)<br>[.github/workflows/security.yml](../../../../sources/sktelecom__onot/.github/workflows/security.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [SECURITY.md](../../../../sources/sktelecom__onot/SECURITY.md)<br>[tests/ingest/test_xml_security.py](../../../../sources/sktelecom__onot/tests/ingest/test_xml_security.py)<br>[tests/api/test_security.py](../../../../sources/sktelecom__onot/tests/api/test_security.py)<br>[src/onot/ingest/_xml_guard.py](../../../../sources/sktelecom__onot/src/onot/ingest/_xml_guard.py)<br>[.github/workflows/security.yml](../../../../sources/sktelecom__onot/.github/workflows/security.yml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/onot/cli/main.py`, `frontend/src/App.test.tsx`, `frontend/src/App.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `src/onot/cli/main.py`, `frontend/src/App.test.tsx`, `frontend/src/App.tsx`.
3. agent/tool runtime 매핑: `src/onot/rendering/context.py`.
4. retrieval/memory/indexing 확인: `tests/ingest/test_cyclonedx.py`, `tests/ingest/test_detect.py`, `tests/ingest/test_equivalence.py`.
5. test/eval 파일로 동작 검증: `tests/test_smoke.py`, `tests/unit/test_errors.py`, `tests/unit/test_models.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Generate open source software notices OSS Notice from SBOM documents — SPDX, CycloneDX, Excel → HTML/Text/Markdown/PDF. . 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, fastapi, pydantic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
