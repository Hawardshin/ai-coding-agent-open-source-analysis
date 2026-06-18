# lumatic2/korean-tax-accounting-ax-benchmark

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/lumatic2/korean-tax-accounting-ax-benchmark |
| local path | sources/lumatic2__korean-tax-accounting-ax-benchmark |
| HEAD | 09b8485 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T18:08:25Z |
| trendScore / priorityScore | 90 / 238 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 234 | README.md, leaderboard/public/data/public/README.md, leaderboard/public/README.md |
| Spec / doc-driven workflow | 227 | docs/adr/README.md, leaderboard/README.md, README.md |
| AI agent / tool use | 197 | docs/adr/README.md, README.md, leaderboard/public/data/public/README.md |
| Frontend / developer experience | 78 | docs/adr/README.md, leaderboard/README.md, README.md |
| MCP / tool protocol | 70 | docs/adr/README.md, README.md, docs/adr/0005-agent-react-loop.md |
| Security / compliance | 34 | docs/adr/README.md, leaderboard/README.md, README.md |
| Korean language / Korea domain | 22 | README.md, docs/findings/external-benchmark-comparison.md, docs/m4-tech-report-en.md |
| Infra / observability | 6 | docs/benchmark-design-principles.md, docs/m4-tech-report-en.md, leaderboard/package-lock.json |
| LLM wiki / memory / graph | 2 | docs/m4-tech-report-en.md |
| Local LLM / on-device inference | 2 | docs/submission-guide.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 119 |
| manifests | 9 |
| docs | 40 |
| tests | 18 |
| ci/ops | 0 |
| spec artifacts | 13 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | K-TaxBench |
| headings | K-TaxBench / 왜 만들었나 / 구현한 것 / 평가하는 능력 / 공개 상태 / 구조 / 빠른 실행: 공개 샘플 검증 / 내 모델 테스트와 제출 / 공식 제출 흐름 / 공개 번들 재현 |
| excerpt | K TaxBench 한국 회계·세무 AI가 “그럴듯하게 말하는지”가 아니라 실무 검증을 통과할 수 있는지 평가하는 벤치마크입니다. K TaxBench는 한국 세법·회계기준 기반 문항, 근거 인용 검증, 계산 채점, LLM judge 루브릭, agent 도구 사용 검증, 공개 리더보드 정책을 하나의 평가 파이프라인으로 묶었습니다. Live tax benchmark.askewly.com https //tax benchmark.askewly.com Public sample data/sample questions v0.1.jsonl data/sample questions v0.1.jsonl Technical report docs/m4 tech report en.md docs/m4 tech report en.md English jump to English README english ! K TaxBench leaderboard preview docs/assets/leaderboard preview.png 왜 만들었나 회계·세무 AI는 일반 LLM 벤치마크에서 잘 드러나지 않는 방식으로 실패합니다. 존재하지 않는 조문이나 기준서를 인용함 개정 전 세법을 최신 규정처럼 답함 계산 과정은 그럴듯하지만 세액·한도·기한을 틀림 불확실한 사안을 단정적으로 안내함 도구를 썼다고 말하지만 실제 근거 조회와 답변이 연결되지 않음 K TaxBench는 이런 실패 |


## 주요 파일

### Manifests

- docs/adr/README.md
- data/README.md
- leaderboard/README.md
- README.md
- leaderboard/public/data/public/README.md
- leaderboard/public/README.md
- leaderboard/next.config.mjs
- leaderboard/package.json
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/adr/README.md
- docs/adr/0001-vendor-not-import-taxagent.md
- docs/adr/0005-agent-react-loop.md
- docs/adr/0006-agent-forced-mode.md
- docs/adr/0007-citation-grader-kifrs-paragraph.md
- docs/adr/0008-agent-eval-isolation.md
- docs/ARCHITECTURE.md
- docs/PRD.md
- docs/adr/0002-claude-cli-first.md
- docs/adr/0003-calculation-as-rule-proxy.md
- docs/adr/0009-leaderboard-submission-policy.md
- docs/adr/0010-multi-vendor-cli-subprocess.md
- docs/adr/0011-gemini-excluded-from-r1.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 33 |
| src | 26 |
| leaderboard | 18 |
| tests | 18 |
| scripts | 16 |
| config | 2 |
| data | 2 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 58 |
| .md | 40 |
| .json | 5 |
| [no-ext] | 5 |
| .jsonl | 3 |
| .jsx | 2 |
| .css | 1 |
| .mjs | 1 |
| .sh | 1 |
| .svg | 1 |
| .toml | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
