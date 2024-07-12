# Building stage

FROM node:20.13.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node" , "app.js" ]
