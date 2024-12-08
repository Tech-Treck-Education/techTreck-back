import { Router } from 'express';
import contentRepository from '../repositories/contentRepository.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { title, content, courseId } = req.body;
        const newContent = await contentRepository.create(title, content, courseId);
        res.json(newContent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao criar o conteúdo' });
    }
});

router.get('/', async (req, res) => {
    try {
        const contents = await contentRepository.findAll();
        res.json(contents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao buscar os conteúdos' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const content = await contentRepository.findById(req.params.id);
        if (content) {
            res.json(content);
        } else {
            res.status(404).json({ message: 'Conteúdo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao buscar o conteúdo' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, courseId } = req.body;
        const updatedContent = await contentRepository.update(id, { title, content, courseId });

        if (updatedContent) {
            res.json({ updatedContent, message: 'Conteúdo atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Conteúdo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao atualizar o conteúdo' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedContent = await contentRepository.remove(req.params.id);
        if (deletedContent) {
            res.json(deletedContent);
        } else {
            res.status(404).json({ message: 'Conteúdo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao deletar o conteúdo' });
    }
});

export default router;
