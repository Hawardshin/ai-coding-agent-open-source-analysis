# plandex-ai/plandex 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/plandex-ai__plandex |
| remote | https://github.com/plandex-ai/plandex.git |
| HEAD | e2d7720 (2025-10-03) link to cloud wind down post |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 687 |
| dirs | 99 |
| stack | Node/TypeScript/JavaScript, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Smart context management that works in big projects`, `Tight control or full autonomy—it's up to you`, `Tools that help you get production-ready results`, `Dev-friendly, easy to install`, `Workflow  🔄`, `Examples  🎥`, `Install  📥`, `Hosting  ⚖️`, `Provider keys  🔑`, `Claude Pro/Max subscription  🖇️`, `Get started  🚀`, `Docs  🛠️`, `[👉  Full documentation.](https://docs.plandex.ai/)`, `Discussion and discord  💬`, `Follow and subscribe`, `Contributors  👥`

> <h1 align="center" <a href="https //plandex.ai" <picture <source media="(prefers color scheme dark)" srcset="images/plandex logo dark v2.png"/ <source media="(prefers color scheme light)" srcset="images/plandex logo light v2.png"/ <img width="400" src="images/plandex logo dark bg v2.png"/ </a <br / </h1 <br / <div align="center" <p align="center" <! Call to Action Links <a href=" install" <b 30 Second Install</b </a · <a href="https //plandex.ai" <b Website</b </a · <a href="https //docs.plandex.ai/" <b Docs</b </a · <a href=" examples " <b Examples</b </a · <a href="https //docs.plandex.ai/hosting/self hosting/local mode quickstart" <b Local Self Hosted Mode</b </a </p <br </div <p align="center" <! Badges <a href="https //github.com/plandex ai/plandex/pulls" <img src="https //img.shields.io/badge/PRs welcome brightgreen.svg" alt="PRs Welcome" / </a <a href="https //github.com/plandex a

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| app | dir |
| docs | dir |
| images | dir |
| LICENSE | file |
| plans | dir |
| README.md | file |
| releases | dir |
| scripts | dir |
| test | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| app/ | 467 |
| releases/ | 81 |
| docs/ | 59 |
| test/ | 59 |
| images/ | 10 |
| (root) | 5 |
| plans/ | 4 |
| .github/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| app/ | 467 | preferred |
| docs/ | 59 | preferred |
| test/ | 59 | preferred |
| scripts/ | 1 | preferred |
| app/server/ | 266 | large |
| app/cli/ | 148 | large |
| releases/ | 81 | large |
| app/server/model/ | 63 | large |
| app/cli/cmd/ | 52 | large |
| app/server/syntax/ | 52 | large |
| app/server/migrations/ | 50 | large |
| app/shared/ | 38 | large |
| docs/docs/ | 36 | large |
| releases/server/ | 36 | large |
| app/server/db/ | 35 | large |
| releases/server/versions/ | 35 | large |
| releases/cli/ | 34 | large |
| releases/cli/versions/ | 33 | large |
| app/cli/lib/ | 28 | large |
| test/evals/ | 27 | large |
| test/evals/promptfoo-poc/ | 27 | large |
| app/server/handlers/ | 25 | large |
| app/server/types/ | 21 | large |
| app/cli/schema/ | 13 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `app/cli/go.mod`
- `app/docker-compose.yml`
- `app/server/Dockerfile`
- `app/server/go.mod`
- `app/server/syntax/file_map/cli/go.mod`
- `app/shared/go.mod`
- `docs/package.json`
- `docs/tsconfig.json`
- `test/project/react-redux-foobar/package.json`
- `test/project/react-redux-foobar/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs/package.json | docs | docusaurus, start, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids, typecheck | @docusaurus/core, @docusaurus/plugin-client-redirects, @docusaurus/preset-classic, @docusaurus/theme-search-algolia, @mdx-js/react, clsx, docusaurus-lunr-search, prism-react-renderer, react, react-dom |
| test/project/react-redux-foobar/package.json | react-redux-foobar | start, build, test, eject | @reduxjs/toolkit, react, react-dom, react-redux, react-scripts, typescript |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| app/cli/go.mod | plandex-cli | 1.23.3 |
| app/server/go.mod | plandex-server | 1.23.3 |
| app/server/syntax/file_map/cli/go.mod | mapper | 1.23.3 |
| app/shared/go.mod | plandex-shared | 1.23.3 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/.gitignore`
- `docs/README.md`
- `docs/babel.config.js`
- `docs/blog/2019-05-28-first-blog-post.md`
- `docs/blog/2019-05-29-long-blog-post.md`
- `docs/blog/2021-08-01-mdx-blog-post.mdx`
- `docs/blog/2021-08-26-welcome/docusaurus-plushie-banner.jpeg`
- `docs/blog/2021-08-26-welcome/index.md`
- `docs/blog/authors.yml`
- `docs/blog/tags.yml`
- `docs/docs/cli-reference.md`
- `docs/docs/core-concepts/_category_.json`
- `docs/docs/core-concepts/autonomy.md`
- `docs/docs/core-concepts/background-tasks.md`
- `docs/docs/core-concepts/branches.md`
- `docs/docs/core-concepts/configuration.md`
- `docs/docs/core-concepts/context-management.md`
- `docs/docs/core-concepts/conversations.md`
- `docs/docs/core-concepts/execution-and-debugging.md`
- `docs/docs/core-concepts/orgs.md`
- `docs/docs/core-concepts/plans.md`
- `docs/docs/core-concepts/prompts.md`
- `docs/docs/core-concepts/reviewing-changes.md`
- `docs/docs/core-concepts/version-control.md`
- `docs/docs/development.md`
- `docs/docs/environment-variables.md`
- `docs/docs/hosting/_category_.json`
- `docs/docs/hosting/cloud.md`
- `docs/docs/hosting/self-hosting/_category_.json`
- `docs/docs/hosting/self-hosting/advanced-self-hosting.md`
- `docs/docs/hosting/self-hosting/local-mode-quickstart.md`
- `docs/docs/install.md`
- `docs/docs/models/_category_.json`
- `docs/docs/models/built-in/_category_.json`
- `docs/docs/models/built-in/built-in-models.md`
- `docs/docs/models/built-in/built-in-packs.md`
- `docs/docs/models/claude-subscription.md`
- `docs/docs/models/custom-models.md`
- `docs/docs/models/model-providers.md`
- `docs/docs/models/model-settings.md`
- `docs/docs/models/models-overview.md`
- `docs/docs/models/ollama.md`
- `docs/docs/models/roles.md`
- `docs/docs/quick-start.md`
- `docs/docs/repl.md`
- `docs/docs/security.md`
- `docs/docusaurus.config.ts`
- `docs/package-lock.json`
- `docs/package.json`
- ... 12 more

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `docs/docs/core-concepts/background-tasks.md`
- `test/evals/promptfoo-poc/templates/provider.template.yml`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/_test_apply.sh`
- `test/error-test.html`
- `test/evals/promptfoo-poc/README.md`
- `test/evals/promptfoo-poc/evals.md`
- `test/evals/promptfoo-poc/fix/assets/removal/changes.md`
- `test/evals/promptfoo-poc/fix/assets/removal/post_build.go`
- `test/evals/promptfoo-poc/fix/assets/removal/problems.txt`
- `test/evals/promptfoo-poc/fix/assets/shared/pre_build.go`
- `test/evals/promptfoo-poc/fix/fix.config.properties`
- `test/evals/promptfoo-poc/fix/fix.parameters.json`
- `test/evals/promptfoo-poc/fix/fix.prompt.txt`
- `test/evals/promptfoo-poc/fix/fix.provider.yml`
- `test/evals/promptfoo-poc/fix/promptfooconfig.yaml`
- `test/evals/promptfoo-poc/fix/tests/fix.test.yml`
- `test/evals/promptfoo-poc/templates/provider.template.yml`
- `test/evals/promptfoo-poc/verify/assets/removal/changes.md`
- `test/evals/promptfoo-poc/verify/assets/removal/diff.txt`
- `test/evals/promptfoo-poc/verify/assets/removal/post_build.go`
- `test/evals/promptfoo-poc/verify/assets/shared/pre_build.go`
- `test/evals/promptfoo-poc/verify/assets/valid/changes.md`
- `test/evals/promptfoo-poc/verify/assets/valid/diff.txt`
- `test/evals/promptfoo-poc/verify/assets/valid/post_build.go`
- `test/evals/promptfoo-poc/verify/promptfooconfig.yaml`
- `test/evals/promptfoo-poc/verify/tests/removal.test.yml`
- `test/evals/promptfoo-poc/verify/tests/validate.test.yml`
- `test/evals/promptfoo-poc/verify/verify.config.properties`
- `test/evals/promptfoo-poc/verify/verify.parameters.json`
- `test/evals/promptfoo-poc/verify/verify.prompt.txt`
- `test/evals/promptfoo-poc/verify/verify.provider.yml`
- `test/plan_deletion_test.sh`
- `test/pong/.gitignore`
- `test/pong/Makefile`
- `test/pong/README.md`
- `test/pong/ball.c`
- `test/pong/ball.h`
- `test/pong/install_dependencies.sh`
- `test/pong/main.c`
- `test/pong/paddle.c`
- `test/pong/paddle.h`
- `test/pong/prompt.txt`
- `test/pong/render.c`
- `test/pong/render.h`
- `test/project/react-redux-foobar/action.ts`
- `test/project/react-redux-foobar/component.ts`
- `test/project/react-redux-foobar/lib/constants.ts`
- `test/project/react-redux-foobar/lib/utils.ts`
- `test/project/react-redux-foobar/package.json`
- `test/project/react-redux-foobar/reducer.ts`
- `test/project/react-redux-foobar/tests/action.test.ts`
- `test/project/react-redux-foobar/tests/component.test.ts`
- `test/project/react-redux-foobar/tsconfig.json`
- `test/smoke_test.sh`
- `test/test_custom_models.sh`
- `test/test_prompts/aws-infra.txt`
- `test/test_prompts/pong.txt`
- `test/test_prompts/robust-logging.txt`
- `test/test_prompts/stripe-plan.txt`
- `test/test_prompts/tic-tac-toe.txt`
- `test/test_utils.sh`

### CI/Docker 후보

- `.github/workflows/docker-publish.yml`
- `app/docker-compose.yml`
- `app/server/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 337 |
| .md | 126 |
| .sql | 50 |
| .json | 26 |
| .txt | 19 |
| .sh | 16 |
| .png | 15 |
| .gif | 10 |
| .ts | 10 |
| .yml | 10 |
| .gitignore | 6 |
| .c | 5 |
| .mod | 4 |
| .sum | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `app/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `app/server/ 내부 책임 분리`
- `docs/docs/core-concepts/background-tasks.md 스펙/명령 의미`
- `test/evals/promptfoo-poc/templates/provider.template.yml 스펙/명령 의미`
- `app/cli/go.mod 실행 스크립트와 패키지 경계`
- `app/docker-compose.yml 실행 스크립트와 패키지 경계`
- `app/server/Dockerfile 실행 스크립트와 패키지 경계`
- `app/server/go.mod 실행 스크립트와 패키지 경계`
- `app/server/syntax/file_map/cli/go.mod 실행 스크립트와 패키지 경계`

