FROM node:alpine

WORKDIR /app

#Entry Point

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]