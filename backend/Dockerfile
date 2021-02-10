FROM node:14

WORKDIR /srv/www

ARG DEFAULT_MONGO_URL="mongodb://host.docker.internal:27017/"

COPY package.json .

RUN npm install


COPY . .

EXPOSE 3001

ENV MONGO_URL=$DEFAULT_MONGO_URL

CMD ["npm", "start"]