# rage-rb/rage 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Fiber-based Ruby web framework combining Rails ergonomics with a unified runtime

## 요약

- 조사 단위: `sources/rage-rb__rage` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 345 files, 90 directories, depth score 97, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=lib/rage/openapi/index.html.erb이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | rage-rb/rage |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Ruby |
| Stars | 1388 |
| Forks | 42 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/rage-rb__rage](../../../../sources/rage-rb__rage) |
| 기존 보고서 | [reports/global-trending/repositories/rage-rb__rage.md](../../../global-trending/repositories/rage-rb__rage.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 345 / 90 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, bin, exe, gemfiles, lib, spec |
| 상위 확장자 | .rb: 291, (none): 14, .yml: 13, .md: 6, .gemfile: 5, .keep: 5, .txt: 5, .ru: 3, .erb: 2, .gemspec: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| lib | source boundary | 6 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| exe | top-level component | 1 |
| gemfiles | top-level component | 1 |
| spec | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| retrieval | [lib/rage/openapi/index.html.erb](../../../../sources/rage-rb__rage/lib/rage/openapi/index.html.erb) | retrieval signal |
| entrypoints | [bin/console](../../../../sources/rage-rb__rage/bin/console) | entrypoints signal |
| entrypoints | [bin/setup](../../../../sources/rage-rb__rage/bin/setup) | entrypoints signal |
| docs | [README.md](../../../../sources/rage-rb__rage/README.md) | docs signal |
| docs | [lib/rage/router/README.md](../../../../sources/rage-rb__rage/lib/rage/router/README.md) | docs signal |
| eval | [spec/body_finalizer_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/body_finalizer_middleware_spec.rb) | eval signal |
| eval | [spec/code_loader_spec.rb](../../../../sources/rage-rb__rage/spec/code_loader_spec.rb) | eval signal |
| eval | [spec/configuration_spec.rb](../../../../sources/rage-rb__rage/spec/configuration_spec.rb) | eval signal |
| eval | [spec/cors_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/cors_middleware_spec.rb) | eval signal |
| ci | [.github/workflows/changelog.yml](../../../../sources/rage-rb__rage/.github/workflows/changelog.yml) | ci support |
| ci | [.github/workflows/docs.yml](../../../../sources/rage-rb__rage/.github/workflows/docs.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [bin/console](../../../../sources/rage-rb__rage/bin/console)<br>[bin/setup](../../../../sources/rage-rb__rage/bin/setup) |
| agentRuntime | 7 | [spec/rage/hooks_spec.rb](../../../../sources/rage-rb__rage/spec/rage/hooks_spec.rb)<br>[spec/rage/cli/skills_spec.rb](../../../../sources/rage-rb__rage/spec/rage/cli/skills_spec.rb)<br>[spec/events/context_spec.rb](../../../../sources/rage-rb__rage/spec/events/context_spec.rb)<br>[spec/deferred/context_spec.rb](../../../../sources/rage-rb__rage/spec/deferred/context_spec.rb)<br>[lib/rage/hooks.rb](../../../../sources/rage-rb__rage/lib/rage/hooks.rb)<br>[lib/rage/deferred/context.rb](../../../../sources/rage-rb__rage/lib/rage/deferred/context.rb)<br>[lib/rage/cli/skills.rb](../../../../sources/rage-rb__rage/lib/rage/cli/skills.rb) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [lib/rage/openapi/index.html.erb](../../../../sources/rage-rb__rage/lib/rage/openapi/index.html.erb) |
| spec | 187 | [ARCHITECTURE.md](../../../../sources/rage-rb__rage/ARCHITECTURE.md)<br>[spec/body_finalizer_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/body_finalizer_middleware_spec.rb)<br>[spec/code_loader_spec.rb](../../../../sources/rage-rb__rage/spec/code_loader_spec.rb)<br>[spec/configuration_spec.rb](../../../../sources/rage-rb__rage/spec/configuration_spec.rb)<br>[spec/cors_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/cors_middleware_spec.rb)<br>[spec/env_spec.rb](../../../../sources/rage-rb__rage/spec/env_spec.rb)<br>[spec/errors_spec.rb](../../../../sources/rage-rb__rage/spec/errors_spec.rb)<br>[spec/fiber_scheduler_spec.rb](../../../../sources/rage-rb__rage/spec/fiber_scheduler_spec.rb) |
| eval | 187 | [spec/body_finalizer_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/body_finalizer_middleware_spec.rb)<br>[spec/code_loader_spec.rb](../../../../sources/rage-rb__rage/spec/code_loader_spec.rb)<br>[spec/configuration_spec.rb](../../../../sources/rage-rb__rage/spec/configuration_spec.rb)<br>[spec/cors_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/cors_middleware_spec.rb)<br>[spec/env_spec.rb](../../../../sources/rage-rb__rage/spec/env_spec.rb)<br>[spec/errors_spec.rb](../../../../sources/rage-rb__rage/spec/errors_spec.rb)<br>[spec/fiber_scheduler_spec.rb](../../../../sources/rage-rb__rage/spec/fiber_scheduler_spec.rb)<br>[spec/fiber_spec.rb](../../../../sources/rage-rb__rage/spec/fiber_spec.rb) |
| security | 1 | [spec/openapi/builder/auth_spec.rb](../../../../sources/rage-rb__rage/spec/openapi/builder/auth_spec.rb) |
| ci | 5 | [.github/workflows/changelog.yml](../../../../sources/rage-rb__rage/.github/workflows/changelog.yml)<br>[.github/workflows/docs.yml](../../../../sources/rage-rb__rage/.github/workflows/docs.yml)<br>[.github/workflows/ext.yml](../../../../sources/rage-rb__rage/.github/workflows/ext.yml)<br>[.github/workflows/main.yml](../../../../sources/rage-rb__rage/.github/workflows/main.yml)<br>[.github/workflows/release.yml](../../../../sources/rage-rb__rage/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/rage-rb__rage/README.md)<br>[lib/rage/router/README.md](../../../../sources/rage-rb__rage/lib/rage/router/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 187 | [spec/body_finalizer_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/body_finalizer_middleware_spec.rb)<br>[spec/code_loader_spec.rb](../../../../sources/rage-rb__rage/spec/code_loader_spec.rb)<br>[spec/configuration_spec.rb](../../../../sources/rage-rb__rage/spec/configuration_spec.rb)<br>[spec/cors_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/cors_middleware_spec.rb)<br>[spec/env_spec.rb](../../../../sources/rage-rb__rage/spec/env_spec.rb)<br>[spec/errors_spec.rb](../../../../sources/rage-rb__rage/spec/errors_spec.rb) |
| CI workflow | 5 | [.github/workflows/changelog.yml](../../../../sources/rage-rb__rage/.github/workflows/changelog.yml)<br>[.github/workflows/docs.yml](../../../../sources/rage-rb__rage/.github/workflows/docs.yml)<br>[.github/workflows/ext.yml](../../../../sources/rage-rb__rage/.github/workflows/ext.yml)<br>[.github/workflows/main.yml](../../../../sources/rage-rb__rage/.github/workflows/main.yml)<br>[.github/workflows/release.yml](../../../../sources/rage-rb__rage/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [spec/openapi/builder/auth_spec.rb](../../../../sources/rage-rb__rage/spec/openapi/builder/auth_spec.rb) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `lib/rage/openapi/index.html.erb`, `bin/console`, `bin/setup`.
2. entrypoint를 따라 실행 흐름 확인: `bin/console`, `bin/setup`.
3. agent/tool runtime 매핑: `spec/rage/hooks_spec.rb`, `spec/rage/cli/skills_spec.rb`, `spec/events/context_spec.rb`.
4. retrieval/memory/indexing 확인: `lib/rage/openapi/index.html.erb`.
5. test/eval 파일로 동작 검증: `spec/body_finalizer_middleware_spec.rb`, `spec/code_loader_spec.rb`, `spec/configuration_spec.rb`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Fiber based Ruby web framework combining Rails ergonomics with a unified runtime. 핵심 구조 신호는 Ruby, README.md, tests, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
