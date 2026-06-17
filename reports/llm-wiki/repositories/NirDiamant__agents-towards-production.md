# NirDiamant/agents-towards-production 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/NirDiamant__agents-towards-production |
| remote | https://github.com/NirDiamant/agents-towards-production |
| HEAD | 0dee56a (2026-06-17) Point course CTA at the /courses info page instead of the waitlist |
| branch | main |
| groups | llm-wiki-100 |
| files | 214 |
| dirs | 58 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Agents Towards Production`, `_The open-source playbook for turning AI agents into real-world products._`, `⭐ **If you find value in this project, PLEASE STAR IT to help others discover these tutorials!**`, `🎓 From prototype to production, as a method`, `💎 Tutorial Sponsors`, `💎 General Sponsors`, `💎 Become a Sponsor`, `📫 Stay Updated!`, `💬 Join Our Community`, `r/EducationalAI`, `✨ Introduction`, `🏗️ AI Agent Architecture`, `📚 Tutorials`, `🔌 Tool Integration`, `📊 Data Processing`, `🔍 RAG & Knowledge Management`, `🧠 Memory`, `🚀 Deployment`

> <div align="center" Agents Towards Production The open source playbook for turning AI agents into real world products. Agents Towards Production is your go‑to resource for building production‑ready GenAI agents that scale from prototype to enterprise. Tutorials cover stateful workflows, vector memory, real‑time web search APIs, Docker deployment, FastAPI endpoints, security guardrails, GPU scaling, browser automation, fine‑tuning, multi‑agent coordination, observability, evaluation, and UI development. ⭐ If you find value in this project, PLEASE STAR IT to help others discover these tutorials! <! SEO Keywords generative ai agents, production deployment, langgraph, langchain, rag, retrieval augmented generation, memory, observability, guardrails, gpu deployment, orchestration, multi agent, prompt engineering, tutorials, guide </div 🎓 From prototype to production, as a method <div align="

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| assets | dir |
| CONTRIBUTING.md | file |
| images | dir |
| LICENSE | file |
| README.md | file |
| tutorials | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tutorials/ | 160 |
| assets/ | 46 |
| (root) | 4 |
| .github/ | 2 |
| images/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tutorials/ | 160 | large |
| assets/ | 46 | large |
| assets/repos_images/ | 46 | large |
| assets/repos_images/sponsors_logos/ | 41 | large |
| tutorials/agent-with-tavily-web-access/ | 21 | large |
| tutorials/kotlin-agent-with-koog/ | 21 | large |
| tutorials/runpod-gpu-deploy/ | 19 | large |
| tutorials/docker-intro/ | 18 | large |
| tutorials/runpod-gpu-deploy/assets/ | 13 | large |
| tutorials/agent-with-tavily-web-access/supplemental/ | 12 | large |
| tutorials/ai-memory-with-cognee/ | 11 | large |
| tutorials/agent-security-with-llamafirewall/ | 10 | large |
| tutorials/docker-intro/assets/ | 9 | large |
| tutorials/agent-security-apex/ | 8 | large |
| tutorials/docker-intro/examples/ | 8 | large |
| tutorials/kotlin-agent-with-koog/assets/ | 8 | large |
| tutorials/agent-with-mcp/ | 6 | large |
| tutorials/ai-memory-with-cognee/data/ | 6 | large |
| tutorials/agent-memory-with-mem0/ | 5 | large |
| tutorials/agent-memory-with-redis/ | 5 | large |
| tutorials/agent-with-brightdata/ | 5 | large |
| tutorials/agent-with-mcp/assets/ | 5 | large |
| tutorials/agent-with-streamlit-ui/ | 5 | large |
| tutorials/fastapi-agent/ | 5 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `tutorials/agent-RAG-with-Contextual/requirements.txt`
- `tutorials/agent-security-apex/requirements.txt`
- `tutorials/agent-security-with-llamafirewall/requirements.txt`
- `tutorials/agent-with-streamlit-ui/requirements.txt`
- `tutorials/agent-with-tavily-web-access/requirements.txt`
- `tutorials/ai-memory-with-cognee/requirements.txt`
- `tutorials/docker-intro/examples/ex1/Dockerfile`
- `tutorials/docker-intro/examples/ex2/Dockerfile`
- `tutorials/docker-intro/examples/ex3/Dockerfile`
- `tutorials/docker-intro/examples/ex4/Dockerfile`
- `tutorials/docker-intro/examples/ex5/Dockerfile`
- `tutorials/on-prem-llm-ollama/requirements.txt`
- `tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile`
- `tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `tutorials/agent-RAG-with-Contextual/README.md`
- `tutorials/agent-memory-with-mem0/README.md`
- `tutorials/agent-memory-with-redis/README.md`
- `tutorials/agent-security-apex/README.md`
- `tutorials/agent-security-with-llamafirewall/README.md`
- `tutorials/agent-with-brightdata/README.md`
- `tutorials/agent-with-tavily-web-access/README.md`
- `tutorials/agent-with-tavily-web-access/supplemental/docs/amazon.pdf`
- `tutorials/agent-with-tavily-web-access/supplemental/docs/apple.pdf`
- `tutorials/agent-with-tavily-web-access/supplemental/docs/google.pdf`
- `tutorials/agent-with-tavily-web-access/supplemental/docs/meta.pdf`
- `tutorials/agent-with-tavily-web-access/supplemental/docs/microsoft.pdf`
- `tutorials/agent-with-tavily-web-access/supplemental/docs/tesla.pdf`
- `tutorials/ai-memory-with-cognee/README.md`
- `tutorials/arcade-secure-tool-calling/README.md`
- `tutorials/docker-intro/README.md`
- `tutorials/kotlin-agent-with-koog/README.md`
- `tutorials/runpod-gpu-deploy/README.md`
- `tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/README.md`

