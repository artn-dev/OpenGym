FROM node:21-alpine

WORKDIR /app/opengym
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4002
CMD ["sh"]
