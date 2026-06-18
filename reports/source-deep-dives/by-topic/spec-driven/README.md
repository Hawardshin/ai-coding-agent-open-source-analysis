# 스펙 드리븐/요구사항 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

스펙 드리븐/요구사항 주제의 로컬 소스 심층 스캔 결과입니다.

## 요약

- 조사 단위: `spec-driven` 역할로 분류된 로컬 소스 레포 5개입니다.
- 포함 범위: 요구사항, ADR, 설계 문서, 스펙 산출물, acceptance/test trace 경로를 중심으로 key source reference 38개를 추출했습니다.
- 탐색 방식: 소스 인사이트를 먼저 읽고, 핵심 소스 참조의 파일 링크를 따라가면 소스를 봐야만 알 수 있는 구현 단서를 확인할 수 있습니다.

## 총평

이 주제의 비교 포인트는 추상 기능명이 아니라 실제 파일 배치입니다. entrypoint, runtime, spec/test, CI/container, instruction 파일이 분리돼 있는지 또는 한곳에 섞여 있는지를 보면 재사용 가능한 구조와 후속 검증이 필요한 구조가 빠르게 구분됩니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../../repositories/README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 주제 범위

| 항목 | 수 |
| --- | ---: |
| 레포 수 | 5 |
| 핵심 소스 참조 | 38 |
| Entrypoint 경로 hit | 22 |
| Agent/runtime 경로 hit | 18 |
| MCP 경로 hit | 0 |
| Retrieval/vector 경로 hit | 15 |
| Spec/requirements 경로 hit | 48 |
| Eval/test 경로 hit | 37 |
| Security/policy 경로 hit | 1 |
| Instruction 파일 경로 hit | 4 |

## 레포별 소스 인사이트

| 레포 | 파일/디렉터리 | 깊이 점수 | 소스 패턴 | 핵심 소스 참조 | 소스 인사이트 | 위험 신호 | 링크 |
| --- | ---: | ---: | --- | --- | --- | --- | --- |
| [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 332 / 101 | 95 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness | [Video14_Agents_replaceability/specs/roadmap.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/roadmap.md) (spec)<br>[Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md) (spec)<br>[Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md) (spec)<br>[Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files/Video14_Agents_replaceability/.claude/skills/feature-spec/SKILL.md) (spec) | 스펙 드리븐/요구사항 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 spec=Video14_Agents_replaceability/specs/roadmap.md, Video14_Agents_replaceability/specs/2026-04-07-about-us-content/requirements.md, Video14_Agents_replaceability/specs/2026-04-06-feedback-form/requirements.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | CI 경로가 명확하지 않음 | [딥다이브](../../repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [보고서](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [소스](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 37 / 20 | 87 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md) (spec)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md) (spec)<br>[skills/requirement-gathering/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/requirement-gathering/SKILL.md) (spec)<br>[scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh) (spec) | 스펙 드리븐/요구사항 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 spec=skills/spec-writer/SKILL.md, skills/spec-verification/SKILL.md, skills/requirement-gathering/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | entrypoint 경로가 명확하지 않음 | [딥다이브](../../repositories/3/tesslio__spec-driven-development-tile.md) / [보고서](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [소스](../../../../sources/tesslio__spec-driven-development-tile) |
| [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 33 / 11 | 72 | agent/tool runtime, spec/docs-driven, eval/test harness | [phase2c/flow_b/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/design.md) (spec)<br>[phase2c/flow_b/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/requirements.md) (spec)<br>[phase2c/flow_a/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/design.md) (spec)<br>[phase2c/flow_a/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/requirements.md) (spec) | 스펙 드리븐/요구사항 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 spec=phase2c/flow_b/design.md, phase2c/flow_b/requirements.md, phase2c/flow_a/design.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. | entrypoint 경로가 명확하지 않음 | [딥다이브](../../repositories/c/FredAntB__Spec-Driven-Development.md) / [보고서](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [소스](../../../../sources/FredAntB__Spec-Driven-Development) |
| [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 5 / 1 | 16 | Shell source tree | [README.md](../../../../sources/mreferre__ralph-loop-kiro-specs/README.md) (docs) | 스펙 드리븐/요구사항 관점에서 Shell source tree 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 1개 파일 경로를 직접 스캔해야 확인된다. | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [딥다이브](../../repositories/3/mreferre__ralph-loop-kiro-specs.md) / [보고서](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [소스](../../../../sources/mreferre__ralph-loop-kiro-specs) |
| [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 1 / 0 | 9 | general source tree | [README.md](../../../../sources/Engineering4AI__awesome-spec-driven-development/README.md) (docs) | 스펙 드리븐/요구사항 관점에서 general source tree 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 1개 파일 경로를 직접 스캔해야 확인된다. | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [딥다이브](../../repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [보고서](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [소스](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
