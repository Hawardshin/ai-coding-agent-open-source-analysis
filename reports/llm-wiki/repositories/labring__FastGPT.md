# labring/FastGPT 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/labring__FastGPT |
| remote | https://github.com/labring/FastGPT |
| HEAD | ffa1037 (2026-06-17) refactor: align system tool JSON schema codec (#7116) |
| branch | main |
| groups | llm-wiki-100 |
| files | 5030 |
| dirs | 1623 |
| stack | Node/TypeScript/JavaScript, Python, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `FastGPT`, `快速开始`, `输入命令拉取配置文件`, `启动`, `🛸 使用方式`, `💡 核心功能`, `💪 我们的项目 & 链接`, `🌿 第三方生态`, `🏘️ 社区交流群`, `🤝 贡献者`, `🌟 Star History`, `使用协议`

> <div align="center" <a href="https //fastgpt.io/" <img src="/.github/imgs/logo.svg" width="120" height="120" alt="fastgpt logo" </a FastGPT <p align="center" <a href="./README en.md" English</a <a href="./README.md" 简体中文</a <a href="./README id.md" Bahasa Indonesia</a <a href="./README th.md" ไทย</a <a href="./README vi.md" Tiếng Việt</a <a href="./README ja.md" 日本語</a </p FastGPT 是一个 AI Agent 构建平台，提供开箱即用的数据处理、模型调用等能力，同时可以通过 Flow 可视化进行工作流编排，从而实现复杂的应用场景！ </div <p align="center" <a href="https //fastgpt.io/" <img height="21" src="https //img.shields.io/badge/在线使用 d4eaf7?style=flat square&logo=spoj&logoColor=7d09f1" alt="cloud" </a <a href="https //doc.fastgpt.io/guide/getting started" <img height="21" src="https //img.shields.io/badge/相关文档 7d09f1?style=flat square" alt="document" </a <a href="https //doc.fastgpt.io/self host/dev" <img height="21" src="https //img.shields.io/badge/本地开发 %23d

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .husky | dir |
| .imgbotconfig | file |
| .npmrc | file |
| .prettierignore | file |
| .prettierrc.js | file |
| .vscode | dir |
| AGENTS.md | file |
| bin | dir |
| deploy | dir |
| dev.md | file |
| document | dir |
| eslint.config.mjs | file |
| LICENSE | file |
| lint-staged.config.mjs | file |
| Makefile | file |
| package.json | file |
| packages | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| pro | dir |
| projects | dir |
| README_en.md | file |
| README_id.md | file |
| README_ja.md | file |
| README_th.md | file |
| README_vi.md | file |
| README.md | file |
| scripts | dir |
| sdk | dir |
| SECURITY.md | file |
| test | dir |
| tsconfig.json | file |
| turbo.json | file |
| vitest.config.mts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 1969 |
| projects/ | 1753 |
| document/ | 941 |
| sdk/ | 109 |
| .agents/ | 84 |
| deploy/ | 79 |
| .github/ | 32 |
| (root) | 26 |
| test/ | 25 |
| .vscode/ | 5 |
| scripts/ | 5 |
| .husky/ | 1 |
| bin/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 1969 | preferred |
| test/ | 25 | preferred |
| scripts/ | 5 | preferred |
| projects/ | 1753 | large |
| projects/app/ | 1602 | large |
| projects/app/src/ | 1189 | large |
| document/ | 941 | large |
| packages/service/ | 788 | large |
| packages/web/ | 678 | large |
| packages/web/components/ | 566 | large |
| packages/global/ | 502 | large |
| document/public/ | 466 | large |
| document/public/imgs/ | 420 | large |
| document/content/ | 406 | large |
| packages/service/core/ | 313 | large |
| document/content/self-host/ | 297 | large |
| projects/app/public/ | 275 | large |
| packages/service/test/ | 226 | large |
| packages/global/core/ | 154 | large |
| packages/service/common/ | 139 | large |
| packages/global/openapi/ | 134 | large |
| projects/app/test/ | 127 | large |
| sdk/ | 109 | large |
| .agents/ | 84 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `deploy/dev/docker-compose.yml`
- `document/Dockerfile`
- `document/package.json`
- `document/tsconfig.json`
- `package.json`
- `packages/global/package.json`
- `packages/global/test/tsconfig.json`
- `packages/global/tsconfig.json`
- `packages/service/package.json`
- `packages/service/test/integrations/vectorDB/yml/docker-compose.yml`
- `packages/service/test/tsconfig.json`
- `packages/service/tsconfig.json`
- `packages/web/package.json`
- `packages/web/tsconfig.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `projects/agent-sandbox-proxy/Cargo.toml`
- `projects/agent-sandbox-proxy/Dockerfile`
- `projects/agent-sandbox/Dockerfile`
- `projects/app/Dockerfile`
- `projects/app/package.json`
- `projects/app/test/tsconfig.json`
- `projects/app/tsconfig.json`
- `projects/code-sandbox/Dockerfile`
- `projects/code-sandbox/package.json`
- `projects/code-sandbox/requirements.txt`
- `projects/code-sandbox/tsconfig.json`
- `projects/fastgpt-ide-agent/Cargo.toml`
- `projects/fastgpt-ide-agent/Dockerfile`
- `projects/marketplace/Dockerfile`
- `projects/marketplace/package.json`
- `projects/marketplace/test/tsconfig.json`
- `projects/marketplace/tsconfig.json`
- `projects/mcp_server/Dockerfile`
- `projects/mcp_server/package.json`
- `projects/mcp_server/tsconfig.json`
- `projects/volume-manager/Dockerfile`
- `projects/volume-manager/package.json`
- `projects/volume-manager/tsconfig.json`
- `scripts/icon/package.json`
- `sdk/otel/package.json`
- `sdk/otel/tsconfig.json`
- `sdk/sandbox-adapter/package.json`
- `sdk/sandbox-adapter/tsconfig.json`
- `sdk/storage/package.json`
- `sdk/storage/tsconfig.json`
- `test/tsconfig.json`
- `tsconfig.json`
- `turbo.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| document/package.json | @fastgpt/document | build, dev, start, postinstall, format-doc, lint-doc:text, initDocTime, initDocToc, checkDocRefs, removeInvalidImg | @orama/orama, @orama/tokenizers, @radix-ui/react-accordion, class-variance-authority, fast-glob, fs-extra, fumadocs-core, fumadocs-mdx, fumadocs-ui, gray-matter, lucide-react, next, react, react-dom |
| package.json | fastgpt | dev:pro, prepare, gen:theme-typings, gen:deploy, postinstall, initIcon, previewIcon, lint, create:i18n, clean:unused:pro, clean:unused:pro:write, test, test:all, test:repo, test:workspace, test:app |  |
| packages/global/package.json | @fastgpt/global | test, test:watch | @apidevtools/swagger-parser, @bany/curl-to-json, @fastgpt-plugin/sdk-client, axios, ipaddr.js, cron-parser, dayjs, encoding, js-yaml, jschardet, json5, lodash, nanoid, next |
| packages/service/package.json | @fastgpt/service | test, test:benchmark, test:watch, test:integration, test:integration:watch | @apidevtools/json-schema-ref-parser, @fastgpt-sdk/otel, @fastgpt-sdk/sandbox-adapter, @fastgpt-sdk/storage, @fastgpt/global, @llamaindex/liteparse, @mariozechner/pi-agent-core, @mariozechner/pi-ai, @maxmind/geoip2-node, @modelcontextprotocol/sdk, @node-rs/jieba, @opentelemetry/api, @t3-oss/env-core, @xmldom/xmldom |
| packages/web/package.json | @fastgpt/web |  | @chakra-ui/anatomy, @chakra-ui/icons, @chakra-ui/next-js, @chakra-ui/react, @chakra-ui/styled-system, @chakra-ui/system, @emotion/react, @emotion/styled, @fastgpt/global, @fingerprintjs/fingerprintjs, @lexical/code, @lexical/list, @lexical/markdown, @lexical/react |
| projects/app/package.json | @fastgpt/app | dev, dev:pro, build, build:webpack, analyze, start, test, test:watch, build:workers, typecheck, lint, build:workers:watch | @chakra-ui/anatomy, @chakra-ui/icons, @chakra-ui/next-js, @chakra-ui/react, @chakra-ui/styled-system, @chakra-ui/system, @dagrejs/dagre, @dnd-kit/core, @emotion/react, @emotion/styled, @fastgpt-sdk/otel, @fastgpt-sdk/sandbox-adapter, @fastgpt-sdk/storage, @fastgpt/global |
| projects/code-sandbox/package.json | @fastgpt/code-sandbox | dev, start, build, test, test:watch | @fastgpt-sdk/otel, @hono/node-server, @fastgpt/global, @t3-oss/env-core, acorn, acorn-walk, axios, crypto-js, dayjs, dotenv, hono, lodash, moment, qs |
| projects/marketplace/package.json | @fastgpt/marketplace | dev, build, start, lint, typecheck, test, test:watch | @chakra-ui/anatomy, @chakra-ui/icons, @chakra-ui/next-js, @chakra-ui/react, @chakra-ui/styled-system, @chakra-ui/system, @fastgpt/global, @fastgpt-sdk/otel, @t3-oss/env-core, @fastgpt-sdk/storage, @fastgpt/service, @fastgpt/web, axios, i18next |
| projects/mcp_server/package.json | @fastgpt/mcp_server | build, dev, start, mcp_test | @fastgpt/global, @fastgpt-sdk/otel, @modelcontextprotocol/sdk, @t3-oss/env-core, chalk, dayjs, dotenv, express, zod |
| projects/volume-manager/package.json | @fastgpt/volume-manager | dev, build, start, test | @hono/node-server, hono, undici, zod |
| scripts/icon/package.json | @fastgpt/icon | test | express |
| sdk/otel/package.json | @fastgpt-sdk/otel | build, dev, lint, test, prepublishOnly | @logtape/logtape, @logtape/pretty, @opentelemetry/api, @opentelemetry/api-logs, @opentelemetry/exporter-logs-otlp-http, @opentelemetry/exporter-metrics-otlp-http, @opentelemetry/exporter-trace-otlp-http, @opentelemetry/resources, @opentelemetry/sdk-logs, @opentelemetry/sdk-metrics, @opentelemetry/sdk-trace-base, @opentelemetry/sdk-trace-node, @opentelemetry/semantic-conventions |
| sdk/sandbox-adapter/package.json | @fastgpt-sdk/sandbox-adapter | build, dev, prepublishOnly, test | @alibaba-group/opensandbox, @e2b/code-interpreter |
| sdk/storage/package.json | @fastgpt-sdk/storage | build, dev, prepublishOnly | @aws-sdk/client-s3, @aws-sdk/lib-storage, @aws-sdk/s3-request-presigner, ali-oss, cos-nodejs-sdk-v5, es-toolkit, minio, vitest |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| projects/agent-sandbox-proxy/Cargo.toml | fastgpt-agent-sandbox-proxy | false |  |
| projects/fastgpt-ide-agent/Cargo.toml | fastgpt-ide-agent | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.agents/skills/doc/i18n/SKILL.md`
- `.agents/skills/support/permission/add-permission/reference/README.md`
- `README.md`
- `deploy/README.md`
- `deploy/helm/fastgpt/README.md`
- `deploy/helm/opensandbox/README.md`
- `deploy/helm/opensandbox/examples/README.md`
- `deploy/helm/opensandbox/scripts/README.md`
- `document/README.md`
- `document/components/docs/Alert.tsx`
- `document/components/docs/LocalizedLink.tsx`
- `document/components/docs/Redirect.tsx`
- `document/components/docs/Tabs.tsx`
- `document/components/docs/Video.tsx`
- `document/components/docs/categorySwitcher.tsx`
- `document/components/docs/feishuLogoDark.tsx`
- `document/components/docs/feishuLogoLIght.tsx`
- `document/components/docs/githubLogoDark.tsx`
- `document/components/docs/githubLogoLight.tsx`
- `document/components/docs/languageSwitcher.tsx`
- `document/components/docs/linkFastGPT.tsx`
- `document/components/docs/logo.tsx`
- `document/components/docs/logoDark.tsx`
- `document/components/docs/not-found.tsx`
- `document/components/docs/switcherDropdown.tsx`
- `packages/README.md`
- `packages/service/test/integrations/README.md`
- `packages/service/test/integrations/vectorDB/README.md`
- `projects/README.md`
- `projects/code-sandbox/README.md`
- `projects/marketplace/README.md`
- `projects/volume-manager/README.md`
- `sdk/otel/README.md`
- `sdk/sandbox-adapter/README.md`
- `sdk/storage/README.md`

### 에이전트 지침 후보

- `.agents/skills/core/ai/prompt_optimize/SKILL.md`
- `.agents/skills/core/workflow/deprecate_workflow_node/SKILL.md`
- `.agents/skills/doc/i18n/SKILL.md`
- `.agents/skills/support/permission/add-permission/SKILL.md`
- `.agents/skills/support/permission/add-permission/checklist.md`
- `.agents/skills/support/permission/add-permission/guides/full-integration.md`
- `.agents/skills/support/permission/add-permission/guides/quick-start.md`
- `.agents/skills/support/permission/add-permission/reference/README.md`
- `.agents/skills/support/permission/add-permission/reference/auth-function.md`
- `.agents/skills/support/permission/add-permission/reference/core-concepts.md`
- `.agents/skills/support/permission/add-permission/reference/inheritance.md`
- `.agents/skills/support/permission/add-permission/reference/permission-class.md`
- `.agents/skills/support/permission/add-permission/reference/pro-collaborator.md`
- `.agents/skills/support/permission/add-permission/reference/pro-owner-transfer.md`
- `.agents/skills/system/api-development/SKILL.md`
- `.agents/skills/system/pr-change-analysis/SKILL.md`
- `.agents/skills/system/pr-change-analysis/agents/openai.yaml`
- `.agents/skills/system/pr-review/SKILL.md`
- `.agents/skills/system/pr-review/backend-quality/error-handling.md`
- `.agents/skills/system/pr-review/backend-quality/performance.md`
- `.agents/skills/system/pr-review/backend-quality/security.md`
- `.agents/skills/system/pr-review/frontend-quality/react-performance.md`
- `.agents/skills/system/pr-review/frontend-quality/security.md`
- `.agents/skills/system/pr-review/frontend-quality/typescript.md`
- `.agents/skills/system/pr-review/style/db.md`
- `.agents/skills/system/pr-review/style/front.md`
- `.agents/skills/system/pr-review/style/logger.md`
- `.agents/skills/system/pr-review/style/package.md`
- `.agents/skills/system/pr-review/style/service-decoupling.md`
- `.agents/skills/system/test-case/SKILL.md`
- `.github/workflows/build-mcp-server.yml`
- `AGENTS.md`
- `document/public/imgs/associated_skills_vm.png`
- `document/public/imgs/create_import_skill.png`
- `document/public/imgs/mcp_server1.png`
- `document/public/imgs/mcp_server10.png`
- `document/public/imgs/mcp_server2.png`
- `document/public/imgs/mcp_server3.png`
- `document/public/imgs/mcp_server4.png`
- `document/public/imgs/mcp_server5.png`
- `document/public/imgs/mcp_server6.png`
- `document/public/imgs/mcp_server7.png`
- `document/public/imgs/mcp_server8.png`
- `document/public/imgs/mcp_server9.png`
- `document/public/imgs/mcp_tools1.png`
- `document/public/imgs/mcp_tools3.png`
- `document/public/imgs/mcp_tools4.png`
- `document/public/imgs/mcp_tools5.png`
- `document/public/imgs/mcp_tools6.png`
- `document/public/imgs/mcp_tools7.png`
- `document/public/imgs/mcp_tools8.png`
- `document/public/imgs/skill_list_intro.png`
- `packages/global/common/error/code/skill.ts`
- `packages/global/core/ai/skill/api.ts`
- `packages/global/core/ai/skill/collaborator.ts`
- `packages/global/core/ai/skill/constants.ts`
- `packages/global/core/ai/skill/type.ts`
- `packages/global/core/app/tool/mcpTool/type.ts`
- `packages/global/core/app/tool/mcpTool/utils.ts`
- `packages/global/openapi/core/ai/skill/api.ts`
- `packages/global/openapi/core/ai/skill/index.ts`
- `packages/global/openapi/core/app/mcpTools/api.ts`
- `packages/global/openapi/core/app/mcpTools/index.ts`
- `packages/global/openapi/support/mcpServer/api.ts`
- `packages/global/openapi/support/mcpServer/index.ts`
- `packages/global/support/mcp/type.ts`
- `packages/global/support/permission/skill/constant.ts`
- `packages/global/support/permission/skill/controller.schema.ts`
- `packages/global/support/permission/skill/controller.ts`
- `packages/global/test/core/app/tool/mcpTool/type.test.ts`
- `packages/global/test/core/app/tool/mcpTool/utils.test.ts`
- `packages/service/common/s3/sources/skill/global.d.ts`
- `packages/service/common/s3/sources/skill/index.ts`
- `packages/service/core/ai/skill/delete/index.ts`
- `packages/service/core/ai/skill/delete/processor.ts`
- `packages/service/core/ai/skill/edit/config.ts`
- `packages/service/core/ai/skill/edit/deploy.ts`
- `packages/service/core/ai/skill/edit/index.ts`
- `packages/service/core/ai/skill/edit/sandbox.ts`
- `packages/service/core/ai/skill/manage/create.ts`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/design/core/ai/agent-loop/requirements.md`
- `.agents/design/core/ai/agent-loop/technical-design.md`
- `.agents/design/core/ai/sandbox/technical-design.md`
- `.agents/design/core/workflow/parallel-node/design.md`
- `.agents/design/variable-update-type-ops/design.md`
- `.agents/skills/core/ai/prompt_optimize/SKILL.md`
- `.agents/skills/core/workflow/deprecate_workflow_node/SKILL.md`
- `.agents/skills/doc/i18n/SKILL.md`
- `.agents/skills/support/permission/add-permission/SKILL.md`
- `.agents/skills/support/permission/add-permission/checklist.md`
- `.agents/skills/support/permission/add-permission/guides/full-integration.md`
- `.agents/skills/support/permission/add-permission/guides/quick-start.md`
- `.agents/skills/support/permission/add-permission/reference/README.md`
- `.agents/skills/support/permission/add-permission/reference/auth-function.md`
- `.agents/skills/support/permission/add-permission/reference/core-concepts.md`
- `.agents/skills/support/permission/add-permission/reference/inheritance.md`
- `.agents/skills/support/permission/add-permission/reference/permission-class.md`
- `.agents/skills/support/permission/add-permission/reference/pro-collaborator.md`
- `.agents/skills/support/permission/add-permission/reference/pro-owner-transfer.md`
- `.agents/skills/system/api-development/SKILL.md`
- `.agents/skills/system/pr-change-analysis/SKILL.md`
- `.agents/skills/system/pr-change-analysis/agents/openai.yaml`
- `.agents/skills/system/pr-review/SKILL.md`
- `.agents/skills/system/pr-review/backend-quality/error-handling.md`
- `.agents/skills/system/pr-review/backend-quality/performance.md`
- `.agents/skills/system/pr-review/backend-quality/security.md`
- `.agents/skills/system/pr-review/frontend-quality/react-performance.md`
- `.agents/skills/system/pr-review/frontend-quality/security.md`
- `.agents/skills/system/pr-review/frontend-quality/typescript.md`
- `.agents/skills/system/pr-review/style/db.md`
- `.agents/skills/system/pr-review/style/front.md`
- `.agents/skills/system/pr-review/style/logger.md`
- `.agents/skills/system/pr-review/style/package.md`
- `.agents/skills/system/pr-review/style/service-decoupling.md`
- `.agents/skills/system/test-case/SKILL.md`
- `deploy/helm/fastgpt/templates/NOTES.txt`
- `deploy/helm/fastgpt/templates/_helpers.tpl`
- `deploy/helm/fastgpt/templates/configmap-config.yaml`
- `deploy/helm/fastgpt/templates/deployment.yaml`
- `deploy/helm/fastgpt/templates/hpa.yaml`
- `deploy/helm/fastgpt/templates/ingress.yaml`
- `deploy/helm/fastgpt/templates/secret-env.yaml`
- `deploy/helm/fastgpt/templates/service.yaml`
- `deploy/helm/fastgpt/templates/serviceaccount.yaml`
- `deploy/helm/fastgpt/templates/tests/test-connection.yaml`
- `deploy/helm/opensandbox/templates/NOTES.txt`
- `deploy/helm/opensandbox/templates/_helpers.tpl`
- `deploy/helm/opensandbox/templates/clusterrole.yaml`
- `deploy/helm/opensandbox/templates/clusterrolebinding.yaml`
- `deploy/helm/opensandbox/templates/deployment.yaml`
- `deploy/helm/opensandbox/templates/extra-roles.yaml`
- `deploy/helm/opensandbox/templates/leader-election-role.yaml`
- `deploy/helm/opensandbox/templates/leader-election-rolebinding.yaml`
- `deploy/helm/opensandbox/templates/metrics-rbac.yaml`
- `deploy/helm/opensandbox/templates/metrics-service.yaml`
- `deploy/helm/opensandbox/templates/poddisruptionbudget.yaml`
- `deploy/helm/opensandbox/templates/pools.yaml`
- `deploy/helm/opensandbox/templates/server-configmap.yaml`
- `deploy/helm/opensandbox/templates/server-deployment.yaml`
- `deploy/helm/opensandbox/templates/server-ingress.yaml`
- `deploy/helm/opensandbox/templates/server-service.yaml`
- `deploy/helm/opensandbox/templates/serviceaccount.yaml`
- `deploy/helm/opensandbox/templates/servicemonitor.yaml`
- `deploy/templates/docker-compose.dev.yml`
- `deploy/templates/vector/config.json`
- `deploy/templates/vector/milvus.config.txt`
- `deploy/templates/vector/milvus.txt`
- `deploy/templates/vector/ob.config.txt`
- `deploy/templates/vector/ob.extra.txt`
- `deploy/templates/vector/ob.txt`
- `deploy/templates/vector/opengauss.config.txt`
- `deploy/templates/vector/opengauss.txt`
- `deploy/templates/vector/pg.config.txt`
- `deploy/templates/vector/pg.txt`
- `deploy/templates/vector/seekdb.config.txt`
- `deploy/templates/vector/seekdb.txt`
- `deploy/templates/vector/zilliz.config.txt`
- `packages/service/core/app/templates/global.d.ts`
- `packages/service/core/app/templates/register.ts`
- `packages/service/core/app/templates/templateSchema.ts`
- `packages/service/core/app/templates/templateTypeSchema.ts`
- `packages/service/core/app/tool/DESIGN.md`
- `packages/service/support/invoke/DESIGN.md`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/CommonInputForm.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/DynamicInputs/index.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/FileSelect.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/Reference.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/SelectApp.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/SelectDataset.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/SelectDatasetParams.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/SettingLLMModel.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/SettingQuotePrompt.tsx`
- `projects/app/src/pageComponents/app/detail/WorkflowComponents/Flow/nodes/render/RenderInput/templates/Slider.tsx`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `deploy/helm/fastgpt/templates/tests/test-connection.yaml`
- `packages/global/test/common/axios/utils.test.ts`
- `packages/global/test/common/error/s3.test.ts`
- `packages/global/test/common/error/utils.test.ts`
- `packages/global/test/common/file/icon.test.ts`
- `packages/global/test/common/file/tool.test.ts`
- `packages/global/test/common/file/utils.test.ts`
- `packages/global/test/common/i18n/boundary.test.ts`
- `packages/global/test/common/i18n/utils.test.ts`
- `packages/global/test/common/math/date.test.ts`
- `packages/global/test/common/math/tools.test.ts`
- `packages/global/test/common/parentFolder/depth.test.ts`
- `packages/global/test/common/parentFolder/utils.test.ts`
- `packages/global/test/common/secret/utils.test.ts`
- `packages/global/test/common/string/http.test.ts`
- `packages/global/test/common/string/markdown.test.ts`
- `packages/global/test/common/string/password.test.ts`
- `packages/global/test/common/string/string.test.ts`
- `packages/global/test/common/string/test.md`
- `packages/global/test/common/string/textSplitter.test.ts`
- `packages/global/test/common/string/time.test.ts`
- `packages/global/test/common/string/tools.test.ts`
- `packages/global/test/common/string/utils.test.ts`
- `packages/global/test/common/system/utils.test.ts`
- `packages/global/test/common/time/timezone.test.ts`
- `packages/global/test/common/type/mongo.test.ts`
- `packages/global/test/common/zod/index.test.ts`
- `packages/global/test/core/ai/llm/utils.test.ts`
- `packages/global/test/core/ai/pricing.test.ts`
- `packages/global/test/core/ai/prompt/AIChat.test.ts`
- `packages/global/test/core/ai/prompt/agent.test.ts`
- `packages/global/test/core/ai/prompt/utils.test.ts`
- `packages/global/test/core/ai/provider.test.ts`
- `packages/global/test/core/ai/sandbox/constants.test.ts`
- `packages/global/test/core/app/evaluation/utils.test.ts`
- `packages/global/test/core/app/formEdit/utils.test.ts`
- `packages/global/test/core/app/jsonschema.test.ts`
- `packages/global/test/core/app/logs/utils.test.ts`
- `packages/global/test/core/app/openapi.test.ts`
- `packages/global/test/core/app/template/openapi.test.ts`
- `packages/global/test/core/app/tool/httpTool/type.test.ts`
- `packages/global/test/core/app/tool/httpTool/utils.test.ts`
- `packages/global/test/core/app/tool/mcpTool/type.test.ts`
- `packages/global/test/core/app/tool/mcpTool/utils.test.ts`
- `packages/global/test/core/app/tool/openapi.test.ts`
- `packages/global/test/core/app/tool/systemToolConfig.test.ts`
- `packages/global/test/core/app/tool/utils.test.ts`
- `packages/global/test/core/app/tool/workflowTool/utils.test.ts`
- `packages/global/test/core/app/type.test.ts`
- `packages/global/test/core/app/utils.test.ts`
- `packages/global/test/core/chat/adapt.test.ts`
- `packages/global/test/core/chat/chatUtils.test.ts`
- `packages/global/test/core/chat/constants.test.ts`
- `packages/global/test/core/chat/controler.test.ts`
- `packages/global/test/core/chat/favouriteApp/type.test.ts`
- `packages/global/test/core/chat/helperBot/adaptor.test.ts`
- `packages/global/test/core/chat/helperBot/topAgent/type.test.ts`
- `packages/global/test/core/chat/helperBot/type.test.ts`
- `packages/global/test/core/chat/setting/type.test.ts`
- `packages/global/test/core/chat/type.test.ts`
- `packages/global/test/core/chat/utils/mergeNode.test.ts`
- `packages/global/test/core/dataset/apiDataset/utils.test.ts`
- `packages/global/test/core/dataset/collection/utils.test.ts`
- `packages/global/test/core/dataset/search/utils.test.ts`
- `packages/global/test/core/dataset/training/utils.test.ts`
- `packages/global/test/core/dataset/utils.test.ts`
- `packages/global/test/core/workflow/runtime/utils.test.ts`
- `packages/global/test/core/workflow/template/datasetSearch.test.ts`
- `packages/global/test/core/workflow/utils.test.ts`
- `packages/global/test/support/customDomain/utils.test.ts`
- `packages/global/test/support/permission/app/controller.test.ts`
- `packages/global/test/support/permission/chat.test.ts`
- `packages/global/test/support/permission/controller.test.ts`
- `packages/global/test/support/permission/dataset/controller.test.ts`
- `packages/global/test/support/permission/model/controller.test.ts`
- `packages/global/test/support/permission/user/controller.test.ts`
- `packages/global/test/support/permission/utils.test.ts`
- `packages/global/test/support/user/team/org/constant.test.ts`
- `packages/global/test/support/user/utils.test.ts`
- `packages/global/test/support/wallet/bill/tools.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/auto-close-issue.yml`
- `.github/workflows/build-admin.yml`
- `.github/workflows/build-agent-sandbox.yml`
- `.github/workflows/build-browser-sandbox.yml`
- `.github/workflows/build-code-sandbox.yml`
- `.github/workflows/build-docs.yml`
- `.github/workflows/build-fastgpt-ide-agent.yml`
- `.github/workflows/build-fastgpt.yml`
- `.github/workflows/build-marketplace.yml`
- `.github/workflows/build-mcp-server.yml`
- `.github/workflows/build-sso-service-image.yml`
- `.github/workflows/helm-release.yaml`
- `.github/workflows/preview-admin-build.yml`
- `.github/workflows/preview-admin-push.yml`
- `.github/workflows/preview-docs-build.yml`
- `.github/workflows/preview-docs-push.yml`
- `.github/workflows/preview-fastgpt-build.yml`
- `.github/workflows/preview-fastgpt-push.yml`
- `.github/workflows/test-fastgpt-pro.yaml`
- `.github/workflows/test-fastgpt.yaml`
- `.github/workflows/test-rust-agent.yaml`
- `.github/workflows/test-sandbox.yaml`
- `deploy/dev/docker-compose.cn.yml`
- `deploy/dev/docker-compose.yml`
- `deploy/templates/docker-compose.dev.yml`
- `deploy/version/main/docker-compose.template.yml`
- `deploy/version/v4.14/docker-compose.template.yml`
- `document/Dockerfile`
- `document/public/deploy/docker/main/cn/docker-compose.milvus.yml`
- `document/public/deploy/docker/main/cn/docker-compose.oceanbase.yml`
- `document/public/deploy/docker/main/cn/docker-compose.opengauss.yml`
- `document/public/deploy/docker/main/cn/docker-compose.pg.yml`
- `document/public/deploy/docker/main/cn/docker-compose.seekdb.yml`
- `document/public/deploy/docker/main/cn/docker-compose.zilliz.yml`
- `document/public/deploy/docker/main/global/docker-compose.milvus.yml`
- `document/public/deploy/docker/main/global/docker-compose.oceanbase.yml`
- `document/public/deploy/docker/main/global/docker-compose.opengauss.yml`
- `document/public/deploy/docker/main/global/docker-compose.pg.yml`
- `document/public/deploy/docker/main/global/docker-compose.seekdb.yml`
- `document/public/deploy/docker/main/global/docker-compose.zilliz.yml`
- `document/public/deploy/docker/v4.14/cn/docker-compose.milvus.yml`
- `document/public/deploy/docker/v4.14/cn/docker-compose.oceanbase.yml`
- `document/public/deploy/docker/v4.14/cn/docker-compose.opengauss.yml`
- `document/public/deploy/docker/v4.14/cn/docker-compose.pg.yml`
- `document/public/deploy/docker/v4.14/cn/docker-compose.seekdb.yml`
- `document/public/deploy/docker/v4.14/cn/docker-compose.zilliz.yml`
- `document/public/deploy/docker/v4.14/global/docker-compose.milvus.yml`
- `document/public/deploy/docker/v4.14/global/docker-compose.oceanbase.yml`
- `document/public/deploy/docker/v4.14/global/docker-compose.opengauss.yml`
- `document/public/deploy/docker/v4.14/global/docker-compose.pg.yml`
- `document/public/deploy/docker/v4.14/global/docker-compose.seekdb.yml`
- `document/public/deploy/docker/v4.14/global/docker-compose.zilliz.yml`
- `packages/service/test/integrations/vectorDB/yml/docker-compose.yml`
- `projects/agent-sandbox-proxy/Dockerfile`
- `projects/agent-sandbox/Dockerfile`
- `projects/app/Dockerfile`
- `projects/code-sandbox/Dockerfile`
- `projects/fastgpt-ide-agent/Dockerfile`
- `projects/marketplace/Dockerfile`
- `projects/mcp_server/Dockerfile`
- `projects/volume-manager/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 2204 |
| .tsx | 822 |
| .svg | 547 |
| .png | 414 |
| .mdx | 349 |
| .json | 180 |
| .js | 129 |
| .md | 116 |
| .yml | 49 |
| .yaml | 46 |
| .jpg | 37 |
| .txt | 15 |
| .scss | 14 |
| .webp | 13 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `projects/ 내부 책임 분리`
- `projects/app/ 내부 책임 분리`
- `.agents/design/core/ai/agent-loop/requirements.md 스펙/명령 의미`
- `.agents/design/core/ai/agent-loop/technical-design.md 스펙/명령 의미`
- `.agents/design/core/ai/sandbox/technical-design.md 스펙/명령 의미`
- `.agents/design/core/workflow/parallel-node/design.md 스펙/명령 의미`
- `.agents/design/variable-update-type-ops/design.md 스펙/명령 의미`
- `deploy/dev/docker-compose.yml 실행 스크립트와 패키지 경계`
- `document/Dockerfile 실행 스크립트와 패키지 경계`
- `document/package.json 실행 스크립트와 패키지 경계`
- `document/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`

