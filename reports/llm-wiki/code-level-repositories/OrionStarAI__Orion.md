# OrionStarAI/Orion 코드 레벨 분석

생성일: 2026-06-17T23:31:52.544Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | mixed/partial-kb |
| maturity | C focused implementation (44) |
| stars | 811 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 38/24/23 |
| tests/ci | 0/0 |
| local path | sources/OrionStarAI__Orion |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | absent | 0 | 0 |  |
| Parsing/OCR/document extraction | doc-only | 4 | 0 | README_ja.md:21 🤗 <a href="https://huggingface.co/OrionStarAI" target="_blank">HuggingFace メインページ</a> \| 🤖 <a href="https://modelscope.cn/organization/OrionStarAI" target="_blank">ModelScope メインページ</a><br>🎬 <a href="https://huggingfac |
| Chunking/splitting | code | 2 | 2 | gradio_demo/common/call_llm.py:52 chunk = json.loads(line) |
| Embedding/vector index | absent | 0 | 0 |  |
| Retrieval/search/rerank | code | 2 | 1 | gradio_demo/plugin_task/util.py:21 match = re.search(regex, text, re.DOTALL) |
| Wiki/graph/entity model | doc-only | 2 | 0 | README_ja.md:341 - モデルは [【Orion-14B シリーズ】 Models Community License Agreement](./ModelsCommunityLicenseAgreement)に従ってください。 |
| Memory/update lifecycle | code | 1 | 1 | gradio_demo/doc_qa_task/doc_qa.py:168 cache = "" |
| Provenance/citation/evidence | code | 2 | 2 | gradio_demo/doc_qa_task/doc_qa.py:31 return """["Source_id": {doc_id},"Content": "{page_content}"]""" |
| Evaluation/observability | code | 5 | 1 | quantization/eval_quant.py:25 .eval() |
| Agent/MCP/tool surface | doc-only | 1 | 0 | README.md:65 - **Orion-14B-Chat-Plugin:** A chat-model specifically tailored for plugin and function calling tasks, ideal for agent-related scenarios where the LLM acts as a plugin and function call system. |

## 의존성 신호

_없음_

## 주요 파일 후보

### Parsing/OCR/document extraction

- `README_ja.md`
- `README_ko.md`
- `README_zh.md`
- `README.md`

### Chunking/splitting

- `gradio_demo/common/call_llm.py`
- `gradio_demo/plugin_task/api.py`

### Retrieval/search/rerank

- `gradio_demo/plugin_task/util.py`
- `README.md`

### Wiki/graph/entity model

- `README_ja.md`
- `README.md`

### Memory/update lifecycle

- `gradio_demo/doc_qa_task/doc_qa.py`

### Provenance/citation/evidence

- `gradio_demo/doc_qa_task/doc_qa.py`
- `gradio_demo/plugin_task/plugins.py`

### Evaluation/observability

- `quantization/eval_quant.py`
- `README_ja.md`
- `README_ko.md`
- `README_zh.md`
- `README.md`

### Agent/MCP/tool surface

- `README.md`

