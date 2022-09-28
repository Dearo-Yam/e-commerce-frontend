FROM node as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN npm install
RUN npm run build --prod

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/dist/front-end /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