### 에이전트 지침 후보

- `tutorials/agent-with-mcp/assets/Claude_Desktop_with_MCP.png`
- `tutorials/agent-with-mcp/assets/customized_mcp_host.png`
- `tutorials/agent-with-mcp/assets/mcp_architecture.png`
- `tutorials/agent-with-mcp/assets/track_bitcoin_price_with_mcp.png`
- `tutorials/agent-with-mcp/assets/track_crypto_market_data_with_mcp.png`
- `tutorials/agent-with-mcp/mcp-tutorial.ipynb`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tutorials/fastapi-agent/tests/test_fastapi_agent.py`

### CI/Docker 후보

- `tutorials/docker-intro/examples/ex1/Dockerfile`
- `tutorials/docker-intro/examples/ex2/Dockerfile`
- `tutorials/docker-intro/examples/ex3/Dockerfile`
- `tutorials/docker-intro/examples/ex4/Dockerfile`
- `tutorials/docker-intro/examples/ex5/Dockerfile`
- `tutorials/runpod-gpu-deploy/crew-ai-ollama-runpod-tutorial/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .png | 93 |
| .ipynb | 28 |
| .md | 20 |
| .svg | 11 |
| .py | 10 |
| .txt | 9 |
| .pdf | 6 |
| dockerfile | 6 |
| .bin | 4 |
| .gitignore | 3 |
| .jpg | 3 |
| .kt | 3 |
| .bat | 2 |
| .json | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tutorials/ 내부 책임 분리`
- `assets/ 내부 책임 분리`
- `assets/repos_images/ 내부 책임 분리`
- `assets/repos_images/sponsors_logos/ 내부 책임 분리`
- `tutorials/agent-with-tavily-web-access/ 내부 책임 분리`
- `tutorials/agent-RAG-with-Contextual/requirements.txt 실행 스크립트와 패키지 경계`
- `tutorials/agent-security-apex/requirements.txt 실행 스크립트와 패키지 경계`
- `tutorials/agent-security-with-llamafirewall/requirements.txt 실행 스크립트와 패키지 경계`
- `tutorials/agent-with-streamlit-ui/requirements.txt 실행 스크립트와 패키지 경계`
- `tutorials/agent-with-tavily-web-access/requirements.txt 실행 스크립트와 패키지 경계`

