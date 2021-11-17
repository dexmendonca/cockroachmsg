FROM node:lts-alpine

WORKDIR /usr/cockroachmsg

COPY package*.json ./
COPY *.lock ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9500

CMD [ "npm", "run", "dev" ]