# 127개 로컬 클론 구조 분석 총괄

생성일: 2026-06-17T22:41:11.818Z

## 검증 범위

- 실제 로컬 클론: 127개
- 데이터 파일에 명시된 target: 127개
- target 중 로컬 클론 누락: 0개
- 레포별 상세 보고서: `reports/clone-structures/*.md`
- 구조 데이터: `data/clone-structure-analysis-127.json`

## 로컬 클론 누락 target

명시 target 기준 누락 없음.

## 그룹별 분포

| group | count |
| --- | --- |
| adjacent-tech-50 | 50 |
| core-agent-30 | 30 |
| previous-clone-inventory-107 | 107 |
| spec-driven-20 | 20 |

## 스택/런타임 분포

| stack | count |
| --- | --- |
| Node/TypeScript/JavaScript | 81 |
| Python | 71 |
| Rust | 29 |
| Go | 17 |
| unknown/mixed | 7 |

## 전체 레포 구조 요약

| repo | group | files | stack | manifests | specs | agents | report |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Aider-AI/aider | core-agent-30, previous-clone-inventory-107 | 685 | Python | benchmark/Dockerfile, docker/Dockerfile, pyproject.toml, requirements.txt | 0 | 1 | reports/clone-structures/Aider-AI__aider.md |
| All-Hands-AI/OpenHands | core-agent-30, previous-clone-inventory-107 | 2385 | Node/TypeScript/JavaScript, Python | containers/app/Dockerfile, containers/dev/Dockerfile, containers/dev/compose.yml, docker-compose.yml | 42 | 82 | reports/clone-structures/All-Hands-AI__OpenHands.md |
| Arize-ai/phoenix | adjacent-tech-50, previous-clone-inventory-107 | 6021 | Node/TypeScript/JavaScript, Python | Dockerfile, api_reference/requirements.txt, app/package.json, app/pnpm-lock.yaml | 140 | 100 | reports/clone-structures/Arize-ai__phoenix.md |
| BerriAI/litellm | adjacent-tech-50, previous-clone-inventory-107 | 6958 | Node/TypeScript/JavaScript, Python, Go | Dockerfile, backend/Dockerfile, cookbook/anthropic_agent_sdk/requirements.txt, cookbook/gollem_go_agent_framework/go.mod | 66 | 100 | reports/clone-structures/BerriAI__litellm.md |
| bloopai/bloop | previous-clone-inventory-107 | 694 | Node/TypeScript/JavaScript, Rust | Cargo.toml, Dockerfile, apps/desktop/package.json, apps/desktop/src-tauri/Cargo.toml | 0 | 0 | reports/clone-structures/BloopAI__bloop.md |
| ComposioHQ/composio | core-agent-30, previous-clone-inventory-107 | 2244 | Node/TypeScript/JavaScript, Python | Dockerfile, docs/bun.lock, docs/package.json, docs/tsconfig.json | 140 | 100 | reports/clone-structures/ComposioHQ__composio.md |
| doorman11991/smallcode | previous-clone-inventory-107 | 290 | Node/TypeScript/JavaScript | package.json, src/compiled/tsconfig.json | 0 | 15 | reports/clone-structures/Doorman11991__smallcode.md |
| Engineering4AI/awesome-spec-driven-development | spec-driven-20 | 1 | unknown/mixed |  | 0 | 0 | reports/clone-structures/Engineering4AI__awesome-spec-driven-development.md |
| EricLBuehler/mistral.rs | adjacent-tech-50, previous-clone-inventory-107 | 1325 | Node/TypeScript/JavaScript, Python, Rust | Cargo.toml, Dockerfile, docs/package.json, docs/tsconfig.json | 13 | 21 | reports/clone-structures/EricLBuehler__mistral.rs.md |
| Fission-AI/OpenSpec | spec-driven-20 | 842 | Node/TypeScript/JavaScript | package.json, pnpm-lock.yaml, tsconfig.json | 140 | 45 | reports/clone-structures/Fission-AI__OpenSpec.md |
| FredAntB/Spec-Driven-Development | spec-driven-20 | 33 | unknown/mixed |  | 6 | 4 | reports/clone-structures/FredAntB__Spec-Driven-Development.md |
| gentleman-programming/engram | previous-clone-inventory-107 | 436 | Node/TypeScript/JavaScript, Go | docker/cloud/Dockerfile, go.mod, plugin/obsidian/package.json, plugin/obsidian/tsconfig.json | 140 | 42 | reports/clone-structures/Gentleman-Programming__engram.md |
| HKUDS/LightRAG | adjacent-tech-50, previous-clone-inventory-107 | 679 | Node/TypeScript/JavaScript, Python | Dockerfile, docker-compose.yml, lightrag/tools/lightrag_visualizer/requirements.txt, lightrag_webui/bun.lock | 21 | 4 | reports/clone-structures/HKUDS__LightRAG.md |
| IBM/iac-spec-kit | spec-driven-20 | 91 | Python | pyproject.toml | 11 | 1 | reports/clone-structures/IBM__iac-spec-kit.md |
| Kilo-Org/kilocode | core-agent-30, previous-clone-inventory-107 | 6848 | Node/TypeScript/JavaScript | bun.lock, package.json, packages/containers/base/Dockerfile, packages/containers/bun-node/Dockerfile | 44 | 100 | reports/clone-structures/Kilo-Org__kilocode.md |
| Lumiaqian/openspec-mcp | spec-driven-20 | 74 | Node/TypeScript/JavaScript | package.json, tsconfig.json, web/package.json, web/tsconfig.json | 0 | 0 | reports/clone-structures/Lumiaqian__openspec-mcp.md |
| madappgang/claudish | previous-clone-inventory-107 | 354 | Node/TypeScript/JavaScript | bun.lock, package.json, packages/cli/package.json, packages/cli/tsconfig.json | 1 | 8 | reports/clone-structures/MadAppGang__claudish.md |
| NVIDIA/TensorRT-LLM | adjacent-tech-50, previous-clone-inventory-107 | 10452 | Python | .devcontainer/docker-compose.yml, cpp/kernels/fmha_v2/requirements.txt, docs/requirements.txt, examples/apps/requirements.txt | 140 | 100 | reports/clone-structures/NVIDIA__TensorRT-LLM.md |
| NousResearch/hermes-agent | core-agent-30, previous-clone-inventory-107 | 4944 | Node/TypeScript/JavaScript, Python, Rust | Dockerfile, apps/bootstrap-installer/package.json, apps/bootstrap-installer/src-tauri/Cargo.toml, apps/bootstrap-installer/tsconfig.json | 140 | 100 | reports/clone-structures/NousResearch__hermes-agent.md |
| QuivrHQ/quivr | adjacent-tech-50, previous-clone-inventory-107 | 231 | Python | core/pyproject.toml, docs/pyproject.toml, examples/chatbot/pyproject.toml, examples/chatbot_voice/pyproject.toml | 1 | 0 | reports/clone-structures/QuivrHQ__quivr.md |
| QwenLM/qwen-code | core-agent-30, previous-clone-inventory-107 | 3114 | Node/TypeScript/JavaScript, Python | Dockerfile, docs-site/package.json, integration-tests/concurrent-runner/examples/toy-project/package.json, integration-tests/concurrent-runner/requirements.txt | 140 | 100 | reports/clone-structures/QwenLM__qwen-code.md |
| RooCodeInc/Roo-Code | core-agent-30, previous-clone-inventory-107 | 3013 | Node/TypeScript/JavaScript | apps/cli/package.json, apps/cli/tsconfig.json, apps/docs/package.json, apps/docs/tsconfig.json | 24 | 100 | reports/clone-structures/RooCodeInc__Roo-Code.md |
| SWE-agent/SWE-agent | core-agent-30, previous-clone-inventory-107 | 407 | Python | pyproject.toml, tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile, tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml, tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile | 0 | 2 | reports/clone-structures/SWE-agent__SWE-agent.md |
| TabbyML/tabby | core-agent-30, previous-clone-inventory-107 | 2093 | Node/TypeScript/JavaScript, Python, Rust | Cargo.toml, clients/eclipse/package.json, clients/intellij/package.json, clients/tabby-agent/package.json | 24 | 0 | reports/clone-structures/TabbyML__tabby.md |
| Yeachan-Heo/oh-my-claudecode | core-agent-30, previous-clone-inventory-107 | 1529 | Node/TypeScript/JavaScript, Python | benchmark/Dockerfile, benchmark/docker-compose.yml, benchmark/requirements.txt, package.json | 28 | 100 | reports/clone-structures/Yeachan-Heo__oh-my-claudecode.md |
| Yeachan-Heo/oh-my-codex | core-agent-30, previous-clone-inventory-107 | 1197 | Node/TypeScript/JavaScript, Rust | Cargo.toml, crates/omx-api/Cargo.toml, crates/omx-explore/Cargo.toml, crates/omx-mux/Cargo.toml | 42 | 100 | reports/clone-structures/Yeachan-Heo__oh-my-codex.md |
| aaif-goose/goose | core-agent-30, previous-clone-inventory-107 | 2325 | Node/TypeScript/JavaScript, Python, Rust | .devcontainer/Dockerfile, Cargo.toml, Dockerfile, crates/goose-acp-macros/Cargo.toml | 60 | 100 | reports/clone-structures/aaif-goose__goose.md |
| addyosmani/agent-skills | previous-clone-inventory-107 | 90 | unknown/mixed |  | 16 | 41 | reports/clone-structures/addyosmani__agent-skills.md |
| agenta-ai/agenta | adjacent-tech-50, previous-clone-inventory-107 | 9270 | Node/TypeScript/JavaScript, Python | api/ee/tests/manual/evaluations/sdk/requirements.txt, api/pyproject.toml, api/uv.lock, clients/python/pyproject.toml | 74 | 29 | reports/clone-structures/agenta-ai__agenta.md |
| agno-agi/agno | core-agent-30, previous-clone-inventory-107 | 4746 | Python | cookbook/00_quickstart/requirements.txt, cookbook/01_demo/requirements.txt, cookbook/08_learning/requirements.txt, cookbook/91_tools/mcp/mcp_toolbox_demo/docker-compose.yml | 33 | 100 | reports/clone-structures/agno-agi__agno.md |
| amaynez/kiro-style-sdd | spec-driven-20 | 26 | Node/TypeScript/JavaScript | package.json | 8 | 21 | reports/clone-structures/amaynez__kiro-style-sdd.md |
| anomalyco/opencode | core-agent-30, previous-clone-inventory-107 | 5666 | Node/TypeScript/JavaScript | bun.lock, github/bun.lock, github/package.json, github/tsconfig.json | 58 | 100 | reports/clone-structures/anomalyco__opencode.md |
| ariel-frischer/autospec | spec-driven-20 | 650 | Go | go.mod | 36 | 24 | reports/clone-structures/ariel-frischer__autospec.md |
| awslabs/aidlc-workflows | previous-clone-inventory-107 | 554 | Python | scripts/aidlc-designreview/pyproject.toml, scripts/aidlc-designreview/uv.lock, scripts/aidlc-evaluator/docker/sandbox/Dockerfile, scripts/aidlc-evaluator/packages/cli-harness/pyproject.toml | 16 | 2 | reports/clone-structures/awslabs__aidlc-workflows.md |
| bartolli/codanna | previous-clone-inventory-107 | 822 | Node/TypeScript/JavaScript, Rust, Go | Cargo.toml, examples/go/app/go.mod, examples/typescript/packages/web/tsconfig.json, examples/typescript/react/package.json | 12 | 10 | reports/clone-structures/bartolli__codanna.md |
| bmad-code-org/BMAD-METHOD | spec-driven-20 | 570 | Node/TypeScript/JavaScript | package.json | 12 | 100 | reports/clone-structures/bmad-code-org__BMAD-METHOD.md |
| browser-use/browser-use | core-agent-30, previous-clone-inventory-107 | 496 | Python | Dockerfile, docker/base-images/chromium/Dockerfile, docker/base-images/python-deps/Dockerfile, docker/base-images/system/Dockerfile | 11 | 64 | reports/clone-structures/browser-use__browser-use.md |
| buildermethods/agent-os | spec-driven-20 | 22 | unknown/mixed |  | 0 | 0 | reports/clone-structures/buildermethods__agent-os.md |
| can1357/oh-my-pi | previous-clone-inventory-107 | 4212 | Node/TypeScript/JavaScript, Python, Rust | Cargo.toml, Dockerfile, bun.lock, crates/brush-builtins-vendored/Cargo.toml | 61 | 100 | reports/clone-structures/can1357__oh-my-pi.md |
| ceaksan/mcp-code-search | previous-clone-inventory-107 | 23 | Python | pyproject.toml, uv.lock | 0 | 11 | reports/clone-structures/ceaksan__mcp-code-search.md |
| chroma-core/chroma | adjacent-tech-50, previous-clone-inventory-107 | 2029 | Node/TypeScript/JavaScript, Python, Rust, Go | .github/actions/bandit-scan/Dockerfile, Cargo.toml, Dockerfile, bin/templates/docker-compose.yml | 31 | 13 | reports/clone-structures/chroma-core__chroma.md |
| cline/cline | core-agent-30, previous-clone-inventory-107 | 3383 | Node/TypeScript/JavaScript, Rust | apps/cli/package.json, apps/cli/src/tests/package.json, apps/cli/tsconfig.json, apps/cline-hub/package.json | 111 | 100 | reports/clone-structures/cline__cline.md |
| codervisor/leanspec | spec-driven-20 | 1393 | Node/TypeScript/JavaScript, Rust | deploy/examples/docker-compose.yml, docker/Dockerfile, docs-site/package.json, docs-site/pnpm-lock.yaml | 140 | 81 | reports/clone-structures/codervisor__leanspec.md |
| confident-ai/deepeval | adjacent-tech-50, previous-clone-inventory-107 | 2022 | Node/TypeScript/JavaScript, Python | docs/package.json, docs/tsconfig.json, docs/yarn.lock, poetry.lock | 9 | 50 | reports/clone-structures/confident-ai__deepeval.md |
| continuedev/continue | core-agent-30, previous-clone-inventory-107 | 3044 | Node/TypeScript/JavaScript, Python, Rust | binary/package.json, binary/pkgJson/darwin-arm64/package.json, binary/pkgJson/darwin-x64/package.json, binary/pkgJson/linux-arm64/package.json | 48 | 48 | reports/clone-structures/continuedev__continue.md |
| crewAIInc/crewAI | core-agent-30, previous-clone-inventory-107 | 3287 | Python | lib/cli/pyproject.toml, lib/cli/src/crewai_cli/templates/crew/pyproject.toml, lib/cli/src/crewai_cli/templates/flow/pyproject.toml, lib/cli/src/crewai_cli/templates/tool/pyproject.toml | 63 | 100 | reports/clone-structures/crewAIInc__crewAI.md |
| deepset-ai/haystack | adjacent-tech-50, previous-clone-inventory-107 | 8383 | Node/TypeScript/JavaScript, Python | docs-website/api/tsconfig.json, docs-website/package.json, pyproject.toml | 0 | 48 | reports/clone-structures/deepset-ai__haystack.md |
| docfork/docfork | previous-clone-inventory-107 | 149 | Node/TypeScript/JavaScript | package.json, packages/dgrep/package.json, packages/dgrep/tsconfig.json, packages/mcp/Dockerfile | 23 | 28 | reports/clone-structures/docfork__docfork.md |
| entireio/pgr | previous-clone-inventory-107 | 425 | Rust | Cargo.toml | 0 | 1 | reports/clone-structures/entireio__pgr.md |
| explodinggradients/ragas | adjacent-tech-50, previous-clone-inventory-107 | 694 | Python | examples/pyproject.toml, examples/ragas_examples/improve_rag/pyproject.toml, examples/ragas_examples/rag_eval/pyproject.toml, pyproject.toml | 4 | 14 | reports/clone-structures/explodinggradients__ragas.md |
| fabriqaai/specs.md | spec-driven-20 | 849 | Node/TypeScript/JavaScript | package.json, src/package.json, src/tsconfig.json, vs-code-extension/package.json | 140 | 99 | reports/clone-structures/fabriqaai__specs.md.md |
| facebookresearch/faiss | adjacent-tech-50, previous-clone-inventory-107 | 1058 | Python | faiss/cppcontrib/docker_dev/Dockerfile, pyproject.toml | 0 | 0 | reports/clone-structures/facebookresearch__faiss.md |
| formulahendry/mcp-server-spec-driven-development | spec-driven-20 | 13 | Node/TypeScript/JavaScript | package.json, tsconfig.json | 0 | 1 | reports/clone-structures/formulahendry__mcp-server-spec-driven-development.md |
| getzep/zep | adjacent-tech-50, previous-clone-inventory-107 | 536 | Node/TypeScript/JavaScript, Python, Go | benchmarks/locomo/pyproject.toml, benchmarks/longmemeval/pyproject.toml, examples/go/chunking-example/go.mod, examples/python/agent-memory-full-example/requirements.txt | 1 | 47 | reports/clone-structures/getzep__zep.md |
| ggml-org/llama.cpp | adjacent-tech-50, previous-clone-inventory-107 | 2985 | Node/TypeScript/JavaScript, Python | examples/gguf-hash/deps/rotate-bits/package.json, examples/gguf-hash/deps/sha1/package.json, examples/gguf-hash/deps/sha256/package.json, examples/model-conversion/requirements.txt | 58 | 36 | reports/clone-structures/ggml-org__llama.cpp.md |
| github/awesome-copilot | previous-clone-inventory-107 | 2566 | Node/TypeScript/JavaScript, Python | .github/extensions/external-plugins-board/package.json, cookbook/copilot-sdk/nodejs/recipe/package.json, cookbook/copilot-sdk/python/recipe/requirements.txt, extensions/accessibility-kanban/package.json | 140 | 100 | reports/clone-structures/github__awesome-copilot.md |
| github/spec-kit | spec-driven-20 | 380 | Python | pyproject.toml | 44 | 4 | reports/clone-structures/github__spec-kit.md |
| google-gemini/gemini-cli | core-agent-30, previous-clone-inventory-107 | 2867 | Node/TypeScript/JavaScript | Dockerfile, evals/tsconfig.json, integration-tests/tsconfig.json, memory-tests/tsconfig.json | 140 | 100 | reports/clone-structures/google-gemini__gemini-cli.md |
| gotalab/cc-sdd | spec-driven-20 | 536 | Node/TypeScript/JavaScript | tools/cc-sdd/package.json, tools/cc-sdd/tsconfig.json | 140 | 100 | reports/clone-structures/gotalab__cc-sdd.md |
| gsd-build/get-shit-done | spec-driven-20 | 1854 | Node/TypeScript/JavaScript | package.json, sdk/package.json, sdk/tsconfig.json, tsconfig.json | 63 | 45 | reports/clone-structures/gsd-build__get-shit-done.md |
| gsd-build/gsd-2 | spec-driven-20 | 3607 | Node/TypeScript/JavaScript, Rust | Dockerfile, extensions/google-search/package.json, native/Cargo.toml, native/crates/ast/Cargo.toml | 140 | 100 | reports/clone-structures/gsd-build__gsd-2.md |
| guardrails-ai/guardrails | adjacent-tech-50, previous-clone-inventory-107 | 552 | Python | poetry.lock, pyproject.toml, server_ci/Dockerfile, server_ci/requirements.txt | 0 | 0 | reports/clone-structures/guardrails-ai__guardrails.md |
| https-deeplearning-ai/sc-spec-driven-development-files | spec-driven-20 | 332 | Node/TypeScript/JavaScript | Video05_Creating_the_Constitution/package.json, Video05_Creating_the_Constitution/tsconfig.json, Video06_Feature_Specification/package.json, Video06_Feature_Specification/tsconfig.json | 61 | 4 | reports/clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md |
| huggingface/accelerate | adjacent-tech-50, previous-clone-inventory-107 | 356 | Python | benchmarks/fp8/ms_amp/Dockerfile, benchmarks/fp8/torchao/Dockerfile, benchmarks/fp8/transformer_engine/Dockerfile, docker/accelerate-cpu/Dockerfile | 24 | 0 | reports/clone-structures/huggingface__accelerate.md |
| huggingface/text-generation-inference | adjacent-tech-50, previous-clone-inventory-107 | 878 | Python, Rust | Cargo.toml, Dockerfile, backends/client/Cargo.toml, backends/gaudi/server/poetry.lock | 0 | 0 | reports/clone-structures/huggingface__text-generation-inference.md |
| huggingface/transformers | adjacent-tech-50, previous-clone-inventory-107 | 6097 | Python | benchmark/requirements.txt, benchmark_v2/requirements.txt, docker/transformers-all-latest-gpu/Dockerfile, docker/transformers-doc-builder/Dockerfile | 1 | 4 | reports/clone-structures/huggingface__transformers.md |
| humanlayer/humanlayer | adjacent-tech-50, previous-clone-inventory-107 | 794 | Node/TypeScript/JavaScript, Rust, Go | apps/daemon/package.json, apps/daemon/tsconfig.json, apps/react/package.json, apps/react/tsconfig.json | 42 | 53 | reports/clone-structures/humanlayer__humanlayer.md |
| infiniflow/ragflow | adjacent-tech-50, previous-clone-inventory-107 | 3628 | Node/TypeScript/JavaScript, Python, Go | Dockerfile, admin/client/pyproject.toml, admin/client/uv.lock, agent/sandbox/docker-compose.yml | 86 | 100 | reports/clone-structures/infiniflow__ragflow.md |
| jayminwest/overstory | previous-clone-inventory-107 | 457 | Node/TypeScript/JavaScript | bun.lock, package.json, tsconfig.json, ui/bun.lock | 94 | 9 | reports/clone-structures/jayminwest__overstory.md |
| kaplanelad/shellfirm | previous-clone-inventory-107 | 182 | Node/TypeScript/JavaScript, Rust | Cargo.toml, docs/docker/bash/Dockerfile, docs/docker/zsh/Dockerfile, npm/cli-darwin-arm64/package.json | 0 | 2 | reports/clone-structures/kaplanelad__shellfirm.md |
| khoj-ai/khoj | adjacent-tech-50, previous-clone-inventory-107 | 701 | Node/TypeScript/JavaScript, Python | .devcontainer/Dockerfile, Dockerfile, docker-compose.yml, documentation/package.json | 6 | 3 | reports/clone-structures/khoj-ai__khoj.md |
| lancedb/lancedb | adjacent-tech-50, previous-clone-inventory-107 | 586 | Node/TypeScript/JavaScript, Python, Rust | Cargo.toml, docker-compose.yml, dockerfiles/Dockerfile, docs/package.json | 2 | 5 | reports/clone-structures/lancedb__lancedb.md |
| langchain-ai/langchain | adjacent-tech-50, previous-clone-inventory-107 | 2937 | Python | libs/core/pyproject.toml, libs/core/uv.lock, libs/langchain/pyproject.toml, libs/langchain/uv.lock | 0 | 6 | reports/clone-structures/langchain-ai__langchain.md |
| langchain-ai/langgraph | core-agent-30, previous-clone-inventory-107 | 666 | Node/TypeScript/JavaScript, Python | libs/checkpoint-conformance/pyproject.toml, libs/checkpoint-conformance/uv.lock, libs/checkpoint-postgres/pyproject.toml, libs/checkpoint-postgres/uv.lock | 0 | 3 | reports/clone-structures/langchain-ai__langgraph.md |
| langchain-ai/open-swe | previous-clone-inventory-107 | 410 | Node/TypeScript/JavaScript, Python | Dockerfile, pyproject.toml, ui/bun.lock, ui/package.json | 2 | 9 | reports/clone-structures/langchain-ai__open-swe.md |
| langfuse/langfuse | adjacent-tech-50, previous-clone-inventory-107 | 3660 | Node/TypeScript/JavaScript | .devcontainer/Dockerfile, docker-compose.yml, ee/package.json, ee/tsconfig.json | 140 | 100 | reports/clone-structures/langfuse__langfuse.md |
| lm-sys/FastChat | adjacent-tech-50, previous-clone-inventory-107 | 219 | Python | docker/Dockerfile, docker/docker-compose.yml, pyproject.toml | 6 | 0 | reports/clone-structures/lm-sys__FastChat.md |
| mem0ai/mem0 | adjacent-tech-50, previous-clone-inventory-107 | 1671 | Node/TypeScript/JavaScript, Python | cli/node/package.json, cli/node/pnpm-lock.yaml, cli/node/pnpm-workspace.yaml, cli/node/tsconfig.json | 75 | 100 | reports/clone-structures/mem0ai__mem0.md |
| microsoft/BitNet | adjacent-tech-50, previous-clone-inventory-107 | 71 | Python | gpu/requirements.txt, requirements.txt | 0 | 0 | reports/clone-structures/microsoft__BitNet.md |
| microsoft/autogen | core-agent-30, previous-clone-inventory-107 | 1837 | Node/TypeScript/JavaScript, Python | .devcontainer/Dockerfile, .devcontainer/docker-compose.yml, dotnet/samples/dev-team/seed-memory/Dockerfile, dotnet/src/Microsoft.AutoGen/AgentHost/Dockerfile | 11 | 48 | reports/clone-structures/microsoft__autogen.md |
| microsoft/graphrag | adjacent-tech-50, previous-clone-inventory-107 | 893 | Python | packages/graphrag-cache/pyproject.toml, packages/graphrag-chunking/pyproject.toml, packages/graphrag-common/pyproject.toml, packages/graphrag-input/pyproject.toml | 2 | 0 | reports/clone-structures/microsoft__graphrag.md |
| microsoft/promptflow | adjacent-tech-50, previous-clone-inventory-107 | 4036 | Python | .devcontainer/Dockerfile, .devcontainer/requirements.txt, benchmark/promptflow-serve/mock_api/Dockerfile, benchmark/promptflow-serve/mock_api/requirements.txt | 45 | 38 | reports/clone-structures/microsoft__promptflow.md |
| microsoft/vscode-copilot-chat | previous-clone-inventory-107 | 4436 | Node/TypeScript/JavaScript, Python | .eslintplugin/package.json, .eslintplugin/tsconfig.json, .vscode/extensions/test-extension/package.json, .vscode/extensions/visualization-runner/package.json | 25 | 50 | reports/clone-structures/microsoft__vscode-copilot-chat.md |
| milvus-io/milvus | adjacent-tech-50, previous-clone-inventory-107 | 5254 | Python, Rust, Go | client/go.mod, cmd/tools/binlogv2/requirements.txt, deployments/docker/dev/docker-compose.yml, deployments/docker/gpu/standalone/docker-compose.yml | 8 | 1 | reports/clone-structures/milvus-io__milvus.md |
| minmaxflow/mini-kode | previous-clone-inventory-107 | 150 | Node/TypeScript/JavaScript | package.json, pnpm-lock.yaml, tsconfig.json | 7 | 7 | reports/clone-structures/minmaxflow__mini-kode.md |
| mksglu/context-mode | previous-clone-inventory-107 | 562 | Node/TypeScript/JavaScript | .openclaw-plugin/package.json, .pi/extensions/context-mode/package.json, .pi/extensions/context-mode/tsconfig.json, bun.lock | 9 | 61 | reports/clone-structures/mksglu__context-mode.md |
| mlc-ai/mlc-llm | adjacent-tech-50, previous-clone-inventory-107 | 693 | Node/TypeScript/JavaScript, Python | docs/requirements.txt, examples/rest/nodejs/package.json, examples/rest/nodejs/tsconfig.json, pyproject.toml | 0 | 0 | reports/clone-structures/mlc-ai__mlc-llm.md |
| moazbuilds/codemachine-cli | previous-clone-inventory-107 | 552 | Node/TypeScript/JavaScript | bun.lock, config/package.json, docker/observability/docker-compose.yml, package.json | 29 | 49 | reports/clone-structures/moazbuilds__CodeMachine-CLI.md |
| modelcontextprotocol/servers | core-agent-30, previous-clone-inventory-107 | 142 | Node/TypeScript/JavaScript, Python | package.json, src/everything/Dockerfile, src/everything/package.json, src/everything/tsconfig.json | 0 | 13 | reports/clone-structures/modelcontextprotocol__servers.md |
| mreferre/ralph-loop-kiro-specs | spec-driven-20 | 5 | unknown/mixed |  | 0 | 0 | reports/clone-structures/mreferre__ralph-loop-kiro-specs.md |
| mudler/LocalAI | adjacent-tech-50, previous-clone-inventory-107 | 2606 | Node/TypeScript/JavaScript, Python, Rust, Go | Dockerfile, backend/python/ace-step/requirements.txt, backend/python/chatterbox/requirements.txt, backend/python/common/template/requirements.txt | 16 | 78 | reports/clone-structures/mudler__LocalAI.md |
| nanobrowser/nanobrowser | core-agent-30, previous-clone-inventory-107 | 256 | Node/TypeScript/JavaScript | chrome-extension/package.json, chrome-extension/tsconfig.json, package.json, packages/dev-utils/package.json | 3 | 1 | reports/clone-structures/nanobrowser__nanobrowser.md |
| nesquena/hermes-webui | core-agent-30, previous-clone-inventory-107 | 1237 | Node/TypeScript/JavaScript, Python | Dockerfile, docker-compose.yml, package.json, pyproject.toml | 1 | 31 | reports/clone-structures/nesquena__hermes-webui.md |
| numman-ali/openskills | previous-clone-inventory-107 | 94 | Node/TypeScript/JavaScript | package.json, tsconfig.json | 10 | 11 | reports/clone-structures/numman-ali__openskills.md |
| ollama/ollama | adjacent-tech-50, previous-clone-inventory-107 | 1233 | Node/TypeScript/JavaScript, Go | Dockerfile, app/ui/app/package.json, app/ui/app/tsconfig.json, app/ui/app/vite.config.ts | 0 | 6 | reports/clone-structures/ollama__ollama.md |
| oobabooga/text-generation-webui | adjacent-tech-50, previous-clone-inventory-107 | 358 | Node/TypeScript/JavaScript, Python | desktop/package.json, docker/TensorRT-LLM/Dockerfile, docker/amd/Dockerfile, docker/amd/docker-compose.yml | 0 | 0 | reports/clone-structures/oobabooga__text-generation-webui.md |
| openai/codex | core-agent-30, previous-clone-inventory-107 | 4880 | Node/TypeScript/JavaScript, Rust | .devcontainer/Dockerfile, .devcontainer/codex-install/package.json, .devcontainer/codex-install/pnpm-lock.yaml, .devcontainer/codex-install/pnpm-workspace.yaml | 131 | 100 | reports/clone-structures/openai__codex.md |
| openai/codex-plugin-cc | core-agent-30, previous-clone-inventory-107 | 61 | Node/TypeScript/JavaScript | package.json | 13 | 6 | reports/clone-structures/openai__codex-plugin-cc.md |
| openai/evals | adjacent-tech-50, previous-clone-inventory-107 | 1728 | Python | evals/elsuite/hr_ml_agent_bench/benchmarks/bipedal_walker/scripts/requirements.txt, evals/elsuite/hr_ml_agent_bench/benchmarks/cartpole/scripts/requirements.txt, evals/elsuite/hr_ml_agent_bench/benchmarks/cifar10/scripts/requirements.txt, evals/elsuite/hr_ml_agent_bench/benchmarks/humanoid/scripts/requirements.txt | 3 | 31 | reports/clone-structures/openai__evals.md |
| openclaw/openclaw | core-agent-30, previous-clone-inventory-107 | 19887 | Node/TypeScript/JavaScript | .github/images/live-media-runner/Dockerfile, Dockerfile, docker-compose.yml, extensions/acpx/package.json | 140 | 100 | reports/clone-structures/openclaw__openclaw.md |
| opencode-ai/opencode | previous-clone-inventory-107 | 162 | Go | go.mod | 0 | 1 | reports/clone-structures/opencode-ai__opencode.md |
| openinterpreter/open-interpreter | core-agent-30, previous-clone-inventory-107 | 276 | Python | Dockerfile, examples/Dockerfile, poetry.lock, pyproject.toml | 1 | 1 | reports/clone-structures/openinterpreter__open-interpreter.md |
| pgvector/pgvector | adjacent-tech-50, previous-clone-inventory-107 | 150 | unknown/mixed | Dockerfile | 0 | 0 | reports/clone-structures/pgvector__pgvector.md |
| plandex-ai/plandex | previous-clone-inventory-107 | 687 | Node/TypeScript/JavaScript, Go | app/cli/go.mod, app/docker-compose.yml, app/server/Dockerfile, app/server/go.mod | 2 | 0 | reports/clone-structures/plandex-ai__plandex.md |
| potpie-ai/potpie | spec-driven-20 | 1494 | Python, Rust | legacy/pyproject.toml, legacy/uv.lock, potpie/context-engine/pyproject.toml, potpie/context-engine/uv.lock | 32 | 35 | reports/clone-structures/potpie-ai__potpie.md |
| promptfoo/promptfoo | adjacent-tech-50, previous-clone-inventory-107 | 5400 | Node/TypeScript/JavaScript, Python, Go | .devcontainer/docker-compose.yml, Dockerfile, code-scan-action/package.json, code-scan-action/tsconfig.json | 140 | 100 | reports/clone-structures/promptfoo__promptfoo.md |
| pydantic/pydantic-ai | adjacent-tech-50, previous-clone-inventory-107 | 2095 | Node/TypeScript/JavaScript, Python | clai/pyproject.toml, docs-site/package.json, docs-site/tsconfig.json, examples/pyproject.toml | 18 | 91 | reports/clone-structures/pydantic__pydantic-ai.md |
| qdrant/qdrant | adjacent-tech-50, previous-clone-inventory-107 | 1874 | Node/TypeScript/JavaScript, Python, Rust | Cargo.toml, Dockerfile, lib/api/Cargo.toml, lib/bm25/Cargo.toml | 0 | 0 | reports/clone-structures/qdrant__qdrant.md |
| regent-vcs/re_gent | previous-clone-inventory-107 | 132 | Go | go.mod | 7 | 10 | reports/clone-structures/regent-vcs__re_gent.md |
| rohitg00/agentmemory | previous-clone-inventory-107 | 615 | Node/TypeScript/JavaScript | deploy/coolify/Dockerfile, deploy/coolify/docker-compose.yml, deploy/fly/Dockerfile, deploy/railway/Dockerfile | 34 | 60 | reports/clone-structures/rohitg00__agentmemory.md |
| run-llama/llama_index | adjacent-tech-50, previous-clone-inventory-107 | 10012 | Python | docs/api_reference/poetry.lock, docs/api_reference/pyproject.toml, llama-dev/pyproject.toml, llama-dev/tests/data/llama-index-integrations/storage/subcat/pkg2/pyproject.toml | 1 | 43 | reports/clone-structures/run-llama__llama_index.md |
| sgl-project/sglang | adjacent-tech-50, previous-clone-inventory-107 | 6477 | Python, Rust, Go | .devcontainer/Dockerfile, 3rdparty/amd/wheel/sglang/pyproject.toml, docker/Dockerfile, docs/requirements.txt | 107 | 100 | reports/clone-structures/sgl-project__sglang.md |
| sourcebot-dev/sourcebot | previous-clone-inventory-107 | 1330 | Node/TypeScript/JavaScript | .devcontainer/Dockerfile, .devcontainer/docker-compose.yml, Dockerfile, docker-compose.yml | 0 | 99 | reports/clone-structures/sourcebot-dev__sourcebot.md |
| stanford-oval/storm | adjacent-tech-50, previous-clone-inventory-107 | 74 | Python | frontend/demo_light/requirements.txt, requirements.txt | 0 | 0 | reports/clone-structures/stanford-oval__storm.md |
| stanfordnlp/dspy | adjacent-tech-50, previous-clone-inventory-107 | 540 | Python | .github/.internal_dspyai/pyproject.toml, docs/requirements.txt, pyproject.toml, uv.lock | 0 | 6 | reports/clone-structures/stanfordnlp__dspy.md |
| tesslio/spec-driven-development-tile | spec-driven-20 | 37 | unknown/mixed |  | 0 | 4 | reports/clone-structures/tesslio__spec-driven-development-tile.md |
| timescale/pgvectorscale | adjacent-tech-50, previous-clone-inventory-107 | 96 | Python, Rust | Cargo.toml, pgvectorscale/Cargo.toml, pgvectorscale/pgvectorscale_derive/Cargo.toml, scripts/requirements.txt | 0 | 0 | reports/clone-structures/timescale__pgvectorscale.md |
| tontinton/maki | previous-clone-inventory-107 | 410 | Rust | Cargo.toml, maki-acp/Cargo.toml, maki-agent/Cargo.toml, maki-config-macro/Cargo.toml | 5 | 20 | reports/clone-structures/tontinton__maki.md |
| truera/trulens | adjacent-tech-50, previous-clone-inventory-107 | 1234 | Node/TypeScript/JavaScript, Python | examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/package.json, examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/tsconfig.json, examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/vite.config.ts, examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/monitoring_dashboard/pyproject.toml | 20 | 12 | reports/clone-structures/truera__trulens.md |
| typesense/typesense | adjacent-tech-50, previous-clone-inventory-107 | 484 | Node/TypeScript/JavaScript | api_tests/bun.lock, api_tests/package.json, api_tests/tsconfig.json, benchmark/Dockerfile | 3 | 0 | reports/clone-structures/typesense__typesense.md |
| ultraworkers/claw-code | core-agent-30, previous-clone-inventory-107 | 386 | Rust | docker-compose.yml, rust/Cargo.toml, rust/crates/api/Cargo.toml, rust/crates/claw-analog/Cargo.toml | 3 | 52 | reports/clone-structures/ultraworkers__claw-code.md |
| upstash/context7 | core-agent-30, previous-clone-inventory-107 | 322 | Node/TypeScript/JavaScript | package.json, packages/cli/package.json, packages/cli/tsconfig.json, packages/mcp/Dockerfile | 24 | 55 | reports/clone-structures/upstash__context7.md |
| vercel-labs/opensrc | previous-clone-inventory-107 | 84 | Node/TypeScript/JavaScript, Rust | apps/docs/package.json, apps/docs/tsconfig.json, package.json, packages/opensrc/cli/Cargo.toml | 8 | 2 | reports/clone-structures/vercel-labs__opensrc.md |
| vllm-project/vllm | adjacent-tech-50, previous-clone-inventory-107 | 5488 | Python, Rust | benchmarks/kernels/requirements.txt, benchmarks/multi_turn/requirements.txt, docker/Dockerfile, examples/features/structured_outputs/pyproject.toml | 48 | 10 | reports/clone-structures/vllm-project__vllm.md |
| weaviate/Verba | adjacent-tech-50, previous-clone-inventory-107 | 377 | Node/TypeScript/JavaScript | Dockerfile, docker-compose.yml, frontend/next.config.js, frontend/package.json | 0 | 0 | reports/clone-structures/weaviate__Verba.md |
| weaviate/weaviate | adjacent-tech-50, previous-clone-inventory-107 | 4747 | Python, Go | Dockerfile, docker-compose.yml, go.mod, pyproject.toml | 0 | 55 | reports/clone-structures/weaviate__weaviate.md |
| xorbitsai/inference | adjacent-tech-50, previous-clone-inventory-107 | 1884 | Node/TypeScript/JavaScript, Python | frontend/package.json, frontend/tsconfig.json, monitor/filebeat/docker-compose.yml, pyproject.toml | 17 | 1 | reports/clone-structures/xorbitsai__inference.md |

