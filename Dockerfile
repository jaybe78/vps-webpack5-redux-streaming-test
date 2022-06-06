ARG RELEASE_ENV=production
FROM node:18.2-alpine3.14 as base
RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*
ARG NODE_ENV=productiom
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/


