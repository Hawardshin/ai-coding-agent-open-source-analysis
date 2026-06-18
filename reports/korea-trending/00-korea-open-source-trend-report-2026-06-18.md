# 한국 개발자 커뮤니티 트렌딩 오픈소스 500개 분석

생성일: 2026-06-18T00:02:16.992Z

## 검증 범위

- 선정 저장소: 500개
- 로컬 클론 성공: 500개
- 로컬 클론 실패: 0개
- 저장소별 상세 보고서: `reports/korea-trending/repositories/*.md`
- 구조/신호 데이터: `data/korea-trending-analysis-500.json`
- 클론 상태 데이터: `data/korea-trending-clone-status-500.json`


## 수집 기준

GeekNews, 국내 기술블로그, LinkedIn 공개 검색 스니펫을 정성 신호로 잡고, GitHub 검색/조직/seed 저장소를 recency, stars, forks, 한국 관련성, AI/RAG/MCP/LLM-wiki 신호로 다시 랭킹했다. LinkedIn은 로그인 장벽 때문에 공개 검색 결과 수준의 약한 신호로만 사용했다.

## 참조한 트렌드 소스

| source | title | signals | url |
| --- | --- | --- | --- |
| GeekNews | GeekNews latest page | local-llm, graph-memory-mcp, opencode-webui, openrouter, coreutils-windows | https://news.hada.io/ |
| GeekNews | Show GN: MemoryWeft graph-based AI Memory MCP | mcp, agent-memory, graph-rag, sqlite, postgresql | https://news.hada.io/topic?id=30557 |
| GeekNews | Show GN: OpenDocuments RAG platform | rag, knowledge-base, mcp, hybrid-search, lancedb, ollama | https://news.hada.io/topic?id=27910 |
| GeekNews | LLM-Wiki - LLM managed knowledge base | llm-wiki, agent-memory, markdown-wiki, claude-code, codex | https://news.hada.io/topic?id=28208 |
| GeekNews Weekly | GN#352 LLM Wiki / Korean Law MCP / local LLM server | llm-wiki, korean-law-mcp, claude-code, local-llm, lemonade | https://news.hada.io/weekly/202614 |
| GeekNews Show | Show GN open-source/product feed | macos-tooling, rust, javascript, lora, hangul-library, web-game | https://news.hada.io/show |
| 우아한형제들 기술블로그 | 2026 posts on RAG, harness engineering, MCP stdio, GenAI | rag, harness-engineering, cursor-rules, skills, mcp, genai-platform | https://techblog.woowahan.com/ |
| 컬리 기술블로그 | AI orchestration, LLM Wiki + RAG, Claude Code operations | ai-orchestration, task-dag, branch-hunt, local-semantic-search, llm-wiki-rag | https://helloworld.kurly.com/blog/ai-orchestration-2/ |
| 컬리 기술블로그 | Claude Code workflow and collection-script-first pattern | claude-code, mcp, collection-script, llm-wiki, rag | https://helloworld.kurly.com/blog/claude-code-redesign-my-day/ |
| 당근 기술블로그 | Karrot GenAI platform / LLM router | llm-router, ai-gateway, genai-platform | https://medium.com/daangn/karrots-genai-platform-5cf6e813838e |
| DEVOCEAN | Context Engineering / AI agent automation summaries | context-engineering, agent, rag, mcp, strands-agents | https://devocean.sk.com/blog/techBoardDetail.do?ID=167772&boardType=techBlog |
| Toss Tech | AI delegation, RAG, agent platforms, developer role shift | ai-delegation, rag, agent-platform, developer-workflow | https://toss.tech/article/will-ai-replace-developers |
| NAVER D2 | Engineering Day / platform and monitoring topics | error-monitoring, sdk, platform-engineering, frontend, infra | https://d2.naver.com/ |
| LinkedIn public search snippets | MCP/RAG/Agents and open-source AI stack posts | mcp, rag, ai-agent, open-source-ai-stack | https://www.linkedin.com/search/results/content/?keywords=MCP%20RAG%20Agents%20open%20source |


## 핵심 트렌드 해석

