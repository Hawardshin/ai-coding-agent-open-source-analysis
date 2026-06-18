# bits-bytes-nn/omnisummary

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/bits-bytes-nn/omnisummary |
| local path | sources/bits-bytes-nn__omnisummary |
| HEAD | 661c80a |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T14:49:12Z |
| trendScore / priorityScore | 74 / 151 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 224 | README.md, Dockerfile, pyproject.toml |
| LLM wiki / memory / graph | 113 | README.md, tests/test_agent_tools.py, tests/test_agentcore_app.py |
| Korean language / Korea domain | 37 | README.md, shared/prompts/prompts.py, agent/agent.py |
| Security / compliance | 37 | README.md, shared/prompts/prompts.py, tests/test_digest_generator.py |
| RAG / retrieval | 9 | agent/agent_tools.py, agent/agent.py, agent/tool_state.py |
| Frontend / developer experience | 3 | pyproject.toml, tests/test_agentcore_app.py, agent/visuals.py |
| Spec / doc-driven workflow | 1 | scripts/sync_all_to_s3.sh |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 110 |
| manifests | 3 |
| docs | 2 |
| tests | 40 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | OmniSummary |
| headings | OmniSummary / Features / Architecture / Quick Start / Prerequisites / Installation / Configuration / --- Required --- / --- Required only for the listed feature --- / Setup Checklist |
| excerpt | OmniSummary Proactive AI/ML daily digest system that collects content from multiple sources, ranks by importance using LLM, generates editorial style digests, and delivers via Slack and Threads. Includes a follow up agent for deep dive analysis on specific items. Features Multi source collection Reddit public .rss feed via proxy , YouTube, X/Twitter via RSSHub , RSS/Substack, Web Search Tavily LLM powered ranking Claude Opus 4.8, multi axis evaluation with source slot + per origin diversity caps Editorial digest Claude Sonnet 4.6 Korean editorial with cross day trend tracking Multi channel delivery structured digest rendered per channel — Slack Block Kit and Threads image root + flat reply c |


## 주요 파일

### Manifests

- README.md
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- shared/prompts/__init__.py
- shared/prompts/prompts.py


### Agent Instruction Files

- shared/prompts/__init__.py
- shared/prompts/prompts.py


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 40 |
| shared | 13 |
| scripts | 10 |
| collectors | 7 |
| pipeline | 6 |
| agent | 5 |
| lambda_handlers | 5 |
| output | 4 |
| infrastructure | 3 |
| agent_runtime | 2 |
| cloudflare-proxy | 2 |
| __main__.py | 1 |
| .env.template | 1 |
| .github | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 96 |
| [no-ext] | 3 |
| .md | 2 |
| .toml | 2 |
| .agentcore | 1 |
| .js | 1 |
| .mjs | 1 |
| .sh | 1 |
| .template | 1 |
| .yaml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
