import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Course from "./course.js";  

const Content = sequelize.define('Content', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // Relacionamento: cada Content pertence a um Curso
    courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Course,
            key: 'id',
        }
    },
});

export default Content;
