# Spec-Driven and Requirements Source Deep Dive

Generated: 2026-06-18T14:52:44.529Z

스펙 드리븐/요구사항 주제의 로컬 source deep-scan 결과입니다.

## 요약

- 조사 단위: `spec-driven` 역할로 분류된 로컬 소스 레포 5개입니다.
- 포함 범위: requirements, ADR, design docs, spec artifacts, acceptance/test trace 경로를 중심으로 key source reference 38개를 추출했습니다.
- 탐색 방식: Deep source insight를 먼저 읽고, Key source references의 파일 링크를 따라가면 소스를 봐야만 알 수 있는 구현 단서를 확인할 수 있습니다.

## 총평

이 주제의 비교 포인트는 추상 기능명이 아니라 실제 파일 배치입니다. entrypoint, runtime, spec/test, CI/container, instruction 파일이 분리돼 있는지 또는 한곳에 섞여 있는지를 보면 재사용 가능한 구조와 후속 검증이 필요한 구조가 빠르게 구분됩니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |


## Topic Coverage

| Metric | Count |
| --- | ---: |
| Repositories | 5 |
| Key source references | 38 |
| Entrypoint path hits | 22 |
| Agent/runtime path hits | 18 |
| MCP path hits | 0 |
| Retrieval/vector path hits | 15 |
| Spec/requirements path hits | 48 |
| Eval/test path hits | 37 |
| Security/policy path hits | 1 |
| Instruction file path hits | 4 |

## Repository Source Findings

| Repository | Files / Dirs | Depth score | Source pattern | Key source references | Deep source insight | Risks | Links |
| --- | ---: | ---: | --- | --- | --- | --- | --- |
| [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 332 / 101 | 107 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness | [Video14_Agents_replaceability/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/roadmap.md) (spec)<br>[Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md) (spec)<br>[Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md) (spec)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md) (spec) | 스펙 드리븐/요구사항 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 spec=Video14_Agents_replaceability/specs/roadmap.md, Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md, Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | ci path not obvious | [report](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [source](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 37 / 20 | 99 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md) (spec)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md) (spec)<br>[skills/requirement-gathering/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/requirement-gathering/SKILL.md) (spec)<br>[scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh) (spec) | 스펙 드리븐/요구사항 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 spec=skills/spec-writer/SKILL.md, skills/spec-verification/SKILL.md, skills/requirement-gathering/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | entrypoint path not obvious | [report](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [source](../../../../sources/tesslio__spec-driven-development-tile) |
| [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 33 / 11 | 84 | agent/tool runtime, spec/docs-driven, eval/test harness | [phase2c/flow_b/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/design.md) (spec)<br>[phase2c/flow_b/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/requirements.md) (spec)<br>[phase2c/flow_a/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/design.md) (spec)<br>[phase2c/flow_a/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/requirements.md) (spec) | 스펙 드리븐/요구사항 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 spec=phase2c/flow_b/design.md, phase2c/flow_b/requirements.md, phase2c/flow_a/design.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | entrypoint path not obvious | [report](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [source](../../../../sources/FredAntB__Spec-Driven-Development) |
| [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 5 / 1 | 28 | Shell source tree | [README.md](../../../../sources/mreferre__ralph-loop-kiro-specs/README.md) (docs) | 스펙 드리븐/요구사항 관점에서 Shell source tree 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 1개 파일 경로를 직접 스캔해야 확인된다. | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [report](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [source](../../../../sources/mreferre__ralph-loop-kiro-specs) |
| [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 1 / 0 | 21 | general source tree | [README.md](../../../../sources/Engineering4AI__awesome-spec-driven-development/README.md) (docs) | 스펙 드리븐/요구사항 관점에서 general source tree 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 1개 파일 경로를 직접 스캔해야 확인된다. | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [report](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [source](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
