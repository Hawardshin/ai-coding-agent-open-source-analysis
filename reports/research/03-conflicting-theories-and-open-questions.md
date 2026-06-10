# AI 에이전트 설계의 충돌 이론과 보류된 질문

기준일: 2026-06-11 KST.  
근거 목록: `02-evidence-catalog-100-sources.md`의 S001-S165.  
원칙: 이 문서는 상반된 이론 중 하나를 승자로 고르지 않는다. 서로 다른 조건에서 모두 맞을 수 있거나, 아직 충분한 공개 근거가 없는 쟁점을 보존한다.

## 1. 단순 workflow 우선 vs general autonomous agent 우선

### 이론 A: 먼저 단순 workflow와 composable pattern으로 시작해야 한다

근거: S001, S034, S102-S104.  
주장: 대부분의 성공 사례는 복잡한 autonomous framework가 아니라 명확한 workflow, 작은 tool set, human feedback, eval에서 출발한다. 예측 가능한 문제에는 deterministic workflow가 더 싸고 안전하다.

### 이론 B: open-ended 문제에는 general autonomous agent가 필요하다

근거: S003, S004, S031, S036-S037, S059-S061.  
주장: 실제 개발/리서치/업무 문제는 경로를 미리 hardcode하기 어렵고, agent가 tool을 선택하고 계획을 갱신하며 장시간 진행해야 한다.

### 충돌 지점

- `aider`와 `SWE-agent`는 좁고 검증 가능한 workflow의 힘을 보여준다.
- `Codex`, `OpenHands`, `Claude Code`, `ADK`, `Foundry`는 더 general한 agent runtime을 제품화한다.
- 아직 공개 자료만으로는 "어느 복잡도부터 autonomous agent가 workflow보다 낫다"는 보편 경계가 없다.

### 보류된 질문

- task uncertainty, tool count, expected value, failure cost 중 무엇이 agent autonomy를 켜는 기준이 되어야 하는가?
- 한 프로젝트 안에서 deterministic workflow와 autonomous loop를 어떻게 섞어야 하는가?

## 2. Single-agent loop vs multi-agent decomposition

### 이론 A: single-agent + 좋은 tool/context가 기본값이어야 한다

근거: S001, S002, S102-S105, S146.  
주장: multi-agent는 비용과 trace 복잡도를 키운다. single-agent의 context selection, tool design, validation loop를 먼저 개선해야 한다.

### 이론 B: multi-agent는 parallelism과 context isolation을 통해 성능을 확장한다

근거: S029, S084-S096, S157-S159.  
주장: breadth-first research, web/file/code specialist task, 독립 subtask가 많은 문제에서는 orchestrator-worker 또는 role-based team이 단일 agent보다 낫다.

### 충돌 지점

- Anthropic multi-agent research system은 research query에서 강한 개선과 높은 token cost를 동시에 보고한다.
- Microsoft Magentic-One은 generalist multi-agent team을 제시한다.
- Anthropic Building Effective Agents와 AI Agents That Matter는 불필요한 complexity/cost를 경계한다.

### 보류된 질문

- coding task는 research task보다 parallelism이 낮다는 가설이 얼마나 일반적인가?
- multi-agent 성능 개선이 model budget 증가와 구분되는가?
- subagent context isolation이 실제로 오류를 줄이는가, 아니면 검증 난이도만 키우는가?

## 3. 큰 context window vs curated context engineering

### 이론 A: 큰 context는 agent를 단순하게 만들고 더 많은 정보를 보존한다

근거: `gemini-cli` 계열 분석, S024, S055-S056, S059-S065.  
주장: 큰 context와 prompt caching, memory/session state가 있으면 agent가 더 많은 repo/history/tool 정보를 한 번에 볼 수 있다.

### 이론 B: context는 제한된 attention budget이므로 선별/압축/격리가 필수다

근거: S002, S019, S047, S101, S160-S162.  
주장: 길다고 다 쓰는 것이 아니며, 중간 정보 손실, noise, 비용, 민감정보 노출이 생긴다. 필요한 정보를 고르고, 오래된 정보는 요약하거나 외부 state로 옮겨야 한다.

### 충돌 지점

