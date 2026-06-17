# IBM/iac-spec-kit 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/IBM__iac-spec-kit |
| remote | https://github.com/IBM/iac-spec-kit |
| HEAD | fc01030 (2026-03-02) Update CHANGELOG.md |
| branch | main |
| groups | spec-driven-20 |
| files | 91 |
| dirs | 30 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `IaC Spec Kit - a cloud-agnostic infrastructure as code specification toolkit`, `Table of Contents`, `What is Specification-Driven Development?`, `About this project`, `Visual Walkthrough`, `Infrastructure-specific features`, `Multi-Cloud Infrastructure Support`, `Contributing and future ideas`, `Get Started`, `1. Install IaC Specify CLI`, `macOS/Linux`, `Windows`, `2. Create the spec`, `3. Create a technical implementation plan`, `4. Break down into tasks`, `5. Execute implementation`, `Generated Example`, `Cloud Provider Examples`

> IaC Spec Kit a cloud agnostic infrastructure as code specification toolkit AI assisted workflows for translating business requirements into infrastructure code Table of Contents What is Specification Driven Development? About this project Infrastructure specific features Multi Cloud Infrastructure Support Get Started 1. Install IaC Specify CLI 2. Establish project principles 3. Create the spec 4. Create a technical implementation plan 5. Break down into tasks 6. Execute implementation Cloud Provider Examples Tips for Best Results Use frontier AI models Configure MCP servers in advance Add search capabilities Start fresh between commands Configure custom modes Supported AI Agents IaC Specify CLI Reference Commands iac specify init Arguments & Options Examples Available Slash Commands Infrastructure Architecture Section Environment Variables Core Philosophy Development Phases Experimental 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| dev | dir |
| docs | dir |
| examples | dir |
| IDEAS.md | file |
| LICENSE | file |
| media | dir |
| memory | dir |
| pyproject.toml | file |
| README.md | file |
| renovate.json | file |
| scripts | dir |
| src | dir |
| templates | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| examples/ | 36 |
| templates/ | 16 |
| .github/ | 12 |
| (root) | 10 |
| scripts/ | 10 |
| dev/ | 2 |
| src/ | 2 |
| docs/ | 1 |
| media/ | 1 |
| memory/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 2 | preferred |
| docs/ | 1 | preferred |
| examples/ | 36 | preferred |
| templates/ | 16 | preferred |
| scripts/ | 10 | preferred |
| .github/ | 12 | large |
| templates/commands/ | 9 | large |
| .github/workflows/ | 7 | large |
| .github/workflows/scripts/ | 6 | large |
| examples/01-simple-vpc/ | 5 | large |
| examples/02-static-website/ | 5 | large |
| examples/03-wordpress/ | 5 | large |
| examples/04-landing-zone/ | 5 | large |
| examples/05-three-tier-webapp/ | 5 | large |
| examples/06-data-pipeline/ | 5 | large |
| examples/07-microservices/ | 5 | large |
| scripts/bash/ | 5 | large |
| scripts/powershell/ | 5 | large |
| .github/ISSUE_TEMPLATE/ | 4 | large |
| examples/01-simple-vpc/cloud-workflows/ | 4 | large |
| examples/02-static-website/cloud-workflows/ | 4 | large |
| examples/03-wordpress/cloud-workflows/ | 4 | large |
| examples/04-landing-zone/cloud-workflows/ | 4 | large |
| examples/05-three-tier-webapp/cloud-workflows/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | iac-specify-cli | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/writing-tech-agnostic-specs.md`
- `examples/01-simple-vpc/README.md`
- `examples/02-static-website/README.md`
- `examples/03-wordpress/README.md`
- `examples/04-landing-zone/README.md`
- `examples/05-three-tier-webapp/README.md`
- `examples/06-data-pipeline/README.md`
- `examples/07-microservices/README.md`
- `examples/README.md`

### 에이전트 지침 후보

- `AGENTS.md`

### 스펙/템플릿/명령/스킬 후보

- `templates/commands/iac.analyze.md`
- `templates/commands/iac.checklist.md`
- `templates/commands/iac.clarify.md`
- `templates/commands/iac.enrichplan.md`
- `templates/commands/iac.implement.md`
- `templates/commands/iac.plan.md`
- `templates/commands/iac.principles.md`
- `templates/commands/iac.specify.md`
- `templates/commands/iac.tasks.md`
- `templates/plan-template.md`
- `templates/spec-template.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/release.yml`
- `.github/workflows/scripts/check-release-exists.sh`
- `.github/workflows/scripts/create-github-release.sh`
- `.github/workflows/scripts/create-release-packages.sh`
- `.github/workflows/scripts/generate-release-notes.sh`
- `.github/workflows/scripts/get-next-version.sh`
- `.github/workflows/scripts/update-version.sh`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 58 |
| .sh | 13 |
| .ps1 | 5 |
| .yml | 5 |
| .json | 2 |
| .py | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .png | 1 |
| .toml | 1 |
| codeowners | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `templates/commands/iac.analyze.md 스펙/명령 의미`
- `templates/commands/iac.checklist.md 스펙/명령 의미`
- `templates/commands/iac.clarify.md 스펙/명령 의미`
- `templates/commands/iac.enrichplan.md 스펙/명령 의미`
- `templates/commands/iac.implement.md 스펙/명령 의미`
- `pyproject.toml 실행 스크립트와 패키지 경계`

