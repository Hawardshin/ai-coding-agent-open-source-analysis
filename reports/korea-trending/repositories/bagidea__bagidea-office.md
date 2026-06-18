# bagidea/bagidea-office

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/bagidea/bagidea-office |
| local path | sources/bagidea__bagidea-office |
| HEAD | 00a8a93 |
| stars/forks | 0 / 0 |
| language | HTML |
| license |  |
| pushedAt | 2026-06-17T23:46:01Z |
| trendScore / priorityScore | 69 / 200 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | README.md, docs/guide/agents.md, docs/04-agent-behavior.md |
| MCP / tool protocol | 323 | README.md, docs/guide/agents.md, docs/05-technical-architecture.md |
| Security / compliance | 128 | README.md, docs/guide/agents.md, docs/04-agent-behavior.md |
| LLM wiki / memory / graph | 98 | README.md, docs/01-ux-architecture.md, docs/02-ui-wireframes.md |
| RAG / retrieval | 39 | README.md, docs/01-ux-architecture.md, docs/03-world-layout.md |
| Spec / doc-driven workflow | 28 | README.md, docs/03-world-layout.md, docs/05-technical-architecture.md |
| Frontend / developer experience | 25 | README.md, docs/05-technical-architecture.md, docs/07-future-expansion.md |
| Infra / observability | 23 | docs/10-revolutionary-features.md, daemon/toolshub.html, daemon/i18n-seed/de.json |
| Local LLM / on-device inference | 14 | README.md, docs/03-world-layout.md, docs/guide/models.md |
| Korean language / Korea domain | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 827 |
| manifests | 3 |
| docs | 31 |
| tests | 6 |
| ci/ops | 2 |
| spec artifacts | 4 |
| agent instruction files | 3 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | BagIdea Office |
| headings | BagIdea Office / 🆕 Recently shipped / 🧠 Swappable Brains — every agent, any model *(new in v0.8.0)* / ♻️ Auto-Compact + Auto-New-Thread — for *every* model / 📊 See everything / 💛 Sponsors / 👑 Gold Partners / 💛 Supporters / Tiers / How sponsoring works |
| excerpt | BagIdea Office A living, 2.5D Claude Office that runs as your desktop wallpaper — a team of AI agents with real presence that work, learn and grow alongside you. Every agent walks to its desk when real work starts, asks permission at the Security desk, holds meetings, learns new skills, and the lights follow your real local time. Not a dashboard. Not a chat window. A world that renders the true state of your Claude agents — Claude Code sessions, headless runs, custom scripts — as living pixel art employees behind your desktop icons, and gives them a society . Build a big enough team and they grow their own AI social life they chat, play, learn how to work together, and learn about you . Many |


## 주요 파일

### Manifests

- README.md
- shell/Cargo.toml
- shell/macos/wallpaper_shim/Cargo.toml


### Spec / Docs / Prompt Artifacts

- docs/guide/agents.md
- .claude/settings.json
- REQUIREMENT.md
- workspace/.claude/settings.json


### Agent Instruction Files

- docs/guide/agents.md
- .claude/settings.json
- workspace/.claude/settings.json


## 상위 디렉터리

| dir | count |
| --- | --- |
| godot | 695 |
| daemon | 49 |
| docs | 27 |
| web | 21 |
| plugins | 6 |
| installer | 5 |
| shell | 5 |
| .github | 3 |
| cli | 2 |
| .claude | 1 |
| .gitignore | 1 |
| bagidea.cmd | 1 |
| build-mac.sh | 1 |
| CHANGELOG.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .bin | 144 |
| .gltf | 144 |
| .fbx | 143 |
| .glb | 136 |
| .wav | 50 |
| .json | 38 |
| .gd | 31 |
| .md | 31 |
| .gdshader | 25 |
| .js | 24 |
| .tscn | 13 |
| .html | 11 |
| .ps1 | 9 |
| .txt | 6 |
| [no-ext] | 5 |
| .rs | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
