FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./app
EXPOSE 3333
CMD ["npm", "run", "production"]