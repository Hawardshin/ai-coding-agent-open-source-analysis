# 1517005260/graph-rag-agent 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/1517005260__graph-rag-agent |
| remote | https://github.com/1517005260/graph-rag-agent |
| HEAD | 4296b7c (2025-11-05) Update start.md |
| branch | master |
| groups | llm-wiki-100 |
| files | 274 |
| dirs | 59 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `readme.md`
- 주요 heading: `GraphRAG + DeepSearch 实现与问答系统（Agent）构建`, `🏠 项目架构图`, `📂 项目结构`, `🚀 相关资源`, `✨ 项目亮点`, `🏁 快速开始`, `🧰 功能模块`, `图谱构建与管理`, `GraphRAG 实现`, `DeepSearch 融合`, `多种 Agent 实现`, `多智能体协作系统`, `系统评估与监控`, `前后端实现`, `🖥️ 简单演示`, `网页端演示`, `终端测试输出：`, `本例为测试MultiAgent的输出，其他Agent可以在测试脚本中删除注释自行测试`

> GraphRAG + DeepSearch 实现与问答系统（Agent）构建 本项目聚焦于结合 GraphRAG 与 私域 Deep Search 的方式，实现可解释、可推理的智能问答系统，同时结合多 Agent 协作与知识图谱增强，构建完整的 RAG 智能交互解决方案。 💡 灵感来源于检索增强推理与深度搜索场景，探索 RAG 与 Agent 在未来应用中的结合路径。 🏠 项目架构图 注：本项目已被deepwiki官方收录，有助于理解整体的项目代码和核心的工作原理 ，另外还有类似的中文网址zreadai 由Claude生成 📂 项目结构 此外，每个模块下都有单独的readme来介绍模块的功能 🚀 相关资源 大模型推理能力不断增强，RAG 和 Agent 何去何从 企业级知识图谱交互问答系统方案 Jean 用国产大模型 + LangChain + Neo4j 建图全过程 GraphRAG vs DeepSearch？GraphRAG 提出者给你答案 ✨ 项目亮点 从零开始复现 GraphRAG ：完整实现了 GraphRAG 的核心功能，将知识表示为图结构 DeepSearch 与 GraphRAG 创新融合 ：现有 DeepSearch 框架主要基于向量数据库，本项目创新性地将其与知识图谱结合 多 Agent 协同架构 ：实现不同类型 Agent 的协同工作，提升复杂问题处理能力 完整评估系统 ：提供 20+ 种评估指标，全方位衡量系统性能 增量更新机制 ：支持知识图谱的动态增量构建与智能去重 实体质量提升 ：实体消歧和对齐机制，有效解决实体歧义和重复问题 思考过程可视化 ：展示 AI 的推理轨迹，提高可解释性和透明度 🏁 快速开始 请参考：快速开始文档 🧰 功能模块 图谱构建与管理 多格式文档处理 ：支持 TXT、PDF、MD、DOCX、DOC、CSV、JSON、YAML/YML 等格式 LLM 驱动的实体关系提取 ：利用大语言模型从文本中识别实体与关系 增量更新机制 ：支持已有图谱上的动态更新，智能处理冲突 实体质量提升 ：通过实体消歧和对齐提升实体准确

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .env.example | file |
| .gitignore | file |
| AGENTS.md | file |
| assets | dir |
| CLAUDE.md | file |
| datasets | dir |
| docker-compose.yaml | file |
| files | dir |
| frontend | dir |
| graphrag_agent | dir |
| LICENSE | file |
| readme.md | file |
| requirements.txt | file |
| server | dir |
| setup.py | file |
| test | dir |
| training | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| graphrag_agent/ | 191 |
| server/ | 22 |
| frontend/ | 20 |
| files/ | 15 |
| (root) | 9 |
| assets/ | 8 |
| test/ | 6 |
| training/ | 2 |
| datasets/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| server/ | 22 | preferred |
| frontend/ | 20 | preferred |
| test/ | 6 | preferred |
| graphrag_agent/ | 191 | large |
| graphrag_agent/agents/ | 44 | large |
| graphrag_agent/agents/multi_agent/ | 36 | large |
| graphrag_agent/evaluation/ | 36 | large |
| graphrag_agent/search/ | 32 | large |
| graphrag_agent/search/tool/ | 25 | large |
| graphrag_agent/graph/ | 22 | large |
| graphrag_agent/cache_manager/ | 20 | large |
| files/ | 15 | large |
| graphrag_agent/config/ | 13 | large |
| frontend/components/ | 11 | large |
| graphrag_agent/community/ | 11 | large |
| files/txt文件/ | 10 | large |
| graphrag_agent/config/prompts/ | 9 | large |
| graphrag_agent/evaluation/test/ | 9 | large |
| assets/ | 8 | large |
| frontend/components/knowledge_graph/ | 6 | large |
| graphrag_agent/cache_manager/backends/ | 6 | large |
| graphrag_agent/evaluation/metrics/ | 6 | large |
| graphrag_agent/graph/processing/ | 6 | large |
| graphrag_agent/pipelines/ | 6 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `datasets/readme.md`
- `frontend/readme.md`
- `graphrag_agent/agents/multi_agent/readme.md`
- `graphrag_agent/agents/readme.md`
- `graphrag_agent/cache_manager/readme.md`
- `graphrag_agent/community/readme.md`
- `graphrag_agent/config/readme.md`
- `graphrag_agent/evaluation/readme.md`
- `graphrag_agent/evaluation/test/readme.md`
- `graphrag_agent/graph/readme.md`
- `graphrag_agent/models/readme.md`
- `graphrag_agent/pipelines/ingestion/readme.md`
- `graphrag_agent/readme.md`
- `graphrag_agent/search/readme.md`
- `graphrag_agent/search/tool/reasoning/readme.md`
- `readme.md`
- `server/readme.md`
- `test/readme.md`
- `training/readme.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `graphrag_agent/evaluation/test/answer.json`
- `graphrag_agent/evaluation/test/evaluate_all_agents.py`
- `graphrag_agent/evaluation/test/evaluate_deep_agent.py`
- `graphrag_agent/evaluation/test/evaluate_fusion_agent.py`
- `graphrag_agent/evaluation/test/evaluate_graph_agent.py`
- `graphrag_agent/evaluation/test/evaluate_hybrid_agent.py`
- `graphrag_agent/evaluation/test/evaluate_naive_agent.py`
- `graphrag_agent/evaluation/test/questions.json`
- `graphrag_agent/evaluation/test/readme.md`
- `test/hotpot_multi_agent_eval.py`
- `test/readme.md`
- `test/search_with_stream.py`
- `test/search_without_stream.py`
- `test/test_cache_system.py`
- `test/test_deep_agent.py`

### CI/Docker 후보

- `docker-compose.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 222 |
| .md | 22 |
| .txt | 11 |
| .png | 5 |
| .pdf | 3 |
| .doc | 2 |
| .json | 2 |
| .svg | 2 |
| .example | 1 |
| .gitignore | 1 |
| .ipynb | 1 |
| .yaml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `readme.md의 workflow/usage 섹션`
- `server/ 내부 책임 분리`
- `frontend/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `graphrag_agent/ 내부 책임 분리`
- `graphrag_agent/agents/ 내부 책임 분리`
- `requirements.txt 실행 스크립트와 패키지 경계`

