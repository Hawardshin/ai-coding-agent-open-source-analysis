# mcp-use/mcp-use 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Servers for AI Agents.

## 요약

- 조사 단위: `sources/mcp-use__mcp-use` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,662 files, 355 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, skills/openapi-to-mcp/LICENSE.txt, skills/openapi-to-mcp/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mcp-use/mcp-use |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 10115 |
| Forks | 1336 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mcp-use__mcp-use](../../../../sources/mcp-use__mcp-use) |
| 기존 보고서 | [reports/global-trending/repositories/mcp-use__mcp-use.md](../../../global-trending/repositories/mcp-use__mcp-use.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1662 / 355 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .claude-plugin, .github, docs, examples, libraries, skills, static |
| 상위 확장자 | .ts: 508, .mdx: 239, .py: 225, .tsx: 170, .md: 150, .json: 103, .png: 80, .svg: 37, (none): 26, .yml: 24, .js: 17, .sh: 11 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| libraries | source boundary | 1 |
| skills | top-level component | 1 |
| static | top-level component | 1 |


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
| mcp | [.mcp.json](../../../../sources/mcp-use__mcp-use/.mcp.json) | mcp signal |
| mcp | [skills/openapi-to-mcp/LICENSE.txt](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/LICENSE.txt) | mcp signal |
| mcp | [skills/openapi-to-mcp/SKILL.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/SKILL.md) | mcp signal |
| mcp | [skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md) | mcp signal |
| agentRuntime | [skills/openapi-to-mcp/references/code-templates.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/code-templates.md) | agentRuntime signal |
| entrypoints | [libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts) | entrypoints signal |
| entrypoints | [libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts) | entrypoints signal |
| entrypoints | [libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts) | entrypoints signal |
| entrypoints | [libraries/typescript/packages/mcp-use/examples/server/oauth/clerk/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/clerk/src/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/mcp-use__mcp-use/CLAUDE.md) | instruction signal |
| instruction | [libraries/typescript/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/CLAUDE.md) | instruction signal |
| instruction | [libraries/typescript/packages/cli/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/cli/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 28 | [libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/clerk/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/clerk/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/better-auth/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/better-auth/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/auth0-proxy/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/auth0-proxy/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/auth0/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/auth0/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/features/session-management/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/features/session-management/src/server.ts) |
| agentRuntime | 262 | [skills/openapi-to-mcp/LICENSE.txt](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/LICENSE.txt)<br>[skills/openapi-to-mcp/SKILL.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/SKILL.md)<br>[skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md)<br>[skills/openapi-to-mcp/references/code-templates.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/code-templates.md)<br>[skills/openapi-to-mcp/references/deploy.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/deploy.md)<br>[skills/openapi-to-mcp/references/mapping-rules.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/mapping-rules.md)<br>[skills/openapi-to-mcp/references/testing.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/testing.md)<br>[skills/mcp-builder/LICENSE.txt](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/LICENSE.txt) |
| mcp | 882 | [.mcp.json](../../../../sources/mcp-use__mcp-use/.mcp.json)<br>[skills/openapi-to-mcp/LICENSE.txt](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/LICENSE.txt)<br>[skills/openapi-to-mcp/SKILL.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/SKILL.md)<br>[skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md)<br>[skills/openapi-to-mcp/references/code-templates.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/code-templates.md)<br>[skills/openapi-to-mcp/references/deploy.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/deploy.md)<br>[skills/openapi-to-mcp/references/mapping-rules.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/mapping-rules.md)<br>[skills/openapi-to-mcp/references/testing.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/testing.md) |
| retrieval | 82 | [libraries/typescript/packages/mcp-use/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/index.ts)<br>[libraries/typescript/packages/mcp-use/tests/agents/memory_tool_outputs.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/agents/memory_tool_outputs.test.ts)<br>[libraries/typescript/packages/mcp-use/src/utils/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/utils/index.ts)<br>[libraries/typescript/packages/mcp-use/src/utils/json-schema-to-zod/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/utils/json-schema-to-zod/index.ts)<br>[libraries/typescript/packages/mcp-use/src/telemetry/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/telemetry/index.ts)<br>[libraries/typescript/packages/mcp-use/src/server/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/server/index.ts)<br>[libraries/typescript/packages/mcp-use/src/server/widgets/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/server/widgets/index.ts)<br>[libraries/typescript/packages/mcp-use/src/server/widgets/adapters/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/server/widgets/adapters/index.ts) |
| spec | 7 | [skills/mcp-builder/references/foundations/architecture.md](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/references/foundations/architecture.md)<br>[skills/mcp-builder/evals/architecture.json](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/evals/architecture.json)<br>[skills/mcp-apps-builder/references/foundations/architecture.md](../../../../sources/mcp-use__mcp-use/skills/mcp-apps-builder/references/foundations/architecture.md)<br>[skills/chatgpt-app-builder/references/foundations/architecture.md](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/references/foundations/architecture.md)<br>[skills/chatgpt-app-builder/evals/architecture.json](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/evals/architecture.json)<br>[libraries/typescript/packages/mcp-use/src/server/sessions/ARCHITECTURE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/server/sessions/ARCHITECTURE.md)<br>[libraries/python/ROADMAP.md](../../../../sources/mcp-use__mcp-use/libraries/python/ROADMAP.md) |
| eval | 215 | [libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/inspector-no-langchain.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/inspector-no-langchain.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/stream_events_simple.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/stream_events_simple.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/stream_events.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/stream_events.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/unit/telemetry/agent-telemetry.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/telemetry/agent-telemetry.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/unit/telemetry/client-telemetry.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/telemetry/client-telemetry.test.ts) |
| security | 139 | [SECURITY.md](../../../../sources/mcp-use__mcp-use/SECURITY.md)<br>[skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md)<br>[skills/mcp-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/references/authentication/better-auth.md)<br>[skills/mcp-apps-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/mcp-apps-builder/references/authentication/better-auth.md)<br>[skills/chatgpt-app-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/references/authentication/better-auth.md)<br>[libraries/typescript/packages/mcp-use/tests/unit/server/oauth-supabase-provider.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/server/oauth-supabase-provider.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/unit/server/oauth-well-known.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/server/oauth-well-known.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/unit/client/close-session-slot-guard.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/client/close-session-slot-guard.test.ts) |
| ci | 24 | [.github/workflows/approve-fork-pr.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/approve-fork-pr.yml)<br>[.github/workflows/auto-label.json5](../../../../sources/mcp-use__mcp-use/.github/workflows/auto-label.json5)<br>[.github/workflows/auto-label.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/auto-label.yml)<br>[.github/workflows/bump-mcp-use-reusable.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/bump-mcp-use-reusable.yml)<br>[.github/workflows/ci.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/claude.yml)<br>[.github/workflows/conformance-comment.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/conformance-comment.yml)<br>[.github/workflows/conformance.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/conformance.yml) |
| container | 9 | [libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/config.toml](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/config.toml)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/deploy.sh](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/deploy.sh)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/README.md)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/deno.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/deno.json)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/index.ts)<br>[libraries/typescript/packages/inspector/Dockerfile](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/inspector/Dockerfile)<br>[docs/typescript/server/deployment/google.mdx](../../../../sources/mcp-use__mcp-use/docs/typescript/server/deployment/google.mdx)<br>[docs/typescript/server/deployment/mcp-use.mdx](../../../../sources/mcp-use__mcp-use/docs/typescript/server/deployment/mcp-use.mdx) |
| instruction | 5 | [CLAUDE.md](../../../../sources/mcp-use__mcp-use/CLAUDE.md)<br>[libraries/typescript/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/CLAUDE.md)<br>[libraries/typescript/packages/cli/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/cli/CLAUDE.md)<br>[libraries/python/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/python/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/mcp-use__mcp-use/docs/CLAUDE.md) |
| docs | 380 | [README.md](../../../../sources/mcp-use__mcp-use/README.md)<br>[skills/mcp-builder/evals/README.md](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/evals/README.md)<br>[skills/chatgpt-app-builder/evals/README.md](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/evals/README.md)<br>[libraries/typescript/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/README.md)<br>[libraries/typescript/packages/mcp-use/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/README.md)<br>[libraries/typescript/packages/mcp-use/tests/integration/agent/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/integration/agent/README.md)<br>[libraries/typescript/packages/mcp-use/tests/docs/agent-quick-start.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/docs/agent-quick-start.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/docs/prompts-example.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/docs/prompts-example.test.ts) |
| config | 77 | [libraries/typescript/package.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/package.json)<br>[libraries/typescript/pnpm-workspace.yaml](../../../../sources/mcp-use__mcp-use/libraries/typescript/pnpm-workspace.yaml)<br>[libraries/typescript/tsconfig.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/tsconfig.json)<br>[libraries/typescript/packages/mcp-use/package.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/package.json)<br>[libraries/typescript/packages/mcp-use/tsconfig.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tsconfig.json)<br>[libraries/typescript/packages/mcp-use/examples/server/ui/model-context/package.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/ui/model-context/package.json)<br>[libraries/typescript/packages/mcp-use/examples/server/ui/model-context/tsconfig.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/ui/model-context/tsconfig.json)<br>[libraries/typescript/packages/mcp-use/examples/server/ui/mcp-ui/package.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/ui/mcp-ui/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 215 | [libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/inspector-no-langchain.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/inspector-no-langchain.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/stream_events_simple.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/stream_events_simple.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/stream_events.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/stream_events.test.ts) |
| CI workflow | 24 | [.github/workflows/approve-fork-pr.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/approve-fork-pr.yml)<br>[.github/workflows/auto-label.json5](../../../../sources/mcp-use__mcp-use/.github/workflows/auto-label.json5)<br>[.github/workflows/auto-label.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/auto-label.yml)<br>[.github/workflows/bump-mcp-use-reusable.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/bump-mcp-use-reusable.yml)<br>[.github/workflows/ci.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/claude.yml) |
| 컨테이너/배포 | 9 | [libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/config.toml](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/config.toml)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/deploy.sh](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/deploy.sh)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/README.md)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/deno.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/deno.json)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/index.ts)<br>[libraries/typescript/packages/inspector/Dockerfile](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/inspector/Dockerfile) |
| 보안/정책 | 139 | [SECURITY.md](../../../../sources/mcp-use__mcp-use/SECURITY.md)<br>[skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md)<br>[skills/mcp-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/references/authentication/better-auth.md)<br>[skills/mcp-apps-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/mcp-apps-builder/references/authentication/better-auth.md)<br>[skills/chatgpt-app-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/references/authentication/better-auth.md)<br>[libraries/typescript/packages/mcp-use/tests/unit/server/oauth-supabase-provider.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/server/oauth-supabase-provider.test.ts) |
| 에이전트 지시문 | 5 | [CLAUDE.md](../../../../sources/mcp-use__mcp-use/CLAUDE.md)<br>[libraries/typescript/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/CLAUDE.md)<br>[libraries/typescript/packages/cli/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/cli/CLAUDE.md)<br>[libraries/python/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/python/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/mcp-use__mcp-use/docs/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `skills/openapi-to-mcp/LICENSE.txt`, `skills/openapi-to-mcp/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts`, `libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts`, `libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts`.
3. agent/tool runtime 매핑: `skills/openapi-to-mcp/LICENSE.txt`, `skills/openapi-to-mcp/SKILL.md`, `skills/openapi-to-mcp/references/auth.md`.
4. retrieval/memory/indexing 확인: `libraries/typescript/packages/mcp-use/index.ts`, `libraries/typescript/packages/mcp-use/tests/agents/memory_tool_outputs.test.ts`, `libraries/typescript/packages/mcp-use/src/utils/index.ts`.
5. test/eval 파일로 동작 검증: `libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts`, `libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts`, `libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Servers for AI Agents.. 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
