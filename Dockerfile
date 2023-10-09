FROM node:16.13.0-alpine AS wellwatcherfrontend

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
#RUN npm run buildwithbase

FROM nginx:alpine
COPY --from=wellwatcherfrontend /app/dist/well-watcher /usr/share/nginx/html/
EXPOSE 81
