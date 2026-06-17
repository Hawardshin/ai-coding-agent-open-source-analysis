# The-Pocket/PocketFlow 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/The-Pocket__PocketFlow |
| remote | https://github.com/The-Pocket/PocketFlow |
| HEAD | 43ef382 (2026-03-27) add new examples |
| branch | main |
| groups | llm-wiki-100 |
| files | 529 |
| dirs | 138 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Why Pocket Flow?`, `How does Pocket Flow work?`, `How to Use Pocket Flow?`

> <div align="center" <img src="https //github.com/The Pocket/.github/raw/main/assets/title.png" alt="Pocket Flow – 100 line minimalist LLM framework" width="600"/ </div <! For translation, replace English with English, and remove the link for the target language. English 中文 Español 日本語 Deutsch Русский Português Français 한국어 <a href="https //discord.gg/hUHHE9Sa6T" <img src="https //img.shields.io/discord/1346833819172601907?logo=discord&style=flat" </a Pocket Flow is a 100 line minimalist LLM framework Lightweight Just 100 lines. Zero bloat, zero dependencies, zero vendor lock in. Expressive Everything you love—(Multi )Agents, Workflow, RAG, and more. Agentic Coding Let AI Agents (e.g., Cursor AI) build Agents—10x productivity boost! Get started with Pocket Flow To install, or just copy the source code (only 100 lines). To learn more, check out the video tutorial and documentation 🎉 Join 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cursor | dir |
| .cursorrules | file |
| .gitignore | file |
| cookbook | dir |
| docs | dir |
| LICENSE | file |
| pocketflow | dir |
| README.md | file |
| setup.py | file |
| tests | dir |
| utils | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| cookbook/ | 465 |
| docs/ | 26 |
| .cursor/ | 20 |
| tests/ | 10 |
| (root) | 5 |
| pocketflow/ | 2 |
| utils/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 26 | preferred |
| tests/ | 10 | preferred |
| cookbook/ | 465 | large |
| .cursor/ | 20 | large |
| .cursor/rules/ | 20 | large |
| cookbook/pocketflow-a2a/ | 20 | large |
| cookbook/pocketflow-batch-flow/ | 17 | large |
| cookbook/pocketflow-parallel-batch-flow/ | 17 | large |
| cookbook/pocketflow-coding-agent/ | 16 | large |
| cookbook/pocketflow-tracing/ | 15 | large |
| cookbook/pocketflow-batch/ | 12 | large |
| cookbook/pocketflow-gradio-hitl/ | 12 | large |
| cookbook/pocketflow-parallel-batch/ | 12 | large |
| cookbook/pocketflow-voice-chat/ | 12 | large |
| cookbook/pocketflow-a2a/common/ | 11 | large |
| cookbook/pocketflow-fastapi-background/ | 11 | large |
| cookbook/pocketflow-fastapi-hitl/ | 11 | large |
| cookbook/pocketflow-map-reduce/ | 11 | large |
| cookbook/pocketflow-fastapi-websocket/ | 10 | large |
| cookbook/pocketflow-streamlit-fsm/ | 10 | large |
| cookbook/pocketflow-tool-pdf-vision/ | 10 | large |
| cookbook/pocketflow-batch-flow/output/ | 9 | large |
| cookbook/pocketflow-chat-memory/ | 9 | large |
| cookbook/pocketflow-code-generator/ | 9 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `cookbook/pocketflow-a2a/requirements.txt`
- `cookbook/pocketflow-agent-skills/requirements.txt`
- `cookbook/pocketflow-agent/requirements.txt`
- `cookbook/pocketflow-agentic-rag/requirements.txt`
- `cookbook/pocketflow-async-basic/requirements.txt`
- `cookbook/pocketflow-batch-flow/requirements.txt`
- `cookbook/pocketflow-batch-node/requirements.txt`
- `cookbook/pocketflow-batch/requirements.txt`
- `cookbook/pocketflow-chat-guardrail/requirements.txt`
- `cookbook/pocketflow-chat-memory/requirements.txt`
- `cookbook/pocketflow-chat/requirements.txt`
- `cookbook/pocketflow-cli-hitl/requirements.txt`
- `cookbook/pocketflow-code-generator/requirements.txt`
- `cookbook/pocketflow-coding-agent/requirements.txt`
- `cookbook/pocketflow-communication/requirements.txt`
- `cookbook/pocketflow-debate/requirements.txt`
- `cookbook/pocketflow-deep-research/requirements.txt`
- `cookbook/pocketflow-fastapi-background/requirements.txt`
- `cookbook/pocketflow-fastapi-hitl/requirements.txt`
- `cookbook/pocketflow-fastapi-websocket/requirements.txt`
- `cookbook/pocketflow-flow/requirements.txt`
- `cookbook/pocketflow-gradio-hitl/requirements.txt`
- `cookbook/pocketflow-heartbeat/requirements.txt`
- `cookbook/pocketflow-invoice/requirements.txt`
- `cookbook/pocketflow-judge/requirements.txt`
- `cookbook/pocketflow-lead-generation/requirements.txt`
- `cookbook/pocketflow-llm-streaming/requirements.txt`
- `cookbook/pocketflow-majority-vote/requirements.txt`
- `cookbook/pocketflow-map-reduce/requirements.txt`
- `cookbook/pocketflow-mcp/requirements.txt`
- `cookbook/pocketflow-multi-agent/requirements.txt`
- `cookbook/pocketflow-nested-batch/requirements.txt`
- `cookbook/pocketflow-newsletter/requirements.txt`
- `cookbook/pocketflow-node/requirements.txt`
- `cookbook/pocketflow-notebook-lm/requirements.txt`
- `cookbook/pocketflow-parallel-batch-flow/requirements.txt`
- `cookbook/pocketflow-parallel-batch/requirements.txt`
- `cookbook/pocketflow-rag/requirements.txt`
- `cookbook/pocketflow-self-healing-mermaid/requirements.txt`
- `cookbook/pocketflow-streamlit-fsm/requirements.txt`
- `cookbook/pocketflow-structured-output/requirements.txt`
- `cookbook/pocketflow-supervisor/requirements.txt`
- `cookbook/pocketflow-text2sql/requirements.txt`
- `cookbook/pocketflow-thinking/requirements.txt`
- `cookbook/pocketflow-tool-crawler/requirements.txt`
- `cookbook/pocketflow-tool-database/requirements.txt`
- `cookbook/pocketflow-tool-embeddings/requirements.txt`
- `cookbook/pocketflow-tool-pdf-vision/requirements.txt`
- `cookbook/pocketflow-tool-search/requirements.txt`
- `cookbook/pocketflow-tracing/requirements.txt`
- `cookbook/pocketflow-voice-chat/requirements.txt`
- `cookbook/pocketflow-workflow/requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `cookbook/README.md`
- `cookbook/pocketflow-a2a/README.md`
- `cookbook/pocketflow-agent-skills/README.md`
- `cookbook/pocketflow-agent/README.md`
- `cookbook/pocketflow-agentic-rag/README.md`
- `cookbook/pocketflow-async-basic/README.md`
- `cookbook/pocketflow-batch-flow/README.md`
- `cookbook/pocketflow-batch-node/README.md`
- `cookbook/pocketflow-batch/README.md`
- `cookbook/pocketflow-chat-guardrail/README.md`
- `cookbook/pocketflow-chat-memory/README.md`
- `cookbook/pocketflow-chat/README.md`
- `cookbook/pocketflow-cli-hitl/README.md`
- `cookbook/pocketflow-cli-hitl/docs/design.md`
- `cookbook/pocketflow-code-generator/README.md`
- `cookbook/pocketflow-code-generator/doc/design.md`
- `cookbook/pocketflow-coding-agent/README.md`
- `cookbook/pocketflow-communication/README.md`
- `cookbook/pocketflow-debate/README.md`
- `cookbook/pocketflow-deep-research/README.md`
- `cookbook/pocketflow-fastapi-background/README.md`
- `cookbook/pocketflow-fastapi-background/docs/design.md`
- `cookbook/pocketflow-fastapi-hitl/README.md`
- `cookbook/pocketflow-fastapi-hitl/docs/design.md`
- `cookbook/pocketflow-fastapi-websocket/README.md`
- `cookbook/pocketflow-fastapi-websocket/docs/design.md`
- `cookbook/pocketflow-flow/README.md`
- `cookbook/pocketflow-google-calendar/README.md`
- `cookbook/pocketflow-gradio-hitl/README.md`
- `cookbook/pocketflow-heartbeat/README.md`
- `cookbook/pocketflow-hello-world/README.md`
- `cookbook/pocketflow-hello-world/docs/design.md`
- `cookbook/pocketflow-invoice/README.md`
- `cookbook/pocketflow-judge/README.md`
- `cookbook/pocketflow-lead-generation/README.md`
- `cookbook/pocketflow-llm-streaming/README.md`
- `cookbook/pocketflow-majority-vote/README.md`
- `cookbook/pocketflow-map-reduce/README.md`
- `cookbook/pocketflow-mcp/README.md`
- `cookbook/pocketflow-multi-agent/README.md`
- `cookbook/pocketflow-nested-batch/README.md`
- `cookbook/pocketflow-newsletter/README.md`
- `cookbook/pocketflow-node/README.md`
- `cookbook/pocketflow-notebook-lm/README.md`
- `cookbook/pocketflow-parallel-batch-flow/README.md`
- `cookbook/pocketflow-parallel-batch/README.md`
- `cookbook/pocketflow-rag/README.md`
- `cookbook/pocketflow-self-healing-mermaid/README.md`
- `cookbook/pocketflow-streamlit-fsm/README.md`
- ... 30 more

