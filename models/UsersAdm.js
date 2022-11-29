const fs = require('fs');

const UserAdm = {
    fileName: './database/admins.json',
    getUsersAdm: function() {
        return JSON.parse(fs.readFileSync (this.fileName, 'utf-8')); // ler o arquivo json e transformar em objeto javascript (parse) e retornar o objeto javascript (readFileSync)
    },
    findUserAdmById: function(id) {
        let usuariosAdm = this.getUsersAdm();
        let usuarioAdm = usuariosAdm.cadastro.find(usuarioAdm => usuarioAdm.id == id);
        return usuarioAdm;
    }, 
    findUserAdmByEmail: function(email) {
        let usuariosAdm = this.getUsersAdm();
        let usuarioAdm = usuariosAdm.cadastro.find(usuarioAdm => usuarioAdm.email == email);
        return usuarioAdm;
    },
    findUserAdmByField: function(field, value) {
        let usuariosAdm = this.getUsersAdm();
        let usuarioAdm = usuariosAdm.cadastro.find(usuarioAdm => usuarioAdm[field] == value);
        return usuarioAdm;
    },
    findUserAdmByEmailAndPass: function(email, pass) {
        let usuariosAdm = this.getUsersAdm();
        let usuarioAdm = usuariosAdm.cadastro.find(usuarioAdm => usuarioAdm.email == email && usuarioAdm.pass == pass);
        return usuarioAdm;
    },
    generateId: function() {
        let usuariosAdm = this.getUsersAdm();
        let lastUserAdm = usuariosAdm.cadastro.pop();
        if (lastUserAdm) {
            return lastUserAdm.id + 1;
        }
        return 1;
    },
    create: function(data) {
        let usuariosAdm = this.getUsersAdm();
        let newUserAdm = {
            id: this.generateId(),
            ...data
        };
        usuariosAdm.cadastro.push(newUserAdm);
        this.writeUsersAdm(usuariosAdm);
    },
    writeUsersAdm: function(usuariosAdm) {
        fs.writeFileSync (this.fileName, JSON.stringify(usuariosAdm, null, ' ')); // transformar o objeto javascript em json (stringify) e escrever no arquivo json (writeFileSync) 
    },
    update: function(data) {
        let usuariosAdm = this.getUsersAdm();
        let userAdmIndex = usuariosAdm.cadastro.findIndex(usuarioAdm => usuarioAdm.id == data.id);
        usuariosAdm[userAdmIndex] = data;
        this.writeUsersAdm(usuariosAdm);
    },
    delete: function(id) {
        let usuariosAdm = this.getUsersAdm();
        let userAdmFiltered = usuariosAdm.cadastro.filter(usuarioAdm => usuarioAdm.id != id);
        usuariosAdm.cadastro = userAdmFiltered;
        this.writeUsersAdm(usuariosAdm);
    }, 
    deleteAll: function() {
        let usuariosAdm = this.getUsersAdm();
        usuariosAdm.cadastro = [];
        this.writeUsersAdm(usuariosAdm);
    },
    deleteByEmail: function(email) {
        let usuariosAdm = this.getUsersAdm();
        let userAdmFiltered = usuariosAdm.cadastro.filter(usuarioAdm => usuarioAdm.email != email);
        usuariosAdm.cadastro = userAdmFiltered;
        this.writeUsersAdm(usuariosAdm);
    },
    deleteByField: function(field, value) {
        let usuariosAdm = this.getUsersAdm();
        let userAdmFiltered = usuariosAdm.cadastro.filter(usuarioAdm => usuarioAdm[field] != value);
        usuariosAdm.cadastro = userAdmFiltered;
        this.writeUsersAdm(usuariosAdm);
    },
    deleteByEmailAndPass: function(email, pass) {
        let usuariosAdm = this.getUsersAdm();
        let userAdmFiltered = usuariosAdm.cadastro.filter(usuarioAdm => usuarioAdm.email != email && usuarioAdm.pass != pass);
        usuariosAdm.cadastro = userAdmFiltered;
        this.writeUsersAdm(usuariosAdm);
    },
    deleteByEmailOrPass: function(email, pass) {
        let usuariosAdm = this.getUsersAdm();
        let userAdmFiltered = usuariosAdm.cadastro.filter(usuarioAdm => usuarioAdm.email != email || usuarioAdm.pass != pass);
        usuariosAdm.cadastro = userAdmFiltered;
        this.writeUsersAdm(usuariosAdm);
    },
    deleteByEmailAndPassOrName: function(email, pass, name) {
        let usuariosAdm = this.getUsersAdm();
        let userAdmFiltered = usuariosAdm.cadastro.filter(usuarioAdm => usuarioAdm.email != email && usuarioAdm.pass != pass || usuarioAdm.name != name);
        usuariosAdm.cadastro = userAdmFiltered;
        this.writeUsersAdm(usuariosAdm);
    },
    deleteByEmailAndPassOrNameAndAge: function(email, pass, name, age) {
        let usuariosAdm = this.getUsersAdm();
        let userAdmFiltered = usuariosAdm.cadastro.filter(usuarioAdm => usuarioAdm.email != email && usuarioAdm.pass != pass || usuarioAdm.name != name && usuarioAdm.age != age);
        usuariosAdm.cadastro = userAdmFiltered;
        this.writeUsersAdm(usuariosAdm);
    },
}

module.exports = UserAdm;