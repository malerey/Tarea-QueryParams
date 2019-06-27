// importamos express y cors
const express = require('express');
const cors = require('cors');
// creamos nuestro servidor
const app = express();
// usabamos cors
app.use( cors() );
// que nos interprete el json de un pedido, como un objeto y no un string
app.use( express.json() );



// creamos una carpeta "router" para nuestro router
// en esa carpeta, creamos nuestro archivo con el nombre de la ruta
// por ejemplo api.js
// importamos ese archivo en app.js
const apiRouter = require('./routes/api.js')

//usamos ese archivo en nuestra app 
app.use("/api", apiRouter)


// tarea:
// En el archivo "apiRouter" declarar el siguiente array de objetos

const zapatos = [
    {tipo: "Botas", color: "Negro", talle: 35},
    {tipo: "Botas", color: "Negro", talle: 36},
    {tipo: "Botas", color: "Negro", talle: 37},
    {tipo: "Botas", color: "Negro", talle: 38},
    {tipo: "Botas", color: "Negro", talle: 39},
    {tipo: "Botas", color: "Negro", talle: 40},
    {tipo: "Tacos", color: "Negro", talle: 35},
    {tipo: "Tacos", color: "Negro", talle: 36},
    {tipo: "Tacos", color: "Negro", talle: 37},
    {tipo: "Tacos", color: "Negro", talle: 38},
    {tipo: "Tacos", color: "Negro", talle: 39},
    {tipo: "Tacos", color: "Negro", talle: 40},
    {tipo: "Tacos", color: "Azul", talle: 35},
    {tipo: "Tacos", color: "Azul", talle: 36},
    {tipo: "Tacos", color: "Azul", talle: 37},
    {tipo: "Tacos", color: "Azul", talle: 38},
    {tipo: "Tacos", color: "Azul", talle: 39},
    {tipo: "Tacos", color: "Azul", talle: 40},
]

// Cuando vamos a la ruta /api debemos mostrar todos los objetos
// En la ruta /api/tacos mostrar solo los tacos
// En la ruta /api/botas mostrar solo las botas
// Debemos filtrar los resultados por color o talle usando query params
// Por ejemplo, en la ruta /api/botas/?size=38 mostrar las botas con talle 38
// En la ruta /api/tacos/?color=azul mostrar los tacos de color azul 

app.listen(3000)