- `google-gemini/gemini-cli`는 대형 context를 중요한 제품 가치로 둔다.
- `aider`는 repo map과 selected file 중심의 절제된 context가 강점이다.
- `Context7`은 필요한 최신 docs를 tool result로 가져오는 방식이다.
- `LangGraph`와 ADK는 state/memory/checkpoint로 context를 구조화한다.

### 보류된 질문

- 큰 context model의 발전이 context engineering 필요성을 줄이는가?
- 아니면 큰 context가 더 큰 task를 가능하게 해 context engineering 문제가 다시 커지는가?
- long context에 넣은 정보와 tool로 필요할 때 가져온 정보의 reliability/cost 차이는 어떻게 측정할 것인가?

## 4. Human approval vs sandboxed/auto autonomy

### 이론 A: destructive action은 사람이 명시적으로 승인해야 한다

근거: S034, S040, S045, S081, S092.  
주장: shell, file write, browser form submission, OAuth action은 사용자의 명시적 승인과 trace가 있어야 한다.

### 이론 B: prompt 승인만으로는 approval fatigue가 생기므로 sandbox/auto policy가 필요하다

근거: S008, S027, S028, S025.  
주장: 사용자가 대부분의 prompt를 승인하면 manual approval은 안전성을 잃는다. filesystem/network sandbox, scoped credentials, classifier-based auto mode가 필요하다.

### 충돌 지점

- `Codex`, `Claude Code`, `OpenHands`는 approval과 sandbox를 모두 다룬다.
- `oh-my-*` 계열 hook은 manual approval 모델을 우회하거나 확장할 수 있다.
- `browser-use`/`nanobrowser`는 로그인된 browser session 자체가 이미 권한이므로 승인 UX가 더 어렵다.

### 보류된 질문

- 어떤 action은 자동 허용해도 되고 어떤 action은 반드시 human approval이 필요한가?
- classifier-based approval이 놓친 위험은 어떻게 발견하고 회수할 것인가?
- sandbox boundary 설정 비용이 agent 생산성을 얼마나 줄이는가?

## 5. GUI/browser/computer-use vs structured API/MCP tools

### 이론 A: 실제 웹/컴퓨터를 조작하는 agent가 범용성에서 우위다

근거: S023, S051, S054, S083, S108-S109, S126-S133.  
주장: 많은 현실 task는 API가 없거나 UI로만 가능하다. browser/computer-use agent는 사람처럼 웹과 데스크톱을 사용할 수 있다.

### 이론 B: 구조화된 API/MCP tool이 더 안정적이고 안전하다

근거: S019, S021-S022, S039-S041, S070-S076, S119-S120.  
주장: GUI는 flake, prompt injection, visual ambiguity, credential exposure가 크다. 가능하면 MCP/API tool로 구조화된 경계를 둬야 한다.

### 충돌 지점

- `browser-use`, `nanobrowser`, `Open Interpreter`, `OpenHands`는 GUI/OS action의 범용성을 보여준다.
- `MCP servers`, `Context7`, `Composio`는 구조화된 tool/context 경계를 제공한다.
- Microsoft/Foundry와 OpenAI/Anthropic 모두 browser/computer-use와 MCP/tool을 동시에 밀고 있다.

### 보류된 질문

- 같은 task를 GUI와 API로 둘 다 할 수 있을 때 어떤 기준으로 선택해야 하는가?
- web prompt injection을 observation 단계에서 충분히 방어할 수 있는가?
- GUI agent의 성공률을 UI flake와 model error로 어떻게 분리할 것인가?

## 6. Framework abstraction vs owning control flow

### 이론 A: LangGraph/AutoGen/ADK/Foundry 같은 framework가 agent reliability를 높인다

근거: S037, S059-S069, S077-S097, S098-S100.  
주장: state, memory, human-in-loop, tracing, multi-agent, deployment를 반복 구현하지 않고 framework primitive로 쓰는 것이 낫다.

### 이론 B: production agent는 control flow를 직접 소유해야 한다

근거: S001, S102-S105, S146.  
주장: framework가 실패 원인을 숨기고, 불필요한 abstraction과 cost를 만든다. 핵심 loop와 state transition을 application이 명시적으로 관리해야 한다.

### 충돌 지점

