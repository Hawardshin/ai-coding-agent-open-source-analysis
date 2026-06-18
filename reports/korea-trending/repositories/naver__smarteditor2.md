# naver/smarteditor2

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/smarteditor2 |
| local path | sources/naver__smarteditor2 |
| HEAD | cf6070f |
| stars/forks | 294 / 161 |
| language | JavaScript |
| license | NOASSERTION |
| pushedAt | 2020-12-08T08:51:42Z |
| trendScore / priorityScore | 86 / 245 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 103 | workspace/docs/developer_guide/README.md, workspace/docs/user_guide/3_customizing/README.md, workspace/docs/user_guide/README.md |
| AI agent / tool use | 66 | workspace/src/extra/hp_SE_OuterIFrameControl.js, workspace/src/extra/hp_SE2B_CSSLoader.js, workspace/src/fundamental/advanced/hp_SE2M_FindReplacePlugin.js |
| Frontend / developer experience | 5 | workspace/src/husky_framework/HuskyRange.js |
| LLM wiki / memory / graph | 5 | workspace/docs/user_guide/3_customizing/README.md, CODE_OF_CONDUCT.md, workspace/src/fundamental/base/hp_SE_WYSIWYGStyler.js |
| RAG / retrieval | 1 | workspace/src/fundamental/base/hp_SE2M_ExecCommand.js |
| Spec / doc-driven workflow | 1 | workspace/src/husky_framework/HuskyRange.js |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 184 |
| manifests | 12 |
| docs | 58 |
| tests | 11 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Overview / User Guide / Demo / Supported Browsers / License / Third-party libraries / Read More |
| excerpt | SmartEditor2 ! npm https //img.shields.io/npm/v/smarteditor2 https //npmjs.com/package/smarteditor2 ! Build Status https //travis ci.org/naver/smarteditor2.svg?branch=master https //travis ci.org/naver/smarteditor2 ! codecov https //codecov.io/gh/naver/smarteditor2/branch/master/graph/badge.svg https //codecov.io/gh/naver/smarteditor2 Overview SmartEditor™ 는 JavaScript로 구현된 웹 기반의 WYSIWYG 편집기입니다. WYSIWYG 모드 및 HTML 편집 모드와 TEXT 모드를 제공하고, 자유로운 폰트 크기 설정 기능, 줄 간격 설정 기능, 단어 찾기/바꾸기 기능 등 편집에 필요한 다양한 기능을 제공하므로 사용자들은 SmartEditor™를 사용하여 쉽고 편리하게 원하는 형태의 글을 작성할 수 있습니다. 또한, SmartEditor™의 구조는 기능을 쉽게 추가할 수 있는 플러그인 구조로 되어 있어 정해진 규칙에 따라 플러그인을 만들기만 하면 됩니다. User Guide 사용자 가이드에서는 SmartEditor2 의 특징과 기능을 소개합니다. 또한, |


## 주요 파일

### Manifests

- workspace/docs/developer_guide/README.md
- workspace/docs/user_guide/1_intro/details/README.md
- workspace/docs/user_guide/1_intro/README.md
- workspace/docs/user_guide/2_install/README.md
- workspace/docs/user_guide/3_customizing/plugins/README.md
- workspace/docs/user_guide/3_customizing/README.md
- workspace/docs/user_guide/4_photouploader/install/README.md
- workspace/docs/user_guide/4_photouploader/README.md
- workspace/docs/user_guide/5_fileuploader/README.md
- workspace/docs/user_guide/README.md
- README.md
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| workspace | 171 |
| .eslintignore | 1 |
| .eslintrc | 1 |
| .gitignore | 1 |
| .travis.yml | 1 |
| babel.config.js | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| jest.config.js | 1 |
| LICENSE.md | 1 |
| package.json | 1 |
| README.md | 1 |
| TODO.md | 1 |
| webpack.config.js | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .js | 91 |
| .md | 58 |
| .css | 20 |
| .html | 10 |
| [no-ext] | 3 |
| .json | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
