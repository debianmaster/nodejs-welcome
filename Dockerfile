FROM node:latest
WORKDIR /app
COPY package.json package.json
RUN npm install 
COPY . /app
CMD ['npm','start']
