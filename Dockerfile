FROM node
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt -y install nodejs && npm install -g npm@8.19.1 && apt install nginx -y
COPY ./ /home/node/app
WORKDIR /home/node/app
RUN npm install
CMD ["npm", "run", "start"]
