# LLM 위키 / AI 지식베이스 오픈소스 100개 비교 요약

생성일: 2026-06-17T22:58:03.126Z

## 산출물

- 후보 수집 데이터: `data/llm-wiki-repositories.json`
- 구조 분석 데이터: `data/llm-wiki-structure-analysis-100.json`
- 총괄 구조 분석: `reports/llm-wiki/00-llm-wiki-100-summary.md`
- 레포별 구조 분석: `reports/llm-wiki/repositories/*.md`

## 수집/선정 기준

GitHub Search API로 LLM wiki, AI wiki, RAG knowledge base, document chat, NotebookLM-like, GraphRAG, MCP knowledge, Korean/Korea RAG 축을 검색했다. 점수는 직접 LLM-wiki 관련성, knowledge-base/RAG/document-chat 용어, stars/forks, 최근 push, 여러 쿼리 중복, 한국/한국어 신호를 합산했다.

| metric | value |
| --- | --- |
| 검색 후보 | 1204 |
| 선정 레포 | 100 |
| 로컬 클론 검증 | 100개 / 누락 0개 |
| direct LLM-wiki | 11 |
| RAG | 85 |
| knowledge-base | 54 |
| document-chat | 40 |
| agent-knowledge | 69 |
| Korea/Korean signal | 73 |

## 큰 패턴 비교

| pattern | signal | examples |
| --- | --- | --- |
| Persistent LLM wiki | LLM이 문서에서 엔티티/개념 페이지를 만들고 유지하는 self-maintaining wiki | nashsu/llm_wiki, ohbryt/bb-wiki, SamurAIGPT/llm-wiki-agent, Egonex-AI/Understand-Anything, zosmaai/pi-llm-wiki, green-dalii/obsidian-llm-wiki, stanford-oval/WikiChat, matevip/mateclaw, AgriciDaniel/claude-obsidian, Ar9av/obsidian-wiki |
| RAG knowledge base app | 문서 수집, 청킹, 인덱싱, 검색, QA/챗 UI를 포함한 지식베이스 제품 | nashsu/llm_wiki, Tencent/WeKnora, SamurAIGPT/llm-wiki-agent, axoviq-ai/synthadoc, arthurpanhku/DocSentinel, joungminsung/OpenDocuments, safishamsi/graphify, tirth8205/code-review-graph, raphaelmansuy/edgequake, chatchat-space/Langchain-Chatchat |
| GraphRAG / KG | 지식 그래프, 엔티티-관계 추출, 그래프 검색, logical form/graph reasoning | safishamsi/graphify, tirth8205/code-review-graph, Egonex-AI/Understand-Anything, raphaelmansuy/edgequake, AgriciDaniel/claude-obsidian, semantica-agi/semantica, HKUDS/LightRAG, benmaster82/Kwipu, studyield/studyield, iikarus/Dragon-Brain |
| Document intelligence | PDF/Office/웹 문서 파싱, OCR, 문서 인덱스, NotebookLM-like reading | nashsu/llm_wiki, Tencent/WeKnora, ohbryt/bb-wiki, axoviq-ai/synthadoc, arthurpanhku/DocSentinel, joungminsung/OpenDocuments, safishamsi/graphify, raphaelmansuy/edgequake, VectifyAI/PageIndex, enescingoz/awesome-n8n-templates |
| Agent memory / MCP | 에이전트 장기기억, MCP 도구, second brain, persistent context | Tencent/WeKnora, SamurAIGPT/llm-wiki-agent, axoviq-ai/synthadoc, arthurpanhku/DocSentinel, joungminsung/OpenDocuments, safishamsi/graphify, tirth8205/code-review-graph, Egonex-AI/Understand-Anything, chatchat-space/Langchain-Chatchat, labring/FastGPT |
| Korea/Korean signal | 한국/한국어/RAG 관련 검색 축에서 잡힌 저장소 | nashsu/llm_wiki, Tencent/WeKnora, ohbryt/bb-wiki, axoviq-ai/synthadoc, arthurpanhku/DocSentinel, joungminsung/OpenDocuments, tirth8205/code-review-graph, raphaelmansuy/edgequake, zosmaai/pi-llm-wiki, green-dalii/obsidian-llm-wiki |

## 구현 스택 분포

| stack | count |
| --- | --- |
| Python | 66 |
| Node/TypeScript/JavaScript | 47 |
| unknown/mixed | 15 |
| Rust | 14 |
| Go | 9 |

## 스타 기준 상위

