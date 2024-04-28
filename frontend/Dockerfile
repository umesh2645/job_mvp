# Stage 1: Build the React app
FROM node:lts-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production --silent

# Copy the rest of the application code
COPY . .

# Build the React app
ENV NODE_ENV=production
ENV REACT_APP_BASE_URL=http://localhost:7071/api
ENV REACT_APP_VERSION=0.1.0
RUN npm run build

# Stage 2: Serve the built React app
FROM nginx:alpine

# Copy the built app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]