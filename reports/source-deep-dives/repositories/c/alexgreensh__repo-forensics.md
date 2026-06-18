# alexgreensh/repo-forensics 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Offline security scanner for AI-agent repos, skills, plugins, and MCP servers.

## 요약

- 조사 단위: `sources/alexgreensh__repo-forensics` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 307 files, 60 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/repo-forensics/tests/test_scan_mcp_security.py, skills/repo-forensics/tests/golden/parity_mcp_security.json, skills/repo-forensics/scripts/scan_mcp_security.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | alexgreensh/repo-forensics |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 107 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/alexgreensh__repo-forensics](../../../../sources/alexgreensh__repo-forensics) |
| 기존 보고서 | [reports/global-trending/repositories/alexgreensh__repo-forensics.md](../../../global-trending/repositories/alexgreensh__repo-forensics.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 307 / 60 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .claude-plugin, .codex-plugin, .github, diagrams, hooks, iocs, openclaw, plugins, scripts, signatures, skills |
| 상위 확장자 | .py: 164, .json: 53, .md: 28, .sh: 17, .txt: 14, (none): 9, .svg: 6, .yml: 6, .sb: 4, .csv: 2, .sig: 2, .css: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| diagrams | top-level component | 1 |
| hooks | top-level component | 1 |
| iocs | top-level component | 1 |
| openclaw | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| signatures | top-level component | 1 |
| skills | top-level component | 1 |


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
| mcp | [skills/repo-forensics/tests/test_scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_scan_mcp_security.py) | mcp signal |
| mcp | [skills/repo-forensics/tests/golden/parity_mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/golden/parity_mcp_security.json) | mcp signal |
| mcp | [skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py) | mcp signal |
| mcp | [skills/repo-forensics/references/mcp-attack-patterns.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/references/mcp-attack-patterns.md) | mcp signal |
| agentRuntime | [skills/repo-forensics/.gitignore](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/.gitignore) | agentRuntime signal |
| agentRuntime | [skills/repo-forensics/checksums.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/checksums.json) | agentRuntime signal |
| agentRuntime | [skills/repo-forensics/SKILL.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/repo-forensics/tests/conftest.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/conftest.py) | agentRuntime signal |
| config | [skills/repo-forensics/tests/corpus/benign/package.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/package.json) | config signal |
| ci | [.github/workflows/cla.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/cla.yml) | ci support |
| ci | [.github/workflows/sync-badges.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/sync-badges.yml) | ci support |
| container | [skills/repo-forensics/tests/corpus/benign/Dockerfile](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 266 | [skills/repo-forensics/.gitignore](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/.gitignore)<br>[skills/repo-forensics/checksums.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/checksums.json)<br>[skills/repo-forensics/SKILL.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/SKILL.md)<br>[skills/repo-forensics/tests/conftest.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/conftest.py)<br>[skills/repo-forensics/tests/parity_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/parity_corpus.py)<br>[skills/repo-forensics/tests/test_adjudication_output.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_adjudication_output.py)<br>[skills/repo-forensics/tests/test_aggregate_json.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_aggregate_json.py)<br>[skills/repo-forensics/tests/test_benign_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_corpus.py) |
| mcp | 12 | [skills/repo-forensics/tests/test_scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_scan_mcp_security.py)<br>[skills/repo-forensics/tests/golden/parity_mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/golden/parity_mcp_security.json)<br>[skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py)<br>[skills/repo-forensics/references/mcp-attack-patterns.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/references/mcp-attack-patterns.md)<br>[skills/repo-forensics/data/rulepacks/mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/data/rulepacks/mcp_security.json)<br>[skills/forensify/prompts/domain_mcp.txt](../../../../sources/alexgreensh__repo-forensics/skills/forensify/prompts/domain_mcp.txt)<br>[skills/forensify/domains/mcp.json](../../../../sources/alexgreensh__repo-forensics/skills/forensify/domains/mcp.json)<br>[plugins/repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/plugins/repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 2 | [skills/forensify/references/architecture.md](../../../../sources/alexgreensh__repo-forensics/skills/forensify/references/architecture.md)<br>[plugins/repo-forensics/skills/forensify/references/architecture.md](../../../../sources/alexgreensh__repo-forensics/plugins/repo-forensics/skills/forensify/references/architecture.md) |
| eval | 78 | [skills/repo-forensics/tests/conftest.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/conftest.py)<br>[skills/repo-forensics/tests/parity_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/parity_corpus.py)<br>[skills/repo-forensics/tests/test_adjudication_output.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_adjudication_output.py)<br>[skills/repo-forensics/tests/test_aggregate_json.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_aggregate_json.py)<br>[skills/repo-forensics/tests/test_benign_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_corpus.py)<br>[skills/repo-forensics/tests/test_benign_new_scanners.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_new_scanners.py)<br>[skills/repo-forensics/tests/test_codex_install.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_codex_install.py)<br>[skills/repo-forensics/tests/test_codex_marketplace.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_codex_marketplace.py) |
| security | 10 | [SECURITY.md](../../../../sources/alexgreensh__repo-forensics/SECURITY.md)<br>[skills/repo-forensics/tests/test_scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_scan_mcp_security.py)<br>[skills/repo-forensics/tests/golden/parity_mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/golden/parity_mcp_security.json)<br>[skills/repo-forensics/tests/corpus/benign/oauth_api_docs.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/oauth_api_docs.md)<br>[skills/repo-forensics/scripts/dast_sandbox.sb](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/dast_sandbox.sb)<br>[skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py)<br>[skills/repo-forensics/data/rulepacks/mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/data/rulepacks/mcp_security.json)<br>[plugins/repo-forensics/skills/repo-forensics/scripts/dast_sandbox.sb](../../../../sources/alexgreensh__repo-forensics/plugins/repo-forensics/skills/repo-forensics/scripts/dast_sandbox.sb) |
| ci | 3 | [.github/workflows/cla.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/cla.yml)<br>[.github/workflows/sync-badges.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/sync-badges.yml)<br>[.github/workflows/verify-checksums.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/verify-checksums.yml) |
| container | 1 | [skills/repo-forensics/tests/corpus/benign/Dockerfile](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/alexgreensh__repo-forensics/README.md)<br>[skills/repo-forensics/data/README.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/data/README.md)<br>[plugins/repo-forensics/skills/repo-forensics/data/README.md](../../../../sources/alexgreensh__repo-forensics/plugins/repo-forensics/skills/repo-forensics/data/README.md) |
| config | 1 | [skills/repo-forensics/tests/corpus/benign/package.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 78 | [skills/repo-forensics/tests/conftest.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/conftest.py)<br>[skills/repo-forensics/tests/parity_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/parity_corpus.py)<br>[skills/repo-forensics/tests/test_adjudication_output.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_adjudication_output.py)<br>[skills/repo-forensics/tests/test_aggregate_json.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_aggregate_json.py)<br>[skills/repo-forensics/tests/test_benign_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_corpus.py)<br>[skills/repo-forensics/tests/test_benign_new_scanners.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_new_scanners.py) |
| CI workflow | 3 | [.github/workflows/cla.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/cla.yml)<br>[.github/workflows/sync-badges.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/sync-badges.yml)<br>[.github/workflows/verify-checksums.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/verify-checksums.yml) |
| 컨테이너/배포 | 1 | [skills/repo-forensics/tests/corpus/benign/Dockerfile](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/Dockerfile) |
| 보안/정책 | 10 | [SECURITY.md](../../../../sources/alexgreensh__repo-forensics/SECURITY.md)<br>[skills/repo-forensics/tests/test_scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_scan_mcp_security.py)<br>[skills/repo-forensics/tests/golden/parity_mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/golden/parity_mcp_security.json)<br>[skills/repo-forensics/tests/corpus/benign/oauth_api_docs.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/oauth_api_docs.md)<br>[skills/repo-forensics/scripts/dast_sandbox.sb](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/dast_sandbox.sb)<br>[skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/repo-forensics/tests/test_scan_mcp_security.py`, `skills/repo-forensics/tests/golden/parity_mcp_security.json`, `skills/repo-forensics/scripts/scan_mcp_security.py`.
2. agent/tool runtime 매핑: `skills/repo-forensics/.gitignore`, `skills/repo-forensics/checksums.json`, `skills/repo-forensics/SKILL.md`.
3. test/eval 파일로 동작 검증: `skills/repo-forensics/tests/conftest.py`, `skills/repo-forensics/tests/parity_corpus.py`, `skills/repo-forensics/tests/test_adjudication_output.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Offline security scanner for AI agent repos, skills, plugins, and MCP servers.. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
