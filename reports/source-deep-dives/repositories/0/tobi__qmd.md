# tobi/qmd 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local

## 요약

- 조사 단위: `sources/tobi__qmd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 154 files, 32 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=example-index.yml, src/index.ts, finetune/eval_retrieval.py이고, 의존성 단서는 modelcontextprotocol, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tobi/qmd |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 26713 |
| Forks | 1673 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tobi__qmd](../../../../sources/tobi__qmd) |
| 기존 보고서 | [reports/llm-wiki/repositories/tobi__qmd.md](../../../llm-wiki/repositories/tobi__qmd.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 154 / 32 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude-plugin, .github, .pi, assets, bin, docs, finetune, scripts, skills, src, test |
| 상위 확장자 | .ts: 46, .py: 25, .md: 17, .jsonl: 15, (none): 10, .json: 9, .yaml: 7, .sh: 6, .mjs: 5, .yml: 4, .lock: 3, .txt: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 8 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| finetune | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | [ -d .git ] && ./scripts/install-hooks.sh \|\| true |
| build | package.json | build | node scripts/build.mjs |
| test | package.json | test | node scripts/test-all.mjs |
| test | package.json | test:types | node ./node_modules/typescript/bin/tsc -p tsconfig.build.json --noEmit |
| test | package.json | test:node | node ./node_modules/vitest/vitest.mjs run --reporter=verbose --testTimeout 60000 |
| test | package.json | test:bun | bun test --timeout 60000 --preload ./src/test-preload.ts |
| test | package.json | test:unit | CI=true node ./node_modules/vitest/vitest.mjs run --reporter=verbose --testTimeout 60000 test/ && CI=true bun test --timeout 60000 --preload ./src/test-preload.ts test/ |
| test | package.json | test:package | node scripts/package-smoke.mjs |
| utility | package.json | qmd | tsx src/cli/qmd.ts |
| utility | package.json | index | tsx src/cli/qmd.ts index |
| utility | package.json | vector | tsx src/cli/qmd.ts vector |
| utility | package.json | search | tsx src/cli/qmd.ts search |
| utility | package.json | vsearch | tsx src/cli/qmd.ts vsearch |
| utility | package.json | rerank | tsx src/cli/qmd.ts rerank |
| test | package.json | inspector | npx @modelcontextprotocol/inspector tsx src/cli/qmd.ts mcp |
| build | package.json | release | ./scripts/release.sh |
| quality | package.json | smoke:package-grammars | node scripts/check-package-grammars.mjs |
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
| retrieval | [example-index.yml](../../../../sources/tobi__qmd/example-index.yml) | retrieval signal |
| retrieval | [src/index.ts](../../../../sources/tobi__qmd/src/index.ts) | retrieval signal |
| retrieval | [finetune/eval_retrieval.py](../../../../sources/tobi__qmd/finetune/eval_retrieval.py) | retrieval signal |
| entrypoints | [src/mcp/server.ts](../../../../sources/tobi__qmd/src/mcp/server.ts) | entrypoints signal |
| entrypoints | [bin/qmd](../../../../sources/tobi__qmd/bin/qmd) | entrypoints signal |
| docs | [README.md](../../../../sources/tobi__qmd/README.md) | docs signal |
| docs | [finetune/README.md](../../../../sources/tobi__qmd/finetune/README.md) | docs signal |
| docs | [finetune/experiments/grpo/README.md](../../../../sources/tobi__qmd/finetune/experiments/grpo/README.md) | docs signal |
| docs | [docs/SYNTAX.md](../../../../sources/tobi__qmd/docs/SYNTAX.md) | docs signal |
| eval | [test/ast-chunking.test.ts](../../../../sources/tobi__qmd/test/ast-chunking.test.ts) | eval signal |
| eval | [test/ast.test.ts](../../../../sources/tobi__qmd/test/ast.test.ts) | eval signal |
| eval | [test/bench-score.test.ts](../../../../sources/tobi__qmd/test/bench-score.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/index.ts](../../../../sources/tobi__qmd/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/tobi__qmd/src/mcp/server.ts)<br>[bin/qmd](../../../../sources/tobi__qmd/bin/qmd) |
| agentRuntime | 4 | [skills/release/SKILL.md](../../../../sources/tobi__qmd/skills/release/SKILL.md)<br>[skills/release/scripts/install-hooks.sh](../../../../sources/tobi__qmd/skills/release/scripts/install-hooks.sh)<br>[skills/qmd/SKILL.md](../../../../sources/tobi__qmd/skills/qmd/SKILL.md)<br>[skills/qmd/references/mcp-setup.md](../../../../sources/tobi__qmd/skills/qmd/references/mcp-setup.md) |
| mcp | 3 | [test/mcp.test.ts](../../../../sources/tobi__qmd/test/mcp.test.ts)<br>[src/mcp/server.ts](../../../../sources/tobi__qmd/src/mcp/server.ts)<br>[skills/qmd/references/mcp-setup.md](../../../../sources/tobi__qmd/skills/qmd/references/mcp-setup.md) |
| retrieval | 3 | [example-index.yml](../../../../sources/tobi__qmd/example-index.yml)<br>[src/index.ts](../../../../sources/tobi__qmd/src/index.ts)<br>[finetune/eval_retrieval.py](../../../../sources/tobi__qmd/finetune/eval_retrieval.py) |
| spec | 2 | [test/eval-docs/api-design-principles.md](../../../../sources/tobi__qmd/test/eval-docs/api-design-principles.md)<br>[assets/qmd-architecture.png](../../../../sources/tobi__qmd/assets/qmd-architecture.png) |
| eval | 49 | [test/ast-chunking.test.ts](../../../../sources/tobi__qmd/test/ast-chunking.test.ts)<br>[test/ast.test.ts](../../../../sources/tobi__qmd/test/ast.test.ts)<br>[test/bench-score.test.ts](../../../../sources/tobi__qmd/test/bench-score.test.ts)<br>[test/bin-wrapper.test.ts](../../../../sources/tobi__qmd/test/bin-wrapper.test.ts)<br>[test/cli-exit-lifecycle.test.ts](../../../../sources/tobi__qmd/test/cli-exit-lifecycle.test.ts)<br>[test/cli-lazy-llm-import.test.ts](../../../../sources/tobi__qmd/test/cli-lazy-llm-import.test.ts)<br>[test/cli.test.ts](../../../../sources/tobi__qmd/test/cli.test.ts)<br>[test/collections-config.test.ts](../../../../sources/tobi__qmd/test/collections-config.test.ts) |
| security | 1 | [test/eval-docs/remote-work-policy.md](../../../../sources/tobi__qmd/test/eval-docs/remote-work-policy.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/tobi__qmd/.github/workflows/ci.yml)<br>[.github/workflows/nix.yml](../../../../sources/tobi__qmd/.github/workflows/nix.yml)<br>[.github/workflows/publish.yml](../../../../sources/tobi__qmd/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [CLAUDE.md](../../../../sources/tobi__qmd/CLAUDE.md)<br>[finetune/CLAUDE.md](../../../../sources/tobi__qmd/finetune/CLAUDE.md) |
| docs | 4 | [README.md](../../../../sources/tobi__qmd/README.md)<br>[finetune/README.md](../../../../sources/tobi__qmd/finetune/README.md)<br>[finetune/experiments/grpo/README.md](../../../../sources/tobi__qmd/finetune/experiments/grpo/README.md)<br>[docs/SYNTAX.md](../../../../sources/tobi__qmd/docs/SYNTAX.md) |
| config | 4 | [package.json](../../../../sources/tobi__qmd/package.json)<br>[tsconfig.json](../../../../sources/tobi__qmd/tsconfig.json)<br>[finetune/pyproject.toml](../../../../sources/tobi__qmd/finetune/pyproject.toml)<br>[finetune/uv.lock](../../../../sources/tobi__qmd/finetune/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 49 | [test/ast-chunking.test.ts](../../../../sources/tobi__qmd/test/ast-chunking.test.ts)<br>[test/ast.test.ts](../../../../sources/tobi__qmd/test/ast.test.ts)<br>[test/bench-score.test.ts](../../../../sources/tobi__qmd/test/bench-score.test.ts)<br>[test/bin-wrapper.test.ts](../../../../sources/tobi__qmd/test/bin-wrapper.test.ts)<br>[test/cli-exit-lifecycle.test.ts](../../../../sources/tobi__qmd/test/cli-exit-lifecycle.test.ts)<br>[test/cli-lazy-llm-import.test.ts](../../../../sources/tobi__qmd/test/cli-lazy-llm-import.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/tobi__qmd/.github/workflows/ci.yml)<br>[.github/workflows/nix.yml](../../../../sources/tobi__qmd/.github/workflows/nix.yml)<br>[.github/workflows/publish.yml](../../../../sources/tobi__qmd/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [test/eval-docs/remote-work-policy.md](../../../../sources/tobi__qmd/test/eval-docs/remote-work-policy.md) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/tobi__qmd/CLAUDE.md)<br>[finetune/CLAUDE.md](../../../../sources/tobi__qmd/finetune/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `example-index.yml`, `src/index.ts`, `finetune/eval_retrieval.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `src/mcp/server.ts`, `bin/qmd`.
3. agent/tool runtime 매핑: `skills/release/SKILL.md`, `skills/release/scripts/install-hooks.sh`, `skills/qmd/SKILL.md`.
4. retrieval/memory/indexing 확인: `example-index.yml`, `src/index.ts`, `finetune/eval_retrieval.py`.
5. test/eval 파일로 동작 검증: `test/ast-chunking.test.ts`, `test/ast.test.ts`, `test/bench-score.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while b. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
