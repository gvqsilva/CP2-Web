// Troca a cor do fundo da página
function trocar(cor){
    document.body.style.background =cor;
}


//Função da página login
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

//Função da página contato
function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    if (name == "" || phone == "" || email == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}