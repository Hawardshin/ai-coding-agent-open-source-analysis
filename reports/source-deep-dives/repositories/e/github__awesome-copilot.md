# github/awesome-copilot 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 2566 files, 1133 directories.

## 요약

- 조사 단위: `sources/github__awesome-copilot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,562 files, 1,132 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=website/src/content/docs/learning-hub/understanding-mcp-servers.md, website/src/content/docs/learning-hub/cli-for-beginners/06-mcp-servers.md, website/public/images/learning-hub/copilot-cli-for-beginners/06/configuring-mcp-servers.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | github/awesome-copilot |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/github__awesome-copilot](../../../../sources/github__awesome-copilot) |
| 기존 보고서 | [reports/clone-structures/github__awesome-copilot.md](../../../clone-structures/github__awesome-copilot.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2562 / 1132 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, .schemas, agents, cookbook, docs, eng, extensions, hooks, instructions, plugins, skills, website, workflows |
| 상위 확장자 | .md: 1903, .json: 134, .png: 122, .py: 45, .mjs: 43, .m4a: 40, .yml: 38, .ts: 37, .astro: 21, .sh: 19, .gif: 17, (none): 15 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| cookbook | top-level component | 1 |
| docs | documentation surface | 1 |
| eng | top-level component | 1 |
| extensions | top-level component | 1 |
| hooks | top-level component | 1 |
| instructions | top-level component | 1 |
| plugins | top-level component | 1 |
| skills | top-level component | 1 |
| website | documentation surface | 1 |
| workflows | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | npm run build |
| build | package.json | build | node ./eng/update-readme.mjs && node ./eng/generate-marketplace.mjs |
| utility | package.json | contributors:add | all-contributors add |
| utility | package.json | contributors:report | node ./eng/contributor-report.mjs |
| utility | package.json | contributors:generate | all-contributors generate |
| quality | package.json | contributors:check | all-contributors check |
| utility | package.json | plugin:validate | node ./eng/validate-plugins.mjs |
| utility | package.json | plugin:create | node ./eng/create-plugin.mjs |
| utility | package.json | skill:validate | node ./eng/validate-skills.mjs |
| utility | package.json | skill:create | node ./eng/create-skill.mjs |
| utility | package.json | plugin:clean | node ./eng/clean-materialized-plugins.mjs |
| utility | package.json | plugin:generate-marketplace | node ./eng/generate-marketplace.mjs |
| utility | package.json | website:data | node ./eng/generate-website-data.mjs |
| serve-dev | package.json | website:dev | npm run website:data && npm run --prefix website dev |
| build | package.json | website:build | npm run build && npm run website:data && npm run --prefix website build |
| utility | package.json | website:preview | npm run --prefix website preview |


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
| mcp | [website/src/content/docs/learning-hub/understanding-mcp-servers.md](../../../../sources/github__awesome-copilot/website/src/content/docs/learning-hub/understanding-mcp-servers.md) | mcp signal |
| mcp | [website/src/content/docs/learning-hub/cli-for-beginners/06-mcp-servers.md](../../../../sources/github__awesome-copilot/website/src/content/docs/learning-hub/cli-for-beginners/06-mcp-servers.md) | mcp signal |
| mcp | [website/public/images/learning-hub/copilot-cli-for-beginners/06/configuring-mcp-servers.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/06/configuring-mcp-servers.png) | mcp signal |
| mcp | [website/public/images/learning-hub/copilot-cli-for-beginners/06/mcp-status-demo.gif](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/06/mcp-status-demo.gif) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/github__awesome-copilot/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/src/scripts/pages/agents-render.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/agents-render.ts) | agentRuntime signal |
| agentRuntime | [website/src/scripts/pages/agents.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/agents.ts) | agentRuntime signal |
| agentRuntime | [website/src/scripts/pages/hooks-render.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/hooks-render.ts) | agentRuntime signal |
| instruction | [skills/setup-my-iq/assets/templates/AGENTS.md](../../../../sources/github__awesome-copilot/skills/setup-my-iq/assets/templates/AGENTS.md) | instruction signal |
| instruction | [skills/copilot-instructions-blueprint-generator/SKILL.md](../../../../sources/github__awesome-copilot/skills/copilot-instructions-blueprint-generator/SKILL.md) | instruction signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/github__awesome-copilot/.github/copilot-instructions.md) | instruction signal |
| config | [package.json](../../../../sources/github__awesome-copilot/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1716 | [AGENTS.md](../../../../sources/github__awesome-copilot/AGENTS.md)<br>[website/src/scripts/pages/agents-render.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/agents-render.ts)<br>[website/src/scripts/pages/agents.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/agents.ts)<br>[website/src/scripts/pages/hooks-render.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/hooks-render.ts)<br>[website/src/scripts/pages/hooks.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/hooks.ts)<br>[website/src/scripts/pages/skills-render.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/skills-render.ts)<br>[website/src/scripts/pages/skills.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/skills.ts)<br>[website/src/scripts/pages/tools-render.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/tools-render.ts) |
| mcp | 125 | [website/src/content/docs/learning-hub/understanding-mcp-servers.md](../../../../sources/github__awesome-copilot/website/src/content/docs/learning-hub/understanding-mcp-servers.md)<br>[website/src/content/docs/learning-hub/cli-for-beginners/06-mcp-servers.md](../../../../sources/github__awesome-copilot/website/src/content/docs/learning-hub/cli-for-beginners/06-mcp-servers.md)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/06/configuring-mcp-servers.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/06/configuring-mcp-servers.png)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/06/mcp-status-demo.gif](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/06/mcp-status-demo.gif)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/06/mcp-workflow-demo.gif](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/06/mcp-workflow-demo.gif)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/06/quick-start-mcp.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/06/quick-start-mcp.png)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/06/using-mcp-servers.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/06/using-mcp-servers.png)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/05/skills-agents-mcp-comparison.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/05/skills-agents-mcp-comparison.png) |
| retrieval | 48 | [website/src/scripts/pages/index.ts](../../../../sources/github__awesome-copilot/website/src/scripts/pages/index.ts)<br>[website/src/pages/index.astro](../../../../sources/github__awesome-copilot/website/src/pages/index.astro)<br>[website/src/pages/learning-hub/cookbook/index.astro](../../../../sources/github__awesome-copilot/website/src/pages/learning-hub/cookbook/index.astro)<br>[website/src/content/docs/learning-hub/index.md](../../../../sources/github__awesome-copilot/website/src/content/docs/learning-hub/index.md)<br>[website/src/content/docs/learning-hub/cli-for-beginners/index.md](../../../../sources/github__awesome-copilot/website/src/content/docs/learning-hub/cli-for-beginners/index.md)<br>[skills/update-markdown-file-index/SKILL.md](../../../../sources/github__awesome-copilot/skills/update-markdown-file-index/SKILL.md)<br>[skills/qdrant-performance-optimization/memory-usage-optimization/SKILL.md](../../../../sources/github__awesome-copilot/skills/qdrant-performance-optimization/memory-usage-optimization/SKILL.md)<br>[skills/pinecone-rag/SKILL.md](../../../../sources/github__awesome-copilot/skills/pinecone-rag/SKILL.md) |
| spec | 73 | [skills/web-design-reviewer/SKILL.md](../../../../sources/github__awesome-copilot/skills/web-design-reviewer/SKILL.md)<br>[skills/web-design-reviewer/references/framework-fixes.md](../../../../sources/github__awesome-copilot/skills/web-design-reviewer/references/framework-fixes.md)<br>[skills/web-design-reviewer/references/visual-checklist.md](../../../../sources/github__awesome-copilot/skills/web-design-reviewer/references/visual-checklist.md)<br>[skills/threat-model-analyst/references/skeletons/skeleton-architecture.md](../../../../sources/github__awesome-copilot/skills/threat-model-analyst/references/skeletons/skeleton-architecture.md)<br>[skills/salesforce-flow-design/SKILL.md](../../../../sources/github__awesome-copilot/skills/salesforce-flow-design/SKILL.md)<br>[skills/react-container-presentation-component/references/component-architecture.md](../../../../sources/github__awesome-copilot/skills/react-container-presentation-component/references/component-architecture.md)<br>[skills/quality-playbook/references/requirements_pipeline.md](../../../../sources/github__awesome-copilot/skills/quality-playbook/references/requirements_pipeline.md)<br>[skills/quality-playbook/references/requirements_refinement.md](../../../../sources/github__awesome-copilot/skills/quality-playbook/references/requirements_refinement.md) |
| eval | 166 | [website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-demo.gif](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-demo.gif)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-swimlane-single.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-swimlane-single.png)<br>[skills/webapp-testing/assets/test-helper.js](../../../../sources/github__awesome-copilot/skills/webapp-testing/assets/test-helper.js)<br>[skills/unit-test-vue-pinia/SKILL.md](../../../../sources/github__awesome-copilot/skills/unit-test-vue-pinia/SKILL.md)<br>[skills/unit-test-vue-pinia/references/pinia-patterns.md](../../../../sources/github__awesome-copilot/skills/unit-test-vue-pinia/references/pinia-patterns.md)<br>[skills/spring-boot-testing/references/test-slices-overview.md](../../../../sources/github__awesome-copilot/skills/spring-boot-testing/references/test-slices-overview.md)<br>[skills/scoutqa-test/SKILL.md](../../../../sources/github__awesome-copilot/skills/scoutqa-test/SKILL.md)<br>[skills/scaffolding-oracle-to-postgres-migration-test-project/SKILL.md](../../../../sources/github__awesome-copilot/skills/scaffolding-oracle-to-postgres-migration-test-project/SKILL.md) |
| security | 63 | [SECURITY.md](../../../../sources/github__awesome-copilot/SECURITY.md)<br>[workflows/ospo-release-compliance-checker.md](../../../../sources/github__awesome-copilot/workflows/ospo-release-compliance-checker.md)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/00/auth-device-flow.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/00/auth-device-flow.png)<br>[skills/security-review/SKILL.md](../../../../sources/github__awesome-copilot/skills/security-review/SKILL.md)<br>[skills/security-review/references/language-patterns.md](../../../../sources/github__awesome-copilot/skills/security-review/references/language-patterns.md)<br>[skills/security-review/references/report-format.md](../../../../sources/github__awesome-copilot/skills/security-review/references/report-format.md)<br>[skills/security-review/references/secret-patterns.md](../../../../sources/github__awesome-copilot/skills/security-review/references/secret-patterns.md)<br>[skills/security-review/references/vuln-categories.md](../../../../sources/github__awesome-copilot/skills/security-review/references/vuln-categories.md) |
| ci | 41 | [.github/workflows/build-website.yml](../../../../sources/github__awesome-copilot/.github/workflows/build-website.yml)<br>[.github/workflows/check-line-endings.yml](../../../../sources/github__awesome-copilot/.github/workflows/check-line-endings.yml)<br>[.github/workflows/check-plugin-structure.yml](../../../../sources/github__awesome-copilot/.github/workflows/check-plugin-structure.yml)<br>[.github/workflows/check-pr-target.yml](../../../../sources/github__awesome-copilot/.github/workflows/check-pr-target.yml)<br>[.github/workflows/cli-for-beginners-sync.lock.yml](../../../../sources/github__awesome-copilot/.github/workflows/cli-for-beginners-sync.lock.yml)<br>[.github/workflows/cli-for-beginners-sync.md](../../../../sources/github__awesome-copilot/.github/workflows/cli-for-beginners-sync.md)<br>[.github/workflows/codeowner-update.lock.yml](../../../../sources/github__awesome-copilot/.github/workflows/codeowner-update.lock.yml)<br>[.github/workflows/codeowner-update.md](../../../../sources/github__awesome-copilot/.github/workflows/codeowner-update.md) |
| container | 0 | 명확하지 않음 |
| instruction | 4 | [AGENTS.md](../../../../sources/github__awesome-copilot/AGENTS.md)<br>[skills/setup-my-iq/assets/templates/AGENTS.md](../../../../sources/github__awesome-copilot/skills/setup-my-iq/assets/templates/AGENTS.md)<br>[skills/copilot-instructions-blueprint-generator/SKILL.md](../../../../sources/github__awesome-copilot/skills/copilot-instructions-blueprint-generator/SKILL.md)<br>[.github/copilot-instructions.md](../../../../sources/github__awesome-copilot/.github/copilot-instructions.md) |
| docs | 280 | [README.md](../../../../sources/github__awesome-copilot/README.md)<br>[website/astro.config.mjs](../../../../sources/github__awesome-copilot/website/astro.config.mjs)<br>[website/package-lock.json](../../../../sources/github__awesome-copilot/website/package-lock.json)<br>[website/package.json](../../../../sources/github__awesome-copilot/website/package.json)<br>[website/README.md](../../../../sources/github__awesome-copilot/website/README.md)<br>[website/tsconfig.json](../../../../sources/github__awesome-copilot/website/tsconfig.json)<br>[website/src/content.config.ts](../../../../sources/github__awesome-copilot/website/src/content.config.ts)<br>[website/src/env.d.ts](../../../../sources/github__awesome-copilot/website/src/env.d.ts) |
| config | 20 | [package.json](../../../../sources/github__awesome-copilot/package.json)<br>[website/package.json](../../../../sources/github__awesome-copilot/website/package.json)<br>[website/tsconfig.json](../../../../sources/github__awesome-copilot/website/tsconfig.json)<br>[skills/md-to-docx/scripts/package.json](../../../../sources/github__awesome-copilot/skills/md-to-docx/scripts/package.json)<br>[skills/drawio/scripts/package.json](../../../../sources/github__awesome-copilot/skills/drawio/scripts/package.json)<br>[plugins/project-documenter/skills/md-to-docx/scripts/package.json](../../../../sources/github__awesome-copilot/plugins/project-documenter/skills/md-to-docx/scripts/package.json)<br>[plugins/project-documenter/skills/drawio/scripts/package.json](../../../../sources/github__awesome-copilot/plugins/project-documenter/skills/drawio/scripts/package.json)<br>[extensions/where-was-i/package.json](../../../../sources/github__awesome-copilot/extensions/where-was-i/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 166 | [website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-demo.gif](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-demo.gif)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-swimlane-single.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-swimlane-single.png)<br>[skills/webapp-testing/assets/test-helper.js](../../../../sources/github__awesome-copilot/skills/webapp-testing/assets/test-helper.js)<br>[skills/unit-test-vue-pinia/SKILL.md](../../../../sources/github__awesome-copilot/skills/unit-test-vue-pinia/SKILL.md)<br>[skills/unit-test-vue-pinia/references/pinia-patterns.md](../../../../sources/github__awesome-copilot/skills/unit-test-vue-pinia/references/pinia-patterns.md)<br>[skills/spring-boot-testing/references/test-slices-overview.md](../../../../sources/github__awesome-copilot/skills/spring-boot-testing/references/test-slices-overview.md) |
| CI workflow | 41 | [.github/workflows/build-website.yml](../../../../sources/github__awesome-copilot/.github/workflows/build-website.yml)<br>[.github/workflows/check-line-endings.yml](../../../../sources/github__awesome-copilot/.github/workflows/check-line-endings.yml)<br>[.github/workflows/check-plugin-structure.yml](../../../../sources/github__awesome-copilot/.github/workflows/check-plugin-structure.yml)<br>[.github/workflows/check-pr-target.yml](../../../../sources/github__awesome-copilot/.github/workflows/check-pr-target.yml)<br>[.github/workflows/cli-for-beginners-sync.lock.yml](../../../../sources/github__awesome-copilot/.github/workflows/cli-for-beginners-sync.lock.yml)<br>[.github/workflows/cli-for-beginners-sync.md](../../../../sources/github__awesome-copilot/.github/workflows/cli-for-beginners-sync.md) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 63 | [SECURITY.md](../../../../sources/github__awesome-copilot/SECURITY.md)<br>[workflows/ospo-release-compliance-checker.md](../../../../sources/github__awesome-copilot/workflows/ospo-release-compliance-checker.md)<br>[website/public/images/learning-hub/copilot-cli-for-beginners/00/auth-device-flow.png](../../../../sources/github__awesome-copilot/website/public/images/learning-hub/copilot-cli-for-beginners/00/auth-device-flow.png)<br>[skills/security-review/SKILL.md](../../../../sources/github__awesome-copilot/skills/security-review/SKILL.md)<br>[skills/security-review/references/language-patterns.md](../../../../sources/github__awesome-copilot/skills/security-review/references/language-patterns.md)<br>[skills/security-review/references/report-format.md](../../../../sources/github__awesome-copilot/skills/security-review/references/report-format.md) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/github__awesome-copilot/AGENTS.md)<br>[skills/setup-my-iq/assets/templates/AGENTS.md](../../../../sources/github__awesome-copilot/skills/setup-my-iq/assets/templates/AGENTS.md)<br>[skills/copilot-instructions-blueprint-generator/SKILL.md](../../../../sources/github__awesome-copilot/skills/copilot-instructions-blueprint-generator/SKILL.md)<br>[.github/copilot-instructions.md](../../../../sources/github__awesome-copilot/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `website/src/content/docs/learning-hub/understanding-mcp-servers.md`, `website/src/content/docs/learning-hub/cli-for-beginners/06-mcp-servers.md`, `website/public/images/learning-hub/copilot-cli-for-beginners/06/configuring-mcp-servers.png`.
2. agent/tool runtime 매핑: `AGENTS.md`, `website/src/scripts/pages/agents-render.ts`, `website/src/scripts/pages/agents.ts`.
3. retrieval/memory/indexing 확인: `website/src/scripts/pages/index.ts`, `website/src/pages/index.astro`, `website/src/pages/learning-hub/cookbook/index.astro`.
4. test/eval 파일로 동작 검증: `website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-demo.gif`, `website/public/images/learning-hub/copilot-cli-for-beginners/03/test-gen-swimlane-single.png`, `skills/webapp-testing/assets/test-helper.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2566 files, 1133 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, LICENSE, ci, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음입니다.
