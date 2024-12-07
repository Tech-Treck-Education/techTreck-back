import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Course from "./course.js";  

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
    alternative_a: {
        type: DataTypes.STRING,
        isCorrect: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alternative_b: {
        type: DataTypes.STRING,
        isCorrect: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alternative_c: {
        type: DataTypes.STRING,
        isCorrect: DataTypes.BOOLEAN,
        allowNull: false,
    },
    alternative_d: {
        type: DataTypes.STRING,
        isCorrect: DataTypes.BOOLEAN,
        allowNull: false,
    },
    // Relacionamento: cada Question pertence a um Course
    courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Course,
            key: 'id',
        }
    },
});

export default Question;
