# naver/billboard.js

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/billboard.js |
| local path | sources/naver__billboard.js |
| HEAD | 488b1ad |
| stars/forks | 5982 / 357 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-06-17T01:35:21Z |
| trendScore / priorityScore | 122 / 321 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 172 | README.md, packages/react/README.md, package.json |
| Frontend / developer experience | 133 | AGENTS.md, README.md, packages/react/README.md |
| Spec / doc-driven workflow | 81 | AGENTS.md, benchmark/playwright.config.ts, vitest.config.ts |
| LLM wiki / memory / graph | 31 | README.md, demo/benchmark/benchmark.js, demo/index.html |
| RAG / retrieval | 6 | MODULE_IMPORTS.md, test/api/data-spec.ts |
| AI agent / tool use | 2 | AGENTS.md |
| Security / compliance | 1 | test/internals/core-spec.ts |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 416 |
| manifests | 9 |
| docs | 12 |
| tests | 111 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Run install command from shell |
| headings | Documents / Questions? / Supported chart types / Download and Installation / For development (Uncompressed) / For production (Compressed) / Packaged version (with D3.js inclusion) / Themes / Nightly version / Run install command from shell |
| excerpt | <picture <source srcset="https //naver.github.io/billboard.js/img/logo/billboard.js white.svg" media=" prefers color scheme dark " <img src="https //naver.github.io/billboard.js/img/logo/billboard.js.svg" width="350" alt="billboard.js" <br </picture ! Latest Version badge latest link version ! Next version badge next link version ! bb badge @billboard.js/react link @billboard.js/react <br ! semantic release badge semantic release link semantic release ! React badge react ! download badge download link download ! download badge download weekly link download ! jsDelivr badge jsDelivr link jsDelivr ! jsDelivr badge jsDelivr weekly link jsDelivr <br ! CI Status badge ci status ! Coverage Status |


## 주요 파일

### Manifests

- AGENTS.md
- README.md
- packages/react/README.md
- package.json
- tsconfig.json
- packages/react/package.json
- packages/react/tsconfig.json
- packages/react/vite.config.ts
- packages/react/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 203 |
| test | 108 |
| packages | 23 |
| config | 21 |
| types | 20 |
| demo | 19 |
| benchmark | 4 |
| AGENTS.md | 1 |
| AUTHORS.txt | 1 |
| CANVAS_THEME_SELECTORS.md | 1 |
| CHANGELOG-v2.md | 1 |
| CHANGELOG-v4.md | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 321 |
| .js | 16 |
| .json | 12 |
| .md | 12 |
| .svg | 11 |
| .cjs | 8 |
| .css | 7 |
| .scss | 7 |
| .html | 6 |
| .csv | 4 |
| .tsx | 4 |
| .sh | 2 |
| .txt | 2 |
| [no-ext] | 2 |
| .opts | 1 |
| .template | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
