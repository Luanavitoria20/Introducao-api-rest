import express from 'express'

import usuariosRoutes from './routes/usuarios.js'
import fornecedoresRoutes from './routes/fornecedores.js'
import produtosRoutes from './routes/produtos.js'

const app = express()

//permitir ler JSON no corpo da requisição
app.use(express.json())

// Adiciona o roteador de usuarios
app.use("/usuarios",usuariosRoutes)

// Adiciona o roteador de fornecedores
app.use("/fornecedores",fornecedoresRoutes)

// Adiciona o roteador de produtos
app.use("/produtos", produtosRoutes)

const port = 3000

//Rota inicio
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log("app executando na porta ${port}")
})