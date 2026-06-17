# neuml/txtai 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/neuml__txtai |
| remote | https://github.com/neuml/txtai |
| HEAD | 7844e2c (2026-06-16) Fix how custom encoding is added to routers, closes #1115 |
| branch | master |
| groups | llm-wiki-100 |
| files | 621 |
| dirs | 84 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Why txtai?`, `Get started in a couple lines`, `app.yml`, `Use Cases`, `Semantic Search`, `LLM Orchestration`, `Language Model Workflows`, `Installation`, `Model guide`, `Powered by txtai`, `Further Reading`, `Documentation`, `Contributing`

> <p align="center" <img src="https //raw.githubusercontent.com/neuml/txtai/master/logo.png"/ </p <p align="center" <b All in one AI framework</b </p <p align="center" <a href="https //github.com/neuml/txtai/releases" <img src="https //img.shields.io/github/release/neuml/txtai.svg?style=flat&color=success" alt="Version"/ </a <a href="https //github.com/neuml/txtai" <img src="https //img.shields.io/github/last commit/neuml/txtai.svg?style=flat&color=blue" alt="GitHub last commit"/ </a <a href="https //github.com/neuml/txtai/issues" <img src="https //img.shields.io/github/issues/neuml/txtai.svg?style=flat&color=success" alt="GitHub issues"/ </a <a href="https //join.slack.com/t/txtai/shared invite/zt 37c1zfijp Y57wMty6YOx hyIHEQvQJA" <img src="https //img.shields.io/badge/slack join blue?style=flat&logo=slack&logocolor=white" alt="Join Slack"/ </a <a href="https //github.com/neuml/txtai/acti

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .coveragerc | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .pylintrc | file |
| apps.jpg | file |
| CITATION.cff | file |
| demo.gif | file |
| docker | dir |
| docs | dir |
| examples | dir |
| LICENSE | file |
| logo.png | file |
| Makefile | file |
| mkdocs.yml | file |
| pyproject.toml | file |
| README.md | file |
| setup.py | file |
| src | dir |
| test | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 265 |
| docs/ | 141 |
| examples/ | 96 |
| test/ | 94 |
| (root) | 14 |
| docker/ | 8 |
| .github/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 265 | preferred |
| docs/ | 141 | preferred |
| examples/ | 96 | preferred |
| test/ | 94 | preferred |
| src/python/ | 265 | large |
| src/python/txtai/ | 265 | large |
| test/python/ | 94 | large |
| docs/images/ | 64 | large |
| test/python/testpipeline/ | 38 | large |
| docs/pipeline/ | 28 | large |
| test/python/testvectors/ | 15 | large |
| docs/embeddings/ | 13 | large |
| docs/workflow/ | 13 | large |
| docs/workflow/task/ | 11 | large |
| test/python/testapi/ | 11 | large |
| test/python/testdatabase/ | 9 | large |
| docker/ | 8 | large |
| docs/api/ | 8 | large |
| docs/embeddings/configuration/ | 8 | large |
| docs/pipeline/data/ | 7 | large |
| docs/pipeline/audio/ | 6 | large |
| docs/pipeline/text/ | 6 | large |
| .github/ | 3 | large |
| .github/workflows/ | 3 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker/api/Dockerfile`
- `docker/aws/Dockerfile`
- `docker/base/Dockerfile`
- `docker/minimal/Dockerfile`
- `docker/schedule/Dockerfile`
- `docker/workflow/Dockerfile`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml |  | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/agent/configuration.md`
- `docs/agent/index.md`
- `docs/agent/methods.md`
- `docs/api/cluster.md`
- `docs/api/configuration.md`
- `docs/api/customization.md`
- `docs/api/index.md`
- `docs/api/mcp.md`
- `docs/api/methods.md`
- `docs/api/openai.md`
- `docs/api/security.md`
- `docs/cloud.md`
- `docs/embeddings/configuration/ann.md`
- `docs/embeddings/configuration/cloud.md`
- `docs/embeddings/configuration/database.md`
- `docs/embeddings/configuration/general.md`
- `docs/embeddings/configuration/graph.md`
- `docs/embeddings/configuration/index.md`
- `docs/embeddings/configuration/scoring.md`
- `docs/embeddings/configuration/vectors.md`
- `docs/embeddings/format.md`
- `docs/embeddings/index.md`
- `docs/embeddings/indexing.md`
- `docs/embeddings/methods.md`
- `docs/embeddings/query.md`
- `docs/examples.md`
- `docs/faq.md`
- `docs/further.md`
- `docs/images/agent.excalidraw`
- `docs/images/agent.png`
- `docs/images/api-dark.png`
- `docs/images/api.excalidraw`
- `docs/images/api.png`
- `docs/images/architecture-dark.png`
- `docs/images/architecture.excalidraw`
- `docs/images/architecture.png`
- `docs/images/cloud-dark.png`
- `docs/images/cloud.excalidraw`
- `docs/images/cloud.png`
- `docs/images/embeddings-dark.png`
- `docs/images/embeddings.excalidraw`
- `docs/images/embeddings.png`
- `docs/images/examples-dark.png`
- `docs/images/examples.excalidraw`
- `docs/images/examples.png`
- `docs/images/faq.excalidraw`
- `docs/images/faq.png`
- `docs/images/flows-dark.png`
- `docs/images/flows.excalidraw`
- ... 30 more

### 에이전트 지침 후보

- `docs/api/mcp.md`
- `examples/83_TxtAI_got_skills.ipynb`
- `src/python/txtai/agent/tool/skill.py`
- `test/python/testapi/testmcp.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/python/testagent.py`
- `test/python/testann/__init__.py`
- `test/python/testann/testdense.py`
- `test/python/testann/testsparse.py`
- `test/python/testapi/__init__.py`
- `test/python/testapi/testapiagent.py`
- `test/python/testapi/testapiembeddings.py`
- `test/python/testapi/testapipipeline.py`
- `test/python/testapi/testapiworkflow.py`
- `test/python/testapi/testauthorization.py`
- `test/python/testapi/testcluster.py`
- `test/python/testapi/testencoding.py`
- `test/python/testapi/testextension.py`
- `test/python/testapi/testmcp.py`
- `test/python/testapi/testopenai.py`
- `test/python/testapp.py`
- `test/python/testarchive.py`
- `test/python/testcloud.py`
- `test/python/testconsole.py`
- `test/python/testdatabase/__init__.py`
- `test/python/testdatabase/testclient.py`
- `test/python/testdatabase/testcustom.py`
- `test/python/testdatabase/testdatabase.py`
- `test/python/testdatabase/testduckdb.py`
- `test/python/testdatabase/testencoder.py`
- `test/python/testdatabase/testrdbms.py`
- `test/python/testdatabase/testsql.py`
- `test/python/testdatabase/testsqlite.py`
- `test/python/testembeddings.py`
- `test/python/testgraph.py`
- `test/python/testlibrary.py`
- `test/python/testmodels/__init__.py`
- `test/python/testmodels/testmodels.py`
- `test/python/testmodels/testpooling.py`
- `test/python/testoptional.py`
- `test/python/testpipeline/__init__.py`
- `test/python/testpipeline/testaudio/__init__.py`
- `test/python/testpipeline/testaudio/testaudiomixer.py`
- `test/python/testpipeline/testaudio/testaudiostream.py`
- `test/python/testpipeline/testaudio/testmicrophone.py`
- `test/python/testpipeline/testaudio/testtexttoaudio.py`
- `test/python/testpipeline/testaudio/testtexttospeech.py`
- `test/python/testpipeline/testaudio/testtranscription.py`
- `test/python/testpipeline/testdata/__init__.py`
- `test/python/testpipeline/testdata/testfiletohtml.py`
- `test/python/testpipeline/testdata/testtabular.py`
- `test/python/testpipeline/testdata/testtextractor.py`
- `test/python/testpipeline/testdata/testtokenizer.py`
- `test/python/testpipeline/testdata/testurlretrieve.py`
- `test/python/testpipeline/testimage/__init__.py`
- `test/python/testpipeline/testimage/testcaption.py`
- `test/python/testpipeline/testimage/testimagehash.py`
- `test/python/testpipeline/testimage/testobjects.py`
- `test/python/testpipeline/testllm/__init__.py`
- `test/python/testpipeline/testllm/testgenerator.py`
- `test/python/testpipeline/testllm/testlitellm.py`
- `test/python/testpipeline/testllm/testlitert.py`
- `test/python/testpipeline/testllm/testllama.py`
- `test/python/testpipeline/testllm/testllm.py`
- `test/python/testpipeline/testllm/testopencode.py`
- `test/python/testpipeline/testllm/testrag.py`
- `test/python/testpipeline/testllm/testsequences.py`
- `test/python/testpipeline/testtext/__init__.py`
- `test/python/testpipeline/testtext/testentity.py`
- `test/python/testpipeline/testtext/testlabels.py`
- `test/python/testpipeline/testtext/testreranker.py`
- `test/python/testpipeline/testtext/testsimilarity.py`
- `test/python/testpipeline/testtext/testsummary.py`
- `test/python/testpipeline/testtext/testtranslation.py`
- `test/python/testpipeline/testtrain/__init__.py`
- `test/python/testpipeline/testtrain/testonnx.py`
- `test/python/testpipeline/testtrain/testquantization.py`
- `test/python/testpipeline/testtrain/testtrainer.py`
- `test/python/testscoring/__init__.py`
- `test/python/testscoring/testkeyword.py`
- `test/python/testscoring/testsparse.py`
- `test/python/testserialize.py`
- `test/python/testvectors/__init__.py`
- `test/python/testvectors/testdense/__init__.py`
- `test/python/testvectors/testdense/testcustom.py`
- ... 14 more

### CI/Docker 후보

- `.github/workflows/build.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/minimal.yml`
- `docker/api/Dockerfile`
- `docker/aws/Dockerfile`
- `docker/base/Dockerfile`
- `docker/minimal/Dockerfile`
- `docker/schedule/Dockerfile`
- `docker/workflow/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 373 |
| .ipynb | 85 |
| .md | 77 |
| .png | 43 |
| .excalidraw | 22 |
| dockerfile | 6 |
| .yml | 4 |
| .cff | 1 |
| .coveragerc | 1 |
| .gif | 1 |
| .gitignore | 1 |
| .html | 1 |
| .jpg | 1 |
| .pylintrc | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `src/python/ 내부 책임 분리`
- `docker/api/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/aws/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/base/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/minimal/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/schedule/Dockerfile 실행 스크립트와 패키지 경계`

