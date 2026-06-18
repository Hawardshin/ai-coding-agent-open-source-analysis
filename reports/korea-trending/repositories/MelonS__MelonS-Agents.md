# MelonS/MelonS-Agents

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/MelonS/MelonS-Agents |
| local path | sources/MelonS__MelonS-Agents |
| HEAD | 800653e |
| stars/forks | 0 / 0 |
| language | C# |
| license |  |
| pushedAt | 2026-06-15T11:53:43Z |
| trendScore / priorityScore | 69 / 216 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | docs/audit/README.md, agents/missions/highlight/README.md, agents/missions/shorts-batch/README.md |
| LLM wiki / memory / graph | 157 | skills/game-dev-agent/README.md, README.md, skills/game-prototype/README.md |
| Spec / doc-driven workflow | 101 | docs/audit/README.md, agents/missions/highlight/README.md, agents/missions/summarize/README.md |
| Local LLM / on-device inference | 73 | docs/onboarding/README.md, docs/pilots/music-trial/README.md, agents/missions/highlight/README.md |
| Korean language / Korea domain | 64 | agents/missions/summarize/README.md, README.md, skills/game-prototype/README.md |
| Security / compliance | 50 | docs/audit/README.md, README.md, skills/README.md |
| RAG / retrieval | 12 | skills/game-prototype/docs/wiki-gap-analysis-2026-06-14.md, skills/game-prototype/docs/wiki-gap-analysis-phase2-2026-06-14.md, skills/game-prototype/docs/wiki-ref/mining.md |
| Infra / observability | 7 | docs/research/agent-orchestration-patterns.md, docs/ideas.md, docs/intervention-log.md |
| Frontend / developer experience | 2 | docs/for-analysts.md, docs/goal.md |
| MCP / tool protocol | 2 | docs/ideas.md, docs/operator-contract.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, .NET |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 4582 |
| manifests | 40 |
| docs | 372 |
| tests | 336 |
| ci/ops | 2 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | MelonS-Agents |
| headings | MelonS-Agents / Try it in ~60 seconds (zero accounts, zero `.env`) / Who this is for / Overview / PawnSim — the prototype the agent is actively iterating on (2026-06 focus) / Design notes / Autonomy signal — operator-intervention trend / Quality signal — mission-outcome trend / Sample output / Recently shipped (rolling) |
| excerpt | <div align="center" MelonS Agents 한국어 ./README.ko.md English · Live site → https //melons.github.io/MelonS Agents/ An agent that builds, plays, and verifies its own game — a colony sim vertical slice gated by input level repro tests and isolated grader rubric verdicts — plus two production media skills music video shorts, Korean job board digest , all agentskills.io https //agentskills.io spec compliant and portable across Claude Code, Cursor, Goose, Gemini CLI, OpenAI Codex, GitHub Copilot. Local for the mechanical, Claude for the creative. Phrase aware ffmpeg shaders sync vintage visuals to music structure. Short keyword job hunt expansion via role synonym map. Three trigger layers — commi |


## 주요 파일

### Manifests

- docs/audit/README.md
- docs/onboarding/README.md
- docs/pilots/music-trial/README.md
- docs/pilots/sonnet-trial/README.md
- agents/missions/highlight/README.md
- agents/missions/shorts-batch/README.md
- agents/missions/summarize/README.md
- skills/game-dev-agent/README.md
- README.md
- skills/README.md
- assets/music/README.md
- outputs/review-queue/README.md
- skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.2d.sprite@0eb6ea2c7181/README.md
- skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.2d.tilemap@81172dccd143/README.md
- skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.multiplayer.center@f3fb577b3546/README.md
- skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.ugui@7537063fea2b/README.md
- skills/game-prototype/README.md
- skills/job-hunt/sources/README.md
- CLAUDE.md
- skills/game-prototype-2048/unity-project/Library/PackageCache/com.unity.2d.sprite@0eb6ea2c7181/package.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/architecture.md
- docs/roadmap.md
- .claude/agents/auditor.md
- .claude/agents/editor.md
- .claude/agents/game-ai-designer.md
- .claude/agents/game-artist.md
- .claude/agents/game-build-engineer.md
- .claude/agents/game-combat-designer.md
- .claude/agents/game-designer.md
- .claude/agents/game-director.md
- .claude/agents/game-level-designer.md
- .claude/agents/game-narrative-designer.md
- .claude/agents/game-pm.md
- .claude/agents/game-programmer.md
- .claude/agents/game-qa.md
- .claude/agents/game-sound-designer.md
- .claude/agents/game-systems-designer.md
- .claude/agents/orchestrator.md
- .claude/agents/planner.md


### Agent Instruction Files

- CLAUDE.md
- .claude/agents/auditor.md
- .claude/agents/editor.md
- .claude/agents/game-ai-designer.md
- .claude/agents/game-artist.md
- .claude/agents/game-build-engineer.md
- .claude/agents/game-combat-designer.md
- .claude/agents/game-designer.md
- .claude/agents/game-director.md
- .claude/agents/game-level-designer.md
- .claude/agents/game-narrative-designer.md
- .claude/agents/game-pm.md
- .claude/agents/game-programmer.md
- .claude/agents/game-qa.md
- .claude/agents/game-sound-designer.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| skills | 4133 |
| docs | 138 |
| scripts | 123 |
| .claude | 114 |
| agents | 23 |
| assets | 14 |
| outputs | 9 |
| config | 7 |
| .github | 6 |
| site | 3 |
| .claude-plugin | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .meta | 1723 |
| .cs | 678 |
| [no-ext] | 338 |
| .bin | 337 |
| .md | 283 |
| .json | 269 |
| .mvfrm | 226 |
| .sh | 142 |
| .asset | 95 |
| .py | 77 |
| .txt | 51 |
| .modulecompilationtrigger | 34 |
| .psd | 31 |
| .rsp | 31 |
| .pdb | 30 |
| .wav | 28 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
