import amqplib from 'amqplib'
import { QUEUE_HOST, QUEUE_PASSWORD, QUEUE_PROTOCOL, QUEUE_USER } from '../utils/env.util'

const queueurl = `${QUEUE_PROTOCOL}${QUEUE_USER}${QUEUE_PASSWORD}${QUEUE_HOST}${QUEUE_USER}`

export const sendMessage = async (topic: string, message: string) => {
    try {
        const connect = await amqplib.connect(queueurl)
        const channel = await connect.createChannel()
        channel.assertQueue(topic, {
            durable: false
        })
        const queueMsg = channel.sendToQueue(topic, Buffer.from(message))
        setTimeout(() => {
            connect.close()
        }, 1000)

        return queueMsg

    } catch (error) {
        return console.log(error)
    }
}