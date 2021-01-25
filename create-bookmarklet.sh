#!/usr/bin/env bash

# Escape octal number sequences, remove all "`" characters, then wrap each line in '$LINE\n'+ and finally remove the trailing "+" using `head`
sed -e 's/`//g' -e 's/\\[0-9][0-9]/\\\0/g' tailwind.css \
  | awk 'BEGIN {ORS=""} { print "`" $0 "\\n`+" }' | head -c -1 > escaped-multiline

# Replace the text marker with the contents of our escaped file
sed '/<<REPLACE>>/{
r escaped-multiline
d
}' index.js > bookmarklet.js

rm escaped-multiline