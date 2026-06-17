# labring/FastGPT 코드 레벨 분석

생성일: 2026-06-17T23:31:18.403Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 28496 |
| language | TypeScript |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 4105/3181/2653 |
| tests/ci | 120/61 |
| local path | sources/labring__FastGPT |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 158 | 60 | packages/global/common/error/s3.ts:5 * Parse S3 upload error and return user-friendly error message key |
| Parsing/OCR/document extraction | code | 199 | 48 | packages/service/worker/function.ts:45 // mammoth/xlsx/pdf-parse 历史上有 module 级缓存与潜在内存泄漏，定期回收 worker |
| Chunking/splitting | code | 180 | 89 | packages/service/worker/function.ts:5 } from '@fastgpt/global/common/string/textSplitter'; |
| Embedding/vector index | code | 275 | 82 | packages/service/core/ai/embedding/index.ts:9 const logger = getLogger(LogCategories.MODULE.AI.EMBEDDING); |
| Retrieval/search/rerank | code | 341 | 120 | packages/global/core/ai/constants.ts:18 rerank = 'rerank' |
| Wiki/graph/entity model | code | 54 | 14 | packages/web/core/workflow/utils.ts:11 source === AppToolSourceEnum.community \|\| |
| Memory/update lifecycle | code | 873 | 518 | packages/service/env.ts:107 description: 'Redis 内存水位检测缓存时长（毫秒），避免每个流请求都调用 INFO MEMORY' |
| Provenance/citation/evidence | code | 128 | 78 | packages/global/common/parentFolder/type.ts:12 sourceId: ParentIdSchema.optional(), |
| Evaluation/observability | code | 204 | 89 | packages/global/vitest.config.ts:10 '@fastgpt-sdk/otel/metrics': resolve('../../sdk/otel/src/metrics-entry.ts'), |
| Agent/MCP/tool surface | code | 675 | 293 | packages/service/env.ts:53 OPENAI_BASE_URL: UrlSchema.default('https://api.openai.com/v1'), |

## 의존성 신호

- LLM/app framework: openai, @llamaindex/liteparse
- Vector/search store: @zilliz/milvus2-sdk-node
- Document parsing/OCR: cheerio, mammoth
- Eval/observability: @opentelemetry/api, pino-opentelemetry-transport, @opentelemetry/api-logs, @opentelemetry/exporter-logs-otlp-http, @opentelemetry/exporter-metrics-otlp-http, @opentelemetry/exporter-trace-otlp-http, @opentelemetry/resources, @opentelemetry/sdk-logs
- Persistence/database: mongodb-memory-server, ioredis, mysql2, pg, @types/pg

## 주요 파일 후보

### Ingestion/source intake

