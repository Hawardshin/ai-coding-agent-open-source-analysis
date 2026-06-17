# yifanfeng97/Hyper-Extract 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/yifanfeng97__Hyper-Extract |
| remote | https://github.com/yifanfeng97/Hyper-Extract |
| HEAD | 3fb2f38 (2026-06-14) Merge pull request #32 from yifanfeng97/dependabot/github_actions/codecov/codecov-action-7 |
| branch | main |
| groups | llm-wiki-100 |
| files | 449 |
| dirs | 110 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `✨ Core Features`, `🎯 What Can You Do With It?`, `🚀 Supported Platforms & Models`, `⚡ 30-Second Quick Start`, `Install`, `Configure API key`, `Extract knowledge from a document`, `Query it`, `Visualize`, `📈 Why Hyper-Extract?`, `🧩 Supported Knowledge Structures`, `📚 Documentation & Resources`, `🤝 Contributing & License`, `⭐ Star History`

> <div align="center" <a href="https //yifanfeng97.github.io/Hyper Extract/latest/" <picture <source media="(prefers color scheme dark)" srcset="docs/assets/logo/logo horizontal dark.svg" <source media="(prefers color scheme light)" srcset="docs/assets/logo/logo horizontal.svg" <img alt="Hyper Extract Logo" src="docs/assets/logo/logo horizontal.svg" width="600" </picture </a <br/ <br/ Smart Knowledge Extraction CLI Transform documents into structured knowledge with one command. 📖 English Version · 中文版 [ ]() <br/ "Stop reading. Start understanding." "告别文档焦虑，让信息一目了然" <br/ <img src="docs/assets/hero.jpg" alt="Hero & Workflow" width="800" style="max width 100%;" <br/ </div Hyper Extract is an intelligent, LLM powered knowledge extraction and evolution framework. It radically simplifies transforming highly unstructured texts into persistent, predictable, and strongly typed Knowledge Abstracts 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .python-version | file |
| docs | dir |
| docs_hooks.py | file |
| examples | dir |
| hyperextract | dir |
| hyperextract-skills | dir |
| LICENSE | file |
| mkdocs.yml | file |
| pyproject.toml | file |
| README_ZH.md | file |
| README.md | file |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 155 |
| tests/ | 97 |
| hyperextract/ | 94 |
| examples/ | 57 |
| hyperextract-skills/ | 30 |
| (root) | 10 |
| .github/ | 6 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 155 | preferred |
| examples/ | 57 | preferred |
| tests/ | 97 | preferred |
| hyperextract/ | 94 | large |
| docs/en/ | 69 | large |
| docs/zh/ | 69 | large |
| tests/test_data/ | 65 | large |
| hyperextract/templates/ | 42 | large |
| hyperextract/templates/presets/ | 37 | large |
| tests/test_data/en/ | 33 | large |
| tests/test_data/zh/ | 32 | large |
| hyperextract-skills/ | 30 | large |
| examples/en/ | 26 | large |
| examples/zh/ | 26 | large |
| docs/en/python/ | 18 | large |
| docs/zh/python/ | 18 | large |
| hyperextract/utils/ | 18 | large |
| docs/assets/ | 16 | large |
| hyperextract/utils/template_engine/ | 15 | large |
| docs/en/templates/ | 14 | large |
| docs/zh/templates/ | 14 | large |
| tests/types/ | 14 | large |
| hyperextract/methods/ | 13 | large |
| docs/en/cli/ | 12 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | hyperextract | false | false | true | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/.gitignore`
- `docs/assets/arch.jpg`
- `docs/assets/autotypes.jpg`
- `docs/assets/cli.png`
- `docs/assets/en_show.jpg`
- `docs/assets/examples/en/transformer_paper.txt`
- `docs/assets/examples/zh/transformer_paper.txt`
- `docs/assets/hero.jpg`
- `docs/assets/logo/logo-app.svg`
- `docs/assets/logo/logo-horizontal-dark.svg`
- `docs/assets/logo/logo-horizontal.svg`
- `docs/assets/logo/logo-icon-white.svg`
- `docs/assets/logo/logo-icon.svg`
- `docs/assets/logo/logo-vertical-dark.svg`
- `docs/assets/logo/logo-vertical.svg`
- `docs/assets/logo/logo-white.svg`
- `docs/assets/zh_show.jpg`
- `docs/en/cli/commands/build-index.md`
- `docs/en/cli/commands/config.md`
- `docs/en/cli/commands/feed.md`
- `docs/en/cli/commands/info.md`
- `docs/en/cli/commands/list.md`
- `docs/en/cli/commands/parse.md`
- `docs/en/cli/commands/search.md`
- `docs/en/cli/commands/show.md`
- `docs/en/cli/commands/talk.md`
- `docs/en/cli/configuration.md`
- `docs/en/cli/index.md`
- `docs/en/cli/workflow.md`
- `docs/en/concepts/architecture.md`
- `docs/en/concepts/autotypes.md`
- `docs/en/concepts/index.md`
- `docs/en/concepts/methods.md`
- `docs/en/concepts/provider-system.md`
- `docs/en/concepts/templates-format.md`
- `docs/en/getting-started/cli-quickstart.md`
- `docs/en/getting-started/index.md`
- `docs/en/getting-started/installation.md`
- `docs/en/getting-started/python-quickstart.md`
- `docs/en/index.md`
- `docs/en/python/api-reference/autotypes/base.md`
- `docs/en/python/api-reference/autotypes/graphs.md`
- `docs/en/python/api-reference/autotypes/structures.md`
- `docs/en/python/api-reference/methods/rag.md`
- `docs/en/python/api-reference/methods/registry.md`
- `docs/en/python/api-reference/methods/typical.md`
- `docs/en/python/api-reference/template.md`
- `docs/en/python/core-concepts.md`
- `docs/en/python/guides/custom-templates.md`
- ... 30 more

### 에이전트 지침 후보

- `hyperextract-skills/README.md`
- `hyperextract-skills/README_ZH.md`
- `hyperextract-skills/SKILL.md`
- `hyperextract-skills/brainstorm/SKILL.md`
- `hyperextract-skills/graph-designer/SKILL.md`
- `hyperextract-skills/graph-designer/cases/battle-analysis.yaml`
- `hyperextract-skills/graph-designer/cases/biography-events.yaml`
- `hyperextract-skills/graph-designer/cases/corporate-ownership.yaml`
- `hyperextract-skills/graph-designer/references/dimensions.md`
- `hyperextract-skills/graph-designer/references/entity.md`
- `hyperextract-skills/graph-designer/references/hypergraph.md`
- `hyperextract-skills/graph-designer/references/relation.md`
- `hyperextract-skills/multilingual/SKILL.md`
- `hyperextract-skills/record-designer/SKILL.md`
- `hyperextract-skills/record-designer/cases/earnings-summary.yaml`
- `hyperextract-skills/record-designer/cases/entity-registry.yaml`
- `hyperextract-skills/record-designer/cases/product-features.yaml`
- `hyperextract-skills/record-designer/references/field.md`
- `hyperextract-skills/record-designer/references/identifier.md`
- `hyperextract-skills/template-optimizer/SKILL.md`
- `hyperextract-skills/template-optimizer/references/rules-consistency.md`
- `hyperextract-skills/template-optimizer/references/rules-field-count.md`
- `hyperextract-skills/template-optimizer/references/rules-hypergraph-grouping.md`
- `hyperextract-skills/template-optimizer/references/rules-multilingual.md`
- `hyperextract-skills/template-optimizer/references/rules-naming.md`
- `hyperextract-skills/yaml-validator/SKILL.md`
- `hyperextract-skills/yaml-validator/references/rules-errors.md`
- `hyperextract-skills/yaml-validator/references/rules-identifiers.md`
- `hyperextract-skills/yaml-validator/references/rules-syntax.md`
- `hyperextract-skills/yaml-validator/references/rules-types.md`

### 스펙/템플릿/명령/스킬 후보

- `docs/en/cli/commands/build-index.md`
- `docs/en/cli/commands/config.md`
- `docs/en/cli/commands/feed.md`
- `docs/en/cli/commands/info.md`
- `docs/en/cli/commands/list.md`
- `docs/en/cli/commands/parse.md`
- `docs/en/cli/commands/search.md`
- `docs/en/cli/commands/show.md`
- `docs/en/cli/commands/talk.md`
- `docs/en/templates/choosing/by-output.md`
- `docs/en/templates/choosing/by-task.md`
- `docs/en/templates/examples/financial-report.md`
- `docs/en/templates/examples/legal-contract.md`
- `docs/en/templates/examples/research-paper.md`
- `docs/en/templates/how-to-choose.md`
- `docs/en/templates/index.md`
- `docs/en/templates/reference/finance.md`
- `docs/en/templates/reference/general.md`
- `docs/en/templates/reference/industry.md`
- `docs/en/templates/reference/legal.md`
- `docs/en/templates/reference/medicine.md`
- `docs/en/templates/reference/overview.md`
- `docs/en/templates/reference/tcm.md`
- `docs/zh/cli/commands/build-index.md`
- `docs/zh/cli/commands/config.md`
- `docs/zh/cli/commands/feed.md`
- `docs/zh/cli/commands/info.md`
- `docs/zh/cli/commands/list.md`
- `docs/zh/cli/commands/parse.md`
- `docs/zh/cli/commands/search.md`
- `docs/zh/cli/commands/show.md`
- `docs/zh/cli/commands/talk.md`
- `docs/zh/templates/choosing/by-output.md`
- `docs/zh/templates/choosing/by-task.md`
- `docs/zh/templates/examples/financial-report.md`
- `docs/zh/templates/examples/legal-contract.md`
- `docs/zh/templates/examples/research-paper.md`
- `docs/zh/templates/how-to-choose.md`
- `docs/zh/templates/index.md`
- `docs/zh/templates/reference/finance.md`
- `docs/zh/templates/reference/general.md`
- `docs/zh/templates/reference/industry.md`
- `docs/zh/templates/reference/legal.md`
- `docs/zh/templates/reference/medicine.md`
- `docs/zh/templates/reference/overview.md`
- `docs/zh/templates/reference/tcm.md`
- `examples/en/templates/finance_template.py`
- `examples/en/templates/general_template.py`
- `examples/en/templates/industry_template.py`
- `examples/en/templates/legal_template.py`
- `examples/en/templates/list_templates.py`
- `examples/en/templates/medicine_template.py`
- `examples/en/templates/tcm_template.py`
- `examples/zh/templates/finance_template.py`
- `examples/zh/templates/general_template.py`
- `examples/zh/templates/industry_template.py`
- `examples/zh/templates/legal_template.py`
- `examples/zh/templates/list_templates.py`
- `examples/zh/templates/medicine_template.py`
- `examples/zh/templates/tcm_template.py`
- `hyperextract/cli/commands/__init__.py`
- `hyperextract/cli/commands/config.py`
- `hyperextract/cli/commands/list.py`
- `hyperextract/templates/DESIGN_GUIDE.md`
- `hyperextract/templates/DESIGN_GUIDE_zh.md`
- `hyperextract/templates/README.md`
- `hyperextract/templates/README_ZH.md`
- `hyperextract/templates/__init__.py`
- `hyperextract/templates/presets/finance/earnings_summary.yaml`
- `hyperextract/templates/presets/finance/event_timeline.yaml`
- `hyperextract/templates/presets/finance/ownership_graph.yaml`
- `hyperextract/templates/presets/finance/risk_factor_set.yaml`
- `hyperextract/templates/presets/finance/sentiment_model.yaml`
- `hyperextract/templates/presets/general/base_graph.yaml`
- `hyperextract/templates/presets/general/base_hypergraph.yaml`
- `hyperextract/templates/presets/general/base_list.yaml`
- `hyperextract/templates/presets/general/base_model.yaml`
- `hyperextract/templates/presets/general/base_set.yaml`
- `hyperextract/templates/presets/general/base_spatial_graph.yaml`
- `hyperextract/templates/presets/general/base_spatio_temporal_graph.yaml`
- `hyperextract/templates/presets/general/base_temporal_graph.yaml`
- `hyperextract/templates/presets/general/biography_graph.yaml`
- `hyperextract/templates/presets/general/concept_graph.yaml`
- `hyperextract/templates/presets/general/doc_structure.yaml`
- `hyperextract/templates/presets/general/workflow_graph.yaml`
- `hyperextract/templates/presets/industry/emergency_response.yaml`
- `hyperextract/templates/presets/industry/equipment_topology.yaml`
- `hyperextract/templates/presets/industry/failure_case.yaml`
- `hyperextract/templates/presets/industry/operation_flow.yaml`
- `hyperextract/templates/presets/industry/safety_control.yaml`
- `hyperextract/templates/presets/legal/case_citation.yaml`
- `hyperextract/templates/presets/legal/case_fact_timeline.yaml`
- `hyperextract/templates/presets/legal/compliance_list.yaml`
- `hyperextract/templates/presets/legal/contract_obligation.yaml`
- `hyperextract/templates/presets/legal/defined_term_set.yaml`
- `hyperextract/templates/presets/medicine/anatomy_graph.yaml`
- `hyperextract/templates/presets/medicine/discharge_instruction.yaml`
- `hyperextract/templates/presets/medicine/drug_interaction.yaml`
- `hyperextract/templates/presets/medicine/hospital_timeline.yaml`
- `hyperextract/templates/presets/medicine/treatment_map.yaml`
- ... 5 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/cli/__init__.py`
- `tests/cli/test_verbose.py`
- `tests/conftest.py`
- `tests/fixtures/__init__.py`
- `tests/fixtures/data.py`
- `tests/fixtures/schemas.py`
- `tests/integration/__init__.py`
- `tests/integration/test_real_extraction.py`
- `tests/kg.md`
- `tests/mocks.py`
- `tests/template_engine/__init__.py`
- `tests/template_engine/test_factory.py`
- `tests/template_engine/test_gallery.py`
- `tests/template_engine/test_parser_loader.py`
- `tests/template_engine/test_parser_output.py`
- `tests/test_data/en/.gitkeep`
- `tests/test_data/en/finance/annual_report_sample.md`
- `tests/test_data/en/finance/earnings_call_transcript_sample.md`
- `tests/test_data/en/finance/equity_research_report_sample.md`
- `tests/test_data/en/finance/financial_news_sample.md`
- `tests/test_data/en/finance/ipo_prospectus_sample.md`
- `tests/test_data/en/finance/supply_chain_analysis_sample.md`
- `tests/test_data/en/general/arbitrary_tech_news.md`
- `tests/test_data/en/general/biography_scientist.md`
- `tests/test_data/en/general/cross_reference_coffee.md`
- `tests/test_data/en/general/encyclopedia_machine_learning.md`
- `tests/test_data/en/general/regulation_company_policy.md`
- `tests/test_data/en/general/social_network_entrepreneur_story.md`
- `tests/test_data/en/general/spatio_temporal_event_report.md`
- `tests/test_data/en/industry/equipment_technical_manual.md`
- `tests/test_data/en/industry/failure_analysis_report.md`
- `tests/test_data/en/industry/operation_maintenance_manual.md`
- `tests/test_data/en/industry/safety_management_handbook.md`
- `tests/test_data/en/legal/compliance_filing_sample.md`
- `tests/test_data/en/legal/court_judgment_sample.md`
- `tests/test_data/en/legal/legal_treatise_sample.md`
- `tests/test_data/en/legal/msa_contract_sample.md`
- `tests/test_data/en/medicine/clinical_guideline_sample.md`
- `tests/test_data/en/medicine/discharge_summary_sample.md`
- `tests/test_data/en/medicine/package_insert_sample.md`
- `tests/test_data/en/medicine/pathology_report_sample.md`
- `tests/test_data/en/medicine/textbook_sample.md`
- `tests/test_data/en/tcm/herb_property_single.md`
- `tests/test_data/en/tcm/herbal_compendium_sample.md`
- `tests/test_data/en/tcm/medical_case_record_sample.md`
- `tests/test_data/en/tcm/meridian_treatise_sample.md`
- `tests/test_data/en/tcm/prescription_formulary_sample.md`
- `tests/test_data/en/tcm/prescription_modification_sample.md`
- `tests/test_data/zh/finance/annual_report_sample.md`
- `tests/test_data/zh/finance/earnings_call_transcript_sample.md`
- `tests/test_data/zh/finance/equity_research_report_sample.md`
- `tests/test_data/zh/finance/financial_news_sample.md`
- `tests/test_data/zh/finance/ipo_prospectus_sample.md`
- `tests/test_data/zh/finance/supply_chain_analysis_sample.md`
- `tests/test_data/zh/general/arbitrary_tech_news.md`
- `tests/test_data/zh/general/biography_scientist.md`
- `tests/test_data/zh/general/cross_reference_coffee.md`
- `tests/test_data/zh/general/encyclopedia_machine_learning.md`
- `tests/test_data/zh/general/regulation_company_policy.md`
- `tests/test_data/zh/general/social_network_entrepreneur_story.md`
- `tests/test_data/zh/general/spatio_temporal_event_report.md`
- `tests/test_data/zh/industry/equipment_technical_manual.md`
- `tests/test_data/zh/industry/failure_analysis_report.md`
- `tests/test_data/zh/industry/operation_maintenance_manual.md`
- `tests/test_data/zh/industry/safety_management_handbook.md`
- `tests/test_data/zh/legal/compliance_filing_sample.md`
- `tests/test_data/zh/legal/court_judgment_sample.md`
- `tests/test_data/zh/legal/legal_treatise_sample.md`
- `tests/test_data/zh/legal/msa_contract_sample.md`
- `tests/test_data/zh/medicine/clinical_guideline_sample.md`
- `tests/test_data/zh/medicine/discharge_summary_sample.md`
- `tests/test_data/zh/medicine/package_insert_sample.md`
- `tests/test_data/zh/medicine/pathology_report_sample.md`
- `tests/test_data/zh/medicine/textbook_sample.md`
- `tests/test_data/zh/tcm/herb_property_single.md`
- `tests/test_data/zh/tcm/herbal_compendium_sample.md`
- `tests/test_data/zh/tcm/medical_case_record_sample.md`
- `tests/test_data/zh/tcm/meridian_treatise_sample.md`
- `tests/test_data/zh/tcm/prescription_formulary_sample.md`
- ... 17 more

### CI/Docker 후보

- `.github/workflows/docs.yml`
- `.github/workflows/integration.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 241 |
| .py | 134 |
| .yaml | 43 |
| .svg | 8 |
| .yml | 7 |
| .jpg | 5 |
| .gitignore | 2 |
| .txt | 2 |
| .example | 1 |
| .gitkeep | 1 |
| .lock | 1 |
| .png | 1 |
| .python-version | 1 |
| .toml | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `hyperextract/ 내부 책임 분리`
- `docs/en/ 내부 책임 분리`
- `docs/en/cli/commands/build-index.md 스펙/명령 의미`
- `docs/en/cli/commands/config.md 스펙/명령 의미`
- `docs/en/cli/commands/feed.md 스펙/명령 의미`
- `docs/en/cli/commands/info.md 스펙/명령 의미`
- `docs/en/cli/commands/list.md 스펙/명령 의미`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

