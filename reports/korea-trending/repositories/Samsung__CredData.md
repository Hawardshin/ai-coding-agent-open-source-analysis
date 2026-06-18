# Samsung/CredData

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/CredData |
| local path | sources/Samsung__CredData |
| HEAD | f1de3f8 |
| stars/forks | 92 / 33 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-05-26T09:50:24Z |
| trendScore / priorityScore | 93 / 218 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 120 | README.md, .ci/benchmark.txt, .github/workflows/review.yml |
| Infra / observability | 21 | .ci/benchmark.txt, benchmark/scanner/bin/shhgit/config.yaml, benchmark/scanner/bin/wraith/default.yaml |
| Spec / doc-driven workflow | 16 | README.md, .ci/benchmark.txt, .github/workflows/review.yml |
| Korean language / Korea domain | 12 | README.md, .github/workflows/review.yml, benchmark/common/constants.py |
| Frontend / developer experience | 7 | README.md, .ci/benchmark.txt, config.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llmFramework, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 387 |
| manifests | 3 |
| docs | 2 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | CredData (Credential Dataset) |
| headings | CredData (Credential Dataset) / Table of Contents / Introduction / How To Use / Data Overview / Data Statistics / Data / Selecting Target Repositories / Ground Rules for Labeling Suspected Credential Information / Metadata |
| excerpt | CredData Credential Dataset Table of Contents Introduction introduction How To Use how to use Data Overview data overview Data statistics data statistics Data data Selecting Target Repositories selecting target repositories Ground Rules for Labeling Suspected Credential Information ground rules for labeling suspected credential information Metadata metadata Obfuscation obfuscation License license Directory Structure directory structure Benchmark benchmark Main Requirements main requirements Installation installation How to extend the dataset how to extend the dataset How to run how to run Benchmark Result benchmark result Used Tools for Benchmarking used tools for benchmarking Citation citat |


## 주요 파일

### Manifests

- .ci/README.md
- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt
- .ci/benchmark.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| meta | 333 |
| benchmark | 27 |
| .ci | 3 |
| .github | 2 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| build.sh | 1 |
| config.json | 1 |
| constants.py | 1 |
| download_data.py | 1 |
| LICENSE | 1 |
| markup_report.py | 1 |
| meta_cred.py | 1 |
| meta_key.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .csv | 333 |
| .py | 31 |
| [no-ext] | 7 |
| .json | 4 |
| .sh | 3 |
| .yaml | 3 |
| .md | 2 |
| .txt | 2 |
| .yml | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
