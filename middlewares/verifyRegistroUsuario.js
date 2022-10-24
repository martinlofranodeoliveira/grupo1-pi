const path = require('path');
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
    check('senha')
        .notEmpty().withMessage('O campo senha é obrigatório').bail()
        .isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres')
        .bail().trim().bail(),
    check('confirmarSenha')
        .notEmpty().withMessage('O campo confirmar senha é obrigatório').bail()
        .isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres')
        .bail().trim().bail(),
    check('confirmarSenha')
        .custom((value, { req }) => {
            if (value !== req.body.senha) {
                throw new Error('As senhas não conferem');
            }
            return true;
        }),
    check('avatar')
        .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif'];
            if (!file) {
                throw new Error('Você deve enviar uma imagem');
            }
            else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`As extensões de arquivo permitidas são ${acceptedExtensions.join(', ')}`);
                }
            }
            return true;
        })
];