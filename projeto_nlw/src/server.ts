import express from "express";
import { request } from "node:https";

 const app = express();

/**
 * GET = Busca
 * POST = CRIACAO
 * PUT = ALTERACAO
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMACAO ESPECIFICA
 */
app.get("/", (request, response) =>{
  return response.json({
    message: "Ola NLW 05!",
  })
})
app.post("/", (request, response) => {
  return response.json({message: "Usuario salvo com sucesso",})
})
 app.listen(3333, () => console.log("Server running on port 3333"));