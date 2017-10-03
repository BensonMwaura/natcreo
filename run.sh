#!bin/bash
PATH=$PATH:$(bash bin)
set -x

# Production build
ng build --prod

# Serve
cd dist
live-server
