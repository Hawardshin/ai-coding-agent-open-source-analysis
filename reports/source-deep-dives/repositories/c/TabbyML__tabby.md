# TabbyML/tabby 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 2093 files, 485 directories.

## 요약

- 조사 단위: `sources/TabbyML__tabby` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,081 files, 483 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=website/docs/references/cloud-deployment/hugging-face/agent-config.png, website/docs/administration/context/code-browser-entry.png, website/docs/administration/context/code-browser.png이고, 의존성 단서는 openai, ollama, llama, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | TabbyML/tabby |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 33609 |
| Forks | 1758 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/TabbyML__tabby](../../../../sources/TabbyML__tabby) |
| 기존 보고서 | [reports/global-trending/repositories/TabbyML__tabby.md](../../../global-trending/repositories/TabbyML__tabby.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2081 / 483 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .changes, .github, .tmuxinator, ci, clients, crates, docker, ee, experimental, python, rules, website |
| 상위 확장자 | .tsx: 299, .rs: 272, .ts: 265, .js: 167, .png: 145, .md: 135, .sql: 105, .java: 93, .kt: 91, .py: 70, .html: 51, .toml: 50 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 20 | [python/tabby-loadtest/server.py](../../../../sources/TabbyML__tabby/python/tabby-loadtest/server.py)<br>[ee/tabby-ui/app/components/main.tsx](../../../../sources/TabbyML__tabby/ee/tabby-ui/app/components/main.tsx)<br>[crates/tabby-inference/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-inference/src/lib.rs)<br>[crates/tabby-index-cli/src/main.rs](../../../../sources/TabbyML__tabby/crates/tabby-index-cli/src/main.rs)<br>[crates/tabby-index/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-index/src/lib.rs)<br>[crates/tabby-git/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-git/src/lib.rs)<br>[crates/tabby-download/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-download/src/lib.rs)<br>[crates/tabby-crawler/src/lib.rs](../../../../sources/TabbyML__tabby/crates/tabby-crawler/src/lib.rs) |
| agentRuntime | 43 | [website/docs/references/cloud-deployment/hugging-face/agent-config.png](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/hugging-face/agent-config.png)<br>[website/docs/administration/context/code-browser-entry.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/code-browser-entry.png)<br>[website/docs/administration/context/code-browser.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/code-browser.png)<br>[website/docs/administration/context/context-providers.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/context-providers.png)<br>[website/docs/administration/context/document.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/document.png)<br>[website/docs/administration/context/git.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/git.png)<br>[website/docs/administration/context/github-gitlab.png](../../../../sources/TabbyML__tabby/website/docs/administration/context/github-gitlab.png)<br>[website/docs/administration/context/index.mdx](../../../../sources/TabbyML__tabby/website/docs/administration/context/index.mdx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 149 | [website/src/pages/index.js](../../../../sources/TabbyML__tabby/website/src/pages/index.js)<br>[website/src/pages/index.module.css](../../../../sources/TabbyML__tabby/website/src/pages/index.module.css)<br>[website/src/components/Monaco/index.js](../../../../sources/TabbyML__tabby/website/src/components/Monaco/index.js)<br>[website/src/components/HomepageFeatures/index.js](../../../../sources/TabbyML__tabby/website/src/components/HomepageFeatures/index.js)<br>[website/docs/references/cloud-deployment/skypilot/index.md](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/skypilot/index.md)<br>[website/docs/references/cloud-deployment/modal/index.md](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/modal/index.md)<br>[website/docs/references/cloud-deployment/hugging-face/index.md](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/hugging-face/index.md)<br>[website/docs/references/cloud-deployment/bentoml/index.md](../../../../sources/TabbyML__tabby/website/docs/references/cloud-deployment/bentoml/index.md) |
| spec | 4 | [MODEL_SPEC.md](../../../../sources/TabbyML__tabby/MODEL_SPEC.md)<br>[website/docs/roadmap.mdx](../../../../sources/TabbyML__tabby/website/docs/roadmap.mdx)<br>[experimental/prompt-rewrite-eval/requirements.txt](../../../../sources/TabbyML__tabby/experimental/prompt-rewrite-eval/requirements.txt)<br>[ee/tabby-webserver/docs/api_spec.md](../../../../sources/TabbyML__tabby/ee/tabby-webserver/docs/api_spec.md) |
| eval | 138 | [MODEL_SPEC.md](../../../../sources/TabbyML__tabby/MODEL_SPEC.md)<br>[website/docs/administration/smtp/test-email.png](../../../../sources/TabbyML__tabby/website/docs/administration/smtp/test-email.png)<br>[website/blog/2023-11-13-model-evaluation/cceval.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/cceval.png)<br>[website/blog/2023-11-13-model-evaluation/human-eval-plus.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/human-eval-plus.png)<br>[website/blog/2023-11-13-model-evaluation/index.md](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/index.md)<br>[website/blog/2023-11-13-model-evaluation/repobench.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/repobench.png)<br>[website/blog/2023-11-13-model-evaluation/repocoder.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/repocoder.png)<br>[website/blog/2023-11-13-model-evaluation/twitter-eval.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/twitter-eval.png) |
| security | 62 | [website/docs/administration/sso/ldap/ldap-with-oauth.png](../../../../sources/TabbyML__tabby/website/docs/administration/sso/ldap/ldap-with-oauth.png)<br>[rules/only-dao-and-policy-can-depend-tabby-db.yml](../../../../sources/TabbyML__tabby/rules/only-dao-and-policy-can-depend-tabby-db.yml)<br>[ee/tabby-webserver/ui/auth/reset-password.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/reset-password.html)<br>[ee/tabby-webserver/ui/auth/reset-password.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/reset-password.txt)<br>[ee/tabby-webserver/ui/auth/signin.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signin.html)<br>[ee/tabby-webserver/ui/auth/signin.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signin.txt)<br>[ee/tabby-webserver/ui/auth/signup.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signup.html)<br>[ee/tabby-webserver/ui/auth/signup.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signup.txt) |
| ci | 19 | [ci/package-from-upstream.sh](../../../../sources/TabbyML__tabby/ci/package-from-upstream.sh)<br>[ci/prepare_build_environment.ps1](../../../../sources/TabbyML__tabby/ci/prepare_build_environment.ps1)<br>[ci/prepare_build_environment.sh](../../../../sources/TabbyML__tabby/ci/prepare_build_environment.sh)<br>[.github/workflows/ast-grep-lint.yml](../../../../sources/TabbyML__tabby/.github/workflows/ast-grep-lint.yml)<br>[.github/workflows/autofix-pnpm.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-pnpm.yml)<br>[.github/workflows/autofix-python.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-python.yml)<br>[.github/workflows/autofix-rust.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-rust.yml)<br>[.github/workflows/bloat.yml](../../../../sources/TabbyML__tabby/.github/workflows/bloat.yml) |
| container | 6 | [website/docs/quick-start/installation/docker-compose.mdx](../../../../sources/TabbyML__tabby/website/docs/quick-start/installation/docker-compose.mdx)<br>[website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml](../../../../sources/TabbyML__tabby/website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml)<br>[experimental/deploy/Caddyfile](../../../../sources/TabbyML__tabby/experimental/deploy/Caddyfile)<br>[experimental/deploy/docker-compose.yaml](../../../../sources/TabbyML__tabby/experimental/deploy/docker-compose.yaml)<br>[docker/Dockerfile.cuda](../../../../sources/TabbyML__tabby/docker/Dockerfile.cuda)<br>[docker/Dockerfile.rocm](../../../../sources/TabbyML__tabby/docker/Dockerfile.rocm) |
| instruction | 0 | 명확하지 않음 |
| docs | 270 | [README-ja.md](../../../../sources/TabbyML__tabby/README-ja.md)<br>[README-zh.md](../../../../sources/TabbyML__tabby/README-zh.md)<br>[README.md](../../../../sources/TabbyML__tabby/README.md)<br>[website/.gitattributes](../../../../sources/TabbyML__tabby/website/.gitattributes)<br>[website/.gitignore](../../../../sources/TabbyML__tabby/website/.gitignore)<br>[website/babel.config.js](../../../../sources/TabbyML__tabby/website/babel.config.js)<br>[website/docusaurus.config.js](../../../../sources/TabbyML__tabby/website/docusaurus.config.js)<br>[website/package.json](../../../../sources/TabbyML__tabby/website/package.json) |
| config | 42 | [Cargo.lock](../../../../sources/TabbyML__tabby/Cargo.lock)<br>[Cargo.toml](../../../../sources/TabbyML__tabby/Cargo.toml)<br>[Makefile](../../../../sources/TabbyML__tabby/Makefile)<br>[package.json](../../../../sources/TabbyML__tabby/package.json)<br>[pnpm-workspace.yaml](../../../../sources/TabbyML__tabby/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/TabbyML__tabby/turbo.json)<br>[website/package.json](../../../../sources/TabbyML__tabby/website/package.json)<br>[python/tabby-eval/modal/tabby_python_client/pyproject.toml](../../../../sources/TabbyML__tabby/python/tabby-eval/modal/tabby_python_client/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 138 | [MODEL_SPEC.md](../../../../sources/TabbyML__tabby/MODEL_SPEC.md)<br>[website/docs/administration/smtp/test-email.png](../../../../sources/TabbyML__tabby/website/docs/administration/smtp/test-email.png)<br>[website/blog/2023-11-13-model-evaluation/cceval.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/cceval.png)<br>[website/blog/2023-11-13-model-evaluation/human-eval-plus.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/human-eval-plus.png)<br>[website/blog/2023-11-13-model-evaluation/index.md](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/index.md)<br>[website/blog/2023-11-13-model-evaluation/repobench.png](../../../../sources/TabbyML__tabby/website/blog/2023-11-13-model-evaluation/repobench.png) |
| CI workflow | 19 | [ci/package-from-upstream.sh](../../../../sources/TabbyML__tabby/ci/package-from-upstream.sh)<br>[ci/prepare_build_environment.ps1](../../../../sources/TabbyML__tabby/ci/prepare_build_environment.ps1)<br>[ci/prepare_build_environment.sh](../../../../sources/TabbyML__tabby/ci/prepare_build_environment.sh)<br>[.github/workflows/ast-grep-lint.yml](../../../../sources/TabbyML__tabby/.github/workflows/ast-grep-lint.yml)<br>[.github/workflows/autofix-pnpm.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-pnpm.yml)<br>[.github/workflows/autofix-python.yml](../../../../sources/TabbyML__tabby/.github/workflows/autofix-python.yml) |
| 컨테이너/배포 | 6 | [website/docs/quick-start/installation/docker-compose.mdx](../../../../sources/TabbyML__tabby/website/docs/quick-start/installation/docker-compose.mdx)<br>[website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml](../../../../sources/TabbyML__tabby/website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml)<br>[experimental/deploy/Caddyfile](../../../../sources/TabbyML__tabby/experimental/deploy/Caddyfile)<br>[experimental/deploy/docker-compose.yaml](../../../../sources/TabbyML__tabby/experimental/deploy/docker-compose.yaml)<br>[docker/Dockerfile.cuda](../../../../sources/TabbyML__tabby/docker/Dockerfile.cuda)<br>[docker/Dockerfile.rocm](../../../../sources/TabbyML__tabby/docker/Dockerfile.rocm) |
| 보안/정책 | 62 | [website/docs/administration/sso/ldap/ldap-with-oauth.png](../../../../sources/TabbyML__tabby/website/docs/administration/sso/ldap/ldap-with-oauth.png)<br>[rules/only-dao-and-policy-can-depend-tabby-db.yml](../../../../sources/TabbyML__tabby/rules/only-dao-and-policy-can-depend-tabby-db.yml)<br>[ee/tabby-webserver/ui/auth/reset-password.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/reset-password.html)<br>[ee/tabby-webserver/ui/auth/reset-password.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/reset-password.txt)<br>[ee/tabby-webserver/ui/auth/signin.html](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signin.html)<br>[ee/tabby-webserver/ui/auth/signin.txt](../../../../sources/TabbyML__tabby/ee/tabby-webserver/ui/auth/signin.txt) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `website/docs/references/cloud-deployment/hugging-face/agent-config.png`, `website/docs/administration/context/code-browser-entry.png`, `website/docs/administration/context/code-browser.png`.
2. entrypoint를 따라 실행 흐름 확인: `python/tabby-loadtest/server.py`, `ee/tabby-ui/app/components/main.tsx`, `crates/tabby-inference/src/lib.rs`.
3. agent/tool runtime 매핑: `website/docs/references/cloud-deployment/hugging-face/agent-config.png`, `website/docs/administration/context/code-browser-entry.png`, `website/docs/administration/context/code-browser.png`.
4. retrieval/memory/indexing 확인: `website/src/pages/index.js`, `website/src/pages/index.module.css`, `website/src/components/Monaco/index.js`.
5. test/eval 파일로 동작 검증: `MODEL_SPEC.md`, `website/docs/administration/smtp/test-email.png`, `website/blog/2023-11-13-model-evaluation/cceval.png`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2093 files, 485 directories.. 핵심 구조 신호는 Rust, package.json, Cargo.toml, Makefile, README.md, LICENSE이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
