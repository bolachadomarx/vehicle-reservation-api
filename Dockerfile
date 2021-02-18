FROM node:14.15.4-alpine3.12

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "build"]
