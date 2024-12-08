import { Router } from 'express';
import contentRepository from '../repositories/contentRepository.js'; // Certifique-se de implementar este repository

const router = Router();

// Criar um novo conteúdo
router.post('/', async (req, res) => {
    try {
        const { title, content, courseId } = req.body;
        const createdContent = await contentRepository.create(title, content, courseId);
        res.status(201).json(createdContent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao criar o conteúdo' });
    }
});

// Listar todos os conteúdos
router.get('/', async (req, res) => {
    try {
        const contents = await contentRepository.findAll();
        res.json(contents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao listar os conteúdos' });
    }
});

// Obter um conteúdo específico por ID
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

// Deletar um conteúdo por ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedContent = await contentRepository.remove(req.params.id);
        if (deletedContent) {
            res.json({ message: 'Conteúdo removido com sucesso' });
        } else {
            res.status(404).json({ message: 'Conteúdo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao deletar o conteúdo' });
    }
});

// Atualizar um conteúdo por ID
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

export default router;
