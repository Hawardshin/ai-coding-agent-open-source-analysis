# crmne/ruby_llm Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

One delightful Ruby framework for every major AI provider. Build AI agents, chatbots, RAG apps, and multimodal workflows in beautiful, expressive code.

## 요약

- 조사 단위: `sources/crmne__ruby_llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,003 files, 128 directories, depth score 112, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=docs/bin/build-versions.sh, docs/bin/serve.sh, bin/console이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | crmne/ruby_llm |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Ruby |
| Stars | 4028 |
| Forks | 458 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/crmne__ruby_llm](../../../../sources/crmne__ruby_llm) |
| Existing report | [reports/global-trending/repositories/crmne__ruby_llm.md](../../../global-trending/repositories/crmne__ruby_llm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1003 / 128 |
| Max observed depth | 10 |
| Top directories | .github, bin, docs, gemfiles, lib, spec |
| Top extensions | .yml: 511, .rb: 294, .tt: 62, .svg: 30, .md: 29, (none): 28, .png: 8, .html: 5, .gemfile: 4, .rake: 4, .json: 3, .txt: 3 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 45 |
| lib | source boundary | 31 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| gemfiles | top-level component | 1 |
| spec | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [docs/bin/build-versions.sh](../../../../sources/crmne__ruby_llm/docs/bin/build-versions.sh)<br>[docs/bin/serve.sh](../../../../sources/crmne__ruby_llm/docs/bin/serve.sh)<br>[bin/console](../../../../sources/crmne__ruby_llm/bin/console)<br>[bin/gitleaks-staged](../../../../sources/crmne__ruby_llm/bin/gitleaks-staged)<br>[bin/rspec-queue](../../../../sources/crmne__ruby_llm/bin/rspec-queue)<br>[bin/setup](../../../../sources/crmne__ruby_llm/bin/setup)<br>[bin/test](../../../../sources/crmne__ruby_llm/bin/test) |
| agentRuntime | 40 | [spec/ruby_llm/agent_rails_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/agent_rails_spec.rb)<br>[spec/ruby_llm/agent_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/agent_spec.rb)<br>[spec/ruby_llm/context_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/context_spec.rb)<br>[spec/ruby_llm/tool_concurrency_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/tool_concurrency_spec.rb)<br>[spec/ruby_llm/tool_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/tool_spec.rb)<br>[spec/ruby_llm/protocols/gemini/tools_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/protocols/gemini/tools_spec.rb)<br>[spec/ruby_llm/protocols/chat_completions/tools_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/protocols/chat_completions/tools_spec.rb)<br>[spec/ruby_llm/protocols/anthropic/tools_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/protocols/anthropic/tools_spec.rb) |
| mcp | 0 | not obvious |
| retrieval | 31 | [spec/ruby_llm/embedding_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/embedding_spec.rb)<br>[spec/fixtures/vcr_cassettes/context_context_embed_operations_allows_specifying_a_model_at_embed_time.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/context_context_embed_operations_allows_specifying_a_model_at_embed_time.yml)<br>[spec/fixtures/vcr_cassettes/context_context_embed_operations_respects_context-specific_embedding_model.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/context_context_embed_operations_respects_context-specific_embedding_model.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_a_single_text.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_a_single_text.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_multiple_texts.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_multiple_texts.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_handles_single-string_arrays_consistently.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_handles_single-string_arrays_consistently.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_gemini_gemini-embedding-001_can_handle_a_single_text_with_custom_dimensions.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_gemini_gemini-embedding-001_can_handle_a_single_text_with_custom_dimensions.yml)<br>[spec/fixtures/vcr_cassettes/embedding_basic_functionality_gemini_gemini-embedding-001_can_handle_a_single_text.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/embedding_basic_functionality_gemini_gemini-embedding-001_can_handle_a_single_text.yml) |
| spec | 664 | [spec/rails_helper.rb](../../../../sources/crmne__ruby_llm/spec/rails_helper.rb)<br>[spec/ruby_llm_gemspec_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_gemspec_spec.rb)<br>[spec/ruby_llm_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_spec.rb)<br>[spec/spec_helper.rb](../../../../sources/crmne__ruby_llm/spec/spec_helper.rb)<br>[spec/support/generator_test_helpers.rb](../../../../sources/crmne__ruby_llm/spec/support/generator_test_helpers.rb)<br>[spec/support/models_to_test.rb](../../../../sources/crmne__ruby_llm/spec/support/models_to_test.rb)<br>[spec/support/rspec_configuration.rb](../../../../sources/crmne__ruby_llm/spec/support/rspec_configuration.rb)<br>[spec/support/rubyllm_configuration.rb](../../../../sources/crmne__ruby_llm/spec/support/rubyllm_configuration.rb) |
| eval | 665 | [spec/rails_helper.rb](../../../../sources/crmne__ruby_llm/spec/rails_helper.rb)<br>[spec/ruby_llm_gemspec_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_gemspec_spec.rb)<br>[spec/ruby_llm_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_spec.rb)<br>[spec/spec_helper.rb](../../../../sources/crmne__ruby_llm/spec/spec_helper.rb)<br>[spec/support/generator_test_helpers.rb](../../../../sources/crmne__ruby_llm/spec/support/generator_test_helpers.rb)<br>[spec/support/models_to_test.rb](../../../../sources/crmne__ruby_llm/spec/support/models_to_test.rb)<br>[spec/support/rspec_configuration.rb](../../../../sources/crmne__ruby_llm/spec/support/rspec_configuration.rb)<br>[spec/support/rubyllm_configuration.rb](../../../../sources/crmne__ruby_llm/spec/support/rubyllm_configuration.rb) |
| security | 12 | [spec/ruby_llm/providers/vertex_ai_auth_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/providers/vertex_ai_auth_spec.rb)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_anthropic_claude-haiku-4-5_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_anthropic_claude-haiku-4-5_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_azure_grok-4-1-fast-non-reasoning_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_azure_grok-4-1-fast-non-reasoning_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_bedrock_amazon_nova-2-lite-v1_0_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_bedrock_amazon_nova-2-lite-v1_0_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_deepseek_deepseek-chat_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_deepseek_deepseek-chat_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_gemini_gemini-2_5-flash_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_gemini_gemini-2_5-flash_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_mistral_mistral-small-latest_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_mistral_mistral-small-latest_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_openai_gpt-5-nano_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_openai_gpt-5-nano_raises_appropriate_auth_error.yml) |
| ci | 7 | [.github/workflows/_gitleaks.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_gitleaks.yml)<br>[.github/workflows/_lint.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_lint.yml)<br>[.github/workflows/_test-matrix.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_test-matrix.yml)<br>[.github/workflows/docs.yml](../../../../sources/crmne__ruby_llm/.github/workflows/docs.yml)<br>[.github/workflows/main.yml](../../../../sources/crmne__ruby_llm/.github/workflows/main.yml)<br>[.github/workflows/pr.yml](../../../../sources/crmne__ruby_llm/.github/workflows/pr.yml)<br>[.github/workflows/release.yml](../../../../sources/crmne__ruby_llm/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [docs/_core_features/agents.md](../../../../sources/crmne__ruby_llm/docs/_core_features/agents.md) |
| docs | 85 | [README.md](../../../../sources/crmne__ruby_llm/README.md)<br>[spec/dummy/README.md](../../../../sources/crmne__ruby_llm/spec/dummy/README.md)<br>[docs/_config.yml](../../../../sources/crmne__ruby_llm/docs/_config.yml)<br>[docs/.gitignore](../../../../sources/crmne__ruby_llm/docs/.gitignore)<br>[docs/about.md](../../../../sources/crmne__ruby_llm/docs/about.md)<br>[docs/Gemfile](../../../../sources/crmne__ruby_llm/docs/Gemfile)<br>[docs/index.md](../../../../sources/crmne__ruby_llm/docs/index.md)<br>[docs/bin/build-versions.sh](../../../../sources/crmne__ruby_llm/docs/bin/build-versions.sh) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 665 | [spec/rails_helper.rb](../../../../sources/crmne__ruby_llm/spec/rails_helper.rb)<br>[spec/ruby_llm_gemspec_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_gemspec_spec.rb)<br>[spec/ruby_llm_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm_spec.rb)<br>[spec/spec_helper.rb](../../../../sources/crmne__ruby_llm/spec/spec_helper.rb)<br>[spec/support/generator_test_helpers.rb](../../../../sources/crmne__ruby_llm/spec/support/generator_test_helpers.rb)<br>[spec/support/models_to_test.rb](../../../../sources/crmne__ruby_llm/spec/support/models_to_test.rb) |
| CI workflows | 7 | [.github/workflows/_gitleaks.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_gitleaks.yml)<br>[.github/workflows/_lint.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_lint.yml)<br>[.github/workflows/_test-matrix.yml](../../../../sources/crmne__ruby_llm/.github/workflows/_test-matrix.yml)<br>[.github/workflows/docs.yml](../../../../sources/crmne__ruby_llm/.github/workflows/docs.yml)<br>[.github/workflows/main.yml](../../../../sources/crmne__ruby_llm/.github/workflows/main.yml)<br>[.github/workflows/pr.yml](../../../../sources/crmne__ruby_llm/.github/workflows/pr.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 12 | [spec/ruby_llm/providers/vertex_ai_auth_spec.rb](../../../../sources/crmne__ruby_llm/spec/ruby_llm/providers/vertex_ai_auth_spec.rb)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_anthropic_claude-haiku-4-5_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_anthropic_claude-haiku-4-5_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_azure_grok-4-1-fast-non-reasoning_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_azure_grok-4-1-fast-non-reasoning_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_bedrock_amazon_nova-2-lite-v1_0_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_bedrock_amazon_nova-2-lite-v1_0_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_deepseek_deepseek-chat_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_deepseek_deepseek-chat_raises_appropriate_auth_error.yml)<br>[spec/fixtures/vcr_cassettes/chat_error_handling_with_gemini_gemini-2_5-flash_raises_appropriate_auth_error.yml](../../../../sources/crmne__ruby_llm/spec/fixtures/vcr_cassettes/chat_error_handling_with_gemini_gemini-2_5-flash_raises_appropriate_auth_error.yml) |
| Agent instructions | 1 | [docs/_core_features/agents.md](../../../../sources/crmne__ruby_llm/docs/_core_features/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/bin/build-versions.sh`, `docs/bin/serve.sh`, `bin/console`.
2. Trace execution through entrypoints: `docs/bin/build-versions.sh`, `docs/bin/serve.sh`, `bin/console`.
3. Map agent/tool runtime through: `spec/ruby_llm/agent_rails_spec.rb`, `spec/ruby_llm/agent_spec.rb`, `spec/ruby_llm/context_spec.rb`.
4. Inspect retrieval/memory/indexing through: `spec/ruby_llm/embedding_spec.rb`, `spec/fixtures/vcr_cassettes/context_context_embed_operations_allows_specifying_a_model_at_embed_time.yml`, `spec/fixtures/vcr_cassettes/context_context_embed_operations_respects_context-specific_embedding_model.yml`.
5. Verify behavior through test/eval files: `spec/rails_helper.rb`, `spec/ruby_llm_gemspec_spec.rb`, `spec/ruby_llm_spec.rb`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 One delightful Ruby framework for every major AI provider. Build AI agents, chatbots, RAG apps, and multimodal workflows. 핵심 구조 신호는 Ruby, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
