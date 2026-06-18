# hypn4/tossinvest-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/hypn4/tossinvest-mcp |
| local path | sources/hypn4__tossinvest-mcp |
| HEAD | 4d1100f |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-04T09:53:22Z |
| trendScore / priorityScore | 88 / 132 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 81 | README.md, pyproject.toml, tossinvest_mcp/spec/SOURCE.md |
| Spec / doc-driven workflow | 23 | pyproject.toml, tossinvest_mcp/server.py, scripts/refresh_spec.py |
| Security / compliance | 10 | tossinvest_mcp/spec/overview.md, .github/workflows/publish.yml, tossinvest_mcp/auth.py |
| Korean language / Korea domain | 7 | README.md, pyproject.toml |
| AI agent / tool use | 2 | README.md, pyproject.toml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, graphMemory, korea-signal, mcp, sdk-api, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 29 |
| manifests | 2 |
| docs | 3 |
| tests | 10 |
| ci/ops | 2 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 토스증권 MCP |
| headings | 토스증권 MCP / 할 수 있는 일 / 빠른 시작 / Claude Code에 등록 / 추천: `uvx` (설치/클론 없이 어디서나) / 로컬 체크아웃 (개발용) / 거래 활성화 / 테스트 / 라이선스 |
| excerpt | 토스증권 MCP ! PyPI https //img.shields.io/pypi/v/tossinvest mcp https //pypi.org/project/tossinvest mcp/ ! Python https //img.shields.io/pypi/pyversions/tossinvest mcp https //pypi.org/project/tossinvest mcp/ ! License https //img.shields.io/github/license/hypn4/tossinvest mcp LICENSE ! CI https //github.com/hypn4/tossinvest mcp/actions/workflows/ci.yml/badge.svg https //github.com/hypn4/tossinvest mcp/actions/workflows/ci.yml 토스증권 Open API를 MCP https //modelcontextprotocol.io 도구로 노출하는 서버입니다. Claude 같은 AI 에이전트가 한국 주식 KRX 시세/보유 종목/주문/기술적 분석을 도구로 사용할 수 있습니다. English MCP server exposing the Toss Securities 토스증권 Open API as tools for Claude and other AI agents. Covers Korean stock market KRX quotes |


## 주요 파일

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- tossinvest_mcp/spec/openapi.json
- tossinvest_mcp/spec/overview.md
- tossinvest_mcp/spec/SOURCE.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tossinvest_mcp | 12 |
| tests | 7 |
| .github | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| scripts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 17 |
| [no-ext] | 4 |
| .md | 3 |
| .yml | 2 |
| .example | 1 |
| .json | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
