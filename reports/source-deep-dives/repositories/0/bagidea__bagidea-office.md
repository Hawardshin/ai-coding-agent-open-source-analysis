# bagidea/bagidea-office 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A living AI-agent office on your desktop wallpaper — Claude Code agents that walk, work, delegate, learn & hold meetings. Per-agent swappable models (Claude/GLM/DeepSeek/Qwen/Kimi/OpenAI/Gemini/Groq/Ollama…), workflows, plugins, voice & Telegram/Discord/LINE. Open source.

## 요약

- 조사 단위: `sources/bagidea__bagidea-office` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,169 files, 101 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=web/img/agents.png, tools/wallpaper.ps1, godot/scripts/agent_manager.gd이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bagidea/bagidea-office |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | HTML |
| Stars | 55 |
| Forks | 26 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/bagidea__bagidea-office](../../../../sources/bagidea__bagidea-office) |
| 기존 보고서 | [reports/global-trending/repositories/bagidea__bagidea-office.md](../../../global-trending/repositories/bagidea__bagidea-office.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1169 / 101 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude, .github, cli, daemon, docs, godot, installer, npc_custom, plugins, scripts, shell, tools, web, workspace |
| 상위 확장자 | .png: 361, .bin: 144, .gltf: 144, .glb: 136, .fbx: 112, .wav: 50, .json: 38, .gd: 31, .md: 31, .gdshader: 25, .js: 24, .tscn: 13 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 46 |
| web | source boundary | 3 |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| daemon | top-level component | 1 |
| godot | top-level component | 1 |
| installer | top-level component | 1 |
| npc_custom | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| shell | top-level component | 1 |
| tools | top-level component | 1 |
| workspace | top-level component | 1 |


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
| agentRuntime | [web/img/agents.png](../../../../sources/bagidea__bagidea-office/web/img/agents.png) | agentRuntime signal |
| agentRuntime | [tools/wallpaper.ps1](../../../../sources/bagidea__bagidea-office/tools/wallpaper.ps1) | agentRuntime signal |
| agentRuntime | [godot/scripts/agent_manager.gd](../../../../sources/bagidea__bagidea-office/godot/scripts/agent_manager.gd) | agentRuntime signal |
| agentRuntime | [godot/scripts/agent_sprite.gd](../../../../sources/bagidea__bagidea-office/godot/scripts/agent_sprite.gd) | agentRuntime signal |
| entrypoints | [shell/src/main.rs](../../../../sources/bagidea__bagidea-office/shell/src/main.rs) | entrypoints signal |
| entrypoints | [daemon/server.js](../../../../sources/bagidea__bagidea-office/daemon/server.js) | entrypoints signal |
| instruction | [docs/guide/agents.md](../../../../sources/bagidea__bagidea-office/docs/guide/agents.md) | instruction signal |
| config | [shell/Cargo.lock](../../../../sources/bagidea__bagidea-office/shell/Cargo.lock) | config signal |
| config | [shell/Cargo.toml](../../../../sources/bagidea__bagidea-office/shell/Cargo.toml) | config signal |
| config | [shell/macos/wallpaper_shim/Cargo.lock](../../../../sources/bagidea__bagidea-office/shell/macos/wallpaper_shim/Cargo.lock) | config signal |
| config | [shell/macos/wallpaper_shim/Cargo.toml](../../../../sources/bagidea__bagidea-office/shell/macos/wallpaper_shim/Cargo.toml) | config signal |
| ci | [.github/workflows/pages.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/pages.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [shell/src/main.rs](../../../../sources/bagidea__bagidea-office/shell/src/main.rs)<br>[daemon/server.js](../../../../sources/bagidea__bagidea-office/daemon/server.js) |
| agentRuntime | 18 | [web/img/agents.png](../../../../sources/bagidea__bagidea-office/web/img/agents.png)<br>[tools/wallpaper.ps1](../../../../sources/bagidea__bagidea-office/tools/wallpaper.ps1)<br>[godot/scripts/agent_manager.gd](../../../../sources/bagidea__bagidea-office/godot/scripts/agent_manager.gd)<br>[godot/scripts/agent_sprite.gd](../../../../sources/bagidea__bagidea-office/godot/scripts/agent_sprite.gd)<br>[docs/img/agents.png](../../../../sources/bagidea__bagidea-office/docs/img/agents.png)<br>[docs/guide/agents.md](../../../../sources/bagidea__bagidea-office/docs/guide/agents.md)<br>[daemon/hook.js](../../../../sources/bagidea__bagidea-office/daemon/hook.js)<br>[daemon/hook.ps1](../../../../sources/bagidea__bagidea-office/daemon/hook.ps1) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 5 | [web/index.html](../../../../sources/bagidea__bagidea-office/web/index.html)<br>[plugins/music/index.js](../../../../sources/bagidea__bagidea-office/plugins/music/index.js)<br>[plugins/calculator/index.js](../../../../sources/bagidea__bagidea-office/plugins/calculator/index.js)<br>[daemon/retrieval.js](../../../../sources/bagidea__bagidea-office/daemon/retrieval.js)<br>[daemon/tests/retrieval.test.js](../../../../sources/bagidea__bagidea-office/daemon/tests/retrieval.test.js) |
| spec | 4 | [REQUIREMENT.md](../../../../sources/bagidea__bagidea-office/REQUIREMENT.md)<br>[docs/01-ux-architecture.md](../../../../sources/bagidea__bagidea-office/docs/01-ux-architecture.md)<br>[docs/05-technical-architecture.md](../../../../sources/bagidea__bagidea-office/docs/05-technical-architecture.md)<br>[docs/DESIGN-extensibility.md](../../../../sources/bagidea__bagidea-office/docs/DESIGN-extensibility.md) |
| eval | 21 | [godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Blue.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Blue.glb)<br>[godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Green.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Green.glb)<br>[godot/assets/scifi/Large_Monitor_Off_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Off_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Off.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Off.glb)<br>[godot/assets/scifi/Large_Monitor_Orange_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Orange_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Orange.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Orange.glb) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/pages.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/pages.yml)<br>[.github/workflows/sponsors.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/sponsors.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [docs/guide/agents.md](../../../../sources/bagidea__bagidea-office/docs/guide/agents.md) |
| docs | 44 | [README.md](../../../../sources/bagidea__bagidea-office/README.md)<br>[docs/01-ux-architecture.md](../../../../sources/bagidea__bagidea-office/docs/01-ux-architecture.md)<br>[docs/02-ui-wireframes.md](../../../../sources/bagidea__bagidea-office/docs/02-ui-wireframes.md)<br>[docs/03-world-layout.md](../../../../sources/bagidea__bagidea-office/docs/03-world-layout.md)<br>[docs/04-agent-behavior.md](../../../../sources/bagidea__bagidea-office/docs/04-agent-behavior.md)<br>[docs/05-technical-architecture.md](../../../../sources/bagidea__bagidea-office/docs/05-technical-architecture.md)<br>[docs/06-performance.md](../../../../sources/bagidea__bagidea-office/docs/06-performance.md)<br>[docs/07-future-expansion.md](../../../../sources/bagidea__bagidea-office/docs/07-future-expansion.md) |
| config | 4 | [shell/Cargo.lock](../../../../sources/bagidea__bagidea-office/shell/Cargo.lock)<br>[shell/Cargo.toml](../../../../sources/bagidea__bagidea-office/shell/Cargo.toml)<br>[shell/macos/wallpaper_shim/Cargo.lock](../../../../sources/bagidea__bagidea-office/shell/macos/wallpaper_shim/Cargo.lock)<br>[shell/macos/wallpaper_shim/Cargo.toml](../../../../sources/bagidea__bagidea-office/shell/macos/wallpaper_shim/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 21 | [godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Blue.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Blue.glb)<br>[godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Green.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Green.glb)<br>[godot/assets/scifi/Large_Monitor_Off_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Off_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Off.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Off.glb) |
| CI workflow | 2 | [.github/workflows/pages.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/pages.yml)<br>[.github/workflows/sponsors.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/sponsors.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [docs/guide/agents.md](../../../../sources/bagidea__bagidea-office/docs/guide/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `web/img/agents.png`, `tools/wallpaper.ps1`, `godot/scripts/agent_manager.gd`.
2. entrypoint를 따라 실행 흐름 확인: `shell/src/main.rs`, `daemon/server.js`.
3. agent/tool runtime 매핑: `web/img/agents.png`, `tools/wallpaper.ps1`, `godot/scripts/agent_manager.gd`.
4. retrieval/memory/indexing 확인: `web/index.html`, `plugins/music/index.js`, `plugins/calculator/index.js`.
5. test/eval 파일로 동작 검증: `godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png`, `godot/assets/scifi/Large_Monitor_Blue.glb`, `godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A living AI agent office on your desktop wallpaper — Claude Code agents that walk, work, delegate, learn & hold meetings. 핵심 구조 신호는 HTML, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
