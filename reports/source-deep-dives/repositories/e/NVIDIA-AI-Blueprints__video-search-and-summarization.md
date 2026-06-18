# NVIDIA-AI-Blueprints/video-search-and-summarization 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The NVIDIA VSS Blueprint is a suite of reference architectures for building GPU-accelerated vision agents and AI-powered video analytics applications.

## 요약

- 조사 단위: `sources/NVIDIA-AI-Blueprints__video-search-and-summarization` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 13,251 files, 3,295 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/__init__.py, services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/mcp_test_utils.py, services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/test_mcp_gateway_api.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | NVIDIA-AI-Blueprints/video-search-and-summarization |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C++ |
| Stars | 1559 |
| Forks | 323 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/NVIDIA-AI-Blueprints__video-search-and-summarization](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization) |
| 기존 보고서 | [reports/global-trending/repositories/NVIDIA-AI-Blueprints__video-search-and-summarization.md](../../../global-trending/repositories/NVIDIA-AI-Blueprints__video-search-and-summarization.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 13251 / 3295 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, .openclaw, assets, deploy, libs, services, skills, tools |
| 상위 확장자 | .h: 8339, .py: 1346, .json: 372, .md: 346, .yaml: 305, .tsx: 295, .ts: 220, .sh: 209, .hh: 206, .cpp: 201, (none): 193, .js: 171 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| services/vios | services workspace | 264 |
| services/ui | services workspace | 11 |
| services/analytics | services workspace | 6 |
| services/video-summarization | services workspace | 4 |
| libs/analytics | libs workspace | 2 |
| services/alert | services workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| deploy | deployment surface | 1 |
| libs | source boundary | 1 |
| services | top-level component | 1 |
| services/agent | services workspace | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |


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
| mcp | [services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/__init__.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/__init__.py) | mcp signal |
| mcp | [services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/mcp_test_utils.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/mcp_test_utils.py) | mcp signal |
| mcp | [services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/test_mcp_gateway_api.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/test_mcp_gateway_api.py) | mcp signal |
| mcp | [services/vios/test/bdd_tests/features/unit_tests/mcp_gateway/mcp_gateway_api.feature](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/features/unit_tests/mcp_gateway/mcp_gateway_api.feature) | mcp signal |
| agentRuntime | [tools/sdg-postprocessing/3rdParty_Licenses.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/3rdParty_Licenses.md) | agentRuntime signal |
| agentRuntime | [tools/sdg-postprocessing/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/README.md) | agentRuntime signal |
| agentRuntime | [tools/sdg-postprocessing/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/requirements.txt) | agentRuntime signal |
| agentRuntime | [tools/sdg-postprocessing/utils/export_xform_semantics.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/utils/export_xform_semantics.py) | agentRuntime signal |
| entrypoints | [skills/vss-manage-alerts/scripts/alert-notify/server.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-manage-alerts/scripts/alert-notify/server.py) | entrypoints signal |
| entrypoints | [services/vios/ui/vios-ui/src/App.tsx](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/vios-ui/src/App.tsx) | entrypoints signal |
| entrypoints | [services/vios/ui/vios-ui/src/main.tsx](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/vios-ui/src/main.tsx) | entrypoints signal |
| entrypoints | [services/vios/ui/streaming-lib/src/index.ts](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/streaming-lib/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 22 | [skills/vss-manage-alerts/scripts/alert-notify/server.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-manage-alerts/scripts/alert-notify/server.py)<br>[services/vios/ui/vios-ui/src/App.tsx](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/vios-ui/src/App.tsx)<br>[services/vios/ui/vios-ui/src/main.tsx](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/vios-ui/src/main.tsx)<br>[services/vios/ui/streaming-lib/src/index.ts](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/streaming-lib/src/index.ts)<br>[services/vios/src/app/server.cpp](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/app/server.cpp)<br>[services/vios/src/app/server.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/app/server.h)<br>[services/vios/mcp/src/__main__.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/mcp/src/__main__.py)<br>[services/vios/mcp/src/server.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/mcp/src/server.py) |
| agentRuntime | 938 | [tools/sdg-postprocessing/3rdParty_Licenses.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/3rdParty_Licenses.md)<br>[tools/sdg-postprocessing/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/README.md)<br>[tools/sdg-postprocessing/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/requirements.txt)<br>[tools/sdg-postprocessing/utils/export_xform_semantics.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/utils/export_xform_semantics.py)<br>[tools/sdg-postprocessing/semantic_labeling/box_check.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/semantic_labeling/box_check.py)<br>[tools/sdg-postprocessing/semantic_labeling/remove_label.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/semantic_labeling/remove_label.py)<br>[tools/sdg-postprocessing/data_sanity_check/dataset_sanity_check_bbox_direction.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/data_sanity_check/dataset_sanity_check_bbox_direction.py)<br>[tools/sdg-postprocessing/data_sanity_check/dataset_sanity_check_calibration.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/data_sanity_check/dataset_sanity_check_calibration.py) |
| mcp | 29 | [services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/__init__.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/__init__.py)<br>[services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/mcp_test_utils.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/mcp_test_utils.py)<br>[services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/test_mcp_gateway_api.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/test_mcp_gateway_api.py)<br>[services/vios/test/bdd_tests/features/unit_tests/mcp_gateway/mcp_gateway_api.feature](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/features/unit_tests/mcp_gateway/mcp_gateway_api.feature)<br>[services/vios/mcp/.dockerignore](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/mcp/.dockerignore)<br>[services/vios/mcp/.gitignore](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/mcp/.gitignore)<br>[services/vios/mcp/Dockerfile](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/mcp/Dockerfile)<br>[services/vios/mcp/poetry.lock](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/mcp/poetry.lock) |
| retrieval | 363 | [skills/vss-generate-video-report-rag/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-generate-video-report-rag/BENCHMARK.md)<br>[skills/vss-generate-video-report-rag/skill-card.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-generate-video-report-rag/skill-card.md)<br>[skills/vss-generate-video-report-rag/SKILL.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-generate-video-report-rag/SKILL.md)<br>[skills/vss-generate-video-report-rag/skill.oms.sig](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-generate-video-report-rag/skill.oms.sig)<br>[skills/vss-generate-video-report-rag/evals/evals.json](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-generate-video-report-rag/evals/evals.json)<br>[skills/vss-deploy-video-embedding/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-deploy-video-embedding/BENCHMARK.md)<br>[skills/vss-deploy-video-embedding/skill-card.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-deploy-video-embedding/skill-card.md)<br>[skills/vss-deploy-video-embedding/SKILL.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-deploy-video-embedding/SKILL.md) |
| spec | 25 | [tools/sdg-postprocessing/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/requirements.txt)<br>[tools/rtvi-cv-mv3dt-utils/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/rtvi-cv-mv3dt-utils/requirements.txt)<br>[tools/message-broker-consumers/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/message-broker-consumers/requirements.txt)<br>[skills/vss-manage-alerts/scripts/alert-notify/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-manage-alerts/scripts/alert-notify/requirements.txt)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/crashpad/crashpad/snapshot/cpu_architecture.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/crashpad/crashpad/snapshot/cpu_architecture.h)<br>[services/vios/src/framework/web/api_spec/vst_api_spec.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/web/api_spec/vst_api_spec.h)<br>[services/vios/src/framework/web/api_spec/services/live_stream_spec.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/web/api_spec/services/live_stream_spec.h)<br>[services/vios/src/framework/web/api_spec/services/proxy_stream_spec.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/web/api_spec/services/proxy_stream_spec.h) |
| eval | 2195 | [skills/vss-summarize-video/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-summarize-video/BENCHMARK.md)<br>[skills/vss-setup-video-analytics-api/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-setup-video-analytics-api/BENCHMARK.md)<br>[skills/vss-setup-behavior-analytics/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-setup-behavior-analytics/BENCHMARK.md)<br>[skills/vss-search-archive/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-search-archive/BENCHMARK.md)<br>[skills/vss-query-analytics/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-query-analytics/BENCHMARK.md)<br>[skills/vss-manage-video-io-storage/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-manage-video-io-storage/BENCHMARK.md)<br>[skills/vss-manage-alerts/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-manage-alerts/BENCHMARK.md)<br>[skills/vss-generate-video-report-rag/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-generate-video-report-rag/BENCHMARK.md) |
| security | 103 | [SECURITY.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/SECURITY.md)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/libsrtp/crypto/include/auth.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/libsrtp/crypto/include/auth.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/libsrtp/crypto/include/null_auth.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/libsrtp/crypto/include/null_auth.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_navigation_policy.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_navigation_policy.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_origin_policy.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_origin_policy.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_security_policy.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_security_policy.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/platform/web_content_security_policy_struct.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/platform/web_content_security_policy_struct.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/platform/web_policy_container.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/platform/web_policy_container.h) |
| ci | 15 | [services/vios/ui/streaming-lib/.gitlab-ci.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/streaming-lib/.gitlab-ci.yml)<br>[services/vios/test/bdd_tests/Jenkinsfile](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/Jenkinsfile)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/abseil-cpp/ci/absl_alternate_options.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/abseil-cpp/ci/absl_alternate_options.h)<br>[.github/workflows/check-agent-container-source.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/.github/workflows/check-agent-container-source.yml)<br>[.github/workflows/check-ui-container-source.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/.github/workflows/check-ui-container-source.yml)<br>[.github/workflows/ci.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/.github/workflows/ci.yml)<br>[.github/workflows/helm-sync.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/.github/workflows/helm-sync.yml)<br>[.github/workflows/license-diff.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/.github/workflows/license-diff.yml) |
| container | 766 | [services/vios/test/bdd_tests/Dockerfile](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/Dockerfile)<br>[services/vios/mcp/Dockerfile](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/mcp/Dockerfile)<br>[services/vios/deployment/1click_README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/1click_README.md)<br>[services/vios/deployment/oneclick_dc_deployment_for_dev.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/oneclick_dc_deployment_for_dev.py)<br>[services/vios/deployment/stream-processing/oneclick_dc_deployment.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/stream-processing/oneclick_dc_deployment.py)<br>[services/vios/deployment/stream-processing/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/stream-processing/README.md)<br>[services/vios/deployment/stream-processing/docker-compose/compose.env](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/stream-processing/docker-compose/compose.env)<br>[services/vios/deployment/stream-processing/docker-compose/docker-compose.yaml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/stream-processing/docker-compose/docker-compose.yaml) |
| instruction | 37 | [services/vios/CLAUDE.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/CLAUDE.md)<br>[services/vios/test/bdd_tests/.cursor/rules/vst_bdd_project.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/.cursor/rules/vst_bdd_project.mdc)<br>[services/vios/.cursor/rules/vios-build-system.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-build-system.mdc)<br>[services/vios/.cursor/rules/vios-code-review.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-code-review.mdc)<br>[services/vios/.cursor/rules/vios-communication.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-communication.mdc)<br>[services/vios/.cursor/rules/vios-cpp-standards.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-cpp-standards.mdc)<br>[services/vios/.cursor/rules/vios-deep-adaptors-modules.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-deep-adaptors-modules.mdc)<br>[services/vios/.cursor/rules/vios-deep-api-routing.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-deep-api-routing.mdc) |
| docs | 143 | [README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/README.md)<br>[tools/sdg-postprocessing/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/README.md)<br>[tools/rtvi-cv-mv3dt-utils/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/rtvi-cv-mv3dt-utils/README.md)<br>[tools/message-broker-consumers/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/message-broker-consumers/README.md)<br>[skills/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/README.md)<br>[skills/vss-deploy-video-embedding/references/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-deploy-video-embedding/references/README.md)<br>[services/vios/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/README.md)<br>[services/vios/ui/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/README.md) |
| config | 91 | [tools/sdg-postprocessing/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/sdg-postprocessing/requirements.txt)<br>[tools/rtvi-cv-mv3dt-utils/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/rtvi-cv-mv3dt-utils/requirements.txt)<br>[tools/message-broker-consumers/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/tools/message-broker-consumers/requirements.txt)<br>[skills/vss-manage-alerts/scripts/alert-notify/requirements.txt](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-manage-alerts/scripts/alert-notify/requirements.txt)<br>[services/vios/Makefile](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/Makefile)<br>[services/vios/ui/vios-ui/package.json](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/vios-ui/package.json)<br>[services/vios/ui/vios-ui/tsconfig.json](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/vios-ui/tsconfig.json)<br>[services/vios/ui/streaming-lib/package.json](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/streaming-lib/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2195 | [skills/vss-summarize-video/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-summarize-video/BENCHMARK.md)<br>[skills/vss-setup-video-analytics-api/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-setup-video-analytics-api/BENCHMARK.md)<br>[skills/vss-setup-behavior-analytics/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-setup-behavior-analytics/BENCHMARK.md)<br>[skills/vss-search-archive/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-search-archive/BENCHMARK.md)<br>[skills/vss-query-analytics/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-query-analytics/BENCHMARK.md)<br>[skills/vss-manage-video-io-storage/BENCHMARK.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/skills/vss-manage-video-io-storage/BENCHMARK.md) |
| CI workflow | 15 | [services/vios/ui/streaming-lib/.gitlab-ci.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/ui/streaming-lib/.gitlab-ci.yml)<br>[services/vios/test/bdd_tests/Jenkinsfile](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/Jenkinsfile)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/abseil-cpp/ci/absl_alternate_options.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/abseil-cpp/ci/absl_alternate_options.h)<br>[.github/workflows/check-agent-container-source.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/.github/workflows/check-agent-container-source.yml)<br>[.github/workflows/check-ui-container-source.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/.github/workflows/check-ui-container-source.yml)<br>[.github/workflows/ci.yml](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/.github/workflows/ci.yml) |
| 컨테이너/배포 | 766 | [services/vios/test/bdd_tests/Dockerfile](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/Dockerfile)<br>[services/vios/mcp/Dockerfile](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/mcp/Dockerfile)<br>[services/vios/deployment/1click_README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/1click_README.md)<br>[services/vios/deployment/oneclick_dc_deployment_for_dev.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/oneclick_dc_deployment_for_dev.py)<br>[services/vios/deployment/stream-processing/oneclick_dc_deployment.py](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/stream-processing/oneclick_dc_deployment.py)<br>[services/vios/deployment/stream-processing/README.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/deployment/stream-processing/README.md) |
| 보안/정책 | 103 | [SECURITY.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/SECURITY.md)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/libsrtp/crypto/include/auth.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/libsrtp/crypto/include/auth.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/libsrtp/crypto/include/null_auth.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/libsrtp/crypto/include/null_auth.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_navigation_policy.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_navigation_policy.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_origin_policy.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_origin_policy.h)<br>[services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_security_policy.h](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/src/framework/webrtc_streamer/inc/webrtc_headers/src/third_party/blink/public/web/web_security_policy.h) |
| 에이전트 지시문 | 37 | [services/vios/CLAUDE.md](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/CLAUDE.md)<br>[services/vios/test/bdd_tests/.cursor/rules/vst_bdd_project.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/test/bdd_tests/.cursor/rules/vst_bdd_project.mdc)<br>[services/vios/.cursor/rules/vios-build-system.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-build-system.mdc)<br>[services/vios/.cursor/rules/vios-code-review.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-code-review.mdc)<br>[services/vios/.cursor/rules/vios-communication.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-communication.mdc)<br>[services/vios/.cursor/rules/vios-cpp-standards.mdc](../../../../sources/NVIDIA-AI-Blueprints__video-search-and-summarization/services/vios/.cursor/rules/vios-cpp-standards.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/__init__.py`, `services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/mcp_test_utils.py`, `services/vios/test/bdd_tests/tests/unit_tests/mcp_gateway/test_mcp_gateway_api.py`.
2. entrypoint를 따라 실행 흐름 확인: `skills/vss-manage-alerts/scripts/alert-notify/server.py`, `services/vios/ui/vios-ui/src/App.tsx`, `services/vios/ui/vios-ui/src/main.tsx`.
3. agent/tool runtime 매핑: `tools/sdg-postprocessing/3rdParty_Licenses.md`, `tools/sdg-postprocessing/README.md`, `tools/sdg-postprocessing/requirements.txt`.
4. retrieval/memory/indexing 확인: `skills/vss-generate-video-report-rag/BENCHMARK.md`, `skills/vss-generate-video-report-rag/skill-card.md`, `skills/vss-generate-video-report-rag/SKILL.md`.
5. test/eval 파일로 동작 검증: `skills/vss-summarize-video/BENCHMARK.md`, `skills/vss-setup-video-analytics-api/BENCHMARK.md`, `skills/vss-setup-behavior-analytics/BENCHMARK.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The NVIDIA VSS Blueprint is a suite of reference architectures for building GPU accelerated vision agents and AI powered. 핵심 구조 신호는 C++, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
