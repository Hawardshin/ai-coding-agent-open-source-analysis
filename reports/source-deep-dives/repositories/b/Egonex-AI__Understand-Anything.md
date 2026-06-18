# Egonex-AI/Understand-Anything 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.

## 요약

- 조사 단위: `sources/Egonex-AI__Understand-Anything` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 417 files, 69 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=understand-anything-plugin/src/index.ts, understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py, understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Egonex-AI/Understand-Anything |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 62771 |
| Forks | 5173 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Egonex-AI__Understand-Anything](../../../../sources/Egonex-AI__Understand-Anything) |
| 기존 보고서 | [reports/global-trending/repositories/Egonex-AI__Understand-Anything.md](../../../global-trending/repositories/Egonex-AI__Understand-Anything.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 417 / 69 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .claude-plugin, .copilot-plugin, .cursor-plugin, .github, assets, docs, homepage, READMEs, scripts, tests, understand-anything-plugin |
| 상위 확장자 | .ts: 183, .md: 106, .tsx: 36, .json: 24, .mjs: 16, .astro: 10, .py: 6, .yml: 6, (none): 6, .woff2: 4, .yaml: 4, .png: 3 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 52 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| homepage | top-level component | 1 |
| READMEs | top-level component | 1 |
| scripts | top-level component | 1 |
| tests | validation surface | 1 |
| understand-anything-plugin | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | prepare | pnpm --filter @understand-anything/core build |
| build | package.json | build | pnpm -r build |
| test | package.json | test | vitest run |
| serve-dev | package.json | dev:dashboard | pnpm --filter @understand-anything/dashboard dev |
| quality | package.json | lint | eslint . |


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
| retrieval | [understand-anything-plugin/src/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/index.ts) | retrieval signal |
| retrieval | [understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py) | retrieval signal |
| retrieval | [understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py) | retrieval signal |
| retrieval | [understand-anything-plugin/skills/understand-knowledge/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/SKILL.md) | retrieval signal |
| entrypoints | [understand-anything-plugin/packages/dashboard/src/App.tsx](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/App.tsx) | entrypoints signal |
| entrypoints | [understand-anything-plugin/packages/dashboard/src/index.css](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/index.css) | entrypoints signal |
| entrypoints | [understand-anything-plugin/packages/dashboard/src/main.tsx](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/main.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/Egonex-AI__Understand-Anything/README.md) | docs signal |
| docs | [READMEs/README.es-ES.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.es-ES.md) | docs signal |
| docs | [READMEs/README.ja-JP.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ja-JP.md) | docs signal |
| docs | [READMEs/README.ko-KR.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ko-KR.md) | docs signal |
| eval | [understand-anything-plugin/src/__tests__/context-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/context-builder.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [understand-anything-plugin/src/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/index.ts)<br>[understand-anything-plugin/packages/dashboard/src/App.tsx](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/App.tsx)<br>[understand-anything-plugin/packages/dashboard/src/index.css](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/index.css)<br>[understand-anything-plugin/packages/dashboard/src/main.tsx](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/main.tsx)<br>[understand-anything-plugin/packages/core/src/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/index.ts) |
| agentRuntime | 81 | [understand-anything-plugin/src/context-builder.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/context-builder.ts)<br>[understand-anything-plugin/src/__tests__/context-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/context-builder.test.ts)<br>[understand-anything-plugin/skills/understand-onboard/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-onboard/SKILL.md)<br>[understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py)<br>[understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py)<br>[understand-anything-plugin/skills/understand-knowledge/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/SKILL.md)<br>[understand-anything-plugin/skills/understand-explain/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-explain/SKILL.md)<br>[understand-anything-plugin/skills/understand-domain/extract-domain-context.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-domain/extract-domain-context.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 32 | [understand-anything-plugin/src/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/index.ts)<br>[understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py)<br>[understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py)<br>[understand-anything-plugin/skills/understand-knowledge/SKILL.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand-knowledge/SKILL.md)<br>[understand-anything-plugin/packages/dashboard/index.html](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/index.html)<br>[understand-anything-plugin/packages/dashboard/src/index.css](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/index.css)<br>[understand-anything-plugin/packages/dashboard/src/themes/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/themes/index.ts)<br>[understand-anything-plugin/packages/dashboard/src/locales/index.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/locales/index.ts) |
| spec | 15 | [understand-anything-plugin/agents/architecture-analyzer.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/agents/architecture-analyzer.md)<br>[docs/superpowers/specs/2026-03-14-understand-anything-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-14-understand-anything-design.md)<br>[docs/superpowers/specs/2026-03-15-homepage-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-15-homepage-design.md)<br>[docs/superpowers/specs/2026-03-18-multi-platform-simple-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-18-multi-platform-simple-design.md)<br>[docs/superpowers/specs/2026-03-21-language-agnostic-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-21-language-agnostic-design.md)<br>[docs/superpowers/specs/2026-03-26-theme-system-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-26-theme-system-design.md)<br>[docs/superpowers/specs/2026-03-27-token-reduction-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-27-token-reduction-design.md)<br>[docs/superpowers/specs/2026-03-28-understand-anything-extension-design.md](../../../../sources/Egonex-AI__Understand-Anything/docs/superpowers/specs/2026-03-28-understand-anything-extension-design.md) |
| eval | 59 | [understand-anything-plugin/src/__tests__/context-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/context-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/diff-analyzer.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/diff-analyzer.test.ts)<br>[understand-anything-plugin/src/__tests__/explain-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/explain-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/extract-structure.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/extract-structure.test.mjs)<br>[understand-anything-plugin/src/__tests__/merge-recover-imports.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/merge-recover-imports.test.mjs)<br>[understand-anything-plugin/src/__tests__/onboard-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/onboard-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/worktree-redirect.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/worktree-redirect.test.mjs)<br>[understand-anything-plugin/packages/dashboard/src/utils/__tests__/containers.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/src/utils/__tests__/containers.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/Egonex-AI__Understand-Anything/SECURITY.md) |
| ci | 3 | [understand-anything-plugin/packages/core/src/languages/configs/jenkinsfile.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/jenkinsfile.ts)<br>[.github/workflows/ci.yml](../../../../sources/Egonex-AI__Understand-Anything/.github/workflows/ci.yml)<br>[.github/workflows/deploy-homepage.yml](../../../../sources/Egonex-AI__Understand-Anything/.github/workflows/deploy-homepage.yml) |
| container | 4 | [understand-anything-plugin/skills/understand/languages/dockerfile.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand/languages/dockerfile.md)<br>[understand-anything-plugin/packages/core/src/plugins/parsers/dockerfile-parser.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/plugins/parsers/dockerfile-parser.ts)<br>[understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts)<br>[understand-anything-plugin/packages/core/src/languages/configs/dockerfile.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/dockerfile.ts) |
| instruction | 1 | [CLAUDE.md](../../../../sources/Egonex-AI__Understand-Anything/CLAUDE.md) |
| docs | 43 | [README.md](../../../../sources/Egonex-AI__Understand-Anything/README.md)<br>[READMEs/README.es-ES.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.es-ES.md)<br>[READMEs/README.ja-JP.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ja-JP.md)<br>[READMEs/README.ko-KR.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ko-KR.md)<br>[READMEs/README.ru-RU.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.ru-RU.md)<br>[READMEs/README.tr-TR.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.tr-TR.md)<br>[READMEs/README.zh-CN.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.zh-CN.md)<br>[READMEs/README.zh-TW.md](../../../../sources/Egonex-AI__Understand-Anything/READMEs/README.zh-TW.md) |
| config | 13 | [package.json](../../../../sources/Egonex-AI__Understand-Anything/package.json)<br>[pnpm-workspace.yaml](../../../../sources/Egonex-AI__Understand-Anything/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/Egonex-AI__Understand-Anything/tsconfig.json)<br>[understand-anything-plugin/package.json](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/package.json)<br>[understand-anything-plugin/pnpm-workspace.yaml](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/pnpm-workspace.yaml)<br>[understand-anything-plugin/tsconfig.json](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/tsconfig.json)<br>[understand-anything-plugin/packages/tree-sitter-dart-wasm/package.json](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/tree-sitter-dart-wasm/package.json)<br>[understand-anything-plugin/packages/dashboard/package.json](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/dashboard/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 59 | [understand-anything-plugin/src/__tests__/context-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/context-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/diff-analyzer.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/diff-analyzer.test.ts)<br>[understand-anything-plugin/src/__tests__/explain-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/explain-builder.test.ts)<br>[understand-anything-plugin/src/__tests__/extract-structure.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/extract-structure.test.mjs)<br>[understand-anything-plugin/src/__tests__/merge-recover-imports.test.mjs](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/merge-recover-imports.test.mjs)<br>[understand-anything-plugin/src/__tests__/onboard-builder.test.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/src/__tests__/onboard-builder.test.ts) |
| CI workflow | 3 | [understand-anything-plugin/packages/core/src/languages/configs/jenkinsfile.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/jenkinsfile.ts)<br>[.github/workflows/ci.yml](../../../../sources/Egonex-AI__Understand-Anything/.github/workflows/ci.yml)<br>[.github/workflows/deploy-homepage.yml](../../../../sources/Egonex-AI__Understand-Anything/.github/workflows/deploy-homepage.yml) |
| 컨테이너/배포 | 4 | [understand-anything-plugin/skills/understand/languages/dockerfile.md](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/skills/understand/languages/dockerfile.md)<br>[understand-anything-plugin/packages/core/src/plugins/parsers/dockerfile-parser.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/plugins/parsers/dockerfile-parser.ts)<br>[understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts)<br>[understand-anything-plugin/packages/core/src/languages/configs/dockerfile.ts](../../../../sources/Egonex-AI__Understand-Anything/understand-anything-plugin/packages/core/src/languages/configs/dockerfile.ts) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/Egonex-AI__Understand-Anything/SECURITY.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/Egonex-AI__Understand-Anything/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `understand-anything-plugin/src/index.ts`, `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`, `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`.
2. entrypoint를 따라 실행 흐름 확인: `understand-anything-plugin/src/index.ts`, `understand-anything-plugin/packages/dashboard/src/App.tsx`, `understand-anything-plugin/packages/dashboard/src/index.css`.
3. agent/tool runtime 매핑: `understand-anything-plugin/src/context-builder.ts`, `understand-anything-plugin/src/__tests__/context-builder.test.ts`, `understand-anything-plugin/skills/understand-onboard/SKILL.md`.
4. retrieval/memory/indexing 확인: `understand-anything-plugin/src/index.ts`, `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`, `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`.
5. test/eval 파일로 동작 검증: `understand-anything-plugin/src/__tests__/context-builder.test.ts`, `understand-anything-plugin/src/__tests__/diff-analyzer.test.ts`, `understand-anything-plugin/src/__tests__/explain-builder.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Graphs that teach graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and as. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