| repo | stars | tags | pushed | report |
| --- | --- | --- | --- | --- |
| Shubhamsaboo/awesome-llm-apps | 114877 | rag, agent-knowledge, korea-signal | 2026-06-15T01:00:09Z | reports/llm-wiki/repositories/Shubhamsaboo__awesome-llm-apps.md |
| infiniflow/ragflow | 83027 | rag, agent-knowledge, korea-signal | 2026-06-17T14:13:49Z | reports/llm-wiki/repositories/infiniflow__ragflow.md |
| PaddlePaddle/PaddleOCR | 82807 | rag, document-chat, korea-signal | 2026-06-16T08:16:18Z | reports/llm-wiki/repositories/PaddlePaddle__PaddleOCR.md |
| safishamsi/graphify | 68688 | rag, knowledge-base, document-chat, agent-knowledge | 2026-06-17T18:10:40Z | reports/llm-wiki/repositories/safishamsi__graphify.md |
| Egonex-AI/Understand-Anything | 62740 | direct-llm-wiki, knowledge-base, agent-knowledge | 2026-06-16T07:51:27Z | reports/llm-wiki/repositories/Egonex-AI__Understand-Anything.md |
| pathwaycom/llm-app | 59331 | rag, document-chat, korea-signal | 2026-06-10T12:49:56Z | reports/llm-wiki/repositories/pathwaycom__llm-app.md |
| abhigyanpatwari/GitNexus | 42381 | rag, knowledge-base, agent-knowledge | 2026-06-17T20:53:32Z | reports/llm-wiki/repositories/abhigyanpatwari__GitNexus.md |
| chatchat-space/Langchain-Chatchat | 38186 | rag, knowledge-base, agent-knowledge, korea-signal | 2025-11-10T09:27:42Z | reports/llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md |
| HKUDS/LightRAG | 36711 | rag, knowledge-base, korea-signal | 2026-06-17T08:45:28Z | reports/llm-wiki/repositories/HKUDS__LightRAG.md |
| patchy631/ai-engineering-hub | 35839 | rag, document-chat, agent-knowledge | 2026-06-08T11:18:11Z | reports/llm-wiki/repositories/patchy631__ai-engineering-hub.md |
| khoj-ai/khoj | 35186 | rag, knowledge-base, document-chat, agent-knowledge | 2026-03-26T03:35:43Z | reports/llm-wiki/repositories/khoj-ai__khoj.md |
| VectifyAI/PageIndex | 33160 | rag, document-chat, agent-knowledge, korea-signal | 2026-06-05T22:08:22Z | reports/llm-wiki/repositories/VectifyAI__PageIndex.md |
| onyx-dot-app/onyx | 30391 | rag, document-chat, korea-signal | 2026-06-17T22:46:13Z | reports/llm-wiki/repositories/onyx-dot-app__onyx.md |
| labring/FastGPT | 28496 | rag, knowledge-base, agent-knowledge, korea-signal | 2026-06-17T10:19:10Z | reports/llm-wiki/repositories/labring__FastGPT.md |
| stanford-oval/storm | 28424 | rag, agent-knowledge, korea-signal | 2025-09-30T18:07:21Z | reports/llm-wiki/repositories/stanford-oval__storm.md |
| NirDiamant/RAG_Techniques | 28013 | rag, document-chat, agent-knowledge, korea-signal | 2026-06-17T20:54:18Z | reports/llm-wiki/repositories/NirDiamant__RAG_Techniques.md |
| getzep/graphiti | 27553 | rag, knowledge-base, agent-knowledge | 2026-06-17T01:07:01Z | reports/llm-wiki/repositories/getzep__graphiti.md |
| tobi/qmd | 26713 | knowledge-base, document-chat, korea-signal | 2026-06-17T16:02:50Z | reports/llm-wiki/repositories/tobi__qmd.md |
| opendataloader-project/opendataloader-pdf | 25243 | rag, document-chat, korea-signal | 2026-06-17T15:55:42Z | reports/llm-wiki/repositories/opendataloader-project__opendataloader-pdf.md |
| enescingoz/awesome-n8n-templates | 23064 | rag, document-chat, agent-knowledge, korea-signal | 2026-06-17T21:58:26Z | reports/llm-wiki/repositories/enescingoz__awesome-n8n-templates.md |

## 관련성 점수 상위

| repo | score | stars | tags | report |
| --- | --- | --- | --- | --- |
| nashsu/llm_wiki | 148 | 11791 | direct-llm-wiki, rag, knowledge-base, document-chat, korea-signal | reports/llm-wiki/repositories/nashsu__llm_wiki.md |
| Tencent/WeKnora | 114 | 16422 | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/Tencent__WeKnora.md |
| ohbryt/bb-wiki | 109 | 0 | direct-llm-wiki, knowledge-base, document-chat, korea-signal | reports/llm-wiki/repositories/ohbryt__bb-wiki.md |
| SamurAIGPT/llm-wiki-agent | 105 | 2959 | direct-llm-wiki, rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md |
| axoviq-ai/synthadoc | 105 | 464 | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/axoviq-ai__synthadoc.md |
| arthurpanhku/DocSentinel | 99 | 88 | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/arthurpanhku__DocSentinel.md |
| joungminsung/OpenDocuments | 99 | 80 | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/joungminsung__OpenDocuments.md |
| safishamsi/graphify | 96 | 68688 | rag, knowledge-base, document-chat, agent-knowledge | reports/llm-wiki/repositories/safishamsi__graphify.md |
| tirth8205/code-review-graph | 96 | 18632 | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/tirth8205__code-review-graph.md |
| Egonex-AI/Understand-Anything | 93 | 62740 | direct-llm-wiki, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/Egonex-AI__Understand-Anything.md |
| raphaelmansuy/edgequake | 91 | 2003 | rag, knowledge-base, document-chat, korea-signal | reports/llm-wiki/repositories/raphaelmansuy__edgequake.md |
| zosmaai/pi-llm-wiki | 91 | 154 | direct-llm-wiki, knowledge-base, korea-signal | reports/llm-wiki/repositories/zosmaai__pi-llm-wiki.md |
| green-dalii/obsidian-llm-wiki | 91 | 101 | direct-llm-wiki, knowledge-base, korea-signal | reports/llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md |
| chatchat-space/Langchain-Chatchat | 90 | 38186 | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md |
| stanford-oval/WikiChat | 90 | 1602 | direct-llm-wiki, rag, korea-signal | reports/llm-wiki/repositories/stanford-oval__WikiChat.md |
| labring/FastGPT | 87 | 28496 | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/labring__FastGPT.md |
| memvid/memvid | 87 | 15665 | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/memvid__memvid.md |
| matevip/mateclaw | 87 | 624 | direct-llm-wiki, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/matevip__mateclaw.md |
| VectifyAI/PageIndex | 86 | 33160 | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/VectifyAI__PageIndex.md |
| enescingoz/awesome-n8n-templates | 86 | 23064 | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/enescingoz__awesome-n8n-templates.md |

## 최근 push 상위

