# minmaxflow/mini-kode 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/minmaxflow__mini-kode |
| remote | https://github.com/minmaxflow/mini-kode.git |
| HEAD | 4e7f976 (2025-11-04) docs: add DeepWiki analysis link to README |
| branch | master |
| groups | previous-clone-inventory-107 |
| files | 150 |
| dirs | 20 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Mini-Kode`, `🌟 Why Mini-Kode?`, `🚀 Quick Start (Install & Use)`, `Install Globally`, `Set Up API Key`, `or`, `Run Mini-Kode`, `Interactive mode (launch UI)`, `Non-interactive mode (direct execution)`, `🔧 Development Quick Start`, `Prerequisites`, `Install Dependencies`, `Development Commands`, `Development mode with file watching`, `Build`, `Test`, `📖 Learning Resources`, `📚 Project Analysis`

> Mini Kode An educational AI coding assistant project that helps you understand and hack modern AI coding assistant systems. 🌟 Why Mini Kode? Mini Kode is an educational project designed to help developers understand modern Coding Agent architecture. We strike the perfect balance between overly complex open source projects and simplistic demo examples, offering a complete yet manageable implementation (14K lines of production code) with 📚 Education First Design Clean architecture built on OpenAI SDK with thoughtful type design and comprehensive comments 🛠️ Complete Tool System Unified interface with comprehensive tools for file operations, search, and command execution 🔌 MCP Integration Connect to external MCP servers for extended functionality ⚙️ Multi LLM Support Compatible with OpenAI APIs, including GLM, DeepSeek, and other mainstream models 🤖 Agent Loop Complete LLM workflow wit

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| AGENTS.md | file |
| CLAUDE.md | other |
| demo.png | file |
| docs | dir |
| KNOWN_ISSUES.md | file |
| LICENSE | file |
| package.json | file |
| pnpm-lock.yaml | file |
| README.md | file |
| src | dir |
| tsconfig.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 134 |
| (root) | 9 |
| docs/ | 7 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 134 | preferred |
| docs/ | 7 | preferred |
| src/ui/ | 51 | large |
| src/ui/components/ | 32 | large |
| src/tools/ | 28 | large |
| src/permissions/ | 14 | large |
| src/agent/ | 10 | large |
| src/ui/commands/ | 7 | large |
| src/mentions/ | 6 | large |
| src/mcp/ | 5 | large |
| src/ui/hooks/ | 5 | large |
| src/utils/ | 5 | large |
| src/config/ | 4 | large |
| src/sessions/ | 4 | large |
| src/llm/ | 2 | large |
| src/nonInteractive/ | 2 | large |
| src/ui/debug/ | 2 | large |
| src/ui/utils/ | 2 | large |
| src/cli/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | mini-kode | dev, build, test, lint, format, prepublishOnly, postpublish | @modelcontextprotocol/sdk, @types/turndown, chalk, commander, diff, fuzzysort, glob, ink, marked, openai, react, react-devtools-core, turndown, use-effect-event |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/README.md`
- `docs/architecture.md`
- `docs/config.md`
- `docs/llm-tool-integration.md`
- `docs/permission.md`
- `docs/tools.md`
- `docs/ui.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `src/mcp/client.test.ts`
- `src/mcp/client.ts`
- `src/mcp/index.ts`
- `src/mcp/tools.ts`
- `src/mcp/types.ts`
- `src/ui/commands/mcpCommand.ts`

### 스펙/템플릿/명령/스킬 후보

- `src/ui/commands/clearCommand.ts`
- `src/ui/commands/command.types.ts`
- `src/ui/commands/compactCommand.ts`
- `src/ui/commands/executor.ts`
- `src/ui/commands/index.ts`
- `src/ui/commands/initCommand.ts`
- `src/ui/commands/mcpCommand.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/agent/context.test.ts`
- `src/agent/executor.test.ts`
- `src/agent/formatters.test.ts`
- `src/agent/prompts.test.ts`
- `src/config/manager.test.ts`
- `src/mcp/client.test.ts`
- `src/mentions/context.test.ts`
- `src/nonInteractive/runner.test.ts`
- `src/permissions/commandParser.test.ts`
- `src/permissions/commandValidator.test.ts`
- `src/permissions/permission.test.ts`
- `src/permissions/permissionRequest.test.ts`
- `src/sessions/validation.test.ts`
- `src/tools/architect.test.ts`
- `src/tools/bash.test.ts`
- `src/tools/fetch.test.ts`
- `src/tools/fileEdit.test.ts`
- `src/tools/fileRead.test.ts`
- `src/tools/glob.test.ts`
- `src/tools/grep.test.ts`
- `src/tools/limitUtils.test.ts`
- `src/tools/listFiles.test.ts`
- `src/tools/openai.test.ts`
- `src/tools/registry.test.ts`
- `src/tools/runner.test.ts`
- `src/tools/todo.test.ts`
- `src/ui/components/MessageFeed.test.tsx`
- `src/ui/components/PromptInput.test.tsx`
- `src/ui/components/ToolCall.test.tsx`
- `src/ui/components/tool-views/FetchResultView.test.tsx`
- `src/ui/hooks/useFileCompletion.test.ts`
- `src/utils/file-type.test.ts`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 102 |
| .tsx | 32 |
| .md | 10 |
| .json | 2 |
| .gitignore | 1 |
| .png | 1 |
| .yaml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `src/ui/ 내부 책임 분리`
- `src/ui/components/ 내부 책임 분리`
- `src/tools/ 내부 책임 분리`
- `src/ui/commands/clearCommand.ts 스펙/명령 의미`
- `src/ui/commands/command.types.ts 스펙/명령 의미`
- `src/ui/commands/compactCommand.ts 스펙/명령 의미`
- `src/ui/commands/executor.ts 스펙/명령 의미`
- `src/ui/commands/index.ts 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`
- `pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

