const { check } = require('express-validator');

module.exports = [
    check('nome')
        .notEmpty().withMessage('O campo nome é obrigatório').bail()
        .isLength({ min: 2 }).withMessage('O nome deve ter no mínimo 2 caracteres'),
    check('email')
        .notEmpty().withMessage('O campo email é obrigatório').bail()
        .trim().bail()
        .normalizeEmail().bail()
        .isEmail().withMessage('O email deve ser válido'),
    check('telefone')
        .notEmpty().withMessage('O campo telefone é obrigatório').bail()
        .isLength({ min: 8 }).withMessage('O telefone deve ter no mínimo 8 caracteres'),
    check('mensagem')
        .notEmpty().withMessage('O campo mensagem é obrigatório').bail()
        .isLength({ min: 10 }).withMessage('A mensagem deve ter no mínimo 10 caracteres'),
];

