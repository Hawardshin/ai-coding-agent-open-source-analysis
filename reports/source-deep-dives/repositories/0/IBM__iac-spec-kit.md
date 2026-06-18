# IBM/iac-spec-kit 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 91 files, 30 directories.

## 요약

- 조사 단위: `sources/IBM__iac-spec-kit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 91 files, 30 directories, depth score 83, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, templates/agent-file-template.md, memory/principles.md이고, 의존성 단서는 click, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | IBM/iac-spec-kit |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 68 |
| Forks | 8 |
| License | MIT License |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/IBM__iac-spec-kit](../../../../sources/IBM__iac-spec-kit) |
| 기존 보고서 | [reports/clone-structures/IBM__iac-spec-kit.md](../../../clone-structures/IBM__iac-spec-kit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 91 / 30 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, dev, docs, examples, media, memory, scripts, src, templates |
| 상위 확장자 | .md: 58, .sh: 13, .ps1: 5, .yml: 5, (none): 4, .json: 2, .py: 2, .png: 1, .toml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| dev | top-level component | 1 |
| examples | top-level component | 1 |
| examples/01-simple-vpc | examples workspace | 1 |
| examples/02-static-website | examples workspace | 1 |
| examples/03-wordpress | examples workspace | 1 |
| examples/04-landing-zone | examples workspace | 1 |
| examples/05-three-tier-webapp | examples workspace | 1 |
| examples/06-data-pipeline | examples workspace | 1 |
| examples/07-microservices | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| media | top-level component | 1 |
| memory | top-level component | 1 |
| scripts | top-level component | 1 |
| src | source boundary | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | pyproject.toml | iac-specify | iac-specify |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | click, typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/IBM__iac-spec-kit/AGENTS.md) | agentRuntime signal |
| agentRuntime | [templates/agent-file-template.md](../../../../sources/IBM__iac-spec-kit/templates/agent-file-template.md) | agentRuntime signal |
| agentRuntime | [memory/principles.md](../../../../sources/IBM__iac-spec-kit/memory/principles.md) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/IBM__iac-spec-kit/pyproject.toml) | config signal |
| ci | [.github/workflows/release.yml](../../../../sources/IBM__iac-spec-kit/.github/workflows/release.yml) | ci support |
| ci | [.github/workflows/scripts/check-release-exists.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/check-release-exists.sh) | ci support |
| eval | [templates/spec-template.md](../../../../sources/IBM__iac-spec-kit/templates/spec-template.md) | eval support |
| eval | [media/iac-spec-kit-thumbnail.png](../../../../sources/IBM__iac-spec-kit/media/iac-spec-kit-thumbnail.png) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 3 | [AGENTS.md](../../../../sources/IBM__iac-spec-kit/AGENTS.md)<br>[templates/agent-file-template.md](../../../../sources/IBM__iac-spec-kit/templates/agent-file-template.md)<br>[memory/principles.md](../../../../sources/IBM__iac-spec-kit/memory/principles.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [memory/principles.md](../../../../sources/IBM__iac-spec-kit/memory/principles.md) |
| spec | 2 | [templates/spec-template.md](../../../../sources/IBM__iac-spec-kit/templates/spec-template.md)<br>[media/iac-spec-kit-thumbnail.png](../../../../sources/IBM__iac-spec-kit/media/iac-spec-kit-thumbnail.png) |
| eval | 3 | [templates/spec-template.md](../../../../sources/IBM__iac-spec-kit/templates/spec-template.md)<br>[media/iac-spec-kit-thumbnail.png](../../../../sources/IBM__iac-spec-kit/media/iac-spec-kit-thumbnail.png)<br>[dev/test-bundle-extraction.sh](../../../../sources/IBM__iac-spec-kit/dev/test-bundle-extraction.sh) |
| security | 0 | 명확하지 않음 |
| ci | 7 | [.github/workflows/release.yml](../../../../sources/IBM__iac-spec-kit/.github/workflows/release.yml)<br>[.github/workflows/scripts/check-release-exists.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/check-release-exists.sh)<br>[.github/workflows/scripts/create-github-release.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/create-github-release.sh)<br>[.github/workflows/scripts/create-release-packages.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/create-release-packages.sh)<br>[.github/workflows/scripts/generate-release-notes.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/generate-release-notes.sh)<br>[.github/workflows/scripts/get-next-version.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/get-next-version.sh)<br>[.github/workflows/scripts/update-version.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/update-version.sh) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/IBM__iac-spec-kit/AGENTS.md) |
| docs | 10 | [README.md](../../../../sources/IBM__iac-spec-kit/README.md)<br>[examples/README.md](../../../../sources/IBM__iac-spec-kit/examples/README.md)<br>[examples/07-microservices/README.md](../../../../sources/IBM__iac-spec-kit/examples/07-microservices/README.md)<br>[examples/06-data-pipeline/README.md](../../../../sources/IBM__iac-spec-kit/examples/06-data-pipeline/README.md)<br>[examples/05-three-tier-webapp/README.md](../../../../sources/IBM__iac-spec-kit/examples/05-three-tier-webapp/README.md)<br>[examples/04-landing-zone/README.md](../../../../sources/IBM__iac-spec-kit/examples/04-landing-zone/README.md)<br>[examples/03-wordpress/README.md](../../../../sources/IBM__iac-spec-kit/examples/03-wordpress/README.md)<br>[examples/02-static-website/README.md](../../../../sources/IBM__iac-spec-kit/examples/02-static-website/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/IBM__iac-spec-kit/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [templates/spec-template.md](../../../../sources/IBM__iac-spec-kit/templates/spec-template.md)<br>[media/iac-spec-kit-thumbnail.png](../../../../sources/IBM__iac-spec-kit/media/iac-spec-kit-thumbnail.png)<br>[dev/test-bundle-extraction.sh](../../../../sources/IBM__iac-spec-kit/dev/test-bundle-extraction.sh) |
| CI workflow | 7 | [.github/workflows/release.yml](../../../../sources/IBM__iac-spec-kit/.github/workflows/release.yml)<br>[.github/workflows/scripts/check-release-exists.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/check-release-exists.sh)<br>[.github/workflows/scripts/create-github-release.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/create-github-release.sh)<br>[.github/workflows/scripts/create-release-packages.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/create-release-packages.sh)<br>[.github/workflows/scripts/generate-release-notes.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/generate-release-notes.sh)<br>[.github/workflows/scripts/get-next-version.sh](../../../../sources/IBM__iac-spec-kit/.github/workflows/scripts/get-next-version.sh) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/IBM__iac-spec-kit/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `templates/agent-file-template.md`, `memory/principles.md`.
2. agent/tool runtime 매핑: `AGENTS.md`, `templates/agent-file-template.md`, `memory/principles.md`.
3. retrieval/memory/indexing 확인: `memory/principles.md`.
4. test/eval 파일로 동작 검증: `templates/spec-template.md`, `media/iac-spec-kit-thumbnail.png`, `dev/test-bundle-extraction.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 91 files, 30 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음입니다.
