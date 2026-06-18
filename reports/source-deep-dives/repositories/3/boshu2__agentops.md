# boshu2/agentops 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The operational layer for coding agents. Memory, validation, and feedback loops that compound between sessions.

## 요약

- 조사 단위: `sources/boshu2__agentops` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,574 files, 832 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tests/fixtures/proof-repo/main.go, evals/workbench/python-api/app/main.py, evals/workbench/go-cli/cmd/wb/main.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 코딩 에이전트 참고 구현이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | boshu2/agentops |
| 주제 | 코딩 에이전트/IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Go |
| Stars | 392 |
| Forks | 40 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/boshu2__agentops](../../../../sources/boshu2__agentops) |
| 기존 보고서 | [reports/global-trending/repositories/boshu2__agentops.md](../../../global-trending/repositories/boshu2__agentops.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4574 / 832 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .agy-plugin, .claude, .claude-plugin, .codex, .codex-plugin, .githooks, .github, .opencode, agents, bin, cli, deploy, docs, evals, evidence, examples, homebrew-tap, images, lib |
| 상위 확장자 | .md: 1689, .go: 1412, .sh: 634, .json: 346, .bats: 184, .feature: 51, .txt: 51, (none): 41, .yaml: 37, .py: 34, .jsonl: 28, .yml: 18 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 127 |
| docs | documentation surface | 10 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| bin | top-level component | 1 |
| cli | top-level component | 1 |
| deploy | deployment surface | 1 |
| evals | top-level component | 1 |
| evidence | top-level component | 1 |
| examples | top-level component | 1 |
| homebrew-tap | top-level component | 1 |
| images | top-level component | 1 |
| lib | source boundary | 1 |
| plugins | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | local-ci | make local-ci |
| utility | Makefile | local-ci-fast | make local-ci-fast |
| utility | Makefile | ci | make ci |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| quality | Makefile | docs-check | make docs-check |
| utility | Makefile | regen-all | make regen-all |
| quality | Makefile | regen-check | make regen-check |
| utility | Makefile | clean | make clean |
| utility | Makefile | help | make help |


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
| entrypoints | [tests/fixtures/proof-repo/main.go](../../../../sources/boshu2__agentops/tests/fixtures/proof-repo/main.go) | entrypoints signal |
| entrypoints | [evals/workbench/python-api/app/main.py](../../../../sources/boshu2__agentops/evals/workbench/python-api/app/main.py) | entrypoints signal |
| entrypoints | [evals/workbench/go-cli/cmd/wb/main.go](../../../../sources/boshu2__agentops/evals/workbench/go-cli/cmd/wb/main.go) | entrypoints signal |
| entrypoints | [cli/cmd/witness-crosscheck/main.go](../../../../sources/boshu2__agentops/cli/cmd/witness-crosscheck/main.go) | entrypoints signal |
| agentRuntime | [AGENTS-CI.md](../../../../sources/boshu2__agentops/AGENTS-CI.md) | agentRuntime signal |
| agentRuntime | [AGENTS-CODEX.md](../../../../sources/boshu2__agentops/AGENTS-CODEX.md) | agentRuntime signal |
| agentRuntime | [AGENTS-RUNTIME.md](../../../../sources/boshu2__agentops/AGENTS-RUNTIME.md) | agentRuntime signal |
| agentRuntime | [AGENTS-WORKFLOW.md](../../../../sources/boshu2__agentops/AGENTS-WORKFLOW.md) | agentRuntime signal |
| instruction | [AGENTS.md](../../../../sources/boshu2__agentops/AGENTS.md) | instruction signal |
| instruction | [cli/AGENTS.md](../../../../sources/boshu2__agentops/cli/AGENTS.md) | instruction signal |
| instruction | [cli/internal/vibecheck/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/vibecheck/AGENTS.md) | instruction signal |
| instruction | [cli/internal/types/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/AGENTS.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [tests/fixtures/proof-repo/main.go](../../../../sources/boshu2__agentops/tests/fixtures/proof-repo/main.go)<br>[evals/workbench/python-api/app/main.py](../../../../sources/boshu2__agentops/evals/workbench/python-api/app/main.py)<br>[evals/workbench/go-cli/cmd/wb/main.go](../../../../sources/boshu2__agentops/evals/workbench/go-cli/cmd/wb/main.go)<br>[cli/cmd/witness-crosscheck/main.go](../../../../sources/boshu2__agentops/cli/cmd/witness-crosscheck/main.go)<br>[cli/cmd/skill-frontmatter-json/main.go](../../../../sources/boshu2__agentops/cli/cmd/skill-frontmatter-json/main.go)<br>[cli/cmd/ao/main.go](../../../../sources/boshu2__agentops/cli/cmd/ao/main.go)<br>[bin/factory](../../../../sources/boshu2__agentops/bin/factory)<br>[bin/ralph](../../../../sources/boshu2__agentops/bin/ralph) |
| agentRuntime | 1546 | [AGENTS-CI.md](../../../../sources/boshu2__agentops/AGENTS-CI.md)<br>[AGENTS-CODEX.md](../../../../sources/boshu2__agentops/AGENTS-CODEX.md)<br>[AGENTS-RUNTIME.md](../../../../sources/boshu2__agentops/AGENTS-RUNTIME.md)<br>[AGENTS-WORKFLOW.md](../../../../sources/boshu2__agentops/AGENTS-WORKFLOW.md)<br>[AGENTS.md](../../../../sources/boshu2__agentops/AGENTS.md)<br>[MEMORY.md](../../../../sources/boshu2__agentops/MEMORY.md)<br>[tests/skills/check-alias-collisions.sh](../../../../sources/boshu2__agentops/tests/skills/check-alias-collisions.sh)<br>[tests/skills/lint-skills.sh](../../../../sources/boshu2__agentops/tests/skills/lint-skills.sh) |
| mcp | 6 | [skills-codex/research/references/deep-research-mcp.md](../../../../sources/boshu2__agentops/skills-codex/research/references/deep-research-mcp.md)<br>[skills/research/references/deep-research-mcp.md](../../../../sources/boshu2__agentops/skills/research/references/deep-research-mcp.md)<br>[skills/agent-mail/references/FIX-MCP-CONFIG.md](../../../../sources/boshu2__agentops/skills/agent-mail/references/FIX-MCP-CONFIG.md)<br>[images/gemini/mcp_config.json](../../../../sources/boshu2__agentops/images/gemini/mcp_config.json)<br>[cli/cmd/ao/mcp_serve.go](../../../../sources/boshu2__agentops/cli/cmd/ao/mcp_serve.go)<br>[.agy-plugin/mcp_config.json](../../../../sources/boshu2__agentops/.agy-plugin/mcp_config.json) |
| retrieval | 157 | [MEMORY.md](../../../../sources/boshu2__agentops/MEMORY.md)<br>[tests/scripts/check-retrieval-quality-ratchet.bats](../../../../sources/boshu2__agentops/tests/scripts/check-retrieval-quality-ratchet.bats)<br>[tests/scripts/generate-index.bats](../../../../sources/boshu2__agentops/tests/scripts/generate-index.bats)<br>[tests/scripts/nightly-knowledge-cycle.bats](../../../../sources/boshu2__agentops/tests/scripts/nightly-knowledge-cycle.bats)<br>[tests/claude-code/test-knowledge-skill.sh](../../../../sources/boshu2__agentops/tests/claude-code/test-knowledge-skill.sh)<br>[skills-codex/standards/references/standards-index.md](../../../../sources/boshu2__agentops/skills-codex/standards/references/standards-index.md)<br>[skills-codex/research/references/iterative-retrieval.md](../../../../sources/boshu2__agentops/skills-codex/research/references/iterative-retrieval.md)<br>[skills-codex/domain/references/index-primitive.md](../../../../sources/boshu2__agentops/skills-codex/domain/references/index-primitive.md) |
| spec | 159 | [requirements-docs.txt](../../../../sources/boshu2__agentops/requirements-docs.txt)<br>[tests/team-runner/fixtures/sample-team-spec-claude.json](../../../../sources/boshu2__agentops/tests/team-runner/fixtures/sample-team-spec-claude.json)<br>[tests/team-runner/fixtures/sample-team-spec.json](../../../../sources/boshu2__agentops/tests/team-runner/fixtures/sample-team-spec.json)<br>[tests/spec-consistency/README.md](../../../../sources/boshu2__agentops/tests/spec-consistency/README.md)<br>[tests/spec-consistency/test-gate.sh](../../../../sources/boshu2__agentops/tests/spec-consistency/test-gate.sh)<br>[tests/spec-consistency/fixtures/few-invariants.md](../../../../sources/boshu2__agentops/tests/spec-consistency/fixtures/few-invariants.md)<br>[tests/spec-consistency/fixtures/few-test-rows.md](../../../../sources/boshu2__agentops/tests/spec-consistency/fixtures/few-test-rows.md)<br>[tests/spec-consistency/fixtures/missing-frontmatter.md](../../../../sources/boshu2__agentops/tests/spec-consistency/fixtures/missing-frontmatter.md) |
| eval | 1364 | [tests/Dockerfile.e2e](../../../../sources/boshu2__agentops/tests/Dockerfile.e2e)<br>[tests/release-smoke-test.sh](../../../../sources/boshu2__agentops/tests/release-smoke-test.sh)<br>[tests/run-all.sh](../../../../sources/boshu2__agentops/tests/run-all.sh)<br>[tests/smoke-test.sh](../../../../sources/boshu2__agentops/tests/smoke-test.sh)<br>[tests/windows/test-windows-smoke.ps1](../../../../sources/boshu2__agentops/tests/windows/test-windows-smoke.ps1)<br>[tests/team-runner/run-all.sh](../../../../sources/boshu2__agentops/tests/team-runner/run-all.sh)<br>[tests/team-runner/test-runner-dry-run.sh](../../../../sources/boshu2__agentops/tests/team-runner/test-runner-dry-run.sh)<br>[tests/team-runner/test-schemas.sh](../../../../sources/boshu2__agentops/tests/team-runner/test-schemas.sh) |
| security | 180 | [tests/scripts/audit-assertion-density.bats](../../../../sources/boshu2__agentops/tests/scripts/audit-assertion-density.bats)<br>[tests/scripts/audit-skill-metadata.bats](../../../../sources/boshu2__agentops/tests/scripts/audit-skill-metadata.bats)<br>[tests/scripts/check-corpus-path-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/check-corpus-path-guard.bats)<br>[tests/scripts/check-corpus-secret-scan.bats](../../../../sources/boshu2__agentops/tests/scripts/check-corpus-secret-scan.bats)<br>[tests/scripts/check-ledger-prefix-policy.bats](../../../../sources/boshu2__agentops/tests/scripts/check-ledger-prefix-policy.bats)<br>[tests/scripts/duplicate-work-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/duplicate-work-guard.bats)<br>[tests/scripts/installed-skill-edit-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/installed-skill-edit-guard.bats)<br>[tests/scripts/test-ci-policy-parity.sh](../../../../sources/boshu2__agentops/tests/scripts/test-ci-policy-parity.sh) |
| ci | 11 | [.github/workflows/agent-output-validate.yml](../../../../sources/boshu2__agentops/.github/workflows/agent-output-validate.yml)<br>[.github/workflows/claude.yml](../../../../sources/boshu2__agentops/.github/workflows/claude.yml)<br>[.github/workflows/docs.yml](../../../../sources/boshu2__agentops/.github/workflows/docs.yml)<br>[.github/workflows/install-e2e.yml](../../../../sources/boshu2__agentops/.github/workflows/install-e2e.yml)<br>[.github/workflows/labeler.yml](../../../../sources/boshu2__agentops/.github/workflows/labeler.yml)<br>[.github/workflows/nightly-rpi-brief.yml](../../../../sources/boshu2__agentops/.github/workflows/nightly-rpi-brief.yml)<br>[.github/workflows/nightly.yml](../../../../sources/boshu2__agentops/.github/workflows/nightly.yml)<br>[.github/workflows/release.yml](../../../../sources/boshu2__agentops/.github/workflows/release.yml) |
| container | 2 | [tests/Dockerfile.e2e](../../../../sources/boshu2__agentops/tests/Dockerfile.e2e)<br>[deploy/agentops-refinery.service](../../../../sources/boshu2__agentops/deploy/agentops-refinery.service) |
| instruction | 14 | [AGENTS.md](../../../../sources/boshu2__agentops/AGENTS.md)<br>[cli/AGENTS.md](../../../../sources/boshu2__agentops/cli/AGENTS.md)<br>[cli/internal/vibecheck/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/vibecheck/AGENTS.md)<br>[cli/internal/types/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/AGENTS.md)<br>[cli/internal/types/quest/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/quest/AGENTS.md)<br>[cli/internal/search/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/search/AGENTS.md)<br>[cli/internal/ratchet/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/ratchet/AGENTS.md)<br>[cli/internal/quality/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/quality/AGENTS.md) |
| docs | 642 | [mkdocs.yml](../../../../sources/boshu2__agentops/mkdocs.yml)<br>[README.md](../../../../sources/boshu2__agentops/README.md)<br>[tests/spec-consistency/README.md](../../../../sources/boshu2__agentops/tests/spec-consistency/README.md)<br>[tests/lint/README.md](../../../../sources/boshu2__agentops/tests/lint/README.md)<br>[tests/goals/README.md](../../../../sources/boshu2__agentops/tests/goals/README.md)<br>[tests/fixtures/provenance/README.md](../../../../sources/boshu2__agentops/tests/fixtures/provenance/README.md)<br>[tests/fixtures/goals-trace/docs/learnings/2026-05-17-trace-chain.md](../../../../sources/boshu2__agentops/tests/fixtures/goals-trace/docs/learnings/2026-05-17-trace-chain.md)<br>[tests/explicit-skill-requests/README.md](../../../../sources/boshu2__agentops/tests/explicit-skill-requests/README.md) |
| config | 11 | [Makefile](../../../../sources/boshu2__agentops/Makefile)<br>[requirements-docs.txt](../../../../sources/boshu2__agentops/requirements-docs.txt)<br>[tests/fixtures/proof-repo/go.mod](../../../../sources/boshu2__agentops/tests/fixtures/proof-repo/go.mod)<br>[evals/workbench/Makefile](../../../../sources/boshu2__agentops/evals/workbench/Makefile)<br>[evals/workbench/python-api/Makefile](../../../../sources/boshu2__agentops/evals/workbench/python-api/Makefile)<br>[evals/workbench/python-api/pyproject.toml](../../../../sources/boshu2__agentops/evals/workbench/python-api/pyproject.toml)<br>[evals/workbench/go-cli/go.mod](../../../../sources/boshu2__agentops/evals/workbench/go-cli/go.mod)<br>[evals/workbench/go-cli/Makefile](../../../../sources/boshu2__agentops/evals/workbench/go-cli/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1364 | [tests/Dockerfile.e2e](../../../../sources/boshu2__agentops/tests/Dockerfile.e2e)<br>[tests/release-smoke-test.sh](../../../../sources/boshu2__agentops/tests/release-smoke-test.sh)<br>[tests/run-all.sh](../../../../sources/boshu2__agentops/tests/run-all.sh)<br>[tests/smoke-test.sh](../../../../sources/boshu2__agentops/tests/smoke-test.sh)<br>[tests/windows/test-windows-smoke.ps1](../../../../sources/boshu2__agentops/tests/windows/test-windows-smoke.ps1)<br>[tests/team-runner/run-all.sh](../../../../sources/boshu2__agentops/tests/team-runner/run-all.sh) |
| CI workflow | 11 | [.github/workflows/agent-output-validate.yml](../../../../sources/boshu2__agentops/.github/workflows/agent-output-validate.yml)<br>[.github/workflows/claude.yml](../../../../sources/boshu2__agentops/.github/workflows/claude.yml)<br>[.github/workflows/docs.yml](../../../../sources/boshu2__agentops/.github/workflows/docs.yml)<br>[.github/workflows/install-e2e.yml](../../../../sources/boshu2__agentops/.github/workflows/install-e2e.yml)<br>[.github/workflows/labeler.yml](../../../../sources/boshu2__agentops/.github/workflows/labeler.yml)<br>[.github/workflows/nightly-rpi-brief.yml](../../../../sources/boshu2__agentops/.github/workflows/nightly-rpi-brief.yml) |
| 컨테이너/배포 | 2 | [tests/Dockerfile.e2e](../../../../sources/boshu2__agentops/tests/Dockerfile.e2e)<br>[deploy/agentops-refinery.service](../../../../sources/boshu2__agentops/deploy/agentops-refinery.service) |
| 보안/정책 | 180 | [tests/scripts/audit-assertion-density.bats](../../../../sources/boshu2__agentops/tests/scripts/audit-assertion-density.bats)<br>[tests/scripts/audit-skill-metadata.bats](../../../../sources/boshu2__agentops/tests/scripts/audit-skill-metadata.bats)<br>[tests/scripts/check-corpus-path-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/check-corpus-path-guard.bats)<br>[tests/scripts/check-corpus-secret-scan.bats](../../../../sources/boshu2__agentops/tests/scripts/check-corpus-secret-scan.bats)<br>[tests/scripts/check-ledger-prefix-policy.bats](../../../../sources/boshu2__agentops/tests/scripts/check-ledger-prefix-policy.bats)<br>[tests/scripts/duplicate-work-guard.bats](../../../../sources/boshu2__agentops/tests/scripts/duplicate-work-guard.bats) |
| 에이전트 지시문 | 14 | [AGENTS.md](../../../../sources/boshu2__agentops/AGENTS.md)<br>[cli/AGENTS.md](../../../../sources/boshu2__agentops/cli/AGENTS.md)<br>[cli/internal/vibecheck/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/vibecheck/AGENTS.md)<br>[cli/internal/types/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/AGENTS.md)<br>[cli/internal/types/quest/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/types/quest/AGENTS.md)<br>[cli/internal/search/AGENTS.md](../../../../sources/boshu2__agentops/cli/internal/search/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/fixtures/proof-repo/main.go`, `evals/workbench/python-api/app/main.py`, `evals/workbench/go-cli/cmd/wb/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `tests/fixtures/proof-repo/main.go`, `evals/workbench/python-api/app/main.py`, `evals/workbench/go-cli/cmd/wb/main.go`.
3. agent/tool runtime 매핑: `AGENTS-CI.md`, `AGENTS-CODEX.md`, `AGENTS-RUNTIME.md`.
4. retrieval/memory/indexing 확인: `MEMORY.md`, `tests/scripts/check-retrieval-quality-ratchet.bats`, `tests/scripts/generate-index.bats`.
5. test/eval 파일로 동작 검증: `tests/Dockerfile.e2e`, `tests/release-smoke-test.sh`, `tests/run-all.sh`.

## 기존 레포 인사이트

코딩 에이전트/IDE 관점에서 The operational layer for coding agents. Memory, validation, and feedback loops that compound between sessions.. 핵심 구조 신호는 Go, Makefile, README.md, AGENTS.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 코딩 에이전트 참고 구현이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
