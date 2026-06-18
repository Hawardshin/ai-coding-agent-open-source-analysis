# crmne/ruby_llm 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

One delightful Ruby framework for every major AI provider. Build AI agents, chatbots, RAG apps, and multimodal workflows in beautiful, expressive code.

## 요약

- 조사 단위: `sources/crmne__ruby_llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,003 files, 128 directories, depth score 106, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=docs/bin/build-versions.sh, docs/bin/serve.sh, bin/console이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | crmne/ruby_llm |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | Ruby |
| Stars | 4028 |
| Forks | 458 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/crmne__ruby_llm](../../../../sources/crmne__ruby_llm) |
| 기존 보고서 | [reports/global-trending/repositories/crmne__ruby_llm.md](../../../global-trending/repositories/crmne__ruby_llm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1003 / 128 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, bin, docs, gemfiles, lib, spec |
| 상위 확장자 | .yml: 511, .rb: 294, .tt: 62, .svg: 30, .md: 29, (none): 28, .png: 8, .html: 5, .gemfile: 4, .rake: 4, .json: 3, .txt: 3 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 45 |
| lib | source boundary | 31 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| gemfiles | top-level component | 1 |
| spec | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [docs/bin/build-versions.sh](../../../../sources/crmne__ruby_llm/docs/bin/build-versions.sh) | entrypoints signal |
| entrypoints | [docs/bin/serve.sh](../../../../sources/crmne__ruby_llm/docs/bin/serve.sh) | entrypoints signal |
| entrypoints | [bin/console](../../../../sources/crmne__ruby_llm/bin/console) | entrypoints signal |
| entrypoints | [bin/gitleaks-staged](../../../../sources/crmne__ruby_llm/bin/gitleaks-staged) | entrypoints signal |
| ci | [.github/workflows/_gitleaks.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_gitleaks.yml) | ci signal |
| ci | [.github/workflows/_lint.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_lint.yml) | ci signal |
| ci | [.github/workflows/_test-matrix.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_test-matrix.yml) | ci signal |
| ci | [.github/workflows/docs.yml](../../../../sources/crmne__ruby_llm/.github/workflows/docs.yml) | ci signal |
| eval | [spec/rails_helper.rb](../../../../sources/crmne__ruby_llm/spec/rails_helper.rb) | eval support |
| eval | [spec/ruby_llm_gemspec_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_gemspec_spec.rb) | eval support |
| instruction | [docs/_core_features/agents.md](../../../../sources/crmne__ruby_llm/docs/_core_features/agents.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [docs/bin/build-versions.sh](../../../../sources/crmne__ruby_llm/docs/bin/build-versions.sh)<br>[docs/bin/serve.sh](../../../../sources/crmne__ruby_llm/docs/bin/serve.sh)<br>[bin/console](../../../../sources/crmne__ruby_llm/bin/console)<br>[bin/gitleaks-staged](../../../../sources/crmne__ruby_llm/bin/gitleaks-staged)<br>[bin/rspec-queue](../../../../sources/crmne__ruby_llm/bin/rspec-queue)<br>[bin/setup](../../../../sources/crmne__ruby_llm/bin/setup)<br>[bin/test](../../../../sources/crmne__ruby_llm/bin/test) |
| agentRuntime | 40 | [spec/ruby_llm/agent_rails_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/agent_rails_spec.rb)<br>[spec/ruby_llm/agent_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/agent_spec.rb)<br>[spec/ruby_llm/context_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/context_spec.rb)<br>[spec/ruby_llm/tool_concurrency_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/tool_concurrency_spec.rb)<br>[spec/ruby_llm/tool_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/tool_spec.rb)<br>[spec/ruby_llm/protocols/gemini/tools_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/protocols/gemini/tools_spec.rb)<br>[spec/ruby_llm/protocols/chat_completions/tools_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/protocols/chat_completions/tools_spec.rb)<br>[spec/ruby_llm/protocols/anthropic/tools_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/protocols/anthropic/tools_spec.rb) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 31 | [spec/ruby_llm/embedding_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/embedding_spec.rb)<br>[spec/fixtures/vcr_cassettes/context_context_embed_operations_allows_specifying_a_model_at_embed_time.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/context_context_embed_operations_allows_specifying_a_model_at_embed_time.yml)<br>[spec/fixtures/vcr_cassettes/context_context_embed_operations_respects_context-specific_embedding_model.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/context_context_embed_operations_respects_context-specific_embedding_model.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_a_single_text.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_a_single_text.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_multiple_texts.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_multiple_texts.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_handles_single-string_arrays_consistently.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_handles_single-string_arrays_consistently.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_gemini_gemini-embedding-001_can_handle_a_single_text_with_custom_dimensions.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_gemini_gemini-embedding-001_can_handle_a_single_text_with_custom_dimensions.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_gemini_gemini-embedding-001_can_handle_a_single_text.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_gemini_gemini-embedding-001_can_handle_a_single_text.yml) |
| spec | 664 | [spec/rails_helper.rb](../../../../sources/crmne__ruby_llm/spec/rails_helper.rb)<br>[spec/ruby_llm_gemspec_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_gemspec_spec.rb)<br>[spec/ruby_llm_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_spec.rb)<br>[spec/spec_helper.rb](../../../../sources/crmne__ruby_llm/spec/spec_helper.rb)<br>[spec/support/generator_test_helpers.rb](../../../../sources/crmne__ruby_llm/spec/support/generator_test_helpers.rb)<br>[spec/support/models_to_test.rb](../../../../sources/crmne__ruby_llm/spec/support/models_to_test.rb)<br>[spec/support/rspec_configuration.rb](../../../../sources/crmne__ruby_llm/spec/support/rspec_configuration.rb)<br>[spec/support/rubyllm_configuration.rb](../../../../sources/crmne__ruby_llm/spec/support/rubyllm_configuration.rb) |
| eval | 665 | [spec/rails_helper.rb](../../../../sources/crmne__ruby_llm/spec/rails_helper.rb)<br>[spec/ruby_llm_gemspec_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_gemspec_spec.rb)<br>[spec/ruby_llm_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_spec.rb)<br>[spec/spec_helper.rb](../../../../sources/crmne__ruby_llm/spec/spec_helper.rb)<br>[spec/support/generator_test_helpers.rb](../../../../sources/crmne__ruby_llm/spec/support/generator_test_helpers.rb)<br>[spec/support/models_to_test.rb](../../../../sources/crmne__ruby_llm/spec/support/models_to_test.rb)<br>[spec/support/rspec_configuration.rb](../../../../sources/crmne__ruby_llm/spec/support/rspec_configuration.rb)<br>[spec/support/rubyllm_configuration.rb](../../../../sources/crmne__ruby_llm/spec/support/rubyllm_configuration.rb) |
| security | 12 | [spec/ruby_llm/providers/vertex_ai_auth_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/providers/vertex_ai_auth_spec.rb)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_anthropic_claude-haiku-4-5_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_anthropic_claude-haiku-4-5_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_azure_grok-4-1-fast-non-reasoning_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_azure_grok-4-1-fast-non-reasoning_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_bedrock_amazon_nova-2-lite-v1_0_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_bedrock_amazon_nova-2-lite-v1_0_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_deepseek_deepseek-chat_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_deepseek_deepseek-chat_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_gemini_gemini-2_5-flash_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_gemini_gemini-2_5-flash_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_mistral_mistral-small-latest_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_mistral_mistral-small-latest_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_openai_gpt-5-nano_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_openai_gpt-5-nano_raises_appropriate_auth_error.yml) |
| ci | 7 | [.github/workflows/_gitleaks.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_gitleaks.yml)<br>[.github/workflows/_lint.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_lint.yml)<br>[.github/workflows/_test-matrix.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_test-matrix.yml)<br>[.github/workflows/docs.yml](../../../../sources/crmne__ruby_llm/.github/workflows/docs.yml)<br>[.github/workflows/main.yml](../../../../sources/crmne__ruby_llm/.github/workflows/main.yml)<br>[.github/workflows/pr.yml](../../../../sources/crmne__ruby_llm/.github/workflows/pr.yml)<br>[.github/workflows/release.yml](../../../../sources/crmne__ruby_llm/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [docs/_core_features/agents.md](../../../../sources/crmne__ruby_llm/docs/_core_features/agents.md) |
| docs | 85 | [README.md](../../../../sources/crmne__ruby_llm/README.md)<br>[spec/dummy/README.md](../../../../sources/crmne__ruby_llm/spec/dummy/README.md)<br>[docs/_config.yml](../../../../sources/crmne__ruby_llm/docs/_config.yml)<br>[docs/.gitignore](../../../../sources/crmne__ruby_llm/docs/.gitignore)<br>[docs/about.md](../../../../sources/crmne__ruby_llm/docs/about.md)<br>[docs/Gemfile](../../../../sources/crmne__ruby_llm/docs/Gemfile)<br>[docs/index.md](../../../../sources/crmne__ruby_llm/docs/index.md)<br>[docs/bin/build-versions.sh](../../../../sources/crmne__ruby_llm/docs/bin/build-versions.sh) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 665 | [spec/rails_helper.rb](../../../../sources/crmne__ruby_llm/spec/rails_helper.rb)<br>[spec/ruby_llm_gemspec_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_gemspec_spec.rb)<br>[spec/ruby_llm_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_spec.rb)<br>[spec/spec_helper.rb](../../../../sources/crmne__ruby_llm/spec/spec_helper.rb)<br>[spec/support/generator_test_helpers.rb](../../../../sources/crmne__ruby_llm/spec/support/generator_test_helpers.rb)<br>[spec/support/models_to_test.rb](../../../../sources/crmne__ruby_llm/spec/support/models_to_test.rb) |
| CI workflow | 7 | [.github/workflows/_gitleaks.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_gitleaks.yml)<br>[.github/workflows/_lint.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_lint.yml)<br>[.github/workflows/_test-matrix.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_test-matrix.yml)<br>[.github/workflows/docs.yml](../../../../sources/crmne__ruby_llm/.github/workflows/docs.yml)<br>[.github/workflows/main.yml](../../../../sources/crmne__ruby_llm/.github/workflows/main.yml)<br>[.github/workflows/pr.yml](../../../../sources/crmne__ruby_llm/.github/workflows/pr.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 12 | [spec/ruby_llm/providers/vertex_ai_auth_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/providers/vertex_ai_auth_spec.rb)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_anthropic_claude-haiku-4-5_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_anthropic_claude-haiku-4-5_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_azure_grok-4-1-fast-non-reasoning_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_azure_grok-4-1-fast-non-reasoning_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_bedrock_amazon_nova-2-lite-v1_0_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_bedrock_amazon_nova-2-lite-v1_0_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_deepseek_deepseek-chat_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_deepseek_deepseek-chat_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_gemini_gemini-2_5-flash_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_gemini_gemini-2_5-flash_raises_appropriate_auth_error.yml) |
| 에이전트 지시문 | 1 | [docs/_core_features/agents.md](../../../../sources/crmne__ruby_llm/docs/_core_features/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/bin/build-versions.sh`, `docs/bin/serve.sh`, `bin/console`.
2. entrypoint를 따라 실행 흐름 확인: `docs/bin/build-versions.sh`, `docs/bin/serve.sh`, `bin/console`.
3. agent/tool runtime 매핑: `spec/ruby_llm/agent_rails_spec.rb`, `spec/ruby_llm/agent_spec.rb`, `spec/ruby_llm/context_spec.rb`.
4. retrieval/memory/indexing 확인: `spec/ruby_llm/embedding_spec.rb`, `spec/fixtures/vcr_cassettes/context_context_embed_operations_allows_specifying_a_model_at_embed_time.yml`, `spec/fixtures/vcr_cassettes/context_context_embed_operations_respects_context-specific_embedding_model.yml`.
5. test/eval 파일로 동작 검증: `spec/rails_helper.rb`, `spec/ruby_llm_gemspec_spec.rb`, `spec/ruby_llm_spec.rb`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 One delightful Ruby framework for every major AI provider. Build AI agents, chatbots, RAG apps, and multimodal workflows. 핵심 구조 신호는 Ruby, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
