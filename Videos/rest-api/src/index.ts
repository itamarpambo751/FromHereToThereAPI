import app from "./app.module";

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`))