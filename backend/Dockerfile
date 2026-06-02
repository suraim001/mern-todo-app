# Use Node.js runtime as the base image
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm install

# Copy all backend source code
COPY . .

# Expose the port your Express server listens on (e.g., 5000)
EXPOSE 5000

# Command to start the backend server
CMD ["npm", "start"]