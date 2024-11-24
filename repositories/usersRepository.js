import User from "../models/user.js";

async function findAll () {
    return await User.findAll();
}

async function findById (id) {
    return await User.findByPk(id)
}

async function create (name, email, password) {
    return await User.create({ name, email, password })
}

async function remove (id) {
    const user = await User.findByPk(id)

    if (user) {
        await user.destroy()
        return { user, message: 'Usuário deletado.' }
    } else {
        return null
    }
}


async function update (id, updatedData) {
    const user = await User.findByPk(id);
    if (user) {
        // Atualiza apenas os campos enviados no `updatedData`
        Object.keys(updatedData).forEach((key) => {
            if (updatedData[key] !== undefined) {
                user[key] = updatedData[key];
            }
        });

        return await user.save();

    }
    return null;
}

export default {
    create,
    findAll,
    findById,
    update,
    remove
} 