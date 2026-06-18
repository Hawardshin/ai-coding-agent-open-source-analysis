# line/LibriTTS-P

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/LibriTTS-P |
| local path | sources/line__LibriTTS-P |
| HEAD | e79ba68 |
| stars/forks | 161 / 3 |
| language |  |
| license |  |
| pushedAt | 2024-06-13T01:39:35Z |
| trendScore / priorityScore | 71 / 161 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 2 | CODE_OF_CONDUCT.md |
| Security / compliance | 2 | CODE_OF_CONDUCT.md |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, korea-signal, llm-wiki-memory, security-compliance |
| stacks | docs/awesome-list |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 9 |
| manifests | 1 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LibriTTS-P: A Corpus with Speaking Style and Speaker Identity Prompts for Text-to-Speech and Style Captioning |
| headings | LibriTTS-P: A Corpus with Speaking Style and Speaker Identity Prompts for Text-to-Speech and Style Captioning / File Details / Citation / License |
| excerpt | LibriTTS P A Corpus with Speaking Style and Speaker Identity Prompts for Text to Speech and Style Captioning We introduce LibriTTS P, a new corpus based on LibriTTS R that includes utterance level descriptions i.e., prompts of speaking style and speaker level prompts of speaker characteristics. We employ a hybrid approach to construct prompt annotations 1 manual annotations that capture human perceptions of speaker characteristics and 2 synthetic annotations on speaking style. Compared to existing English prompt datasets, our corpus provides more diverse prompt annotations for all speakers of LibriTTS R. Experimental results for prompt based controllable TTS demonstrate that the TTS model tr |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| data | 7 |
| CODE_OF_CONDUCT.md | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .csv | 5 |
| .md | 2 |
| .txt | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
