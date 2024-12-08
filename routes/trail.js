import { Router } from 'express'
import trailRepository from '../repositories/trailRepository.js'


const router = Router()

router.post('/', async (req, res) => {
    try {
        const { name, imageUrl } = req.body
        res.json(await trailRepository.create(name, imageUrl))
    } catch (error) {
        res.json({ message: 'Houve um erro ao criar trilha' })
    }

})

router.get('/', async (req, res) => {
    res.json(
        await trailRepository.findAll()
    )
})

router.get('/:id', async (req, res) => {
    const trail = await trailRepository.findById(req.params.id);
    if (trail) {
        res.json({ trail });
    } else {
        res.status(404).json({ message: 'Trail not found' });
    }
})

router.delete('/:id', async (req, res) => {
    const deletedTrail = await trailRepository.remove(req.params.id)

    if (deletedTrail) {
        res.json(deletedTrail)
    } else {
        res.status(404).json({ message: 'Trail not found' })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, imageUrl } = req.body

    const editedTrail = await trailRepository.update(id, { name, imageUrl })

    if (editedTrail) {
        res.json({ editedTrail, message: 'Trilha editada com sucesso' })
    } else {
        res.status(404).json({ message: 'Trail not found' })
    }
})
export default router 