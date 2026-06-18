# gotalab/cc-sdd 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 536 files, 285 directories.

## 요약

- 조사 단위: `sources/gotalab__cc-sdd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 536 files, 285 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tools/cc-sdd/.gitignore, tools/cc-sdd/package-lock.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | gotalab/cc-sdd |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 3484 |
| Forks | 258 |
| License | MIT License |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/gotalab__cc-sdd](../../../../sources/gotalab__cc-sdd) |
| 기존 보고서 | [reports/clone-structures/gotalab__cc-sdd.md](../../../clone-structures/gotalab__cc-sdd.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 536 / 285 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .github, .kiro, assets, docs, tools |
| 상위 확장자 | .md: 385, .ts: 67, .yaml: 36, .json: 27, .toml: 12, .yml: 4, (none): 3, .mjs: 1, .png: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 19 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| tools | top-level component | 1 |


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
| agentRuntime | [AGENTS.md](../../../../sources/gotalab__cc-sdd/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/cc-sdd/.gitignore](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/.gitignore) | agentRuntime signal |
| agentRuntime | [tools/cc-sdd/package-lock.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package-lock.json) | agentRuntime signal |
| agentRuntime | [tools/cc-sdd/package.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package.json) | agentRuntime signal |
| entrypoints | [tools/cc-sdd/src/cli.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/cli.ts) | entrypoints signal |
| entrypoints | [tools/cc-sdd/src/index.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/gotalab__cc-sdd/CLAUDE.md) | instruction signal |
| instruction | [tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md) | instruction signal |
| instruction | [tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md) | instruction signal |
| config | [tools/cc-sdd/tsconfig.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/tsconfig.json) | config signal |
| ci | [.github/workflows/claude-dispatch.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude-dispatch.yml) | ci support |
| ci | [.github/workflows/claude.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [tools/cc-sdd/src/cli.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/cli.ts)<br>[tools/cc-sdd/src/index.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/index.ts) |
| agentRuntime | 462 | [AGENTS.md](../../../../sources/gotalab__cc-sdd/AGENTS.md)<br>[tools/cc-sdd/.gitignore](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/.gitignore)<br>[tools/cc-sdd/package-lock.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package-lock.json)<br>[tools/cc-sdd/package.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package.json)<br>[tools/cc-sdd/README_ja.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README_ja.md)<br>[tools/cc-sdd/README_zh-TW.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README_zh-TW.md)<br>[tools/cc-sdd/README.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README.md)<br>[tools/cc-sdd/tsconfig.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/tsconfig.json) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 11 | [tools/cc-sdd/src/index.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/src/index.ts)<br>[.kiro/specs/customer-support-rag-backend-ja/design.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/design.md)<br>[.kiro/specs/customer-support-rag-backend-ja/requirements.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/requirements.md)<br>[.kiro/specs/customer-support-rag-backend-ja/research.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/research.md)<br>[.kiro/specs/customer-support-rag-backend-ja/spec.json](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/spec.json)<br>[.kiro/specs/customer-support-rag-backend-ja/tasks.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-ja/tasks.md)<br>[.kiro/specs/customer-support-rag-backend-en/design.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-en/design.md)<br>[.kiro/specs/customer-support-rag-backend-en/requirements.md](../../../../sources/gotalab__cc-sdd/.kiro/specs/customer-support-rag-backend-en/requirements.md) |
| spec | 184 | [tools/cc-sdd/templates/shared/settings/templates/specs/design.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/specs/design.md)<br>[tools/cc-sdd/templates/shared/settings/templates/specs/requirements-init.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/specs/requirements-init.md)<br>[tools/cc-sdd/templates/shared/settings/templates/specs/requirements.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/specs/requirements.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-discovery-full.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-discovery-full.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-discovery-light.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-discovery-light.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-principles.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-principles.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-review-gate.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-review-gate.md)<br>[tools/cc-sdd/templates/shared/settings/rules/design-review.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/rules/design-review.md) |
| eval | 174 | [tools/cc-sdd/test/agentLayout.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/agentLayout.test.ts)<br>[tools/cc-sdd/test/args.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/args.test.ts)<br>[tools/cc-sdd/test/cliApplyManifest.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliApplyManifest.test.ts)<br>[tools/cc-sdd/test/cliDryRunManifest.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliDryRunManifest.test.ts)<br>[tools/cc-sdd/test/cliEntry.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliEntry.test.ts)<br>[tools/cc-sdd/test/cliEntryEdgeCases.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliEntryEdgeCases.test.ts)<br>[tools/cc-sdd/test/configMerge.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/configMerge.test.ts)<br>[tools/cc-sdd/test/configStore.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/configStore.test.ts) |
| security | 2 | [tools/cc-sdd/templates/shared/settings/templates/steering-custom/security.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/steering-custom/security.md)<br>[.kiro/settings/templates/steering-custom/security.md](../../../../sources/gotalab__cc-sdd/.kiro/settings/templates/steering-custom/security.md) |
| ci | 4 | [.github/workflows/claude-dispatch.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude-dispatch.yml)<br>[.github/workflows/claude.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude.yml)<br>[.github/workflows/publish.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/publish.yml)<br>[.github/workflows/stale.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/stale.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 19 | [AGENTS.md](../../../../sources/gotalab__cc-sdd/AGENTS.md)<br>[CLAUDE.md](../../../../sources/gotalab__cc-sdd/CLAUDE.md)<br>[tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/github-copilot-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/github-copilot-skills/docs/AGENTS.md) |
| docs | 42 | [README.md](../../../../sources/gotalab__cc-sdd/README.md)<br>[tools/cc-sdd/README_ja.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README_ja.md)<br>[tools/cc-sdd/README_zh-TW.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README_zh-TW.md)<br>[tools/cc-sdd/README.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/README.md)<br>[tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/qwen-code/docs/QWEN.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/qwen-code/docs/QWEN.md)<br>[tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md) |
| config | 2 | [tools/cc-sdd/package.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/package.json)<br>[tools/cc-sdd/tsconfig.json](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 174 | [tools/cc-sdd/test/agentLayout.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/agentLayout.test.ts)<br>[tools/cc-sdd/test/args.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/args.test.ts)<br>[tools/cc-sdd/test/cliApplyManifest.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliApplyManifest.test.ts)<br>[tools/cc-sdd/test/cliDryRunManifest.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliDryRunManifest.test.ts)<br>[tools/cc-sdd/test/cliEntry.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliEntry.test.ts)<br>[tools/cc-sdd/test/cliEntryEdgeCases.test.ts](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/test/cliEntryEdgeCases.test.ts) |
| CI workflow | 4 | [.github/workflows/claude-dispatch.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude-dispatch.yml)<br>[.github/workflows/claude.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/claude.yml)<br>[.github/workflows/publish.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/publish.yml)<br>[.github/workflows/stale.yml](../../../../sources/gotalab__cc-sdd/.github/workflows/stale.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [tools/cc-sdd/templates/shared/settings/templates/steering-custom/security.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/shared/settings/templates/steering-custom/security.md)<br>[.kiro/settings/templates/steering-custom/security.md](../../../../sources/gotalab__cc-sdd/.kiro/settings/templates/steering-custom/security.md) |
| 에이전트 지시문 | 19 | [AGENTS.md](../../../../sources/gotalab__cc-sdd/AGENTS.md)<br>[CLAUDE.md](../../../../sources/gotalab__cc-sdd/CLAUDE.md)<br>[tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/windsurf/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-skills/docs/AGENTS.md)<br>[tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md](../../../../sources/gotalab__cc-sdd/tools/cc-sdd/templates/agents/opencode-agent/docs/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `tools/cc-sdd/.gitignore`, `tools/cc-sdd/package-lock.json`.
2. entrypoint를 따라 실행 흐름 확인: `tools/cc-sdd/src/cli.ts`, `tools/cc-sdd/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/cc-sdd/.gitignore`, `tools/cc-sdd/package-lock.json`.
4. retrieval/memory/indexing 확인: `tools/cc-sdd/src/index.ts`, `.kiro/specs/customer-support-rag-backend-ja/design.md`, `.kiro/specs/customer-support-rag-backend-ja/requirements.md`.
5. test/eval 파일로 동작 검증: `tools/cc-sdd/test/agentLayout.test.ts`, `tools/cc-sdd/test/args.test.ts`, `tools/cc-sdd/test/cliApplyManifest.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 536 files, 285 directories.. 핵심 구조 신호는 TypeScript, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
