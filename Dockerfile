FROM node:18
WORKDIR /user/index.html
COPY .* ./
RUN npm i -f
EXPOSE 3000
CMD [ "npm", "start" ]
