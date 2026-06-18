# memex-lab/memex Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Open-source, local-first AI journal app for iOS and Android. Capture text, photos, and voice — AI agents organize them into timeline cards and insights. Your data stays on your device. Bring your own LLM (OpenAI, Claude, Gemini, Ollama, and more).

## 요약

- 조사 단위: `sources/memex-lab__memex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 888 files, 711 directories, depth score 98, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/android-daily-early.yml, .github/workflows/discord-pr-merged.yml, .github/workflows/pr-ai-review.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | memex-lab/memex |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Dart |
| Stars | 487 |
| Forks | 47 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/memex-lab__memex](../../../../sources/memex-lab__memex) |
| Existing report | [reports/global-trending/repositories/memex-lab__memex.md](../../../global-trending/repositories/memex-lab__memex.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 888 / 711 |
| Max observed depth | 12 |
| Top directories | .cursor, .github, .windsurf, android, assets, docs, ios, lib, scripts, test, tests |
| Top extensions | .dart: 526, .md: 72, .png: 68, .json: 63, .xml: 22, .svg: 21, .py: 15, .yml: 13, .kt: 12, .swift: 11, (none): 11, .yaml: 7 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 36 |
| tests | validation surface | 17 |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| android | top-level component | 1 |
| assets | top-level component | 1 |
| ios | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


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
| ci | [.github/workflows/android-daily-early.yml](../../../../sources/memex-lab__memex/.github/workflows/android-daily-early.yml) | ci signal |
| ci | [.github/workflows/discord-pr-merged.yml](../../../../sources/memex-lab__memex/.github/workflows/discord-pr-merged.yml) | ci signal |
| ci | [.github/workflows/pr-ai-review.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-ai-review.yml) | ci signal |
| ci | [.github/workflows/pr-flutter-quality.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-flutter-quality.yml) | ci signal |
| eval | [dart_test.yaml](../../../../sources/memex-lab__memex/dart_test.yaml) | eval support |
| eval | [tests/__init__.py](../../../../sources/memex-lab__memex/tests/__init__.py) | eval support |
| instruction | [AGENTS.md](../../../../sources/memex-lab__memex/AGENTS.md) | instruction support |
| instruction | [CLAUDE.md](../../../../sources/memex-lab__memex/CLAUDE.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 287 | [AGENTS.md](../../../../sources/memex-lab__memex/AGENTS.md)<br>[tests/tools/__init__.py](../../../../sources/memex-lab__memex/tests/tools/__init__.py)<br>[tests/tools/test_compare_flutter_analyze.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_analyze.py)<br>[tests/tools/test_compare_flutter_test_failures.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_test_failures.py)<br>[tests/tools/test_extract_claude_structured_review.py](../../../../sources/memex-lab__memex/tests/tools/test_extract_claude_structured_review.py)<br>[tests/tools/test_pr_ai_review_report.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_ai_review_report.py)<br>[tests/tools/test_pr_policy_check.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_policy_check.py)<br>[tests/tools/test_pr_preflight_summary_comment.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_preflight_summary_comment.py) |
| mcp | 0 | not obvious |
| retrieval | 28 | [test/agent/knowledge_insight_prompt_test.dart](../../../../sources/memex-lab__memex/test/agent/knowledge_insight_prompt_test.dart)<br>[test/agent/knowledge_insight_run_context_test.dart](../../../../sources/memex-lab__memex/test/agent/knowledge_insight_run_context_test.dart)<br>[lib/ui/memory/widgets/memory_screen.dart](../../../../sources/memex-lab__memex/lib/ui/memory/widgets/memory_screen.dart)<br>[lib/ui/memory/view_models/memory_viewmodel.dart](../../../../sources/memex-lab__memex/lib/ui/memory/view_models/memory_viewmodel.dart)<br>[lib/ui/knowledge/widgets/knowledge_base_screen.dart](../../../../sources/memex-lab__memex/lib/ui/knowledge/widgets/knowledge_base_screen.dart)<br>[lib/ui/knowledge/widgets/knowledge_directory_page.dart](../../../../sources/memex-lab__memex/lib/ui/knowledge/widgets/knowledge_directory_page.dart)<br>[lib/ui/knowledge/widgets/knowledge_file_page.dart](../../../../sources/memex-lab__memex/lib/ui/knowledge/widgets/knowledge_file_page.dart)<br>[lib/ui/knowledge/widgets/knowledge_search_delegate.dart](../../../../sources/memex-lab__memex/lib/ui/knowledge/widgets/knowledge_search_delegate.dart) |
| spec | 5 | [lib/ui/core/themes/design_system.dart](../../../../sources/memex-lab__memex/lib/ui/core/themes/design_system.dart)<br>[lib/ui/core/cards/templates/entities/spec_sheet_card.dart](../../../../sources/memex-lab__memex/lib/ui/core/cards/templates/entities/spec_sheet_card.dart)<br>[docs/companion-agent-design.md](../../../../sources/memex-lab__memex/docs/companion-agent-design.md)<br>[docs/roadmap/github-project.md](../../../../sources/memex-lab__memex/docs/roadmap/github-project.md)<br>[assets/icons/emoji_design.svg](../../../../sources/memex-lab__memex/assets/icons/emoji_design.svg) |
| eval | 252 | [dart_test.yaml](../../../../sources/memex-lab__memex/dart_test.yaml)<br>[tests/__init__.py](../../../../sources/memex-lab__memex/tests/__init__.py)<br>[tests/tools/__init__.py](../../../../sources/memex-lab__memex/tests/tools/__init__.py)<br>[tests/tools/test_compare_flutter_analyze.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_analyze.py)<br>[tests/tools/test_compare_flutter_test_failures.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_test_failures.py)<br>[tests/tools/test_extract_claude_structured_review.py](../../../../sources/memex-lab__memex/tests/tools/test_extract_claude_structured_review.py)<br>[tests/tools/test_pr_ai_review_report.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_ai_review_report.py)<br>[tests/tools/test_pr_policy_check.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_policy_check.py) |
| security | 18 | [PRIVACY_POLICY_CN.md](../../../../sources/memex-lab__memex/PRIVACY_POLICY_CN.md)<br>[PRIVACY_POLICY.md](../../../../sources/memex-lab__memex/PRIVACY_POLICY.md)<br>[tests/tools/test_pr_policy_check.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_policy_check.py)<br>[test/agent/comment_agent_policy_live_test.dart](../../../../sources/memex-lab__memex/test/agent/comment_agent_policy_live_test.dart)<br>[test/agent/comment_agent_policy_test.dart](../../../../sources/memex-lab__memex/test/agent/comment_agent_policy_test.dart)<br>[test/agent/security/file_permission_manager_test.dart](../../../../sources/memex-lab__memex/test/agent/security/file_permission_manager_test.dart)<br>[scripts/pr_policy_check.py](../../../../sources/memex-lab__memex/scripts/pr_policy_check.py)<br>[lib/utils/permission_utils.dart](../../../../sources/memex-lab__memex/lib/utils/permission_utils.dart) |
| ci | 6 | [.github/workflows/android-daily-early.yml](../../../../sources/memex-lab__memex/.github/workflows/android-daily-early.yml)<br>[.github/workflows/discord-pr-merged.yml](../../../../sources/memex-lab__memex/.github/workflows/discord-pr-merged.yml)<br>[.github/workflows/pr-ai-review.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-ai-review.yml)<br>[.github/workflows/pr-flutter-quality.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-flutter-quality.yml)<br>[.github/workflows/pr-policy-preflight.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-policy-preflight.yml)<br>[.github/workflows/pr-preflight-summary.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-preflight-summary.yml) |
| container | 0 | not obvious |
| instruction | 5 | [AGENTS.md](../../../../sources/memex-lab__memex/AGENTS.md)<br>[CLAUDE.md](../../../../sources/memex-lab__memex/CLAUDE.md)<br>[GEMINI.md](../../../../sources/memex-lab__memex/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/memex-lab__memex/.github/copilot-instructions.md)<br>[.cursor/rules/memex.mdc](../../../../sources/memex-lab__memex/.cursor/rules/memex.mdc) |
| docs | 10 | [README_CN.md](../../../../sources/memex-lab__memex/README_CN.md)<br>[README.md](../../../../sources/memex-lab__memex/README.md)<br>[docs/companion-agent-design.md](../../../../sources/memex-lab__memex/docs/companion-agent-design.md)<br>[docs/companion-prompt-research-report.md](../../../../sources/memex-lab__memex/docs/companion-prompt-research-report.md)<br>[docs/memex-evaluation-framework.md](../../../../sources/memex-lab__memex/docs/memex-evaluation-framework.md)<br>[docs/pr-ai-review.en.md](../../../../sources/memex-lab__memex/docs/pr-ai-review.en.md)<br>[docs/pr-ai-review.zh.md](../../../../sources/memex-lab__memex/docs/pr-ai-review.zh.md)<br>[docs/pr-policy-preflight.en.md](../../../../sources/memex-lab__memex/docs/pr-policy-preflight.en.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 252 | [dart_test.yaml](../../../../sources/memex-lab__memex/dart_test.yaml)<br>[tests/__init__.py](../../../../sources/memex-lab__memex/tests/__init__.py)<br>[tests/tools/__init__.py](../../../../sources/memex-lab__memex/tests/tools/__init__.py)<br>[tests/tools/test_compare_flutter_analyze.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_analyze.py)<br>[tests/tools/test_compare_flutter_test_failures.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_test_failures.py)<br>[tests/tools/test_extract_claude_structured_review.py](../../../../sources/memex-lab__memex/tests/tools/test_extract_claude_structured_review.py) |
| CI workflows | 6 | [.github/workflows/android-daily-early.yml](../../../../sources/memex-lab__memex/.github/workflows/android-daily-early.yml)<br>[.github/workflows/discord-pr-merged.yml](../../../../sources/memex-lab__memex/.github/workflows/discord-pr-merged.yml)<br>[.github/workflows/pr-ai-review.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-ai-review.yml)<br>[.github/workflows/pr-flutter-quality.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-flutter-quality.yml)<br>[.github/workflows/pr-policy-preflight.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-policy-preflight.yml)<br>[.github/workflows/pr-preflight-summary.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-preflight-summary.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 18 | [PRIVACY_POLICY_CN.md](../../../../sources/memex-lab__memex/PRIVACY_POLICY_CN.md)<br>[PRIVACY_POLICY.md](../../../../sources/memex-lab__memex/PRIVACY_POLICY.md)<br>[tests/tools/test_pr_policy_check.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_policy_check.py)<br>[test/agent/comment_agent_policy_live_test.dart](../../../../sources/memex-lab__memex/test/agent/comment_agent_policy_live_test.dart)<br>[test/agent/comment_agent_policy_test.dart](../../../../sources/memex-lab__memex/test/agent/comment_agent_policy_test.dart)<br>[test/agent/security/file_permission_manager_test.dart](../../../../sources/memex-lab__memex/test/agent/security/file_permission_manager_test.dart) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/memex-lab__memex/AGENTS.md)<br>[CLAUDE.md](../../../../sources/memex-lab__memex/CLAUDE.md)<br>[GEMINI.md](../../../../sources/memex-lab__memex/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/memex-lab__memex/.github/copilot-instructions.md)<br>[.cursor/rules/memex.mdc](../../../../sources/memex-lab__memex/.cursor/rules/memex.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/android-daily-early.yml`, `.github/workflows/discord-pr-merged.yml`, `.github/workflows/pr-ai-review.yml`.
2. Map agent/tool runtime through: `AGENTS.md`, `tests/tools/__init__.py`, `tests/tools/test_compare_flutter_analyze.py`.
3. Inspect retrieval/memory/indexing through: `test/agent/knowledge_insight_prompt_test.dart`, `test/agent/knowledge_insight_run_context_test.dart`, `lib/ui/memory/widgets/memory_screen.dart`.
4. Verify behavior through test/eval files: `dart_test.yaml`, `tests/__init__.py`, `tests/tools/__init__.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Open source, local first AI journal app for iOS and Android. Capture text, photos, and voice — AI agents organize them i. 핵심 구조 신호는 Dart, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
