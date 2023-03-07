FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm i 
RUN npm i -g nodemon

COPY . . 

CMD ["nodemon", "-L" , "index.js"]