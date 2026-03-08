FROM node:20

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 18789

CMD ["npm", "start"]
