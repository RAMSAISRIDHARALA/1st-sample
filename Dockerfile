FROM node:18
WORKDIR /user/index.html
COPY .* ./
RUN npm i 
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
