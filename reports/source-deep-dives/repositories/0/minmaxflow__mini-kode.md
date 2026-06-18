# minmaxflow/mini-kode 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 150 files, 20 directories.

## 요약

- 조사 단위: `sources/minmaxflow__mini-kode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 150 files, 20 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp/client.test.ts, src/mcp/client.ts, src/mcp/index.ts이고, 의존성 단서는 openai, modelcontextprotocol, react, commander, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | minmaxflow/mini-kode |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/minmaxflow__mini-kode](../../../../sources/minmaxflow__mini-kode) |
| 기존 보고서 | [reports/clone-structures/minmaxflow__mini-kode.md](../../../clone-structures/minmaxflow__mini-kode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 150 / 20 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | docs, src |
| 상위 확장자 | .ts: 102, .tsx: 32, .md: 10, .json: 2, (none): 2, .png: 1, .yaml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 87 |
| docs | documentation surface | 10 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | DEV=true bun --watch run src/index.ts |
| build | package.json | build | bun build src/index.ts --outfile dist/index.mjs --target=node --minify |
| test | package.json | test | vitest run |
| quality | package.json | lint | tsc --noEmit |
| quality | package.json | format | prettier --write "**/*.{ts,tsx,md}" |
| test | package.json | prepublishOnly | pnpm run build && pnpm run test |
| utility | package.json | postpublish | git tag v$(npm pkg get version \| tr -d '"') && git push origin v$(npm pkg get version \| tr -d '"') |
| entrypoint | package.json bin | index.mjs | dist/index.mjs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/mcp/client.test.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/client.test.ts) | mcp signal |
| mcp | [src/mcp/client.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/client.ts) | mcp signal |
| mcp | [src/mcp/index.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/index.ts) | mcp signal |
| mcp | [src/mcp/tools.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/tools.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/minmaxflow__mini-kode/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/ui/hooks/useAppState.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useAppState.ts) | agentRuntime signal |
| agentRuntime | [src/ui/hooks/useDoubleKeyPress.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useDoubleKeyPress.ts) | agentRuntime signal |
| agentRuntime | [src/ui/hooks/useFileCompletion.test.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.test.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/minmaxflow__mini-kode/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/minmaxflow__mini-kode/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/minmaxflow__mini-kode/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/minmaxflow__mini-kode/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/minmaxflow__mini-kode/src/cli.ts)<br>[src/index.ts](../../../../sources/minmaxflow__mini-kode/src/index.ts) |
| agentRuntime | 63 | [AGENTS.md](../../../../sources/minmaxflow__mini-kode/AGENTS.md)<br>[src/ui/hooks/useAppState.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useAppState.ts)<br>[src/ui/hooks/useDoubleKeyPress.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useDoubleKeyPress.ts)<br>[src/ui/hooks/useFileCompletion.test.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.test.ts)<br>[src/ui/hooks/useFileCompletion.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.ts)<br>[src/ui/hooks/useTerminalWidth.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useTerminalWidth.ts)<br>[src/ui/components/tool-views/ArchitectResultView.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/ArchitectResultView.tsx)<br>[src/ui/components/tool-views/BashResultView.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/BashResultView.tsx) |
| mcp | 5 | [src/mcp/client.test.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/client.test.ts)<br>[src/mcp/client.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/client.ts)<br>[src/mcp/index.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/index.ts)<br>[src/mcp/tools.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/tools.ts)<br>[src/mcp/types.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/types.ts) |
| retrieval | 7 | [src/index.ts](../../../../sources/minmaxflow__mini-kode/src/index.ts)<br>[src/ui/components/tool-views/index.ts](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/index.ts)<br>[src/ui/commands/index.ts](../../../../sources/minmaxflow__mini-kode/src/ui/commands/index.ts)<br>[src/tools/index.ts](../../../../sources/minmaxflow__mini-kode/src/tools/index.ts)<br>[src/permissions/index.ts](../../../../sources/minmaxflow__mini-kode/src/permissions/index.ts)<br>[src/mcp/index.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/index.ts)<br>[src/config/index.ts](../../../../sources/minmaxflow__mini-kode/src/config/index.ts) |
| spec | 1 | [docs/architecture.md](../../../../sources/minmaxflow__mini-kode/docs/architecture.md) |
| eval | 32 | [src/utils/file-type.test.ts](../../../../sources/minmaxflow__mini-kode/src/utils/file-type.test.ts)<br>[src/ui/hooks/useFileCompletion.test.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.test.ts)<br>[src/ui/components/MessageFeed.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/MessageFeed.test.tsx)<br>[src/ui/components/PromptInput.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/PromptInput.test.tsx)<br>[src/ui/components/ToolCall.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/ToolCall.test.tsx)<br>[src/ui/components/tool-views/FetchResultView.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/FetchResultView.test.tsx)<br>[src/tools/architect.test.ts](../../../../sources/minmaxflow__mini-kode/src/tools/architect.test.ts)<br>[src/tools/bash.test.ts](../../../../sources/minmaxflow__mini-kode/src/tools/bash.test.ts) |
| security | 2 | [src/permissions/permission.test.ts](../../../../sources/minmaxflow__mini-kode/src/permissions/permission.test.ts)<br>[docs/permission.md](../../../../sources/minmaxflow__mini-kode/docs/permission.md) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/minmaxflow__mini-kode/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/minmaxflow__mini-kode/README.md)<br>[docs/architecture.md](../../../../sources/minmaxflow__mini-kode/docs/architecture.md)<br>[docs/config.md](../../../../sources/minmaxflow__mini-kode/docs/config.md)<br>[docs/llm-tool-integration.md](../../../../sources/minmaxflow__mini-kode/docs/llm-tool-integration.md)<br>[docs/permission.md](../../../../sources/minmaxflow__mini-kode/docs/permission.md)<br>[docs/README.md](../../../../sources/minmaxflow__mini-kode/docs/README.md)<br>[docs/tools.md](../../../../sources/minmaxflow__mini-kode/docs/tools.md)<br>[docs/ui.md](../../../../sources/minmaxflow__mini-kode/docs/ui.md) |
| config | 2 | [package.json](../../../../sources/minmaxflow__mini-kode/package.json)<br>[tsconfig.json](../../../../sources/minmaxflow__mini-kode/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 32 | [src/utils/file-type.test.ts](../../../../sources/minmaxflow__mini-kode/src/utils/file-type.test.ts)<br>[src/ui/hooks/useFileCompletion.test.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.test.ts)<br>[src/ui/components/MessageFeed.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/MessageFeed.test.tsx)<br>[src/ui/components/PromptInput.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/PromptInput.test.tsx)<br>[src/ui/components/ToolCall.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/ToolCall.test.tsx)<br>[src/ui/components/tool-views/FetchResultView.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/FetchResultView.test.tsx) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [src/permissions/permission.test.ts](../../../../sources/minmaxflow__mini-kode/src/permissions/permission.test.ts)<br>[docs/permission.md](../../../../sources/minmaxflow__mini-kode/docs/permission.md) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/minmaxflow__mini-kode/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/mcp/client.test.ts`, `src/mcp/client.ts`, `src/mcp/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/ui/hooks/useAppState.ts`, `src/ui/hooks/useDoubleKeyPress.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/ui/components/tool-views/index.ts`, `src/ui/commands/index.ts`.
5. test/eval 파일로 동작 검증: `src/utils/file-type.test.ts`, `src/ui/hooks/useFileCompletion.test.ts`, `src/ui/components/MessageFeed.test.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 150 files, 20 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, LICENSE, openai, modelcontextprotocol이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음입니다.
