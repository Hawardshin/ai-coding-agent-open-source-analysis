# github/github-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

GitHub's official MCP Server

## 요약

- 조사 단위: `sources/github__github-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 490 files, 131 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=third-party/github.com/modelcontextprotocol/go-sdk/LICENSE, third-party/github.com/github/github-mcp-server/LICENSE, script/print-mcp-diff-configs/main.go이고, 의존성 단서는 mcp, modelcontextprotocol, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | github/github-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 30770 |
| Forks | 4406 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/github__github-mcp-server](../../../../sources/github__github-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/github__github-mcp-server.md](../../../global-trending/repositories/github__github-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 490 / 131 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, cmd, docs, e2e, internal, pkg, script, third-party, ui |
| 상위 확장자 | .go: 176, .snap: 111, .png: 62, (none): 50, .md: 44, .yml: 18, .tsx: 7, .html: 5, .json: 5, .txt: 4, .ts: 3, .mjs: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 29 |
| cmd/github-mcp-server | cmd workspace | 6 |
| cmd/mcpcurl | cmd workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| e2e | validation surface | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| script | top-level component | 1 |
| third-party | top-level component | 1 |
| ui | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [third-party/github.com/modelcontextprotocol/go-sdk/LICENSE](../../../../sources/github__github-mcp-server/third-party/github.com/modelcontextprotocol/go-sdk/LICENSE) | mcp signal |
| mcp | [third-party/github.com/github/github-mcp-server/LICENSE](../../../../sources/github__github-mcp-server/third-party/github.com/github/github-mcp-server/LICENSE) | mcp signal |
| mcp | [script/print-mcp-diff-configs/main.go](../../../../sources/github__github-mcp-server/script/print-mcp-diff-configs/main.go) | mcp signal |
| mcp | [pkg/http/middleware/mcp_parse_test.go](../../../../sources/github__github-mcp-server/pkg/http/middleware/mcp_parse_test.go) | mcp signal |
| agentRuntime | [ui/src/hooks/useMcpApp.ts](../../../../sources/github__github-mcp-server/ui/src/hooks/useMcpApp.ts) | agentRuntime signal |
| agentRuntime | [pkg/octicons/icons/tools-dark.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/tools-dark.png) | agentRuntime signal |
| agentRuntime | [pkg/octicons/icons/tools-light.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/tools-light.png) | agentRuntime signal |
| agentRuntime | [pkg/octicons/icons/workflow-dark.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/workflow-dark.png) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/github__github-mcp-server/server.json) | entrypoints signal |
| entrypoints | [pkg/http/server.go](../../../../sources/github__github-mcp-server/pkg/http/server.go) | entrypoints signal |
| entrypoints | [pkg/github/server.go](../../../../sources/github__github-mcp-server/pkg/github/server.go) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/github__github-mcp-server/.github/copilot-instructions.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [server.json](../../../../sources/github__github-mcp-server/server.json)<br>[script/print-mcp-diff-configs/main.go](../../../../sources/github__github-mcp-server/script/print-mcp-diff-configs/main.go)<br>[pkg/http/server.go](../../../../sources/github__github-mcp-server/pkg/http/server.go)<br>[pkg/github/server.go](../../../../sources/github__github-mcp-server/pkg/github/server.go)<br>[internal/ghmcp/server.go](../../../../sources/github__github-mcp-server/internal/ghmcp/server.go)<br>[cmd/mcpcurl/main.go](../../../../sources/github__github-mcp-server/cmd/mcpcurl/main.go)<br>[cmd/github-mcp-server/main.go](../../../../sources/github__github-mcp-server/cmd/github-mcp-server/main.go) |
| agentRuntime | 18 | [ui/src/hooks/useMcpApp.ts](../../../../sources/github__github-mcp-server/ui/src/hooks/useMcpApp.ts)<br>[pkg/octicons/icons/tools-dark.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/tools-dark.png)<br>[pkg/octicons/icons/tools-light.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/tools-light.png)<br>[pkg/octicons/icons/workflow-dark.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/workflow-dark.png)<br>[pkg/octicons/icons/workflow-light.png](../../../../sources/github__github-mcp-server/pkg/octicons/icons/workflow-light.png)<br>[pkg/github/context_tools_test.go](../../../../sources/github__github-mcp-server/pkg/github/context_tools_test.go)<br>[pkg/github/context_tools.go](../../../../sources/github__github-mcp-server/pkg/github/context_tools.go)<br>[pkg/github/tools_static_validation_test.go](../../../../sources/github__github-mcp-server/pkg/github/tools_static_validation_test.go) |
| mcp | 14 | [third-party/github.com/modelcontextprotocol/go-sdk/LICENSE](../../../../sources/github__github-mcp-server/third-party/github.com/modelcontextprotocol/go-sdk/LICENSE)<br>[third-party/github.com/github/github-mcp-server/LICENSE](../../../../sources/github__github-mcp-server/third-party/github.com/github/github-mcp-server/LICENSE)<br>[script/print-mcp-diff-configs/main.go](../../../../sources/github__github-mcp-server/script/print-mcp-diff-configs/main.go)<br>[pkg/http/middleware/mcp_parse_test.go](../../../../sources/github__github-mcp-server/pkg/http/middleware/mcp_parse_test.go)<br>[pkg/http/middleware/mcp_parse.go](../../../../sources/github__github-mcp-server/pkg/http/middleware/mcp_parse.go)<br>[pkg/github/__toolsnaps__/issue_write_ff_remote_mcp_issue_fields.snap](../../../../sources/github__github-mcp-server/pkg/github/__toolsnaps__/issue_write_ff_remote_mcp_issue_fields.snap)<br>[pkg/github/__toolsnaps__/list_issues_ff_remote_mcp_issue_fields.snap](../../../../sources/github__github-mcp-server/pkg/github/__toolsnaps__/list_issues_ff_remote_mcp_issue_fields.snap)<br>[pkg/context/mcp_info.go](../../../../sources/github__github-mcp-server/pkg/context/mcp_info.go) |
| retrieval | 5 | [ui/src/apps/pr-write/index.html](../../../../sources/github__github-mcp-server/ui/src/apps/pr-write/index.html)<br>[ui/src/apps/pr-edit/index.html](../../../../sources/github__github-mcp-server/ui/src/apps/pr-edit/index.html)<br>[ui/src/apps/issue-write/index.html](../../../../sources/github__github-mcp-server/ui/src/apps/issue-write/index.html)<br>[ui/src/apps/get-me/index.html](../../../../sources/github__github-mcp-server/ui/src/apps/get-me/index.html)<br>[pkg/github/ui_embed.go](../../../../sources/github__github-mcp-server/pkg/github/ui_embed.go) |
| spec | 0 | 명확하지 않음 |
| eval | 76 | [pkg/utils/api_test.go](../../../../sources/github__github-mcp-server/pkg/utils/api_test.go)<br>[pkg/toolvalidation/readonlyhint_test.go](../../../../sources/github__github-mcp-server/pkg/toolvalidation/readonlyhint_test.go)<br>[pkg/tooldiscovery/search_test.go](../../../../sources/github__github-mcp-server/pkg/tooldiscovery/search_test.go)<br>[pkg/scopes/fetcher_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/fetcher_test.go)<br>[pkg/scopes/map_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/map_test.go)<br>[pkg/scopes/scopes_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/scopes_test.go)<br>[pkg/sanitize/sanitize_test.go](../../../../sources/github__github-mcp-server/pkg/sanitize/sanitize_test.go)<br>[pkg/raw/raw_test.go](../../../../sources/github__github-mcp-server/pkg/raw/raw_test.go) |
| security | 13 | [SECURITY.md](../../../../sources/github__github-mcp-server/SECURITY.md)<br>[pkg/http/oauth/oauth_test.go](../../../../sources/github__github-mcp-server/pkg/http/oauth/oauth_test.go)<br>[pkg/http/oauth/oauth.go](../../../../sources/github__github-mcp-server/pkg/http/oauth/oauth.go)<br>[pkg/github/secret_scanning_test.go](../../../../sources/github__github-mcp-server/pkg/github/secret_scanning_test.go)<br>[pkg/github/secret_scanning.go](../../../../sources/github__github-mcp-server/pkg/github/secret_scanning.go)<br>[pkg/github/security_advisories_test.go](../../../../sources/github__github-mcp-server/pkg/github/security_advisories_test.go)<br>[pkg/github/security_advisories.go](../../../../sources/github__github-mcp-server/pkg/github/security_advisories.go)<br>[pkg/github/__toolsnaps__/get_global_security_advisory.snap](../../../../sources/github__github-mcp-server/pkg/github/__toolsnaps__/get_global_security_advisory.snap) |
| ci | 13 | [.github/workflows/ai-issue-assessment.yml](../../../../sources/github__github-mcp-server/.github/workflows/ai-issue-assessment.yml)<br>[.github/workflows/close-inactive-issues.yml](../../../../sources/github__github-mcp-server/.github/workflows/close-inactive-issues.yml)<br>[.github/workflows/code-scanning.yml](../../../../sources/github__github-mcp-server/.github/workflows/code-scanning.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/github__github-mcp-server/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs-check.yml](../../../../sources/github__github-mcp-server/.github/workflows/docs-check.yml)<br>[.github/workflows/go.yml](../../../../sources/github__github-mcp-server/.github/workflows/go.yml)<br>[.github/workflows/goreleaser.yml](../../../../sources/github__github-mcp-server/.github/workflows/goreleaser.yml)<br>[.github/workflows/issue-labeler.yml](../../../../sources/github__github-mcp-server/.github/workflows/issue-labeler.yml) |
| container | 1 | [Dockerfile](../../../../sources/github__github-mcp-server/Dockerfile) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/github__github-mcp-server/.github/copilot-instructions.md) |
| docs | 30 | [README.md](../../../../sources/github__github-mcp-server/README.md)<br>[e2e/README.md](../../../../sources/github__github-mcp-server/e2e/README.md)<br>[docs/error-handling.md](../../../../sources/github__github-mcp-server/docs/error-handling.md)<br>[docs/feature-flags.md](../../../../sources/github__github-mcp-server/docs/feature-flags.md)<br>[docs/host-integration.md](../../../../sources/github__github-mcp-server/docs/host-integration.md)<br>[docs/insiders-features.md](../../../../sources/github__github-mcp-server/docs/insiders-features.md)<br>[docs/policies-and-governance.md](../../../../sources/github__github-mcp-server/docs/policies-and-governance.md)<br>[docs/remote-server.md](../../../../sources/github__github-mcp-server/docs/remote-server.md) |
| config | 3 | [go.mod](../../../../sources/github__github-mcp-server/go.mod)<br>[ui/package.json](../../../../sources/github__github-mcp-server/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/github__github-mcp-server/ui/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 76 | [pkg/utils/api_test.go](../../../../sources/github__github-mcp-server/pkg/utils/api_test.go)<br>[pkg/toolvalidation/readonlyhint_test.go](../../../../sources/github__github-mcp-server/pkg/toolvalidation/readonlyhint_test.go)<br>[pkg/tooldiscovery/search_test.go](../../../../sources/github__github-mcp-server/pkg/tooldiscovery/search_test.go)<br>[pkg/scopes/fetcher_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/fetcher_test.go)<br>[pkg/scopes/map_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/map_test.go)<br>[pkg/scopes/scopes_test.go](../../../../sources/github__github-mcp-server/pkg/scopes/scopes_test.go) |
| CI workflow | 13 | [.github/workflows/ai-issue-assessment.yml](../../../../sources/github__github-mcp-server/.github/workflows/ai-issue-assessment.yml)<br>[.github/workflows/close-inactive-issues.yml](../../../../sources/github__github-mcp-server/.github/workflows/close-inactive-issues.yml)<br>[.github/workflows/code-scanning.yml](../../../../sources/github__github-mcp-server/.github/workflows/code-scanning.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/github__github-mcp-server/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs-check.yml](../../../../sources/github__github-mcp-server/.github/workflows/docs-check.yml)<br>[.github/workflows/go.yml](../../../../sources/github__github-mcp-server/.github/workflows/go.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/github__github-mcp-server/Dockerfile) |
| 보안/정책 | 13 | [SECURITY.md](../../../../sources/github__github-mcp-server/SECURITY.md)<br>[pkg/http/oauth/oauth_test.go](../../../../sources/github__github-mcp-server/pkg/http/oauth/oauth_test.go)<br>[pkg/http/oauth/oauth.go](../../../../sources/github__github-mcp-server/pkg/http/oauth/oauth.go)<br>[pkg/github/secret_scanning_test.go](../../../../sources/github__github-mcp-server/pkg/github/secret_scanning_test.go)<br>[pkg/github/secret_scanning.go](../../../../sources/github__github-mcp-server/pkg/github/secret_scanning.go)<br>[pkg/github/security_advisories_test.go](../../../../sources/github__github-mcp-server/pkg/github/security_advisories_test.go) |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/github__github-mcp-server/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `third-party/github.com/modelcontextprotocol/go-sdk/LICENSE`, `third-party/github.com/github/github-mcp-server/LICENSE`, `script/print-mcp-diff-configs/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `script/print-mcp-diff-configs/main.go`, `pkg/http/server.go`.
3. agent/tool runtime 매핑: `ui/src/hooks/useMcpApp.ts`, `pkg/octicons/icons/tools-dark.png`, `pkg/octicons/icons/tools-light.png`.
4. retrieval/memory/indexing 확인: `ui/src/apps/pr-write/index.html`, `ui/src/apps/pr-edit/index.html`, `ui/src/apps/issue-write/index.html`.
5. test/eval 파일로 동작 검증: `pkg/utils/api_test.go`, `pkg/toolvalidation/readonlyhint_test.go`, `pkg/tooldiscovery/search_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 GitHub's official MCP Server. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
