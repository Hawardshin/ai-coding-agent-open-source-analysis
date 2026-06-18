# PaddlePaddle/FastDeploy

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/PaddlePaddle/FastDeploy |
| local path | sources/PaddlePaddle__FastDeploy |
| HEAD | 6076add |
| stars/forks | 3698 / 752 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T08:48:22Z |
| trendScore / priorityScore | 140 / 430 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Observability / evaluation | 306 | docs/cli/README.md, docs/observability/README.md, docs/zh/observability/README.md |
| Data / ML platform | 300 | docs/cli/README.md, docs/zh/cli/README.md, benchmarks/README.md |
| Cloud native / infrastructure | 168 | docs/observability/README.md, docs/zh/observability/README.md, tests/xpu_ci/README.md |
| Local LLM / inference | 51 | docs/benchmark.md, examples/intel_hpu/intel_hpu_serving_benchmark.md, docs/zh/benchmark.md |
| Database / data infrastructure | 46 | examples/cache_storage/README.md, .github/copilot-instructions.md, examples/cache_storage/ha_redis_mooncake_config.json |
| Security / supply chain | 43 | .github/copilot-instructions.md, examples/intel_hpu/benchmark_paddle_hpu_cli_sharegpt.sh, examples/intel_hpu/benchmark_paddle_hpu_cli.sh |
| Developer tools / DX | 39 | docs/cli/README.md, docs/zh/cli/README.md, docs/observability/README.md |
| AI agent / orchestration | 32 | benchmarks/README.md, docs/online_serving/README.md, docs/zh/online_serving/README.md |
| Coding agent / software automation | 8 | .claude/skills/benchmark-compare/README.md, fastdeploy/cache_manager/transfer_factory/kvcache_transfer/README.md, examples/cache_storage/utils.sh |
| Frontend / app framework | 2 | docs/online_serving/README.md, docs/zh/online_serving/README.md |
| RAG / retrieval / knowledge | 2 | docs/parameters.md, tests/e2e/4cards_cases/test_vocab_parallel_embedding_deterministic_launch.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, security, securityTooling |
| stacks | Python, Go, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2422 |
| manifests | 34 |
| docs | 196 |
| tests | 636 |
| ci/ops | 47 |
| spec artifacts | 33 |
| agent instruction files | 27 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| benchmarks/README.md | 安装依赖 | FastDeploy服务化性能压测工具 / 安装依赖 / 保存infer_log.txt / 保存infer_log.txt / 投机解码性能测试工具 / 指定输入输出长度，构造随机纯文输入测试 | FastDeploy服务化性能压测工具 数据集： wget下载到本地用于性能测试 <table style="width 100%; border collapse collapse;" <thead <tr <th style="width 15%; text align left;" Dataset</th <th style="width 65%; text align left;" Data Path</th </tr </thead <tbody <tr <td <strong 开源数据集 2k条</strong </td <td <code https //fastdeploy.bj.bcebos.com/eb query/filtered sharedgpt 2000 input 1136 output 200 fd.json</code </td </tr </tbody </table 使用方式： 参数说明 多轮对话使用prompt token ids模式请求 /v1/chat/completions接口压测单条数据调试 /v1/chat/completions接口完整100并发 2000条压测 /v1/completions接口压测 修改endpoint为/v1/completions，backend为openai，会对/v1/completions接口进行压测 投机解码性能测试工具 使用方式： 参数说明 指定输入输出长度，构造随机纯文输入测试 相关参数： dataset name：指定数据集类，指定为"random"可构造随机纯文输入 random inp |


## Key Files

### Manifests

- examples/cache_storage/README.md
- docs/cli/README.md
- docs/zh/cli/README.md
- examples/splitwise/README.md
- benchmarks/README.md
- docs/best_practices/README.md
- docs/get_started/installation/README.md
- docs/get_started/README.md
- docs/observability/README.md
- docs/online_serving/README.md
- docs/quantization/README.md
- docs/zh/best_practices/README.md
- docs/zh/get_started/installation/README.md
- docs/zh/get_started/README.md
- docs/zh/observability/README.md
- docs/zh/online_serving/README.md
- docs/zh/quantization/README.md
- .claude/skills/benchmark-compare/README.md
- benchmarks/paddleocr_vl/README.md
- .claude/skills/write-fastdeploy-unittest/README.md


### Spec / Docs / Prompt Artifacts

- .claude/skills/benchmark-compare/README.md
- .claude/skills/write-fastdeploy-unittest/README.md
- .claude/skills/nsys-capture/README.md
- docs/requirements.txt
- benchmarks/requirements.txt
- .github/copilot-instructions.md
- docs/benchmark.md
- requirements.txt
- tests/ci_validation/server/requirements.txt
- docs/zh/benchmark.md
- .claude/skills/benchmark-compare/references/html_template.md
- .claude/skills/benchmark-compare/references/model_profiles.md
- .claude/skills/benchmark-compare/scripts/extract_metrics.py
- .claude/skills/benchmark-compare/scripts/generate_report.py
- .claude/skills/benchmark-compare/scripts/health_check.sh
- .claude/skills/benchmark-compare/scripts/launch_service.sh
- .claude/skills/benchmark-compare/scripts/run_benchmark.sh
- .claude/skills/benchmark-compare/SKILL.md
- .claude/skills/fastdeploy-llm-integration/references/architecture_guide.md
- .claude/skills/fastdeploy-llm-integration/references/doc_template.md


### Agent Instruction Files

- .claude/skills/benchmark-compare/README.md
- .claude/skills/write-fastdeploy-unittest/README.md
- .claude/skills/nsys-capture/README.md
- .github/copilot-instructions.md
- .claude/skills/benchmark-compare/references/html_template.md
- .claude/skills/benchmark-compare/references/model_profiles.md
- .claude/skills/benchmark-compare/scripts/extract_metrics.py
- .claude/skills/benchmark-compare/scripts/generate_report.py
- .claude/skills/benchmark-compare/scripts/health_check.sh
- .claude/skills/benchmark-compare/scripts/launch_service.sh
- .claude/skills/benchmark-compare/scripts/run_benchmark.sh
- .claude/skills/benchmark-compare/SKILL.md
- .claude/skills/fastdeploy-llm-integration/references/architecture_guide.md
- .claude/skills/fastdeploy-llm-integration/references/doc_template.md
- .claude/skills/fastdeploy-llm-integration/references/model_templates.md


## Top Directories

| dir | count |
| --- | --- |
| custom_ops | 808 |
| fastdeploy | 587 |
| tests | 557 |
| docs | 165 |
| benchmarks | 135 |
| .github | 45 |
| examples | 41 |
| scripts | 31 |
| .claude | 26 |
| tools | 8 |
| dockerfiles | 2 |
| .clang-format | 1 |
| .flake8 | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1165 |
| .cu | 199 |
| .h | 193 |
| .md | 193 |
| .yaml | 139 |
| .cc | 123 |
| .cuh | 65 |
| .sh | 62 |
| .xpu | 60 |
| .cpp | 56 |
| .yml | 44 |
| .go | 38 |
| .hpp | 35 |
| .txt | 18 |
| [no-ext] | 8 |
| .json | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
