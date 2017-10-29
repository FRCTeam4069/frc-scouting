#!/usr/bin/env python3

import os
import json

# File path of the CSV file to save data entries to
DATA_PATH = '/var/www/frc-scouting/data.csv'

# Print the output type, followed by a newline
print('Content-Type: application/json\n')

# Load the data from standard input
data = input()

# Open the CSV file
with open(DATA_PATH, 'a') as data_file:

    # Append the data string to the file
    print(data, file=data_file)

# Return a JSON-encoded success message
success_message = json.dumps({'success': True})
print(success_message)
