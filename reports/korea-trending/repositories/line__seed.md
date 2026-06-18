# line/seed

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/seed |
| local path | sources/line__seed |
| HEAD | ea7a320d |
| stars/forks | 61 / 3 |
| language | Makefile |
| license | OFL-1.1 |
| pushedAt | 2025-11-19T05:02:37Z |
| trendScore / priorityScore | 70 / 152 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 10 | Makefile, .github/workflows/build.yaml, OFL.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, graphMemory, korea-signal, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 3 |
| docs | 1 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Seed |
| headings | LINE Seed / Building the fonts from source / License / Repository Layout |
| excerpt | LINE Seed ! Fontspector https //line.github.io/seed/fontspector/fontspector report.html ! OpenType https //line.github.io/seed/fontspector/fontspector report.html ! Universal https //line.github.io/seed/fontspector/fontspector report.html ! Google Fonts https //line.github.io/seed/fontspector/fontspector report.html ! Glyphset https //line.github.io/seed/fontspector/fontspector report.html Fontspector https //img.shields.io/endpoint?url=https%3A%2F%2Fline.github.io%2Fseed%2Fbadges%2FFontspectorQA.json OpenType https //img.shields.io/endpoint?url=https%3A%2F%2Fline.github.io%2Fseed%2Fbadges%2FOpentypeSpecificationChecks.json Universal https //img.shields.io/endpoint?url=https%3A%2F%2Fline.git |


## 주요 파일

### Manifests

- README.md
- Makefile
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| LINESeedJP | 7989 |
| .github | 1 |
| .gitignore | 1 |
| AUTHORS.txt | 1 |
| CONTRIBUTERS.txt | 1 |
| DESCRIPTION.en_us.html | 1 |
| documentation | 1 |
| Makefile | 1 |
| OFL.txt | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| scripts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .glyph | 7979 |
| .plist | 8 |
| .txt | 4 |
| .html | 2 |
| .yaml | 2 |
| [no-ext] | 2 |
| .md | 1 |
| .pb | 1 |
| .svg | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
