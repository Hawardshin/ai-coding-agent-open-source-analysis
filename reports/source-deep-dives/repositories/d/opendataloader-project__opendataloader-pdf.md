# opendataloader-project/opendataloader-pdf 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

PDF Parser for AI-ready data. Automate PDF accessibility. Open-source.

## 요약

- 조사 단위: `sources/opendataloader-project__opendataloader-pdf` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 331 files, 101 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=node/opendataloader-pdf/src/index.ts, examples/python/rag/basic_chunking.py, examples/python/rag/langchain_example.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | opendataloader-project/opendataloader-pdf |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Java |
| Stars | 25243 |
| Forks | 2383 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/opendataloader-project__opendataloader-pdf](../../../../sources/opendataloader-project__opendataloader-pdf) |
| 기존 보고서 | [reports/llm-wiki/repositories/opendataloader-project__opendataloader-pdf.md](../../../llm-wiki/repositories/opendataloader-project__opendataloader-pdf.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 331 / 101 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, build-scripts, docs, examples, java, LICENSE_TEMPLATE, node, python, samples, scripts, THIRD_PARTY |
| 상위 확장자 | .java: 172, .py: 33, .md: 29, .txt: 17, .json: 16, .pdf: 15, .ts: 11, .sh: 10, (none): 9, .xml: 5, .mjs: 3, .yml: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| examples/python | examples workspace | 10 |
| .github | ci surface | 1 |
| build-scripts | top-level component | 1 |
| examples | top-level component | 1 |
| java | top-level component | 1 |
| LICENSE_TEMPLATE | top-level component | 1 |
| node | top-level component | 1 |
| python | top-level component | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |
| THIRD_PARTY | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build-java | bash scripts/build-java.sh |
| build | package.json | export-options | npm run build-java && java -Djava.awt.headless=true -Dapple.awt.UIElement=true -jar java/opendataloader-pdf-cli/target/opendataloader-pdf-cli-0.0.0.jar --export-options > options.json |
| utility | package.json | generate-options | node scripts/generate-options.mjs |
| utility | package.json | sync-options | npm run export-options && npm run generate-options |
| utility | package.json | generate-schema | node scripts/generate-schema.mjs |
| utility | package.json | sync-schema | npm run generate-schema |
| utility | package.json | sync | npm run sync-options && npm run sync-schema |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [node/opendataloader-pdf/src/index.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/index.ts) | retrieval signal |
| retrieval | [examples/python/rag/basic_chunking.py](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/basic_chunking.py) | retrieval signal |
| retrieval | [examples/python/rag/langchain_example.py](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/langchain_example.py) | retrieval signal |
| retrieval | [examples/python/rag/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/README.md) | retrieval signal |
| entrypoints | [python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py) | entrypoints signal |
| entrypoints | [python/opendataloader-pdf/src/opendataloader_pdf/__main__.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/src/opendataloader_pdf/__main__.py) | entrypoints signal |
| entrypoints | [node/opendataloader-pdf/src/cli.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/cli.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/opendataloader-project__opendataloader-pdf/README.md) | docs signal |
| docs | [python/opendataloader-pdf-mcp/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/README.md) | docs signal |
| docs | [examples/python/batch/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/batch/README.md) | docs signal |
| eval | [scripts/bench.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/bench.sh) | eval signal |
| eval | [scripts/test-java.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-java.sh) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py)<br>[python/opendataloader-pdf/src/opendataloader_pdf/__main__.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/src/opendataloader_pdf/__main__.py)<br>[node/opendataloader-pdf/src/cli.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/cli.ts)<br>[node/opendataloader-pdf/src/index.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/index.ts) |
| agentRuntime | 1 | [python/opendataloader-pdf/src/opendataloader_pdf/runner.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/src/opendataloader_pdf/runner.py) |
| mcp | 7 | [python/opendataloader-pdf-mcp/pyproject.toml](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/pyproject.toml)<br>[python/opendataloader-pdf-mcp/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/README.md)<br>[python/opendataloader-pdf-mcp/uv.lock](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/uv.lock)<br>[python/opendataloader-pdf-mcp/tests/conftest.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/tests/conftest.py)<br>[python/opendataloader-pdf-mcp/tests/test_convert_pdf.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/tests/test_convert_pdf.py)<br>[python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/__init__.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/__init__.py)<br>[python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py) |
| retrieval | 5 | [node/opendataloader-pdf/src/index.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/index.ts)<br>[examples/python/rag/basic_chunking.py](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/basic_chunking.py)<br>[examples/python/rag/langchain_example.py](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/langchain_example.py)<br>[examples/python/rag/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/README.md)<br>[examples/python/rag/requirements.txt](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/requirements.txt) |
| spec | 5 | [examples/python/rag/requirements.txt](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/requirements.txt)<br>[examples/python/batch/requirements.txt](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/batch/requirements.txt)<br>[docs/superpowers/specs/2026-03-16-cid-font-detection-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/specs/2026-03-16-cid-font-detection-design.md)<br>[docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md)<br>[docs/hybrid/hybrid-mode-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/hybrid/hybrid-mode-design.md) |
| eval | 93 | [scripts/bench.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/bench.sh)<br>[scripts/test-java.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-java.sh)<br>[scripts/test-node.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-node.sh)<br>[scripts/test-python.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-python.sh)<br>[scripts/experiments/docling_baseline_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_baseline_bench.py)<br>[scripts/experiments/docling_fastapi_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_fastapi_bench.py)<br>[scripts/experiments/docling_subprocess_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_subprocess_bench.py)<br>[python/opendataloader-pdf-mcp/tests/conftest.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/tests/conftest.py) |
| security | 1 | [.github/SECURITY.md](../../../../sources/opendataloader-project__opendataloader-pdf/.github/SECURITY.md) |
| ci | 2 | [.github/workflows/release.yml](../../../../sources/opendataloader-project__opendataloader-pdf/.github/workflows/release.yml)<br>[.github/workflows/test-benchmark.yml](../../../../sources/opendataloader-project__opendataloader-pdf/.github/workflows/test-benchmark.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/opendataloader-project__opendataloader-pdf/CLAUDE.md) |
| docs | 28 | [README.md](../../../../sources/opendataloader-project__opendataloader-pdf/README.md)<br>[python/opendataloader-pdf-mcp/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/README.md)<br>[examples/python/rag/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/README.md)<br>[examples/python/batch/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/batch/README.md)<br>[docs/superpowers/specs/2026-03-16-cid-font-detection-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/specs/2026-03-16-cid-font-detection-design.md)<br>[docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md)<br>[docs/superpowers/plans/2026-03-16-cid-font-detection.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/plans/2026-03-16-cid-font-detection.md)<br>[docs/superpowers/plans/2026-04-18-hancom-ai-mock-server.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/plans/2026-04-18-hancom-ai-mock-server.md) |
| config | 9 | [package.json](../../../../sources/opendataloader-project__opendataloader-pdf/package.json)<br>[python/opendataloader-pdf-mcp/pyproject.toml](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/pyproject.toml)<br>[python/opendataloader-pdf-mcp/uv.lock](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/uv.lock)<br>[python/opendataloader-pdf/pyproject.toml](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/pyproject.toml)<br>[python/opendataloader-pdf/uv.lock](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/uv.lock)<br>[node/opendataloader-pdf/package.json](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/package.json)<br>[node/opendataloader-pdf/tsconfig.json](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/tsconfig.json)<br>[examples/python/rag/requirements.txt](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 93 | [scripts/bench.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/bench.sh)<br>[scripts/test-java.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-java.sh)<br>[scripts/test-node.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-node.sh)<br>[scripts/test-python.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-python.sh)<br>[scripts/experiments/docling_baseline_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_baseline_bench.py)<br>[scripts/experiments/docling_fastapi_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_fastapi_bench.py) |
| CI workflow | 2 | [.github/workflows/release.yml](../../../../sources/opendataloader-project__opendataloader-pdf/.github/workflows/release.yml)<br>[.github/workflows/test-benchmark.yml](../../../../sources/opendataloader-project__opendataloader-pdf/.github/workflows/test-benchmark.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [.github/SECURITY.md](../../../../sources/opendataloader-project__opendataloader-pdf/.github/SECURITY.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/opendataloader-project__opendataloader-pdf/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `node/opendataloader-pdf/src/index.ts`, `examples/python/rag/basic_chunking.py`, `examples/python/rag/langchain_example.py`.
2. entrypoint를 따라 실행 흐름 확인: `python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py`, `python/opendataloader-pdf/src/opendataloader_pdf/__main__.py`, `node/opendataloader-pdf/src/cli.ts`.
3. agent/tool runtime 매핑: `python/opendataloader-pdf/src/opendataloader_pdf/runner.py`.
4. retrieval/memory/indexing 확인: `node/opendataloader-pdf/src/index.ts`, `examples/python/rag/basic_chunking.py`, `examples/python/rag/langchain_example.py`.
5. test/eval 파일로 동작 검증: `scripts/bench.sh`, `scripts/test-java.sh`, `scripts/test-node.sh`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 PDF Parser for AI ready data. Automate PDF accessibility. Open source.. 핵심 구조 신호는 Java, package.json, README.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
