# marswangyang/personal-ai-memory 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A local-first Chrome extension that passively captures ChatGPT, Gemini, Claude, Grok, Perplexity conversations into a private memory graph. Features in-browser Hybrid RAG (Vector + BM25), semantic search, and 100% privacy via WebAssembly and IndexedDB. No servers, no API keys.

## 요약

- 조사 단위: `sources/marswangyang__personal-ai-memory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 101 files, 27 directories, depth score 80, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/utils/rag.ts, src/types/memory.ts, src/popup/index.tsx이고, 의존성 단서는 react, transformers, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | marswangyang/personal-ai-memory |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 48 |
| Forks | 6 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/marswangyang__personal-ai-memory](../../../../sources/marswangyang__personal-ai-memory) |
| 기존 보고서 | [reports/llm-wiki/repositories/marswangyang__personal-ai-memory.md](../../../llm-wiki/repositories/marswangyang__personal-ai-memory.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 101 / 27 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, assets, README-multi-lan, src, tests |
| 상위 확장자 | .ts: 60, .tsx: 22, .md: 10, (none): 3, .json: 2, .yml: 2, .png: 1, .yaml: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 20 |
| src | source boundary | 10 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| README-multi-lan | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | plasmo dev |
| build | package.json | build | plasmo build |
| build | package.json | build:prod | plasmo build --target=chrome-mv3-prod |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:integration | vitest run --config vitest.integration.config.ts |
| test | package.json | test:e2e | playwright test |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 2 | [src/types/memory.ts](../../../../sources/marswangyang__personal-ai-memory/src/types/memory.ts)<br>[src/contents/memory-float-ui.tsx](../../../../sources/marswangyang__personal-ai-memory/src/contents/memory-float-ui.tsx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [src/utils/rag.ts](../../../../sources/marswangyang__personal-ai-memory/src/utils/rag.ts)<br>[src/types/memory.ts](../../../../sources/marswangyang__personal-ai-memory/src/types/memory.ts)<br>[src/popup/index.tsx](../../../../sources/marswangyang__personal-ai-memory/src/popup/index.tsx)<br>[src/importers/index.ts](../../../../sources/marswangyang__personal-ai-memory/src/importers/index.ts)<br>[src/contents/memory-float-ui.tsx](../../../../sources/marswangyang__personal-ai-memory/src/contents/memory-float-ui.tsx)<br>[src/background/embedding.ts](../../../../sources/marswangyang__personal-ai-memory/src/background/embedding.ts)<br>[src/background/index.ts](../../../../sources/marswangyang__personal-ai-memory/src/background/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 19 | [tests/setup.ts](../../../../sources/marswangyang__personal-ai-memory/tests/setup.ts)<br>[tests/unit/utils/message-passing.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/message-passing.test.ts)<br>[tests/unit/utils/onboarding-highlight.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/onboarding-highlight.test.ts)<br>[tests/unit/utils/trie.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/trie.test.ts)<br>[tests/unit/importers/chatgptConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/chatgptConversations.test.ts)<br>[tests/unit/importers/claudeConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/claudeConversations.test.ts)<br>[tests/unit/importers/geminiTakeout.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/geminiTakeout.test.ts)<br>[tests/unit/importers/grokConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/grokConversations.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/marswangyang__personal-ai-memory/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/marswangyang__personal-ai-memory/README.md)<br>[README-multi-lan/README.de.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.de.md)<br>[README-multi-lan/README.en.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.en.md)<br>[README-multi-lan/README.es.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.es.md)<br>[README-multi-lan/README.fr.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.fr.md)<br>[README-multi-lan/README.ja.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.ja.md)<br>[README-multi-lan/README.ko.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.ko.md)<br>[README-multi-lan/README.zh-CN.md](../../../../sources/marswangyang__personal-ai-memory/README-multi-lan/README.zh-CN.md) |
| config | 2 | [package.json](../../../../sources/marswangyang__personal-ai-memory/package.json)<br>[tsconfig.json](../../../../sources/marswangyang__personal-ai-memory/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [tests/setup.ts](../../../../sources/marswangyang__personal-ai-memory/tests/setup.ts)<br>[tests/unit/utils/message-passing.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/message-passing.test.ts)<br>[tests/unit/utils/onboarding-highlight.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/onboarding-highlight.test.ts)<br>[tests/unit/utils/trie.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/utils/trie.test.ts)<br>[tests/unit/importers/chatgptConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/chatgptConversations.test.ts)<br>[tests/unit/importers/claudeConversations.test.ts](../../../../sources/marswangyang__personal-ai-memory/tests/unit/importers/claudeConversations.test.ts) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/marswangyang__personal-ai-memory/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/utils/rag.ts`, `src/types/memory.ts`, `src/popup/index.tsx`.
2. agent/tool runtime 매핑: `src/types/memory.ts`, `src/contents/memory-float-ui.tsx`.
3. retrieval/memory/indexing 확인: `src/utils/rag.ts`, `src/types/memory.ts`, `src/popup/index.tsx`.
4. test/eval 파일로 동작 검증: `tests/setup.ts`, `tests/unit/utils/message-passing.test.ts`, `tests/unit/utils/onboarding-highlight.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 A local first Chrome extension that passively captures ChatGPT, Gemini, Claude, Grok, Perplexity conversations into a pr. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, transformers이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
