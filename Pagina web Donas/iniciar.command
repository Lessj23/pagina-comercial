#!/bin/bash
cd "$(dirname "$0")"
echo "=========================================================="
echo "🍩 Iniciando More Donuts..."
echo "📍 Abriendo navegador en http://localhost:8080"
echo "=========================================================="
sleep 1
open "http://localhost:8080"
ruby server.rb
