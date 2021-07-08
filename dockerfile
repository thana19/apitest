FROM node:alpine

WORKDIR /app

#Entry Point

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","start"]