# line/line-bot-sdk-python 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

LINE Messaging API SDK for Python

## 요약

- 조사 단위: `sources/line__line-bot-sdk-python` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 656 files, 84 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=examples/fastapi-echo/main.py이고, 의존성 단서는 pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/line-bot-sdk-python |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Python |
| Stars | 2117 |
| Forks | 1042 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__line-bot-sdk-python](../../../../sources/line__line-bot-sdk-python) |
| 기존 보고서 | [reports/korea-trending/repositories/line__line-bot-sdk-python.md](../../../korea-trending/repositories/line__line-bot-sdk-python.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 656 / 84 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, docs, examples, generator, line-openapi, linebot, tests, tools |
| 상위 확장자 | .py: 556, .mustache: 36, .md: 22, .txt: 9, .yml: 9, (none): 5, .rst: 4, .png: 3, .java: 2, .json: 2, .cfg: 1, .cjs: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 41 |
| docs | documentation surface | 8 |
| examples/fastapi-echo | examples workspace | 4 |
| examples/aiohttp-echo | examples workspace | 3 |
| examples/flask-echo | examples workspace | 3 |
| examples/flask-kitchensink | examples workspace | 3 |
| examples/rich-menu | examples workspace | 3 |
| examples/simple-server-echo | examples workspace | 3 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| generator | top-level component | 1 |
| line-openapi | source boundary | 1 |
| linebot | top-level component | 1 |
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
| entrypoints | [examples/fastapi-echo/main.py](../../../../sources/line__line-bot-sdk-python/examples/fastapi-echo/main.py) | entrypoints signal |
| config | [requirements-dev.txt](../../../../sources/line__line-bot-sdk-python/requirements-dev.txt) | config signal |
| config | [requirements-test.txt](../../../../sources/line__line-bot-sdk-python/requirements-test.txt) | config signal |
| config | [requirements.txt](../../../../sources/line__line-bot-sdk-python/requirements.txt) | config signal |
| config | [examples/simple-server-echo/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/simple-server-echo/requirements.txt) | config signal |
| ci | [.github/workflows/auto-testing.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/auto-testing.yml) | ci signal |
| ci | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/check-eol-newrelease.yml) | ci signal |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/close-issue.yml) | ci signal |
| ci | [.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/create-draft-release.yml) | ci signal |
| docs | [README.rst](../../../../sources/line__line-bot-sdk-python/README.rst) | docs signal |
| docs | [linebot/v3/shop/docs/Shop.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/shop/docs/Shop.md) | docs signal |
| docs | [linebot/v3/oauth/docs/ChannelAccessToken.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/docs/ChannelAccessToken.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [examples/fastapi-echo/main.py](../../../../sources/line__line-bot-sdk-python/examples/fastapi-echo/main.py) |
| agentRuntime | 2 | [tools/openapi-generator-cli.jar](../../../../sources/line__line-bot-sdk-python/tools/openapi-generator-cli.jar)<br>[tools/update_version.py](../../../../sources/line__line-bot-sdk-python/tools/update_version.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docs/source/index.rst](../../../../sources/line__line-bot-sdk-python/docs/source/index.rst) |
| spec | 11 | [requirements-dev.txt](../../../../sources/line__line-bot-sdk-python/requirements-dev.txt)<br>[requirements-test.txt](../../../../sources/line__line-bot-sdk-python/requirements-test.txt)<br>[requirements.txt](../../../../sources/line__line-bot-sdk-python/requirements.txt)<br>[generator/src/main/resources/python-nextgen-custom-client/requirements.mustache](../../../../sources/line__line-bot-sdk-python/generator/src/main/resources/python-nextgen-custom-client/requirements.mustache)<br>[generator/src/main/resources/python-nextgen-custom-client/test-requirements.mustache](../../../../sources/line__line-bot-sdk-python/generator/src/main/resources/python-nextgen-custom-client/test-requirements.mustache)<br>[examples/simple-server-echo/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/simple-server-echo/requirements.txt)<br>[examples/rich-menu/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/rich-menu/requirements.txt)<br>[examples/flask-kitchensink/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/flask-kitchensink/requirements.txt) |
| eval | 69 | [requirements-test.txt](../../../../sources/line__line-bot-sdk-python/requirements-test.txt)<br>[tests/__init__.py](../../../../sources/line__line-bot-sdk-python/tests/__init__.py)<br>[tests/test_aiohttp_async_http_client.py](../../../../sources/line__line-bot-sdk-python/tests/test_aiohttp_async_http_client.py)<br>[tests/test_exceptions.py](../../../../sources/line__line-bot-sdk-python/tests/test_exceptions.py)<br>[tests/test_utils.py](../../../../sources/line__line-bot-sdk-python/tests/test_utils.py)<br>[tests/test_webhook.py](../../../../sources/line__line-bot-sdk-python/tests/test_webhook.py)<br>[tests/v3/test_skip_signature_verification.py](../../../../sources/line__line-bot-sdk-python/tests/v3/test_skip_signature_verification.py)<br>[tests/v3/test_utils.py](../../../../sources/line__line-bot-sdk-python/tests/v3/test_utils.py) |
| security | 22 | [tests/v3/oauth/test_channel_access_token_query_params.py](../../../../sources/line__line-bot-sdk-python/tests/v3/oauth/test_channel_access_token_query_params.py)<br>[linebot/v3/oauth/__init__.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/__init__.py)<br>[linebot/v3/oauth/api_client.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/api_client.py)<br>[linebot/v3/oauth/api_response.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/api_response.py)<br>[linebot/v3/oauth/async_api_client.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/async_api_client.py)<br>[linebot/v3/oauth/async_rest.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/async_rest.py)<br>[linebot/v3/oauth/configuration.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/configuration.py)<br>[linebot/v3/oauth/exceptions.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/exceptions.py) |
| ci | 7 | [.github/workflows/auto-testing.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/auto-testing.yml)<br>[.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/label-issue.yml)<br>[.github/workflows/publish-to-pypi.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/publish-to-pypi.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 24 | [README.rst](../../../../sources/line__line-bot-sdk-python/README.rst)<br>[linebot/v3/shop/docs/Shop.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/shop/docs/Shop.md)<br>[linebot/v3/oauth/docs/ChannelAccessToken.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/docs/ChannelAccessToken.md)<br>[linebot/v3/moduleattach/docs/LineModuleAttach.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/moduleattach/docs/LineModuleAttach.md)<br>[linebot/v3/module/docs/LineModule.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/module/docs/LineModule.md)<br>[linebot/v3/messaging/docs/MessagingApi.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/messaging/docs/MessagingApi.md)<br>[linebot/v3/messaging/docs/MessagingApiBlob.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/messaging/docs/MessagingApiBlob.md)<br>[linebot/v3/liff/docs/Liff.md](../../../../sources/line__line-bot-sdk-python/linebot/v3/liff/docs/Liff.md) |
| config | 10 | [requirements-dev.txt](../../../../sources/line__line-bot-sdk-python/requirements-dev.txt)<br>[requirements-test.txt](../../../../sources/line__line-bot-sdk-python/requirements-test.txt)<br>[requirements.txt](../../../../sources/line__line-bot-sdk-python/requirements.txt)<br>[examples/simple-server-echo/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/simple-server-echo/requirements.txt)<br>[examples/rich-menu/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/rich-menu/requirements.txt)<br>[examples/flask-kitchensink/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/flask-kitchensink/requirements.txt)<br>[examples/flask-echo/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/flask-echo/requirements.txt)<br>[examples/fastapi-echo/requirements.txt](../../../../sources/line__line-bot-sdk-python/examples/fastapi-echo/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 69 | [requirements-test.txt](../../../../sources/line__line-bot-sdk-python/requirements-test.txt)<br>[tests/__init__.py](../../../../sources/line__line-bot-sdk-python/tests/__init__.py)<br>[tests/test_aiohttp_async_http_client.py](../../../../sources/line__line-bot-sdk-python/tests/test_aiohttp_async_http_client.py)<br>[tests/test_exceptions.py](../../../../sources/line__line-bot-sdk-python/tests/test_exceptions.py)<br>[tests/test_utils.py](../../../../sources/line__line-bot-sdk-python/tests/test_utils.py)<br>[tests/test_webhook.py](../../../../sources/line__line-bot-sdk-python/tests/test_webhook.py) |
| CI workflow | 7 | [.github/workflows/auto-testing.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/auto-testing.yml)<br>[.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/create-draft-release.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/generate-code.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-sdk-python/.github/workflows/label-issue.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 22 | [tests/v3/oauth/test_channel_access_token_query_params.py](../../../../sources/line__line-bot-sdk-python/tests/v3/oauth/test_channel_access_token_query_params.py)<br>[linebot/v3/oauth/__init__.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/__init__.py)<br>[linebot/v3/oauth/api_client.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/api_client.py)<br>[linebot/v3/oauth/api_response.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/api_response.py)<br>[linebot/v3/oauth/async_api_client.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/async_api_client.py)<br>[linebot/v3/oauth/async_rest.py](../../../../sources/line__line-bot-sdk-python/linebot/v3/oauth/async_rest.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `examples/fastapi-echo/main.py`, `requirements-dev.txt`, `requirements-test.txt`.
2. entrypoint를 따라 실행 흐름 확인: `examples/fastapi-echo/main.py`.
3. agent/tool runtime 매핑: `tools/openapi-generator-cli.jar`, `tools/update_version.py`.
4. retrieval/memory/indexing 확인: `docs/source/index.rst`.
5. test/eval 파일로 동작 검증: `requirements-test.txt`, `tests/__init__.py`, `tests/test_aiohttp_async_http_client.py`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for Python. 핵심 구조 신호는 Python, requirements.txt, LICENSE, pydantic, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
