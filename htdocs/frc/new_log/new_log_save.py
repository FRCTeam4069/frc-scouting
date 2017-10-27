#!/usr/bin/env python3

import sys
import json

data = json.load(sys.stdin)

with open('/tmp/test', 'w') as f:
    f.write(data)

print('Content-Type: application/json\n\n')
print("'success': true")
