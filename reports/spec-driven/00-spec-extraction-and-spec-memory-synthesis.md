# Spec-Driven Development: 스펙 추출과 스펙 메모리 합성 보고서

작성일: 2026-06-18

이 문서는 기존 수집물의 빈 부분을 메운다. 이미 이 저장소에는 650개 연구자료, 20개 spec-driven 오픈소스 후보, 100개 LLM 위키/AI 지식베이스 후보, 127개 클론 구조 분석이 있다. 부족했던 것은 "스펙을 어떻게 뽑고, 왜 그렇게 저장해야 에이전트가 계속 기억하고 재사용하는가"에 대한 통합 비교다.

근거 위치:

- 연구 코퍼스: `data/spec-driven-evidence-corpus-500.json`
- 연구 요약: `reports/spec-driven-evidence-corpus-500.md`
- spec-driven 구현 후보: `data/spec-driven-repositories.json`
- 전체 구조 분석: `reports/clone-structure-analysis-127.md`
- LLM wiki 100개: `data/llm-wiki-repositories.json`, `reports/llm-wiki/*`
- 풀소스 탐색 심화: `reports/full-source-scan/02-file-discovery-reading-implementation-deep-dive.md`

## 1. 현재 수집 상태

| 축 | 현재 상태 | 해석 |
| --- | ---: | --- |
| OpenAlex 기반 spec/requirements 연구 | 650 works retained | 요구사항공학, traceability, BDD/TDD, formal spec, LLM requirements, agent memory까지 포함 |
| spec-driven 오픈소스 후보 | 20 repos | GitHub spec-kit, OpenSpec, SDD workflow, agent-os류 포함 |
| 전체 로컬 클론 구조 분석 | 127 repos | agent, spec-driven, adjacent tech를 같은 기준으로 구조 분석 |
| LLM wiki/knowledge base 후보 | 100 repos | persistent wiki, RAG, GraphRAG, document intelligence, agent memory 포함 |
| LLM wiki GitHub 후보 pool | 1204 candidates | 선별된 100개만 repo-level 문서화됨 |

주의할 점은 650개 연구 코퍼스가 "AI-era spec-driven coding만"을 뜻하지 않는다는 것이다. 이 코퍼스는 더 오래된 요구사항공학, traceability, BDD/TDD, formal methods, model-based systems engineering을 함께 끌어온 근거 창고다. 실전 설계에서는 이 넓은 연구 라인을 AI coding agent의 workflow로 재조립해야 한다.

## 2. 스펙 추출 방법의 큰 분류

| 방법 | 입력 | 산출물 | 장점 | 약점 | 연결 연구/구현 축 |
| --- | --- | --- | --- | --- | --- |
| 요구사항 문서 정규화 | PRD, issue, meeting note | `requirements.md`, glossary, acceptance criteria | 사람이 검토하기 쉬움 | 암묵 지식 누락 | requirements engineering, SRS |
| 유저 스토리/BDD 추출 | user story, examples | Gherkin, scenario, test case | 검증/테스트와 연결 쉬움 | 복잡한 비기능 요구 취약 | BDD, acceptance criteria |
| traceability graph | spec, code, tests, commits | requirement-code-test links | 변경 영향 분석에 강함 | 초기 link 생성 비용 | requirements traceability |
| code-to-spec reverse extraction | 기존 코드베이스 | module behavior spec, API contract | legacy 시스템에 유용 | 구현 버그를 spec으로 오인 | program comprehension, API contract |
| formal/lightweight spec | critical invariant, protocol | TLA+/Alloy/Lean/OpenAPI/schema | 모호성 제거 | 작성 비용 높음 | formal specification, MBSE |
| LLM wiki 방식 | raw docs/code/conversations | entity/concept pages, backlinks | 장기 지식 축적 | conflict/update policy 필요 | agent memory, LLM wiki |
| context index 방식 | repo files | chunks/symbols/embeddings | retrieval에 바로 사용 | human-readable spec은 아님 | Continue/Roo/Codanna |

