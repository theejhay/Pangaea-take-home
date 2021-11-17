- Clone the repo
  

  **For Subscriber**
-
- Run `npm install` to install the dependences
- rename .env.default to .env inside the root directory
- Add env for PORT and RabbitMQ parametres
- Run `npm run dev` to start the subscriber server in development mode
- Make a POST request to `/subscriber/:topic` :topic is a variable that will be used to check if there is any message in the queue created from the publisher server with the topic variable.

- Run `npm run build` to build for production
- Run `npm run production` to build the app and start the server in production mode.


  **For Publisher**
-

- Run `npm install` to install the dependences

- rename .env.default to .env inside the root directory

- Add env for PORT and RabbitMQ parameters

- Run `npm run dev` to start the subscriber server in development mode

- Make a POST request to `/publish/:topic` :topic is a variable that will be used to create queue name for subscriber service to consume the topic message.

- Run `npm run build` to build for production

- Run `npm run production` to build the app and start the server in production mode.


**To run the Bash Script**
-
`bash start-server.sh`

*This would start the docker to run the two services and consume the endpoints*

