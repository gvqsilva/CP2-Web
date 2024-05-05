// Inserção das perguntas

let perguntas = [
    "Qual é o nome da peça que você gira com as mãos para mudar as marchas em uma bicicleta?",
    "Que parte da bicicleta é responsável por parar a roda traseira quando você pisa nela?",
    "Qual é o nome do dispositivo que você usa para inflar os pneus de uma bicicleta?",
    "Em uma bicicleta, o que as siglas 'MTB' geralmente significam?",
    "Que parte da bicicleta conecta o guidão ao quadro?",
    "Qual é o nome da peça onde você senta ao andar de bicicleta?",
    "O que as letras 'BMX' representam no contexto de bicicletas?",
    "Que tipo de bicicleta é projetado principalmente para uso em estradas pavimentadas?",
    "Qual é a peça que conecta o pedal à roda traseira de uma bicicleta?",
    "Que nome é dado às bicicletas que possuem um motor elétrico auxiliar para ajudar na pedalada?",

];

// Validação das respostas

let respostas = [
    "O nome da peça  é  câmbio",
    "A parte da bicicleta responsável por parar a roda é o freio",
    "O dispositivo que você usa para inflar os pneus de uma bicicleta é a bomba de ar",
    "As siglas MTB significam Mountain Bike",
    "A parte da bicicleta que conecta o guidão ao quadro é o avanço",
    "O nome da peça onde você senta ao andar de bicicleta é o selim ou banco",
    "As letras BMX representam Bicycle Motocross",
    "O tipo de bicicleta projetado principalmente para uso em estradas pavimentadas é a bicicleta de estrada (ou road bike)",
    "A peça que conecta o pedal à roda traseira de uma bicicleta é o pedivela",
    "O nome dado às bicicletas que possuem um motor elétrico auxiliar para ajudar na pedalada é bicicleta elétrica (ou e-bike)",

];
for (let i = 0; i < perguntas.length; i++) {
    let respostas = prompt(perguntas[i]);
    if (respostas.toLowerCase() == respostas[i]) {
        total++;
    }
}
document.write("<p>Você acertou " + total + " de " + perguntas.length + " perguntas.</p>");