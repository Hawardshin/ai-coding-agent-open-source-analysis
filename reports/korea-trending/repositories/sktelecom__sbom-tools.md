# sktelecom/sbom-tools

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/sktelecom/sbom-tools |
| local path | sources/sktelecom__sbom-tools |
| HEAD | 92ab9ff |
| stars/forks | 5 / 1 |
| language | Shell |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T22:06:06Z |
| trendScore / priorityScore | 68 / 226 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 500 | docs/internal/README.md, docker/README.md, electron/README.md |
| Frontend / developer experience | 78 | docker/Dockerfile, docker/android/Dockerfile, docker/web/frontend/package.json |
| Spec / doc-driven workflow | 49 | examples/python/README.md, .github/workflows/ci.yml, docs/concepts/architecture.ko.md |
| Korean language / Korea domain | 38 | README.md, docs/index.md, tests/windows-verify-prompt.md |
| AI agent / tool use | 6 | .github/workflows/ci.yml, .github/workflows/release.yml, docs/concepts/architecture.md |
| Infra / observability | 4 | examples/docker/README.md, docs/reference/docker-image.md, docs/start/no-cli.ko.md |
| Local LLM / on-device inference | 3 | docker/README.md, docs/reference/cli.ko.md, docs/reference/cli.md |
| LLM wiki / memory / graph | 2 | examples/nodejs/README.md, examples/nodejs/index.js |
| RAG / retrieval | 1 | docs/internal/firmware-analysis.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, local-llm, rag, sdk-api, security, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, Swift |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 251 |
| manifests | 29 |
| docs | 83 |
| tests | 24 |
| ci/ops | 11 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Windows: double-click scripts\sbom-ui.bat |
| headings | Quick Start / Web UI — easiest (no CLI needed) / Windows: double-click scripts\sbom-ui.bat / CLI / All deliverables for the current project / Other inputs: GitHub URL · source archive · Docker image · firmware / Documentation / Contributing & License |
| excerpt | <p align="center" <img src="docs/images/logo.svg" alt="BomLens — an SBOM generator" width="300" / </p BomLens is a local first SBOM generator and open source risk assessor. It produces a CycloneDX SBOM, an open source notice, and a security/license risk report for a single project in seconds — from source code, containers, binaries, firmware, or an SBOM you received. CLI or browser UI, no SaaS. ! GitHub release https //img.shields.io/github/v/release/sktelecom/sbom tools?style=flat square https //github.com/sktelecom/sbom tools/releases ! Container image https //img.shields.io/badge/ghcr.io bomlens 2496ED?style=flat square&logo=docker&logoColor=white https //github.com/sktelecom/sbom tools/p |


## 주요 파일

### Manifests

- docs/internal/README.md
- docker/README.md
- electron/README.md
- examples/docker/README.md
- examples/dotnet/README.md
- examples/go/README.md
- examples/java-gradle/README.md
- examples/java-maven/README.md
- examples/nodejs/README.md
- examples/php/README.md
- examples/python/README.md
- examples/ruby/README.md
- examples/rust/README.md
- examples/swift/README.md
- README.md
- docker/Dockerfile
- electron/package.json
- examples/docker/Dockerfile
- examples/go/go.mod
- examples/java-gradle/build.gradle


### Spec / Docs / Prompt Artifacts

- examples/python/requirements.txt
- docs/concepts/architecture.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docker | 90 |
| docs | 54 |
| examples | 38 |
| tests | 22 |
| electron | 14 |
| .github | 12 |
| scripts | 5 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.en.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.en.md | 1 |
| CONTRIBUTING.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 79 |
| .tsx | 32 |
| .sh | 22 |
| .txt | 22 |
| .json | 18 |
| [no-ext] | 15 |
| .yml | 11 |
| .ts | 9 |
| .mjs | 6 |
| .svg | 5 |
| .html | 4 |
| .bat | 3 |
| .js | 3 |
| .css | 2 |
| .java | 2 |
| .ps1 | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
