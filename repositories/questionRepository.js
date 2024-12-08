import Question from "../models/question.js";

async function findAll () {
    return await question.findAll();
}


async function findById (id) {
    return await question.findByPk(id)
}

async function create (enunciation, alternative_a, alternative_b, alternative_c, alternative_d) {
    return await question.create({
        enunciation,
        alternative_a,
        alternative_b,
        alternative_c,
        alternative_d
    })
}

async function remove (id) {
    const question = await question.findByPk(id)

    if (question) {
        await question.destroy()
        return { question, message: 'Question deleted.' }
    } else {
        return null
    }
}


async function update (id, updatedData) {
    const question = await question.findByPk(id);
    if (question) {
        Object.keys(updatedData).forEach((key) => {
            if (updatedData[key] !== undefined) {
                question[key] = updatedData[key];
            }
        });

        return await question.save();

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