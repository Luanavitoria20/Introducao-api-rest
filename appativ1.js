/*
Crie uma rota (endopoint) do tipo GETcom URI:/usuarios que 
envie uma resposta(mensagem) com todos os usuarios cadastrasda no "banco de dados fake"
*/
import express from 'express'

const app = express()

//permitir ler JSON no corpo da requisição
app.use(express.json())

const port = 3000

//Banco de dados Fake(em memória) 
const usuarios = [
  {id:1, nome: 'João', email: "joao@gmail.com"},
  {id:2, nome: 'Ana', email: "ana@gmail.com"}
]

app.get("/usuarios", (req, res) => {  
    res.send("usuarios!")
})
