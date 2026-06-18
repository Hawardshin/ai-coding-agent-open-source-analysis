# line/centraldogma 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Highly-available version-controlled service configuration repository based on Git, ZooKeeper and HTTP/2

## 요약

- 조사 단위: `sources/line__centraldogma` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,476 files, 755 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=webapp/package.json, webapp/tsconfig.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/centraldogma |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 663 |
| Forks | 133 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__centraldogma](../../../../sources/line__centraldogma) |
| 기존 보고서 | [reports/korea-trending/repositories/line__centraldogma.md](../../../korea-trending/repositories/line__centraldogma.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1476 / 755 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .claude, .github, benchmarks, bom, client, common, common-legacy, gradle, it, javadoc, licenses, server, server-auth, server-mirror-dogma, server-mirror-git, settings, site, testing, testing-internal, webapp |
| 상위 확장자 | .java: 892, .tsx: 159, .ts: 64, .gradle: 57, .txt: 57, .json: 23, (none): 17, .png: 16, .exe: 14, .linux-aarch_64: 14, .linux-x86_64: 14, .osx-aarch_64: 14 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| bom | top-level component | 1 |
| client | source boundary | 1 |
| common | top-level component | 1 |
| common-legacy | top-level component | 1 |
| gradle | top-level component | 1 |
| it | top-level component | 1 |
| javadoc | documentation surface | 1 |
| licenses | top-level component | 1 |
| server | source boundary | 1 |
| server-auth | source boundary | 1 |
| server-mirror-dogma | source boundary | 1 |
| server-mirror-git | source boundary | 1 |
| settings | top-level component | 1 |
| site | documentation surface | 1 |
| testing | validation surface | 1 |
| testing-internal | validation surface | 1 |


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
| config | [webapp/package.json](../../../../sources/line__centraldogma/webapp/package.json) | config signal |
| config | [webapp/tsconfig.json](../../../../sources/line__centraldogma/webapp/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/line__centraldogma/README.md) | docs signal |
| docs | [webapp/README.md](../../../../sources/line__centraldogma/webapp/README.md) | docs signal |
| docs | [site/build.gradle](../../../../sources/line__centraldogma/site/build.gradle) | docs signal |
| docs | [site/src/xref/stylesheet.css](../../../../sources/line__centraldogma/site/src/xref/stylesheet.css) | docs signal |
| eval | [xds/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider](../../../../sources/line__centraldogma/xds/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider) | eval signal |
| eval | [xds/src/test/resources/META-INF/services/com.linecorp.centraldogma.server.plugin.Plugin](../../../../sources/line__centraldogma/xds/src/test/resources/META-INF/services/com.linecorp.centraldogma.server.plugin.Plugin) | eval signal |
| eval | [xds/src/test/resources/envoy/ads.config.yaml](../../../../sources/line__centraldogma/xds/src/test/resources/envoy/ads.config.yaml) | eval signal |
| eval | [xds/src/test/resources/envoy/launch_envoy.sh](../../../../sources/line__centraldogma/xds/src/test/resources/envoy/launch_envoy.sh) | eval signal |
| ci | [.github/workflows/actions_build.yml](../../../../sources/line__centraldogma/.github/workflows/actions_build.yml) | ci support |
| ci | [.github/workflows/publish-docker.yml](../../../../sources/line__centraldogma/.github/workflows/publish-docker.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 3 | [webapp/src/dogma/hooks.ts](../../../../sources/line__centraldogma/webapp/src/dogma/hooks.ts)<br>[.claude/skills/upgrade-deps/SKILL.md](../../../../sources/line__centraldogma/.claude/skills/upgrade-deps/SKILL.md)<br>[.claude/skills/release-note/SKILL.md](../../../../sources/line__centraldogma/.claude/skills/release-note/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 58 | [webapp/tests/pages/index.test.tsx](../../../../sources/line__centraldogma/webapp/tests/pages/index.test.tsx)<br>[webapp/tests/pages/app/settings/app-identities/index.test.tsx](../../../../sources/line__centraldogma/webapp/tests/pages/app/settings/app-identities/index.test.tsx)<br>[webapp/src/pages/index.tsx](../../../../sources/line__centraldogma/webapp/src/pages/index.tsx)<br>[webapp/src/pages/app/settings/index.tsx](../../../../sources/line__centraldogma/webapp/src/pages/app/settings/index.tsx)<br>[webapp/src/pages/app/settings/server-status/index.tsx](../../../../sources/line__centraldogma/webapp/src/pages/app/settings/server-status/index.tsx)<br>[webapp/src/pages/app/settings/mirror-access/index.tsx](../../../../sources/line__centraldogma/webapp/src/pages/app/settings/mirror-access/index.tsx)<br>[webapp/src/pages/app/settings/mirror-access/new/index.tsx](../../../../sources/line__centraldogma/webapp/src/pages/app/settings/mirror-access/new/index.tsx)<br>`webapp/src/pages/app/settings/mirror-access/[id]/index.tsx` |
| spec | 4 | [webapp/e2e/landing.spec.ts](../../../../sources/line__centraldogma/webapp/e2e/landing.spec.ts)<br>[webapp/e2e/project-owners.spec.ts](../../../../sources/line__centraldogma/webapp/e2e/project-owners.spec.ts)<br>[webapp/e2e/project-tokens.spec.ts](../../../../sources/line__centraldogma/webapp/e2e/project-tokens.spec.ts)<br>[webapp/e2e/revert.spec.ts](../../../../sources/line__centraldogma/webapp/e2e/revert.spec.ts) |
| eval | 336 | [xds/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider](../../../../sources/line__centraldogma/xds/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider)<br>[xds/src/test/resources/META-INF/services/com.linecorp.centraldogma.server.plugin.Plugin](../../../../sources/line__centraldogma/xds/src/test/resources/META-INF/services/com.linecorp.centraldogma.server.plugin.Plugin)<br>[xds/src/test/resources/envoy/ads.config.yaml](../../../../sources/line__centraldogma/xds/src/test/resources/envoy/ads.config.yaml)<br>[xds/src/test/resources/envoy/launch_envoy.sh](../../../../sources/line__centraldogma/xds/src/test/resources/envoy/launch_envoy.sh)<br>[xds/src/test/resources/envoy/xds.config.yaml](../../../../sources/line__centraldogma/xds/src/test/resources/envoy/xds.config.yaml)<br>[xds/src/test/java/com/linecorp/centraldogma/xds/route/v1/XdsRouteServiceTest.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/route/v1/XdsRouteServiceTest.java)<br>[xds/src/test/java/com/linecorp/centraldogma/xds/listener/v1/XdsListenerServiceTest.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/listener/v1/XdsListenerServiceTest.java)<br>[xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/AggregatingMultipleKubernetesTest.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/AggregatingMultipleKubernetesTest.java) |
| security | 95 | [webapp/src/pages/web/auth/login.tsx](../../../../sources/line__centraldogma/webapp/src/pages/web/auth/login.tsx)<br>[webapp/src/pages/api/v1/security_enabled.ts](../../../../sources/line__centraldogma/webapp/src/pages/api/v1/security_enabled.ts)<br>[webapp/src/pages/api/v0/security_enabled.ts](../../../../sources/line__centraldogma/webapp/src/pages/api/v0/security_enabled.ts)<br>[webapp/src/dogma/util/auth.ts](../../../../sources/line__centraldogma/webapp/src/dogma/util/auth.ts)<br>[webapp/src/dogma/features/auth/Authorized.tsx](../../../../sources/line__centraldogma/webapp/src/dogma/features/auth/Authorized.tsx)<br>[webapp/src/dogma/features/auth/authSlice.ts](../../../../sources/line__centraldogma/webapp/src/dogma/features/auth/authSlice.ts)<br>[webapp/src/dogma/features/auth/LoginForm.tsx](../../../../sources/line__centraldogma/webapp/src/dogma/features/auth/LoginForm.tsx)<br>[webapp/src/dogma/features/auth/ProjectRole.tsx](../../../../sources/line__centraldogma/webapp/src/dogma/features/auth/ProjectRole.tsx) |
| ci | 6 | [.github/workflows/actions_build.yml](../../../../sources/line__centraldogma/.github/workflows/actions_build.yml)<br>[.github/workflows/publish-docker.yml](../../../../sources/line__centraldogma/.github/workflows/publish-docker.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/line__centraldogma/.github/workflows/publish-release.yml)<br>[.github/workflows/publish-site.yml](../../../../sources/line__centraldogma/.github/workflows/publish-site.yml)<br>[.github/workflows/tag-new-release.yml](../../../../sources/line__centraldogma/.github/workflows/tag-new-release.yml)<br>[.github/workflows/update-armeria-version.yml](../../../../sources/line__centraldogma/.github/workflows/update-armeria-version.yml) |
| container | 14 | [xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/AggregatingMultipleKubernetesTest.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/AggregatingMultipleKubernetesTest.java)<br>[xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/KubernetesTestFlagsProvider.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/KubernetesTestFlagsProvider.java)<br>[xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/XdsKubernetesServiceTest.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/XdsKubernetesServiceTest.java)<br>[xds/src/main/proto/centraldogma/xds/k8s/v1/xds_kubernetes.proto](../../../../sources/line__centraldogma/xds/src/main/proto/centraldogma/xds/k8s/v1/xds_kubernetes.proto)<br>[xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/KubernetesNodeIpExtractor.java](../../../../sources/line__centraldogma/xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/KubernetesNodeIpExtractor.java)<br>[xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/package-info.java](../../../../sources/line__centraldogma/xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/package-info.java)<br>[xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/XdsKubernetesEndpointFetchingPlugin.java](../../../../sources/line__centraldogma/xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/XdsKubernetesEndpointFetchingPlugin.java)<br>[xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/XdsKubernetesEndpointFetchingService.java](../../../../sources/line__centraldogma/xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/XdsKubernetesEndpointFetchingService.java) |
| instruction | 0 | 명확하지 않음 |
| docs | 43 | [README.md](../../../../sources/line__centraldogma/README.md)<br>[webapp/README.md](../../../../sources/line__centraldogma/webapp/README.md)<br>[site/build.gradle](../../../../sources/line__centraldogma/site/build.gradle)<br>[site/src/xref/stylesheet.css](../../../../sources/line__centraldogma/site/src/xref/stylesheet.css)<br>[site/src/sphinx/auth.rst](../../../../sources/line__centraldogma/site/src/sphinx/auth.rst)<br>[site/src/sphinx/client-cli.rst](../../../../sources/line__centraldogma/site/src/sphinx/client-cli.rst)<br>[site/src/sphinx/client-java.rst](../../../../sources/line__centraldogma/site/src/sphinx/client-java.rst)<br>[site/src/sphinx/concepts.rst](../../../../sources/line__centraldogma/site/src/sphinx/concepts.rst) |
| config | 2 | [webapp/package.json](../../../../sources/line__centraldogma/webapp/package.json)<br>[webapp/tsconfig.json](../../../../sources/line__centraldogma/webapp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 336 | [xds/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider](../../../../sources/line__centraldogma/xds/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider)<br>[xds/src/test/resources/META-INF/services/com.linecorp.centraldogma.server.plugin.Plugin](../../../../sources/line__centraldogma/xds/src/test/resources/META-INF/services/com.linecorp.centraldogma.server.plugin.Plugin)<br>[xds/src/test/resources/envoy/ads.config.yaml](../../../../sources/line__centraldogma/xds/src/test/resources/envoy/ads.config.yaml)<br>[xds/src/test/resources/envoy/launch_envoy.sh](../../../../sources/line__centraldogma/xds/src/test/resources/envoy/launch_envoy.sh)<br>[xds/src/test/resources/envoy/xds.config.yaml](../../../../sources/line__centraldogma/xds/src/test/resources/envoy/xds.config.yaml)<br>[xds/src/test/java/com/linecorp/centraldogma/xds/route/v1/XdsRouteServiceTest.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/route/v1/XdsRouteServiceTest.java) |
| CI workflow | 6 | [.github/workflows/actions_build.yml](../../../../sources/line__centraldogma/.github/workflows/actions_build.yml)<br>[.github/workflows/publish-docker.yml](../../../../sources/line__centraldogma/.github/workflows/publish-docker.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/line__centraldogma/.github/workflows/publish-release.yml)<br>[.github/workflows/publish-site.yml](../../../../sources/line__centraldogma/.github/workflows/publish-site.yml)<br>[.github/workflows/tag-new-release.yml](../../../../sources/line__centraldogma/.github/workflows/tag-new-release.yml)<br>[.github/workflows/update-armeria-version.yml](../../../../sources/line__centraldogma/.github/workflows/update-armeria-version.yml) |
| 컨테이너/배포 | 14 | [xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/AggregatingMultipleKubernetesTest.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/AggregatingMultipleKubernetesTest.java)<br>[xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/KubernetesTestFlagsProvider.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/KubernetesTestFlagsProvider.java)<br>[xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/XdsKubernetesServiceTest.java](../../../../sources/line__centraldogma/xds/src/test/java/com/linecorp/centraldogma/xds/k8s/v1/XdsKubernetesServiceTest.java)<br>[xds/src/main/proto/centraldogma/xds/k8s/v1/xds_kubernetes.proto](../../../../sources/line__centraldogma/xds/src/main/proto/centraldogma/xds/k8s/v1/xds_kubernetes.proto)<br>[xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/KubernetesNodeIpExtractor.java](../../../../sources/line__centraldogma/xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/KubernetesNodeIpExtractor.java)<br>[xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/package-info.java](../../../../sources/line__centraldogma/xds/src/main/java/com/linecorp/centraldogma/xds/k8s/v1/package-info.java) |
| 보안/정책 | 95 | [webapp/src/pages/web/auth/login.tsx](../../../../sources/line__centraldogma/webapp/src/pages/web/auth/login.tsx)<br>[webapp/src/pages/api/v1/security_enabled.ts](../../../../sources/line__centraldogma/webapp/src/pages/api/v1/security_enabled.ts)<br>[webapp/src/pages/api/v0/security_enabled.ts](../../../../sources/line__centraldogma/webapp/src/pages/api/v0/security_enabled.ts)<br>[webapp/src/dogma/util/auth.ts](../../../../sources/line__centraldogma/webapp/src/dogma/util/auth.ts)<br>[webapp/src/dogma/features/auth/Authorized.tsx](../../../../sources/line__centraldogma/webapp/src/dogma/features/auth/Authorized.tsx)<br>[webapp/src/dogma/features/auth/authSlice.ts](../../../../sources/line__centraldogma/webapp/src/dogma/features/auth/authSlice.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `webapp/package.json`, `webapp/tsconfig.json`, `README.md`.
2. agent/tool runtime 매핑: `webapp/src/dogma/hooks.ts`, `.claude/skills/upgrade-deps/SKILL.md`, `.claude/skills/release-note/SKILL.md`.
3. retrieval/memory/indexing 확인: `webapp/tests/pages/index.test.tsx`, `webapp/tests/pages/app/settings/app-identities/index.test.tsx`, `webapp/src/pages/index.tsx`.
4. test/eval 파일로 동작 검증: `xds/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider`, `xds/src/test/resources/META-INF/services/com.linecorp.centraldogma.server.plugin.Plugin`, `xds/src/test/resources/envoy/ads.config.yaml`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Highly available version controlled service configuration repository based on Git, ZooKeeper and HTTP/2. 핵심 구조 신호는 Java, build.gradle, README.md, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
