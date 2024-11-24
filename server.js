import express from 'express'
import usuarioRoutes from './routes/users.js'
import sequelize from './config/db.js';

const app = express();
const port = 3000;

app.use(express.json())

sequelize.sync() // sincronizando com o banco 
    .then(() => console.log('Banco de dados sincronizado'))
    .catch((error) => console.error('Erro ao sincronizar o banco de dados:', error));

app.use('/api/users', usuarioRoutes);

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});