# line/line-things-starter 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

The sample codes for LINE Things Developer Trial

## 요약

- 조사 단위: `sources/line__line-things-starter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 42 files, 22 directories, depth score 48, key references 5개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/line-things-starter |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | C++ |
| Stars | 92 |
| Forks | 403 |
| License | CC0-1.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__line-things-starter](../../../../sources/line__line-things-starter) |
| 기존 보고서 | [reports/korea-trending/repositories/line__line-things-starter.md](../../../korea-trending/repositories/line__line-things-starter.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 42 / 22 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | bot, esp32, liff-app, line-things-dev-board, m5stack, m5stick-c, microbit, nrf52, obniz, puckjs |
| 상위 확장자 | .md: 22, .ino: 6, .html: 2, .js: 2, .png: 2, .txt: 2, (none): 2, .css: 1, .gif: 1, .json: 1, .py: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| bot | top-level component | 1 |
| esp32 | top-level component | 1 |
| liff-app | top-level component | 1 |
| line-things-dev-board | top-level component | 1 |
| m5stack | top-level component | 1 |
| m5stick-c | top-level component | 1 |
| microbit | top-level component | 1 |
| nrf52 | top-level component | 1 |
| obniz | top-level component | 1 |
| puckjs | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| config | [requirements.txt](../../../../sources/line__line-things-starter/requirements.txt) | config signal |
| docs | [README.ja.md](../../../../sources/line__line-things-starter/README.ja.md) | docs signal |
| docs | [README.md](../../../../sources/line__line-things-starter/README.md) | docs signal |
| docs | [puckjs/README.md](../../../../sources/line__line-things-starter/puckjs/README.md) | docs signal |
| docs | [obniz/README.ja.md](../../../../sources/line__line-things-starter/obniz/README.ja.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [liff-app/index.html](../../../../sources/line__line-things-starter/liff-app/index.html) |
| spec | 1 | [requirements.txt](../../../../sources/line__line-things-starter/requirements.txt) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 21 | [README.ja.md](../../../../sources/line__line-things-starter/README.ja.md)<br>[README.md](../../../../sources/line__line-things-starter/README.md)<br>[puckjs/README.md](../../../../sources/line__line-things-starter/puckjs/README.md)<br>[obniz/README.ja.md](../../../../sources/line__line-things-starter/obniz/README.ja.md)<br>[obniz/README.md](../../../../sources/line__line-things-starter/obniz/README.md)<br>[nrf52/README.ja.md](../../../../sources/line__line-things-starter/nrf52/README.ja.md)<br>[nrf52/README.md](../../../../sources/line__line-things-starter/nrf52/README.md)<br>[microbit/README.ja.md](../../../../sources/line__line-things-starter/microbit/README.ja.md) |
| config | 1 | [requirements.txt](../../../../sources/line__line-things-starter/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `requirements.txt`, `README.ja.md`, `README.md`.
2. retrieval/memory/indexing 확인: `liff-app/index.html`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 The sample codes for LINE Things Developer Trial. 핵심 구조 신호는 C++, requirements.txt, README.md, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
