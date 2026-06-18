# naver/android-imagecropview

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/android-imagecropview |
| local path | sources/naver__android-imagecropview |
| HEAD | 40e0bff |
| stars/forks | 255 / 56 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2022-02-28T06:46:16Z |
| trendScore / priorityScore | 82 / 208 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 55 | README.md, app/build.gradle, imagecropview/build.gradle |
| LLM wiki / memory / graph | 12 | LICENSE.txt, imagecropview/src/main/java/com/naver/android/helloyako/imagecrop/util/BitmapLoadUtils.kt |
| Frontend / developer experience | 8 | README.md, imagecropview/src/main/java/com/naver/android/helloyako/imagecrop/view/ImageCropView.java |
| Security / compliance | 8 | README.md, app/build.gradle, imagecropview/build.gradle |
| RAG / retrieval | 1 | imagecropview/src/main/java/com/naver/android/helloyako/imagecrop/view/ImageCropView.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 50 |
| manifests | 4 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ImageCropView |
| headings | ImageCropView / Screenshot / Installation / Usage / ImageCropView Option / Demo / License |
| excerpt | ImageCropView ! License https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Build Status https //travis ci.org/naver/android imagecropview.svg?branch=master https //travis ci.org/naver/android imagecropview An Android library that lets you implement image crop. ImageCropView crops image by moving image under fixed crop area like instagram and iOS. Image zoom in/out is base on sephiroth74's ImageViewZoom https //github.com/sephiroth74/ImageViewZoom . Screenshot Screenshot in PHOLAR https //play.google.com/store/apps/details?id=com.naver.android.pholar ! screenshot doc/img/screenshot.png ! screenshot doc/img/pholar.gif Screenshot image source |


## 주요 파일

### Manifests

- README.md
- app/build.gradle
- build.gradle
- imagecropview/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| app | 22 |
| imagecropview | 14 |
| gradle | 2 |
| .gitignore | 1 |
| .travis.yml | 1 |
| apk | 1 |
| build.gradle | 1 |
| COPYING | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE.txt | 1 |
| NOTICE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .xml | 15 |
| .kt | 11 |
| [no-ext] | 6 |
| .gradle | 4 |
| .properties | 3 |
| .java | 2 |
| .pro | 2 |
| .apk | 1 |
| .bat | 1 |
| .jar | 1 |
| .java~ | 1 |
| .md | 1 |
| .txt | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
