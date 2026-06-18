#!/usr/bin/env python3
import json
import re
import sys

event = json.load(sys.stdin)
payload = json.dumps(event)
blocked = [
    r"git\s+reset\s+--hard",
    r"rm\s+-rf\s+/",
    r"OPENAI_API_KEY=",
    r"CODEX_API_KEY=",
]

if any(re.search(pattern, payload, re.I) for pattern in blocked):
    print(json.dumps({"decision": "block", "reason": "Blocked by local Codex harness policy."}))
else:
    print(json.dumps({"decision": "allow"}))
