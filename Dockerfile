FROM node:18.15.0 as node

ARG APP_DOMAIN=${APP_DOMAIN}

ENV APP_DOMAIN=$APP_DOMAIN

RUN mkdir /app
WORKDIR /app

# Install dependencies
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock


RUN yarn install

# Copy artifact to NGINX container
COPY . /app/

RUN yarn disable-telemetry
RUN yarn build

FROM nginx:alpine
RUN rm -rf /user/share/nginx/html/*
COPY --from=node /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
