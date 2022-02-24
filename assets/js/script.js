class Pessoa {
    constructor (nome, sobrenome, dataNasc, email, contato, telefone, cargo){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.dataNasc = dataNasc,
        this.email = email,
        this.contato = contato,
        this.telefone = telefone,
        this.cargo = cargo
    }
}
let usuarios = []
const botaoRegistrar = document.getElementById("register-button")
botaoRegistrar.addEventListener('click', pegarElementos)
function pegarElementos(event){
    event.preventDefault()
    let dados = event.target.parentElement
    if (Number(new Date().getFullYear()) - Number(event.target.parentElement.dataNascimento.value.slice(0,4)) < 18){
        alert ("Menores de 18 anos não podem se cadastrar")
        dados = undefined
    }
    for(let i=0;i<usuarios.length;i++){
        if(usuarios[i].email == dados.email.value){
            alert ("e-mail já existente")
            dados = undefined
        }

    }
    criarUsuario(dados)
}

function criarUsuario(dados){
    if(dados == undefined){
        return
    }
    let novoUsuario = new Pessoa
    novoUsuario.nome = dados.nome.value
    novoUsuario.sobrenome = dados.sobrenome.value
    novoUsuario.dataNasc = dados.dataNascimento.value
    novoUsuario.email = dados.email.value
    novoUsuario.contato = dados.contato.value
    novoUsuario.telefone = dados.nome.value
    novoUsuario.cargo = dados.cargo.value
    usuarios.push(novoUsuario)
    return addLista()
    
}
let listaAlunos = document.getElementById("lista-de-alunos")
function addLista(){
    totalUsuarios.innerText = ""
    totalUsuarios.innerText = usuarios.length
    listaAlunos.innerHTML = ""
    for(let i=0;i<usuarios.length;i++){
        let item = document.createElement("li")
        listaAlunos.appendChild(item)
        item.innerHTML = usuarios[i].nome +' '+ usuarios[i].sobrenome+' '+ usuarios[i].email+' '+ usuarios[i].cargo
    }
}
let select = document.getElementById("cargoOption")
let btPesquisa = document.getElementById("btn")
btPesquisa.addEventListener('click', filtrar)

function filtrar(){
    listaAlunos.innerHTML = ""
    let usuariosFiltrados = usuarios.filter(filtrados)
    function filtrados(valor){
        return valor.cargo == select.value
    }
    if(select.value !== 'Todos')
    for(let i=0;i<usuariosFiltrados.length;i++){
        
        let item = document.createElement("li")
        listaAlunos.appendChild(item)
        item.innerHTML = usuariosFiltrados[i].nome +' '+ usuariosFiltrados[i].sobrenome+' '+ usuariosFiltrados[i].email+' '+ usuariosFiltrados[i].cargo
    }
    if(select.value == 'Todos'){
        addLista()
    }
}
totalUsuarios = document.getElementById("total-alunos")
totalUsuarios.innerText += usuarios.length