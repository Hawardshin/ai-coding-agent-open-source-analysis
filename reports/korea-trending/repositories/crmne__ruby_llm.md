# crmne/ruby_llm

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/crmne/ruby_llm |
| local path | sources/crmne__ruby_llm |
| HEAD | 55987a8 |
| stars/forks | 0 / 0 |
| language | Ruby |
| license |  |
| pushedAt | 2026-06-17T12:00:25Z |
| trendScore / priorityScore | 67 / 166 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 254 | README.md, docs/_core_features/agents.md, spec/fixtures/vcr_cassettes/agent_can_ask_using_the_first_configured_chat_model.yml |
| RAG / retrieval | 207 | README.md, spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_a_single_text.yml, spec/fixtures/vcr_cassettes/embedding_basic_functionality_azure_cohere-embed-v3-english_can_handle_multiple_texts.yml |
| Spec / doc-driven workflow | 140 | spec/ruby_llm_gemspec_spec.rb, spec/ruby_llm/attachment_spec.rb, spec/ruby_llm/moderation_spec.rb |
| Security / compliance | 35 | spec/fixtures/vcr_cassettes/agent_can_ask_using_the_first_configured_chat_model.yml, spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_anthropic_claude-haiku-4-5_successfully_uses_the_system_prompt.yml, spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_azure_grok-4-1-fast-non-reasoning_successfully_uses_the_system_prompt.yml |
| Local LLM / on-device inference | 33 | README.md, spec/ruby_llm/active_record/acts_as_spec.rb, spec/ruby_llm/chat_request_options_spec.rb |
| LLM wiki / memory / graph | 3 | spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_deepseek_deepseek-chat_successfully_uses_the_system_prompt.yml, spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_mistral_mistral-small-latest_successfully_uses_the_system_prompt.yml, spec/ruby_llm/chat_content_spec.rb |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, graphMemory, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Ruby |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 992 |
| manifests | 2 |
| docs | 77 |
| tests | 663 |
| ci/ops | 7 |
| spec artifacts | 50 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Just ask questions |
| headings | Build a working Ruby AI chat in two minutes / Why RubyLLM? / Show me the code / Just ask questions / Analyze any file type / Multiple files at once / Stream responses / Generate images / Create embeddings / Transcribe audio to text |
| excerpt | <div align="center" <picture <source media=" prefers color scheme dark " srcset="/docs/assets/images/logotype dark.svg" <img src="/docs/assets/images/logotype.svg" alt="RubyLLM" height="120" width="250" </picture <strong One <em delightful</em Ruby framework for every major AI provider. Build AI agents, chatbots, RAG apps, and multimodal workflows in beautiful, expressive code. </strong Battle tested at <picture <source media=" prefers color scheme dark " srcset="https //chatwithwork.com/logotype dark.svg" <img src="https //chatwithwork.com/logotype.svg" alt="Chat with Work" height="30" align="absmiddle" </picture https //chatwithwork.com Fully private work AI ! Gem Version https //badge.fur |


## 주요 파일

### Manifests

- spec/dummy/README.md
- README.md


### Spec / Docs / Prompt Artifacts

- spec/dummy/README.md
- docs/_core_features/agents.md
- spec/ruby_llm_gemspec_spec.rb
- spec/ruby_llm_spec.rb
- spec/dummy/config/storage.yml
- spec/dummy/db/migrate/20250602134116_create_active_storage_tables.active_storage.rb
- spec/dummy/storage/.keep
- spec/dummy/tmp/storage/.keep
- spec/fixtures/vcr_cassettes/agent_can_ask_using_the_first_configured_chat_model.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_anthropic_claude-haiku-4-5_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_azure_grok-4-1-fast-non-reasoning_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_bedrock_amazon_nova-2-lite-v1_0_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_deepseek_deepseek-chat_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_gemini_gemini-2_5-flash_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_gpustack_qwen3_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_mistral_mistral-small-latest_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_ollama_qwen3_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_openai_gpt-5-nano_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_openrouter_claude-haiku-4-5_successfully_uses_the_system_prompt.yml
- spec/fixtures/vcr_cassettes/chat_basic_chat_functionality_perplexity_sonar_successfully_uses_the_system_prompt.yml


### Agent Instruction Files

- docs/_core_features/agents.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| spec | 663 |
| lib | 217 |
| docs | 73 |
| .github | 12 |
| bin | 5 |
| gemfiles | 5 |
| .env.example | 1 |
| .flayignore | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| .gitleaksignore | 1 |
| .overcommit.yml | 1 |
| .rspec | 1 |
| .rubocop.yml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .yml | 511 |
| .rb | 294 |
| .tt | 62 |
| .svg | 30 |
| .md | 29 |
| [no-ext] | 29 |
| .html | 5 |
| .gemfile | 4 |
| .rake | 4 |
| .json | 3 |
| .txt | 3 |
| .js | 2 |
| .sh | 2 |
| .toml | 2 |
| .docx | 1 |
| .enc | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
