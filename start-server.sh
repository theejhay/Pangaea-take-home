#!/bin/sh
#start subscriber
cd subscriber
docker-compose up -d

#start publisher
cd ../
cd publisher
docker-compose up -d

curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:3333/test1"}' http://localhost:3333/subscribe/create-a-topic curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:3333/test2"}' http://localhost:3333/subscribe/create-a-topic curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:2222/publish/create-a-topic