import express from "express";
import route from "./routes/TodoListRouter"; // seu arquivo de rotas

const app = express();

app.use(express.json());
app.use("/", route);

export default app;
