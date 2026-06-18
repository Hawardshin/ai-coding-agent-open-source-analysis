# bitbonsai/mcpvault 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A lightweight Model Context Protocol (MCP) server for safe Obsidian vault access

## 요약

- 조사 단위: `sources/bitbonsai__mcpvault` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 107 files, 19 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=website/public/mcp-obsidian-1-min.mp4이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bitbonsai/mcpvault |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Astro |
| Stars | 1429 |
| Forks | 111 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/bitbonsai__mcpvault](../../../../sources/bitbonsai__mcpvault) |
| 기존 보고서 | [reports/global-trending/repositories/bitbonsai__mcpvault.md](../../../global-trending/repositories/bitbonsai__mcpvault.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 107 / 19 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, scripts, skills, src, website |
| 상위 확장자 | .md: 24, .ts: 22, .astro: 20, .json: 6, .yml: 5, (none): 5, .tsx: 4, .png: 3, .html: 2, .jpg: 2, .mjs: 2, .sh: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 10 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| website | documentation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | tsx server.ts |
| serve-dev | package.json | website | cd website && bun dev |
| build | package.json | build | tsc --project tsconfig.build.json |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | prepublishOnly | npm run build && npm test |
| utility | package.json | prepack | npm install |
| utility | package.json | publish:dry | npm publish --dry-run |
| utility | package.json | publish:beta | npm publish --tag beta |
| test | package.json | publish:latest | npm publish |
| entrypoint | package.json bin | server.js | dist/server.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| mcp | [website/public/mcp-obsidian-1-min.mp4](../../../../sources/bitbonsai__mcpvault/website/public/mcp-obsidian-1-min.mp4) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/bitbonsai__mcpvault/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/src/pages/skill.astro](../../../../sources/bitbonsai__mcpvault/website/src/pages/skill.astro) | agentRuntime signal |
| agentRuntime | [website/public/skill.md](../../../../sources/bitbonsai__mcpvault/website/public/skill.md) | agentRuntime signal |
| entrypoints | [server.ts](../../../../sources/bitbonsai__mcpvault/server.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/bitbonsai__mcpvault/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/bitbonsai__mcpvault/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/bitbonsai__mcpvault/tsconfig.json) | config signal |
| config | [website/package.json](../../../../sources/bitbonsai__mcpvault/website/package.json) | config signal |
| config | [website/tsconfig.json](../../../../sources/bitbonsai__mcpvault/website/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [server.ts](../../../../sources/bitbonsai__mcpvault/server.ts)<br>[src/index.ts](../../../../sources/bitbonsai__mcpvault/src/index.ts) |
| agentRuntime | 12 | [AGENTS.md](../../../../sources/bitbonsai__mcpvault/AGENTS.md)<br>[website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md)<br>[website/src/pages/skill.astro](../../../../sources/bitbonsai__mcpvault/website/src/pages/skill.astro)<br>[website/public/skill.md](../../../../sources/bitbonsai__mcpvault/website/public/skill.md)<br>[skills/triage/SKILL.md](../../../../sources/bitbonsai__mcpvault/skills/triage/SKILL.md)<br>[skills/triage/resources/comment-policy.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/comment-policy.md)<br>[skills/triage/resources/finding-rules.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/finding-rules.md)<br>[skills/triage/resources/state-schema.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/state-schema.md) |
| mcp | 1 | [website/public/mcp-obsidian-1-min.mp4](../../../../sources/bitbonsai__mcpvault/website/public/mcp-obsidian-1-min.mp4) |
| retrieval | 3 | [website/src/pages/index.astro](../../../../sources/bitbonsai__mcpvault/website/src/pages/index.astro)<br>[website/public/index.md](../../../../sources/bitbonsai__mcpvault/website/public/index.md)<br>[src/index.ts](../../../../sources/bitbonsai__mcpvault/src/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 7 | [src/createServer.test.ts](../../../../sources/bitbonsai__mcpvault/src/createServer.test.ts)<br>[src/filesystem.test.ts](../../../../sources/bitbonsai__mcpvault/src/filesystem.test.ts)<br>[src/frontmatter.test.ts](../../../../sources/bitbonsai__mcpvault/src/frontmatter.test.ts)<br>[src/integration.test.ts](../../../../sources/bitbonsai__mcpvault/src/integration.test.ts)<br>[src/pathfilter.test.ts](../../../../sources/bitbonsai__mcpvault/src/pathfilter.test.ts)<br>[src/search.test.ts](../../../../sources/bitbonsai__mcpvault/src/search.test.ts)<br>[src/uri.test.ts](../../../../sources/bitbonsai__mcpvault/src/uri.test.ts) |
| security | 2 | [SECURITY.md](../../../../sources/bitbonsai__mcpvault/SECURITY.md)<br>[skills/triage/resources/comment-policy.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/comment-policy.md) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/codeql.yml)<br>[.github/workflows/publish.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/publish.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/scorecard.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/bitbonsai__mcpvault/AGENTS.md)<br>[website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md) |
| docs | 61 | [README.md](../../../../sources/bitbonsai__mcpvault/README.md)<br>[website/.gitignore](../../../../sources/bitbonsai__mcpvault/website/.gitignore)<br>[website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md)<br>[website/astro.config.mjs](../../../../sources/bitbonsai__mcpvault/website/astro.config.mjs)<br>[website/package.json](../../../../sources/bitbonsai__mcpvault/website/package.json)<br>[website/README.md](../../../../sources/bitbonsai__mcpvault/website/README.md)<br>[website/tailwind.config.mjs](../../../../sources/bitbonsai__mcpvault/website/tailwind.config.mjs)<br>[website/tsconfig.json](../../../../sources/bitbonsai__mcpvault/website/tsconfig.json) |
| config | 4 | [package.json](../../../../sources/bitbonsai__mcpvault/package.json)<br>[tsconfig.json](../../../../sources/bitbonsai__mcpvault/tsconfig.json)<br>[website/package.json](../../../../sources/bitbonsai__mcpvault/website/package.json)<br>[website/tsconfig.json](../../../../sources/bitbonsai__mcpvault/website/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [src/createServer.test.ts](../../../../sources/bitbonsai__mcpvault/src/createServer.test.ts)<br>[src/filesystem.test.ts](../../../../sources/bitbonsai__mcpvault/src/filesystem.test.ts)<br>[src/frontmatter.test.ts](../../../../sources/bitbonsai__mcpvault/src/frontmatter.test.ts)<br>[src/integration.test.ts](../../../../sources/bitbonsai__mcpvault/src/integration.test.ts)<br>[src/pathfilter.test.ts](../../../../sources/bitbonsai__mcpvault/src/pathfilter.test.ts)<br>[src/search.test.ts](../../../../sources/bitbonsai__mcpvault/src/search.test.ts) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/codeql.yml)<br>[.github/workflows/publish.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/publish.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/bitbonsai__mcpvault/.github/workflows/scorecard.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/bitbonsai__mcpvault/SECURITY.md)<br>[skills/triage/resources/comment-policy.md](../../../../sources/bitbonsai__mcpvault/skills/triage/resources/comment-policy.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/bitbonsai__mcpvault/AGENTS.md)<br>[website/AGENTS.md](../../../../sources/bitbonsai__mcpvault/website/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `website/public/mcp-obsidian-1-min.mp4`, `AGENTS.md`, `website/AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `website/AGENTS.md`, `website/src/pages/skill.astro`.
4. retrieval/memory/indexing 확인: `website/src/pages/index.astro`, `website/public/index.md`, `src/index.ts`.
5. test/eval 파일로 동작 검증: `src/createServer.test.ts`, `src/filesystem.test.ts`, `src/frontmatter.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A lightweight Model Context Protocol MCP server for safe Obsidian vault access. 핵심 구조 신호는 Astro, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