### 에이전트 지침 후보

- `.cursor/rules/core_abstraction/async.mdc`
- `.cursor/rules/core_abstraction/batch.mdc`
- `.cursor/rules/core_abstraction/communication.mdc`
- `.cursor/rules/core_abstraction/flow.mdc`
- `.cursor/rules/core_abstraction/node.mdc`
- `.cursor/rules/core_abstraction/parallel.mdc`
- `.cursor/rules/design_pattern/agent.mdc`
- `.cursor/rules/design_pattern/mapreduce.mdc`
- `.cursor/rules/design_pattern/multi_agent.mdc`
- `.cursor/rules/design_pattern/rag.mdc`
- `.cursor/rules/design_pattern/structure.mdc`
- `.cursor/rules/design_pattern/workflow.mdc`
- `.cursor/rules/guide_for_pocketflow.mdc`
- `.cursor/rules/utility_function/chunking.mdc`
- `.cursor/rules/utility_function/embedding.mdc`
- `.cursor/rules/utility_function/llm.mdc`
- `.cursor/rules/utility_function/text_to_speech.mdc`
- `.cursor/rules/utility_function/vector.mdc`
- `.cursor/rules/utility_function/viz.mdc`
- `.cursor/rules/utility_function/websearch.mdc`
- `cookbook/pocketflow-agent-skills/README.md`
- `cookbook/pocketflow-agent-skills/flow.py`
- `cookbook/pocketflow-agent-skills/main.py`
- `cookbook/pocketflow-agent-skills/nodes.py`
- `cookbook/pocketflow-agent-skills/requirements.txt`
- `cookbook/pocketflow-agent-skills/skills/checklist_writer.md`
- `cookbook/pocketflow-agent-skills/skills/executive_brief.md`
- `cookbook/pocketflow-agent-skills/utils.py`
- `cookbook/pocketflow-mcp/README.md`
- `cookbook/pocketflow-mcp/main.py`
- `cookbook/pocketflow-mcp/requirements.txt`
- `cookbook/pocketflow-mcp/simple_server.py`
- `cookbook/pocketflow-mcp/utils.py`

