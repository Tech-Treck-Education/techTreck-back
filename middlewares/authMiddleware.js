import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: "Acesso não autorizado" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // armazena o usuário no request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido" });
    }
};

export default authMiddleware;
