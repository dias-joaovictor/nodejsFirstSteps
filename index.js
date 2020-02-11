var app = require('./config/custom-express')();

const SERVER_PORT = 3000;


app.listen(SERVER_PORT, function(){
    console.log('Servidor rodando na porta ' + SERVER_PORT);
});


