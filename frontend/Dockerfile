FROM node:14

WORKDIR /srv/www

COPY package*.json ./

RUN npm install



COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
