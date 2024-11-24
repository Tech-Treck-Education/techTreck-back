import { Router } from 'express'
import usersRepository from '../repositories/usersRepository.js'


const router = Router()

router.post('/', async (req, res) => {
    try {
        const { name, password, email } = req.body
        res.json(await usersRepository.create(name, email, password))
    } catch (error) {
        res.json({ message: 'Houve um erro ao criar usuario' })
    }

})

router.get('/', async (req, res) => {
    res.json(
        await usersRepository.findAll()
    )
})

router.get('/:id', async (req, res) => {
    const user = await usersRepository.findById(req.params.id);
    if (user) {
        res.json({ user });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

router.delete('/:id', async (req, res) => {
    const deletedUser = await usersRepository.remove(req.params.id)

    if (deletedUser) {
        res.json(deletedUser)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, password, level, score } = req.body

    const editedUser = await usersRepository.update(id, { name, email, password, level, score })

    if (editedUser) {
        res.json({ editedUser, message: 'Usuario editado com sucesso' })
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})
export default router 