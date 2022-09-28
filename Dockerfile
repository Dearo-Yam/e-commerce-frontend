FROM node as build-deps
WORKDIR /usr/src/app
COPY package.json  ./
RUN npm install --legacy-peer-deps
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-deps /usr/src/app/dist/*/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
#COPY */nginx.conf /etc/nginx/conf*/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
