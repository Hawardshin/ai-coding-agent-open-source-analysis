# TabbyML/tabby Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 2093 files, 485 directories.

## 요약

- 조사 단위: `sources/TabbyML__tabby` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,081 files, 483 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=website/docs/references/cloud-deployment/hugging-face/agent-config.png, website/docs/administration/context/code-browser-entry.png, website/docs/administration/context/code-browser.png이고, 의존성 단서는 openai, ollama, llama, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | TabbyML/tabby |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 33609 |
| Forks | 1758 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/TabbyML__tabby](../../../../sources/TabbyML__tabby) |
| Existing report | [reports/global-trending/repositories/TabbyML__tabby.md](../../../global-trending/repositories/TabbyML__tabby.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2081 / 483 |
| Max observed depth | 13 |
| Top directories | .changes, .github, .tmuxinator, ci, clients, crates, docker, ee, experimental, python, rules, website |
| Top extensions | .tsx: 299, .rs: 272, .ts: 265, .js: 167, .png: 145, .md: 135, .sql: 105, .java: 93, .kt: 91, .py: 70, .html: 51, .toml: 50 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| crates/aim-downloader | crates workspace | 2 |
| crates/hash-ids | crates workspace | 2 |
| crates/http-api-bindings | crates workspace | 2 |
| crates/llama-cpp-server | crates workspace | 2 |
| crates/ollama-api-bindings | crates workspace | 2 |
| crates/sqlx-migrate-validate | crates workspace | 2 |
| crates/tabby | crates workspace | 2 |
| crates/tabby-common | crates workspace | 2 |
| crates/tabby-crawler | crates workspace | 2 |
| crates/tabby-download | crates workspace | 2 |
| crates/tabby-git | crates workspace | 2 |
| crates/tabby-index | crates workspace | 2 |
| crates/tabby-index-cli | crates workspace | 2 |
| crates/tabby-inference | crates workspace | 2 |
| .github | ci surface | 1 |
| ci | ci surface | 1 |
| clients | source boundary | 1 |
| crates | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo build |
| serve-dev | package.json | vscode:dev | turbo vscode:dev |
| quality | package.json | lint | turbo lint |
| quality | package.json | lint:fix | turbo lint:fix |
| test | package.json | test | turbo test |
| utility | Makefile | fix | make fix |
| utility | Makefile | fix-ui | make fix-ui |
| utility | Makefile | update-ui | make update-ui |
| utility | Makefile | update-db-schema | make update-db-schema |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | bump-version | make bump-version |
| build | Makefile | bump-release-version | make bump-release-version |
| utility | Makefile | update-openapi-doc | make update-openapi-doc |
| utility | Makefile | update-graphql-schema | make update-graphql-schema |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [website/docs/references/cloud-deployment/hugging-face/agent-config.png](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/hugging-face/agent-config.png) | agentRuntime signal |
| agentRuntime | [website/docs/administration/context/code-browser-entry.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/code-browser-entry.png) | agentRuntime signal |
| agentRuntime | [website/docs/administration/context/code-browser.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/code-browser.png) | agentRuntime signal |
| agentRuntime | [website/docs/administration/context/context-providers.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/context-providers.png) | agentRuntime signal |
| entrypoints | [python/tabby-loadtest/server.py](../../../../sources/TabbyML__tabby/python/tabby-loadtest/server.py) | entrypoints signal |
| entrypoints | [ee/tabby-ui/app/components/main.tsx](../../../../sources/TabbyML__tabby/ee/tabby-ui/app/components/main.tsx) | entrypoints signal |
| entrypoints | [crates/tabby-inference/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-inference/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/tabby-index-cli/src/main.rs](../../../../sources/TabbyML__tabby/crates/tabby-index-cli/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/TabbyML__tabby/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/TabbyML__tabby/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/TabbyML__tabby/Makefile) | config signal |
| config | [package.json](../../../../sources/TabbyML__tabby/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 20 | [python/tabby-loadtest/server.py](../../../../sources/TabbyML__tabby/python/tabby-loadtest/server.py)<br>[ee/tabby-ui/app/components/main.tsx](../../../../sources/TabbyML__tabby/ee/tabby-ui/app/components/main.tsx)<br>[crates/tabby-inference/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-inference/src/lib.rs)<br>[crates/tabby-index-cli/src/main.rs](../../../../sources/TabbyML__tabby/crates/tabby-index-cli/src/main.rs)<br>[crates/tabby-index/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-index/src/lib.rs)<br>[crates/tabby-git/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-git/src/lib.rs)<br>[crates/tabby-download/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-download/src/lib.rs)<br>[crates/tabby-crawler/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-crawler/src/lib.rs) |
| agentRuntime | 43 | [website/docs/references/cloud-deployment/hugging-face/agent-config.png](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/hugging-face/agent-config.png)<br>[website/docs/administration/context/code-browser-entry.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/code-browser-entry.png)<br>[website/docs/administration/context/code-browser.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/code-browser.png)<br>[website/docs/administration/context/context-providers.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/context-providers.png)<br>[website/docs/administration/context/document.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/document.png)<br>[website/docs/administration/context/git.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/git.png)<br>[website/docs/administration/context/github-gitlab.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/github-gitlab.png)<br>[website/docs/administration/context/index.mdx](../../../../sources/TabbyML__tabby/website/docs/administration/context/index.mdx) |
| mcp | 0 | not obvious |
| retrieval | 149 | [website/src/pages/index.js](../../../../sources/TabbyML__tabby/website/src/pages/index.js)<br>[website/src/pages/index.module.css](../../../../sources/TabbyML__tabby/website/src/pages/index.module.css)<br>[website/src/components/Monaco/index.js](../../../../sources/TabbyML__tabby/website/src/components/Monaco/index.js)<br>[website/src/components/HomepageFeatures/index.js](../../../../sources/TabbyML__tabby/website/src/components/HomepageFeatures/index.js)<br>[website/docs/references/cloud-deployment/skypilot/index.md](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/skypilot/index.md)<br>[website/docs/references/cloud-deployment/modal/index.md](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/modal/index.md)<br>[website/docs/references/cloud-deployment/hugging-face/index.md](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/hugging-face/index.md)<br>[website/docs/references/cloud-deployment/bentoml/index.md](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/bentoml/index.md) |
| spec | 4 | [MODEL_SPEC.md](../../../../sources/TabbyML__tabby/MODEL_SPEC.md)<br>[website/docs/roadmap.mdx](../../../../sources/TabbyML__tabby/website/docs/roadmap.mdx)<br>[experimental/prompt-rewrite-eval/requirements.txt](../../../../sources/TabbyML__tabby/experimental/prompt-rewrite-eval/requirements.txt)<br>[ee/tabby-webserver/docs/api_spec.md](../../../../sources/TabbyML__tabby/ee/tabby-webserver/docs/api_spec.md) |
| eval | 138 | [MODEL_SPEC.md](../../../../sources/TabbyML__tabby/MODEL_SPEC.md)<br>[website/docs/administration/smtp/test-email.png](../../../../sources/TabbyML__tabby/website/docs/administration/smtp/test-email.png)<br>[website/blog/2023-11-13-model-evaluation/cceval.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/cceval.png)<br>[website/blog/2023-11-13-model-evaluation/human-eval-plus.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/human-eval-plus.png)<br>[website/blog/2023-11-13-model-evaluation/index.md](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/index.md)<br>[website/blog/2023-11-13-model-evaluation/repobench.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/repobench.png)<br>[website/blog/2023-11-13-model-evaluation/repocoder.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/repocoder.png)<br>[website/blog/2023-11-13-model-evaluation/twitter-eval.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/twitter-eval.png) |
| security | 62 | [website/docs/administration/sso/ldap/ldap-with-oauth.png](../../../../sources/TabbyML__tabby/website/docs/administration/sso/ldap/ldap-with-oauth.png)<br>[rules/only-dao-and-policy-can-depend-tabby-db.yml](../../../../sources/TabbyML__tabby/rules/only-dao-and-policy-can-depend-tabby-db.yml)<br>[ee/tabby-webserver/ui/auth/reset-password.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/reset-password.html)<br>[ee/tabby-webserver/ui/auth/reset-password.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/reset-password.txt)<br>[ee/tabby-webserver/ui/auth/signin.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signin.html)<br>[ee/tabby-webserver/ui/auth/signin.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signin.txt)<br>[ee/tabby-webserver/ui/auth/signup.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signup.html)<br>[ee/tabby-webserver/ui/auth/signup.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signup.txt) |
| ci | 19 | [ci/package-from-upstream.sh](../../../../sources/TabbyML__tabby/ci/package-from-upstream.sh)<br>[ci/prepare_build_environment.ps1](../../../../sources/TabbyML__tabby/ci/prepare_build_environment.ps1)<br>[ci/prepare_build_environment.sh](../../../../sources/TabbyML__tabby/ci/prepare_build_environment.sh)<br>[.github/workflows/ast-grep-lint.yml](../../../../sources/TabbyML__tabby/.github/workflows/ast-grep-lint.yml)<br>[.github/workflows/autofix-pnpm.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-pnpm.yml)<br>[.github/workflows/autofix-python.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-python.yml)<br>[.github/workflows/autofix-rust.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-rust.yml)<br>[.github/workflows/bloat.yml](../../../../sources/TabbyML__tabby/.github/workflows/bloat.yml) |
| container | 6 | [website/docs/quick-start/installation/docker-compose.mdx](../../../../sources/TabbyML__tabby/website/docs/quick-start/installation/docker-compose.mdx)<br>[website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml](../../../../sources/TabbyML__tabby/website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml)<br>[experimental/deploy/Caddyfile](../../../../sources/TabbyML__tabby/experimental/deploy/Caddyfile)<br>[experimental/deploy/docker-compose.yaml](../../../../sources/TabbyML__tabby/experimental/deploy/docker-compose.yaml)<br>[docker/Dockerfile.cuda](../../../../sources/TabbyML__tabby/docker/Dockerfile.cuda)<br>[docker/Dockerfile.rocm](../../../../sources/TabbyML__tabby/docker/Dockerfile.rocm) |
| instruction | 0 | not obvious |
| docs | 270 | [README-ja.md](../../../../sources/TabbyML__tabby/README-ja.md)<br>[README-zh.md](../../../../sources/TabbyML__tabby/README-zh.md)<br>[README.md](../../../../sources/TabbyML__tabby/README.md)<br>[website/.gitattributes](../../../../sources/TabbyML__tabby/website/.gitattributes)<br>[website/.gitignore](../../../../sources/TabbyML__tabby/website/.gitignore)<br>[website/babel.config.js](../../../../sources/TabbyML__tabby/website/babel.config.js)<br>[website/docusaurus.config.js](../../../../sources/TabbyML__tabby/website/docusaurus.config.js)<br>[website/package.json](../../../../sources/TabbyML__tabby/website/package.json) |
| config | 42 | [Cargo.lock](../../../../sources/TabbyML__tabby/Cargo.lock)<br>[Cargo.toml](../../../../sources/TabbyML__tabby/Cargo.toml)<br>[Makefile](../../../../sources/TabbyML__tabby/Makefile)<br>[package.json](../../../../sources/TabbyML__tabby/package.json)<br>[pnpm-workspace.yaml](../../../../sources/TabbyML__tabby/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/TabbyML__tabby/turbo.json)<br>[website/package.json](../../../../sources/TabbyML__tabby/website/package.json)<br>[python/tabby-eval/modal/tabby_python_client/pyproject.toml](../../../../sources/TabbyML__tabby/python/tabby-eval/modal/tabby_python_client/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 138 | [MODEL_SPEC.md](../../../../sources/TabbyML__tabby/MODEL_SPEC.md)<br>[website/docs/administration/smtp/test-email.png](../../../../sources/TabbyML__tabby/website/docs/administration/smtp/test-email.png)<br>[website/blog/2023-11-13-model-evaluation/cceval.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/cceval.png)<br>[website/blog/2023-11-13-model-evaluation/human-eval-plus.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/human-eval-plus.png)<br>[website/blog/2023-11-13-model-evaluation/index.md](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/index.md)<br>[website/blog/2023-11-13-model-evaluation/repobench.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/repobench.png) |
| CI workflows | 19 | [ci/package-from-upstream.sh](../../../../sources/TabbyML__tabby/ci/package-from-upstream.sh)<br>[ci/prepare_build_environment.ps1](../../../../sources/TabbyML__tabby/ci/prepare_build_environment.ps1)<br>[ci/prepare_build_environment.sh](../../../../sources/TabbyML__tabby/ci/prepare_build_environment.sh)<br>[.github/workflows/ast-grep-lint.yml](../../../../sources/TabbyML__tabby/.github/workflows/ast-grep-lint.yml)<br>[.github/workflows/autofix-pnpm.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-pnpm.yml)<br>[.github/workflows/autofix-python.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-python.yml) |
| Containers / deploy | 6 | [website/docs/quick-start/installation/docker-compose.mdx](../../../../sources/TabbyML__tabby/website/docs/quick-start/installation/docker-compose.mdx)<br>[website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml](../../../../sources/TabbyML__tabby/website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml)<br>[experimental/deploy/Caddyfile](../../../../sources/TabbyML__tabby/experimental/deploy/Caddyfile)<br>[experimental/deploy/docker-compose.yaml](../../../../sources/TabbyML__tabby/experimental/deploy/docker-compose.yaml)<br>[docker/Dockerfile.cuda](../../../../sources/TabbyML__tabby/docker/Dockerfile.cuda)<br>[docker/Dockerfile.rocm](../../../../sources/TabbyML__tabby/docker/Dockerfile.rocm) |
| Security / policy | 62 | [website/docs/administration/sso/ldap/ldap-with-oauth.png](../../../../sources/TabbyML__tabby/website/docs/administration/sso/ldap/ldap-with-oauth.png)<br>[rules/only-dao-and-policy-can-depend-tabby-db.yml](../../../../sources/TabbyML__tabby/rules/only-dao-and-policy-can-depend-tabby-db.yml)<br>[ee/tabby-webserver/ui/auth/reset-password.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/reset-password.html)<br>[ee/tabby-webserver/ui/auth/reset-password.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/reset-password.txt)<br>[ee/tabby-webserver/ui/auth/signin.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signin.html)<br>[ee/tabby-webserver/ui/auth/signin.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signin.txt) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `website/docs/references/cloud-deployment/hugging-face/agent-config.png`, `website/docs/administration/context/code-browser-entry.png`, `website/docs/administration/context/code-browser.png`.
2. Trace execution through entrypoints: `python/tabby-loadtest/server.py`, `ee/tabby-ui/app/components/main.tsx`, `crates/tabby-inference/src/lib.rs`.
3. Map agent/tool runtime through: `website/docs/references/cloud-deployment/hugging-face/agent-config.png`, `website/docs/administration/context/code-browser-entry.png`, `website/docs/administration/context/code-browser.png`.
4. Inspect retrieval/memory/indexing through: `website/src/pages/index.js`, `website/src/pages/index.module.css`, `website/src/components/Monaco/index.js`.
5. Verify behavior through test/eval files: `MODEL_SPEC.md`, `website/docs/administration/smtp/test-email.png`, `website/blog/2023-11-13-model-evaluation/cceval.png`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2093 files, 485 directories.. 핵심 구조 신호는 Rust, package.json, Cargo.toml, Makefile, README.md, LICENSE이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
