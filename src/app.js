import express from 'express'
import handlebars from 'express-handlebars'
import {Server} from 'socket.io'
import viewRouter from './routers/view.router.js'

const app = express()
const httpServer = app.listen(8080, console.log('Server Up!'))
const io = new Server(httpServer) // aca el servidor de socket  escucha el servidor http

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')
app.use(express.static('./src/public')) // porque si uso handlebars, configuro el static? porque necesito el archivo index.js para hacer el handshake
app.use('/', viewRouter) // hago uso de router


const messages = []
io.on('connection', socket =>{
    console.log('usuario andando')
    socket.on('message', data => {
        messages.push(data)
        io.emit('logs', messages)
    })
})
