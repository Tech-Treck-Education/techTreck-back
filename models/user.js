import { DataTypes } from "sequelize";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sequelize from "../config/db.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: { // nivel da conta
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    score: {
        type: DataTypes.NUMBER,
        defaultValue: 0,
    }
});


User.prototype.generateAuthToken = function () {
    const token = jwt.sign({ id: this.id, email: this.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

// Método para verificar a senha durante o login
User.prototype.isValidPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Hook para hash da senha antes de salvar
User.beforeSave(async (user, options) => {
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
});

export default User;