const fs = require('fs');
const homeContato = {
    fileName: './database/contato.json',
    create: function(data) {
        let contato = this.getContato();
        let newContato = {
            ...data
        };
        contato.push(newContato);
        fs.writeFileSync(this.fileName, JSON.stringify(contato, null, ' '));
        return newContato;
    },
    getContato: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    }};

module.exports = homeContato;
    