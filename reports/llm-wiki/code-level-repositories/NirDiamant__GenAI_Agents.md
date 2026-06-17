# NirDiamant/GenAI_Agents 코드 레벨 분석

생성일: 2026-06-17T23:31:35.150Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | D small/demo/list (15) |
| stars | 22688 |
| language | Jupyter Notebook |
| tags | rag, document-chat, agent-knowledge |
| files/code/source | 118/3/3 |
| tests/ci | 0/0 |
| local path | sources/NirDiamant__GenAI_Agents |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 2 | 0 | README.md:549 Implements a state-based workflow using LangGraph to coordinate user interaction, web scraping, and decision support. The system features TypedDict state management, async web scraping with Playwright, and integrates wit |
| Parsing/OCR/document extraction | code | 7 | 1 | data/grocery_management_agents_system/input/extract_items.js:1 import { ocr } from 'llama-ocr'; |
| Chunking/splitting | doc-only | 6 | 0 | all_agents_tutorials/data/kv_store_text_chunks.json:2 "chunk-dfc67a94deb852e6b89f41bf0bbda78f": { |
| Embedding/vector index | doc-only | 3 | 0 | data/ATLAS_data/profile.json:66 "Vector Calculus" |
| Retrieval/search/rerank | doc-only | 9 | 0 | all_agents_tutorials/data/kv_store_full_docs.json:324 "content": "Artist: Franz Marc\nArtwork Name: The Tower of Blue Horses\nArtwork Genre: symbolic painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/franz-marc/the-tower-of-blue-horses-1913\n\nWik |
| Wiki/graph/entity model | doc-only | 32 | 0 | all_agents_tutorials/data/artinfo.json:1 {"info": ["\nArtist: Frederick McCubbin\nArtwork Name: Down on his luck\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/frederick-mccubbin/down-on-his-luck-1889\n\nWikip |
| Memory/update lifecycle | doc-only | 19 | 0 | all_agents_tutorials/data/artinfo.json:1 {"info": ["\nArtist: Frederick McCubbin\nArtwork Name: Down on his luck\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/frederick-mccubbin/down-on-his-luck-1889\n\nWikip |
| Provenance/citation/evidence | doc-only | 27 | 0 | all_agents_tutorials/data/artinfo.json:1 {"info": ["\nArtist: Frederick McCubbin\nArtwork Name: Down on his luck\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/frederick-mccubbin/down-on-his-luck-1889\n\nWikip |
| Evaluation/observability | doc-only | 22 | 0 | data/clauses.json:161 "clause_text": "This clause defines the performance standards and metrics the service provider must meet, including uptime percentages and response times for issues.", |
| Agent/MCP/tool surface | code | 14 | 1 | all_agents_tutorials/scripts/mcp_server.py:2 This script demonstrates how to create a simple MCP server that fetches |

## 의존성 신호

- LLM/app framework: langchain, langchain-community, langchain-core, langchain-experimental, langchain-openai, langchain-text-splitters, openai, autogen
- Persistence/database: SQLAlchemy

## 주요 파일 후보

### Ingestion/source intake

- `README.md`
- `data/CBAM_Questions and Answers.txt`

### Parsing/OCR/document extraction

- `data/grocery_management_agents_system/input/extract_items.js`
- `CONTRIBUTING.md`
- `README.md`
- `data/ArticleAnalysis.md`
- `data/CELEX_52020PC0563_EN_TXT.txt`
- `data/f2f_action-plan_2020_strategy-info_en.txt`
- `data/GD0 - Annex I to EU-ETS Directive.2024.md.txt`

### Chunking/splitting

- `all_agents_tutorials/data/kv_store_llm_response_cache.json`
- `all_agents_tutorials/data/kv_store_text_chunks.json`
- `README.md`
- `data/CELEX_32021R1119_EN_TXT.txt`
- `data/CELEX_32023L1791_EN_TXT.txt`
- `data/L_2021243EN.01000101.txt`

### Embedding/vector index

- `data/ATLAS_data/profile.json`
- `README.md`
- `data/OJ_L_202401991_EN_TXT.txt`

### Retrieval/search/rerank

- `all_agents_tutorials/data/kv_store_full_docs.json`
- `all_agents_tutorials/data/kv_store_llm_response_cache.json`
- `all_agents_tutorials/data/kv_store_text_chunks.json`
- `README.md`
- `data/ArticleAnalysis.md`
- `data/CBAM_Questions and Answers.txt`
- `data/CELEX_02003L0087-20230605_EN_TXT.md`
- `data/CELEX_32023L0959_EN_TXT.txt`
- `data/Questions_and_Answers__Green_Deal_Industrial_Plan_for_the_Net-Zero_Age.txt`

### Wiki/graph/entity model

- `all_agents_tutorials/data/artinfo.json`
- `all_agents_tutorials/data/kv_store_full_docs.json`
- `all_agents_tutorials/data/kv_store_llm_response_cache.json`
- `all_agents_tutorials/data/kv_store_text_chunks.json`
- `CONTRIBUTING.md`
- `README.md`
- `requirements.txt`
- `data/ArticleAnalysis.md`
- `data/CBAM_Questions and Answers.txt`
- `data/CELEX_02003L0087-20230605_EN_TXT.md`
- `data/CELEX_02018R2066-20210101_EN_TXT.txt`
- `data/CELEX_02018R2067-20210101_EN_TXT.txt`
- ... 6 more

### Memory/update lifecycle

- `all_agents_tutorials/data/artinfo.json`
- `all_agents_tutorials/data/kv_store_full_docs.json`
- `all_agents_tutorials/data/kv_store_llm_response_cache.json`
- `all_agents_tutorials/data/kv_store_text_chunks.json`
- `data/ATLAS_data/task.json`
- `CONTRIBUTING.md`
- `README.md`
- `data/1855.txt`
- `data/CELEX_02003L0087-20230605_EN_TXT.md`
- `data/CELEX_02018R2066-20210101_EN_TXT.txt`
- `data/CELEX_32013R0525_EN_TXT.txt`
- `data/CELEX_32023L0959_EN_TXT.txt`
- ... 6 more

### Provenance/citation/evidence

- `all_agents_tutorials/data/artinfo.json`
- `all_agents_tutorials/data/kv_store_full_docs.json`
- `all_agents_tutorials/data/kv_store_llm_response_cache.json`
- `all_agents_tutorials/data/kv_store_text_chunks.json`
- `CONTRIBUTING.md`
- `data/ArticleAnalysis.md`
- `data/CBAM_Questions and Answers.txt`
- `data/CELEX_02003L0087-20230605_EN_TXT.md`
- `data/CELEX_02018R2066-20210101_EN_TXT.txt`
- `data/CELEX_02018R2067-20210101_EN_TXT.txt`
- `data/CELEX_32011D0753_EN_TXT.txt`
- `data/CELEX_32014D0955_EN_TXT.txt`
- ... 6 more

### Evaluation/observability

- `data/clauses.json`
- `all_agents_tutorials/data/kv_store_full_docs.json`
- `all_agents_tutorials/data/kv_store_text_chunks.json`
- `data/ATLAS_data/profile.json`
- `README.md`
- `data/1855.txt`
- `data/CBAM_Questions and Answers.txt`
- `data/CELEX_02003L0087-20230605_EN_TXT.md`
- `data/CELEX_02018R2066-20210101_EN_TXT.txt`
- `data/CELEX_02018R2067-20210101_EN_TXT.txt`
- `data/CELEX_32013R0525_EN_TXT.txt`
- `data/CELEX_32014D0955_EN_TXT.txt`
- ... 6 more

### Agent/MCP/tool surface

- `all_agents_tutorials/scripts/mcp_server.py`
- `all_agents_tutorials/data/artinfo.json`
- `all_agents_tutorials/data/kv_store_full_docs.json`
- `all_agents_tutorials/data/kv_store_llm_response_cache.json`
- `all_agents_tutorials/data/kv_store_text_chunks.json`
- `CONTRIBUTING.md`
- `README.md`
- `requirements.txt`
- `data/CBAM_Questions and Answers.txt`
- `data/CELEX_02003L0087-20230605_EN_TXT.md`
- `data/CELEX_02018R2066-20210101_EN_TXT.txt`
- `data/CELEX_32014D0955_EN_TXT.txt`
- ... 2 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| README.md | 549 | Implements a state-based workflow using LangGraph to coordinate user interaction, web scraping, and decision support. The system features TypedDict state management, async web scraping with Playwright, and integrates wit |
| data/CBAM_Questions and Answers.txt | 1015 | outside the EU to upload and share their installations and emissions data with reporting |
| data/CBAM_Questions and Answers.txt | 1272 | o Alternatively, reporting declarants can use an XML structure to upload CBAM |
| data/CBAM_Questions and Answers.txt | 1528 | ( 2 ) In the tab “Supplementary”, upload supporting documents attesting unsuccessful |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| data/grocery_management_agents_system/input/extract_items.js | 1 | import { ocr } from 'llama-ocr'; |
| data/grocery_management_agents_system/input/extract_items.js | 9 | const markdown = await ocr({ |
| CONTRIBUTING.md | 120 | To ensure consistency and readability across all notebooks: |
| CONTRIBUTING.md | 128 | ## Code Quality and Readability |
| CONTRIBUTING.md | 130 | To ensure the highest quality and readability of our code: |
| CONTRIBUTING.md | 135 | 4. **Language Model Review:** After completing your code, consider passing it through a language model for additional formatting and readability improvements. This extra step can help make your code even more accessible |
| README.md | 226 | Leverages LangGraph to create a five-node workflow system including decision making, planning, tool execution, and quality validation nodes. The system integrates the CORE API for paper access, PDFplumber for document pr |
| README.md | 486 | Utilizes LangGraph to orchestrate a workflow combining multiple components: GPT-4o-mini for generating search terms and article summaries, NewsAPI for retrieving article metadata, BeautifulSoup for web scraping article c |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| all_agents_tutorials/data/kv_store_text_chunks.json | 2 | "chunk-dfc67a94deb852e6b89f41bf0bbda78f": { |
| all_agents_tutorials/data/kv_store_text_chunks.json | 8 | "chunk-e39cfc54bc512a8e21464c5e3c5d8524": { |
| all_agents_tutorials/data/kv_store_text_chunks.json | 14 | "chunk-3cff81d297d670e4d804b1f60920d168": { |
| all_agents_tutorials/data/kv_store_text_chunks.json | 20 | "chunk-4cde29224938bfc2857bfb4e1ff27ea4": { |
| all_agents_tutorials/data/kv_store_text_chunks.json | 26 | "chunk-0407d038c1682731d77a9c1e798a037f": { |
| all_agents_tutorials/data/kv_store_text_chunks.json | 32 | "chunk-955f8fcd4ad35cfec043d8031e1a9b95": { |
| all_agents_tutorials/data/kv_store_text_chunks.json | 38 | "chunk-fc5306c78cdecc730fe5703b095c8eff": { |
| all_agents_tutorials/data/kv_store_text_chunks.json | 44 | "chunk-300da84d734c241c17e80d5b19891b1a": { |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| data/ATLAS_data/profile.json | 66 | "Vector Calculus" |
| README.md | 79 | 🧠 **[Agent Memory Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques)** - 30 notebooks on agent memory: vector stores, graphs, Mem0, Zep. |
| README.md | 238 | Uses LangGraph to orchestrate a learning workflow that includes checkpoint definition, context building, understanding verification, and Feynman teaching nodes. The system integrates web search for dynamic content retrie |
| README.md | 294 | ClauseAI demonstrates how to build an AI-powered contract analysis system using a multi-agent approach. The system employs specialized AI agents for different aspects of contract review, from clause analysis to complianc |
| README.md | 297 | Implements a sophisticated state-based workflow using LangGraph to coordinate multiple AI agents through contract analysis stages. The system features Pydantic models for data validation, vector storage with Pinecone for |
| README.md | 451 | An intelligent system that automatically detects, diagnoses, and fixes runtime code errors using LangGraph workflow orchestration and ChromaDB vector storage. The system maintains a memory of encountered bugs and their f |
| README.md | 454 | Utilizes a state-based graph workflow that processes function definitions and runtime arguments through specialized nodes for error detection, code analysis, and fix generation. Incorporates ChromaDB for vector-based sto |
| README.md | 462 | An intelligent agent system that enables intuitive exploration and querying of relational databases through natural language interactions. The system utilizes a fleet of specialized agents, coordinated by a stateful Supe |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| all_agents_tutorials/data/kv_store_full_docs.json | 324 | "content": "Artist: Franz Marc\nArtwork Name: The Tower of Blue Horses\nArtwork Genre: symbolic painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/franz-marc/the-tower-of-blue-horses-1913\n\nWik |
| all_agents_tutorials/data/kv_store_full_docs.json | 342 | "content": "Artist: Domenico Induno\nArtwork Name: Portrait of Aleardo Aleardi\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/domenico-induno/portrait-of-aleardo-aleardi-1850 |
| all_agents_tutorials/data/kv_store_text_chunks.json | 646 | "content": "Artist: Franz Marc\nArtwork Name: The Tower of Blue Horses\nArtwork Genre: symbolic painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/franz-marc/the-tower-of-blue-horses-1913\n\nWik |
| all_agents_tutorials/data/kv_store_text_chunks.json | 682 | "content": "Artist: Domenico Induno\nArtwork Name: Portrait of Aleardo Aleardi\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/domenico-induno/portrait-of-aleardo-aleardi-1850 |
| README.md | 73 | 🔍 **[RAG Techniques](https://github.com/NirDiamant/RAG_Techniques)** - 40+ notebooks on retrieval-augmented generation. |
| README.md | 127 | \| 26 \| 📊 **Analysis** \| [Internet Search Agent](all_agents_tutorials/search_the_internet_and_summarize.ipynb) \| LangChain \| Web research, summarization \| |
| README.md | 138 | \| 37 \| 📰 **News** \| [Podcast Generator](all_agents_tutorials/generate_podcast_agent_langgraph.ipynb) \| LangGraph \| Content search, audio generation \| |
| README.md | 238 | Uses LangGraph to orchestrate a learning workflow that includes checkpoint definition, context building, understanding verification, and Feynman teaching nodes. The system integrates web search for dynamic content retrie |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| all_agents_tutorials/data/artinfo.json | 1 | {"info": ["\nArtist: Frederick McCubbin\nArtwork Name: Down on his luck\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/frederick-mccubbin/down-on-his-luck-1889\n\nWikip |
| all_agents_tutorials/data/kv_store_full_docs.json | 36 | "content": "Artist: Caspar David Friedrich\nArtwork Name: Chalk Cliffs on Rügen\nArtwork Genre: landscape\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/caspar-david-friedrich/chalk-cliffs-on-r-gen\n |
| all_agents_tutorials/data/kv_store_full_docs.json | 144 | "content": "Artist: Jean-Francois Millet\nArtwork Name: The Gleaners\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/jean-francois-millet/the-gleaners-1857\n\nWikipedia |
| all_agents_tutorials/data/kv_store_full_docs.json | 153 | "content": "Artist: Edgar Degas\nArtwork Name: The Bellelli Family\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/edgar-degas/the-belleli-family-1862\n\nWikipedia Article:\nT |
| all_agents_tutorials/data/kv_store_full_docs.json | 174 | "content": "Artist: Pierre-Auguste Renoir\nArtwork Name: Lise with Umbrella\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/pierre-auguste-renoir/lise-with-umbrella-1867\n\nWi |
| all_agents_tutorials/data/kv_store_full_docs.json | 198 | "content": "Artist: Pierre-Auguste Renoir\nArtwork Name: Pink and Blue\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/pierre-auguste-renoir/pink-and-blue-1881\n\nWikipedia Ar |
| all_agents_tutorials/data/kv_store_full_docs.json | 291 | "content": "Artist: Edvard Munch\nArtwork Name: The Sick Child\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/edvard-munch/the-sick-child-1886-0\n\nWikipedia Article:\n |
| all_agents_tutorials/data/kv_store_full_docs.json | 315 | "content": "Artist: Edvard Munch\nArtwork Name: The Sick Child (later)\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/edvard-munch/the-sick-child-1886\n\nWikipedia Arti |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| all_agents_tutorials/data/artinfo.json | 1 | {"info": ["\nArtist: Frederick McCubbin\nArtwork Name: Down on his luck\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/frederick-mccubbin/down-on-his-luck-1889\n\nWikip |
| all_agents_tutorials/data/kv_store_full_docs.json | 24 | "content": "Artist: Vincent van Gogh\nArtwork Name: The Potato Eaters\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/vincent-van-gogh/the-potato-eaters-1885-1\n\nWikipe |
| all_agents_tutorials/data/kv_store_full_docs.json | 192 | "content": "Artist: Pierre-Auguste Renoir\nArtwork Name: Dance at Moulin de la Galette\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/pierre-auguste-renoir/ball-at-the- |
| all_agents_tutorials/data/kv_store_full_docs.json | 198 | "content": "Artist: Pierre-Auguste Renoir\nArtwork Name: Pink and Blue\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/pierre-auguste-renoir/pink-and-blue-1881\n\nWikipedia Ar |
| all_agents_tutorials/data/kv_store_full_docs.json | 288 | "content": "Artist: Amedeo Modigliani\nArtwork Name: The Boy\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/amedeo-modigliani/the-boy\n\nWikipedia Article:\nThe Boy is an oil |
| all_agents_tutorials/data/kv_store_full_docs.json | 294 | "content": "Artist: Edvard Munch\nArtwork Name: The Scream\nArtwork Genre: genre painting\nArtwork Media: cardboard,oil,pastel,tempera\nWikiart URL: https://www.wikiart.org/en/edvard-munch/the-scream-1893\n\nWikipedia Ar |
| all_agents_tutorials/data/kv_store_full_docs.json | 309 | "content": "Artist: Edvard Munch\nArtwork Name: Kiss\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/edvard-munch/kiss-1897\n\nWikipedia Article:\nThe Kiss is an oil pai |
| all_agents_tutorials/data/kv_store_text_chunks.json | 46 | "content": "Artist: Vincent van Gogh\nArtwork Name: The Potato Eaters\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/vincent-van-gogh/the-potato-eaters-1885-1\n\nWikipe |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| all_agents_tutorials/data/artinfo.json | 1 | {"info": ["\nArtist: Frederick McCubbin\nArtwork Name: Down on his luck\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/frederick-mccubbin/down-on-his-luck-1889\n\nWikip |
| all_agents_tutorials/data/kv_store_full_docs.json | 165 | "content": "Artist: Edgar Degas\nArtwork Name: Portraits at the Stock Exchange\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/edgar-degas/at-the-stock-exchange-1879\n\n |
| all_agents_tutorials/data/kv_store_full_docs.json | 222 | "content": "Artist: Mary Cassatt\nArtwork Name: Little Girl in a Blue Armchair\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/mary-cassatt/little-girl-in-a-blue-armchair-1878 |
| all_agents_tutorials/data/kv_store_full_docs.json | 228 | "content": "Artist: Mary Cassatt\nArtwork Name: The Boating Party\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/mary-cassatt/the-boating-party-1894\n\nWikipedia Articl |
| all_agents_tutorials/data/kv_store_text_chunks.json | 328 | "content": "Artist: Edgar Degas\nArtwork Name: Portraits at the Stock Exchange\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/edgar-degas/at-the-stock-exchange-1879\n\n |
| all_agents_tutorials/data/kv_store_text_chunks.json | 442 | "content": "Artist: Mary Cassatt\nArtwork Name: Little Girl in a Blue Armchair\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/mary-cassatt/little-girl-in-a-blue-armchair-1878 |
| all_agents_tutorials/data/kv_store_text_chunks.json | 454 | "content": "Artist: Mary Cassatt\nArtwork Name: The Boating Party\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/mary-cassatt/the-boating-party-1894\n\nWikipedia Articl |
| CONTRIBUTING.md | 116 | 9. **References:** Include relevant citations or resources if you have. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| data/clauses.json | 161 | "clause_text": "This clause defines the performance standards and metrics the service provider must meet, including uptime percentages and response times for issues.", |
| all_agents_tutorials/data/kv_store_full_docs.json | 252 | "content": "Artist: Thomas Eakins\nArtwork Name: Portrait of Amelia Van Buren\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/thomas-eakins/portrait-of-amelia-van-buren\n\nWik |
| all_agents_tutorials/data/kv_store_text_chunks.json | 502 | "content": "Artist: Thomas Eakins\nArtwork Name: Portrait of Amelia Van Buren\nArtwork Genre: portrait\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/thomas-eakins/portrait-of-amelia-van-buren\n\nWik |
| data/ATLAS_data/profile.json | 176 | "metrics": [ |
| README.md | 586 | Integrates LangGraph for workflow orchestration, multiple LLM-powered testing agents, and a structured evaluation pipeline that includes static analysis, test case generation, and results verification. The system uses Py |
| README.md | 598 | Implements a sophisticated RAG pipeline using FAISS vectorstore for document storage, semantic chunking for preprocessing, and multiple specialized agents (Retriever, Summarizer, Evaluator) for query processing. The syst |
| README.md | 620 | Leverages LangChain and LangGraph to orchestrate a multi-step recruitment pipeline with structured state management, OpenAI for language generation, and automated candidate evaluation workflows. |
| README.md | 625 | A comprehensive ML assistant using LangGraph + OpenAI that loads datasets, performs preprocessing, feature engineering, model training, evaluation, and visualization through an agentic workflow. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| all_agents_tutorials/scripts/mcp_server.py | 2 | This script demonstrates how to create a simple MCP server that fetches |
| all_agents_tutorials/scripts/mcp_server.py | 8 | from mcp.server.fastmcp import FastMCP |
| all_agents_tutorials/scripts/mcp_server.py | 14 | # Create our MCP server with a descriptive name |
| all_agents_tutorials/scripts/mcp_server.py | 15 | mcp = FastMCP("crypto_price_tracker") |
| all_agents_tutorials/scripts/mcp_server.py | 18 | @mcp.tool() |
| all_agents_tutorials/scripts/mcp_server.py | 63 | # Run the MCP server |
| all_agents_tutorials/scripts/mcp_server.py | 66 | mcp.run() |
| all_agents_tutorials/data/artinfo.json | 1 | {"info": ["\nArtist: Frederick McCubbin\nArtwork Name: Down on his luck\nArtwork Genre: genre painting\nArtwork Media: canvas,oil\nWikiart URL: https://www.wikiart.org/en/frederick-mccubbin/down-on-his-luck-1889\n\nWikip |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- Memory/update lifecycle
- tests
- ci