핵심은 하나의 방법으로 끝내지 않는 것이다. 제품 요구사항은 `requirements.md`, 검증 가능한 행동은 `acceptance/test`, 코드 구조는 `symbol/context index`, 장기 설명은 `wiki page`, 안전한 계약은 `schema/formal spec`로 분리해야 한다.

## 3. 스펙을 "뽑는" 최소 파이프라인

실전 spec extraction은 다음 순서가 안정적이다.

```text
raw input
  -> claim extraction
  -> entity/glossary extraction
  -> requirement normalization
  -> ambiguity/conflict detection
  -> acceptance criteria generation
  -> trace link creation
  -> spec memory write
  -> verification loop
```

각 단계의 구체 로직:

1. claim extraction
   - 입력에서 "시스템은 해야 한다", "사용자는 할 수 있어야 한다", "절대 하면 안 된다"를 분리한다.
   - 숫자, 조건, actor, object, timing, exception을 보존한다.
   - "빠르게", "쉽게", "좋게" 같은 비검증 형용사는 quality attribute 질문으로 바꾼다.

2. entity/glossary extraction
   - domain noun, product term, API resource, role, permission, state를 뽑는다.
   - 같은 의미의 다른 이름을 alias로 묶는다.
   - 코드베이스 symbol과 이름이 겹치면 trace 후보로 기록한다.

3. requirement normalization
   - `id`, `statement`, `source`, `rationale`, `priority`, `status`, `owner`, `acceptance`를 가진 구조로 만든다.
   - 원문 인용/출처를 남겨 LLM hallucination을 줄인다.

4. ambiguity/conflict detection
   - 수량/시간/범위가 빠진 요구사항을 질문으로 바꾼다.
   - 같은 entity에 대해 상충하는 rule을 찾는다.
   - 기존 spec memory와 다른 결론이면 overwrite하지 않고 conflict record를 만든다.

5. acceptance criteria generation
   - happy path, edge case, error case, permission case, migration/backward compatibility를 분리한다.
   - 가능하면 test name 또는 scenario ID를 부여한다.

6. trace link creation
   - requirement -> design section -> task -> source file -> test file -> commit/PR.
   - 처음에는 weak link로 시작하고, 코드 변경/테스트 통과 후 strong link로 승격한다.

7. spec memory write
   - 최신 스펙만 저장하지 않는다.
   - decision history, rejected alternatives, open questions, source evidence를 별도 섹션에 둔다.

## 4. 권장 스펙 파일 모델

spec-driven 구현들을 비교하면 사람이 읽는 Markdown과 기계가 읽는 JSON/YAML index를 같이 두는 방식이 가장 실용적이다.

```text
specs/
  product/
    glossary.md
    decisions.md
    open-questions.md
  features/
    F-001-login/
      requirements.md
      design.md
      tasks.md
      acceptance.md
      trace.json
      evidence.md
  architecture/
    modules.md
    invariants.md
    api-contracts/
  memory/
    entity-pages/
    concept-pages/
    source-index.json
```

각 파일의 역할:

- `requirements.md`: 사람이 합의해야 하는 요구사항. 원문 source와 ambiguity를 포함한다.
- `design.md`: 구현 선택, tradeoff, rejected alternatives.
- `tasks.md`: 에이전트가 실행 가능한 atomic task. 각 task는 requirement id를 참조한다.
- `acceptance.md`: 테스트 가능한 기준. BDD 또는 checklist 형식.
- `trace.json`: 기계용 link graph. code search/indexer와 연결한다.
- `evidence.md`: issue, meeting note, doc, code reference, research link.
- `entity-pages/`: LLM wiki식 장기기억. domain term별 정의/관계/변경 이력.

## 5. 스펙 메모리의 핵심: 문서가 아니라 인덱스 가능한 지식

스펙을 "계속 기억"하려면 Markdown만으로 부족하다. 최소 4개의 view가 필요하다.

| view | 저장 대상 | 쓰는 곳 |
| --- | --- | --- |
| Human view | Markdown spec, decisions, acceptance | 리뷰/합의/온보딩 |
| Retrieval view | chunks, embeddings, BM25 index | agent context search |
| Trace view | requirement-code-test graph | 변경 영향 분석 |
| Temporal view | decision history, superseded records | 충돌/회귀 방지 |

