class Produto {

    constructor() {
        this.id = 1;
        this.arryaProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto)
        }

        this.listaTabela()
        this.cancelar()

    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arryaProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produtos = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();


            td_id.innerText = this.arryaProdutos[i].id;
            td_produtos.innerText = this.arryaProdutos[i].nomeProduto;
            td_valor.innerText = this.arryaProdutos[i].valorProduto;


            td_id.classList.add('center')

            let imgEdit = document.createElement('img')
            imgEdit.src = 'images/edit.svg'
            imgEdit.setAttribute('onclick', 'produto.editar(' + this.arryaProdutos[i].id + ')')

            let imgDelete = document.createElement('img')
            imgDelete.src = 'images/delete.svg'
            imgDelete.setAttribute('onclick', 'produto.deletar(' + this.arryaProdutos[i].id + ')')

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgDelete)
        }
    }

    adicionar(produto) {
        this.arryaProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valorProduto = document.getElementById('valor').value;
        produto.DescriçãoProduto = document.getElementById('Descrição').value;
        return produto;
    }


    validaCampos(produto) {
        let mensagem = '';

        if (produto.nomeProduto == '') {
            mensagem += '- informe o nome do produto \n'
        }

        if (produto.valorProduto == '') {
            mensagem += '- informe o valor do produto \n'
        }

        if (produto.DescriçãoProduto == '') {
            mensagem += '- informe o Descrição do produto \n'
        }

        if (mensagem != '') {
            alert(mensagem)
            return false

        }


        return true
    }


    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('Descrição').value = '';
    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.arryaProdutos.length; i++) {
            if (this.arryaProdutos[i].id == id) {
                this.arryaProdutos.splice(i, 1)
                tbody.deleteRow(i);


            }
        }
    }
    editar(id) {


        document.getElementById('produto').value = produto.nomeProduto;


        document.getElementById('valor').value = produto.valorProduto;

        this.id = id
        document.getElementById('Descrição').value = produto.DescriçãoProduto;




        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.arryaProdutos.length; i++) {
            if (this.arryaProdutos[i].id == id) {

                document.getElementById('produto').value = this.arryaProdutos[i].nomeProduto
                document.getElementById('valor').value = this.arryaProdutos[i].valorProduto
                document.getElementById('Descrição').value = this.arryaProdutos[i].DescriçãoProduto

                tbody.deleteRow(i)
                this.arryaProdutos.splice(i, 1)

            }
        }


            }
        }
    





var produto = new Produto();



/* ocutar */


function mostrar(id) {
    if (document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none';
    } else {
        document.getElementById(id).style.display = 'block';
    }
}



/* admin  parte admin*/

/* class Admin {

    constructor() {
        this.id = 1;
        this.arryaAdmin = [];
    }

    salvar() {
        let admin = this.lerDados();

        if (this.validaCampos(admin)) {
            this.adicionar(admin)
        }

        this.listaTabela()
        this.cancelar()

    }

    listaTabela() {
        let tbodyAdm = document.getElementById('tbodyAdmin');
        tbodyAdm.innerText = '';

        for (let i = 0; i < this.arryaAdmin.length; i++) {
            let tr = tbodyAdm.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_telefone = tr.insertCell();
            let td_acoes = tr.insertCell();


            td_id.innerText = this.arryaAdmin[i].id;
            td_nome.innerText = this.arryaAdmin[i].nome;
            td_email.innerText = this.arryaAdmin[i].email;
            td_telefone.innerText = this.arryaAdmin[i].telefone;


            td_id.classList.add('center')

            let imgEditAdm = document.createElement('img')
            imgEditAdm.src = 'images/edit.svg'

            let imgDeleteAdm = document.createElement('img')
            imgDeleteAdm.src = 'images/delete.svg'
            imgDeleteAdm.setAttribute('onclick', 'admin.deletar(' + this.arryaAdmin[i].id + ')')

            td_acoes.appendChild(imgEditAdm)
            td_acoes.appendChild(imgDeleteAdm)
        }
    }

    adicionar(admin) {
        this.arryaAdmin.push(admin);
        this.id++;
    }

    lerDados() {
        let admin = {}

        admin.id = this.id
        admin.nome = document.getElementById('nome').value;
        admin.email = document.getElementById('email').value;
        admin.telefone = document.getElementById('telefone').value;
        return admin;
    }


    validaCampos(admin) {
        let mensagem = '';

        if (admin.nome == '') {
            mensagem += '- informe o nome \n'
        }

        if (admin.email == '') {
            mensagem += '- informe o email \n'
        }

        if (admin.telefone == '') {
            mensagem += '- informe o telefone \n'
        }

        if (mensagem != '') {
            alert(mensagem)
            return false

        }


        return true
    }


    cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.arryaProdutos.length; i++) {
            if (this.arryaProdutos[i].id == id) {
                this.arryaProdutos.splice(i, 1)
                tbody.deleteRow(i);


            }
        }
    }
    editar(id) {


        document.getElementById('produto').value = produto.nomeProduto;


        document.getElementById('valor').value = produto.valorProduto;

        this.id = id
        document.getElementById('Descrição').value = produto.DescriçãoProduto;




        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.arryaProdutos.length; i++) {
            if (this.arryaProdutos[i].id == id) {

                document.getElementById('produto').value = this.arryaProdutos[i].nomeProduto
                document.getElementById('valor').value = this.arryaProdutos[i].valorProduto
                document.getElementById('Descrição').value = this.arryaProdutos[i].DescriçãoProduto

                tbody.deleteRow(i)
                this.arryaProdutos.splice(i, 1)

            }
        }


 }
}



var admin = new Admin(); */