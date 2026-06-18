# zhitongblog/solomd 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A markdown editor — and the bridge to your LLM. Local-first, MIT, ~15 MB. Bundled MCP server lets Claude Code / Codex / Cursor drive your vault directly. 14 AI providers BYOK.

## 요약

- 조사 단위: `sources/zhitongblog__solomd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 903 files, 149 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/src/pages/zh/docs/mcp.astro, web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro, web/src/pages/docs/mcp.astro이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | zhitongblog/solomd |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 376 |
| Forks | 17 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zhitongblog__solomd](../../../../sources/zhitongblog__solomd) |
| 기존 보고서 | [reports/global-trending/repositories/zhitongblog__solomd.md](../../../global-trending/repositories/zhitongblog__solomd.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 903 / 149 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .github, app, app-store, aur-solomd-bin, brand, dev-mcp, distribution, docs, fdroid, ios-shortcuts, marketing, marketing-zh, marketplace, mcp-server, scripts, web, web-clipper |
| 상위 확장자 | .md: 216, .ts: 128, .png: 126, .astro: 100, .vue: 95, .rs: 62, .sh: 26, .yml: 26, .json: 18, (none): 15, .mjs: 12, .css: 10 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| web | source boundary | 44 |
| docs | documentation surface | 10 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| app-store | top-level component | 1 |
| aur-solomd-bin | top-level component | 1 |
| brand | top-level component | 1 |
| dev-mcp | top-level component | 1 |
| distribution | top-level component | 1 |
| fdroid | top-level component | 1 |
| ios-shortcuts | top-level component | 1 |
| marketing | top-level component | 1 |
| marketing-zh | top-level component | 1 |
| marketplace | top-level component | 1 |
| mcp-server | source boundary | 1 |
| scripts | top-level component | 1 |
| web-clipper | source boundary | 1 |


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
| mcp | [web/src/pages/zh/docs/mcp.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/docs/mcp.astro) | mcp signal |
| mcp | [web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro) | mcp signal |
| mcp | [web/src/pages/docs/mcp.astro](../../../../sources/zhitongblog__solomd/web/src/pages/docs/mcp.astro) | mcp signal |
| mcp | [web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro](../../../../sources/zhitongblog__solomd/web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro) | mcp signal |
| agentRuntime | [web/src/pages/agents.astro](../../../../sources/zhitongblog__solomd/web/src/pages/agents.astro) | agentRuntime signal |
| agentRuntime | [web/src/pages/zh/agents.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/agents.astro) | agentRuntime signal |
| agentRuntime | [mcp-server/src/tools.rs](../../../../sources/zhitongblog__solomd/mcp-server/src/tools.rs) | agentRuntime signal |
| agentRuntime | [marketplace/claude-code-skill/solomd/SKILL.md](../../../../sources/zhitongblog__solomd/marketplace/claude-code-skill/solomd/SKILL.md) | agentRuntime signal |
| entrypoints | [mcp-server/src/main.rs](../../../../sources/zhitongblog__solomd/mcp-server/src/main.rs) | entrypoints signal |
| entrypoints | [dev-mcp/src/main.rs](../../../../sources/zhitongblog__solomd/dev-mcp/src/main.rs) | entrypoints signal |
| entrypoints | [app/src-tauri/src/main.rs](../../../../sources/zhitongblog__solomd/app/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [app/src/App.vue](../../../../sources/zhitongblog__solomd/app/src/App.vue) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [mcp-server/src/main.rs](../../../../sources/zhitongblog__solomd/mcp-server/src/main.rs)<br>[dev-mcp/src/main.rs](../../../../sources/zhitongblog__solomd/dev-mcp/src/main.rs)<br>[app/src-tauri/src/main.rs](../../../../sources/zhitongblog__solomd/app/src-tauri/src/main.rs)<br>[app/src/App.vue](../../../../sources/zhitongblog__solomd/app/src/App.vue)<br>[app/src/main.ts](../../../../sources/zhitongblog__solomd/app/src/main.ts) |
| agentRuntime | 22 | [web/src/pages/agents.astro](../../../../sources/zhitongblog__solomd/web/src/pages/agents.astro)<br>[web/src/pages/zh/agents.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/agents.astro)<br>[mcp-server/src/tools.rs](../../../../sources/zhitongblog__solomd/mcp-server/src/tools.rs)<br>[marketplace/claude-code-skill/solomd/SKILL.md](../../../../sources/zhitongblog__solomd/marketplace/claude-code-skill/solomd/SKILL.md)<br>[marketplace/_shared/tools.md](../../../../sources/zhitongblog__solomd/marketplace/_shared/tools.md)<br>[docs/agents.md](../../../../sources/zhitongblog__solomd/docs/agents.md)<br>[distribution/manifests/chocolatey/tools/chocolateyinstall.ps1](../../../../sources/zhitongblog__solomd/distribution/manifests/chocolatey/tools/chocolateyinstall.ps1)<br>[distribution/manifests/chocolatey/tools/chocolateyuninstall.ps1](../../../../sources/zhitongblog__solomd/distribution/manifests/chocolatey/tools/chocolateyuninstall.ps1) |
| mcp | 30 | [web/src/pages/zh/docs/mcp.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/docs/mcp.astro)<br>[web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro)<br>[web/src/pages/docs/mcp.astro](../../../../sources/zhitongblog__solomd/web/src/pages/docs/mcp.astro)<br>[web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro](../../../../sources/zhitongblog__solomd/web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro)<br>[scripts/build-mcp-sidecar.sh](../../../../sources/zhitongblog__solomd/scripts/build-mcp-sidecar.sh)<br>[scripts/install-mcp.sh](../../../../sources/zhitongblog__solomd/scripts/install-mcp.sh)<br>[scripts/publish-mcp-crate.sh](../../../../sources/zhitongblog__solomd/scripts/publish-mcp-crate.sh)<br>[mcp-server/.gitignore](../../../../sources/zhitongblog__solomd/mcp-server/.gitignore) |
| retrieval | 29 | [web/src/pages/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/index.astro)<br>[web/src/pages/zh/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/index.astro)<br>[web/src/pages/zh/docs/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/docs/index.astro)<br>[web/src/pages/zh/compare/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/compare/index.astro)<br>[web/src/pages/zh/blog/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/blog/index.astro)<br>[web/src/pages/uk/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/uk/index.astro)<br>[web/src/pages/tr/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/tr/index.astro)<br>[web/src/pages/sv/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/sv/index.astro) |
| spec | 1 | [docs/roadmap.md](../../../../sources/zhitongblog__solomd/docs/roadmap.md) |
| eval | 29 | [web-clipper/test/live-driver-entry.ts](../../../../sources/zhitongblog__solomd/web-clipper/test/live-driver-entry.ts)<br>[web-clipper/test/fixtures/article.html](../../../../sources/zhitongblog__solomd/web-clipper/test/fixtures/article.html)<br>[web-clipper/scripts/smoke-test.sh](../../../../sources/zhitongblog__solomd/web-clipper/scripts/smoke-test.sh)<br>[web-clipper/scripts/test-markdown.mjs](../../../../sources/zhitongblog__solomd/web-clipper/scripts/test-markdown.mjs)<br>[scripts/v25-slash-self-test.mjs](../../../../sources/zhitongblog__solomd/scripts/v25-slash-self-test.mjs)<br>[scripts/v4-self-test.sh](../../../../sources/zhitongblog__solomd/scripts/v4-self-test.sh)<br>[mcp-server/tests/export_test.rs](../../../../sources/zhitongblog__solomd/mcp-server/tests/export_test.rs)<br>[mcp-server/tests/multi_workspace.rs](../../../../sources/zhitongblog__solomd/mcp-server/tests/multi_workspace.rs) |
| security | 3 | [web/src/pages/security.astro](../../../../sources/zhitongblog__solomd/web/src/pages/security.astro)<br>[web/src/pages/zh/security.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/security.astro)<br>[app/src/lib/cm-ime-guard.ts](../../../../sources/zhitongblog__solomd/app/src/lib/cm-ime-guard.ts) |
| ci | 3 | [.github/workflows/indexnow.yml](../../../../sources/zhitongblog__solomd/.github/workflows/indexnow.yml)<br>[.github/workflows/mirror-gitee.yml](../../../../sources/zhitongblog__solomd/.github/workflows/mirror-gitee.yml)<br>[.github/workflows/release.yml](../../../../sources/zhitongblog__solomd/.github/workflows/release.yml) |
| container | 1 | [marketplace/smithery/Dockerfile](../../../../sources/zhitongblog__solomd/marketplace/smithery/Dockerfile) |
| instruction | 1 | [docs/agents.md](../../../../sources/zhitongblog__solomd/docs/agents.md) |
| docs | 48 | [README.de.md](../../../../sources/zhitongblog__solomd/README.de.md)<br>[README.es.md](../../../../sources/zhitongblog__solomd/README.es.md)<br>[README.fr.md](../../../../sources/zhitongblog__solomd/README.fr.md)<br>[README.it.md](../../../../sources/zhitongblog__solomd/README.it.md)<br>[README.ja.md](../../../../sources/zhitongblog__solomd/README.ja.md)<br>[README.ko.md](../../../../sources/zhitongblog__solomd/README.ko.md)<br>[README.md](../../../../sources/zhitongblog__solomd/README.md)<br>[README.nl.md](../../../../sources/zhitongblog__solomd/README.nl.md) |
| config | 12 | [web-clipper/package.json](../../../../sources/zhitongblog__solomd/web-clipper/package.json)<br>[web-clipper/tsconfig.json](../../../../sources/zhitongblog__solomd/web-clipper/tsconfig.json)<br>[web/package.json](../../../../sources/zhitongblog__solomd/web/package.json)<br>[web/tsconfig.json](../../../../sources/zhitongblog__solomd/web/tsconfig.json)<br>[mcp-server/Cargo.lock](../../../../sources/zhitongblog__solomd/mcp-server/Cargo.lock)<br>[mcp-server/Cargo.toml](../../../../sources/zhitongblog__solomd/mcp-server/Cargo.toml)<br>[dev-mcp/Cargo.lock](../../../../sources/zhitongblog__solomd/dev-mcp/Cargo.lock)<br>[dev-mcp/Cargo.toml](../../../../sources/zhitongblog__solomd/dev-mcp/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 29 | [web-clipper/test/live-driver-entry.ts](../../../../sources/zhitongblog__solomd/web-clipper/test/live-driver-entry.ts)<br>[web-clipper/test/fixtures/article.html](../../../../sources/zhitongblog__solomd/web-clipper/test/fixtures/article.html)<br>[web-clipper/scripts/smoke-test.sh](../../../../sources/zhitongblog__solomd/web-clipper/scripts/smoke-test.sh)<br>[web-clipper/scripts/test-markdown.mjs](../../../../sources/zhitongblog__solomd/web-clipper/scripts/test-markdown.mjs)<br>[scripts/v25-slash-self-test.mjs](../../../../sources/zhitongblog__solomd/scripts/v25-slash-self-test.mjs)<br>[scripts/v4-self-test.sh](../../../../sources/zhitongblog__solomd/scripts/v4-self-test.sh) |
| CI workflow | 3 | [.github/workflows/indexnow.yml](../../../../sources/zhitongblog__solomd/.github/workflows/indexnow.yml)<br>[.github/workflows/mirror-gitee.yml](../../../../sources/zhitongblog__solomd/.github/workflows/mirror-gitee.yml)<br>[.github/workflows/release.yml](../../../../sources/zhitongblog__solomd/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [marketplace/smithery/Dockerfile](../../../../sources/zhitongblog__solomd/marketplace/smithery/Dockerfile) |
| 보안/정책 | 3 | [web/src/pages/security.astro](../../../../sources/zhitongblog__solomd/web/src/pages/security.astro)<br>[web/src/pages/zh/security.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/security.astro)<br>[app/src/lib/cm-ime-guard.ts](../../../../sources/zhitongblog__solomd/app/src/lib/cm-ime-guard.ts) |
| 에이전트 지시문 | 1 | [docs/agents.md](../../../../sources/zhitongblog__solomd/docs/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `web/src/pages/zh/docs/mcp.astro`, `web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro`, `web/src/pages/docs/mcp.astro`.
2. entrypoint를 따라 실행 흐름 확인: `mcp-server/src/main.rs`, `dev-mcp/src/main.rs`, `app/src-tauri/src/main.rs`.
3. agent/tool runtime 매핑: `web/src/pages/agents.astro`, `web/src/pages/zh/agents.astro`, `mcp-server/src/tools.rs`.
4. retrieval/memory/indexing 확인: `web/src/pages/index.astro`, `web/src/pages/zh/index.astro`, `web/src/pages/zh/docs/index.astro`.
5. test/eval 파일로 동작 검증: `web-clipper/test/live-driver-entry.ts`, `web-clipper/test/fixtures/article.html`, `web-clipper/scripts/smoke-test.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A markdown editor — and the bridge to your LLM. Local first, MIT, ~15 MB. Bundled MCP server lets Claude Code / Codex / . 핵심 구조 신호는 TypeScript, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
