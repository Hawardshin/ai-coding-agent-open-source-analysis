# hskim-solv/BidMate-DocAgent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hskim-solv/BidMate-DocAgent |
| local path | sources/hskim-solv__BidMate-DocAgent |
| HEAD | c9b475b |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-10T01:46:08Z |
| trendScore / priorityScore | 71 / 244 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | docs/README.md, agent-evals/README.md, docs/adr/README.md |
| RAG / retrieval | 500 | docs/README.md, docs/adr/README.md, docs/reviews/README.md |
| Spec / doc-driven workflow | 500 | docs/README.md, agent-evals/README.md, docs/adr/README.md |
| Security / compliance | 269 | docs/README.md, agent-evals/README.md, docs/adr/README.md |
| Korean language / Korea domain | 113 | docs/adr/README.md, eval/korean_public/README.md, README.md |
| LLM wiki / memory / graph | 68 | docs/adr/README.md, eval/korean_public/README.md, README.md |
| Frontend / developer experience | 41 | docs/adr/README.md, demo/README.md, README.md |
| Infra / observability | 29 | docs/adr/README.md, docs/plans/README.md, README.md |
| MCP / tool protocol | 12 | Makefile, docs/adr/0049-kordoc-replaces-pyhwp-backend.md, docs/operations/active-agent-loop.md |
| Local LLM / on-device inference | 10 | Makefile, docs/adr/0006-llm-judge-on-real-data-only.md, docs/adr/0011-llm-synthesis-as-additive-ablation.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1140 |
| manifests | 18 |
| docs | 345 |
| tests | 392 |
| ci/ops | 11 |
| spec artifacts | 50 |
| agent instruction files | 20 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | BidMate Agent |
| headings | BidMate Agent / 30초 요약 — What this proves / 5초 비주얼 훅 — 실제 `comparison` 질의 한 건 (extractive, no LLM) / 라이브 데모 / 왜 추출형(extractive)인가, 생성형(generative)이 아닌가? / 핵심 기술 기여 — comparison-aware balanced top-k / 평가 스토리 / 아키텍처 (요약) / 실행 (5분 quickstart) / 면접에서 이 프로젝트를 설명하는 법 |
| excerpt | BidMate Agent RFP 문서 이해를 위한 Agentic RAG 시스템 ! License MIT https //img.shields.io/badge/License MIT blue.svg LICENSE ! PR Eval Delta https //github.com/hskim solv/BidMate DocAgent/actions/workflows/pr eval.yml/badge.svg?branch=main https //github.com/hskim solv/BidMate DocAgent/actions/workflows/pr eval.yml ! codecov https //codecov.io/gh/hskim solv/BidMate DocAgent/branch/main/graph/badge.svg https //codecov.io/gh/hskim solv/BidMate DocAgent ! Python 3.11 https //img.shields.io/badge/Python 3.11 blue.svg pyproject.toml ! Engineering notes https //img.shields.io/badge/engineering notes GitHub%20Pages blue https //hskim solv.github.io/BidMate DocAgent/ ! Open in Colab https //colab.research.go |


## 주요 파일

### Manifests

- docs/README.md
- agent-evals/README.md
- docs/adr/README.md
- docs/plans/README.md
- docs/reviews/README.md
- eval/korean_public/README.md
- demo/README.md
- README.md
- tasks/README.md
- reports/real100_v2/README.md
- scripts/claude-hooks/README.md
- CLAUDE.md
- Dockerfile
- Makefile
- package.json
- pyproject.toml
- requirements.txt
- docker-compose.qdrant.yml


### Spec / Docs / Prompt Artifacts

- docs/adr/README.md
- CLAUDE.md
- requirements.txt
- docs/adr/0002-metadata-first-retrieval.md
- docs/adr/0005-eval-split-public-synthetic-private-local.md
- docs/adr/0006-llm-judge-on-real-data-only.md
- docs/adr/0010-hybrid-bm25-dense-retrieval-rrf.md
- docs/adr/0011-llm-synthesis-as-additive-ablation.md
- docs/adr/0012-llm-judge-on-public-synthetic.md
- docs/adr/0014-ragas-judge-additive-synthetic.md
- docs/adr/0017-llm-metadata-extraction-additive.md
- docs/adr/0018-korean-public-rag-bench.md
- docs/adr/0019-embedding-default-stays-minilm.md
- docs/adr/0024-agentic-full-llm-as-api-default.md
- docs/adr/0027-lora-finetuned-embedding-additive.md
- docs/adr/0030-leaderboard-headline-includes-agentic-full.md
- docs/adr/0031-bm25-korean-morphology-additive.md
- docs/adr/0032-eval-saturation-routed-subset.md
- docs/adr/0033-multihop-cross-section-eval-slice.md
- docs/adr/0036-hwp-native-loader-pyhwp-gated-default.md


### Agent Instruction Files

- CLAUDE.md
- .claude/agents/eval-anomaly-investigator.md
- .claude/agents/eval-to-adr-bridge.md
- .claude/agents/memory-curator.md
- .claude/commands/agent-loop-auto-pass.md
- .claude/commands/agent-loop-auto-ship.md
- .claude/commands/agent-loop-preflight.md
- .claude/commands/agent-loop-review.md
- .claude/commands/agent-loop-status.md
- .claude/commands/agent-loop-watch.md
- .claude/skills/eval-baseline-regen/SKILL.md
- .claude/skills/eval-framework-progressive-audit/SKILL.md
- .claude/skills/retrieval-eval/SKILL.md
- .claude/settings.json
- .claude/skills/adr-lifecycle-manager/SKILL.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 383 |
| docs | 291 |
| scripts | 157 |
| reports | 81 |
| eval | 61 |
| data | 20 |
| .claude | 19 |
| agent-evals | 18 |
| .github | 15 |
| .githooks | 7 |
| benchmarks | 5 |
| tasks | 5 |
| demo | 4 |
| harness | 4 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 599 |
| .md | 340 |
| .json | 88 |
| .sh | 23 |
| .yaml | 22 |
| .svg | 14 |
| .yml | 13 |
| [no-ext] | 12 |
| .jsonl | 9 |
| .txt | 8 |
| .npy | 3 |
| .ipynb | 2 |
| .toml | 2 |
| .cast | 1 |
| .csv | 1 |
| .example | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
