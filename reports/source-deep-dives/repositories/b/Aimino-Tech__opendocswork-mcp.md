# Aimino-Tech/opendocswork-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Rust-native MCP server for Office document processing (Excel, Word, PowerPoint). Sub-millisecond, local-first, open source.

## 요약

- 조사 단위: `sources/Aimino-Tech__opendocswork-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 126 files, 45 directories, depth score 95, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.json이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Aimino-Tech/opendocswork-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 149 |
| Forks | 11 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Aimino-Tech__opendocswork-mcp](../../../../sources/Aimino-Tech__opendocswork-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/Aimino-Tech__opendocswork-mcp.md](../../../global-trending/repositories/Aimino-Tech__opendocswork-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 126 / 45 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, scripts, showcase, skills, src |
| 상위 확장자 | .rs: 42, .png: 16, .xlsx: 12, .yaml: 12, .pptx: 10, .md: 8, .docx: 6, (none): 6, .py: 4, .html: 2, .json: 2, .css: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 11 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| showcase | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| mcp | [mcp.json](../../../../sources/Aimino-Tech__opendocswork-mcp/mcp.json) | mcp signal |
| agentRuntime | [src/skills/mod.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/mod.rs) | agentRuntime signal |
| agentRuntime | [src/skills/registry.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/registry.rs) | agentRuntime signal |
| agentRuntime | [src/skills/runner.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/runner.rs) | agentRuntime signal |
| agentRuntime | [src/skills/validator.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/validator.rs) | agentRuntime signal |
| entrypoints | [src/main.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/Aimino-Tech__opendocswork-mcp/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/Aimino-Tech__opendocswork-mcp/Cargo.toml) | config signal |
| container | [Dockerfile](../../../../sources/Aimino-Tech__opendocswork-mcp/Dockerfile) | container support |
| eval | [scripts/stress_test_pdfs.py](../../../../sources/Aimino-Tech__opendocswork-mcp/scripts/stress_test_pdfs.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/main.rs) |
| agentRuntime | 20 | [src/skills/mod.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/mod.rs)<br>[src/skills/registry.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/registry.rs)<br>[src/skills/runner.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/runner.rs)<br>[src/skills/validator.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/validator.rs)<br>[src/skill/mod.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skill/mod.rs)<br>[src/skill/registry.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skill/registry.rs)<br>[src/skill/templates.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skill/templates.rs)<br>[src/skill/types.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skill/types.rs) |
| mcp | 1 | [mcp.json](../../../../sources/Aimino-Tech__opendocswork-mcp/mcp.json) |
| retrieval | 1 | [showcase/index.html](../../../../sources/Aimino-Tech__opendocswork-mcp/showcase/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [scripts/stress_test_pdfs.py](../../../../sources/Aimino-Tech__opendocswork-mcp/scripts/stress_test_pdfs.py) |
| security | 1 | [SECURITY.md](../../../../sources/Aimino-Tech__opendocswork-mcp/SECURITY.md) |
| ci | 0 | 명확하지 않음 |
| container | 1 | [Dockerfile](../../../../sources/Aimino-Tech__opendocswork-mcp/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/Aimino-Tech__opendocswork-mcp/README.md) |
| config | 2 | [Cargo.lock](../../../../sources/Aimino-Tech__opendocswork-mcp/Cargo.lock)<br>[Cargo.toml](../../../../sources/Aimino-Tech__opendocswork-mcp/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [scripts/stress_test_pdfs.py](../../../../sources/Aimino-Tech__opendocswork-mcp/scripts/stress_test_pdfs.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/Aimino-Tech__opendocswork-mcp/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/Aimino-Tech__opendocswork-mcp/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp.json`, `src/skills/mod.rs`, `src/skills/registry.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.rs`.
3. agent/tool runtime 매핑: `src/skills/mod.rs`, `src/skills/registry.rs`, `src/skills/runner.rs`.
4. retrieval/memory/indexing 확인: `showcase/index.html`.
5. test/eval 파일로 동작 검증: `scripts/stress_test_pdfs.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Rust native MCP server for Office document processing Excel, Word, PowerPoint . Sub millisecond, local first, open sourc. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