| repo | pushed | stars | tags | report |
| --- | --- | --- | --- | --- |
| kkollsga/kglite | 2026-06-17T22:46:32Z | 31 | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/kkollsga__kglite.md |
| onyx-dot-app/onyx | 2026-06-17T22:46:13Z | 30391 | rag, document-chat, korea-signal | reports/llm-wiki/repositories/onyx-dot-app__onyx.md |
| linny006/rag-radar | 2026-06-17T22:45:19Z | 1 | rag, knowledge-base, korea-signal | reports/llm-wiki/repositories/linny006__rag-radar.md |
| phonghhd/EvoNet-AI-Core | 2026-06-17T22:44:19Z | 4 | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/phonghhd__EvoNet-AI-Core.md |
| matevip/mateclaw | 2026-06-17T22:43:46Z | 624 | direct-llm-wiki, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/matevip__mateclaw.md |
| LearningCircuit/local-deep-research | 2026-06-17T22:42:22Z | 8493 | rag, document-chat, korea-signal | reports/llm-wiki/repositories/LearningCircuit__local-deep-research.md |
| otomata-tech/memento-core | 2026-06-17T22:41:26Z | 0 | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/otomata-tech__memento-core.md |
| iammonth1997/paperwiki-research-compiler | 2026-06-17T22:39:22Z | 0 | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/iammonth1997__paperwiki-research-compiler.md |
| hjhun/llm-wiki | 2026-06-17T22:35:08Z | 0 | direct-llm-wiki, korea-signal | reports/llm-wiki/repositories/hjhun__llm-wiki.md |
| NevaMind-AI/memU | 2026-06-17T22:30:16Z | 13884 | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/NevaMind-AI__memU.md |
| jee3m/augmentative-knowledge-hooks | 2026-06-17T22:29:48Z | 0 | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/jee3m__augmentative-knowledge-hooks.md |
| MODSetter/SurfSense | 2026-06-17T22:26:02Z | 14914 | rag, document-chat, agent-knowledge | reports/llm-wiki/repositories/MODSetter__SurfSense.md |
| neomjs/neo | 2026-06-17T22:09:05Z | 3206 | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/neomjs__neo.md |
| enescingoz/awesome-n8n-templates | 2026-06-17T21:58:26Z | 23064 | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/enescingoz__awesome-n8n-templates.md |
| NirDiamant/RAG_Techniques | 2026-06-17T20:54:18Z | 28013 | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/NirDiamant__RAG_Techniques.md |
| NirDiamant/GenAI_Agents | 2026-06-17T20:54:15Z | 22688 | rag, document-chat, agent-knowledge | reports/llm-wiki/repositories/NirDiamant__GenAI_Agents.md |
| NirDiamant/agents-towards-production | 2026-06-17T20:54:13Z | 20762 | rag, document-chat, agent-knowledge | reports/llm-wiki/repositories/NirDiamant__agents-towards-production.md |
| abhigyanpatwari/GitNexus | 2026-06-17T20:53:32Z | 42381 | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/abhigyanpatwari__GitNexus.md |
| semantica-agi/semantica | 2026-06-17T20:22:24Z | 1225 | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/semantica-agi__semantica.md |
| bzsanti/oxidizePdf | 2026-06-17T19:51:21Z | 176 | rag, document-chat, korea-signal | reports/llm-wiki/repositories/bzsanti__oxidizePdf.md |

## 직접 LLM 위키 구현

| repo | stars | description | report |
| --- | --- | --- | --- |
| nashsu/llm_wiki | 11791 | LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。 | reports/llm-wiki/repositories/nashsu__llm_wiki.md |
| ohbryt/bb-wiki | 0 | Brown Biotech persistent knowledge base — Karpathy LLM-Wiki × An Lab pedagogy × BB 14 query family. 4-섹션 judgment layer on all concept/entity pages. Synced to Obsidian ~/Documents/Obsidian Vault/brown-biotech. | reports/llm-wiki/repositories/ohbryt__bb-wiki.md |
| SamurAIGPT/llm-wiki-agent | 2959 | A personal knowledge base that builds and maintains itself. Drop in sources — Claude (or Codex/Gemini) reads them, extracts knowledge, and maintains a persistent interlinked wiki. Works with Claude Code, Codex, OpenCode, Gemini CLI. No API key needed. | reports/llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md |
| Egonex-AI/Understand-Anything | 62740 | Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more. | reports/llm-wiki/repositories/Egonex-AI__Understand-Anything.md |
| zosmaai/pi-llm-wiki | 154 | Self-maintaining, Obsidian-compatible knowledge base for pi — turn raw sources into an interlinked wiki that compounds over time. Follows Karpathy's LLM Wiki pattern. | reports/llm-wiki/repositories/zosmaai__pi-llm-wiki.md |
| green-dalii/obsidian-llm-wiki | 101 | Karpathy's LLM Wiki implementation - multi-page knowledge generation with entity/concept pages and conversational query. | reports/llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md |
| stanford-oval/WikiChat | 1602 | WikiChat is an improved RAG. It stops the hallucination of large language models by retrieving data from a corpus. | reports/llm-wiki/repositories/stanford-oval__WikiChat.md |
| matevip/mateclaw | 624 | 🤖 MateClaw — Your second brain with Multi-Agent Orchestration, MCP Protocol, Skills & Memory, Dream, and Multi-Channel Support. Built on Spring AI Alibaba. | reports/llm-wiki/repositories/matevip__mateclaw.md |
| AgriciDaniel/claude-obsidian | 7035 | Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own. AI note-taking, personal knowledge management (PKM), and an open-source Notion alternative. Based on Karpathy's LLM Wiki pattern. | reports/llm-wiki/repositories/AgriciDaniel__claude-obsidian.md |
| Ar9av/obsidian-wiki | 2232 | Framework for AI agents to build and maintain a digital brain through Obsidian wiki using Karpathy's LLM Wiki pattern | reports/llm-wiki/repositories/Ar9av__obsidian-wiki.md |
| hjhun/llm-wiki | 0 |  | reports/llm-wiki/repositories/hjhun__llm-wiki.md |

## 한국/한국어 신호 레포

