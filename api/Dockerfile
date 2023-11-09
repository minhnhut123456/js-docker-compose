FROM node:16-alpine as base

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
RUN apk add curl
COPY . /app

ENV PORT=5051
ENV NODE_ENV=production

EXPOSE $PORT

CMD ["node", "index.js"]