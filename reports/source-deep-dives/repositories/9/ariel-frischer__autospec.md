# ariel-frischer/autospec 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 650 files, 102 directories.

## 요약

- 조사 단위: `sources/ariel-frischer__autospec` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 650 files, 102 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests/e2e/workflow_test.go, scripts/hooks/post-merge이고, 의존성 단서는 claude, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ariel-frischer/autospec |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 136 |
| Forks | 10 |
| License | MIT License |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/ariel-frischer__autospec](../../../../sources/ariel-frischer__autospec) |
| 기존 보고서 | [reports/clone-structures/ariel-frischer__autospec.md](../../../clone-structures/ariel-frischer__autospec.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 650 / 102 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .autospec, .github, cmd, docs, internal, scripts, site, tests |
| 상위 확장자 | .go: 451, .md: 89, .yaml: 69, .sh: 11, (none): 10, .yml: 8, .html: 2, .json: 2, .js: 1, .lock: 1, .mod: 1, .scss: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 50 |
| docs | documentation surface | 19 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/autospec | cmd workspace | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | version | make version |
| build | Makefile | build | make build |
| build | Makefile | build-all | make build-all |
| utility | Makefile | install | make install |
| utility | Makefile | install-prod | make install-prod |
| utility | Makefile | run | make run |
| utility | Makefile | docs-sync | make docs-sync |
| serve-dev | Makefile | serve | make serve |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev-setup | make dev-setup |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | vet | make vet |
| utility | Makefile | deps | make deps |
| utility | Makefile | vendor | make vendor |
| utility | Makefile | tidy | make tidy |
| test | Makefile | test-go | make test-go |
| test | Makefile | test-v | make test-v |
| test | Makefile | test-coverage | make test-coverage |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | 없음 |
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
| agentRuntime | [AGENTS.md](../../../../sources/ariel-frischer__autospec/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/e2e/workflow_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/workflow_test.go) | agentRuntime signal |
| agentRuntime | [scripts/hooks/post-merge](../../../../sources/ariel-frischer__autospec/scripts/hooks/post-merge) | agentRuntime signal |
| agentRuntime | [scripts/hooks/post-rewrite](../../../../sources/ariel-frischer__autospec/scripts/hooks/post-rewrite) | agentRuntime signal |
| entrypoints | [cmd/autospec/main.go](../../../../sources/ariel-frischer__autospec/cmd/autospec/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/ariel-frischer__autospec/CLAUDE.md) | instruction signal |
| instruction | [docs/public/agents.md](../../../../sources/ariel-frischer__autospec/docs/public/agents.md) | instruction signal |
| config | [go.mod](../../../../sources/ariel-frischer__autospec/go.mod) | config signal |
| config | [Makefile](../../../../sources/ariel-frischer__autospec/Makefile) | config signal |
| ci | [.gitlab-ci.yml](../../../../sources/ariel-frischer__autospec/.gitlab-ci.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/ci.yml) | ci support |
| eval | [tests/mocks/README.md](../../../../sources/ariel-frischer__autospec/tests/mocks/README.md) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [cmd/autospec/main.go](../../../../sources/ariel-frischer__autospec/cmd/autospec/main.go) |
| agentRuntime | 90 | [AGENTS.md](../../../../sources/ariel-frischer__autospec/AGENTS.md)<br>[tests/e2e/workflow_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/workflow_test.go)<br>[scripts/hooks/post-merge](../../../../sources/ariel-frischer__autospec/scripts/hooks/post-merge)<br>[scripts/hooks/post-rewrite](../../../../sources/ariel-frischer__autospec/scripts/hooks/post-rewrite)<br>[scripts/hooks/pre-merge-commit](../../../../sources/ariel-frischer__autospec/scripts/hooks/pre-merge-commit)<br>[scripts/hooks/pre-rebase](../../../../sources/ariel-frischer__autospec/scripts/hooks/pre-rebase)<br>[internal/workflow/autocommit_test.go](../../../../sources/ariel-frischer__autospec/internal/workflow/autocommit_test.go)<br>[internal/workflow/autocommit.go](../../../../sources/ariel-frischer__autospec/internal/workflow/autocommit.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 8 | [site/index.md](../../../../sources/ariel-frischer__autospec/site/index.md)<br>[site/reference/index.md](../../../../sources/ariel-frischer__autospec/site/reference/index.md)<br>[site/guides/index.md](../../../../sources/ariel-frischer__autospec/site/guides/index.md)<br>[site/contributing/index.md](../../../../sources/ariel-frischer__autospec/site/contributing/index.md)<br>[internal/commands/embed_test.go](../../../../sources/ariel-frischer__autospec/internal/commands/embed_test.go)<br>[internal/commands/embed.go](../../../../sources/ariel-frischer__autospec/internal/commands/embed.go)<br>[internal/changelog/embed_test.go](../../../../sources/ariel-frischer__autospec/internal/changelog/embed_test.go)<br>[internal/changelog/embed.go](../../../../sources/ariel-frischer__autospec/internal/changelog/embed.go) |
| spec | 33 | [tests/mocks/fixtures/valid/spec.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/spec.yaml)<br>[tests/mocks/fixtures/partial/spec.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/partial/spec.yaml)<br>[tests/mocks/fixtures/invalid/spec-missing-feature.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/invalid/spec-missing-feature.yaml)<br>[tests/fixtures/mock-spec.md](../../../../sources/ariel-frischer__autospec/tests/fixtures/mock-spec.md)<br>[tests/e2e/spec_schema_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/spec_schema_test.go)<br>[tests/e2e/testdata/responses/spec.yaml](../../../../sources/ariel-frischer__autospec/tests/e2e/testdata/responses/spec.yaml)<br>[internal/workflow/testdata/spec/valid/spec.yaml](../../../../sources/ariel-frischer__autospec/internal/workflow/testdata/spec/valid/spec.yaml)<br>[internal/workflow/testdata/spec/invalid/spec.yaml](../../../../sources/ariel-frischer__autospec/internal/workflow/testdata/spec/invalid/spec.yaml) |
| eval | 275 | [tests/mocks/README.md](../../../../sources/ariel-frischer__autospec/tests/mocks/README.md)<br>[tests/mocks/scripts/generate-mock-artifacts.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/generate-mock-artifacts.sh)<br>[tests/mocks/scripts/mock_claude_test.go](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock_claude_test.go)<br>[tests/mocks/scripts/mock-claude.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock-claude.sh)<br>[tests/mocks/scripts/mock-opencode.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock-opencode.sh)<br>[tests/mocks/fixtures/valid/plan.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/plan.yaml)<br>[tests/mocks/fixtures/valid/spec.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/spec.yaml)<br>[tests/mocks/fixtures/valid/tasks.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/tasks.yaml) |
| security | 7 | [tests/e2e/coverage_audit_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/coverage_audit_test.go)<br>[internal/workflow/security_notice_test.go](../../../../sources/ariel-frischer__autospec/internal/workflow/security_notice_test.go)<br>[internal/workflow/security_notice.go](../../../../sources/ariel-frischer__autospec/internal/workflow/security_notice.go)<br>[internal/uninstall/permission_unix.go](../../../../sources/ariel-frischer__autospec/internal/uninstall/permission_unix.go)<br>[internal/uninstall/permission_windows.go](../../../../sources/ariel-frischer__autospec/internal/uninstall/permission_windows.go)<br>[internal/cli/shared/security_notice.go](../../../../sources/ariel-frischer__autospec/internal/cli/shared/security_notice.go)<br>[.github/SECURITY.md](../../../../sources/ariel-frischer__autospec/.github/SECURITY.md) |
| ci | 4 | [.gitlab-ci.yml](../../../../sources/ariel-frischer__autospec/.gitlab-ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/ariel-frischer__autospec/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ariel-frischer__autospec/CLAUDE.md)<br>[docs/public/agents.md](../../../../sources/ariel-frischer__autospec/docs/public/agents.md) |
| docs | 57 | [README.md](../../../../sources/ariel-frischer__autospec/README.md)<br>[tests/mocks/README.md](../../../../sources/ariel-frischer__autospec/tests/mocks/README.md)<br>[site/_config.yml](../../../../sources/ariel-frischer__autospec/site/_config.yml)<br>[site/.gitignore](../../../../sources/ariel-frischer__autospec/site/.gitignore)<br>[site/favicon.svg](../../../../sources/ariel-frischer__autospec/site/favicon.svg)<br>[site/Gemfile](../../../../sources/ariel-frischer__autospec/site/Gemfile)<br>[site/Gemfile.lock](../../../../sources/ariel-frischer__autospec/site/Gemfile.lock)<br>[site/index.md](../../../../sources/ariel-frischer__autospec/site/index.md) |
| config | 2 | [go.mod](../../../../sources/ariel-frischer__autospec/go.mod)<br>[Makefile](../../../../sources/ariel-frischer__autospec/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 275 | [tests/mocks/README.md](../../../../sources/ariel-frischer__autospec/tests/mocks/README.md)<br>[tests/mocks/scripts/generate-mock-artifacts.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/generate-mock-artifacts.sh)<br>[tests/mocks/scripts/mock_claude_test.go](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock_claude_test.go)<br>[tests/mocks/scripts/mock-claude.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock-claude.sh)<br>[tests/mocks/scripts/mock-opencode.sh](../../../../sources/ariel-frischer__autospec/tests/mocks/scripts/mock-opencode.sh)<br>[tests/mocks/fixtures/valid/plan.yaml](../../../../sources/ariel-frischer__autospec/tests/mocks/fixtures/valid/plan.yaml) |
| CI workflow | 4 | [.gitlab-ci.yml](../../../../sources/ariel-frischer__autospec/.gitlab-ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/ariel-frischer__autospec/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [tests/e2e/coverage_audit_test.go](../../../../sources/ariel-frischer__autospec/tests/e2e/coverage_audit_test.go)<br>[internal/workflow/security_notice_test.go](../../../../sources/ariel-frischer__autospec/internal/workflow/security_notice_test.go)<br>[internal/workflow/security_notice.go](../../../../sources/ariel-frischer__autospec/internal/workflow/security_notice.go)<br>[internal/uninstall/permission_unix.go](../../../../sources/ariel-frischer__autospec/internal/uninstall/permission_unix.go)<br>[internal/uninstall/permission_windows.go](../../../../sources/ariel-frischer__autospec/internal/uninstall/permission_windows.go)<br>[internal/cli/shared/security_notice.go](../../../../sources/ariel-frischer__autospec/internal/cli/shared/security_notice.go) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/ariel-frischer__autospec/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ariel-frischer__autospec/CLAUDE.md)<br>[docs/public/agents.md](../../../../sources/ariel-frischer__autospec/docs/public/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `tests/e2e/workflow_test.go`, `scripts/hooks/post-merge`.
2. entrypoint를 따라 실행 흐름 확인: `cmd/autospec/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/e2e/workflow_test.go`, `scripts/hooks/post-merge`.
4. retrieval/memory/indexing 확인: `site/index.md`, `site/reference/index.md`, `site/guides/index.md`.
5. test/eval 파일로 동작 검증: `tests/mocks/README.md`, `tests/mocks/scripts/generate-mock-artifacts.sh`, `tests/mocks/scripts/mock_claude_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 650 files, 102 directories.. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, CLAUDE.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
