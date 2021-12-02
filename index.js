const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/tabuada', tabuadaRouter)

app.listen(port, () => console.log('Tabuada server online na porta '+ port + '!'))