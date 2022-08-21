FROM node:18.7.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install express@4.17.1
RUN npm install axios@0.27.2

COPY . .

EXPOSE 3001

CMD [ "node", "server.js" ]