## Evidence lines

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| README_ja.md | 21 | 🤗 <a href="https://huggingface.co/OrionStarAI" target="_blank">HuggingFace メインページ</a> \| 🤖 <a href="https://modelscope.cn/organization/OrionStarAI" target="_blank">ModelScope メインページ</a><br>🎬 <a href="https://huggingfac |
| README_ja.md | 41 | - Orion-14B-Baseは、140億のパラメータを持つマルチランゲージの大規模モデルで、さまざまな言語に対応するために2.5兆トークンの多様なデータセットでトレーニングされました。このデータセットには、中文、英語、日本語、韓国語などが含まれています。このモデルは、多言語環境でのさまざまなタスクにおいて卓越した性能を発揮しています。Orion-14Bシリーズモデルは、主要なパフォーマンスベンチマークで優れた結果を示し、同じパラメー |
| README_ko.md | 21 | 🤗 <a href="https://huggingface.co/OrionStarAI" target="_blank">HuggingFace홈페이지</a> \| 🤖 <a href="https://modelscope.cn/organization/OrionStarAI" target="_blank">ModelScope홈페이지</a><br>🎬 <a href="https://huggingface.co/s |
| README_ko.md | 44 | (https://github.com/OrionStarAI/Orion/blob/master/doc/Orion14B_v3.pdf)。 |
| README_zh.md | 21 | 🤗 <a href="https://huggingface.co/OrionStarAI" target="_blank">HuggingFace Mainpage</a> \| 🤖 <a href="https://modelscope.cn/organization/OrionStarAI" target="_blank">ModelScope Mainpage</a><br>🎬 <a href="https://huggin |
| README_zh.md | 42 | - Orion-14B-Base是一个具有140亿参数的多语种大模型，该模型在一个包含2.5万亿token的多样化数据集上进行了训练，涵盖了中文、英语、日语、韩语等多种语言。在多语言环境下的一系列任务中展现出卓越的性能。在主流的公开基准评测中，Orion-14B系列模型表现优异，多项指标显著超越同等参数基本的其他模型。具体技术细节请参考[技术报告](https://arxiv.org/pdf/2401.12246.pdf)。 |
| README.md | 21 | 🤗 <a href="https://huggingface.co/OrionStarAI" target="_blank">HuggingFace Mainpage</a> \| 🤖 <a href="https://modelscope.cn/organization/OrionStarAI" target="_blank">ModelScope Mainpage</a>\| 🧰 <a href="https://openxlab |
| README.md | 41 | - Orion-14B series models are open-source multilingual large language models trained from scratch by OrionStarAI. The base model is trained on 2.5T multilingual corpus, including Chinese, English, Japanese, Korean, etc, |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| gradio_demo/common/call_llm.py | 52 | chunk = json.loads(line) |
| gradio_demo/common/call_llm.py | 54 | yield chunk["choices"][0]["delta"].get("content", "") |
| gradio_demo/plugin_task/api.py | 163 | for chunk in generate_chat(message, chat_history, PLUGIN_ENDPOINT): |
| gradio_demo/plugin_task/api.py | 164 | yield session, *chunk |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| gradio_demo/plugin_task/util.py | 21 | match = re.search(regex, text, re.DOTALL) |
| README.md | 64 | - **Orion-14B-Chat-RAG:** A chat-model fine-tuned on a custom retrieval augmented generation dataset, achieving superior performance in retrieval augmented generation tasks. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| README_ja.md | 341 | - モデルは [【Orion-14B シリーズ】 Models Community License Agreement](./ModelsCommunityLicenseAgreement)に従ってください。 |
| README.md | 62 | - **Orion-14B-Chat:** A chat-model fine-tuned on a high-quality corpus aims to provide an excellence interactive experience for users in the large model community. |
| README.md | 349 | Community use of the Orion-14B series models |
| README.md | 351 | - For model, please comply with [【Orion-14B Series】 Models Community License Agreement](./ModelsCommunityLicenseAgreement) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| gradio_demo/doc_qa_task/doc_qa.py | 168 | cache = "" |
| gradio_demo/doc_qa_task/doc_qa.py | 171 | if "[" in character or cache: |
| gradio_demo/doc_qa_task/doc_qa.py | 172 | cache += character |
| gradio_demo/doc_qa_task/doc_qa.py | 177 | if cache: |
| gradio_demo/doc_qa_task/doc_qa.py | 178 | source_ids = re.findall(r"\[\[(.*?)\]\]", cache) |
| gradio_demo/doc_qa_task/doc_qa.py | 182 | cache = cache.replace(source_id, origin_source_id) |
| gradio_demo/doc_qa_task/doc_qa.py | 184 | history[-1][1] += cache |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| gradio_demo/doc_qa_task/doc_qa.py | 31 | return """["Source_id": {doc_id},"Content": "{page_content}"]""" |
| gradio_demo/doc_qa_task/doc_qa.py | 122 | citation_prompt = "如果你给出的答案里引用了参考资料中的内容，请在答案的结尾处添加你引用的Source_id，引用的Source_id值来自于参考资料中，并用两个方括号括起来。示例：[[d97b811489b73f46c8d2cb1bc888dbbe]]、[[b6be48868de736b90363d001c092c019]]" |
| gradio_demo/doc_qa_task/doc_qa.py | 157 | source_id = hashlib.md5(str(uuid.uuid4()).encode("utf-8")).hexdigest() |
| gradio_demo/doc_qa_task/doc_qa.py | 158 | source_id_map[source_id] = row["文档片段名称"] |
| gradio_demo/doc_qa_task/doc_qa.py | 159 | context += document_prompt_template().format(doc_id=source_id, page_content=row["文档片段内容"]) + "\n\n" |
| gradio_demo/doc_qa_task/doc_qa.py | 180 | for source_id in source_ids: |
| gradio_demo/doc_qa_task/doc_qa.py | 181 | origin_source_id = source_id_map.get(source_id, source_id) |
| gradio_demo/doc_qa_task/doc_qa.py | 182 | cache = cache.replace(source_id, origin_source_id) |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| quantization/eval_quant.py | 25 | .eval() |
| README_ja.md | 33 | - [🔖 モデルベンチマーク](#model-benchmark) |
| README_ja.md | 87 | <a name="model-benchmark"></a><br> |
| README_ja.md | 92 | \| モデル \| C-Eval \| CMMLU \| MMLU \| AGIEval \| Gaokao \| BBH \| |
| README_ja.md | 215 | \| モデル\|サイズ(GB) \| 推論速度（トークン/秒） \|C-Eval\|CMMLU\|MMLU\|RACE\|HellaSwag\| |
| README_ko.md | 33 | - [🔖 평가결과](#model-benchmark) |
| README_ko.md | 89 | <a name="model-benchmark"></a><br> |
| README_ko.md | 95 | \| 모델 명칭 \| C-Eval \| CMMLU \| MMLU \| AGIEval \| Gaokao \| BBH \| |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| README.md | 65 | - **Orion-14B-Chat-Plugin:** A chat-model specifically tailored for plugin and function calling tasks, ideal for agent-related scenarios where the LLM acts as a plugin and function call system. |
| README.md | 275 | python -m vllm.entrypoints.openai.api_server --model OrionStarAI/Orion-14B-Chat |
| README.md | 368 | **The core strengths of OrionStar lies in possessing end-to-end AI application capabilities,** including big data preprocessing, large model pretraining, fine-tuning, prompt engineering, agent, etc. With comprehensive en |

## Gap

- tests
- ci
