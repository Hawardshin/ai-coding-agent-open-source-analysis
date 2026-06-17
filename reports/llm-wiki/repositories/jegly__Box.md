# jegly/Box 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/jegly__Box |
| remote | https://github.com/jegly/Box |
| HEAD | f279efe (2026-06-17) Update README.md |
| branch | main |
| groups | llm-wiki-100 |
| files | 591 |
| dirs | 161 |
| stack | unknown/mixed |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Download`, `Install via Obtainium`, `Changelog v1.0.7 – v3.1.0`, `What is Box?`, `Box: On-Device AI. No Cloud. No Compromise.`, `Screenshots`, `Core Features`, `Local Chat`, `Local Diffusion`, `Image Upscaling (Super-Resolution)`, `Voice Input`, `Text-to-Speech`, `Free Talk — Real-Time Voice Conversation`, `Vision Talk — Live Camera + Voice AI`, `Vision AI`, `Biometric App Lock`, `Encrypted Chat History`, `NPU / TPU Acceleration`

> <p align="center" <img src="https //raw.githubusercontent.com/jegly/Box/main/images/b02.svg" alt="Box Header" width="80%" / </p [ ]() [ ]() FF79C6.svg) [ ]() [ ]() [ ]() [ ]() [ ]() [ ]() If this project helped you, please ⭐️ star it to help others find it. Download Note If you're using a custom ROM (LineageOS, GrapheneOS, CalyxOS), download the custom rom support APK from the latest release instead. Install via Obtainium 1. Open Obtainium on your phone 2. Tap the + button 3. Paste this repo URL https //github.com/jegly/Box 4. Tap Add Recommended for most users Main version Which version should I install? Version For Main Stock Android (Pixel, Samsung, etc.) Custom ROM GrapheneOS, LineageOS, CalyxOS — no Google services The in app updater is also available in Settings Setup steps 1. Tap the badge for your version above — this opens Obtainium with the repo pre filled 2. Under APK filter r

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| Android | dir |
| Bug_Reporting_Guide.md | file |
| CONTRIBUTING.md | file |
| DEVELOPMENT.md | file |
| Function_Calling_Guide.md | file |
| images | dir |
| LICENSE | file |
| model_allowlist.json | file |
| model_allowlists | dir |
| README.md | file |
| skills | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| Android/ | 366 |
| skills/ | 127 |
| images/ | 73 |
| model_allowlists/ | 11 |
| (root) | 9 |
| .github/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| skills/ | 127 | preferred |
| Android/ | 366 | large |
| Android/src/ | 364 | large |
| Android/src/app/ | 332 | large |
| skills/featured/ | 106 | large |
| skills/featured/virtual-piano/ | 93 | large |
| images/ | 73 | large |
| skills/built-in/ | 20 | large |
| images/box_screenshots/ | 16 | large |
| Android/src/smollm/ | 11 | large |
| model_allowlists/ | 11 | large |
| skills/featured/mood-music/ | 7 | large |
| Android/src/stablediffusion/ | 6 | large |
| skills/featured/restaurant-roulette/ | 6 | large |
| .github/ | 5 | large |
| Android/src/whisper/ | 5 | large |
| Android/src/gradle/ | 4 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| skills/built-in/calculate-hash/ | 3 | large |
| skills/built-in/mood-tracker/ | 3 | large |
| skills/built-in/text-spinner/ | 3 | large |
| skills/built-in/translator/ | 3 | large |
| skills/built-in/interactive-map/ | 2 | large |
| skills/built-in/qr-code/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `Android/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `model_allowlists/README.md`
- `skills/README.md`
- `skills/featured/mood-music/README.md`
- `skills/featured/restaurant-roulette/README.md`
- `skills/featured/virtual-piano/README.md`

### 에이전트 지침 후보

