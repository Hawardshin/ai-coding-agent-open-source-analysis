# 보안/거버넌스/안전

생성 시각: 2026-06-18T15:43:31.355Z

보안/거버넌스/안전 역할군에 속한 repository-level insight 목록입니다.

## 요약

- 조사 단위: `security-governance` 역할로 분류된 레포 묶음입니다.
- 포함 범위: 10개 레포, 보고서 링크 10, 로컬 소스 10.
- 탐색 방식: Insight로 읽을 이유를 확인하고, Risks로 후속 검증 포인트를 본 뒤 report/source 링크로 들어가면 됩니다.

## 총평

이 역할군은 같은 문제를 서로 다른 구현 방식으로 푸는 레포들을 비교하기 좋습니다. 성숙도와 근거 수준이 높은 항목은 참고 구현으로, 관찰 또는 메타데이터만 있는 항목은 트렌드 후보로 읽는 편이 적절합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../README.md) | 레포별 총평과 역할군 페이지. |
| [소스 딥다이브](../../../source-deep-dives/README.md) | 로컬 클론에서 뽑은 파일 경로 근거. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [근거 카테고리](../../../categories/README.md) | 오픈소스, 논문, 발표, 참고자료의 artifact 분류. |


## 레포별 인사이트

| 레포 | 역할 | Stars | 성숙도 | 근거 수준 | 인사이트 | 위험 신호 | 링크 |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) | 보안/거버넌스/안전 | 4485 | 안정 | 소스+보고서 | 보안/거버넌스/안전 관점에서 Read only developer endpoint scanner for on disk package, extension, and developer tool metadata, built to check exposur. 핵심 구조 신호는 Go, go.mod, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요 | [보고서](../../../global-trending/repositories/perplexityai__bumblebee.md) / [소스](../../../../sources/perplexityai__bumblebee) |
| [line/line-fido2-server](https://github.com/line/line-fido2-server) | 보안/거버넌스/안전 | 580 | 안정 | 소스+보고서 | 보안/거버넌스/안전 관점에서 FIDO2 WebAuthn server officially certified by FIDO Alliance and Relying Party examples.. 핵심 구조 신호는 Java, docker-compose.yml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/line__line-fido2-server.md) / [소스](../../../../sources/line__line-fido2-server) |
| [toss/use-funnel](https://github.com/toss/use-funnel) | 보안/거버넌스/안전 | 567 | 안정 | 소스+보고서 | 보안/거버넌스/안전 관점에서 A powerful and safe step by step state management library at React. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/toss__use-funnel.md) / [소스](../../../../sources/toss__use-funnel) |
| [Samsung/CredSweeper](https://github.com/Samsung/CredSweeper) | 보안/거버넌스/안전 | 204 | 안정 | 소스+보고서 | 보안/거버넌스/안전 관점에서 CredSweeper is a tool to detect credentials in any directories or files. CredSweeper could help users to detect unwanted. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/Samsung__CredSweeper.md) / [소스](../../../../sources/Samsung__CredSweeper) |
| [line/garr](https://github.com/line/garr) | 보안/거버넌스/안전 | 371 | 안정 | 소스+보고서 | 보안/거버넌스/안전 관점에서 Collection of high performance, thread safe, lock free go data structures. 핵심 구조 신호는 Go, go.mod, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/line__garr.md) / [소스](../../../../sources/line__garr) |
| [daangn/graplix](https://github.com/daangn/graplix) | 보안/거버넌스/안전 | 92 | 안정 | 소스+보고서 | 보안/거버넌스/안전 관점에서 Authorization framework for implementing Relation based Access Control ReBAC with the Resolver Inspired by GraphQL. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/daangn__graplix.md) / [소스](../../../../sources/daangn__graplix) |
| [naver/disco](https://github.com/naver/disco) | 보안/거버넌스/안전 | 75 | 초기 | 소스+보고서 | 보안/거버넌스/안전 관점에서 A Toolkit for Distributional Control of Generative Models. 핵심 구조 신호는 Python, requirements.txt, Makefile, README.md, LICENSE, torch이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다. | CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/naver__disco.md) / [소스](../../../../sources/naver__disco) |
| [line/seed](https://github.com/line/seed) | 보안/거버넌스/안전 | 61 | 초기 | 소스+보고서 | 보안/거버넌스/안전 관점에서 LINE’s first custom typeface, reflecting the brand’s identity of convenience and friendliness with a unique, geometry ba. 핵심 구조 신호는 Makefile, requirements.txt, README.md, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다. | 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/line__seed.md) / [소스](../../../../sources/line__seed) |
| [line/webauthn-kotlin](https://github.com/line/webauthn-kotlin) | 보안/거버넌스/안전 | 24 | 초기 | 소스+보고서 | 보안/거버넌스/안전 관점에서 WebAuthn Kotlin is an open source toolkit for secure, password less authentication in mobile apps. Developed in Kotlin, . 핵심 구조 신호는 Kotlin, build.gradle, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다. | 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요 | [보고서](../../../korea-trending/repositories/line__webauthn-kotlin.md) / [소스](../../../../sources/line__webauthn-kotlin) |
| [guardrails-ai/guardrails](https://github.com/guardrails-ai/guardrails) | 보안/거버넌스/안전 | 0 | 안정 | 심층 소스+보고서 | 보안/거버넌스/안전 관점에서 Local clone structure analysis 552 files, 98 directories.. 핵심 구조 신호는 pyproject.toml, Makefile, README.md, LICENSE, openai, anthropic이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다. | 라이선스 메타데이터 없음 | [보고서](../../../clone-structures/guardrails-ai__guardrails.md) / [소스](../../../../sources/guardrails-ai__guardrails) |
