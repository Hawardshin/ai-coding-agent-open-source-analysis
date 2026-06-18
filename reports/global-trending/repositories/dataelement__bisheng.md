# dataelement/bisheng

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/dataelement/bisheng |
| local path | sources/dataelement__bisheng |
| HEAD | 9eb9328 |
| stars/forks | 11455 / 1869 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T19:30:08Z |
| trendScore / priorityScore | 168 / 466 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 441 | src/frontend/platform/README.md, src/frontend/client/package.json, src/frontend/client/tsconfig.json |
| Cloud native / infrastructure | 138 | README.md, src/frontend/client/package.json, src/frontend/client/vite.config.ts |
| AI agent / orchestration | 98 | README.md, src/backend/pyproject.toml, src/backend/bisheng_langchain/linsight/agent_test.py |
| RAG / retrieval / knowledge | 55 | src/backend/bisheng/common/errcode/README.md, src/frontend/client/vite.config.ts, src/backend/bisheng_langchain/rag/config/baseline_demo_v2.yaml |
| Database / data infrastructure | 34 | src/backend/bisheng/core/database/alembic/README.md, docker/docker-compose.yml, src/backend/bisheng/core/prompts/manager.py |
| Security / supply chain | 27 | README.md, src/frontend/client/vite.config.ts, SECURITY.md |
| Coding agent / software automation | 17 | src/frontend/client/src/components/Prompts/AdminSettings.tsx, src/frontend/client/src/components/Prompts/DeleteVersion.tsx, src/frontend/client/src/components/Prompts/Groups/ChatGroupItem.tsx |
| Data / ML platform | 7 | src/backend/bisheng/knowledge/rag/pipeline/README.md, src/backend/bisheng/common/errcode/README.md, src/backend/test/knowledge/rag/test_mineru.py |
| Developer tools / DX | 6 | src/frontend/client/package.json, src/frontend/client/vite.config.ts, docker/docker-compose.yml |
| Observability / evaluation | 3 | README.md, src/backend/pyproject.toml, src/backend/bisheng_langchain/rag/config/baseline_demo_v2.yaml |
| Local LLM / inference | 1 | src/backend/pyproject.toml |
| MCP / agent interoperability | 1 | src/backend/pyproject.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3482 |
| manifests | 26 |
| docs | 27 |
| tests | 38 |
| ci/ops | 12 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Enter the installation directory | Features / Quick start / Enter the installation directory / If the system does not have the git command, you can download the BISHENG code as a zip file. / Unzip and enter the installation directory / Acknowledgement / Community & contact / Star History | Proudly made by Chinese，May we, like the creators of Deepseek and Black Myth Wukong, bring more wonder and greatness to the world. 源自中国匠心，希望我们能像 Deepseek 、 黑神话：悟空 团队一样，给世界带来更多美好。 <img src="https //dataelem.com/bs/face.png" alt="Bisheng banner" <p align="center" <a href="https //dataelem.feishu.cn/wiki/ZxW6wZyAJicX4WkG0NqcWsbynde" <img src="https //img.shields.io/badge/docs Wiki brightgreen" </a <img src="https //img.shields.io/github/license/dataelement/bisheng" alt="license"/ <a href="" <img src="https //img.shields.io/github/last commit/dataelement/bisheng" </a <a href="https //star history.com/ dataelement/bisheng&Timeline" <img src="https //img.shields.io/github/stars/dataelement/bisheng |


## Key Files

### Manifests

- src/backend/bisheng/core/database/alembic/README.md
- src/backend/bisheng/knowledge/rag/pipeline/README.md
- src/backend/bisheng/llm/README.md
- src/frontend/client/src/pages/appChat/README.md
- src/frontend/platform/README.md
- src/frontend/platform/src/workspace/README.md
- README.md
- src/backend/bisheng/chat_session/README.md
- src/backend/bisheng/common/errcode/README.md
- src/backend/bisheng/finetune/README.md
- src/backend/bisheng/knowledge/README.md
- src/backend/bisheng/telemetry/README.md
- src/backend/bisheng/worker/README.md
- src/backend/README.md
- src/frontend/client/package.json
- src/frontend/client/tsconfig.json
- src/frontend/client/vite.config.ts
- src/frontend/Dockerfile
- src/frontend/platform/Dockerfile
- src/frontend/platform/package.json