- `.github/DISCUSSION_TEMPLATE/skills.yml`
- `Android/src/app/src/main/assets/skills/budget-tracker/SKILL.md`
- `Android/src/app/src/main/assets/skills/budget-tracker/assets/dashboard.html`
- `Android/src/app/src/main/assets/skills/budget-tracker/scripts/index.html`
- `Android/src/app/src/main/assets/skills/calculate-hash/SKILL.md`
- `Android/src/app/src/main/assets/skills/calculate-hash/scripts/index.html`
- `Android/src/app/src/main/assets/skills/calculate-hash/scripts/index.js`
- `Android/src/app/src/main/assets/skills/interactive-map/SKILL.md`
- `Android/src/app/src/main/assets/skills/interactive-map/scripts/index.html`
- `Android/src/app/src/main/assets/skills/mood-tracker/SKILL.md`
- `Android/src/app/src/main/assets/skills/mood-tracker/assets/dashboard.html`
- `Android/src/app/src/main/assets/skills/mood-tracker/scripts/index.html`
- `Android/src/app/src/main/assets/skills/password-generator/SKILL.md`
- `Android/src/app/src/main/assets/skills/password-generator/assets/display.html`
- `Android/src/app/src/main/assets/skills/password-generator/scripts/index.html`
- `Android/src/app/src/main/assets/skills/qr-code/SKILL.md`
- `Android/src/app/src/main/assets/skills/qr-code/scripts/index.html`
- `Android/src/app/src/main/assets/skills/query-wikipedia/SKILL.md`
- `Android/src/app/src/main/assets/skills/query-wikipedia/scripts/index.html`
- `Android/src/app/src/main/assets/skills/send-email/SKILL.md`
- `Android/src/app/src/main/assets/skills/translator/SKILL.md`
- `Android/src/app/src/main/assets/skills/translator/assets/display.html`
- `Android/src/app/src/main/assets/skills/translator/scripts/index.html`
- `Android/src/app/src/main/proto/skill.proto`
- `Android/src/app/src/main/res/drawable/skill.xml`
- `skills/README.md`
- `skills/built-in/calculate-hash/SKILL.md`
- `skills/built-in/calculate-hash/scripts/index.html`
- `skills/built-in/calculate-hash/scripts/index.js`
- `skills/built-in/interactive-map/SKILL.md`
- `skills/built-in/interactive-map/scripts/index.html`
- `skills/built-in/kitchen-adventure/SKILL.md`
- `skills/built-in/mood-tracker/SKILL.md`
- `skills/built-in/mood-tracker/assets/dashboard.html`
- `skills/built-in/mood-tracker/scripts/index.html`
- `skills/built-in/qr-code/SKILL.md`
- `skills/built-in/qr-code/scripts/index.html`
- `skills/built-in/query-wikipedia/SKILL.md`
- `skills/built-in/query-wikipedia/scripts/index.html`
- `skills/built-in/send-email/SKILL.md`
- `skills/built-in/text-spinner/SKILL.md`
- `skills/built-in/text-spinner/assets/webview.html`
- `skills/built-in/text-spinner/scripts/index.html`
- `skills/built-in/translator/SKILL.md`
- `skills/built-in/translator/assets/display.html`
- `skills/built-in/translator/scripts/index.html`
- `skills/featured/mood-music/README.md`
- `skills/featured/mood-music/SKILL.md`
- `skills/featured/mood-music/assets/.gitkeep`
- `skills/featured/mood-music/assets/webview.html`
- `skills/featured/mood-music/scripts/.gitkeep`
- `skills/featured/mood-music/scripts/get_genres.html`
- `skills/featured/mood-music/scripts/index.html`
- `skills/featured/restaurant-roulette/README.md`
- `skills/featured/restaurant-roulette/SKILL.md`
- `skills/featured/restaurant-roulette/assets/ui.html`
- `skills/featured/restaurant-roulette/assets/webview.html`
- `skills/featured/restaurant-roulette/scripts/index.html`
- `skills/featured/restaurant-roulette/scripts/index.js`
- `skills/featured/virtual-piano/README.md`
- `skills/featured/virtual-piano/SKILL.md`
- `skills/featured/virtual-piano/assets/assets/1.mp3`
- `skills/featured/virtual-piano/assets/assets/10.mp3`
- `skills/featured/virtual-piano/assets/assets/11.mp3`
- `skills/featured/virtual-piano/assets/assets/12.mp3`
- `skills/featured/virtual-piano/assets/assets/13.mp3`
- `skills/featured/virtual-piano/assets/assets/14.mp3`
- `skills/featured/virtual-piano/assets/assets/15.mp3`
- `skills/featured/virtual-piano/assets/assets/16.mp3`
- `skills/featured/virtual-piano/assets/assets/17.mp3`
- `skills/featured/virtual-piano/assets/assets/18.mp3`
- `skills/featured/virtual-piano/assets/assets/19.mp3`
- `skills/featured/virtual-piano/assets/assets/2.mp3`
- `skills/featured/virtual-piano/assets/assets/20.mp3`
- `skills/featured/virtual-piano/assets/assets/21.mp3`
- `skills/featured/virtual-piano/assets/assets/22.mp3`
- `skills/featured/virtual-piano/assets/assets/23.mp3`
- `skills/featured/virtual-piano/assets/assets/24.mp3`
- `skills/featured/virtual-piano/assets/assets/25.mp3`
- `skills/featured/virtual-piano/assets/assets/26.mp3`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `Android/src/app/src/main/assets/skills/budget-tracker/SKILL.md`
- `Android/src/app/src/main/assets/skills/budget-tracker/assets/dashboard.html`
- `Android/src/app/src/main/assets/skills/budget-tracker/scripts/index.html`
- `Android/src/app/src/main/assets/skills/calculate-hash/SKILL.md`
- `Android/src/app/src/main/assets/skills/calculate-hash/scripts/index.html`
- `Android/src/app/src/main/assets/skills/calculate-hash/scripts/index.js`
- `Android/src/app/src/main/assets/skills/interactive-map/SKILL.md`
- `Android/src/app/src/main/assets/skills/interactive-map/scripts/index.html`
- `Android/src/app/src/main/assets/skills/mood-tracker/SKILL.md`
- `Android/src/app/src/main/assets/skills/mood-tracker/assets/dashboard.html`
- `Android/src/app/src/main/assets/skills/mood-tracker/scripts/index.html`
- `Android/src/app/src/main/assets/skills/password-generator/SKILL.md`
- `Android/src/app/src/main/assets/skills/password-generator/assets/display.html`
- `Android/src/app/src/main/assets/skills/password-generator/scripts/index.html`
- `Android/src/app/src/main/assets/skills/qr-code/SKILL.md`
- `Android/src/app/src/main/assets/skills/qr-code/scripts/index.html`
- `Android/src/app/src/main/assets/skills/query-wikipedia/SKILL.md`
- `Android/src/app/src/main/assets/skills/query-wikipedia/scripts/index.html`
- `Android/src/app/src/main/assets/skills/send-email/SKILL.md`
- `Android/src/app/src/main/assets/skills/translator/SKILL.md`
- `Android/src/app/src/main/assets/skills/translator/assets/display.html`
- `Android/src/app/src/main/assets/skills/translator/scripts/index.html`

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .kt | 200 |
| .mp3 | 100 |
| .png | 69 |
| .xml | 37 |
| .md | 35 |
| .html | 31 |
| .svg | 30 |
| .so | 18 |
| .json | 13 |
| .ttf | 10 |
| .kts | 6 |
| .cpp | 5 |
| .js | 5 |
| .gitignore | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `skills/ 내부 책임 분리`
- `Android/ 내부 책임 분리`
- `Android/src/ 내부 책임 분리`
- `Android/src/app/ 내부 책임 분리`
- `skills/featured/ 내부 책임 분리`
- `Android/src/app/src/main/assets/skills/budget-tracker/SKILL.md 스펙/명령 의미`
- `Android/src/app/src/main/assets/skills/budget-tracker/assets/dashboard.html 스펙/명령 의미`
- `Android/src/app/src/main/assets/skills/budget-tracker/scripts/index.html 스펙/명령 의미`
- `Android/src/app/src/main/assets/skills/calculate-hash/SKILL.md 스펙/명령 의미`
- `Android/src/app/src/main/assets/skills/calculate-hash/scripts/index.html 스펙/명령 의미`

