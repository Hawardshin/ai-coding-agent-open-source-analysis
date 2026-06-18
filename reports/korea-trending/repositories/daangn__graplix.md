# daangn/graplix

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/graplix |
| local path | sources/daangn__graplix |
| HEAD | 822a57d |
| stars/forks | 92 / 6 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-04-16T10:09:12Z |
| trendScore / priorityScore | 84 / 238 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 307 | README.md, skill/README.md, packages/codegen/README.md |
| Frontend / developer experience | 65 | README.md, skill/README.md, packages/codegen/README.md |
| Spec / doc-driven workflow | 27 | CLAUDE.md, .tech-specs/2026-04-16-0001-agent-skill.md, packages/codegen/src/generate.ts |
| Korean language / Korea domain | 19 | skill/README.md, package.json, packages/codegen/package.json |
| Security / compliance | 12 | packages/engine/src/buildEngine.spec.ts, packages/engine/src/fixtures/github.ts |
| AI agent / tool use | 8 | skill/README.md, .tech-specs/2026-04-16-0001-agent-skill.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, security, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 115 |
| manifests | 18 |
| docs | 18 |
| tests | 21 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Graplix |
| headings | Graplix / Packages / `@graplix/language` / `@graplix/engine` / `@graplix/codegen` / `graplix-vscode-extension` / Monorepo Commands / Repository Layout |
| excerpt | Graplix Graplix is a TypeScript first toolkit for modeling and evaluating ReBAC Relation Based Access Control . Define authorization relationships with .graplix schema files. Parse and validate schemas with language tooling. Evaluate permissions at runtime with resolver driven engine APIs. Generate typed helpers and runtime wrappers with codegen. Use VS Code language support for authoring and navigation. Packages @graplix/language Langium based parser and language services for Graplix schemas. Parses .graplix documents and returns diagnostics. Exposes language services used by runtime/codegen/extension. README packages/language/README.md packages/language/README.md @graplix/engine Runtime ev |


## 주요 파일

### Manifests

- .changeset/README.md
- README.md
- skill/README.md
- packages/codegen/README.md
- packages/engine/README.md
- packages/language/README.md
- packages/vscode-extension/README.md
- CLAUDE.md
- package.json
- tsconfig.json
- packages/codegen/package.json
- packages/codegen/tsconfig.json
- packages/engine/package.json
- packages/engine/tsconfig.json
- packages/language/package.json
- packages/language/tsconfig.json
- packages/vscode-extension/package.json
- packages/vscode-extension/tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 89 |
| skill | 6 |
| .changeset | 2 |
| .tech-specs | 2 |
| .vscode | 2 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .github | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .yarn | 1 |
| .yarnrc.yml | 1 |
| biome.json | 1 |
| CLAUDE.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 51 |
| .json | 20 |
| .md | 18 |
| .graplix | 14 |
| [no-ext] | 8 |
| .yml | 2 |
| .cjs | 1 |
| .langium | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
