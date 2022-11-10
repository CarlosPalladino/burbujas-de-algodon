const {express} = require('express');
const app = express();
const sequelize = require('sequelize');
const sequelize =new sequelize('jardines burbujas','root',)

const {port,calback} = require('./modules/port')

app.listen(port, calback , require())



app.use(require('./routes/padres.routes'))