| repo | stars | tags | description | report |
| --- | --- | --- | --- | --- |
| nashsu/llm_wiki | 11791 | direct-llm-wiki, rag, knowledge-base, document-chat, korea-signal | LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。 | reports/llm-wiki/repositories/nashsu__llm_wiki.md |
| Tencent/WeKnora | 16422 | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki. | reports/llm-wiki/repositories/Tencent__WeKnora.md |
| ohbryt/bb-wiki | 0 | direct-llm-wiki, knowledge-base, document-chat, korea-signal | Brown Biotech persistent knowledge base — Karpathy LLM-Wiki × An Lab pedagogy × BB 14 query family. 4-섹션 judgment layer on all concept/entity pages. Synced to Obsidian ~/Documents/Obsidian Vault/brown-biotech. | reports/llm-wiki/repositories/ohbryt__bb-wiki.md |
| axoviq-ai/synthadoc | 464 | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | Synthadoc: An open-source LLM knowledge compilation engine that turns raw documents into structured, local-first wikis. A transparent, human-readable alternative to traditional RAG, which can be self-managed and self-improved without the use of any tools. | reports/llm-wiki/repositories/axoviq-ai__synthadoc.md |
| arthurpanhku/DocSentinel | 88 | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | MCP server for AI agent for cybersecurity: automate assessment of documents, questionnaires & reports. Multi-format parsing, RAG knowledge base,Risks, compliance gaps, remediations.  | reports/llm-wiki/repositories/arthurpanhku__DocSentinel.md |
| joungminsung/OpenDocuments | 80 | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | Self-hosted RAG platform for AI document search across GitHub, Notion, Google Drive, local files, and web sources with citations. | reports/llm-wiki/repositories/joungminsung__OpenDocuments.md |
| tirth8205/code-review-graph | 18632 | rag, knowledge-base, agent-knowledge, korea-signal | Local-first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read only what matters, with benchmarked context reductions on reviews and large-repo workflows. | reports/llm-wiki/repositories/tirth8205__code-review-graph.md |
| raphaelmansuy/edgequake | 2003 | rag, knowledge-base, document-chat, korea-signal | EdegQuake 🌋 High-performance GraphRAG inspired from LightRag written in Rust; Transform documents into intelligent knowledge graphs for superior retrieval and generation | reports/llm-wiki/repositories/raphaelmansuy__edgequake.md |
| zosmaai/pi-llm-wiki | 154 | direct-llm-wiki, knowledge-base, korea-signal | Self-maintaining, Obsidian-compatible knowledge base for pi — turn raw sources into an interlinked wiki that compounds over time. Follows Karpathy's LLM Wiki pattern. | reports/llm-wiki/repositories/zosmaai__pi-llm-wiki.md |
| green-dalii/obsidian-llm-wiki | 101 | direct-llm-wiki, knowledge-base, korea-signal | Karpathy's LLM Wiki implementation - multi-page knowledge generation with entity/concept pages and conversational query. | reports/llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md |
| chatchat-space/Langchain-Chatchat | 38186 | rag, knowledge-base, agent-knowledge, korea-signal | Langchain-Chatchat（原Langchain-ChatGLM）基于 Langchain 与 ChatGLM, Qwen 与 Llama 等语言模型的 RAG 与 Agent 应用 \| Langchain-Chatchat (formerly langchain-ChatGLM), local knowledge based LLM (like ChatGLM, Qwen and Llama) RAG and Agent app with langchain  | reports/llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md |
| stanford-oval/WikiChat | 1602 | direct-llm-wiki, rag, korea-signal | WikiChat is an improved RAG. It stops the hallucination of large language models by retrieving data from a corpus. | reports/llm-wiki/repositories/stanford-oval__WikiChat.md |
| labring/FastGPT | 28496 | rag, knowledge-base, agent-knowledge, korea-signal | FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration. | reports/llm-wiki/repositories/labring__FastGPT.md |
| memvid/memvid | 15665 | rag, knowledge-base, agent-knowledge, korea-signal | Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single-file memory layer. Give your agents instant retrieval and long-term memory. | reports/llm-wiki/repositories/memvid__memvid.md |
| VectifyAI/PageIndex | 33160 | rag, document-chat, agent-knowledge, korea-signal | 📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG | reports/llm-wiki/repositories/VectifyAI__PageIndex.md |
| enescingoz/awesome-n8n-templates | 23064 | rag, document-chat, agent-knowledge, korea-signal | 280+ free n8n automation templates — ready-to-use workflows for Gmail, Telegram, Slack, Discord, WhatsApp, Google Drive, Notion, OpenAI, and more. AI agents, RAG   chatbots, email automation, social media, DevOps, and document processing. The largest open-source n8n template collection. | reports/llm-wiki/repositories/enescingoz__awesome-n8n-templates.md |
| semantica-agi/semantica | 1225 | rag, knowledge-base, agent-knowledge, korea-signal | Semantica 🧠 • Build AI systems that can explain, trace, and justify every decision. Knowledge graphs, context graphs, reasoning engines, provenance, and governance for production AI. | reports/llm-wiki/repositories/semantica-agi__semantica.md |
| NirDiamant/RAG_Techniques | 28013 | rag, document-chat, agent-knowledge, korea-signal | This repository showcases various advanced techniques for Retrieval-Augmented Generation (RAG) systems. Each technique has a detailed notebook tutorial. | reports/llm-wiki/repositories/NirDiamant__RAG_Techniques.md |
| HKUDS/LightRAG | 36711 | rag, knowledge-base, korea-signal | [EMNLP2025] "LightRAG: Simple and Fast Retrieval-Augmented Generation" | reports/llm-wiki/repositories/HKUDS__LightRAG.md |
| linny006/rag-radar | 1 | rag, knowledge-base, korea-signal | Live tracker of new RAG implementations, tools, and patterns — updated every 15 minutes | reports/llm-wiki/repositories/linny006__rag-radar.md |
| VectifyAI/OpenKB | 2083 | rag, knowledge-base, agent-knowledge, korea-signal | OpenKB: Open LLM Knowledge Base | reports/llm-wiki/repositories/VectifyAI__OpenKB.md |
| IAAR-Shanghai/Awesome-AI-Memory | 996 | rag, knowledge-base, agent-knowledge, korea-signal | Awesome AI Memory \| LLM Memory \| A curated knowledge base on AI memory for LLMs and agents, covering long-term memory, reasoning, retrieval, and memory-native system design.  Awesome-AI-Memory 是一个 集中式、持续更新的 AI 记忆知识库，系统性整理了与 大模型记忆（LLM Memory）与智能体记忆（Agent Memory） 相关的前沿研究、工程框架、系统设计、评测基准与真实应用实践。 | reports/llm-wiki/repositories/IAAR-Shanghai__Awesome-AI-Memory.md |
| zhimaAi/ChatClaw | 291 | rag, knowledge-base, agent-knowledge, korea-signal | ChatClaw: Get OpenClaw-like knowledge base personal AI agent in 5 mins. Sandbox-secured, ultra-small 30MB installer for macOS & Windows (install in 1 min). Connects to WhatsApp, Telegram, Slack, Discord, Gmail, DingTalk, WeChat Work, QQ, Feishu. Built-in Skill Market, Knowledge Base, Memory, MCP, Scheduled Tasks. Developed in Go ,run | reports/llm-wiki/repositories/zhimaAi__ChatClaw.md |
| benmaster82/Kwipu | 248 | rag, knowledge-base, agent-knowledge, korea-signal | Ask questions across your Markdown notes using a fully local Graph RAG engine. Built for Obsidian vaults, works with any folder of Markdown files. Extracts entity-relation triples from wikilinks & YAML frontmatter, retrieves answers via hybrid search (vector + BM25 + temporal). Multilingual. No cloud. Runs on Ollama. | reports/llm-wiki/repositories/benmaster82__Kwipu.md |
| studyield/studyield | 50 | rag, knowledge-base, agent-knowledge, korea-signal |  Open-source AI learning platform with exam cloning, multi-agent problem solving, knowledge graphs, and teach-back evaluation. Self-hosted, 12 languages, web + mobile. | reports/llm-wiki/repositories/studyield__studyield.md |
| iikarus/Dragon-Brain | 48 | rag, knowledge-base, agent-knowledge, korea-signal | Dragon Brain — persistent long-term memory for AI agents via MCP (Model Context Protocol). Knowledge graph (FalkorDB) + vector search (Qdrant) + CUDA GPU embeddings. Works with Claude, Gemini CLI, Cursor, Windsurf, VS Code Copilot. 30 tools, 1121 tests. | reports/llm-wiki/repositories/iikarus__Dragon-Brain.md |
| iammonth1997/paperwiki-research-compiler | 0 | rag, knowledge-base, agent-knowledge, korea-signal | AI Research Wiki 2026: Auto-Building Knowledge Base with Deep Citation Syntheses | reports/llm-wiki/repositories/iammonth1997__paperwiki-research-compiler.md |
| onyx-dot-app/onyx | 30391 | rag, document-chat, korea-signal | Open Source AI Platform - AI Chat with advanced features that works with every LLM | reports/llm-wiki/repositories/onyx-dot-app__onyx.md |
| openai/chatgpt-retrieval-plugin | 21190 | rag, document-chat, korea-signal | The ChatGPT Retrieval Plugin lets you easily find personal or work documents by asking questions in natural language. | reports/llm-wiki/repositories/openai__chatgpt-retrieval-plugin.md |
| tobi/qmd | 26713 | knowledge-base, document-chat, korea-signal | mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local | reports/llm-wiki/repositories/tobi__qmd.md |
| OpenSPG/KAG | 8834 | rag, knowledge-base, korea-signal | KAG is a logical form-guided reasoning and retrieval framework based on OpenSPG engine and LLMs.  It is used to build logical reasoning and factual Q&A solutions for professional domain knowledge bases. It can effectively overcome the shortcomings of the traditional RAG vector similarity calculation model. | reports/llm-wiki/repositories/OpenSPG__KAG.md |
| HKUST-KnowComp/AutoSchemaKG | 761 | rag, knowledge-base, korea-signal | This repository contains the implementation of AutoSchemaKG, a novel framework for automatic knowledge graph construction that combines schema generation via conceptualization. | reports/llm-wiki/repositories/HKUST-KnowComp__AutoSchemaKG.md |
| xr843/fojin | 312 | rag, knowledge-base, korea-signal | Buddhist Digital Text Platform — 9,200+ texts, 500+ sources, 8 UI languages, AI Q&A (RAG), knowledge graph, full-text search | reports/llm-wiki/repositories/xr843__fojin.md |
| arc53/DocsGPT | 17938 | rag, document-chat, agent-knowledge, korea-signal | Private AI platform for agents, assistants and enterprise search. Built-in Agent Builder, Deep research, Document analysis, Multi-model support, and API connectivity for agents. | reports/llm-wiki/repositories/arc53__DocsGPT.md |
| kreuzberg-dev/kreuzberg | 8500 | rag, document-chat, agent-knowledge, korea-signal | A polyglot document intelligence framework with a Rust core. Extract text, metadata, images, and structured information from PDFs, Office documents, images, and 97+ formats. Available for Rust, Python, Ruby, Java, Go, PHP, Elixir, C#, R, C, TypeScript (Node/Bun/Wasm/Deno)- or use via CLI, REST API, or MCP server. | reports/llm-wiki/repositories/kreuzberg-dev__kreuzberg.md |
| DEEP-PolyU/Awesome-GraphRAG | 2474 | rag, knowledge-base, korea-signal | Awesome-GraphRAG: A curated list of resources (surveys, papers, benchmarks, and opensource projects) on graph-based retrieval-augmented generation.  | reports/llm-wiki/repositories/DEEP-PolyU__Awesome-GraphRAG.md |
| marswangyang/personal-ai-memory | 48 | rag, knowledge-base, korea-signal | A local-first Chrome extension that passively captures ChatGPT, Gemini, Claude, Grok, Perplexity conversations into a private memory graph. Features in-browser Hybrid RAG (Vector + BM25), semantic search, and 100% privacy via WebAssembly and IndexedDB. No servers, no API keys. | reports/llm-wiki/repositories/marswangyang__personal-ai-memory.md |
| datawhalechina/tiny-universe | 4916 | rag, document-chat, agent-knowledge, korea-signal | 《大模型白盒子构建指南》：一个全手搓的Tiny-Universe | reports/llm-wiki/repositories/datawhalechina__tiny-universe.md |
| GiovanniPasq/agentic-rag-for-dummies | 3502 | rag, document-chat, agent-knowledge, korea-signal | A modular Agentic RAG built with LangGraph — learn Retrieval-Augmented Generation Agents in minutes. | reports/llm-wiki/repositories/GiovanniPasq__agentic-rag-for-dummies.md |
| opendatalab/MinerU-Document-Explorer | 586 | rag, document-chat, agent-knowledge, korea-signal | Agent-native knowledge engine with MCP tools for document indexing, wiki organization, fast retrieval and deep reading across PDF/DOCX/PPTX/Markdown | reports/llm-wiki/repositories/opendatalab__MinerU-Document-Explorer.md |