- `LangGraph`는 낮은 수준 graph runtime이라 control flow를 드러내는 편이다.
- `CrewAI`/`Agno`는 더 높은 수준 abstraction을 제공한다.
- `Codex`와 `Aider`는 완제품으로 내부 control flow를 직접 구현한다.

### 보류된 질문

- framework를 쓰면 빠르게 시작할 수 있지만, 어느 시점부터 custom runtime이 필요한가?
- graph abstraction은 디버깅을 돕는가, 아니면 상태 공간을 더 복잡하게 만드는가?
- agent product에서 framework 종속성과 provider 종속성 중 어느 쪽이 더 큰 위험인가?

## 7. Public benchmark score vs real-world reliability

### 이론 A: SWE-bench/OSWorld/GAIA/WebArena 같은 공개 benchmark는 progress 측정에 필수다

근거: S121-S143, S145.  
주장: benchmark 없이는 agent 성능을 비교할 수 없다. SWE-bench, OSWorld, WebArena, GAIA는 각 domain에서 반복 가능한 평가 기준을 제공한다.

### 이론 B: 유명 benchmark는 빠르게 오염되고 exploit될 수 있다

근거: S006-S007, S058, S143-S146.  
주장: flawed tests, training contamination, scoring exploit, infrastructure noise 때문에 leaderboard 점수는 real-world reliability와 멀어질 수 있다.

### 충돌 지점

- `SWE-agent`와 `OpenHands`는 benchmark/harness를 중심으로 평가된다.
- OpenAI는 SWE-bench Verified 사용 중단을 권고한다.
- SWE-bench official은 여전히 leaderboard와 variants를 운영한다.

### 보류된 질문

- public benchmark와 private eval을 어떻게 조합해야 하는가?
- task freshness와 reproducibility는 서로 충돌하는데 어느 쪽을 우선해야 하는가?
- "agent가 task를 풀었다"와 "harness가 benchmark에 맞게 최적화됐다"를 어떻게 구분할 것인가?

## 8. Local/BYOK/self-hosted vs managed cloud agent platform

### 이론 A: code/IP/credential을 다루는 agent는 local/self-hosted가 우선이다

근거: `aider`, `Tabby`, `Continue`, `nanobrowser`, `Goose` 분석, S110, S114, S116, S118.  
주장: 개발자의 repository와 기업 codebase는 민감하므로 local execution, BYOK, on-prem index가 중요하다.

### 이론 B: managed platform이 auth, observability, deployment, governance를 더 잘 제공한다

근거: S036-S041, S059-S061, S077-S083.  
주장: enterprise agent는 tool auth, tracing, scaling, managed memory, evaluation, compliance가 필요하고 이를 cloud platform이 제공한다.

### 충돌 지점

- `Tabby`는 self-hosted coding assistant 포지션이 강하다.
- `OpenAI Agents`, `Google ADK/Agent Engine`, `Microsoft Foundry`는 managed platform 방향이다.
- `Codex`와 `Claude Code`는 local CLI와 cloud/app 표면을 동시에 갖는다.

### 보류된 질문

- 어떤 데이터는 local에 남기고 어떤 trace/metadata는 cloud로 보낼 수 있는가?
- managed auth가 local secret handling보다 실제로 안전한가?
- enterprise agent에서 data residency와 observability는 어떻게 균형 잡는가?

## 9. Memory-first personal agent vs ephemeral task agent

### 이론 A: personal agent는 장기 memory가 있어야 유용해진다

근거: S017-S018, S063-S065, S112, S155-S156, S160.  
주장: 사용자의 선호, 장기 목표, 반복 workflow, scheduled tasks를 기억해야 assistant가 개인화된다.

### 이론 B: memory는 오염, privacy, stale instruction의 위험이다

근거: S002, S003, S008, S024-S025, S101, S161-S162.  
주장: 오래된 memory가 잘못된 context를 주입하거나 secret을 보존하거나 삭제/감사 문제를 만든다. task-local state와 ephemeral context가 더 안전할 수 있다.

### 충돌 지점

- `Hermes Agent`, `OpenClaw`, `Goose`, `Agno`는 memory/personalization 방향이 강하다.
- `Aider`와 `SWE-agent`는 task/repo 단위 ephemeral loop에 가깝다.
- ADK는 Memory를 preload와 on-demand로 나눠 중간 접근을 제시한다.

