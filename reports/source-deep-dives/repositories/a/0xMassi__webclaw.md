# 0xMassi/webclaw 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Fast, local-first web content extraction for LLMs. Scrape, crawl, extract structured data — all from Rust. CLI, REST API, and MCP server.

## 요약

- 조사 단위: `sources/0xMassi__webclaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 178 files, 40 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, examples/mcp-web-scraping/README.md, crates/webclaw-mcp/Cargo.toml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | 0xMassi/webclaw |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 1416 |
| Forks | 157 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/0xMassi__webclaw](../../../../sources/0xMassi__webclaw) |
| 기존 보고서 | [reports/global-trending/repositories/0xMassi__webclaw.md](../../../global-trending/repositories/0xMassi__webclaw.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 178 / 40 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .cargo, .github, assets, benchmarks, crates, deploy, examples, packages, skill |
| 상위 확장자 | .rs: 107, .md: 16, .toml: 10, .png: 9, .html: 6, .json: 6, .yml: 5, .sh: 4, (none): 4, .txt: 3, .ci: 1, .example: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| crates/webclaw-mcp | crates workspace | 8 |
| crates/webclaw-core | crates workspace | 4 |
| crates/webclaw-fetch | crates workspace | 4 |
| packages/create-webclaw | packages workspace | 4 |
| crates/webclaw-cli | crates workspace | 3 |
| crates/webclaw-server | crates workspace | 3 |
| crates/webclaw-llm | crates workspace | 2 |
| crates/webclaw-pdf | crates workspace | 2 |
| examples/html-to-markdown-rag | examples workspace | 2 |
| examples/mcp-web-scraping | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| crates | source boundary | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/cloudflare-diagnostics | examples workspace | 1 |
| examples/firecrawl-compatible-api | examples workspace | 1 |


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
| mcp | [.mcp.json](../../../../sources/0xMassi__webclaw/.mcp.json) | mcp signal |
| mcp | [examples/mcp-web-scraping/README.md](../../../../sources/0xMassi__webclaw/examples/mcp-web-scraping/README.md) | mcp signal |
| mcp | [crates/webclaw-mcp/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/Cargo.toml) | mcp signal |
| mcp | [crates/webclaw-mcp/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/main.rs) | mcp signal |
| agentRuntime | [SKILL.md](../../../../sources/0xMassi__webclaw/SKILL.md) | agentRuntime signal |
| agentRuntime | [skill/SKILL.md](../../../../sources/0xMassi__webclaw/skill/SKILL.md) | agentRuntime signal |
| agentRuntime | [crates/webclaw-mcp/src/tools.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/tools.rs) | agentRuntime signal |
| entrypoints | [packages/create-webclaw/server.json](../../../../sources/0xMassi__webclaw/packages/create-webclaw/server.json) | entrypoints signal |
| entrypoints | [crates/webclaw-server/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-server/src/main.rs) | entrypoints signal |
| entrypoints | [crates/webclaw-pdf/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-pdf/src/lib.rs) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/0xMassi__webclaw/CLAUDE.md) | instruction signal |
| config | [Cargo.lock](../../../../sources/0xMassi__webclaw/Cargo.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [packages/create-webclaw/server.json](../../../../sources/0xMassi__webclaw/packages/create-webclaw/server.json)<br>[crates/webclaw-server/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-server/src/main.rs)<br>[crates/webclaw-pdf/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-pdf/src/lib.rs)<br>[crates/webclaw-mcp/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/main.rs)<br>[crates/webclaw-mcp/src/server.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/server.rs)<br>[crates/webclaw-llm/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-llm/src/lib.rs)<br>[crates/webclaw-fetch/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/src/lib.rs)<br>[crates/webclaw-core/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-core/src/lib.rs) |
| agentRuntime | 3 | [SKILL.md](../../../../sources/0xMassi__webclaw/SKILL.md)<br>[skill/SKILL.md](../../../../sources/0xMassi__webclaw/skill/SKILL.md)<br>[crates/webclaw-mcp/src/tools.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/tools.rs) |
| mcp | 6 | [.mcp.json](../../../../sources/0xMassi__webclaw/.mcp.json)<br>[examples/mcp-web-scraping/README.md](../../../../sources/0xMassi__webclaw/examples/mcp-web-scraping/README.md)<br>[crates/webclaw-mcp/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/Cargo.toml)<br>[crates/webclaw-mcp/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/main.rs)<br>[crates/webclaw-mcp/src/server.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/server.rs)<br>[crates/webclaw-mcp/src/tools.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/tools.rs) |
| retrieval | 2 | [packages/create-webclaw/index.mjs](../../../../sources/0xMassi__webclaw/packages/create-webclaw/index.mjs)<br>[examples/html-to-markdown-rag/README.md](../../../../sources/0xMassi__webclaw/examples/html-to-markdown-rag/README.md) |
| spec | 0 | 명확하지 않음 |
| eval | 5 | [crates/webclaw-fetch/tests/bench_1k.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/tests/bench_1k.rs)<br>[crates/webclaw-core/testdata/express_test.html](../../../../sources/0xMassi__webclaw/crates/webclaw-core/testdata/express_test.html)<br>[crates/webclaw-core/src/js_eval.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-core/src/js_eval.rs)<br>[crates/webclaw-cli/src/bench.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-cli/src/bench.rs)<br>[benchmarks/scripts/bench.py](../../../../sources/0xMassi__webclaw/benchmarks/scripts/bench.py) |
| security | 2 | [crates/webclaw-server/src/auth.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-server/src/auth.rs)<br>[crates/webclaw-fetch/src/url_security.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/src/url_security.rs) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/0xMassi__webclaw/.github/workflows/ci.yml)<br>[.github/workflows/deps.yml](../../../../sources/0xMassi__webclaw/.github/workflows/deps.yml)<br>[.github/workflows/release.yml](../../../../sources/0xMassi__webclaw/.github/workflows/release.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/0xMassi__webclaw/docker-compose.yml)<br>[Dockerfile](../../../../sources/0xMassi__webclaw/Dockerfile)<br>[Dockerfile.ci](../../../../sources/0xMassi__webclaw/Dockerfile.ci)<br>[deploy/hetzner.sh](../../../../sources/0xMassi__webclaw/deploy/hetzner.sh) |
| instruction | 1 | [CLAUDE.md](../../../../sources/0xMassi__webclaw/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/0xMassi__webclaw/README.md)<br>[packages/create-webclaw/README.md](../../../../sources/0xMassi__webclaw/packages/create-webclaw/README.md)<br>[examples/README.md](../../../../sources/0xMassi__webclaw/examples/README.md)<br>[examples/proxy-backed-crawling/README.md](../../../../sources/0xMassi__webclaw/examples/proxy-backed-crawling/README.md)<br>[examples/mcp-web-scraping/README.md](../../../../sources/0xMassi__webclaw/examples/mcp-web-scraping/README.md)<br>[examples/html-to-markdown-rag/README.md](../../../../sources/0xMassi__webclaw/examples/html-to-markdown-rag/README.md)<br>[examples/firecrawl-compatible-api/README.md](../../../../sources/0xMassi__webclaw/examples/firecrawl-compatible-api/README.md)<br>[examples/cloudflare-diagnostics/README.md](../../../../sources/0xMassi__webclaw/examples/cloudflare-diagnostics/README.md) |
| config | 10 | [Cargo.lock](../../../../sources/0xMassi__webclaw/Cargo.lock)<br>[Cargo.toml](../../../../sources/0xMassi__webclaw/Cargo.toml)<br>[packages/create-webclaw/package.json](../../../../sources/0xMassi__webclaw/packages/create-webclaw/package.json)<br>[crates/webclaw-server/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-server/Cargo.toml)<br>[crates/webclaw-pdf/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-pdf/Cargo.toml)<br>[crates/webclaw-mcp/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/Cargo.toml)<br>[crates/webclaw-llm/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-llm/Cargo.toml)<br>[crates/webclaw-fetch/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [crates/webclaw-fetch/tests/bench_1k.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/tests/bench_1k.rs)<br>[crates/webclaw-core/testdata/express_test.html](../../../../sources/0xMassi__webclaw/crates/webclaw-core/testdata/express_test.html)<br>[crates/webclaw-core/src/js_eval.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-core/src/js_eval.rs)<br>[crates/webclaw-cli/src/bench.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-cli/src/bench.rs)<br>[benchmarks/scripts/bench.py](../../../../sources/0xMassi__webclaw/benchmarks/scripts/bench.py) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/0xMassi__webclaw/.github/workflows/ci.yml)<br>[.github/workflows/deps.yml](../../../../sources/0xMassi__webclaw/.github/workflows/deps.yml)<br>[.github/workflows/release.yml](../../../../sources/0xMassi__webclaw/.github/workflows/release.yml) |
| 컨테이너/배포 | 4 | [docker-compose.yml](../../../../sources/0xMassi__webclaw/docker-compose.yml)<br>[Dockerfile](../../../../sources/0xMassi__webclaw/Dockerfile)<br>[Dockerfile.ci](../../../../sources/0xMassi__webclaw/Dockerfile.ci)<br>[deploy/hetzner.sh](../../../../sources/0xMassi__webclaw/deploy/hetzner.sh) |
| 보안/정책 | 2 | [crates/webclaw-server/src/auth.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-server/src/auth.rs)<br>[crates/webclaw-fetch/src/url_security.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/src/url_security.rs) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/0xMassi__webclaw/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `examples/mcp-web-scraping/README.md`, `crates/webclaw-mcp/Cargo.toml`.
2. entrypoint를 따라 실행 흐름 확인: `packages/create-webclaw/server.json`, `crates/webclaw-server/src/main.rs`, `crates/webclaw-pdf/src/lib.rs`.
3. agent/tool runtime 매핑: `SKILL.md`, `skill/SKILL.md`, `crates/webclaw-mcp/src/tools.rs`.
4. retrieval/memory/indexing 확인: `packages/create-webclaw/index.mjs`, `examples/html-to-markdown-rag/README.md`.
5. test/eval 파일로 동작 검증: `crates/webclaw-fetch/tests/bench_1k.rs`, `crates/webclaw-core/testdata/express_test.html`, `crates/webclaw-core/src/js_eval.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Fast, local first web content extraction for LLMs. Scrape, crawl, extract structured data — all from Rust. CLI, REST API. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
