# HKUDS/VideoRAG 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/HKUDS__VideoRAG |
| remote | https://github.com/HKUDS/VideoRAG |
| HEAD | c412a09 (2026-03-18) docs: upload results |
| branch | main |
| groups | llm-wiki-100 |
| files | 118 |
| dirs | 39 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 루트 파일과 manifest 중심의 얕은 구조이며, README와 주요 manifest부터 읽어야 한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🎥 Watch Vimo in Action`, `✨ Key Features`, `For Everyone`, `For Power Users`, `For Researchers`, `🌟 Why Vimo?`, `📋 Table of Contents`, `🚀 Quick Start of Vimo`, `Option 1: Download Vimo App (Coming Soon)`, `Option 2: Run from Source Code`, `🔬 VideoRAG Algorithm`, `Technical Highlights`, `Performance Comparison`, `Experiments and Evaluation`, `🧪 LongerVideos Benchmark`, `📖 Citation`, `🤝 Contributing`, `🙏 Acknowledgement`

> <div align="center" <picture <img src="cover.png" width="80%" style="border none; box shadow none;" alt="Vimo Chat with Your Videos" </picture <h1 <strong VideoRAG Chat with Your Videos</strong • <strong Vimo Desktop</strong </h1 <a href="https //trendshift.io/repositories/16146" target=" blank" <img src="https //trendshift.io/api/badge/repositories/16146" alt="HKUDS%2FVideoRAG Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a <a href='https //arxiv.org/abs/2502.01549' <img src='https //img.shields.io/badge/arXiv 2502.01549 b31b1b' </a <a href='https //github.com/HKUDS/VideoRAG/issues/1' <img src='https //img.shields.io/badge/群聊 wechat/feishu green' </a <a href='https //discord.gg/ZzU55kz3' <img src='https //discordapp.com/api/guilds/1296348098003734629/widget.png?style=shield' </a <a href='https //www.youtube.com/watch?v=D5vsxcp4QZI' <img src='https //img.shield

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| cover.png | file |
| LICENSE | file |
| README.md | file |
| VideoRAG-algorithm | dir |
| Vimo-desktop | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| Vimo-desktop/ | 76 |
| VideoRAG-algorithm/ | 39 |
| (root) | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| Vimo-desktop/ | 76 | large |
| Vimo-desktop/src/ | 43 | large |
| VideoRAG-algorithm/ | 39 | large |
| Vimo-desktop/src/renderer/ | 36 | large |
| Vimo-desktop/python_backend/ | 20 | large |
| VideoRAG-algorithm/videorag/ | 19 | large |
| Vimo-desktop/python_backend/videorag/ | 19 | large |
| VideoRAG-algorithm/reproduce/ | 8 | large |
| VideoRAG-algorithm/videorag/_storage/ | 6 | large |
| Vimo-desktop/src/main/ | 6 | large |
| VideoRAG-algorithm/videorag/_videoutil/ | 5 | large |
| VideoRAG-algorithm/reproduce/quantitative_comparison/ | 4 | large |
| VideoRAG-algorithm/reproduce/winrate_comparison/ | 4 | large |
| VideoRAG-algorithm/longervideos/ | 3 | large |
| VideoRAG-algorithm/examples/ | 2 | large |
| Vimo-desktop/figures/ | 2 | large |
| VideoRAG-algorithm/notesbooks/ | 1 | large |
| Vimo-desktop/src/preload/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Vimo-desktop/package.json`
- `Vimo-desktop/pnpm-lock.yaml`
- `Vimo-desktop/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| Vimo-desktop/package.json | vimo-desktop | format, lint, dev | axios, electron-store |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `VideoRAG-algorithm/README.md`
- `Vimo-desktop/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 51 |
| .tsx | 22 |
| .ts | 19 |
| .png | 6 |
| .json | 5 |
| .md | 3 |
| license | 3 |
| .gitignore | 2 |
| .js | 2 |
| .css | 1 |
| .html | 1 |
| .ipynb | 1 |
| .sh | 1 |
| .yaml | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `Vimo-desktop/ 내부 책임 분리`
- `Vimo-desktop/src/ 내부 책임 분리`
- `VideoRAG-algorithm/ 내부 책임 분리`
- `Vimo-desktop/src/renderer/ 내부 책임 분리`
- `Vimo-desktop/python_backend/ 내부 책임 분리`
- `Vimo-desktop/package.json 실행 스크립트와 패키지 경계`
- `Vimo-desktop/pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `Vimo-desktop/tsconfig.json 실행 스크립트와 패키지 경계`

