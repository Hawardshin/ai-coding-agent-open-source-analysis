# toss/apps-in-toss-unity-sdk

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/apps-in-toss-unity-sdk |
| local path | sources/toss__apps-in-toss-unity-sdk |
| HEAD | 4c5a03d |
| stars/forks | 9 / 4 |
| language | C# |
| license |  |
| pushedAt | 2026-06-17T14:58:07Z |
| trendScore / priorityScore | 74 / 260 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 500 | README.md, sdk-runtime-generator~/tests/unit/README.md, CLAUDE.md |
| Korean language / Korea domain | 439 | README.md, sdk-runtime-generator~/tests/unit/README.md, CLAUDE.md |
| Infra / observability | 153 | CLAUDE.md, .github/workflows/beta-release.yml, .github/workflows/perf.yml |
| Security / compliance | 31 | .github/workflows/bulk-release.yml, .github/workflows/string-check.yml, docs/claude/sentry-known-issues.md |
| Spec / doc-driven workflow | 13 | CLAUDE.md, .github/workflows/beta-release.yml, .github/workflows/release.yml |
| LLM wiki / memory / graph | 5 | sdk-runtime-generator~/tests/unit/README.md, Tests~/E2E/SharedScripts/Runtime/PerformanceBenchmark.cs, Docs~/BuildProcess.md |
| AI agent / tool use | 4 | Editor/AITAutoUpdater.cs, Editor/AITDeprecationChecker.cs, Editor/AITNodeJSDownloader.cs |
| MCP / tool protocol | 2 | CLAUDE.md |
| Local LLM / on-device inference | 1 | .github/workflows/test-e2e.yml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, local-llm, localRuntime, mcp, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, .NET |
| capabilities | Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1076 |
| manifests | 30 |
| docs | 38 |
| tests | 558 |
| ci/ops | 14 |
| spec artifacts | 3 |
| agent instruction files | 3 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Apps in Toss Unity SDK |
| headings | Apps in Toss Unity SDK / 주요 기능 / 지원 Unity 버전 / 문서 / 베타 채널 (파일럿 전용) |
| excerpt | Apps in Toss Unity SDK Apps in Toss 플랫폼을 위한 Unity SDK입니다. Unity 프로젝트를 Apps in Toss 미니앱으로 변환하고 배포할 수 있습니다. 주요 기능 환경 최적화 Apps in Toss 환경에 최적화된 WebGL 빌드 자동 변환 및 배포 Unity 프로젝트를 미니앱으로 자동 변환하고 손쉽게 배포 Apps in Toss API 결제, 인증, 기기 정보, 위치, 권한 등 모든 Apps in Toss API 지원 지원 Unity 버전 최소 버전 Unity 2021.3 권장 버전 Unity 6 이상 Unity 2021.3 이후의 모든 버전을 지원합니다. 문서 문서 내용 시작하기 Docs~/GettingStarted.md 설치, 초기 설정, 첫 번째 빌드 API 사용 패턴 Docs~/APIUsagePatterns.md async/await, 에러 처리, Mock 브릿지 빌드 프로필 Docs~/BuildProfiles.md 빌드 설정, 환경 변수 빌드 커스터마이징 Docs~/BuildCustomization.md 템플릿 수정, React/TypeScript 로딩 화면 커스터마이징 Docs~/LoadingScreenCustomization.md 로딩 UI 변경 메트릭 Docs~/Metrics.md 성능 메트릭 확인 문제 해결 Docs~/Troubleshooting.md FAQ 및 트러블슈팅 Con |


## 주요 파일

### Manifests

- README.md
- sdk-runtime-generator~/tests/unit/README.md
- CLAUDE.md
- package.json
- sdk-runtime-generator~/package.json
- sdk-runtime-generator~/tests/unit/package.json
- sdk-runtime-generator~/tests/unit/tsconfig.json
- sdk-runtime-generator~/tsconfig.json
- Tests~/E2E/HeavySampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json
- Tests~/E2E/HeavySampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json
- Tests~/E2E/HeavySampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json
- Tests~/E2E/SampleUnityProject-2021.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json
- Tests~/E2E/SampleUnityProject-2022.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json
- Tests~/E2E/SampleUnityProject-6000.0/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json
- Tests~/E2E/SampleUnityProject-6000.2/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json
- Tests~/E2E/SampleUnityProject-6000.3/Assets/WebGLTemplates/AITTemplate/BuildConfig~/package.json
- Tests~/E2E/SharedScripts/package.json
- Tests~/E2E/tests/package.json
- WebGLTemplates/AITTemplate/BuildConfig~/package.json
- WebGLTemplates/AITTemplate/BuildConfig~/tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .claude/settings.json
- .claude/commands/generate.md


### Agent Instruction Files

- CLAUDE.md
- .claude/settings.json
- .claude/commands/generate.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| Tests~ | 532 |
| Runtime | 209 |
| Editor | 125 |
| sdk-runtime-generator~ | 107 |
| WebGLTemplates | 29 |
| docs | 22 |
| .github | 18 |
| Docs~ | 11 |
| .claude | 2 |
| .githooks | 2 |
| .gitignore | 1 |
| CLAUDE.md | 1 |
| CLAUDE.md.meta | 1 |
| docs.meta | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .meta | 428 |
| .cs | 167 |
| .asset | 159 |
| .jslib | 63 |
| .ts | 61 |
| .json | 37 |
| .md | 25 |
| [no-ext] | 21 |
| .html | 19 |
| .yml | 16 |
| .hbs | 11 |
| .asmdef | 10 |
| .xml | 10 |
| .example | 8 |
| .txt | 8 |
| .unity | 8 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
