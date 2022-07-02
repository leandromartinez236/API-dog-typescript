import express from 'express'
const router = express.Router()

router.get('/', (_req, res) => {
  return res.send('get all dogs')
})
router.get('/:id', (_req, res) => {
  return res.send('get one dog')
})
router.post('/', (_req, res) => {
  return res.send('create a dog')
})
router.put('/:id', (_req, res) => {
  return res.send('update dog')
})
router.delete('/:id', (_req, res) => {
  return res.send('delete a dog')
})

export default router
