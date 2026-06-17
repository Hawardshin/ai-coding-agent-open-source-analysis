# moazbuilds/codemachine-cli 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/moazbuilds__CodeMachine-CLI |
| remote | https://github.com/moazbuilds/CodeMachine-CLI.git |
| HEAD | 572def6 (2026-02-25) telemetry: replace auto-import console warnings with logger |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 552 |
| dirs | 157 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `How It Works`, `Why CodeMachine?`

> <p align="center" <img src="https //raw.githubusercontent.com/moazbuilds/CodeMachine CLI/main/images/banner.png" alt="CodeMachine Banner" width="100%" </p <p align="center" <code npm i g codemachine</code </p <p align="center" <strong CodeMachine is an open source tool that orchestrates AI coding agents into repeatable, long running workflows. ⚡️<br </p </strong Every time you use an AI coding agent, you're running a workflow. Fix a bug? You ask questions, reproduce, analyze, plan, implement, test. Build a feature? You research, design, code, review. The workflow lives in your head. You guide the agent through it, step by step, session by session. But every time you start, you rebuild it from scratch. You re explain the process. You remember to ask the right questions. You manage when to clear context, when to push forward, when to loop back. <p align="center" <strong CodeMachine lets yo

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .editorconfig | file |
| .github | dir |
| .gitignore | file |
| bin | dir |
| bun.lock | file |
| bunfig.toml | file |
| config | dir |
| CONTRIBUTING.md | file |
| CONTRIBUTORS.md | file |
| docker | dir |
| eslint.config.js | file |
| images | dir |
| LICENSE | file |
| package.json | file |
| prompts | dir |
| README.md | file |
| scripts | dir |
| src | dir |
| TELEMETRY_MIGRATION_PHASE_PLAN.md | file |
| templates | dir |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 499 |
| (root) | 12 |
| prompts/ | 11 |
| docker/ | 10 |
| config/ | 6 |
| images/ | 6 |
| scripts/ | 3 |
| .github/ | 2 |
| templates/ | 2 |
| bin/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 499 | preferred |
| templates/ | 2 | preferred |
| scripts/ | 3 | preferred |
| src/cli/ | 163 | large |
| src/cli/tui/ | 147 | large |
| src/infra/ | 115 | large |
| src/workflows/ | 114 | large |
| src/infra/engines/ | 91 | large |
| src/shared/ | 65 | large |
| src/agents/ | 33 | large |
| src/infra/mcp/ | 23 | large |
| src/workflows/directives/ | 22 | large |
| src/cli/commands/ | 13 | large |
| src/shared/prompts/ | 13 | large |
| src/workflows/runner/ | 13 | large |
| src/workflows/signals/ | 13 | large |
| src/agents/monitoring/ | 12 | large |
| prompts/ | 11 | large |
| prompts/templates/ | 11 | large |
| prompts/templates/ali/ | 11 | large |
| docker/ | 10 | large |
| docker/observability/ | 10 | large |
| src/shared/imports/ | 10 | large |
| src/runtime/ | 9 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `bun.lock`
- `config/package.json`
- `docker/observability/docker-compose.yml`
- `package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| config/package.json |  |  |  |
| package.json | codemachine | _comment_dev, dev, debug, start, _comment_build, build, _comment_quality, lint, test, test:watch, test:coverage, format, typecheck, _comment_telemetry, import-telemetry, _comment_release | @clack/prompts, @modelcontextprotocol/sdk, @opentelemetry/api, @opentelemetry/api-logs, @opentelemetry/exporter-logs-otlp-http, @opentelemetry/exporter-metrics-otlp-http, @opentelemetry/exporter-trace-otlp-http, @opentelemetry/exporter-zipkin, @opentelemetry/resources, @opentelemetry/sdk-logs, @opentelemetry/sdk-metrics, @opentelemetry/sdk-node, @opentelemetry/sdk-trace-base, @opentelemetry/semantic-conventions |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docker/observability/README.md`

### 에이전트 지침 후보

