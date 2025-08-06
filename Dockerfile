# Use an official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install the application dependencies using npm
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 8080
EXPOSE 8080

# Define the command to run the application
CMD [ "npm", "start" ]
