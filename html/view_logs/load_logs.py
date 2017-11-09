#!/usr/bin/env python

from __future__ import print_function

import os
import sys
import json

# File path of the CSV file to save data entries to
DATA_PATH = os.path.expanduser('~/Developer/frc-scouting/data.out')

# A list describing the elements of the data objects
DESCRIPTIONS = ["Team number", "Color", "Can throw", "Can climb", "Notes"]

# Print the JSON output type, followed by a newline
print('Content-Type: application/json\n')

# Load the lines of the file as JSON objects and add them to a list
with open(DATA_PATH) as data_file:
    line_objects = [json.loads(line) for line in data_file.readlines()]

# Combine the descriptions and the line objects into JSON object
output_data = {'descriptions': DESCRIPTIONS, 'objects': line_objects}

# Serialize and print the data
print(json.dumps(output_data))
