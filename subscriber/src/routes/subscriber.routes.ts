import { Router } from 'express'
import { subscribeToTopic } from '../controllers/subscriber.controller'

const router = Router()

router.route('/:topic').post(subscribeToTopic)

export default router