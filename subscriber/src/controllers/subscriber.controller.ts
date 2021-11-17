import { Request, Response } from 'express'
import { customResponse, serverError, successResponse } from '../utils/response.util'
import { amqpMessageQueue } from '../utils/queue.util'


export const subscribeToTopic = async (req: Request, res: Response) => {
    try {
        const { topic } = req.params
        const messages: any = await amqpMessageQueue(topic)

        if (messages.length !== 0) {
            const resp = {
                url: req.body.url,
                messages
            }
            return successResponse(res, resp)
        }

        return customResponse(res, 404, false, 'No topic found')



    } catch (error: any) {
        console.log(error)
        return serverError(res, error)
    }
}