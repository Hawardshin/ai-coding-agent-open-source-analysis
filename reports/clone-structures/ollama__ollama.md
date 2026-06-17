# ollama/ollama 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/ollama__ollama |
| remote | https://github.com/ollama/ollama |
| HEAD | 12e0437 (2026-06-11) launch: Fix launch provider drift (#16683) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 1233 |
| dirs | 230 |
| stack | Node/TypeScript/JavaScript, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Ollama`, `Download`, `macOS`, `Windows`, `Linux`, `Docker`, `Libraries`, `Community`, `Get started`, `Coding`, `AI assistant`, `Chat with a model`, `REST API`, `Python`, `JavaScript`, `Supported backends`, `Documentation`, `Community Integrations`

> <p align="center" <a href="https //ollama.com" <img src="https //github.com/ollama/ollama/assets/3325447/0d0b44e2 8f4a 4e99 9b52 a5c1c741c8f7" alt="ollama" width="200"/ </a </p Ollama Start building with open models. Download macOS or download manually Windows or download manually Linux Manual install instructions Docker The official Ollama Docker image ollama/ollama is available on Docker Hub. Libraries ollama python ollama js Community Discord 𝕏 (Twitter) Reddit Get started You'll be prompted to run a model or connect Ollama to your existing agents or applications such as Claude Code , OpenClaw , OpenCode , Codex , Copilot , and more. Coding To launch a specific integration Supported integrations include Claude Code, Codex, Copilot CLI, Droid, and OpenCode. AI assistant Use OpenClaw to turn Ollama into a personal AI assistant across WhatsApp, Telegram, Slack, Discord, and more Chat wi

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .golangci.yaml | file |
| AGENTS.md | file |
| anthropic | dir |
| api | dir |
| app | dir |
| auth | dir |
| CLAUDE.md | file |
| cmake | dir |
| CMakeLists.txt | file |
| CMakePresets.json | file |
| cmd | dir |
| CONTRIBUTING.md | file |
| convert | dir |
| discover | dir |
| Dockerfile | file |
| docs | dir |
| envconfig | dir |
| format | dir |
| fs | dir |
| go.mod | file |
| go.sum | file |
| harmony | dir |
| integration | dir |
| internal | dir |
| kvcache | dir |
| LICENSE | file |
| llama | dir |
| LLAMA_CPP_VERSION | file |
| llm | dir |
| logutil | dir |
| main.go | file |
| manifest | dir |
| middleware | dir |
| ml | dir |
| MLX_C_VERSION | file |
| MLX_VERSION | file |
| model | dir |
| openai | dir |
| parser | dir |
| progress | dir |
| readline | dir |
| README.md | file |
| runner | dir |
| scripts | dir |
| SECURITY.md | file |
| server | dir |
| template | dir |
| thinking | dir |
| tokenizer | dir |
| tools | dir |
| types | dir |
| version | dir |
| x | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| x/ | 225 |
| app/ | 201 |
| docs/ | 119 |
| template/ | 104 |
| model/ | 89 |
| cmd/ | 78 |
| server/ | 77 |
| convert/ | 73 |
| integration/ | 25 |
| discover/ | 24 |
| (root) | 19 |
| llm/ | 19 |
| fs/ | 16 |
| scripts/ | 15 |
| llama/ | 14 |
| ml/ | 14 |
| tokenizer/ | 13 |
| api/ | 11 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| app/ | 201 | preferred |
| cmd/ | 78 | preferred |
| server/ | 77 | preferred |
| docs/ | 119 | preferred |
| tools/ | 4 | preferred |
| scripts/ | 15 | preferred |
| x/ | 225 | large |
| app/ui/ | 104 | large |
| template/ | 104 | large |
| app/ui/app/ | 99 | large |
| x/mlxrunner/ | 94 | large |
| model/ | 89 | large |
| convert/ | 73 | large |
| template/testdata/ | 61 | large |
| x/mlxrunner/mlx/ | 60 | large |
| x/imagegen/ | 58 | large |
| docs/images/ | 50 | large |
| cmd/launch/ | 47 | large |
| model/renderers/ | 42 | large |
| model/parsers/ | 37 | large |
| server/internal/ | 28 | large |
| docs/integrations/ | 26 | large |
| integration/ | 25 | large |
| discover/ | 24 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `app/ui/app/package.json`
- `app/ui/app/tsconfig.json`
- `app/ui/app/vite.config.ts`
- `go.mod`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| app/ui/app/package.json | app | dev, build, lint, preview, prettier, prettier:check, storybook, build-storybook, test, test:ui, test:coverage | @headlessui/react, @heroicons/react, @tanstack/react-query, @tanstack/react-router, @tanstack/react-router-devtools, clsx, framer-motion, katex, micromark-extension-llm-math, ollama, react, react-dom, rehype-katex, rehype-prism-plus |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go.mod | github.com/ollama/ollama | 1.26.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `api/examples/README.md`
- `app/README.md`
- `app/webview/README.md`
- `cmd/bench/README.md`
- `docs/README.md`
- `docs/api.md`
- `docs/api/anthropic-compatibility.mdx`
- `docs/api/authentication.mdx`
- `docs/api/errors.mdx`
- `docs/api/introduction.mdx`
- `docs/api/openai-compatibility.mdx`
- `docs/api/streaming.mdx`
- `docs/api/usage.mdx`
- `docs/capabilities/embeddings.mdx`
- `docs/capabilities/streaming.mdx`
- `docs/capabilities/structured-outputs.mdx`
- `docs/capabilities/thinking.mdx`
- `docs/capabilities/tool-calling.mdx`
- `docs/capabilities/vision.mdx`
- `docs/capabilities/web-search.mdx`
- `docs/cli.mdx`
- `docs/cloud.mdx`
- `docs/context-length.mdx`
- `docs/development.md`
- `docs/docker.mdx`
- `docs/docs.json`
- `docs/examples.md`
- `docs/faq.mdx`
- `docs/favicon-dark.svg`
- `docs/favicon.svg`
- `docs/gpu.mdx`
- `docs/images/claude-code-kimi-k2-6.png`
- `docs/images/claude-cowork-kimi-k2-6.png`
- `docs/images/cline-cli.png`
- `docs/images/cline-kanban.png`
- `docs/images/cline-mcp.png`
- `docs/images/cline-settings.png`
- `docs/images/codex-app-annotate.png`
- `docs/images/codex-app-home.png`
- `docs/images/codex-app-review.png`
- `docs/images/codex-mcp.png`
- `docs/images/favicon.png`
- `docs/images/goose-cli.png`
- `docs/images/goose-mcp-1.png`
- `docs/images/goose-mcp-2.png`
- `docs/images/goose-settings.png`
- `docs/images/hermes.png`
- `docs/images/intellij-chat-sidebar.png`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `docs/images/cline-mcp.png`
- `docs/images/codex-mcp.png`
- `docs/images/goose-mcp-1.png`
- `docs/images/goose-mcp-2.png`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `app/ui/app/src/components/StreamingMarkdownContent.test.tsx`
- `app/ui/app/src/utils/clipboard.test.ts`
- `app/ui/app/src/utils/fileValidation.test.ts`
- `app/ui/app/src/utils/vram.test.ts`

### CI/Docker 후보

- `.github/workflows/latest.yaml`
- `.github/workflows/release.yaml`
- `.github/workflows/test-install.yaml`
- `.github/workflows/test-llamacpp-update.yaml`
- `.github/workflows/test.yaml`
- `Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 730 |
| .png | 62 |
| .mdx | 55 |
| .json | 45 |
| .h | 44 |
| .tsx | 39 |
| .ts | 33 |
| .md | 26 |
| .gotmpl | 22 |
| system-user-assistant-user | 20 |
| user | 20 |
| user-assistant-user | 20 |
| .svg | 16 |
| .sh | 9 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `app/ 내부 책임 분리`
- `cmd/ 내부 책임 분리`
- `server/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `app/ui/app/package.json 실행 스크립트와 패키지 경계`
- `app/ui/app/tsconfig.json 실행 스크립트와 패키지 경계`
- `app/ui/app/vite.config.ts 실행 스크립트와 패키지 경계`
- `go.mod 실행 스크립트와 패키지 경계`

