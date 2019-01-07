module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, res){
            res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;//precisa do body-parser para funcionar

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('dt_noticia', 'Data é obrigatório').notEmpty().isValidDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();
        
        if(erros){
            console.log('erro');
            res.render('admin/form_add_noticia');
            return;
        }

        var connection = application.config.dbConnection();

        var noticiasDAO = new application.app.models.NoticiasDAO(connection);

        //salvar noticia
        noticiasDAO.create(noticia, function(error, result){
            res.redirect('/noticias');
        });
    }); 
};