- `packages/global/common/error/s3.ts`
- `packages/service/core/dataset/read.ts`
- `packages/service/support/invoke/invoke.ts`
- `packages/service/thirdProvider/doc2x/index.ts`
- `packages/service/worker/htmlStr2Md/utils.ts`
- `packages/service/worker/utils/base64ImageUpload.ts`
- `packages/service/worker/utils/uploadFile.ts`
- `packages/service/common/s3/buckets/base.ts`
- `packages/service/common/s3/security/token.ts`
- `packages/service/core/dataset/migration/schema.ts`
- `packages/service/core/workflow/utils/context.ts`
- `packages/service/worker/readFile/extension/docx.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `packages/service/worker/function.ts`
- `packages/service/worker/utils.ts`
- `packages/global/common/file/constants.ts`
- `packages/global/common/file/icon.ts`
- `packages/global/common/string/tools.ts`
- `packages/global/core/app/constants.ts`
- `packages/global/core/dataset/type.ts`
- `packages/service/common/s3/utils.ts`
- `packages/service/common/string/cheerio.ts`
- `packages/service/core/dataset/read.ts`
- `packages/service/thirdProvider/doc2x/index.ts`
- `packages/service/thirdProvider/textin/index.ts`
- ... 6 more

### Chunking/splitting

- `packages/service/worker/function.ts`
- `packages/global/common/string/textSplitter.ts`
- `packages/global/common/string/utils.ts`
- `packages/global/core/dataset/constants.ts`
- `packages/global/core/dataset/type.ts`
- `packages/service/common/middle/entry.ts`
- `packages/service/common/s3/utils.ts`
- `packages/service/core/chat/resume.ts`
- `packages/service/core/dataset/read.ts`
- `packages/service/core/dataset/utils.ts`
- `packages/service/thirdProvider/fastgptPlugin/index.ts`
- `packages/service/worker/text2Chunks/index.ts`
- ... 6 more

### Embedding/vector index

- `packages/service/core/ai/embedding/index.ts`
- `packages/service/core/dataset/search/defaultRecall/embeddingRecall.ts`
- `packages/service/env.ts`
- `packages/global/core/ai/constants.ts`
- `packages/global/core/ai/model.schema.ts`
- `packages/global/core/app/type.ts`
- `packages/global/core/app/utils.ts`
- `packages/global/core/dataset/constants.ts`
- `packages/service/common/logger/categories.ts`
- `packages/service/common/vectorDB/constants.ts`
- `packages/service/common/vectorDB/controller.ts`
- `packages/service/common/vectorDB/type.ts`
- ... 6 more

### Retrieval/search/rerank

- `packages/global/core/ai/constants.ts`
- `packages/global/core/ai/model.schema.ts`
- `packages/global/core/app/constants.ts`
- `packages/global/core/dataset/constants.ts`
- `packages/global/core/dataset/type.ts`
- `packages/global/support/marketing/type.ts`
- `packages/service/common/api/type.d.ts`
- `packages/service/common/logger/categories.ts`
- `packages/service/common/vectorDB/type.ts`
- `packages/service/core/ai/model.ts`
- `packages/service/core/ai/type.d.ts`
- `packages/service/core/app/schema.ts`
- ... 6 more

### Wiki/graph/entity model

- `packages/web/core/workflow/utils.ts`
- `packages/global/core/app/tool/constants.ts`
- `packages/global/core/app/tool/utils.ts`
- `packages/service/core/app/templates/register.ts`
- `packages/service/core/app/tool/runtime/utils.ts`
- `packages/service/core/workflow/dispatch/utils/index.ts`
- `packages/web/components/common/Textarea/PromptEditor/plugins/SkillLabelPlugin/index.tsx`
- `projects/app/src/components/Markdown/codeBlock/CodeLight.tsx`
- `projects/app/src/pages/api/admin/initv4140.ts`
- `projects/app/src/web/core/chat/constants.ts`
- `projects/app/public/js/monaco-editor.0.45.0/vs/basic-languages/abap/abap.js`
- `projects/app/public/js/monaco-editor.0.45.0/vs/basic-languages/m3/m3.js`
- ... 6 more

### Memory/update lifecycle

- `packages/service/env.ts`
- `packages/global/openapi/reference.ts`
- `packages/service/worker/utils.ts`
- `packages/web/hooks/useConfirm.tsx`
- `packages/web/hooks/useLinkedScroll.tsx`
- `packages/web/hooks/usePagination.tsx`
- `packages/web/hooks/useRefresh.ts`
- `packages/web/hooks/useScrollPagination.tsx`
- `packages/global/common/parentFolder/depth.ts`
- `packages/global/common/string/http.ts`
- `packages/global/common/string/markdown.ts`
- `packages/global/common/string/textSplitter.ts`
- ... 6 more

### Provenance/citation/evidence

- `packages/global/common/parentFolder/type.ts`
- `packages/global/core/chat/type.ts`
- `packages/global/core/dataset/type.ts`
- `packages/global/core/dataset/utils.ts`
- `packages/service/core/chat/controller.ts`
- `packages/service/core/chat/nodeResponseStorage.ts`
- `packages/service/core/chat/pushChatLog.ts`
- `packages/service/core/dataset/read.ts`
- `packages/service/thirdProvider/doc2x/index.ts`
- `packages/global/core/ai/agent/type.ts`
- `packages/global/core/dataset/collection/constants.ts`
- `packages/global/core/dataset/collection/utils.ts`
- ... 6 more

### Evaluation/observability

- `packages/global/vitest.config.ts`
- `packages/service/vitest.benchmark.config.ts`
- `packages/service/vitest.config.ts`
- `packages/service/worker/utils.ts`
- `packages/global/core/ai/model.schema.ts`
- `packages/service/common/bullmq/index.ts`
- `packages/service/common/logger/categories.ts`
- `packages/service/common/metrics/client.ts`
- `packages/service/common/metrics/runtime.ts`
- `packages/service/common/middle/entry.ts`
- `packages/service/common/s3/utils.ts`
- `packages/service/common/tracing/client.ts`
- ... 6 more

### Agent/MCP/tool surface

- `packages/service/env.ts`
- `packages/global/openapi/tag.ts`
- `packages/global/core/ai/constants.ts`
- `packages/global/core/ai/index.ts`
- `packages/global/core/ai/model.schema.ts`
- `packages/global/core/app/constants.ts`
- `packages/global/core/app/jsonschema.ts`
- `packages/global/core/app/type.ts`
- `packages/global/core/chat/adapt.ts`
- `packages/global/core/chat/constants.ts`
- `packages/global/core/chat/type.ts`
- `packages/global/core/chat/utils.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| packages/global/common/error/s3.ts | 5 | * Parse S3 upload error and return user-friendly error message key |
| packages/global/common/error/s3.ts | 6 | * @param error - The error from S3 upload |
| packages/service/core/dataset/read.ts | 188 | datasetId: string; // For S3 image upload |
| packages/service/support/invoke/invoke.ts | 70 | this.assertPermission(PluginPermissionEnum['file-upload:allow']); |
| packages/service/thirdProvider/doc2x/index.ts | 99 | // 1. Get pre-upload URL first |
| packages/service/thirdProvider/doc2x/index.ts | 106 | return Promise.reject(`[Doc2x] Failed to get pre-upload URL: ${msg}`); |
| packages/service/thirdProvider/doc2x/index.ts | 111 | // 2. Upload file to pre-signed URL with binary stream |
| packages/service/thirdProvider/doc2x/index.ts | 121 | return Promise.reject(`[Doc2x] Failed to upload file: ${getErrText(error)}`); |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| packages/service/worker/function.ts | 45 | // mammoth/xlsx/pdf-parse 历史上有 module 级缓存与潜在内存泄漏，定期回收 worker |
| packages/service/worker/utils.ts | 117 | * maxTasksPerWorker：worker 完成多少任务后回收（应对依赖库的内存泄漏，例如 readFile 的 mammoth/xlsx/pdf-parse）。 |
| packages/global/common/file/constants.ts | 7 | export const documentFileType = '.txt, .docx, .csv, .xlsx, .pdf, .md, .html, .pptx'; |
| packages/global/common/file/icon.ts | 3 | { suffix: 'pdf', src: 'file/fill/pdf' }, |
| packages/global/common/string/tools.ts | 105 | 1. https://xxx.com/file.pdf?token=123 |
| packages/global/common/string/tools.ts | 106 | => pdf |
| packages/global/common/string/tools.ts | 107 | 2. https://xxx.com/file.pdf |
| packages/global/common/string/tools.ts | 108 | => pdf |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| packages/service/worker/function.ts | 5 | } from '@fastgpt/global/common/string/textSplitter'; |
| packages/global/common/string/textSplitter.ts | 83 | let chunk = defaultChunk; |
| packages/global/common/string/textSplitter.ts | 86 | const chunkLength = getTextValidLength(chunk); |
| packages/global/common/string/textSplitter.ts | 95 | text: chunk.replace(defaultChunk, '').trim() |
| packages/global/common/string/textSplitter.ts | 99 | chunks.push(chunk); |
| packages/global/common/string/textSplitter.ts | 102 | chunk = defaultChunk; |
| packages/global/common/string/textSplitter.ts | 104 | chunk += `${splitText2Lines[i]}\n`; |
| packages/global/common/string/textSplitter.ts | 107 | if (chunk) { |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| packages/service/core/ai/embedding/index.ts | 9 | const logger = getLogger(LogCategories.MODULE.AI.EMBEDDING); |
| packages/service/core/ai/embedding/index.ts | 80 | ai.embeddings |
| packages/service/core/ai/embedding/index.ts | 102 | logger.error('Embedding API returned empty data', { |
| packages/service/core/ai/embedding/index.ts | 108 | return Promise.reject('Embedding API is not responding'); |
| packages/service/core/ai/embedding/index.ts | 110 | if (!res?.data?.[0]?.embedding) { |
| packages/service/core/ai/embedding/index.ts | 111 | // @ts-expect-error provider error payload is not part of the embedding response type |
| packages/service/core/ai/embedding/index.ts | 113 | logger.error('Embedding API returned invalid embedding', { |
| packages/service/core/ai/embedding/index.ts | 120 | return Promise.reject('Embedding API is not responding'); |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| packages/global/core/ai/constants.ts | 18 | rerank = 'rerank' |
| packages/global/core/ai/constants.ts | 69 | { label: i18nT('common:model.type.reRank'), value: ModelTypeEnum.rerank } |
| packages/global/core/ai/model.schema.ts | 115 | type: z.literal(ModelTypeEnum.rerank), |
| packages/global/core/ai/model.schema.ts | 116 | maxToken: z.number().optional(), // max input token for rerank query + one document |
| packages/global/core/app/constants.ts | 77 | webSearch = 'web-search', |
| packages/global/core/dataset/constants.ts | 254 | /* ------------ search -------------- */ |
| packages/global/core/dataset/constants.ts | 264 | title: i18nT('common:core.dataset.search.mode.embedding'), |
| packages/global/core/dataset/constants.ts | 265 | desc: i18nT('common:core.dataset.search.mode.embedding desc'), |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| packages/web/core/workflow/utils.ts | 11 | source === AppToolSourceEnum.community \|\| |
| packages/global/core/app/tool/constants.ts | 12 | community = 'community' |
| packages/global/core/app/tool/utils.ts | 12 | (deprecated) community: community-id |
| packages/global/core/app/tool/utils.ts | 34 | if (source === 'community' \|\| id === 'commercial-dalle3') { |
| packages/service/core/app/templates/register.ts | 17 | templateId: `${AppToolSourceEnum.community}-${template.templateId.split('.')[0]}` |
| packages/service/core/app/templates/register.ts | 23 | // Merge db data to community templates |
| packages/service/core/app/tool/runtime/utils.ts | 28 | AppToolSourceEnum.community, |
| packages/service/core/workflow/dispatch/utils/index.ts | 35 | import { getMcpToolsets } from '../../../app/tool/mcpTool/entity'; |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| packages/service/env.ts | 107 | description: 'Redis 内存水位检测缓存时长（毫秒），避免每个流请求都调用 INFO MEMORY' |
| packages/global/openapi/reference.ts | 29 | .sidebar-heading-type--delete { |
| packages/global/openapi/reference.ts | 61 | .dark-mode .sidebar-heading-type--delete { |
| packages/service/worker/utils.ts | 162 | // Update memory data to latest task |
| packages/service/worker/utils.ts | 226 | // watch response |
| packages/service/worker/utils.ts | 254 | // Worker error, terminate and delete it.（Un catch error) |
| packages/web/hooks/useConfirm.tsx | 27 | type?: 'common' \| 'delete'; |
| packages/web/hooks/useConfirm.tsx | 41 | delete: { |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| packages/global/common/parentFolder/type.ts | 12 | sourceId: ParentIdSchema.optional(), |
| packages/global/core/chat/type.ts | 93 | description: '目前已经变成 sourceId，可能是 app 的，也可能是 skill 的' |
| packages/global/core/dataset/type.ts | 340 | sourceId: z.string().optional().meta({ description: '来源 ID' }), |
| packages/global/core/dataset/type.ts | 363 | sourceId: z.string().optional().meta({ description: '来源 ID' }), |
| packages/global/core/dataset/type.ts | 459 | sourceId: true, |
| packages/global/core/dataset/utils.ts | 8 | sourceId |
| packages/global/core/dataset/utils.ts | 12 | sourceId?: string; |
| packages/global/core/dataset/utils.ts | 26 | return getSourceNameIcon({ sourceName: name, sourceId }); |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| packages/global/vitest.config.ts | 10 | '@fastgpt-sdk/otel/metrics': resolve('../../sdk/otel/src/metrics-entry.ts'), |
| packages/global/vitest.config.ts | 11 | '@fastgpt-sdk/otel/tracing': resolve('../../sdk/otel/src/tracing-entry.ts'), |
| packages/service/vitest.benchmark.config.ts | 13 | include: ['test/**/*.benchmark.ts'], |
| packages/service/vitest.benchmark.config.ts | 15 | outputFile: 'benchmark-results.json' |
| packages/service/vitest.config.ts | 11 | '@fastgpt-sdk/otel/metrics': resolve('../../sdk/otel/src/metrics-entry.ts'), |
| packages/service/vitest.config.ts | 12 | '@fastgpt-sdk/otel/tracing': resolve('../../sdk/otel/src/tracing-entry.ts'), |
| packages/service/worker/utils.ts | 25 | const nodeRequire = eval('require') as (id: string) => typeof import('worker_threads'); |
| packages/global/core/ai/model.schema.ts | 50 | // Test mode: when enabled, classify/extract/tool call/evaluation scenarios are disabled |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| packages/service/env.ts | 53 | OPENAI_BASE_URL: UrlSchema.default('https://api.openai.com/v1'), |
| packages/service/env.ts | 58 | // Agent sandbox proxy |
| packages/service/env.ts | 63 | // Agent sandbox |
| packages/service/env.ts | 77 | AGENT_SANDBOX_OPENSANDBOX_IMAGE_REPO: z.string().default('fastgpt-agent-sandbox'), |
| packages/service/env.ts | 84 | description: 'Agent sandbox 冷归档包大小上限（MB），用于归档包的上传、下载和打包校验' |
| packages/service/env.ts | 90 | description: 'Agent sandbox IDE 单文件读写和上传大小上限（MB）' |
| packages/service/env.ts | 206 | description: 'Agent 引擎选择：default（unified agent loop）\| pi（pi-agent-core 引擎）' |
| packages/service/env.ts | 320 | * 判断系统是否显式配置了 Agent 虚拟机能力。 |

## Gap

_없음_
