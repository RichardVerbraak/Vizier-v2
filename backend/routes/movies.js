import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
	res.send('Bye!')
})

export default router
