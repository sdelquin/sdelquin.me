#!/bin/bash

git push; ssh production 'cd ~/code/sdelquin.me; git pull; npm install --no-save; npm run build'