### 보류된 질문

- memory write는 agent가 자동으로 해야 하는가, 사용자가 승인해야 하는가?
- memory deletion과 correction UX는 어떤 형태여야 하는가?
- memory retrieval이 성능을 높인다는 것을 어떻게 task별로 검증할 것인가?

## 10. Skills/plugins/hooks as productivity layer vs supply-chain risk

### 이론 A: skills/plugins/hooks는 agent 운영을 재사용 가능하게 만든다

근거: S013-S018, S026, S047-S049.  
주장: workflow, instruction, scripts, templates를 package화하면 팀이 agent 운영 지식을 공유할 수 있다.

### 이론 B: skills/plugins/hooks는 숨은 instruction과 실행 경로를 만든다

근거: S008, S027-S028, S041, `oh-my-*`, `codex-plugin-cc` 분석.  
주장: hook은 자동 실행되고, skill은 context를 바꾸며, plugin은 tool 권한을 넓힌다. provenance와 review 없이는 supply-chain 위험이다.

### 충돌 지점

- `oh-my-claudecode`, `oh-my-codex`는 생산성 layer이면서 hook/template 위험 표면이다.
- `Codex skills`와 `Claude skills`는 progressive disclosure로 context를 아끼지만, skill source를 신뢰해야 한다.
- `MCP servers`도 사실상 agent plugin supply chain이다.

### 보류된 질문

- skill/plugin install 시 어떤 static analysis와 runtime permission prompt가 필요한가?
- hook의 실행 결과를 agent transcript에 얼마나 노출해야 하는가?
- team marketplace에서 prompt/template provenance를 어떻게 증명할 것인가?

## 11. Code execution as reliable substrate vs code execution as highest-risk tool

### 이론 A: code execution은 복잡한 tool orchestration을 더 효율적으로 만든다

근거: S019, S032, S036, S052, S083, S135-S140.  
주장: agent가 코드를 작성해 데이터를 필터링하고, 여러 tool 결과를 처리하고, 반복 작업을 자동화하면 context와 비용을 절약한다.

### 이론 B: code execution은 가장 위험한 tool이다

근거: S008, S027-S028, S041, S080-S083.  
주장: shell/Python/Node 실행은 파일, 네트워크, credential, supply chain을 직접 건드린다. sandbox와 scoped credentials가 없으면 위험하다.

### 충돌 지점

- `Open Interpreter`는 code/shell 실행을 핵심 가치로 둔다.
- `Codex`, `OpenHands`, `SWE-agent`, `Aider`는 code/test execution이 품질 검증의 핵심이다.
- Anthropic은 code execution with MCP가 효율적이라고 하면서도 sandboxing/containment를 강하게 강조한다.

### 보류된 질문

- agent가 생성한 code를 실행하기 전 어떤 static/dynamic check가 필요한가?
- sandbox 밖으로 나가야 하는 build/test/network 작업은 어떻게 다룰 것인가?
- code execution output을 context로 다시 넣을 때 secret redaction은 어디서 해야 하는가?

## 12. 결론: 확정된 것과 미확정인 것

### 비교적 확정된 것

- agent 성능은 모델과 harness의 합성물이다.
- context engineering은 agent reliability와 cost에 직접 영향을 준다.
- tool design은 API design과 다르며, agent affordance를 고려해야 한다.
- approval, sandbox, trace, eval은 production agent의 핵심 구성요소다.
- benchmark 점수는 단독으로 제품 품질을 대표하지 못한다.

### 아직 미확정인 것

- multi-agent가 coding task에서 언제 비용 대비 이익을 내는지.
- long context 발전이 context engineering 부담을 얼마나 줄이는지.
- human approval을 얼마나 자동화할 수 있는지.
- A2A가 실제 inter-agent delegation 표준으로 자리잡을지.
- public benchmark 이후의 신뢰 가능한 agent eval 방법이 무엇인지.
- local/self-hosted와 managed cloud agent platform 사이의 최적 균형이 무엇인지.

이 문서는 결론을 보류한다. 각 충돌은 서로 다른 레포가 선택한 설계 철학의 차이로 남겨두고, 향후 실제 실행 데이터와 장기 운영 사례가 쌓일 때 업데이트해야 한다.
