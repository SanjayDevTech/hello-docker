FROM node:alpine

WORKDIR /app

ENV PORT 8080

RUN pwd

COPY . /app

RUN npm install

CMD npm start

