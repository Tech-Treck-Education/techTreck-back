import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
// import Alternative from "./alternative.js"; 

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    enunciation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Relacionamento: cada Question pertence a um Course
    courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Course',
            key: 'id',
        }
    },
});

// Relacionamento: Question tem muitas Alternativas
// Question.hasMany(Alternative, { foreignKey: 'questionId' });

export default Question;
