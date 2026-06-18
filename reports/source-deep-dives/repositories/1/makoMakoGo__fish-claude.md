# makoMakoGo/fish-claude 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Fish's custom settings and tools about claude code, codex, oh-my-pi etc

## 요약

- 조사 단위: `sources/makoMakoGo__fish-claude` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 139 files, 42 directories, depth score 82, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=tools/omp-patch-custom-mcp/apply.ts, tools/omp-patch-custom-mcp/patch.diff, tools/omp-patch-custom-mcp/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | makoMakoGo/fish-claude |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 140 |
| Forks | 15 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/makoMakoGo__fish-claude](../../../../sources/makoMakoGo__fish-claude) |
| 기존 보고서 | [reports/global-trending/repositories/makoMakoGo__fish-claude.md](../../../global-trending/repositories/makoMakoGo__fish-claude.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 139 / 42 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, agent-instructions, assets, config-files, mcp, output-styles, packs, preset-cards, skills, slash-commands, sub-agents, system-prompts, themes, tips, tools |
| 상위 확장자 | .md: 90, .svg: 10, .toml: 9, .json: 6, .yml: 6, (none): 5, .py: 3, .sh: 3, .diff: 2, .ts: 2, .jsonc: 1, .mjs: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| agent-instructions | top-level component | 1 |
| assets | top-level component | 1 |
| config-files | top-level component | 1 |
| mcp | top-level component | 1 |
| output-styles | top-level component | 1 |
| packs | top-level component | 1 |
| preset-cards | top-level component | 1 |
| skills | top-level component | 1 |
| slash-commands | top-level component | 1 |
| sub-agents | top-level component | 1 |
| system-prompts | top-level component | 1 |
| themes | top-level component | 1 |
| tips | top-level component | 1 |
| tools | top-level component | 1 |


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
| mcp | [tools/omp-patch-custom-mcp/apply.ts](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/apply.ts) | mcp signal |
| mcp | [tools/omp-patch-custom-mcp/patch.diff](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/patch.diff) | mcp signal |
| mcp | [tools/omp-patch-custom-mcp/README.md](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/README.md) | mcp signal |
| mcp | [mcp/brave-search.md](../../../../sources/makoMakoGo__fish-claude/mcp/brave-search.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/makoMakoGo__fish-claude/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/check-repo-hygiene.sh](../../../../sources/makoMakoGo__fish-claude/tools/check-repo-hygiene.sh) | agentRuntime signal |
| agentRuntime | [tools/README.md](../../../../sources/makoMakoGo__fish-claude/tools/README.md) | agentRuntime signal |
| agentRuntime | [tools/validate.sh](../../../../sources/makoMakoGo__fish-claude/tools/validate.sh) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/makoMakoGo__fish-claude/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/link-check.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/link-check.yml) | ci support |
| ci | [.github/workflows/repo-hygiene.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/repo-hygiene.yml) | ci support |
| eval | [tools/codex-provider-history-migrator/test_migrate.py](../../../../sources/makoMakoGo__fish-claude/tools/codex-provider-history-migrator/test_migrate.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 58 | [AGENTS.md](../../../../sources/makoMakoGo__fish-claude/AGENTS.md)<br>[tools/check-repo-hygiene.sh](../../../../sources/makoMakoGo__fish-claude/tools/check-repo-hygiene.sh)<br>[tools/README.md](../../../../sources/makoMakoGo__fish-claude/tools/README.md)<br>[tools/validate.sh](../../../../sources/makoMakoGo__fish-claude/tools/validate.sh)<br>[tools/tokscale-readme-svg/generate.mjs](../../../../sources/makoMakoGo__fish-claude/tools/tokscale-readme-svg/generate.mjs)<br>[tools/tokscale-readme-svg/README.md](../../../../sources/makoMakoGo__fish-claude/tools/tokscale-readme-svg/README.md)<br>[tools/omp-patch-custom-mcp/apply.ts](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/apply.ts)<br>[tools/omp-patch-custom-mcp/patch.diff](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/patch.diff) |
| mcp | 13 | [tools/omp-patch-custom-mcp/apply.ts](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/apply.ts)<br>[tools/omp-patch-custom-mcp/patch.diff](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/patch.diff)<br>[tools/omp-patch-custom-mcp/README.md](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/README.md)<br>[mcp/brave-search.md](../../../../sources/makoMakoGo__fish-claude/mcp/brave-search.md)<br>[mcp/context7.md](../../../../sources/makoMakoGo__fish-claude/mcp/context7.md)<br>[mcp/exa-search.md](../../../../sources/makoMakoGo__fish-claude/mcp/exa-search.md)<br>[mcp/fast-context.md](../../../../sources/makoMakoGo__fish-claude/mcp/fast-context.md)<br>[mcp/playwright.md](../../../../sources/makoMakoGo__fish-claude/mcp/playwright.md) |
| retrieval | 0 | 명확하지 않음 |
| spec | 2 | [skills/software-design-philosophy.md](../../../../sources/makoMakoGo__fish-claude/skills/software-design-philosophy.md)<br>[agent-instructions/oh-my-pi/03-architecture.md](../../../../sources/makoMakoGo__fish-claude/agent-instructions/oh-my-pi/03-architecture.md) |
| eval | 2 | [tools/codex-provider-history-migrator/test_migrate.py](../../../../sources/makoMakoGo__fish-claude/tools/codex-provider-history-migrator/test_migrate.py)<br>[agent-instructions/claude/02-code-quality.md](../../../../sources/makoMakoGo__fish-claude/agent-instructions/claude/02-code-quality.md) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/link-check.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/link-check.yml)<br>[.github/workflows/repo-hygiene.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/repo-hygiene.yml)<br>[.github/workflows/validate.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/validate.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/makoMakoGo__fish-claude/AGENTS.md)<br>[CLAUDE.md](../../../../sources/makoMakoGo__fish-claude/CLAUDE.md) |
| docs | 22 | [README.en.md](../../../../sources/makoMakoGo__fish-claude/README.en.md)<br>[README.md](../../../../sources/makoMakoGo__fish-claude/README.md)<br>[tools/README.md](../../../../sources/makoMakoGo__fish-claude/tools/README.md)<br>[tools/tokscale-readme-svg/README.md](../../../../sources/makoMakoGo__fish-claude/tools/tokscale-readme-svg/README.md)<br>[tools/omp-patch-custom-mcp/README.md](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/README.md)<br>[tools/omp-patch-codex-websearch-byok/README.md](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-codex-websearch-byok/README.md)<br>[tools/codex-provider-history-migrator/README.md](../../../../sources/makoMakoGo__fish-claude/tools/codex-provider-history-migrator/README.md)<br>[tools/claude-json-history-cleaner/README.md](../../../../sources/makoMakoGo__fish-claude/tools/claude-json-history-cleaner/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [tools/codex-provider-history-migrator/test_migrate.py](../../../../sources/makoMakoGo__fish-claude/tools/codex-provider-history-migrator/test_migrate.py)<br>[agent-instructions/claude/02-code-quality.md](../../../../sources/makoMakoGo__fish-claude/agent-instructions/claude/02-code-quality.md) |
| CI workflow | 3 | [.github/workflows/link-check.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/link-check.yml)<br>[.github/workflows/repo-hygiene.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/repo-hygiene.yml)<br>[.github/workflows/validate.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/validate.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/makoMakoGo__fish-claude/AGENTS.md)<br>[CLAUDE.md](../../../../sources/makoMakoGo__fish-claude/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/omp-patch-custom-mcp/apply.ts`, `tools/omp-patch-custom-mcp/patch.diff`, `tools/omp-patch-custom-mcp/README.md`.
2. agent/tool runtime 매핑: `AGENTS.md`, `tools/check-repo-hygiene.sh`, `tools/README.md`.
3. test/eval 파일로 동작 검증: `tools/codex-provider-history-migrator/test_migrate.py`, `agent-instructions/claude/02-code-quality.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Fish's custom settings and tools about claude code, codex, oh my pi etc. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
