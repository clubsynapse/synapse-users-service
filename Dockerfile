FROM node:8
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
RUN yarn global add nodemon
COPY . .
CMD ["./run.sh"]