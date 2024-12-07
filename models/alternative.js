import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
// import Question from "./question.js";  // Importa o modelo de Question

const Alternative = sequelize.define('Alternative', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    alternative: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    questionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Question',
            key: 'id',
        }
    },
});

// Relacionamento: Alternative pertence a uma Question
Alternative.belongsTo(Question, { foreignKey: 'questionId' });

import Question from './question.js';
Question.hasMany(Alternative, { foreignKey: 'questionId' });
export default Alternative;
