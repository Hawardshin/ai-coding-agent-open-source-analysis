# gustavoeenriquez/MakerAi Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The AI Operating System for Delphi. 100% native framework with RAG 2.0, autonomous agents, MCP protocol, and universal LLM connector. Supports OpenAI, Claude, Gemini, Ollama, and more. Delphi 10.4+ (limited), full support from Delphi 12 Athens.

## 요약

- 조사 단위: `sources/gustavoeenriquez__MakerAi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,344 files, 291 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=Source/Memory/uMakerAi.Memory.MCP.pas, Source/Agents/uMakerAi.Agents.Tools.MCP.pas, Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | gustavoeenriquez/MakerAi |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Pascal |
| Stars | 184 |
| Forks | 54 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/gustavoeenriquez__MakerAi](../../../../sources/gustavoeenriquez__MakerAi) |
| Existing report | [reports/global-trending/repositories/gustavoeenriquez__MakerAi.md](../../../global-trending/repositories/gustavoeenriquez__MakerAi.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1344 / 291 |
| Max observed depth | 5 |
| Top directories | Apps, Demos, Demos-Book, Demos-V3_1, Demos-V3_4, Docs, ppm, Redis, Resources, Source |
| Top extensions | .res: 250, .pas: 245, .dproj: 234, .dpr: 228, .md: 81, .png: 59, .fmx: 39, .bmp: 35, .dfm: 31, .txt: 30, .docx: 22, .package: 9 |
| Source patterns | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| Docs | documentation surface | 55 |
| Apps | source boundary | 1 |
| Demos | top-level component | 1 |
| Demos-Book | top-level component | 1 |
| Demos-V3_1 | top-level component | 1 |
| Demos-V3_4 | top-level component | 1 |
| ppm | top-level component | 1 |
| Redis | top-level component | 1 |
| Resources | top-level component | 1 |
| Source | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [Source/Memory/uMakerAi.Memory.MCP.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Memory/uMakerAi.Memory.MCP.pas) | mcp signal |
| mcp | [Source/Agents/uMakerAi.Agents.Tools.MCP.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Agents/uMakerAi.Agents.Tools.MCP.pas) | mcp signal |
| mcp | [Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf) | mcp signal |
| mcp | [Docs/Version 3/PDF/uMakerAi-MCP.Server.ES.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/PDF/uMakerAi-MCP.Server.ES.pdf) | mcp signal |
| agentRuntime | [Source/Tools/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/CLAUDE.md) | agentRuntime signal |
| agentRuntime | [Source/Tools/uMakerAi.ElevenLabs.Speech.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.ElevenLabs.Speech.pas) | agentRuntime signal |
| agentRuntime | [Source/Tools/uMakerAi.Gemini.Speech.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.Speech.pas) | agentRuntime signal |
| agentRuntime | [Source/Tools/uMakerAi.Gemini.Veo.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.Veo.pas) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/CLAUDE.md) | instruction signal |
| instruction | [Source/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/CLAUDE.md) | instruction signal |
| instruction | [Source/WebSocket/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/WebSocket/CLAUDE.md) | instruction signal |
| instruction | [Source/Utils/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Utils/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 45 | [Source/Tools/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/CLAUDE.md)<br>[Source/Tools/uMakerAi.ElevenLabs.Speech.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.ElevenLabs.Speech.pas)<br>[Source/Tools/uMakerAi.Gemini.Speech.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.Speech.pas)<br>[Source/Tools/uMakerAi.Gemini.Veo.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.Veo.pas)<br>[Source/Tools/uMakerAi.Gemini.Video.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.Video.pas)<br>[Source/Tools/uMakerAi.Gemini.WebSearch.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.WebSearch.pas)<br>[Source/Tools/uMakerAi.Ollama.Ocr.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Ollama.Ocr.pas)<br>[Source/Tools/uMakerAi.Ollama.Vision.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Ollama.Vision.pas) |
| mcp | 162 | [Source/Memory/uMakerAi.Memory.MCP.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Memory/uMakerAi.Memory.MCP.pas)<br>[Source/Agents/uMakerAi.Agents.Tools.MCP.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Agents/uMakerAi.Agents.Tools.MCP.pas)<br>[Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf)<br>[Docs/Version 3/PDF/uMakerAi-MCP.Server.ES.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/PDF/uMakerAi-MCP.Server.ES.pdf)<br>[Docs/Version 3/MCPServer/uMakerAi-MCP.Server.EN.docx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/MCPServer/uMakerAi-MCP.Server.EN.docx)<br>[Docs/Version 3/MCPServer/uMakerAi-MCP.Server.EN.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/MCPServer/uMakerAi-MCP.Server.EN.pdf)<br>[Docs/Version 3/MCPServer/uMakerAi-MCP.Server.ES.docx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/MCPServer/uMakerAi-MCP.Server.ES.docx)<br>[Docs/Version 3/MCPServer/uMakerAi-MCP.Server.ES.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/MCPServer/uMakerAi-MCP.Server.ES.pdf) |
| retrieval | 56 | [Source/RAG/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/CLAUDE.md)<br>[Source/RAG/RagGraph_Prompt_Example.md](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/RagGraph_Prompt_Example.md)<br>[Source/RAG/uMakerAi.RAG.Graph.Builder.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.Builder.pas)<br>[Source/RAG/uMakerAi.RAG.Graph.Core.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.Core.pas)<br>[Source/RAG/uMakerAi.RAG.Graph.Documents.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.Documents.pas)<br>[Source/RAG/uMakerAi.RAG.Graph.Driver.Postgres.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.Driver.Postgres.pas)<br>[Source/RAG/uMakerAi.RAG.Graph.GQL.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.GQL.pas)<br>[Source/RAG/uMakerAi.RAG.MetaData.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.MetaData.pas) |
| spec | 11 | [Source/Design/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/CLAUDE.md)<br>[Source/Design/uAiEditors.ChatConnectionEditor.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uAiEditors.ChatConnectionEditor.pas)<br>[Source/Design/uAiEditors.EmbeddingConnectionEditor.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uAiEditors.EmbeddingConnectionEditor.pas)<br>[Source/Design/uAiEditors.RequiresUnits.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uAiEditors.RequiresUnits.pas)<br>[Source/Design/uMakerAi.Dsg.AboutDialog.dfm](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uMakerAi.Dsg.AboutDialog.dfm)<br>[Source/Design/uMakerAi.Dsg.AboutDialog.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uMakerAi.Dsg.AboutDialog.pas)<br>[Source/Design/UMakerAi.ParamsRegistry.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/UMakerAi.ParamsRegistry.pas)<br>[Source/Design/uMakerAi.VersionPropertyEditor.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uMakerAi.VersionPropertyEditor.pas) |
| eval | 1 | [Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx) |
| security | 2 | [Demos-V3_1/032-MCP_StdIO_FileManager/uTool.Sandbox.pas](../../../../sources/gustavoeenriquez__MakerAi/Demos-V3_1/032-MCP_StdIO_FileManager/uTool.Sandbox.pas)<br>[Demos/032-MCP_StdIO_FileManager/uTool.Sandbox.pas](../../../../sources/gustavoeenriquez__MakerAi/Demos/032-MCP_StdIO_FileManager/uTool.Sandbox.pas) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 68 | [CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/CLAUDE.md)<br>[Source/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/CLAUDE.md)<br>[Source/WebSocket/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/WebSocket/CLAUDE.md)<br>[Source/Utils/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Utils/CLAUDE.md)<br>[Source/Tools/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/CLAUDE.md)<br>[Source/Resources/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Resources/CLAUDE.md)<br>[Source/Realtime/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Realtime/CLAUDE.md)<br>[Source/RAG/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/CLAUDE.md) |
| docs | 62 | [README_3.1.md](../../../../sources/gustavoeenriquez__MakerAi/README_3.1.md)<br>[README.md](../../../../sources/gustavoeenriquez__MakerAi/README.md)<br>[ppm/readmeppm.txt](../../../../sources/gustavoeenriquez__MakerAi/ppm/readmeppm.txt)<br>[Docs/~$P_InstalarServidores_El primer paso está claro.docx](../../../../sources/gustavoeenriquez__MakerAi/Docs/~$P_InstalarServidores_El primer paso está claro.docx)<br>[Docs/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Docs/CLAUDE.md)<br>[Docs/Version 3/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/CLAUDE.md)<br>[Docs/Version 3/make_pptx.py](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/make_pptx.py)<br>[Docs/Version 3/Manual Instalacion.docx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/Manual Instalacion.docx) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [Demos-V3_1/032-MCP_StdIO_FileManager/uTool.Sandbox.pas](../../../../sources/gustavoeenriquez__MakerAi/Demos-V3_1/032-MCP_StdIO_FileManager/uTool.Sandbox.pas)<br>[Demos/032-MCP_StdIO_FileManager/uTool.Sandbox.pas](../../../../sources/gustavoeenriquez__MakerAi/Demos/032-MCP_StdIO_FileManager/uTool.Sandbox.pas) |
| Agent instructions | 68 | [CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/CLAUDE.md)<br>[Source/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/CLAUDE.md)<br>[Source/WebSocket/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/WebSocket/CLAUDE.md)<br>[Source/Utils/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Utils/CLAUDE.md)<br>[Source/Tools/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/CLAUDE.md)<br>[Source/Resources/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Resources/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Source/Memory/uMakerAi.Memory.MCP.pas`, `Source/Agents/uMakerAi.Agents.Tools.MCP.pas`, `Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf`.
2. Map agent/tool runtime through: `Source/Tools/CLAUDE.md`, `Source/Tools/uMakerAi.ElevenLabs.Speech.pas`, `Source/Tools/uMakerAi.Gemini.Speech.pas`.
3. Inspect retrieval/memory/indexing through: `Source/RAG/CLAUDE.md`, `Source/RAG/RagGraph_Prompt_Example.md`, `Source/RAG/uMakerAi.RAG.Graph.Builder.pas`.
4. Verify behavior through test/eval files: `Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The AI Operating System for Delphi. 100% native framework with RAG 2.0, autonomous agents, MCP protocol, and universal L. 핵심 구조 신호는 Pascal, README.md, CLAUDE.md, docs, agent-instructions, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
