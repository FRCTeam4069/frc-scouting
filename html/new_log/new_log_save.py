#!/usr/bin/env python3

import json


# Load the arguments into a dictionary from the JSON format
arguments = json.loads(input())

# Print the output type, followed by a newline
print('Content-Type: application/json\n')

# Return a JSON-encoded success message
success_message = json.dumps({'success': True})
print(success_message)
