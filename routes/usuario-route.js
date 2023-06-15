const express = require("express")
const bodyParser = require("body-parser")
const { body, validationResult } = require("express-validator")
const usuarioController = require('../controller/usuario-controller');

const router = express.Router();

router.use(bodyParser.json());

router.post('/usuario', body('senha').isLength({min: 6}).withMessage("A senha deve ter pelo menos 6 digitos"), async(req, res) =>{
    const validacao = validationResult(req).array();
        if (validacao.length === 0) {
            const novo = await usuarioController.criarUsuario(req.body.nome, req.body.senha, req.body.pontos, req.body.latitude, req.body.longitude);
            res.json({resultado: 'Usuário cadastrado!', usuario: novo});
        } else{
            res.status(401).json(validacao);
        }
});

router.get('/usuario/:id', async(req, res) => {
    const usuario = await usuarioController.obterUsuario(req.params.id);
    if(usuario){
        res.json({resultado: 'Usuário encontrado!', usuario: usuario});
    } else{
        res.status(404).json({ resultado: 'Este usuário não existe' });
    }
});

router.post('/usuario/login', async(req, res) => {
    const login = await usuarioController.login(req.body.nome, req.body.senha);
    if (login.valido) {
        res.json(login);
    } else res.status(401).json(login);
});

router.put('/usuario/:id', body('senha').isLength({min: 6}).withMessage("A senha deve ter pelo menos 6 digitos"), async(req, res) =>{
    const validacao = validationResult(req).array();
    if (validacao.length === 0) {
        const atualizar = await usuarioController.atualizarUsuario(req.params.id, req.body.nome, req.body.senha, req.body.pontos, req.body.latitude, req.body.longitude);
        res.json({resultado: 'Usuário atualizado!', usuario: atualizar});
    } else{
        res.status(401).json(validacao);
    }
});

router.delete('/usuario/:id', async(req, res) => {
    const usuario = await usuarioController.deletarUsuario(req.params.id);
    if(usuario){
        res.json({resultado: 'Usuário deletado!', usuario: usuario});
    } else{
        res.status(404).json({ resultado: 'Não foi possível deletar este usuário' });
    }
});

module.exports = router;

