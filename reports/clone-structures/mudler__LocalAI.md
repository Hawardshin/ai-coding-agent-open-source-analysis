# mudler/LocalAI 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/mudler__LocalAI |
| remote | https://github.com/mudler/LocalAI |
| HEAD | 4ce0f61 (2026-06-12) chore(model gallery): :robot: add 1 new models via gallery agent (#10270) |
| branch | master |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 2606 |
| dirs | 284 |
| stack | Node/TypeScript/JavaScript, Python, Rust, Go |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Guided tour`, `Quickstart`, `macOS`, `Containers (Docker, podman, ...)`, `CUDA 13`, `CUDA 12`, `NVIDIA Jetson ARM64 (CUDA 12, for AGX Orin and similar)`, `NVIDIA Jetson ARM64 (CUDA 13, for DGX Spark)`, `Loading models`, `From the model gallery (see available models with `local-ai models list` or at https://models.localai.io)`, `From Huggingface`, `From the Ollama OCI registry`, `From a YAML config`, `From a standard OCI registry (e.g., Docker Hub)`, `Terminal 1`, `Terminal 2`, `Latest News`, `Features`

> <h1 align="center" <br <img width="300" src="./core/http/static/logo.png" <br <br </h1 <p align="center" <a href="https //github.com/go skynet/LocalAI/stargazers" target="blank" <img src="https //img.shields.io/github/stars/go skynet/LocalAI?style=for the badge" alt="LocalAI stars"/ </a <a href='https //github.com/go skynet/LocalAI/releases' <img src='https //img.shields.io/github/release/go skynet/LocalAI?&label=Latest&style=for the badge' </a <a href="LICENSE" target="blank" <img src="https //img.shields.io/badge/License MIT yellow.svg?style=for the badge" alt="LocalAI License"/ </a </p <p align="center" <a href="https //twitter.com/LocalAI API" target="blank" <img src="https //img.shields.io/badge/X %23000000.svg?style=for the badge&logo=X&logoColor=white&label=LocalAI API" alt="Follow LocalAI API"/ </a <a href="https //discord.gg/uJAeKSAGDy" target="blank" <img src="https //img.shiel

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .air.toml | file |
| .devcontainer | dir |
| .devcontainer-scripts | dir |
| .docker | dir |
| .dockerignore | file |
| .editorconfig | file |
| .env | file |
| .gitattributes | file |
| .githooks | dir |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .golangci.yml | file |
| .goreleaser.yaml | file |
| .vscode | dir |
| .yamllint | file |
| AGENTS.md | file |
| backend | dir |
| CLAUDE.md | other |
| cmd | dir |
| configuration | dir |
| CONTRIBUTING.md | file |
| core | dir |
| coverage-baseline.txt | file |
| custom-ca-certs | dir |
| docker-compose.distributed.yaml | file |
| docker-compose.yaml | file |
| Dockerfile | file |
| docs | dir |
| Entitlements.plist | file |
| entrypoint.sh | file |
| examples | dir |
| flake.lock | file |
| flake.nix | file |
| gallery | dir |
| go.mod | file |
| go.sum | file |
| internal | dir |
| LICENSE | file |
| Makefile | file |
| pkg | dir |
| prompt-templates | dir |
| README.md | file |
| renovate.json | file |
| scripts | dir |
| SECURITY.md | file |
| swagger | dir |
| tests | dir |
| webui_static.yaml | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| core/ | 1173 |
| backend/ | 749 |
| pkg/ | 206 |
| docs/ | 174 |
| gallery/ | 78 |
| tests/ | 69 |
| .github/ | 63 |
| (root) | 28 |
| .agents/ | 15 |
| cmd/ | 11 |
| scripts/ | 9 |
| prompt-templates/ | 7 |
| .devcontainer/ | 5 |
| .docker/ | 5 |
| swagger/ | 4 |
| .devcontainer-scripts/ | 3 |
| .vscode/ | 2 |
| .githooks/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| core/ | 1173 | preferred |
| cmd/ | 11 | preferred |
| backend/ | 749 | preferred |
| docs/ | 174 | preferred |
| examples/ | 1 | preferred |
| tests/ | 69 | preferred |
| scripts/ | 9 | preferred |
| core/http/ | 629 | large |
| backend/python/ | 522 | large |
| core/http/react-ui/ | 277 | large |
| core/services/ | 257 | large |
| pkg/ | 206 | large |
| backend/go/ | 170 | large |
| core/http/endpoints/ | 155 | large |
| core/gallery/ | 95 | large |
| core/http/static/ | 81 | large |
| docs/content/ | 79 | large |
| gallery/ | 78 | large |
| core/gallery/importers/ | 77 | large |
| .github/ | 63 | large |
| docs/static/ | 61 | large |
| core/services/nodes/ | 55 | large |
| docs/static/images/ | 52 | large |
| core/services/routing/ | 50 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `backend/python/ace-step/requirements.txt`
- `backend/python/chatterbox/requirements.txt`
- `backend/python/common/template/requirements.txt`
- `backend/python/coqui/requirements.txt`
- `backend/python/diffusers/requirements.txt`
- `backend/python/faster-qwen3-tts/requirements.txt`
- `backend/python/faster-whisper/requirements.txt`
- `backend/python/fish-speech/requirements.txt`
- `backend/python/insightface/requirements.txt`
- `backend/python/kitten-tts/requirements.txt`
- `backend/python/kokoro/requirements.txt`
- `backend/python/liquid-audio/requirements.txt`
- `backend/python/llama-cpp-quantization/requirements.txt`
- `backend/python/mlx-audio/requirements.txt`
- `backend/python/mlx-distributed/requirements.txt`
- `backend/python/mlx-vlm/requirements.txt`
- `backend/python/mlx/requirements.txt`
- `backend/python/moonshine/requirements.txt`
- `backend/python/nemo/requirements.txt`
- `backend/python/neutts/requirements.txt`
- `backend/python/outetts/requirements.txt`
- `backend/python/pocket-tts/requirements.txt`
- `backend/python/qwen-asr/requirements.txt`
- `backend/python/qwen-tts/requirements.txt`
- `backend/python/rerankers/requirements.txt`
- `backend/python/rfdetr/requirements.txt`
- `backend/python/sglang/requirements.txt`
- `backend/python/speaker-recognition/requirements.txt`
- `backend/python/tinygrad/requirements.txt`
- `backend/python/transformers/requirements.txt`
- `backend/python/trl/requirements.txt`
- `backend/python/vibevoice/requirements.txt`
- `backend/python/vllm-omni/requirements.txt`
- `backend/python/vllm/requirements.txt`
- `backend/python/voxcpm/requirements.txt`
- `backend/python/whisperx/requirements.txt`
- `backend/rust/kokoros/Cargo.toml`
- `core/http/react-ui/bun.lock`
- `core/http/react-ui/package.json`
- `docs/Dockerfile`
- `docs/go.mod`
- `docs/package.json`
- `go.mod`
- `tests/e2e-ui/Dockerfile`
- `tests/fixtures/backend-image/Dockerfile`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| core/http/react-ui/package.json | localai-react-ui | dev, build, preview, lint, i18n:extract, test:e2e, test:e2e:ui, build:coverage, build:coverage-v8, coverage:report | @codemirror/autocomplete, @codemirror/commands, @codemirror/lang-yaml, @codemirror/language, @codemirror/lint, @codemirror/search, @codemirror/state, @codemirror/view, @fontsource-variable/geist, @fontsource-variable/geist-mono, @fortawesome/fontawesome-free, @lezer/highlight, @modelcontextprotocol/ext-apps, @modelcontextprotocol/sdk |
| docs/package.json | tech-doc-hugo | test |  |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| backend/rust/kokoros/Cargo.toml | kokoros-grpc | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| docs/go.mod | github.com/mudler/LocalAI/docs | 1.19 |
| go.mod | github.com/mudler/LocalAI | 1.26.0 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.devcontainer/customization/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `backend/README.md`
- `backend/python/README.md`
- `backend/python/coqui/README.md`
- `backend/python/diffusers/README.md`
- `backend/python/insightface/README.md`
- `backend/python/kokoro/README.md`
- `backend/python/rerankers/README.md`
- `backend/python/speaker-recognition/README.md`
- `backend/python/transformers/README.md`
- `backend/python/vllm/README.md`
- `core/config/gen_inference_defaults/README.md`
- `docs/Dockerfile`
- `docs/README.md`
- `docs/assets/images/imagen.png`
- `docs/assets/images/localai_screenshot.png`
- `docs/assets/images/logos/logo.png`
- `docs/assets/images/logos/logo.svg`
- `docs/assets/images/screenshots/screenshot_chat.png`
- `docs/assets/images/screenshots/screenshot_gallery.png`
- `docs/assets/images/screenshots/screenshot_home.png`
- `docs/assets/images/screenshots/screenshot_image.png`
- `docs/assets/images/screenshots/screenshot_login.png`
- `docs/assets/images/screenshots/screenshot_p2p.png`
- `docs/assets/images/screenshots/screenshot_talk.png`
- `docs/assets/images/screenshots/screenshot_tts.png`
- `docs/assets/jsconfig.json`
- `docs/content/_index.md`
- `docs/content/advanced/_index.en.md`
- `docs/content/advanced/_index.md`
- `docs/content/advanced/advanced-usage.md`
- `docs/content/advanced/fine-tuning.md`
- `docs/content/advanced/model-configuration.md`
- `docs/content/advanced/reverse-proxy-tls.md`
- `docs/content/advanced/vram-management.md`
- `docs/content/faq.md`
- `docs/content/features/GPU-acceleration.md`
- `docs/content/features/_index.en.md`
- `docs/content/features/agents.md`
- `docs/content/features/api-discovery.md`
- `docs/content/features/audio-diarization.md`
- `docs/content/features/audio-to-text.md`
- `docs/content/features/audio-transform.md`
- `docs/content/features/authentication.md`
- `docs/content/features/backend-monitor.md`
- `docs/content/features/backends.md`
- `docs/content/features/cloud-proxy.md`
- `docs/content/features/constrained_grammars.md`
- ... 30 more

### 에이전트 지침 후보

- `.agents/localai-assistant-mcp.md`
- `.agents/testing-mcp-apps.md`
- `AGENTS.md`
- `core/cli/mcp_server.go`
- `core/http/endpoints/localai/agent_skills.go`
- `core/http/endpoints/localai/mcp.go`
- `core/http/endpoints/localai/mcp_prompts.go`
- `core/http/endpoints/localai/mcp_resources.go`
- `core/http/endpoints/localai/mcp_tools.go`
- `core/http/endpoints/mcp/executor.go`
- `core/http/endpoints/mcp/localai_assistant.go`
- `core/http/endpoints/mcp/localai_assistant_test.go`
- `core/http/endpoints/mcp/mcp_suite_test.go`
- `core/http/endpoints/mcp/tools.go`
- `core/http/react-ui/e2e/skills.spec.js`
- `core/http/react-ui/public/locales/de/skills.json`
- `core/http/react-ui/public/locales/en/skills.json`
- `core/http/react-ui/public/locales/es/skills.json`
- `core/http/react-ui/public/locales/id/skills.json`
- `core/http/react-ui/public/locales/it/skills.json`
- `core/http/react-ui/public/locales/zh-CN/skills.json`
- `core/http/react-ui/src/utils/mcpClientStorage.js`
- `core/services/agents/mcp.go`
- `core/services/agents/skills.go`
- `core/services/distributed/skills.go`
- `core/services/mcp/remote.go`
- `core/services/skills/distributed.go`
- `core/services/skills/filesystem.go`
- `core/services/skills/manager.go`
- `core/services/skills/skills_mcp_test.go`
- `docs/content/features/agents.md`
- `docs/content/features/mcp.md`
- `docs/static/images/diagrams/mcp-server-vs-client.html`
- `docs/static/images/diagrams/mcp-server-vs-client.png`
- `pkg/mcp/localaitools/capability.go`
- `pkg/mcp/localaitools/client.go`
- `pkg/mcp/localaitools/coverage_test.go`
- `pkg/mcp/localaitools/doc.go`
- `pkg/mcp/localaitools/dto.go`
- `pkg/mcp/localaitools/dto_test.go`
- `pkg/mcp/localaitools/errors.go`
- `pkg/mcp/localaitools/fakes_test.go`
- `pkg/mcp/localaitools/httpapi/client.go`
- `pkg/mcp/localaitools/httpapi/client_test.go`
- `pkg/mcp/localaitools/httpapi/httpapi_suite_test.go`
- `pkg/mcp/localaitools/httpapi/routes.go`
- `pkg/mcp/localaitools/inproc/client.go`
- `pkg/mcp/localaitools/inproc/client_test.go`
- `pkg/mcp/localaitools/inproc/inproc_suite_test.go`
- `pkg/mcp/localaitools/parity_test.go`
- `pkg/mcp/localaitools/prompts.go`
- `pkg/mcp/localaitools/prompts/00_role.md`
- `pkg/mcp/localaitools/prompts/10_safety.md`
- `pkg/mcp/localaitools/prompts/20_tools.md`
- `pkg/mcp/localaitools/prompts/skills/configure_branding.md`
- `pkg/mcp/localaitools/prompts/skills/edit_model_config.md`
- `pkg/mcp/localaitools/prompts/skills/import_model_from_uri.md`
- `pkg/mcp/localaitools/prompts/skills/install_chat_model.md`
- `pkg/mcp/localaitools/prompts/skills/system_status.md`
- `pkg/mcp/localaitools/prompts/skills/upgrade_backend.md`
- `pkg/mcp/localaitools/prompts_test.go`
- `pkg/mcp/localaitools/server.go`
- `pkg/mcp/localaitools/server_test.go`
- `pkg/mcp/localaitools/tools.go`
- `pkg/mcp/localaitools/tools_backends.go`
- `pkg/mcp/localaitools/tools_branding.go`
- `pkg/mcp/localaitools/tools_config.go`
- `pkg/mcp/localaitools/tools_middleware.go`
- `pkg/mcp/localaitools/tools_models.go`
- `pkg/mcp/localaitools/tools_pii.go`
- `pkg/mcp/localaitools/tools_state.go`
- `pkg/mcp/localaitools/tools_system.go`
- `pkg/mcp/localaitools/tools_usage.go`
- `tests/e2e/distributed/mcp_ci_job_helper_test.go`
- `tests/e2e/distributed/mcp_ci_job_test.go`
- `tests/e2e/distributed/mcp_nats_test.go`
- `tests/e2e/distributed/skills_distributed_test.go`
- `tests/e2e/e2e_mcp_test.go`

### 스펙/템플릿/명령/스킬 후보

- `core/services/skills/distributed.go`
- `core/services/skills/filesystem.go`
- `core/services/skills/manager.go`
- `core/services/skills/skills_mcp_test.go`
- `core/templates/cache.go`
- `core/templates/evaluator.go`
- `core/templates/evaluator_test.go`
- `core/templates/multimodal.go`
- `core/templates/multimodal_test.go`
- `core/templates/templates_suite_test.go`
- `pkg/mcp/localaitools/prompts/skills/configure_branding.md`
- `pkg/mcp/localaitools/prompts/skills/edit_model_config.md`
- `pkg/mcp/localaitools/prompts/skills/import_model_from_uri.md`
- `pkg/mcp/localaitools/prompts/skills/install_chat_model.md`
- `pkg/mcp/localaitools/prompts/skills/system_status.md`
- `pkg/mcp/localaitools/prompts/skills/upgrade_backend.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `core/http/react-ui/e2e/agents.spec.js`
- `core/http/react-ui/e2e/audio-transform.spec.js`
- `core/http/react-ui/e2e/backend-logs.spec.js`
- `core/http/react-ui/e2e/backends-management.spec.js`
- `core/http/react-ui/e2e/chat-errors.spec.js`
- `core/http/react-ui/e2e/chat-polling-selection.spec.js`
- `core/http/react-ui/e2e/collections.spec.js`
- `core/http/react-ui/e2e/import-form-ux-batch-a.spec.js`
- `core/http/react-ui/e2e/import-form-ux-batch-b.spec.js`
- `core/http/react-ui/e2e/import-form-ux-batch-d.spec.js`
- `core/http/react-ui/e2e/import-form-ux-batch-e.spec.js`
- `core/http/react-ui/e2e/import-form-ux-batch-f.spec.js`
- `core/http/react-ui/e2e/login.spec.js`
- `core/http/react-ui/e2e/manage-logs-link.spec.js`
- `core/http/react-ui/e2e/media-history.spec.js`
- `core/http/react-ui/e2e/middleware-page.spec.js`
- `core/http/react-ui/e2e/model-config.spec.js`
- `core/http/react-ui/e2e/model-editor-back-nav.spec.js`
- `core/http/react-ui/e2e/models-gallery.spec.js`
- `core/http/react-ui/e2e/navigation.spec.js`
- `core/http/react-ui/e2e/nodes-per-node-backend-actions.spec.js`
- `core/http/react-ui/e2e/p2p.spec.js`
- `core/http/react-ui/e2e/page-render-smoke.spec.js`
- `core/http/react-ui/e2e/router-template.spec.js`
- `core/http/react-ui/e2e/settings-backend-logging.spec.js`
- `core/http/react-ui/e2e/skills.spec.js`
- `core/http/react-ui/e2e/traces-errors.spec.js`
- `core/http/react-ui/e2e/traces.spec.js`
- `core/http/react-ui/e2e/usage-dashboard.spec.js`
- `core/http/react-ui/e2e/users-tab-gating.spec.js`
- `tests/e2e-aio/e2e_suite_test.go`
- `tests/e2e-aio/e2e_test.go`
- `tests/e2e-aio/models/embeddings.yaml`
- `tests/e2e-aio/models/image-gen.yaml`
- `tests/e2e-aio/models/rerank.yaml`
- `tests/e2e-aio/models/speech-to-text.yaml`
- `tests/e2e-aio/models/text-to-speech.yaml`
- `tests/e2e-aio/models/text-to-text.yaml`
- `tests/e2e-aio/models/vad.yaml`
- `tests/e2e-aio/models/vision.yaml`
- `tests/e2e-aio/sample_data_test.go`
- `tests/e2e-backends/backend_test.go`
- `tests/e2e-backends/suite_test.go`
- `tests/e2e-ui/.gitignore`
- `tests/e2e-ui/Dockerfile`
- `tests/e2e-ui/main.go`
- `tests/e2e/cloud_proxy_helpers_test.go`
- `tests/e2e/distributed/agent_distributed_test.go`
- `tests/e2e/distributed/agent_native_executor_test.go`
- `tests/e2e/distributed/backend_logs_test.go`
- `tests/e2e/distributed/distributed_full_flow_test.go`
- `tests/e2e/distributed/distributed_store_test.go`
- `tests/e2e/distributed/distributed_suite_test.go`
- `tests/e2e/distributed/file_staging_test.go`
- `tests/e2e/distributed/finetune_distributed_test.go`
- `tests/e2e/distributed/foundation_test.go`
- `tests/e2e/distributed/gallery_distributed_test.go`
- `tests/e2e/distributed/job_dispatch_test.go`
- `tests/e2e/distributed/job_distribution_test.go`
- `tests/e2e/distributed/managers_test.go`
- `tests/e2e/distributed/mcp_ci_job_helper_test.go`
- `tests/e2e/distributed/mcp_ci_job_test.go`
- `tests/e2e/distributed/mcp_nats_test.go`
- `tests/e2e/distributed/model_routing_test.go`
- `tests/e2e/distributed/nats_jwt_helpers_test.go`
- `tests/e2e/distributed/nats_jwt_test.go`
- `tests/e2e/distributed/node_lifecycle_test.go`
- `tests/e2e/distributed/node_registration_test.go`
- `tests/e2e/distributed/object_storage_test.go`
- `tests/e2e/distributed/phase4_test.go`
- `tests/e2e/distributed/prefix_cache_routing_test.go`
- `tests/e2e/distributed/registry_extra_test.go`
- `tests/e2e/distributed/router_tracking_test.go`
- `tests/e2e/distributed/skills_distributed_test.go`
- `tests/e2e/distributed/sse_routes_test.go`
- `tests/e2e/distributed/testhelpers_test.go`
- `tests/e2e/distributed/vllm_multinode_test.go`
- `tests/e2e/e2e_anthropic_test.go`
- `tests/e2e/e2e_cloud_proxy_test.go`
- `tests/e2e/e2e_mcp_test.go`
- ... 19 more

### CI/Docker 후보

- `.devcontainer/docker-compose-devcontainer.yml`
- `.github/workflows/backend.yml`
- `.github/workflows/backend_build.yml`
- `.github/workflows/backend_build_darwin.yml`
- `.github/workflows/backend_merge.yml`
- `.github/workflows/backend_pr.yml`
- `.github/workflows/base-images.yml`
- `.github/workflows/build-test.yaml`
- `.github/workflows/bump-inference-defaults.yml`
- `.github/workflows/bump_deps.yaml`
- `.github/workflows/bump_docs.yaml`
- `.github/workflows/checksum_checker.yaml`
- `.github/workflows/deploy-explorer.yaml`
- `.github/workflows/disabled/comment-pr.yaml`
- `.github/workflows/disabled/dependabot_auto.yml`
- `.github/workflows/disabled/labeler.yml`
- `.github/workflows/disabled/localaibot_automerge.yml`
- `.github/workflows/disabled/notify-models.yaml`
- `.github/workflows/disabled/prlint.yaml`
- `.github/workflows/disabled/test-gpu.yml`
- `.github/workflows/gallery-agent.yaml`
- `.github/workflows/generate_intel_image.yaml`
- `.github/workflows/gh-pages.yml`
- `.github/workflows/image-pr.yml`
- `.github/workflows/image.yml`
- `.github/workflows/image_build.yml`
- `.github/workflows/image_merge.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/notify-releases.yaml`
- `.github/workflows/release.yaml`
- `.github/workflows/secscan.yaml`
- `.github/workflows/stalebot.yml`
- `.github/workflows/test-extra.yml`
- `.github/workflows/test.yml`
- `.github/workflows/tests-aio.yml`
- `.github/workflows/tests-e2e.yml`
- `.github/workflows/tests-ui-e2e.yml`
- `.github/workflows/update_swagger.yaml`
- `.github/workflows/yaml-check.yml`
- `Dockerfile`
- `docker-compose.distributed.yaml`
- `docker-compose.yaml`
- `docs/Dockerfile`
- `docs/docker-compose.yaml`
- `tests/e2e-ui/Dockerfile`
- `tests/fixtures/backend-image/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 1117 |
| .txt | 274 |
| .sh | 204 |
| .md | 125 |
| .jsx | 115 |
| .yaml | 109 |
| .py | 99 |
| .js | 95 |
| .json | 92 |
| .html | 64 |
| makefile | 62 |
| .png | 45 |
| .yml | 38 |
| .css | 33 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `core/ 내부 책임 분리`
- `cmd/ 내부 책임 분리`
- `backend/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `core/services/skills/distributed.go 스펙/명령 의미`
- `core/services/skills/filesystem.go 스펙/명령 의미`
- `core/services/skills/manager.go 스펙/명령 의미`
- `core/services/skills/skills_mcp_test.go 스펙/명령 의미`
- `core/templates/cache.go 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `backend/python/ace-step/requirements.txt 실행 스크립트와 패키지 경계`
- `backend/python/chatterbox/requirements.txt 실행 스크립트와 패키지 경계`
- `backend/python/common/template/requirements.txt 실행 스크립트와 패키지 경계`
- `backend/python/coqui/requirements.txt 실행 스크립트와 패키지 경계`

