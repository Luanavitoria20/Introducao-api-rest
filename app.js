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

//Rota inicio
app.get("/", (req, res) => {  
  res.send("Bem vindo a minha API!")
})

//Rota cria Usuario
app.post("/criarUsuario", (req, res)=> {
  // adicionar o usuario no banco de dados fake (lista)
  const {nome, email} = req.body

  const novoUsuario = {
    id : usuarios[usuarios.length-1].id + 1,
    nome: nome,
    email: email
  };

  usuarios.push(novoUsuario)
  
  res.status(201).json(usuarios)
})

app.put("/usuario/:id", (req, res)=>{
  const { id } = req.params
  const {novoNome, novoEmail} = req.body

  const indice = usuarios.findIndex((usuario)=>{
    return usuario.id == id
  })
  // if indice === -1, de como resposta da requisição o status 404
  if (indice === -1) {
    return res.status(404).json(
    { mensagem:"Usuário não encontrado!" });
  }  

  usuarios[indice].nome = novoNome
  usuarios[indice].email = novoEmail

  res.send(usuarios)
})

/*
Faça uma rota para deletar um usuario de acordo com o id 
recebido por parametro
Método: DELETE
Enpoint: /usuario/id:
resposta: a lista de usuarios atualizada
dica: use o splice() para remover o usuario da lista
*/
app.delete('/usuario/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  const index = usuarios.findIndex(usuario => usuario.id === id);
  usuarios.splice(index,1)
  res.send(usuarios)
});

app.listen(port,()=>{
  console.log(`App escutando na porta $:(port)`)
})


app.delete('/usuario/:id', (req, res) => {
  //const id = parseInt(req.params.id); 
  
  const { id } = req.params

  const index = usuarios.findIndex((usuario)=>{
    return usuario.id == parseInt(id)
  })
  if (index === -1){
      res.send("Usuário não encontrado!")
  }else{
    usuarios.splice(index, 1)
    res.send(usuarios)
  }
})


/* app.get('/', (req, res) => {  
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
  
  //res.json(usuarios)
    res.status(200).json(usuarios)

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}
)