- MCP는 국내에서도 법률/공공데이터/금융/사내 도구 연결로 빠르게 확산 중이며, 단순 API 래퍼보다 에이전트가 호출하기 쉬운 도구 표면이 중요해지고 있다.
- RAG와 LLM 위키는 별개 흐름이 아니라 문서 수집, chunking, retrieval, provenance, memory update를 묶는 지속 지식베이스 문제로 합쳐지고 있다.
- 한국어/한글/국내 도메인 데이터는 범용 LLM 앱과 별도로 tokenizer, 형태소, HWP/HWPX, 법령/공시/청약/시장 데이터 연결에서 로컬 요구가 강하다.
- LINE/NAVER/Toss/Daangn/Samsung/NHN 계열은 AI만이 아니라 SDK, frontend DX, platform/infra 라이브러리까지 국내 실무 채택 가능성이 높은 기반 오픈소스를 계속 만든다.
- Claude Code/Codex류 워크플로는 README보다 AGENTS/CLAUDE/Cursor rules/spec docs/prompts 같은 에이전트 지침 파일이 실제 소스 탐색 품질을 좌우하는 쪽으로 이동하고 있다.
- 로컬 LLM과 self-hosted 지식베이스는 보안, 비용, 내부망 배포 요구 때문에 한국 기업 환경에서 계속 중요한 축이 될 가능성이 높다.


## 카테고리 분포

| category | count |
| --- | --- |
| korea-signal | 471 |
| llm-wiki-memory | 381 |
| spec-driven | 379 |
| security-compliance | 341 |
| graphMemory | 337 |
| frontend-dx | 300 |
| rag | 292 |
| ai-agent | 226 |
| evalObservability | 218 |
| llmFramework | 214 |
| example-rich | 195 |
| sdk-api | 175 |
| infra-observability | 151 |
| documentParsing | 144 |
| mcp | 124 |
| vectorSearch | 118 |
| localRuntime | 93 |
| local-llm | 83 |
| data-ml | 67 |
| context-engineering | 43 |
| coding-agent | 41 |
| frontend | 34 |
| security | 17 |
| llm-wiki | 11 |
| infra | 9 |


## 스택 분포

| stack | count |
| --- | --- |
| Node/TypeScript/JavaScript | 242 |
| Python | 238 |
| Java/Kotlin | 97 |
| C/C++ | 66 |
| docs/awesome-list | 37 |
| Go | 28 |
| Rust | 24 |
| Swift | 19 |
| .NET | 16 |
| Ruby | 10 |
| PHP | 8 |
| unknown/mixed | 1 |


## 감지 신호 분포

| signal | repos |
| --- | --- |
| Korean language / Korea domain | 430 |
| LLM wiki / memory / graph | 381 |
| Spec / doc-driven workflow | 379 |
| Security / compliance | 341 |
| Frontend / developer experience | 300 |
| RAG / retrieval | 282 |
| AI agent / tool use | 221 |
| Infra / observability | 151 |
| MCP / tool protocol | 123 |
| Local LLM / on-device inference | 83 |


## 우선 심층 분석 후보

