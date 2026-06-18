# vectorize-io/hindsight 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Hindsight: Agent Memory That Learns

## 요약

- 조사 단위: `sources/vectorize-io__hindsight` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,014 files, 488 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=skills/hindsight-docs/references/sdks/embed.md, skills/hindsight-docs/references/developer/index.md, skills/hindsight-docs/references/developer/rag-vs-hindsight.md이고, 의존성 단서는 mcp, torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vectorize-io/hindsight |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 16520 |
| Forks | 947 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/vectorize-io__hindsight](../../../../sources/vectorize-io__hindsight) |
| 기존 보고서 | [reports/global-trending/repositories/vectorize-io__hindsight.md](../../../global-trending/repositories/vectorize-io__hindsight.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3014 / 488 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .claude, .claude-plugin, .githooks, .github, cookbook, docker, helm, hindsight-all, hindsight-all-npm, hindsight-all-slim, hindsight-api, hindsight-api-slim, hindsight-cli, hindsight-clients, hindsight-control-plane, hindsight-dev, hindsight-docs, hindsight-embed, hindsight-integration-tests, hindsight-integrations |
| 상위 확장자 | .py: 1098, .md: 561, .ts: 243, .png: 214, .go: 171, .json: 103, .tsx: 100, .mdx: 66, (none): 63, .sh: 60, .toml: 43, .yaml: 43 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cookbook | top-level component | 1 |
| docker | documentation surface | 1 |
| helm | deployment surface | 1 |
| hindsight-all | top-level component | 1 |
| hindsight-all-npm | top-level component | 1 |
| hindsight-all-slim | top-level component | 1 |
| hindsight-api | source boundary | 1 |
| hindsight-api-slim | source boundary | 1 |
| hindsight-cli | top-level component | 1 |
| hindsight-clients | source boundary | 1 |
| hindsight-control-plane | top-level component | 1 |
| hindsight-dev | top-level component | 1 |
| hindsight-docs | documentation surface | 1 |
| hindsight-embed | top-level component | 1 |
| hindsight-integration-tests | validation surface | 1 |
| hindsight-integrations | top-level component | 1 |
| hindsight-tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | ./scripts/setup-hooks.sh |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [skills/hindsight-docs/references/sdks/embed.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/sdks/embed.md) | retrieval signal |
| retrieval | [skills/hindsight-docs/references/developer/index.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/index.md) | retrieval signal |
| retrieval | [skills/hindsight-docs/references/developer/rag-vs-hindsight.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/rag-vs-hindsight.md) | retrieval signal |
| retrieval | [skills/hindsight-docs/references/developer/retrieval.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/retrieval.md) | retrieval signal |
| entrypoints | [hindsight-tools/hindsight-agent-sdk/src/index.ts](../../../../sources/vectorize-io__hindsight/hindsight-tools/hindsight-agent-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [hindsight-integrations/roo-code/hindsight_roo_code/__main__.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/roo-code/hindsight_roo_code/__main__.py) | entrypoints signal |
| entrypoints | [hindsight-integrations/opencode/src/index.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/opencode/src/index.ts) | entrypoints signal |
| entrypoints | [hindsight-integrations/openclaw/src/index.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/openclaw/src/index.test.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/vectorize-io__hindsight/README.md) | docs signal |
| docs | [scripts/dev/monitoring/README.md](../../../../sources/vectorize-io__hindsight/scripts/dev/monitoring/README.md) | docs signal |
| docs | [hindsight-integrations/README.md](../../../../sources/vectorize-io__hindsight/hindsight-integrations/README.md) | docs signal |
| docs | [hindsight-integrations/zed/README.md](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zed/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 28 | [hindsight-tools/hindsight-agent-sdk/src/index.ts](../../../../sources/vectorize-io__hindsight/hindsight-tools/hindsight-agent-sdk/src/index.ts)<br>[hindsight-integrations/roo-code/hindsight_roo_code/__main__.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/roo-code/hindsight_roo_code/__main__.py)<br>[hindsight-integrations/opencode/src/index.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/opencode/src/index.ts)<br>[hindsight-integrations/openclaw/src/index.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/openclaw/src/index.test.ts)<br>[hindsight-integrations/openclaw/src/index.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/openclaw/src/index.ts)<br>[hindsight-integrations/obsidian/src/main.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/obsidian/src/main.ts)<br>[hindsight-integrations/nemoclaw/src/cli.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/cli.ts)<br>[hindsight-integrations/dify/main.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/dify/main.py) |
| agentRuntime | 211 | [AGENTS.md](../../../../sources/vectorize-io__hindsight/AGENTS.md)<br>[skills/hindsight-self-hosted/SKILL.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-self-hosted/SKILL.md)<br>[skills/hindsight-local/SKILL.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-local/SKILL.md)<br>[skills/hindsight-docs/SKILL.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/SKILL.md)<br>[skills/hindsight-docs/references/best-practices.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/best-practices.md)<br>[skills/hindsight-docs/references/faq.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/faq.md)<br>[skills/hindsight-docs/references/openapi.json](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/openapi.json)<br>[skills/hindsight-docs/references/sdks/cli.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/sdks/cli.md) |
| mcp | 38 | [skills/hindsight-docs/references/developer/mcp-server.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/mcp-server.md)<br>[hindsight-integrations/gemini-spark/mcp_config.example.json](../../../../sources/vectorize-io__hindsight/hindsight-integrations/gemini-spark/mcp_config.example.json)<br>[hindsight-integrations/claude-code/.mcp.json](../../../../sources/vectorize-io__hindsight/hindsight-integrations/claude-code/.mcp.json)<br>[hindsight-integrations/claude-code/tests/test_mcp_server.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/claude-code/tests/test_mcp_server.py)<br>[hindsight-integrations/claude-code/tests/test_run_mcp.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/claude-code/tests/test_run_mcp.py)<br>[hindsight-integrations/claude-code/scripts/mcp_server.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/claude-code/scripts/mcp_server.py)<br>[hindsight-integrations/claude-code/scripts/run_mcp.sh](../../../../sources/vectorize-io__hindsight/hindsight-integrations/claude-code/scripts/run_mcp.sh)<br>[hindsight-integration-tests/tests/test_mcp_e2e.py](../../../../sources/vectorize-io__hindsight/hindsight-integration-tests/tests/test_mcp_e2e.py) |
| retrieval | 457 | [skills/hindsight-docs/references/sdks/embed.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/sdks/embed.md)<br>[skills/hindsight-docs/references/developer/index.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/index.md)<br>[skills/hindsight-docs/references/developer/rag-vs-hindsight.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/rag-vs-hindsight.md)<br>[skills/hindsight-docs/references/developer/retrieval.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/retrieval.md)<br>[skills/hindsight-docs/references/developer/memory-defense/index.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/memory-defense/index.md)<br>[skills/hindsight-docs/references/developer/api/memory-banks.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/developer/api/memory-banks.md)<br>[skills/hindsight-docs/references/changelog/index.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/changelog/index.md)<br>[hindsight-tools/hindsight-agent-sdk/tests/index.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-tools/hindsight-agent-sdk/tests/index.test.ts) |
| spec | 13 | [hindsight-integrations/paperclip/tests/bank-edge-cases.spec.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/paperclip/tests/bank-edge-cases.spec.ts)<br>[hindsight-integrations/paperclip/tests/plugin.spec.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/paperclip/tests/plugin.spec.ts)<br>[hindsight-integrations/omo/requirements.txt](../../../../sources/vectorize-io__hindsight/hindsight-integrations/omo/requirements.txt)<br>[hindsight-integrations/obsidian/tests/chat.spec.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/obsidian/tests/chat.spec.ts)<br>[hindsight-integrations/obsidian/tests/client.spec.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/obsidian/tests/client.spec.ts)<br>[hindsight-integrations/obsidian/tests/frontmatter.spec.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/obsidian/tests/frontmatter.spec.ts)<br>[hindsight-integrations/obsidian/tests/reflect-util.spec.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/obsidian/tests/reflect-util.spec.ts)<br>[hindsight-integrations/obsidian/tests/status-bar.spec.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/obsidian/tests/status-bar.spec.ts) |
| eval | 543 | [scripts/run-upgrade-tests.sh](../../../../sources/vectorize-io__hindsight/scripts/run-upgrade-tests.sh)<br>[scripts/smoke-test-slim.sh](../../../../sources/vectorize-io__hindsight/scripts/smoke-test-slim.sh)<br>[scripts/test-doc-examples.sh](../../../../sources/vectorize-io__hindsight/scripts/test-doc-examples.sh)<br>[scripts/benchmarks/run-perf-test.sh](../../../../sources/vectorize-io__hindsight/scripts/benchmarks/run-perf-test.sh)<br>[hindsight-tools/hindsight-agent-sdk/tests/index.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-tools/hindsight-agent-sdk/tests/index.test.ts)<br>[hindsight-integrations/zed/tests/__init__.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zed/tests/__init__.py)<br>[hindsight-integrations/zed/tests/test_cli.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zed/tests/test_cli.py)<br>[hindsight-integrations/zed/tests/test_config.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zed/tests/test_config.py) |
| security | 55 | [SECURITY.md](../../../../sources/vectorize-io__hindsight/SECURITY.md)<br>[skills/hindsight-docs/references/changelog/integrations/cloudflare-oauth-proxy.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/changelog/integrations/cloudflare-oauth-proxy.md)<br>[hindsight-integrations/nemoclaw/src/policy-reader.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/policy-reader.test.ts)<br>[hindsight-integrations/nemoclaw/src/policy-reader.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/policy-reader.ts)<br>[hindsight-integrations/nemoclaw/src/policy-writer.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/policy-writer.test.ts)<br>[hindsight-integrations/nemoclaw/src/policy-writer.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/policy-writer.ts)<br>[hindsight-integrations/cloudflare-oauth-proxy/.gitignore](../../../../sources/vectorize-io__hindsight/hindsight-integrations/cloudflare-oauth-proxy/.gitignore)<br>[hindsight-integrations/cloudflare-oauth-proxy/package-lock.json](../../../../sources/vectorize-io__hindsight/hindsight-integrations/cloudflare-oauth-proxy/package-lock.json) |
| ci | 8 | [.github/workflows/deploy-docs.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/deploy-docs.yml)<br>[.github/workflows/perf-test.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/perf-test.yml)<br>[.github/workflows/release-integration.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/release-integration.yml)<br>[.github/workflows/release-tool.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/release-tool.yml)<br>[.github/workflows/release.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/release.yml)<br>[.github/workflows/sign-images.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/sign-images.yml)<br>[.github/workflows/test.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/test.yml)<br>[.github/workflows/windows-smoke.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/windows-smoke.yml) |
| container | 52 | [scripts/dev/monitoring/docker-compose.yaml](../../../../sources/vectorize-io__hindsight/scripts/dev/monitoring/docker-compose.yaml)<br>[helm/hindsight/.helmignore](../../../../sources/vectorize-io__hindsight/helm/hindsight/.helmignore)<br>[helm/hindsight/Chart.yaml](../../../../sources/vectorize-io__hindsight/helm/hindsight/Chart.yaml)<br>[helm/hindsight/README.md](../../../../sources/vectorize-io__hindsight/helm/hindsight/README.md)<br>[helm/hindsight/values.yaml](../../../../sources/vectorize-io__hindsight/helm/hindsight/values.yaml)<br>[helm/hindsight/templates/_helpers.tpl](../../../../sources/vectorize-io__hindsight/helm/hindsight/templates/_helpers.tpl)<br>[helm/hindsight/templates/api-deployment.yaml](../../../../sources/vectorize-io__hindsight/helm/hindsight/templates/api-deployment.yaml)<br>[helm/hindsight/templates/api-model-cache-pvc.yaml](../../../../sources/vectorize-io__hindsight/helm/hindsight/templates/api-model-cache-pvc.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/vectorize-io__hindsight/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vectorize-io__hindsight/CLAUDE.md) |
| docs | 117 | [README.md](../../../../sources/vectorize-io__hindsight/README.md)<br>[scripts/dev/monitoring/README.md](../../../../sources/vectorize-io__hindsight/scripts/dev/monitoring/README.md)<br>[hindsight-integrations/README.md](../../../../sources/vectorize-io__hindsight/hindsight-integrations/README.md)<br>[hindsight-integrations/zed/README.md](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zed/README.md)<br>[hindsight-integrations/zapier/README.md](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zapier/README.md)<br>[hindsight-integrations/vapi/README.md](../../../../sources/vectorize-io__hindsight/hindsight-integrations/vapi/README.md)<br>[hindsight-integrations/superagent/README.md](../../../../sources/vectorize-io__hindsight/hindsight-integrations/superagent/README.md)<br>[hindsight-integrations/strands/README.md](../../../../sources/vectorize-io__hindsight/hindsight-integrations/strands/README.md) |
| config | 109 | [package.json](../../../../sources/vectorize-io__hindsight/package.json)<br>[pyproject.toml](../../../../sources/vectorize-io__hindsight/pyproject.toml)<br>[uv.lock](../../../../sources/vectorize-io__hindsight/uv.lock)<br>[hindsight-tools/hindsight-agent-sdk/package.json](../../../../sources/vectorize-io__hindsight/hindsight-tools/hindsight-agent-sdk/package.json)<br>[hindsight-tools/hindsight-agent-sdk/tsconfig.json](../../../../sources/vectorize-io__hindsight/hindsight-tools/hindsight-agent-sdk/tsconfig.json)<br>[hindsight-integrations/zed/pyproject.toml](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zed/pyproject.toml)<br>[hindsight-integrations/zed/uv.lock](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zed/uv.lock)<br>[hindsight-integrations/zapier/package.json](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zapier/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 543 | [scripts/run-upgrade-tests.sh](../../../../sources/vectorize-io__hindsight/scripts/run-upgrade-tests.sh)<br>[scripts/smoke-test-slim.sh](../../../../sources/vectorize-io__hindsight/scripts/smoke-test-slim.sh)<br>[scripts/test-doc-examples.sh](../../../../sources/vectorize-io__hindsight/scripts/test-doc-examples.sh)<br>[scripts/benchmarks/run-perf-test.sh](../../../../sources/vectorize-io__hindsight/scripts/benchmarks/run-perf-test.sh)<br>[hindsight-tools/hindsight-agent-sdk/tests/index.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-tools/hindsight-agent-sdk/tests/index.test.ts)<br>[hindsight-integrations/zed/tests/__init__.py](../../../../sources/vectorize-io__hindsight/hindsight-integrations/zed/tests/__init__.py) |
| CI workflow | 8 | [.github/workflows/deploy-docs.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/deploy-docs.yml)<br>[.github/workflows/perf-test.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/perf-test.yml)<br>[.github/workflows/release-integration.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/release-integration.yml)<br>[.github/workflows/release-tool.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/release-tool.yml)<br>[.github/workflows/release.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/release.yml)<br>[.github/workflows/sign-images.yml](../../../../sources/vectorize-io__hindsight/.github/workflows/sign-images.yml) |
| 컨테이너/배포 | 52 | [scripts/dev/monitoring/docker-compose.yaml](../../../../sources/vectorize-io__hindsight/scripts/dev/monitoring/docker-compose.yaml)<br>[helm/hindsight/.helmignore](../../../../sources/vectorize-io__hindsight/helm/hindsight/.helmignore)<br>[helm/hindsight/Chart.yaml](../../../../sources/vectorize-io__hindsight/helm/hindsight/Chart.yaml)<br>[helm/hindsight/README.md](../../../../sources/vectorize-io__hindsight/helm/hindsight/README.md)<br>[helm/hindsight/values.yaml](../../../../sources/vectorize-io__hindsight/helm/hindsight/values.yaml)<br>[helm/hindsight/templates/_helpers.tpl](../../../../sources/vectorize-io__hindsight/helm/hindsight/templates/_helpers.tpl) |
| 보안/정책 | 55 | [SECURITY.md](../../../../sources/vectorize-io__hindsight/SECURITY.md)<br>[skills/hindsight-docs/references/changelog/integrations/cloudflare-oauth-proxy.md](../../../../sources/vectorize-io__hindsight/skills/hindsight-docs/references/changelog/integrations/cloudflare-oauth-proxy.md)<br>[hindsight-integrations/nemoclaw/src/policy-reader.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/policy-reader.test.ts)<br>[hindsight-integrations/nemoclaw/src/policy-reader.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/policy-reader.ts)<br>[hindsight-integrations/nemoclaw/src/policy-writer.test.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/policy-writer.test.ts)<br>[hindsight-integrations/nemoclaw/src/policy-writer.ts](../../../../sources/vectorize-io__hindsight/hindsight-integrations/nemoclaw/src/policy-writer.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/vectorize-io__hindsight/AGENTS.md)<br>[CLAUDE.md](../../../../sources/vectorize-io__hindsight/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/hindsight-docs/references/sdks/embed.md`, `skills/hindsight-docs/references/developer/index.md`, `skills/hindsight-docs/references/developer/rag-vs-hindsight.md`.
2. entrypoint를 따라 실행 흐름 확인: `hindsight-tools/hindsight-agent-sdk/src/index.ts`, `hindsight-integrations/roo-code/hindsight_roo_code/__main__.py`, `hindsight-integrations/opencode/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/hindsight-self-hosted/SKILL.md`, `skills/hindsight-local/SKILL.md`.
4. retrieval/memory/indexing 확인: `skills/hindsight-docs/references/sdks/embed.md`, `skills/hindsight-docs/references/developer/index.md`, `skills/hindsight-docs/references/developer/rag-vs-hindsight.md`.
5. test/eval 파일로 동작 검증: `scripts/run-upgrade-tests.sh`, `scripts/smoke-test-slim.sh`, `scripts/test-doc-examples.sh`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Hindsight Agent Memory That Learns. 핵심 구조 신호는 Python, package.json, pyproject.toml, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
