# 0xMassi/webclaw

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/0xMassi/webclaw |
| local path | sources/0xMassi__webclaw |
| HEAD | 3caca67 |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T15:14:56Z |
| trendScore / priorityScore | 68 / 177 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 92 | examples/mcp-web-scraping/README.md, packages/create-webclaw/README.md, examples/README.md |
| RAG / retrieval | 66 | benchmarks/README.md, examples/html-to-markdown-rag/README.md, examples/README.md |
| Frontend / developer experience | 63 | benchmarks/README.md, README.md, CLAUDE.md |
| LLM wiki / memory / graph | 54 | benchmarks/README.md, benchmarks/facts.json, benchmarks/sites.txt |
| Infra / observability | 40 | examples/proxy-backed-crawling/README.md, README.md, crates/webclaw-cli/Cargo.toml |
| AI agent / tool use | 35 | examples/html-to-markdown-rag/README.md, packages/create-webclaw/README.md, examples/README.md |
| Security / compliance | 34 | CLAUDE.md, .github/workflows/release.yml, crates/webclaw-core/testdata/reddit/ebpf_6comments.html |
| Local LLM / on-device inference | 16 | examples/README.md, README.md, CLAUDE.md |
| Spec / doc-driven workflow | 3 | benchmarks/README.md, crates/webclaw-core/src/endpoints.rs |
| Korean language / Korea domain | 1 | crates/webclaw-cli/src/bench.rs |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 167 |
| manifests | 21 |
| docs | 16 |
| tests | 2 |
| ci/ops | 6 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Example Domain |
| headings | Example Domain / Install / Agent setup / Homebrew / Prebuilt binaries / Docker / Cargo / Quick Start / Scrape one page / Return LLM-optimized text |
| excerpt | <p align="center" <a href="https //webclaw.io" <img src=".github/banner.png" alt="webclaw" width="760" / </a </p <h1 align="center" webclaw</h1 <p align="center" <strong Turn websites into clean markdown, JSON, and LLM ready context.</strong <br/ <sub CLI, MCP server, REST API, and SDKs for AI agents and RAG pipelines.</sub </p <p align="center" <a href="https //github.com/0xMassi/webclaw/stargazers" <img src="https //shieldcn.dev/github/stars/0xMassi/webclaw.svg?variant=branded&logo=github" alt="Stars" / </a <a href="https //github.com/0xMassi/webclaw/releases" <img src="https //shieldcn.dev/github/tag/0xMassi/webclaw.svg?variant=branded&logo=rust" alt="Version" / </a <a href="https //githu |


## 주요 파일

### Manifests

- benchmarks/README.md
- examples/html-to-markdown-rag/README.md
- examples/mcp-web-scraping/README.md
- packages/create-webclaw/README.md
- examples/README.md
- examples/cloudflare-diagnostics/README.md
- examples/firecrawl-compatible-api/README.md
- examples/proxy-backed-crawling/README.md
- README.md
- CLAUDE.md
- crates/webclaw-cli/Cargo.toml
- crates/webclaw-core/Cargo.toml
- crates/webclaw-fetch/Cargo.toml
- crates/webclaw-llm/Cargo.toml
- crates/webclaw-mcp/Cargo.toml
- crates/webclaw-pdf/Cargo.toml
- crates/webclaw-server/Cargo.toml
- packages/create-webclaw/package.json
- Cargo.toml
- docker-compose.yml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| crates | 120 |
| benchmarks | 7 |
| examples | 6 |
| .github | 4 |
| packages | 4 |
| .cargo | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| assets | 1 |
| Cargo.toml | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .rs | 107 |
| .md | 16 |
| .toml | 10 |
| .html | 6 |
| .json | 6 |
| .yml | 5 |
| .sh | 4 |
| [no-ext] | 4 |
| .txt | 3 |
| .ci | 1 |
| .example | 1 |
| .mjs | 1 |
| .mp4 | 1 |
| .py | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
