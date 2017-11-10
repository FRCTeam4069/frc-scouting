#!/usr/bin/env python

from __future__ import print_function

import os
import sys
import json

# File path of the CSV file to save data entries to
DATA_PATH = os.path.expanduser('~/Developer/frc-scouting/data.out')

# A list describing the elements of the data objects
DESCRIPTIONS = ["Team number", "Color", "Can throw", "Can climb", "Notes"]

# Create a dictionary for output holding the descriptions, which will be added to later
output_data = {'descriptions': DESCRIPTIONS}

# Print the JSON output type, followed by a newline
print('Content-Type: application/json\n')

# Attempt to open the file
try:
    # Load the lines of the file as JSON objects and add them to a list
    with open(DATA_PATH) as data_file:
        line_objects = [json.loads(line) for line in data_file.readlines()]

    # If the list is empty, throw an error
    if len(line_objects) == 0:
        raise IOError('Log file is empty')

    # Add the line objects and a success flag to the output data
    output_data['objects'] = line_objects
    output_data['success'] = True

# If opening the file fails, most likely because it does not exist,
# it was empty, or the JSON was invalid
except (IOError, ValueError):
    # Add a failure flag to the output data
    output_data['success'] = False

# Serialize and print the data
print(json.dumps(output_data))
raise IOError(json.dumps(output_data))