### 스펙/템플릿/명령/스킬 후보

- `cookbook/pocketflow-agent-skills/skills/checklist_writer.md`
- `cookbook/pocketflow-agent-skills/skills/executive_brief.md`
- `cookbook/pocketflow-cli-hitl/docs/design.md`
- `cookbook/pocketflow-code-generator/doc/design.md`
- `cookbook/pocketflow-fastapi-background/docs/design.md`
- `cookbook/pocketflow-fastapi-hitl/docs/design.md`
- `cookbook/pocketflow-fastapi-hitl/templates/index.html`
- `cookbook/pocketflow-fastapi-websocket/docs/design.md`
- `cookbook/pocketflow-hello-world/docs/design.md`
- `cookbook/pocketflow-streamlit-fsm/docs/design.md`
- `cookbook/pocketflow-text2sql/docs/design.md`
- `cookbook/pocketflow-thinking/design.md`
- `cookbook/pocketflow-voice-chat/docs/design.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/test_async_batch_flow.py`
- `tests/test_async_batch_node.py`
- `tests/test_async_flow.py`
- `tests/test_async_parallel_batch_flow.py`
- `tests/test_async_parallel_batch_node.py`
- `tests/test_batch_flow.py`
- `tests/test_batch_node.py`
- `tests/test_fall_back.py`
- `tests/test_flow_basic.py`
- `tests/test_flow_composition.py`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 269 |
| .md | 110 |
| .txt | 67 |
| .jpg | 24 |
| .mdc | 20 |
| .png | 10 |
| .html | 6 |
| .csv | 4 |
| .db | 2 |
| .gitignore | 2 |
| .ipynb | 2 |
| .pdf | 2 |
| .css | 1 |
| .cursorrules | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `cookbook/ 내부 책임 분리`
- `.cursor/ 내부 책임 분리`
- `.cursor/rules/ 내부 책임 분리`
- `cookbook/pocketflow-agent-skills/skills/checklist_writer.md 스펙/명령 의미`
- `cookbook/pocketflow-agent-skills/skills/executive_brief.md 스펙/명령 의미`
- `cookbook/pocketflow-cli-hitl/docs/design.md 스펙/명령 의미`
- `cookbook/pocketflow-code-generator/doc/design.md 스펙/명령 의미`
- `cookbook/pocketflow-fastapi-background/docs/design.md 스펙/명령 의미`
- `cookbook/pocketflow-a2a/requirements.txt 실행 스크립트와 패키지 경계`
- `cookbook/pocketflow-agent-skills/requirements.txt 실행 스크립트와 패키지 경계`
- `cookbook/pocketflow-agent/requirements.txt 실행 스크립트와 패키지 경계`
- `cookbook/pocketflow-agentic-rag/requirements.txt 실행 스크립트와 패키지 경계`
- `cookbook/pocketflow-async-basic/requirements.txt 실행 스크립트와 패키지 경계`

