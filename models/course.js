import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Trail from "./trail.js";  // Importa o modelo Trail
import Question from "./question.js";  // Importa o modelo Question
import Content from "./content.js";  // Importa o modelo Content

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull:false
    },
    trailId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Trail,
            key: 'id',
        }
    },
});

// Relacionamentos
Course.hasMany(Question, { foreignKey: 'courseId' });
Question.belongsTo(Course, { foreignKey: 'courseId' });

Course.hasMany(Content, { foreignKey: 'courseId' });
Content.belongsTo(Course, { foreignKey: 'courseId' });

export default Course;
