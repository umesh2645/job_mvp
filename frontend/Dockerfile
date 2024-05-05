FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --production --silent
COPY . .

ARG REACT_APP_BASE_URL
ARG DEFAULT_REACT_APP_BASE_URL=http://localhost:7071/api

ENV NODE_ENV=production
ENV REACT_APP_VERSION=0.1.0
ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL:-$DEFAULT_REACT_APP_BASE_URL}
RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=build /app/build /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]