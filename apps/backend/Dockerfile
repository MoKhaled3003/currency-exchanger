FROM node:18.14.0-alpine3.16
WORKDIR /usr/currency_exchanger_backend
COPY . .
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
