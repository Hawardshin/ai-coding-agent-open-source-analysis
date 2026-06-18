# nilbuild/developer-roadmap 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Interactive roadmaps, guides and other educational content to help developers grow in their careers.

## 요약

- 조사 단위: `sources/nilbuild__developer-roadmap` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 12,340 files, 382 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=package.json, pnpm-workspace.yaml, requirements.txt이고, 의존성 단서는 openai, react, typer, transformers, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nilbuild/developer-roadmap |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | TypeScript |
| Stars | 357571 |
| Forks | 44232 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nilbuild__developer-roadmap](../../../../sources/nilbuild__developer-roadmap) |
| 기존 보고서 | [reports/global-trending/repositories/nilbuild__developer-roadmap.md](../../../global-trending/repositories/nilbuild__developer-roadmap.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 12340 / 382 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .astro, .cursor, .github, packages, public, scripts, src, tests |
| 상위 확장자 | .md: 10938, .tsx: 487, .png: 252, .astro: 164, .ts: 133, .json: 120, .pdf: 83, .svg: 72, .yml: 17, .css: 14, .cjs: 11, .gif: 9 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 189 |
| tests | validation surface | 72 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | astro dev --port 3000 |
| serve-dev | package.json | start | astro dev |
| build | package.json | build | astro build |
| utility | package.json | preview | astro preview |
| quality | package.json | format | prettier --write . |
| utility | package.json | gh-labels | ./scripts/create-roadmap-labels.sh |
| utility | package.json | astro | astro |
| build | package.json | deploy | NODE_DEBUG=gh-pages gh-pages -d dist -t |
| utility | package.json | upgrade | ncu -u |
| utility | package.json | roadmap-links | node scripts/roadmap-links.cjs |
| utility | package.json | roadmap-dirs | node scripts/roadmap-dirs.cjs |
| utility | package.json | roadmap-assets | tsx scripts/editor-roadmap-assets.ts |
| utility | package.json | refresh-assets | tsx scripts/refresh-assets.ts |
| utility | package.json | editor-roadmap-dirs | tsx scripts/editor-roadmap-dirs.ts |
| utility | package.json | editor-roadmap-content | tsx scripts/editor-roadmap-content.ts |
| utility | package.json | roadmap-content | node scripts/roadmap-content.cjs |
| utility | package.json | generate-renderer | sh scripts/generate-renderer.sh |
| utility | package.json | generate-renderer-dummy | sh scripts/generate-renderer-dummy.sh |
| utility | package.json | best-practice-dirs | node scripts/best-practice-dirs.cjs |
| utility | package.json | best-practice-content | node scripts/best-practice-content.cjs |
| container | package.json | generate:og | node ./scripts/generate-og-images.mjs |
| utility | package.json | warm:urls | sh ./scripts/warm-urls.sh https://roadmap.sh/sitemap-0.xml |
| container | package.json | compress:images | tsx ./scripts/compress-images.ts |
| utility | package.json | generate:roadmap-content-json | tsx ./scripts/editor-roadmap-content-json.ts |
| utility | package.json | migrate:editor-roadmaps | tsx ./scripts/migrate-editor-roadmap.ts |
| utility | package.json | sync:content-to-repo | tsx ./scripts/sync-content-to-repo.ts |
| utility | package.json | sync:repo-to-database | tsx ./scripts/sync-repo-to-database.ts |
| utility | package.json | sync:roadmap | tsx ./scripts/sync-roadmap-to-database.ts |
| utility | package.json | migrate:content-repo-to-database | tsx ./scripts/migrate-content-repo-to-database.ts |
| utility | package.json | cleanup:orphaned-content | tsx ./scripts/cleanup-orphaned-content.ts |
| utility | package.json | official:roadmap-assets | tsx ./scripts/official-roadmap-assets.ts |
| test | package.json | test:e2e | playwright test |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | react |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [package.json](../../../../sources/nilbuild__developer-roadmap/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/nilbuild__developer-roadmap/pnpm-workspace.yaml) | config signal |
| config | [requirements.txt](../../../../sources/nilbuild__developer-roadmap/requirements.txt) | config signal |
| config | [tsconfig.json](../../../../sources/nilbuild__developer-roadmap/tsconfig.json) | config signal |
| ci | [src/data/roadmaps/terraform/content/jenkins@qFpaqOSoefTyKxmI-FRZt.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/terraform/content/jenkins@qFpaqOSoefTyKxmI-FRZt.md) | ci signal |
| ci | [src/data/roadmaps/qa/content/jenkins@3l2dkN1vBy9johFhAgZhT.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/qa/content/jenkins@3l2dkN1vBy9johFhAgZhT.md) | ci signal |
| ci | [src/data/roadmaps/mlops/content/jenkins@75mlW2JoUqSNFK2IDfqFP.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/mlops/content/jenkins@75mlW2JoUqSNFK2IDfqFP.md) | ci signal |
| ci | [src/data/roadmaps/ios/content/circleci@tWxuFh0xDugdplnHt_G0e.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ios/content/circleci@tWxuFh0xDugdplnHt_G0e.md) | ci signal |
| docs | [readme.md](../../../../sources/nilbuild__developer-roadmap/readme.md) | docs signal |
| docs | [src/data/roadmaps/api-design/content/readmecom@LxWHkhlikUaMT2G8YmVDQ.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/api-design/content/readmecom@LxWHkhlikUaMT2G8YmVDQ.md) | docs signal |
| docs | [scripts/readme.md](../../../../sources/nilbuild__developer-roadmap/scripts/readme.md) | docs signal |
| container | [src/data/roadmaps/server-side-game-developer/content/docker-compose@yAf7VDX7dyaT5AdlNnuKD.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/server-side-game-developer/content/docker-compose@yAf7VDX7dyaT5AdlNnuKD.md) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 88 | [src/hooks/use-ai-chat-scroll.tsx](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-ai-chat-scroll.tsx)<br>[src/hooks/use-auth.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-auth.ts)<br>[src/hooks/use-chat.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-chat.ts)<br>[src/hooks/use-client-mount.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-client-mount.ts)<br>[src/hooks/use-completion.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-completion.ts)<br>[src/hooks/use-copy-text.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-copy-text.ts)<br>[src/hooks/use-custom-roadmap.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-custom-roadmap.ts)<br>[src/hooks/use-debounce.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-debounce.ts) |
| mcp | 12 | [src/data/roadmaps/vibe-coding/content/install-and-ask-ai-to-use-mcp-eg-playwright-for-browser-when-possible@KVb_TAsSD8Kgafij4iEXc.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/vibe-coding/content/install-and-ask-ai-to-use-mcp-eg-playwright-for-browser-when-possible@KVb_TAsSD8Kgafij4iEXc.md)<br>[src/data/roadmaps/ai-engineer/content/building-an-mcp-client@0Rk0rCbmRFJT2GKwUibQS.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ai-engineer/content/building-an-mcp-client@0Rk0rCbmRFJT2GKwUibQS.md)<br>[src/data/roadmaps/ai-engineer/content/building-an-mcp-server@oLGfKjcqBzJ3vd6Cg-T1B.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ai-engineer/content/building-an-mcp-server@oLGfKjcqBzJ3vd6Cg-T1B.md)<br>[src/data/roadmaps/ai-engineer/content/mcp-client@po0fIZYaFhRbNlza7sB37.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ai-engineer/content/mcp-client@po0fIZYaFhRbNlza7sB37.md)<br>[src/data/roadmaps/ai-engineer/content/mcp-host@MabZ9jOrSj539C5qZrVBd.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ai-engineer/content/mcp-host@MabZ9jOrSj539C5qZrVBd.md)<br>[src/data/roadmaps/ai-engineer/content/mcp-server@8Xkd88EjX3GE_9DWQhr7G.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ai-engineer/content/mcp-server@8Xkd88EjX3GE_9DWQhr7G.md)<br>[src/data/roadmaps/ai-engineer/content/model-context-protocol-mcp@AeHkNU-uJ_gBdo5-xdpEu.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ai-engineer/content/model-context-protocol-mcp@AeHkNU-uJ_gBdo5-xdpEu.md)<br>[src/data/roadmaps/ai-agents/content/creating-mcp-servers@1NXIN-Hbjl5rPy_mqxQYW.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ai-agents/content/creating-mcp-servers@1NXIN-Hbjl5rPy_mqxQYW.md) |
| retrieval | 117 | [tests/index.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/index.spec.ts)<br>[tests/index.spec.ts-snapshots/homepage-test-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/index.spec.ts-snapshots/homepage-test-1-chromium-darwin.png)<br>[src/pages/index.astro](../../../../sources/nilbuild__developer-roadmap/src/pages/index.astro)<br>[src/pages/videos/index.astro](../../../../sources/nilbuild__developer-roadmap/src/pages/videos/index.astro)<br>[src/pages/r/embed.astro](../../../../sources/nilbuild__developer-roadmap/src/pages/r/embed.astro)<br>[src/pages/r/index.astro](../../../../sources/nilbuild__developer-roadmap/src/pages/r/index.astro)<br>[src/pages/projects/index.astro](../../../../sources/nilbuild__developer-roadmap/src/pages/projects/index.astro)<br>`src/pages/projects/[projectId]/index.astro` |
| spec | 687 | [requirements.txt](../../../../sources/nilbuild__developer-roadmap/requirements.txt)<br>[tests/guides.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/guides.spec.ts)<br>[tests/index.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/index.spec.ts)<br>[tests/roadmap.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts)<br>[tests/videos.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/videos.spec.ts)<br>[tests/videos.spec.ts-snapshots/videos-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/videos.spec.ts-snapshots/videos-1-chromium-darwin.png)<br>[tests/roadmap.spec.ts-snapshots/roadmap-android-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts-snapshots/roadmap-android-1-chromium-darwin.png)<br>[tests/roadmap.spec.ts-snapshots/roadmap-angular-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts-snapshots/roadmap-angular-1-chromium-darwin.png) |
| eval | 80 | [tests/guides.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/guides.spec.ts)<br>[tests/index.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/index.spec.ts)<br>[tests/roadmap.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts)<br>[tests/videos.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/videos.spec.ts)<br>[tests/videos.spec.ts-snapshots/videos-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/videos.spec.ts-snapshots/videos-1-chromium-darwin.png)<br>[tests/roadmap.spec.ts-snapshots/roadmap-android-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts-snapshots/roadmap-android-1-chromium-darwin.png)<br>[tests/roadmap.spec.ts-snapshots/roadmap-angular-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts-snapshots/roadmap-angular-1-chromium-darwin.png)<br>[tests/roadmap.spec.ts-snapshots/roadmap-aspnet-core-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts-snapshots/roadmap-aspnet-core-1-chromium-darwin.png) |
| security | 429 | [tests/roadmap.spec.ts-snapshots/roadmap-cyber-security-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts-snapshots/roadmap-cyber-security-1-chromium-darwin.png)<br>[src/lib/auth.ts](../../../../sources/nilbuild__developer-roadmap/src/lib/auth.ts)<br>[src/icons/security.svg](../../../../sources/nilbuild__developer-roadmap/src/icons/security.svg)<br>[src/hooks/use-auth.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-auth.ts)<br>[src/data/roadmaps/wordpress/content/security--hardening@E559_d1l7iIMDb6QobOsh.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/wordpress/content/security--hardening@E559_d1l7iIMDb6QobOsh.md)<br>[src/data/roadmaps/wordpress/content/security-best-practices@9jEQivDC8PpTGTJXMkD6t.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/wordpress/content/security-best-practices@9jEQivDC8PpTGTJXMkD6t.md)<br>[src/data/roadmaps/vibe-coding/content/explicitly-ask-ai-to-perform-a-security-audit-of-the-application@8VL5XHFrQUjin1pdAi7WZ.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/vibe-coding/content/explicitly-ask-ai-to-perform-a-security-audit-of-the-application@8VL5XHFrQUjin1pdAi7WZ.md)<br>[src/data/roadmaps/vibe-coding/content/security-best-practices@2omItZjkVFW9kMiNXdt-h.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/vibe-coding/content/security-best-practices@2omItZjkVFW9kMiNXdt-h.md) |
| ci | 17 | [src/data/roadmaps/terraform/content/jenkins@qFpaqOSoefTyKxmI-FRZt.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/terraform/content/jenkins@qFpaqOSoefTyKxmI-FRZt.md)<br>[src/data/roadmaps/qa/content/jenkins@3l2dkN1vBy9johFhAgZhT.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/qa/content/jenkins@3l2dkN1vBy9johFhAgZhT.md)<br>[src/data/roadmaps/mlops/content/jenkins@75mlW2JoUqSNFK2IDfqFP.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/mlops/content/jenkins@75mlW2JoUqSNFK2IDfqFP.md)<br>[src/data/roadmaps/ios/content/circleci@tWxuFh0xDugdplnHt_G0e.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ios/content/circleci@tWxuFh0xDugdplnHt_G0e.md)<br>[src/data/roadmaps/ios/content/jenkins@TrblGyy81Oep2CBxoZkaf.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ios/content/jenkins@TrblGyy81Oep2CBxoZkaf.md)<br>[src/data/roadmaps/devops/content/jenkins@dUapFp3f0Rum-rf_Vk_b-.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/devops/content/jenkins@dUapFp3f0Rum-rf_Vk_b-.md)<br>[src/data/roadmaps/aspnet-core/content/azure-pipelines@_-GQNpsb7KZw76hNNOq3h.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/aspnet-core/content/azure-pipelines@_-GQNpsb7KZw76hNNOq3h.md)<br>[.github/workflows/aws-costs.yml](../../../../sources/nilbuild__developer-roadmap/.github/workflows/aws-costs.yml) |
| container | 79 | [src/data/roadmaps/server-side-game-developer/content/docker-compose@yAf7VDX7dyaT5AdlNnuKD.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/server-side-game-developer/content/docker-compose@yAf7VDX7dyaT5AdlNnuKD.md)<br>[src/data/roadmaps/kubernetes/faqs.astro](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/faqs.astro)<br>[src/data/roadmaps/kubernetes/kubernetes.json](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/kubernetes.json)<br>[src/data/roadmaps/kubernetes/kubernetes.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/kubernetes.md)<br>[src/data/roadmaps/kubernetes/migration-mapping.json](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/migration-mapping.json)<br>[src/data/roadmaps/kubernetes/content/adding-and-managing-worker-nodes@2cQKTxln3dIk5IjX2UZdM.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/content/adding-and-managing-worker-nodes@2cQKTxln3dIk5IjX2UZdM.md)<br>[src/data/roadmaps/kubernetes/content/advanced-topics@t8SJbGVXsUDECxePLDk_w.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/content/advanced-topics@t8SJbGVXsUDECxePLDk_w.md)<br>[src/data/roadmaps/kubernetes/content/assigning-quotas-to-namespaces@OHz4QMmA3lqL_C7aWL8Ga.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/content/assigning-quotas-to-namespaces@OHz4QMmA3lqL_C7aWL8Ga.md) |
| instruction | 2 | [.cursor/rules/content-migration.mdc](../../../../sources/nilbuild__developer-roadmap/.cursor/rules/content-migration.mdc)<br>[.cursor/rules/gh-cli.mdc](../../../../sources/nilbuild__developer-roadmap/.cursor/rules/gh-cli.mdc) |
| docs | 3 | [readme.md](../../../../sources/nilbuild__developer-roadmap/readme.md)<br>[src/data/roadmaps/api-design/content/readmecom@LxWHkhlikUaMT2G8YmVDQ.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/api-design/content/readmecom@LxWHkhlikUaMT2G8YmVDQ.md)<br>[scripts/readme.md](../../../../sources/nilbuild__developer-roadmap/scripts/readme.md) |
| config | 4 | [package.json](../../../../sources/nilbuild__developer-roadmap/package.json)<br>[pnpm-workspace.yaml](../../../../sources/nilbuild__developer-roadmap/pnpm-workspace.yaml)<br>[requirements.txt](../../../../sources/nilbuild__developer-roadmap/requirements.txt)<br>[tsconfig.json](../../../../sources/nilbuild__developer-roadmap/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 80 | [tests/guides.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/guides.spec.ts)<br>[tests/index.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/index.spec.ts)<br>[tests/roadmap.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts)<br>[tests/videos.spec.ts](../../../../sources/nilbuild__developer-roadmap/tests/videos.spec.ts)<br>[tests/videos.spec.ts-snapshots/videos-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/videos.spec.ts-snapshots/videos-1-chromium-darwin.png)<br>[tests/roadmap.spec.ts-snapshots/roadmap-android-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts-snapshots/roadmap-android-1-chromium-darwin.png) |
| CI workflow | 17 | [src/data/roadmaps/terraform/content/jenkins@qFpaqOSoefTyKxmI-FRZt.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/terraform/content/jenkins@qFpaqOSoefTyKxmI-FRZt.md)<br>[src/data/roadmaps/qa/content/jenkins@3l2dkN1vBy9johFhAgZhT.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/qa/content/jenkins@3l2dkN1vBy9johFhAgZhT.md)<br>[src/data/roadmaps/mlops/content/jenkins@75mlW2JoUqSNFK2IDfqFP.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/mlops/content/jenkins@75mlW2JoUqSNFK2IDfqFP.md)<br>[src/data/roadmaps/ios/content/circleci@tWxuFh0xDugdplnHt_G0e.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ios/content/circleci@tWxuFh0xDugdplnHt_G0e.md)<br>[src/data/roadmaps/ios/content/jenkins@TrblGyy81Oep2CBxoZkaf.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/ios/content/jenkins@TrblGyy81Oep2CBxoZkaf.md)<br>[src/data/roadmaps/devops/content/jenkins@dUapFp3f0Rum-rf_Vk_b-.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/devops/content/jenkins@dUapFp3f0Rum-rf_Vk_b-.md) |
| 컨테이너/배포 | 79 | [src/data/roadmaps/server-side-game-developer/content/docker-compose@yAf7VDX7dyaT5AdlNnuKD.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/server-side-game-developer/content/docker-compose@yAf7VDX7dyaT5AdlNnuKD.md)<br>[src/data/roadmaps/kubernetes/faqs.astro](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/faqs.astro)<br>[src/data/roadmaps/kubernetes/kubernetes.json](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/kubernetes.json)<br>[src/data/roadmaps/kubernetes/kubernetes.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/kubernetes.md)<br>[src/data/roadmaps/kubernetes/migration-mapping.json](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/migration-mapping.json)<br>[src/data/roadmaps/kubernetes/content/adding-and-managing-worker-nodes@2cQKTxln3dIk5IjX2UZdM.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/kubernetes/content/adding-and-managing-worker-nodes@2cQKTxln3dIk5IjX2UZdM.md) |
| 보안/정책 | 429 | [tests/roadmap.spec.ts-snapshots/roadmap-cyber-security-1-chromium-darwin.png](../../../../sources/nilbuild__developer-roadmap/tests/roadmap.spec.ts-snapshots/roadmap-cyber-security-1-chromium-darwin.png)<br>[src/lib/auth.ts](../../../../sources/nilbuild__developer-roadmap/src/lib/auth.ts)<br>[src/icons/security.svg](../../../../sources/nilbuild__developer-roadmap/src/icons/security.svg)<br>[src/hooks/use-auth.ts](../../../../sources/nilbuild__developer-roadmap/src/hooks/use-auth.ts)<br>[src/data/roadmaps/wordpress/content/security--hardening@E559_d1l7iIMDb6QobOsh.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/wordpress/content/security--hardening@E559_d1l7iIMDb6QobOsh.md)<br>[src/data/roadmaps/wordpress/content/security-best-practices@9jEQivDC8PpTGTJXMkD6t.md](../../../../sources/nilbuild__developer-roadmap/src/data/roadmaps/wordpress/content/security-best-practices@9jEQivDC8PpTGTJXMkD6t.md) |
| 에이전트 지시문 | 2 | [.cursor/rules/content-migration.mdc](../../../../sources/nilbuild__developer-roadmap/.cursor/rules/content-migration.mdc)<br>[.cursor/rules/gh-cli.mdc](../../../../sources/nilbuild__developer-roadmap/.cursor/rules/gh-cli.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `package.json`, `pnpm-workspace.yaml`, `requirements.txt`.
2. agent/tool runtime 매핑: `src/hooks/use-ai-chat-scroll.tsx`, `src/hooks/use-auth.ts`, `src/hooks/use-chat.ts`.
3. retrieval/memory/indexing 확인: `tests/index.spec.ts`, `tests/index.spec.ts-snapshots/homepage-test-1-chromium-darwin.png`, `src/pages/index.astro`.
4. test/eval 파일로 동작 검증: `tests/guides.spec.ts`, `tests/index.spec.ts`, `tests/roadmap.spec.ts`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Interactive roadmaps, guides and other educational content to help developers grow in their careers.. 핵심 구조 신호는 TypeScript, package.json, requirements.txt, README.md, LICENSE, react이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
