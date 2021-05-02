FROM node:latest

ADD *.json ./

WORKDIR /app

#RUN npm install

ADD . .

CMD npm install; npm start