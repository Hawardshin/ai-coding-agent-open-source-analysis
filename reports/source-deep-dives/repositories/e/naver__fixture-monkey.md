# naver/fixture-monkey Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Let Fixture Monkey generates fully-customizable, randomly populated instance. Focus on the properties of the class that really matter in your test.

## 요약

- 조사 단위: `sources/naver__fixture-monkey` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,352 files, 558 directories, depth score 102, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 eval=scripts/regression-test.sh, object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java, object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | naver/fixture-monkey |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | korea |
| Language | Java |
| Stars | 696 |
| Forks | 122 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__fixture-monkey](../../../../sources/naver__fixture-monkey) |
| Existing report | [reports/korea-trending/repositories/naver__fixture-monkey.md](../../../korea-trending/repositories/naver__fixture-monkey.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1352 / 558 |
| Max observed depth | 12 |
| Top directories | .claude, .github, buildSrc, cursor, docs, fixture-monkey, fixture-monkey-api, fixture-monkey-autoparams, fixture-monkey-benchmarks, fixture-monkey-datafaker, fixture-monkey-engine, fixture-monkey-jackson, fixture-monkey-jackson3, fixture-monkey-jakarta-validation, fixture-monkey-javax-validation, fixture-monkey-junit-jupiter, fixture-monkey-kotest, fixture-monkey-kotlin, fixture-monkey-mockito, fixture-monkey-starter |
| Top extensions | .java: 776, .kt: 155, .md: 149, .json: 75, .mdx: 68, .kts: 31, .properties: 19, .config: 9, .yml: 8, (none): 7, .png: 5, .svg: 5 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 6 | [tool/naver-checkstyle-rules.xml](../../../../sources/naver__fixture-monkey/tool/naver-checkstyle-rules.xml)<br>[tool/naver-checkstyle-suppressions.xml](../../../../sources/naver__fixture-monkey/tool/naver-checkstyle-suppressions.xml)<br>[tool/naver-intellij-formatter.xml](../../../../sources/naver__fixture-monkey/tool/naver-intellij-formatter.xml)<br>[fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyContext.java](../../../../sources/naver__fixture-monkey/fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyContext.java)<br>[fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyContextBuilder.java](../../../../sources/naver__fixture-monkey/fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyContextBuilder.java)<br>[fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyGeneratorContext.java](../../../../sources/naver__fixture-monkey/fixture-monkey-api/src/main/java/com/navercorp/fixturemonkey/api/context/MonkeyGeneratorContext.java) |
| mcp | 0 | not obvious |
| retrieval | 8 | [docs/versioned_docs/version-0.6.x/getting-started/index.md](../../../../sources/naver__fixture-monkey/docs/versioned_docs/version-0.6.x/getting-started/index.md)<br>[docs/src/pages/index.module.css](../../../../sources/naver__fixture-monkey/docs/src/pages/index.module.css)<br>[docs/src/pages/index.tsx](../../../../sources/naver__fixture-monkey/docs/src/pages/index.tsx)<br>[docs/plugins/source-code-loader/index.js](../../../../sources/naver__fixture-monkey/docs/plugins/source-code-loader/index.js)<br>[docs/i18n/ko/docusaurus-plugin-content-docs/current/release-notes/index.md](../../../../sources/naver__fixture-monkey/docs/i18n/ko/docusaurus-plugin-content-docs/current/release-notes/index.md)<br>[docs/i18n/ko/docusaurus-plugin-content-docs/current/generating-objects/index.md](../../../../sources/naver__fixture-monkey/docs/i18n/ko/docusaurus-plugin-content-docs/current/generating-objects/index.md)<br>[docs/docs/release-notes/index.md](../../../../sources/naver__fixture-monkey/docs/docs/release-notes/index.md)<br>[docs/docs/generating-objects/index.md](../../../../sources/naver__fixture-monkey/docs/docs/generating-objects/index.md) |
| spec | 35 | [fixture-monkey-kotlin/src/test/java/com/navercorp/fixturemonkey/kotlin/spec/JavaObject.java](../../../../sources/naver__fixture-monkey/fixture-monkey-kotlin/src/test/java/com/navercorp/fixturemonkey/kotlin/spec/JavaObject.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigDecimalIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigDecimalIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigIntegerIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BigIntegerIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BooleanIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/BooleanIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/ByteIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/ByteIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/CharacterIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/CharacterIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/ContainerAnnotationIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/ContainerAnnotationIntrospectorSpec.java)<br>[fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/DoubleIntrospectorSpec.java](../../../../sources/naver__fixture-monkey/fixture-monkey-javax-validation/src/test/java/com/navercorp/fixturemonkey/javax/validation/spec/DoubleIntrospectorSpec.java) |
| eval | 347 | [scripts/regression-test.sh](../../../../sources/naver__fixture-monkey/scripts/regression-test.sh)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTransformerTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTransformerTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/NestedContainerTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/NestedContainerTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/PathResolverContextTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/PathResolverContextTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/PathResolverIntegrationTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/PathResolverIntegrationTest.java) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/auto-assign-action.yml](../../../../sources/naver__fixture-monkey/.github/workflows/auto-assign-action.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/naver__fixture-monkey/.github/workflows/benchmark.yml)<br>[.github/workflows/build.yml](../../../../sources/naver__fixture-monkey/.github/workflows/build.yml)<br>[.github/workflows/deploy.yml](../../../../sources/naver__fixture-monkey/.github/workflows/deploy.yml)<br>[.github/workflows/doc-examples.yml](../../../../sources/naver__fixture-monkey/.github/workflows/doc-examples.yml)<br>[.github/workflows/github-page.yml](../../../../sources/naver__fixture-monkey/.github/workflows/github-page.yml)<br>[.github/workflows/test-report.yml](../../../../sources/naver__fixture-monkey/.github/workflows/test-report.yml) |
| container | 0 | not obvious |
| instruction | 1 | [.claude/CLAUDE.md](../../../../sources/naver__fixture-monkey/.claude/CLAUDE.md) |
| docs | 338 | [README.md](../../../../sources/naver__fixture-monkey/README.md)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/IntrospectorsKotlinTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/IntrospectorsKotlinTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotestFeaturesTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotestFeaturesTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotlinExpTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotlinExpTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotlinPluginFeaturesTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/plugins/KotlinPluginFeaturesTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/options/OverviewKotlinTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/options/OverviewKotlinTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/getstarted/CreatingObjectsKotlinTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/getstarted/CreatingObjectsKotlinTest.kt)<br>[fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/generating/FixtureMonkeyApiKotlinTest.kt](../../../../sources/naver__fixture-monkey/fixture-monkey-tests/doc-examples/kotlin-examples/src/test/kotlin/com/navercorp/fixturemonkey/docs/generating/FixtureMonkeyApiKotlinTest.kt) |
| config | 2 | [docs/package.json](../../../../sources/naver__fixture-monkey/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/naver__fixture-monkey/docs/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 347 | [scripts/regression-test.sh](../../../../sources/naver__fixture-monkey/scripts/regression-test.sh)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTransformerTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeTransformerTest.java)<br>[object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/NestedContainerTreeTest.java](../../../../sources/naver__fixture-monkey/object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/NestedContainerTreeTest.java) |
| CI workflows | 7 | [.github/workflows/auto-assign-action.yml](../../../../sources/naver__fixture-monkey/.github/workflows/auto-assign-action.yml)<br>[.github/workflows/benchmark.yml](../../../../sources/naver__fixture-monkey/.github/workflows/benchmark.yml)<br>[.github/workflows/build.yml](../../../../sources/naver__fixture-monkey/.github/workflows/build.yml)<br>[.github/workflows/deploy.yml](../../../../sources/naver__fixture-monkey/.github/workflows/deploy.yml)<br>[.github/workflows/doc-examples.yml](../../../../sources/naver__fixture-monkey/.github/workflows/doc-examples.yml)<br>[.github/workflows/github-page.yml](../../../../sources/naver__fixture-monkey/.github/workflows/github-page.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [.claude/CLAUDE.md](../../../../sources/naver__fixture-monkey/.claude/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `scripts/regression-test.sh`, `object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java`, `object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java`.
2. Map agent/tool runtime through: `tool/naver-checkstyle-rules.xml`, `tool/naver-checkstyle-suppressions.xml`, `tool/naver-intellij-formatter.xml`.
3. Inspect retrieval/memory/indexing through: `docs/versioned_docs/version-0.6.x/getting-started/index.md`, `docs/src/pages/index.module.css`, `docs/src/pages/index.tsx`.
4. Verify behavior through test/eval files: `scripts/regression-test.sh`, `object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeCandidateTreeTest.java`, `object-farm-api/src/test/java/com/navercorp/objectfarm/api/tree/JvmNodeTreeResolveTest.java`.

## Existing Repository Insight

평가/관측/품질 관점에서 Let Fixture Monkey generates fully customizable, randomly populated instance. Focus on the properties of the class that . 핵심 구조 신호는 Java, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
