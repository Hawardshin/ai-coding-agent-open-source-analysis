# Samsung/ONE-vscode

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/ONE-vscode |
| local path | sources/Samsung__ONE-vscode |
| HEAD | ebdb6fa |
| stars/forks | 48 / 51 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2023-12-28T05:09:19Z |
| trendScore / priorityScore | 69 / 226 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 95 | README.md, src/Tests/README.md, res/samples/cfg/readme.md |
| LLM wiki / memory / graph | 76 | src/MetadataManager/README.md, src/Mondrian/README.md, docs/Glossary.md |
| Security / compliance | 75 | src/Tests/OneExplorer/OneStorage.test.ts, src/OneExplorer/OneStorage.ts, src/Backend/Spec.ts |
| Spec / doc-driven workflow | 25 | src/Mondrian/README.md, src/Backend/Spec.ts, src/Tests/Backend/Spec.test.ts |
| Frontend / developer experience | 23 | package.json, .eslintrc.json, .vscode/settings.json |
| Local LLM / on-device inference | 2 | src/Tests/Backend/One/OneToolchain.test.ts |
| AI agent / tool use | 1 | media/CircleEditor/index.js |
| Infra / observability | 1 | docs/Tutorial.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, local-llm, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 307 |
| manifests | 10 |
| docs | 17 |
| tests | 49 |
| ci/ops | 10 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | **ONE**-vscode |
| headings | **ONE**-vscode / Goal / Quick Links |
| excerpt | ! Gitter https //img.shields.io/gitter/room/Samsung/ONE vscode?color=orange https //gitter.im/Samsung/ONE vscode ONE vscode Visual Studio Code Extension of ONE https //github.com/Samsung/ONE compiler toolchain. Goal We aim to provide a convenient UX to ONE users by combining the Visual Studio Code environment, which has recently been spotlighted by developers, and ONE's compiler toolchain. Following the extension architecture of Visual Studio Code, we will develop a minimal extension that can work seamlessly with other features. In addition, we are trying to have a well designed structure ourselves so that various tools of ONE that will be developed in the future can be added without difficu |


## 주요 파일

### Manifests

- README.md
- src/Tests/README.md
- infra/license/README.md
- media/CircleEditor/README.md
- res/modelDir/output/README.md
- res/modelDir/truediv/README.md
- src/MetadataManager/README.md
- src/Mondrian/README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- .vscode/tasks.json


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 131 |
| media | 108 |
| res | 19 |
| .github | 10 |
| infra | 10 |
| docs | 6 |
| .vscode | 4 |
| script | 3 |
| .ahub | 2 |
| .clang-format | 1 |
| .eslintignore | 1 |
| .eslintrc.json | 1 |
| .gitignore | 1 |
| .htmlhintrc | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 133 |
| .js | 70 |
| .json | 22 |
| .md | 17 |
| [no-ext] | 17 |
| .css | 13 |
| .yml | 11 |
| .html | 9 |
| .cfg | 4 |
| .circle | 3 |
| .sh | 3 |
| .onnx | 1 |
| .svg | 1 |
| .tflite | 1 |
| .txt | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
