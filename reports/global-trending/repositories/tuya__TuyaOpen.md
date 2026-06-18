# tuya/TuyaOpen

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/tuya/TuyaOpen |
| local path | sources/tuya__TuyaOpen |
| HEAD | a245349 |
| stars/forks | 1589 / 270 |
| language | C |
| license |  |
| pushedAt | 2026-06-17T10:59:12Z |
| trendScore / priorityScore | 145 / 388 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 60 | examples/peripherals/adc/README.md, examples/peripherals/pwm/README.md, AGENTS.md |
| Security / supply chain | 21 | examples/wifi/scan/README.md, README.md, src/libtls/mbedtls-3.1.0/3rdparty/everest/README.md |
| Observability / evaluation | 19 | examples/ble/ble_peripher/README.md, examples/graphics/lvgl_camera/README.md, examples/peripherals/adc/README.md |
| AI agent / orchestration | 13 | examples/protocols/http_client/README.md, examples/protocols/https_client/README.md, AGENTS.md |
| Cloud native / infrastructure | 13 | examples/wifi/ap/README.md, src/libtls/mbedtls-3.1.0/programs/README.md, src/libtls/mbedtls-3.1.0/tests/docker/bionic/Dockerfile |
| Database / data infrastructure | 5 | examples/system/os_kv/README.md, src/libtls/mbedtls-3.1.0/tests/data_files/Makefile |
| Coding agent / software automation | 3 | AGENTS.md, README.md |
| RAG / retrieval / knowledge | 3 | src/libtls/mbedtls-3.1.0/README.md |
| MCP / agent interoperability | 2 | AGENTS.md |
| Local LLM / inference | 1 | src/micropython/mpy/tools/mpremote/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 299 |
| tests | 874 |
| ci/ops | 5 |
| spec artifacts | 13 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Documentation | Overview / 🚀 With TuyaOpen, you can: / System Components / Detailed SDK Framework Stacks / Supported Target Platforms / Documentation / License / Contribute Code / Disclaimer and Liability Clause / Related Links | <p align="center" <img src="https //images.tuyacn.com/fe static/docs/img/c128362b eb25 4512 b5f2 ad14aae2395c.jpg" width="100%" </p <p align="center" <a href="https //tuyaopen.ai/docs/quick start/enviroment setup" Quick Start</a · <a href="https //developer.tuya.com/en/docs/iot/ai agent management?id=Kdxr4v7uv4fud" Tuya AI Agent</a · <a href="https //tuyaopen.ai/docs/about tuyaopen" Documentation</a · <a href="https //tuyaopen.ai/docs/hardware specific/t5 ai board/overview t5 ai board" Hardware Resource</a </p <p align="center" <a href="https //github.com/tuya/TuyaOpen/actions/workflows/check build apps.yml" target=" blank" <img src="https //github.com/tuya/TuyaOpen/actions/workflows/check b |


## Key Files

### Manifests

- examples/protocols/http_client/README.md
- examples/protocols/https_client/README.md
- examples/protocols/mqtt_client/README.md
- examples/protocols/tcp_client/README.md
- examples/ble/ble_central/README.md
- examples/ble/ble_peripher/README.md
- examples/e-Paper/README.md
- examples/graphics/lvgl_camera/README.md
- examples/graphics/lvgl_demo/README.md
- examples/graphics/lvgl_gif/README.md
- examples/peripherals/adc/README.md
- examples/peripherals/gpio/README.md
- examples/peripherals/joystick/README.md
- examples/peripherals/pwm/README.md
- examples/peripherals/spi/README.md
- examples/peripherals/timer/README.md
- examples/peripherals/touch/README.md
- examples/peripherals/uart/README.md
- examples/peripherals/watchdog/README.md
- examples/protocols/http_service_portal/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- src/libtls/mbedtls-3.1.0/docs/architecture/Makefile
- src/libtls/mbedtls-3.1.0/docs/architecture/mbed-crypto-storage-specification.md
- src/libtls/mbedtls-3.1.0/docs/architecture/testing/psa-storage-format-testing.md
- tools/requirements.txt
- src/micropython/mpy/tools/mpremote/requirements.txt
- src/libtls/mbedtls-3.1.0/docs/architecture/testing/driver-interface-test-strategy.md
- src/libtls/mbedtls-3.1.0/docs/architecture/testing/invasive-testing.md
- src/libtls/mbedtls-3.1.0/docs/architecture/testing/test-framework.md
- src/liblvgl/v8/lvgl/docs/ROADMAP.md
- src/libtls/mbedtls-3.1.0/docs/architecture/alternative-implementations.md
- src/libtls/mbedtls-3.1.0/docs/architecture/psa-crypto-implementation-structure.md
- src/libtls/mbedtls-3.1.0/docs/architecture/tls13-support.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 6637 |
| examples | 941 |
| tools | 186 |
| apps | 168 |
| boards | 38 |
| tests | 8 |
| .github | 4 |
| docs | 2 |
| .clang-format | 1 |
| .clang-format-ignore | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| action.yml | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .c | 4073 |
| .h | 1742 |
| .md | 245 |
| .cc | 207 |
| .txt | 205 |
| .crt | 200 |
| .config | 168 |
| .pem | 142 |
| .py | 137 |
| [no-ext] | 136 |
| .data | 93 |
| .sh | 77 |
| .der | 69 |
| .function | 67 |
| .vcxproj | 54 |
| .key | 48 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
