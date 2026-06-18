# marswangyang/personal-ai-memory Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A local-first Chrome extension that passively captures ChatGPT, Gemini, Claude, Grok, Perplexity conversations into a private memory graph. Features in-browser Hybrid RAG (Vector + BM25), semantic search, and 100% privacy via WebAssembly and IndexedDB. No servers, no API keys.

## 요약

- 조사 단위: `sources/marswangyang__personal-ai-memory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 101 files, 27 directories, depth score 86, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/utils/rag.ts, src/types/memory.ts, src/popup/index.tsx이고, 의존성 단서는 react, transformers, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | marswangyang/personal-ai-memory |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 48 |
| Forks | 6 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/marswangyang__personal-ai-memory](../../../../sources/marswangyang__personal-ai-memory) |
| Existing report | [reports/llm-wiki/repositories/marswangyang__personal-ai-memory.md](../../../llm-wiki/repositories/marswangyang__personal-ai-memory.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 101 / 27 |
| Max observed depth | 4 |
| Top directories | .github, assets, README-multi-lan, src, tests |
| Top extensions | .ts: 60, .tsx: 22, .md: 10, (none): 3, .json: 2, .yml: 2, .png: 1, .yaml: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 20 |
| src | source boundary | 10 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| README-multi-lan | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | plasmo dev |
| build | package.json | build | plasmo build |
| build | package.json | build:prod | plasmo build --target=chrome-mv3-prod |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:integration | vitest run --config vitest.integration.config.ts |
| test | package.json | test:e2e | playwright test |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [src/utils/rag.ts](../../../../sources/marswangyang__personal-ai-memory/src/utils/rag.ts) | retrieval signal |
| retrieval | [src/types/memory.ts](../../../../sources/marswangyang__personal-ai-memory/src/types/memory.ts) | retrieval signal |
| retrieval | [src/popup/index.tsx](../../../../sources/marswangyang__personal-ai-memory/src/popup/index.tsx) | retrieval signal |
| retrieval | [src/importers/index.ts](../../../../sources/marswangyang__personal-ai-memory/src/importers/index.ts) | retrieval signal |
| docs | [README.md](../../../../sources/marswangyang__personal-ai-memory/README.md) | docs signal |
| docs | [README-multi-lan/README.de.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.de.md) | docs signal |
| docs | [README-multi-lan/README.en.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.en.md) | docs signal |
| docs | [README-multi-lan/README.es.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.es.md) | docs signal |
| eval | [tests/setup.ts](../../../../sources/marswangyang__personal-ai-memory/tests/setup.ts) | eval signal |
| eval | [tests/unit/utils/message-passing.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/message-passing.test.ts) | eval signal |
| eval | [tests/unit/utils/onboarding-highlight.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/onboarding-highlight.test.ts) | eval signal |
| eval | [tests/unit/utils/trie.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/trie.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 2 | [src/types/memory.ts](../../../../sources/marswangyang__personal-ai-memory/src/types/memory.ts)<br>[src/contents/memory-float-ui.tsx](../../../../sources/marswangyang__personal-ai-memory/src/contents/memory-float-ui.tsx) |
| mcp | 0 | not obvious |
| retrieval | 7 | [src/utils/rag.ts](../../../../sources/marswangyang__personal-ai-memory/src/utils/rag.ts)<br>[src/types/memory.ts](../../../../sources/marswangyang__personal-ai-memory/src/types/memory.ts)<br>[src/popup/index.tsx](../../../../sources/marswangyang__personal-ai-memory/src/popup/index.tsx)<br>[src/importers/index.ts](../../../../sources/marswangyang__personal-ai-memory/src/importers/index.ts)<br>[src/contents/memory-float-ui.tsx](../../../../sources/marswangyang__personal-ai-memory/src/contents/memory-float-ui.tsx)<br>[src/background/embedding.ts](../../../../sources/marswangyang__personal-ai-memory/src/background/embedding.ts)<br>[src/background/index.ts](../../../../sources/marswangyang__personal-ai-memory/src/background/index.ts) |
| spec | 0 | not obvious |
| eval | 19 | [tests/setup.ts](../../../../sources/marswangyang__personal-ai-memory/tests/setup.ts)<br>[tests/unit/utils/message-passing.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/message-passing.test.ts)<br>[tests/unit/utils/onboarding-highlight.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/onboarding-highlight.test.ts)<br>[tests/unit/utils/trie.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/trie.test.ts)<br>[tests/unit/importers/chatgptConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/chatgptConversations.test.ts)<br>[tests/unit/importers/claudeConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/claudeConversations.test.ts)<br>[tests/unit/importers/geminiTakeout.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/geminiTakeout.test.ts)<br>[tests/unit/importers/grokConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/grokConversations.test.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/marswangyang__personal-ai-memory/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/marswangyang__personal-ai-memory/README.md)<br>[README-multi-lan/README.de.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.de.md)<br>[README-multi-lan/README.en.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.en.md)<br>[README-multi-lan/README.es.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.es.md)<br>[README-multi-lan/README.fr.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.fr.md)<br>[README-multi-lan/README.ja.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.ja.md)<br>[README-multi-lan/README.ko.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.ko.md)<br>[README-multi-lan/README.zh-CN.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.zh-CN.md) |
| config | 2 | [package.json](../../../../sources/marswangyang__personal-ai-memory/package.json)<br>[tsconfig.json](../../../../sources/marswangyang__personal-ai-memory/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 19 | [tests/setup.ts](../../../../sources/marswangyang__personal-ai-memory/tests/setup.ts)<br>[tests/unit/utils/message-passing.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/message-passing.test.ts)<br>[tests/unit/utils/onboarding-highlight.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/onboarding-highlight.test.ts)<br>[tests/unit/utils/trie.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/trie.test.ts)<br>[tests/unit/importers/chatgptConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/chatgptConversations.test.ts)<br>[tests/unit/importers/claudeConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/claudeConversations.test.ts) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/marswangyang__personal-ai-memory/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/utils/rag.ts`, `src/types/memory.ts`, `src/popup/index.tsx`.
2. Map agent/tool runtime through: `src/types/memory.ts`, `src/contents/memory-float-ui.tsx`.
3. Inspect retrieval/memory/indexing through: `src/utils/rag.ts`, `src/types/memory.ts`, `src/popup/index.tsx`.
4. Verify behavior through test/eval files: `tests/setup.ts`, `tests/unit/utils/message-passing.test.ts`, `tests/unit/utils/onboarding-highlight.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 A local first Chrome extension that passively captures ChatGPT, Gemini, Claude, Grok, Perplexity conversations into a pr. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, transformers이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
