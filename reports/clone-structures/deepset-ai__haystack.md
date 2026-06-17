# deepset-ai/haystack 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/deepset-ai__haystack |
| remote | https://github.com/deepset-ai/haystack |
| HEAD | acbf725 (2026-06-12) build(deps): bump sharp from 0.34.5 to 0.35.0 in /docs-website (#11610) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 8383 |
| dirs | 844 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Table of Contents`, `Installation`, `Documentation`, `Features`, `Haystack Enterprise: Support & Platform`, `Telemetry`, `🖖 Community`, `Contributing to Haystack`, `Organizations using Haystack`

> <div align="center" <a href="https //haystack.deepset.ai/" <img src="https //raw.githubusercontent.com/deepset ai/haystack/main/images/banner.png" alt="Blue banner with the Haystack logo and the text ‘haystack by deepset – The Open Source AI Framework for Production Ready RAG & Agents’ surrounded by abstract icons representing search, documents, agents, pipelines, and cloud systems." </a CI/CD Docs Package Meta </div Haystack is an open source AI orchestration framework for building production ready LLM applications in Python. Design modular pipelines and agent workflows with explicit control over retrieval, routing, memory, and generation. Build scalable RAG systems, multimodal applications, semantic search, question answering, and autonomous agents, all in a transparent architecture that lets you experiment, customize deeply, and deploy with confidence. Table of Contents Installation D

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| AGENTS.md | file |
| CITATION.cff | file |
| CLAUDE.md | file |
| code_of_conduct.txt | file |
| CONTRIBUTING.md | file |
| docker | dir |
| docs-website | dir |
| e2e | dir |
| examples | dir |
| haystack | dir |
| images | dir |
| LICENSE | file |
| license-header.txt | file |
| licenserc.toml | file |
| pydoc | dir |
| pyproject.toml | file |
| README.md | file |
| releasenotes | dir |
| scripts | dir |
| SECURITY.md | file |
| test | dir |
| VERSION.txt | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs-website/ | 6603 |
| releasenotes/ | 1062 |
| test/ | 309 |
| haystack/ | 288 |
| .github/ | 46 |
| pydoc/ | 33 |
| e2e/ | 16 |
| (root) | 14 |
| images/ | 6 |
| docker/ | 3 |
| scripts/ | 2 |
| examples/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| examples/ | 1 | preferred |
| test/ | 309 | preferred |
| scripts/ | 2 | preferred |
| docs-website/ | 6603 | large |
| docs-website/versioned_docs/ | 4419 | large |
| docs-website/reference_versioned_docs/ | 1526 | large |
| releasenotes/ | 1062 | large |
| releasenotes/notes/ | 1061 | large |
| docs-website/docs/ | 399 | large |
| docs-website/versioned_docs/version-2.30/ | 399 | large |
| docs-website/versioned_docs/version-2.29/ | 382 | large |
| docs-website/versioned_docs/version-2.28/ | 362 | large |
| docs-website/versioned_docs/version-2.27/ | 347 | large |
| docs-website/versioned_docs/version-2.26/ | 345 | large |
| docs-website/versioned_docs/version-2.25/ | 340 | large |
| docs-website/versioned_docs/version-2.24/ | 331 | large |
| docs-website/versioned_docs/version-2.23/ | 327 | large |
| docs-website/versioned_docs/version-2.22/ | 326 | large |
| docs-website/versioned_docs/version-2.21/ | 324 | large |
| docs-website/versioned_docs/version-2.20/ | 320 | large |
| docs-website/docs/pipeline-components/ | 311 | large |
| docs-website/versioned_docs/version-2.19/ | 311 | large |
| docs-website/versioned_docs/version-2.18/ | 305 | large |
| haystack/ | 288 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docs-website/api/tsconfig.json`
- `docs-website/package.json`
- `pyproject.toml`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs-website/package.json | haystack-docs-website | docusaurus, start, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids, update-next-version, create-version, vercel:dev, generate-llms-txt | @docusaurus/core, @docusaurus/faster, @docusaurus/plugin-content-docs, @docusaurus/plugin-ideal-image, @docusaurus/plugin-client-redirects, @docusaurus/preset-classic, @mdx-js/react, @types/turndown, @vercel/node, clsx, docusaurus-plugin-generate-llms-txt, prism-react-renderer, react, react-dom |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | haystack-ai | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docker/README.md`
- `docs-website/CONTRIBUTING.md`
- `docs-website/README.md`
- `docs-website/docs/_templates/component-template.mdx`
- `docs-website/docs/_templates/document-store-template.mdx`
- `docs-website/docs/concepts/agents.mdx`
- `docs-website/docs/concepts/agents/multi-agent-systems.mdx`
- `docs-website/docs/concepts/components.mdx`
- `docs-website/docs/concepts/components/custom-components.mdx`
- `docs-website/docs/concepts/components/supercomponents.mdx`
- `docs-website/docs/concepts/concepts-overview.mdx`
- `docs-website/docs/concepts/data-classes.mdx`
- `docs-website/docs/concepts/data-classes/chatmessage.mdx`
- `docs-website/docs/concepts/data-classes/filecontent.mdx`
- `docs-website/docs/concepts/device-management.mdx`
- `docs-website/docs/concepts/document-store.mdx`
- `docs-website/docs/concepts/document-store/choosing-a-document-store.mdx`
- `docs-website/docs/concepts/document-store/creating-custom-document-stores.mdx`
- `docs-website/docs/concepts/experimental-package.mdx`
- `docs-website/docs/concepts/integrations.mdx`
- `docs-website/docs/concepts/jinja-templates.mdx`
- `docs-website/docs/concepts/metadata-filtering.mdx`
- `docs-website/docs/concepts/pipelines.mdx`
- `docs-website/docs/concepts/pipelines/asyncpipeline.mdx`
- `docs-website/docs/concepts/pipelines/creating-pipelines.mdx`
- `docs-website/docs/concepts/pipelines/debugging-pipelines.mdx`
- `docs-website/docs/concepts/pipelines/pipeline-breakpoints.mdx`
- `docs-website/docs/concepts/pipelines/pipeline-loops.mdx`
- `docs-website/docs/concepts/pipelines/serialization.mdx`
- `docs-website/docs/concepts/pipelines/smart-pipeline-connections.mdx`
- `docs-website/docs/concepts/pipelines/visualizing-pipelines.mdx`
- `docs-website/docs/concepts/secret-management.mdx`
- `docs-website/docs/development/deployment.mdx`
- `docs-website/docs/development/deployment/docker.mdx`
- `docs-website/docs/development/deployment/kubernetes.mdx`
- `docs-website/docs/development/deployment/openshift.mdx`
- `docs-website/docs/development/enabling-gpu-acceleration.mdx`
- `docs-website/docs/development/external-integrations-development.mdx`
- `docs-website/docs/development/hayhooks.mdx`
- `docs-website/docs/development/logging.mdx`
- `docs-website/docs/development/tracing.mdx`
- `docs-website/docs/document-stores/alloydbdocumentstore.mdx`
- `docs-website/docs/document-stores/arcadedbdocumentstore.mdx`
- `docs-website/docs/document-stores/astradocumentstore.mdx`
- `docs-website/docs/document-stores/azureaisearchdocumentstore.mdx`
- `docs-website/docs/document-stores/chromadocumentstore.mdx`
- `docs-website/docs/document-stores/elasticsearch-document-store.mdx`
- `docs-website/docs/document-stores/faissdocumentstore.mdx`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `docs-website/api/mcp.ts`
- `docs-website/docs/overview/docs-mcp-server.mdx`
- `docs-website/docs/tools/mcptool.mdx`
- `docs-website/docs/tools/mcptoolset.mdx`
- `docs-website/reference/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.18/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.19/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.20/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.21/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.22/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.23/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.24/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.25/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.26/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.27/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.28/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.29/integrations-api/mcp.md`
- `docs-website/reference_versioned_docs/version-2.30/integrations-api/mcp.md`
- `docs-website/versioned_docs/version-2.18/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.18/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.19/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.19/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.20/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.20/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.21/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.21/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.22/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.22/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.23/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.23/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.24/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.24/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.25/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.25/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.26/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.26/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.27/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.27/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.28/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.28/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.29/overview/docs-mcp-server.mdx`
- `docs-website/versioned_docs/version-2.29/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.29/tools/mcptoolset.mdx`
- `docs-website/versioned_docs/version-2.30/overview/docs-mcp-server.mdx`
- `docs-website/versioned_docs/version-2.30/tools/mcptool.mdx`
- `docs-website/versioned_docs/version-2.30/tools/mcptoolset.mdx`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/__init__.py`
- `test/components/agents/test_agent.py`
- `test/components/agents/test_agent_breakpoints.py`
- `test/components/agents/test_agent_breakpoints_inside_pipeline.py`
- `test/components/agents/test_agent_hitl.py`
- `test/components/agents/test_state_class.py`
- `test/components/audio/__init__.py`
- `test/components/audio/test_whisper_local.py`
- `test/components/audio/test_whisper_remote.py`
- `test/components/builders/__init__.py`
- `test/components/builders/test_answer_builder.py`
- `test/components/builders/test_chat_prompt_builder.py`
- `test/components/builders/test_prompt_builder.py`
- `test/components/caching/test_cache_checker_async.py`
- `test/components/caching/test_url_cache_checker.py`
- `test/components/classifiers/test_document_language_classifier.py`
- `test/components/classifiers/test_zero_shot_document_classifier.py`
- `test/components/connectors/test_openapi_connector.py`
- `test/components/connectors/test_openapi_service.py`
- `test/components/converters/__init__.py`
- `test/components/converters/image/__init__.py`
- `test/components/converters/image/test_document_to_image_content.py`
- `test/components/converters/image/test_file_to_document.py`
- `test/components/converters/image/test_file_to_image.py`
- `test/components/converters/image/test_image_utils.py`
- `test/components/converters/image/test_pdf_to_image.py`
- `test/components/converters/test_azure_ocr_doc_converter.py`
- `test/components/converters/test_csv_to_document.py`
- `test/components/converters/test_docx_file_to_document.py`
- `test/components/converters/test_file_to_file_content.py`
- `test/components/converters/test_html_to_document.py`
- `test/components/converters/test_json.py`
- `test/components/converters/test_markdown_to_document.py`
- `test/components/converters/test_msg_to_document.py`
- `test/components/converters/test_multi_file_converter.py`
- `test/components/converters/test_openapi_functions.py`
- `test/components/converters/test_output_adapter.py`
- `test/components/converters/test_pdfminer_to_document.py`
- `test/components/converters/test_pptx_to_document.py`
- `test/components/converters/test_pypdf_to_document.py`
- `test/components/converters/test_textfile_to_document.py`
- `test/components/converters/test_tika_doc_converter.py`
- `test/components/converters/test_utils.py`
- `test/components/converters/test_xlsx_to_document.py`
- `test/components/embedders/__init__.py`
- `test/components/embedders/image/test_sentence_transformers_doc_image_embedder.py`
- `test/components/embedders/test_azure_document_embedder.py`
- `test/components/embedders/test_azure_text_embedder.py`
- `test/components/embedders/test_hugging_face_api_document_embedder.py`
- `test/components/embedders/test_hugging_face_api_text_embedder.py`
- `test/components/embedders/test_openai_document_embedder.py`
- `test/components/embedders/test_openai_text_embedder.py`
- `test/components/embedders/test_sentence_transformers_document_embedder.py`
- `test/components/embedders/test_sentence_transformers_embedding_backend.py`
- `test/components/embedders/test_sentence_transformers_sparse_document_embedder.py`
- `test/components/embedders/test_sentence_transformers_sparse_embedding_backend.py`
- `test/components/embedders/test_sentence_transformers_sparse_text_embedder.py`
- `test/components/embedders/test_sentence_transformers_text_embedder.py`
- `test/components/evaluators/__init__.py`
- `test/components/evaluators/test_answer_exact_match.py`
- `test/components/evaluators/test_context_relevance_evaluator.py`
- `test/components/evaluators/test_document_map.py`
- `test/components/evaluators/test_document_mrr.py`
- `test/components/evaluators/test_document_ndcg.py`
- `test/components/evaluators/test_document_recall.py`
- `test/components/evaluators/test_faithfulness_evaluator.py`
- `test/components/evaluators/test_llm_evaluator.py`
- `test/components/evaluators/test_sas_evaluator.py`
- `test/components/extractors/__init__.py`
- `test/components/extractors/image/__init__.py`
- `test/components/extractors/image/test_llm_document_content_extractor.py`
- `test/components/extractors/test_llm_metadata_extractor.py`
- `test/components/extractors/test_named_entity_extractor.py`
- `test/components/extractors/test_regex_text_extractor.py`
- `test/components/fetchers/__init__.py`
- `test/components/fetchers/test_link_content_fetcher.py`
- `test/components/generators/__init__.py`
- `test/components/generators/chat/__init__.py`
- `test/components/generators/chat/test_azure.py`
- `test/components/generators/chat/test_azure_responses.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/auto_approve_api_ref_sync.yml`
- `.github/workflows/branch_off.yml`
- `.github/workflows/check_api_ref.yml`
- `.github/workflows/claude-code-review.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/coverage_comment.yml`
- `.github/workflows/docker_release.yml`
- `.github/workflows/docs-website-test-docs-snippets.yml`
- `.github/workflows/docs_search_sync.yml`
- `.github/workflows/docstring_labeler.yml`
- `.github/workflows/docstring_labeler_apply.yml`
- `.github/workflows/docusaurus_sync.yml`
- `.github/workflows/e2e.yml`
- `.github/workflows/github_release.yml`
- `.github/workflows/labeler.yml`
- `.github/workflows/license_compliance.yml`
- `.github/workflows/nightly_testpypi_release.yml`
- `.github/workflows/project.yml`
- `.github/workflows/promote_unstable_docs.yml`
- `.github/workflows/push_release_notes_to_website.yml`
- `.github/workflows/pypi_release.yml`
- `.github/workflows/release.yml`
- `.github/workflows/release_notes.yml`
- `.github/workflows/release_notes_skipper.yml`
- `.github/workflows/slow.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/tests.yml`
- `.github/workflows/v3_pypi_release.yml`
- `.github/workflows/workflows_linting.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .mdx | 4833 |
| .md | 1646 |
| .yaml | 1064 |
| .py | 567 |
| .yml | 65 |
| .json | 39 |
| .png | 38 |
| .svg | 34 |
| .js | 14 |
| .txt | 13 |
| .docx | 6 |
| .pdf | 6 |
| .tsx | 6 |
| .css | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `examples/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `docs-website/ 내부 책임 분리`
- `docs-website/versioned_docs/ 내부 책임 분리`
- `docs-website/api/tsconfig.json 실행 스크립트와 패키지 경계`
- `docs-website/package.json 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

