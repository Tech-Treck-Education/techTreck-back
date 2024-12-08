import express from "express";
import usersRepository from '../repositories/usersRepository.js'
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await usersRepository.findByEmail(email)
        console.log(user);


        if (!user) {
            return res.status(400).json({ message: "Email ou senha incorretos" });
        }

        const isValid = await user.isValidPassword(password);

        if (!isValid) {
            return res.status(400).json({ message: "Email ou senha incorretos" });
        }

        const token = user.generateAuthToken();

        res.status(200).json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao tentar fazer login" });
    }
});

export default router;
