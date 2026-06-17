# PaddlePaddle/PaddleOCR 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/PaddlePaddle__PaddleOCR |
| remote | https://github.com/PaddlePaddle/PaddleOCR |
| HEAD | ef346e0 (2026-06-16) Disable push and schedule triggers in link_check.yml |
| branch | main |
| groups | llm-wiki-100 |
| files | 2488 |
| dirs | 512 |
| stack | Node/TypeScript/JavaScript, Python, Go |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🚀 Key Features`, `📄 Intelligent Document Parsing (LLM-Ready)`, `🔍 Universal Text Recognition (Scene OCR)`, `🛠️ Developer-Centric Ecosystem`, `📣 Recent updates`, `🔥 2026.06.11: Release of PaddleOCR 3.7.0`, `🚀 Quick Start`, `Step 1: Try Online`, `Step 2: Local Deployment`, `🧩 More Features`, `🔄 Quick Overview of Execution Results`, `PP-OCRv5`, `PP-StructureV3`, `PaddleOCR-VL`, `✨ Stay Tuned`, `👩‍👩‍👧‍👦 Community`, `😃 Awesome Projects Leveraging PaddleOCR`, `👩‍👩‍👧‍👦 Contributors`

> <div align="center" <p <img width="800" src="https //raw.githubusercontent.com/cuicheng01/PaddleX doc images/main/images/paddleocr/README/Banner.png" alt="Star history" </p <h3 Global Leading OCR Toolkit & Document AI Engine</h3 English 简体中文 繁體中文 日本語 한국어 Français Русский Español العربية <! icon </div PaddleOCR converts PDF documents and images into structured, LLM ready data (JSON/Markdown) with industry leading accuracy. With 70k+ Stars and trusted by top tier projects like Dify, RAGFlow, and Cherry Studio, PaddleOCR is the bedrock for building intelligent RAG and Agentic applications. 🚀 Key Features 📄 Intelligent Document Parsing (LLM Ready) Transforming messy visuals into structured data for the LLM era. SOTA Document VLM Featuring PaddleOCR VL 1.6 (0.9B) , the industry's leading lightweight vision language model for document parsing. It achieves 96.3% accuracy on OmniDocBench v1.6,

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .clang_format.hook | file |
| .github | dir |
| .gitignore | file |
| .lycheeignore | file |
| .pre-commit-config.yaml | file |
| .style.yapf | file |
| api_sdk | dir |
| applications | dir |
| awesome_projects.md | file |
| benchmark | dir |
| CNAME | file |
| configs | dir |
| deploy | dir |
| doc | dir |
| docs | dir |
| langchain-paddleocr | dir |
| LICENSE | file |
| MANIFEST.in | file |
| mcp_server | dir |
| mkdocs-ci.yml | file |
| mkdocs.yml | file |
| overrides | dir |
| paddleocr | dir |
| paddleocr-js | dir |
| ppocr | dir |
| ppstructure | dir |
| pyproject.toml | file |
| readme | dir |
| README.md | file |
| RELEASING_cn.md | file |
| RELEASING.md | file |
| requirements.txt | file |
| setup.py | file |
| skills | dir |
| TEST_REPORT.md | file |
| test_tipc | dir |
| tests | dir |
| tools | dir |
| train.sh | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 655 |
| deploy/ | 456 |
| ppocr/ | 340 |
| test_tipc/ | 323 |
| configs/ | 157 |
| paddleocr-js/ | 104 |
| benchmark/ | 84 |
| paddleocr/ | 72 |
| tests/ | 52 |
| ppstructure/ | 46 |
| mcp_server/ | 43 |
| api_sdk/ | 37 |
| tools/ | 30 |
| langchain-paddleocr/ | 21 |
| (root) | 19 |
| doc/ | 19 |
| .github/ | 12 |
| readme/ | 8 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 655 | preferred |
| tests/ | 52 | preferred |
| skills/ | 4 | preferred |
| tools/ | 30 | preferred |
| deploy/ | 456 | large |
| docs/version2.x/ | 398 | large |
| ppocr/ | 340 | large |
| test_tipc/ | 323 | large |
| test_tipc/configs/ | 243 | large |
| configs/ | 157 | large |
| docs/version3.x/ | 148 | large |
| docs/version2.x/ppocr/ | 147 | large |
| docs/version2.x/algorithm/ | 108 | large |
| paddleocr-js/ | 104 | large |
| ppocr/utils/ | 103 | large |
| ppocr/modeling/ | 102 | large |
| configs/rec/ | 100 | large |
| deploy/ios_demo/ | 86 | large |
| benchmark/ | 84 | large |
| deploy/cpp_infer/ | 83 | large |
| paddleocr-js/packages/ | 82 | large |
| paddleocr-js/packages/core/ | 82 | large |
| benchmark/PaddleOCR_DBNet/ | 80 | large |
| deploy/cpp_infer/src/ | 78 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `api_sdk/go/go.mod`
- `api_sdk/typescript/package.json`
- `api_sdk/typescript/tsconfig.json`
- `deploy/avh/requirements.txt`
- `deploy/docker/hubserving/cpu/Dockerfile`
- `deploy/docker/hubserving/gpu/Dockerfile`
- `deploy/paddleocr_vl_docker/hps/gateway/requirements.txt`
- `docs/version2.x/algorithm/formula_recognition/requirements.txt`
- `langchain-paddleocr/pyproject.toml`
- `langchain-paddleocr/uv.lock`
- `mcp_server/pyproject.toml`
- `paddleocr-js/apps/demo/package.json`
- `paddleocr-js/apps/demo/tsconfig.json`
- `paddleocr-js/package.json`
- `paddleocr-js/packages/core/package.json`
- `paddleocr-js/packages/core/tsconfig.json`
- `paddleocr-js/packages/core/vite.config.ts`
- `paddleocr-js/tsconfig.json`
- `ppstructure/kie/requirements.txt`
- `ppstructure/recovery/requirements.txt`
- `pyproject.toml`
- `requirements.txt`
- `test_tipc/supplementary/requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| api_sdk/typescript/package.json | @paddleocr/api-sdk | build, test, lint, prepublishOnly |  |
| paddleocr-js/apps/demo/package.json | demo | dev, build, preview, typecheck | @paddleocr/paddleocr-js |
| paddleocr-js/package.json | paddleocr-js-workspace | dev:demo, build, build:demo, build:sdk, preview:demo, lint, lint:fix, typecheck, test, test:coverage, test:watch, format, format:check, clean, check, release |  |
| paddleocr-js/packages/core/package.json | @paddleocr/paddleocr-js | build, typecheck, prepublishOnly | @techstark/opencv-js, clipper-lib, js-yaml, onnxruntime-web |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| langchain-paddleocr/pyproject.toml | langchain-paddleocr | false | false | true | true |
| mcp_server/pyproject.toml | paddleocr_mcp | false | false | false | false |
| pyproject.toml | paddleocr | false | false | false | true |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| api_sdk/go/go.mod | github.com/PaddlePaddle/PaddleOCR/api_sdk/go | 1.21 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `api_sdk/README.md`
- `api_sdk/go/README.md`
- `api_sdk/typescript/README.md`
- `applications/README.md`
- `benchmark/PaddleOCR_DBNet/README.MD`
- `benchmark/PaddleOCR_DBNet/test/README.MD`
- `benchmark/readme.md`
- `deploy/README.md`
- `deploy/android_demo/README.md`
- `deploy/avh/README.md`
- `deploy/docker/hubserving/README.md`
- `deploy/hubserving/readme.md`
- `deploy/ios_demo/README.md`
- `deploy/lite/readme.md`
- `deploy/paddle2onnx/readme.md`
- `deploy/paddlecloud/README.md`
- `deploy/paddleocr_vl_docker/hps/README.md`
- `deploy/ppocr-android/README.md`
- `deploy/slim/auto_compression/README.md`
- `deploy/slim/prune/README.md`
- `deploy/slim/quantization/README.md`
- `doc/fonts/arabic.ttf`
- `doc/fonts/chinese_cht.ttf`
- `doc/fonts/cyrillic.ttf`
- `doc/fonts/french.ttf`
- `doc/fonts/german.ttf`
- `doc/fonts/hindi.ttf`
- `doc/fonts/japan.ttc`
- `doc/fonts/kannada.ttf`
- `doc/fonts/korean.ttf`
- `doc/fonts/latin.ttf`
- `doc/fonts/marathi.ttf`
- `doc/fonts/nepali.ttf`
- `doc/fonts/persian.ttf`
- `doc/fonts/simfang.ttf`
- `doc/fonts/spanish.ttf`
- `doc/fonts/tamil.ttf`
- `doc/fonts/telugu.ttf`
- `doc/fonts/urdu.ttf`
- `doc/fonts/uyghur.ttf`
- `docs/FAQ.en.md`
- `docs/FAQ.md`
- `docs/community/code_and_doc.en.md`
- `docs/community/code_and_doc.md`
- `docs/community/community_contribution.en.md`
- `docs/community/community_contribution.md`
- `docs/community/images/banner.png`
- `docs/community/images/pr.png`
- `docs/community/images/precommit_pass.png`
- ... 30 more

