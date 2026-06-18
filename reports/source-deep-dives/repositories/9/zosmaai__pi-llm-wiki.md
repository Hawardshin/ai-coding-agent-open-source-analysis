# zosmaai/pi-llm-wiki 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Self-maintaining, Obsidian-compatible knowledge base for pi — turn raw sources into an interlinked wiki that compounds over time. Follows Karpathy's LLM Wiki pattern.

## 요약

- 조사 단위: `sources/zosmaai__pi-llm-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 110 files, 18 directories, depth score 92, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/ingest-tool.test.ts, test/ingest-worker.test.ts, test/personal-wiki-paths.test.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | zosmaai/pi-llm-wiki |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 154 |
| Forks | 12 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zosmaai__pi-llm-wiki](../../../../sources/zosmaai__pi-llm-wiki) |
| 기존 보고서 | [reports/llm-wiki/repositories/zosmaai__pi-llm-wiki.md](../../../llm-wiki/repositories/zosmaai__pi-llm-wiki.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 110 / 18 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, docs, extensions, mcp, plans, prompts, scripts, skills, test |
| 상위 확장자 | .ts: 47, .md: 43, .yml: 5, .json: 4, .png: 3, .js: 2, .mmd: 2, .yaml: 2, (none): 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| extensions | top-level component | 1 |
| mcp | top-level component | 1 |
| plans | top-level component | 1 |
| prompts | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | biome check . |
| quality | package.json | lint:fix | biome check --apply . |
| build | package.json | release:patch | node scripts/release.js patch |
| build | package.json | release:minor | node scripts/release.js minor |
| build | package.json | release:major | node scripts/release.js major |
| build | package.json | release:push | git push origin main --tags |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| retrieval | [test/ingest-tool.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/ingest-tool.test.ts) | retrieval signal |
| retrieval | [test/ingest-worker.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/ingest-worker.test.ts) | retrieval signal |
| retrieval | [test/personal-wiki-paths.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/personal-wiki-paths.test.ts) | retrieval signal |
| retrieval | [test/wiki-structure.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/wiki-structure.test.ts) | retrieval signal |
| docs | [README.de.md](../../../../sources/zosmaai__pi-llm-wiki/README.de.md) | docs signal |
| docs | [README.es.md](../../../../sources/zosmaai__pi-llm-wiki/README.es.md) | docs signal |
| docs | [README.fr.md](../../../../sources/zosmaai__pi-llm-wiki/README.fr.md) | docs signal |
| docs | [README.hi.md](../../../../sources/zosmaai__pi-llm-wiki/README.hi.md) | docs signal |
| eval | [test/background-tools.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/background-tools.test.ts) | eval signal |
| eval | [test/e2e-binary-detection.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-binary-detection.test.ts) | eval signal |
| eval | [test/e2e-docx.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-docx.test.ts) | eval signal |
| eval | [test/e2e-guardrails.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-guardrails.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 12 | [AGENTS.md](../../../../sources/zosmaai__pi-llm-wiki/AGENTS.md)<br>[skills/llm-wiki/SKILL.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/SKILL.md)<br>[skills/llm-wiki/templates/config.yaml](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/config.yaml)<br>[skills/llm-wiki/templates/DASHBOARD.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/DASHBOARD.md)<br>[skills/llm-wiki/templates/INDEX.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/INDEX.md)<br>[skills/llm-wiki/templates/LOG.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/LOG.md)<br>[skills/llm-wiki/templates/pages/analysis.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/pages/analysis.md)<br>[skills/llm-wiki/templates/pages/concept.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/pages/concept.md) |
| mcp | 1 | [mcp/index.ts](../../../../sources/zosmaai__pi-llm-wiki/mcp/index.ts) |
| retrieval | 52 | [test/ingest-tool.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/ingest-tool.test.ts)<br>[test/ingest-worker.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/ingest-worker.test.ts)<br>[test/personal-wiki-paths.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/personal-wiki-paths.test.ts)<br>[test/wiki-structure.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/wiki-structure.test.ts)<br>[test/wiki-watch.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/wiki-watch.test.ts)<br>[skills/llm-wiki/SKILL.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/SKILL.md)<br>[skills/llm-wiki/templates/config.yaml](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/config.yaml)<br>[skills/llm-wiki/templates/DASHBOARD.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/DASHBOARD.md) |
| spec | 3 | [docs/architecture.md](../../../../sources/zosmaai__pi-llm-wiki/docs/architecture.md)<br>[assets/architecture.md](../../../../sources/zosmaai__pi-llm-wiki/assets/architecture.md)<br>[assets/architecture.mmd](../../../../sources/zosmaai__pi-llm-wiki/assets/architecture.mmd) |
| eval | 25 | [test/background-tools.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/background-tools.test.ts)<br>[test/e2e-binary-detection.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-binary-detection.test.ts)<br>[test/e2e-docx.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-docx.test.ts)<br>[test/e2e-guardrails.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-guardrails.test.ts)<br>[test/e2e-html-normalization.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-html-normalization.test.ts)<br>[test/embeddings.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/embeddings.test.ts)<br>[test/helpers.ts](../../../../sources/zosmaai__pi-llm-wiki/test/helpers.ts)<br>[test/indexing.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/indexing.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/codeql.yml)<br>[.github/workflows/contributors.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/contributors.yml)<br>[.github/workflows/release.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/zosmaai__pi-llm-wiki/AGENTS.md) |
| docs | 17 | [README.de.md](../../../../sources/zosmaai__pi-llm-wiki/README.de.md)<br>[README.es.md](../../../../sources/zosmaai__pi-llm-wiki/README.es.md)<br>[README.fr.md](../../../../sources/zosmaai__pi-llm-wiki/README.fr.md)<br>[README.hi.md](../../../../sources/zosmaai__pi-llm-wiki/README.hi.md)<br>[README.ja.md](../../../../sources/zosmaai__pi-llm-wiki/README.ja.md)<br>[README.ko.md](../../../../sources/zosmaai__pi-llm-wiki/README.ko.md)<br>[README.md](../../../../sources/zosmaai__pi-llm-wiki/README.md)<br>[README.pt.md](../../../../sources/zosmaai__pi-llm-wiki/README.pt.md) |
| config | 2 | [package.json](../../../../sources/zosmaai__pi-llm-wiki/package.json)<br>[tsconfig.json](../../../../sources/zosmaai__pi-llm-wiki/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 25 | [test/background-tools.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/background-tools.test.ts)<br>[test/e2e-binary-detection.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-binary-detection.test.ts)<br>[test/e2e-docx.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-docx.test.ts)<br>[test/e2e-guardrails.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-guardrails.test.ts)<br>[test/e2e-html-normalization.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-html-normalization.test.ts)<br>[test/embeddings.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/embeddings.test.ts) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/codeql.yml)<br>[.github/workflows/contributors.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/contributors.yml)<br>[.github/workflows/release.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/zosmaai__pi-llm-wiki/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/ingest-tool.test.ts`, `test/ingest-worker.test.ts`, `test/personal-wiki-paths.test.ts`.
2. agent/tool runtime 매핑: `AGENTS.md`, `skills/llm-wiki/SKILL.md`, `skills/llm-wiki/templates/config.yaml`.
3. retrieval/memory/indexing 확인: `test/ingest-tool.test.ts`, `test/ingest-worker.test.ts`, `test/personal-wiki-paths.test.ts`.
4. test/eval 파일로 동작 검증: `test/background-tools.test.ts`, `test/e2e-binary-detection.test.ts`, `test/e2e-docx.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Self maintaining, Obsidian compatible knowledge base for pi — turn raw sources into an interlinked wiki that compounds o. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
