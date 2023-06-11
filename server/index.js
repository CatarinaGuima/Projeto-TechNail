const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "bdcomentarios",
    port: "3307",
})

//CREATE
app.get("/", (req, res) => {

    let SQL = "INSERT INTO listacomentarios ( comentarios ) VALUES ('Amei as novas cores dos esmaltes')";

    db.query(SQL, (err, result) => {
        console.log(err);
    })

    res.send("CONECTADO!!!")
})

app.post("/comentarios", (req, res) => {
    const { comentarios } = req.body;
    let SQL = "INSERT INTO listacomentarios ( comentarios ) VALUES (?)";
    db.query(SQL, comentarios, (err, result) => {
        console.log(err);
    })
});

//READ
app.get("/comentarios", (req, res) => {

    let SQL = "SELECT * from listacomentarios";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

//DELETE
app.delete("/comentarios/:id", (req, res) => {

    const { id } = req.params;
    console.log("Informação: ", id)

    let SQL = "DELETE FROM listacomentarios WHERE (`id` = ? )";

    db.query(SQL, id, (err, result) => {
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log('Rodando servidor');
});
