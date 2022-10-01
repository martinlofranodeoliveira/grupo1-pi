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

            let imgDelete = document.createElement('img')
            imgDelete.src = 'images/delete.svg'
            imgDelete.setAttribute('onclick', 'produto.deletar('+this.arryaProdutos[i].id +')')

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

        for(let i = 0 ; i < this.arryaProdutos.length ; i++) {
            if(this.arryaProdutos[i].id == id){
                this.arryaProdutos.slice(i,1)
                tbody.deleteRow(i);
            }
        }
    }

}



var produto = new Produto();