import Course from '../models/course.js'; 

const courseRepository = {
    // Criar um novo curso
    async create(name, imageUrl, trailId) {
        try {
            const newCourse = await Course.create({ name, imageUrl, trailId });
            return newCourse;
        } catch (error) {
            console.error('Erro ao criar curso:', error);
            throw new Error('Erro ao criar curso');
        }
    },

    // Retornar todos os cursos
    async findAll() {
        try {
            return await Course.findAll();
        } catch (error) {
            console.error('Erro ao listar cursos:', error);
            throw new Error('Erro ao listar cursos');
        }
    },

    // Buscar um curso pelo ID
    async findById(id) {
        try {
            return await Course.findByPk(id);
        } catch (error) {
            console.error('Erro ao buscar curso por ID:', error);
            throw new Error('Erro ao buscar curso por ID');
        }
    },

    // Atualizar um curso
    async update(id, data) {
        try {
            const course = await Course.findByPk(id);
            if (!course) {
                return null;
            }
            await course.update(data);
            return course;
        } catch (error) {
            console.error('Erro ao atualizar curso:', error);
            throw new Error('Erro ao atualizar curso');
        }
    },

    // Remover um curso
    async remove(id) {
        try {
            const course = await Course.findByPk(id);
            if (!course) {
                return null;
            }
            await course.destroy();
            return course;
        } catch (error) {
            console.error('Erro ao remover curso:', error);
            throw new Error('Erro ao remover curso');
        }
    },
};

export default courseRepository;
