#!/usr/bin/env python3

import os
import sys
import json

# Load and import a script that handles the boilerplate
script_directory = os.path.dirname(os.path.realpath(__file__))
sys.path.append(script_directory + '/..')
from html.common.python_cgi_setup import DATA_PATH

# Load the data from standard input
data = input()

# Open the CSV file
with open(DATA_PATH, 'a') as data_file:

    # Append the data string to the file
    print(data, file=data_file)

# Return a JSON-encoded success message
success_message = json.dumps({'success': True})
print(success_message)
