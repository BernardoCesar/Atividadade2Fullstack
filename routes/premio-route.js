const express = require('express');
const bodyParser = require('body-parser');
const premioController = require('../controller/premio-controller');

const router = express.Router();
router.use(bodyParser.json());

router.post('/premio', async(req, res) =>{
    const novo = await premioController.criarPremio(req.body.descricao, req.body.quantidade,req.body.pontos);
    res.json({resultado: 'Premio Cadastrado!', premio: novo});
});

router.get('/premio/:id', async(req, res) => {
    const premio = await premioController.obterPremio(req.params.id);
    if(premio){
        res.json({resultado: 'Prêmio encontrado!', premio: premio});
    } else{
        res.status(404).json({ resultado: 'Esse prêmio não foi encontrado' });
    }
});

router.get('/premio', async(req, res) => {
    const premios = await premioController.obterTodosPremios();
    if(premios){
        res.json({resultado: 'Prêmios encontrados!', premios: premios});
    } else{
        res.status(404).json({ resultado: 'Ainda não há prêmios cadastrados!' });
    }
});

router.get('/premio/disponivel/:pontos', async(req, res) => {
    const premios = await premioController.obterPremiosPontos(req.params.pontos);
    if(premios){
        res.json({resultado: 'Premio encontrado!', premios: premios});
    } else{
        res.status(404).json({ resultado: 'Não existem prêmios com essa quantidade de pontos' });
    }
});

router.put('/premio/:id', async(req, res) =>{
    const atualizar = await premioController.atualizarPremio(req.params.id, req.body.descricao, req.body.pontos, req.body.quantidade);
    res.json({resultado: 'Prêmio atualizado!', premio: atualizar});
});

router.delete('/premio/:id', async(req, res) => {
    const premio = await premioController.deletarPremio(req.params.id);
    if(premio){
        res.json({resultado: 'Prêmio excluído!', premio: premio});
    } else{
        res.status(404).json({ resultado: 'Não foi possível excluir este prêmio' });
    }
});

module.exports = router;
