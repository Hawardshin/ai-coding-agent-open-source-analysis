# hashgraph-online/hol-guard

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hashgraph-online/hol-guard |
| local path | sources/hashgraph-online__hol-guard |
| HEAD | 4d4bf52 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:55:31Z |
| trendScore / priorityScore | 68 / 172 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 500 | README.md, tests/fixtures/guard-red-team/README.md, pyproject.toml |
| Security / compliance | 386 | action/README.md, README.md, tests/fixtures/guard-red-team/README.md |
| AI agent / tool use | 112 | action/README.md, README.md, tests/fixtures/guard-red-team/README.md |
| Spec / doc-driven workflow | 70 | README.md, .clusterfuzzlite/Dockerfile, Dockerfile |
| Frontend / developer experience | 59 | dashboard/package.json, dashboard/tsconfig.json, dashboard/vite.config.ts |
| LLM wiki / memory / graph | 28 | tests/test_guard_phase05_approval_memory.py, docs/guard/enterprise-packet.md, docs/guard/get-started.md |
| Infra / observability | 3 | tests/fixtures/guard-red-team/README.md, docs/guard/enterprise-packet.md, tests/fixtures/guard-red-team/malicious-prompt-guard-bypass.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, mcp, sdk-api, security, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1029 |
| manifests | 27 |
| docs | 62 |
| tests | 470 |
| ci/ops | 11 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | HOL Guard |
| headings | HOL Guard / Start Here / Guard Quickstart / Guard: Protection Levels / Guard: Troubleshooting / Why was my command paused? / How do I clear approvals? / How do I require human proof before saved approvals? / Guard: Advisory Sync Privacy / Scanner Quickstart |
| excerpt | HOL Guard ! HOL Guard Version https //img.shields.io/pypi/v/hol guard.svg?logo=pypi&logoColor=white&cacheSeconds=300 https //pypi.org/project/hol guard/ ! Plugin Scanner Version https //img.shields.io/pypi/v/plugin scanner.svg?logo=pypi&logoColor=white&cacheSeconds=300 https //pypi.org/project/plugin scanner/ ! HOL Guard Downloads https //img.shields.io/pypi/dm/hol guard?logo=pypi&logoColor=white https //pypi.org/project/hol guard/ ! Plugin Scanner Downloads https //img.shields.io/pypi/dm/plugin scanner?logo=pypi&logoColor=white https //pypi.org/project/plugin scanner/ ! Python 3.10+ https //img.shields.io/badge/python 3.10%2B 3776AB?logo=python&logoColor=white install the package you need ! |


## 주요 파일

### Manifests

- action/README.md
- README.md
- tests/fixtures/claude-plugin-good/README.md
- tests/fixtures/gemini-extension-good/README.md
- tests/fixtures/good-plugin/README.md
- tests/fixtures/guard-red-team/README.md
- tests/fixtures/malicious-skill-plugin/README.md
- tests/fixtures/multi-ecosystem-repo/codex-plugin/README.md
- tests/fixtures/multi-ecosystem-repo/gemini-ext/README.md
- tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/README.md
- tests/fixtures/opencode-good/README.md
- tests/fixtures/gemini-extension-good/GEMINI.md
- .clusterfuzzlite/Dockerfile
- dashboard/package.json
- dashboard/tsconfig.json
- dashboard/vite.config.ts
- Dockerfile
- pyproject.toml
- requirements.txt
- tests/fixtures/tier2/cargo-safe/Cargo.toml


### Spec / Docs / Prompt Artifacts

- tests/fixtures/gemini-extension-good/GEMINI.md
- requirements.txt
- docs/guard/architecture.md


### Agent Instruction Files

- tests/fixtures/gemini-extension-good/GEMINI.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 381 |
| src | 300 |
| dashboard | 281 |
| docs | 18 |
| .github | 15 |
| action | 8 |
| .clusterfuzzlite | 4 |
| scripts | 4 |
| schemas | 3 |
| .factory | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .pre-commit-hooks.yaml | 1 |
| CONTRIBUTING.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 541 |
| .ts | 147 |
| .tsx | 128 |
| .md | 62 |
| .json | 57 |
| [no-ext] | 21 |
| .js | 19 |
| .yml | 16 |
| .txt | 8 |
| .toml | 5 |
| .sh | 4 |
| .yaml | 4 |
| .svg | 3 |
| .css | 2 |
| .gradle | 2 |
| .html | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
