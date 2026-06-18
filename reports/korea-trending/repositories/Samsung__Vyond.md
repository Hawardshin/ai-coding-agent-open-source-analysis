# Samsung/Vyond

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/Vyond |
| local path | sources/Samsung__Vyond |
| HEAD | c4c2d0a19 |
| stars/forks | 13 / 3 |
| language | C |
| license | Apache-2.0 |
| pushedAt | 2026-06-11T07:23:03Z |
| trendScore / priorityScore | 76 / 221 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 107 | chipyard-1.11.0/software/embench/embench-iot/doc/README.md, chipyard-1.11.0/generators/testchipip/README.md, chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/README.md |
| Spec / doc-driven workflow | 38 | chipyard-1.11.0/sims/firesim/docs/README.md, chipyard-1.11.0/software/embench/embench-iot/doc/README.md, chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/README.md |
| AI agent / tool use | 13 | chipyard-1.11.0/software/embench/embench-iot/doc/README.md, chipyard-1.11.0/generators/rocket-chip/README.md, chipyard-1.11.0/sims/firesim/deploy/workloads/memcached-thread-imbalance/mutilate-loadgen-riscv-release/mutilate/README.md |
| Security / compliance | 12 | chipyard-1.11.0/software/embench/embench-iot/doc/README.md, README.md, tee/README.md |
| Korean language / Korea domain | 8 | worldguard/tests/README.md, chipyard-1.11.0/sims/firesim/sim/midas/README.md |
| Frontend / developer experience | 4 | chipyard-1.11.0/toolchains/libgloss/README.md, tee/sbi/opensbi/README.md, chipyard-1.11.0/sims/firesim/platforms/rhsresearch_nitefury_ii/NiteFury-and-LiteFury-firesim/spi-loader/linux/sw/lib/readme.txt |
| RAG / retrieval | 2 | chipyard-1.11.0/toolchains/libgloss/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++, PHP |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 376 |
| tests | 459 |
| ci/ops | 1 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Vyond |
| headings | Vyond / WorldGuard / Vyond-TEE |
| excerpt | Vyond Vyond is a Secure OS working on RISC V machine. The purpose of Vyond is to go beyond secure os, which originated from the word “Beyond”. As of now, we open a Security Monitor SM of Vyond TEE written in Rust and an implementation of SiFive's WorldGuard https //sifive.cdn.prismic.io/sifive/31b03c05 70fa 4dd8 bb06 127fdb4ba85a WorldGuard Technical Paper v2.4.pdf running on Chipyard ./chipyard 1.11.0/README.CHIPYARD.md . <img width="1202" alt="image" src="./docs/vyond public structure.png" WorldGuard WorldGuard WG is one of physical memory isolation techniques used in RISC V. This scheme provides a mechanism to tag transactions with an identification of the initiating context called a worl |


## 주요 파일

### Manifests

- chipyard-1.11.0/generators/rocket-chip/docs/README.md
- chipyard-1.11.0/sims/firesim/docs/Advanced-Usage/Manager/README.md
- chipyard-1.11.0/sims/firesim/docs/README.md
- chipyard-1.11.0/software/embench/embench-iot/doc/README.md
- chipyard-1.11.0/generators/rocket-chip/dependencies/hardfloat/berkeley-testfloat-3/README.md
- chipyard-1.11.0/generators/testchipip/README.md
- chipyard-1.11.0/README.md
- chipyard-1.11.0/sims/firesim/deploy/tests/README.md
- chipyard-1.11.0/sims/firesim/regression/aws-ec2-tests/README.md
- chipyard-1.11.0/toolchains/riscv-tools/riscv-isa-sim/arch_test_target/spike/README.md
- chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/bin/README.md
- chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/README.md
- chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/README.md
- enclave/README.md
- README.md
- tee/README.md
- worldguard/README.md
- worldguard/tests/README.md
- chipyard-1.11.0/dockerfiles/README.md
- chipyard-1.11.0/fpga/fpga-shells/README.md


### Spec / Docs / Prompt Artifacts

- chipyard-1.11.0/toolchains/riscv-tools/riscv-tests/debug/requirements.txt
- chipyard-1.11.0/sims/firesim/deploy/requirements.txt
- worldguard/docs/Design.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| chipyard-1.11.0 | 7452 |
| tee | 422 |
| worldguard | 106 |
| prebuilt | 7 |
| enclave | 4 |
| docs | 2 |
| COPYRIGHT | 1 |
| env.sh | 1 |
| LICENSE | 1 |
| LICENSE.Berkeley | 1 |
| LICENSE.SiFive | 1 |
| README.md | 1 |
| run-vyond | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 1853 |
| .scala | 1358 |
| .c | 1277 |
| .v | 1040 |
| [no-ext] | 362 |
| .s | 302 |
| .cc | 202 |
| .rst | 179 |
| .txt | 132 |
| .md | 129 |
| .py | 127 |
| .sh | 121 |
| .mk | 85 |
| .yaml | 51 |
| .sv | 48 |
| .json | 44 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
