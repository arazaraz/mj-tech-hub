#!/bin/bash
set -e
cd /var/www/mj-tech-hub
npm install
npm run build
pm2 restart mj-tech-hub || pm2 start npm --name "mj-tech-hub" -- start
pm2 save
