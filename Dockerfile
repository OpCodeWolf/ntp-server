# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and tsconfig.json
COPY package.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the NTP port
EXPOSE 123/udp

# Command to run the NTP server
CMD ["npm", "start"]
