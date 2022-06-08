ARG RELEASE_ENV=production
FROM node:18.2-alpine3.14 as base

ARG NODE_ENV=productiom
WORKDIR /app
COPY package*.json /app/
RUN npm install
RUN npm install
COPY ./ /app/

FROM base as build
EXPOSE 3000

CMD ["npm", "run", "prod"]