### Spec / Docs / Prompt Artifacts

- src/backend/bisheng_langchain/gpts/prompts/__init__.py
- src/backend/bisheng_langchain/gpts/prompts/assistant_prompt_base.py
- src/backend/bisheng_langchain/gpts/prompts/assistant_prompt_cohere.py
- src/backend/bisheng_langchain/gpts/prompts/assistant_prompt_opt.py
- src/backend/bisheng_langchain/gpts/prompts/breif_description_prompt.py
- src/backend/bisheng_langchain/gpts/prompts/opening_dialog_prompt.py
- src/backend/bisheng_langchain/gpts/prompts/react_agent_prompt.py
- src/backend/bisheng_langchain/gpts/prompts/select_tools_prompt.py
- src/backend/bisheng_langchain/rag/prompts/__init__.py
- src/backend/bisheng_langchain/rag/prompts/extract_key_prompt.py
- src/backend/bisheng_langchain/rag/prompts/prompt_cohere.py
- src/backend/bisheng_langchain/rag/prompts/prompt.py
- src/backend/bisheng/core/prompts/__init__.py
- src/backend/bisheng/core/prompts/manager.py
- src/backend/bisheng/core/prompts/prompt_loader.py
- src/backend/bisheng/core/prompts/yaml/gen_title.yaml
- src/backend/bisheng/core/prompts/yaml/knowledge_space.yaml
- src/backend/bisheng/core/prompts/yaml/qa.yaml
- src/backend/bisheng/core/prompts/yaml/sop.yaml
- src/backend/bisheng/core/prompts/yaml/workstation.yaml


### Agent Instruction Files

- src/backend/bisheng_langchain/gpts/prompts/__init__.py
- src/backend/bisheng_langchain/gpts/prompts/assistant_prompt_base.py
- src/backend/bisheng_langchain/gpts/prompts/assistant_prompt_cohere.py
- src/backend/bisheng_langchain/gpts/prompts/assistant_prompt_opt.py
- src/backend/bisheng_langchain/gpts/prompts/breif_description_prompt.py
- src/backend/bisheng_langchain/gpts/prompts/opening_dialog_prompt.py
- src/backend/bisheng_langchain/gpts/prompts/react_agent_prompt.py
- src/backend/bisheng_langchain/gpts/prompts/select_tools_prompt.py
- src/backend/bisheng_langchain/rag/prompts/__init__.py
- src/backend/bisheng_langchain/rag/prompts/extract_key_prompt.py
- src/backend/bisheng_langchain/rag/prompts/prompt_cohere.py
- src/backend/bisheng_langchain/rag/prompts/prompt.py
- src/backend/bisheng/core/prompts/__init__.py
- src/backend/bisheng/core/prompts/manager.py
- src/backend/bisheng/core/prompts/prompt_loader.py


## Top Directories

| dir | count |
| --- | --- |
| src | 3446 |
| docker | 18 |
| .github | 5 |
| .drone.yml | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .pre-commit-config.yaml | 1 |
| CODE_OF_CONDUCT.md | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| README_CN.md | 1 |
| README_JPN.md | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .tsx | 1314 |
| .py | 855 |
| .ts | 601 |
| .svg | 151 |
| .js | 138 |
| .css | 61 |
| .woff2 | 49 |
| .json | 47 |
| .woff | 42 |
| .ttf | 40 |
| .pyc | 28 |
| .md | 27 |
| .jsx | 26 |
| .yaml | 24 |
| [no-ext] | 13 |
| .yml | 11 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
