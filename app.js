
// CONFIGURACION CLASICA DE NODEJS

const express = require('express')
const res = require('express/lib/response')
const app = express()


const http = require('http')
const server = http.createServer(app)



// USO DE SOCKET.IO ADVERTENICA Y/O NOTIFICACION DE NUEVAS CONECCIONES 
const {Server} = require('socket.io')
const io = new Server(server)


// ====================NOTIFICACION EN CONSOLA SI UN USUARIO SE CONECTO============
io.on('connection', (socket)=>{
//     console.log('un usuario se ha conectado')

// ====================NOTIFICACION EN CONSOLA SI UN USUARIO SE DESCONECTO============
    // socket.on('disconnect', ()=>{
    //     console.log('El usuario se ha desconectado')
    // })


    // // PARA CAPTURAR LOS MNESJAES EN EL SERVIDOR (SERVIDOR CON U SOLO CLIENTE)
    // socket.on ('send message', function (data){

    //     // PARA MOSTRAR LOS MENSAJES ENVIADOS EN LA PAGINA
    //     io.sockets.emit('new message', data);
    //     // PARA MOSTRART LOS MENSJAES EN LA CONSOLA
    //     console.log(data);

    // //  socket.on('send message', function (data){   
    // //     console.log(data);
    // });

    // ESCUHAR Y PASAR EL EVENTO PARA LA CONSOLA
    // socket.on('chat', (msg)=>{
    //     console.log('prueba dice :' +msg)
    // })


    socket.on('chat', (msg)=>{
        io.emit('chat', msg)
    })

    // ESCUCHAR EL EVENTO PARA LAS IMAGENES
    // socket.on('imagenes', (img)=> {
    //     io.sokets.emit('imagenes', img);
    // })
    

})



app.get('/', (req, res) => {
    //res.send('<h1>Aplicacion de CHATEAR</h1>')
    //console.log(__dirname)
    res.sendFile(`${__dirname}/cliente/index.html`)
})


server.listen(3000, ()=> {
console.log('Servidor corriento en http://localhost:3000')
})

// start fue creado manualmente para que ejecute nodemon esto 
// en el inicio del archivo package.json"
    