## 우선 심층 분석이 필요한 후보

| repo | score | why | report |
| --- | --- | --- | --- |
| Arize-ai/phoenix | 410 | spec artifacts 140; agent files 100; large repo 6021 files; multi-stack Node/TypeScript/JavaScript/Python | reports/clone-structures/Arize-ai__phoenix.md |
| ComposioHQ/composio | 410 | spec artifacts 140; agent files 100; large repo 2244 files; multi-stack Node/TypeScript/JavaScript/Python | reports/clone-structures/ComposioHQ__composio.md |
| NousResearch/hermes-agent | 410 | spec artifacts 140; agent files 100; large repo 4944 files; multi-stack Node/TypeScript/JavaScript/Python/Rust | reports/clone-structures/NousResearch__hermes-agent.md |
| QwenLM/qwen-code | 410 | spec artifacts 140; agent files 100; large repo 3114 files; multi-stack Node/TypeScript/JavaScript/Python | reports/clone-structures/QwenLM__qwen-code.md |
| github/awesome-copilot | 410 | spec artifacts 140; agent files 100; large repo 2566 files; multi-stack Node/TypeScript/JavaScript/Python | reports/clone-structures/github__awesome-copilot.md |
| gsd-build/gsd-2 | 410 | spec artifacts 140; agent files 100; large repo 3607 files; multi-stack Node/TypeScript/JavaScript/Rust | reports/clone-structures/gsd-build__gsd-2.md |
| promptfoo/promptfoo | 410 | spec artifacts 140; agent files 100; large repo 5400 files; multi-stack Node/TypeScript/JavaScript/Python/Go | reports/clone-structures/promptfoo__promptfoo.md |
| NVIDIA/TensorRT-LLM | 400 | spec artifacts 140; agent files 100; large repo 10452 files | reports/clone-structures/NVIDIA__TensorRT-LLM.md |
| google-gemini/gemini-cli | 400 | spec artifacts 140; agent files 100; large repo 2867 files | reports/clone-structures/google-gemini__gemini-cli.md |
| langfuse/langfuse | 400 | spec artifacts 140; agent files 100; large repo 3660 files | reports/clone-structures/langfuse__langfuse.md |
| openclaw/openclaw | 400 | spec artifacts 140; agent files 100; large repo 19887 files | reports/clone-structures/openclaw__openclaw.md |
| openai/codex | 392 | spec artifacts 131; agent files 100; large repo 4880 files; multi-stack Node/TypeScript/JavaScript/Rust | reports/clone-structures/openai__codex.md |
| gotalab/cc-sdd | 380 | spec artifacts 140; agent files 100 | reports/clone-structures/gotalab__cc-sdd.md |
| fabriqaai/specs.md | 379 | spec artifacts 140; agent files 99 | reports/clone-structures/fabriqaai__specs.md.md |
| codervisor/leanspec | 371 | spec artifacts 140; agent files 81; multi-stack Node/TypeScript/JavaScript/Rust | reports/clone-structures/codervisor__leanspec.md |
| cline/cline | 352 | spec artifacts 111; agent files 100; large repo 3383 files; multi-stack Node/TypeScript/JavaScript/Rust | reports/clone-structures/cline__cline.md |
| sgl-project/sglang | 344 | spec artifacts 107; agent files 100; large repo 6477 files; multi-stack Python/Rust/Go | reports/clone-structures/sgl-project__sglang.md |
| gentleman-programming/engram | 332 | spec artifacts 140; agent files 42; multi-stack Node/TypeScript/JavaScript/Go | reports/clone-structures/Gentleman-Programming__engram.md |
| Fission-AI/OpenSpec | 325 | spec artifacts 140; agent files 45 | reports/clone-structures/Fission-AI__OpenSpec.md |
| infiniflow/ragflow | 302 | spec artifacts 86; agent files 100; large repo 3628 files; multi-stack Node/TypeScript/JavaScript/Python/Go | reports/clone-structures/infiniflow__ragflow.md |
| BerriAI/litellm | 262 | spec artifacts 66; agent files 100; large repo 6958 files; multi-stack Node/TypeScript/JavaScript/Python/Go | reports/clone-structures/BerriAI__litellm.md |
| mem0ai/mem0 | 260 | spec artifacts 75; agent files 100; multi-stack Node/TypeScript/JavaScript/Python | reports/clone-structures/mem0ai__mem0.md |
| can1357/oh-my-pi | 252 | spec artifacts 61; agent files 100; large repo 4212 files; multi-stack Node/TypeScript/JavaScript/Python/Rust | reports/clone-structures/can1357__oh-my-pi.md |
| aaif-goose/goose | 250 | spec artifacts 60; agent files 100; large repo 2325 files; multi-stack Node/TypeScript/JavaScript/Python/Rust | reports/clone-structures/aaif-goose__goose.md |
| crewAIInc/crewAI | 246 | spec artifacts 63; agent files 100; large repo 3287 files | reports/clone-structures/crewAIInc__crewAI.md |
| anomalyco/opencode | 236 | spec artifacts 58; agent files 100; large repo 5666 files | reports/clone-structures/anomalyco__opencode.md |
| Kilo-Org/kilocode | 208 | spec artifacts 44; agent files 100; large repo 6848 files | reports/clone-structures/Kilo-Org__kilocode.md |
| agenta-ai/agenta | 207 | spec artifacts 74; agent files 29; large repo 9270 files; multi-stack Node/TypeScript/JavaScript/Python | reports/clone-structures/agenta-ai__agenta.md |
| jayminwest/overstory | 197 | spec artifacts 94; agent files 9 | reports/clone-structures/jayminwest__overstory.md |
| All-Hands-AI/OpenHands | 196 | spec artifacts 42; agent files 82; large repo 2385 files; multi-stack Node/TypeScript/JavaScript/Python | reports/clone-structures/All-Hands-AI__OpenHands.md |

## 해석 메모

- 이 결과는 실제 로컬 클론의 파일 구조, manifest, 문서, 에이전트 지침, 스펙 아티팩트를 기준으로 만든 구조 분석이다.
- 이전 보고서가 주로 30개 핵심 에이전트와 50개 adjacent-stack에 집중되어 있었으므로, 이번 산출물은 나머지 로컬 클론까지 동일 기준으로 덮는 보강 자료다.
- 자동 구조 분석이므로 의미/품질 평가는 각 레포별 상세 보고서의 `다음 심층 분석 포인트`를 따라 추가 수동 독해가 필요하다.
