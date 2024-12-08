import Content from '../models/content.js'; 

const contentRepository = {
    // Criar um novo conteúdo
    async create(title, content, courseId) {
        try {
            const newContent = await Content.create({ title, content, courseId });
            return newContent;
        } catch (error) {
            console.error('Erro ao criar conteúdo:', error);
            throw new Error('Erro ao criar conteúdo');
        }
    },

    // Retornar todos os conteúdos
    async findAll() {
        try {
            return await Content.findAll();
        } catch (error) {
            console.error('Erro ao buscar conteúdos:', error);
            throw new Error('Erro ao buscar conteúdos');
        }
    },

    // Buscar um conteúdo pelo ID
    async findById(id) {
        try {
            return await Content.findByPk(id);
        } catch (error) {
            console.error('Erro ao buscar conteúdo por ID:', error);
            throw new Error('Erro ao buscar conteúdo por ID');
        }
    },

    // Remover um conteúdo pelo ID
    async remove(id) {
        try {
            const content = await Content.findByPk(id);
            if (!content) {
                return null;
            }
            await content.destroy();
            return content;
        } catch (error) {
            console.error('Erro ao remover conteúdo:', error);
            throw new Error('Erro ao remover conteúdo');
        }
    },

    // Atualizar um conteúdo
    async update(id, data) {
        try {
            const content = await Content.findByPk(id);
            if (!content) {
                return null;
            }
            await content.update(data);
            return content;
        } catch (error) {
            console.error('Erro ao atualizar conteúdo:', error);
            throw new Error('Erro ao atualizar conteúdo');
        }
    },
};

export default contentRepository;
