FROM node:latest

WORKDIR /usr/app

RUN npm install -g nodemon

CMD [ "npm", "start" ]