module.exports = function (app) {

    app.get('/pagamentos', function (request, response) {
        response.send('Ok');
    });

    app.post('/pagamentos/pagamento', function(request, response){
        var pagamento = request.body;
        console.log('Processando requisição de pagamento');
        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        console.log('passou');
        var connection = app.persistence.connectionFactory();
        var pagamentoDAO = new app.persistence.PagamentoDAO(connection);

        pagamentoDAO.salva(pagamento, function(erro, resultado){
            console.error(erro);
            console.log('Pagamento Criado');
            console.log(pagamento);
            response.json(pagamento);
        });
        
    });

    app.get('/pagamentos/getAll', function(request, response){
        var connection = app.persistence.connectionFactory();
        var pagamentoDAO = new app.persistence.PagamentoDAO(connection);

        pagamentoDAO.lista(function(erro, resultado){
            if(erro){
                console.log(erro);
                response.json(erro);
            }
            response.json(resultado);
        });
        console.log('executou');
        
    });

}