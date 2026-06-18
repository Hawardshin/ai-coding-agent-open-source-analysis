# borghei/Claude-Skills 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

338 AI skills across 16 domains. PM is the deepest (66 skills - discovery, execution, strategy frameworks, GTM, Jira/Linear/Notion). Plus engineering, marketing, C-level (CAIO/CDO/CCO/GC/VPE), compliance + audit-prep, new research/ domain, vertical advisors. 74 expert agents, 784+ stdlib Python tools. 11 AI assistants.

## 요약

- 조사 단위: `sources/borghei__Claude-Skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,150 files, 1,279 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-config.json, site/skills/engineering/mcp-server-builder.html, scripts/mcp_server.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | borghei/Claude-Skills |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | HTML |
| Stars | 279 |
| Forks | 50 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/borghei__Claude-Skills](../../../../sources/borghei__Claude-Skills) |
| 기존 보고서 | [reports/global-trending/repositories/borghei__Claude-Skills.md](../../../global-trending/repositories/borghei__Claude-Skills.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3150 / 1279 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .claude-plugin, .codex, .docs, .gemini, .github, agents, assets, bundles, business-growth, c-level-advisor, cli, commands, data-analytics, docs, documentation, documents, engineering, evals, finance |
| 상위 확장자 | .md: 1667, .py: 820, .html: 338, .json: 134, .js: 53, .png: 34, .yml: 28, .txt: 24, (none): 19, .css: 5, .csv: 5, .map: 4 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| bundles | top-level component | 1 |
| business-growth | top-level component | 1 |
| c-level-advisor | top-level component | 1 |
| cli | top-level component | 1 |
| commands | top-level component | 1 |
| data-analytics | top-level component | 1 |
| documentation | documentation surface | 1 |
| documents | documentation surface | 1 |
| engineering | top-level component | 1 |
| evals | top-level component | 1 |
| finance | top-level component | 1 |
| hr-operations | top-level component | 1 |
| legal | top-level component | 1 |


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
| mcp | [mcp-config.json](../../../../sources/borghei__Claude-Skills/mcp-config.json) | mcp signal |
| mcp | [site/skills/engineering/mcp-server-builder.html](../../../../sources/borghei__Claude-Skills/site/skills/engineering/mcp-server-builder.html) | mcp signal |
| mcp | [scripts/mcp_server.py](../../../../sources/borghei__Claude-Skills/scripts/mcp_server.py) | mcp signal |
| mcp | [engineering/mcp-server-builder/SKILL.md](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/SKILL.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/borghei__Claude-Skills/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills.json](../../../../sources/borghei__Claude-Skills/skills.json) | agentRuntime signal |
| agentRuntime | [vertical-advisors/proptech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/proptech/SKILL.md) | agentRuntime signal |
| agentRuntime | [vertical-advisors/marketplace/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/marketplace/SKILL.md) | agentRuntime signal |
| entrypoints | [site/js/main.js](../../../../sources/borghei__Claude-Skills/site/js/main.js) | entrypoints signal |
| entrypoints | [cli/src/index.js](../../../../sources/borghei__Claude-Skills/cli/src/index.js) | entrypoints signal |
| entrypoints | [cli/bin/claude-skills.js](../../../../sources/borghei__Claude-Skills/cli/bin/claude-skills.js) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/borghei__Claude-Skills/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [site/js/main.js](../../../../sources/borghei__Claude-Skills/site/js/main.js)<br>[cli/src/index.js](../../../../sources/borghei__Claude-Skills/cli/src/index.js)<br>[cli/bin/claude-skills.js](../../../../sources/borghei__Claude-Skills/cli/bin/claude-skills.js) |
| agentRuntime | 950 | [AGENTS.md](../../../../sources/borghei__Claude-Skills/AGENTS.md)<br>[skills.json](../../../../sources/borghei__Claude-Skills/skills.json)<br>[vertical-advisors/proptech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/proptech/SKILL.md)<br>[vertical-advisors/marketplace/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/marketplace/SKILL.md)<br>[vertical-advisors/healthtech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/healthtech/SKILL.md)<br>[vertical-advisors/fintech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/fintech/SKILL.md)<br>[vertical-advisors/edtech/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/edtech/SKILL.md)<br>[vertical-advisors/ecommerce/SKILL.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/ecommerce/SKILL.md) |
| mcp | 13 | [mcp-config.json](../../../../sources/borghei__Claude-Skills/mcp-config.json)<br>[site/skills/engineering/mcp-server-builder.html](../../../../sources/borghei__Claude-Skills/site/skills/engineering/mcp-server-builder.html)<br>[scripts/mcp_server.py](../../../../sources/borghei__Claude-Skills/scripts/mcp_server.py)<br>[engineering/mcp-server-builder/SKILL.md](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/SKILL.md)<br>[engineering/mcp-server-builder/scripts/openapi_converter.py](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/scripts/openapi_converter.py)<br>[engineering/mcp-server-builder/scripts/server_scaffolder.py](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/scripts/server_scaffolder.py)<br>[engineering/mcp-server-builder/scripts/tool_linter.py](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/scripts/tool_linter.py)<br>[engineering/mcp-server-builder/references/server-implementation.md](../../../../sources/borghei__Claude-Skills/engineering/mcp-server-builder/references/server-implementation.md) |
| retrieval | 82 | [site/index.html](../../../../sources/borghei__Claude-Skills/site/index.html)<br>[site/WORKFLOWS/index.html](../../../../sources/borghei__Claude-Skills/site/WORKFLOWS/index.html)<br>[site/USAGE/index.html](../../../../sources/borghei__Claude-Skills/site/USAGE/index.html)<br>[site/skills/index.html](../../../../sources/borghei__Claude-Skills/site/skills/index.html)<br>[site/skills/vertical-advisors/index.html](../../../../sources/borghei__Claude-Skills/site/skills/vertical-advisors/index.html)<br>[site/skills/sales-success/index.html](../../../../sources/borghei__Claude-Skills/site/skills/sales-success/index.html)<br>[site/skills/ra-qm-team/index.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/index.html)<br>[site/skills/project-management/index.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/index.html) |
| spec | 182 | [vertical-advisors/marketplace/references/take_rate_design.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/marketplace/references/take_rate_design.md)<br>[vertical-advisors/fintech/assets/regulatory_architecture_template.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/fintech/assets/regulatory_architecture_template.md)<br>[site/skills/project-management/ai-feature-prd.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/ai-feature-prd.html)<br>[site/skills/project-management/create-prd.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/create-prd.html)<br>[site/skills/project-management/outcome-roadmap.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/outcome-roadmap.html)<br>[site/skills/project-management/pricing-prd.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/pricing-prd.html)<br>[site/skills/project-management/roadmap-communication.html](../../../../sources/borghei__Claude-Skills/site/skills/project-management/roadmap-communication.html)<br>[site/skills/product-team/design-system-lead.html](../../../../sources/borghei__Claude-Skills/site/skills/product-team/design-system-lead.html) |
| eval | 166 | [templates/workflows/AUTOMATION_TEST.md](../../../../sources/borghei__Claude-Skills/templates/workflows/AUTOMATION_TEST.md)<br>[templates/workflows/ci-quality-gate.yml](../../../../sources/borghei__Claude-Skills/templates/workflows/ci-quality-gate.yml)<br>[templates/evals-template/evals/test_cases.json](../../../../sources/borghei__Claude-Skills/templates/evals-template/evals/test_cases.json)<br>[standards/quality/.gitkeep](../../../../sources/borghei__Claude-Skills/standards/quality/.gitkeep)<br>[standards/quality/quality-standards.md](../../../../sources/borghei__Claude-Skills/standards/quality/quality-standards.md)<br>[site/skills/ra-qm-team/quality-documentation-manager.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/quality-documentation-manager.html)<br>[site/skills/ra-qm-team/quality-manager-qmr.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/quality-manager-qmr.html)<br>[site/skills/ra-qm-team/quality-manager-qms-iso13485.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/quality-manager-qms-iso13485.html) |
| security | 213 | [SECURITY.md](../../../../sources/borghei__Claude-Skills/SECURITY.md)<br>[vertical-advisors/edtech/scripts/student_data_compliance_checker.py](../../../../sources/borghei__Claude-Skills/vertical-advisors/edtech/scripts/student_data_compliance_checker.py)<br>[standards/security/.gitkeep](../../../../sources/borghei__Claude-Skills/standards/security/.gitkeep)<br>[standards/security/hook-security-pattern.md](../../../../sources/borghei__Claude-Skills/standards/security/hook-security-pattern.md)<br>[standards/security/security-standards.md](../../../../sources/borghei__Claude-Skills/standards/security/security-standards.md)<br>[site/skills/ra-qm-team/dora-compliance-expert.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/dora-compliance-expert.html)<br>[site/skills/ra-qm-team/information-security-manager-iso27001.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/information-security-manager-iso27001.html)<br>[site/skills/ra-qm-team/infrastructure-compliance-auditor.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/infrastructure-compliance-auditor.html) |
| ci | 8 | [.github/workflows/build-manifest.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/build-manifest.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/claude-code-review.yml)<br>[.github/workflows/enforce-pr-target.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/enforce-pr-target.yml)<br>[.github/workflows/pages.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/pages.yml)<br>[.github/workflows/publish-cli.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/publish-cli.yml)<br>[.github/workflows/skill-security-audit.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/skill-security-audit.yml)<br>[.github/workflows/sync-codex-skills.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/sync-codex-skills.yml)<br>[.github/workflows/virustotal-scan.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/virustotal-scan.yml) |
| container | 3 | [engineering/docker-development/scripts/dockerfile_analyzer.py](../../../../sources/borghei__Claude-Skills/engineering/docker-development/scripts/dockerfile_analyzer.py)<br>[engineering/docker-development/examples/docker-compose.sample.yml](../../../../sources/borghei__Claude-Skills/engineering/docker-development/examples/docker-compose.sample.yml)<br>[engineering/docker-development/examples/Dockerfile.sample](../../../../sources/borghei__Claude-Skills/engineering/docker-development/examples/Dockerfile.sample) |
| instruction | 24 | [AGENTS.md](../../../../sources/borghei__Claude-Skills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/borghei__Claude-Skills/CLAUDE.md)<br>[GEMINI.md](../../../../sources/borghei__Claude-Skills/GEMINI.md)<br>[vertical-advisors/CLAUDE.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/CLAUDE.md)<br>[templates/CLAUDE.md](../../../../sources/borghei__Claude-Skills/templates/CLAUDE.md)<br>[standards/CLAUDE.md](../../../../sources/borghei__Claude-Skills/standards/CLAUDE.md)<br>[sales-success/CLAUDE.md](../../../../sources/borghei__Claude-Skills/sales-success/CLAUDE.md)<br>[research/CLAUDE.md](../../../../sources/borghei__Claude-Skills/research/CLAUDE.md) |
| docs | 497 | [mkdocs.yml](../../../../sources/borghei__Claude-Skills/mkdocs.yml)<br>[README.md](../../../../sources/borghei__Claude-Skills/README.md)<br>[tools/adapters/README.md](../../../../sources/borghei__Claude-Skills/tools/adapters/README.md)<br>[templates/workflows/README.md](../../../../sources/borghei__Claude-Skills/templates/workflows/README.md)<br>[templates/evals-template/README.md](../../../../sources/borghei__Claude-Skills/templates/evals-template/README.md)<br>[site/.nojekyll](../../../../sources/borghei__Claude-Skills/site/.nojekyll)<br>[site/404.html](../../../../sources/borghei__Claude-Skills/site/404.html)<br>[site/index.html](../../../../sources/borghei__Claude-Skills/site/index.html) |
| config | 2 | [engineering/dependency-auditor/test-project/package.json](../../../../sources/borghei__Claude-Skills/engineering/dependency-auditor/test-project/package.json)<br>[cli/package.json](../../../../sources/borghei__Claude-Skills/cli/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 166 | [templates/workflows/AUTOMATION_TEST.md](../../../../sources/borghei__Claude-Skills/templates/workflows/AUTOMATION_TEST.md)<br>[templates/workflows/ci-quality-gate.yml](../../../../sources/borghei__Claude-Skills/templates/workflows/ci-quality-gate.yml)<br>[templates/evals-template/evals/test_cases.json](../../../../sources/borghei__Claude-Skills/templates/evals-template/evals/test_cases.json)<br>[standards/quality/.gitkeep](../../../../sources/borghei__Claude-Skills/standards/quality/.gitkeep)<br>[standards/quality/quality-standards.md](../../../../sources/borghei__Claude-Skills/standards/quality/quality-standards.md)<br>[site/skills/ra-qm-team/quality-documentation-manager.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/quality-documentation-manager.html) |
| CI workflow | 8 | [.github/workflows/build-manifest.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/build-manifest.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/claude-code-review.yml)<br>[.github/workflows/enforce-pr-target.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/enforce-pr-target.yml)<br>[.github/workflows/pages.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/pages.yml)<br>[.github/workflows/publish-cli.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/publish-cli.yml)<br>[.github/workflows/skill-security-audit.yml](../../../../sources/borghei__Claude-Skills/.github/workflows/skill-security-audit.yml) |
| 컨테이너/배포 | 3 | [engineering/docker-development/scripts/dockerfile_analyzer.py](../../../../sources/borghei__Claude-Skills/engineering/docker-development/scripts/dockerfile_analyzer.py)<br>[engineering/docker-development/examples/docker-compose.sample.yml](../../../../sources/borghei__Claude-Skills/engineering/docker-development/examples/docker-compose.sample.yml)<br>[engineering/docker-development/examples/Dockerfile.sample](../../../../sources/borghei__Claude-Skills/engineering/docker-development/examples/Dockerfile.sample) |
| 보안/정책 | 213 | [SECURITY.md](../../../../sources/borghei__Claude-Skills/SECURITY.md)<br>[vertical-advisors/edtech/scripts/student_data_compliance_checker.py](../../../../sources/borghei__Claude-Skills/vertical-advisors/edtech/scripts/student_data_compliance_checker.py)<br>[standards/security/.gitkeep](../../../../sources/borghei__Claude-Skills/standards/security/.gitkeep)<br>[standards/security/hook-security-pattern.md](../../../../sources/borghei__Claude-Skills/standards/security/hook-security-pattern.md)<br>[standards/security/security-standards.md](../../../../sources/borghei__Claude-Skills/standards/security/security-standards.md)<br>[site/skills/ra-qm-team/dora-compliance-expert.html](../../../../sources/borghei__Claude-Skills/site/skills/ra-qm-team/dora-compliance-expert.html) |
| 에이전트 지시문 | 24 | [AGENTS.md](../../../../sources/borghei__Claude-Skills/AGENTS.md)<br>[CLAUDE.md](../../../../sources/borghei__Claude-Skills/CLAUDE.md)<br>[GEMINI.md](../../../../sources/borghei__Claude-Skills/GEMINI.md)<br>[vertical-advisors/CLAUDE.md](../../../../sources/borghei__Claude-Skills/vertical-advisors/CLAUDE.md)<br>[templates/CLAUDE.md](../../../../sources/borghei__Claude-Skills/templates/CLAUDE.md)<br>[standards/CLAUDE.md](../../../../sources/borghei__Claude-Skills/standards/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp-config.json`, `site/skills/engineering/mcp-server-builder.html`, `scripts/mcp_server.py`.
2. entrypoint를 따라 실행 흐름 확인: `site/js/main.js`, `cli/src/index.js`, `cli/bin/claude-skills.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills.json`, `vertical-advisors/proptech/SKILL.md`.
4. retrieval/memory/indexing 확인: `site/index.html`, `site/WORKFLOWS/index.html`, `site/USAGE/index.html`.
5. test/eval 파일로 동작 검증: `templates/workflows/AUTOMATION_TEST.md`, `templates/workflows/ci-quality-gate.yml`, `templates/evals-template/evals/test_cases.json`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 338 AI skills across 16 domains. PM is the deepest 66 skills discovery, execution, strategy frameworks, GTM, Jira/Linear. 핵심 구조 신호는 HTML, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
