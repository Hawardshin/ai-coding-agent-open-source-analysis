# santifer/career-ops 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

AI-powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing.

## 요약

- 조사 단위: `sources/santifer__career-ops` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 238 files, 52 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, .agents/skills/career-ops/SKILL.md이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | santifer/career-ops |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 54417 |
| Forks | 10794 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/santifer__career-ops](../../../../sources/santifer__career-ops) |
| 기존 보고서 | [reports/global-trending/repositories/santifer__career-ops.md](../../../global-trending/repositories/santifer__career-ops.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 238 / 52 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .github, .opencode, .qwen, batch, config, dashboard, data, docs, examples, fonts, interview-prep, jds, modes, output, providers, reports, scaffolder |
| 상위 확장자 | .md: 111, .mjs: 43, .yml: 20, .go: 16, (none): 15, .json: 7, .svg: 5, .jpg: 4, .woff2: 4, .html: 2, .cff: 1, .example: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| batch | top-level component | 1 |
| config | top-level component | 1 |
| dashboard | top-level component | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| examples/ats-normalization-test.md | examples workspace | 1 |
| examples/dual-track-engineer-instructor | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| fonts | top-level component | 1 |
| interview-prep | top-level component | 1 |
| jds | top-level component | 1 |
| modes | top-level component | 1 |
| output | top-level component | 1 |
| providers | top-level component | 1 |
| reports | top-level component | 1 |
| scaffolder | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | doctor | node doctor.mjs |
| utility | package.json | verify | node verify-pipeline.mjs |
| utility | package.json | normalize | node normalize-statuses.mjs |
| utility | package.json | dedup | node dedup-tracker.mjs |
| utility | package.json | merge | node merge-tracker.mjs |
| utility | package.json | pdf | node generate-pdf.mjs |
| quality | package.json | sync-check | node cv-sync-check.mjs |
| quality | package.json | update:check | node update-system.mjs check |
| test | package.json | update:test | node updater-migration-tests.mjs |
| utility | package.json | update | node update-system.mjs apply |
| utility | package.json | rollback | node update-system.mjs rollback |
| quality | package.json | liveness | node check-liveness.mjs |
| utility | package.json | scan | node scan.mjs |
| utility | package.json | scan:full | node scan-ats-full.mjs |
| utility | package.json | validate:portals | node validate-portals.mjs |
| utility | package.json | tracker | node tracker.mjs |
| utility | package.json | patterns | node analyze-patterns.mjs |
| utility | package.json | gemini:eval | node gemini-eval.mjs |


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
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/santifer__career-ops/AGENTS.md) | agentRuntime signal |
| agentRuntime | [.agents/skills/career-ops/SKILL.md](../../../../sources/santifer__career-ops/.agents/skills/career-ops/SKILL.md) | agentRuntime signal |
| entrypoints | [scaffolder/bin/cli.mjs](../../../../sources/santifer__career-ops/scaffolder/bin/cli.mjs) | entrypoints signal |
| entrypoints | [dashboard/main.go](../../../../sources/santifer__career-ops/dashboard/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/santifer__career-ops/CLAUDE.md) | instruction signal |
| instruction | [GEMINI.md](../../../../sources/santifer__career-ops/GEMINI.md) | instruction signal |
| config | [package.json](../../../../sources/santifer__career-ops/package.json) | config signal |
| config | [scaffolder/package.json](../../../../sources/santifer__career-ops/scaffolder/package.json) | config signal |
| config | [dashboard/go.mod](../../../../sources/santifer__career-ops/dashboard/go.mod) | config signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/santifer__career-ops/.github/workflows/codeql.yml) | ci support |
| ci | [.github/workflows/dependency-review.yml](../../../../sources/santifer__career-ops/.github/workflows/dependency-review.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/santifer__career-ops/docker-compose.yml) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [scaffolder/bin/cli.mjs](../../../../sources/santifer__career-ops/scaffolder/bin/cli.mjs)<br>[dashboard/main.go](../../../../sources/santifer__career-ops/dashboard/main.go) |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/santifer__career-ops/AGENTS.md)<br>[.agents/skills/career-ops/SKILL.md](../../../../sources/santifer__career-ops/.agents/skills/career-ops/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 2 | [docs/ARCHITECTURE.md](../../../../sources/santifer__career-ops/docs/ARCHITECTURE.md)<br>[docs/roadmap-phases.jpg](../../../../sources/santifer__career-ops/docs/roadmap-phases.jpg) |
| eval | 13 | [gemini-eval.mjs](../../../../sources/santifer__career-ops/gemini-eval.mjs)<br>[test-all.mjs](../../../../sources/santifer__career-ops/test-all.mjs)<br>[test-salary-filter.mjs](../../../../sources/santifer__career-ops/test-salary-filter.mjs)<br>[tracker-columns-tests.mjs](../../../../sources/santifer__career-ops/tracker-columns-tests.mjs)<br>[updater-migration-tests.mjs](../../../../sources/santifer__career-ops/updater-migration-tests.mjs)<br>[examples/ats-normalization-test.md](../../../../sources/santifer__career-ops/examples/ats-normalization-test.md)<br>[dashboard/internal/ui/screens/pipeline_test.go](../../../../sources/santifer__career-ops/dashboard/internal/ui/screens/pipeline_test.go)<br>[dashboard/internal/ui/screens/sort_test.go](../../../../sources/santifer__career-ops/dashboard/internal/ui/screens/sort_test.go) |
| security | 2 | [SECURITY.md](../../../../sources/santifer__career-ops/SECURITY.md)<br>[.github/SECURITY.md](../../../../sources/santifer__career-ops/.github/SECURITY.md) |
| ci | 8 | [.github/workflows/codeql.yml](../../../../sources/santifer__career-ops/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/santifer__career-ops/.github/workflows/dependency-review.yml)<br>[.github/workflows/labeler.yml](../../../../sources/santifer__career-ops/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/santifer__career-ops/.github/workflows/release.yml)<br>[.github/workflows/sbom.yml](../../../../sources/santifer__career-ops/.github/workflows/sbom.yml)<br>[.github/workflows/stale.yml](../../../../sources/santifer__career-ops/.github/workflows/stale.yml)<br>[.github/workflows/test.yml](../../../../sources/santifer__career-ops/.github/workflows/test.yml)<br>[.github/workflows/welcome.yml](../../../../sources/santifer__career-ops/.github/workflows/welcome.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/santifer__career-ops/docker-compose.yml)<br>[Dockerfile](../../../../sources/santifer__career-ops/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/santifer__career-ops/AGENTS.md)<br>[CLAUDE.md](../../../../sources/santifer__career-ops/CLAUDE.md)<br>[GEMINI.md](../../../../sources/santifer__career-ops/GEMINI.md) |
| docs | 41 | [README.ar.md](../../../../sources/santifer__career-ops/README.ar.md)<br>[README.cn.md](../../../../sources/santifer__career-ops/README.cn.md)<br>[README.es.md](../../../../sources/santifer__career-ops/README.es.md)<br>[README.fr.md](../../../../sources/santifer__career-ops/README.fr.md)<br>[README.ja.md](../../../../sources/santifer__career-ops/README.ja.md)<br>[README.ko-KR.md](../../../../sources/santifer__career-ops/README.ko-KR.md)<br>[README.md](../../../../sources/santifer__career-ops/README.md)<br>[README.pl.md](../../../../sources/santifer__career-ops/README.pl.md) |
| config | 3 | [package.json](../../../../sources/santifer__career-ops/package.json)<br>[scaffolder/package.json](../../../../sources/santifer__career-ops/scaffolder/package.json)<br>[dashboard/go.mod](../../../../sources/santifer__career-ops/dashboard/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [gemini-eval.mjs](../../../../sources/santifer__career-ops/gemini-eval.mjs)<br>[test-all.mjs](../../../../sources/santifer__career-ops/test-all.mjs)<br>[test-salary-filter.mjs](../../../../sources/santifer__career-ops/test-salary-filter.mjs)<br>[tracker-columns-tests.mjs](../../../../sources/santifer__career-ops/tracker-columns-tests.mjs)<br>[updater-migration-tests.mjs](../../../../sources/santifer__career-ops/updater-migration-tests.mjs)<br>[examples/ats-normalization-test.md](../../../../sources/santifer__career-ops/examples/ats-normalization-test.md) |
| CI workflow | 8 | [.github/workflows/codeql.yml](../../../../sources/santifer__career-ops/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/santifer__career-ops/.github/workflows/dependency-review.yml)<br>[.github/workflows/labeler.yml](../../../../sources/santifer__career-ops/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/santifer__career-ops/.github/workflows/release.yml)<br>[.github/workflows/sbom.yml](../../../../sources/santifer__career-ops/.github/workflows/sbom.yml)<br>[.github/workflows/stale.yml](../../../../sources/santifer__career-ops/.github/workflows/stale.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/santifer__career-ops/docker-compose.yml)<br>[Dockerfile](../../../../sources/santifer__career-ops/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/santifer__career-ops/SECURITY.md)<br>[.github/SECURITY.md](../../../../sources/santifer__career-ops/.github/SECURITY.md) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/santifer__career-ops/AGENTS.md)<br>[CLAUDE.md](../../../../sources/santifer__career-ops/CLAUDE.md)<br>[GEMINI.md](../../../../sources/santifer__career-ops/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `.agents/skills/career-ops/SKILL.md`, `scaffolder/bin/cli.mjs`.
2. entrypoint를 따라 실행 흐름 확인: `scaffolder/bin/cli.mjs`, `dashboard/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `.agents/skills/career-ops/SKILL.md`.
4. test/eval 파일로 동작 검증: `gemini-eval.mjs`, `test-all.mjs`, `test-salary-filter.mjs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing.. 핵심 구조 신호는 JavaScript, package.json, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
