# woowacourse/woowacourse-docs 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

우아한테크코스 문서를 관리하는 저장소

## 요약

- 조사 단위: `sources/woowacourse__woowacourse-docs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 124 files, 29 directories, depth score 63, key references 5개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=.omc/project-memory.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | woowacourse/woowacourse-docs |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | 없음 |
| Stars | 420 |
| Forks | 378 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/woowacourse__woowacourse-docs](../../../../sources/woowacourse__woowacourse-docs) |
| 기존 보고서 | [reports/korea-trending/repositories/woowacourse__woowacourse-docs.md](../../../korea-trending/repositories/woowacourse__woowacourse-docs.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 124 / 29 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .omc, cleancode, codereview, consulting, maincourse, precourse, privacypolicy, reviewer, studylog, styleguide |
| 상위 확장자 | .md: 62, .png: 37, .jpg: 17, .json: 6, .xml: 1, (none): 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| cleancode | top-level component | 1 |
| codereview | top-level component | 1 |
| consulting | top-level component | 1 |
| maincourse | top-level component | 1 |
| precourse | top-level component | 1 |
| privacypolicy | top-level component | 1 |
| reviewer | top-level component | 1 |
| studylog | top-level component | 1 |
| styleguide | top-level component | 1 |


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
| retrieval | [.omc/project-memory.json](../../../../sources/woowacourse__woowacourse-docs/.omc/project-memory.json) | retrieval signal |
| docs | [README.md](../../../../sources/woowacourse__woowacourse-docs/README.md) | docs signal |
| docs | [styleguide/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/README.md) | docs signal |
| docs | [styleguide/kotlin/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/kotlin/README.md) | docs signal |
| docs | [styleguide/javascript/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/javascript/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [.omc/state/skill-sessions.json](../../../../sources/woowacourse__woowacourse-docs/.omc/state/skill-sessions.json) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [.omc/project-memory.json](../../../../sources/woowacourse__woowacourse-docs/.omc/project-memory.json) |
| spec | 1 | [reviewer/fe-lv2/shopping-cart-3rd-system-design.md](../../../../sources/woowacourse__woowacourse-docs/reviewer/fe-lv2/shopping-cart-3rd-system-design.md) |
| eval | 0 | 명확하지 않음 |
| security | 1 | [privacypolicy/woowacourse-app-privacy-policy.md](../../../../sources/woowacourse__woowacourse-docs/privacypolicy/woowacourse-app-privacy-policy.md) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 19 | [README.md](../../../../sources/woowacourse__woowacourse-docs/README.md)<br>[styleguide/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/README.md)<br>[styleguide/kotlin/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/kotlin/README.md)<br>[styleguide/javascript/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/javascript/README.md)<br>[styleguide/java/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/java/README.md)<br>[studylog/README.md](../../../../sources/woowacourse__woowacourse-docs/studylog/README.md)<br>[reviewer/README.md](../../../../sources/woowacourse__woowacourse-docs/reviewer/README.md)<br>[reviewer/fe-lv2/README.md](../../../../sources/woowacourse__woowacourse-docs/reviewer/fe-lv2/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [privacypolicy/woowacourse-app-privacy-policy.md](../../../../sources/woowacourse__woowacourse-docs/privacypolicy/woowacourse-app-privacy-policy.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.omc/project-memory.json`, `README.md`, `styleguide/README.md`.
2. agent/tool runtime 매핑: `.omc/state/skill-sessions.json`.
3. retrieval/memory/indexing 확인: `.omc/project-memory.json`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 우아한테크코스 문서를 관리하는 저장소. 핵심 구조 신호는 README.md, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
