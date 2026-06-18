# brycewang-stanford/Awesome-Journal-Skills Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Journal-specific Claude Code/Codex skill packs covering mainstream journals — AER, QJE, Nature, Cell, 管理世界, 经济研究 & 200+ more — your fast track to getting published. ｜ 覆盖主流期刊的 Claude Code/Codex 期刊技能包，从选题、识别策略到表格规范与审稿回复全流程，助你快速发论文。

## 요약

- 조사 단위: `sources/brycewang-stanford__Awesome-Journal-Skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,511 files, 3,200 directories, depth score 101, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=World-Politics-Skills/skills/wp-writing-style/SKILL.md, World-Politics-Skills/skills/wp-workflow/SKILL.md, World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | brycewang-stanford/Awesome-Journal-Skills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Stata |
| Stars | 75 |
| Forks | 20 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/brycewang-stanford__Awesome-Journal-Skills](../../../../sources/brycewang-stanford__Awesome-Journal-Skills) |
| Existing report | [reports/global-trending/repositories/brycewang-stanford__Awesome-Journal-Skills.md](../../../global-trending/repositories/brycewang-stanford__Awesome-Journal-Skills.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5511 / 3200 |
| Max observed depth | 5 |
| Top directories | .github, .maintenance, AAAI-Skills, Academy-of-Management-Annals, Academy-of-Management-Journal, Academy-of-Management-Journal-Skills, Academy-of-Management-Review, Academy-of-Management-Review-Skills, Accounting-Organizations-and-Society, Accounting-Research-Skills, Administrative-Science-Quarterly, Administrative-Science-Quarterly-Skills, AEJ-Applied-Economics, AEJ-Economic-Policy, AEJ-Macroeconomics, AEJ-Microeconomics, AER-Insights, AER-skills, Agricultural-Systems-Skills, AISTATS-Skills |
| Top extensions | .md: 3094, .do: 807, .svg: 493, .png: 396, .py: 256, .json: 234, (none): 223, .jpg: 4, .yml: 2, .csv: 1, .tsv: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| AAAI-Skills | top-level component | 1 |
| Academy-of-Management-Annals | top-level component | 1 |
| Academy-of-Management-Journal | top-level component | 1 |
| Academy-of-Management-Journal-Skills | top-level component | 1 |
| Academy-of-Management-Review | top-level component | 1 |
| Academy-of-Management-Review-Skills | top-level component | 1 |
| Accounting-Organizations-and-Society | ci surface | 1 |
| Accounting-Research-Skills | top-level component | 1 |
| Administrative-Science-Quarterly | ci surface | 1 |
| Administrative-Science-Quarterly-Skills | ci surface | 1 |
| AEJ-Applied-Economics | top-level component | 1 |
| AEJ-Economic-Policy | top-level component | 1 |
| AEJ-Macroeconomics | top-level component | 1 |
| AEJ-Microeconomics | top-level component | 1 |
| AER-Insights | top-level component | 1 |
| AER-skills | top-level component | 1 |
| Agricultural-Systems-Skills | top-level component | 1 |


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
| agentRuntime | [World-Politics-Skills/skills/wp-writing-style/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-writing-style/SKILL.md) | agentRuntime signal |
| agentRuntime | [World-Politics-Skills/skills/wp-workflow/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-workflow/SKILL.md) | agentRuntime signal |
| agentRuntime | [World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md) | agentRuntime signal |
| agentRuntime | [World-Politics-Skills/skills/wp-topic-selection/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-topic-selection/SKILL.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/repo-audit.yml](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/.github/workflows/repo-audit.yml) | ci support |
| ci | [.github/workflows/sync-submodules.yml](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/.github/workflows/sync-submodules.yml) | ci support |
| eval | [tools/quality_scorecard.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/quality_scorecard.py) | eval support |
| eval | [NeurIPS-Skills/skills/neurips-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/NeurIPS-Skills/skills/neurips-artifact-evaluation/SKILL.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1952 | [World-Politics-Skills/skills/wp-writing-style/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-writing-style/SKILL.md)<br>[World-Politics-Skills/skills/wp-workflow/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-workflow/SKILL.md)<br>[World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md)<br>[World-Politics-Skills/skills/wp-topic-selection/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-topic-selection/SKILL.md)<br>[World-Politics-Skills/skills/wp-theory-building/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-theory-building/SKILL.md)<br>[World-Politics-Skills/skills/wp-tables-figures/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-tables-figures/SKILL.md)<br>[World-Politics-Skills/skills/wp-submission/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-submission/SKILL.md)<br>[World-Politics-Skills/skills/wp-review-process/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-review-process/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 11 | [Computer-Science-Conference-Skills/skills/text-retrieval-conference/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/text-retrieval-conference/SKILL.md)<br>[Computer-Science-Conference-Skills/skills/international-conference-on-principles-of-knowledge-representation-and-reasoning/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/international-conference-on-principles-of-knowledge-representation-and-reasoning/SKILL.md)<br>[Computer-Science-Conference-Skills/skills/international-conference-on-knowledge-capture/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/international-conference-on-knowledge-capture/SKILL.md)<br>[Computer-Science-Conference-Skills/skills/european-conference-on-machine-learning-and-principles-and-practice-of-knowledge-discovery/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/european-conference-on-machine-learning-and-principles-and-practice-of-knowledge-discovery/SKILL.md)<br>[Computer-Science-Conference-Skills/skills/european-conference-on-information-retrieval/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/european-conference-on-information-retrieval/SKILL.md)<br>[Computer-Science-Conference-Skills/skills/acm-sigkdd-conference-on-knowledge-discovery-and-data-mining/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/acm-sigkdd-conference-on-knowledge-discovery-and-data-mining/SKILL.md)<br>[Computer-Science-Conference-Skills/skills/acm-sigir-conference-on-research-and-development-in-information-retrieval/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/acm-sigir-conference-on-research-and-development-in-information-retrieval/SKILL.md)<br>[Computer-Science-Conference-Skills/skills/acm-sigir-conference-on-human-information-interaction-and-retrieval/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/acm-sigir-conference-on-human-information-interaction-and-retrieval/SKILL.md) |
| spec | 39 | [World-Politics-Skills/skills/wp-research-design/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-research-design/SKILL.md)<br>[Social-Psychology-Quarterly-Skills/skills/spq-research-design/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Social-Psychology-Quarterly-Skills/skills/spq-research-design/SKILL.md)<br>[Social-Forces-Skills/skills/sf-research-design/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Social-Forces-Skills/skills/sf-research-design/SKILL.md)<br>[Review-of-Financial-Studies-Skills/skills/rfs-empirical-design/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Review-of-Financial-Studies-Skills/skills/rfs-empirical-design/SKILL.md)<br>[Public-Opinion-Quarterly-Skills/skills/poq-survey-design-and-measurement/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Public-Opinion-Quarterly-Skills/skills/poq-survey-design-and-measurement/SKILL.md)<br>[Psychological-Science-Skills/skills/psci-study-design/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Psychological-Science-Skills/skills/psci-study-design/SKILL.md)<br>[NEJM-Skills/skills/nejm-study-design/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/NEJM-Skills/skills/nejm-study-design/SKILL.md)<br>[Lancet-Skills/skills/lancet-study-design/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Lancet-Skills/skills/lancet-study-design/SKILL.md) |
| eval | 17 | [tools/quality_scorecard.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/quality_scorecard.py)<br>[NeurIPS-Skills/skills/neurips-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/NeurIPS-Skills/skills/neurips-artifact-evaluation/SKILL.md)<br>[IJCAI-Skills/skills/ijcai-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/IJCAI-Skills/skills/ijcai-artifact-evaluation/SKILL.md)<br>[ICML-Skills/skills/icml-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/ICML-Skills/skills/icml-artifact-evaluation/SKILL.md)<br>[ICLR-Skills/skills/iclr-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/ICLR-Skills/skills/iclr-artifact-evaluation/SKILL.md)<br>[English-SocialScience-Journal-Skills/resources/_build-spec.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/English-SocialScience-Journal-Skills/resources/_build-spec.md)<br>[English-NaturalScience-Journal-Skills/resources/_build-spec.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/English-NaturalScience-Journal-Skills/resources/_build-spec.md)<br>[Computer-Science-Conference-Skills/skills/joint-international-conference-on-computational-linguistics-language-resources-and-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Computer-Science-Conference-Skills/skills/joint-international-conference-on-computational-linguistics-language-resources-and-evaluation/SKILL.md) |
| security | 80 | [World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md)<br>[tools/audit_repo.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/audit_repo.py)<br>[tools/clone_audit.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/clone_audit.py)<br>[tools/external_link_audit.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/external_link_audit.py)<br>[tools/root_entry_audit.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/root_entry_audit.py)<br>[tools/source_map_audit.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/source_map_audit.py)<br>[The-Econometrics-Journal-Skills/skills/ectj-replication-and-data-policy/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/The-Econometrics-Journal-Skills/skills/ectj-replication-and-data-policy/SKILL.md)<br>[Review-of-Finance-Skills/skills/rof-replication-and-data-policy/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Review-of-Finance-Skills/skills/rof-replication-and-data-policy/SKILL.md) |
| ci | 2 | [.github/workflows/repo-audit.yml](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/.github/workflows/repo-audit.yml)<br>[.github/workflows/sync-submodules.yml](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/.github/workflows/sync-submodules.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/CLAUDE.md) |
| docs | 649 | [README.en.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/README.en.md)<br>[README.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/README.md)<br>[Zuzhi-Yu-Guanli/README.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Zuzhi-Yu-Guanli/README.md)<br>[Zhongyang-Caijing-Daxue-Xuebao/README.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Zhongyang-Caijing-Daxue-Xuebao/README.md)<br>[Zhongnan-Caijing-Zhengfa-Daxue-Xuebao/README.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Zhongnan-Caijing-Zhengfa-Daxue-Xuebao/README.md)<br>[Zhongguo-Xingzheng-Guanli/README.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Zhongguo-Xingzheng-Guanli/README.md)<br>[Zhongguo-Ruan-Kexue/README.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Zhongguo-Ruan-Kexue/README.md)<br>[Zhongguo-Nongcun-Jingji/README.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/Zhongguo-Nongcun-Jingji/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [tools/quality_scorecard.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/quality_scorecard.py)<br>[NeurIPS-Skills/skills/neurips-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/NeurIPS-Skills/skills/neurips-artifact-evaluation/SKILL.md)<br>[IJCAI-Skills/skills/ijcai-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/IJCAI-Skills/skills/ijcai-artifact-evaluation/SKILL.md)<br>[ICML-Skills/skills/icml-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/ICML-Skills/skills/icml-artifact-evaluation/SKILL.md)<br>[ICLR-Skills/skills/iclr-artifact-evaluation/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/ICLR-Skills/skills/iclr-artifact-evaluation/SKILL.md)<br>[English-SocialScience-Journal-Skills/resources/_build-spec.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/English-SocialScience-Journal-Skills/resources/_build-spec.md) |
| CI workflows | 2 | [.github/workflows/repo-audit.yml](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/.github/workflows/repo-audit.yml)<br>[.github/workflows/sync-submodules.yml](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/.github/workflows/sync-submodules.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 80 | [World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md)<br>[tools/audit_repo.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/audit_repo.py)<br>[tools/clone_audit.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/clone_audit.py)<br>[tools/external_link_audit.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/external_link_audit.py)<br>[tools/root_entry_audit.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/root_entry_audit.py)<br>[tools/source_map_audit.py](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/tools/source_map_audit.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/brycewang-stanford__Awesome-Journal-Skills/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `World-Politics-Skills/skills/wp-writing-style/SKILL.md`, `World-Politics-Skills/skills/wp-workflow/SKILL.md`, `World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md`.
2. Map agent/tool runtime through: `World-Politics-Skills/skills/wp-writing-style/SKILL.md`, `World-Politics-Skills/skills/wp-workflow/SKILL.md`, `World-Politics-Skills/skills/wp-transparency-and-data-policy/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `Computer-Science-Conference-Skills/skills/text-retrieval-conference/SKILL.md`, `Computer-Science-Conference-Skills/skills/international-conference-on-principles-of-knowledge-representation-and-reasoning/SKILL.md`, `Computer-Science-Conference-Skills/skills/international-conference-on-knowledge-capture/SKILL.md`.
4. Verify behavior through test/eval files: `tools/quality_scorecard.py`, `NeurIPS-Skills/skills/neurips-artifact-evaluation/SKILL.md`, `IJCAI-Skills/skills/ijcai-artifact-evaluation/SKILL.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Journal specific Claude Code/Codex skill packs covering mainstream journals — AER, QJE, Nature, Cell, 管理世界, 经济研究 & 200+ . 핵심 구조 신호는 Stata, README.md, CLAUDE.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
