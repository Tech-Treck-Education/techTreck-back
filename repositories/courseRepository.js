import Course from "../models/course.js";

async function findAll () {
    return await Course.findAll();
}

async function findById (id) {
    return await Course.findByPk(id);
}

async function create (name, imageUrl, trailId) {
    return await Course.create({ name, imageUrl, trailId });
}

async function remove (id) {
    const course = await Course.findByPk(id);

    if (course) {
        await course.destroy();
        return { course, message: 'Curso deletado.' };
    } else {
        return null;
    }
}

async function update (id, updatedData) {
    const course = await Course.findByPk(id);
    if (course) {
        Object.keys(updatedData).forEach((key) => {
            if (updatedData[key] !== undefined) {
                course[key] = updatedData[key];
            }
        });

        return await course.save();
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
