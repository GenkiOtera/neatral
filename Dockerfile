FROM node:18-slim

WORKDIR /usr/src/neatral

RUN apt-get update
RUN echo y | apt-get install git

RUN npm install -g @angular/cli@14.0.6
RUN npm install -g firebase@9.9.0
RUN npm install -g firebase-tools@11.2.2

EXPOSE 4200