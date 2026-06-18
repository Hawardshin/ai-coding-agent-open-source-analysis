# memex-lab/memex 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Open-source, local-first AI journal app for iOS and Android. Capture text, photos, and voice — AI agents organize them into timeline cards and insights. Your data stays on your device. Bring your own LLM (OpenAI, Claude, Gemini, Ollama, and more).

## 요약

- 조사 단위: `sources/memex-lab__memex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 888 files, 711 directories, depth score 92, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/android-daily-early.yml, .github/workflows/discord-pr-merged.yml, .github/workflows/pr-ai-review.yml이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | memex-lab/memex |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Dart |
| Stars | 487 |
| Forks | 47 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/memex-lab__memex](../../../../sources/memex-lab__memex) |
| 기존 보고서 | [reports/global-trending/repositories/memex-lab__memex.md](../../../global-trending/repositories/memex-lab__memex.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 888 / 711 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .cursor, .github, .windsurf, android, assets, docs, ios, lib, scripts, test, tests |
| 상위 확장자 | .dart: 526, .md: 72, .png: 68, .json: 63, .xml: 22, .svg: 21, .py: 15, .yml: 13, .kt: 12, .swift: 11, (none): 11, .yaml: 7 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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
| ci | [.github/workflows/android-daily-early.yml](../../../../sources/memex-lab__memex/.github/workflows/android-daily-early.yml) | ci signal |
| ci | [.github/workflows/discord-pr-merged.yml](../../../../sources/memex-lab__memex/.github/workflows/discord-pr-merged.yml) | ci signal |
| ci | [.github/workflows/pr-ai-review.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-ai-review.yml) | ci signal |
| ci | [.github/workflows/pr-flutter-quality.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-flutter-quality.yml) | ci signal |
| eval | [dart_test.yaml](../../../../sources/memex-lab__memex/dart_test.yaml) | eval support |
| eval | [tests/__init__.py](../../../../sources/memex-lab__memex/tests/__init__.py) | eval support |
| instruction | [AGENTS.md](../../../../sources/memex-lab__memex/AGENTS.md) | instruction support |
| instruction | [CLAUDE.md](../../../../sources/memex-lab__memex/CLAUDE.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 287 | [AGENTS.md](../../../../sources/memex-lab__memex/AGENTS.md)<br>[tests/tools/__init__.py](../../../../sources/memex-lab__memex/tests/tools/__init__.py)<br>[tests/tools/test_compare_flutter_analyze.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_analyze.py)<br>[tests/tools/test_compare_flutter_test_failures.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_test_failures.py)<br>[tests/tools/test_extract_claude_structured_review.py](../../../../sources/memex-lab__memex/tests/tools/test_extract_claude_structured_review.py)<br>[tests/tools/test_pr_ai_review_report.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_ai_review_report.py)<br>[tests/tools/test_pr_policy_check.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_policy_check.py)<br>[tests/tools/test_pr_preflight_summary_comment.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_preflight_summary_comment.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 28 | [test/agent/knowledge_insight_prompt_test.dart](../../../../sources/memex-lab__memex/test/agent/knowledge_insight_prompt_test.dart)<br>[test/agent/knowledge_insight_run_context_test.dart](../../../../sources/memex-lab__memex/test/agent/knowledge_insight_run_context_test.dart)<br>[lib/ui/memory/widgets/memory_screen.dart](../../../../sources/memex-lab__memex/lib/ui/memory/widgets/memory_screen.dart)<br>[lib/ui/memory/view_models/memory_viewmodel.dart](../../../../sources/memex-lab__memex/lib/ui/memory/view_models/memory_viewmodel.dart)<br>[lib/ui/knowledge/widgets/knowledge_base_screen.dart](../../../../sources/memex-lab__memex/lib/ui/knowledge/widgets/knowledge_base_screen.dart)<br>[lib/ui/knowledge/widgets/knowledge_directory_page.dart](../../../../sources/memex-lab__memex/lib/ui/knowledge/widgets/knowledge_directory_page.dart)<br>[lib/ui/knowledge/widgets/knowledge_file_page.dart](../../../../sources/memex-lab__memex/lib/ui/knowledge/widgets/knowledge_file_page.dart)<br>[lib/ui/knowledge/widgets/knowledge_search_delegate.dart](../../../../sources/memex-lab__memex/lib/ui/knowledge/widgets/knowledge_search_delegate.dart) |
| spec | 5 | [lib/ui/core/themes/design_system.dart](../../../../sources/memex-lab__memex/lib/ui/core/themes/design_system.dart)<br>[lib/ui/core/cards/templates/entities/spec_sheet_card.dart](../../../../sources/memex-lab__memex/lib/ui/core/cards/templates/entities/spec_sheet_card.dart)<br>[docs/companion-agent-design.md](../../../../sources/memex-lab__memex/docs/companion-agent-design.md)<br>[docs/roadmap/github-project.md](../../../../sources/memex-lab__memex/docs/roadmap/github-project.md)<br>[assets/icons/emoji_design.svg](../../../../sources/memex-lab__memex/assets/icons/emoji_design.svg) |
| eval | 252 | [dart_test.yaml](../../../../sources/memex-lab__memex/dart_test.yaml)<br>[tests/__init__.py](../../../../sources/memex-lab__memex/tests/__init__.py)<br>[tests/tools/__init__.py](../../../../sources/memex-lab__memex/tests/tools/__init__.py)<br>[tests/tools/test_compare_flutter_analyze.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_analyze.py)<br>[tests/tools/test_compare_flutter_test_failures.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_test_failures.py)<br>[tests/tools/test_extract_claude_structured_review.py](../../../../sources/memex-lab__memex/tests/tools/test_extract_claude_structured_review.py)<br>[tests/tools/test_pr_ai_review_report.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_ai_review_report.py)<br>[tests/tools/test_pr_policy_check.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_policy_check.py) |
| security | 18 | [PRIVACY_POLICY_CN.md](../../../../sources/memex-lab__memex/PRIVACY_POLICY_CN.md)<br>[PRIVACY_POLICY.md](../../../../sources/memex-lab__memex/PRIVACY_POLICY.md)<br>[tests/tools/test_pr_policy_check.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_policy_check.py)<br>[test/agent/comment_agent_policy_live_test.dart](../../../../sources/memex-lab__memex/test/agent/comment_agent_policy_live_test.dart)<br>[test/agent/comment_agent_policy_test.dart](../../../../sources/memex-lab__memex/test/agent/comment_agent_policy_test.dart)<br>[test/agent/security/file_permission_manager_test.dart](../../../../sources/memex-lab__memex/test/agent/security/file_permission_manager_test.dart)<br>[scripts/pr_policy_check.py](../../../../sources/memex-lab__memex/scripts/pr_policy_check.py)<br>[lib/utils/permission_utils.dart](../../../../sources/memex-lab__memex/lib/utils/permission_utils.dart) |
| ci | 6 | [.github/workflows/android-daily-early.yml](../../../../sources/memex-lab__memex/.github/workflows/android-daily-early.yml)<br>[.github/workflows/discord-pr-merged.yml](../../../../sources/memex-lab__memex/.github/workflows/discord-pr-merged.yml)<br>[.github/workflows/pr-ai-review.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-ai-review.yml)<br>[.github/workflows/pr-flutter-quality.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-flutter-quality.yml)<br>[.github/workflows/pr-policy-preflight.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-policy-preflight.yml)<br>[.github/workflows/pr-preflight-summary.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-preflight-summary.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 5 | [AGENTS.md](../../../../sources/memex-lab__memex/AGENTS.md)<br>[CLAUDE.md](../../../../sources/memex-lab__memex/CLAUDE.md)<br>[GEMINI.md](../../../../sources/memex-lab__memex/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/memex-lab__memex/.github/copilot-instructions.md)<br>[.cursor/rules/memex.mdc](../../../../sources/memex-lab__memex/.cursor/rules/memex.mdc) |
| docs | 10 | [README_CN.md](../../../../sources/memex-lab__memex/README_CN.md)<br>[README.md](../../../../sources/memex-lab__memex/README.md)<br>[docs/companion-agent-design.md](../../../../sources/memex-lab__memex/docs/companion-agent-design.md)<br>[docs/companion-prompt-research-report.md](../../../../sources/memex-lab__memex/docs/companion-prompt-research-report.md)<br>[docs/memex-evaluation-framework.md](../../../../sources/memex-lab__memex/docs/memex-evaluation-framework.md)<br>[docs/pr-ai-review.en.md](../../../../sources/memex-lab__memex/docs/pr-ai-review.en.md)<br>[docs/pr-ai-review.zh.md](../../../../sources/memex-lab__memex/docs/pr-ai-review.zh.md)<br>[docs/pr-policy-preflight.en.md](../../../../sources/memex-lab__memex/docs/pr-policy-preflight.en.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 252 | [dart_test.yaml](../../../../sources/memex-lab__memex/dart_test.yaml)<br>[tests/__init__.py](../../../../sources/memex-lab__memex/tests/__init__.py)<br>[tests/tools/__init__.py](../../../../sources/memex-lab__memex/tests/tools/__init__.py)<br>[tests/tools/test_compare_flutter_analyze.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_analyze.py)<br>[tests/tools/test_compare_flutter_test_failures.py](../../../../sources/memex-lab__memex/tests/tools/test_compare_flutter_test_failures.py)<br>[tests/tools/test_extract_claude_structured_review.py](../../../../sources/memex-lab__memex/tests/tools/test_extract_claude_structured_review.py) |
| CI workflow | 6 | [.github/workflows/android-daily-early.yml](../../../../sources/memex-lab__memex/.github/workflows/android-daily-early.yml)<br>[.github/workflows/discord-pr-merged.yml](../../../../sources/memex-lab__memex/.github/workflows/discord-pr-merged.yml)<br>[.github/workflows/pr-ai-review.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-ai-review.yml)<br>[.github/workflows/pr-flutter-quality.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-flutter-quality.yml)<br>[.github/workflows/pr-policy-preflight.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-policy-preflight.yml)<br>[.github/workflows/pr-preflight-summary.yml](../../../../sources/memex-lab__memex/.github/workflows/pr-preflight-summary.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 18 | [PRIVACY_POLICY_CN.md](../../../../sources/memex-lab__memex/PRIVACY_POLICY_CN.md)<br>[PRIVACY_POLICY.md](../../../../sources/memex-lab__memex/PRIVACY_POLICY.md)<br>[tests/tools/test_pr_policy_check.py](../../../../sources/memex-lab__memex/tests/tools/test_pr_policy_check.py)<br>[test/agent/comment_agent_policy_live_test.dart](../../../../sources/memex-lab__memex/test/agent/comment_agent_policy_live_test.dart)<br>[test/agent/comment_agent_policy_test.dart](../../../../sources/memex-lab__memex/test/agent/comment_agent_policy_test.dart)<br>[test/agent/security/file_permission_manager_test.dart](../../../../sources/memex-lab__memex/test/agent/security/file_permission_manager_test.dart) |
| 에이전트 지시문 | 5 | [AGENTS.md](../../../../sources/memex-lab__memex/AGENTS.md)<br>[CLAUDE.md](../../../../sources/memex-lab__memex/CLAUDE.md)<br>[GEMINI.md](../../../../sources/memex-lab__memex/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/memex-lab__memex/.github/copilot-instructions.md)<br>[.cursor/rules/memex.mdc](../../../../sources/memex-lab__memex/.cursor/rules/memex.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/android-daily-early.yml`, `.github/workflows/discord-pr-merged.yml`, `.github/workflows/pr-ai-review.yml`.
2. agent/tool runtime 매핑: `AGENTS.md`, `tests/tools/__init__.py`, `tests/tools/test_compare_flutter_analyze.py`.
3. retrieval/memory/indexing 확인: `test/agent/knowledge_insight_prompt_test.dart`, `test/agent/knowledge_insight_run_context_test.dart`, `lib/ui/memory/widgets/memory_screen.dart`.
4. test/eval 파일로 동작 검증: `dart_test.yaml`, `tests/__init__.py`, `tests/tools/__init__.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Open source, local first AI journal app for iOS and Android. Capture text, photos, and voice — AI agents organize them i. 핵심 구조 신호는 Dart, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
