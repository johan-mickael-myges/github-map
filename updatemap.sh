#!/bin/bash

currentmap=$(cat map.tmj)
destmap="src/api/data/map.js"

echo "const map = $currentmap;" > "$destmap"
echo -e "\nexport default map;" >> "$destmap"
