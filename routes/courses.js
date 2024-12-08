import { Router } from 'express';
import courseRepository from '../repositories/courseRepository.js'; // Certifique-se de criar este arquivo

const router = Router();

// Criar um novo curso
router.post('/', async (req, res) => {
    try {
        const { name, imageUrl, trailId } = req.body;
        const newCourse = await courseRepository.create(name, imageUrl, trailId);
        res.status(201).json(newCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao criar o curso' });
    }
});

// Listar todos os cursos
router.get('/', async (req, res) => {
    try {
        const courses = await courseRepository.findAll();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Houve um erro ao listar os cursos' });
    }
});

// Obter um curso específico por ID
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

// Atualizar um curso por ID
router.put('/:id', async (req, res) => {
    try {
        const { id } =
