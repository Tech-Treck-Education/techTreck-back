// só um exemplo para ver se a autenticacao estava funcionando

import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
    // Aqui você tem acesso ao usuário no `req.user`
    res.status(200).json({ message: "Perfil do usuário", user: req.user });
});

export default router;
