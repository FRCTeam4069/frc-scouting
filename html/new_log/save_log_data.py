#!/usr/bin/env python

from __future__ import print_function

import os
import sys
import json

# File path of the CSV file to save data entries to
DATA_PATH = os.path.expanduser('~/Developer/frc-scouting/data.out')

# Print the JSON output type, followed by a newline
print('Content-Type: application/json\n')

# Load the data from standard input
data = raw_input()

# Open the CSV file
with open(DATA_PATH, 'a') as data_file:

    # Append the data string to the file
    data_file.write(data + '\n')

# Return a JSON-encoded success message
success_message = json.dumps({'success': True})
print(success_message)
