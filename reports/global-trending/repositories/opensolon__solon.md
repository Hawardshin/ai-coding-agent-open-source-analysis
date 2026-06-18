# opensolon/solon

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/opensolon/solon |
| local path | sources/opensolon__solon |
| HEAD | 1aedef9 |
| stars/forks | 2749 / 261 |
| language | Java |
| license |  |
| pushedAt | 2026-06-16T12:07:43Z |
| trendScore / priorityScore | 142 / 307 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 42 | solon-projects/solon-web/solon-sessionstate-jwt/README.md, solon-projects/solon-security/solon-security-auth/pom.xml, solon-projects/solon-security/solon-security-sm/pom.xml |
| Database / data infrastructure | 15 | solon-projects/solon-data/solon-cache-jedis/README.md, solon-projects/solon-data/solon-cache-redisson/README.md, solon-projects/solon-web/solon-sessionstate-jedis/README.md |
| Cloud native / infrastructure | 8 | __release/nami-bundle/README.md, solon-projects/nami/README.md, __test/pom.xml |
| Coding agent / software automation | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | coding-agent, database, databaseRuntime, example-rich, frontendStack, infra, llm-app, mcp, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin, Ruby |
| capabilities | Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3385 |
| manifests | 40 |
| docs | 140 |
| tests | 1170 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Features: / Main code repository / Ecosystem Architecture Diagram: / Official website and related examples, cases： / Special thanks to JetBrains for supporting open-source projects： | <h1 align="center" style="text align center;" <img src="solon icon.png" width="128" / <br / Solon </h1 <p align="center" <strong Java enterprise application development framework for full scenario</strong <br/ <strong Restrained, Efficient, Open</strong </p <p align="center" <a href="https //solon.noear.org/" https //solon.noear.org</a </p <p align="center" <a href="https //deepwiki.com/opensolon/solon" <img src="https //deepwiki.com/badge.svg" alt="Ask DeepWiki" </a <a target=" blank" href="https //central.sonatype.com/search?q=org.noear%3Asolon parent" <img src="https //img.shields.io/maven central/v/org.noear/solon.svg?label=Maven%20Central" alt="Maven" / </a <a target=" blank" href="LICE |


## Key Files

### Manifests

- solon-projects/solon-security/solon-security-validation/README.md
- solon-projects/solon-security/solon-security-vault/README.md
- solon-projects/solon-security/solon-security-web/README.md
- __test/README.md
- __release/README.md
- README.md
- solon-projects/README.md
- solon-projects/solon-server/solon-server-feathttp/src/test/resources/ssl_jks/README.md
- solon-projects/solon-server/solon-server-grizzly/src/test/resources/ssl_jks/README.md
- solon-projects/solon-server/solon-server-jdkhttp/src/test/resources/ssl_jks/README.md
- solon-projects/solon-server/solon-server-jetty/src/test/resources/ssl_jks/README.md
- solon-projects/solon-server/solon-server-smarthttp/src/test/resources/ssl_jks/README.md
- solon-projects/solon-server/solon-server-tomcat/src/test/resources/ssl_jks/README.md
- solon-projects/solon-server/solon-server-undertow/src/test/resources/ssl_jks/README.md
- solon-projects/solon-server/solon-server-vertx/src/test/resources/ssl_jks/README.md
- __hatch/solon-server-nettyhttp/README.md
- __release/nami-bundle/README.md
- solon-projects/nami/README.md
- solon-projects/solon-base/solon-hotplug/README.md
- solon-projects/solon-base/solon-i18n/README.md


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| solon-projects | 2442 |
| __test | 494 |
| solon | 352 |
| __hatch | 37 |
| __release | 19 |
| .gitee | 5 |
| .github | 5 |
| solon-shortcuts | 4 |
| style | 4 |
| solon-parent | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 2646 |
| .xml | 159 |
| [no-ext] | 141 |
| .yml | 109 |
| .properties | 106 |
| .md | 90 |
| .json | 32 |
| .jks | 16 |
| .htm | 10 |
| .cfg | 8 |
| .crt | 8 |
| .html | 8 |
| .sh | 8 |
| .txt | 5 |
| .ftl | 4 |
| .jsp | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
