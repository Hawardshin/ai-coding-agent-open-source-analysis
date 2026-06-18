# hjhun/llm-wiki 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

hjhun/llm-wiki

## 요약

- 조사 단위: `sources/hjhun__llm-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 349 files, 157 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=llm-wiki.md, wiki/index.md, wiki/log.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hjhun/llm-wiki |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hjhun__llm-wiki](../../../../sources/hjhun__llm-wiki) |
| 기존 보고서 | [reports/korea-trending/repositories/hjhun__llm-wiki.md](../../../korea-trending/repositories/hjhun__llm-wiki.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 349 / 157 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .github, cli-rs, clio-skill, config, docs, examples, plans, raw, scripts, systemd, tools, webapp, wiki |
| 상위 확장자 | .ts: 194, .tsx: 49, .md: 48, .rs: 15, .mjs: 11, .sh: 10, .json: 7, (none): 6, .yml: 3, .svg: 2, .css: 1, .lock: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| cli-rs | top-level component | 1 |
| clio-skill | top-level component | 1 |
| config | top-level component | 1 |
| examples | top-level component | 1 |
| examples/mini-wiki | examples workspace | 1 |
| plans | top-level component | 1 |
| raw | top-level component | 1 |
| scripts | top-level component | 1 |
| systemd | top-level component | 1 |
| tools | top-level component | 1 |
| webapp | source boundary | 1 |
| wiki | top-level component | 1 |


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
| retrieval | [llm-wiki.md](../../../../sources/hjhun__llm-wiki/llm-wiki.md) | retrieval signal |
| retrieval | [wiki/index.md](../../../../sources/hjhun__llm-wiki/wiki/index.md) | retrieval signal |
| retrieval | [wiki/log.md](../../../../sources/hjhun__llm-wiki/wiki/log.md) | retrieval signal |
| retrieval | [wiki/sources/index.md](../../../../sources/hjhun__llm-wiki/wiki/sources/index.md) | retrieval signal |
| entrypoints | [cli-rs/src/main.rs](../../../../sources/hjhun__llm-wiki/cli-rs/src/main.rs) | entrypoints signal |
| entrypoints | [cli-rs/src/commands/server.rs](../../../../sources/hjhun__llm-wiki/cli-rs/src/commands/server.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/hjhun__llm-wiki/README.md) | docs signal |
| docs | [webapp/README.md](../../../../sources/hjhun__llm-wiki/webapp/README.md) | docs signal |
| docs | [tools/README.md](../../../../sources/hjhun__llm-wiki/tools/README.md) | docs signal |
| docs | [examples/mini-wiki/README.md](../../../../sources/hjhun__llm-wiki/examples/mini-wiki/README.md) | docs signal |
| eval | [webapp/test/stubs/server-only.ts](../../../../sources/hjhun__llm-wiki/webapp/test/stubs/server-only.ts) | eval signal |
| eval | [webapp/lib/agent-roles.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [cli-rs/src/main.rs](../../../../sources/hjhun__llm-wiki/cli-rs/src/main.rs)<br>[cli-rs/src/commands/server.rs](../../../../sources/hjhun__llm-wiki/cli-rs/src/commands/server.rs) |
| agentRuntime | 29 | [AGENTS.md](../../../../sources/hjhun__llm-wiki/AGENTS.md)<br>[webapp/lib/agent-roles.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.test.ts)<br>[webapp/lib/agent-roles.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.ts)<br>[webapp/lib/automation/runner.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/automation/runner.ts)<br>[webapp/lib/automation/tools.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/automation/tools.ts)<br>[webapp/components/agent-panel/AgentEdgePanel.tsx](../../../../sources/hjhun__llm-wiki/webapp/components/agent-panel/AgentEdgePanel.tsx)<br>[webapp/components/agent-panel/AgentMascot.tsx](../../../../sources/hjhun__llm-wiki/webapp/components/agent-panel/AgentMascot.tsx)<br>[webapp/components/agent-panel/useRunningJobs.ts](../../../../sources/hjhun__llm-wiki/webapp/components/agent-panel/useRunningJobs.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 74 | [llm-wiki.md](../../../../sources/hjhun__llm-wiki/llm-wiki.md)<br>[wiki/index.md](../../../../sources/hjhun__llm-wiki/wiki/index.md)<br>[wiki/log.md](../../../../sources/hjhun__llm-wiki/wiki/log.md)<br>[wiki/sources/index.md](../../../../sources/hjhun__llm-wiki/wiki/sources/index.md)<br>[wiki/maps/index.md](../../../../sources/hjhun__llm-wiki/wiki/maps/index.md)<br>[wiki/.progress/ingest/.state.json](../../../../sources/hjhun__llm-wiki/wiki/.progress/ingest/.state.json)<br>[wiki/.progress/ingest/DASHBOARD.md](../../../../sources/hjhun__llm-wiki/wiki/.progress/ingest/DASHBOARD.md)<br>[wiki/.progress/ingest/leaves/.gitkeep](../../../../sources/hjhun__llm-wiki/wiki/.progress/ingest/leaves/.gitkeep) |
| spec | 1 | [.agents/skills/code-architecture/SKILL.md](../../../../sources/hjhun__llm-wiki/.agents/skills/code-architecture/SKILL.md) |
| eval | 46 | [webapp/test/stubs/server-only.ts](../../../../sources/hjhun__llm-wiki/webapp/test/stubs/server-only.ts)<br>[webapp/lib/agent-roles.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.test.ts)<br>[webapp/lib/answer-secret-sweep.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.test.ts)<br>[webapp/lib/answer-sources.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-sources.test.ts)<br>[webapp/lib/cli-cline-task.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-cline-task.test.ts)<br>[webapp/lib/cli-codex-json.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-codex-json.test.ts)<br>[webapp/lib/cli-session.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-session.test.ts)<br>[webapp/lib/cli-stream-json.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-stream-json.test.ts) |
| security | 8 | [webapp/lib/answer-secret-sweep.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.test.ts)<br>[webapp/lib/answer-secret-sweep.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.ts)<br>[webapp/lib/auth.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/auth.ts)<br>[webapp/lib/secret-scan.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/secret-scan.test.ts)<br>[webapp/lib/secret-scan.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/secret-scan.ts)<br>[webapp/app/api/auth/setup/route.ts](../../../../sources/hjhun__llm-wiki/webapp/app/api/auth/setup/route.ts)<br>[webapp/app/api/auth/logout/route.ts](../../../../sources/hjhun__llm-wiki/webapp/app/api/auth/logout/route.ts)<br>[webapp/app/api/auth/login/route.ts](../../../../sources/hjhun__llm-wiki/webapp/app/api/auth/login/route.ts) |
| ci | 3 | [.github/workflows/cli.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/cli.yml)<br>[.github/workflows/release.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/release.yml)<br>[.github/workflows/webapp.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/webapp.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/hjhun__llm-wiki/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hjhun__llm-wiki/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/hjhun__llm-wiki/README.md)<br>[webapp/README.md](../../../../sources/hjhun__llm-wiki/webapp/README.md)<br>[tools/README.md](../../../../sources/hjhun__llm-wiki/tools/README.md)<br>[examples/mini-wiki/README.md](../../../../sources/hjhun__llm-wiki/examples/mini-wiki/README.md)<br>[docs/GUIDE_ko.md](../../../../sources/hjhun__llm-wiki/docs/GUIDE_ko.md)<br>[docs/GUIDE.md](../../../../sources/hjhun__llm-wiki/docs/GUIDE.md)<br>[docs/svg/clio.svg](../../../../sources/hjhun__llm-wiki/docs/svg/clio.svg)<br>[clio-skill/README.md](../../../../sources/hjhun__llm-wiki/clio-skill/README.md) |
| config | 4 | [webapp/package.json](../../../../sources/hjhun__llm-wiki/webapp/package.json)<br>[webapp/tsconfig.json](../../../../sources/hjhun__llm-wiki/webapp/tsconfig.json)<br>[cli-rs/Cargo.lock](../../../../sources/hjhun__llm-wiki/cli-rs/Cargo.lock)<br>[cli-rs/Cargo.toml](../../../../sources/hjhun__llm-wiki/cli-rs/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 46 | [webapp/test/stubs/server-only.ts](../../../../sources/hjhun__llm-wiki/webapp/test/stubs/server-only.ts)<br>[webapp/lib/agent-roles.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.test.ts)<br>[webapp/lib/answer-secret-sweep.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.test.ts)<br>[webapp/lib/answer-sources.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-sources.test.ts)<br>[webapp/lib/cli-cline-task.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-cline-task.test.ts)<br>[webapp/lib/cli-codex-json.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-codex-json.test.ts) |
| CI workflow | 3 | [.github/workflows/cli.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/cli.yml)<br>[.github/workflows/release.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/release.yml)<br>[.github/workflows/webapp.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/webapp.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 8 | [webapp/lib/answer-secret-sweep.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.test.ts)<br>[webapp/lib/answer-secret-sweep.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.ts)<br>[webapp/lib/auth.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/auth.ts)<br>[webapp/lib/secret-scan.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/secret-scan.test.ts)<br>[webapp/lib/secret-scan.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/secret-scan.ts)<br>[webapp/app/api/auth/setup/route.ts](../../../../sources/hjhun__llm-wiki/webapp/app/api/auth/setup/route.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/hjhun__llm-wiki/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hjhun__llm-wiki/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `llm-wiki.md`, `wiki/index.md`, `wiki/log.md`.
2. entrypoint를 따라 실행 흐름 확인: `cli-rs/src/main.rs`, `cli-rs/src/commands/server.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `webapp/lib/agent-roles.test.ts`, `webapp/lib/agent-roles.ts`.
4. retrieval/memory/indexing 확인: `llm-wiki.md`, `wiki/index.md`, `wiki/log.md`.
5. test/eval 파일로 동작 검증: `webapp/test/stubs/server-only.ts`, `webapp/lib/agent-roles.test.ts`, `webapp/lib/answer-secret-sweep.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 TypeScript, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
