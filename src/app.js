const express = require('express');
const app = express();
const sequelize = require('sequelize');

const {port,callback} = require('./modules/port')

app.listen(port,callback )



app.use("/padres",require('./routes/padres.routes'))
app.use( "/hijos", require ('./routes/hijos.routes'))
app.use( "/mensaje", require ('./routes/hijos.routes'))