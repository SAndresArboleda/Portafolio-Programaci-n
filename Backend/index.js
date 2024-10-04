const server = require('./src/app')
const port = 8000;
server.listen(port, ()=>{
    console.log(`Puerto ${port} conectado`);
})