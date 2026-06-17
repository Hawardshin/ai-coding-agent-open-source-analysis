# NVIDIA/TensorRT-LLM 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/NVIDIA__TensorRT-LLM |
| remote | https://github.com/NVIDIA/TensorRT-LLM |
| HEAD | db7161b (2026-06-12) [None][fix] Revert "Add PyTorch reset_prefix_cache API (#14970)" (#15306) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 10452 |
| dirs | 1071 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Tech Blogs`, `Latest News`, `TensorRT LLM Overview`, `Getting Started`, `Deprecation Policy`, `Telemetry Data Collection`, `Opting Out of Telemetry Data Collection`, `Useful Links`

> <div align="center" TensorRT LLM =========================== <h4 TensorRT LLM optimizes inference for LLMs and Visual Gen models with specialized kernels for common operations, an efficient runtime, and a pythonic framework that enables you to customize and extend the system.</h4 Architecture&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Examples&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Documentation&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Roadmap <div align="left" Tech Blogs <! Use github markdown link to link for the latest blog since the doc build has not happened yet. When the doc build is updated, it should be updated to the webpage link. [05/15] Joint Optimization of Agent Applications and TensorRT LLM ✨ ➡️ link [04/03] Tuning CUDA Graph Batch Sizes for Higher Output Throughput ✨ ➡️ link [04/03] DWDP Distributed Weight Data Parallelism for High Performa

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .clang-format | file |
| .clang-tidy | file |
| .clangd | file |
| .claude | dir |
| .cmake-format.json | file |
| .coderabbit.yaml | file |
| .codex | dir |
| .cursorignore | file |
| .devcontainer | dir |
| .dockerignore | file |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .nspect-allowlist.toml | file |
| .pre-commit-config.yaml | file |
| 3rdparty | dir |
| AGENTS.md | file |
| ATTRIBUTIONS-CPP-aarch64.md | file |
| ATTRIBUTIONS-CPP-x86_64.md | file |
| ATTRIBUTIONS-Python.md | file |
| benchmarks | dir |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CODING_GUIDELINES.md | file |
| constraints.txt | file |
| CONTAINER_SOURCE.md | file |
| CONTRIBUTING.md | file |
| cpp | dir |
| docker | dir |
| docs | dir |
| enroot | dir |
| examples | dir |
| jenkins | dir |
| legacy-files.txt | file |
| LICENSE | file |
| pyproject.toml | file |
| README.md | file |
| requirements-dev.txt | file |
| requirements.txt | file |
| ruff-legacy-baseline.json | file |
| ruff-legacy.toml | file |
| scripts | dir |
| security_scanning | dir |
| SECURITY.md | file |
| setup.py | file |
| tensorrt_llm | dir |
| tests | dir |
| triton_backend | dir |
| triton_kernels | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| cpp/ | 5674 |
| tests/ | 1555 |
| tensorrt_llm/ | 1334 |
| examples/ | 803 |
| docs/ | 373 |
| .claude/ | 139 |
| scripts/ | 116 |
| security_scanning/ | 115 |
| triton_backend/ | 114 |
| jenkins/ | 53 |
| triton_kernels/ | 52 |
| (root) | 33 |
| .github/ | 30 |
| docker/ | 22 |
| benchmarks/ | 16 |
| 3rdparty/ | 10 |
| .codex/ | 7 |
| .devcontainer/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 373 | preferred |
| examples/ | 803 | preferred |
| tests/ | 1555 | preferred |
| scripts/ | 116 | preferred |
| cpp/ | 5674 | large |
| cpp/tensorrt_llm/ | 5143 | large |
| cpp/tensorrt_llm/kernels/ | 4479 | large |
| tensorrt_llm/ | 1334 | large |
| tests/unittest/ | 884 | large |
| tensorrt_llm/_torch/ | 830 | large |
| docs/source/ | 368 | large |
| tests/integration/ | 364 | large |
| tests/unittest/_torch/ | 337 | large |
| tests/integration/defs/ | 282 | large |
| tests/scripts/ | 268 | large |
| tensorrt_llm/_torch/auto_deploy/ | 261 | large |
| examples/configs/ | 216 | large |
| cpp/tests/ | 211 | large |
| examples/configs/database/ | 199 | large |
| examples/models/ | 199 | large |
| docs/source/blogs/ | 188 | large |
| tests/unittest/auto_deploy/ | 182 | large |
| tensorrt_llm/_torch/visual_gen/ | 179 | large |
| cpp/kernels/ | 177 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/docker-compose.yml`
- `cpp/kernels/fmha_v2/requirements.txt`
- `docs/requirements.txt`
- `examples/apps/requirements.txt`
- `examples/auto_deploy/requirements.txt`
- `examples/draft_target_model/requirements.txt`
- `examples/eagle/requirements.txt`
- `examples/llm-eval/lm-eval-harness/requirements.txt`
- `examples/longbench/requirements.txt`
- `examples/lookahead/requirements.txt`
- `examples/medusa/requirements.txt`
- `examples/models/contrib/baichuan/requirements.txt`
- `examples/models/contrib/bloom/requirements.txt`
- `examples/models/contrib/chatglm-6b/requirements.txt`
- `examples/models/contrib/chatglm2-6b/requirements.txt`
- `examples/models/contrib/chatglm3-6b-32k/requirements.txt`
- `examples/models/contrib/dbrx/requirements.txt`
- `examples/models/contrib/deepseek_v1/requirements.txt`
- `examples/models/contrib/deepseek_v2/requirements.txt`
- `examples/models/contrib/falcon/requirements.txt`
- `examples/models/contrib/gptj/requirements.txt`
- `examples/models/contrib/gptneox/requirements.txt`
- `examples/models/contrib/grok/requirements.txt`
- `examples/models/contrib/hyperclovax/requirements.txt`
- `examples/models/contrib/internlm/requirements.txt`
- `examples/models/contrib/jais/requirements.txt`
- `examples/models/contrib/mmdit/requirements.txt`
- `examples/models/contrib/mpt/requirements.txt`
- `examples/models/contrib/opt/requirements.txt`
- `examples/models/contrib/skywork/requirements.txt`
- `examples/models/contrib/smaug/requirements.txt`
- `examples/models/contrib/stdit/requirements.txt`
- `examples/models/core/commandr/requirements.txt`
- `examples/models/core/gemma/requirements.txt`
- `examples/models/core/glm-4-9b/requirements.txt`
- `examples/models/core/gpt/requirements.txt`
- `examples/models/core/internlm2/requirements.txt`
- `examples/models/core/llama/requirements.txt`
- `examples/models/core/mamba/requirements.txt`
- `examples/models/core/mixtral/requirements.txt`
- `examples/models/core/mllama/requirements.txt`
- `examples/models/core/nemotron/requirements.txt`
- `examples/models/core/phi/requirements.txt`
- `examples/models/core/qwen/requirements.txt`
- `examples/models/core/qwen2audio/requirements.txt`
- `examples/models/core/qwenvl/requirements.txt`
- `examples/models/core/recurrentgemma/requirements.txt`
- `examples/models/core/whisper/requirements.txt`
- `examples/ngram/requirements.txt`
- `examples/quantization/requirements.txt`
- `examples/ray_orchestrator/requirements.txt`
- `examples/redrafter/requirements.txt`
- `examples/scaffolding/contrib/Dynasor/requirements.txt`
- `examples/scaffolding/contrib/mcp/e2b/pyproject.toml`
- `examples/scaffolding/contrib/mcp/weather/pyproject.toml`
- `examples/scaffolding/contrib/mcp/weather/uv.lock`
- `examples/scaffolding/contrib/mcp/websearch/pyproject.toml`
- `examples/scaffolding/contrib/open_deep_research/TavilyMCP/pyproject.toml`
- `examples/scaffolding/contrib/open_deep_research/TavilyMCP/uv.lock`
- `examples/scaffolding/contrib/open_deep_research/WordLlama/pyproject.toml`
- `examples/serve/requirements.txt`
- `examples/trtllm-eval/requirements.txt`
- `pyproject.toml`
- `requirements.txt`
- `scripts/attribution/sbom/pyproject.toml`
- `scripts/attribution/sbom/uv.lock`
- `security_scanning/cpp/kernels/fmha_v2/poetry.lock`
- `security_scanning/cpp/kernels/fmha_v2/pyproject.toml`
- `security_scanning/docs/poetry.lock`
- `security_scanning/docs/pyproject.toml`
- `security_scanning/examples/apps/poetry.lock`
- `security_scanning/examples/apps/pyproject.toml`
- `security_scanning/examples/auto_deploy/poetry.lock`
- `security_scanning/examples/auto_deploy/pyproject.toml`
- `security_scanning/examples/draft_target_model/poetry.lock`
- `security_scanning/examples/draft_target_model/pyproject.toml`
- `security_scanning/examples/eagle/poetry.lock`
- `security_scanning/examples/eagle/pyproject.toml`
- `security_scanning/examples/llm-eval/lm-eval-harness/poetry.lock`
- `security_scanning/examples/llm-eval/lm-eval-harness/pyproject.toml`
- ... 20 more

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| examples/scaffolding/contrib/mcp/e2b/pyproject.toml | e2b | false | false | false | false |
| examples/scaffolding/contrib/mcp/weather/pyproject.toml | mcp | false | true | false | false |
| examples/scaffolding/contrib/mcp/websearch/pyproject.toml | websearch | false | false | false | false |
| examples/scaffolding/contrib/open_deep_research/TavilyMCP/pyproject.toml | TavilyMCP | false | false | false | false |
| examples/scaffolding/contrib/open_deep_research/WordLlama/pyproject.toml | wordllama-serve | false | false | false | false |
| pyproject.toml |  | false | false | true | false |
| scripts/attribution/sbom/pyproject.toml | trtllm-sbom | false | true | false | true |
| security_scanning/cpp/kernels/fmha_v2/pyproject.toml | unknown-package | false | false | false | false |
| security_scanning/docs/pyproject.toml | docs | false | false | false | false |
| security_scanning/examples/apps/pyproject.toml | apps-examples | false | false | false | false |
| security_scanning/examples/auto_deploy/pyproject.toml | auto-deploy-examples | false | false | false | false |
| security_scanning/examples/draft_target_model/pyproject.toml | draft-target-model-examples | false | false | false | false |
| security_scanning/examples/eagle/pyproject.toml | eagle-examples | false | false | false | false |
| security_scanning/examples/llm-eval/lm-eval-harness/pyproject.toml | unknown-package | false | false | false | false |
| security_scanning/examples/longbench/pyproject.toml | longbench-examples | false | false | false | false |
| security_scanning/examples/lookahead/pyproject.toml | lookahead-examples | false | false | false | false |
| security_scanning/examples/medusa/pyproject.toml | medusa-examples | false | false | false | false |
| security_scanning/examples/models/contrib/baichuan/pyproject.toml | unknown-package | false | false | false | false |
| security_scanning/examples/models/contrib/bloom/pyproject.toml | unknown-package | false | false | false | false |
| security_scanning/examples/models/contrib/chatglm-6b/pyproject.toml | unknown-package | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.claude/README.md`
- `3rdparty/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `benchmarks/README.md`
- `benchmarks/cpp/README.md`
- `cpp/kernels/fmha_v2/README.md`
- `cpp/kernels/fmha_v2/train_ops/README.md`
- `cpp/kernels/xqa/README.md`
- `cpp/micro_benchmarks/README.md`
- `cpp/tensorrt_llm/deep_ep/README.md`
- `cpp/tests/README.md`
- `docker/README.md`
- `docs/Doxygen`
- `docs/Makefile`
- `docs/README.md`
- `docs/make.bat`
- `docs/requirements.txt`
- `docs/source/_ext/trtllm_auto_deploy.py`
- `docs/source/_ext/trtllm_config_selector.py`
- `docs/source/_includes/note_sections.rst`
- `docs/source/_static/config_db.json`
- `docs/source/_static/config_selector.css`
- `docs/source/_static/config_selector.js`
- `docs/source/_static/custom.css`
- `docs/source/_static/switcher.json`
- `docs/source/_templates/footer.html`
- `docs/source/blogs/Best_perf_practice_on_DeepSeek-R1_in_TensorRT-LLM.md`
- `docs/source/blogs/Falcon180B-H200.md`
- `docs/source/blogs/H100vsA100.md`
- `docs/source/blogs/H200launch.md`
- `docs/source/blogs/XQA-kernel.md`
- `docs/source/blogs/media/Falcon180B-H200_DecvOct.png`
- `docs/source/blogs/media/Falcon180B-H200_H200vA100.png`
- `docs/source/blogs/media/Falcon180B-H200_acc.png`
- `docs/source/blogs/media/Falcon180B-H200_tps.png`
- `docs/source/blogs/media/H200launch_H200vsH100_tps.png`
- `docs/source/blogs/media/H200launch_tps.png`
- `docs/source/blogs/media/TRT_LLM_v0-5-0_H100vA100_1st.png`
- `docs/source/blogs/media/TRT_LLM_v0-5-0_H100vA100_tps.png`
- `docs/source/blogs/media/XQA_ThroughputvsLatency.png`
- `docs/source/blogs/media/moe_structure.png`
- `docs/source/blogs/media/tech_blog10_baseline_performance_detail.png`
- `docs/source/blogs/media/tech_blog10_baseline_performance_overview.png`
- `docs/source/blogs/media/tech_blog10_baseline_round_robin_strategy.png`
- `docs/source/blogs/media/tech_blog10_context_wait_performance.png`
- `docs/source/blogs/media/tech_blog10_dataset_token_distribution.png`
- `docs/source/blogs/media/tech_blog10_full_strategy_performance.png`
- `docs/source/blogs/media/tech_blog10_tps_ttft_pareto_curve.png`
- `docs/source/blogs/media/tech_blog12_constrained_decoding_pipeline_overlap.png`
- ... 30 more

### 에이전트 지침 후보

- `.claude/README.md`
- `.claude/agent-tests/perf-test-sync/build_prompt.py`
- `.claude/agent-tests/perf-test-sync/promptfooconfig.yaml`
- `.claude/agent-tests/perf-test-sync/render_report.py`
- `.claude/agent-tests/perf-test-sync/run.sh`
- `.claude/agents/ad-conf-check-update.md`
- `.claude/agents/ad-debug-agent.md`
- `.claude/agents/ad-onboard-reviewer.md`
- `.claude/agents/ad-run-agent.md`
- `.claude/agents/exec-compile-specialist.md`
- `.claude/agents/kernel-cuda-specialist.md`
- `.claude/agents/kernel-cute-specialist.md`
- `.claude/agents/kernel-tileir-specialist.md`
- `.claude/agents/kernel-triton-specialist.md`
- `.claude/agents/perf-profiling-specialist.md`
- `.claude/agents/perf-test-sync.md`
- `.claude/agents/perf-torch-cuda-graph-specialist.md`
- `.claude/skills/ad-accuracy-debug/SKILL.md`
- `.claude/skills/ad-add-fusion-transformation/SKILL.md`
- `.claude/skills/ad-conf-check/SKILL.md`
- `.claude/skills/ad-conf-check/references/config_log_patterns.md`
- `.claude/skills/ad-conf-check/references/graph_verification_patterns.md`
- `.claude/skills/ad-conf-check/scripts/parse_config.py`
- `.claude/skills/ad-graph-dump/SKILL.md`
- `.claude/skills/ad-layer-visualizer/SKILL.md`
- `.claude/skills/ad-layer-visualizer/scripts/extract_trace_kernels.py`
- `.claude/skills/ad-layer-visualizer/scripts/render_layer.py`
- `.claude/skills/ad-model-onboard/SKILL.md`
- `.claude/skills/ad-sharding-ir-port/SKILL.md`
- `.claude/skills/exec-local-compile/SKILL.md`
- `.claude/skills/exec-slurm-compile/SKILL.md`
- `.claude/skills/exec-slurm-compile/scripts/compile.sh`
- `.claude/skills/exec-slurm-compile/scripts/compile.slurm`
- `.claude/skills/exec-slurm-compile/scripts/enroot-import`
- `.claude/skills/exec-slurm-compile/scripts/submit_compile.sh`
- `.claude/skills/kernel-cute-writing/SKILL.md`
- `.claude/skills/kernel-cute-writing/references/api-arch.md`
- `.claude/skills/kernel-cute-writing/references/api-core.md`
- `.claude/skills/kernel-cute-writing/references/api-nvgpu.md`
- `.claude/skills/kernel-cute-writing/references/api-runtime-utils.md`
- `.claude/skills/kernel-cute-writing/references/concepts-architecture.md`
- `.claude/skills/kernel-cute-writing/references/concepts-layouts.md`
- `.claude/skills/kernel-cute-writing/references/concepts-mma.md`
- `.claude/skills/kernel-cute-writing/references/concepts-tensors.md`
- `.claude/skills/kernel-cute-writing/references/patterns-compilation.md`
- `.claude/skills/kernel-cute-writing/references/patterns-elementwise.md`
- `.claude/skills/kernel-cute-writing/references/patterns-gemm.md`
- `.claude/skills/kernel-cute-writing/references/patterns-getting-started.md`
- `.claude/skills/kernel-cute-writing/references/patterns-memory.md`
- `.claude/skills/kernel-cute-writing/references/patterns-pipeline.md`
- `.claude/skills/kernel-cute-writing/references/patterns-reduction.md`
- `.claude/skills/kernel-cute-writing/references/troubleshooting.md`
- `.claude/skills/kernel-cute-writing/scripts/__init__.py`
- `.claude/skills/kernel-cute-writing/scripts/benchmark_kernel.py`
- `.claude/skills/kernel-cute-writing/scripts/verify_kernel.py`
- `.claude/skills/kernel-tileir-optimization/SKILL.md`
- `.claude/skills/kernel-tileir-optimization/references/config-templates.md`
- `.claude/skills/kernel-tileir-optimization/references/tma-conversion.md`
- `.claude/skills/kernel-tileir-optimization/scripts/classify_kernel.py`
- `.claude/skills/kernel-tileir-optimization/scripts/tileir_check.py`
- `.claude/skills/kernel-triton-writing/SKILL.md`
- `.claude/skills/kernel-triton-writing/references/api-core.md`
- `.claude/skills/kernel-triton-writing/references/api-language.md`
- `.claude/skills/kernel-triton-writing/references/concepts-semantics.md`
- `.claude/skills/kernel-triton-writing/references/operator-routing.md`
- `.claude/skills/kernel-triton-writing/references/patterns-advanced.md`
- `.claude/skills/kernel-triton-writing/references/patterns-basic.md`
- `.claude/skills/kernel-triton-writing/references/patterns-fusion.md`
- `.claude/skills/kernel-triton-writing/references/patterns-gemm.md`
- `.claude/skills/kernel-triton-writing/references/troubleshooting.md`
- `.claude/skills/kernel-triton-writing/scripts/__init__.py`
- `.claude/skills/kernel-triton-writing/scripts/benchmark_kernel.py`
- `.claude/skills/kernel-triton-writing/scripts/verify_kernel.py`
- `.claude/skills/perf-analysis/SKILL.md`
- `.claude/skills/perf-host-analysis/SKILL.md`
- `.claude/skills/perf-host-analysis/references/examples.md`
- `.claude/skills/perf-host-analysis/references/iteration-isolation-techniques.md`
- `.claude/skills/perf-host-analysis/references/kernel-level-analysis.md`
- `.claude/skills/perf-host-analysis/references/metrics.md`
- `.claude/skills/perf-host-analysis/references/nsys-schema.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.claude/skills/ad-accuracy-debug/SKILL.md`
- `.claude/skills/ad-add-fusion-transformation/SKILL.md`
- `.claude/skills/ad-conf-check/SKILL.md`
- `.claude/skills/ad-conf-check/references/config_log_patterns.md`
- `.claude/skills/ad-conf-check/references/graph_verification_patterns.md`
- `.claude/skills/ad-conf-check/scripts/parse_config.py`
- `.claude/skills/ad-graph-dump/SKILL.md`
- `.claude/skills/ad-layer-visualizer/SKILL.md`
- `.claude/skills/ad-layer-visualizer/scripts/extract_trace_kernels.py`
- `.claude/skills/ad-layer-visualizer/scripts/render_layer.py`
- `.claude/skills/ad-model-onboard/SKILL.md`
- `.claude/skills/ad-sharding-ir-port/SKILL.md`
- `.claude/skills/exec-local-compile/SKILL.md`
- `.claude/skills/exec-slurm-compile/SKILL.md`
- `.claude/skills/exec-slurm-compile/scripts/compile.sh`
- `.claude/skills/exec-slurm-compile/scripts/compile.slurm`
- `.claude/skills/exec-slurm-compile/scripts/enroot-import`
- `.claude/skills/exec-slurm-compile/scripts/submit_compile.sh`
- `.claude/skills/kernel-cute-writing/SKILL.md`
- `.claude/skills/kernel-cute-writing/references/api-arch.md`
- `.claude/skills/kernel-cute-writing/references/api-core.md`
- `.claude/skills/kernel-cute-writing/references/api-nvgpu.md`
- `.claude/skills/kernel-cute-writing/references/api-runtime-utils.md`
- `.claude/skills/kernel-cute-writing/references/concepts-architecture.md`
- `.claude/skills/kernel-cute-writing/references/concepts-layouts.md`
- `.claude/skills/kernel-cute-writing/references/concepts-mma.md`
- `.claude/skills/kernel-cute-writing/references/concepts-tensors.md`
- `.claude/skills/kernel-cute-writing/references/patterns-compilation.md`
- `.claude/skills/kernel-cute-writing/references/patterns-elementwise.md`
- `.claude/skills/kernel-cute-writing/references/patterns-gemm.md`
- `.claude/skills/kernel-cute-writing/references/patterns-getting-started.md`
- `.claude/skills/kernel-cute-writing/references/patterns-memory.md`
- `.claude/skills/kernel-cute-writing/references/patterns-pipeline.md`
- `.claude/skills/kernel-cute-writing/references/patterns-reduction.md`
- `.claude/skills/kernel-cute-writing/references/troubleshooting.md`
- `.claude/skills/kernel-cute-writing/scripts/__init__.py`
- `.claude/skills/kernel-cute-writing/scripts/benchmark_kernel.py`
- `.claude/skills/kernel-cute-writing/scripts/verify_kernel.py`
- `.claude/skills/kernel-tileir-optimization/SKILL.md`
- `.claude/skills/kernel-tileir-optimization/references/config-templates.md`
- `.claude/skills/kernel-tileir-optimization/references/tma-conversion.md`
- `.claude/skills/kernel-tileir-optimization/scripts/classify_kernel.py`
- `.claude/skills/kernel-tileir-optimization/scripts/tileir_check.py`
- `.claude/skills/kernel-triton-writing/SKILL.md`
- `.claude/skills/kernel-triton-writing/references/api-core.md`
- `.claude/skills/kernel-triton-writing/references/api-language.md`
- `.claude/skills/kernel-triton-writing/references/concepts-semantics.md`
- `.claude/skills/kernel-triton-writing/references/operator-routing.md`
- `.claude/skills/kernel-triton-writing/references/patterns-advanced.md`
- `.claude/skills/kernel-triton-writing/references/patterns-basic.md`
- `.claude/skills/kernel-triton-writing/references/patterns-fusion.md`
- `.claude/skills/kernel-triton-writing/references/patterns-gemm.md`
- `.claude/skills/kernel-triton-writing/references/troubleshooting.md`
- `.claude/skills/kernel-triton-writing/scripts/__init__.py`
- `.claude/skills/kernel-triton-writing/scripts/benchmark_kernel.py`
- `.claude/skills/kernel-triton-writing/scripts/verify_kernel.py`
- `.claude/skills/perf-analysis/SKILL.md`
- `.claude/skills/perf-host-analysis/SKILL.md`
- `.claude/skills/perf-host-analysis/references/examples.md`
- `.claude/skills/perf-host-analysis/references/iteration-isolation-techniques.md`
- `.claude/skills/perf-host-analysis/references/kernel-level-analysis.md`
- `.claude/skills/perf-host-analysis/references/metrics.md`
- `.claude/skills/perf-host-analysis/references/nsys-schema.md`
- `.claude/skills/perf-host-analysis/references/output-format.md`
- `.claude/skills/perf-host-analysis/references/phase-classification.md`
- `.claude/skills/perf-host-analysis/references/thresholds.md`
- `.claude/skills/perf-host-analysis/references/trtllm-nvtx-ranges.md`
- `.claude/skills/perf-host-analysis/scripts/analyze_host_overhead.py`
- `.claude/skills/perf-host-analysis/scripts/detect_host_overhead.py`
- `.claude/skills/perf-host-optimization/SKILL.md`
- `.claude/skills/perf-host-optimization/references/communication-patterns.md`
- `.claude/skills/perf-host-optimization/references/examples.md`
- `.claude/skills/perf-host-optimization/references/hot-path-files.md`
- `.claude/skills/perf-host-optimization/references/hotspot-classification.md`
- `.claude/skills/perf-host-optimization/references/optimization-patterns.md`
- `.claude/skills/perf-host-optimization/references/optimization-strategy.md`
- `.claude/skills/perf-host-optimization/references/patterns/compound-pitfalls.md`
- `.claude/skills/perf-host-optimization/references/patterns/gpu-graph.md`
- `.claude/skills/perf-host-optimization/references/patterns/loop-iteration.md`
- `.claude/skills/perf-host-optimization/references/patterns/python-overhead.md`
- `.claude/skills/perf-host-optimization/references/patterns/sync-alloc.md`
- `.claude/skills/perf-host-optimization/references/patterns/system.md`
- `.claude/skills/perf-nsight-compute-analysis/SKILL.md`
- `.claude/skills/perf-nsight-compute-analysis/references/advanced-profiling.md`
- `.claude/skills/perf-nsight-compute-analysis/references/bottleneck-guide.md`
- `.claude/skills/perf-nsight-compute-analysis/references/cli-reference.md`
- `.claude/skills/perf-nsight-compute-analysis/references/memory-analysis.md`
- `.claude/skills/perf-nsight-compute-analysis/references/metrics-guide.md`
- `.claude/skills/perf-nsight-compute-analysis/references/python-report-api.md`
- `.claude/skills/perf-nsight-compute-analysis/references/roofline-analysis.md`
- `.claude/skills/perf-nsight-compute-analysis/references/sections-guide.md`
- `.claude/skills/perf-nsight-systems/SKILL.md`
- `.claude/skills/perf-nsight-systems/references/app-preparation.md`
- `.claude/skills/perf-nsight-systems/references/cli-post-collection.md`
- `.claude/skills/perf-nsight-systems/references/cli-profiling.md`
- `.claude/skills/perf-nsight-systems/references/expert-systems.md`
- `.claude/skills/perf-nsight-systems/references/nvtx-analysis.md`
- `.claude/skills/perf-nsight-systems/references/recipes-dl.md`
- `.claude/skills/perf-nsight-systems/references/stats-reports.md`
- `.claude/skills/perf-optimization/SKILL.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `cpp/kernels/fmha_v2/test/conftest.py`
- `cpp/kernels/fmha_v2/test/fmha/filter_rules.py`
- `cpp/kernels/fmha_v2/test/fmha/test_fmha_exe.py`
- `cpp/kernels/fmha_v2/test/fmha/test_fmhca_exe.py`
- `cpp/kernels/fmha_v2/test/fmha/test_meta.py`
- `cpp/kernels/fmha_v2/test/fmha/utils.py`
- `cpp/kernels/fmha_v2/test/train_ops/test_train_ops.py`
- `cpp/kernels/fmha_v2/test/unit/arch/test_fmha_v1_nl_sm70.cu`
- `cpp/kernels/fmha_v2/test/unit/arch/test_fmha_v2_flash_nl_sm80.cu`
- `cpp/kernels/fmha_v2/test/unit/test_bar.cu`
- `cpp/kernels/fmha_v2/test/unit/test_foo.cu`
- `cpp/kernels/xqa/test/refAttention.cpp`
- `cpp/kernels/xqa/test/refAttention.h`
- `cpp/kernels/xqa/test/test.cpp`
- `cpp/kernels/xqa/test/warmup.cu`
- `cpp/tests/CMakeLists.txt`
- `cpp/tests/README.md`
- `cpp/tests/e2e_tests/CMakeLists.txt`
- `cpp/tests/e2e_tests/batch_manager/CMakeLists.txt`
- `cpp/tests/e2e_tests/batch_manager/guidedDecoderTest.cpp`
- `cpp/tests/e2e_tests/batch_manager/trtEncoderModelTest.cpp`
- `cpp/tests/e2e_tests/batch_manager/trtGptModelRealDecoderTest.cpp`
- `cpp/tests/e2e_tests/batch_manager/trtGptModelTest.cpp`
- `cpp/tests/e2e_tests/executor/CMakeLists.txt`
- `cpp/tests/e2e_tests/executor/disaggExecutor.h`
- `cpp/tests/e2e_tests/executor/disaggExecutorTest.cpp`
- `cpp/tests/e2e_tests/executor/encDecTest.cpp`
- `cpp/tests/e2e_tests/executor/executorMockTest.cpp`
- `cpp/tests/e2e_tests/executor/executorTest.cpp`
- `cpp/tests/e2e_tests/executor/executorTest.h`
- `cpp/tests/resources/.gitignore`
- `cpp/tests/resources/data/input_tokens.npy`
- `cpp/tests/resources/data/input_tokens_chatglm-6b.npy`
- `cpp/tests/resources/data/input_tokens_chatglm2-6b.npy`
- `cpp/tests/resources/data/input_tokens_chatglm3-6b.npy`
- `cpp/tests/resources/data/input_tokens_glm-10b.npy`
- `cpp/tests/resources/data/input_tokens_llama.npy`
- `cpp/tests/resources/data/input_tokens_long.npy`
- `cpp/tests/resources/data/input_vicuna.npy`
- `cpp/tests/resources/data/test_model_lora_config.json`
- `cpp/tests/resources/models/mnist.onnx`
- `cpp/tests/resources/scripts/build_chatglm_engines.py`
- `cpp/tests/resources/scripts/build_eagle_engines.py`
- `cpp/tests/resources/scripts/build_enc_dec_engines.py`
- `cpp/tests/resources/scripts/build_engines_utils.py`
- `cpp/tests/resources/scripts/build_gpt_engines.py`
- `cpp/tests/resources/scripts/build_gptj_engines.py`
- `cpp/tests/resources/scripts/build_llama_engines.py`
- `cpp/tests/resources/scripts/build_mamba_engines.py`
- `cpp/tests/resources/scripts/build_medusa_engines.py`
- `cpp/tests/resources/scripts/build_recurrentgemma_engines.py`
- `cpp/tests/resources/scripts/build_redrafter_engines.py`
- `cpp/tests/resources/scripts/generate_expected_chatglm_output.py`
- `cpp/tests/resources/scripts/generate_expected_eagle_output.py`
- `cpp/tests/resources/scripts/generate_expected_enc_dec_output.py`
- `cpp/tests/resources/scripts/generate_expected_gpt_output.py`
- `cpp/tests/resources/scripts/generate_expected_gptj_output.py`
- `cpp/tests/resources/scripts/generate_expected_llama_output.py`
- `cpp/tests/resources/scripts/generate_expected_mamba_output.py`
- `cpp/tests/resources/scripts/generate_expected_medusa_output.py`
- `cpp/tests/resources/scripts/generate_expected_recurrentgemma_output.py`
- `cpp/tests/resources/scripts/generate_expected_redrafter_output.py`
- `cpp/tests/resources/scripts/generate_hf_gpt_output.py`
- `cpp/tests/resources/scripts/generate_test_lora_weights.py`
- `cpp/tests/resources/scripts/io_converter.py`
- `cpp/tests/unit_tests/CMakeLists.txt`
- `cpp/tests/unit_tests/batch_manager/CMakeLists.txt`
- `cpp/tests/unit_tests/batch_manager/agentTreeTest.cpp`
- `cpp/tests/unit_tests/batch_manager/blockKeyTest.cpp`
- `cpp/tests/unit_tests/batch_manager/bufferIndexHolderTest.cpp`
- `cpp/tests/unit_tests/batch_manager/cacheTransBufferTest.cpp`
- `cpp/tests/unit_tests/batch_manager/capacitySchedulerTest.cpp`
- `cpp/tests/unit_tests/batch_manager/contextProgressTest.cu`
- `cpp/tests/unit_tests/batch_manager/cudaGraphExecutorCacheTest.cpp`
- `cpp/tests/unit_tests/batch_manager/evictionPolicyTest.cpp`
- `cpp/tests/unit_tests/batch_manager/kvCacheManagerTest.cpp`
- `cpp/tests/unit_tests/batch_manager/kvCacheUtilsTest.cpp`
- `cpp/tests/unit_tests/batch_manager/llmRequestTest.cpp`
- `cpp/tests/unit_tests/batch_manager/microBatchSchedulerTest.cpp`
- `cpp/tests/unit_tests/batch_manager/peftCacheManagerTest.cpp`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/docker-compose.override-example.yml`
- `.devcontainer/docker-compose.yml`
- `.github/workflows/auto-assign-author.yml`
- `.github/workflows/auto-assign.yml`
- `.github/workflows/auto-close-inactive-issues.yml`
- `.github/workflows/blossom-ci.yml`
- `.github/workflows/bot-command.yml`
- `.github/workflows/l0-test.yml`
- `.github/workflows/label_community_pr.yml`
- `.github/workflows/label_issue.yml`
- `.github/workflows/lfs-sync.yml`
- `.github/workflows/llm-api-compatibility.yml`
- `.github/workflows/module-owners.json`
- `.github/workflows/pr-base-freshness.yml`
- `.github/workflows/pr-check.yml`
- `.github/workflows/precommit-check.yml`
- `.github/workflows/waiting_for_feedback.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .zst | 3781 |
| .py | 2776 |
| .h | 777 |
| .yaml | 659 |
| .cpp | 501 |
| .md | 454 |
| .cu | 339 |
| .txt | 191 |
| .png | 179 |
| .yml | 109 |
| .sh | 76 |
| .toml | 71 |
| .cuh | 64 |
| .so | 64 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `cpp/ 내부 책임 분리`
- `.claude/skills/ad-accuracy-debug/SKILL.md 스펙/명령 의미`
- `.claude/skills/ad-add-fusion-transformation/SKILL.md 스펙/명령 의미`
- `.claude/skills/ad-conf-check/SKILL.md 스펙/명령 의미`
- `.claude/skills/ad-conf-check/references/config_log_patterns.md 스펙/명령 의미`
- `.claude/skills/ad-conf-check/references/graph_verification_patterns.md 스펙/명령 의미`
- `.devcontainer/docker-compose.yml 실행 스크립트와 패키지 경계`
- `cpp/kernels/fmha_v2/requirements.txt 실행 스크립트와 패키지 경계`
- `docs/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/apps/requirements.txt 실행 스크립트와 패키지 경계`
- `examples/auto_deploy/requirements.txt 실행 스크립트와 패키지 경계`

