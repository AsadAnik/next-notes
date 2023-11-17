# Use an official Node.js runtime as a parent image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Copy the rest of your application code to the container
COPY . .

# Installing applications dependencies
RUN npm install

# Expose the port your application will listen on
EXPOSE 3000

# Starting the application dev server
CMD ["npm", "run", "dev"]