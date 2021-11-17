import { Request, Response } from 'express'
import { customResponse, serverError, successResponse } from '../utils/response.util'
import { sendMessage } from '../utils/queue.util'

export const postTopic = async (req: Request, res: Response) => {
    try {
        const { message } = req.body
        const { topic } = req.params
        const amqpMsg = await sendMessage(topic, message)
        if (amqpMsg) {
            return successResponse(res, req.body)
        } else {
            return customResponse(res, 503, false)
        }


    } catch (error: any) {
        console.log()
        return serverError(res, error)
    }
}