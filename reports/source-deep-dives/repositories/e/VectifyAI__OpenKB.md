# VectifyAI/OpenKB 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

OpenKB: Open LLM Knowledge Base

## 요약

- 조사 단위: `sources/VectifyAI__OpenKB` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 104 files, 17 directories, depth score 84, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_url_ingest.py, skills/openkb/references/wiki-schema.md, openkb/url_ingest.py이고, 의존성 단서는 openai, click, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | VectifyAI/OpenKB |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 2083 |
| Forks | 231 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/VectifyAI__OpenKB](../../../../sources/VectifyAI__OpenKB) |
| 기존 보고서 | [reports/llm-wiki/repositories/VectifyAI__OpenKB.md](../../../llm-wiki/repositories/VectifyAI__OpenKB.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 104 / 17 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude-plugin, .github, examples, openkb, skills, tests |
| 상위 확장자 | .py: 85, .md: 8, .pdf: 3, .example: 2, (none): 2, .json: 1, .lock: 1, .toml: 1, .yml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 42 |
| examples/docs | examples workspace | 3 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| openkb | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | openkb | openkb |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/test_url_ingest.py](../../../../sources/VectifyAI__OpenKB/tests/test_url_ingest.py) | retrieval signal |
| retrieval | [skills/openkb/references/wiki-schema.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/references/wiki-schema.md) | retrieval signal |
| retrieval | [openkb/url_ingest.py](../../../../sources/VectifyAI__OpenKB/openkb/url_ingest.py) | retrieval signal |
| entrypoints | [openkb/__main__.py](../../../../sources/VectifyAI__OpenKB/openkb/__main__.py) | entrypoints signal |
| docs | [README.md](../../../../sources/VectifyAI__OpenKB/README.md) | docs signal |
| docs | [examples/docs/attention-is-all-you-need.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/attention-is-all-you-need.pdf) | docs signal |
| docs | [examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf) | docs signal |
| docs | [examples/docs/deepseek-r1.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/deepseek-r1.pdf) | docs signal |
| eval | [tests/conftest.py](../../../../sources/VectifyAI__OpenKB/tests/conftest.py) | eval signal |
| eval | [tests/test_add_command.py](../../../../sources/VectifyAI__OpenKB/tests/test_add_command.py) | eval signal |
| eval | [tests/test_agent_tools.py](../../../../sources/VectifyAI__OpenKB/tests/test_agent_tools.py) | eval signal |
| eval | [tests/test_chat_session.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_session.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [openkb/__main__.py](../../../../sources/VectifyAI__OpenKB/openkb/__main__.py) |
| agentRuntime | 25 | [skills/openkb-html-critic/SKILL.md](../../../../sources/VectifyAI__OpenKB/skills/openkb-html-critic/SKILL.md)<br>[skills/openkb-deck-neon/SKILL.md](../../../../sources/VectifyAI__OpenKB/skills/openkb-deck-neon/SKILL.md)<br>[skills/openkb-deck-editorial/SKILL.md](../../../../sources/VectifyAI__OpenKB/skills/openkb-deck-editorial/SKILL.md)<br>[skills/openkb/SKILL.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/SKILL.md)<br>[skills/openkb/references/commands.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/references/commands.md)<br>[skills/openkb/references/wiki-schema.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/references/wiki-schema.md)<br>[openkb/skill/__init__.py](../../../../sources/VectifyAI__OpenKB/openkb/skill/__init__.py)<br>[openkb/skill/creator.py](../../../../sources/VectifyAI__OpenKB/openkb/skill/creator.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [tests/test_url_ingest.py](../../../../sources/VectifyAI__OpenKB/tests/test_url_ingest.py)<br>[skills/openkb/references/wiki-schema.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/references/wiki-schema.md)<br>[openkb/url_ingest.py](../../../../sources/VectifyAI__OpenKB/openkb/url_ingest.py) |
| spec | 0 | 명확하지 않음 |
| eval | 48 | [tests/conftest.py](../../../../sources/VectifyAI__OpenKB/tests/conftest.py)<br>[tests/test_add_command.py](../../../../sources/VectifyAI__OpenKB/tests/test_add_command.py)<br>[tests/test_agent_tools.py](../../../../sources/VectifyAI__OpenKB/tests/test_agent_tools.py)<br>[tests/test_chat_session.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_session.py)<br>[tests/test_chat_slash_commands.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_slash_commands.py)<br>[tests/test_cli.py](../../../../sources/VectifyAI__OpenKB/tests/test_cli.py)<br>[tests/test_compiler.py](../../../../sources/VectifyAI__OpenKB/tests/test_compiler.py)<br>[tests/test_config.py](../../../../sources/VectifyAI__OpenKB/tests/test_config.py) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/VectifyAI__OpenKB/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/VectifyAI__OpenKB/README.md)<br>[examples/docs/attention-is-all-you-need.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/attention-is-all-you-need.pdf)<br>[examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)<br>[examples/docs/deepseek-r1.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/deepseek-r1.pdf) |
| config | 2 | [pyproject.toml](../../../../sources/VectifyAI__OpenKB/pyproject.toml)<br>[uv.lock](../../../../sources/VectifyAI__OpenKB/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 48 | [tests/conftest.py](../../../../sources/VectifyAI__OpenKB/tests/conftest.py)<br>[tests/test_add_command.py](../../../../sources/VectifyAI__OpenKB/tests/test_add_command.py)<br>[tests/test_agent_tools.py](../../../../sources/VectifyAI__OpenKB/tests/test_agent_tools.py)<br>[tests/test_chat_session.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_session.py)<br>[tests/test_chat_slash_commands.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_slash_commands.py)<br>[tests/test_cli.py](../../../../sources/VectifyAI__OpenKB/tests/test_cli.py) |
| CI workflow | 1 | [.github/workflows/publish.yml](../../../../sources/VectifyAI__OpenKB/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_url_ingest.py`, `skills/openkb/references/wiki-schema.md`, `openkb/url_ingest.py`.
2. entrypoint를 따라 실행 흐름 확인: `openkb/__main__.py`.
3. agent/tool runtime 매핑: `skills/openkb-html-critic/SKILL.md`, `skills/openkb-deck-neon/SKILL.md`, `skills/openkb-deck-editorial/SKILL.md`.
4. retrieval/memory/indexing 확인: `tests/test_url_ingest.py`, `skills/openkb/references/wiki-schema.md`, `openkb/url_ingest.py`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_add_command.py`, `tests/test_agent_tools.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 OpenKB Open LLM Knowledge Base. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