## 전체 100개 인덱스

| no | repo | stars | language | files | stack | tags | report |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | nashsu/llm_wiki | 11791 | TypeScript | 374 | Node/TypeScript/JavaScript, Rust | direct-llm-wiki, rag, knowledge-base, document-chat, korea-signal | reports/llm-wiki/repositories/nashsu__llm_wiki.md |
| 2 | Tencent/WeKnora | 16422 | Go | 2045 | Node/TypeScript/JavaScript, Python, Go | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/Tencent__WeKnora.md |
| 3 | ohbryt/bb-wiki | 0 | Python | 28 | unknown/mixed | direct-llm-wiki, knowledge-base, document-chat, korea-signal | reports/llm-wiki/repositories/ohbryt__bb-wiki.md |
| 4 | SamurAIGPT/llm-wiki-agent | 2959 | Python | 28 | Python | direct-llm-wiki, rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md |
| 5 | axoviq-ai/synthadoc | 464 | Python | 378 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/axoviq-ai__synthadoc.md |
| 6 | arthurpanhku/DocSentinel | 88 | Python | 136 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/arthurpanhku__DocSentinel.md |
| 7 | joungminsung/OpenDocuments | 80 | TypeScript | 454 | Node/TypeScript/JavaScript | rag, knowledge-base, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/joungminsung__OpenDocuments.md |
| 8 | safishamsi/graphify | 68688 | Python | 582 | Python, Rust | rag, knowledge-base, document-chat, agent-knowledge | reports/llm-wiki/repositories/safishamsi__graphify.md |
| 9 | tirth8205/code-review-graph | 18632 | Python | 287 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/tirth8205__code-review-graph.md |
| 10 | Egonex-AI/Understand-Anything | 62740 | TypeScript | 419 | Node/TypeScript/JavaScript | direct-llm-wiki, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/Egonex-AI__Understand-Anything.md |
| 11 | raphaelmansuy/edgequake | 2003 | Rust | 5009 | Node/TypeScript/JavaScript, Python, Rust, Go | rag, knowledge-base, document-chat, korea-signal | reports/llm-wiki/repositories/raphaelmansuy__edgequake.md |
| 12 | zosmaai/pi-llm-wiki | 154 | TypeScript | 110 | Node/TypeScript/JavaScript | direct-llm-wiki, knowledge-base, korea-signal | reports/llm-wiki/repositories/zosmaai__pi-llm-wiki.md |
| 13 | green-dalii/obsidian-llm-wiki | 101 | TypeScript | 152 | Node/TypeScript/JavaScript | direct-llm-wiki, knowledge-base, korea-signal | reports/llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md |
| 14 | chatchat-space/Langchain-Chatchat | 38186 | Python | 523 | Python | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md |
| 15 | stanford-oval/WikiChat | 1602 | Python | 163 | unknown/mixed | direct-llm-wiki, rag, korea-signal | reports/llm-wiki/repositories/stanford-oval__WikiChat.md |
| 16 | labring/FastGPT | 28496 | TypeScript | 5030 | Node/TypeScript/JavaScript, Python, Rust | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/labring__FastGPT.md |
| 17 | memvid/memvid | 15665 | Rust | 217 | Rust | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/memvid__memvid.md |
| 18 | matevip/mateclaw | 624 | Java | 2899 | Node/TypeScript/JavaScript | direct-llm-wiki, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/matevip__mateclaw.md |
| 19 | VectifyAI/PageIndex | 33160 | Python | 53 | Python | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/VectifyAI__PageIndex.md |
| 20 | enescingoz/awesome-n8n-templates | 23064 |  | 352 | unknown/mixed | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/enescingoz__awesome-n8n-templates.md |
| 21 | AgriciDaniel/claude-obsidian | 7035 | Python | 211 | unknown/mixed | direct-llm-wiki, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/AgriciDaniel__claude-obsidian.md |
| 22 | semantica-agi/semantica | 1225 | Python | 904 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/semantica-agi__semantica.md |
| 23 | NirDiamant/RAG_Techniques | 28013 | Jupyter Notebook | 122 | unknown/mixed | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/NirDiamant__RAG_Techniques.md |
| 24 | HKUDS/LightRAG | 36711 | Python | 679 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, korea-signal | reports/llm-wiki/repositories/HKUDS__LightRAG.md |
| 25 | linny006/rag-radar | 1 | Python | 10 | Python | rag, knowledge-base, korea-signal | reports/llm-wiki/repositories/linny006__rag-radar.md |
| 26 | khoj-ai/khoj | 35186 | Python | 701 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, document-chat, agent-knowledge | reports/llm-wiki/repositories/khoj-ai__khoj.md |
| 27 | Ar9av/obsidian-wiki | 2232 | Python | 89 | Python | direct-llm-wiki, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/Ar9av__obsidian-wiki.md |
| 28 | VectifyAI/OpenKB | 2083 | Python | 104 | Python | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/VectifyAI__OpenKB.md |
| 29 | IAAR-Shanghai/Awesome-AI-Memory | 996 | Python | 8 | unknown/mixed | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/IAAR-Shanghai__Awesome-AI-Memory.md |
| 30 | zhimaAi/ChatClaw | 291 | Go | 1027 | Node/TypeScript/JavaScript, Go | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/zhimaAi__ChatClaw.md |
| 31 | benmaster82/Kwipu | 248 | Python | 19 | Python | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/benmaster82__Kwipu.md |
| 32 | studyield/studyield | 50 | TypeScript | 404 | Node/TypeScript/JavaScript | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/studyield__studyield.md |
| 33 | iikarus/Dragon-Brain | 48 | Python | 352 | Python | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/iikarus__Dragon-Brain.md |
| 34 | iammonth1997/paperwiki-research-compiler | 0 | HTML | 4 | unknown/mixed | rag, knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/iammonth1997__paperwiki-research-compiler.md |
| 35 | abhigyanpatwari/GitNexus | 42381 | TypeScript | 3936 | Node/TypeScript/JavaScript, Python, Rust, Go | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/abhigyanpatwari__GitNexus.md |
| 36 | onyx-dot-app/onyx | 30391 | Python | 5453 | Node/TypeScript/JavaScript, Python, Rust, Go | rag, document-chat, korea-signal | reports/llm-wiki/repositories/onyx-dot-app__onyx.md |
| 37 | getzep/graphiti | 27553 | Python | 352 | Python | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/getzep__graphiti.md |
| 38 | openai/chatgpt-retrieval-plugin | 21190 | Python | 122 | Python | rag, document-chat, korea-signal | reports/llm-wiki/repositories/openai__chatgpt-retrieval-plugin.md |
| 39 | tobi/qmd | 26713 | TypeScript | 154 | Node/TypeScript/JavaScript, Python | knowledge-base, document-chat, korea-signal | reports/llm-wiki/repositories/tobi__qmd.md |
| 40 | OpenSPG/KAG | 8834 | Python | 1211 | Python | rag, knowledge-base, korea-signal | reports/llm-wiki/repositories/OpenSPG__KAG.md |
| 41 | neo4j-labs/llm-graph-builder | 4799 | Jupyter Notebook | 354 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, document-chat | reports/llm-wiki/repositories/neo4j-labs__llm-graph-builder.md |
| 42 | HKUST-KnowComp/AutoSchemaKG | 761 | Python | 1099 | Python | rag, knowledge-base, korea-signal | reports/llm-wiki/repositories/HKUST-KnowComp__AutoSchemaKG.md |
| 43 | xr843/fojin | 312 | Python | 845 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, korea-signal | reports/llm-wiki/repositories/xr843__fojin.md |
| 44 | arc53/DocsGPT | 17938 | Python | 1381 | Node/TypeScript/JavaScript, Python | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/arc53__DocsGPT.md |
| 45 | kreuzberg-dev/kreuzberg | 8500 | Rust | 6472 | Node/TypeScript/JavaScript, Python, Rust, Go | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/kreuzberg-dev__kreuzberg.md |
| 46 | OSU-NLP-Group/HippoRAG | 3631 | Python | 86 | Python | rag, knowledge-base, document-chat | reports/llm-wiki/repositories/OSU-NLP-Group__HippoRAG.md |
| 47 | DEEP-PolyU/Awesome-GraphRAG | 2474 |  | 7 | unknown/mixed | rag, knowledge-base, korea-signal | reports/llm-wiki/repositories/DEEP-PolyU__Awesome-GraphRAG.md |
| 48 | marswangyang/personal-ai-memory | 48 | TypeScript | 101 | Node/TypeScript/JavaScript | rag, knowledge-base, korea-signal | reports/llm-wiki/repositories/marswangyang__personal-ai-memory.md |
| 49 | datawhalechina/tiny-universe | 4916 | Jupyter Notebook | 183 | Python | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/datawhalechina__tiny-universe.md |
| 50 | GiovanniPasq/agentic-rag-for-dummies | 3502 | Jupyter Notebook | 39 | Python | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/GiovanniPasq__agentic-rag-for-dummies.md |
| 51 | opendatalab/MinerU-Document-Explorer | 586 | TypeScript | 191 | Node/TypeScript/JavaScript, Python | rag, document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/opendatalab__MinerU-Document-Explorer.md |
| 52 | pathwaycom/llm-app | 59331 | Jupyter Notebook | 136 | Python | rag, document-chat, korea-signal | reports/llm-wiki/repositories/pathwaycom__llm-app.md |
| 53 | infiniflow/ragflow | 83027 | Python | 3628 | Node/TypeScript/JavaScript, Python, Go | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/infiniflow__ragflow.md |
| 54 | NirDiamant/GenAI_Agents | 22688 | Jupyter Notebook | 163 | Python | rag, document-chat, agent-knowledge | reports/llm-wiki/repositories/NirDiamant__GenAI_Agents.md |
| 55 | PaddlePaddle/PaddleOCR | 82807 | Python | 2488 | Node/TypeScript/JavaScript, Python, Go | rag, document-chat, korea-signal | reports/llm-wiki/repositories/PaddlePaddle__PaddleOCR.md |
| 56 | opendataloader-project/opendataloader-pdf | 25243 | Java | 331 | Node/TypeScript/JavaScript, Python | rag, document-chat, korea-signal | reports/llm-wiki/repositories/opendataloader-project__opendataloader-pdf.md |
| 57 | LearningCircuit/local-deep-research | 8493 | Python | 3020 | Node/TypeScript/JavaScript, Python | rag, document-chat, korea-signal | reports/llm-wiki/repositories/LearningCircuit__local-deep-research.md |
| 58 | Marker-Inc-Korea/AutoRAG | 4832 | Python | 696 | Python | rag, document-chat, korea-signal | reports/llm-wiki/repositories/Marker-Inc-Korea__AutoRAG.md |
| 59 | phonghhd/EvoNet-AI-Core | 4 | Python | 79 | Python | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/phonghhd__EvoNet-AI-Core.md |
| 60 | hjhun/llm-wiki | 0 | TypeScript | 349 | Node/TypeScript/JavaScript, Rust | direct-llm-wiki, korea-signal | reports/llm-wiki/repositories/hjhun__llm-wiki.md |
| 61 | neomjs/neo | 3206 | JavaScript | 19492 | Node/TypeScript/JavaScript | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/neomjs__neo.md |
| 62 | HKUDS/VideoRAG | 3065 | Python | 118 | Node/TypeScript/JavaScript | rag, document-chat, korea-signal | reports/llm-wiki/repositories/HKUDS__VideoRAG.md |
| 63 | 1517005260/graph-rag-agent | 2227 | Python | 274 | Python | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/1517005260__graph-rag-agent.md |
| 64 | SaiAkhil066/CORTEX-AI-SUPER-RAG | 1727 | Python | 18 | Python | rag, document-chat, korea-signal | reports/llm-wiki/repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md |
| 65 | yifanfeng97/Hyper-Extract | 1571 | Python | 449 | Python | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/yifanfeng97__Hyper-Extract.md |
| 66 | KalyanKS-NLP/rag-zero-to-hero-guide | 1348 | Jupyter Notebook | 32 | unknown/mixed | rag, document-chat, korea-signal | reports/llm-wiki/repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md |
| 67 | apecloud/ApeRAG | 1193 | Python | 1196 | Node/TypeScript/JavaScript, Python | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/apecloud__ApeRAG.md |
| 68 | onlybooks/llm | 200 | Jupyter Notebook | 18 | unknown/mixed | rag, document-chat, korea-signal | reports/llm-wiki/repositories/onlybooks__llm.md |
| 69 | bzsanti/oxidizePdf | 176 | Rust | 1662 | Rust | rag, document-chat, korea-signal | reports/llm-wiki/repositories/bzsanti__oxidizePdf.md |
| 70 | kkollsga/kglite | 31 | Rust | 896 | Python, Rust | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/kkollsga__kglite.md |
| 71 | jee3m/augmentative-knowledge-hooks | 0 | HTML | 4 | unknown/mixed | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/jee3m__augmentative-knowledge-hooks.md |
| 72 | otomata-tech/memento-core | 0 | TypeScript | 141 | Node/TypeScript/JavaScript | rag, knowledge-base, agent-knowledge | reports/llm-wiki/repositories/otomata-tech__memento-core.md |
| 73 | langbot-app/LangBot | 16358 | Python | 1010 | Node/TypeScript/JavaScript, Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/langbot-app__LangBot.md |
| 74 | MODSetter/SurfSense | 14914 | Python | 3520 | Node/TypeScript/JavaScript, Python | rag, document-chat, agent-knowledge | reports/llm-wiki/repositories/MODSetter__SurfSense.md |
| 75 | yusufkaraaslan/Skill_Seekers | 14134 | Python | 2985 | Node/TypeScript/JavaScript, Python | document-chat, agent-knowledge, korea-signal | reports/llm-wiki/repositories/yusufkaraaslan__Skill_Seekers.md |
| 76 | neuml/txtai | 12669 | Python | 621 | Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/neuml__txtai.md |
| 77 | The-Pocket/PocketFlow | 10769 | Python | 529 | Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/The-Pocket__PocketFlow.md |
| 78 | WangRongsheng/awesome-LLM-resources | 8550 |  | 20 | unknown/mixed | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/WangRongsheng__awesome-LLM-resources.md |
| 79 | StarTrail-org/LEANN | 12182 | Python | 279 | Python | rag, korea-signal | reports/llm-wiki/repositories/StarTrail-org__LEANN.md |
| 80 | aristoapp/awesome-second-brain | 422 |  | 103 | unknown/mixed | knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/aristoapp__awesome-second-brain.md |
| 81 | stanford-oval/storm | 28424 | Python | 74 | Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/stanford-oval__storm.md |
| 82 | llmware-ai/llmware | 14837 | Python | 546 | Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/llmware-ai__llmware.md |
| 83 | NevaMind-AI/memU | 13884 | Python | 240 | Python, Rust | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/NevaMind-AI__memU.md |
| 84 | MemTensor/MemOS | 9913 | TypeScript | 1794 | Node/TypeScript/JavaScript, Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/MemTensor__MemOS.md |
| 85 | VoltAgent/voltagent | 9661 | TypeScript | 2871 | Node/TypeScript/JavaScript, Go | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/VoltAgent__voltagent.md |
| 86 | langroid/langroid | 4040 | Python | 723 | Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/langroid__langroid.md |
| 87 | OrionStarAI/Orion | 811 | Python | 48 | Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/OrionStarAI__Orion.md |
| 88 | nanbingxyz/5ire | 5247 | TypeScript | 478 | Node/TypeScript/JavaScript | knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/nanbingxyz__5ire.md |
| 89 | PleasePrompto/notebooklm-mcp | 2810 | TypeScript | 50 | Node/TypeScript/JavaScript | knowledge-base, document-chat, agent-knowledge | reports/llm-wiki/repositories/PleasePrompto__notebooklm-mcp.md |
| 90 | eugeniughelbur/obsidian-second-brain | 2519 | Python | 161 | Python | knowledge-base, document-chat, agent-knowledge | reports/llm-wiki/repositories/eugeniughelbur__obsidian-second-brain.md |
| 91 | zhitongblog/solomd | 376 | TypeScript | 903 | Node/TypeScript/JavaScript, Rust | knowledge-base, agent-knowledge, korea-signal | reports/llm-wiki/repositories/zhitongblog__solomd.md |
| 92 | Shubhamsaboo/awesome-llm-apps | 114877 | Python | 1751 | Node/TypeScript/JavaScript, Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/Shubhamsaboo__awesome-llm-apps.md |
| 93 | patchy631/ai-engineering-hub | 35839 | Jupyter Notebook | 1432 | Node/TypeScript/JavaScript, Python | rag, document-chat, agent-knowledge | reports/llm-wiki/repositories/patchy631__ai-engineering-hub.md |
| 94 | NirDiamant/agents-towards-production | 20762 | Jupyter Notebook | 214 | Python | rag, document-chat, agent-knowledge | reports/llm-wiki/repositories/NirDiamant__agents-towards-production.md |
| 95 | luhengshiwo/LLMForEverybody | 6742 | Jupyter Notebook | 1245 | unknown/mixed | rag, document-chat, agent-knowledge | reports/llm-wiki/repositories/luhengshiwo__LLMForEverybody.md |
| 96 | InternLM/HuixiangDou | 2492 | Python | 407 | Node/TypeScript/JavaScript, Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/InternLM__HuixiangDou.md |
| 97 | szczyglis-dev/py-gpt | 1827 | Python | 3086 | Node/TypeScript/JavaScript, Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/szczyglis-dev__py-gpt.md |
| 98 | jegly/Box | 595 | Kotlin | 591 | unknown/mixed | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/jegly__Box.md |
| 99 | xuiltul/animaworks | 240 | Python | 2787 | Python | rag, agent-knowledge, korea-signal | reports/llm-wiki/repositories/xuiltul__animaworks.md |
| 100 | FalkorDB/FalkorDB | 4597 | C | 6846 | Python, Rust | rag, knowledge-base | reports/llm-wiki/repositories/FalkorDB__FalkorDB.md |

