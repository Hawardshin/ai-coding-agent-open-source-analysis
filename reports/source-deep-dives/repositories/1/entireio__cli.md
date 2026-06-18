# entireio/cli 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

📜 Entire CLI hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside commits, creating a searchable record of how code was written in your repo.

## 요약

- 조사 단위: `sources/entireio__cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,076 files, 153 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=perf/context.go, internal/remotehelper/gitproto/agent.go, internal/remotehelper/githelper/agent.go이고, 의존성 단서는 cobra, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | entireio/cli |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 4515 |
| Forks | 345 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/entireio__cli](../../../../sources/entireio__cli) |
| 기존 보고서 | [reports/global-trending/repositories/entireio__cli.md](../../../global-trending/repositories/entireio__cli.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1076 / 153 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude, .codex, .devcontainer, .entire, .ferrata, .gemini, .github, .opencode, .pi, cmd, docs, e2e, internal, mise-tasks, perf, redact, scripts |
| 상위 확장자 | .go: 892, .md: 70, (none): 34, .json: 18, .jsonl: 16, .yml: 16, .sh: 15, .ts: 4, .txt: 4, .toml: 3, .yaml: 2, .mod: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| cmd/entire | cmd workspace | 41 |
| docs | documentation surface | 37 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/git-remote-entire | cmd workspace | 1 |
| e2e | validation surface | 1 |
| internal | top-level component | 1 |
| mise-tasks | top-level component | 1 |
| perf | top-level component | 1 |
| redact | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [perf/context.go](../../../../sources/entireio__cli/perf/context.go) | agentRuntime signal |
| agentRuntime | [internal/remotehelper/gitproto/agent.go](../../../../sources/entireio__cli/internal/remotehelper/gitproto/agent.go) | agentRuntime signal |
| agentRuntime | [internal/remotehelper/githelper/agent.go](../../../../sources/entireio__cli/internal/remotehelper/githelper/agent.go) | agentRuntime signal |
| agentRuntime | [e2e/agents/agent.go](../../../../sources/entireio__cli/e2e/agents/agent.go) | agentRuntime signal |
| entrypoints | [e2e/vogon/main.go](../../../../sources/entireio__cli/e2e/vogon/main.go) | entrypoints signal |
| entrypoints | [e2e/cmd/testreport/main.go](../../../../sources/entireio__cli/e2e/cmd/testreport/main.go) | entrypoints signal |
| entrypoints | [e2e/bootstrap/main.go](../../../../sources/entireio__cli/e2e/bootstrap/main.go) | entrypoints signal |
| entrypoints | [cmd/git-remote-entire/main.go](../../../../sources/entireio__cli/cmd/git-remote-entire/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/entireio__cli/CLAUDE.md) | instruction signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/entireio__cli/.github/copilot-instructions.md) | instruction signal |
| instruction | [.codex/config.toml](../../../../sources/entireio__cli/.codex/config.toml) | instruction signal |
| instruction | [.codex/hooks.json](../../../../sources/entireio__cli/.codex/hooks.json) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [e2e/vogon/main.go](../../../../sources/entireio__cli/e2e/vogon/main.go)<br>[e2e/cmd/testreport/main.go](../../../../sources/entireio__cli/e2e/cmd/testreport/main.go)<br>[e2e/bootstrap/main.go](../../../../sources/entireio__cli/e2e/bootstrap/main.go)<br>[cmd/git-remote-entire/main.go](../../../../sources/entireio__cli/cmd/git-remote-entire/main.go)<br>[cmd/entire/main.go](../../../../sources/entireio__cli/cmd/entire/main.go) |
| agentRuntime | 237 | [perf/context.go](../../../../sources/entireio__cli/perf/context.go)<br>[internal/remotehelper/gitproto/agent.go](../../../../sources/entireio__cli/internal/remotehelper/gitproto/agent.go)<br>[internal/remotehelper/githelper/agent.go](../../../../sources/entireio__cli/internal/remotehelper/githelper/agent.go)<br>[e2e/agents/agent.go](../../../../sources/entireio__cli/e2e/agents/agent.go)<br>[e2e/agents/claude.go](../../../../sources/entireio__cli/e2e/agents/claude.go)<br>[e2e/agents/codex_test.go](../../../../sources/entireio__cli/e2e/agents/codex_test.go)<br>[e2e/agents/codex_trust_test.go](../../../../sources/entireio__cli/e2e/agents/codex_trust_test.go)<br>[e2e/agents/codex_trust.go](../../../../sources/entireio__cli/e2e/agents/codex_trust.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [.pi/extensions/entire/index.ts](../../../../sources/entireio__cli/.pi/extensions/entire/index.ts) |
| spec | 18 | [internal/coreapi/spec/core.gen.json](../../../../sources/entireio__cli/internal/coreapi/spec/core.gen.json)<br>[internal/coreapi/spec/core.openapi.json](../../../../sources/entireio__cli/internal/coreapi/spec/core.openapi.json)<br>[internal/coreapi/spec/normalize.go](../../../../sources/entireio__cli/internal/coreapi/spec/normalize.go)<br>[docs/architecture/agent-guide.md](../../../../sources/entireio__cli/docs/architecture/agent-guide.md)<br>[docs/architecture/agent-integration-checklist.md](../../../../sources/entireio__cli/docs/architecture/agent-integration-checklist.md)<br>[docs/architecture/attribution.md](../../../../sources/entireio__cli/docs/architecture/attribution.md)<br>[docs/architecture/checkpoint-scenarios.md](../../../../sources/entireio__cli/docs/architecture/checkpoint-scenarios.md)<br>[docs/architecture/checkpoint-signing.md](../../../../sources/entireio__cli/docs/architecture/checkpoint-signing.md) |
| eval | 471 | [scripts/test-attribution-e2e.sh](../../../../sources/entireio__cli/scripts/test-attribution-e2e.sh)<br>[scripts/test-codex-agent-integration.sh](../../../../sources/entireio__cli/scripts/test-codex-agent-integration.sh)<br>[scripts/test-copilot-cli-agent-integration.sh](../../../../sources/entireio__cli/scripts/test-copilot-cli-agent-integration.sh)<br>[scripts/test-copilot-token-metadata.sh](../../../../sources/entireio__cli/scripts/test-copilot-token-metadata.sh)<br>[redact/betterleaks_env_test.go](../../../../sources/entireio__cli/redact/betterleaks_env_test.go)<br>[redact/custom_test.go](../../../../sources/entireio__cli/redact/custom_test.go)<br>[redact/packs_test.go](../../../../sources/entireio__cli/redact/packs_test.go)<br>[redact/pii_test.go](../../../../sources/entireio__cli/redact/pii_test.go) |
| security | 33 | [SECURITY.md](../../../../sources/entireio__cli/SECURITY.md)<br>[scripts/local-device-auth-smoke.sh](../../../../sources/entireio__cli/scripts/local-device-auth-smoke.sh)<br>[internal/entireclient/httputil/oauth_test.go](../../../../sources/entireio__cli/internal/entireclient/httputil/oauth_test.go)<br>[internal/entireclient/httputil/oauth.go](../../../../sources/entireio__cli/internal/entireclient/httputil/oauth.go)<br>[internal/coreapi/oas_security_gen.go](../../../../sources/entireio__cli/internal/coreapi/oas_security_gen.go)<br>[docs/security-and-privacy.md](../../../../sources/entireio__cli/docs/security-and-privacy.md)<br>[cmd/entire/cli/auth_context_test.go](../../../../sources/entireio__cli/cmd/entire/cli/auth_context_test.go)<br>[cmd/entire/cli/auth_context.go](../../../../sources/entireio__cli/cmd/entire/cli/auth_context.go) |
| ci | 13 | [mise-tasks/test/ci/core](../../../../sources/entireio__cli/mise-tasks/test/ci/core)<br>[mise-tasks/test/ci/integration/shard](../../../../sources/entireio__cli/mise-tasks/test/ci/integration/shard)<br>[.github/workflows/ci.yml](../../../../sources/entireio__cli/.github/workflows/ci.yml)<br>[.github/workflows/codeql-actions.yml](../../../../sources/entireio__cli/.github/workflows/codeql-actions.yml)<br>[.github/workflows/e2e-checkpoints-v2.yml](../../../../sources/entireio__cli/.github/workflows/e2e-checkpoints-v2.yml)<br>[.github/workflows/e2e-isolated.yml](../../../../sources/entireio__cli/.github/workflows/e2e-isolated.yml)<br>[.github/workflows/e2e-windows.yml](../../../../sources/entireio__cli/.github/workflows/e2e-windows.yml)<br>[.github/workflows/e2e.yml](../../../../sources/entireio__cli/.github/workflows/e2e.yml) |
| container | 1 | [.devcontainer/Dockerfile](../../../../sources/entireio__cli/.devcontainer/Dockerfile) |
| instruction | 5 | [CLAUDE.md](../../../../sources/entireio__cli/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/entireio__cli/.github/copilot-instructions.md)<br>[.codex/config.toml](../../../../sources/entireio__cli/.codex/config.toml)<br>[.codex/hooks.json](../../../../sources/entireio__cli/.codex/hooks.json)<br>[.codex/agents/entire-search.toml](../../../../sources/entireio__cli/.codex/agents/entire-search.toml) |
| docs | 26 | [README.md](../../../../sources/entireio__cli/README.md)<br>[e2e/README.md](../../../../sources/entireio__cli/e2e/README.md)<br>[e2e/exploratory/README.md](../../../../sources/entireio__cli/e2e/exploratory/README.md)<br>[docs/first-time-contributors.md](../../../../sources/entireio__cli/docs/first-time-contributors.md)<br>[docs/install-provenance-plan.md](../../../../sources/entireio__cli/docs/install-provenance-plan.md)<br>[docs/KNOWN_LIMITATIONS.md](../../../../sources/entireio__cli/docs/KNOWN_LIMITATIONS.md)<br>[docs/security-and-privacy.md](../../../../sources/entireio__cli/docs/security-and-privacy.md)<br>[docs/generated/.gitignore](../../../../sources/entireio__cli/docs/generated/.gitignore) |
| config | 1 | [go.mod](../../../../sources/entireio__cli/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 471 | [scripts/test-attribution-e2e.sh](../../../../sources/entireio__cli/scripts/test-attribution-e2e.sh)<br>[scripts/test-codex-agent-integration.sh](../../../../sources/entireio__cli/scripts/test-codex-agent-integration.sh)<br>[scripts/test-copilot-cli-agent-integration.sh](../../../../sources/entireio__cli/scripts/test-copilot-cli-agent-integration.sh)<br>[scripts/test-copilot-token-metadata.sh](../../../../sources/entireio__cli/scripts/test-copilot-token-metadata.sh)<br>[redact/betterleaks_env_test.go](../../../../sources/entireio__cli/redact/betterleaks_env_test.go)<br>[redact/custom_test.go](../../../../sources/entireio__cli/redact/custom_test.go) |
| CI workflow | 13 | [mise-tasks/test/ci/core](../../../../sources/entireio__cli/mise-tasks/test/ci/core)<br>[mise-tasks/test/ci/integration/shard](../../../../sources/entireio__cli/mise-tasks/test/ci/integration/shard)<br>[.github/workflows/ci.yml](../../../../sources/entireio__cli/.github/workflows/ci.yml)<br>[.github/workflows/codeql-actions.yml](../../../../sources/entireio__cli/.github/workflows/codeql-actions.yml)<br>[.github/workflows/e2e-checkpoints-v2.yml](../../../../sources/entireio__cli/.github/workflows/e2e-checkpoints-v2.yml)<br>[.github/workflows/e2e-isolated.yml](../../../../sources/entireio__cli/.github/workflows/e2e-isolated.yml) |
| 컨테이너/배포 | 1 | [.devcontainer/Dockerfile](../../../../sources/entireio__cli/.devcontainer/Dockerfile) |
| 보안/정책 | 33 | [SECURITY.md](../../../../sources/entireio__cli/SECURITY.md)<br>[scripts/local-device-auth-smoke.sh](../../../../sources/entireio__cli/scripts/local-device-auth-smoke.sh)<br>[internal/entireclient/httputil/oauth_test.go](../../../../sources/entireio__cli/internal/entireclient/httputil/oauth_test.go)<br>[internal/entireclient/httputil/oauth.go](../../../../sources/entireio__cli/internal/entireclient/httputil/oauth.go)<br>[internal/coreapi/oas_security_gen.go](../../../../sources/entireio__cli/internal/coreapi/oas_security_gen.go)<br>[docs/security-and-privacy.md](../../../../sources/entireio__cli/docs/security-and-privacy.md) |
| 에이전트 지시문 | 5 | [CLAUDE.md](../../../../sources/entireio__cli/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/entireio__cli/.github/copilot-instructions.md)<br>[.codex/config.toml](../../../../sources/entireio__cli/.codex/config.toml)<br>[.codex/hooks.json](../../../../sources/entireio__cli/.codex/hooks.json)<br>[.codex/agents/entire-search.toml](../../../../sources/entireio__cli/.codex/agents/entire-search.toml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `perf/context.go`, `internal/remotehelper/gitproto/agent.go`, `internal/remotehelper/githelper/agent.go`.
2. entrypoint를 따라 실행 흐름 확인: `e2e/vogon/main.go`, `e2e/cmd/testreport/main.go`, `e2e/bootstrap/main.go`.
3. agent/tool runtime 매핑: `perf/context.go`, `internal/remotehelper/gitproto/agent.go`, `internal/remotehelper/githelper/agent.go`.
4. retrieval/memory/indexing 확인: `.pi/extensions/entire/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/test-attribution-e2e.sh`, `scripts/test-codex-agent-integration.sh`, `scripts/test-copilot-cli-agent-integration.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 📜 Entire CLI hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside comm. 핵심 구조 신호는 Go, go.mod, README.md, CLAUDE.md, LICENSE, chroma이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
