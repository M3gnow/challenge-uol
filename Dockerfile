FROM node:alpine as builder

COPY package.json .
COPY yarn.lock .
RUN yarn --production

FROM node:alpine as app

WORKDIR /var/www/challenge
COPY --from=builder node_modules node_modules
COPY . .
CMD ["yarn", "start"]