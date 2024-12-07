import Trail from "../models/trail.js";

async function findAll () {
    return await Trail.findAll();
}


async function findById (id) {
    return await Trail.findByPk(id)
}

async function create (name, imageUrl) {
    return await Trail.create({ name, imageUrl })
}

async function remove (id) {
    const trail = await Trail.findByPk(id)

    if (trail) {
        await trail.destroy()
        return { trail, message: 'Trilha deletada.' }
    } else {
        return null
    }
}


async function update (id, updatedData) {
    const trail = await trail.findByPk(id);
    if (trail) {
        Object.keys(updatedData).forEach((key) => {
            if (updatedData[key] !== undefined) {
                trail[key] = updatedData[key];
            }
        });

        return await trail.save();

    }
    return null;
}

export default {
    create,
    findAll,
    findById,
    update,
    remove,
} 