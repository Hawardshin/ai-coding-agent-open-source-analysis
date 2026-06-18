# sktelecom/onot

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/sktelecom/onot |
| local path | sources/sktelecom__onot |
| HEAD | 3ae3ac9 |
| stars/forks | 15 / 7 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-06-16T09:32:44Z |
| trendScore / priorityScore | 79 / 234 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 211 | README.md, electron/package.json, frontend/package.json |
| Security / compliance | 161 | README.md, pyproject.toml, docs/USER_GUIDE.md |
| Korean language / Korea domain | 106 | README.md, docs/USER_GUIDE.md, .github/workflows/ci.yml |
| Spec / doc-driven workflow | 19 | docs/2.0/DECISIONS.md, docs/2.0/TRACEABILITY.md, CHANGELOG.md |
| LLM wiki / memory / graph | 15 | electron/pnpm-lock.yaml, frontend/pnpm-lock.yaml, SECURITY.md |
| AI agent / tool use | 13 | electron/pnpm-lock.yaml |
| Infra / observability | 2 | frontend/pnpm-lock.yaml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, localRuntime, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 165 |
| manifests | 9 |
| docs | 11 |
| tests | 52 |
| ci/ops | 4 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | onot |
| headings | onot / Download (desktop app) / CLI / SBOM (format auto-detected) → notices in multiple formats / -f/--format   html \| text \| markdown \| pdf (repeatable) / --lang        ko \| en / --config      onot.yaml (company info, etc.) / --online      fetch missing license texts remotely (offline by default) / --stdout      write a single text format to stdout / Local API (sidecar) |
| excerpt | onot ! CI https //github.com/sktelecom/onot/actions/workflows/ci.yml/badge.svg https //github.com/sktelecom/onot/actions/workflows/ci.yml ! Security https //github.com/sktelecom/onot/actions/workflows/security.yml/badge.svg https //github.com/sktelecom/onot/actions/workflows/security.yml ! License https //img.shields.io/github/license/sktelecom/onot LICENSE ! OpenSSF Scorecard https //api.scorecard.dev/projects/github.com/sktelecom/onot/badge https //scorecard.dev/viewer/?uri=github.com/sktelecom/onot ! PyPI https //img.shields.io/pypi/v/onot https //pypi.org/project/onot/ ! Latest release https //img.shields.io/github/v/release/sktelecom/onot?sort=semver https //github.com/sktelecom/onot/re |


## 주요 파일

### Manifests

- README.md
- electron/package.json
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- pyproject.toml
- frontend/tsconfig.node.json
- frontend/tsconfig.node.tsbuildinfo
- frontend/tsconfig.tsbuildinfo


### Spec / Docs / Prompt Artifacts

- .claude/gate.sh
- .claude/settings.json


### Agent Instruction Files

- .claude/gate.sh
- .claude/settings.json


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 47 |
| tests | 38 |
| frontend | 30 |
| electron | 16 |
| .github | 10 |
| spikes | 5 |
| docs | 3 |
| .claude | 2 |
| scripts | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CITATION.cff | 1 |
| CODE_OF_CONDUCT.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 73 |
| .mjs | 12 |
| .md | 11 |
| .ts | 10 |
| .tsx | 10 |
| .json | 9 |
| .yml | 9 |
| [no-ext] | 5 |
| .css | 3 |
| .jinja | 3 |
| .xml | 3 |
| .yaml | 3 |
| .html | 2 |
| .js | 2 |
| .sh | 2 |
| .tsbuildinfo | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
