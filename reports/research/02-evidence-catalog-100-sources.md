# AI 에이전트/하네스/컨텍스트/루프 엔지니어링 근거자료 165선

기준일: 2026-06-11 KST.  
범위: AI 코딩 에이전트, agent harness, tool use, MCP/A2A, context engineering, loop engineering, evaluation, benchmark, multi-agent architecture.  
원칙: 기업 공식 문서/엔지니어링 글을 우선하고, 논문/벤치마크/오픈소스 문서를 보조 근거로 사용했다. 서로 충돌하는 해석은 `03-conflicting-theories-and-open-questions.md`에 따로 보존한다.

## 1. Anthropic / Claude / Claude Code

| ID | 영역 | 출처 위치 | 핵심 메시지 | 분석 인사이트 |
|---|---|---|---|---|
| S001 | Agent design | [Anthropic, Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | 성공한 agent는 복잡한 프레임워크보다 단순하고 조합 가능한 pattern에서 시작하는 경우가 많다. | 30개 레포를 비교할 때 "복잡한 multi-agent"보다 context/tool loop의 기본 품질을 먼저 봐야 한다. |
| S002 | Context engineering | [Anthropic, Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | agent 품질은 prompt 작성보다 매 turn에 무엇을 context로 넣을지 설계하는 문제로 이동했다. | Codex, Aider, LangGraph, Context7의 차이는 context 선택/압축/분리 방식에서 크게 난다. |
| S003 | Harness | [Anthropic, Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) | 장기 실행 agent는 compaction, progress tracking, validation, recovery가 없으면 context window를 채우고 drift한다. | OpenHands, Codex, LangGraph, Claude Code류 분석에서 장기 실행 harness를 별도 축으로 둬야 한다. |
| S004 | Harness | [Anthropic, Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) | 장기 application development에서는 harness 설계가 frontier 성능을 끌어내는 핵심이다. | 모델 비교만으로는 agent 성능을 설명할 수 없고, 테스트/검증/작업 분할 harness가 성능의 일부다. |
| S005 | Evaluation | [Anthropic, Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) | agent eval은 출력만 보지 말고 trajectory, tool use, failure mode를 평가해야 한다. | 레포별 보고서의 "실행 플로우"와 "위험요소"를 평가 자료로 연결할 수 있다. |
| S006 | Evaluation noise | [Anthropic, Quantifying infrastructure noise in agentic coding evals](https://www.anthropic.com/engineering/infrastructure-noise) | agentic coding eval은 runtime, time limit, resource budget, dependency flake의 영향을 받는다. | SWE-agent/OpenHands/SWE-bench 결과를 볼 때 harness 환경을 점수의 일부로 봐야 한다. |
| S007 | Evaluation design | [Anthropic, Designing AI-resistant technical evaluations](https://www.anthropic.com/engineering/AI-resistant-technical-evaluations) | AI가 시험 자체를 잘 풀게 되면 평가 문제를 계속 재설계해야 한다. | 공개 benchmark는 시간이 지나면 agent 능력보다 benchmark 노출/최적화를 측정할 수 있다. |
| S008 | Containment | [Anthropic, How we contain Claude across products](https://www.anthropic.com/engineering/how-we-contain-claude) | agent가 강해질수록 blast radius를 제한하는 containment가 제품 설계 핵심이 된다. | browser/computer-use agent와 로컬 coding CLI는 모델보다 격리 경계가 중요하다. |
| S009 | Managed agents | [Anthropic, Scaling Managed Agents](https://www.anthropic.com/engineering/managed-agents) | "brain"과 "hands"를 분리해 여러 harness를 관리하는 meta-harness 접근을 제시한다. | MCP, OpenHands, Codex, Claude Agent SDK처럼 실행 손을 분리하는 흐름과 연결된다. |
| S010 | Claude Code | [Anthropic, Claude Code best practices](https://www.anthropic.com/engineering/claude-code-best-practices) | 먼저 탐색하고 계획한 뒤 구현하며, context와 검증 명령을 명시적으로 관리해야 한다. | oh-my-claudecode/oh-my-codex류는 이 운영 규칙을 파일과 hook으로 제품화한다. |
| S011 | Claude Code docs | [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview) | Claude Code는 터미널에서 파일을 읽고 명령을 실행하고 코드를 수정하는 agentic coding tool이다. | Codex/Gemini CLI/Qwen Code와 같은 공식 CLI 계열 비교 기준이 된다. |
| S012 | Workflow | [Claude Code common workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows) | 코드 탐색, 버그 수정, 리팩터링, 테스트 등 작업 유형별 workflow를 문서화한다. | agent는 단일 prompt가 아니라 반복 가능한 workflow recipe가 있어야 실제 사용성이 오른다. |
| S013 | Hooks | [Claude Code hooks guide](https://docs.anthropic.com/en/docs/claude-code/hooks-guide) | hook은 LLM이 선택하지 않아도 항상 실행되는 결정적 제어점이다. | hook은 생산성 장치이면서 숨은 실행 경로가 되므로 oh-my-* 계열 위험 분석에 중요하다. |
| S014 | Hooks | [Claude Code hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks) | hook event schema, exit code, async/HTTP/prompt hook, MCP tool hook을 정의한다. | agent lifecycle의 programmatic interception이 표준 제품 기능으로 이동했다. |
| S015 | Subagents | [Claude Code subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents) | 특정 작업용 subagent를 만들어 context와 역할을 분리할 수 있다. | multi-agent가 framework뿐 아니라 coding CLI 운영 기능으로 내려오고 있다. |
| S016 | Skills | [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/skills) | skills는 Claude Code에 reusable workflow와 명령을 추가한다. | Codex skills/plugins, Claude skills, Qwen skills를 같은 trend로 봐야 한다. |
| S017 | Agent Skills | [Anthropic Agent Skills overview](https://console.anthropic.com/docs/en/agents-and-tools/agent-skills/overview) | Skill은 instruction, metadata, optional resource를 묶은 modular capability다. | agent 확장은 prompt snippet이 아니라 discoverable capability package로 가고 있다. |
| S018 | Skill authoring | [Skill authoring best practices](https://console.anthropic.com/docs/en/agents-and-tools/agent-skills/best-practices) | 좋은 Skill은 간결하고 구조화되어 있으며 실제 사용으로 테스트되어야 한다. | skill/plugin 생태계는 테스트와 provenance 없이는 prompt supply chain 위험이 된다. |
| S019 | MCP/code execution | [Anthropic, Code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) | 수백/수천 tool을 모두 context에 넣지 말고 code execution과 MCP로 on-demand 처리한다. | Context7/MCP servers/Composio는 context 폭발 문제의 인프라 해법이다. |
| S020 | Tool use | [Anthropic, Advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use) | 고급 tool use는 tool design, schema, 결과 처리, reasoning space를 함께 설계해야 한다. | tool calling은 API 기능이 아니라 agent UX와 reliability 문제다. |
| S021 | MCP | [Anthropic, Model Context Protocol announcement](https://www.anthropic.com/news/model-context-protocol) | MCP는 모델과 외부 context/tool을 연결하는 개방 표준으로 제안되었다. | MCP 서버 레포는 단순 tool 모음이 아니라 agent 생태계의 연결 프로토콜이다. |
| S022 | MCP docs | [Claude Code MCP docs](https://docs.anthropic.com/en/docs/claude-code/mcp) | Claude Code는 MCP로 데이터소스와 외부 도구를 직접 읽고 작동할 수 있다. | MCP가 coding CLI의 core extension surface가 되었다. |
| S023 | Computer use | [Anthropic computer use docs](https://docs.anthropic.com/en/docs/agents-and-tools/computer-use) | 모델이 GUI를 조작하려면 beta 기능, 격리, 보안 경고를 함께 고려해야 한다. | browser-use/nanobrowser/Open Interpreter류의 위험 분석 근거다. |
| S024 | Prompt caching | [Anthropic prompt caching docs](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) | 반복 prefix와 긴 context를 캐시해 비용/지연을 줄일 수 있다. | context engineering은 품질뿐 아니라 비용 구조와도 연결된다. |
| S025 | Autonomy | [Anthropic, Measuring AI agent autonomy](https://www.anthropic.com/research/measuring-agent-autonomy) | agent가 발전하면 사용자는 직접 승인자에서 감독자 역할로 이동한다. | approval UX는 장기적으로 monitoring/containment UX로 바뀔 수 있다. |
| S026 | Tool design | [Anthropic, Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents) | agent용 tool은 사람용 API wrapper와 다르게, 명확한 affordance와 token-efficient response가 필요하다. | MCP server와 Composio action을 평가할 때 tool schema 품질을 봐야 한다. |
| S027 | Sandboxing | [Anthropic, Claude Code sandboxing](https://www.anthropic.com/engineering/claude-code-sandboxing) | filesystem/network isolation은 permission prompt 피로를 줄이면서 안전성을 높일 수 있다. | Codex sandbox, OpenHands sandbox, Claude Code sandbox를 같은 설계 축으로 묶을 수 있다. |
| S028 | Auto mode | [Anthropic, Claude Code auto mode](https://www.anthropic.com/engineering/claude-code-auto-mode) | 승인 자동화는 allowlist, project-scope write, classifier를 계층화해야 한다. | "skip permissions"와 "안전한 autonomy" 사이에 중간 설계가 필요하다. |
| S029 | Multi-agent research | [Anthropic, Multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) | parallel subagents는 breadth-first research에서 효과적이지만 token cost가 크게 늘어난다. | multi-agent는 coding보다 research에 더 잘 맞을 수 있다는 반론 근거다. |
| S030 | Think tool | [Anthropic, Claude think tool](https://www.anthropic.com/engineering/claude-think-tool) | long chain tool use 중 tool output을 검토할 별도 reasoning step이 유용하다. | loop engineering에서 "행동 전/후 사고 공간"을 tool로 만들 수 있다. |
| S031 | Agent SDK | [Claude Agent SDK overview](https://docs.anthropic.com/en/docs/claude-code/sdk) | Claude Code의 tool, loop, context management를 SDK로 사용할 수 있다. | 완제품 CLI와 SDK/runtime의 경계가 흐려지고 있다. |
| S032 | Agent SDK | [Anthropic, Building agents with Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk) | agent를 만들 때 tool, bash/scripts, code generation을 task에 맞게 조합하라고 설명한다. | 코드 실행을 agent의 reliable intermediate representation으로 보는 흐름이다. |
| S033 | Model release | [Anthropic, Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8) | 최신 모델은 coding, browser-agent, long-running task에서 더 나은 판단과 tool efficiency를 내세운다. | 모델 성능 향상은 harness 필요성을 없애지 않고 더 긴 작업을 가능하게 만든다. |

## 2. OpenAI / Codex / Agents SDK

| ID | 영역 | 출처 위치 | 핵심 메시지 | 분석 인사이트 |
|---|---|---|---|---|
| S034 | Agent guide | [OpenAI, Practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) | agent는 목표, tool, guardrail, human oversight가 있는 system으로 설계해야 한다. | 레포 분석에서 tool surface와 guardrail을 별도 평가 축으로 둬야 한다. |
| S035 | Agent guide | [OpenAI practical guide PDF](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) | 기업용 agent 구축을 task selection, orchestration, evaluation 관점으로 정리한다. | "무엇을 agent화할 것인가"가 "어떤 모델을 쓸 것인가"보다 먼저다. |
| S036 | Agent platform | [OpenAI, New tools for building agents](https://openai.com/index/new-tools-for-building-agents/) | Responses API, built-in tools, Agents SDK, observability를 agent stack으로 묶는다. | 공식 agent platform도 tool, tracing, orchestration을 핵심 primitive로 본다. |
| S037 | Agents SDK | [OpenAI Agents SDK docs](https://developers.openai.com/api/docs/guides/agents) | Agents SDK는 orchestration, tools, approvals, state, handoff를 지원한다. | LangGraph/AutoGen과 vendor SDK의 기능 경계가 가까워지고 있다. |
| S038 | Observability | [OpenAI Agents integrations and observability](https://developers.openai.com/api/docs/guides/agents/integrations-observability) | tracing으로 model call, tool call, handoff, guardrail, custom span을 추적한다. | agent 개발은 로그가 아니라 structured trace가 기본 디버깅 단위가 된다. |
| S039 | Tools | [OpenAI, Using tools](https://developers.openai.com/api/docs/guides/tools) | web search, file search, function calling, MCP, deferred tool discovery가 model capability를 확장한다. | tool catalog와 tool search는 context window를 동적으로 관리하는 방식이다. |
| S040 | MCP/connectors | [OpenAI, MCP and connectors](https://developers.openai.com/api/docs/guides/tools-connectors-mcp) | remote MCP server와 connectors는 자동 호출 또는 explicit approval로 제한할 수 있다. | MCP는 편의 기능이 아니라 approval policy를 동반해야 하는 실행 경계다. |
| S041 | MCP server | [OpenAI, Building MCP servers](https://developers.openai.com/api/docs/mcp) | MCP server는 OpenAI가 외부 서비스에 접근/행동할 수 있게 하므로 malicious tool definition과 sensitive data를 피해야 한다. | MCP server는 agent의 supply chain이자 policy boundary다. |
| S042 | Codex | [OpenAI Codex developer overview](https://developers.openai.com/codex) | Codex는 코드 작성, codebase 이해, review를 지원하는 개발자용 agent다. | Codex는 CLI뿐 아니라 IDE/app/cloud 표면을 묶는 제품군으로 읽어야 한다. |
| S043 | Codex CLI | [Codex CLI docs](https://developers.openai.com/codex/cli) | Codex CLI는 터미널에서 로컬 코드 읽기, 수정, 실행을 수행하는 Rust 기반 open source agent다. | 소스 분석의 thread/sandbox/runtime 구조가 공식 제품 설명과 맞물린다. |
| S044 | Codex features | [Codex CLI features](https://developers.openai.com/codex/cli/features) | interactive mode, exec mode, review, slash commands 등 workflow별 표면을 제공한다. | terminal agent는 단일 chat UI보다 여러 mode를 가진 제품이 된다. |
| S045 | Codex reference | [Codex CLI command reference](https://developers.openai.com/codex/cli/reference) | 명령과 flag마다 stable/experimental 및 위험 조합을 문서화한다. | agent CLI의 위험 기능은 문서와 config에서 명확히 노출되어야 한다. |
| S046 | Codex MCP | [Codex MCP docs](https://developers.openai.com/codex/mcp) | Codex는 CLI와 IDE extension에서 MCP server를 통해 외부 context/tool에 연결된다. | MCP가 OpenAI/Anthropic 양쪽 공식 agent의 공통 확장면이다. |
| S047 | Codex Skills | [Codex skills docs](https://developers.openai.com/codex/skills) | Codex skills는 progressive disclosure로 context를 절약하는 reusable workflow format이다. | Skill은 context engineering을 배포 단위로 만든다. |
| S048 | Codex config | [Codex config basics](https://developers.openai.com/codex/config-basic) | user-level과 repo-level config를 계층화하고 CLI/IDE extension이 공유한다. | agent 권한/행동은 global config와 repo config 충돌을 고려해야 한다. |
| S049 | Codex changelog | [Codex changelog](https://developers.openai.com/codex/changelog) | branch/worktree setup, `/goal`, inline review 등 agent workflow 기능이 계속 확장된다. | coding agent는 Git/worktree/thread/workflow manager로 진화 중이다. |
| S050 | Codex launch | [OpenAI, Introducing Codex](https://openai.com/index/introducing-codex/) | Codex를 소프트웨어 엔지니어링 작업을 맡는 cloud/agent product로 소개한다. | CLI 소스만이 아니라 web/cloud Codex 제품 철학과 함께 봐야 한다. |
| S051 | Computer use | [OpenAI, Computer-Using Agent](https://openai.com/index/computer-using-agent/) | computer-use model은 GUI action을 통해 web/desktop 작업을 수행한다. | browser-use/nanobrowser와 같은 GUI harness의 산업적 배경이다. |
| S052 | Responses API | [OpenAI, Migrate to the Responses API](https://developers.openai.com/api/docs/guides/migrate-to-responses) | Responses API는 tool use와 multi-turn state의 중심 API로 배치된다. | agent loop는 chat completion에서 stateful response/workflow API로 이동한다. |
| S053 | Function calling | [OpenAI function calling docs](https://developers.openai.com/api/docs/guides/function-calling) | 모델 출력과 개발자 함수 실행 사이에는 schema와 validation이 필요하다. | tool calling은 deterministic contract와 probabilistic decision의 접점이다. |
| S054 | Computer use docs | [OpenAI computer use tool docs](https://developers.openai.com/api/docs/guides/tools-computer-use) | computer use는 화면 관찰과 action execution을 tool로 제공한다. | GUI agent 분석에서 observation/action/retry 분리가 핵심이다. |
| S055 | Prompt caching | [OpenAI prompt caching docs](https://developers.openai.com/api/docs/guides/prompt-caching) | 반복 prompt prefix는 latency와 비용을 줄이는 자동 캐시 대상이다. | long context agent는 cache-friendly prefix 설계도 비용 최적화 요소다. |
| S056 | Prompt caching | [OpenAI prompt caching cookbook](https://developers.openai.com/cookbook/examples/prompt_caching_201) | system prompt, tools, 반복 message를 prefix로 안정화하면 cache hit에 유리하다. | skill/tool definitions를 매번 같은 순서로 두는 것이 비용에 영향을 준다. |
| S057 | Tracing | [OpenAI Agents Python tracing](https://openai.github.io/openai-agents-python/tracing/) | Agents SDK는 LLM generation, tool call, handoff, guardrail, custom event를 trace한다. | multi-agent와 tool-rich agent는 trace 없이는 원인 분석이 어렵다. |
| S058 | Benchmark critique | [OpenAI, SWE-bench Verified no longer measures frontier coding](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/) | SWE-bench Verified는 오염과 flawed tests로 frontier coding 능력을 더 이상 잘 측정하지 못한다고 주장한다. | 벤치마크 점수는 시간에 따라 소진되는 신호이며, 갈등 이론 문서에 별도 보존해야 한다. |

## 3. Google / ADK / A2A

| ID | 영역 | 출처 위치 | 핵심 메시지 | 분석 인사이트 |
|---|---|---|---|---|
| S059 | ADK | [Google ADK docs](https://google.github.io/adk-docs/) | ADK는 prompt/tool call에서 multi-agent, graph workflow, evaluation, deployment까지 확장되는 agent toolkit이다. | Google도 agent를 software engineering lifecycle로 다룬다. |
| S060 | ADK enterprise | [Google Cloud, Agent Development Kit](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/adk) | ADK는 local 실행과 Cloud Run/GKE/Runtime 배포, trajectory evaluation을 연결한다. | local agent 개발과 enterprise deployment가 같은 SDK로 이어지는 흐름이다. |
| S061 | ADK blog | [Google Developers Blog, ADK/Agent Engine/A2A enhancements](https://developers.googleblog.com/en/agents-adk-agent-engine-a2a-enhancements-google-io/) | ADK, Agent Engine, A2A를 묶어 agent project를 build/run/govern하는 플랫폼으로 제시한다. | Google stack은 SDK, runtime, interop protocol을 함께 밀고 있다. |
| S062 | Context | [ADK context docs](https://google.github.io/adk-docs/context/) | context는 agent와 tool이 현재 operation에서 사용할 수 있는 배경 정보 bundle이다. | context를 prompt 문자열이 아니라 runtime object로 다루는 추세다. |
| S063 | Session/state/memory | [ADK sessions docs](https://google.github.io/adk-docs/sessions/) | ADK는 Session, State, Memory로 multi-turn continuity를 구조화한다. | Codex thread/session, LangGraph state/checkpoint와 비교되는 공식 개념 모델이다. |
| S064 | Memory | [ADK memory docs](https://google.github.io/adk-docs/sessions/memory/) | memory는 항상 preload하거나 agent가 필요할 때 LoadMemory로 불러올 수 있다. | memory도 "항상 넣기"와 "필요할 때 검색"이라는 충돌 축이 있다. |
| S065 | State | [ADK state docs](https://google.github.io/adk-docs/sessions/state/) | session state는 interaction-specific scratchpad 역할을 한다. | long-running agent에는 conversation history와 mutable working state를 분리해야 한다. |
| S066 | Evaluation | [ADK evaluation docs](https://google.github.io/adk-docs/evaluate/) | ADK는 dataset과 criteria에 대한 agent evaluation 방법을 제공한다. | evaluation이 SDK의 부가 기능이 아니라 핵심 lifecycle로 들어왔다. |
| S067 | Evaluation criteria | [ADK evaluation criteria](https://google.github.io/adk-docs/evaluate/criteria/) | tool trajectory, response quality, safety를 기준으로 agent performance를 평가한다. | output-only evaluation보다 trajectory/safety 중심으로 이동한다. |
| S068 | Integrations | [ADK integrations](https://google.github.io/adk-docs/integrations/) | observability, memory, code execution, computer use, MCP, enterprise apps를 integration catalog로 제공한다. | agent platform 경쟁은 integration catalog 경쟁이기도 하다. |
| S069 | Loop agents | [ADK loop workflow](https://google.github.io/adk-docs/agents/workflow-agents/loop-agents/) | loop agent는 max iterations와 escalation/termination condition이 필요하다. | loop engineering에서 stop condition은 필수 안전장치다. |
| S070 | A2A | [A2A protocol docs](https://a2a-protocol.org/latest/) | A2A는 다른 vendor/framework agent가 안전하게 통신하고 협업하도록 하는 open protocol이다. | MCP가 tool-to-agent라면 A2A는 agent-to-agent 경계다. |
| S071 | A2A spec | [A2A specification](https://a2a-protocol.org/latest/specification/) | 독립적이고 opaque한 agent system 사이의 interaction model을 표준화한다. | agent delegation이 product boundary를 넘는 순간 protocol이 필요해진다. |
| S072 | A2A what is | [What is A2A](https://a2a-protocol.org/latest/topics/what-is-a2a/) | A2A는 agent discovery, capability description, task delegation을 다룬다. | codex-plugin-cc류 bridge는 A2A 같은 표준화 요구를 예고한다. |
| S073 | A2A discovery | [A2A agent discovery](https://a2a-protocol.org/latest/topics/agent-discovery/) | agent card/discovery는 agent capability를 찾고 연결하는 절차를 정의한다. | 향후 agent marketplace/registry의 기반 개념이다. |
| S074 | A2A 1.0 | [A2A 1.0 announcement](https://a2a-protocol.org/latest/announcing-1.0/) | A2A 1.0은 여러 대기업 참여와 Linux Foundation governance를 내세운다. | interop은 단일 vendor lock-in을 줄이려는 기업 요구와 연결된다. |
| S075 | A2A GitHub | [a2aproject/A2A](https://github.com/a2aproject/A2A) | protocol spec과 reference material을 공개 저장소로 관리한다. | agent protocol도 open-source governance가 경쟁력 요소다. |
| S076 | A2A Python | [a2aproject/a2a-python](https://github.com/a2aproject/a2a-python) | Python implementation은 A2A client/server adoption을 돕는다. | 표준은 SDK 구현이 있어야 실제 agent 제품에 들어간다. |

## 4. Microsoft / AutoGen / Agent Framework / Foundry

| ID | 영역 | 출처 위치 | 핵심 메시지 | 분석 인사이트 |
|---|---|---|---|---|
| S077 | Agent framework | [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/) | Agent Framework는 Semantic Kernel과 AutoGen의 후속으로 single/multi-agent, state, telemetry, workflow를 통합한다. | Microsoft도 AutoGen 단독보다 enterprise framework 통합으로 방향을 옮겼다. |
| S078 | Agent framework | [Microsoft Agent Framework 1.0](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) | .NET/Python 1.0 release는 multi-provider, multi-agent orchestration, A2A/MCP interop을 강조한다. | agent framework가 production API 안정성과 interop을 경쟁 요소로 삼는다. |
| S079 | Foundry | [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview) | Foundry Agent Service는 web/file search, memory, code interpreter, MCP, custom functions, tracing을 제공한다. | managed cloud agent는 built-in tools와 observability를 제품화한다. |
| S080 | Tool catalog | [Foundry Agent Service tool catalog](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-catalog) | built-in/external tool authentication과 connection model을 구분한다. | tool auth는 agent platform의 핵심 운영 문제다. |
| S081 | Tool best practice | [Foundry tool best practices](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-best-practice) | tool_choice, run trace, tool input/output review로 tool reliability와 security를 높인다. | OpenAI/Anthropic과 동일하게 trace와 tool governance가 핵심이다. |
| S082 | Transparency | [Foundry Agent Service transparency note](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/agents/transparency-note) | Agent Service는 reason, plan, execute를 가능하게 하지만 책임 있는 사용과 guardrail이 필요하다. | cloud agent는 책임 있는 AI 문서까지 제품 요구사항에 포함된다. |
| S083 | Browser automation | [Foundry browser automation classic tools](https://learn.microsoft.com/en-us/azure/foundry-classic/agents/how-to/tools-classic/overview) | browser automation, code interpreter, file search 같은 tool class를 제공한다. | browser/computer-use 기능이 managed platform에도 들어오고 있다. |
| S084 | AutoGen project | [Microsoft Research AutoGen](https://www.microsoft.com/en-us/research/project/autogen/) | AutoGen은 여러 AI agent가 협력해 task를 해결하는 open-source framework다. | multi-agent research의 대표적 산업 연구 흐름이다. |
| S085 | AutoGen GitHub | [microsoft/autogen](https://github.com/microsoft/autogen) | AutoGen은 maintenance mode로 전환되었고 Agent Framework 후속 전환을 알린다. | 기존 오픈소스 레포의 현 상태와 공식 방향이 갈라질 수 있다. |
| S086 | AutoGen docs | [AutoGen stable docs](https://microsoft.github.io/autogen/stable/) | AutoGen은 Core, AgentChat, Extensions로 구성된다. | framework 내부도 runtime/core와 high-level API를 분리한다. |
| S087 | AgentChat | [AutoGen AgentChat](https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/index.html) | AgentChat은 multi-agent application을 위한 high-level API다. | CrewAI/Agno와 비교되는 고수준 multi-agent UX다. |
| S088 | Teams | [AutoGen Teams](https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/tutorial/teams.html) | RoundRobin, Selector, MagenticOneGroupChat 같은 team pattern을 제공한다. | multi-agent는 agent 수보다 speaker/orchestrator policy가 중요하다. |
| S089 | Magentic-One docs | [AutoGen Magentic-One](https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/magentic-one.html) | Orchestrator, WebSurfer, FileSurfer, Coder, ComputerTerminal이 open-ended task를 분담한다. | specialist architecture는 OpenHands/browser-use/SWE-agent와도 비교된다. |
| S090 | Magentic-One ref | [autogen_ext MagenticOne reference](https://microsoft.github.io/autogen/stable//reference/python/autogen_ext.teams.magentic_one.html) | MagenticOne은 FileSurfer, WebSurfer, Coder, Executor를 통합한 group chat class다. | multi-agent pattern이 구체 class/API로 제품화된다. |
| S091 | State | [AutoGen managing state](https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/tutorial/state.html) | agents, teams, termination conditions의 상태 저장/복원을 다룬다. | multi-agent도 durable state 없이는 장기 작업을 안정화하기 어렵다. |
| S092 | Human-in-loop | [AutoGen human-in-the-loop](https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/tutorial/human-in-the-loop.html) | UserProxyAgent 등으로 team run 중 human feedback을 받을 수 있다. | HITL은 framework와 managed service 모두의 공통 요구사항이다. |
| S093 | Magentic-One article | [Microsoft Research, Magentic-One](https://www.microsoft.com/en-us/research/articles/magentic-one-a-generalist-multi-agent-system-for-solving-complex-tasks/) | generalist multi-agent system이 web/file/code/terminal task를 해결한다. | multi-agent가 generalist task 해결의 한 방향이라는 강한 주장이다. |
| S094 | Magentic-One paper | [Magentic-One arXiv](https://arxiv.org/abs/2411.04468) | orchestrator-led specialist agents를 통한 broad task 해결을 논문화했다. | 단일 agent 단순성 주장과 충돌하는 주요 근거다. |
| S095 | AutoGen paper | [AutoGen paper](https://arxiv.org/abs/2308.08155) | multi-agent conversation framework로 LLM application을 구성한다. | 초기 multi-agent framework 논의의 핵심 reference다. |
| S096 | AutoGen v0.4 | [Microsoft Research, AutoGen v0.4](https://www.microsoft.com/en-us/research/blog/autogen-v0-4-reimagining-the-foundation-of-agentic-ai-for-scale-extensibility-and-robustness/) | v0.4는 async messaging, modularity, observability, distributed runtime을 강조한다. | agent framework는 scale/observability 문제로 진화했다. |
| S097 | Semantic Kernel | [Semantic Kernel agent framework](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/) | Semantic Kernel은 agent abstraction과 orchestration 기능을 제공한다. | Microsoft stack 내에서도 여러 agent abstraction이 합쳐지는 중이다. |

## 5. 오픈소스 프로젝트/프레임워크 문서

| ID | 영역 | 출처 위치 | 핵심 메시지 | 분석 인사이트 |
|---|---|---|---|---|
| S098 | LangGraph | [LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview) | LangGraph는 stateful agent를 위한 low-level orchestration framework다. | LangGraph는 agent 앱이 아니라 durable execution kernel에 가깝다. |
| S099 | LangGraph | [LangGraph interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts) | interrupt는 human-in-loop와 pause/resume workflow를 가능하게 한다. | HITL은 UX 기능이 아니라 runtime primitive로 다뤄진다. |
| S100 | LangGraph | [LangGraph GitHub](https://github.com/langchain-ai/langgraph) | LangGraph는 resilient agents와 graph runtime을 공개 레포로 제공한다. | 소스 레벨 Pregel/checkpoint 구조와 공식 포지션이 일치한다. |
| S101 | Context | [LangChain, Context engineering for agents](https://www.langchain.com/blog/context-engineering-for-agents) | context engineering은 write/select/compress/isolate 등 여러 전략의 조합이다. | Anthropic context 글과 같은 방향으로 agent 품질의 중심이 context로 이동한다. |
| S102 | 12-factor | [HumanLayer, 12-factor agents](https://github.com/humanlayer/12-factor-agents) | production agent는 prompt ownership, tool design, state, control flow를 명시적으로 다뤄야 한다. | framework 의존보다 control flow ownership을 강조하는 대안 이론이다. |
| S103 | 12-factor | [HumanLayer, 12-factor agents blog](https://www.humanlayer.dev/blog/12-factor-agents) | agent를 software system처럼 관리하고 tool/human interaction을 명시적으로 설계한다. | "agent는 magic loop가 아니라 engineering artifact"라는 관점이다. |
| S104 | Harness | [Martin Fowler, Harness Engineering](https://martinfowler.com/articles/harness-engineering.html) | agent harness는 model과 tool을 둘러싼 실행/검증/관찰 구조다. | 레포 비교의 단위가 "model wrapper"가 아니라 harness여야 함을 뒷받침한다. |
| S105 | Harness | [Augment Code, Harness Engineering AI Coding Agents](https://www.augmentcode.com/guides/harness-engineering-ai-coding-agents) | coding agent의 품질은 repo context, tool selection, validation loop를 잘 묶는 harness에서 나온다. | 상용 coding agent 업체들도 harness language를 사용한다. |
| S106 | Code-as-harness | [Awesome Code-as-Agent-Harness Papers](https://github.com/YennNing/Awesome-Code-as-Agent-Harness-Papers) | 코드가 agent harness로 쓰이는 논문과 프로젝트를 큐레이션한다. | code execution과 agent control flow를 연결하는 연구 축이 생겼다. |
| S107 | OpenDev | [OpenDev terminal coding agent paper](https://arxiv.org/html/2603.05344v1) | terminal coding agent를 open-source로 구축/평가하는 흐름을 정리한다. | Codex/Gemini CLI류를 연구 대상으로 삼는 최신 흐름이다. |
| S108 | browser-use | [browser-use docs](https://docs.browser-use.com/) | browser-use는 agent가 browser를 관찰하고 조작하는 library/runtime을 제공한다. | browser state abstraction이 browser agent의 핵심 자산이다. |
| S109 | OpenHands | [OpenHands docs](https://docs.all-hands.dev/) | OpenHands는 개발 agent가 browser, shell, file workspace를 사용하는 환경을 제공한다. | full workspace agent는 IDE/CLI보다 더 넓은 execution surface를 가진다. |
| S110 | Aider | [Aider docs](https://aider.chat/docs/) | Aider는 Git repo에서 파일을 편집하고 test/git workflow를 반복하는 pair programmer다. | Git-native loop는 안전하고 검증 가능한 좁은 agent 설계의 대표다. |
| S111 | CrewAI | [CrewAI docs](https://docs.crewai.com/) | CrewAI는 role-based agents, tasks, crews, processes로 workflow를 구성한다. | multi-agent를 직관적 업무 모델로 표현하는 framework다. |
| S112 | Agno | [Agno docs](https://docs.agno.com/) | Agno는 agents, teams, workflows, memory, knowledge, tools를 SDK로 제공한다. | agent platform SDK는 memory/knowledge/toolkit 통합을 제품화한다. |
| S113 | Composio | [Composio docs](https://docs.composio.dev/) | Composio는 agent tool integration과 auth/connectors를 제공한다. | agent가 외부 SaaS를 실제로 변경할 때 auth gateway가 필요하다. |
| S114 | Continue | [Continue docs](https://docs.continue.dev/) | Continue는 IDE/CLI에서 custom AI coding assistant를 구성한다. | IDE assistant는 agentic action보다 indexing/provider config가 중요할 수 있다. |
| S115 | Cline | [Cline docs](https://docs.cline.bot/) | Cline은 IDE에서 plan/act, file edit, terminal command, MCP를 제공한다. | IDE agent approval UX와 MCP tool integration의 대표 사례다. |
| S116 | Goose | [Goose docs](https://block.github.io/goose/) | Goose는 desktop/CLI/API와 extension을 통해 general agent workflow를 제공한다. | MCP extension 중심 general agent로 개인 agent 군과 연결된다. |
| S117 | SWE-agent | [SWE-agent docs](https://swe-agent.com/latest/) | SWE-agent는 software engineering task와 SWE-bench류 benchmark를 위한 agent/harness다. | benchmark repair loop의 대표 구현이다. |
| S118 | Tabby | [Tabby docs](https://tabby.tabbyml.com/docs/) | Tabby는 self-hosted AI coding assistant/Copilot alternative를 지향한다. | agent autonomy보다 on-prem privacy와 code completion이 핵심인 군이다. |
| S119 | MCP servers | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | MCP server collection은 여러 data source/tool을 agent host에 연결한다. | tool server 레포는 agent ecosystem의 dependency layer다. |
| S120 | Context7 | [upstash/context7](https://github.com/upstash/context7) | Context7은 coding agent에게 최신 documentation context를 제공한다. | 문서 freshness와 context poisoning을 동시에 봐야 한다. |

## 6. 벤치마크, 평가, 기초 논문

| ID | 영역 | 출처 위치 | 핵심 메시지 | 분석 인사이트 |
|---|---|---|---|---|
| S121 | SWE-bench | [SWE-bench official](https://www.swebench.com/) | 실제 GitHub issue 기반 software engineering benchmark와 leaderboard를 제공한다. | coding agent 평가의 표준이 되었지만, 공식 leaderboard 자체도 harness-dependent다. |
| S122 | SWE-bench | [SWE-bench Verified](https://www.swebench.com/verified.html) | Verified는 human-filtered subset으로 더 신뢰할 수 있는 평가를 지향했다. | 이후 contamination 논쟁과 함께 benchmark 수명 문제가 드러난다. |
| S123 | SWE-bench | [SWE-bench paper](https://arxiv.org/abs/2310.06770) | real-world GitHub issue 해결을 LLM 평가 task로 제시했다. | software repair agent 연구의 출발점이다. |
| S124 | SWE-agent | [SWE-agent paper](https://arxiv.org/abs/2405.15793) | agent-computer interface와 command loop를 개선해 SWE-bench performance를 높인다. | interface/harness가 model score를 바꾼다는 강한 근거다. |
| S125 | SWE-bench Pro | [SWE-Bench Pro public dataset](https://labs.scale.com/leaderboard/swe_bench_pro_public) | 더 길고 어려운 software engineering task로 기존 benchmark 한계를 보완하려 한다. | benchmark도 agent 성능에 맞춰 난이도와 leakage 방식을 갱신해야 한다. |
| S126 | OSWorld | [OSWorld official](https://os-world.github.io/) | computer-use agent를 실제 OS task로 평가한다. | GUI/computer-use agent는 coding benchmark와 별도 평가가 필요하다. |
| S127 | OSWorld | [OSWorld paper](https://arxiv.org/abs/2404.07972) | multimodal agents가 실제 desktop environment에서 task를 수행하는 benchmark를 제안한다. | OpenAI CUA, Anthropic computer use, browser-use류 비교 기준이다. |
| S128 | GAIA | [GAIA paper](https://arxiv.org/abs/2311.12983) | general AI assistants를 web, tool, reasoning을 포함한 현실적 task로 평가한다. | agent 평가는 단순 QA보다 tool-using workflow를 봐야 한다. |
| S129 | GAIA | [GAIA Meta page](https://ai.meta.com/research/publications/gaia-a-benchmark-for-general-ai-assistants/) | GAIA는 일반 assistant 능력을 평가하는 benchmark로 소개된다. | personal/general agent 군 평가와 연결된다. |
| S130 | WebArena | [WebArena paper](https://arxiv.org/abs/2307.13854) | realistic web environment에서 autonomous agent의 task completion을 평가한다. | browser-use/nanobrowser의 evaluation background다. |
| S131 | VisualWebArena | [VisualWebArena paper](https://arxiv.org/abs/2401.13649) | visual understanding이 필요한 web agent task를 제시한다. | DOM만으로는 부족하고 vision observation이 필요한 task가 있다. |
| S132 | Mind2Web | [Mind2Web paper](https://arxiv.org/abs/2306.06070) | web navigation task에서 action prediction과 generalization을 평가한다. | browser agent의 action space 설계와 데이터 일반화 문제를 보여준다. |
| S133 | WebVoyager | [WebVoyager paper](https://arxiv.org/abs/2401.13919) | multimodal web agent가 실제 websites에서 task를 수행하는 benchmark다. | browser-use류가 단순 DOM automation을 넘어 multimodal로 가는 근거다. |
| S134 | AgentBench | [AgentBench paper](https://arxiv.org/abs/2308.03688) | LLM을 agent로 평가하기 위해 여러 interactive environment를 사용한다. | early general agent benchmark의 대표다. |
| S135 | ToolBench | [ToolBench / ToolLLM paper](https://arxiv.org/abs/2307.16789) | 대규모 API/tool use dataset과 benchmark를 제시한다. | MCP/Composio류 tool ecosystem 평가의 선행 연구다. |
| S136 | API-Bank | [API-Bank paper](https://arxiv.org/abs/2304.08244) | tool-augmented LLM의 planning, API calling, response를 평가한다. | function calling과 multi-step tool use의 초기 benchmark다. |
| S137 | Gorilla | [Gorilla paper](https://arxiv.org/abs/2305.15334) | LLM이 API를 정확히 호출하도록 하는 모델/데이터 접근을 제시한다. | API hallucination 문제는 Context7/MCP/tool docs 필요성과 연결된다. |
| S138 | ToolSandbox | [ToolSandbox paper](https://arxiv.org/abs/2408.04682) | stateful tool-use agents를 더 엄격히 평가하는 sandbox benchmark다. | tool side effect와 state tracking을 agent 평가에 포함해야 한다. |
| S139 | tau-bench | [τ-bench paper](https://arxiv.org/abs/2406.12045) | dynamic user/tool interaction에서 agent reliability를 평가한다. | customer-service류 agent는 static QA보다 interaction policy가 중요하다. |
| S140 | AppWorld | [AppWorld paper](https://arxiv.org/abs/2407.18901) | 앱/API 환경에서 복잡한 tool-use task를 평가한다. | Composio/Foundry/ADK integrations 같은 app action layer와 연결된다. |
| S141 | TheAgentCompany | [TheAgentCompany paper](https://arxiv.org/html/2412.14161v2) | digital worker처럼 web/code/program/communication을 수행하는 agent benchmark다. | productivity agent 평가가 multi-service workflow로 확장된다. |
| S142 | ClawsBench | [ClawsBench paper](https://arxiv.org/html/2604.05172v1) | realistic productivity setting에서 LLM agent capability와 safety를 평가한다. | OpenClaw/Hermes/Goose 같은 personal/productivity agent 평가 근거다. |
| S143 | Agentic Benchmark Checklist | [Agentic Benchmark Checklist paper](https://arxiv.org/html/2507.02825v2) | agentic benchmark는 scoring bug와 under/over-estimation 위험을 체계적으로 점검해야 한다. | benchmark 결과를 그대로 믿지 않고 checklist로 품질을 봐야 한다. |
| S144 | Benchmark exploits | [Berkeley RDI, How We Broke Top AI Agent Benchmarks](https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/) | 여러 agent benchmark가 scoring exploit으로 near-perfect score를 낼 수 있다고 주장한다. | benchmark leaderboard와 real capability 사이의 간극을 경고한다. |
| S145 | Agent evaluation survey | [Survey on Evaluation of LLM-based Agents](https://arxiv.org/html/2503.16416v2) | LLM agent evaluation methodology를 체계적으로 분류한다. | 평가 문헌의 큰 지도를 제공한다. |
| S146 | AI agents that matter | [AI Agents That Matter](https://arxiv.org/html/2407.01502v1) | agent benchmark가 accuracy만 보고 cost/complexity를 무시하는 경향을 비판한다. | multi-agent overhead와 benchmark overclaim을 비판적으로 봐야 한다. |
| S147 | ReAct | [ReAct paper](https://arxiv.org/abs/2210.03629) | reasoning과 acting을 interleave해 tool-use task를 수행한다. | 현대 agent loop의 기본 원형이다. |
| S148 | MRKL | [MRKL paper](https://arxiv.org/abs/2205.00445) | neural model과 symbolic/tool modules를 라우팅해 문제를 해결한다. | tool router와 expert module 개념의 선행 구조다. |
| S149 | Toolformer | [Toolformer paper](https://arxiv.org/abs/2302.04761) | 모델이 외부 API를 언제 호출할지 학습하는 접근을 제시한다. | tool-use가 prompt pattern에서 model training 대상으로 확장된다. |
| S150 | Reflexion | [Reflexion paper](https://arxiv.org/abs/2303.11366) | self-reflection과 verbal feedback으로 agent 성능을 개선한다. | loop engineering에서 feedback memory와 retry가 중요하다. |
| S151 | Self-Refine | [Self-Refine paper](https://arxiv.org/abs/2303.17651) | 모델이 자기 output을 평가하고 개선하는 iterative refinement를 수행한다. | edit/test/review 반복 loop의 이론적 배경이다. |
| S152 | Tree of Thoughts | [Tree of Thoughts paper](https://arxiv.org/abs/2305.10601) | 여러 reasoning path를 탐색하고 평가한다. | planning/search가 단일 chain-of-thought보다 강할 수 있다는 근거다. |
| S153 | Graph of Thoughts | [Graph of Thoughts paper](https://arxiv.org/abs/2308.09687) | reasoning 단위를 graph로 연결해 더 풍부한 탐색을 한다. | LangGraph류 graph runtime과 개념적으로 연결된다. |
| S154 | Plan-and-Solve | [Plan-and-Solve Prompting](https://arxiv.org/abs/2305.04091) | 먼저 계획을 세운 뒤 풀면 multi-step reasoning이 개선된다. | Plan/Act, plan/build mode의 프롬프트적 배경이다. |
| S155 | Generative Agents | [Generative Agents paper](https://arxiv.org/abs/2304.03442) | memory, reflection, planning을 갖춘 believable agents를 제시한다. | personal agent의 장기 memory/planning 설계 배경이다. |
| S156 | Voyager | [Voyager paper](https://arxiv.org/abs/2305.16291) | lifelong learning agent가 skill library를 축적하며 Minecraft task를 수행한다. | skill library와 agent memory/productivity loop의 선행 사례다. |
| S157 | CAMEL | [CAMEL paper](https://arxiv.org/abs/2303.17760) | role-playing agents를 통해 cooperative task solving을 탐구한다. | CrewAI/AutoGen식 role-based multi-agent의 초기 근거다. |
| S158 | MetaGPT | [MetaGPT paper](https://arxiv.org/abs/2308.00352) | software company roles를 agent society로 구성한다. | agent-team metaphor와 소프트웨어 개발 역할 분담의 배경이다. |
| S159 | ChatDev | [ChatDev paper](https://arxiv.org/abs/2307.07924) | software development를 여러 communicative agents로 수행한다. | multi-agent coding의 낙관적 설계 계열이다. |
| S160 | MemGPT | [MemGPT paper](https://arxiv.org/abs/2310.08560) | limited context model에 memory hierarchy와 paging을 적용한다. | context window 한계를 runtime/memory system으로 푸는 접근이다. |
| S161 | Lost in the Middle | [Lost in the Middle paper](https://arxiv.org/abs/2307.03172) | 긴 context에서 중간 위치 정보 활용이 약해질 수 있다. | "큰 context면 충분하다"는 주장에 대한 중요한 반론이다. |
| S162 | RULER | [RULER paper](https://arxiv.org/abs/2404.06654) | 긴 context 모델을 더 체계적으로 평가하는 benchmark를 제시한다. | long context agent도 실제 retrieval/position robustness를 검증해야 한다. |
| S163 | WorkArena | [WorkArena paper](https://arxiv.org/abs/2403.07718) | enterprise web app 환경에서 업무 자동화 agent를 평가한다. | productivity/web agent 평가가 실제 업무 앱으로 확장된다. |
| S164 | MLE-bench | [MLE-bench paper](https://arxiv.org/abs/2410.07095) | machine learning engineering task를 agent benchmark로 구성한다. | coding agent가 일반 SW repair를 넘어 ML workflow까지 확장된다. |
| S165 | OSWorld-MCP | [OSWorld-MCP OpenReview](https://openreview.net/forum?id=rceD6wwt4B) | GUI/OS benchmark와 MCP style tool mediation을 연결하는 최신 논의다. | computer-use와 tool protocol이 만나는 방향을 보여준다. |

## 7. 요약 관찰

- 공식 기업 자료는 모두 "모델 호출"보다 `tool`, `context`, `state`, `approval`, `trace/eval`, `sandbox`를 중심 개념으로 삼고 있다.
- Anthropic은 harness/context/containment를 매우 강하게 강조하고, OpenAI는 Agents SDK/Codex/Responses tooling으로 플랫폼화하며, Google은 ADK/A2A/Agent Engine으로 SDK와 protocol을 묶고, Microsoft는 AutoGen/Semantic Kernel을 Agent Framework/Foundry로 통합하는 흐름이다.
- 논문/벤치마크 자료는 agent loop의 원형(ReAct), tool-use(API-Bank/ToolBench/Gorilla), long context 한계(Lost in the Middle/RULER), multi-agent(CAMEL/MetaGPT/ChatDev/AutoGen), software repair(SWE-bench/SWE-agent), GUI/web agent(OSWorld/WebArena/Mind2Web)를 각각 제공한다.
- benchmark 관련 최신 자료는 특히 조심해야 한다. SWE-bench류는 여전히 중요하지만, contamination, flawed tests, infrastructure noise, scoring exploit 문제가 이미 공개적으로 제기되었다.
