echo Start deploy server BE usmall
ssh -t -i "/home/gems/Downloads/Key.pem" ubuntu@54.180.199.100  "cd ~/nerman/web_api && git pull origin main && npm install && npm run build && pm2 list && pm2 restart all"
echo Deploy done