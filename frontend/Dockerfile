# Use an official Node runtime as the base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install dependencies
RUN npm install --production --silent

# Copy the rest of the application code
COPY . .

# Build the React app
ENV NODE_ENV=production
ENV REACT_APP_BASE_URL=http://localhost:7071/api
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
