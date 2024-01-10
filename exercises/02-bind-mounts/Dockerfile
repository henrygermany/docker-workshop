FROM node:21-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

ENV NODE_PATH = /modules

WORKDIR /app


COPY package*.json ./
RUN npm install


EXPOSE 3000

CMD ["npm", "run", "start:prod"]

