

function validarMenorQue(){
    const primeiroNumero = document.getElementById('numero-1')
    const segundoNumero = document.getElementById('numero-2')   
    
    return segundoNumero.value > primeiroNumero.value
}



var botaoValidacao = document.getElementById('envio-formulario').addEventListener('click', function(e) {
    e.preventDefault()
    
    const primeiroNumero = document.getElementById('numero-1').value
    const segundoNumero = document.getElementById('numero-2').value

    const mensagemErro = document.querySelector('.mensagem-erro')
    const mensagemSucesso = document.querySelector(".mensagem-sucesso")

    if(validarMenorQue() == true){
        mensagemErro.style.display = 'none'
        const Sucesso = `Correto! o valor de ${segundoNumero} é maior que o valor de ${primeiroNumero}.`
        mensagemSucesso.innerHTML = Sucesso
        mensagemSucesso.style.display = 'block'
    }
    else {
        mensagemSucesso.style.display = 'none'
        const Erro = `Incorreto! o valor de ${segundoNumero} é menor que o valor de ${primeiroNumero}.`
        mensagemErro.innerHTML = Erro
        mensagemErro.style.display = 'block'
    }
})