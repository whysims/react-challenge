FROM node:16.18.0-alpine3.15 AS base

RUN apk add --no-cache bash
WORKDIR /code

ADD package.json  ./


# Development
FROM base AS dev

WORKDIR /code
COPY ./ ./

RUN npm install

CMD ["npm", "run", "dev"]