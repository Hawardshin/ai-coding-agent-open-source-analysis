# ohbryt/bb-wiki 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/ohbryt__bb-wiki |
| remote | https://github.com/ohbryt/bb-wiki |
| HEAD | 39210dd (2026-06-17) wiki(concepts): add Harness Engineering concept page (2026-06-17) |
| branch | main |
| groups | llm-wiki-100 |
| files | 28 |
| dirs | 5 |
| stack | unknown/mixed |

## 구조 해석

- 루트 파일과 manifest 중심의 얕은 구조이며, README와 주요 manifest부터 읽어야 한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Brown Biotech Wiki (bb-wiki)`, `한 줄 요약`, `위치 & 접근`, `Quick start`, `1. Lint — wiki 건강 상태`, `2. 신규 deep-dive 1개 ingest`, `3. 배치 ingest (10개씩)`, `4. Obsidian에서 열기`, `구조`, `3-섹션 (또는 4-섹션) 판단 레이어`, `1. Source Quotes (원문 충실)`, `2. My Interpretation (Demios/사용자 해석)`, `3. Open Questions (자기 질문) ⭐`, `4. Contradictions (충돌)`, `3-Checkpoint (Feature Factory)`, `일일/주간 운영 리듬`, `Daily (5분)`, `Weekly (Friday, 30분)`

> title bb wiki 운영 가이드 created 2026 06 14 updated 2026 06 14 type readme tags [meta] Brown Biotech Wiki (bb wiki) An Lab LLM Wiki pedagogy × Brown Biotech 도메인. "AI는 정리를 빠르게 하지만, 판단은 사용자가 한다." 한 줄 요약 Brown Biotech의 persistent, interlinked knowledge base . arp v27/literature/ 의 41개 deep dive + 신규 ingest를 compounding knowledge 로 변환. Obsidian graph view로 시각화 가능. 4 섹션 판단 레이어 가 모든 페이지의 핵심. 위치 & 접근 경로 용도 /Users/ocm/openclaw/workspace/bb wiki/ Primary (canonical) ~/Documents/Obsidian Vault/brown biotech Obsidian 브라우징 (symlink) bb wiki/raw/ arp v27/literature/ (immutable source layer, symlink) Quick start 구조 3 섹션 (또는 4 섹션) 판단 레이어 An Lab 에세이의 핵심 "AI 요약은 답이 아니라 자료. 학생이 자기 질문을 세우는 자리." 모든 concept/entity/comparison 페이지 하단에 4 섹션 필수 1. Source Quotes (원문 충실) 논문/원문에서 직접 인용 각 인용은 [[raw/.../source.pdf]] 또는 DOI/PMID 링크 1 3개로 제한 2. My Interpretation (Demios/사용자 해석) "이 페이지에서 어디까지 말할 수 있는가" AI 요약과 명확히 구분 추측은 추측으

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| comparisons | dir |
| concepts | dir |
| entities | dir |
| index.md | file |
| log.md | file |
| queries | dir |
| raw | other |
| README.md | file |
| SCHEMA.md | file |
| scripts | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| concepts/ | 16 |
| (root) | 5 |
| comparisons/ | 2 |
| queries/ | 2 |
| scripts/ | 2 |
| entities/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| scripts/ | 2 | preferred |
| concepts/ | 16 | large |
| comparisons/ | 2 | large |
| queries/ | 2 | large |
| entities/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 25 |
| .py | 2 |
| .gitignore | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `scripts/ 내부 책임 분리`
- `concepts/ 내부 책임 분리`
- `comparisons/ 내부 책임 분리`
- `queries/ 내부 책임 분리`
- `entities/ 내부 책임 분리`