| repo | score | stars | stack | categories | report |
| --- | --- | --- | --- | --- | --- |
| Marker-Inc-Korea/AutoRAG | 418 | 4832 | Python | ai-agent, data-ml, documentParsing, evalObservability, graphMemory | reports/korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md |
| toss/es-toolkit | 408 | 11148 | Node/TypeScript/JavaScript | ai-agent, evalObservability, frontend-dx, korea-signal, llmFramework | reports/korea-trending/repositories/toss__es-toolkit.md |
| line/centraldogma | 401 | 663 | Node/TypeScript/JavaScript, Python, Java/Kotlin | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory | reports/korea-trending/repositories/line__centraldogma.md |
| joungminsung/OpenDocuments | 397 | 80 | Node/TypeScript/JavaScript | ai-agent, context-engineering, documentParsing, evalObservability, frontend-dx | reports/korea-trending/repositories/joungminsung__OpenDocuments.md |
| line/armeria | 355 | 5117 | Node/TypeScript/JavaScript, Java/Kotlin | ai-agent, evalObservability, example-rich, frontend, frontend-dx | reports/korea-trending/repositories/line__armeria.md |
| line/line-bot-mcp-server | 346 | 599 | Node/TypeScript/JavaScript | ai-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__line-bot-mcp-server.md |
| naver/fe-news | 345 | 6268 | docs/awesome-list | ai-agent, data-ml, documentParsing, evalObservability, frontend | reports/korea-trending/repositories/naver__fe-news.md |
| line/line-bot-sdk-python | 326 | 2117 | Node/TypeScript/JavaScript, Python, Java/Kotlin | example-rich, frontend-dx, korea-signal, llm-wiki-memory, llmFramework | reports/korea-trending/repositories/line__line-bot-sdk-python.md |
| line/line-bot-sdk-nodejs | 326 | 1067 | Node/TypeScript/JavaScript, Python, Java/Kotlin | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__line-bot-sdk-nodejs.md |
| daangn/seed-design | 322 | 889 | Node/TypeScript/JavaScript | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/daangn__seed-design.md |
| naver/billboard.js | 321 | 5982 | Node/TypeScript/JavaScript | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/naver__billboard.js.md |
| naver/lispe | 317 | 594 | Node/TypeScript/JavaScript, Python, C/C++ | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/naver__lispe.md |
| toss/react-simplikit | 313 | 319 | Node/TypeScript/JavaScript | ai-agent, documentParsing, example-rich, frontend, frontend-dx | reports/korea-trending/repositories/toss__react-simplikit.md |
| Samsung/TizenRT | 312 | 642 | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++, Ruby, PHP | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/Samsung__TizenRT.md |
| line/line-bot-sdk-ruby | 309 | 491 | Node/TypeScript/JavaScript, Python, Java/Kotlin, Ruby | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__line-bot-sdk-ruby.md |
| line/promgen | 308 | 1124 | Node/TypeScript/JavaScript, Python | documentParsing, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/line__promgen.md |
| rawdev/MemoryWeft | 308 | 9 | Node/TypeScript/JavaScript, Python | ai-agent, context-engineering, documentParsing, evalObservability, frontend-dx | reports/korea-trending/repositories/rawdev__MemoryWeft.md |
| naver/nbase-arc | 307 | 180 | Python, Java/Kotlin, C/C++, Ruby | context-engineering, evalObservability, example-rich, graphMemory, infra-observability | reports/korea-trending/repositories/naver__nbase-arc.md |
| daangn/stackflow | 306 | 1017 | Node/TypeScript/JavaScript | ai-agent, evalObservability, example-rich, frontend, frontend-dx | reports/korea-trending/repositories/daangn__stackflow.md |
| toss/frontend-fundamentals | 305 | 1964 | Node/TypeScript/JavaScript | ai-agent, documentParsing, example-rich, frontend, frontend-dx | reports/korea-trending/repositories/toss__frontend-fundamentals.md |
| naver/arcus | 304 | 316 | Python | ai-agent, context-engineering, korea-signal, llm-wiki-memory, llmFramework | reports/korea-trending/repositories/naver__arcus.md |
| line/line-bot-sdk-java | 303 | 641 | Node/TypeScript/JavaScript, Python, Java/Kotlin | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal | reports/korea-trending/repositories/line__line-bot-sdk-java.md |
| naver/scavenger | 301 | 465 | Node/TypeScript/JavaScript, Python, Java/Kotlin | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/naver__scavenger.md |
| toss/suspensive | 299 | 1027 | Node/TypeScript/JavaScript | example-rich, frontend, frontend-dx, graphMemory, korea-signal | reports/korea-trending/repositories/toss__suspensive.md |
| line/line-bot-sdk-go | 299 | 951 | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/line__line-bot-sdk-go.md |
| Samsung/TizenFX | 299 | 210 | Python, .NET | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx | reports/korea-trending/repositories/Samsung__TizenFX.md |
| toss/es-hangul | 297 | 1829 | Node/TypeScript/JavaScript | documentParsing, evalObservability, frontend-dx, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/toss__es-hangul.md |
| line/abc-user-feedback | 297 | 376 | Node/TypeScript/JavaScript | ai-agent, evalObservability, frontend, frontend-dx, graphMemory | reports/korea-trending/repositories/line__abc-user-feedback.md |
| line/line-sdk-ios-swift | 294 | 876 | Node/TypeScript/JavaScript, Swift, Ruby | ai-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__line-sdk-ios-swift.md |
| toss/overlay-kit | 291 | 713 | Node/TypeScript/JavaScript | ai-agent, documentParsing, example-rich, frontend, frontend-dx | reports/korea-trending/repositories/toss__overlay-kit.md |
| line/decaton | 291 | 371 | Java/Kotlin | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/line__decaton.md |
| naver/fixture-monkey | 289 | 696 | Node/TypeScript/JavaScript, Java/Kotlin | data-ml, evalObservability, example-rich, frontend-dx, korea-signal | reports/korea-trending/repositories/naver__fixture-monkey.md |
| line/kotlin-jdsl | 288 | 821 | Node/TypeScript/JavaScript, Java/Kotlin | evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__kotlin-jdsl.md |
| kakao/actionbase | 288 | 220 | Node/TypeScript/JavaScript, Go, Java/Kotlin, Ruby | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability | reports/korea-trending/repositories/kakao__actionbase.md |
| line/line-fido2-server | 287 | 580 | Node/TypeScript/JavaScript, Java/Kotlin | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal | reports/korea-trending/repositories/line__line-fido2-server.md |
| naver/bergen | 285 | 274 | Python | ai-agent, evalObservability, graphMemory, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/naver__bergen.md |
| naver/egjs-infinitegrid | 284 | 2359 | Node/TypeScript/JavaScript | example-rich, frontend, frontend-dx, graphMemory, korea-signal | reports/korea-trending/repositories/naver__egjs-infinitegrid.md |
| toss/granite | 284 | 463 | Node/TypeScript/JavaScript, Java/Kotlin, Swift, C/C++ | evalObservability, example-rich, frontend, frontend-dx, graphMemory | reports/korea-trending/repositories/toss__granite.md |
| line/webpack.kr | 283 | 93 | Node/TypeScript/JavaScript | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/line__webpack.kr.md |
| daangn/websites | 281 | 676 | Node/TypeScript/JavaScript | documentParsing, frontend-dx, korea-signal, llm-wiki-memory, rag | reports/korea-trending/repositories/daangn__websites.md |
| minsung2da/stock-wiki | 279 | 0 | Python | ai-agent, coding-agent, context-engineering, documentParsing, evalObservability | reports/korea-trending/repositories/minsung2da__stock-wiki.md |
| Samsung/GearVRf | 278 | 410 | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++ | ai-agent, documentParsing, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/Samsung__GearVRf.md |
| line/line-bot-sdk-php | 277 | 733 | Node/TypeScript/JavaScript, Python, Java/Kotlin, PHP | example-rich, frontend-dx, korea-signal, rag, sdk-api | reports/korea-trending/repositories/line__line-bot-sdk-php.md |
| naver/egjs-flicking | 276 | 2921 | Node/TypeScript/JavaScript | example-rich, frontend, frontend-dx, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/naver__egjs-flicking.md |
| Samsung/ONE | 275 | 571 | Python, C/C++ | example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/Samsung__ONE.md |
| nhn/tui.editor | 274 | 17983 | Node/TypeScript/JavaScript | ai-agent, data-ml, example-rich, frontend, frontend-dx | reports/korea-trending/repositories/nhn__tui.editor.md |
| line/line-sdk-android | 273 | 150 | Node/TypeScript/JavaScript, Java/Kotlin, .NET | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal | reports/korea-trending/repositories/line__line-sdk-android.md |
| naver/splade | 272 | 994 | Python | documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/naver__splade.md |
| Samsung/veles | 272 | 917 | Node/TypeScript/JavaScript, Python, C/C++ | ai-agent, data-ml, documentParsing, evalObservability, example-rich | reports/korea-trending/repositories/Samsung__veles.md |
| daangn/ventyd | 271 | 40 | Node/TypeScript/JavaScript | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability | reports/korea-trending/repositories/daangn__ventyd.md |


