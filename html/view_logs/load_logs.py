#!/usr/bin/env python

from __future__ import print_function

import os
import sys

# File path of the CSV file to save data entries to
DATA_PATH = os.path.expanduser('~/Developer/frc-scouting/data.csv')

# Print the JSON output type, followed by a newline
print('Content-Type: application/json\n')

# Load all of the lines from the file
with open(DATA_PATH) as data_file:
    data_lines = data_file.readlines()

# Print an open bracket marking the beginning of a JSON list
print('[')

# Iterate over each of the data lines
for i in range(len(data_lines)):

    # If this is not the first element, print a comma to separate the elements of the list
    if i:
        print(',')

    # Get the current line
    line = data_lines[i]

    # Remove whitespace from the beginning and end of the line
    line = line.strip()

    # Print the line, sending it to the JavaScript calling this script
    print(line)

# Print a closing bracket to terminate the list
print(']')
