# Stage 1: Build React App
FROM node:lts-alpine as build
WORKDIR /app
ARG NODE_ENV
ARG REACT_APP_BASE_URL
ARG REACT_APP_VERSION

# Set default values for build-time arguments
ARG DEFAULT_NODE_ENV=production
ARG DEFAULT_REACT_APP_BASE_URL=http://localhost:7071/api
ARG DEFAULT_REACT_APP_VERSION=0.1.0

# Use build-time arguments or defaults
ENV NODE_ENV=${NODE_ENV:-$DEFAULT_NODE_ENV}
ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL:-$DEFAULT_REACT_APP_BASE_URL}
ENV REACT_APP_VERSION=${REACT_APP_VERSION:-$DEFAULT_REACT_APP_VERSION}

COPY package*.json ./
RUN npm install --production --silent
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve React App with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY .nginx /etc/nginx/.nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]