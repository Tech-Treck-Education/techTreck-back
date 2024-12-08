import dotenv from "dotenv";
import express from 'express'
import sequelize from './config/db.js';
import usuarioRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import rotaAutenticada from './routes/rotaAutenticada.js'
import contentRoutes from './routes/contents.js';

dotenv.config();

const app = express();
const port = 3000;


// Carregar variáveis de ambiente do arquivo .env

app.use(express.json())

sequelize.sync() // sincronizando com o banco 
    .then(() => console.log('Banco de dados sincronizado'))
    .catch((error) => console.error('Erro ao sincronizar o banco de dados:', error));

app.use('/api/users', usuarioRoutes)
app.use('/api/auth', authRoutes )
app.use('/rotaAutenticada', rotaAutenticada) // so um exemplo p ver se autenticacao estava funcionando
app.use('/api/content', contentRoutes);

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});
app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});
