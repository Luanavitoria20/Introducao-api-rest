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

app.get("/", (req, res) => {  
  res.send("Bem vindo a minha API!")
})

/*app.get('/', (req, res) => {  
    res.send('Olá World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}
)*/

/*
Crie uma rota (endopoint) do tipo GETcom URI:/usuarios que 
envie uma resposta(mensagem) com todos os 
usuarios cadastrasda no "banco de dados fake"
*/
app.get('/usuarios', (req, res) => {  
  res.send(usuarios)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}
)

/*app.post("/criarUsuario", (req, res)=> {
  const {nome, sobrenome} = req.body
  res.send(`Nome:${nome} | Sobrenome:${sobrenome}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  
*/