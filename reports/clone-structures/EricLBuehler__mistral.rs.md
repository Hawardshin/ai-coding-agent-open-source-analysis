# EricLBuehler/mistral.rs 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/EricLBuehler__mistral.rs |
| remote | https://github.com/EricLBuehler/mistral.rs |
| HEAD | c22c2e2 (2026-06-12) feat(core): support new online calibration for K-quants! (#2203) |
| branch | master |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 1325 |
| dirs | 273 |
| stack | Node/TypeScript/JavaScript, Python, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Latest`, `Benchmarks`, `Why mistral.rs?`, `Quick Start`, `Install`, `Run Your First Model`, `Interactive chat`, `One-shot prompt (no interactive session)`, `One-shot with an image`, `Agentic REPL: search + code execution from the terminal`, `Start an API server with the built-in web UI`, `The `mistralrs` CLI`, `Auto-tune for your hardware and emit a config file`, `Run using the generated config`, `Diagnose system issues (CUDA, Metal, HuggingFace connectivity)`, `What Makes It Fast`, `Supported Models`, `Python SDK`

> <a name="top" </a <! <h1 align="center" mistral.rs </h1 <div align="center" <img src="https //raw.githubusercontent.com/EricLBuehler/mistral.rs/master/res/banner.png" alt="mistral.rs" width="100%" style="max width 800px;" </div <h3 align="center" Fast, flexible LLM inference. </h3 <p align="center" <a href="https //ericlbuehler.github.io/mistral.rs/" <b Documentation</b </a <a href="https //crates.io/crates/mistralrs" <b Rust SDK</b </a <a href="https //ericlbuehler.github.io/mistral.rs/tutorials/03 python sdk/" <b Python SDK</b </a <a href="https //discord.gg/SZrecqK8qw" <b Discord</b </a </p <p align="center" <a href="https //github.com/EricLBuehler/mistral.rs/stargazers" <img src="https //img.shields.io/github/stars/EricLBuehler/mistral.rs?style=social&label=Star" alt="GitHub stars" </a </p Latest DiffusionGemma block diffusion text generation. Fully integrated paged attention, prefix

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cargo | dir |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .typos.toml | file |
| AGENTS.md | file |
| calibration_data | dir |
| Cargo.lock | file |
| Cargo.toml | file |
| chat_templates | dir |
| CLAUDE.md | file |
| Dockerfile | file |
| Dockerfile.cuda-13.0-ubi9 | file |
| Dockerfile.cuda-all | file |
| Dockerfile.manylinux | file |
| docs | dir |
| examples | dir |
| game_of_life_plots | dir |
| install.ps1 | file |
| install.sh | file |
| LICENSE | file |
| Makefile | file |
| matformer_configs | dir |
| mistralrs | dir |
| mistralrs-audio | dir |
| mistralrs-bench | dir |
| mistralrs-cli | dir |
| mistralrs-code-exec | dir |
| mistralrs-core | dir |
| mistralrs-flash-attn | dir |
| mistralrs-macros | dir |
| mistralrs-mcp | dir |
| mistralrs-paged-attn | dir |
| mistralrs-pyo3 | dir |
| mistralrs-quant | dir |
| mistralrs-sandbox | dir |
| mistralrs-server | dir |
| mistralrs-server-core | dir |
| mistralrs-vision | dir |
| orderings | dir |
| README.md | file |
| releases | dir |
| res | dir |
| ring_configs | dir |
| sample_speech.wav | file |
| scripts | dir |
| speculative.toml | file |
| toml-selectors | dir |
| topologies | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| mistralrs-core/ | 358 |
| mistralrs-quant/ | 175 |
| examples/ | 133 |
| mistralrs-cli/ | 123 |
| docs/ | 119 |
| mistralrs-flash-attn/ | 78 |
| mistralrs/ | 77 |
| mistralrs-paged-attn/ | 75 |
| mistralrs-server-core/ | 35 |
| (root) | 19 |
| chat_templates/ | 16 |
| mistralrs-pyo3/ | 16 |
| mistralrs-sandbox/ | 14 |
| scripts/ | 11 |
| .github/ | 10 |
| mistralrs-code-exec/ | 8 |
| mistralrs-vision/ | 8 |
| toml-selectors/ | 8 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 119 | preferred |
| examples/ | 133 | preferred |
| scripts/ | 11 | preferred |
| mistralrs-core/ | 358 | large |
| mistralrs-core/src/ | 355 | large |
| mistralrs-quant/ | 175 | large |
| mistralrs-cli/ | 123 | large |
| docs/src/ | 114 | large |
| docs/src/content/ | 112 | large |
| mistralrs-quant/src/ | 111 | large |
| mistralrs-core/src/vision_models/ | 108 | large |
| mistralrs-flash-attn/ | 78 | large |
| mistralrs/ | 77 | large |
| mistralrs-paged-attn/ | 75 | large |
| mistralrs-paged-attn/src/ | 72 | large |
| mistralrs-flash-attn/kernels/ | 71 | large |
| examples/python/ | 68 | large |
| mistralrs-cli/static/ | 62 | large |
| mistralrs-cli/static/assets/ | 61 | large |
| mistralrs-quant/kernels/ | 59 | large |
| examples/server/ | 56 | large |
| mistralrs-paged-attn/src/cuda/ | 56 | large |
| mistralrs/examples/ | 53 | large |
| mistralrs-server-core/ | 35 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `Dockerfile`
- `docs/package.json`
- `docs/tsconfig.json`
- `mistralrs-audio/Cargo.toml`
- `mistralrs-bench/Cargo.toml`
- `mistralrs-cli/Cargo.toml`
- `mistralrs-cli/webui/package.json`
- `mistralrs-cli/webui/tsconfig.json`
- `mistralrs-cli/webui/vite.config.ts`
- `mistralrs-code-exec/Cargo.toml`
- `mistralrs-core/Cargo.toml`
- `mistralrs-flash-attn/Cargo.toml`
- `mistralrs-macros/Cargo.toml`
- `mistralrs-mcp/Cargo.toml`
- `mistralrs-paged-attn/Cargo.toml`
- `mistralrs-pyo3/Cargo.toml`
- `mistralrs-pyo3/pyproject.toml`
- `mistralrs-quant/Cargo.toml`
- `mistralrs-sandbox/Cargo.toml`
- `mistralrs-server-core/Cargo.toml`
- `mistralrs-server/Cargo.toml`
- `mistralrs-vision/Cargo.toml`
- `mistralrs/Cargo.toml`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs/package.json | mistralrs-docs | render-pyi, predev, prestart, prebuild, dev, start, build, preview, astro | @astrojs/starlight, astro, sharp |
| mistralrs-cli/webui/package.json | mistralrs-webui | dev, build, preview | highlight.js, katex, marked, marked-highlight, marked-katex-extension |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| mistralrs-pyo3/pyproject.toml | mistralrs | false | false | false | false |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |      "mistralrs-server-core",     "mistralrs-server",     "mistralrs-cli",     "mistralrs-core",     "mistralrs-pyo3",     "mistralrs",     "mistralrs-bench",     "mistralrs-vision |
| mistralrs-audio/Cargo.toml | mistralrs-audio | false |  |
| mistralrs-bench/Cargo.toml | mistralrs-bench | false |  |
| mistralrs-cli/Cargo.toml | mistralrs-cli | false |  |
| mistralrs-code-exec/Cargo.toml | mistralrs-code-exec | false |  |
| mistralrs-core/Cargo.toml | mistralrs-core | false |  |
| mistralrs-flash-attn/Cargo.toml | mistralrs-flash-attn | false |  |
| mistralrs-macros/Cargo.toml | mistralrs-macros | false |  |
| mistralrs-mcp/Cargo.toml | mistralrs-mcp | false |  |
| mistralrs-paged-attn/Cargo.toml | mistralrs-paged-attn | false |  |
| mistralrs-pyo3/Cargo.toml | mistralrs-pyo3 | false |  |
| mistralrs-quant/Cargo.toml | mistralrs-quant | false |  |
| mistralrs-sandbox/Cargo.toml | mistralrs-sandbox | false |  |
| mistralrs-server-core/Cargo.toml | mistralrs-server-core | false |  |
| mistralrs-server/Cargo.toml | mistralrs-server | false |  |
| mistralrs-vision/Cargo.toml | mistralrs-vision | false |  |
| mistralrs/Cargo.toml | mistralrs | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `calibration_data/README.md`
- `docs/astro.config.mjs`
- `docs/package-lock.json`
- `docs/package.json`
- `docs/scripts/render_pyi.py`
- `docs/src/content.config.ts`
- `docs/src/content/docs/explanation/agentic-loop.md`
- `docs/src/content/docs/explanation/architecture.md`
- `docs/src/content/docs/explanation/code-execution-design.md`
- `docs/src/content/docs/explanation/device-mapping.md`
- `docs/src/content/docs/explanation/index.md`
- `docs/src/content/docs/explanation/mla.md`
- `docs/src/content/docs/explanation/moe-backends.md`
- `docs/src/content/docs/explanation/multimodal-pipeline.md`
- `docs/src/content/docs/explanation/paged-attention.md`
- `docs/src/content/docs/explanation/quantization-tradeoffs.md`
- `docs/src/content/docs/explanation/session-memory.md`
- `docs/src/content/docs/guides/agents/agentic-runtime.md`
- `docs/src/content/docs/guides/agents/configure-tool-loop.md`
- `docs/src/content/docs/guides/agents/connect-mcp-server.md`
- `docs/src/content/docs/guides/agents/enable-code-execution.md`
- `docs/src/content/docs/guides/agents/expose-as-mcp.md`
- `docs/src/content/docs/guides/agents/index.md`
- `docs/src/content/docs/guides/agents/persist-sessions.md`
- `docs/src/content/docs/guides/agents/strict-tool-calling.md`
- `docs/src/content/docs/guides/agents/tool-calling-basics.md`
- `docs/src/content/docs/guides/agents/web-search.md`
- `docs/src/content/docs/guides/customize/anymoe.md`
- `docs/src/content/docs/guides/customize/chat-templates.md`
- `docs/src/content/docs/guides/customize/index.md`
- `docs/src/content/docs/guides/customize/lora-adapters.md`
- `docs/src/content/docs/guides/customize/matformer.md`
- `docs/src/content/docs/guides/customize/sampling.md`
- `docs/src/content/docs/guides/deploy/docker.md`
- `docs/src/content/docs/guides/deploy/index.md`
- `docs/src/content/docs/guides/deploy/production-checklist.md`
- `docs/src/content/docs/guides/index.md`
- `docs/src/content/docs/guides/install/from-source.md`
- `docs/src/content/docs/guides/install/index.md`
- `docs/src/content/docs/guides/install/linux-cuda.md`
- `docs/src/content/docs/guides/install/macos-metal.md`
- `docs/src/content/docs/guides/install/windows.md`
- `docs/src/content/docs/guides/models/index.md`
- `docs/src/content/docs/guides/models/text-model-walkthroughs.md`
- `docs/src/content/docs/guides/models/use-block-diffusion.md`
- `docs/src/content/docs/guides/models/use-embeddings.md`
- `docs/src/content/docs/guides/models/use-image-generation.md`
- `docs/src/content/docs/guides/models/use-speech-models.md`
- `docs/src/content/docs/guides/models/use-vision-input.md`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `docs/src/content/docs/guides/agents/connect-mcp-server.md`
- `docs/src/content/docs/guides/agents/expose-as-mcp.md`
- `docs/src/content/docs/reference/mcp-config-schema.md`
- `docs/src/content/docs/reference/python/mcp.md`
- `examples/mcp-config-reference.json`
- `examples/mcp-server-config.json`
- `examples/mcp-simple-config.json`
- `examples/mcp-test-config.json`
- `examples/python/mcp_client.py`
- `examples/server/mcp_chat.py`
- `mistralrs-mcp/Cargo.toml`
- `mistralrs-mcp/README.md`
- `mistralrs-mcp/src/client.rs`
- `mistralrs-mcp/src/lib.rs`
- `mistralrs-mcp/src/tools.rs`
- `mistralrs-mcp/src/transport.rs`
- `mistralrs-mcp/src/types.rs`
- `mistralrs-server/src/mcp_server.rs`
- `mistralrs/examples/advanced/mcp_client/main.rs`

### 스펙/템플릿/명령/스킬 후보

- `docs/src/content/docs/explanation/code-execution-design.md`
- `mistralrs-cli/src/commands/bench.rs`
- `mistralrs-cli/src/commands/cache.rs`
- `mistralrs-cli/src/commands/config.rs`
- `mistralrs-cli/src/commands/doctor.rs`
- `mistralrs-cli/src/commands/login.rs`
- `mistralrs-cli/src/commands/mod.rs`
- `mistralrs-cli/src/commands/quant.rs`
- `mistralrs-cli/src/commands/quantize.rs`
- `mistralrs-cli/src/commands/run/interactive.rs`
- `mistralrs-cli/src/commands/run/mod.rs`
- `mistralrs-cli/src/commands/serve.rs`
- `mistralrs-cli/src/commands/tune.rs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `mistralrs-code-exec/tests/sandboxed_session.rs`
- `mistralrs-flash-attn/tests/flash_attn_tests.rs`
- `mistralrs-quant/tests/cutile_moe_tests.rs`
- `mistralrs-quant/tests/cutlass_moe_tests.rs`
- `mistralrs-sandbox/tests/linux.rs`
- `mistralrs-sandbox/tests/null.rs`
- `mistralrs-vision/tests/integration.rs`

### CI/Docker 후보

- `.github/workflows/analysis.yaml`
- `.github/workflows/brew_release.yml`
- `.github/workflows/build_cpu.yaml`
- `.github/workflows/build_cuda_all.yaml`
- `.github/workflows/ci.yml`
- `.github/workflows/ci_cuda.yaml`
- `.github/workflows/docs.yml`
- `Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 634 |
| .md | 134 |
| .py | 132 |
| .cu | 119 |
| .cuh | 42 |
| .metal | 37 |
| .toml | 31 |
| .json | 26 |
| .h | 23 |
| .ttf | 20 |
| .woff | 20 |
| .woff2 | 19 |
| .svelte | 18 |
| .ts | 11 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `mistralrs-core/ 내부 책임 분리`
- `mistralrs-core/src/ 내부 책임 분리`
- `docs/src/content/docs/explanation/code-execution-design.md 스펙/명령 의미`
- `mistralrs-cli/src/commands/bench.rs 스펙/명령 의미`
- `mistralrs-cli/src/commands/cache.rs 스펙/명령 의미`
- `mistralrs-cli/src/commands/config.rs 스펙/명령 의미`
- `mistralrs-cli/src/commands/doctor.rs 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docs/package.json 실행 스크립트와 패키지 경계`
- `docs/tsconfig.json 실행 스크립트와 패키지 경계`
- `mistralrs-audio/Cargo.toml 실행 스크립트와 패키지 경계`

