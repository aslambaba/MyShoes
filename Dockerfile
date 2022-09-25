FROM node
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt -y install nodejs && npm install -g npm@8.19.1 && apt install nginx -y
COPY ./ /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN mv nginx.conf /etc/nginx/nginx.conf
RUN /etc/init.d/nginx restart
RUN npm install pm2@latest -g && npm install
RUN pm2 start --name MyShoe npm -- start