## 해석 메모

- LLM 위키라는 좁은 이름을 직접 쓰는 구현은 아직 소수이며, 실제 생태계는 RAG knowledge base, GraphRAG, document intelligence, agent memory로 퍼져 있다.
- 지속적으로 기억되는 wiki를 만들려면 단순 벡터 검색보다 엔티티/개념 페이지, provenance, 증분 업데이트, 충돌 해결, 사람이 읽을 수 있는 Markdown/Obsidian 호환 저장 형식이 중요하다.
- 대규모 제품형 레포는 데이터 커넥터, 권한, 배포, 평가/관측 가능성까지 포함하고, 작은 direct-LLM-wiki 구현은 페이지 생성 알고리즘과 지식 구조화 로직을 읽기 좋다.
- 한국/한국어 신호는 AutoRAG처럼 명시적으로 한국 조직/프로젝트인 경우와, 검색 쿼리상 한국어/다국어 지원 README에 걸린 경우가 섞여 있으므로 후속 수동 검증이 필요하다.
- 각 레포별 상세 구조 분석은 README, manifest, 핵심 디렉터리, 테스트/CI, 에이전트/MCP/스펙 파일 후보를 기준으로 자동 추출한 1차 코드 분석이다.

## 참고 출발점

- Andrej Karpathy LLM Wiki gist: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- GitHub topic knowledge-base: https://github.com/topics/knowledge-base
- GitHub search queries and selected repositories: `data/llm-wiki-repositories.json`
