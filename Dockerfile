FROM node:10-alpine as builder

# install deps
RUN apk add git

# build
WORKDIR /application

# install modules
ADD ./package*.json ./
RUN npm install

# build app
ADD . .
RUN npm run build

# runner image
FROM node:10-alpine
WORKDIR /application
COPY --from=builder /application/ /application/
CMD npm run start
EXPOSE 8081
