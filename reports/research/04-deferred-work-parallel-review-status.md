# Deferred Work Parallel Review Status

작성일: 2026-06-18

이 문서는 미뤄둔 조사 라인을 병렬로 다시 점검한 결과를 한 곳에 묶은 상태표다. 새로 추가한 심화 문서는 아래 두 개다.

- `reports/full-source-scan/02-file-discovery-reading-implementation-deep-dive.md`
- `reports/spec-driven/00-spec-extraction-and-spec-memory-synthesis.md`

## 1. 완료된 통합

| 라인 | 확인한 자료 | 이번에 추가/정리한 내용 |
| --- | --- | --- |
| 풀소스 스캔 | Codex, Aider, Continue, Roo, Cline, Gemini CLI, Qwen Code, Codanna, Sourcebot, Potpie 로컬 클론 | 파일 발견, ignore/security gate, read limit, chunk/index, symbol graph, vector/FTS, context selection 로직을 구현 파일 기준으로 비교 |
| 사용자 말과 소스 연결 | Aider repo map, Continue retrieval, Roo code index, Gemini/Qwen tools, Codex file search | 사용자 발화에서 path token, identifier, natural-language query, recent file, spec search hint를 뽑아 후보 파일/심볼/chunk로 연결하는 공통 알고리즘 정리 |
| spec-driven/spec extraction | 기존 650개 연구 코퍼스, 20개 spec-driven repo, 100개 LLM wiki repo | 요구사항 추출, ambiguity/conflict detection, acceptance criteria, trace graph, spec memory view를 하나의 설계로 합성 |
| LLM wiki 100개 | `data/llm-wiki-repositories.json`, `data/llm-wiki-structure-analysis-100.json`, `reports/llm-wiki/repositories/*` | 100개 후보 클론/구조 분석은 완료 상태임을 재확인. 추가로 code-level deep compare가 다음 과제임을 표시 |
| 웹 열람 | `web/`, `scripts/build-web-index.mjs`, GitHub Pages workflow, `vercel.json` | 새 문서가 검색/카테고리 인덱스에 들어가도록 웹 인덱스 재빌드 대상에 포함 |

## 2. 핵심 결론

### 2.1 전체 소스코드를 "다 읽는" 방식은 주류가 아니다

주요 구현체는 전체 파일 본문을 한 번에 프롬프트에 넣지 않는다. 대신 다음 계층을 조합한다.

- 파일명/path fuzzy search
- `rg`/grep 기반 lexical search
- tree-sitter symbol extraction
- repo map/PageRank
- chunk table + BM25/FTS
- embedding/vector index
- 최근 읽은 파일 cache
- ignore/security/size gate
- token budget 기반 slicing

따라서 좋은 에이전트 설계의 핵심은 "모든 파일을 읽기"가 아니라 "사용자 말에서 충분히 좋은 search seed를 만들고, 그 seed로 찾은 후보 중 어떤 조각을 읽을지 결정하기"다.

### 2.2 spec-driven은 문서 템플릿보다 trace memory가 중요하다

스펙을 계속 기억하려면 Markdown 문서만으로 부족하다. 최소한 아래 네 가지 view가 필요하다.

- 사람이 읽는 Markdown spec
- agent retrieval용 chunk/BM25/vector index
- requirement-code-test trace graph
- decision/conflict/superseded state를 담는 temporal memory

이 구조가 없으면 spec-driven workflow는 문서를 잘 만들어도 에이전트가 다음 작업에서 오래된 요구사항을 다시 묻거나, 새 구현과 충돌하는 요구를 조용히 덮어쓸 위험이 커진다.

### 2.3 LLM wiki 100개 분석은 구조 단계까지 끝났고, 코드별 deep compare는 남아 있다

현재 저장소에는 LLM wiki/knowledge-base 계열 100개 repo의 clone과 구조 분석 보고서가 있다. 다만 각 repo의 실제 ingestion pipeline, graph schema, chunking policy, update algorithm, stale-page 처리, provenance 처리까지 함수 단위로 비교하는 단계는 별도 후속 작업이 필요하다.

## 3. 바로 이어서 봐야 할 문서

| 목적 | 문서 |
| --- | --- |
| 코딩 에이전트가 파일을 찾고 읽는 방식 | `reports/full-source-scan/02-file-discovery-reading-implementation-deep-dive.md` |
| spec extraction/spec memory 설계 | `reports/spec-driven/00-spec-extraction-and-spec-memory-synthesis.md` |
| LLM wiki 100개 선별/패턴 | `reports/llm-wiki/00-llm-wiki-100-summary.md` |
| LLM wiki 개별 repo 구조 분석 | `reports/llm-wiki/repositories/` |
| 650개 연구 코퍼스 | `reports/spec-driven-evidence-corpus-500.md` |
| 전체 연구 요약 | `reports/full-source-scan-research-summary-2026-06-18.md` |

## 4. 남은 위험과 다음 작업

| 남은 작업 | 이유 | 추천 산출물 |
| --- | --- | --- |
| LLM wiki 100개 code-level deep compare | 현재는 구조/manifest 중심 분석이다. 실제 품질은 ingestion, retrieval, update, provenance 구현에서 갈린다. | `reports/llm-wiki/02-code-level-pipeline-comparison.md` |
| spec trace schema 초안 작성 | spec memory를 실제 도구로 만들려면 JSON schema가 필요하다. | `specs/schema/trace.schema.json` |
| 웹 UI 검색성 점검 | 웹 검색/필터가 큰 문서 수에서도 잘 작동해야 한다. | Playwright smoke test 또는 static JS check |
| Vercel prod 배포 검증 | `vercel.json`은 존재하지만 실제 prod URL은 인증/프로젝트 연결 상태에 의존한다. | Vercel deployment URL 기록 |
