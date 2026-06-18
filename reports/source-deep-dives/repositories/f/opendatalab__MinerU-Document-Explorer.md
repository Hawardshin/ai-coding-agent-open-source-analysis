# opendatalab/MinerU-Document-Explorer 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Agent-native knowledge engine with MCP tools for document indexing, wiki organization, fast retrieval and deep reading across PDF/DOCX/PPTX/Markdown

## 요약

- 조사 단위: `sources/opendatalab__MinerU-Document-Explorer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 191 files, 33 directories, depth score 101, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp-agent-ux.test.ts, test/mcp.test.ts, src/mcp/server.ts이고, 의존성 단서는 modelcontextprotocol, llama, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | opendatalab/MinerU-Document-Explorer |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 586 |
| Forks | 64 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/opendatalab__MinerU-Document-Explorer](../../../../sources/opendatalab__MinerU-Document-Explorer) |
| 기존 보고서 | [reports/llm-wiki/repositories/opendatalab__MinerU-Document-Explorer.md](../../../llm-wiki/repositories/opendatalab__MinerU-Document-Explorer.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 191 / 33 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude-plugin, .github, .pi, assets, bin, demo, docs, finetune, scripts, skills, src, test |
| 상위 확장자 | .ts: 73, .py: 32, .md: 26, .jsonl: 14, (none): 10, .png: 7, .json: 6, .yaml: 6, .sh: 5, .lock: 3, .txt: 3, .yml: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 27 |
| docs | documentation surface | 10 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| demo | top-level component | 1 |
| finetune | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | [ -d .git ] && ./scripts/install-hooks.sh \|\| true |
| build | package.json | build | node scripts/sync-embedded-skills.js && tsc -p tsconfig.build.json && rm -rf dist/backends/python && cp -r src/backends/python dist/backends/python && printf '#!/usr/bin/env node ' \| cat - dist/cli/qmd.js > dist/cli/qmd. |
| test | package.json | test | vitest run --reporter=verbose test/ |
| utility | package.json | qmd | tsx src/cli/qmd.ts |
| utility | package.json | update | tsx src/cli/qmd.ts update |
| utility | package.json | embed | tsx src/cli/qmd.ts embed |
| utility | package.json | search | tsx src/cli/qmd.ts search |
| utility | package.json | vsearch | tsx src/cli/qmd.ts vsearch |
| utility | package.json | rerank | tsx src/cli/qmd.ts rerank |
| test | package.json | inspector | npx @modelcontextprotocol/inspector tsx src/cli/qmd.ts mcp |
| build | package.json | release | ./scripts/release.sh |
| entrypoint | package.json bin | qmd | bin/qmd |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [test/mcp-agent-ux.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/mcp-agent-ux.test.ts) | mcp signal |
| mcp | [test/mcp.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/mcp.test.ts) | mcp signal |
| mcp | [src/mcp/server.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/server.ts) | mcp signal |
| mcp | [src/mcp/tools/core.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/core.ts) | mcp signal |
| agentRuntime | [test/agent-experience.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/agent-experience.test.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/document.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/document.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/index.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/index.ts) | entrypoints signal |
| entrypoints | [bin/qmd](../../../../sources/opendatalab__MinerU-Document-Explorer/bin/qmd) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/CLAUDE.md) | instruction signal |
| instruction | [finetune/CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/opendatalab__MinerU-Document-Explorer/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/server.ts)<br>[bin/qmd](../../../../sources/opendatalab__MinerU-Document-Explorer/bin/qmd) |
| agentRuntime | 10 | [test/agent-experience.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/agent-experience.test.ts)<br>[src/mcp/tools/core.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/core.ts)<br>[src/mcp/tools/document.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/document.ts)<br>[src/mcp/tools/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/index.ts)<br>[src/mcp/tools/wiki.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/wiki.ts)<br>[src/mcp/tools/writing.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/writing.ts)<br>[skills/mineru-document-explorer/SKILL.md](../../../../sources/opendatalab__MinerU-Document-Explorer/skills/mineru-document-explorer/SKILL.md)<br>[skills/mineru-document-explorer/references/mcp-setup.md](../../../../sources/opendatalab__MinerU-Document-Explorer/skills/mineru-document-explorer/references/mcp-setup.md) |
| mcp | 12 | [test/mcp-agent-ux.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/mcp-agent-ux.test.ts)<br>[test/mcp.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/mcp.test.ts)<br>[src/mcp/server.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/server.ts)<br>[src/mcp/tools/core.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/core.ts)<br>[src/mcp/tools/document.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/document.ts)<br>[src/mcp/tools/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/index.ts)<br>[src/mcp/tools/wiki.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/wiki.ts)<br>[src/mcp/tools/writing.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/writing.ts) |
| retrieval | 15 | [example-index.yml](../../../../sources/opendatalab__MinerU-Document-Explorer/example-index.yml)<br>[WIKI-PROGRESS.md](../../../../sources/opendatalab__MinerU-Document-Explorer/WIKI-PROGRESS.md)<br>[test/wiki-collection-type.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/wiki-collection-type.test.ts)<br>[test/wiki-index.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/wiki-index.test.ts)<br>[test/wiki-lint.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/wiki-lint.test.ts)<br>[test/wiki-log.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/wiki-log.test.ts)<br>[src/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/index.ts)<br>[src/wiki/index-gen.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/wiki/index-gen.ts) |
| spec | 2 | [docs/architecture.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/architecture.md)<br>[assets/qmd-architecture.png](../../../../sources/opendatalab__MinerU-Document-Explorer/assets/qmd-architecture.png) |
| eval | 36 | [test/agent-experience.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/agent-experience.test.ts)<br>[test/cli-ux-improvements.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/cli-ux-improvements.test.ts)<br>[test/cli.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/cli.test.ts)<br>[test/collections-config.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/collections-config.test.ts)<br>[test/concurrency.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/concurrency.test.ts)<br>[test/Containerfile](../../../../sources/opendatalab__MinerU-Document-Explorer/test/Containerfile)<br>[test/docx-pptx-backend.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/docx-pptx-backend.test.ts)<br>[test/eval-bm25.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/eval-bm25.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/CLAUDE.md)<br>[finetune/CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/CLAUDE.md) |
| docs | 13 | [README-zh.md](../../../../sources/opendatalab__MinerU-Document-Explorer/README-zh.md)<br>[README.md](../../../../sources/opendatalab__MinerU-Document-Explorer/README.md)<br>[finetune/README.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/README.md)<br>[finetune/experiments/grpo/README.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/experiments/grpo/README.md)<br>[docs/architecture.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/architecture.md)<br>[docs/cli.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/cli.md)<br>[docs/mcp.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/mcp.md)<br>[docs/quickstart.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/quickstart.md) |
| config | 4 | [package.json](../../../../sources/opendatalab__MinerU-Document-Explorer/package.json)<br>[tsconfig.json](../../../../sources/opendatalab__MinerU-Document-Explorer/tsconfig.json)<br>[finetune/pyproject.toml](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/pyproject.toml)<br>[finetune/uv.lock](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 36 | [test/agent-experience.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/agent-experience.test.ts)<br>[test/cli-ux-improvements.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/cli-ux-improvements.test.ts)<br>[test/cli.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/cli.test.ts)<br>[test/collections-config.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/collections-config.test.ts)<br>[test/concurrency.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/concurrency.test.ts)<br>[test/Containerfile](../../../../sources/opendatalab__MinerU-Document-Explorer/test/Containerfile) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/CLAUDE.md)<br>[finetune/CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/mcp-agent-ux.test.ts`, `test/mcp.test.ts`, `src/mcp/server.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `src/mcp/server.ts`, `bin/qmd`.
3. agent/tool runtime 매핑: `test/agent-experience.test.ts`, `src/mcp/tools/core.ts`, `src/mcp/tools/document.ts`.
4. retrieval/memory/indexing 확인: `example-index.yml`, `WIKI-PROGRESS.md`, `test/wiki-collection-type.test.ts`.
5. test/eval 파일로 동작 검증: `test/agent-experience.test.ts`, `test/cli-ux-improvements.test.ts`, `test/cli.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Agent native knowledge engine with MCP tools for document indexing, wiki organization, fast retrieval and deep reading a. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
