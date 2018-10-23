import { Router } from 'express'
import pay from './pay'

const router = Router()
router.post('/pay', pay)

export default router
