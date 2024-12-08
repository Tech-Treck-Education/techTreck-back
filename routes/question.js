import { Router } from 'express';
import questionRepository from '../repositories/questionRepository.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { enunciation, courseId } = req.body;
        const newQuestion = await questionRepository.create(enunciation, courseId);
        res.json(newQuestion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao criar a questão' });
    }
});

router.get('/', async (req, res) => {
    try {
        const questions = await questionRepository.findAll();
        res.json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao buscar as questões' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const question = await questionRepository.findById(req.params.id);
        if (question) {
            res.json(question);
        } else {
            res.status(404).json({ message: 'Questão não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao buscar a questão' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { enunciation, courseId } = req.body;
        const updatedQuestion = await questionRepository.update(id, { enunciation, courseId });

        if (updatedQuestion) {
            res.json({ updatedQuestion, message: 'Questão atualizada com sucesso' });
        } else {
            res.status(404).json({ message: 'Questão não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao atualizar a questão' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedQuestion = await questionRepository.remove(req.params.id);
        if (deletedQuestion) {
            res.json(deletedQuestion);
        } else {
            res.status(404).json({ message: 'Questão não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao deletar a questão' });
    }
});

export default router;
