const express = require('express');
const app = express();
const sequelize = require('sequelize');

const {port,callback} = require('./modules/port')

app.listen(port,callback )



app.use(require('./routes/padres.routes'))
app.use(require('./routes/hijos.routes'))