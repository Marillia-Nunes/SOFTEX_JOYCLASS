import express, {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send('Bem-Vindo ao meu Web Service!');
});

const porta: number = 3000;

app.listen(porta, () => {
    console.log(`O servidor está rodando no endereço http://localhost:${porta}`);
});

