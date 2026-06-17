# onlybooks/llm 코드 레벨 분석

생성일: 2026-06-17T23:31:44.648Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/template |
| maturity | D small/demo/list (25) |
| stars | 200 |
| language | Jupyter Notebook |
| tags | rag, document-chat, korea-signal |
| files/code/source | 16/2/2 |
| tests/ci | 0/0 |
| local path | sources/onlybooks__llm |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | absent | 0 | 0 |  |
| Parsing/OCR/document extraction | absent | 0 | 0 |  |
| Chunking/splitting | absent | 0 | 0 |  |
| Embedding/vector index | code | 2 | 1 | 06장/api_request_parallel_processor.py:298 """Count the number of tokens in the request. Only supports completion and embedding requests.""" |
| Retrieval/search/rerank | code | 2 | 1 | 06장/api_request_parallel_processor.py:279 match = re.search("^https://[^/]+/v\\d+/(.+)$", request_url) |
| Wiki/graph/entity model | absent | 0 | 0 |  |
| Memory/update lifecycle | absent | 0 | 0 |  |
| Provenance/citation/evidence | absent | 0 | 0 |  |
| Evaluation/observability | absent | 0 | 0 |  |
| Agent/MCP/tool surface | code | 2 | 1 | 06장/api_request_parallel_processor.py:219 """Calls the OpenAI API and saves results.""" |

## 의존성 신호

_없음_

## 주요 파일 후보

### Embedding/vector index

- `06장/api_request_parallel_processor.py`
- `README.md`

### Retrieval/search/rerank

- `06장/api_request_parallel_processor.py`
- `README.md`

### Agent/MCP/tool surface

- `06장/api_request_parallel_processor.py`
- `README.md`

## Evidence lines

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| 06장/api_request_parallel_processor.py | 298 | """Count the number of tokens in the request. Only supports completion and embedding requests.""" |
| 06장/api_request_parallel_processor.py | 332 | # if embeddings request, tokens = input tokens |
| 06장/api_request_parallel_processor.py | 333 | elif api_endpoint == "embeddings": |
| 06장/api_request_parallel_processor.py | 343 | 'Expecting either string or list of strings for "inputs" field in embedding request' |
| 06장/api_request_parallel_processor.py | 368 | parser.add_argument("--request_url", default="https://api.openai.com/v1/embeddings") |
| README.md | 249 | 12.3 실습: HNSW 인덱스의 핵심 파라미터 이해하기 |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| 06장/api_request_parallel_processor.py | 279 | match = re.search("^https://[^/]+/v\\d+/(.+)$", request_url) |
| 06장/api_request_parallel_processor.py | 282 | match = re.search(r"^https://[^/]+/openai/deployments/[^/]+/(.+?)(\?\|$)", request_url) |
| README.md | 216 | __10.4.1 키워드 검색 방식: BM25 |
| README.md | 219 | __10.5.1 BM25 구현하기 |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| 06장/api_request_parallel_processor.py | 219 | """Calls the OpenAI API and saves results.""" |
| 06장/api_request_parallel_processor.py | 281 | # for Azure OpenAI deployment urls |
| 06장/api_request_parallel_processor.py | 282 | match = re.search(r"^https://[^/]+/openai/deployments/[^/]+/(.+?)(\?\|$)", request_url) |
| 06장/api_request_parallel_processor.py | 368 | parser.add_argument("--request_url", default="https://api.openai.com/v1/embeddings") |
| README.md | 191 | __9.2.2 실습: OpenAI API 캐시 구현 |
| README.md | 196 | __9.4.1 OpenAI API 로깅 |
| README.md | 333 | A.3 OpenAI 토큰 |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- Memory/update lifecycle
- tests
- ci
