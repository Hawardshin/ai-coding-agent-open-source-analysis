# PaddlePaddle/PaddleOCR 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges the gap between images/PDFs and LLMs. Supports 100+ languages.

## 요약

- 조사 단위: `sources/PaddlePaddle__PaddleOCR` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,488 files, 512 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=test_tipc/web/index.html, test_tipc/web/index.test.js, ppocr/modeling/heads/local_graph.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | PaddlePaddle/PaddleOCR |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 82807 |
| Forks | 10814 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/PaddlePaddle__PaddleOCR](../../../../sources/PaddlePaddle__PaddleOCR) |
| 기존 보고서 | [reports/llm-wiki/repositories/PaddlePaddle__PaddleOCR.md](../../../llm-wiki/repositories/PaddlePaddle__PaddleOCR.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2488 / 512 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, api_sdk, applications, benchmark, configs, deploy, doc, docs, langchain-paddleocr, mcp_server, overrides, paddleocr, paddleocr-js, ppocr, ppstructure, readme, skills, test_tipc, tests, tools |
| 상위 확장자 | .py: 593, .md: 473, .txt: 306, .yml: 193, .jpg: 170, .png: 162, .ts: 90, .h: 60, .sh: 47, .yaml: 46, .cc: 43, .kt: 39 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | paddleocr | paddleocr |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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
| instruction | 0 | 명확하지 않음 |
| docs | 773 | [mkdocs-ci.yml](../../../../sources/PaddlePaddle__PaddleOCR/mkdocs-ci.yml)<br>[mkdocs.yml](../../../../sources/PaddlePaddle__PaddleOCR/mkdocs.yml)<br>[README.md](../../../../sources/PaddlePaddle__PaddleOCR/README.md)<br>[tools/end2end/readme.md](../../../../sources/PaddlePaddle__PaddleOCR/tools/end2end/readme.md)<br>[test_tipc/readme.md](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/readme.md)<br>[test_tipc/supplementary/readme.md](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/supplementary/readme.md)<br>[test_tipc/docs/benchmark_train.md](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/docs/benchmark_train.md)<br>[test_tipc/docs/compare_cpp_right.png](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/docs/compare_cpp_right.png) |
| config | 27 | [pyproject.toml](../../../../sources/PaddlePaddle__PaddleOCR/pyproject.toml)<br>[requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/requirements.txt)<br>[test_tipc/supplementary/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/test_tipc/supplementary/requirements.txt)<br>[ppstructure/recovery/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/ppstructure/recovery/requirements.txt)<br>[ppstructure/kie/requirements.txt](../../../../sources/PaddlePaddle__PaddleOCR/ppstructure/kie/requirements.txt)<br>[paddleocr-js/package.json](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/package.json)<br>[paddleocr-js/tsconfig.json](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/tsconfig.json)<br>[paddleocr-js/packages/core/package.json](../../../../sources/PaddlePaddle__PaddleOCR/paddleocr-js/packages/core/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 548 | [TEST_REPORT.md](../../../../sources/PaddlePaddle__PaddleOCR/TEST_REPORT.md)<br>[tools/eval.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/eval.py)<br>[tools/test_hubserving.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/test_hubserving.py)<br>[tools/end2end/eval_end2end.py](../../../../sources/PaddlePaddle__PaddleOCR/tools/end2end/eval_end2end.py)<br>[tests/__init__.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/conftest.py) |
| CI workflow | 9 | [.github/workflows/build_publish_develop_docs.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/build_publish_develop_docs.yml)<br>[.github/workflows/build_publish_release_docs.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/build_publish_release_docs.yml)<br>[.github/workflows/close_inactive_issues.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/close_inactive_issues.yml)<br>[.github/workflows/codestyle.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/codestyle.yml)<br>[.github/workflows/docs_anchor_check.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/docs_anchor_check.yml)<br>[.github/workflows/link_check.yml](../../../../sources/PaddlePaddle__PaddleOCR/.github/workflows/link_check.yml) |
| 컨테이너/배포 | 456 | [deploy/README_ch.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/README_ch.md)<br>[deploy/README.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/README.md)<br>[deploy/slim/quantization/export_model.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/export_model.py)<br>[deploy/slim/quantization/quant_kl.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/quant_kl.py)<br>[deploy/slim/quantization/quant.py](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/quant.py)<br>[deploy/slim/quantization/README_en.md](../../../../sources/PaddlePaddle__PaddleOCR/deploy/slim/quantization/README_en.md) |
| 보안/정책 | 2 | [tests/security/test_latexocr_pickle.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/security/test_latexocr_pickle.py)<br>[tests/security/test_lmdb_pickle.py](../../../../sources/PaddlePaddle__PaddleOCR/tests/security/test_lmdb_pickle.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `test_tipc/web/index.html`, `test_tipc/web/index.test.js`, `ppocr/modeling/heads/local_graph.py`.
2. entrypoint를 따라 실행 흐름 확인: `paddleocr-js/packages/core/src/index.ts`, `paddleocr-js/apps/demo/src/main.ts`, `paddleocr/__main__.py`.
3. agent/tool runtime 매핑: `tools/__init__.py`, `tools/check_docs_github_links.py`, `tools/eval.py`.
4. retrieval/memory/indexing 확인: `test_tipc/web/index.html`, `test_tipc/web/index.test.js`, `ppocr/modeling/heads/local_graph.py`.
5. test/eval 파일로 동작 검증: `TEST_REPORT.md`, `tools/eval.py`, `tools/test_hubserving.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges the ga. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
