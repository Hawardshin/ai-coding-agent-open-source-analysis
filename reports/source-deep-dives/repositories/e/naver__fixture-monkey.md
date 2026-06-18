# naver/fixture-monkey 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Let Fixture Monkey generates fully-customizable, randomly populated instance. Focus on the properties of the class that really matter in your test.

## 요약

- 조사 단위: `sources/naver__fixture-monkey` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,352 files, 558 directories, depth score 96, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 eval=scripts/regression-test.sh, object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java, object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/fixture-monkey |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | korea |
| Language | Java |
| Stars | 696 |
| Forks | 122 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__fixture-monkey](../../../../sources/naver__fixture-monkey) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__fixture-monkey.md](../../../korea-trending/repositories/naver__fixture-monkey.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1352 / 558 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .claude, .github, buildSrc, cursor, docs, fixture-monkey, fixture-monkey-api, fixture-monkey-autoparams, fixture-monkey-benchmarks, fixture-monkey-datafaker, fixture-monkey-engine, fixture-monkey-jackson, fixture-monkey-jackson3, fixture-monkey-jakarta-validation, fixture-monkey-javax-validation, fixture-monkey-junit-jupiter, fixture-monkey-kotest, fixture-monkey-kotlin, fixture-monkey-mockito, fixture-monkey-starter |
| 상위 확장자 | .java: 776, .kt: 155, .md: 149, .json: 75, .mdx: 68, .kts: 31, .properties: 19, .config: 9, .yml: 8, (none): 7, .png: 5, .svg: 5 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 23 |
| .github | ci surface | 1 |
| buildSrc | source boundary | 1 |
| cursor | top-level component | 1 |
| fixture-monkey | top-level component | 1 |
| fixture-monkey-api | source boundary | 1 |
| fixture-monkey-autoparams | top-level component | 1 |
| fixture-monkey-benchmarks | validation surface | 1 |
| fixture-monkey-datafaker | top-level component | 1 |
| fixture-monkey-engine | top-level component | 1 |
| fixture-monkey-jackson | top-level component | 1 |
| fixture-monkey-jackson3 | top-level component | 1 |
| fixture-monkey-jakarta-validation | top-level component | 1 |
| fixture-monkey-javax-validation | top-level component | 1 |
| fixture-monkey-junit-jupiter | top-level component | 1 |
| fixture-monkey-kotest | validation surface | 1 |
| fixture-monkey-kotlin | top-level component | 1 |
| fixture-monkey-mockito | top-level component | 1 |


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
| eval | [scripts/regression-test.sh](../../../../sources/naver__fixture-monkey/scripts/regression-test.sh) | eval signal |
| eval | [object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java) | eval signal |
| eval | [object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java) | eval signal |
| eval | [object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java) | eval signal |
| config | [docs/package.json](../../../../sources/naver__fixture-monkey/docs/package.json) | config signal |
| config | [docs/tsconfig.json](../../../../sources/naver__fixture-monkey/docs/tsconfig.json) | config signal |
| ci | [.github/workflows/auto-assign-action.yml](../../../../sources/naver__fixture-monkey/.github/workflows/auto-assign-action.yml) | ci signal |
| ci | [.github/workflows/benchmark.yml](../../../../sources/naver__fixture-monkey/.github/workflows/benchmark.yml) | ci signal |
| ci | [.github/workflows/build.yml](../../../../sources/naver__fixture-monkey/.github/workflows/build.yml) | ci signal |
| ci | [.github/workflows/deploy.yml](../../../../sources/naver__fixture-monkey/.github/workflows/deploy.yml) | ci signal |
| instruction | [.claude/CLAUDE.md](../../../../sources/naver__fixture-monkey/.claude/CLAUDE.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 6 | [tool/naver-checkstyle-rules.xml](../../../../sources/naver__fixture-monkey/tool/naver-checkstyle-rules.xml)<br>[tool/naver-checkstyle-suppressions.xml](../../../../sources/naver__fixture-monkey/tool/naver-checkstyle-suppressions.xml)<br>[tool/naver-intellij-formatter.xml](../../../../sources/naver__fixture-monkey/tool/naver-intellij-formatter.xml)<br>[fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyContext.java](../../../../sources/naver__fixture-monkey/fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyContext.java)<br>[fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyContextBuilder.java](../../../../sources/naver__fixture-monkey/fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyContextBuilder.java)<br>[fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyGeneratorContext.java](../../../../sources/naver__fixture-monkey/fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyGeneratorContext.java) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 8 | [docs/versioned_docs/version-0.6.x/getting-started/index.md](../../../../sources/naver__fixture-monkey/docs/versioned_docs/version-0.6.x/getting-started/index.md)<br>[docs/src/pages/index.module.css](../../../../sources/naver__fixture-monkey/docs/src/pages/index.module.css)<br>[docs/src/pages/index.tsx](../../../../sources/naver__fixture-monkey/docs/src/pages/index.tsx)<br>[docs/plugins/source-code-loader/index.js](../../../../sources/naver__fixture-monkey/docs/plugins/source-code-loader/index.js)<br>[docs/i18n/ko/docusaurus-plugin-content-docs/current/release-notes/index.md](../../../../sources/naver__fixture-monkey/docs/i18n/ko/docusaurus-plugin-content-docs/current/release-notes/index.md)<br>[docs/i18n/ko/docusaurus-plugin-content-docs/current/generating-objects/index.md](../../../../sources/naver__fixture-monkey/docs/i18n/ko/docusaurus-plugin-content-docs/current/generating-objects/index.md)<br>[docs/docs/release-notes/index.md](../../../../sources/naver__fixture-monkey/docs/docs/release-notes/index.md)<br>[docs/docs/generating-objects/index.md](../../../../sources/naver__fixture-monkey/docs/docs/generating-objects/index.md) |
| spec | 35 | [fixture-monkey-kotlin/src/test/java/com/navercorp/fixturemonkey/kotlin/spec/JavaObject.java](../../../../sources/naver__fixture-monkey/fixture-monkey-kotlin/src/test/java/com/navercorp/fixturemonkey/kotlin/spec/JavaObject.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigDecimalIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigDecimalIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigIntegerIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigIntegerIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BooleanIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BooleanIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/ByteIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/ByteIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/CharacterIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/CharacterIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/ContainerAnnotationIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/ContainerAnnotationIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/DoubleIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/DoubleIntrospectorSpec.java) |
| eval | 347 | [scripts/regression-test.sh](../../../../sources/naver__fixture-monkey/scripts/regression-test.sh)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTransformerTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTransformerTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/NestedContainerTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/NestedContainerTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/PathResolverContextTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/PathResolverContextTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/PathResolverIntegrationTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/PathResolverIntegrationTest.java) |
| security | 0 | 명확하지 않음 |
| ci | 7 | [.github/workflows/auto-assign-action.yml](../../../../sources/naver__fixture-monkey/.github/workflows/auto-assign-action.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/naver__fixture-monkey/.github/workflows/benchmark.yml)<br>[.github/workflows/build.yml](../../../../sources/naver__fixture-monkey/.github/workflows/build.yml)<br>[.github/workflows/deploy.yml](../../../../sources/naver__fixture-monkey/.github/workflows/deploy.yml)<br>[.github/workflows/doc-examples.yml](../../../../sources/naver__fixture-monkey/.github/workflows/doc-examples.yml)<br>[.github/workflows/github-page.yml](../../../../sources/naver__fixture-monkey/.github/workflows/github-page.yml)<br>[.github/workflows/test-report.yml](../../../../sources/naver__fixture-monkey/.github/workflows/test-report.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [.claude/CLAUDE.md](../../../../sources/naver__fixture-monkey/.claude/CLAUDE.md) |
| docs | 338 | [README.md](../../../../sources/naver__fixture-monkey/README.md)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/IntrospectorsKotlinTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/IntrospectorsKotlinTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotestFeaturesTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotestFeaturesTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotlinExpTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotlinExpTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotlinPluginFeaturesTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotlinPluginFeaturesTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/options/OverviewKotlinTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/options/OverviewKotlinTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/getstarted/CreatingObjectsKotlinTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/getstarted/CreatingObjectsKotlinTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/generating/FixtureMonkeyApiKotlinTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/generating/FixtureMonkeyApiKotlinTest.kt) |
| config | 2 | [docs/package.json](../../../../sources/naver__fixture-monkey/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/naver__fixture-monkey/docs/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 347 | [scripts/regression-test.sh](../../../../sources/naver__fixture-monkey/scripts/regression-test.sh)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTransformerTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTransformerTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/NestedContainerTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/NestedContainerTreeTest.java) |
| CI workflow | 7 | [.github/workflows/auto-assign-action.yml](../../../../sources/naver__fixture-monkey/.github/workflows/auto-assign-action.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/naver__fixture-monkey/.github/workflows/benchmark.yml)<br>[.github/workflows/build.yml](../../../../sources/naver__fixture-monkey/.github/workflows/build.yml)<br>[.github/workflows/deploy.yml](../../../../sources/naver__fixture-monkey/.github/workflows/deploy.yml)<br>[.github/workflows/doc-examples.yml](../../../../sources/naver__fixture-monkey/.github/workflows/doc-examples.yml)<br>[.github/workflows/github-page.yml](../../../../sources/naver__fixture-monkey/.github/workflows/github-page.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [.claude/CLAUDE.md](../../../../sources/naver__fixture-monkey/.claude/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `scripts/regression-test.sh`, `object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java`, `object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java`.
2. agent/tool runtime 매핑: `tool/naver-checkstyle-rules.xml`, `tool/naver-checkstyle-suppressions.xml`, `tool/naver-intellij-formatter.xml`.
3. retrieval/memory/indexing 확인: `docs/versioned_docs/version-0.6.x/getting-started/index.md`, `docs/src/pages/index.module.css`, `docs/src/pages/index.tsx`.
4. test/eval 파일로 동작 검증: `scripts/regression-test.sh`, `object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java`, `object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Let Fixture Monkey generates fully customizable, randomly populated instance. Focus on the properties of the class that . 핵심 구조 신호는 Java, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
