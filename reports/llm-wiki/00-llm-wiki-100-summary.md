# LLM 위키 / AI 지식베이스 오픈소스 100개 구조 분석 총괄

생성일: 2026-06-17T22:56:52.162Z

## 검증 범위

- target group filter: `llm-wiki-100`
- 실제 로컬 클론: 100개
- 데이터 파일에 명시된 target: 100개
- target 중 로컬 클론 누락: 0개
- 레포별 상세 보고서: `reports/llm-wiki/repositories/*.md`
- 구조 데이터: `data/llm-wiki-structure-analysis-100.json`

## 로컬 클론 누락 target

명시 target 기준 누락 없음.

## 그룹별 분포

| group | count |
| --- | --- |
| adjacent-tech-50 | 4 |
| llm-wiki-100 | 100 |
| previous-clone-inventory-107 | 4 |

## 스택/런타임 분포

| stack | count |
| --- | --- |
| Python | 66 |
| Node/TypeScript/JavaScript | 47 |
| unknown/mixed | 15 |
| Rust | 14 |
| Go | 9 |

## 전체 레포 구조 요약

| repo | group | files | stack | manifests | specs | agents | report |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1517005260/graph-rag-agent | llm-wiki-100 | 274 | Python | requirements.txt | 0 | 2 | reports/llm-wiki/repositories/1517005260__graph-rag-agent.md |
| AgriciDaniel/claude-obsidian | llm-wiki-100 | 211 | unknown/mixed |  | 6 | 38 | reports/llm-wiki/repositories/AgriciDaniel__claude-obsidian.md |
| Ar9av/obsidian-wiki | llm-wiki-100 | 89 | Python | pyproject.toml | 1 | 67 | reports/llm-wiki/repositories/Ar9av__obsidian-wiki.md |
| DEEP-PolyU/Awesome-GraphRAG | llm-wiki-100 | 7 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/DEEP-PolyU__Awesome-GraphRAG.md |
| Egonex-AI/Understand-Anything | llm-wiki-100 | 419 | Node/TypeScript/JavaScript | homepage/package.json, homepage/tsconfig.json, package.json, pnpm-lock.yaml | 71 | 67 | reports/llm-wiki/repositories/Egonex-AI__Understand-Anything.md |
| FalkorDB/FalkorDB | llm-wiki-100 | 6846 | Python, Rust | Cargo.toml, demo/imdb/requirements.txt, demo/social/requirements.txt, deps/GraphBLAS/cpu_features/.github/workflows/Dockerfile | 30 | 1 | reports/llm-wiki/repositories/FalkorDB__FalkorDB.md |
| GiovanniPasq/agentic-rag-for-dummies | llm-wiki-100 | 39 | Python | project/Dockerfile, requirements.txt | 0 | 0 | reports/llm-wiki/repositories/GiovanniPasq__agentic-rag-for-dummies.md |
| HKUDS/LightRAG | adjacent-tech-50, llm-wiki-100, previous-clone-inventory-107 | 679 | Node/TypeScript/JavaScript, Python | Dockerfile, docker-compose.yml, lightrag/tools/lightrag_visualizer/requirements.txt, lightrag_webui/bun.lock | 21 | 4 | reports/llm-wiki/repositories/HKUDS__LightRAG.md |
| HKUDS/VideoRAG | llm-wiki-100 | 118 | Node/TypeScript/JavaScript | Vimo-desktop/package.json, Vimo-desktop/pnpm-lock.yaml, Vimo-desktop/tsconfig.json | 0 | 0 | reports/llm-wiki/repositories/HKUDS__VideoRAG.md |
| HKUST-KnowComp/AutoSchemaKG | llm-wiki-100 | 1099 | Python | EvaluateGeneralTask/lm-evaluation-harness/pyproject.toml, EvaluateGeneralTask/lm-evaluation-harness/requirements.txt, pyproject.toml | 2 | 0 | reports/llm-wiki/repositories/HKUST-KnowComp__AutoSchemaKG.md |
| IAAR-Shanghai/Awesome-AI-Memory | llm-wiki-100 | 8 | unknown/mixed |  | 0 | 1 | reports/llm-wiki/repositories/IAAR-Shanghai__Awesome-AI-Memory.md |
| InternLM/HuixiangDou | llm-wiki-100 | 407 | Node/TypeScript/JavaScript, Python | pyproject.toml, requirements.txt, uv.lock, web/front-end/package.json | 0 | 0 | reports/llm-wiki/repositories/InternLM__HuixiangDou.md |
| KalyanKS-NLP/rag-zero-to-hero-guide | llm-wiki-100 | 32 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md |
| LearningCircuit/local-deep-research | llm-wiki-100 | 3020 | Node/TypeScript/JavaScript, Python | Dockerfile, docker-compose.yml, examples/elasticsearch/docker-compose.yml, package.json | 53 | 33 | reports/llm-wiki/repositories/LearningCircuit__local-deep-research.md |
| MODSetter/SurfSense | llm-wiki-100 | 3520 | Node/TypeScript/JavaScript, Python | docker/docker-compose.yml, package.json, surfsense_backend/Dockerfile, surfsense_backend/pyproject.toml | 140 | 100 | reports/llm-wiki/repositories/MODSetter__SurfSense.md |
| Marker-Inc-Korea/AutoRAG | llm-wiki-100 | 696 | Python | docs/requirements.txt, pyproject.toml, uv.lock | 0 | 1 | reports/llm-wiki/repositories/Marker-Inc-Korea__AutoRAG.md |
| MemTensor/MemOS | llm-wiki-100 | 1794 | Node/TypeScript/JavaScript, Python | Dockerfile, apps/MemOS-Cloud-OpenClaw-Plugin/package.json, apps/memos-local-openclaw/package.json, apps/memos-local-openclaw/tsconfig.json | 60 | 100 | reports/llm-wiki/repositories/MemTensor__MemOS.md |
| NevaMind-AI/memU | llm-wiki-100 | 240 | Python, Rust | Cargo.toml, examples/sealos-assistant/requirements.txt, pyproject.toml, uv.lock | 0 | 3 | reports/llm-wiki/repositories/NevaMind-AI__memU.md |
| NirDiamant/GenAI_Agents | llm-wiki-100 | 163 | Python | requirements.txt | 0 | 6 | reports/llm-wiki/repositories/NirDiamant__GenAI_Agents.md |
| NirDiamant/RAG_Techniques | llm-wiki-100 | 122 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/NirDiamant__RAG_Techniques.md |
| NirDiamant/agents-towards-production | llm-wiki-100 | 214 | Python | tutorials/agent-RAG-with-Contextual/requirements.txt, tutorials/agent-security-apex/requirements.txt, tutorials/agent-security-with-llamafirewall/requirements.txt, tutorials/agent-with-streamlit-ui/requirements.txt | 0 | 6 | reports/llm-wiki/repositories/NirDiamant__agents-towards-production.md |
| OSU-NLP-Group/HippoRAG | llm-wiki-100 | 86 | Python | requirements.txt | 8 | 0 | reports/llm-wiki/repositories/OSU-NLP-Group__HippoRAG.md |
| OpenSPG/KAG | llm-wiki-100 | 1211 | Python | kag/examples/baidu_map_mcp/pyproject.toml, kag/examples/baidu_map_mcp/uv.lock, requirements.txt | 16 | 29 | reports/llm-wiki/repositories/OpenSPG__KAG.md |
| OrionStarAI/Orion | llm-wiki-100 | 48 | Python | gradio_demo/requirements.txt | 0 | 0 | reports/llm-wiki/repositories/OrionStarAI__Orion.md |
| PaddlePaddle/PaddleOCR | llm-wiki-100 | 2488 | Node/TypeScript/JavaScript, Python, Go | api_sdk/go/go.mod, api_sdk/typescript/package.json, api_sdk/typescript/tsconfig.json, deploy/avh/requirements.txt | 0 | 51 | reports/llm-wiki/repositories/PaddlePaddle__PaddleOCR.md |
| PleasePrompto/notebooklm-mcp | llm-wiki-100 | 50 | Node/TypeScript/JavaScript | package.json, tsconfig.json | 0 | 0 | reports/llm-wiki/repositories/PleasePrompto__notebooklm-mcp.md |
| SaiAkhil066/CORTEX-AI-SUPER-RAG | llm-wiki-100 | 18 | Python | Dockerfile, docker-compose.yml, requirements.txt | 0 | 0 | reports/llm-wiki/repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md |
| SamurAIGPT/llm-wiki-agent | llm-wiki-100 | 28 | Python | pyproject.toml, requirements.txt | 4 | 7 | reports/llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md |
| Shubhamsaboo/awesome-llm-apps | llm-wiki-100 | 1751 | Node/TypeScript/JavaScript, Python | advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/requirements.txt, advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/requirements.txt, advanced_ai_agents/autonomous_game_playing_agent_apps/ai_tic_tac_toe_agent/requirements.txt, advanced_ai_agents/multi_agent_apps/agent_teams/ag2_adaptive_research_team/requirements.txt | 52 | 100 | reports/llm-wiki/repositories/Shubhamsaboo__awesome-llm-apps.md |
| StarTrail-org/LEANN | llm-wiki-100 | 279 | Python | docker/Dockerfile, packages/leann-backend-diskann/pyproject.toml, packages/leann-backend-flashlib-ivf/pyproject.toml, packages/leann-backend-flashlib/pyproject.toml | 0 | 15 | reports/llm-wiki/repositories/StarTrail-org__LEANN.md |
| Tencent/WeKnora | llm-wiki-100 | 2045 | Node/TypeScript/JavaScript, Python, Go | cli/go.mod, client/go.mod, docker-compose.yml, docreader/pyproject.toml | 26 | 92 | reports/llm-wiki/repositories/Tencent__WeKnora.md |
| The-Pocket/PocketFlow | llm-wiki-100 | 529 | Python | cookbook/pocketflow-a2a/requirements.txt, cookbook/pocketflow-agent-skills/requirements.txt, cookbook/pocketflow-agent/requirements.txt, cookbook/pocketflow-agentic-rag/requirements.txt | 13 | 33 | reports/llm-wiki/repositories/The-Pocket__PocketFlow.md |
| VectifyAI/OpenKB | llm-wiki-100 | 104 | Python | pyproject.toml, uv.lock | 0 | 27 | reports/llm-wiki/repositories/VectifyAI__OpenKB.md |
| VectifyAI/PageIndex | llm-wiki-100 | 53 | Python | requirements.txt | 1 | 1 | reports/llm-wiki/repositories/VectifyAI__PageIndex.md |
| VoltAgent/voltagent | llm-wiki-100 | 2871 | Node/TypeScript/JavaScript, Go | archive/deprecated-providers/anthropic-ai/package.json, archive/deprecated-providers/anthropic-ai/tsconfig.json, archive/deprecated-providers/google-ai/package.json, archive/deprecated-providers/google-ai/tsconfig.json | 39 | 100 | reports/llm-wiki/repositories/VoltAgent__voltagent.md |
| WangRongsheng/awesome-LLM-resources | llm-wiki-100 | 20 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/WangRongsheng__awesome-LLM-resources.md |
| abhigyanpatwari/GitNexus | llm-wiki-100 | 3936 | Node/TypeScript/JavaScript, Python, Rust, Go | .devcontainer/Dockerfile, .github/scripts/triage/requirements.txt, eval/pyproject.toml, eval/uv.lock | 41 | 100 | reports/llm-wiki/repositories/abhigyanpatwari__GitNexus.md |
| apecloud/ApeRAG | llm-wiki-100 | 1196 | Node/TypeScript/JavaScript, Python | .github/utils/requirements.txt, Dockerfile, docker-compose.yml, pyproject.toml | 30 | 27 | reports/llm-wiki/repositories/apecloud__ApeRAG.md |
| arc53/DocsGPT | llm-wiki-100 | 1381 | Node/TypeScript/JavaScript, Python | .devcontainer/Dockerfile, application/Dockerfile, application/requirements.txt, docs/next.config.js | 38 | 12 | reports/llm-wiki/repositories/arc53__DocsGPT.md |
| aristoapp/awesome-second-brain | llm-wiki-100 | 103 | unknown/mixed |  | 3 | 0 | reports/llm-wiki/repositories/aristoapp__awesome-second-brain.md |
| arthurpanhku/DocSentinel | llm-wiki-100 | 136 | Node/TypeScript/JavaScript, Python | Dockerfile, docker-compose.yml, frontend/package.json, frontend/tsconfig.json | 3 | 12 | reports/llm-wiki/repositories/arthurpanhku__DocSentinel.md |
| axoviq-ai/synthadoc | llm-wiki-100 | 378 | Node/TypeScript/JavaScript, Python | obsidian-plugin/package.json, obsidian-plugin/tsconfig.json, pyproject.toml, web-ui/package.json | 42 | 46 | reports/llm-wiki/repositories/axoviq-ai__synthadoc.md |
| benmaster82/Kwipu | llm-wiki-100 | 19 | Python | requirements.txt | 0 | 1 | reports/llm-wiki/repositories/benmaster82__Kwipu.md |
| bzsanti/oxidizePdf | llm-wiki-100 | 1662 | Rust | Cargo.toml, benches/lopdf_comparison/Cargo.toml, dev-tools/iso-curator/Cargo.toml, dev-tools/pipeline-profiler/Cargo.toml | 24 | 0 | reports/llm-wiki/repositories/bzsanti__oxidizePdf.md |
| chatchat-space/Langchain-Chatchat | llm-wiki-100 | 523 | Python | docker/Dockerfile, libs/chatchat-server/pyproject.toml, libs/python-sdk/pyproject.toml, pyproject.toml | 0 | 12 | reports/llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md |
| datawhalechina/tiny-universe | llm-wiki-100 | 183 | Python | content/TinyAgent/requirements.txt, content/TinyDiffusion/ddpm/requirements.txt, content/TinyEval/requirements.txt, content/TinyIMGRAG/packages/CLIP-main/requirements.txt | 3 | 0 | reports/llm-wiki/repositories/datawhalechina__tiny-universe.md |
| enescingoz/awesome-n8n-templates | llm-wiki-100 | 352 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/enescingoz__awesome-n8n-templates.md |
| eugeniughelbur/obsidian-second-brain | llm-wiki-100 | 161 | Python | pyproject.toml, uv.lock | 0 | 1 | reports/llm-wiki/repositories/eugeniughelbur__obsidian-second-brain.md |
| getzep/graphiti | llm-wiki-100 | 352 | Python | Dockerfile, docker-compose.yml, examples/opentelemetry/pyproject.toml, examples/opentelemetry/uv.lock | 1 | 61 | reports/llm-wiki/repositories/getzep__graphiti.md |
| green-dalii/obsidian-llm-wiki | llm-wiki-100 | 152 | Node/TypeScript/JavaScript | package.json, pnpm-lock.yaml, tsconfig.json | 0 | 1 | reports/llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md |
| hjhun/llm-wiki | llm-wiki-100 | 349 | Node/TypeScript/JavaScript, Rust | cli-rs/Cargo.toml, webapp/package.json, webapp/tsconfig.json | 21 | 26 | reports/llm-wiki/repositories/hjhun__llm-wiki.md |
| iammonth1997/paperwiki-research-compiler | llm-wiki-100 | 4 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/iammonth1997__paperwiki-research-compiler.md |
| iikarus/Dragon-Brain | llm-wiki-100 | 352 | Python | Dockerfile, docker-compose.yml, pyproject.toml | 0 | 7 | reports/llm-wiki/repositories/iikarus__Dragon-Brain.md |
| infiniflow/ragflow | adjacent-tech-50, llm-wiki-100, previous-clone-inventory-107 | 3628 | Node/TypeScript/JavaScript, Python, Go | Dockerfile, admin/client/pyproject.toml, admin/client/uv.lock, agent/sandbox/docker-compose.yml | 86 | 100 | reports/llm-wiki/repositories/infiniflow__ragflow.md |
| jee3m/augmentative-knowledge-hooks | llm-wiki-100 | 4 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/jee3m__augmentative-knowledge-hooks.md |
| jegly/Box | llm-wiki-100 | 591 | unknown/mixed |  | 22 | 100 | reports/llm-wiki/repositories/jegly__Box.md |
| joungminsung/OpenDocuments | llm-wiki-100 | 454 | Node/TypeScript/JavaScript | Dockerfile, docker-compose.yml, docs-site/package.json, package.json | 22 | 3 | reports/llm-wiki/repositories/joungminsung__OpenDocuments.md |
| khoj-ai/khoj | adjacent-tech-50, llm-wiki-100, previous-clone-inventory-107 | 701 | Node/TypeScript/JavaScript, Python | .devcontainer/Dockerfile, Dockerfile, docker-compose.yml, documentation/package.json | 6 | 3 | reports/llm-wiki/repositories/khoj-ai__khoj.md |
| kkollsga/kglite | llm-wiki-100 | 896 | Python, Rust | Cargo.toml, benchmarks/graphgen/Cargo.toml, crates/kglite-bolt-server/Cargo.toml, crates/kglite-c/Cargo.toml | 8 | 35 | reports/llm-wiki/repositories/kkollsga__kglite.md |
| kreuzberg-dev/kreuzberg | llm-wiki-100 | 6472 | Node/TypeScript/JavaScript, Python, Rust, Go | Cargo.toml, crates/kreuzberg-candle-ocr/Cargo.toml, crates/kreuzberg-cli/Cargo.toml, crates/kreuzberg-ffi/Cargo.toml | 25 | 62 | reports/llm-wiki/repositories/kreuzberg-dev__kreuzberg.md |
| labring/FastGPT | llm-wiki-100 | 5030 | Node/TypeScript/JavaScript, Python, Rust | deploy/dev/docker-compose.yml, document/Dockerfile, document/package.json, document/tsconfig.json | 93 | 100 | reports/llm-wiki/repositories/labring__FastGPT.md |
| langbot-app/LangBot | llm-wiki-100 | 1010 | Node/TypeScript/JavaScript, Python | Dockerfile, pyproject.toml, uv.lock, web/package.json | 20 | 34 | reports/llm-wiki/repositories/langbot-app__LangBot.md |
| langroid/langroid | llm-wiki-100 | 723 | Python | Dockerfile, examples/docqa/streamlit-app/requirements.txt, examples/langdb/requirements.txt, examples/portkey/requirements.txt | 9 | 36 | reports/llm-wiki/repositories/langroid__langroid.md |
| linny006/rag-radar | llm-wiki-100 | 10 | Python | requirements.txt | 0 | 0 | reports/llm-wiki/repositories/linny006__rag-radar.md |
| llmware-ai/llmware | llm-wiki-100 | 546 | Python | llmware/requirements.txt, scripts/docker/Dockerfile, solutions/use_cases/lecture_tool/requirements.txt | 0 | 2 | reports/llm-wiki/repositories/llmware-ai__llmware.md |
| luhengshiwo/LLMForEverybody | llm-wiki-100 | 1245 | unknown/mixed |  | 0 | 2 | reports/llm-wiki/repositories/luhengshiwo__LLMForEverybody.md |
| marswangyang/personal-ai-memory | llm-wiki-100 | 101 | Node/TypeScript/JavaScript | package.json, pnpm-lock.yaml, tsconfig.json | 0 | 0 | reports/llm-wiki/repositories/marswangyang__personal-ai-memory.md |
| matevip/mateclaw | llm-wiki-100 | 2899 | Node/TypeScript/JavaScript | docker-compose.yml, docker/searxng/Dockerfile, mateclaw-server/Dockerfile, mateclaw-ui/package.json | 140 | 100 | reports/llm-wiki/repositories/matevip__mateclaw.md |
| memvid/memvid | llm-wiki-100 | 217 | Rust | Cargo.toml, docker/cli/Dockerfile, docker/core/Dockerfile, docker/core/docker-compose.yml | 0 | 1 | reports/llm-wiki/repositories/memvid__memvid.md |
| nanbingxyz/5ire | llm-wiki-100 | 478 | Node/TypeScript/JavaScript | package.json, tsconfig.json | 0 | 17 | reports/llm-wiki/repositories/nanbingxyz__5ire.md |
| nashsu/llm_wiki | llm-wiki-100 | 374 | Node/TypeScript/JavaScript, Rust | mcp-server/package.json, mcp-server/tsconfig.json, package.json, src-tauri/Cargo.toml | 13 | 9 | reports/llm-wiki/repositories/nashsu__llm_wiki.md |
| neo4j-labs/llm-graph-builder | llm-wiki-100 | 354 | Node/TypeScript/JavaScript, Python | backend/Dockerfile, backend/requirements.txt, cronjob/reset_daily_tokens/requirements.txt, cronjob/reset_monthly_tokens/requirements.txt | 0 | 0 | reports/llm-wiki/repositories/neo4j-labs__llm-graph-builder.md |
| neomjs/neo | llm-wiki-100 | 19492 | Node/TypeScript/JavaScript | ai/deploy/Dockerfile, ai/deploy/docker-compose.yml, ai/examples/cloud-deployment/minimal-external-workspace/package.json, package.json | 105 | 100 | reports/llm-wiki/repositories/neomjs__neo.md |
| neuml/txtai | llm-wiki-100 | 621 | Python | docker/api/Dockerfile, docker/aws/Dockerfile, docker/base/Dockerfile, docker/minimal/Dockerfile | 0 | 4 | reports/llm-wiki/repositories/neuml__txtai.md |
| ohbryt/bb-wiki | llm-wiki-100 | 28 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/ohbryt__bb-wiki.md |
| onlybooks/llm | llm-wiki-100 | 18 | unknown/mixed |  | 0 | 0 | reports/llm-wiki/repositories/onlybooks__llm.md |
| onyx-dot-app/onyx | llm-wiki-100 | 5453 | Node/TypeScript/JavaScript, Python, Rust, Go | .devcontainer/Dockerfile, backend/Dockerfile, backend/tests/integration/mock_services/mock_connector_server/Dockerfile, backend/uv.lock | 140 | 100 | reports/llm-wiki/repositories/onyx-dot-app__onyx.md |
| openai/chatgpt-retrieval-plugin | llm-wiki-100 | 122 | Python | Dockerfile, examples/docker/redis/docker-compose.yml, poetry.lock, pyproject.toml | 0 | 0 | reports/llm-wiki/repositories/openai__chatgpt-retrieval-plugin.md |
| opendatalab/MinerU-Document-Explorer | llm-wiki-100 | 191 | Node/TypeScript/JavaScript, Python | bun.lock, finetune/pyproject.toml, finetune/uv.lock, package.json | 0 | 17 | reports/llm-wiki/repositories/opendatalab__MinerU-Document-Explorer.md |
| opendataloader-project/opendataloader-pdf | llm-wiki-100 | 331 | Node/TypeScript/JavaScript, Python | examples/python/batch/requirements.txt, examples/python/rag/requirements.txt, node/opendataloader-pdf/package.json, node/opendataloader-pdf/pnpm-lock.yaml | 4 | 8 | reports/llm-wiki/repositories/opendataloader-project__opendataloader-pdf.md |
| otomata-tech/memento-core | llm-wiki-100 | 141 | Node/TypeScript/JavaScript | app/package.json, app/tsconfig.json, app/vite.config.ts, server/package.json | 1 | 4 | reports/llm-wiki/repositories/otomata-tech__memento-core.md |
| patchy631/ai-engineering-hub | llm-wiki-100 | 1432 | Node/TypeScript/JavaScript, Python | Multi-Agent-deep-researcher-mcp-windows-linux/pyproject.toml, Multi-Agent-deep-researcher-mcp-windows-linux/uv.lock, agent-with-mcp-memory/pyproject.toml, agent-with-mcp-memory/uv.lock | 83 | 100 | reports/llm-wiki/repositories/patchy631__ai-engineering-hub.md |
| pathwaycom/llm-app | llm-wiki-100 | 136 | Python | pyproject.toml, templates/adaptive_rag/Dockerfile, templates/adaptive_rag/requirements.txt, templates/document_indexing/Dockerfile | 0 | 17 | reports/llm-wiki/repositories/pathwaycom__llm-app.md |
| phonghhd/EvoNet-AI-Core | llm-wiki-100 | 79 | Python | docker-compose.yml, requirements.txt | 2 | 0 | reports/llm-wiki/repositories/phonghhd__EvoNet-AI-Core.md |
| raphaelmansuy/edgequake | llm-wiki-100 | 5009 | Node/TypeScript/JavaScript, Python, Rust, Go | .github/skills/doc-traceability-validator/scripts/requirements.txt, .github/skills/mcp-builder/templates/rust/Cargo.toml, .github/skills/mcp-builder/templates/ts/package.json, .github/skills/pdf-markdown-validator/scripts/requirements.txt | 140 | 92 | reports/llm-wiki/repositories/raphaelmansuy__edgequake.md |
| safishamsi/graphify | llm-wiki-100 | 582 | Python, Rust | Dockerfile, pyproject.toml, tests/fixtures/crate_a/Cargo.toml, tests/fixtures/crate_b/Cargo.toml | 105 | 100 | reports/llm-wiki/repositories/safishamsi__graphify.md |
| semantica-agi/semantica | llm-wiki-100 | 904 | Node/TypeScript/JavaScript, Python | Dockerfile, docker-compose.yml, explorer/package.json, explorer/tsconfig.json | 20 | 42 | reports/llm-wiki/repositories/semantica-agi__semantica.md |
| stanford-oval/WikiChat | llm-wiki-100 | 163 | unknown/mixed |  | 7 | 0 | reports/llm-wiki/repositories/stanford-oval__WikiChat.md |
| stanford-oval/storm | adjacent-tech-50, llm-wiki-100, previous-clone-inventory-107 | 74 | Python | frontend/demo_light/requirements.txt, requirements.txt | 0 | 0 | reports/llm-wiki/repositories/stanford-oval__storm.md |
| studyield/studyield | llm-wiki-100 | 404 | Node/TypeScript/JavaScript | backend/Dockerfile, backend/package.json, backend/tsconfig.json, docker-compose.yml | 0 | 0 | reports/llm-wiki/repositories/studyield__studyield.md |
| szczyglis-dev/py-gpt | llm-wiki-100 | 3086 | Node/TypeScript/JavaScript, Python | docs/requirements.txt, poetry.lock, pyproject.toml, requirements.txt | 1 | 6 | reports/llm-wiki/repositories/szczyglis-dev__py-gpt.md |
| tirth8205/code-review-graph | llm-wiki-100 | 287 | Node/TypeScript/JavaScript, Python | code-review-graph-vscode/package.json, code-review-graph-vscode/tsconfig.json, pyproject.toml, tests/fixtures/tsconfig.json | 0 | 15 | reports/llm-wiki/repositories/tirth8205__code-review-graph.md |
| tobi/qmd | llm-wiki-100 | 154 | Node/TypeScript/JavaScript, Python | bun.lock, finetune/pyproject.toml, finetune/uv.lock, package.json | 0 | 8 | reports/llm-wiki/repositories/tobi__qmd.md |
| xr843/fojin | llm-wiki-100 | 845 | Node/TypeScript/JavaScript, Python | backend/Dockerfile, backend/pyproject.toml, backend/requirements.txt, docker-compose.yml | 6 | 0 | reports/llm-wiki/repositories/xr843__fojin.md |
| xuiltul/animaworks | llm-wiki-100 | 2787 | Python | Dockerfile, demo/Dockerfile, demo/docker-compose.yml, docker-compose.yml | 111 | 100 | reports/llm-wiki/repositories/xuiltul__animaworks.md |
| yifanfeng97/Hyper-Extract | llm-wiki-100 | 449 | Python | pyproject.toml, uv.lock | 105 | 30 | reports/llm-wiki/repositories/yifanfeng97__Hyper-Extract.md |
| yusufkaraaslan/Skill_Seekers | llm-wiki-100 | 2985 | Node/TypeScript/JavaScript, Python | Dockerfile, api/requirements.txt, docker-compose.yml, examples/chroma-example/requirements.txt | 18 | 100 | reports/llm-wiki/repositories/yusufkaraaslan__Skill_Seekers.md |
| zhimaAi/ChatClaw | llm-wiki-100 | 1027 | Node/TypeScript/JavaScript, Go | docker-compose.yml, frontend/package.json, frontend/pnpm-lock.yaml, frontend/pnpm-workspace.yaml | 31 | 84 | reports/llm-wiki/repositories/zhimaAi__ChatClaw.md |
| zhitongblog/solomd | llm-wiki-100 | 903 | Node/TypeScript/JavaScript, Rust | app/package.json, app/pnpm-lock.yaml, app/src-tauri/Cargo.toml, app/tsconfig.json | 5 | 53 | reports/llm-wiki/repositories/zhitongblog__solomd.md |
| zosmaai/pi-llm-wiki | llm-wiki-100 | 110 | Node/TypeScript/JavaScript | package.json, tsconfig.json | 9 | 13 | reports/llm-wiki/repositories/zosmaai__pi-llm-wiki.md |

