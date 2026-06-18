# line/line-bot-sdk-ruby

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-bot-sdk-ruby |
| local path | sources/line__line-bot-sdk-ruby |
| HEAD | f5fb344 |
| stars/forks | 491 / 126 |
| language | Ruby |
| license | Apache-2.0 |
| pushedAt | 2026-06-16T02:22:10Z |
| trendScore / priorityScore | 113 / 309 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 95 | examples/v2/echobot/README.md, examples/v2/kitchensink/README.md, README.md |
| Security / compliance | 78 | README.md, spec/line/bot/v2/channel_access_token/api_spec.rb, spec/line/bot/v2/misc_spec.rb |
| Frontend / developer experience | 63 | README.md, generator/pom.xml, .github/workflows/check-eol-newrelease.yml |
| Spec / doc-driven workflow | 24 | README.md, spec/line/bot/line_bot_api_gem_spec.rb, spec/line/bot/line_bot_gem_spec.rb |
| RAG / retrieval | 6 | lib/line/bot/v2/insight/api/insight_client.rb |
| AI agent / tool use | 3 | spec/line/bot/v2/misc_spec.rb, lib/line/bot/v2/http_client.rb |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, Ruby |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 830 |
| manifests | 7 |
| docs | 11 |
| tests | 15 |
| ci/ops | 8 |
| spec artifacts | 15 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Messaging API SDK for Ruby |
| headings | LINE Messaging API SDK for Ruby / Introduction / Documentation / Requirements / Installation / Example projects / Synopsis / RBS / Basic Usage / app.rb |
| excerpt | LINE Messaging API SDK for Ruby ! Gem version https //img.shields.io/gem/v/line bot api.svg https //rubygems.org/gems/line bot api Introduction The LINE Messaging API SDK for Ruby makes it easy to develop bots using LINE Messaging API, and you can create a sample bot within minutes. Documentation See the official API documentation for more information English https //developers.line.biz/en/docs/messaging api/overview/ Japanese https //developers.line.biz/ja/docs/messaging api/overview/ Also, generated documentation by YARD is available. https //line.github.io/line bot sdk ruby/ https //line.github.io/line bot sdk ruby/ index.html Requirements This library requires Ruby 3.3 or later. Installa |


## 주요 파일

### Manifests

- examples/v2/audience/README.md
- examples/v2/channel_access_token/README.md
- examples/v2/echobot/README.md
- examples/v2/kitchensink/README.md
- examples/v2/rich_menu/README.md
- README.md
- generator/pom.xml


### Spec / Docs / Prompt Artifacts

- spec/spec_helper.rb
- spec/fixtures/line/bot/v2/sample_user_ids.txt
- spec/line/bot/api/spec.rb
- spec/line/bot/line_bot_api_gem_spec.rb
- spec/line/bot/line_bot_gem_spec.rb
- spec/line/bot/v2/channel_access_token/api_spec.rb
- spec/line/bot/v2/manage_audience/api_spec.rb
- spec/line/bot/v2/messaging_api/api_spec.rb
- spec/line/bot/v2/messaging_api/model/flex_container_spec.rb
- spec/line/bot/v2/misc_spec.rb
- spec/line/bot/v2/utils_spec.rb
- spec/line/bot/v2/webhook_parser_skip_verification_spec.rb
- spec/line/bot/v2/webhook_parser_spec.rb
- spec/shared/no_missing_require_spec.rb
- spec/workflows/ruby_version_consistency_spec.rb


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| lib | 378 |
| sig | 367 |
| generator | 20 |
| examples | 18 |
| spec | 15 |
| .github | 13 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .rspec | 1 |
| .rubocop.yml | 1 |
| .yardopts | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| Gemfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .rb | 371 |
| .rbs | 342 |
| [no-ext] | 69 |
| .md | 11 |
| .yml | 11 |
| .java | 7 |
| .pebble | 7 |
| .txt | 2 |
| .yaml | 2 |
| .cjs | 1 |
| .codegenconfig | 1 |
| .gemspec | 1 |
| .json5 | 1 |
| .mp4 | 1 |
| .py | 1 |
| .templatingengineadapter | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
