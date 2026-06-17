# InternLM/HuixiangDou 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/InternLM__HuixiangDou |
| remote | https://github.com/InternLM/HuixiangDou |
| HEAD | 711c754 (2025-11-24) feat(uv): add pyproject.toml (#443) |
| branch | main |
| groups | llm-wiki-100 |
| files | 407 |
| dirs | 124 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🎚️ Upgrade`, `🔆 New Features`, `📖 Support Status`, `📦 Hardware Requirements`, `🔥 Running the Standard Edition`, `I. Download and install dependencies`, `parsing `word` format requirements`, `python requirements`, `For python3.8, install faiss-gpu instead of faiss`, `II. Create knowledge base`, `Download the knowledge base, we only take the some documents as example. You can put any of your own documents under `repodir``, `Build knowledge base, this will save the features of repodir to workdir, and update the positive and negative example thresholds into `config.ini``, `You can also build knowledge base from QA pairs (CSV or JSON format)`, `CSV: First column is key (question), second column is value (answer)`, `JSON: {"question1": "answer1", "question2": "answer2", ...}`, `python3 -m huixiangdou.services.store --qa-pair resource/data/qa_pair.csv`, `III. Setup LLM API and test`, `remote_type = "step"`

> 🎚️ Upgrade HuixiangDou2(ACL25) is a GraphRAG solution whose effectiveness has been demonstrated in the plant science domain and that contributed to the cover paper in Cell X0008 8) Molecular Plant. If you work outside computer science, give the new release a try. English 简体中文 <div align="center" <img src="resource/logo black.svg" width="555px"/ <div align="center" <a href="https //cdn.vansin.top/internlm/dou.jpg" target=" blank" <img alt="Wechat" src="https //img.shields.io/badge/wechat robot%20inside brightgreen?logo=wechat&logoColor=white" / </a <a href="https //huixiangdou.readthedocs.io/en/latest/" target=" blank" <img alt="Readthedocs" src="https //img.shields.io/badge/readthedocs chat%20with%20AI brightgreen?logo=readthedocs&logoColor=white" / </a <a href="https //youtu.be/ylXrT Tei Y" target=" blank" <img alt="YouTube" src="https //img.shields.io/badge/YouTube black?logo=youtube&

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .pylintrc | file |
| .readthedocs.yaml | file |
| android | dir |
| app.py | file |
| config-cpu.ini | file |
| config-multimodal.ini | file |
| config-wkteam-example.ini | file |
| config.ini | file |
| docs | dir |
| evaluation | dir |
| huixiangdou | dir |
| huixiangdou-inside.md | file |
| LICENSE | file |
| logs | dir |
| pyproject.toml | file |
| README_zh.md | file |
| README.md | file |
| requirements | dir |
| requirements.txt | file |
| resource | dir |
| setup.py | file |
| sft | dir |
| tests | dir |
| unittest | dir |
| uv.lock | file |
| web | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| web/ | 155 |
| docs/ | 57 |
| tests/ | 40 |
| huixiangdou/ | 37 |
| android/ | 34 |
| (root) | 17 |
| sft/ | 16 |
| unittest/ | 15 |
| resource/ | 14 |
| evaluation/ | 11 |
| .github/ | 5 |
| requirements/ | 5 |
| logs/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| web/ | 155 | preferred |
| docs/ | 57 | preferred |
| tests/ | 40 | preferred |
| web/front-end/ | 99 | large |
| web/front-end/src/ | 79 | large |
| huixiangdou/ | 37 | large |
| android/ | 34 | large |
| docs/zh/ | 24 | large |
| android/demo/ | 21 | large |
| android/demo/src/ | 18 | large |
| docs/en/ | 17 | large |
| docs/figures/ | 16 | large |
| sft/ | 16 | large |
| huixiangdou/services/ | 15 | large |
| unittest/ | 15 | large |
| resource/ | 14 | large |
| huixiangdou/primitive/ | 13 | large |
| evaluation/ | 11 | large |
| sft/axolotl_configs/ | 11 | large |
| unittest/primitive/ | 8 | large |
| web/model/ | 8 | large |
| web/service/ | 8 | large |
| unittest/service/ | 7 | large |
| web/api/ | 7 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`
- `requirements.txt`
- `uv.lock`
- `web/front-end/package.json`
- `web/front-end/tsconfig.json`
- `web/front-end/vite.config.ts`
- `web/requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| web/front-end/package.json | @sea-lion/app-vite-template | dev, build, build:aliyun-dev, build:aliyun-staging, build:aliyun-prod, lint, lint-fix, postinithook, inithook, preview, mock | antd, axios, classnames, js-cookie, qs, query-string, react, react-dom, react-intl, react-router-dom, sanitize-html, sea-lion-ui |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | HuixiangDou | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `android/README.md`
- `docs/en/.readthedocs.yaml`
- `docs/en/Makefile`
- `docs/en/_static/css/readthedocs.css`
- `docs/en/_static/image/logo.svg`
- `docs/en/_static/image/logo_icon.svg`
- `docs/en/_static/js/custom.js`
- `docs/en/_templates/404.html`
- `docs/en/_templates/autosummary/class.rst`
- `docs/en/_templates/callable.rst`
- `docs/en/conf.py`
- `docs/en/cp_origin_docs.sh`
- `docs/en/doc_add_readthedocs.md`
- `docs/en/doc_architecture.md`
- `docs/en/doc_full_dev.md`
- `docs/en/doc_knowledge_graph.md`
- `docs/en/doctuils.conf`
- `docs/en/index.rst`
- `docs/figures/convert.py`
- `docs/figures/huixiangdou.png`
- `docs/figures/lark-add-ability.png`
- `docs/figures/lark-arch.jpg`
- `docs/figures/lark-bot-add-callback.png`
- `docs/figures/lark-bot-reply.png`
- `docs/figures/lark-bot-sub.png`
- `docs/figures/lark-create-app.png`
- `docs/figures/lark-create-corp.png`
- `docs/figures/lark-switch-corp.png`
- `docs/figures/wechat-android-example.jpg`
- `docs/figures/wechat-android-homepage.jpg`
- `docs/figures/wechat-dingdong.png`
- `docs/figures/wechat-puppet-log.png`
- `docs/figures/wechat-run-state.jpg`
- `docs/figures/wechat-wkteam.jpg`
- `docs/zh/.readthedocs.yaml`
- `docs/zh/Makefile`
- `docs/zh/_static/css/readthedocs.css`
- `docs/zh/_static/image/logo.svg`
- `docs/zh/_static/image/logo_icon.svg`
- `docs/zh/_static/js/custom.js`
- `docs/zh/_templates/404.html`
- `docs/zh/_templates/autosummary/class.rst`
- `docs/zh/_templates/callable.rst`
- `docs/zh/conf.py`
- `docs/zh/cp_origin_docs.sh`
- `docs/zh/doc_add_lark_group.md`
- `docs/zh/doc_add_readthedocs.md`
- `docs/zh/doc_add_wechat_accessibility.md`
- `docs/zh/doc_add_wechat_commercial.md`
- ... 14 more

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `android/demo/src/test/java/com/carlos/grabredenvelope/demo/ExampleUnitTest.kt`
- `tests/__init__.py`
- `tests/cp_files.py`
- `tests/data.json`
- `tests/git-clone.sh`
- `tests/test_alles_apin.py`
- `tests/test_bce.py`
- `tests/test_benepar.py`
- `tests/test_bge_reranker.py`
- `tests/test_build_milvus_and_filter.py`
- `tests/test_clear_kimi_files.py`
- `tests/test_dataclass.py`
- `tests/test_deepseek.py`
- `tests/test_get_issue_comment_pipeline.py`
- `tests/test_hf_import_accelerate.py`
- `tests/test_intention_prompt.py`
- `tests/test_internlm2.py`
- `tests/test_kimi.py`
- `tests/test_kimi_cr.py`
- `tests/test_kimi_passkey.py`
- `tests/test_lda/step0_preprocess.py`
- `tests/test_lda/step1_countvec.py`
- `tests/test_llm_client.py`
- `tests/test_m3.py`
- `tests/test_milvus_hybrid_retrieval.py`
- `tests/test_neo4j.py`
- `tests/test_openai.py`
- `tests/test_openxlab_android_api.py`
- `tests/test_optimum_st.py`
- `tests/test_post_android.py`
- `tests/test_pyppeteer.py`
- `tests/test_query_gradio.py`
- `tests/test_qwen_react.py`
- `tests/test_relative.py`
- `tests/test_reranker.py`
- `tests/test_splitter.py`
- `tests/test_step1_llm.py`
- `tests/test_time.py`
- `tests/test_visual_bge.py`
- `tests/test_yi.py`
- `tests/test_yulan.py`

### CI/Docker 후보

- `.github/workflows/lint.yml`
- `.github/workflows/release.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 155 |
| .ts | 33 |
| .tsx | 31 |
| .md | 29 |
| .less | 18 |
| .png | 18 |
| .yaml | 14 |
| .txt | 12 |
| .xml | 12 |
| .json | 9 |
| .jpg | 7 |
| .ini | 6 |
| .kt | 6 |
| .rst | 6 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `web/front-end/ 내부 책임 분리`
- `web/front-end/src/ 내부 책임 분리`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`
- `web/front-end/package.json 실행 스크립트와 패키지 경계`
- `web/front-end/tsconfig.json 실행 스크립트와 패키지 경계`

