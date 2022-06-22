FROM node:alpine

RUN apk update && apk add bash

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm i

COPY . .

CMD ["npm", "start"]