LLM 위키 100개 분석이 중요한 이유가 여기에 있다. persistent wiki는 문서 원문을 매번 RAG하는 대신 entity/concept page를 유지한다. 코드 에이전트용 spec memory도 같은 방향이어야 한다. 매번 요구사항을 다시 요약하지 말고, 검토된 spec page를 갱신하고 trace graph를 유지해야 한다.

## 6. 좋은 스펙 추출 프롬프트의 조건

스펙을 뽑을 때 LLM에게 "요약해줘"라고 하면 재사용성이 낮다. 더 좋은 지시는 다음 필드를 강제한다.

```text
For each requirement:
- id:
- actor:
- capability:
- trigger:
- preconditions:
- postconditions:
- acceptance criteria:
- non-functional constraints:
- source evidence:
- ambiguity:
- related code/search hints:
- trace candidates:
- open questions:
```

특히 `related code/search hints`가 중요하다. 이것이 풀소스 탐색과 연결되는 접점이다.

예:

```text
requirement: "관리자는 사용자 계정을 잠글 수 있어야 한다"
search hints:
  terms: ["admin", "lock user", "suspend", "account status"]
  likely files: ["user", "admin", "auth", "permission", "account"]
  likely tests: ["admin", "user", "permission"]
  likely APIs: ["PATCH /users/:id", "status", "disabled"]
```

이 힌트는 다음 작업에서 `glob`, `grep`, symbol search, vector search의 seed가 된다.

## 7. 연구 코퍼스를 설계 원칙으로 바꾸기

기존 650개 코퍼스는 다음 설계 원칙으로 압축할 수 있다.

| 연구 축 | 실전 원칙 |
| --- | --- |
| Requirements Engineering | 요구사항은 원문 source, actor, condition, acceptance를 잃지 말고 구조화한다. |
| SRS | feature별 spec을 만들되 전체 용어집/비기능 요구사항/제약은 중앙화한다. |
| Traceability | requirement-code-test link를 별도 artifact로 저장한다. Markdown 링크만 믿지 않는다. |
| BDD/TDD | acceptance criteria는 가능한 한 테스트 이름/시나리오로 내려야 한다. |
| Formal specification | critical invariant와 protocol은 자연어만 두지 말고 schema/model로 보강한다. |
| NL requirements | ambiguity/anaphora/implicit condition을 detection 대상으로 본다. |
| LLM requirements generation | LLM output은 draft이고, source evidence와 conflict check가 있어야 승격한다. |
| Agent memory | 최신 요약 하나보다 entity memory + temporal history + retrieval index가 낫다. |
| Context engineering | context는 저장이 아니라 선택 문제다. spec도 retrieval 가능한 단위로 쪼갠다. |

## 8. 오픈소스 구현에서 보이는 패턴

spec-driven 20개 후보와 adjacent/LLM wiki 후보를 합치면 다음 패턴이 보인다.

1. GitHub spec-kit류
   - feature directory에 requirements/design/tasks를 둔다.
   - agent가 task list를 순서대로 실행하기 쉽다.
   - 강점: 단순하고 협업 친화적.
   - 약점: trace graph와 semantic memory는 별도 구현이 필요하다.

2. OpenSpec/SDD workflow류
   - spec을 CLI/workflow command로 생성한다.
   - template과 checklist가 중요하다.
   - 강점: 반복 가능한 프로세스.
   - 약점: 기존 코드와 link가 약하면 문서가 따로 논다.

3. Agent OS/BMAD류
   - product brief, architecture, stories, tasks를 에이전트 운용 규칙과 묶는다.
   - 강점: 장기 프로젝트 운영에 좋다.
   - 약점: 문서량이 많아 retrieval/index가 없으면 context 비용이 커진다.

4. LLM wiki류
   - raw source에서 entity/concept page를 만든다.
   - backlink와 page update가 핵심이다.
   - 강점: 장기 지식 축적.
   - 약점: conflict handling, provenance, stale page detection이 없으면 위험하다.

