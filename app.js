import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {  
    res.send('Olá World!')

})

app.get("/Usuário", (req, res) => {  
  res.send('Olá Usuário!')
})

app.post("/criarUsuário",()=>{})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})