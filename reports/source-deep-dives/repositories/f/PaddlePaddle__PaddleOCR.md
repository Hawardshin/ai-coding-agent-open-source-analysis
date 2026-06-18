# PaddlePaddle/PaddleOCR Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges the gap between images/PDFs and LLMs. Supports 100+ languages.

## 요약

- 조사 단위: `sources/PaddlePaddle__PaddleOCR` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,488 files, 512 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=test_tipc/web/index.html, test_tipc/web/index.test.js, ppocr/modeling/heads/local_graph.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | PaddlePaddle/PaddleOCR |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 82807 |
| Forks | 10814 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/PaddlePaddle__PaddleOCR](../../../../sources/PaddlePaddle__PaddleOCR) |
| Existing report | [reports/llm-wiki/repositories/PaddlePaddle__PaddleOCR.md](../../../llm-wiki/repositories/PaddlePaddle__PaddleOCR.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2488 / 512 |
| Max observed depth | 13 |
| Top directories | .github, api_sdk, applications, benchmark, configs, deploy, doc, docs, langchain-paddleocr, mcp_server, overrides, paddleocr, paddleocr-js, ppocr, ppstructure, readme, skills, test_tipc, tests, tools |
| Top extensions | .py: 593, .md: 473, .txt: 306, .yml: 193, .jpg: 170, .png: 162, .ts: 90, .h: 60, .sh: 47, .yaml: 46, .cc: 43, .kt: 39 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 41 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| api_sdk | source boundary | 1 |
| applications | top-level component | 1 |
| benchmark | validation surface | 1 |
| configs | top-level component | 1 |
| deploy | deployment surface | 1 |
| doc | documentation surface | 1 |
| langchain-paddleocr | top-level component | 1 |
| mcp_server | source boundary | 1 |
| overrides | top-level component | 1 |
| paddleocr | top-level component | 1 |
| paddleocr-js | top-level component | 1 |
| ppocr | top-level component | 1 |
| ppstructure | top-level component | 1 |
| readme | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | paddleocr | paddleocr |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [test_tipc/web/index.html](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/web/index.html) | retrieval signal |
| retrieval | [test_tipc/web/index.test.js](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/web/index.test.js) | retrieval signal |
| retrieval | [ppocr/modeling/heads/local_graph.py](../../../../sources/PaddlePaddle__PaddleOCR/ppocr/modeling/heads/local_graph.py) | retrieval signal |
| retrieval | [ppocr/modeling/heads/proposal_local_graph.py](../../../../sources/PaddlePaddle__PaddleOCR/ppocr/modeling/heads/proposal_local_graph.py) | retrieval signal |
| entrypoints | [paddleocr-js/packages/core/src/index.ts](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/packages/core/src/index.ts) | entrypoints signal |
| entrypoints | [paddleocr-js/apps/demo/src/main.ts](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/apps/demo/src/main.ts) | entrypoints signal |
| entrypoints | [paddleocr/__main__.py](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr/__main__.py) | entrypoints signal |
| entrypoints | [mcp_server/paddleocr_mcp/__main__.py](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/paddleocr_mcp/__main__.py) | entrypoints signal |
| docs | [mkdocs-ci.yml](../../../../sources/PaddlePaddle__PaddleOCR/mkdocs-ci.yml) | docs signal |
| docs | [mkdocs.yml](../../../../sources/PaddlePaddle__PaddleOCR/mkdocs.yml) | docs signal |
| docs | [README.md](../../../../sources/PaddlePaddle__PaddleOCR/README.md) | docs signal |
| docs | [tools/end2end/readme.md](../../../../sources/PaddlePaddle__PaddleOCR/tools/end2end/readme.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [paddleocr-js/packages/core/src/index.ts](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/packages/core/src/index.ts)<br>[paddleocr-js/apps/demo/src/main.ts](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/apps/demo/src/main.ts)<br>[paddleocr/__main__.py](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr/__main__.py)<br>[mcp_server/paddleocr_mcp/__main__.py](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/paddleocr_mcp/__main__.py)<br>[api_sdk/typescript/src/index.ts](../../../../sources/PaddlePaddle__PaddleOCR/api_sdk/typescript/src/index.ts)<br>[api_sdk/go/examples/ocr_url/main.go](../../../../sources/PaddlePaddle__PaddleOCR/api_sdk/go/examples/ocr_url/main.go)<br>[api_sdk/go/examples/doc_parsing_file/main.go](../../../../sources/PaddlePaddle__PaddleOCR/api_sdk/go/examples/doc_parsing_file/main.go) |
| agentRuntime | 50 | [tools/__init__.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/__init__.py)<br>[tools/check_docs_github_links.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/check_docs_github_links.py)<br>[tools/eval.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/eval.py)<br>[tools/export_center.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/export_center.py)<br>[tools/export_model.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/export_model.py)<br>[tools/infer_cls.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/infer_cls.py)<br>[tools/infer_det.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/infer_det.py)<br>[tools/infer_e2e.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/infer_e2e.py) |
| mcp | 45 | [mcp_server/pyproject.toml](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/pyproject.toml)<br>[mcp_server/README_en.md](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/README_en.md)<br>[mcp_server/README.md](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/README.md)<br>[mcp_server/paddleocr_mcp/__init__.py](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/paddleocr_mcp/__init__.py)<br>[mcp_server/paddleocr_mcp/__main__.py](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/paddleocr_mcp/__main__.py)<br>[mcp_server/paddleocr_mcp/providers.py](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/paddleocr_mcp/providers.py)<br>[mcp_server/paddleocr_mcp/py.typed](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/paddleocr_mcp/py.typed)<br>[mcp_server/paddleocr_mcp/selection.py](../../../../sources/PaddlePaddle__PaddleOCR/mcp_server/paddleocr_mcp/selection.py) |
| retrieval | 31 | [test_tipc/web/index.html](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/web/index.html)<br>[test_tipc/web/index.test.js](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/web/index.test.js)<br>[ppocr/modeling/heads/local_graph.py](../../../../sources/PaddlePaddle__PaddleOCR/ppocr/modeling/heads/local_graph.py)<br>[ppocr/modeling/heads/proposal_local_graph.py](../../../../sources/PaddlePaddle__PaddleOCR/ppocr/modeling/heads/proposal_local_graph.py)<br>[ppocr/data/imaug/vqa/token/vqa_token_chunk.py](../../../../sources/PaddlePaddle__PaddleOCR/ppocr/data/imaug/vqa/token/vqa_token_chunk.py)<br>[paddleocr-js/packages/core/test/pipelines-index.test.ts](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/packages/core/test/pipelines-index.test.ts)<br>[paddleocr-js/packages/core/src/index.ts](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/packages/core/src/index.ts)<br>[paddleocr-js/packages/core/src/viz/index.ts](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/packages/core/src/viz/index.ts) |
| spec | 15 | [requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/requirements.txt)<br>[test_tipc/supplementary/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/supplementary/requirements.txt)<br>[ppstructure/recovery/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/ppstructure/recovery/requirements.txt)<br>[ppstructure/kie/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/ppstructure/kie/requirements.txt)<br>[paddleocr-js/docs/architecture_cn.md](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/docs/architecture_cn.md)<br>[paddleocr-js/docs/architecture.md](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/docs/architecture.md)<br>[docs/version2.x/algorithm/formula_recognition/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/docs/version2.x/algorithm/formula_recognition/requirements.txt)<br>[deploy/paddleocr_vl_docker/hps/gateway/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/deploy/paddleocr_vl_docker/hps/gateway/requirements.txt) |
| eval | 548 | [TEST_REPORT.md](../../../../sources/PaddlePaddle__PaddleOCR/TEST_REPORT.md)<br>[tools/eval.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/eval.py)<br>[tools/test_hubserving.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/test_hubserving.py)<br>[tools/end2end/eval_end2end.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/end2end/eval_end2end.py)<br>[tests/__init__.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/conftest.py)<br>[tests/test_ppstructure.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/test_ppstructure.py)<br>[tests/testing_utils.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/testing_utils.py) |
| security | 2 | [tests/security/test_latexocr_pickle.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/security/test_latexocr_pickle.py)<br>[tests/security/test_lmdb_pickle.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/security/test_lmdb_pickle.py) |
| ci | 9 | [.github/workflows/build_publish_develop_docs.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/build_publish_develop_docs.yml)<br>[.github/workflows/build_publish_release_docs.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/build_publish_release_docs.yml)<br>[.github/workflows/close_inactive_issues.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/close_inactive_issues.yml)<br>[.github/workflows/codestyle.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/codestyle.yml)<br>[.github/workflows/docs_anchor_check.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/docs_anchor_check.yml)<br>[.github/workflows/link_check.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/link_check.yml)<br>[.github/workflows/python_publish.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/python_publish.yml)<br>[.github/workflows/test_gpu.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/test_gpu.yml) |
| container | 456 | [deploy/README_ch.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/README_ch.md)<br>[deploy/README.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/README.md)<br>[deploy/slim/quantization/export_model.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/export_model.py)<br>[deploy/slim/quantization/quant_kl.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/quant_kl.py)<br>[deploy/slim/quantization/quant.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/quant.py)<br>[deploy/slim/quantization/README_en.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/README_en.md)<br>[deploy/slim/quantization/README.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/README.md)<br>[deploy/slim/prune/export_prune_model.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/prune/export_prune_model.py) |
| instruction | 0 | not obvious |
| docs | 773 | [mkdocs-ci.yml](../../../../sources/PaddlePaddle__PaddleOCR/mkdocs-ci.yml)<br>[mkdocs.yml](../../../../sources/PaddlePaddle__PaddleOCR/mkdocs.yml)<br>[README.md](../../../../sources/PaddlePaddle__PaddleOCR/README.md)<br>[tools/end2end/readme.md](../../../../sources/PaddlePaddle__PaddleOCR/tools/end2end/readme.md)<br>[test_tipc/readme.md](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/readme.md)<br>[test_tipc/supplementary/readme.md](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/supplementary/readme.md)<br>[test_tipc/docs/benchmark_train.md](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/docs/benchmark_train.md)<br>[test_tipc/docs/compare_cpp_right.png](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/docs/compare_cpp_right.png) |
| config | 27 | [pyproject.toml](../../../../sources/PaddlePaddle__PaddleOCR/pyproject.toml)<br>[requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/requirements.txt)<br>[test_tipc/supplementary/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/supplementary/requirements.txt)<br>[ppstructure/recovery/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/ppstructure/recovery/requirements.txt)<br>[ppstructure/kie/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/ppstructure/kie/requirements.txt)<br>[paddleocr-js/package.json](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/package.json)<br>[paddleocr-js/tsconfig.json](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/tsconfig.json)<br>[paddleocr-js/packages/core/package.json](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/packages/core/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 548 | [TEST_REPORT.md](../../../../sources/PaddlePaddle__PaddleOCR/TEST_REPORT.md)<br>[tools/eval.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/eval.py)<br>[tools/test_hubserving.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/test_hubserving.py)<br>[tools/end2end/eval_end2end.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/end2end/eval_end2end.py)<br>[tests/__init__.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/conftest.py) |
| CI workflows | 9 | [.github/workflows/build_publish_develop_docs.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/build_publish_develop_docs.yml)<br>[.github/workflows/build_publish_release_docs.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/build_publish_release_docs.yml)<br>[.github/workflows/close_inactive_issues.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/close_inactive_issues.yml)<br>[.github/workflows/codestyle.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/codestyle.yml)<br>[.github/workflows/docs_anchor_check.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/docs_anchor_check.yml)<br>[.github/workflows/link_check.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/link_check.yml) |
| Containers / deploy | 456 | [deploy/README_ch.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/README_ch.md)<br>[deploy/README.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/README.md)<br>[deploy/slim/quantization/export_model.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/export_model.py)<br>[deploy/slim/quantization/quant_kl.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/quant_kl.py)<br>[deploy/slim/quantization/quant.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/quant.py)<br>[deploy/slim/quantization/README_en.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/README_en.md) |
| Security / policy | 2 | [tests/security/test_latexocr_pickle.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/security/test_latexocr_pickle.py)<br>[tests/security/test_lmdb_pickle.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/security/test_lmdb_pickle.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `test_tipc/web/index.html`, `test_tipc/web/index.test.js`, `ppocr/modeling/heads/local_graph.py`.
2. Trace execution through entrypoints: `paddleocr-js/packages/core/src/index.ts`, `paddleocr-js/apps/demo/src/main.ts`, `paddleocr/__main__.py`.
3. Map agent/tool runtime through: `tools/__init__.py`, `tools/check_docs_github_links.py`, `tools/eval.py`.
4. Inspect retrieval/memory/indexing through: `test_tipc/web/index.html`, `test_tipc/web/index.test.js`, `ppocr/modeling/heads/local_graph.py`.
5. Verify behavior through test/eval files: `TEST_REPORT.md`, `tools/eval.py`, `tools/test_hubserving.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges the ga. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
