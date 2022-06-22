FROM node:alpine

RUN apk update && apk add bash

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

CMD ["npm", "run", "start"]
