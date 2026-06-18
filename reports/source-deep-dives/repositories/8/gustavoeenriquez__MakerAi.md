# gustavoeenriquez/MakerAi 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The AI Operating System for Delphi. 100% native framework with RAG 2.0, autonomous agents, MCP protocol, and universal LLM connector. Supports OpenAI, Claude, Gemini, Ollama, and more. Delphi 10.4+ (limited), full support from Delphi 12 Athens.

## 요약

- 조사 단위: `sources/gustavoeenriquez__MakerAi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,344 files, 291 directories, depth score 104, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=Source/Memory/uMakerAi.Memory.MCP.pas, Source/Agents/uMakerAi.Agents.Tools.MCP.pas, Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | gustavoeenriquez/MakerAi |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Pascal |
| Stars | 184 |
| Forks | 54 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/gustavoeenriquez__MakerAi](../../../../sources/gustavoeenriquez__MakerAi) |
| 기존 보고서 | [reports/global-trending/repositories/gustavoeenriquez__MakerAi.md](../../../global-trending/repositories/gustavoeenriquez__MakerAi.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1344 / 291 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | Apps, Demos, Demos-Book, Demos-V3_1, Demos-V3_4, Docs, ppm, Redis, Resources, Source |
| 상위 확장자 | .res: 250, .pas: 245, .dproj: 234, .dpr: 228, .md: 81, .png: 59, .fmx: 39, .bmp: 35, .dfm: 31, .txt: 30, .docx: 22, .package: 9 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 45 | [Source/Tools/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/CLAUDE.md)<br>[Source/Tools/uMakerAi.ElevenLabs.Speech.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.ElevenLabs.Speech.pas)<br>[Source/Tools/uMakerAi.Gemini.Speech.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.Speech.pas)<br>[Source/Tools/uMakerAi.Gemini.Veo.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.Veo.pas)<br>[Source/Tools/uMakerAi.Gemini.Video.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.Video.pas)<br>[Source/Tools/uMakerAi.Gemini.WebSearch.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Gemini.WebSearch.pas)<br>[Source/Tools/uMakerAi.Ollama.Ocr.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Ollama.Ocr.pas)<br>[Source/Tools/uMakerAi.Ollama.Vision.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/uMakerAi.Ollama.Vision.pas) |
| mcp | 162 | [Source/Memory/uMakerAi.Memory.MCP.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Memory/uMakerAi.Memory.MCP.pas)<br>[Source/Agents/uMakerAi.Agents.Tools.MCP.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Agents/uMakerAi.Agents.Tools.MCP.pas)<br>[Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf)<br>[Docs/Version 3/PDF/uMakerAi-MCP.Server.ES.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/PDF/uMakerAi-MCP.Server.ES.pdf)<br>[Docs/Version 3/MCPServer/uMakerAi-MCP.Server.EN.docx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/MCPServer/uMakerAi-MCP.Server.EN.docx)<br>[Docs/Version 3/MCPServer/uMakerAi-MCP.Server.EN.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/MCPServer/uMakerAi-MCP.Server.EN.pdf)<br>[Docs/Version 3/MCPServer/uMakerAi-MCP.Server.ES.docx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/MCPServer/uMakerAi-MCP.Server.ES.docx)<br>[Docs/Version 3/MCPServer/uMakerAi-MCP.Server.ES.pdf](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/MCPServer/uMakerAi-MCP.Server.ES.pdf) |
| retrieval | 56 | [Source/RAG/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/CLAUDE.md)<br>[Source/RAG/RagGraph_Prompt_Example.md](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/RagGraph_Prompt_Example.md)<br>[Source/RAG/uMakerAi.RAG.Graph.Builder.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.Builder.pas)<br>[Source/RAG/uMakerAi.RAG.Graph.Core.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.Core.pas)<br>[Source/RAG/uMakerAi.RAG.Graph.Documents.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.Documents.pas)<br>[Source/RAG/uMakerAi.RAG.Graph.Driver.Postgres.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.Driver.Postgres.pas)<br>[Source/RAG/uMakerAi.RAG.Graph.GQL.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.Graph.GQL.pas)<br>[Source/RAG/uMakerAi.RAG.MetaData.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/uMakerAi.RAG.MetaData.pas) |
| spec | 11 | [Source/Design/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/CLAUDE.md)<br>[Source/Design/uAiEditors.ChatConnectionEditor.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uAiEditors.ChatConnectionEditor.pas)<br>[Source/Design/uAiEditors.EmbeddingConnectionEditor.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uAiEditors.EmbeddingConnectionEditor.pas)<br>[Source/Design/uAiEditors.RequiresUnits.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uAiEditors.RequiresUnits.pas)<br>[Source/Design/uMakerAi.Dsg.AboutDialog.dfm](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uMakerAi.Dsg.AboutDialog.dfm)<br>[Source/Design/uMakerAi.Dsg.AboutDialog.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uMakerAi.Dsg.AboutDialog.pas)<br>[Source/Design/UMakerAi.ParamsRegistry.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/UMakerAi.ParamsRegistry.pas)<br>[Source/Design/uMakerAi.VersionPropertyEditor.pas](../../../../sources/gustavoeenriquez__MakerAi/Source/Design/uMakerAi.VersionPropertyEditor.pas) |
| eval | 1 | [Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx) |
| security | 2 | [Demos-V3_1/032-MCP_StdIO_FileManager/uTool.Sandbox.pas](../../../../sources/gustavoeenriquez__MakerAi/Demos-V3_1/032-MCP_StdIO_FileManager/uTool.Sandbox.pas)<br>[Demos/032-MCP_StdIO_FileManager/uTool.Sandbox.pas](../../../../sources/gustavoeenriquez__MakerAi/Demos/032-MCP_StdIO_FileManager/uTool.Sandbox.pas) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 68 | [CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/CLAUDE.md)<br>[Source/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/CLAUDE.md)<br>[Source/WebSocket/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/WebSocket/CLAUDE.md)<br>[Source/Utils/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Utils/CLAUDE.md)<br>[Source/Tools/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/CLAUDE.md)<br>[Source/Resources/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Resources/CLAUDE.md)<br>[Source/Realtime/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Realtime/CLAUDE.md)<br>[Source/RAG/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/RAG/CLAUDE.md) |
| docs | 62 | [README_3.1.md](../../../../sources/gustavoeenriquez__MakerAi/README_3.1.md)<br>[README.md](../../../../sources/gustavoeenriquez__MakerAi/README.md)<br>[ppm/readmeppm.txt](../../../../sources/gustavoeenriquez__MakerAi/ppm/readmeppm.txt)<br>[Docs/~$P_InstalarServidores_El primer paso está claro.docx](../../../../sources/gustavoeenriquez__MakerAi/Docs/~$P_InstalarServidores_El primer paso está claro.docx)<br>[Docs/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Docs/CLAUDE.md)<br>[Docs/Version 3/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/CLAUDE.md)<br>[Docs/Version 3/make_pptx.py](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/make_pptx.py)<br>[Docs/Version 3/Manual Instalacion.docx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Version 3/Manual Instalacion.docx) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx](../../../../sources/gustavoeenriquez__MakerAi/Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [Demos-V3_1/032-MCP_StdIO_FileManager/uTool.Sandbox.pas](../../../../sources/gustavoeenriquez__MakerAi/Demos-V3_1/032-MCP_StdIO_FileManager/uTool.Sandbox.pas)<br>[Demos/032-MCP_StdIO_FileManager/uTool.Sandbox.pas](../../../../sources/gustavoeenriquez__MakerAi/Demos/032-MCP_StdIO_FileManager/uTool.Sandbox.pas) |
| 에이전트 지시문 | 68 | [CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/CLAUDE.md)<br>[Source/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/CLAUDE.md)<br>[Source/WebSocket/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/WebSocket/CLAUDE.md)<br>[Source/Utils/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Utils/CLAUDE.md)<br>[Source/Tools/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Tools/CLAUDE.md)<br>[Source/Resources/CLAUDE.md](../../../../sources/gustavoeenriquez__MakerAi/Source/Resources/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `Source/Memory/uMakerAi.Memory.MCP.pas`, `Source/Agents/uMakerAi.Agents.Tools.MCP.pas`, `Docs/Version 3/PDF/uMakerAi-MCP.Server.EN.pdf`.
2. agent/tool runtime 매핑: `Source/Tools/CLAUDE.md`, `Source/Tools/uMakerAi.ElevenLabs.Speech.pas`, `Source/Tools/uMakerAi.Gemini.Speech.pas`.
3. retrieval/memory/indexing 확인: `Source/RAG/CLAUDE.md`, `Source/RAG/RagGraph_Prompt_Example.md`, `Source/RAG/uMakerAi.RAG.Graph.Builder.pas`.
4. test/eval 파일로 동작 검증: `Docs/Pruebas/MakerAI34_Test_Status_Feb_25_2026.xlsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The AI Operating System for Delphi. 100% native framework with RAG 2.0, autonomous agents, MCP protocol, and universal L. 핵심 구조 신호는 Pascal, README.md, CLAUDE.md, docs, agent-instructions, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
