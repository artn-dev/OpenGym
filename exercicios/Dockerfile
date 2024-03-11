FROM node:21-alpine

WORKDIR /app/exercicios
COPY package*.json ./
RUN npm install

COPY . .
RUN npm install -g knex

EXPOSE 4000
CMD ["sh"]
