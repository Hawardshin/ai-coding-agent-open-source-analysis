# hybridgroup/yzma 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Go with your own intelligence - Go applications that directly integrate llama.cpp for local inference using hardware acceleration.

## 요약

- 조사 단위: `sources/hybridgroup__yzma` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 173 files, 26 directories, depth score 91, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go, examples/vlm/main.go, examples/tooluse/main.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hybridgroup/yzma |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 504 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hybridgroup__yzma](../../../../sources/hybridgroup__yzma) |
| 기존 보고서 | [reports/global-trending/repositories/hybridgroup__yzma.md](../../../global-trending/repositories/hybridgroup__yzma.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 173 / 26 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, cmd, examples, images, lib, pkg |
| 상위 확장자 | .go: 126, .md: 18, .png: 15, (none): 4, .jinja: 3, .yml: 3, .jpg: 1, .mod: 1, .sum: 1, .webp: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/multitool | examples workspace | 3 |
| examples/tooluse | examples workspace | 3 |
| examples/chat | examples workspace | 2 |
| examples/describe | examples workspace | 2 |
| examples/embeddings | examples workspace | 2 |
| examples/hello | examples workspace | 2 |
| examples/installer | examples workspace | 2 |
| examples/modelinfo | examples workspace | 2 |
| examples/systeminfo | examples workspace | 2 |
| examples/vlm | examples workspace | 2 |
| lib | source boundary | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/README.md | cmd workspace | 1 |
| examples | top-level component | 1 |
| images | top-level component | 1 |
| pkg | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | download-models | make download-models |
| utility | Makefile | clean-llama.cpp | make clean-llama.cpp |
| utility | Makefile | download-llama.cpp | make download-llama.cpp |
| build | Makefile | build | make build |
| utility | Makefile | install | make install |
| test | Makefile | test | make test |
| utility | Makefile | roadmap | make roadmap |


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
| entrypoints | [main.go](../../../../sources/hybridgroup__yzma/main.go) | entrypoints signal |
| entrypoints | [examples/vlm/main.go](../../../../sources/hybridgroup__yzma/examples/vlm/main.go) | entrypoints signal |
| entrypoints | [examples/tooluse/main.go](../../../../sources/hybridgroup__yzma/examples/tooluse/main.go) | entrypoints signal |
| entrypoints | [examples/systeminfo/main.go](../../../../sources/hybridgroup__yzma/examples/systeminfo/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/hybridgroup__yzma/go.mod) | config signal |
| config | [Makefile](../../../../sources/hybridgroup__yzma/Makefile) | config signal |
| ci | [.github/workflows/linux.yml](../../../../sources/hybridgroup__yzma/.github/workflows/linux.yml) | ci signal |
| ci | [.github/workflows/macos.yml](../../../../sources/hybridgroup__yzma/.github/workflows/macos.yml) | ci signal |
| ci | [.github/workflows/windows.yml](../../../../sources/hybridgroup__yzma/.github/workflows/windows.yml) | ci signal |
| eval | [version_test.go](../../../../sources/hybridgroup__yzma/version_test.go) | eval support |
| eval | [pkg/vlm/helpers_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/helpers_test.go) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 11 | [main.go](../../../../sources/hybridgroup__yzma/main.go)<br>[examples/vlm/main.go](../../../../sources/hybridgroup__yzma/examples/vlm/main.go)<br>[examples/tooluse/main.go](../../../../sources/hybridgroup__yzma/examples/tooluse/main.go)<br>[examples/systeminfo/main.go](../../../../sources/hybridgroup__yzma/examples/systeminfo/main.go)<br>[examples/multitool/main.go](../../../../sources/hybridgroup__yzma/examples/multitool/main.go)<br>[examples/modelinfo/main.go](../../../../sources/hybridgroup__yzma/examples/modelinfo/main.go)<br>[examples/installer/main.go](../../../../sources/hybridgroup__yzma/examples/installer/main.go)<br>[examples/hello/main.go](../../../../sources/hybridgroup__yzma/examples/hello/main.go) |
| agentRuntime | 8 | [pkg/message/tools_test.go](../../../../sources/hybridgroup__yzma/pkg/message/tools_test.go)<br>[pkg/message/tools.go](../../../../sources/hybridgroup__yzma/pkg/message/tools.go)<br>[pkg/llama/context_test.go](../../../../sources/hybridgroup__yzma/pkg/llama/context_test.go)<br>[pkg/llama/context.go](../../../../sources/hybridgroup__yzma/pkg/llama/context.go)<br>[pkg/llama/memory_test.go](../../../../sources/hybridgroup__yzma/pkg/llama/memory_test.go)<br>[pkg/llama/memory.go](../../../../sources/hybridgroup__yzma/pkg/llama/memory.go)<br>[examples/tooluse/tools.go](../../../../sources/hybridgroup__yzma/examples/tooluse/tools.go)<br>[examples/multitool/tools.go](../../../../sources/hybridgroup__yzma/examples/multitool/tools.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [pkg/llama/memory_test.go](../../../../sources/hybridgroup__yzma/pkg/llama/memory_test.go)<br>[pkg/llama/memory.go](../../../../sources/hybridgroup__yzma/pkg/llama/memory.go) |
| spec | 1 | [ROADMAP.md](../../../../sources/hybridgroup__yzma/ROADMAP.md) |
| eval | 42 | [version_test.go](../../../../sources/hybridgroup__yzma/version_test.go)<br>[pkg/vlm/helpers_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/helpers_test.go)<br>[pkg/vlm/vlm_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/vlm_test.go)<br>[pkg/template/jinja_test.go](../../../../sources/hybridgroup__yzma/pkg/template/jinja_test.go)<br>[pkg/mtmd/benchmark_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/benchmark_test.go)<br>[pkg/mtmd/bitmap_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/bitmap_test.go)<br>[pkg/mtmd/chunks_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/chunks_test.go)<br>[pkg/mtmd/helpers_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/helpers_test.go) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/linux.yml](../../../../sources/hybridgroup__yzma/.github/workflows/linux.yml)<br>[.github/workflows/macos.yml](../../../../sources/hybridgroup__yzma/.github/workflows/macos.yml)<br>[.github/workflows/windows.yml](../../../../sources/hybridgroup__yzma/.github/workflows/windows.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 13 | [README.md](../../../../sources/hybridgroup__yzma/README.md)<br>[lib/README.md](../../../../sources/hybridgroup__yzma/lib/README.md)<br>[examples/vlm/README.md](../../../../sources/hybridgroup__yzma/examples/vlm/README.md)<br>[examples/tooluse/README.md](../../../../sources/hybridgroup__yzma/examples/tooluse/README.md)<br>[examples/systeminfo/README.md](../../../../sources/hybridgroup__yzma/examples/systeminfo/README.md)<br>[examples/multitool/README.md](../../../../sources/hybridgroup__yzma/examples/multitool/README.md)<br>[examples/modelinfo/README.md](../../../../sources/hybridgroup__yzma/examples/modelinfo/README.md)<br>[examples/installer/README.md](../../../../sources/hybridgroup__yzma/examples/installer/README.md) |
| config | 2 | [go.mod](../../../../sources/hybridgroup__yzma/go.mod)<br>[Makefile](../../../../sources/hybridgroup__yzma/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 42 | [version_test.go](../../../../sources/hybridgroup__yzma/version_test.go)<br>[pkg/vlm/helpers_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/helpers_test.go)<br>[pkg/vlm/vlm_test.go](../../../../sources/hybridgroup__yzma/pkg/vlm/vlm_test.go)<br>[pkg/template/jinja_test.go](../../../../sources/hybridgroup__yzma/pkg/template/jinja_test.go)<br>[pkg/mtmd/benchmark_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/benchmark_test.go)<br>[pkg/mtmd/bitmap_test.go](../../../../sources/hybridgroup__yzma/pkg/mtmd/bitmap_test.go) |
| CI workflow | 3 | [.github/workflows/linux.yml](../../../../sources/hybridgroup__yzma/.github/workflows/linux.yml)<br>[.github/workflows/macos.yml](../../../../sources/hybridgroup__yzma/.github/workflows/macos.yml)<br>[.github/workflows/windows.yml](../../../../sources/hybridgroup__yzma/.github/workflows/windows.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `main.go`, `examples/vlm/main.go`, `examples/tooluse/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `examples/vlm/main.go`, `examples/tooluse/main.go`.
3. agent/tool runtime 매핑: `pkg/message/tools_test.go`, `pkg/message/tools.go`, `pkg/llama/context_test.go`.
4. retrieval/memory/indexing 확인: `pkg/llama/memory_test.go`, `pkg/llama/memory.go`.
5. test/eval 파일로 동작 검증: `version_test.go`, `pkg/vlm/helpers_test.go`, `pkg/vlm/vlm_test.go`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Go with your own intelligence Go applications that directly integrate llama.cpp for local inference using hardware accel. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
