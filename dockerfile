FROM node:alpine

WORKDIR /use/app

#Entry Point

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","start"]