- `src/cli/commands/mcp.command.ts`
- `src/infra/engines/providers/auggie/mcp/adapter.ts`
- `src/infra/engines/providers/auggie/mcp/index.ts`
- `src/infra/engines/providers/auggie/mcp/settings.ts`
- `src/infra/engines/providers/ccr/mcp/adapter.ts`
- `src/infra/engines/providers/ccr/mcp/index.ts`
- `src/infra/engines/providers/ccr/mcp/settings.ts`
- `src/infra/engines/providers/claude/mcp/adapter.ts`
- `src/infra/engines/providers/claude/mcp/index.ts`
- `src/infra/engines/providers/claude/mcp/settings.ts`
- `src/infra/engines/providers/codex/mcp/adapter.ts`
- `src/infra/engines/providers/codex/mcp/index.ts`
- `src/infra/engines/providers/codex/mcp/settings.ts`
- `src/infra/engines/providers/cursor/mcp/adapter.ts`
- `src/infra/engines/providers/cursor/mcp/index.ts`
- `src/infra/engines/providers/cursor/mcp/settings.ts`
- `src/infra/engines/providers/mistral/mcp/adapter.ts`
- `src/infra/engines/providers/mistral/mcp/index.ts`
- `src/infra/engines/providers/mistral/mcp/settings.ts`
- `src/infra/engines/providers/opencode/mcp/adapter.ts`
- `src/infra/engines/providers/opencode/mcp/index.ts`
- `src/infra/engines/providers/opencode/mcp/settings.ts`
- `src/infra/mcp/context.ts`
- `src/infra/mcp/errors.ts`
- `src/infra/mcp/index.ts`
- `src/infra/mcp/registry.ts`
- `src/infra/mcp/router/backend.ts`
- `src/infra/mcp/router/config.ts`
- `src/infra/mcp/router/index.ts`
- `src/infra/mcp/servers/agent-coordination/config.ts`
- `src/infra/mcp/servers/agent-coordination/executor.ts`
- `src/infra/mcp/servers/agent-coordination/handler.ts`
- `src/infra/mcp/servers/agent-coordination/index.ts`
- `src/infra/mcp/servers/agent-coordination/schemas.ts`
- `src/infra/mcp/servers/agent-coordination/tools.ts`
- `src/infra/mcp/servers/agent-coordination/validator.ts`
- `src/infra/mcp/servers/workflow-signals/config.ts`
- `src/infra/mcp/servers/workflow-signals/handler.ts`
- `src/infra/mcp/servers/workflow-signals/index.ts`
- `src/infra/mcp/servers/workflow-signals/queue.ts`
- `src/infra/mcp/servers/workflow-signals/schemas.ts`
- `src/infra/mcp/servers/workflow-signals/tools.ts`
- `src/infra/mcp/setup.ts`
- `src/infra/mcp/types.ts`
- `src/infra/mcp/writer.ts`
- `src/workflows/mcp.ts`
- `src/workflows/signals/mcp/controller.ts`
- `src/workflows/signals/mcp/detector.ts`
- `src/workflows/signals/mcp/index.ts`

### 스펙/템플릿/명령/스킬 후보

- `prompts/templates/ali/ali.md`
- `prompts/templates/ali/chained/step-00-setup.md`
- `prompts/templates/ali/chained/step-01-brainstorming.md`
- `prompts/templates/ali/chained/step-02-workflow-definition.md`
- `prompts/templates/ali/chained/step-03-agents.md`
- `prompts/templates/ali/chained/step-04-prompts.md`
- `prompts/templates/ali/chained/step-05-workflow-generation.md`
- `prompts/templates/ali/quick-workflow.md`
- `prompts/templates/ali/shared/brain-methods.csv`
- `prompts/templates/ali/shared/step-completion.md`
- `prompts/templates/ali/workflow.md`
- `src/cli/commands/agents/export.ts`
- `src/cli/commands/agents/index.ts`
- `src/cli/commands/agents/list.ts`
- `src/cli/commands/agents/logs.ts`
- `src/cli/commands/agents/register.ts`
- `src/cli/commands/auth.command.ts`
- `src/cli/commands/export.command.ts`
- `src/cli/commands/import.command.ts`
- `src/cli/commands/index.ts`
- `src/cli/commands/mcp.command.ts`
- `src/cli/commands/run.command.ts`
- `src/cli/commands/step.command.ts`
- `src/cli/commands/templates.command.ts`
- `src/workflows/templates/globals.ts`
- `src/workflows/templates/index.ts`
- `src/workflows/templates/loader.ts`
- `src/workflows/templates/types.ts`
- `src/workflows/templates/validator.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/build.yml`
- `.github/workflows/publish.yml`
- `docker/observability/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 423 |
| .tsx | 78 |
| .md | 15 |
| .js | 8 |
| .json | 8 |
| .png | 6 |
| .yaml | 4 |
| .yml | 4 |
| .csv | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .lock | 1 |
| .toml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `src/cli/ 내부 책임 분리`
- `src/cli/tui/ 내부 책임 분리`
- `prompts/templates/ali/ali.md 스펙/명령 의미`
- `prompts/templates/ali/chained/step-00-setup.md 스펙/명령 의미`
- `prompts/templates/ali/chained/step-01-brainstorming.md 스펙/명령 의미`
- `prompts/templates/ali/chained/step-02-workflow-definition.md 스펙/명령 의미`
- `prompts/templates/ali/chained/step-03-agents.md 스펙/명령 의미`
- `bun.lock 실행 스크립트와 패키지 경계`
- `config/package.json 실행 스크립트와 패키지 경계`
- `docker/observability/docker-compose.yml 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

