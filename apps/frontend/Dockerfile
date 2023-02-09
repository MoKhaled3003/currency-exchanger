# Build stage
FROM node:16.19.0-alpine3.16 As builder
WORKDIR /usr/currency_exchanger_frontend
COPY . .
RUN npm install --force
RUN npm run build

# nginx state for serving content
FROM nginx
WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /usr/currency_exchanger_frontend/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]