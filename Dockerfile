FROM node:6.10-alpine

# set environment variables.
ARG MONGO_SERVER
ENV MONGO_SERVER=$MONGO_SERVER

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./api/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./api /usr/src/app

EXPOSE 7000

CMD ["npm", "start"]