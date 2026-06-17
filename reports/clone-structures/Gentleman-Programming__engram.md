# gentleman-programming/engram 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Gentleman-Programming__engram |
| remote | https://github.com/Gentleman-Programming/engram.git |
| HEAD | 36c0819 (2026-06-14) Merge pull request #497 from Gentleman-Programming/fix/cloud-relation-backfill |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 436 |
| dirs | 138 |
| stack | Node/TypeScript/JavaScript, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quick Start`, `Install`, `Setup Your Agent`, `Pi Package`, `How It Works`, `MCP Tools (20)`, `Terminal UI`, `Git Sync`, `Cloud Integration (Opt-In Replication)`, `Steps to Test (Beta — Phases 2+3+4)`, `Setup (4 commands)`, `Isolated env (does NOT touch ~/.engram or your prod cloud)`, `Use cases`, `Simulate a "second machine"`, `In another terminal: ./engram-beta serve`, `Cleanup (zero residue)`, `Full guide + troubleshooting`, `CLI Reference`

> <p align="center" <img width="1024" alt="Engram — One Brain. Local or Cloud." src="assets/branding/engram banner.png" / </p <p align="center" <strong Persistent memory for AI coding agents</strong <br <em One brain. Local or cloud. Agent agnostic, single binary, zero dependencies.</em </p <p align="center" <a href="docs/INSTALLATION.md" Installation</a &bull; <a href="docs/engram cloud/README.md" Engram Cloud</a &bull; <a href="docs/AGENT SETUP.md" Agent Setup</a &bull; <a href="docs/CODEBASE GUIDE.md" Codebase Guide</a &bull; <a href="docs/ARCHITECTURE.md" Architecture</a &bull; <a href="docs/PLUGINS.md" Plugins</a &bull; <a href="docs/TEAM USAGE.md" Team Usage</a &bull; <a href="CONTRIBUTING.md" Contributing</a &bull; <a href="DOCS.md" Full Docs</a </p engram /ˈen.ɡræm/ — neuroscience the physical trace of a memory in the brain. Your AI coding agent forgets everything when the session 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .devcontainer | dir |
| .engram | dir |
| .github | dir |
| .gitignore | file |
| .goreleaser.yaml | file |
| .npmrc | file |
| .windsurf | dir |
| AGENTS.md | file |
| assets | dir |
| CHANGELOG.md | file |
| cmd | dir |
| CODEOWNERS | file |
| CONTRIBUTING.md | file |
| docker | dir |
| docker-compose.beta.yml | file |
| docker-compose.cloud.yml | file |
| docs | dir |
| DOCS.md | file |
| go.mod | file |
| go.sum | file |
| internal | dir |
| LICENSE | file |
| Makefile | file |
| openspec | dir |
| plugin | dir |
| README.md | file |
| SECURITY.md | file |
| setup.sh | file |
| skills | dir |
| tools | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| openspec/ | 139 |
| internal/ | 134 |
| plugin/ | 36 |
| docs/ | 35 |
| skills/ | 21 |
| (root) | 17 |
| cmd/ | 17 |
| .github/ | 13 |
| assets/ | 11 |
| .engram/ | 7 |
| tools/ | 2 |
| .claude-plugin/ | 1 |
| .devcontainer/ | 1 |
| .windsurf/ | 1 |
| docker/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cmd/ | 17 | preferred |
| docs/ | 35 | preferred |
| skills/ | 21 | preferred |
| tools/ | 2 | preferred |
| openspec/ | 139 | preferred |
| internal/ | 134 | large |
| openspec/changes/ | 133 | large |
| openspec/changes/archive/ | 55 | large |
| internal/cloud/ | 45 | large |
| plugin/ | 36 | large |
| internal/cloud/dashboard/ | 19 | large |
| cmd/engram/ | 17 | large |
| internal/obsidian/ | 16 | large |
| internal/store/ | 14 | large |
| .github/ | 13 | large |
| plugin/pi/ | 13 | large |
| internal/llm/ | 12 | large |
| assets/ | 11 | large |
| plugin/claude-code/ | 11 | large |
| internal/tui/ | 10 | large |
| openspec/changes/doctor-diagnostic/ | 10 | large |
| docs/codebase/ | 9 | large |
| internal/cloud/cloudstore/ | 9 | large |
| internal/mcp/ | 9 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker/cloud/Dockerfile`
- `go.mod`
- `plugin/obsidian/package.json`
- `plugin/obsidian/tsconfig.json`
- `plugin/pi/package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| plugin/obsidian/package.json | engram-brain | preinstall, build, dev |  |
| plugin/pi/package.json | gentle-engram | test | @earendil-works/pi-tui, typebox |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go.mod | github.com/Gentleman-Programming/engram | 1.25.10 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/AGENT-SETUP.md`
- `docs/ARCHITECTURE.md`
- `docs/BETA_TESTING.md`
- `docs/CODEBASE-GUIDE.md`
- `docs/COMPARISON.md`
- `docs/DOCTOR.md`
- `docs/ENGRAM-CLOUD-BRANDING.md`
- `docs/ENGRAM-CLOUD.md`
- `docs/INSTALLATION.md`
- `docs/PLUGINS.md`
- `docs/TEAM-USAGE.md`
- `docs/beta/obsidian-brain.md`
- `docs/codebase/dashboard.md`
- `docs/codebase/integrations.md`
- `docs/codebase/interfaces.md`
- `docs/codebase/maintainer-playbook.md`
- `docs/codebase/memory-core.md`
- `docs/codebase/mental-model.md`
- `docs/codebase/reference-map.md`
- `docs/codebase/repository-map.md`
- `docs/codebase/sync-and-cloud.md`
- `docs/diagrams/authentication.es.svg`
- `docs/diagrams/authentication.svg`
- `docs/diagrams/autosync.es.svg`
- `docs/diagrams/autosync.svg`
- `docs/diagrams/communication.es.svg`
- `docs/diagrams/communication.svg`
- `docs/diagrams/security.es.svg`
- `docs/diagrams/security.svg`
- `docs/engram-cloud/README.md`
- `docs/engram-cloud/branding.md`
- `docs/engram-cloud/docker-compose.ghcr.yml`
- `docs/engram-cloud/quickstart.md`
- `docs/engram-cloud/troubleshooting.md`
- `docs/intended-usage.md`
- `plugin/pi/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `internal/mcp/activity.go`
- `internal/mcp/activity_test.go`
- `internal/mcp/mcp.go`
- `internal/mcp/mcp_compare_test.go`
- `internal/mcp/mcp_conflict_loop_test.go`
- `internal/mcp/mcp_judge_test.go`
- `internal/mcp/mcp_test.go`
- `internal/mcp/write_queue.go`
- `internal/mcp/write_queue_test.go`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/apply-progress.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/design.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/proposal.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/specs/mcp-project-resolution/spec.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/tasks.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/verify-report.md`
- `openspec/changes/doctor-diagnostic/specs/mcp-project-resolution/spec.md`
- `openspec/specs/mcp-project-resolution/spec.md`
- `plugin/claude-code/.mcp.json`
- `plugin/claude-code/skills/memory/SKILL.md`
- `plugin/pi/mcp-template.json`
- `skills/architecture-guardrails/SKILL.md`
- `skills/backlog-triage/SKILL.md`
- `skills/branch-pr/SKILL.md`
- `skills/business-rules/SKILL.md`
- `skills/catalog.md`
- `skills/commit-hygiene/SKILL.md`
- `skills/cultural-norms/SKILL.md`
- `skills/dashboard-htmx/SKILL.md`
- `skills/docs-alignment/SKILL.md`
- `skills/gentleman-bubbletea/SKILL.md`
- `skills/issue-creation/SKILL.md`
- `skills/memory-protocol/SKILL.md`
- `skills/plugin-thin/SKILL.md`
- `skills/pr-review-deep/SKILL.md`
- `skills/project-structure/SKILL.md`
- `skills/sdd-flow/SKILL.md`
- `skills/server-api/SKILL.md`
- `skills/testing-coverage/SKILL.md`
- `skills/tui-quality/SKILL.md`
- `skills/ui-elements/SKILL.md`
- `skills/visual-language/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/archive-report.md`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/design.md`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/proposal.md`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/specs/obsidian-export/spec.md`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/tasks.md`
- `openspec/changes/archive/2026-04-06-obsidian-plugin/archive-report.md`
- `openspec/changes/archive/2026-04-06-obsidian-plugin/design.md`
- `openspec/changes/archive/2026-04-06-obsidian-plugin/proposal.md`
- `openspec/changes/archive/2026-04-06-obsidian-plugin/specs/obsidian-export/spec.md`
- `openspec/changes/archive/2026-04-06-obsidian-plugin/specs/obsidian-plugin/spec.md`
- `openspec/changes/archive/2026-04-06-obsidian-plugin/tasks.md`
- `openspec/changes/archive/2026-04-23-cloud-autosync-restoration/design.md`
- `openspec/changes/archive/2026-04-23-cloud-autosync-restoration/exploration.md`
- `openspec/changes/archive/2026-04-23-cloud-autosync-restoration/proposal.md`
- `openspec/changes/archive/2026-04-23-cloud-autosync-restoration/specs/cloud-autosync/spec.md`
- `openspec/changes/archive/2026-04-23-cloud-autosync-restoration/tasks.md`
- `openspec/changes/archive/2026-04-23-cloud-dashboard-visual-parity/archive-report.md`
- `openspec/changes/archive/2026-04-23-cloud-dashboard-visual-parity/design.md`
- `openspec/changes/archive/2026-04-23-cloud-dashboard-visual-parity/proposal.md`
- `openspec/changes/archive/2026-04-23-cloud-dashboard-visual-parity/spec.md`
- `openspec/changes/archive/2026-04-24-cloud-sync-audit-log/design.md`
- `openspec/changes/archive/2026-04-24-cloud-sync-audit-log/exploration.md`
- `openspec/changes/archive/2026-04-24-cloud-sync-audit-log/proposal.md`
- `openspec/changes/archive/2026-04-24-cloud-sync-audit-log/specs/cloud-sync-audit/spec.md`
- `openspec/changes/archive/2026-04-24-cloud-sync-audit-log/tasks.md`
- `openspec/changes/archive/2026-04-24-cloud-sync-audit-log/verify-report.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/apply-progress.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/design.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/proposal.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/specs/mcp-project-resolution/spec.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/tasks.md`
- `openspec/changes/archive/2026-04-24-mcp-project-autodetection/verify-report.md`
- `openspec/changes/archive/2026-04-24-memory-conflict-surfacing/design.md`
- `openspec/changes/archive/2026-04-24-memory-conflict-surfacing/proposal.md`
- `openspec/changes/archive/2026-04-24-memory-conflict-surfacing/spec.md`
- `openspec/changes/archive/2026-04-24-memory-conflict-surfacing/tasks.md`
- `openspec/changes/archive/2026-04-24-memory-conflict-surfacing/verify-report.md`
- `openspec/changes/archive/2026-04-26-memory-conflict-surfacing-cloud-sync/design.md`
- `openspec/changes/archive/2026-04-26-memory-conflict-surfacing-cloud-sync/exploration.md`
- `openspec/changes/archive/2026-04-26-memory-conflict-surfacing-cloud-sync/proposal.md`
- `openspec/changes/archive/2026-04-26-memory-conflict-surfacing-cloud-sync/spec.md`
- `openspec/changes/archive/2026-04-26-memory-conflict-surfacing-cloud-sync/tasks.md`
- `openspec/changes/archive/2026-04-26-memory-conflict-surfacing-cloud-sync/verify-report.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-audit/design.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-audit/exploration.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-audit/proposal.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-audit/spec.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-audit/tasks.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-audit/verify-report.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-semantic/design.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-semantic/exploration.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-semantic/proposal.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-semantic/spec.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-semantic/tasks.md`
- `openspec/changes/archive/2026-04-27-memory-conflict-semantic/verify-report.md`
- `openspec/changes/cloud-autosync-restoration/apply-progress.md`
- `openspec/changes/cloud-autosync-restoration/design.md`
- `openspec/changes/cloud-autosync-restoration/exploration.md`
- `openspec/changes/cloud-autosync-restoration/proposal.md`
- `openspec/changes/cloud-autosync-restoration/specs/cloud-autosync/spec.md`
- `openspec/changes/cloud-autosync-restoration/tasks.md`
- `openspec/changes/cloud-autosync-restoration/verify-report.md`
- `openspec/changes/cloud-dashboard-parity/apply-progress.md`
- `openspec/changes/cloud-dashboard-parity/design.md`
- `openspec/changes/cloud-dashboard-parity/exploration.md`
- `openspec/changes/cloud-dashboard-parity/proposal.md`
- `openspec/changes/cloud-dashboard-parity/specs/cloud-dashboard/spec.md`
- `openspec/changes/cloud-dashboard-parity/tasks.md`
- `openspec/changes/cloud-dashboard-parity/verify-report.md`
- `openspec/changes/cloud-dashboard-visual-parity/apply-progress.md`
- `openspec/changes/cloud-dashboard-visual-parity/connected-nav-exploration.md`
- `openspec/changes/cloud-dashboard-visual-parity/design.md`
- `openspec/changes/cloud-dashboard-visual-parity/exploration.md`
- `openspec/changes/cloud-dashboard-visual-parity/proposal.md`
- `openspec/changes/cloud-dashboard-visual-parity/specs/cloud-dashboard/spec.md`
- `openspec/changes/cloud-dashboard-visual-parity/tasks.md`
- `openspec/changes/cloud-dashboard-visual-parity/verify-report.md`
- `openspec/changes/cloud-upgrade-path-existing-users/apply-progress.md`
- `openspec/changes/cloud-upgrade-path-existing-users/design.md`
- `openspec/changes/cloud-upgrade-path-existing-users/exploration.md`
- `openspec/changes/cloud-upgrade-path-existing-users/proposal.md`
- `openspec/changes/cloud-upgrade-path-existing-users/specs/cloud-upgrade-path/spec.md`
- `openspec/changes/cloud-upgrade-path-existing-users/tasks.md`
- `openspec/changes/cloud-upgrade-path-existing-users/verify-report.md`
- `openspec/changes/doctor-diagnostic/apply-progress.md`
- `openspec/changes/doctor-diagnostic/design.md`
- `openspec/changes/doctor-diagnostic/exploration.md`
- `openspec/changes/doctor-diagnostic/manual-verification.md`
- `openspec/changes/doctor-diagnostic/proposal.md`
- `openspec/changes/doctor-diagnostic/spec.md`
- `openspec/changes/doctor-diagnostic/specs/mcp-project-resolution/spec.md`
- `openspec/changes/doctor-diagnostic/specs/operational-diagnostics/spec.md`
- `openspec/changes/doctor-diagnostic/tasks.md`
- `openspec/changes/doctor-diagnostic/verify-report.md`
- `openspec/changes/doctor-repair-reclassify-project/apply-progress.md`
- `openspec/changes/doctor-repair-reclassify-project/design.md`
- `openspec/changes/doctor-repair-reclassify-project/exploration.md`
- `openspec/changes/doctor-repair-reclassify-project/manual-verification.md`
- `openspec/changes/doctor-repair-reclassify-project/proposal.md`
- `openspec/changes/doctor-repair-reclassify-project/specs/operational-diagnostics/spec.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `plugin/pi/test/compaction-recovery.test.mjs`
- `plugin/pi/test/index-source.test.mjs`
- `plugin/pi/test/memory-tool-chrome.test.mjs`
- `plugin/pi/test/private-redaction.test.mjs`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/cloud-image.yml`
- `.github/workflows/pr-check.yml`
- `.github/workflows/publish-pi.yml`
- `.github/workflows/release.yml`
- `.github/workflows/stale.yml`
- `docker-compose.beta.yml`
- `docker-compose.cloud.yml`
- `docker/cloud/Dockerfile`
- `docs/engram-cloud/docker-compose.ghcr.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 196 |
| .go | 144 |
| .yml | 15 |
| .json | 14 |
| .png | 11 |
| .sh | 8 |
| .svg | 8 |
| .ts | 6 |
| .gz | 5 |
| .js | 5 |
| .mjs | 5 |
| .templ | 3 |
| .css | 2 |
| .gitignore | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cmd/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `openspec/ 내부 책임 분리`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/archive-report.md 스펙/명령 의미`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/design.md 스펙/명령 의미`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/proposal.md 스펙/명령 의미`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/specs/obsidian-export/spec.md 스펙/명령 의미`
- `openspec/changes/archive/2026-04-06-obsidian-auto-sync/tasks.md 스펙/명령 의미`
- `docker/cloud/Dockerfile 실행 스크립트와 패키지 경계`
- `go.mod 실행 스크립트와 패키지 경계`
- `plugin/obsidian/package.json 실행 스크립트와 패키지 경계`
- `plugin/obsidian/tsconfig.json 실행 스크립트와 패키지 경계`
- `plugin/pi/package.json 실행 스크립트와 패키지 경계`

