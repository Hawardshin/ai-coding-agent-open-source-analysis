# sktelecom/sktelecom.github.io

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/sktelecom/sktelecom.github.io |
| local path | sources/sktelecom__sktelecom.github.io |
| HEAD | a18908f |
| stars/forks | 20 / 19 |
| language | SCSS |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T07:48:22Z |
| trendScore / priorityScore | 84 / 232 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 359 | hugo-disabled.toml, hugo.yaml, i18n/en.toml |
| AI agent / tool use | 36 | slides/oss-education.md, content/en/about/contact/_index.md, content/en/about/ospo/_index.md |
| Korean language / Korea domain | 24 | README.md, docs/multi-language.md, content/en/project/axllm/_index.md |
| Spec / doc-driven workflow | 24 | slides/oss-education.md, content/en/about/ospo/_index.md, content/en/compliance/_index.md |
| Frontend / developer experience | 10 | content/en/compliance/bizrcs_generator/_index.md, content/en/compliance/meetus/_index.md, content/en/compliance/mobilewallet/_index.md |
| Infra / observability | 9 | slides/oss-education.md, content/en/guide/contribute/process/_index.md, content/en/guide/contribute/process/submit/_index.md |
| LLM wiki / memory / graph | 9 | content/en/blog/sample/sample-post/index.md, content/ko/blog/sample/sample-post/index.md, content/en/blog/2020/20200812-copyright-license/index.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, localRuntime, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 375 |
| manifests | 8 |
| docs | 317 |
| tests | 0 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | SKT Open Source Portal |
| headings | SKT Open Source Portal / Overview / Getting Started / Prerequisites / Local Development / Clone the repository / Install pinned dependencies (Hugo Extended + PostCSS) / Start the development server / Open your browser to http://localhost:1313/ / Building |
| excerpt | SKT Open Source Portal Welcome to the official GitHub repository for SK Telecom's Open Source Portal. The portal is hosted at https //sktelecom.github.io/ SK Telecom shares innovative technologies across AI, Big Data, Cloud, and more as open source projects. We welcome developers worldwide to participate, contribute, and collaborate with us. Overview This website is built with Hugo https //gohugo.io/ Fast, modern static site generator Docsy https //github.com/google/docsy Professional documentation theme for open source projects GitHub Actions Automated build and deployment to GitHub Pages All content is written in Markdown, automatically built by Hugo, and deployed to GitHub Pages on every |


## 주요 파일

### Manifests

- README.md
- docker-compose.yaml
- Dockerfile
- go.mod
- package.json
- go.sum
- content/en/guide/supply-chain/for-suppliers/requirements.md
- content/ko/guide/supply-chain/for-suppliers/requirements.md


### Spec / Docs / Prompt Artifacts

- content/en/guide/supply-chain/for-suppliers/requirements.md
- content/ko/guide/supply-chain/for-suppliers/requirements.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| content | 307 |
| layouts | 22 |
| assets | 10 |
| docs | 7 |
| .github | 4 |
| static | 3 |
| i18n | 2 |
| .cspell.yml | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierignore | 1 |
| config.yaml | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yaml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 317 |
| .html | 23 |
| .scss | 6 |
| .yml | 5 |
| [no-ext] | 5 |
| .toml | 4 |
| .js | 3 |
| .yaml | 3 |
| .json | 2 |
| .sum | 2 |
| .svg | 2 |
| .mod | 1 |
| .webmanifest | 1 |
| .work | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
