# toss/react-simplikit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/react-simplikit |
| local path | sources/toss__react-simplikit |
| HEAD | f02a0b3 |
| stars/forks | 319 / 68 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-06-04T21:53:47Z |
| trendScore / priorityScore | 104 / 313 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 500 | AGENTS.md, README.md, packages/core/README.md |
| Spec / doc-driven workflow | 74 | AGENTS.md, CLAUDE.md, .github/copilot-instructions.md |
| Korean language / Korea domain | 45 | AGENTS.md, README.md, packages/core/README.md |
| AI agent / tool use | 42 | AGENTS.md, packages/plugin/README.md, .github/copilot-instructions.md |
| Security / compliance | 10 | CLAUDE.md, docs/hook-design-principles.md, .github/workflows/release.yml |
| RAG / retrieval | 5 | .pnp.loader.mjs, packages/core/src/hooks/useGeolocation/useGeolocation.spec.ts |
| LLM wiki / memory / graph | 2 | docs/react-hook-usage-patterns.md, packages/core/src/hooks/useDoubleClick/useDoubleClick.spec.tsx |
| Infra / observability | 1 | docs/mobile/intro.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, example-rich, frontend, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 502 |
| manifests | 23 |
| docs | 185 |
| tests | 78 |
| ci/ops | 4 |
| spec artifacts | 23 |
| agent instruction files | 21 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | react-simplikit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/react-simplikit/blob/main/LICENSE) [![codecov](https://codecov.io/gh/toss/react-simplikit/graph/badge.svg?token=RHVOZ3J3TU)](https://codecov.io/gh/toss/react-simplikit) [![Discord Badge](https://discord.com/api/guilds/1281071127052943361/widget.png?style=shield)](https://discord.gg/vGXbVjP2nY) |
| headings | react-simplikit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/react-simplikit/blob/main/LICENSE) [![codecov](https://codecov.io/gh/toss/react-simplikit/graph/badge.svg?token=RHVOZ3J3TU)](https://codecov.io/gh/toss/react-simplikit) [![Discord Badge](https://discord.com/api/guilds/1281071127052943361/widget.png?style=shield)](https://discord.gg/vGXbVjP2nY) / Packages / Features / Installation / Core utilities / Mobile web utilities / Quick Start / react-simplikit / @react-simplikit/mobile / Documentation |
| excerpt | ! react simplikit ./public/images/og.png react simplikit &middot; ! MIT License https //img.shields.io/badge/license MIT blue.svg https //github.com/toss/react simplikit/blob/main/LICENSE ! codecov https //codecov.io/gh/toss/react simplikit/graph/badge.svg?token=RHVOZ3J3TU https //codecov.io/gh/toss/react simplikit ! Discord Badge https //discord.com/api/guilds/1281071127052943361/widget.png?style=shield https //discord.gg/vGXbVjP2nY English 한국어 ./README ko kr.md A collection of lightweight, zero dependency React utilities for building robust applications. Packages Package Description Version react simplikit ./packages/core Universal hooks pure state/logic hooks platform independent ! npm ht |


## 주요 파일

### Manifests

- AGENTS.md
- .changeset/README.md
- README.md
- packages/core/README.md
- packages/mobile/README.md
- packages/plugin/README.md
- CLAUDE.md
- examples/shared/package.json
- examples/shared/tsconfig.json
- examples/with-nextjs/package.json
- examples/with-nextjs/tsconfig.json
- examples/with-vite/package.json
- examples/with-vite/tsconfig.json
- examples/with-vite/vite.config.ts
- package.json
- tsconfig.json
- .yarn/sdks/eslint/package.json
- .yarn/sdks/prettier/package.json
- .yarn/sdks/typescript/package.json
- packages/core/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- docs/ko/mobile/roadmap.md
- docs/mobile/roadmap.md
- .claude/agents/agent-code-reviewer.md
- .claude/agents/agent-doc-writer.md
- .claude/agents/agent-git-helper.md
- .claude/agents/agent-scaffolder.md
- .claude/skills/skill-test-writer/references/details.md
- .claude/skills/skill-test-writer/SKILL.md
- .claude/skills/skill-branch/references/details.md
- .claude/skills/skill-branch/SKILL.md
- .claude/skills/skill-code-reviewer/SKILL.md
- .claude/skills/skill-commit/references/details.md
- .claude/skills/skill-commit/SKILL.md
- .claude/skills/skill-development-workflow/references/details.md
- .claude/skills/skill-development-workflow/SKILL.md
- .claude/skills/skill-jsdoc-guide/references/details.md
- .claude/skills/skill-jsdoc-guide/SKILL.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- .claude/agents/agent-code-reviewer.md
- .claude/agents/agent-doc-writer.md
- .claude/agents/agent-git-helper.md
- .claude/agents/agent-scaffolder.md
- .claude/skills/skill-test-writer/references/details.md
- .claude/skills/skill-test-writer/SKILL.md
- .claude/skills/skill-branch/references/details.md
- .claude/skills/skill-branch/SKILL.md
- .claude/skills/skill-code-reviewer/SKILL.md
- .claude/skills/skill-commit/references/details.md
- .claude/skills/skill-commit/SKILL.md
- .claude/skills/skill-development-workflow/references/details.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 337 |
| examples | 39 |
| docs | 28 |
| .yarn | 21 |
| .claude | 18 |
| .github | 17 |
| .vitepress | 10 |
| .scripts | 5 |
| .changeset | 2 |
| .vscode | 2 |
| public | 2 |
| .agents | 1 |
| .claude-plugin | 1 |
| .cursorrules | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 201 |
| .md | 183 |
| .tsx | 42 |
| .json | 23 |
| [no-ext] | 11 |
| .js | 9 |
| .yml | 8 |
| .svg | 7 |
| .mts | 6 |
| .cjs | 4 |
| .css | 2 |
| .vue | 2 |
| .html | 1 |
| .mjs | 1 |
| .txt | 1 |
| .webmanifest | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
