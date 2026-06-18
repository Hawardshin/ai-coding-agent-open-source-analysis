# secure-agentic-framework/saf-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

SAF-MCP is a comprehensive security framework for documenting and mitigating threats in the AI Agent ecosystem.

## 요약

- 조사 단위: `sources/secure-agentic-framework__saf-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 311 files, 133 directories, depth score 71, key references 5개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=techniques/SAF-T2107/examples/requirements.txt, techniques/SAF-T2106/examples/requirements.txt, techniques/SAF-T1505/examples/requirements.txt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | secure-agentic-framework/saf-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 348 |
| Forks | 92 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/secure-agentic-framework__saf-mcp](../../../../sources/secure-agentic-framework__saf-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/secure-agentic-framework__saf-mcp.md](../../../global-trending/repositories/secure-agentic-framework__saf-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 311 / 133 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, mitigations, techniques |
| 상위 확장자 | .md: 141, .yml: 73, .py: 44, .json: 38, .txt: 4, .0: 3, .sh: 3, (none): 2, .cff: 1, .png: 1, .yaml: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| mitigations | top-level component | 1 |
| techniques | top-level component | 1 |


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
| config | [techniques/SAF-T2107/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/examples/requirements.txt) | config signal |
| config | [techniques/SAF-T2106/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/requirements.txt) | config signal |
| config | [techniques/SAF-T1505/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1505/examples/requirements.txt) | config signal |
| eval | [techniques/SAF-T2107/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test_detection_rule.py) | eval support |
| eval | [techniques/SAF-T2107/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test-logs.json) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [techniques/SAF-T2106/examples/vector-store-poisoning-demo.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/vector-store-poisoning-demo.py)<br>[mitigations/SAF-M-63/embedding_sanitization.py](../../../../sources/secure-agentic-framework__saf-mcp/mitigations/SAF-M-63/embedding_sanitization.py) |
| spec | 4 | [techniques/SAF-T3001/architecture_1.png](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T3001/architecture_1.png)<br>[techniques/SAF-T2107/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/examples/requirements.txt)<br>[techniques/SAF-T2106/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/requirements.txt)<br>[techniques/SAF-T1505/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1505/examples/requirements.txt) |
| eval | 71 | [techniques/SAF-T2107/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test_detection_rule.py)<br>[techniques/SAF-T2107/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test-logs.json)<br>[techniques/SAF-T2106/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/test_detection_rule.py)<br>[techniques/SAF-T2106/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/test-logs.json)<br>[techniques/SAF-T2103/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/test_detection_rule.py)<br>[techniques/SAF-T2103/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/test-logs.json)<br>[techniques/SAF-T1910/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1910/test_detection_rule.py)<br>[techniques/SAF-T1910/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1910/test-logs.json) |
| security | 1 | [techniques/SAF-T1603/examples/detection_guard_model.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1603/examples/detection_guard_model.py) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 130 | [README.md](../../../../sources/secure-agentic-framework__saf-mcp/README.md)<br>[techniques/SAF-T3001/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T3001/README.md)<br>[techniques/SAF-T2107/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/README.md)<br>[techniques/SAF-T2107/examples/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/examples/README.md)<br>[techniques/SAF-T2106/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/README.md)<br>[techniques/SAF-T2106/examples/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/README.md)<br>[techniques/SAF-T2105/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2105/README.md)<br>[techniques/SAF-T2103/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/README.md) |
| config | 3 | [techniques/SAF-T2107/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/examples/requirements.txt)<br>[techniques/SAF-T2106/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/requirements.txt)<br>[techniques/SAF-T1505/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1505/examples/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 71 | [techniques/SAF-T2107/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test_detection_rule.py)<br>[techniques/SAF-T2107/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test-logs.json)<br>[techniques/SAF-T2106/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/test_detection_rule.py)<br>[techniques/SAF-T2106/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/test-logs.json)<br>[techniques/SAF-T2103/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/test_detection_rule.py)<br>[techniques/SAF-T2103/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/test-logs.json) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [techniques/SAF-T1603/examples/detection_guard_model.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1603/examples/detection_guard_model.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `techniques/SAF-T2107/examples/requirements.txt`, `techniques/SAF-T2106/examples/requirements.txt`, `techniques/SAF-T1505/examples/requirements.txt`.
2. retrieval/memory/indexing 확인: `techniques/SAF-T2106/examples/vector-store-poisoning-demo.py`, `mitigations/SAF-M-63/embedding_sanitization.py`.
3. test/eval 파일로 동작 검증: `techniques/SAF-T2107/test_detection_rule.py`, `techniques/SAF-T2107/test-logs.json`, `techniques/SAF-T2106/test_detection_rule.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 SAF MCP is a comprehensive security framework for documenting and mitigating threats in the AI Agent ecosystem.. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
