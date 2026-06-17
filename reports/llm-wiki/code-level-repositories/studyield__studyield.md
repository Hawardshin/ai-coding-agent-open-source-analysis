# studyield/studyield 코드 레벨 분석

생성일: 2026-06-17T23:31:23.723Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (99) |
| stars | 50 |
| language | TypeScript |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 396/329/329 |
| tests/ci | 0/4 |
| local path | sources/studyield__studyield |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 43 | 24 | backend/migrations/010_blog.sql:97 Upload any document, paste text, or even take a photo of your textbook — Studyield''s AI will automatically generate high-quality flashcards. No more spending hours manually creating cards. |
| Parsing/OCR/document extraction | code | 61 | 32 | backend/migrations/003_notes.sql:11 source_type VARCHAR(30) DEFAULT 'manual', -- manual, ai_generated, pdf, youtube, audio, website, handwriting |
| Chunking/splitting | code | 16 | 16 | backend/src/modules/knowledge-base/chunking.service.ts:22 chunk(text: string, options: ChunkingOptions = {}): TextChunk[] { |
| Embedding/vector index | code | 29 | 10 | backend/src/modules/ai/embedding.service.ts:5 vector: number[]; |
| Retrieval/search/rerank | code | 55 | 36 | backend/migrations/010_blog.sql:133 Don''t just flip the card and think "I knew that." Actually try to recall the answer **before** looking. This effort of retrieval strengthens memory pathways. |
| Wiki/graph/entity model | code | 28 | 1 | backend/src/main.ts:75 .addTag('Knowledge Graph', 'Entity-relation mapping') |
| Memory/update lifecycle | code | 148 | 111 | backend/migrations/000_initial.sql:31 user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| Provenance/citation/evidence | code | 37 | 15 | backend/migrations/000_initial.sql:138 citations JSONB DEFAULT '[]', |
| Evaluation/observability | code | 22 | 12 | backend/migrations/000_initial.sql:245 ease_factor DOUBLE PRECISION DEFAULT 2.5, |
| Agent/MCP/tool surface | code | 53 | 21 | backend/src/main.ts:74 .addTag('Problem Solver', 'Multi-agent problem solving') |

## 의존성 신호

- LLM/app framework: openai
- Vector/search store: @qdrant/js-client-rest
- Document parsing/OCR: cheerio, mammoth, @types/cheerio
- Persistence/database: ioredis, pg, @types/pg

## 주요 파일 후보

### Ingestion/source intake

- `backend/migrations/010_blog.sql`
- `backend/src/modules/chat/chat.controller.ts`
- `backend/src/modules/chat/chat.service.ts`
- `backend/src/modules/content/content-extract.controller.ts`
- `backend/src/modules/content/documents.controller.ts`
- `backend/src/modules/exam-clone/exam-clone.controller.ts`
- `backend/src/modules/exam-clone/exam-clone.service.ts`
- `backend/src/modules/storage/storage.controller.ts`
- `backend/src/modules/storage/storage.service.ts`
- `frontend/src/components/ImageOcclusionEditor.tsx`
- `frontend/src/config/api.ts`
- `frontend/src/components/documents/DocumentsTab.tsx`
- ... 6 more

### Parsing/OCR/document extraction

- `backend/migrations/003_notes.sql`
- `backend/migrations/010_blog.sql`
- `backend/migrations/011_blog_update_authors_images.sql`
- `backend/src/types/pdf-parse.d.ts`
- `backend/src/modules/chat/chat.controller.ts`
- `backend/src/modules/chat/chat.service.ts`
- `backend/src/modules/content/content-extract.controller.ts`
- `backend/src/modules/content/documents.controller.ts`
- `backend/src/modules/exam-clone/exam-clone.controller.ts`
- `backend/src/modules/exam-clone/exam-clone.service.ts`
- `backend/src/modules/knowledge-base/document-processor.service.ts`
- `backend/src/modules/problem-solver/problem-solver.controller.ts`
- ... 6 more

### Chunking/splitting

- `backend/src/modules/knowledge-base/chunking.service.ts`
- `backend/src/modules/ai/ai.service.ts`
- `backend/src/modules/chat/chat.controller.ts`
- `backend/src/modules/chat/chat.gateway.ts`
- `backend/src/modules/chat/chat.service.ts`
- `backend/src/modules/code-sandbox/code-sandbox.controller.ts`
- `backend/src/modules/code-sandbox/code-sandbox.gateway.ts`
- `backend/src/modules/content/content-extract.controller.ts`
- `backend/src/modules/knowledge-base/knowledge-base.service.ts`
- `backend/src/modules/problem-solver/problem-solver.service.ts`
- `backend/src/modules/storage/storage.service.ts`
- `backend/src/modules/problem-solver/agents/base.agent.ts`
- ... 4 more

### Embedding/vector index

- `backend/src/modules/ai/embedding.service.ts`
- `backend/src/app.module.ts`
- `backend/src/health.controller.ts`
- `backend/src/modules/ai/ai.module.ts`
- `backend/src/modules/ai/index.ts`
- `backend/src/modules/knowledge-base/knowledge-base.service.ts`
- `backend/src/modules/qdrant/index.ts`
- `backend/src/modules/qdrant/qdrant.module.ts`
- `backend/src/modules/qdrant/qdrant.service.ts`
- `start.sh`
- `backend/package-lock.json`
- `backend/package.json`
- ... 6 more

### Retrieval/search/rerank

- `backend/migrations/010_blog.sql`
- `backend/src/modules/blog/blog.controller.ts`
- `backend/src/modules/blog/blog.service.ts`
- `backend/src/modules/chat/chat.service.ts`
- `backend/src/modules/content/study-sets.controller.ts`
- `backend/src/modules/content/study-sets.service.ts`
- `backend/src/modules/knowledge-base/knowledge-base.controller.ts`
- `backend/src/modules/knowledge-base/knowledge-base.service.ts`
- `backend/src/modules/qdrant/qdrant.service.ts`
- `backend/src/modules/research/index.ts`
- `backend/src/modules/research/research.module.ts`
- `backend/src/modules/research/research.service.ts`
- ... 6 more

### Wiki/graph/entity model

- `backend/src/main.ts`
- `backend/package-lock.json`
- `frontend/package-lock.json`
- `.github/ISSUE_TEMPLATE/config.yml`
- `frontend/src/locales/ar.json`
- `frontend/src/locales/bn.json`
- `frontend/src/locales/de.json`
- `frontend/src/locales/en.json`
- `frontend/src/locales/es.json`
- `frontend/src/locales/fr.json`
- `frontend/src/locales/hi.json`
- `frontend/src/locales/it.json`
- ... 6 more

### Memory/update lifecycle

- `backend/migrations/000_initial.sql`
- `backend/migrations/001_add_exam_and_type_columns.sql`
- `backend/migrations/002_exam_clone_tables.sql`
- `backend/migrations/002_live_quiz_history.sql`
- `backend/migrations/003_notes.sql`
- `backend/migrations/004_exam_clone_features.sql`
- `backend/migrations/005_exam_gamification.sql`
- `backend/migrations/006_mind_maps.sql`
- `backend/migrations/006_problem_chat_messages.sql`
- `backend/migrations/007_problem_solver_enhancements.sql`
- `backend/migrations/010_blog.sql`
- `backend/migrations/010_create_user_fcm_tokens_table.sql`
- ... 6 more

### Provenance/citation/evidence

- `backend/migrations/000_initial.sql`
- `backend/migrations/003_notes.sql`
- `backend/migrations/010_blog.sql`
- `backend/src/modules/chat/chat.service.ts`
- `backend/src/modules/content/notes.service.ts`
- `backend/src/modules/research/research.service.ts`
- `backend/src/modules/content/dto/note.dto.ts`
- `frontend/src/services/chat.ts`
- `frontend/src/types/index.ts`
- `frontend/src/pages/dashboard/ChatPage.tsx`
- `frontend/src/pages/dashboard/GenerateNotePage.tsx`
- `frontend/src/pages/dashboard/ImportSection.tsx`
- ... 6 more

### Evaluation/observability

- `backend/migrations/000_initial.sql`
- `backend/migrations/002_exam_clone_tables.sql`
- `backend/migrations/010_blog.sql`
- `backend/src/main.ts`
- `backend/src/modules/analytics/analytics.controller.ts`
- `backend/src/modules/exam-clone/exam-clone.service.ts`
- `backend/src/modules/teach-back/teach-back.gateway.ts`
- `backend/src/modules/teach-back/teach-back.service.ts`
- `frontend/src/pages/BlogPage.tsx`
- `frontend/src/services/teachBack.ts`
- `frontend/src/pages/dashboard/TeachBackPage.tsx`
- `frontend/src/pages/dashboard/TeachBackSessionPage.tsx`
- ... 6 more

### Agent/MCP/tool surface

- `backend/src/main.ts`
- `backend/src/common/interceptors/logging.interceptor.ts`
- `backend/src/modules/ai/ai.service.ts`
- `backend/src/modules/ai/embedding.service.ts`
- `backend/src/modules/content/content-extract.controller.ts`
- `backend/src/modules/problem-solver/index.ts`
- `backend/src/modules/problem-solver/problem-solver.module.ts`
- `backend/src/modules/problem-solver/problem-solver.service.ts`
- `backend/src/modules/research/research.service.ts`
- `backend/src/modules/problem-solver/agents/alternative-method.agent.ts`
- `backend/src/modules/problem-solver/agents/analysis.agent.ts`
- `backend/src/modules/problem-solver/agents/base.agent.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| backend/migrations/010_blog.sql | 97 | Upload any document, paste text, or even take a photo of your textbook — Studyield''s AI will automatically generate high-quality flashcards. No more spending hours manually creating cards. |
| backend/migrations/010_blog.sql | 225 | - Upload lecture notes, textbooks, and past papers |
| backend/migrations/010_blog.sql | 290 | 2. **Upload it** to Studyield |
| backend/migrations/010_blog.sql | 508 | - **AI generation**: Upload a document or paste text, and AI creates flashcards for you |
| backend/src/modules/chat/chat.controller.ts | 79 | @Post('conversations/:id/messages/upload') |
| backend/src/modules/chat/chat.service.ts | 240 | // Upload file to storage for later retrieval |
| backend/src/modules/chat/chat.service.ts | 242 | const result = await this.storageService.upload(file.buffer, file.originalname, { |
| backend/src/modules/chat/chat.service.ts | 249 | this.logger.warn(`Failed to upload file to storage: ${(error as Error).message}`); |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| backend/migrations/003_notes.sql | 11 | source_type VARCHAR(30) DEFAULT 'manual', -- manual, ai_generated, pdf, youtube, audio, website, handwriting |
| backend/migrations/010_blog.sql | 105 | #### 4. Handwriting OCR |
| backend/migrations/010_blog.sql | 106 | Write notes by hand? No problem. Our vision-powered OCR can convert your handwritten notes to digital text, making them searchable and easy to organize. |
| backend/migrations/010_blog.sql | 274 | ('handwriting-ocr-digital-notes', |
| backend/migrations/010_blog.sql | 275 | 'From Handwritten to Digital: How OCR Transforms Your Notes', |
| backend/migrations/010_blog.sql | 276 | 'Love writing by hand but hate losing your notes? Learn how Studyield''s Handwriting OCR bridges the gap between analog and digital study.', |
| backend/migrations/010_blog.sql | 277 | '## From Handwritten to Digital: How OCR Transforms Your Notes |
| backend/migrations/010_blog.sql | 281 | That''s where Studyield''s **Handwriting OCR** comes in. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| backend/src/modules/knowledge-base/chunking.service.ts | 22 | chunk(text: string, options: ChunkingOptions = {}): TextChunk[] { |
| backend/src/modules/knowledge-base/chunking.service.ts | 180 | for (const chunk of chunks) { |
| backend/src/modules/knowledge-base/chunking.service.ts | 181 | const combinedTokens = this.estimateTokens(currentContent + '\n' + chunk.content); |
| backend/src/modules/knowledge-base/chunking.service.ts | 188 | endOffset: chunk.startOffset, |
| backend/src/modules/knowledge-base/chunking.service.ts | 190 | currentContent = chunk.content; |
| backend/src/modules/knowledge-base/chunking.service.ts | 191 | currentStartOffset = chunk.startOffset; |
| backend/src/modules/knowledge-base/chunking.service.ts | 193 | currentContent += (currentContent.length > 0 ? '\n' : '') + chunk.content; |
| backend/src/modules/knowledge-base/chunking.service.ts | 195 | currentStartOffset = chunk.startOffset; |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| backend/src/modules/ai/embedding.service.ts | 5 | vector: number[]; |
| backend/src/modules/ai/embedding.service.ts | 25 | 'openai/text-embedding-3-small', |
| backend/src/modules/ai/embedding.service.ts | 35 | const response = await fetch(`${this.baseUrl}/embeddings`, { |
| backend/src/modules/ai/embedding.service.ts | 51 | this.logger.error(`Embedding failed: ${error}`); |
| backend/src/modules/ai/embedding.service.ts | 52 | throw new Error(`Embedding failed: ${response.status}`); |
| backend/src/modules/ai/embedding.service.ts | 58 | vector: data.data[0].embedding, |
| backend/src/modules/ai/embedding.service.ts | 66 | const response = await fetch(`${this.baseUrl}/embeddings`, { |
| backend/src/modules/ai/embedding.service.ts | 82 | this.logger.error(`Batch embedding failed: ${error}`); |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| backend/migrations/010_blog.sql | 133 | Don''t just flip the card and think "I knew that." Actually try to recall the answer **before** looking. This effort of retrieval strengthens memory pathways. |
| backend/migrations/010_blog.sql | 279 | There''s something special about writing by hand. Research from Princeton University shows that students who take handwritten notes **comprehend and remember more** than those who type. But paper notes are hard to search |
| backend/src/modules/blog/blog.controller.ts | 18 | @ApiQuery({ name: 'search', required: false, type: String }) |
| backend/src/modules/blog/blog.controller.ts | 23 | @Query('search') search?: string, |
| backend/src/modules/blog/blog.controller.ts | 29 | search, |
| backend/src/modules/blog/blog.service.ts | 51 | search?: string, |
| backend/src/modules/blog/blog.service.ts | 63 | if (search) { |
| backend/src/modules/blog/blog.service.ts | 65 | params.push(`%${search}%`); |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| backend/src/main.ts | 75 | .addTag('Knowledge Graph', 'Entity-relation mapping') |
| frontend/package-lock.json | 832 | "node_modules/@eslint-community/eslint-utils": { |
| frontend/package-lock.json | 834 | "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz", |
| frontend/package-lock.json | 851 | "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": { |
| frontend/package-lock.json | 864 | "node_modules/@eslint-community/regexpp": { |
| frontend/package-lock.json | 866 | "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz", |
| frontend/package-lock.json | 3359 | "@eslint-community/regexpp": "^4.12.2", |
| frontend/package-lock.json | 3586 | "@eslint-community/eslint-utils": "^4.9.1", |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| backend/migrations/000_initial.sql | 31 | user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| backend/migrations/000_initial.sql | 47 | study_set_id UUID NOT NULL REFERENCES study_sets(id) ON DELETE CASCADE, |
| backend/migrations/000_initial.sql | 48 | user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| backend/migrations/000_initial.sql | 67 | study_set_id UUID NOT NULL REFERENCES study_sets(id) ON DELETE CASCADE, |
| backend/migrations/000_initial.sql | 88 | user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, |
| backend/migrations/000_initial.sql | 101 | knowledge_base_id UUID NOT NULL REFERENCES knowledge_bases(id) ON DELETE CASCADE, |
| backend/migrations/000_initial.sql | 102 | document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE, |
| backend/migrations/000_initial.sql | 110 | knowledge_base_id UUID NOT NULL REFERENCES knowledge_bases(id) ON DELETE CASCADE, |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| backend/migrations/000_initial.sql | 138 | citations JSONB DEFAULT '[]', |
| backend/migrations/000_initial.sql | 367 | source_id UUID NOT NULL REFERENCES knowledge_nodes(id) ON DELETE CASCADE, |
| backend/migrations/000_initial.sql | 376 | CREATE INDEX idx_knowledge_edges_source_id ON knowledge_edges(source_id); |
| backend/migrations/003_notes.sql | 12 | source_url TEXT, |
| backend/migrations/003_notes.sql | 13 | source_metadata JSONB, -- Additional source info (video title, page numbers, etc.) |
| backend/migrations/010_blog.sql | 109 | Need to write an essay or understand a complex topic? Our Deep Research feature generates comprehensive research reports with citations, saving you hours of manual research. |
| backend/migrations/010_blog.sql | 442 | 4. **Review the report**: organized sections, key findings, and citations |
| backend/migrations/010_blog.sql | 450 | - **Source citations**: References you can verify and cite |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| backend/migrations/000_initial.sql | 245 | ease_factor DOUBLE PRECISION DEFAULT 2.5, |
| backend/migrations/000_initial.sql | 259 | score DOUBLE PRECISION DEFAULT 0, |
| backend/migrations/000_initial.sql | 318 | score DOUBLE PRECISION DEFAULT 0, |
| backend/migrations/000_initial.sql | 386 | evaluation JSONB, |
| backend/migrations/002_exam_clone_tables.sql | 11 | ease_factor DOUBLE PRECISION DEFAULT 2.5, |
| backend/migrations/002_exam_clone_tables.sql | 25 | score DOUBLE PRECISION DEFAULT 0, |
| backend/migrations/002_exam_clone_tables.sql | 84 | score DOUBLE PRECISION DEFAULT 0, |
| backend/migrations/010_blog.sql | 72 | A 2019 meta-analysis published in *Psychological Bulletin* found that spaced practice improved long-term retention by an average of **10-30%** compared to massed practice. When combined with active recall (testing yourse |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| backend/src/main.ts | 74 | .addTag('Problem Solver', 'Multi-agent problem solving') |
| backend/src/common/interceptors/logging.interceptor.ts | 12 | const userAgent = request.get('user-agent') \|\| ''; |
| backend/src/modules/ai/ai.service.ts | 5 | * OpenRouter provides a single API compatible with OpenAI SDK |
| backend/src/modules/ai/ai.service.ts | 6 | * to access models from OpenAI, Anthropic, Google, DeepSeek, and more. |
| backend/src/modules/ai/ai.service.ts | 18 | import OpenAI from 'openai'; |
| backend/src/modules/ai/ai.service.ts | 23 | const DEFAULT_MODEL = 'openai/gpt-4o-mini'; |
| backend/src/modules/ai/ai.service.ts | 24 | const DEFAULT_VISION_MODEL = 'openai/gpt-4o'; |
| backend/src/modules/ai/ai.service.ts | 61 | private openRouterClient: OpenAI \| null = null; |

## Gap

- tests
