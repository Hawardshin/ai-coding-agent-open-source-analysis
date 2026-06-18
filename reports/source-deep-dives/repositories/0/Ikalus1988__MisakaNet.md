# Ikalus1988/MisakaNet 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

📚 A zero-dependency, git-backed micro-lesson library for AI Agents to asynchronously share and search verified debugging experience. Python stdlib only. | https://misakanet.org

## 요약

- 조사 단위: `sources/Ikalus1988__MisakaNet` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 643 files, 75 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=search_knowledge.py, workers/email-register/src/index.js, tests/test_search_knowledge_stdout.py이고, 의존성 단서는 transformers, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Ikalus1988/MisakaNet |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 159 |
| Forks | 42 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Ikalus1988__MisakaNet](../../../../sources/Ikalus1988__MisakaNet) |
| 기존 보고서 | [reports/global-trending/repositories/Ikalus1988__MisakaNet.md](../../../global-trending/repositories/Ikalus1988__MisakaNet.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 643 / 75 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, .nodes, .responses, archive, avatars, bench_results, data, docs, hub, lessons, meta, misakanet, promotional, reference, schemas, scripts, tasks, tests, web, workers |
| 상위 확장자 | .md: 311, .json: 121, .py: 92, .png: 39, .yml: 36, (none): 11, .js: 6, .sh: 4, .svg: 3, .txt: 3, .7z: 2, .example: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 33 |
| tests | validation surface | 18 |
| web | source boundary | 2 |
| .github | ci surface | 1 |
| archive | top-level component | 1 |
| avatars | top-level component | 1 |
| bench_results | validation surface | 1 |
| data | top-level component | 1 |
| hub | top-level component | 1 |
| lessons | top-level component | 1 |
| meta | top-level component | 1 |
| misakanet | top-level component | 1 |
| promotional | top-level component | 1 |
| reference | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| tasks | top-level component | 1 |
| workers | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | deploy:web | cd web && npx wrangler deploy |
| utility | package.json | deploy:api | cd workers && npx wrangler deploy --config wrangler.api.jsonc |
| utility | package.json | deploy:email | cd workers/email-register && npx wrangler deploy |
| utility | package.json | deploy:all | npm run deploy:web && npm run deploy:api && npm run deploy:email |
| utility | package.json | deploy | npm run deploy:all |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | deploy-email | make deploy-email |
| utility | Makefile | deploy-api | make deploy-api |
| utility | Makefile | deploy-web | make deploy-web |
| utility | Makefile | deploy | make deploy |
| utility | pyproject.toml | misakanet | misakanet |
| utility | pyproject.toml | misaka-harvest | misaka-harvest |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [search_knowledge.py](../../../../sources/Ikalus1988__MisakaNet/search_knowledge.py) | retrieval signal |
| retrieval | [workers/email-register/src/index.js](../../../../sources/Ikalus1988__MisakaNet/workers/email-register/src/index.js) | retrieval signal |
| retrieval | [tests/test_search_knowledge_stdout.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_search_knowledge_stdout.py) | retrieval signal |
| retrieval | [tasks/index.json](../../../../sources/Ikalus1988__MisakaNet/tasks/index.json) | retrieval signal |
| entrypoints | [misakanet/__main__.py](../../../../sources/Ikalus1988__MisakaNet/misakanet/__main__.py) | entrypoints signal |
| docs | [README.md](../../../../sources/Ikalus1988__MisakaNet/README.md) | docs signal |
| docs | [workers/README.md](../../../../sources/Ikalus1988__MisakaNet/workers/README.md) | docs signal |
| docs | [workers/email-register/README.md](../../../../sources/Ikalus1988__MisakaNet/workers/email-register/README.md) | docs signal |
| docs | [misakanet/README.md](../../../../sources/Ikalus1988__MisakaNet/misakanet/README.md) | docs signal |
| eval | [test-nodes.json](../../../../sources/Ikalus1988__MisakaNet/test-nodes.json) | eval signal |
| eval | [tests/frontend.test.js](../../../../sources/Ikalus1988__MisakaNet/tests/frontend.test.js) | eval signal |
| eval | [tests/test_ci_self_heal.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_ci_self_heal.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [workers/email-register/src/index.js](../../../../sources/Ikalus1988__MisakaNet/workers/email-register/src/index.js)<br>[misakanet/__main__.py](../../../../sources/Ikalus1988__MisakaNet/misakanet/__main__.py) |
| agentRuntime | 81 | [AGENT_GUIDE.md](../../../../sources/Ikalus1988__MisakaNet/AGENT_GUIDE.md)<br>[AGENTS.md](../../../../sources/Ikalus1988__MisakaNet/AGENTS.md)<br>[reference/agent-medici-architecture-analysis-methodology.md](../../../../sources/Ikalus1988__MisakaNet/reference/agent-medici-architecture-analysis-methodology.md)<br>[misakanet/tools/__init__.py](../../../../sources/Ikalus1988__MisakaNet/misakanet/tools/__init__.py)<br>[misakanet/tools/dashboard.py](../../../../sources/Ikalus1988__MisakaNet/misakanet/tools/dashboard.py)<br>[misakanet/tools/langchain_tool.py](../../../../sources/Ikalus1988__MisakaNet/misakanet/tools/langchain_tool.py)<br>[misakanet/tools/lesson_scorer.py](../../../../sources/Ikalus1988__MisakaNet/misakanet/tools/lesson_scorer.py)<br>[misakanet/tools/telemetry_pipeline.py](../../../../sources/Ikalus1988__MisakaNet/misakanet/tools/telemetry_pipeline.py) |
| mcp | 5 | [lessons/contrib/aily-feishu-mcp-pull-only.md](../../../../sources/Ikalus1988__MisakaNet/lessons/contrib/aily-feishu-mcp-pull-only.md)<br>[lessons/contrib/feishu-mcp-server-deepseek-tui-setup.md](../../../../sources/Ikalus1988__MisakaNet/lessons/contrib/feishu-mcp-server-deepseek-tui-setup.md)<br>[lessons/contrib/game-mcp-end-turn-conflict-409.md](../../../../sources/Ikalus1988__MisakaNet/lessons/contrib/game-mcp-end-turn-conflict-409.md)<br>[lessons/contrib/game-mcp-game-over-restart-flow.md](../../../../sources/Ikalus1988__MisakaNet/lessons/contrib/game-mcp-game-over-restart-flow.md)<br>[lessons/contrib/game-mcp-rare-relic-freeze.md](../../../../sources/Ikalus1988__MisakaNet/lessons/contrib/game-mcp-rare-relic-freeze.md) |
| retrieval | 59 | [search_knowledge.py](../../../../sources/Ikalus1988__MisakaNet/search_knowledge.py)<br>[workers/email-register/src/index.js](../../../../sources/Ikalus1988__MisakaNet/workers/email-register/src/index.js)<br>[tests/test_search_knowledge_stdout.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_search_knowledge_stdout.py)<br>[tasks/index.json](../../../../sources/Ikalus1988__MisakaNet/tasks/index.json)<br>[tasks/lesson-bge-embedding-模型需要降级-fallback-避免启动崩溃.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-bge-embedding-模型需要降级-fallback-避免启动崩溃.json)<br>[tasks/lesson-fanuc-r-2000ic-retrieval-fix.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-fanuc-r-2000ic-retrieval-fix.json)<br>[tasks/lesson-knowledge-graph-ux-patterns-from-high-st.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-knowledge-graph-ux-patterns-from-high-st.json)<br>[tasks/lesson-rag-brand-contamination-detection-and-fi.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-rag-brand-contamination-detection-and-fi.json) |
| spec | 9 | [ARCHITECTURE.md](../../../../sources/Ikalus1988__MisakaNet/ARCHITECTURE.md)<br>[requirements.txt](../../../../sources/Ikalus1988__MisakaNet/requirements.txt)<br>[ROADMAP.md](../../../../sources/Ikalus1988__MisakaNet/ROADMAP.md)<br>[reference/agent-medici-architecture-analysis-methodology.md](../../../../sources/Ikalus1988__MisakaNet/reference/agent-medici-architecture-analysis-methodology.md)<br>[reference/swarm-memory-architecture-comparison.md](../../../../sources/Ikalus1988__MisakaNet/reference/swarm-memory-architecture-comparison.md)<br>[lessons/_archive/skill-harvest/skill-harvest-claude-design.md](../../../../sources/Ikalus1988__MisakaNet/lessons/_archive/skill-harvest/skill-harvest-claude-design.md)<br>[hub/requirements.txt](../../../../sources/Ikalus1988__MisakaNet/hub/requirements.txt)<br>[docs/adr/pre-commit-dco-independent.md](../../../../sources/Ikalus1988__MisakaNet/docs/adr/pre-commit-dco-independent.md) |
| eval | 34 | [test-nodes.json](../../../../sources/Ikalus1988__MisakaNet/test-nodes.json)<br>[tests/frontend.test.js](../../../../sources/Ikalus1988__MisakaNet/tests/frontend.test.js)<br>[tests/test_ci_self_heal.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_ci_self_heal.py)<br>[tests/test_clean_pipeline.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_clean_pipeline.py)<br>[tests/test_dashboard.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_dashboard.py)<br>[tests/test_federation.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_federation.py)<br>[tests/test_langchain_tool.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_langchain_tool.py)<br>[tests/test_lesson_scorer.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_lesson_scorer.py) |
| security | 27 | [SECURITY.md](../../../../sources/Ikalus1988__MisakaNet/SECURITY.md)<br>[tests/test_sliding_window_audit.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_sliding_window_audit.py)<br>[tasks/lesson-audit-sampling-stratified-sampling-for-k.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-audit-sampling-stratified-sampling-for-k.json)<br>[tasks/lesson-deepseek-tui-write-file-sandbox-worktree.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-deepseek-tui-write-file-sandbox-worktree.json)<br>[tasks/lesson-openclaw-prefer-cli-and-policy-over-dire.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-openclaw-prefer-cli-and-policy-over-dire.json)<br>[tasks/lesson-permission-denied-fix.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-permission-denied-fix.json)<br>[tasks/lesson-python-sandbox-path-isolation.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-python-sandbox-path-isolation.json)<br>[tasks/lesson-skill-rag-audit-question-authoring.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-skill-rag-audit-question-authoring.json) |
| ci | 22 | [.github/workflows/auto-label.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/auto-label.yml)<br>[.github/workflows/auto-sync-prs.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/auto-sync-prs.yml)<br>[.github/workflows/ci-self-heal.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/ci-self-heal.yml)<br>[.github/workflows/cite-lesson.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/cite-lesson.yml)<br>[.github/workflows/claim-enforcer.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/claim-enforcer.yml)<br>[.github/workflows/dco-check.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/dco-check.yml)<br>[.github/workflows/deploy-worker.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/deploy-worker.yml)<br>[.github/workflows/fix-dco.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/fix-dco.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/Ikalus1988__MisakaNet/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Ikalus1988__MisakaNet/CLAUDE.md)<br>[docs/domains/claude.md](../../../../sources/Ikalus1988__MisakaNet/docs/domains/claude.md) |
| docs | 40 | [README.md](../../../../sources/Ikalus1988__MisakaNet/README.md)<br>[workers/README.md](../../../../sources/Ikalus1988__MisakaNet/workers/README.md)<br>[workers/email-register/README.md](../../../../sources/Ikalus1988__MisakaNet/workers/email-register/README.md)<br>[misakanet/README.md](../../../../sources/Ikalus1988__MisakaNet/misakanet/README.md)<br>[meta/README.md](../../../../sources/Ikalus1988__MisakaNet/meta/README.md)<br>[lessons/locales/README.md](../../../../sources/Ikalus1988__MisakaNet/lessons/locales/README.md)<br>[lessons/core/README.md](../../../../sources/Ikalus1988__MisakaNet/lessons/core/README.md)<br>[lessons/contrib/readme-seven-traps-fix-checklist.md](../../../../sources/Ikalus1988__MisakaNet/lessons/contrib/readme-seven-traps-fix-checklist.md) |
| config | 6 | [Makefile](../../../../sources/Ikalus1988__MisakaNet/Makefile)<br>[package.json](../../../../sources/Ikalus1988__MisakaNet/package.json)<br>[pyproject.toml](../../../../sources/Ikalus1988__MisakaNet/pyproject.toml)<br>[requirements.txt](../../../../sources/Ikalus1988__MisakaNet/requirements.txt)<br>[web/package.json](../../../../sources/Ikalus1988__MisakaNet/web/package.json)<br>[hub/requirements.txt](../../../../sources/Ikalus1988__MisakaNet/hub/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 34 | [test-nodes.json](../../../../sources/Ikalus1988__MisakaNet/test-nodes.json)<br>[tests/frontend.test.js](../../../../sources/Ikalus1988__MisakaNet/tests/frontend.test.js)<br>[tests/test_ci_self_heal.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_ci_self_heal.py)<br>[tests/test_clean_pipeline.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_clean_pipeline.py)<br>[tests/test_dashboard.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_dashboard.py)<br>[tests/test_federation.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_federation.py) |
| CI workflow | 22 | [.github/workflows/auto-label.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/auto-label.yml)<br>[.github/workflows/auto-sync-prs.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/auto-sync-prs.yml)<br>[.github/workflows/ci-self-heal.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/ci-self-heal.yml)<br>[.github/workflows/cite-lesson.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/cite-lesson.yml)<br>[.github/workflows/claim-enforcer.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/claim-enforcer.yml)<br>[.github/workflows/dco-check.yml](../../../../sources/Ikalus1988__MisakaNet/.github/workflows/dco-check.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 27 | [SECURITY.md](../../../../sources/Ikalus1988__MisakaNet/SECURITY.md)<br>[tests/test_sliding_window_audit.py](../../../../sources/Ikalus1988__MisakaNet/tests/test_sliding_window_audit.py)<br>[tasks/lesson-audit-sampling-stratified-sampling-for-k.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-audit-sampling-stratified-sampling-for-k.json)<br>[tasks/lesson-deepseek-tui-write-file-sandbox-worktree.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-deepseek-tui-write-file-sandbox-worktree.json)<br>[tasks/lesson-openclaw-prefer-cli-and-policy-over-dire.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-openclaw-prefer-cli-and-policy-over-dire.json)<br>[tasks/lesson-permission-denied-fix.json](../../../../sources/Ikalus1988__MisakaNet/tasks/lesson-permission-denied-fix.json) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/Ikalus1988__MisakaNet/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Ikalus1988__MisakaNet/CLAUDE.md)<br>[docs/domains/claude.md](../../../../sources/Ikalus1988__MisakaNet/docs/domains/claude.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `search_knowledge.py`, `workers/email-register/src/index.js`, `tests/test_search_knowledge_stdout.py`.
2. entrypoint를 따라 실행 흐름 확인: `workers/email-register/src/index.js`, `misakanet/__main__.py`.
3. agent/tool runtime 매핑: `AGENT_GUIDE.md`, `AGENTS.md`, `reference/agent-medici-architecture-analysis-methodology.md`.
4. retrieval/memory/indexing 확인: `search_knowledge.py`, `workers/email-register/src/index.js`, `tests/test_search_knowledge_stdout.py`.
5. test/eval 파일로 동작 검증: `test-nodes.json`, `tests/frontend.test.js`, `tests/test_ci_self_heal.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 📚 A zero dependency, git backed micro lesson library for AI Agents to asynchronously share and search verified debuggin. 핵심 구조 신호는 Python, package.json, pyproject.toml, requirements.txt, Makefile, README.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
