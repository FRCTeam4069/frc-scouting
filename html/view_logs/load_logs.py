#!/usr/bin/env python3

import os
import sys

# Load and import a script that handles the boilerplate
script_directory = os.path.dirname(os.path.realpath(__file__))
sys.path.append(script_directory + '/..')
from html.common.python_cgi_setup import DATA_PATH
