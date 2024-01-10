FROM node:21-alpine

# specify build argument and pass as environment variable to image, production is default
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

