import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js'
import { authorizeUser } from '../middleware/authMiddleware.js'

const router = express.Router()

// TODO: Authorize user when registering and logging in
router.post('/', registerUser)
router.post('/login', authorizeUser, loginUser)

export default router
