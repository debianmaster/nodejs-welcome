FROM node:4.2.2

EXPOSE 8080
EXPOSE 5858
WORKDIR /app

ADD package.json /app/package.json
RUN npm install
ADD . /app
CMD ["npm","start"]
