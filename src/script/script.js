// Alerta na página principal
window.onload = function() {
    alert("Seja bem-vindo à Bikecity!");
}

// Troca a cor do fundo da página
function trocar(cor){
    document.body.style.background =cor;
}

// Realiza o slideShow
let imagens=['./src/img/bike1.jpg','./src/img/bike2.jpg','./src/img/bike3.jpg','./src/img/bike4.jpg',];
let index=0; 
let time =3000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}

slideShow();

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