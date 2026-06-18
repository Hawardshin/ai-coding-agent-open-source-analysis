# justrach/codedb 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Zig code intelligence server and MCP toolset for AI agents. Fast tree, outline, symbol, search, read, edit, deps, snapshot, and remote GitHub repo queries.

## 요약

- 조사 단위: `sources/justrach__codedb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 665 files, 64 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp.zig, src/test_mcp.zig, scripts/e2e_mcp_test.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | justrach/codedb |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Zig |
| Stars | 1332 |
| Forks | 79 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/justrach__codedb](../../../../sources/justrach__codedb) |
| 기존 보고서 | [reports/global-trending/repositories/justrach__codedb.md](../../../global-trending/repositories/justrach__codedb.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 665 / 64 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, assets, bench, benchmarks, docs, experiments, install, npm, scripts, socials, src, website, zig-pkg |
| 상위 확장자 | .json: 202, .patch: 118, .log: 107, .zig: 86, .md: 57, .txt: 31, .py: 26, .sh: 10, (none): 10, .js: 4, .yml: 3, .zon: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 21 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bench | validation surface | 1 |
| benchmarks | validation surface | 1 |
| experiments | top-level component | 1 |
| install | top-level component | 1 |
| npm | top-level component | 1 |
| scripts | top-level component | 1 |
| socials | ci surface | 1 |
| website | documentation surface | 1 |
| zig-pkg | top-level component | 1 |


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
| mcp | [src/mcp.zig](../../../../sources/justrach__codedb/src/mcp.zig) | mcp signal |
| mcp | [src/test_mcp.zig](../../../../sources/justrach__codedb/src/test_mcp.zig) | mcp signal |
| mcp | [scripts/e2e_mcp_test.py](../../../../sources/justrach__codedb/scripts/e2e_mcp_test.py) | mcp signal |
| mcp | [docs/mcp.md](../../../../sources/justrach__codedb/docs/mcp.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/justrach__codedb/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/agent.zig](../../../../sources/justrach__codedb/src/agent.zig) | agentRuntime signal |
| agentRuntime | [docs/agents.md](../../../../sources/justrach__codedb/docs/agents.md) | agentRuntime signal |
| agentRuntime | [docs/hooks-labs.md](../../../../sources/justrach__codedb/docs/hooks-labs.md) | agentRuntime signal |
| entrypoints | [website/src/main.zig](../../../../sources/justrach__codedb/website/src/main.zig) | entrypoints signal |
| entrypoints | [website/src/server.zig](../../../../sources/justrach__codedb/website/src/server.zig) | entrypoints signal |
| entrypoints | [src/index.zig](../../../../sources/justrach__codedb/src/index.zig) | entrypoints signal |
| entrypoints | [src/main.zig](../../../../sources/justrach__codedb/src/main.zig) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [website/src/main.zig](../../../../sources/justrach__codedb/website/src/main.zig)<br>[website/src/server.zig](../../../../sources/justrach__codedb/website/src/server.zig)<br>[src/index.zig](../../../../sources/justrach__codedb/src/index.zig)<br>[src/main.zig](../../../../sources/justrach__codedb/src/main.zig)<br>[src/server.zig](../../../../sources/justrach__codedb/src/server.zig)<br>[npm/bin/codedb.js](../../../../sources/justrach__codedb/npm/bin/codedb.js) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/justrach__codedb/AGENTS.md)<br>[src/agent.zig](../../../../sources/justrach__codedb/src/agent.zig)<br>[docs/agents.md](../../../../sources/justrach__codedb/docs/agents.md)<br>[docs/hooks-labs.md](../../../../sources/justrach__codedb/docs/hooks-labs.md)<br>[docs/skills.md](../../../../sources/justrach__codedb/docs/skills.md) |
| mcp | 6 | [src/mcp.zig](../../../../sources/justrach__codedb/src/mcp.zig)<br>[src/test_mcp.zig](../../../../sources/justrach__codedb/src/test_mcp.zig)<br>[scripts/e2e_mcp_test.py](../../../../sources/justrach__codedb/scripts/e2e_mcp_test.py)<br>[docs/mcp.md](../../../../sources/justrach__codedb/docs/mcp.md)<br>[docs/rfc-346-mcp-root-resolution.md](../../../../sources/justrach__codedb/docs/rfc-346-mcp-root-resolution.md)<br>[benchmarks/search-shootout/results/react-2026-05-20-leanctx-mcp.md](../../../../sources/justrach__codedb/benchmarks/search-shootout/results/react-2026-05-20-leanctx-mcp.md) |
| retrieval | 3 | [website/app/index.zig](../../../../sources/justrach__codedb/website/app/index.zig)<br>[src/index.zig](../../../../sources/justrach__codedb/src/index.zig)<br>[src/test_index.zig](../../../../sources/justrach__codedb/src/test_index.zig) |
| spec | 3 | [experiments/reader-md/SPEC.md](../../../../sources/justrach__codedb/experiments/reader-md/SPEC.md)<br>[docs/architecture.md](../../../../sources/justrach__codedb/docs/architecture.md)<br>[docs/design/ace-integration.md](../../../../sources/justrach__codedb/docs/design/ace-integration.md) |
| eval | 511 | [zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/003_char_class.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/003_char_class.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/004_anchors.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/004_anchors.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/005_alternation.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/005_alternation.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/006_shorthand_digit.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/006_shorthand_digit.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/007_group_capture.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/007_group_capture.txt) |
| security | 2 | [src/root_policy.zig](../../../../sources/justrach__codedb/src/root_policy.zig)<br>[.github/workflows/pr-base-guard.yml](../../../../sources/justrach__codedb/.github/workflows/pr-base-guard.yml) |
| ci | 3 | [.github/workflows/bench-regression.yml](../../../../sources/justrach__codedb/.github/workflows/bench-regression.yml)<br>[.github/workflows/pr-base-guard.yml](../../../../sources/justrach__codedb/.github/workflows/pr-base-guard.yml)<br>[.github/workflows/release-binaries.yml](../../../../sources/justrach__codedb/.github/workflows/release-binaries.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 4 | [AGENTS.md](../../../../sources/justrach__codedb/AGENTS.md)<br>[CLAUDE.md](../../../../sources/justrach__codedb/CLAUDE.md)<br>[docs/agents.md](../../../../sources/justrach__codedb/docs/agents.md)<br>[.github/copilot-instructions.md](../../../../sources/justrach__codedb/.github/copilot-instructions.md) |
| docs | 54 | [README.md](../../../../sources/justrach__codedb/README.md)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/README.md](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/README.md)<br>[website/.zigrep_archive](../../../../sources/justrach__codedb/website/.zigrep_archive)<br>[website/build.zig](../../../../sources/justrach__codedb/website/build.zig)<br>[website/build.zig.zon](../../../../sources/justrach__codedb/website/build.zig.zon)<br>[website/worker/worker.js](../../../../sources/justrach__codedb/website/worker/worker.js)<br>[website/worker/wrangler.toml](../../../../sources/justrach__codedb/website/worker/wrangler.toml)<br>[website/src/css.zig](../../../../sources/justrach__codedb/website/src/css.zig) |
| config | 1 | [npm/package.json](../../../../sources/justrach__codedb/npm/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 511 | [zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/003_char_class.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/003_char_class.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/004_anchors.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/004_anchors.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/005_alternation.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/005_alternation.txt) |
| CI workflow | 3 | [.github/workflows/bench-regression.yml](../../../../sources/justrach__codedb/.github/workflows/bench-regression.yml)<br>[.github/workflows/pr-base-guard.yml](../../../../sources/justrach__codedb/.github/workflows/pr-base-guard.yml)<br>[.github/workflows/release-binaries.yml](../../../../sources/justrach__codedb/.github/workflows/release-binaries.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [src/root_policy.zig](../../../../sources/justrach__codedb/src/root_policy.zig)<br>[.github/workflows/pr-base-guard.yml](../../../../sources/justrach__codedb/.github/workflows/pr-base-guard.yml) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/justrach__codedb/AGENTS.md)<br>[CLAUDE.md](../../../../sources/justrach__codedb/CLAUDE.md)<br>[docs/agents.md](../../../../sources/justrach__codedb/docs/agents.md)<br>[.github/copilot-instructions.md](../../../../sources/justrach__codedb/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/mcp.zig`, `src/test_mcp.zig`, `scripts/e2e_mcp_test.py`.
2. entrypoint를 따라 실행 흐름 확인: `website/src/main.zig`, `website/src/server.zig`, `src/index.zig`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/agent.zig`, `docs/agents.md`.
4. retrieval/memory/indexing 확인: `website/app/index.zig`, `src/index.zig`, `src/test_index.zig`.
5. test/eval 파일로 동작 검증: `zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh`, `zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt`, `zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Zig code intelligence server and MCP toolset for AI agents. Fast tree, outline, symbol, search, read, edit, deps, snapsh. 핵심 구조 신호는 Zig, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