5. Code index류
   - chunks/symbols/relationships/vector를 만든다.
   - 강점: 필요한 코드 조각을 빨리 찾는다.
   - 약점: 사람이 합의한 "의도"를 저장하는 spec과는 다르다.

## 9. 스펙 메모리와 풀소스 탐색의 연결

스펙은 코드 탐색의 seed가 되어야 한다. 반대로 코드 탐색 결과는 스펙을 갱신해야 한다.

```text
user asks for feature/bug
  -> retrieve relevant requirements/design/decisions
  -> extract search hints from spec
  -> file discovery/ranking
  -> read source/test chunks
  -> implement/change
  -> update trace.json and tasks.md
  -> if behavior changed, update acceptance.md/design.md
```

좋은 trace record:

```json
{
  "requirementId": "F-001-R-003",
  "acceptanceId": "F-001-A-002",
  "sourceEvidence": ["issues/123", "meeting/2026-06-18"],
  "codeCandidates": [
    {"path": "src/auth/user-status.ts", "reason": "symbol UserStatus and lock transitions"},
    {"path": "tests/auth/user-status.test.ts", "reason": "acceptance coverage"}
  ],
  "confirmedLinks": [
    {"path": "src/auth/user-status.ts", "lines": "40-120", "kind": "implements"},
    {"path": "tests/auth/user-status.test.ts", "lines": "12-80", "kind": "verifies"}
  ],
  "status": "confirmed"
}
```

## 10. 스펙 추출 품질 평가 기준

스펙을 많이 뽑는 것보다 다음 평가가 중요하다.

| 평가 | 질문 |
| --- | --- |
| Grounding | 각 requirement가 원문 evidence를 갖는가? |
| Testability | acceptance가 pass/fail 가능한가? |
| Traceability | 관련 code/test 후보와 confirmed link가 있는가? |
| Conflict safety | 이전 decision과 충돌하면 표시되는가? |
| Incrementality | 새 입력이 들어왔을 때 전체 재작성 대신 부분 갱신되는가? |
| Retrieval quality | agent가 다음 작업에서 찾을 수 있는 chunk/index가 있는가? |
| Staleness control | 코드 변경 후 spec이 오래된 것을 알 수 있는가? |

## 11. 권장 구현 계획

이 저장소의 다음 구현/연구 방향은 다음이 가장 효율적이다.

1. `data/spec-memory-evidence-map.json` 생성
   - 650개 연구자료를 category별로 spec extraction 원칙에 매핑한다.
   - 각 category에서 대표 논문/자료 10-20개를 curated key source로 승격한다.

2. spec-driven 20개 수동 심층
   - 각 repo의 template, command, output directory, traceability artifact를 비교한다.
   - 구조 분석만으로는 부족하므로 실제 README/CLI/template 코드를 읽어야 한다.

3. Direct LLM Wiki 11개 수동 심층
   - page model, entity extraction, update policy, conflict handling, provenance를 본다.
   - spec memory로 쓸 수 있는 구현 패턴을 분리한다.

4. full-source-scan과 연결
   - spec의 `related code/search hints`를 파일 탐색 seed로 사용한다.
   - 탐색 결과를 `trace.json`에 되먹임한다.

5. 웹 UI 개선
   - "스펙", "풀스캔", "LLM 위키", "논문"을 같은 검색 인덱스에서 찾되, 읽기 순서 preset을 제공한다.

## 12. 결론

AI coding에서 spec-driven이 유리한 이유는 "문서를 먼저 쓰기 때문"만이 아니다. 더 정확히는 다음 세 가지를 동시에 제공하기 때문이다.

1. 검색 seed: 사용자의 말에서 파일을 찾기 위한 entity, symbol, API, behavior hint.
2. 검증 기준: 구현 후 맞았는지 확인할 acceptance/test target.
3. 장기 기억: compaction/session이 바뀌어도 남는 decision, trace, glossary, conflict history.

따라서 좋은 spec-driven 시스템은 Markdown template만으로 끝나지 않는다. `human-readable spec + retrieval index + trace graph + temporal memory`가 함께 있어야 한다.
