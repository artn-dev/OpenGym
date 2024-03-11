FROM node:21-alpine

WORKDIR /app/rotinas
COPY package*.json ./
RUN npm install

COPY . .
RUN npm install -g knex

EXPOSE 3001
CMD ["sh"]
