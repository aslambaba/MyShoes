FROM node
RUN apt-get update
RUN apt install nginx -y
COPY ./ /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN touch main.txt