### 에이전트 지침 후보

- `docs/version3.x/integrations/mcp_server.en.md`
- `docs/version3.x/integrations/mcp_server.md`
- `docs/version3.x/integrations/skills.en.md`
- `docs/version3.x/integrations/skills.md`
- `mcp_server/README.md`
- `mcp_server/README_en.md`
- `mcp_server/paddleocr_mcp/__init__.py`
- `mcp_server/paddleocr_mcp/__main__.py`
- `mcp_server/paddleocr_mcp/inference/__init__.py`
- `mcp_server/paddleocr_mcp/inference/base.py`
- `mcp_server/paddleocr_mcp/inference/errors.py`
- `mcp_server/paddleocr_mcp/inference/factory.py`
- `mcp_server/paddleocr_mcp/inference/ocr/aistudio.py`
- `mcp_server/paddleocr_mcp/inference/ocr/local.py`
- `mcp_server/paddleocr_mcp/inference/ocr/params.py`
- `mcp_server/paddleocr_mcp/inference/ocr/self_hosted.py`
- `mcp_server/paddleocr_mcp/inference/paddleocr_vl/aistudio.py`
- `mcp_server/paddleocr_mcp/inference/paddleocr_vl/local.py`
- `mcp_server/paddleocr_mcp/inference/paddleocr_vl/params.py`
- `mcp_server/paddleocr_mcp/inference/paddleocr_vl/qianfan.py`
- `mcp_server/paddleocr_mcp/inference/paddleocr_vl/self_hosted.py`
- `mcp_server/paddleocr_mcp/inference/pp_structurev3/aistudio.py`
- `mcp_server/paddleocr_mcp/inference/pp_structurev3/local.py`
- `mcp_server/paddleocr_mcp/inference/pp_structurev3/params.py`
- `mcp_server/paddleocr_mcp/inference/pp_structurev3/qianfan.py`
- `mcp_server/paddleocr_mcp/inference/pp_structurev3/self_hosted.py`
- `mcp_server/paddleocr_mcp/inference/shared/async_http_client.py`
- `mcp_server/paddleocr_mcp/inference/shared/doc_parsing_result_adapters.py`
- `mcp_server/paddleocr_mcp/inference/shared/http_base.py`
- `mcp_server/paddleocr_mcp/inference/shared/http_result_parsers.py`
- `mcp_server/paddleocr_mcp/inference/shared/input_adapters.py`
- `mcp_server/paddleocr_mcp/inference/shared/input_contract.py`
- `mcp_server/paddleocr_mcp/inference/shared/local_sync_runner.py`
- `mcp_server/paddleocr_mcp/inference/shared/paddleocr_api_sdk.py`
- `mcp_server/paddleocr_mcp/inference/shared/param_mapping.py`
- `mcp_server/paddleocr_mcp/inference/types.py`
- `mcp_server/paddleocr_mcp/providers.py`
- `mcp_server/paddleocr_mcp/py.typed`
- `mcp_server/paddleocr_mcp/selection.py`
- `mcp_server/paddleocr_mcp/tasks/__init__.py`
- `mcp_server/paddleocr_mcp/tasks/base.py`
- `mcp_server/paddleocr_mcp/tasks/doc_parsing.py`
- `mcp_server/paddleocr_mcp/tasks/factory.py`
- `mcp_server/paddleocr_mcp/tasks/mcp_image.py`
- `mcp_server/paddleocr_mcp/tasks/ocr.py`
- `mcp_server/paddleocr_mcp/utils.py`
- `mcp_server/pyproject.toml`
- `skills/README.md`
- `skills/README_cn.md`
- `skills/paddleocr-doc-parsing/SKILL.md`
- `skills/paddleocr-text-recognition/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `api_sdk/typescript/tests/client.test.ts`
- `benchmark/PaddleOCR_DBNet/test/README.MD`
- `deploy/android_demo/app/src/test/java/com/baidu/paddle/lite/demo/ocr/ExampleUnitTest.java`
- `langchain-paddleocr/tests/__init__.py`
- `langchain-paddleocr/tests/data/sample_img.jpg`
- `langchain-paddleocr/tests/data/sample_pdf.pdf`
- `langchain-paddleocr/tests/integration_tests/__init__.py`
- `langchain-paddleocr/tests/integration_tests/document_loaders/__init__.py`
- `langchain-paddleocr/tests/integration_tests/document_loaders/test_paddleocr_vl_loader.py`
- `langchain-paddleocr/tests/unit_tests/__init__.py`
- `langchain-paddleocr/tests/unit_tests/document_loaders/__init__.py`
- `langchain-paddleocr/tests/unit_tests/document_loaders/test_paddleocr_vl_loader.py`
- `langchain-paddleocr/tests/unit_tests/document_loaders/test_paddleocr_vl_param_mapping.py`
- `paddleocr-js/packages/core/test/browser-source.test.ts`
- `paddleocr-js/packages/core/test/det-model.test.ts`
- `paddleocr-js/packages/core/test/helpers/mock-ort-tensor.ts`
- `paddleocr-js/packages/core/test/model-asset.test.ts`
- `paddleocr-js/packages/core/test/model-common.test.ts`
- `paddleocr-js/packages/core/test/model-config.test.ts`
- `paddleocr-js/packages/core/test/ocr-api.test.ts`
- `paddleocr-js/packages/core/test/ocr-config-branches.test.ts`
- `paddleocr-js/packages/core/test/ocr-core.test.ts`
- `paddleocr-js/packages/core/test/ocr-shared.test.ts`
- `paddleocr-js/packages/core/test/ocr-worker-entry.test.ts`
- `paddleocr-js/packages/core/test/pipelines-index.test.ts`
- `paddleocr-js/packages/core/test/platform-browser.test.ts`
- `paddleocr-js/packages/core/test/platform-worker.test.ts`
- `paddleocr-js/packages/core/test/public-api.test.ts`
- `paddleocr-js/packages/core/test/rec-model.test.ts`
- `paddleocr-js/packages/core/test/resolve.test.ts`
- `paddleocr-js/packages/core/test/runtime-opencv.test.ts`
- `paddleocr-js/packages/core/test/runtime-ort.test.ts`
- `paddleocr-js/packages/core/test/runtime-params.test.ts`
- `paddleocr-js/packages/core/test/tar-fixture.ts`
- `paddleocr-js/packages/core/test/tar.test.ts`
- `paddleocr-js/packages/core/test/utils-common.test.ts`
- `paddleocr-js/packages/core/test/viz-canvas-factory.test.ts`
- `paddleocr-js/packages/core/test/viz-color.test.ts`
- `paddleocr-js/packages/core/test/viz-draw-boxes.test.ts`
- `paddleocr-js/packages/core/test/viz-draw-text.test.ts`
- `paddleocr-js/packages/core/test/viz-font.test.ts`
- `paddleocr-js/packages/core/test/viz-public-api.test.ts`
- `paddleocr-js/packages/core/test/viz-renderer.test.ts`
- `paddleocr-js/packages/core/test/viz-types.test.ts`
- `paddleocr-js/packages/core/test/worker-backed.test.ts`
- `paddleocr-js/packages/core/test/worker-client.test.ts`
- `paddleocr-js/packages/core/test/worker-entry.test.ts`
- `paddleocr-js/packages/core/test/worker-protocol.test.ts`
- `test_tipc/web/index.test.js`
- `tests/__init__.py`
- `tests/api_client/test_cli.py`
- `tests/api_client/test_core.py`
- `tests/api_client/test_http.py`
- `tests/api_client/test_resources.py`
- `tests/conftest.py`
- `tests/models/__init__.py`
- `tests/models/image_classification_common.py`
- `tests/models/object_detection_common.py`
- `tests/models/test_doc_img_orientation_classification.py`
- `tests/models/test_doc_vlm.py`
- `tests/models/test_formula_recognition.py`
- `tests/models/test_layout_detection.py`
- `tests/models/test_seal_text_detection.py`
- `tests/models/test_table_cells_detection.py`
- `tests/models/test_table_classification.py`
- `tests/models/test_table_structure_recognition.py`
- `tests/models/test_text_detection.py`
- `tests/models/test_text_image_unwarping.py`
- `tests/models/test_text_recognition.py`
- `tests/models/test_textline_orientation_classification.py`
- `tests/pipelines/__init__.py`
- `tests/pipelines/test_doc_preprocessor.py`
- `tests/pipelines/test_doc_understanding.py`
- `tests/pipelines/test_formula_recognition.py`
- `tests/pipelines/test_ocr.py`
- `tests/pipelines/test_pp_chatocrv4_doc.py`
- `tests/pipelines/test_pp_doctranslation.py`
- `tests/pipelines/test_pp_structurev3.py`
- `tests/pipelines/test_seal_rec.py`
- `tests/pipelines/test_table_recognition_v2.py`
- ... 21 more

### CI/Docker 후보

- `.github/workflows/build_publish_develop_docs.yml`
- `.github/workflows/build_publish_release_docs.yml`
- `.github/workflows/close_inactive_issues.yml`
- `.github/workflows/codestyle.yml`
- `.github/workflows/docs_anchor_check.yml`
- `.github/workflows/link_check.yml`
- `.github/workflows/python_publish.yml`
- `.github/workflows/test_gpu.yml`
- `.github/workflows/tests.yml`
- `deploy/docker/hubserving/cpu/Dockerfile`
- `deploy/docker/hubserving/gpu/Dockerfile`
- `deploy/paddleocr_vl_docker/accelerators/amd-gpu/compose.yaml`
- `deploy/paddleocr_vl_docker/accelerators/huawei-npu/compose.yaml`
- `deploy/paddleocr_vl_docker/accelerators/hygon-dcu/compose.yaml`
- `deploy/paddleocr_vl_docker/accelerators/iluvatar-gpu/compose.yaml`
- `deploy/paddleocr_vl_docker/accelerators/intel-gpu/compose.yaml`
- `deploy/paddleocr_vl_docker/accelerators/kunlunxin-xpu/compose.yaml`
- `deploy/paddleocr_vl_docker/accelerators/metax-gpu/compose.yaml`
- `deploy/paddleocr_vl_docker/accelerators/nvidia-gpu-sm120/compose.yaml`
- `deploy/paddleocr_vl_docker/accelerators/nvidia-gpu/compose.yaml`
- `deploy/paddleocr_vl_docker/hps/compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 593 |
| .md | 473 |
| .txt | 306 |
| .yml | 193 |
| .jpg | 170 |
| .png | 162 |
| .ts | 90 |
| .h | 60 |
| .sh | 47 |
| .yaml | 46 |
| .cc | 43 |
| .kt | 39 |
| .swift | 33 |
| .json | 29 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `deploy/ 내부 책임 분리`
- `api_sdk/go/go.mod 실행 스크립트와 패키지 경계`
- `api_sdk/typescript/package.json 실행 스크립트와 패키지 경계`
- `api_sdk/typescript/tsconfig.json 실행 스크립트와 패키지 경계`
- `deploy/avh/requirements.txt 실행 스크립트와 패키지 경계`
- `deploy/docker/hubserving/cpu/Dockerfile 실행 스크립트와 패키지 경계`

