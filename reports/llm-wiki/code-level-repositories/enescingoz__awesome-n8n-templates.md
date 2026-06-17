# enescingoz/awesome-n8n-templates 코드 레벨 분석

생성일: 2026-06-17T23:31:20.272Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | D small/demo/list (4) |
| stars | 23064 |
| language |  |
| tags | rag, document-chat, agent-knowledge, korea-signal |
| files/code/source | 351/0/0 |
| tests/ci | 0/2 |
| local path | sources/enescingoz__awesome-n8n-templates |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 93 | 0 | AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json:350 "content": "### For anomaly detection\n1. The first pipeline is uploading (crops) dataset to Qdrant's collection.\n2. The second pipeline sets up cluster (class) centres in this Qdrant collection & cluster (class) thresh |
| Parsing/OCR/document extraction | doc-only | 69 | 0 | PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json:28 "content": "## Try me out!\n\n### This workflow converts a Candidate Resume PDF to an image which is then \"read\" by a Vision Language Model (VLM). The VLM assesses if the candidate's CV is a fit for the desired role.\n |
| Chunking/splitting | doc-only | 38 | 0 | Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json:120 "name": "Recursive Character Text Splitter", |
| Embedding/vector index | doc-only | 71 | 0 | OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json:88 "value": "={{ $('Document for Embedding').item.json.metadata.source }}" |
| Retrieval/search/rerank | doc-only | 142 | 0 | AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json:7 "name": "Make OpenAI Citation for File Retrieval RAG", |
| Wiki/graph/entity model | doc-only | 90 | 0 | AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json:226 "text": "=Create a modern, responsive single-line HTML document. Convert any markdown to Tailwind CSS classes. Replace markdown lists with proper HTML list elements. Remove all newline characters while preserving </br> t |
| Memory/update lifecycle | doc-only | 196 | 0 | AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json:180 "name": "Merge all data", |
| Provenance/citation/evidence | doc-only | 24 | 0 | AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json:7 "name": "Make OpenAI Citation for File Retrieval RAG", |
| Evaluation/observability | doc-only | 34 | 0 | AI_Research_RAG_and_Data_Analysis/Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram.json:156 "content": "=Convert the following text from HTML to normal text:\n\n{{ $json.message.content }}\n\nPlease format the table so that each metric is a separate paragraph!\n\nExample:\n\nTotal views: xx.xxx\nTotal views pre |
| Agent/MCP/tool surface | doc-only | 302 | 0 | AI product imagines.json:81 "type": "@n8n/n8n-nodes-langchain.openAi", |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json`
- `AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json`
- `AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/DataForge Lite - AI URL Data Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/Deduplicate Scraping AI Grants for Eligibility using AI.json`
- `AI_Research_RAG_and_Data_Analysis/Enrich Property Inventory Survey with Image Recognition and AI Agent.json`
- `AI_Research_RAG_and_Data_Analysis/Hacker News Job Listing Scraper and Parser.json`
- `AI_Research_RAG_and_Data_Analysis/Hacker News to Video Content.json`
- `AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json`
- `AI_Research_RAG_and_Data_Analysis/Live Web Research Agent with Superhighway.json`
- ... 6 more

### Parsing/OCR/document extraction

- `PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json`
- `AI_Research_RAG_and_Data_Analysis/Ultimate Scraper Workflow for n8n.json`
- `Airtable/Handling Job Application Submissions with AI and n8n Forms.json`
- `Database_and_Storage/Generate SQL queries from schema only - AI-powered.json`
- `Gmail_and_Email_Automation/📈 Receive Daily Market News from FT.com to your Microsoft outlook inbox.json`
- `Gmail_and_Email_Automation/Extract spending history from gmail to google sheet.json`
- `Gmail_and_Email_Automation/Send a ChatGPT email reply and save responses to Google Sheets.json`
- `Gmail_and_Email_Automation/Send specific PDF attachments from Gmail to Google Drive using OpenAI.json`
- `Google_Drive_and_Google_Sheets/✨ Vision-Based AI Agent Scraper - with Google Sheets, ScrapingBee, and Gemini.json`
- `Google_Drive_and_Google_Sheets/Automated End-to-End Fine-Tuning of OpenAI Models with Google Drive Integration.json`
- ... 6 more

### Chunking/splitting

- `Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI.json`
- `AI_Research_RAG_and_Data_Analysis/Chat with GitHub API Documentation_ RAG-Powered Chatbot with Pinecone & OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/Open Deep Research - AI-Powered Autonomous Research Workflow.json`
- `AI_Research_RAG_and_Data_Analysis/Recipe Recommendations with Qdrant and Mistral.json`
- `AI_Research_RAG_and_Data_Analysis/Scrape and summarize webpages with AI.json`
- `AI_Research_RAG_and_Data_Analysis/Survey Insights with Qdrant, Python and Information Extractor.json`
- `Gmail_and_Email_Automation/Effortless Email Management with AI-Powered Summarization & Review.json`
- `Google_Drive_and_Google_Sheets/RAG Chatbot for Company Documents using Google Drive and Gemini.json`
- ... 6 more

### Embedding/vector index

- `OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json`
- `AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json`
- `AI_Research_RAG_and_Data_Analysis/Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI.json`
- `AI_Research_RAG_and_Data_Analysis/Chat with GitHub API Documentation_ RAG-Powered Chatbot with Pinecone & OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json`
- `AI_Research_RAG_and_Data_Analysis/Recipe Recommendations with Qdrant and Mistral.json`
- `AI_Research_RAG_and_Data_Analysis/Survey Insights with Qdrant, Python and Information Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [1_3 anomaly][1_2 KNN].json`
- ... 6 more

### Retrieval/search/rerank

- `AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json`
- `Database_and_Storage/Supabase Insertion & Upsertion & Retrieval.json`
- `AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json`
- `AI_Research_RAG_and_Data_Analysis/Bilig WorkPaper MCP formula engine for n8n agents.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json`
- `AI_Research_RAG_and_Data_Analysis/Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram.json`
- `AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/Deduplicate Scraping AI Grants for Eligibility using AI.json`
- `AI_Research_RAG_and_Data_Analysis/Enrich Property Inventory Survey with Image Recognition and AI Agent.json`
- `AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json`
- ... 6 more

### Wiki/graph/entity model

- `AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json`
- `AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/Deduplicate Scraping AI Grants for Eligibility using AI.json`
- `AI_Research_RAG_and_Data_Analysis/Enrich Property Inventory Survey with Image Recognition and AI Agent.json`
- `AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json`
- `AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json`
- `AI_Research_RAG_and_Data_Analysis/Recipe Recommendations with Qdrant and Mistral.json`
- `AI_Research_RAG_and_Data_Analysis/Reconcile Rent Payments with Local Excel Spreadsheet and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Spot Workplace Discrimination Patterns with AI.json`
- ... 6 more

### Memory/update lifecycle

- `AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI.json`
- `AI_Research_RAG_and_Data_Analysis/Chat with GitHub API Documentation_ RAG-Powered Chatbot with Pinecone & OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/Deduplicate Scraping AI Grants for Eligibility using AI.json`
- `AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json`
- `AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json`
- `AI_Research_RAG_and_Data_Analysis/Intelligent Web Query and Semantic Re-Ranking Flow using Brave and Google Gemini.json`
- `AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json`
- `AI_Research_RAG_and_Data_Analysis/Open Deep Research - AI-Powered Autonomous Research Workflow.json`
- ... 6 more

### Provenance/citation/evidence

- `AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json`
- `AI_Research_RAG_and_Data_Analysis/Query Perplexity AI from your n8n workflows.json`
- `AI_Research_RAG_and_Data_Analysis/Ultimate Scraper Workflow for n8n.json`
- `OpenAI_and_LLMs/AI Blog Writer Pipeline with Ollama.json`
- `OpenAI_and_LLMs/AI web researcher for sales.json`
- `OpenAI_and_LLMs/AI_ Summarize podcast episode and enhance using Wikipedia.json`
- `PDF_and_Document_Processing/Chat with PDF docs using AI (quoting sources).json`
- `Telegram/Send a random recipe once a day to Telegram.json`
- `llms.txt`
- `README-ar.md`
- `README-de.md`
- `README-es.md`
- ... 6 more

### Evaluation/observability

- `AI_Research_RAG_and_Data_Analysis/Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram.json`
- `AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json`
- `AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json`
- `AI_Research_RAG_and_Data_Analysis/Intelligent Web Query and Semantic Re-Ranking Flow using Brave and Google Gemini.json`
- `AI_Research_RAG_and_Data_Analysis/Learn Anything from HN - Get Top Resource Recommendations from Hacker News.json`
- `AI_Research_RAG_and_Data_Analysis/Spot Workplace Discrimination Patterns with AI.json`
- `AI_Research_RAG_and_Data_Analysis/Summarize Umami data with AI (via Openrouter) and save it to Baserow.json`
- `AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [1_3 anomaly][1_2 KNN].json`
- `AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [2_2 KNN].json`
- `AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [2_3 - anomaly].json`
- `Airtable/AI Agent to chat with Airtable and analyze data.json`
- `Google_Drive_and_Google_Sheets/Extract Information from a Logo Sheet using forms, AI, Google Sheet and Airtable.json`
- ... 6 more

### Agent/MCP/tool surface

- `AI product imagines.json`
- `AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json`
- `AI_Research_RAG_and_Data_Analysis/Analyze tradingview.com charts with Chrome extension, N8N and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json`
- `AI_Research_RAG_and_Data_Analysis/Bilig WorkPaper MCP formula engine for n8n agents.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json`
- `AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI.json`
- `AI_Research_RAG_and_Data_Analysis/Chat with GitHub API Documentation_ RAG-Powered Chatbot with Pinecone & OpenAI.json`
- `AI_Research_RAG_and_Data_Analysis/Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram.json`
- `AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json`
- `AI_Research_RAG_and_Data_Analysis/DataForge Lite - AI URL Data Extractor.json`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json | 350 | "content": "### For anomaly detection\n1. The first pipeline is uploading (crops) dataset to Qdrant's collection.\n2. The second pipeline sets up cluster (class) centres in this Qdrant collection & cluster (class) thresh |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 273 | "content": "### Text scraper tool\nThis tool is designed to return all text from the given webpage.\n\n💡 **Consider adding proxy for better crawling accuracy.**\n" |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 593 | "content": "### URL scraper tool\nThis tool is designed to return all links (URLs) from the given webpage.\n\n💡 **Consider adding proxy for better crawling accuracy.**" |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 708 | "content": "## Autonomous AI crawler\nThis workflow autonomously navigates through given websites and retrieves social media profile links. \n\n💡 **You can modify this workflow to retrieve other type of data (e.g. conta |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 723 | "systemMessage": "You are an automated web crawler tasked with extracting social media URLs from a webpage provided by the user. You have access to a text retrieval tool to gather all text content from the page and a URL |
| AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json | 495 | "content": "## Step 2. Extract and Partition Into Chapters & Sections\n[Learn more about reading PDF Files](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile)\n\nRather than ingest the ra |
| AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json | 167 | "name": "Upload to Cloudinary", |
| AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json | 174 | "url": "https://api.cloudinary.com/v1_1/daglih2g8/image/upload", |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json | 28 | "content": "## Try me out!\n\n### This workflow converts a Candidate Resume PDF to an image which is then \"read\" by a Vision Language Model (VLM). The VLM assesses if the candidate's CV is a fit for the desired role.\n |
| PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json | 90 | "content": "## 1. Download Candidate Resume\n[Read more about using Google Drive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive)\n\nFor this demonstration, we'll pull the candidate's resum |
| PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json | 131 | "content": "## 2. Convert PDF to Image(s)\n[Read more about using Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF)\n\nAI vision models can only accept images (and sometimes videos!) as non-text inputs but no |
| PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json | 153 | "name": "PDF-to-Image API", |
| PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json | 160 | "url": "https://stirlingpdf.io/api/v1/convert/pdf/img", |
| PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json | 263 | "content": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n### Data Privacy Warning!\nFor demo purposes, we're using the public online version of Stirling PDF. It is recommended to setup your own private instance of Stirling PDF |
| PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json | 274 | "node": "PDF-to-Image API", |
| PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json | 281 | "PDF-to-Image API": { |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json | 120 | "name": "Recursive Character Text Splitter", |
| Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json | 188 | "jsCode": "let split_text = \"—---------------------------—-------------[SECTIONEND]—---------------------------—-------------\";\nfor (const item of $input.all()) {\n item.json.section = item.json.data.split(split_text) |
| Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json | 232 | "content": "## Prepare context\nIn this section, the \nagent node will prepare \ncontext for a section \n(chunk of text), which \nwill then be passed for \nconversion into a vectors \nalong with the section itself." |
| Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json | 245 | "text": "=<document> \n{{ $('Split Document Text Into Sections').item.json.document }}\n</document> \nHere is the chunk we want to situate within the whole document \n<chunk> \n{{ $json.section }}\n</chunk> \nPlease give |
| Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json | 402 | "Recursive Character Text Splitter": { |
| AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json | 184 | "name": "Recursive Character Text Splitter", |
| AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json | 928 | "Recursive Character Text Splitter": { |
| AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json | 74 | "name": "Recursive Character Text Splitter", |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json | 88 | "value": "={{ $('Document for Embedding').item.json.metadata.source }}" |
| OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json | 92 | "value": "={{ $('Document for Embedding').item.json.metadata.format }}" |
| OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json | 96 | "value": "={{ $('Document for Embedding').item.json.metadata.backgroundColor }}" |
| OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json | 129 | "content": "### Get Color Channels\n[Source: https://www.pinecone.io/learn/series/image-search/color-histograms/](https://www.pinecone.io/learn/series/image-search/color-histograms/)" |
| OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json | 145 | "content": "### Generate Image Keywords\n[Source: https://www.pinecone.io/learn/series/image-search/bag-of-visual-words/](https://www.pinecone.io/learn/series/image-search/bag-of-visual-words/)\n\nNote, OpenAI Image mode |
| OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json | 161 | "content": "⚠️ **Multimodal embedding is not designed analyze medical images for diagnostic features or disease patterns.** Please do not use Multimodal embedding for medical purposes." |
| OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json | 182 | "name": "Document for Embedding", |
| OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json | 237 | "content": "## 2. Image Embedding Methods\n[Read more about working with images in n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.editimage)\n\nThere are a [myriad of image embedding techniques]( |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 7 | "name": "Make OpenAI Citation for File Retrieval RAG", |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 77 | "content": "## Make OpenAI Citation for File Retrieval RAG\n\n## Use case\n\nIn this example, we will ensure that all texts from the OpenAI assistant search for citations and sources in the vector store files. We can als |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 135 | "content": "## Setup\n\n- Configure OpenAI Key\n\n### In this step, we will use an assistant created within the OpenAI platform that contains a vector store a.k.a file retrieval" |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 180 | "content": "### Retrieving all thread content is necessary because the OpenAI tool does not retrieve all citations upon request." |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 231 | "name": "Retrieve file name from a file ID", |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 309 | "content": "### A file retrieval request contains a lot of information, and we want only the text that will be substituted and the file name.\n\n- id\n- filename\n- text\n" |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 435 | "Retrieve file name from a file ID": { |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 472 | "node": "Retrieve file name from a file ID", |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json | 226 | "text": "=Create a modern, responsive single-line HTML document. Convert any markdown to Tailwind CSS classes. Replace markdown lists with proper HTML list elements. Remove all newline characters while preserving </br> t |
| AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json | 1614 | "text": "=Create a modern, responsive single-line HTML document. Convert any markdown to Tailwind CSS classes. Replace markdown lists with proper HTML list elements. Remove all newline characters while preserving </br> t |
| AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json | 3002 | "text": "=Create a modern, responsive single-line HTML document. Convert any markdown to Tailwind CSS classes. Replace markdown lists with proper HTML list elements. Remove all newline characters while preserving </br> t |
| AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json | 4390 | "text": "=Create a modern, responsive single-line HTML document. Convert any markdown to Tailwind CSS classes. Replace markdown lists with proper HTML list elements. Remove all newline characters while preserving </br> t |
| AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json | 113 | "content": "## Try It Out!\n### This workflow does the following:\n* Monitors a target folder for changes using the local file trigger\n* Synchronises files in the target folder with their vectors in Qdrant\n* Mistral AI |
| AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json | 807 | "content": "## Try Me Out!\n### This workflow builds an AI powered Legal assistant who answers questions about tax codes.\n* Download publically available tax code PDFs from the relevant government website.\n* Strategica |
| AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json | 355 | "content": "## Try It Out!\n### This workflow does the following:\n* Downloads an image\n* Uses an object classification AI model to identify objects in the image.\n* Crops the objects out from the original image into ne |
| AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json | 850 | "content": "## Try It Out!\n\n### This workflow generates highly-detailed customer insights from Trustpilot reviews. Works best when dealing with a large number of reviews.\n\n* Import Trustpilot reviews and vectorise in |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 180 | "name": "Merge all data", |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 181 | "type": "n8n-nodes-base.merge", |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 692 | "content": "## ⚠️ Note\n\n1. Complete video guide for this workflow is available [on my YouTube](https://youtu.be/2W09puFZwtY). \n2. Remember to add your credentials and configure nodes.\n3. If you like this workflow, pl |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 819 | "Merge all data": { |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 944 | "node": "Merge all data", |
| AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json | 977 | "node": "Merge all data", |
| AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json | 381 | "name": "Delete Existing Point", |
| AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json | 388 | "url": "=http://qdrant:6333/collections/{{ $('Set Variables').item.json.qdrant_collection }}/points/delete", |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 7 | "name": "Make OpenAI Citation for File Retrieval RAG", |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 77 | "content": "## Make OpenAI Citation for File Retrieval RAG\n\n## Use case\n\nIn this example, we will ensure that all texts from the OpenAI assistant search for citations and sources in the vector store files. We can als |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 180 | "content": "### Retrieving all thread content is necessary because the OpenAI tool does not retrieve all citations upon request." |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 216 | "name": "Split all citations from a single message", |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 290 | "value": "={{ $('Split all citations from a single message').item.json.text }}" |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 324 | "content": "### With the last three splits, we may have many citations and texts to substitute. By doing an aggregation, it will be possible to handle everything as a single request." |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 338 | "content": "### This simple code will take all the previous files and citations and alter the original text, formatting the output. In this way, we can use Markdown tags to create links, or if you prefer, we can add an H |
| AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json | 461 | "node": "Split all citations from a single message", |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| AI_Research_RAG_and_Data_Analysis/Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram.json | 156 | "content": "=Convert the following text from HTML to normal text:\n\n{{ $json.message.content }}\n\nPlease format the table so that each metric is a separate paragraph!\n\nExample:\n\nTotal views: xx.xxx\nTotal views pre |
| AI_Research_RAG_and_Data_Analysis/Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram.json | 537 | "content": "=Please analyze the following data and output the results in tabular form:\n\n\| Metrics \| Last 7 days \| Previous year \| Percentage change \|\n\|-------------------------------\|---------------\|---------\|\n\| Tota |
| AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json | 34 | "content": "![5min Logo](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/banner.png)\n## AI Agent To Chat With Youtube\n**Made by [Mark Shcherbakov](https://www.linkedin.com/in/marklowcoding/ |
| AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json | 50 | "content": "### Set up steps\n\n1. **API Setup**:\n - Create a [Google Cloud](https://console.cloud.google.com/apis/dashboard) project and enable the YouTube Data API.\n - Generate an API key for [Apify](https://www.apif |
| AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json | 253 | "description": "Analyze a thumbnail image based on a given prompt. The prompt can be customized for specific analysis needs, such as design critique, color scheme evaluation, or content assessment.\nUse link of maxRes th |
| AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json | 1646 | "text": "=Given the following contents from a SERP search for the query <query>{{ $('Item Ref').first().json.query }}</query>, generate a list of learnings from the contents. Return a maximum of 3 learnings, but feel fre |
| AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json | 4587 | "text": "=Given the following contents from a SERP search for the query <query>{{ $('Item Ref').first().json.query }}</query>, generate a list of learnings from the contents. Return a maximum of 3 learnings, but feel fre |
| AI_Research_RAG_and_Data_Analysis/Intelligent Web Query and Semantic Re-Ranking Flow using Brave and Google Gemini.json | 151 | "message": "=\nYou are an expert information retrieval and critical evaluation assistant designed to process, rank, and extract high-relevance content from web search results for complex user queries. You must provide va |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| AI product imagines.json | 81 | "type": "@n8n/n8n-nodes-langchain.openAi", |
| AI product imagines.json | 88 | "name": "OpenAI", |
| AI product imagines.json | 92 | "name": "OpenAi account" |
| AI product imagines.json | 163 | "type": "@n8n/n8n-nodes-langchain.openAi", |
| AI product imagines.json | 174 | "name": "OpenAi account" |
| AI product imagines.json | 195 | "name": "OpenAI Chat Model", |
| AI product imagines.json | 199 | "name": "OpenAi account" |
| AI product imagines.json | 210 | "type": "@n8n/n8n-nodes-langchain.agent", |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- Memory/update lifecycle
- tests
