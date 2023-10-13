FROM node:18
WORKDIR /index.html
COPY . ./
#RUN yarn 
#RUN yarn run build
EXPOSE 3000
CMD [ "yarn", "start" ]
