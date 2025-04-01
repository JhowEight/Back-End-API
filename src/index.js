import express from "express";

const app = express();

app.get("/", (req, res)=> {
    res.send("Olá")
});

app.listen(4000, ()=> {
    console.log("REST API INICIALIZADA");
});
