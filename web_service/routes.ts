import bodyParser from "body-parser";
import express, { Request, Response} from "express";


const app = express();
app.use(bodyParser.json());
const port = 8080;

// array para simular banco de dados simples
let usuarios = [
  {id: 1, nome: "José da Silva"},
  {id: 2, nome: "Maria da Silva"},
];

// Listar usuários
app.get("/usuarios", (req: Request, res: Response) => {
  try {
    res.send(usuarios);    
  } catch (error) {
    res.status(404).json({mensagem: "Lista não localizada."});
  }
});

// Buscar por id
app.get("/usuarios/:id", (req: Request, res: Response) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if(!usuario) {
    return res.status(404).json({mensagem: "Usuário não encontrado"});
  }
  res.json(usuario);
});

// Adicionar
app.post("/usuarios", (req: Request, res: Response) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome,
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// Atualizar
app.put("/usuarios/:id", (req: Request, res: Response) => {
  const usuarioIndex = usuarios.findIndex((u) => u.id === parseInt(req.params.id));
  if (usuarioIndex === -1) {
    return res.status(404).json({mensagem: "Usuário não encontrado"});
  }
  usuarios[usuarioIndex] = {
    id: usuarios[usuarioIndex].id,
    nome: req.body.nome
  };
  res.json(usuarios[usuarioIndex]);
});

// Deletar
app.delete("/usuarios/:id", (req: Request, res: Response) => {
  usuarios = usuarios.filter((u) => u.id !== parseInt(req.params.id));
  res.json({mensagem: "usuario removido com sucesso!"});
});

// Saudação personalisada
app.get("/saudacao/:nome", (req:Request, res: Response) => {
  const {nome} = req.params;
  res.send(`Olá, ${nome}!!`)

});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});