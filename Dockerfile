# Base image
FROM node:8

RUN npm i -g webpack
ENV NODE_ENV=development

WORKDIR /web

COPY package.json .
RUN npm install --quiet && npm cache clean -f

COPY ./src ./src
COPY ./webpack.dev.js ./webpack.dev.js
COPY ./config ./config

EXPOSE 2017

CMD npm run start:dev-web