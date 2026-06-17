# stanford-oval/storm 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/stanford-oval__storm |
| remote | https://github.com/stanford-oval/storm |
| HEAD | fb951af (2025-09-30) Merge pull request #400 from stanford-oval/patch/requirement-change |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 74 |
| dirs | 18 |
| stack | Python |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `STORM: Synthesis of Topic Outlines through Retrieval and Multi-perspective Question Asking`, `Overview [(Try STORM now!)](https://storm.genie.stanford.edu/)`, `How STORM & Co-STORM works`, `STORM`, `CO-STORM`, `Installation`, `API`, `STORM`, `STORM is a LM system so different components can be powered by different models to reach a good balance between cost and quality.`, `For a good practice, choose a cheaper/faster model for `conv_simulator_lm` which is used to split queries, synthesize answers in the conversation.`, `Choose a more powerful model for `article_gen_lm` to generate verifiable text with citations.`, `Check out the STORMWikiRunnerArguments class for more configurations.`, `Co-STORM`, `Co-STORM adopts the same multi LM system paradigm as STORM`, `Check out the Co-STORM's RunnerArguments class for more configurations.`, `Warm start the system to build shared conceptual space between Co-STORM and users`, `Step through the collaborative discourse`, `Run either of the code snippets below in any order, as many times as you'd like`

> <p align="center" <img src="assets/logo.svg" style="width 25%; height auto;" </p STORM Synthesis of Topic Outlines through Retrieval and Multi perspective Question Asking <p align="center" <a href="http //storm.genie.stanford.edu" <b Research preview</b </a <a href="https //arxiv.org/abs/2402.14207" <b STORM Paper</b </a <a href="https //www.arxiv.org/abs/2408.15232" <b Co STORM Paper</b </a <a href="https //storm project.stanford.edu/" <b Website</b </a </p Latest News 🔥 [2025/01] We add litellm integration for language models and embedding models in knowledge storm v1.1.0. [2024/09] Co STORM codebase is now released and integrated into knowledge storm python package v1.0.0. Run pip install knowledge storm upgrade to check it out. [2024/09] We introduce collaborative STORM (Co STORM) to support human AI collaborative knowledge curation! Co STORM Paper has been accepted to EMNLP 2024 ma

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| assets | dir |
| CONTRIBUTING.md | file |
| examples | dir |
| frontend | dir |
| knowledge_storm | dir |
| LICENSE | file |
| MANIFEST.in | file |
| README.md | file |
| requirements.txt | file |
| setup.py | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| knowledge_storm/ | 34 |
| examples/ | 13 |
| frontend/ | 11 |
| (root) | 8 |
| assets/ | 5 |
| .github/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 11 | preferred |
| examples/ | 13 | preferred |
| knowledge_storm/ | 34 | large |
| knowledge_storm/collaborative_storm/ | 15 | large |
| knowledge_storm/collaborative_storm/modules/ | 13 | large |
| examples/storm_examples/ | 12 | large |
| frontend/demo_light/ | 11 | large |
| knowledge_storm/storm_wiki/ | 11 | large |
| knowledge_storm/storm_wiki/modules/ | 9 | large |
| assets/ | 5 | large |
| .github/ | 3 | large |
| frontend/demo_light/assets/ | 3 | large |
| .github/workflows/ | 2 | large |
| frontend/demo_light/pages_util/ | 2 | large |
| .github/ISSUE_TEMPLATE/ | 1 | large |
| examples/costorm_examples/ | 1 | large |
| examples/storm_examples/helper/ | 1 | large |
| frontend/demo_light/.streamlit/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `frontend/demo_light/requirements.txt`
- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `examples/storm_examples/README.md`
- `frontend/demo_light/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/format-check.yml`
- `.github/workflows/python-package.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 52 |
| .jpg | 5 |
| .md | 5 |
| .svg | 2 |
| .txt | 2 |
| .yml | 2 |
| .gitignore | 1 |
| .in | 1 |
| .pdf | 1 |
| .toml | 1 |
| .yaml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `knowledge_storm/ 내부 책임 분리`
- `knowledge_storm/collaborative_storm/ 내부 책임 분리`
- `knowledge_storm/collaborative_storm/modules/ 내부 책임 분리`
- `frontend/demo_light/requirements.txt 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

