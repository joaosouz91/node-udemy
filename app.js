
var app = require('./config/server');

//var rotaNoticias = require('./app/routes/noticias')(app);

//var rotaHome = require('./app/routes/home')(app);

//var rotaFormularioNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

//var msg = require('./mod_teste')();

/*app.get('/tecnologia', function(req, res){
    res.send("<html><body>noticiais de tecnologia</body></html>");
})*/
//render é utilizado por conta o EJS


app.listen(3000, function(){
    console.log('Servidor executando');
})