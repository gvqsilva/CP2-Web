// Troca a cor do fundo da página
function trocar(cor){
    document.body.style.background =cor;
}

function validar(){

    //declarando as variaveis 
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;

    if(usuario ==="Admin" && senha ==="12345"){
        window.open("quiz.html")
    }else{
        alert("usuario e senha inválidos")
    }


}