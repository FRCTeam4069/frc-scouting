#!/usr/bin/env python

import os
import sys

# File path of the CSV file to save data entries to
DATA_PATH = os.path.expanduser('~/Developer/frc-scouting/data.csv')

# Print the JSON output type, followed by a newline
print('Content-Type: application/json\n')

# Load all of the lines from the file
with open(DATA_PATH) as data_file:
    data_lines = data_file.readlines()

# Iterate over each of the data lines
for line in data_lines:

    # Remove whitespace from the beginning and end of the line
    line = line.strip()

    # Print the unprocessed line, sending it to the JavaScript calling this script
    print(line)
