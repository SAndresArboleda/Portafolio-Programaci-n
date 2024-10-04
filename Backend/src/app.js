const express = require('express')
const app = express()
const morgan = require('morgan')  //para mostrar errores en la api
const mainRouter = require("./routes/mainRouter.js");
const cors = require ('cors')

app.use(cors());
app.use(morgan('dev'))

app.use(express.json())
app.use(mainRouter)


module.exports = app;