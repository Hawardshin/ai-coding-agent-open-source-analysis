# vespa-engine/vespa

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/vespa-engine/vespa |
| local path | sources/vespa-engine__vespa |
| HEAD | 4f988370 |
| stars/forks | 6962 / 720 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T22:07:36Z |
| trendScore / priorityScore | 141 / 366 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 174 | container-apache-http-client-bundle/README.md, client/js/app/README.md, container-test/README.md |
| Developer tools / DX | 31 | client/README.md, client/go/README.md, integration/schema-language-server/clients/intellij/README.md |
| Security / supply chain | 21 | security-utils/README.md, client/js/app/README.md, integration/logstash-plugins/logstash-output-vespa/README.md |
| Observability / evaluation | 20 | client/js/app/README.md, README.md, model-evaluation/pom.xml |
| Frontend / app framework | 17 | component/README.md, integration/tmgrammar/README.md, client/js/app/package.json |
| Data / ML platform | 5 | client/README.md, integration/logstash-plugins/logstash-output-vespa/README.md, integration/tmgrammar/README.md |
| Coding agent / software automation | 4 | integration/schema-language-server/README.md |
| MCP / agent interoperability | 1 | container-dev/pom.xml |
| RAG / retrieval / knowledge | 1 | integration/tmgrammar/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin, C/C++, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 53 |
| tests | 2616 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Table of contents / Background / Install / Usage / Contribute / Building / Development environment / Build Java modules / Run tests for shell scripts (on Mac) / License | <! Copyright Vespa.ai. Licensed under the terms of the Apache 2.0 license. See LICENSE in the project root. <picture <source media=" prefers color scheme dark " srcset="https //assets.vespa.ai/logos/Vespa logo green RGB.svg" <source media=" prefers color scheme light " srcset="https //assets.vespa.ai/logos/Vespa logo dark RGB.svg" <img alt=" Vespa" width="200" src="https //assets.vespa.ai/logos/Vespa logo dark RGB.svg" style="margin bottom 25px;" </picture <br/ <br/ ! Build status https //badge.buildkite.com/34f7cb35b91da4f929794c5fd7aa722fc15ca0224ad240270b.svg https //buildkite.com/vespaai/vespa engine vespa ! GitHub License https //img.shields.io/github/license/vespa engine/vespa ! Maven |


## Key Files

### Manifests

- client/README.md
- container-apache-http-client-bundle/README.md
- security-utils/README.md
- vespa-feed-client/README.md
- vespaclient-java/README.md
- client/go/README.md
- client/js/app/README.md
- integration/schema-language-server/clients/intellij/README.md
- container-test/README.md
- jdisc_core_test/README.md
- socket_test/README.md
- component/README.md
- config-lib/README.md
- configutil/README.md
- container-dependencies-enforcer/README.md
- container-dev/README.md
- container-documentapi/README.md
- container-messagebus/README.md
- container-onnxruntime/README.md
- container-search-and-docproc/README.md


### Spec / Docs / Prompt Artifacts

- integration/logstash-plugins/logstash-input-vespa/spec/inputs/vespa_spec.rb


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| vespalib | 1621 |
| vespajlib | 585 |
| documentapi | 476 |
| integration | 326 |
| document | 307 |
| searchlib | 306 |
| indexinglanguage | 232 |
| configserver | 230 |
| clustercontroller-core | 223 |
| searchsummary | 213 |
| vbench | 192 |
| model-evaluation | 178 |
| client | 176 |
| vdslib | 173 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 3396 |
| .cpp | 1258 |
| .h | 890 |
| [no-ext] | 651 |
| .txt | 513 |
| .dat | 178 |
| .xml | 169 |
| .sh | 99 |
| .tbf | 97 |
| .cfg | 91 |
| .sd | 83 |
| .hpp | 78 |
| .go | 74 |
| .results | 50 |
| .json | 46 |
| .md | 42 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
