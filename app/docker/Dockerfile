FROM node:18-alpine as base

LABEL maintainer="anhnhut"

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app

ARG BLOG_ENDPOINT

ENV PORT=3008
ENV NODE_ENV=production
ENV REACT_APP_BLOG_ENDPOINT=${BLOG_ENDPOINT}


FROM base AS build
RUN yarn build

FROM nginx:1.23-alpine AS release
WORKDIR /app
COPY ./docker/nginx.conf /etc/nginx/nginx.conf.template
COPY --from=build /app/build/ /app
COPY --from=build /app/docker/docker-entrypoint.sh /app/docker-entrypoint.sh

EXPOSE $PORT

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
