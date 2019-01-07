var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexão com o banco de dados estabelecida');
    return mysql.createConnection({
        host: "localhost",
        user : "root",
        password :"root",
        database : "portal_noticias"  
    });
}

/*  Embbeding var connMysql para não executar a função atribuída a ela
    assim que o módulo for exportado.
*/
module.exports = function(){
    console.log('O Consign carregou o módulo de conexão com o banco de dados')
    return connMysql;
}



