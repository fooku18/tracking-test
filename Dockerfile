FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src .

EXPOSE 2999

CMD [ "node", "server.js" ]
