const  { fstat } = require('fs');

const fs = require('fs');

const User = {
    fileName: './database/usuarios.json',
    getUsers: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
}
