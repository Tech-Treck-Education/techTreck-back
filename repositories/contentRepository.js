import Content from "../models/content.js";

async function findAll () {
    return await Content.findAll();
}

async function findById (id) {
    return await Content.findByPk(id);
}

async function create (title, content, courseId) {
    return await Content.create({ title, content, courseId });
}

async function remove (id) {
    const content = await Content.findByPk(id);

    if (content) {
        await content.destroy();
        return { content, message: 'Conteúdo deletado.' };
    } else {
        return null;
    }
}

async function update (id, updatedData) {
    const content = await Content.findByPk(id);
    if (content) {
        Object.keys(updatedData).forEach((key) => {
            if (updatedData[key] !== undefined) {
                content[key] = updatedData[key];
            }
        });

        return await content.save();
    }
    return null;
}

export default {
    create,
    findAll,
    findById,
    update,
    remove,
};
