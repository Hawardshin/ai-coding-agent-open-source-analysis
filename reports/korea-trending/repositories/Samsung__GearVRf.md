# Samsung/GearVRf

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/GearVRf |
| local path | sources/Samsung__GearVRf |
| HEAD | 2cf6e14 |
| stars/forks | 410 / 215 |
| language | C++ |
| license | Apache-2.0 |
| pushedAt | 2019-06-03T16:05:22Z |
| trendScore / priorityScore | 89 / 278 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 170 | GVRf/Extensions/3DCursor/IODevices/gearwear/Readme.txt, GVRf/Extensions/3DCursor/3DCursorLibrary/build.gradle, GVRf/Extensions/3DCursor/build.gradle |
| Security / compliance | 93 | GVRf/Framework/framework/src/main/jni/contrib/glm/readme.md, GVRf/Extensions/3DCursor/3DCursorLibrary/build.gradle, GVRf/Extensions/3DCursor/build.gradle |
| Frontend / developer experience | 16 | GVRf/Extensions/3DCursor/IODevices/gearwear/Readme.txt, GVRf/Framework/framework/src/main/jni/contrib/glm/readme.md, GVRf/Extensions/3DCursor/IODevices/gearwear/PhoneSide/gearinputprovider/build.gradle |
| MCP / tool protocol | 6 | GVRf/Extensions/3DCursor/IODevices/io_hand_template/src/main/java/com/sample/hand/template/HandTemplateDevice.java, GVRf/Extensions/3DCursor/IODevices/io_hand_template/src/main/java/com/sample/hand/template/IOFinger.java, GVRf/Extensions/3DCursor/IODevices/io_hand_template/src/main/java/com/sample/hand/template/IOJoint.java |
| AI agent / tool use | 5 | GVRf/Extensions/3DCursor/IODevices/gearwear/GearInputConsumer/js/network.js |
| Spec / doc-driven workflow | 5 | GVRf/Framework/framework/src/main/jni/contrib/glm/readme.md, GVRf/Framework/framework/src/main/java/org/gearvrf/debug/cli/ShellCommandParamSpec.java |
| LLM wiki / memory / graph | 4 | GVRf/Framework/framework/src/main/jni/contrib/glm/readme.md, GVRf/Extensions/3DCursor/3DCursorLibrary/src/main/java/org/gearvrf/io/cursor3d/MovableBehavior.java, GVRf/Extensions/3DCursor/3DCursorLibrary/src/main/java/org/gearvrf/io/cursor3d/SelectableBehavior.java |
| RAG / retrieval | 1 | GVRf/Extensions/3DCursor/IODevices/gearwear/PhoneSide/gearwearlibrary/src/main/java/com/samsung/mpl/gearwearlibrary/EventManager.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++ |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 2159 |
| manifests | 39 |
| docs | 3 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | The GearVR framework (GearVRf) / Project details can be found at www.gearvrf.org. / See https://github.com/gearvrf/GearVRf-Demos for sample apps. |
| excerpt | The GearVR framework GearVRf Project details can be found at www.gearvrf.org. See https //github.com/gearvrf/GearVRf Demos for sample apps. |


## 주요 파일

### Manifests

- README.md
- GVRf/tools/blender_addon/README.md
- GVRf/Extensions/3DCursor/3DCursorLibrary/build.gradle
- GVRf/Extensions/3DCursor/build.gradle
- GVRf/Extensions/3DCursor/IODevices/gearwear/build.gradle
- GVRf/Extensions/3DCursor/IODevices/gearwear/GearWearIoDevice/build.gradle
- GVRf/Extensions/3DCursor/IODevices/gearwear/PhoneSide/build.gradle
- GVRf/Extensions/3DCursor/IODevices/gearwear/PhoneSide/gearinputprovider/build.gradle
- GVRf/Extensions/3DCursor/IODevices/gearwear/PhoneSide/gearwearlibrary/build.gradle
- GVRf/Extensions/3DCursor/IODevices/io_hand_template/build.gradle
- GVRf/Extensions/3DCursor/IODevices/io_template/build.gradle
- GVRf/Extensions/build.gradle
- GVRf/Extensions/DebugWebServer/build.gradle
- GVRf/Extensions/DebugWebServer/debugwebserver/build.gradle
- GVRf/Extensions/gvrf-particlesystem/build.gradle
- GVRf/Extensions/gvrf-physics/build.gradle
- GVRf/Extensions/MixedReality/build.gradle
- GVRf/Extensions/MixedReality/src/main/java/org/gearvrf/mixedreality/build.gradle
- GVRf/Extensions/platformsdk_support/build.gradle
- GVRf/Extensions/ResonanceAudio/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| GVRf | 2143 |
| Installer | 12 |
| .gitignore | 1 |
| FETCH_HEAD | 1 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 673 |
| .h | 604 |
| .hpp | 162 |
| .cpp | 161 |
| .inl | 118 |
| .xml | 101 |
| .gradle | 50 |
| [no-ext] | 36 |
| .fsh | 32 |
| .cl | 26 |
| .vsh | 25 |
| .jar | 21 |
| .json | 20 |
| .properties | 20 |
| .txt | 18 |
| .bat | 13 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
