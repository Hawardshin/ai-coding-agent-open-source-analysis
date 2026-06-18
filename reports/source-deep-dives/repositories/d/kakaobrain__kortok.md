# kakaobrain/kortok 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The code and models for "An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks" (AACL-IJCNLP 2020)

## 요약

- 조사 단위: `sources/kakaobrain__kortok` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 170 files, 37 directories, depth score 69, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=pyproject.toml, requirements-dev.txt, requirements.txt이고, 의존성 단서는 torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakaobrain/kortok |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 119 |
| Forks | 10 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakaobrain__kortok](../../../../sources/kakaobrain__kortok) |
| 기존 보고서 | [reports/korea-trending/repositories/kakaobrain__kortok.md](../../../korea-trending/repositories/kakaobrain__kortok.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 170 / 37 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | dataset, resources, scripts, tasks, tokenizer |
| 상위 확장자 | .py: 51, .json: 48, .vocab: 36, .tsv: 13, .model: 11, .txt: 5, .md: 2, (none): 2, .cfg: 1, .toml: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| dataset | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |
| tasks | top-level component | 1 |
| tokenizer | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [pyproject.toml](../../../../sources/kakaobrain__kortok/pyproject.toml) | config signal |
| config | [requirements-dev.txt](../../../../sources/kakaobrain__kortok/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/kakaobrain__kortok/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/kakaobrain__kortok/README.md) | docs signal |
| docs | [scripts/README.md](../../../../sources/kakaobrain__kortok/scripts/README.md) | docs signal |
| eval | [dataset/nlu_tasks/paws/sample_test_2k.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/paws/sample_test_2k.tsv) | eval signal |
| eval | [dataset/nlu_tasks/nsmc/sample_test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/nsmc/sample_test.tsv) | eval signal |
| eval | [dataset/nlu_tasks/korsts/sample_sts-test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/korsts/sample_sts-test.tsv) | eval signal |
| eval | [dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [dataset/wiki/sample_en-wiki-200420.txt](../../../../sources/kakaobrain__kortok/dataset/wiki/sample_en-wiki-200420.txt)<br>[dataset/wiki/sample_ko-wiki-200420.txt](../../../../sources/kakaobrain__kortok/dataset/wiki/sample_ko-wiki-200420.txt)<br>[dataset/wiki/mecab_tokenized/sample_ko-wiki-200420.txt](../../../../sources/kakaobrain__kortok/dataset/wiki/mecab_tokenized/sample_ko-wiki-200420.txt) |
| spec | 2 | [requirements-dev.txt](../../../../sources/kakaobrain__kortok/requirements-dev.txt)<br>[requirements.txt](../../../../sources/kakaobrain__kortok/requirements.txt) |
| eval | 4 | [dataset/nlu_tasks/paws/sample_test_2k.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/paws/sample_test_2k.tsv)<br>[dataset/nlu_tasks/nsmc/sample_test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/nsmc/sample_test.tsv)<br>[dataset/nlu_tasks/korsts/sample_sts-test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/korsts/sample_sts-test.tsv)<br>[dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/kakaobrain__kortok/README.md)<br>[scripts/README.md](../../../../sources/kakaobrain__kortok/scripts/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/kakaobrain__kortok/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/kakaobrain__kortok/requirements-dev.txt)<br>[requirements.txt](../../../../sources/kakaobrain__kortok/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [dataset/nlu_tasks/paws/sample_test_2k.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/paws/sample_test_2k.tsv)<br>[dataset/nlu_tasks/nsmc/sample_test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/nsmc/sample_test.tsv)<br>[dataset/nlu_tasks/korsts/sample_sts-test.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/korsts/sample_sts-test.tsv)<br>[dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv](../../../../sources/kakaobrain__kortok/dataset/nlu_tasks/kornli/sample_xnli.test.ko.tsv) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pyproject.toml`, `requirements-dev.txt`, `requirements.txt`.
2. retrieval/memory/indexing 확인: `dataset/wiki/sample_en-wiki-200420.txt`, `dataset/wiki/sample_ko-wiki-200420.txt`, `dataset/wiki/mecab_tokenized/sample_ko-wiki-200420.txt`.
3. test/eval 파일로 동작 검증: `dataset/nlu_tasks/paws/sample_test_2k.tsv`, `dataset/nlu_tasks/nsmc/sample_test.tsv`, `dataset/nlu_tasks/korsts/sample_sts-test.tsv`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 The code and models for "An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks" AACL IJCNLP 2020. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, torch이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
