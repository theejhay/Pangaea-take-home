import amqplib from 'amqplib'
import { QUEUE_HOST, QUEUE_PASSWORD, QUEUE_PROTOCOL, QUEUE_USER } from '../utils/env.util'

const queueurl = `${QUEUE_PROTOCOL}${QUEUE_USER}${QUEUE_PASSWORD}${QUEUE_HOST}${QUEUE_USER}`

export const amqpMessageQueue = async (topic: string) => {
    try {
        const connect = await amqplib.connect(queueurl)
        const channel = await connect.createChannel()
        channel.assertQueue(topic, {
            durable: false
        })

        let queueMessages: any[] = []
        await channel.consume(topic, (msg) => {
            queueMessages.push(msg?.content.toString())
        }, {
            noAck: true
        })

        return queueMessages

    } catch (error) {
        return console.log(error)
    }
}