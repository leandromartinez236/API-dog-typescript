import express from 'express'
import { createDog, getAllDogs, getDog, updateDog, deleteDog } from '../controllers/dog.controller'
const router = express.Router()

router.get('/', getAllDogs)

router.get('/:id', getDog)

router.post('/', createDog)

router.put('/:id', updateDog)

router.delete('/:id', deleteDog)

export default router
