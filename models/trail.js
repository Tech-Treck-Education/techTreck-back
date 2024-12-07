import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

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
        allowNull:false
    }
});

// Relacionamento: Uma Trail pode ter vários Cursos
Trail.hasMany(Curso, { foreignKey: 'trailId' });
Curso.belongsTo(Trail, { foreignKey: 'trailId' });

export default Trail;
