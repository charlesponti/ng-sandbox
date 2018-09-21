# Stage 1
FROM node:carbon-alpine as builder

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

RUN yarn global add @angular/cli

RUN ng build --prod

# Stage 2
FROM nginx:1.15

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/app/dist/ng-sandbox .