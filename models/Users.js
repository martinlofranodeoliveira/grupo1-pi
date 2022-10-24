const fs = require('fs');

const User = {
    fileName: './database/usuarios.json',
    getUsers: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    findUserById: function(id) {
        let usuarios = this.getUsers();
        let usuario = usuarios.cadastro.find(usuario => usuario.id == id);
        return usuario;
    },
    findUserByEmail: function(email) {
        let usuarios = this.getUsers();
        let usuario = usuarios.cadastro.find(usuario => usuario.email == email);
        return usuario;
    },
    findUserByEmailAndPass: function(email, pass) {
        let usuarios = this.getUsers();
        let usuario = usuarios.cadastro.find(usuario => usuario.email == email && usuario.pass == pass);
        return usuario;
    },
    generateId: function() {
        let usuarios = this.getUsers();
        let lastUser = usuarios.cadastro.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },
    create: function(data) {
        let usuarios = this.getUsers();
        let newUser = {
            id: this.generateId(),
            ...data
        };
        usuarios.cadastro.push(newUser);
        this.writeUsers(usuarios);
    },
    writeUsers: function(usuarios) {
        fs.writeFileSync(this.fileName, JSON.stringify(usuarios, null, ' '));
    },
    update: function(data) {
        let usuarios = this.getUsers();
        let userIndex = usuarios.cadastro.findIndex(usuario => usuario.id == data.id);
        usuarios[userIndex] = data;
        this.writeUsers(usuarios);
    },
    delete: function(id) {
        let usuarios = this.getUsers();
        let filteredUsers = usuarios.cadastro.filter(usuario => usuario.id != id);
        this.writeUsers(filteredUsers);
    },
    deleteByEmail: function(email) {
        let usuarios = this.getUsers();
        let filteredUsers = usuarios.cadastro.filter(usuario => usuario.email != email);
        this.writeUsers(filteredUsers);
    },
    deleteByEmailAndPass: function(email, pass) {
        let usuarios = this.getUsers();
        let filteredUsers = usuarios.cadastro.filter(usuario => usuario.email != email && usuario.pass != pass);
        this.writeUsers(filteredUsers);
    },
    deleteByEmailOrPass: function(email, pass) {
        let usuarios = this.getUsers();
        let filteredUsers = usuarios.cadastro.filter(usuario => usuario.email != email || usuario.pass != pass);
        this.writeUsers(filteredUsers);
    },
    deleteByEmailAndPassOrId: function(email, pass, id) {
        let usuarios = this.getUsers();
        let filteredUsers = usuarios.cadastro.filter(usuario => usuario.email != email && usuario.pass != pass || usuario.id != id);
        this.writeUsers(filteredUsers);
    },
    deleteByEmailAndPassOrIdAndName: function(email, pass, id, name) {
        let usuarios = this.getUsers();
        let filteredUsers = usuarios.cadastro.filter(usuario => usuario.email != email && usuario.pass != pass || usuario.id != id && usuario.name != name);
        this.writeUsers(filteredUsers);
    },
}/* 
console.log(User.findUserById(1)); */