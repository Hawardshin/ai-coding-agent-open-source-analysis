# sungjin9288/design-ai 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Model-agnostic design knowledge base + skill system for AI coding agents (Korean-market-fluent)

## 요약

- 조사 단위: `sources/sungjin9288__design-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 599 files, 72 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=vscode-extension/test/integration/suite/index.ts, tools/extractors/component_index.py, knowledge/COVERAGE.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | sungjin9288/design-ai |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/sungjin9288__design-ai](../../../../sources/sungjin9288__design-ai) |
| 기존 보고서 | [reports/korea-trending/repositories/sungjin9288__design-ai.md](../../../korea-trending/repositories/sungjin9288__design-ai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 599 / 72 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude-plugin, .github, agents, cli, commands, docs, examples, Formula, knowledge, skills, tools, vscode-extension |
| 상위 확장자 | .md: 448, .mjs: 68, .py: 33, .json: 11, .ts: 9, (none): 6, .yml: 5, .sh: 4, .html: 3, .svg: 3, .tsx: 3, .css: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 38 |
| examples/print-business-card-spec.md | examples workspace | 2 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| cli | top-level component | 1 |
| commands | top-level component | 1 |
| examples | top-level component | 1 |
| examples/component-pass-auth.md | examples workspace | 1 |
| examples/print-packaging-spec.md | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| Formula | top-level component | 1 |
| knowledge | top-level component | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |
| vscode-extension | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | node --test cli/lib/*.test.mjs |
| utility | package.json | audit | python3 -B tools/audit/run-all.py |
| utility | package.json | audit:strict | python3 -B tools/audit/run-all.py --strict |
| test | package.json | audit:runner:self-test | python3 -B tools/audit/run-all.py --self-test |
| test | package.json | coverage:self-test | python3 -B tools/audit/check-coverage.py --self-test |
| test | package.json | doctor:assertions:self-test | python3 -B tools/audit/doctor_assertions.py --self-test |
| test | package.json | smoke:assertions:self-test | python3 -B tools/audit/smoke_assertions.py --self-test |
| test | package.json | package:check | python3 -B tools/audit/package-contents.py --self-test && python3 -B tools/audit/package-contents.py |
| test | package.json | package:smoke:self-test | python3 -B tools/audit/package-smoke.py --self-test |
| utility | package.json | package:smoke | python3 -B tools/audit/package-smoke.py --pack |
| utility | package.json | registry:smoke | python3 -B tools/audit/registry-smoke.py |
| test | package.json | registry:smoke:self-test | python3 -B tools/audit/registry-smoke.py --self-test |
| build | package.json | release:metadata | python3 -B tools/audit/release-metadata.py |
| test | package.json | release:metadata:self-test | python3 -B tools/audit/release-metadata.py --self-test |
| test | package.json | ci:local:self-test | python3 -B tools/audit/local-ci.py --self-test |
| test | package.json | tokens:ant-design:self-test | python3 -B tools/extractors/ant_design_tokens.py --self-test |
| test | package.json | release:self-test | npm run audit:runner:self-test && npm run coverage:self-test && npm run doctor:assertions:self-test && npm run smoke:assertions:self-test && npm run package:smoke:self-test && npm run registry:smoke:self-test && npm run |
| test | package.json | release:check | npm test && npm run audit:strict && git diff --check && npm run package:check && npm run release:metadata && npm run release:self-test && npm run package:smoke |
| utility | package.json | ci:local | python3 -B tools/audit/local-ci.py |
| utility | package.json | preview | python3 -B tools/preview/render-tokens.py |
| entrypoint | package.json bin | design-ai.mjs | cli/bin/design-ai.mjs |


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
| retrieval | [vscode-extension/test/integration/suite/index.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/index.ts) | retrieval signal |
| retrieval | [tools/extractors/component_index.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_index.py) | retrieval signal |
| retrieval | [knowledge/COVERAGE.md](../../../../sources/sungjin9288__design-ai/knowledge/COVERAGE.md) | retrieval signal |
| retrieval | [knowledge/PRINCIPLES.md](../../../../sources/sungjin9288__design-ai/knowledge/PRINCIPLES.md) | retrieval signal |
| entrypoints | [cli/bin/design-ai.mjs](../../../../sources/sungjin9288__design-ai/cli/bin/design-ai.mjs) | entrypoints signal |
| docs | [mkdocs.yml](../../../../sources/sungjin9288__design-ai/mkdocs.yml) | docs signal |
| docs | [README.ko.md](../../../../sources/sungjin9288__design-ai/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/sungjin9288__design-ai/README.md) | docs signal |
| docs | [vscode-extension/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/README.md) | docs signal |
| eval | [vscode-extension/test/lib.test.mjs](../../../../sources/sungjin9288__design-ai/vscode-extension/test/lib.test.mjs) | eval signal |
| eval | [vscode-extension/test/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/test/README.md) | eval signal |
| eval | [vscode-extension/test/integration/runTest.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/runTest.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [cli/bin/design-ai.mjs](../../../../sources/sungjin9288__design-ai/cli/bin/design-ai.mjs) |
| agentRuntime | 100 | [AGENTS.ko.md](../../../../sources/sungjin9288__design-ai/AGENTS.ko.md)<br>[AGENTS.md](../../../../sources/sungjin9288__design-ai/AGENTS.md)<br>[tools/build-docs.sh](../../../../sources/sungjin9288__design-ai/tools/build-docs.sh)<br>[tools/clone-refs.sh](../../../../sources/sungjin9288__design-ai/tools/clone-refs.sh)<br>[tools/preview/README.md](../../../../sources/sungjin9288__design-ai/tools/preview/README.md)<br>[tools/preview/render-tokens.py](../../../../sources/sungjin9288__design-ai/tools/preview/render-tokens.py)<br>[tools/migrations/add-version-frontmatter.py](../../../../sources/sungjin9288__design-ai/tools/migrations/add-version-frontmatter.py)<br>[tools/migrations/bump-last-updated.py](../../../../sources/sungjin9288__design-ai/tools/migrations/bump-last-updated.py) |
| mcp | 6 | [docs/MCP-INTEGRATION.md](../../../../sources/sungjin9288__design-ai/docs/MCP-INTEGRATION.md)<br>[docs/integrations/figma-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/figma-mcp.md)<br>[docs/integrations/github-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/github-mcp.md)<br>[docs/integrations/linear-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/linear-mcp.md)<br>[docs/integrations/notion-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/notion-mcp.md)<br>[docs/integrations/slack-mcp.md](../../../../sources/sungjin9288__design-ai/docs/integrations/slack-mcp.md) |
| retrieval | 96 | [vscode-extension/test/integration/suite/index.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/index.ts)<br>[tools/extractors/component_index.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_index.py)<br>[knowledge/COVERAGE.md](../../../../sources/sungjin9288__design-ai/knowledge/COVERAGE.md)<br>[knowledge/PRINCIPLES.md](../../../../sources/sungjin9288__design-ai/knowledge/PRINCIPLES.md)<br>[knowledge/video/in-product-video.md](../../../../sources/sungjin9288__design-ai/knowledge/video/in-product-video.md)<br>[knowledge/video/korean-video-conventions.md](../../../../sources/sungjin9288__design-ai/knowledge/video/korean-video-conventions.md)<br>[knowledge/video/marketing-video.md](../../../../sources/sungjin9288__design-ai/knowledge/video/marketing-video.md)<br>[knowledge/video/social-and-short-form.md](../../../../sources/sungjin9288__design-ai/knowledge/video/social-and-short-form.md) |
| spec | 51 | [tools/extractors/ant_design_tokens.py](../../../../sources/sungjin9288__design-ai/tools/extractors/ant_design_tokens.py)<br>[tools/extractors/awesome_design_mirror.py](../../../../sources/sungjin9288__design-ai/tools/extractors/awesome_design_mirror.py)<br>[tools/extractors/component_spec_conflict_check.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_conflict_check.py)<br>[tools/extractors/component_spec_reconcile.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_reconcile.py)<br>[tools/extractors/component_spec_scaffold_v2.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_scaffold_v2.py)<br>[tools/extractors/component_spec_scaffold.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_scaffold.py)<br>[skills/handoff-spec/PLAYBOOK.md](../../../../sources/sungjin9288__design-ai/skills/handoff-spec/PLAYBOOK.md)<br>[skills/handoff-spec/SKILL.md](../../../../sources/sungjin9288__design-ai/skills/handoff-spec/SKILL.md) |
| eval | 43 | [vscode-extension/test/lib.test.mjs](../../../../sources/sungjin9288__design-ai/vscode-extension/test/lib.test.mjs)<br>[vscode-extension/test/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/test/README.md)<br>[vscode-extension/test/integration/runTest.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/runTest.ts)<br>[vscode-extension/test/integration/tsconfig.json](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/tsconfig.json)<br>[vscode-extension/test/integration/suite/extension.test.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/extension.test.ts)<br>[vscode-extension/test/integration/suite/index.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/index.ts)<br>[tools/extractors/component_spec_conflict_check.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_conflict_check.py)<br>[tools/extractors/component_spec_reconcile.py](../../../../sources/sungjin9288__design-ai/tools/extractors/component_spec_reconcile.py) |
| security | 25 | [tools/audit/changelog-generate.py](../../../../sources/sungjin9288__design-ai/tools/audit/changelog-generate.py)<br>[tools/audit/check-coverage.py](../../../../sources/sungjin9288__design-ai/tools/audit/check-coverage.py)<br>[tools/audit/doctor_assertions.py](../../../../sources/sungjin9288__design-ai/tools/audit/doctor_assertions.py)<br>[tools/audit/example-qa.py](../../../../sources/sungjin9288__design-ai/tools/audit/example-qa.py)<br>[tools/audit/frontmatter-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/frontmatter-check.py)<br>[tools/audit/integration-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/integration-check.py)<br>[tools/audit/korean-copy-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/korean-copy-check.py)<br>[tools/audit/link-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/link-check.py) |
| ci | 4 | [.github/workflows/audit.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/audit.yml)<br>[.github/workflows/docs.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/sungjin9288__design-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sungjin9288__design-ai/CLAUDE.md) |
| docs | 74 | [mkdocs.yml](../../../../sources/sungjin9288__design-ai/mkdocs.yml)<br>[README.ko.md](../../../../sources/sungjin9288__design-ai/README.ko.md)<br>[README.md](../../../../sources/sungjin9288__design-ai/README.md)<br>[vscode-extension/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/README.md)<br>[vscode-extension/test/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/test/README.md)<br>[tools/preview/README.md](../../../../sources/sungjin9288__design-ai/tools/preview/README.md)<br>[tools/figma-plugin/README.md](../../../../sources/sungjin9288__design-ai/tools/figma-plugin/README.md)<br>[skills/README.md](../../../../sources/sungjin9288__design-ai/skills/README.md) |
| config | 6 | [package.json](../../../../sources/sungjin9288__design-ai/package.json)<br>[vscode-extension/package.json](../../../../sources/sungjin9288__design-ai/vscode-extension/package.json)<br>[vscode-extension/tsconfig.json](../../../../sources/sungjin9288__design-ai/vscode-extension/tsconfig.json)<br>[vscode-extension/test/integration/tsconfig.json](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/tsconfig.json)<br>[tools/extractors/ts-ast/package.json](../../../../sources/sungjin9288__design-ai/tools/extractors/ts-ast/package.json)<br>[docs/requirements.txt](../../../../sources/sungjin9288__design-ai/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 43 | [vscode-extension/test/lib.test.mjs](../../../../sources/sungjin9288__design-ai/vscode-extension/test/lib.test.mjs)<br>[vscode-extension/test/README.md](../../../../sources/sungjin9288__design-ai/vscode-extension/test/README.md)<br>[vscode-extension/test/integration/runTest.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/runTest.ts)<br>[vscode-extension/test/integration/tsconfig.json](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/tsconfig.json)<br>[vscode-extension/test/integration/suite/extension.test.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/extension.test.ts)<br>[vscode-extension/test/integration/suite/index.ts](../../../../sources/sungjin9288__design-ai/vscode-extension/test/integration/suite/index.ts) |
| CI workflow | 4 | [.github/workflows/audit.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/audit.yml)<br>[.github/workflows/docs.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/sungjin9288__design-ai/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 25 | [tools/audit/changelog-generate.py](../../../../sources/sungjin9288__design-ai/tools/audit/changelog-generate.py)<br>[tools/audit/check-coverage.py](../../../../sources/sungjin9288__design-ai/tools/audit/check-coverage.py)<br>[tools/audit/doctor_assertions.py](../../../../sources/sungjin9288__design-ai/tools/audit/doctor_assertions.py)<br>[tools/audit/example-qa.py](../../../../sources/sungjin9288__design-ai/tools/audit/example-qa.py)<br>[tools/audit/frontmatter-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/frontmatter-check.py)<br>[tools/audit/integration-check.py](../../../../sources/sungjin9288__design-ai/tools/audit/integration-check.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/sungjin9288__design-ai/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sungjin9288__design-ai/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `vscode-extension/test/integration/suite/index.ts`, `tools/extractors/component_index.py`, `knowledge/COVERAGE.md`.
2. entrypoint를 따라 실행 흐름 확인: `cli/bin/design-ai.mjs`.
3. agent/tool runtime 매핑: `AGENTS.ko.md`, `AGENTS.md`, `tools/build-docs.sh`.
4. retrieval/memory/indexing 확인: `vscode-extension/test/integration/suite/index.ts`, `tools/extractors/component_index.py`, `knowledge/COVERAGE.md`.
5. test/eval 파일로 동작 검증: `vscode-extension/test/lib.test.mjs`, `vscode-extension/test/README.md`, `vscode-extension/test/integration/runTest.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Model agnostic design knowledge base + skill system for AI coding agents Korean market fluent. 핵심 구조 신호는 Python, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
