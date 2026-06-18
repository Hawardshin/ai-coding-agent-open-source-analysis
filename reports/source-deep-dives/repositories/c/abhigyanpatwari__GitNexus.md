# abhigyanpatwari/GitNexus 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a git repository (Github, Gitlab, Azure, Local) or ZIP file, and get an interactive knowledge graph with a built in Graph RAG Agent. Perfect for code exploration

## 요약

- 조사 단위: `sources/abhigyanpatwari__GitNexus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,827 files, 1,719 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, gitnexus-claude-plugin/.mcp.json, gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | abhigyanpatwari/GitNexus |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 42383 |
| Forks | 4795 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/abhigyanpatwari__GitNexus](../../../../sources/abhigyanpatwari__GitNexus) |
| 기존 보고서 | [reports/global-trending/repositories/abhigyanpatwari__GitNexus.md](../../../global-trending/repositories/abhigyanpatwari__GitNexus.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3827 / 1719 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .claude, .claude-plugin, .cursor, .devcontainer, .gemini, .github, .history, .husky, .sisyphus, deploy, eslint-rules, eval, gitnexus, gitnexus-claude-plugin, gitnexus-cursor-integration, gitnexus-shared, gitnexus-test-setup, gitnexus-web, pr-swarm-review |
| 상위 확장자 | .ts: 1663, .py: 241, .cs: 181, .java: 174, .h: 159, .php: 153, .kt: 138, .rs: 136, .cpp: 132, .go: 106, .json: 97, .rb: 92 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| eslint-rules | top-level component | 1 |
| eval | top-level component | 1 |
| gitnexus | top-level component | 1 |
| gitnexus-claude-plugin | top-level component | 1 |
| gitnexus-cursor-integration | top-level component | 1 |
| gitnexus-shared | top-level component | 1 |
| gitnexus-test-setup | validation surface | 1 |
| gitnexus-web | source boundary | 1 |
| pr-swarm-review | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky |
| quality | package.json | format | prettier --write . |
| quality | package.json | format:check | prettier --check . |
| quality | package.json | lint | eslint . |
| quality | package.json | lint:fix | eslint --fix . |
| utility | package.json | gitnexus:refresh | gitnexus analyze --embeddings --skills |
| utility | package.json | gitnexus:full | gitnexus analyze --force --embeddings --skills |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/abhigyanpatwari__GitNexus/.mcp.json) | mcp signal |
| mcp | [gitnexus-claude-plugin/.mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/.mcp.json) | mcp signal |
| mcp | [gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json) | mcp signal |
| mcp | [gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/abhigyanpatwari__GitNexus/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills.mdm](../../../../sources/abhigyanpatwari__GitNexus/skills.mdm) | agentRuntime signal |
| agentRuntime | [gitnexus-web/test/unit/agent-abort.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-abort.test.ts) | agentRuntime signal |
| agentRuntime | [gitnexus-web/test/unit/agent-history.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-history.test.ts) | agentRuntime signal |
| entrypoints | [gitnexus-web/src/App.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/App.tsx) | entrypoints signal |
| entrypoints | [gitnexus-web/src/index.css](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/index.css) | entrypoints signal |
| entrypoints | [gitnexus-web/src/main.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/main.tsx) | entrypoints signal |
| entrypoints | [gitnexus-shared/src/index.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-shared/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 151 | [gitnexus-web/src/App.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/App.tsx)<br>[gitnexus-web/src/index.css](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/index.css)<br>[gitnexus-web/src/main.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/main.tsx)<br>[gitnexus-shared/src/index.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-shared/src/index.ts)<br>[gitnexus/test/unit/server.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/server.test.ts)<br>[gitnexus/test/fixtures/vue-scope/vue-options-api/src/App.vue](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/vue-scope/vue-options-api/src/App.vue)<br>[gitnexus/test/fixtures/vue-scope/vue-cross-file/src/App.vue](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/vue-scope/vue-cross-file/src/App.vue)<br>[gitnexus/test/fixtures/vue-scope/vue-composition-api/src/App.vue](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/vue-scope/vue-composition-api/src/App.vue) |
| agentRuntime | 105 | [AGENTS.md](../../../../sources/abhigyanpatwari__GitNexus/AGENTS.md)<br>[skills.mdm](../../../../sources/abhigyanpatwari__GitNexus/skills.mdm)<br>[gitnexus-web/test/unit/agent-abort.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-abort.test.ts)<br>[gitnexus-web/test/unit/agent-history.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-history.test.ts)<br>[gitnexus-web/test/unit/agent-prompt.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-prompt.test.ts)<br>[gitnexus-web/src/hooks/useAppState.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/hooks/useAppState.tsx)<br>[gitnexus-web/src/hooks/useAutoScroll.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/hooks/useAutoScroll.ts)<br>[gitnexus-web/src/hooks/useBackend.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/hooks/useBackend.ts) |
| mcp | 46 | [.mcp.json](../../../../sources/abhigyanpatwari__GitNexus/.mcp.json)<br>[gitnexus-claude-plugin/.mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/.mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-guide/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-guide/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-exploring/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-exploring/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-debugging/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-debugging/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-cli/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-cli/mcp.json) |
| retrieval | 126 | [gitnexus-web/index.html](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/index.html)<br>[gitnexus-web/test/unit/embedding-auto-start.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/embedding-auto-start.test.ts)<br>[gitnexus-web/test/unit/graph-load-decision.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/graph-load-decision.test.ts)<br>[gitnexus-web/test/unit/graph.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/graph.test.ts)<br>[gitnexus-web/test/unit/load-graph-anyway.test.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/load-graph-anyway.test.tsx)<br>[gitnexus-web/test/fixtures/graph.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/fixtures/graph.ts)<br>[gitnexus-web/src/index.css](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/index.css)<br>[gitnexus-web/src/locales/zh-CN/graph.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/locales/zh-CN/graph.json) |
| spec | 14 | [ARCHITECTURE.md](../../../../sources/abhigyanpatwari__GitNexus/ARCHITECTURE.md)<br>[type-resolution-roadmap.md](../../../../sources/abhigyanpatwari__GitNexus/type-resolution-roadmap.md)<br>[gitnexus-web/e2e/debug-issues.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/debug-issues.spec.ts)<br>[gitnexus-web/e2e/folder-upload.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/folder-upload.spec.ts)<br>[gitnexus-web/e2e/heartbeat-reconnect.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/heartbeat-reconnect.spec.ts)<br>[gitnexus-web/e2e/language-switching.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/language-switching.spec.ts)<br>[gitnexus-web/e2e/manual-record.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/manual-record.spec.ts)<br>[gitnexus-web/e2e/multi-repo-scoping.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/multi-repo-scoping.spec.ts) |
| eval | 2818 | [docker-server.test.mjs](../../../../sources/abhigyanpatwari__GitNexus/docker-server.test.mjs)<br>[pr-swarm-review/personas/04-test-ci-verifier.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/personas/04-test-ci-verifier.md)<br>[gitnexus-web/test/setup.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/setup.ts)<br>[gitnexus-web/test/unit/agent-abort.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-abort.test.ts)<br>[gitnexus-web/test/unit/agent-history.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-history.test.ts)<br>[gitnexus-web/test/unit/agent-prompt.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-prompt.test.ts)<br>[gitnexus-web/test/unit/backend-client-retry.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/backend-client-retry.test.ts)<br>[gitnexus-web/test/unit/bug-fixes.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/bug-fixes.test.ts) |
| security | 42 | [SECURITY.md](../../../../sources/abhigyanpatwari__GitNexus/SECURITY.md)<br>[pr-swarm-review/personas/05-security-boundary-reviewer.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/personas/05-security-boundary-reviewer.md)<br>[gitnexus-web/test/unit/security-guards.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/security-guards.test.ts)<br>[gitnexus/test/unit/security.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/security.test.ts)<br>[gitnexus/test/unit/scope-resolution/go/go-range-binding-null-guard.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/scope-resolution/go/go-range-binding-null-guard.test.ts)<br>[gitnexus/test/unit/cfg/emit-guard.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/cfg/emit-guard.test.ts)<br>[gitnexus/test/fixtures/python-scope-integration/services/auth.py](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/python-scope-integration/services/auth.py)<br>[gitnexus/test/fixtures/lang-resolution/typescript-generic-calls/src/auth.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/lang-resolution/typescript-generic-calls/src/auth.ts) |
| ci | 24 | [.github/workflows/build-tree-sitter-prebuilds.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/build-tree-sitter-prebuilds.yml)<br>[.github/workflows/ci-devcontainer.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-devcontainer.yml)<br>[.github/workflows/ci-e2e.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-e2e.yml)<br>[.github/workflows/ci-quality.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-quality.yml)<br>[.github/workflows/ci-report.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-report.yml)<br>[.github/workflows/ci-tests.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-tests.yml)<br>[.github/workflows/ci.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/claude.yml) |
| container | 7 | [docker-compose.yaml](../../../../sources/abhigyanpatwari__GitNexus/docker-compose.yaml)<br>[Dockerfile.cli](../../../../sources/abhigyanpatwari__GitNexus/Dockerfile.cli)<br>[Dockerfile.web](../../../../sources/abhigyanpatwari__GitNexus/Dockerfile.web)<br>[gitnexus/Dockerfile.test](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/Dockerfile.test)<br>[gitnexus/test/unit/dockerfile-runtime-asset-parity.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/dockerfile-runtime-asset-parity.test.ts)<br>[deploy/kubernetes/cluster-image-policy.yaml](../../../../sources/abhigyanpatwari__GitNexus/deploy/kubernetes/cluster-image-policy.yaml)<br>[.devcontainer/Dockerfile](../../../../sources/abhigyanpatwari__GitNexus/.devcontainer/Dockerfile) |
| instruction | 4 | [AGENTS.md](../../../../sources/abhigyanpatwari__GitNexus/AGENTS.md)<br>[CLAUDE.md](../../../../sources/abhigyanpatwari__GitNexus/CLAUDE.md)<br>[.cursor/rules/100-monorepo.mdc](../../../../sources/abhigyanpatwari__GitNexus/.cursor/rules/100-monorepo.mdc)<br>[.cursor/rules/200-eval.mdc](../../../../sources/abhigyanpatwari__GitNexus/.cursor/rules/200-eval.mdc) |
| docs | 8 | [README.md](../../../../sources/abhigyanpatwari__GitNexus/README.md)<br>[pr-swarm-review/README.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/README.md)<br>[gitnexus-cursor-integration/README.md](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-cursor-integration/README.md)<br>[gitnexus/README.md](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/README.md)<br>[gitnexus/bench/emit-persistence/README.md](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/bench/emit-persistence/README.md)<br>[eval/README.md](../../../../sources/abhigyanpatwari__GitNexus/eval/README.md)<br>[.devcontainer/README.md](../../../../sources/abhigyanpatwari__GitNexus/.devcontainer/README.md)<br>[.claude/README-gitnexus-reviewer-swarm.md](../../../../sources/abhigyanpatwari__GitNexus/.claude/README-gitnexus-reviewer-swarm.md) |
| config | 49 | [package.json](../../../../sources/abhigyanpatwari__GitNexus/package.json)<br>[gitnexus-web/package.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/package.json)<br>[gitnexus-web/tsconfig.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/tsconfig.json)<br>[gitnexus-shared/package.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-shared/package.json)<br>[gitnexus-shared/tsconfig.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-shared/tsconfig.json)<br>[gitnexus/package.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/package.json)<br>[gitnexus/tsconfig.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/tsconfig.json)<br>[gitnexus/test/fixtures/lang-resolution/typescript-tsconfig-aliases/tsconfig.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/lang-resolution/typescript-tsconfig-aliases/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2818 | [docker-server.test.mjs](../../../../sources/abhigyanpatwari__GitNexus/docker-server.test.mjs)<br>[pr-swarm-review/personas/04-test-ci-verifier.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/personas/04-test-ci-verifier.md)<br>[gitnexus-web/test/setup.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/setup.ts)<br>[gitnexus-web/test/unit/agent-abort.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-abort.test.ts)<br>[gitnexus-web/test/unit/agent-history.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-history.test.ts)<br>[gitnexus-web/test/unit/agent-prompt.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-prompt.test.ts) |
| CI workflow | 24 | [.github/workflows/build-tree-sitter-prebuilds.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/build-tree-sitter-prebuilds.yml)<br>[.github/workflows/ci-devcontainer.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-devcontainer.yml)<br>[.github/workflows/ci-e2e.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-e2e.yml)<br>[.github/workflows/ci-quality.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-quality.yml)<br>[.github/workflows/ci-report.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-report.yml)<br>[.github/workflows/ci-tests.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-tests.yml) |
| 컨테이너/배포 | 7 | [docker-compose.yaml](../../../../sources/abhigyanpatwari__GitNexus/docker-compose.yaml)<br>[Dockerfile.cli](../../../../sources/abhigyanpatwari__GitNexus/Dockerfile.cli)<br>[Dockerfile.web](../../../../sources/abhigyanpatwari__GitNexus/Dockerfile.web)<br>[gitnexus/Dockerfile.test](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/Dockerfile.test)<br>[gitnexus/test/unit/dockerfile-runtime-asset-parity.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/dockerfile-runtime-asset-parity.test.ts)<br>[deploy/kubernetes/cluster-image-policy.yaml](../../../../sources/abhigyanpatwari__GitNexus/deploy/kubernetes/cluster-image-policy.yaml) |
| 보안/정책 | 42 | [SECURITY.md](../../../../sources/abhigyanpatwari__GitNexus/SECURITY.md)<br>[pr-swarm-review/personas/05-security-boundary-reviewer.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/personas/05-security-boundary-reviewer.md)<br>[gitnexus-web/test/unit/security-guards.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/security-guards.test.ts)<br>[gitnexus/test/unit/security.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/security.test.ts)<br>[gitnexus/test/unit/scope-resolution/go/go-range-binding-null-guard.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/scope-resolution/go/go-range-binding-null-guard.test.ts)<br>[gitnexus/test/unit/cfg/emit-guard.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/cfg/emit-guard.test.ts) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/abhigyanpatwari__GitNexus/AGENTS.md)<br>[CLAUDE.md](../../../../sources/abhigyanpatwari__GitNexus/CLAUDE.md)<br>[.cursor/rules/100-monorepo.mdc](../../../../sources/abhigyanpatwari__GitNexus/.cursor/rules/100-monorepo.mdc)<br>[.cursor/rules/200-eval.mdc](../../../../sources/abhigyanpatwari__GitNexus/.cursor/rules/200-eval.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `gitnexus-claude-plugin/.mcp.json`, `gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json`.
2. entrypoint를 따라 실행 흐름 확인: `gitnexus-web/src/App.tsx`, `gitnexus-web/src/index.css`, `gitnexus-web/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills.mdm`, `gitnexus-web/test/unit/agent-abort.test.ts`.
4. retrieval/memory/indexing 확인: `gitnexus-web/index.html`, `gitnexus-web/test/unit/embedding-auto-start.test.ts`, `gitnexus-web/test/unit/graph-load-decision.test.ts`.
5. test/eval 파일로 동작 검증: `docker-server.test.mjs`, `pr-swarm-review/personas/04-test-ci-verifier.md`, `gitnexus-web/test/setup.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 GitNexus The Zero Server Code Intelligence Engine GitNexus is a client side knowledge graph creator that runs entirely i. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
