import express from 'express'
import { getGenres } from '../controllers/genreController'

const router = express.Router()

router.get('/', getGenres)

export default router