## 원래 트렌드 랭킹 상위

| repo | score | stars | stack | categories | report |
| --- | --- | --- | --- | --- | --- |
| Marker-Inc-Korea/AutoRAG | 418 | 4832 | Python | ai-agent, data-ml, documentParsing, evalObservability, graphMemory | reports/korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md |
| toss/es-toolkit | 408 | 11148 | Node/TypeScript/JavaScript | ai-agent, evalObservability, frontend-dx, korea-signal, llmFramework | reports/korea-trending/repositories/toss__es-toolkit.md |
| line/centraldogma | 401 | 663 | Node/TypeScript/JavaScript, Python, Java/Kotlin | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory | reports/korea-trending/repositories/line__centraldogma.md |
| joungminsung/OpenDocuments | 397 | 80 | Node/TypeScript/JavaScript | ai-agent, context-engineering, documentParsing, evalObservability, frontend-dx | reports/korea-trending/repositories/joungminsung__OpenDocuments.md |
| line/line-bot-mcp-server | 346 | 599 | Node/TypeScript/JavaScript | ai-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__line-bot-mcp-server.md |
| naver/arcus | 304 | 316 | Python | ai-agent, context-engineering, korea-signal, llm-wiki-memory, llmFramework | reports/korea-trending/repositories/naver__arcus.md |
| line/armeria | 355 | 5117 | Node/TypeScript/JavaScript, Java/Kotlin | ai-agent, evalObservability, example-rich, frontend, frontend-dx | reports/korea-trending/repositories/line__armeria.md |
| toss/es-hangul | 297 | 1829 | Node/TypeScript/JavaScript | documentParsing, evalObservability, frontend-dx, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/toss__es-hangul.md |
| line/line-bot-sdk-python | 326 | 2117 | Node/TypeScript/JavaScript, Python, Java/Kotlin | example-rich, frontend-dx, korea-signal, llm-wiki-memory, llmFramework | reports/korea-trending/repositories/line__line-bot-sdk-python.md |
| naver/nbase-arc | 307 | 180 | Python, Java/Kotlin, C/C++, Ruby | context-engineering, evalObservability, example-rich, graphMemory, infra-observability | reports/korea-trending/repositories/naver__nbase-arc.md |
| naver/billboard.js | 321 | 5982 | Node/TypeScript/JavaScript | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/naver__billboard.js.md |
| line/line-bot-sdk-nodejs | 326 | 1067 | Node/TypeScript/JavaScript, Python, Java/Kotlin | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__line-bot-sdk-nodejs.md |
| line/webpack.kr | 283 | 93 | Node/TypeScript/JavaScript | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/line__webpack.kr.md |
| line/promgen | 308 | 1124 | Node/TypeScript/JavaScript, Python | documentParsing, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/line__promgen.md |
| line/line-bot-sdk-go | 299 | 951 | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/line__line-bot-sdk-go.md |
| line/line-bot-sdk-php | 277 | 733 | Node/TypeScript/JavaScript, Python, Java/Kotlin, PHP | example-rich, frontend-dx, korea-signal, rag, sdk-api | reports/korea-trending/repositories/line__line-bot-sdk-php.md |
| sillok-os/sillok | 260 | 0 | Python | ai-agent, context-engineering, documentParsing, evalObservability, example-rich | reports/korea-trending/repositories/sillok-os__sillok.md |
| kakaobrain/kogpt | 256 | 1012 | Python | graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag | reports/korea-trending/repositories/kakaobrain__kogpt.md |
| Samsung/TizenRT | 312 | 642 | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++, Ruby, PHP | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory | reports/korea-trending/repositories/Samsung__TizenRT.md |
| line/line-bot-sdk-java | 303 | 641 | Node/TypeScript/JavaScript, Python, Java/Kotlin | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal | reports/korea-trending/repositories/line__line-bot-sdk-java.md |
| naver/kapture | 266 | 541 | Python | data-ml, evalObservability, example-rich, graphMemory, korea-signal | reports/korea-trending/repositories/naver__kapture.md |
| naver/fe-news | 345 | 6268 | docs/awesome-list | ai-agent, data-ml, documentParsing, evalObservability, frontend | reports/korea-trending/repositories/naver__fe-news.md |
| Samsung/rlottie | 229 | 1407 | C/C++ | example-rich, korea-signal | reports/korea-trending/repositories/Samsung__rlottie.md |
| toss/suspensive | 299 | 1027 | Node/TypeScript/JavaScript | example-rich, frontend, frontend-dx, graphMemory, korea-signal | reports/korea-trending/repositories/toss__suspensive.md |
| line/kotlin-jdsl | 288 | 821 | Node/TypeScript/JavaScript, Java/Kotlin | evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__kotlin-jdsl.md |
| woowacourse/woowacourse-docs | 258 | 420 | docs/awesome-list | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, security-compliance | reports/korea-trending/repositories/woowacourse__woowacourse-docs.md |
| daangn/websites | 281 | 676 | Node/TypeScript/JavaScript | documentParsing, frontend-dx, korea-signal, llm-wiki-memory, rag | reports/korea-trending/repositories/daangn__websites.md |
| sktelecom/SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon | 253 | 8 | Python | ai-agent, coding-agent, documentParsing, frontend-dx, korea-signal | reports/korea-trending/repositories/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon.md |
| line/line-bot-sdk-ruby | 309 | 491 | Node/TypeScript/JavaScript, Python, Java/Kotlin, Ruby | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory | reports/korea-trending/repositories/line__line-bot-sdk-ruby.md |
| naver/fixture-monkey | 289 | 696 | Node/TypeScript/JavaScript, Java/Kotlin | data-ml, evalObservability, example-rich, frontend-dx, korea-signal | reports/korea-trending/repositories/naver__fixture-monkey.md |


## 데이터 사용 시 주의

- 이 산출물은 2026-06-18 현재 공개 웹/검색/GitHub 메타데이터와 로컬 shallow clone 기준이다.
- 정적 분석 결과이므로 런타임 동작, 보안성, 라이선스 적합성은 별도 검토가 필요하다.
- fileCount는 과도하게 큰 저장소에서 상한을 적용할 수 있다. `fileLimitHit=true` 항목은 별도 심층 스캔이 필요하다.
- 한국 트렌드 신호는 커뮤니티와 기술블로그의 질적 신호를 반영한 것이며, 전체 한국 개발자 생태계를 통계적으로 대표한다고 볼 수는 없다.
