FROM node:21-alpine

WORKDIR /usr/app

COPY package*.json .

ENV NODE_ENV=development

RUN ["npm", "install", "-y"]

COPY . .

CMD ["npm run dev"]

EXPOSE 3000