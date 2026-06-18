# line/line-bot-sdk-php

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-bot-sdk-php |
| local path | sources/line__line-bot-sdk-php |
| HEAD | 7d796fb |
| stars/forks | 733 / 647 |
| language | PHP |
| license | Apache-2.0 |
| pushedAt | 2026-06-15T20:24:49Z |
| trendScore / priorityScore | 120 / 277 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 119 | examples/EchoBot/README.md, examples/KitchenSink/README.md, README.md |
| Frontend / developer experience | 104 | README.md, docs/classes/LINE-Parser-Tests-SignatureValidatorTest.html, docs/classes/LINE-Webhook-Test-Model-AllMentioneeTest.html |
| Security / compliance | 12 | examples/EchoBot/README.md, examples/KitchenSink/README.md, README.md |
| RAG / retrieval | 1 | docs/classes/LINE-Parser-SignatureValidator.html |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, korea-signal, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, PHP |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 1823 |
| manifests | 4 |
| docs | 1278 |
| tests | 66 |
| ci/ops | 7 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Messaging API SDK for PHP |
| headings | LINE Messaging API SDK for PHP / Introduction / Documentation / Requirements / Installation / Getting started / Create the bot client instance / Call API / How to get x-line-request-id header and error message / Components |
| excerpt | LINE Messaging API SDK for PHP ! Build Status https //github.com/line/line bot sdk php/actions/workflows/php checks.yml/badge.svg?branch=master https //github.com/line/line bot sdk php/actions ! Packagist Version https //img.shields.io/packagist/v/linecorp/line bot sdk https //packagist.org/packages/linecorp/line bot sdk Introduction The LINE Messaging API SDK for PHP makes it easy to develop bots using LINE Messaging API, and you can create a sample bot within minutes. Documentation See the official API documentation for more information. English https //developers.line.biz/en/docs/messaging api/overview/ Japanese https //developers.line.biz/ja/docs/messaging api/overview/ PHPDoc https //li |


## 주요 파일

### Manifests

- examples/EchoBot/README.md
- examples/KitchenSink/README.md
- README.md
- generator/pom.xml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 1270 |
| src | 471 |
| examples | 45 |
| .github | 13 |
| tools | 6 |
| test | 3 |
| .gitignore | 1 |
| .gitmodules | 1 |
| CODE_OF_CONDUCT.md | 1 |
| composer.json | 1 |
| CONTRIBUTING.md | 1 |
| generate-code.py | 1 |
| generator | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .html | 1264 |
| .php | 502 |
| [no-ext] | 16 |
| .yml | 9 |
| .md | 8 |
| .xml | 5 |
| .json | 4 |
| .css | 3 |
| .js | 3 |
| .mustache | 2 |
| .sh | 2 |
| .cjs | 1 |
| .dist | 1 |
| .json5 | 1 |
| .mp4 | 1 |
| .py | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