## 우선 심층 분석이 필요한 후보

| repo | score | why | report |
| --- | --- | --- | --- |
| MODSetter/SurfSense | 410 | spec artifacts 140; agent files 100; large repo 3520 files; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/MODSetter__SurfSense.md |
| onyx-dot-app/onyx | 410 | spec artifacts 140; agent files 100; large repo 5453 files; multi-stack Node/TypeScript/JavaScript/Python/Rust/Go | reports/llm-wiki/repositories/onyx-dot-app__onyx.md |
| raphaelmansuy/edgequake | 402 | spec artifacts 140; agent files 92; large repo 5009 files; multi-stack Node/TypeScript/JavaScript/Python/Rust/Go | reports/llm-wiki/repositories/raphaelmansuy__edgequake.md |
| matevip/mateclaw | 400 | spec artifacts 140; agent files 100; large repo 2899 files | reports/llm-wiki/repositories/matevip__mateclaw.md |
| xuiltul/animaworks | 342 | spec artifacts 111; agent files 100; large repo 2787 files | reports/llm-wiki/repositories/xuiltul__animaworks.md |
| neomjs/neo | 330 | spec artifacts 105; agent files 100; large repo 19492 files | reports/llm-wiki/repositories/neomjs__neo.md |
| safishamsi/graphify | 320 | spec artifacts 105; agent files 100; multi-stack Python/Rust | reports/llm-wiki/repositories/safishamsi__graphify.md |
| labring/FastGPT | 316 | spec artifacts 93; agent files 100; large repo 5030 files; multi-stack Node/TypeScript/JavaScript/Python/Rust | reports/llm-wiki/repositories/labring__FastGPT.md |
| infiniflow/ragflow | 302 | spec artifacts 86; agent files 100; large repo 3628 files; multi-stack Node/TypeScript/JavaScript/Python/Go | reports/llm-wiki/repositories/infiniflow__ragflow.md |
| patchy631/ai-engineering-hub | 276 | spec artifacts 83; agent files 100; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/patchy631__ai-engineering-hub.md |
| yifanfeng97/Hyper-Extract | 240 | spec artifacts 105; agent files 30 | reports/llm-wiki/repositories/yifanfeng97__Hyper-Extract.md |
| MemTensor/MemOS | 230 | spec artifacts 60; agent files 100; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/MemTensor__MemOS.md |
| Shubhamsaboo/awesome-llm-apps | 214 | spec artifacts 52; agent files 100; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/Shubhamsaboo__awesome-llm-apps.md |
| abhigyanpatwari/GitNexus | 212 | spec artifacts 41; agent files 100; large repo 3936 files; multi-stack Node/TypeScript/JavaScript/Python/Rust/Go | reports/llm-wiki/repositories/abhigyanpatwari__GitNexus.md |
| Egonex-AI/Understand-Anything | 209 | spec artifacts 71; agent files 67 | reports/llm-wiki/repositories/Egonex-AI__Understand-Anything.md |
| VoltAgent/voltagent | 208 | spec artifacts 39; agent files 100; large repo 2871 files; multi-stack Node/TypeScript/JavaScript/Go | reports/llm-wiki/repositories/VoltAgent__voltagent.md |
| Tencent/WeKnora | 174 | spec artifacts 26; agent files 92; large repo 2045 files; multi-stack Node/TypeScript/JavaScript/Python/Go | reports/llm-wiki/repositories/Tencent__WeKnora.md |
| LearningCircuit/local-deep-research | 169 | spec artifacts 53; agent files 33; large repo 3020 files; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/LearningCircuit__local-deep-research.md |
| yusufkaraaslan/Skill_Seekers | 166 | spec artifacts 18; agent files 100; large repo 2985 files; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/yusufkaraaslan__Skill_Seekers.md |
| zhimaAi/ChatClaw | 156 | spec artifacts 31; agent files 84; multi-stack Node/TypeScript/JavaScript/Go | reports/llm-wiki/repositories/zhimaAi__ChatClaw.md |
| jegly/Box | 144 | spec artifacts 22; agent files 100 | reports/llm-wiki/repositories/jegly__Box.md |
| kreuzberg-dev/kreuzberg | 142 | spec artifacts 25; agent files 62; large repo 6472 files; multi-stack Node/TypeScript/JavaScript/Python/Rust/Go | reports/llm-wiki/repositories/kreuzberg-dev__kreuzberg.md |
| axoviq-ai/synthadoc | 140 | spec artifacts 42; agent files 46; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/axoviq-ai__synthadoc.md |
| arc53/DocsGPT | 98 | spec artifacts 38; agent files 12; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/arc53__DocsGPT.md |
| apecloud/ApeRAG | 97 | spec artifacts 30; agent files 27; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/apecloud__ApeRAG.md |
| semantica-agi/semantica | 92 | spec artifacts 20; agent files 42; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/semantica-agi__semantica.md |
| FalkorDB/FalkorDB | 91 | spec artifacts 30; agent files 1; large repo 6846 files; multi-stack Python/Rust | reports/llm-wiki/repositories/FalkorDB__FalkorDB.md |
| langbot-app/LangBot | 84 | spec artifacts 20; agent files 34; multi-stack Node/TypeScript/JavaScript/Python | reports/llm-wiki/repositories/langbot-app__LangBot.md |
| PaddlePaddle/PaddleOCR | 81 | agent files 51; large repo 2488 files; multi-stack Node/TypeScript/JavaScript/Python/Go | reports/llm-wiki/repositories/PaddlePaddle__PaddleOCR.md |
| hjhun/llm-wiki | 78 | spec artifacts 21; agent files 26; multi-stack Node/TypeScript/JavaScript/Rust | reports/llm-wiki/repositories/hjhun__llm-wiki.md |

## 해석 메모

- 이 결과는 실제 로컬 클론의 파일 구조, manifest, 문서, 에이전트 지침, 스펙 아티팩트를 기준으로 만든 구조 분석이다.
- 이전 보고서가 주로 30개 핵심 에이전트와 50개 adjacent-stack에 집중되어 있었으므로, 이번 산출물은 나머지 로컬 클론까지 동일 기준으로 덮는 보강 자료다.
- 자동 구조 분석이므로 의미/품질 평가는 각 레포별 상세 보고서의 `다음 심층 분석 포인트`를 따라 추가 수동 독해가 필요하다.
