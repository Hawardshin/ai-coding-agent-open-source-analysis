# PaddlePaddle/PaddleOCR 코드 레벨 분석

생성일: 2026-06-17T23:31:35.987Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 82807 |
| language | Python |
| tags | rag, document-chat, korea-signal |
| files/code/source | 2137/835/741 |
| tests/ci | 101/21 |
| local path | sources/PaddlePaddle__PaddleOCR |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 138 | 25 | tools/eval.py:37 # build dataloader |
| Parsing/OCR/document extraction | code | 475 | 169 | benchmark/run_benchmark_det.sh:13 mission_name="OCR" |
| Chunking/splitting | code | 25 | 17 | paddleocr/_pipelines/_patch_layout_parsing.py:19 overlap calculations. |
| Embedding/vector index | code | 56 | 36 | paddleocr/_pipelines/pp_chatocrv4_doc.py:676 help="Configuration for the embedding model.", |
| Retrieval/search/rerank | code | 35 | 11 | overrides/hooks/expiry.py:17 m = re.search(r"(\d{4}-\d{2}-\d{2})", str(revision)) |
| Wiki/graph/entity model | code | 77 | 15 | tools/infer_kie_token_ser_re.py:67 entities = ser_inputs[8][0] |
| Memory/update lifecycle | code | 186 | 76 | paddleocr-js/eslint.config.js:7 ignores: ["**/dist", "**/node_modules", "**/coverage", "**/.cache"] |
| Provenance/citation/evidence | code | 63 | 3 | ppocr/modeling/heads/sr_rensnet_transformer.py:277 "Construct a layernorm module (See citation for details)." |
| Evaluation/observability | code | 770 | 148 | benchmark/run_benchmark_det.sh:58 source ${BENCHMARK_ROOT}/scripts/run_model.sh # 在该脚本中会对符合benchmark规范的log使用analysis.py 脚本进行性能数据解析;该脚本在连调时可从benchmark repo中下载https://github.com/PaddlePaddle/benchmark/blob/master/scripts/run_model.sh;如果不联调只想要产出训练log可以注掉本行, |
| Agent/MCP/tool surface | code | 64 | 11 | paddleocr/_cli.py:147 2. Make HTTP requests directly, or using the OpenAI client library.""" |

## 의존성 신호

- LLM/app framework: langchain-paddleocr, langchain-core, langchain-tests
- Document parsing/OCR: @paddleocr/paddleocr-js, python_docx, python-docx, beautifulsoup4, langchain-paddleocr, paddleocr, paddleocr_mcp, docx2markdown
- Persistence/database: PGH, PGH003

## 주요 파일 후보

### Ingestion/source intake

- `tools/eval.py`
- `tools/export_center.py`
- `tools/train.py`
- `ppocr/data/__init__.py`
- `ppocr/data/simple_dataset.py`
- `test_tipc/supplementary/data_loader.py`
- `test_tipc/supplementary/train.py`
- `benchmark/PaddleOCR_DBNet/base/base_dataset.py`
- `benchmark/PaddleOCR_DBNet/base/base_trainer.py`
- `benchmark/PaddleOCR_DBNet/data_loader/__init__.py`
- `benchmark/PaddleOCR_DBNet/tools/eval.py`
- `benchmark/PaddleOCR_DBNet/tools/predict.py`
- ... 6 more

### Parsing/OCR/document extraction

- `benchmark/run_benchmark_det.sh`
- `paddleocr/_cli.py`
- `ppstructure/predict_system.py`
- `ppstructure/utility.py`
- `test_tipc/prepare_lite_cpp.sh`
- `api_sdk/go/client_test.go`
- `api_sdk/go/doc.go`
- `api_sdk/go/models.go`
- `api_sdk/go/ocr.go`
- `api_sdk/go/options.go`
- `api_sdk/go/resource.go`
- `deploy/lite/prepare.sh`
- ... 6 more

### Chunking/splitting

- `paddleocr/_pipelines/_patch_layout_parsing.py`
- `ppocr/losses/det_basic_loss.py`
- `ppocr/metrics/bleu.py`
- `ppocr/postprocess/rec_postprocess.py`
- `ppocr/utils/network.py`
- `tools/infer/predict_det.py`
- `paddleocr-js/packages/core/vite.config.ts`
- `paddleocr/_doc2md/converters/pptx.py`
- `ppocr/modeling/heads/rec_latexocr_head.py`
- `ppocr/modeling/heads/rec_unimernet_head.py`
- `ppocr/data/imaug/text_image_aug/augment.py`
- `paddleocr-js/packages/core/src/models/det.ts`
- ... 6 more

### Embedding/vector index

- `paddleocr/_pipelines/pp_chatocrv4_doc.py`
- `paddleocr/_pipelines/pp_doctranslation.py`
- `ppocr/losses/det_fce_loss.py`
- `ppocr/data/imaug/drrg_targets.py`
- `ppocr/data/imaug/fce_targets.py`
- `ppocr/data/imaug/pg_process.py`
- `ppocr/data/imaug/sast_process.py`
- `ppocr/modeling/backbones/rec_donut_swin.py`
- `ppocr/modeling/backbones/rec_hybridvit.py`
- `ppocr/modeling/backbones/rec_svtrnet.py`
- `ppocr/modeling/backbones/rec_svtrv2.py`
- `ppocr/modeling/backbones/rec_vary_vit.py`
- ... 6 more

### Retrieval/search/rerank

- `overrides/hooks/expiry.py`
- `paddleocr/_pipelines/pp_chatocrv4_doc.py`
- `ppocr/postprocess/rec_postprocess.py`
- `ppstructure/table/table_master_match.py`
- `test_tipc/web/jest.config.js`
- `paddleocr/_doc2md/converters/docx.py`
- `paddleocr/_doc2md/math/omml.py`
- `ppocr/modeling/heads/rec_nrtr_head.py`
- `ppocr/modeling/heads/rec_ppformulanet_head.py`
- `ppocr/utils/e2e_metric/Deteval.py`
- `paddleocr-js/packages/core/src/types/opencv.d.ts`
- `mkdocs.yml`
- ... 6 more

### Wiki/graph/entity model

- `tools/infer_kie_token_ser_re.py`
- `tools/infer_kie_token_ser.py`
- `ppocr/metrics/vqa_token_re_metric.py`
- `ppocr/postprocess/vqa_token_re_layoutlm_postprocess.py`
- `ppocr/utils/export_model.py`
- `ppstructure/kie/predict_kie_token_ser.py`
- `paddleocr/_doc2md/math/latex_dict.py`
- `ppocr/data/imaug/label_ops.py`
- `ppocr/modeling/backbones/kie_unet_sdmgr.py`
- `ppocr/modeling/backbones/vqa_layoutlm.py`
- `ppocr/modeling/heads/kie_sdmgr_head.py`
- `ppocr/utils/loggers/wandb_logger.py`
- ... 6 more

### Memory/update lifecycle

- `paddleocr-js/eslint.config.js`
- `paddleocr/_common_args.py`
- `tools/program.py`
- `deploy/paddleocr_vl_docker/build_pipeline.sh`
- `deploy/paddleocr_vl_docker/build_vlm.sh`
- `paddleocr/_pipelines/paddleocr_vl.py`
- `ppocr/data/simple_dataset.py`
- `ppocr/postprocess/drrg_postprocess.py`
- `ppocr/postprocess/locality_aware_nms.py`
- `ppocr/postprocess/vqa_token_re_layoutlm_postprocess.py`
- `ppocr/utils/poly_nms.py`
- `ppocr/utils/utility.py`
- ... 6 more

### Provenance/citation/evidence

- `ppocr/modeling/heads/sr_rensnet_transformer.py`
- `deploy/ios_demo/PaddleOCRDemo/App/DemoSectionChrome.swift`
- `deploy/ios_demo/PaddleOCRDemo/Views/EngineSettingsSheet.swift`
- `mkdocs.yml`
- `deploy/paddleocr_vl_docker/pipeline_config_fastdeploy.yaml`
- `deploy/paddleocr_vl_docker/pipeline_config_vllm.yaml`
- `ppocr/utils/dict/latex_ocr_tokenizer.json`
- `README.md`
- `RELEASING_cn.md`
- `RELEASING.md`
- `readme/README_fr.md`
- `benchmark/PaddleOCR_DBNet/LICENSE.md`
- ... 6 more

### Evaluation/observability

- `benchmark/run_benchmark_det.sh`
- `benchmark/run_det.sh`
- `paddleocr/__init__.py`
- `paddleocr/_common_args.py`
- `test_tipc/benchmark_train.sh`
- `test_tipc/compare_results.py`
- `test_tipc/test_inference_cpp.sh`
- `test_tipc/test_inference_python.sh`
- `test_tipc/test_lite_arm_cpp.sh`
- `test_tipc/test_paddle2onnx.sh`
- `test_tipc/test_ptq_inference_python.sh`
- `test_tipc/test_serving_infer_cpp.sh`
- ... 6 more

### Agent/MCP/tool surface

- `paddleocr/_cli.py`
- `mcp_server/paddleocr_mcp/__main__.py`
- `mcp_server/paddleocr_mcp/selection.py`
- `paddleocr/_pipelines/pp_chatocrv4_doc.py`
- `paddleocr/_pipelines/pp_doctranslation.py`
- `mcp_server/paddleocr_mcp/tasks/base.py`
- `mcp_server/paddleocr_mcp/tasks/doc_parsing.py`
- `mcp_server/paddleocr_mcp/tasks/mcp_image.py`
- `mcp_server/paddleocr_mcp/tasks/ocr.py`
- `mcp_server/paddleocr_mcp/inference/shared/input_adapters.py`
- `mcp_server/paddleocr_mcp/inference/shared/input_contract.py`
- `mkdocs.yml`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| tools/eval.py | 37 | # build dataloader |
| tools/export_center.py | 37 | # build dataloader |
| tools/train.py | 53 | # build dataloader |
| tools/train.py | 172 | logger.info("train dataloader has {} iters".format(len(train_dataloader))) |
| tools/train.py | 174 | logger.info("valid dataloader has {} iters".format(len(valid_dataloader))) |
| ppocr/data/__init__.py | 32 | from paddle.io import Dataset, DataLoader, BatchSampler, DistributedBatchSampler |
| ppocr/data/__init__.py | 143 | data_loader = DataLoader( |
| ppocr/data/__init__.py | 154 | return data_loader |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| benchmark/run_benchmark_det.sh | 13 | mission_name="OCR" |
| paddleocr/_cli.py | 221 | help="Convert office documents (docx/xlsx/pptx) to Markdown", |
| paddleocr/_cli.py | 228 | help="Input file path (.docx/.xlsx/.pptx)", |
| paddleocr/_cli.py | 248 | # docx options |
| paddleocr/_cli.py | 252 | help="[docx/xlsx] Skip text box / drawing layer content extraction", |
| paddleocr/_cli.py | 257 | help="[docx] Skip header and footer content extraction", |
| ppstructure/predict_system.py | 60 | if args.layout == False and args.ocr == True: |
| ppstructure/predict_system.py | 61 | args.ocr = False |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| paddleocr/_pipelines/_patch_layout_parsing.py | 19 | overlap calculations. |
| paddleocr/_pipelines/_patch_layout_parsing.py | 21 | is empty, which can happen when overflow causes all overlap matches to fail. |
| paddleocr/_pipelines/_patch_layout_parsing.py | 37 | Calculate the overlap ratio between two bounding boxes. |
| ppocr/losses/det_basic_loss.py | 234 | - DiceLoss optimizes the global F1 / region overlap between prediction and GT. |
| ppocr/metrics/bleu.py | 26 | def _get_ngrams(segment, max_order): |
| ppocr/metrics/bleu.py | 27 | """Extracts all n-grams upto a given maximum order from an input segment. |
| ppocr/metrics/bleu.py | 30 | segment: text segment from which n-grams will be extracted. |
| ppocr/metrics/bleu.py | 35 | The Counter containing all n-grams upto max_order in segment |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| paddleocr/_pipelines/pp_chatocrv4_doc.py | 676 | help="Configuration for the embedding model.", |
| paddleocr/_pipelines/pp_chatocrv4_doc.py | 694 | "model_name": "embedding-v1", |
| paddleocr/_pipelines/pp_doctranslation.py | 907 | help="Configuration for the embedding model.", |
| ppocr/losses/det_fce_loss.py | 34 | FCENet(CVPR2021): Fourier Contour Embedding for Arbitrary-shaped |
| ppocr/data/imaug/drrg_targets.py | 557 | between vector (top point - bottom point) and vector (1, 0). |
| ppocr/data/imaug/drrg_targets.py | 559 | between vector (top point - bottom point) and vector (1, 0). |
| ppocr/data/imaug/fce_targets.py | 32 | """Generate the ground truth targets of FCENet: Fourier Contour Embedding |
| ppocr/data/imaug/pg_process.py | 775 | Calculate the angle between vector AB and x-axis positive direction. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| overrides/hooks/expiry.py | 17 | m = re.search(r"(\d{4}-\d{2}-\d{2})", str(revision)) |
| paddleocr/_pipelines/pp_chatocrv4_doc.py | 693 | "module_name": "retriever", |
| ppocr/postprocess/rec_postprocess.py | 57 | if not bool(re.search("[a-zA-Z0-9 :*./%+-]", c)): |
| ppocr/postprocess/rec_postprocess.py | 100 | elif bool(re.search(r"[\w]", char, re.UNICODE)) and char != "_": |
| ppocr/postprocess/rec_postprocess.py | 113 | and bool(re.search("[0-9]", text[c_i + 1])) |
| ppstructure/table/table_master_match.py | 630 | span_part = re.search(span_pattern, isolate_item) |
| ppstructure/table/table_master_match.py | 694 | if re.search(thead_pattern, result_token) is None: |
| ppstructure/table/table_master_match.py | 696 | thead_part = re.search(thead_pattern, result_token).group() |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| tools/infer_kie_token_ser_re.py | 67 | entities = ser_inputs[8][0] |
| tools/infer_kie_token_ser_re.py | 69 | assert len(entities) == len(ser_results) |
| tools/infer_kie_token_ser_re.py | 71 | # entities |
| tools/infer_kie_token_ser_re.py | 76 | for i, (res, entity) in enumerate(zip(ser_results, entities)): |
| tools/infer_kie_token_ser_re.py | 80 | start.append(entity["start"]) |
| tools/infer_kie_token_ser_re.py | 81 | end.append(entity["end"]) |
| tools/infer_kie_token_ser_re.py | 84 | entities = np.full([max_seq_len + 1, 3], fill_value=-1, dtype=np.int64) |
| tools/infer_kie_token_ser_re.py | 85 | entities[0, 0] = len(start) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| paddleocr-js/eslint.config.js | 7 | ignores: ["**/dist", "**/node_modules", "**/coverage", "**/.cache"] |
| paddleocr/_common_args.py | 175 | help="MKL-DNN cache capacity.", |
| tools/program.py | 90 | Merge config into global config. |
| deploy/paddleocr_vl_docker/build_pipeline.sh | 236 | echo "Building only (image stays in BuildKit cache)..." |
| deploy/paddleocr_vl_docker/build_pipeline.sh | 237 | echo "Note: Image will be lost if BuildKit cache is cleared" |
| deploy/paddleocr_vl_docker/build_pipeline.sh | 262 | echo "ℹ️ Image saved in BuildKit cache only" |
| deploy/paddleocr_vl_docker/build_vlm.sh | 256 | echo "Building only (image stays in BuildKit cache)..." |
| deploy/paddleocr_vl_docker/build_vlm.sh | 257 | echo "Note: Image will be lost if BuildKit cache is cleared" |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| ppocr/modeling/heads/sr_rensnet_transformer.py | 277 | "Construct a layernorm module (See citation for details)." |
| deploy/ios_demo/PaddleOCRDemo/App/DemoSectionChrome.swift | 27 | .font(.footnote.weight(.semibold)) |
| deploy/ios_demo/PaddleOCRDemo/Views/EngineSettingsSheet.swift | 67 | .font(.footnote) |
| mkdocs.yml | 24 | - content.footnote.tooltips |
| deploy/paddleocr_vl_docker/pipeline_config_fastdeploy.yaml | 16 | - footnote |
| deploy/paddleocr_vl_docker/pipeline_config_fastdeploy.yaml | 43 | 10: "union" # footnote |
| deploy/paddleocr_vl_docker/pipeline_config_vllm.yaml | 16 | - footnote |
| deploy/paddleocr_vl_docker/pipeline_config_vllm.yaml | 43 | 10: "union" # footnote |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| benchmark/run_benchmark_det.sh | 58 | source ${BENCHMARK_ROOT}/scripts/run_model.sh # 在该脚本中会对符合benchmark规范的log使用analysis.py 脚本进行性能数据解析;该脚本在连调时可从benchmark repo中下载https://github.com/PaddlePaddle/benchmark/blob/master/scripts/run_model.sh;如果不联调只想要产出训练log可以注掉本行, |
| benchmark/run_det.sh | 27 | CUDA_VISIBLE_DEVICES=0 bash benchmark/run_benchmark_det.sh ${run_mode} ${bs_item} ${fp_item} 1 ${model_mode} \| tee ${log_path}/${log_name}_speed_1gpus 2>&1 # (5min) |
| benchmark/run_det.sh | 32 | CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 bash benchmark/run_benchmark_det.sh ${run_mode} ${bs_item} ${fp_item} 2 ${model_mode} \| tee ${log_path}/${log_name}_speed_8gpus8p 2>&1 |
| paddleocr/__init__.py | 15 | from paddlex.inference.utils.benchmark import benchmark |
| paddleocr/__init__.py | 85 | "benchmark", |
| paddleocr/_common_args.py | 45 | "precision": DEFAULT_PRECISION, |
| paddleocr/_common_args.py | 66 | if kwargs["precision"] not in SUPPORTED_PRECISION_LIST: |
| paddleocr/_common_args.py | 68 | f"Invalid precision: {kwargs['precision']}. Supported values are: {SUPPORTED_PRECISION_LIST}." |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| paddleocr/_cli.py | 147 | 2. Make HTTP requests directly, or using the OpenAI client library.""" |
| mcp_server/paddleocr_mcp/__main__.py | 34 | parser = argparse.ArgumentParser(description="PaddleOCR MCP server.") |
| mcp_server/paddleocr_mcp/__main__.py | 240 | server_name = f"PaddleOCR {model} MCP server" |
| mcp_server/paddleocr_mcp/__main__.py | 241 | mcp = FastMCP( |
| mcp_server/paddleocr_mcp/__main__.py | 246 | task.register_tools(mcp) |
| mcp_server/paddleocr_mcp/__main__.py | 251 | await mcp.run_async( |
| mcp_server/paddleocr_mcp/__main__.py | 258 | await mcp.run_async(log_level=log_level) |
| mcp_server/paddleocr_mcp/selection.py | 53 | """Return the MCP tool name for a validated model.""" |

## Gap

_없음_
