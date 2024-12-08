import { Router } from 'express';
import courseRepository from '../repositories/courseRepository.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { name, imageUrl, trailId } = req.body;
        const course = await courseRepository.create(name, imageUrl, trailId);
        res.json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao criar o curso' });
    }
});

router.get('/', async (req, res) => {
    try {
        const courses = await courseRepository.findAll();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao buscar os cursos' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const course = await courseRepository.findById(req.params.id);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: 'Curso não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao buscar o curso' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, imageUrl, trailId } = req.body;
        const updatedCourse = await courseRepository.update(id, { name, imageUrl, trailId });

        if (updatedCourse) {
            res.json({ updatedCourse, message: 'Curso atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Curso não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao atualizar o curso' });
    }
});

// Remover um curso por ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedCourse = await courseRepository.remove(req.params.id);
        if (deletedCourse) {
            res.json(deletedCourse);
        } else {
            res.status(404).json({ message: 'Curso não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao deletar o curso' });
    }
});

export default router;
