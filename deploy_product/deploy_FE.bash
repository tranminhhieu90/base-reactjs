echo Start deploy server FE usmall
ssh -t -i "/home/gems/Downloads/Key.pem" ubuntu@54.180.199.100 "cd ~/nerman/web_ui && git pull origin main && npm install && npm run build && sudo rm -rf /var/www/html/* && cd build && sudo cp * -r /var/www/html/ && sudo systemctl restart nginx"
echo Deploy done