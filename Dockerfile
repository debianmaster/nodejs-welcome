FROM node:4.2.2

EXPOSE 8080
EXPOSE 5858
WORKDIR /app
ADD . /app
RUN npm install 
CMD ["npm","start"]

