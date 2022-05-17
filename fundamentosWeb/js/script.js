
/*
Case Sensitive = reconhece letras maiusculas e minusculas
por Tag = getElementByTagName()
por Id: getElementyById()
porNome: getElemetByName()
por classe: getElementsByClassName()
por seletor: querySelector()

*/
let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let assunto = window.document.getElementById('assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length<3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
    
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(txtEmail.value.indexOf('@')== -1 && txtEmail.value.indexOf('.')== -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
    
   
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length>=100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres...'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
    
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulario enviado com sucesso')
    }
    else{
        alert('Preencha o formulario corretamente antes de enviar')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}