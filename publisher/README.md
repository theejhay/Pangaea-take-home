- Clone the repo

- Run `npm install` to install the dependences

- Create .env inside the root directory

- Add env for PORT and RabbitMQ parameters

- Run `npm run dev` to start the subscriber server in development mode

- Make a POST request to `/publish/:topic` :topic is a variable that will be used to create queue name for subscriber service to consume the topic message.

- Run `npm run build` to build for production

- Run `npm run production` to build the app and start the server in production mode.
