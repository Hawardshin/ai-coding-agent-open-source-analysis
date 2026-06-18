# line/abc-user-feedback

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/abc-user-feedback |
| local path | sources/line__abc-user-feedback |
| HEAD | b4e0d10 |
| stars/forks | 376 / 35 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-16T01:59:20Z |
| trendScore / priorityScore | 108 / 297 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 269 | README.md, apps/api/README.md, docker/docker-compose.yml |
| Infra / observability | 162 | apps/api/README.md, apps/cli/README.md, apps/api/package.json |
| Frontend / developer experience | 121 | README.md, apps/web/README.md, apps/docs/package.json |
| Spec / doc-driven workflow | 15 | apps/api/README.md, apps/web/README.md, apps/docs/i18n/en/docusaurus-plugin-content-docs/current/00-introduction/00-index.md |
| LLM wiki / memory / graph | 9 | apps/docs/i18n/en/docusaurus-plugin-content-docs/current/02-developer-guide/01-installation/01-docker-hub-images.md, apps/docs/i18n/en/docusaurus-plugin-content-docs/current/02-developer-guide/01-installation/02-cli-tool.md |
| Korean language / Korea domain | 4 | apps/web/package.json, apps/docs/docs/01-user-guide/07-settings/05-ai-setting.md, apps/docs/i18n/en/docusaurus-plugin-content-docs/current/01-user-guide/07-settings/05-ai-setting.md |
| AI agent / tool use | 2 | apps/docs/i18n/en/docusaurus-plugin-content-docs/current/01-user-guide/05-issue-management.md, apps/docs/i18n/en/docusaurus-plugin-content-docs/current/02-developer-guide/01-installation/02-cli-tool.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1510 |
| manifests | 35 |
| docs | 123 |
| tests | 74 |
| ci/ops | 11 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ABC User Feedback |
| headings | ABC User Feedback / ✨ Features / 🚀 Quick Start / 📚 Documentation / 🐳 Docker Images / 🛠️ Development / 🤝 Contributing / 📄 License |
| excerpt | ABC User Feedback ABC User Feedback is a standalone web application designed to manage Voice of Customer VoC data. It enables you to efficiently gather and categorize customer feedback. The application is currently utilized in services with a reach of 10 million MAU. ! main image ./assets/main.png ✨ Features Feedback Tag Categorize feedback by topic with customizable tags Kanban Mode Visualize and organize issue groups efficiently Issue Tracker Simple issue tracking with status indicators and external ticket linking Single Sign on Enterprise level OAuth authentication Role Management Role Based Access Control RBAC Dashboard Statistical visualization for feedback and issues 🤖 AI Field AI pow |


## 주요 파일

### Manifests

- apps/docs/README.md
- README.md
- apps/api/README.md
- apps/cli/README.md
- apps/web/README.md
- apps/docs/package.json
- apps/docs/tsconfig.json
- docker/docker-compose.yml
- package.json
- apps/api/package.json
- apps/api/tsconfig.json
- apps/cli/package.json
- apps/cli/tsconfig.json
- apps/e2e/package.json
- apps/web/next.config.js
- apps/web/package.json
- apps/web/tsconfig.json
- packages/ufb-react/package.json
- packages/ufb-react/tsconfig.json
- packages/ufb-shared/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| apps | 1326 |
| packages | 128 |
| tooling | 20 |
| docker | 11 |
| .github | 9 |
| .vscode | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| GUIDE.md | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 904 |
| .tsx | 281 |
| .md | 86 |
| .json | 64 |
| .css | 59 |
| .svg | 38 |
| .js | 34 |
| .yml | 15 |
| [no-ext] | 10 |
| .dockerfile | 3 |
| .example | 3 |
| .hbs | 3 |
| .mjs | 3 |
| .yaml | 3 |
| .sh | 2 |
| .build | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
