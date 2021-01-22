#!/usr/bin/env bash

# Escape octal number sequences, remove all "`" characters, then wrap each line in `${LINE}\n`+ and finally remove the trailing "+"
sed -e 's/\\[0-9][0-9]/\\\0/g' -e 's/`//g' -e 's/^/\`/' -e 'a \\\n\`+' tailwind.css | head -c -2 > escaped-multiline

# Replace the text marker with the contents of our escaped file
sed '/<<REPLACE>>/{
r escaped-multiline
d
}' index.js > bookmarklet.js

rm escaped-multiline