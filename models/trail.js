import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Course from "./course.js";

const Trail = sequelize.define('Trail', {
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
        allowNull:true
    }
});

// Relacionamento: Uma Trail pode ter vários Cursos
Trail.hasMany(Course, { foreignKey: 'trailId' });
Course.belongsTo(Trail, { foreignKey: 'trailId' });

export default Trail;
