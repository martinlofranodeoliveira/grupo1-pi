const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../database/log.txt');
const log = fs.readFileSync(logPath, 'utf-8');

function logs(req, res, next) {
    fs.appendFileSync(logPath, 'O usuário acessou a rota: ' + req.url + ' em ' + new Date() + '\n');
    next();
}

module.exports = logs;