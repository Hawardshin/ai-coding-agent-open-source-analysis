# modu-ai/cowork-plugins 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

모두의 AI (MoAI) — Claude Cowork & Claude Code 한국 실무 도메인 AI 하네스·플러그인 마켓플레이스. 사업계획서·세무·법률·HR·마케팅·커머스·BI·콘텐츠 도메인 스킬·에이전트·워크플로우. Korean B2B + office docs (HWPX/DOCX/XLSX/PPTX/PDF) + AI media (image/video/voice). AI-slop 검수 + humanize-korean 내장.

## 요약

- 조사 단위: `sources/modu-ai__cowork-plugins` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,286 files, 545 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=moai-tutor/.mcp.json, moai-media/.mcp.json, moai-marketing/.mcp.json이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modu-ai/cowork-plugins |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | HTML |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modu-ai__cowork-plugins](../../../../sources/modu-ai__cowork-plugins) |
| 기존 보고서 | [reports/korea-trending/repositories/modu-ai__cowork-plugins.md](../../../korea-trending/repositories/modu-ai__cowork-plugins.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1286 / 545 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude-plugin, .git_hooks, .github, diagrams, docs, docs-site, e2e, mcp-servers, moai-bi, moai-book, moai-business, moai-career, moai-commerce, moai-comms, moai-content, moai-core, moai-data, moai-design, moai-education, moai-finance |
| 상위 확장자 | .md: 762, .png: 93, .html: 88, .js: 55, .py: 53, .json: 50, .yaml: 46, .woff: 27, .woff2: 27, .sh: 21, .yml: 10, (none): 9 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| diagrams | top-level component | 1 |
| docs-site | documentation surface | 1 |
| e2e | validation surface | 1 |
| mcp-servers | source boundary | 1 |
| moai-bi | top-level component | 1 |
| moai-book | top-level component | 1 |
| moai-business | top-level component | 1 |
| moai-career | top-level component | 1 |
| moai-commerce | top-level component | 1 |
| moai-comms | top-level component | 1 |
| moai-content | top-level component | 1 |
| moai-core | top-level component | 1 |
| moai-data | top-level component | 1 |
| moai-design | top-level component | 1 |
| moai-education | top-level component | 1 |
| moai-finance | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | echo no-unit-tests-configured-e2e-via-playwright |
| test | package.json | test:e2e | playwright test |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | ci-local | make ci-local |
| utility | Makefile | pr-merge | make pr-merge |


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
| mcp | [moai-tutor/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-tutor/.mcp.json) | mcp signal |
| mcp | [moai-media/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-media/.mcp.json) | mcp signal |
| mcp | [moai-marketing/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-marketing/.mcp.json) | mcp signal |
| mcp | [moai-legal/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-legal/.mcp.json) | mcp signal |
| agentRuntime | [scripts/skill-lint.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-lint.sh) | agentRuntime signal |
| agentRuntime | [scripts/skill-test-runner.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-test-runner.sh) | agentRuntime signal |
| agentRuntime | [moai-wealth/skills/wealth-roadmap/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/wealth-roadmap/SKILL.md) | agentRuntime signal |
| agentRuntime | [moai-wealth/skills/personal-tax-saver/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/personal-tax-saver/SKILL.md) | agentRuntime signal |
| entrypoints | [mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py) | entrypoints signal |
| entrypoints | [mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py) | entrypoints signal |
| instruction | [moai-core/skills/project/references/templates/CLAUDE.md.tmpl](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/project/references/templates/CLAUDE.md.tmpl) | instruction signal |
| config | [Makefile](../../../../sources/modu-ai__cowork-plugins/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py)<br>[mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py) |
| agentRuntime | 656 | [scripts/skill-lint.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-lint.sh)<br>[scripts/skill-test-runner.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-test-runner.sh)<br>[moai-wealth/skills/wealth-roadmap/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/wealth-roadmap/SKILL.md)<br>[moai-wealth/skills/personal-tax-saver/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/personal-tax-saver/SKILL.md)<br>[moai-wealth/skills/invest-primer/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/invest-primer/SKILL.md)<br>[moai-wealth/skills/insurance-fit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/insurance-fit/SKILL.md)<br>[moai-wealth/skills/household-budget/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/household-budget/SKILL.md)<br>[moai-wealth/skills/econ-literacy/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/econ-literacy/SKILL.md) |
| mcp | 40 | [moai-tutor/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-tutor/.mcp.json)<br>[moai-media/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-media/.mcp.json)<br>[moai-marketing/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-marketing/.mcp.json)<br>[moai-legal/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-legal/.mcp.json)<br>[moai-core/skills/mcp-connector-setup/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/mcp-connector-setup/SKILL.md)<br>[moai-content/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-content/.mcp.json)<br>[moai-business/.mcp.json](../../../../sources/modu-ai__cowork-plugins/moai-business/.mcp.json)<br>[mcp-servers/moai-ads-audit/CONNECTORS.md](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/CONNECTORS.md) |
| retrieval | 74 | [playwright-report/index.html](../../../../sources/modu-ai__cowork-plugins/playwright-report/index.html)<br>[moai-core/skills/project/references/core/INDEX.md](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/project/references/core/INDEX.md)<br>[docs-site/themes/hugo-geekdoc/static/js/1226-93ad04cb.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/1226-93ad04cb.chunk.min.js)<br>[docs-site/themes/hugo-geekdoc/static/js/1550-fa53e251.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/1550-fa53e251.chunk.min.js)<br>[docs-site/themes/hugo-geekdoc/static/js/1587-cd1c2b30.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/1587-cd1c2b30.chunk.min.js)<br>[docs-site/themes/hugo-geekdoc/static/js/165-4408c937.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/165-4408c937.chunk.min.js)<br>[docs-site/themes/hugo-geekdoc/static/js/165-4408c937.chunk.min.js.LICENSE.txt](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/165-4408c937.chunk.min.js.LICENSE.txt)<br>[docs-site/themes/hugo-geekdoc/static/js/1947-58c2d85f.chunk.min.js](../../../../sources/modu-ai__cowork-plugins/docs-site/themes/hugo-geekdoc/static/js/1947-58c2d85f.chunk.min.js) |
| spec | 113 | [moai-wealth/skills/wealth-roadmap/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/skills/wealth-roadmap/SKILL.md)<br>[moai-wealth/agents/wealth-roadmap-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/agents/wealth-roadmap-coordinator.md)<br>[moai-product/skills/spec-writer/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/SKILL.md)<br>[moai-product/skills/spec-writer/references/ai-strategy.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/ai-strategy.md)<br>[moai-product/skills/spec-writer/references/product-manager.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/product-manager.md)<br>[moai-product/skills/roadmap-manager/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/SKILL.md)<br>[moai-product/skills/roadmap-manager/references/diversity-inclusion.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/references/diversity-inclusion.md)<br>[moai-product/skills/roadmap-manager/references/partnership-development.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/references/partnership-development.md) |
| eval | 61 | [test-results/.last-run.json](../../../../sources/modu-ai__cowork-plugins/test-results/.last-run.json)<br>[scripts/skill-test-runner.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-test-runner.sh)<br>[moai-sales/skills/proposal-writer/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-sales/skills/proposal-writer/tests/test-cases.yaml)<br>[moai-product/skills/ux-designer/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/ux-designer/tests/test-cases.yaml)<br>[moai-product/skills/spec-writer/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/SKILL.md)<br>[moai-product/skills/spec-writer/references/ai-strategy.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/ai-strategy.md)<br>[moai-product/skills/spec-writer/references/product-manager.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/product-manager.md)<br>[moai-pm/skills/weekly-report/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-pm/skills/weekly-report/tests/test-cases.yaml) |
| security | 51 | [moai-product/skills/roadmap-manager/references/sustainability-audit.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/references/sustainability-audit.md)<br>[moai-product/agents/product-ux-audit-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-product/agents/product-ux-audit-coordinator.md)<br>[moai-marketing/skills/seo-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/seo-audit/SKILL.md)<br>[moai-marketing/skills/pixel-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/pixel-audit/SKILL.md)<br>[moai-marketing/skills/landing-page-conversion-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/landing-page-conversion-audit/SKILL.md)<br>[moai-marketing/agents/marketing-audit-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/agents/marketing-audit-coordinator.md)<br>[moai-legal/skills/compliance-check/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-legal/skills/compliance-check/SKILL.md)<br>[moai-legal/skills/compliance-check/references/2026-law-changes.md](../../../../sources/modu-ai__cowork-plugins/moai-legal/skills/compliance-check/references/2026-law-changes.md) |
| ci | 7 | [.github/workflows/claude-code-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/claude.yml)<br>[.github/workflows/codex-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/codex-review.yml)<br>[.github/workflows/docs-site-sync.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/docs-site-sync.yml)<br>[.github/workflows/gemini-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/gemini-review.yml)<br>[.github/workflows/glm-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/glm-review.yml)<br>[.github/workflows/llm-panel.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/llm-panel.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [moai-core/skills/project/references/templates/CLAUDE.md.tmpl](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/project/references/templates/CLAUDE.md.tmpl) |
| docs | 43 | [README.md](../../../../sources/modu-ai__cowork-plugins/README.md)<br>[moai-wealth/README.md](../../../../sources/modu-ai__cowork-plugins/moai-wealth/README.md)<br>[moai-tutor/README.md](../../../../sources/modu-ai__cowork-plugins/moai-tutor/README.md)<br>[moai-support/README.md](../../../../sources/modu-ai__cowork-plugins/moai-support/README.md)<br>[moai-sales/README.md](../../../../sources/modu-ai__cowork-plugins/moai-sales/README.md)<br>[moai-research/README.md](../../../../sources/modu-ai__cowork-plugins/moai-research/README.md)<br>[moai-public-data/README.md](../../../../sources/modu-ai__cowork-plugins/moai-public-data/README.md)<br>[moai-productivity/README.md](../../../../sources/modu-ai__cowork-plugins/moai-productivity/README.md) |
| config | 5 | [Makefile](../../../../sources/modu-ai__cowork-plugins/Makefile)<br>[package.json](../../../../sources/modu-ai__cowork-plugins/package.json)<br>[mcp-servers/moai-ads-audit/pyproject.toml](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/pyproject.toml)<br>[mcp-servers/moai-ads-audit/uv.lock](../../../../sources/modu-ai__cowork-plugins/mcp-servers/moai-ads-audit/uv.lock)<br>[docs-site/scripts/render/package.json](../../../../sources/modu-ai__cowork-plugins/docs-site/scripts/render/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 61 | [test-results/.last-run.json](../../../../sources/modu-ai__cowork-plugins/test-results/.last-run.json)<br>[scripts/skill-test-runner.sh](../../../../sources/modu-ai__cowork-plugins/scripts/skill-test-runner.sh)<br>[moai-sales/skills/proposal-writer/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-sales/skills/proposal-writer/tests/test-cases.yaml)<br>[moai-product/skills/ux-designer/tests/test-cases.yaml](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/ux-designer/tests/test-cases.yaml)<br>[moai-product/skills/spec-writer/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/SKILL.md)<br>[moai-product/skills/spec-writer/references/ai-strategy.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/spec-writer/references/ai-strategy.md) |
| CI workflow | 7 | [.github/workflows/claude-code-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/claude.yml)<br>[.github/workflows/codex-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/codex-review.yml)<br>[.github/workflows/docs-site-sync.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/docs-site-sync.yml)<br>[.github/workflows/gemini-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/gemini-review.yml)<br>[.github/workflows/glm-review.yml](../../../../sources/modu-ai__cowork-plugins/.github/workflows/glm-review.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 51 | [moai-product/skills/roadmap-manager/references/sustainability-audit.md](../../../../sources/modu-ai__cowork-plugins/moai-product/skills/roadmap-manager/references/sustainability-audit.md)<br>[moai-product/agents/product-ux-audit-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-product/agents/product-ux-audit-coordinator.md)<br>[moai-marketing/skills/seo-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/seo-audit/SKILL.md)<br>[moai-marketing/skills/pixel-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/pixel-audit/SKILL.md)<br>[moai-marketing/skills/landing-page-conversion-audit/SKILL.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/skills/landing-page-conversion-audit/SKILL.md)<br>[moai-marketing/agents/marketing-audit-coordinator.md](../../../../sources/modu-ai__cowork-plugins/moai-marketing/agents/marketing-audit-coordinator.md) |
| 에이전트 지시문 | 1 | [moai-core/skills/project/references/templates/CLAUDE.md.tmpl](../../../../sources/modu-ai__cowork-plugins/moai-core/skills/project/references/templates/CLAUDE.md.tmpl) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `moai-tutor/.mcp.json`, `moai-media/.mcp.json`, `moai-marketing/.mcp.json`.
2. entrypoint를 따라 실행 흐름 확인: `mcp-servers/moai-ads-audit/src/moai_ads_audit/__main__.py`, `mcp-servers/moai-ads-audit/src/moai_ads_audit/server.py`.
3. agent/tool runtime 매핑: `scripts/skill-lint.sh`, `scripts/skill-test-runner.sh`, `moai-wealth/skills/wealth-roadmap/SKILL.md`.
4. retrieval/memory/indexing 확인: `playwright-report/index.html`, `moai-core/skills/project/references/core/INDEX.md`, `docs-site/themes/hugo-geekdoc/static/js/1226-93ad04cb.chunk.min.js`.
5. test/eval 파일로 동작 검증: `test-results/.last-run.json`, `scripts/skill-test-runner.sh`, `moai-sales/skills/proposal-writer/tests/test-cases.yaml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 모두의 AI MoAI — Claude Cowork & Claude Code 한국 실무 도메인 AI 하네스·플러그인 마켓플레이스. 사업계획서·세무·법률·HR·마케팅·커머스·BI·콘텐츠 도메인 스킬·에이전트·워크플로우.. 핵심 구조 신호는 HTML, package.json, Makefile, README.md, LICENSE, playwright이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
