import { Router } from 'express'
import { postTopic } from '../controllers/publisher.controller'

const router = Router()

router.route('/:topic').post(postTopic)

export default router